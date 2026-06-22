import crypto from "node:crypto";
import pg from "pg";

const { Pool } = pg;

let pool;
let schemaReady;

const PAYMENT_PLANS = {
  "1m": { id: "1m", months: 1, amount: 149000, nameVi: "1 Tháng", nameZh: "1 个月" },
  "3m": { id: "3m", months: 3, amount: 399000, nameVi: "3 Tháng", nameZh: "3 个月" },
  "6m": { id: "6m", months: 6, amount: 699000, nameVi: "6 Tháng", nameZh: "6 个月" },
};

function env(name) {
  return globalThis.Netlify?.env?.get(name) || process.env[name] || "";
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function apiError(message, status = 500) {
  const error = new Error(typeof message === "string" ? message : message?.error || "Lỗi server.");
  error.status = status;
  error.payload = typeof message === "string" ? { error: message } : message;
  return error;
}

async function readBody(req) {
  if (req.method === "GET" || req.method === "HEAD") return {};
  return req.json().catch(() => ({}));
}

function getPool() {
  if (pool) return pool;
  const databaseUrl = env("DATABASE_URL");
  if (!databaseUrl) {
    throw apiError("DATABASE_URL chưa được cấu hình trên Netlify.", 503);
  }
  pool = new Pool({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
  });
  return pool;
}

async function query(text, params) {
  await ensureSchema();
  return getPool().query(text, params);
}

async function ensureSchema() {
  if (schemaReady) return schemaReady;
  schemaReady = (async () => {
    const db = getPool();
    await db.query("CREATE EXTENSION IF NOT EXISTS pgcrypto;");
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'student',
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        current_level TEXT NOT NULL DEFAULT 'HSK2',
        is_premium BOOLEAN NOT NULL DEFAULT FALSE,
        premium_until TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        last_login_at TIMESTAMPTZ
      );
    `);
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS current_level TEXT NOT NULL DEFAULT 'HSK2';");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS is_premium BOOLEAN NOT NULL DEFAULT FALSE;");
    await db.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS premium_until TIMESTAMPTZ;");
    await db.query(`
      CREATE TABLE IF NOT EXISTS payment_orders (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        plan_id TEXT NOT NULL,
        amount INTEGER NOT NULL,
        transfer_code TEXT NOT NULL UNIQUE,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        paid_at TIMESTAMPTZ,
        expires_at TIMESTAMPTZ NOT NULL
      );
    `);
    await db.query("CREATE INDEX IF NOT EXISTS idx_payment_orders_user_id ON payment_orders(user_id);");
    await db.query("CREATE INDEX IF NOT EXISTS idx_payment_orders_transfer_code ON payment_orders(transfer_code);");
    await db.query("CREATE INDEX IF NOT EXISTS idx_payment_orders_status ON payment_orders(status);");
    await db.query(`
      CREATE TABLE IF NOT EXISTS sepay_webhook_events (
        sepay_id BIGINT PRIMARY KEY,
        order_id UUID REFERENCES payment_orders(id) ON DELETE SET NULL,
        payload JSONB NOT NULL,
        processed BOOLEAN NOT NULL DEFAULT FALSE,
        received_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
  })();
  return schemaReady;
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(password, salt, 120000, 64, "sha512").toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  const [salt, hash] = String(storedHash || "").split(":");
  if (!salt || !hash) return false;
  const expected = Buffer.from(hashPassword(password, salt));
  const actual = Buffer.from(storedHash);
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}

function publicUser(row) {
  const premiumUntil = row.premium_until ? new Date(row.premium_until) : null;
  const isPremium = Boolean(row.is_premium && (!premiumUntil || premiumUntil.getTime() > Date.now()));
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    role: row.role,
    isActive: row.is_active,
    currentLevel: row.current_level || "HSK2",
    isPremium,
    plan: isPremium ? "PREMIUM" : "FREE",
    premiumUntil: row.premium_until || null,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    lastLoginAt: row.last_login_at,
  };
}

function formatVnd(amount) {
  return `${amount.toLocaleString("vi-VN")}đ`;
}

function getPlan(planId) {
  return PAYMENT_PLANS[planId] || null;
}

function bankConfig() {
  return {
    bankName: env("SEPAY_BANK_NAME") || "Vietcombank",
    bankCode: env("SEPAY_BANK_CODE") || "Vietcombank",
    accountNumber: env("SEPAY_BANK_ACCOUNT"),
    accountName: env("SEPAY_BANK_ACCOUNT_NAME") || "HUAMEI EDUCATION",
    paymentPrefix: (env("SEPAY_PAYMENT_PREFIX") || "HUAMEI").toUpperCase(),
  };
}

async function assertAdmin(req) {
  const userId = req.headers.get("x-admin-user-id");
  if (!userId) throw apiError("Vui lòng đăng nhập bằng tài khoản admin.", 401);
  const result = await query("SELECT role, is_active FROM users WHERE id = $1", [userId]);
  const user = result.rows[0];
  if (user?.role !== "admin" || user?.is_active !== true) {
    throw apiError("Vui lòng đăng nhập bằng tài khoản admin.", 401);
  }
}

async function register(body) {
  const fullName = String(body.fullName || body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  if (fullName.length < 2) throw apiError("Vui lòng nhập họ và tên.", 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw apiError("Email không hợp lệ.", 400);
  if (password.length < 6) throw apiError("Mật khẩu cần tối thiểu 6 ký tự.", 400);

  try {
    const result = await query(
      `INSERT INTO users (full_name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, full_name, email, role, is_active, current_level, is_premium, premium_until, created_at, updated_at, last_login_at`,
      [fullName, email, hashPassword(password)],
    );
    return json({ user: publicUser(result.rows[0]) });
  } catch (error) {
    if (error.code === "23505") throw apiError("Email này đã được đăng ký.", 409);
    throw error;
  }
}

async function login(body) {
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const result = await query("SELECT * FROM users WHERE email = $1", [email]);
  const user = result.rows[0];
  if (!user || !verifyPassword(password, user.password_hash)) {
    throw apiError("Email hoặc mật khẩu không đúng.", 401);
  }
  if (!user.is_active) throw apiError("Tài khoản đã bị khóa.", 403);
  const updated = await query(
    `UPDATE users SET last_login_at = NOW(), updated_at = NOW()
     WHERE id = $1
     RETURNING id, full_name, email, role, is_active, current_level, is_premium, premium_until, created_at, updated_at, last_login_at`,
    [user.id],
  );
  return json({ user: publicUser(updated.rows[0]) });
}

async function listUsers(req) {
  await assertAdmin(req);
  const result = await query(
    `SELECT id, full_name, email, role, is_active, current_level, is_premium, premium_until, created_at, updated_at, last_login_at
     FROM users
     ORDER BY created_at DESC`,
  );
  return json({ users: result.rows.map(publicUser) });
}

async function updateUser(req, id, body) {
  await assertAdmin(req);
  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const role = String(body.role || "student").trim();
  const isActive = body.isActive === true;
  const currentLevel = String(body.currentLevel || "HSK2").trim().toUpperCase();
  if (!fullName || !email) throw apiError("Tên và email không được để trống.", 400);
  const result = await query(
    `UPDATE users
     SET full_name = $1, email = $2, role = $3, is_active = $4, current_level = $5, updated_at = NOW()
     WHERE id = $6
     RETURNING id, full_name, email, role, is_active, current_level, is_premium, premium_until, created_at, updated_at, last_login_at`,
    [fullName, email, role, isActive, currentLevel, id],
  );
  if (!result.rows[0]) throw apiError("Không tìm thấy user.", 404);
  return json({ user: publicUser(result.rows[0]) });
}

async function deleteUser(req, id) {
  await assertAdmin(req);
  const result = await query("DELETE FROM users WHERE id = $1", [id]);
  if (result.rowCount === 0) throw apiError("Không tìm thấy user.", 404);
  return json({ ok: true });
}

function listPlans() {
  const config = bankConfig();
  return json({
    plans: Object.values(PAYMENT_PLANS).map((plan) => ({
      id: plan.id,
      months: plan.months,
      amount: plan.amount,
      priceLabel: formatVnd(plan.amount),
      nameVi: plan.nameVi,
      nameZh: plan.nameZh,
    })),
    bankConfigured: Boolean(config.accountNumber),
  });
}

function buildQrImageUrl(account, bank, amount, description) {
  const params = new URLSearchParams({
    acc: account,
    bank,
    amount: String(amount),
    des: description.replace(/[^a-zA-Z0-9 ]/g, "").trim(),
    template: "compact",
  });
  return `https://qr.sepay.vn/img?${params.toString()}`;
}

async function createOrder(body) {
  const userId = String(body.userId || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const planId = String(body.planId || "").trim();
  if (!userId || !email || !planId) throw apiError({ error: "Thiếu thông tin tạo đơn thanh toán." }, 400);
  const plan = getPlan(planId);
  if (!plan) throw apiError({ error: "Gói thanh toán không hợp lệ." }, 400);
  const config = bankConfig();
  if (!config.accountNumber) {
    throw apiError({ error: "Chưa cấu hình tài khoản ngân hàng SePay trên server." }, 503);
  }

  const userResult = await query("SELECT id, email, is_active FROM users WHERE id = $1", [userId]);
  const user = userResult.rows[0];
  if (!user) throw apiError({ error: "Không tìm thấy tài khoản." }, 404);
  if (String(user.email).toLowerCase() !== email) throw apiError({ error: "Thông tin tài khoản không khớp." }, 403);
  if (!user.is_active) throw apiError({ error: "Tài khoản đã bị khóa." }, 403);

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const transferCode = `${config.paymentPrefix}${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
    try {
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const result = await query(
        `INSERT INTO payment_orders (user_id, plan_id, amount, transfer_code, expires_at)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, user_id, plan_id, amount, transfer_code, status, created_at, expires_at`,
        [userId, plan.id, plan.amount, transferCode, expiresAt.toISOString()],
      );
      const order = result.rows[0];
      return json({
        order: {
          id: order.id,
          planId: order.plan_id,
          amount: order.amount,
          amountLabel: formatVnd(order.amount),
          transferCode: order.transfer_code,
          status: order.status,
          expiresAt: order.expires_at,
          planNameVi: plan.nameVi,
          planNameZh: plan.nameZh,
        },
        bank: {
          bankName: config.bankName,
          accountNumber: config.accountNumber,
          accountName: config.accountName,
        },
        qrImageUrl: buildQrImageUrl(config.accountNumber, config.bankCode, plan.amount, transferCode),
      });
    } catch (error) {
      if (error.code !== "23505") throw error;
    }
  }
  throw apiError({ error: "Không thể tạo mã thanh toán, vui lòng thử lại." }, 500);
}

async function orderStatus(orderId, userId) {
  const result = await query(
    `SELECT o.*, u.email
     FROM payment_orders o
     JOIN users u ON u.id = o.user_id
     WHERE o.id = $1`,
    [orderId],
  );
  const order = result.rows[0];
  if (!order) throw apiError({ error: "Không tìm thấy đơn thanh toán." }, 404);
  if (userId && order.user_id !== userId) throw apiError({ error: "Không có quyền xem đơn này." }, 403);
  if (order.status === "pending" && order.expires_at && new Date(order.expires_at) < new Date()) {
    await query("UPDATE payment_orders SET status = 'expired' WHERE id = $1 AND status = 'pending'", [orderId]);
    order.status = "expired";
  }
  const userPremium = await query("SELECT is_premium, premium_until FROM users WHERE id = $1", [order.user_id]);
  return json({
    order: {
      id: order.id,
      status: order.status,
      transferCode: order.transfer_code,
      amount: order.amount,
      paidAt: order.paid_at,
      expiresAt: order.expires_at,
    },
    premium: {
      isPremium: userPremium.rows[0]?.is_premium || false,
      premiumUntil: userPremium.rows[0]?.premium_until || null,
    },
  });
}

function verifyWebhookAuthorization(req) {
  const apiKey = env("SEPAY_WEBHOOK_API_KEY");
  if (!apiKey) return env("NODE_ENV") !== "production";
  const authorization = req.headers.get("authorization");
  if (!authorization) return false;
  const expected = `Apikey ${apiKey}`;
  const provided = authorization.trim();
  return provided.length === expected.length && crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(expected));
}

async function handleSepayWebhook(req, payload) {
  if (!verifyWebhookAuthorization(req)) throw apiError({ success: false, error: "Unauthorized" }, 401);
  if (!payload?.id) throw apiError({ error: "Webhook thiếu id giao dịch." }, 400);
  const existingEvent = await query("SELECT sepay_id, processed FROM sepay_webhook_events WHERE sepay_id = $1", [payload.id]);
  if (existingEvent.rows[0]?.processed) return json({ success: true, duplicate: true });
  await query(
    `INSERT INTO sepay_webhook_events (sepay_id, payload)
     VALUES ($1, $2)
     ON CONFLICT (sepay_id) DO NOTHING`,
    [payload.id, JSON.stringify(payload)],
  );

  const amount = Number(payload.transferAmount || 0);
  if ((payload.transferType && payload.transferType !== "in") || !amount || amount <= 0) {
    await markWebhookProcessed(payload.id, null);
    return json({ success: true, ignored: true });
  }

  const order = await findOrderFromWebhook(payload);
  if (!order) {
    await markWebhookProcessed(payload.id, null);
    return json({ success: true, unmatched: true });
  }
  if (order.status === "paid") {
    await markWebhookProcessed(payload.id, order.id);
    return json({ success: true, duplicate: true });
  }
  if (amount < Number(order.amount)) {
    await markWebhookProcessed(payload.id, order.id);
    return json({ success: true, underpaid: true });
  }
  await activateOrder(order, payload.id);
  return json({ success: true, orderId: order.id });
}

async function findOrderFromWebhook(payload) {
  const prefix = bankConfig().paymentPrefix;
  const candidates = new Set();
  if (payload.code) candidates.add(String(payload.code).toUpperCase());
  const haystacks = [payload.content, payload.description].filter(Boolean).join(" ").toUpperCase();
  if (haystacks) {
    const matches = haystacks.match(new RegExp(`${prefix}[A-Z0-9]{6,}`, "g")) || [];
    matches.forEach((code) => candidates.add(code));
  }
  for (const code of candidates) {
    const result = await query(
      `SELECT * FROM payment_orders
       WHERE transfer_code = $1 AND status = 'pending'
       ORDER BY created_at DESC
       LIMIT 1`,
      [code],
    );
    if (result.rows[0]) return result.rows[0];
  }
  return null;
}

async function activateOrder(order, sepayId) {
  const plan = getPlan(order.plan_id);
  if (!plan) return;
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    const userResult = await client.query("SELECT premium_until FROM users WHERE id = $1 FOR UPDATE", [order.user_id]);
    const now = new Date();
    const currentEnd = userResult.rows[0]?.premium_until ? new Date(userResult.rows[0].premium_until) : null;
    const premiumUntil = new Date(currentEnd && currentEnd > now ? currentEnd : now);
    premiumUntil.setMonth(premiumUntil.getMonth() + plan.months);
    await client.query("UPDATE payment_orders SET status = 'paid', paid_at = NOW() WHERE id = $1 AND status = 'pending'", [order.id]);
    await client.query("UPDATE users SET is_premium = TRUE, premium_until = $2, updated_at = NOW() WHERE id = $1", [order.user_id, premiumUntil.toISOString()]);
    await client.query("UPDATE sepay_webhook_events SET processed = TRUE, order_id = $2 WHERE sepay_id = $1", [sepayId, order.id]);
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

async function markWebhookProcessed(sepayId, orderId) {
  await query(
    `UPDATE sepay_webhook_events
     SET processed = TRUE, order_id = COALESCE($2, order_id)
     WHERE sepay_id = $1`,
    [sepayId, orderId],
  );
}

async function route(req) {
  const url = new URL(req.url);
  const path = url.pathname.replace(/^\/\.netlify\/functions\/api/, "/api");
  const body = await readBody(req);

  if (req.method === "POST" && path === "/api/register") return register(body);
  if (req.method === "POST" && path === "/api/login") return login(body);
  if (req.method === "GET" && path === "/api/admin/users") return listUsers(req);
  const adminUserMatch = path.match(/^\/api\/admin\/users\/([^/]+)$/);
  if (adminUserMatch && req.method === "PATCH") return updateUser(req, decodeURIComponent(adminUserMatch[1]), body);
  if (adminUserMatch && req.method === "DELETE") return deleteUser(req, decodeURIComponent(adminUserMatch[1]));
  if (req.method === "GET" && path === "/api/payments/plans") return listPlans();
  if (req.method === "POST" && path === "/api/payments/orders") return createOrder(body);
  const orderStatusMatch = path.match(/^\/api\/payments\/orders\/([^/]+)\/status$/);
  if (orderStatusMatch && req.method === "GET") return orderStatus(decodeURIComponent(orderStatusMatch[1]), url.searchParams.get("userId") || undefined);
  if (req.method === "POST" && path === "/api/webhooks/sepay") return handleSepayWebhook(req, body);
  throw apiError("API route không tồn tại.", 404);
}

export default async function handler(req) {
  if (req.method === "OPTIONS") return new Response(null, { status: 204 });
  try {
    return await route(req);
  } catch (error) {
    console.error(error);
    return json(error.payload || { error: error.message || "Lỗi server." }, error.status || 500);
  }
}

export const config = {
  path: "/api/*",
};

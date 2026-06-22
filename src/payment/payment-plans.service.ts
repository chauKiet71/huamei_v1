import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { DEFAULT_PAYMENT_PLANS, PaymentPlan, formatVnd } from './payment-plans';

export interface AdminPaymentPlan extends PaymentPlan {
  isActive: boolean;
  sortOrder: number;
  buyerCount: number;
  priceLabel: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class PaymentPlansService {
  constructor(private readonly db: DatabaseService) {}

  private mapRow(row: any): AdminPaymentPlan {
    return {
      id: row.id,
      months: Number(row.months),
      amount: Number(row.amount),
      nameVi: row.name_vi,
      nameZh: row.name_zh,
      isActive: row.is_active,
      sortOrder: Number(row.sort_order),
      buyerCount: Number(row.buyer_count || 0),
      priceLabel: formatVnd(Number(row.amount)),
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  async getPlan(planId: string): Promise<PaymentPlan | null> {
    const result = await this.db.query(
      `SELECT id, months, amount, name_vi, name_zh
       FROM payment_plans
       WHERE id = $1 AND is_active = TRUE`,
      [planId],
    );
    return this.mapPlanRow(result.rows[0]);
  }

  async getPlanById(planId: string): Promise<PaymentPlan | null> {
    const result = await this.db.query(
      `SELECT id, months, amount, name_vi, name_zh
       FROM payment_plans
       WHERE id = $1`,
      [planId],
    );
    return this.mapPlanRow(result.rows[0]);
  }

  private mapPlanRow(row: any): PaymentPlan | null {
    if (!row) return null;
    return {
      id: row.id,
      months: Number(row.months),
      amount: Number(row.amount),
      nameVi: row.name_vi,
      nameZh: row.name_zh,
    };
  }

  async listActivePlans() {
    const result = await this.db.query(
      `SELECT id, months, amount, name_vi, name_zh, sort_order
       FROM payment_plans
       WHERE is_active = TRUE
       ORDER BY sort_order ASC, created_at ASC`,
    );
    return result.rows.map((row) => ({
      id: row.id,
      months: Number(row.months),
      amount: Number(row.amount),
      sortOrder: Number(row.sort_order),
      priceLabel: formatVnd(Number(row.amount)),
      nameVi: row.name_vi,
      nameZh: row.name_zh,
    }));
  }

  async listAllPlans(): Promise<AdminPaymentPlan[]> {
    const result = await this.db.query(
      `SELECT p.*,
              COUNT(o.id) FILTER (WHERE o.status = 'paid') AS buyer_count
       FROM payment_plans p
       LEFT JOIN payment_orders o ON o.plan_id = p.id
       GROUP BY p.id
       ORDER BY p.sort_order ASC, p.created_at ASC`,
    );
    return result.rows.map((row) => this.mapRow(row));
  }

  async createPlan(body: {
    id: string;
    months: number;
    amount: number;
    nameVi: string;
    nameZh: string;
    isActive?: boolean;
    sortOrder?: number;
  }) {
    const id = String(body.id || '').trim().toLowerCase();
    const months = Number(body.months);
    const amount = Number(body.amount);
    const nameVi = String(body.nameVi || '').trim();
    const nameZh = String(body.nameZh || '').trim();
    const isActive = body.isActive !== false;
    const sortOrder = Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0;

    if (!/^[a-z0-9_-]{2,20}$/.test(id)) {
      throw new HttpException('Mã gói phải từ 2–20 ký tự (chữ thường, số, gạch ngang).', HttpStatus.BAD_REQUEST);
    }
    if (!Number.isInteger(months) || months < 1) {
      throw new HttpException('Số tháng phải là số nguyên dương.', HttpStatus.BAD_REQUEST);
    }
    if (!Number.isInteger(amount) || amount < 1000) {
      throw new HttpException('Giá gói phải từ 1.000 VNĐ trở lên.', HttpStatus.BAD_REQUEST);
    }
    if (!nameVi || !nameZh) {
      throw new HttpException('Tên gói (Việt/Trung) không được để trống.', HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.db.query(
        `INSERT INTO payment_plans (id, months, amount, name_vi, name_zh, is_active, sort_order)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING *, 0 AS buyer_count`,
        [id, months, amount, nameVi, nameZh, isActive, sortOrder],
      );
      return { plan: this.mapRow(result.rows[0]) };
    } catch (error: any) {
      if (error.code === '23505') {
        throw new HttpException('Mã gói đã tồn tại.', HttpStatus.CONFLICT);
      }
      throw new HttpException(error.message || 'Không thể tạo gói.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updatePlan(
    id: string,
    body: {
      months?: number;
      amount?: number;
      nameVi?: string;
      nameZh?: string;
      isActive?: boolean;
      sortOrder?: number;
    },
  ) {
    const existing = await this.db.query('SELECT id FROM payment_plans WHERE id = $1', [id]);
    if (!existing.rows[0]) {
      throw new HttpException('Không tìm thấy gói.', HttpStatus.NOT_FOUND);
    }

    const months = body.months !== undefined ? Number(body.months) : undefined;
    const amount = body.amount !== undefined ? Number(body.amount) : undefined;
    const nameVi = body.nameVi !== undefined ? String(body.nameVi).trim() : undefined;
    const nameZh = body.nameZh !== undefined ? String(body.nameZh).trim() : undefined;
    const isActive = body.isActive;
    const sortOrder = body.sortOrder !== undefined ? Number(body.sortOrder) : undefined;

    if (months !== undefined && (!Number.isInteger(months) || months < 1)) {
      throw new HttpException('Số tháng phải là số nguyên dương.', HttpStatus.BAD_REQUEST);
    }
    if (amount !== undefined && (!Number.isInteger(amount) || amount < 1000)) {
      throw new HttpException('Giá gói phải từ 1.000 VNĐ trở lên.', HttpStatus.BAD_REQUEST);
    }
    if (nameVi !== undefined && !nameVi) {
      throw new HttpException('Tên tiếng Việt không được để trống.', HttpStatus.BAD_REQUEST);
    }
    if (nameZh !== undefined && !nameZh) {
      throw new HttpException('Tên tiếng Trung không được để trống.', HttpStatus.BAD_REQUEST);
    }

    const result = await this.db.query(
      `UPDATE payment_plans
       SET months = COALESCE($2, months),
           amount = COALESCE($3, amount),
           name_vi = COALESCE($4, name_vi),
           name_zh = COALESCE($5, name_zh),
           is_active = COALESCE($6, is_active),
           sort_order = COALESCE($7, sort_order),
           updated_at = NOW()
       WHERE id = $1
       RETURNING *`,
      [id, months ?? null, amount ?? null, nameVi ?? null, nameZh ?? null, isActive ?? null, sortOrder ?? null],
    );

    const buyerCount = await this.db.query(
      `SELECT COUNT(*)::int AS buyer_count
       FROM payment_orders
       WHERE plan_id = $1 AND status = 'paid'`,
      [id],
    );

    return {
      plan: this.mapRow({
        ...result.rows[0],
        buyer_count: buyerCount.rows[0]?.buyer_count || 0,
      }),
    };
  }

  async deletePlan(id: string) {
    const orders = await this.db.query(
      `SELECT COUNT(*)::int AS total FROM payment_orders WHERE plan_id = $1`,
      [id],
    );
    if (Number(orders.rows[0]?.total || 0) > 0) {
      throw new HttpException(
        'Không thể xóa gói đã có giao dịch. Hãy chuyển trạng thái sang "Tạm ẩn".',
        HttpStatus.CONFLICT,
      );
    }

    const result = await this.db.query('DELETE FROM payment_plans WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      throw new HttpException('Không tìm thấy gói.', HttpStatus.NOT_FOUND);
    }
    return { ok: true };
  }

  static seedPlansSql() {
    const values = DEFAULT_PAYMENT_PLANS.map(
      (plan, index) =>
        `('${plan.id}', ${plan.months}, ${plan.amount}, '${plan.nameVi.replace(/'/g, "''")}', '${plan.nameZh.replace(/'/g, "''")}', TRUE, ${index + 1})`,
    ).join(',\n        ');
    return `
      INSERT INTO payment_plans (id, months, amount, name_vi, name_zh, is_active, sort_order)
      VALUES
        ${values}
      ON CONFLICT (id) DO NOTHING;
    `;
  }
}

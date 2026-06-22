const addPlanBtn = document.querySelector("#addPlanBtn");
const downloadCsvBtn = document.querySelector("#downloadCsvBtn");
const planDialog = document.querySelector("#planDialog");
const planDialogForm = document.querySelector("#planDialogForm");
const planTableBody = document.querySelector("#planTableBody");
const planDialogTitle = document.querySelector("#planDialogTitle");
const planIdInput = document.querySelector("#planIdInput");
const planNameViInput = document.querySelector("#planNameViInput");
const planNameZhInput = document.querySelector("#planNameZhInput");
const planMonthsInput = document.querySelector("#planMonthsInput");
const planAmountInput = document.querySelector("#planAmountInput");
const planStatusSelect = document.querySelector("#planStatusSelect");
const planSortInput = document.querySelector("#planSortInput");
const toast = document.querySelector("#toast");
const activePlansMetric = document.querySelector("#activePlansMetric");

let editingPlanId = null;
let plans = [];

function getAdminUserId() {
  try {
    const user = JSON.parse(localStorage.getItem("v2-user") || "null");
    return user?.role === "admin" ? user.id : "";
  } catch {
    return "";
  }
}

function formatAmount(value) {
  return Number(value || 0).toLocaleString("vi-VN");
}

function parseAmount(value) {
  return Number(String(value || "").replace(/[^\d]/g, ""));
}

function showToast(message, isError = false) {
  toast.textContent = message;
  toast.classList.toggle("error", isError);
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

async function apiRequest(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error
      || (Array.isArray(data.message) ? data.message[0] : data.message)
      || "Không thể kết nối server.";
    throw new Error(message);
  }
  return data;
}

function adminHeaders() {
  const adminUserId = getAdminUserId();
  if (!adminUserId) {
    throw new Error("Vui lòng đăng nhập bằng tài khoản admin.");
  }
  return { "X-Admin-User-Id": adminUserId };
}

function planBadge(months) {
  const value = Number(months) || 0;
  if (value >= 12) return `${Math.round(value / 12)}Y`;
  return `${value}M`;
}

function renderPlans() {
  if (!planTableBody) return;

  if (!plans.length) {
    planTableBody.innerHTML = `
      <div class="plan-row plan-empty" role="row">
        <span role="cell">Chưa có gói dịch vụ nào. Nhấn "Thêm gói mới" để tạo.</span>
      </div>
    `;
    return;
  }

  planTableBody.innerHTML = plans.map((plan) => `
    <div class="plan-row" role="row" data-plan-id="${escapeHtml(plan.id)}">
      <span class="plan-name" role="cell">
        <i>${escapeHtml(planBadge(plan.months))}</i>
        ${escapeHtml(plan.nameVi)}
      </span>
      <span role="cell">${formatAmount(plan.amount)}</span>
      <span role="cell">${formatAmount(plan.buyerCount || 0)}</span>
      <span role="cell">
        <mark class="${plan.isActive ? "" : "inactive"}">${plan.isActive ? "Đang bán" : "Tạm ẩn"}</mark>
      </span>
      <span class="plan-actions" role="cell">
        <button class="icon-action edit-plan-btn" type="button" aria-label="Sửa ${escapeHtml(plan.nameVi)}">✎</button>
        <button class="icon-action delete delete-plan-btn" type="button" aria-label="Xóa ${escapeHtml(plan.nameVi)}">🗑</button>
      </span>
    </div>
  `).join("");

  if (activePlansMetric) {
    activePlansMetric.textContent = String(plans.filter((plan) => plan.isActive).length);
  }
  const totalPlansMetric = document.querySelector("#totalPlansMetric");
  if (totalPlansMetric) {
    totalPlansMetric.textContent = String(plans.length);
  }
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function openPlanDialog(plan = null) {
  editingPlanId = plan?.id || null;
  if (planDialogTitle) {
    planDialogTitle.textContent = plan ? "Chỉnh sửa gói" : "Thêm gói mới";
  }
  if (planIdInput) {
    planIdInput.value = plan?.id || "";
    planIdInput.disabled = Boolean(plan);
  }
  if (planNameViInput) planNameViInput.value = plan?.nameVi || "";
  if (planNameZhInput) planNameZhInput.value = plan?.nameZh || "";
  if (planMonthsInput) planMonthsInput.value = plan?.months ?? "";
  if (planAmountInput) planAmountInput.value = plan ? formatAmount(plan.amount) : "";
  if (planStatusSelect) planStatusSelect.value = plan?.isActive === false ? "hidden" : "active";
  if (planSortInput) planSortInput.value = plan?.sortOrder ?? plans.length + 1;

  if (typeof planDialog?.showModal === "function") {
    planDialog.showModal();
  }
}

async function loadPlans() {
  try {
    const data = await apiRequest("/api/admin/plans", {
      headers: adminHeaders(),
    });
    plans = data.plans || [];
    renderPlans();
  } catch (error) {
    showToast(error.message, true);
    plans = [];
    renderPlans();
  }
}

async function savePlan(event) {
  event.preventDefault();

  const payload = {
    id: planIdInput?.value.trim().toLowerCase() || "",
    nameVi: planNameViInput?.value.trim() || "",
    nameZh: planNameZhInput?.value.trim() || "",
    months: Number(planMonthsInput?.value || 0),
    amount: parseAmount(planAmountInput?.value),
    isActive: planStatusSelect?.value !== "hidden",
    sortOrder: Number(planSortInput?.value || 0),
  };

  try {
    if (editingPlanId) {
      await apiRequest(`/api/admin/plans/${encodeURIComponent(editingPlanId)}`, {
        method: "PATCH",
        headers: adminHeaders(),
        body: JSON.stringify(payload),
      });
      showToast("Đã cập nhật gói đăng ký.");
    } else {
      await apiRequest("/api/admin/plans", {
        method: "POST",
        headers: adminHeaders(),
        body: JSON.stringify(payload),
      });
      showToast("Đã thêm gói mới.");
    }
    planDialog?.close();
    await loadPlans();
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deletePlan(planId) {
  const plan = plans.find((item) => item.id === planId);
  if (!plan) return;
  if (!window.confirm(`Xóa gói "${plan.nameVi}"?`)) return;

  try {
    await apiRequest(`/api/admin/plans/${encodeURIComponent(planId)}`, {
      method: "DELETE",
      headers: adminHeaders(),
    });
    showToast("Đã xóa gói.");
    await loadPlans();
  } catch (error) {
    showToast(error.message, true);
  }
}

addPlanBtn?.addEventListener("click", () => openPlanDialog());

document.querySelector(".dialog-close")?.addEventListener("click", () => planDialog?.close());

planDialogForm?.addEventListener("submit", savePlan);

planTableBody?.addEventListener("click", (event) => {
  const editBtn = event.target.closest(".edit-plan-btn");
  if (editBtn) {
    const row = editBtn.closest("[data-plan-id]");
    const plan = plans.find((item) => item.id === row?.dataset.planId);
    if (plan) openPlanDialog(plan);
    return;
  }

  const deleteBtn = event.target.closest(".delete-plan-btn");
  if (deleteBtn) {
    const row = deleteBtn.closest("[data-plan-id]");
    if (row?.dataset.planId) deletePlan(row.dataset.planId);
  }
});

downloadCsvBtn?.addEventListener("click", () => {
  const csv = [
    "Ma goi,Ten goi,Thang,Gia VND,Trang thai,Nguoi mua",
    ...plans.map((plan) => [
      plan.id,
      plan.nameVi,
      plan.months,
      plan.amount,
      plan.isActive ? "Dang ban" : "Tam an",
      plan.buyerCount || 0,
    ].join(",")),
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "danh-sach-goi-dich-vu.csv";
  anchor.click();
  URL.revokeObjectURL(url);
  showToast("Đã tải danh sách gói (CSV)");
});

loadPlans();

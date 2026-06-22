export interface PaymentPlan {
  id: string;
  months: number;
  amount: number;
  nameVi: string;
  nameZh: string;
}

export const PAYMENT_PLANS: Record<string, PaymentPlan> = {
  '1m': {
    id: '1m',
    months: 1,
    amount: 149000,
    nameVi: '1 Tháng',
    nameZh: '1 个月',
  },
  '3m': {
    id: '3m',
    months: 3,
    amount: 399000,
    nameVi: '3 Tháng',
    nameZh: '3 个月',
  },
  '6m': {
    id: '6m',
    months: 6,
    amount: 699000,
    nameVi: '6 Tháng',
    nameZh: '6 个月',
  },
};

export function getPlan(planId: string): PaymentPlan | null {
  return PAYMENT_PLANS[planId] || null;
}

export function formatVnd(amount: number): string {
  return `${amount.toLocaleString('vi-VN')}đ`;
}

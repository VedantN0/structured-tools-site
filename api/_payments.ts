// api/_payments.ts
export type PaymentRecord = {
  orderId: string;
  productId: string;
  paid: boolean;
};

export const payments = new Map<string, PaymentRecord>();

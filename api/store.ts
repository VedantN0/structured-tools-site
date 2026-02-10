// api/store.ts

type OrderRecord = {
  orderId: string;
  productId: string;
  paid: boolean;
};

const orders = new Map<string, OrderRecord>();

export function createOrder(orderId: string, productId: string) {
  orders.set(orderId, {
    orderId,
    productId,
    paid: false,
  });
}

export function markOrderPaid(orderId: string) {
  const record = orders.get(orderId);
  if (record) {
    record.paid = true;
    orders.set(orderId, record);
  }
}

export function hasAccess(orderId: string) {
  const record = orders.get(orderId);
  return record?.paid === true;
}

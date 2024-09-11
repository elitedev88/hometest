import { Order, LineItem, Product } from "@/types";

export function groupProductsById(
  orders: Order[],
  lineItems: LineItem[],
  products: Product[]
) {
  const productCount: { [key: number]: number } = {};

  orders.forEach((order) => {
    order.lineItems.forEach((lineItemId) => {
      const lineItem = lineItems.find((item) => item.id === lineItemId);
      if (lineItem) {
        lineItem.products.forEach((productId) => {
          productCount[productId] = (productCount[productId] || 0) + 1;
        });
      }
    });
  });

  return productCount;
}

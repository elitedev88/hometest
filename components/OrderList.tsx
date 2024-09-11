import { Order } from "@/types";
import giftBoxes from "@/data/giftBoxes.json";
import productList from "@/data/products.json";

export default function OrderList({
  orders,
  selectedDate,
}: {
  orders: Order[];
  selectedDate: string;
}) {
  const filterdOrders = orders.filter(
    (item) => item.orderDate === selectedDate
  );
  return filterdOrders && filterdOrders.length > 0 ? (
    <ul>
      {filterdOrders.map((order: Order, index) => (
        <li key={order.id}>
          <p className="font-bold pl-4">
            Order {index + 1} - Order Date: {order.orderDate}
          </p>
          <div className="pl-8">
            <ul>
              {order.lineItems.map((itemId: number) => {
                const giftBox = giftBoxes.find((item) => item.id === itemId);
                const products = productList.filter(
                  (product) => product.lineItemsId === itemId
                );
                return (
                  <li key={itemId}>
                    <div className="text-red-400">{giftBox?.name}</div>
                    <div className="pl-4">
                      <ul>
                        {products.map((product) => (
                          <li key={product.id}>
                            {product.productName} - ${product.price}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p>Ships to</p>
            <p className="font-bold pl-4 pb-4 text-blue-500">
              {order.customerName}, {order.shippingAddress}
            </p>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <div className="p-8">No orders were found.</div>
  );
}

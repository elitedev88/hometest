"use client";

import { useState, useEffect } from "react";
import { groupProductsById } from "@/utils";
import { Order } from "@/types";
import orders from "@/data/orders.json";
import giftBoxes from "@/data/giftBoxes.json";
import products from "@/data/products.json";

export const OrderedProducts = ({ selectedDate }: { selectedDate: string }) => {
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [productCounts, setProductCounts] = useState<{ [key: number]: number }>(
    {}
  );

  useEffect(() => {
    const filtered = selectedDate
      ? orders.filter((order) => order.orderDate === selectedDate)
      : orders;

    const groupedProducts = groupProductsById(filtered, giftBoxes, products);
    setFilteredOrders(filtered);
    setProductCounts(groupedProducts);
  }, [selectedDate]);
  return filteredOrders.length > 0 ? (
    <>
      <div className="text-lg text-blue-500 py-2">
        Product for {selectedDate || "All Dates"}:
      </div>
      <div className="pl-4">
        <ul>
          {Object.keys(productCounts).map((productId) => {
            const product = products.find((p) => p.id === parseInt(productId));
            return (
              <li key={productId}>
                {product?.productName}: {productCounts[parseInt(productId)]}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="text-lg text-blue-500 py-2">Filtered Orders:</div>
      <div className="pl-4">
        <ul>
          {filteredOrders.map((order) => (
            <li key={order.id}>
              Order #{order.id} - Order Date: {order.orderDate} Total: $
              {order.orderTotal}
            </li>
          ))}
        </ul>
      </div>
    </>
  ) : (
    <div className="p-4">No orders were found.</div>
  );
};

"use client";

import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import OrderList from "@/components/OrderList";
import { Order } from "@/types";

async function getOrders() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }
  return res.json();
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const fetchedOrders = await getOrders();
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }
    fetchOrders();
  }, []);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center p-4 text-xl">
        <BackButton />
        <div className="px-4">Your Orders</div>
        <input
          type="date"
          value={selectedDate}
          className="p-2 border-2 border-blue-300 rounded-md"
          onChange={handleDateChange}
        />
      </div>
      <OrderList orders={orders} selectedDate={selectedDate} />
    </div>
  );
}

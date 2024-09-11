"use client";

import { useState, useEffect } from "react";
import BackButton from "@/components/BackButton";
import { OrderedProducts } from "@/components/OrderedProducts";

export default function OrderedProductPage() {
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between text-xl w-full gap-4">
        <BackButton />
        Ordered Products
        <input
          type="date"
          value={selectedDate}
          className="p-2 border-2 border-blue-300 rounded-md"
          onChange={handleDateChange}
        />
      </div>
      <OrderedProducts selectedDate={selectedDate} />
    </div>
  );
}

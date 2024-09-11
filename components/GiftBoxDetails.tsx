"use client";

import BackButton from "./BackButton";
import { Product, GiftBox } from "@/types";

export default function GiftBoxDetails({ box }: { box: GiftBox }) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <BackButton />
        <div className="text-xl">Gift Box Details</div>
      </div>
      <div className="flex py-2 text-lg gap-4">
        <p className="text-red-400 font-bold">{box.name}</p>
        <p>(Total: ${box.price})</p>
      </div>
      {box.products.map((item: Product) => {
        return (
          <div key={item.id} className="flex px-2 py-2 justify-between md:w-96">
            <p className="font-bold">{item.productName}</p>
            <p>${item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

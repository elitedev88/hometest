import Link from "next/link";
import { LineItem } from "@/types";

export default function GiftBoxList({ giftBoxes }: { giftBoxes: LineItem[] }) {
  return (
    <div>
      <div className="text-xl pb-4">Gift Boxes Available</div>
      {giftBoxes.map((box: LineItem) => (
        <div key={box.id} className="flex px-2 py-2 justify-between w-64">
          <Link
            href={`/boxes/${box.id}`}
            className="text-blue-500 hover:underline no-underline"
          >
            {box.name}
          </Link>
          <p>Price: ${box.price}</p>
        </div>
      ))}
    </div>
  );
}

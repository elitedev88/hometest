import { NextResponse } from "next/server";
import giftBoxes from "@/data/giftBoxes.json";
import productList from "@/data/products.json";

export async function GET(
  req: Request,
  { params }: { params: { boxId: string } }
) {
  const { boxId } = params;
  const temp = giftBoxes.find((item) => item.id === parseInt(boxId));
  const products = productList.filter(
    (product) => product.lineItemsId === parseInt(boxId)
  );
  const box = {
    ...temp,
    products,
  };

  if (!box) {
    return NextResponse.json({ error: "Gift Box not found" }, { status: 404 });
  }

  return NextResponse.json(box);
}

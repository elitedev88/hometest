import { NextResponse } from "next/server";
import giftBoxes from "@/data/giftBoxes.json";

export async function GET() {
  return NextResponse.json(giftBoxes);
}

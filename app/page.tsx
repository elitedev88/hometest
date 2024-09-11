import GiftBoxList from "@/components/GiftBoxList";

async function getGiftBoxes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/boxes`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch gift boxes");
  }
  return res.json();
}

export default async function HomePage() {
  const giftBoxes = await getGiftBoxes();

  return (
    <main className="flex">
      <GiftBoxList giftBoxes={giftBoxes} />
    </main>
  );
}

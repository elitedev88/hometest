import GiftBoxDetails from "@/components/GiftBoxDetails";

async function getGiftBox(boxId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/boxes/${boxId}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch the gift box details");
  }
  return res.json();
}

export default async function GiftBoxPage({
  params,
}: {
  params: { boxId: string };
}) {
  const box = await getGiftBox(params.boxId);

  return (
    <main>
      <GiftBoxDetails box={box} />
    </main>
  );
}

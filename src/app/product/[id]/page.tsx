import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  if (!id) return notFound();
  return (
    <main className="mx-auto max-w-screen-sm min-h-[100svh] pb-16 p-4">
      <h1 className="text-lg font-semibold mb-2">Product</h1>
      <p className="text-sm text-gray-600">ID: {id}</p>
    </main>
  );
}

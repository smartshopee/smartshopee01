import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!slug) return notFound();
  return (
    <main className="mx-auto max-w-screen-sm min-h-[100svh] pb-16 p-4">
      <h1 className="text-lg font-semibold mb-2 capitalize">{slug} Products</h1>
      <p className="text-sm text-gray-600">Category listing will render here.</p>
    </main>
  );
}

import Image from "next/image";
import type { Product } from "@/types/database";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.media_urls?.[0] || "/next.svg";
  return (
    <div className="rounded-2xl bg-white shadow-md overflow-hidden">
      <div className="relative aspect-[3/4] w-full bg-gray-100">
        <Image src={image} alt={product.title} fill sizes="(max-width:768px) 50vw, 200px" className="object-cover" />
      </div>
      <div className="p-2">
        <p className="text-sm font-semibold line-clamp-2">{product.title}</p>
        <p className="text-[#FF6A00] font-bold">₹{Number(product.price).toFixed(0)}</p>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { supabaseRest } from "@/lib/supabase/client";
import type { Product } from "@/types/database";
import ProductCard from "@/components/product-card";
import ShimmerCard from "@/components/shimmer-card";

const CATEGORIES = ["all", "electronics", "fashion", "beauty", "home", "kids"];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        const params: any = { select: "*", order: "created_at.desc", limit: 20 };
        if (active !== "all") {
          params["category"] = `ilike.*${active}*`;
        }
        const data = await supabaseRest<Product[]>("products", params);
        if (mounted) setProducts(data);
      } catch (e) {
        console.error(e);
        if (mounted) setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [active]);

  return (
    <main className="mx-auto max-w-screen-sm min-h-[100svh] pb-16">
      <section className="p-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {[1, 2, 3].map((i) => (
            <div key={i} className="min-w-[280px] h-28 rounded-2xl bg-[#007BFF] text-white flex items-center justify-center shadow-md">
              <p className="font-semibold">Big Sale {i}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full border text-sm ${active === c ? "bg-[#007BFF] text-white border-[#007BFF]" : "bg-white text-gray-700"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="p-4">
        <h2 className="text-base font-semibold mb-3">Trending products</h2>
        <div className="grid grid-cols-2 gap-3">
          {loading && Array.from({ length: 8 }).map((_, i) => <ShimmerCard key={i} />)}
          {!loading && products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </main>
  );
}

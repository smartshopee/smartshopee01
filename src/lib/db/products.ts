import { supabaseRest } from "@/lib/supabase/client";
import type { Product } from "@/types/database";

export async function fetchProducts(limit = 20): Promise<Product[]> {
  const data = await supabaseRest<Product[]>("products", {
    select: "*",
    order: "created_at.desc",
    limit,
  });
  return data || [];
}

export async function fetchTrendingProducts(limit = 20): Promise<Product[]> {
  const data = await supabaseRest<Product[]>("products", {
    select: "*",
    order: "created_at.desc",
    limit,
    trending: "eq.true",
  });
  return data || [];
}

export async function fetchProductsByCategory(category: string, limit = 40): Promise<Product[]> {
  const data = await supabaseRest<Product[]>("products", {
    select: "*",
    order: "created_at.desc",
    limit,
    category: `ilike.*${category}*`,
  });
  return data || [];
}

export async function fetchProductById(id: string): Promise<Product | null> {
  const data = await supabaseRest<Product[]>("products", {
    select: "*",
    id: `eq.${id}`,
    limit: 1,
  });
  return data?.[0] ?? null;
}

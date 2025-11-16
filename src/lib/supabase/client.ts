"use client";

export const SUPABASE_URL = (process.env.NEXT_PUBLIC_SUPABASE_URL as string) || "";
export const SUPABASE_ANON_KEY = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string) || "";

type QueryParams = Record<string, string | number | boolean | undefined>;

function toQuery(params: QueryParams) {
  const sp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined) return;
    sp.set(k, String(v));
  });
  return sp.toString();
}

export async function supabaseRest<T>(
  table: string,
  params: QueryParams
): Promise<T> {
  const query = toQuery(params);
  const url = `${SUPABASE_URL}/rest/v1/${table}${query ? `?${query}` : ""}`;
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase REST error ${res.status}: ${text}`);
  }
  return (await res.json()) as T;
}

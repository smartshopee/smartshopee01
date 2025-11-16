import { supabaseRest } from "@/lib/supabase/client";
import type { Favorite, UUID } from "@/types/database";

export async function getFavorites(userId: UUID) {
  const data = await supabaseRest<Favorite[]>("favorites", {
    select: "*",
    user_id: `eq.${userId}`,
  });
  return data || [];
}

export async function saveFavorite(userId: UUID, productId: UUID) {
  await supabaseRest<Favorite[]>("favorites", {
    // PostgREST insert via RPC/REST is more complex; for now this is a stub.
    // You can later replace this with a Supabase Edge Function or server-side call.
  });
}

export async function removeFavorite(userId: UUID, productId: UUID) {
  await supabaseRest<Favorite[]>("favorites", {
    // Similarly, implement delete via Edge Function or server-only handler.
  });
}

export type UUID = string;

export type User = {
  id: UUID;
  name: string | null;
  email: string | null;
  avatar_url: string | null;
};

export type Product = {
  id: UUID;
  title: string;
  description: string | null;
  price: number;
  category: string | null;
  media_urls: string[];
  trending: boolean;
  created_at: string;
};

export type Favorite = {
  user_id: UUID;
  product_id: UUID;
  created_at: string;
};

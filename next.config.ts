import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow external product images from Supabase Storage and placeholder service
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kavzetkudovwcctncrwk.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
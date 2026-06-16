import type { NextConfig } from "next";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: STRAPI_URL
      ? [
          {
            protocol: STRAPI_URL.startsWith("https") ? "https" : "http",
            hostname: new URL(STRAPI_URL).hostname,
            port: new URL(STRAPI_URL).port || "",
            pathname: "/uploads/**",
          },
        ]
      : [],
  },
};

export default nextConfig;

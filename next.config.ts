import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    testProxy: true,
  },
  reactStrictMode: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "everyday-eye.com",
      },
    ],
  },
};

export default nextConfig;

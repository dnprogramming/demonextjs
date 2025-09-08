import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/scripts/sitemap');
    }

    return config;
  },
};

export default nextConfig;

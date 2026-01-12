import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio', // Ensure this matches your repo name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
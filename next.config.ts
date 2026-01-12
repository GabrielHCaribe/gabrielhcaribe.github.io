import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio', // Ensure this is your repo name
  images: {
    unoptimized: true,
  },
  // @ts-ignore
  eslint: {
    ignoreDuringBuilds: true,
  },
  // @ts-ignore
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio', // Ensure this is your exact repo name
  
  // We are removing the experimental images key and 
  // nested eslint to satisfy the Next.js 16 compiler
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
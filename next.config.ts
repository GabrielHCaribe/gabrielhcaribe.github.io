/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is the most important line
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js default image optimization
  },
  // If your repo name is NOT 'username.github.io', add the line below:
  // basePath: '/your-repo-name', 
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    unoptimized: true,
    domains: [
      "user-images.githubusercontent.com",
      "cdn.hashnode.com",
      "github.com",
    ],
  },
  experimental: {
    // 🔥 Enable the new app/ directory routing
    appDir: true,
  },
};

module.exports = nextConfig;

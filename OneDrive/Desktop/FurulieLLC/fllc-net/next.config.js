/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Enable static export for deployment
  trailingSlash: true,
};

module.exports = nextConfig;

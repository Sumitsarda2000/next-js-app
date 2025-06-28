/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required to avoid Image Optimization API errors during static export
  },
};

module.exports = nextConfig;


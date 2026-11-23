/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n/request.ts');

const nextConfig = {
  // Strict mode catches subtle React bugs during development
  reactStrictMode: true,

  images: {
    // Allow Unsplash images for placeholder photography
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);

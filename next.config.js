/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n/request.ts');

const nextConfig = {
  // Strict mode catches subtle React bugs during development
  reactStrictMode: true,

  // Allow requests from your local network (for testing on phone/tablet)
  allowedDevOrigins: ['192.168.0.0/16', '10.0.0.0/8'],

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

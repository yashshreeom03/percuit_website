/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', 
  basePath: '/percuit_website',
  assetPrefix: '/percuit_website/',
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;
  
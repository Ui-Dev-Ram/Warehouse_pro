
// /** @type {import('next').NextConfig} */
// const nextConfig = {};


const config = {
  output: 'export',
    images: {
      unoptimized: true,
      domains: ['www.denofgeek.com', 'images.unsplash.com', "api.microlink.io", "127.0.0.1" /* Add other domains here if needed */],
    },
  };

export default config;
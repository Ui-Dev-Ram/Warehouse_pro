import { withNextVideo } from "next-video/process";
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const config = {
    // output: "export",
    images: {
      unoptimized: true,
      domains: ['www.denofgeek.com', 'images.unsplash.com', "api.microlink.io" /* Add other domains here if needed */],
    },
  };

export default withNextVideo(config);
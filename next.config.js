// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NODE_ENV == "production",
  },
  images: {
    domains: [
      "backend.putiton.test.crebos.online",
      "backend.putiton.accept.crebos.online",
      "cdn.jsdelivr.net",
      "flagcdn.com",
      "upload.wikimedia.org",
      "192.168.1.16",
      "192.168.1.9",
      "via.placeholder.com",
      "backend.putiton-e.com",
    ],
  },
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
};

module.exports = nextConfig;

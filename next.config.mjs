/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mayankgoyal.tech",
      },
    ],
  },
};

export default nextConfig;

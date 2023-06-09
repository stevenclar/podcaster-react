/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.mzstatic.com",
        port: "",
        pathname: "/image/thumb/**",
      },
    ],
  },
};

module.exports = nextConfig;

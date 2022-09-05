/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/query",
        destination: "http://localhost:4000",
      },
    ];
  },
};

module.exports = nextConfig;

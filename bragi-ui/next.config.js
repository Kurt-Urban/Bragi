/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/query",
        destination: "http://localhost:4000",
      },
      {
        source: "/lyrics",
        destination: "http://localhost:4000/lyrics",
      },
    ];
  },
};

module.exports = nextConfig;

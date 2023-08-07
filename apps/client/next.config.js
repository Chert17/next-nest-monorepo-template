/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: "/",
        destination: "https://localhost:5000/api",
      },
    ];
  },
};

module.exports = nextConfig;

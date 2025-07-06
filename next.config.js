/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   viewTransition: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "rcdp.sokonova22.rs",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ac.blooket.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

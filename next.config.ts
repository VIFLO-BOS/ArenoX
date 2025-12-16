/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pexels.com",
        port: "",
        pathname: "/**", // Allow all paths in Pexels
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Allow all paths in Unsplash
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**", // Allow all paths in Pexels image hosting
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**", // Allow all paths in Pinterest
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**", // Allow all paths from via.placeholder.com
      },
    ],
  },

  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev", "192.168.*.*"],
};

export default nextConfig;

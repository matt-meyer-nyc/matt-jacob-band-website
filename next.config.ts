import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/matt-jacob-band-website",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "mattjacobband.com", pathname: "/wp-content/uploads/**" }],
  },
};

export default nextConfig;

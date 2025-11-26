import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/threedive-embed-sample" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

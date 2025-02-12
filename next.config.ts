import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Correct way to enable static exports
  distDir: "out", // ✅ Ensure the build output goes to 'out'
};

export default nextConfig;

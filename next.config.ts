import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/site.mjs";

// Static export for GitHub Pages. When a custom domain is added, set BASE_PATH to "".
const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

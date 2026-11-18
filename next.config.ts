import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "images.pexels.com",
        },
    ],
  },
  async redirects() {
    return [
      {
        // Transfère l'autorité de l'ancienne adresse Vercel vers le domaine actuel.
        // Le host est matché à l'identique : les URLs de preview ne sont pas touchées.
        source: "/:path*",
        has: [{ type: "host", value: "sullivan-portfolio.vercel.app" }],
        destination: "https://sullivan.techbloom.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

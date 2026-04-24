import type { NextConfig } from "next";

const LEGACY_SERVICE_REDIRECTS = [
  { from: "/financing", to: "/leistungen/websites" },
  { from: "/social-media", to: "/leistungen/social-media" },
  { from: "/ki-workflows", to: "/leistungen/ki-workflows" },
  { from: "/ki-assistenten", to: "/leistungen/ki-assistenten" },
  { from: "/autonome-agenten", to: "/leistungen/autonome-agenten" },
  { from: "/systemarchitektur", to: "/leistungen/systemarchitektur" },
];

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return LEGACY_SERVICE_REDIRECTS.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  },
};

export default nextConfig;

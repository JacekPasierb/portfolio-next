import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['streak-stats.demolab.com'],
    dangerouslyAllowSVG: true, // Umożliwia ładowanie SVG
  },
};

export default nextConfig;

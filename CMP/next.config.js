/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/guide-leo",
        destination: "/guides/cm-leo-2025",
        permanent: true,
      },
      {
        source: "/guide-libra",
        destination: "/guides/cm-libra-2025",
        permanent: true,
      },
      {
        source: "/guide-virgo",
        destination: "/guides/cm-virgo-2025",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

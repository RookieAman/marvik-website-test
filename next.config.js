/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dummyimage.com", "drive.google.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: { images: { layoutRaw: true } },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
};

module.exports = nextConfig;

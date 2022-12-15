/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: { images: { layoutRaw: true } },
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
};

module.exports = nextConfig;

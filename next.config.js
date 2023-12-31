/** @type {import('next').NextConfig} */

const removeImports = require("next-remove-imports")();

const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  transpilePackages: ["@renec-foundation/wallet-adapter-react"],
};

module.exports = nextConfig;

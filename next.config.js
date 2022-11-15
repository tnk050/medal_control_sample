/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS && '/medal_control_sample',
  trailingSlash: true,
};

module.exports = nextConfig;

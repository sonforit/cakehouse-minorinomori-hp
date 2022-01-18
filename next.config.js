/** @type {import('next').NextConfig} */
module.exports = {
  basePath: process.env.GITHUB_ACTIONS ? '/cakehouse-minorinomori-hp' : '',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
};

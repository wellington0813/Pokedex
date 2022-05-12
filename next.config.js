/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  sprites_animate: {
    "front_default": "https://example.com/path/to/file.gif"
},
}
module.exports = nextConfig

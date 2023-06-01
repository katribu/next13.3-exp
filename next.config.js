/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["smashbros-unofficial-api.vercel.app", "res.cloudinary.com"]
  }
}

module.exports = nextConfig

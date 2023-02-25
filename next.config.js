/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['www.luisvelazquez.me', "cdn.sanity.io"]
  }
}

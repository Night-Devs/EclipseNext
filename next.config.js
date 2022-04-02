/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  dir: './src',
  env: {
    apiUrl: '25.14.200.1:4000'
  }
}

module.exports = nextConfig

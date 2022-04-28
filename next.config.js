/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  dir: './src',
  env: {
    apiUrl: 'localhost:4000'
  }
}

module.exports = nextConfig

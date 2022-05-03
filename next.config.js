/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  dir: './src',
  env: {
    apiUrl: 'localhost:4000',
    redirectUrl: 'localhost:3000/callback',
    mobileRedirectUrl: 'localhost:3000/callback/mobile',
    authUrl: 'https://discord.com/api/oauth2/authorize?client_id=857545309781360661&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=identify%20guilds',
    mobileAuthUrl: 'https://discord.com/api/oauth2/authorize?client_id=857545309781360661&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fmobile&response_type=code&scope=identify%20guilds',
    mobileUrl: 'com.eclipse://auth/',
  }
}

module.exports = nextConfig

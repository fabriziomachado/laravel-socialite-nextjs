/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = config

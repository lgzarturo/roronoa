/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'www.visitapormexico.com',
          },
        ],
        destination: '/visitapormexico',
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://twitter.com/lgzarturo',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

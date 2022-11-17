/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.visitapormexico.com',
          },
        ],
        destination: '/welcome/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.joobslot.com',
          },
        ],
        destination: '/jobs/:path*',
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

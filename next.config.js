/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path((?!welcome$).*)',
        has: [
          {
            type: 'host',
            value: 'visitapormexico.com',
          },
          {
            type: 'host',
            value: 'www.visitapormexico.com',
          },
        ],
        destination: '/welcome',
        permanent: true,
      },
      {
        source: '/:path((?!jobs$).*)',
        has: [
          {
            type: 'host',
            value: 'joobslot.com',
          },
          {
            type: 'host',
            value: 'www.joobslot.com',
          },
        ],
        destination: '/jobs',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

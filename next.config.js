/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path((?!another-page$).*)',
        has: [
          {
            type: 'host',
            value: 'visitapormexico.com',
          },
        ],
        destination: '/welcome',
        permanent: true,
      },
      {
        source: '/:path((?!another-page$).*)',
        has: [
          {
            type: 'host',
            value: 'joobslot.com',
          },
        ],
        destination: '/jobs',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

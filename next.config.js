/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path((?!welcome$).*)/:slug*',
        has: [
          {
            type: 'host',
            value: 'www.visitapormexico.com',
          },
        ],
        destination: '/visitapormexico/:slug*',
        permanent: true,
      },
      {
        source: '/:path((?!jobs$).*)/:slug*',
        has: [
          {
            type: 'host',
            value: 'www.joobslot.com',
          },
        ],
        destination: '/joobslot/:slug*',
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

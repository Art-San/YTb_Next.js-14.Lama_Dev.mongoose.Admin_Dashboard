// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      },
      {
        protocol: 'https',
        hostname: 'www.blast.hk'
      },
      {
        protocol: 'https',
        hostname: 'avatarzo.ru'
      },
      {
        protocol: 'https',
        hostname: 'illustrators.ru'
      },
      {
        protocol: 'https',
        hostname: 'cdn.freelance.ru'
      },
      {
        protocol: 'https',
        hostname: 'https://trashbox.ru'
      }
    ]
  }
}

module.exports = nextConfig
// https://avatarzo.ru
// (https://www.blast.hk
// (https://illustrators.ru
// (https://cdn.freelance.ru
// (https://trashbox.ru
// (https://trashbox.ru

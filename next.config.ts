/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['upload.wikimedia.org','media.istockphoto.com','miro.medium.com','i.kym-cdn.com','static.wixstatic.com','i.redd.it','preview.redd.it','encrypted-tbn0.gstatic.com','lumiere-a.akamaihd.net'],
  },
}

export default nextConfig

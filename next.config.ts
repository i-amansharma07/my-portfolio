import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // Allow images from Wikimedia
  images: {
    domains: ['upload.wikimedia.org','media.istockphoto.com','miro.medium.com','i.kym-cdn.com','static.wixstatic.com','i.redd.it','preview.redd.it','encrypted-tbn0.gstatic.com'],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)



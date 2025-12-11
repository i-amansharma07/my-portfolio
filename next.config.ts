import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // Allow images from Wikimedia
  images: {
    domains: ['upload.wikimedia.org','media.istockphoto.com','miro.medium.com','i.kym-cdn.com','static.wixstatic.com','i.redd.it','preview.redd.it','encrypted-tbn0.gstatic.com','lumiere-a.akamaihd.net'],
  },
}

// Enable MDX
const withMDX = () => (config: any)=>{
  config.pageExtensions = ["js", "jsx", "ts", "tsx", "md", "mdx"];
  config.experimental = config.experimental || {};
  config.experimental.mdxRs = true;
  return config;
};

export default withMDX()(nextConfig);


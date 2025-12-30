import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sumanmethuku.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://sumanmethuku.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://sumanmethuku.vercel.app/blogs',
      lastModified: new Date(),
    },
    {
      url: 'https://sumanmethuku.vercel.app/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://sumanmethuku.vercel.app/contact',
      lastModified: new Date(),
    },
  ]
}
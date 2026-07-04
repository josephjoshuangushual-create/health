import type { MetadataRoute } from 'next';
import { categories } from '@/lib/categories';
import { allAuthors } from '@/lib/authors';
import { getAllPosts } from '@/lib/posts';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/articles',
    '/about',
    '/editorial-policy',
    '/contact',
    '/newsletter',
    '/privacy-policy',
    '/terms',
    '/medical-disclaimer',
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.6,
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${site.url}/articles/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const categoryRoutes = categories.map((c) => ({
    url: `${site.url}/category/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const authorRoutes = allAuthors().map((a) => ({
    url: `${site.url}/authors/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes, ...categoryRoutes, ...authorRoutes];
}

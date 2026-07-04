import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import AdSlot from '@/components/AdSlot';
import { categories, getCategory } from '@/lib/categories';
import { getPostsByCategory } from '@/lib/posts';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `${site.url}/category/${slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header
        className={`mb-8 rounded-2xl bg-gradient-to-r ${category.accent} p-8 text-white`}
      >
        <h1 className="font-serif text-3xl font-bold">{category.name}</h1>
        <p className="mt-2 max-w-2xl text-white/90">{category.description}</p>
      </header>

      {posts.length === 0 ? (
        <p className="text-ink-muted">
          No articles in this category yet — check back soon.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <ArticleCard key={post.slug} post={post} priority={i < 3} />
          ))}
        </div>
      )}

      <AdSlot label="Advertisement" />
    </div>
  );
}

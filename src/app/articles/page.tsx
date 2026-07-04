import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import AdSlot from '@/components/AdSlot';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'All Articles',
  description: 'Browse every medically-reviewed article from our editorial team.',
};

export default function ArticlesIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-ink">All Articles</h1>
        <p className="mt-2 text-ink-muted">
          Evidence-based, clinician-reviewed health writing across every topic we cover.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <ArticleCard key={post.slug} post={post} priority={i < 3} />
        ))}
      </div>

      <AdSlot label="Advertisement" />
    </div>
  );
}

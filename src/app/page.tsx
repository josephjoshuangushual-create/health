import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import AdSlot from '@/components/AdSlot';
import NewsletterSignup from '@/components/NewsletterSignup';
import { categories } from '@/lib/categories';
import { getAuthor } from '@/lib/authors';
import { formatDate } from '@/lib/format';
import { getAllPosts, getFeaturedPosts } from '@/lib/posts';

export default function HomePage() {
  const featured = getFeaturedPosts(5);
  const [lead, ...secondary] = featured;
  const latest = getAllPosts().slice(0, 6);
  const leadAuthor = lead ? getAuthor(lead.author) : undefined;

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="grid gap-6 py-8 lg:grid-cols-3">
        {lead && (
          <Link
            href={`/articles/${lead.slug}`}
            className="group relative col-span-2 flex min-h-[360px] flex-col justify-end overflow-hidden rounded-2xl"
          >
            <Image
              src={lead.image}
              alt={lead.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="relative p-6 text-white">
              <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold">
                Featured
              </span>
              <h1 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">
                {lead.title}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-200">{lead.excerpt}</p>
              <p className="mt-3 text-xs text-slate-300">
                {leadAuthor?.name} · {formatDate(lead.date)} · {lead.readingMinutes} min read
              </p>
            </div>
          </Link>
        )}

        <div className="flex flex-col gap-4">
          {secondary.slice(0, 3).map((post) => {
            const author = getAuthor(post.author);
            return (
              <Link
                key={post.slug}
                href={`/articles/${post.slug}`}
                className="group flex gap-3 rounded-xl border border-slate-200 p-3 transition-shadow hover:shadow-sm"
              >
                <div className="relative h-20 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="line-clamp-2 text-sm font-bold text-ink group-hover:text-brand-700">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-xs text-ink-muted">
                    {author?.name} · {post.readingMinutes} min
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Category chips */}
      <section className="border-y border-slate-200 py-5">
        <h2 className="sr-only">Browse topics</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className={`rounded-full bg-gradient-to-r ${c.accent} px-4 py-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-90`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <AdSlot label="Advertisement" />

      {/* Latest articles */}
      <section className="py-4">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-serif text-2xl font-bold text-ink">Latest Articles</h2>
          <Link href="/articles" className="text-sm font-semibold text-brand-700 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <ArticleCard key={post.slug} post={post} priority={i < 3} />
          ))}
        </div>
      </section>

      <div className="py-8">
        <NewsletterSignup />
      </div>

      <AdSlot label="Advertisement" />

      {/* Trust strip */}
      <section className="my-10 grid gap-6 rounded-2xl bg-slate-50 p-8 sm:grid-cols-3">
        {[
          {
            title: 'Reviewed by clinicians',
            body: 'Every health claim is checked against peer-reviewed evidence by qualified medical professionals.',
          },
          {
            title: 'No hype, ever',
            body: 'We reject miracle cures and fear-based clickbait. Just clear, honest, actionable guidance.',
          },
          {
            title: 'Transparent sourcing',
            body: 'We cite primary research and explain what the evidence does — and does not — show.',
          },
        ].map((item) => (
          <div key={item.title}>
            <h3 className="font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{item.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

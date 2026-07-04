import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import JsonLd from '@/components/JsonLd';
import { allAuthors, getAuthor } from '@/lib/authors';
import { getPostsByAuthor } from '@/lib/posts';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return allAuthors().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  return {
    title: `${author.name}, ${author.credentials}`,
    description: author.bio,
    alternates: { canonical: `${site.url}/authors/${slug}` },
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const posts = getPostsByAuthor(slug);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: `${site.url}/authors/${slug}`,
    image: author.avatar,
    alumniOf: author.education,
    worksFor: { '@type': 'Organization', name: site.name },
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <JsonLd data={personSchema} />

      <header className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
        <Image
          src={author.avatar}
          alt={author.name}
          width={112}
          height={112}
          className="h-28 w-28 rounded-full object-cover"
        />
        <div>
          <h1 className="font-serif text-3xl font-bold text-ink">
            {author.name}, {author.credentials}
          </h1>
          <p className="mt-1 font-medium text-brand-700">{author.role}</p>
          <p className="mt-3 max-w-2xl text-ink-muted">{author.bio}</p>
        </div>
      </header>

      <section className="mt-8 rounded-2xl border border-slate-200 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
          Credentials &amp; education
        </h2>
        <ul className="mt-3 space-y-1.5">
          {author.education.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mt-0.5 flex-shrink-0 text-brand-600"
              >
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {posts.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-6 font-serif text-2xl font-bold text-ink">
            Articles by {author.name}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AdSlot from '@/components/AdSlot';
import ArticleCard from '@/components/ArticleCard';
import JsonLd from '@/components/JsonLd';
import MedicalReviewBadge from '@/components/MedicalReviewBadge';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getAuthor } from '@/lib/authors';
import { getCategory } from '@/lib/categories';
import { formatDate } from '@/lib/format';
import { getAllSlugs, getPost, getPostMeta, getRelatedPosts } from '@/lib/posts';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!getAllSlugs().includes(slug)) return {};
  const post = getPostMeta(slug);
  const url = `${site.url}/articles/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      images: [{ url: post.image }],
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getAllSlugs().includes(slug)) notFound();

  const post = await getPost(slug);
  const category = getCategory(post.category);
  const author = getAuthor(post.author);
  const reviewer = post.reviewer ? getAuthor(post.reviewer) : undefined;
  const related = getRelatedPosts(post);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: author
      ? {
          '@type': 'Person',
          name: author.name,
          jobTitle: author.role,
          url: `${site.url}/authors/${author.slug}`,
        }
      : undefined,
    reviewedBy: reviewer
      ? {
          '@type': 'Person',
          name: reviewer.name,
          jobTitle: reviewer.role,
          url: `${site.url}/authors/${reviewer.slug}`,
        }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/articles/${slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      category && {
        '@type': 'ListItem',
        position: 2,
        name: category.name,
        item: `${site.url}/category/${category.slug}`,
      },
      { '@type': 'ListItem', position: 3, name: post.title },
    ].filter(Boolean),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="mx-auto max-w-prose px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-4 text-xs text-ink-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-brand-700">Home</Link>
          {category && (
            <>
              <span className="mx-1.5">/</span>
              <Link href={`/category/${category.slug}`} className="hover:text-brand-700">
                {category.name}
              </Link>
            </>
          )}
        </nav>

        <header>
          {category && (
            <Link
              href={`/category/${category.slug}`}
              className={`inline-block rounded-full bg-gradient-to-r ${category.accent} px-3 py-1 text-xs font-semibold text-white`}
            >
              {category.name}
            </Link>
          )}
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-ink-muted">{post.excerpt}</p>
          <p className="mt-3 text-sm text-ink-muted">
            {formatDate(post.date)} · {post.readingMinutes} min read
          </p>
        </header>

        <div className="my-6">
          <MedicalReviewBadge
            authorSlug={post.author}
            reviewerSlug={post.reviewer}
            date={post.date}
            updated={post.updated}
          />
        </div>

        <figure className="my-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
          </div>
          {post.imageCredit && (
            <figcaption className="mt-2 text-center text-xs text-ink-muted">
              {post.imageCredit}
            </figcaption>
          )}
        </figure>

        {/* Article body */}
        <div
          className="prose prose-slate max-w-none prose-headings:font-serif prose-a:text-brand-700"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-ink-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <AdSlot label="Advertisement" />

        {/* Author bio */}
        {author && (
          <section className="mt-8 flex gap-4 rounded-2xl border border-slate-200 p-5">
            <Image
              src={author.avatar}
              alt={author.name}
              width={64}
              height={64}
              className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="text-xs uppercase tracking-wide text-ink-muted">About the author</p>
              <Link
                href={`/authors/${author.slug}`}
                className="text-lg font-bold text-ink hover:text-brand-700"
              >
                {author.name}, {author.credentials}
              </Link>
              <p className="mt-1 text-sm text-ink-muted">{author.bio}</p>
            </div>
          </section>
        )}
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="mb-6 font-serif text-2xl font-bold text-ink">Related reading</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ArticleCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <div className="mx-auto max-w-6xl px-4 pb-12">
        <NewsletterSignup />
      </div>
    </>
  );
}

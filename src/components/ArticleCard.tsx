import Image from 'next/image';
import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';
import { getCategory } from '@/lib/categories';
import { getAuthor } from '@/lib/authors';
import { formatDate } from '@/lib/format';

type Props = {
  post: PostMeta;
  priority?: boolean;
};

export default function ArticleCard({ post, priority }: Props) {
  const category = getCategory(post.category);
  const author = getAuthor(post.author);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md">
      <Link href={`/articles/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          priority={priority}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        {category && (
          <Link
            href={`/category/${category.slug}`}
            className={`mb-2 inline-block w-fit rounded-full bg-gradient-to-r ${category.accent} px-2.5 py-0.5 text-xs font-semibold text-white`}
          >
            {category.name}
          </Link>
        )}
        <h3 className="text-lg font-bold leading-snug text-ink">
          <Link href={`/articles/${post.slug}`} className="hover:text-brand-700">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-muted">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-ink-muted">
          {author && <span className="font-medium text-ink">{author.name}</span>}
          <span aria-hidden>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
      </div>
    </article>
  );
}

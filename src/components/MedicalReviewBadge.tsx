import Link from 'next/link';
import Image from 'next/image';
import { getAuthor } from '@/lib/authors';

type Props = {
  authorSlug: string;
  reviewerSlug?: string;
  date: string;
  updated?: string;
};

/**
 * The "Written by / Medically reviewed by" trust block that appears near the
 * top of every article. Signalling a credentialed author — and a separate
 * medical reviewer — is central to E-E-A-T for health (YMYL) content.
 */
export default function MedicalReviewBadge({
  authorSlug,
  reviewerSlug,
  date,
  updated,
}: Props) {
  const author = getAuthor(authorSlug);
  const reviewer = reviewerSlug ? getAuthor(reviewerSlug) : undefined;

  return (
    <div className="not-prose rounded-xl border border-brand-100 bg-brand-50/60 p-4">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {author && (
          <Person
            label="Written by"
            name={author.name}
            credentials={author.credentials}
            avatar={author.avatar}
            href={`/authors/${author.slug}`}
          />
        )}
        {reviewer && (
          <Person
            label="Medically reviewed by"
            name={reviewer.name}
            credentials={reviewer.credentials}
            avatar={reviewer.avatar}
            href={`/authors/${reviewer.slug}`}
          />
        )}
      </div>
      <div className="mt-3 flex items-center gap-2 border-t border-brand-100 pt-3 text-xs text-ink-muted">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-600">
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="9" />
        </svg>
        <span>
          {updated ? 'Updated' : 'Published'}{' '}
          {new Date(updated ?? date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          · Fact-checked against peer-reviewed sources
        </span>
      </div>
    </div>
  );
}

function Person({
  label,
  name,
  credentials,
  avatar,
  href,
}: {
  label: string;
  name: string;
  credentials: string;
  avatar: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={avatar}
        alt={name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="text-sm leading-tight">
        <span className="block text-[11px] uppercase tracking-wide text-ink-muted">
          {label}
        </span>
        <Link href={href} className="font-semibold text-ink hover:text-brand-700">
          {name}
          {credentials ? `, ${credentials}` : ''}
        </Link>
      </div>
    </div>
  );
}

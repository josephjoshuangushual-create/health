import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { allAuthors } from '@/lib/authors';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${site.name}, our editorial team, and our mission to deliver trustworthy, medically-reviewed health information.`,
};

export default function AboutPage() {
  const team = allAuthors();

  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-ink">About {site.name}</h1>
      <div className="prose prose-slate mt-6 max-w-none">
        <p className="lead text-lg">
          {site.name} exists to make trustworthy health information accessible to
          everyone. In a world of miracle cures and fear-based clickbait, we
          publish clear, honest, evidence-based guidance — every piece reviewed by
          qualified medical professionals.
        </p>

        <h2>Our mission</h2>
        <p>
          Health decisions are among the most important people make. That&apos;s
          why we hold our content to the standards of &quot;Your Money or Your
          Life&quot; publishing: rigorous sourcing, real expertise, and radical
          transparency about what the evidence does and does not show.
        </p>

        <h2>How we work</h2>
        <ul>
          <li>
            <strong>Written by qualified people.</strong> Our articles are created
            by clinicians, registered dietitians, and science writers with real
            credentials.
          </li>
          <li>
            <strong>Reviewed for accuracy.</strong> Health claims are checked
            against peer-reviewed research and current clinical guidelines.
          </li>
          <li>
            <strong>Kept up to date.</strong> Medicine evolves. We revisit and
            update our content as the evidence changes.
          </li>
        </ul>
        <p>
          Read our full{' '}
          <Link href="/editorial-policy">editorial policy</Link> to learn exactly
          how we research, write, review, and correct our work.
        </p>
      </div>

      <h2 className="mt-12 font-serif text-2xl font-bold text-ink">Meet the team</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {team.map((author) => (
          <Link
            key={author.slug}
            href={`/authors/${author.slug}`}
            className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-shadow hover:shadow-sm"
          >
            <Image
              src={author.avatar}
              alt={author.name}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-ink">
                {author.name}, {author.credentials}
              </p>
              <p className="text-sm text-ink-muted">{author.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

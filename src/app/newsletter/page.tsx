import type { Metadata } from 'next';
import NewsletterSignup from '@/components/NewsletterSignup';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Newsletter',
  description: `Subscribe to the ${site.name} newsletter for medically-reviewed health tips.`,
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-12">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold text-ink">
          Health you can trust, in your inbox
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink-muted">
          Once a week, we send our best evidence-based articles and a short,
          clinician-reviewed digest of the health news that actually matters. No
          hype. No spam. Unsubscribe anytime.
        </p>
      </div>

      <div className="mt-10">
        <NewsletterSignup />
      </div>

      <ul className="mx-auto mt-10 grid max-w-lg gap-3 text-sm text-ink-muted">
        {[
          'Written and reviewed by medical professionals',
          'Primary sources cited — read the evidence yourself',
          'Your email is never sold or shared',
        ].map((point) => (
          <li key={point} className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-600">
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

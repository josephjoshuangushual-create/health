import Link from 'next/link';
import { categories } from '@/lib/categories';
import { site } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 font-serif font-bold text-white">
              V
            </span>
            <span className="font-bold text-ink">{site.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">{site.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Topics</h3>
          <ul className="mt-3 space-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  className="text-sm text-ink-muted hover:text-brand-700"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Company</h3>
          <ul className="mt-3 space-y-2">
            {[
              ['About Us', '/about'],
              ['Editorial Policy', '/editorial-policy'],
              ['Contact', '/contact'],
              ['Newsletter', '/newsletter'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-sm text-ink-muted hover:text-brand-700">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Legal</h3>
          <ul className="mt-3 space-y-2">
            {[
              ['Privacy Policy', '/privacy-policy'],
              ['Terms of Use', '/terms'],
              ['Medical Disclaimer', '/medical-disclaimer'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-sm text-ink-muted hover:text-brand-700">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <p className="text-xs leading-relaxed text-ink-muted">
            <strong>Medical disclaimer:</strong> The content on {site.name} is for
            informational and educational purposes only and is not a substitute for
            professional medical advice, diagnosis, or treatment. Always seek the
            advice of your physician or another qualified health provider with any
            questions about a medical condition.
          </p>
          <p className="mt-4 text-xs text-ink-muted">
            © {year} {site.organization.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

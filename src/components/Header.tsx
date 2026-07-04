'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/lib/categories';
import { site } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label={site.name}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 font-serif text-lg font-bold text-white">
            V
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-brand-700"
            >
              {c.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/newsletter"
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:inline-block"
          >
            Subscribe
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-slate-200 bg-white px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="grid gap-1">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-ink hover:bg-brand-50"
                  onClick={() => setOpen(false)}
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/newsletter"
                className="mt-2 block rounded-md bg-brand-600 px-3 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Subscribe
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

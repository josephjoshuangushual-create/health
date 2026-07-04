'use client';

import { useState } from 'react';

type Props = {
  compact?: boolean;
};

/**
 * Email capture form. This is a front-end stub — wire the `onSubmit` handler
 * to your email provider (Mailchimp, ConvertKit, Beehiiv, etc.) or a Next.js
 * route handler to actually store subscribers.
 */
export default function NewsletterSignup({ compact }: Props) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: POST to your newsletter provider / API route.
    setDone(true);
  }

  return (
    <section
      className={`not-prose rounded-2xl bg-brand-700 px-6 text-white ${
        compact ? 'py-6' : 'py-10'
      }`}
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-serif text-2xl font-bold">
          Get evidence-based health tips
        </h2>
        <p className="mt-2 text-sm text-brand-100">
          Join our newsletter for medically-reviewed guidance — no hype, no spam.
          Unsubscribe anytime.
        </p>
        {done ? (
          <p className="mt-6 rounded-lg bg-brand-600 px-4 py-3 text-sm font-medium">
            Thanks for subscribing! Please check your inbox to confirm.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-full border-0 px-5 py-3 text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

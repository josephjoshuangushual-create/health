import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with the ${site.name} editorial team.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-ink">Contact Us</h1>
      <div className="prose prose-slate mt-6 max-w-none">
        <p className="lead text-lg">
          We&apos;d love to hear from you — whether it&apos;s feedback, a
          correction, a partnership inquiry, or a story idea.
        </p>
        <p>
          <strong>Editorial &amp; corrections:</strong>{' '}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </p>
        <p>
          For medical emergencies, do not use this form. Call your local emergency
          number immediately.
        </p>
      </div>

      <form className="mt-8 grid gap-4 rounded-2xl border border-slate-200 p-6">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
        <button
          type="submit"
          className="w-fit rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Send message
        </button>
        <p className="text-xs text-ink-muted">
          This form is a front-end stub. Connect it to a form handler or API route
          to receive submissions.
        </p>
      </form>
    </div>
  );
}

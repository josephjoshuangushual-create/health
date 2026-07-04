import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: `The terms governing your use of ${site.name}.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-ink">Terms of Use</h1>
      <div className="prose prose-slate mt-6 max-w-none">
        <p className="text-sm text-ink-muted">Last updated: {new Date().getFullYear()}</p>
        <p>
          This is a starter terms-of-use template. Replace it with terms reviewed
          by a qualified attorney before launch.
        </p>

        <h2>Acceptance of terms</h2>
        <p>
          By accessing {site.name}, you agree to these terms. If you do not agree,
          please do not use the site.
        </p>

        <h2>Educational use only</h2>
        <p>
          Content is provided for general informational and educational purposes
          and is not medical advice. See our medical disclaimer for details.
        </p>

        <h2>Intellectual property</h2>
        <p>
          All content on this site is owned by {site.organization.legalName} or its
          licensors and may not be reproduced without permission.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          The site is provided &quot;as is&quot; without warranties of any kind. We
          are not liable for any decisions made based on the content.
        </p>

        <h2>Changes</h2>
        <p>We may update these terms from time to time. Continued use constitutes acceptance.</p>
      </div>
    </div>
  );
}

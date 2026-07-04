import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses, and protects your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-ink">Privacy Policy</h1>
      <div className="prose prose-slate mt-6 max-w-none">
        <p className="text-sm text-ink-muted">Last updated: {new Date().getFullYear()}</p>
        <p>
          This is a starter privacy policy template. Before launch, replace it with
          a policy reviewed for your jurisdiction (GDPR, CCPA, etc.). If you run
          advertising such as Google AdSense, your policy must disclose the use of
          cookies and third-party ad partners.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Information you provide:</strong> such as your email address
            when you subscribe to our newsletter or contact us.
          </li>
          <li>
            <strong>Automatically collected data:</strong> such as pages visited,
            device and browser type, and analytics data.
          </li>
          <li>
            <strong>Cookies:</strong> we and our partners use cookies to run the
            site, measure traffic, and serve advertising.
          </li>
        </ul>

        <h2>Advertising</h2>
        <p>
          We may display ads served by third-party vendors, including Google. These
          vendors may use cookies to serve ads based on your prior visits. You can
          opt out of personalized advertising through your ad settings with each
          provider.
        </p>

        <h2>How we use information</h2>
        <p>
          To operate and improve the site, send newsletters you request, respond to
          inquiries, and comply with legal obligations.
        </p>

        <h2>Your choices</h2>
        <p>
          You can unsubscribe from emails at any time and control cookies through
          your browser settings.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Email{' '}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </div>
    </div>
  );
}

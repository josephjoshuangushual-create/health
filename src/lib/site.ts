/**
 * Central site configuration. Update these values to rebrand the site.
 */
export const site = {
  name: 'Vitalis Health',
  tagline: 'Evidence-based health news, reviewed by medical professionals.',
  description:
    'Vitalis Health delivers medically-reviewed articles on conditions, nutrition, mental health, fitness, and the latest medical research — written and fact-checked by qualified clinicians.',
  // Update to your production domain before launch.
  url: 'https://www.vitalishealth.com',
  locale: 'en_US',
  // Your Google AdSense publisher ID, e.g. "ca-pub-1234567890123456".
  // Leave empty to render placeholder ad slots during development.
  adsensePublisherId: '',
  social: {
    twitter: 'https://twitter.com/vitalishealth',
    facebook: 'https://facebook.com/vitalishealth',
    instagram: 'https://instagram.com/vitalishealth',
    youtube: 'https://youtube.com/@vitalishealth',
  },
  contactEmail: 'editors@vitalishealth.com',
  organization: {
    legalName: 'Vitalis Health Media, Inc.',
    foundingYear: 2024,
  },
} as const;

export type Site = typeof site;

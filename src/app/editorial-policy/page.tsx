import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: `How ${site.name} researches, writes, medically reviews, sources, and corrects its health content.`,
};

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-ink">Editorial Policy</h1>
      <div className="prose prose-slate mt-6 max-w-none">
        <p className="lead text-lg">
          Our readers trust us with health decisions. This policy explains the
          standards every article on {site.name} must meet.
        </p>

        <h2>1. Qualified authors</h2>
        <p>
          Content is written by people with relevant expertise — physicians,
          registered dietitians, and trained science writers. Each author has a
          public profile listing their credentials and background.
        </p>

        <h2>2. Independent medical review</h2>
        <p>
          Wherever possible, clinical content is reviewed by a qualified medical
          professional separate from the author. Reviewed articles display a
          &quot;Medically reviewed by&quot; credit with the reviewer&apos;s name
          and credentials, and the date of review.
        </p>

        <h2>3. Evidence-based sourcing</h2>
        <p>We prioritize high-quality evidence, in roughly this order:</p>
        <ol>
          <li>Systematic reviews and meta-analyses</li>
          <li>Randomized controlled trials</li>
          <li>Guidelines from major medical organizations</li>
          <li>Large observational studies</li>
        </ol>
        <p>
          We link to primary sources where practical and are explicit about the
          strength and limitations of the evidence. We do not present mouse
          studies or preliminary findings as settled science.
        </p>

        <h2>4. No miracle cures</h2>
        <p>
          We do not publish content promoting unproven cures, extreme diets, or
          fear-based health claims. If a treatment&apos;s evidence is weak or
          contested, we say so plainly.
        </p>

        <h2>5. Clear separation of advertising and content</h2>
        <p>
          Advertising and sponsored placements, where present, are clearly
          labeled and never influence our editorial conclusions. Our
          recommendations are based on evidence, not commercial relationships.
        </p>

        <h2>6. Corrections and updates</h2>
        <p>
          Medicine changes, and so do we. We review our content periodically and
          update it as guidelines evolve. If you spot an error, please{' '}
          <a href={`mailto:${site.contactEmail}`}>email our editors</a> — we take
          corrections seriously and act on them promptly.
        </p>

        <h2>7. Not a substitute for medical care</h2>
        <p>
          Our content is educational and general in nature. It is not a substitute
          for individualized advice from your own clinician, who knows your full
          medical history.
        </p>
      </div>
    </div>
  );
}

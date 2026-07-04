import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Medical Disclaimer',
  description: `Important information about the medical content published on ${site.name}.`,
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-10">
      <h1 className="font-serif text-4xl font-bold text-ink">Medical Disclaimer</h1>
      <div className="prose prose-slate mt-6 max-w-none">
        <p className="lead text-lg">
          The information on {site.name} is provided for general educational
          purposes only and is <strong>not medical advice</strong>.
        </p>

        <h2>Not a substitute for professional care</h2>
        <p>
          Nothing on this website is intended to be a substitute for professional
          medical advice, diagnosis, or treatment. Always seek the advice of your
          physician or another qualified health provider with any questions you may
          have regarding a medical condition.
        </p>

        <h2>Never disregard professional advice</h2>
        <p>
          Never disregard professional medical advice or delay seeking it because
          of something you have read on this site.
        </p>

        <h2>In an emergency</h2>
        <p>
          If you think you may have a medical emergency, call your doctor or your
          local emergency number immediately.
        </p>

        <h2>Individual results vary</h2>
        <p>
          Health information is general in nature and may not apply to your
          individual circumstances. Your clinician, who knows your full history, is
          your best source of personalized guidance.
        </p>
      </div>
    </div>
  );
}

export type Category = {
  slug: string;
  name: string;
  description: string;
  /**
   * Tailwind gradient classes used on category chips and headers.
   * The site uses a single, mature navy accent across every category —
   * kept as a per-category field so you can reintroduce color later if you
   * ever want to differentiate verticals.
   */
  accent: string;
};

/**
 * Top-level content verticals. These mirror the high-CPC, high-intent
 * niches that health publishers compete on. Add or remove verticals here
 * and the navigation, category pages, and sitemap update automatically.
 */
export const categories: Category[] = [
  {
    slug: 'conditions',
    name: 'Conditions',
    description:
      'In-depth, clinician-reviewed guides to symptoms, causes, diagnosis, and treatment of common and chronic health conditions.',
    accent: 'from-brand-700 to-brand-900',
  },
  {
    slug: 'nutrition',
    name: 'Nutrition',
    description:
      'Evidence-based nutrition science, diets, supplements, and practical eating guidance for everyday health.',
    accent: 'from-brand-700 to-brand-900',
  },
  {
    slug: 'mental-health',
    name: 'Mental Health',
    description:
      'Compassionate, expert coverage of anxiety, depression, stress, sleep, and emotional wellbeing.',
    accent: 'from-brand-700 to-brand-900',
  },
  {
    slug: 'fitness',
    name: 'Fitness',
    description:
      'Workouts, recovery, mobility, and exercise physiology to help you move better and live longer.',
    accent: 'from-brand-700 to-brand-900',
  },
  {
    slug: 'medical-research',
    name: 'Medical Research',
    description:
      'Plain-language breakdowns of the latest peer-reviewed studies, clinical trials, and health news.',
    accent: 'from-brand-700 to-brand-900',
  },
  {
    slug: 'wellness',
    name: 'Wellness',
    description:
      'Preventive care, healthy aging, skin, and lifestyle habits to help you feel your best.',
    accent: 'from-brand-700 to-brand-900',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

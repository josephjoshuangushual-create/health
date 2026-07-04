export type Category = {
  slug: string;
  name: string;
  description: string;
  /** Tailwind gradient classes used on category chips and headers. */
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
    accent: 'from-rose-500 to-red-600',
  },
  {
    slug: 'nutrition',
    name: 'Nutrition',
    description:
      'Evidence-based nutrition science, diets, supplements, and practical eating guidance for everyday health.',
    accent: 'from-lime-500 to-emerald-600',
  },
  {
    slug: 'mental-health',
    name: 'Mental Health',
    description:
      'Compassionate, expert coverage of anxiety, depression, stress, sleep, and emotional wellbeing.',
    accent: 'from-violet-500 to-indigo-600',
  },
  {
    slug: 'fitness',
    name: 'Fitness',
    description:
      'Workouts, recovery, mobility, and exercise physiology to help you move better and live longer.',
    accent: 'from-orange-500 to-amber-600',
  },
  {
    slug: 'medical-research',
    name: 'Medical Research',
    description:
      'Plain-language breakdowns of the latest peer-reviewed studies, clinical trials, and health news.',
    accent: 'from-sky-500 to-blue-600',
  },
  {
    slug: 'wellness',
    name: 'Wellness',
    description:
      'Preventive care, healthy aging, skin, and lifestyle habits to help you feel your best.',
    accent: 'from-teal-500 to-cyan-600',
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

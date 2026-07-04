export type Author = {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  bio: string;
  /** Where the person trained / is board certified — reinforces E-E-A-T. */
  education: string[];
  avatar: string;
  /** Optional external verification links (LinkedIn, hospital profile, etc.) */
  links?: { label: string; href: string }[];
};

/**
 * Author and medical-reviewer profiles.
 *
 * E-E-A-T (Experience, Expertise, Authoritativeness, Trust) is critical for
 * ranking and monetizing "Your Money or Your Life" (YMYL) health content.
 * Every article should list a real, credentialed author and, ideally, a
 * separate medical reviewer. Fill these in with your own team.
 */
export const authors: Record<string, Author> = {
  'jordan-avery': {
    slug: 'jordan-avery',
    name: 'Jordan Avery',
    credentials: 'MD',
    role: 'Founder & Medical Editor',
    bio: 'Jordan Avery is a physician and the founding editor of Vitalis Health. After earning an MD, Jordan set out to translate rigorous medical evidence into clear, trustworthy guidance for everyday readers. Every clinical claim on the site passes through an editorial process Jordan designed.',
    education: [
      'Doctor of Medicine (MD), 2024',
      'B.S. in Human Physiology',
    ],
    avatar:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    links: [{ label: 'Editorial policy', href: '/editorial-policy' }],
  },
  'maria-santos': {
    slug: 'maria-santos',
    name: 'Maria Santos',
    credentials: 'RD, MPH',
    role: 'Nutrition Editor',
    bio: 'Maria Santos is a registered dietitian and public-health researcher who reviews all nutrition and supplement content. She focuses on separating durable evidence from diet-culture hype.',
    education: ['Master of Public Health (MPH)', 'Registered Dietitian (RD)'],
    avatar:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
  },
  'daniel-cho': {
    slug: 'daniel-cho',
    name: 'Daniel Cho',
    credentials: 'PhD',
    role: 'Science Writer',
    bio: 'Daniel Cho holds a PhD in neuroscience and covers medical research, mental health, and emerging therapies. He specializes in explaining complex clinical trials without oversimplifying them.',
    education: ['PhD, Neuroscience', 'B.Sc., Molecular Biology'],
    avatar:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
  },
};

export function getAuthor(slug: string): Author | undefined {
  return authors[slug];
}

export function allAuthors(): Author[] {
  return Object.values(authors);
}

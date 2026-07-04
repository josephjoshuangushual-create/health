# Vitalis Health

A production-ready starter for a **medically-reviewed health news & wellness blog** —
modeled after publishers like Healthline, Medical News Today, WebMD, Mayo Clinic,
Cleveland Clinic, and KevinMD.

Built for **SEO, E-E-A-T, and AdSense monetization** from day one.

## Why this stack

Content/news sites live and die by search traffic and reader trust. This starter
is built with [Next.js](https://nextjs.org) (App Router) because it gives you:

- **Excellent SEO** — server-rendered pages, automatic `sitemap.xml`, `robots.txt`,
  canonical URLs, Open Graph / Twitter cards, and rich structured data (JSON-LD).
- **Fast page loads** — critical for search ranking and ad revenue.
- **Markdown-based content** — write articles as plain `.md` files, no CMS required
  (though you can add one later).
- **E-E-A-T built in** — credentialed author profiles, "Medically reviewed by"
  badges, an editorial policy, and `MedicalWebPage` schema that signal trust to
  Google for "Your Money or Your Life" (YMYL) health content.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
content/posts/            Articles as Markdown files (frontmatter + body)
public/                   Static assets, ads.txt
src/
  app/                    Routes (App Router)
    page.tsx              Homepage
    articles/[slug]/      Article detail pages
    category/[slug]/      Category listing pages
    authors/[slug]/       Author / medical-reviewer profiles
    about, contact, ...   Trust & legal pages (About, Editorial Policy, etc.)
    sitemap.ts, robots.ts SEO endpoints
  components/             Header, Footer, ArticleCard, AdSlot, MedicalReviewBadge…
  lib/
    site.ts               ← Central site config (name, URL, AdSense ID, socials)
    categories.ts         Content verticals
    authors.ts            Author & reviewer profiles
    posts.ts              Markdown loading / parsing
```

## Writing an article

Create a file in `content/posts/your-slug.md`:

```markdown
---
title: "Your Article Title"
excerpt: "One or two sentence summary for cards and SEO."
category: "conditions"          # must match a slug in src/lib/categories.ts
author: "jordan-avery"          # must match a key in src/lib/authors.ts
reviewer: "maria-santos"        # optional medical reviewer
date: "2026-07-01"
image: "https://images.unsplash.com/..."
imageCredit: "Photo by … on Unsplash"
tags: ["tag-one", "tag-two"]
featured: true                   # optional — surfaces on the homepage hero
---

Your Markdown content here. Headings, tables, lists, and blockquotes are styled
automatically.
```

The article, its category page, the author page, and the sitemap all update
automatically.

## Customization checklist

Before launch, edit **`src/lib/site.ts`**:

- [ ] `name`, `tagline`, `description` — your brand
- [ ] `url` — your production domain (used for canonical URLs & sitemap)
- [ ] `adsensePublisherId` — your Google AdSense publisher ID (`ca-pub-…`)
- [ ] `social`, `contactEmail`, `organization` — your details

Then:

- [ ] Replace the sample authors in `src/lib/authors.ts` with your real team &
      credentials (critical for AdSense approval and SEO trust).
- [ ] Replace the placeholder legal pages (Privacy, Terms) with attorney-reviewed
      versions for your jurisdiction.
- [ ] Update `public/ads.txt` with your AdSense publisher ID.
- [ ] Wire up the newsletter form (`src/components/NewsletterSignup.tsx`) and the
      contact form to your email provider or an API route.

## AdSense notes

- Ad slots render via `src/components/AdSlot.tsx`. Until you set
  `adsensePublisherId` in `site.ts`, they show a labeled placeholder.
- For approval, Google wants: original, high-quality content; clear About,
  Contact, Privacy, and editorial pages (all included here); and, for health
  content, visible author credentials and medical review — which this starter
  provides.

## Deployment

Deploy to any Node host. [Vercel](https://vercel.com) is the simplest for
Next.js — connect the repo and it builds automatically. Remember to set your
production domain in `src/lib/site.ts`.

---

_This starter ships sample content for demonstration. Medical disclaimers are
included, but the sample articles are illustrative and should be reviewed by a
qualified professional before publication._

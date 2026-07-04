import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  reviewer?: string;
  date: string;
  updated?: string;
  image: string;
  imageCredit?: string;
  tags?: string[];
  featured?: boolean;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingMinutes: number;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function readFilenames(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));
}

export function getAllSlugs(): string[] {
  return readFilenames().map((f) => f.replace(/\.md$/, ''));
}

function parseFile(slug: string): { data: PostFrontmatter; content: string } {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  return { data: data as PostFrontmatter, content };
}

export function getPostMeta(slug: string): PostMeta {
  const { data, content } = parseFile(slug);
  return {
    ...data,
    slug,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
  };
}

export async function getPost(slug: string): Promise<Post> {
  const { data, content } = parseFile(slug);
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);
  return {
    ...data,
    slug,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    contentHtml: processed.toString(),
  };
}

/** All posts, newest first. */
export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => getPostMeta(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === categorySlug);
}

export function getPostsByAuthor(authorSlug: string): PostMeta[] {
  return getAllPosts().filter(
    (p) => p.author === authorSlug || p.reviewer === authorSlug
  );
}

export function getFeaturedPosts(limit = 4): PostMeta[] {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured);
  const pool = featured.length >= limit ? featured : posts;
  return pool.slice(0, limit);
}

export function getRelatedPosts(post: PostMeta, limit = 3): PostMeta[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-prose flex-col items-center px-4 py-24 text-center">
      <p className="font-serif text-6xl font-bold text-brand-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-2 text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Back to home
      </Link>
    </div>
  );
}

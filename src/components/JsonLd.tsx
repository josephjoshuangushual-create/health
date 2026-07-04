/**
 * Renders a JSON-LD structured-data script. Search engines use this to build
 * rich results and to understand author/reviewer credentials — important for
 * health (YMYL) content.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

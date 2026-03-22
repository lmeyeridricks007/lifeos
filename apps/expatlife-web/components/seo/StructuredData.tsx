/**
 * Renders JSON-LD structured data script tag.
 * Use with schema objects from lib/seo/schema.ts.
 */
type Props = {
  data: Record<string, unknown>;
};

export function StructuredData({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

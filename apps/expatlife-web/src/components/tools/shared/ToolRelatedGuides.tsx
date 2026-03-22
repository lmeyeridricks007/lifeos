import Link from "next/link";
import { CardLink } from "@/components/ui/card-link";
import type { ToolRelatedGuide } from "@/src/lib/tools/shared/toolPageContent";

export type ToolRelatedGuidesProps = {
  title?: string;
  guides: Array<{ href: string; title: string; description: string }>;
  className?: string;
};

/**
 * Grid of related guide cards. Matches ToolPageTemplate relatedGuides layout.
 */
export function ToolRelatedGuides({
  title = "Related guides",
  guides,
  className = "",
}: ToolRelatedGuidesProps) {
  if (!guides?.length) return null;
  return (
    <section className={className} aria-labelledby="related-guides-heading">
      <h2 id="related-guides-heading" className="mb-4 text-xl font-semibold text-slate-900">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <CardLink
            key={guide.href}
            href={guide.href}
            title={guide.title}
            description={guide.description}
            className="border-l-4 border-l-brand-500/70 border-sky-200/80 bg-white hover:border-brand-300 hover:bg-sky-50/50 hover:border-l-brand-600"
          />
        ))}
      </div>
    </section>
  );
}

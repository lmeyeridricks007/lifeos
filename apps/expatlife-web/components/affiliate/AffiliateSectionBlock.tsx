import type { AffiliateProvider } from "@/lib/affiliates";
import { AffiliateInlineCard } from "./AffiliateInlineCard";
import { AffiliateComparison } from "./AffiliateComparison";

export type AffiliateSectionBlockProps = {
  /** Section title (e.g. "Services commonly used by expats: Banking for expats") */
  title: string;
  providers: AffiliateProvider[];
  layout?: "cards" | "comparison";
  /** Optional id for the section heading */
  sectionId?: string;
};

/**
 * Sync presentational block for an affiliate section. Use when data is already loaded (e.g. from page).
 */
export function AffiliateSectionBlock({
  title,
  providers,
  layout = "cards",
  sectionId,
}: AffiliateSectionBlockProps) {
  if (!providers.length) return null;

  const id = sectionId ?? "affiliate-section";

  return (
    <section aria-labelledby={id} className="mt-6">
      <h2 id={id} className="text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-4">
        {layout === "comparison" ? (
          <AffiliateComparison providers={providers} />
        ) : (
          <div className="space-y-4">
            {providers.map((provider) => (
              <AffiliateInlineCard key={provider.id} provider={provider} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

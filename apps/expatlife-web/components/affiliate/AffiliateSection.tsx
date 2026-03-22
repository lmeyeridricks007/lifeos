import { getAffiliatesForCategory, getAffiliateCategoryTitle } from "@/lib/affiliates";
import { AffiliateInlineCard } from "./AffiliateInlineCard";
import { AffiliateComparison } from "./AffiliateComparison";

const SECTION_TITLE = "Services commonly used by expats";

type AffiliateSectionProps = {
  page: string;
  category: string;
  /** Optional custom title; defaults to SECTION_TITLE + category title */
  title?: string;
  /** Layout: "cards" (default) or "comparison". Comparison uses AffiliateComparison. */
  layout?: "cards" | "comparison";
};

export async function AffiliateSection({
  page,
  category,
  title,
  layout = "cards",
}: AffiliateSectionProps) {
  const providers = await getAffiliatesForCategory(page, category);
  if (!providers.length) return null;

  const categoryTitle = await getAffiliateCategoryTitle(category);
  const displayTitle = title ?? `${SECTION_TITLE}: ${categoryTitle}`;

  if (layout === "comparison") {
    return (
      <section aria-labelledby={`affiliate-section-${category}`} className="mt-6">
        <h2
          id={`affiliate-section-${category}`}
          className="text-xl font-semibold tracking-tight text-slate-900"
        >
          {displayTitle}
        </h2>
        <div className="mt-4">
          <AffiliateComparison providers={providers} />
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby={`affiliate-section-${category}`} className="mt-6">
      <h2
        id={`affiliate-section-${category}`}
        className="text-xl font-semibold tracking-tight text-slate-900"
      >
        {displayTitle}
      </h2>
      <div className="mt-4 space-y-4">
        {providers.map((provider) => (
          <AffiliateInlineCard key={provider.id} provider={provider} />
        ))}
      </div>
    </section>
  );
}

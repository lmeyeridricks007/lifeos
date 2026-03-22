import { getAffiliatesForCategory } from "@/lib/affiliates";
import { AffiliateInlineCard } from "./AffiliateInlineCard";

const SECTION_TITLE = "Services commonly used by expats";

type AffiliateSidebarProps = {
  page: string;
  categories: string[];
};

export async function AffiliateSidebar({ page, categories }: AffiliateSidebarProps) {
  const allProviders: Array<{ category: string; providers: Awaited<ReturnType<typeof getAffiliatesForCategory>> }> = [];
  for (const category of categories) {
    const providers = await getAffiliatesForCategory(page, category);
    if (providers.length) allProviders.push({ category, providers });
  }
  if (!allProviders.length) return null;

  return (
    <aside
      className="rounded-xl border border-blue-200 bg-blue-50 p-6"
      aria-label="Affiliate recommendations"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
        {SECTION_TITLE}
      </h3>
      <div className="mt-4 space-y-6">
        {allProviders.map(({ category, providers }) => (
          <div key={category}>
            {providers.map((provider) => (
              <AffiliateInlineCard key={provider.id} provider={provider} />
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

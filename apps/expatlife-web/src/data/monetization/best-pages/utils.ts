import type { BestProvidersMiniListItem } from "@/src/components/monetization/BestProvidersMiniList";
import type { BestProviderComparisonRow } from "@/src/lib/monetization/bestProvidersContent";

export function bestRowsToMiniListItems(
  rows: BestProviderComparisonRow[],
  limit = 4
): BestProvidersMiniListItem[] {
  return rows.slice(0, limit).map((r, i) => ({
    rank: i + 1,
    name: r.name,
    href: r.ctaHref,
    logo: r.logo,
    blurb: r.bestFor,
    isAffiliate: r.isAffiliate,
  }));
}

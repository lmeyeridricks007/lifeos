import { guideHasMonetizationAfterContent } from "@/src/lib/guides/monetizationGuideSlugs";
import {
  type ContextualAffiliateCategory,
  type ContextualAffiliateConfig,
  dedupeMidEnd,
} from "@/src/lib/monetization/contextualAffiliatePlan";
import { inferMonetizationCategoriesFromPath, type PageMonetizationMetadata } from "./pageMonetizationMetadata";
import { shouldRenderSelectiveSetupMonetization } from "@/src/lib/monetization/moveClusterPostFaqPolicy";

function isSuppressedByExistingMonetization(slug: string): boolean {
  return guideHasMonetizationAfterContent(slug) || shouldRenderSelectiveSetupMonetization(slug);
}

function resolveMidEndCategoriesFromMeta(meta: PageMonetizationMetadata): {
  midCats: ContextualAffiliateCategory[];
  endCats: ContextualAffiliateCategory[];
} {
  let midCats: ContextualAffiliateCategory[] = [];
  let endCats: ContextualAffiliateCategory[] = [];

  if (meta.midCategories?.length) {
    midCats = [...meta.midCategories];
  } else if (meta.categories?.length) {
    midCats = [...meta.categories];
  }

  if (meta.endCategories?.length) {
    endCats = [...meta.endCategories];
  } else if (meta.categories?.length) {
    endCats = [...meta.categories];
  } else if (meta.midCategories?.length) {
    endCats = [...meta.midCategories];
  }

  return { midCats, endCats };
}

function toAffiliateConfig(categories: ContextualAffiliateCategory[]): ContextualAffiliateConfig | null {
  if (!categories.length) return null;
  if (categories.length === 1) return { type: categories[0] };
  return { type: "combined", categories: [...categories] };
}

function applyPlacement(
  mid: ContextualAffiliateConfig | null,
  end: ContextualAffiliateConfig | null,
  placement: "both" | "mid-only" | "end-only"
): { mid: ContextualAffiliateConfig | null; end: ContextualAffiliateConfig | null } {
  if (placement === "mid-only") return { mid, end: null };
  if (placement === "end-only") return { mid: null, end };
  return { mid, end };
}

/**
 * Resolves mid/end `AffiliateSection` configs from merged page metadata + path inference + safe defaults.
 * Callers merge `NETHERLANDS_GUIDE_PAGE_MONETIZATION[slug]` with optional per-page overrides first.
 */
export function resolveNetherlandsGuideAffiliatePlan(
  slug: string,
  pageSlugPath: string,
  meta: PageMonetizationMetadata
): { mid: ContextualAffiliateConfig | null; end: ContextualAffiliateConfig | null } {
  if (meta.disabled && !meta.force) {
    return { mid: null, end: null };
  }

  const placement = meta.placement ?? "both";

  let { midCats, endCats } = resolveMidEndCategoriesFromMeta(meta);

  if (!midCats.length && !endCats.length) {
    const inferred = inferMonetizationCategoriesFromPath(pageSlugPath);
    midCats = inferred;
    endCats = inferred;
  }

  if (!midCats.length && !endCats.length) {
    if (!meta.force && isSuppressedByExistingMonetization(slug)) {
      return { mid: null, end: null };
    }
    return dedupeMidEnd({ type: "recommended" }, { type: "recommended" });
  }

  if (!meta.force && isSuppressedByExistingMonetization(slug)) {
    return { mid: null, end: null };
  }

  const midConfig = midCats.length ? toAffiliateConfig(midCats) : null;
  const endConfig = endCats.length ? toAffiliateConfig(endCats) : null;

  const placed = applyPlacement(midConfig, endConfig, placement);
  return dedupeMidEnd(placed.mid, placed.end);
}

import type { ContextualAffiliateCategory } from "@/src/lib/monetization/contextualAffiliatePlan";

/**
 * Declarative monetization for Netherlands routes.
 *
 * Next.js `page.tsx` modules must not export arbitrary constants (breaks generated route types).
 * Use `NETHERLANDS_GUIDE_PAGE_MONETIZATION`, a colocated `monetization.ts`, or pass `monetization` into
 * `GuideBySlugPage` / `buildNetherlandsGuideAffiliateSlots` from a non-page module.
 */
export type PageMonetizationMetadata = {
  /** Shorthand: used for mid and end when `midCategories` / `endCategories` are omitted. */
  categories?: ContextualAffiliateCategory[];
  /** After first major body section. */
  midCategories?: ContextualAffiliateCategory[];
  /** Before related / end-of-page region. */
  endCategories?: ContextualAffiliateCategory[];
  /** Disable all layout-driven `AffiliateSection` injection for this route. */
  disabled?: boolean;
  /** Bypass skip lists and post-FAQ suppression (use sparingly). */
  force?: boolean;
  placement?: "both" | "mid-only" | "end-only";
};

/**
 * Infer monetization categories from URL path when page metadata omits them.
 * Matches `/services/banks`, `/health-insurance`, `/housing`, utilities routes, etc.
 */
export function inferMonetizationCategoriesFromPath(path: string): ContextualAffiliateCategory[] {
  const p = path.toLowerCase();
  const out: ContextualAffiliateCategory[] = [];
  const add = (c: ContextualAffiliateCategory) => {
    if (!out.includes(c)) out.push(c);
  };

  if (
    /\/services\/banks(\/|$)/.test(p) ||
    /bank-account|open-bank|\/banks(\/|$)/.test(p) ||
    p.includes("banking")
  ) {
    add("banking");
  }
  if (
    /\/services\/health-insurance(\/|$)/.test(p) ||
    p.includes("health-insurance") ||
    /\/insurance(\/|$)/.test(p)
  ) {
    add("insurance");
  }
  if (/\/housing(\/|$)/.test(p) || /housing-platform|rental-agenc/.test(p)) {
    add("housing");
  }
  if (
    /\/services\/(mobile-connectivity|utilities)(\/|$)/.test(p) ||
    /\/utilities(\/|$)/.test(p) ||
    p.includes("mobile-connectivity")
  ) {
    add("utilities");
  }

  return out;
}

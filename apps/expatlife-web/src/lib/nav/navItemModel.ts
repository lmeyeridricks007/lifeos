import type { NavItem, NavItemNavStatus } from "./types";

/** True when the item should render as a real in-app link (safe target). */
export function isNavItemLinkable(item: NavItem): boolean {
  return item.navStatus === "live" && Boolean(item.href);
}

/** Strip trailing slash for comparison (Next pathname is often slashless; nav hrefs may end with `/`). */
function pathKey(path: string): string {
  const base = path.split("?")[0]?.split("#")[0] ?? path;
  if (base.length <= 1) return base;
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

/** Legacy Work-cluster URLs that 301 to live Jobs guides — keep nav “current” highlighting in sync. */
const NAV_ACTIVE_HREF_ALIASES: Record<string, string> = {
  "/netherlands/work/salary-negotiation-netherlands": "/netherlands/jobs/salary-negotiation-netherlands",
  "/netherlands/work/minimum-wage-netherlands": "/netherlands/jobs/minimum-wage-netherlands",
  "/netherlands/work/expat-salary-netherlands": "/netherlands/jobs/expat-salary-netherlands",
  "/netherlands/work/employee-benefits-netherlands": "/netherlands/jobs/employee-benefits-netherlands",
  "/netherlands/work/pension-netherlands": "/netherlands/jobs/pension-netherlands-expats",
  "/netherlands/work/holiday-allowance-netherlands": "/netherlands/jobs/holiday-allowance-netherlands",
  "/netherlands/work/finding-jobs-netherlands": "/netherlands/jobs/finding-jobs-netherlands",
  "/netherlands/work/employment-contract-netherlands": "/netherlands/jobs/employment-contract-netherlands",
  "/netherlands/work/probation-period-netherlands": "/netherlands/jobs/probation-period-netherlands",
  "/netherlands/work/notice-period-netherlands": "/netherlands/jobs/notice-period-netherlands",
  "/netherlands/work/employee-rights-netherlands": "/netherlands/jobs/employee-rights-netherlands",
  "/netherlands/work/freelancing-netherlands": "/netherlands/jobs/freelancing-netherlands",
  "/netherlands/work/contractor-vs-employee-netherlands": "/netherlands/jobs/contractor-vs-employee-netherlands",
  "/netherlands/work/zzp-netherlands": "/netherlands/business/zzp-netherlands",
  "/netherlands/work/bonus-tax-netherlands": "/netherlands/taxes/bonus-tax-netherlands",
  "/netherlands/taxes/healthcare-allowance": "/netherlands/taxes/healthcare-allowance-netherlands",
  "/netherlands/taxes/rent-allowance": "/netherlands/taxes/rent-allowance-netherlands",
  "/netherlands/taxes/childcare-allowance": "/netherlands/taxes/childcare-allowance-netherlands",
  "/netherlands/buying-house-netherlands": "/netherlands/housing/buying-a-house-netherlands",
  "/netherlands/mortgage-netherlands-expats": "/netherlands/housing/mortgages-netherlands-expats",
  "/netherlands/property-tax-netherlands": "/netherlands/taxes/property-tax-netherlands",
  "/netherlands/buy-vs-rent-netherlands": "/netherlands/housing/buy-vs-rent-netherlands",
  "/netherlands/double-taxation-netherlands": "/netherlands/taxes/double-taxation-netherlands",
  "/netherlands/taxes/expat-taxes-netherlands": "/netherlands/money/expat-taxes-netherlands",
  "/netherlands/living/utilities": "/netherlands/utilities/utilities-netherlands",
  "/netherlands/living/energy-and-water": "/netherlands/utilities/energy-and-water-netherlands",
  "/netherlands/living/internet-and-mobile": "/netherlands/utilities/internet-and-mobile-netherlands",
  "/netherlands/living/municipality-services": "/netherlands/practical-life/municipality-services-netherlands",
  "/netherlands/living/housing": "/netherlands/housing",
  "/netherlands/living/registering-your-address": "/netherlands/practical-life/registering-your-address-netherlands",
  "/netherlands/practical-life/address-registration-netherlands": "/netherlands/practical-life/registering-your-address-netherlands",
  "/netherlands/register-address-netherlands": "/netherlands/practical-life/registering-your-address-netherlands",
  "/netherlands/living/waste-and-recycling": "/netherlands/practical-life/waste-and-recycling-netherlands",
  "/netherlands/living/parking-and-local-permits": "/netherlands/practical-life/parking-and-local-permits-netherlands",
  "/netherlands/living/community-basics": "/netherlands/life/community-basics-netherlands",
  "/netherlands/living/local/community-basics": "/netherlands/life/community-basics-netherlands",
  "/netherlands/utilities-in-netherlands": "/netherlands/utilities/utilities-netherlands",
  "/netherlands/utilities": "/netherlands/utilities/utilities-netherlands",
};

/** Normalize pathname/href for active-state checks (legacy 301 sources → canonical guides). */
export function resolveNavActivePath(path: string): string {
  const normalized = pathKey(path);
  return NAV_ACTIVE_HREF_ALIASES[normalized] ?? normalized;
}

/** Pillar hub links: highlight only on the hub URL, not every nested guide beneath it. */
const NAV_HUB_EXACT_MATCH_ONLY = new Set([
  "/netherlands/taxes",
  "/netherlands/money",
  "/netherlands/jobs",
  "/netherlands/cities",
  "/netherlands/services",
  "/netherlands/tools",
  "/netherlands/living",
  "/netherlands/utilities",
  "/netherlands/moving-to-the-netherlands",
  "/netherlands/randstad",
  "/netherlands/housing",
  "/netherlands/life",
]);

/** Path matches an internal href (same rules as mega menu “current” highlighting). */
export function isNavHrefActive(pathname: string, href: string | undefined): boolean {
  if (!href) return false;
  const pn = pathKey(resolveNavActivePath(pathname));
  const h = pathKey(resolveNavActivePath(href));
  if (pn === h) return true;
  if (h !== "/" && pn.startsWith(h + "/")) {
    if (NAV_HUB_EXACT_MATCH_ONLY.has(h)) return false;
    return true;
  }
  const pathSlug = pathname.split("/").filter(Boolean).pop() ?? "";
  const hrefSlug = href.split("/").filter(Boolean).pop() ?? "";
  if (pathSlug && pathSlug === hrefSlug && pathname.includes("/netherlands/")) return true;
  return false;
}

/** Current location matches this item’s href (only meaningful when linkable). */
export function isNavItemActive(pathname: string, item: NavItem): boolean {
  if (!item.href || item.navStatus !== "live") return false;
  return isNavHrefActive(pathname, item.href);
}

/** Live links first, then coming soon (roadmap), stable by label within each group. */
export function sortNavItemsForDisplay(items: NavItem[]): NavItem[] {
  const rank = (s: NavItemNavStatus) => (s === "live" ? 0 : s === "comingSoon" ? 1 : 2);
  return [...items].sort((a, b) => rank(a.navStatus) - rank(b.navStatus) || a.label.localeCompare(b.label));
}

/**
 * Mega menu section columns: by default live → coming soon → hidden, preserving authored order
 * within each status bucket. Pass `comingSoonFirst` to show roadmap rows before live links.
 */
export function orderMegaMenuSectionItems(
  items: NavItem[],
  options?: { comingSoonFirst?: boolean }
): NavItem[] {
  const rank = (s: NavItemNavStatus) => (s === "live" ? 0 : s === "comingSoon" ? 1 : 2);
  const buckets: NavItem[][] = [[], [], []];
  for (const it of items) {
    buckets[rank(it.navStatus)]!.push(it);
  }
  if (options?.comingSoonFirst) {
    return [...buckets[1]!, ...buckets[0]!, ...buckets[2]!];
  }
  return buckets.flat();
}

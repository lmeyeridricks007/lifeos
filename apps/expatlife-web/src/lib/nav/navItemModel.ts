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

/** Path matches an internal href (same rules as mega menu “current” highlighting). */
export function isNavHrefActive(pathname: string, href: string | undefined): boolean {
  if (!href) return false;
  const pn = pathKey(pathname);
  const h = pathKey(href);
  if (pn === h) return true;
  if (h !== "/" && pn.startsWith(h + "/")) return true;
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
 * Mega menu section columns: keep live → coming soon → roadmap, but preserve the order items are
 * authored in `config.ts` within each group (alphabetical sort would override editorial order).
 */
export function orderMegaMenuSectionItems(items: NavItem[]): NavItem[] {
  const rank = (s: NavItemNavStatus) => (s === "live" ? 0 : s === "comingSoon" ? 1 : 2);
  const buckets: NavItem[][] = [[], [], []];
  for (const it of items) {
    buckets[rank(it.navStatus)]!.push(it);
  }
  return buckets.flat();
}

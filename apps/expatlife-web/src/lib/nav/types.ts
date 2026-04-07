export type CountrySlug = "netherlands";

/** Primary top-level nav keys (Start here merged into Move). */
export type TopNavKey =
  | "moving"
  | "cities"
  | "money"
  | "services"
  | "tools"
  | "living"
  | "culture";

/**
 * Resolved availability for nav (after `getRouteStatus` / tool registry).
 * - `live` — safe to render as an internal link.
 * - `comingSoon` — roadmap / placeholder; never render as a navigation link to a dead URL.
 * - `hidden` — omit from menus (gated or removed routes); filtered in `filterNavItem`.
 */
export type NavItemNavStatus = "live" | "comingSoon" | "hidden";

export type NavItem = {
  label: string;
  navStatus: NavItemNavStatus;
  /** Present only when `navStatus === "live"` — real in-app destination. */
  href?: string;
  description?: string;
  /** Optional extra label (e.g. "New"); "Soon" uses `ComingSoonBadge` + `navStatus`, not this. */
  badge?: string;
  icon?: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
  /**
   * Shown under the section title in mega menus — use for rollout context instead of
   * repeating “Soon” on every roadmap row.
   */
  roadmapNote?: string;
};

export type MegaMenu = {
  key: TopNavKey;
  label: string;
  sections: NavSection[];
  featured?: NavItem;
  tools?: NavItem[];
  /** `compact` = narrower panel (e.g. About); default full mega layout. */
  presentation?: "mega" | "compact";
  /** When false, featured card is omitted (avoids empty-looking CTAs). Default: show if `featured` resolves. */
  showFeatured?: boolean;
  /** When false, tools column is omitted even if `tools` is non-empty. */
  showToolsRail?: boolean;
  /** Main panel width intent for non-compact megas (`full` = wide for dense section grids). */
  megaDensity?: "default" | "standard" | "dense" | "full";
};

export type TopNavEntry = {
  key: TopNavKey;
  label: string;
  /** When set, clicking this nav item navigates here instead of only opening the mega menu. */
  href?: string;
};

export type CountryOption = {
  slug: CountrySlug;
  label: string;
};

/**
 * Later cleanup (manual): If the tools sidebar or dense mega-columns feel crowded, consider
 * removing duplicate placeholder tools from `menu-features.json` (same tool IDs in multiple
 * domain menus) or trimming `comingSoon` rows that are pure registry placeholders, not
 * editorial roadmap. Do not hide live routes without product/SEO review.
 */

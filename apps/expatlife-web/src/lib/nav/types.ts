export type CountrySlug = "netherlands";

export type TopNavKey = "home" | "move" | "work" | "money" | "living" | "culture" | "tools";

export type NavItem = {
  label: string;
  /** Omit when disabled (e.g. coming soon) so the item is not a real navigation target. */
  href?: string;
  description?: string;
  badge?: string;
  icon?: string;
  /** Non-clickable menu row (use with badge "Soon" for placeholder tools / planned pages). */
  disabled?: boolean;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export type MegaMenu = {
  key: TopNavKey;
  label: string;
  sections: NavSection[];
  featured?: NavItem;
  tools?: NavItem[];
};

export type TopNavEntry = {
  key: Exclude<TopNavKey, "home">;
  label: string;
  /** When set, clicking this nav item navigates here instead of only opening the mega menu. */
  href?: string;
};

export type CountryOption = {
  slug: CountrySlug;
  label: string;
};

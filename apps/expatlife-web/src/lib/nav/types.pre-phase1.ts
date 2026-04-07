/**
 * Snapshot of nav types before Phase 1 IA (2025). Used only by `config.pre-phase1.ts` for rollback reference.
 * @see config.pre-phase1.ts
 */
export type CountrySlug = "netherlands";

export type TopNavKey = "home" | "move" | "work" | "money" | "living" | "culture" | "tools";

export type NavItem = {
  label: string;
  href?: string;
  description?: string;
  badge?: string;
  icon?: string;
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
  href?: string;
};

export type CountryOption = {
  slug: CountrySlug;
  label: string;
};

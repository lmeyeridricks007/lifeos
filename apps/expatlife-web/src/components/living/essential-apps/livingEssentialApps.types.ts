import type { LucideIcon } from "lucide-react";
import type { LivingQuickStartPhase, LivingSectionNavItem } from "@/src/components/living/livingPillarContent";

/** Keys into `LIVING_APPS_ICON_MAP` — add keys here when registering new icons. */
export type LivingAppsIconKey =
  | "bike"
  | "bookOpen"
  | "calendarRange"
  | "car"
  | "cloudRain"
  | "creditCard"
  | "graduationCap"
  | "heartPulse"
  | "home"
  | "languages"
  | "landmark"
  | "mapPin"
  | "mapPinned"
  | "messageCircle"
  | "moon"
  | "package"
  | "shoppingBag"
  | "shoppingCart"
  | "smartphone"
  | "sparkles"
  | "tag"
  | "ticket"
  | "trainFront"
  | "utensilsCrossed"
  | "wallet"
  | "building2"
  | "route"
  | "shield"
  | "trash2"
  | "trendingUp"
  | "tv";

/** Badge shown on app cards and echoed in quick-start where relevant. */
export type LivingAppCardBadge = "must-have" | "strongly-useful" | "optional";

/** Optional outbound CTA (store / product site). Omit when no external link is needed. */
export type LivingAppOutboundLink = {
  href: string;
  label: string;
};

/** Official App Store / Play Store listings (optional; website often stays on `outbound`). */
export type LivingAppStoreLinks = {
  appStore?: { href: string; label?: string };
  playStore?: { href: string; label?: string };
};

/**
 * App card as authored in config (icon resolved at runtime).
 * Field names match editorial intent; UI maps to legacy labels (e.g. installWhen → “Install when”).
 */
export type LivingAppCardConfig = {
  name: string;
  /** Stable category id for grouping, analytics, and future filters — not always shown in UI. */
  category: LivingAppsCategoryId;
  bestFor: string;
  whyItMatters: string;
  installWhen: string;
  quickTip: string;
  badge: LivingAppCardBadge;
  iconKey: LivingAppsIconKey;
  outbound?: LivingAppOutboundLink;
  storeLinks?: LivingAppStoreLinks;
};

export type LivingAppsCategoryId =
  | "transport"
  | "payments"
  | "shopping"
  | "everyday"
  | "services"
  | "optional";

export type LivingAppsTextBit =
  | { kind: "text"; text: string }
  | { kind: "link"; text: string; href: string };

/** One paragraph built from text + inline links (no markdown). */
export type LivingAppsRichParagraph = LivingAppsTextBit[];

export type LivingAppsCategoryOverviewCardConfig = {
  anchorId: string;
  title: string;
  summary: string;
  iconKey: LivingAppsIconKey;
  /** Distinct CTA for accessibility (avoids duplicate “See apps” wording). */
  jumpLabel: string;
};

export type LivingAppsOptionalBlurbConfig = {
  title: string;
  body: string;
  iconKey: LivingAppsIconKey;
  /** Example app site when the blurb names a concrete product. */
  outbound?: LivingAppOutboundLink;
  /** App Store / Play when you want the same “Get the app” row as category cards. */
  storeLinks?: LivingAppStoreLinks;
  /** In-page jump (full path + hash) to a related section on Essential apps. */
  seeAlsoOnPage?: { href: string; label: string };
};

export type LivingAppsCategorySectionApps = {
  variant: "apps";
  /** Shown as `BetweenAppCategories` immediately before this section (omit for first block). */
  betweenDividerLabel?: string;
  anchorId: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  introParagraphs?: LivingAppsRichParagraph[];
  /** Wrapper `className` when there are two or more intro paragraphs (e.g. payment/shopping stacks). */
  introMultiClassName?: string;
  /** `className` on the single intro `<p>` when there is exactly one paragraph (e.g. everyday lead). */
  introSingleClassName?: string;
  apps: LivingAppCardConfig[];
  /** Closing line(s) under the app grid */
  footerParagraphs?: LivingAppsRichParagraph[];
  /** Merged into `FeaturedAppGrid` root (e.g. `lg:grid-cols-3` when there are three cards). */
  appGridClassName?: string;
};

export type LivingAppsCategorySectionOptional = {
  variant: "optional-blurbs";
  betweenDividerLabel?: string;
  anchorId: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  callout: {
    badge: string;
    title: string;
    body: string;
  };
  blurbs: LivingAppsOptionalBlurbConfig[];
};

export type LivingAppsCategorySectionConfig = LivingAppsCategorySectionApps | LivingAppsCategorySectionOptional;

export type LivingAppsFaqItemConfig = {
  id: string;
  question: string;
  answer: string;
};

export type LivingAppsReferenceLinkConfig = {
  href: string;
  label: string;
};

export type LivingAppsReferencesConfig = {
  sectionId: string;
  heading: string;
  description: LivingAppsRichParagraph;
  links: LivingAppsReferenceLinkConfig[];
  footnote: LivingAppsRichParagraph;
};

export type LivingAppsRelatedToolConfig = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  iconKey?: LivingAppsIconKey;
  compact?: boolean;
};

/** Resolved card for presentational grid (Lucide + legacy field names used by layout). */
export type LivingAppCardResolved = {
  name: string;
  category: LivingAppsCategoryId;
  bestFor: string;
  whyMatters: string;
  whenInstall: string;
  quickTip: string;
  badge: LivingAppCardBadge;
  Icon: LucideIcon;
  outbound?: LivingAppOutboundLink;
  storeLinks?: LivingAppStoreLinks;
};

export type LivingQuickStartPhaseConfig = Omit<LivingQuickStartPhase, "icon"> & {
  iconKey: LivingAppsIconKey;
};

export type LivingAppsPageCopyConfig = {
  dateModified: string;
  heroBullets: string[];
  heroQuickStrip: Array<{ iconKey: LivingAppsIconKey; label: string }>;
  atAGlanceCells: Array<{ title: string; body: string }>;
  atAGlanceNote: {
    badge: string;
    title: string;
    paragraphs: LivingAppsRichParagraph[];
  };
  startHereFooter: LivingAppsRichParagraph;
  surprisesFooter: LivingAppsRichParagraph;
  toolsIntro: LivingAppsRichParagraph;
  supplementalToolsEyebrow: string;
  supplementalToolsTitle: string;
  supplementalToolsDescription: LivingAppsRichParagraph;
};

export type LivingEssentialAppsConfig = {
  sectionNav: LivingSectionNavItem[];
  quickStart: LivingQuickStartPhaseConfig[];
  categoryOverview: LivingAppsCategoryOverviewCardConfig[];
  categories: LivingAppsCategorySectionConfig[];
  surprises: string[];
  faq: LivingAppsFaqItemConfig[];
  references: LivingAppsReferencesConfig;
  relatedTools: LivingAppsRelatedToolConfig[];
  supplementalToolsTitleId: string;
  copy: LivingAppsPageCopyConfig;
};

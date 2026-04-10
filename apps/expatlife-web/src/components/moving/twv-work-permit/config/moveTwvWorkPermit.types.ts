import type { PillarFaqItem } from "@expatlife/content";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";

export type MoveTwvWorkPermitVisualKey =
  | "twv"
  | "gvva"
  | "permitOnly"
  | "freeWork"
  | "employer"
  | "employee"
  | "timing"
  | "student"
  | "selfEmployed"
  | "change"
  | "route"
  | "default";

export type MoveTwvWorkPermitIconKey = "authorization" | "employer" | "route";

export type MoveTwvWorkPermitInternalLink = {
  label: string;
  href: string;
  linkId?: string;
  description?: string;
  meta?: string;
};

export type MoveTwvWorkPermitSectionBlock = {
  id: string;
  title: string;
  intro: string;
  whoItAppliesTo?: string;
  keyPoints?: string[];
  whatMattersNext?: string;
  visualKey?: MoveTwvWorkPermitVisualKey;
  internalLinks?: MoveTwvWorkPermitInternalLink[];
};

export type MoveTwvRouteCard = MoveTwvWorkPermitSectionBlock & {
  iconKey: MoveTwvWorkPermitIconKey;
  keyPoints: string[];
};

export type MoveTwvCategoryCard = MoveTwvWorkPermitSectionBlock & {
  chip?: string;
  keyPoints: string[];
};

export type MoveTwvWorkPermitTimingCard = MoveTwvWorkPermitSectionBlock & {
  label: string;
  priority: string;
  keyPoints: string[];
  internalLinks: MoveTwvWorkPermitInternalLink[];
};

export type MoveTwvWorkPermitTip = MoveTwvWorkPermitSectionBlock;

export type MoveTwvWorkPermitMisunderstanding = MoveTwvWorkPermitSectionBlock;

export type MoveTwvWorkPermitFocusSummary = {
  title: string;
  body: string;
  chips: string[];
};

export type MoveTwvComparisonSection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveTwvWorkPermitFocusSummary;
  blocks: MoveTwvCategoryCard[];
  pairedToolsEyebrow: string;
  pairedTools: Array<{
    label: string;
    href: string;
    description: string;
    visualKey?: MoveTwvWorkPermitVisualKey;
  }>;
  visualKey?: MoveTwvWorkPermitVisualKey;
};

export type MoveTwvWorkPermitTimingSection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveTwvWorkPermitFocusSummary;
  blocks: MoveTwvWorkPermitTimingCard[];
  visualKey?: MoveTwvWorkPermitVisualKey;
};

export type MoveTwvComparisonSections = {
  comparison: MoveTwvComparisonSection;
  matters: MoveTwvComparisonSection;
  notApply: MoveTwvComparisonSection;
  roles: MoveTwvComparisonSection;
  timing: MoveTwvWorkPermitTimingSection;
};

export type MoveTwvWorkPermitReferenceGroup = {
  id: string;
  title: string;
  links: Array<
    | { type: "external"; label: string; href: string }
    | { type: "internal"; label: string; href: string; linkId?: string }
  >;
};

export type MoveTwvWorkPermitReferences = {
  sectionId: string;
  sectionTitle: string;
  disclaimer: string;
  groups: MoveTwvWorkPermitReferenceGroup[];
};

export type MoveTwvWorkPermitToolSection = {
  eyebrow: string;
  description?: string;
  items: Array<{
    title: string;
    description: string;
    href: string;
    cta?: string;
    visualKey?: MoveTwvWorkPermitVisualKey;
  }>;
};

export type MoveTwvWorkPermitRelatedTools = {
  journeyIntro: string;
  sections: MoveTwvWorkPermitToolSection[];
};

export type MoveTwvWorkPermitToolsJourneySnapshot = {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: Array<{
    href: string;
    label: string;
    description: string;
    meta: string;
  }>;
};

export type MoveTwvWorkPermitExploreCard = {
  href: string;
  title: string;
  description: string;
  meta: string;
};

export type MoveTwvWorkPermitContinueCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export type MoveTwvWorkPermitPageMeta = {
  canonicalPath: string;
  movePillarHubPath: string;
  hero: {
    eyebrow: string;
    pageTitle: string;
    subtitle: string;
    contextChips: string[];
    bullets: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    compareLinks: {
      visasPage: MoveTwvWorkPermitInternalLink;
      permitsPage: MoveTwvWorkPermitInternalLink;
      workingPage: MoveTwvWorkPermitInternalLink;
    };
  };
  atAGlance: {
    sectionTitle: string;
    subtitle: string;
    cells: Array<{ title: string; body: string }>;
    note: string;
  };
  reassurance: Array<{ title: string; body: string }>;
  pillarJourneyBridge: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string;
    links: Array<{ href: string; label: string; description: string; meta: string }>;
  };
  startHereRegion: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  startHereCards: MoveTwvRouteCard[];
  comparisonSection: MoveTwvComparisonSection & { cards: MoveTwvCategoryCard[] };
  mattersSection: MoveTwvComparisonSection & { cards: MoveTwvCategoryCard[] };
  notApplySection: MoveTwvComparisonSection & { cards: MoveTwvCategoryCard[] };
  rolesSection: MoveTwvComparisonSection & { cards: MoveTwvCategoryCard[] };
  timingSection: MoveTwvWorkPermitTimingSection & {
    cards: Array<
      Omit<MoveTwvWorkPermitTimingCard, "internalLinks"> & {
        links: MoveTwvWorkPermitInternalLink[];
      }
    >;
  };
  misunderstandingsRegion: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  misunderstandings: Array<{ id: string; title: string; body: string }>;
  whatNextRegion: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  progressionSteps: Array<{
    id: string;
    label: string;
    href: string;
    description: string;
  }>;
  toolsRegion: {
    id: string;
    title: string;
    subtitle: string;
  };
  toolsJourneySnapshot: MoveTwvWorkPermitToolsJourneySnapshot;
  explorePillarCards: MoveTwvWorkPermitExploreCard[];
  relatedTools: MoveTwvWorkPermitRelatedTools;
  continueMove: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: MoveTwvWorkPermitContinueCard[];
  };
  sectionNav: MovePillarTocItem[];
  deepLinks: readonly {
    href: string;
    label: string;
    description: string;
  }[];
  faq: PillarFaqItem[];
  references: MoveTwvWorkPermitReferences;
};

export type MoveTwvWorkPermitStartCard = MoveTwvRouteCard;
export type MoveTwvWorkPermitGridCard = MoveTwvCategoryCard;
export type MoveTwvWorkPermitGridSection = MoveTwvComparisonSection;
export type MoveTwvWorkPermitSections = MoveTwvComparisonSections;

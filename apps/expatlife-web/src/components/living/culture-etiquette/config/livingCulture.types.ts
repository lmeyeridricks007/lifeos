import type { LivingQuickStartPhase } from "@/src/components/living/livingPillarContent";

export type LivingCultureIconKey =
  | "alertTriangle"
  | "building2"
  | "calendarDays"
  | "checkCircle2"
  | "clock"
  | "coffee"
  | "gift"
  | "hand"
  | "helpCircle"
  | "languages"
  | "mapPinned"
  | "shoppingBag"
  | "sparkles"
  | "trainFront"
  | "users"
  | "wallet";

export type LivingCultureLinkMeta = {
  href: string;
  label: string;
  description?: string;
};

export type LivingCultureQuickStartStage = Omit<LivingQuickStartPhase, "icon"> & {
  iconKey: LivingCultureIconKey;
};

export type LivingCultureSectionCard = {
  iconKey: LivingCultureIconKey;
  badge: string;
  title: string;
  body?: string;
  bullets?: string[];
  tip?: string;
  tone?: "default" | "accent";
  gridClassName?: string;
  visualKey?: string;
  link?: LivingCultureLinkMeta;
};

export type LivingCulturePracticalTipCallout = {
  eyebrow: string;
  title: string;
  body: string;
  tone?: "default" | "accent";
  link?: LivingCultureLinkMeta;
};

export type LivingCultureChecklistBlock = {
  eyebrow: string;
  bullets: string[];
};

export type LivingCultureSection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro?: string;
  bullets?: string[];
  cards: LivingCultureSectionCard[];
  callout?: LivingCulturePracticalTipCallout;
  checklist?: LivingCultureChecklistBlock;
  supportingText?: string;
  supportingLinks?: LivingCultureLinkMeta[];
};

export type LivingCultureMisunderstandingCard = {
  chip: string;
  title: string;
  body: string;
  link?: LivingCultureLinkMeta;
};

export type LivingCultureTips = {
  startHere: {
    badge: string;
    text: string;
  };
  firstWeeks: LivingCulturePracticalTipCallout;
  reassurance: {
    eyebrow: string;
    title: string;
    body: string;
    linksIntro: string;
    links: LivingCultureLinkMeta[];
  };
};

export type LivingCultureFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type LivingCultureReferenceLink = {
  href: string;
  label: string;
};

export type LivingCultureReferences = {
  title: string;
  intro: string;
  links: LivingCultureReferenceLink[];
  footerIntro: string;
  footerLinks: LivingCultureLinkMeta[];
};

export type LivingCultureRelatedToolCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  iconKey: LivingCultureIconKey;
};

export type LivingCultureRelatedTools = {
  sectionTitle: string;
  sectionSubtitle: string;
  intro: string;
  cards: LivingCultureRelatedToolCard[];
  roundOutEyebrow: string;
  roundOutBody: string;
  roundOutLinks: LivingCultureLinkMeta[];
};

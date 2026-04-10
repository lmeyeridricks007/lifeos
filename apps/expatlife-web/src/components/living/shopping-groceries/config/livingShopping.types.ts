import type { LivingQuickStartPhase } from "@/src/components/living/livingPillarContent";

export type LivingShoppingIconKey =
  | "badgePercent"
  | "calendarDays"
  | "checkCircle2"
  | "clock3"
  | "home"
  | "house"
  | "mapPin"
  | "package"
  | "shoppingBag"
  | "smartphone"
  | "sparkles"
  | "store"
  | "truck"
  | "wallet";

export type LivingShoppingTone = "default" | "accent";

export type LivingShoppingRhythm = "Everyday" | "Top-up" | "Occasionally useful";

export type LivingShoppingInternalLinkMeta = {
  href: string;
  label: string;
  description?: string;
};

export type LivingShoppingQuickStartStage = Omit<LivingQuickStartPhase, "icon"> & {
  iconKey: LivingShoppingIconKey;
};

export type LivingShoppingStoreCategory = {
  title: string;
  badge: string;
  intro: string;
  goodFor: string[];
  whenPeopleUseIt: string;
  practicalTip: string;
  rhythm: LivingShoppingRhythm;
  iconKey: LivingShoppingIconKey;
  visualKey?: string;
  internalLink?: LivingShoppingInternalLinkMeta;
};

/** Named supermarket / grocery chains commonly seen in the Netherlands (editorial, not price rankings). */
export type LivingShoppingSupermarketChain = {
  name: string;
  badge: string;
  strengths: string[];
  drawbacks: string[];
  /** One or two sentences: who benefits most from this chain. */
  bestFor: string;
  iconKey: LivingShoppingIconKey;
  /** Optional geography hint (e.g. regional chains). */
  regionNote?: string;
};

export type LivingShoppingTipCard = {
  title: string;
  badge: string;
  body: string;
  bullets?: string[];
  iconKey: LivingShoppingIconKey;
  tone?: LivingShoppingTone;
};

export type LivingShoppingCallout = {
  eyebrow: string;
  title: string;
  body: string;
};

export type LivingShoppingTips = {
  groceryBasics: LivingShoppingTipCard[];
  supermarketHabits: LivingShoppingTipCard[];
  householdShopping: LivingShoppingTipCard[];
  deliveries: LivingShoppingTipCard[];
  shopSmarter: LivingShoppingTipCard[];
  reassurance: {
    startHere: LivingShoppingCallout;
    supermarketHabits: LivingShoppingCallout;
    misunderstandings: LivingShoppingCallout;
    shopSmarter: LivingShoppingCallout;
  };
};

export type LivingShoppingMisunderstandingCard = {
  title: string;
  body: string;
};

export type LivingShoppingFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type LivingShoppingReferenceLink = {
  label: string;
  href: string;
};

export type LivingShoppingReferences = {
  title: string;
  intro: string;
  links: LivingShoppingReferenceLink[];
  footer: string;
};

export type LivingShoppingRelatedToolCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  iconKey: LivingShoppingIconKey;
};

export type LivingShoppingRelatedShortcut = {
  href: string;
  title: string;
  description: string;
  meta: string;
};

export type LivingShoppingRelatedTools = {
  sectionTitle: string;
  sectionSubtitle: string;
  intro: string;
  cards: LivingShoppingRelatedToolCard[];
  shortcutEyebrow: string;
  shortcutTitle: string;
  shortcutBody: string;
  shortcuts: readonly LivingShoppingRelatedShortcut[];
};

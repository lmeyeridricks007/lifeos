import type { LucideIcon } from "lucide-react";
import type { LivingQuickStartPhase, LivingSectionNavItem } from "@/src/components/living/livingPillarContent";
import {
  livingShoppingFaq,
  livingShoppingMisunderstandings,
  livingShoppingQuickStart,
  livingShoppingReferences,
  livingShoppingRelatedTools,
  livingShoppingStoreCategories,
  livingShoppingSupermarketChains,
  livingShoppingTips,
  resolveLivingShoppingIcon,
  type LivingShoppingCallout,
  type LivingShoppingInternalLinkMeta,
  type LivingShoppingRhythm,
} from "./config";

export const SHOPPING_GROCERIES_DATE_MODIFIED = "2026-04-09";

export type ShoppingInfoCard = {
  title: string;
  badge: string;
  body: string;
  icon: LucideIcon;
  bullets?: string[];
  tone?: "default" | "accent";
};

export type ShoppingStoreCategory = {
  title: string;
  badge: string;
  intro: string;
  goodFor: string[];
  whenPeopleUseIt: string;
  practicalTip: string;
  rhythm: LivingShoppingRhythm;
  icon: LucideIcon;
  visualKey?: string;
  internalLink?: LivingShoppingInternalLinkMeta;
};

export type ShoppingSupermarketChain = {
  name: string;
  badge: string;
  strengths: string[];
  drawbacks: string[];
  bestFor: string;
  icon: LucideIcon;
  regionNote?: string;
};

export type ShoppingSurprise = {
  title: string;
  body: string;
};

export type ShoppingToolCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  icon: LucideIcon;
};

export type ShoppingFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ShoppingCallout = LivingShoppingCallout;

export type ShoppingRelatedToolsConfig = {
  sectionTitle: string;
  sectionSubtitle: string;
  intro: string;
  shortcutEyebrow: string;
  shortcutTitle: string;
  shortcutBody: string;
};

export type ShoppingToolShortcut = {
  href: string;
  title: string;
  description: string;
  meta: string;
};

export const shoppingGroceriesSectionNav: LivingSectionNavItem[] = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#start-here", label: "Start here" },
  { href: "#grocery-basics", label: "Grocery basics" },
  { href: "#store-types", label: "Types of stores" },
  { href: "#supermarket-chains", label: "Supermarket chains" },
  { href: "#supermarket-habits", label: "Supermarket habits" },
  { href: "#household-shopping", label: "Household shopping" },
  { href: "#deliveries-online", label: "Deliveries & online ordering" },
  { href: "#surprises", label: "What surprises newcomers" },
  { href: "#shop-smarter", label: "Shop smarter" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
];

export const shoppingGroceriesHero = {
  eyebrow: "Living in the Netherlands",
  title: "Shopping & Groceries in the Netherlands",
  subtitle:
    "How everyday shopping actually works once you live here: supermarkets, self-checkout, store apps, household basics, and delivery habits without overcomplicating your first month.",
  bullets: [
    "What supermarket shopping really feels like day to day",
    "Which store types people use for different needs",
    "How self-checkout, bonus systems, and apps fit into everyday shopping",
    "Practical tips for your first week and first month",
  ],
  primaryCta: { href: "#start-here", label: "Start with the basics" },
  secondaryCta: { href: "#surprises", label: "See what surprises newcomers most" },
  quickStrip: [
    { icon: resolveLivingShoppingIcon("shoppingBag"), label: "Weekly shop and top-ups" },
    { icon: resolveLivingShoppingIcon("smartphone"), label: "Bonus apps when useful" },
    { icon: resolveLivingShoppingIcon("wallet"), label: "Self-checkout feels normal" },
    { icon: resolveLivingShoppingIcon("truck"), label: "Delivery for real-life weeks" },
  ],
};

export const shoppingGroceriesAtAGlance = {
  eyebrow: "Orientation",
  title: "At a glance",
  subtitle:
    "This page is meant to make everyday shopping feel normal quickly, not to turn you into a supermarket optimizer on day three.",
  cells: [
    {
      title: "What this page is for",
      body: "A practical guide to grocery shopping, household buying, everyday store habits, and errands once you are living in the Netherlands.",
    },
    {
      title: "Best for",
      body: "Newcomers, expats, students, couples, and families who want shopping routines to feel easy before they start optimizing every euro.",
    },
    {
      title: "What it covers",
      body: "Supermarkets, self-checkout, loyalty apps, household basics, deliveries, major Dutch chains (strengths and trade-offs), convenience trade-offs, and the store types people use for different needs.",
    },
    {
      title: "What it skips",
      body: "Live price rankings, chain-by-chain reviews, coupon hunting, and food-culture deep dives that do not help your first month.",
    },
  ],
  note: {
    badge: "Local reality",
    headline: "Neighborhood matters more than abstract chain rankings",
    paragraphs: [
      "Store mix, opening hours, product range, and delivery convenience vary by city and even by neighborhood.",
      "Use this guide to understand the rhythm first, then let your own route, postcode, and household routine decide which stores deserve a place in your week.",
      "Store apps can help over time, but the first goal is confidence: knowing where to go, how checkout works, and what to buy where.",
    ],
  },
};

function resolveInfoCards(cards: typeof livingShoppingTips.groceryBasics): ShoppingInfoCard[] {
  return cards.map(({ iconKey, ...card }) => ({
    ...card,
    icon: resolveLivingShoppingIcon(iconKey),
  }));
}

export const shoppingGroceriesQuickStart: LivingQuickStartPhase[] = livingShoppingQuickStart.map(({ iconKey, ...stage }) => ({
  ...stage,
  icon: resolveLivingShoppingIcon(iconKey),
}));

export const shoppingGroceriesPracticeCards: ShoppingInfoCard[] = resolveInfoCards(livingShoppingTips.groceryBasics);

export const shoppingGroceriesStoreCategories: ShoppingStoreCategory[] = livingShoppingStoreCategories.map(({ iconKey, ...category }) => ({
  ...category,
  icon: resolveLivingShoppingIcon(iconKey),
}));

export const shoppingGroceriesSupermarketChains: ShoppingSupermarketChain[] = livingShoppingSupermarketChains.map(({ iconKey, ...chain }) => ({
  ...chain,
  icon: resolveLivingShoppingIcon(iconKey),
}));

export const shoppingGroceriesHabitCards: ShoppingInfoCard[] = resolveInfoCards(livingShoppingTips.supermarketHabits);

export const shoppingGroceriesHouseholdCards: ShoppingInfoCard[] = resolveInfoCards(livingShoppingTips.householdShopping);

export const shoppingGroceriesDeliveryCards: ShoppingInfoCard[] = resolveInfoCards(livingShoppingTips.deliveries);

export const shoppingGroceriesSurprises: ShoppingSurprise[] = livingShoppingMisunderstandings;

export const shoppingGroceriesSmarterCards: ShoppingInfoCard[] = resolveInfoCards(livingShoppingTips.shopSmarter);

export const shoppingGroceriesStartHereCallout: ShoppingCallout = livingShoppingTips.reassurance.startHere;

export const shoppingGroceriesHabitCallout: ShoppingCallout = livingShoppingTips.reassurance.supermarketHabits;

export const shoppingGroceriesMisunderstandingsCallout: ShoppingCallout = livingShoppingTips.reassurance.misunderstandings;

export const shoppingGroceriesSmarterCallout: ShoppingCallout = livingShoppingTips.reassurance.shopSmarter;

export const shoppingGroceriesRelatedToolsConfig: ShoppingRelatedToolsConfig = {
  sectionTitle: livingShoppingRelatedTools.sectionTitle,
  sectionSubtitle: livingShoppingRelatedTools.sectionSubtitle,
  intro: livingShoppingRelatedTools.intro,
  shortcutEyebrow: livingShoppingRelatedTools.shortcutEyebrow,
  shortcutTitle: livingShoppingRelatedTools.shortcutTitle,
  shortcutBody: livingShoppingRelatedTools.shortcutBody,
};

export const shoppingGroceriesToolCards: ShoppingToolCard[] = livingShoppingRelatedTools.cards.map(({ iconKey, ...card }) => ({
  ...card,
  icon: resolveLivingShoppingIcon(iconKey),
}));

export const shoppingGroceriesMoveAndFamilyShortcuts: readonly ShoppingToolShortcut[] = livingShoppingRelatedTools.shortcuts;

export const shoppingGroceriesFaq: ShoppingFaqItem[] = livingShoppingFaq;

export const shoppingGroceriesReferences = livingShoppingReferences;

export const shoppingGroceriesMeta = {
  title: "Shopping & Groceries in the Netherlands",
  description:
    "A practical guide to how grocery shopping, supermarket habits, self-checkout, household buying, deliveries, and everyday errands actually work in the Netherlands.",
  keywords: [
    "grocery shopping netherlands expat",
    "supermarkets in netherlands guide",
    "daily shopping netherlands expat",
    "self checkout netherlands",
    "shopping and groceries netherlands guide",
  ],
};

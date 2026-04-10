/**
 * Typed content model for the Daily Life Basics page.
 * Copy lives in `livingDailyLife.config.ts`; resolve icons/links in the UI layer.
 */

import type { LivingQuickStartPhase } from "@/src/components/living/livingPillarContent";

/** Must match every key in `LIVING_DAILY_LIFE_INTERNAL_LINKS`. */
export type LivingDailyLifeLinkKey =
  | "survivalGuide"
  | "cultureEtiquette"
  | "essentialApps"
  | "shoppingGroceries"
  | "gettingAround"
  | "paymentsBasics"
  | "wasteRecycling"
  | "costOfLiving"
  | "utilities"
  | "childcare"
  | "healthcareAllowance"
  | "helpfulTools"
  | "toolsHub";

/** Must match every key in `DAILY_LIFE_ICON_MAP`. */
export type DailyLifeIconKey =
  | "arrowRight"
  | "baby"
  | "banknote"
  | "barcode"
  | "building2"
  | "calculator"
  | "checkCircle2"
  | "clock"
  | "coffee"
  | "creditCard"
  | "mapPinned"
  | "package"
  | "recycle"
  | "shoppingBag"
  | "smartphone"
  | "sparkles"
  | "stethoscope"
  | "trainFront"
  | "truck"
  | "undo2"
  | "utensilsCrossed"
  | "wallet"
  | "calendarDays";

export type LivingDailyLifeIntroChunk =
  | { type: "text"; text: string; emphasis?: "bold" | "medium" }
  | { type: "link"; linkKey: LivingDailyLifeLinkKey; label: string };

/** One paragraph = one `<p>` built from chunks (text + optional inline links). */
export type LivingDailyLifeIntroParagraph = LivingDailyLifeIntroChunk[];

export type LivingDailyLifeHowStep = { title: string; body: string };

export type LivingDailyLifePracticalCard =
  | {
      kind: "iconRow";
      tone: "default" | "accent";
      badge?: string;
      iconKey: DailyLifeIconKey;
      title: string;
      body?: string;
      bullets?: string[];
      gridClass?: string;
    }
  | {
      kind: "gradientChecklist";
      badge?: string;
      titleIconKey: DailyLifeIconKey;
      title: string;
      bullets: string[];
    };

export type LivingDailyLifeSidebarCallout = {
  ariaLabelledBy: string;
  title: string;
  items: Array<{ term: string; detail: string }>;
};

export type LivingDailyLifeSection =
  | {
      layout: "stack";
      id: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      intro?: LivingDailyLifeIntroParagraph[];
      howItWorks?: LivingDailyLifeHowStep[];
      cards?: LivingDailyLifePracticalCard[];
      cardsGridClass?: string;
    }
  | {
      layout: "stackWithSidebar";
      id: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      intro?: LivingDailyLifeIntroParagraph[];
      howItWorks?: LivingDailyLifeHowStep[];
      cards?: LivingDailyLifePracticalCard[];
      cardsGridClass?: string;
      sidebar: LivingDailyLifeSidebarCallout;
    };

export type LivingDailyLifeQuickStartStage = Omit<LivingQuickStartPhase, "icon"> & {
  iconKey: DailyLifeIconKey;
};

export type LivingDailyLifeFaqItem = { id: string; question: string; answer: string };

export type LivingDailyLifeReferenceLink = { href: string; label: string };

export type LivingDailyLifeOfficialBlock = {
  sectionTitle: string;
  intro: string;
  links: LivingDailyLifeReferenceLink[];
  footerIntro: string;
  footerLinks: Array<{ linkKey: LivingDailyLifeLinkKey; label: string }>;
};

export type LivingDailyLifeRelatedToolCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  iconKey: DailyLifeIconKey;
};

export type LivingDailyLifeRelatedTools = {
  sectionTitle: string;
  sectionSubtitle: string;
  cards: LivingDailyLifeRelatedToolCard[];
  roundOutEyebrow: string;
  roundOutTitle: string;
  roundOutBody: string;
};

export type LivingDailyLifeAtAGlanceCell = { title: string; body: string };

export type LivingDailyLifeAtAGlance = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cells: LivingDailyLifeAtAGlanceCell[];
  note: {
    badgeLabel: string;
    headline: string;
    body: string;
    alsoRead: Array<{ linkKey: LivingDailyLifeLinkKey; label: string }>;
    runNumbers: {
      links: Array<{ linkKey: LivingDailyLifeLinkKey; label: string }>;
      trailing: string;
    };
  };
};

export type LivingDailyLifeSurprisesBlock = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: Array<{ text: string; iconKey: DailyLifeIconKey }>;
};

export type LivingDailyLifeHero = {
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  crossLinksParagraph: LivingDailyLifeIntroParagraph;
  planningToolsParagraph: LivingDailyLifeIntroParagraph;
  quickStrip: Array<{ iconKey: DailyLifeIconKey; label: string }>;
};

export type LivingDailyLifeStartHereBlock = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  tip: { badge: string; text: string };
};

export type LivingDailyLifeTips = {
  startHere: LivingDailyLifeStartHereBlock;
};

export type LivingDailyLifeMeta = {
  dateModified: string;
  articleJsonLd: { headline: string; description: string };
  faqSectionSubtitle: string;
  relatedLivingSubtitle: string;
};

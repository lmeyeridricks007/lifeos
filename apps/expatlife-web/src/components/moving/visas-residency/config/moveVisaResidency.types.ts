import type { PillarFaqItem } from "@expatlife/content";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";

/** Optional theming / future icon map — keep keys stable when adding illustrations. */
export type MoveVisaResidencyVisualKey =
  | "job"
  | "partner"
  | "study"
  | "self"
  | "change"
  | "longTerm"
  | "work"
  | "family"
  | "zzp"
  | "extend"
  | "default";

export type MoveVisaResidencyInternalLink = {
  label: string;
  href: string;
  /** Stable id for analytics or future deep links */
  linkId?: string;
  /** Optional blurb for ToolCard-style tiles on Move guides */
  description?: string;
};

export type MoveVisaResidencyRouteCard = {
  id: string;
  visualKey?: MoveVisaResidencyVisualKey;
  title: string;
  intro: string;
  bestFor: string;
  chips: string[];
  /** Primary CTA — hash or internal path */
  nextStep: { ctaLabel: string; href: string; linkId?: string };
};

export type MoveVisaResidencyStudyFamilyCard = {
  id: string;
  visualKey?: MoveVisaResidencyVisualKey;
  chip: string;
  title: string;
  intro: string;
  nextStep: { ctaLabel: string; href: string; linkId?: string };
};

export type MoveVisaResidencySectionWorkRoutes = {
  kind: "workRoutes";
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  visualKey?: MoveVisaResidencyVisualKey;
  keyPoints: string[];
  pairedToolsEyebrow: string;
  pairedTools: Array<{
    label: string;
    href: string;
    description: string;
    visualKey?: MoveVisaResidencyVisualKey;
  }>;
};

export type MoveVisaResidencySectionStudyFamily = {
  kind: "studyFamily";
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  blocks: MoveVisaResidencyStudyFamilyCard[];
};

export type MoveVisaResidencySectionAfterArrival = {
  kind: "afterArrival";
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  openNextLabel: string;
  openNextLinks: MoveVisaResidencyInternalLink[];
  phases: Array<{ label: string; text: string; visualKey?: MoveVisaResidencyVisualKey }>;
  moreNote: string;
  docLinks: MoveVisaResidencyInternalLink[];
  primaryCtas: MoveVisaResidencyInternalLink[];
};

export type MoveVisaResidencySection =
  | MoveVisaResidencySectionWorkRoutes
  | MoveVisaResidencySectionStudyFamily
  | MoveVisaResidencySectionAfterArrival;

export type MoveVisaResidencyTip = {
  id: string;
  title: string;
  /** Supports `**bold**` via BoldParagraph */
  body: string;
  visualKey?: MoveVisaResidencyVisualKey;
};

export type MoveVisaResidencyMisunderstanding = {
  id: string;
  title: string;
  body: string;
  visualKey?: MoveVisaResidencyVisualKey;
};

export type MoveVisaResidencyReferenceGroup = {
  id: string;
  title: string;
  links: Array<
    | { type: "external"; label: string; href: string }
    | { type: "internal"; label: string; href: string; linkId?: string }
  >;
};

export type MoveVisaResidencyReferences = {
  sectionId: string;
  sectionTitle: string;
  disclaimer: string;
  groups: MoveVisaResidencyReferenceGroup[];
};

export type MoveVisaResidencyToolSection = {
  eyebrow: string;
  description?: string;
  items: Array<{
    title: string;
    description: string;
    href: string;
    cta?: string;
    visualKey?: MoveVisaResidencyVisualKey;
  }>;
};

export type MoveVisaResidencyRelatedTools = {
  journeyIntro: string;
  sections: MoveVisaResidencyToolSection[];
};

export type MoveVisaResidencyAtAGlanceCell = {
  title: string;
  body: string;
  visualKey?: MoveVisaResidencyVisualKey;
};

export type MoveVisaResidencyProgressionStep = {
  id: string;
  label: string;
  href: string;
  description: string;
  visualKey?: MoveVisaResidencyVisualKey;
};

export type MoveVisaResidencyContinueCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  visualKey?: MoveVisaResidencyVisualKey;
};

/** Page shell: hero, at-a-glance, TOC, deep links — single place for editorial chrome. */
export type MoveVisaResidencyPageMeta = {
  canonicalPath: string;
  movePillarHubPath: string;
  hero: {
    eyebrow: string;
    pageTitle: string;
    subtitle: string;
    bullets: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    compareLinks: { compareVisas: MoveVisaResidencyInternalLink; visaChecker: MoveVisaResidencyInternalLink };
  };
  atAGlance: {
    sectionTitle: string;
    subtitle: string;
    cells: MoveVisaResidencyAtAGlanceCell[];
    note: string;
  };
  sectionNav: MovePillarTocItem[];
  deepLinks: readonly {
    href: string;
    label: string;
    description: string;
  }[];
  progressionSteps: MoveVisaResidencyProgressionStep[];
  continueMove: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: MoveVisaResidencyContinueCard[];
  };
  toolsRegion: {
    id: string;
    title: string;
    subtitle: string;
  };
  misunderstandingsRegion: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  whatNextRegion: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  startHereRegion: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
  };
};


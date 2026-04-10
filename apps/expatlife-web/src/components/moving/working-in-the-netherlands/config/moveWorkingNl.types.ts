import type { PillarFaqItem } from "@expatlife/content";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";

export type MoveWorkingNlVisualKey =
  | "offer"
  | "relocate"
  | "arrival"
  | "journey"
  | "contract"
  | "salary"
  | "permit"
  | "support"
  | "admin"
  | "housing"
  | "family"
  | "tool"
  | "default";

export type MoveWorkingNlIconKey = "offer" | "relocate" | "arrival";

export type MoveWorkingNlInternalLink = {
  label: string;
  href: string;
  linkId?: string;
  description?: string;
  meta?: string;
};

export type MoveWorkingNlSectionBlock = {
  id: string;
  title: string;
  intro: string;
  bestFor?: string;
  keyPoints?: string[];
  whatMattersNext?: string;
  visualKey?: MoveWorkingNlVisualKey;
  internalLinks?: MoveWorkingNlInternalLink[];
};

export type MoveWorkingNlStartCard = MoveWorkingNlSectionBlock & {
  iconKey: MoveWorkingNlIconKey;
  keyPoints: string[];
};

export type MoveWorkingNlJourneyBlock = MoveWorkingNlSectionBlock & {
  label: string;
  keyPoints: string[];
};

export type MoveWorkingNlGridCard = MoveWorkingNlSectionBlock & {
  chip?: string;
  keyPoints: string[];
};

export type MoveWorkingNlAfterArrivalCard = MoveWorkingNlSectionBlock & {
  label: string;
  priority: string;
  keyPoints: string[];
  internalLinks: MoveWorkingNlInternalLink[];
};

export type MoveWorkingNlTip = MoveWorkingNlSectionBlock;

export type MoveWorkingNlMisunderstanding = MoveWorkingNlSectionBlock;

export type MoveWorkingNlFocusSummary = {
  title: string;
  body: string;
  chips: string[];
};

export type MoveWorkingNlJourneySection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveWorkingNlFocusSummary;
  blocks: MoveWorkingNlJourneyBlock[];
  visualKey?: MoveWorkingNlVisualKey;
};

export type MoveWorkingNlGridSection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveWorkingNlFocusSummary;
  blocks: MoveWorkingNlGridCard[];
  pairedToolsEyebrow: string;
  pairedTools: Array<{
    label: string;
    href: string;
    description: string;
    visualKey?: MoveWorkingNlVisualKey;
  }>;
  visualKey?: MoveWorkingNlVisualKey;
};

export type MoveWorkingNlAfterArrivalSection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveWorkingNlFocusSummary;
  blocks: MoveWorkingNlAfterArrivalCard[];
  visualKey?: MoveWorkingNlVisualKey;
};

export type MoveWorkingNlSections = {
  journey: MoveWorkingNlJourneySection;
  offers: MoveWorkingNlGridSection;
  salary: MoveWorkingNlGridSection;
  permits: MoveWorkingNlGridSection;
  afterArrival: MoveWorkingNlAfterArrivalSection;
};

export type MoveWorkingNlReferenceGroup = {
  id: string;
  title: string;
  links: Array<
    | { type: "external"; label: string; href: string }
    | { type: "internal"; label: string; href: string; linkId?: string }
  >;
};

export type MoveWorkingNlReferences = {
  sectionId: string;
  sectionTitle: string;
  disclaimer: string;
  groups: MoveWorkingNlReferenceGroup[];
};

export type MoveWorkingNlToolSection = {
  eyebrow: string;
  description?: string;
  items: Array<{
    title: string;
    description: string;
    href: string;
    cta?: string;
    visualKey?: MoveWorkingNlVisualKey;
  }>;
};

export type MoveWorkingNlRelatedTools = {
  journeyIntro: string;
  sections: MoveWorkingNlToolSection[];
};

export type MoveWorkingNlToolsJourneySnapshot = {
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

export type MoveWorkingNlExploreCard = {
  href: string;
  title: string;
  description: string;
  meta: string;
};

export type MoveWorkingNlContinueCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export type MoveWorkingNlPageMeta = {
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
      visasPage: MoveWorkingNlInternalLink;
      permitsPage: MoveWorkingNlInternalLink;
      workGuide: MoveWorkingNlInternalLink;
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
  startHereCards: MoveWorkingNlStartCard[];
  journeySection: MoveWorkingNlJourneySection & { stages: MoveWorkingNlJourneyBlock[] };
  offersSection: MoveWorkingNlGridSection & { cards: MoveWorkingNlGridCard[] };
  salarySection: MoveWorkingNlGridSection & { cards: MoveWorkingNlGridCard[] };
  permitsSection: MoveWorkingNlGridSection & { cards: MoveWorkingNlGridCard[] };
  afterArrivalRegion: MoveWorkingNlAfterArrivalSection & {
    cards: Array<
      Omit<MoveWorkingNlAfterArrivalCard, "internalLinks"> & {
        links: MoveWorkingNlInternalLink[];
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
  toolsJourneySnapshot: MoveWorkingNlToolsJourneySnapshot;
  explorePillarCards: MoveWorkingNlExploreCard[];
  relatedTools: MoveWorkingNlRelatedTools;
  continueMove: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: MoveWorkingNlContinueCard[];
  };
  sectionNav: MovePillarTocItem[];
  deepLinks: readonly {
    href: string;
    label: string;
    description: string;
  }[];
  faq: PillarFaqItem[];
  references: MoveWorkingNlReferences;
};

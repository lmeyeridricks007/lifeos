import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type {
  MoveVisaResidencyContinueCard,
  MoveVisaResidencyMisunderstanding,
  MoveVisaResidencyProgressionStep,
  MoveVisaResidencyReferences,
  MoveVisaResidencyRelatedTools,
  MoveVisaResidencyTip,
} from "../../visas-residency/config/moveVisaResidency.types";
import type { MoveResidencePermitInternalLink } from "../../residence-permits/config/moveResidencePermits.types";

export type ExtensionsStartHereCard = {
  id: string;
  iconKey: "statusStable" | "expiry" | "lifePlanning";
  title: string;
  intro: string;
  keyPoints: string[];
};

export type ExtensionsTimingCard = {
  id: string;
  title: string;
  intro: string;
  keyPoints?: string[];
};

export type ExtensionsLifeImpactCard = {
  id: string;
  title: string;
  intro: string;
  keyPoints?: string[];
  links: MoveResidencePermitInternalLink[];
};

export type ExtensionsOtherContextBlock = {
  id: string;
  letter: string;
  title: string;
  intro?: string;
  keyPoints?: string[];
  bestFor: string;
  whatMattersNext: string;
  nextLinks: MoveResidencePermitInternalLink[];
};

export type ExtensionsChangesPageMeta = {
  canonicalPath: string;
  movePillarHubPath: string;
  visasResidencyPath: string;
  residencePermitsPath: string;
  hero: {
    eyebrow: string;
    pageTitle: string;
    subtitle: string;
    bullets: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    compareLinks: {
      visasPage: MoveResidencePermitInternalLink;
      permitsPage: MoveResidencePermitInternalLink;
    };
  };
  atAGlance: {
    sectionTitle: string;
    subtitle: string;
    cells: Array<{ title: string; body: string }>;
    note: string;
  };
  startHereRegion: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  commonSituationsRegion: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  workSection: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    keyPoints: string[];
    pairedToolsEyebrow: string;
    pairedTools: Array<{ label: string; href: string; description: string }>;
  };
  otherContextsRegion: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    blocks: readonly ExtensionsOtherContextBlock[];
  };
  timingRegion: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: readonly ExtensionsTimingCard[];
  };
  lifeImpactRegion: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: readonly ExtensionsLifeImpactCard[];
  };
  sectionNav: MovePillarTocItem[];
  deepLinks: readonly { href: string; label: string; description: string }[];
  progressionSteps: MoveVisaResidencyProgressionStep[];
  continueMove: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: MoveVisaResidencyContinueCard[];
  };
  toolsRegion: { id: string; title: string; subtitle: string };
  toolsJourneySnapshot: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: ReadonlyArray<{ href: string; label: string; description: string; meta?: string }>;
  };
  misunderstandingsRegion: { eyebrow: string; title: string; subtitle: string };
  whatNextRegion: { eyebrow: string; title: string; subtitle: string };
  pillarJourneyBridge: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string;
    links: ReadonlyArray<{ href: string; label: string; description: string; meta?: string }>;
  };
  startHereCards: readonly ExtensionsStartHereCard[];
  situationCards: import("../../residence-permits/config/moveResidencePermits.types").MoveResidencePermitRouteCard[];
  tips: readonly MoveVisaResidencyTip[];
  misunderstandings: readonly MoveVisaResidencyMisunderstanding[];
  faq: import("@expatlife/content").PillarFaqItem[];
  references: MoveVisaResidencyReferences;
  relatedTools: MoveVisaResidencyRelatedTools;
};

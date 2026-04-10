import type { PillarFaqItem } from "@expatlife/content";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type {
  MoveVisaResidencyContinueCard,
  MoveVisaResidencyMisunderstanding,
  MoveVisaResidencyProgressionStep,
  MoveVisaResidencyReferences,
  MoveVisaResidencyRelatedTools,
} from "../../visas-residency/config/moveVisaResidency.types";
import type { MoveResidencePermitInternalLink } from "../../residence-permits/config/moveResidencePermits.types";

export type MoveStatusChangesVisualKey =
  | "basis"
  | "lifeShift"
  | "practical"
  | "studyToWork"
  | "jobChange"
  | "familyChange"
  | "selfEmployed"
  | "routeSwitch"
  | "continuity"
  | "timing"
  | "lifeImpact";

export type MoveStatusChangesLinkMeta = MoveResidencePermitInternalLink & {
  description?: string;
  ctaLabel?: string;
  meta?: string;
};

export type MoveStatusChangesStartHereCard = {
  id: string;
  iconKey: "basis" | "lifeShift" | "practical";
  title: string;
  intro: string;
  keyPoints: readonly string[];
  visualKey?: MoveStatusChangesVisualKey;
};

export type MoveStatusChangesSituationCard = {
  id: string;
  title: string;
  intro: string;
  whoItAffects: string;
  whyItMatters: string;
  whatMattersNext: string;
  keyPoints?: readonly string[];
  chips: readonly string[];
  iconKey: MoveStatusChangesVisualKey;
  nextStep: MoveStatusChangesLinkMeta & { ctaLabel: string };
  relatedLinks?: readonly MoveStatusChangesLinkMeta[];
};

export type MoveStatusChangesCategoryCard = {
  id: string;
  title: string;
  intro: string;
  whoItAffects: string;
  keyPoints: readonly string[];
  whatMattersNext: string;
  iconKey: MoveStatusChangesVisualKey;
  chip?: string;
  letter?: string;
  relatedLinks?: readonly MoveStatusChangesLinkMeta[];
};

export type MoveStatusChangesWorkSection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  scenarioCards: readonly MoveStatusChangesCategoryCard[];
  pairedToolsEyebrow: string;
  pairedTools: readonly MoveStatusChangesLinkMeta[];
};

export type MoveStatusChangesRouteCategorySection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  blocks: readonly MoveStatusChangesCategoryCard[];
};

export type MoveStatusChangesLifecycleCard = {
  id: string;
  title: string;
  intro: string;
  keyPoints?: readonly string[];
  links?: readonly MoveStatusChangesLinkMeta[];
  visualKey?: MoveStatusChangesVisualKey;
};

export type MoveStatusChangesLifecycleRegion = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: readonly MoveStatusChangesLifecycleCard[];
};

export type MoveStatusChangesTipCallout = {
  id: string;
  title: string;
  body: string;
  visualKey?: MoveStatusChangesVisualKey;
};

export type StatusChangesPageMeta = {
  canonicalPath: string;
  movePillarHubPath: string;
  visasResidencyPath: string;
  residencePermitsPath: string;
  extensionsChangesPath: string;
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
      extensionsPage: MoveResidencePermitInternalLink;
    };
  };
  atAGlance: {
    sectionTitle: string;
    subtitle: string;
    cells: Array<{ title: string; body: string }>;
    note: string;
  };
  startHereRegion: { id: string; eyebrow: string; title: string; subtitle: string };
  commonSituationsRegion: { id: string; eyebrow: string; title: string; subtitle: string };
  workSection: MoveStatusChangesWorkSection;
  otherContextsRegion: MoveStatusChangesRouteCategorySection;
  timingRegion: MoveStatusChangesLifecycleRegion;
  lifeImpactRegion: MoveStatusChangesLifecycleRegion;
  sectionNav: MovePillarTocItem[];
  deepLinks: readonly { href: string; label: string; description: string }[];
  progressionSteps: readonly MoveVisaResidencyProgressionStep[];
  continueMove: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: readonly MoveVisaResidencyContinueCard[];
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
  startHereCards: readonly MoveStatusChangesStartHereCard[];
  reassurance: readonly MoveStatusChangesTipCallout[];
  commonSituations: readonly MoveStatusChangesSituationCard[];
  misunderstandings: readonly MoveVisaResidencyMisunderstanding[];
  faq: readonly PillarFaqItem[];
  references: MoveVisaResidencyReferences;
  relatedTools: MoveVisaResidencyRelatedTools;
};

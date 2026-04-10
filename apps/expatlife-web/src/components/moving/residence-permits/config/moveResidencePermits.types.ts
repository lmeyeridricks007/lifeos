import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type {
  MoveVisaResidencyContinueCard,
  MoveVisaResidencyInternalLink,
  MoveVisaResidencyMisunderstanding,
  MoveVisaResidencyProgressionStep,
  MoveVisaResidencyReferences,
  MoveVisaResidencyRelatedTools,
  MoveVisaResidencyTip,
} from "../../visas-residency/config/moveVisaResidency.types";

/** Stable keys for chips, future icons, and analytics. */
export type MoveResidencePermitVisualKey =
  | "work"
  | "study"
  | "family"
  | "zzp"
  | "renew"
  | "in-nl"
  | "purpose"
  | "setup"
  | "change"
  | "study-block"
  | "partner"
  | "other"
  | "expiry"
  | "life-event"
  | "early"
  | "present-nl";

export type MoveResidencePermitInternalLink = MoveVisaResidencyInternalLink;

/**
 * Route-selector cards (“Pick a lane”) — scannable grid.
 * Maps to UI: bestFor → “Who it fits”, whatMattersNext → “Focus next”.
 */
export type MoveResidencePermitRouteCard = {
  id: string;
  visualKey: MoveResidencePermitVisualKey;
  title: string;
  /** Optional extra line if layouts expand; grid may ignore. */
  intro?: string;
  bestFor: string;
  keyPoints?: string[];
  whatMattersNext: string;
  chips: string[];
  nextStep: { ctaLabel: string; href: string; linkId?: string };
  links?: MoveResidencePermitInternalLink[];
};

/** Work-led permit section — intro + grid + paired tools. */
export type MoveResidencePermitWorkSection = {
  id: string;
  visualKey: MoveResidencePermitVisualKey;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  bestFor?: string;
  keyPoints: string[];
  whatMattersNext?: string;
  pairedToolsEyebrow: string;
  pairedTools: Array<{
    label: string;
    href: string;
    description: string;
  }>;
};

/** Study / family / ZZP / in-NL clusters — letter pills + links. */
export type MoveResidencePermitRouteCategoryBlock = {
  id: string;
  visualKey: MoveResidencePermitVisualKey;
  letter: string;
  title: string;
  intro?: string;
  bestFor: string;
  keyPoints?: string[];
  whatMattersNext: string;
  nextLinks: MoveResidencePermitInternalLink[];
};

export type MoveResidencePermitRouteCategoriesRegion = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  blocks: MoveResidencePermitRouteCategoryBlock[];
};

/** Work + route-category content bundle. */
export type MoveResidencePermitSections = {
  work: MoveResidencePermitWorkSection;
  routeCategories: MoveResidencePermitRouteCategoriesRegion;
};

/** Renewal grid cards. */
export type MoveResidencePermitRenewalCard = {
  id: string;
  visualKey?: MoveResidencePermitVisualKey;
  title: string;
  intro: string;
  bestFor?: string;
  keyPoints?: string[];
  whatMattersNext?: string;
};

export type MoveResidencePermitRenewalRegion = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: MoveResidencePermitRenewalCard[];
};

export type MoveResidencePermitAfterApprovalPhase = {
  label: string;
  text: string;
  visualKey?: MoveResidencePermitVisualKey;
};

export type MoveResidencePermitAfterApproval = {
  id: string;
  visualKey?: MoveResidencePermitVisualKey;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  openNextLabel: string;
  openNextLinks: MoveResidencePermitInternalLink[];
  phases: MoveResidencePermitAfterApprovalPhase[];
  moreNote: string;
  docLinks: MoveResidencePermitInternalLink[];
  primaryCtas: MoveResidencePermitInternalLink[];
};

export type MoveResidencePermitLifecycle = {
  renewal: MoveResidencePermitRenewalRegion;
  afterApproval: MoveResidencePermitAfterApproval;
};

export type PermitBasicsCard = {
  id: string;
  iconKey: "purpose" | "setup" | "change";
  visualKey?: MoveResidencePermitVisualKey;
  title: string;
  intro: string;
  bullets: string[];
};

export type MoveResidencePermitsPageMeta = {
  canonicalPath: string;
  movePillarHubPath: string;
  visasResidencyPath: string;
  hero: {
    eyebrow: string;
    pageTitle: string;
    subtitle: string;
    bullets: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    compareLinks: { visasPage: MoveResidencePermitInternalLink; compareVisas: MoveResidencePermitInternalLink };
  };
  atAGlance: {
    sectionTitle: string;
    subtitle: string;
    cells: Array<{ title: string; body: string }>;
    note: string;
  };
  commonSituationsRegion: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
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
  misunderstandingsRegion: { eyebrow: string; title: string; subtitle: string };
  whatNextRegion: { eyebrow: string; title: string; subtitle: string };
  studyFamilySection: MoveResidencePermitRouteCategoriesRegion;
  renewalSection: MoveResidencePermitRenewalRegion;
  pillarJourneyBridge: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string;
    links: ReadonlyArray<{ href: string; label: string; description: string; meta?: string }>;
  };
};

export type {
  MoveVisaResidencyMisunderstanding,
  MoveVisaResidencyReferences,
  MoveVisaResidencyRelatedTools,
} from "../../visas-residency/config/moveVisaResidency.types";

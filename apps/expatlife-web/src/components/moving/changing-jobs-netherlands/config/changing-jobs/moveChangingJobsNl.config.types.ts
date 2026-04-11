import type { PillarFaqItem } from "@expatlife/content";
import type {
  MoveWorkingNlContinueCard,
  MoveWorkingNlFocusSummary,
  MoveWorkingNlGridCard,
  MoveWorkingNlGridSection,
  MoveWorkingNlInternalLink,
  MoveWorkingNlJourneyBlock,
  MoveWorkingNlJourneySection,
  MoveWorkingNlReferences,
  MoveWorkingNlRelatedTools,
  MoveWorkingNlToolsJourneySnapshot,
  MoveWorkingNlVisualKey,
} from "../../../working-in-the-netherlands/config/moveWorkingNl.types";
import type { ChangingJobsNlIconKey, ChangingJobsNlPracticalLifeSection } from "../moveChangingJobsNl.types";

/**
 * Shared content block shape for Changing Jobs configs.
 * Mirrors `MoveWorkingNlSectionBlock` with explicit `keyPoints` for cards used on this page.
 */
export type MoveChangingJobsContentBlock = {
  id: string;
  title: string;
  intro: string;
  bestFor?: string;
  keyPoints: string[];
  whatMattersNext?: string;
  visualKey?: MoveWorkingNlVisualKey;
  /** Optional related internal links (for future callouts / “open next” wiring) */
  internalLinks?: MoveWorkingNlInternalLink[];
};

export type MoveChangingJobsJourneyBlockConfig = MoveChangingJobsContentBlock & {
  label: string;
};

export type MoveChangingJobsGridCardConfig = MoveChangingJobsContentBlock & {
  chip: string;
};

export type MoveChangingJobsStartCardConfig = {
  id: string;
  anchorId?: string;
  iconKey: ChangingJobsNlIconKey;
  phaseBadge: string;
  title: string;
  intro: string;
  bestFor?: string;
  keyPoints: string[];
  whatMattersNext?: string;
  visualKey?: MoveWorkingNlVisualKey;
  internalLinks?: MoveWorkingNlInternalLink[];
};

export type MoveChangingJobsPracticalCardConfig = {
  id: string;
  label: string;
  priority: string;
  title: string;
  intro?: string;
  bestFor?: string;
  keyPoints: string[];
  whatMattersNext?: string;
  visualKey?: MoveWorkingNlVisualKey;
  internalLinks?: MoveWorkingNlInternalLink[];
  links: MoveWorkingNlInternalLink[];
};

export type MoveChangingJobsJourneySectionConfig = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveWorkingNlFocusSummary;
  blocks: MoveChangingJobsJourneyBlockConfig[];
  visualKey?: MoveWorkingNlVisualKey;
};

export type MoveChangingJobsGridSectionConfig = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveWorkingNlFocusSummary;
  blocks: MoveChangingJobsGridCardConfig[];
  pairedToolsEyebrow: string;
  pairedTools: MoveWorkingNlGridSection["pairedTools"];
  visualKey?: MoveWorkingNlVisualKey;
};

export type MoveChangingJobsPracticalLifeSectionConfig = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveWorkingNlFocusSummary;
  cards: MoveChangingJobsPracticalCardConfig[];
};

/** Main narrative + grid sections (impact, contracts, permits, salary, practical life). */
export type MoveChangingJobsSections = {
  whatJobChangeAffects: MoveChangingJobsJourneySectionConfig;
  contracts: MoveChangingJobsGridSectionConfig;
  permits: MoveChangingJobsGridSectionConfig;
  salary: MoveChangingJobsGridSectionConfig;
  practicalLife: MoveChangingJobsPracticalLifeSectionConfig;
};

export type MoveChangingJobsTipsConfig = {
  reassurance: Array<{ title: string; body: string }>;
  confidenceChecklist: string[];
  /** Optional footer line under the reassurance card (e.g. resigning guide). */
  reassuranceFooter?: string;
};

export type MoveChangingJobsMisunderstandingCardConfig = {
  id: string;
  title: string;
  body: string;
  bestFor?: string;
  internalLinks?: MoveWorkingNlInternalLink[];
};

export type MoveChangingJobsMisunderstandingsRegionConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type MoveChangingJobsRelatedToolsBundle = {
  relatedTools: MoveWorkingNlRelatedTools;
  toolsRegion: { id: string; title: string; subtitle: string };
  toolsJourneySnapshot: MoveWorkingNlToolsJourneySnapshot;
  explorePillarCards: Array<{ href: string; title: string; description: string; meta: string }>;
  continueMove: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: MoveWorkingNlContinueCard[];
  };
};

/** Maps journey config blocks → view `MoveWorkingNlJourneyBlock[]` */
export function toJourneyBlocks(blocks: MoveChangingJobsJourneyBlockConfig[]): MoveWorkingNlJourneyBlock[] {
  return blocks.map((b) => ({
    id: b.id,
    label: b.label,
    title: b.title,
    intro: b.intro,
    bestFor: b.bestFor,
    keyPoints: b.keyPoints,
    whatMattersNext: b.whatMattersNext,
    visualKey: b.visualKey,
    internalLinks: b.internalLinks,
  }));
}

/** Maps grid config blocks → view `MoveWorkingNlGridCard[]` */
export function toGridCards(blocks: MoveChangingJobsGridCardConfig[]): MoveWorkingNlGridCard[] {
  return blocks.map((b) => ({
    id: b.id,
    chip: b.chip,
    title: b.title,
    intro: b.intro,
    bestFor: b.bestFor,
    keyPoints: b.keyPoints,
    whatMattersNext: b.whatMattersNext,
    visualKey: b.visualKey,
    internalLinks: b.internalLinks,
  }));
}

/** Maps practical cards → `ChangingJobsNlPracticalLifeSection["cards"]` */
export function toPracticalLifeCards(
  cards: MoveChangingJobsPracticalCardConfig[]
): ChangingJobsNlPracticalLifeSection["cards"] {
  return cards.map((c) => ({
    id: c.id,
    label: c.label,
    priority: c.priority,
    title: c.title,
    intro: c.intro,
    bestFor: c.bestFor,
    keyPoints: c.keyPoints,
    whatMattersNext: c.whatMattersNext,
    visualKey: c.visualKey,
    internalLinks: c.internalLinks,
    links: c.links,
  }));
}


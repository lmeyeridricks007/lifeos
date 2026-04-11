/**
 * Typed content model for the Resigning a Job in the Netherlands Move guide.
 * Maps to view shapes via {@link mapResigningJourneyBlocks}, {@link mapResigningGridCards}, {@link mapResigningPracticalCards}.
 */
import type { PillarFaqItem } from "@expatlife/content";
import type { ChangingJobsNlIconKey, ChangingJobsNlPracticalCard } from "../../../changing-jobs-netherlands/config/moveChangingJobsNl.types";
import type {
  MoveWorkingNlContinueCard,
  MoveWorkingNlFocusSummary,
  MoveWorkingNlGridCard,
  MoveWorkingNlGridSection,
  MoveWorkingNlInternalLink,
  MoveWorkingNlJourneyBlock,
  MoveWorkingNlReferences,
  MoveWorkingNlRelatedTools,
  MoveWorkingNlToolsJourneySnapshot,
  MoveWorkingNlVisualKey,
} from "../../../working-in-the-netherlands/config/moveWorkingNl.types";

/** Shared block shape for resignation narrative cards (layers, grid cells, tips). */
export type MoveResigningJobContentBlock = {
  id: string;
  title: string;
  intro: string;
  bestFor?: string;
  keyPoints: string[];
  whatMattersNext?: string;
  visualKey?: MoveWorkingNlVisualKey;
  internalLinks?: MoveWorkingNlInternalLink[];
};

/** Four-layer “what resignation can affect” stage. */
export type MoveResigningJobJourneyLayerConfig = MoveResigningJobContentBlock & {
  label: string;
};

/** Notice / permits / salary grid card (chip = eyebrow badge). */
export type MoveResigningJobGridCardConfig = MoveResigningJobContentBlock & {
  chip: string;
};

export type MoveResigningJobJourneySectionConfig = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveWorkingNlFocusSummary;
  blocks: MoveResigningJobJourneyLayerConfig[];
  visualKey?: MoveWorkingNlVisualKey;
};

export type MoveResigningJobGridSectionConfig = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveWorkingNlFocusSummary;
  blocks: MoveResigningJobGridCardConfig[];
  pairedToolsEyebrow: string;
  pairedTools: MoveWorkingNlGridSection["pairedTools"];
  visualKey?: MoveWorkingNlVisualKey;
};

export type MoveResigningJobPracticalCardConfig = {
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

export type MoveResigningJobPracticalLifeSectionConfig = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveWorkingNlFocusSummary;
  cards: MoveResigningJobPracticalCardConfig[];
  visualKey?: MoveWorkingNlVisualKey;
};

/** All narrative + grid sections for this guide. */
export type MoveResigningJobSections = {
  whatResignationAffects: MoveResigningJobJourneySectionConfig;
  contracts: MoveResigningJobGridSectionConfig;
  permits: MoveResigningJobGridSectionConfig;
  salary: MoveResigningJobGridSectionConfig;
  practicalLife: MoveResigningJobPracticalLifeSectionConfig;
};

export type MoveResigningJobStartHereRegionConfig = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type MoveResigningJobStartCardConfig = {
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

export type MoveResigningJobReassuranceCardConfig = {
  title: string;
  body: string;
  bestFor?: string;
  internalLinks?: MoveWorkingNlInternalLink[];
};

/** Short callouts under reassurance (optional). */
export type MoveResigningJobPracticalTipCalloutConfig = {
  id: string;
  title: string;
  intro: string;
  bestFor?: string;
  keyPoints?: string[];
  internalLinks?: MoveWorkingNlInternalLink[];
};

export type MoveResigningJobTipsConfig = {
  reassurance: MoveResigningJobReassuranceCardConfig[];
  confidenceChecklist: string[];
  reassuranceFooter?: string;
  practicalCallouts?: MoveResigningJobPracticalTipCalloutConfig[];
};

export type MoveResigningJobMisunderstandingCardConfig = {
  id: string;
  title: string;
  body: string;
  bestFor?: string;
  internalLinks?: MoveWorkingNlInternalLink[];
};

export type MoveResigningJobMisunderstandingsRegionConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type MoveResigningJobMisunderstandingsBundle = {
  region: MoveResigningJobMisunderstandingsRegionConfig;
  cards: MoveResigningJobMisunderstandingCardConfig[];
};

export type MoveResigningJobFaqConfig = readonly PillarFaqItem[];

export type MoveResigningJobReferencesConfig = MoveWorkingNlReferences;

export type MoveResigningJobToolsRegionConfig = {
  id: string;
  title: string;
  subtitle: string;
};

export type MoveResigningJobExplorePillarCardConfig = {
  href: string;
  title: string;
  description: string;
  meta: string;
};

export type MoveResigningJobRelatedToolsConfig = MoveWorkingNlRelatedTools;

export type MoveResigningJobContinueMoveConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: readonly MoveWorkingNlContinueCard[];
};

export type MoveResigningJobToolsBundle = {
  toolsRegion: MoveResigningJobToolsRegionConfig;
  toolsJourneySnapshot: MoveWorkingNlToolsJourneySnapshot;
  explorePillarCards: readonly MoveResigningJobExplorePillarCardConfig[];
  relatedTools: MoveResigningJobRelatedToolsConfig;
  continueMove: MoveResigningJobContinueMoveConfig;
};

export function mapResigningJourneyBlocks(blocks: MoveResigningJobJourneyLayerConfig[]): MoveWorkingNlJourneyBlock[] {
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

export function mapResigningGridCards(blocks: MoveResigningJobGridCardConfig[]): MoveWorkingNlGridCard[] {
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

export function mapResigningPracticalCards(cards: MoveResigningJobPracticalCardConfig[]): ChangingJobsNlPracticalCard[] {
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

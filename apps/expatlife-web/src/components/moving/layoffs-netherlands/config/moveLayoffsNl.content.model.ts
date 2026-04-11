/**
 * Layoffs NL — typed content model. Edit slices under `config/layoffs/`; page shell in `moveLayoffsPageFrame.config.ts`; assembly in `moveLayoffsNl.content.assemble.ts`.
 */
import type { PillarFaqItem } from "@expatlife/content";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type {
  MoveWorkingNlContinueCard,
  MoveWorkingNlInternalLink,
  MoveWorkingNlReferences,
  MoveWorkingNlRelatedTools,
  MoveWorkingNlToolsJourneySnapshot,
  MoveWorkingNlVisualKey,
} from "../../working-in-the-netherlands/config/moveWorkingNl.types";

/** Config packs often use `as const`; page assembly spreads into mutable copies for page meta. */
export type MoveLayoffsToolsJourneySnapshot = Omit<MoveWorkingNlToolsJourneySnapshot, "steps"> & {
  steps: ReadonlyArray<{
    href: string;
    label: string;
    description: string;
    meta: string;
  }>;
};
import type {
  MoveChangingJobsGridSectionConfig,
  MoveChangingJobsSections,
} from "../../changing-jobs-netherlands/config/changing-jobs/moveChangingJobsNl.config.types";

/** Start-here icons used only on the Layoffs guide. */
export type LayoffsNlStartIconKey = "layoffPossible" | "layoffUncertain" | "layoffConfirmed";

/**
 * Shared content block fields (for docs / future UI). Journey and grid configs in
 * `moveLayoffsSections.config.ts` already carry title, intro, bestFor?, keyPoints, whatMattersNext?, internalLinks?, visualKey? via Changing Jobs config types.
 */
export type MoveLayoffsContentBlockFields = {
  title: string;
  intro: string;
  bestFor?: string;
  keyPoints: string[];
  whatMattersNext?: string;
  visualKey?: MoveWorkingNlVisualKey;
  internalLinks?: MoveWorkingNlInternalLink[];
};

/**
 * Layoff-impact sections: four lenses + employment / permits / salary grids + practical life,
 * plus expat-focused rights, benefits, watch-outs, and action lists (Layoffs page only).
 */
export type MoveLayoffsSectionsConfig = MoveChangingJobsSections & {
  employeeRights: MoveChangingJobsGridSectionConfig;
  expatBenefits: MoveChangingJobsGridSectionConfig;
  expatWatchOuts: MoveChangingJobsGridSectionConfig;
  expatActions: MoveChangingJobsGridSectionConfig;
};

export type MoveLayoffsStartHereRegionConfig = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type MoveLayoffsStartCardConfig = {
  id: string;
  anchorId?: string;
  iconKey: LayoffsNlStartIconKey;
  phaseBadge: string;
  title: string;
  intro: string;
  bestFor?: string;
  keyPoints: string[];
  whatMattersNext?: string;
  visualKey?: MoveWorkingNlVisualKey;
  internalLinks?: MoveWorkingNlInternalLink[];
};

export type MoveLayoffsPracticalTipCalloutConfig = {
  id: string;
  title: string;
  intro: string;
  bestFor?: string;
  keyPoints?: string[];
  whatMattersNext?: string;
  visualKey?: MoveWorkingNlVisualKey;
  internalLinks?: MoveWorkingNlInternalLink[];
};

export type MoveLayoffsTipsConfig = {
  reassurance: Array<{
    title: string;
    body: string;
    bestFor?: string;
    internalLinks?: MoveWorkingNlInternalLink[];
  }>;
  confidenceChecklist: string[];
  reassuranceFooter?: string;
  practicalCallouts?: MoveLayoffsPracticalTipCalloutConfig[];
};

export type MoveLayoffsMisunderstandingCardConfig = {
  id: string;
  title: string;
  body: string;
  bestFor?: string;
  keyPoints?: string[];
  whatMattersNext?: string;
  visualKey?: MoveWorkingNlVisualKey;
  internalLinks?: MoveWorkingNlInternalLink[];
};

export type MoveLayoffsMisunderstandingsRegionConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type MoveLayoffsFaqConfig = PillarFaqItem[];

export type MoveLayoffsReferencesConfig = MoveWorkingNlReferences;

export type MoveLayoffsRelatedToolsPack = {
  relatedTools: MoveWorkingNlRelatedTools;
  toolsRegion: { id: string; title: string; subtitle: string };
  toolsJourneySnapshot: MoveLayoffsToolsJourneySnapshot;
  explorePillarCards: ReadonlyArray<{ href: string; title: string; description: string; meta: string }>;
  continueMove: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: ReadonlyArray<MoveWorkingNlContinueCard>;
  };
};

export type MoveLayoffsContentBundle = {
  sections: MoveLayoffsSectionsConfig;
  startHere: {
    region: MoveLayoffsStartHereRegionConfig;
    cards: MoveLayoffsStartCardConfig[];
  };
  tips: MoveLayoffsTipsConfig;
  misunderstandings: {
    region: MoveLayoffsMisunderstandingsRegionConfig;
    cards: MoveLayoffsMisunderstandingCardConfig[];
  };
  faq: MoveLayoffsFaqConfig;
  references: MoveLayoffsReferencesConfig;
  relatedTools: MoveLayoffsRelatedToolsPack;
};

export type MoveLayoffsHeroConfig = {
  eyebrow: string;
  pageTitle: string;
  subtitle: string;
  contextChips: string[];
  bullets: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type MoveLayoffsAtAGlanceConfig = {
  sectionTitle: string;
  subtitle: string;
  cells: Array<{ title: string; body: string }>;
  note: string;
};

export type MoveLayoffsPillarBridgeConfig = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  links: Array<{ href: string; label: string; description: string; meta: string }>;
};

export type MoveLayoffsWhatNextConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type MoveLayoffsProgressionStepConfig = {
  id: string;
  label: string;
  href: string;
  description: string;
};

export type MoveLayoffsPageFrameConfig = {
  hero: MoveLayoffsHeroConfig;
  atAGlance: MoveLayoffsAtAGlanceConfig;
  pillarJourneyBridge: MoveLayoffsPillarBridgeConfig;
  whatNextRegion: MoveLayoffsWhatNextConfig;
  progressionSteps: MoveLayoffsProgressionStepConfig[];
  sectionNav: MovePillarTocItem[];
  deepLinks: readonly { href: string; label: string; description: string }[];
};

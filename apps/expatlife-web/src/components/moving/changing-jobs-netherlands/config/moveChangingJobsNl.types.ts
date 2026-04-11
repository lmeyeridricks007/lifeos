import type { PillarFaqItem } from "@expatlife/content";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
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
} from "../../working-in-the-netherlands/config/moveWorkingNl.types";

export type ChangingJobsNlIconKey =
  | "resign"
  | "offer"
  | "start"
  /** Layoffs guide: early signal / role at risk / after confirmation */
  | "layoffPossible"
  | "layoffUncertain"
  | "layoffConfirmed";

export type ChangingJobsNlStartCard = {
  id: string;
  /** In-page anchor for deep links (e.g. quick nav to a phase card). */
  anchorId?: string;
  iconKey: ChangingJobsNlIconKey;
  /** Short badge: e.g. Before resigning / Before signing / After the switch */
  phaseBadge: string;
  title: string;
  intro: string;
  keyPoints: string[];
  bestFor?: string;
  whatMattersNext?: string;
  visualKey?: MoveWorkingNlVisualKey;
  internalLinks?: MoveWorkingNlInternalLink[];
};

export type ChangingJobsNlPracticalCard = {
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

export type ChangingJobsNlPracticalLifeSection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  firstFocus: MoveWorkingNlFocusSummary;
  cards: ChangingJobsNlPracticalCard[];
};

export type ChangingJobsNlPageMeta = {
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
  };
  atAGlance: {
    sectionTitle: string;
    subtitle: string;
    cells: Array<{ title: string; body: string }>;
    note: string;
  };
  reassurance: Array<{
    title: string;
    body: string;
    bestFor?: string;
    internalLinks?: MoveWorkingNlInternalLink[];
  }>;
  /** Short bullets reinforcing “you’re oriented” without doing everything at once */
  confidenceChecklist: string[];
  /** Optional one-liner under the reassurance card (e.g. resigning page). */
  reassuranceFooter?: string;
  /** Optional compact tip cards below reassurance (resigning guide). */
  practicalTipCallouts?: Array<{
    id: string;
    title: string;
    intro: string;
    bestFor?: string;
    keyPoints?: string[];
    internalLinks?: MoveWorkingNlInternalLink[];
  }>;
  pillarJourneyBridge: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string;
    links: Array<{ href: string; label: string; description: string; meta: string }>;
  };
  startHereRegion: { id: string; eyebrow: string; title: string; subtitle: string };
  startHereCards: ChangingJobsNlStartCard[];
  whatAffectsSection: MoveWorkingNlJourneySection & { stages: MoveWorkingNlJourneyBlock[] };
  contractsSection: MoveWorkingNlGridSection & { cards: MoveWorkingNlGridCard[] };
  permitsSection: MoveWorkingNlGridSection & { cards: MoveWorkingNlGridCard[] };
  salarySection: MoveWorkingNlGridSection & { cards: MoveWorkingNlGridCard[] };
  /** Layoffs NL — orientation on Dutch employment rights & redundancy (not legal advice). */
  employeeRightsSection?: MoveWorkingNlGridSection & { cards: MoveWorkingNlGridCard[] };
  /** Layoffs NL — benefits & extras that often stop or need a handover. */
  expatBenefitsSection?: MoveWorkingNlGridSection & { cards: MoveWorkingNlGridCard[] };
  /** Layoffs NL — common pitfalls for internationals when work ends. */
  expatWatchOutsSection?: MoveWorkingNlGridSection & { cards: MoveWorkingNlGridCard[] };
  /** Layoffs NL — concrete tips and next actions. */
  expatActionsSection?: MoveWorkingNlGridSection & { cards: MoveWorkingNlGridCard[] };
  practicalLifeSection: ChangingJobsNlPracticalLifeSection;
  misunderstandingsRegion: { eyebrow: string; title: string; subtitle: string };
  misunderstandings: Array<{
    id: string;
    title: string;
    body: string;
    bestFor?: string;
    internalLinks?: MoveWorkingNlInternalLink[];
  }>;
  whatNextRegion: { eyebrow: string; title: string; subtitle: string };
  progressionSteps: Array<{ id: string; label: string; href: string; description: string }>;
  toolsRegion: { id: string; title: string; subtitle: string };
  toolsJourneySnapshot: MoveWorkingNlToolsJourneySnapshot;
  explorePillarCards: Array<{ href: string; title: string; description: string; meta: string }>;
  relatedTools: MoveWorkingNlRelatedTools;
  continueMove: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: MoveWorkingNlContinueCard[];
  };
  sectionNav: MovePillarTocItem[];
  deepLinks: readonly { href: string; label: string; description: string }[];
  faq: PillarFaqItem[];
  references: MoveWorkingNlReferences;
};

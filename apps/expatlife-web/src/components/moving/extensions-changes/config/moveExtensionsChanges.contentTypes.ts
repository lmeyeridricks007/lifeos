import type { MoveResidencePermitVisualKey } from "../../residence-permits/config/moveResidencePermits.types";
import type { MoveVisaResidencyTip } from "../../visas-residency/config/moveVisaResidency.types";

/** Internal or external navigation target with optional editorial / analytics metadata. */
export type MoveExtensionsChangesLink = {
  label: string;
  href: string;
  /** Shown on tool cards / paired links where space allows */
  description?: string;
  /** Optional stable id (analytics, experiments) */
  linkId?: string;
};

/** Primary “change situation” cards (renewal, job change, study, etc.). */
export type MoveExtensionsChangesSituationCard = {
  id: string;
  visualKey: MoveResidencePermitVisualKey;
  title: string;
  intro?: string;
  whoItAffects: string;
  /** Optional extra bullets between intro and “who” — omit or `[]` to hide */
  keyPoints: string[];
  whatMattersNext: string;
  /** Shown as route / change badges */
  routeTags: string[];
  /** Primary CTA for the card */
  primaryLink: {
    ctaLabel: string;
    href: string;
    description?: string;
    linkId?: string;
  };
};

/** Work-led route category (single column section + paired tools). */
export type MoveExtensionsChangesWorkSection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  whoItAffects?: string;
  keyPoints: string[];
  whatMattersNext?: string;
  pairedToolsEyebrow: string;
  pairedTools: Array<{ label: string; href: string; description: string }>;
};

/** Study / family / ZZP / mixed clusters. */
export type MoveExtensionsChangesCategoryBlock = {
  id: string;
  letter: string;
  title: string;
  intro?: string;
  whoItAffects: string;
  keyPoints: string[];
  whatMattersNext: string;
  relatedLinks: MoveExtensionsChangesLink[];
};

export type MoveExtensionsChangesOtherContextsRegion = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  blocks: readonly MoveExtensionsChangesCategoryBlock[];
};

export type MoveExtensionsChangesLifecycleTimingCard = {
  id: string;
  title: string;
  intro: string;
  keyPoints?: string[];
};

export type MoveExtensionsChangesLifecycleLifeCard = {
  id: string;
  title: string;
  intro: string;
  keyPoints?: string[];
  relatedLinks: MoveExtensionsChangesLink[];
};

export type MoveExtensionsChangesLifecycle = {
  timing: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: readonly MoveExtensionsChangesLifecycleTimingCard[];
  };
  lifeImpact: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: readonly MoveExtensionsChangesLifecycleLifeCard[];
  };
};

export type MoveExtensionsChangesStartHereCardContent = {
  id: string;
  iconKey: "statusStable" | "expiry" | "lifePlanning";
  title: string;
  intro: string;
  keyPoints: string[];
};

export type MoveExtensionsChangesTips = {
  reassurance: readonly MoveVisaResidencyTip[];
  startHere: {
    region: {
      id: string;
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    cards: readonly MoveExtensionsChangesStartHereCardContent[];
  };
};

export type MoveExtensionsChangesMisunderstandingCard = {
  id: string;
  title: string;
  body: string;
  keyPoints?: string[];
};

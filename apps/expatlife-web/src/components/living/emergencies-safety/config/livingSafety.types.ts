import type { LivingQuickStartPhase } from "@/src/components/living/livingPillarContent";

export type LivingSafetyIconKey =
  | "alertTriangle"
  | "bike"
  | "building2"
  | "checkCircle2"
  | "fileText"
  | "heartPulse"
  | "home"
  | "keyRound"
  | "mapPin"
  | "phone"
  | "shield"
  | "smartphone"
  | "trainFront"
  | "users"
  | "wallet";

export type LivingSafetyTone = "default" | "accent";

export type LivingSafetyInternalLinkMeta = {
  href: string;
  label: string;
  description?: string;
};

export type LivingSafetyQuickStartStage = Omit<LivingQuickStartPhase, "icon"> & {
  iconKey: LivingSafetyIconKey;
};

export type LivingSafetyFlowSectionKey =
  | "emergencyVsUrgent"
  | "medicalUrgency"
  | "dailySafety"
  | "incidentAdmin"
  | "preparedness";

export type LivingSafetyCallout = {
  eyebrow: string;
  title: string;
  body: string;
};

export type LivingSafetyFlowCard = {
  title: string;
  badge: string;
  intro: string;
  bullets: string[];
  iconKey: LivingSafetyIconKey;
  tone?: LivingSafetyTone;
  visualKey?: string;
  callout?: LivingSafetyCallout;
  internalLink?: LivingSafetyInternalLinkMeta;
};

export type LivingSafetyFlowSections = Record<LivingSafetyFlowSectionKey, LivingSafetyFlowCard[]>;

export type LivingSafetyContactRole = {
  title: string;
  badge: string;
  intro: string;
  bestFor: string[];
  whenToUse: string;
  practicalTip: string;
  iconKey: LivingSafetyIconKey;
  internalLink?: LivingSafetyInternalLinkMeta;
};

export type LivingSafetyUrgencyLane = {
  badge: string;
  title: string;
  body: string;
  tone?: "default" | "non_urgent" | "urgent" | "emergency";
};

export type LivingSafetyTips = {
  urgencyLanes: LivingSafetyUrgencyLane[];
  reassurance: {
    startHere: LivingSafetyCallout;
    medical: LivingSafetyCallout;
    surprises: LivingSafetyCallout;
    preparedness: LivingSafetyCallout;
  };
};

export type LivingSafetyMisunderstandingCard = {
  title: string;
  body: string;
};

export type LivingSafetyFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type LivingSafetyReferenceLink = {
  label: string;
  href: string;
};

export type LivingSafetyReferences = {
  title: string;
  intro: string;
  links: LivingSafetyReferenceLink[];
  footer: string;
};

export type LivingSafetyRelatedToolCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  iconKey: LivingSafetyIconKey;
};

export type LivingSafetyRelatedShortcut = {
  href: string;
  title: string;
  description: string;
  meta: string;
};

export type LivingSafetyRelatedTools = {
  sectionTitle: string;
  sectionSubtitle: string;
  intro: string;
  cards: LivingSafetyRelatedToolCard[];
  shortcutEyebrow: string;
  shortcutTitle: string;
  shortcutBody: string;
  shortcuts: readonly LivingSafetyRelatedShortcut[];
};

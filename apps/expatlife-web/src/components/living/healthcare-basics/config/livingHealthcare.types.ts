import type { LivingQuickStartPhase } from "@/src/components/living/livingPillarContent";

export type LivingHealthcareIconKey =
  | "alertTriangle"
  | "building2"
  | "calendarDays"
  | "checkCircle2"
  | "fileText"
  | "heartPulse"
  | "mapPin"
  | "phone"
  | "pill"
  | "shield"
  | "stethoscope"
  | "users";

export type LivingHealthcareTone = "default" | "accent";

export type LivingHealthcareInternalLinkMeta = {
  href: string;
  label: string;
  description?: string;
};

export type LivingHealthcareQuickStartStage = Omit<LivingQuickStartPhase, "icon"> & {
  iconKey: LivingHealthcareIconKey;
};

export type LivingHealthcareFlowSectionKey =
  | "howItWorks"
  | "insuranceBasics"
  | "gp"
  | "emergencies"
  | "makeItEasier";

export type LivingHealthcareServiceRole = {
  title: string;
  badge: string;
  intro: string;
  bestFor: string[];
  whenToUse: string;
  practicalTip: string;
  iconKey: LivingHealthcareIconKey;
  internalLink?: LivingHealthcareInternalLinkMeta;
};

export type LivingHealthcareCallout = {
  eyebrow: string;
  title: string;
  body: string;
};

export type LivingHealthcareFlowCard = {
  title: string;
  badge: string;
  intro: string;
  bullets: string[];
  iconKey: LivingHealthcareIconKey;
  tone?: LivingHealthcareTone;
  visualKey?: string;
  callout?: LivingHealthcareCallout;
  internalLink?: LivingHealthcareInternalLinkMeta;
};

export type LivingHealthcareFlowSections = Record<LivingHealthcareFlowSectionKey, LivingHealthcareFlowCard[]>;

export type LivingHealthcareFlowStep = {
  badge: string;
  title: string;
  body: string;
};

export type LivingHealthcareCareLane = {
  badge: string;
  title: string;
  body: string;
  tone?: "default" | "non_emergency" | "urgent" | "emergency";
};

export type LivingHealthcareTips = {
  systemFlowSteps: LivingHealthcareFlowStep[];
  emergencyLanes: LivingHealthcareCareLane[];
  reassurance: {
    startHere: LivingHealthcareCallout;
    howItWorks?: LivingHealthcareCallout;
    insuranceBasics?: LivingHealthcareCallout;
    gp: LivingHealthcareCallout;
    emergencies?: LivingHealthcareCallout;
    surprises: LivingHealthcareCallout;
    makeItEasier: LivingHealthcareCallout;
  };
};

export type LivingHealthcareMisunderstandingCard = {
  title: string;
  body: string;
};

export type LivingHealthcareFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type LivingHealthcareReferenceLink = {
  label: string;
  href: string;
};

export type LivingHealthcareReferences = {
  title: string;
  intro: string;
  links: LivingHealthcareReferenceLink[];
  footer: string;
};

export type LivingHealthcareRelatedToolCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  iconKey: LivingHealthcareIconKey;
};

export type LivingHealthcareRelatedShortcut = {
  href: string;
  title: string;
  description: string;
  meta: string;
};

export type LivingHealthcareRelatedTools = {
  sectionTitle: string;
  sectionSubtitle: string;
  intro: string;
  cards: LivingHealthcareRelatedToolCard[];
  shortcutEyebrow: string;
  shortcutTitle: string;
  shortcutBody: string;
  shortcuts: readonly LivingHealthcareRelatedShortcut[];
};

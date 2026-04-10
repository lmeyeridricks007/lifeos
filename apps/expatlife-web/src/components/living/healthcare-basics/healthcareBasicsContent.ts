import type { LucideIcon } from "lucide-react";
import type { LivingQuickStartPhase, LivingSectionNavItem } from "@/src/components/living/livingPillarContent";
import {
  livingHealthcareFaq,
  livingHealthcareFlowSections,
  livingHealthcareMisunderstandings,
  livingHealthcareQuickStart,
  livingHealthcareReferences,
  livingHealthcareRelatedTools,
  livingHealthcareServiceRoles,
  livingHealthcareTips,
  resolveLivingHealthcareIcon,
  type LivingHealthcareCareLane,
  type LivingHealthcareCallout,
  type LivingHealthcareFlowStep,
  type LivingHealthcareInternalLinkMeta,
} from "./config";

export const HEALTHCARE_BASICS_DATE_MODIFIED = "2026-04-09";

export type HealthcareInfoCard = {
  title: string;
  badge: string;
  body: string;
  icon: LucideIcon;
  bullets?: string[];
  tone?: "default" | "accent";
  visualKey?: string;
  callout?: HealthcareCallout;
  internalLink?: LivingHealthcareInternalLinkMeta;
};

export type HealthcareServiceRole = {
  title: string;
  badge: string;
  intro: string;
  bestFor: string[];
  whenToUse: string;
  practicalTip: string;
  icon: LucideIcon;
  internalLink?: LivingHealthcareInternalLinkMeta;
};

export type HealthcareSurprise = {
  title: string;
  body: string;
};

export type HealthcareToolCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  icon: LucideIcon;
};

export type HealthcareFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type HealthcareCallout = LivingHealthcareCallout;

export type HealthcareRelatedToolsConfig = {
  sectionTitle: string;
  sectionSubtitle: string;
  intro: string;
  shortcutEyebrow: string;
  shortcutTitle: string;
  shortcutBody: string;
};

export type HealthcareToolShortcut = {
  href: string;
  title: string;
  description: string;
  meta: string;
};

export type HealthcareSystemFlowStep = LivingHealthcareFlowStep;

export type HealthcareEmergencyLane = LivingHealthcareCareLane;

export const healthcareBasicsSectionNav: LivingSectionNavItem[] = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#start-here", label: "Start here" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#insurance-basics", label: "Insurance basics" },
  { href: "#compare-insurers", label: "Compare insurers" },
  { href: "#gp-huisarts", label: "GP / huisarts" },
  { href: "#care-settings", label: "Pharmacies / hospitals / urgent care" },
  { href: "#emergencies", label: "Emergencies" },
  { href: "#surprises", label: "What surprises newcomers" },
  { href: "#make-it-easier", label: "Make it easier" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
];

export const healthcareBasicsHero = {
  eyebrow: "Living in the Netherlands",
  title: "Healthcare Basics in the Netherlands",
  subtitle:
    "A practical guide to how Dutch healthcare works in real life, from insurance and finding a GP to pharmacies, urgent care, emergencies, and the everyday points that often confuse newcomers.",
  bullets: [
    "What to set up first after arriving",
    "How the huisarts / GP fits into the system",
    "When to use pharmacies, hospitals, urgent care, and emergency services",
    "Practical tips to make the system feel easier and less confusing",
  ],
  primaryCta: { href: "#start-here", label: "Start with the essentials" },
  secondaryCta: { href: "#surprises", label: "See the biggest healthcare surprises" },
  quickStrip: [
    { icon: resolveLivingHealthcareIcon("shield"), label: "Insurance first" },
    { icon: resolveLivingHealthcareIcon("stethoscope"), label: "GP-led flow" },
    { icon: resolveLivingHealthcareIcon("pill"), label: "Pharmacy support" },
    { icon: resolveLivingHealthcareIcon("alertTriangle"), label: "112 vs urgent care" },
  ],
};

export const healthcareBasicsAtAGlance = {
  eyebrow: "Orientation",
  title: "At a glance",
  subtitle:
    "This page is here to make Dutch healthcare feel clearer and easier to use, not to replace medical advice or compare every insurer for you.",
  cells: [
    {
      title: "What this page is for",
      body: "A practical healthcare orientation guide for newcomers who want to understand how Dutch healthcare works in day-to-day life.",
    },
    {
      title: "Best for",
      body: "Expats, students, professionals, couples, and families who want a clear first guide to insurance, GPs, pharmacies, urgent care, and emergencies.",
    },
    {
      title: "What it covers",
      body: "Insurance basics, the huisarts role, pharmacies, hospitals, urgent care, emergency routes, and the setup steps that make the system easier to use.",
    },
    {
      title: "What it skips",
      body: "Diagnosis help, treatment advice, legal detail for every case, and full insurer-by-insurer comparison.",
    },
  ],
  note: {
    badge: "Important context",
    headline: "The first goal is understanding the flow",
    paragraphs: [
      "Dutch healthcare often feels unfamiliar at first because the GP plays a bigger role than many newcomers expect.",
      "Use this page to understand what to do first, where each part of the system fits, and who to contact in common situations.",
      "For urgent medical needs, use the right provider or emergency service instead of relying on editorial guidance alone.",
    ],
  },
};

function resolveFlowCards(cards: typeof livingHealthcareFlowSections.howItWorks): HealthcareInfoCard[] {
  return cards.map(({ iconKey, intro, ...card }) => ({
    ...card,
    body: intro,
    icon: resolveLivingHealthcareIcon(iconKey),
  }));
}

export const healthcareBasicsQuickStart: LivingQuickStartPhase[] = livingHealthcareQuickStart.map(({ iconKey, ...stage }) => ({
  ...stage,
  icon: resolveLivingHealthcareIcon(iconKey),
}));

export const healthcareBasicsHowItWorksCards: HealthcareInfoCard[] = resolveFlowCards(livingHealthcareFlowSections.howItWorks);

export const healthcareBasicsInsuranceCards: HealthcareInfoCard[] = resolveFlowCards(livingHealthcareFlowSections.insuranceBasics);

export const healthcareBasicsGpCards: HealthcareInfoCard[] = resolveFlowCards(livingHealthcareFlowSections.gp);

export const healthcareBasicsCareRoles: HealthcareServiceRole[] = livingHealthcareServiceRoles.map(({ iconKey, ...role }) => ({
  ...role,
  icon: resolveLivingHealthcareIcon(iconKey),
}));

export const healthcareBasicsEmergencyCards: HealthcareInfoCard[] = resolveFlowCards(livingHealthcareFlowSections.emergencies);

export const healthcareBasicsSurprises: HealthcareSurprise[] = livingHealthcareMisunderstandings;

export const healthcareBasicsEasierCards: HealthcareInfoCard[] = resolveFlowCards(livingHealthcareFlowSections.makeItEasier);

export const healthcareBasicsSystemFlowSteps: readonly HealthcareSystemFlowStep[] = livingHealthcareTips.systemFlowSteps;

export const healthcareBasicsEmergencyLanes: readonly HealthcareEmergencyLane[] = livingHealthcareTips.emergencyLanes;

export const healthcareBasicsStartHereCallout: HealthcareCallout = livingHealthcareTips.reassurance.startHere;

export const healthcareBasicsGpCallout: HealthcareCallout = livingHealthcareTips.reassurance.gp;

export const healthcareBasicsSurprisesCallout: HealthcareCallout = livingHealthcareTips.reassurance.surprises;

export const healthcareBasicsEasierCallout: HealthcareCallout = livingHealthcareTips.reassurance.makeItEasier;

export const healthcareBasicsRelatedToolsConfig: HealthcareRelatedToolsConfig = {
  sectionTitle: livingHealthcareRelatedTools.sectionTitle,
  sectionSubtitle: livingHealthcareRelatedTools.sectionSubtitle,
  intro: livingHealthcareRelatedTools.intro,
  shortcutEyebrow: livingHealthcareRelatedTools.shortcutEyebrow,
  shortcutTitle: livingHealthcareRelatedTools.shortcutTitle,
  shortcutBody: livingHealthcareRelatedTools.shortcutBody,
};

export const healthcareBasicsToolCards: HealthcareToolCard[] = livingHealthcareRelatedTools.cards.map(({ iconKey, ...card }) => ({
  ...card,
  icon: resolveLivingHealthcareIcon(iconKey),
}));

export const healthcareBasicsShortcuts: readonly HealthcareToolShortcut[] = livingHealthcareRelatedTools.shortcuts;

export const healthcareBasicsFaq: HealthcareFaqItem[] = livingHealthcareFaq;

export const healthcareBasicsReferences = livingHealthcareReferences;

export const healthcareBasicsMeta = {
  title: "Healthcare Basics in the Netherlands",
  description:
    "A practical guide to how Dutch healthcare works in real life, from insurance and finding a GP to pharmacies, urgent care, emergencies, and the everyday things newcomers often misunderstand.",
  keywords: [
    "healthcare netherlands expat",
    "dutch healthcare system basics",
    "huisarts gp netherlands expat",
    "urgent care netherlands expat",
    "health insurance and gp netherlands guide",
  ],
};

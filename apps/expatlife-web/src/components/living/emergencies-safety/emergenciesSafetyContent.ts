import type { LucideIcon } from "lucide-react";
import type { LivingQuickStartPhase, LivingSectionNavItem } from "@/src/components/living/livingPillarContent";
import {
  livingSafetyContactRoles,
  livingSafetyFaq,
  livingSafetyFlowSections,
  livingSafetyMisunderstandings,
  livingSafetyQuickStart,
  livingSafetyReferences,
  livingSafetyRelatedTools,
  livingSafetyTips,
  resolveLivingSafetyIcon,
  type LivingSafetyCallout,
  type LivingSafetyInternalLinkMeta,
  type LivingSafetyUrgencyLane,
} from "./config";

export const EMERGENCIES_SAFETY_DATE_MODIFIED = "2026-04-09";

export type EmergenciesInfoCard = {
  title: string;
  badge: string;
  body: string;
  icon: LucideIcon;
  bullets?: string[];
  tone?: "default" | "accent";
  visualKey?: string;
  callout?: EmergenciesCallout;
  internalLink?: LivingSafetyInternalLinkMeta;
};

export type EmergenciesContactRole = {
  title: string;
  badge: string;
  intro: string;
  bestFor: string[];
  whenToUse: string;
  practicalTip: string;
  icon: LucideIcon;
  internalLink?: LivingSafetyInternalLinkMeta;
};

export type EmergenciesSurprise = {
  title: string;
  body: string;
};

export type EmergenciesToolCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  icon: LucideIcon;
};

export type EmergenciesFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type EmergenciesCallout = LivingSafetyCallout;

export type EmergenciesRelatedToolsConfig = {
  sectionTitle: string;
  sectionSubtitle: string;
  intro: string;
  shortcutEyebrow: string;
  shortcutTitle: string;
  shortcutBody: string;
};

export type EmergenciesToolShortcut = {
  href: string;
  title: string;
  description: string;
  meta: string;
};

export type EmergenciesUrgencyLane = LivingSafetyUrgencyLane;

export const emergenciesSafetySectionNav: LivingSectionNavItem[] = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#start-here", label: "Start here" },
  { href: "#emergency-vs-urgent", label: "Emergency vs urgent" },
  { href: "#emergency-numbers", label: "Emergency numbers" },
  { href: "#medical-emergencies", label: "Medical emergencies" },
  { href: "#health-insurance-partners", label: "Health insurance" },
  { href: "#everyday-safety", label: "Everyday safety" },
  { href: "#lost-items-reports", label: "Lost items & reports" },
  { href: "#surprises", label: "What surprises newcomers" },
  { href: "#feel-prepared", label: "How to feel prepared" },
  { href: "#banking-partners", label: "Banking" },
  { href: "#relocation-partners", label: "Relocation & setup" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
];

export const emergenciesSafetyHero = {
  eyebrow: "Living in the Netherlands",
  title: "Emergencies & Safety in the Netherlands",
  subtitle:
    "A practical guide to what to do in emergencies, urgent situations, and everyday safety moments in the Netherlands, from 112 and urgent care to transport problems, lost items, and the simple habits that help when you are under stress.",
  bullets: [
    "Know when to call 112 and when not to",
    "Understand urgent vs non-urgent situations",
    "Learn the first practical steps after common incidents",
    "Build confidence and readiness without stress",
  ],
  primaryCta: { href: "#start-here", label: "Start with the essentials" },
  secondaryCta: { href: "#emergency-numbers", label: "See the most important numbers" },
  quickStrip: [
    { icon: resolveLivingSafetyIcon("phone"), label: "112 for emergencies" },
    { icon: resolveLivingSafetyIcon("heartPulse"), label: "Urgent is not always 112" },
    { icon: resolveLivingSafetyIcon("mapPin"), label: "Know your location" },
    { icon: resolveLivingSafetyIcon("home"), label: "Phone, home, and access ready" },
  ],
};

export const emergenciesSafetyAtAGlance = {
  eyebrow: "Orientation",
  title: "At a glance",
  subtitle:
    "This page is here to make emergencies and everyday safety feel clearer and easier to handle, not to replace official emergency guidance.",
  cells: [
    {
      title: "What this page is for",
      body: "A practical readiness guide for newcomers who want to know what to do in emergencies and common safety situations.",
    },
    {
      title: "Best for",
      body: "Expats, students, families, professionals, and anyone setting up everyday life in the Netherlands.",
    },
    {
      title: "What it covers",
      body: "Emergency numbers, urgent vs non-urgent situations, medical problems, everyday safety, lost items, and calm first-response habits.",
    },
    {
      title: "What it skips",
      body: "Legal advice, medical diagnosis, and full official emergency manuals.",
    },
  ],
  note: {
    badge: "Important context",
    headline: "The goal is calm readiness",
    paragraphs: [
      "Many newcomers find Dutch daily life orderly and manageable, but emergencies and urgent moments still happen.",
      "Understanding the broad system before you need it makes stressful situations much easier to handle.",
      "For real emergencies, official services and current official guidance are the source of truth.",
    ],
  },
};

function resolveFlowCards(cards: typeof livingSafetyFlowSections.emergencyVsUrgent): EmergenciesInfoCard[] {
  return cards.map(({ iconKey, intro, ...card }) => ({
    ...card,
    body: intro,
    icon: resolveLivingSafetyIcon(iconKey),
  }));
}

export const emergenciesSafetyQuickStart: LivingQuickStartPhase[] = livingSafetyQuickStart.map(({ iconKey, ...stage }) => ({
  ...stage,
  icon: resolveLivingSafetyIcon(iconKey),
}));

export const emergenciesSafetyEmergencyVsUrgentCards: EmergenciesInfoCard[] = resolveFlowCards(
  livingSafetyFlowSections.emergencyVsUrgent
);

export const emergenciesSafetyMedicalCards: EmergenciesInfoCard[] = resolveFlowCards(livingSafetyFlowSections.medicalUrgency);

export const emergenciesSafetyDailySafetyCards: EmergenciesInfoCard[] = resolveFlowCards(livingSafetyFlowSections.dailySafety);

export const emergenciesSafetyIncidentCards: EmergenciesInfoCard[] = resolveFlowCards(livingSafetyFlowSections.incidentAdmin);

export const emergenciesSafetyPreparednessCards: EmergenciesInfoCard[] = resolveFlowCards(livingSafetyFlowSections.preparedness);

export const emergenciesSafetyContactRoles: EmergenciesContactRole[] = livingSafetyContactRoles.map(({ iconKey, ...role }) => ({
  ...role,
  icon: resolveLivingSafetyIcon(iconKey),
}));

export const emergenciesSafetyUrgencyLanes: readonly EmergenciesUrgencyLane[] = livingSafetyTips.urgencyLanes;

export const emergenciesSafetyStartHereCallout: EmergenciesCallout = livingSafetyTips.reassurance.startHere;

export const emergenciesSafetyMedicalCallout: EmergenciesCallout = livingSafetyTips.reassurance.medical;

export const emergenciesSafetySurprisesCallout: EmergenciesCallout = livingSafetyTips.reassurance.surprises;

export const emergenciesSafetyPreparednessCallout: EmergenciesCallout = livingSafetyTips.reassurance.preparedness;

export const emergenciesSafetySurprises: EmergenciesSurprise[] = livingSafetyMisunderstandings;

export const emergenciesSafetyRelatedToolsConfig: EmergenciesRelatedToolsConfig = {
  sectionTitle: livingSafetyRelatedTools.sectionTitle,
  sectionSubtitle: livingSafetyRelatedTools.sectionSubtitle,
  intro: livingSafetyRelatedTools.intro,
  shortcutEyebrow: livingSafetyRelatedTools.shortcutEyebrow,
  shortcutTitle: livingSafetyRelatedTools.shortcutTitle,
  shortcutBody: livingSafetyRelatedTools.shortcutBody,
};

export const emergenciesSafetyToolCards: EmergenciesToolCard[] = livingSafetyRelatedTools.cards.map(({ iconKey, ...card }) => ({
  ...card,
  icon: resolveLivingSafetyIcon(iconKey),
}));

export const emergenciesSafetyShortcuts: readonly EmergenciesToolShortcut[] = livingSafetyRelatedTools.shortcuts;

export const emergenciesSafetyFaq: EmergenciesFaqItem[] = livingSafetyFaq;

export const emergenciesSafetyReferences = livingSafetyReferences;

export const emergenciesSafetyMeta = {
  title: "Emergencies & Safety in the Netherlands",
  description:
    "A practical guide to what to do in emergencies, urgent situations, and everyday safety moments in the Netherlands, from emergency numbers and urgent care to transport incidents, lost items, and basic preparedness.",
  keywords: [
    "emergency number netherlands expat",
    "safety in netherlands expat",
    "urgent care netherlands expat",
    "what to do in emergency netherlands",
    "newcomer safety guide netherlands",
  ],
};

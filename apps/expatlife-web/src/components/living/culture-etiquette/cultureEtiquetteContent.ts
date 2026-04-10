import {
  Building2,
  CalendarDays,
  Coffee,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { LivingSectionNavItem } from "@/src/components/living/livingPillarContent";
import {
  LIVING_CULTURE_ETIQUETTE_PATH,
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_LANGUAGE_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
  LIVING_WEATHER_PATH,
} from "@/src/components/living/livingPillarContent";

export const CULTURE_ETIQUETTE_DATE_MODIFIED = "2026-04-09";

export type CultureEtiquetteHeroConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  quickStrip: Array<{ icon: LucideIcon; label: string }>;
};

export const cultureEtiquetteSectionNav: LivingSectionNavItem[] = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#explore-living-pillar", label: "Related guides" },
  { href: "#start-here", label: "Start here" },
  { href: "#communication-style", label: "Communication style" },
  { href: "#social-etiquette", label: "Social etiquette" },
  { href: "#neighbors-public-space", label: "Neighbors & public space" },
  { href: "#work-culture", label: "Work culture" },
  { href: "#birthdays-visits", label: "Birthdays & visits" },
  { href: "#common-misunderstandings", label: "Common misunderstandings" },
  { href: "#how-to-adapt", label: "How to adapt" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
];

export const cultureEtiquetteHero: CultureEtiquetteHeroConfig = {
  eyebrow: "Living in the Netherlands",
  title: "Dutch Culture & Etiquette",
  subtitle:
    "A calm, practical guide to everyday Dutch social norms so directness, invitations, neighbors, birthdays, and workplace habits feel easier to understand without making every interaction feel like a puzzle.",
  bullets: [
    "Understand directness without over-reading it",
    "Learn what usually matters in social, public, and work settings",
    "Avoid the small misunderstandings that make new places feel harder",
    "Get practical guidance that stays balanced and non-stereotyped",
  ],
  primaryCta: { href: "#start-here", label: "Start with the basics" },
  secondaryCta: { href: "#common-misunderstandings", label: "See the biggest cultural surprises" },
  quickStrip: [
    { icon: Users, label: "Directness needs context" },
    { icon: CalendarDays, label: "Plans often run on time" },
    { icon: Building2, label: "Work can feel flatter" },
    { icon: Coffee, label: "Warmth can still be structured" },
  ],
};

export const cultureEtiquetteAtAGlance = {
  eyebrow: "Quick overview",
  title: "At a glance",
  subtitle:
    "A practical page for people who want to understand ordinary Dutch social cues without overthinking every interaction.",
  cells: [
    {
      title: "What this page is for",
      body: "Practical help with everyday Dutch social norms so ordinary interactions feel clearer and easier to handle.",
    },
    {
      title: "Best for",
      body: "Newcomers, expats, students, and international professionals who want quick, useful context for daily life.",
    },
    {
      title: "What it covers",
      body: "Directness, invitations, punctuality, neighbors, public-space etiquette, work basics, birthdays, and common misunderstandings.",
    },
    {
      title: "What it skips",
      body: "Deep anthropology, legal rules, and rigid stereotype lists that treat every person the same.",
    },
  ],
  note: {
    badge: "Context matters",
    headline: "Use this as a guide, not a rulebook",
    body:
      "People differ widely by city, age, workplace, background, and personality. These patterns are useful because they help newcomers interpret everyday situations more calmly, not because every Dutch person behaves the same way.",
  },
};

export const cultureEtiquetteRelatedLinks = [
  {
    title: "Netherlands Survival Guide",
    description: "Start here when you want the broader Living stack around payments, apps, weather, and first-week sequencing.",
    href: LIVING_SURVIVAL_GUIDE_PATH,
    cta: "Back to Survival Guide",
  },
  {
    title: "Daily Life Basics",
    description: "Pair culture cues with the practical routines around groceries, shops, parcels, and paying day to day.",
    href: LIVING_DAILY_LIFE_PATH,
    cta: "Read Daily Life Basics",
  },
  {
    title: "Essential Apps",
    description: "Useful when your social confidence still depends on having the right transport, payment, and shopping apps ready.",
    href: LIVING_ESSENTIAL_APPS_PATH,
    cta: "Open the app guide",
  },
  {
    title: "Getting Around",
    description: "Bike lanes, public-space habits, and commuting all shape what everyday consideration looks like in practice.",
    href: LIVING_GETTING_AROUND_PATH,
    cta: "Read transport guide",
  },
  {
    title: "Language & phrases",
    description: "Practical Dutch for greetings, service moments, neighbors, and the low-pressure language habits that support social confidence.",
    href: LIVING_LANGUAGE_PATH,
    cta: "Open language guide",
  },
  {
    title: "Weather & seasons",
    description: "Useful when weather changes social planning, commuting expectations, and the feel of ordinary Dutch routines.",
    href: LIVING_WEATHER_PATH,
    cta: "Read weather guide",
  },
];

export const cultureEtiquetteMeta = {
  articleHeadline: "Dutch Culture & Etiquette",
  articleDescription:
    "A practical guide to everyday Dutch social norms — from direct communication and invitations to work culture, neighbors, birthdays, and the small habits that often surprise newcomers.",
  faqSubtitle: "Short, practical answers for the situations newcomers ask about most.",
  relatedLivingSubtitle:
    "Stay inside the Living cluster when you want practical pages that connect culture to ordinary routines.",
};

export const cultureEtiquetteDeeperLinks = {
  workCultureGuide: "/netherlands/work/work-culture-netherlands/",
  first90Days: "/netherlands/first-90-days-netherlands/",
  first30Days: "/netherlands/first-30-days-netherlands/",
};

export const cultureEtiquetteCanonical = LIVING_CULTURE_ETIQUETTE_PATH;

import type { LucideIcon } from "lucide-react";
import {
  AlarmClockCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Coffee,
  Ear,
  Handshake,
  Languages,
  MapPinned,
  MessageCircleMore,
  Package,
  ShoppingBag,
  Sparkles,
  Store,
  TrainFront,
  Users,
  Workflow,
} from "lucide-react";
import type {
  LivingClusterLinkItem,
  LivingQuickStartPhase,
  LivingSectionNavItem,
} from "@/src/components/living/livingPillarContent";
import {
  livingLanguageFaq,
  livingLanguageMisunderstandings,
  livingLanguagePhraseGroups,
  livingLanguageQuickStart,
  livingLanguageReferences,
  livingLanguageRelatedTools,
  livingLanguageSituations,
} from "./config/livingLanguage.config";
import type {
  LivingLanguageIconKey,
  LivingLanguagePhrase,
  LivingLanguagePhraseGroup as LivingLanguagePhraseGroupConfig,
  LivingLanguageSituation as LivingLanguageSituationConfig,
} from "./config/livingLanguage.types";

export const LANGUAGE_PAGE_DATE_MODIFIED = "2026-04-09";

const LANGUAGE_ICON_MAP: Record<LivingLanguageIconKey, LucideIcon> = {
  alarmClockCheck: AlarmClockCheck,
  bookOpenCheck: BookOpenCheck,
  briefcaseBusiness: BriefcaseBusiness,
  coffee: Coffee,
  ear: Ear,
  handshake: Handshake,
  languages: Languages,
  mapPinned: MapPinned,
  messageCircleMore: MessageCircleMore,
  package: Package,
  shoppingBag: ShoppingBag,
  sparkles: Sparkles,
  store: Store,
  trainFront: TrainFront,
  users: Users,
  workflow: Workflow,
};

function resolveLanguageIcon(iconKey: LivingLanguageIconKey): LucideIcon {
  return LANGUAGE_ICON_MAP[iconKey];
}

export const languageSectionNav: LivingSectionNavItem[] = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#explore-living-pillar", label: "Related guides" },
  { href: "#start-here", label: "Start here" },
  { href: "#do-you-need-dutch", label: "Do you need Dutch?" },
  { href: "#useful-phrases", label: "Useful phrases" },
  { href: "#daily-situations", label: "Daily situations" },
  { href: "#work-neighbors", label: "Work & neighbors" },
  { href: "#english-vs-dutch", label: "English vs Dutch" },
  { href: "#common-misunderstandings", label: "Common misunderstandings" },
  { href: "#how-to-improve", label: "How to improve" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
];

export const languageHero = {
  eyebrow: "Living in the Netherlands",
  title: "Language & Phrases for Life in the Netherlands",
  subtitle:
    "A simple guide to the Dutch that helps newcomers handle shops, transport, cafes, work, neighbors, and everyday errands with more confidence.",
  bullets: [
    "What Dutch you actually need first",
    "Useful phrases for transport, shops, cafes, and everyday errands",
    "When English is fine - and when a little Dutch helps a lot",
    "Real-life language confidence without turning this into a course",
  ],
  primaryCta: { href: "#start-here", label: "Start with the essentials" },
  secondaryCta: { href: "#useful-phrases", label: "See the most useful phrases" },
  quickStrip: [
    { icon: Languages, label: "English often works" },
    { icon: Sparkles, label: "A little Dutch buys goodwill" },
    { icon: Store, label: "Shops, cafes, transport" },
    { icon: Users, label: "Neighbors and work cues" },
  ] satisfies Array<{ icon: LucideIcon; label: string }>,
};

export const languageAtAGlance = {
  eyebrow: "Quick overview",
  title: "At a glance",
  subtitle:
    "This page is for everyday confidence, not perfect Dutch. It helps you get through daily life more easily without turning language into a big extra project.",
  cells: [
    {
      title: "What this page is for",
      body: "A practical language survival guide for daily Dutch life - shops, transport, cafes, neighbors, and short work interactions.",
    },
    {
      title: "Best for",
      body: "Expats, students, international hires, and newcomers who want to feel more capable fast without taking on a full language course.",
    },
    {
      title: "What it covers",
      body: "Useful phrases, realistic expectations, and the moments where a little Dutch makes daily life easier.",
    },
    {
      title: "What it skips",
      body: "Grammar-heavy teaching, giant vocabulary dumps, and performative pressure to sound fluent immediately.",
    },
  ],
  note: {
    badge: "Reality check",
    headline: "English is often enough - but a little Dutch helps a lot",
    body:
      "Many people can function in English in the Netherlands, especially in cities and international settings. Even so, simple Dutch greetings and service phrases often make daily life smoother. The goal here is practical confidence, not perfect Dutch.",
  },
};

export const languageQuickStart: LivingQuickStartPhase[] = livingLanguageQuickStart.map((stage) => ({
  ...stage,
  icon: resolveLanguageIcon(stage.iconKey),
}));

export type LanguageInfoCard = {
  title: string;
  badge: string;
  body: string;
  bullets?: string[];
  icon: LucideIcon;
  tone?: "accent";
};

export const languageNeedDutchCards: LanguageInfoCard[] = [
  {
    title: "Where English often works well",
    badge: "Usually fine",
    body:
      "In larger cities, international workplaces, and many day-to-day service settings, English is often enough to function well.",
    bullets: [
      "International offices and startup-heavy teams",
      "Central-city hospitality and service environments",
      "Transport apps, bank apps, and many big-brand websites",
      "A lot of daily problem-solving when the other person sees you are new",
    ],
    icon: Languages,
  },
  {
    title: "Where basic Dutch helps quickly",
    badge: "Worth learning early",
    body:
      "The harder moments are usually short, fast interactions where politeness and simple recognition matter more than full conversation.",
    bullets: [
      "Greetings with cashiers, delivery drivers, or neighbors",
      "Short shop questions, simple signage, and routine errands",
      "Phone menus, letters, or local notices that start in Dutch",
      "Everyday moments where a small Dutch opener creates instant goodwill",
    ],
    icon: Store,
    tone: "accent",
  },
  {
    title: "Why even small phrases matter",
    badge: "Social signal",
    body:
      "A basic Dutch opening often says: I know where I am, I am trying, and I respect the situation. That often matters more than sounding perfect.",
    bullets: [
      "A greeting softens the switch into English",
      "Simple politeness makes short interactions feel smoother",
      "You need much less Dutch than most newcomers imagine",
    ],
    icon: Handshake,
  },
  {
    title: "How not to overthink it",
    badge: "Keep the bar low",
    body:
      "The goal is fewer awkward moments and more confidence, not perfect Dutch right away. Use the Dutch that helps, then switch when you need to.",
    bullets: [
      "Start with a greeting, not a speech",
      "Use memorized phrases in high-repeat situations",
      "Let understanding beat pride when the conversation gets more detailed",
    ],
    icon: Sparkles,
  },
];

export type LanguagePhrase = LivingLanguagePhrase;

export type LanguagePhraseGroup = Omit<LivingLanguagePhraseGroupConfig, "iconKey"> & {
  icon: LucideIcon;
};

export const languagePhraseGroups: LanguagePhraseGroup[] = livingLanguagePhraseGroups.map((group) => ({
  ...group,
  icon: resolveLanguageIcon(group.iconKey),
}));

export type LanguageSituationCard = Omit<LivingLanguageSituationConfig, "iconKey"> & {
  icon: LucideIcon;
};

export const languageSituationCards: LanguageSituationCard[] = livingLanguageSituations.map((situation) => ({
  ...situation,
  icon: resolveLanguageIcon(situation.iconKey),
}));

export const languageWorkNeighborCards: LanguageInfoCard[] = [
  {
    title: "Work basics",
    badge: "Keep it clear",
    body:
      "At work, the most useful language is often not advanced vocabulary but the ability to say clearly what you did, did not, or only partly understood.",
    bullets: [
      "Goedemorgen - a simple opener still helps even in English-speaking teams",
      "Ik begrijp het nog niet helemaal - useful when you need a clearer explanation",
      "Kunt u dat mailen? - practical when spoken Dutch is harder than written follow-up",
      "Zullen we later even kijken? - a polite way to suggest revisiting something",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Neighbors and social basics",
    badge: "Warm, short, normal",
    body:
      "With neighbors, short polite Dutch often matters more than grammar. The signal of friendliness usually does most of the work.",
    bullets: [
      "Goedemorgen / goedenavond works well in hallways, lifts, and shared entrances",
      "Wij zijn net verhuisd - useful when introducing yourself briefly",
      "Sorry voor het lawaai - handy if you are moving furniture or hosting people",
      "Laat het vooral weten - a useful phrase when you want to sound considerate",
    ],
    icon: Users,
    tone: "accent",
  },
  {
    title: "Building, delivery, and repair interactions",
    badge: "Short practical exchanges",
    body:
      "Most of these interactions are about simple practical things. Short, direct Dutch usually works well because the situation is already clear.",
    bullets: [
      "De monteur komt vandaag - useful when discussing access or timing",
      "Er is een pakket voor u - easy neighbor line that feels helpful",
      "Kunt u aanbellen? - practical in apartments and shared entrances",
      "Dank u voor de hulp - a simple polite way to end the conversation",
    ],
    icon: Package,
  },
];

export const languageEnglishVsDutchCards: LanguageInfoCard[] = [
  {
    title: "Start in Dutch when the moment is simple",
    badge: "Best default",
    body:
      "A greeting, thank you, or short service question is usually the easiest place to use Dutch without pressure.",
    icon: Handshake,
  },
  {
    title: "Switch when clarity matters",
    badge: "No guilt needed",
    body:
      "If the answer gets detailed, time-sensitive, or important, switching to English is usually the smart move, not a failure.",
    icon: Languages,
  },
  {
    title: "Do not take the English switch personally",
    badge: "Very common",
    body:
      "People often switch because they want to help, move faster, or practice their own English - not because your Dutch attempt was embarrassing.",
    icon: Sparkles,
  },
  {
    title: "Use Dutch as a bridge, not a performance",
    badge: "A better way to think about it",
    body:
      "Think of Dutch as a good opener, not a test you need to pass. You do not have to stay in Dutch longer than it helps.",
    icon: MapPinned,
    tone: "accent",
  },
];

export const languageMisunderstandings = livingLanguageMisunderstandings;

export const languageImproveCards: LanguageInfoCard[] = [
  {
    title: "Start with recurring situations",
    badge: "Highest return",
    body: "Learn the phrases you use every week: ordering coffee, asking for help, paying, greeting neighbors, and handling deliveries.",
    icon: Store,
  },
  {
    title: "Use signs, apps, and phrases together",
    badge: "Real life beats study",
    body: "A train app, supermarket label, and one memorized phrase often teach more than studying words on their own because the meaning sticks to a real moment.",
    icon: MapPinned,
  },
  {
    title: "Do not wait for good enough",
    badge: "Use it early",
    body: "Short polite Dutch works even if your pronunciation is not perfect. Most people understand the effort and the situation.",
    icon: Sparkles,
    tone: "accent",
  },
  {
    title: "Small consistency beats occasional intensity",
    badge: "Keep it sustainable",
    body: "Two or three phrases used daily usually matter more than one ambitious study session every few weeks.",
    icon: BookOpenCheck,
  },
];

export const languagePlanningTools = livingLanguageRelatedTools.planningTools.map((card) => ({
  ...card,
  icon: resolveLanguageIcon(card.iconKey),
}));

export const languageHelpfulCards = livingLanguageRelatedTools.livingGuides.map((card) => ({
  ...card,
  icon: resolveLanguageIcon(card.iconKey),
}));

export const languageRelatedGuides: LivingClusterLinkItem[] = livingLanguageRelatedTools.deeperGuides;

export const languageFaq = livingLanguageFaq;

export const languageReferences = livingLanguageReferences;

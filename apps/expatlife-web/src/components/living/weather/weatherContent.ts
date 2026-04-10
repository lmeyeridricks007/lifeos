import type { LucideIcon } from "lucide-react";
import {
  Backpack,
  Bike,
  BriefcaseBusiness,
  CloudRain,
  CloudSun,
  Leaf,
  MapPinned,
  MoonStar,
  ShoppingBag,
  Snowflake,
  Sparkles,
  Sun,
  TrainFront,
  Umbrella,
  Wind,
} from "lucide-react";
import type {
  LivingClusterLinkItem,
  LivingQuickStartPhase,
  LivingSectionNavItem,
} from "@/src/components/living/livingPillarContent";
import {
  LIVING_CLUSTER_SIBLING_LINKS_WEATHER,
  LIVING_LANGUAGE_PATH,
} from "@/src/components/living/livingPillarContent";
import {
  livingWeatherFaq,
  livingWeatherMisunderstandings,
  livingWeatherQuickStart,
  livingWeatherReferences,
  livingWeatherRelatedTools,
  livingWeatherSeasons,
  livingWeatherTips,
} from "./config/livingWeather.config";
import type {
  LivingWeatherIconKey,
  LivingWeatherSeason as LivingWeatherSeasonConfig,
  LivingWeatherTipCard,
} from "./config/livingWeather.types";

export const WEATHER_PAGE_DATE_MODIFIED = "2026-04-09";

const WEATHER_ICON_MAP: Record<LivingWeatherIconKey, LucideIcon> = {
  backpack: Backpack,
  bike: Bike,
  briefcaseBusiness: BriefcaseBusiness,
  cloudRain: CloudRain,
  cloudSun: CloudSun,
  leaf: Leaf,
  mapPinned: MapPinned,
  moonStar: MoonStar,
  shoppingBag: ShoppingBag,
  snowflake: Snowflake,
  sparkles: Sparkles,
  sun: Sun,
  trainFront: TrainFront,
  umbrella: Umbrella,
  wind: Wind,
};

function resolveWeatherIcon(iconKey: LivingWeatherIconKey): LucideIcon {
  return WEATHER_ICON_MAP[iconKey];
}

function withResolvedIcon<T extends { iconKey: LivingWeatherIconKey }>(item: T): Omit<T, "iconKey"> & { icon: LucideIcon } {
  const { iconKey, ...rest } = item;
  return {
    ...rest,
    icon: resolveWeatherIcon(iconKey),
  };
}

export const weatherSectionNav: LivingSectionNavItem[] = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#explore-living-pillar", label: "Related guides" },
  { href: "#start-here", label: "Start here" },
  { href: "#what-it-feels-like", label: "What it actually feels like" },
  { href: "#seasons-at-a-glance", label: "Seasons at a glance" },
  { href: "#rain-wind", label: "Rain & wind" },
  { href: "#what-to-wear", label: "What to wear" },
  { href: "#dark-days-routine", label: "Dark days & routine" },
  { href: "#weather-surprises", label: "What surprises newcomers" },
  { href: "#how-to-adapt", label: "How to adapt" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
];

export const weatherHero = {
  eyebrow: "Living in the Netherlands",
  title: "Weather & Seasons in the Netherlands",
  subtitle:
    "A practical guide to what Dutch weather usually feels like through the year - and how wind, rain, darker months, and changing light affect what you wear, how you commute, and how everyday life feels.",
  bullets: [
    "What the weather really feels like in daily life",
    "What to expect each season",
    "How rain, wind, and dark days change routines",
    "What to wear and carry so the weather stops surprising you",
  ],
  primaryCta: { href: "#start-here", label: "Start with the essentials" },
  secondaryCta: { href: "#weather-surprises", label: "See the biggest weather surprises" },
  quickStrip: [
    { icon: Wind, label: "Wind changes everything" },
    { icon: CloudRain, label: "Rain is part of routine" },
    { icon: Bike, label: "Commutes feel different" },
    { icon: Sparkles, label: "Dress simply, not heavily" },
  ] satisfies Array<{ icon: LucideIcon; label: string }>,
};

export const weatherAtAGlance = {
  eyebrow: "Quick overview",
  title: "At a glance",
  subtitle:
    "This page is about living with Dutch weather comfortably. It helps you understand what matters in daily life without turning weather into a full-time planning job.",
  cells: [
    {
      title: "What this page is for",
      body: "A practical guide to weather expectations for daily life in the Netherlands: seasons, commuting, clothing, and routine.",
    },
    {
      title: "Best for",
      body: "Newcomers, expats, students, commuters, and families who want to understand what Dutch weather really changes day to day.",
    },
    {
      title: "What it covers",
      body: "Seasons, clothing, commuting, rain, wind, dark days, and the habits that make Dutch weather easier to live with.",
    },
    {
      title: "What it skips",
      body: "Live forecasts, climate charts, and technical weather analysis.",
    },
  ],
  note: {
    badge: "Reality check",
    headline: "Dutch weather is often more about change, wind, rain, and grey days than extreme temperatures",
    body:
      "This page is about living with Dutch weather comfortably, not checking the weather all day. The big change is usually not the number in the app. It is how often conditions change and how much weather affects travel and routine.",
  },
};

export const weatherQuickStart: LivingQuickStartPhase[] = livingWeatherQuickStart.map((stage) => ({
  ...stage,
  icon: resolveWeatherIcon(stage.iconKey),
}));

export type WeatherInfoCard = Omit<LivingWeatherTipCard, "iconKey"> & {
  icon: LucideIcon;
};

export const weatherQuickStartCallout = livingWeatherTips.quickStartCallout;

export const weatherFeelCards: WeatherInfoCard[] = livingWeatherTips.feelLikeCards.map(withResolvedIcon);
export const weatherFeelCallout = livingWeatherTips.feelLikeCallout;

export type WeatherSeasonCard = Omit<LivingWeatherSeasonConfig, "iconKey"> & {
  icon: LucideIcon;
};

export const weatherSeasonCards: WeatherSeasonCard[] = livingWeatherSeasons.map(withResolvedIcon);

export const weatherCommuteCards: WeatherInfoCard[] = livingWeatherTips.commuteCards.map(withResolvedIcon);
export const weatherCommuteCallout = livingWeatherTips.commuteCallout;

export const weatherWearCards: WeatherInfoCard[] = livingWeatherTips.clothingCards.map(withResolvedIcon);
export const weatherRoutineCards: WeatherInfoCard[] = livingWeatherTips.routineCards.map(withResolvedIcon);
export const weatherAdaptCards: WeatherInfoCard[] = livingWeatherTips.adaptCards.map(withResolvedIcon);
export const weatherAdaptCallout = livingWeatherTips.adaptCallout;

export const weatherMisunderstandings = livingWeatherMisunderstandings;
export const weatherFaq = livingWeatherFaq;
export const weatherReferences = livingWeatherReferences;

export const weatherPlanningTools = livingWeatherRelatedTools.planningTools.map(withResolvedIcon);
export const weatherHelpfulCards = livingWeatherRelatedTools.livingGuides.map(withResolvedIcon);

export const weatherRelatedGuides: LivingClusterLinkItem[] = [
  ...LIVING_CLUSTER_SIBLING_LINKS_WEATHER,
  {
    href: LIVING_LANGUAGE_PATH,
    title: "Language & phrases",
    description: "Useful when you want the short Dutch lines that show up in weather chat, commute questions, and everyday small talk.",
    cta: "Open language guide",
  },
];

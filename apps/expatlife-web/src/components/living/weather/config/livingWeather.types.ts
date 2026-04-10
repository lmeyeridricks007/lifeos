export type LivingWeatherIconKey =
  | "backpack"
  | "bike"
  | "briefcaseBusiness"
  | "cloudRain"
  | "cloudSun"
  | "leaf"
  | "mapPinned"
  | "moonStar"
  | "shoppingBag"
  | "snowflake"
  | "sparkles"
  | "sun"
  | "trainFront"
  | "umbrella"
  | "wind";

export type LivingWeatherQuickStartStage = {
  title: string;
  badge: string;
  priority?: "high";
  iconKey: LivingWeatherIconKey;
  intro: string;
  bullets: string[];
  footHref: string;
  footLabel: string;
};

export type LivingWeatherSeason = {
  title: string;
  badge: string;
  intro: string;
  whatItFeelsLike: string;
  whatChanges: string;
  whatToWear: string;
  newcomerSurprise: string;
  iconKey: LivingWeatherIconKey;
};

export type LivingWeatherTipCard = {
  title: string;
  badge: string;
  body: string;
  bullets?: string[];
  iconKey: LivingWeatherIconKey;
  tone?: "accent";
};

export type LivingWeatherTipCallout = {
  eyebrow: string;
  title: string;
  body: string;
};

export type LivingWeatherTips = {
  quickStartCallout: LivingWeatherTipCallout;
  feelLikeCards: LivingWeatherTipCard[];
  feelLikeCallout: LivingWeatherTipCallout;
  commuteCards: LivingWeatherTipCard[];
  commuteCallout: LivingWeatherTipCallout;
  clothingCards: LivingWeatherTipCard[];
  routineCards: LivingWeatherTipCard[];
  adaptCards: LivingWeatherTipCard[];
  adaptCallout: LivingWeatherTipCallout;
};

export type LivingWeatherMisunderstanding = {
  chip: string;
  title: string;
  body: string;
};

export type LivingWeatherFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type LivingWeatherReferenceLink = {
  href: string;
  label: string;
};

export type LivingWeatherReferences = {
  title: string;
  intro: string;
  links: LivingWeatherReferenceLink[];
  footer: string;
};

export type LivingWeatherRelatedToolCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  iconKey: LivingWeatherIconKey;
};

export type LivingWeatherRelatedTools = {
  planningTools: LivingWeatherRelatedToolCard[];
  livingGuides: LivingWeatherRelatedToolCard[];
};

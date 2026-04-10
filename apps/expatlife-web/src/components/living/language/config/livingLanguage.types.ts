export type LivingLanguageIconKey =
  | "alarmClockCheck"
  | "bookOpenCheck"
  | "briefcaseBusiness"
  | "coffee"
  | "ear"
  | "handshake"
  | "languages"
  | "mapPinned"
  | "messageCircleMore"
  | "package"
  | "shoppingBag"
  | "sparkles"
  | "store"
  | "trainFront"
  | "users"
  | "workflow";

export type LivingLanguageQuickStartStage = {
  title: string;
  badge: string;
  priority?: "high";
  iconKey: LivingLanguageIconKey;
  intro: string;
  bullets: string[];
  footHref: string;
  footLabel: string;
};

export type LivingLanguagePhrase = {
  dutch: string;
  english: string;
  usage: string;
  pronunciationHint?: string;
};

export type LivingLanguagePhraseGroup = {
  id: string;
  title: string;
  intro: string;
  situationBadge: string;
  iconKey: LivingLanguageIconKey;
  phrases: LivingLanguagePhrase[];
};

export type LivingLanguageSituation = {
  title: string;
  badge: string;
  intro: string;
  iconKey: LivingLanguageIconKey;
  phrases: LivingLanguagePhrase[];
  tip: string;
};

export type LivingLanguageMisunderstanding = {
  chip: string;
  title: string;
  body: string;
};

export type LivingLanguageFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type LivingLanguageReferenceLink = {
  href: string;
  label: string;
};

export type LivingLanguageReferences = {
  title: string;
  intro: string;
  links: LivingLanguageReferenceLink[];
  footer: string;
};

export type LivingLanguageRelatedToolCard = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  iconKey: LivingLanguageIconKey;
};

export type LivingLanguageRelatedGuide = {
  href: string;
  title: string;
  description: string;
  cta: string;
};

export type LivingLanguageRelatedTools = {
  planningTools: LivingLanguageRelatedToolCard[];
  livingGuides: LivingLanguageRelatedToolCard[];
  deeperGuides: LivingLanguageRelatedGuide[];
};

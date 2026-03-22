export type RegistryLink = { href: string; title: string };
export type LinkRegistry = Record<string, RegistryLink>;

export type PillarIntroSegment =
  | { type: "text"; value: string; strong?: boolean }
  | { type: "link"; key: string; label: string };

export type PillarMeta = {
  breadcrumbs: Array<{ label: string; href: string }>;
  canonicalPath: string;
  lastUpdated: string;
  seo: { title: string; description: string };
};

export type PillarFaqItem = {
  q: string;
  a: string;
  links?: Array<{ label: string; href: string }>;
};

export type PillarTocItem = { id: string; label: string };

export type PillarToolItem = {
  title: string;
  href: string;
  description: string;
  timeToComplete?: string;
};

export type PillarTimelineStage = {
  id: string;
  label: string;
  goal: string;
  actions: string[];
  links: Array<{ href: string; label: string }>;
  stepLabel?: string;
  cta?: { href: string; label: string };
};

export type PillarSectionsJson = {
  pageHeader: {
    eyebrow: string;
    title: string;
    subtitle: string;
    heroImage?: string | null;
  };
  intro: { segments: PillarIntroSegment[] };
  overview: {
    sectionTitle: string;
    overviewParagraph?: string;
    collapsibleTitle: string;
    disclaimerItems: string[];
  };
  whoThisGuideFor: {
    sectionTitle: string;
    paragraph: string;
    audiences?: string[];
  };
  beforeYouMove: {
    sectionTitle: string;
    prepareHeading: string;
    prepareList: string[];
    takesLongerHeading: string;
    takesLongerList: string[];
    examples: Array<{ title: string; body: string }>;
    closingText: string;
    closingLinkKeys: string[];
    toolCtaDescription?: string;
  };
  afterArrival: {
    sectionTitle: string;
    itemBlocks: Array<{ paragraph: string; linkKeys: string[] }>;
    toolCtaDescription?: string;
  };
  first90Days: {
    sectionTitle: string;
    ctaParagraph: string;
    ctaLinkKey: string;
    toolCtaDescription?: string;
  };
  documents: {
    sectionTitle: string;
    introParagraph: string;
    toolLinkKey: string;
    toolLinkLabel: string;
    exampleTitle: string;
    exampleBody: string;
    toolCtaDescription?: string;
  };
  banking: {
    sectionTitle: string;
    introParagraph?: string;
    paragraph: string;
    paragraphLinkKeys?: string[];
  };
  housing: {
    sectionTitle: string;
    registrationWarning?: string;
    paragraph: string;
    paragraphLinkKeys?: string[];
  };
  gotchas: {
    sectionTitle: string;
    rows: Array<{ gotcha: string; fix: string; fixLinkKey?: string }>;
  };
  chooseYourSituation: {
    title: string;
    subtitle?: string;
    inputs: Array<{
      key: string;
      label: string;
      type: "segmented";
      options: Array<{ value: string; label: string }>;
    }>;
  };
  sectionTitles: {
    scenarios: string;
    timeline: string;
    tools: string;
    faq: string;
  };
  shareable: {
    sectionTitle: string;
    introParagraph: string;
    items: Array<{
      label: string;
      linkKey: string;
      suffixLinkKey?: string;
      suffixLabel?: string;
    }>;
    footerParagraph: string;
  };
  related: {
    sectionTitle: string;
    cards: Array<{ linkKey: string; description: string }>;
  };
  sidebar: {
    startHereLabel: string;
    startHereActions?: Array<{ label: string; linkKey: string }>;
    links: string[];
    scenariosPrompt: string;
    scenariosJumpAnchor: string;
    scenariosJumpLabel: string;
    ctaLabel: string;
    ctaLinkKey: string;
  };
  stepByStepSummary?: {
    sectionTitle: string;
    introParagraph: string;
    steps: string[];
  };
};

export type PillarScenarioRaw = {
  id: string;
  chips?: string[];
  personaTitle: string;
  whatMatters: string[];
  readingOrder: string[];
  startTool: { key: string; prefill?: Record<string, string> };
  unknownsToConfirm: string[];
};

export type NlMovingPillarContent = {
  meta: PillarMeta;
  scenarios: PillarScenarioRaw[];
  faq: PillarFaqItem[];
  linkRegistry: LinkRegistry;
  checklistTabs: Array<{ key: string; label: string; items: Array<{ label: string; href: string }> }>;
  timelineStages: PillarTimelineStage[];
  timelineIntro?: string;
  timelineSectionCta?: { label: string; href: string };
  toolsStrip: PillarToolItem[];
  tocItems: PillarTocItem[];
  sections: PillarSectionsJson;
};

export type HomeContent = {
  redirectTarget: string;
  seo?: { description?: string };
};

export type NlPortalContent = {
  breadcrumbs: Array<{ label: string; href: string }>;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: { label: string; href?: string; hrefKey?: string };
    secondaryCta: { label: string; href?: string; hrefKey?: string };
    quickRoutesLabel: string;
  };
  whyExpatLife: {
    eyebrow: string;
    items: Array<{ text: string }>;
  };
  personalizedEntry: {
    eyebrow: string;
    title: string;
    subtitle: string;
    originLabel: string;
    seeCountryRouteLabel: string;
    getChecklistLabel: string;
  };
  quickStart: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string; href: string; icon: string }>;
  };
  popularGuides: {
    eyebrow: string;
    title: string;
    subtitle: string;
    defaultDescription: string;
    items: Array<{ title: string; href: string; readTime?: string }>;
  };
  movingCluster: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    openHubLabel: string;
    infoBoxTitle: string;
    infoBoxItems: string[];
  };
  executionTools: {
    eyebrow: string;
    title: string;
    subtitle: string;
    openToolLabel: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
      href?: string;
      hrefKey?: string;
    }>;
  };
  countryRoutes: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  nextSteps: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      description: string;
      href: string;
      icon: string;
      buttonLabel: string;
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    disclaimer: string;
    bullets: string[];
  };
};

export type EntityRef = {
  href: string;
  title: string;
  description: string;
  icon: string;
  type?: string;
  status?: string;
};

export type RecommendationsJson = {
  rules: Array<{
    when: Record<string, string>;
    pages?: string[];
    tools?: string[];
    because?: string;
  }>;
  entities: {
    pages: Record<string, EntityRef>;
    tools: Record<string, EntityRef>;
  };
};

export type NlMovingHub = {
  chooseYourSituation: NlMovingPillarContent["sections"]["chooseYourSituation"];
  sections: {
    recommended: { title: string; subtitle?: string };
  };
};

import type { NlPortalContent } from "./types";

const portal: NlPortalContent = {
  breadcrumbs: [{ label: "Netherlands", href: "/netherlands" }],
  hero: {
    eyebrow: "Netherlands",
    title: "Move to the Netherlands with a clear plan",
    subtitle: "Guides, tools, and routes tailored to common expat situations.",
    primaryCta: { label: "Start with the moving hub", href: "/netherlands/moving/hub" },
    secondaryCta: { label: "Moving checklist", hrefKey: "checklist" },
    quickRoutesLabel: "Popular origin routes",
  },
  whyExpatLife: {
    eyebrow: "Why ExpatCopilot",
    items: [
      { text: "Plain-language guidance with official-source orientation." },
      { text: "Tools you can run before you book flights." },
      { text: "Structured paths for banking, housing, and admin." },
    ],
  },
  personalizedEntry: {
    eyebrow: "Personalized entry",
    title: "Pick your origin country",
    subtitle: "We’ll highlight a country route and checklist entry point.",
    originLabel: "Your country",
    seeCountryRouteLabel: "See country route",
    getChecklistLabel: "Open checklist",
  },
  quickStart: {
    eyebrow: "Quick start",
    title: "Most-used starting points",
    subtitle: "Jump into the pages expats open first.",
    items: [
      {
        title: "Netherlands Survival Guide",
        description: "Daily life: transport, apps, payments, and practical rhythms.",
        href: "/netherlands/living/survival-guide",
        icon: "home",
      },
      {
        title: "Moving to the Netherlands",
        description: "Pillar guide with timeline and scenarios.",
        href: "/netherlands/moving-to-the-netherlands",
        icon: "map",
      },
      {
        title: "Moving checklist",
        description: "Task list tailored to your inputs.",
        href: "/netherlands/moving/tools/moving-checklist",
        icon: "checkSquare",
      },
      {
        title: "Document readiness",
        description: "See common document needs.",
        href: "/netherlands/moving/tools/document-readiness",
        icon: "fileText",
      },
    ],
  },
  popularGuides: {
    eyebrow: "Popular guides",
    title: "Deep dives readers rely on",
    subtitle: "Focused pages for specific milestones.",
    defaultDescription: "Practical guide for expats in the Netherlands.",
    items: [
      {
        title: "BSN registration",
        href: "/netherlands/bsn-registration",
        readTime: "6 min",
      },
      {
        title: "Health insurance",
        href: "/netherlands/health-insurance-netherlands",
        readTime: "8 min",
      },
      {
        title: "DigiD awareness",
        href: "/netherlands/digid-awareness",
        readTime: "5 min",
      },
    ],
  },
  movingCluster: {
    eyebrow: "Moving cluster",
    title: "Plan the move end-to-end",
    subtitle: "From documents to your first 90 days.",
    body: "Use the hub to navigate guides and tools in a sensible order.",
    openHubLabel: "Open moving hub",
    infoBoxTitle: "Remember",
    infoBoxItems: ["Verify requirements for your nationality and visa route.", "Keep copies of key documents."],
  },
  livingCluster: {
    eyebrow: "Living pillar",
    title: "Day-to-day life after you land",
    subtitle: "Transport, apps, payments, weather, and household rhythm—parallel to Move and Money.",
    body: "The Survival Guide is the Living pillar entry point. Use it when you are past visa sequencing and need practical routines: OV, groceries, PIN culture, and what the first weeks feel like.",
    openSurvivalGuideLabel: "Open Survival Guide",
    openUtilitiesLabel: "Utilities & services planner",
    infoBoxTitle: "Tip",
    infoBoxItems: [
      "Pair the Survival Guide with the First 90 Days planner for admin timing.",
      "Housing contracts and utilities have dedicated Living cluster pages.",
    ],
  },
  executionTools: {
    eyebrow: "Tools",
    title: "Deterministic helpers",
    subtitle: "Checklists and planners you can run today.",
    openToolLabel: "Open tool",
    items: [
      {
        title: "Moving checklist",
        description: "Tasks before and after arrival.",
        icon: "checkSquare",
        hrefKey: "checklist",
      },
      {
        title: "Document readiness",
        description: "Document pack orientation.",
        icon: "fileText",
        hrefKey: "documentReadiness",
      },
      {
        title: "First 90 days",
        description: "Priorities after landing.",
        icon: "calendarCheck2",
        hrefKey: "first90Days",
      },
      {
        title: "Arrival planner",
        description: "First weeks on the ground.",
        icon: "mapPinned",
        href: "/netherlands/moving/tools/arrival-planner",
      },
    ],
  },
  countryRoutes: {
    eyebrow: "Country routes",
    title: "Moving from your country",
    subtitle: "Pick an origin to see tailored links.",
  },
  nextSteps: {
    eyebrow: "Next steps",
    title: "Choose a path",
    subtitle: "Two common ways to continue.",
    cards: [
      {
        title: "Explore the moving hub",
        description: "See guides, tools, and recommended order.",
        href: "/netherlands/moving/hub",
        icon: "map",
        buttonLabel: "Open hub",
      },
      {
        title: "Go straight to the checklist",
        description: "Answer a few questions for a tailored list.",
        href: "/netherlands/moving/tools/moving-checklist",
        icon: "checkSquare",
        buttonLabel: "Start checklist",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "How we help",
    subtitle: "Transparency and practical orientation.",
    body: "ExpatCopilot organizes public information and practical checklists to reduce overwhelm. Always confirm details with official sources.",
    disclaimer: "Not legal advice. Rules change; verify with authorities.",
    bullets: ["Editorial standards prioritize clarity.", "Affiliate relationships are disclosed where applicable."],
  },
};

export async function getNlPortalContent(): Promise<NlPortalContent> {
  return portal;
}

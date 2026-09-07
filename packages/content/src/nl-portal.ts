import type { NlPortalContent } from "./types";

const portal: NlPortalContent = {
  breadcrumbs: [{ label: "Netherlands", href: "/netherlands" }],
  hero: {
    eyebrow: "Netherlands",
    title: "Move to the Netherlands with a clear plan",
    subtitle:
      "From visas and arrival to daily transit, permanent residence, inburgering, citizenship, and leaving — guides and tools for each stage.",
    primaryCta: { label: "Start with the moving hub", href: "/netherlands/moving-to-the-netherlands/" },
    secondaryCta: { label: "Moving checklist", hrefKey: "checklist" },
    quickRoutesLabel: "Popular origin routes",
  },
  whyExpatLife: {
    eyebrow: "Why ExpatCopilot",
    items: [
      { text: "Plain-language guidance with official-source orientation." },
      { text: "Tools you can run before you book flights." },
      { text: "Settling paths (OV, Survival) and longer-term paths (PR, inburgering, leaving) in one NL hub." },
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
    subtitle: "Jump into the pages expats open first — including daily mobility and longer-term stay.",
    items: [
      {
        title: "Netherlands Survival Guide",
        description: "Daily life: transport, apps, payments, and practical rhythms.",
        href: "/netherlands/living/survival-guide/",
        icon: "home",
      },
      {
        title: "Moving to the Netherlands",
        description: "Pillar guide with timeline and scenarios.",
        href: "/netherlands/moving-to-the-netherlands/",
        icon: "map",
      },
      {
        title: "Getting around",
        description: "OV, bike, and car paths after you land.",
        href: "/netherlands/living/getting-around/",
        icon: "mapPinned",
      },
      {
        title: "Permanent residence",
        description: "Five-year routes and IND orientation for longer-term stay.",
        href: "/netherlands/citizenship/permanent-residence/",
        icon: "fileText",
      },
    ],
  },
  popularGuides: {
    eyebrow: "Popular guides",
    title: "Deep dives readers rely on",
    subtitle: "Settling transit and longer-term stay — plus the admin pages expats open first.",
    defaultDescription: "Practical guide for expats in the Netherlands.",
    items: [
      {
        title: "BSN registration",
        href: "/netherlands/bsn-registration",
        readTime: "6 min",
      },
      {
        title: "Getting around",
        href: "/netherlands/living/getting-around",
        readTime: "10 min",
      },
      {
        title: "OV-chipkaart",
        href: "/netherlands/living/ov-chipkaart-netherlands",
        readTime: "12 min",
      },
      {
        title: "OVpay",
        href: "/netherlands/living/ovpay-netherlands",
        readTime: "10 min",
      },
      {
        title: "NS trains",
        href: "/netherlands/living/ns-trains-netherlands",
        readTime: "12 min",
      },
      {
        title: "Lease cars",
        href: "/netherlands/living/lease-cars-netherlands",
        readTime: "11 min",
      },
      {
        title: "Permanent residence",
        href: "/netherlands/citizenship/permanent-residence",
        readTime: "14 min",
      },
      {
        title: "Inburgering",
        href: "/netherlands/integration/inburgering",
        readTime: "13 min",
      },
      {
        title: "Dutch citizenship",
        href: "/netherlands/citizenship/dutch-citizenship",
        readTime: "14 min",
      },
      {
        title: "Leaving the Netherlands",
        href: "/netherlands/leaving",
        readTime: "12 min",
      },
    ],
  },
  movingCluster: {
    eyebrow: "Moving cluster",
    title: "Plan the move end-to-end",
    subtitle: "Arrival timeline, then permanent residence, inburgering, citizenship, or leaving.",
    body: "Use the moving hub for visas, documents, and the first 90 days. When the question becomes longer-term, open permanent residence, inburgering, or Dutch citizenship. When it is time to go, open the leaving journey (and the leaving-tax sibling when tax exit is the issue).",
    hubHref: "/netherlands/moving-to-the-netherlands/",
    openHubLabel: "Start with the moving hub",
    infoBoxTitle: "Remember",
    infoBoxItems: [
      "Verify requirements for your nationality and visa route.",
      "Keep copies of key documents.",
      "PR, inburgering, citizenship, and leaving sit next to the arrival timeline — not on a separate site.",
    ],
  },
  livingCluster: {
    eyebrow: "After you arrive",
    title: "Day-to-day life after you land",
    subtitle: "Settling transport first: Survival → Getting around → OV tickets or lease.",
    body: "The Survival Guide is the Living pillar entry point for settling. Open its Getting around module for NS trains, OV-chipkaart, OVpay, car sharing, lease cars, and buying a car — transit and vehicle content exists; start discovery from Survival or Getting around, not from guessing URLs.",
    survivalGuideHref: "/netherlands/living/survival-guide/",
    openSurvivalGuideLabel: "Open Survival Guide",
    openUtilitiesLabel: "Utilities & services planner",
    infoBoxTitle: "Tip",
    infoBoxItems: [
      "Pair the Survival Guide with the First 90 Days planner for admin timing.",
      "Transit trio (OV-chipkaart, OVpay, NS) and vehicle paths (sharing, lease, buy) hang off Survival → Getting around.",
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
    subtitle: "Origin landings for the Netherlands only — we do not run other-country comparison hubs.",
  },
  nextSteps: {
    eyebrow: "Next steps",
    title: "Choose a path",
    subtitle: "Move in, settle transit, plan longer-term stay, or prepare to leave.",
    cards: [
      {
        title: "Explore the moving hub",
        description: "See guides, tools, and recommended arrival order.",
        href: "/netherlands/moving-to-the-netherlands/",
        icon: "map",
        buttonLabel: "Open hub",
      },
      {
        title: "Settle daily transit",
        description: "Survival Getting around module: NS, OV-chipkaart, OVpay, sharing, and lease.",
        href: "/netherlands/living/survival-guide/#getting-around",
        icon: "mapPinned",
        buttonLabel: "Open transport module",
      },
      {
        title: "Longer-term stay",
        description: "Permanent residence, inburgering, and Dutch citizenship orientation.",
        href: "/netherlands/citizenship/permanent-residence",
        icon: "fileText",
        buttonLabel: "Open PR guide",
      },
      {
        title: "Leaving the Netherlands",
        description: "Exit journey sequencing when mobility means moving on.",
        href: "/netherlands/leaving",
        icon: "plane",
        buttonLabel: "Open leaving journey",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "How we help",
    subtitle: "Transparency and practical orientation.",
    body: "ExpatCopilot organizes Netherlands public information into journeys: moving in, settling (including transit), longer-term stay (permanent residence, inburgering, citizenship), and leaving. We deepen the NL stack — we do not build other-country comparison research hubs. Always confirm details with official sources.",
    disclaimer: "Not legal advice. Rules change; verify with authorities.",
    bullets: ["Editorial standards prioritize clarity.", "Affiliate relationships are disclosed where applicable."],
  },
};

export async function getNlPortalContent(): Promise<NlPortalContent> {
  return portal;
}

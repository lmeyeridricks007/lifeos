import type { LinkRegistry, NlMovingPillarContent } from "./types";

const linkRegistry: LinkRegistry = {
  moving_checklist: {
    href: "/netherlands/moving/tools/moving-checklist",
    title: "Moving checklist",
  },
  document_readiness: {
    href: "/netherlands/moving/tools/document-readiness",
    title: "Document readiness checker",
  },
  arrival_planner: {
    href: "/netherlands/moving/tools/arrival-planner",
    title: "Arrival planner",
  },
  first_90_days: {
    href: "/netherlands/moving/tools/first-90-days",
    title: "First 90 days planner",
  },
  hub: { href: "/netherlands/moving/hub", title: "Moving hub" },
  bsn: { href: "/netherlands/bsn-registration", title: "BSN registration" },
  pillar: { href: "/netherlands/moving-to-the-netherlands", title: "Moving pillar" },
};

export const nlMovingPillarContent: NlMovingPillarContent = {
  meta: {
    breadcrumbs: [
      { label: "Netherlands", href: "/netherlands" },
      { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands" },
    ],
    canonicalPath: "/netherlands/moving-to-the-netherlands/",
    lastUpdated: new Date().toISOString().slice(0, 10),
    seo: {
      title: "Moving to the Netherlands",
      description: "Checklist, timeline, and practical guidance for moving to the Netherlands.",
    },
  },
  scenarios: [
    {
      id: "work-solo-30",
      chips: ["work"],
      personaTitle: "Moving for work (solo)",
      whatMatters: ["Employment contract", "BSN", "Housing"],
      readingOrder: ["pillar", "bsn", "moving_checklist"],
      startTool: { key: "moving_checklist" },
      unknownsToConfirm: ["Visa route", "Start date"],
    },
  ],
  faq: [
    {
      q: "What is a BSN?",
      a: "A citizen service number used for tax, work, and healthcare in the Netherlands.",
      links: [{ label: "BSN guide", href: "/netherlands/bsn-registration" }],
    },
  ],
  linkRegistry,
  checklistTabs: [
    {
      key: "before",
      label: "Before you move",
      items: [
        { label: "Documents pack", href: "/netherlands/moving/tools/document-readiness" },
        { label: "Moving checklist", href: "/netherlands/moving/tools/moving-checklist" },
      ],
    },
    {
      key: "after",
      label: "After arrival",
      items: [
        { label: "Arrival planner", href: "/netherlands/moving/tools/arrival-planner" },
        { label: "BSN registration", href: "/netherlands/bsn-registration" },
      ],
    },
    {
      key: "days90",
      label: "First 90 days",
      items: [
        { label: "First 90 days", href: "/netherlands/moving/tools/first-90-days" },
        { label: "DigiD awareness", href: "/netherlands/digid-awareness" },
      ],
    },
  ],
  timelineStages: [
    {
      id: "before",
      label: "Before you move",
      goal: "Prepare documents, housing, and travel.",
      actions: ["Gather IDs", "Plan address", "Book appointments"],
      links: [
        { href: "/netherlands/moving/tools/moving-checklist", label: "Moving checklist" },
        { href: "/netherlands/moving/tools/document-readiness", label: "Document readiness" },
      ],
    },
    {
      id: "arrival",
      label: "After arrival",
      goal: "Register and obtain BSN.",
      actions: ["Municipality appointment", "BSN letter", "Bank basics"],
      links: [{ href: "/netherlands/bsn-registration", label: "BSN registration" }],
    },
    {
      id: "ninety",
      label: "First 90 days",
      goal: "Settle banking, insurance, and routines.",
      actions: ["Health insurance", "DigiD", "Transport pass"],
      links: [{ href: "/netherlands/moving/tools/first-90-days", label: "First 90 days" }],
    },
  ],
  timelineIntro: "A practical sequence most expats follow.",
  timelineSectionCta: { label: "Open the moving hub", href: "/netherlands/moving/hub" },
  toolsStrip: [
    {
      title: "Moving checklist",
      href: "/netherlands/moving/tools/moving-checklist",
      description: "Personalized tasks for your move.",
      timeToComplete: "15 minutes",
    },
    {
      title: "Document readiness",
      href: "/netherlands/moving/tools/document-readiness",
      description: "See common document needs.",
      timeToComplete: "10 minutes",
    },
    {
      title: "Arrival planner",
      href: "/netherlands/moving/tools/arrival-planner",
      description: "First weeks after landing.",
      timeToComplete: "10 minutes",
    },
    {
      title: "First 90 days",
      href: "/netherlands/moving/tools/first-90-days",
      description: "Settling-in priorities.",
      timeToComplete: "12 minutes",
    },
  ],
  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "scenarios", label: "Choose your situation" },
    { id: "timeline", label: "Timeline" },
    { id: "before-you-move", label: "Before you move" },
    { id: "after-arrival", label: "After arrival" },
    { id: "first-90-days", label: "First 90 days" },
    { id: "documents", label: "Documents" },
    { id: "banking", label: "Banking" },
    { id: "housing", label: "Housing" },
    { id: "gotchas", label: "Gotchas" },
    { id: "tools", label: "Tools" },
    { id: "related", label: "Related" },
    { id: "shareable", label: "Shareable checklist" },
    { id: "faq", label: "FAQ" },
  ],
  sections: {
    pageHeader: {
      eyebrow: "Netherlands · Moving",
      title: "Moving to the Netherlands",
      subtitle: "A calm, practical guide: prepare before you move, settle after arrival, and stabilize in your first 90 days.",
    },
    intro: {
      segments: [
        { type: "text", value: "Start with " },
        { type: "link", key: "hub", label: "the moving hub" },
        { type: "text", value: ", then use tools like the " },
        { type: "link", key: "moving_checklist", label: "moving checklist" },
        { type: "text", value: "." },
      ],
    },
    overview: {
      sectionTitle: "Overview",
      overviewParagraph:
        "This page is structured around three phases: before you move, after arrival, and your first 90 days.",
      collapsibleTitle: "Not legal advice",
      disclaimerItems: [
        "Rules change; always verify with official sources for your situation.",
        "This site provides orientation, not individualized legal advice.",
      ],
    },
    whoThisGuideFor: {
      sectionTitle: "Who this guide is for",
      paragraph: "New arrivals planning a move to the Netherlands for work, study, or family.",
      audiences: ["EU/EEA movers", "Non-EU with a job or sponsor", "Partners and families"],
    },
    beforeYouMove: {
      sectionTitle: "Before you move",
      prepareHeading: "Prepare early",
      prepareList: ["Valid ID", "Address plan", "Insurance awareness"],
      takesLongerHeading: "Things that often take longer",
      takesLongerList: ["Apostille or legalization", "Housing search in tight markets"],
      examples: [{ title: "Tip", body: "Keep scans of key documents in a secure folder." }],
      closingText: "Use the {0} and {1} before you travel.",
      closingLinkKeys: ["document_readiness", "moving_checklist"],
      toolCtaDescription: "Generate a checklist matched to your situation.",
    },
    afterArrival: {
      sectionTitle: "After arrival",
      itemBlocks: [
        {
          paragraph: "Register your address and obtain a {0}.",
          linkKeys: ["bsn"],
        },
      ],
      toolCtaDescription: "Plan your first appointments with the arrival planner.",
    },
    first90Days: {
      sectionTitle: "First 90 days",
      ctaParagraph: "Use the {0} to pace banking, insurance, and daily setup.",
      ctaLinkKey: "first_90_days",
      toolCtaDescription: "A simple week-by-week view of common priorities.",
    },
    documents: {
      sectionTitle: "Documents",
      introParagraph: "**Documents** are easier when you know what to gather early.",
      toolLinkKey: "document_readiness",
      toolLinkLabel: "document readiness checker",
      exampleTitle: "Example",
      exampleBody: "Passport, birth certificate (if applicable), and rental or address proof.",
      toolCtaDescription: "See a tailored list for your origin and situation.",
    },
    banking: {
      sectionTitle: "Banking",
      introParagraph: "Most people open an account after they have an address and BSN.",
      paragraph: "Compare options and requirements on official bank pages.",
    },
    housing: {
      sectionTitle: "Housing",
      registrationWarning: "You need a registrable address for BSN registration in most cases.",
      paragraph: "Start search early and verify registration eligibility.",
    },
    gotchas: {
      sectionTitle: "Common gotchas",
      rows: [
        {
          gotcha: "Assuming you can register any short-stay address",
          fix: "Confirm registrable housing with your municipality.",
          fixLinkKey: "bsn",
        },
      ],
    },
    chooseYourSituation: {
      title: "Choose your situation",
      subtitle: "We use this to filter scenario cards.",
      inputs: [
        {
          key: "stage",
          label: "Stage",
          type: "segmented",
          options: [
            { value: "before", label: "Before move" },
            { value: "after", label: "After arrival" },
          ],
        },
        {
          key: "household",
          label: "Household",
          type: "segmented",
          options: [
            { value: "single", label: "Solo" },
            { value: "partner", label: "Partner" },
          ],
        },
        {
          key: "job",
          label: "Work",
          type: "segmented",
          options: [
            { value: "none", label: "No offer yet" },
            { value: "employed", label: "Employed" },
          ],
        },
        {
          key: "region",
          label: "Region",
          type: "segmented",
          options: [
            { value: "eu", label: "EU/EEA" },
            { value: "non_eu", label: "Non-EU" },
          ],
        },
      ],
    },
    sectionTitles: {
      scenarios: "Scenarios",
      timeline: "The moving timeline",
      tools: "Tools that speed things up",
      faq: "FAQ",
    },
    shareable: {
      sectionTitle: "Shareable checklist",
      introParagraph: "Share these essentials with co-movers.",
      items: [
        { label: "Documents — start with the readiness checker", linkKey: "document_readiness" },
        { label: "Tasks — use the moving checklist", linkKey: "moving_checklist" },
      ],
      footerParagraph: "Bookmark this page to revisit during your move.",
    },
    related: {
      sectionTitle: "Related pages",
      cards: [
        { linkKey: "hub", description: "Central links for the moving cluster." },
        { linkKey: "bsn", description: "BSN registration walkthrough." },
        { linkKey: "moving_checklist", description: "Personalized checklist." },
      ],
    },
    sidebar: {
      startHereLabel: "Start here",
      links: ["moving_checklist", "document_readiness", "hub"],
      scenariosPrompt: "Not sure where to start? Pick a scenario:",
      scenariosJumpAnchor: "#scenarios",
      scenariosJumpLabel: "Jump to scenarios",
      ctaLabel: "Open moving checklist",
      ctaLinkKey: "moving_checklist",
    },
    stepByStepSummary: {
      sectionTitle: "Step-by-step summary",
      introParagraph: "If you only remember a few steps:",
      steps: [
        "Prepare documents and housing plan.",
        "Register and get your BSN.",
        "Set up banking, insurance, and DigiD in your first weeks.",
      ],
    },
  },
};

export async function getNlMovingPillarContent(): Promise<NlMovingPillarContent> {
  return nlMovingPillarContent;
}

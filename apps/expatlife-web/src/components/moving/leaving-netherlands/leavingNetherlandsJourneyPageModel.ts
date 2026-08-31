import {
  DUTCH_CITIZENSHIP_PATH,
  EXTENSIONS_CHANGES_PATH,
  HSM_VISA_GUIDE_PATH,
  LEAVING_NL_JOURNEY_PATH,
  LEAVING_NL_TAX_PATH,
  LEAVING_TOOLS_PATH,
  PERMANENT_RESIDENCE_PATH,
} from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

export { LEAVING_NL_JOURNEY_PATH, LEAVING_NL_TAX_PATH };

export const RULING_30_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const LAYOFFS_PATH = "/netherlands/moving/layoffs-netherlands/" as const;
export const SUBSCRIPTIONS_PATH =
  "/netherlands/practical-life/subscriptions-and-cancellations-netherlands/" as const;
export const REGISTER_ADDRESS_PATH =
  "/netherlands/practical-life/registering-your-address-netherlands/" as const;
export const MUNICIPALITY_REGISTRATION_PATH = "/netherlands/municipality-registration-netherlands/" as const;
export const EXIT_READINESS_PATH = "/netherlands/leaving/tools/exit-readiness-checker/" as const;
export const REPATRIATION_COST_PATH = "/netherlands/leaving/tools/repatriation-cost-calculator/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;

export type LeavingJourneyLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type LeavingJourneyCard = {
  title: string;
  body: string;
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-leaving-journey";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const leavingNetherlandsJourneyPage = {
  slug: "leaving-netherlands",
  path: LEAVING_NL_JOURNEY_PATH,
  publish: true,
  publishDate: "2026-08-30",
  seo: {
    title: "Leaving the Netherlands | Expat Exit Journey Guide",
    description:
      "Plan an end-to-end exit from the Netherlands: timeline, job and permit implications, housing close-out, BRP deregistration, health insurance, toeslagen, 30% ruling end, PR consequences, and tax orientation.",
    keywords: [
      "leaving the netherlands",
      "leaving netherlands guide",
      "expat leaving netherlands",
      "deregister netherlands",
      "uitschrijving netherlands",
      "exit netherlands checklist",
      "moving away from netherlands",
      "repatriation netherlands",
      "BRP deregistration",
      "leaving netherlands health insurance",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Move · Exit journey",
    pageTitle: "Leaving the Netherlands",
    subtitle:
      "An end-to-end exit journey for expats — from deciding to leave through deregistration, insurance and benefits close-out, permit and PR consequences, and tax orientation — without replacing specialist tax depth.",
    primaryCta: { label: "Start the exit journey", href: "#intro" },
    secondaryCta: { label: "Open exit readiness tool", href: EXIT_READINESS_PATH },
    chips: ["Deregistration", "Insurance stop", "30% end", "PR consequences"],
    image: {
      src: "/images/heroes/netherlands-leaving-netherlands-hero-premium-v1.png",
      alt: "Photorealistic editorial photo of an international professional packing documents and a suitcase by a bright Amsterdam canal apartment window before leaving the Netherlands.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Exit journey roadmap infographic showing decide, job, housing, deregister, insurance, toeslagen, 30% end, PR checks, tax link and records.",
      "Treat leaving as a sequence: decide timing, close work and housing, deregister, stop insurance and toeslagen, check 30% and PR consequences, then deep-dive tax with records in hand."
    ),
    snapshot: visual(
      "snapshot",
      "Snapshot board of six exit pillars: timing, work status, housing, municipality, insurance and long-term status.",
      "Use the snapshot to separate logistics from immigration consequences and tax depth."
    ),
    decide: visual(
      "decide",
      "Timeline and decision calendar for leaving the Netherlands with notice, lease and deregistration milestones.",
      "A realistic exit timeline usually starts weeks before the flight: notice, lease end, appointments and destination coverage."
    ),
    jobPermit: visual(
      "job-permit",
      "Comparison scene: HSM job-search window versus a true exit from the Netherlands.",
      "Job loss or resignation is not always the same as leaving the country — the HSM search window and a true exit follow different admin paths."
    ),
    housing: visual(
      "housing",
      "Lease close-out checklist board with inspection, deposit, utilities and keys for leaving the Netherlands.",
      "Housing close-out is a dated trail: notice, inspection, meter readings, deposit and forwarding address."
    ),
    deregister: visual(
      "deregister",
      "Municipality BRP uitschrijving desk scene with departure confirmation and date trail.",
      "Deregistration (uitschrijving) often becomes the official departure date used across Dutch admin systems."
    ),
    healthInsurance: visual(
      "health-insurance",
      "Health insurance stop and coverage-gap map when leaving the Netherlands.",
      "Confirm when Dutch basic insurance ends and how destination coverage starts — gaps are a common exit risk."
    ),
    toeslagen: visual(
      "toeslagen",
      "Toeslagen and allowances stop-or-update board for healthcare, rent, childcare and child benefit.",
      "Allowances rarely update themselves perfectly — map each toeslag to address, income and insurance changes."
    ),
    ruling30: visual(
      "ruling-30",
      "30 percent ruling end orientation: Belastingdienst payroll facility ends when employment or residency changes.",
      "The 30% facility is a Belastingdienst payroll arrangement — not an IND permit. Ending work or leaving often ends the facility."
    ),
    prCitizenship: visual(
      "pr-citizenship",
      "Permanent residence absence risk versus Dutch citizenship and dual-national abroad caveats.",
      "Long absence can put PR at risk; citizenship is a different status. Dual nationals abroad still need country-specific awareness."
    ),
    taxBridge: visual(
      "tax-bridge",
      "Tax and residency orientation bridge pointing to the leaving-Netherlands tax deep guide.",
      "This journey page stays high-level on tax: residency, final return and records — open the dedicated tax guide for depth."
    ),
    tools: visual(
      "tools",
      "Leaving tools map: exit readiness checker, repatriation cost calculator and leaving tools hub.",
      "Use tools to sequence closures and budget logistics — then return here for the full journey context."
    ),
    records: visual(
      "records",
      "Exit evidence pack builder with municipality, insurer, employer, toeslagen and tax records.",
      "Build an evidence pack before you lose DigiD access patterns, inbox clutter or employer portals."
    ),
    mistakes: visual(
      "mistakes",
      "Common leaving mistakes radar for expats exiting the Netherlands.",
      "Most exit stress comes from assumptions: insurance ends itself, PR is fine abroad forever, or tax is someone else's problem later."
    ),
    faq: visual(
      "faq",
      "FAQ fact-filter for leaving the Netherlands journey questions.",
      "Filter questions by dates, status type, insurance timing and which deep guide to open next."
    ),
    exploreNext: visual(
      "explore-next",
      "Explore next map connecting leaving journey to tax, tools, PR, citizenship and subscriptions guides.",
      "Pick the next page by remaining question: tax depth, PR risk, tools, or practical cancellations."
    ),
  },
  sectionNav: [
    { label: "Intro", href: "#intro" },
    { label: "Decide", href: "#decide" },
    { label: "Job & permit", href: "#job-permit" },
    { label: "Housing", href: "#housing" },
    { label: "Deregister", href: "#deregister" },
    { label: "Insurance", href: "#health-insurance" },
    { label: "Toeslagen", href: "#toeslagen" },
    { label: "30% end", href: "#ruling-30" },
    { label: "PR & citizenship", href: "#pr-citizenship" },
    { label: "Tax", href: "#tax" },
    { label: "Tools", href: "#tools" },
    { label: "Records", href: "#records" },
    { label: "FAQ", href: "#faq" },
  ],
  introPoints: [
    "Leaving the Netherlands is more than booking flights. Expats usually need a sequenced plan for work notice, housing, municipality deregistration, health insurance, toeslagen, payroll facilities like the 30% ruling, and long-term status consequences.",
    "This page is the end-to-end exit journey. It orients you through the practical sequence and points to deep guides for tax, permanent residence, citizenship and tools — it does not replace official sources or personalised advice.",
    "Tax return tables, M-form detail and pension matrices live on the dedicated leaving-tax guide. Use that page when you need tax depth; stay here when you need the whole leaving roadmap.",
  ],
  snapshotCards: [
    { label: "Timing", value: "Decide leave date early" },
    { label: "Work status", value: "Exit ≠ job-search window" },
    { label: "Housing", value: "Close lease with evidence" },
    { label: "Municipality", value: "BRP uitschrijving matters" },
    { label: "Insurance", value: "Stop Dutch cover carefully" },
    { label: "Long-term status", value: "PR can be absence-sensitive" },
  ],
  decidePoints: [
    "Set a realistic departure window that includes notice periods, lease end, municipality appointments and destination health cover.",
    "Separate “I might leave” from “I am leaving”: soft exploration vs firm dates change which closures you trigger.",
    "If exit timing is uncertain, pause on irreversible steps until housing, work and permit facts are clear.",
    "Keep a shared family timeline if partners or children leave on different dates.",
  ],
  decideTimelineRows: [
    {
      phase: "8–12 weeks out",
      focus: "Decision and research",
      actions: "Confirm leave intent, draft notice plan, check lease end and destination cover options.",
    },
    {
      phase: "4–8 weeks out",
      focus: "Contracts and appointments",
      actions: "Give landlord/employer notice where needed, book municipality deregistration, start cancellation list.",
    },
    {
      phase: "1–4 weeks out",
      focus: "Closures and records",
      actions: "Confirm insurer and toeslagen updates, download payslips and DigiD messages, pack evidence files.",
    },
    {
      phase: "Departure week",
      focus: "Hand-over",
      actions: "Final inspection, keys, meter readings, travel documents, forwarding address and confirmation emails.",
    },
  ],
  jobPermitPoints: [
    "Ending a Dutch job is not automatically the same as leaving the country. Highly skilled migrants may have a job-search window after certain employment endings — that is a stay-and-search path, not a true exit.",
    "A true exit usually means ending residence ties: housing, BRP registration, Dutch health insurance and related admin.",
    "If you resign or are laid off, map permit implications before cancelling everything — extensions, status changes and HSM rules can differ.",
    "Use the HSM guide for job-search vs leaving distinctions, and layoffs/resigning guides for employment process orientation.",
  ],
  jobPermitScenarios: [
    {
      profile: "HSM, new job abroad",
      scenario: "Resigns Dutch role and leaves within 6 weeks",
      whatToCheck: "Employer notice, permit end timing, BRP deregistration date, insurer stop date.",
    },
    {
      profile: "HSM, job loss, still hunting NL",
      scenario: "Uses job-search window while keeping Dutch address",
      whatToCheck: "Whether you are truly exiting or staying — do not deregister if you intend to remain resident.",
    },
    {
      profile: "Family leave after partner role ends",
      scenario: "Partner exits; dependent status may change",
      whatToCheck: "Dependent permit facts, household deregistration order, school and lease timing.",
    },
  ],
  housingCards: [
    {
      title: "Lease notice",
      body: "Confirm contractual notice period, break clauses and written landlord confirmation of end date.",
    },
    {
      title: "Inspection & deposit",
      body: "Plan final inspection, photo evidence, meter readings and deposit return timeline in writing.",
    },
    {
      title: "Utilities & internet",
      body: "Cancel or transfer energy, water, internet and municipal waste — see subscriptions guide for process detail.",
    },
    {
      title: "Keys & forwarding",
      body: "Hand over keys with a dated receipt and set a forwarding address for residual mail and deposit letters.",
    },
  ] satisfies LeavingJourneyCard[],
  deregisterPoints: [
    "Many residents must deregister from the municipality (uitschrijving / BRP departure) when leaving for a longer period.",
    "The deregistration confirmation often becomes the official departure date trail used by tax, benefits and insurance systems.",
    "Short absences can differ from a permanent move — confirm with your gemeente what applies to your situation.",
    "Keep the confirmation PDF/email, stated departure date and destination country details in your evidence pack.",
  ],
  deregisterScenarios: [
    {
      situation: "Whole household leaves same day",
      timeline: "Deregister appointment 5 days before flight",
      practicalImpact: "One clear BRP end date for family admin.",
      usefulRecord: "Gemeente confirmation for each person",
    },
    {
      situation: "Partner stays 2 months longer",
      timeline: "Staggered uitschrijving dates",
      practicalImpact: "Insurance and toeslagen may still reference the remaining resident.",
      usefulRecord: "Both confirmations + household composition notes",
    },
    {
      situation: "Keeping a Dutch postal address temporarily",
      timeline: "Unclear BRP status",
      practicalImpact: "Residence records may not match your physical move — clarify with gemeente.",
      usefulRecord: "Written gemeente guidance + lease status",
    },
  ],
  healthInsurancePoints: [
    "Dutch basic health insurance often needs an explicit stop when you leave and deregister — do not assume it ends cleanly without confirmation.",
    "Plan destination coverage so there is no gap between Dutch policy end and new cover start.",
    "Healthcare allowance (zorgtoeslag) is linked to insurance and residence facts — update Toeslagen when the policy changes.",
    "Keep insurer cancellation confirmation, end date and last premium payment evidence.",
  ],
  healthInsuranceScenarios: [
    {
      scenario: "Deregisters 30 June, flies 2 July",
      timeline: "Insurer end date aligned to BRP departure",
      practicalQuestion: "Is destination cover active from 1 July or 2 July?",
      records: "Insurer letter, BRP confirmation, new policy start",
    },
    {
      scenario: "Leaves mid-month after final paycheck",
      timeline: "Premium already paid for full month",
      practicalQuestion: "Ask insurer how mid-month stops and refunds are handled.",
      records: "Premium statement, cancellation email",
    },
  ],
  toeslagenCards: [
    {
      title: "Zorgtoeslag",
      body: "Healthcare allowance usually needs an update when insurance or residence changes.",
    },
    {
      title: "Huurtoeslag",
      body: "Rent allowance should reflect lease end and address change — do not leave old rent facts active.",
    },
    {
      title: "Kinderopvangtoeslag",
      body: "Childcare allowance depends on registered care and work facts — close or update when care ends.",
    },
    {
      title: "Kindgebonden budget / child benefit",
      body: "Family benefits may change with household move — check SVB/Toeslagen messages after deregistration.",
    },
  ] satisfies LeavingJourneyCard[],
  ruling30Points: [
    "The 30% ruling is a Belastingdienst payroll tax facility applied via your employer — it is not an IND residence permit.",
    "When Dutch employment ends, or you leave in a way that ends the payroll setup, the facility typically ends with that employment context.",
    "Keep the ruling decision letter, final payslips showing the facility, and employer confirmation of end date.",
    "For how the facility works while you are still employed, use the 30% ruling guide; for exit-year tax interactions, use the leaving-tax guide.",
  ],
  prCitizenshipPoints: [
    "Permanent residence can be sensitive to long absences from the Netherlands — leaving for an extended period may put PR at risk. Confirm current IND rules for your status type.",
    "Dutch citizenship is a different status from PR. Naturalised citizens do not “lose PR” the same way, but other nationality rules can still matter abroad.",
    "Dual nationals living abroad can face country-specific loss or reporting risks — use the citizenship and dual-citizenship awareness resources, not assumptions.",
    "If you might return, map PR absence rules before you deregister and cancel everything.",
  ],
  prCitizenshipCards: [
    {
      title: "Permanent residence",
      body: "Long absence can threaten PR. Read the permanent residence guide before treating exit as temporary.",
    },
    {
      title: "Dutch citizenship",
      body: "Citizenship is separate from PR. Check naturalisation/option context if exit timing is still open.",
    },
    {
      title: "Dual nationality abroad",
      body: "Some origin countries treat long residence abroad or second nationality differently — verify both sides.",
    },
  ] satisfies LeavingJourneyCard[],
  taxBridgePoints: [
    "Leaving can affect tax residency, final Dutch returns, foreign income and allowance reconciliation — details belong on the leaving-tax page.",
    "This journey page only orients you: save payroll records, note deregistration date, and open the tax guide for M-form / return / pension depth.",
    "Do not invent a filing position from this page. Use Belastingdienst and, where needed, a qualified advisor.",
  ],
  toolsCards: [
    {
      title: "Exit readiness checker",
      body: "Sequence deregistration, insurance, toeslagen and record readiness before departure.",
      href: EXIT_READINESS_PATH,
    },
    {
      title: "Repatriation cost calculator",
      body: "Orientation budget ranges for flights, shipping, lease risk and temporary housing.",
      href: REPATRIATION_COST_PATH,
    },
    {
      title: "Leaving tools hub",
      body: "All live leaving tools in one place for planning and logistics.",
      href: LEAVING_TOOLS_PATH,
    },
  ],
  recordsChecklist: [
    "Municipality deregistration confirmation (uitschrijving) with departure date",
    "Final lease, inspection photos, meter readings and deposit correspondence",
    "Health insurer cancellation confirmation and policy end date",
    "Toeslagen messages and any stop/update confirmations",
    "Final payslips, jaaropgaaf / annual statements, 30% ruling letter if applicable",
    "Employer resignation/layoff letters and permit-related correspondence",
    "Forwarding address and DigiD / MijnOverheid message exports where available",
  ],
  mistakeCards: [
    {
      title: "Treating job-search as exit",
      body: "Cancelling BRP and insurance while still intending to stay under an HSM search window creates avoidable chaos.",
    },
    {
      title: "Assuming insurance ends itself",
      body: "Without written insurer confirmation, you may keep paying — or discover a coverage gap too late.",
    },
    {
      title: "Ignoring PR absence rules",
      body: "Long travel or relocation abroad can put permanent residence at risk even if you “might come back”.",
    },
    {
      title: "Saving tax for “later”",
      body: "Exit-year payroll, allowances and residency facts are easier to document before you lose portal access patterns.",
    },
  ] satisfies LeavingJourneyCard[],
  faq: [
    {
      q: "What is the difference between this page and the leaving-tax guide?",
      a: "This page is the end-to-end exit journey (work, housing, BRP, insurance, toeslagen, 30% end, PR consequences, tools). The leaving-tax guide is the deep tax resource for residency, final returns, pensions and related records.",
    },
    {
      q: "Do I always need to deregister from my municipality?",
      a: "Many residents deregister when leaving for a longer period, and the confirmation often becomes the official departure date. Short absences can differ — confirm with your gemeente.",
    },
    {
      q: "Is ending my HSM job the same as leaving the Netherlands?",
      a: "Not necessarily. Some situations involve a job-search window while remaining in the Netherlands. A true exit usually includes ending residence ties such as housing, BRP registration and Dutch health insurance.",
    },
    {
      q: "What happens to the 30% ruling when I leave?",
      a: "The 30% facility is a Belastingdienst payroll arrangement via your employer. It typically ends when the employment/payroll context ends. It is not an IND permit. See the 30% ruling and leaving-tax guides for more detail.",
    },
    {
      q: "Can I lose permanent residence by leaving?",
      a: "Long absences can put PR at risk depending on your status and how long you stay away. Check the permanent residence guide and IND information for your category before you treat exit as temporary.",
    },
    {
      q: "When should I stop Dutch health insurance?",
      a: "Align insurer end date with deregistration and destination cover start. Get written confirmation and update toeslagen if you receive healthcare allowance.",
    },
    {
      q: "What tools should I use first?",
      a: "Start with the exit readiness checker to sequence closures, then the repatriation cost calculator for logistics budgeting. Return to this journey page for status and tax deep-links.",
    },
    {
      q: "Is this legal, tax or immigration advice?",
      a: "No. This is educational orientation only. Confirm rules with official sources (gemeente, insurer, Belastingdienst, IND) and qualified professionals for your situation.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "Official English-language government information for living, leaving and public services.",
    },
    {
      label: "Belastingdienst",
      href: "https://www.belastingdienst.nl/",
      description: "Tax, toeslagen and 30% facility context — not personalised advice.",
    },
    {
      label: "IND",
      href: "https://ind.nl/en",
      description: "Residence permits, permanent residence and related immigration information.",
    },
    {
      label: "NederlandWereldwijd",
      href: "https://www.nederlandwereldwijd.nl/",
      description: "Cross-border information for Netherlands-linked international situations.",
    },
    {
      label: "SVB",
      href: "https://www.svb.nl/",
      description: "Official context for selected family benefits and AOW-related topics.",
    },
  ],
  sourcesDisclaimer:
    "Exit admin depends on your permit, municipality, insurer, employer and destination country. Rules change — verify current official guidance for your case.",
  relatedGuides: [
    {
      label: "Taxes when leaving the Netherlands",
      href: LEAVING_NL_TAX_PATH,
      description: "Deep tax orientation: residency, final return, pensions and allowances.",
    },
    {
      label: "Permanent residence",
      href: PERMANENT_RESIDENCE_PATH,
      description: "Absence rules and long-term stay status before you exit.",
    },
    {
      label: "Dutch citizenship",
      href: DUTCH_CITIZENSHIP_PATH,
      description: "Naturalisation vs option and dual-nationality caveats.",
    },
    {
      label: "30% ruling",
      href: RULING_30_PATH,
      description: "How the Belastingdienst payroll facility works while employed.",
    },
    {
      label: "Highly skilled migrant",
      href: HSM_VISA_GUIDE_PATH,
      description: "Job-search window vs true exit distinctions.",
    },
    {
      label: "Extensions & changes",
      href: EXTENSIONS_CHANGES_PATH,
      description: "If timing or status changes before you leave.",
    },
    {
      label: "Layoffs in the Netherlands",
      href: LAYOFFS_PATH,
      description: "Employment ending orientation when exit follows job loss.",
    },
    {
      label: "Subscriptions & cancellations",
      href: SUBSCRIPTIONS_PATH,
      description: "Contracts, notice periods and practical cancellations.",
    },
    {
      label: "Registering your address",
      href: REGISTER_ADDRESS_PATH,
      description: "BRP address context — arrival-side companion to deregistration.",
    },
  ] satisfies LeavingJourneyLink[],
  exploreNextCards: [
    {
      label: "Exit readiness checker",
      href: EXIT_READINESS_PATH,
      description: "Sequence the practical closures before departure.",
    },
    {
      label: "Repatriation cost calculator",
      href: REPATRIATION_COST_PATH,
      description: "Budget flights, shipping and housing risk ranges.",
    },
    {
      label: "Leaving tools hub",
      href: LEAVING_TOOLS_PATH,
      description: "All leaving tools in one place.",
    },
    {
      label: "Taxes when leaving",
      href: LEAVING_NL_TAX_PATH,
      description: "Open the tax deep guide next.",
    },
    {
      label: "Permanent residence",
      href: PERMANENT_RESIDENCE_PATH,
      description: "Check absence risk if you might return.",
    },
    {
      label: "Moving hub",
      href: MOVING_HUB_PATH,
      description: "Broader relocation orientation if plans change.",
    },
  ] satisfies LeavingJourneyLink[],
  howToSteps: [
    {
      name: "Decide timing and status path",
      text: "Confirm whether you are truly exiting or staying under a job-search or status-change path.",
    },
    {
      name: "Close work and housing",
      text: "Handle notice, lease end, utilities and written confirmations.",
    },
    {
      name: "Deregister and stop insurance",
      text: "Complete municipality uitschrijving and align health insurance end dates with destination cover.",
    },
    {
      name: "Update toeslagen and payroll facilities",
      text: "Stop or update allowances and confirm 30% ruling end with employer/payroll records.",
    },
    {
      name: "Check PR/citizenship consequences and tax depth",
      text: "Review long-term status risk, then open the leaving-tax guide with your evidence pack.",
    },
  ],
} as const;

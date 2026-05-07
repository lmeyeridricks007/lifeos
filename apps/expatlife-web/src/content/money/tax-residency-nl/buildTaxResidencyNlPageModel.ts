import type { MovePillarExploreCard } from "@/src/components/moving/MovePillarExploreGrid";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import { TAX_RESIDENCY_NL_PATH, taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { buildOfficialSourcesReferences } from "../tax-guide-for-expats/taxGuideContentResolve";
import {
  assembleComparisonCards,
  assembleJourneySteps,
  assembleRelatedToolsSections,
  assembleSignalCards,
  resolveTaxResidencyRelatedLinks,
} from "./config/moneyTaxResidencyResolve";
import { MONEY_TAX_BASICS_CONTENT_TAX_YEAR } from "../money-tax-basics/moneyTaxBasicsTaxYear";
import { moneyTaxResidencyOfficialSources } from "./config/moneyTaxResidencyOfficialSources";
import { moneyTaxResidencyComparisonCards, moneyTaxResidencyComparisonProminentContrast } from "./config/moneyTaxResidencyComparisonCards";
import { moneyTaxResidencyFaq } from "./config/moneyTaxResidencyFaq";
import { moneyTaxResidencyInfluenceCards } from "./config/moneyTaxResidencyInfluenceCards";
import { moneyTaxResidencyJourneySteps } from "./config/moneyTaxResidencyJourneySteps";
import { moneyTaxResidencyMisunderstandings } from "./config/moneyTaxResidencyMisunderstandings";
import { moneyTaxResidencyRecommendedServices, moneyTaxResidencyServiceCategoryLinks } from "./config/moneyTaxResidencyRecommendedServices";
import { moneyTaxResidencyRelatedTools } from "./config/moneyTaxResidencyRelatedTools";
import { moneyTaxResidencySignalCards } from "./config/moneyTaxResidencySignalCards";
import { moneyTaxResidencyStartCards } from "./config/moneyTaxResidencyStartCards";
import { moneyTaxResidencyWhyItMattersCards } from "./config/moneyTaxResidencyWhyItMattersCards";

export { moneyTaxResidencyServiceCategoryLinks as taxResidencyNlServiceCategoryLinks } from "./config/moneyTaxResidencyRecommendedServices";

const R = {
  ...taxGuideRoutes,
  visasResidency: "/netherlands/moving/visas-residency/" as const,
  residencePermits: "/netherlands/moving/residence-permits/" as const,
  canonical: TAX_RESIDENCY_NL_PATH,
} as const;

const official = moneyTaxResidencyOfficialSources;

export const taxResidencyNlSectionNav = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#tax-learning-path", label: "Learning path" },
  { href: "#what-tax-residency-means", label: "What tax residency means" },
  { href: "#tax-residency-journey", label: "Journey" },
  { href: "#tax-vs-immigration-residency", label: "Tax vs immigration residency" },
  { href: "#what-influences-residency", label: "What influences residency" },
  { href: "#why-it-matters", label: "Why it matters" },
  { href: "#tax-residency-signals", label: "Signals worth checking" },
  { href: "#arrival-departure-year", label: "Arrival / departure year" },
  { href: "#cross-border-income-assets", label: "Cross-border income & assets" },
  { href: "#double-tax-awareness", label: "Double tax" },
  { href: "#misunderstandings", label: "Common mistakes" },
  { href: "#recommended-services", label: "Tax support" },
  { href: "#what-next", label: "Next steps" },
  { href: "#tax-tools-cluster", label: "Tools" },
  { href: "#continue-related", label: "Continue" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] satisfies MovePillarTocItem[];

export const taxResidencyNlDeepLinks = [
  {
    href: R.taxReturnNl,
    label: "Tax return in the Netherlands",
    description: "What the annual return does, preparation, and how payroll connects — companion to residency timing.",
  },
  {
    href: R.howTaxesWorkInNl,
    label: "How taxes work in the Netherlands",
    description: "Payroll vs return and boxes — the system map before residency detail.",
  },
  {
    href: R.doubleTax,
    label: "Check double-tax awareness",
    description: "Structured prompts when more than one country could be in scope.",
  },
  {
    href: R.salaryNet,
    label: "Estimate net salary",
    description: "Indicative gross-to-net — confirm methodology on the calculator page.",
  },
  {
    href: R.expatTaxesGuide,
    label: "Expat Taxes in the Netherlands",
    description: "Scenario-led map for partial years, assets, allowances, and double tax — use before you assume filing is salary-only.",
  },
  {
    href: R.residencePermits,
    label: "Residence permits in the Netherlands",
    description: "Move-pillar permit logic — related in life to tax, not the same legal label.",
  },
  {
    href: R.visasResidency,
    label: "Visas & residency orientation",
    description: "Route comparison before you mix immigration wording with tax filing language.",
  },
] as const;

export const taxResidencyNlExploreCards: MovePillarExploreCard[] = [
  {
    href: R.taxReturnNl,
    title: "Tax return in the Netherlands",
    description: "Annual filing orientation: prep checklists and payroll vs return when your residency year is non-standard.",
    meta: "Money",
  },
  {
    href: R.howTaxesWorkInNl,
    title: "How Taxes Work in the Netherlands",
    description: "Foundation map: payroll, annual return, boxes — before you reason about residency edges.",
    meta: "Money",
  },
  {
    href: R.taxGuideForExpats,
    title: "Netherlands Tax Guide for Expats",
    description: "Broader expat tax map: ruling, Box 3, payslips, and cross-border orientation.",
    meta: "Money",
  },
  {
    href: R.expatTaxesGuide,
    title: "Expat Taxes in the Netherlands",
    description: "Scenario-first: arrival year, foreign assets, allowances, double-tax prompts.",
    meta: "Money",
  },
  {
    href: R.taxesTools,
    title: "Taxes tools hub",
    description: "Salary net, ruling, payslip path, double-tax awareness — each tool states its limits.",
    meta: "Taxes",
  },
  {
    href: R.visasResidency,
    title: "Visas & residency",
    description: "Permit routes and stay logic — related in life to tax, but not the same concept.",
    meta: "Move",
  },
  {
    href: R.residencePermits,
    title: "Residence permits in the Netherlands",
    description: "Purpose, renewal, and after-approval admin — still not automatic tax-residency answers.",
    meta: "Move",
  },
  {
    href: R.citiesHub,
    title: "Cities hub",
    description: "Pair tax questions with where you live, commute, and rent pressure.",
    meta: "Cities",
  },
];

function buildReferences() {
  return buildOfficialSourcesReferences({
    sectionId: official.sectionId,
    sectionTitle: official.sectionTitle,
    disclaimer: official.disclaimer,
    groups: official.groups.map((g) => ({ id: g.id, title: g.title, keys: [...g.keys] })),
    internalLinks: [
      { label: "How taxes work in the Netherlands", href: R.howTaxesWorkInNl },
      { label: "Tax return in the Netherlands", href: R.taxReturnNl },
      { label: "Netherlands tax guide for expats", href: R.taxGuideForExpats },
      { label: "Expat taxes in the Netherlands", href: R.expatTaxesGuide },
      { label: "Double tax awareness tool", href: R.doubleTax },
      { label: "Taxes tools hub", href: R.taxesTools },
      { label: "Money & tax tools hub", href: R.moneyTools },
      { label: "Tax advisors for expats (guide)", href: R.taxAdvisorsExpats },
      { label: "Working in the Netherlands", href: R.workingNl },
      { label: "Visas & residency orientation", href: R.visasResidency },
      { label: "Residence permits in the Netherlands", href: R.residencePermits },
    ],
  });
}

export function buildTaxResidencyNlPageModel() {
  const references = buildReferences();
  const journeyFlowSteps = assembleJourneySteps(moneyTaxResidencyJourneySteps);
  const comparisonCards = assembleComparisonCards(moneyTaxResidencyComparisonCards);
  const signalCards = assembleSignalCards(moneyTaxResidencySignalCards, TAX_RESIDENCY_NL_PATH);
  const helpfulToolsSections = assembleRelatedToolsSections(moneyTaxResidencyRelatedTools);
  const whyItMattersCards = moneyTaxResidencyWhyItMattersCards.map((c) => ({
    ...c,
    links: resolveTaxResidencyRelatedLinks(c.relatedLinks),
  }));

  return {
    path: TAX_RESIDENCY_NL_PATH,
    publishDate: `${MONEY_TAX_BASICS_CONTENT_TAX_YEAR}-04-28`,
    affiliatePlacementId: "nl-money-tax-residency-nl-support-providers" as const,

    seo: {
      title: "Tax Residency in the Netherlands | ExpatCopilot",
      description:
        "A practical guide to Dutch tax residency — what it means, why it matters for expats, and how arrival dates, work location, family ties, foreign income, assets, and double-tax questions can affect what you need to check.",
      keywords: [
        "tax residency netherlands",
        "dutch tax residency expats",
        "netherlands tax resident rules expat",
        "tax residency vs residence permit netherlands",
        "moving to netherlands tax residency",
        "double tax residency netherlands",
      ],
    },

    ogImage: {
      src: "/images/heroes/netherlands-tax-residency-nl-hero.webp",
      alt: "Bright Netherlands home office: laptop, documents, and coffee on a wooden desk by a window — editorial hero for tax residency orientation on ExpatCopilot.",
      width: 1200,
      height: 630,
    } as const,

    hero: {
      eyebrow: "Netherlands · Money",
      pageTitle: "Tax Residency in the Netherlands",
      subtitle:
        "Plain-language orientation on Dutch tax residency: what it is, how it differs from permits, and what to check next — with tools and official links.",
      contextChips: ["Orientation", "Not tax advice", "Not a determination tool"],
      bullets: [
        "Tax residency vs immigration / permit — keep the labels separate",
        "Signals and factors worth a calm checklist (not a scorecard)",
        "Tools for double-tax awareness, salary, and payslip reading",
        "Official sources when you need authoritative wording",
      ],
      primaryCta: { label: "Start with the basics", href: "#what-tax-residency-means" },
      secondaryCta: { label: "Check double-tax awareness", href: R.doubleTax },
      trustLine:
        "Not tax or legal advice. Outcomes are fact-specific; rules and treaty commentary change — confirm year and source. This page does not decide your status.",
    },

    quickActionStrip: [
      { label: "Check double-tax awareness", href: R.doubleTax },
      { label: "Read expat taxes guide", href: R.expatTaxesGuide },
      { label: "Estimate net salary", href: R.salaryNet },
      { label: "Decode payslip", href: R.payslip },
      { label: "When to consider tax help", href: `${R.taxAdvisorsExpats}#start-here-need` },
    ] as const,

    atAGlance: {
      sectionTitle: "At a glance",
      subtitle: "A Money pillar support page — practical tax residency orientation for expats and cross-border households.",
      cells: [
        {
          title: "What this page is for",
          body: "A practical overview of what Dutch tax residency usually refers to in plain language, why it matters for filing and scope, and which questions to ask next — without replacing Belastingdienst or an adviser.",
        },
        {
          title: "Best for",
          body: "Expats, remote workers, arrivals and departures, people with foreign income or assets, and families with ties in more than one country who want a high-trust map before decisions.",
        },
        {
          title: "What it covers",
          body: "Tax vs immigration residency, factors that can matter, filing and Box 3 awareness, double-tax orientation, and links into calculators and deeper guides.",
        },
        {
          title: "What it skips",
          body: "Final residency determination, treaty interpretation, personalised tax advice, and year-specific thresholds unless you confirm them in official sources.",
        },
      ],
      note: "Fact-specific topic — this page lists questions, not answers. Confirm with Belastingdienst or an adviser when your situation is cross-border or unusual.",
    },

    trustPanel: {
      id: "trust-read-me",
      title: "Trust & limits",
      intro:
        "We explain ideas and link to tools. We do not review your file or predict a final assessment — use official pages or a qualified adviser when you need certainty.",
      callouts: [
        {
          id: "not-advice",
          label: "Not tax advice",
          body: "General information only — not legal, tax, or financial advice tailored to you.",
        },
        {
          id: "fact-specific",
          label: "Fact-specific",
          body: "Same words can read differently when your dates, income mix, or ties change — treat examples as orientation, not a template outcome.",
        },
        {
          id: "rules-change",
          label: "Rules & treaties evolve",
          body: "Law, treaty commentary, and Belastingdienst pages are updated over time — check the effective year when you rely on a rule or example.",
        },
        {
          id: "officials-bottom",
          label: "Official sources",
          body: "Authoritative links sit in a compact block below the FAQ — open them when you need wording straight from the source.",
          link: { href: "#official-sources", label: "Jump to official sources" },
        },
      ],
    },

    pillarBridge: {
      id: "money-tax-context",
      eyebrow: "Inside ExpatCopilot",
      title: "How this page fits with Money, Taxes, and Move",
      intro:
        "Learning path **step 3** — tax residency orientation (ties and labels, not a determination). Steps **1–2** are How Taxes Work and Expat Taxes / Tax Guide; **step 4** is the tax return guide. Move pages cover permits and work setup — related in life, not identical in tax law.",
      links: [
        { href: R.howTaxesWorkInNl, label: "How taxes work in the Netherlands", description: "Payroll vs return and boxes — foundation first.", meta: "Money" },
        { href: R.taxReturnNl, label: "Tax return in the Netherlands", description: "Annual filing orientation: prep, payroll vs return, and when complexity rises.", meta: "Money" },
        { href: R.taxGuideForExpats, label: "Netherlands tax guide for expats", description: "Broad expat tax map and cross-links.", meta: "Money" },
        { href: R.expatTaxesGuide, label: "Expat Taxes in the Netherlands", description: "Scenarios: partial years, assets, allowances, double tax.", meta: "Money" },
        { href: R.doubleTax, label: "Double tax awareness tool", description: "Structured prompts — awareness, not a final answer.", meta: "Taxes" },
        {
          href: R.taxAdvisorsExpats,
          label: "Tax advisors for expats (guide)",
          description: "When paid help may be worth comparing after you map ties and cross-border questions.",
          meta: "Money",
        },
        { href: R.visasResidency, label: "Visas & residency", description: "Immigration routes before you mix labels.", meta: "Move" },
        { href: R.residencePermits, label: "Residence permits in the Netherlands", description: "Permit purpose and renewals — not interchangeable with tax residency.", meta: "Move" },
        { href: R.workingNl, label: "Working in the Netherlands", description: "Offers, contracts, payroll, and first-month money.", meta: "Move" },
      ],
    },

    startHere: {
      id: "what-tax-residency-means",
      eyebrow: "Start here",
      title: "What tax residency means",
      subtitle:
        "Tax residency = treated as resident for tax purposes (reporting scope, return concepts). It is not the same label as a visa or residence permit.",
      cards: [...moneyTaxResidencyStartCards],
    },

    journeyFlow: {
      id: "tax-residency-journey",
      eyebrow: "Visual map",
      title: "Tax residency journey in the Netherlands",
      subtitle:
        "Six stages from planning through the annual return and ongoing life. Treat this as a reading order and link ladder — not a substitute for official guidance or personalised advice.",
      steps: journeyFlowSteps,
    },

    taxVsImmigration: {
      id: "tax-vs-immigration-residency",
      eyebrow: "Critical distinction",
      title: "Tax residency vs immigration residency",
      subtitle:
        "Immigration asks whether you may live and work in the Netherlands. Tax residency asks what the Dutch tax system may expect from your tax year. They often overlap in daily life, but they answer different questions.",
      intro:
        "Example: you can have a valid residence permit and still need to check foreign income or assets for a Dutch return. You can also register at the municipality without that one step deciding every cross-border tax question. Keep one timeline for IND/gemeente admin and another for income, assets, work location, and dates.",
      prominentContrast: moneyTaxResidencyComparisonProminentContrast,
      comparison: comparisonCards,
    },

    influences: {
      id: "what-influences-residency",
      eyebrow: "Practical factors",
      title: "What can influence tax residency",
      subtitle: "Scan lines first — then the short note. Not a scorecard; not one-factor-wins.",
      cards: [...moneyTaxResidencyInfluenceCards],
    },

    whyItMatters: {
      id: "why-it-matters",
      eyebrow: "Outcomes",
      title: "Why tax residency matters",
      subtitle:
        "Understanding tax residency helps you choose the right reading order for official pages and tools — it does not replace them.",
      cards: whyItMattersCards,
    },

    signalsWorthChecking: {
      id: "tax-residency-signals",
      eyebrow: "Action prompts",
      title: "Tax residency signals worth checking",
      subtitle:
        "If a line below sounds like your year, it is a nudge to organise facts and open the right next page — not a diagnosis. Low means a simple admin-and-reading path for many people; medium means worth checking a few sources or tools; high suggests consider support when facts stack across borders.",
      cards: signalCards,
    },

    arrivalDeparture: {
      id: "arrival-departure-year",
      eyebrow: "Transition years",
      title: "Arrival year, departure year, and part-year situations",
      subtitle:
        "Arrive or leave mid-year → overlapping payroll, registration, and sometimes two countries in one calendar year.",
      intro:
        "Tip: one table of dates + income lines beats a long story. Pair it with official emigration/immigration pages — skip forum certainty.",
      cards: [
        {
          id: "arrive-mid",
          title: "Arriving mid-year",
          body: "Your Dutch tax year may begin after another country has already seen salary, benefits, or investment income.",
          impact: "Impact: you may need to separate pre-arrival income, Dutch payroll income, registration dates, and first payslip timing before reading the return.",
          examples: [
            "You earned salary abroad from January to July, then started Dutch payroll in August.",
            "Your BSN and first Dutch payslip arrive weeks apart.",
            "You receive relocation reimbursements or bonuses around the move date.",
          ],
        },
        {
          id: "leave-mid",
          title: "Leaving mid-year",
          body: "Leaving the Netherlands can leave a tail of Dutch salary, bonus, housing, or asset questions after your physical move.",
          impact: "Impact: the year may still need a Dutch filing story even if daily life has moved elsewhere.",
          examples: [
            "You move abroad in October but receive final Dutch salary or holiday allowance later.",
            "You keep a Dutch rental or owned home for a period after leaving.",
            "A new foreign job starts before Dutch payroll/admin is fully closed.",
          ],
        },
        {
          id: "family-split",
          title: "Partner or family arrives at a different time",
          body: "Household moves in stages can make partner, allowance, childcare, and residence-tie questions harder to read.",
          impact: "Impact: one personal move date may not describe the whole household for return or toeslagen-style questions.",
          examples: [
            "You arrive first for work, while your partner and children arrive months later.",
            "Your partner keeps earning abroad during part of your Dutch year.",
            "Childcare or healthcare allowance questions start before the household feels settled.",
          ],
        },
        {
          id: "work-before",
          title: "Work starts before or after relocation",
          body: "Contract start, payroll country, and physical work location can point to different dates.",
          impact: "Impact: map where you worked, who paid you, and where you lived for each period instead of relying on the contract date alone.",
          examples: [
            "You sign a Dutch contract before you physically move.",
            "You work remotely from abroad for a Dutch employer before arrival.",
            "You relocate first, but payroll starts later after onboarding or permit timing.",
          ],
        },
        {
          id: "assets-abroad",
          title: "Foreign assets remain abroad",
          body: "Accounts, investments, crypto, or property outside the Netherlands can still be relevant to the Dutch filing picture.",
          impact: "Impact: a salary-only view may miss Box-style, foreign asset, or double-tax awareness questions.",
          examples: [
            "You keep savings or investments in your previous country.",
            "You own foreign property after moving to the Netherlands.",
            "You receive dividends, interest, rent, or brokerage statements from abroad.",
          ],
        },
      ],
    },

    crossBorder: {
      id: "cross-border-income-assets",
      eyebrow: "Cross-border",
      title: "Cross-border work, foreign income, and foreign assets",
      subtitle:
        "Remote, foreign employer, or assets abroad → often a wider return picture than Dutch payroll alone. Treaties exist — we do not interpret treaty text for you.",
      cards: [
        {
          id: "remote",
          title: "Foreign employer / remote work",
          body: "Where work is physically performed and where the employer pays from can each matter alongside your living pattern.",
          impact: "Impact: you may need to separate employer country, payroll country, workdays, and where you actually lived during the same period.",
          examples: [
            "You live in the Netherlands but stay employed by a company abroad.",
            "You work several months remotely from outside the Netherlands while Dutch payroll continues.",
            "Your contract says one country, but your workdays happen in another.",
          ],
        },
        {
          id: "foreign-inc",
          title: "Foreign income",
          body: "Dividends, rent, freelance invoices, pension income, or old-country salary can coexist with Dutch payroll in the same calendar year.",
          impact: "Impact: a return may need more than your Dutch jaaropgave; organise each income line by source country and date.",
          examples: [
            "You receive dividends from a foreign brokerage account.",
            "You invoice a client abroad after moving to the Netherlands.",
            "You receive rental income from a property outside the Netherlands.",
          ],
        },
        {
          id: "foreign-assets",
          title: "Foreign assets / investments",
          body: "Box-style reporting discussions catch people who thought only Dutch salary mattered.",
          impact: "Impact: savings, investments, crypto, or accounts abroad can create questions even if they do not produce much income.",
          examples: [
            "You keep savings in your previous country after moving.",
            "You hold shares, ETFs, crypto, or investment accounts abroad.",
            "You have foreign bank statements that do not line up neatly with Dutch tax-year timing.",
          ],
        },
        {
          id: "foreign-prop",
          title: "Foreign property",
          body: "Holiday homes and rental property abroad can interact with return questions — use official property and international pages.",
          impact: "Impact: property can raise both asset and income questions; ownership, rental use, and dates all matter.",
          examples: [
            "You own a former home abroad and rent it out after moving.",
            "You keep a holiday home for personal use.",
            "You sell foreign property during a Dutch tax year.",
          ],
        },
        {
          id: "household-split",
          title: "Household split across countries",
          body: "Partner work, children’s school location, two homes, or staggered moves can increase the need for structured notes.",
          impact: "Impact: household timing can affect how you read partner, allowance, and residency-tie questions.",
          examples: [
            "Your partner keeps working abroad while you start Dutch employment.",
            "Children remain in school abroad for part of the year.",
            "You maintain two homes while deciding where the household will settle.",
          ],
        },
      ],
      ctas: resolveTaxResidencyRelatedLinks([
        { kind: "tool", key: "doubleTax" },
        { kind: "tool", key: "expatTaxesGuide" },
        { kind: "tool", key: "employmentType" },
      ]),
    },

    doubleTaxSection: {
      id: "double-tax-awareness",
      eyebrow: "Treaties & relief",
      title: "Double tax and treaty awareness",
      subtitle:
        "Two countries may both have questions in some situations. Double-tax treaties can help allocate taxing rights or provide relief, but wording and facts matter — this page is not a treaty engine.",
      body: "Use the Double Tax Awareness Tool as an early warning checklist — then confirm with Belastingdienst international topics or a cross-border adviser when the tool flags complexity.",
      impact:
        "Impact: when two countries are in scope, the issue is not just “will I pay twice?” It can affect which country asks first, where relief is claimed, which documents you keep, and whether payroll withholding is only part of the story.",
      examples: [
        "You live in the Netherlands but work remote days from another country.",
        "You receive foreign salary, pension, dividends, rent, or freelance income during a Dutch tax year.",
        "You moved mid-year and both countries issued tax forms, annual statements, or filing prompts.",
        "You own property or investments abroad while preparing a Dutch return.",
      ],
      checks: [
        "List countries involved, income type, dates, and who withheld tax.",
        "Keep annual statements and proof of foreign tax paid before trying to interpret treaty relief.",
        "Use official international guidance or scoped advice when the same income appears in two systems.",
      ],
      cta: { label: "Check double-tax awareness", href: R.doubleTax },
    },

    misunderstandings: {
      id: "misunderstandings",
      eyebrow: "Reality check",
      title: "What people often misunderstand",
      subtitle: "Short myth → reality cards — still not personalised advice.",
      rows: [...moneyTaxResidencyMisunderstandings],
    },

    whatNext: {
      id: "what-next",
      eyebrow: "How to use this page",
      title: "How to use this page and what to do next",
      subtitle: "A short sequence that stays honest about when to escalate to professionals.",
      steps: [
        { id: "s1", label: "Decide if your situation is simple or cross-border", href: R.doubleTax, description: "If more than one country could be in scope, use the awareness tool early." },
        { id: "s2", label: "Check arrival and departure timing", href: R.expatTaxesGuide, description: "Partial-year guides help you list overlapping income and moves." },
        {
          id: "s2b",
          label: "Scan signals that match your year",
          href: `${R.canonical}#tax-residency-signals`,
          description: "Short prompts with suggested next tools — still orientation, not a calculator.",
        },
        {
          id: "s3",
          label: "Map work, family, home, and assets",
          href: `${R.canonical}#what-influences-residency`,
          description: "Use the checklists on this page as a notebook structure — not a verdict.",
        },
        { id: "s4", label: "Run double-tax awareness if needed", href: R.doubleTax, description: "Treat output as orientation; confirm with official international pages or an adviser." },
        { id: "s5", label: "Estimate salary or decode payslip if employed", href: R.salaryNet, description: "Pair residency questions with realistic take-home once payroll exists." },
        { id: "s5b", label: "Skim tax return orientation if filing may apply", href: R.taxReturnNl, description: "What the return does, preparation logic, and payroll connection — not a filing portal." },
        { id: "s6", label: "Read the expat tax guide for scenario depth", href: R.expatTaxesGuide, description: "Scenario-led sections for ruling, Box 3, allowances, and filing tone." },
        {
          id: "s6b",
          label: "Use tools first, then ask sharper questions",
          href: `${R.taxAdvisorsExpats}#tools-before-paying`,
          description: "Clarify vocabulary and numbers before you pay someone to restate them.",
        },
        {
          id: "s7",
          label: "When to consider tax help",
          href: `${R.taxAdvisorsExpats}#start-here-need`,
          description: "Optional guide — many residency questions stay in official reading and patience.",
        },
        {
          id: "s7b",
          label: "Compare tax advisor options",
          href: `${R.taxAdvisorsExpats}#recommended-services`,
          description: "If you may hire cross-border help, shortlist firms after you can describe your facts.",
        },
        { id: "s8", label: "Belastingdienst hub for authoritative rules", href: R.taxesHub, description: "Official international and residency topics when wording must be exact." },
      ],
    },

    toolsShell: {
      id: "tax-residency-tools-area",
      title: "Helpful tools",
      subtitle: "Same tax tool cluster as other Money pages — each tool documents its own limits.",
    },

    servicesRegion: {
      ...moneyTaxResidencyRecommendedServices,
    },

    helpfulTools: {
      id: "helpful-tools",
      eyebrow: "Guides & tools",
      title: "Helpful tools and related guides",
      subtitle: "Each link answers a different question — combine them rather than chasing one headline.",
      sections: helpfulToolsSections,
    },

    continueCards: {
      id: "continue-related",
      eyebrow: "Continue",
      title: "Where to go after this page",
      subtitle: "Pick the lane that matches your next unanswered question.",
      cards: [
        { id: "tax-return", title: "Tax return in the Netherlands", description: "If annual filing, prep, or payroll vs return questions sit next to your residency year.", href: R.taxReturnNl, ctaLabel: "Open tax return guide" },
        { id: "how-taxes", title: "How Taxes Work in the Netherlands", description: "If boxes, payroll, and return vocabulary still feel fuzzy.", href: R.howTaxesWorkInNl, ctaLabel: "Open foundation guide" },
        { id: "expat", title: "Expat Taxes in the Netherlands", description: "If your year, assets, or household story is non-standard.", href: R.expatTaxesGuide, ctaLabel: "Open scenario guide" },
        { id: "double", title: "Double Tax Awareness Tool", description: "If two countries could both ask questions.", href: R.doubleTax, ctaLabel: "Open tool" },
        {
          id: "advisors",
          title: "Tax Advisors in the Netherlands for Expats",
          description: "Optional when you may compare paid help — not required to understand this orientation page.",
          href: R.taxAdvisorsExpats,
          ctaLabel: "Open tax advisors guide",
        },
      ],
    },

    faq: [...moneyTaxResidencyFaq],

    sectionNav: taxResidencyNlSectionNav,
    deepLinks: taxResidencyNlDeepLinks,
    references,
  } as const;
}

export const taxResidencyNlPageModel = buildTaxResidencyNlPageModel();
export type TaxResidencyNlPageModel = typeof taxResidencyNlPageModel;

/** Re-export for editors who import from the config folder directly. */
export { moneyTaxResidencyServiceCategoryLinks };

import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import { banksDetailSections } from "@/src/data/banking/banks";

export const BEST_BANKS_EXPATS_PATH = "/netherlands/money/banking/best-banks-expats/" as const;

export type { BankDetailVm } from "@/src/data/banking/banks";

export const bestBanksExpatsPageModel = {
  path: BEST_BANKS_EXPATS_PATH,
  publishDate: "2026-04-28",

  seo: {
    title: "Best Banks for Expats in the Netherlands | ExpatCopilot",
    description:
      "Compare the best banks for expats in the Netherlands, including ING, ABN AMRO, Bunq, Revolut, and N26. Learn about fees, onboarding, and expat-friendly options.",
    keywords: [
      "best bank netherlands expats",
      "dutch bank account expats",
      "bunq vs ing expats",
      "revolut netherlands expats",
    ],
  },

  heroImage: {
    src: "/images/heroes/netherlands-tools-hub-hero.png",
    alt: "Netherlands expat planning desk with laptop — editorial hero for money and banking tools on ExpatCopilot",
    width: 1200,
    height: 630,
  },

  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#quick-recommendations", label: "By use case" },
    { href: "#comparison", label: "Comparison table" },
    { href: "#bank-details", label: "Bank breakdowns" },
    { href: "#traditional-vs-digital", label: "Traditional vs digital" },
    { href: "#how-to-choose", label: "How to choose" },
    { href: "#common-mistakes", label: "Common mistakes" },
    { href: "#recommended-options", label: "Recommended options" },
    { href: "#related-tools", label: "Related tools" },
    { href: "#banking-glossary", label: "Banking glossary" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Best Banks for Expats in the Netherlands",
    subtitle:
      "Side-by-side view of onboarding, fees, English support, and everyday Dutch payments (including iDEAL) — pick what fits your situation, not a headline winner.",
    contextChips: ["Planning only", "Neutral", "Verify on bank sites"],
    trustLine:
      "Indicative only — fees and rules change. Confirm on each bank’s official pages before you apply. Pair this shortlist with Banking fees and costs and Types of bank accounts when you compare packages.",
    bullets: [
      "Six banks in one sortable table on desktop and cards on mobile.",
      "Use-case shortlist below the hero, then deeper notes when you need them.",
    ],
    primaryCta: { label: "Compare banks", href: "#comparison" },
    secondaryCta: { label: "Explore options", href: "#recommended-options" },
    /** Compact strip above the fold — links to full use-case cards. */
    quickPicks: [
      { label: "Fast setup", picks: "bunq · Revolut" },
      { label: "Dutch payroll / rent", picks: "ING · ABN · Rabo" },
      { label: "FX + transfers", picks: "Wise · Revolut" },
    ] as const,
  },

  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "Four checks — then the table.",
    cells: [
      {
        title: "What this page is for",
        bullets: [
          "Shortlist Dutch or Dutch-licensed accounts using onboarding, English, fees, and iDEAL use — see Types of bank accounts for everyday account labels first.",
        ] as const,
      },
      {
        title: "Best for",
        bullets: ["First Dutch account, app versus branch trade-offs, neutral scanning before bank sites."] as const,
      },
      {
        title: "What it compares",
        bullets: ["ING, ABN AMRO, Rabobank, bunq, Revolut, N26 — trade-offs, not star ratings."] as const,
      },
      {
        title: "What it does NOT do",
        bullets: ["Live pricing, opening accounts for you, legal or tax advice, or guaranteed eligibility."] as const,
      },
    ],
    note: "Compare options, not crown a single best bank — your employer, landlord, and billers still set some constraints.",
  },

  quickRecommendations: {
    id: "quick-recommendations",
    eyebrow: "Use cases",
    title: "Best banks by use case",
    subtitle: "Heuristics — validate on bank sites and with your own documents.",
    cards: [
      {
        title: "Often shortlist first",
        picks: "bunq · ING",
        bullets: [
          "bunq: app-first, English-heavy Dutch account path.",
          "ING: large retail bank, familiar payroll/rent rail.",
        ] as const,
      },
      {
        title: "Fastest app flows (tendency)",
        picks: "bunq · Revolut",
        bullets: [
          "Digital onboarding can be quick when ID checks pass.",
          "Revolut: spending and FX — confirm if you still need a Dutch account for salary and direct debits.",
        ] as const,
      },
      {
        title: "Traditional / branch-friendly",
        picks: "ING · ABN AMRO",
        bullets: [
          "Common when you want branches plus a broad retail stack.",
          "Rabobank: regional and relationship angle — compare fees and app UX.",
        ] as const,
      },
      {
        title: "Lowest total cost",
        picks: "Depends",
        bullets: [
          "Plans, FX, ATM, and idle rules change totals.",
          "Model your usage, then read each bank’s tariff PDF.",
        ] as const,
      },
      {
        title: "Cross-border money",
        picks: "Revolut · Wise",
        bullets: ["Strong for multi-currency and transfers.", "Usually a companion to a Dutch IBAN for local bills."] as const,
      },
      {
        title: "Long-horizon NL integration",
        picks: "ING · ABN · Rabo",
        bullets: ["Typical path for multi-year servicing depth.", "Often slower onboarding vs pure app banks."] as const,
      },
    ],
  },

  comparisonIntro: {
    eyebrow: "Compare",
    title: "Bank comparison",
    subtitle:
      "Typical patterns only — your onboarding may differ. BSN rules change; check each bank’s current newcomer pages.",
  },

  bankDetails: banksDetailSections,

  bankDetailsIntro: "Same six banks as the table — shorter notes. Confirm products on official sites.",

  traditionalVsDigital: {
    id: "traditional-vs-digital",
    eyebrow: "Mental model",
    title: "Traditional vs digital banks — what changes for expats",
    lead: "Not “old vs new” — which jobs each stack does well: local depth vs app speed.",
    traditional: {
      title: "Traditional Dutch banks",
      points: [
        "Stable multi-year expectation for payroll, iDEAL, and direct debits.",
        "Branch and mortgage pathways (where relevant) on one brand.",
        "Harder onboarding in some cases — more document steps, more variance by municipality timing.",
      ],
    },
    digital: {
      title: "Digital banks & fintech apps",
      points: [
        "Faster remote flows when verification succeeds.",
        "App-first servicing — strong for straightforward cases, thinner for edge cases.",
        "Sometimes weaker fit for every Dutch biller scenario unless you confirm account type and protections.",
      ],
    },
  },

  howToChoose: {
    id: "how-to-choose",
    eyebrow: "Decision framework",
    title: "How to choose the right bank",
    intro: "Five quick checks:",
    questions: [
      {
        q: "BSN + Dutch address ready?",
        a: "Yes → most retail paths open. No → read each bank’s interim rules and document list.",
      },
      {
        q: "Need the fastest account access?",
        a: "Digital onboarding can be quicker if verification passes — keep a plan B if checks fail.",
      },
      {
        q: "Lots of international transfers?",
        a: "Many people pair a Dutch IBAN with Wise or Revolut for FX.",
      },
      {
        q: "Need iDEAL, salary, utilities on one account?",
        a: "Prefer a Dutch-licensed account and confirm biller acceptance yourself.",
      },
      {
        q: "Optimise for cost or simplicity?",
        a: "Cost → map packages, ATM, FX. Simplicity → expect to pay a bit more for fewer decisions.",
      },
    ],
  },

  commonMistakes: {
    id: "common-mistakes",
    eyebrow: "Reality check",
    title: "Common expat banking mistakes",
    cards: [
      {
        title: "Choosing from one forum thread",
        body: "Use the table, then confirm documents, timeline, and fees on the bank site.",
      },
      {
        title: "Ignoring recurring fees",
        body: "Free is often conditional — check monthly, card, and idle rules.",
      },
      {
        title: "Skipping the checklist",
        body: "BSN, address, and contract mixes differ per bank — use each bank’s current list.",
      },
      {
        title: "Staying on a foreign IBAN too long",
        body: "Many billers expect Dutch direct debits — friction can build even when edge cases “work”.",
      },
      {
        title: "Treating banks as identical",
        body: "App quality, English, branches, and business products diverge — match a two-year pattern, not week one hype.",
      },
    ],
  },

  relatedTools: {
    id: "related-tools",
    title: "Related tools",
    subtitle: "Hold the same assumptions when you compare accounts.",
    items: [
      {
        title: "Types of bank accounts",
        description: "Map Dutch account types (current, savings, joint, student, business, digital) to your situation before you sort banks.",
        href: "/netherlands/money/banking/types-of-accounts/",
        ctaLabel: "Read account types guide",
      },
      {
        title: "How payments work",
        description: "IBAN, iDEAL, SEPA, and direct debits — understand rails before you judge iDEAL support and fees.",
        href: "/netherlands/money/banking/how-payments-work/",
        ctaLabel: "Read payments guide",
      },
      {
        title: "Traditional vs digital banks",
        description: "Choose retail, digital, or hybrid before you lock in payroll and rent rails.",
        href: "/netherlands/money/banking/traditional-vs-digital/",
        ctaLabel: "Read the lens guide",
      },
      {
        title: "Banking fees & costs",
        description: "Map monthly, per-use, and international costs before you pick a package — then confirm on each bank’s PDF.",
        href: "/netherlands/money/banking/fees/",
        ctaLabel: "Read fee framework",
      },
      {
        title: "Cost of Living Calculator",
        description: "Sketch monthly pressure before you lock in housing and account cashflow.",
        href: "/netherlands/money/tools/cost-of-living-calculator/",
        ctaLabel: "Open calculator",
      },
      {
        title: "Dutch Salary (Net) Calculator",
        description: "Understand net pay so you can judge fee tiers and minimum balances realistically.",
        href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
        ctaLabel: "Estimate net salary",
      },
      {
        title: "Job Offer Comparison",
        description: "When banking follows a new role, compare offers on the same money assumptions.",
        href: "/netherlands/work/tools/job-offer-comparison/",
        ctaLabel: "Compare offers",
      },
      {
        title: "Utilities & Services Comparison",
        description: "Many bills ultimately land on your Dutch account — see how utilities decisions stack.",
        href: "/netherlands/living/tools/utilities-services-comparison/",
        ctaLabel: "Compare utilities",
      },
      {
        title: "Banking cost estimator",
        description: "A dedicated banking-fee estimator is on the ExpatCopilot roadmap — for now, use each bank’s published tariff PDF plus your expected transfers.",
        href: "/netherlands/services/banks/",
        ctaLabel: "Browse banks hub",
      },
    ],
  },

  faq: [
    {
      q: "What is the best bank for expats in the Netherlands?",
      a: "There is no universal winner. “Best” depends on BSN timing, whether you need branch help, fee sensitivity, and whether you must optimise for payroll, rent, and iDEAL on a Dutch-licensed account. Use the comparison table and use-case cards, then confirm details on each bank’s site.",
    },
    {
      q: "Can I open a bank account without a BSN?",
      a: "Sometimes partial onboarding exists, but most mainstream Dutch accounts expect a BSN within a defined window. Policies change — read the bank’s current expat or newcomer FAQ rather than relying on older threads.",
    },
    {
      q: "Are digital banks safe?",
      a: "Regulated Dutch payment institutions must meet supervisory requirements. EU passported products differ in deposit insurance and consumer protections — read the FCA- or DNB-style disclosures for the specific product you open, not the marketing headline.",
    },
    {
      q: "Which bank is cheapest?",
      a: "Cheapest depends on how you use the account: card withdrawals abroad, FX, overdraft, and subscription tiers all matter. Start from a monthly budget for banking fees, then compare official price lists for the exact package.",
    },
    {
      q: "Can I use Revolut or N26 in the Netherlands?",
      a: "Yes, many residents use them for spending and travel. Whether they can replace a Dutch account for your employer, landlord, and utilities is a separate question — validate contract language and biller requirements.",
    },
    {
      q: "Do I need a Dutch bank account?",
      a: "Not legally for every single person, but practically most residents want a Dutch IBAN account for salary, rent, tax, and local direct debits. A foreign app alone is often the wrong tool for that bundle.",
    },
    {
      q: "What is iDEAL?",
      a: "iDEAL is a common online payment method in the Netherlands that debits a Dutch bank account through your bank’s app or flow. It is not a separate balance — it rides on your current account setup.",
    },
  ],

  officialSources: {
    sectionId: "official-sources",
    sectionTitle: "Official sources",
    disclaimer:
      "These links help you verify supervision, payments infrastructure, and scheme context. They do not replace reading your bank’s own legal documentation.",
    groups: [
      {
        id: "supervision",
        title: "Supervision & stability",
        links: [
          {
            type: "external" as const,
            label: "De Nederlandsche Bank (DNB) — central bank & prudential supervision",
            href: "https://www.dnb.nl/en/",
          },
          {
            type: "external" as const,
            label: "AFM — Dutch Authority for the Financial Markets",
            href: "https://www.afm.nl/en/",
          },
        ],
      },
      {
        id: "payments",
        title: "Payments & iDEAL",
        links: [
          { type: "external" as const, label: "iDEAL (scheme overview)", href: "https://www.ideal.nl/en/" },
          {
            type: "external" as const,
            label: "European Payments Council — SEPA schemes",
            href: "https://www.europeanpayments.eu/",
          },
        ],
      },
    ],
  } satisfies MoveVisaResidencyReferences,

  /**
   * Monetization: provider listings only — visually and semantically separated from editorial blocks.
   * `placementId` resolves cards via `loadPlacementWithProviders` (affiliate JSON).
   */
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Recommended options",
    subtitle:
      "Soft CTAs — we are not opening accounts for you. Use these cards to jump to official sites, then validate fees and eligibility yourself.",
    boundaryNote:
      "Editorial comparison, tables, and breakdowns above are separate from this block. Ordering reflects relevance to this topic, not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-money-best-banks-expats-support-providers",
    /** Passed to `data-outbound-page-context` for outbound analytics. */
    analyticsPageContext: "best-banks-expats-recommended-options",
    categoryLinks: [
      { href: "/netherlands/services/banks/", label: "Banks directory" },
      { href: "/netherlands/open-bank-account-netherlands/", label: "Open a bank account guide" },
    ],
    browseLabel: "More banking context on ExpatCopilot: ",
  },
} as const;

export type BestBanksExpatsPageModel = typeof bestBanksExpatsPageModel;

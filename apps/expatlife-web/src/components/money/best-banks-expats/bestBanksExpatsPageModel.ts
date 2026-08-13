import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import {
  BANK_COMPARISON_TOOL_PATH,
  BANKING_COST_ESTIMATOR_PATH,
} from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { banksDetailSections } from "@/src/data/banking/banks";
import { BEST_BANKS_EXPATS_PATH } from "./bestBanksExpatsPaths";

export { BEST_BANKS_EXPATS_PATH } from "./bestBanksExpatsPaths";

/** Sibling / hub paths inlined to avoid cycles with modules that import BEST_BANKS_EXPATS_PATH. */
const BANKING_HUB_PATH = "/netherlands/money/banking/" as const;
const OPEN_BANK_ACCOUNT_NETHERLANDS_PATH = "/netherlands/open-bank-account-netherlands/" as const;
const TYPES_OF_BANK_ACCOUNTS_PATH = "/netherlands/money/banking/types-of-accounts/" as const;
const HOW_PAYMENTS_WORK_PATH = "/netherlands/money/banking/how-payments-work/" as const;
const CHEAPEST_BANK_ACCOUNTS_PATH = "/netherlands/money/banking/cheapest-accounts/" as const;
const TRADITIONAL_VS_DIGITAL_BANKS_PATH = "/netherlands/money/banking/traditional-vs-digital/" as const;
const BANKING_ACCOUNT_REJECTION_PATH = "/netherlands/money/banking/account-rejection/" as const;

export type { BankDetailVm } from "@/src/data/banking/banks";

export type BestBanksLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon" | "external";
};

export type TipCard = { title: string; body: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type MistakeCard = { title: string; body: string; advice: string };
export type ScenarioRow = { situation: string; approach: string; firstStep: string };
export type HowToStep = { name: string; text: string };
export type ChooseQuestion = { q: string; a: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "best-banks-expats-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const FEES_PATH = "/netherlands/money/banking/fees/" as const;
export const BANKING_SECURITY_PATH = "/netherlands/money/banking/security/" as const;
const CASH_VS_CARD_PATH = "/netherlands/money/banking/cash-vs-card/" as const;
const DEBIT_CARDS_PATH = "/netherlands/money/banking/debit-cards/" as const;
const CREDIT_CARDS_PATH = "/netherlands/money/banking/credit-cards/" as const;
const WISE_VS_REVOLUT_PATH = "/netherlands/money/banking/wise-vs-revolut/" as const;

export const bestBanksExpatsPage = {
  slug: "best-banks-expats",
  path: BEST_BANKS_EXPATS_PATH,
  hubPath: BANKING_HUB_PATH,
  publish: true,
  publishDate: "2026-08-13",
  seo: {
    title: "Best Banks for Expats in the Netherlands | Complete Guide",
    description:
      "Compare Dutch bank options for expats: onboarding, English support, fees, and everyday use — an editorial shortlist to verify on each bank’s site, not a pay-to-rank awards page.",
    keywords: [
      "best bank netherlands expats",
      "dutch bank account expats",
      "bunq vs ing expats",
      "revolut netherlands expats",
      "best banks for expats Netherlands",
      "expat bank comparison Netherlands",
      "Dutch retail banks for newcomers",
      "digital banks Netherlands expats",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Best Banks for Expats in the Netherlands",
    subtitle:
      "An editorial shortlist for newcomers: compare onboarding, English support, fees, and everyday Dutch payments — then verify every detail on each bank’s official pages.",
    primaryCta: { label: "Compare banks", href: "#comparison" },
    secondaryCta: { label: "By use case", href: "#use-cases" },
    chips: ["Editorial shortlist", "Verify on bank sites", "Fees indicative 2026", "No awards ranking"],
    disclaimer:
      "General orientation only — not financial, legal or tax advice. This is not a pay-to-rank awards page. Fees, eligibility and products change; confirm on each provider’s official pages before you apply.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic Dutch canal-side desk: multicultural expat comparing bank options on a laptop beside printed fee leaflets, passport, and a debit card — soft daylight through canal-house windows.",
    },
    quickPicks: [
      { label: "Fast setup", picks: "bunq · Revolut" },
      { label: "Dutch payroll / rent", picks: "ING · ABN · Rabo" },
      { label: "FX + transfers", picks: "Wise · Revolut" },
    ] as const,
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#use-cases", label: "By use case" },
    { href: "#comparison", label: "Comparison" },
    { href: "#bank-details", label: "Bank notes" },
    { href: "#traditional-vs-digital", label: "Trad vs digital" },
    { href: "#how-to-choose", label: "How to choose" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#tools", label: "Tools" },
    { href: "#recommended-options", label: "Providers" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#banking-hub", label: "Banking hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Best Banks for Expats — four building blocks: map your use case, compare patterns not awards, verify fees on bank sites, then open with the setup guide — right-side Compare file rail lists BSN plan, English need, payroll and iDEAL.",
      "Four habits cover most shortlist questions: use case, compare patterns, verify fees, then open calmly."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch bank shortlisting for expats — use-case lens, onboarding friction, English support, fee patterns, traditional vs digital, and a pointer to open-account steps — Dutch canal skyline band and ExpatLife brand footer.",
      "Six cards summarise how to shortlist calmly; deeper sections expand each theme without crowning a winner."
    ),
    useCases: visual(
      "use-cases",
      "Premium use-case map for expat banking — fast app setup, payroll and rent rails, branch-friendly paths, lowest total cost modelling, cross-border FX companions, and long-horizon Dutch integration — desk scene with labelled cards and Verify with providers rail.",
      "Match a use-case shortlist to your next 12–24 months — then confirm products on each bank site."
    ),
    comparison: visual(
      "comparison",
      "Premium comparison lens board for Dutch banks — columns for onboarding, English, monthly fee pattern, iDEAL and local bills, and international use — with a General information only note and canal backdrop.",
      "Use the comparison lens on each bank’s site — patterns matter more than brand hype."
    ),
    bankNotes: visual(
      "bank-notes",
      "Premium bank notes desk scene — six shortlist folders for ING, ABN AMRO, Rabobank, bunq, Revolut and N26 with pros, cons and best-for sticky notes — ExpatLife brand area and Verify on bank site callout.",
      "Shorter notes for the same six names in the table — still confirm live products yourself."
    ),
    tradDigital: visual(
      "trad-digital",
      "Premium split diagram of traditional Dutch retail banks versus digital and fintech apps — left branch depth and payroll familiarity, right app speed and FX tools — bridge labelled hybrid setups common for expats.",
      "Not old vs new — which jobs each stack does well for salary, rent and travel money."
    ),
    choose: visual(
      "choose",
      "Premium decision checklist board — BSN and address ready, need for speed, international transfers, iDEAL and salary on one account, cost versus simplicity — timeline rail with calm next-step arrows.",
      "Five checks help you shortlist without chasing a single “best bank” headline."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for bank shortlisting — highly skilled migrant needing payroll, student seeking low-friction app path, family wanting joint access, and frequent traveller pairing Dutch IBAN with FX tools — each with a first-step card.",
      "Different arrival stories change priorities — not which bank is best overall."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for choosing a Dutch bank — forum-thread only choices, ignoring recurring fees, skipping document checklists, staying on a foreign IBAN too long, and treating all banks as identical — Fix tips on a right-side rail.",
      "Common shortlist mistakes and calmer fixes — orientation only, no approval guarantees."
    ),
    checklist: visual(
      "checklist",
      "Premium shortlist checklist board — use case written down, BSN plan noted, fee PDFs opened today, English support checked, backup bank named, open-account guide bookmarked — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist before you apply — then verify every item against the bank’s own pages."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Shortlist Dutch or Dutch-licensed accounts by use case",
        "Compare onboarding, English, fees and everyday rails",
        "Avoid pay-to-rank “winner” framing — verify on bank sites",
        "Hand off setup steps to Open a bank account when ready",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "There is no universal best bank for every expat",
        "Payroll, rent and iDEAL often favour a Dutch-licensed account",
        "Digital apps can be fast companions — confirm biller fit",
        "Setup deep-dives and transfer deep-dives live on sibling pages",
      ],
    },
    useCases: {
      title: "Use-case habits",
      items: [
        "Write your top two jobs for the account (salary, rent, travel FX)",
        "Shortlist 2–3 names, not twelve",
        "Treat “fastest signup” as a tendency — verification still fails",
        "Model cost with the estimator before chasing “free” plans",
      ],
    },
    comparison: {
      title: "Comparison habits",
      items: [
        "Read patterns as editorial, not live tariffs",
        "Confirm BSN and address rules on the day you apply",
        "Check iDEAL and direct-debit fit for your billers yourself",
        "Open the bank’s fee PDF for the exact package name",
      ],
    },
    bankNotes: {
      title: "Reading bank notes",
      items: [
        "Pros and cons are orientation, not product guarantees",
        "Best-for lines describe common fits — your case may differ",
        "Affiliate CTAs never change eligibility or pricing",
        "If rejected or delayed, use the account rejection guide",
      ],
    },
    tradDigital: {
      title: "Trad vs digital habits",
      items: [
        "Traditional stacks often feel familiar for payroll and rent",
        "Digital stacks often feel faster for remote onboarding and FX",
        "Many residents run a hybrid: Dutch IBAN + transfer specialist",
        "Read Traditional vs digital for the full lens guide",
      ],
    },
    choose: {
      title: "Decision habits",
      items: [
        "Start from documents and BSN timing, not brand ads",
        "Decide if you need branch help before locking an app-only path",
        "Separate everyday Dutch bills from cross-border FX tools",
        "Optimise for either cost or simplicity — rarely both at once",
      ],
    },
    scenarios: {
      title: "Scenario planning tips",
      items: [
        "Salary-first arrivals prioritise payroll-ready accounts",
        "Students often start with low-friction digital paths",
        "Families check joint access and shared budgeting features",
        "Travellers often pair a Dutch IBAN with Wise or Revolut",
      ],
    },
    mistakes: {
      title: "Mistake prevention",
      items: [
        "Do not crown a winner from one forum thread",
        "Do not skip monthly, ATM and idle fee rules",
        "Do not ignore BSN and address mismatches",
        "Do not expect a foreign app alone to cover every Dutch biller",
      ],
    },
    checklist: {
      title: "Ready-to-shortlist signals",
      items: [
        "Use case and time horizon are written down",
        "Fee PDFs and English pages checked today",
        "Backup shortlist prepared",
        "Open a bank account guide bookmarked for setup",
      ],
    },
  },
  introParagraphs: [
    "“Best bank for expats” searches usually mean: which account will get salary, rent and everyday Dutch payments working without painful surprises — not which brand won a marketing award.",
    "This page is the comparison shortlist: use cases, a side-by-side table, bank notes, and a calm how-to-choose path. For step-by-step opening, use Open a bank account. For sending money abroad, use International transfers. For fee frameworks, use Banking fees.",
  ],
  introHighlights: [
    "Editorial shortlist of common Dutch and Dutch-licensed options — verify on bank sites",
    "Clear boundary: compare here — open-account how-to and transfer deep-dives live on siblings",
    "Links into the Banking hub, comparison tool, and cost estimator",
  ],
  orientationFlowSteps: [
    "Map your use case (salary, rent, travel FX, branch help)",
    "Compare patterns in the table — not star ratings",
    "Verify fees, English and eligibility on each bank site",
    "Open with the setup guide when documents are ready",
  ],
  safetyFileChecklist: [
    "Use case written for the next 12–24 months",
    "BSN and Dutch address plan noted",
    "Bank fee PDF opened for the exact package",
    "English support page checked today",
    "Backup shortlist of 1–2 alternatives",
    "Open a bank account checklist bookmarked",
    "Account rejection guide saved if review stalls",
    "International transfers guide saved if FX is a big need",
  ],
  introScenarios: [
    {
      situation: "First Dutch salary in 4 weeks",
      approach: "Prioritise a payroll-ready Dutch-licensed path; confirm employer IBAN rules",
      firstStep: "Open the comparison table, then Open a bank account for documents",
    },
    {
      situation: "Need something today while BSN is pending",
      approach: "Read each bank’s interim / newcomer rules — policies change",
      firstStep: "Check bank sites first; keep a backup shortlist",
    },
    {
      situation: "Lots of cross-border transfers",
      approach: "Often a Dutch IBAN plus a transfer specialist — not one tool for everything",
      firstStep: "Shortlist local rails here, then International transfers",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: how to shortlist calmly",
    summary:
      "There is no universal best bank. Shortlist by use case, compare onboarding and fee patterns, then verify eligibility and tariffs on each bank’s official pages before you apply.",
    bullets: [
      "Dutch payroll, rent and iDEAL often need a Dutch-licensed everyday account",
      "Digital apps can be fast — confirm they fit your billers and deposit protections",
      "Indicative fees are for orientation (2026) — open each bank’s live fee PDF",
      "Setup steps live on Open a bank account; FX deep-dives on International transfers",
    ],
    note: "Treat this page as a compare-and-verify guide — not a paid ranking or approval promise.",
  },
  snapshotSignals: [
    {
      label: "Lens",
      value: "Compare patterns",
      note: "Not awards or live prices",
    },
    {
      label: "Shortlist",
      value: "Six names",
      note: "ING, ABN, Rabo, bunq, Revolut, N26",
    },
    {
      label: "Fees",
      value: "Indicative 2026",
      note: "Verify on bank PDFs",
    },
    {
      label: "Next step",
      value: "Open guide",
      note: "Documents and BSN timing",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "What this page is for",
      body: "Shortlist Dutch or Dutch-licensed accounts using onboarding, English, fees and everyday rails — before you apply.",
    },
    {
      title: "Best for",
      body: "First Dutch account planning, app versus branch trade-offs, and neutral scanning before bank sites.",
    },
    {
      title: "What it compares",
      body: "ING, ABN AMRO, Rabobank, bunq, Revolut and N26 — trade-offs and tendencies, not star ratings.",
    },
    {
      title: "What it does NOT do",
      body: "Live pricing, opening accounts for you, legal or tax advice, guaranteed eligibility, or pay-to-rank awards.",
    },
    {
      title: "Sibling: open account",
      body: "Documents, BSN timing and step-by-step onboarding live on Open a bank account.",
    },
    {
      title: "Sibling: transfers",
      body: "Cross-border sends, FX and transfer specialists live on International transfers.",
    },
  ] satisfies TipCard[],
  useCases: {
    heading: "Best banks by use case",
    lead: "Heuristics for shortlisting — validate on bank sites and with your own documents. Names are editorial examples, not winners.",
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
          "Plans, FX, ATM and idle rules change totals.",
          "Model your usage, then read each bank’s tariff PDF.",
        ] as const,
      },
      {
        title: "Cross-border money",
        picks: "Revolut · Wise",
        bullets: [
          "Strong for multi-currency and transfers.",
          "Usually a companion to a Dutch IBAN for local bills.",
        ] as const,
      },
      {
        title: "Long-horizon NL integration",
        picks: "ING · ABN · Rabo",
        bullets: [
          "Typical path for multi-year servicing depth.",
          "Often slower onboarding vs pure app banks.",
        ] as const,
      },
    ],
  },
  comparisonIntro: {
    heading: "Bank comparison",
    lead:
      "Typical patterns only — your onboarding may differ. BSN rules change; check each bank’s current newcomer pages. Indicative fee copy is for orientation in 2026 — verify live tariffs.",
  },
  bankDetails: banksDetailSections,
  bankDetailsIntro:
    "Same six banks as the table — shorter notes. Confirm products, fees and eligibility on official sites.",
  traditionalVsDigital: {
    heading: "Traditional vs digital banks — what changes for expats",
    lead: "Not “old vs new” — which jobs each stack does well: local depth vs app speed. Full lens guide: Traditional vs digital banks.",
    traditional: {
      title: "Traditional Dutch banks",
      points: [
        "Stable multi-year expectation for payroll, iDEAL and direct debits.",
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
    heading: "How to choose the right bank",
    intro: "Five quick checks before you shortlist:",
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
    ] satisfies ChooseQuestion[],
  },
  scenarios: {
    heading: "Scenarios: how shortlists change",
    intro: "Same banks, different priorities — use these as starting stories, not prescriptions.",
    rows: [
      {
        situation: "Highly skilled migrant with first payroll soon",
        approach: "Prioritise Dutch-licensed everyday account familiar to employers and landlords",
        firstStep: "Shortlist ING / ABN / bunq patterns, then Open a bank account",
      },
      {
        situation: "International student wanting low friction",
        approach: "Often start digital; confirm student packages and fee tiers on bank sites",
        firstStep: "Use Cheapest accounts + this table, then verify student pages",
      },
      {
        situation: "Family needing joint access",
        approach: "Check joint products, card limits and shared app features per bank",
        firstStep: "Read Types of bank accounts, then bank notes below",
      },
      {
        situation: "Frequent traveller with NL rent",
        approach: "Hybrid: Dutch IBAN for local bills + FX specialist for travel money",
        firstStep: "Shortlist local rails here, then International transfers",
      },
    ] satisfies ScenarioRow[],
  },
  howTo: {
    heading: "How to shortlist in six calm steps",
    lead: "A practical loop you can finish in one evening — then verify on bank sites before applying.",
    steps: [
      {
        name: "Write your use case",
        text: "List salary, rent, iDEAL, travel FX and whether you want branch help.",
      },
      {
        name: "Scan the comparison table",
        text: "Note onboarding and English patterns that match your situation.",
      },
      {
        name: "Open two bank sites",
        text: "Confirm current newcomer rules, BSN timing and the exact package name.",
      },
      {
        name: "Read fee PDFs",
        text: "Check monthly, card, ATM, FX and idle rules for your expected usage.",
      },
      {
        name: "Name a backup",
        text: "Keep a second option if verification stalls or a biller rejects the first account type.",
      },
      {
        name: "Move to setup",
        text: "Follow Open a bank account for documents and steps — return here only if you need to re-shortlist.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to shortlist a Dutch bank as an expat",
    description:
      "Calm steps to compare Dutch bank options for expats and verify fees and eligibility on official bank sites.",
    anchor: "#howto",
  },
  mistakes: {
    heading: "Common expat banking mistakes",
    cards: [
      {
        title: "Choosing from one forum thread",
        body: "Agrees with one loud story can miss your employer, landlord and document timing.",
        advice: "Use the table, then confirm documents, timeline and fees on the bank site.",
      },
      {
        title: "Ignoring recurring fees",
        body: "“Free” is often conditional — monthly, card and idle rules change totals.",
        advice: "Model usage with the cost estimator, then read each tariff PDF.",
      },
      {
        title: "Skipping the checklist",
        body: "BSN, address and contract mixes differ per bank.",
        advice: "Use each bank’s current list the day you apply.",
      },
      {
        title: "Staying on a foreign IBAN too long",
        body: "Many billers expect Dutch direct debits — friction can build even when edge cases “work”.",
        advice: "Plan a Dutch-licensed everyday account for local rails.",
      },
      {
        title: "Treating banks as identical",
        body: "App quality, English, branches and business products diverge.",
        advice: "Match a two-year pattern, not week-one hype.",
      },
      {
        title: "Skipping rejection recovery",
        body: "A delay or rejection is common — panic-applying everywhere can make it worse.",
        advice: "Use the account rejection guide before a second attempt.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Shortlist checklist",
    items: [
      "Use case and 12–24 month horizon written down",
      "Comparison table scanned for onboarding and English fit",
      "Two bank newcomer pages checked today",
      "Exact package fee PDFs opened (indicative 2026 — verify live)",
      "iDEAL / salary / rent needs confirmed with your own billers",
      "Backup shortlist named",
      "Open a bank account guide bookmarked for setup",
      "Account rejection guide saved",
      "International transfers guide saved if FX is material",
      "No expectation that this page ranks a paid “winner”",
    ],
  },
  tools: {
    heading: "Tools that help nearby decisions",
    items: [
      {
        label: "Bank comparison tool",
        href: BANK_COMPARISON_TOOL_PATH,
        description: "Step through your situation — transparent editorial fit scores, not live pricing",
        status: "live" as const,
      },
      {
        label: "Banking cost estimator",
        href: BANKING_COST_ESTIMATOR_PATH,
        description: "Planning bands for monthly and yearly banking spend",
        status: "live" as const,
      },
      {
        label: "Types of bank accounts",
        href: TYPES_OF_BANK_ACCOUNTS_PATH,
        description: "Map account labels before you sort banks",
        status: "live" as const,
      },
    ] satisfies BestBanksLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Recommended options",
    subtitle:
      "Soft CTAs — we are not opening accounts for you. Use these cards to jump to official sites, then validate fees and eligibility yourself.",
    boundaryNote:
      "Editorial comparison, tables and breakdowns above are separate from this block. Ordering reflects relevance to this topic, not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-money-best-banks-expats-support-providers",
    analyticsPageContext: "best-banks-expats-recommended-options",
    categoryLinks: [
      { href: "/netherlands/services/banks/", label: "Banks directory" },
      { href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH, label: "Open a bank account guide" },
    ],
    browseLabel: "More banking context: ",
  },
  faq: [
    {
      q: "What is the best bank for expats in the Netherlands?",
      a: "There is no universal winner. “Best” depends on BSN timing, whether you need branch help, fee sensitivity, and whether you must optimise for payroll, rent and iDEAL on a Dutch-licensed account. Use the comparison table and use-case cards, then confirm details on each bank’s site.",
    },
    {
      q: "Can I open a bank account without a BSN?",
      a: "Sometimes partial onboarding exists, but most mainstream Dutch accounts expect a BSN within a defined window. Policies change — read the bank’s current expat or newcomer FAQ rather than relying on older threads.",
    },
    {
      q: "Are digital banks safe?",
      a: "Regulated Dutch payment institutions must meet supervisory requirements. EU passported products differ in deposit insurance and consumer protections — read the disclosures for the specific product you open, not the marketing headline.",
    },
    {
      q: "Which bank is cheapest?",
      a: "Cheapest depends on how you use the account: card withdrawals abroad, FX, overdraft and subscription tiers all matter. Start from a monthly budget for banking fees, then compare official price lists for the exact package. See also Cheapest bank accounts.",
    },
    {
      q: "Can I use Revolut or N26 in the Netherlands?",
      a: "Yes, many residents use them for spending and travel. Whether they can replace a Dutch account for your employer, landlord and utilities is a separate question — validate contract language and biller requirements.",
    },
    {
      q: "Do I need a Dutch bank account?",
      a: "Not legally for every single person, but practically most residents want a Dutch IBAN account for salary, rent, tax and local direct debits. A foreign app alone is often the wrong tool for that bundle.",
    },
    {
      q: "What is iDEAL?",
      a: "iDEAL is a common online payment method in the Netherlands that debits a Dutch bank account through your bank’s app or flow. Deeper rails live on How payments work.",
    },
    {
      q: "Is this a paid ranking or awards page?",
      a: "No. This is an editorial shortlist and comparison guide. Affiliate links may appear in a clearly labelled provider block — they do not change the editorial table or guarantee approval.",
    },
  ],
  relatedGuides: [
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Documents, BSN timing and setup steps — live cluster peer",
      status: "live" as const,
    },
    {
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "Sending money abroad — live cluster peer",
      status: "live" as const,
    },
    {
      label: "Banking fees & costs",
      href: FEES_PATH,
      description: "Fee categories without live tariff promises",
      status: "live" as const,
    },
    {
      label: "Traditional vs digital banks",
      href: TRADITIONAL_VS_DIGITAL_BANKS_PATH,
      description: "Branch depth versus app-speed trade-offs",
      status: "live" as const,
    },
    {
      label: "Cheapest bank accounts",
      href: CHEAPEST_BANK_ACCOUNTS_PATH,
      description: "Low-cost lens after you understand use cases",
      status: "live" as const,
    },
    {
      label: "Types of bank accounts",
      href: TYPES_OF_BANK_ACCOUNTS_PATH,
      description: "Account labels before you sort banks",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "IBAN, iDEAL, SEPA and direct debits",
      status: "live" as const,
    },
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      description: "Everyday till culture after you shortlist banks",
      status: "live" as const,
    },
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Pinpas and PIN culture for Dutch shops",
      status: "live" as const,
    },
    {
      label: "Credit cards",
      href: CREDIT_CARDS_PATH,
      description: "When credit fits Dutch payment culture",
      status: "live" as const,
    },
    {
      label: "Wise vs Revolut",
      href: WISE_VS_REVOLUT_PATH,
      description: "App-layer / multi-currency decision beside a Dutch account",
      status: "live" as const,
    },
    {
      label: "Bank account rejected or delayed",
      href: BANKING_ACCOUNT_REJECTION_PATH,
      description: "Calm recovery if onboarding stalls",
      status: "live" as const,
    },
    {
      label: "Banking safety & fraud",
      href: BANKING_SECURITY_PATH,
      description: "Phishing and payment-request habits",
      status: "live" as const,
    },
    {
      label: "Bank comparison tool",
      href: BANK_COMPARISON_TOOL_PATH,
      description: "Interactive fit questionnaire",
      status: "live" as const,
    },
    {
      label: "Banking cost estimator",
      href: BANKING_COST_ESTIMATOR_PATH,
      description: "Monthly and yearly planning bands",
      status: "live" as const,
    },
  ] satisfies BestBanksLink[],
  hubCards: [
    {
      label: "Banking hub",
      href: BANKING_HUB_PATH,
      description: "All banking guides, glossary entry points and tools",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Live cluster peer — setup how-to",
      status: "live" as const,
    },
    {
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "Live cluster peer — cross-border sends",
      status: "live" as const,
    },
    {
      label: "Banking fees & costs",
      href: FEES_PATH,
      description: "Fee framework before you lock a package",
      status: "live" as const,
    },
    {
      label: "Traditional vs digital banks",
      href: TRADITIONAL_VS_DIGITAL_BANKS_PATH,
      description: "Full trad vs digital lens",
      status: "live" as const,
    },
    {
      label: "Cheapest bank accounts",
      href: CHEAPEST_BANK_ACCOUNTS_PATH,
      description: "Cost-first shortlist lens",
      status: "live" as const,
    },
  ] satisfies BestBanksLink[],
  exploreNext: [
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Documents and steps once you have a shortlist",
      status: "live" as const,
    },
    {
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "When money needs to leave the Netherlands",
      status: "live" as const,
    },
    {
      label: "Wise vs Revolut",
      href: WISE_VS_REVOLUT_PATH,
      description: "Compare two common app-layer options next",
      status: "live" as const,
    },
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Learn Dutch PIN culture after you pick a bank",
      status: "live" as const,
    },
    {
      label: "Bank comparison tool",
      href: BANK_COMPARISON_TOOL_PATH,
      description: "Interactive editorial fit questionnaire",
      status: "live" as const,
    },
    {
      label: "Banking cost estimator",
      href: BANKING_COST_ESTIMATOR_PATH,
      description: "Model monthly cost bands",
      status: "live" as const,
    },
    {
      label: "Types of bank accounts",
      href: TYPES_OF_BANK_ACCOUNTS_PATH,
      description: "Learn account labels first",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "Understand rails before judging iDEAL support",
      status: "live" as const,
    },
  ] satisfies BestBanksLink[],
  officialSources: [
    {
      label: "De Nederlandsche Bank (DNB)",
      href: "https://www.dnb.nl/en/",
      description: "Central bank and prudential supervision context",
    },
    {
      label: "AFM — Authority for the Financial Markets",
      href: "https://www.afm.nl/en/",
      description: "Conduct supervision orientation for financial firms",
    },
    {
      label: "iDEAL",
      href: "https://www.ideal.nl/en/",
      description: "Official iDEAL scheme overview — pair with How payments work",
    },
    {
      label: "European Payments Council — SEPA",
      href: "https://www.europeanpayments.eu/",
      description: "SEPA schemes context for euro transfers",
    },
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Official orientation for living and practical matters",
    },
  ],
  disclosure:
    "Some links may be affiliate links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes bank decisions, eligibility or live fees. Always verify on the provider’s official pages.",
} as const;

/** @deprecated Prefer `bestBanksExpatsPage` — kept for gradual import migration. */
export const bestBanksExpatsPageModel = bestBanksExpatsPage;

export type BestBanksExpatsPage = typeof bestBanksExpatsPage;
export type BestBanksExpatsPageModel = BestBanksExpatsPage;

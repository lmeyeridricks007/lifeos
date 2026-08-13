import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPaths";
import {
  CASH_VS_CARD_PATH,
  CREDIT_CARDS_PATH,
  DEBIT_CARDS_PATH,
  HPW_FEES_PATH,
  HPW_TRAD_DIG_PATH,
} from "@/src/components/money/cash-vs-card/cashVsCardPageModel";
import { HOW_PAYMENTS_WORK_PATH } from "@/src/components/money/how-payments-work/howPaymentsWorkPageModel";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { OPEN_BANK_ACCOUNT_NETHERLANDS_PATH } from "@/src/components/money/open-bank-account-netherlands/openBankAccountNetherlandsPageModel";
import {
  BANK_COMPARISON_TOOL_PATH,
  BANKING_COST_ESTIMATOR_PATH,
  TRANSFER_COST_CALCULATOR_PATH,
} from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { WISE_VS_REVOLUT_PATH } from "./wiseVsRevolutPaths";

export { WISE_VS_REVOLUT_PATH };

export type WiseVsRevolutLink = {
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
export type CompareRow = {
  dimension: string;
  wise: string;
  revolut: string;
  tip: string;
};
export type FitCard = { title: string; body: string; signals: readonly string[] };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "wise-vs-revolut-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const wiseVsRevolutPage = {
  slug: "wise-vs-revolut",
  path: WISE_VS_REVOLUT_PATH,
  hubPath: BANKING_HUB_PATH,
  publish: true,
  publishDate: "2026-08-16",
  seo: {
    title: "Wise vs Revolut for Expats in the Netherlands | Complete Guide",
    description:
      "Decision orientation for Wise vs Revolut in the Netherlands: multi-currency and app-banking roles, fees/FX framing, when each tends to fit, and how they sit beside a Dutch account — not a winner ranking.",
    keywords: [
      "Wise vs Revolut Netherlands",
      "Wise or Revolut expats",
      "multi-currency banking Netherlands",
      "Wise Revolut comparison Netherlands",
      "Wise Netherlands expats",
      "Revolut Netherlands expats",
      "app banking Netherlands",
      "multi-currency transfers Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Wise vs Revolut for Expats in the Netherlands",
    subtitle:
      "Calm decision orientation for multi-currency and app-layer banking: when Wise or Revolut tends to fit, how fees and FX are framed, and how both sit beside a Dutch everyday account — without crowning a winner.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "Compare fit signals", href: "#compare" },
    chips: ["Multi-currency", "App layer", "Fees & FX", "Dutch account", "Transfers"],
    disclaimer:
      "General orientation only — not financial advice. Products, plans, fees and FX rules change. Indicative framing is for 2026 orientation; verify live quotes, eligibility and features on each provider’s site before you decide.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic Amsterdam canal-side café desk: multicultural expat comparing two banking apps on a laptop and phone beside a Dutch debit card and passport, soft daylight through canal-house windows — Wise vs Revolut decision orientation in the Netherlands.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#roles", label: "What they are" },
    { href: "#dutch-layer", label: "Dutch vs app" },
    { href: "#wise-fit", label: "When Wise fits" },
    { href: "#revolut-fit", label: "When Revolut fits" },
    { href: "#fees-fx", label: "Fees & FX" },
    { href: "#compare", label: "Compare" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#providers", label: "Providers" },
    { href: "#tools", label: "Tools" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#banking-hub", label: "Banking hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Wise vs Revolut for Netherlands expats — four building blocks: define the job, keep a Dutch everyday layer, compare fees and FX calmly, and verify on provider sites — right-side Decision file rail lists salary path, rent path, FX routes and backup plan.",
      "Four habits cover most decisions: job clarity, Dutch everyday layer, calm fee/FX checks, and live verification."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Wise vs Revolut for expats — app-layer roles, transfer strength, multi-currency spend, Dutch account pairing, fee/FX framing, and scenario fit — Dutch canal skyline band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise the decision map; deeper sections expand each theme without crowning a winner."
    ),
    roles: visual(
      "roles",
      "Premium ecosystem diagram of multi-currency app banking — Wise and Revolut as app-layer tools beside Dutch banks, transfers, cards and employer payroll — consultation desk with device props, teal Product roles rail, ExpatLife brand area.",
      "Both are app-layer tools many expats pair with — not automatic replacements for — a Dutch everyday account."
    ),
    dutchLayer: visual(
      "dutch-layer",
      "Premium two-layer money map — Dutch everyday account for salary, rent and local direct debits on the left; Wise/Revolut app layer for multi-currency holds, FX and cross-border sends on the right — bridge arrows and a Verify with contracts rail.",
      "Think in layers: Dutch rails for local life, app tools for multi-currency and transfer jobs."
    ),
    wiseFit: visual(
      "wise-fit",
      "Premium record-file board for when Wise tends to fit — transparent transfer quotes, multi-currency balances, holding and converting before a send — desk scene with calculator and passport props, right-side Fit signals rail, ExpatLife brand footer.",
      "Wise often shows up when the job is clear quotes, multi-currency balances and calm cross-border sends."
    ),
    revolutFit: visual(
      "revolut-fit",
      "Premium lifestyle desk scene for when Revolut tends to fit — travel spend, budgeting controls, multi-currency cards and everyday app features — Amsterdam window light, plan-awareness checklist rail, ExpatLife compass brand area.",
      "Revolut often shows up when the job mixes travel spend, in-app controls and multi-currency card habits."
    ),
    feesFx: visual(
      "fees-fx",
      "Premium fees and FX framing board for 2026 orientation — send fee, exchange-rate gap, plan limits, weekend or fair-usage rules, and amount that arrives — calculator props, teal Verify live quote rail, ExpatLife brand footer.",
      "Total cost is a stack: fee + rate gap + plan rules + timing — never a single sticker price."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for Wise vs Revolut — new arrival bridge, salary in NL with family abroad, frequent travel spend, and freelancer multi-currency invoices — each with a first move and Dutch-layer reminder.",
      "Different money jobs need different tools — pair the app layer with a Dutch everyday path when local life needs it."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Wise vs Revolut decisions — crowning a winner from ads, skipping Dutch-account needs, ignoring plan limits, treating marketing FX as forever, and confusing this page with transfer deep-dives — Fix tips on a right-side rail.",
      "Common friction points and calmer fixes — orientation only, no awards or guaranteed savings."
    ),
    checklist: visual(
      "checklist",
      "Premium Wise vs Revolut decision checklist — job defined, Dutch everyday path checked, fee/FX quote compared same day, plan limits read, eligibility verified, International transfers bookmarked — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist before you open or upgrade an app — then verify live details with each provider."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Name the money job before you pick an app",
        "Keep a Dutch everyday layer for salary, rent and local bills when needed",
        "Compare fees and FX as a stack, not a slogan",
        "Verify live quotes and eligibility on provider sites",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Neither app is automatically “the best bank” for Dutch life",
        "Many expats use an app layer beside a Dutch account",
        "Transfer deep-dives live on International transfers",
        "Traditional vs digital trade-offs live on that sibling guide",
      ],
    },
    roles: {
      title: "Product-role habits",
      items: [
        "Treat Wise and Revolut as tools with jobs, not trophies",
        "Check what your employer, landlord and insurers actually accept",
        "Read plan limits before you assume free FX forever",
        "Keep a backup path if an app decline would hurt rent day",
      ],
    },
    dutchLayer: {
      title: "Layer planning tips",
      items: [
        "Map salary, rent and direct debits to a Dutch-friendly path first",
        "Use app balances for multi-currency and transfer jobs when they fit",
        "Do not assume iDEAL, DigiD-linked banking or every SEPA debit works the same",
        "Open a bank account if you still need the Dutch everyday layer",
      ],
    },
    wiseFit: {
      title: "Wise fit signals",
      items: [
        "You care about clear transfer quotes before you send",
        "You hold and convert currencies with a send in mind",
        "You want multi-currency balances without crowning an everyday bank",
        "You will verify the calculator for your exact corridor",
      ],
    },
    revolutFit: {
      title: "Revolut fit signals",
      items: [
        "You want travel and everyday spend controls in one app",
        "You like budgeting, cards and multi-currency features together",
        "You will read plan tiers and fair-usage rules carefully",
        "You still check Dutch salary/rent acceptance separately",
      ],
    },
    feesFx: {
      title: "Fee and FX habits",
      items: [
        "Compare the same amount, corridor and speed on the same day",
        "Include plan limits, weekend rules and receiver fees",
        "Treat marketing mid-market claims as a starting point only",
        "Use the transfer cost calculator for orientation, then verify live",
      ],
    },
    scenarios: {
      title: "Scenario planning tips",
      items: [
        "New arrivals: bridge FX needs while Dutch onboarding finishes",
        "Family remittances: quote two trusted paths, then send calmly",
        "Travel months: check card and ATM rules before the trip",
        "Freelancers: separate invoice currency from Dutch tax/bill rails",
      ],
    },
    mistakes: {
      title: "Mistake prevention",
      items: [
        "Do not pick a winner from affiliate ads or social rankings",
        "Do not skip checking rent and salary acceptance",
        "Do not ignore plan caps on “free” FX",
        "Do not confuse this decision page with International transfers depth",
      ],
    },
    checklist: {
      title: "Ready-to-decide signals",
      items: [
        "Primary money job written in one sentence",
        "Dutch everyday path confirmed or booked",
        "Same-day quotes compared for your corridor",
        "Plan limits and eligibility checked on provider sites",
      ],
    },
  },
  introParagraphs: [
    "Expats in the Netherlands often shortlist Wise and Revolut for multi-currency balances, travel spend and cross-border sends — then wonder which one should “win”.",
    "This page is decision orientation: when each tool tends to fit, how to frame fees and FX without fake awards, and how both sit beside a Dutch everyday account. Full transfer mechanics live on International transfers; traditional-vs-digital trade-offs and debit/credit culture live on their sibling guides.",
  ],
  introHighlights: [
    "Orientation for newcomers, travellers and residents who already have (or need) a Dutch money path",
    "Clear boundary: app-layer decision here — transfer deep-dive, bank shortlists and card culture live elsewhere",
    "Links into Banking hub, Open a bank account, International transfers, Best banks and cluster siblings",
  ],
  orientationFlowSteps: [
    "Name the job (transfer, travel spend, multi-currency hold)",
    "Keep a Dutch everyday layer for local life when needed",
    "Compare fee + FX + plan limits on the same day",
    "Verify eligibility and live quotes on provider sites",
  ],
  safetyFileChecklist: [
    "One-sentence money job (what must work in the next 90 days)",
    "Dutch-friendly path for salary, rent and local direct debits if required",
    "Same-day transfer or FX quote for your real corridor and amount",
    "Plan tier notes: limits, weekend rules, ATM caps, fair usage",
    "ID / residency / address documents ready for onboarding checks",
    "Bookmark: International transfers, Open a bank account, Banking hub",
  ],
  introScenarios: [
    {
      situation: "Sending support to family abroad",
      approach: "Compare clear quotes; keep Dutch salary on a local everyday path",
      firstStep: "Open International transfers, then return here for Wise vs Revolut fit",
    },
    {
      situation: "Frequent travel with leftover currencies",
      approach: "App-layer multi-currency spend can help; still check plan limits",
      firstStep: "List trip currencies and ATM needs before you upgrade a plan",
    },
    {
      situation: "First months after landing",
      approach: "Bridge FX and travel while Dutch account onboarding finishes",
      firstStep: "See Open a bank account in parallel — do not skip local rails",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: Wise or Revolut in the Netherlands?",
    summary:
      "There is no universal winner. Wise often fits when the job is transparent multi-currency balances and cross-border transfer quotes. Revolut often fits when the job mixes travel spend, budgeting controls and multi-currency cards in one app. Many expats keep a Dutch everyday account for salary, rent and local bills, then add an app layer for FX and sends — verify live fees, plans and acceptance before you decide.",
    bullets: [
      "Decision frame: pick the tool for the job — not a crown for “best bank”",
      "Dutch everyday layer still matters for many landlords, employers and direct debits",
      "Fees and FX are a stack (fee + rate gap + plan rules + timing) — indicative 2026 framing only",
      "Deep transfer mechanics → International transfers; bank shortlists → Best banks for expats",
    ],
    note: "This page does not rank products or promise savings. Affiliate links may appear later on the page; editorial order follows fit, not pay-to-rank.",
  },
  snapshotSignals: [
    {
      label: "Decision type",
      value: "Fit, not trophy",
      note: "Match the money job — no winner crown",
    },
    {
      label: "Wise tends to",
      value: "Quotes & multi-currency",
      note: "Strong when transfers and balances are the job",
    },
    {
      label: "Revolut tends to",
      value: "App spend & controls",
      note: "Strong when travel and in-app features matter",
    },
    {
      label: "Dutch layer",
      value: "Often still needed",
      note: "Salary, rent and local bills may require it",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "What this page covers",
      body: "Wise vs Revolut as an expat decision: roles, fit signals, fees/FX framing and Dutch-account pairing.",
    },
    {
      title: "App-layer roles",
      body: "Both can sit beside Dutch banking — they are tools with jobs, not automatic full replacements.",
    },
    {
      title: "When Wise fits",
      body: "Clear transfer quotes, multi-currency holds and converting before a send.",
    },
    {
      title: "When Revolut fits",
      body: "Travel spend, budgeting controls and multi-currency card habits in one app.",
    },
    {
      title: "What belongs elsewhere",
      body: "Transfer depth → International transfers. Traditional vs digital → that guide. Debit/credit culture → siblings.",
    },
    {
      title: "Setup next step",
      body: "Need Dutch rails first? Open a bank account — then return for app-layer fit.",
    },
  ] satisfies TipCard[],
  roles: {
    heading: "What Wise and Revolut are in an expat stack",
    lead:
      "For many residents, these products act as an app layer: multi-currency balances, cards, FX and transfers. They are not the same as “pick one Dutch high-street bank and stop”. Eligibility, plan tiers and which local payment rails work can differ — always confirm on the provider site and with the counterparty who must receive your money (employer, landlord, insurer).",
    bullets: [
      "App-layer tools for multi-currency, FX and sends — not a guaranteed full Dutch banking replacement",
      "Features and legal entity details vary by residency and plan — read the current product pages",
      "Dutch everyday rails (salary, rent, many direct debits) often still need a Dutch-friendly account path",
      "This page orients the decision; it does not score or crown either brand",
    ],
    cards: [
      {
        title: "Wise in one line",
        body: "Often approached for transparent transfer quotes and multi-currency balances aimed at moving and holding money across currencies.",
      },
      {
        title: "Revolut in one line",
        body: "Often approached for app-first spending, travel features, budgeting controls and multi-currency card use under plan rules.",
      },
      {
        title: "Shared expat pattern",
        body: "Use a Dutch everyday account for local life, then add an app for FX/transfers — or bridge briefly while onboarding finishes.",
      },
      {
        title: "Not on this page",
        body: "Full corridor mechanics, SWIFT vs SEPA depth, and provider-type tables — see International transfers.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "International transfers",
        href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
        description: "Fees, FX gaps, timing and provider types for sends from NL",
        status: "live" as const,
      },
      {
        label: "Traditional vs digital banks",
        href: HPW_TRAD_DIG_PATH,
        description: "Branch depth versus app-speed trade-offs",
        status: "live" as const,
      },
      {
        label: "Best banks for expats",
        href: BEST_BANKS_EXPATS_PATH,
        description: "Wider shortlist beyond this two-app decision",
        status: "live" as const,
      },
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Dutch everyday onboarding path",
        status: "live" as const,
      },
    ] satisfies WiseVsRevolutLink[],
  },
  dutchLayer: {
    heading: "Dutch account vs app layer",
    lead:
      "A useful mental model is two layers. The Dutch everyday layer handles salary deposits, rent, many SEPA direct debits and local habits. The app layer handles multi-currency holds, travel spend and cross-border sends. Some people eventually consolidate; many keep both. Do not assume every landlord, payroll team or insurer will accept an app IBAN the same way — verify contracts.",
    bullets: [
      "Map salary, rent and critical direct debits first — then decide what the app must do",
      "iDEAL and some DigiD-linked banking flows may still assume a Dutch everyday bank relationship",
      "App cards can work widely for spend, yet FX and ATM rules still sit inside plan limits",
      "If you lack a Dutch path, start Open a bank account in parallel with any app signup",
    ],
    cards: [
      {
        title: "Everyday Dutch layer",
        body: "Salary, rent, utilities, insurance premiums and local PIN culture — often simpler on a Dutch-friendly account.",
      },
      {
        title: "App / multi-currency layer",
        body: "Holding currencies, converting with a purpose, travel spend and remittances — where Wise or Revolut often enter.",
      },
      {
        title: "Bridge period",
        body: "New arrivals may use an app while BSN/address onboarding finishes — still finish the Dutch path if local life needs it.",
      },
      {
        title: "Acceptance reality",
        body: "Counterparty rules beat marketing. Ask HR and landlords what IBAN or method they need in writing.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Requirements, steps and delay orientation",
        status: "live" as const,
      },
      {
        label: "How payments work",
        href: HOW_PAYMENTS_WORK_PATH,
        description: "iDEAL, SEPA and online rails context",
        status: "live" as const,
      },
      {
        label: "Debit cards",
        href: DEBIT_CARDS_PATH,
        description: "Dutch debit / PIN culture",
        status: "live" as const,
      },
      {
        label: "Cash vs card",
        href: CASH_VS_CARD_PATH,
        description: "Till culture and cash pockets",
        status: "live" as const,
      },
    ] satisfies WiseVsRevolutLink[],
  },
  wiseFit: {
    heading: "When Wise tends to fit",
    lead:
      "Wise often enters the shortlist when the primary job is moving money across borders with a clear quote, or holding multiple currencies with conversion as a deliberate step. It is not automatically the best everyday Dutch bank — and this page does not claim that. Confirm current account details, card availability and eligibility for your residency on Wise’s site.",
    fit: {
      title: "Fit signals",
      body: "You care more about transparent send quotes and multi-currency balances than about a full lifestyle banking app.",
      signals: [
        "You regularly compare fee + rate before confirming a send",
        "You hold currencies with a conversion purpose (rent abroad, invoices, family support)",
        "You are fine pairing Wise with a separate Dutch everyday account",
        "You will use the official calculator for your corridor and amount",
      ],
    } satisfies FitCard,
    cards: [
      {
        title: "Transfer-led months",
        body: "Family support, tuition or savings moving abroad — quote clarity usually matters more than in-app lifestyle extras.",
      },
      {
        title: "Multi-currency balances",
        body: "Holding and converting with intent can reduce panic FX — still verify live mid-market gaps and fees.",
      },
      {
        title: "Alongside Dutch banking",
        body: "A common pattern: Dutch account for local life, Wise for cross-border jobs — not a forced either/or.",
      },
      {
        title: "Verify before you rely",
        body: "Product names, card features and receiving details change — check Wise’s current Netherlands-facing pages.",
      },
    ] satisfies TipCard[],
  },
  revolutFit: {
    heading: "When Revolut tends to fit",
    lead:
      "Revolut often enters the shortlist when the primary job mixes travel spend, budgeting controls, cards and multi-currency features inside one app. Plan tiers and fair-usage rules matter — “free FX” is rarely unlimited forever. Confirm salary, rent and direct-debit fit for your contracts separately; this page does not crown Revolut as a full Dutch replacement.",
    fit: {
      title: "Fit signals",
      body: "You want app-first spending and controls, and you will read plan limits before you treat FX as free.",
      signals: [
        "Travel months with card spend across currencies are a real part of your year",
        "You like budgeting, vaults/pots or similar in-app controls",
        "You will check ATM and fair-usage caps on your plan",
        "You still verify Dutch salary/rent acceptance if you hope to use it as everyday banking",
      ],
    } satisfies FitCard,
    cards: [
      {
        title: "Travel and everyday spend",
        body: "Card and app controls can simplify trips — still read FX weekend rules and ATM fees for your plan.",
      },
      {
        title: "Plan awareness",
        body: "Higher tiers may change limits; free-looking marketing still has boundaries — verify 2026 plan pages.",
      },
      {
        title: "Not automatic payroll/rent",
        body: "Some expats use Revolut successfully for parts of life; others keep Dutch rails for salary and rent — ask counterparties.",
      },
      {
        title: "Verify before you rely",
        body: "Features differ by country and plan. Confirm Revolut’s current eligibility and product scope for residents in the Netherlands.",
      },
    ] satisfies TipCard[],
  },
  feesFx: {
    heading: "Fees and FX framing (indicative 2026)",
    lead:
      "Total cost is rarely one line item. For sends and conversions, think in a stack: explicit fee + exchange-rate gap versus a mid-market reference + plan limits or weekend rules + timing + any receiver fees. Figures and “free FX” headlines change — treat everything here as 2026 orientation and verify the same-day quote on the provider site (and your bank, if comparing).",
    bullets: [
      "Compare the same amount, corridor, speed and date — screenshots from last month mislead",
      "Plan tiers can change ATM, FX and transfer allowances — read the current plan table",
      "Marketing mid-market language is a starting point, not a guarantee of the cheapest outcome",
      "For full send mechanics and provider types, use International transfers after this decision frame",
    ],
    cards: [
      {
        title: "Send fee",
        body: "The visible fee on a quote — necessary, but incomplete without the rate you actually get.",
      },
      {
        title: "Exchange-rate gap",
        body: "Difference versus a mid-market reference can dwarf a small fee on larger amounts — check both.",
      },
      {
        title: "Plan / fair-usage rules",
        body: "Monthly FX allowances, weekend pricing and ATM caps often decide the real bill for travellers.",
      },
      {
        title: "Timing and receivers",
        body: "Faster options and intermediary or receiver fees can change what arrives — confirm before you send.",
      },
    ] satisfies TipCard[],
    compareRows: [
      {
        dimension: "Primary cost habit",
        wise: "Usually quote-led: fee + rate shown before send",
        revolut: "Often plan-led: allowances and tier rules shape FX/ATM costs",
        tip: "Match the habit to your job — then verify live",
      },
      {
        dimension: "FX framing",
        wise: "Conversion and transfer quotes are central to the product story",
        revolut: "FX can look “included” until you hit plan or weekend boundaries",
        tip: "Never assume unlimited free FX",
      },
      {
        dimension: "Indicative year",
        wise: "2026 orientation — verify calculator today",
        revolut: "2026 orientation — verify plan table today",
        tip: "Same-day comparison beats memory",
      },
      {
        dimension: "Deep dive",
        wise: "Pair with International transfers for corridor mechanics",
        revolut: "Pair with International transfers for corridor mechanics",
        tip: "This page stays at decision framing",
      },
    ] satisfies CompareRow[],
    crossLinks: [
      {
        label: "International transfers",
        href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
        description: "Full cost stack and provider-type orientation",
        status: "live" as const,
      },
      {
        label: "Transfer cost calculator",
        href: TRANSFER_COST_CALCULATOR_PATH,
        description: "Interactive orientation — not a live provider quote",
        status: "live" as const,
      },
      {
        label: "Banking fees & costs",
        href: HPW_FEES_PATH,
        description: "Broader Dutch banking fee categories",
        status: "live" as const,
      },
    ] satisfies WiseVsRevolutLink[],
  },
  compare: {
    heading: "Side-by-side decision dimensions",
    lead:
      "Use this table as a calm checklist of dimensions — not a scoreboard. Cells describe typical editorial patterns for 2026 orientation. Products change; verify on Wise and Revolut before you apply or fund an account.",
    rows: [
      {
        dimension: "Core job fit",
        wise: "Transfers & multi-currency balances with clear quotes",
        revolut: "App spend, travel features & in-app controls",
        tip: "Write your #1 job in one sentence first",
      },
      {
        dimension: "Dutch everyday pairing",
        wise: "Commonly paired with a Dutch account for salary/rent",
        revolut: "Also often paired — do not assume full local replacement",
        tip: "Ask HR and landlords what they accept",
      },
      {
        dimension: "Fees / FX habit",
        wise: "Quote-first comparison culture",
        revolut: "Plan-limit and fair-usage awareness",
        tip: "Compare same corridor same day",
      },
      {
        dimension: "Travel months",
        wise: "Strong when converting and spending with intent",
        revolut: "Strong when card + app controls are the daily habit",
        tip: "Check ATM and weekend rules either way",
      },
      {
        dimension: "Remittances",
        wise: "Often shortlisted for transparent send quotes",
        revolut: "May work depending on corridor, plan and speed needs",
        tip: "See International transfers for depth",
      },
      {
        dimension: "What not to do",
        wise: "Do not crown Wise from affiliate ads",
        revolut: "Do not crown Revolut from social rankings",
        tip: "No awards on this page — verify live",
      },
    ] satisfies CompareRow[],
  },
  scenarios: {
    heading: "Scenarios: picking a calm first move",
    lead:
      "Different months create different jobs. Use these rows as starting patterns, then verify acceptance, fees and eligibility for your situation.",
    rows: [
      {
        situation: "New arrival, Dutch account not ready",
        approach: "Bridge FX/travel with an app while finishing Dutch onboarding",
        firstStep: "Start Open a bank account in parallel; do not skip local rails",
      },
      {
        situation: "NL salary, family support abroad",
        approach: "Keep salary on Dutch everyday path; compare send quotes for remittances",
        firstStep: "Run the same-day corridor quote on provider sites + International transfers",
      },
      {
        situation: "Heavy travel quarter",
        approach: "Prioritise card/ATM/plan rules; multi-currency controls may favour Revolut-style fit",
        firstStep: "Read your candidate plan’s FX and ATM table before the trip",
      },
      {
        situation: "Freelancer paid in multiple currencies",
        approach: "Separate invoice currency handling from Dutch tax and bill rails",
        firstStep: "Map which balances sit where; confirm invoicing and tax admin needs",
      },
      {
        situation: "Already have bunq / neo-bank + wondering about Wise/Revolut",
        approach: "Avoid stacking five apps — keep tools you actually use monthly",
        firstStep: "See Traditional vs digital and Best banks, then drop unused layers",
      },
      {
        situation: "Only need occasional EUR→home currency sends",
        approach: "Quote-led tools often matter more than lifestyle app features",
        firstStep: "Compare Wise (and your Dutch bank) quotes; skim Revolut only if you also want spend features",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: {
    heading: "Common mistakes",
    lead: "These patterns create avoidable friction. Fixes stay practical — still not personalised financial advice.",
    cards: [
      {
        title: "Crowning a winner from ads",
        body: "Affiliate creatives and social “#1 for expats” lists skip your landlord, payroll and corridor reality.",
        advice: "Write the money job first; verify acceptance and same-day quotes second.",
      },
      {
        title: "Skipping the Dutch everyday layer",
        body: "Assuming an app IBAN will take salary, rent and every direct debit without checking.",
        advice: "Ask counterparties in writing; keep Open a bank account in your plan if needed.",
      },
      {
        title: "Ignoring plan limits",
        body: "Treating “free FX” or ATM marketing as unlimited.",
        advice: "Read the current plan table for allowances, weekend rules and fair usage.",
      },
      {
        title: "Stale FX screenshots",
        body: "Deciding from a friend’s quote from another month or corridor.",
        advice: "Re-run the calculator for your amount, currency pair and speed today.",
      },
      {
        title: "Confusing this page with transfer depth",
        body: "Expecting SWIFT/SEPA mechanics and full provider-type tables here.",
        advice: "Use International transfers for the deep dive after you frame the decision.",
      },
      {
        title: "Stacking too many apps",
        body: "Opening Wise, Revolut and three neo-banks “just in case”.",
        advice: "Keep tools you use monthly; close or pause the rest after a 90-day review.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Decision checklist",
    lead: "Work top to bottom before you fund a new app heavily. Tick what you can prove — not what marketing hopes.",
    groups: [
      {
        title: "Job and layers",
        items: [
          "Primary money job written in one sentence",
          "Dutch everyday path for salary/rent/direct debits confirmed or scheduled",
          "App-layer job defined (transfer, travel spend, multi-currency hold)",
        ],
      },
      {
        title: "Fees, FX and plans",
        items: [
          "Same-day quote compared for your corridor and amount",
          "Plan limits / fair usage / weekend rules read on the provider site",
          "ATM and card FX notes checked if you travel",
        ],
      },
      {
        title: "Eligibility and safety",
        items: [
          "Residency and ID requirements checked for your situation",
          "Only install apps from official stores / official sites",
          "Phishing awareness — Banking safety & fraud bookmarked",
        ],
      },
    ],
  },
  howTo: {
    heading: "How to choose calmly (orientation)",
    lead: "A short sequence you can finish in one focused evening — then verify live before you move large balances.",
    steps: [
      {
        name: "Write the job",
        text: "One sentence: what must work in the next 90 days (example: “Send €800 home monthly” or “Travel spend in three currencies”).",
      },
      {
        name: "Map the Dutch layer",
        text: "List salary, rent and critical direct debits. Confirm which need a Dutch-friendly account path.",
      },
      {
        name: "Shortlist by fit signals",
        text: "If the job is quote-led transfers/balances, study Wise fit. If the job is travel/app controls, study Revolut fit. You can still keep both layers separate.",
      },
      {
        name: "Compare the cost stack same day",
        text: "Fee + rate gap + plan rules + timing for your real amount. Use provider calculators and the transfer cost calculator for orientation.",
      },
      {
        name: "Verify and start small",
        text: "Check eligibility, then test with a small send or spend before payday-sized amounts. Re-read plan limits after any upgrade.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to choose between Wise and Revolut as an expat in the Netherlands",
    description:
      "Orientation steps to decide between Wise and Revolut for multi-currency and app-layer banking beside a Dutch everyday account — not financial advice.",
    anchor: "#howto",
  },
  providers: {
    heading: "Provider discovery (affiliates)",
    lead:
      "These cards are a discovery starting point ordered by editorial relevance to this decision page — not a paid ranking and not a winner podium. We may earn a commission if you sign up through affiliate links. Always verify live fees, plans and eligibility on the provider site.",
    disclaimer:
      "Affiliate disclosure: some links are sponsored. Editorial order follows fit for this guide, not pay-to-rank. No awards, guarantees or personalised recommendations.",
    order: ["wise", "revolut"] as const,
    notes: [
      {
        id: "wise",
        editorialAngle: "Often first when the job is transparent transfer quotes and multi-currency balances.",
      },
      {
        id: "revolut",
        editorialAngle: "Often next when the job mixes travel spend, cards and in-app controls under plan rules.",
      },
    ],
  },
  tools: {
    heading: "Tools that help you compare calmly",
    lead: "Interactive tools for orientation — they do not replace live provider quotes or bank advice.",
    items: [
      {
        label: "Transfer cost calculator",
        href: TRANSFER_COST_CALCULATOR_PATH,
        description: "Model fee and FX framing for sends",
        status: "live" as const,
      },
      {
        label: "Bank comparison tool",
        href: BANK_COMPARISON_TOOL_PATH,
        description: "Broader Dutch banking fit questionnaire",
        status: "live" as const,
      },
      {
        label: "Banking cost estimator",
        href: BANKING_COST_ESTIMATOR_PATH,
        description: "Monthly cost bands for account habits",
        status: "live" as const,
      },
    ] satisfies WiseVsRevolutLink[],
  },
  faq: [
    {
      q: "Is Wise or Revolut better for expats in the Netherlands?",
      a: "Neither is universally better. Wise often fits quote-led transfers and multi-currency balances; Revolut often fits travel spend and in-app controls. Many expats keep a Dutch everyday account alongside an app. Verify live fees, plans and acceptance for your situation — this page does not crown a winner.",
    },
    {
      q: "Can I use only Wise or only Revolut without a Dutch bank account?",
      a: "Some people bridge with an app, especially early on, but salary, rent and many local direct debits may still expect a Dutch-friendly account path. Ask your employer and landlord what they accept, and see Open a bank account if you need that layer.",
    },
    {
      q: "Which is cheaper for sending money abroad?",
      a: "It depends on amount, currency pair, speed and plan rules. Compare same-day official quotes and include exchange-rate gaps — not just headline fees. Use International transfers for deeper cost-stack orientation.",
    },
    {
      q: "Do Wise and Revolut replace Dutch debit culture?",
      a: "Not automatically. Dutch shops are often PIN/debit-led; app cards can work widely, but local habits and acceptance still vary. See Debit cards and Cash vs card for till culture.",
    },
    {
      q: "Should I open both?",
      a: "Only if you have clear jobs for each and will actually use them. Stacking unused apps adds admin and phishing surface. Review after 90 days and keep what you use monthly.",
    },
    {
      q: "Are the fee examples on this page live prices?",
      a: "No. Any fee/FX framing is indicative orientation for 2026. Products change — verify on Wise and Revolut (and your bank) before you send or upgrade a plan.",
    },
    {
      q: "Where do traditional vs digital banks and FX abroad fit?",
      a: "Traditional vs digital is a separate sibling for branch-versus-app trade-offs. FX abroad remains a roadmap topic and is not upgraded by this page. Use those destinations when they match your question.",
    },
    {
      q: "Are the provider links affiliates?",
      a: "Some may be. We disclose affiliates on the page. Editorial order follows relevance to this decision guide, not pay-to-rank. Using a link never changes provider eligibility decisions.",
    },
  ],
  relatedGuides: [
    {
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "Deep dive on sends, cost stacks and provider types from NL",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Wider shortlist beyond this two-app decision",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Dutch everyday onboarding",
      status: "live" as const,
    },
    {
      label: "Traditional vs digital banks",
      href: HPW_TRAD_DIG_PATH,
      description: "Branch depth versus app-speed trade-offs",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "iDEAL, SEPA and online rails",
      status: "live" as const,
    },
    {
      label: "Banking fees & costs",
      href: HPW_FEES_PATH,
      description: "Fee categories without live tariff promises",
      status: "live" as const,
    },
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      description: "Till culture and cash pockets",
      status: "live" as const,
    },
    {
      label: "Debit cards",
      href: DEBIT_CARDS_PATH,
      description: "Dutch debit / PIN culture",
      status: "live" as const,
    },
    {
      label: "Credit cards",
      href: CREDIT_CARDS_PATH,
      description: "When credit helps in NL payment culture",
      status: "live" as const,
    },
    {
      label: "Banking safety & fraud",
      href: "/netherlands/money/banking/security/",
      description: "Phishing and card/transfer safety habits",
      status: "live" as const,
    },
  ] satisfies WiseVsRevolutLink[],
  hubCards: [
    {
      label: "Banking hub",
      href: BANKING_HUB_PATH,
      description: "All banking guides, glossary entry points and tools",
      status: "live" as const,
    },
    {
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "Next deep dive after this decision frame",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Dutch everyday layer setup",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Compare a wider provider set",
      status: "live" as const,
    },
    {
      label: "Traditional vs digital banks",
      href: HPW_TRAD_DIG_PATH,
      description: "App-speed versus branch-depth trade-offs",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "Rails context for local life",
      status: "live" as const,
    },
  ] satisfies WiseVsRevolutLink[],
  exploreNext: [
    {
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "When money needs to leave the Netherlands",
      status: "live" as const,
    },
    {
      label: "Transfer cost calculator",
      href: TRANSFER_COST_CALCULATOR_PATH,
      description: "Orient fee and FX framing",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Set up the Dutch everyday layer",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Widen the shortlist",
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
      description: "Model monthly cost bands",
      status: "live" as const,
    },
  ] satisfies WiseVsRevolutLink[],
  officialSources: [
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Official orientation for living and practical matters in the Netherlands",
    },
    {
      label: "De Nederlandsche Bank — Payments",
      href: "https://www.dnb.nl/en/payments/",
      description: "Central bank orientation on the Dutch payments landscape",
    },
    {
      label: "AFM (Netherlands Authority for the Financial Markets)",
      href: "https://www.afm.nl/en",
      description: "Financial markets conduct authority — consumer awareness context",
    },
    {
      label: "Wise — official site",
      href: "https://wise.com/",
      description: "Verify live fees, calculators, eligibility and product details",
    },
    {
      label: "Revolut — official site",
      href: "https://www.revolut.com/",
      description: "Verify live plans, limits, eligibility and product details",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Consumer association guidance — verify current banking/payment articles",
    },
  ],
  disclosure:
    "Some links on this page may be affiliate links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes provider eligibility, fees or acceptance decisions. Editorial order follows relevance — not pay-to-rank.",
} as const;

export type WiseVsRevolutPageModel = typeof wiseVsRevolutPage;

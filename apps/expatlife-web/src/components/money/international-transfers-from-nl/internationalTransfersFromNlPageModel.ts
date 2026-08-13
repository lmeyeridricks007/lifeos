import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPaths";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import { HOW_PAYMENTS_WORK_PATH } from "@/src/components/money/how-payments-work/howPaymentsWorkPageModel";
import { OPEN_BANK_ACCOUNT_NETHERLANDS_PATH } from "@/src/components/money/open-bank-account-netherlands/openBankAccountNetherlandsPageModel";
import {
  BANK_COMPARISON_TOOL_PATH,
  BANKING_COST_ESTIMATOR_PATH,
  TRANSFER_COST_CALCULATOR_PATH,
} from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";
import { BANKING_SECURITY_PATH } from "@/src/data/banking/bankingSafety";
import { BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH } from "@/src/data/banking/bankingTraditionalDigitalContent";
import { bankingTransferScenarios } from "@/src/data/banking/bankingTransferScenarios";
import { internationalTransferProviderComparisonRows } from "@/src/data/banking/internationalTransferComparisonRows";
import {
  transferCostEducationalEquation,
  transferCostEducationalItems,
} from "@/src/data/banking/transferCostBreakdownEducational";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "./internationalTransfersFromNlPaths";

export { INTERNATIONAL_TRANSFERS_FROM_NL_PATH };

export const TYPES_OF_ACCOUNTS_PATH = "/netherlands/money/banking/types-of-accounts/" as const;

export type InternationalTransfersLink = {
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

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "international-transfers-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const internationalTransfersFromNlPage = {
  slug: "international-transfers",
  path: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
  hubPath: BANKING_HUB_PATH,
  publish: true,
  publishDate: "2026-08-14",
  seo: {
    title: "International Transfers from the Netherlands | Complete Guide for Expats",
    description:
      "Send money abroad from a Dutch account: fees, exchange-rate gaps, timing, and what to compare before you confirm — orientation only, verify every quote with providers.",
    keywords: [
      "international transfer Netherlands",
      "send money abroad Netherlands",
      "cheapest transfer Netherlands",
      "Wise vs bank Netherlands",
      "exchange rate markup Netherlands",
      "SEPA international transfer",
      "transfer fees Netherlands expats",
      "send money home from Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "International Transfers from the Netherlands",
    subtitle:
      "Sending money abroad from a Dutch account: how fees, exchange rates and timing stack, which provider types to compare, and what to check before you confirm — without live price promises.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "What shapes the full cost", href: "#full-cost" },
    chips: ["Fees & FX", "Timing", "Bank vs app", "Specialists", "Compare quotes"],
    disclaimer:
      "General orientation only — not financial, tax or investment advice. Fees and exchange rates change. Always confirm the amount the recipient receives on each provider’s official calculator before you send.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic Dutch home-office desk: multicultural expat comparing transfer quotes on a laptop beside a passport, euro notes and a small globe, soft canal-house daylight — sending money abroad from the Netherlands.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#why-overpay", label: "Why people overpay" },
    { href: "#options", label: "Transfer options" },
    { href: "#provider-types", label: "Bank vs app" },
    { href: "#full-cost", label: "Full cost" },
    { href: "#tradeoffs", label: "Cheap / fast / easy" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#howto", label: "How to compare" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#recommended", label: "Providers" },
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
      "Premium orientation board titled International Transfers from the Netherlands — four building blocks: compare amount received, check the exchange-rate gap, leave timing buffer, and verify on official calculators — right-side Transfer file rail lists quote saved, recipient details checked, route noted and backup plan.",
      "Four habits cover most send-abroad questions: received amount, FX gap, timing, and same-day provider checks."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of sending money abroad from the Netherlands — received amount wins, FX often dominates, three provider types, timing buffers, scenario planning, and verify-with-provider framing — Dutch canal skyline band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise transfer orientation; deeper sections expand each theme without live rankings."
    ),
    overpay: visual(
      "overpay",
      "Premium desk comparison scene showing two same-day quotes for the same euro send — one with a low fee but weaker rate, one with a clearer total received — right-side Reality check rail with General information only note, canal window light, ExpatLife brand area.",
      "A low fee can still mean less arrives if the exchange rate is weaker — compare amount received."
    ),
    options: visual(
      "options",
      "Premium provider-map board for Netherlands international sends — high-street bank, banking app, and send-money specialist columns with typical strengths and watch-outs — checklist rail Verify on official sites, ExpatLife compass brand footer with Live. Love. Stay.",
      "Three common provider types people compare — names and prices live on each official site."
    ),
    types: visual(
      "types",
      "Premium three-path diagram — branch bank for salary and rent, phone banking app for flexible FX, send-money company for clear calculators — Dutch city skyline band and a Compare same day rail.",
      "High-street banks, apps and specialists fit different jobs — skim patterns, then check your exact account."
    ),
    cost: visual(
      "cost",
      "Premium cost equation board — send fee + exchange-rate gap + receiver fees + timing + banks in the middle equals amount that arrives — desk with calculator props, teal Verify with providers rail, ExpatLife brand footer.",
      "Think in parts: every line can change how much arrives — the live calculator is what counts."
    ),
    tradeoffs: visual(
      "tradeoffs",
      "Premium trade-off triangle board — cheapest, fastest and easiest corners with a hybrid value centre — scenario chips for rent abroad, family support and one large send — canal backdrop and ExpatLife brand area.",
      "Cheapest, fastest and easiest rarely win together — pick the goal that matches your deadline."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for international transfers — monthly remittance, one large savings move, freelancer paid abroad, and rent in another country — each with a first compare step and timing watch-out.",
      "Different life stories need different quote habits — not one universal cheapest provider."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands international transfers — trusting fee headlines, skipping same-day compares, rushing large first sends, confusing this page with bank awards or account opening — Fix tips on a right-side rail.",
      "Common friction points and calmer fixes — orientation only, no live price guarantees."
    ),
    checklist: visual(
      "checklist",
      "Premium transfer readiness checklist board — same-day quotes saved, amount received compared, recipient IBAN checked, timing buffer noted, Open bank account and Best banks bookmarked when needed — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist before a rent-sized or first-time send — then verify on each provider’s site."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Compare how much money arrives — not only the fee line",
        "Spot exchange-rate gaps that quietly raise the real cost",
        "Know when a bank, app or specialist often fits",
        "Leave timing buffer and verify every quote on official tools",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Received amount is the decision number",
        "FX gaps often matter more than headline fees",
        "Three provider types cover most expat sends",
        "Bank shortlists and account setup live on sibling pages",
      ],
    },
    overpay: {
      title: "Overpay prevention",
      items: [
        "Ignore “€0 fee” stickers until you see amount received",
        "Run two calculators the same day for the same route",
        "Save screenshots or PDFs before large confirms",
        "Convenience of one bank login can still be expensive on FX",
      ],
    },
    options: {
      title: "Options shortlist habits",
      items: [
        "Treat cards as research patterns — not a live ranking",
        "Open each official calculator for your amount and country",
        "Partner links may appear — disclosure stays visible",
        "Keep everyday Dutch bills on the account you already trust",
      ],
    },
    types: {
      title: "Provider-type habits",
      items: [
        "High-street banks: strong for local life, check FX carefully",
        "Banking apps: plan limits and weekend rates matter",
        "Send-money specialists: built for clear abroad calculators",
        "Many people use a hybrid: Dutch bank + one transfer path",
      ],
    },
    cost: {
      title: "Full-cost habits",
      items: [
        "Add send fee, FX gap, receiver fees, timing and middle banks",
        "Euro-to-euro SEPA paths can look different from FX routes",
        "Express options often cost more — decide if the deadline needs it",
        "Educational ranges are not live quotes",
      ],
    },
    tradeoffs: {
      title: "Trade-off tips",
      items: [
        "Cheapest: prioritise amount received and re-check yearly",
        "Fastest: match promised timelines to your due date",
        "Easiest: fine for rare small sends — re-check large ones",
        "Best value often means two trusted providers, not five",
      ],
    },
    scenarios: {
      title: "Scenario planning tips",
      items: [
        "Monthly remittances: compare on a quiet weekday, save proof",
        "Large one-offs: start early for security checks",
        "Freelancers: separate Dutch bills from foreign income paths",
        "Rent abroad: double-check reference text and account details",
      ],
    },
    mistakes: {
      title: "Mistake prevention",
      items: [
        "Do not trust fee headlines alone",
        "Do not skip same-day side-by-side quotes",
        "Do not rush a first large send without a timing buffer",
        "Do not confuse this page with bank awards or account opening",
      ],
    },
    checklist: {
      title: "Ready-to-send signals",
      items: [
        "Two same-day quotes for the same amount and route",
        "Recipient name, IBAN and reference double-checked",
        "Timing buffer left before the due date",
        "Proof of quote saved if the amount is rent-sized",
      ],
    },
  },
  introParagraphs: [
    "From a Dutch account you can send euros inside Europe, change money into another currency, or pay someone abroad. High-street banks, banking apps and send-money companies all work — but fees and exchange rates stack differently, and the number that matters is how much arrives after everything.",
    "This page is the transfers orientation guide: full cost, provider types, scenarios and a calm compare checklist. It is not crypto, not investment advice, not a bank awards table (see Best banks for expats) and not a deep dive on opening an account (see Open a bank account).",
  ],
  introHighlights: [
    "Orientation for expats who send money home, pay foreign bills or move larger savings",
    "Clear boundary: transfer cost and timing here — bank shortlists and account setup live elsewhere",
    "Links into Banking hub, fees, how payments work, tools and live cluster peers",
  ],
  orientationFlowSteps: [
    "Decide the job: remittance, rent, invoice or one large move",
    "Compare amount received on at least two official calculators",
    "Check timing and recipient details before you confirm",
    "Save proof and keep everyday Dutch banking on a trusted account",
  ],
  safetyFileChecklist: [
    "Same-day quotes from your bank and at least one other provider",
    "Amount the recipient receives written down (not only the fee)",
    "Recipient IBAN / account details and payment reference checked twice",
    "Timing buffer before rent, tuition or invoice due dates",
    "Bank app and transfer app logins secured; watch phishing",
    "Bookmarks: Banking fees, How payments work, Best banks, Open a bank account, Banking hub",
  ],
  introScenarios: [
    {
      situation: "Monthly support to family abroad",
      approach: "Repeat the same compare ritual — rates drift quietly over months",
      firstStep: "Run bank + specialist calculators the same weekday each month",
    },
    {
      situation: "One large savings transfer",
      approach: "FX gaps matter most when the number is big — start early",
      firstStep: "Collect fresh quotes the week you send; read cut-off notes",
    },
    {
      situation: "Still setting up Dutch banking",
      approach: "You need a working Dutch path before remittances feel smooth",
      firstStep: "Open a bank account first, then return here for send habits",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: how should I send money abroad from the Netherlands?",
    summary:
      "Compare how much the recipient receives after fees and the exchange rate — not the marketing fee line alone. Dutch high-street banks, banking apps and send-money specialists can all work; the better fit depends on currency, amount, speed and how often you send. Always verify on each provider’s official calculator the same day you decide. This page does not publish live winners or guaranteed prices.",
    bullets: [
      "Decision number: amount received after everything",
      "Exchange-rate gaps often cost more than the visible send fee",
      "Euro-to-euro paths can look different from FX routes — check both",
      "For bank shortlists use Best banks; for account setup use Open a bank account",
    ],
    note: "Indicative examples on tools or marketing pages are not promises. Re-run quotes when the amount is rent-sized or the route is new.",
  },
  snapshotSignals: [
    {
      label: "Decision number",
      value: "Amount received",
      note: "After fees and the exchange rate",
    },
    {
      label: "Hidden cost",
      value: "FX gap",
      note: "Often larger than the fee line",
    },
    {
      label: "Provider types",
      value: "Bank · App · Specialist",
      note: "Compare patterns, then official quotes",
    },
    {
      label: "Timing",
      value: "Minutes to days",
      note: "Leave buffer on first-time routes",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "What this page covers",
      body: "Sending money abroad from a Dutch account: fees, FX, timing, provider types, scenarios and a compare checklist.",
    },
    {
      title: "Why people overpay",
      body: "Low fee headlines that hide a weaker exchange rate — and habit of never comparing amount received.",
    },
    {
      title: "Three provider types",
      body: "High-street banks, banking apps and send-money specialists — different strengths, same need to verify.",
    },
    {
      title: "Full cost pieces",
      body: "Send fee, FX gap, receiver fees, timing and banks in the middle.",
    },
    {
      title: "What belongs elsewhere",
      body: "Bank awards → Best banks. Account opening → Open a bank account. Crypto and investing are out of scope.",
    },
    {
      title: "Tools next",
      body: "Transfer cost calculator, banking cost estimator and bank comparison tool for planning bands — then official quotes.",
    },
  ] satisfies TipCard[],
  whyOverpay: {
    heading: "Why people overpay for transfers",
    lead:
      "Most surprises are not a mystery line on the receipt — they are the exchange rate you never compared side by side. Your Dutch bank can be excellent for salary and rent and still be an expensive place to change a large sum into another currency.",
    points: [
      {
        title: "The hidden cost is usually the exchange rate",
        body:
          "A “low fee” or €0 send fee can still mean less money arrives if the rate is weaker than another provider at the same moment. The real price shows up in how many dollars, pounds, zloty or rupees land in the other account.",
      },
      {
        title: "Banks are not always the worst — check when you change currency",
        body:
          "For euros to euros inside Europe, gaps can be small. When you switch to another currency or send to less common countries, specialists or apps often deliver more — but only your own same-day checks prove it.",
      },
      {
        title: "Convenience has a price",
        body:
          "One familiar bank login is easy on the brain. That habit can be expensive on large or repeated sends abroad. Adding one other trusted company is extra work — and often where people save the most once they compare how much arrives.",
      },
    ] as const,
    visualCaption:
      "Same minute, same send — two different pictures of where the cost hides. Educational shapes only; not live prices.",
    visualDisclaimer: "Learning aid only — always use each company’s own calculator before you send.",
  },
  options: {
    heading: "Transfer options to compare",
    lead:
      "Each shortlist card sums up common strengths and watch-outs from editorial research — not a live ranking. Always confirm today’s price on each company’s site. Some links may be partner links where we say so.",
    summaryTitle: "No pretend “#1” ranking",
    summaryIntro:
      "We list send-money brands, banking apps and Dutch high-street banks because people compare them every day. Prices change — open each company’s own site and calculator before you send.",
  },
  providerTypes: {
    heading: "Branch bank vs app bank vs send-money company",
    lead:
      "High-street banks, banking apps and companies built for sending money abroad fit different jobs. Skim the table for the big picture, then check the exact account you can open on the bank or company site.",
    tableCaption: "Sending money abroad compared: Dutch branch banks, banking apps, and send-money companies",
    columnLabels: {
      traditional: { label: "High-street bank", hint: "Branch and website; salary and rent in the Netherlands" },
      digital: { label: "Banking app", hint: "Account you run mostly from your phone" },
      third: { label: "Send-money company", hint: "Built mainly for sending cash to other countries" },
    } as const,
    rows: internationalTransferProviderComparisonRows,
    afterTableLead: "When you know which column sounds like you, the next step is to see how fees and the exchange rate stack together.",
  },
  fullCost: {
    heading: "What actually makes a transfer expensive or cheap",
    lead: "Add these pieces before you trust a big fee number or a slogan. Educational framing for 2026 — not a live price table.",
    items: transferCostEducationalItems,
    equationSummary: {
      ...transferCostEducationalEquation,
      footnote:
        "Picture for learning only. Always use each company’s own calculator and price list for your amount and country.",
    },
    afterBreakdownLead: "When you know the parts, pick a company from the options above and run the numbers on their site.",
  },
  tradeoffs: {
    heading: "Cheapest vs fastest vs easiest",
    lead: "Four common goals — use them with the transfer options above and each company’s own calculator.",
    cards: [
      {
        title: "Cheapest",
        setup: "digital" as const,
        why: "A fair exchange rate for your route usually matters more than a “zero fee” sticker — compare amount received.",
        watchOut: "The lowest-cost path can be slower or fiddlier — leave time before rent or invoice due dates.",
        link: { href: "#howto", label: "Five-step comparison checklist" },
      },
      {
        title: "Fastest",
        setup: "hybrid" as const,
        why: "Depends on the path your money takes — instant inside an app is not the same as instant to every bank account.",
        watchOut: "Faster options often cost more — decide if the deadline is worth the extra charge.",
        link: { href: HOW_PAYMENTS_WORK_PATH, label: "How payments work" },
      },
      {
        title: "Easiest",
        setup: "traditional" as const,
        why: "One bank you already use when you rarely send abroad and like familiar screens.",
        watchOut: "Ease can cost more when the send is large or in another currency — check at least once a year.",
        link: { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
      },
      {
        title: "Best overall value",
        setup: "hybrid" as const,
        why: "Use two companies when everyday Dutch banking stays at your branch bank and repeat sends use a send-money specialist.",
        watchOut: "Two providers means two sets of rules — drop features you never use.",
        link: { href: BANKING_FEES_PAGE_PATH, label: "Banking fees & costs" },
      },
    ] as const,
  },
  scenarios: {
    heading: "Start from a real situation",
    intro:
      "Each card is a typical story — not a promise about your exact price. Check companies, timing and any tax questions on official sites or with a professional.",
    guidance:
      "Pick the card that reads closest to your life. Then run the same send through your bank’s logged-in price and at least one other calculator the same day — memory is not proof.",
    cards: [...bankingTransferScenarios],
    rows: [
      {
        situation: "Sending money home every month",
        approach: "Same-day bank + specialist quotes; save proof when pricing drifts",
        firstStep: "Open the five-step compare checklist before the next send",
      },
      {
        situation: "One large savings move",
        approach: "Fresh quotes the week you send; watch cut-offs and security checks",
        firstStep: "Start early — first-time large paths can pause",
      },
      {
        situation: "Freelancer paid from abroad",
        approach: "Dutch account for local life; add one clear FX/income path",
        firstStep: "Keep bookkeeper-friendly quote downloads",
      },
      {
        situation: "Paying rent or bills abroad",
        approach: "Maximise amount credited after fees and FX; verify references",
        firstStep: "Double-check IBAN and payment reference text",
      },
    ] satisfies ScenarioRow[],
  },
  howTo: {
    heading: "How to compare transfer options properly",
    lead: "Five steps worth doing every time — especially when the amount is as big as rent or school fees.",
    steps: [
      {
        name: "Compare how much arrives",
        text: "Use each company’s calculator with the same time, amount, currency and how the money is paid out.",
      },
      {
        name: "Look at the exchange rate",
        text: "See how far the offered rate sits from a fair mid-market rate you might see online — small gaps add up on large sends.",
      },
      {
        name: "Add up every fee",
        text: "Include your send fee, any express option, and fees you know the other bank may take when the money lands.",
      },
      {
        name: "Check speed honestly",
        text: "Match promised timelines to your due date; leave extra time the first time you use a new path.",
      },
      {
        name: "Keep proof",
        text: "Save a PDF or screenshot of the price before you send. Skim help threads for your two countries if you like.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to compare international transfers from the Netherlands",
    description:
      "Five orientation steps to compare amount received, exchange-rate gaps, fees, timing and proof before sending money abroad from a Dutch account.",
    anchor: "#howto",
  },
  mistakes: {
    heading: "Common transfer mistakes",
    cards: [
      {
        title: "Trusting the fee headline alone",
        body: "A €0 or “low fee” sticker can hide a weaker exchange rate that shrinks what arrives.",
        advice: "Always compare amount received on the same day for the same route.",
      },
      {
        title: "Skipping a second quote",
        body: "One familiar bank screen feels enough — until a large FX send quietly costs more than needed.",
        advice: "Open at least one other official calculator before rent-sized confirms.",
      },
      {
        title: "Rushing a first large send",
        body: "Security checks, cut-offs and wrong references delay money when deadlines are tight.",
        advice: "Start early, leave a timing buffer, and double-check recipient details.",
      },
      {
        title: "Mixing this page with bank awards or account opening",
        body: "Transfer cost orientation is not a bank ranking and not a BSN/onboarding deep dive.",
        advice: "Use Best banks for shortlists and Open a bank account for setup — then return here to send.",
      },
      {
        title: "Ignoring phishing and fake “urgent transfer” messages",
        body: "Scammers spoof banks and transfer apps around large remittances.",
        advice: "Use Banking safety habits — never confirm from a cold link or unexpected chat.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Transfer readiness checklist",
    items: [
      "Two same-day official quotes for the same amount, currency and payout method",
      "Amount the recipient receives noted (not only the fee line)",
      "Exchange-rate gap considered against a fair mid-market reference",
      "Recipient name, IBAN/account and payment reference double-checked",
      "Timing buffer left before the due date — especially on first-time routes",
      "Proof of quote saved for rent-sized or school-fee sends",
      "Everyday Dutch bills still on a trusted Dutch account",
      "Phishing habits reviewed (Banking safety) before confirming large sends",
      "Best banks bookmarked if you still need a better everyday account fit",
      "Open a bank account bookmarked if Dutch onboarding is incomplete",
    ],
  },
  recommended: {
    heading: "Optional provider spots",
    lead:
      "Neutral placements on the page — product details, prices and who can sign up live on each company’s site. Listing a company is not a recommendation.",
    disclaimer:
      "Some spots may be partner links where we say so; fees and exchange rates still change every day. Always verify on official calculators.",
    groups: [
      {
        title: "Send-money specialists",
        placementId: "nl-money-cheapest-accounts-transfers",
        boundaryNote:
          "Wise and similar tools — compare calculators, then keep everyday Dutch money on the account you trust for paying bills in the Netherlands.",
        analyticsPageContext: "international-transfers-from-nl-recommended-transfers",
        categoryLinks: [
          { href: HOW_PAYMENTS_WORK_PATH, label: "How payments work" },
          { href: BANKING_FEES_PAGE_PATH, label: "Banking fees" },
        ],
      },
      {
        title: "Banking apps",
        placementId: "nl-money-cheapest-accounts-digital",
        boundaryNote:
          "Phone-first plans — read fair-use rules for exchange rates, weekend prices and business vs personal use before you rely on one send path.",
        analyticsPageContext: "international-transfers-from-nl-recommended-digital",
        categoryLinks: [
          { href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH, label: "Traditional vs digital" },
          { href: CHEAPEST_BANK_ACCOUNTS_PATH, label: "Cheapest accounts" },
        ],
      },
      {
        title: "Traditional Dutch banks",
        placementId: "nl-money-cheapest-accounts-traditional",
        boundaryNote:
          "ING, ABN AMRO, Rabobank — strong for everyday Dutch account numbers and local bills; check their international price list for the account you hold.",
        analyticsPageContext: "international-transfers-from-nl-recommended-traditional",
        categoryLinks: [
          { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
          { href: TYPES_OF_ACCOUNTS_PATH, label: "Types of accounts" },
        ],
      },
    ],
  },
  tools: {
    heading: "Planning tools",
    items: [
      {
        label: "Transfer cost calculator",
        href: TRANSFER_COST_CALCULATOR_PATH,
        description: "Educational ranges for fee + FX planning — not live quotes",
      },
      {
        label: "Banking cost estimator",
        href: BANKING_COST_ESTIMATOR_PATH,
        description: "See how often you send abroad changes monthly planning bands",
      },
      {
        label: "Bank comparison tool",
        href: BANK_COMPARISON_TOOL_PATH,
        description: "Weight transfer-heavy setups alongside a Dutch everyday account",
      },
      {
        label: "Banking fees & costs",
        href: BANKING_FEES_PAGE_PATH,
        description: "Transfer and exchange-rate lines on Dutch price lists",
      },
    ] satisfies InternationalTransfersLink[],
  },
  faq: [
    {
      q: "What is the cheapest way to send money abroad from the Netherlands?",
      a: "Usually whichever path puts the most money in the other person’s account after the send fee and the exchange rate — often a send-money company or a banking app on busy paths, but not always. Compare your bank’s logged-in price and at least one other official calculator the same day, for the same amount and account details.",
    },
    {
      q: "Are Dutch banks expensive for international transfers?",
      a: "They can be fine for some euro-to-euro payments and very convenient when you already use them. On sends that change currency, the bank’s rate may cost more than a specialist — there is no universal rule, so run your own quotes.",
    },
    {
      q: "What is a hidden mark-up on the exchange rate?",
      a: "It is the gap between the rate you are offered and a fair mid-market rate you might see online. A €0 send fee can still be a bad deal if that gap is wide — always look at how much arrives, not only the fee line.",
    },
    {
      q: "Is Wise cheaper than banks?",
      a: "Sometimes, on many routes — but “cheaper” depends on amount, currency, speed and plan rules. Use Wise’s official calculator and your bank’s logged-in quote for the same send. We do not publish live winners on this page.",
    },
    {
      q: "How long do international transfers take?",
      a: "Anywhere from minutes to several working days, depending on the countries involved, cut-off times, security checks and whether other banks handle the money in the middle. Read the time estimate on the confirmation screen and leave extra time the first time you use a new path.",
    },
    {
      q: "Can I receive money internationally in the Netherlands?",
      a: "Yes. Most Dutch accounts accept euro payments from nearby European countries in the usual way. Other currencies may take longer and pass through other banks. Give senders your Dutch IBAN, and the BIC if their bank asks for it, plus any payment reference your bank told you to use.",
    },
    {
      q: "Does this page cover crypto or investing?",
      a: "No. This guide is about sending money abroad from a Dutch account — fees, FX, timing and what to check. Crypto and investment products are out of scope.",
    },
  ],
  relatedGuides: [
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Documents, BSN timing and setup for a Dutch everyday account — live cluster peer",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Shortlist and comparison table — live cluster peer; verify on bank sites",
      status: "live" as const,
    },
    {
      label: "Banking fees & costs",
      href: BANKING_FEES_PAGE_PATH,
      description: "How fee lines and FX notes appear on Dutch price lists",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "iDEAL, SEPA and everyday Dutch payment rails",
      status: "live" as const,
    },
    {
      label: "Wise vs Revolut",
      href: "/netherlands/money/banking/wise-vs-revolut/",
      description: "App-layer decision orientation for multi-currency and transfers — not a winner ranking",
      status: "live" as const,
    },
    {
      label: "Traditional vs digital",
      href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH,
      description: "Branch banks and phone-first banks side by side",
      status: "live" as const,
    },
    {
      label: "Cheapest bank accounts",
      href: CHEAPEST_BANK_ACCOUNTS_PATH,
      description: "Lower-fee everyday Dutch accounts orientation",
      status: "live" as const,
    },
    {
      label: "Types of accounts",
      href: TYPES_OF_ACCOUNTS_PATH,
      description: "Current, savings and related Dutch account types",
      status: "live" as const,
    },
    {
      label: "Banking safety & fraud",
      href: BANKING_SECURITY_PATH,
      description: "Phishing and transfer-scam habits before large sends",
      status: "live" as const,
    },
  ] satisfies InternationalTransfersLink[],
  hubCards: [
    {
      label: "Banking hub",
      href: BANKING_HUB_PATH,
      description: "All Netherlands banking guides and tools in one place",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Live cluster peer — onboarding before smooth remittances",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Live cluster peer — bank shortlists, not transfer awards",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "Payment rails that sit beside international sends",
      status: "live" as const,
    },
    {
      label: "Wise vs Revolut",
      href: "/netherlands/money/banking/wise-vs-revolut/",
      description: "Compare two common specialist app options next",
      status: "live" as const,
    },
  ] satisfies InternationalTransfersLink[],
  exploreNext: [
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Get a Dutch everyday account before remittance becomes routine",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Shortlist everyday banks that pair with transfer tools",
      status: "live" as const,
    },
    {
      label: "Wise vs Revolut",
      href: "/netherlands/money/banking/wise-vs-revolut/",
      description: "Decision orientation for two popular app-layer providers",
      status: "live" as const,
    },
    {
      label: "Transfer cost calculator",
      href: TRANSFER_COST_CALCULATOR_PATH,
      description: "Model educational fee + FX ranges before official quotes",
      status: "live" as const,
    },
    {
      label: "Bank comparison tool",
      href: BANK_COMPARISON_TOOL_PATH,
      description: "Weight transfer needs with everyday Dutch banking",
      status: "live" as const,
    },
    {
      label: "Banking cost estimator",
      href: BANKING_COST_ESTIMATOR_PATH,
      description: "See how send frequency changes planning bands",
      status: "live" as const,
    },
    {
      label: "Banking safety & fraud",
      href: BANKING_SECURITY_PATH,
      description: "Protect large remittances from phishing and fake urgency",
      status: "live" as const,
    },
  ] satisfies InternationalTransfersLink[],
  officialSources: [
    {
      label: "European Payments Council",
      href: "https://www.europeanpayments.eu/",
      description: "Euro-area payment schemes and SEPA orientation",
    },
    {
      label: "Your Europe — bank accounts & payments",
      href: "https://europa.eu/youreurope/citizens/consumers/financial-products-and-services/bank-accounts-and-payments/index_en.htm",
      description: "EU consumer orientation on bank accounts and payments",
    },
    {
      label: "De Nederlandsche Bank (DNB)",
      href: "https://www.dnb.nl/en/",
      description: "Dutch central bank — supervision and financial system context",
    },
  ],
  disclosure:
    "ExpatLife provides general orientation for expats in the Netherlands. We do not provide financial, tax or investment advice, and we do not publish live transfer prices. Some links may be partner links — always verify products, fees and eligibility on official provider sites.",
} as const;

/** @deprecated Prefer `internationalTransfersFromNlPage` — kept for any legacy imports. */
export const internationalTransfersFromNlPageModel = internationalTransfersFromNlPage;

export type InternationalTransfersFromNlPageModel = typeof internationalTransfersFromNlPage;

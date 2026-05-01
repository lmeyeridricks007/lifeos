import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";
import {
  transferCostEducationalEquation,
  transferCostEducationalItems,
} from "@/src/data/banking/transferCostBreakdownEducational";
import { BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH } from "@/src/data/banking/bankingTraditionalDigitalContent";
import { bankingTransferScenarios } from "@/src/data/banking/bankingTransferScenarios";
import { internationalTransferProviderComparisonRows } from "@/src/data/banking/internationalTransferComparisonRows";
import { BANK_COMPARISON_TOOL_PATH, BANKING_COST_ESTIMATOR_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "./internationalTransfersFromNlPaths";

export { INTERNATIONAL_TRANSFERS_FROM_NL_PATH };

const HPW_PATH = "/netherlands/money/banking/how-payments-work/" as const;
const TYPES_OF_ACCOUNTS_PATH = "/netherlands/money/banking/types-of-accounts/" as const;
export const internationalTransfersFromNlPageModel = {
  path: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
  publishDate: "2026-04-30",

  seo: {
    title: "International Transfers from the Netherlands | ExpatCopilot",
    description:
      "Send money from the Netherlands abroad: what fees mean, how the exchange rate changes what arrives, and how fast it can be. This is a guide — always check the price on each company’s website before you send.",
    keywords: [
      "international transfer netherlands",
      "send money abroad netherlands",
      "cheapest transfer netherlands",
      "wise vs bank netherlands",
    ],
  },

  heroImage: {
    src: "/images/heroes/netherlands-international-transfers-hero.webp",
    alt: "Bright Dutch home office photo: laptop, passport, euros, and small globe on a desk — guide to sending money abroad from the Netherlands on ExpatCopilot",
    width: 1536,
    height: 1024,
  },

  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#why-overpay-transfers", label: "Why people overpay" },
    { href: "#transfer-shortlist", label: "Transfer options" },
    { href: "#bank-vs-digital-transfer", label: "Branch vs app vs send-money" },
    { href: "#what-determines-cost", label: "Full cost" },
    { href: "#cheapest-fast-convenient", label: "Cheap / fast / easy" },
    { href: "#transfer-scenarios", label: "Scenarios" },
    { href: "#how-to-compare", label: "How to compare" },
    { href: "#recommended-options", label: "Recommended providers" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "International Transfers from the Netherlands",
    subtitle:
      "High-street banks, phone apps, and companies that focus on sending money abroad all work a bit differently. Here we explain fees and exchange rates in simple words, and show you how to check what really lands in the other person’s account.",
    contextChips: ["Planning only", "We do not show live prices", "Check each company’s site"] as const,
    notOneWinnerBanner:
      "There is no single “best” transfer for every country and amount. A “low fee” can still mean less money arrives if the exchange rate is weaker — always compare the amount that lands in the recipient’s account.",
    pricesChangeBanner:
      "Fees and plans change often. Treat this page as a checklist, then use each provider’s own calculator on the day you send.",
    guidePrinciple:
      "The number that matters is how much the other person receives after all fees and the exchange rate — not one line in an advert.",
    trustLine:
      "We are a guide only: we cannot send money for you or save prices from banks. Always read the company’s own rules and price list before you press send.",
    bullets: [
      "How Dutch high-street banks, banking apps, and send-money companies usually compare",
      "Why the exchange rate often matters more than the fee you see in big print",
      "Find a story that sounds like your life, then check the numbers on the bank or app’s own tool",
      "A few common surprises to watch for before you confirm",
    ] as const,
    primaryCta: { label: "Compare transfer options", href: "#transfer-shortlist" as const },
    secondaryCta: { label: "See what shapes the full cost", href: "#what-determines-cost" as const },
    heroQuickLinks: [
      { label: "Bank comparison tool", href: BANK_COMPARISON_TOOL_PATH },
      { label: "Banking cost estimator", href: BANKING_COST_ESTIMATOR_PATH },
      { label: "Banking fees & costs", href: BANKING_FEES_PAGE_PATH },
      { label: "How payments work", href: HPW_PATH },
      { label: "Best banks for expats", href: BEST_BANKS_EXPATS_PATH },
      { label: "Cheapest bank accounts", href: CHEAPEST_BANK_ACCOUNTS_PATH },
    ] as const,
  },

  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "A simple map for sending money from the Netherlands — not personal money or tax advice.",
    cells: [
      {
        title: "What this page is for",
        bullets: [
          "Help you decide when your Dutch bank is enough, when a banking app helps, and when a send-money company may get more cash to the other person — using patterns from our research, not today’s live prices.",
        ] as const,
      },
      {
        title: "Best for",
        bullets: [
          "People in the Netherlands who send money home, pay bills abroad, freelance across borders, or support family in another currency.",
        ] as const,
      },
      {
        title: "What it compares",
        bullets: [
          "Send fees, how fair the exchange rate is, speed, how easy it is to use, how clear the bill is, and common life situations — all from our research, not a price league table.",
        ] as const,
      },
      {
        title: "What it skips",
        bullets: [
          "Today’s exact prices, investment advice, and tax questions about foreign money — use each company’s own tools and a tax or money professional when that matters for you.",
        ] as const,
      },
    ],
    note: "The cheapest-looking option is not always the one with the smallest fee line — the exchange rate often decides how much arrives.",
  },

  whyOverpay: {
    id: "why-overpay-transfers",
    eyebrow: "Reality check",
    title: "Why people overpay for transfers",
    lead:
      "Most surprises are not a mystery line on the receipt — they are the exchange rate you never compared side by side. Your Dutch bank can be great for salary and rent and still be an expensive place to change a large sum into another currency.",
    points: [
      {
        title: "The hidden cost is usually the exchange rate",
        body:
          "A “low fee” or €0 send fee can still mean less money arrives if the rate is weaker than another provider at the same moment. The real price shows up in how many dollars, pounds, zloty, or rupees land in the other account — not in the marketing headline alone.",
      },
      {
        title: "Banks are not always the worst — check when you change money to another currency",
        body:
          "For euros to euros inside Europe, gaps can be small. When you switch to another currency or send to less common countries, send-money companies or banking apps often get more money to the other person — but only your own same-day price checks prove it.",
      },
      {
        title: "Convenience has a price",
        body:
          "One familiar bank login is easy on the brain. That habit can be expensive on large or repeated sends abroad. Adding one other trusted company is extra work — and often where people save the most money once they compare how much arrives.",
      },
    ] as const,
    visualCaption:
      "Same minute, same send — two different pictures of where the cost hides. Bar widths are for learning only; they are not live prices, shares of your transfer, or quotes from any one bank.",
    visualDisclaimer: "Shapes for learning only — always use each company’s own calculator before you send.",
  },

  transferShortlist: {
    id: "transfer-shortlist",
    sectionEyebrow: "Shortlist",
    sectionTitle: "Transfer options to compare",
    sectionSubtitle:
      "Each card sums up common strengths and things to watch for from our research — not a live ranking. Always confirm today’s price on each company’s site.",
    summaryEyebrow: "How to read this",
    summaryTitle: "No pretend “#1” ranking",
    summaryIntro:
      "We list send-money brands, banking apps, and Dutch high-street banks because people compare them every day. Prices change — open each company’s own site and calculator before you send.",
    providerEyebrow: "Check today’s price yourself",
    providerTitle: "Company cards",
    providerIntro:
      "Open a card for typical costs, speed hints, and who it often suits — then confirm on the official site. Some links may be partner links where we say so.",
  },

  bankVsDigitalTransfer: {
    id: "bank-vs-digital-transfer",
    eyebrow: "Three types",
    title: "Branch bank vs app bank vs send-money company",
    subtitle: "How three common choices usually differ when money goes abroad — patterns from our research, not a list of winners.",
    lead:
      "High-street banks, banking apps, and companies built for sending money abroad fit different jobs. Skim the table for the big picture, then check the exact account you can open on the bank or company site.",
    tableCaption: "Sending money abroad compared: Dutch branch banks, banking apps, and send-money companies",
    columnLabels: {
      traditional: { label: "High-street bank", hint: "Branch and website; salary and rent in the Netherlands" },
      digital: { label: "Banking app", hint: "Account you run mostly from your phone" },
      third: { label: "Send-money company", hint: "Built mainly for sending cash to other countries" },
    } as const,
    rows: internationalTransferProviderComparisonRows,
    afterTableLead: "When you know which column sounds like you, the next step is to see how fees and the exchange rate stack together.",
    afterTableCta: { label: "See what makes up the total cost", href: "#what-determines-cost" as const },
    instructionalCaption:
      "Big picture before the detail table: three kinds of companies readers compare most often — names and prices still live on each official site.",
  },

  whatDeterminesCost: {
    id: "what-determines-cost",
    eyebrow: "Full cost",
    title: "What actually makes a transfer expensive or cheap",
    subtitle: "Add these pieces before you trust a big fee number or a slogan.",
    items: transferCostEducationalItems,
    equationSummary: {
      ...transferCostEducationalEquation,
      footnote:
        "Picture for learning only. Always use each company’s own calculator and price list for your amount and country.",
    },
    instructionalCaption:
      "Think in parts: every line below can change how much arrives. The picture is a memory aid — the price screen when you log in is what counts.",
    afterBreakdownLead: "When you know the parts, pick a company from the list above and run the numbers on their site.",
    afterBreakdownCta: { label: "Open transfer options", href: "#transfer-shortlist" as const },
  },

  cheapestFastConvenient: {
    id: "cheapest-fast-convenient",
    eyebrow: "Trade-offs",
    title: "Cheapest vs fastest vs easiest",
    subtitle: "Four common goals — use them with the transfer options above and each company’s own calculator.",
    cards: [
      {
        title: "Cheapest",
        setup: "digital" as const,
        why: "A fair exchange rate for your route usually matters more than a “zero fee” sticker — compare amount received.",
        watchOut: "The lowest-cost path can be slower or fiddlier — leave time before rent or invoice due dates.",
        link: { href: "#how-to-compare", label: "Five-step comparison checklist" },
      },
      {
        title: "Fastest",
        setup: "hybrid" as const,
        why: "Depends on the path your money takes — instant inside an app is not the same as instant to every bank account.",
        watchOut: "Faster options often cost more — decide if the deadline is worth the extra charge.",
        link: { href: HPW_PATH, label: "How payments work" },
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

  transferScenarios: {
    id: "transfer-scenarios",
    eyebrow: "Scenarios",
    title: "Start from a real situation",
    subtitle: "Each card is a typical story — not a promise about your exact price. Check companies, timing, and any tax questions on official sites or with a professional.",
    scenarioGuidance:
      "Pick the card that reads closest to your life. Then run the same send through your bank’s logged-in price and at least one other calculator the same day — memory is not proof.",
    afterScenariosPrimaryCta: { label: "Run the five-step checklist", href: "#how-to-compare" as const },
    afterScenariosSecondaryCta: { label: "Browse transfer options", href: "#transfer-shortlist" as const },
    cards: [...bankingTransferScenarios],
  },

  howToCompare: {
    id: "how-to-compare",
    eyebrow: "Checklist",
    title: "How to compare transfer options properly",
    subtitle: "Five steps worth doing every time — especially when the amount is as big as rent or school fees.",
    steps: [
      { title: "Compare how much arrives", body: "Use each company’s calculator with the same time, amount, currency, and how the money is paid out." },
      { title: "Look at the exchange rate", body: "See how far the offered rate sits from a fair rate you might see online or in the news — small gaps add up on large sends." },
      { title: "Add up every fee", body: "Include your send fee, any “express” option, and fees you know the other bank may take when the money lands." },
      { title: "Check speed honestly", body: "Match promised timelines to your due date; leave extra time the first time you use a new path." },
      { title: "Keep proof", body: "If you like, skim recent help threads for your two countries; save a PDF or screenshot of the price before you send." },
    ] as const,
    cta: { label: "Open transfer options", href: "#transfer-shortlist" as const },
    secondaryCta: { label: "Back to scenarios", href: "#transfer-scenarios" as const },
    instructionalCaption:
      "Same five steps as the numbered list — use the picture as a quick reminder when you have two browser tabs open side by side.",
  },

  recommendedProviders: {
    sectionId: "recommended-options",
    eyebrow: "Optional",
    title: "Recommended providers",
    subtitle: "Neutral spots on the page — product details, prices, and who can sign up live on each company’s site.",
    disclaimer: "Listing a company is not a recommendation. Some spots may be partner links where we say so; fees and exchange rates still change every day.",
    groups: [
      {
        title: "Send-money specialists",
        placementId: "nl-money-cheapest-accounts-transfers",
        boundaryNote: "Wise and similar tools — compare calculators, then keep everyday Dutch money on the account you trust for paying bills in the Netherlands.",
        analyticsPageContext: "international-transfers-from-nl-recommended-transfers",
        categoryLinks: [
          { href: HPW_PATH, label: "How payments work" },
          { href: BANKING_FEES_PAGE_PATH, label: "Banking fees" },
        ],
      },
      {
        title: "Banking apps",
        placementId: "nl-money-cheapest-accounts-digital",
        boundaryNote: "Phone-first plans — read fair-use rules for exchange rates, weekend prices, and business vs personal use before you rely on one send path.",
        analyticsPageContext: "international-transfers-from-nl-recommended-digital",
        categoryLinks: [
          { href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH, label: "Traditional vs digital" },
          { href: CHEAPEST_BANK_ACCOUNTS_PATH, label: "Cheapest accounts" },
        ],
      },
      {
        title: "Traditional Dutch banks",
        placementId: "nl-money-cheapest-accounts-traditional",
        boundaryNote: "ING, ABN AMRO, Rabobank — strong for everyday Dutch account numbers and local bills; check their international price list for the account you hold.",
        analyticsPageContext: "international-transfers-from-nl-recommended-traditional",
        categoryLinks: [
          { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
          { href: TYPES_OF_ACCOUNTS_PATH, label: "Types of accounts" },
        ],
      },
    ],
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
      a: "It is the gap between the rate you are offered and a fair rate you might see online or in the news. A €0 send fee can still be a bad deal if that gap is wide — always look at how much arrives, not only the fee line.",
    },
    {
      q: "Is Wise cheaper than banks?",
      a: "Sometimes, on many routes — but “cheaper” depends on amount, currency, speed, and plan rules. Use Wise’s official calculator and your bank’s logged-in quote for the same send. We do not publish live winners on this page.",
    },
    {
      q: "How long do international transfers take?",
      a: "Anywhere from minutes to several working days, depending on the countries involved, last-send times, security checks, and whether other banks handle the money in the middle. Read the time estimate on the confirmation screen and leave extra time the first time you use a new path.",
    },
    {
      q: "Can I receive money internationally in the Netherlands?",
      a: "Yes. Most Dutch accounts accept euro payments from nearby European countries in the usual way. Other currencies may take longer and pass through other banks. Give senders your Dutch account number (IBAN), and the extra bank code (BIC) if their bank asks for it, plus any payment reference your bank told you to use.",
    },
  ],

  officialSources: {
    sectionId: "official-sources",
    sectionTitle: "Official sources",
    disclaimer:
      "Euro-area payment bodies, EU consumer pages, and the Dutch central bank explain background and oversight — they do not replace each company’s contract or live calculator.",
    groups: [
      {
        id: "sepa",
        title: "Euro-area payments",
        links: [{ type: "external" as const, label: "European Payments Council (euro-area payments)", href: "https://www.europeanpayments.eu/" }],
      },
      {
        id: "eu-payments",
        title: "EU payment rules (consumer orientation)",
        links: [
          {
            type: "external" as const,
            label: "Your Europe — bank accounts & payments",
            href: "https://europa.eu/youreurope/citizens/consumers/financial-products-and-services/bank-accounts-and-payments/index_en.htm",
          },
        ],
      },
      {
        id: "dnb",
        title: "Dutch banking supervision",
        links: [{ type: "external" as const, label: "De Nederlandsche Bank (DNB)", href: "https://www.dnb.nl/en/" }],
      },
      {
        id: "more",
        title: "More on ExpatCopilot",
        links: [
          { type: "internal" as const, label: "Netherlands banking hub", href: "/netherlands/money/banking/" },
          { type: "internal" as const, label: "Banking fees & costs", href: BANKING_FEES_PAGE_PATH },
          { type: "internal" as const, label: "How payments work", href: HPW_PATH },
        ],
      },
    ],
  } satisfies MoveVisaResidencyReferences,
} as const;

export type InternationalTransfersFromNlPageModel = typeof internationalTransfersFromNlPageModel;

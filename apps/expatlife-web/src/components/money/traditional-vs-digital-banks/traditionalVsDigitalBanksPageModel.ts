import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import {
  BANKING_CONTENT_BEST_BANKS_EXPATS_PATH,
  BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH,
  BANKING_CONTENT_TYPES_OF_ACCOUNTS_PATH,
  bankingCommonMistakes,
  bankingHybridSetupUseCases,
  bankingRelatedGuides,
  bankingScenarioRecommendationsToScenarioCards,
  bankingTraditionalDigitalFaq,
} from "@/src/data/banking/bankingTraditionalDigitalContent";

export const TRADITIONAL_VS_DIGITAL_BANKS_PATH = BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH;
export const BEST_BANKS_EXPATS_PATH = BANKING_CONTENT_BEST_BANKS_EXPATS_PATH;

export const traditionalVsDigitalBanksPageModel = {
  path: TRADITIONAL_VS_DIGITAL_BANKS_PATH,
  publishDate: "2026-04-28",

  seo: {
    title: "Traditional vs Digital Banks in the Netherlands | ExpatCopilot",
    description:
      "Plain-language guide for expats: big Dutch banks vs app banks, English help, iDEAL, salary and rent, sending money abroad, and using both. We do not show live prices — check each bank’s website.",
    keywords: [
      "traditional vs digital banks netherlands",
      "digital banks netherlands expats",
      "hybrid banking netherlands expats",
      "bunq vs ing expats",
      "revolut vs dutch bank netherlands",
      "expat banking netherlands",
    ],
  },

  heroImage: {
    src: "/images/heroes/netherlands-traditional-vs-digital-banks-hero.png",
    alt: "Photorealistic hero: bright Dutch-style home office desk with laptop, smartphone, generic blank payment cards, notebook and coffee — editorial image for traditional vs digital banking guide on ExpatCopilot",
    width: 1536,
    height: 1024,
  },

  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#quick-answer", label: "Which should you choose?" },
    { href: "#how-traditional", label: "Traditional banks" },
    { href: "#how-digital", label: "Digital banks" },
    { href: "#hybrid-setup", label: "Hybrid setup" },
    { href: "#comparison-table", label: "Side-by-side comparison" },
    { href: "#which-banking-setup", label: "Which setup fits you?" },
    { href: "#scenarios", label: "By expat scenario" },
    { href: "#tradeoffs", label: "Trade-offs" },
    { href: "#misconceptions", label: "Common mistakes" },
    { href: "#related", label: "Related tools" },
    { href: "#banking-glossary", label: "Banking glossary" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Traditional vs Digital Banks in the Netherlands",
    subtitle:
      "A simple read on big Dutch banks versus banks you run mostly on your phone: signing up, English help, paying in the Netherlands, money abroad, and when people use two banks on purpose. This is not a list of the single best bank for everyone.",
    contextChips: ["Editorial guide", "No live pricing", "Verify on bank sites"],
    editorialPrinciple:
      "There is no one best bank for every person. What fits you depends on your employer, landlord, how fast you need an everyday account (betaalrekening), and how you use cards, iDEAL, and euro-area transfers.",
    trustLine:
      "We describe common patterns, not promises. Rules and prices change — always double-check on each bank’s official website before you open an account.",
    aboveFoldQuick: [
      { label: "Big Dutch bank first", hint: "Salary, rent, everyday NL", href: "#quick-answer" },
      { label: "App bank first", hint: "Speed, travel, other currencies", href: "#quick-answer" },
      { label: "Both on purpose", hint: "Hybrid setup", href: "#hybrid-setup" },
    ] as const,
    contextualLinks: [
      { label: "Types of bank accounts", href: BANKING_CONTENT_TYPES_OF_ACCOUNTS_PATH },
      { label: "Compare banks (shortlist)", href: BEST_BANKS_EXPATS_PATH },
      { label: "Open account setup guide", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Banks directory (fee overview)", href: "/netherlands/services/banks/" },
      { label: "How payments work (Money · Banking)", href: "/netherlands/money/banking/how-payments-work/" },
      { label: "Living: payments placeholder", href: "/netherlands/living/payments/" },
    ] as const,
    bullets: [
      "See when people pick a big Dutch bank, an app bank, or both — then match that to your paperwork and bills.",
      "Use our table for big-picture themes; use each bank’s own fee page before you choose.",
    ] as const,
    primaryCta: { label: "Compare banks", href: BEST_BANKS_EXPATS_PATH },
    secondaryCta: { label: "View comparison table", href: "#comparison-table" },
  },

  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "Short summary up front. For live prices and partner listings, use Best banks for expats and each bank’s own site.",
    cells: [
      {
        title: "What this page is for",
        bullets: [
          "Helps you compare well-known Dutch banks with phone-first banks — without saying one type always wins.",
        ] as const,
      },
      {
        title: "Best for",
        bullets: [
          "People choosing their first Dutch account, thinking about two accounts, and anyone who wants clear questions before salary and rent are set up.",
        ] as const,
      },
      {
        title: "What it compares",
        bullets: [
          "Signing up, citizen service number and address timing, English, paying Dutch shops (iDEAL), salary and rent, other currencies, fees, and how you get help (branch, phone, chat).",
        ] as const,
      },
      {
        title: "What it skips",
        bullets: [
          "Live price quotes, full business banking detail, tax advice, and reading contracts for you — ask a professional when you need that.",
        ] as const,
      },
    ],
    note: "No single winner — many expats use a Dutch main account for daily life and an app for travel or sending money. Check what your employer, landlord, and bills actually need.",
  },

  quickAnswer: {
    id: "quick-answer",
    eyebrow: "Quick answer",
    title: "Traditional, digital, or both?",
    subtitle: "Simple rules of thumb — still read each bank’s FAQ and ask your employer or landlord what they expect.",
    cards: [
      {
        title: "Choose a big Dutch (traditional) bank if…",
        bullets: [
          "Salary, rent, iDEAL, and long-term everyday Dutch life matter most on one familiar account.",
          "You care about mortgages or speaking to someone in a branch when things get serious.",
        ] as const,
      },
      {
        title: "Choose an app (digital) bank if…",
        bullets: [
          "You want to open an account from your phone as fast as checks allow, and you like managing money in an app.",
          "Travel and other currencies matter more than going to a branch for day-to-day tasks.",
        ] as const,
      },
      {
        title: "Use both if…",
        bullets: [
          "You want a stable Dutch account for local life and an app for travel or sending money — very common in year one.",
          "You want a second card while your BSN, address, or ID checks are still moving.",
        ] as const,
      },
    ],
  },

  comparisonTable: {
    scanIntro:
      "Each row is one topic. Read across the three columns. The cells are short plain-language summaries, not live prices.",
  },

  howTraditional: {
    id: "how-traditional",
    eyebrow: "Traditional banks",
    title: "How big Dutch banks work",
    lead:
      "Traditional here means large Dutch banks you may know from the high street or your employer — ING, ABN AMRO, and Rabobank are common examples. They are set up for salary, automatic Dutch payments, and long-term products like mortgages.",
    points: [
      "Usually a strong fit for salary, rent, and everyday Dutch payments when your account matches what the other party expects.",
      "Signing up can take longer: they may wait for city hall steps, your BSN, and a stack of documents — it depends on the bank and your situation.",
      "English exists for many everyday tasks, but it is not the same on every product or in every region.",
    ],
    pros: [
      "Widely accepted for salary, iDEAL, and money taken automatically from your account.",
      "Well known to many employers, landlords, and insurers.",
      "More products in one place (for example mortgages) if you qualify.",
    ],
    cons: [
      "Signing up can feel slower than app-only banks.",
      "The app and English experience differ from slick global fintech apps.",
      "Sending money abroad may cost more than using a specialist transfer app.",
    ],
  },

  howDigital: {
    id: "how-digital",
    eyebrow: "Digital banks",
    title: "How app-first banks work",
    lead:
      "Digital banks and money apps (examples people compare: bunq, Revolut, N26) are usually built for your phone first. They are often fast to open, good for notifications, and handy for other currencies — but they may not replace everything a Dutch employer or landlord expects from a classic Dutch current account.",
    points: [
      "Helpful when you want speed and international features while Dutch paperwork is still in motion.",
      "Account names and protections differ — read the exact product you sign up for.",
      "Help is often chat first; unusual problems can take longer than at a bank with branches.",
    ],
    pros: [
      "Often faster to open from home when checks go through.",
      "Clear apps and alerts for daily spending.",
      "Many plans are friendly to travel and spending in other currencies.",
    ],
    cons: [
      "Chat-only support can feel slow if you hit an unusual problem.",
      "Fewer big Dutch products (like some mortgages) than the largest banks.",
      "Subscriptions and limits need a careful read so you are not surprised by fees.",
    ],
  },

  hybridSetup: {
    id: "hybrid-setup",
    eyebrow: "Practical pattern",
    title: "Using two banks on purpose (hybrid)",
    lead:
      "Many people keep a normal Dutch current account and a phone-first bank or app. Neither is “wrong” — they just do different jobs in daily life.",
    ...bankingHybridSetupUseCases,
  },

  scenarios: {
    id: "scenarios",
    eyebrow: "Scenarios",
    title: "Best option by expat scenario",
    cards: bankingScenarioRecommendationsToScenarioCards(),
  },

  decisionHelper: {
    id: "which-banking-setup",
    eyebrow: "Decision helper",
    title: "Which banking setup fits you?",
    lead:
      "Simple if this, then think about that ideas — not legal or tax advice. Always check which account type you need, what your employer or landlord accepts, and today’s fees on the bank’s own site.",
    cards: [
      {
        title: "I need an account quickly",
        setup: "digital" as const,
        why: "App-first banks are often the fastest when ID and address checks work on your phone — handy while Dutch paperwork is still moving.",
        watchOut:
          "Fast signup does not mean every bill or pay salary here path accepts that product. Have a plan B if checks stall or someone insists on a well-known Dutch current account.",
        link: { href: "/netherlands/open-bank-account-netherlands/", label: "Open bank account guide" },
      },
      {
        title: "I am paid by a Dutch employer",
        setup: "traditional" as const,
        why: "Payroll teams often know large Dutch bank account numbers and standard salary deposits by heart — that can mean less back-and-forth when you are new.",
        watchOut:
          "Every HR team is different. Ask what they expect on your payslip, then read that bank’s FAQ — not random forum posts.",
        link: { href: BEST_BANKS_EXPATS_PATH, label: "Compare banks for expats" },
      },
      {
        title: "I send money abroad",
        setup: "hybrid" as const,
        why: "People often use an app or specialist for exchange rates and sending money across borders, and keep a Dutch account for local bills and everyday payments here.",
        watchOut:
          "Total cost depends on how often you send and how much. Use each provider’s official fee table — we do not show live prices on this page.",
        link: { href: "/netherlands/money/banking/how-payments-work/", label: "How payments & transfers fit together" },
      },
      {
        title: "I want the lowest monthly cost",
        setup: "hybrid" as const,
        why: "Big banks sometimes offer a simple cheap current account; app banks often sell monthly plans with tiers. What is cheapest depends on what you actually use.",
        watchOut:
          "Do not trust a big “free” banner alone. Add up monthly plans, cards, cash machines, and foreign money using today’s PDF from the bank.",
        link: { href: BEST_BANKS_EXPATS_PATH, label: "See shortlist & comparison table" },
      },
      {
        title: "I am staying long-term",
        setup: "traditional" as const,
        why: "Mortgages, joint accounts, and household money over many years often sit more naturally with a full-service Dutch bank — when you need those products.",
        watchOut:
          "Long-term does not mean one bank for life. Recheck when you buy a home, start a company, or change jobs.",
        link: { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
      },
      {
        title: "I want a backup account",
        setup: "hybrid" as const,
        why: "A second bank (often big Dutch + app) means a spare card and another way to pay if signup, blocks, or mail delays hit your main account.",
        watchOut:
          "Two banks can mean two monthly fees if you are not careful — only keep accounts you watch and use.",
        link: { href: `${TRADITIONAL_VS_DIGITAL_BANKS_PATH}#hybrid-setup`, label: "Hybrid setup on this page" },
      },
    ],
  },

  tradeoffs: {
    id: "tradeoffs",
    eyebrow: "Trade-offs",
    title: "Common trade-offs",
    cards: [
      { title: "Speed vs depth of help", body: "Very fast signup can come with less hand-holding for unusual problems — slower banks sometimes offer more local products in one place." },
      { title: "Low fees vs someone to talk to", body: "Very cheap plans often cut back on human support — decide what calm is worth to you." },
      { title: "Travel money vs Dutch direct payments", body: "Great exchange rates do not automatically fix every Dutch automatic payment setup." },
      { title: "App-only vs branch or phone", body: "If you want to walk into a branch, check that exists before you rely on chat-only help." },
      { title: "One account vs a spare", body: "Moving week is stressful — a second card can help even if you merge to one bank later." },
    ],
  },

  misconceptions: {
    id: "misconceptions",
    eyebrow: "Reality check",
    title: "What people often get wrong",
    cards: bankingCommonMistakes.map((m) => ({ title: m.title, body: m.body })),
  },

  related: {
    id: "related",
    title: "Related tools and guides",
    subtitle: "Use the same common-sense checks when you jump from this page to tools and other guides.",
    items: bankingRelatedGuides.map((g) => ({
      title: g.title,
      description: g.description,
      href: g.href,
      ctaLabel: g.ctaLabel,
    })),
  },

  faq: bankingTraditionalDigitalFaq.map((f) => ({ q: f.q, a: f.a })),

  officialSources: {
    sectionId: "official-sources",
    sectionTitle: "Official sources",
    disclaimer:
      "These links help you read who supervises banks, how deposit protection is explained in plain EU language, and how payment schemes work. They do not replace the terms for your account at your bank.",
    groups: [
      {
        id: "supervision",
        title: "Supervision & stability",
        links: [
          { type: "external" as const, label: "De Nederlandsche Bank (DNB)", href: "https://www.dnb.nl/en/" },
          { type: "external" as const, label: "European Banking Authority — consumer topics", href: "https://www.eba.europa.eu/" },
        ],
      },
      {
        id: "deposit",
        title: "Deposit guarantee (orientation)",
        links: [
          {
            type: "external" as const,
            label: "Your Europe — bank accounts & payments (EU consumer orientation)",
            href: "https://europa.eu/youreurope/citizens/consumers/financial-products-and-services/bank-accounts-and-payments/index_en.htm",
          },
        ],
      },
      {
        id: "payments",
        title: "Payments & schemes",
        links: [
          { type: "external" as const, label: "iDEAL (scheme overview)", href: "https://www.ideal.nl/en/" },
          { type: "external" as const, label: "European Payments Council — SEPA", href: "https://www.europeanpayments.eu/" },
        ],
      },
    ],
  } satisfies MoveVisaResidencyReferences,
};

export type TraditionalVsDigitalBanksPageModel = typeof traditionalVsDigitalBanksPageModel;

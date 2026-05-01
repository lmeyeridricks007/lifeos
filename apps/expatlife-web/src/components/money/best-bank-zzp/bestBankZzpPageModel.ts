import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";
import { BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH } from "@/src/data/banking/bankingTraditionalDigitalContent";
import type { BankId } from "@/src/data/banking/banks";
import { bankingFreelancerScenarios } from "@/src/data/banking/bankingFreelancerScenarios";
import type { ZzpComparisonEditorial } from "@/components/banking/ZZPComparisonTable";

export const BEST_BANK_ZZP_PATH = "/netherlands/money/banking/best-bank-zzp/" as const;

export const zzpFreelancerComparisonBankIds = ["ing", "abn-amro", "rabobank", "bunq", "revolut", "n26"] as const satisfies readonly BankId[];

export const zzpFreelancerComparisonEditorial: Record<(typeof zzpFreelancerComparisonBankIds)[number], ZzpComparisonEditorial> = {
  ing: {
    invoicingTools: "Business plans often include sending invoices and reports — check ING’s site to see what each package includes.",
    integrations: "Check that your bookkeeping app can connect to the business product you want.",
    internationalUse: "Fine for everyday euros in Europe; spending in other currencies follows the bank’s fee rules.",
    bestForFreelancers: "Good when clients or your accountant expect a well-known Dutch bank name.",
    watchOut: "Business and personal accounts have different prices — don’t assume the personal app covers everything you need for work.",
  },
  "abn-amro": {
    invoicingTools: "Business pages describe invoicing and downloads — compare with what your bookkeeper needs.",
    integrations: "Features differ by plan — ask if you need simple spreadsheet downloads or a specific statement style.",
    internationalUse: "Fees for cards and money sent abroad depend on the product — read the part about non-euro use.",
    bestForFreelancers: "Helpful if you want business banking with branch staff you can speak to in person.",
    watchOut: "Costs can jump when you add business cards or extra users — picture a full year before you choose.",
  },
  rabobank: {
    invoicingTools: "Business packages describe payment requests and statements — check the current business pages.",
    integrations: "Confirm you can download or connect data the way your bookkeeper expects.",
    internationalUse: "Fees depend on the card and transfer products — compare with the currencies your clients use.",
    bestForFreelancers: "A fit if you already bank with Rabobank for business or like their style of service.",
    watchOut: "Like other big banks: check business prices early if you are registered with the Chamber of Commerce.",
  },
  bunq: {
    invoicingTools: "App-led flows for payment links and business tabs — read limits and plan names on bunq’s site.",
    integrations: "What you can download or connect varies by subscription — match that to how your accountant works.",
    internationalUse: "Often handy for several currencies; still check that Dutch billers accept the account you rely on.",
    bestForFreelancers: "People who live in the app and like clear plan levels.",
    watchOut: "Paid plans and usage rules can move the real cost away from the headline — read updates when plans change.",
  },
  revolut: {
    invoicingTools: "Business and personal products are not the same — check that invoicing matches how your business is set up.",
    integrations: "Some plans offer more automation than others — confirm the features you need are available in the Netherlands.",
    internationalUse: "Popular when you often deal in other currencies; compare how much money actually arrives next to your Dutch account.",
    bestForFreelancers: "People who earn across borders and pair a Dutch day-to-day account with Revolut for travel and currency.",
    watchOut: "Some employers and Dutch billers still prefer a familiar Dutch everyday account — confirm if that matters to you.",
  },
  n26: {
    invoicingTools: "Business plans describe statements and pots for splitting money — check N26’s help pages for invoicing.",
    integrations: "Downloads and sorting features depend on the plan — match the plan to your bookkeeping app.",
    internationalUse: "Using the card abroad or outside the euro can add fees — read the fee table for foreign use.",
    bestForFreelancers: "Solo freelancers who want a simple EU bank next to a Dutch main account.",
    watchOut: "Same two-account idea as other app banks — keep Dutch rent and bills on the Dutch account you trust.",
  },
};

export const bestBankZzpPageModel = {
  path: BEST_BANK_ZZP_PATH,
  publishDate: "2026-04-30",

  seo: {
    title: "Best Bank for Freelancers (ZZP) in the Netherlands | ExpatCopilot",
    description:
      "Plain guide for freelancers in the Netherlands: common bank setups, when a business account helps, how to compare banks fairly, and what to check on each bank’s website.",
    keywords: [
      "best bank zzp netherlands",
      "freelancer bank account netherlands",
      "zakelijke rekening zzp",
      "business bank account netherlands",
      "self employed bank account netherlands",
    ],
  },

  heroImage: {
    src: "/images/heroes/netherlands-best-bank-zzp-freelancer-hero.png",
    alt: "Home office desk with laptop, papers, pen, and a bank card in daylight — freelancer banking guide",
    width: 1200,
    height: 630,
  },

  sectionNav: [
    { href: "#quick-answer", label: "Four common setups" },
    { href: "#need-business-account", label: "Business account?" },
    { href: "#account-types", label: "Kinds of accounts" },
    { href: "#typical-freelancer-setup", label: "Typical setup" },
    { href: "#freelancer-shortlist", label: "Banks to compare" },
    { href: "#cheapest-vs-value", label: "Three ways to choose" },
    { href: "#comparison", label: "Compare banks" },
    { href: "#common-mistakes", label: "Common slips" },
    { href: "#example-setups", label: "Real-life examples" },
    { href: "#recommended-options", label: "Useful links" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Best Bank for Freelancers (ZZP) in the Netherlands",
    subtitle:
      "Easy read for freelancers and self-employed people in the Netherlands: which bank setups people really use, how to compare banks without marketing noise, and what to check with your bank and accountant.",
    contextChips: ["For planning only", "Not tax or legal advice", "Check each bank’s site"] as const,
    trustLine:
      "We do not name one bank that wins for everyone. Products and prices change — use this page to see what matters to you, then check every detail on the bank’s own website (and with your accountant if you are unsure).",
    bullets: [
      "See when a separate business account usually makes life easier",
      "Compare big Dutch banks and app-based banks in one place",
      "Keep grocery-and-rent money separate from client payments",
      "Pick a setup that fits how you get paid and how you do your taxes",
    ] as const,
    primaryCta: { label: "Compare banks in the table", href: "#comparison" },
    secondaryCta: { label: "Start with four common setups", href: "#quick-answer" },
    heroQuickLinks: [
      { label: "Do I need a business account?", href: "#need-business-account" },
      { label: "Kinds of bank accounts", href: "/netherlands/money/banking/types-of-accounts/" },
      { label: "Banking fees", href: BANKING_FEES_PAGE_PATH },
      { label: "Best banks for expats", href: BEST_BANKS_EXPATS_PATH },
      { label: "Traditional vs digital", href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH },
    ] as const,
  },

  quickAnswer: {
    id: "quick-answer",
    eyebrow: "Start here",
    title: "Four setups people actually use",
    subtitle: "Pick the block that sounds like you — then read on to see if it still fits. Your bank and accountant have the final say.",
    cards: [
      {
        title: "Very small side income",
        bullets: [
          "Many people start with one personal account if the amounts are tiny and they note what is for work",
          "Open a business account before invoices, sales tax, or tax time get messy — don’t wait until December",
        ] as const,
      },
      {
        title: "Personal + business (most common)",
        bullets: [
          "Personal account for rent, food, subscriptions, and private life",
          "Business account for client money, sales tax lines, and files your bookkeeper can open without rework",
        ] as const,
      },
      {
        title: "Lots of paperwork or software",
        bullets: [
          "Business account with clearer invoicing or a link to the bookkeeping app you use",
          "Often used together with software your bookkeeper already likes — try a sample download before you lock in",
        ] as const,
      },
      {
        title: "Dutch account + international app",
        bullets: [
          "Dutch account number for local clients, rent, and automatic bill payments",
          "A second app for travel, clients in other currencies, or a lot of currency switching — keep work and private money mentally separate",
        ] as const,
      },
    ],
  },

  needBusinessAccount: {
    id: "need-business-account",
    eyebrow: "Clarity first",
    title: "Do freelancers need a business bank account?",
    lead:
      "Short answer: many freelancers get one — not because we say you must, but because keeping private life separate from client money makes taxes and bookkeeping simpler. Dutch banks sell business packages apart from personal ones; whether you need a business account depends on your situation, the bank’s rules, and sales tax (BTW). If you are unsure, ask your accountant and read the bank’s business terms before you pay groceries from the same pot as invoice income.",
    prosCard: {
      title: "Why a business account is usually worth it",
      body: "Private spending stays separate from work income, sales tax and income tax are easier to prepare, checks go more smoothly, Dutch clients see tidy invoices, and the bank’s price list matches how they expect self-employed activity to run.",
    },
    consCard: {
      title: "Downsides to expect",
      body: "Extra monthly or add-on fees, another app to watch, a few more steps when you sign up for business banking, and the habit of moving money on purpose between accounts instead of mixing everything on one card.",
    },
  },

  accountTypes: {
    id: "account-types",
    eyebrow: "Bank wording",
    title: "Kinds of accounts for freelancers",
    subtitle: "Short names banks use — our full guide walks through each kind in more detail.",
    accountTypeIds: ["current-account", "business-account", "digital-account", "multi-currency-account", "zzp-freelancer"] as const,
  },

  typicalFreelancerSetup: {
    id: "typical-freelancer-setup",
    eyebrow: "Simple picture",
    title: "The setup most freelancers end up using",
    intro:
      "Picture three layers: private spending on a personal account, work income and costs on a business account, and — only if you need it — an extra app for travel or money in other currencies. Names and bundles differ by bank; always read the bank’s own page before you apply.",
    pillars: [
      {
        id: "personal",
        step: "01",
        chip: "Personal",
        headline: "Personal account (life)",
        body: "Rent, groceries, subscriptions, and private bills on a normal personal account — not where client payments should land.",
      },
      {
        id: "business",
        step: "02",
        chip: "Business",
        headline: "Business account (work money)",
        body: "Sales, invoices, sales-tax lines, and downloads your bookkeeper expects — most accountants want this kept apart from private spending.",
      },
      {
        id: "optional-digital",
        step: "03",
        chip: "Optional",
        headline: "Extra app (abroad / other currencies)",
        body: "Travel, clients in other currencies, or extra cards in an app-based bank — usually on top of your main Dutch account, not instead of it.",
      },
    ],
    cta: { label: "Compare banking options", href: "#comparison" as const },
  },

  freelancerShortlist: {
    id: "freelancer-shortlist",
    eyebrow: "Where to start",
    title: "Banks freelancers often compare first",
    subtitle:
      "ING, ABN AMRO, Rabobank, bunq, Revolut, N26, and Wise for some sends in other currencies — short notes from us, not a ranked winner.",
  },

  comparison: {
    id: "comparison",
    eyebrow: "Compare",
    title: "Compare banks at a glance",
    subtitle: "Our notes for orientation — not live prices or who can open an account.",
    howToReadTitle: "How to use this table",
    intro:
      "Each row is a bank; each column answers a simple question for freelancers. Use the cells as reminders — if something matters to you, check the exact wording on that bank’s website.",
    howToRead: [
      "Pick a few banks from the list above (or add your own).",
      "Read the columns you care about first — you can come back for the rest.",
      "Before you apply, open the bank’s business account page and read today’s fees and limits.",
    ] as const,
  },

  cheapestVsValue: {
    id: "cheapest-vs-value",
    eyebrow: "Trade-offs",
    title: "Cheapest vs best value — what sounds like you?",
    subtitle: "Three common attitudes. Pick the closest match, then use the comparison table to narrow banks.",
    cards: [
      {
        title: "Lowest monthly cost",
        setup: "digital" as const,
        why: "One personal account with the lowest fee can feel fine when almost no client money moves through it.",
        watchOut: "Once you send invoices often or deal with sales tax, one card for everything gets stressful quickly.",
        link: { href: BANKING_FEES_PAGE_PATH, label: "Read banking fees" },
      },
      {
        title: "Balanced (what most people pick)",
        setup: "hybrid" as const,
        why: "Personal account for life, business account for work — simple for you and your accountant to explain.",
        watchOut: "Two apps means a small weekly habit: know what went where so tax time is not a scramble.",
        link: { href: "/netherlands/money/banking/types-of-accounts/", label: "Review kinds of accounts" },
      },
      {
        title: "More features, higher cost",
        setup: "traditional" as const,
        why: "Better invoicing, downloads, or human support can save time when you have many clients or currencies.",
        watchOut: "Worth it only if you will really use those extras — once a year, ask if you still need them.",
        link: { href: BEST_BANKS_EXPATS_PATH, label: "Compare banks" },
      },
    ],
  },

  commonMistakes: {
    id: "common-mistakes",
    eyebrow: "Reality check",
    title: "Common mistakes freelancers make",
    cards: [
      { title: "Mixing personal and work money", body: "One card for groceries and client pay makes sales tax and income proofs painful — split early even if it feels like extra work." },
      { title: "Choosing cheapest only", body: "The lowest monthly fee can cost more once you add currency fees, app links, or hours fixing messy downloads — think about a full year including your time." },
      { title: "Skipping invoicing checks", body: "If clients expect tidy payment requests, check the bank or app supports how you work before you send them there." },
      { title: "Not tracking sales tax (BTW)", body: "Quarterly returns need clear categories — pick a bank that can give your accountant files they can use without rebuilding everything by hand." },
      { title: "Ignoring international transfer costs", body: "A nice-looking app can still charge a lot per transfer — compare how much money arrives, not ads." },
      { title: "Not planning for tax bills", body: "Set money aside for income tax and BTW on a schedule you can keep — your setup should make that easy to see, not buried on a personal card." },
      { title: "Using only one account", body: "Many sound setups use a Dutch main account plus a second app — check what each client and biller actually needs." },
    ],
  },

  exampleSetups: {
    id: "example-setups",
    eyebrow: "Examples",
    title: "Which situation sounds like you?",
    subtitle: "Stories to learn from, not personal advice — skim a title, open one card, then check the table and each bank’s site.",
    scenarios: bankingFreelancerScenarios,
  },

  recommendedProviders: {
    sectionId: "recommended-options",
    eyebrow: "Optional",
    title: "Bank websites and partner listings",
    subtitle: "Below the main guide. Links go to banks or partners; fees and rules are always on their own sites.",
    optionsRegionIntroLabel: "Partner listings",
    disclaimer: "Products and prices change. Read the current fee page before you open or change an account.",
    groups: [
      {
        title: "Traditional Dutch banks",
        placementId: "nl-money-cheapest-accounts-traditional",
        boundaryNote:
          "Well-known Dutch accounts for clients who like a big bank name on invoices — check business packages and download formats on each site.",
        analyticsPageContext: "best-bank-zzp-recommended-traditional",
        categoryLinks: [
          { href: BEST_BANKS_EXPATS_PATH, label: "Compare banks" },
          { href: "/netherlands/open-bank-account-netherlands/", label: "Open bank account guide" },
        ],
      },
      {
        title: "Digital banks",
        placementId: "nl-money-cheapest-accounts-digital",
        boundaryNote: "Sign-up in the app and paid plan levels — check what counts as business vs personal before you send invoices.",
        analyticsPageContext: "best-bank-zzp-recommended-digital",
        categoryLinks: [
          { href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH, label: "Traditional vs digital" },
          { href: BANKING_FEES_PAGE_PATH, label: "Understand fees" },
        ],
      },
      {
        title: "International / multi-currency",
        placementId: "nl-money-cheapest-accounts-transfers",
        boundaryNote: "Wise and similar tools for sending money across currencies — usually next to a Dutch main account, not replacing it.",
        analyticsPageContext: "best-bank-zzp-recommended-transfers",
        categoryLinks: [
          { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work" },
          { href: "/netherlands/living/payments/", label: "Living: payments hub" },
        ],
      },
    ],
  },

  faq: [
    {
      q: "Do freelancers need a business bank account in the Netherlands?",
      a: "Not always, but banks sell business products separately for a reason. Most freelancers who send invoices, charge sales tax (BTW), or want tidy year-end paperwork eventually open a business account (in Dutch you often see zakelijke rekening). Check with your bank and accountant — we do not give legal advice here.",
    },
    {
      q: "What is a zakelijke rekening?",
      a: "It is a business current account in the Netherlands — its own price list and usually clearer invoicing and downloads than a normal personal account. Banks use slightly different names, but the idea is one place for money that belongs to your work.",
    },
    {
      q: "Can I use a personal account as a freelancer?",
      a: "Some people start that way when amounts are very small, but it gets harder as invoices and sales tax grow. Mixing private and work spending slows bookkeeping and can make checks awkward. Ask your accountant before one personal card carries everything.",
    },
    {
      q: "Which bank is best for freelancers?",
      a: "There is no single best bank for everyone — clients, currencies, apps, and how much help you want all differ. Use the table on this page and our Best banks for expats guide, then confirm products on each bank’s own website.",
    },
    {
      q: "What are typical banking costs for ZZP?",
      a: "Expect a business package fee (sometimes bundled with other things), card and payment fees, possible charges when you use other currencies, and paid levels if you need extra app links. Prices change — read the current fee list for the product you can actually open.",
    },
    {
      q: "Do I need separate accounts for tax?",
      a: "You need clear records either way. Many freelancers use a business account so money for sales tax and income tax does not sit mixed with grocery spending. Your accountant can suggest how often to move money; the bank only gives you the accounts.",
    },
    {
      q: "Which bank is best for international clients?",
      a: "Use each bank’s own calculators and compare how much money really arrives in each currency, then decide if a Dutch main account plus a second app suits you better than one product that claims to do everything. It depends on your clients and amounts — not on a slogan.",
    },
  ],

  officialSources: {
    sectionId: "official-sources",
    sectionTitle: "Official sources",
    disclaimer:
      "The Chamber of Commerce and the Tax Administration set rules for registration and tax; the central bank explains oversight in broad terms. None of this replaces reading your bank’s contract.",
    groups: [
      {
        id: "kvk",
        title: "Chamber of Commerce (KvK)",
        links: [{ type: "external" as const, label: "KvK — business register (English)", href: "https://www.kvk.nl/en/" }],
      },
      {
        id: "tax",
        title: "Dutch Tax Administration (Belastingdienst)",
        links: [{ type: "external" as const, label: "Belastingdienst — entrepreneurs", href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/tax-topics" }],
      },
      {
        id: "dnb",
        title: "Banking supervision (DNB)",
        links: [{ type: "external" as const, label: "De Nederlandsche Bank (DNB)", href: "https://www.dnb.nl/en/" }],
      },
      {
        id: "more",
        title: "More on ExpatCopilot",
        links: [
          { type: "internal" as const, label: "Netherlands banking hub", href: "/netherlands/money/banking/" },
          { type: "internal" as const, label: "Types of bank accounts", href: "/netherlands/money/banking/types-of-accounts/" },
          { type: "internal" as const, label: "Best banks for expats (comparison)", href: BEST_BANKS_EXPATS_PATH },
        ],
      },
    ],
  } satisfies MoveVisaResidencyReferences,
} as const;

export type BestBankZzpPageModel = typeof bestBankZzpPageModel;

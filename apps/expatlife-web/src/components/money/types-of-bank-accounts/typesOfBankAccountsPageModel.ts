import type { AccountTypeComparisonPair } from "@/components/banking/AccountTypeComparisonCards";
import type { PaymentFlowStep } from "@/components/banking/PaymentFlowVisual";
import type { AccountSetupScenarioCardVm } from "@/components/banking/AccountSetupScenarioCards";
import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import type { BankingAccountRelatedGuideKey } from "@/src/data/banking/accountTypes";
import {
  bankingAccountQuickAnswerProfiles,
  bankingAccountTypes,
  joinBankingAccountBullets,
  resolveBankingGuideLinks,
} from "@/src/data/banking/accountTypes";
import { typesOfBankAccountsMistakes } from "@/src/data/banking/typesOfBankAccountsContent";

export const TYPES_OF_BANK_ACCOUNTS_PATH = "/netherlands/money/banking/types-of-accounts/" as const;
export const BEST_BANKS_PATH = "/netherlands/money/banking/best-banks-expats/" as const;
export const FEES_PATH = "/netherlands/money/banking/fees/" as const;
export const TRAD_DIG_PATH = "/netherlands/money/banking/traditional-vs-digital/" as const;

function linksToCtaAndMore(links: readonly { href: string; label: string }[]) {
  const [first, ...rest] = links;
  return {
    cta: first ? ({ href: first.href, label: first.label } as const) : undefined,
    moreLinks: rest as readonly { href: string; label: string }[],
  };
}

/** Resolved for {@link AccountSetupScenarioCards} (quick-answer band). */
const quickAnswerSetupScenarios: readonly AccountSetupScenarioCardVm[] = bankingAccountQuickAnswerProfiles.map((p) => {
  const links = resolveBankingGuideLinks(p.relatedGuideKeys);
  const { cta, moreLinks } = linksToCtaAndMore(links);
  return {
    id: p.id,
    title: p.title,
    recommendedSetup: joinBankingAccountBullets(p.recommendedSetup),
    why: p.why,
    watchOut: joinBankingAccountBullets(p.watchOuts),
    cta,
    moreLinks,
  };
});

const accountTypeComparisonPairs = [
  {
    id: "current-vs-savings",
    title: "Everyday vs savings",
    leftTitle: "Everyday account (betaalrekening)",
    leftBody:
      "This is where your pay lands, rent leaves, and you pay most shops. You usually get a bank card for daily spend. Prices and card rules differ by bank.",
    rightTitle: "Savings account (spaarrekening)",
    rightBody:
      "A separate pot next to your everyday account for goals or a buffer. How much interest you earn and how often you can move money out changes over time. It is not the same as investing.",
  },
  {
    id: "joint-vs-individual",
    title: "Shared vs just yours",
    leftTitle: "Account in your name only",
    leftBody:
      "Your own account number for pay, your bills, and your subscriptions. Most people start here if they do not need one shared balance with someone else.",
    rightTitle: "Shared household account",
    rightBody:
      "One balance that two or more people can use for bills you agree on, such as rent or groceries. Read the bank’s rules on who can move money and what happens if someone moves out.",
  },
  {
    id: "personal-vs-business",
    title: "Private life vs work for yourself",
    leftTitle: "Personal account",
    leftBody:
      "Day-to-day private spending and salary from a job. Most employees only need this type for groceries, rent, and normal life.",
    rightTitle: "Business-style account",
    rightBody:
      "For client invoices, sales tax (VAT), and tidy records if you work for yourself or run a company. Fees and rules differ from a personal account. Your bank and your accountant can tell you if you need one.",
  },
  {
    id: "digital-vs-traditional",
    title: "App bank vs high-street bank",
    leftTitle: "Banks with branches",
    leftBody:
      "Large Dutch names people recognise, with offices and phone lines. Some employers and landlords are used to them. Always read the price list on the bank’s own website.",
    rightTitle: "App-first banks",
    rightBody:
      "Often quick to open from your phone and handy for travel. Check how your money is protected, whether your pay and rent can go to this account, and what help you get if something breaks.",
  },
] as const satisfies readonly AccountTypeComparisonPair[];

/** Practical “stacks” — distinct from the mid-page expat scenario list. */
const commonExpatAccountSetupsSource = [
  {
    id: "simple-employee",
    title: "Simple employee setup",
    setupLines: [
      "Dutch everyday account (betaalrekening) for pay and bills",
      "optional savings for a buffer or goals",
      "optional second app account if you want a spare card or travel spend",
    ],
    whyItWorks:
      "Matches how most Dutch employers pay you and how landlords expect rent. You can use the usual Dutch online checkout (iDEAL) from this account.",
    whatToAvoid: [
      "Relying only on a foreign card if your job or home needs automatic Dutch payments or a Dutch account number.",
      "Picking a package only because the monthly price looks low — also check cards, cash, and use abroad on the bank’s site.",
    ],
    relatedGuideKeys: ["best-banks-expats", "open-bank-account", "banking-fees", "traditional-vs-digital"] as const satisfies readonly BankingAccountRelatedGuideKey[],
  },
  {
    id: "family",
    title: "Family setup",
    setupLines: [
      "Separate everyday accounts for each adult’s personal spend",
      "optional shared account for rent, utilities, or childcare you agree to split",
      "optional savings beside everyday accounts if you like a clear emergency pot",
    ],
    whyItWorks:
      "Everyone keeps their own pocket money clear, and the household has one place for bills you share.",
    whatToAvoid: [
      "Opening a shared account before you agree who can move money, whether you can borrow on the account, and what happens if someone leaves.",
      "Putting all pay into shared first — many families keep salaries in personal accounts and transfer a fixed amount for shared costs.",
    ],
    relatedGuideKeys: ["living-payments", "open-bank-account", "best-banks-expats"] as const satisfies readonly BankingAccountRelatedGuideKey[],
  },
  {
    id: "international",
    title: "International setup",
    setupLines: [
      "Dutch everyday account for pay, housing, and life here",
      "app or multi-currency account for travel or sending money across borders",
      "a transfer option you trust when amounts or timing really matter",
    ],
    whyItWorks:
      "Keeps what works day to day in the Netherlands separate from what you use abroad. Many people use a Dutch account for life here and an app for trips or currency.",
    whatToAvoid: [
      "Assuming one brand does everything — when it matters, confirm with employer, landlord, or insurer in writing.",
      "Ignoring fees when you use two products — check monthly and per-use prices on both.",
    ],
    relatedGuideKeys: ["traditional-vs-digital", "living-payments", "best-banks-expats", "banking-fees"] as const satisfies readonly BankingAccountRelatedGuideKey[],
  },
  {
    id: "freelancer-zzp",
    title: "Freelancer setup",
    setupLines: [
      "Personal everyday account for private life",
      "separate business-style account that fits invoicing and VAT (sales tax) rhythm",
      "exports or tags your bookkeeper recognises",
    ],
    whyItWorks:
      "Turnover stays away from grocery shopping, so quarterly VAT and year-end paperwork are easier.",
    whatToAvoid: [
      "Sending client payments to a personal account because it was quicker — your bank’s rules and tax rules may not allow it.",
      "Skipping the business price list — per-payment fees add up when you have many transactions.",
    ],
    relatedGuideKeys: ["employment-type-tool", "tax-advisors", "best-banks-expats", "banking-fees"] as const satisfies readonly BankingAccountRelatedGuideKey[],
  },
  {
    id: "student",
    title: "Student setup",
    setupLines: [
      "low-cost or student everyday account if you meet the bank’s rules",
      "optional app account for a second path while paperwork catches up",
      "small savings only if you already have steady income and want a buffer",
    ],
    whyItWorks:
      "Fits tight budgets but still matches real life: longer stays usually need a proper Dutch everyday account for housing and university money.",
    whatToAvoid: [
      "Underestimating how long citizen service number (BSN), address, and ID take — missed paperwork beats a clever app stack.",
      "Treating a short trip card pattern as enough for a full year of local bills.",
    ],
    relatedGuideKeys: ["student-visa", "first-30-days", "traditional-vs-digital", "banking-fees"] as const satisfies readonly BankingAccountRelatedGuideKey[],
  },
] as const;

const commonExpatAccountSetupCards: readonly AccountSetupScenarioCardVm[] = commonExpatAccountSetupsSource.map((row) => {
  const links = resolveBankingGuideLinks(row.relatedGuideKeys);
  const { cta, moreLinks } = linksToCtaAndMore(links);
  return {
    id: row.id,
    title: row.title,
    recommendedSetup: joinBankingAccountBullets(row.setupLines),
    why: row.whyItWorks,
    watchOut: joinBankingAccountBullets(row.whatToAvoid),
    cta,
    moreLinks,
  };
});

export const typesOfBankAccountsPageModel = {
  path: TYPES_OF_BANK_ACCOUNTS_PATH,
  publishDate: "2026-04-28",

  seo: {
    title: "Types of Bank Accounts in the Netherlands | ExpatCopilot",
    description:
      "Plain-language guide for expats: everyday accounts, savings, shared accounts, student offers, self-employed banking, and app banks. For learning only — not personal advice. Check each bank’s website for prices and rules.",
    keywords: [
      "types of bank accounts netherlands",
      "dutch bank account types",
      "betaalrekening spaarrekening explained",
      "bank account for expats netherlands",
      "business bank account zzp netherlands",
      "joint account netherlands",
    ],
  },

  heroImage: {
    src: "/images/heroes/netherlands-banking-types-of-accounts-hero.png",
    alt: "Netherlands banking desk with laptop and documents — editorial hero for types of bank accounts on ExpatCopilot",
    width: 1536,
    height: 1024,
  },

  sectionNav: [
    { href: "#quick-answer", label: "Which account do you need?" },
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#account-type-overview", label: "Account types" },
    { href: "#account-money-flow", label: "How money moves" },
    { href: "#account-type-comparisons", label: "Quick comparisons" },
    { href: "#banking-words-hub", label: "Banking words" },
    { href: "#common-expat-setups", label: "Common setups" },
    { href: "#plain-english-extra", label: "In practice" },
    { href: "#mistakes", label: "Common mistakes" },
    { href: "#related", label: "Related guides" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Types of Bank Accounts in the Netherlands",
    subtitle:
      "Plain-language tour of everyday accounts, savings, shared accounts, student offers, work-for-yourself banking, app banks, and cards. We explain words you see on bank sites. This page is for learning only, not personal financial advice.",
    contextChips: ["Explains account types", "Not personal advice", "Check each bank’s site"],
    trustLine:
      "We do not pick a bank for you. For tax or legal questions, speak with a qualified professional.",
    trustVariabilityNote:
      "Banks rename bundles often. If the wording on the bank’s site differs from this page, follow the live product page and PDF you are offered at signup.",
    bullets: [
      "Dutch labels in one place: betaalrekening (everyday), spaarrekening (savings), shared, student, and business-style accounts.",
      "Typical ways people split pay, rent, savings, and self-employed money across one or two banks.",
      "After you know what you need, compare fees and features on each bank’s own website.",
    ] as const,
    primaryCta: { label: "Which setup fits me?", href: "#quick-answer" },
    secondaryCta: { label: "Compare banks", href: BEST_BANKS_PATH },
    heroQuickLinks: [
      { label: "How payments work", href: "/netherlands/money/banking/how-payments-work/" },
      { label: "Banking fees & costs", href: FEES_PATH },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Traditional vs digital banks", href: TRAD_DIG_PATH },
    ] as const,
  },

  quickAnswer: {
    id: "quick-answer",
    eyebrow: "Quick answer",
    title: "Which account do you need?",
    subtitle: "Six common starting patterns — not one bank that suits everyone. Adjust to your job, home, and whether you invoice clients.",
    cards: quickAnswerSetupScenarios,
  },

  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "What this page covers and where to go when you want step-by-step help to open an account.",
    cells: [
      {
        title: "What this page is for",
        bullets: [
          "Explains Dutch account names you see in English or Dutch (everyday, savings, shared, student, business) and what people use them for.",
        ] as const,
      },
      {
        title: "Best for",
        bullets: [
          "Anyone opening a first or second account, couples sharing costs, students, or people who work for themselves and need a tidy split for invoices.",
        ] as const,
      },
      {
        title: "What it covers",
        bullets: [
          "Account types, cards at a glance, app banks versus high-street banks, and example setups with links to longer guides.",
          "We focus on education. For live prices and rules, use each bank’s official site.",
        ] as const,
      },
      {
        title: "What it skips",
        bullets: [
          "Live price quotes, mortgage advice, investment picks, and personal tax answers — use a specialist when you need those.",
        ] as const,
      },
    ],
    note: "This page explains types of accounts and how people combine them. For documents, BSN timing, and opening steps, use Move → Open a bank account in the Netherlands.",
  },

  accountOverview: {
    id: "account-type-overview",
    eyebrow: "Overview",
    title: "Main Dutch bank account types",
    subtitle: "Cards below list common products. Exact names and bundles differ by bank.",
    accountTypes: bankingAccountTypes,
  },

  accountMoneyFlow: {
    id: "account-money-flow",
    eyebrow: "Visual",
    title: "How money usually moves",
    subtitle: "A simple picture of what most people do with an everyday account — not a rule, just a common pattern.",
    flowLabel: "Typical flow from pay to bills using a Dutch everyday account",
    steps: [
      { id: "in", title: "Pay arrives", description: "Your employer pays into your everyday account unless you agreed something else." },
      { id: "split", title: "You split if you want", description: "Some people move a fixed amount to savings or a shared household account." },
      { id: "out", title: "Bills go out", description: "Rent, utilities, and subscriptions often leave automatically from the same account." },
      { id: "spend", title: "Daily spend", description: "Groceries, transport, and Dutch online shops usually draw from your everyday account and card." },
    ] satisfies readonly PaymentFlowStep[],
  },

  accountTypeComparisons: {
    id: "account-type-comparisons",
    eyebrow: "Pairs",
    title: "How account types differ",
    subtitle: "Short side-by-side notes. Always confirm the product name and price list on the bank’s website before you sign.",
    pairs: accountTypeComparisonPairs,
  },

  glossaryTeaser: {
    id: "banking-words-hub",
    eyebrow: "Definitions",
    title: "Banking words without the jargon",
    body: "Short explanations for labels like betaalrekening, iDEAL, and other terms live on the Banking hub glossary — handy when a form or banker uses a word you have not seen before.",
    ctaHref: "/netherlands/money/banking/#banking-glossary-hub",
    ctaLabel: "Open glossary on Banking hub",
  },

  plainEnglishCloser: {
    id: "plain-english-extra",
    eyebrow: "In practice",
    title: "A few habits that work well",
    subtitle: "Three patterns that match how most people bank in the Netherlands — not rules, just what tends to work smoothly.",
    insights: [
      {
        title: "Run daily life from your betaalrekening",
        body: "This is the everyday account: pay arrives, rent and subscriptions leave, and most Dutch online checkouts (often called iDEAL) run from here.",
      },
      {
        title: "Share an account only when it helps",
        body: "You only need one balance for rent or groceries if that is what you want. Many couples keep personal accounts and transfer a fixed amount for shared costs instead.",
      },
      {
        title: "Keep freelance money where your bank expects it",
        body: "If you send invoices in your own name, ask your accountant whether you should use a business-style account. Rules depend on your bank and how you work.",
      },
    ] as const,
  },

  commonExpatAccountSetups: {
    id: "common-expat-setups",
    eyebrow: "Practical stacks",
    title: "Common account setups for expats",
    subtitle:
      "Most people use more than one product, not a single magic account. These examples match how people handle pay, rent, family money, and freelance admin in real life.",
    cards: commonExpatAccountSetupCards,
  },

  mistakes: {
    id: "mistakes",
    eyebrow: "Watch-outs",
    title: "Common mistakes",
    subtitle: "Things that go wrong when people sign up in a hurry or mix up account types.",
    cards: typesOfBankAccountsMistakes,
  },

  relatedTools: {
    id: "related",
    eyebrow: "Keep exploring",
    title: "Related guides",
    subtitle: "Once you know which account types you need, use these pages for fees, how paying works here, and planning tools.",
    cards: [
      { title: "Best banks for expats", description: "Plain-language comparison after you know what kind of account you want.", href: BEST_BANKS_PATH, ctaLabel: "Open guide" },
      { title: "Traditional vs digital banks", description: "When people use high-street banks, apps, or both together.", href: TRAD_DIG_PATH, ctaLabel: "Read guide" },
      { title: "Banking fees and costs", description: "A simple checklist of fees before you pick a package.", href: FEES_PATH, ctaLabel: "Open fee guide" },
      { title: "Open a bank account in the Netherlands", description: "Move guide: papers, citizen service number timing, and sensible order of steps.", href: "/netherlands/open-bank-account-netherlands/", ctaLabel: "Move guide" },
      { title: "How payments work", description: "Account numbers, Dutch online checkout, and paying rent and salary in plain language.", href: "/netherlands/money/banking/how-payments-work/", ctaLabel: "Open guide" },
      { title: "Employment type scenario tool", description: "Employee versus freelancer before you choose business-style banking.", href: "/netherlands/work/tools/employment-type-scenario-tool/", ctaLabel: "Open tool" },
    ] as const,
  },

  faq: [
    {
      q: "What type of bank account do I need in the Netherlands?",
      a: "Most people who live and work here open a Dutch everyday account (betaalrekening) for pay, rent, and typical Dutch online shopping. Add savings, shared, student, or business-style accounts when your situation needs them. Always read the latest product list on the bank’s site.",
    },
    {
      q: "What is a betaalrekening?",
      a: "It is the standard everyday account: pay in, bills out, bank card for shops, and usually the Dutch online checkout option for web shops.",
    },
    {
      q: "What is a spaarrekening?",
      a: "A savings account, often linked to your everyday account, for emergency money and goals. Interest rules change over time. It is not the same as investing.",
    },
    {
      q: "Do expats need a Dutch current account?",
      a: "Many do when pay, rent, or subscriptions need automatic Dutch payments or the usual Dutch online checkout. For a very short stay you might use a foreign card for a while. Ask your landlord and employer what they accept and keep it in writing if it matters.",
    },
    {
      q: "Should couples open a joint account?",
      a: "You do not have to. A shared account can help with household bills if you want one pot. Before you open one, agree who can move money, whether you can borrow on the account, and what happens if someone moves out.",
    },
    {
      q: "Do freelancers need a business bank account?",
      a: "Many people who invoice as freelancers use a business-style account for invoices and sales tax and a personal account for private spending. Whether your bank expects a business product depends on their rules and what you do. Ask a tax adviser if you are unsure.",
    },
    {
      q: "Can I use Revolut, N26, or bunq as my main account?",
      a: "Some people do for a while if pay and rent accept that account number. Others keep a familiar Dutch everyday account for local life and use an app for travel or currency. Read how your money is protected and where the company is based on the provider’s official website.",
    },
    {
      q: "Do I need a credit card in the Netherlands?",
      a: "Often no for daily shopping; a bank card is enough. A credit card can still help for travel, deposits, or some websites. It is borrowed money with fees and interest, not free cash.",
    },
    {
      q: "Can I open a bank account before getting a BSN?",
      a: "Some banks let you start and send your citizen service number later before a deadline. Rules change. Read our open-account guide and the bank’s current FAQ.",
    },
  ],

  officialSources: {
    sectionId: "official-sources",
    sectionTitle: "Official sources",
    disclaimer:
      "These links explain who supervises banks, consumer rights, and how payments work. They do not replace your bank contract or advice from a professional.",
    groups: [
      {
        id: "supervision",
        title: "Banking supervision",
        links: [{ type: "external" as const, label: "De Nederlandsche Bank (DNB)", href: "https://www.dnb.nl/en/" }],
      },
      {
        id: "consumer",
        title: "Payment accounts (EU consumer view)",
        links: [
          {
            type: "external" as const,
            label: "Your Europe — bank accounts & payments",
            href: "https://europa.eu/youreurope/citizens/consumers/financial-products-and-services/bank-accounts-and-payments/index_en.htm",
          },
        ],
      },
      {
        id: "sepa",
        title: "Europe-wide bank payments",
        links: [{ type: "external" as const, label: "European Payments Council — SEPA", href: "https://www.europeanpayments.eu/" }],
      },
      {
        id: "ideal",
        title: "Dutch retail payments",
        links: [{ type: "external" as const, label: "iDEAL — scheme overview", href: "https://www.ideal.nl/en/" }],
      },
      {
        id: "kvk",
        title: "Business registration context",
        links: [{ type: "external" as const, label: "KVK — Netherlands Chamber of Commerce", href: "https://www.kvk.nl/en/" }],
      },
    ],
  } satisfies MoveVisaResidencyReferences,
};

export type TypesOfBankAccountsPageModel = typeof typesOfBankAccountsPageModel;

import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import { bankingFeeCategories } from "@/src/data/banking/bankingFeeCategories";
import {
  BANKING_FEES_BEST_BANKS_PATH,
  BANKING_FEES_PAGE_PATH,
  BANKING_FEES_TRADITIONAL_DIGITAL_PATH,
  bankingFeesAvoidableCosts,
  bankingFeesComparisonRows,
  bankingFeesHiddenTraps,
  bankingFeesScenarioProfiles,
} from "@/src/data/banking/bankingFeesContent";
import { BANK_COMPARISON_TOOL_PATH, BANKING_COST_ESTIMATOR_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";

export const BANKING_FEES_PATH = BANKING_FEES_PAGE_PATH;

export const bankingFeesPageModel = {
  path: BANKING_FEES_PATH,
  publishDate: "2026-04-28",

  seo: {
    title: "Banking Fees & Costs in the Netherlands | ExpatCopilot",
    description:
      "Easy guide for expats: what Dutch banks often charge for (monthly account, cards, cash machines, sending money abroad, changing currency, extra plans, and self-employed accounts). Always check each bank’s own website for today’s prices.",
    keywords: [
      "banking fees netherlands expats",
      "dutch bank account fees",
      "dutch bank price list",
      "digital bank fees netherlands",
      "international transfer costs netherlands",
      "bank costs netherlands",
      "sepa transfer fees netherlands",
    ],
  },

  heroImage: {
    src: "/images/heroes/netherlands-banking-fees-hero.webp",
    alt: "Photograph of a person at a bright desk reviewing printed bank fee papers next to a laptop — hero for the Netherlands banking fees guide on ExpatCopilot",
    width: 1536,
    height: 1024,
  },

  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#quick-answer", label: "Quick answer" },
    { href: "#cost-categories", label: "Cost categories" },
    { href: "#traditional-digital-fees", label: "Traditional vs digital fees" },
    { href: "#before-choosing-bank", label: "Cost checklist" },
    { href: "#transfers-fx", label: "Transfers & FX" },
    { href: "#atm-cards", label: "ATM & cards" },
    { href: "#zzp-costs", label: "ZZP banking costs" },
    { href: "#avoidable-costs", label: "Avoidable costs" },
    { href: "#hidden-fees", label: "Hidden fees" },
    { href: "#compare-properly", label: "Compare properly" },
    { href: "#example-profiles", label: "Example profiles" },
    { href: "#related", label: "Tools" },
    { href: "#banking-glossary", label: "Banking glossary" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Banking Fees & Costs in the Netherlands",
    subtitle:
      "This guide explains common Dutch bank charges in simple terms — monthly account fees, cards, cash machines, sending money abroad, changing currency, paid extra plans, and freelancer (ZZP) accounts. Use it to know what to look for on each bank’s own website.",
    contextChips: ["No live prices here", "Fees change often", "Check each bank’s site"],
    editorialPrinciple:
      "Bank fees change and banks move services between packages. Use this page as a checklist, then read the up-to-date price list on the bank’s official website before you sign up.",
    trustLine:
      "We do not list today’s exact prices here, and we do not say which bank is the cheapest for everyone. This is general education only — your bank’s website is the source of truth.",
    feesChangeBanner:
      "Prices change and offers can end without warning. Anything you read here is for learning, not a quote. Always double-check the bank’s current page before you decide.",
    bullets: [
      "Learn which charges are fixed each month, per use, or optional before you pick a bank.",
      "See how branch banks, phone apps, and using both together can change what you pay.",
      "Notice money sent abroad and currency-change fees early — they can cost more than the monthly fee.",
      "Pick a bank based on how you actually bank, not only the big monthly number in an ad.",
    ] as const,
    primaryCta: { label: "Quick cost overview", href: "#quick-answer" },
    secondaryCta: { label: "Compare banks", href: BANKING_FEES_BEST_BANKS_PATH },
    heroQuickLinks: [
      { label: "Compare banks (shortlist)", href: BANKING_FEES_BEST_BANKS_PATH },
      { label: "How payments work", href: "/netherlands/money/banking/how-payments-work/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Branch banks vs apps", href: BANKING_FEES_TRADITIONAL_DIGITAL_PATH },
    ] as const,
  },

  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "A simple map of costs — not personal financial advice.",
    cells: [
      {
        title: "What this page is for",
        bullets: [
          "A straightforward list of the kinds of fees you usually see on Dutch bank websites and price lists.",
        ] as const,
      },
      {
        title: "Who it helps",
        bullets: [
          "Newcomers, people paid in the Netherlands, people who travel, students, freelancers (ZZP), and families who want a clear fee checklist.",
        ] as const,
      },
      {
        title: "What it covers",
        bullets: [
          "Account fees, cards, cash machines, sending money, changing currency, paid upgrade plans, and business or ZZP accounts.",
        ] as const,
      },
      {
        title: "What it does not do",
        bullets: [
          "It does not promise today’s prices, give tax advice, or replace talking to a bank or adviser when you need a firm answer.",
        ] as const,
      },
    ],
    note:
      "Bank fees change. Use this page as a starting list, then read each bank’s own website for today’s prices and rules. For IBAN, iDEAL, and SEPA rails, see How payments work under Money → Banking — we keep fee categories here.",
  },

  quickAnswer: {
    id: "quick-answer",
    eyebrow: "Quick answer",
    title: "What banking usually costs",
    subtitle:
      "Most people pay a mix: a monthly account package, pay-per-use rules for cards or cash, and sometimes high costs for sending money abroad or changing currency — those can matter more than the monthly line.",
    introBullets: [
      "Many accounts have a monthly fee; “free” accounts often come with rules (for example age, income, or fewer features).",
      "Your first debit card is often included; extra cards, credit cards, or delivery may cost extra.",
      "For money abroad, read the international part of the fee list — the exchange rate plus the fee decides what you really pay.",
      "Paid upgrade plans add another monthly cost on top of the basic account.",
      "The best deal for you depends on how you use the account, not a single ranking for everyone.",
    ] as const,
    cards: [
      {
        title: "Monthly account fee",
        bullets: [
          "This is usually one clear line on the bank’s fee sheet — check what is included (cards, iDEAL, help desk) in that package.",
        ] as const,
      },
      {
        title: "Card and plan fees",
        bullets: [
          "Debit is often included; extra cards, credit cards, or upgrade plans may add monthly or yearly fees.",
        ] as const,
      },
      {
        title: "Sending money abroad / currency",
        bullets: [
          "Look at fee and exchange rate together; compare how much money arrives, not only the word “free”.",
        ] as const,
      },
      {
        title: "Other common add-ons",
        bullets: [
          "Cash abroad, faster payments, paper post, new cards, and business tools can add up if you use them often.",
        ] as const,
      },
    ],
  },

  feeComparisonRows: bankingFeesComparisonRows,

  internationalTransfers: {
    id: "transfers-fx",
    eyebrow: "Transfers & currency",
    title: "Sending money abroad and changing currency",
    lead:
      "For many expats, sending money to another country, getting paid from abroad, or spending in another currency is where costs add up — sometimes more than the monthly account fee.",
    points: [
      "Euro payments inside Europe are often simple and cheap; other currencies or worldwide wire-style payments can have higher fees — read the international part of your bank’s fee list, not only the local part.",
      "The exchange rate is part of the cost even when the fee looks small or says “free”.",
      "Sometimes a phone app or transfer company is cheaper for your case — compare how much money arrives on the same day for the same amount.",
      "Focus on money received, not only the fee label in big print.",
    ] as const,
    cta: { label: "Compare international transfers", href: "/netherlands/living/payments/" },
    crossLinks: [
      { href: BANKING_FEES_TRADITIONAL_DIGITAL_PATH, label: "Traditional vs digital banks" },
      { href: BANKING_FEES_BEST_BANKS_PATH, label: "Best banks for expats" },
    ] as const,
  },

  atmCards: {
    id: "atm-cards",
    eyebrow: "Cash machines & cards",
    title: "Cash machines and card costs",
    lead: "In daily life most people use a debit card; a credit card is optional. Fees can come from your bank and sometimes from the cash machine company too.",
    points: [
      "Debit and credit have different fee lists — do not mix up the rules.",
      "Taking out cash in the Netherlands vs abroad is often priced differently; some machines add their own charge.",
      "“Pay in your home currency” at a shop or machine abroad can use a bad exchange rate — when in doubt, choose pay in the local currency.",
      "Second cards or partner cards may cost extra — check before you order.",
      "Tap to pay and iDEAL are common in the Netherlands — you still want a local account that fits rent and salary, even if you use another app for travel.",
    ] as const,
    callout:
      "Abroad: if the terminal asks which currency to pay in, compare carefully. Paying in your home currency is not always the best deal — local currency is often safer.",
  },

  avoidableCosts: {
    id: "avoidable-costs",
    eyebrow: "Practical checklist",
    title: "Avoidable banking costs expats often miss",
    subtitle:
      "These are common spots people overlook on fee lists or in daily habits. They are tips, not warnings. Use them to compare banks based on how you really live and spend.",
    cards: bankingFeesAvoidableCosts,
    cta: { label: "Compare banks by your actual usage", href: BANKING_FEES_BEST_BANKS_PATH },
  },

  zzpSection: {
    id: "zzp-costs",
    eyebrow: "Business banking",
    title: "Business and freelancer (ZZP) costs",
    lead:
      "Business accounts have their own prices, separate from personal accounts. How many payments you make and whether you need bookkeeping tools changes what you pay.",
    points: [
      "If you work as a ZZP or run a small business, you usually need a business product — do not guess prices from the personal account page.",
      "If you send or receive many payments, you may move into a higher fee band.",
      "Putting business income through a personal account can break the bank’s rules — read their terms before you mix them.",
    ] as const,
    links: [
      { href: "/netherlands/work/tools/employment-type-scenario-tool/", label: "Employment type scenario tool" },
      { href: BANKING_FEES_BEST_BANKS_PATH, label: "Best banks for expats" },
    ] as const,
  },

  traditionalDigitalExplainer: {
    id: "traditional-digital-fees",
    eyebrow: "Patterns",
    title: "Branch banks vs app banks: how fees differ",
    traditionalTitle: "Branch banks (ING-style)",
    traditionalBullets: [
      "Often clear monthly packages with strong everyday Dutch payment features.",
      "Sending money abroad may follow the bank’s standard international table — compare a transfer service if you do this often.",
      "Extra services (credit line, premium help) may cost extra.",
    ] as const,
    digitalTitle: "App-based banks",
    digitalBullets: [
      "Often simple plans or paid tiers — read what is included in each tier.",
      "Can be handy for travel and currency — still check limits and weekend rules.",
      "Paid top plans add up; customer support may be mostly online.",
    ] as const,
    hybridNote:
      "Many people use a Dutch current account plus a second app or service. That can work well, but it means two sets of fees — only do it if you really use both.",
    tableIntro:
      "These rows describe typical differences, not live prices. Always check the bank’s current fee page before you choose.",
  },

  beforeChoosingBank: {
    id: "before-choosing-bank",
    eyebrow: "Checklist",
    title: "Before choosing a bank, check these costs",
    subtitle:
      "Open each bank’s fee list online and tick what matters for you — names and bundles differ between banks.",
    checklist: [
      "Monthly account fee",
      "Debit card fee",
      "Extra or joint card cost",
      "Credit card fee",
      "Cash machine (ATM) fees",
      "Currency change fees (and weekend rules if shown)",
      "Euro transfers inside Europe (often called SEPA)",
      "Worldwide or non-euro transfers",
      "Paid upgrade plan price",
      "Business or ZZP account price",
      "Time and hassle to open the account and get help",
      "Rules for cancelling or switching to a cheaper plan",
    ] as const,
    note: "A bank that looks cheap in an ad may not be the best deal for how you actually use money.",
    cta: { label: "Open Best Banks for Expats", href: BANKING_FEES_BEST_BANKS_PATH },
  },

  costCategories: bankingFeeCategories,

  compareProperly: {
    id: "compare-properly",
    eyebrow: "Method",
    title: "How to compare bank costs fairly",
    steps: [
      { title: "Write down what you do each month", body: "Salary in, rent out, subscriptions, how often you take cash, travel, sending money home." },
      { title: "Think about everyday payments and cards", body: "iDEAL, direct debits, debit vs credit, whether you need a second card." },
      { title: "Think about abroad and currency", body: "How often you move money, which currencies, and whether you mostly send or receive." },
      { title: "Think about trips and cash machines", body: "Europe in euros vs trips outside the euro; do you use cash a lot or mostly card." },
      { title: "Add paid upgrade plans", body: "Paid top tiers only make sense if you use the perks you would otherwise buy anyway." },
      { title: "Think about help when something goes wrong", body: "Very cheap plans sometimes mean online chat only — decide if that is OK for you." },
      { title: "Estimate a rough yearly total", body: "Add up monthly fees, pay-per-use items, and abroad/currency costs — the big monthly line is only one part." },
    ],
    cta: { label: "Open Best Banks for Expats", href: BANKING_FEES_BEST_BANKS_PATH },
  },

  scenarioProfiles: bankingFeesScenarioProfiles,

  hiddenTraps: {
    id: "hidden-fees",
    eyebrow: "Practical pass",
    title: "Small fee lines that are easy to miss",
    subtitle:
      "Use this list with your own habits and the bank’s official fee page. It is a reminder list, not a prediction of problems.",
    cards: bankingFeesHiddenTraps,
  },

  related: {
    id: "related",
    title: "Related tools and guides",
    subtitle: "Pair this fee map with decision guides and calculators — still verify numbers on official sites.",
    items: [
      {
        title: "Types of bank accounts",
        description: "Learn betaalrekening, spaarrekening, joint, student, business, and digital labels before you compare fee packages.",
        href: "/netherlands/money/banking/types-of-accounts/",
        ctaLabel: "Account types guide",
      },
      {
        title: "Best banks for expats",
        description: "Editorial comparison table and bank-by-bank context — next step after you understand fee types.",
        href: BANKING_FEES_BEST_BANKS_PATH,
        ctaLabel: "Open guide",
      },
      {
        title: "Traditional vs digital banks",
        description: "When branch-led stacks vs app-first stacks fit — complements this fee lens.",
        href: BANKING_FEES_TRADITIONAL_DIGITAL_PATH,
        ctaLabel: "Open guide",
      },
      {
        title: "Open a bank account in the Netherlands",
        description: "Documents, BSN timing, and what employers or landlords often expect.",
        href: "/netherlands/open-bank-account-netherlands/",
        ctaLabel: "Move guide",
      },
      {
        title: "Low-cost fit (usage-based)",
        description: "No live “cheapest” winner here — combine this fee map with Best banks for expats using your real mix of transfers, travel, and local debits.",
        href: BANKING_FEES_BEST_BANKS_PATH,
        ctaLabel: "See comparison guide",
      },
      {
        title: "How payments work (IBAN, iDEAL, SEPA)",
        description: "Understand rails behind rent, salary, and shops — helps you see why some fee lines matter more than others.",
        href: "/netherlands/money/banking/how-payments-work/",
        ctaLabel: "Open payments guide",
      },
      {
        title: "Living: payments & rails (orientation)",
        description: "Placeholder hub for wider Living context on everyday money and international sends.",
        href: "/netherlands/living/payments/",
        ctaLabel: "Living payments",
      },
      {
        title: "Cost of living calculator",
        description: "Sketch monthly pressure next to banking fee tiers.",
        href: "/netherlands/money/tools/cost-of-living-calculator/",
        ctaLabel: "Open calculator",
      },
      {
        title: "Dutch salary (net) calculator",
        description: "Ground take-home before you judge minimum-balance or fee waiver rules.",
        href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
        ctaLabel: "Estimate net pay",
      },
      {
        title: "Job offer comparison",
        description: "When banking follows a new role, compare offers on consistent money assumptions.",
        href: "/netherlands/work/tools/job-offer-comparison/",
        ctaLabel: "Compare offers",
      },
      {
        title: "Utilities & services comparison",
        description: "Many bills debit a Dutch account — align utilities choices with how you bank.",
        href: "/netherlands/living/tools/utilities-services-comparison/",
        ctaLabel: "Compare utilities",
      },
      {
        title: "Banking cost estimator",
        description:
          "Monthly and yearly euro planning bands for the same fee categories as this guide — editorial assumptions, not live provider quotes.",
        href: BANKING_COST_ESTIMATOR_PATH,
        ctaLabel: "Estimate banking costs",
      },
      {
        title: "Bank comparison tool",
        description: "Questionnaire plus editorial fit scores for traditional, digital, and transfer providers — partner links do not change the math.",
        href: BANK_COMPARISON_TOOL_PATH,
        ctaLabel: "Compare banks",
      },
    ],
  },

  faq: [
    {
      q: "How much do bank accounts cost in the Netherlands?",
      a: "It varies by bank and package. Many people pay a monthly account fee; some promotional or basic paths exist with conditions. Always read the current price list PDF for the exact product you want.",
    },
    {
      q: "Are Dutch bank accounts free?",
      a: "Sometimes, with conditions — “free” may require minimum income, age, or limited features. Digital banks often sell subscription tiers instead of a classic free retail package. Confirm on the official site.",
    },
    {
      q: "Are digital banks cheaper than traditional banks?",
      a: "Not automatically. Digital tiers can be cheap for app-heavy users yet expensive if you need premium limits or frequent international use. Traditional packages can be economical when you use included local services heavily. Compare your mix.",
    },
    {
      q: "What banking fees surprise expats most?",
      a: "Common surprises: international transfer and FX totals, ATM abroad combinations, dynamic currency conversion at terminals, premium plan creep, and business pricing that differs from personal marketing pages.",
    },
    {
      q: "What is the cheapest bank for expats?",
      a: "There is no universal cheapest — it depends on salary setup, rent debits, travel, and how you send money abroad. Use Best banks for expats plus this fee checklist, then confirm pricing in writing from providers.",
    },
    {
      q: "How can I reduce international transfer costs?",
      a: "Compare amount received across bank vs specialist vs app for your corridor; batch non-urgent sends; understand SEPA euro vs other rails; avoid hidden FX by reading the breakdown on each provider’s site.",
    },
    {
      q: "Do Dutch banks charge ATM fees?",
      a: "Many banks list euro ATM rules separately from foreign withdrawals. Third-party ATMs can add their own surcharge. Check both your bank’s PDF and the ATM screen before you confirm.",
    },
    {
      q: "Do freelancers need a business bank account?",
      a: "Often yes for clean KvK / VAT flows — rules depend on the provider and your activity. Pricing is usually on a business tariff page, not the personal tab. When unsure, ask the bank or a qualified adviser.",
    },
    {
      q: "Should I use one bank or multiple accounts?",
      a: "Many expats use two stacks (local + app/specialist) for resilience and FX — two stacks also mean two fee footprints. Keep only what you actively monitor.",
    },
  ],

  officialSources: {
    sectionId: "official-sources",
    sectionTitle: "Official sources",
    disclaimer:
      "Use these for supervision, consumer orientation, and payment-scheme context — they do not replace each bank’s product terms or live calculators.",
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
        id: "consumer",
        title: "Consumer & payment accounts (EU orientation)",
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
        title: "SEPA payments",
        links: [
          { type: "external" as const, label: "European Payments Council — SEPA", href: "https://www.europeanpayments.eu/" },
        ],
      },
      {
        id: "ideal",
        title: "Dutch payments",
        links: [{ type: "external" as const, label: "iDEAL (scheme overview)", href: "https://www.ideal.nl/en/" }],
      },
    ],
  } satisfies MoveVisaResidencyReferences,
};

export type BankingFeesPageModel = typeof bankingFeesPageModel;

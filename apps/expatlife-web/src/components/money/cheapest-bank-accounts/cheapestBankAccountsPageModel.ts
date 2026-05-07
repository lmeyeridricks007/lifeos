import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";
import { BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH } from "@/src/data/banking/bankingTraditionalDigitalContent";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";

export const CHEAPEST_BANK_ACCOUNTS_PATH = "/netherlands/money/banking/cheapest-accounts/" as const;

export const cheapestBankAccountsPageModel = {
  path: CHEAPEST_BANK_ACCOUNTS_PATH,
  publishDate: "2026-04-30",

  seo: {
    title: "Cheapest Bank Accounts in the Netherlands | ExpatCopilot",
    description:
      "Plain-language guide to low-cost Dutch bank accounts for expats: what “cheap” really includes, common hidden fees, and links to compare banks. We do not publish live prices — always check each bank’s own website.",
    keywords: [
      "cheapest bank account netherlands",
      "cheapest bank netherlands expats",
      "free bank account netherlands",
      "low cost bank account netherlands",
      "digital bank netherlands expats",
      "bank account fees netherlands",
      "netherlands banking expats",
      "dutch bank fees comparison",
      "expat banking netherlands hub",
    ],
  },

  heroImage: {
    src: "/images/heroes/netherlands-cheapest-bank-accounts-hero.webp",
    alt: "Home desk with laptop, papers, calculator, and coffee — visual for comparing low-cost Dutch bank accounts on ExpatCopilot",
    width: 1536,
    height: 1024,
  },

  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#quick-answer", label: "Quick answer" },
    { href: "#cheapest-vs-value", label: "Cheapest vs value" },
    { href: "#low-cost-shortlist", label: "Low-cost shortlist" },
    { href: "#cheapest-by-scenario", label: "By scenario" },
    { href: "#what-cheap-means", label: "What cheap means" },
    { href: "#hidden-costs", label: "Extra costs" },
    { href: "#traditional-digital-low-cost", label: "Traditional vs digital" },
    { href: "#yearly-cost", label: "Yearly cost" },
    { href: "#recommended-options", label: "Recommended providers" },
    { href: "#related", label: "Related tools" },
    { href: "#banking-glossary", label: "Glossary" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Cheapest Bank Accounts in the Netherlands",
    subtitle:
      "We explain in simple terms what can make a Dutch bank account cheap or expensive — monthly fees, cards, sending money abroad, cash machines, apps, and surprises that do not show in the headline price.",
    contextChips: ["No live prices here", "We explain ideas only", "Check each bank’s site"] as const,
    notOneCheapestBanner:
      "There is no one “cheapest” bank for everyone. Two people can pay very different amounts over a year even if the monthly fee looks the same, once you add cards, travel, sending money abroad, and how well the account fits daily life in the Netherlands.",
    feesChangeBanner:
      "Prices and offers change often. This page gives ideas and checklists, not a price list. Before you open an account, read the current fees and rules on the bank’s own website.",
    guidePrinciple:
      "A low “per month” number in an ad is only part of the story. Think about how you really spend and move money, then add up what matters for you before picking a bank.",
    trustLine:
      "What you read here is general guidance. We do not list today’s exact fees, and rules can change.",
    bullets: [
      "See how traditional banks and app-based banks can both be “low cost” in different situations.",
      "Learn why the lowest monthly fee is not always the cheapest option overall.",
      "Spot common extra costs: cards, foreign money, cash abroad, and paid upgrade plans.",
      "Use this page to narrow your choices — then confirm details on the bank’s official site.",
    ] as const,
    primaryCta: { label: "Compare banks", href: BEST_BANKS_EXPATS_PATH },
    secondaryCta: { label: "Understand fees", href: BANKING_FEES_PAGE_PATH },
    heroQuickLinks: [
      { label: "Compare banks", href: BEST_BANKS_EXPATS_PATH },
      { label: "Understand fees", href: BANKING_FEES_PAGE_PATH },
      { label: "Compare traditional vs digital", href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH },
      { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
    ] as const,
  },

  lowCostShortlist: {
    sectionEyebrow: "Shortlist",
    sectionTitle: "Low-cost banking options",
    sectionSubtitle:
      "Same names as our main bank shortlist — typical fee angles only; confirm every line on each bank’s own site.",
    summaryEyebrow: "Our summary",
    summaryTitle: "General fee picture — not today’s prices",
    summaryIntro:
      "The cards below describe typical kinds of fees from our research. They are not a ranked “best bank” list, a price quote, or personal advice. Use them to know what to look for on each bank’s own price list (often a PDF).",
    providerEyebrow: "Go to the bank’s site",
    providerTitle: "Check prices and account rules online",
    providerIntro:
      "Check provider pricing opens the bank or service’s public website (sometimes we earn a fee if you sign up — we say so where that applies). Always read the current price list and account rules there before you apply.",
  },

  /** Captions for banking instructional raster figures (shared asset bundle + this page’s new PNGs). */
  instructionalFigureCaptions: {
    cheapestVsThreeLenses:
      "People often compare banks in three different ways. Pick the story that fits your next year, then check plan limits on each bank’s own site.",
    whatCheapTotalCost:
      "The monthly fee is only one part of the picture. The drawing helps you remember what else to add up for a year — real amounts always come from the bank’s own documents.",
    hiddenCostsFeeFamilies:
      "Most surprises fall into a few simple groups. Use the picture with the cards below, then find the same topics on your bank’s price list.",
    tradDigitalArchitecture:
      "Branch-style banks, app-only banks, and mixed setups charge in different ways. None is automatically the cheapest for every family.",
  },

  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "A simple way to think about cost — not a single “winning” bank.",
    cells: [
      {
        title: "What this page is for",
        bullets: [
          "Help you compare low-cost Dutch bank accounts as an expat, without saying one bank is always cheapest because of one fee line.",
        ] as const,
      },
      {
        title: "Best for",
        bullets: [
          "New arrivals, students, people on a budget, frequent travellers, and anyone choosing between a classic Dutch bank and an app-based bank.",
        ] as const,
      },
      {
        title: "What it compares",
        bullets: [
          "Monthly fees, debit and credit cards, using your account abroad, changing money to another currency, cash machines, paid upgrade plans, and everyday Dutch payments (salary, rent, iDEAL shopping).",
        ] as const,
      },
      {
        title: "What it skips",
        bullets: [
          "Up-to-the-minute prices, one-to-one financial advice, and reading the fine print for you — always double-check on each bank’s website.",
        ] as const,
      },
    ],
    note: "The “cheapest” account depends on how you live and spend. A low monthly fee can lose to card costs, sending money home, paid extras, or an account that is awkward for rent and salary.",
  },

  quickAnswer: {
    id: "quick-answer",
    eyebrow: "Quick answer",
    title: "Cheapest depends on how you use the account",
    subtitle: "People compare banks in four different ways. Pick the one that fits your next year, then check details on each bank’s website.",
    cards: [
      {
        title: "Lowest monthly fee",
        bullets: [
          "A fair starting point if you rarely travel, rarely send money abroad, and stay on a simple plan.",
          "It is not the full story — cards, foreign money, cash machines, and paid upgrades can cost more than the monthly line.",
        ] as const,
      },
      {
        title: "Lowest cost for life abroad",
        bullets: [
          "Matters if you often send money home, keep money in other currencies, or take cash out outside the euro countries.",
          "Compare how much money arrives after fees, read rules for weekends, and check plan limits — not only the big “send money” button in the app.",
        ] as const,
      },
      {
        title: "Fewest day-to-day headaches",
        bullets: [
          "For many expats, easy salary, rent, iDEAL shopping, and help in English matter as much as the fee table.",
          "An account with a low fee but awkward rent or salary setup can cost a lot in stress and lost time.",
        ] as const,
      },
      {
        title: "Best value",
        bullets: [
          "A good yearly cost for how you really live, plus an account that pays rent and salary without drama.",
          "Often two pieces: one everyday Dutch account plus a second app or service for travel or sending money abroad.",
        ] as const,
      },
    ],
  },

  scenarios: {
    id: "cheapest-by-scenario",
    eyebrow: "Scenarios",
    title: "Lower-cost setups by situation",
    cards: [
      {
        title: "New arrivals",
        recommendation: "Often two accounts at first: a normal Dutch everyday account when you pass the checks, plus a spare card or app while your BSN and address paperwork are still in progress.",
        why: "Fast sign-up and “fits every bill in the Netherlands” rarely come from the same cheap headline — many people keep two simple setups in month one.",
        watchOuts: "Do not choose only for speed. Ask what your rent contract and employer expect for payments before you lock in.",
        relatedLinks: [
          { href: "/netherlands/open-bank-account-netherlands/", label: "Open a bank account guide" },
          { href: BEST_BANKS_EXPATS_PATH, label: "Compare banks" },
        ],
        relatedBankIds: ["bunq", "ing"] as const,
      },
      {
        title: "Salary + rent basics",
        recommendation: "Large Dutch banks are a common choice when your job and landlord expect a familiar local account for salary and rent.",
        why: "You care about smooth monthly payments and fewer surprises — not only the cheapest rate for changing money abroad.",
        watchOuts: "Brochures hide extras — check card replacement, second accounts, and paid upgrade paths you might hit later.",
        relatedLinks: [
          { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work" },
          { href: BANKING_FEES_PAGE_PATH, label: "Understand fees" },
        ],
        relatedBankIds: ["ing", "abn-amro"] as const,
      },
      {
        title: "International transfers",
        recommendation: "A specialist transfer service (for example Wise) plus a local Dutch account for everyday life — compare how much money arrives, not only the marketing slogan.",
        why: "Banks are often fine for simple euro payments inside Europe; other currency routes may be cheaper with a specialist when you move larger amounts.",
        watchOuts: "Fees on the receiving side, banks in the middle of the chain, and “no fee” offers that hide a weaker exchange rate all change the real total.",
        relatedLinks: [
          { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work" },
          { href: BANKING_FEES_PAGE_PATH, label: "Understand fees" },
          { href: "/netherlands/living/payments/", label: "Living: payments hub" },
        ],
        relatedBankIds: ["revolut"] as const,
      },
      {
        title: "Students / short stays",
        recommendation: "App-based banks or simple high-street packages when you want a light setup, little travel, and clear English in the app.",
        why: "Short stays favour simple fees — but still check iDEAL and local bills before you skip a proper Dutch everyday account.",
        watchOuts: "Proof of study and address rules differ by bank; “free” plans often have usage or cash-machine limits.",
        relatedLinks: [
          { href: "/netherlands/money/banking/types-of-accounts/", label: "Types of bank accounts" },
          { href: BEST_BANKS_EXPATS_PATH, label: "Compare banks" },
        ],
        relatedBankIds: ["bunq", "n26"] as const,
      },
      {
        title: "Families / joint needs",
        recommendation: "Classic Dutch banks when you want shared accounts, several cards, and in-person help under one brand.",
        why: "Joint accounts and extra cards are easier to compare when all products sit on one bank’s price list (often a PDF).",
        watchOuts: "Per-card and per-account fees add up — sketch a yearly total for every card you will really use.",
        relatedLinks: [
          { href: "/netherlands/money/banking/types-of-accounts/", label: "Types of bank accounts" },
          { href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH, label: "Compare traditional vs digital" },
        ],
        relatedBankIds: ["ing", "abn-amro", "rabobank"] as const,
      },
      {
        title: "Freelancers / self-employed (ZZP)",
        recommendation: "A separate business account — a cheap personal account is usually the wrong tool once you send invoices and handle VAT.",
        why: "Business prices, card readers, and bookkeeping tools drive real cost — not the teaser price on a personal package.",
        watchOuts: "Mixing private and business money can break the bank’s rules — read the business price list before you optimise the wrong account.",
        relatedLinks: [
          { href: BANKING_FEES_PAGE_PATH, label: "Understand fees" },
          { href: "/netherlands/money/banking/types-of-accounts/", label: "Account types" },
        ],
        relatedBankIds: ["abn-amro", "bunq"] as const,
      },
      {
        title: "Backup account",
        recommendation: "A second simple account with another brand — often app-based — so you still have a working card if the main bank has a problem.",
        why: "Problems in your first weeks in the country are costly; a spare card beats urgent courier fees.",
        watchOuts: "Two banks can mean two monthly fees — close accounts you are not really using.",
        relatedLinks: [
          { href: `${BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH}#hybrid-setup`, label: "Hybrid setup" },
          { href: BEST_BANKS_EXPATS_PATH, label: "Compare banks" },
        ],
        relatedBankIds: ["revolut", "n26"] as const,
      },
    ],
  },

  cheapestVsValue: {
    id: "cheapest-vs-value",
    eyebrow: "Choose what to optimise",
    title: "Cheapest vs best value",
    subtitle: "Decide what matters most for you — then read plan limits on the bank’s own website.",
    cards: [
      {
        title: "Lowest monthly fee",
        setup: "digital" as const,
        why: "Best for simple, light use on a free or basic plan, without many paid extras.",
        watchOut: "Limits, awkward fit for Dutch life, and paid add-ons — free plans often push useful features into a subscription when you use the account more.",
        link: { href: "#low-cost-shortlist", label: "View low-cost shortlist" },
      },
      {
        title: "Heavy use abroad",
        setup: "hybrid" as const,
        why: "Best if you often send money abroad or travel — compare a specialist transfer service with a normal Dutch everyday account.",
        watchOut: "Exchange rate, money received, and plan caps — weekends and “fair use” rules change who is cheaper for each payment.",
        link: { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work" },
      },
      {
        title: "Best value setup",
        setup: "hybrid" as const,
        why: "Best for long-term expats who want smooth Dutch payments plus a clear way to handle foreign money.",
        watchOut: "Often one local account plus one app or transfer service — two apps to manage, but usually fewer surprises overall.",
        link: { href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH, label: "Compare traditional vs digital" },
      },
    ],
    ctaAfter: {
      label: "Compare traditional vs digital",
      href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH,
    },
  },

  whatCheapMeans: {
    id: "what-cheap-means",
    eyebrow: "Total cost",
    title: 'What “cheap” really means',
    lead:
      "Your real banking cost is everything below added together — not only the monthly fee in an ad. An account with €0 per month can still cost more if you pay a lot for cards, foreign use, sending money abroad, paid upgrade plans, or lost time fixing problems.",
    equationSummaryVisual: {
      factors: [
        "Monthly fee",
        "Cards",
        "Cash machines",
        "Transfers abroad",
        "Non-euro spend",
        "Paid upgrades",
        "Business or shared",
        "Time and hassle",
      ],
      outcomeLine: "Together, those lines are your real cost — not just the advertised monthly fee.",
      footnote: "Add it up for a full year, then check each line on the bank’s official price list.",
    },
    /** Shown above the cost-line grid; examples on cards are ballparks only. */
    formulaExamplesIntro:
      "The cards below add rough euro examples so each line is easier to picture. They are not live prices — always confirm on the bank’s tariff before you choose.",
    formulaLines: [
      {
        label: "Monthly fee",
        text: "The fixed package price on the bank’s official fees page.",
        example:
          "Many everyday packages sit around €0–€8 per month after discounts; fuller bundles are often nearer €12–€25. “Free” tiers usually come with conditions.",
      },
      {
        label: "Card fees",
        text: "Posting a card, replacing it, extra cards, and credit if you use it.",
        example:
          "A first standard debit card is often free; a replacement is commonly about €7–€15. Credit cards may charge roughly €20–€50 per year plus interest if you roll a balance.",
      },
      {
        label: "Cash machine fees",
        text: "Your bank’s machines vs abroad; the machine owner can add a fee on top.",
        example:
          "Withdrawals at your own bank’s ATMs in the Netherlands are often free; abroad, budget roughly €2–€5 from your bank per withdrawal, plus any surcharge from the machine owner.",
      },
      {
        label: "Sending money abroad",
        text: "Flat fees, middle-bank cuts, and a weaker exchange rate hidden in the offer.",
        example:
          "Retail transfers often show a flat fee around €0–€8, but the rate you get on the currency conversion can move the real cost more than the headline fee.",
      },
      {
        label: "Spending in other currencies",
        text: "Paying or withdrawing when the money is not in euros.",
        example:
          "Card spend outside the euro zone often includes an FX markup in the ballpark of 0–3% compared with a mid-market reference — check the “non-euro” or “foreign” line in the tariff.",
      },
      {
        label: "Paid upgrade plans",
        text: "Bundles with insurance or perks — check you are not paying twice for the same cover.",
        example:
          "Step-ups from a basic to a “plus” style package are often about €3–€12 extra per month before you add standalone insurance products.",
      },
      {
        label: "Business / shared accounts",
        text: "Separate business prices; joint accounts or second accounts.",
        example:
          "Simple sole-trader or freelancer packages are often roughly €5–€20 per month; extras like invoicing or multi-user access sit on top. Joint or second personal accounts may add a few euros per month each.",
      },
      {
        label: "Time and hassle",
        text: "Long waits for help, failed online payments, or salary paperwork that does not match.",
        example:
          "No single euro figure — but one delayed rent or salary payment can trigger landlord or employer friction that dwarfs a year of small account fees.",
      },
    ],
  },

  hiddenCosts: {
    id: "hidden-costs",
    eyebrow: "Watch the bill",
    title: "Extra costs that can change the answer",
    subtitle: "These are the same ideas as on our Banking fees page — here we spell out what can go wrong and what to do about it.",
    readerIntro:
      "Each card is one kind of surprise bill. If it sounds like your life, read the short text — then find the same topic on your bank’s official price list (often a PDF).",
    cards: [
      {
        id: "fx-spread",
        title: "Sending money abroad — weak exchange rate",
        why: "A service may say “low fee” but earn money on a worse exchange rate or cuts along the way.",
        avoid: "On the same day, compare how much money arrives for the same send, using each provider’s own calculator.",
      },
      {
        id: "atm-abroad",
        title: "Cash machines outside the Netherlands",
        why: "Your bank, the machine owner, and the “pay in euros?” choice at the machine can all add cost.",
        avoid: "Where it is safe, take out cash less often in larger amounts; say no when the machine offers to charge you in euros abroad; read the “abroad” section on the price list.",
      },
      {
        id: "premium-tiers",
        title: "Paid upgrade plans",
        why: "Bundles can include insurance or perks you already pay for somewhere else.",
        avoid: "List what you really use every few months; drop the paid tier when it no longer pays off.",
      },
      {
        id: "extra-cards",
        title: "Extra cards or shared accounts",
        why: "Small per-card fees grow fast for couples and housemates.",
        avoid: "Sketch a yearly total for every card before you order another plastic card.",
      },
      {
        id: "business-pricing",
        title: "Business account prices",
        why: "A cheap personal account does not replace proper business pricing or invoicing tools.",
        avoid: "If you send invoices or handle VAT, open the business price list early.",
      },
      {
        id: "ideal-fit",
        title: "Awkward fit for iDEAL or local bills",
        why: "Failed checkouts and manual fixes cost time — sometimes more painful than a small fee.",
        avoid: "Try your real billers on the account you plan to keep for a year.",
      },
      {
        id: "dcc",
        title: "Wrong currency at a foreign till or machine",
        why: "Choosing “pay in euros” abroad often hides a poor exchange deal.",
        avoid: "Pick local money at the machine or card reader; use a travel-friendly card setting if you have one.",
      },
      {
        id: "support-friction",
        title: "Slow help or stuck sign-up",
        why: "Long chat queues or ID checks that stall can delay rent, phone plans, and your first salary.",
        avoid: "Have a backup bank in mind; favour banks you can reach during your actual move dates.",
      },
    ],
  },

  tradDigitalLowCost: {
    id: "traditional-digital-low-cost",
    eyebrow: "Types of bank",
    title: "Traditional vs digital low-cost accounts",
    lead:
      "“Cheap” is not the same as “app only” or “branch only.” Many expats end up with one Dutch everyday account plus one extra app or service once they see how they really spend.",
    traditional: {
      title: "Traditional banks",
      points: [
        "Often offer clear monthly packages people know from high-street banking.",
        "Usually fit Dutch life well for salary, rent, iDEAL, and what landlords expect.",
        "Not always the cheapest for heavy use of other currencies compared with specialists.",
      ],
    },
    digital: {
      title: "Digital banks and apps",
      points: [
        "Can look cheaper at sign-up, with English-first apps and simple plans.",
        "Handy for budgeting in the app and controls when you travel.",
        "Plan limits, how you get help, and odd Dutch cases still decide whether it is really cheap for you.",
      ],
    },
    hybrid: {
      title: "Two-part setup (often good value)",
      points: [
        "One normal Dutch account for salary, rent, and everyday local payments.",
        "One extra app or service for travel, other currencies, or a spare card.",
      ],
    },
    links: [
      { href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH, label: "Compare traditional vs digital" },
      { href: BANKING_FEES_PAGE_PATH, label: "Understand fees" },
    ],
  },

  yearlyCost: {
    id: "yearly-cost",
    eyebrow: "Simple method",
    title: "How to compare total yearly cost",
    steps: [
      { title: "Start with the monthly package", body: "Use the fee line for the exact account you can get — not only the marketing homepage." },
      { title: "Add cards and shared-account extras", body: "Count every card you will keep, delivery fees, and partner cards." },
      { title: "Add sending money abroad and other currencies", body: "Multiply a typical payment by how often you do it; add weekend or non-euro costs if they apply to you." },
      { title: "Add travel and cash machines", body: "Be honest about trips outside the euro zone — a few withdrawals can cost more than a low monthly fee." },
      { title: "Add paid upgrade plans", body: "If you need metal cards, insurance bundles, or higher limits, price the plan you will really use." },
      { title: "Think about hassle", body: "If payments fail even now and then, count the time or taxi-style fixes you would pay." },
      { title: "Compare full-year totals", body: "Multiply monthly charges by twelve, add one-off and per-use fees — compare whole-year numbers, not only the monthly headline." },
    ],
    cta: { label: "Understand fees", href: BANKING_FEES_PAGE_PATH },
  },

  recommendedProviders: {
    sectionId: "recommended-options",
    eyebrow: "Go to bank websites",
    title: "Recommended providers",
    subtitle:
      "The sections above explain what to look for. The cards here link to official sites — always check today’s fees, account rules, and how you can get help before you apply.",
    disclaimer:
      "Prices change. Always confirm current fees, account rules, and support before you open an account.",
    groups: [
      {
        title: "Low-cost digital options",
        placementId: "nl-money-cheapest-accounts-digital",
        boundaryNote:
          "Not part of the fee summary above. These names often appear on expat lists for app-first accounts — on each site, check Dutch product details, customer protections, and plan limits.",
        analyticsPageContext: "cheapest-accounts-recommended-digital",
        categoryLinks: [
          { href: BEST_BANKS_EXPATS_PATH, label: "Compare banks" },
          { href: BANKING_FEES_PAGE_PATH, label: "Understand fees" },
        ],
      },
      {
        title: "Traditional Dutch banks",
        placementId: "nl-money-cheapest-accounts-traditional",
        boundaryNote:
          "Not part of the fee summary above. Big Dutch banks are common for salary and rent — compare packages and card fees on each bank’s own price list.",
        analyticsPageContext: "cheapest-accounts-recommended-traditional",
        categoryLinks: [
          { href: "/netherlands/services/banks/", label: "Banks directory" },
          { href: "/netherlands/open-bank-account-netherlands/", label: "Open a bank account guide" },
        ],
      },
      {
        title: "International transfer / multi-currency",
        placementId: "nl-money-cheapest-accounts-transfers",
        boundaryNote:
          "Not part of the fee summary above. Many people use a transfer service together with a Dutch account — on each site, compare how much money arrives and what each route costs.",
        analyticsPageContext: "cheapest-accounts-recommended-transfers",
        categoryLinks: [
          { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work" },
          { href: "/netherlands/living/payments/", label: "Living: payments hub" },
        ],
      },
    ],
  },

  related: {
    id: "related",
    title: "Related tools and guides",
    subtitle: "Keep the same mindset after you leave: fees change often; how Dutch payments work changes more slowly.",
    items: [
      {
        title: "Best Banks for Expats",
        description: "Our short list with sign-up notes, English support, and a comparison table — use with this page so fit matters, not only the fee line.",
        href: BEST_BANKS_EXPATS_PATH,
        ctaLabel: "Compare banks",
      },
      {
        title: "Banking Fees & Costs",
        description: "Kinds of fees, common traps, and checklists — a good next read after “cheap” headlines.",
        href: BANKING_FEES_PAGE_PATH,
        ctaLabel: "Understand fees",
      },
      {
        title: "Traditional vs Digital Banks",
        description: "When a branch bank, an app bank, or a two-account setup fits — same ideas as the section above.",
        href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH,
        ctaLabel: "Compare traditional vs digital",
      },
      {
        title: "Types of Bank Accounts",
        description: "Everyday, savings, joint, student, business — know the account type before you chase the lowest monthly fee.",
        href: "/netherlands/money/banking/types-of-accounts/",
        ctaLabel: "Read account types",
      },
      {
        title: "How Payments Work",
        description: "How Dutch account numbers (IBAN), iDEAL, euro zone payments, and direct debits fit together — “cheap” still has to work for rent and salary.",
        href: "/netherlands/money/banking/how-payments-work/",
        ctaLabel: "Read payments guide",
      },
      {
        title: "Open a Bank Account in the Netherlands",
        description: "Papers you need, BSN timing, and common questions before you compare banks on price alone.",
        href: "/netherlands/open-bank-account-netherlands/",
        ctaLabel: "Open setup guide",
      },
      {
        title: "Bank account rejected or delayed",
        description: "If the cheapest option declined you — document checks, timing, and another bank to compare calmly.",
        href: "/netherlands/money/banking/account-rejection/",
        ctaLabel: "Open guide",
      },
      {
        title: "International transfers (payments hub)",
        description: "Broader context for money moving across borders while you settle — not a live price tool.",
        href: "/netherlands/living/payments/",
        ctaLabel: "Open payments hub",
      },
      {
        title: "Cost of Living Calculator",
        description: "See monthly pressure together with bank fees before you lock in rent and subscriptions.",
        href: "/netherlands/money/tools/cost-of-living-calculator/",
        ctaLabel: "Open calculator",
      },
      {
        title: "Salary Net Calculator",
        description: "Rough take-home pay helps you judge if a paid bank plan or minimum balance is realistic.",
        href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
        ctaLabel: "Estimate net salary",
      },
      {
        title: "Bank comparison tool (roadmap)",
        description: "A built-in side-by-side tool is on our roadmap — for now, use the best-banks table and each bank’s own price list.",
        href: BEST_BANKS_EXPATS_PATH,
        ctaLabel: "Compare banks",
      },
      {
        title: "Banking cost estimator (roadmap)",
        description: "A guided yearly cost tool is planned — for now, use the seven steps on this page and each bank’s fee tables.",
        href: "/netherlands/services/banks/",
        ctaLabel: "Browse banks directory",
      },
    ],
  },

  faq: [
    {
      q: "What is the cheapest bank account in the Netherlands?",
      a: "There is no one cheapest account for everyone, and we do not publish live ranked prices. The lowest monthly number in an ad can lose to sending money abroad, foreign cash machines, paid upgrade plans, or an account that is awkward for salary and iDEAL. Sketch how you use money, then read each bank’s current price list for the account you can actually get.",
    },
    {
      q: "Are Dutch bank accounts free?",
      a: "Some packages show low or zero monthly fees with conditions. Extra cards, business use, or foreign features often cost extra. Always read the full list for the account type you need.",
    },
    {
      q: "Are digital banks cheaper than traditional banks?",
      a: "Sometimes, for people who live in the app and stay within plan limits — but not always once you add travel, other currencies, paid tiers, or tricky Dutch payments. Classic banks can win on simple home-country use; apps can win when you move a lot of foreign money. Compare a full year, not a slogan.",
    },
    {
      q: "What hidden costs should expats check?",
      a: "Sending money abroad (especially the exchange rate), cash machines outside the Netherlands, paid upgrade plans, extra and joint cards, business prices if you invoice, saying “pay in euros” at a foreign machine, and any trouble with iDEAL or your employer’s payment setup.",
    },
    {
      q: "Which bank is cheapest for international transfers?",
      a: "There is no one winner for every country, amount, and currency — and prices change. Many people use a transfer specialist next to a normal Dutch account. Compare how much money arrives using each provider’s own calculator, not random forum posts.",
    },
    {
      q: "Should I choose the lowest monthly fee?",
      a: "Only if your banking is very simple and you will stay inside the free plan’s rules. For many expats, cards, foreign use, travel, and everyday Dutch payments move the real cost away from the headline monthly fee.",
    },
    {
      q: "Is a free digital bank enough in the Netherlands?",
      a: "It can work for some people, but many still want a Dutch account number setup that matches what employers, landlords, and direct debits expect. Check your own contracts and billers before you rely on one app.",
    },
    {
      q: "Can freelancers use a cheap personal account?",
      a: "Usually not for long — business accounts have their own prices and rules. If you send invoices or handle VAT, read business pricing early and keep private and business money separate, as each bank requires.",
    },
  ],

  officialSources: {
    sectionId: "official-sources",
    sectionTitle: "Official sources",
    disclaimer:
      "These links point to regulators, EU consumer information, and how payments work in Europe. They do not show bank prices — for that, use each bank’s own website.",
    groups: [
      {
        id: "supervision",
        title: "Supervision & regulators",
        links: [
          { type: "external" as const, label: "De Nederlandsche Bank (DNB)", href: "https://www.dnb.nl/en/" },
          { type: "external" as const, label: "AFM — Dutch Authority for the Financial Markets", href: "https://www.afm.nl/en/" },
        ],
      },
      {
        id: "consumer-payments",
        title: "Consumer payment accounts (EU orientation)",
        links: [
          {
            type: "external" as const,
            label: "Your Europe — bank accounts & payments",
            href: "https://europa.eu/youreurope/citizens/consumers/financial-products-and-services/bank-accounts-and-payments/index_en.htm",
          },
        ],
      },
      {
        id: "payments-schemes",
        title: "European payments & iDEAL",
        links: [
          { type: "external" as const, label: "European Payments Council (euro payment zone background)", href: "https://www.europeanpayments.eu/" },
          { type: "external" as const, label: "iDEAL (scheme overview)", href: "https://www.ideal.nl/en/" },
        ],
      },
      {
        id: "expatcopilot-pricing",
        title: "More on ExpatCopilot",
        links: [
          { type: "internal" as const, label: "Netherlands banking hub", href: "/netherlands/money/banking/" },
          { type: "internal" as const, label: "Compare banks (short list and table)", href: BEST_BANKS_EXPATS_PATH },
          { type: "internal" as const, label: "Understand fees (overview)", href: BANKING_FEES_PAGE_PATH },
          { type: "internal" as const, label: "Banks directory (longer list)", href: "/netherlands/services/banks/" },
        ],
      },
    ],
  } satisfies MoveVisaResidencyReferences,
} as const;

export type CheapestBankAccountsPageModel = typeof cheapestBankAccountsPageModel;

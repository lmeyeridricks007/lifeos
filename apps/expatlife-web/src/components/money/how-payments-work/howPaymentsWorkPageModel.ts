import type { MovePillarTocItem } from "@/src/components/moving/MovePillarMobileToc";
import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import type { MoveGuideSignatureModel } from "@/src/lib/guides/buildMoveGuideSignatureModel";
import {
  buildBankingPaymentQuickAnswerCards,
  buildBankingPaymentSituationCards,
  getHowPaymentsWorkConceptGridConcepts,
  howPaymentsWorkGuideSections,
} from "@/src/data/banking/paymentConcepts";
import { BANKING_SECURITY_PATH } from "@/src/data/banking/bankingSafety";

export const HOW_PAYMENTS_WORK_PATH = "/netherlands/money/banking/how-payments-work/" as const;
export const HPW_BEST_BANKS_PATH = "/netherlands/money/banking/best-banks-expats/" as const;
export const HPW_FEES_PATH = "/netherlands/money/banking/fees/" as const;
export const HPW_TRAD_DIG_PATH = "/netherlands/money/banking/traditional-vs-digital/" as const;
export const HPW_TYPES_PATH = "/netherlands/money/banking/types-of-accounts/" as const;
export const HPW_OPEN_BANK_PATH = "/netherlands/open-bank-account-netherlands/" as const;
export const HPW_BANKING_SECURITY_PATH = BANKING_SECURITY_PATH;
export const HPW_LIVING_PAYMENTS_PATH = "/netherlands/living/payments/" as const;
export const HPW_LIVING_APPS_PATH = "/netherlands/living/apps/" as const;
export const HPW_LIVING_DAILY_PATH = "/netherlands/living/daily-life/" as const;
export const HPW_LIVING_SHOPPING_PATH = "/netherlands/living/shopping-groceries/" as const;
export const HPW_UTILITIES_TOOL_PATH = "/netherlands/living/tools/utilities-services-comparison/" as const;

export const howPaymentsWorkMisunderstandings: readonly { title: string; body: string }[] = [
  {
    title: "Assuming credit cards are always accepted",
    body: "Many day-to-day shops are built around debit and local payment habits. Credit cards still help for travel, deposits, or some international sites — but they are not the default everywhere online or in small shops.",
  },
  {
    title: "Not understanding iDEAL before you need it",
    body: "If you only know card checkout, the first iDEAL flow can feel abrupt. You approve in your bank app instead of typing card details on the shop site.",
  },
  {
    title: "Using a foreign account too long when local friction appears",
    body: "Some employers, landlords, or insurers prefer a Dutch-friendly setup for automatic bills or the usual Dutch online checkout. If friction keeps appearing, reassess early.",
  },
  {
    title: "Ignoring direct debit authorisations",
    body: "Incasso pulls money after you approve a mandate. Old mandates can keep charging after you forget the service — review them in your bank app when you move or cut subscriptions.",
  },
  {
    title: "Forgetting to update IBAN after switching banks",
    body: "Salary, utilities, and tax refunds can still point at the old account number until you update each counterparty — keep a checklist when you change banks.",
  },
  {
    title: "Confusing IBAN with card number",
    body: "Your IBAN is for transfers and mandates. Your card number is for card payments — they are not interchangeable when a form asks for one of them.",
  },
  {
    title: "Comparing transfer fees but ignoring exchange rate",
    body: "For non-euro corridors, the exchange rate often matters more than a headline fee. Compare amount received on the same day with each provider’s official calculator.",
  },
  {
    title: "Not keeping a buffer for automatic payments",
    body: "Automatic pulls do not wait for other spending to clear. Keep a small buffer above your expected monthly pulls to avoid failed payments and extra charges.",
  },
];

/** Shared scan lines for deep dives + {@link howPaymentsWorkPageModel.paymentRailsSignature}. */
const hpwTopicScanHints = {
  iban: [
    "IBAN is your account identifier for transfers and many automatic bill pulls — not your card number.",
    "Foreign IBANs can work for simple euro transfers, but local templates for salary or mandates may be smoother with a Dutch-friendly account.",
  ] as const,
  ideal: [
    "iDEAL sends you to your bank to approve many online checkouts — not card fields on the merchant site.",
    "Your bank package must list iDEAL support on the account you rely on for shopping.",
  ] as const,
  sepa: [
    "SEPA is the shared euro area for many transfers and automatic bills — timing and fees still depend on your bank.",
    "Transfers need correct IBAN plus reference; direct debit needs an approved mandate before money can be pulled.",
  ] as const,
  cards: [
    "Everyday Dutch spend is usually debit-led — chip, PIN, or tap from your current account, not a credit line by default.",
    "Contactless speeds small buys; credit cards still matter for some travel, deposits, and foreign sites — acceptance varies by shop.",
  ] as const,
  paymentRequests: [
    "Betaalverzoek is a payment request you approve in your bank app — common when someone paid the whole bill and you send your share back.",
    "Treat every request like cash: confirm who sent it, what it is for, and that the channel feels normal for that person.",
  ] as const,
  international: [
    "Cross-border or non-euro sends can bundle fees with exchange rates — compare what actually arrives, not only the headline fee.",
    "Many people keep a Dutch account for daily life and add a bank or specialist path for corridors they use often.",
  ] as const,
} as const;

export const howPaymentsWorkPageModel = {
  path: HOW_PAYMENTS_WORK_PATH,
  publishDate: "2026-04-28",

  seo: {
    title: "How paying in the Netherlands works | ExpatCopilot",
    description:
      "Simple guide for newcomers: your bank account number, paying in shops and online, rent, salary, and bills. Details differ by bank and contract — for learning only, not prices or personal advice.",
    keywords: [
      "how payments work netherlands",
      "iban ideal sepa netherlands",
      "ideal payments netherlands expats",
      "dutch payment methods explained",
      "paying rent utilities netherlands",
      "sepa direct debit netherlands",
    ],
  },

  /** Unique photorealistic hero for this guide; also used in-page and for OG / Twitter. */
  heroImage: {
    src: "/images/heroes/netherlands-how-payments-work-hero.webp",
    alt: "Photograph of a person at a bright Dutch café table using a smartphone and contactless card at a small payment terminal — hero for how paying in the Netherlands works on ExpatCopilot",
    width: 1536,
    height: 1024,
  },

  /** Photoreal context breaks in “At a glance” — link out from captions in the UI where helpful. */
  editorialFigures: [
    {
      src: "/images/heroes/netherlands-money-banking-hub-hero.png",
      alt: "Warm editorial photograph suggesting Dutch banking and everyday money tasks — companion visual for the payments guide",
      caption: "When you are ready to pick features (iDEAL, cards, fees), the Banking hub pulls the wider set of guides into one place.",
      width: 1536,
      height: 1024,
    },
    {
      src: "/images/heroes/netherlands-traditional-vs-digital-banks-hero.png",
      alt: "Split-style editorial image contrasting branch and app-first banking — companion visual for payment setup choices",
      caption: "Branch-led and app-first banks can both handle IBAN, iDEAL, and SEPA — the difference is often onboarding and habits, not the rails themselves.",
      width: 1536,
      height: 1024,
    },
  ] as const,

  sectionNav: [
    { href: "#quick-answer", label: "Payments in daily life" },
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#first-month-payment-setup", label: "Your first month" },
    { href: "#which-payment-method-to-expect", label: "Which payment method?" },
    { href: "#iban-explained", label: "IBAN" },
    { href: "#ideal-explained", label: "iDEAL" },
    { href: "#sepa-direct-debit", label: "Transfers & automatic bills" },
    { href: "#cards-contactless", label: "Debit & credit cards" },
    { href: "#payment-requests", label: "Payment requests" },
    { href: "#salary-rent-utilities", label: "Salary, rent & bills" },
    { href: "#international", label: "International transfers" },
    { href: "#payment-methods-reference", label: "Extra detail" },
    { href: "#expat-situations", label: "Common situations" },
    { href: "#misunderstandings", label: "Misunderstandings" },
    { href: "#related", label: "Related guides" },
    { href: "#banking-glossary", label: "Banking glossary" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ] satisfies MovePillarTocItem[],

  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "How paying in the Netherlands works",
    subtitle:
      "A plain-language walkthrough of what you actually do: use your account number on forms, approve online payments in your bank app, pay rent and shops, handle bills that leave your account automatically, and send money abroad when you need to. Dutch labels like IBAN, iDEAL, and SEPA appear below with short explanations.",
    contextChips: ["Education only", "Not financial advice", "Details vary by bank"],
    trustLine:
      "Every bank, shop, and contract differs slightly. This page describes common habits in the Netherlands; it is not live prices or personal advice. Follow official letters, emails, or bank screens — watch out for scams.",
    trustVariabilityNote:
      "If what you see in real life does not match the examples below, trust your live screen or letter — not this overview.",
    bullets: [
      "Read the quick answer strip first — it is the shortest picture of daily life.",
      "Then skim salary, rent, and household bills — your own contract can still differ.",
      "Use the short examples as prompts, and follow the links when you want a deeper guide.",
    ] as const,
    primaryCta: { label: "Jump to quick answer", href: "#quick-answer" },
    secondaryCta: { label: "Compare banks for expats", href: HPW_BEST_BANKS_PATH },
    heroQuickLinks: [
      { label: "Types of bank accounts", href: HPW_TYPES_PATH },
      { label: "Banking fees & costs", href: HPW_FEES_PATH },
      { label: "Traditional vs digital banks", href: HPW_TRAD_DIG_PATH },
      { label: "Open a bank account", href: HPW_OPEN_BANK_PATH },
    ] as const,
  },

  /** Short scan lines before long-form topic copy (deep-dive panels). */
  topicScanHints: hpwTopicScanHints,

  /**
   * Same “premium focus” dark band as JSON Move guides (e.g. moving-checklist-netherlands) —
   * reuses scan lines so copy stays single-sourced with topic deep dives.
   */
  paymentRailsSignature: {
    eyebrow: "How to use this guide",
    title: "Four rails most people learn first",
    subtitle:
      "Skim the beats below, then open each section for depth — your bank screens and contracts still win when they disagree with this overview.",
    cards: [
      { title: "Identifiers (IBAN)", items: [...hpwTopicScanHints.iban] },
      { title: "Online checkout (iDEAL)", items: [...hpwTopicScanHints.ideal] },
      { title: "Transfers & mandates", items: [...hpwTopicScanHints.sepa] },
      { title: "Cards & contactless", items: [...hpwTopicScanHints.cards] },
    ],
  } satisfies MoveGuideSignatureModel,

  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "A simple map of how paying usually works — always double-check your contract and bank app.",
    cells: [
      {
        title: "What this page is for",
        bullets: [
          "Explains everyday words: account number (IBAN), online checkout through your bank (iDEAL), euro-area transfers, automatic bill payments, cards in shops, and payment links from friends or flatmates.",
        ] as const,
      },
      {
        title: "Best for",
        bullets: [
          "Newcomers sorting salary, rent, and subscriptions, and anyone who finds Dutch checkout unfamiliar.",
        ] as const,
      },
      {
        title: "What it covers",
        bullets: [
          "Day-to-day habits, short word explanations, and links to longer guides — not today’s fees or a product quote.",
        ] as const,
      },
      {
        title: "What it skips",
        bullets: [
          "Tax planning, investing, mortgage picks, and legal advice about your own contract.",
        ] as const,
      },
    ],
    note: "Paying in the Netherlands feels normal once you recognise a few patterns. Names can look odd at first — IBAN, iDEAL, SEPA, incasso (automatic pull), betaalverzoek (payment request), and pinpas (bank card) are all explained below.",
  },

  quickAnswer: {
    id: "quick-answer",
    eyebrow: "Quick answer",
    title: "Dutch payments in daily life",
    subtitle: "Four common habits you will bump into — your bank and the shop or landlord still choose the exact screens and wording.",
    cards: buildBankingPaymentQuickAnswerCards(),
  },

  sepaTransferFlowCaption:
    "A simplified bank-to-bank transfer path — your bank’s labels and screens may differ.",

  firstMonthSetup: {
    id: "first-month-payment-setup",
    eyebrow: "New arrivals",
    title: "Your first month: getting payments sorted",
    subtitle:
      "A simple checklist for the first weeks — your order may change with your job, lease, and bank. Confirm every payment instruction on official letters or websites.",
    cards: [
      {
        id: "working-account",
        title: "1. Get a working payment account",
        bullets: [
          "Open a local (branch-led) or digital account you can actually use for iDEAL, debit, and transfers — match the stack to your documents and BSN timing.",
          "Learn your IBAN by heart for forms: it is the identifier for salary, rent, and many mandates, not your card number.",
        ] as const,
      },
      {
        id: "salary-details",
        title: "2. Confirm salary payment details",
        bullets: [
          "Give HR / payroll your IBAN (and any proof they request) before the first pay run so payouts are not delayed.",
          "Ask when pay day lands and whether you are paid monthly or otherwise — align rent and debit dates with a small buffer.",
        ] as const,
      },
      {
        id: "rent-utilities",
        title: "3. Set up rent and utilities",
        bullets: [
          "Follow the lease for rent — usually transfer or standing order to the landlord IBAN with the exact reference.",
          "Utilities often use direct debit after you sign a mandate — keep payment dates on a calendar so you do not miss pulls.",
        ] as const,
      },
      {
        id: "ideal-habits",
        title: "4. Learn iDEAL for online payments",
        bullets: [
          "Webshops and many services route checkout through iDEAL — you approve in your bank app, not on the merchant’s card form.",
          "Bills and tickets may also use iDEAL — check that your chosen account supports it on the bank’s official feature list.",
        ] as const,
      },
      {
        id: "backup-method",
        title: "5. Keep a backup payment method",
        bullets: [
          "Carry a spare debit card or a second way to pay if one card is blocked, expired, or not accepted.",
          "A digital wallet or bank app flow can help where supported — keep a foreign card only as a backup; debit-first habits dominate in many shops.",
        ] as const,
      },
      {
        id: "recurring-watch",
        title: "6. Watch recurring payments",
        bullets: [
          "Review direct debits and subscriptions in your banking app after signup — old mandates can keep charging.",
          "Keep an account balance buffer above expected pulls so a surprise bill does not cascade into fees or disconnections.",
        ] as const,
      },
    ] as const,
    ctas: [
      { href: HPW_OPEN_BANK_PATH, label: "Open bank account guide" },
      { href: HPW_BEST_BANKS_PATH, label: "Compare banks for expats" },
      { href: HPW_FEES_PATH, label: "Understand banking fees" },
    ] as const,
  },

  paymentMethodChooser: {
    id: "which-payment-method-to-expect",
    eyebrow: "By situation",
    title: "Which payment method should you expect?",
    subtitle:
      "These are usual patterns in the Netherlands — your shop, landlord, or agency can still do something different. Always follow the checkout screen, lease, or letter you actually received.",
    cards: [
      {
        id: "chooser-online-shopping",
        title: "Online shopping",
        expected: "iDEAL or card, depending on the merchant and which checkout options they enable.",
        watchOut:
          "Your bank must support iDEAL on the account you use; foreign card brands are not guaranteed on every Dutch webshop.",
        relatedGuideKey: "living-shopping-groceries",
      },
      {
        id: "chooser-rent",
        title: "Rent",
        expected: "Bank transfer to the landlord’s IBAN or a recurring transfer / standing order you configure yourself.",
        watchOut:
          "Use the payment reference exactly as the lease or landlord requests — wrong text can delay allocation.",
        relatedGuideKey: "open-bank-account",
      },
      {
        id: "chooser-utilities",
        title: "Utilities",
        expected: "Direct debit after you sign a mandate, or sometimes a recurring payment you approve each period.",
        watchOut:
          "Keep a balance buffer before pull dates — failed incasso can trigger fees or disconnections.",
        relatedGuideKey: "utilities-services-comparison",
      },
      {
        id: "chooser-groceries",
        title: "Groceries",
        expected: "Debit card (pinpas) with chip, contactless, or mobile wallet where the terminal supports it.",
        watchOut:
          "You may be asked for PIN after limits; at terminals, avoid expensive dynamic currency conversion — pay in euros here.",
        relatedGuideKey: "living-shopping-groceries",
      },
      {
        id: "chooser-splitting",
        title: "Splitting dinner or shared costs",
        expected: "Payment request (betaalverzoek) or a Tikkie-style link so everyone pays their share from a bank flow.",
        watchOut:
          "Verify who sent the link and what it is for — treat unknown requests like any other payment link.",
        relatedGuideKey: "living-apps",
      },
      {
        id: "chooser-abroad",
        title: "Sending money abroad",
        expected: "Bank SEPA transfer, a transfer specialist, or a digital / multi-currency layer — depending on corridor and urgency.",
        watchOut:
          "Compare total cost (fee + FX) on the same day; headline fees can hide a wide spread.",
        relatedGuideKey: "living-payments-hub",
      },
      {
        id: "chooser-government",
        title: "Government or municipality payments",
        expected: "iDEAL, bank transfer, or direct debit depending on the bill and agency — read the letter or official portal.",
        watchOut:
          "Scams impersonate Belastingdienst or gemeente staff — never pay from links in random messages; use bookmarked portals.",
        relatedGuideKey: "tax-advisors",
      },
    ] as const,
  },

  iban: howPaymentsWorkGuideSections.iban,
  ideal: howPaymentsWorkGuideSections.ideal,
  sepa: howPaymentsWorkGuideSections.sepa,
  cards: howPaymentsWorkGuideSections.cards,
  paymentRequests: howPaymentsWorkGuideSections.paymentRequests,

  salaryRent: {
    id: "salary-rent-utilities",
    eyebrow: "Recurring money",
    title: "Salary, rent, utilities, and recurring payments",
    intro:
      "These are typical patterns — your lease, employer, or provider may use a different flow. Always follow written instructions from the official counterparty.",
    patterns: [
      {
        title: "Salary",
        lines: [
          "Paid to the IBAN you give HR — often a Dutch current account.",
          "Employers may ask for IBAN proof from a bank letter or app screenshot depending on policy.",
        ] as const,
      },
      {
        title: "Rent",
        lines: [
          "Usually transfer to the landlord’s IBAN or a standing payment you configure.",
          "Keep the payment reference exactly as requested so allocation is automatic.",
        ] as const,
      },
      {
        title: "Utilities",
        lines: [
          "Often direct debit once you authorise the supplier.",
          "Keep enough balance before pull dates — failed debits can cascade into fees or disconnections.",
        ] as const,
      },
      {
        title: "Insurance & subscriptions",
        lines: [
          "Frequently recurring direct debit after a mandate.",
          "Cancel with the merchant first, then confirm the mandate status in banking if needed.",
        ] as const,
      },
      {
        title: "Taxes & municipality",
        lines: [
          "May use iDEAL, transfer, or direct debit depending on the bill — use official portal links only.",
        ] as const,
      },
    ] as const,
    checklistIntro:
      "Small habits that reduce failed pulls, surprise charges, and missed updates when you move or change banks.",
    checklist: [
      "Keep payment dates visible on a calendar.",
      "Keep a small buffer for automatic pulls.",
      "Review direct debit authorisations after life changes.",
      "Update IBAN everywhere when you switch banks.",
    ] as const,
  },

  /** Visual step lists — education only; bank screens vary. */
  paymentFlows: {
    ibanSepaTransfer: {
      flowLabel: "Typical SEPA credit transfer from IBAN to confirmation",
      steps: [
        {
          id: "gather-iban",
          title: "Gather IBAN and reference",
          description: "Copy the creditor IBAN, account name, amount, and any payment reference from the invoice, lease, or portal.",
        },
        {
          id: "start-transfer",
          title: "Start a SEPA transfer in your bank",
          description: "Choose euro and SEPA (or your bank’s equivalent label), paste the IBAN, and enter the reference exactly as requested.",
        },
        {
          id: "confirm",
          title: "Confirm and keep proof",
          description: "Approve in your app or sign with your bank’s security step. Save the confirmation or PDF until the counterparty books the payment.",
        },
      ] as const,
    },
    salary: {
      flowLabel: "Typical Dutch salary payment flow",
      steps: [
        {
          id: "hr-iban",
          title: "HR collects your IBAN",
          description: "You provide your IBAN (and sometimes proof of account) so payroll can set up payouts.",
        },
        {
          id: "payroll-run",
          title: "Payroll sends the batch",
          description: "On pay day your employer’s bank sends a credit transfer to your account — timing depends on cut-off rules.",
        },
        {
          id: "salary-arrives",
          title: "Salary arrives and reconciles",
          description: "Funds appear on your betaalrekening; match the amount and description to your payslip when you reconcile.",
        },
      ] as const,
    },
    rent: {
      flowLabel: "Typical rent payment flow",
      steps: [
        {
          id: "contract-iban",
          title: "Contract lists landlord IBAN",
          description: "Your lease or onboarding email shows IBAN, name, and the reference text you must use each month.",
        },
        {
          id: "transfer-or-standing",
          title: "You transfer or automate",
          description: "Either send a manual transfer each period or set a standing order with the same reference.",
        },
        {
          id: "landlord-books",
          title: "Landlord matches the payment",
          description: "They allocate incoming transfers using the reference — wrong or missing text can delay confirmation.",
        },
      ] as const,
    },
    utilities: {
      flowLabel: "Typical utilities payment flow with direct debit",
      steps: [
        {
          id: "signup-mandate",
          title: "You authorise the supplier",
          description: "During signup you approve a SEPA direct debit mandate so the company can pull approved amounts.",
        },
        {
          id: "advance-notice",
          title: "Notice and pull date",
          description: "You usually see the amount and date on an invoice or email before the debit — keep balance ready.",
        },
        {
          id: "debit-settles",
          title: "Debit settles on your account",
          description: "The amount leaves your account; you can dispute or adjust through your bank and the supplier’s process if something looks wrong.",
        },
      ] as const,
    },
  } as const,

  conceptReference: {
    id: "payment-methods-reference",
    eyebrow: "Reference",
    title: "Payment methods (quick reference)",
    subtitle:
      "Skim each card top-down: short definition, then bullets, then expand “Optional longer read” only when you want the longer paragraphs. Not every product in the market — confirm on official bank and scheme sites.",
    concepts: getHowPaymentsWorkConceptGridConcepts(),
  },

  international: howPaymentsWorkGuideSections.international,

  situations: {
    id: "expat-situations",
    eyebrow: "Scenarios",
    title: "Common payment situations for expats",
    subtitle: "Each card: typical method, watch-out, and guide link. Keep it practical — your contract still wins.",
    cards: buildBankingPaymentSituationCards(),
  },

  misunderstandings: {
    id: "misunderstandings",
    eyebrow: "Reality check",
    title: "What people often misunderstand",
    subtitle: "Eight frequent mix-ups we hear from readers — not a complete list of every edge case.",
    cards: howPaymentsWorkMisunderstandings,
  },

  relatedTools: {
    id: "related",
    eyebrow: "Keep exploring",
    title: "Related tools and guides",
    subtitle: "Next steps: choose a bank, read about fees, or explore Living guides for day-to-day setup.",
    cards: [
      { title: "Best banks for expats", description: "Editorial comparison after you know account-number and checkout needs.", href: HPW_BEST_BANKS_PATH, ctaLabel: "Open guide" },
      { title: "Traditional vs digital banks", description: "How people combine branch and app banks for daily payments.", href: HPW_TRAD_DIG_PATH, ctaLabel: "Read guide" },
      { title: "Banking fees & costs", description: "Fee checklist before you rely on transfers or travel features.", href: HPW_FEES_PATH, ctaLabel: "Open fee guide" },
      { title: "Types of bank accounts", description: "Everyday, savings, joint, student, business — labels first.", href: HPW_TYPES_PATH, ctaLabel: "Account types" },
      { title: "Open a bank account in the Netherlands", description: "Move guide — documents, BSN timing, order of operations.", href: HPW_OPEN_BANK_PATH, ctaLabel: "Move guide" },
      {
        title: "Banking safety & fraud",
        description: "Phishing, payment-request checks, marketplace scams, and calm first-response habits next to everyday Dutch rails.",
        href: HPW_BANKING_SECURITY_PATH,
        ctaLabel: "Read safety guide",
      },
      {
        title: "Bank account rejected or delayed",
        description: "If a bank application is stuck or declined — document checks, BSN timing, and next steps.",
        href: "/netherlands/money/banking/account-rejection/",
        ctaLabel: "Open guide",
      },
      { title: "Banking hub", description: "All banking guides and the shared glossary in one place.", href: "/netherlands/money/banking/", ctaLabel: "Open hub" },
    ] as const,
  },

  faq: [
    { q: "What is an IBAN?", a: "An IBAN is your bank account number format used for transfers and many direct debits in the Netherlands and across SEPA. Dutch IBANs start with NL followed by digits and your bank identifier." },
    { q: "What is iDEAL?", a: "iDEAL is a common Dutch online checkout where you approve a payment through your bank instead of typing card details on the merchant site." },
    { q: "Do I need iDEAL in the Netherlands?", a: "You do not need it as a person, but many merchants route online payments through iDEAL. Having an everyday account that supports iDEAL usually makes life easier." },
    { q: "What is SEPA?", a: "SEPA is the Single Euro Payments Area — shared rules for many euro bank payments between participating countries, including transfers and direct debits." },
    { q: "What is a direct debit / incasso?", a: "A direct debit lets a company pull money from your account after you approve a mandate. Dutch paperwork often calls this incasso." },
    { q: "Are credit cards widely accepted in the Netherlands?", a: "Debit is central for many shops and services. Credit cards are used but acceptance varies, especially in smaller shops or some online flows." },
    { q: "Can I use a foreign IBAN?", a: "Often yes for simple SEPA euro transfers, but local templates for salary, rent, or direct debit may be smoother with a Dutch-friendly account. If you believe you are refused service only because of a foreign IBAN on a euro account, review EU consumer guidance and official complaint routes." },
    { q: "How do people split payments in the Netherlands?", a: "Common patterns include betaalverzoek links, bank-app requests, and small-group tools like Tikkie for casual splits — always verify who you are paying." },
    { q: "How do I pay rent and utilities?", a: "Rent is often a transfer to a landlord IBAN with a set reference. Utilities frequently use direct debit after you authorise the supplier. Follow the written instructions you receive." },
    { q: "What should I know before sending money abroad?", a: "Compare total cost including exchange rate and fees, use official calculators, and know whether you are on a SEPA euro route or something else. Large or urgent transfers deserve extra checks of recipient details." },
  ],

  officialSources: {
    sectionId: "official-sources",
    sectionTitle: "Official sources",
    disclaimer:
      "These links support learning about payment schemes and consumer rights — they do not replace your bank contract or case-specific advice.",
    groups: [
      { id: "ideal", title: "iDEAL", links: [{ type: "external" as const, label: "iDEAL — scheme overview", href: "https://www.ideal.nl/en/" }] },
      {
        id: "sepa",
        title: "SEPA / European payments",
        links: [{ type: "external" as const, label: "European Payments Council — SEPA", href: "https://www.europeanpayments.eu/" }],
      },
      { id: "dnb", title: "Dutch banking supervision", links: [{ type: "external" as const, label: "De Nederlandsche Bank (DNB)", href: "https://www.dnb.nl/en/" }] },
      {
        id: "consumer",
        title: "Payment accounts & IBAN (EU orientation)",
        links: [
          {
            type: "external" as const,
            label: "Your Europe — bank accounts & payments",
            href: "https://europa.eu/youreurope/citizens/consumers/financial-products-and-services/bank-accounts-and-payments/index_en.htm",
          },
        ],
      },
      {
        id: "ecb",
        title: "SEPA regulation context",
        links: [{ type: "external" as const, label: "ECB — SEPA overview", href: "https://www.ecb.europa.eu/paym/intro/mip-online/sepa/html/index.en.html" }],
      },
      {
        id: "expatcopilot",
        title: "More on ExpatCopilot",
        links: [
          { type: "internal" as const, label: "Banking safety & fraud", href: BANKING_SECURITY_PATH },
          { type: "internal" as const, label: "Banking hub", href: "/netherlands/money/banking/" },
        ],
      },
    ],
  } satisfies MoveVisaResidencyReferences,
};

export type HowPaymentsWorkPageModel = typeof howPaymentsWorkPageModel;

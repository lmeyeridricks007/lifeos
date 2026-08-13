import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPaths";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { TYPES_OF_BANK_ACCOUNTS_PATH } from "@/src/components/money/types-of-bank-accounts/typesOfBankAccountsPageModel";
import { HOW_PAYMENTS_WORK_PATH } from "@/src/components/money/how-payments-work/howPaymentsWorkPageModel";
import { BANKING_ACCOUNT_REJECTION_PATH } from "@/src/data/banking/accountRejection";
import {
  BANK_COMPARISON_TOOL_PATH,
  BANKING_COST_ESTIMATOR_PATH,
} from "@/src/components/tools/banking-cost/bankingCostPageModel";

/** Keep this SEO URL — do not relocate under /money/banking/. */
export const OPEN_BANK_ACCOUNT_NETHERLANDS_PATH = "/netherlands/open-bank-account-netherlands/" as const;

export type OpenBankLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon" | "external";
};

export type TipCard = { title: string; body: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type MistakeCard = { title: string; body: string; advice: string };
export type TimelineStep = { phase: string; title: string; detail: string };
export type ScenarioRow = { situation: string; approach: string; firstStep: string };
export type HowToStep = { name: string; text: string };
export type DocumentRow = { document: string; why: string; tip: string };
export type CostRow = { type: string; typical: string; notes: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "open-bank-account-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const openBankAccountNetherlandsPage = {
  slug: "open-bank-account-netherlands",
  path: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
  hubPath: BANKING_HUB_PATH,
  publish: true,
  publishDate: "2026-08-12",
  seo: {
    title: "Open a Bank Account in the Netherlands | Complete Guide for Expats",
    description:
      "How to open a Dutch bank account as an expat: documents, BSN timing, step-by-step setup, common delays, and calm next steps — orientation only, verify with each bank.",
    keywords: [
      "open bank account Netherlands",
      "Dutch bank account for expats",
      "open bank account without BSN Netherlands",
      "BSN bank account Netherlands",
      "expat banking Netherlands",
      "how to open Dutch bank account",
      "bank account requirements Netherlands",
      "iDEAL bank account Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Banking",
    pageTitle: "Open a Bank Account in the Netherlands",
    subtitle:
      "A practical setup guide for expats: documents, BSN timing, step-by-step onboarding, and what to do when applications stall — without ranking banks or promising approval.",
    primaryCta: { label: "See the steps", href: "#steps" },
    secondaryCta: { label: "BSN timing", href: "#bsn" },
    chips: ["Documents", "BSN timing", "Steps", "Delays", "iDEAL"],
    disclaimer:
      "General orientation only — not financial, legal or tax advice. Banks set their own rules and decide each application. Fees and requirements change; confirm on each provider’s official pages before you apply.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic Dutch canal-side desk scene: multicultural expat preparing a bank application with passport, municipality letter, laptop showing a generic banking form, and Euro notes — soft daylight through canal-house windows.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#why-need", label: "Why you need one" },
    { href: "#requirements", label: "Documents" },
    { href: "#bsn", label: "BSN timing" },
    { href: "#steps", label: "Steps" },
    { href: "#timeline", label: "Timeline" },
    { href: "#delays", label: "Delays" },
    { href: "#account-types", label: "Account types" },
    { href: "#costs", label: "Costs" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
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
      "Premium orientation board titled Open a Dutch Account — four building blocks: gather ID and address proof, plan BSN timing, choose a path that fits salary and rent, then apply and verify details with the bank — right-side Setup file rail lists passport, BSN, Dutch address and residence permit.",
      "Four building blocks cover most first-account questions: papers, BSN timing, everyday use, and a calm apply-and-verify loop."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch bank setup for expats — salary and rent needs, document pack, BSN window, online vs branch paths, iDEAL and direct debits, and a delays recovery pointer — Dutch canal skyline band and ExpatLife brand footer.",
      "Six cards summarise the setup journey; deeper sections below expand each theme without ranking banks."
    ),
    whyNeed: visual(
      "why-need",
      "Premium Dutch payments ecosystem map showing salary into a local IBAN, rent and utilities via direct debit, health insurance premiums, online checkout with iDEAL, and card payments in shops — desk scene with payment icons and a Verify with providers rail.",
      "Everyday Dutch money rails usually expect a local account — salary, rent, insurance, utilities and iDEAL."
    ),
    requirements: visual(
      "requirements",
      "Premium document pack builder for opening a Dutch bank account — passport or EU ID, BSN or interim plan, Dutch residential address, residence permit if applicable, and optional income proof — checklist rail and General information only note.",
      "Build your document pack once, then match it to each bank’s current upload list before you apply."
    ),
    bsn: visual(
      "bsn",
      "Premium BSN timing calendar for bank onboarding — municipality registration, BSN issued, apply with BSN ready, or start early and submit BSN later when a bank allows it — timeline rail with verify-with-bank callouts.",
      "Most banks want a BSN; some allow starting earlier if you can submit the number later — always confirm on the bank site."
    ),
    steps: visual(
      "steps",
      "Premium step-by-step desk flow for opening a Dutch account — choose a shortlist, check current rules, prepare scans, complete onboarding, wait for review, then activate cards and set up salary and direct debits — numbered journey with Dutch city backdrop.",
      "A calm six-step path from shortlist to first payroll and rent payments — verify each bank’s live flow."
    ),
    delays: visual(
      "delays",
      "Premium delay and rejection triage board — missing BSN, address mismatch, blurry scans, compliance questions, and stuck applications — with a calm next-steps rail pointing to the account rejection guide.",
      "When onboarding stalls, triage the cause calmly — then use the dedicated rejection guide for recovery steps."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for Dutch bank setup — highly skilled migrant needing a salary account, international student seeking a low-cost path, entrepreneur planning personal plus business accounts, and family needing joint access — each with first-step cards.",
      "Different arrival stories change priorities — not which bank is “best overall.”"
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for opening a Dutch bank account — applying before documents are ready, assuming one bank fits every bill, ignoring BSN windows, skipping official fee PDFs, and panicking after a delay — with Fix tips on a right-side rail.",
      "Common setup mistakes and calmer fixes — orientation only, no approval guarantees."
    ),
    checklist: visual(
      "checklist",
      "Premium pre-apply checklist board for Dutch banking setup — ID scans ready, address consistent, BSN plan noted, bank rules checked today, backup shortlist prepared, and rejection guide bookmarked — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist the day before you apply — then confirm every item against the bank’s own pages."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Understand why a Dutch account matters for salary, rent and iDEAL",
        "Build a document pack that matches bank onboarding lists",
        "Plan BSN timing without guessing bank policies",
        "Follow a calm step path and know where to go if review stalls",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Setup is a process, not a single click",
        "BSN and address timing drive many delays",
        "Compare banks on the dedicated best-banks page",
        "Transfers and fees have their own deep guides",
      ],
    },
    whyNeed: {
      title: "Why locals expect a Dutch IBAN",
      items: [
        "Employers often pay into a Dutch account",
        "Landlords and utilities use local direct debits",
        "Many online checkouts rely on iDEAL",
        "Some shops prefer Dutch debit cards",
      ],
    },
    requirements: {
      title: "Document pack habits",
      items: [
        "Use clear colour scans of the same ID you will travel with",
        "Keep your Dutch address spelling consistent everywhere",
        "Have residence-permit pages ready if your status requires them",
        "Do not invent documents — ask the bank what they accept",
      ],
    },
    bsn: {
      title: "BSN timing habits",
      items: [
        "Book municipality registration early when you can",
        "Read each bank’s current BSN / newcomer page before applying",
        "If a bank allows “BSN later”, diary the deadline they give you",
        "Rejection after missing a BSN window is common — plan ahead",
      ],
    },
    steps: {
      title: "Onboarding habits",
      items: [
        "Shortlist 2–3 options before you upload anything",
        "Screenshot or save the bank’s rules on the day you apply",
        "Complete forms carefully — typos trigger manual review",
        "Only after approval: cards, payroll details, then billers",
      ],
    },
    delays: {
      title: "If review stalls",
      items: [
        "Read the bank’s exact message before re-applying",
        "Fix documents and data mismatches first",
        "Avoid rapid multi-bank spam applications",
        "Use the account rejection guide for triage",
      ],
    },
    scenarios: {
      title: "Scenario planning tips",
      items: [
        "Salary-first arrivals prioritise a payroll-ready account",
        "Students often start with low-cost or student-friendly options",
        "Entrepreneurs plan KvK timing for business accounts separately",
        "Families check joint access and shared budgeting features",
      ],
    },
    mistakes: {
      title: "Mistake prevention",
      items: [
        "Do not treat marketing “easy signup” as guaranteed approval",
        "Do not skip fee PDFs and product terms",
        "Do not rely on one fintech for every Dutch biller",
        "Do not ignore BSN or address mismatches",
      ],
    },
    checklist: {
      title: "Ready-to-apply signals",
      items: [
        "ID and address pack is complete and consistent",
        "BSN plan is written down with dates",
        "Bank rules checked today (not last month’s blog post)",
        "Backup shortlist and rejection guide are saved",
      ],
    },
  },
  introParagraphs: [
    "Opening a Dutch bank account is usually one of the first practical money steps after you arrive — and often before your first salary, rent payment or health-insurance premium is due.",
    "This page is the how-to: documents, BSN timing, step-by-step onboarding, and what to do when applications stall. For side-by-side bank comparisons, use Best banks for expats. For sending money abroad, use International transfers. For fee frameworks, use Banking fees.",
  ],
  introHighlights: [
    "Orientation for newcomers and returners setting up a first Dutch everyday account",
    "Clear boundary: setup process here — rankings and transfer deep-dives live on sibling pages",
    "Links into the Banking hub, tools, and Move early-setup guides for BSN and registration",
  ],
  orientationFlowSteps: [
    "Gather ID, address proof and any residence documents",
    "Plan municipality registration / BSN timing",
    "Shortlist banks that fit salary, rent and language needs",
    "Apply carefully, then activate cards and direct debits",
  ],
  safetyFileChecklist: [
    "Passport or EU ID (valid, clear scan)",
    "Dutch residential address as registered / offered",
    "BSN once issued — or a written plan if applying earlier",
    "Residence permit pages if your status requires them",
    "Employer or enrolment letter if a bank asks for income / student proof",
    "Bookmark: Best banks, Account rejection, Banking hub",
  ],
  introScenarios: [
    {
      situation: "Just arrived, salary starting soon",
      approach: "Prioritise a payroll-ready Dutch IBAN and a realistic BSN plan",
      firstStep: "Check municipality appointment timing, then shortlist banks",
    },
    {
      situation: "Documents incomplete",
      approach: "Build the pack first — rushing uploads often creates delays",
      firstStep: "Use the documents section checklist before any application",
    },
    {
      situation: "Application already stuck",
      approach: "Triage the bank message; do not spam new applications",
      firstStep: "Open the Account rejection guide after the delays section",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: can expats open a Dutch bank account?",
    summary:
      "Yes — many banks allow internationals to open an everyday account when ID, Dutch address and (usually) a BSN are in place. Some banks may let you start earlier and submit the BSN later; always confirm the current rule on that bank’s site.",
    bullets: [
      "Typical ask: passport/EU ID, Dutch address, BSN, and residence documents if applicable",
      "Online onboarding can take minutes to a few days when checks pass",
      "Indicative personal-account fees often fall around €3–€5/month (2026 orientation — verify live tariffs)",
      "If rejected or stuck, use the Account rejection guide — do not assume another bank will auto-approve you",
    ],
    note: "This page does not crown a “best bank”. Use Best banks for expats and the bank comparison tool when you are ready to shortlist.",
  },
  snapshotSignals: [
    {
      label: "BSN",
      value: "Usually required",
      note: "Some banks allow BSN later — confirm per provider",
    },
    {
      label: "Address",
      value: "Dutch address common",
      note: "Spelling must match your registration papers",
    },
    {
      label: "Opening time",
      value: "Minutes to days",
      note: "Manual review and business accounts take longer",
    },
    {
      label: "Monthly fee",
      value: "Often €3–€5",
      note: "2026 indicative band — check each bank’s PDF",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "What this page covers",
      body: "How to open an account: documents, BSN timing, steps, delays and checklists for expats.",
    },
    {
      title: "What you typically need",
      body: "Valid ID, Dutch address, usually a BSN, and residence paperwork when your status requires it.",
    },
    {
      title: "What happens next",
      body: "Apply, pass bank checks, receive IBAN/card access, then set salary and direct debits.",
    },
    {
      title: "Where comparisons live",
      body: "Best banks for expats — not here. This page stays focused on the setup process.",
    },
    {
      title: "Where transfers live",
      body: "International transfers guide + transfer cost calculator for sending money abroad.",
    },
    {
      title: "If onboarding fails",
      body: "Account rejection guide for triage, document fixes and calm next steps.",
    },
  ] satisfies TipCard[],
  whyNeed: {
    heading: "Why expats usually need a Dutch bank account",
    lead:
      "Most everyday money flows in the Netherlands assume a local account. You can sometimes bridge with foreign cards or transfer apps, but salary, rent, insurance and iDEAL often work more smoothly with a Dutch IBAN.",
    bullets: [
      "Salary and contractor payouts",
      "Rent and housing deposits",
      "Health insurance premiums",
      "Utilities, telecom and subscriptions",
      "Taxes and allowances (when paid to you)",
      "Online payments via iDEAL",
    ],
    crossLinks: [
      {
        label: "How payments work",
        href: HOW_PAYMENTS_WORK_PATH,
        description: "iDEAL, direct debits, transfers and checkout in plain English",
      },
      {
        label: "Types of bank accounts",
        href: TYPES_OF_BANK_ACCOUNTS_PATH,
        description: "Everyday, savings, joint, student and business labels",
      },
    ] satisfies OpenBankLink[],
  },
  requirements: {
    heading: "Requirements to open an account",
    lead:
      "Banks typically ask for a standard pack. You receive a BSN after registering with a municipality, so early registration planning helps banking setup. Exact lists differ by bank and change over time.",
    callout: {
      title: "If onboarding stalls",
      text: "Application rejected, delayed, or stuck? Use the Account rejection guide for triage, document checks and calm next steps.",
      href: BANKING_ACCOUNT_REJECTION_PATH,
      linkLabel: "Open Account rejection guide",
    },
    documents: [
      {
        document: "Passport or EU ID",
        why: "Identity and KYC checks",
        tip: "Use clear colour scans; match the name spelling everywhere",
      },
      {
        document: "BSN (citizen service number)",
        why: "Regulatory and tax reporting for many banks",
        tip: "If you do not have it yet, read the BSN timing section first",
      },
      {
        document: "Dutch residential address",
        why: "Verification and correspondence",
        tip: "Keep street spelling consistent with municipality records",
      },
      {
        document: "Residence permit (if applicable)",
        why: "Status checks for non-EU routes",
        tip: "Include all pages the bank asks for — not only the front",
      },
      {
        document: "Proof of income / enrolment (sometimes)",
        why: "Extra checks for some products or risk profiles",
        tip: "Employer letter, contract or university enrolment when requested",
      },
    ] satisfies DocumentRow[],
    relatedMoveLinks: [
      {
        label: "Municipality registration",
        href: "/netherlands/municipality-registration-netherlands/",
        description: "Register locally — often the path to a BSN",
      },
      {
        label: "BSN registration",
        href: "/netherlands/bsn-registration/",
        description: "How the citizen service number fits arrival timing",
      },
      {
        label: "Register your address",
        href: "/netherlands/practical-life/registering-your-address-netherlands/",
        description: "Address registration steps and documents",
      },
    ] satisfies OpenBankLink[],
  },
  bsn: {
    heading: "Do you need a BSN first?",
    lead:
      "Most banks require a BSN for regulatory and tax reporting reasons. Some banks may allow you to start an account and submit the BSN later (sometimes within a stated window such as about 90 days). Whether that path is open depends on your documents, nationality context and the bank’s current onboarding rules.",
    bullets: [
      "Treat “BSN later” as a bank-specific exception, not a universal right",
      "Diary any deadline the bank gives you for submitting the BSN",
      "Missing a BSN window is a common reason applications stall or close",
      "Municipality registration timing is often the critical path — plan it early",
    ],
    timeline: [
      {
        phase: "1",
        title: "Book municipality registration",
        detail: "Secure an appointment as soon as your housing and documents allow.",
      },
      {
        phase: "2",
        title: "Receive your BSN",
        detail: "After successful registration, your BSN becomes available for banking and other services.",
      },
      {
        phase: "3",
        title: "Apply with BSN ready (default path)",
        detail: "Many retail banks expect the number during onboarding.",
      },
      {
        phase: "4",
        title: "Or start early only if the bank allows it",
        detail: "If a provider lets you submit BSN later, follow their exact instructions and deadline.",
      },
    ] satisfies TimelineStep[],
    crossLinks: [
      {
        label: "Best banks for expats",
        href: BEST_BANKS_EXPATS_PATH,
        description: "Compare onboarding patterns — still verify BSN rules on each bank site",
      },
      {
        label: "Account rejection guide",
        href: BANKING_ACCOUNT_REJECTION_PATH,
        description: "What to do if BSN timing or documents block approval",
      },
    ] satisfies OpenBankLink[],
  },
  steps: {
    heading: "How to open a Dutch bank account (step by step)",
    lead: "Use this as a practical sequence. Your bank’s app or branch flow is authoritative if it differs.",
    howToSteps: [
      {
        name: "Clarify what you need the account for",
        text: "Salary, rent, iDEAL, international transfers, or a temporary bridge — write the jobs the account must do in the next 90 days.",
      },
      {
        name: "Shortlist options without crowning a winner",
        text: "Use Best banks for expats and the bank comparison tool for fit signals, then open each bank’s official newcomer page.",
      },
      {
        name: "Check today’s requirements",
        text: "Confirm ID, address, BSN, residence documents and any income proof on the bank’s site — not on an outdated blog post.",
      },
      {
        name: "Prepare clean scans and consistent details",
        text: "Match name and address spelling across forms. Blurry scans and typos are common delay triggers.",
      },
      {
        name: "Complete onboarding carefully",
        text: "Answer compliance questions honestly. If the bank asks for more information, respond in one clear package.",
      },
      {
        name: "Activate and connect everyday payments",
        text: "After approval: card activation, payroll IBAN to employer, then rent and utility direct debits. Learn payment rails in How payments work.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to open a bank account in the Netherlands as an expat",
    description:
      "Orientation steps for expats opening a Dutch bank account: clarify needs, shortlist, verify bank rules, prepare documents, complete onboarding, and activate everyday payments.",
    anchor: "#steps",
  },
  timeline: {
    heading: "What timing usually looks like",
    lead: "Speeds vary widely. Use these as orientation bands, not promises.",
    steps: [
      {
        phase: "A",
        title: "Same day to a few days",
        detail: "Fully digital onboarding when ID checks pass and documents are complete.",
      },
      {
        phase: "B",
        title: "Several days to about a week",
        detail: "Traditional retail flows or cases sent to manual review.",
      },
      {
        phase: "C",
        title: "Longer for business accounts",
        detail: "KvK and business documentation usually extend approval time — plan ahead.",
      },
      {
        phase: "D",
        title: "Paused or rejected",
        detail: "Missing BSN, address mismatches, or compliance questions — triage before re-applying.",
      },
    ] satisfies TimelineStep[],
  },
  delays: {
    heading: "Common delays and rejections (pointer)",
    lead:
      "Delays are common and not always personal. Banks run identity and risk checks. This section orients you; the dedicated rejection guide walks recovery in more detail.",
    cards: [
      {
        title: "BSN timing gap",
        body: "You applied before the bank could verify your BSN, or you missed a “submit later” window.",
      },
      {
        title: "Address or ID mismatch",
        body: "Spelling differs across passport, form and municipality records, or scans are unreadable.",
      },
      {
        title: "Extra compliance questions",
        body: "Banks may ask about source of funds or activity — answer clearly; this is normal screening.",
      },
      {
        title: "Product / eligibility mismatch",
        body: "The product you chose may not fit your residence status or document set right now.",
      },
    ] satisfies TipCard[],
    crossLink: {
      title: "Need a recovery plan?",
      description:
        "If your application was rejected, delayed or stuck, use the Account rejection guide for document checks, workarounds and calm next steps.",
      href: BANKING_ACCOUNT_REJECTION_PATH,
      linkLabel: "Open rejection guide",
    },
  },
  accountTypes: {
    heading: "Account types — keep this page focused",
    lead:
      "Everyday current accounts (betaalrekening) are what most newcomers need first. Savings, joint, student and business products have different rules. Learn the labels on Types of bank accounts, then compare brands on Best banks for expats.",
    bullets: [
      "Everyday account: salary, rent, iDEAL, debit card",
      "Savings: separate from day-to-day spending",
      "Joint: useful for some households — check both holders’ documents",
      "Business: usually needs KvK and extra checks (see Best bank for ZZP)",
    ],
    links: [
      {
        label: "Types of bank accounts",
        href: TYPES_OF_BANK_ACCOUNTS_PATH,
        description: "Product labels before you compare brands",
      },
      {
        label: "Traditional vs digital banks",
        href: "/netherlands/money/banking/traditional-vs-digital/",
        description: "Branch depth versus app-speed trade-offs",
      },
      {
        label: "Best banks for expats",
        href: BEST_BANKS_EXPATS_PATH,
        description: "Shortlist and comparison table",
      },
    ] satisfies OpenBankLink[],
  },
  costs: {
    heading: "Typical costs (indicative, 2026)",
    lead:
      "Fees change. Use these bands only for planning, then confirm each bank’s official price list. For frameworks and hidden-cost categories, read Banking fees; for modelling, use the banking cost estimator.",
    rows: [
      {
        type: "Traditional personal accounts",
        typical: "Often about €3–€5 / month",
        notes: "Basic current account band — packages cost more",
      },
      {
        type: "Digital / app plans",
        typical: "Often €0–€10 depending on plan",
        notes: "Free tiers may limit features",
      },
      {
        type: "International transfers",
        typical: "Varies widely",
        notes: "See International transfers + transfer cost calculator",
      },
      {
        type: "Cards / premium add-ons",
        typical: "Varies",
        notes: "Optional — check ATM and FX rules abroad",
      },
    ] satisfies CostRow[],
    links: [
      {
        label: "Banking fees & costs",
        href: "/netherlands/money/banking/fees/",
        description: "Fee categories without live tariff promises",
      },
      {
        label: "Cheapest bank accounts",
        href: "/netherlands/money/banking/cheapest-accounts/",
        description: "Low-cost orientation without fake “cheapest” crowns",
      },
      {
        label: "Banking cost estimator",
        href: BANKING_COST_ESTIMATOR_PATH,
        description: "Planning bands for monthly and yearly costs",
      },
      {
        label: "International transfers",
        href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
        description: "Cross-border fees, FX and speed — not covered in depth here",
      },
    ] satisfies OpenBankLink[],
  },
  scenarios: {
    heading: "Example scenarios",
    intro: "Different situations change priorities — not a universal ranking.",
    rows: [
      {
        situation: "Highly skilled migrant",
        approach: "Need a salary account quickly; prioritise payroll-ready IBAN and realistic BSN timing",
        firstStep: "Check municipality appointment + Best banks shortlist",
      },
      {
        situation: "International student",
        approach: "Often prioritise low monthly cost and simple app onboarding with enrolment proof",
        firstStep: "Ask your institution’s practical office, then compare student-friendly options",
      },
      {
        situation: "Entrepreneur / ZZP",
        approach: "Plan personal account first; business account usually needs KvK and more time",
        firstStep: "Read Best bank for freelancers (ZZP) after personal setup",
      },
      {
        situation: "Family relocating",
        approach: "Decide who holds the salary account; consider joint access only if both can pass checks",
        firstStep: "Align documents for each adult, then shortlist",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: {
    heading: "Common mistakes",
    cards: [
      {
        title: "Applying before the document pack is ready",
        body: "Incomplete uploads trigger manual review or rejection.",
        advice: "Use the requirements checklist the day before you apply.",
      },
      {
        title: "Assuming every bank allows “no BSN yet”",
        body: "Rules differ and change. Blog posts go stale quickly.",
        advice: "Read that bank’s current newcomer page on the day you apply.",
      },
      {
        title: "Using one comparison page as financial advice",
        body: "Shortlists are planning aids, not guarantees of approval or fit.",
        advice: "Confirm products, fees and eligibility on official bank sites.",
      },
      {
        title: "Ignoring transfer and FX costs",
        body: "A cheap monthly fee can still be expensive if you move money abroad often.",
        advice: "Pair this guide with International transfers and the transfer cost calculator.",
      },
      {
        title: "Panicking into spam applications",
        body: "Rapid re-applies without fixing the root cause can worsen delays.",
        advice: "Triage with the Account rejection guide first.",
      },
      {
        title: "Skipping payment-culture basics",
        body: "iDEAL and direct debits feel unfamiliar if you only set up the IBAN.",
        advice: "Read How payments work after approval.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Pre-apply checklist",
    items: [
      "Valid passport or EU ID — clear colour scan ready",
      "Dutch address string matches your registration papers",
      "BSN ready — or a bank-confirmed “submit later” plan with a diary date",
      "Residence permit pages available if required for your status",
      "Employer / enrolment proof ready if your shortlist asks for it",
      "Opened each shortlisted bank’s official requirements page today",
      "Read fee PDF / tariff page for the product you want (2026 verify)",
      "Backup shortlist saved (Best banks + comparison tool)",
      "Account rejection guide bookmarked in case review stalls",
      "After approval plan: payroll IBAN, rent debit, iDEAL test payment",
    ],
  },
  tools: {
    heading: "Tools that help",
    items: [
      {
        label: "Bank comparison tool",
        href: BANK_COMPARISON_TOOL_PATH,
        description: "Questionnaire plus editorial fit scores — confirm on bank sites",
      },
      {
        label: "Banking cost estimator",
        href: BANKING_COST_ESTIMATOR_PATH,
        description: "Monthly and yearly planning bands — not live quotes",
      },
      {
        label: "Transfer cost calculator",
        href: "/netherlands/tools/transfer-cost-calculator/",
        description: "Model cross-border send costs alongside the transfers guide",
      },
    ] satisfies OpenBankLink[],
  },
  faq: [
    {
      q: "Can foreigners open a bank account in the Netherlands?",
      a: "Yes. Many banks allow non-residents and expats to open an account when they meet the bank’s identity, address and (usually) BSN requirements. Some banks may let you start before you have a BSN and submit it later — confirm on that bank’s site.",
    },
    {
      q: "Do I need a BSN to open a bank account?",
      a: "Most banks require a BSN for regulatory and tax reasons. A minority of onboarding paths may allow submitting the BSN later within a stated window. Treat this as bank-specific and time-limited, not universal.",
    },
    {
      q: "Which bank is easiest for expats?",
      a: "“Easiest” depends on your documents, BSN timing and whether you need branch support. Digital banks often feel faster when checks pass; traditional banks are commonly used for payroll and long-term products. Use Best banks for expats for a comparison — this page does not rank winners.",
    },
    {
      q: "How long does it take to open a bank account?",
      a: "Online accounts can open within minutes to a few days when documents are complete. Manual review, traditional flows and business accounts take longer. Delays are common if BSN or address checks fail.",
    },
    {
      q: "Can students open a Dutch bank account?",
      a: "Yes. Students typically need ID, a Dutch address, usually a BSN, and sometimes proof of enrolment. Check student or low-cost options on each bank’s site and with your institution’s practical office.",
    },
    {
      q: "What if my application is rejected?",
      a: "Read the bank’s message carefully, fix document or data issues, and avoid rapid spam applications. Use the Account rejection guide for triage and next steps. Another bank may still accept you — there is no guarantee.",
    },
    {
      q: "Where should I compare banks and transfer fees?",
      a: "Compare banks on Best banks for expats and the bank comparison tool. For sending money abroad, use International transfers and the transfer cost calculator. Fee frameworks live on Banking fees.",
    },
  ],
  relatedGuides: [
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Shortlist and comparison — sibling in this cluster",
      status: "live" as const,
    },
    {
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "Cross-border fees, FX and speed — sibling in this cluster",
      status: "live" as const,
    },
    {
      label: "Account rejected or delayed",
      href: BANKING_ACCOUNT_REJECTION_PATH,
      description: "Triage when onboarding stalls",
      status: "live" as const,
    },
    {
      label: "Types of bank accounts",
      href: TYPES_OF_BANK_ACCOUNTS_PATH,
      description: "Product labels before you compare brands",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "iDEAL, direct debits and everyday checkout",
      status: "live" as const,
    },
    {
      label: "Cash vs card",
      href: "/netherlands/money/banking/cash-vs-card/",
      description: "Everyday till culture once your debit path is live",
      status: "live" as const,
    },
    {
      label: "Debit cards",
      href: "/netherlands/money/banking/debit-cards/",
      description: "Pinpas and PIN culture after you open an account",
      status: "live" as const,
    },
    {
      label: "Credit cards",
      href: "/netherlands/money/banking/credit-cards/",
      description: "When credit fits Dutch payment culture",
      status: "live" as const,
    },
    {
      label: "Wise vs Revolut",
      href: "/netherlands/money/banking/wise-vs-revolut/",
      description: "App-layer options beside a Dutch everyday account",
      status: "live" as const,
    },
    {
      label: "Banking fees & costs",
      href: "/netherlands/money/banking/fees/",
      description: "Fee categories without live tariff promises",
      status: "live" as const,
    },
    {
      label: "Traditional vs digital banks",
      href: "/netherlands/money/banking/traditional-vs-digital/",
      description: "Branch depth versus app-speed trade-offs",
      status: "live" as const,
    },
    {
      label: "Cheapest bank accounts",
      href: "/netherlands/money/banking/cheapest-accounts/",
      description: "Low-cost orientation for planning",
      status: "live" as const,
    },
    {
      label: "Banking safety & fraud",
      href: "/netherlands/money/banking/security/",
      description: "Phishing, payment-request scams and safe habits",
      status: "live" as const,
    },
    {
      label: "Municipality registration",
      href: "/netherlands/municipality-registration-netherlands/",
      description: "Registration path that often unlocks your BSN",
      status: "live" as const,
    },
    {
      label: "BSN registration",
      href: "/netherlands/bsn-registration/",
      description: "Citizen service number timing for newcomers",
      status: "live" as const,
    },
    {
      label: "After arriving in the Netherlands",
      href: "/netherlands/after-arriving-netherlands/",
      description: "First practical steps after landing",
      status: "live" as const,
    },
  ] satisfies OpenBankLink[],
  hubCards: [
    {
      label: "Banking hub",
      href: BANKING_HUB_PATH,
      description: "All banking guides, glossary entry points and tools",
      status: "live" as const,
    },
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Cluster sibling — compare onboarding and trade-offs",
      status: "live" as const,
    },
    {
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "Cluster sibling — sending money abroad",
      status: "live" as const,
    },
    {
      label: "Banks directory",
      href: "/netherlands/services/banks/",
      description: "Broader provider list beyond editorial shortlists",
      status: "live" as const,
    },
  ] satisfies OpenBankLink[],
  exploreNext: [
    {
      label: "Best banks for expats",
      href: BEST_BANKS_EXPATS_PATH,
      description: "Turn this setup guide into a shortlist",
      status: "live" as const,
    },
    {
      label: "International transfers",
      href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
      description: "Plan cross-border money after your IBAN is live",
      status: "live" as const,
    },
    {
      label: "How payments work",
      href: HOW_PAYMENTS_WORK_PATH,
      description: "Learn iDEAL and direct debits for everyday life",
      status: "live" as const,
    },
    {
      label: "Debit cards",
      href: "/netherlands/money/banking/debit-cards/",
      description: "Activate and understand your pinpas next",
      status: "live" as const,
    },
    {
      label: "Cash vs card",
      href: "/netherlands/money/banking/cash-vs-card/",
      description: "Everyday shops and cash pockets orientation",
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
      description: "Model monthly and yearly cost bands",
      status: "live" as const,
    },
    {
      label: "Account rejection guide",
      href: BANKING_ACCOUNT_REJECTION_PATH,
      description: "If your application is stuck",
      status: "live" as const,
    },
  ] satisfies OpenBankLink[],
  officialSources: [
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Official orientation for living and practical matters in the Netherlands",
    },
    {
      label: "EUR.nl — Dutch bank account",
      href: "https://www.eur.nl/en/education/practical-matters/orientation-arrival/dutch-bank-account",
      description: "University practical note on bank accounts and BSN timing patterns",
    },
    {
      label: "UvA — Opening a Dutch bank account",
      href: "https://www.uva.nl/en/education/practical-information/opening-a-dutch-bank-account/opening-a-dutch-bank-account.html",
      description: "Practical information for internationals opening an account",
    },
    {
      label: "ABN AMRO — Expat banking",
      href: "https://www.abnamro.nl/en/personal/specially-for/expats",
      description: "Example traditional bank expat information — verify current rules",
    },
    {
      label: "ING — Personal banking",
      href: "https://www.ing.nl/particulier/index.html",
      description: "Example large retail bank site — confirm products and fees there",
    },
    {
      label: "bunq",
      href: "https://www.bunq.com/",
      description: "Example Dutch-licensed digital bank — confirm onboarding rules on-site",
    },
  ],
  disclosure:
    "Some links on related banking pages may be affiliate links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes eligibility decisions made by banks.",
} as const;

export type OpenBankAccountNetherlandsPage = typeof openBankAccountNetherlandsPage;

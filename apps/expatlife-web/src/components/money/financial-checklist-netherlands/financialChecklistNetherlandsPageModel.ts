import {
  FINANCIAL_CHECKLIST_NETHERLANDS_PATH,
  HIDDEN_COSTS_NETHERLANDS_PATH,
  MOVING_CHECKLIST_PATH,
  MOVING_DOCUMENTS_CHECKLIST_PATH,
} from "@/src/components/money/hidden-costs-netherlands/hiddenCostsNetherlandsPageModel";
import {
  COST_OF_LIVING_CALCULATOR_PATH,
  COST_OF_LIVING_NETHERLANDS_PATH,
  MONEY_HUB_PATH,
  MONTHLY_BUDGET_NETHERLANDS_PATH,
  SAVING_MONEY_NETHERLANDS_PATH,
  HEALTH_INSURANCE_NETHERLANDS_PATH,
} from "@/src/components/money/cost-of-living-netherlands/costOfLivingNetherlandsPageModel";
import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { OPEN_BANK_ACCOUNT_NETHERLANDS_PATH } from "@/src/components/money/open-bank-account-netherlands/openBankAccountNetherlandsPageModel";
import { TAX_GUIDE_FOR_EXPATS_PATH } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { CHEAPEST_CITIES_FOR_EXPATS_PATH } from "@/src/components/cities/cheapest-cities-for-expats/cheapestCitiesForExpatsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export { FINANCIAL_CHECKLIST_NETHERLANDS_PATH };

export type FinancialChecklistLink = {
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
export type TimelineRow = { window: string; focus: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "financial-checklist-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const financialChecklistNetherlandsPage = {
  slug: "financial-checklist-netherlands",
  path: FINANCIAL_CHECKLIST_NETHERLANDS_PATH,
  hubPath: MONEY_HUB_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(FINANCIAL_CHECKLIST_NETHERLANDS_PATH) ?? "2026-08-18",
  seo: {
    title: "Financial Checklist for Expats in the Netherlands | Money Setup Guide",
    description:
      "Ordered money setup checklist for expats in the Netherlands: bank account, insurance, budget, tax orientation and buffers for the first 30 and 90 days — orientation only, not financial advice.",
    keywords: [
      "financial checklist Netherlands",
      "expat money checklist Netherlands",
      "first 30 days money Netherlands",
      "open bank account checklist Netherlands",
      "expat budget setup Netherlands",
      "Netherlands money setup",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Setup",
    pageTitle: "Financial Checklist for Expats in the Netherlands",
    subtitle:
      "Ordered money ops for your first 30 and 90 days: Dutch account, insurance, budget, tax orientation and buffers — a money-only setup checklist, not a full moving logistics list.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "30 / 90 day plan", href: "#first-30" },
    chips: ["Account", "Insurance", "Budget", "Tax orientation", "Buffers", "30 / 90 days"],
    disclaimer:
      "General orientation only — not financial, tax, insurance or legal advice. Product rules, deadlines and eligibility differ by person, employer and municipality. Verify with banks, insurers, Belastingdienst and qualified advisers before you act.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic Dutch apartment desk: expat ticking a money setup checklist with bank card, insurance letter, budget notebook and calendar marked 30 and 90 days, soft canal-house daylight.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what-it-is", label: "What it is" },
    { href: "#first-30", label: "First 30 days" },
    { href: "#first-90", label: "First 90 days" },
    { href: "#banking", label: "Banking setup" },
    { href: "#insurance", label: "Insurance setup" },
    { href: "#budget", label: "Budget setup" },
    { href: "#tax", label: "Tax orientation" },
    { href: "#buffers", label: "Buffers" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Full checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#tools", label: "Tools" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#money-hub", label: "Money hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Financial Checklist for Expats in the Netherlands — five money ops: open account, insure, budget, tax orientation, build buffers — right-side Money ops file rail lists IBAN ready, policy active, month plan, tax bookmarks, buffer line — Dutch canal skyline and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Five money ops cover the first months — not a full moving logistics checklist."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch expat money setup — IBAN unlocks rent and salary, insurance has deadlines, budget beats guesswork, tax is orientation first, buffers absorb surprises, logistics live on Moving checklist — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise money setup; deeper sections expand each without filing your taxes for you."
    ),
    whatItIs: visual(
      "what-it-is",
      "Premium desk scene defining a money-only setup checklist vs moving logistics and documents checklists — General information only rail, canal window light, ExpatLife brand area.",
      "This checklist owns money ops order — moving and documents guides own logistics and paperwork stacks."
    ),
    first30: visual(
      "first-30",
      "Premium 30-day timeline board — days 1–7 account and cash, days 8–14 insurance, days 15–21 budget, days 22–30 buffers and letters — teal stations and ExpatLife brand footer with compass and Live. Love. Stay.",
      "The first 30 days prioritise account, insurance, a simple budget and a starter buffer."
    ),
    first90: visual(
      "first-90",
      "Premium 90-day timeline board — stabilise salary rhythm, refine budget, tax bookmarks, review FX and savings habits — Dutch calendar props and ExpatLife brand area.",
      "Days 31–90 refine the system once salary and bills have a rhythm."
    ),
    banking: visual(
      "banking",
      "Premium banking setup board — BSN timing awareness, ID, IBAN for rent and salary, app security — Verify with your bank rail, ExpatLife brand footer.",
      "A Dutch IBAN unlocks everyday money ops — product rules still belong to your bank."
    ),
    insurance: visual(
      "insurance",
      "Premium insurance setup board — basic health cover timing, premium plus eigen risico note, liability add-on — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Insurance setup is a deadline-sensitive money op — confirm current enrolment rules."
    ),
    budget: visual(
      "budget",
      "Premium budget setup worksheet — income, fixed bills, everyday spend, surprise lines from Hidden costs, buffer — ExpatLife brand footer.",
      "A simple month plan beats optimistic guesswork after arrival."
    ),
    tax: visual(
      "tax",
      "Premium tax orientation board — payroll vs return awareness, bookmarks for tax guides, when to ask an adviser — not a filing portal — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Tax orientation means knowing the map — not completing a return on this page."
    ),
    buffers: visual(
      "buffers",
      "Premium buffers board — starter cash, eigen risico awareness, municipal letter reserve, move-in leftover — calm Dutch apartment desk and ExpatLife brand area.",
      "Buffers turn surprise invoices into manageable ops instead of emergencies."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for money setup — employed starter, couple sharing ops, ZZP-minded arrival, family with school — each with a first checklist move.",
      "Different households sequence the same money ops differently."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands financial checklist — delaying IBAN, skipping insurance deadlines, no written budget, confusing with moving logistics, zero buffer — Fix tips rail.",
      "Common setup friction and calmer fixes — orientation only."
    ),
    checklist: visual(
      "checklist",
      "Premium full financial checklist board — account, insurance, budget, tax bookmarks, buffers, hidden-costs review, monthly budget peer — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use the full checklist as your money ops board for the first 90 days."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Order money setup for the first 30 and 90 days",
        "Cover account, insurance, budget, tax orientation and buffers",
        "Stay money-only — link out for moving logistics",
        "Connect Hidden costs and Cheap cities siblings",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "IBAN unlocks rent and salary ops",
        "Insurance has timing rules",
        "A written budget beats guesswork",
        "Moving checklist owns logistics",
      ],
    },
    whatItIs: {
      title: "Boundary habits",
      items: [
        "Money ops only",
        "Not packing or visa logistics",
        "Not a tax filing portal",
        "Pairs with Hidden costs for surprise lines",
      ],
    },
    first30: {
      title: "30-day focus",
      items: [
        "Account and cash access",
        "Insurance enrolment awareness",
        "Simple month plan",
        "Starter buffer",
      ],
    },
    first90: {
      title: "90-day focus",
      items: [
        "Stabilise salary rhythm",
        "Refine budget categories",
        "Tax guide bookmarks",
        "Review FX and savings habits",
      ],
    },
    banking: {
      title: "Banking setup habits",
      items: [
        "Know BSN and ID timing",
        "Get IBAN for rent and salary",
        "Secure the banking app",
        "Deep-link Banking hub guides",
      ],
    },
    insurance: {
      title: "Insurance setup habits",
      items: [
        "Basic health cover timing",
        "Premium + deductible note",
        "Liability awareness",
        "Verify with official enrolment rules",
      ],
    },
    budget: {
      title: "Budget setup habits",
      items: [
        "Income and fixed bills first",
        "Add Hidden costs surprise lines",
        "Keep a buffer category",
        "Peer with Monthly budget guide",
      ],
    },
    tax: {
      title: "Tax orientation habits",
      items: [
        "Payroll vs annual return map",
        "Bookmark tax guides",
        "Know when complexity needs an adviser",
        "Do not treat this page as a filing tool",
      ],
    },
    buffers: {
      title: "Buffer habits",
      items: [
        "Starter cash after move-in",
        "Eigen risico awareness",
        "Municipal letter reserve",
        "Separate from lifestyle spend",
      ],
    },
    scenarios: {
      title: "Scenario tips",
      items: [
        "Employed: salary IBAN first",
        "Couple: shared ops calendar",
        "ZZP-minded: separate business money later",
        "Family: school extras in budget early",
      ],
    },
    mistakes: {
      title: "Mistake prevention",
      items: [
        "Do not delay the IBAN",
        "Do not skip insurance timing",
        "Do not run without a written budget",
        "Do not confuse with moving logistics",
      ],
    },
    checklist: {
      title: "Ready signals",
      items: [
        "Account live",
        "Insurance active or dated plan",
        "Month plan written",
        "Buffer line funded",
      ],
    },
  },
  introParagraphs: [
    "Once you choose a place (or while you wait for keys), money setup has an order. This guide is the money-only checklist for expats in the Netherlands: open and use a Dutch account, arrange insurance, write a budget, get tax orientation, and build buffers across the first 30 and 90 days.",
    "It is not a full moving logistics checklist and not a documents pack list — use Moving checklist and Moving documents checklist for those. Hidden costs sizes surprise lines; Cheap cities compares place stacks; Monthly budget peers help structure the month.",
  ],
  introHighlights: [
    "Ordered money ops: account → insurance → budget → tax orientation → buffers",
    "Boundary: logistics and documents live on moving guides",
    "Links into Hidden costs, Cheap cities and Cost of living siblings",
  ],
  orientationFlowSteps: [
    "Secure Dutch account access for rent and salary",
    "Enrol or diary insurance with deductible awareness",
    "Write a simple month plan including surprise lines",
    "Bookmark tax orientation and fund a starter buffer",
  ],
  safetyFileChecklist: [
    "ID / BSN timing notes for banking",
    "IBAN shared for rent and salary",
    "Insurance policy or enrolment date",
    "Month-one budget sheet",
    "Tax guide bookmarks",
    "Starter buffer amount and account home",
  ],
  introScenarios: [
    {
      situation: "Employed starter with salary in two weeks",
      approach: "Prioritise IBAN and insurance before lifestyle subscriptions",
      firstStep: "Start or complete bank onboarding with your ID pack",
    },
    {
      situation: "Couple sharing first Dutch bills",
      approach: "Agree who owns each money op on a shared calendar",
      firstStep: "Pick one shared checklist owner for week one",
    },
    {
      situation: "Someone mid-move with packing stress",
      approach: "Keep logistics on Moving checklist; keep money ops here",
      firstStep: "Separate a money tab from the packing list today",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: what belongs on an expat financial checklist in the Netherlands?",
    summary:
      "A practical money setup order is: Dutch account access, health insurance (and key add-ons), a written monthly budget that includes surprise lines, tax orientation bookmarks, and starter buffers for the first 30/90 days. This page sequences those ops — it does not file taxes, open the account for you, or replace moving logistics checklists.",
    bullets: [
      "First 30 days: IBAN, insurance timing, simple budget, starter buffer",
      "Days 31–90: refine budget, tax map, FX/savings habits",
      "Hidden costs sizes surprise lines; this page orders the ops",
      "Moving checklist / documents checklist own logistics and paperwork stacks",
    ],
    note: "Deadlines and product rules change — verify enrolment and banking requirements with official and provider sources.",
  },
  snapshotSignals: [
    {
      label: "Unlock",
      value: "Dutch IBAN",
      note: "Rent, salary, direct debits",
    },
    {
      label: "Protect",
      value: "Insurance timing",
      note: "Premium + deductible note",
    },
    {
      label: "Plan",
      value: "Written budget",
      note: "Include surprise lines",
    },
    {
      label: "Steady",
      value: "Buffers",
      note: "30 / 90 day calm",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "What this page covers",
      body: "Ordered money setup for account, insurance, budget, tax orientation and buffers across 30 and 90 days.",
    },
    {
      title: "What it is not",
      body: "Not a moving logistics list, not a documents checklist, not a tax filing portal.",
    },
    {
      title: "Why order matters",
      body: "Rent and salary need an IBAN; insurance has timing; budgets fail without surprise lines.",
    },
    {
      title: "Hidden costs link",
      body: "Size deposits, eigen risico and municipal lines on Hidden costs, then tick setup here.",
    },
    {
      title: "Cheap cities link",
      body: "If you are still comparing places, run stacks on Cheap cities — then return for setup order.",
    },
    {
      title: "Peers",
      body: "Monthly budget and Saving money peers help after the checklist is underway.",
    },
  ] satisfies TipCard[],
  whatItIs: {
    heading: "What this financial checklist is (and is not)",
    lead: "This is a money-ops checklist for newcomers: the sequence of banking, insurance, budgeting, tax orientation and buffers. Moving checklists cover logistics; documents checklists cover paperwork packs. Tax guides explain systems — this page only orients you to open the right bookmarks at the right time.",
    bullets: [
      "Money-only setup order for the first months",
      "Short links to banking, insurance and tax guides for depth",
      "Explicit non-goals: packing, visas, full document stacks, filing a return here",
      "Works with Hidden costs for surprise cash sizing",
    ],
    cards: [
      {
        title: "Ops, not logistics",
        body: "If the task is boxes, keys or municipality appointments, use Moving checklist. If the task is IBAN, premium or buffer, stay here.",
      },
      {
        title: "Orientation, not advice",
        body: "We sequence common money jobs. Your employer, bank and insurer set the real rules.",
      },
      {
        title: "Checklists that stay separate",
        body: "Documents checklist owns IDs and forms packs. Mixing it into money ops creates noise.",
      },
      {
        title: "Cluster fit",
        body: "Cheap cities → place math. Hidden costs → surprise lines. This page → setup order.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Moving checklist Netherlands",
        href: MOVING_CHECKLIST_PATH,
        description: "Logistics peer — not money-only",
      },
      {
        label: "Moving documents checklist",
        href: MOVING_DOCUMENTS_CHECKLIST_PATH,
        description: "Documents pack peer",
      },
      {
        label: "Hidden costs of living",
        href: HIDDEN_COSTS_NETHERLANDS_PATH,
        description: "Cluster sibling — size surprise lines",
      },
    ] satisfies FinancialChecklistLink[],
  },
  first30: {
    heading: "First 30 days — money ops",
    lead: "Week-by-week, keep money jobs small and sequenced. Exact calendar dates depend on your arrival and employment start — use this as a priority order.",
    bullets: [
      "Days 1–7: banking access and cash for rent/deposit leftovers",
      "Days 8–14: insurance enrolment or dated plan",
      "Days 15–21: write a month plan including Hidden costs lines",
      "Days 22–30: fund a starter buffer and sort letter folders",
    ],
    rows: [
      {
        window: "Days 1–7",
        focus: "Account access + cash control",
        tip: "IBAN for landlord and employer; app security on",
      },
      {
        window: "Days 8–14",
        focus: "Insurance timing",
        tip: "Premium + eigen risico note on one sheet",
      },
      {
        window: "Days 15–21",
        focus: "Budget v1",
        tip: "Income, fixed bills, everyday, surprises, buffer",
      },
      {
        window: "Days 22–30",
        focus: "Buffers + letters",
        tip: "Municipal folder; starter buffer parked",
      },
    ] satisfies TimelineRow[],
    cards: [
      {
        title: "Do not wait for perfect",
        body: "A rough budget with a buffer beats waiting until every invoice arrives.",
      },
      {
        title: "Salary lag is normal",
        body: "If first salary is weeks away, size cash from Hidden costs move-in totals first.",
      },
      {
        title: "One owner",
        body: "In couples, assign a checklist owner so tasks do not bounce.",
      },
      {
        title: "Logistics parallel track",
        body: "Keep municipality appointments on Moving checklist so money ops stay visible.",
      },
    ] satisfies TipCard[],
  },
  first90: {
    heading: "Days 31–90 — refine the system",
    lead: "After the scramble, improve the system: salary rhythm, budget categories, tax bookmarks, and habits for FX and saving.",
    bullets: [
      "Confirm salary lands as expected and direct debits behave",
      "Refine grocery, transport and family extras categories",
      "Open tax orientation guides — do not ignore payroll questions",
      "Review FX remittance routes and a simple savings habit",
    ],
    rows: [
      {
        window: "Days 31–45",
        focus: "Salary + direct debit review",
        tip: "Check names, amounts and dates match your plan",
      },
      {
        window: "Days 46–60",
        focus: "Budget v2",
        tip: "Adjust categories using real Dutch weeks",
      },
      {
        window: "Days 61–75",
        focus: "Tax orientation",
        tip: "Bookmark tax guide / residency / return pages",
      },
      {
        window: "Days 76–90",
        focus: "Habits",
        tip: "FX route + saving money peer habits",
      },
    ] satisfies TimelineRow[],
    cards: [
      {
        title: "Refine, do not restart",
        body: "Update the same budget sheet — do not throw it away each month.",
      },
      {
        title: "Tax is a map first",
        body: "Know payroll vs return concepts before you chase every detail.",
      },
      {
        title: "Saving comes after clarity",
        body: "Use Saving money peers once fixed bills and buffers are visible.",
      },
      {
        title: "Still comparing cities?",
        body: "If a move is still open, re-run Cheap cities stacks with real Dutch numbers.",
      },
    ] satisfies TipCard[],
  },
  banking: {
    heading: "Banking setup checklist",
    lead: "A Dutch IBAN is the unlock for rent, salary and most direct debits. Onboarding rules depend on residency status, BSN timing and the bank’s product — verify on the bank’s site and Banking hub guides.",
    bullets: [
      "Gather ID and any residency/BSN documents your bank asks for",
      "Complete onboarding and activate app login + card",
      "Share IBAN with landlord and employer when appropriate",
      "Turn on sensible security habits from day one",
    ],
    cards: [
      {
        title: "Why IBAN early",
        body: "Many landlords and employers expect a Dutch account. Delaying creates payment friction.",
      },
      {
        title: "Product choice later",
        body: "A working everyday account beats endless fee comparisons in week one — refine later via Banking guides.",
      },
      {
        title: "Joint or student products",
        body: "If relevant, open the specialist banking guides after the primary IBAN works.",
      },
      {
        title: "Deep-link",
        body: "Use Open bank account and Banking hub for how-to depth — this section stays on checklist order.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Open a bank account Netherlands",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "How-to depth for account opening",
      },
      {
        label: "Banking hub",
        href: BANKING_HUB_PATH,
        description: "Accounts, fees and everyday banking",
      },
    ] satisfies FinancialChecklistLink[],
  },
  insurance: {
    heading: "Insurance setup checklist",
    lead: "Health insurance timing is one of the highest-stakes money ops after arrival. Add deductible awareness and consider liability cover. Confirm current enrolment rules — they are not static forever.",
    bullets: [
      "Diary the enrolment window that applies to your situation",
      "Choose basic cover and note premium + eigen risico",
      "Consider liability (and household if you have contents)",
      "Store policy PDFs where you can find them",
    ],
    cards: [
      {
        title: "Deadline awareness",
        body: "Missing insurance timing can create stress and back-dated premiums — treat it as a dated checklist item.",
      },
      {
        title: "Premium ≠ total risk cash",
        body: "Keep eigen risico on the same sheet — Hidden costs explains the surprise framing.",
      },
      {
        title: "Add-ons",
        body: "Liability is a small monthly line that prevents large personal claim shocks.",
      },
      {
        title: "Deep-link",
        body: "Health insurance guide owns system explanation — this section owns setup order.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Health insurance Netherlands",
        href: HEALTH_INSURANCE_NETHERLANDS_PATH,
        description: "How Dutch basic cover works",
      },
      {
        label: "Hidden costs of living",
        href: HIDDEN_COSTS_NETHERLANDS_PATH,
        description: "Eigen risico and related surprise lines",
      },
    ] satisfies FinancialChecklistLink[],
  },
  budget: {
    heading: "Budget setup checklist",
    lead: "Write income, fixed bills, everyday spend, Hidden costs surprise lines and a buffer. Tools help — a sheet you reopen weekly matters more than a perfect template on day one.",
    bullets: [
      "List net income sources you can rely on this month",
      "Add rent, insurance, phone, transport and other fixed bills",
      "Include surprise categories from Hidden costs",
      "Set a buffer line before lifestyle subscriptions",
    ],
    cards: [
      {
        title: "v1 then v2",
        body: "First 30 days: rough and complete. Days 31–90: refine with real receipts.",
      },
      {
        title: "Same sheet",
        body: "Keep one living document — do not scatter budgets across chats.",
      },
      {
        title: "Peer guides",
        body: "Monthly budget peers help structure categories; Saving money peers help after clarity.",
      },
      {
        title: "Calculator",
        body: "Cost of living calculator is useful when household assumptions are still settling.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Monthly budget Netherlands",
        href: MONTHLY_BUDGET_NETHERLANDS_PATH,
        description: "Peer — month template and workflow",
      },
      {
        label: "Cost of living calculator",
        href: COST_OF_LIVING_CALCULATOR_PATH,
        description: "Model household assumptions",
      },
      {
        label: "Cost of living in the Netherlands",
        href: COST_OF_LIVING_NETHERLANDS_PATH,
        description: "National drivers behind categories",
      },
    ] satisfies FinancialChecklistLink[],
  },
  tax: {
    heading: "Tax orientation (not filing)",
    lead: "In the first 90 days, most expats need a map: payroll withholding vs annual return, where to read about residency and common allowances, and when complexity suggests an adviser. This is orientation — not a filing checklist you complete on this page.",
    bullets: [
      "Bookmark the Netherlands tax guide for expats",
      "Note whether your income is mainly payroll employment",
      "Do not ignore letters from Belastingdienst — diary them",
      "Escalate complex cross-border cases to qualified help",
    ],
    cards: [
      {
        title: "Map first",
        body: "Know the difference between payroll and the annual return before you chase every form name.",
      },
      {
        title: "Letters matter",
        body: "Tax and allowance letters are money ops — open, translate, diary.",
      },
      {
        title: "Not this page’s job",
        body: "We will not calculate your return here. Use tax guides and official tools.",
      },
      {
        title: "Timing",
        body: "Many return tasks sit later in the year — orientation in days 61–90 still prevents surprises.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Netherlands tax guide for expats",
        href: TAX_GUIDE_FOR_EXPATS_PATH,
        description: "Money-pillar tax orientation",
      },
    ] satisfies FinancialChecklistLink[],
  },
  buffers: {
    heading: "Buffers checklist",
    lead: "Buffers are planned cash for known unknowns: leftover move-in friction, eigen risico, municipal letters, and uneven first months. Separate them from lifestyle spend so they survive payday temptation.",
    bullets: [
      "Park a starter buffer after move-in cash is handled",
      "Keep deductible awareness for insurance",
      "Reserve a municipal letter line until amounts are known",
      "Review buffer size at day 90 with real Dutch months behind you",
    ],
    cards: [
      {
        title: "Starter buffer",
        body: "Even a modest amount reduces panic when an unexpected Dutch invoice arrives.",
      },
      {
        title: "Named reserves",
        body: "Label sub-buffers (insurance, municipal, travel FX) if that helps you not raid them.",
      },
      {
        title: "Hidden costs input",
        body: "Use Hidden costs bands to size what “modest” means for your household.",
      },
      {
        title: "Saving later",
        body: "True savings goals sit on top of buffers — Saving money peers help once ops are stable.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Hidden costs of living",
        href: HIDDEN_COSTS_NETHERLANDS_PATH,
        description: "Size surprise lines that buffers cover",
      },
      {
        label: "Saving money in the Netherlands",
        href: SAVING_MONEY_NETHERLANDS_PATH,
        description: "Peer — habits after buffers exist",
      },
    ] satisfies FinancialChecklistLink[],
  },
  scenarios: {
    heading: "Scenarios: how households sequence the checklist",
    lead: "Same ops, different order emphasis. Pick the closest story, then complete the full checklist.",
    rows: [
      {
        situation: "Employed starter",
        approach: "IBAN and insurance before subscriptions",
        firstStep: "Finish bank onboarding with ID pack",
      },
      {
        situation: "Couple sharing ops",
        approach: "One shared calendar with clear owners",
        firstStep: "Assign banking vs insurance owners for week one",
      },
      {
        situation: "ZZP-minded arrival",
        approach: "Personal IBAN first; business money later",
        firstStep: "Stabilise personal account and insurance before entity setup",
      },
      {
        situation: "Family with school",
        approach: "Budget extras early; buffers include family drift",
        firstStep: "Add school/childcare extras line to budget v1",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: {
    heading: "Common financial checklist mistakes",
    lead: "These patterns delay stability. Each has a calmer fix — orientation only.",
    cards: [
      {
        title: "Delaying the IBAN",
        body: "Rent and salary friction stacks quickly without a Dutch account.",
        advice: "Prioritise onboarding in the first week you can.",
      },
      {
        title: "Skipping insurance timing",
        body: "Deadlines and back-dated premiums create avoidable stress.",
        advice: "Put enrolment on a dated checklist item immediately.",
      },
      {
        title: "No written budget",
        body: "Mental maths fails when Dutch invoices arrive in clusters.",
        advice: "Write v1 in week three even if numbers are rough.",
      },
      {
        title: "Confusing with moving logistics",
        body: "Packing lists bury money ops until something bounces.",
        advice: "Keep a separate money checklist tab.",
      },
      {
        title: "Zero buffer",
        body: "First municipal or care invoice becomes an emergency.",
        advice: "Park a starter buffer after move-in cash.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Full financial checklist",
    lead: "Use this as your money ops board for the first 90 days. Tick in order where you can — parallel tracks are fine when owners differ.",
    items: [
      "Bank onboarding started / IBAN available",
      "Card and app security set",
      "Landlord and employer have correct IBAN when needed",
      "Health insurance enrolled or dated plan",
      "Premium + eigen risico noted",
      "Liability (and household if needed) considered",
      "Budget v1 written (income, fixed, everyday, surprises, buffer)",
      "Hidden costs surprise lines reviewed",
      "Municipal / tax letters folder created",
      "Tax guide bookmarks saved",
      "Starter buffer parked",
      "Day 90 review scheduled (budget v2, FX, saving habit)",
    ],
  },
  howTo: {
    heading: "How to run the financial checklist",
    steps: [
      {
        name: "Separate money ops from logistics",
        text: "Keep Moving checklist for appointments and packing; keep this list for money.",
      },
      {
        name: "Unlock banking access",
        text: "Complete onboarding and share IBAN for rent and salary as appropriate.",
      },
      {
        name: "Secure insurance timing",
        text: "Enrol or diary enrolment; note premium and deductible together.",
      },
      {
        name: "Write budget v1 with surprise lines",
        text: "Pull categories from Cost of living and Hidden costs; add a buffer.",
      },
      {
        name: "Orient on tax and refine by day 90",
        text: "Bookmark tax guides, fund buffers, then refine budget and habits in days 31–90.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to complete a financial checklist for expats in the Netherlands",
    description:
      "Orientation steps for banking, insurance, budget, tax bookmarks and buffers in the first 30/90 days — not financial advice.",
    anchor: "#howto",
  },
  tools: {
    heading: "Tools that help nearby decisions",
    items: [
      {
        label: "Cost of living calculator",
        href: COST_OF_LIVING_CALCULATOR_PATH,
        description: "Model the month while assumptions settle",
      },
      {
        label: "Money hub",
        href: MONEY_HUB_PATH,
        description: "Banking, taxes and cost-of-living entry points",
      },
      {
        label: "Banking hub",
        href: BANKING_HUB_PATH,
        description: "Accounts and everyday banking guides",
      },
    ] satisfies FinancialChecklistLink[],
  },
  faq: [
    {
      q: "What should be on a financial checklist for expats in the Netherlands?",
      a: "Typically: Dutch account access, insurance enrolment with deductible awareness, a written budget including surprise lines, tax orientation bookmarks, and starter buffers across the first 30/90 days.",
    },
    {
      q: "Is this the same as a moving checklist?",
      a: "No. Moving checklist covers logistics. Moving documents checklist covers paperwork packs. This page is money-only setup order.",
    },
    {
      q: "What should I do in the first 30 days?",
      a: "Prioritise IBAN access, insurance timing, a simple budget, and a starter buffer. Exact dates depend on your arrival and job start.",
    },
    {
      q: "When do taxes matter?",
      a: "Payroll happens via your employer when employed. Use the first 90 days to build orientation and bookmarks; annual return tasks often sit later. This page does not file a return.",
    },
    {
      q: "How do Hidden costs fit?",
      a: "Hidden costs sizes surprise lines (deposits, eigen risico, municipal taxes, FX, family extras). This checklist sequences the money ops that absorb those lines.",
    },
    {
      q: "Do I need a perfect budget on day one?",
      a: "No. Write a complete rough v1, then refine with real Dutch weeks by day 90.",
    },
    {
      q: "Is this financial advice?",
      a: "No. General orientation only. Verify banking, insurance and tax steps with official sources and qualified help when needed.",
    },
  ],
  relatedGuides: [
    {
      label: "Cheapest cities for expats",
      href: CHEAPEST_CITIES_FOR_EXPATS_PATH,
      description: "Cluster sibling — place-level money stacks",
    },
    {
      label: "Hidden costs of living",
      href: HIDDEN_COSTS_NETHERLANDS_PATH,
      description: "Cluster sibling — surprise lines to budget for",
    },
    {
      label: "Cost of living in the Netherlands",
      href: COST_OF_LIVING_NETHERLANDS_PATH,
      description: "National drivers and how to read numbers",
    },
    {
      label: "Monthly budget Netherlands",
      href: MONTHLY_BUDGET_NETHERLANDS_PATH,
      description: "Peer — month template and workflow",
    },
    {
      label: "Saving money in the Netherlands",
      href: SAVING_MONEY_NETHERLANDS_PATH,
      description: "Peer — habits after setup is stable",
    },
    {
      label: "Moving checklist Netherlands",
      href: MOVING_CHECKLIST_PATH,
      description: "Logistics peer — not money-only",
    },
    {
      label: "Open a bank account Netherlands",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Banking how-to depth",
    },
    {
      label: "Netherlands tax guide for expats",
      href: TAX_GUIDE_FOR_EXPATS_PATH,
      description: "Tax orientation map",
    },
  ] satisfies FinancialChecklistLink[],
  hubCards: [
    {
      label: "Money hub",
      href: MONEY_HUB_PATH,
      description: "Banking, taxes and cost-of-living entry points",
    },
    {
      label: "Cheapest cities for expats",
      href: CHEAPEST_CITIES_FOR_EXPATS_PATH,
      description: "Cluster sibling",
    },
    {
      label: "Hidden costs of living",
      href: HIDDEN_COSTS_NETHERLANDS_PATH,
      description: "Cluster sibling",
    },
    {
      label: "Cost of living in the Netherlands",
      href: COST_OF_LIVING_NETHERLANDS_PATH,
      description: "Flagship national cost orientation",
    },
    {
      label: "Banking hub",
      href: BANKING_HUB_PATH,
      description: "Accounts and everyday banking",
    },
    {
      label: "Tax guide for expats",
      href: TAX_GUIDE_FOR_EXPATS_PATH,
      description: "Tax orientation entry",
    },
  ] satisfies FinancialChecklistLink[],
  exploreNext: [
    {
      label: "Hidden costs of living",
      href: HIDDEN_COSTS_NETHERLANDS_PATH,
      description: "Size surprise lines your buffers will cover",
    },
    {
      label: "Cheapest cities for expats",
      href: CHEAPEST_CITIES_FOR_EXPATS_PATH,
      description: "Compare place stacks if a move is still open",
    },
    {
      label: "Monthly budget Netherlands",
      href: MONTHLY_BUDGET_NETHERLANDS_PATH,
      description: "Turn checklist categories into a month plan",
    },
    {
      label: "Open a bank account Netherlands",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Deepen banking setup next",
    },
    {
      label: "Health insurance Netherlands",
      href: HEALTH_INSURANCE_NETHERLANDS_PATH,
      description: "Deepen insurance system knowledge",
    },
    {
      label: "Moving checklist Netherlands",
      href: MOVING_CHECKLIST_PATH,
      description: "Keep logistics on a separate track",
    },
  ] satisfies FinancialChecklistLink[],
  officialSources: [
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Official orientation for living and practical matters",
    },
    {
      label: "Belastingdienst",
      href: "https://www.belastingdienst.nl/",
      description: "Tax authority — official forms and guidance",
    },
    {
      label: "Rijksoverheid — Health insurance",
      href: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering",
      description: "Official health-insurance orientation (Dutch)",
    },
    {
      label: "AFM",
      href: "https://www.afm.nl/en",
      description: "Financial markets authority — consumer finance orientation",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Consumer guidance on banking, insurance and household costs",
    },
  ],
  disclosure:
    "Some links on this page may be affiliate or referral links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes banking, insurance or tax rules.",
  lastUpdatedLabel: "Updated for 2026 orientation",
};

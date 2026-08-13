import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import {
  COST_OF_LIVING_CALCULATOR_PATH,
  COST_OF_LIVING_NETHERLANDS_PATH,
  CHILDCARE_ALLOWANCE_PATH,
  HEALTH_INSURANCE_NETHERLANDS_PATH,
  MONEY_HUB_PATH,
  MONTHLY_BUDGET_NETHERLANDS_PATH,
  NET_SALARY_NETHERLANDS_PATH,
  RENTING_NETHERLANDS_PATH,
  SAVING_MONEY_NETHERLANDS_PATH,
  SHOPPING_GROCERIES_PATH,
} from "@/src/components/money/cost-of-living-netherlands/costOfLivingNetherlandsPageModel";
import { HPW_FEES_PATH } from "@/src/components/money/cash-vs-card/cashVsCardPageModel";
import { OPEN_BANK_ACCOUNT_NETHERLANDS_PATH } from "@/src/components/money/open-bank-account-netherlands/openBankAccountNetherlandsPageModel";
import { UTILITIES_NETHERLANDS_PATH } from "@/src/components/utilities/utilitiesNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Re-export cluster path constants for consumers of this page. */
export {
  COST_OF_LIVING_CALCULATOR_PATH,
  COST_OF_LIVING_NETHERLANDS_PATH,
  MONEY_HUB_PATH,
  MONTHLY_BUDGET_NETHERLANDS_PATH,
  NET_SALARY_NETHERLANDS_PATH,
  SAVING_MONEY_NETHERLANDS_PATH,
};

export type MonthlyBudgetLink = {
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
export type CostRow = { setting: string; band: string; tip: string };
export type ExampleMonthRow = { category: string; singleBand: string; coupleBand: string; note: string };
export type PhaseRow = { line: string; firstMonth: string; steadyState: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "monthly-budget-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const monthlyBudgetNetherlandsPage = {
  slug: "monthly-budget-netherlands",
  path: MONTHLY_BUDGET_NETHERLANDS_PATH,
  hubPath: MONEY_HUB_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(MONTHLY_BUDGET_NETHERLANDS_PATH) ?? "2026-08-15",
  seo: {
    title: "Monthly Budget for Expats in the Netherlands | Complete Guide",
    description:
      "Build a realistic monthly budget template for the Netherlands in 2026: category lines, first-month vs steady-state cash, example household bands, and a net-pay → fixed → variable → buffer workflow. Planning ranges only — not personal financial advice.",
    keywords: [
      "monthly budget Netherlands",
      "expat budget Netherlands",
      "Netherlands monthly expenses",
      "budget template Netherlands 2026",
      "first month costs Netherlands",
      "household budget Netherlands",
      "cost of living budget Netherlands",
      "expat monthly spending Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Monthly budget",
    pageTitle: "Monthly Budget for Expats in the Netherlands",
    subtitle:
      "A practical category template for newcomers: housing, insurance, groceries, transport and a buffer line — plus first-month vs steady-state cash and example 2026 planning bands. Not investment advice.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "Build the workflow", href: "#workflow" },
    chips: ["2026 planning bands", "Category template", "First month vs steady", "Net → fixed → buffer", "Calculator link"],
    disclaimer:
      "General orientation only — not personal financial advice. Euro figures on this page are indicative 2026 planning ranges for newcomers, not quotes, guarantees or offers. Your rent, household size, city and lifestyle can move totals a lot. Confirm live prices with landlords, insurers, providers and your own records.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic Dutch canal-apartment desk: laptop open to a colour-coded monthly budget spreadsheet, rent letter, health insurance card, groceries receipt and OV-chipkaart beside a coffee cup, soft morning light through a canal-house window.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#categories", label: "Categories" },
    { href: "#first-month", label: "First month" },
    { href: "#workflow", label: "Workflow" },
    { href: "#example-month", label: "Example month" },
    { href: "#calculator", label: "Calculator" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#money-hub", label: "Money hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Monthly Budget for Expats in the Netherlands — four building blocks: start from net pay, list category lines, separate first-month cash from steady burn, keep a buffer line — right-side Budget file rail lists net pay, rent, insurance, groceries and buffer — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Four habits cover most budget questions: net pay first, category template, first-month cash, and a named buffer."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of a Dutch expat monthly budget — housing leads, insurance fixed, groceries flexible, transport mode, buffer line, and first-month cash — Dutch canal skyline band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise the template: categories, phases, workflow and tools."
    ),
    categories: visual(
      "categories",
      "Premium category template board — housing and rent, utilities, health insurance, groceries, transport, phone and internet, childcare if relevant, subscriptions, leisure, buffer and savings line — Planning ranges only rail, canal backdrop, ExpatLife brand footer.",
      "Use the same category list every month so first-month spikes and steady-state burn stay comparable."
    ),
    firstMonth: visual(
      "first-month",
      "Premium first-month vs steady-state timeline — deposit and double rent, setup fees, insurance start, furniture cash, then calmer recurring lines — Dutch apartment move-in desk scene, ExpatLife brand area with compass and Live. Love. Stay.",
      "Label move-in cash separately so a heavy first month does not distort your steady monthly plan."
    ),
    workflow: visual(
      "workflow",
      "Premium workflow diagram — net pay → fixed costs → variable spend → buffer line — teal stations and a General information only rail, Amsterdam window light, ExpatLife brand footer with compass and Live. Love. Stay.",
      "A calm sequence: know take-home pay, lock fixed lines, set variable bands, then protect a buffer."
    ),
    exampleMonth: visual(
      "example-month",
      "Premium example household month board — single modest and couple comfortable columns with indicative 2026 euro bands for rent, insurance, groceries, transport and buffer — Verify live prices rail, ExpatLife brand footer.",
      "Example months are planning sketches — swap in your city rent and household size before you treat any total as yours."
    ),
    calculator: visual(
      "calculator",
      "Premium calculator handoff board — this guide owns the template and workflow, the cost-of-living calculator owns interactive estimates, the COL sibling owns drivers — laptop with city toggles, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this page to structure the month, then model city and household totals in the calculator."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board — single newcomer first month, couple sharing rent, family with daycare, student shared flat — each with a first budget step.",
      "Different households need different category weights — not one universal total."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands monthly budgets — planning on gross pay, folding deposit into monthly burn, skipping buffer, ignoring insurance, treating example totals as quotes — Fix tips on a right-side rail.",
      "Common budget friction and calmer fixes — orientation only."
    ),
    checklist: visual(
      "checklist",
      "Premium monthly budget readiness checklist — net pay written, categories filled, first-month cash listed, buffer named, calculator run, COL and saving siblings bookmarked — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist before you lock a lease or accept an offer — then verify live numbers."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Build a reusable category template for a Dutch month",
        "Separate first-month cash from steady-state burn",
        "Follow net pay → fixed → variable → buffer",
        "Hand off to the calculator, COL and saving siblings",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Housing usually leads the template",
        "Insurance is a fixed monthly line for most residents",
        "First month needs a separate cash list",
        "Buffer is a line, not leftover hope",
      ],
    },
    categories: {
      title: "Category checklist",
      items: [
        "Housing / rent and utilities",
        "Health insurance and phone/internet",
        "Groceries, transport, subscriptions, leisure",
        "Childcare if relevant + named buffer line",
      ],
    },
    firstMonth: {
      title: "First-month habits",
      items: [
        "Deposit and often first + last / double rent",
        "Setup fees, furniture and travel cash",
        "Insurance start and admin timing",
        "Do not average spikes into every month",
      ],
    },
    workflow: {
      title: "Workflow order",
      items: [
        "Estimate net pay first",
        "Lock fixed costs (rent, insurance, phone)",
        "Set variable bands (food, transport, leisure)",
        "Protect a buffer / savings line",
      ],
    },
    exampleMonth: {
      title: "Reading example months",
      items: [
        "Bands are planning ranges for 2026",
        "Match household size and city",
        "Swap rent from real listings",
        "Stress-test against your net pay",
      ],
    },
    calculator: {
      title: "Tool handoff",
      items: [
        "This page owns the template workflow",
        "COL guide owns drivers and city framing",
        "Calculator owns interactive estimates",
        "Saving sibling owns cut levers",
      ],
    },
    scenarios: {
      title: "Scenario habits",
      items: [
        "Start with rent reality for your city",
        "Add insurance before lifestyle spend",
        "List first-month cash explicitly",
        "Keep a buffer even on a tight month",
      ],
    },
    mistakes: {
      title: "Avoid these",
      items: [
        "Planning on gross salary alone",
        "Folding deposit into monthly burn",
        "Skipping the buffer line",
        "Treating example totals as quotes",
      ],
    },
    checklist: {
      title: "Before you commit",
      items: [
        "Net pay estimate saved",
        "Every category has a line",
        "First-month cash listed",
        "Calculator scenario matches assumptions",
      ],
    },
  },
  introParagraphs: [
    "A monthly budget in the Netherlands works best as a reusable category template — not a single “average cost of living” number copied from a listicle. Expats who skip housing deposits, eigen risico or a named buffer often feel fine on paper and stressed in month one.",
    "This guide owns the planning workflow: categories, first-month vs steady-state, example household months with indicative 2026 euro bands, and a calm sequence from net pay to buffer. For what drives totals and city framing, use the cost-of-living sibling. For interactive estimates, use the calculator. For cutting spend later, use the saving-money sibling.",
  ],
  introHighlights: [
    "Start from net pay — rent is paid from take-home, not gross",
    "Keep the same category list every month for clean comparisons",
    "Separate first-month cash (deposit, setup) from steady burn",
    "Treat euro bands as 2026 planning ranges — verify live prices",
  ],
  orientationFlowSteps: [
    "Estimate net pay",
    "Fill fixed category lines",
    "Set variable bands + buffer",
    "Stress-test with calculator + COL",
  ],
  safetyFileChecklist: [
    "Net salary estimate bookmarked",
    "Target city and household size written down",
    "Rent band from real listings (not listicles)",
    "Deposit + first-month cash listed separately",
    "Health insurance premium + deductible buffer",
    "Utilities / internet / phone lines",
    "Transport mode (bike / OV / car)",
    "Childcare hours if both adults work",
    "Named buffer / savings line (even small)",
    "Cost-of-living calculator scenario saved",
  ],
  introScenarios: [
    {
      situation: "Offer in hand, first Dutch lease ahead",
      approach: "Build the template from net pay and rent first — then insurance — before lifestyle lines.",
      firstStep: "Write net pay, target rent band and deposit cash on one page.",
    },
    {
      situation: "Couple sharing a Randstad flat",
      approach: "Agree which lines are joint (rent, utilities) vs personal (subscriptions, leisure).",
      firstStep: "Split the category list into shared and solo columns.",
    },
    {
      situation: "Family with daycare starting soon",
      approach: "Add childcare as a primary fixed/variable hybrid — not a footnote after coffee.",
      firstStep: "Sketch weekly care hours, then keep allowance pathways separate from the draft budget.",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: how do you build a Dutch monthly budget?",
    summary:
      "Start from net pay, fill a fixed category template (housing, insurance, phone/internet), set variable bands (groceries, transport, leisure), protect a buffer line, and keep first-month cash (deposit, setup) off the steady monthly total. Indicative 2026 bands help you plan; they are not quotes.",
    bullets: [
      "Use the same category list every month so comparisons stay honest.",
      "Housing and insurance usually lead; lifestyle stretches the rest.",
      "First month often needs deposit + setup cash — label it separately.",
      "Use the COL guide for drivers, the calculator for interactive totals, and saving for cut levers.",
    ],
    note: "Always stress-test the finished template against your net pay and real rental listings — example months on this page are planning sketches only.",
  },
  snapshotSignals: [
    { label: "Template", value: "10 category lines", note: "Same list every month" },
    { label: "Phases", value: "First vs steady", note: "Deposit cash stays separate" },
    { label: "Workflow", value: "Net → fixed → buffer", note: "Order reduces surprises" },
    { label: "Next step", value: "Calculator + COL", note: "Estimate, then refine" },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Categories first",
      body: "A reusable list beats a single total. Housing, insurance, groceries, transport, phone/internet, childcare if needed, subscriptions, leisure and a buffer cover most newcomer months.",
    },
    {
      title: "First month is heavier",
      body: "Deposits, double rent and setup fees can stall a move even when steady burn looks fine. Keep a separate cash checklist.",
    },
    {
      title: "Net pay anchors the plan",
      body: "Job offers are often discussed in gross. Your rent is paid from net — start the workflow there.",
    },
    {
      title: "Buffer is a line",
      body: "Leftover hope is not a plan. Name a buffer / savings line even if it starts small.",
    },
    {
      title: "Example months are sketches",
      body: "Indicative 2026 bands show shape, not your quote. Swap city rent and household size before you commit.",
    },
    {
      title: "Tools finish the job",
      body: "This page templates the month; COL frames drivers; the calculator estimates; saving covers levers.",
    },
  ] satisfies TipCard[],
  categories: {
    heading: "The monthly budget category template",
    lead: "Keep one category list and reuse it. That makes first-month spikes visible and keeps steady-state months comparable. Deep cost drivers and city framing live on the cost-of-living sibling — this section owns the template lines.",
    bullets: [
      "Housing / rent — usually the largest line",
      "Utilities — energy, water, service charges when not included",
      "Health insurance — premium + deductible buffer awareness",
      "Groceries & household — supermarket basket for your size",
      "Transport — bike, OV, occasional taxi, or car stack",
      "Phone & internet — often small but easy to forget",
      "Childcare — only if relevant; can rival rent",
      "Subscriptions — streaming, software, memberships",
      "Leisure — dining, sports, travel, social",
      "Buffer / savings — named line, even if modest",
    ],
    indicativeRows: [
      {
        setting: "Housing / rent",
        band: "Often the #1 share of net pay (city-led)",
        tip: "Pull from real listings — see renting guide.",
      },
      {
        setting: "Utilities + internet",
        band: "Often roughly €150–€280 / month combined (planning)",
        tip: "Confirm what rent includes.",
      },
      {
        setting: "Health insurance (adult)",
        band: "Often roughly €140–€170 / month premium (2026 planning)",
        tip: "Keep eigen risico as cash buffer, not only a monthly average.",
      },
      {
        setting: "Groceries (single → couple)",
        band: "Often roughly €200–€550 / month (planning)",
        tip: "Dining out sits under leisure, not groceries.",
      },
      {
        setting: "Transport (bike + OV)",
        band: "Often roughly €40–€150 / month without a car (planning)",
        tip: "Car ownership changes the stack completely.",
      },
      {
        setting: "Phone + subscriptions + leisure",
        band: "Wide band — habits stretch this fast",
        tip: "Cap leisure after fixed lines are locked.",
      },
      {
        setting: "Buffer / savings line",
        band: "Aim to name an amount — even €50–€200+ to start",
        tip: "Saving levers deepen on the saving sibling.",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Fixed vs variable",
        body: "Rent, insurance and phone behave like fixed lines once chosen. Groceries and leisure are flexible — but habits stick.",
      },
      {
        title: "Childcare is situational",
        body: "Skip the line if you have no care hours. If you do, treat it as a primary driver beside rent.",
      },
      {
        title: "Banking fees are small but real",
        body: "Account packages and cards rarely dominate — still add a small banking line if useful. See fees and cheapest accounts guides.",
      },
      {
        title: "One template, two phases",
        body: "Use the same categories for first-month cash planning and for steady months — only the amounts and one-off flags change.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cost of living (sibling)",
        href: COST_OF_LIVING_NETHERLANDS_PATH,
        description: "Drivers, city bands, how to read numbers",
        status: "live" as const,
      },
      {
        label: "Renting in the Netherlands",
        href: RENTING_NETHERLANDS_PATH,
        description: "Ground the housing line in real search",
        status: "live" as const,
      },
      {
        label: "Utilities Netherlands",
        href: UTILITIES_NETHERLANDS_PATH,
        description: "Energy, water, internet setup",
        status: "live" as const,
      },
      {
        label: "Health insurance Netherlands",
        href: HEALTH_INSURANCE_NETHERLANDS_PATH,
        description: "Mandatory cover orientation",
        status: "live" as const,
      },
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        description: "Everyday shopping habits",
        status: "live" as const,
      },
      {
        label: "Childcare allowance",
        href: CHILDCARE_ALLOWANCE_PATH,
        description: "Benefit pathway orientation — not a budget quote",
        status: "live" as const,
      },
    ] satisfies MonthlyBudgetLink[],
  },
  firstMonth: {
    heading: "First-month vs steady-state",
    lead: "Month one often looks nothing like month three. Deposits, setup fees and furniture are cash events. Steady-state is the recurring template once housing and insurance are in place. Mixing the two creates false “monthly averages”.",
    bullets: [
      "Deposit + first rent (sometimes more) can equal multiple months of rent as cash",
      "Agency fees, key money patterns and short-stay bridges vary — verify your contract",
      "Insurance may start mid-month; still budget a full premium habit",
      "Furniture, bikes and admin appointments are easy to undercount",
    ],
    phaseRows: [
      {
        line: "Housing cash",
        firstMonth: "Deposit + first rent (often 2–3× rent as cash)",
        steadyState: "Monthly rent only",
        tip: "Keep deposit off the steady burn line.",
      },
      {
        line: "Utilities / internet",
        firstMonth: "Setup, deposits, possible overlap with previous housing",
        steadyState: "Recurring energy + internet",
        tip: "Ask what is included in rent.",
      },
      {
        line: "Health insurance",
        firstMonth: "Policy start + deductible awareness",
        steadyState: "Monthly premium",
        tip: "Eigen risico is a cash buffer, not only a monthly slice.",
      },
      {
        line: "Setup & stuff",
        firstMonth: "Furniture, bike, SIM, travel to viewings",
        steadyState: "Near zero (replace as needed)",
        tip: "Give setup its own cash envelope.",
      },
      {
        line: "Buffer",
        firstMonth: "Protect arrival cash — do not spend the buffer on décor first",
        steadyState: "Named monthly buffer / savings line",
        tip: "Rebuild buffer after move-in spikes.",
      },
    ] satisfies PhaseRow[],
    cards: [
      {
        title: "Cash vs burn",
        body: "Cash is what leaves your account in week one. Burn is what repeats. Label both or your template lies.",
      },
      {
        title: "Double-rent traps",
        body: "Leaving a previous lease early, hotel bridges or overlapping months can create a silent second rent line.",
      },
      {
        title: "Steady-state target",
        body: "Once setup is done, re-run the template with only recurring lines and compare to net pay again.",
      },
    ] satisfies TipCard[],
    warningItems: [
      "Do not divide deposit by twelve and call it “monthly rent” without labelling it",
      "Example months below are steady-state sketches unless marked otherwise",
      "Arrival cash needs a checklist beside the monthly template",
    ],
  },
  workflow: {
    heading: "Planning workflow: net pay → fixed → variable → buffer",
    lead: "Order matters. Starting from lifestyle spend and “hoping rent fits” is how newcomers get stuck. Follow this sequence, then refine with the calculator and COL guide.",
    steps: [
      {
        phase: "1",
        title: "Estimate net pay",
        detail: "Use net salary tools for your contract type. Write the monthly take-home you will actually receive.",
      },
      {
        phase: "2",
        title: "Lock fixed costs",
        detail: "Rent (or housing), utilities assumption, health insurance premium, phone/internet — and childcare if it is committed.",
      },
      {
        phase: "3",
        title: "Set variable bands",
        detail: "Groceries, transport, subscriptions and leisure. Be honest about dining and travel habits.",
      },
      {
        phase: "4",
        title: "Protect a buffer line",
        detail: "Name an amount for surprises and savings goals. If nothing is left, revisit rent or lifestyle — do not delete the line.",
      },
      {
        phase: "5",
        title: "Stress-test",
        detail: "Compare total to net pay, list first-month cash separately, run the cost-of-living calculator with the same assumptions.",
      },
    ],
    cards: [
      {
        title: "Fixed first",
        body: "If fixed lines already consume most of net pay, variable cuts rarely save the plan — revisit housing or offer.",
      },
      {
        title: "Buffer before optimising",
        body: "Cutting coffee before naming a buffer usually fails. Protect a small line, then use the saving sibling for levers.",
      },
      {
        title: "Review monthly",
        body: "After month two, compare actuals to the template. Adjust bands; keep categories stable.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Net salary Netherlands",
        href: NET_SALARY_NETHERLANDS_PATH,
        description: "Estimate take-home for the workflow start",
        status: "live" as const,
      },
      {
        label: "Cost of living calculator",
        href: COST_OF_LIVING_CALCULATOR_PATH,
        description: "Interactive city and household estimates",
        status: "live" as const,
      },
      {
        label: "Saving money (sibling)",
        href: SAVING_MONEY_NETHERLANDS_PATH,
        description: "Cut levers after the template exists",
        status: "live" as const,
      },
    ] satisfies MonthlyBudgetLink[],
  },
  exampleMonth: {
    heading: "Example household months (indicative 2026)",
    lead: "These sketches show shape — not quotes. Swap in your city rent and household size. Amsterdam-led housing sits higher; secondary cities often soften the rent line first. Figures are planning ranges for 2026 orientation only.",
    rows: [
      {
        category: "Housing / rent",
        singleBand: "€1,100–€1,900 (modest city mix)",
        coupleBand: "€1,500–€2,600 (comfortable Randstad mix)",
        note: "Biggest swing — verify listings",
      },
      {
        category: "Utilities + internet",
        singleBand: "€140–€240",
        coupleBand: "€170–€280",
        note: "Depends on inclusions",
      },
      {
        category: "Health insurance",
        singleBand: "€140–€170 / adult",
        coupleBand: "€280–€340 / two adults",
        note: "Plus deductible buffer awareness",
      },
      {
        category: "Groceries",
        singleBand: "€200–€320",
        coupleBand: "€350–€550",
        note: "Home cooking assumption",
      },
      {
        category: "Transport",
        singleBand: "€40–€120 (bike + OV)",
        coupleBand: "€80–€200 (bike + OV)",
        note: "Car ownership excluded",
      },
      {
        category: "Phone + subscriptions",
        singleBand: "€40–€90",
        coupleBand: "€60–€140",
        note: "Habits stretch this",
      },
      {
        category: "Leisure",
        singleBand: "€80–€250",
        coupleBand: "€150–€400",
        note: "Dining and travel move this hard",
      },
      {
        category: "Buffer / savings",
        singleBand: "€50–€200+",
        coupleBand: "€100–€400+",
        note: "Name it even if small",
      },
    ] satisfies ExampleMonthRow[],
    cards: [
      {
        title: "Single · modest sketch",
        body: "Outside the tightest Amsterdam cores, many singles see housing + insurance + food dominate. Leisure is the first stretch line.",
      },
      {
        title: "Couple · comfortable sketch",
        body: "Two incomes help — but Randstad rent and two insurance premiums still lead. Agree shared vs solo lines early.",
      },
      {
        title: "Add childcare only if real",
        body: "Daycare hours can rival rent. Do not paste a family total onto a couple without care needs.",
      },
      {
        title: "Not a quote",
        body: "If your listing is €2,400 rent in central Amsterdam, use that — not the midpoint of a national sketch.",
      },
    ] satisfies TipCard[],
    warningItems: [
      "Totals are intentionally not summed into one “official” figure — rent honesty matters more",
      "Childcare, cars and premium lifestyles can exceed these sketches quickly",
      "Always re-check against net pay after you swap real rent",
    ],
  },
  calculator: {
    heading: "Calculator, COL guide and saving sibling",
    lead: "This page owns the category template and planning workflow. The cost-of-living guide owns drivers and city framing. The calculator owns interactive estimates. Saving money owns levers and habits.",
    bullets: [
      "Use the template here to decide which lines exist",
      "Use COL to understand why rent and insurance dominate",
      "Use the calculator to model city and household toggles",
      "Use saving when you are ready to cut without breaking fixed lines",
    ],
    crossLinks: [
      {
        label: "Cost of living calculator",
        href: COST_OF_LIVING_CALCULATOR_PATH,
        description: "Interactive monthly estimates",
        status: "live" as const,
      },
      {
        label: "Cost of living in the Netherlands",
        href: COST_OF_LIVING_NETHERLANDS_PATH,
        description: "Drivers + city bands + how to read numbers",
        status: "live" as const,
      },
      {
        label: "Saving money in the Netherlands",
        href: SAVING_MONEY_NETHERLANDS_PATH,
        description: "Levers and habits — cluster sibling",
        status: "live" as const,
      },
      {
        label: "Net salary Netherlands",
        href: NET_SALARY_NETHERLANDS_PATH,
        description: "Take-home pay for the workflow start",
        status: "live" as const,
      },
    ] satisfies MonthlyBudgetLink[],
  },
  scenarios: {
    heading: "Budget scenarios for newcomers",
    lead: "Same template, different weights. Use the story that matches your household, then swap real rent.",
    rows: [
      {
        situation: "Single newcomer — first Dutch month",
        approach: "Prioritise arrival cash + rent + insurance; keep leisure thin until steady-state.",
        firstStep: "List deposit cash beside the monthly template on day one.",
      },
      {
        situation: "Couple sharing rent",
        approach: "Joint lines for housing and utilities; personal lines for subscriptions and leisure.",
        firstStep: "Agree who pays which IBAN and how the buffer is funded.",
      },
      {
        situation: "Family with daycare",
        approach: "Treat care hours as a primary line beside rent; do not assume allowance in the first draft.",
        firstStep: "Get a hours quote, then read the childcare allowance orientation guide.",
      },
      {
        situation: "Student / shared housing",
        approach: "Lower rent can still surprise you with insurance and OV — keep structural lines.",
        firstStep: "Confirm what the huis includes, then add health insurance and a food band.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: {
    heading: "Common monthly budget mistakes",
    cards: [
      {
        title: "Planning on gross salary",
        body: "Rent is paid from net. Gross-looking offers can still feel tight after payroll.",
        advice: "Start the workflow with a net salary estimate.",
      },
      {
        title: "Folding deposit into monthly burn",
        body: "Averaging move-in cash across twelve months hides the cash crunch in week one.",
        advice: "Keep a separate first-month cash checklist.",
      },
      {
        title: "Skipping the buffer line",
        body: "If every euro is assigned to lifestyle, the first bill spike breaks the plan.",
        advice: "Name a buffer even if it starts small — then grow it.",
      },
      {
        title: "Treating example months as quotes",
        body: "Sketches show shape. Your listing and insurer set prices.",
        advice: "Swap real rent and verify premiums before you commit.",
      },
      {
        title: "Ignoring insurance",
        body: "Health insurance is structural for most residents — not a lifestyle optional.",
        advice: "Add premium + deductible awareness before leisure.",
      },
      {
        title: "Mixing this page with COL or saving",
        body: "This guide owns the template workflow. Drivers and cut levers live on siblings.",
        advice: "Use COL for framing; saving for levers; calculator for estimates.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Monthly budget readiness checklist",
    lead: "Use this before you sign a lease or accept an offer. Then verify live numbers with listings, insurers and the calculator.",
    items: [
      "Net pay estimate completed and written down",
      "Same category list filled for steady-state",
      "First-month cash listed separately (deposit, setup)",
      "Realistic rent from current listings",
      "Utilities / internet / phone assumptions noted",
      "Health insurance premium + deductible buffer",
      "Transport mode chosen",
      "Childcare hours quoted if needed",
      "Buffer / savings line named (amount > 0)",
      "Calculator scenario saved with matching assumptions",
      "COL sibling bookmarked for drivers",
      "Saving sibling bookmarked for later cut levers",
      "Banking path noted (IBAN for rent and bills)",
    ],
  },
  howTo: {
    heading: "How to build your first Dutch monthly budget",
    lead: "A calm sequence beats downloading five unrelated listicles. Follow these steps, then refine with real quotes.",
    steps: [
      {
        name: "Write net pay and household assumptions",
        text: "City, adults, children, and whether you need parking or daycare.",
      },
      {
        name: "Fill the category template",
        text: "Housing, utilities, insurance, groceries, transport, phone/internet, childcare if relevant, subscriptions, leisure, buffer.",
      },
      {
        name: "Build a first-month cash list",
        text: "Deposit, first rent, setup fees, furniture and travel — keep it beside the steady template.",
      },
      {
        name: "Run the workflow order",
        text: "Fixed lines first, then variable bands, then protect the buffer — do not delete the buffer to force a fit.",
      },
      {
        name: "Stress-test with tools",
        text: "Compare totals to net pay and run the cost-of-living calculator with the same assumptions.",
      },
      {
        name: "Hand off to siblings when ready",
        text: "Use COL for drivers and city framing; use saving money when you want cut levers.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to build a monthly budget in the Netherlands",
    description:
      "Orientation steps for expats: estimate net pay, fill a category template, separate first-month cash, protect a buffer line, then stress-test with the cost-of-living calculator.",
    anchor: "#howto",
  },
  bankingLinks: {
    heading: "Banking & money plumbing nearby",
    lead: "You will need a Dutch payment setup for rent and bills. These guides sit beside budget planning — they do not replace the template.",
    items: [
      {
        label: "Banking fees & costs",
        href: HPW_FEES_PATH,
        description: "What banks typically charge",
        status: "live" as const,
      },
      {
        label: "Cheapest bank accounts",
        href: CHEAPEST_BANK_ACCOUNTS_PATH,
        description: "Low-cost account orientation",
        status: "live" as const,
      },
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Setup path and documents",
        status: "live" as const,
      },
      {
        label: "Banking hub",
        href: BANKING_HUB_PATH,
        description: "All banking guides",
        status: "live" as const,
      },
    ] satisfies MonthlyBudgetLink[],
  },
  faq: [
    {
      q: "How much should I budget per month in the Netherlands?",
      a: "There is no single number. Build a category template from net pay, led by housing and health insurance, then set groceries, transport, leisure and a buffer. Indicative 2026 bands on this page are planning ranges — swap real rent and verify premiums.",
    },
    {
      q: "What is the difference between this page and cost of living?",
      a: "Cost of living owns drivers, lifestyle/city framing and how to read numbers. This page owns the category template, first-month vs steady-state, and the planning workflow. Use both.",
    },
    {
      q: "Why separate first-month costs?",
      a: "Deposits, setup fees and furniture are cash events. Folding them into a monthly average hides the week-one crunch. Keep a separate arrival cash list beside the steady template.",
    },
    {
      q: "Should I start from gross or net salary?",
      a: "Start from net. Use the net salary Netherlands tools, then lock fixed costs before lifestyle lines.",
    },
    {
      q: "Where does the cost-of-living calculator fit?",
      a: "After you know your categories and assumptions. This page structures the month; the calculator models interactive city and household estimates.",
    },
    {
      q: "How do I add a buffer if money is tight?",
      a: "Name a small line anyway — even a modest amount beats zero. If fixed costs leave nothing, revisit rent or lifestyle before deleting the buffer. Deeper cut levers live on the saving-money sibling.",
    },
    {
      q: "Do I need a childcare line?",
      a: "Only if you have care hours. When both adults work, daycare or BSO can rival rent — get a hours quote and keep allowance pathways separate from the first draft.",
    },
    {
      q: "Is this financial advice?",
      a: "No. This is general orientation for newcomers. Figures are indicative planning ranges. Confirm details with providers and seek qualified advice when your situation is complex.",
    },
  ],
  relatedGuides: [
    {
      label: "Cost of living in the Netherlands",
      href: COST_OF_LIVING_NETHERLANDS_PATH,
      description: "Drivers + city bands — cluster sibling",
      status: "live" as const,
    },
    {
      label: "Saving money in the Netherlands",
      href: SAVING_MONEY_NETHERLANDS_PATH,
      description: "Levers and habits — cluster sibling",
      status: "live" as const,
    },
    {
      label: "Cost of living calculator",
      href: COST_OF_LIVING_CALCULATOR_PATH,
      description: "Interactive estimates by city and household",
      status: "live" as const,
    },
    {
      label: "Net salary Netherlands",
      href: NET_SALARY_NETHERLANDS_PATH,
      description: "Take-home pay for the workflow start",
      status: "live" as const,
    },
    {
      label: "Renting in the Netherlands",
      href: RENTING_NETHERLANDS_PATH,
      description: "Housing search and contracts",
      status: "live" as const,
    },
    {
      label: "Utilities Netherlands",
      href: UTILITIES_NETHERLANDS_PATH,
      description: "Energy, water, internet",
      status: "live" as const,
    },
    {
      label: "Health insurance Netherlands",
      href: HEALTH_INSURANCE_NETHERLANDS_PATH,
      description: "Mandatory cover orientation",
      status: "live" as const,
    },
    {
      label: "Shopping & groceries",
      href: SHOPPING_GROCERIES_PATH,
      description: "Everyday shopping habits",
      status: "live" as const,
    },
    {
      label: "Banking fees & costs",
      href: HPW_FEES_PATH,
      description: "Account and payment costs",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Get a Dutch IBAN for rent and bills",
      status: "live" as const,
    },
  ] satisfies MonthlyBudgetLink[],
  hubCards: [
    {
      label: "Money hub",
      href: MONEY_HUB_PATH,
      description: "Banking, taxes, insurance and everyday money",
      status: "live" as const,
    },
    {
      label: "Cost of living (sibling)",
      href: COST_OF_LIVING_NETHERLANDS_PATH,
      description: "Understand drivers next",
      status: "live" as const,
    },
    {
      label: "Saving money (sibling)",
      href: SAVING_MONEY_NETHERLANDS_PATH,
      description: "Cut levers after the template",
      status: "live" as const,
    },
    {
      label: "Cost of living calculator",
      href: COST_OF_LIVING_CALCULATOR_PATH,
      description: "Interactive monthly estimates",
      status: "live" as const,
    },
    {
      label: "Banking hub",
      href: BANKING_HUB_PATH,
      description: "Accounts and everyday banking",
      status: "live" as const,
    },
    {
      label: "Net salary Netherlands",
      href: NET_SALARY_NETHERLANDS_PATH,
      description: "Pair the budget with take-home pay",
      status: "live" as const,
    },
  ] satisfies MonthlyBudgetLink[],
  exploreNext: [
    {
      label: "Cost of living calculator",
      href: COST_OF_LIVING_CALCULATOR_PATH,
      description: "Model your city and household",
      status: "live" as const,
    },
    {
      label: "Cost of living in the Netherlands",
      href: COST_OF_LIVING_NETHERLANDS_PATH,
      description: "Read drivers and city bands",
      status: "live" as const,
    },
    {
      label: "Saving money in the Netherlands",
      href: SAVING_MONEY_NETHERLANDS_PATH,
      description: "Find practical cut levers",
      status: "live" as const,
    },
    {
      label: "Net salary Netherlands",
      href: NET_SALARY_NETHERLANDS_PATH,
      description: "Check take-home pay",
      status: "live" as const,
    },
    {
      label: "Renting in the Netherlands",
      href: RENTING_NETHERLANDS_PATH,
      description: "Ground your housing line",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Set up payment plumbing",
      status: "live" as const,
    },
  ] satisfies MonthlyBudgetLink[],
  officialSources: [
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Official orientation for living and practical matters in the Netherlands",
    },
    {
      label: "Government.nl — Health insurance",
      href: "https://www.government.nl/topics/health-insurance",
      description: "Official information on mandatory basic health insurance",
    },
    {
      label: "Belastingdienst — Allowances",
      href: "https://www.belastingdienst.nl/",
      description: "Tax authority orientation for toeslagen pathways (verify current pages)",
    },
    {
      label: "NIBUD",
      href: "https://www.nibud.nl/",
      description: "National Institute for Family Finance Information — budget reference context",
    },
    {
      label: "CBS — Prices",
      href: "https://www.cbs.nl/en-gb",
      description: "Statistics Netherlands — price and household statistics context",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Consumer association guidance — verify current cost and insurance articles",
    },
  ],
  disclosure:
    "Some links on this page may be affiliate or referral links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes prices, eligibility or your personal budget reality. All euro bands are indicative planning ranges for 2026 orientation only.",
} as const;

export type MonthlyBudgetNetherlandsPage = typeof monthlyBudgetNetherlandsPage;

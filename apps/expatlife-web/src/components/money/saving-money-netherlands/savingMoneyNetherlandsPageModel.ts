import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import {
  COST_OF_LIVING_CALCULATOR_PATH,
  COST_OF_LIVING_NETHERLANDS_PATH,
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
import { TYPES_OF_BANK_ACCOUNTS_PATH } from "@/src/components/money/types-of-bank-accounts/typesOfBankAccountsPageModel";
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

export type SavingMoneyLink = {
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
export type LeverRow = { lever: string; indicativeImpact: string; tip: string };
export type ImpactRow = { habit: string; roughMonthly: string; note: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "saving-money-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const savingMoneyNetherlandsPage = {
  slug: "saving-money-netherlands",
  path: SAVING_MONEY_NETHERLANDS_PATH,
  hubPath: MONEY_HUB_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(SAVING_MONEY_NETHERLANDS_PATH) ?? "2026-08-15",
  seo: {
    title: "Saving Money in the Netherlands | Complete Guide for Expats",
    description:
      "Practical ways to save money in the Netherlands in 2026: housing habits, groceries, bike and OV transport, subscription audits, banking fees, energy, dining vs cooking, and a first emergency buffer — plus spaarrekening orientation. Planning ranges only, not personal financial advice.",
    keywords: [
      "saving money Netherlands",
      "how to save money Netherlands",
      "expat save money Netherlands",
      "reduce spending Netherlands 2026",
      "spaarrekening Netherlands",
      "cheap groceries Netherlands",
      "bike vs OV costs",
      "emergency buffer Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Saving",
    pageTitle: "Saving Money in the Netherlands",
    subtitle:
      "Practical levers for expats who already know their cost drivers and budget lines — housing habits, groceries, transport, subscriptions, fees and a first buffer. Indicative 2026 euro impacts for planning only — not investment advice.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "Start with the levers", href: "#levers" },
    chips: ["2026 planning impacts", "Housing & groceries", "Bike + OV", "Buffer first", "Spaarrekening link"],
    disclaimer:
      "General orientation only — not personal financial advice. Euro figures on this page are indicative 2026 planning ranges for newcomers, not quotes, guarantees or offers. Your rent, city, household and habits can move results a lot. Confirm live prices with landlords, providers and your own records. This is not a ranking of savings products.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic Dutch canal-apartment kitchen table: grocery receipt, bike helmet, OV-chipkaart, notebook with a savings buffer checklist and a piggy-bank jar beside morning coffee, soft canal-house window light.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#levers", label: "Levers" },
    { href: "#housing", label: "Housing" },
    { href: "#groceries", label: "Groceries" },
    { href: "#transport", label: "Transport" },
    { href: "#subscriptions", label: "Subscriptions" },
    { href: "#banking", label: "Banking fees" },
    { href: "#energy", label: "Energy" },
    { href: "#dining", label: "Dining" },
    { href: "#buffer", label: "Buffer" },
    { href: "#spaarrekening", label: "Spaarrekening" },
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
      "Premium orientation board titled Saving Money in the Netherlands — four habits: know your biggest levers, cut without breaking fixed lines, build a first buffer, then park surplus calmly — right-side Saving file rail lists rent reality, grocery habits, transport mode, subscriptions, fees and buffer — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Four habits cover most saving questions: levers first, protect fixed lines, name a buffer, then place surplus calmly."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch saving levers — housing habits, grocery orientation, bike and OV, subscription audit, banking fees, and emergency buffer — Dutch canal skyline band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise where newcomers usually reclaim cash without chasing product rankings."
    ),
    levers: visual(
      "levers",
      "Premium lever map for Netherlands spend — housing at the centre, then groceries, transport, subscriptions, energy, dining and fees — Planning impacts only rail, canal backdrop, ExpatLife brand footer.",
      "Housing usually moves the total most; everyday habits and fees fill the rest."
    ),
    housing: visual(
      "housing",
      "Premium housing-habits desk scene — rent letter, commute trade-off map, roommate vs solo note and utilities folder — Amsterdam apartment window light, ExpatLife brand area with compass and Live. Love. Stay.",
      "Treat rent location and inclusions as the first saving decision — not only cutting coffee."
    ),
    groceries: visual(
      "groceries",
      "Premium groceries orientation board — supermarket basket habits, store-type awareness, weekly cook plan, dining-out uplift — Dutch market street context and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Store choice and cook-at-home rhythm usually beat hunting obscure coupons."
    ),
    transport: visual(
      "transport",
      "Premium transport saving map — bike-first cities, OV-chipkaart monthly habits, occasional taxi, car cost warning — canal and tram backdrop, ExpatLife brand footer.",
      "Many expats keep transport lean with bike + OV; a car changes the stack completely."
    ),
    subscriptions: visual(
      "subscriptions",
      "Premium subscription audit board — streaming, software, gym, memberships and forgotten trials — checklist rail and ExpatLife brand footer with compass and Live. Love. Stay.",
      "A quarterly audit often frees a quiet monthly band without touching rent."
    ),
    banking: visual(
      "banking",
      "Premium banking-fees orientation — package fee, cards, FX habits and spaarrekening handoff — Verify with providers rail, ExpatLife brand footer.",
      "Fees rarely rival rent — still worth trimming once the big levers are stable."
    ),
    energy: visual(
      "energy",
      "Premium energy habits board — thermostat awareness, appliance timing, what rent includes, utilities setup checklist — Dutch apartment scene and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Confirm inclusions first; then habits and provider setup can soften the utilities line."
    ),
    dining: visual(
      "dining",
      "Premium dining vs cook board — coffee culture uplift, restaurant nights, packed lunch habit, social spend without guilt — canal café context and ExpatLife brand footer.",
      "Dining out is often the fastest lifestyle stretch after rent — choose the nights that matter."
    ),
    buffer: visual(
      "buffer",
      "Premium emergency buffer timeline — first €500–€1,000 sketch, then one month of essentials, then goals — piggy jar and calendar, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Build a named emergency buffer before chasing fancy products or rate shopping."
    ),
    spaarrekening: visual(
      "spaarrekening",
      "Premium spaarrekening orientation board — current account vs savings pot, short handoff to Types of accounts and banking fees — not a product ranking — ExpatLife brand footer with compass and Live. Love. Stay.",
      "A spaarrekening is a parking place for surplus — product deep-dives live on banking siblings."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board — single newcomer, couple sharing rent, family with daycare squeeze, student shared flat — each with a first saving step.",
      "Different households need different first levers — not one universal cut list."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands saving — cutting coffee before rent reality, skipping buffer for rate hunting, treating store lists as rankings, deleting insurance, chasing products first — Fix tips on a right-side rail.",
      "Common saving friction and calmer fixes — orientation only."
    ),
    checklist: visual(
      "checklist",
      "Premium saving readiness checklist — rent reality checked, grocery habit set, transport mode chosen, subscriptions audited, fees reviewed, buffer named, COL and budget siblings bookmarked — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist after your budget template exists — then verify live numbers."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Find practical spend levers for a Dutch month",
        "Protect fixed lines while trimming habits",
        "Build a first emergency buffer before products",
        "Hand off to COL, monthly budget and banking siblings",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Housing habits move the total most",
        "Groceries and dining are habit-led",
        "Bike + OV keeps transport lean",
        "Buffer comes before spaarrekening shopping",
      ],
    },
    levers: {
      title: "Lever order",
      items: [
        "Housing / location / inclusions",
        "Groceries + dining rhythm",
        "Transport mode",
        "Subscriptions, energy, fees",
      ],
    },
    housing: {
      title: "Housing habits",
      items: [
        "Compare commute vs rent honestly",
        "Check what utilities are included",
        "Shared housing can free cash — with trade-offs",
        "Ground search in the renting guide",
      ],
    },
    groceries: {
      title: "Grocery habits",
      items: [
        "Plan a weekly cook rhythm",
        "Know store-type differences (orientation only)",
        "Keep dining-out under leisure, not groceries",
        "Use the shopping & groceries sibling",
      ],
    },
    transport: {
      title: "Transport habits",
      items: [
        "Default to bike where practical",
        "Track OV honestly for a month",
        "Delay car ownership until needed",
        "Occasional taxi is fine — subscriptions creep",
      ],
    },
    subscriptions: {
      title: "Audit checklist",
      items: [
        "List every recurring charge",
        "Cancel unused trials and stacks",
        "Share household plans where allowed",
        "Re-check quarterly",
      ],
    },
    banking: {
      title: "Fee habits",
      items: [
        "Know package and card costs",
        "Watch FX habits on foreign cards",
        "Link Types of accounts for spaarrekening",
        "Cheapest accounts guide for low-cost orientation",
      ],
    },
    energy: {
      title: "Energy habits",
      items: [
        "Confirm rent inclusions first",
        "Thermostat and appliance awareness",
        "Setup path via utilities sibling",
        "Do not chase tiny habits before rent reality",
      ],
    },
    dining: {
      title: "Dining habits",
      items: [
        "Protect social nights you care about",
        "Pack lunch most workdays if it helps",
        "Coffee culture adds up quietly",
        "Track a month before guessing",
      ],
    },
    buffer: {
      title: "Buffer steps",
      items: [
        "Name a line on the budget template",
        "Aim for a first small emergency pot",
        "Grow toward essentials coverage",
        "Only then place surplus calmly",
      ],
    },
    spaarrekening: {
      title: "Spaarrekening orientation",
      items: [
        "Parking place for surplus, not a ranking",
        "Read Types of bank accounts",
        "Check fee and product cost guides",
        "Buffer goal first, rate shopping later",
      ],
    },
    scenarios: {
      title: "Scenario habits",
      items: [
        "Start with the largest lever you control",
        "Keep insurance and rent honest",
        "Audit soft spend weekly at first",
        "Name the buffer even if small",
      ],
    },
    mistakes: {
      title: "Avoid these",
      items: [
        "Cutting coffee before rent reality",
        "Rate hunting before a buffer",
        "Treating store lists as rankings",
        "Deleting mandatory insurance lines",
      ],
    },
    checklist: {
      title: "Before you optimise further",
      items: [
        "Budget template exists",
        "Biggest levers identified",
        "Subscriptions audited",
        "Buffer named and funded toward",
      ],
    },
  },
  introParagraphs: [
    "Saving money in the Netherlands usually means changing a few big habits — not downloading a viral “Amsterdam is expensive” listicle. Expats who cut coffee while ignoring rent location, dining rhythm or forgotten subscriptions often feel busy and still cash-tight.",
    "This guide owns the levers: housing habits, groceries, transport, subscriptions, banking fees, energy and dining — plus a first emergency buffer and calm spaarrekening orientation. Cost of living owns drivers and city framing. Monthly budget owns the category template and workflow. Banking siblings own account types and fees — this page does not rank savings products.",
  ],
  introHighlights: [
    "Start with levers you control after rent reality is clear",
    "Protect fixed lines (rent, insurance) while trimming habits",
    "Build a named emergency buffer before product shopping",
    "Treat euro impacts as 2026 planning ranges — verify live prices",
  ],
  orientationFlowSteps: [
    "Know your biggest levers",
    "Trim habits without breaking fixed lines",
    "Name and fund a first buffer",
    "Park surplus calmly (spaarrekening later)",
  ],
  safetyFileChecklist: [
    "Monthly budget template already filled",
    "Net pay and rent reality written down",
    "Top three spend levers circled",
    "Grocery + dining habit tracked for 2–4 weeks",
    "Transport mode chosen (bike / OV / car)",
    "Subscription list exported from bank app",
    "Banking package fee noted",
    "Utilities inclusions checked",
    "Emergency buffer target named (€ amount)",
    "COL and monthly budget siblings bookmarked",
    "Types of accounts + fees guides bookmarked for spaarrekening",
  ],
  introScenarios: [
    {
      situation: "New in the Randstad, rent already signed",
      approach: "You cannot rewind the lease overnight — reclaim cash from dining, groceries, subscriptions and transport first.",
      firstStep: "Track two weeks of food + subscriptions, then cancel unused stacks.",
    },
    {
      situation: "Still searching for housing",
      approach: "Housing is the largest lever — compare commute, inclusions and shared options before lifestyle cuts.",
      firstStep: "Write a max rent band against net pay using the monthly budget sibling.",
    },
    {
      situation: "Couple with overlapping streaming and gyms",
      approach: "Audit shared vs solo subscriptions; keep one social dining budget you both agree on.",
      firstStep: "Export recurring charges and mark duplicates.",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: how do expats save money in the Netherlands?",
    summary:
      "Focus on controllable levers after you know rent and net pay: housing habits (when you can still choose), groceries and dining rhythm, bike + OV transport, a quarterly subscription audit, low-drama banking fees, and energy awareness — then fund a first emergency buffer before spaarrekening shopping. Indicative 2026 euro impacts help you plan; they are not quotes.",
    bullets: [
      "Housing usually dwarfs coffee cuts — protect that decision first when you still can.",
      "Groceries + dining habits often free €50–€200+ / month for many newcomers (planning).",
      "Bike + OV keeps transport lean; car ownership changes the stack.",
      "Name a buffer on your budget template; use banking siblings for spaarrekening details — not rankings here.",
    ],
    note: "Always pair this page with the monthly budget template and COL drivers — cut levers without a plan usually bounce back.",
  },
  snapshotSignals: [
    { label: "Biggest lever", value: "Housing habits", note: "When you can still choose" },
    { label: "Everyday", value: "Food + dining", note: "Habit-led reclaim" },
    { label: "Transport", value: "Bike + OV", note: "Car changes everything" },
    { label: "Next step", value: "Buffer first", note: "Then spaarrekening calm" },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Housing first (when open)",
      body: "Location, inclusions and shared housing move totals more than most lifestyle tips. If the lease is signed, shift to everyday levers.",
    },
    {
      title: "Food is habit-led",
      body: "Store orientation and cook-at-home rhythm usually beat obscure coupons. Dining out sits under leisure — track it honestly.",
    },
    {
      title: "Bike + OV stack",
      body: "Many expats keep transport lean without a car. Occasional taxis are fine; monthly car costs are a different world.",
    },
    {
      title: "Subscriptions creep",
      body: "Streaming, software, gyms and trials stack quietly. A quarterly audit often frees a calm monthly band.",
    },
    {
      title: "Fees are small but real",
      body: "Bank packages and FX habits rarely rival rent — still worth a tidy review once big levers are stable.",
    },
    {
      title: "Buffer before products",
      body: "A named emergency pot beats rate shopping with zero cash cushion. Spaarrekening orientation links to banking siblings.",
    },
  ] satisfies TipCard[],
  levers: {
    heading: "Saving levers that usually matter",
    lead: "Order your effort. Tiny habits feel productive; large levers change the month. Use this map after your budget template exists — COL explains drivers; this page owns cuts and habits.",
    bullets: [
      "Housing / rent location / inclusions / sharing",
      "Groceries rhythm + store-type awareness",
      "Dining out and coffee culture",
      "Transport mode (bike, OV, car)",
      "Subscriptions and memberships",
      "Energy and utilities habits",
      "Banking package and FX habits",
      "Named emergency buffer (save, not only cut)",
    ],
    indicativeRows: [
      {
        lever: "Housing / location choice",
        indicativeImpact: "Often hundreds of € / month vs city-core premium (planning)",
        tip: "Compare commute time honestly — see renting + cheap cities.",
      },
      {
        lever: "Shared vs solo housing",
        indicativeImpact: "Can free a large rent share — with privacy trade-offs",
        tip: "Price the trade-off, not only the euro line.",
      },
      {
        lever: "Groceries + cook rhythm",
        indicativeImpact: "Often roughly €30–€120 / month reclaim (planning)",
        tip: "Track a month before guessing.",
      },
      {
        lever: "Dining out / coffee",
        indicativeImpact: "Often roughly €50–€200+ / month if frequent (planning)",
        tip: "Protect social nights; cut autopilot.",
      },
      {
        lever: "Transport mode",
        indicativeImpact: "Bike + OV often far below car ownership stack",
        tip: "Delay a car until you truly need one.",
      },
      {
        lever: "Subscriptions audit",
        indicativeImpact: "Often roughly €10–€60+ / month (planning)",
        tip: "Export recurring charges from your bank app.",
      },
      {
        lever: "Banking fees / FX",
        indicativeImpact: "Usually smaller than rent — still tidy",
        tip: "See fees + cheapest accounts guides.",
      },
    ] satisfies LeverRow[],
    cards: [
      {
        title: "Cut after you can see",
        body: "Two weeks of bank-app tracking beats guessing. Then cut the largest soft lines first.",
      },
      {
        title: "Fixed lines stay fixed",
        body: "Do not “save” by skipping mandatory health insurance or underfunding rent. Protect structural lines.",
      },
      {
        title: "Save is also a verb",
        body: "Cutting spend without naming a buffer just relocates lifestyle spend. Park the reclaim.",
      },
      {
        title: "Sibling handoffs",
        body: "COL for drivers, monthly budget for the template, calculator for estimates, banking for products.",
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
        label: "Monthly budget (sibling)",
        href: MONTHLY_BUDGET_NETHERLANDS_PATH,
        description: "Category template + planning workflow",
        status: "live" as const,
      },
      {
        label: "Cost of living calculator",
        href: COST_OF_LIVING_CALCULATOR_PATH,
        description: "Interactive city and household estimates",
        status: "live" as const,
      },
    ] satisfies SavingMoneyLink[],
  },
  housing: {
    heading: "Housing habits that reduce spend",
    lead: "When the lease is still open, housing is usually the highest-impact lever. When it is signed, use everyday levers below and revisit at renewal. This is not a city ranking — cheap cities and renting guides own search detail.",
    bullets: [
      "Write a max rent band against net pay before viewing",
      "Price commute time vs lower rent outside the core",
      "Ask what energy, water and service charges include",
      "Consider shared housing only if the lifestyle fits",
      "Avoid bridging hotels that silently double housing cash",
    ],
    impactRows: [
      {
        habit: "Core vs outer neighbourhood (same city)",
        roughMonthly: "Often a meaningful rent gap (city-led)",
        note: "Trade commute and vibe",
      },
      {
        habit: "Utilities included vs separate",
        roughMonthly: "Often roughly €100–€250+ difference in visibility",
        note: "Inclusions still cost — just bundled",
      },
      {
        habit: "Shared room / flatshare",
        roughMonthly: "Can free a large rent share",
        note: "Privacy and contract risk trade-offs",
      },
    ] satisfies ImpactRow[],
    cards: [
      {
        title: "Commute honesty",
        body: "A cheaper flat with a brutal commute can erase savings in time, OV tickets and stress. Price both.",
      },
      {
        title: "Inclusions checklist",
        body: "Service costs, energy advances and internet can surprise you after signing. Confirm in writing.",
      },
      {
        title: "Renewal window",
        body: "If you already live somewhere pricey, set a calendar reminder to reassess at renewal — not every weekend.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Renting in the Netherlands",
        href: RENTING_NETHERLANDS_PATH,
        description: "Search, contracts and practical housing steps",
        status: "live" as const,
      },
      {
        label: "Utilities Netherlands",
        href: UTILITIES_NETHERLANDS_PATH,
        description: "Energy, water, internet setup",
        status: "live" as const,
      },
      {
        label: "Monthly budget (sibling)",
        href: MONTHLY_BUDGET_NETHERLANDS_PATH,
        description: "Lock the housing line in the template",
        status: "live" as const,
      },
    ] satisfies SavingMoneyLink[],
  },
  groceries: {
    heading: "Groceries: practical orientation",
    lead: "Dutch grocery spend is habit-led. Store types differ in price feel and assortment — use orientation, not fake rankings. Pair this section with the shopping & groceries sibling for everyday detail.",
    bullets: [
      "Plan a weekly cook list before you shop",
      "Know that premium and discount formats coexist — pick what fits your basket",
      "Keep dining-out and coffee out of the grocery line",
      "Imported comfort brands can stretch the basket fast",
      "Track two to four weeks before claiming a “normal” number",
    ],
    impactRows: [
      {
        habit: "Cook-most-nights vs frequent takeaway",
        roughMonthly: "Often roughly €50–€150+ difference (planning)",
        note: "Household size swings hard",
      },
      {
        habit: "Discount-led vs premium-led basket",
        roughMonthly: "Often roughly €20–€80+ (planning)",
        note: "Orientation only — not a store ranking",
      },
      {
        habit: "Impulse snacks and specialty imports",
        roughMonthly: "Quiet uplift many newcomers miss",
        note: "Visible only after tracking",
      },
    ] satisfies ImpactRow[],
    cards: [
      {
        title: "AH, Lidl and friends — orientation",
        body: "Full-service and discount formats sit on the same street in many cities. Choose by basket needs and location — this page does not rank winners.",
      },
      {
        title: "Weekly rhythm",
        body: "One main shop plus a midweek top-up beats daily convenience runs for many households.",
      },
      {
        title: "Separate leisure food",
        body: "Restaurant nights and café culture belong in dining/leisure — mixing them into “groceries” hides the lever.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        description: "Everyday shopping habits in the Netherlands",
        status: "live" as const,
      },
      {
        label: "Cost of living (sibling)",
        href: COST_OF_LIVING_NETHERLANDS_PATH,
        description: "How groceries sit among cost drivers",
        status: "live" as const,
      },
    ] satisfies SavingMoneyLink[],
  },
  transport: {
    heading: "Transport: bike, OV and the car question",
    lead: "Many Dutch cities reward bike-first living. OV covers longer hops. A car can be essential for some roles or suburbs — but it is a different monthly stack. Track honestly for one month before changing mode.",
    bullets: [
      "Default to bike for short city trips when practical",
      "Use OV-chipkaart / travel products you actually understand",
      "Budget occasional taxis without turning them into a subscription",
      "Delay car ownership until need is clear (parking, insurance, fuel)",
      "Employer travel schemes vary — verify yours separately",
    ],
    impactRows: [
      {
        habit: "Bike + occasional OV",
        roughMonthly: "Often roughly €40–€150 without a car (planning)",
        note: "City and commute dependent",
      },
      {
        habit: "Heavy daily OV",
        roughMonthly: "Can sit higher — track your passes",
        note: "Still often below full car stack",
      },
      {
        habit: "Car ownership stack",
        roughMonthly: "Parking + insurance + fuel + tax can dwarf bike/OV",
        note: "Only if you truly need it",
      },
    ] satisfies ImpactRow[],
    cards: [
      {
        title: "Buy a safe used bike",
        body: "A solid lock and lights matter. Theft risk is real — insure or choose parking carefully.",
      },
      {
        title: "OV without mystery",
        body: "Check-in/check-out mistakes create surprise charges. Learn your routes once.",
      },
      {
        title: "Car as a last lever",
        body: "If work requires it, budget the full stack. If not, treat car as a lifestyle upgrade, not a default.",
      },
    ] satisfies TipCard[],
  },
  subscriptions: {
    heading: "Subscription audit",
    lead: "Streaming, software, gyms, cloud storage, mobile extras and “free trials” stack quietly. A quarterly audit is one of the cleanest reclaim habits because it rarely touches rent or insurance.",
    bullets: [
      "Export recurring charges from your banking app",
      "Cancel unused trials and duplicate household plans",
      "Share family plans only where terms allow",
      "Set a calendar reminder every three months",
      "Move “nice to have” apps behind a 30-day wait rule",
    ],
    impactRows: [
      {
        habit: "Unused streaming / trials",
        roughMonthly: "Often roughly €10–€40 (planning)",
        note: "Easy wins",
      },
      {
        habit: "Duplicate gyms / memberships",
        roughMonthly: "Often roughly €20–€60+ (planning)",
        note: "Couples often overlap",
      },
      {
        habit: "Software and cloud stacks",
        roughMonthly: "Quiet €5–€30 bands add up",
        note: "Annual plans hide the pain",
      },
    ] satisfies ImpactRow[],
    cards: [
      {
        title: "One list, one night",
        body: "Block 45 minutes. Highlight keep / share / cancel. Cancel the same evening.",
      },
      {
        title: "Annual renewals",
        body: "Calendar the renewal dates. Annual charges feel small monthly until three hit the same week.",
      },
      {
        title: "Replace, don’t stack",
        body: "New tool? Cancel the old one the same day — or keep both on purpose with a written reason.",
      },
    ] satisfies TipCard[],
  },
  banking: {
    heading: "Banking fees and FX habits",
    lead: "Package fees and card costs rarely rival rent — but they are easy to tidy once. FX mark-ups on foreign cards and ATM habits can sting during travel months. This section is orientation — product deep-dives live on banking siblings.",
    bullets: [
      "Know your monthly package fee and what it includes",
      "Watch FX and ATM habits on travel months",
      "Use fees and cheapest-accounts guides for cost orientation",
      "Open-account path matters for rent and salary — do not delay IBAN setup to “save”",
    ],
    cards: [
      {
        title: "Fees vs features",
        body: "The cheapest package is not always the best fit if you need branches, joint access or specific payment tools.",
      },
      {
        title: "FX awareness",
        body: "Paying in euros when abroad is not always the win — learn your card’s FX behaviour once.",
      },
      {
        title: "Spaarrekening next",
        body: "Parking surplus belongs after the buffer goal. Types of accounts explains product shapes — not rankings here.",
      },
    ] satisfies TipCard[],
    crossLinks: [
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
        label: "Types of bank accounts",
        href: TYPES_OF_BANK_ACCOUNTS_PATH,
        description: "Current vs savings product shapes",
        status: "live" as const,
      },
      {
        label: "Open a bank account",
        href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
        description: "Setup path and documents",
        status: "live" as const,
      },
    ] satisfies SavingMoneyLink[],
  },
  energy: {
    heading: "Energy and utilities habits",
    lead: "Confirm what rent includes before chasing thermostat tips. Advances (voorschot) and annual reconciliations can surprise newcomers. Pair habits with the utilities sibling for setup.",
    bullets: [
      "Ask what energy, water and service costs cover",
      "Track advances vs actual use after the first seasons",
      "Thermostat and appliance timing help — after inclusions are clear",
      "Internet and phone are small lines but easy to overbuy",
    ],
    impactRows: [
      {
        habit: "Inclusions clarified at signing",
        roughMonthly: "Prevents surprise €100+ visibility gaps",
        note: "Process win more than a tip",
      },
      {
        habit: "Heating / thermostat awareness",
        roughMonthly: "Seasonal — often noticeable in winter",
        note: "Household and insulation dependent",
      },
      {
        habit: "Right-size internet/phone",
        roughMonthly: "Often roughly €5–€25 reclaim (planning)",
        note: "After comparing real needs",
      },
    ] satisfies ImpactRow[],
    cards: [
      {
        title: "Voorschot literacy",
        body: "Monthly advances are estimates. Keep a small buffer for year-end reconciliation.",
      },
      {
        title: "Habits after setup",
        body: "Once contracts exist, small habits help — but they will not fix an oversized rent line.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Utilities Netherlands",
        href: UTILITIES_NETHERLANDS_PATH,
        description: "Energy, water, internet orientation",
        status: "live" as const,
      },
    ] satisfies SavingMoneyLink[],
  },
  dining: {
    heading: "Dining out vs cooking",
    lead: "Café culture and restaurant nights are part of Dutch city life — the saving move is choosing them on purpose. Autopilot lunches and delivery apps often free more cash than another supermarket coupon.",
    bullets: [
      "Protect the social nights that matter to you",
      "Pack lunch most workdays if it helps your plan",
      "Watch coffee and bakery runs as a separate mini-line",
      "Delivery apps: set a monthly cap or delete the shortcut",
    ],
    impactRows: [
      {
        habit: "Daily café lunch → packed lunch",
        roughMonthly: "Often roughly €60–€150+ (planning)",
        note: "City prices vary",
      },
      {
        habit: "3 restaurant nights → 1 planned night",
        roughMonthly: "Often roughly €80–€200+ for a couple (planning)",
        note: "Keep joy, cut autopilot",
      },
      {
        habit: "Delivery app default",
        roughMonthly: "Fees + tips add a quiet uplift",
        note: "Cap or remove the app icon",
      },
    ] satisfies ImpactRow[],
    cards: [
      {
        title: "Joy budget",
        body: "A written dining budget beats guilt. Spend it proudly — then stop when it is gone.",
      },
      {
        title: "Cook once, eat twice",
        body: "Batch one dinner ingredient into next-day lunch. Small rhythm, real reclaim.",
      },
      {
        title: "Track before cutting",
        body: "One month of honest tags in your bank app beats an arbitrary “no restaurants” rule that fails week two.",
      },
    ] satisfies TipCard[],
  },
  buffer: {
    heading: "Build a first emergency buffer",
    lead: "Cutting spend without parking the reclaim usually returns as lifestyle creep. Name a buffer line on your monthly budget template, fund a first emergency pot, then grow toward essentials coverage. Product shopping comes after.",
    bullets: [
      "Name a buffer / savings line even if it starts at €50",
      "Aim for a first emergency sketch (many newcomers start around a few hundred to ~€1,000 — your number)",
      "Grow toward covering essential fixed lines for a short disruption",
      "Only then place surplus in a spaarrekening calmly",
      "Do not invest emergency cash you may need next month",
    ],
    steps: [
      {
        phase: "1",
        title: "Name the line",
        detail: "Add buffer / savings on your monthly budget template with a real euro amount — even small.",
      },
      {
        phase: "2",
        title: "Automate a transfer",
        detail: "Move the amount toward a separate pot on payday when cashflow allows.",
      },
      {
        phase: "3",
        title: "First emergency milestone",
        detail: "Pick a first target you can reach in 1–3 months (examples vary — choose yours).",
      },
      {
        phase: "4",
        title: "Essentials coverage",
        detail: "Grow toward short disruption cover for rent, insurance and food — not a perfect number from a blog.",
      },
      {
        phase: "5",
        title: "Park surplus calmly",
        detail: "When the buffer feels real, use Types of accounts + fees guides for spaarrekening orientation.",
      },
    ],
    cards: [
      {
        title: "Buffer ≠ investing",
        body: "Emergency cash needs to stay reachable. Investment products are a different conversation.",
      },
      {
        title: "Separate pot helps",
        body: "A labelled savings space reduces “accidentally spending the buffer” on décor.",
      },
      {
        title: "Rebuild after spikes",
        body: "Move-in months and travel can empty the pot — schedule a rebuild, do not abandon the line.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Monthly budget (sibling)",
        href: MONTHLY_BUDGET_NETHERLANDS_PATH,
        description: "Name the buffer on the template",
        status: "live" as const,
      },
      {
        label: "Types of bank accounts",
        href: TYPES_OF_BANK_ACCOUNTS_PATH,
        description: "Where a spaarrekening fits",
        status: "live" as const,
      },
    ] satisfies SavingMoneyLink[],
  },
  spaarrekening: {
    heading: "Spaarrekening — short orientation",
    lead: "A spaarrekening (savings account) is typically a place to park surplus separately from your current account. This page does not rank banks, rates or products. Use Types of bank accounts for product shapes and banking fees / cheapest accounts for cost orientation.",
    bullets: [
      "Current account pays rent and bills; savings pot holds surplus you should not spend casually",
      "Rates and conditions change — verify live with providers",
      "Buffer goal first; rate shopping later",
      "Joint vs solo pots depend on household agreements — see joint accounts if relevant",
    ],
    cards: [
      {
        title: "Not a ranking",
        body: "Any “best spaarrekening” list ages instantly. Learn the product shape, then compare live offers yourself.",
      },
      {
        title: "Access vs rate",
        body: "Some products trade easier access for conditions. Match the pot to emergency vs medium-term goals.",
      },
      {
        title: "Fees still matter",
        body: "Package costs on the current account and any savings-related fees belong in your review — see the fees guide.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Types of bank accounts",
        href: TYPES_OF_BANK_ACCOUNTS_PATH,
        description: "Current vs savings product orientation",
        status: "live" as const,
      },
      {
        label: "Banking fees & costs",
        href: HPW_FEES_PATH,
        description: "Fee orientation beside savings products",
        status: "live" as const,
      },
      {
        label: "Cheapest bank accounts",
        href: CHEAPEST_BANK_ACCOUNTS_PATH,
        description: "Low-cost package orientation",
        status: "live" as const,
      },
      {
        label: "Banking hub",
        href: BANKING_HUB_PATH,
        description: "All banking guides",
        status: "live" as const,
      },
    ] satisfies SavingMoneyLink[],
  },
  scenarios: {
    heading: "Saving scenarios for newcomers",
    lead: "Same lever map, different first moves. Pick the story that matches your constraints.",
    rows: [
      {
        situation: "Single newcomer — lease already signed",
        approach: "Reclaim from dining, groceries, subscriptions and transport; fund a small buffer weekly.",
        firstStep: "Export recurring charges and tag two weeks of food spend.",
      },
      {
        situation: "Couple sharing rent",
        approach: "Agree shared vs solo leisure; kill duplicate subscriptions; one joint buffer rule.",
        firstStep: "List overlapping streaming/gym charges tonight.",
      },
      {
        situation: "Family with daycare squeeze",
        approach: "Protect care and insurance lines; cut soft leisure and subscriptions before “optimising” care hours unsafely.",
        firstStep: "Re-run the monthly budget template with care hours locked.",
      },
      {
        situation: "Student / shared housing",
        approach: "Lower rent helps — still watch insurance, OV and food; build a tiny buffer for admin surprises.",
        firstStep: "Confirm huis inclusions, then set a € amount buffer auto-transfer.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: {
    heading: "Common saving mistakes",
    cards: [
      {
        title: "Cutting coffee before rent reality",
        body: "Tiny habits feel productive while the housing line still breaks the plan.",
        advice: "When the lease is open, fix housing first. When signed, still track big soft spend.",
      },
      {
        title: "Rate hunting with zero buffer",
        body: "Shopping spaarrekening rates before an emergency pot exists reshuffles anxiety, not safety.",
        advice: "Name and fund a buffer line first — then park surplus calmly.",
      },
      {
        title: "Treating store lists as rankings",
        body: "Fake “best supermarket” rankings age badly and miss your basket.",
        advice: "Use orientation + your tracked month — not influencer scorecards.",
      },
      {
        title: "Deleting insurance to “save”",
        body: "Mandatory health insurance is structural for most residents.",
        advice: "Trim leisure and subscriptions — keep structural cover.",
      },
      {
        title: "Cutting without parking",
        body: "Reclaimed euros drift back into dining and apps.",
        advice: "Auto-transfer the reclaim to the buffer pot on payday.",
      },
      {
        title: "Mixing this page with COL or budget",
        body: "This guide owns levers and habits. Drivers and templates live on siblings.",
        advice: "Use COL for framing; monthly budget for the template; this page for cuts.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Saving readiness checklist",
    lead: "Use this after your monthly budget template exists. Then verify live prices and provider terms.",
    items: [
      "Monthly budget template filled (sibling)",
      "Net pay and rent reality written down",
      "Top three levers circled",
      "Two weeks of food + dining tagged",
      "Transport mode chosen and costed",
      "Subscriptions list audited (keep / share / cancel)",
      "Banking package fee noted",
      "Utilities inclusions confirmed",
      "Emergency buffer target named (€)",
      "Auto-transfer set toward the buffer (if cashflow allows)",
      "Types of accounts + fees guides bookmarked for spaarrekening",
      "COL calculator scenario matches assumptions",
      "Health insurance kept as a structural line",
    ],
  },
  howTo: {
    heading: "How to start saving in the Netherlands",
    lead: "A calm sequence beats random tips. Follow these steps, then refine with live prices.",
    steps: [
      {
        name: "Confirm the budget template exists",
        text: "Use the monthly budget sibling so categories and net pay are visible before you cut.",
      },
      {
        name: "Circle the biggest controllable levers",
        text: "Housing (if open), food/dining, transport, subscriptions — ignore tiny tips until these are clear.",
      },
      {
        name: "Track two weeks of soft spend",
        text: "Tag groceries, dining, coffee and recurring charges in your bank app.",
      },
      {
        name: "Make one housing or habit change",
        text: "Either adjust the housing decision if you still can, or cancel unused subscriptions and set a dining cap.",
      },
      {
        name: "Name and fund a first buffer",
        text: "Put a euro amount on the template and automate a transfer when cashflow allows.",
      },
      {
        name: "Park surplus calmly later",
        text: "When the buffer feels real, read Types of accounts and fees guides for spaarrekening orientation — no product ranking here.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to start saving money in the Netherlands",
    description:
      "Orientation steps for expats: confirm a monthly budget template, identify big spend levers, track soft spend, cut habits without breaking fixed lines, fund a first emergency buffer, then review spaarrekening orientation on banking guides.",
    anchor: "#howto",
  },
  bankingLinks: {
    heading: "Banking & money plumbing nearby",
    lead: "Saving habits sit beside Dutch payment setup. These guides help with accounts and fees — they do not replace buffer discipline.",
    items: [
      {
        label: "Types of bank accounts",
        href: TYPES_OF_BANK_ACCOUNTS_PATH,
        description: "Current vs savings product shapes",
        status: "live" as const,
      },
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
    ] satisfies SavingMoneyLink[],
  },
  faq: [
    {
      q: "How can expats save money in the Netherlands?",
      a: "Focus on controllable levers after rent and net pay are clear: housing habits when the lease is open, groceries and dining rhythm, bike + OV transport, a subscription audit, tidy banking fees, and a named emergency buffer. Indicative 2026 impacts on this page are planning ranges only.",
    },
    {
      q: "What is the difference between this page and monthly budget?",
      a: "Monthly budget owns the category template, first-month vs steady-state, and the planning workflow. This page owns cut levers and habits once the template exists. Use both.",
    },
    {
      q: "What about cost of living?",
      a: "Cost of living owns drivers, lifestyle/city framing and how to read numbers. This page owns practical ways to reduce spend and build a buffer.",
    },
    {
      q: "Which supermarket is cheapest?",
      a: "This guide does not rank stores. Discount and full-service formats coexist — track your basket for a few weeks and use the shopping & groceries sibling for everyday orientation.",
    },
    {
      q: "Should I open a spaarrekening immediately?",
      a: "A separate savings pot helps once you have surplus to park. Fund a first emergency buffer goal first, then read Types of bank accounts and fees guides — this page does not rank products.",
    },
    {
      q: "Is cutting health insurance a way to save?",
      a: "No. Basic health insurance is structural for most residents. Trim leisure and subscriptions instead — see the health insurance orientation guide.",
    },
    {
      q: "How much should my emergency buffer be?",
      a: "There is no single number. Many newcomers start with a reachable first target, then grow toward short essentials coverage. Pick a figure that fits your fixed lines and risk — this is orientation, not advice.",
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
      label: "Monthly budget for expats",
      href: MONTHLY_BUDGET_NETHERLANDS_PATH,
      description: "Category template + workflow — cluster sibling",
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
      description: "Take-home pay for planning",
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
      label: "Shopping & groceries",
      href: SHOPPING_GROCERIES_PATH,
      description: "Everyday shopping habits",
      status: "live" as const,
    },
    {
      label: "Health insurance Netherlands",
      href: HEALTH_INSURANCE_NETHERLANDS_PATH,
      description: "Keep structural cover while you cut soft spend",
      status: "live" as const,
    },
    {
      label: "Types of bank accounts",
      href: TYPES_OF_BANK_ACCOUNTS_PATH,
      description: "Spaarrekening product shapes",
      status: "live" as const,
    },
    {
      label: "Banking fees & costs",
      href: HPW_FEES_PATH,
      description: "Account and payment costs",
      status: "live" as const,
    },
    {
      label: "Cheapest bank accounts",
      href: CHEAPEST_BANK_ACCOUNTS_PATH,
      description: "Low-cost package orientation",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Get a Dutch IBAN for rent and bills",
      status: "live" as const,
    },
  ] satisfies SavingMoneyLink[],
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
      label: "Monthly budget (sibling)",
      href: MONTHLY_BUDGET_NETHERLANDS_PATH,
      description: "Build the template first",
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
      label: "Types of bank accounts",
      href: TYPES_OF_BANK_ACCOUNTS_PATH,
      description: "Spaarrekening orientation next",
      status: "live" as const,
    },
  ] satisfies SavingMoneyLink[],
  exploreNext: [
    {
      label: "Monthly budget for expats",
      href: MONTHLY_BUDGET_NETHERLANDS_PATH,
      description: "Lock categories and the buffer line",
      status: "live" as const,
    },
    {
      label: "Cost of living in the Netherlands",
      href: COST_OF_LIVING_NETHERLANDS_PATH,
      description: "Read drivers and city bands",
      status: "live" as const,
    },
    {
      label: "Cost of living calculator",
      href: COST_OF_LIVING_CALCULATOR_PATH,
      description: "Model your city and household",
      status: "live" as const,
    },
    {
      label: "Types of bank accounts",
      href: TYPES_OF_BANK_ACCOUNTS_PATH,
      description: "Park surplus calmly later",
      status: "live" as const,
    },
    {
      label: "Shopping & groceries",
      href: SHOPPING_GROCERIES_PATH,
      description: "Everyday shopping habits",
      status: "live" as const,
    },
    {
      label: "Renting in the Netherlands",
      href: RENTING_NETHERLANDS_PATH,
      description: "Ground your housing lever",
      status: "live" as const,
    },
  ] satisfies SavingMoneyLink[],
  officialSources: [
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Official orientation for living and practical matters in the Netherlands",
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
      description: "Consumer association guidance — verify current cost articles",
    },
    {
      label: "Government.nl — Health insurance",
      href: "https://www.government.nl/topics/health-insurance",
      description: "Official information on mandatory basic health insurance",
    },
    {
      label: "AFM",
      href: "https://www.afm.nl/en",
      description: "Dutch Authority for the Financial Markets — consumer finance orientation",
    },
  ],
  disclosure:
    "Some links on this page may be affiliate or referral links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes prices, eligibility or your personal budget reality. All euro bands are indicative planning ranges for 2026 orientation only. This page does not rank savings products or provide personal financial advice.",
} as const;

export type SavingMoneyNetherlandsPage = typeof savingMoneyNetherlandsPage;

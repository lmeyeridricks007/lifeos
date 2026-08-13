import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";
import {
  COST_OF_LIVING_CALCULATOR_PATH,
  COST_OF_LIVING_NETHERLANDS_PATH,
  MONEY_HUB_PATH,
  MONTHLY_BUDGET_NETHERLANDS_PATH,
  SAVING_MONEY_NETHERLANDS_PATH,
  HEALTH_INSURANCE_NETHERLANDS_PATH,
} from "@/src/components/money/cost-of-living-netherlands/costOfLivingNetherlandsPageModel";
import { HOUSING_COSTS_NETHERLANDS_PATH } from "@/src/components/housing/housingCostsNetherlandsPageModel";
import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { INTERNATIONAL_TRANSFERS_FROM_NL_PATH } from "@/src/components/money/international-transfers-from-nl/internationalTransfersFromNlPaths";
import { CHEAPEST_CITIES_FOR_EXPATS_PATH } from "@/src/components/cities/cheapest-cities-for-expats/cheapestCitiesForExpatsPageModel";

export const HIDDEN_COSTS_NETHERLANDS_PATH = "/netherlands/money/hidden-costs-netherlands/" as const;
export const FINANCIAL_CHECKLIST_NETHERLANDS_PATH =
  "/netherlands/money/financial-checklist-netherlands/" as const;
export const RENT_AFFORDABILITY_CALCULATOR_PATH =
  "/netherlands/housing/tools/rent-affordability-calculator/" as const;

export const MOVING_CHECKLIST_PATH = "/netherlands/moving-checklist-netherlands/" as const;
export const MOVING_DOCUMENTS_CHECKLIST_PATH = "/netherlands/moving-documents-checklist/" as const;
export const MOVING_COST_PATH = "/netherlands/moving-to-netherlands-cost/" as const;
export const CHILDCARE_ALLOWANCE_PATH = "/netherlands/taxes/childcare-allowance-netherlands/" as const;

export type HiddenCostsLink = {
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

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "hidden-costs-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const hiddenCostsNetherlandsPage = {
  slug: "hidden-costs-netherlands",
  path: HIDDEN_COSTS_NETHERLANDS_PATH,
  hubPath: MONEY_HUB_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(HIDDEN_COSTS_NETHERLANDS_PATH) ?? "2026-08-18",
  seo: {
    title: "Hidden Costs of Living in the Netherlands | Expat Money Guide",
    description:
      "Newcomer surprise costs in the Netherlands: deposits, insurance eigen risico, municipal taxes, banking FX, school and childcare extras, move-in cash — indicative 2026 bands and an orientation checklist.",
    keywords: [
      "hidden costs Netherlands",
      "hidden costs living Netherlands expats",
      "deposit costs Netherlands",
      "eigen risico costs",
      "municipal taxes Netherlands expats",
      "move-in costs Netherlands",
      "unexpected costs Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Everyday costs",
    pageTitle: "Hidden Costs of Living in the Netherlands",
    subtitle:
      "Cross-category surprise lines newcomers miss beyond headline rent: deposits, eigen risico, municipal taxes, banking FX, school and childcare extras, and move-in cash — orientation checklist with indicative 2026 bands.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "Orientation checklist", href: "#checklist" },
    chips: ["Deposits", "Eigen risico", "Municipal taxes", "FX fees", "Move-in cash", "2026 bands"],
    disclaimer:
      "General orientation only — not financial, tax, insurance or housing advice. Euro bands are indicative 2026 planning ranges, not quotes. Rules and tariffs differ by municipality, insurer, landlord and bank. Verify with official sources and providers before you budget or pay.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic Dutch apartment kitchen table: expat reviewing a move-in cost checklist with deposit letter, insurance policy, municipal tax leaflet and banking FX receipt beside a laptop, soft canal-house daylight.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what-are", label: "What they are" },
    { href: "#move-in", label: "Move-in cash" },
    { href: "#insurance", label: "Insurance surprises" },
    { href: "#municipal", label: "Municipal taxes" },
    { href: "#banking-fx", label: "Banking & FX" },
    { href: "#family-extras", label: "School & childcare" },
    { href: "#bands", label: "Indicative bands" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
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
      "Premium orientation board titled Hidden Costs of Living in the Netherlands — four surprise categories: move-in cash, insurance eigen risico, municipal taxes, and banking FX plus family extras — right-side Surprise file rail lists deposit, deductible, tax leaflet and FX receipt — Dutch canal skyline and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Four surprise categories cover most newcomer budget gaps beyond headline rent."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch hidden costs — deposits front-load cash, eigen risico is not the premium, municipal taxes arrive by letter, FX nibbles transfers, school extras add up, housing depth lives on Housing costs — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise cross-category surprises; deeper sections expand each without ranking providers."
    ),
    whatAre: visual(
      "what-are",
      "Premium desk scene explaining hidden costs as cross-category newcomer surprises — not only housing — General information only rail, canal window light, ExpatLife brand area.",
      "Hidden costs here means cross-category cash surprises — housing depth links out to the housing costs guide."
    ),
    moveIn: visual(
      "move-in",
      "Premium move-in cash timeline — deposit, first rent, agency fee awareness, keys and utilities activation — indicative 2026 bands rail, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Move-in cash is front-loaded — plan weeks before the first salary lands."
    ),
    insurance: visual(
      "insurance",
      "Premium insurance surprises board — monthly premium vs eigen risico deductible, liability and household add-ons — Verify with your insurer rail, ExpatLife brand footer.",
      "Premium is not the whole insurance cost — deductible timing matters."
    ),
    municipal: visual(
      "municipal",
      "Premium municipal taxes board — afvalstoffenheffing, rioolheffing, waterschap cues with letter calendar — Dutch city hall context and ExpatLife brand area.",
      "Municipal and water-board letters often arrive after you settle — budget a line before they surprise you."
    ),
    bankingFx: visual(
      "banking-fx",
      "Premium banking and FX fee board — ATM abroad, currency conversion, transfer markup — pair with Dutch IBAN habits — ExpatLife brand footer with compass and Live. Love. Stay.",
      "FX and transfer fees quietly shrink remittances and travel cash."
    ),
    familyExtras: visual(
      "family-extras",
      "Premium school and childcare extras board — lunch, trips, after-school, registration fees — link to allowance orientation — ExpatLife brand footer.",
      "Family extras sit outside headline rent and basic insurance — plan a monthly family buffer."
    ),
    bands: visual(
      "bands",
      "Premium indicative 2026 bands table board for Dutch hidden costs — deposits, eigen risico, municipal taxes, FX, family extras — planning only labels, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Indicative 2026 bands for orientation — confirm live tariffs with providers."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for hidden costs — solo arrival, couple move-in, family with school, remittance household — each with a first cash move.",
      "Different households hit different surprise lines first."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands hidden costs — budgeting rent only, ignoring eigen risico, skipping municipal letters, using tourist FX cards, treating this as a full move logistics checklist — Fix tips rail.",
      "Common friction points and calmer fixes — orientation only."
    ),
    checklist: visual(
      "checklist",
      "Premium hidden-costs orientation checklist — deposit cash, insurance deductible, municipal tax line, FX plan, family extras, housing deep-link, financial checklist next — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist to size surprise cash before month one — then order setup on the Financial checklist."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "Spot cross-category surprise costs beyond headline rent",
        "Size move-in cash, insurance deductibles and municipal lines",
        "Watch banking FX and family extras",
        "Deep-link housing for rent/deposit depth — not duplicate it",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Deposits front-load cash before salary rhythm",
        "Eigen risico is separate from the premium",
        "Municipal letters arrive on their own calendar",
        "Housing depth lives on Housing costs",
      ],
    },
    whatAre: {
      title: "Definition habits",
      items: [
        "Cross-category newcomer surprises",
        "Not a full housing costs deep-dive",
        "Not a full moving logistics checklist",
        "Pairs with Cheap cities and Financial checklist",
      ],
    },
    moveIn: {
      title: "Move-in cash habits",
      items: [
        "Deposit plus first rent timing",
        "Agency and admin awareness",
        "Utilities activation and keys",
        "Link Housing costs for rent/deposit depth",
      ],
    },
    insurance: {
      title: "Insurance surprise habits",
      items: [
        "Plan premium and eigen risico together",
        "Know when deductible cash hits",
        "Liability and household as separate lines",
        "Verify with insurer and zorgverzekeraar tools",
      ],
    },
    municipal: {
      title: "Municipal tax habits",
      items: [
        "Waste and sewerage charges are common",
        "Water-board bills may arrive separately",
        "Amounts vary by municipality and household",
        "Keep a letter folder from month one",
      ],
    },
    bankingFx: {
      title: "FX and banking habits",
      items: [
        "Avoid tourist conversion defaults",
        "Price remittance routes before payday",
        "ATM and card FX still matter for travel",
        "Pair with Banking hub guides",
      ],
    },
    familyExtras: {
      title: "Family extra habits",
      items: [
        "School trips and lunch add monthly drift",
        "Childcare extras beyond base fees",
        "Allowance orientation is separate admin",
        "Keep a family buffer line",
      ],
    },
    bands: {
      title: "Band reading tips",
      items: [
        "Treat euros as planning cues only",
        "Household size changes many lines",
        "City and landlord rules vary widely",
        "Re-check before you transfer cash",
      ],
    },
    scenarios: {
      title: "Scenario planning tips",
      items: [
        "Solo: deposit + insurance first",
        "Couple: shared move-in cash plan",
        "Family: school and childcare buffers",
        "Remittance: FX route before first salary",
      ],
    },
    mistakes: {
      title: "Mistake prevention",
      items: [
        "Do not budget rent alone",
        "Do not ignore eigen risico cash",
        "Do not skip municipal letter prep",
        "Do not confuse this with moving logistics",
      ],
    },
    checklist: {
      title: "Ready signals",
      items: [
        "Move-in cash sized",
        "Insurance deductible noted",
        "Municipal tax line reserved",
        "Financial checklist opened for setup order",
      ],
    },
  },
  introParagraphs: [
    "Headline rent rarely equals month-one reality. This guide owns cross-category newcomer surprises in the Netherlands: deposits and move-in cash, insurance eigen risico, municipal taxes, banking FX, and school or childcare extras — with indicative 2026 bands and a calm orientation checklist.",
    "It is not a full housing costs deep-dive (see Housing costs for rent and deposit depth) and not a full moving logistics checklist (see Moving checklist). Cheap cities compares place-level money stacks; the Financial checklist orders money setup in the first 30/90 days.",
  ],
  introHighlights: [
    "Cross-category surprises beyond rent — deposits, deductibles, taxes, FX, family extras",
    "Boundary: housing depth → Housing costs; logistics → Moving checklist",
    "Links into Cheap cities, Cost of living and Financial checklist siblings",
  ],
  orientationFlowSteps: [
    "List surprise categories that apply to your household",
    "Size move-in cash separately from monthly rent",
    "Add insurance deductible and municipal tax lines",
    "Plan FX and family extras before month one",
  ],
  safetyFileChecklist: [
    "Deposit + first rent cash plan",
    "Insurance premium + eigen risico note",
    "Municipal / water-board letter folder",
    "FX / remittance route chosen",
    "Family extras buffer (if relevant)",
    "Bookmarks: Housing costs, Health insurance, Banking hub, Financial checklist",
  ],
  introScenarios: [
    {
      situation: "Solo arrival with first salary weeks away",
      approach: "Front-load deposit and insurance cash before lifestyle spend",
      firstStep: "Write a move-in cash total separate from monthly rent",
    },
    {
      situation: "Family registering children for school",
      approach: "Add trips, lunch and after-school extras to the monthly buffer",
      firstStep: "Ask the school for a typical extras list for the year",
    },
    {
      situation: "Sending money home each month",
      approach: "Price FX and transfer routes before the first payday",
      firstStep: "Compare one remittance on your bank vs a specialist tool",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: what are the hidden costs of living in the Netherlands?",
    summary:
      "Beyond headline rent, newcomers often underestimate deposits and move-in cash, health-insurance eigen risico (deductible), municipal waste and related taxes, banking FX on cards and transfers, and school or childcare extras. This page is an orientation checklist with indicative 2026 bands — not quotes, rankings or financial advice.",
    bullets: [
      "Move-in cash is front-loaded — often several times monthly rent when deposits and first month stack",
      "Insurance cost is premium + deductible timing, not premium alone",
      "Municipal and water-board bills arrive on their own calendar",
      "Housing rent/deposit depth → Housing costs; setup order → Financial checklist",
    ],
    note: "Bands vary by city, landlord, insurer and household. Verify live amounts before you transfer money.",
  },
  snapshotSignals: [
    {
      label: "Front-loaded",
      value: "Move-in cash",
      note: "Deposit + first rent + setup",
    },
    {
      label: "Insurance gap",
      value: "Eigen risico",
      note: "Deductible ≠ monthly premium",
    },
    {
      label: "Letter mail",
      value: "Municipal taxes",
      note: "Arrive after you settle",
    },
    {
      label: "Quiet drain",
      value: "FX & extras",
      note: "Transfers, travel, school",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "What this page covers",
      body: "Cross-category newcomer surprises with indicative bands and a checklist — deposits, insurance, municipal taxes, FX and family extras.",
    },
    {
      title: "What it is not",
      body: "Not a full housing costs guide, not a moving logistics checklist, not a city ranking.",
    },
    {
      title: "Move-in cash",
      body: "Deposits and first payments often hit before Dutch salary rhythm feels normal.",
    },
    {
      title: "Insurance surprises",
      body: "Plan eigen risico and optional policies alongside the basic premium.",
    },
    {
      title: "Admin letters",
      body: "Municipal and water-board charges are easy to miss until the envelope arrives.",
    },
    {
      title: "Next setup step",
      body: "After you size surprises, use the Financial checklist for ordered money ops in the first 30/90 days.",
    },
  ] satisfies TipCard[],
  whatAre: {
    heading: "What “hidden costs” means on this page",
    lead: "Here, hidden costs means cash lines newcomers often omit when they budget from headline rent alone. The job is cross-category orientation — not a duplicate of housing hidden-cost sections, and not a full move packing or documents checklist.",
    bullets: [
      "Surprises across housing cash, insurance, local taxes, banking and family life",
      "Short link to Housing costs for rent/deposit depth",
      "Short link to Moving checklist for logistics — this page stays money-focused",
      "Pairs with Cheap cities (place stacks) and Financial checklist (setup order)",
    ],
    cards: [
      {
        title: "Cross-category, not housing-only",
        body: "Housing guides own rent, utilities and deposit mechanics in depth. This page keeps those lines short and widens the lens to insurance, taxes, FX and family extras.",
      },
      {
        title: "Cash timing matters",
        body: "Many surprises are about when money leaves your account — deposits before keys, deductibles after care, municipal bills months later.",
      },
      {
        title: "Indicative, not quoted",
        body: "2026 euro bands are planning cues. Your municipality, insurer and landlord set the real amounts.",
      },
      {
        title: "Checklist, not panic",
        body: "The goal is a calmer first month — not a scare list. Size the lines, then follow the Financial checklist for ordered setup.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Housing costs in the Netherlands",
        href: HOUSING_COSTS_NETHERLANDS_PATH,
        description: "Rent, utilities and housing hidden-cost depth",
      },
      {
        label: "Moving checklist Netherlands",
        href: MOVING_CHECKLIST_PATH,
        description: "Logistics peer — not money-only setup",
      },
      {
        label: "Cost of living in the Netherlands",
        href: COST_OF_LIVING_NETHERLANDS_PATH,
        description: "National cost drivers behind the lines",
      },
    ] satisfies HiddenCostsLink[],
  },
  moveIn: {
    heading: "Move-in cash (deposits and first payments)",
    lead: "Keys usually require more than one month of rent in hand. Deposits, first rent, possible agency or admin fees, and utility activation can stack in the same week. For rent and deposit mechanics in depth, use Housing costs — here we keep the cash-timing view.",
    bullets: [
      "Deposit commonly equals one to three months of rent — confirm your contract",
      "First rent often due before or at key handover",
      "Agency and admin rules vary — read what you are actually asked to pay",
      "Utilities may need activation deposits or first invoices soon after",
    ],
    cards: [
      {
        title: "Deposit timing",
        body: "Plan deposit cash as blocked money until the tenancy ends under contract rules — not as spare lifestyle budget.",
      },
      {
        title: "First-month stack",
        body: "Deposit + first rent can feel like two to four months of rent leaving at once. Size that before flights and furniture.",
      },
      {
        title: "Agency awareness",
        body: "Fee rules and who may charge what change over time — verify against your contract and current consumer guidance.",
      },
      {
        title: "Housing deep-link",
        body: "Need city-by-city housing cost context or utilities detail? Open Housing costs, then return for the wider surprise checklist.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Housing costs in the Netherlands",
        href: HOUSING_COSTS_NETHERLANDS_PATH,
        description: "Deposit and recurring housing cost depth",
      },
      {
        label: "Rent affordability calculator",
        href: RENT_AFFORDABILITY_CALCULATOR_PATH,
        description: "Size rent against income",
      },
      {
        label: "Moving to Netherlands cost",
        href: MOVING_COST_PATH,
        description: "Broader relocation cost orientation",
      },
    ] satisfies HiddenCostsLink[],
  },
  insurance: {
    heading: "Insurance surprises (premium vs eigen risico)",
    lead: "Most residents need Dutch basic health insurance. The monthly premium is only part of the cash story — the mandatory deductible (eigen risico) can create a second bill when you use care. Liability and household policies are separate lines many expats add after the first claim scare.",
    bullets: [
      "Budget premium and deductible awareness together",
      "Eigen risico is not “optional shopping” — it is how basic cover works for many costs",
      "Liability (aansprakelijkheid) and household cover are common add-ons, not automatic",
      "Verify current premiums and deductible rules with insurers and official guidance",
    ],
    cards: [
      {
        title: "Premium line",
        body: "Indicative adult basic premiums often sit in a mid-€100s monthly band in recent years — always check the year you buy.",
      },
      {
        title: "Eigen risico line",
        body: "Plan for deductible cash if you expect care early — it is separate from the premium on your budget sheet.",
      },
      {
        title: "Add-on policies",
        body: "Liability and household insurance are small monthly lines that prevent large surprise invoices later.",
      },
      {
        title: "Health guide deep-link",
        body: "For how Dutch health insurance works, open the health insurance guide — this section stays on cash surprises.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Health insurance Netherlands",
        href: HEALTH_INSURANCE_NETHERLANDS_PATH,
        description: "How Dutch basic cover works",
      },
      {
        label: "Cost of living in the Netherlands",
        href: COST_OF_LIVING_NETHERLANDS_PATH,
        description: "Where insurance sits in the national stack",
      },
    ] satisfies HiddenCostsLink[],
  },
  municipal: {
    heading: "Municipal and local tax letters",
    lead: "After you register and settle, municipalities and water boards send bills that are easy to miss if you only budget rent and groceries. Waste collection (afvalstoffenheffing), sewerage (rioolheffing) and water-board charges are common examples — names and amounts vary by place.",
    bullets: [
      "Expect letters in Dutch — set a translation habit early",
      "Amounts depend on municipality, dwelling and household",
      "Payment deadlines are real — late fees add another surprise",
      "Keep a digital folder for gemeentelijke belastingen and related mail",
    ],
    cards: [
      {
        title: "Waste and sewerage",
        body: "Often billed annually or in instalments. Ask neighbours or your municipality site for typical resident amounts.",
      },
      {
        title: "Water board",
        body: "Waterschap charges may arrive separately from municipality bills — same rule: open the letter, diary the due date.",
      },
      {
        title: "Parking permits",
        body: "In permit zones, annual parking can be a meaningful line — check before you assume street parking is free.",
      },
      {
        title: "Not income tax",
        body: "These local charges are not your Belastingdienst income-tax return. Tax orientation lives on Money tax guides and the Financial checklist.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Financial checklist for expats",
        href: FINANCIAL_CHECKLIST_NETHERLANDS_PATH,
        description: "Order admin and money setup after arrival",
      },
      {
        label: "Cheapest cities for expats",
        href: CHEAPEST_CITIES_FOR_EXPATS_PATH,
        description: "Place-level stacks where local costs differ",
      },
    ] satisfies HiddenCostsLink[],
  },
  bankingFx: {
    heading: "Banking FX and transfer surprises",
    lead: "Tourist card habits and “free” transfers often hide conversion markups. Remittances, ATM withdrawals abroad, and paying foreign sites from a Dutch account can quietly shrink your month.",
    bullets: [
      "Check whether the merchant or your bank sets the exchange rate",
      "Price remittance routes before the first payday home transfer",
      "ATM fees abroad still matter for travel months",
      "A Dutch IBAN helps local rent and salary — FX is a separate skill",
    ],
    cards: [
      {
        title: "Everyday FX",
        body: "Dynamic currency conversion at tills and booking sites can cost more than converting in your banking app.",
      },
      {
        title: "Remittances",
        body: "Compare total landed amount, not just the advertised fee — rate + fee is the real cost.",
      },
      {
        title: "Travel months",
        body: "Budget a travel FX line if you visit home often — it is a hidden lifestyle cost, not a banking product review.",
      },
      {
        title: "Banking deep-links",
        body: "For account and transfer orientation, use the Banking hub and international transfers guide.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Banking hub",
        href: BANKING_HUB_PATH,
        description: "Accounts and everyday banking orientation",
      },
      {
        label: "International transfers from NL",
        href: INTERNATIONAL_TRANSFERS_FROM_NL_PATH,
        description: "Fees, rates and timing orientation",
      },
    ] satisfies HiddenCostsLink[],
  },
  familyExtras: {
    heading: "School and childcare extras",
    lead: "Base school and childcare fees are only part of family cashflow. Trips, lunch schemes, after-school care extras, materials and celebrations create monthly drift. Allowances (when eligible) are separate admin — they do not erase every extra.",
    bullets: [
      "Ask schools for a typical yearly extras estimate",
      "Childcare extras can sit on top of base hourly fees",
      "Allowance orientation is useful but not instant cash",
      "Keep a family buffer even when headline fees look manageable",
    ],
    cards: [
      {
        title: "School year drift",
        body: "Trips and events cluster in seasons — a monthly average is calmer than reacting invoice by invoice.",
      },
      {
        title: "Childcare stack",
        body: "Base fees, extras and transport to care add up. Pair with childcare allowance orientation when relevant.",
      },
      {
        title: "Not a full family guide",
        body: "This section is money orientation only — school systems and parenting guides live elsewhere.",
      },
      {
        title: "Buffer line",
        body: "A modest family extras line in your monthly budget prevents “rent looked fine” regret.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Childcare allowance Netherlands",
        href: CHILDCARE_ALLOWANCE_PATH,
        description: "Allowance orientation for eligible families",
      },
      {
        label: "Monthly budget Netherlands",
        href: MONTHLY_BUDGET_NETHERLANDS_PATH,
        description: "Peer — put extras into a month template",
      },
    ] satisfies HiddenCostsLink[],
  },
  bands: {
    heading: "Indicative 2026 orientation bands",
    lead: "Use these as planning cues to size surprise lines — not as quotes or guarantees. Real amounts depend on city, contract, insurer, municipality and household size.",
    bullets: [
      "Re-check before you transfer deposit or pay first invoices",
      "Household size changes many municipal and insurance lines",
      "Combine with Cost of living for the full monthly stack",
    ],
    rows: [
      {
        setting: "Rental deposit (typical contract ask)",
        band: "Often 1–3× monthly rent",
        tip: "Confirm contract; treat as blocked cash",
      },
      {
        setting: "First rent at key handover",
        band: "Usually 1× monthly rent",
        tip: "Often stacks with deposit in the same week",
      },
      {
        setting: "Basic health insurance premium (adult)",
        band: "Often ~€140–€170 / month",
        tip: "Verify the year you enrol",
      },
      {
        setting: "Eigen risico (annual deductible awareness)",
        band: "Plan up to the statutory annual amount for the year",
        tip: "Cash timing ≠ monthly premium",
      },
      {
        setting: "Municipal waste / local charges (per household)",
        band: "Often low hundreds € / year (wide range)",
        tip: "Check your municipality; pay on time",
      },
      {
        setting: "FX / remittance friction",
        band: "Often ~0.5–3%+ of amount moved",
        tip: "Compare landed amount, not fee alone",
      },
      {
        setting: "School / childcare extras buffer",
        band: "Often ~€30–€150+ / month equivalent",
        tip: "Ask your school/opvang for a yearly view",
      },
    ] satisfies CostRow[],
    crossLinks: [
      {
        label: "Cost of living in the Netherlands",
        href: COST_OF_LIVING_NETHERLANDS_PATH,
        description: "Put bands into a full monthly stack",
      },
      {
        label: "Cost of living calculator",
        href: COST_OF_LIVING_CALCULATOR_PATH,
        description: "Model household assumptions",
      },
      {
        label: "Saving money in the Netherlands",
        href: SAVING_MONEY_NETHERLANDS_PATH,
        description: "Peer — levers after you know the surprises",
      },
    ] satisfies HiddenCostsLink[],
  },
  scenarios: {
    heading: "Scenarios: who hits which surprise first",
    lead: "Different households feel different lines first. Use the matching first step, then complete the full checklist.",
    rows: [
      {
        situation: "Solo starter with salary lag",
        approach: "Move-in cash and insurance dominate week one",
        firstStep: "Build a deposit + first rent + premium cash total",
      },
      {
        situation: "Couple sharing a first Dutch rental",
        approach: "Agree who funds deposit vs furniture vs buffers",
        firstStep: "Write a shared move-in cash plan before viewing offers",
      },
      {
        situation: "Family with school-age children",
        approach: "Add school extras and childcare drift early",
        firstStep: "Request a yearly extras estimate from school/opvang",
      },
      {
        situation: "Remittance household",
        approach: "FX route choice affects every payday",
        firstStep: "Run one transfer comparison before month one",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: {
    heading: "Common hidden-cost mistakes",
    lead: "These patterns create month-one stress. Each has a calmer fix — orientation only, not personal advice.",
    cards: [
      {
        title: "Budgeting headline rent only",
        body: "Deposit, insurance deductible and municipal letters never appear on the rental ad.",
        advice: "Add a surprise checklist beside every rent shortlist.",
      },
      {
        title: "Ignoring eigen risico cash",
        body: "Premium looks affordable until care creates a second bill.",
        advice: "Note deductible awareness on the same sheet as the premium.",
      },
      {
        title: "Skipping municipal letter prep",
        body: "Dutch envelopes get ignored until reminders and fees.",
        advice: "Create a taxes/letters folder in week one.",
      },
      {
        title: "Tourist FX defaults",
        body: "Dynamic conversion and weak remittance routes shrink the month quietly.",
        advice: "Price the landed amount before you click pay.",
      },
      {
        title: "Treating this as a moving logistics list",
        body: "Packing, visas and document stacks belong on moving guides.",
        advice: "Keep this page on money surprises; use Moving checklist for logistics.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Hidden-costs orientation checklist",
    lead: "Tick these before you treat your first Dutch month as “rent + groceries”. Then open the Financial checklist for ordered setup.",
    items: [
      "Deposit + first rent cash sized and dated",
      "Insurance premium + eigen risico noted",
      "Municipal / water-board line reserved",
      "FX / remittance route chosen (if relevant)",
      "Family extras buffer added (if relevant)",
      "Housing costs guide bookmarked for deposit depth",
      "Financial checklist opened for 30/90-day money ops",
      "Cost of living / calculator used for the full stack",
    ],
  },
  howTo: {
    heading: "How to budget for hidden costs before month one",
    steps: [
      {
        name: "List categories that apply to you",
        text: "Move-in cash, insurance, municipal taxes, FX and family extras — skip what truly does not apply.",
      },
      {
        name: "Size move-in cash separately",
        text: "Write deposit + first rent (+ known fees) as a one-off total with a date.",
      },
      {
        name: "Add insurance and local tax lines",
        text: "Premium, deductible awareness, and a municipal placeholder until letters arrive.",
      },
      {
        name: "Price FX and family extras",
        text: "One remittance test and one school/childcare extras estimate if relevant.",
      },
      {
        name: "Fold into monthly stack and setup order",
        text: "Use Cost of living / calculator for the month, then Financial checklist for banking and admin order.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to budget for hidden costs of living in the Netherlands",
    description:
      "Orientation steps for expats sizing deposits, insurance deductibles, municipal taxes, FX and family extras — not financial advice.",
    anchor: "#howto",
  },
  tools: {
    heading: "Tools that help nearby decisions",
    items: [
      {
        label: "Cost of living calculator",
        href: COST_OF_LIVING_CALCULATOR_PATH,
        description: "Model the full month including buffers",
      },
      {
        label: "Rent affordability calculator",
        href: RENT_AFFORDABILITY_CALCULATOR_PATH,
        description: "Size rent before deposit cash planning",
      },
      {
        label: "Money hub",
        href: MONEY_HUB_PATH,
        description: "Banking, taxes and cost-of-living entry points",
      },
    ] satisfies HiddenCostsLink[],
  },
  faq: [
    {
      q: "What hidden costs should expats expect in the Netherlands?",
      a: "Common surprises include rental deposits and move-in cash, health-insurance eigen risico, municipal waste and related charges, banking FX on cards and transfers, and school or childcare extras. Exact amounts vary — use this checklist as orientation.",
    },
    {
      q: "Is this the same as housing hidden costs?",
      a: "No. Housing costs owns rent, utilities and housing-side depth. This Money page covers cross-category newcomer surprises and links to housing for deposit depth.",
    },
    {
      q: "How much deposit should I budget?",
      a: "Many contracts ask for one to three months of rent as deposit — confirm your contract. Plan it as blocked cash alongside first rent.",
    },
    {
      q: "What is eigen risico in money terms?",
      a: "It is the annual deductible on basic health insurance for many care costs — separate from the monthly premium. Plan awareness even if you hope not to use care early.",
    },
    {
      q: "Are municipal taxes the same as income tax?",
      a: "No. Local waste, sewerage and water-board charges are separate from Belastingdienst income-tax processes.",
    },
    {
      q: "Does this replace a moving checklist?",
      a: "No. Moving checklist covers logistics and tasks. This page is money surprises only; Financial checklist orders money setup ops.",
    },
    {
      q: "Are the euro bands guarantees?",
      a: "No. Indicative 2026 planning ranges only. Verify with landlords, insurers, municipalities and banks.",
    },
    {
      q: "Is this financial advice?",
      a: "No. General orientation for newcomers. Use official sources and qualified help when your situation is complex.",
    },
  ],
  relatedGuides: [
    {
      label: "Cheapest cities for expats",
      href: CHEAPEST_CITIES_FOR_EXPATS_PATH,
      description: "Cluster sibling — place-level money stacks",
    },
    {
      label: "Financial checklist for expats",
      href: FINANCIAL_CHECKLIST_NETHERLANDS_PATH,
      description: "Cluster sibling — ordered money setup",
    },
    {
      label: "Cost of living in the Netherlands",
      href: COST_OF_LIVING_NETHERLANDS_PATH,
      description: "National drivers and how to read numbers",
    },
    {
      label: "Housing costs in the Netherlands",
      href: HOUSING_COSTS_NETHERLANDS_PATH,
      description: "Rent, utilities and housing hidden-cost depth",
    },
    {
      label: "Monthly budget Netherlands",
      href: MONTHLY_BUDGET_NETHERLANDS_PATH,
      description: "Peer — month template including buffers",
    },
    {
      label: "Saving money in the Netherlands",
      href: SAVING_MONEY_NETHERLANDS_PATH,
      description: "Peer — levers after you know surprise lines",
    },
    {
      label: "Moving checklist Netherlands",
      href: MOVING_CHECKLIST_PATH,
      description: "Logistics peer — not money-only",
    },
    {
      label: "Health insurance Netherlands",
      href: HEALTH_INSURANCE_NETHERLANDS_PATH,
      description: "How basic cover and deductibles work",
    },
  ] satisfies HiddenCostsLink[],
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
      label: "Financial checklist for expats",
      href: FINANCIAL_CHECKLIST_NETHERLANDS_PATH,
      description: "Cluster sibling",
    },
    {
      label: "Cost of living in the Netherlands",
      href: COST_OF_LIVING_NETHERLANDS_PATH,
      description: "Flagship national cost orientation",
    },
    {
      label: "Housing costs in the Netherlands",
      href: HOUSING_COSTS_NETHERLANDS_PATH,
      description: "Housing depth for deposits and rent",
    },
    {
      label: "Banking hub",
      href: BANKING_HUB_PATH,
      description: "Accounts and transfer orientation",
    },
  ] satisfies HiddenCostsLink[],
  exploreNext: [
    {
      label: "Financial checklist for expats",
      href: FINANCIAL_CHECKLIST_NETHERLANDS_PATH,
      description: "Order banking, insurance, budget and buffers next",
    },
    {
      label: "Cheapest cities for expats",
      href: CHEAPEST_CITIES_FOR_EXPATS_PATH,
      description: "Compare place-level stacks with surprise lines in mind",
    },
    {
      label: "Cost of living in the Netherlands",
      href: COST_OF_LIVING_NETHERLANDS_PATH,
      description: "Build the full monthly stack",
    },
    {
      label: "Housing costs in the Netherlands",
      href: HOUSING_COSTS_NETHERLANDS_PATH,
      description: "Deepen deposit and rent mechanics",
    },
    {
      label: "Monthly budget Netherlands",
      href: MONTHLY_BUDGET_NETHERLANDS_PATH,
      description: "Turn surprises into a month plan",
    },
    {
      label: "Moving checklist Netherlands",
      href: MOVING_CHECKLIST_PATH,
      description: "Logistics tasks beyond money surprises",
    },
  ] satisfies HiddenCostsLink[],
  officialSources: [
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Official orientation for living and practical matters",
    },
    {
      label: "Rijksoverheid — Health insurance",
      href: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering",
      description: "Official health-insurance orientation (Dutch)",
    },
    {
      label: "Belastingdienst",
      href: "https://www.belastingdienst.nl/",
      description: "Tax authority — distinguish income tax from local charges",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Consumer guidance on housing, insurance and banking costs",
    },
    {
      label: "AFM",
      href: "https://www.afm.nl/en",
      description: "Financial markets authority — consumer finance orientation",
    },
  ],
  disclosure:
    "Some links on this page may be affiliate or referral links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes deposits, premiums, taxes or FX rates.",
  lastUpdatedLabel: "Updated for 2026 orientation",
};

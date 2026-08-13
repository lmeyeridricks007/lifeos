import { CHEAPEST_CITIES_FOR_EXPATS_PATH } from "@/src/components/cities/cheapest-cities-for-expats/cheapestCitiesForExpatsPageModel";
import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import {
  CREDIT_CARDS_PATH,
  DEBIT_CARDS_PATH,
  HPW_FEES_PATH,
} from "@/src/components/money/cash-vs-card/cashVsCardPageModel";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import { OPEN_BANK_ACCOUNT_NETHERLANDS_PATH } from "@/src/components/money/open-bank-account-netherlands/openBankAccountNetherlandsPageModel";
import { TYPES_OF_BANK_ACCOUNTS_PATH } from "@/src/components/money/types-of-bank-accounts/typesOfBankAccountsPageModel";
import { UTILITIES_NETHERLANDS_PATH } from "@/src/components/utilities/utilitiesNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Flagship orientation guide — cost drivers, lifestyle/city bands, how to read numbers. */
export const COST_OF_LIVING_NETHERLANDS_PATH = "/netherlands/money/cost-of-living-netherlands/" as const;

/** Cluster siblings (built next in the Cost of living, budget & saving cluster). */
export const MONTHLY_BUDGET_NETHERLANDS_PATH = "/netherlands/money/monthly-budget-netherlands/" as const;
export const SAVING_MONEY_NETHERLANDS_PATH = "/netherlands/money/saving-money-netherlands/" as const;

export const MONEY_HUB_PATH = "/netherlands/money/" as const;
export const COST_OF_LIVING_CALCULATOR_PATH = "/netherlands/money/tools/cost-of-living-calculator/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const RENTING_NETHERLANDS_PATH = "/netherlands/renting-in-the-netherlands/" as const;
export const HEALTH_INSURANCE_NETHERLANDS_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const SHOPPING_GROCERIES_PATH = "/netherlands/living/shopping-groceries/" as const;
export const CHILDCARE_ALLOWANCE_PATH = "/netherlands/taxes/childcare-allowance-netherlands/" as const;

export type CostOfLivingLink = {
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
export type CityBandRow = { city: string; singleModest: string; coupleComfortable: string; note: string };
export type AffiliateBlockConfig = {
  placementId: string;
  analyticsPageContext: string;
  boundaryNote: string;
  categoryLinks: readonly { href: string; label: string }[];
  browseLabel?: string;
};

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "cost-of-living-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const costOfLivingNetherlandsPage = {
  slug: "cost-of-living-netherlands",
  path: COST_OF_LIVING_NETHERLANDS_PATH,
  hubPath: MONEY_HUB_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(COST_OF_LIVING_NETHERLANDS_PATH) ?? "2026-08-15",
  seo: {
    title: "Cost of Living in the Netherlands | Complete Guide for Expats",
    description:
      "What drives living costs in the Netherlands for expats in 2026: housing, insurance, groceries, transport and childcare — plus indicative city and lifestyle bands and how to read the numbers. Planning ranges only, not quotes.",
    keywords: [
      "cost of living Netherlands",
      "cost of living Netherlands 2026",
      "Netherlands living costs expats",
      "Amsterdam cost of living",
      "monthly expenses Netherlands",
      "expat budget Netherlands",
      "housing costs Netherlands",
      "cost of living calculator Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Money · Cost of living",
    pageTitle: "Cost of Living in the Netherlands",
    subtitle:
      "What actually drives Dutch living costs in 2026 — housing, insurance, groceries, transport and childcare — with indicative lifestyle and city bands, and a clear way to use the figures without treating them as quotes.",
    primaryCta: { label: "See the quick answer", href: "#quick-answer" },
    secondaryCta: { label: "Open the calculator", href: COST_OF_LIVING_CALCULATOR_PATH },
    chips: ["2026 planning bands", "Housing-led costs", "City & lifestyle", "How to read numbers", "Calculator link"],
    disclaimer:
      "General orientation only — not personal financial advice. Euro figures on this page are indicative 2026 planning ranges for newcomers, not quotes, guarantees or offers. Your rent, household size, city and lifestyle can move totals a lot. Confirm live prices with landlords, insurers, providers and your own budget.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic Amsterdam canal apartment desk: laptop open to a monthly cost overview, rent letter, groceries receipt and OV-chipkaart beside a coffee cup, soft Dutch daylight through a canal-house window.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#drivers", label: "Cost drivers" },
    { href: "#housing", label: "Housing" },
    { href: "#insurance", label: "Insurance" },
    { href: "#groceries", label: "Groceries" },
    { href: "#transport", label: "Transport" },
    { href: "#childcare", label: "Childcare" },
    { href: "#banking-setup", label: "Banking" },
    { href: "#city-bands", label: "City bands" },
    { href: "#how-to-read", label: "How to read" },
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
      "Premium orientation board titled Cost of Living in the Netherlands — four building blocks: know the big cost drivers, separate rent from everything else, pick a lifestyle band, then stress-test with the calculator — right-side Planning file rail lists rent first, insurance next, groceries and transport, and verify with net pay — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Four habits cover most cost-of-living questions: drivers first, rent reality, lifestyle band, then calculator check."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch living costs — rent leads, mandatory health insurance, groceries and dining, bike or OV, childcare if relevant, and city premium — Dutch canal skyline band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise what usually moves a Dutch monthly total."
    ),
    drivers: visual(
      "drivers",
      "Premium ecosystem diagram of Dutch cost drivers — housing at the centre, then insurance, groceries, transport, childcare and lifestyle — Planning ranges only rail, canal backdrop, ExpatLife brand footer.",
      "Housing usually dominates; insurance and groceries are steadier; lifestyle and city choice stretch the rest."
    ),
    housing: visual(
      "housing",
      "Premium housing-cost desk scene — rent letter, utilities folder, municipal taxes note and deposit checklist — Amsterdam apartment window light, ExpatLife brand area with compass and Live. Love. Stay.",
      "Treat rent + utilities + deposit as one housing stack before you compare cities."
    ),
    insurance: visual(
      "insurance",
      "Premium insurance costs board — basic health insurance premium band, deductible (eigen risico), optional extras, liability and household — Verify with insurers rail, ExpatLife brand footer.",
      "Dutch health insurance is mandatory for most residents — budget the premium and deductible separately from optional cover."
    ),
    groceries: visual(
      "groceries",
      "Premium groceries and everyday shopping board — supermarket basket bands, dining-out uplift, coffee culture — Dutch market street context and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Groceries are manageable; frequent dining out and imported brands push the lifestyle line up fast."
    ),
    transport: visual(
      "transport",
      "Premium transport costs map — bike-first cities, OV-chipkaart monthly bands, occasional car costs — canal and tram backdrop, ExpatLife brand footer.",
      "Many expats stay bike + OV; car ownership changes the monthly picture completely."
    ),
    childcare: visual(
      "childcare",
      "Premium childcare costs orientation — daycare hours, after-school care, allowance awareness — family desk scene and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Childcare can rival rent for dual-working parents — check registered care and allowance rules separately."
    ),
    cityBands: visual(
      "city-bands",
      "Premium city lifestyle bands board — Amsterdam premium, Rotterdam and The Hague mid-high, Utrecht tight, Eindhoven and secondary cities often softer — 2026 planning calendar, ExpatLife brand footer.",
      "City choice often matters more than supermarket brand choice for total monthly spend."
    ),
    howToRead: visual(
      "how-to-read",
      "Premium how-to-read-numbers board — planning range vs quote, gross vs net pay, one-off move-in cash, household size — General information only rail, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use bands as planning tools: compare like-for-like households and always re-check rent."
    ),
    calculator: visual(
      "calculator",
      "Premium calculator handoff board — this guide owns drivers and framing, the interactive tool owns estimates — laptop showing city and household toggles, ExpatLife brand footer.",
      "Use this page to understand drivers, then model your scenario in the cost-of-living calculator."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board — single newcomer in Amsterdam, couple outside Randstad core, family with daycare, student shared flat — each with a first cost check.",
      "Different household stories need different cost stacks — not one universal total."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands cost of living — ignoring rent reality, mixing gross with net, treating calculator output as a quote, forgetting move-in cash, skipping insurance — Fix tips on a right-side rail.",
      "Common planning friction and calmer fixes — orientation only."
    ),
    checklist: visual(
      "checklist",
      "Premium cost-of-living readiness checklist — rent band agreed, insurance line, groceries habit, transport mode, childcare if needed, net pay stress-test, calculator run — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist before you sign a lease or accept an offer — then verify live numbers."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "What this guide helps you do",
      items: [
        "See which Dutch costs usually dominate a monthly total",
        "Separate housing from insurance, groceries, transport and childcare",
        "Use indicative 2026 lifestyle and city bands as planning ranges",
        "Hand off to the calculator and sibling budget/saving guides",
      ],
    },
    snapshot: {
      title: "Snapshot takeaways",
      items: [
        "Rent usually leads the stack",
        "Health insurance is a fixed monthly line for most residents",
        "City and lifestyle stretch groceries and dining",
        "Childcare can rival rent when both parents work",
      ],
    },
    drivers: {
      title: "Driver checklist",
      items: [
        "Housing (rent, utilities, municipal charges)",
        "Mandatory and optional insurance",
        "Groceries and everyday shopping",
        "Transport mode and childcare if relevant",
      ],
    },
    housing: {
      title: "Housing stack",
      items: [
        "Monthly rent or mortgage service costs",
        "Energy, water, internet and service charges",
        "Deposit and first-month cash at move-in",
        "City premium is usually the biggest swing",
      ],
    },
    insurance: {
      title: "Insurance lines",
      items: [
        "Basic health insurance premium",
        "Eigen risico (deductible) buffer",
        "Optional dental / physio extras",
        "Liability and household where relevant",
      ],
    },
    groceries: {
      title: "Food & shopping",
      items: [
        "Supermarket basket for your household size",
        "Dining-out and coffee frequency",
        "Discount vs premium chains",
        "Link to shopping habits guide when useful",
      ],
    },
    transport: {
      title: "Getting around",
      items: [
        "Bike-first is common in many cities",
        "OV monthly spend for commute patterns",
        "Car ownership adds insurance, parking and fuel",
        "Employer mobility benefits can change the math",
      ],
    },
    childcare: {
      title: "Family cost awareness",
      items: [
        "Daycare and BSO hour rates vary widely",
        "Registered care matters for allowance pathways",
        "Two working parents often feel this line most",
        "Deep allowance detail lives on the tax guide",
      ],
    },
    cityBands: {
      title: "City framing",
      items: [
        "Amsterdam usually sits at the top for rent",
        "Other Randstad cities can still feel tight",
        "Secondary cities often soften housing first",
        "Compare like-for-like household sizes",
      ],
    },
    howToRead: {
      title: "Reading rules",
      items: [
        "Bands are planning ranges, not quotes",
        "Compare net pay to monthly outgoings",
        "Separate one-off move-in cash from monthly burn",
        "Re-run numbers when rent or household changes",
      ],
    },
    calculator: {
      title: "Calculator handoff",
      items: [
        "This page explains drivers and framing",
        "The tool models city and household estimates",
        "Monthly budget sibling owns the template workflow",
        "Saving sibling owns levers and habits",
      ],
    },
    scenarios: {
      title: "Scenario habits",
      items: [
        "Start with rent reality for your city",
        "Add insurance before lifestyle spend",
        "Stress-test against net salary",
        "Use the calculator for a second pass",
      ],
    },
    mistakes: {
      title: "Avoid these",
      items: [
        "Treating listicle averages as your rent",
        "Planning on gross salary alone",
        "Forgetting deposit and first-month cash",
        "Skipping mandatory insurance lines",
      ],
    },
    checklist: {
      title: "Before you commit",
      items: [
        "Housing band written down",
        "Insurance and deductible noted",
        "Transport mode chosen",
        "Calculator scenario saved",
      ],
    },
  },
  introParagraphs: [
    "Cost of living in the Netherlands is driven less by coffee prices and more by housing, mandatory health insurance, and how you get around. Expats who plan only on “average monthly spend” lists often miss deposit cash, eigen risico, or the jump from a shared flat to a family home.",
    "This guide is the orientation layer: what typically moves the total, how city and lifestyle bands differ, and how to read indicative 2026 euro figures without treating them as quotes. For interactive estimates, use the cost-of-living calculator. For a month-by-month template, use the monthly budget sibling. For cutting spend later, use the saving-money sibling.",
  ],
  introHighlights: [
    "Housing usually dominates — city choice matters more than supermarket brand",
    "Health insurance is a near-universal monthly line for residents",
    "Lifestyle (dining, travel, subscriptions) stretches bands quickly",
    "Figures here are planning ranges for 2026 — verify live prices",
  ],
  orientationFlowSteps: [
    "List the big drivers (rent first)",
    "Add insurance and fixed bills",
    "Pick a lifestyle / city band",
    "Stress-test with the calculator + net pay",
  ],
  safetyFileChecklist: [
    "Target city and household size written down",
    "Indicative rent band from real listings (not listicles)",
    "Health insurance premium + deductible buffer",
    "Utilities / internet rough line",
    "Transport mode (bike / OV / car)",
    "Childcare hours if both adults work",
    "Net salary estimate bookmarked",
    "Cost-of-living calculator scenario saved",
  ],
  introScenarios: [
    {
      situation: "Offer in hand, undecided city",
      approach: "Model rent first for two cities, then insurance and transport — keep lifestyle constant so the comparison is fair.",
      firstStep: "Open the calculator with the same household size in both cities.",
    },
    {
      situation: "Couple moving to a Randstad core",
      approach: "Expect housing to lead; decide early whether one salary must cover rent alone for a buffer month.",
      firstStep: "Write a housing stack: rent + utilities + deposit cash.",
    },
    {
      situation: "Family with daycare needs",
      approach: "Treat childcare as a primary driver beside rent — not a footnote after groceries.",
      firstStep: "Sketch weekly care hours, then read the childcare allowance orientation guide.",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Quick answer: what does cost of living mean here?",
    summary:
      "In the Netherlands, “cost of living” for expats usually means the monthly stack of housing, mandatory health insurance, groceries, transport and — when relevant — childcare, stretched by city and lifestyle. Indicative 2026 bands help you plan; they are not quotes.",
    bullets: [
      "Rent (and related housing costs) typically dominate the total.",
      "Basic health insurance is a fixed monthly line for most residents.",
      "Amsterdam and tight Randstad markets sit higher; secondary cities often soften housing first.",
      "Use the calculator for interactive estimates; use this page to understand drivers and how to read numbers.",
    ],
    note: "Always compare figures against your net pay and real rental listings — averages hide deposits, municipal charges and household size.",
  },
  snapshotSignals: [
    { label: "Housing", value: "Usually #1 driver", note: "City premium swings totals most" },
    { label: "Health insurance", value: "Fixed monthly line", note: "Premium + deductible buffer" },
    { label: "2026 figures", value: "Planning ranges", note: "Not quotes or guarantees" },
    { label: "Next step", value: "Calculator + net pay", note: "Stress-test before you sign" },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Housing leads",
      body: "Rent, utilities and move-in cash usually decide whether an offer feels workable — more than coffee or phone plans.",
    },
    {
      title: "Insurance is structural",
      body: "Most residents need basic health insurance. Budget the premium and keep a deductible buffer separate from optional extras.",
    },
    {
      title: "Lifestyle stretches bands",
      body: "Dining out, travel and subscriptions turn a modest band into a comfortable one quickly — especially in city centres.",
    },
    {
      title: "City choice matters",
      body: "The same household can look very different in Amsterdam versus a secondary city once rent is honest.",
    },
    {
      title: "Childcare can rival rent",
      body: "Dual-working parents often find daycare or BSO hours reshape the whole monthly picture.",
    },
    {
      title: "Tools finish the job",
      body: "This page frames drivers; the calculator estimates; the budget sibling templates a month; saving covers levers.",
    },
  ] satisfies TipCard[],
  drivers: {
    heading: "What drives living costs in the Netherlands",
    lead: "Think in stacks, not a single “average cost of living” number. Housing sits at the centre; insurance and groceries are steadier; transport, childcare and lifestyle stretch the edges.",
    bullets: [
      "Housing: rent or housing costs, utilities, internet, municipal charges, deposit",
      "Insurance: basic health premium, deductible buffer, optional extras, liability/household",
      "Groceries & everyday: supermarket basket, household goods, personal care",
      "Transport: bike, OV, occasional taxis, or full car ownership",
      "Childcare & family: daycare, BSO, school-related costs when relevant",
      "Lifestyle: dining, travel, sports, subscriptions, entertainment",
    ],
    cards: [
      {
        title: "Fixed vs flexible",
        body: "Rent and insurance behave like fixed lines once chosen. Groceries and dining are flexible — but habits stick.",
      },
      {
        title: "One-off vs monthly",
        body: "Deposits, agency fees and first furniture buys are cash events. Do not fold them into a “monthly average” without labelling them.",
      },
      {
        title: "Gross vs net",
        body: "Job offers are often discussed in gross. Your rent is paid from net. Stress-test with the net salary tools.",
      },
      {
        title: "Household size",
        body: "A single studio total is not half a family total. Always match household size when you compare bands.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cost of living calculator",
        href: COST_OF_LIVING_CALCULATOR_PATH,
        description: "Interactive city and household estimates",
        status: "live" as const,
      },
      {
        label: "Net salary Netherlands",
        href: NET_SALARY_NETHERLANDS_PATH,
        description: "Estimate take-home pay for stress-tests",
        status: "live" as const,
      },
      {
        label: "Monthly budget (sibling)",
        href: MONTHLY_BUDGET_NETHERLANDS_PATH,
        description: "Category template and planning workflow",
        status: "live" as const,
      },
    ] satisfies CostOfLivingLink[],
  },
  housing: {
    heading: "Housing & utilities — the usual leader",
    lead: "For most newcomers, housing decides the monthly story. Treat rent, utilities and move-in cash as one stack. City choice and housing type (studio, shared, family flat) matter more than small grocery savings.",
    bullets: [
      "Use real listings for your target neighbourhood — not national averages alone",
      "Ask what is included: service costs, heating, water, internet",
      "Plan deposit + first month (and any agency fees) as separate cash",
      "Utilities vary by insulation, contract and household size — see the utilities guide",
    ],
    indicativeRows: [
      {
        setting: "Shared room / student-style (secondary city)",
        band: "Often roughly €450–€800 / month rent (planning)",
        tip: "Availability and contracts vary widely — verify listings.",
      },
      {
        setting: "Studio / 1-bed (many cities outside Amsterdam core)",
        band: "Often roughly €950–€1,600 / month rent (planning)",
        tip: "Furniture, energy and service costs may sit on top.",
      },
      {
        setting: "1–2 bed in Amsterdam / prime Randstad",
        band: "Often roughly €1,600–€2,800+ / month rent (planning)",
        tip: "Competition is high; buffer for viewings and deposits.",
      },
      {
        setting: "Utilities + internet (typical household)",
        band: "Often roughly €150–€280 / month combined (planning)",
        tip: "Energy contracts and insulation swing this hard.",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Rent reality check",
        body: "If the rent line already consumes most of net pay, lifestyle cuts rarely fix the plan — revisit city, household or offer.",
      },
      {
        title: "Utilities are not free",
        body: "“All-in” marketing can still exclude internet, municipal taxes or final energy settlements.",
      },
      {
        title: "Move-in cash",
        body: "Deposit plus first month can equal two or three rents before you buy a mattress. Label it as cash, not monthly burn.",
      },
    ] satisfies TipCard[],
    warningItems: [
      "National averages hide Amsterdam and family-home premiums",
      "Short-stay and hotel-style rents are not comparable to long-let bands",
      "Always confirm what the landlord includes before you model utilities",
    ],
    crossLinks: [
      {
        label: "Renting in the Netherlands",
        href: RENTING_NETHERLANDS_PATH,
        description: "Search, contracts and tenant orientation",
        status: "live" as const,
      },
      {
        label: "Utilities Netherlands",
        href: UTILITIES_NETHERLANDS_PATH,
        description: "Energy, water, internet setup",
        status: "live" as const,
      },
      {
        label: "Rent affordability calculator",
        href: "/netherlands/housing/tools/rent-affordability-calculator/",
        description: "Stress-test rent against income",
        status: "live" as const,
      },
    ] satisfies CostOfLivingLink[],
    affiliateBlock: {
      placementId: "nl-money-col-housing-providers",
      analyticsPageContext: "col-netherlands-housing-providers",
      boundaryNote:
        "Editorial housing bands above are separate from these listing CTAs. Soft discovery only — confirm rent, deposit and fees on each platform yourself.",
      categoryLinks: [
        { href: "/netherlands/services/housing-platforms/", label: "Housing platforms hub" },
        { href: RENTING_NETHERLANDS_PATH, label: "Renting guide" },
        { href: UTILITIES_NETHERLANDS_PATH, label: "Utilities" },
      ],
      browseLabel: "More housing context: ",
    } satisfies AffiliateBlockConfig,
  },
  insurance: {
    heading: "Insurance costs you should expect",
    lead: "Most residents need basic Dutch health insurance. Budget the monthly premium and keep a separate buffer for the mandatory deductible (eigen risico). Optional dental, physio extras, liability and household cover sit on top.",
    bullets: [
      "Basic health insurance is structural — not a lifestyle optional",
      "Premiums differ by insurer and policy choices — verify annually",
      "Eigen risico can create a cash spike if you use care early in the year",
      "Liability (aansprakelijkheid) is common; household cover depends on your rental situation",
    ],
    indicativeRows: [
      {
        setting: "Basic health insurance premium (adult)",
        band: "Often roughly €140–€170 / month (2026 planning)",
        tip: "Compare policies on official comparison routes — not rankings on this page.",
      },
      {
        setting: "Eigen risico buffer",
        band: "Up to the annual mandatory deductible (commonly discussed around €385)",
        tip: "Treat as a cash buffer, not a monthly average unless you spread it deliberately.",
      },
      {
        setting: "Optional extras + liability (light)",
        band: "Often roughly €15–€50+ / month depending on cover",
        tip: "Extras are personal — dental and physio needs vary.",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Premium vs deductible",
        body: "A slightly cheaper premium with the same deductible still leaves you exposed to care costs — plan both lines.",
      },
      {
        title: "Allowances",
        body: "Some households may qualify for healthcare allowance (zorgtoeslag) — that is a separate tax/benefit pathway, not a reason to skip insurance.",
      },
      {
        title: "Not a ranking page",
        body: "This guide does not recommend insurers. Use the health insurance guides and official sources to compare.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Health insurance Netherlands",
        href: HEALTH_INSURANCE_NETHERLANDS_PATH,
        description: "How Dutch basic cover works",
        status: "live" as const,
      },
      {
        label: "Healthcare allowance",
        href: "/netherlands/taxes/healthcare-allowance-netherlands/",
        description: "Zorgtoeslag orientation",
        status: "live" as const,
      },
      {
        label: "Money insurance section",
        href: "/netherlands/money/insurance",
        description: "Broader insurance topics in Money",
        status: "live" as const,
      },
    ] satisfies CostOfLivingLink[],
    affiliateBlock: {
      placementId: "nl-money-col-insurance-providers",
      analyticsPageContext: "col-netherlands-insurance-providers",
      boundaryNote:
        "This guide does not rank insurers. Compare basic health cover and household bills on official sites — verify premiums, deductibles and contract terms yourself.",
      categoryLinks: [
        { href: HEALTH_INSURANCE_NETHERLANDS_PATH, label: "Health insurance guide" },
        { href: "/netherlands/services/health-insurance/", label: "Health insurance directory" },
        { href: UTILITIES_NETHERLANDS_PATH, label: "Utilities" },
      ],
      browseLabel: "More insurance & bills context: ",
    } satisfies AffiliateBlockConfig,
  },
  groceries: {
    heading: "Groceries & everyday shopping",
    lead: "Dutch supermarket costs are usually manageable compared with rent. What stretches the food line is dining out, specialty imports and convenience habits — not whether you occasionally buy coffee.",
    bullets: [
      "Discount chains vs premium supermarkets change the basket noticeably",
      "Cooking at home keeps bands stable; frequent restaurants do not",
      "Household size scales food faster than transport for many singles",
      "See the shopping & groceries living guide for everyday habits",
    ],
    indicativeRows: [
      {
        setting: "Single — mostly home cooking",
        band: "Often roughly €200–€320 / month (planning)",
        tip: "Alcohol, specialty diets and waste habits move this.",
      },
      {
        setting: "Couple — mixed home cooking",
        band: "Often roughly €350–€550 / month (planning)",
        tip: "Shared bulk buys help; dining out is separate.",
      },
      {
        setting: "Dining out / cafés uplift",
        band: "Easily +€100–€400+ / month depending on habit",
        tip: "Track two weeks of receipts before you set a lifestyle band.",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Basket vs lifestyle",
        body: "A solid supermarket basket is predictable. Weekend brunch culture is a lifestyle choice — label it that way in your plan.",
      },
      {
        title: "Import habits",
        body: "Favourite home-country brands and specialty shops can quietly add tens of euros a week.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        description: "Everyday shopping orientation",
        status: "live" as const,
      },
      {
        label: "Saving money (sibling)",
        href: SAVING_MONEY_NETHERLANDS_PATH,
        description: "Levers and habits after you know your drivers",
        status: "live" as const,
      },
    ] satisfies CostOfLivingLink[],
    affiliateBlock: {
      placementId: "nl-money-col-groceries-providers",
      analyticsPageContext: "col-netherlands-groceries-providers",
      boundaryNote:
        "Food prices move weekly. Use these soft CTAs to model supermarket, delivery and meal-kit habits — not as a fixed monthly quote.",
      categoryLinks: [
        { href: SHOPPING_GROCERIES_PATH, label: "Shopping & groceries" },
        { href: SAVING_MONEY_NETHERLANDS_PATH, label: "Saving money" },
        { href: MONTHLY_BUDGET_NETHERLANDS_PATH, label: "Monthly budget" },
      ],
      browseLabel: "More food & budget context: ",
    } satisfies AffiliateBlockConfig,
  },
  transport: {
    heading: "Transport — bike, OV or car",
    lead: "Many expats in Dutch cities live bike-first with occasional trains and buses. That keeps monthly transport modest. Owning a car (insurance, parking, fuel, maintenance) is a different cost-of-living tier.",
    bullets: [
      "Budget bike purchase/maintenance separately from monthly OV",
      "Commute patterns matter more than tourist day tickets",
      "Employer mobility benefits can change the math — ask HR",
      "Car ownership is rarely “just petrol” in city centres",
    ],
    indicativeRows: [
      {
        setting: "Bike-first + occasional OV (city)",
        band: "Often roughly €30–€120 / month (planning)",
        tip: "Plus a one-off decent bike if you do not have one.",
      },
      {
        setting: "Regular OV commute (no car)",
        band: "Often roughly €80–€220 / month (planning)",
        tip: "Season tickets and employer cards change this.",
      },
      {
        setting: "Car ownership (city-adjacent)",
        band: "Often roughly €250–€500+ / month all-in (planning)",
        tip: "Insurance, parking, fuel, maintenance, tax — verify locally.",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Mode lock-in",
        body: "Once you choose car-based living, renting farther out can look cheaper until parking and time costs appear.",
      },
      {
        title: "Work location",
        body: "A hybrid office pattern can cut OV dramatically — remodel when your schedule is clear.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Banking fees & costs",
        href: HPW_FEES_PATH,
        description: "Card and account costs beside everyday spend",
        status: "live" as const,
      },
      {
        label: "Debit cards",
        href: DEBIT_CARDS_PATH,
        description: "PIN-first payment culture for daily spend",
        status: "live" as const,
      },
    ] satisfies CostOfLivingLink[],
    affiliateBlock: {
      placementId: "nl-money-col-transport-providers",
      analyticsPageContext: "col-netherlands-transport-providers",
      boundaryNote:
        "Bike-first living stays modest until you add a car. Soft CTAs for subscription bikes, trains and car-sharing — confirm live membership prices yourself.",
      categoryLinks: [
        { href: "/netherlands/living/getting-around/", label: "Getting around" },
        { href: DEBIT_CARDS_PATH, label: "Debit cards" },
        { href: HPW_FEES_PATH, label: "Banking fees" },
      ],
      browseLabel: "More mobility & payments context: ",
    } satisfies AffiliateBlockConfig,
  },
  childcare: {
    heading: "Childcare & family cost awareness",
    lead: "If you need daycare or after-school care (BSO), treat it as a primary driver. Hourly rates and weekly hours can push family totals near or above the rent line — especially before any allowance is applied.",
    bullets: [
      "Registered childcare matters for allowance pathways",
      "Hours × rate is the planning unit — not a vague “kids are expensive”",
      "School-age BSO patterns differ from full-time daycare",
      "Deep toeslag detail lives on the childcare allowance guide",
    ],
    indicativeRows: [
      {
        setting: "Part-time daycare (illustrative)",
        band: "Can run hundreds of euros per month before allowance",
        tip: "Get a written hours quote from a registered provider.",
      },
      {
        setting: "Full-time daycare for one child (illustrative)",
        band: "Can approach or exceed a modest rent line before allowance",
        tip: "Model with and without expected allowance — never assume approval.",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Two incomes, one care bill",
        body: "Dual careers often make childcare non-optional. Put it beside rent in your first draft, not under “misc”.",
      },
      {
        title: "Allowance is separate",
        body: "Kinderopvangtoeslag has rules. This page flags the cost driver; the tax guide covers the benefit pathway.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Childcare allowance",
        href: CHILDCARE_ALLOWANCE_PATH,
        description: "Kinderopvangtoeslag orientation",
        status: "live" as const,
      },
      {
        label: "Monthly budget (sibling)",
        href: MONTHLY_BUDGET_NETHERLANDS_PATH,
        description: "Template a family month with care hours",
        status: "live" as const,
      },
    ] satisfies CostOfLivingLink[],
    affiliateBlock: {
      placementId: "nl-money-col-childcare-providers",
      analyticsPageContext: "col-netherlands-childcare-providers",
      boundaryNote:
        "Childcare places and toeslag rules change. Soft CTAs for daycare discovery and flexible sitting — put care hours beside rent, then verify eligibility yourself.",
      categoryLinks: [
        { href: CHILDCARE_ALLOWANCE_PATH, label: "Childcare allowance" },
        { href: MONTHLY_BUDGET_NETHERLANDS_PATH, label: "Monthly budget" },
        { href: "/netherlands/family/tools/childcare-cost-estimator/", label: "Childcare cost estimator" },
      ],
      browseLabel: "More family cost context: ",
    } satisfies AffiliateBlockConfig,
  },
  bankingSetup: {
    heading: "Banking setup under your monthly stack",
    lead: "Rent, insurance and childcare direct debits need a workable euro account. Soft CTAs only — confirm fees, onboarding and eligibility on each bank’s site.",
    affiliateBlock: {
      placementId: "nl-money-col-banking-providers",
      analyticsPageContext: "col-netherlands-banking-providers",
      boundaryNote:
        "Cost-of-living planning assumes you can pay landlords and insurers. This block is outside the editorial bands above — not a bank ranking.",
      categoryLinks: [
        { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
        { href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH, label: "Open a bank account" },
        { href: CHEAPEST_BANK_ACCOUNTS_PATH, label: "Cheapest accounts" },
        { href: BANKING_HUB_PATH, label: "Banking hub" },
      ],
      browseLabel: "More banking context: ",
    } satisfies AffiliateBlockConfig,
  },
  cityBands: {
    heading: "City & lifestyle bands (indicative 2026)",
    lead: "These bands are planning frames for newcomers — not quotes. They assume rent is the main swing factor. “Modest” means careful dining and bike/OV; “comfortable” allows more eating out and flexibility. Always re-check with live listings and the calculator.",
    bullets: [
      "Compare the same household size across cities",
      "Amsterdam usually leads on rent; other Randstad cities can still feel tight",
      "Secondary cities often soften housing first",
      "Lifestyle choice can outweigh a small city discount",
    ],
    rows: [
      {
        city: "Amsterdam",
        singleModest: "Often roughly €2,200–€3,000+ / mo",
        coupleComfortable: "Often roughly €3,800–€5,500+ / mo",
        note: "Rent-led premium; verify listings neighbourhood by neighbourhood.",
      },
      {
        city: "Rotterdam / The Hague",
        singleModest: "Often roughly €1,900–€2,700 / mo",
        coupleComfortable: "Often roughly €3,300–€4,800 / mo",
        note: "Still housing-sensitive; pockets vary widely.",
      },
      {
        city: "Utrecht",
        singleModest: "Often roughly €2,000–€2,800 / mo",
        coupleComfortable: "Often roughly €3,500–€5,000 / mo",
        note: "Tight market; commute trade-offs vs Amsterdam common.",
      },
      {
        city: "Eindhoven & many secondary cities",
        singleModest: "Often roughly €1,700–€2,400 / mo",
        coupleComfortable: "Often roughly €2,900–€4,200 / mo",
        note: "Housing often softer; confirm tech-hub demand locally.",
      },
    ] satisfies CityBandRow[],
    cards: [
      {
        title: "Modest vs comfortable",
        body: "The gap is mostly dining, travel and housing quality — not whether you buy store-brand pasta.",
      },
      {
        title: "Family uplift",
        body: "Add a clear childcare and larger-home line before you reuse a couple band for a family plan.",
      },
      {
        title: "Do not average blindly",
        body: "A national “Netherlands average” hides both Amsterdam studios and quieter provincial rents.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cost of living calculator",
        href: COST_OF_LIVING_CALCULATOR_PATH,
        description: "Toggle city and household for estimates",
        status: "live" as const,
      },
      {
        label: "Net salary Netherlands",
        href: NET_SALARY_NETHERLANDS_PATH,
        description: "Check take-home against your band",
        status: "live" as const,
      },
    ] satisfies CostOfLivingLink[],
  },
  howToRead: {
    heading: "How to use these figures",
    lead: "Indicative bands help you plan relocation and offers. They fail when you treat them as invoices, mix gross with net, or compare unlike households. Use the rules below before you make a lease or salary decision.",
    bullets: [
      "Label every figure as planning range, quote or personal actual",
      "Match household size, city and housing type when comparing",
      "Separate monthly burn from move-in cash",
      "Re-run when rent, care hours or commute changes",
    ],
    cards: [
      {
        title: "Planning range",
        body: "A band like “often roughly €X–€Y” is for orientation. It is not a landlord quote or insurer offer.",
      },
      {
        title: "Net-pay stress test",
        body: "If rent + insurance + basics already exceed a safe share of net pay, lifestyle optimism will not rescue the plan.",
      },
      {
        title: "One-off cash",
        body: "Deposits, flights, furniture and agency fees belong on a separate arrival cash list.",
      },
      {
        title: "Sibling handoff",
        body: "Monthly budget owns the category template; saving money owns levers; the calculator owns interactive estimates.",
      },
    ] satisfies TipCard[],
    steps: [
      { phase: "1", title: "Write your household assumptions", detail: "City, adults, children, work pattern, transport mode." },
      { phase: "2", title: "Lock a housing stack", detail: "Rent from real listings + utilities + deposit cash." },
      { phase: "3", title: "Add structural lines", detail: "Health insurance premium, deductible buffer, transport." },
      { phase: "4", title: "Choose a lifestyle band", detail: "Modest vs comfortable dining and subscriptions — be honest." },
      { phase: "5", title: "Stress-test", detail: "Compare to net pay and run the cost-of-living calculator." },
    ],
    crossLinks: [
      {
        label: "Monthly budget (sibling)",
        href: MONTHLY_BUDGET_NETHERLANDS_PATH,
        description: "Turn bands into a month template",
        status: "live" as const,
      },
      {
        label: "Saving money (sibling)",
        href: SAVING_MONEY_NETHERLANDS_PATH,
        description: "Levers once the picture is clear",
        status: "live" as const,
      },
    ] satisfies CostOfLivingLink[],
  },
  calculator: {
    heading: "Use the cost-of-living calculator",
    lead: "This cornerstone explains drivers and how to read numbers. The interactive calculator is where you model city, household and category estimates. Cross-link heavily — do not treat either page as a substitute for the other.",
    bullets: [
      "Run at least two cities with the same household assumptions",
      "Adjust housing until it matches real listings you would actually accept",
      "Export or note the scenario before salary negotiations",
      "Return here when you need to interpret what moved the total",
    ],
    cards: [
      {
        title: "Guide vs tool",
        body: "Guide = meaning and framing. Tool = interactive estimates. Budget sibling = monthly template. Saving sibling = levers.",
      },
      {
        title: "Offer negotiation",
        body: "Bring a calculator scenario and a rent listing printout — more persuasive than a vague “Amsterdam is expensive”.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Open cost of living calculator",
        href: COST_OF_LIVING_CALCULATOR_PATH,
        description: "Interactive monthly bands by city and household",
        status: "live" as const,
      },
      {
        label: "Net salary Netherlands",
        href: NET_SALARY_NETHERLANDS_PATH,
        description: "Pair estimates with take-home pay",
        status: "live" as const,
      },
      {
        label: "Money hub",
        href: MONEY_HUB_PATH,
        description: "All money guides and tools",
        status: "live" as const,
      },
    ] satisfies CostOfLivingLink[],
  },
  scenarios: {
    heading: "Example scenarios (orientation)",
    lead: "These stories show how drivers combine — not personalised advice. Replace the numbers with your listings and calculator output.",
    rows: [
      {
        situation: "Single professional, Amsterdam offer",
        approach: "Rent leads; keep lifestyle modest until the lease is signed and a buffer month exists.",
        firstStep: "Shortlist three realistic listings and run the calculator on that rent.",
      },
      {
        situation: "Couple, Eindhoven or secondary city",
        approach: "Housing may soften; watch whether a car sneaks into the plan and rebuild transport honestly.",
        firstStep: "Compare bike/OV vs car all-in before choosing a neighbourhood.",
      },
      {
        situation: "Family, dual careers, daycare",
        approach: "Put childcare beside rent in draft one; check allowance pathways separately.",
        firstStep: "Get a hours quote from registered care, then open the childcare allowance guide.",
      },
      {
        situation: "Student / shared housing",
        approach: "Lower rent can still surprise you with insurance and OV — do not skip structural lines.",
        firstStep: "Confirm what the huis includes, then add health insurance and a basic food band.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: {
    heading: "Common planning mistakes",
    cards: [
      {
        title: "Believing a single national average",
        body: "Netherlands-wide averages hide Amsterdam rents and quieter provincial markets.",
        advice: "Always pin a city and housing type before you quote a total.",
      },
      {
        title: "Planning on gross salary",
        body: "Rent is paid from net. Gross-looking offers can still feel tight after payroll.",
        advice: "Run net salary tools beside the cost calculator.",
      },
      {
        title: "Treating calculator output as a quote",
        body: "Tools estimate. Landlords and insurers set real prices.",
        advice: "Label outputs as planning ranges and verify live sources.",
      },
      {
        title: "Forgetting move-in cash",
        body: "Deposit and first month can stall a move even when monthly burn looks fine.",
        advice: "Keep a separate arrival cash checklist.",
      },
      {
        title: "Skipping insurance lines",
        body: "Health insurance is structural for most residents — not a nice-to-have.",
        advice: "Add premium + deductible buffer before lifestyle spend.",
      },
      {
        title: "Mixing this page with budget or saving",
        body: "This guide owns drivers and framing. Templates and levers live on siblings.",
        advice: "Use monthly budget for the template; saving money for cut levers.",
      },
    ] satisfies MistakeCard[],
  },
  checklist: {
    heading: "Cost-of-living readiness checklist",
    lead: "Use this before you sign a lease or accept an offer. Then verify live numbers with listings, insurers and the calculator.",
    items: [
      "Target city + household size written down",
      "Realistic rent band from current listings",
      "Utilities / internet assumption noted",
      "Deposit + first-month cash listed separately",
      "Health insurance premium + deductible buffer",
      "Transport mode chosen (bike / OV / car)",
      "Childcare hours quoted if needed",
      "Lifestyle band labelled (modest / comfortable)",
      "Net pay estimate completed",
      "Calculator scenario saved for the same assumptions",
      "Monthly budget sibling bookmarked for the template",
      "Banking setup path noted (account + cards for rent)",
    ],
  },
  howTo: {
    heading: "How to build a first cost-of-living picture",
    lead: "A calm sequence beats downloading five unrelated listicles. Follow these steps, then refine with real quotes.",
    steps: [
      {
        name: "Define the household",
        text: "Write city, number of adults and children, and whether you need parking or daycare.",
      },
      {
        name: "Collect a housing stack",
        text: "Pick three realistic listings and note rent, what is included, and deposit cash required.",
      },
      {
        name: "Add structural monthly lines",
        text: "Health insurance premium, deductible buffer, utilities/internet, and transport mode costs.",
      },
      {
        name: "Choose a lifestyle band",
        text: "Be honest about dining out, travel and subscriptions — label modest vs comfortable.",
      },
      {
        name: "Stress-test with tools",
        text: "Compare the total to net pay and run the cost-of-living calculator with the same assumptions.",
      },
      {
        name: "Hand off to siblings",
        text: "Use the monthly budget guide for a category template; use saving money when you are ready to cut.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to estimate cost of living in the Netherlands",
    description:
      "Orientation steps for expats: define household assumptions, build a housing stack, add insurance and transport, choose a lifestyle band, then stress-test with net pay and the cost-of-living calculator.",
    anchor: "#howto",
  },
  bankingLinks: {
    heading: "Banking & money plumbing nearby",
    lead: "You will need a Dutch payment setup for rent and bills. These guides sit beside cost-of-living planning — they do not replace it.",
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
        label: "Types of bank accounts",
        href: TYPES_OF_BANK_ACCOUNTS_PATH,
        description: "Everyday, joint, student, business map",
        status: "live" as const,
      },
      {
        label: "Debit cards",
        href: DEBIT_CARDS_PATH,
        description: "PIN-first everyday spend",
        status: "live" as const,
      },
      {
        label: "Credit cards",
        href: CREDIT_CARDS_PATH,
        description: "When credit helps deposits and travel",
        status: "live" as const,
      },
      {
        label: "Best banks for expats",
        href: BEST_BANKS_EXPATS_PATH,
        description: "Shortlist orientation — verify official sites",
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
    ] satisfies CostOfLivingLink[],
  },
  faq: [
    {
      q: "What is the cost of living in the Netherlands in 2026?",
      a: "There is no single number. For many expats the total is led by housing, then health insurance, groceries, transport and — when relevant — childcare. Indicative city and lifestyle bands on this page are 2026 planning ranges, not quotes. Use the calculator for interactive estimates.",
    },
    {
      q: "Is Amsterdam much more expensive?",
      a: "Often yes on rent, which usually dominates the monthly stack. Other costs (insurance, groceries) differ less than housing. Always compare like-for-like household sizes and real listings.",
    },
    {
      q: "How should I use these euro bands?",
      a: "Treat them as planning ranges. Match city, household and housing type, separate move-in cash from monthly burn, and stress-test against net pay. Verify live prices with landlords and providers.",
    },
    {
      q: "Does this replace the cost-of-living calculator?",
      a: "No. This page owns drivers, lifestyle/city framing and how to read numbers. The calculator owns interactive estimates. Use both.",
    },
    {
      q: "Where do monthly budgets and saving tips live?",
      a: "Monthly budget for expats owns the category template and example month. Saving money in the Netherlands owns levers and habits. This page stays on drivers and framing.",
    },
    {
      q: "What about health insurance costs?",
      a: "Most residents need basic health insurance. Budget the monthly premium and a deductible (eigen risico) buffer. See the health insurance guides for how cover works — this page only places insurance in the cost stack.",
    },
    {
      q: "How does childcare affect cost of living?",
      a: "Daycare or BSO hours can rival rent for dual-working parents. Get a hours quote, then read the childcare allowance guide for benefit pathways. Do not assume allowance approval in your first draft.",
    },
    {
      q: "Should I plan on gross or net salary?",
      a: "Plan outgoings against net. Use the net salary Netherlands tools to estimate take-home, then compare to your housing-led stack.",
    },
    {
      q: "Is this financial advice?",
      a: "No. This is general orientation for newcomers. Figures are indicative planning ranges. Confirm details with providers and seek qualified advice when your situation is complex.",
    },
  ],
  relatedGuides: [
    {
      label: "Monthly budget for expats",
      href: MONTHLY_BUDGET_NETHERLANDS_PATH,
      description: "Category template + planning workflow — cluster sibling",
      status: "live" as const,
    },
    {
      label: "Saving money in the Netherlands",
      href: SAVING_MONEY_NETHERLANDS_PATH,
      description: "Levers and habits — cluster sibling",
      status: "live" as const,
    },
    {
      label: "Cheapest cities for expats",
      href: CHEAPEST_CITIES_FOR_EXPATS_PATH,
      description: "Affordability shortlist and city trade-offs — Cities pillar",
      status: "live" as const,
    },
    {
      label: "Hidden costs of living",
      href: "/netherlands/money/hidden-costs-netherlands/",
      description: "Newcomer surprise lines beyond headline rent",
      status: "live" as const,
    },
    {
      label: "Financial checklist for expats",
      href: "/netherlands/money/financial-checklist-netherlands/",
      description: "Ordered money setup for the first 30/90 days",
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
      description: "Take-home pay stress-tests",
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
  ] satisfies CostOfLivingLink[],
  hubCards: [
    {
      label: "Money hub",
      href: MONEY_HUB_PATH,
      description: "Banking, taxes, insurance and everyday money",
      status: "live" as const,
    },
    {
      label: "Cost of living calculator",
      href: COST_OF_LIVING_CALCULATOR_PATH,
      description: "Interactive monthly estimates",
      status: "live" as const,
    },
    {
      label: "Monthly budget (sibling)",
      href: MONTHLY_BUDGET_NETHERLANDS_PATH,
      description: "Template your month next",
      status: "live" as const,
    },
    {
      label: "Saving money (sibling)",
      href: SAVING_MONEY_NETHERLANDS_PATH,
      description: "Cut levers after you know the drivers",
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
      description: "Pair costs with take-home pay",
      status: "live" as const,
    },
  ] satisfies CostOfLivingLink[],
  exploreNext: [
    {
      label: "Cost of living calculator",
      href: COST_OF_LIVING_CALCULATOR_PATH,
      description: "Model your city and household",
      status: "live" as const,
    },
    {
      label: "Monthly budget for expats",
      href: MONTHLY_BUDGET_NETHERLANDS_PATH,
      description: "Build a category template",
      status: "live" as const,
    },
    {
      label: "Saving money in the Netherlands",
      href: SAVING_MONEY_NETHERLANDS_PATH,
      description: "Find practical cut levers",
      status: "live" as const,
    },
    {
      label: "Cheapest cities for expats",
      href: CHEAPEST_CITIES_FOR_EXPATS_PATH,
      description: "Affordability shortlist and city trade-offs",
      status: "live" as const,
    },
    {
      label: "Hidden costs of living",
      href: "/netherlands/money/hidden-costs-netherlands/",
      description: "Size newcomer surprise lines",
      status: "live" as const,
    },
    {
      label: "Financial checklist for expats",
      href: "/netherlands/money/financial-checklist-netherlands/",
      description: "Order money setup for 30/90 days",
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
      description: "Ground your housing stack",
      status: "live" as const,
    },
    {
      label: "Open a bank account",
      href: OPEN_BANK_ACCOUNT_NETHERLANDS_PATH,
      description: "Set up payment plumbing",
      status: "live" as const,
    },
  ] satisfies CostOfLivingLink[],
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
      label: "CBS — Prices",
      href: "https://www.cbs.nl/en-gb",
      description: "Statistics Netherlands — price and household statistics context",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Consumer association guidance — verify current cost-of-living and insurance articles",
    },
  ],
  disclosure:
    "Some links on this page may be affiliate or referral links. If you use them, we may earn a commission at no extra cost to you. Affiliate status never changes prices, eligibility or your personal budget reality. All euro bands are indicative planning ranges for 2026 orientation only.",
} as const;

export type CostOfLivingNetherlandsPage = typeof costOfLivingNetherlandsPage;

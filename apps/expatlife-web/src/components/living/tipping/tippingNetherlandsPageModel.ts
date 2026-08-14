import {
  ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
  BEST_SUPERMARKETS_NETHERLANDS_PATH,
  CHEAP_GROCERIES_NETHERLANDS_PATH,
  DUTCH_SUPERMARKETS_PATH,
  FOOD_DELIVERY_NETHERLANDS_PATH,
  INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
  INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_PILLAR_ROOT_PATH,
  LIVING_SHOPPING_GROCERIES_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
  MEAL_KITS_NETHERLANDS_PATH,
  RESTAURANTS_NETHERLANDS_PATH,
  SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
  TIPPING_NETHERLANDS_PATH,
  TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
} from "@/src/components/living/livingPillarContent";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export {
  ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
  BEST_SUPERMARKETS_NETHERLANDS_PATH,
  CHEAP_GROCERIES_NETHERLANDS_PATH,
  DUTCH_SUPERMARKETS_PATH,
  FOOD_DELIVERY_NETHERLANDS_PATH,
  INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
  INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
  MEAL_KITS_NETHERLANDS_PATH,
  RESTAURANTS_NETHERLANDS_PATH,
  SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
  TIPPING_NETHERLANDS_PATH,
  TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
};

export const LIVING_HUB_PATH = LIVING_PILLAR_ROOT_PATH;
export const SHOPPING_GROCERIES_PATH = LIVING_SHOPPING_GROCERIES_PATH;
export const PAYMENTS_BASICS_PATH = "/netherlands/living/payments/" as const;
export const CASH_VS_CARD_PATH = "/netherlands/money/banking/cash-vs-card/" as const;
export const COST_OF_LIVING_PATH = "/netherlands/money/cost-of-living-netherlands/" as const;
export const SAVING_MONEY_PATH = "/netherlands/money/saving-money-netherlands/" as const;

export type GuideLink = {
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
export type TacticRow = { lever: string; whatItMeans: string; tip: string };
export type DecisionRow = { situation: string; useThis: string; why: string; watchOut: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "tipping-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const tippingNetherlandsPage = {
  slug: "tipping-netherlands",
  path: TIPPING_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: SHOPPING_GROCERIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(TIPPING_NETHERLANDS_PATH) ?? "2026-09-30",
  seo: {
    title: "Tipping in the Netherlands | Etiquette Guide for Expats",
    description:
      "How tipping works in the Netherlands for expats — restaurant and café norms, round-ups, delivery-app tip prompts, light notes for taxis and hairdressers, and how Dutch expectations differ from the US. Not a tip-app ranking.",
    keywords: [
      "tipping Netherlands",
      "tipping in the Netherlands",
      "Dutch tipping etiquette",
      "restaurant tipping Netherlands",
      "do you tip in Netherlands",
      "café tip Netherlands",
      "food delivery tipping Netherlands",
      "taxi tip Netherlands",
      "hairdresser tip Netherlands",
      "service charge Netherlands",
      "expat tipping Netherlands",
      "how much to tip Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Food & groceries",
    pageTitle: "Tipping in the Netherlands",
    subtitle:
      "Practical orientation for Dutch tipping etiquette — restaurants, cafés, delivery apps and everyday service — usually more modest than US expectations, and not a ranked “best tip app” list.",
    primaryCta: { label: "See tipping levers", href: "#culture" },
    secondaryCta: { label: "Open Restaurants", href: RESTAURANTS_NETHERLANDS_PATH },
    chips: ["Culture baseline", "Restaurants & cafés", "How much", "How to tip", "Delivery apps", "Everyday service"],
    disclaimer:
      "General orientation only — not financial, hospitality or employment advice and not a ranking of tip apps, restaurants or cities. Tip prompts, service charges and payment habits change. Verify current terms with each venue or app. Soft provider links below are optional cook-at-home modelling tools for non-tip nights, not “best tip” winners. Some outbound links may be affiliate or referral links. Sit-down dining culture lives on Restaurants; takeaway apps live on Food delivery; payments depth lives on Payments and Cash vs card.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch café table evening: newcomers reviewing a modest tip note beside a contactless payment terminal and itemised receipt, soft canal light through a window, welcoming practical mood without fake tip-app logos, star ratings or award badges.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#culture", label: "Culture baseline" },
    { href: "#restaurants-cafes", label: "Restaurants & cafés" },
    { href: "#amounts", label: "How much" },
    { href: "#methods", label: "How to tip" },
    { href: "#delivery", label: "Delivery apps" },
    { href: "#everyday", label: "Everyday service" },
    { href: "#when-to-tip", label: "When tipping matters" },
    { href: "#recommended-options", label: "Recommended" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#food-hub", label: "Hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Tipping Is Modest Not Mandatory — restaurants, cafés, delivery prompts, everyday service — Checklist rail, Dutch canal café skyline and ExpatLife brand footer.",
      "Dutch tipping is a culture system to learn — not a US-style mandatory percentage."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of tipping levers — culture, restaurants, amounts, methods, delivery, everyday — Dutch café band and ExpatLife brand footer.",
      "Six levers explain almost every “tipping Netherlands” search for newcomers."
    ),
    culture: visual(
      "culture",
      "Premium culture-baseline desk — “service included culture” card, modest tip sticky, US vs NL comparison note — Dutch canal café window, General information only rail.",
      "Service wages and hospitality norms differ from tip-heavy cultures — calibrate once."
    ),
    restaurants: visual(
      "restaurants",
      "Premium restaurant tipping scene — itemised bill, round-up note, contactless terminal — Dutch evening table, Verify with venue rail.",
      "Sit-down tips are often a round-up or modest thank-you — deepen dining culture on Restaurants."
    ),
    amounts: visual(
      "amounts",
      "Premium how-much orientation board — round-up card, small percentage card, “optional” badge — Dutch receipt pad, General information only rail.",
      "Orientation ranges help calm — they are not official mandatory rates."
    ),
    methods: visual(
      "methods",
      "Premium how-to-tip methods board — cash tip jar, card terminal tip screen, round-up sticky — Dutch café counter, Verify payment methods rail.",
      "Cash, terminal prompts and round-ups are the everyday tip methods."
    ),
    delivery: visual(
      "delivery",
      "Premium delivery tipping consultation — phone tip slider, courier note, optional tip card — Dutch apartment desk, General information only rail.",
      "Delivery tip prompts are a different lane — deepen apps on Food delivery."
    ),
    everyday: visual(
      "everyday",
      "Premium everyday-service map — taxi, hairdresser, hotel porter light notes — Dutch city street band, Verify with provider rail.",
      "Light everyday tips exist — keep them modest and context-dependent."
    ),
    whenToTip: visual(
      "when-to-tip",
      "Premium decision board — celebration dinner tip night, rainy takeaway tip prompt, calm cook-at-home — three paths labelled restaurant, delivery, meal kit/shop — Dutch skyline and ExpatLife brand footer.",
      "Match the night — tip-relevant dining, delivery prompt, or cook at home."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first restaurant bill, café coffee, delivery rainy night, taxi airport, haircut, budget reset — Dutch canal window light and ExpatLife brand footer.",
      "Start from your week story, then choose a calm personal tipping rule."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — US percentages, double tipping, ignoring service charge, tip-shaming, confusing fees with tips — Fix notes and Dutch rainy skyline.",
      "Most tip friction comes from expectation mismatches — not from missing a secret tip app."
    ),
    checklist: visual(
      "checklist",
      "Premium tipping checklist clipboard — bill read, service charge checked, method chosen, personal rule noted, sibling guides bookmarked — Dutch café table scene.",
      "Use this checklist so the first Dutch tip moment stays calm and comparable."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Orientation habits",
      items: [
        "Expect tipping to be optional and often modest compared with US norms.",
        "Read the bill for service charges before adding more.",
        "Separate sit-down tips from delivery-app tip prompts.",
        "Cook-at-home nights still belong to Meal kits, Shopping and Cheap guides.",
      ],
    },
    snapshot: {
      title: "Snapshot tips",
      items: [
        "Culture baseline beats copying home-country tip percentages.",
        "Round-ups and small thank-yous are common orientation patterns.",
        "Delivery tip sliders are optional prompts — not a national award.",
        "No section here is a tip-app ranking or official wage claim.",
      ],
    },
    culture: {
      title: "Culture cues",
      items: [
        "Hospitality wages and tip culture differ from tip-heavy countries.",
        "Good service is appreciated; large mandatory tips are not the default script.",
        "Personal comfort still matters — choose a calm modest rule.",
        "Open Restaurants for dining culture; this page owns tip depth.",
      ],
    },
    restaurants: {
      title: "Restaurant cues",
      items: [
        "Ask for the bill; tip after you understand the total.",
        "Round-up to a convenient euro amount is a common pattern.",
        "Cafés may see smaller thank-yous than full dinner sittings.",
        "Deepen reservations, terraces and bills on the Restaurants guide.",
      ],
    },
    amounts: {
      title: "Amount cues",
      items: [
        "Orientation ranges are examples — not law or mandatory rates.",
        "Start modest; adjust for occasion, group size and service feel.",
        "Never invent official “required tip %” claims for the Netherlands.",
        "Budget resets belong to Cheap groceries and Meal kits modelling.",
      ],
    },
    methods: {
      title: "Method cues",
      items: [
        "Contactless terminals may offer tip screens — decline or choose calmly.",
        "Cash tips still work when you prefer them.",
        "Round-up verbally when paying is a simple everyday habit.",
        "Open Payments and Cash vs card for everyday payment rails.",
      ],
    },
    delivery: {
      title: "Delivery cues",
      items: [
        "App tip prompts are separate from restaurant table tips.",
        "Fees and service charges are not the same as a tip — read checkout.",
        "Optional tip sliders can be skipped — verify app wording.",
        "Deepen platforms, fees and coverage on Food delivery.",
      ],
    },
    everyday: {
      title: "Everyday cues",
      items: [
        "Taxis and hairdressers may see light round-ups — context varies.",
        "Hotels and porters are situation-dependent — keep expectations modest.",
        "When unsure, a small thank-you beats an oversized US-style tip.",
        "This page stays light here — not a full services wage guide.",
      ],
    },
    whenToTip: {
      title: "When-to cues",
      items: [
        "Celebrations and sit-down dinners are classic tip moments.",
        "Delivery tip prompts appear on rainy takeaway nights.",
        "Cook-at-home nights avoid tip moments entirely.",
        "Do not force tipping logic onto every food job.",
      ],
    },
    scenarios: {
      title: "Scenario cues",
      items: [
        "Start from your week story, not a tip-app ranking thread.",
        "First restaurant: read the bill, then apply a modest personal rule.",
        "Delivery: decide tip before confirming checkout.",
        "Budget weeks: lean on Meal kits / Cheap and fewer tip nights.",
      ],
    },
    mistakes: {
      title: "Mistake cues",
      items: [
        "Copying US 15–20% scripts creates awkward over-tipping.",
        "Tipping twice (service charge + large tip) without reading the bill.",
        "Confusing delivery fees with courier tips.",
        "Treating tip prompts as mandatory rankings of service quality.",
      ],
    },
    checklist: {
      title: "Checklist cues",
      items: [
        "Bill and any service charge read before tipping.",
        "Personal modest rule chosen for sit-down vs delivery.",
        "Payment method ready (card terminal or cash).",
        "Lane chosen (restaurant vs delivery vs cook/shop).",
      ],
    },
  },
  quickAnswer: {
    heading: "Dutch tipping is usually modest and optional — not a US-style mandatory script",
    summary:
      "In the Netherlands, tips are often a thank-you or round-up rather than a large required percentage. Learn the culture baseline, read the bill, handle restaurant and delivery tips as separate lanes, and keep a calm personal rule.",
    bullets: [
      "Expect tipping to be appreciated but often optional — calibrate below tip-heavy home countries.",
      "Restaurants and cafés: round-up or modest thank-you after reading the bill.",
      "Delivery apps: tip prompts are usually optional — fees are not tips.",
      "Taxis and hairdressers: light round-ups are common orientation patterns, not universal rules.",
      "Sit-down culture → Restaurants; apps/fees → Food delivery; cook nights → Meal kits / groceries.",
    ],
    note: "Use this page for tip etiquette depth. Open Restaurants for dining culture, Food delivery for apps, and Payments / Cash vs card for how you actually pay.",
  },
  introParagraphs: [
    "Expats often search “tipping Netherlands” after a first restaurant bill or delivery checkout. What usually helps first is orientation: Dutch tip culture is typically more modest than US expectations, tips are often optional, and round-ups are a common thank-you pattern.",
    "This guide owns tipping etiquette. Restaurants owns sit-down dining culture with a short tip cross-link. Food delivery owns apps, fees and tip prompts in the delivery lane. Soft affiliate cards below are optional grocery tools for non-tip cook-at-home nights — not a podium of tip apps.",
  ],
  introHighlights: [
    "Modest and optional beats copying large home-country tip percentages.",
    "Always read service charges and checkout fees before adding a tip.",
    "Restaurant table tips and delivery tip sliders are different moments.",
    "Cross-link Restaurants, Food delivery and Payments instead of mixing lanes.",
  ],
  starterChecklist: [
    "Personal modest tip rule written for sit-down meals",
    "Bill / service-charge read habit",
    "Card terminal tip-screen decision (accept / skip / round-up)",
    "Delivery tip-prompt decision noted",
    "Cash small notes as optional backup",
    "Restaurants guide bookmarked for dining culture",
    "Food delivery guide bookmarked for apps and fees",
    "Meal kits or supermarket plan for cook nights (no tip moment)",
  ],
  orientationFlowSteps: [
    "Learn the culture baseline (modest / optional)",
    "Practice one restaurant bill tip calmly",
    "Decide a delivery tip-prompt habit",
    "Balance tip nights with cook-at-home weeks",
  ],
  snapshotTips: [
    "Six levers cover most newcomer tipping searches.",
    "No card here is a tip-app award or mandatory rate.",
    "Restaurants and Food delivery sit on sibling pages.",
  ],
  snapshotSignals: [
    {
      label: "Culture",
      value: "Modest / optional",
      note: "Usually lighter than tip-heavy countries.",
    },
    {
      label: "Restaurants",
      value: "Round-up thank-you",
      note: "Read the bill first; tip after.",
    },
    {
      label: "Amounts",
      value: "Orientation only",
      note: "Examples — not official mandatory %.",
    },
    {
      label: "Methods",
      value: "Cash or terminal",
      note: "Round-up, tip screen or cash note.",
    },
    {
      label: "Delivery",
      value: "Optional prompts",
      note: "Fees ≠ tips — check checkout.",
    },
    {
      label: "Everyday",
      value: "Light context",
      note: "Taxi / hair — modest if anything.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Culture baseline",
      body: "Dutch tipping culture is typically more modest than US-style mandatory percentages. Tips are often a thank-you, not a wage substitute script.",
    },
    {
      title: "Restaurants & cafés",
      body: "After sit-down service, many people round up or leave a small thank-you. Café tips are often smaller than full dinner sittings.",
    },
    {
      title: "How much",
      body: "Use calm orientation ranges as personal rules — never treat them as official law or national awards.",
    },
    {
      title: "How to tip",
      body: "Cash, card-terminal tip screens and verbal round-ups are the everyday methods. Payments guides cover the rails.",
    },
    {
      title: "Delivery apps",
      body: "Tip sliders appear at checkout. They are usually optional and separate from delivery fees and service charges.",
    },
    {
      title: "Everyday service",
      body: "Taxis and hairdressers may see light round-ups. Keep expectations modest and situation-dependent.",
    },
  ] satisfies TipCard[],
  culture: {
    heading: "Dutch tipping culture baseline",
    intro:
      "Start here if you arrived from a tip-heavy culture. In the Netherlands, hospitality pay and tip etiquette usually mean tips are appreciated but not the same social script as large mandatory percentages.",
    paragraphs: [
      "Many newcomers feel anxious about “under-tipping.” A calmer frame: learn local norms, read each bill, and choose a modest personal rule you can repeat without stress.",
      "This page does not claim official wage rules or invent mandatory tip laws. It orients everyday etiquette so restaurant nights, café stops and delivery checkouts feel predictable.",
    ],
    rows: [
      {
        lever: "Optional thank-you",
        whatItMeans: "Tips often signal appreciation rather than a required wage script.",
        tip: "Start modest; increase only when the occasion or service feels exceptional to you.",
      },
      {
        lever: "Service culture",
        whatItMeans: "Friendly, efficient service is common without tip-pressure theatre.",
        tip: "Do not equate tip size with whether staff were “allowed” to be kind.",
      },
      {
        lever: "US / tip-heavy contrast",
        whatItMeans: "Home-country 15–20%+ habits can feel out of place.",
        tip: "Recalibrate once — then stop second-guessing every euro.",
      },
      {
        lever: "Personal rule",
        whatItMeans: "A simple round-up or small percentage keeps decisions calm.",
        tip: "Write the rule before the first busy Saturday dinner.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Not a ranking",
        body: "Tip size is not a national award for restaurants or couriers. Model etiquette — do not invent podiums.",
      },
      {
        title: "Read before you tip",
        body: "Service charges, packaging fees and delivery fees change the total. Tip after you understand the line items.",
      },
      {
        title: "Sibling lanes",
        body: "Dining culture → Restaurants. Apps and fees → Food delivery. This page stays on tip etiquette depth.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Restaurants",
        href: RESTAURANTS_NETHERLANDS_PATH,
        status: "live",
        description: "Sit-down dining culture — reservations, bills and service style.",
      },
      {
        label: "Culture & etiquette",
        href: "/netherlands/living/culture-etiquette/",
        status: "live",
        description: "Broader everyday Dutch etiquette context.",
      },
    ] satisfies GuideLink[],
  },
  restaurantsCafes: {
    heading: "Restaurants and cafés",
    intro:
      "Sit-down tipping usually happens after you ask for the bill and understand the total. Round-ups and modest thank-yous are common orientation patterns.",
    paragraphs: [
      "At restaurants, many people round up to a convenient amount or leave a small percentage after a full dinner. Cafés and quick coffee stops often see smaller thank-yous — or none — depending on the visit.",
      "Deep dining culture (reservations, terraces, dietary norms) lives on the Restaurants guide. Keep this section focused on the tip moment at the table.",
    ],
    rows: [
      {
        lever: "Full dinner",
        whatItMeans: "Longer sitting, higher bill, more tip-relevant moment.",
        tip: "Read the bill; apply your modest personal rule once.",
      },
      {
        lever: "Café / coffee",
        whatItMeans: "Short visit; tip is often tiny or skipped.",
        tip: "A small round-up is enough when you want to thank someone.",
      },
      {
        lever: "Groups",
        whatItMeans: "Splitting and tip math can confuse newcomers.",
        tip: "Agree the tip approach before paying; ask staff calmly about splitting.",
      },
      {
        lever: "Service charge line",
        whatItMeans: "Some bills already include a service-related line.",
        tip: "Do not automatically stack a large second tip without reading.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Ask for the bill",
        body: "It is normal to request de rekening when ready. Tip after the total is clear — not while guessing.",
      },
      {
        title: "Occasion matters",
        body: "Celebrations and guest dinners may feel like larger thank-you moments than a solo weekday lunch.",
      },
      {
        title: "Not a restaurant ranking",
        body: "Busy terraces and hard-to-book kitchens are demand signals — not tip-percentage awards.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Restaurants",
        href: RESTAURANTS_NETHERLANDS_PATH,
        status: "live",
        description: "Reservations, lunch vs dinner, terraces and bill habits.",
      },
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "Everyday debit and contactless norms.",
      },
    ] satisfies GuideLink[],
  },
  amounts: {
    heading: "How much — orientation ranges",
    intro:
      "Use calm example ranges as a personal starting rule. They are orientation only — not official mandatory tip rates, wage claims or national awards.",
    paragraphs: [
      "Many expats settle on rounding up to a convenient euro amount for smaller bills, and a modest thank-you for larger restaurant dinners. Exact euros vary by city, venue and your budget.",
      "If a service charge is already listed, factor that in before adding more. When unsure, modest is safer than copying tip-heavy home-country percentages.",
    ],
    rows: [
      {
        lever: "Small café bill",
        whatItMeans: "Coffee or light snack totals.",
        tip: "Round up a little — or skip — based on your comfort.",
      },
      {
        lever: "Restaurant dinner",
        whatItMeans: "Full sit-down meal for one or more people.",
        tip: "Modest thank-you or round-up after reading the bill.",
      },
      {
        lever: "Exceptional service",
        whatItMeans: "You personally want to thank staff more.",
        tip: "Increase within your budget — still avoid US-script overshoot.",
      },
      {
        lever: "Budget reset week",
        whatItMeans: "Fewer tip nights; more cook-at-home.",
        tip: "Open Cheap / Meal kits; keep dining-out capped.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "No fake official rates",
        body: "We do not invent government-mandated tip percentages. Personal rules beat viral “must tip X%” claims.",
      },
      {
        title: "Group clarity",
        body: "Agree whether tip is included in the split before everyone taps the terminal.",
      },
      {
        title: "Track the habit",
        body: "Note tip euros for a week once — then stop obsessing and reuse your rule.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cost of living",
        href: COST_OF_LIVING_PATH,
        status: "live",
        description: "Place dining-out and tip spend in the wider budget.",
      },
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "Protect the wider food bill on non-tip nights.",
      },
    ] satisfies GuideLink[],
  },
  methods: {
    heading: "How to tip — cash, card and round-ups",
    intro:
      "Everyday tip methods are simple: round up when paying, use a terminal tip screen if offered, or leave cash. Choose one calm method per situation.",
    paragraphs: [
      "Contactless debit is common in Dutch restaurants and cafés. Some terminals show a tip prompt — you can select an amount or continue without one, depending on the device and venue.",
      "Cash tips still work when you prefer them. Keep a few small notes if you like that habit. Deeper payment rails live on Payments basics and Cash vs card.",
    ],
    rows: [
      {
        lever: "Verbal round-up",
        whatItMeans: "Tell staff to round the total when paying.",
        tip: "Simple for card or cash when no tip screen appears.",
      },
      {
        lever: "Terminal tip screen",
        whatItMeans: "Device offers tip percentages or euro amounts.",
        tip: "Read options calmly; skip if the prompt does not fit your rule.",
      },
      {
        lever: "Cash thank-you",
        whatItMeans: "Leave coins or notes on the table or in a tip jar.",
        tip: "Useful when you prefer not to tip via card rails.",
      },
      {
        lever: "App checkout tip",
        whatItMeans: "Delivery apps show tip sliders before confirm.",
        tip: "Decide before tapping — fees are separate line items.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Card-first culture",
        body: "Many venues prefer card. Tip methods should work with contactless habits — deepen on Payments guides.",
      },
      {
        title: "No tip-app invention",
        body: "We do not invent dedicated tip apps or fake affiliate tip programs. Use venue and delivery checkout tools that already exist.",
      },
      {
        title: "Stay polite",
        body: "Declining a tip screen is normal. You do not need an apology speech — a calm thank-you is enough.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "Debit, iDEAL and everyday payment orientation.",
      },
      {
        label: "Cash vs card",
        href: CASH_VS_CARD_PATH,
        status: "live",
        description: "When cash still appears beside card-first habits.",
      },
    ] satisfies GuideLink[],
  },
  delivery: {
    heading: "Delivery apps and tip prompts",
    intro:
      "Delivery tipping is a different lane from table tips. Apps often show optional tip prompts at checkout — alongside delivery fees and service charges.",
    paragraphs: [
      "Read the full checkout total. A delivery fee or service charge is not automatically a courier tip. Tip sliders are usually optional — verify the wording in the app you use.",
      "Platform choice, coverage and fee modelling live on the Food delivery guide. Keep this section focused on the tip decision at confirm.",
    ],
    rows: [
      {
        lever: "Tip slider",
        whatItMeans: "Optional amount added before you confirm the order.",
        tip: "Decide your default (skip / small / larger rainy-night) once.",
      },
      {
        lever: "Fees vs tip",
        whatItMeans: "Delivery and service fees pay platform/logistics costs.",
        tip: "Do not treat fees as proof that a tip is already included.",
      },
      {
        lever: "Bad weather nights",
        whatItMeans: "Some people tip more when conditions are rough.",
        tip: "Personal choice — still optional orientation, not a ranking.",
      },
      {
        lever: "Grocery delivery",
        whatItMeans: "Supermarket delivery checkouts may differ from takeaway apps.",
        tip: "Read each app’s tip UI; deepen coverage on Food delivery.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Separate lanes",
        body: "Table tip habits do not automatically transfer to app sliders — learn both once.",
      },
      {
        title: "Address accuracy",
        body: "Wrong addresses create courier friction. Tip etiquette does not fix a bad pin — confirm details first.",
      },
      {
        title: "Not an app awards list",
        body: "Tip prompts are checkout UX — not a national ranking of delivery platforms.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Food delivery",
        href: FOOD_DELIVERY_NETHERLANDS_PATH,
        status: "live",
        description: "Takeaway apps, grocery delivery, fees and coverage.",
      },
      {
        label: "Meal kits",
        href: MEAL_KITS_NETHERLANDS_PATH,
        status: "live",
        description: "Cook-at-home boxes when you want fewer tip nights.",
      },
    ] satisfies GuideLink[],
  },
  everyday: {
    heading: "Everyday service — taxis, hairdressers and light notes",
    intro:
      "Outside restaurants and delivery, tip moments still appear — usually as light round-ups. Keep this section short and context-dependent.",
    paragraphs: [
      "Taxi and ride journeys may see a small round-up, especially with luggage or late nights. Hairdressers and barbers sometimes receive a modest thank-you — habits vary by salon and city.",
      "Hotel porters and similar help are situation-dependent. When unsure, modest appreciation beats oversized scripts. This is not a full wage or tourism services guide.",
    ],
    rows: [
      {
        lever: "Taxi / ride",
        whatItMeans: "Meter or app fare already set; tip is extra thank-you.",
        tip: "Round up lightly if you choose — not a mandatory US airport script.",
      },
      {
        lever: "Hairdresser",
        whatItMeans: "Salon norms vary; cash or card tip may be possible.",
        tip: "Ask calmly if unsure; keep amounts modest.",
      },
      {
        lever: "Hotel help",
        whatItMeans: "Luggage or room help may prompt a small thank-you.",
        tip: "Situation-based — skip inventing large mandatory rates.",
      },
      {
        lever: "When to skip",
        whatItMeans: "Quick transactional moments without personal service.",
        tip: "Not every interaction needs a tip — that is normal here.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Stay light",
        body: "Everyday tips are a thin layer — do not rebuild your whole budget around them.",
      },
      {
        title: "Getting around link",
        body: "Transit and ride habits deepen on Getting around; tip notes stay secondary.",
      },
      {
        title: "No fake logos",
        body: "We do not invent taxi-company tip awards or official tip stickers.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: "/netherlands/living/getting-around/",
        status: "live",
        description: "Transport context around taxi and city travel.",
      },
      {
        label: "Daily life",
        href: LIVING_DAILY_LIFE_PATH,
        status: "live",
        description: "Everyday routines around errands and services.",
      },
    ] satisfies GuideLink[],
  },
  whenToTip: {
    heading: "When tipping matters — and when cook-at-home wins",
    intro:
      "Not every food night needs a tip moment. Match celebrations and sit-down dinners, delivery prompts, and cook-at-home weeks to the right lane.",
    paragraphs: [
      "Tip-relevant nights are usually restaurant dinners, some café visits and delivery checkouts with tip sliders. Grocery shops and meal-kit cooking typically avoid tip decisions entirely.",
      "Use soft cook-at-home tools below when you want fewer tip nights without giving up dinner plans.",
    ],
    rows: [
      {
        situation: "Celebration or guests",
        useThis: "Restaurant tip moment + Restaurants guide",
        why: "Sit-down culture and a calm thank-you fit the occasion.",
        watchOut: "Do not copy oversized home-country percentages.",
      },
      {
        situation: "Rainy takeaway night",
        useThis: "Food delivery + optional tip prompt",
        why: "Checkout tip is a separate decision from table tipping.",
        watchOut: "Fees and tips are different line items.",
      },
      {
        situation: "Budget reset week",
        useThis: "Meal kits / Cheap groceries / supermarket shop",
        why: "Cook-at-home avoids tip moments and protects the food bill.",
        watchOut: "Do not force restaurant nights every evening.",
      },
      {
        situation: "Everyday coffee",
        useThis: "Small round-up or skip",
        why: "Short café visits are light tip contexts.",
        watchOut: "Overthinking tiny bills creates tip anxiety.",
      },
    ] satisfies DecisionRow[],
    cards: [
      {
        title: "Lane clarity",
        body: "Restaurants, Food delivery and Meal kits solve different jobs — tip etiquette sits across the first two.",
      },
      {
        title: "Personal default",
        body: "Decide sit-down and delivery defaults once; reuse them without debate.",
      },
      {
        title: "Soft CTAs below",
        body: "Grocery and meal-kit links model non-tip nights — not a tip-app ranking.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Restaurants",
        href: RESTAURANTS_NETHERLANDS_PATH,
        status: "live",
        description: "When sit-down dining is the right night.",
      },
      {
        label: "Food delivery",
        href: FOOD_DELIVERY_NETHERLANDS_PATH,
        status: "live",
        description: "When takeaway or grocery delivery fits better.",
      },
      {
        label: "Meal kits",
        href: MEAL_KITS_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription cook-at-home rhythm without tip prompts.",
      },
    ] satisfies GuideLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Cook-at-home tools for non-tip nights",
    subtitle:
      "Soft CTAs for established grocery and meal-kit patterns when you are balancing restaurant tip nights with cooking at home. This block is not a ranking of tip apps or restaurants.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for cook-at-home modelling beside tip-relevant dining nights — HelloFresh first, then Picnic and Albert Heijn — not pay-to-rank placement unless a link is explicitly labelled as sponsored. We do not invent tip-app affiliates or tip rankings here.",
    placementId: "nl-living-tipping-support-providers",
    analyticsPageContext: "tipping-netherlands-recommended-options",
    categoryLinks: [
      { href: MEAL_KITS_NETHERLANDS_PATH, label: "Meal kits guide" },
      { href: FOOD_DELIVERY_NETHERLANDS_PATH, label: "Food delivery guide" },
      { href: RESTAURANTS_NETHERLANDS_PATH, label: "Restaurants guide" },
      { href: CHEAP_GROCERIES_NETHERLANDS_PATH, label: "Cheap groceries tactics" },
      { href: SHOPPING_GROCERIES_PATH, label: "Shopping & groceries" },
    ],
    browseLabel: "More grocery context: ",
  },
  scenarios: {
    heading: "Common tipping scenarios",
    intro: "Match your week to a calm first tip experiment — then reuse a modest personal rule.",
    rows: [
      {
        situation: "First restaurant dinner in NL",
        approach: "Read the bill; round up or apply a modest thank-you once.",
        firstStep: "Ask for the bill; check for any service charge line.",
      },
      {
        situation: "Solo café coffee",
        approach: "Tiny round-up or skip — keep it light.",
        firstStep: "Decide before the terminal so you are not rushed.",
      },
      {
        situation: "Rainy delivery order",
        approach: "Check fees first; set tip slider to your delivery default.",
        firstStep: "Open Food delivery habits if the app lane still feels new.",
      },
      {
        situation: "Airport taxi with luggage",
        approach: "Light round-up if you choose — not a US-script percentage.",
        firstStep: "Confirm fare method; tip after the ride ends.",
      },
      {
        situation: "Haircut in a new salon",
        approach: "Modest thank-you if the visit felt personal and helpful.",
        firstStep: "Ask how tip is handled if the terminal is unclear.",
      },
      {
        situation: "Budget reset week",
        approach: "Fewer tip nights; lean on Meal kits / Cheap / supermarket.",
        firstStep: "Cap dining-out and reuse cook-at-home tools.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Copying US tip percentages",
      body: "Applying 15–20%+ as a mandatory script creates awkward over-tipping.",
      advice: "Recalibrate to modest optional thank-yous and round-ups.",
    },
    {
      title: "Double tipping blindly",
      body: "Adding a large tip on top of a service charge without reading the bill.",
      advice: "Read line items first; then apply your personal rule once.",
    },
    {
      title: "Fees mistaken for tips",
      body: "Assuming delivery or service fees already tip the courier.",
      advice: "Treat fees and tip prompts as separate checkout decisions.",
    },
    {
      title: "Tip anxiety on tiny bills",
      body: "Overthinking every coffee stop as a moral test.",
      advice: "Use a light café default — round-up or skip — and move on.",
    },
    {
      title: "Mixing lanes",
      body: "Expecting restaurant tip culture to equal delivery-app sliders.",
      advice: "Keep table tips and app prompts as two learned habits.",
    },
    {
      title: "Chasing tip-app rankings",
      body: "Searching for “best tip apps” instead of learning local etiquette.",
      advice: "Use venue and delivery checkout tools; skip invented awards.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "First tipping checklist",
    intro: "Use this once so the first Dutch tip moment stays calm — then reuse your personal rule.",
    items: [
      "Culture baseline understood (modest / often optional)",
      "Personal sit-down tip rule written",
      "Personal delivery tip-prompt default written",
      "Habit to read bill / service charge before tipping",
      "Card terminal tip-screen plan (choose / skip / round-up)",
      "Optional small cash notes if you prefer cash thank-yous",
      "Restaurants guide bookmarked for dining culture",
      "Food delivery guide bookmarked for apps and fees",
      "Payments / Cash vs card bookmarked if checkout still feels new",
      "Meal kits or supermarket plan for non-tip cook nights",
      "Cheap groceries bookmarked if the wider bill needs tactics",
      "No reliance on fake tip-app rankings or awards",
    ],
  },
  howTo: {
    heading: "How to build a calm Dutch tipping habit in one week",
    steps: [
      {
        name: "Write two defaults",
        text: "One modest sit-down rule (round-up or small thank-you) and one delivery tip-prompt default (skip / small / rainy-night bump). Keep them written on your phone.",
      },
      {
        name: "Trial one restaurant bill",
        text: "Ask for the bill, read any service charge, pay contactless, and apply your sit-down rule once without second-guessing.",
      },
      {
        name: "Trial one delivery checkout",
        text: "Read fees, set the tip slider to your delivery default, confirm address, and note how the total felt.",
      },
      {
        name: "Add one light everyday moment",
        text: "If a taxi or haircut appears this week, use a light round-up only if it feels natural — otherwise skip without guilt.",
      },
      {
        name: "Balance tip nights with cook nights",
        text: "Put tip-relevant dining next to a Meal kits or supermarket cook night. Protect the wider food bill with Cheap groceries when needed.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to tip calmly in the Netherlands as an expat",
    description:
      "Practical steps for expats to learn Dutch tipping etiquette — modest optional thank-yous, restaurant bills, delivery tip prompts and light everyday service — without US-style mandatory percentages or fake tip-app rankings.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Do you tip in the Netherlands?",
      a: "Often yes as a thank-you, but tipping is typically more modest and optional than in tip-heavy countries. Round-ups and small thank-yous are common orientation patterns — not a universal mandatory percentage.",
    },
    {
      q: "How much should I tip at restaurants?",
      a: "There is no single official rate. Many people round up or leave a modest thank-you after reading the bill. Avoid copying large US-style percentages by default. Adjust for occasion and your budget.",
    },
    {
      q: "Is service included?",
      a: "Some bills may show service-related lines; others do not. Always read the receipt before adding a tip so you do not double-count.",
    },
    {
      q: "How do delivery app tips work?",
      a: "Many apps show optional tip prompts at checkout. Delivery fees and service charges are separate from tips. Deepen platforms and fees on the Food delivery guide.",
    },
    {
      q: "Do I tip taxis or hairdressers?",
      a: "Light round-ups sometimes appear, but habits vary. Keep expectations modest and situation-dependent — this page stays light outside dining and delivery.",
    },
    {
      q: "How is this different from the Restaurants guide?",
      a: "Restaurants owns sit-down dining culture (reservations, terraces, bills, dietary norms) with a short tipping cross-link. This page owns tipping etiquette depth.",
    },
    {
      q: "How is this different from Food delivery?",
      a: "Food delivery owns takeaway apps, grocery delivery, fees and coverage. This page owns tip norms across dining and delivery prompts.",
    },
    {
      q: "Do you rank tip apps or restaurants?",
      a: "No. Soft grocery and meal-kit links are optional cook-at-home modelling tools (with affiliate/referral disclosure where relevant), not a podium of tip apps or restaurants.",
    },
  ],
  relatedGuides: [
    {
      label: "Restaurants",
      href: RESTAURANTS_NETHERLANDS_PATH,
      status: "live",
      description: "Sit-down dining culture — reservations, terraces, bills and service.",
    },
    {
      label: "Food delivery",
      href: FOOD_DELIVERY_NETHERLANDS_PATH,
      status: "live",
      description: "Takeaway apps and grocery delivery — fees, coverage and tip prompts.",
    },
    {
      label: "Meal kits",
      href: MEAL_KITS_NETHERLANDS_PATH,
      status: "live",
      description: "Subscription meal-kit boxes — cadence, cost modelling and pause habits.",
    },
    {
      label: "Cheap groceries",
      href: CHEAP_GROCERIES_NETHERLANDS_PATH,
      status: "live",
      description: "Spend less with discounters, offers, private label and waste tactics.",
    },
    {
      label: "Best supermarkets",
      href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Choose the supermarket fit that matches your household.",
    },
    {
      label: "Dutch supermarkets",
      href: DUTCH_SUPERMARKETS_PATH,
      status: "live",
      description: "How the supermarket system works day to day.",
    },
    {
      label: "Shopping & groceries",
      href: SHOPPING_GROCERIES_PATH,
      status: "live",
      description: "Errands, self-checkout how-to, household non-food and deliveries.",
    },
    {
      label: "International supermarkets",
      href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Broad sourcing map for non-Dutch products.",
    },
    {
      label: "Asian supermarkets",
      href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "East and Southeast Asian specialty depth.",
    },
    {
      label: "Turkish supermarkets",
      href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Turkish and Middle-Eastern specialty depth.",
    },
    {
      label: "Indian supermarkets",
      href: INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Indian and South Asian specialty depth.",
    },
    {
      label: "South African shops",
      href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
      status: "live",
      description: "South African specialty shops and comfort foods.",
    },
    {
      label: "Essential apps",
      href: LIVING_ESSENTIAL_APPS_PATH,
      status: "live",
      description: "Where grocery and delivery apps fit in a newcomer install order.",
    },
    {
      label: "Payments basics",
      href: PAYMENTS_BASICS_PATH,
      status: "live",
      description: "Debit and contactless norms for shops and restaurants.",
    },
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      status: "live",
      description: "Card-first habits and when cash still appears.",
    },
    {
      label: "Cost of living",
      href: COST_OF_LIVING_PATH,
      status: "live",
      description: "Dining-out and tip spend in the wider budget picture.",
    },
    {
      label: "Saving money",
      href: SAVING_MONEY_PATH,
      status: "live",
      description: "Broader saving habits beyond tip nights.",
    },
    {
      label: "Survival Guide",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      status: "live",
      description: "First-days living orientation.",
    },
    {
      label: "Daily life",
      href: LIVING_DAILY_LIFE_PATH,
      status: "live",
      description: "Everyday routines around shopping and evenings out.",
    },
  ] satisfies GuideLink[],
  foodHub: {
    heading: "Food & daily groceries hub",
    intro:
      "Keep tipping etiquette connected to restaurants, delivery, meal kits, saving tactics, supermarket fit, specialty lanes, errands and wider Living guides.",
    cards: [
      {
        label: "Tipping",
        href: TIPPING_NETHERLANDS_PATH,
        status: "live",
        description: "This guide — Dutch tipping norms for expats.",
      },
      {
        label: "Restaurants",
        href: RESTAURANTS_NETHERLANDS_PATH,
        status: "live",
        description: "Sit-down dining culture for expats.",
      },
      {
        label: "Food delivery",
        href: FOOD_DELIVERY_NETHERLANDS_PATH,
        status: "live",
        description: "Takeaway apps, grocery delivery, fees and tip prompts.",
      },
      {
        label: "Meal kits",
        href: MEAL_KITS_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription meal-kit modelling and pause habits.",
      },
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Errand system and self-checkout depth.",
      },
      {
        label: "Dutch supermarkets",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "Chain system and day-to-day supermarket habits.",
      },
      {
        label: "Best supermarkets",
        href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Choosing among fits for your situation.",
      },
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "Money-saving tactics across formats.",
      },
      {
        label: "International supermarkets",
        href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Broad sourcing map for non-Dutch products.",
      },
      {
        label: "Asian supermarkets",
        href: ASIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "East and Southeast Asian specialty depth.",
      },
      {
        label: "Turkish supermarkets",
        href: TURKISH_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Turkish and Middle-Eastern specialty depth.",
      },
      {
        label: "Indian supermarkets",
        href: INDIAN_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Indian and South Asian specialty depth.",
      },
      {
        label: "South African shops",
        href: SOUTH_AFRICAN_SHOPS_NETHERLANDS_PATH,
        status: "live",
        description: "South African specialty shops and comfort foods.",
      },
      {
        label: "Essential apps",
        href: LIVING_ESSENTIAL_APPS_PATH,
        status: "live",
        description: "Grocery and delivery apps in the install order.",
      },
      {
        label: "Daily life",
        href: LIVING_DAILY_LIFE_PATH,
        status: "live",
        description: "Broader everyday living basics.",
      },
      {
        label: "Living hub",
        href: LIVING_HUB_PATH,
        status: "live",
        description: "All Living pillar starting points.",
      },
    ] satisfies GuideLink[],
  },
  exploreNext: [
    {
      label: "Restaurants",
      href: RESTAURANTS_NETHERLANDS_PATH,
      status: "live",
      description: "Deepen sit-down dining culture around tip moments.",
    },
    {
      label: "Food delivery",
      href: FOOD_DELIVERY_NETHERLANDS_PATH,
      status: "live",
      description: "Model takeaway apps, fees and delivery tip prompts.",
    },
    {
      label: "Meal kits",
      href: MEAL_KITS_NETHERLANDS_PATH,
      status: "live",
      description: "Model subscription dinner boxes as non-tip cook nights.",
    },
    {
      label: "Cheap groceries",
      href: CHEAP_GROCERIES_NETHERLANDS_PATH,
      status: "live",
      description: "Protect the wider food bill with supermarket saving tactics.",
    },
    {
      label: "Payments basics",
      href: PAYMENTS_BASICS_PATH,
      status: "live",
      description: "Debit and contactless habits for tip and bill moments.",
    },
    {
      label: "Cash vs card",
      href: CASH_VS_CARD_PATH,
      status: "live",
      description: "Card-first culture and residual cash thank-yous.",
    },
    {
      label: "Essential apps",
      href: LIVING_ESSENTIAL_APPS_PATH,
      status: "live",
      description: "Install-order context for grocery and delivery tools.",
    },
    {
      label: "Cost of living",
      href: COST_OF_LIVING_PATH,
      status: "live",
      description: "Place tip and dining-out spend in the wider budget.",
    },
  ] satisfies GuideLink[],
  relatedGuidesTips: [
    "Tipping owns tip depth; Restaurants owns sit-down culture; Food delivery owns apps; Meal kits owns subscription boxes; Cheap owns saving.",
    "Keep Restaurants and Food delivery linked bidirectionally — different lanes, same food cluster.",
    "Soft affiliate tools are cook-at-home modelling — not tip-app rankings.",
  ],
  foodHubTips: [
    "Use the hub to jump between tipping, dining, delivery, kits, supermarket and specialty lanes.",
    "Keep Living and money guides linked when budget stress is wider than tip nights.",
  ],
  exploreNextTips: [
    "Next step is usually Restaurants or Food delivery — then Meal kits if you want fewer tip nights.",
    "Payments and Cash vs card help when terminal tip screens still feel new.",
  ],
  officialSources: [
    {
      label: "Netherlands Board of Tourism orientation",
      href: "https://www.holland.com/",
      description: "General Netherlands visitor orientation — verify local restaurant and café habits independently.",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Independent consumer orientation on products and services when available.",
    },
    {
      label: "HelloFresh Netherlands",
      href: "https://www.hellofresh.nl/",
      description: "Example meal-kit alternative for non-tip cook-at-home nights — deepen on Meal kits.",
    },
    {
      label: "Picnic",
      href: "https://picnic.app/nl/",
      description: "App-based grocery delivery — useful when modelling cook nights between tip-relevant dining.",
    },
    {
      label: "Albert Heijn",
      href: "https://www.ah.nl/",
      description: "Full-service supermarket baseline — useful when modelling shop habits against dining-out tip nights.",
    },
  ],
  disclosure:
    "General orientation only — not financial, hospitality or employment advice and not a ranking of tip apps or restaurants. Tip prompts, service charges and payment habits change. Some outbound links may be affiliate or referral links; if you use them, we may earn a commission at no extra cost to you. Verify current terms with each venue or app before you tip.",
};

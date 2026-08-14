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
const VISUAL_PREFIX = "food-delivery-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const foodDeliveryNetherlandsPage = {
  slug: "food-delivery-netherlands",
  path: FOOD_DELIVERY_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: SHOPPING_GROCERIES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(FOOD_DELIVERY_NETHERLANDS_PATH) ?? "2026-09-27",
  seo: {
    title: "Food Delivery Netherlands | Takeaway & Grocery Delivery for Expats",
    description:
      "Orient restaurant takeaway apps and grocery delivery in the Netherlands — fees, tipping norms, postcode coverage, when delivery beats cooking or shopping, and a first-order checklist. Not a ranked delivery-app awards list.",
    keywords: [
      "food delivery Netherlands",
      "takeaway Netherlands",
      "Thuisbezorgd Netherlands",
      "grocery delivery Netherlands",
      "Picnic Netherlands",
      "AH Bezorgen",
      "food delivery fees Netherlands",
      "tipping food delivery Netherlands",
      "supermarket delivery Netherlands",
      "expat food delivery Netherlands",
      "restaurant delivery Netherlands",
      "when to order delivery Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Food & groceries",
    pageTitle: "Food delivery Netherlands",
    subtitle:
      "Practical orientation for restaurant takeaway platforms and grocery delivery — fees, tipping norms, coverage checks and when delivery beats cooking or shopping — not a ranked “best delivery app” awards list.",
    primaryCta: { label: "See delivery lanes", href: "#restaurant-platforms" },
    secondaryCta: { label: "Open Meal kits", href: MEAL_KITS_NETHERLANDS_PATH },
    chips: ["Takeaway apps", "Grocery delivery", "Fees & minimums", "Tipping norms", "Coverage checks", "First order"],
    disclaimer:
      "General orientation only — not financial, shopping or dietary advice and not a ranking of delivery apps or restaurants. Fees, coverage, service charges and tip prompts change. Verify current terms in each app. Soft provider links below are optional grocery-delivery modelling tools, not “best app” winners. Some outbound links may be affiliate or referral links.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch apartment evening: newcomers comparing a restaurant takeaway bag, a supermarket grocery delivery tote and a notepad of fees and tip norms on a kitchen table, soft canal light through a rainy window, welcoming practical mood without fake brand logos or award badges.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#restaurant-platforms", label: "Takeaway apps" },
    { href: "#grocery-delivery", label: "Grocery delivery" },
    { href: "#fees", label: "Fees & minimums" },
    { href: "#tipping", label: "Tipping norms" },
    { href: "#when-to-use", label: "When to use" },
    { href: "#coverage", label: "Coverage" },
    { href: "#payments", label: "Payments" },
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
      "Premium orientation board titled Food Delivery Is Two Lanes Not Rankings — restaurant takeaway vs grocery delivery, fees, tipping, coverage — Checklist rail, Dutch rainy canal skyline and ExpatLife brand footer.",
      "Food delivery is two lanes to model — not a national #1 app award."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of food-delivery levers — takeaway apps, grocery delivery, fees, tipping, coverage, when to use — Dutch apartment band and ExpatLife brand footer.",
      "Six levers explain almost every “food delivery Netherlands” search for newcomers."
    ),
    restaurantPlatforms: visual(
      "restaurant-platforms",
      "Premium takeaway-platform desk scene — phone with restaurant list, delivery bag, bike courier silhouette through canal window — Dutch evening apartment, General information only rail.",
      "Restaurant platforms deliver cooked meals — model fees and menus separately from grocery apps."
    ),
    groceryDelivery: visual(
      "grocery-delivery",
      "Premium grocery-delivery doorstep scene — insulated tote, supermarket receipt pad, delivery slot calendar — Dutch canal apartment door, Verify coverage rail.",
      "Grocery delivery restocks the kitchen — different job from restaurant takeaway."
    ),
    fees: visual(
      "fees",
      "Premium fees board — delivery fee, service charge, small-order minimum, promo sticker — Dutch kitchen notepad, Verify current fees rail.",
      "Read the full checkout total — not the menu price alone."
    ),
    tipping: visual(
      "tipping",
      "Premium tipping-norms consultation — tip prompt on phone, Dutch service culture note, optional tip card — canal apartment desk, General information only rail.",
      "Dutch tipping norms are usually modest and optional — read the prompt before tapping."
    ),
    whenToUse: visual(
      "when-to-use",
      "Premium decision board — rainy jet-lag night, busy project week, calm Sunday shop — three paths labelled takeaway, grocery delivery, cook from shops — Dutch skyline and ExpatLife brand footer.",
      "Match the night to the lane — takeaway, grocery delivery, meal kit or in-store shop."
    ),
    coverage: visual(
      "coverage",
      "Premium postcode-coverage map desk — Netherlands outline with postcode check sticky, “check app” note, city dots — Dutch canal light, Checklist rail.",
      "Coverage is postcode-specific — check the app before relying on a favourite chain."
    ),
    payments: visual(
      "payments",
      "Premium payments overlap board — iDEAL, contactless card, app wallet icons on a Dutch kitchen desk with delivery receipt — Verify payment methods rail.",
      "Delivery apps often reuse the same Dutch payment habits as everyday shops."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — rainy night, jet-lag arrival, busy project week, student shared flat, family Sunday restock, travel return — Dutch canal window light and ExpatLife brand footer.",
      "Start from your week story, then choose a calm first delivery experiment."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — fee blindness, tip confusion, over-ordering, wrong address, ignoring coverage — Fix notes and Dutch rainy skyline.",
      "Most delivery friction comes from fee and habit mistakes — not from missing a secret app."
    ),
    checklist: visual(
      "checklist",
      "Premium first-order checklist clipboard — postcode checked, fees read, tip decision noted, address confirmed, payment ready — Dutch kitchen table scene.",
      "Use this checklist so the first delivery order stays calm and comparable."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Orientation habits",
      items: [
        "Separate restaurant takeaway from grocery delivery — different jobs, different fees.",
        "Read delivery fee, service charge and minimum before confirming.",
        "Learn Dutch tipping prompts — usually optional and modest.",
        "Open Meal kits for subscription boxes; Cheap / Dutch / Shopping for in-store tactics; specialty guides only when ingredients are the question.",
      ],
    },
    snapshot: {
      title: "Snapshot tips",
      items: [
        "Takeaway and grocery delivery are different levers — learn both.",
        "Fees and tipping change the true euro total more than menu stickers.",
        "Coverage is postcode-specific — never assume city-wide availability.",
        "No section here is a star rating or award claim.",
      ],
    },
    restaurantPlatforms: {
      title: "Takeaway cues",
      items: [
        "Platforms aggregate restaurants; menus, ETAs and fees vary by kitchen and postcode.",
        "Many apps offer English interfaces — still verify allergens and address details.",
        "Busy Friday nights and rainy weather raise wait times — plan buffers.",
        "Meal kits still require cooking — open Meal kits when you want subscription boxes.",
      ],
    },
    groceryDelivery: {
      title: "Grocery-delivery cues",
      items: [
        "Picnic-style apps and AH Bezorgen restock staples — not restaurant dinners.",
        "Slot windows and minimum baskets matter as much as catalogue size.",
        "Substitutions and missing items happen — check the delivery note.",
        "In-store shopping depth lives on Dutch / Cheap / Shopping guides.",
      ],
    },
    fees: {
      title: "Fee cues",
      items: [
        "Delivery fee, service charge, small-order surcharge and tip are separate lines.",
        "Promos often hide after the first order — model regular totals.",
        "Bundling a larger grocery basket can beat two tiny takeaway orders.",
        "Open Cheap groceries when the wider food bill needs tactics.",
      ],
    },
    tipping: {
      title: "Tipping cues",
      items: [
        "Dutch service culture is usually modest — tips are often optional.",
        "App tip prompts can feel louder than café norms — decide before tapping.",
        "Service charge on the bill is not always a courier tip — read the label.",
        "Cash tips are less common when everything is in-app.",
      ],
    },
    whenToUse: {
      title: "When-to-use cues",
      items: [
        "Rain, jet lag and admin-heavy weeks favour takeaway or grocery delivery.",
        "Calm weeks and budget resets favour shops or meal-kit modelling.",
        "Specialty homeland ingredients still belong to International / Asian / Turkish / Indian / South African guides.",
        "Do not force one app to solve every food job.",
      ],
    },
    coverage: {
      title: "Coverage cues",
      items: [
        "Enter your postcode before bookmarking a “favourite” service.",
        "New-build addresses and temporary housing can fail slot checks.",
        "Restaurant availability and grocery slots are independent maps.",
        "Re-check after you move neighbourhoods.",
      ],
    },
    payments: {
      title: "Payment cues",
      items: [
        "iDEAL, debit cards and contactless habits overlap with everyday Dutch shops.",
        "Save the correct delivery address and apartment buzzer notes.",
        "Corporate cards and shared flats need clear who-pays rules.",
        "Open Payments basics if Dutch checkout still feels new.",
      ],
    },
    scenarios: {
      title: "Scenario cues",
      items: [
        "Start from your week story, not a brand ranking thread.",
        "First week: one calm takeaway and one grocery-delivery trial.",
        "Budget stress weeks: prefer shops or Cheap tactics over habitual takeaway.",
        "Meal kits own subscription dinners — cross-link, do not duplicate that lane.",
      ],
    },
    mistakes: {
      title: "Mistake cues",
      items: [
        "Fee blindness is the most expensive habit error.",
        "Tip confusion comes from loud app prompts vs modest Dutch norms.",
        "Over-ordering for “value” creates waste and fridge chaos.",
        "Wrong floor, buzzer or postcode burns both time and food quality.",
      ],
    },
    checklist: {
      title: "Checklist cues",
      items: [
        "Postcode and address confirmed before the first order.",
        "Full checkout total read including fees and tip prompt.",
        "Lane chosen (takeaway vs grocery delivery vs cook/shop).",
        "Payment method ready and allergen notes checked where relevant.",
      ],
    },
  },
  quickAnswer: {
    heading: "Food delivery is two lanes to model — not a ranked awards list",
    summary:
      "In the Netherlands, “food delivery” usually means restaurant takeaway platforms (Thuisbezorgd-style apps) and grocery delivery (Picnic, AH Bezorgen and similar). They solve different nights: cooked meals versus restocking the kitchen. Model fees, tipping prompts, postcode coverage and when delivery beats cooking or shopping — do not chase a viral “best app” ranking.",
    bullets: [
      "Separate restaurant takeaway from grocery delivery before comparing euros.",
      "Read delivery fees, service charges, minimums and tip prompts at checkout.",
      "Check postcode coverage — availability is local, not national by default.",
      "This page owns delivery apps and grocery delivery; Meal kits owns subscription boxes; Cheap / Dutch / Shopping own in-store tactics; specialty guides own homeland ingredients.",
    ],
    note: "If you only do one thing: place one takeaway order and one grocery-delivery order in your postcode, write down the full checkout totals, then decide which nights each lane deserves.",
  },
  introParagraphs: [
    "Expats search “food delivery Netherlands” hoping for the Dutch equivalent of the apps they used at home — restaurant platforms, supermarket delivery, rainy-night dinners without learning every aisle. Those tools exist, but fees, tipping prompts and postcode coverage surprise newcomers more than the menus themselves.",
    "This guide owns the delivery lane: restaurant takeaway orientation, grocery delivery patterns (Picnic and AH Bezorgen as modelling examples), fees and minimums, tipping norms, when delivery beats cooking or shopping, coverage checks, payment overlap, scenarios and a first-order checklist. Soft grocery-provider links are optional modelling tools — never a podium of winners. There is no separate affiliate catalogue for restaurant platforms here.",
    "Use Meal kits when the question is subscription dinner boxes. Use Cheap, Dutch and Shopping when the question is in-store systems and saving. Use International, Asian, Turkish, Indian or South African shops when specialty ingredients are the question. Stay here when the question is takeaway apps and grocery delivery specifically.",
  ],
  introHighlights: [
    "Two lanes: restaurant takeaway vs grocery delivery",
    "Fees, minimums and tip prompts before confirm",
    "Postcode coverage checks — local, not assumed",
    "Soft grocery CTAs only as optional tools — never rankings",
  ],
  starterChecklist: [
    "Decide the night’s job: cooked meal now vs restock kitchen vs cook from shops",
    "Enter your postcode in the app before relying on a favourite brand story",
    "Read delivery fee, service charge and small-order minimum at checkout",
    "Decide your tip approach before the loud in-app prompt appears",
    "Confirm address, floor and buzzer notes for apartments",
    "Write a one-week notepad: takeaway nights vs grocery delivery vs supermarket",
    "Bookmark Meal kits if subscription boxes are the alternative you want to model",
    "Bookmark Cheap groceries if the whole food bill needs a reset",
  ],
  orientationFlowSteps: [
    "Define the night’s job (takeaway vs grocery vs cook)",
    "Check postcode coverage and fees",
    "Run a short first-order experiment",
    "Compare totals and keep a calm habit",
  ],
  snapshotTips: [
    "Snapshot cards are delivery levers — not scores.",
    "Combine grocery delivery with occasional takeaway in month one for most households.",
    "Re-check after you move or after rainy-season habits settle.",
  ],
  snapshotSignals: [
    {
      label: "Takeaway lane",
      value: "Cooked meals",
      note: "Restaurant platforms deliver ready food — fees and ETAs vary by kitchen and postcode.",
    },
    {
      label: "Grocery lane",
      value: "Restock kitchen",
      note: "Picnic-style apps and supermarket delivery bring staples on booked slots.",
    },
    {
      label: "True total",
      value: "Fees + tip",
      note: "Delivery fee, service charge, minimums and tip prompts change the euro story.",
    },
    {
      label: "Coverage",
      value: "Postcode check",
      note: "Availability is local — never assume city-wide service from a brand name alone.",
    },
    {
      label: "Best fit nights",
      value: "Rain / jet lag / busy",
      note: "Delivery shines when cooking cost is time and energy — not every calm Sunday.",
    },
    {
      label: "Not this page",
      value: "Meal-kit boxes",
      note: "Subscription ingredient boxes live on Meal kits — short-orient and cross-link only.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Takeaway apps",
      body: "Restaurant platforms for cooked meals — menus, ETAs and fees by kitchen.",
    },
    {
      title: "Grocery delivery",
      body: "Supermarket and app-based delivery to restock staples on booked slots.",
    },
    {
      title: "Fees & minimums",
      body: "Delivery fees, service charges and small-order rules at checkout.",
    },
    {
      title: "Tipping norms",
      body: "Modest Dutch norms vs loud in-app tip prompts — decide before tapping.",
    },
    {
      title: "Coverage checks",
      body: "Postcode and address reality before bookmarking a favourite service.",
    },
    {
      title: "When to use",
      body: "Rain, jet lag and busy weeks vs calm shop or meal-kit nights.",
    },
  ] satisfies TipCard[],
  restaurantPlatforms: {
    heading: "Restaurant takeaway platforms",
    intro:
      "Dutch restaurant delivery usually runs through aggregator platforms and restaurant-owned channels. Think Thuisbezorgd-style orientation: browse kitchens near your postcode, compare ETAs and fees, then receive cooked food — not groceries.",
    paragraphs: [
      "Platforms surface restaurants that deliver to your address. Opening hours, minimum orders, delivery fees and kitchen capacity all change by neighbourhood and evening. English UX is common in larger cities — still verify allergens, spice levels and address details.",
      "Restaurant takeaway is a convenience trade for time and energy. It rarely beats supermarket cooking on euros for calm weeks. Model it as a tool for rainy nights, jet lag and admin-heavy evenings — not as your default grocery system.",
      "This page does not rank platforms or restaurants. Soft affiliate links below focus on grocery-delivery modelling tools already in the catalogue — not invented restaurant-app affiliate programmes.",
    ],
    rows: [
      {
        lever: "Aggregator apps",
        whatItMeans: "One app lists many restaurants that deliver to your postcode.",
        tip: "Compare fee lines across kitchens — the cheapest menu can win on fees.",
      },
      {
        lever: "Direct restaurant channels",
        whatItMeans: "Some kitchens deliver via their own site or phone.",
        tip: "Useful for favourites once you know the kitchen — still confirm fees.",
      },
      {
        lever: "ETA reality",
        whatItMeans: "Quoted times stretch on Friday nights and stormy weather.",
        tip: "Order earlier than hunger peaks when the evening is busy.",
      },
      {
        lever: "Menu vs checkout",
        whatItMeans: "Item prices exclude delivery fee, service charge and tip prompts.",
        tip: "Open the full total before confirming — every time at first.",
      },
      {
        lever: "English UX",
        whatItMeans: "Larger platforms often offer English interfaces.",
        tip: "Still read allergen notes and spice descriptions carefully.",
      },
      {
        lever: "Not a meal kit",
        whatItMeans: "Takeaway arrives cooked; kits arrive as ingredients to cook.",
        tip: "Open Meal kits when you want subscription dinner boxes.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Cooked meal lane",
        body: "Takeaway solves “dinner now” — not weekly staples or homeland pantry depth.",
      },
      {
        title: "Local, not national",
        body: "Your postcode decides which kitchens appear — city buzz does not guarantee your street.",
      },
      {
        title: "No awards podium",
        body: "This guide avoids fake “best delivery app” rankings on purpose.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Meal kits",
        href: MEAL_KITS_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription ingredient boxes when you want cooked-at-home dinners with less planning.",
      },
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "When the question is lowering the whole food bill, not modelling takeaway nights alone.",
      },
      {
        label: "Essential apps",
        href: LIVING_ESSENTIAL_APPS_PATH,
        status: "live",
        description: "Where delivery apps fit in a newcomer install order.",
      },
    ] satisfies GuideLink[],
  },
  groceryDelivery: {
    heading: "Grocery delivery patterns",
    intro:
      "Grocery delivery restocks the kitchen: app-based services like Picnic and supermarket delivery such as AH Bezorgen. The job is staples and weekly shopping convenience — not restaurant dinners.",
    paragraphs: [
      "Expect booked delivery slots, basket minimums, and catalogues that mirror supermarket ranges more than restaurant menus. Coverage is postcode-specific; new addresses and temporary housing need a fresh check.",
      "Grocery delivery can beat a stressful shop after a long commute — and still lose to discounters on calm weeks if fees and substitutions add up. Soft Picnic and Albert Heijn links below are modelling tools for this lane.",
      "In-store system depth (hours, self-scan, bags) lives on Dutch supermarkets. Saving tactics live on Cheap groceries. Stay here for delivery-slot orientation.",
    ],
    rows: [
      {
        lever: "App-based grocery",
        whatItMeans: "Picnic-style delivery with app catalogue and fixed slots.",
        tip: "Check postcode and next available slot before planning the week.",
      },
      {
        lever: "Supermarket delivery",
        whatItMeans: "AH Bezorgen and similar — order from a full supermarket range.",
        tip: "Useful when you already know the brand’s private-label staples.",
      },
      {
        lever: "Slot windows",
        whatItMeans: "Booked arrival windows instead of “asap” courier ETAs.",
        tip: "Align slots with work-from-home or neighbour handoff reality.",
      },
      {
        lever: "Basket minimums",
        whatItMeans: "Small baskets can trigger higher fees or blocked checkout.",
        tip: "Batch staples — tiny top-ups often cost more than they save.",
      },
      {
        lever: "Substitutions",
        whatItMeans: "Out-of-stock items may be replaced or dropped.",
        tip: "Review the delivery note and adjust the next order.",
      },
      {
        lever: "Meal-kit neighbour",
        whatItMeans: "Kits deliver portioned dinner ingredients on a subscription.",
        tip: "Different product — deepen on Meal kits, not here.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Restock, don’t dine out",
        body: "Grocery delivery fills the fridge; takeaway fills tonight’s plate.",
      },
      {
        title: "Slots beat wishful thinking",
        body: "A perfect basket fails if nobody can receive the tote.",
      },
      {
        title: "Soft CTAs ≠ rankings",
        body: "Picnic and AH links below are optional tools — not a podium.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Dutch supermarkets",
        href: DUTCH_SUPERMARKETS_PATH,
        status: "live",
        description: "How the supermarket system works when you shop in person.",
      },
      {
        label: "Best supermarkets",
        href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
        status: "live",
        description: "Choosing a supermarket fit alongside delivery habits.",
      },
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Errands, self-checkout and household rhythms around the weekly shop.",
      },
      {
        label: "Meal kits",
        href: MEAL_KITS_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription dinner boxes when grocery delivery still leaves planning hard.",
      },
    ] satisfies GuideLink[],
  },
  fees: {
    heading: "Fees, minimums and service charges",
    intro:
      "Menu and catalogue prices are only the start. Delivery fees, service charges, small-order rules and tip prompts decide whether delivery still beats cooking or shopping that night.",
    paragraphs: [
      "Restaurant platforms often show a delivery fee plus a service or platform charge. Grocery delivery may use slot fees, membership-style pricing or basket minimums. Promos change — model the regular total after the first order.",
      "Write the full checkout total once for takeaway and once for grocery delivery in your postcode. That notepad beats any viral “cheap delivery” tip thread.",
    ],
    rows: [
      {
        lever: "Delivery fee",
        whatItMeans: "Charge to bring the order to your address.",
        tip: "Compare across kitchens and slots — it is often the swing factor.",
      },
      {
        lever: "Service / platform charge",
        whatItMeans: "Extra line for using the app or service.",
        tip: "Read the label — it is not automatically a courier tip.",
      },
      {
        lever: "Small-order minimum",
        whatItMeans: "Baskets below a threshold pay more or cannot check out.",
        tip: "Batch staples or share an order when minimums bite.",
      },
      {
        lever: "Promo stickers",
        whatItMeans: "First-order discounts that expire.",
        tip: "Model week-two pricing before locking a habit.",
      },
      {
        lever: "Peak surcharges",
        whatItMeans: "Busy evenings and weather can raise fees or ETAs.",
        tip: "Order earlier or switch to grocery slots / cooking.",
      },
      {
        lever: "True euro total",
        whatItMeans: "Items + fees + tip prompt = what you actually pay.",
        tip: "Screenshot or note the checkout once — teach yourself the pattern.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Fee blindness is expensive",
        body: "A “€12 meal” can become €20 after fees and tip prompts.",
      },
      {
        title: "Batch beats drip orders",
        body: "Two tiny orders often cost more than one planned basket.",
      },
      {
        title: "Cheap owns saving depth",
        body: "Open Cheap groceries when the whole food bill needs a system reset.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cheap groceries",
        href: CHEAP_GROCERIES_NETHERLANDS_PATH,
        status: "live",
        description: "Discounters, offers, private label and waste tactics for the wider bill.",
      },
      {
        label: "Cost of living",
        href: COST_OF_LIVING_PATH,
        status: "live",
        description: "Place delivery spend in the wider budget picture.",
      },
      {
        label: "Saving money",
        href: SAVING_MONEY_PATH,
        status: "live",
        description: "Broader saving habits beyond food delivery nights.",
      },
    ] satisfies GuideLink[],
  },
  tipping: {
    heading: "Tipping and service norms",
    intro:
      "Dutch tipping culture is usually more modest than many expats expect from home. Delivery apps often show loud tip prompts anyway — decide your approach before checkout so the prompt does not surprise you.",
    paragraphs: [
      "In many Dutch everyday contexts, service is included and tips are optional thank-yous rather than mandatory percentages. Delivery apps may still suggest tip amounts — that is a product design choice, not a legal requirement to tip a fixed share.",
      "Service charges on a bill are not always the same as a courier tip. Read the label. Cash tips are less common when payment is fully in-app. Choose a calm personal rule (for example optional small tip on bad weather nights) instead of guessing under time pressure.",
    ],
    rows: [
      {
        lever: "Modest norms",
        whatItMeans: "Tips are often optional and smaller than some home-country habits.",
        tip: "Do not assume US-style percentage pressure applies by default.",
      },
      {
        lever: "App tip prompts",
        whatItMeans: "Suggested tip buttons appear at checkout.",
        tip: "Decide before opening the prompt — skip or choose deliberately.",
      },
      {
        lever: "Service charge label",
        whatItMeans: "A line item that may fund the platform, not the rider.",
        tip: "Read the wording; ask the app help centre if unclear.",
      },
      {
        lever: "Weather & effort nights",
        whatItMeans: "Storms and long stairs can motivate an optional tip.",
        tip: "Keep it a conscious choice, not guilt from the UI.",
      },
      {
        lever: "Shared flats",
        whatItMeans: "Who tips when the order is split.",
        tip: "Agree a house rule once — avoid checkout arguments.",
      },
      {
        lever: "Restaurant vs grocery",
        whatItMeans: "Tip prompts differ by product and app.",
        tip: "Model each lane separately on your notepad.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Prompt ≠ obligation",
        body: "A suggested tip button is UX — your choice still matters.",
      },
      {
        title: "Read the line items",
        body: "Service charge and tip are different concepts — do not double-pay blindly.",
      },
      {
        title: "Calm personal rule",
        body: "A simple house rule beats improvising under hunger.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "Debit and contactless norms that overlap with delivery checkouts.",
      },
      {
        label: "Daily life",
        href: LIVING_DAILY_LIFE_PATH,
        status: "live",
        description: "Everyday Dutch routines around shops and services.",
      },
    ] satisfies GuideLink[],
  },
  whenToUse: {
    heading: "When delivery beats cooking or shopping",
    intro:
      "Delivery wins when time, energy or weather make cooking or a supermarket trip expensive. It loses when calm weeks, budget resets or specialty ingredient hunts matter more.",
    paragraphs: [
      "Use takeaway for “dinner now” nights. Use grocery delivery for restocking without a store trip. Use meal kits when you want planned cooked-at-home dinners with less recipe work. Use in-store shops when euros and browsing matter most.",
      "Specialty homeland ingredients still belong to International, Asian, Turkish, Indian and South African guides — delivery apps rarely replace those aisles completely.",
    ],
    rows: [
      {
        situation: "Rainy night + empty fridge",
        useThis: "Restaurant takeaway",
        why: "Cooked meal without leaving home when energy is low.",
        watchOut: "Fees and tip prompts — check the full total.",
      },
      {
        situation: "Jet lag / first arrival week",
        useThis: "Takeaway + one grocery delivery",
        why: "Reduce decisions while admin and sleep catch up.",
        watchOut: "Do not lock a daily takeaway habit after week one.",
      },
      {
        situation: "Busy project week",
        useThis: "Grocery delivery staples + 1–2 takeaways",
        why: "Protect cooking capacity without living on restaurants.",
        watchOut: "Batch grocery slots; avoid drip takeaway orders.",
      },
      {
        situation: "Calm Sunday + budget focus",
        useThis: "In-store shop (Cheap / Dutch tactics)",
        why: "Usually wins on euros when you have time and energy.",
        watchOut: "Impulse aisles — keep a list.",
      },
      {
        situation: "Want planned dinners, less thinking",
        useThis: "Meal kits",
        why: "Subscription boxes solve planning; still require cooking.",
        watchOut: "Skip deadlines — deepen on Meal kits.",
      },
      {
        situation: "Homeland pantry craving",
        useThis: "Specialty shops (+ optional delivery of staples)",
        why: "Toko and specialty lanes own depth delivery apps lack.",
        watchOut: "Do not expect full homeland ranges on mainstream grocery apps.",
      },
    ] satisfies DecisionRow[],
    cards: [
      {
        title: "Match the night",
        body: "The right lane depends on energy and euros — not a permanent favourite app.",
      },
      {
        title: "Combine tools",
        body: "Most households mix takeaway, grocery delivery and shops across a month.",
      },
      {
        title: "Cross-link specialty",
        body: "International / Asian / Turkish / Indian / South African guides own ingredient depth.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Meal kits",
        href: MEAL_KITS_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription boxes when planned home cooking is the job.",
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
    ] satisfies GuideLink[],
  },
  coverage: {
    heading: "Postcode and coverage checks",
    intro:
      "Coverage is local. A service that works for a colleague across town may not reach your street — and restaurant maps differ from grocery-delivery maps.",
    paragraphs: [
      "Enter your postcode before trusting social-media recommendations. New-build addresses, campus housing and temporary stays can fail slot or restaurant checks even inside a large city.",
      "Re-check after you move. Keep a backup plan: a nearby supermarket walk, a different platform, or a meal-kit week when coverage gaps appear.",
    ],
    rows: [
      {
        lever: "Postcode first",
        whatItMeans: "Apps filter kitchens and slots by address.",
        tip: "Test coverage the day you arrive — not the night you are starving.",
      },
      {
        lever: "Restaurant vs grocery maps",
        whatItMeans: "Takeaway availability ≠ grocery-delivery availability.",
        tip: "Check both lanes if you rely on delivery for different jobs.",
      },
      {
        lever: "Temporary housing",
        whatItMeans: "Airbnb and short stays may have odd buzzers and door codes.",
        tip: "Add delivery notes; meet the courier if access is complex.",
      },
      {
        lever: "New-build streets",
        whatItMeans: "Maps lag behind construction.",
        tip: "If checkout fails, try a nearby known address only with permission — better to call support.",
      },
      {
        lever: "Move week",
        whatItMeans: "Old favourites stop working at the new postcode.",
        tip: "Re-run coverage checks as part of your moving checklist.",
      },
      {
        lever: "Backup plan",
        whatItMeans: "A walkable supermarket or meal-kit option when apps fail.",
        tip: "Know one calm alternative before stormy Friday nights.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Local beats viral",
        body: "City-wide buzz does not guarantee your street is covered.",
      },
      {
        title: "Two maps",
        body: "Restaurant and grocery coverage are independent — test both.",
      },
      {
        title: "Notes for couriers",
        body: "Floor, buzzer and gate codes prevent cold food and missed slots.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Shopping & groceries",
        href: SHOPPING_GROCERIES_PATH,
        status: "live",
        description: "Walkable errand systems when delivery coverage is thin.",
      },
      {
        label: "Survival Guide",
        href: LIVING_SURVIVAL_GUIDE_PATH,
        status: "live",
        description: "First-days living orientation including practical backups.",
      },
    ] satisfies GuideLink[],
  },
  payments: {
    heading: "Payments and app overlap",
    intro:
      "Delivery checkouts usually reuse everyday Dutch payment habits — iDEAL, debit cards and contactless — alongside in-app wallets. The surprise is less “how to pay” and more address details and shared-flat rules.",
    paragraphs: [
      "If you already shop with a Dutch debit card or iDEAL, most delivery apps will feel familiar. Corporate cards, foreign cards and shared accounts can still fail — have a backup method ready.",
      "Save the delivery address carefully. Apartment buzzers, company reception desks and temporary stays need clear notes. Open Payments basics and Essential apps when the wider payment and install-order story is still new.",
    ],
    rows: [
      {
        lever: "iDEAL & debit",
        whatItMeans: "Common Dutch online and app checkout methods.",
        tip: "Confirm your bank supports the method the app offers.",
      },
      {
        lever: "Contactless cards",
        whatItMeans: "Physical cards still matter for some restaurant or courier flows.",
        tip: "Keep a working debit card even if you prefer app wallets.",
      },
      {
        lever: "Address book",
        whatItMeans: "Saved addresses with floor and buzzer notes.",
        tip: "Update on move day — old addresses cause missed deliveries.",
      },
      {
        lever: "Shared flats",
        whatItMeans: "One account vs reimbursements.",
        tip: "Agree who orders and how tips/fees are split.",
      },
      {
        lever: "Foreign cards",
        whatItMeans: "Some apps prefer Dutch banking rails.",
        tip: "Test a small order early; keep iDEAL ready after you bank locally.",
      },
      {
        lever: "Receipts",
        whatItMeans: "Email or in-app history for expenses.",
        tip: "Useful for employers or settling house shares.",
      },
    ] satisfies TacticRow[],
    cards: [
      {
        title: "Same rails, new prompts",
        body: "Payment methods look familiar; tip and fee lines are the new learning.",
      },
      {
        title: "Address detail wins",
        body: "Buzzer notes prevent more failed deliveries than payment method debates.",
      },
      {
        title: "Apps install order",
        body: "Essential apps explains where delivery tools sit for newcomers.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Payments basics",
        href: PAYMENTS_BASICS_PATH,
        status: "live",
        description: "Debit, contactless and everyday Dutch payment norms.",
      },
      {
        label: "Essential apps",
        href: LIVING_ESSENTIAL_APPS_PATH,
        status: "live",
        description: "Newcomer install order including grocery and delivery tools.",
      },
    ] satisfies GuideLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Grocery delivery tools to explore",
    subtitle:
      "Soft CTAs for established grocery-delivery patterns when you are modelling restaurant takeaway against supermarket delivery and meal-kit alternatives. This block is not a ranking of delivery apps or restaurants.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for grocery delivery modelling — Picnic first, then AH Bezorgen, then HelloFresh as a meal-kit comparison — not pay-to-rank placement unless a link is explicitly labelled as sponsored. We do not invent restaurant-platform affiliates here.",
    placementId: "nl-living-food-delivery-support-providers",
    analyticsPageContext: "food-delivery-netherlands-recommended-options",
    categoryLinks: [
      { href: MEAL_KITS_NETHERLANDS_PATH, label: "Meal kits guide" },
      { href: CHEAP_GROCERIES_NETHERLANDS_PATH, label: "Cheap groceries tactics" },
      { href: BEST_SUPERMARKETS_NETHERLANDS_PATH, label: "Best supermarket fit" },
      { href: DUTCH_SUPERMARKETS_PATH, label: "Dutch supermarket system" },
      { href: SHOPPING_GROCERIES_PATH, label: "Shopping & groceries" },
    ],
    browseLabel: "More grocery context: ",
  },
  scenarios: {
    heading: "Common food-delivery scenarios",
    intro: "Match your week to a calm first experiment — then deepen with fee notes and coverage checks.",
    rows: [
      {
        situation: "Rainy Friday after a long commute",
        approach: "One takeaway order with fees read in advance; grocery staples already in the fridge from earlier.",
        firstStep: "Check ETA and full checkout total before confirming.",
      },
      {
        situation: "Jet-lag first week",
        approach: "Takeaway for a couple of nights plus one grocery-delivery slot for breakfast staples.",
        firstStep: "Test postcode coverage on day one; save address notes.",
      },
      {
        situation: "Busy project week",
        approach: "Grocery delivery mid-week; limit takeaway to one or two high-need nights.",
        firstStep: "Book the grocery slot when the calendar still has energy.",
      },
      {
        situation: "Student shared flat",
        approach: "Shared grocery delivery with labelled shelves; takeaway only with a split rule.",
        firstStep: "Agree who pays fees and tips before the first group order.",
      },
      {
        situation: "Family Sunday restock",
        approach: "Grocery delivery or in-store shop; save takeaway for true low-energy nights.",
        firstStep: "Compare slot fee vs a calm supermarket run.",
      },
      {
        situation: "Travel return night",
        approach: "Takeaway once; schedule grocery delivery for the next morning if coverage allows.",
        firstStep: "Confirm fridge space and address still correct after the trip.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Fee blindness at checkout",
      body: "Focusing on menu prices while delivery fees and service charges quietly double the bill.",
      advice: "Read every line at checkout for the first month — note the true total once per lane.",
    },
    {
      title: "Tip confusion from loud prompts",
      body: "Assuming mandatory high percentages because the app suggests them.",
      advice: "Decide a calm personal tipping rule before the prompt appears; read service-charge labels.",
    },
    {
      title: "Over-ordering for “value”",
      body: "Padding baskets to hit free delivery or share-plate deals you will not finish.",
      advice: "Order what you will eat; waste is part of the true cost.",
    },
    {
      title: "Skipping the postcode check",
      body: "Bookmarking apps from friends in another neighbourhood that do not cover your street.",
      advice: "Enter your postcode before relying on any service for a critical night.",
    },
    {
      title: "Treating takeaway as all groceries",
      body: "Living on restaurant delivery while staples, breakfast and cleaning products go missing.",
      advice: "Keep a grocery-delivery or shop rhythm for staples; use takeaway for specific nights.",
    },
    {
      title: "Ignoring meal-kit and shop alternatives",
      body: "Forcing delivery apps to solve planning and budget problems they do not own.",
      advice: "Open Meal kits for subscription dinners and Cheap / Dutch guides for in-store systems.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "First-order food-delivery checklist",
    intro: "Use this before your first takeaway or grocery-delivery order so modelling stays calm and comparable.",
    items: [
      "Night’s job defined (cooked meal now / restock kitchen / cook from shops)",
      "Postcode entered and coverage confirmed for the lane you need",
      "Address, floor and buzzer notes saved",
      "Delivery fee, service charge and minimum read at checkout",
      "Tip approach decided before the in-app prompt",
      "Payment method tested (iDEAL / debit / backup)",
      "Allergen or dietary notes checked where relevant",
      "One-week notepad ready (takeaway vs grocery delivery vs supermarket)",
      "Meal kits bookmarked if subscription boxes are the alternative",
      "Cheap groceries bookmarked if the wider bill needs tactics",
      "Backup walkable supermarket identified if apps fail",
      "Payments / Essential apps bookmarked if Dutch checkout still feels new",
    ],
  },
  howTo: {
    heading: "How to trial food delivery calmly in one week",
    steps: [
      {
        name: "Define the night’s job",
        text: "Write whether you need a cooked meal now, a kitchen restock, or a cook-from-shops evening. Keep meal kits as a separate alternative when planning matters more than speed.",
      },
      {
        name: "Check coverage and fees",
        text: "Enter your postcode on a restaurant platform and a grocery-delivery service. Read delivery fees, service charges and minimums before hunger peaks.",
      },
      {
        name: "Run two short experiments",
        text: "Place one takeaway order and one grocery-delivery order. Note ETAs, handoff friction, substitutions and the full checkout totals including tip decisions.",
      },
      {
        name: "Compare with cooking and shopping",
        text: "Put the two delivery totals next to a supermarket cook night and, if relevant, a meal-kit dinner. Decide which nights each lane deserves.",
      },
      {
        name: "Keep a calm habit",
        text: "Use delivery deliberately for rain, jet lag and busy weeks. Pause habitual takeaway when budget or energy patterns change — then lean on Cheap, Dutch or Meal kits guides as needed.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to try food delivery in the Netherlands as an expat",
    description:
      "Practical steps for expats to trial restaurant takeaway and grocery delivery in the Netherlands — fees, tipping norms, postcode coverage and a calm first-order checklist — without relying on fake app rankings.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What is the best food delivery app in the Netherlands?",
      a: "There is no universal best app. Fit depends on your postcode, whether you need restaurant takeaway or grocery delivery, fees, ETAs and household habits. This guide avoids fake awards — run a short personal experiment in your postcode instead.",
    },
    {
      q: "How is grocery delivery different from restaurant takeaway?",
      a: "Takeaway delivers cooked meals from restaurants. Grocery delivery restocks staples from supermarket-style catalogues on booked slots. They solve different nights and have different fee patterns.",
    },
    {
      q: "Do I need to tip food delivery couriers in the Netherlands?",
      a: "Tips are usually optional and Dutch everyday norms are often more modest than some expats expect. Apps may still show tip prompts — decide deliberately, and read whether a service charge is separate from a tip. For deeper etiquette across restaurants, cafés and delivery, see the Tipping guide.",
    },
    {
      q: "Why are delivery fees so high?",
      a: "Delivery fee, service/platform charges, small-order rules and tip prompts stack on top of menu prices. Always read the full checkout total — promos can hide the regular pattern after week one.",
    },
    {
      q: "Does Picnic or AH Bezorgen cover my address?",
      a: "Coverage is postcode-specific. Enter your address in each service — city-wide reputation does not guarantee your street. Re-check after you move.",
    },
    {
      q: "How is this different from Meal kits?",
      a: "Meal kits are subscription boxes of ingredients you cook. This page owns restaurant takeaway and grocery delivery. Cross-link Meal kits when you want planned home cooking with less recipe work.",
    },
    {
      q: "How is this different from Cheap groceries or Dutch supermarkets?",
      a: "Cheap focuses on spending less across shops. Dutch explains the supermarket system. This page owns delivery lanes — fees, tipping, coverage and when delivery beats cooking or shopping.",
    },
    {
      q: "Do you rank delivery apps?",
      a: "No. Soft grocery-provider links are optional modelling tools (with affiliate/referral disclosure where relevant), not a podium of winners. Restaurant platforms are oriented without invented affiliate entries.",
    },
  ],
  relatedGuides: [
    {
      label: "Restaurants",
      href: RESTAURANTS_NETHERLANDS_PATH,
      status: "live",
      description: "Sit-down dining culture — reservations, terraces, bills and dietary norms.",
    },
    {
      label: "Tipping",
      href: TIPPING_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch tipping norms for dining, delivery and everyday service.",
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
      description: "Debit and contactless norms for shops and apps.",
    },
    {
      label: "Cost of living",
      href: COST_OF_LIVING_PATH,
      status: "live",
      description: "Delivery spend in the wider budget picture.",
    },
    {
      label: "Saving money",
      href: SAVING_MONEY_PATH,
      status: "live",
      description: "Broader saving habits beyond delivery nights.",
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
      description: "Everyday routines around shopping and payments.",
    },
  ] satisfies GuideLink[],
  foodHub: {
    heading: "Food & daily groceries hub",
    intro:
      "Keep delivery modelling connected to meal kits, saving tactics, supermarket fit, the system primer, specialty lanes, errands and wider Living guides.",
    cards: [
      {
        label: "Food delivery",
        href: FOOD_DELIVERY_NETHERLANDS_PATH,
        status: "live",
        description: "This guide — takeaway apps, grocery delivery, fees and tipping.",
      },
      {
        label: "Restaurants",
        href: RESTAURANTS_NETHERLANDS_PATH,
        status: "live",
        description: "Sit-down dining culture for expats.",
      },
      {
        label: "Tipping",
        href: TIPPING_NETHERLANDS_PATH,
        status: "live",
        description: "Tipping norms depth across dining and delivery.",
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
      description: "Learn sit-down dining culture when you want a table night.",
    },
    {
      label: "Tipping",
      href: TIPPING_NETHERLANDS_PATH,
      status: "live",
      description: "Deepen tip norms beyond delivery app prompts.",
    },
    {
      label: "Meal kits",
      href: MEAL_KITS_NETHERLANDS_PATH,
      status: "live",
      description: "Model subscription dinner boxes as an alternative to habitual takeaway.",
    },
    {
      label: "Cheap groceries",
      href: CHEAP_GROCERIES_NETHERLANDS_PATH,
      status: "live",
      description: "Protect the wider food bill with supermarket saving tactics.",
    },
    {
      label: "Best supermarkets",
      href: BEST_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Match remaining grocery needs to a supermarket fit.",
    },
    {
      label: "Dutch supermarkets",
      href: DUTCH_SUPERMARKETS_PATH,
      status: "live",
      description: "Learn formats, hours, bags and self-scan orientation.",
    },
    {
      label: "Shopping & groceries",
      href: SHOPPING_GROCERIES_PATH,
      status: "live",
      description: "Errand how-to around the weekly shop.",
    },
    {
      label: "International supermarkets",
      href: INTERNATIONAL_SUPERMARKETS_NETHERLANDS_PATH,
      status: "live",
      description: "Specialty ingredients delivery apps will not fully cover.",
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
      description: "Place delivery spend in the wider budget.",
    },
  ] satisfies GuideLink[],
  relatedGuidesTips: [
    "Food delivery owns takeaway + grocery delivery; Meal kits owns subscription boxes; Cheap owns saving; Dutch owns the system; specialty pages own homeland depth.",
    "Keep Meal kits linked bidirectionally — different lane, same food cluster.",
    "Soft affiliate tools are not rankings.",
  ],
  foodHubTips: [
    "Use the hub to jump between delivery, kits, supermarket and specialty lanes.",
    "Keep Living and money guides linked when budget stress is wider than dinner nights.",
  ],
  exploreNextTips: [
    "Pick one next guide based on your gap: meal kits, saving, supermarket fit, or specialty ingredients.",
    "Revisit delivery habits after rainy season or after you move — coverage changes.",
  ],
  officialSources: [
    {
      label: "Thuisbezorgd",
      href: "https://www.thuisbezorgd.nl/",
      description: "Example restaurant delivery platform — verify coverage, fees and restaurant list for your postcode.",
    },
    {
      label: "Picnic",
      href: "https://www.picnic.app/",
      description: "App-based grocery delivery — verify postcode coverage, slots and basket rules.",
    },
    {
      label: "Albert Heijn Bezorgen",
      href: "https://www.ah.nl/bonussen/bezorgen",
      description: "Supermarket delivery orientation — verify slots, fees and current terms.",
    },
    {
      label: "HelloFresh Netherlands",
      href: "https://www.hellofresh.nl/",
      description: "Example meal-kit alternative when comparing delivery modes — deepen on Meal kits.",
    },
    {
      label: "Consumentenbond",
      href: "https://www.consumentenbond.nl/",
      description: "Independent consumer orientation on products and services when available.",
    },
  ],
  disclosure:
    "General orientation only — not financial, shopping or dietary advice and not a ranking of delivery apps or restaurants. Fees, coverage, service charges and tip prompts change. Some outbound links may be affiliate or referral links; if you use them, we may earn a commission at no extra cost to you. Verify current terms in each app before you order.",
};

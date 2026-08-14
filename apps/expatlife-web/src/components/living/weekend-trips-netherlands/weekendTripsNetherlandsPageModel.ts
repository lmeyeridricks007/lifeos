import {
  BIKE_SHARING_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LIVING_HUB_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  WEEKEND_TRAVEL_NETHERLANDS_PATH,
} from "@/src/components/living/ov-chipkaart-netherlands/ovChipkaartNetherlandsPageModel";
import { LIVING_SURVIVAL_GUIDE_PATH, LIVING_WEATHER_PATH } from "@/src/components/living/livingPillarContent";
import { MAKING_DUTCH_FRIENDS_PATH } from "@/src/components/life/dutchHumourPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Weekend & Lifestyle Cluster — lead PATH exports. */
export const WEEKEND_TRIPS_NETHERLANDS_PATH = "/netherlands/living/weekend-trips-netherlands/" as const;
export const NATIONAL_PARKS_NETHERLANDS_PATH = "/netherlands/living/national-parks-netherlands/" as const;
export const HIKING_NETHERLANDS_PATH = "/netherlands/living/hiking-netherlands/" as const;
export const MUSEUMS_NETHERLANDS_PATH = "/netherlands/living/museums-netherlands/" as const;
export const HIDDEN_GEMS_NETHERLANDS_PATH = "/netherlands/living/hidden-gems-netherlands/" as const;
export const BEACH_TOWNS_NETHERLANDS_PATH = "/netherlands/living/beach-towns-netherlands/" as const;
export const CASTLES_NETHERLANDS_PATH = "/netherlands/living/castles-netherlands/" as const;
export const ROAD_TRIPS_NETHERLANDS_PATH = "/netherlands/living/road-trips-netherlands/" as const;
export const DAY_TRIPS_NETHERLANDS_PATH = "/netherlands/living/day-trips-netherlands/" as const;

export {
  BIKE_SHARING_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LIVING_HUB_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
  LIVING_WEATHER_PATH,
  MAKING_DUTCH_FRIENDS_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  WEEKEND_TRAVEL_NETHERLANDS_PATH,
};

export const FAMILY_ACTIVITIES_NETHERLANDS_PATH = "/netherlands/family/family-activities-netherlands/" as const;

export type LifestyleLink = {
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
export type ComparisonRow = { topic: string; whatToCheck: string; tip: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "weekend-trips-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const weekendTripsNetherlandsPage = {
  slug: "weekend-trips-netherlands",
  path: WEEKEND_TRIPS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: LIVING_SURVIVAL_GUIDE_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(WEEKEND_TRIPS_NETHERLANDS_PATH) ?? "2026-10-12",
  seo: {
    title: "Weekend trips in the Netherlands | Complete Guide for Expats",
    description:
      "Weekend trip ideas for expats in the Netherlands: city, coast and nature getaways, when to go, packing culture, how to choose a vibe, and calm planning — with links to Weekend travel for OV transport.",
    keywords: [
      "weekend trips Netherlands",
      "weekend getaway Netherlands",
      "day trip Netherlands",
      "coast weekend Netherlands",
      "city weekend Netherlands",
      "nature weekend Netherlands",
      "expat weekend ideas Netherlands",
      "Dutch weekend trip",
      "Netherlands short break",
      "weekend away Netherlands expats",
      "when to go Netherlands weekend",
      "Dutch leisure weekend planning",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Weekend & lifestyle",
    pageTitle: "Weekend trips in the Netherlands",
    subtitle:
      "Destination ideas and weekend lifestyle planning for expats: city, coast and nature getaways, when to go, packing culture, and how to choose a vibe — not an OV ticket deep-dive.",
    primaryCta: { label: "Pick a vibe", href: "#destinations" },
    secondaryCta: { label: "Weekend checklist", href: "#checklist" },
    chips: ["City weekends", "Coast", "Nature", "When to go", "Packing culture"],
    disclaimer:
      "General lifestyle orientation only — not travel, booking or financial advice and not a ranking of destinations, hotels or tour operators. Opening hours, weather and events change. Verify planners, lodging and park pages before you go. For trains and OV, open Weekend travel.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch weekend morning: multicultural expat friends with light day bags on a bike-friendly canal quay overlooking brick gables and soft daylight water, reassuring leisure mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#culture", label: "Dutch weekends" },
    { href: "#destinations", label: "Destinations" },
    { href: "#seasons", label: "When to go" },
    { href: "#planning", label: "Plan a weekend" },
    { href: "#nature", label: "Nature weekends" },
    { href: "#packing", label: "Packing" },
    { href: "#recommended-options", label: "Recommended" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#lifestyle-hub", label: "Hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Weekend Trips After Arrival — four building blocks: choose a vibe, pick a destination pattern, plan transport lightly, pack for Dutch weather — Weekend Trip Checklist rail on the right, Dutch canal and skyline band and ExpatLife brand footer.",
      "Four habits cover most first leisure weekends: vibe, destination, transport link, packing."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of weekend trips in the Netherlands — vibe first, destination patterns, when to go, planning flow, nature short-orient, packing culture — Dutch leisure skyline band and ExpatLife brand footer.",
      "Six building blocks explain almost every first weekend-trip question for newcomers."
    ),
    culture: visual(
      "culture",
      "Premium culture board — short Dutch getaways, Friday planning habit, Sunday return calm, café and market leisure — kitchen-table scene with Weekend culture notes rail and ExpatLife brand footer.",
      "Dutch weekends often favour short, well-planned getaways over marathon itineraries."
    ),
    destinations: visual(
      "destinations",
      "Premium destination-pattern board — city culture weekends, North Sea coast, inland nature, islands lightly — map-style cards with Pattern notes rail, Dutch water landscape and ExpatLife brand footer.",
      "Choose a pattern first — then deepen transport on Weekend travel."
    ),
    seasons: visual(
      "seasons",
      "Premium when-to-go calendar board — spring blossom, summer coast, autumn colours, winter city lights, holiday crowding notes — desk calendar scene with Season cues rail and ExpatLife brand footer.",
      "Match vibe to season and check Weather — holidays change crowds."
    ),
    planning: visual(
      "planning",
      "Premium planning flow board — vibe to destination to transport to lodging culture — calm planning desk with Weekend planner rail, NS lightly noted, and ExpatLife brand footer.",
      "Vibe → destination → transport (Weekend travel) → lodging lightly."
    ),
    nature: visual(
      "nature",
      "Premium nature-weekend board — short forest or dune day, Nationale Parken orientation, hiking culture link — dune path scene with Nature next steps rail and ExpatLife brand footer.",
      "Nature weekends start here — deepen on National parks and Hiking."
    ),
    packing: visual(
      "packing",
      "Premium packing-culture board — layers, rain shell, comfortable shoes, light day bag, not OV ticket packing — hallway desk with Packing cues rail and ExpatLife brand footer.",
      "Lifestyle packing beats overpacked suitcases for Dutch weekends."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first weekend after arrival, couple coast overnight, family city day, solo nature reset, friends museum city — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match the weekend shape to energy and company — not a copied influencer list."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — overpacking, ignoring weather, treating this as hotel SEO, skipping transport sibling, marathon itineraries, forgetting Sunday calm — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is vibe mismatch and overplanning — not finding a destination."
    ),
    checklist: visual(
      "checklist",
      "Premium weekend-trips readiness checklist clipboard — vibe chosen, destination pattern picked, Weekend travel opened, seasons checked, packing light, nature siblings noted — Dutch kitchen table with day bag and ExpatLife brand footer.",
      "Use this checklist so your first Dutch weekend trip stays calm."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "One day trip", note: "Before overnight bags" },
    { label: "Choose by", value: "Vibe first", note: "Then destination" },
    { label: "Transport", value: "Weekend travel", note: "OV how-to sibling" },
    { label: "Nature depth", value: "Parks + Hiking", note: "Cluster siblings" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Weekend trips in the Netherlands are often short, low-drama getaways: pick a vibe (city culture, coast, nature, quiet reset), choose a destination pattern, then open Weekend travel for NS and regional OV how-to. Expats who treat the first weekends as practice runs — not marathon itineraries — usually enjoy Dutch leisure culture more.",
    "This page owns destination ideas and weekend lifestyle planning. Weekend travel owns OV tickets, discounts orientation and last mile. National parks and Hiking deepen nature walks. Family activities covers parks and rainy-day ideas with kids. Weather helps you dress for the season. Survival Guide remains the wider living orientation.",
  ],
  introHighlights: [
    "Start with one nearby day trip before overnight bags and hotels.",
    "Choose vibe first — city, coast, nature or quiet — then pick a place.",
    "Open Weekend travel for trains, OV and packing-for-transport depth.",
    "Use National parks and Hiking for nature weekends; Family activities for kid days.",
  ],
  orientationFlowSteps: [
    "Choose a weekend vibe (city, coast, nature, social, quiet reset).",
    "Pick a destination pattern that matches energy and company.",
    "Open Weekend travel for NS/OV, last mile and return timing.",
    "Pack light for Dutch weather, then keep Sunday return calm.",
  ],
  travelFileChecklist: [
    "Weekend vibe written in one sentence",
    "Destination pattern chosen (city / coast / nature / islands lightly)",
    "Weekend travel sibling opened for OV and last mile",
    "Season and Weather checked for layers",
    "Lodging culture decided lightly (day trip vs one night)",
    "Light bag + comfortable shoes packed",
  ],
  introScenarios: [
    {
      situation: "First Saturday after arrival",
      approach: "One nearby city or park day trip — skip ambitious coast-plus-museum stacks.",
      firstStep: "Open destinations and Weekend travel.",
    },
    {
      situation: "Couple wanting a coast overnight",
      approach: "Pick a walkable seaside pattern, then plan return trains early.",
      firstStep: "Open destinations, seasons and Weekend travel.",
    },
    {
      situation: "Family with young kids",
      approach: "Short radius, playground or museum buffer, rainy-day backup.",
      firstStep: "Open Family activities and packing.",
    },
    {
      situation: "Solo nature reset",
      approach: "Forest or dune day with simple loops — deepen trails later.",
      firstStep: "Open nature weekends, then National parks or Hiking.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Vibe mismatch causes more frustration than ‘wrong’ cities.",
    "Dutch weekends often end early Sunday — plan a gentle return.",
    "Transport depth lives on Weekend travel — keep this page on ideas.",
    "Nature deep dives belong on National parks and Hiking.",
  ],
  quickAnswer: {
    heading: "How weekend trips work for expats in the Netherlands",
    summary:
      "Pick a vibe, choose a destination pattern (city, coast, nature or a light island idea), check when-to-go and weather, then use Weekend travel for OV transport. Keep the first weekends short and leave room for Sunday calm.",
    bullets: [
      "Destination ideas and lifestyle planning live on this page.",
      "NS/OV how-to, discounts orientation and last mile live on Weekend travel.",
      "National parks and Hiking deepen nature weekends without ranking trails.",
      "Avoid treating this guide as a hotel or attraction ranking.",
    ],
    note: "If you only open one sibling after this page, open Weekend travel before you buy tickets.",
  },
  snapshotCards: [
    {
      title: "Vibe first",
      body: "City culture, coast air, forest quiet or social catch-up — write the feeling before the place name.",
    },
    {
      title: "Destination patterns",
      body: "Reusable shapes (museum city, beach day, dune walk) beat copying influencer itineraries.",
    },
    {
      title: "When to go",
      body: "Seasons and holidays change crowds and opening hours — Weather helps you dress.",
    },
    {
      title: "Transport sibling",
      body: "Weekend travel owns trains, OV and last mile — link early so return timing stays calm.",
    },
    {
      title: "Nature next steps",
      body: "Short-orient here, then National parks for park orientation and Hiking for walking culture.",
    },
    {
      title: "Packing culture",
      body: "Layers, rain shell and comfortable shoes — lifestyle packing, not suitcase maximalism.",
    },
  ] satisfies TipCard[],
  culture: {
    heading: "How Dutch weekends often feel",
    intro:
      "Many Dutch weekends favour short, well-planned getaways: a Saturday destination, a café or market pause, and a calm Sunday return — not a packed three-city sprint.",
    paragraphs: [
      "Friday evenings often become light planning time: check weather, pick a pattern, and confirm the last useful return. Expats who copy marathon tourist lists often feel behind; locals more often protect recovery time.",
      "Leisure culture mixes outdoor time with indoor cafés when rain arrives. Cycling and short OV hops are normal. Social weekends can include hiking groups or café meetups — deepen social habits on Making Dutch friends when that is the goal.",
    ],
    rows: [
      {
        topic: "Length",
        whatToCheck: "Day trip vs one overnight",
        tip: "Start with day trips until logistics feel easy.",
      },
      {
        topic: "Pace",
        whatToCheck: "One main activity + buffer",
        tip: "Leave room for weather and café pauses.",
      },
      {
        topic: "Sunday",
        whatToCheck: "Return timing and shops",
        tip: "Many places quiet early — plan laundry and rest.",
      },
      {
        topic: "Social vs solo",
        whatToCheck: "Company and energy",
        tip: "Match vibe to people, not FOMO lists.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Short and sweet", body: "A single strong destination beats five rushed stops." },
      { title: "Weather-flexible", body: "Indoor backup plans are part of Dutch leisure culture." },
      { title: "Recovery matters", body: "Sunday calm is a feature, not a failed itinerary." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Seasons, rain and dressing cues.",
      },
      {
        label: "Making Dutch friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        status: "live",
        description: "Social weekends and group leisure lightly.",
      },
      {
        label: "Survival Guide",
        href: LIVING_SURVIVAL_GUIDE_PATH,
        status: "live",
        description: "Wider living orientation after arrival.",
      },
    ] satisfies LifestyleLink[],
  },
  destinations: {
    heading: "Destination patterns: cities, coast, nature, islands",
    intro:
      "Think in reusable patterns — not ranked ‘best places’. Patterns help you choose faster and keep transport planning on Weekend travel.",
    paragraphs: [
      "City weekends suit museums, food streets and walkable centres. Coast weekends suit beach walks, dunes and seafood towns when wind is welcome. Nature weekends suit forests, heathland and park edges — deepen on National parks and Hiking. Islands (Wadden lightly) need more timing discipline; treat them as advanced weekends after a few simpler trips.",
      "We do not rank hotels, attractions or tour operators. Use official tourism and park pages for opening hours, and Weekend travel for how to get there by OV.",
    ],
    rows: [
      {
        topic: "City culture",
        whatToCheck: "Walkable centre + one museum or market",
        tip: "Stay near the station hub if overnighting.",
      },
      {
        topic: "North Sea coast",
        whatToCheck: "Wind, tide feel, dune paths",
        tip: "Pack a wind layer even in summer.",
      },
      {
        topic: "Inland nature",
        whatToCheck: "Trail length and toilets",
        tip: "Short loops first; Hiking owns trail culture.",
      },
      {
        topic: "Islands lightly",
        whatToCheck: "Ferry timing and weather windows",
        tip: "Advanced — confirm last returns early.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "City pattern", body: "Culture + cafés + short walks from a hub station." },
      { title: "Coast pattern", body: "Beach or boulevard + dunes + flexible indoor backup." },
      { title: "Nature pattern", body: "Forest or park edge day — deepen on park and hiking siblings." },
      { title: "Social pattern", body: "Friends visit + shared meal town — protect return timing." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV how-to, tickets and last mile.",
      },
      {
        label: "National parks",
        href: NATIONAL_PARKS_NETHERLANDS_PATH,
        status: "live",
        description: "Nationale Parken orientation.",
      },
      {
        label: "Hiking",
        href: HIKING_NETHERLANDS_PATH,
        status: "live",
        description: "Walking and hiking culture.",
      },
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live",
        description: "Kid-friendly leisure ideas.",
      },
    ] satisfies LifestyleLink[],
  },
  seasons: {
    heading: "When to go: seasons, weather and holidays",
    intro:
      "Dutch weekends change with light, wind and holidays. Match vibe to season, then dress with Weather — and expect crowding around school holidays and long weekends.",
    paragraphs: [
      "Spring suits blossom walks and milder city days. Summer suits coast and longer evenings, with wind and crowds. Autumn suits forests and museums. Winter suits city lights, indoor culture and short outdoor loops.",
      "Official holiday calendars and local event pages change year to year. Treat any crowd notes here as orientation only.",
    ],
    rows: [
      {
        topic: "Spring",
        whatToCheck: "Showers and blossom crowds",
        tip: "Layers + indoor café backup.",
      },
      {
        topic: "Summer",
        whatToCheck: "Coast wind and holiday peaks",
        tip: "Start early; protect Sunday return.",
      },
      {
        topic: "Autumn",
        whatToCheck: "Forest colours and mud",
        tip: "Waterproof shoes help nature days.",
      },
      {
        topic: "Winter",
        whatToCheck: "Short daylight and indoor hours",
        tip: "City culture weekends shine.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Weather sibling", body: "Open Weather for rain, wind and dressing habits." },
      { title: "Holiday buffers", body: "School holidays and lange weekenden change trains and beaches." },
      { title: "Light matters", body: "Winter day trips need earlier returns." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Seasons and dressing for NL weather.",
      },
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "Return trains and OV timing.",
      },
    ] satisfies LifestyleLink[],
  },
  planning: {
    heading: "Planning a weekend: vibe → destination → transport → lodging",
    intro:
      "A calm planning order prevents FOMO stacks. Decide how you want the weekend to feel, pick a pattern, then open Weekend travel for how to get there.",
    paragraphs: [
      "Lodging culture for expats is usually light: day trips first, then one night near a walkable hub when you want slower mornings. We do not rank hotels or booking engines — confirm cancellation rules and check-in times on provider sites.",
      "Train discounts and NS trains deepen product math and riding habits when weekends become frequent. Cycling and Bike sharing help local exploration once you arrive.",
    ],
    rows: [
      {
        topic: "1. Vibe",
        whatToCheck: "Energy, company, indoor vs outdoor",
        tip: "Write one sentence before searching places.",
      },
      {
        topic: "2. Destination",
        whatToCheck: "Pattern fit and radius from home",
        tip: "Nearby beats exotic for first weekends.",
      },
      {
        topic: "3. Transport",
        whatToCheck: "OV plan and last useful return",
        tip: "Open Weekend travel — do not invent ticket math here.",
      },
      {
        topic: "4. Lodging",
        whatToCheck: "Day trip vs one night near hub",
        tip: "Walkability beats bargain outskirts for short stays.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Transport sibling", body: "Weekend travel owns NS/OV getaways and last mile." },
      { title: "Frequent rail weekends", body: "Train discounts orients Weekend Voordeel-style products." },
      { title: "Local wheels", body: "Cycling and Bike sharing help once you arrive." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "How to get there by OV.",
      },
      {
        label: "Train discounts",
        href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
        status: "live",
        description: "Weekend Voordeel product math.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Riding and ticket-type depth.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider multimodal orientation.",
      },
    ] satisfies LifestyleLink[],
  },
  nature: {
    heading: "Nature weekends: short orientation",
    intro:
      "Nature weekends are a core Dutch leisure habit — dunes, forests and park edges within a day of most cities. This page only orients; National parks and Hiking own the deep dives.",
    paragraphs: [
      "Nationale Parken orientation (rules, visitor centres, seasonal access) belongs on National parks. Walking culture, trail etiquette and kit habits belong on Hiking. Keep first nature weekends short and on marked paths.",
      "Cycling can combine with nature edges; deepen everyday bike habits on Cycling. Social hiking groups can connect to Making Dutch friends when community is the goal.",
    ],
    rows: [
      {
        topic: "First nature day",
        whatToCheck: "Short marked loop + toilets",
        tip: "Skip ambitious multi-park stacks.",
      },
      {
        topic: "Park orientation",
        whatToCheck: "Access, seasons, visitor info",
        tip: "Open National parks for depth.",
      },
      {
        topic: "Walking culture",
        whatToCheck: "Footwear, etiquette, distance",
        tip: "Open Hiking for trail habits.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Dunes & coast edges", body: "Wind layers and soft sand — great reset days." },
      { title: "Forest & heath", body: "Mud-friendly shoes in autumn and winter." },
      { title: "Respect rules", body: "Stay on paths; confirm park guidance officially." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "National parks",
        href: NATIONAL_PARKS_NETHERLANDS_PATH,
        status: "live",
        description: "Nationale Parken orientation.",
      },
      {
        label: "Hiking",
        href: HIKING_NETHERLANDS_PATH,
        status: "live",
        description: "Walking and hiking culture.",
      },
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Bike habits for leisure days.",
      },
    ] satisfies LifestyleLink[],
  },
  packing: {
    heading: "Packing & practical lifestyle tips",
    intro:
      "Dutch weekend packing is lifestyle-first: layers, rain shell, comfortable shoes and a light day bag. OV ticket packing and check-in habits deepen on Weekend travel.",
    paragraphs: [
      "Overpacking is the classic expat mistake. A compact rain layer and spare socks beat a suitcase of ‘just in case’ outfits. For kids, pack snacks and a short indoor backup rather than full activity kits.",
      "Phone charge, payment method and a simple meeting point matter more than souvenir shopping lists. If you use shared bikes or occasional car share for last mile, keep that planning on Weekend travel, Bike sharing and Car sharing.",
    ],
    rows: [
      {
        topic: "Clothes",
        whatToCheck: "Layers + rain shell",
        tip: "Wind on the coast needs an extra layer.",
      },
      {
        topic: "Feet",
        whatToCheck: "Comfortable waterproof-friendly shoes",
        tip: "City cobbles and dune paths punish fashion shoes.",
      },
      {
        topic: "Bag size",
        whatToCheck: "Day bag vs overnight tote",
        tip: "Light wins on platforms and bikes.",
      },
      {
        topic: "OV packing",
        whatToCheck: "Ticket method ready",
        tip: "Deepen on Weekend travel — not here.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Weather layer", body: "Compact shell transforms rainy Saturdays." },
      { title: "Shoes first", body: "Comfort decides whether you enjoy the destination." },
      { title: "Charge + pay", body: "Dead phone is a classic weekend fail." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV packing and check-in habits.",
      },
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Dressing for Dutch seasons.",
      },
      {
        label: "Bike sharing",
        href: BIKE_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Shared bikes for local hops.",
      },
    ] satisfies LifestyleLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility options for weekend getaways",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when weekend trips fit your month. This block is not a ranking of destinations, hotels or tour operators.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a leisure weekend — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer Weekend travel for OV planning depth and Train discounts for product math.",
    placementId: "nl-living-weekend-trips-support-providers",
    analyticsPageContext: "weekend-trips-netherlands-recommended-options",
    categoryLinks: [
      { href: WEEKEND_TRAVEL_NETHERLANDS_PATH, label: "Weekend travel" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat weekend-trip scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First weekend after arrival",
        approach: "Nearby city or park day trip; skip islands and complex lodging.",
        firstStep: "Open destinations and Weekend travel.",
      },
      {
        situation: "Couple coast overnight",
        approach: "Walkable seaside pattern + early return plan.",
        firstStep: "Open destinations, seasons and Weekend travel.",
      },
      {
        situation: "Family with kids",
        approach: "Short radius, playground buffer, rainy-day backup.",
        firstStep: "Open Family activities and packing.",
      },
      {
        situation: "Solo nature reset",
        approach: "Short marked loop; deepen trails later.",
        firstStep: "Open nature, then National parks or Hiking.",
      },
      {
        situation: "Friends museum city",
        approach: "One main museum + café street; protect Sunday.",
        firstStep: "Open culture and planning.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Marathon itineraries",
      body: "Three cities in one day creates stress, not stories.",
      advice: "One main destination pattern per weekend.",
    },
    {
      title: "Ignoring weather",
      body: "Wind and rain reshape coast and outdoor plans.",
      advice: "Open Weather and pack a shell.",
    },
    {
      title: "Skipping the transport sibling",
      body: "Destination ideas without OV timing lead to missed last trains.",
      advice: "Open Weekend travel before tickets.",
    },
    {
      title: "Treating this as hotel SEO",
      body: "Rankings and booking dumps are not orientation.",
      advice: "Use patterns + official lodging pages lightly.",
    },
    {
      title: "Overpacking",
      body: "Heavy bags punish platforms, bikes and dune walks.",
      advice: "Layers and a day bag beat suitcases.",
    },
    {
      title: "Forgetting Sunday calm",
      body: "Exhausted returns make the next week harder.",
      advice: "Protect a gentle Sunday buffer.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Weekend trips readiness checklist",
    intro: "Use this before your first Dutch leisure weekend so destination and transport stay aligned.",
    items: [
      "Weekend vibe written in one sentence",
      "Destination pattern chosen (city / coast / nature / islands lightly)",
      "Seasons and Weather checked",
      "Weekend travel opened for OV and last mile",
      "Day trip vs one overnight decided",
      "Light bag, layers and comfortable shoes packed",
      "Nature siblings noted if forests or parks are the goal",
      "Sunday return kept calm",
    ],
  },
  howTo: {
    heading: "How to plan a calm Dutch weekend trip",
    steps: [
      {
        name: "Write the vibe",
        text: "City culture, coast air, nature quiet or social catch-up — one sentence.",
      },
      {
        name: "Pick a destination pattern",
        text: "Choose city, coast, inland nature or a light island idea that matches energy and company.",
      },
      {
        name: "Check when to go",
        text: "Match season and holidays; open Weather for layers and rain risk.",
      },
      {
        name: "Plan transport on Weekend travel",
        text: "Confirm NS/OV, last mile and last useful return — do not invent ticket math here.",
      },
      {
        name: "Pack light and protect Sunday",
        text: "Layers, shoes and a calm return beat overpacked maximalism.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to plan a weekend trip in the Netherlands",
    description:
      "Orientation steps for expats choosing a Dutch weekend vibe, destination pattern, season window and transport plan.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "How is this different from Weekend travel?",
      a: "This page owns destination ideas and weekend lifestyle planning. Weekend travel owns OV/NS how-to, discounts orientation, last mile and packing for transport.",
    },
    {
      q: "Where should I start as a newcomer?",
      a: "One nearby day trip with a simple vibe — city walk or short park loop — before overnight bags or islands.",
    },
    {
      q: "Do you rank the best destinations or hotels?",
      a: "No. Patterns are orientation only. Confirm attractions, lodging and park rules on official pages.",
    },
    {
      q: "When should I open National parks or Hiking?",
      a: "When nature is the main vibe. This page short-orients; those siblings deepen park and walking culture.",
    },
    {
      q: "What about family weekends with kids?",
      a: "Keep radius short and open Family activities for parks, museums and rainy-day ideas.",
    },
    {
      q: "How do seasons affect plans?",
      a: "Coast and outdoor weekends change with wind and daylight; winter suits city culture. Open Weather for dressing cues.",
    },
    {
      q: "Can cycling replace a full weekend trip?",
      a: "Local bike days are great practice. Everyday cycling depth lives on Cycling; shared fleets on Bike sharing.",
    },
    {
      q: "Is this travel or booking advice?",
      a: "No. ExpatLife provides general lifestyle orientation only. Follow official planners, operators and park guidance.",
    },
  ],
  relatedGuidesTips: [
    "OV how-to → Weekend travel.",
    "Nationale Parken → National parks.",
    "Walking culture → Hiking.",
    "Museumkaart culture → Museums.",
    "Lesser-known spots → Hidden gems.",
    "Coast weekends → Beach towns.",
    "Historic houses → Castles.",
    "Car multi-stop → Road trips.",
    "Same-day outs → Day trips.",
    "Kid leisure → Family activities.",
    "Seasons → Weather.",
    "Wider living → Survival Guide.",
  ],
  relatedGuides: [
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "OV/NS getaways, discounts orientation and last mile.",
    },
    {
      label: "National parks",
      href: NATIONAL_PARKS_NETHERLANDS_PATH,
      status: "live",
      description: "Nationale Parken orientation for nature weekends.",
    },
    {
      label: "Hiking",
      href: HIKING_NETHERLANDS_PATH,
      status: "live",
      description: "Walking and hiking culture in the Netherlands.",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Museumkaart orientation and museum-going habits.",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Lesser-known neighbourhoods, towns and quiet spots.",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Coastal towns and beach-day culture for expats.",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Castles and historic houses visit culture.",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Car-based multi-stop leisure driving culture.",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Same-day outing patterns, timing and packing light.",
    },
    {
      label: "Family activities",
      href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Parks, museums and rainy-day ideas with kids.",
    },
    {
      label: "Weather",
      href: LIVING_WEATHER_PATH,
      status: "live",
      description: "Seasons and dressing for Dutch weekends.",
    },
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday bike habits for leisure days.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Wider multimodal mobility orientation.",
    },
    {
      label: "Survival Guide",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      status: "live",
      description: "Wider living orientation after arrival.",
    },
  ] satisfies LifestyleLink[],
  lifestyleHubTips: [
    "Weekend trips is the destination-ideas guide in Weekend & lifestyle.",
    "Weekend travel stays under Public transport for OV how-to.",
    "National parks and Hiking deepen nature weekends.",
    "Museums, Hidden gems, Beach towns and Castles deepen culture and coast.",
    "Road trips owns car multi-stop leisure; Day trips owns same-day outs.",
    "Weather and Family activities support seasons and kid days.",
    "Getting around remains the wider mobility overview.",
  ],
  lifestyleHubCards: [
    {
      label: "Weekend trips",
      href: WEEKEND_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Destination ideas — you are here.",
    },
    {
      label: "National parks",
      href: NATIONAL_PARKS_NETHERLANDS_PATH,
      status: "live",
      description: "Nationale Parken orientation.",
    },
    {
      label: "Hiking",
      href: HIKING_NETHERLANDS_PATH,
      status: "live",
      description: "Walking and hiking culture.",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Museumkaart and museum-going.",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Lesser-known places orientation.",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Coastal towns and beach-day culture.",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Castles and historic houses visits.",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Car multi-stop leisure driving.",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Same-day outing patterns.",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "OV how-to for getaways.",
    },
  ] satisfies LifestyleLink[],
  exploreNextCards: [
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Need NS/OV tickets, last mile and return timing?",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Back same day — timing and packing light?",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Need car multi-stop leisure driving culture?",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Planning a North Sea or Zeeland coast day?",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Want castles and historic houses visit culture?",
    },
    {
      label: "National parks",
      href: NATIONAL_PARKS_NETHERLANDS_PATH,
      status: "live",
      description: "Need Nationale Parken orientation?",
    },
  ] satisfies LifestyleLink[],
  exploreNextTips: [
    "Transport → Weekend travel.",
    "Same-day → Day trips.",
    "Car multi-stop → Road trips.",
    "Coast → Beach towns.",
    "Historic houses → Castles.",
    "Parks → National parks.",
  ],
  officialSources: [
    {
      label: "Netherlands Board of Tourism & Conventions — Holland.com",
      href: "https://www.holland.com/global/tourism.htm",
      description: "Official tourism orientation for regions and destination ideas.",
    },
    {
      label: "Nationale Parken — official parks overview",
      href: "https://www.nationaalpark.nl/",
      description: "Orientation for Dutch national parks (confirm live park pages).",
    },
    {
      label: "NS — tickets and journey planner",
      href: "https://www.ns.nl/en",
      description: "Official national rail tickets and planners — deepen on Weekend travel.",
    },
    {
      label: "9292 — door-to-door OV planner",
      href: "https://9292.nl/en",
      description: "National public-transport journey planner including regional legs.",
    },
    {
      label: "KNMI — weather",
      href: "https://www.knmi.nl/over-het-knmi/about",
      description: "Official weather institute orientation — deepen dressing on Weather.",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: ["Choose a vibe.", "Pick a destination pattern.", "Plan transport lightly.", "Pack for Dutch weather."],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Vibe first.",
        "Destination patterns.",
        "When to go.",
        "Planning flow.",
        "Nature short-orient.",
        "Packing culture.",
      ],
    },
    culture: {
      title: "From the visual — culture cues",
      items: ["Short getaways.", "Friday planning habit.", "Sunday return calm.", "Café and market leisure."],
    },
    destinations: {
      title: "From the visual — pattern cues",
      items: ["City culture.", "North Sea coast.", "Inland nature.", "Islands lightly."],
    },
    seasons: {
      title: "From the visual — season cues",
      items: ["Spring blossom.", "Summer coast.", "Autumn colours.", "Winter city lights."],
    },
    planning: {
      title: "From the visual — planning cues",
      items: ["Vibe.", "Destination.", "Transport (Weekend travel).", "Lodging lightly."],
    },
    nature: {
      title: "From the visual — nature cues",
      items: ["Short forest or dune day.", "Nationale Parken orientation.", "Hiking culture link.", "Marked paths first."],
    },
    packing: {
      title: "From the visual — packing cues",
      items: ["Layers.", "Rain shell.", "Comfortable shoes.", "Light day bag."],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: ["First weekend.", "Couple coast.", "Family city day.", "Solo nature reset."],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: ["Overpacking.", "Ignoring weather.", "Skipping transport sibling.", "Marathon itineraries."],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: ["Vibe chosen.", "Pattern picked.", "Weekend travel opened.", "Packing light."],
    },
  },
  disclosure:
    "ExpatLife provides general weekend-trip and lifestyle orientation for newcomers. It is not travel, booking or financial advice and not a ranking of destinations, hotels or tour operators. Opening hours, weather and events change — always confirm on official tourism, park and transport pages. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
} as const;

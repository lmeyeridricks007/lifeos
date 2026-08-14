import {
  BEACH_TOWNS_NETHERLANDS_PATH,
  HIDDEN_GEMS_NETHERLANDS_PATH,
  HIKING_NETHERLANDS_PATH,
  MUSEUMS_NETHERLANDS_PATH,
  NATIONAL_PARKS_NETHERLANDS_PATH,
  WEEKEND_TRIPS_NETHERLANDS_PATH,
  BIKE_SHARING_NETHERLANDS_PATH,
  CASTLES_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  DAY_TRIPS_NETHERLANDS_PATH,
  FAMILY_ACTIVITIES_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LIVING_HUB_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
  LIVING_WEATHER_PATH,
  MAKING_DUTCH_FRIENDS_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  ROAD_TRIPS_NETHERLANDS_PATH,
  TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  WEEKEND_TRAVEL_NETHERLANDS_PATH,
} from "@/src/components/living/weekend-trips-netherlands/weekendTripsNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export {
  BEACH_TOWNS_NETHERLANDS_PATH,
  BIKE_SHARING_NETHERLANDS_PATH,
  CASTLES_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  DAY_TRIPS_NETHERLANDS_PATH,
  FAMILY_ACTIVITIES_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  HIDDEN_GEMS_NETHERLANDS_PATH,
  HIKING_NETHERLANDS_PATH,
  LIVING_HUB_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
  LIVING_WEATHER_PATH,
  MAKING_DUTCH_FRIENDS_PATH,
  MUSEUMS_NETHERLANDS_PATH,
  NATIONAL_PARKS_NETHERLANDS_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  ROAD_TRIPS_NETHERLANDS_PATH,
  TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  WEEKEND_TRAVEL_NETHERLANDS_PATH,
  WEEKEND_TRIPS_NETHERLANDS_PATH,
};

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
const VISUAL_PREFIX = "national-parks-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const nationalParksNetherlandsPage = {
  slug: "national-parks-netherlands",
  path: NATIONAL_PARKS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: LIVING_SURVIVAL_GUIDE_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(NATIONAL_PARKS_NETHERLANDS_PATH) ?? "2026-10-12",
  seo: {
    title: "National parks in the Netherlands | Complete Guide for Expats",
    description:
      "Nationale Parken orientation for expats: how Dutch national parks work, visitor expectations, how to choose a park type, access tips, etiquette and facilities — with links to Hiking, Weekend trips and Weekend travel.",
    keywords: [
      "national parks Netherlands",
      "Nationale Parken",
      "Dutch national parks",
      "national park Netherlands expats",
      "visit national park Netherlands",
      "Netherlands nature parks",
      "bezoekerscentrum national park",
      "Dutch dunes forests heath",
      "national park etiquette Netherlands",
      "how to visit Dutch national parks",
      "Nationale Parken orientation",
      "nature weekend Netherlands parks",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Weekend & lifestyle",
    pageTitle: "National parks in the Netherlands",
    subtitle:
      "Nationale Parken orientation for expats: what Dutch national parks are, visitor expectations, how to choose a park type, access tips and etiquette — not a trail deep-dive or destination ranking.",
    primaryCta: { label: "Understand the system", href: "#system" },
    secondaryCta: { label: "Park checklist", href: "#checklist" },
    chips: ["Nationale Parken", "Park types", "Visitor basics", "Access tips", "Etiquette"],
    disclaimer:
      "General lifestyle orientation only — not travel, booking or financial advice and not a ranking of parks, hotels or tour operators. Opening hours, access rules and seasons change. Verify official park and planner pages before you go. Hiking owns trail culture; Weekend travel owns OV how-to.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch national park morning: multicultural expat visitors with light day bags on a marked dune or forest path near a visitor-centre board, soft daylight nature and reassuring leisure mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#system", label: "What parks are" },
    { href: "#landscapes", label: "Park types" },
    { href: "#choose", label: "How to choose" },
    { href: "#visitor", label: "Visitor basics" },
    { href: "#access", label: "Access" },
    { href: "#etiquette", label: "Etiquette" },
    { href: "#seasons", label: "Seasons" },
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
      "Premium orientation board titled Nationale Parken After Arrival — four building blocks: understand the park system, choose a landscape type, check visitor basics, plan access lightly — Park Visit Checklist rail on the right, Dutch dune and forest skyline band and ExpatLife brand footer.",
      "Four habits cover most first park visits: system, landscape type, visitor basics, access."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of national parks in the Netherlands — system orientation, landscape types, how to choose, visitor centres, access tips, etiquette — Dutch nature skyline band and ExpatLife brand footer.",
      "Six building blocks explain almost every first Nationale Parken question for newcomers."
    ),
    system: visual(
      "system",
      "Premium system board — what Nationale Parken are, conservation plus recreation, not wilderness reserves, visitor centres and marked paths — consultation desk scene with System notes rail and ExpatLife brand footer.",
      "Dutch national parks balance nature protection with everyday recreation."
    ),
    landscapes: visual(
      "landscapes",
      "Premium landscape-type board — dunes and coast edges, forests, heathland, wetlands and water, cultural landscape parks — map-style cards with Landscape notes rail, Dutch nature band and ExpatLife brand footer.",
      "Choose by landscape type first — not by influencer rankings."
    ),
    choose: visual(
      "choose",
      "Premium decision board — energy, company, distance, facilities need, season fit — kitchen-table planner with Choose cues rail and ExpatLife brand footer.",
      "Match park type to energy, company and season before naming a park."
    ),
    visitor: visual(
      "visitor",
      "Premium visitor-basics board — bezoekerscentrum, toilets, marked routes, opening cues, fees where relevant — visitor desk scene with Facilities rail and ExpatLife brand footer.",
      "Visitor centres and marked paths make first park days calmer."
    ),
    access: visual(
      "access",
      "Premium access board — train to hub, bus or bike last mile, car share lightly, park edge arrival — multimodal scene with Access notes rail linking Weekend travel and ExpatLife brand footer.",
      "Access is multimodal — deepen OV on Weekend travel."
    ),
    etiquette: visual(
      "etiquette",
      "Premium etiquette board — stay on paths, dogs rules, quiet zones, litter, seasonal closures — pathside sign scene with Respect notes rail and ExpatLife brand footer.",
      "Stay on marked paths and follow park-specific guidance."
    ),
    seasons: visual(
      "seasons",
      "Premium seasons board — spring blossom, summer dunes, autumn heath, winter short loops — calendar scene with Season cues rail and ExpatLife brand footer.",
      "Match landscape to season and open Weather for dressing."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first park day, family with kids, couple dune reset, solo forest quiet, friends visitor-centre start — first-step arrows and Dutch nature band with ExpatLife brand footer.",
      "Match the park day to energy and company — not a copied list."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — treating parks as wilderness, ignoring etiquette, skipping access plan, ranking parks as SEO, marathon multi-park days, confusing parks with hiking depth — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is expectations and access — not finding a park name."
    ),
    checklist: visual(
      "checklist",
      "Premium national-parks readiness checklist clipboard — landscape type chosen, official park page checked, visitor basics noted, Weekend travel opened, etiquette reviewed, Hiking noted for trails — Dutch kitchen table with day bag and ExpatLife brand footer.",
      "Use this checklist so your first Nationale Parken day stays calm."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "Visitor centre", note: "Then a short marked loop" },
    { label: "Choose by", value: "Landscape type", note: "Dunes, forest, heath…" },
    { label: "Transport", value: "Weekend travel", note: "OV how-to sibling" },
    { label: "Trails depth", value: "Hiking guide", note: "Walking culture sibling" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Nationale Parken in the Netherlands are protected landscapes where nature conservation and everyday recreation meet — dunes, forests, heathland, wetlands and cultural nature areas within reach of most cities. Expats who expect remote wilderness often feel surprised; Dutch parks are usually well signed, with visitor centres, marked paths and clear rules.",
    "This page owns park-system orientation: what parks are, how to choose a type, visitor expectations, access tips and etiquette. Weekend trips short-orients nature destination ideas. Hiking owns walking culture and trail habits. Weekend travel owns NS/OV how-to. Cycling and Bike sharing help last-mile and local exploring. Weather helps you dress. Survival Guide remains wider living orientation.",
  ],
  introHighlights: [
    "Start with landscape type and a visitor centre — not a ranked ‘best park’ list.",
    "Expect marked paths and recreation rules, not wilderness camping by default.",
    "Open Weekend travel for trains and last mile; Hiking for trail culture.",
    "Confirm opening hours, fees and seasonal closures on official park pages.",
  ],
  orientationFlowSteps: [
    "Understand what Nationale Parken are (conservation + recreation).",
    "Choose a landscape type that matches energy and company.",
    "Check visitor basics (centre, toilets, marked routes, fees).",
    "Plan access lightly, then follow etiquette on the day.",
  ],
  travelFileChecklist: [
    "Landscape type written (dunes / forest / heath / wetland / cultural)",
    "Official park page opened for hours and access notes",
    "Visitor centre or information point noted if available",
    "Weekend travel sibling opened for OV and last mile",
    "Weather and layers checked",
    "Etiquette basics reviewed (paths, dogs, litter)",
  ],
  introScenarios: [
    {
      situation: "First Saturday nature day",
      approach: "Nearby dune or forest park with a visitor centre and short marked loop.",
      firstStep: "Open landscapes and visitor basics.",
    },
    {
      situation: "Family with young kids",
      approach: "Facilities-first park edge, short radius, indoor backup if rain.",
      firstStep: "Open visitor basics and Family activities.",
    },
    {
      situation: "Couple wanting quiet dunes",
      approach: "Coast-edge landscape type, wind layer, early return plan.",
      firstStep: "Open landscapes, seasons and Weekend travel.",
    },
    {
      situation: "Solo forest reset",
      approach: "Short marked loop; deepen trail culture later on Hiking.",
      firstStep: "Open choose and etiquette, then Hiking.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Expectation mismatch causes more frustration than ‘wrong’ parks.",
    "Dutch parks are landscapes with rules — stay on marked paths.",
    "Transport depth lives on Weekend travel — keep this page on parks.",
    "Trail deep dives belong on Hiking; destination ideas on Weekend trips.",
  ],
  quickAnswer: {
    heading: "How national parks work for expats in the Netherlands",
    summary:
      "Nationale Parken are Dutch protected landscapes for nature and recreation — usually signed, with visitor centres and marked paths. Choose a landscape type, check visitor basics, plan access via Weekend travel, then follow park etiquette. Hiking deepens walking culture; Weekend trips short-orients nature getaway ideas.",
    bullets: [
      "Park-system orientation, visitor expectations and etiquette live on this page.",
      "Trail and walking culture depth live on Hiking.",
      "Destination ideas live on Weekend trips; OV how-to on Weekend travel.",
      "Avoid treating this guide as a ranking of parks, hotels or tour operators.",
    ],
    note: "If you only open one sibling after this page, open Hiking for trails or Weekend travel for how to get there.",
  },
  snapshotCards: [
    {
      title: "System orientation",
      body: "What Nationale Parken are — conservation plus recreation, not remote wilderness by default.",
    },
    {
      title: "Landscape types",
      body: "Dunes, forests, heath, wetlands and cultural landscapes — choose the feel first.",
    },
    {
      title: "How to choose",
      body: "Match energy, company, distance and facilities before naming a park.",
    },
    {
      title: "Visitor basics",
      body: "Bezoekerscentrum, toilets, marked routes and fee cues where they apply.",
    },
    {
      title: "Access tips",
      body: "Train hubs, bike last mile and light car share — deepen OV on Weekend travel.",
    },
    {
      title: "Etiquette",
      body: "Stay on paths, respect seasonal rules, litter and quiet zones.",
    },
  ] satisfies TipCard[],
  system: {
    heading: "What Nationale Parken are",
    intro:
      "A Dutch national park (Nationaal Park) is a designated landscape where nature protection and public recreation are planned together. Most parks are closer to everyday leisure than to remote national-park wilderness stereotypes from larger countries.",
    paragraphs: [
      "You will often find marked walking and cycling routes, information points or visitor centres (bezoekerscentra), and clear guidance about dogs, bikes and seasonal access. Management can involve multiple organisations — always confirm the live park page for maps and rules.",
      "Counts and boundaries evolve over time. Treat any network size note as orientation and verify the current list on official Nationale Parken sources. This page does not rank parks or recommend paid tours.",
    ],
    rows: [
      {
        topic: "Purpose",
        whatToCheck: "Conservation + recreation balance",
        tip: "Expect rules and marked paths, not free camping.",
      },
      {
        topic: "Scale",
        whatToCheck: "Day-trip friendly landscapes",
        tip: "Many parks fit a calm Saturday from nearby cities.",
      },
      {
        topic: "Information",
        whatToCheck: "Visitor centre or park website",
        tip: "Start there for maps and seasonal notices.",
      },
      {
        topic: "Not the same as",
        whatToCheck: "City parks or private estates",
        tip: "Nationale Parken have specific designations and guidance.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Landscape first", body: "Think dunes, forest or heath — then confirm the official park page." },
      { title: "Signed recreation", body: "Paths and info boards are part of the Dutch park model." },
      { title: "Verify live", body: "Hours, fees and closures change — official pages win." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Nature weekend destination ideas (short orient).",
      },
      {
        label: "Hiking",
        href: HIKING_NETHERLANDS_PATH,
        status: "live",
        description: "Walking and hiking culture depth.",
      },
      {
        label: "Survival Guide",
        href: LIVING_SURVIVAL_GUIDE_PATH,
        status: "live",
        description: "Wider living orientation after arrival.",
      },
    ] satisfies LifestyleLink[],
  },
  landscapes: {
    heading: "Park types: dunes, forests, heath, wetlands",
    intro:
      "Choose by landscape feel first. Dutch Nationale Parken span coastal dunes, inland forests, heathland, wetlands and cultural nature landscapes — patterns beat ranked ‘top parks’ lists.",
    paragraphs: [
      "Dune and coast-edge days suit wind, sand and sea-air resets. Forest and heath days suit quieter shade and autumn colour. Wetland and water landscapes need more seasonal awareness (paths, birds, mud). Some parks emphasise cultural landscapes and visitor storytelling — still confirm rules on the official page.",
      "We do not publish a ranked best-of list. Use landscape type + distance + facilities need, then open Hiking when trail distance and kit matter more than park orientation.",
    ],
    rows: [
      {
        topic: "Dunes & coast edges",
        whatToCheck: "Wind, sand, soft paths",
        tip: "Pack a wind layer even in summer.",
      },
      {
        topic: "Forests",
        whatToCheck: "Shade, mud after rain, short loops",
        tip: "Waterproof-friendly shoes help year-round.",
      },
      {
        topic: "Heathland",
        whatToCheck: "Open views, seasonal colour, sun exposure",
        tip: "Great autumn feel; check path wetness.",
      },
      {
        topic: "Wetlands & water",
        whatToCheck: "Boardwalks, bird seasons, mud",
        tip: "Confirm access when water levels rise.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Dune pattern", body: "Coast air + marked dune paths + wind-aware packing." },
      { title: "Forest pattern", body: "Quiet loops + mud-friendly shoes + visitor centre start." },
      { title: "Heath pattern", body: "Open landscape days — protect skin and check seasons." },
      { title: "Wetland pattern", body: "Boardwalk awareness and seasonal access notes." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Hiking",
        href: HIKING_NETHERLANDS_PATH,
        status: "live",
        description: "Trail habits once you pick a landscape.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Broader nature weekend ideas.",
      },
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Wind, rain and dressing cues.",
      },
    ] satisfies LifestyleLink[],
  },
  choose: {
    heading: "How to choose a park for your day",
    intro:
      "A calm choice order: landscape type → company and energy → distance from home → facilities need → season fit. Name a specific park only after those filters.",
    paragraphs: [
      "First park days should stay short: one visitor-centre start and one marked loop. Multi-park stacks and ambitious wilderness fantasies create stress in a small, busy country.",
      "If kids are involved, prioritise toilets, shorter loops and rainy-day backups — deepen kid leisure on Family activities. If social hiking is the goal, Making Dutch friends can support group leisure lightly.",
    ],
    rows: [
      {
        topic: "1. Landscape",
        whatToCheck: "Dunes, forest, heath, wetland feel",
        tip: "Write the feel before searching park names.",
      },
      {
        topic: "2. Company",
        whatToCheck: "Solo, couple, kids, friends",
        tip: "Facilities matter more with kids.",
      },
      {
        topic: "3. Distance",
        whatToCheck: "Day-trip radius from home",
        tip: "Nearby beats exotic for the first visit.",
      },
      {
        topic: "4. Season",
        whatToCheck: "Wind, mud, daylight, crowds",
        tip: "Open Weather and seasons below.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Facilities filter", body: "Visitor centre + toilets calm first park days." },
      { title: "Energy filter", body: "Quiet reset vs social outing changes park choice." },
      { title: "Sibling handoff", body: "Trail distance → Hiking; OV timing → Weekend travel." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live",
        description: "Kid-friendly leisure when parks are family days.",
      },
      {
        label: "Making Dutch friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        status: "live",
        description: "Social leisure and group habits lightly.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "When the day is part of a wider weekend vibe.",
      },
    ] satisfies LifestyleLink[],
  },
  visitor: {
    heading: "Visitor expectations and facilities",
    intro:
      "Most first visits feel calmer when you know what ‘normal’ looks like: information points, marked routes, toilets near hubs, and occasional entrance or parking fees depending on the park.",
    paragraphs: [
      "A bezoekerscentrum (visitor centre) is often the best start — maps, seasonal notices and route suggestions without needing a guided tour. Opening hours and services vary; confirm on the official park page the morning you leave.",
      "Some parks or estates charge for parking, museums or enclosed areas. Treat fee notes as orientation only. Facilities are not a ranking — they are a planning filter for kids, mobility needs and rainy backups.",
    ],
    rows: [
      {
        topic: "Visitor centre",
        whatToCheck: "Hours and map desk",
        tip: "Start here on your first visit.",
      },
      {
        topic: "Routes",
        whatToCheck: "Marked walking or cycling loops",
        tip: "Short coloured loops beat freestyle bushwhacking.",
      },
      {
        topic: "Toilets & cafés",
        whatToCheck: "Hub facilities near entrances",
        tip: "Plan kids and seniors around hubs.",
      },
      {
        topic: "Fees",
        whatToCheck: "Parking, museum or gate cues",
        tip: "Confirm officially — do not invent prices here.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Map first", body: "A printed or centre map reduces wrong turns." },
      { title: "Hub-based day", body: "Return to toilets and café before long loops." },
      { title: "No tour ranking", body: "Optional activities are orientation — verify providers yourself." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Hiking",
        href: HIKING_NETHERLANDS_PATH,
        status: "live",
        description: "When route length and kit matter more.",
      },
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live",
        description: "Kid days with facilities buffers.",
      },
    ] satisfies LifestyleLink[],
  },
  access: {
    heading: "Access tips: trains, bikes and last mile",
    intro:
      "Many parks are reachable with a train hub plus bus, bike or short walk. This page orients access patterns; Weekend travel owns OV tickets, discounts orientation and packing-for-transport.",
    paragraphs: [
      "Plan the last useful return before you start a long loop. NS trains and Train discounts deepen product and riding habits when park days become frequent. Cycling and Bike sharing help local exploring and last-mile hops. Occasional shared cars (for thin last miles) stay optional — keep four wheels as a backup, not the default story.",
      "We do not invent door-to-door itineraries for every park. Use NS/9292 planners and official park ‘bereikbaarheid’ pages, then deepen leisure OV habits on Weekend travel.",
    ],
    rows: [
      {
        topic: "Train hub",
        whatToCheck: "Station nearest the park edge",
        tip: "Open Weekend travel for leisure OV depth.",
      },
      {
        topic: "Last mile",
        whatToCheck: "Bus, bike or walk from hub",
        tip: "Confirm frequency on Sundays and holidays.",
      },
      {
        topic: "Bike access",
        whatToCheck: "Cycle paths into the park",
        tip: "Deepen everyday bike habits on Cycling.",
      },
      {
        topic: "Car lightly",
        whatToCheck: "Parking rules and fees",
        tip: "Optional — confirm park parking guidance.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "OV sibling", body: "Weekend travel owns NS/OV getaways and last mile." },
      { title: "Frequent rail", body: "Train discounts orients Weekend Voordeel-style products." },
      { title: "Local wheels", body: "Cycling and Bike sharing help once you arrive." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV how-to for leisure getaways.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Riding and ticket-type depth.",
      },
      {
        label: "Train discounts",
        href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
        status: "live",
        description: "Weekend product math orientation.",
      },
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Bike habits for park edges.",
      },
      {
        label: "Bike sharing",
        href: BIKE_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Shared bikes for last-mile exploring.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider multimodal orientation.",
      },
    ] satisfies LifestyleLink[],
  },
  etiquette: {
    heading: "Park etiquette and practical rules",
    intro:
      "Dutch park days stay pleasant when visitors treat paths, wildlife and other guests with calm respect. Rules differ by park — always follow on-site signs and the official page.",
    paragraphs: [
      "Core habits: stay on marked paths, take litter home, keep dogs under the rules posted for that park, and respect seasonal closures or quiet zones. Drones, open fires and off-path shortcuts are common expectation mismatches for newcomers.",
      "Etiquette is not legal advice. When in doubt, ask at the visitor centre. Trail culture and distance habits deepen on Hiking; social group norms can connect lightly to Making Dutch friends.",
    ],
    rows: [
      {
        topic: "Paths",
        whatToCheck: "Marked routes only",
        tip: "Protect habitats — freestyle walking is often restricted.",
      },
      {
        topic: "Dogs",
        whatToCheck: "Lead rules and banned zones",
        tip: "Confirm on the park page before you go.",
      },
      {
        topic: "Noise & groups",
        whatToCheck: "Quiet zones and shared paths",
        tip: "Headphones low; yield on narrow dunes.",
      },
      {
        topic: "Seasonal notices",
        whatToCheck: "Breeding, fire risk, flooding",
        tip: "Closures protect nature — plan a backup.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Leave no trace", body: "Pack out snacks and tissues — bins may be sparse." },
      { title: "Share the path", body: "Walkers, bikes and families share many routes." },
      { title: "Ask locally", body: "Visitor centres clarify grey areas faster than forums." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Hiking",
        href: HIKING_NETHERLANDS_PATH,
        status: "live",
        description: "Walking culture and trail etiquette depth.",
      },
      {
        label: "Making Dutch friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        status: "live",
        description: "Social outdoor habits lightly.",
      },
    ] satisfies LifestyleLink[],
  },
  seasons: {
    heading: "Seasons, weather and park days",
    intro:
      "Park landscapes change with wind, mud, blossom and daylight. Match landscape type to season, dress with Weather, and expect holiday crowding on long weekends.",
    paragraphs: [
      "Spring suits milder forest and dune walks. Summer suits longer evenings with wind on the coast. Autumn suits heath colour and forest floors — mud-friendly shoes help. Winter suits short loops and visitor-centre starts with early returns.",
      "Official holiday calendars and park event pages change year to year. Treat crowd notes as orientation only.",
    ],
    rows: [
      {
        topic: "Spring",
        whatToCheck: "Showers and soft paths",
        tip: "Layers + indoor café backup near hubs.",
      },
      {
        topic: "Summer",
        whatToCheck: "Coast wind and holiday peaks",
        tip: "Start early; protect Sunday return.",
      },
      {
        topic: "Autumn",
        whatToCheck: "Heath colour and mud",
        tip: "Waterproof shoes transform the day.",
      },
      {
        topic: "Winter",
        whatToCheck: "Short daylight and wet ground",
        tip: "Short loops + visitor centre first.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Weather sibling", body: "Open Weather for rain, wind and dressing habits." },
      { title: "Holiday buffers", body: "School holidays change parking and path density." },
      { title: "Light matters", body: "Winter park days need earlier returns." },
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
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility options for park days",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when a Nationale Parken day needs a train, trailhead car share or local bike. This block is not a ranking of parks, hotels or tour operators.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a park day — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer Weekend travel for OV planning depth and Hiking for trail culture.",
    placementId: "nl-living-national-parks-support-providers",
    analyticsPageContext: "national-parks-netherlands-recommended-options",
    categoryLinks: [
      { href: WEEKEND_TRAVEL_NETHERLANDS_PATH, label: "Weekend travel" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
      { href: CYCLING_NETHERLANDS_PATH, label: "Cycling" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat national-park scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First park day after arrival",
        approach: "Nearby landscape type + visitor centre + short marked loop.",
        firstStep: "Open landscapes and visitor basics.",
      },
      {
        situation: "Family with kids",
        approach: "Facilities-first hub, short radius, rainy backup.",
        firstStep: "Open visitor basics and Family activities.",
      },
      {
        situation: "Couple dune reset",
        approach: "Coast-edge type, wind layer, early return.",
        firstStep: "Open landscapes, seasons and Weekend travel.",
      },
      {
        situation: "Solo forest quiet",
        approach: "Short marked loop; deepen trails later.",
        firstStep: "Open etiquette, then Hiking.",
      },
      {
        situation: "Friends visitor-centre start",
        approach: "Meet at the centre, pick one loop, café pause.",
        firstStep: "Open visitor basics and access.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Expecting wilderness",
      body: "Dutch parks are often signed recreation landscapes, not remote backcountry.",
      advice: "Expect visitor centres, paths and rules — then enjoy them.",
    },
    {
      title: "Ignoring etiquette",
      body: "Off-path shortcuts and litter harm habitats and other visitors.",
      advice: "Stay on marked routes and follow on-site signs.",
    },
    {
      title: "Skipping the access plan",
      body: "Park days without return timing create missed last buses or trains.",
      advice: "Open Weekend travel before you leave.",
    },
    {
      title: "Treating this as park SEO",
      body: "Rankings of parks, hotels or tour operators are not orientation.",
      advice: "Choose by landscape type + official park pages.",
    },
    {
      title: "Marathon multi-park days",
      body: "Two or three parks in one day create stress, not stories.",
      advice: "One park, one loop, one calm return.",
    },
    {
      title: "Confusing parks with hiking depth",
      body: "Trail kit and walking culture live on the Hiking sibling.",
      advice: "Use this page for park orientation; open Hiking for trails.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "National parks readiness checklist",
    intro: "Use this before your first Nationale Parken day so expectations, access and etiquette stay aligned.",
    items: [
      "Landscape type chosen (dunes / forest / heath / wetland / cultural)",
      "Official park page checked for hours, access and seasonal notices",
      "Visitor centre or information point noted when available",
      "Weekend travel opened for OV and last mile",
      "Weather and layers checked",
      "Etiquette basics reviewed (paths, dogs, litter)",
      "Hiking sibling noted if trail distance is the main goal",
      "Sunday or evening return kept calm",
    ],
  },
  howTo: {
    heading: "How to plan a calm Dutch national-park day",
    steps: [
      {
        name: "Understand the system",
        text: "Nationale Parken balance nature protection and recreation — expect marked paths and visitor guidance.",
      },
      {
        name: "Choose a landscape type",
        text: "Dunes, forest, heath, wetland or cultural landscape — match energy and company.",
      },
      {
        name: "Check visitor basics",
        text: "Confirm visitor centre hours, toilets, marked routes and any fee cues on the official park page.",
      },
      {
        name: "Plan access lightly",
        text: "Open Weekend travel for NS/OV and last mile; note last useful return before long loops.",
      },
      {
        name: "Follow etiquette on the day",
        text: "Stay on paths, respect seasonal rules, pack out litter — deepen trail culture on Hiking when needed.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to visit a national park in the Netherlands",
    description:
      "Orientation steps for expats choosing a Dutch Nationale Parken landscape type, checking visitor basics, planning access and following park etiquette.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "How is this different from Hiking?",
      a: "This page owns Nationale Parken system orientation, visitor expectations, choosing park types, access tips and etiquette. Hiking owns walking and hiking culture, trail habits and kit orientation.",
    },
    {
      q: "How is this different from Weekend trips?",
      a: "Weekend trips owns destination ideas and weekend lifestyle planning (city, coast, nature patterns). This page deepens the parks lane when nature is the focus.",
    },
    {
      q: "Where do I plan trains and OV?",
      a: "Open Weekend travel for leisure OV how-to, last mile and return timing. NS trains and Train discounts deepen riding and product math.",
    },
    {
      q: "Do you rank the best national parks?",
      a: "No. Landscape types and visitor filters are orientation only. Confirm maps, fees and rules on official park pages.",
    },
    {
      q: "Are Dutch national parks free?",
      a: "Many outdoor areas are freely walkable, but parking, museums or enclosed sections can have fees. Confirm on the official park page — we do not invent prices.",
    },
    {
      q: "What should newcomers do on a first visit?",
      a: "Start at a visitor centre or information point, pick one short marked loop, and plan the return early.",
    },
    {
      q: "Can I cycle in national parks?",
      a: "Often yes on designated routes — confirm park rules. Everyday bike habits live on Cycling; shared fleets on Bike sharing.",
    },
    {
      q: "Is this travel advice?",
      a: "No. ExpatLife provides general lifestyle orientation only. Follow official park, tourism and transport guidance.",
    },
  ],
  relatedGuidesTips: [
    "Destination ideas → Weekend trips.",
    "OV how-to → Weekend travel.",
    "Walking culture → Hiking.",
    "Museumkaart culture → Museums.",
    "Quieter places → Hidden gems.",
    "Bike access → Cycling / Bike sharing.",
    "Kid leisure → Family activities.",
    "Seasons → Weather.",
    "Wider living → Survival Guide.",
  ],
  relatedGuides: [
    {
      label: "Weekend trips",
      href: WEEKEND_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Weekend destination ideas and lifestyle planning.",
    },
    {
      label: "Hiking",
      href: HIKING_NETHERLANDS_PATH,
      status: "live",
      description: "Walking and hiking culture in the Netherlands.",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "OV/NS getaways, discounts orientation and last mile.",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Indoor culture when park weather turns.",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Quieter edges outside famous park hubs.",
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
      description: "Castles and historic houses with garden grounds.",
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
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday bike habits for leisure days.",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Shared bikes for last-mile exploring.",
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
      description: "Seasons and dressing for Dutch park days.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Wider multimodal mobility orientation.",
    },
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "Riding and ticket-type depth.",
    },
    {
      label: "Train discounts",
      href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
      status: "live",
      description: "Weekend Voordeel product math.",
    },
    {
      label: "Survival Guide",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      status: "live",
      description: "Wider living orientation after arrival.",
    },
    {
      label: "Making Dutch friends",
      href: MAKING_DUTCH_FRIENDS_PATH,
      status: "live",
      description: "Social outdoor habits lightly.",
    },
  ] satisfies LifestyleLink[],
  lifestyleHubTips: [
    "National parks is the parks-orientation guide in Weekend & lifestyle.",
    "Weekend trips leads destination ideas; Hiking deepens trails.",
    "Museums, Hidden gems, Beach towns and Castles deepen lifestyle peers.",
    "Weekend travel stays under Public transport for OV how-to.",
    "Weather and Family activities support seasons and kid days.",
    "Getting around remains the wider mobility overview.",
  ],
  lifestyleHubCards: [
    {
      label: "Weekend trips",
      href: WEEKEND_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Destination ideas for weekends.",
    },
    {
      label: "National parks",
      href: NATIONAL_PARKS_NETHERLANDS_PATH,
      status: "live",
      description: "Nationale Parken orientation — you are here.",
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
      label: "Hiking",
      href: HIKING_NETHERLANDS_PATH,
      status: "live",
      description: "Need walking and hiking culture depth?",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Park day out — back same evening?",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Multi-stop park-edge loop by car?",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Need NS/OV tickets, last mile and return timing?",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Want dune and coast culture next?",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer historic houses and gardens?",
    },
  ] satisfies LifestyleLink[],
  exploreNextTips: [
    "Trails → Hiking.",
    "Same-day → Day trips.",
    "Car multi-stop → Road trips.",
    "Transport → Weekend travel.",
    "Coast → Beach towns.",
    "Historic grounds → Castles.",
  ],
  officialSources: [
    {
      label: "Nationale Parken — official parks overview",
      href: "https://www.nationaalpark.nl/",
      description: "Orientation for Dutch national parks (confirm live park pages).",
    },
    {
      label: "Netherlands Board of Tourism & Conventions — Holland.com",
      href: "https://www.holland.com/global/tourism.htm",
      description: "Official tourism orientation for nature and regions.",
    },
    {
      label: "Staatsbosbeheer — nature areas",
      href: "https://www.staatsbosbeheer.nl/en",
      description: "National forest service orientation for many nature areas.",
    },
    {
      label: "Natuurmonumenten",
      href: "https://www.natuurmonumenten.nl/",
      description: "Nature organisation orientation for estates and landscapes.",
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
      items: ["Understand the system.", "Choose a landscape type.", "Check visitor basics.", "Plan access lightly."],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "System orientation.",
        "Landscape types.",
        "How to choose.",
        "Visitor centres.",
        "Access tips.",
        "Etiquette.",
      ],
    },
    system: {
      title: "From the visual — system cues",
      items: ["Conservation + recreation.", "Signed landscapes.", "Visitor centres.", "Marked paths."],
    },
    landscapes: {
      title: "From the visual — landscape cues",
      items: ["Dunes & coast edges.", "Forests.", "Heathland.", "Wetlands & water."],
    },
    choose: {
      title: "From the visual — choose cues",
      items: ["Landscape type.", "Company and energy.", "Distance.", "Season fit."],
    },
    visitor: {
      title: "From the visual — visitor cues",
      items: ["Bezoekerscentrum.", "Toilets.", "Marked routes.", "Fee cues where relevant."],
    },
    access: {
      title: "From the visual — access cues",
      items: ["Train hub.", "Bus or bike last mile.", "Car share lightly.", "Plan return early."],
    },
    etiquette: {
      title: "From the visual — etiquette cues",
      items: ["Stay on paths.", "Dogs rules.", "Quiet zones.", "Litter home."],
    },
    seasons: {
      title: "From the visual — season cues",
      items: ["Spring blossom.", "Summer dunes.", "Autumn heath.", "Winter short loops."],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: ["First park day.", "Family with kids.", "Couple dune reset.", "Solo forest quiet."],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: ["Expecting wilderness.", "Ignoring etiquette.", "Skipping access plan.", "Park SEO rankings."],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: ["Landscape chosen.", "Official page checked.", "Weekend travel opened.", "Etiquette reviewed."],
    },
  },
  disclosure:
    "ExpatLife provides general Nationale Parken and lifestyle orientation for newcomers. It is not travel, booking or financial advice and not a ranking of parks, hotels or tour operators. Opening hours, access rules and seasons change — always confirm on official park, tourism and transport pages. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
} as const;

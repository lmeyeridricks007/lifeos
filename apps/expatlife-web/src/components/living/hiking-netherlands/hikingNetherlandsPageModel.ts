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
const VISUAL_PREFIX = "hiking-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const hikingNetherlandsPage = {
  slug: "hiking-netherlands",
  path: HIKING_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: LIVING_SURVIVAL_GUIDE_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(HIKING_NETHERLANDS_PATH) ?? "2026-10-12",
  seo: {
    title: "Hiking in the Netherlands | Complete Guide for Expats",
    description:
      "Hiking and walking culture for expats in the Netherlands: route orientation (LAW, streekpaden, local walks), trail apps and maps habits, seasons, light gear tips, safety and etiquette — with links to National parks, Weekend trips and Weekend travel.",
    keywords: [
      "hiking Netherlands",
      "walking Netherlands",
      "Dutch hiking trails",
      "wandelen Netherlands",
      "LAW trails Netherlands",
      "streekpaden Netherlands",
      "hiking for expats Netherlands",
      "trail apps Netherlands",
      "Dutch walking culture",
      "weekend hike Netherlands",
      "hiking etiquette Netherlands",
      "how to start hiking Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Weekend & lifestyle",
    pageTitle: "Hiking in the Netherlands",
    subtitle:
      "Walking and hiking culture for expats: how Dutch routes work, maps and apps habits, seasons, light gear tips, safety and etiquette — not a park catalogue or bike guide.",
    primaryCta: { label: "Understand routes", href: "#routes" },
    secondaryCta: { label: "Hiking checklist", href: "#checklist" },
    chips: ["Walking culture", "Routes", "Maps & apps", "Seasons", "Safety"],
    disclaimer:
      "General lifestyle orientation only — not travel, booking, safety or financial advice and not a ranking of trails, parks, tour operators or gear shops. Conditions, path rules and weather change. Verify maps, park pages and planners before you go. National parks owns park-system depth; Weekend travel owns OV how-to; Cycling owns bikes.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch hiking morning: multicultural expats with light daypacks on a marked forest or dune walking path, soft daylight nature and reassuring leisure mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#culture", label: "Walking culture" },
    { href: "#routes", label: "Routes" },
    { href: "#maps", label: "Maps & apps" },
    { href: "#seasons", label: "Seasons" },
    { href: "#gear", label: "Light gear" },
    { href: "#safety", label: "Safety" },
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
      "Premium orientation board titled Hiking After Arrival — four building blocks: understand Dutch walking culture, choose a route type, set maps habits, pack light and stay safe — Hiking Checklist rail on the right, Dutch forest and canal skyline band and ExpatLife brand footer.",
      "Four habits cover most first walks: culture, route type, maps, light kit and safety."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of hiking in the Netherlands — walking culture, route types, maps and apps, seasons, light gear, safety and etiquette — Dutch nature skyline band and ExpatLife brand footer.",
      "Six building blocks explain almost every first Dutch hiking question for newcomers."
    ),
    culture: visual(
      "culture",
      "Premium culture board — everyday wandelen, weekend day walks, café pauses, social walking groups lightly — kitchen-table scene with Walking culture notes rail and ExpatLife brand footer.",
      "Dutch hiking often looks like calm marked walks with café pauses — not alpine expeditions."
    ),
    routes: visual(
      "routes",
      "Premium route-orientation board — local marked loops, streekpaden regional paths, LAW long-distance lightly — map-style cards with Route notes rail, Dutch path landscape and ExpatLife brand footer.",
      "Start local, then try regional paths — long-distance LAW is optional later."
    ),
    maps: visual(
      "maps",
      "Premium maps-and-apps board — offline map habit, marked waymarks, planner screenshots, return timing — desk scene with Maps habits rail and ExpatLife brand footer.",
      "Maps plus waymarks beat freestyle wandering on first Dutch walks."
    ),
    seasons: visual(
      "seasons",
      "Premium seasons board — spring soft paths, summer long evenings, autumn mud and colour, winter short loops — calendar scene with Season cues rail and ExpatLife brand footer.",
      "Match distance to daylight and mud — open Weather for dressing."
    ),
    gear: visual(
      "gear",
      "Premium light-gear board — waterproof-friendly shoes, layers, rain shell, water bottle, light daypack — hallway desk with Pack light rail and ExpatLife brand footer.",
      "Comfortable shoes and layers beat heavy alpine kits for most NL walks."
    ),
    safety: visual(
      "safety",
      "Premium safety and etiquette board — stay on paths, share with bikes, tell someone your plan, daylight return — pathside scene with Safety notes rail and ExpatLife brand footer.",
      "Marked paths, daylight returns and shared-path etiquette keep walks calm."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first local walk, couple dune day, family short loop, solo forest reset, friends group walk — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match the walk shape to energy and company — not a copied influencer list."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — alpine expectations, ignoring mud, skipping maps, treating this as trail SEO, confusing hiking with cycling, marathon first days — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is expectation mismatch and overambition — not finding a path."
    ),
    checklist: visual(
      "checklist",
      "Premium hiking readiness checklist clipboard — route type chosen, map habit set, weather checked, light gear packed, Weekend travel opened, etiquette reviewed — Dutch kitchen table with daypack and ExpatLife brand footer.",
      "Use this checklist so your first Dutch hike stays calm."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "Local marked loop", note: "Before long-distance LAW" },
    { label: "Choose by", value: "Route type", note: "Local → regional → LAW" },
    { label: "Transport", value: "Weekend travel", note: "OV how-to sibling" },
    { label: "Parks depth", value: "National parks", note: "Park-system sibling" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Hiking in the Netherlands is mostly calm, marked walking (wandelen): local loops, regional streekpaden, and optional long-distance LAW routes through dunes, forests, polders and villages. Expats who expect alpine wilderness often feel surprised — Dutch walks reward good maps habits, mud-friendly shoes and early returns more than heavy expedition kits.",
    "This page owns walking and hiking culture: route orientation, trail apps and maps habits, seasons, light gear tips, safety and etiquette. National parks owns Nationale Parken system depth. Weekend trips short-orients destination ideas. Weekend travel owns NS/OV how-to. Cycling owns bikes — walking is not cycling. Making Dutch friends can support social walking groups lightly. Weather helps dressing. Survival Guide remains wider living orientation.",
  ],
  introHighlights: [
    "Start with a nearby marked loop before long-distance LAW ambitions.",
    "Learn route types lightly: local walks, streekpaden, then LAW if you want.",
    "Build a maps-and-waymarks habit; open Weekend travel for train trailheads.",
    "Use National parks for park-system depth; Cycling only for bike access.",
  ],
  orientationFlowSteps: [
    "Understand Dutch walking culture (marked paths, café pauses, shared routes).",
    "Choose a route type that matches energy (local → regional → LAW later).",
    "Set maps and apps habits, then check weather and daylight.",
    "Pack light, follow path etiquette, and plan the return early.",
  ],
  travelFileChecklist: [
    "Route type written (local loop / streekpad / LAW segment)",
    "Map or offline track ready plus waymark awareness",
    "Weather and layers checked",
    "Weekend travel sibling opened if the trailhead needs OV",
    "Light daypack: water, rain shell, phone charged",
    "Etiquette basics reviewed (paths, bikes, dogs where relevant)",
  ],
  introScenarios: [
    {
      situation: "First Saturday walk after arrival",
      approach: "Nearby marked loop with café option and early return.",
      firstStep: "Open routes and maps.",
    },
    {
      situation: "Couple wanting dunes",
      approach: "Coast-edge walk, wind layer, short distance.",
      firstStep: "Open seasons and National parks lightly.",
    },
    {
      situation: "Family with young kids",
      approach: "Short radius, toilets nearby, rainy backup.",
      firstStep: "Open gear lightly and Family activities.",
    },
    {
      situation: "Wanting social walking",
      approach: "Local group or club walk after a solo practice loop.",
      firstStep: "Open culture and Making Dutch friends.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Expectation mismatch causes more friction than ‘wrong’ trails.",
    "Dutch hiking is often signed recreation walking — stay on marked paths.",
    "Transport depth lives on Weekend travel — keep this page on walking culture.",
    "Park-system depth lives on National parks; bikes live on Cycling.",
  ],
  quickAnswer: {
    heading: "How hiking works for expats in the Netherlands",
    summary:
      "Dutch hiking is mostly marked walking on local loops, regional streekpaden and optional LAW long-distance routes. Choose a route type, use maps and waymarks, pack light for mud and rain, follow path etiquette, and plan returns early. National parks deepens park orientation; Weekend trips short-orients getaway ideas; Weekend travel owns OV; Cycling owns bikes.",
    bullets: [
      "Walking culture, routes, maps habits, seasons, light gear and safety live on this page.",
      "Nationale Parken system depth lives on National parks.",
      "Destination ideas live on Weekend trips; OV how-to on Weekend travel.",
      "Avoid treating this guide as a ranking of trails, parks, tour operators or gear shops.",
    ],
    note: "If you only open one sibling after this page, open National parks for park days or Weekend travel for how to reach trailheads.",
  },
  snapshotCards: [
    {
      title: "Walking culture",
      body: "Everyday wandelen, weekend day walks and café pauses — not alpine expeditions by default.",
    },
    {
      title: "Route types",
      body: "Local marked loops, streekpaden regional paths, LAW long-distance lightly.",
    },
    {
      title: "Maps & apps",
      body: "Waymarks plus offline map habits beat freestyle wandering.",
    },
    {
      title: "Seasons",
      body: "Mud, wind, daylight and holiday crowding change the calm distance.",
    },
    {
      title: "Light gear",
      body: "Shoes, layers, rain shell and water — skip heavy expedition kits.",
    },
    {
      title: "Safety & etiquette",
      body: "Stay on paths, share with bikes, return in daylight, tell someone your plan.",
    },
  ] satisfies TipCard[],
  culture: {
    heading: "Dutch walking and hiking culture",
    intro:
      "In the Netherlands, hiking often looks like practical leisure walking: marked paths through dunes, forests, polders and villages, with café or terrace pauses and a calm Sunday return. Many locals call it wandelen — the culture prizes comfort and planning over summit drama.",
    paragraphs: [
      "Shared paths with cyclists and families are common. Dog rules, seasonal notices and park boundaries matter when walks enter Nationale Parken landscapes — deepen park-system expectations on National parks. Social walking clubs and Meetup-style groups exist; Making Dutch friends can support social leisure lightly without turning this page into a club directory.",
      "This is not a ranking of tours or influencers. Treat culture notes as orientation so your first walks feel Dutch — short, signed and weather-aware.",
    ],
    rows: [
      {
        topic: "Everyday wandelen",
        whatToCheck: "Nearby parks and local loops",
        tip: "Practice close to home before day-trip trailheads.",
      },
      {
        topic: "Weekend day walks",
        whatToCheck: "Distance + return train or bus",
        tip: "Open Weekend travel for OV timing.",
      },
      {
        topic: "Café pauses",
        whatToCheck: "Village or visitor-centre stops",
        tip: "Build a snack or coffee stop into longer loops.",
      },
      {
        topic: "Social walking",
        whatToCheck: "Local clubs or group walks",
        tip: "Try one solo practice loop first — then Making Dutch friends.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Signed leisure", body: "Waymarks and maps are part of the culture — not optional extras." },
      { title: "Shared space", body: "Expect bikes, strollers and dog walkers on many routes." },
      { title: "Calm ambition", body: "Short successful walks beat epic first-day failures." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "National parks",
        href: NATIONAL_PARKS_NETHERLANDS_PATH,
        status: "live",
        description: "When walks enter Nationale Parken landscapes.",
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
        description: "When the walk is part of a wider weekend vibe.",
      },
    ] satisfies LifestyleLink[],
  },
  routes: {
    heading: "Route orientation: local walks, streekpaden, LAW",
    intro:
      "Think in route types before collecting trail names. Local marked loops build confidence. Streekpaden (regional paths) add multi-hour or multi-stage options. LAW (Lange-Afstand-Wandelpaden) are long-distance national walking routes — useful later, not required for your first month.",
    paragraphs: [
      "Waymarking systems and naming conventions evolve; always confirm the live map for your area. Many pleasant walks sit outside formal Nationale Parken — park-system orientation still helps when you choose dune or forest landscapes on National parks.",
      "We do not publish a ranked best-of trail list or recommend paid tour operators. Choose by distance, surface and transport access, then verify on official or trusted map sources.",
    ],
    rows: [
      {
        topic: "Local marked loops",
        whatToCheck: "Colour-coded or waymarked short walks",
        tip: "Best first step after arrival.",
      },
      {
        topic: "Streekpaden",
        whatToCheck: "Regional multi-hour or stage paths",
        tip: "Try after a few calm local loops.",
      },
      {
        topic: "LAW routes",
        whatToCheck: "Long-distance national walking network",
        tip: "Optional later — walk segments, not the whole route first.",
      },
      {
        topic: "Park landscapes",
        whatToCheck: "Dunes, forest, heath inside parks",
        tip: "Open National parks for visitor and etiquette depth.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Local first", body: "Nearby loops teach waymarks before long transfers." },
      { title: "Segment mindset", body: "On LAW or streekpaden, plan one stage and a clear exit." },
      { title: "No trail SEO", body: "Filters beat influencer rankings for first walks." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "National parks",
        href: NATIONAL_PARKS_NETHERLANDS_PATH,
        status: "live",
        description: "Park-system and landscape-type depth.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Nature weekend destination ideas.",
      },
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV how-to when trailheads need trains.",
      },
    ] satisfies LifestyleLink[],
  },
  maps: {
    heading: "Maps, apps and waymark habits",
    intro:
      "Calm Dutch walks combine on-the-ground waymarks with a digital or paper backup. Screenshot your route, note the return hub, and keep your phone charged — signal can thin in dunes and forests.",
    paragraphs: [
      "Useful habits: download offline maps where your app supports it, confirm colour or symbol waymarks at the start, and avoid freestyle shortcuts off marked paths (especially in parks and nature reserves). Planners like NS and 9292 help trailhead access — deepen leisure OV on Weekend travel.",
      "App names and features change. Treat any tool note as orientation, not an endorsement ranking. Verify map freshness the morning you leave.",
    ],
    rows: [
      {
        topic: "Waymarks",
        whatToCheck: "Colour, arrows or LAW symbols at junctions",
        tip: "Pause at every fork until the mark is clear.",
      },
      {
        topic: "Offline backup",
        whatToCheck: "Downloaded map or screenshot of the loop",
        tip: "Do not rely on live data alone.",
      },
      {
        topic: "Return hub",
        whatToCheck: "Station, bus stop or parking exit",
        tip: "Write the last useful return time before you start.",
      },
      {
        topic: "Battery & weather",
        whatToCheck: "Charged phone + rain shell for the screen",
        tip: "Cold and wet drains batteries faster.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Mark + map", body: "Waymarks for junctions; digital map for overview." },
      { title: "Exit plan", body: "Know how you leave before you go deep into the loop." },
      { title: "OV sibling", body: "Trailhead trains and buses deepen on Weekend travel." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV how-to for leisure getaways and trailheads.",
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
  seasons: {
    heading: "Seasons, weather and walking days",
    intro:
      "Mud, wind, daylight and holiday crowds change what ‘a short walk’ means. Match distance to season, dress with Weather, and expect wetter paths after rain year-round.",
    paragraphs: [
      "Spring suits milder forest and dune walks with shower backups. Summer suits longer evenings — still pack a wind layer for the coast. Autumn brings colour and mud; waterproof-friendly shoes transform the day. Winter suits short loops and early returns.",
      "Official holiday calendars change year to year. Treat crowd notes as orientation only.",
    ],
    rows: [
      {
        topic: "Spring",
        whatToCheck: "Showers and soft paths",
        tip: "Layers + café backup near the start.",
      },
      {
        topic: "Summer",
        whatToCheck: "Heat, coast wind, holiday peaks",
        tip: "Start early; protect Sunday return.",
      },
      {
        topic: "Autumn",
        whatToCheck: "Mud and shorter daylight",
        tip: "Waterproof shoes and earlier exits.",
      },
      {
        topic: "Winter",
        whatToCheck: "Short daylight and wet ground",
        tip: "Short loops only — skip marathon ambitions.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Weather sibling", body: "Open Weather for rain, wind and dressing habits." },
      { title: "Mud realism", body: "Dutch paths stay damp — shoe choice matters more than brand." },
      { title: "Light matters", body: "Winter walks need earlier returns than summer evenings." },
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
  gear: {
    heading: "Light gear tips for Dutch walks",
    intro:
      "Most Netherlands walks need comfort and weather readiness — not alpine expedition kits. Prioritise shoes that tolerate damp paths, layers, a compact rain shell, water and a light daypack.",
    paragraphs: [
      "Optional extras: a small first-aid pouch, power bank, and a paper map backup for longer stages. Skip heavy boots and surplus camping gear unless you already know you need them. This page does not rank brands or gear shops.",
      "Kids and mobility needs change the kit — Family activities helps when walks are family days. Bike access for last mile belongs on Cycling and Bike sharing, not in a hiking-gear packing list.",
    ],
    rows: [
      {
        topic: "Footwear",
        whatToCheck: "Damp-path comfort and grip",
        tip: "Broken-in shoes beat new blisters.",
      },
      {
        topic: "Layers",
        whatToCheck: "Base + mid + packable shell",
        tip: "Coast wind can surprise summer walkers.",
      },
      {
        topic: "Daypack",
        whatToCheck: "Water, snacks, phone, shell",
        tip: "Keep it light so you actually carry it.",
      },
      {
        topic: "Optional",
        whatToCheck: "Power bank, small first-aid, offline map",
        tip: "Useful on longer stages — not for every café stroll.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Shoes first", body: "Mud and boardwalks punish fashion sneakers." },
      { title: "Shell always", body: "A packable rain layer solves most Dutch surprise showers." },
      { title: "No gear SEO", body: "Orientation only — verify products yourself." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Dressing cues by season.",
      },
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live",
        description: "When walks are family leisure days.",
      },
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Bike habits when last mile is by bike — not walking kit.",
      },
    ] satisfies LifestyleLink[],
  },
  safety: {
    heading: "Safety, etiquette and shared paths",
    intro:
      "Dutch walks stay pleasant when visitors treat paths, wildlife and other guests with calm respect. Stay on marked routes, share space with cyclists, return in daylight, and tell someone your plan on longer stages.",
    paragraphs: [
      "Core habits: follow on-site signs, pack out litter, keep dogs under posted rules, and avoid off-path shortcuts in nature reserves and parks. Drones, open fires and freestyle bushwhacking are common expectation mismatches. In Nationale Parken landscapes, deepen park etiquette on National parks.",
      "This is general orientation — not professional safety, legal or medical advice. When conditions look unsafe (storms, flooding, fire risk), postpone. Social group walks still need personal judgement; Making Dutch friends can support finding people, not replacing common sense.",
    ],
    rows: [
      {
        topic: "Paths",
        whatToCheck: "Marked routes only",
        tip: "Protect habitats — shortcuts are often restricted.",
      },
      {
        topic: "Shared traffic",
        whatToCheck: "Bikes, walkers and families",
        tip: "Keep right where guided; announce when passing.",
      },
      {
        topic: "Daylight return",
        whatToCheck: "Sunset and last OV connection",
        tip: "Winter days need earlier exits.",
      },
      {
        topic: "Tell someone",
        whatToCheck: "Route idea and return window",
        tip: "Especially for solo longer stages.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Leave no trace", body: "Pack out snacks and tissues — bins may be sparse." },
      { title: "Share the path", body: "Walking ≠ cycling, but many routes are shared." },
      { title: "Ask locally", body: "Visitor centres and park pages clarify grey areas faster than forums." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "National parks",
        href: NATIONAL_PARKS_NETHERLANDS_PATH,
        status: "live",
        description: "Park etiquette and visitor rules depth.",
      },
      {
        label: "Making Dutch friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        status: "live",
        description: "Social outdoor habits lightly.",
      },
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Bike etiquette when paths are shared.",
      },
    ] satisfies LifestyleLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility options for walking days",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when a hiking or walking day needs a train, trailhead car share or local bike. This block is not a ranking of trails, parks, tour operators or gear shops.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a walking day — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer Weekend travel for OV planning depth and National parks for park-system orientation.",
    placementId: "nl-living-hiking-support-providers",
    analyticsPageContext: "hiking-netherlands-recommended-options",
    categoryLinks: [
      { href: WEEKEND_TRAVEL_NETHERLANDS_PATH, label: "Weekend travel" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
      { href: CYCLING_NETHERLANDS_PATH, label: "Cycling" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat hiking scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First walk after arrival",
        approach: "Nearby marked loop + maps habit + early return.",
        firstStep: "Open routes and maps.",
      },
      {
        situation: "Couple dune day",
        approach: "Coast-edge short walk, wind layer, café pause.",
        firstStep: "Open seasons and National parks lightly.",
      },
      {
        situation: "Family with kids",
        approach: "Short radius, toilets, rainy backup.",
        firstStep: "Open gear lightly and Family activities.",
      },
      {
        situation: "Solo forest reset",
        approach: "Marked loop, tell someone, daylight return.",
        firstStep: "Open safety and maps.",
      },
      {
        situation: "Friends group walk",
        approach: "Agree distance and exit hub before you start.",
        firstStep: "Open culture and Making Dutch friends.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Expecting alpine hiking",
      body: "Dutch walks are often flat, signed and recreational — not mountain expeditions.",
      advice: "Plan marked loops and mud-aware shoes instead of summit kits.",
    },
    {
      title: "Ignoring mud and rain",
      body: "Paths stay damp; fashion shoes create blisters and early exits.",
      advice: "Pack waterproof-friendly footwear and a rain shell.",
    },
    {
      title: "Skipping maps habits",
      body: "Waymarks alone are not enough if you miss a junction without a backup map.",
      advice: "Screenshot or download the loop and note the return hub.",
    },
    {
      title: "Treating this as trail SEO",
      body: "Rankings of trails, parks, tour operators or gear shops are not orientation.",
      advice: "Choose by route type + distance + transport access.",
    },
    {
      title: "Confusing hiking with cycling",
      body: "Walking culture and bike culture share paths but are different skills and guides.",
      advice: "Use this page for walking; open Cycling for bikes.",
    },
    {
      title: "Marathon first days",
      body: "Long LAW ambitions on week one create fatigue and missed last trains.",
      advice: "Local loops first — then regional stages with Weekend travel timing.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Hiking readiness checklist",
    intro: "Use this before your first Dutch hike so route type, maps, weather and return timing stay aligned.",
    items: [
      "Route type chosen (local loop / streekpad / LAW segment)",
      "Map or offline track ready plus waymark awareness",
      "Weather and layers checked",
      "Light daypack packed (water, shell, charged phone)",
      "Weekend travel opened if the trailhead needs OV",
      "Etiquette basics reviewed (paths, bikes, dogs where relevant)",
      "National parks noted if the walk is inside a park landscape",
      "Sunday or evening return kept calm",
    ],
  },
  howTo: {
    heading: "How to start hiking calmly in the Netherlands",
    steps: [
      {
        name: "Understand walking culture",
        text: "Expect marked recreational walks, shared paths and café pauses — not alpine expeditions by default.",
      },
      {
        name: "Choose a route type",
        text: "Start with a local marked loop; try streekpaden later; treat LAW as optional segments.",
      },
      {
        name: "Set maps habits",
        text: "Combine waymarks with an offline map or screenshot and write down the return hub.",
      },
      {
        name: "Pack light and check weather",
        text: "Shoes, layers, rain shell and water — open Weather for dressing cues.",
      },
      {
        name: "Walk with etiquette and a return plan",
        text: "Stay on paths, share with bikes, return in daylight — deepen OV on Weekend travel when needed.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to start hiking in the Netherlands",
    description:
      "Orientation steps for expats choosing a Dutch walking route type, setting maps habits, packing light and following path etiquette.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "How is this different from National parks?",
      a: "This page owns walking and hiking culture: route types, maps habits, seasons, light gear, safety and etiquette. National parks owns Nationale Parken system orientation, visitor expectations and park etiquette depth.",
    },
    {
      q: "How is this different from Weekend trips?",
      a: "Weekend trips owns destination ideas and weekend lifestyle planning. This page deepens hiking and walking culture when the activity is the focus.",
    },
    {
      q: "Where do I plan trains and OV to a trailhead?",
      a: "Open Weekend travel for leisure OV how-to, last mile and return timing. NS trains and Train discounts deepen riding and product math.",
    },
    {
      q: "Is hiking the same as cycling here?",
      a: "No. Walking and cycling often share space, but skills, kit and guides differ. Use this page for walking; open Cycling and Bike sharing for bikes.",
    },
    {
      q: "Do you rank the best hiking trails?",
      a: "No. Route types and planning filters are orientation only. Confirm maps and rules on trusted map and park sources.",
    },
    {
      q: "What are LAW and streekpaden?",
      a: "LAW are long-distance national walking routes; streekpaden are regional paths. Both are optional after you are comfortable with local marked loops — verify live maps for your area.",
    },
    {
      q: "How do I find social walking groups?",
      a: "Local clubs and informal group walks exist. Practice one solo marked loop first, then open Making Dutch friends for social leisure habits. We do not publish a ranked club directory.",
    },
    {
      q: "Is this travel or safety advice?",
      a: "No. ExpatLife provides general lifestyle orientation only. Follow official park, tourism, weather and transport guidance and use your own judgement outdoors.",
    },
  ],
  relatedGuidesTips: [
    "Park-system depth → National parks.",
    "Destination ideas → Weekend trips.",
    "OV how-to → Weekend travel.",
    "Museumkaart culture → Museums.",
    "Quieter places → Hidden gems.",
    "Coast walks → Beach towns.",
    "Historic grounds → Castles.",
    "Bikes → Cycling / Bike sharing.",
    "Kid leisure → Family activities.",
    "Seasons → Weather.",
    "Social walks → Making Dutch friends.",
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
      label: "National parks",
      href: NATIONAL_PARKS_NETHERLANDS_PATH,
      status: "live",
      description: "Nationale Parken system orientation.",
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
      description: "Indoor culture when trails are muddy.",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Quieter neighbourhood and small-town walks.",
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
      description: "Castles and historic houses with garden walks.",
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
      description: "Everyday bike habits — not walking culture.",
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
      description: "Seasons and dressing for Dutch walking days.",
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
      description: "Social outdoor and group walking habits lightly.",
    },
  ] satisfies LifestyleLink[],
  lifestyleHubTips: [
    "Hiking is the walking-culture guide in Weekend & lifestyle.",
    "Weekend trips leads destination ideas; National parks deepens parks.",
    "Museums, Hidden gems, Beach towns and Castles deepen lifestyle peers.",
    "Weekend travel stays under Public transport for OV how-to.",
    "Cycling remains separate — walking ≠ bikes.",
    "Weather and Family activities support seasons and kid days.",
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
      description: "Nationale Parken orientation.",
    },
    {
      label: "Hiking",
      href: HIKING_NETHERLANDS_PATH,
      status: "live",
      description: "Walking and hiking culture — you are here.",
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
      label: "National parks",
      href: NATIONAL_PARKS_NETHERLANDS_PATH,
      status: "live",
      description: "Need Nationale Parken system and visitor depth?",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Trail day out — back same evening?",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Multi-stop countryside loop by car?",
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
      description: "Want a coast walk and beach-town culture?",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer gardens and historic-house grounds?",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer quieter neighbourhood or town walks?",
    },
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Want bike access instead of (or after) walking?",
    },
  ] satisfies LifestyleLink[],
  exploreNextTips: [
    "Parks → National parks.",
    "Same-day → Day trips.",
    "Car multi-stop → Road trips.",
    "Transport → Weekend travel.",
    "Coast → Beach towns.",
    "Historic grounds → Castles.",
  ],
  officialSources: [
    {
      label: "Wandelen in Nederland — Wandelnet",
      href: "https://www.wandelnet.nl/",
      description: "National walking network orientation (LAW and related paths — confirm live maps).",
    },
    {
      label: "Nationale Parken — official parks overview",
      href: "https://www.nationaalpark.nl/",
      description: "Orientation when walks enter Dutch national parks.",
    },
    {
      label: "Staatsbosbeheer — nature areas",
      href: "https://www.staatsbosbeheer.nl/en",
      description: "National forest service orientation for many walking landscapes.",
    },
    {
      label: "Natuurmonumenten",
      href: "https://www.natuurmonumenten.nl/",
      description: "Nature organisation orientation for estates and landscapes.",
    },
    {
      label: "Netherlands Board of Tourism & Conventions — Holland.com",
      href: "https://www.holland.com/global/tourism.htm",
      description: "Official tourism orientation for nature and regions.",
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
      items: ["Understand walking culture.", "Choose a route type.", "Set maps habits.", "Pack light and stay safe."],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Walking culture.",
        "Route types.",
        "Maps and apps.",
        "Seasons.",
        "Light gear.",
        "Safety and etiquette.",
      ],
    },
    culture: {
      title: "From the visual — culture cues",
      items: ["Everyday wandelen.", "Weekend day walks.", "Café pauses.", "Social walking lightly."],
    },
    routes: {
      title: "From the visual — route cues",
      items: ["Local marked loops.", "Streekpaden.", "LAW segments lightly.", "Park landscapes link."],
    },
    maps: {
      title: "From the visual — maps cues",
      items: ["Waymarks.", "Offline backup.", "Return hub.", "Charged phone."],
    },
    seasons: {
      title: "From the visual — season cues",
      items: ["Spring soft paths.", "Summer evenings.", "Autumn mud.", "Winter short loops."],
    },
    gear: {
      title: "From the visual — gear cues",
      items: ["Damp-path shoes.", "Layers.", "Rain shell.", "Light daypack."],
    },
    safety: {
      title: "From the visual — safety cues",
      items: ["Stay on paths.", "Share with bikes.", "Daylight return.", "Tell someone."],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: ["First local walk.", "Couple dune day.", "Family short loop.", "Solo forest reset."],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: ["Alpine expectations.", "Ignoring mud.", "Skipping maps.", "Trail SEO rankings."],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: ["Route type chosen.", "Map habit set.", "Weekend travel opened.", "Etiquette reviewed."],
    },
  },
  disclosure:
    "ExpatLife provides general hiking, walking and lifestyle orientation for newcomers. It is not travel, booking, safety or financial advice and not a ranking of trails, parks, tour operators or gear shops. Path rules, weather and access change — always confirm on official park, tourism, map and transport pages. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
} as const;

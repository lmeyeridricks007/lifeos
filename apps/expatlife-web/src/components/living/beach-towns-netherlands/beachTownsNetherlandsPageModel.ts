import {
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
const VISUAL_PREFIX = "beach-towns-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const beachTownsNetherlandsPage = {
  slug: "beach-towns-netherlands",
  path: BEACH_TOWNS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: LIVING_SURVIVAL_GUIDE_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(BEACH_TOWNS_NETHERLANDS_PATH) ?? "2026-10-17",
  seo: {
    title: "Beach towns in the Netherlands | Complete Guide for Expats",
    description:
      "Beach towns and coastal days for expats in the Netherlands: what to expect, seasons, North Sea vs Zeeland vs Wadden orientation, packing and crowds, and calm planning — with links to Weekend trips and Weekend travel.",
    keywords: [
      "beach towns Netherlands",
      "Dutch beach towns",
      "Netherlands beach day",
      "North Sea beach Netherlands",
      "Zeeland beach orientation",
      "Wadden coast Netherlands",
      "expat beach weekend Netherlands",
      "Dutch coastal towns",
      "beach packing Netherlands",
      "when to visit Dutch beaches",
      "quiet beach Netherlands",
      "family beach day Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Weekend & lifestyle",
    pageTitle: "Beach towns in the Netherlands",
    subtitle:
      "Coastal towns and beach-day culture for expats: what to expect, seasons, how to choose a stretch, packing and crowds — not a ranked best beaches or hotels list.",
    primaryCta: { label: "Choose a stretch", href: "#stretches" },
    secondaryCta: { label: "Beach checklist", href: "#checklist" },
    chips: ["North Sea", "Zeeland", "Wadden", "Seasons", "Packing"],
    disclaimer:
      "General lifestyle orientation only — not travel, booking or financial advice and not a ranking of beach towns, hotels or tour operators. Weather, crowds, parking and transport change. Verify local tourism pages, KNMI and planners before you go. Weekend trips short-orients coast weekends; Weekend travel owns OV how-to-get-there.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch North Sea beach morning: multicultural expats with light day bags walking a sandy path toward dunes and a coastal town promenade, soft daylight and reassuring leisure mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#culture", label: "Beach culture" },
    { href: "#seasons", label: "Seasons" },
    { href: "#stretches", label: "Stretches" },
    { href: "#vibes", label: "Vibes" },
    { href: "#packing", label: "Packing" },
    { href: "#crowds", label: "Crowds & tips" },
    { href: "#getting-there", label: "Getting there" },
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
      "Premium orientation board titled Beach Towns After Arrival — four building blocks: expect Dutch beach culture, match season and stretch, pack for wind and layers, plan transport lightly — Beach Day Checklist rail on the right, North Sea dune and coastal skyline band and ExpatLife brand footer.",
      "Four habits cover most first beach months: culture, season and stretch, packing, transport link."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of beach towns in the Netherlands — beach culture, seasons, coastal stretches, vibe filters, packing weather, crowds and getting there — Dutch dune skyline band and ExpatLife brand footer.",
      "Six building blocks explain almost every first Dutch beach-day question for newcomers."
    ),
    culture: visual(
      "culture",
      "Premium beach culture board — strandpaviljoen café pauses, dune paths, layered clothing, Sunday return calm — promenade desk scene with Beach culture notes rail and ExpatLife brand footer.",
      "Dutch beach days often favour wind-aware layers, café pauses and early return plans."
    ),
    seasons: visual(
      "seasons",
      "Premium seasons calendar board — spring shoulder, summer peaks, autumn walks, winter bracing air, holiday crowding notes — desk calendar scene with Season cues rail and ExpatLife brand footer.",
      "Match vibe to season and check Weather — holidays change crowds hard."
    ),
    stretches: visual(
      "stretches",
      "Premium coastal-stretches board — North Sea mainland, Zeeland arms, Wadden orientation — map-style cards with Stretch notes rail, dune and water landscape and ExpatLife brand footer.",
      "Choose a stretch pattern first — not a ranked beach SEO list."
    ),
    vibes: visual(
      "vibes",
      "Premium vibe-filter board — family energy, quiet edges, lively promenades, overnight vs day trip — kitchen-table cards with Vibe notes rail and ExpatLife brand footer.",
      "Filter by energy and company — family, quiet or social — before naming towns."
    ),
    packing: visual(
      "packing",
      "Premium packing and weather board — windbreaker, layers, sunscreen, towel, cashless café habit — dune-path desk scene with Pack notes rail and ExpatLife brand footer.",
      "Wind and layers beat swimsuit-only packing on most Dutch beach days."
    ),
    crowds: visual(
      "crowds",
      "Premium crowds and practical tips board — peak weekends, parking realism, early start, leave-no-trace dunes — promenade scene with Crowd notes rail and ExpatLife brand footer.",
      "Arrive early on peak days and protect dunes — patience beats FOMO rankings."
    ),
    gettingThere: visual(
      "getting-there",
      "Premium getting-there board — NS hub, bus last mile, bike hop, Weekend travel link — station-to-coast route scene with Mobility notes rail and ExpatLife brand footer.",
      "Train hubs plus last mile cover most beach days — deepen OV on Weekend travel."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first North Sea day, family summer Saturday, quiet shoulder weekend, Zeeland overnight, friends promenade evening — first-step arrows and Dutch coast skyline band with ExpatLife brand footer.",
      "Match the beach day to energy and company — not a copied influencer itinerary."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — ranking FOMO, swimsuit-only packing, ignoring wind, late peak arrival, treating this as hotel SEO — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is weather and crowd mismatch — not finding a beach."
    ),
    checklist: visual(
      "checklist",
      "Premium beach-day readiness checklist clipboard — stretch chosen, season checked, packing listed, Weekend travel opened, return plan written — Dutch kitchen table with day bag and ExpatLife brand footer.",
      "Use this checklist so your first Dutch beach month stays calm."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "One calm day", note: "Before peak Saturdays" },
    { label: "Filter first", value: "Stretch + vibe", note: "Not ranked town lists" },
    { label: "Transport", value: "Weekend travel", note: "OV how-to sibling" },
    { label: "Weather", value: "Layers + wind", note: "Check KNMI / Weather" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Beach towns and coastal days are a core leisure habit for many newcomers in the Netherlands: wind, dunes, strandpaviljoens, and short train-or-bike hops to the North Sea, Zeeland or Wadden edges. Expats who treat the first months as practice days (one stretch, realistic packing, early return) enjoy the coast more than those chasing ranked “best beach” lists.",
    "This page owns coastal towns and beach-day culture. Weekend trips short-orients coast weekends inside wider destination planning. Weekend travel owns NS/OV how-to-get-there. Hidden gems covers lesser-known inland or quiet-edge spots that are not beach-lane depth. Hiking and National parks cover nature peers. Museums covers rainy indoor culture. Cycling and Bike sharing help last mile — without putting Beach towns under the Cycling nav.",
  ],
  introHighlights: [
    "Start with one calm coastal day before peak summer Saturdays.",
    "Choose a stretch pattern (North Sea, Zeeland, Wadden) and a vibe — not a ranked town SEO list.",
    "Pack for wind and layers; check Weather and crowds the week you go.",
    "Use Weekend travel for trains and last mile; Weekend trips for wider weekend planning.",
  ],
  orientationFlowSteps: [
    "Understand Dutch beach culture (wind, dunes, café pauses, Sunday return).",
    "Match season and coastal stretch — North Sea, Zeeland or Wadden orientation.",
    "Filter by vibe (family, quiet, lively) and pack for layers and sun.",
    "Plan transport lightly via Weekend travel — protect parking and return timing.",
  ],
  travelFileChecklist: [
    "Stretch and vibe written (not a FOMO town ranking)",
    "Season / holiday crowding considered",
    "Layers, windbreaker, sunscreen and towel listed",
    "Weekend travel opened if the day needs OV",
    "Parking or last-mile plan noted",
    "Return train or bike plan written",
  ],
  introScenarios: [
    {
      situation: "First North Sea Saturday after arrival",
      approach: "One nearby stretch, layered packing, early return.",
      firstStep: "Open culture and stretches.",
    },
    {
      situation: "Family summer beach day",
      approach: "Arrive early, short loops, snack plan, crowd realism.",
      firstStep: "Open vibes and crowds.",
    },
    {
      situation: "Quiet shoulder-season walk",
      approach: "Wind layers, dune path, café pause, weather check.",
      firstStep: "Open seasons and packing.",
    },
    {
      situation: "Zeeland overnight idea",
      approach: "Weekend trips for lodging vibe; this page for coast habits.",
      firstStep: "Open stretches and Weekend trips.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Wind and crowd mismatch cause more friction than ‘wrong’ towns.",
    "Dutch beach days often need layers even in summer — check Weather.",
    "Weekend trips short-orients coast weekends; this page owns beach-town depth.",
    "OV how-to lives on Weekend travel — keep parking optional and verified locally.",
  ],
  quickAnswer: {
    heading: "How beach towns work for expats in the Netherlands",
    summary:
      "Dutch coastal culture favours wind-aware packing, dune paths, strandpaviljoen pauses and calm return plans. Orient on seasons and stretch patterns (North Sea mainland, Zeeland, Wadden), filter by family vs quiet vs lively vibes without rankings, and plan transport via Weekend travel. Weekend trips short-orients coast weekends; Hidden gems covers lesser-known non-beach lanes; Hiking and National parks are nature peers.",
    bullets: [
      "Beach culture, seasons, stretches, vibes, packing, crowds and getting there live on this page.",
      "Weekend destination planning lives on Weekend trips; OV how-to on Weekend travel.",
      "Lesser-known inland or quiet-edge spots deepen on Hidden gems when they are not beach-lane.",
      "Avoid treating this guide as a ranking of beach towns, hotels or tour operators.",
    ],
    note: "If you only open one sibling after this page, open Weekend travel for how to get there or Weekend trips for a wider coast weekend vibe.",
  },
  snapshotCards: [
    {
      title: "Beach culture",
      body: "Wind, dunes, café pauses and Sunday return calm — not tropical swim-only assumptions.",
    },
    {
      title: "Seasons",
      body: "Shoulder walks, summer peaks and bracing winter air — match vibe to weather.",
    },
    {
      title: "Coastal stretches",
      body: "North Sea, Zeeland and Wadden orientation — choose a pattern, not a ranking.",
    },
    {
      title: "Vibe filters",
      body: "Family energy, quiet edges or lively promenades — filter before naming towns.",
    },
    {
      title: "Packing & weather",
      body: "Layers, windbreaker and sunscreen beat swimsuit-only day bags.",
    },
    {
      title: "Crowds & getting there",
      body: "Early starts, parking realism and Weekend travel for OV last mile.",
    },
  ] satisfies TipCard[],
  culture: {
    heading: "Dutch beach culture for newcomers",
    intro:
      "In the Netherlands, beach days often look like practical leisure: check the wind, pack layers, walk a dune path, pause at a strandpaviljoen, and plan an early return. Many locals treat the coast as a regular weekend habit — not only a midsummer swim destination.",
    paragraphs: [
      "Expect cool water relative to Mediterranean holidays, changeable weather, and busy promenades on peak Saturdays. Social beach meetups exist lightly — Making Dutch friends can support leisure habits without turning this page into a club directory.",
      "This is not a ranking of beach towns or influencers. Treat culture notes as orientation so your first coastal days feel Dutch — wind-aware, paced and transport-planned.",
    ],
    rows: [
      {
        topic: "Wind & layers",
        whatToCheck: "KNMI / Weather and evening drop",
        tip: "A light windbreaker beats swimsuit-only packing.",
      },
      {
        topic: "Strandpaviljoen pauses",
        whatToCheck: "Opening hours and card payment",
        tip: "Build a café break into longer beach walks.",
      },
      {
        topic: "Dune paths",
        whatToCheck: "Marked routes and leave-no-trace rules",
        tip: "Stay on paths — dunes are fragile.",
      },
      {
        topic: "Sunday return",
        whatToCheck: "Last useful train or parking exit",
        tip: "Protect return timing — deepen OV on Weekend travel.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Expect wind", body: "North Sea days are often bracing — layers keep the day pleasant." },
      { title: "Pace calmly", body: "One strong coastal loop beats chasing three ranked towns." },
      { title: "No beach SEO", body: "Vibe and stretch filters beat influencer rankings." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "When the beach day sits inside a wider weekend vibe.",
      },
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Wind, rain and season cues for coastal days.",
      },
      {
        label: "Making Dutch friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        status: "live",
        description: "Social leisure habits lightly.",
      },
    ] satisfies LifestyleLink[],
  },
  seasons: {
    heading: "Seasons: when Dutch beach days feel best",
    intro:
      "Dutch beaches are year-round walking spaces — not only July swim destinations. Match your vibe to the season: shoulder months for quieter dunes, summer for energy and crowds, autumn for bracing walks, winter for short fresh-air loops with warm layers.",
    paragraphs: [
      "School holidays and sunny Saturdays pack popular mainland stretches. Midweek and shoulder seasons often feel calmer. Always verify live weather — KNMI and the Weather guide beat old blog calendars.",
      "We do not publish a permanent best-month ranking. Treat season notes as orientation and check crowds the week you go.",
    ],
    rows: [
      {
        topic: "Spring shoulder",
        whatToCheck: "Wind, cooler water, lighter crowds",
        tip: "Great for walks and café pauses.",
      },
      {
        topic: "Summer peaks",
        whatToCheck: "Holiday calendars and parking",
        tip: "Arrive early — expect energy and queues.",
      },
      {
        topic: "Autumn walks",
        whatToCheck: "Storm forecasts and layers",
        tip: "Dramatic skies — shorter outdoor windows.",
      },
      {
        topic: "Winter bracing air",
        whatToCheck: "Daylight and warm layers",
        tip: "Short loops + warm drink plans work best.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Match vibe to season", body: "Quiet walks thrive in shoulders; peaks favour early starts." },
      { title: "Holiday realism", body: "School breaks change parking and train demand." },
      { title: "Verify weather", body: "Open Weather / KNMI the morning you go." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Season and wind cues for outdoor days.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "When-to-go notes inside wider weekend planning.",
      },
      {
        label: "Crowds & tips",
        href: "#crowds",
        status: "live",
        description: "Peak-day habits when summer fills promenades.",
      },
    ] satisfies LifestyleLink[],
  },
  stretches: {
    heading: "Coastal stretches: North Sea, Zeeland and Wadden",
    intro:
      "Think in stretch patterns before collecting town names. Mainland North Sea coasts near Randstad hubs favour quick day trips. Zeeland offers longer arms and island-feeling weekends. Wadden edges lean quieter and more nature-paced. Choose by travel time and energy — not by a ranked SEO list.",
    paragraphs: [
      "A calm first month often looks like: one nearby North Sea day, then an optional Zeeland overnight via Weekend trips planning, then a quieter Wadden-edge walk when you want space. Hidden gems owns lesser-known inland or non-beach spots outside this lane.",
      "We do not publish a best-beach-towns ranking or recommend hotels. Filter by stretch, travel time and vibe, then verify on local tourism and transport pages.",
    ],
    rows: [
      {
        topic: "North Sea mainland",
        whatToCheck: "Station town + last mile",
        tip: "Often the easiest first expat beach day.",
      },
      {
        topic: "Zeeland arms",
        whatToCheck: "Travel time and overnight energy",
        tip: "Open Weekend trips for weekend lodging vibe.",
      },
      {
        topic: "Wadden orientation",
        whatToCheck: "Quieter edges and tide awareness",
        tip: "Nature pace — deepen parks/hiking siblings if needed.",
      },
      {
        topic: "Lesser-known spots",
        whatToCheck: "Non-beach or inland quiet edges",
        tip: "Open Hidden gems for that lane.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Pattern first", body: "North Sea, Zeeland or Wadden — then pick a town." },
      { title: "One strong day", body: "Depth beats collecting ranked beach stamps." },
      { title: "Sibling lanes", body: "Weekend trips for weekends; Hidden gems for non-beach gems." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Coast weekend destination ideas and short-orient.",
      },
      {
        label: "Hidden gems",
        href: HIDDEN_GEMS_NETHERLANDS_PATH,
        status: "live",
        description: "Lesser-known places beyond beach-town lane.",
      },
      {
        label: "National parks",
        href: NATIONAL_PARKS_NETHERLANDS_PATH,
        status: "live",
        description: "Nature peer when dunes meet park systems.",
      },
      {
        label: "Getting there",
        href: "#getting-there",
        status: "live",
        description: "NS, bikes and last mile for beach days.",
      },
    ] satisfies LifestyleLink[],
  },
  vibes: {
    heading: "Vibe filters: family, quiet or lively",
    intro:
      "Filter by energy and company before naming towns. Family days need early starts, snack plans and shorter loops. Quiet seekers favour shoulder seasons and less-promenade edges. Lively days accept crowds, music and longer café windows — with parking and return timing protected.",
    paragraphs: [
      "Overnight vs day trip is a separate filter: day trips suit nearby North Sea hubs; overnights suit Zeeland or further coasts via Weekend trips planning. Family activities deepens kid leisure beyond beach-lane tips.",
      "We do not rank the quietest or best family beaches. Match vibe, stretch and travel time, then confirm facilities yourself.",
    ],
    rows: [
      {
        topic: "Family energy",
        whatToCheck: "Toilets, snack plan, early exit",
        tip: "Leave while energy is still good.",
      },
      {
        topic: "Quiet edges",
        whatToCheck: "Shoulder season and off-promenade paths",
        tip: "Expect wind — pack layers.",
      },
      {
        topic: "Lively promenades",
        whatToCheck: "Peak weekends and café hours",
        tip: "Arrive early; accept queues.",
      },
      {
        topic: "Day trip vs overnight",
        whatToCheck: "Travel time and Sunday return",
        tip: "Open Weekend trips for overnight vibe.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Company first", body: "Kids, friends or solo quiet change the plan." },
      { title: "Energy budget", body: "Short successful days beat marathon coast hopping." },
      { title: "Sibling depth", body: "Family activities owns wider kid leisure." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live",
        description: "Kid leisure beyond beach-lane tips.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Overnight coast weekend planning.",
      },
      {
        label: "Crowds & tips",
        href: "#crowds",
        status: "live",
        description: "Peak-day habits for lively weekends.",
      },
    ] satisfies LifestyleLink[],
  },
  packing: {
    heading: "Packing and weather for Dutch beach days",
    intro:
      "Pack for wind and changeable weather first. A light windbreaker, extra layer, sunscreen, towel, water and a small cashless-ready wallet cover most days — even in summer when sun and cool breeze arrive together.",
    paragraphs: [
      "Water can feel cool; many visits are more walk-and-café than long swims. Check Weather the morning you leave. Dune paths reward sturdy casual shoes over formal city footwear.",
      "This is orientation, not product advice — we do not rank beach kits or affiliate hotel packing lists.",
    ],
    rows: [
      {
        topic: "Layers & windbreaker",
        whatToCheck: "Forecast wind and evening drop",
        tip: "Keep one warm layer in the day bag.",
      },
      {
        topic: "Sun & towel",
        whatToCheck: "UV index and seating plan",
        tip: "Sunscreen still matters on breezy days.",
      },
      {
        topic: "Shoes & dunes",
        whatToCheck: "Path surface and sand",
        tip: "Comfortable shoes beat dress shoes.",
      },
      {
        topic: "Payments",
        whatToCheck: "Card-friendly cafés",
        tip: "Many pavilions prefer card — verify locally.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Wind first", body: "Layers keep North Sea days pleasant." },
      { title: "Travel light", body: "One day bag beats overpacking for FOMO towns." },
      { title: "Check Weather", body: "Morning forecast beats last week’s blog tip." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Wind, rain and season cues.",
      },
      {
        label: "Seasons",
        href: "#seasons",
        status: "live",
        description: "Match packing to the season you chose.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Packing culture for wider weekends.",
      },
    ] satisfies LifestyleLink[],
  },
  crowds: {
    heading: "Crowds, parking and practical tips",
    intro:
      "Peak sunny Saturdays and school holidays fill popular mainland stretches. Arrive early, accept queues at cafés, and treat parking as a verified local detail — not a guarantee. Leave-no-trace habits protect dunes and keep coastal towns pleasant for everyone.",
    paragraphs: [
      "If a stretch looks full, shorten the plan: walk a quieter edge, take a café pause, or pivot to Museums / Hiking siblings instead of forcing a ranked FOMO town. Family days need earlier exits than solo walks.",
      "We do not publish secret parking hacks or ranked quiet beaches. Confirm local tourism and municipality guidance when parking or access rules matter.",
    ],
    rows: [
      {
        topic: "Peak weekends",
        whatToCheck: "Holiday calendar and forecast sun",
        tip: "Arrive early or choose a shoulder day.",
      },
      {
        topic: "Parking realism",
        whatToCheck: "Local lots and time limits",
        tip: "Prefer OV when lots look full — open Weekend travel.",
      },
      {
        topic: "Dune care",
        whatToCheck: "Marked paths and signs",
        tip: "Stay on paths; pack out litter.",
      },
      {
        topic: "Plan B",
        whatToCheck: "Indoor or nature sibling",
        tip: "Museums or Hiking when the coast is packed.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Early beats FOMO", body: "Peak energy is fine if you arrive with patience." },
      { title: "Protect dunes", body: "Leave-no-trace is part of Dutch coastal culture." },
      { title: "Have a Plan B", body: "Sibling guides keep rainy or crowded days calm." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV when parking looks thin.",
      },
      {
        label: "Museums",
        href: MUSEUMS_NETHERLANDS_PATH,
        status: "live",
        description: "Indoor Plan B on wet or packed days.",
      },
      {
        label: "Hiking",
        href: HIKING_NETHERLANDS_PATH,
        status: "live",
        description: "Nature peer when you want trail energy instead.",
      },
    ] satisfies LifestyleLink[],
  },
  gettingThere: {
    heading: "Getting there: trains, bikes and last mile",
    intro:
      "Most beach days start from a station hub, a regional bus, or a bike hop to the promenade. Open Weekend travel for leisure OV how-to, NS trains for riding depth, and Cycling or Bike sharing for last mile — this page stays on beach-lane planning.",
    paragraphs: [
      "Write the last useful return time before you settle into a long dune walk. Greenwheels-style car share stays optional for family gear or thin last miles. Do not treat Beach towns as a Cycling nav duplicate — cross-link only.",
      "OV chipkaart and OVpay habits deepen on public-transport siblings; use them when your beach day needs multimodal travel.",
    ],
    rows: [
      {
        topic: "Station coasts",
        whatToCheck: "Walk, bus or short bike from NS",
        tip: "Open Weekend travel for leisure OV planning.",
      },
      {
        topic: "Bike last mile",
        whatToCheck: "Secure parking near the promenade",
        tip: "Open Cycling or Bike sharing for fleets.",
      },
      {
        topic: "Optional car share",
        whatToCheck: "Family gear and thin bus links",
        tip: "Keep four wheels optional.",
      },
      {
        topic: "Return timing",
        whatToCheck: "Last useful train vs sunset",
        tip: "Protect Sunday calm.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "OV sibling", body: "Weekend travel owns tickets, discounts orientation and last mile depth." },
      { title: "Bike optional", body: "Useful locally — deepen on Cycling / Bike sharing." },
      { title: "No mobility SEO", body: "Soft affiliate mobility block below — not beach rankings." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV/NS getaways and leisure transport how-to.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Riding and ticket-type depth.",
      },
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Everyday bike habits for last mile.",
      },
      {
        label: "Bike sharing",
        href: BIKE_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Shared bikes for station-to-promenade hops.",
      },
    ] satisfies LifestyleLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility options for beach days",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when a beach day needs a train, optional car share or local bike. This block is not a ranking of beach towns, hotels or tour operators.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a beach day — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer Weekend travel for OV planning depth.",
    placementId: "nl-living-beach-towns-support-providers",
    analyticsPageContext: "beach-towns-netherlands-recommended-options",
    categoryLinks: [
      { href: WEEKEND_TRAVEL_NETHERLANDS_PATH, label: "Weekend travel" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
      { href: CYCLING_NETHERLANDS_PATH, label: "Cycling" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat beach scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First North Sea day after arrival",
        approach: "Nearby stretch + layers + early return.",
        firstStep: "Open culture and stretches.",
      },
      {
        situation: "Family summer Saturday",
        approach: "Arrive early, short loops, snack plan, crowd realism.",
        firstStep: "Open vibes and crowds.",
      },
      {
        situation: "Quiet shoulder-season walk",
        approach: "Wind layers, dune path, café pause.",
        firstStep: "Open seasons and packing.",
      },
      {
        situation: "Zeeland overnight idea",
        approach: "Weekend trips for lodging vibe; coast habits here.",
        firstStep: "Open stretches and Weekend trips.",
      },
      {
        situation: "Friends promenade evening",
        approach: "Agree one stretch and return train before sunset.",
        firstStep: "Open getting there and Making Dutch friends.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Chasing ranked best-beach lists",
      body: "Influencer rankings create FOMO and rushed hopping.",
      advice: "Choose by stretch, vibe and travel time — not SEO lists.",
    },
    {
      title: "Swimsuit-only packing",
      body: "Wind and cool evenings surprise Mediterranean expectations.",
      advice: "Pack layers and a windbreaker even in summer.",
    },
    {
      title: "Arriving late on peak Saturdays",
      body: "Parking and promenades fill fast on sunny holidays.",
      advice: "Arrive early or choose a shoulder day; prefer OV when lots look full.",
    },
    {
      title: "Ignoring return timing",
      body: "Long dune walks overrun last useful trains.",
      advice: "Write return time before you settle in — open Weekend travel.",
    },
    {
      title: "Treating this as hotel SEO",
      body: "Rankings of beach towns, hotels or tour operators are not orientation.",
      advice: "Use stretch patterns, vibe filters and official tourism sources.",
    },
    {
      title: "Confusing Beach towns with Hidden gems",
      body: "Lesser-known inland spots are a different content lane.",
      advice: "Open Hidden gems for non-beach gems; keep coastal culture here.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Beach day readiness checklist",
    intro: "Use this before your first Dutch beach month so stretch, season, packing and transport stay aligned.",
    items: [
      "Stretch and vibe chosen (not a FOMO town ranking)",
      "Season and holiday crowding considered",
      "Layers, windbreaker, sunscreen and towel packed",
      "Weather checked the morning you go",
      "Weekend travel opened if the day needs OV",
      "Parking or last-mile plan noted",
      "Return train or bike plan written",
      "Plan B noted (Museums / Hiking) if coast looks packed",
    ],
  },
  howTo: {
    heading: "How to start beach days calmly in the Netherlands",
    steps: [
      {
        name: "Understand beach culture",
        text: "Expect wind, layers, dune paths and café pauses — not tropical swim-only assumptions.",
      },
      {
        name: "Match season and stretch",
        text: "Choose North Sea, Zeeland or Wadden orientation by travel time and energy — not ranked town lists.",
      },
      {
        name: "Filter by vibe",
        text: "Decide family, quiet or lively energy, then keep the plan short enough for your company.",
      },
      {
        name: "Pack for weather",
        text: "Add a windbreaker and layers, check Weather, and keep the day bag light.",
      },
      {
        name: "Plan transport and return",
        text: "Open Weekend travel for OV and last mile, arrive early on peak days, and protect Sunday return timing.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to visit beach towns in the Netherlands",
    description:
      "Orientation steps for expats learning Dutch beach culture, seasons, coastal stretches, vibe filters, packing and transport.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "How is this different from Weekend trips?",
      a: "Weekend trips owns destination ideas and weekend lifestyle planning, including short coast orientation. This page deepens beach-town culture, seasons, stretch patterns, packing and crowd habits.",
    },
    {
      q: "How is this different from Weekend travel?",
      a: "Weekend travel owns OV/NS how-to-get-there, discounts orientation and last mile depth. This page stays on coastal lifestyle planning and links to Weekend travel for transport.",
    },
    {
      q: "Do you rank the best beach towns in the Netherlands?",
      a: "No. Stretch patterns and vibe filters are orientation only. Confirm local tourism, weather and transport details yourself.",
    },
    {
      q: "When is the best time for a Dutch beach day?",
      a: "It depends on vibe: shoulder seasons for quieter walks, summer for energy and crowds, cooler months for short bracing loops. Always check Weather and holiday calendars.",
    },
    {
      q: "What should I pack?",
      a: "Layers, a light windbreaker, sunscreen, towel and a day bag usually matter more than swimsuit-only packing. Verify café payment habits locally.",
    },
    {
      q: "Where do I plan trains to the coast?",
      a: "Open Weekend travel for leisure OV how-to, last mile and return timing. NS trains and Train discounts deepen riding and product math.",
    },
    {
      q: "Is Beach towns under Cycling in the menu?",
      a: "No. Beach towns sits in Living → Weekend & lifestyle. Cycling stays under Living → Cycling; we only cross-link for last-mile bike tips.",
    },
    {
      q: "Is this travel or booking advice?",
      a: "No. ExpatLife provides general lifestyle orientation only. Follow official tourism, weather and transport guidance.",
    },
  ],
  relatedGuidesTips: [
    "Coast weekends short-orient → Weekend trips.",
    "OV how-to → Weekend travel.",
    "Lesser-known non-beach spots → Hidden gems.",
    "Historic houses → Castles.",
    "Car multi-stop → Road trips.",
    "Same-day outs → Day trips.",
    "Nature peers → Hiking / National parks.",
    "Indoor Plan B → Museums.",
    "Kid leisure → Family activities.",
    "Bikes → Cycling / Bike sharing.",
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
      label: "National parks",
      href: NATIONAL_PARKS_NETHERLANDS_PATH,
      status: "live",
      description: "Nationale Parken orientation — nature peer.",
    },
    {
      label: "Hiking",
      href: HIKING_NETHERLANDS_PATH,
      status: "live",
      description: "Walking culture — nature peer in the cluster.",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Indoor culture Plan B and rainy-day peer.",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Lesser-known places beyond beach-town lane.",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Castles and historic houses — cluster peer.",
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
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "OV/NS getaways, discounts orientation and last mile.",
    },
    {
      label: "Family activities",
      href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Kid leisure beyond beach-lane tips.",
    },
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday bike habits for last mile — separate nav.",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Shared bikes for station-to-promenade hops.",
    },
    {
      label: "Weather",
      href: LIVING_WEATHER_PATH,
      status: "live",
      description: "Wind and season cues for coastal days.",
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
      description: "Social leisure habits lightly.",
    },
  ] satisfies LifestyleLink[],
  lifestyleHubTips: [
    "Beach towns is the coastal culture guide in Weekend & lifestyle.",
    "Weekend trips leads destination ideas; Hidden gems owns lesser-known spots.",
    "Hiking, National parks and Museums remain cluster peers.",
    "Weekend travel stays under Public transport for OV how-to.",
    "Cycling remains separate — last-mile cross-link only.",
    "Castles is a live cluster sibling for historic-house weekends.",
    "Road trips and Day trips cover car multi-stop and same-day outs.",
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
      description: "Walking and hiking culture.",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Museum-going and Museumkaart.",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Lesser-known places lane.",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Coastal towns and beach culture — you are here.",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Castles and historic houses.",
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
      label: "Weekend trips",
      href: WEEKEND_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Need broader weekend destination ideas?",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Classic beach day — back same evening?",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Coastal loop with multiple stops by car?",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Need NS/OV tickets, last mile and return timing?",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer a castle or historic-house weekend?",
    },
    {
      label: "Hiking",
      href: HIKING_NETHERLANDS_PATH,
      status: "live",
      description: "Want a trail weekend instead of beach energy?",
    },
  ] satisfies LifestyleLink[],
  exploreNextTips: [
    "Destination ideas → Weekend trips.",
    "Same-day → Day trips.",
    "Car multi-stop → Road trips.",
    "Transport → Weekend travel.",
    "Historic houses → Castles.",
    "Nature → Hiking / National parks.",
  ],
  officialSources: [
    {
      label: "Netherlands Board of Tourism & Conventions — Holland.com",
      href: "https://www.holland.com/global/tourism.htm",
      description: "Official tourism orientation for coast and regions — not a ranking.",
    },
    {
      label: "Rijkswaterstaat — coastal and water orientation",
      href: "https://www.rijkswaterstaat.nl/en",
      description: "National water and infrastructure orientation relevant to coasts.",
    },
    {
      label: "NS — tickets and journey planner",
      href: "https://www.ns.nl/en",
      description: "Official national rail tickets and planners — deepen on Weekend travel.",
    },
    {
      label: "9292 — door-to-door OV planner",
      href: "https://9292.nl/en",
      description: "National public-transport journey planner including coastal last miles.",
    },
    {
      label: "KNMI — weather",
      href: "https://www.knmi.nl/over-het-knmi/about",
      description: "Official weather institute orientation — wind and rain matter for beach days.",
    },
    {
      label: "VVV / local tourism boards",
      href: "https://www.holland.com/global/tourism.htm",
      description: "Use local tourism pages for town-level hours, events and access — verify per destination.",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: ["Understand beach culture.", "Match season and stretch.", "Pack for wind and layers.", "Plan transport lightly."],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Beach culture.",
        "Seasons.",
        "Coastal stretches.",
        "Vibe filters.",
        "Packing and weather.",
        "Crowds and getting there.",
      ],
    },
    culture: {
      title: "From the visual — culture cues",
      items: ["Wind and layers.", "Strandpaviljoen pauses.", "Dune paths.", "Sunday return."],
    },
    seasons: {
      title: "From the visual — season cues",
      items: ["Spring shoulder.", "Summer peaks.", "Autumn walks.", "Winter bracing air."],
    },
    stretches: {
      title: "From the visual — stretch cues",
      items: ["North Sea mainland.", "Zeeland arms.", "Wadden orientation.", "Hidden gems link."],
    },
    vibes: {
      title: "From the visual — vibe cues",
      items: ["Family energy.", "Quiet edges.", "Lively promenades.", "Day trip vs overnight."],
    },
    packing: {
      title: "From the visual — packing cues",
      items: ["Windbreaker.", "Layers.", "Sunscreen and towel.", "Weather check."],
    },
    crowds: {
      title: "From the visual — crowd cues",
      items: ["Peak weekends.", "Parking realism.", "Dune care.", "Plan B siblings."],
    },
    gettingThere: {
      title: "From the visual — mobility cues",
      items: ["Station hubs.", "Bike last mile.", "Optional car share.", "Return timing."],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: ["First North Sea day.", "Family summer Saturday.", "Quiet shoulder walk.", "Zeeland overnight."],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: ["Ranking FOMO.", "Swimsuit-only packing.", "Late peak arrival.", "Ignoring return timing."],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: ["Stretch chosen.", "Packing listed.", "Weekend travel opened.", "Return plan written."],
    },
  },
  disclosure:
    "ExpatLife provides general beach-town and coastal lifestyle orientation for newcomers. It is not travel, booking or financial advice and not a ranking of beach towns, hotels or tour operators. Weather, crowds, parking and transport change — always confirm on official tourism, weather and transport pages. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
} as const;

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
const VISUAL_PREFIX = "hidden-gems-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const hiddenGemsNetherlandsPage = {
  slug: "hidden-gems-netherlands",
  path: HIDDEN_GEMS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: LIVING_SURVIVAL_GUIDE_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(HIDDEN_GEMS_NETHERLANDS_PATH) ?? "2026-10-15",
  seo: {
    title: "Hidden Gems in the Netherlands | Complete Guide for Expats",
    description:
      "Lesser-known places orientation for expats in the Netherlands: neighbourhood gems, small towns, quiet edges and leave-no-trace habits — with links to Weekend trips, Museums, National parks and Hiking. Not a ranked secrets list.",
    keywords: [
      "hidden gems Netherlands",
      "lesser known places Netherlands",
      "quiet towns Netherlands",
      "neighbourhood gems Netherlands",
      "secret spots Netherlands expats",
      "small towns Netherlands day trip",
      "quiet places Netherlands",
      "local favourites Netherlands",
      "off the beaten path Netherlands",
      "hidden gems Amsterdam alternatives",
      "quiet canals Netherlands",
      "expat lifestyle Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Weekend & lifestyle",
    pageTitle: "Hidden Gems in the Netherlands",
    subtitle:
      "Lesser-known places and local favourites for expats: neighbourhood gems, small towns and quiet edges — orientation and etiquette, not a ranked “secret spots” awards list.",
    primaryCta: { label: "What hidden gems means", href: "#meaning" },
    secondaryCta: { label: "Quiet-day checklist", href: "#checklist" },
    chips: ["Neighbourhood gems", "Small towns", "Quiet edges", "Etiquette", "Leave no trace"],
    disclaimer:
      "General lifestyle orientation only — not travel, booking or destination advice and not a ranking of attractions, towns or tour operators. Opening hours, access rules and crowding change. Verify local tourism pages, park rules and planners before you go. Weekend trips owns broader destination planning; Museums owns museum visits; National parks and Hiking own nature depth.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch morning: multicultural expats with light day bags on a quiet canal side street beside a small brick bridge, soft daylight and reassuring leisure mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#meaning", label: "Meaning" },
    { href: "#neighbourhood", label: "Neighbourhoods" },
    { href: "#small-towns", label: "Small towns" },
    { href: "#nature-edges", label: "Nature edges" },
    { href: "#museums-lane", label: "Museums lane" },
    { href: "#getting-there", label: "Getting there" },
    { href: "#etiquette", label: "Etiquette" },
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
      "Premium orientation board titled Hidden Gems After Arrival — four building blocks: understand the meaning of lesser-known places, find neighbourhood spots responsibly, plan small-town quiet days, protect quiet edges with etiquette — Quiet Day Checklist rail on the right, Dutch canal and small-town skyline band and ExpatLife brand footer.",
      "Four habits cover most first quiet months: meaning, neighbourhoods, small towns, and etiquette with transport."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of hidden gems in the Netherlands — meaning, neighbourhoods, small towns, nature edges, museums lane, etiquette — Dutch quiet canal skyline band and ExpatLife brand footer.",
      "Six building blocks explain almost every first lesser-known place question for newcomers."
    ),
    meaning: visual(
      "meaning",
      "Premium meaning board — orientation not rankings, local favourites vs viral secrets, sibling lanes — desk scene with Meaning notes rail and ExpatLife brand footer.",
      "Hidden gems here means lesser-known orientation — not a secret-spot awards list."
    ),
    neighbourhood: visual(
      "neighbourhood",
      "Premium neighbourhood board — local markets, quiet canals, side streets, ask locals lightly — neighbourhood map scene with Find notes rail and ExpatLife brand footer.",
      "Neighbourhood gems reward walking loops and light local research — not influencer coordinates."
    ),
    smallTowns: visual(
      "small-towns",
      "Premium small-towns board — station towns, café pause, one focus, Weekend trips link — small-town station scene with Day pattern rail and ExpatLife brand footer.",
      "Small-town quiet days work as one focus plus café — deepen destination weekends on Weekend trips."
    ),
    natureEdges: visual(
      "nature-edges",
      "Premium nature-edges board — quiet dunes edge, leave no trace, Parks and Hiking siblings — soft landscape scene with Edge notes rail and ExpatLife brand footer.",
      "Quiet nature edges stay light here — National parks and Hiking own nature depth."
    ),
    museumsLane: visual(
      "museums-lane",
      "Premium museums-lane board — when a small museum is the gem vs open Museums guide — gallery door scene with Lane notes rail and ExpatLife brand footer.",
      "When the gem is a museum visit, open the Museums sibling for Museumkaart and booking depth."
    ),
    gettingThere: visual(
      "getting-there",
      "Premium getting-there board — NS hub, bike last mile, Weekend travel link — station-to-quiet-street route scene with Mobility notes rail and ExpatLife brand footer.",
      "Train hubs plus light last mile cover most quiet days — deepen OV on Weekend travel."
    ),
    etiquette: visual(
      "etiquette",
      "Premium etiquette board — leave no trace, respect residents, avoid overcrowding viral spots — quiet path scene with Etiquette notes rail and ExpatLife brand footer.",
      "Quiet places stay quiet when guests protect residents, paths and privacy."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first neighbourhood loop, station small town, nature edge afternoon, rainy museum gem, friends quiet canal — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match the quiet day to energy and company — not a copied viral secrets list."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — treating lists as awards, overcrowding viral spots, ignoring residents, confusing lanes with Weekend trips or Museums — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is FOMO lists and overcrowding — not finding a quiet place."
    ),
    checklist: visual(
      "checklist",
      "Premium hidden-gems readiness checklist clipboard — meaning noted, neighbourhood loop set, small-town pattern chosen, etiquette reviewed, Weekend travel opened — Dutch kitchen table with day bag and ExpatLife brand footer.",
      "Use this checklist so your first quiet Dutch months stay calm and respectful."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "One quiet loop", note: "Before viral FOMO lists" },
    { label: "Town days", value: "Weekend trips", note: "Destination sibling" },
    { label: "Transport", value: "Weekend travel", note: "OV how-to sibling" },
    { label: "Museum gems", value: "Museums", note: "Museumkaart sibling" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Lesser-known places are how many expats fall in love with everyday Dutch life: quiet canal corners, neighbourhood markets, station towns and soft nature edges. Newcomers who treat the first months as local loops (one area, realistic pacing, leave-no-trace habits) enjoy quieter days than those chasing ranked “secret spots” lists.",
    "This page owns hidden-gems orientation — neighbourhood gems, small towns and quiet edges with etiquette. Weekend trips owns broader weekend destination planning. Museums owns museum visits and Museumkaart. National parks and Hiking own nature depth. Weekend travel owns NS/OV how-to. Cycling and Bike sharing help last mile — without putting Hidden gems under the Cycling nav.",
  ],
  introHighlights: [
    "Start with one calm neighbourhood or station-town loop before viral “secret” lists.",
    "Treat this guide as orientation — never as ranked awards or guaranteed empty spots.",
    "Cross-link Weekend trips for destination weekends; Museums when the gem is a museum.",
    "Use National parks / Hiking for nature depth; Weekend travel for trains; protect quiet places with etiquette.",
  ],
  orientationFlowSteps: [
    "Understand what “hidden gems” means here (orientation, not secret rankings).",
    "Find neighbourhood spots responsibly — walk loops, local cues, light research.",
    "Plan small-town quiet days and know when to open Weekend trips for destination depth.",
    "Protect quiet edges with leave-no-trace etiquette and light transport planning.",
  ],
  travelFileChecklist: [
    "Area or town written with travel time and return window",
    "Sibling lane noted (Weekend trips / Museums / Parks / Hiking) if relevant",
    "Access, parking or path rules skimmed where applicable",
    "Weekend travel opened if the day needs OV",
    "Leave-no-trace and resident-respect habits reviewed",
    "Backup indoor or café plan noted for rain",
  ],
  introScenarios: [
    {
      situation: "First quiet Saturday after arrival",
      approach: "One neighbourhood loop, café pause, early return.",
      firstStep: "Open neighbourhood and etiquette.",
    },
    {
      situation: "Station small-town day",
      approach: "One focus + café — skip capital FOMO.",
      firstStep: "Open small towns and getting there.",
    },
    {
      situation: "Want a nature quiet edge",
      approach: "Light edge visit, then deepen on Parks / Hiking.",
      firstStep: "Open nature edges.",
    },
    {
      situation: "Rainy day “gem” is a museum",
      approach: "Switch to Museums for booking and Museumkaart.",
      firstStep: "Open museums lane.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Expectation mismatch causes more friction than ‘wrong’ places.",
    "Viral secret lists often create the crowds they claim to avoid.",
    "Destination weekends live on Weekend trips; museum depth on Museums.",
    "Quiet nature depth lives on National parks and Hiking — keep edges light here.",
  ],
  quickAnswer: {
    heading: "How hidden gems work for expats in the Netherlands",
    summary:
      "Hidden gems here means lesser-known places orientation: neighbourhood loops, small-town quiet days and soft nature edges with leave-no-trace habits. It is not a ranked secrets list. Open Weekend trips for broader destination planning, Museums when the gem is a museum visit, National parks or Hiking for nature depth, and Weekend travel for OV how-to.",
    bullets: [
      "Meaning, neighbourhoods, small towns, nature edges, museums-lane cues, etiquette and light transport live on this page.",
      "Weekend destination planning lives on Weekend trips; museum visits on Museums.",
      "Nature depth lives on National parks and Hiking; OV how-to on Weekend travel.",
      "Avoid treating this guide as awards, guaranteed empty spots or tour rankings.",
    ],
    note: "If you only open one sibling after this page, open Weekend trips for destination weekends or Museums when the gem is indoor culture.",
  },
  snapshotCards: [
    {
      title: "Meaning",
      body: "Orientation and local favourites — not ranked secret-spot awards.",
    },
    {
      title: "Neighbourhoods",
      body: "Quiet canals, markets and side streets found with walking loops.",
    },
    {
      title: "Small towns",
      body: "Station-town quiet days — deepen destination planning on Weekend trips.",
    },
    {
      title: "Nature edges",
      body: "Soft edges only — Parks and Hiking own trail and park depth.",
    },
    {
      title: "Museums lane",
      body: "When the gem is a museum, open Museums for Museumkaart and booking.",
    },
    {
      title: "Etiquette",
      body: "Leave no trace, respect residents and avoid overcrowding viral spots.",
    },
  ] satisfies TipCard[],
  meaning: {
    heading: "What “hidden gems” means on this page",
    intro:
      "On ExpatLife, hidden gems means lesser-known places and local-favourites orientation for newcomers — neighbourhood corners, quieter towns and soft edges — not a promise of empty “secret” locations or a ranked top-10 awards list.",
    paragraphs: [
      "Search language often says “secret spots” or “hidden gems Netherlands.” Treat those keywords as curiosity about quieter days, not as a brief for influencer coordinates. Places that go viral stop being quiet; overcrowding harms residents and fragile edges.",
      "Sibling lanes stay clear: Weekend trips owns broader weekend destination planning; Museums owns museum visits; National parks and Hiking own nature depth. This page helps you choose a calm pattern and etiquette first.",
    ],
    rows: [
      {
        topic: "Orientation only",
        whatToCheck: "Patterns and habits, not rankings",
        tip: "Filters beat “best secret” SEO lists.",
      },
      {
        topic: "Local favourites",
        whatToCheck: "Neighbourhood loops and station towns",
        tip: "Ask lightly; verify access yourself.",
      },
      {
        topic: "Viral spots",
        whatToCheck: "Crowd risk and resident impact",
        tip: "Skip photo-hunt overcrowding.",
      },
      {
        topic: "Sibling lanes",
        whatToCheck: "Weekend trips / Museums / Parks / Hiking",
        tip: "Open the guide that owns the depth you need.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Not awards", body: "We do not rank secret spots, towns or attractions." },
      { title: "Pattern first", body: "Neighbourhood, small town or soft edge — then a place." },
      { title: "Protect quiet", body: "Etiquette keeps lesser-known places pleasant for everyone." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Broader weekend destination planning.",
      },
      {
        label: "Museums",
        href: MUSEUMS_NETHERLANDS_PATH,
        status: "live",
        description: "Museum visits and Museumkaart depth.",
      },
      {
        label: "National parks",
        href: NATIONAL_PARKS_NETHERLANDS_PATH,
        status: "live",
        description: "Nationale Parken orientation — nature peer.",
      },
    ] satisfies LifestyleLink[],
  },
  neighbourhood: {
    heading: "Finding neighbourhood gems responsibly",
    intro:
      "Many of the best quieter moments after arrival are close to home: a side canal, a local market morning, a park edge or a café street that is not on every tourist map. Build a walking or bike loop, notice opening hours, and treat residential streets as lived-in space.",
    paragraphs: [
      "Light research helps — municipal tourism pages, neighbourhood blogs and local tip groups — but avoid publishing precise fragile locations as “must geotag” content. Prefer patterns (market mornings, quiet canal loops, station neighbourhoods) over coordinate dumps.",
      "Family activities can support kid-friendly neighbourhood leisure; Making Dutch friends can support social local habits lightly. This page stays on lesser-known place orientation.",
    ],
    rows: [
      {
        topic: "Walking loops",
        whatToCheck: "30–90 minute circuit from home or a hub",
        tip: "One strong loop beats three rushed checkmarks.",
      },
      {
        topic: "Local markets",
        whatToCheck: "Day, time and stall hours",
        tip: "Arrive early; leave space for residents shopping.",
      },
      {
        topic: "Quiet canals",
        whatToCheck: "Residential vs tourist strips",
        tip: "Keep voices low and bikes paced.",
      },
      {
        topic: "Ask lightly",
        whatToCheck: "Colleagues, neighbours, café staff",
        tip: "Tips are invitations — not guarantees of emptiness.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Near first", body: "Start close before long-haul secret hunts." },
      { title: "Lived-in streets", body: "Neighbourhoods are homes — not photo sets." },
      { title: "No geotag FOMO", body: "Patterns beat viral pin dumps." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live",
        description: "Kid leisure near home.",
      },
      {
        label: "Making Dutch friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        status: "live",
        description: "Social local habits lightly.",
      },
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Everyday bike habits for neighbourhood loops.",
      },
    ] satisfies LifestyleLink[],
  },
  smallTowns: {
    heading: "Small towns and quiet day patterns",
    intro:
      "Station towns and smaller historic centres often reward a single focus: one walkable core, one café pause, an early return. Think in day patterns before collecting town names — and open Weekend trips when you need broader weekend destination planning.",
    paragraphs: [
      "A calm first month often looks like: one nearby neighbourhood loop, then one station-town day, then optional denser weekend vibes on the Weekend trips sibling. We do not publish a ranked best-small-towns SEO list.",
      "Check opening hours, market days and last useful return trains before you go. Soft affiliate mobility options below support getting there — they are not attraction rankings.",
    ],
    rows: [
      {
        topic: "Station towns",
        whatToCheck: "Walkable core from NS or regional station",
        tip: "One focus + café beats multi-town marathons.",
      },
      {
        topic: "Market mornings",
        whatToCheck: "Local market calendar",
        tip: "Arrive early; leave mid-morning rush to locals.",
      },
      {
        topic: "Historic cores",
        whatToCheck: "Crowd risk on sunny Sundays",
        tip: "Midweek often feels quieter.",
      },
      {
        topic: "Destination weekends",
        whatToCheck: "Overnight or multi-stop plans",
        tip: "Open Weekend trips for that lane.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "One focus", body: "Depth beats collecting stamps across towns." },
      { title: "Return timing", body: "Protect the last useful train — open Weekend travel." },
      { title: "Sibling depth", body: "Weekend trips owns broader destination weekends." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "City, coast and nature weekend destination ideas.",
      },
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV how-to for leisure getaways.",
      },
      {
        label: "Getting there",
        href: "#getting-there",
        status: "live",
        description: "NS, bikes and last mile for quiet days.",
      },
    ] satisfies LifestyleLink[],
  },
  natureEdges: {
    heading: "Quiet nature edges (without owning parks)",
    intro:
      "Soft nature edges — dune paths near towns, park fringes, short waterside walks — can feel like hidden gems after a busy city week. This page keeps that orientation light. National parks owns Nationale Parken basics; Hiking owns walking culture and trail habits.",
    paragraphs: [
      "Stay on marked paths, pack out litter, keep dogs where rules allow, and avoid fragile dunes or nesting seasons when signs ask you to. Crowding a “secret beach tip” can damage the place you hoped to protect.",
      "For longer walks, park visitor centres or hiking day planning, open the nature siblings. Weather cues live on the Weather guide.",
    ],
    rows: [
      {
        topic: "Soft edges",
        whatToCheck: "Short marked loops near a hub",
        tip: "Leave depth to Parks / Hiking.",
      },
      {
        topic: "Leave no trace",
        whatToCheck: "Litter, fires, off-path shortcuts",
        tip: "Quiet places stay open when guests protect them.",
      },
      {
        topic: "Access rules",
        whatToCheck: "Signs, seasons, parking limits",
        tip: "Verify on park or municipal pages.",
      },
      {
        topic: "Sibling depth",
        whatToCheck: "National parks / Hiking",
        tip: "Open peers when nature is the main goal.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Light only", body: "Edges here — parks and trails deepen elsewhere." },
      { title: "Protect the edge", body: "Leave-no-trace beats viral dune photo hunts." },
      { title: "Weather aware", body: "Open Weather for rain and wind realism." },
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
        description: "Walking culture and trail habits.",
      },
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Rain and season cues for outdoor edges.",
      },
    ] satisfies LifestyleLink[],
  },
  museumsLane: {
    heading: "When the gem is a museum",
    intro:
      "Sometimes the quietest “hidden gem” day is a smaller museum, a regional collection or a rainy-day gallery. When museum culture, Museumkaart, timed tickets or etiquette become the main job, open the Museums sibling — keep this page on lesser-known place orientation.",
    paragraphs: [
      "Use this lane cue lightly: if your plan is primarily admission, booking and gallery pacing, switch to Museums. If the museum is one stop inside a neighbourhood or small-town loop, stay here for place patterns and open Museums only for card and booking depth.",
      "Family rainy backups can also live on Family activities when kids need wider leisure options.",
    ],
    rows: [
      {
        topic: "Museum-first day",
        whatToCheck: "Tickets, Museumkaart, etiquette",
        tip: "Open Museums for full depth.",
      },
      {
        topic: "Place-first day",
        whatToCheck: "Town or neighbourhood loop + optional venue",
        tip: "Stay here; skim Museums only if booking.",
      },
      {
        topic: "Rainy backup",
        whatToCheck: "Indoor Plan B",
        tip: "Museums or Family activities.",
      },
      {
        topic: "No rankings",
        whatToCheck: "Interest and travel time",
        tip: "Never treat either page as best-of awards.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Lane clarity", body: "Museums owns museum visits; this page owns lesser-known places." },
      { title: "Switch early", body: "If booking and Museumkaart dominate, open Museums." },
      { title: "Kid rain days", body: "Family activities supports wider indoor leisure." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Museums",
        href: MUSEUMS_NETHERLANDS_PATH,
        status: "live",
        description: "Museumkaart, booking, city patterns and etiquette.",
      },
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live",
        description: "Kid leisure and rainy backups.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "When culture sits inside a wider weekend.",
      },
    ] satisfies LifestyleLink[],
  },
  gettingThere: {
    heading: "Getting there lightly: trains, bikes and last mile",
    intro:
      "Most quiet days start from a station hub, a neighbourhood bike hop or a short walk. Open Weekend travel for leisure OV how-to, NS trains for riding depth, and Cycling or Bike sharing for last mile — this page stays on hidden-gems planning.",
    paragraphs: [
      "Write the last useful return time before you linger. Greenwheels-style car share stays optional for thin last miles to small towns or nature edges. Do not treat Hidden gems as a Cycling nav duplicate — cross-link only.",
      "OV chipkaart and OVpay habits deepen on public-transport siblings; use them when your quiet day needs multimodal travel.",
    ],
    rows: [
      {
        topic: "Station towns",
        whatToCheck: "Walk or short bus from NS / regional rail",
        tip: "Open Weekend travel for leisure OV planning.",
      },
      {
        topic: "Bike last mile",
        whatToCheck: "Secure parking near the spot",
        tip: "Open Cycling or Bike sharing for fleets.",
      },
      {
        topic: "Thin last mile",
        whatToCheck: "Optional car share",
        tip: "Keep four wheels optional.",
      },
      {
        topic: "Return timing",
        whatToCheck: "Last useful train vs daylight",
        tip: "Protect Sunday calm.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "OV sibling", body: "Weekend travel owns tickets, discounts orientation and last mile depth." },
      { title: "Bike optional", body: "Useful locally — deepen on Cycling / Bike sharing." },
      { title: "No mobility SEO", body: "Soft affiliate mobility block below — not attraction rankings." },
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
        description: "Shared bikes for station-to-spot hops.",
      },
    ] satisfies LifestyleLink[],
  },
  etiquette: {
    heading: "Etiquette and leave-no-trace for quiet places",
    intro:
      "Quiet places stay pleasant when guests protect residents, paths and privacy: keep voices low on residential canals, pack out litter, stay on marked trails, and avoid turning fragile spots into overcrowded photo sets.",
    paragraphs: [
      "Core habits: travel light, arrive with a realistic return plan, respect private gardens and driveway space, and skip drones or loud speakers unless rules clearly allow them. If a tip feels too “secret to share widely,” treat that as a cue to protect it — not to geotag it.",
      "Rules differ by municipality and park — always skim local signs. This is general orientation, not legal advice.",
    ],
    rows: [
      {
        topic: "Residents first",
        whatToCheck: "Noise, bikes on pavements, parking",
        tip: "Neighbourhoods are homes.",
      },
      {
        topic: "Leave no trace",
        whatToCheck: "Litter, fires, off-path damage",
        tip: "Carry out what you carry in.",
      },
      {
        topic: "Crowd ethics",
        whatToCheck: "Viral tip risk",
        tip: "Do not overwhelm a fragile quiet spot.",
      },
      {
        topic: "Privacy",
        whatToCheck: "Photo angles into homes and gardens",
        tip: "Ask before photographing people.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Quiet guests", body: "Low voices and paced bikes keep canals calm." },
      { title: "Protect fragile edges", body: "Stay on paths; pack out litter." },
      { title: "Skip viral harm", body: "A tip that destroys quiet is not a gem." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Nature edges",
        href: "#nature-edges",
        status: "live",
        description: "Soft outdoor edges with park/hiking siblings.",
      },
      {
        label: "Neighbourhoods",
        href: "#neighbourhood",
        status: "live",
        description: "Lived-in streets and local loops.",
      },
      {
        label: "Hiking",
        href: HIKING_NETHERLANDS_PATH,
        status: "live",
        description: "Trail etiquette depth on the hiking sibling.",
      },
    ] satisfies LifestyleLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility options for quiet days out",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when a lesser-known day needs a train, optional car share or local bike. This block is not a ranking of hidden gems, attractions or tour operators.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a quiet day out — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer Weekend travel for OV planning depth.",
    placementId: "nl-living-hidden-gems-support-providers",
    analyticsPageContext: "hidden-gems-netherlands-recommended-options",
    categoryLinks: [
      { href: WEEKEND_TRAVEL_NETHERLANDS_PATH, label: "Weekend travel" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
      { href: CYCLING_NETHERLANDS_PATH, label: "Cycling" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat hidden-gems scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First quiet Saturday after arrival",
        approach: "One neighbourhood loop + café + early return.",
        firstStep: "Open neighbourhood and etiquette.",
      },
      {
        situation: "Station small-town curiosity",
        approach: "One focus day, skip multi-town FOMO.",
        firstStep: "Open small towns and getting there.",
      },
      {
        situation: "Want nature without a full park weekend",
        approach: "Soft edge visit, then Parks / Hiking if deeper.",
        firstStep: "Open nature edges.",
      },
      {
        situation: "Rainy day — museum feels like the gem",
        approach: "Switch to Museums for booking and Museumkaart.",
        firstStep: "Open museums lane.",
      },
      {
        situation: "Friends want a “secret spot” list",
        approach: "Agree a pattern and etiquette — refuse overcrowding.",
        firstStep: "Open meaning and mistakes.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Treating lists as awards",
      body: "Ranked “top secret spots” create FOMO and crowded days.",
      advice: "Choose a pattern and energy level — not SEO awards.",
    },
    {
      title: "Overcrowding viral tips",
      body: "Geotagged secrets often stop being quiet.",
      advice: "Protect fragile places; skip photo-hunt stampedes.",
    },
    {
      title: "Ignoring residents",
      body: "Quiet canals and side streets are lived-in homes.",
      advice: "Keep noise low and respect parking and privacy.",
    },
    {
      title: "Confusing lanes with Weekend trips",
      body: "Broader destination weekends need a different guide.",
      advice: "Open Weekend trips for destination planning depth.",
    },
    {
      title: "Confusing lanes with Museums",
      body: "Museumkaart and booking depth live on Museums.",
      advice: "Switch early when the day is museum-first.",
    },
    {
      title: "Claiming park ownership here",
      body: "Nature depth belongs on National parks and Hiking.",
      advice: "Keep edges light; open nature siblings for trails and parks.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Quiet-day readiness checklist",
    intro: "Use this before your first Dutch lesser-known place months so patterns, etiquette and transport stay aligned.",
    items: [
      "Pattern chosen (neighbourhood / small town / soft edge / museum gem)",
      "Sibling guide noted if depth lives elsewhere",
      "Travel time and return window written",
      "Access or path rules skimmed where relevant",
      "Weekend travel opened if the day needs OV",
      "Leave-no-trace and resident-respect habits reviewed",
      "Rainy café or indoor backup noted",
      "No viral overcrowding plan — protect quiet places",
    ],
  },
  howTo: {
    heading: "How to explore lesser-known places calmly in the Netherlands",
    steps: [
      {
        name: "Understand the meaning",
        text: "Treat hidden gems as orientation about quieter local favourites — not ranked secret awards or guaranteed empty spots.",
      },
      {
        name: "Start with a neighbourhood loop",
        text: "Walk or bike a calm circuit near home: markets, quiet canals and lived-in streets with resident respect.",
      },
      {
        name: "Add a station-town quiet day",
        text: "Choose one focus plus a café pause, then open Weekend trips when you need broader destination weekends.",
      },
      {
        name: "Keep nature edges light",
        text: "Use soft marked edges with leave-no-trace habits; open National parks or Hiking when nature is the main goal.",
      },
      {
        name: "Plan etiquette and transport",
        text: "Protect quiet places, write a return window, and open Weekend travel or bike guides for getting there calmly.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to find hidden gems in the Netherlands",
    description:
      "Orientation steps for expats exploring lesser-known neighbourhood spots, small towns and quiet edges with etiquette and light transport planning.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "How is this different from Weekend trips?",
      a: "Weekend trips owns broader weekend destination planning and vibe choice. This page deepens lesser-known places orientation — neighbourhood gems, small-town quiet days and etiquette — without ranking secret spots.",
    },
    {
      q: "How is this different from Museums?",
      a: "Museums owns museum-going culture, Museumkaart and booking habits. This page owns lesser-known places; when the gem is a museum visit, open Museums for that depth.",
    },
    {
      q: "Do you publish a top 10 secret spots list?",
      a: "No. Patterns, etiquette and sibling links are orientation only. Ranked secret awards and geotag stampedes often harm the quiet places people hope to find.",
    },
    {
      q: "Where do National parks and Hiking fit?",
      a: "They are nature peers. This page keeps quiet nature edges light; open National parks for Nationale Parken orientation and Hiking for walking culture depth.",
    },
    {
      q: "Where do I plan trains for a quiet day?",
      a: "Open Weekend travel for leisure OV how-to, last mile and return timing. NS trains and Train discounts deepen riding and product math.",
    },
    {
      q: "Is Hidden gems under Cycling in the menu?",
      a: "No. Hidden gems sits in Living → Weekend & lifestyle after Museums. Cycling stays under Living → Cycling; we only cross-link for last-mile bike tips.",
    },
    {
      q: "What about family quiet days?",
      a: "Keep loops short and open Family activities for kid leisure depth. Protect residents and fragile edges with the same etiquette habits.",
    },
    {
      q: "Is this travel advice?",
      a: "No. ExpatLife provides general lifestyle orientation only. Follow official tourism, park, municipal and transport guidance.",
    },
  ],
  relatedGuidesTips: [
    "Destination weekends → Weekend trips.",
    "Museum visits → Museums.",
    "Historic houses → Castles.",
    "Coast → Beach towns.",
    "Nature peers → Hiking / National parks.",
    "OV how-to → Weekend travel.",
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
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Museum-going and Museumkaart — museum lane sibling.",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Castles and historic houses — not a secrets ranking.",
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
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Coastal towns and beach-day culture.",
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
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "OV/NS getaways, discounts orientation and last mile.",
    },
    {
      label: "Family activities",
      href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Kid leisure with light quiet-day mentions.",
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
      description: "Shared bikes for station-to-spot hops.",
    },
    {
      label: "Weather",
      href: LIVING_WEATHER_PATH,
      status: "live",
      description: "Rain and season cues for outdoor quiet days.",
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
      description: "Social local leisure habits lightly.",
    },
  ] satisfies LifestyleLink[],
  lifestyleHubTips: [
    "Hidden gems is the lesser-known places guide in Weekend & lifestyle.",
    "Weekend trips leads destination ideas; Museums owns museum visits.",
    "Beach towns and Castles deepen coast and historic-house lanes.",
    "Hiking and National parks remain nature peers.",
    "Weekend travel stays under Public transport for OV how-to.",
    "Cycling remains separate — last-mile cross-link only.",
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
      description: "Lesser-known places — you are here.",
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
      label: "Weekend trips",
      href: WEEKEND_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Need broader weekend destination ideas?",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Quiet same-day outing — back same evening?",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Is the quiet day a castle or historic house?",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer a coast stretch over a secret list?",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Is the gem a museum visit with Museumkaart depth?",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Multi-stop quiet-edge loop by car?",
    },
  ] satisfies LifestyleLink[],
  exploreNextTips: [
    "Destination ideas → Weekend trips.",
    "Same-day → Day trips.",
    "Historic houses → Castles.",
    "Coast → Beach towns.",
    "Museum visits → Museums.",
    "Car multi-stop → Road trips.",
  ],
  officialSources: [
    {
      label: "Netherlands Board of Tourism & Conventions — Holland.com",
      href: "https://www.holland.com/global/tourism.htm",
      description: "Official tourism orientation for regions and places — not a ranking.",
    },
    {
      label: "Nationale Parken — official parks orientation",
      href: "https://www.nationaalpark.nl/",
      description: "Official national parks network orientation — deepen on the National parks guide.",
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
      label: "Museumkaart — official site",
      href: "https://www.museumkaart.nl/",
      description: "When the gem is a museum — verify card terms on the official site.",
    },
    {
      label: "KNMI — weather",
      href: "https://www.knmi.nl/over-het-knmi/about",
      description: "Official weather institute orientation for outdoor quiet days.",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Understand lesser-known places meaning.",
        "Find neighbourhood spots responsibly.",
        "Plan small-town quiet days.",
        "Protect quiet edges with etiquette and transport.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Meaning.",
        "Neighbourhoods.",
        "Small towns.",
        "Nature edges.",
        "Museums lane.",
        "Etiquette.",
      ],
    },
    meaning: {
      title: "From the visual — meaning cues",
      items: ["Orientation only.", "Local favourites.", "Viral crowd risk.", "Sibling lanes."],
    },
    neighbourhood: {
      title: "From the visual — neighbourhood cues",
      items: ["Walking loops.", "Local markets.", "Quiet canals.", "Ask lightly."],
    },
    smallTowns: {
      title: "From the visual — small-town cues",
      items: ["Station towns.", "Market mornings.", "One focus.", "Weekend trips link."],
    },
    natureEdges: {
      title: "From the visual — nature-edge cues",
      items: ["Soft edges.", "Leave no trace.", "Access rules.", "Parks / Hiking siblings."],
    },
    museumsLane: {
      title: "From the visual — museums-lane cues",
      items: ["Museum-first days.", "Place-first days.", "Rainy backups.", "Open Museums."],
    },
    gettingThere: {
      title: "From the visual — mobility cues",
      items: ["Station hubs.", "Bike last mile.", "Optional car share.", "Return timing."],
    },
    etiquette: {
      title: "From the visual — etiquette cues",
      items: ["Residents first.", "Leave no trace.", "Crowd ethics.", "Privacy."],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: ["First neighbourhood loop.", "Station town.", "Nature edge.", "Museum gem."],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: ["Awards FOMO.", "Viral overcrowding.", "Ignoring residents.", "Wrong sibling lane."],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: ["Pattern chosen.", "Etiquette reviewed.", "Weekend travel opened.", "Protect quiet places."],
    },
  },
  disclosure:
    "ExpatLife provides general lesser-known places and lifestyle orientation for newcomers. It is not travel, booking or destination advice and not a ranking of attractions, towns, hidden gems or tour operators. Access rules, crowding and hours change — always confirm on official tourism, park, municipal and transport pages. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
} as const;

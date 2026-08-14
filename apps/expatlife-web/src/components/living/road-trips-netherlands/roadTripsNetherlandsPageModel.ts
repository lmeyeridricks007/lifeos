import {
  BEACH_TOWNS_NETHERLANDS_PATH,
  BIKE_SHARING_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
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
import { BUYING_A_CAR_NETHERLANDS_PATH } from "@/src/components/living/driving-licence-exchange-netherlands/drivingLicenceExchangeNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export {
  BEACH_TOWNS_NETHERLANDS_PATH,
  BIKE_SHARING_NETHERLANDS_PATH,
  BUYING_A_CAR_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
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
const VISUAL_PREFIX = "road-trips-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const roadTripsNetherlandsPage = {
  slug: "road-trips-netherlands",
  path: ROAD_TRIPS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: LIVING_SURVIVAL_GUIDE_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(ROAD_TRIPS_NETHERLANDS_PATH) ?? "2026-10-19",
  seo: {
    title: "Road trips in the Netherlands | Complete Guide for Expats",
    description:
      "Road trips for expats in the Netherlands: when a car helps, route planning culture, parking and ferry habits, multi-stop shapes, sharing vs owning, and light cross-border caution — with links to Weekend trips, Car sharing and Day trips.",
    keywords: [
      "road trips Netherlands",
      "Netherlands road trip",
      "Dutch road trip",
      "car trip Netherlands",
      "multi stop trip Netherlands",
      "road trip planning Netherlands",
      "parking ferry Netherlands trip",
      "car sharing road trip Netherlands",
      "expat road trip Netherlands",
      "driving leisure Netherlands",
      "weekend road trip Netherlands",
      "cross border day drive Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Weekend & lifestyle",
    pageTitle: "Road trips in the Netherlands",
    subtitle:
      "Multi-stop leisure driving for expats: when a car helps, calm route planning, parking and ferry habits, sharing vs owning — not a ranked routes list or rental-car SEO page.",
    primaryCta: { label: "When a car helps", href: "#when-car" },
    secondaryCta: { label: "Road-trip checklist", href: "#checklist" },
    chips: ["When a car helps", "Route planning", "Parking & ferries", "Share vs own", "Multi-stop shapes"],
    disclaimer:
      "General lifestyle orientation only — not travel, booking, driving or financial advice and not a ranking of routes, destinations, rental cars or tour operators. Traffic, parking, ferry slots and rules change. Verify planners, RDW/licence status, insurer and local rules before you drive. Weekend trips owns destination vibes; Day trips owns same-day outings; Car sharing and Buying a car own vehicle access depth.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch leisure road-trip morning: multicultural expat couple packing a shared hatchback beside a tree-lined provincial road with canal and brick farmhouses in soft daylight, reassuring travel mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#when-car", label: "When a car helps" },
    { href: "#planning", label: "Route planning" },
    { href: "#parking", label: "Parking & ferries" },
    { href: "#routes", label: "Trip shapes" },
    { href: "#access", label: "Share vs own" },
    { href: "#border", label: "Cross-border" },
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
      "Premium orientation board titled Road Trips After Arrival — four building blocks: decide when a car helps, plan a calm multi-stop route, learn parking and ferry habits, choose share vs own — Road Trip Checklist rail on the right, Dutch canal and provincial road skyline band and ExpatLife brand footer.",
      "Four habits cover most first leisure drives: car vs train, route shape, parking culture, access model."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of road trips in the Netherlands — when a car helps, route planning culture, parking and ferries, multi-stop shapes, sharing vs owning, light cross-border caution — Dutch road and water landscape band and ExpatLife brand footer.",
      "Six building blocks explain almost every first Dutch leisure road-trip question for newcomers."
    ),
    whenCar: visual(
      "when-car",
      "Premium decision board — car helps for multi-stop countryside, gear bags, thin last miles; train wins for station cities and peak parking stress — desk scene with Car vs train notes rail and ExpatLife brand footer.",
      "Choose the mode that matches stops, gear and parking realism — not habit from home."
    ),
    planning: visual(
      "planning",
      "Premium route-planning board — two to three stops max, buffer time, Sunday return, weather check — kitchen-table map scene with Planner rail and ExpatLife brand footer.",
      "Dutch leisure drives favour short loops with buffers over marathon itineraries."
    ),
    parking: visual(
      "parking",
      "Premium parking and ferry habits board — blue zones, P+R, village lots, Wadden ferry slots, cashless apps — roadside desk scene with Practical notes rail and ExpatLife brand footer.",
      "Parking and ferry timing create more friction than the drive itself."
    ),
    routes: visual(
      "routes",
      "Premium multi-stop shapes board — coast loop, parks and castles day, countryside café circuit, island approach — map-style cards with Trip shape notes rail and ExpatLife brand footer.",
      "Pick a trip shape first — then deepen destinations on Weekend trips siblings."
    ),
    access: visual(
      "access",
      "Premium share-vs-own board — car sharing for occasional weekends, ownership for frequent drivers, licence and insurance readiness — consultation desk scene with Access notes rail and ExpatLife brand footer.",
      "Most newcomers start with sharing for leisure — deepen on Car sharing or Buying a car."
    ),
    border: visual(
      "border",
      "Premium light cross-border caution board — short Belgium or Germany loops, documents, insurance, fuel habits — border-road desk scene with Border notes rail and ExpatLife brand footer.",
      "Short cross-border drives need light document and insurance checks — not a tour-operator pitch."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first shared-car weekend, family gear day, couple coast loop, friends castle circuit, solo nature reset — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match the drive to energy, gear and company — not a copied influencer route."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — too many stops, ignoring parking, treating this as rental SEO, skipping share-vs-own, marathon Sundays, border document gaps — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is overplanning and parking — not finding a scenic road."
    ),
    checklist: visual(
      "checklist",
      "Premium road-trip readiness checklist clipboard — mode chosen, stops limited, parking plan, access booked, return buffer, weather checked — Dutch kitchen table with day bags and ExpatLife brand footer.",
      "Use this checklist so your first Dutch leisure road trip stays calm."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "One short loop", note: "Two stops max" },
    { label: "Filter first", value: "Car vs train", note: "Then trip shape" },
    { label: "Access", value: "Share first", note: "Car sharing sibling" },
    { label: "Same day?", value: "Day trips", note: "Cluster peer" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Road trips in the Netherlands are usually short multi-stop leisure drives: a coast loop, a parks-and-castles circuit, or a countryside café day — not US-style marathon highway tours. Expats who decide when a car genuinely helps, keep stops few, and plan parking or ferry timing enjoy Dutch leisure roads more than those copying ranked “best road trip” lists.",
    "This page owns the car-based leisure lane: when four wheels beat the train, route-planning culture, parking and ferry habits, multi-stop shapes, sharing vs owning, and light cross-border caution. Weekend trips owns destination vibe choosing. Day trips owns same-day outings. Weekend travel owns OV how-to. Car sharing and Buying a car own vehicle access depth. Destination siblings (Beach towns, Castles, National parks, Hiking, Museums, Hidden gems) deepen place types.",
  ],
  introHighlights: [
    "Start with one short two-stop loop before overnight bags and long border drives.",
    "Ask “does a car help?” before booking — station cities often win by train.",
    "Open Car sharing for occasional fleets; Buying a car for ownership depth.",
    "Use Day trips for back-same-day plans; Weekend trips for vibe and lodging ideas.",
  ],
  orientationFlowSteps: [
    "Decide whether a car helps for this leisure plan (multi-stop, gear, thin last mile).",
    "Pick a trip shape with two to three stops and a return buffer.",
    "Plan parking, ferry slots or P+R — then check Weather.",
    "Choose share vs own access and confirm licence/insurance readiness.",
    "Deepen destinations on Weekend trips siblings; deepen OV on Weekend travel if mixed mode.",
  ],
  quickAnswer: {
    heading: "Quick answer: road trips after arrival",
    summary:
      "A Dutch leisure road trip is usually a calm multi-stop drive with short distances, bike-aware roads and parking realism — not a ranked scenic-route product page. Choose car when you need flexible stops, gear space or countryside last miles; choose train for station hubs and peak parking stress. Start shared, keep stops few, protect Sunday return.",
    bullets: [
      "When a car helps, route planning, parking/ferry habits, trip shapes, share vs own and light border caution live on this page.",
      "Weekend destination vibes live on Weekend trips; same-day outings on Day trips; OV how-to on Weekend travel.",
      "Vehicle access deepens on Car sharing and Buying a car — not on this page.",
      "Avoid treating this guide as a ranking of routes, destinations, rental cars or tour operators.",
    ],
    note: "If you only open one sibling after this page, open Car sharing for occasional fleets or Weekend trips for destination vibes.",
  },
  travelFileChecklist: [
    "Valid licence and insurance readiness noted",
    "Car vs train decision written for this trip",
    "Two to three stops max on the first loop",
    "Parking or ferry plan saved",
    "Share booking or ownership checklist opened",
    "Weather and return buffer checked",
    "Weekend trips vibe chosen if lodging overnight",
    "Day trips considered if you must be home same evening",
  ],
  introScenarios: [
    {
      situation: "First leisure drive after arrival",
      approach: "Shared car, nearby two-stop loop, early return.",
      firstStep: "Open when a car helps + Car sharing.",
    },
    {
      situation: "Family with gear bags",
      approach: "Car for strollers and picnic kit; limit stops.",
      firstStep: "Open trip shapes + parking habits.",
    },
    {
      situation: "Station-city museum weekend",
      approach: "Train usually wins — car optional for last mile only.",
      firstStep: "Open Weekend travel + Museums.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Car helps for multi-stop countryside and gear — not every weekend.",
    "Route culture = few stops + buffers + Sunday calm.",
    "Parking and ferry timing beat “scenic highway” myths.",
    "Share first for occasional trips; own when frequency justifies it.",
    "Day trips peer owns same-day outings; this page owns multi-stop driving culture.",
    "Never treat affiliate cards as a ranking of routes or rental brands.",
  ],
  snapshotCards: [
    {
      title: "When a car helps",
      body: "Multi-stop countryside, gear bags, thin bus last miles — vs station cities where trains win.",
    },
    {
      title: "Route planning culture",
      body: "Two to three stops, buffer time, weather check, protect Sunday return.",
    },
    {
      title: "Parking & ferry habits",
      body: "Blue zones, village lots, P+R, Wadden ferry slots — plan before the drive.",
    },
    {
      title: "Multi-stop shapes",
      body: "Coast loop, parks and castles, café circuit, island approach — shape first, towns second.",
    },
    {
      title: "Share vs own",
      body: "Car sharing for occasional leisure; Buying a car when frequency and costs justify ownership.",
    },
    {
      title: "Cross-border caution",
      body: "Short Belgium/Germany loops need light document and insurance checks — verify rules.",
    },
  ] satisfies TipCard[],
  whenCar: {
    heading: "When a car helps (and when the train wins)",
    intro:
      "Dutch distances are short, but last miles and multi-stop days change the math. Decide the mode for this leisure plan — not from home-country habit.",
    paragraphs: [
      "A car often helps when you chain countryside stops, carry family gear, or face thin evening bus links. A train often wins for Amsterdam, Utrecht, Rotterdam or museum hubs where parking is scarce and expensive.",
      "Mixed days are normal: train to a hub, shared car for a countryside loop, bike for the last kilometre. Getting around and Weekend travel deepen multimodal habits; this section stays on the leisure decision.",
    ],
    rows: [
      {
        topic: "Multi-stop countryside",
        whatToCheck: "Number of stops and transfer time by OV",
        tip: "Car usually calmer if stops are off-station",
      },
      {
        topic: "Station-city culture day",
        whatToCheck: "Parking cost and walk times",
        tip: "Prefer NS — open Weekend travel",
      },
      {
        topic: "Gear-heavy family day",
        whatToCheck: "Stroller, picnic, beach kit volume",
        tip: "Shared hatchback often enough",
      },
      {
        topic: "Peak sunny Saturday",
        whatToCheck: "Coast or park lot fill times",
        tip: "Arrive early or switch to OV",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Car helps",
        body: "Flexible stop order, countryside cafés, castles with thin bus links, beach gear.",
      },
      {
        title: "Train wins",
        body: "Dense station cities, museum days, nights out, peak parking stress.",
      },
      {
        title: "Mixed mode",
        body: "Rail to hub + shared car loop + bike last mile — common and calm.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV/NS how-to for getaways.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider multimodal orientation.",
      },
      {
        label: "Car sharing",
        href: CAR_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Occasional four wheels without ownership.",
      },
      {
        label: "Day trips",
        href: DAY_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Same-day outing peer.",
      },
    ] satisfies LifestyleLink[],
  },
  planning: {
    heading: "Dutch route-planning culture",
    intro:
      "Leisure drives here favour short loops, honest buffers and Sunday return calm — not marathon itineraries copied from influencer reels.",
    paragraphs: [
      "Plan two to three stops for a first weekend. Add walking or café time between them. Write the return window before you leave so evening energy stays intact.",
      "Use Weekend trips to choose vibe and lodging lightly; use destination siblings for place-type depth. This section owns the driving-day planning habit.",
    ],
    rows: [
      {
        topic: "Stop count",
        whatToCheck: "Energy of the group",
        tip: "Two stops beat five rushed photo ops",
      },
      {
        topic: "Buffers",
        whatToCheck: "Parking hunt and café waits",
        tip: "Add 30–45 minutes between legs",
      },
      {
        topic: "Weather",
        whatToCheck: "Wind, rain, fog on open roads",
        tip: "Open Weather the morning you go",
      },
      {
        topic: "Sunday return",
        whatToCheck: "Work week start and kids’ bedtime",
        tip: "Protect an early buffer home",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Loop not line",
        body: "Circular countryside loops reduce backtracking stress on small roads.",
      },
      {
        title: "One hero stop",
        body: "Pick one must-see; treat others as flexible café or walk pauses.",
      },
      {
        title: "Offline map habit",
        body: "Signal dips in dunes and forests — save the loop offline.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Destination vibe and lodging ideas.",
      },
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Wind and rain cues for drive days.",
      },
      {
        label: "Hidden gems",
        href: HIDDEN_GEMS_NETHERLANDS_PATH,
        status: "live",
        description: "Quieter place ideas between hubs.",
      },
      {
        label: "Making Dutch friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        status: "live",
        description: "Social leisure habits lightly.",
      },
    ] satisfies LifestyleLink[],
  },
  parking: {
    heading: "Parking, ferries and practical habits",
    intro:
      "On Dutch leisure days, parking apps, blue zones, village lots and ferry slots create more friction than the kilometres themselves.",
    paragraphs: [
      "Expect paid parking in many coastal and historic centres, blue-zone discs in quieter streets, and busy P+R patterns near hubs. Village lots near castles and parks fill early on sunny Saturdays.",
      "Wadden and some Zeeland approaches involve ferry timing — treat the sailing as a fixed stop in your plan. Confirm local rules and tickets; this is orientation, not booking advice.",
    ],
    rows: [
      {
        topic: "City edges",
        whatToCheck: "P+R and paid-zone apps",
        tip: "Park once, walk or bike the centre",
      },
      {
        topic: "Coast lots",
        whatToCheck: "Fill times on peak Saturdays",
        tip: "Arrive early or use OV last mile",
      },
      {
        topic: "Castle / park lots",
        whatToCheck: "Official visitor parking pages",
        tip: "Have a Plan B walk-in from a farther lot",
      },
      {
        topic: "Ferry approaches",
        whatToCheck: "Sailing times and vehicle slots",
        tip: "Treat the ferry as a hard appointment",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Cashless parking",
        body: "Many lots and street zones expect apps or cards — keep a backup plan.",
      },
      {
        title: "Leave-no-trace",
        body: "Dune and park edges are fragile — use marked lots only.",
      },
      {
        title: "Bike last mile",
        body: "Shared or own bikes often beat hunting a closer space — open Cycling.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Beach towns",
        href: BEACH_TOWNS_NETHERLANDS_PATH,
        status: "live",
        description: "Coastal parking and crowd habits.",
      },
      {
        label: "Castles",
        href: CASTLES_NETHERLANDS_PATH,
        status: "live",
        description: "Historic-house visit and access culture.",
      },
      {
        label: "National parks",
        href: NATIONAL_PARKS_NETHERLANDS_PATH,
        status: "live",
        description: "Park visitor basics and nature weekends.",
      },
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Last-mile bike habits.",
      },
    ] satisfies LifestyleLink[],
  },
  routes: {
    heading: "Multi-stop trip shapes (not ranked routes)",
    intro:
      "Choose a trip shape first — then pick places. Patterns beat SEO lists of “best Dutch road trips”.",
    paragraphs: [
      "Common calm shapes: a North Sea or Zeeland coast loop; a parks-and-castles inland day; a countryside café circuit; an island approach with ferry buffer. Keep the first month nearby.",
      "Deepen beaches on Beach towns, castles on Castles, parks on National parks and Hiking, quieter spots on Hidden gems, indoor Plan B on Museums. Weekend trips helps when the shape becomes an overnight.",
    ],
    rows: [
      {
        topic: "Coast loop",
        whatToCheck: "Wind, parking, return buffer",
        tip: "Open Beach towns for stretch culture",
      },
      {
        topic: "Parks & castles",
        whatToCheck: "Opening hours and lot fill",
        tip: "One park + one house is enough",
      },
      {
        topic: "Café countryside",
        whatToCheck: "Sunday opening habits",
        tip: "Confirm kitchen hours before the loop",
      },
      {
        topic: "Island approach",
        whatToCheck: "Ferry slots and weather",
        tip: "Treat sailing time as a hard stop",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Shape before towns",
        body: "Agree coast, nature, heritage or café energy before naming destinations.",
      },
      {
        title: "One region",
        body: "Stay in one province-scale area on your first shared-car weekend.",
      },
      {
        title: "Plan B indoor",
        body: "Wet days swap a walk for Museums — keep the drive short.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Vibe choosing and weekend ideas.",
      },
      {
        label: "Beach towns",
        href: BEACH_TOWNS_NETHERLANDS_PATH,
        status: "live",
        description: "Coastal stretch culture.",
      },
      {
        label: "Castles",
        href: CASTLES_NETHERLANDS_PATH,
        status: "live",
        description: "Historic houses and gardens.",
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
        description: "Walking culture between stops.",
      },
      {
        label: "Hidden gems",
        href: HIDDEN_GEMS_NETHERLANDS_PATH,
        status: "live",
        description: "Quieter places between hubs.",
      },
      {
        label: "Museums",
        href: MUSEUMS_NETHERLANDS_PATH,
        status: "live",
        description: "Indoor Plan B.",
      },
      {
        label: "Day trips",
        href: DAY_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Same-day outing peer.",
      },
    ] satisfies LifestyleLink[],
  },
  access: {
    heading: "Sharing vs owning for leisure drives",
    intro:
      "Most newcomers do not need to buy a car for the first leisure months. Match access model to how often you truly drive.",
    paragraphs: [
      "Car sharing suits occasional multi-stop weekends and gear days. Ownership can make sense when weekly driving, family logistics and total cost of ownership align — deepen that decision on Buying a car, Road tax and Car insurance siblings.",
      "Always confirm licence validity and insurance for the vehicle you use. Driving licence exchange covers foreign licence steps. This section stays on leisure access orientation.",
    ],
    rows: [
      {
        topic: "Occasional weekends",
        whatToCheck: "Booking windows and fleet radius",
        tip: "Start with Car sharing",
      },
      {
        topic: "Weekly driving",
        whatToCheck: "Insurance, tax, parking at home",
        tip: "Open Buying a car cost orientation",
      },
      {
        topic: "Licence readiness",
        whatToCheck: "Validity and exchange status",
        tip: "Open Driving licence exchange",
      },
      {
        topic: "Bike complement",
        whatToCheck: "Last-mile needs around home",
        tip: "Keep Cycling / Bike sharing active",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Share first",
        body: "Pay for the weekends you drive — avoid ownership overhead while settling in.",
      },
      {
        title: "Own when frequent",
        body: "Only when calendar frequency and costs clearly justify a vehicle.",
      },
      {
        title: "Documents first",
        body: "Licence and insurance readiness beat booking the scenic stop.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Car sharing",
        href: CAR_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Fleets and membership habits.",
      },
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Ownership, RDW and cost orientation.",
      },
      {
        label: "Bike sharing",
        href: BIKE_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription bikes between trips.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider mobility map.",
      },
    ] satisfies LifestyleLink[],
  },
  border: {
    heading: "Light cross-border caution",
    intro:
      "Short loops into Belgium or Germany are common leisure ideas — keep document and insurance checks light but real. This is not a border-tour ranking.",
    paragraphs: [
      "Confirm your licence and vehicle insurance cover the countries on the loop. Carry required documents and understand vignette or environmental-zone rules where relevant. Fuel and parking habits can differ just across the border.",
      "Keep first border loops short and daylight-based. For destination vibes, still use Weekend trips; for same-day returns, Day trips. Verify official guidance before you go — rules change.",
    ],
    rows: [
      {
        topic: "Insurance",
        whatToCheck: "Green card / policy territory",
        tip: "Confirm cover before the loop",
      },
      {
        topic: "Licence",
        whatToCheck: "Validity for the countries visited",
        tip: "Open licence exchange if unsure",
      },
      {
        topic: "Low-emission zones",
        whatToCheck: "City sticker or registration rules",
        tip: "Check destination city pages",
      },
      {
        topic: "Timing",
        whatToCheck: "Border queues and Sunday returns",
        tip: "Keep first loops short",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Documents light pack",
        body: "Licence, insurance proof, ID — verify what your policy requires.",
      },
      {
        title: "Short first loop",
        body: "One café town across the border beats a three-country day.",
      },
      {
        title: "Verify official sources",
        body: "Use government and insurer pages — not social-media checklists alone.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Car sharing",
        href: CAR_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Confirm shared-car cross-border rules.",
      },
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Ownership and insurance orientation.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Destination vibe for short getaways.",
      },
      {
        label: "Day trips",
        href: DAY_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Same-day outing peer.",
      },
    ] satisfies LifestyleLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility options for leisure road trips",
    subtitle:
      "Soft CTAs for established Dutch car-sharing and complementary rail or bike options when a multi-stop leisure drive needs four wheels — or a train reset. This block is not a ranking of routes, destinations, rental cars or tour operators.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for leisure road trips — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer Car sharing for fleet depth and Weekend travel for OV planning depth.",
    placementId: "nl-living-road-trips-support-providers",
    analyticsPageContext: "road-trips-netherlands-recommended-options",
    categoryLinks: [
      { href: CAR_SHARING_NETHERLANDS_PATH, label: "Car sharing" },
      { href: BUYING_A_CAR_NETHERLANDS_PATH, label: "Buying a car" },
      { href: WEEKEND_TRAVEL_NETHERLANDS_PATH, label: "Weekend travel" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat road-trip scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First shared-car weekend",
        approach: "Nearby two-stop loop, early return, parking plan.",
        firstStep: "Open when a car helps + Car sharing.",
      },
      {
        situation: "Family gear day",
        approach: "Hatchback, one park or beach stop, picnic buffer.",
        firstStep: "Open trip shapes + parking.",
      },
      {
        situation: "Couple coast loop",
        approach: "One stretch + café, wind layers, Sunday buffer.",
        firstStep: "Open Beach towns + planning.",
      },
      {
        situation: "Friends castle circuit",
        approach: "One house + one café; confirm opening hours.",
        firstStep: "Open Castles + routes.",
      },
      {
        situation: "Solo nature reset",
        approach: "Short park loop or hike stop; mixed mode OK.",
        firstStep: "Open National parks / Hiking.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Too many stops",
      body: "Five photo ops turn into rushed driving and late returns.",
      advice: "Cap the first loop at two to three stops with buffers.",
    },
    {
      title: "Ignoring parking and ferry timing",
      body: "The scenic road is easy; the lot and sailing are not.",
      advice: "Write parking or ferry plan before you leave.",
    },
    {
      title: "Treating this as rental or route SEO",
      body: "Ranked “best road trips” and fake rental rankings are not orientation.",
      advice: "Use trip shapes, mode choice and official sources.",
    },
    {
      title: "Skipping share-vs-own reality",
      body: "Buying a car for two leisure weekends a year creates cost stress.",
      advice: "Start with Car sharing; open Buying a car only when frequency rises.",
    },
    {
      title: "Marathon Sundays",
      body: "Late border returns collide with the work week.",
      advice: "Protect an early return buffer — especially with kids.",
    },
    {
      title: "Border document gaps",
      body: "Insurance or licence surprises ruin a short Belgium loop.",
      advice: "Confirm cover and documents before cross-border leisure drives.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Road-trip readiness checklist",
    intro: "Use this before your first Dutch leisure multi-stop drive so mode, stops, parking and access stay aligned.",
    items: [
      "Car vs train decision written for this plan",
      "Trip shape chosen (not a FOMO route ranking)",
      "Two to three stops max with time buffers",
      "Parking or ferry plan noted",
      "Licence and insurance readiness confirmed",
      "Share booking opened or ownership checklist reviewed",
      "Weather checked the morning you go",
      "Return buffer written (especially Sundays)",
      "Weekend trips / Day trips siblings opened if needed",
      "Destination siblings noted (Beach, Castles, Parks, etc.)",
    ],
  },
  howTo: {
    heading: "How to start leisure road trips calmly in the Netherlands",
    steps: [
      {
        name: "Decide if a car helps",
        text: "Compare multi-stop and gear needs against station-city parking stress — open Weekend travel if the train wins.",
      },
      {
        name: "Pick a trip shape",
        text: "Choose coast loop, parks and castles, café circuit or island approach — keep the first month nearby.",
      },
      {
        name: "Plan parking and timing",
        text: "Save lots, blue-zone habits or ferry slots, and add buffers between stops.",
      },
      {
        name: "Choose share or own access",
        text: "Book a shared car for occasional weekends or deepen ownership on Buying a car when frequency justifies it.",
      },
      {
        name: "Protect return and deepen places",
        text: "Write the return window, check Weather, and open destination siblings for place-type depth.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to plan a leisure road trip in the Netherlands",
    description:
      "Orientation steps for expats deciding when a car helps, planning multi-stop loops, parking and ferry habits, and choosing share vs own access.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "How is this different from Weekend trips?",
      a: "Weekend trips owns destination ideas and weekend vibe choosing. This page owns car-based multi-stop leisure driving culture: when a car helps, route planning, parking/ferry habits and share vs own.",
    },
    {
      q: "How is this different from Day trips?",
      a: "Day trips owns same-day outings (back home the same evening). This page owns multi-stop leisure driving habits that may be day or overnight — always from a car/planning angle.",
    },
    {
      q: "How is this different from Weekend travel?",
      a: "Weekend travel owns OV/NS how-to-get-there, discounts orientation and last mile. This page stays on car-based leisure planning and links to Weekend travel for mixed-mode or train-first days.",
    },
    {
      q: "Do you rank the best road trips in the Netherlands?",
      a: "No. Trip shapes and mode filters are orientation only. Confirm parking, ferry, weather and local rules yourself.",
    },
    {
      q: "Should I buy a car for weekend leisure?",
      a: "Often not at first. Many newcomers start with Car sharing for occasional loops and only consider Buying a car when weekly driving and total costs justify ownership.",
    },
    {
      q: "Can I drive to Belgium or Germany for a short loop?",
      a: "Often yes for leisure, but confirm licence, insurance territory and any environmental-zone rules first. Keep first border loops short and verify official guidance.",
    },
    {
      q: "Where do Greenwheels and other providers fit?",
      a: "The recommended block lists soft CTAs for established mobility options — primarily car sharing for leisure drives, with rail and bike complements. It is not a ranking of rental brands or routes.",
    },
    {
      q: "Is this driving or booking advice?",
      a: "No. ExpatLife provides general lifestyle orientation only. Follow official road, insurance, ferry and tourism guidance.",
    },
  ],
  relatedGuidesTips: [
    "Destination vibes → Weekend trips.",
    "Same-day outings → Day trips.",
    "OV how-to → Weekend travel.",
    "Fleets → Car sharing.",
    "Ownership → Buying a car.",
    "Coast → Beach towns.",
    "Heritage → Castles.",
    "Nature → National parks / Hiking.",
    "Quiet places → Hidden gems.",
    "Indoor Plan B → Museums.",
    "Wider mobility → Getting around.",
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
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Same-day outing peer in the cluster.",
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
      description: "Walking culture — nature peer.",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Indoor culture Plan B.",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Lesser-known places between hubs.",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Coastal towns and beach culture.",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Castles and historic houses.",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "OV/NS getaways and last mile.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Occasional fleets without ownership.",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Ownership, RDW and cost orientation.",
    },
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday bike habits for last mile.",
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
      label: "Family activities",
      href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Kid leisure beyond road-trip tips.",
    },
    {
      label: "Weather",
      href: LIVING_WEATHER_PATH,
      status: "live",
      description: "Wind and season cues for drive days.",
    },
    {
      label: "Survival Guide",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      status: "live",
      description: "Wider living orientation after arrival.",
    },
  ] satisfies LifestyleLink[],
  lifestyleHubTips: [
    "Road trips is the car/multi-stop leisure guide in Weekend & lifestyle.",
    "Weekend trips leads destination vibes; Day trips owns same-day outings.",
    "Car sharing and Buying a car deepen vehicle access under Driving & cars.",
    "Weekend travel stays under Public transport for OV how-to.",
    "Beach, Castles, Parks, Hiking, Museums and Hidden gems remain place-type peers.",
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
      description: "Coastal towns and beach culture.",
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
      description: "Car multi-stop leisure — you are here.",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Same-day outing peer.",
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
      description: "Need broader weekend destination vibes?",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Planning a same-day outing instead?",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Need fleets and membership habits for occasional drives?",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Considering ownership costs and RDW steps?",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Need NS/OV tickets and last mile instead?",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Planning a coastal loop?",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer a castle or historic-house circuit?",
    },
    {
      label: "National parks",
      href: NATIONAL_PARKS_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer park visitor basics on a nature loop?",
    },
  ] satisfies LifestyleLink[],
  exploreNextTips: [
    "Destination vibes → Weekend trips.",
    "Same-day → Day trips.",
    "Fleets → Car sharing.",
    "Ownership → Buying a car.",
    "Transport → Weekend travel.",
    "Coast → Beach towns.",
    "Heritage → Castles.",
    "Nature → National parks / Hiking.",
  ],
  officialSources: [
    {
      label: "Netherlands Board of Tourism & Conventions — Holland.com",
      href: "https://www.holland.com/global/tourism.htm",
      description: "Official tourism orientation for regions and leisure — not a ranking.",
    },
    {
      label: "RDW — vehicle and licence orientation",
      href: "https://www.rdw.nl/en",
      description: "National vehicle authority orientation relevant to driving readiness.",
    },
    {
      label: "Rijkswaterstaat — roads and traffic orientation",
      href: "https://www.rijkswaterstaat.nl/en",
      description: "National infrastructure and traffic orientation.",
    },
    {
      label: "NS — tickets and journey planner",
      href: "https://www.ns.nl/en",
      description: "Official national rail tickets and planners — deepen on Weekend travel.",
    },
    {
      label: "9292 — door-to-door OV planner",
      href: "https://9292.nl/en",
      description: "National public-transport journey planner for mixed-mode days.",
    },
    {
      label: "KNMI — weather",
      href: "https://www.knmi.nl/over-het-knmi/about",
      description: "Official weather institute orientation — wind and rain matter for drive days.",
    },
    {
      label: "ANWB — touring and roadside orientation",
      href: "https://www.anwb.nl/",
      description: "Dutch touring association orientation — verify products and advice on their site.",
    },
  ],
  disclosure:
    "ExpatLife provides general lifestyle orientation only — not travel, booking, driving or financial advice. Some links in the recommended providers block may be affiliate or referral links. Confirm parking, ferry, insurance, licence and tourism details on official sources before you go. This page is not a ranking of routes, destinations, rental cars or tour operators.",
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: ["Decide when a car helps.", "Plan a calm multi-stop route.", "Learn parking and ferry habits.", "Choose share vs own."],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "When a car helps.",
        "Route planning culture.",
        "Parking and ferries.",
        "Multi-stop shapes.",
        "Sharing vs owning.",
        "Light cross-border caution.",
      ],
    },
    whenCar: {
      title: "From the visual — mode cues",
      items: ["Multi-stop countryside.", "Station-city trains.", "Gear bags.", "Mixed mode."],
    },
    planning: {
      title: "From the visual — planning cues",
      items: ["Two to three stops.", "Buffers.", "Weather.", "Sunday return."],
    },
    parking: {
      title: "From the visual — practical cues",
      items: ["Blue zones.", "Coast lots.", "Ferry slots.", "Bike last mile."],
    },
    routes: {
      title: "From the visual — shape cues",
      items: ["Coast loop.", "Parks and castles.", "Café circuit.", "Island approach."],
    },
    access: {
      title: "From the visual — access cues",
      items: ["Share first.", "Own when frequent.", "Licence ready.", "Bike complement."],
    },
    border: {
      title: "From the visual — border cues",
      items: ["Insurance cover.", "Licence validity.", "Short first loop.", "Official sources."],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: ["First shared weekend.", "Family gear day.", "Coast loop.", "Castle circuit.", "Solo nature."],
    },
    mistakes: {
      title: "From the visual — fix cues",
      items: ["Fewer stops.", "Plan parking.", "Skip SEO rankings.", "Share before buy.", "Protect Sunday.", "Check border docs."],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: ["Mode chosen.", "Stops limited.", "Parking planned.", "Access booked.", "Return buffer.", "Weather checked."],
    },
  },
} as const;

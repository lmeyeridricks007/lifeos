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
const VISUAL_PREFIX = "day-trips-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dayTripsNetherlandsPage = {
  slug: "day-trips-netherlands",
  path: DAY_TRIPS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: LIVING_SURVIVAL_GUIDE_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(DAY_TRIPS_NETHERLANDS_PATH) ?? "2026-10-19",
  seo: {
    title: "Day trips in the Netherlands | Complete Guide for Expats",
    description:
      "Day trips for expats in the Netherlands: same-day outing patterns, timing and return buffers, packing light, when a day trip beats overnight — with links to Weekend trips, Weekend travel and Road trips.",
    keywords: [
      "day trips Netherlands",
      "day trip Netherlands",
      "day out Netherlands",
      "same day trip Netherlands",
      "day trips from Amsterdam",
      "day trips from Rotterdam",
      "day trips from Utrecht",
      "Netherlands day outing",
      "expat day trips Netherlands",
      "train day trip Netherlands",
      "when day trip beats overnight",
      "packing for day trip Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Weekend & lifestyle",
    pageTitle: "Day trips in the Netherlands",
    subtitle:
      "Same-day outings from your home base: classic day-out patterns, timing, packing light, and when a day trip beats overnight — not a ranked destinations list or tour-operator SEO page.",
    primaryCta: { label: "Day trip vs overnight", href: "#when-day-trip" },
    secondaryCta: { label: "Day-trip checklist", href: "#checklist" },
    chips: ["Same-day outings", "Day-out patterns", "Timing", "Pack light", "Train & bike"],
    disclaimer:
      "General lifestyle orientation only — not travel, booking or financial advice and not a ranking of destinations, routes or tour operators. Timetables, opening hours and weather change. Verify NS/OV planners, venue pages and local rules before you go. Weekend trips owns multi-day destination vibes; Weekend travel owns OV getaway mechanics; Road trips owns car multi-stop leisure driving.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch same-day outing morning: multicultural expat friends with light day bags waiting on a canal-side station platform under soft daylight, bike racks and brick townhouses nearby, reassuring travel mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#when-day-trip", label: "Day vs overnight" },
    { href: "#patterns", label: "Day-out patterns" },
    { href: "#timing", label: "Timing" },
    { href: "#packing", label: "Packing light" },
    { href: "#modes", label: "Getting there" },
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
      "Premium orientation board titled Day Trips After Arrival — four building blocks: choose same-day vs overnight, pick a day-out pattern, protect timing and return, pack light — Day Trip Checklist rail on the right, Dutch canal and station skyline band and ExpatLife brand footer.",
      "Four habits cover most first same-day outings: day vs overnight, pattern, timing, light pack."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of day trips in the Netherlands — when day trip beats overnight, classic day-out patterns, timing and return buffers, packing light, train bike or car, Plan B indoor — Dutch canal and station landscape band and ExpatLife brand footer.",
      "Six building blocks explain almost every first Dutch same-day outing question for newcomers."
    ),
    whenDayTrip: visual(
      "when-day-trip",
      "Premium decision board — day trip wins for familiar hubs, early returns, light bags; overnight wins for slow mornings and far edges — desk scene with Day vs overnight notes rail and ExpatLife brand footer.",
      "Choose same-day when energy and distance fit — not FOMO overnight bookings."
    ),
    patterns: visual(
      "patterns",
      "Premium day-out patterns board — city museum day, coast stretch, nature walk, castle gardens, quiet gem town — map-style cards with Pattern notes rail and ExpatLife brand footer.",
      "Pick a pattern first — then deepen places on Beach towns, Castles, Parks and Museums."
    ),
    timing: visual(
      "timing",
      "Premium timing board — outbound window, midday buffer, last useful return train, winter daylight — kitchen-table planner scene with Timing rail and ExpatLife brand footer.",
      "Write the return window before you leave so evenings stay calm."
    ),
    packing: visual(
      "packing",
      "Premium packing-light board — layers, rain shell, water, OV ticket ready, one day bag — hallway desk scene with Light pack rail and ExpatLife brand footer.",
      "Same-day outings reward a light bag — not weekend luggage."
    ),
    modes: visual(
      "modes",
      "Premium getting-there board — NS for station hubs, bike for nearby loops, shared car for thin last miles — multimodal desk scene with Mode notes rail and ExpatLife brand footer.",
      "Match mode to distance and last mile — deepen OV on Weekend travel and car loops on Road trips."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first train day out, family museum day, couple coast stretch, friends castle gardens, solo nature reset — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match the outing to energy and company — not a copied influencer itinerary."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — overnight FOMO, too many stops, late returns, heavy bags, ignoring last trains, treating this as destination SEO — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is timing and overpacking — not finding a place to go."
    ),
    checklist: visual(
      "checklist",
      "Premium day-trip readiness checklist clipboard — pattern chosen, return window written, light pack ready, tickets checked, weather checked, Plan B noted — Dutch kitchen table with day bags and ExpatLife brand footer.",
      "Use this checklist so your first Dutch same-day outing stays calm."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "One pattern", note: "Home by evening" },
    { label: "Filter first", value: "Day vs night", note: "Then place type" },
    { label: "Mode", value: "Train first", note: "Weekend travel peer" },
    { label: "Multi-stop car?", value: "Road trips", note: "Cluster peer" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Day trips in the Netherlands are same-day outings from your home base: a museum city, a coast stretch, a park walk, a castle garden, or a quieter town — then home the same evening. Expats who pick one pattern, write a return window, and pack light enjoy Dutch leisure more than those booking overnight stays for every nearby idea.",
    "This page owns the same-day lane: when a day trip beats overnight, classic day-out patterns, timing and return buffers, packing light, and light mode choice. Weekend trips owns multi-day destination vibes. Weekend travel owns OV how-to for getaways. Road trips owns car multi-stop leisure driving. Destination siblings (Beach towns, Castles, National parks, Hiking, Museums, Hidden gems) deepen place types.",
  ],
  introHighlights: [
    "Start with one nearby same-day pattern before overnight bags and far edges.",
    "Ask “do we need a night away?” before booking lodging — many hubs work as day outs.",
    "Open Weekend travel for NS/OV planning depth; Road trips for car multi-stop loops.",
    "Use Weekend trips when the plan genuinely needs a slow morning or second day.",
  ],
  orientationFlowSteps: [
    "Decide whether same-day fits (distance, energy, kids’ bedtime, work week).",
    "Pick one day-out pattern — city/museum, coast, nature, castle, quiet gem.",
    "Write outbound and return windows; check last useful trains or parking close times.",
    "Pack light and check Weather the morning you go.",
    "Deepen places on destination siblings; deepen OV on Weekend travel; deepen car loops on Road trips.",
  ],
  quickAnswer: {
    heading: "Quick answer: day trips after arrival",
    summary:
      "A Dutch day trip is a calm same-day outing from home — usually one pattern, light bags and a written return window — not a ranked “best day trips” product page. Choose same-day when distance and energy fit; choose overnight when you want slow mornings or far edges. Train often wins for station hubs; deepen OV on Weekend travel and car multi-stops on Road trips.",
    bullets: [
      "When day trip beats overnight, day-out patterns, timing, packing light and light mode choice live on this page.",
      "Weekend destination vibes live on Weekend trips; OV how-to on Weekend travel; car multi-stop culture on Road trips.",
      "Place-type depth lives on Beach towns, Castles, National parks, Hiking, Museums and Hidden gems.",
      "Avoid treating this guide as a ranking of destinations, routes or tour operators.",
    ],
    note: "If you only open one sibling after this page, open Weekend travel for NS planning or Weekend trips if you need an overnight vibe.",
  },
  travelFileChecklist: [
    "Day vs overnight decision written",
    "One day-out pattern chosen",
    "Outbound and return windows noted",
    "Last useful train or parking close time checked",
    "Light day bag packed (layers + rain shell)",
    "Tickets or OV readiness confirmed",
    "Weather checked the morning you go",
    "Plan B indoor noted (Museums) if rain looks likely",
  ],
  introScenarios: [
    {
      situation: "First outing after arrival",
      approach: "Nearby station hub, one museum or walk, early return.",
      firstStep: "Open day-out patterns + Weekend travel.",
    },
    {
      situation: "Family with bedtime",
      approach: "Same-day only; short travel legs; pack light snacks.",
      firstStep: "Open timing + packing light.",
    },
    {
      situation: "Coast or countryside with thin buses",
      approach: "Same-day OK if return buffer is honest — or switch to Road trips / overnight.",
      firstStep: "Open modes + Road trips or Weekend trips.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Same-day first — overnight when mornings matter.",
    "One pattern beats three rushed destinations.",
    "Write the return window before you leave.",
    "Pack light: layers, rain shell, water, ticket ready.",
    "Train for hubs; Road trips for multi-stop car days.",
    "Never treat affiliate cards as a ranking of destinations.",
  ],
  snapshotCards: [
    {
      title: "Day trip vs overnight",
      body: "Same-day for familiar hubs and early returns; overnight for slow mornings and far edges.",
    },
    {
      title: "Classic day-out patterns",
      body: "City/museum, coast stretch, nature walk, castle gardens, quiet gem town — pattern first.",
    },
    {
      title: "Timing & return buffers",
      body: "Outbound window, midday pause, last useful return — especially in winter light.",
    },
    {
      title: "Packing light",
      body: "One day bag: layers, rain shell, water, snacks, OV ready — not weekend luggage.",
    },
    {
      title: "Getting there",
      body: "NS for station hubs, bike for nearby loops, shared car when last miles are thin.",
    },
    {
      title: "Plan B indoor",
      body: "Wet days swap a walk for Museums — keep the same-day promise intact.",
    },
  ] satisfies TipCard[],
  whenDayTrip: {
    heading: "When a day trip beats overnight",
    intro:
      "Many Dutch leisure ideas fit in a day from a Randstad or regional home base. Decide same-day vs overnight from energy and distance — not from FOMO booking culture.",
    paragraphs: [
      "A day trip usually wins when travel legs are short, you want to sleep in your own bed, kids need a normal bedtime, or you are still learning OV habits. An overnight usually wins when the destination is far for your group, you want a slow morning, or evening culture is the point.",
      "Weekend trips owns vibe choosing and light lodging culture when you do need a night away. This section stays on the same-day decision filter.",
    ],
    rows: [
      {
        topic: "Nearby station hub",
        whatToCheck: "Total travel time both ways",
        tip: "Day trip usually calmer",
      },
      {
        topic: "Far edge or island",
        whatToCheck: "Ferry or long last mile + return energy",
        tip: "Consider overnight or shorten the plan",
      },
      {
        topic: "Family bedtime",
        whatToCheck: "Kids’ evening routine",
        tip: "Protect same-day return buffer",
      },
      {
        topic: "Slow-morning weekend",
        whatToCheck: "Whether lodging adds real rest",
        tip: "Open Weekend trips for overnight vibes",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Day trip wins",
        body: "Familiar hubs, museum days, short coast stretches, learning OV without luggage stress.",
      },
      {
        title: "Overnight wins",
        body: "Far edges, second-day walks, evening culture, genuinely slow mornings.",
      },
      {
        title: "Hybrid week",
        body: "Stack same-day outs mid-month; save one overnight for a real vibe weekend.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Multi-day destination vibes and light lodging.",
      },
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV/NS how-to for getaways.",
      },
      {
        label: "Road trips",
        href: ROAD_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Car multi-stop leisure peer.",
      },
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live",
        description: "Kid leisure beyond day-trip tips.",
      },
    ] satisfies LifestyleLink[],
  },
  patterns: {
    heading: "Classic day-out patterns (not ranked destinations)",
    intro:
      "Choose a pattern first — then pick a place. Patterns beat SEO lists of “best day trips from Amsterdam”.",
    paragraphs: [
      "Common calm patterns: a city or museum day; a North Sea or Zeeland coast stretch; a national-park or trail walk; castle gardens or historic house; a quieter gem town. Keep the first month near your home base.",
      "Deepen museums on Museums, beaches on Beach towns, castles on Castles, parks on National parks and Hiking, quieter spots on Hidden gems. This section owns the same-day pattern habit.",
    ],
    rows: [
      {
        topic: "City / museum day",
        whatToCheck: "Opening hours and ticket timed slots",
        tip: "Open Museums for booking culture",
      },
      {
        topic: "Coast stretch",
        whatToCheck: "Wind, layers, return buffer",
        tip: "Open Beach towns for stretch culture",
      },
      {
        topic: "Nature walk",
        whatToCheck: "Trail length and daylight",
        tip: "Open National parks / Hiking",
      },
      {
        topic: "Castle / gardens",
        whatToCheck: "Visitor hours and last entry",
        tip: "Open Castles — one house is enough",
      },
      {
        topic: "Quiet gem town",
        whatToCheck: "Sunday opening habits",
        tip: "Open Hidden gems for quieter ideas",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Pattern before places",
        body: "Agree museum, coast, nature, heritage or quiet energy before naming towns.",
      },
      {
        title: "One hero stop",
        body: "Pick one must-do; treat cafés as flexible pauses — not a five-stop FOMO day.",
      },
      {
        title: "Stay nearby first",
        body: "Learn timing from a close hub before far-edge same-day ambitions.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Museums",
        href: MUSEUMS_NETHERLANDS_PATH,
        status: "live",
        description: "Museum-going and Museumkaart orientation.",
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
        description: "Walking culture for nature days.",
      },
      {
        label: "Hidden gems",
        href: HIDDEN_GEMS_NETHERLANDS_PATH,
        status: "live",
        description: "Quieter places between hubs.",
      },
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Bike-based nearby day loops.",
      },
    ] satisfies LifestyleLink[],
  },
  timing: {
    heading: "Timing and return buffers",
    intro:
      "Same-day joy depends less on the destination and more on honest outbound and return windows — especially in short winter daylight.",
    paragraphs: [
      "Write when you leave, when you want to be home, and the last useful train or parking close time before you go. Add a midday buffer for cafés, queues and photo pauses.",
      "Sunday evenings and school nights need earlier returns. Weather can shrink outdoor windows — open Weather the morning you go and keep Museums as Plan B.",
    ],
    rows: [
      {
        topic: "Outbound",
        whatToCheck: "Crowd peaks and opening hours",
        tip: "Earlier starts often feel calmer",
      },
      {
        topic: "Midday buffer",
        whatToCheck: "Queues, café waits, kids’ energy",
        tip: "Protect 45–60 flexible minutes",
      },
      {
        topic: "Return window",
        whatToCheck: "Last useful train or parking close",
        tip: "Write it before you leave",
      },
      {
        topic: "Winter light",
        whatToCheck: "Sunset and outdoor plans",
        tip: "Shorten outdoor legs or go indoor",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Home-by rule",
        body: "Agree a home-by time with the group — then plan backwards.",
      },
      {
        title: "Last useful train",
        body: "Not the absolute last departure — the one that still feels calm.",
      },
      {
        title: "Weather flip",
        body: "Rain swaps a dune walk for Museums without breaking the same-day plan.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV timing and last-mile habits.",
      },
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Wind and rain cues for outing days.",
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
        description: "Voordeel and off-peak product math.",
      },
    ] satisfies LifestyleLink[],
  },
  packing: {
    heading: "Packing light for same-day outings",
    intro:
      "Day trips reward a light bag. Heavy weekend luggage turns a calm outing into luggage logistics.",
    paragraphs: [
      "Carry layers, a compact rain shell, water, a simple snack, phone power, and whatever ticket or OV payment you need. Add kids’ essentials only when required — not a full overnight kit.",
      "Leave room in the bag for a market treat or museum shop find. Confirm venue bag rules for museums and castles on their pages — this is orientation, not security advice.",
    ],
    rows: [
      {
        topic: "Weather layers",
        whatToCheck: "Wind and rain forecast",
        tip: "Shell + mid-layer beats one heavy coat",
      },
      {
        topic: "OV ready",
        whatToCheck: "Ticket, card or app status",
        tip: "Check before you leave home",
      },
      {
        topic: "Kids kit",
        whatToCheck: "Snack, wipe, spare layer",
        tip: "Keep it small — same-day only",
      },
      {
        topic: "Venue rules",
        whatToCheck: "Bag size and lockers",
        tip: "Confirm on museum or castle pages",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "One bag rule",
        body: "If it does not fit a daypack, it probably belongs on an overnight.",
      },
      {
        title: "Rain is normal",
        body: "A packable shell saves more days than cancelling for drizzle.",
      },
      {
        title: "Hands free",
        body: "Backpack over shopping bags keeps trains and bikes calmer.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "Leisure OV packing and last mile.",
      },
      {
        label: "Museums",
        href: MUSEUMS_NETHERLANDS_PATH,
        status: "live",
        description: "Bag and visit culture indoors.",
      },
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Layer and rain cues.",
      },
      {
        label: "Making Dutch friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        status: "live",
        description: "Social leisure habits lightly.",
      },
    ] satisfies LifestyleLink[],
  },
  modes: {
    heading: "Getting there: train, bike or car",
    intro:
      "Same-day mode choice is usually simple: train for station hubs, bike for nearby loops, shared car when last miles or gear need four wheels.",
    paragraphs: [
      "NS and regional OV cover most classic day outs to station cities and many coast hubs. Deepen tickets, discounts and last mile on Weekend travel, NS trains and Train discounts. Getting around maps the wider multimodal picture.",
      "Bike loops suit short regional days — deepen on Cycling and Bike sharing. Multi-stop countryside driving culture belongs on Road trips; occasional fleets deepen on Car sharing. This section stays on the same-day mode filter.",
    ],
    rows: [
      {
        topic: "Station-city culture day",
        whatToCheck: "Door-to-door OV time",
        tip: "Prefer NS — open Weekend travel",
      },
      {
        topic: "Nearby regional loop",
        whatToCheck: "Bike paths and daylight",
        tip: "Open Cycling / Bike sharing",
      },
      {
        topic: "Thin last mile or gear",
        whatToCheck: "Bus frequency and bag volume",
        tip: "Shared car — open Road trips / Car sharing",
      },
      {
        topic: "Mixed day",
        whatToCheck: "Rail to hub + short last mile",
        tip: "Common and calm — plan the return first",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Train first for hubs",
        body: "Museum and historic centres often punish parking — rail keeps the day light.",
      },
      {
        title: "Bike for nearby",
        body: "Short same-day loops build local confidence without luggage stress.",
      },
      {
        title: "Car when needed",
        body: "Use Road trips for multi-stop leisure driving culture — not every day out.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV/NS getaways and last mile.",
      },
      {
        label: "Road trips",
        href: ROAD_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Car multi-stop leisure culture.",
      },
      {
        label: "Car sharing",
        href: CAR_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Occasional four wheels without ownership.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider multimodal orientation.",
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
        description: "Off-peak and Voordeel product math.",
      },
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Everyday bike habits.",
      },
      {
        label: "Bike sharing",
        href: BIKE_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription bikes for local hops.",
      },
    ] satisfies LifestyleLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility options for same-day outings",
    subtitle:
      "Soft CTAs for established Dutch rail and complementary mobility options when a same-day outing needs tickets, an occasional shared car or a maintained bike. This block is not a ranking of destinations, routes or tour operators.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for day trips — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer Weekend travel for OV planning depth and Road trips for multi-stop driving culture.",
    placementId: "nl-living-day-trips-support-providers",
    analyticsPageContext: "day-trips-netherlands-recommended-options",
    categoryLinks: [
      { href: WEEKEND_TRAVEL_NETHERLANDS_PATH, label: "Weekend travel" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
      { href: TRAIN_DISCOUNTS_NETHERLANDS_PATH, label: "Train discounts" },
      { href: ROAD_TRIPS_NETHERLANDS_PATH, label: "Road trips" },
      { href: CAR_SHARING_NETHERLANDS_PATH, label: "Car sharing" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat day-trip scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First train day out",
        approach: "Nearby station hub, one pattern, early return.",
        firstStep: "Open patterns + Weekend travel.",
      },
      {
        situation: "Family museum day",
        approach: "Timed tickets, light snacks, firm home-by time.",
        firstStep: "Open Museums + timing.",
      },
      {
        situation: "Couple coast stretch",
        approach: "One beach town, wind layers, written return.",
        firstStep: "Open Beach towns + packing.",
      },
      {
        situation: "Friends castle gardens",
        approach: "One house + café; confirm last entry.",
        firstStep: "Open Castles + patterns.",
      },
      {
        situation: "Solo nature reset",
        approach: "Short park or trail day; daylight buffer.",
        firstStep: "Open National parks / Hiking.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Overnight FOMO for nearby hubs",
      body: "Booking lodging for every museum or coast idea adds cost and luggage stress.",
      advice: "Default to same-day until distance or slow mornings clearly need a night away.",
    },
    {
      title: "Too many stops in one day",
      body: "Three destinations become rushed transfers and late returns.",
      advice: "One pattern and one hero stop with café buffers.",
    },
    {
      title: "No written return window",
      body: "“We’ll see how we feel” collides with last useful trains and bedtimes.",
      advice: "Write home-by time before you leave.",
    },
    {
      title: "Packing like a weekend",
      body: "Heavy bags make trains, bikes and museums harder.",
      advice: "One daypack: layers, shell, water, ticket ready.",
    },
    {
      title: "Ignoring mode reality",
      body: "Driving into a station-city centre for a museum day creates parking stress.",
      advice: "Train for hubs; open Road trips only for multi-stop car days.",
    },
    {
      title: "Treating this as destination SEO",
      body: "Ranked “best day trips” lists are not orientation.",
      advice: "Use patterns, timing and official planners — deepen places on sibling guides.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Day-trip readiness checklist",
    intro: "Use this before your first Dutch same-day outing so pattern, timing, packing and mode stay aligned.",
    items: [
      "Day vs overnight decision written",
      "One day-out pattern chosen (not a FOMO list)",
      "Outbound and return windows noted",
      "Last useful train or parking close checked",
      "Light day bag packed",
      "Tickets or OV readiness confirmed",
      "Weather checked the morning you go",
      "Plan B indoor noted if rain looks likely",
      "Weekend travel / Road trips siblings opened if needed",
      "Destination siblings noted (Beach, Castles, Parks, Museums, etc.)",
    ],
  },
  howTo: {
    heading: "How to start day trips calmly in the Netherlands",
    steps: [
      {
        name: "Decide same-day vs overnight",
        text: "Compare distance, energy and bedtime needs — open Weekend trips only when a night away clearly helps.",
      },
      {
        name: "Pick one day-out pattern",
        text: "Choose city/museum, coast, nature, castle gardens or quiet gem — keep the first month nearby.",
      },
      {
        name: "Write timing windows",
        text: "Set outbound, midday buffer and home-by time; check last useful trains or parking close times.",
      },
      {
        name: "Pack light and choose mode",
        text: "One day bag; prefer NS for hubs, bike for nearby loops, shared car when last miles need it.",
      },
      {
        name: "Deepen places and transport",
        text: "Open destination siblings for place-type depth, Weekend travel for OV, Road trips for multi-stop driving.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to plan a day trip in the Netherlands",
    description:
      "Orientation steps for expats deciding when a day trip beats overnight, choosing a same-day pattern, protecting return timing, packing light and picking a mode.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "How is this different from Weekend trips?",
      a: "Weekend trips owns multi-day destination ideas and weekend vibe choosing. This page owns same-day outings: when a day trip beats overnight, day-out patterns, timing, packing light and light mode choice.",
    },
    {
      q: "How is this different from Weekend travel?",
      a: "Weekend travel owns OV/NS how-to-get-there, discount orientation and last mile. This page stays on same-day outing planning and links to Weekend travel for transport depth.",
    },
    {
      q: "How is this different from Road trips?",
      a: "Road trips owns car-based multi-stop leisure driving culture. This page owns same-day outings from home base across modes — and links to Road trips when a multi-stop drive is the right tool.",
    },
    {
      q: "Do you rank the best day trips in the Netherlands?",
      a: "No. Patterns and timing filters are orientation only. Confirm timetables, opening hours, weather and local rules yourself.",
    },
    {
      q: "Should every weekend be an overnight?",
      a: "Often not. Many hubs work as calm day outs. Save overnights for slow mornings, far edges or evening culture — deepen vibes on Weekend trips.",
    },
    {
      q: "Train or car for a day out?",
      a: "Station hubs usually favour trains. Thin last miles, gear bags or multi-stop countryside may favour a shared car — open Weekend travel or Road trips for depth.",
    },
    {
      q: "Where do NS and other providers fit?",
      a: "The recommended block lists soft CTAs for established mobility options — primarily rail for day outs, with car-sharing and bike complements. It is not a ranking of destinations or tour operators.",
    },
    {
      q: "Is this travel or booking advice?",
      a: "No. ExpatLife provides general lifestyle orientation only. Follow official transport, tourism and venue guidance.",
    },
  ],
  relatedGuidesTips: [
    "Weekend vibes → Weekend trips.",
    "OV how-to → Weekend travel.",
    "Car multi-stop → Road trips.",
    "Coast → Beach towns.",
    "Heritage → Castles.",
    "Nature → National parks / Hiking.",
    "Quiet places → Hidden gems.",
    "Indoor Plan B → Museums.",
    "Bike days → Cycling.",
    "Fleets → Car sharing.",
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
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Car multi-stop leisure peer.",
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
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday bike habits for nearby days.",
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
      description: "Ownership orientation when car days become frequent.",
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
      description: "Kid leisure beyond day-trip tips.",
    },
    {
      label: "Weather",
      href: LIVING_WEATHER_PATH,
      status: "live",
      description: "Wind and season cues for outing days.",
    },
    {
      label: "Survival Guide",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      status: "live",
      description: "Wider living orientation after arrival.",
    },
  ] satisfies LifestyleLink[],
  lifestyleHubTips: [
    "Day trips is the same-day outing guide in Weekend & lifestyle.",
    "Weekend trips leads destination vibes; Road trips owns car multi-stop leisure.",
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
      description: "Car multi-stop leisure peer.",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Same-day outings — you are here.",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "OV how-to for getaways.",
    },
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Bike habits for nearby day loops.",
    },
  ] satisfies LifestyleLink[],
  exploreNextCards: [
    {
      label: "Weekend trips",
      href: WEEKEND_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Need an overnight destination vibe instead?",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Planning a multi-stop car leisure day?",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Need NS/OV tickets and last mile?",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Planning a city or rainy-day museum outing?",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Planning a coastal same-day stretch?",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer a castle or historic-house day?",
    },
    {
      label: "National parks",
      href: NATIONAL_PARKS_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer park visitor basics on a nature day?",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Want quieter towns between the hubs?",
    },
  ] satisfies LifestyleLink[],
  exploreNextTips: [
    "Overnight vibes → Weekend trips.",
    "Car multi-stop → Road trips.",
    "Transport → Weekend travel.",
    "Indoor → Museums.",
    "Coast → Beach towns.",
    "Heritage → Castles.",
    "Nature → National parks / Hiking.",
    "Quiet places → Hidden gems.",
  ],
  officialSources: [
    {
      label: "Netherlands Board of Tourism & Conventions — Holland.com",
      href: "https://www.holland.com/global/tourism.htm",
      description: "Official tourism orientation for regions and leisure — not a ranking.",
    },
    {
      label: "NS — tickets and journey planner",
      href: "https://www.ns.nl/en",
      description: "Official national rail tickets and planners — deepen on Weekend travel.",
    },
    {
      label: "9292 — door-to-door OV planner",
      href: "https://9292.nl/en",
      description: "National public-transport journey planner for same-day mixed-mode outings.",
    },
    {
      label: "KNMI — weather",
      href: "https://www.knmi.nl/over-het-knmi/about",
      description: "Official weather institute orientation — wind and rain matter for outing days.",
    },
    {
      label: "Museumvereniging — museum orientation",
      href: "https://www.museumvereniging.nl/",
      description: "Dutch museum association orientation — deepen visit habits on Museums.",
    },
    {
      label: "Staatsbosbeheer — nature areas",
      href: "https://www.staatsbosbeheer.nl/en",
      description: "Nature area orientation for outdoor same-day walks.",
    },
  ],
  disclosure:
    "ExpatLife provides general lifestyle orientation only — not travel, booking or financial advice. Some links in the recommended providers block may be affiliate or referral links. Confirm timetables, opening hours, weather and tourism details on official sources before you go. This page is not a ranking of destinations, routes or tour operators.",
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: ["Choose same-day vs overnight.", "Pick a day-out pattern.", "Protect timing and return.", "Pack light."],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "When day trip beats overnight.",
        "Classic day-out patterns.",
        "Timing and return buffers.",
        "Packing light.",
        "Train, bike or car.",
        "Plan B indoor.",
      ],
    },
    whenDayTrip: {
      title: "From the visual — decision cues",
      items: ["Nearby hubs.", "Far edges.", "Bedtimes.", "Slow mornings."],
    },
    patterns: {
      title: "From the visual — pattern cues",
      items: ["City/museum.", "Coast stretch.", "Nature walk.", "Castle gardens.", "Quiet gem."],
    },
    timing: {
      title: "From the visual — timing cues",
      items: ["Outbound.", "Midday buffer.", "Return window.", "Winter light."],
    },
    packing: {
      title: "From the visual — packing cues",
      items: ["Layers.", "Rain shell.", "OV ready.", "One day bag."],
    },
    modes: {
      title: "From the visual — mode cues",
      items: ["Train for hubs.", "Bike nearby.", "Shared car when needed.", "Mixed mode."],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: ["First train day.", "Family museum.", "Coast stretch.", "Castle gardens.", "Solo nature."],
    },
    mistakes: {
      title: "From the visual — fix cues",
      items: ["Skip overnight FOMO.", "One pattern.", "Write return.", "Pack light.", "Mode realism.", "Skip SEO lists."],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: ["Pattern chosen.", "Return written.", "Light pack.", "Tickets ready.", "Weather checked.", "Plan B noted."],
    },
  },
} as const;

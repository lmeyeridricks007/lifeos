import {
  BIKE_SHARING_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LIVING_HUB_PATH,
  METRO_NETHERLANDS_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  OV_CHIPKAART_NETHERLANDS_PATH,
  OVPAY_NETHERLANDS_PATH,
  REGIONAL_BUSES_NETHERLANDS_PATH,
  TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  TRAMS_NETHERLANDS_PATH,
  WEEKEND_TRAVEL_NETHERLANDS_PATH,
} from "@/src/components/living/ov-chipkaart-netherlands/ovChipkaartNetherlandsPageModel";
import {
  BEACH_TOWNS_NETHERLANDS_PATH,
  CASTLES_NETHERLANDS_PATH,
  DAY_TRIPS_NETHERLANDS_PATH,
  HIDDEN_GEMS_NETHERLANDS_PATH,
  HIKING_NETHERLANDS_PATH,
  MUSEUMS_NETHERLANDS_PATH,
  NATIONAL_PARKS_NETHERLANDS_PATH,
  ROAD_TRIPS_NETHERLANDS_PATH,
  WEEKEND_TRIPS_NETHERLANDS_PATH,
} from "@/src/components/living/weekend-trips-netherlands/weekendTripsNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Re-export cluster PATH constants from the OV-chipkaart lead model (single source of truth). */
export {
  BIKE_SHARING_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LIVING_HUB_PATH,
  METRO_NETHERLANDS_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  OV_CHIPKAART_NETHERLANDS_PATH,
  OVPAY_NETHERLANDS_PATH,
  REGIONAL_BUSES_NETHERLANDS_PATH,
  TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  TRAMS_NETHERLANDS_PATH,
  WEEKEND_TRAVEL_NETHERLANDS_PATH,
};

export type TransportLink = {
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
export type CostRow = { category: string; range: string; notes: string };
export type TimelineStep = { phase: string; timing: string; detail: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "weekend-travel-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const weekendTravelNetherlandsPage = {
  slug: "weekend-travel-netherlands",
  path: WEEKEND_TRAVEL_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(WEEKEND_TRAVEL_NETHERLANDS_PATH) ?? "2026-09-16",
  seo: {
    title: "Weekend travel in the Netherlands | Complete Guide for Expats",
    description:
      "Weekend getaways by Dutch public transport for expats: plan day trips and weekends with NS and regional OV, Weekend Voordeel orientation, sample destination patterns, packing tips, and when car-sharing or bike sharing helps the last mile.",
    keywords: [
      "weekend travel Netherlands",
      "weekend getaway Netherlands public transport",
      "NS weekend trip expats",
      "day trip Netherlands train",
      "Weekend Voordeel leisure",
      "Dutch weekend travel OV",
      "9292 weekend planning",
      "OV-fiets weekend trip",
      "Netherlands train day trip",
      "expat weekend Netherlands",
      "regional bus weekend Netherlands",
      "public transport leisure Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Leisure travel",
    pageTitle: "Weekend travel in the Netherlands",
    subtitle:
      "Plan day trips and weekends with NS and regional OV: destination patterns, ticket and discount orientation, packing and check-in tips, and when bike sharing or car sharing helps the last mile — not a full city-guide dump.",
    primaryCta: { label: "Plan a weekend", href: "#products" },
    secondaryCta: { label: "Weekend checklist", href: "#checklist" },
    chips: ["Plan the trip", "Tickets & discounts", "Destinations", "Last mile", "Packing"],
    disclaimer:
      "General orientation only — not travel, financial or product advice and not a substitute for NS, 9292 or local operator terms. Timetables, products and prices change. Verify live planners and official pages before you travel.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch weekend station morning: multicultural expat couple with light bags waiting under soft daylight glass canopy with bikes and regional train beyond, reassuring leisure-travel mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#products", label: "Plan the trip" },
    { href: "#chipkaart", label: "Tickets & discounts" },
    { href: "#decide", label: "Last mile" },
    { href: "#student", label: "Packing" },
    { href: "#recommended-options", label: "Recommended" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#transport-hub", label: "Hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Weekend Travel After Arrival — four building blocks: pick a destination pattern, check tickets and discounts, plan last mile, pack light — Weekend Trip Checklist rail on the right, Dutch canal and station skyline and ExpatLife brand footer.",
      "Four habits cover most first leisure weekends: destination, tickets, last mile, packing."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of weekend travel in the Netherlands — plan early, tickets and discounts, destination patterns, last mile, packing tips, mistakes to avoid — Dutch weekend station band and ExpatLife brand footer.",
      "Six building blocks explain almost every first weekend-getaway question for newcomers."
    ),
    products: visual(
      "products",
      "Premium planning board — day trip vs overnight, NS plus regional OV, 9292 planner habits — calm Dutch kitchen-table map scene with Planning notes rail and ExpatLife brand footer.",
      "Pick a pattern first — then tickets and last mile fall into place."
    ),
    chipkaart: visual(
      "chipkaart",
      "Premium tickets and discounts board — singles, OVpay, Weekend Voordeel orientation, link to Train discounts for product math — Dutch ticket desk with Ticket notes rail and ExpatLife brand footer.",
      "Leisure tickets are short orientation here — Train discounts owns product math."
    ),
    decide: visual(
      "decide",
      "Premium last-mile board — OV-fiets and bike sharing, walking and local OV, occasional car sharing — station plaza scene with Last-mile checklist rail and ExpatLife brand footer.",
      "The last kilometre often decides whether a weekend feels easy."
    ),
    student: visual(
      "student",
      "Premium packing and check-in board — light bag, ticket method ready, check-in reminders, weather layer — home hallway desk with Packing rail and ExpatLife brand footer.",
      "Light bags and ticket readiness beat last-minute platform stress."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first weekend after arrival, beach day trip, museum city overnight, countryside with last-mile gap, visiting friends — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match the weekend shape to tickets and last mile instead of copying a influencer itinerary."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — overpacking, ignoring last trains, skipping discount math, treating this as a city SEO dump, forgetting regional OV, assuming car is always better — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is last-mile and last-train timing — not finding a destination."
    ),
    checklist: visual(
      "checklist",
      "Premium weekend-travel readiness checklist clipboard — destination pattern chosen, tickets checked, discount sibling opened, last mile planned, packing light, NS trains opened — Dutch kitchen table with day bag and ExpatLife brand footer.",
      "Use this checklist so your first OV weekend stays calm."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "Day trip first", note: "Before overnight" },
    { label: "Planner", value: "NS + 9292", note: "Door-to-door" },
    { label: "Tickets", value: "Discounts sibling", note: "Weekend Voordeel math" },
    { label: "Last mile", value: "Bike / share", note: "OV-fiets & car share" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Weekend travel in the Netherlands is often easiest by train and regional OV: pick a day-trip or overnight pattern, check tickets and whether a Weekend Voordeel-style product is worth it, plan the last kilometre, then pack light. Expats who treat the first weekends as practice runs — not marathon itineraries — usually enjoy them more.",
    "NS trains covers how to ride and ticket types. Train discounts owns Dal / Weekend / Flex product math. Cycling and Bike sharing deepen personal and shared bikes. Car sharing is a light peer when the destination has a true last-mile gap. Getting around remains the wider mobility model. This page stays on leisure planning — not full city SEO guides or driving road-trip depth.",
  ],
  introHighlights: [
    "Start with one day trip before overnight bags and hotels.",
    "Open Train discounts for Weekend Voordeel math — this page only orients tickets.",
    "Plan the last kilometre early: local OV, OV-fiets, bike sharing, or occasional car share.",
    "Use NS trains for riding depth and Getting around for multimodal weeks.",
  ],
  orientationFlowSteps: [
    "Pick a destination pattern (coast, museum city, countryside, friends/family).",
    "Check NS + 9292 door-to-door and note last useful return trains.",
    "Decide ticket method and whether a weekend discount product is worth opening Train discounts for.",
    "Plan last mile and pack light, then ride.",
  ],
  travelFileChecklist: [
    "Destination pattern chosen (day trip vs overnight)",
    "Outbound and return trains noted with buffers",
    "Ticket method ready (OVpay / chipkaart / discount product)",
    "Train discounts sibling opened if weekend rail days are frequent",
    "Last-mile plan written (walk / local OV / bike share / car share)",
    "Light bag + weather layer packed",
  ],
  introScenarios: [
    {
      situation: "First Saturday after arrival",
      approach: "One nearby day trip with OVpay or singles — skip complex discounts.",
      firstStep: "Open plan the trip and NS trains; keep Train discounts for later.",
    },
    {
      situation: "Monthly museum or coast weekends",
      approach: "Orient Weekend Voordeel on Train discounts, then reuse planning habits here.",
      firstStep: "Open tickets & discounts and Train discounts; then packing.",
    },
    {
      situation: "Countryside stay with weak last-mile OV",
      approach: "Rail to a hub, then bike share or light car share — not a full road trip.",
      firstStep: "Open last mile, Bike sharing and Car sharing lightly.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "NS trains remains the how-to-ride sibling.",
    "Train discounts deepens Weekend Voordeel and related product math.",
    "Bike sharing and Cycling cover last-mile active options.",
    "Car sharing is occasional four wheels — not a driving deep-dive.",
    "Getting around remains the multimodal overview.",
  ],
  quickAnswer: {
    heading: "Weekend travel in one minute",
    summary:
      "Most expat weekend getaways in the Netherlands work well by NS trains plus regional OV: choose a day-trip or short overnight pattern, check live planners for last returns, decide tickets (and whether a weekend discount product is worth it), then plan the last kilometre with walking, local OV, OV-fiets / bike sharing, or occasional car sharing. Keep Train discounts for product math and NS trains for riding depth — this page is leisure planning, not a tourism dump.",
    bullets: [
      "Practice with a day trip before overnight logistics.",
      "Note last useful return trains before you commit to dinner plans.",
      "Open Train discounts when weekend rail days become a habit.",
      "Solve last mile early — it decides comfort more than the destination name.",
    ],
    note: "NS trains, Train discounts, Bike sharing, Car sharing and Getting around are siblings — use them for riding, product math, last mile and multimodal overview.",
  },
  snapshotCards: [
    { title: "Plan early", body: "Day trip vs overnight and last-return buffers." },
    { title: "Tickets & discounts", body: "Singles, OVpay, Weekend Voordeel orientation." },
    { title: "Destination patterns", body: "Coast, museum city, countryside, friends." },
    { title: "Last mile", body: "Walk, local OV, bike share, light car share." },
    { title: "Pack light", body: "Ticket method ready + weather layer." },
    { title: "Avoid mistakes", body: "Overpacking, missed last trains, SEO dumps." },
  ],
  products: {
    heading: "Plan the trip: patterns, planners and buffers",
    intro:
      "Weekend travel planning starts with a pattern, not a Pinterest board. Day trips, short overnights and visiting friends/family use different ticket and last-mile choices.",
    paragraphs: [
      "Use NS for national rail legs and 9292 (or operator apps) for door-to-door including regional buses, trams and metro. Write the last useful return train before you book dinner. Museum cities and coast towns usually have denser OV; countryside stays often need an explicit last-mile plan.",
      "This is not a ranked list of tourist cities. Sample patterns only — then deepen riding on NS trains and local modes on Trams, Metro and Regional buses when needed.",
    ],
    rows: [
      {
        topic: "Day trip",
        whatToCheck: "Outbound mid-morning, return buffer before last useful train.",
        tip: "Best first weekend practice — light bag, OVpay or singles.",
      },
      {
        topic: "Overnight weekend",
        whatToCheck: "Hotel near station vs last-mile; luggage comfort on platforms.",
        tip: "Pack lighter than you think; deepen tickets on Train discounts if frequent.",
      },
      {
        topic: "Coast / beach pattern",
        whatToCheck: "NS + local bus/tram to beach; weather and bike options.",
        tip: "Check last connections — evening services thin out outside cities.",
      },
      {
        topic: "Countryside / friends",
        whatToCheck: "Final bus frequency or bike/car-share gap from hub station.",
        tip: "Open last mile early; Car sharing is a light peer, not a road-trip guide.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Pattern first", body: "Day trip, overnight and countryside are different logistics." },
      { title: "Last return", body: "Write the last useful train before you commit plans." },
      { title: "Riding sibling", body: "NS trains owns how to buy tickets and ride calmly." },
    ] satisfies TipCard[],
    crossLinks: [
      { label: "NS trains", href: NS_TRAINS_NETHERLANDS_PATH, status: "live", description: "How to ride and ticket types." },
      { label: "Train discounts", href: TRAIN_DISCOUNTS_NETHERLANDS_PATH, status: "live", description: "Weekend Voordeel and product math." },
      { label: "Getting around", href: GETTING_AROUND_PATH, status: "live", description: "Multimodal mobility overview." },
    ] satisfies TransportLink[],
  },
  chipkaart: {
    heading: "Tickets and discounts for leisure weekends",
    intro:
      "Leisure tickets are usually simples: OVpay or singles for rare trips, a personal OV-chipkaart path when a weekend discount product fits. Product math lives on Train discounts — this section only orients the fork.",
    paragraphs: [
      "If you take one rail day a month, pay-as-you-go is often enough. If Friday–Sunday rail days become a habit, open Train discounts for Weekend Voordeel-style orientation and chipkaart linking. Do not treat this page as a price calculator.",
      "Regional legs may use the same OVpay or chipkaart taps — deepen quirks on Regional buses, Trams and Metro when your destination uses them.",
    ],
    rows: [
      {
        topic: "Occasional leisure",
        whatToCheck: "OVpay or single tickets vs monthly fee.",
        tip: "Stay PAYG until weekend rail days are a habit.",
      },
      {
        topic: "Frequent weekend rail",
        whatToCheck: "Weekend Voordeel-style products and chipkaart path.",
        tip: "Open Train discounts for break-even orientation.",
      },
      {
        topic: "Mixed NS + regional OV",
        whatToCheck: "Whether your ticket method covers the full door-to-door chain.",
        tip: "Check 9292 legs; open local-mode siblings if needed.",
      },
      {
        topic: "Indicative prices",
        whatToCheck: "Live NS quotes — not forum screenshots.",
        tip: "Orientation only; confirm today before you travel.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Math sibling", body: "Train discounts owns Dal / Weekend / Flex orientation." },
      { title: "Method matters", body: "OVpay and chipkaart subscriptions are different paths." },
      { title: "Riding sibling", body: "NS trains deepens buying and check-in habits." },
    ] satisfies TipCard[],
    crossLinks: [
      { label: "Train discounts", href: TRAIN_DISCOUNTS_NETHERLANDS_PATH, status: "live", description: "Discount product math for expats." },
      { label: "NS trains", href: NS_TRAINS_NETHERLANDS_PATH, status: "live", description: "Ticket types and how to ride." },
      { label: "OVpay", href: OVPAY_NETHERLANDS_PATH, status: "live", description: "Contactless pay-as-you-go." },
      { label: "OV-chipkaart", href: OV_CHIPKAART_NETHERLANDS_PATH, status: "live", description: "Personal card setup." },
    ] satisfies TransportLink[],
  },
  decide: {
    heading: "Last mile: bike, local OV or light car share",
    intro:
      "The last kilometre often decides weekend comfort. Hub stations may leave you with a walk, local bus/tram, OV-fiets / bike sharing, or an occasional shared car — not a full driving road trip.",
    paragraphs: [
      "OV-fiets and city bike-sharing work well for short station-to-attraction hops — deepen on Bike sharing and everyday rules on Cycling. When luggage, kids or sparse evening buses dominate, a short car-share leg can be calmer than forcing every kilometre onto OV — open Car sharing lightly.",
      "This page does not rank destinations or driving routes. Keep Driving siblings for licence and car ownership depth if you later need them.",
    ],
    rows: [
      {
        topic: "Walkable hub",
        whatToCheck: "Hotel or attraction distance from station.",
        tip: "Often the calmest day-trip pattern.",
      },
      {
        topic: "Local OV last mile",
        whatToCheck: "Sunday/evening frequency on 9292.",
        tip: "Regional buses and trams thin out — write the last useful bus.",
      },
      {
        topic: "Bike / OV-fiets",
        whatToCheck: "Availability near station and lock/parking habits.",
        tip: "Open Bike sharing; keep Cycling for ownership rules.",
      },
      {
        topic: "Occasional car share",
        whatToCheck: "Pickup near hub, parking at destination, licence readiness.",
        tip: "Light peer only — open Car sharing; not a road-trip guide.",
      },
    ] satisfies ComparisonRow[],
    costRows: [
      { category: "OV day trip", range: "Indicative", notes: "NS + local taps — confirm live fares" },
      { category: "OV-fiets / bike share", range: "Indicative", notes: "Short hops from stations" },
      { category: "Car share add-on", range: "Indicative", notes: "When last-mile OV is thin" },
    ] satisfies CostRow[],
    cards: [
      { title: "Solve early", body: "Last mile belongs in the plan, not on the platform." },
      { title: "Active peers", body: "Bike sharing and Cycling deepen bike options." },
      { title: "Four wheels light", body: "Car sharing is occasional — not Driving deep-dive." },
    ] satisfies TipCard[],
    crossLinks: [
      { label: "Bike sharing", href: BIKE_SHARING_NETHERLANDS_PATH, status: "live", description: "OV-fiets and shared fleets." },
      { label: "Cycling", href: CYCLING_NETHERLANDS_PATH, status: "live", description: "Everyday bike rules and locks." },
      { label: "Car sharing", href: CAR_SHARING_NETHERLANDS_PATH, status: "live", description: "Occasional shared cars." },
      { label: "Regional buses", href: REGIONAL_BUSES_NETHERLANDS_PATH, status: "live", description: "When the last leg is a bus." },
    ] satisfies TransportLink[],
  },
  student: {
    heading: "Packing and check-in tips for calm weekends",
    intro:
      "Light packing and ticket readiness beat last-minute platform stress. Keep one weather layer, confirm your ticket method works offline enough for validators, and leave buffer time for check-in.",
    paragraphs: [
      "For day trips, a small backpack usually beats wheeled luggage on stairs and busy trains. For overnights, pack one outfit buffer and keep documents/tickets accessible. Confirm check-in/out habits on NS trains and OVpay / OV-chipkaart siblings.",
      "Weather changes quickly — a compact rain layer is more useful than an extra pair of shoes.",
    ],
    rows: [
      {
        topic: "Day bag",
        whatToCheck: "Water, snacks, weather layer, phone charger.",
        tip: "Stairs and bike hops punish oversized luggage.",
      },
      {
        topic: "Ticket readiness",
        whatToCheck: "Battery, card/phone ready before the gate.",
        tip: "Open NS trains for check-in discipline.",
      },
      {
        topic: "Buffers",
        whatToCheck: "Platform changes and connection minutes.",
        tip: "Write buffers into the plan, not only the destination time.",
      },
      {
        topic: "Overnight",
        whatToCheck: "Hotel distance from station and morning return train.",
        tip: "Stay near the hub if last-mile OV is thin at night.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Light wins", body: "Comfort on platforms beats packing ‘just in case’." },
      { title: "Ticket first", body: "Dead phone + wrong card is a classic weekend fail." },
      { title: "Weather layer", body: "Dutch weekends reward a compact rain shell." },
    ] satisfies TipCard[],
    crossLinks: [
      { label: "NS trains", href: NS_TRAINS_NETHERLANDS_PATH, status: "live", description: "Check-in and riding habits." },
      { label: "OVpay", href: OVPAY_NETHERLANDS_PATH, status: "live", description: "Contactless taps." },
      { label: "Getting around", href: GETTING_AROUND_PATH, status: "live", description: "Everyday multimodal habits." },
    ] satisfies TransportLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Train and mobility options to explore",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when weekend trips fit your month. This block is not a ranking of destinations, apps or operators.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a leisure weekend — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer Weekend trips for destination ideas, NS trains for riding depth and Train discounts for product math.",
    placementId: "nl-living-weekend-travel-support-providers",
    analyticsPageContext: "weekend-travel-netherlands-recommended-options",
    categoryLinks: [
      { href: WEEKEND_TRIPS_NETHERLANDS_PATH, label: "Weekend trips" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
      { href: TRAIN_DISCOUNTS_NETHERLANDS_PATH, label: "Train discounts" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat weekend-travel scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First weekend after arrival",
        approach: "Nearby day trip with OVpay or singles; skip subscriptions.",
        firstStep: "Open plan the trip and NS trains.",
      },
      {
        situation: "Monthly coast or museum Saturdays",
        approach: "Reuse planning habits; check Train discounts if rail days stack up.",
        firstStep: "Open tickets & discounts and Train discounts.",
      },
      {
        situation: "Overnight in a walkable station city",
        approach: "Pack light and stay near the hub; write morning return.",
        firstStep: "Open packing and NS trains.",
      },
      {
        situation: "Countryside stay with thin evening buses",
        approach: "Rail to hub, then bike share or light car share for last mile.",
        firstStep: "Open last mile, Bike sharing and Car sharing.",
      },
      {
        situation: "Visiting friends outside the Randstad",
        approach: "Check 9292 end-to-end and last returns before confirming dinner.",
        firstStep: "Open plan the trip and Regional buses if needed.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Overpacking for a day trip",
      body: "Stairs, bikes and busy trains punish wheeled luggage.",
      advice: "Pack a day bag first — overnight only when the pattern needs it.",
    },
    {
      title: "Ignoring the last useful return",
      body: "Dinner plans collapse when evening connections thin out.",
      advice: "Write the last useful train before you leave home.",
    },
    {
      title: "Skipping discount math on habitual weekends",
      body: "Frequent Friday–Sunday rail can make PAYG expensive.",
      advice: "Open Train discounts when weekend rail becomes a habit.",
    },
    {
      title: "Treating this as a city SEO dump",
      body: "Long attraction lists age quickly and hide logistics.",
      advice: "Use destination patterns here; deepen riding on NS trains.",
    },
    {
      title: "Forgetting regional OV quirks",
      body: "The last bus may not match your NS arrival.",
      advice: "Check 9292 for the full chain; open Regional buses / Trams / Metro as needed.",
    },
    {
      title: "Assuming a car is always better",
      body: "Parking and licences can erase weekend calm.",
      advice: "Prefer OV + bike; open Car sharing only for true last-mile gaps.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Weekend travel readiness checklist",
    intro: "Use this before your first calm OV weekend in the Netherlands.",
    items: [
      "Destination pattern chosen (day trip vs overnight)",
      "Outbound and last useful return trains noted",
      "Ticket method ready (OVpay / chipkaart / discount path)",
      "Train discounts opened if weekend rail days are frequent",
      "Last-mile plan written (walk / local OV / bike / car share)",
      "Light bag + weather layer packed",
      "Sibling guides opened: NS trains, Train discounts, Bike sharing",
      "Getting around opened if multimodal weeks still dominate",
    ],
  },
  howTo: {
    heading: "How to plan a calm public-transport weekend as an expat",
    steps: [
      {
        name: "Pick a pattern",
        text: "Choose day trip, overnight, coast, museum city, countryside or visiting friends — not five destinations in one weekend.",
      },
      {
        name: "Check door-to-door",
        text: "Use NS and 9292 to write outbound and last useful return with buffers.",
      },
      {
        name: "Decide tickets",
        text: "Stay PAYG for rare trips; open Train discounts when weekend rail becomes a habit.",
      },
      {
        name: "Solve last mile",
        text: "Plan walk, local OV, OV-fiets / bike sharing or light car share before you leave.",
      },
      {
        name: "Pack light and go",
        text: "Ticket method ready, weather layer packed, then ride — deepen riding on NS trains if needed.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to plan weekend travel by public transport in the Netherlands",
    description:
      "Expat-oriented steps to plan a calm Dutch weekend getaway with NS and regional OV, tickets and last mile.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Is weekend travel only about NS trains?",
      a: "No. Many weekends combine NS with regional buses, trams or metro. Use 9292 for door-to-door and open local-mode siblings when needed.",
    },
    {
      q: "Should I buy Weekend Voordeel before my first trip?",
      a: "Usually not. Practice with a day trip on pay-as-you-go first. Open Train discounts when weekend rail days become a habit.",
    },
    {
      q: "Where do I learn how to ride NS?",
      a: "Open the NS trains sibling for ticket types, check-in and commute orientation. This page stays on leisure planning.",
    },
    {
      q: "When does bike sharing help?",
      a: "Short station-to-attraction hops and thin local buses. Deepen on Bike sharing; everyday ownership rules live on Cycling.",
    },
    {
      q: "When is car sharing useful?",
      a: "Occasional last-mile gaps with luggage, kids or sparse evening OV — not a default. Open Car sharing lightly; Driving siblings cover ownership depth.",
    },
    {
      q: "Is this a tourism city guide?",
      a: "No. Destination patterns are orientation only. We avoid ranking attractions or dumping city SEO lists.",
    },
    {
      q: "Do prices here stay accurate?",
      a: "No. Any ranges are indicative orientation only. Confirm live NS and operator quotes before you travel.",
    },
    {
      q: "Is this financial or travel advice?",
      a: "No. ExpatLife provides general orientation only. Follow official NS, OV and operator terms.",
    },
  ],
  relatedGuidesTips: [
    "Destination ideas & weekend lifestyle → Weekend trips.",
    "How to ride & ticket types → NS trains.",
    "Discount product math → Train discounts.",
    "Nationale Parken orientation → National parks.",
    "Walking culture → Hiking.",
    "Museumkaart culture → Museums.",
    "Quieter places → Hidden gems.",
    "Coast weekends → Beach towns.",
    "Historic houses → Castles.",
    "Car multi-stop leisure → Road trips.",
    "Same-day outs (lifestyle lane) → Day trips.",
    "Shared bikes / OV-fiets → Bike sharing.",
    "Occasional four wheels → Car sharing.",
    "Wider mobility → Getting around.",
  ],
  relatedGuides: [
    {
      label: "Weekend trips",
      href: WEEKEND_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Destination ideas and weekend lifestyle planning — where to go.",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Same-day outing patterns — lifestyle lane; this page owns OV how-to.",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Car multi-stop leisure driving — when OV is not the plan.",
    },
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "How to ride, ticket types and commute orientation.",
    },
    {
      label: "Train discounts",
      href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
      status: "live",
      description: "Weekend Voordeel and NS discount product math.",
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
      description: "Walking and hiking culture for leisure days.",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Museumkaart culture for city and rainy getaways.",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Quieter towns and neighbourhood day patterns.",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Coastal towns and beach-day culture — OV last mile here.",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Castles and historic houses — station-to-estate hops.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "OV, bikes and everyday multimodal mobility.",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "OV-fiets and shared fleets for last mile.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Occasional shared cars when OV last mile is thin.",
    },
    {
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Contactless bank-card and phone travel.",
    },
    {
      label: "OV-chipkaart",
      href: OV_CHIPKAART_NETHERLANDS_PATH,
      status: "live",
      description: "Personal travel card setup for subscriptions.",
    },
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "When the last leg is a regional bus.",
    },
  ] satisfies TransportLink[],
  transportHubTips: [
    "Weekend travel is the leisure OV how-to in Public transport.",
    "Weekend trips (Weekend & lifestyle) owns destination ideas.",
    "Day trips owns same-day lifestyle patterns; Road trips owns car multi-stop.",
    "National parks and Hiking deepen nature weekends.",
    "NS trains deepens how to ride and ticket types.",
    "Train discounts deepens Weekend Voordeel and product math.",
    "Bike sharing and Car sharing cover last-mile options.",
  ],
  transportHubCards: [
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Leisure rail weekends — you are here.",
    },
    {
      label: "Weekend trips",
      href: WEEKEND_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Destination ideas and weekend lifestyle.",
    },
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Same-day outing lifestyle patterns.",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Car multi-stop leisure driving.",
    },
    {
      label: "Train discounts",
      href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
      status: "live",
      description: "NS discount products and break-even orientation.",
    },
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "National rail products and commute orientation.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Modes, bikes and multimodal commuting.",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Shared bikes and OV-fiets last mile.",
    },
  ] satisfies TransportLink[],
  exploreNextCards: [
    {
      label: "Day trips",
      href: DAY_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Same-day outing patterns after you know OV basics?",
    },
    {
      label: "Weekend trips",
      href: WEEKEND_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Need destination ideas and weekend vibe planning?",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "When a shared car multi-stop beats rail?",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Planning a coast day and need stretch orientation?",
    },
    {
      label: "Train discounts",
      href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
      status: "live",
      description: "Need Weekend Voordeel or Dal product math?",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Heading to castles and need visit-culture depth?",
    },
  ] satisfies TransportLink[],
  exploreNextTips: [
    "Same-day lifestyle → Day trips.",
    "Destination ideas → Weekend trips.",
    "Car multi-stop → Road trips.",
    "Coast → Beach towns.",
    "Product math → Train discounts.",
    "Historic houses → Castles.",
  ],
  officialSources: [
    {
      label: "NS — tickets and journey planner",
      href: "https://www.ns.nl/en",
      description: "Official national rail tickets, planners and product pages.",
    },
    {
      label: "9292 — door-to-door OV planner",
      href: "https://9292.nl/en",
      description: "National public-transport journey planner including regional legs.",
    },
    {
      label: "OVpay",
      href: "https://www.ovpay.nl/en",
      description: "Contactless travel orientation.",
    },
    {
      label: "OV-chipkaart",
      href: "https://www.ov-chipkaart.nl/en",
      description: "Personal and anonymous travel card orientation.",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Pick a destination pattern.",
        "Check tickets and discounts.",
        "Plan the last mile.",
        "Pack light.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Plan early.",
        "Tickets and discounts.",
        "Destination patterns.",
        "Last mile.",
        "Packing tips.",
        "Mistakes to avoid.",
      ],
    },
    products: {
      title: "From the visual — planning cues",
      items: [
        "Day trip vs overnight.",
        "NS plus regional OV.",
        "9292 planner habits.",
        "Pattern before tickets.",
      ],
    },
    chipkaart: {
      title: "From the visual — ticket cues",
      items: [
        "Singles for rare days.",
        "OVpay for light use.",
        "Weekend Voordeel orientation.",
        "Train discounts for product math.",
      ],
    },
    decide: {
      title: "From the visual — last-mile cues",
      items: [
        "OV-fiets and bike sharing.",
        "Walking and local OV.",
        "Occasional car sharing.",
        "Last kilometre decides ease.",
      ],
    },
    student: {
      title: "From the visual — packing cues",
      items: [
        "Light bag.",
        "Ticket method ready.",
        "Check-in reminders.",
        "Weather layer.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "First leisure weekend.",
        "Day trip by NS.",
        "Overnight with regional OV.",
        "Last-mile bike or share-car.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "Skipping the planner.",
        "Buying the wrong product.",
        "Ignoring last mile.",
        "Overpacking for a day trip.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Destination pattern chosen.",
        "Tickets confirmed.",
        "Last mile planned.",
        "Bag ready.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general weekend-travel and mobility orientation for newcomers. It is not financial, travel or product advice. Timetables, NS products, fees and OV rules change — always confirm on official NS, 9292 and OV pages before you travel. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
} as const;

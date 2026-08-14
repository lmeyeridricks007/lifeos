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
const VISUAL_PREFIX = "castles-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const castlesNetherlandsPage = {
  slug: "castles-netherlands",
  path: CASTLES_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: LIVING_SURVIVAL_GUIDE_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(CASTLES_NETHERLANDS_PATH) ?? "2026-10-17",
  seo: {
    title: "Castles in the Netherlands | Complete Guide for Expats",
    description:
      "Castles and historic houses for expats in the Netherlands: what to expect, booking and season habits, regional orientation, gardens vs interiors, and family vs quiet visits — with links to Museums, Weekend trips and Weekend travel.",
    keywords: [
      "castles Netherlands",
      "Dutch castles",
      "kastelen Netherlands",
      "historic houses Netherlands",
      "castle visits Netherlands",
      "castles for expats",
      "Dutch castle gardens",
      "Utrecht castles orientation",
      "Gelderland castles",
      "Limburg castles",
      "castle tickets Netherlands",
      "weekend castle day Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Weekend & lifestyle",
    pageTitle: "Castles in the Netherlands",
    subtitle:
      "Castles and historic houses for expats: what to expect, booking and season habits, regional orientation, gardens vs interiors, and family vs quiet visits — not a ranked best castles list.",
    primaryCta: { label: "Understand visit culture", href: "#culture" },
    secondaryCta: { label: "Castle checklist", href: "#checklist" },
    chips: ["Kastelen", "Tickets", "Regions", "Gardens", "Family visits"],
    disclaimer:
      "General lifestyle orientation only — not travel, booking or financial advice and not a ranking of castles, hotels or tour operators. Opening hours, tickets, seasons and access rules change. Verify venue pages, museum/castle operators and planners before you go. Museums owns museum-going and Museumkaart; Hidden gems owns lesser-known spots; Weekend trips short-orients day/weekend vibe; Weekend travel owns OV how-to.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch castle morning: multicultural expats with light day bags walking a tree-lined path toward a brick historic house and moat gardens, soft daylight and reassuring leisure mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#culture", label: "Visit culture" },
    { href: "#booking", label: "Booking & seasons" },
    { href: "#regions", label: "Regions" },
    { href: "#grounds", label: "Gardens & interiors" },
    { href: "#visit-styles", label: "Visit styles" },
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
      "Premium orientation board titled Castles After Arrival — four building blocks: understand Dutch castle culture, learn booking and seasons, choose a regional pattern, match gardens or interiors and visit style — Castle Day Checklist rail on the right, Dutch moat and historic-house skyline band and ExpatLife brand footer.",
      "Four habits cover most first castle months: culture, booking, region, visit style."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of castles in the Netherlands — visit culture, booking and seasons, regional patterns, gardens vs interiors, family vs quiet visits, getting there — Dutch castle skyline band and ExpatLife brand footer.",
      "Six building blocks explain almost every first Dutch castle-day question for newcomers."
    ),
    culture: visual(
      "culture",
      "Premium castle culture board — timed slots, house rules, café pauses, grounds walks — foyer desk scene with Visit culture notes rail and ExpatLife brand footer.",
      "Dutch castle days often favour timed entries, calm pacing and grounds pauses."
    ),
    booking: visual(
      "booking",
      "Premium booking and seasons board — timed tickets, holiday crowding, shoulder gardens, winter interiors — calendar desk scene with Booking cues rail and ExpatLife brand footer.",
      "Tickets and seasons change — check venue pages the week you go."
    ),
    regions: visual(
      "regions",
      "Premium regional-orientation board — Utrecht day-trip patterns, Gelderland estate weekends, Limburg longer hops — map-style cards with Region notes rail, canal and castle landscape and ExpatLife brand footer.",
      "Choose a regional pattern first — not a ranked castle SEO list."
    ),
    grounds: visual(
      "grounds",
      "Premium gardens and interiors board — park loops, house tours, weather pivots, energy budgets — garden-path desk scene with Grounds notes rail and ExpatLife brand footer.",
      "Many visits mix gardens and interiors — plan energy for both."
    ),
    visitStyles: visual(
      "visit-styles",
      "Premium visit-style board — family energy, quiet mornings, grounds-only days, overnight vs day trip — kitchen-table cards with Visit notes rail and ExpatLife brand footer.",
      "Filter by company and energy — family, quiet or grounds-first — before naming venues."
    ),
    gettingThere: visual(
      "getting-there",
      "Premium getting-there board — NS hub, bus last mile, bike hop, Weekend travel link — station-to-estate route scene with Mobility notes rail and ExpatLife brand footer.",
      "Train hubs plus last mile cover most castle days — deepen OV on Weekend travel."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first Utrecht-region day, family spring garden visit, quiet shoulder morning, Gelderland overnight, rainy interiors pivot — first-step arrows and Dutch castle skyline band with ExpatLife brand footer.",
      "Match the castle day to energy and company — not a copied influencer itinerary."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — ranking FOMO, skipping tickets, ignoring seasons, late peak arrival, treating this as hotel SEO — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is booking and energy mismatch — not finding a castle."
    ),
    checklist: visual(
      "checklist",
      "Premium castle-day readiness checklist clipboard — region chosen, tickets checked, gardens vs interiors planned, Weekend travel opened, return plan written — Dutch kitchen table with day bag and ExpatLife brand footer.",
      "Use this checklist so your first Dutch castle month stays calm."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "One calm visit", note: "Before peak holiday Saturdays" },
    { label: "Filter first", value: "Region + style", note: "Not ranked castle lists" },
    { label: "Transport", value: "Weekend travel", note: "OV how-to sibling" },
    { label: "Sibling lane", value: "Museums", note: "Museumkaart & galleries" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Castles and historic houses (kastelen and buitenplaatsen) are a core leisure habit for many newcomers in the Netherlands: moats, park gardens, timed house tours, and short train-or-bike hops to Utrecht, Gelderland or Limburg patterns. Expats who treat the first months as practice days (one region, realistic tickets, calm energy) enjoy visits more than those chasing ranked “best castle” lists.",
    "This page owns castles and historic-house visit culture. Museums owns museum-going and Museumkaart. Hidden gems covers lesser-known spots that are not castle-lane depth. Weekend trips short-orients day/weekend vibe choosing. Weekend travel owns NS/OV how-to-get-there. Beach towns, Hiking and National parks are cluster peers for outdoor weekends.",
  ],
  introHighlights: [
    "Start with one calm castle or historic-house day before peak holiday Saturdays.",
    "Choose a regional pattern (e.g. Utrecht day trips, Gelderland weekends, Limburg longer hops) and a visit style — not a ranked venue SEO list.",
    "Check tickets, timed slots and seasons the week you go; gardens and interiors need different energy.",
    "Use Weekend travel for trains and last mile; Museums for gallery days; Hidden gems for lesser-known non-castle spots.",
  ],
  orientationFlowSteps: [
    "Understand Dutch castle and historic-house culture (timed slots, house rules, café pauses, grounds walks).",
    "Learn booking and season habits — tickets, holidays and shoulder garden days.",
    "Choose a regional pattern — Utrecht, Gelderland or Limburg orientation — without rankings.",
    "Match gardens vs interiors and family vs quiet energy, then plan transport via Weekend travel.",
  ],
  travelFileChecklist: [
    "Region and visit style written (not a FOMO castle ranking)",
    "Tickets / timed slots checked on the venue page",
    "Season and holiday crowding considered",
    "Gardens vs interiors energy planned",
    "Weekend travel opened if the day needs OV",
    "Return train or bike plan written",
  ],
  introScenarios: [
    {
      situation: "First Utrecht-region castle Saturday",
      approach: "One venue, timed ticket, café pause, early return.",
      firstStep: "Open culture and regions.",
    },
    {
      situation: "Family spring garden day",
      approach: "Grounds-first loop, snack plan, shorter interiors.",
      firstStep: "Open visit styles and grounds.",
    },
    {
      situation: "Quiet shoulder-season morning",
      approach: "Early slot, gardens walk, light house tour.",
      firstStep: "Open booking and visit styles.",
    },
    {
      situation: "Gelderland overnight idea",
      approach: "Weekend trips for lodging vibe; this page for castle habits.",
      firstStep: "Open regions and Weekend trips.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Ticket and season mismatch cause more friction than ‘wrong’ castles.",
    "Many Dutch visits mix park gardens with house interiors — budget energy for both.",
    "Weekend trips short-orients castle weekends; this page owns castle visit depth.",
    "OV how-to lives on Weekend travel — keep parking optional and verified locally.",
  ],
  quickAnswer: {
    heading: "How castles work for expats in the Netherlands",
    summary:
      "Dutch castle and historic-house culture favours timed tickets, calm pacing, park gardens and café pauses. Orient on booking and seasons, choose a regional pattern (Utrecht day trips, Gelderland estate weekends, Limburg longer hops) without rankings, filter by family vs quiet energy, and plan transport via Weekend travel. Museums owns galleries and Museumkaart; Hidden gems owns lesser-known spots; Weekend trips short-orients day/weekend vibe.",
    bullets: [
      "Visit culture, booking and seasons, regions, gardens vs interiors, visit styles and getting there live on this page.",
      "Museum-going and Museumkaart live on Museums; lesser-known spots deepen on Hidden gems.",
      "Weekend destination planning lives on Weekend trips; OV how-to on Weekend travel.",
      "Avoid treating this guide as a ranking of castles, hotels or tour operators.",
    ],
    note: "If you only open one sibling after this page, open Museums for gallery culture or Weekend travel for how to get there.",
  },
  snapshotCards: [
    {
      title: "Visit culture",
      body: "Timed slots, house rules, café pauses and grounds walks — not rushed selfie hops.",
    },
    {
      title: "Booking & seasons",
      body: "Tickets, holidays and shoulder garden days — verify the week you go.",
    },
    {
      title: "Regional patterns",
      body: "Utrecht, Gelderland and Limburg orientation — choose a pattern, not a ranking.",
    },
    {
      title: "Gardens & interiors",
      body: "Park loops vs house tours — plan energy and weather pivots.",
    },
    {
      title: "Visit styles",
      body: "Family energy, quiet mornings or grounds-only — filter before naming venues.",
    },
    {
      title: "Getting there",
      body: "Station hubs, last mile and Weekend travel for OV depth.",
    },
  ] satisfies TipCard[],
  culture: {
    heading: "Dutch castle and historic-house culture for newcomers",
    intro:
      "In the Netherlands, castle days often look like practical leisure: check opening hours, book a timed slot when required, walk the park gardens, take a calm house tour, pause at a café, and plan an early return. Many locals treat kastelen and buitenplaatsen as regular weekend habits — not only once-in-a-lifetime tourist stamps.",
    paragraphs: [
      "Expect house rules (bags, photos, stairs), changeable garden weather, and busier weekends in holiday peaks. Social leisure meetups exist lightly — Making Dutch friends can support habits without turning this page into a club directory.",
      "This is not a ranking of castles or influencers. Treat culture notes as orientation so your first visits feel Dutch — paced, ticket-aware and transport-planned.",
    ],
    rows: [
      {
        topic: "Timed slots",
        whatToCheck: "Venue booking window and entry time",
        tip: "Arrive a little early — late slots compress the visit.",
      },
      {
        topic: "House rules",
        whatToCheck: "Bags, photos, stairs and accessibility notes",
        tip: "Read the venue page before you go.",
      },
      {
        topic: "Café pauses",
        whatToCheck: "Opening hours and card payment",
        tip: "Build a break between gardens and interiors.",
      },
      {
        topic: "Sunday return",
        whatToCheck: "Last useful train or parking exit",
        tip: "Protect return timing — deepen OV on Weekend travel.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Pace calmly", body: "One strong venue beats chasing three ranked castles." },
      { title: "Expect rules", body: "Historic houses protect interiors — follow staff guidance." },
      { title: "No castle SEO", body: "Region and visit-style filters beat influencer rankings." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Museums",
        href: MUSEUMS_NETHERLANDS_PATH,
        status: "live",
        description: "Gallery culture and Museumkaart — short cross-link only.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "When the castle day sits inside a wider weekend vibe.",
      },
      {
        label: "Making Dutch friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        status: "live",
        description: "Social leisure habits lightly.",
      },
    ] satisfies LifestyleLink[],
  },
  booking: {
    heading: "Booking and seasons: tickets, slots and crowds",
    intro:
      "Many castles and historic houses use timed tickets, seasonal opening hours or holiday crowding. Shoulder months often favour quieter garden walks; peak weekends and school holidays fill popular venues. Always verify live booking pages — calendars change.",
    paragraphs: [
      "Winter can lean interior-heavy when gardens feel short on daylight; spring and summer reward grounds-first plans. Midweek and early mornings often feel calmer than sunny Saturday afternoons.",
      "We do not publish a permanent best-month or best-ticket ranking. Treat booking notes as orientation and check the venue the week you go.",
    ],
    rows: [
      {
        topic: "Timed tickets",
        whatToCheck: "Official venue booking and slot times",
        tip: "Book early for popular holiday weekends.",
      },
      {
        topic: "Seasonal hours",
        whatToCheck: "Winter vs summer opening windows",
        tip: "Gardens and houses may open on different schedules.",
      },
      {
        topic: "Holiday peaks",
        whatToCheck: "School breaks and sunny Saturdays",
        tip: "Arrive early or choose a shoulder day.",
      },
      {
        topic: "Weather pivots",
        whatToCheck: "KNMI / Weather and indoor options",
        tip: "Rain → interiors or Museums sibling.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Verify weekly", body: "Hours and tickets change — venue pages beat old blogs." },
      { title: "Match season", body: "Shoulder gardens vs peak weekends need different energy." },
      { title: "Have a Plan B", body: "Museums or a café pause when slots fill or rain arrives." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Season and rain cues for garden days.",
      },
      {
        label: "Museums",
        href: MUSEUMS_NETHERLANDS_PATH,
        status: "live",
        description: "Indoor Plan B and Museumkaart orientation.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "When-to-go notes inside wider weekend planning.",
      },
    ] satisfies LifestyleLink[],
  },
  regions: {
    heading: "Regional orientation: Utrecht, Gelderland and Limburg patterns",
    intro:
      "Think in regional patterns before collecting castle names. Utrecht-region day trips often suit first months near Randstad hubs. Gelderland estate weekends favour longer park days and optional overnights. Limburg hops can feel longer and more weekend-shaped. Choose by travel time and energy — not by a ranked SEO list.",
    paragraphs: [
      "A calm first month often looks like: one nearby Utrecht-pattern day, then an optional Gelderland overnight via Weekend trips planning, then a quieter shoulder visit when you want space. Hidden gems owns lesser-known spots outside this lane; Museums covers city galleries.",
      "We do not publish a best-castles ranking or recommend hotels. Filter by region, travel time and visit style, then verify on venue and tourism pages.",
    ],
    rows: [
      {
        topic: "Utrecht-pattern days",
        whatToCheck: "Station town + last mile",
        tip: "Often the easiest first expat castle day.",
      },
      {
        topic: "Gelderland weekends",
        whatToCheck: "Travel time and overnight energy",
        tip: "Open Weekend trips for weekend lodging vibe.",
      },
      {
        topic: "Limburg longer hops",
        whatToCheck: "Weekend energy and return timing",
        tip: "Treat as a fuller weekend — not a rushed stamp.",
      },
      {
        topic: "Lesser-known spots",
        whatToCheck: "Non-castle quiet edges",
        tip: "Open Hidden gems for that lane.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Pattern first", body: "Utrecht, Gelderland or Limburg — then pick a venue." },
      { title: "One strong day", body: "Depth beats collecting ranked castle stamps." },
      { title: "Sibling lanes", body: "Weekend trips for weekends; Hidden gems for non-castle gems." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Weekend destination ideas and short-orient.",
      },
      {
        label: "Hidden gems",
        href: HIDDEN_GEMS_NETHERLANDS_PATH,
        status: "live",
        description: "Lesser-known places beyond castle lane.",
      },
      {
        label: "Beach towns",
        href: BEACH_TOWNS_NETHERLANDS_PATH,
        status: "live",
        description: "Coast peer when you want a beach weekend instead.",
      },
      {
        label: "Getting there",
        href: "#getting-there",
        status: "live",
        description: "NS, bikes and last mile for castle days.",
      },
    ] satisfies LifestyleLink[],
  },
  grounds: {
    heading: "Gardens and grounds vs interiors",
    intro:
      "Many Dutch castle visits mix park gardens with house interiors. Grounds-first days suit families, spring blooms and changeable weather. Interior tours need more focus, stairs awareness and timed pacing. Plan energy for both — or choose a grounds-only loop when kids or rain need simplicity.",
    paragraphs: [
      "Gardens reward sturdy casual shoes and a weather check. Interiors reward reading house rules and arriving for your slot. A café pause between the two keeps the day pleasant.",
      "This is orientation, not product advice — we do not rank gardens, ticketing products or tour operators.",
    ],
    rows: [
      {
        topic: "Park gardens",
        whatToCheck: "Path length, weather and toilet stops",
        tip: "Great for families and shoulder seasons.",
      },
      {
        topic: "House interiors",
        whatToCheck: "Slot time, stairs and photo rules",
        tip: "Keep the tour paced — skip FOMO rooms if energy drops.",
      },
      {
        topic: "Weather pivot",
        whatToCheck: "Rain forecast and indoor options",
        tip: "Swap to interiors or Museums if gardens soak.",
      },
      {
        topic: "Energy budget",
        whatToCheck: "Kids, mobility and daylight",
        tip: "One strong loop beats overpacking the itinerary.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Mix or focus", body: "Gardens-only days are valid — not a failed visit." },
      { title: "Shoes matter", body: "Park paths beat dress shoes on estate grounds." },
      { title: "Pause between", body: "Café breaks protect patience for interiors." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Visit styles",
        href: "#visit-styles",
        status: "live",
        description: "Family vs quiet energy filters.",
      },
      {
        label: "Hiking",
        href: HIKING_NETHERLANDS_PATH,
        status: "live",
        description: "Longer walking culture when gardens become trails.",
      },
      {
        label: "National parks",
        href: NATIONAL_PARKS_NETHERLANDS_PATH,
        status: "live",
        description: "Nature peer when estates meet park systems.",
      },
    ] satisfies LifestyleLink[],
  },
  visitStyles: {
    heading: "Visit styles: family, quiet or grounds-first",
    intro:
      "Filter by energy and company before naming venues. Family days need early starts, snack plans and shorter interiors. Quiet seekers favour shoulder seasons and early slots. Grounds-first days accept weather and keep house tours optional — with return timing protected.",
    paragraphs: [
      "Overnight vs day trip is a separate filter: day trips suit nearby Utrecht-pattern hubs; overnights suit Gelderland or Limburg via Weekend trips planning. Family activities deepens kid leisure beyond castle-lane tips.",
      "We do not rank the quietest or best family castles. Match visit style, region and travel time, then confirm facilities yourself.",
    ],
    rows: [
      {
        topic: "Family energy",
        whatToCheck: "Toilets, snack plan, shorter interiors",
        tip: "Leave while energy is still good.",
      },
      {
        topic: "Quiet mornings",
        whatToCheck: "Early slots and shoulder seasons",
        tip: "Expect calmer gardens before peak lunch.",
      },
      {
        topic: "Grounds-first",
        whatToCheck: "Park loops and weather",
        tip: "Skip interiors if kids or rain need simplicity.",
      },
      {
        topic: "Day trip vs overnight",
        whatToCheck: "Travel time and Sunday return",
        tip: "Open Weekend trips for overnight vibe.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Company first", body: "Kids, friends or solo quiet change the plan." },
      { title: "Energy budget", body: "Short successful days beat marathon castle hopping." },
      { title: "Sibling depth", body: "Family activities owns wider kid leisure." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live",
        description: "Kid leisure beyond castle-lane tips.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "Overnight castle weekend planning.",
      },
      {
        label: "Booking & seasons",
        href: "#booking",
        status: "live",
        description: "Peak-day and ticket habits.",
      },
    ] satisfies LifestyleLink[],
  },
  gettingThere: {
    heading: "Getting there: trains, bikes and last mile",
    intro:
      "Most castle days start from a station hub, a regional bus, or a bike hop to the estate. Open Weekend travel for leisure OV how-to, NS trains for riding depth, and Cycling or Bike sharing for last mile — this page stays on castle-lane planning.",
    paragraphs: [
      "Write the last useful return time before you settle into a long garden walk. Greenwheels-style car share stays optional for family gear or thin last miles. Do not treat Castles as a Cycling nav duplicate — cross-link only.",
      "OV chipkaart and OVpay habits deepen on public-transport siblings; use them when your castle day needs multimodal travel.",
    ],
    rows: [
      {
        topic: "Station estates",
        whatToCheck: "Walk, bus or short bike from NS",
        tip: "Open Weekend travel for leisure OV planning.",
      },
      {
        topic: "Bike last mile",
        whatToCheck: "Secure parking near the grounds",
        tip: "Open Cycling or Bike sharing for fleets.",
      },
      {
        topic: "Optional car share",
        whatToCheck: "Family gear and thin bus links",
        tip: "Keep four wheels optional.",
      },
      {
        topic: "Return timing",
        whatToCheck: "Last useful train vs closing time",
        tip: "Protect Sunday calm.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "OV sibling", body: "Weekend travel owns tickets, discounts orientation and last mile depth." },
      { title: "Bike optional", body: "Useful locally — deepen on Cycling / Bike sharing." },
      { title: "No mobility SEO", body: "Soft affiliate mobility block below — not castle rankings." },
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
        description: "Shared bikes for station-to-estate hops.",
      },
    ] satisfies LifestyleLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility options for castle days",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when a castle day needs a train, optional car share or local bike. This block is not a ranking of castles, hotels or tour operators.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a castle day — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer Weekend travel for OV planning depth.",
    placementId: "nl-living-castles-support-providers",
    analyticsPageContext: "castles-netherlands-recommended-options",
    categoryLinks: [
      { href: WEEKEND_TRAVEL_NETHERLANDS_PATH, label: "Weekend travel" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
      { href: CYCLING_NETHERLANDS_PATH, label: "Cycling" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat castle scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First Utrecht-region castle day",
        approach: "One venue + timed ticket + early return.",
        firstStep: "Open culture and regions.",
      },
      {
        situation: "Family spring garden visit",
        approach: "Grounds-first, snack plan, shorter interiors.",
        firstStep: "Open visit styles and grounds.",
      },
      {
        situation: "Quiet shoulder-season morning",
        approach: "Early slot, gardens walk, light house tour.",
        firstStep: "Open booking and visit styles.",
      },
      {
        situation: "Gelderland overnight idea",
        approach: "Weekend trips for lodging vibe; castle habits here.",
        firstStep: "Open regions and Weekend trips.",
      },
      {
        situation: "Rainy Plan B day",
        approach: "Interiors focus or pivot to Museums.",
        firstStep: "Open grounds and Museums.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Chasing ranked best-castle lists",
      body: "Influencer rankings create FOMO and rushed hopping.",
      advice: "Choose by region, visit style and travel time — not SEO lists.",
    },
    {
      title: "Skipping tickets and slots",
      body: "Popular weekends fill; walk-up entry is not always available.",
      advice: "Check the venue booking page the week you go.",
    },
    {
      title: "Ignoring seasons and closing times",
      body: "Gardens and houses may open on different schedules.",
      advice: "Match season to grounds vs interiors and protect return timing.",
    },
    {
      title: "Arriving late on peak Saturdays",
      body: "Queues and parking fill fast on sunny holidays.",
      advice: "Arrive early or choose a shoulder day; prefer OV when lots look full.",
    },
    {
      title: "Treating this as hotel SEO",
      body: "Rankings of castles, hotels or tour operators are not orientation.",
      advice: "Use regional patterns, visit-style filters and official tourism sources.",
    },
    {
      title: "Confusing Castles with Museums or Hidden gems",
      body: "Galleries and lesser-known spots are different content lanes.",
      advice: "Open Museums for Museumkaart; Hidden gems for non-castle gems; keep castle culture here.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Castle day readiness checklist",
    intro: "Use this before your first Dutch castle month so region, tickets, visit style and transport stay aligned.",
    items: [
      "Region and visit style chosen (not a FOMO castle ranking)",
      "Tickets / timed slots checked on the venue page",
      "Season and holiday crowding considered",
      "Gardens vs interiors energy planned",
      "Weather checked the morning you go",
      "Weekend travel opened if the day needs OV",
      "Return train or bike plan written",
      "Plan B noted (Museums / café pause) if rain or slots fill",
    ],
  },
  howTo: {
    heading: "How to start castle days calmly in the Netherlands",
    steps: [
      {
        name: "Understand visit culture",
        text: "Expect timed slots, house rules, café pauses and grounds walks — not rushed selfie hopping.",
      },
      {
        name: "Learn booking and seasons",
        text: "Check tickets, opening hours and holiday crowding the week you go — verify venue pages.",
      },
      {
        name: "Choose a regional pattern",
        text: "Orient on Utrecht day trips, Gelderland weekends or Limburg longer hops — not ranked castle lists.",
      },
      {
        name: "Match gardens and visit style",
        text: "Decide family, quiet or grounds-first energy, then keep interiors optional if needed.",
      },
      {
        name: "Plan transport and return",
        text: "Open Weekend travel for OV and last mile, arrive early on peak days, and protect Sunday return timing.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to visit castles in the Netherlands",
    description:
      "Orientation steps for expats learning Dutch castle culture, booking and seasons, regional patterns, gardens vs interiors and transport.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "How is this different from Museums?",
      a: "Museums owns museum-going, Museumkaart and gallery habits. This page owns castles and historic-house visits — tickets, seasons, regional patterns, gardens and visit styles.",
    },
    {
      q: "How is this different from Hidden gems?",
      a: "Hidden gems owns lesser-known places and quiet-edge orientation. This page stays on the castles and historic-houses lane.",
    },
    {
      q: "How is this different from Weekend trips?",
      a: "Weekend trips owns destination ideas and weekend lifestyle planning, including short castle orientation. This page deepens castle visit culture, booking habits and regional patterns.",
    },
    {
      q: "How is this different from Weekend travel?",
      a: "Weekend travel owns OV/NS how-to-get-there, discounts orientation and last mile depth. This page stays on castle lifestyle planning and links to Weekend travel for transport.",
    },
    {
      q: "Do you rank the best castles in the Netherlands?",
      a: "No. Regional patterns and visit-style filters are orientation only. Confirm venue hours, tickets and transport details yourself.",
    },
    {
      q: "Do I need tickets in advance?",
      a: "Often yes on popular weekends and for timed house tours. Always verify the venue booking page — walk-up entry is not guaranteed.",
    },
    {
      q: "Where do I plan trains to a castle day?",
      a: "Open Weekend travel for leisure OV how-to, last mile and return timing. NS trains and Train discounts deepen riding and product math.",
    },
    {
      q: "Is this travel or booking advice?",
      a: "No. ExpatLife provides general lifestyle orientation only. Follow official venue, tourism and transport guidance.",
    },
  ],
  relatedGuidesTips: [
    "Castle weekends short-orient → Weekend trips.",
    "OV how-to → Weekend travel.",
    "Galleries / Museumkaart → Museums.",
    "Lesser-known spots → Hidden gems.",
    "Coast peer → Beach towns.",
    "Car multi-stop → Road trips.",
    "Same-day outs → Day trips.",
    "Nature peers → Hiking / National parks.",
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
      description: "Museum-going and Museumkaart — gallery sibling.",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Lesser-known places beyond castle lane.",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Coastal towns and beach culture — cluster peer.",
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
      description: "Kid leisure beyond castle-lane tips.",
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
      description: "Shared bikes for station-to-estate hops.",
    },
    {
      label: "Weather",
      href: LIVING_WEATHER_PATH,
      status: "live",
      description: "Rain and season cues for garden days.",
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
    "Castles is the historic-houses guide in Weekend & lifestyle.",
    "Weekend trips leads destination ideas; Museums owns galleries; Hidden gems owns lesser-known spots.",
    "Beach towns, Hiking and National parks remain cluster peers.",
    "Road trips and Day trips cover car multi-stop and same-day outs.",
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
      description: "Castles and historic houses — you are here.",
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
      description: "Nearby castle day — back same evening?",
    },
    {
      label: "Road trips",
      href: ROAD_TRIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Multi-stop castle loop by car?",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Need NS/OV tickets, last mile and return timing?",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Looking for gallery culture and Museumkaart?",
    },
    {
      label: "Beach towns",
      href: BEACH_TOWNS_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer a coastal weekend instead?",
    },
  ] satisfies LifestyleLink[],
  exploreNextTips: [
    "Destination ideas → Weekend trips.",
    "Same-day → Day trips.",
    "Car multi-stop → Road trips.",
    "Transport → Weekend travel.",
    "Galleries → Museums.",
    "Coast → Beach towns.",
  ],
  officialSources: [
    {
      label: "Netherlands Board of Tourism & Conventions — Holland.com",
      href: "https://www.holland.com/global/tourism.htm",
      description: "Official tourism orientation for regions and cultural visits — not a ranking.",
    },
    {
      label: "Museumvereniging — museum and heritage orientation",
      href: "https://www.museumvereniging.nl/",
      description: "National museum association orientation — many historic houses sit near museum culture.",
    },
    {
      label: "NS — tickets and journey planner",
      href: "https://www.ns.nl/en",
      description: "Official national rail tickets and planners — deepen on Weekend travel.",
    },
    {
      label: "9292 — door-to-door OV planner",
      href: "https://9292.nl/en",
      description: "National public-transport journey planner including estate last miles.",
    },
    {
      label: "KNMI — weather",
      href: "https://www.knmi.nl/over-het-knmi/about",
      description: "Official weather institute orientation — rain matters for garden days.",
    },
    {
      label: "VVV / local tourism boards",
      href: "https://www.holland.com/global/tourism.htm",
      description: "Use local tourism pages for venue-level hours, events and access — verify per destination.",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: ["Understand visit culture.", "Learn booking and seasons.", "Choose a regional pattern.", "Match visit style and transport."],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Visit culture.",
        "Booking and seasons.",
        "Regional patterns.",
        "Gardens and interiors.",
        "Visit styles.",
        "Getting there.",
      ],
    },
    culture: {
      title: "From the visual — culture cues",
      items: ["Timed slots.", "House rules.", "Café pauses.", "Sunday return."],
    },
    booking: {
      title: "From the visual — booking cues",
      items: ["Timed tickets.", "Seasonal hours.", "Holiday peaks.", "Weather pivots."],
    },
    regions: {
      title: "From the visual — region cues",
      items: ["Utrecht-pattern days.", "Gelderland weekends.", "Limburg longer hops.", "Hidden gems link."],
    },
    grounds: {
      title: "From the visual — grounds cues",
      items: ["Park gardens.", "House interiors.", "Weather pivot.", "Energy budget."],
    },
    visitStyles: {
      title: "From the visual — visit-style cues",
      items: ["Family energy.", "Quiet mornings.", "Grounds-first.", "Day trip vs overnight."],
    },
    gettingThere: {
      title: "From the visual — mobility cues",
      items: ["Station hubs.", "Bike last mile.", "Optional car share.", "Return timing."],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: ["First Utrecht day.", "Family garden visit.", "Quiet shoulder morning.", "Gelderland overnight."],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: ["Ranking FOMO.", "Skipping tickets.", "Ignoring seasons.", "Late peak arrival."],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: ["Region chosen.", "Tickets checked.", "Weekend travel opened.", "Return plan written."],
    },
  },
  disclosure:
    "ExpatLife provides general castles and historic-house lifestyle orientation for newcomers. It is not travel, booking or financial advice and not a ranking of castles, hotels or tour operators. Opening hours, tickets, seasons and transport change — always confirm on official venue, tourism, weather and transport pages. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
};

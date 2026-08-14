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
const VISUAL_PREFIX = "museums-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const museumsNetherlandsPage = {
  slug: "museums-netherlands",
  path: MUSEUMS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: LIVING_SURVIVAL_GUIDE_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(MUSEUMS_NETHERLANDS_PATH) ?? "2026-10-15",
  seo: {
    title: "Museums in the Netherlands | Complete Guide for Expats",
    description:
      "Museum-going for expats in the Netherlands: Museumkaart orientation, free-day habits, booking windows, city patterns, etiquette and rainy-day ideas — with links to Weekend trips, Family activities and Weekend travel.",
    keywords: [
      "museums Netherlands",
      "Museumkaart Netherlands",
      "Dutch museums for expats",
      "museum card Netherlands",
      "free museum days Netherlands",
      "museum etiquette Netherlands",
      "Amsterdam museums orientation",
      "regional museums Netherlands",
      "rainy day museums Netherlands",
      "museum booking Netherlands",
      "family museums Netherlands",
      "how to visit museums Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Weekend & lifestyle",
    pageTitle: "Museums in the Netherlands",
    subtitle:
      "Museum-going for expats: how Dutch museum culture works, Museumkaart orientation, free days and booking habits, city patterns, etiquette and rainy-day plans — not a ranked best-of list.",
    primaryCta: { label: "Understand Museumkaart", href: "#museumkaart" },
    secondaryCta: { label: "Museum checklist", href: "#checklist" },
    chips: ["Museumkaart", "Free days", "City patterns", "Etiquette", "Rainy days"],
    disclaimer:
      "General lifestyle orientation only — not travel, booking or financial advice and not a ranking of museums, tickets, Museumkaart products or tour operators. Opening hours, free days, prices and rules change. Verify Museumkaart.nl, venue pages and planners before you go. Weekend trips owns destination weekends; Hidden gems owns lesser-known spots; Family activities owns kid leisure depth.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch museum morning: multicultural expats with light day bags approaching a classic brick museum facade beside a canal, soft daylight and reassuring leisure mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#culture", label: "Museum culture" },
    { href: "#museumkaart", label: "Museumkaart" },
    { href: "#booking", label: "Free days & booking" },
    { href: "#cities", label: "City patterns" },
    { href: "#etiquette", label: "Etiquette" },
    { href: "#families", label: "Families" },
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
      "Premium orientation board titled Museums After Arrival — four building blocks: understand Dutch museum culture, orient on Museumkaart, learn free days and booking, plan etiquette and transport — Museum Checklist rail on the right, Dutch canal and museum skyline band and ExpatLife brand footer.",
      "Four habits cover most first museum months: culture, Museumkaart, booking, etiquette and getting there."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of museums in the Netherlands — museum culture, Museumkaart, free days and booking, city patterns, etiquette, families and rainy days — Dutch cultural skyline band and ExpatLife brand footer.",
      "Six building blocks explain almost every first Dutch museum question for newcomers."
    ),
    culture: visual(
      "culture",
      "Premium culture board — timed tickets, quiet rooms, café pauses, Sunday museum habits — gallery foyer scene with Museum culture notes rail and ExpatLife brand footer.",
      "Dutch museum days often favour timed entries, calm pacing and café pauses."
    ),
    museumkaart: visual(
      "museumkaart",
      "Premium Museumkaart orientation board — what it is, when it tends to pay off, verify official site, not a product pitch — kitchen-table desk scene with Card notes rail and ExpatLife brand footer.",
      "Museumkaart is orientation only — always verify live terms on the official site."
    ),
    booking: visual(
      "booking",
      "Premium free-days and booking board — open days habits, timed slots, holiday crowding, advance windows — calendar desk scene with Booking cues rail and ExpatLife brand footer.",
      "Free days and timed tickets change — check venue pages the week you go."
    ),
    cities: visual(
      "cities",
      "Premium city-patterns board — Amsterdam concentration vs regional collections, one-city days, station hubs — map-style cards with Pattern notes rail, Dutch canal landscape and ExpatLife brand footer.",
      "Choose a pattern first — concentration vs regional — not a ranked museum SEO list."
    ),
    etiquette: visual(
      "etiquette",
      "Premium etiquette board — bags lockers, photos rules, quiet rooms, coats — cloakroom desk scene with Etiquette notes rail and ExpatLife brand footer.",
      "Bags, photos and quiet rooms keep Dutch museum visits calm for everyone."
    ),
    families: visual(
      "families",
      "Premium families and rainy-days board — short visits, kid breaks, wet-weather plan, Family activities link — kitchen table with stroller lightly and Families notes rail and ExpatLife brand footer.",
      "Short loops and rainy backups beat marathon museum days with kids."
    ),
    gettingThere: visual(
      "getting-there",
      "Premium getting-there board — NS hub, bike last mile, Weekend travel link — station-to-museum route scene with Mobility notes rail and ExpatLife brand footer.",
      "Train hubs plus light last mile cover most museum days — deepen OV on Weekend travel."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first Museumkaart month, rainy Sunday, family short visit, regional collection day, friends city culture — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match the museum day to energy and company — not a copied influencer itinerary."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — ranking FOMO, skipping timed tickets, ignoring Museumkaart math, marathon itineraries, treating this as ticket SEO — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is overplanning and expectation mismatch — not finding a museum."
    ),
    checklist: visual(
      "checklist",
      "Premium museums readiness checklist clipboard — culture noted, Museumkaart checked, booking window set, etiquette reviewed, Weekend travel opened — Dutch kitchen table with tickets and ExpatLife brand footer.",
      "Use this checklist so your first Dutch museum month stays calm."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "One calm visit", note: "Before marathon days" },
    { label: "Card orient", value: "Museumkaart", note: "Verify official site" },
    { label: "Transport", value: "Weekend travel", note: "OV how-to sibling" },
    { label: "Kid days", value: "Family activities", note: "Leisure sibling" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Museum-going in the Netherlands is a core leisure habit for many newcomers: timed tickets, café pauses, quiet rooms, and — for frequent visitors — Museumkaart orientation. Expats who treat the first months as practice visits (one venue, realistic pacing, booking checked) enjoy Dutch cultural life more than those chasing ranked “must-see” lists.",
    "This page owns museum visits and Museumkaart culture. Weekend trips owns broader weekend destination planning. Hidden gems owns lesser-known spots. Family activities covers kid leisure with only light museum mentions. Weekend travel owns NS/OV how-to. Hiking and National parks cover nature peers. Cycling and Bike sharing help last mile — without putting Museums under the Cycling nav.",
  ],
  introHighlights: [
    "Start with one calm timed visit before multi-museum marathons.",
    "Orient on Museumkaart using official terms — not affiliate inventions.",
    "Learn free-day and booking habits; city patterns beat FOMO rankings.",
    "Use Family activities for kid days; Weekend travel for trains; Hidden gems for lesser-known places.",
  ],
  orientationFlowSteps: [
    "Understand Dutch museum culture (timed entries, quiet pacing, café pauses).",
    "Orient on Museumkaart and when it tends to pay off — verify the official site.",
    "Check free days, timed tickets and holiday windows before you go.",
    "Plan etiquette, family pace and transport (Weekend travel / bike last mile).",
  ],
  travelFileChecklist: [
    "Venue and date written with timed-ticket status checked",
    "Museumkaart or ticket type noted (verify official terms)",
    "Bags / locker / photo rules skimmed on the venue page",
    "Weekend travel opened if the day needs OV",
    "Rainy or kid-break backup noted",
    "Return train or bike plan written",
  ],
  introScenarios: [
    {
      situation: "First museum Saturday after arrival",
      approach: "One timed visit, café pause, early return.",
      firstStep: "Open culture and booking.",
    },
    {
      situation: "Considering Museumkaart",
      approach: "Estimate visits for the year, then verify official pricing.",
      firstStep: "Open Museumkaart.",
    },
    {
      situation: "Rainy Sunday with kids",
      approach: "Short visit, breaks, Family activities backup.",
      firstStep: "Open families.",
    },
    {
      situation: "Regional collection day",
      approach: "Station hub + one venue — skip Amsterdam FOMO.",
      firstStep: "Open cities and getting there.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Expectation mismatch causes more friction than ‘wrong’ museums.",
    "Dutch museum days often use timed tickets — check before you travel.",
    "Museumkaart is orientation only — confirm live terms on Museumkaart.nl.",
    "Destination weekends live on Weekend trips; lesser-known spots on Hidden gems.",
  ],
  quickAnswer: {
    heading: "How museums work for expats in the Netherlands",
    summary:
      "Dutch museum culture favours timed tickets, calm pacing and café pauses. Orient on Museumkaart using official sources, learn free-day and booking habits, choose city or regional patterns without rankings, follow bag and photo etiquette, and plan transport via Weekend travel. Family activities supports kid days; Hidden gems covers lesser-known places; Weekend trips owns wider weekend planning.",
    bullets: [
      "Museum culture, Museumkaart, booking, city patterns, etiquette and family rainy days live on this page.",
      "Weekend destination planning lives on Weekend trips; lesser-known spots on Hidden gems.",
      "OV how-to lives on Weekend travel; kid leisure depth on Family activities.",
      "Avoid treating this guide as a ranking of museums, tickets or tour operators.",
    ],
    note: "If you only open one sibling after this page, open Weekend travel for how to get there or Family activities for kid-friendly leisure.",
  },
  snapshotCards: [
    {
      title: "Museum culture",
      body: "Timed entries, quiet rooms and café pauses — not rushed checklist tourism by default.",
    },
    {
      title: "Museumkaart",
      body: "National museum card orientation — verify official site for live terms.",
    },
    {
      title: "Free days & booking",
      body: "Open-day habits and timed slots change — check the week you go.",
    },
    {
      title: "City patterns",
      body: "Amsterdam concentration vs regional collections — choose a pattern, not a ranking.",
    },
    {
      title: "Etiquette",
      body: "Bags, lockers, photos and quiet spaces keep visits calm.",
    },
    {
      title: "Families & rain",
      body: "Short loops and wet-weather plans — deepen kid leisure on Family activities.",
    },
  ] satisfies TipCard[],
  culture: {
    heading: "Dutch museum culture for newcomers",
    intro:
      "In the Netherlands, museum visits often look like practical leisure: book a timed slot, travel light, use lockers, move at a calm pace, and plan a café pause. Many locals treat museums as regular rainy-day or Sunday habits — not once-in-a-lifetime pilgrimages.",
    paragraphs: [
      "Expect clear house rules on bags, photos and quiet spaces. Popular venues can sell out weekend slots; midweek mornings are often calmer. Social museum meetups exist lightly — Making Dutch friends can support cultural leisure without turning this page into a club directory.",
      "This is not a ranking of museums or influencers. Treat culture notes as orientation so your first visits feel Dutch — booked, paced and weather-aware.",
    ],
    rows: [
      {
        topic: "Timed entries",
        whatToCheck: "Online slot before travel",
        tip: "Screenshots help if mobile signal dips at the door.",
      },
      {
        topic: "Café pauses",
        whatToCheck: "Venue café or nearby terrace",
        tip: "Build a break into longer visits.",
      },
      {
        topic: "Quiet rooms",
        whatToCheck: "House rules and seating",
        tip: "Use quieter galleries when energy dips.",
      },
      {
        topic: "Sunday habit",
        whatToCheck: "Opening hours and last entry",
        tip: "Protect return trains — deepen OV on Weekend travel.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Book first", body: "Timed tickets are part of the culture — not optional extras at busy venues." },
      { title: "Pace calmly", body: "One strong visit beats three rushed checkmarks." },
      { title: "No museum SEO", body: "Filters and interests beat influencer rankings." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "When the museum day is part of a wider weekend vibe.",
      },
      {
        label: "Making Dutch friends",
        href: MAKING_DUTCH_FRIENDS_PATH,
        status: "live",
        description: "Social cultural leisure habits lightly.",
      },
      {
        label: "Hidden gems",
        href: HIDDEN_GEMS_NETHERLANDS_PATH,
        status: "live",
        description: "Lesser-known places beyond flagship museums.",
      },
    ] satisfies LifestyleLink[],
  },
  museumkaart: {
    heading: "Museumkaart orientation",
    intro:
      "Museumkaart is the widely used Dutch museum card that can cover admission to many participating venues for a period — terms, price and participating museums change. Treat everything here as orientation: verify purchase rules, validity and exclusions on the official Museumkaart site before you buy.",
    paragraphs: [
      "It tends to pay off when you expect several museum visits in the validity window — especially if you live near a dense cluster or plan regional collection days. Occasional visitors may prefer single tickets. Family and youth products (if offered) need their own official check; we do not invent pricing or affiliate Museumkaart links.",
      "Museumkaart does not replace timed-slot booking where venues still require it. Always confirm whether your card needs a reservation window for the day you visit.",
    ],
    rows: [
      {
        topic: "What it is",
        whatToCheck: "Official Museumkaart product pages",
        tip: "Read validity, renewals and exclusions yourself.",
      },
      {
        topic: "When it may pay off",
        whatToCheck: "Expected visits in the card window",
        tip: "Count realistic visits — not aspirational FOMO lists.",
      },
      {
        topic: "Still book slots",
        whatToCheck: "Venue reservation rules with a card",
        tip: "Card ≠ automatic walk-in at every busy venue.",
      },
      {
        topic: "Verify live",
        whatToCheck: "Museumkaart.nl and venue pages",
        tip: "Prices and lists change — orientation only here.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Official first", body: "Confirm products and participating museums on Museumkaart.nl." },
      { title: "Math calmly", body: "Estimate visits you will actually make this year." },
      { title: "No card SEO", body: "We do not rank cards or invent affiliate Museumkaart offers." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Free days & booking",
        href: "#booking",
        status: "live",
        description: "Even with a card, timed slots and free days matter.",
      },
      {
        label: "City patterns",
        href: "#cities",
        status: "live",
        description: "Dense cities vs regional collections change visit math.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "When museum visits sit inside weekend getaways.",
      },
    ] satisfies LifestyleLink[],
  },
  booking: {
    heading: "Free days, open habits and booking windows",
    intro:
      "Some venues run free or reduced days, late openings or special evenings — schedules change year to year. Build a habit of checking the venue page and any municipal cultural calendars the week you go, then book timed tickets early for weekends and holidays.",
    paragraphs: [
      "Popular city museums can sell out Saturday slots. Midweek mornings and late openings (where offered) often feel calmer. Free days can be busier, not quieter — arrive with patience and a backup plan.",
      "We do not publish a permanent free-day calendar or ranked ticket hacks. Treat booking notes as orientation and always verify live.",
    ],
    rows: [
      {
        topic: "Timed tickets",
        whatToCheck: "Slot availability for your date",
        tip: "Book before you buy train tickets for peak days.",
      },
      {
        topic: "Free / open days",
        whatToCheck: "Venue or city culture pages",
        tip: "Expect crowds — bring patience and a Plan B.",
      },
      {
        topic: "Holidays",
        whatToCheck: "School holidays and public holidays",
        tip: "Opening hours and demand both shift.",
      },
      {
        topic: "Last entry",
        whatToCheck: "Last admission vs closing time",
        tip: "Protect return OV — open Weekend travel.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Check weekly", body: "Free days and hours change — do not rely on old blog posts." },
      { title: "Book peak early", body: "Weekend and holiday slots disappear first." },
      { title: "Crowd realism", body: "Free does not always mean calm." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend travel",
        href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
        status: "live",
        description: "OV timing around last entry and return.",
      },
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Rainy days often push demand indoors.",
      },
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live",
        description: "Kid leisure backups when museums are full.",
      },
    ] satisfies LifestyleLink[],
  },
  cities: {
    heading: "City patterns: concentration vs regional collections",
    intro:
      "Think in patterns before collecting museum names. Amsterdam and a few large cities concentrate many flagship venues. Regional cities and smaller collections often reward quieter days and easier pacing. Choose by interest and energy — not by a ranked SEO list.",
    paragraphs: [
      "A calm first month often looks like: one nearby venue, then one regional day via a station hub, then optional denser city clustering when you are ready. Hidden gems owns lesser-known places that are not classic museum-lane coverage.",
      "We do not publish a best-museums ranking or recommend paid tours. Filter by theme (art, history, science, design), travel time and ticket rules, then verify on official venue pages.",
    ],
    rows: [
      {
        topic: "Dense city days",
        whatToCheck: "One or two venues max + walking time",
        tip: "Avoid three-museum marathons on week one.",
      },
      {
        topic: "Regional collections",
        whatToCheck: "Station hub + single venue",
        tip: "Often calmer than capital FOMO weekends.",
      },
      {
        topic: "Theme filters",
        whatToCheck: "Art, history, science, design",
        tip: "Interest beats influencer checklists.",
      },
      {
        topic: "Lesser-known spots",
        whatToCheck: "Non-flagship places",
        tip: "Open Hidden gems for that lane.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Pattern first", body: "Concentration vs regional — then pick a venue." },
      { title: "One strong visit", body: "Depth beats collecting stamps." },
      { title: "Sibling lanes", body: "Weekend trips for weekends; Hidden gems for lesser-known." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "City and culture weekend destination ideas.",
      },
      {
        label: "Hidden gems",
        href: HIDDEN_GEMS_NETHERLANDS_PATH,
        status: "live",
        description: "Lesser-known places beyond museum flagships.",
      },
      {
        label: "Getting there",
        href: "#getting-there",
        status: "live",
        description: "NS, bikes and last mile for museum days.",
      },
    ] satisfies LifestyleLink[],
  },
  etiquette: {
    heading: "Etiquette: bags, photos, quiet rooms",
    intro:
      "Dutch museum visits stay pleasant when guests follow house rules: store oversized bags, respect photo signs, keep voices low in galleries, and use cloakrooms or lockers where required.",
    paragraphs: [
      "Core habits: travel light, arrive a few minutes before your slot, follow staff directions, and treat quiet rooms as shared calm space. Flash photography and touching exhibits are common expectation mismatches for newcomers.",
      "Rules differ by venue — always skim the visit page. This is general orientation, not venue policy advice.",
    ],
    rows: [
      {
        topic: "Bags & lockers",
        whatToCheck: "Size limits and cloakroom fees",
        tip: "Leave bulky shopping bags at home.",
      },
      {
        topic: "Photos",
        whatToCheck: "Gallery signs and no-flash rules",
        tip: "When unsure, ask staff — do not assume.",
      },
      {
        topic: "Quiet spaces",
        whatToCheck: "Voice level and phone use",
        tip: "Take calls outside galleries.",
      },
      {
        topic: "Coats & umbrellas",
        whatToCheck: "Cloakroom on wet days",
        tip: "Rainy Sundays fill lockers fast.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Travel light", body: "Small bags reduce locker stress." },
      { title: "Read the signs", body: "Photo rules change room by room." },
      { title: "Shared calm", body: "Quiet pacing is part of Dutch museum culture." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Families",
        href: "#families",
        status: "live",
        description: "Kid pacing and breaks with etiquette in mind.",
      },
      {
        label: "Booking",
        href: "#booking",
        status: "live",
        description: "Arrive on time for your slot.",
      },
    ] satisfies LifestyleLink[],
  },
  families: {
    heading: "Families, rainy days and short visits",
    intro:
      "Museum days with kids work best as short loops with snack breaks and a rainy backup. Many venues offer family facilities — always verify on the venue page. Deep kid leisure planning (playgrounds, indoor alternatives) lives on Family activities; this page keeps museum-lane depth.",
    paragraphs: [
      "On wet weekends, expect higher indoor demand. Book early, keep visits shorter than you would alone, and plan an exit before meltdown o’clock. Strollers and quiet rooms vary by building — check access notes.",
      "We do not rank the best family museums. Match theme and travel time, then confirm facilities yourself.",
    ],
    rows: [
      {
        topic: "Short visits",
        whatToCheck: "One wing or timed hour",
        tip: "Leave while energy is still good.",
      },
      {
        topic: "Breaks",
        whatToCheck: "Café, toilets, outdoor pause",
        tip: "Build a snack stop into the plan.",
      },
      {
        topic: "Rainy Sundays",
        whatToCheck: "Crowds + booking windows",
        tip: "Have a Family activities Plan B.",
      },
      {
        topic: "Access notes",
        whatToCheck: "Strollers, lifts, quiet rooms",
        tip: "Confirm on the venue visit page.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "Pace for kids", body: "Short successful visits beat marathon days." },
      { title: "Rain realism", body: "Wet weather packs indoor venues — book early." },
      { title: "Sibling depth", body: "Family activities owns wider kid leisure." },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live",
        description: "Kid leisure, parks and rainy-day ideas.",
      },
      {
        label: "Weather",
        href: LIVING_WEATHER_PATH,
        status: "live",
        description: "Rain and season cues for indoor days.",
      },
      {
        label: "Weekend trips",
        href: WEEKEND_TRIPS_NETHERLANDS_PATH,
        status: "live",
        description: "When museum visits sit in a family weekend.",
      },
    ] satisfies LifestyleLink[],
  },
  gettingThere: {
    heading: "Getting there: trains, bikes and last mile",
    intro:
      "Most museum days start from a station hub or a local bike hop. Open Weekend travel for leisure OV how-to, NS trains for riding depth, and Cycling or Bike sharing for last mile — this page stays on museum-lane planning.",
    paragraphs: [
      "Write the last useful return time before you enter a long exhibition. Greenwheels-style car share stays optional for thin last miles to regional venues. Do not treat Museums as a Cycling nav duplicate — cross-link only.",
      "OV chipkaart and OVpay habits deepen on public-transport siblings; use them when your museum day needs multimodal travel.",
    ],
    rows: [
      {
        topic: "Station cities",
        whatToCheck: "Walk or short tram/bus from NS",
        tip: "Open Weekend travel for leisure OV planning.",
      },
      {
        topic: "Bike last mile",
        whatToCheck: "Secure parking near the venue",
        tip: "Open Cycling or Bike sharing for fleets.",
      },
      {
        topic: "Regional days",
        whatToCheck: "Train + optional car share",
        tip: "Keep four wheels optional.",
      },
      {
        topic: "Return timing",
        whatToCheck: "Last entry vs last useful train",
        tip: "Protect Sunday calm.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      { title: "OV sibling", body: "Weekend travel owns tickets, discounts orientation and last mile depth." },
      { title: "Bike optional", body: "Useful locally — deepen on Cycling / Bike sharing." },
      { title: "No mobility SEO", body: "Soft affiliate mobility block below — not museum rankings." },
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
        description: "Shared bikes for station-to-venue hops.",
      },
    ] satisfies LifestyleLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility options for museum days",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when a museum day needs a train, optional car share or local bike. This block is not a ranking of museums, Museumkaart products or tour operators.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a museum day — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer Weekend travel for OV planning depth and Museumkaart.nl for card terms.",
    placementId: "nl-living-museums-support-providers",
    analyticsPageContext: "museums-netherlands-recommended-options",
    categoryLinks: [
      { href: WEEKEND_TRAVEL_NETHERLANDS_PATH, label: "Weekend travel" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
      { href: CYCLING_NETHERLANDS_PATH, label: "Cycling" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat museum scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First museum after arrival",
        approach: "One timed visit + etiquette skim + early return.",
        firstStep: "Open culture and booking.",
      },
      {
        situation: "Museumkaart decision month",
        approach: "Estimate visits, verify official terms, still book slots.",
        firstStep: "Open Museumkaart.",
      },
      {
        situation: "Rainy Sunday with kids",
        approach: "Short visit, breaks, Family activities backup.",
        firstStep: "Open families.",
      },
      {
        situation: "Regional collection day",
        approach: "Station hub + one venue, skip capital FOMO.",
        firstStep: "Open cities and getting there.",
      },
      {
        situation: "Friends culture afternoon",
        approach: "Agree one venue and café pause before you go.",
        firstStep: "Open culture and Making Dutch friends.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Chasing ranked must-see lists",
      body: "Influencer rankings create FOMO and rushed days.",
      advice: "Choose by interest, travel time and energy — not SEO lists.",
    },
    {
      title: "Skipping timed tickets",
      body: "Popular venues sell out weekend slots.",
      advice: "Book before you buy trains on peak days.",
    },
    {
      title: "Ignoring Museumkaart live terms",
      body: "Old blog prices and lists go stale.",
      advice: "Verify Museumkaart.nl and venue reservation rules yourself.",
    },
    {
      title: "Museum marathons on week one",
      body: "Three venues in a day create fatigue and missed last trains.",
      advice: "One calm visit first — then denser city days later.",
    },
    {
      title: "Treating this as ticket SEO",
      body: "Rankings of museums, cards or tour operators are not orientation.",
      advice: "Use patterns, booking habits and official sources.",
    },
    {
      title: "Confusing Museums with Hidden gems",
      body: "Lesser-known spots are a different content lane.",
      advice: "Open Hidden gems for non-flagship places; keep museum visits here.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Museum day readiness checklist",
    intro: "Use this before your first Dutch museum month so culture, cards, booking and transport stay aligned.",
    items: [
      "Venue and date chosen with timed-ticket status checked",
      "Museumkaart or ticket type noted (official terms verified)",
      "Bags, locker and photo rules skimmed",
      "Free-day or holiday crowding considered",
      "Weekend travel opened if the day needs OV",
      "Family or rainy backup noted when relevant",
      "Return train or bike plan written",
      "Hidden gems noted if you want lesser-known places later",
    ],
  },
  howTo: {
    heading: "How to start museum-going calmly in the Netherlands",
    steps: [
      {
        name: "Understand museum culture",
        text: "Expect timed entries, calm pacing, lockers and café pauses — not rushed checklist tourism.",
      },
      {
        name: "Orient on Museumkaart",
        text: "Estimate realistic visits, then verify products and participating venues on the official Museumkaart site.",
      },
      {
        name: "Check booking and free-day habits",
        text: "Confirm slots, hours and any free days the week you go — especially for weekends and holidays.",
      },
      {
        name: "Pick a city or regional pattern",
        text: "Start with one nearby venue or a station-hub regional day before dense multi-museum clustering.",
      },
      {
        name: "Plan etiquette and transport",
        text: "Travel light, follow house rules, and open Weekend travel or bike guides for getting there and returning calmly.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to visit museums in the Netherlands",
    description:
      "Orientation steps for expats learning Dutch museum culture, Museumkaart basics, booking habits, city patterns, etiquette and transport.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "How is this different from Weekend trips?",
      a: "Weekend trips owns destination ideas and weekend lifestyle planning. This page deepens museum visits, Museumkaart orientation, booking habits and etiquette when museums are the focus.",
    },
    {
      q: "How is this different from Hidden gems?",
      a: "Hidden gems owns lesser-known places. This page owns museum-going culture and Museumkaart habits for the museums lane.",
    },
    {
      q: "Should I buy a Museumkaart?",
      a: "It can pay off if you expect several visits in the validity window — but terms and prices change. Verify on Museumkaart.nl. Occasional visitors may prefer single tickets. This is orientation, not financial advice.",
    },
    {
      q: "Where do I plan trains to a museum day?",
      a: "Open Weekend travel for leisure OV how-to, last mile and return timing. NS trains and Train discounts deepen riding and product math.",
    },
    {
      q: "Do you rank the best museums in the Netherlands?",
      a: "No. City patterns and planning filters are orientation only. Confirm hours, tickets and rules on official venue and Museumkaart sources.",
    },
    {
      q: "What about museums with kids?",
      a: "Keep visits short, book early on rainy Sundays, and open Family activities for wider kid leisure. Confirm stroller and facility notes on each venue page.",
    },
    {
      q: "Is Museums under Cycling in the menu?",
      a: "No. Museums sits in Living → Weekend & lifestyle. Cycling stays under Living → Cycling; we only cross-link for last-mile bike tips.",
    },
    {
      q: "Is this travel or booking advice?",
      a: "No. ExpatLife provides general lifestyle orientation only. Follow official Museumkaart, venue, tourism and transport guidance.",
    },
  ],
  relatedGuidesTips: [
    "Destination weekends → Weekend trips.",
    "Lesser-known places → Hidden gems.",
    "Historic houses → Castles.",
    "Coast weekends → Beach towns.",
    "OV how-to → Weekend travel.",
    "Kid leisure → Family activities.",
    "Nature peers → Hiking / National parks.",
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
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Lesser-known places beyond museum flagships.",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Castles and historic houses — culture peer, not galleries.",
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
      description: "Kid leisure with light museum mentions.",
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
      description: "Shared bikes for station-to-venue hops.",
    },
    {
      label: "Weather",
      href: LIVING_WEATHER_PATH,
      status: "live",
      description: "Rain and season cues for indoor museum days.",
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
      description: "Social cultural leisure habits lightly.",
    },
  ] satisfies LifestyleLink[],
  lifestyleHubTips: [
    "Museums is the museum-going guide in Weekend & lifestyle.",
    "Weekend trips leads destination ideas; Hidden gems owns lesser-known spots.",
    "Castles owns historic houses; Beach towns owns coast culture.",
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
      description: "Museum-going and Museumkaart — you are here.",
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
      description: "Museum city day — back same evening?",
    },
    {
      label: "Castles",
      href: CASTLES_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer castles and historic houses over galleries?",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Looking for lesser-known places beyond museums?",
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
      description: "Want a coast day instead of indoor culture?",
    },
  ] satisfies LifestyleLink[],
  exploreNextTips: [
    "Destination ideas → Weekend trips.",
    "Same-day → Day trips.",
    "Historic houses → Castles.",
    "Lesser-known → Hidden gems.",
    "Transport → Weekend travel.",
    "Coast → Beach towns.",
  ],
  officialSources: [
    {
      label: "Museumkaart — official site",
      href: "https://www.museumkaart.nl/",
      description: "Official Museumkaart products, terms and participating museums — verify before you buy.",
    },
    {
      label: "Museumvereniging",
      href: "https://www.museumvereniging.nl/",
      description: "Dutch museum association orientation.",
    },
    {
      label: "Netherlands Board of Tourism & Conventions — Holland.com",
      href: "https://www.holland.com/global/tourism.htm",
      description: "Official tourism orientation for culture and regions.",
    },
    {
      label: "Iamsterdam — museums orientation",
      href: "https://www.iamsterdam.com/en/see-and-do/museums-and-galleries",
      description: "City tourism orientation for Amsterdam museum visits — not a ranking.",
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
      description: "Official weather institute orientation — rainy days often push demand indoors.",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: ["Understand museum culture.", "Orient on Museumkaart.", "Learn booking habits.", "Plan etiquette and transport."],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Museum culture.",
        "Museumkaart.",
        "Free days and booking.",
        "City patterns.",
        "Etiquette.",
        "Families and rainy days.",
      ],
    },
    culture: {
      title: "From the visual — culture cues",
      items: ["Timed entries.", "Café pauses.", "Quiet rooms.", "Sunday habits."],
    },
    museumkaart: {
      title: "From the visual — Museumkaart cues",
      items: ["What it is.", "When it may pay off.", "Still book slots.", "Verify official site."],
    },
    booking: {
      title: "From the visual — booking cues",
      items: ["Timed tickets.", "Free days.", "Holiday crowding.", "Last entry timing."],
    },
    cities: {
      title: "From the visual — city cues",
      items: ["Dense city days.", "Regional collections.", "Theme filters.", "Hidden gems link."],
    },
    etiquette: {
      title: "From the visual — etiquette cues",
      items: ["Bags and lockers.", "Photo rules.", "Quiet spaces.", "Cloakroom on wet days."],
    },
    families: {
      title: "From the visual — family cues",
      items: ["Short visits.", "Snack breaks.", "Rainy Sundays.", "Family activities link."],
    },
    gettingThere: {
      title: "From the visual — mobility cues",
      items: ["Station hubs.", "Bike last mile.", "Optional car share.", "Return timing."],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: ["First visit.", "Museumkaart month.", "Rainy Sunday kids.", "Regional day."],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: ["Ranking FOMO.", "Skipping tickets.", "Stale Museumkaart info.", "Marathon days."],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: ["Venue booked.", "Museumkaart checked.", "Weekend travel opened.", "Etiquette reviewed."],
    },
  },
  disclosure:
    "ExpatLife provides general museum, Museumkaart and lifestyle orientation for newcomers. It is not travel, booking or financial advice and not a ranking of museums, tickets, Museumkaart products or tour operators. Opening hours, free days, prices and rules change — always confirm on official Museumkaart, venue, tourism and transport pages. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
} as const;

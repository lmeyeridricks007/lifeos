import {
  BIKE_SHARING_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LIVING_HUB_PATH,
  METRO_NETHERLANDS_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  OV_CHIPKAART_NETHERLANDS_PATH,
  OVPAY_NETHERLANDS_PATH,
  REGIONAL_BUSES_NETHERLANDS_PATH,
  TRAMS_NETHERLANDS_PATH,
} from "@/src/components/living/ov-chipkaart-netherlands/ovChipkaartNetherlandsPageModel";
import { LIVING_TRANSPORT_APP_DOWNLOADS } from "@/src/components/living/livingTransportAppStoreLinks";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Re-export cluster PATH constants from the OV-chipkaart lead model (single source of truth). */
export {
  BIKE_SHARING_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LIVING_HUB_PATH,
  METRO_NETHERLANDS_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  OV_CHIPKAART_NETHERLANDS_PATH,
  OVPAY_NETHERLANDS_PATH,
  REGIONAL_BUSES_NETHERLANDS_PATH,
  TRAMS_NETHERLANDS_PATH,
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
export type TimelineStep = { phase: string; timing: string; detail: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "regional-buses-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const regionalBusesNetherlandsPage = {
  slug: "regional-buses-netherlands",
  path: REGIONAL_BUSES_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(REGIONAL_BUSES_NETHERLANDS_PATH) ?? "2026-09-10",
  seo: {
    title: "Regional buses in the Netherlands | Complete Guide for Expats",
    description:
      "How regional and city buses work for expats in the Netherlands: operator orientation, OVpay and OV-chipkaart check-in quirks, 9292 planning, night buses lightly, and when buses are the only link — not tram, metro or NS deep-dives.",
    keywords: [
      "regional buses Netherlands",
      "buses Netherlands",
      "Dutch bus travel",
      "OV bus check in",
      "OV-chipkaart bus",
      "OVpay bus",
      "9292 bus Netherlands",
      "night bus Netherlands",
      "regional bus operators Netherlands",
      "expat bus travel",
      "bus vs tram metro Netherlands",
      "public transport buses Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Public transport",
    pageTitle: "Regional buses in the Netherlands",
    subtitle:
      "Bus travel for expats outside pure metro and tram cores: how regional and city bus networks work, tickets via OVpay or OV-chipkaart, planning with 9292, night buses lightly, and when the bus is the only link — orientation, not a full city timetable.",
    primaryCta: { label: "How tickets work", href: "#tickets" },
    secondaryCta: { label: "Bus checklist", href: "#checklist" },
    chips: ["Regional + city", "OVpay / chipkaart", "9292 planning", "Night buses", "Only-link corridors"],
    disclaimer:
      "General orientation only — not legal, financial or product advice and not a substitute for operator, OVpay, OV-chipkaart.nl or 9292 terms. Routes, fares and tap rules change. Verify current steps on official operator and planner pages before you travel.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch regional bus stop: multicultural expat checking a journey planner beside a modern regional bus under soft daylight, brick houses and canal trees, reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#networks", label: "Networks" },
    { href: "#operators", label: "Operators" },
    { href: "#tickets", label: "Tickets" },
    { href: "#planning", label: "9292 planning" },
    { href: "#night-buses", label: "Night buses" },
    { href: "#when-buses-only", label: "When buses win" },
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
      "Premium orientation board titled Buses After Arrival — four building blocks: know regional vs city bus, learn OVpay or chipkaart taps, plan with 9292, spot only-link corridors — Travel File Checklist rail on the right, Dutch bus skyline and ExpatLife brand footer.",
      "Four habits cover most bus questions: network type, taps, planner, and only-link corridors."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of regional buses in the Netherlands — networks, operators, tickets, 9292, night buses, when buses win — Dutch bus band and ExpatLife brand footer.",
      "Six building blocks explain almost every bus question for newcomers."
    ),
    networks: visual(
      "networks",
      "Premium bus network orientation board — regional intercity-style buses and city bus loops with light Dutch town cues — desk scene with journey planner phone, General information only rail, Dutch skyline and ExpatLife brand footer.",
      "Buses cover both regional links and city loops outside metro and tram cores."
    ),
    operators: visual(
      "operators",
      "Premium operators board — high-level regional and city operator cards without fake logos or rankings — map desk with Operator notes rail, canal skyline and ExpatLife brand footer.",
      "Know that operators differ by region — confirm yours in 9292, not a ranking list."
    ),
    tickets: visual(
      "tickets",
      "Premium bus tickets board — check in on boarding with OVpay or OV-chipkaart, ride, check out on exit — Dutch bus door validator scene without fake logos, Same method every leg checklist rail and ExpatLife brand footer.",
      "One payment method per leg — check in when you board and check out when you leave."
    ),
    planning: visual(
      "planning",
      "Premium 9292 planning board — set origin and destination, compare bus vs other modes, watch transfers and live times — calm Dutch kitchen table with phone planner, Planner checklist rail and ExpatLife brand footer.",
      "9292 stitches bus legs with trains and trams better than memorising paper timetables."
    ),
    nightBuses: visual(
      "night-buses",
      "Premium night buses board — limited late coverage, check planner, same tap habits, allow buffers — soft evening Dutch street scene with Night notes rail and ExpatLife brand footer.",
      "Night buses exist on some corridors — always verify live times before you rely on them."
    ),
    whenBusesOnly: visual(
      "when-buses-only",
      "Premium decide board — when buses are the only link vs tram metro or bike — Dutch multimodal desk with Corridor choice rail, canal skyline and ExpatLife brand footer.",
      "Outside metro and tram cores, the bus is often the only public link."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first week outside metro core, regional commute, weekend visitor, night return lightly — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match stay length and corridor pattern to bus habits instead of copying a colleague."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — forgetting checkout, mixing payment methods, treating bus as tram metro, ignoring 9292, assuming night coverage — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is tap discipline and planner habits — not finding the stop."
    ),
    checklist: visual(
      "checklist",
      "Premium regional buses readiness checklist clipboard — corridor type known, pay method chosen, check-in/out practiced, 9292 installed, night notes, sibling guides opened — Dutch kitchen table with bus light and ExpatLife brand footer.",
      "Use this checklist so your first busy bus week stays intentional."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "OVpay / card", note: "Learn boarding taps" },
    { label: "Must do", value: "Check in + out", note: "Every bus leg" },
    { label: "Know", value: "Regional / city", note: "Confirm in 9292" },
    { label: "Sibling", value: "Trams & metro", note: "Cluster guides" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Regional and city buses in the Netherlands fill the gaps outside pure metro and tram cores. For expats the calm path is: know whether your corridor is regional or city-oriented, check in and out with one payment method, plan with 9292, and recognise when the bus is the only public link.",
    "Getting around is the wider mobility mental model. OVpay and OV-chipkaart deepen tap mechanics. Trams and Metro are siblings for surface rails and rapid transit. NS trains covers national rail. This page stays on bus travel — regional operators, city buses, light night coverage and only-link corridors — not tram, metro or NS deep-dives.",
  ],
  introHighlights: [
    "Identify regional versus city bus patterns for your corridor before memorising every operator brand.",
    "Check in when you board and check out when you leave — same OVpay or OV-chipkaart method every leg.",
    "Use 9292 (or operator apps) for live times, transfers and night coverage instead of paper folklore.",
    "Open Trams, Metro and NS trains siblings when the trip leaves the bus network.",
  ],
  orientationFlowSteps: [
    "Confirm whether your week needs regional buses, city buses, or both — write the corridor pattern down.",
    "Choose a first payment path: OVpay or personal OV-chipkaart.",
    "Practice one short check-in / ride / check-out loop off-peak at a real bus door validator.",
    "Install 9292, then check one night or only-link journey before you depend on it.",
  ],
  travelFileChecklist: [
    "Corridor type written down (regional / city / both)",
    "9292 or operator planner installed",
    "Primary pay method chosen (OVpay / OV-chipkaart)",
    "Same-method check-out habit practiced at bus validators",
    "One transfer walk practiced if your commute needs it",
    "Night coverage checked once if you return late",
    "Sibling guides opened: Getting around, OVpay, OV-chipkaart, Trams, Metro, NS trains",
  ],
  introScenarios: [
    {
      situation: "New arrival outside a metro or tram core",
      approach: "OVpay or personal OV-chipkaart plus 9292 usually covers first bus weeks without memorising every operator.",
      firstStep: "Practice one short off-peak bus loop, then read networks and tickets.",
    },
    {
      situation: "Daily regional bus commute already proven",
      approach: "Keep tap discipline; deepen 9292 transfers and night notes only where your corridor needs them.",
      firstStep: "Confirm check-in/out habit, then open planning and when-buses-only.",
    },
    {
      situation: "Mostly bike or tram, occasional regional bus hop",
      approach: "Same OVpay/chipkaart method across modes — treat the bus as the gap-filler when live comparisons say so.",
      firstStep: "Keep Getting around open for multimodal weeks; use this page for bus-only depth.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Getting around remains the multimodal overview for bikes, modes and apps.",
    "OVpay deepens contactless bank-card and phone taps.",
    "OV-chipkaart deepens personal cards, top-up and many products.",
    "Trams and Metro are siblings — not covered as deep-dives here.",
    "NS trains is national rail — buses often feed stations or replace missing rail links.",
  ],
  quickAnswer: {
    heading: "Regional buses in one minute",
    summary:
      "Dutch buses cover both regional corridors and city loops — especially where metro and tram do not go. Expats usually travel with OVpay (bank card or phone) or a personal OV-chipkaart: check in when boarding and check out when leaving, with the same method. Plan with 9292 for live times, transfers and night coverage. When buses are the only public link, treat the planner as essential. Use Getting around for multimodal stitching; OVpay and OV-chipkaart for taps; Trams, Metro and NS trains for sibling modes.",
    bullets: [
      "Know regional vs city bus patterns for your corridor.",
      "Check in and out on every bus leg with one consistent method.",
      "Plan live journeys in 9292 — including night and transfer legs.",
      "Outside metro/tram cores, the bus is often the only public option.",
    ],
    note: "Getting around, OVpay, OV-chipkaart, Trams, Metro and NS trains are siblings — use them for multimodal overview, taps and other modes.",
  },
  snapshotCards: [
    {
      title: "Networks",
      body: "Regional links and city bus loops outside metro/tram cores.",
    },
    {
      title: "Operators",
      body: "High-level orientation — confirm yours in 9292, no rankings.",
    },
    {
      title: "Tickets",
      body: "Check in/out with OVpay or OV-chipkaart on every leg.",
    },
    {
      title: "9292 planning",
      body: "Live times, transfers and multimodal comparisons.",
    },
    {
      title: "Night buses",
      body: "Limited late coverage — verify before you rely on it.",
    },
    {
      title: "When buses win",
      body: "Only-link corridors and gaps tram/metro do not cover.",
    },
  ],
  networks: {
    heading: "How bus networks work (regional + city)",
    intro:
      "Buses in the Netherlands do two jobs for expats: regional connections between towns and stations, and city loops where tram or metro is thin or absent. The same OV ticketing layer (OVpay / OV-chipkaart) often works across operators, but routes, night coverage and boarding quirks belong to the local network.",
    paragraphs: [
      "This guide does not replace live planners, does not rank operators, and does not teach tram, metro or NS deep-dives. For contactless taps and personal cards, open OVpay and OV-chipkaart. For surface rails and rapid transit, open Trams and Metro siblings. For national rail after a bus feed, open NS trains.",
      "In dense cores you may still take city buses for last-mile gaps. Outside those cores, regional buses are often the primary public option. Always confirm the mode named in 9292 for your stop.",
    ],
    rows: [
      {
        topic: "Regional buses",
        whatToCheck: "Town-to-town or station-feeder corridors with longer gaps between stops.",
        tip: "Allow transfer time at hubs — frequencies can be thinner than city metro.",
      },
      {
        topic: "City buses",
        whatToCheck: "Urban loops and neighbourhood links where tram or metro is thin.",
        tip: "Same tap habits; watch stop names and door validators carefully.",
      },
      {
        topic: "Boarding validators",
        whatToCheck: "Front-door or multi-door check-in cues on your operator.",
        tip: "Follow on-board signs — do not assume every bus looks the same.",
      },
      {
        topic: "Not tram / metro / NS",
        whatToCheck: "Bus is road-based public transport; other modes have sibling guides.",
        tip: "Use Trams, Metro and NS trains siblings for those deep-dives.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Gap filler",
        body: "Buses connect places tram and metro spines do not reach — especially outside big cores.",
      },
      {
        title: "Same tap layer",
        body: "OVpay and OV-chipkaart often work across operators — deepen taps on siblings.",
      },
      {
        title: "Planner first",
        body: "9292 beats memorising paper maps and operator folklore in your first month.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Modes, bikes and multimodal commuting.",
      },
      {
        label: "Trams",
        href: TRAMS_NETHERLANDS_PATH,
        status: "live",
        description: "Surface tram networks — sibling deep-dive.",
      },
      {
        label: "Metro",
        href: METRO_NETHERLANDS_PATH,
        status: "live",
        description: "Rapid transit — sibling deep-dive.",
      },
    ] satisfies TransportLink[],
  },
  operators: {
    heading: "Operators at a high level",
    intro:
      "Dutch bus services are run by regional and city operators that change by concession and province. Expats do not need a ranking list — they need to know which operator 9292 names for their corridor and where to check disruptions.",
    paragraphs: [
      "Operator brands, vehicle liveries and app names vary. Ticket mechanics usually still sit on OVpay or OV-chipkaart. This page does not recommend operators, sell tickets or invent coverage maps. Confirm live routes on 9292 and the operator pages it cites.",
    ],
    rows: [
      {
        topic: "Concession reality",
        whatToCheck: "Which operator 9292 shows for your home–work pair.",
        tip: "Write the operator name down once — it helps support and disruption checks.",
      },
      {
        topic: "City vs regional brands",
        whatToCheck: "Whether your week mixes city loops and regional feeders.",
        tip: "Same payment method across brands reduces confusion.",
      },
      {
        topic: "Disruption notices",
        whatToCheck: "Operator app or 9292 alerts for your line.",
        tip: "Wet mornings and roadworks hit buses harder than metro spines.",
      },
      {
        topic: "No rankings here",
        whatToCheck: "Official planner and operator terms only.",
        tip: "ExpatLife does not rate or endorse bus companies.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Name, do not rank",
        body: "Knowing your operator helps support tickets — ranking lists do not.",
      },
      {
        title: "Planner is the map",
        body: "9292 already stitches operators; start there before brand research.",
      },
      {
        title: "Sibling modes",
        body: "If 9292 shows tram or metro, open those guides instead of forcing a bus habit.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "9292 planning",
        href: "#planning",
        status: "live",
        description: "Live journeys and multimodal comparisons.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider multimodal commuting model.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "When buses feed or replace rail legs.",
      },
    ] satisfies TransportLink[],
  },
  tickets: {
    heading: "Tickets and check-in quirks (OVpay / OV-chipkaart)",
    intro:
      "Most bus trips use OVpay (bank card or phone) or a personal OV-chipkaart. Check in when you board and check out when you leave — with the same method. Bus doors and validators can feel different from metro gates.",
    paragraphs: [
      "Some buses expect front-door boarding and a clear validator tap. Transfers between buses, trams or trains may open or close trips depending on live OVpay and operator rules — do not assume every transfer is one continuous open trip. Mixing phone check-in with plastic check-out creates support chaos.",
    ],
    steps: [
      {
        phase: "Plan",
        timing: "Before you leave",
        detail: "Confirm live departures and stop names in 9292 or the operator app.",
      },
      {
        phase: "Board + check in",
        timing: "At the door / validator",
        detail: "Tap OVpay or OV-chipkaart and wait for confirmation before you walk down the aisle.",
      },
      {
        phase: "Ride",
        timing: "On board",
        detail: "Keep the same payment method available for inspection or exit taps.",
      },
      {
        phase: "Alight + check out",
        timing: "At your stop",
        detail: "Tap out with the same method at the validator before you leave the vehicle or stop area as instructed.",
      },
    ] satisfies TimelineStep[],
    rows: [
      {
        topic: "OVpay",
        whatToCheck: "Accepted Dutch debit / wallet on your corridor.",
        tip: "Deepen on the OVpay guide.",
      },
      {
        topic: "OV-chipkaart",
        whatToCheck: "Balance or product loaded on a personal card.",
        tip: "Deepen on the OV-chipkaart guide.",
      },
      {
        topic: "Missed check-out",
        whatToCheck: "Official correction flow the same day.",
        tip: "Prevention beats recovery — tap every exit.",
      },
      {
        topic: "Door quirks",
        whatToCheck: "Front-door only vs multi-door boarding on your line.",
        tip: "Follow onboard signs — operators differ.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "One method per leg",
        body: "Phone check-in with plastic check-out creates expensive confusion.",
      },
      {
        title: "Confirm the beep",
        body: "Wait for validator confirmation before you walk away from the door.",
      },
      {
        title: "Planner still matters",
        body: "Even if you tap plastic, 9292 helps with disruptions and transfers.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Bank-card and phone check-in/out.",
      },
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Plastic card buy, top-up and missed checkout.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Apps and multimodal mental model.",
      },
    ] satisfies TransportLink[],
  },
  planning: {
    heading: "Planning with 9292 (orientation)",
    intro:
      "9292 is the calm default for stitching bus legs with trains, trams and walking. Expats who open the planner before leaving home avoid most “ghost bus” stress.",
    paragraphs: [
      "Set a real origin and destination, compare bus-only versus multimodal options, and watch transfer walking minutes. Operator apps can add disruption detail, but 9292 is the high-level stitcher this guide recommends for first weeks. This is orientation — not a 9292 product tutorial.",
    ],
    rows: [
      {
        topic: "Door-to-door times",
        whatToCheck: "Live comparisons for your real home–work pair.",
        tip: "Static “my neighbour said” advice ages poorly.",
      },
      {
        topic: "Transfers",
        whatToCheck: "Walking minutes between bus, tram, metro or NS.",
        tip: "Add buffer on first attempts; shorten later.",
      },
      {
        topic: "Disruptions",
        whatToCheck: "Roadworks, strikes and diversion notices.",
        tip: "Buses feel diversions more than underground metro.",
      },
      {
        topic: "Night and weekend",
        whatToCheck: "Whether your line still runs late.",
        tip: "Never assume weekday frequencies after midnight.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Planner before folklore",
        body: "9292 beats WhatsApp screenshots of old timetables.",
      },
      {
        title: "Mode honesty",
        body: "If the planner shows tram or metro as faster, open those sibling guides.",
      },
      {
        title: "Save your corridor",
        body: "Favourite your commute once you trust it — then re-check on disruption mornings.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Apps and everyday mobility norms.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "When 9292 stitches bus + rail.",
      },
      {
        label: "Metro",
        href: METRO_NETHERLANDS_PATH,
        status: "live",
        description: "When the planner prefers rapid transit.",
      },
    ] satisfies TransportLink[],
  },
  nightBuses: {
    heading: "Night buses (light orientation)",
    intro:
      "Some Dutch corridors offer night or late buses — coverage is uneven and changes by city and day. Treat night service as something you verify, not something you assume.",
    paragraphs: [
      "If you return late from work, events or airports, check 9292 for your exact date before you leave. Frequencies can be thin; walking links and station hubs matter more. Tap habits stay the same: one method, check in and out. This section is intentionally light — not a nightlife guide.",
    ],
    rows: [
      {
        topic: "Verify live",
        whatToCheck: "Whether your line runs after your event ends.",
        tip: "Weekday and weekend night patterns often differ.",
      },
      {
        topic: "Hub safety buffer",
        whatToCheck: "Walking time and lighting between stop and home.",
        tip: "Leave margin for a missed connection.",
      },
      {
        topic: "Same taps",
        whatToCheck: "OVpay or chipkaart still works on the night vehicle.",
        tip: "Do not invent cash folklore — confirm operator rules.",
      },
      {
        topic: "Alternatives",
        whatToCheck: "Last metro/tram, NS, bike or taxi when buses stop.",
        tip: "Open sibling guides when the planner abandons bus options.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Light coverage",
        body: "Night buses exist on some corridors — never nationwide folklore.",
      },
      {
        title: "Planner is mandatory",
        body: "Late returns without 9292 are how people get stranded.",
      },
      {
        title: "Not a nightlife map",
        body: "We do not list party routes — confirm your OD pair live.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "9292 planning",
        href: "#planning",
        status: "live",
        description: "Live late journeys and alternatives.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider late-evening mobility options.",
      },
      {
        label: "Trams",
        href: TRAMS_NETHERLANDS_PATH,
        status: "live",
        description: "When late surface rails still run.",
      },
    ] satisfies TransportLink[],
  },
  whenBusesOnly: {
    heading: "When buses are the only link",
    intro:
      "Outside metro and tram cores, the bus is often the only public option between home, work, school or the nearest NS station. Mode choice then is not “bus vs metro” — it is bus versus bike, car or irregular service.",
    paragraphs: [
      "Recognising an only-link corridor early prevents false expectations from Amsterdam-centric advice. Use 9292 to confirm frequency, last trips and transfer hubs. Deepen tram and metro only when those modes actually appear in your planner. Soft CTAs to Getting around and sibling guides stay optional — not sales pressure.",
    ],
    rows: [
      {
        topic: "Only-link corridors",
        whatToCheck: "No tram or metro alternative in 9292 for your OD pair.",
        tip: "Treat frequency and last-bus times as first-class facts.",
      },
      {
        topic: "Station feeders",
        whatToCheck: "Bus last mile into an NS hub.",
        tip: "Open NS trains for rail depth after the feed.",
      },
      {
        topic: "When tram/metro wins",
        whatToCheck: "Planner shows surface rail or underground as faster.",
        tip: "Open Trams or Metro siblings — do not force a bus habit.",
      },
      {
        topic: "Bike still matters",
        whatToCheck: "Sub-20-minute dry trips beside thin bus frequency.",
        tip: "Stay linked to Getting around for bike-first weeks.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Honest corridors",
        body: "Only-link towns need bus discipline — not metro folklore.",
      },
      {
        title: "Compare live",
        body: "9292 door-to-door times beat static “buses are slow” advice.",
      },
      {
        title: "No rankings",
        body: "We do not rank cities or operators — confirm your corridor on official tools.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Trams",
        href: TRAMS_NETHERLANDS_PATH,
        status: "live",
        description: "When surface corridors appear in the planner.",
      },
      {
        label: "Metro",
        href: METRO_NETHERLANDS_PATH,
        status: "live",
        description: "When rapid transit appears in the planner.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Bikes and multimodal commuting reality.",
      },
    ] satisfies TransportLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Transport tools to explore",
    subtitle:
      "Soft CTAs for established Dutch mobility options when your week runs on buses. This block is not a ranking of operators, tickets or apps.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a bus week — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-regional-buses-support-providers",
    analyticsPageContext: "regional-buses-netherlands-recommended-options",
    categoryLinks: [
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: OVPAY_NETHERLANDS_PATH, label: "OVpay" },
      { href: OV_CHIPKAART_NETHERLANDS_PATH, label: "OV-chipkaart" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat bus scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First week outside a metro/tram core, Dutch debit card ready",
        approach: "OVpay pay-as-you-go plus 9292 usually covers learning weeks.",
        firstStep: "Practice one short off-peak bus loop, then install a planner.",
      },
      {
        situation: "Daily regional bus commute to an NS hub or workplace",
        approach: "Keep one payment method, transfer buffers and disruption checks.",
        firstStep: "Confirm tickets and planning, then open when-buses-only.",
      },
      {
        situation: "Weekend visitor for 5–10 days in a bus-first town",
        approach: "OVpay or chipkaart for a few bus days — skip memorising operator brands.",
        firstStep: "Learn check-in/out and 9292 stop names.",
      },
      {
        situation: "Tram or metro week with occasional regional bus hops",
        approach: "Same tap method across modes; use this page for bus-leg habits.",
        firstStep: "Open Trams or Metro siblings for core depth; keep bus tickets and planning here.",
      },
      {
        situation: "Late return once a week",
        approach: "Verify night coverage live — never assume weekday daytime frequencies.",
        firstStep: "Open night buses lightly, then save an alternative in 9292.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Forgetting to check out",
      body: "Open bus trips trigger maximum-fare style charges and stressful corrections.",
      advice: "Build an exit-tap habit with the same method and fix the same day if you miss one.",
    },
    {
      title: "Mixing payment methods mid-leg",
      body: "Phone check-in with plastic check-out creates support chaos.",
      advice: "Finish the open trip with the same method you started.",
    },
    {
      title: "Treating buses like tram or metro folklore",
      body: "Door validators, frequencies and night coverage differ from rail spines.",
      advice: "Use Trams and Metro for those modes; keep bus quirks on this page.",
    },
    {
      title: "Ignoring 9292 on disruption mornings",
      body: "Roadworks and diversions feel personal without a planner.",
      advice: "Check live journeys before you leave — especially on wet or strike-rumour days.",
    },
    {
      title: "Assuming night buses always run",
      body: "Late coverage is corridor-specific and often thin.",
      advice: "Verify the exact date in 9292 and keep an alternative.",
    },
    {
      title: "Copying big-city mode advice in an only-link town",
      body: "Amsterdam metro tips do not replace regional bus reality.",
      advice: "Confirm whether your corridor has alternatives before skipping bus setup.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Regional buses readiness checklist",
    intro: "Use this before your first busy bus week outside a pure metro or tram core.",
    items: [
      "Corridor type confirmed (regional / city / both)",
      "Operator name written from 9292 for your main OD pair",
      "Primary pay method chosen (OVpay / OV-chipkaart)",
      "One full check-in / ride / check-out loop practiced off-peak",
      "9292 installed and favourite commute saved",
      "One transfer walk practiced if your commute needs it",
      "Night coverage checked once if you return late",
      "Sibling guides opened: Getting around, OVpay, OV-chipkaart, Trams, Metro, NS trains",
    ],
  },
  howTo: {
    heading: "How to start regional bus travel calmly as an expat",
    steps: [
      {
        name: "Name your corridor pattern",
        text: "Confirm whether you need regional buses, city buses, or both — and whether tram or metro alternatives exist in 9292.",
      },
      {
        name: "Choose a first payment path",
        text: "Prefer OVpay or a personal OV-chipkaart so check-in/out works across everyday OV legs.",
      },
      {
        name: "Practice one short loop off-peak",
        text: "Check in at a bus validator, ride a few stops, check out — so Monday peak is not your first lesson.",
      },
      {
        name: "Learn planner and night habits",
        text: "Save your commute in 9292, check disruption notices, and verify late coverage if you return after dark.",
      },
      {
        name: "Open siblings when modes change",
        text: "Use Trams, Metro or NS trains when the planner leaves the bus network — keep Getting around for bikes and multimodal weeks.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to start regional bus travel in the Netherlands as an expat",
    description:
      "Orientation steps for expats identifying regional and city bus corridors, choosing OVpay or OV-chipkaart, practising check-in/out, planning with 9292, checking night coverage lightly, and recognising when buses are the only public link.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Do I need an OV-chipkaart to ride Dutch buses?",
      a: "Not always. Many travellers use OVpay (bank card or phone). A personal OV-chipkaart is useful when you want plastic backup, certain products, or account tools. Deepen both options on the OVpay and OV-chipkaart guides.",
    },
    {
      q: "What is the difference between regional and city buses?",
      a: "Regional buses often link towns, villages and stations with longer gaps. City buses cover urban loops and neighbourhood links. Many expat weeks use both. Confirm the pattern 9292 shows for your stops.",
    },
    {
      q: "Do I check in and out on buses?",
      a: "Yes for typical OVpay and OV-chipkaart trips: check in when you board and check out when you leave, with the same method. Door and validator layouts vary by operator — follow onboard cues and live OVpay rules for transfers.",
    },
    {
      q: "What happens if I forget to check out?",
      a: "You may be charged a maximum-style fare until the trip is corrected. Use the official missed check-out flow for OVpay or OV-chipkaart as soon as you notice. Prevention — tapping at every exit with the same method — is calmer than recovery.",
    },
    {
      q: "When are buses the only option?",
      a: "Outside metro and tram cores, buses are often the only public link between home, work or the nearest station. Compare live journeys in 9292. Deepen tram and metro only when those modes appear for your corridor.",
    },
    {
      q: "Do night buses run everywhere?",
      a: "No. Night and late coverage is corridor-specific and often thin. Always verify the exact date and time in 9292 before you rely on a late return.",
    },
    {
      q: "Where do I learn trams, metro or NS trains?",
      a: "Open the Trams, Metro and NS trains sibling guides in this public transport cluster. They cover those modes without repeating bus door habits.",
    },
    {
      q: "Is this legal or financial advice?",
      a: "No. ExpatLife provides general orientation only. Follow operator, OVpay, OV-chipkaart.nl and planner instructions for tickets, refunds and corrections.",
    },
  ],
  relatedGuidesTips: [
    "Wider mobility → Getting around.",
    "Contactless taps → OVpay.",
    "Personal travel card → OV-chipkaart.",
    "Surface tram → Trams.",
    "Everyday bikes → Cycling.",
    "Subscription fleets → Bike sharing.",
  ],
  relatedGuides: [
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "OV, bikes and everyday multimodal mobility.",
    },
    {
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Contactless bank-card and phone travel for expats.",
    },
    {
      label: "OV-chipkaart",
      href: OV_CHIPKAART_NETHERLANDS_PATH,
      status: "live",
      description: "Personal and anonymous travel cards for expats.",
    },
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "National rail — buses often feed major stations.",
    },
    {
      label: "Trams",
      href: TRAMS_NETHERLANDS_PATH,
      status: "live",
      description: "City tram travel for expats.",
    },
    {
      label: "Metro",
      href: METRO_NETHERLANDS_PATH,
      status: "live",
      description: "Metro / rapid transit for expats.",
    },
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday personal cycling — ownership, rules, locks and rain.",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Subscription and shared bike fleets for expats.",
    },
  ] satisfies TransportLink[],
  transportHubTips: [
    "Regional buses is the bus guide in the Public Transport cluster.",
    "Getting around remains the wider mobility overview.",
    "OVpay covers contactless bank-card and phone travel.",
    "OV-chipkaart covers personal plastic cards and many products.",
    "Trams, Metro and NS trains are mode siblings.",
    "Cycling and Bike sharing continue the active-mobility lane.",
  ],
  transportHubCards: [
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Regional and city bus travel — you are here.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Modes, bikes and multimodal commuting.",
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
      description: "Personal travel card setup and products.",
    },
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "National rail products and commute orientation.",
    },
    {
      label: "Trams",
      href: TRAMS_NETHERLANDS_PATH,
      status: "live",
      description: "City tram travel — sibling guide.",
    },
    {
      label: "Metro",
      href: METRO_NETHERLANDS_PATH,
      status: "live",
      description: "Metro / rapid transit — sibling guide.",
    },
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday personal cycling for expats.",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Subscription and shared bike fleets.",
    },
  ] satisfies TransportLink[],
  exploreNextCards: [
    {
      label: "Trams",
      href: TRAMS_NETHERLANDS_PATH,
      status: "live",
      description: "Need surface tram depth after buses?",
    },
    {
      label: "Metro",
      href: METRO_NETHERLANDS_PATH,
      status: "live",
      description: "Need rapid transit when the planner shows metro?",
    },
    {
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Need contactless tap depth?",
    },
    {
      label: "OV-chipkaart",
      href: OV_CHIPKAART_NETHERLANDS_PATH,
      status: "live",
      description: "Ready for personal cards and products?",
    },
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "City-to-city rail after a bus feed?",
    },
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Ready for everyday bike ownership, rules and locks?",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Prefer subscription or station bikes before buying?",
    },
  ] satisfies TransportLink[],
  exploreNextTips: [
    "Surface tram → Trams.",
    "Rapid transit → Metro.",
    "Contactless taps → OVpay.",
    "Plastic and products → OV-chipkaart.",
    "Everyday bikes → Cycling.",
    "Subscription fleets → Bike sharing.",
  ],
  officialSources: [
    {
      label: "9292 — journey planner",
      href: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].web,
      description: "Multimodal public-transport journey planning including buses",
    },
    {
      label: "OVpay — contactless travel",
      href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.web,
      description: "Official contactless bank-card and phone travel information",
    },
    {
      label: "OV-chipkaart — English FAQ",
      href: "https://www.ov-chipkaart.nl/en/frequently-asked-questions",
      description: "Official orientation for personal travel cards and products",
    },
    {
      label: "NS — Dutch Railways",
      href: "https://www.ns.nl/en",
      description: "National rail orientation for bus-to-station feeder trips",
    },
    {
      label: "GVB — Amsterdam",
      href: "https://www.gvb.nl/en",
      description: "Amsterdam public transport orientation including city buses",
    },
    {
      label: "RET — Rotterdam",
      href: "https://www.ret.nl/en",
      description: "Rotterdam metro, tram and bus orientation",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Know regional vs city bus.",
        "Learn OVpay or chipkaart taps.",
        "Plan with 9292.",
        "Spot only-link corridors.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Networks.",
        "Operators.",
        "Tickets.",
        "9292 planning.",
        "Night buses.",
        "When buses win.",
      ],
    },
    networks: {
      title: "From the visual — network cues",
      items: [
        "Regional buses.",
        "City buses.",
        "Boarding validators.",
        "Not tram / metro / NS.",
      ],
    },
    operators: {
      title: "From the visual — operator cues",
      items: [
        "Name your operator from 9292.",
        "City vs regional brands.",
        "Check disruptions.",
        "No rankings.",
      ],
    },
    tickets: {
      title: "From the visual — ticket cues",
      items: [
        "Plan.",
        "Check in.",
        "Ride.",
        "Check out same method.",
      ],
    },
    planning: {
      title: "From the visual — planner cues",
      items: [
        "Door-to-door times.",
        "Transfers.",
        "Disruptions.",
        "Night and weekend.",
      ],
    },
    nightBuses: {
      title: "From the visual — night cues",
      items: [
        "Verify live.",
        "Allow buffers.",
        "Same taps.",
        "Keep alternatives.",
      ],
    },
    whenBusesOnly: {
      title: "From the visual — corridor cues",
      items: [
        "Only-link corridors.",
        "Station feeders.",
        "Tram/metro when they appear.",
        "Bike still matters.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "First week outside metro core.",
        "Daily regional commute.",
        "Short visitor.",
        "Late return once a week.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "Missed checkout.",
        "Mixed methods.",
        "Mode folklore.",
        "Ignoring 9292.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Corridor known.",
        "Pay method chosen.",
        "Loop practiced.",
        "Siblings opened.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general public-transport orientation for newcomers. It is not legal, financial or product advice. Routes, fares, tap rules and operator apps change — always confirm on operator pages, OVpay, OV-chipkaart.nl and 9292 before you travel.",
} as const;

export type RegionalBusesNetherlandsPage = typeof regionalBusesNetherlandsPage;

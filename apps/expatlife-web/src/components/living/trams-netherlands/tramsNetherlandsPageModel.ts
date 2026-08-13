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
const VISUAL_PREFIX = "trams-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const tramsNetherlandsPage = {
  slug: "trams-netherlands",
  path: TRAMS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(TRAMS_NETHERLANDS_PATH) ?? "2026-09-10",
  seo: {
    title: "Trams in the Netherlands | Complete Guide for Expats",
    description:
      "How tram travel works for expats in Dutch cities: Amsterdam GVB, The Hague HTM, Rotterdam RET and Utrecht U-OV orientation, check-in/out with OV-chipkaart or OVpay, etiquette and when tram beats bus or metro.",
    keywords: [
      "trams Netherlands",
      "Amsterdam tram GVB",
      "The Hague tram HTM",
      "Rotterdam tram RET",
      "Utrecht tram U-OV",
      "Dutch tram check in",
      "OV-chipkaart tram",
      "OVpay tram",
      "tram etiquette Netherlands",
      "public transport Netherlands tram",
      "expat tram travel",
      "when to take tram vs metro",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Public transport",
    pageTitle: "Trams in the Netherlands",
    subtitle:
      "City tram travel for expats: how networks work (GVB, HTM, RET, U-OV), check-in/out with OV-chipkaart or OVpay, boarding etiquette, and when a tram beats bus or metro — city examples, not a full city guide.",
    primaryCta: { label: "How to ride", href: "#how-to-ride" },
    secondaryCta: { label: "Trams checklist", href: "#checklist" },
    chips: ["City networks", "Check-in/out", "Etiquette", "Vs bus/metro", "City examples"],
    disclaimer:
      "General orientation only — not legal, financial or product advice and not a substitute for GVB, HTM, RET, U-OV, OVpay or OV-chipkaart.nl terms. Lines, fares and tap rules change. Verify current steps on official operator pages before you travel.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch city tram stop: multicultural expat checking a journey planner beside a modern tram on a canal street under soft daylight, bikes and brick façades, reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#networks", label: "Networks" },
    { href: "#how-to-ride", label: "How to ride" },
    { href: "#etiquette", label: "Etiquette" },
    { href: "#when-tram-wins", label: "When tram wins" },
    { href: "#city-examples", label: "City examples" },
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
      "Premium orientation board titled Trams After Arrival — four building blocks: know your city operator, learn check-in/out, practice boarding etiquette, choose tram vs bus/metro — Travel File Checklist rail on the right, Dutch canal tram skyline and ExpatLife brand footer.",
      "Four habits cover most tram questions: operator, taps, etiquette, and mode choice."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of trams in the Netherlands — city networks, how to ride, etiquette, when tram wins, city examples, sibling links — Dutch tram band and ExpatLife brand footer.",
      "Six building blocks explain almost every city tram question for newcomers."
    ),
    networks: visual(
      "networks",
      "Premium city-operator map board — Amsterdam GVB, The Hague HTM, Rotterdam RET, Utrecht U-OV orientation cards with light city cues — desk scene with journey planner phone, General information only rail, Dutch canal skyline and ExpatLife brand footer.",
      "Trams are city-operator networks — not NS national rail."
    ),
    howToRide: visual(
      "how-to-ride",
      "Premium check-in/out journey board — board tram, tap OV-chipkaart or OVpay on validator, ride, tap out at exit — Dutch streetcar cabin scene without fake logos, Same method every leg checklist rail and ExpatLife brand footer.",
      "One payment method per leg — check in and check out on every tram trip."
    ),
    etiquette: visual(
      "etiquette",
      "Premium boarding etiquette board — let people exit first, keep aisles clear, validate early, give priority seats space — calm Dutch tram stop scene with Boarding notes rail and ExpatLife brand footer.",
      "Calm boarding habits make crowded Dutch trams easier for everyone."
    ),
    whenTramWins: visual(
      "when-tram-wins",
      "Premium decide board — tram vs bus vs metro with surface access, frequency, transfer friction cues — Dutch multimodal desk with Mode choice rail, canal skyline and ExpatLife brand footer.",
      "Trams win when they are direct, frequent and keep you above ground without awkward transfers."
    ),
    cityExamples: visual(
      "city-examples",
      "Premium light city examples board — Amsterdam, The Hague, Rotterdam, Utrecht tram cues with operator names only — orientation not a full city guide, Verify with operator apps rail and ExpatLife brand footer.",
      "City examples are orientation — deepen lines on official operator tools."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first week in a tram city, daily neighbourhood commute, weekend visitor, metro-first week with occasional tram — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match stay length and neighbourhood pattern to tram habits instead of copying a colleague."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — forgetting checkout, mixing payment methods, treating tram as NS, blocking doors, ignoring operator apps — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is tap discipline and mode confusion — not finding the tram stop."
    ),
    checklist: visual(
      "checklist",
      "Premium trams readiness checklist clipboard — operator known, pay method chosen, check-in/out practiced, etiquette notes, sibling guides opened — Dutch kitchen table with canal tram light and ExpatLife brand footer.",
      "Use this checklist so your first busy tram week stays intentional."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "OVpay / card", note: "Learn taps first" },
    { label: "Must do", value: "Check in + out", note: "Every tram leg" },
    { label: "Know", value: "City operator", note: "GVB / HTM / RET / U-OV" },
    { label: "Sibling", value: "Metro & buses", note: "Cluster guides" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Trams are the surface rail of many Dutch cities — especially Amsterdam (GVB), The Hague (HTM), Rotterdam (RET) and Utrecht (U-OV). For expats they are less about memorising every line map and more about knowing your operator, checking in and out with one payment method, and boarding without blocking the doors.",
    "Getting around is the wider mobility mental model. OVpay and OV-chipkaart deepen tap mechanics. NS trains covers national rail. Metro and regional buses are siblings for underground and bus networks. This page stays on tram travel for expats — city-agnostic with light city examples, not a full city guide.",
  ],
  introHighlights: [
    "Identify your city tram operator before you memorise line numbers.",
    "Check in and check out on every tram leg with one consistent method (OVpay or OV-chipkaart).",
    "Let people exit first, keep doors clear, and validate early on busy stops.",
    "Open Metro, Regional buses and NS trains siblings when the trip leaves the tram network.",
  ],
  orientationFlowSteps: [
    "Confirm your city operator (GVB, HTM, RET, U-OV or other) and install a planner (9292 or operator app).",
    "Choose a first payment path: OVpay or personal OV-chipkaart.",
    "Practice one short check-in / ride / check-out loop off-peak.",
    "Learn boarding etiquette, then compare tram vs bus/metro for your real corridors.",
  ],
  travelFileChecklist: [
    "City tram operator written down",
    "9292 or operator planner installed",
    "Primary pay method chosen (OVpay / OV-chipkaart)",
    "Same-method check-out habit practiced",
    "Boarding etiquette notes reviewed",
    "Home–work tram corridor practiced once off-peak",
    "Sibling guides opened: Getting around, OVpay, OV-chipkaart, Metro, Regional buses, NS trains",
  ],
  introScenarios: [
    {
      situation: "New arrival in Amsterdam, The Hague, Rotterdam or Utrecht",
      approach: "OVpay or personal OV-chipkaart plus 9292 usually covers first tram weeks without buying city-specific folklore.",
      firstStep: "Practice one short off-peak loop, then read networks and how to ride.",
    },
    {
      situation: "Daily neighbourhood tram commute already proven",
      approach: "Keep tap discipline; deepen operator apps and transfers only where your corridor needs them.",
      firstStep: "Confirm check-in/out habit, then open when-tram-wins for mode choice.",
    },
    {
      situation: "Mostly metro or bike, occasional tram hop",
      approach: "Same OVpay/chipkaart method across modes — treat tram as a short surface leg.",
      firstStep: "Keep Getting around open for multimodal weeks; use this page for tram-only depth.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Getting around remains the multimodal overview for bikes, modes and apps.",
    "OVpay deepens contactless bank-card and phone taps.",
    "OV-chipkaart deepens personal cards, top-up and many products.",
    "Metro and regional buses are siblings — not covered as deep-dives here.",
    "NS trains is national rail — different from city trams.",
  ],
  quickAnswer: {
    heading: "Trams in one minute",
    summary:
      "Dutch city trams are run by local operators — commonly GVB (Amsterdam), HTM (The Hague), RET (Rotterdam) and U-OV (Utrecht). Expats usually travel with OVpay (bank card or phone) or a personal OV-chipkaart: check in when you board and check out when you leave. Board calmly — let people exit first, keep doors clear, validate early. Trams often beat buses for frequent surface corridors and beat metro when you want street-level access without underground transfers. Use Getting around for multimodal stitching; OVpay and OV-chipkaart for taps; Metro, Regional buses and NS trains for sibling modes.",
    bullets: [
      "Know your city operator before memorising lines.",
      "Check in and out on every tram leg with one consistent method.",
      "Etiquette: exit first, clear doors, validate early.",
      "Tram vs bus/metro is corridor-specific — verify live journeys in 9292.",
    ],
    note: "Getting around, OVpay, OV-chipkaart, Metro, Regional buses and NS trains are siblings — use them for multimodal overview, taps and other modes.",
  },
  snapshotCards: [
    {
      title: "City networks",
      body: "GVB, HTM, RET, U-OV and peers — local operators, not NS.",
    },
    {
      title: "How to ride",
      body: "Check in/out with OVpay or OV-chipkaart on every leg.",
    },
    {
      title: "Etiquette",
      body: "Exit first, clear doors, validate early on busy stops.",
    },
    {
      title: "When tram wins",
      body: "Direct, frequent surface corridors without awkward transfers.",
    },
    {
      title: "City examples",
      body: "Light AMS / Hague / RTM / Utrecht cues — not full city guides.",
    },
    {
      title: "Sibling modes",
      body: "Metro, buses and NS trains deepen elsewhere in the cluster.",
    },
  ],
  networks: {
    heading: "What tram networks are (city operators)",
    intro:
      "Trams in the Netherlands are city or regional operator networks. The same OV ticketing layer (OVpay / OV-chipkaart) often works across them, but line maps, apps and disruption notices belong to the local operator.",
    paragraphs: [
      "This guide does not replace live planners, does not rank operators, and does not teach NS trains or metro deep-dives. For contactless taps and personal cards, open OVpay and OV-chipkaart. For underground networks and buses, open Metro and Regional buses siblings.",
      "Operator names are orientation: Amsterdam GVB, The Hague HTM, Rotterdam RET, Utrecht U-OV. Other cities may have different setups — always confirm the operator named in 9292 for your stop.",
    ],
    rows: [
      {
        topic: "Amsterdam — GVB",
        whatToCheck: "City tram (and other GVB modes) for many central and radial trips.",
        tip: "Operator apps + 9292 for live disruptions.",
      },
      {
        topic: "The Hague — HTM",
        whatToCheck: "Tram network across The Hague region corridors.",
        tip: "Treat HTM notices as source of truth for line changes.",
      },
      {
        topic: "Rotterdam — RET",
        whatToCheck: "Tram as surface complement to RET metro.",
        tip: "Mode choice often tram vs metro — see when-tram-wins.",
      },
      {
        topic: "Utrecht — U-OV",
        whatToCheck: "City tram / light-rail style corridors under U-OV branding.",
        tip: "Confirm stops and validators in the planner before peak weeks.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Local, not national",
        body: "Trams are city operators — NS trains is the national rail sibling.",
      },
      {
        title: "Same tap layer",
        body: "OVpay and OV-chipkaart often work across operators — deepen taps on siblings.",
      },
      {
        title: "Planner first",
        body: "9292 (or operator apps) beats memorising paper maps in your first month.",
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
        label: "Metro",
        href: METRO_NETHERLANDS_PATH,
        status: "live",
        description: "Underground networks — sibling deep-dive.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "National rail — not city trams.",
      },
    ] satisfies TransportLink[],
  },
  howToRide: {
    heading: "How to ride: check-in and check-out",
    intro:
      "Most tram trips use OVpay (bank card or phone) or a personal OV-chipkaart. Check in on the validator when you board and check out when you leave — with the same method.",
    paragraphs: [
      "Some stops and vehicles place validators near doors; others expect you to tap as you enter. If you transfer between modes, follow live operator and OVpay rules — do not assume every transfer is one continuous open trip. Mixing phone check-in with plastic check-out creates support chaos.",
    ],
    steps: [
      {
        phase: "Plan",
        timing: "Before you leave",
        detail: "Confirm live departures in 9292 or the operator app.",
      },
      {
        phase: "Board + check in",
        timing: "At the stop / door",
        detail: "Let people exit first, then tap OVpay or OV-chipkaart on the validator.",
      },
      {
        phase: "Ride",
        timing: "On board",
        detail: "Keep the same payment method available for inspection or exit taps.",
      },
      {
        phase: "Check out",
        timing: "At your stop",
        detail: "Tap out with the same method before you leave the vehicle or stop area as required.",
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
        topic: "Transfers",
        whatToCheck: "Whether your open trip continues across modes.",
        tip: "Verify with OVpay / operator rules — do not guess.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "One method per leg",
        body: "Phone check-in with plastic check-out creates expensive confusion.",
      },
      {
        title: "Listen for the beep",
        body: "Confirm the validator response before you walk away from the pole.",
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
  etiquette: {
    heading: "Etiquette and boarding",
    intro:
      "Dutch trams are efficient when boarding is calm. A few shared habits prevent door delays and awkward peak-hour moments.",
    paragraphs: [
      "Let passengers exit fully before you step on. Keep pushchairs, suitcases and bikes out of doorways. Offer priority seating space when someone needs it. Validate early so you are not blocking the aisle at the next stop. This is orientation — local norms vary by city and time of day.",
    ],
    rows: [
      {
        topic: "Exit first",
        whatToCheck: "Stand aside until the doorway clears.",
        tip: "Rushing in creates door delays for everyone.",
      },
      {
        topic: "Doors and aisles",
        whatToCheck: "Bags, prams and bikes clear of hinges.",
        tip: "Move inside after you tap.",
      },
      {
        topic: "Priority space",
        whatToCheck: "Seats and wheelchair zones when needed.",
        tip: "Offer space without a speech.",
      },
      {
        topic: "Quiet comfort",
        whatToCheck: "Phone volume and luggage footprint.",
        tip: "Peak trams are shared space — pack light when you can.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Validate early",
        body: "Tap as you board so you are not stuck in the doorway at the next stop.",
      },
      {
        title: "Know your exit",
        body: "Watch stop names and prepare to leave without blocking the aisle.",
      },
      {
        title: "Peak patience",
        body: "Standing room is normal in rush hour — leave a buffer for transfers.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Everyday mobility norms across modes.",
      },
      {
        label: "Metro",
        href: METRO_NETHERLANDS_PATH,
        status: "live",
        description: "Underground boarding habits differ — sibling guide.",
      },
      {
        label: "Regional buses",
        href: REGIONAL_BUSES_NETHERLANDS_PATH,
        status: "live",
        description: "Bus boarding cues when tram is not the mode.",
      },
    ] satisfies TransportLink[],
  },
  whenTramWins: {
    heading: "When tram beats bus or metro",
    intro:
      "Mode choice is corridor-specific. Trams often win for frequent surface routes with short walks and few transfers — not because they are always fastest.",
    paragraphs: [
      "Metro can be faster for longer underground spines. Buses fill gaps where tram tracks do not go. Bikes still dominate many short Dutch trips. Use 9292 live comparisons for your real home–work path instead of forum folklore. Deepen metro and bus mechanics on sibling guides.",
    ],
    rows: [
      {
        topic: "Tram often wins",
        whatToCheck: "Direct surface corridor, high frequency, short walks.",
        tip: "Street-level access without underground transfers.",
      },
      {
        topic: "Metro often wins",
        whatToCheck: "Longer spines, fewer surface stops, peak reliability.",
        tip: "Open the Metro sibling for depth.",
      },
      {
        topic: "Bus often wins",
        whatToCheck: "Neighbourhoods without tram tracks or late-night coverage.",
        tip: "Open Regional buses for depth.",
      },
      {
        topic: "Bike often wins",
        whatToCheck: "Sub-20-minute trips in dry weather.",
        tip: "Stay linked to Getting around.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Compare live",
        body: "9292 door-to-door times beat static “tram is always better” advice.",
      },
      {
        title: "Transfers cost calm",
        body: "One direct tram can beat a faster metro that needs two changes.",
      },
      {
        title: "No rankings",
        body: "We do not rank cities or operators — confirm your corridor on official tools.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Metro",
        href: METRO_NETHERLANDS_PATH,
        status: "live",
        description: "When underground spines fit better.",
      },
      {
        label: "Regional buses",
        href: REGIONAL_BUSES_NETHERLANDS_PATH,
        status: "live",
        description: "When buses fill the gap.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Bikes and multimodal commuting reality.",
      },
    ] satisfies TransportLink[],
  },
  cityExamples: {
    heading: "City examples (light orientation)",
    intro:
      "These cues help you recognise operators — they are not full city guides. Line numbers, night services and construction diversions change; verify on official tools.",
    paragraphs: [
      "Amsterdam newcomers often meet GVB trams as the default surface network. The Hague’s HTM trams stitch many neighbourhood corridors. Rotterdam pairs RET trams with a strong metro spine — mode choice matters. Utrecht’s U-OV tram / light-rail style corridors deserve a practice loop before Monday peak.",
    ],
    rows: [
      {
        topic: "Amsterdam",
        whatToCheck: "GVB tram maps + 9292 for transfers to NS / metro.",
        tip: "Central streets are busy — etiquette matters.",
      },
      {
        topic: "The Hague",
        whatToCheck: "HTM tram corridors across the region.",
        tip: "Operator notices for diversions.",
      },
      {
        topic: "Rotterdam",
        whatToCheck: "RET tram vs metro for the same OD pair.",
        tip: "Compare live journeys — do not assume.",
      },
      {
        topic: "Utrecht",
        whatToCheck: "U-OV tram stops and validators on your corridor.",
        tip: "Practice once off-peak before busy weeks.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Orientation only",
        body: "We name operators so you know where to look — not which neighbourhood to choose.",
      },
      {
        title: "Apps beat folklore",
        body: "Operator apps and 9292 update faster than WhatsApp advice.",
      },
      {
        title: "Cluster siblings",
        body: "Metro, buses and NS trains deepen modes this page only mentions.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider mobility model across cities.",
      },
      {
        label: "Metro",
        href: METRO_NETHERLANDS_PATH,
        status: "live",
        description: "Especially relevant in Rotterdam / Amsterdam spines.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "City-to-city rail after the tram last mile.",
      },
    ] satisfies TransportLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Transport tools to explore",
    subtitle:
      "Soft CTAs for established Dutch mobility options when your week runs on city trams. This block is not a ranking of operators, tickets or apps.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a tram week — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-trams-support-providers",
    analyticsPageContext: "trams-netherlands-recommended-options",
    categoryLinks: [
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: OVPAY_NETHERLANDS_PATH, label: "OVpay" },
      { href: OV_CHIPKAART_NETHERLANDS_PATH, label: "OV-chipkaart" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat tram scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First week in a tram city, Dutch debit card ready",
        approach: "OVpay pay-as-you-go plus 9292 usually covers learning weeks.",
        firstStep: "Practice one short off-peak loop, then install a planner.",
      },
      {
        situation: "Daily neighbourhood tram commute",
        approach: "Keep one payment method and a strict check-out habit; compare metro only if transfers improve the corridor.",
        firstStep: "Confirm etiquette and how-to-ride, then open when-tram-wins.",
      },
      {
        situation: "Weekend visitor for 5–10 days",
        approach: "OVpay or chipkaart for a few tram days — skip memorising full maps.",
        firstStep: "Learn check-in/out and exit-first boarding.",
      },
      {
        situation: "Metro-first week with occasional tram hops",
        approach: "Same tap method across modes; use this page for surface-leg habits.",
        firstStep: "Open Metro sibling for underground depth; keep tram etiquette here.",
      },
      {
        situation: "Considering bikes vs more trams",
        approach: "Bikes for short dry trips; trams for rain, luggage and longer surface corridors.",
        firstStep: "Finish tram setup here, then open Getting around for bike-first weeks.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Forgetting to check out",
      body: "Open tram trips trigger maximum-fare style charges and stressful corrections.",
      advice: "Build an exit-tap habit with the same method and fix the same day if you miss one.",
    },
    {
      title: "Mixing payment methods mid-leg",
      body: "Phone check-in with plastic check-out creates support chaos.",
      advice: "Finish the open trip with the same method you started.",
    },
    {
      title: "Treating tram as NS trains",
      body: "City operators differ from national rail products and habits.",
      advice: "Use NS trains for rail depth; keep this page for city trams.",
    },
    {
      title: "Blocking doors while validating",
      body: "Late taps in the doorway delay everyone and raise tension.",
      advice: "Tap as you board, then move inside.",
    },
    {
      title: "Ignoring operator / 9292 apps",
      body: "Without live disruptions, diversions feel like personal failure.",
      advice: "Check the planner before you leave on wet or strike-rumour days.",
    },
    {
      title: "Assuming tram always beats metro",
      body: "Corridor maths differ — especially in Rotterdam and Amsterdam.",
      advice: "Compare live journeys; deepen metro on the sibling guide.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Trams readiness checklist",
    intro: "Use this before your first busy tram week in a Dutch city.",
    items: [
      "City tram operator confirmed (GVB / HTM / RET / U-OV / other)",
      "Primary pay method chosen (OVpay / OV-chipkaart)",
      "One full check-in / ride / check-out loop practiced off-peak",
      "Boarding etiquette reviewed (exit first, clear doors)",
      "9292 or operator planner installed for disruptions",
      "Home–work corridor compared once vs bus/metro in the planner",
      "Sibling guides opened: Getting around, OVpay, OV-chipkaart, Metro, Regional buses, NS trains",
    ],
  },
  howTo: {
    heading: "How to start tram travel calmly as an expat",
    steps: [
      {
        name: "Name your operator",
        text: "Confirm whether your city uses GVB, HTM, RET, U-OV or another operator for trams — write it down.",
      },
      {
        name: "Choose a first payment path",
        text: "Prefer OVpay or a personal OV-chipkaart so check-in/out works across everyday OV legs.",
      },
      {
        name: "Practice one short loop off-peak",
        text: "Check in, ride a few stops, check out — so Monday peak is not your first validator lesson.",
      },
      {
        name: "Learn boarding etiquette",
        text: "Exit first, clear doors, validate early, and watch stop names before your exit.",
      },
      {
        name: "Compare modes for real corridors",
        text: "Use 9292 to see when tram beats bus or metro — then open Metro, Regional buses or NS trains siblings as needed.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to start tram travel in the Netherlands as an expat",
    description:
      "Orientation steps for expats identifying a city tram operator, choosing OVpay or OV-chipkaart, practising check-in/out, learning boarding etiquette and comparing tram vs bus/metro on live planners.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Do I need an OV-chipkaart to ride Dutch trams?",
      a: "Not always. Many travellers use OVpay (bank card or phone). A personal OV-chipkaart is useful when you want plastic backup, certain products, or account tools. Deepen both options on the OVpay and OV-chipkaart guides.",
    },
    {
      q: "Which operator runs trams in my city?",
      a: "Common examples: GVB in Amsterdam, HTM in The Hague, RET in Rotterdam, U-OV in Utrecht. Confirm the operator named in 9292 for your stop — do not assume every city matches these four.",
    },
    {
      q: "Do I check in and out on trams?",
      a: "Yes for typical OVpay and OV-chipkaart trips: check in when you board and check out when you leave, with the same method. Follow live operator and OVpay rules for transfers.",
    },
    {
      q: "What happens if I forget to check out?",
      a: "You may be charged a maximum-style fare until the trip is corrected. Use the official missed check-out flow for OVpay or OV-chipkaart as soon as you notice. Prevention — tapping at every exit with the same method — is calmer than recovery.",
    },
    {
      q: "When should I take the tram instead of metro or bus?",
      a: "When your corridor is direct, frequent and street-level without awkward transfers. Compare live journeys in 9292. Deepen metro and buses on their sibling guides — this page does not rank modes.",
    },
    {
      q: "Is this the guide for NS trains?",
      a: "No. This page is city trams. Use NS trains for national rail products and commute depth. Getting around covers multimodal orientation.",
    },
    {
      q: "Where do I learn metro or regional buses?",
      a: "Open the Metro and Regional buses sibling guides in this public transport cluster. They will cover underground and bus networks without repeating tram etiquette.",
    },
    {
      q: "Is this legal or financial advice?",
      a: "No. ExpatLife provides general orientation only. Follow GVB, HTM, RET, U-OV, OVpay, OV-chipkaart.nl and planner instructions for tickets, refunds and corrections.",
    },
  ],
  relatedGuidesTips: [
    "Wider mobility → Getting around.",
    "Contactless taps → OVpay.",
    "Personal travel card → OV-chipkaart.",
    "Underground → Metro.",
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
      description: "National rail — separate from city trams.",
    },
    {
      label: "Metro",
      href: METRO_NETHERLANDS_PATH,
      status: "live",
      description: "Underground networks for expats.",
    },
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Bus networks when tram tracks do not go there.",
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
    "Trams is the city surface-rail guide in the Public Transport cluster.",
    "Getting around remains the wider mobility overview.",
    "OVpay covers contactless bank-card and phone travel.",
    "OV-chipkaart covers personal plastic cards and many products.",
    "Metro, Regional buses and NS trains are mode siblings.",
    "Cycling and Bike sharing continue the active-mobility lane.",
  ],
  transportHubCards: [
    {
      label: "Trams",
      href: TRAMS_NETHERLANDS_PATH,
      status: "live",
      description: "City tram travel — you are here.",
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
      label: "Metro",
      href: METRO_NETHERLANDS_PATH,
      status: "live",
      description: "Underground networks — sibling guide.",
    },
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Bus networks — sibling guide.",
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
      label: "Metro",
      href: METRO_NETHERLANDS_PATH,
      status: "live",
      description: "Need underground network depth after trams?",
    },
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Need bus corridors where tracks do not go?",
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
      description: "City-to-city rail after the tram last mile?",
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
    "Underground → Metro.",
    "Buses → Regional buses.",
    "Contactless taps → OVpay.",
    "Plastic and products → OV-chipkaart.",
    "Everyday bikes → Cycling.",
    "Subscription fleets → Bike sharing.",
  ],
  officialSources: [
    {
      label: "GVB — Amsterdam",
      href: "https://www.gvb.nl/en",
      description: "Amsterdam public transport operator orientation",
    },
    {
      label: "HTM — The Hague",
      href: "https://www.htm.nl/en",
      description: "The Hague region tram and bus orientation",
    },
    {
      label: "RET — Rotterdam",
      href: "https://www.ret.nl/en",
      description: "Rotterdam tram, metro and bus orientation",
    },
    {
      label: "U-OV — Utrecht",
      href: "https://www.u-ov.info/en",
      description: "Utrecht public transport orientation",
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
      label: "9292 — journey planner",
      href: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].web,
      description: "Multimodal public-transport journey planning",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Know your city operator.",
        "Learn check-in/out.",
        "Practice boarding etiquette.",
        "Choose tram vs bus/metro.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "City networks.",
        "How to ride.",
        "Etiquette.",
        "When tram wins.",
        "City examples.",
        "Sibling modes.",
      ],
    },
    networks: {
      title: "From the visual — network cues",
      items: [
        "Amsterdam GVB.",
        "The Hague HTM.",
        "Rotterdam RET.",
        "Utrecht U-OV.",
      ],
    },
    howToRide: {
      title: "From the visual — ride cues",
      items: [
        "Board calmly.",
        "Check in.",
        "Ride.",
        "Check out same method.",
      ],
    },
    etiquette: {
      title: "From the visual — etiquette cues",
      items: [
        "Exit first.",
        "Clear doors.",
        "Validate early.",
        "Priority space.",
      ],
    },
    whenTramWins: {
      title: "From the visual — mode cues",
      items: [
        "Tram for direct surface.",
        "Metro for longer spines.",
        "Bus for gaps.",
        "Compare live in 9292.",
      ],
    },
    cityExamples: {
      title: "From the visual — city cues",
      items: [
        "Amsterdam.",
        "The Hague.",
        "Rotterdam.",
        "Utrecht.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "First week arrival.",
        "Daily neighbourhood commute.",
        "Short visitor.",
        "Metro-first + occasional tram.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "Missed checkout.",
        "Mixed methods.",
        "NS confusion.",
        "Door blocking.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Operator known.",
        "Pay method chosen.",
        "Loop practiced.",
        "Siblings opened.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general public-transport orientation for newcomers. It is not legal, financial or product advice. Line maps, fares, tap rules and operator apps change — always confirm on GVB, HTM, RET, U-OV, OVpay and OV-chipkaart.nl before you travel.",
} as const;

export type TramsNetherlandsPage = typeof tramsNetherlandsPage;

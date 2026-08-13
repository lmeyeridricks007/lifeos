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
const VISUAL_PREFIX = "metro-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const metroNetherlandsPage = {
  slug: "metro-netherlands",
  path: METRO_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(METRO_NETHERLANDS_PATH) ?? "2026-09-10",
  seo: {
    title: "Metro in the Netherlands | Complete Guide for Expats",
    description:
      "How metro and rapid transit works for expats in the Netherlands: Amsterdam GVB and Rotterdam RET orientation, tickets via OVpay or OV-chipkaart, peak tips, NS interchange and when metro beats tram or bus.",
    keywords: [
      "metro Netherlands",
      "Amsterdam metro GVB",
      "Rotterdam metro RET",
      "Dutch metro check in",
      "OV-chipkaart metro",
      "OVpay metro",
      "metro peak hours Netherlands",
      "NS metro interchange",
      "public transport Netherlands metro",
      "expat metro travel",
      "when to take metro vs tram",
      "rapid transit Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Public transport",
    pageTitle: "Metro in the Netherlands",
    subtitle:
      "Rapid transit for expats: how Amsterdam and Rotterdam metro networks work, tickets via OVpay or OV-chipkaart, peak tips, NS interchange, and when metro beats tram or bus — orientation, not a full city guide.",
    primaryCta: { label: "How tickets work", href: "#tickets" },
    secondaryCta: { label: "Metro checklist", href: "#checklist" },
    chips: ["AMS / RTM networks", "OVpay / chipkaart", "Peak tips", "NS interchange", "Vs tram/bus"],
    disclaimer:
      "General orientation only — not legal, financial or product advice and not a substitute for GVB, RET, OVpay, OV-chipkaart.nl or NS terms. Lines, fares and tap rules change. Verify current steps on official operator pages before you travel.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch metro station platform: multicultural expat checking a journey planner beside a modern metro train under soft daylight, tiled station architecture and reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#networks", label: "Networks" },
    { href: "#tickets", label: "Tickets" },
    { href: "#peak-tips", label: "Peak tips" },
    { href: "#ns-interchange", label: "NS interchange" },
    { href: "#when-metro-wins", label: "When metro wins" },
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
      "Premium orientation board titled Metro After Arrival — four building blocks: know AMS or RTM network, learn OVpay or chipkaart taps, practice peak habits, plan NS interchange — Travel File Checklist rail on the right, Dutch metro skyline and ExpatLife brand footer.",
      "Four habits cover most metro questions: network, taps, peak calm, and NS transfers."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of metro in the Netherlands — networks, tickets, peak tips, NS interchange, when metro wins, sibling links — Dutch metro band and ExpatLife brand footer.",
      "Six building blocks explain almost every metro question for newcomers."
    ),
    networks: visual(
      "networks",
      "Premium metro network orientation board — Amsterdam GVB metro and Rotterdam RET metro cards with light city cues — desk scene with journey planner phone, General information only rail, Dutch skyline and ExpatLife brand footer.",
      "Metro is city rapid transit — primarily Amsterdam GVB and Rotterdam RET."
    ),
    tickets: visual(
      "tickets",
      "Premium metro tickets board — check in at gates or validators with OVpay or OV-chipkaart, ride, check out same method — Dutch metro gate scene without fake logos, Same method every leg checklist rail and ExpatLife brand footer.",
      "One payment method per leg — check in and check out on every metro trip."
    ),
    peakTips: visual(
      "peak-tips",
      "Premium peak-hour metro board — leave buffer, stand clear of doors, know your exit, check disruptions — calm Dutch platform scene with Peak notes rail and ExpatLife brand footer.",
      "Peak metro weeks stay calmer with buffers, door discipline and live planner checks."
    ),
    nsInterchange: visual(
      "ns-interchange",
      "Premium NS interchange board — metro last mile into NS stations, follow signs, allow transfer time, same OV tap layer — Dutch station hall scene with Transfer checklist rail and ExpatLife brand footer.",
      "Metro often feeds NS stations — plan walking time and tap rules, not folklore."
    ),
    whenMetroWins: visual(
      "when-metro-wins",
      "Premium decide board — metro vs tram vs bus with spine speed, transfer friction and surface access cues — Dutch multimodal desk with Mode choice rail, canal skyline and ExpatLife brand footer.",
      "Metro wins on longer underground spines when transfers stay simple."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first week in AMS or RTM, daily metro commute, weekend visitor, tram-first week with occasional metro — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match stay length and corridor pattern to metro habits instead of copying a colleague."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — forgetting checkout, mixing payment methods, treating metro as NS, rushing peak doors, ignoring planner apps — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is tap discipline and mode confusion — not finding the platform."
    ),
    checklist: visual(
      "checklist",
      "Premium metro readiness checklist clipboard — network known, pay method chosen, check-in/out practiced, peak notes, NS transfer practiced, sibling guides opened — Dutch kitchen table with metro light and ExpatLife brand footer.",
      "Use this checklist so your first busy metro week stays intentional."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "OVpay / card", note: "Learn gates first" },
    { label: "Must do", value: "Check in + out", note: "Every metro leg" },
    { label: "Know", value: "AMS / RTM", note: "GVB or RET metro" },
    { label: "Sibling", value: "Trams & NS", note: "Cluster guides" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Metro in the Netherlands is rapid transit — primarily Amsterdam (GVB) and Rotterdam (RET). For expats it is less about memorising every line colour and more about knowing your network, checking in and out with one payment method, staying calm in peak hours, and planning transfers to NS trains.",
    "Getting around is the wider mobility mental model. OVpay and OV-chipkaart deepen tap mechanics. NS trains covers national rail. Trams and regional buses are siblings for surface networks. This page stays on metro / rapid transit for expats — with AMS and RTM orientation, not a full city guide.",
  ],
  introHighlights: [
    "Identify whether your city uses Amsterdam GVB or Rotterdam RET metro before memorising line maps.",
    "Check in and check out on every metro leg with one consistent method (OVpay or OV-chipkaart).",
    "Leave peak buffers, stand clear of doors, and know your exit before the train arrives.",
    "Open Trams, Regional buses and NS trains siblings when the trip leaves the metro network.",
  ],
  orientationFlowSteps: [
    "Confirm your metro operator (GVB Amsterdam or RET Rotterdam) and install a planner (9292 or operator app).",
    "Choose a first payment path: OVpay or personal OV-chipkaart.",
    "Practice one short check-in / ride / check-out loop off-peak, including gates if your station uses them.",
    "Learn peak habits, then practice one NS interchange walk before Monday morning.",
  ],
  travelFileChecklist: [
    "Metro operator written down (GVB / RET)",
    "9292 or operator planner installed",
    "Primary pay method chosen (OVpay / OV-chipkaart)",
    "Same-method check-out habit practiced at gates or validators",
    "Peak buffer and exit notes reviewed",
    "One NS interchange walk practiced off-peak",
    "Sibling guides opened: Getting around, OVpay, OV-chipkaart, Trams, Regional buses, NS trains",
  ],
  introScenarios: [
    {
      situation: "New arrival in Amsterdam or Rotterdam with a metro corridor",
      approach: "OVpay or personal OV-chipkaart plus 9292 usually covers first metro weeks without memorising every line.",
      firstStep: "Practice one short off-peak loop through the gates, then read networks and tickets.",
    },
    {
      situation: "Daily metro commute already proven",
      approach: "Keep tap discipline; deepen peak buffers and NS transfers only where your corridor needs them.",
      firstStep: "Confirm check-in/out habit, then open peak tips and NS interchange.",
    },
    {
      situation: "Mostly tram or bike, occasional metro hop",
      approach: "Same OVpay/chipkaart method across modes — treat metro as a spine leg when it wins live comparisons.",
      firstStep: "Keep Getting around open for multimodal weeks; use this page for metro-only depth.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Getting around remains the multimodal overview for bikes, modes and apps.",
    "OVpay deepens contactless bank-card and phone taps.",
    "OV-chipkaart deepens personal cards, top-up and many products.",
    "Trams and regional buses are siblings — not covered as deep-dives here.",
    "NS trains is national rail — metro often feeds major stations.",
  ],
  quickAnswer: {
    heading: "Metro in one minute",
    summary:
      "Dutch metro / rapid transit is strongest in Amsterdam (GVB) and Rotterdam (RET). Expats usually travel with OVpay (bank card or phone) or a personal OV-chipkaart: check in at gates or validators and check out with the same method. Peak hours need buffers and door discipline. Metro often beats tram or bus on longer underground spines — and often connects into NS stations for city-to-city legs. Use Getting around for multimodal stitching; OVpay and OV-chipkaart for taps; Trams, Regional buses and NS trains for sibling modes.",
    bullets: [
      "Know GVB (Amsterdam) or RET (Rotterdam) before memorising lines.",
      "Check in and out on every metro leg with one consistent method.",
      "Peak: leave buffer, clear doors, know your exit.",
      "Metro vs tram/bus is corridor-specific — verify live journeys in 9292.",
    ],
    note: "Getting around, OVpay, OV-chipkaart, Trams, Regional buses and NS trains are siblings — use them for multimodal overview, taps and other modes.",
  },
  snapshotCards: [
    {
      title: "Networks",
      body: "Amsterdam GVB and Rotterdam RET metro — city rapid transit.",
    },
    {
      title: "Tickets",
      body: "Check in/out with OVpay or OV-chipkaart on every leg.",
    },
    {
      title: "Peak tips",
      body: "Buffers, door discipline and exit awareness on busy platforms.",
    },
    {
      title: "NS interchange",
      body: "Metro last mile into major stations — plan walking time.",
    },
    {
      title: "When metro wins",
      body: "Longer spines with fewer transfers beat surface zigzagging.",
    },
    {
      title: "Sibling modes",
      body: "Trams, buses and NS trains deepen elsewhere in the cluster.",
    },
  ],
  networks: {
    heading: "How metro networks work (Amsterdam & Rotterdam)",
    intro:
      "Metro in the Netherlands is city rapid transit. The two networks expats meet most often are Amsterdam GVB metro and Rotterdam RET metro. The same OV ticketing layer (OVpay / OV-chipkaart) often works across them, but line maps, gate rules and disruption notices belong to the local operator.",
    paragraphs: [
      "This guide does not replace live planners, does not rank operators, and does not teach tram or regional-bus deep-dives. For contactless taps and personal cards, open OVpay and OV-chipkaart. For surface networks, open Trams and Regional buses siblings. For national rail after the metro last mile, open NS trains.",
      "Other Dutch cities may rely more on tram, bus or light rail than metro — always confirm the mode named in 9292 for your stop. This page stays oriented on AMS and RTM metro patterns.",
    ],
    rows: [
      {
        topic: "Amsterdam — GVB metro",
        whatToCheck: "Underground / elevated metro spines plus transfers to tram and NS.",
        tip: "Operator apps + 9292 for live disruptions and gate stations.",
      },
      {
        topic: "Rotterdam — RET metro",
        whatToCheck: "Strong metro spine with tram and bus as surface complements.",
        tip: "Mode choice often metro vs tram — see when-metro-wins.",
      },
      {
        topic: "Gates vs validators",
        whatToCheck: "Some stations use fare gates; others use platform validators.",
        tip: "Follow station cues — do not assume every stop looks the same.",
      },
      {
        topic: "Not NS trains",
        whatToCheck: "Metro is city rapid transit; NS is national rail.",
        tip: "Use NS trains sibling for intercity products and commute depth.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "City, not national",
        body: "Metro is GVB / RET rapid transit — NS trains is the national rail sibling.",
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
        label: "Trams",
        href: TRAMS_NETHERLANDS_PATH,
        status: "live",
        description: "Surface tram networks — sibling deep-dive.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "National rail after the metro last mile.",
      },
    ] satisfies TransportLink[],
  },
  tickets: {
    heading: "Tickets: OVpay and OV-chipkaart",
    intro:
      "Most metro trips use OVpay (bank card or phone) or a personal OV-chipkaart. Check in at the gate or validator when you enter and check out when you leave — with the same method.",
    paragraphs: [
      "Amsterdam and Rotterdam stations may mix gates and open validators. If you transfer between modes, follow live operator and OVpay rules — do not assume every transfer is one continuous open trip. Mixing phone check-in with plastic check-out creates support chaos.",
    ],
    steps: [
      {
        phase: "Plan",
        timing: "Before you leave",
        detail: "Confirm live departures and station access in 9292 or the operator app.",
      },
      {
        phase: "Enter + check in",
        timing: "At the gate / validator",
        detail: "Tap OVpay or OV-chipkaart and wait for confirmation before you walk through.",
      },
      {
        phase: "Ride",
        timing: "On board",
        detail: "Keep the same payment method available for inspection or exit taps.",
      },
      {
        phase: "Exit + check out",
        timing: "At your station",
        detail: "Tap out with the same method at the gate or validator before you leave the paid area.",
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
        title: "Confirm the beep",
        body: "Wait for validator or gate confirmation before you walk away.",
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
  peakTips: {
    heading: "Peak tips for calmer metro weeks",
    intro:
      "Dutch metro peaks are dense but predictable. A few shared habits prevent missed trains, blocked doors and stressful transfers.",
    paragraphs: [
      "Leave a buffer for gate queues and walking between platforms. Stand clear so others can exit first. Know your exit name before the train arrives. Check 9292 or operator apps on wet, event or strike-rumour mornings. This is orientation — local norms vary by line and time of day.",
    ],
    rows: [
      {
        topic: "Time buffer",
        whatToCheck: "Gate queues and platform walks on your corridor.",
        tip: "Rushing creates door delays and missed check-outs.",
      },
      {
        topic: "Doors and aisles",
        whatToCheck: "Bags and prams clear of hinges.",
        tip: "Step aside until the doorway clears, then board.",
      },
      {
        topic: "Know your exit",
        whatToCheck: "Station name and preferred exit before arrival.",
        tip: "Prepare early so you are not blocking the aisle.",
      },
      {
        topic: "Live disruptions",
        whatToCheck: "9292 or operator notices before you leave home.",
        tip: "Peak diversions feel personal without a planner.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Exit first",
        body: "Let passengers leave fully before you step on — same calm rule as trams.",
      },
      {
        title: "Standing is normal",
        body: "Rush-hour standing room is expected — pack light when you can.",
      },
      {
        title: "Transfer patience",
        body: "NS or tram changes need walking time — do not cut it to zero.",
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
        label: "Trams",
        href: TRAMS_NETHERLANDS_PATH,
        status: "live",
        description: "Surface boarding habits — sibling guide.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Peak national-rail orientation after metro.",
      },
    ] satisfies TransportLink[],
  },
  nsInterchange: {
    heading: "Interchange with NS trains",
    intro:
      "Many expat weeks combine metro last mile with NS national rail. The calm pattern is: follow station signs, allow walking time, and keep one OV payment method ready for each open trip.",
    paragraphs: [
      "Central stations in Amsterdam and Rotterdam mix metro, tram, bus and NS platforms. Signs and walking distances matter more than line colours. Tap rules can differ when you leave metro paid areas and enter NS — follow live OVpay, OV-chipkaart and NS guidance instead of WhatsApp folklore.",
    ],
    rows: [
      {
        topic: "Follow signs",
        whatToCheck: "Metro → NS wayfinding in the station hall.",
        tip: "Screenshots of old maps age poorly — trust live signs.",
      },
      {
        topic: "Walking time",
        whatToCheck: "Platform-to-platform minutes on your real OD pair.",
        tip: "Add buffer on first attempts; shorten later.",
      },
      {
        topic: "Tap discipline",
        whatToCheck: "Whether you must check out of metro before NS.",
        tip: "Verify with OVpay / operator / NS rules — do not guess.",
      },
      {
        topic: "Disruptions",
        whatToCheck: "Both metro and NS notices on the same morning.",
        tip: "9292 stitches multimodal alternatives faster than forums.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Last mile, not NS deep-dive",
        body: "This page covers metro → NS orientation. Ticket products live on the NS trains guide.",
      },
      {
        title: "Practice once off-peak",
        body: "Walk your transfer before Monday peak so the route feels familiar.",
      },
      {
        title: "Same payment layer",
        body: "OVpay or chipkaart often covers both — deepen mechanics on sibling guides.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "National rail products and commute depth.",
      },
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless taps across modes.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider multimodal commuting model.",
      },
    ] satisfies TransportLink[],
  },
  whenMetroWins: {
    heading: "When metro beats tram or bus",
    intro:
      "Mode choice is corridor-specific. Metro often wins for longer underground spines with fewer transfers — not because it is always fastest door-to-door.",
    paragraphs: [
      "Trams often win for frequent surface corridors with short walks. Buses fill gaps where metro and tram do not go. Bikes still dominate many short Dutch trips. Use 9292 live comparisons for your real home–work path instead of forum folklore. Deepen tram and bus mechanics on sibling guides.",
    ],
    rows: [
      {
        topic: "Metro often wins",
        whatToCheck: "Longer spines, fewer surface stops, peak reliability.",
        tip: "Underground speed with simple transfers.",
      },
      {
        topic: "Tram often wins",
        whatToCheck: "Direct surface corridor, high frequency, short walks.",
        tip: "Open the Trams sibling for depth.",
      },
      {
        topic: "Bus often wins",
        whatToCheck: "Neighbourhoods without metro or tram tracks, or late coverage.",
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
        body: "9292 door-to-door times beat static “metro is always better” advice.",
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
        label: "Trams",
        href: TRAMS_NETHERLANDS_PATH,
        status: "live",
        description: "When surface corridors fit better.",
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
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Transport tools to explore",
    subtitle:
      "Soft CTAs for established Dutch mobility options when your week runs on metro. This block is not a ranking of operators, tickets or apps.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a metro week — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-metro-support-providers",
    analyticsPageContext: "metro-netherlands-recommended-options",
    categoryLinks: [
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: OVPAY_NETHERLANDS_PATH, label: "OVpay" },
      { href: OV_CHIPKAART_NETHERLANDS_PATH, label: "OV-chipkaart" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat metro scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First week in Amsterdam or Rotterdam, Dutch debit card ready",
        approach: "OVpay pay-as-you-go plus 9292 usually covers learning weeks.",
        firstStep: "Practice one short off-peak loop through gates, then install a planner.",
      },
      {
        situation: "Daily metro commute on a spine corridor",
        approach: "Keep one payment method, peak buffers and a practiced NS transfer if needed.",
        firstStep: "Confirm tickets and peak tips, then open NS interchange.",
      },
      {
        situation: "Weekend visitor for 5–10 days",
        approach: "OVpay or chipkaart for a few metro days — skip memorising full maps.",
        firstStep: "Learn check-in/out and exit-first boarding.",
      },
      {
        situation: "Tram-first week with occasional metro hops",
        approach: "Same tap method across modes; use this page for underground-leg habits.",
        firstStep: "Open Trams sibling for surface depth; keep metro tickets and peak tips here.",
      },
      {
        situation: "Considering bikes vs more metro",
        approach: "Bikes for short dry trips; metro for rain, luggage and longer spines.",
        firstStep: "Finish metro setup here, then open Getting around for bike-first weeks.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Forgetting to check out",
      body: "Open metro trips trigger maximum-fare style charges and stressful corrections.",
      advice: "Build an exit-tap habit with the same method and fix the same day if you miss one.",
    },
    {
      title: "Mixing payment methods mid-leg",
      body: "Phone check-in with plastic check-out creates support chaos.",
      advice: "Finish the open trip with the same method you started.",
    },
    {
      title: "Treating metro as NS trains",
      body: "City rapid transit differs from national rail products and habits.",
      advice: "Use NS trains for rail depth; keep this page for metro last mile and spines.",
    },
    {
      title: "Rushing peak doors",
      body: "Boarding before people exit delays everyone and raises tension.",
      advice: "Let the doorway clear, then board — leave a peak buffer.",
    },
    {
      title: "Ignoring operator / 9292 apps",
      body: "Without live disruptions, diversions feel like personal failure.",
      advice: "Check the planner before you leave on wet or strike-rumour days.",
    },
    {
      title: "Assuming metro always beats tram",
      body: "Corridor maths differ — especially when transfers stack up.",
      advice: "Compare live journeys; deepen tram on the sibling guide.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Metro readiness checklist",
    intro: "Use this before your first busy metro week in Amsterdam or Rotterdam.",
    items: [
      "Metro operator confirmed (GVB Amsterdam / RET Rotterdam)",
      "Primary pay method chosen (OVpay / OV-chipkaart)",
      "One full check-in / ride / check-out loop practiced off-peak",
      "Peak buffer and exit notes reviewed",
      "9292 or operator planner installed for disruptions",
      "One NS interchange walk practiced if your commute needs it",
      "Home–work corridor compared once vs tram/bus in the planner",
      "Sibling guides opened: Getting around, OVpay, OV-chipkaart, Trams, Regional buses, NS trains",
    ],
  },
  howTo: {
    heading: "How to start metro travel calmly as an expat",
    steps: [
      {
        name: "Name your network",
        text: "Confirm whether you will use Amsterdam GVB metro, Rotterdam RET metro, or mainly other modes — write the operator down.",
      },
      {
        name: "Choose a first payment path",
        text: "Prefer OVpay or a personal OV-chipkaart so check-in/out works across everyday OV legs.",
      },
      {
        name: "Practice one short loop off-peak",
        text: "Check in at a gate or validator, ride a few stops, check out — so Monday peak is not your first lesson.",
      },
      {
        name: "Learn peak and transfer habits",
        text: "Leave buffers, clear doors, know your exit, and walk one NS interchange if your corridor needs it.",
      },
      {
        name: "Compare modes for real corridors",
        text: "Use 9292 to see when metro beats tram or bus — then open Trams, Regional buses or NS trains siblings as needed.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to start metro travel in the Netherlands as an expat",
    description:
      "Orientation steps for expats identifying Amsterdam or Rotterdam metro networks, choosing OVpay or OV-chipkaart, practising check-in/out, learning peak habits and NS interchange, and comparing metro vs tram/bus on live planners.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Do I need an OV-chipkaart to ride Dutch metro?",
      a: "Not always. Many travellers use OVpay (bank card or phone). A personal OV-chipkaart is useful when you want plastic backup, certain products, or account tools. Deepen both options on the OVpay and OV-chipkaart guides.",
    },
    {
      q: "Which cities have metro networks?",
      a: "Expats most often meet Amsterdam GVB metro and Rotterdam RET metro. Other cities may rely more on tram, bus or light rail. Confirm the mode named in 9292 for your stop.",
    },
    {
      q: "Do I check in and out on metro?",
      a: "Yes for typical OVpay and OV-chipkaart trips: check in when you enter and check out when you leave, with the same method. Some stations use gates; others use validators. Follow live operator and OVpay rules for transfers.",
    },
    {
      q: "What happens if I forget to check out?",
      a: "You may be charged a maximum-style fare until the trip is corrected. Use the official missed check-out flow for OVpay or OV-chipkaart as soon as you notice. Prevention — tapping at every exit with the same method — is calmer than recovery.",
    },
    {
      q: "When should I take the metro instead of tram or bus?",
      a: "When your corridor is a longer spine with fewer awkward transfers. Compare live journeys in 9292. Deepen tram and buses on their sibling guides — this page does not rank modes.",
    },
    {
      q: "How does metro connect to NS trains?",
      a: "Many central stations combine metro last mile with NS platforms. Follow signs, allow walking time, and verify tap rules. Use the NS trains guide for national rail products.",
    },
    {
      q: "Where do I learn trams or regional buses?",
      a: "Open the Trams and Regional buses sibling guides in this public transport cluster. They cover surface networks without repeating metro gate habits.",
    },
    {
      q: "Is this legal or financial advice?",
      a: "No. ExpatLife provides general orientation only. Follow GVB, RET, OVpay, OV-chipkaart.nl, NS and planner instructions for tickets, refunds and corrections.",
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
      description: "National rail — metro often feeds major stations.",
    },
    {
      label: "Trams",
      href: TRAMS_NETHERLANDS_PATH,
      status: "live",
      description: "City tram travel for expats.",
    },
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Bus networks when metro spines do not go there.",
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
    "Metro is the rapid-transit guide in the Public Transport cluster.",
    "Getting around remains the wider mobility overview.",
    "OVpay covers contactless bank-card and phone travel.",
    "OV-chipkaart covers personal plastic cards and many products.",
    "Trams, Regional buses and NS trains are mode siblings.",
    "Cycling and Bike sharing continue the active-mobility lane.",
  ],
  transportHubCards: [
    {
      label: "Metro",
      href: METRO_NETHERLANDS_PATH,
      status: "live",
      description: "Metro / rapid transit — you are here.",
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
      label: "Trams",
      href: TRAMS_NETHERLANDS_PATH,
      status: "live",
      description: "Need surface tram depth after metro?",
    },
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Need bus corridors where metro does not go?",
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
      description: "City-to-city rail after the metro last mile?",
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
      description: "Amsterdam public transport operator orientation including metro",
    },
    {
      label: "RET — Rotterdam",
      href: "https://www.ret.nl/en",
      description: "Rotterdam metro, tram and bus orientation",
    },
    {
      label: "NS — Dutch Railways",
      href: "https://www.ns.nl/en",
      description: "National rail orientation for metro interchange trips",
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
        "Know AMS or RTM network.",
        "Learn OVpay or chipkaart taps.",
        "Practice peak habits.",
        "Plan NS interchange.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Networks.",
        "Tickets.",
        "Peak tips.",
        "NS interchange.",
        "When metro wins.",
        "Sibling modes.",
      ],
    },
    networks: {
      title: "From the visual — network cues",
      items: [
        "Amsterdam GVB metro.",
        "Rotterdam RET metro.",
        "Gates vs validators.",
        "Not NS trains.",
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
    peakTips: {
      title: "From the visual — peak cues",
      items: [
        "Time buffer.",
        "Clear doors.",
        "Know your exit.",
        "Check disruptions.",
      ],
    },
    nsInterchange: {
      title: "From the visual — interchange cues",
      items: [
        "Follow signs.",
        "Allow walking time.",
        "Tap discipline.",
        "Check both notices.",
      ],
    },
    whenMetroWins: {
      title: "From the visual — mode cues",
      items: [
        "Metro for longer spines.",
        "Tram for direct surface.",
        "Bus for gaps.",
        "Compare live in 9292.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "First week AMS / RTM.",
        "Daily metro commute.",
        "Short visitor.",
        "Tram-first + occasional metro.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "Missed checkout.",
        "Mixed methods.",
        "NS confusion.",
        "Peak door rushing.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Network known.",
        "Pay method chosen.",
        "Loop practiced.",
        "Siblings opened.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general public-transport orientation for newcomers. It is not legal, financial or product advice. Line maps, fares, tap rules and operator apps change — always confirm on GVB, RET, OVpay, OV-chipkaart.nl and NS before you travel.",
} as const;

export type MetroNetherlandsPage = typeof metroNetherlandsPage;

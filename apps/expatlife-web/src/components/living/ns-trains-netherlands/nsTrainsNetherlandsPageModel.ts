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
  TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  TRAMS_NETHERLANDS_PATH,
  WEEKEND_TRAVEL_NETHERLANDS_PATH,
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
const VISUAL_PREFIX = "ns-trains-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const nsTrainsNetherlandsPage = {
  slug: "ns-trains-netherlands",
  path: NS_TRAINS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(NS_TRAINS_NETHERLANDS_PATH) ?? "2026-09-07",
  seo: {
    title: "NS Trains in the Netherlands | Complete Guide for Expats",
    description:
      "How NS train travel works for expats: ticket types (single, Flex, season), buying via app, machine, OVpay or OV-chipkaart, peak orientation, and first-week commute tips.",
    keywords: [
      "NS trains Netherlands",
      "NS train tickets expats",
      "NS Flex Netherlands",
      "Dutch train tickets",
      "NS season ticket",
      "train commute Netherlands",
      "buy NS ticket",
      "NS app Netherlands",
      "peak hours Dutch trains",
      "NS International",
      "public transport Netherlands trains",
      "Randstad train commute",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Public transport",
    pageTitle: "NS trains in the Netherlands",
    subtitle:
      "Dutch Railways for everyday expat travel: ticket types (single, Flex, season), how to buy via app, machine, OVpay or OV-chipkaart, peak-hour orientation, and calm first-week commute habits — without turning into a metro/tram deep-dive.",
    primaryCta: { label: "Ticket types", href: "#ticket-types" },
    secondaryCta: { label: "NS trains checklist", href: "#checklist" },
    chips: ["Ticket types", "How to buy", "Peak hours", "First week", "Vs local OV"],
    disclaimer:
      "General orientation only — not legal, financial or product advice and not a substitute for NS, OVpay, OV-chipkaart.nl or local operator terms. Fares, peak rules and products change. Verify current steps on official NS pages before you travel or subscribe.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch intercity platform: multicultural expat with backpack beside a yellow-blue NS-style train under soft daylight, bikes and station canopy, reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what-it-is", label: "What NS is" },
    { href: "#ticket-types", label: "Ticket types" },
    { href: "#how-to-buy", label: "How to buy" },
    { href: "#peak-hours", label: "Peak hours" },
    { href: "#first-week", label: "First week" },
    { href: "#ns-international", label: "NS International" },
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
      "Premium orientation board titled NS Trains After Arrival — four building blocks: know NS vs city OV, choose ticket type, learn how to buy, practice first-week commute — Travel File Checklist rail on the right, Dutch canal and station skyline and ExpatLife brand footer.",
      "Four habits cover most NS questions: network role, ticket type, purchase path, and commute rhythm."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of NS trains in the Netherlands — what NS is, ticket types, how to buy, peak hours, first-week tips, NS International boundary — Dutch rail band and ExpatLife brand footer.",
      "Six building blocks explain almost every NS train question for newcomers."
    ),
    whatItIs: visual(
      "what-it-is",
      "Premium ecosystem diagram — NS intercity and sprinter trains linking cities, with tram metro bus as last-mile siblings — desk scene with journey planner phone and Dutch station props, General information only rail.",
      "NS is the national rail backbone — Getting around covers multimodal stitching with local OV."
    ),
    ticketTypes: visual(
      "ticket-types",
      "Premium ticket comparison board — single / e-ticket, pay-as-you-go via OVpay or chipkaart, NS Flex-style subscriptions, season tickets — calm Dutch desk with ticket mocks and Verify before you buy rail.",
      "Match stay length and weekly pattern to ticket type before you lock a product."
    ),
    howToBuy: visual(
      "how-to-buy",
      "Premium buy map — NS app, station machines, OVpay bank-card tap, personal OV-chipkaart — Dutch hall without fake logos, checklist rail for payment method notes.",
      "Buy where it is calm — app, machine and contactless all work when you know which trip type you need."
    ),
    peakHours: visual(
      "peak-hours",
      "Premium peak orientation timeline — weekday morning and evening rush bands, off-peak windows, when products change the maths — Dutch commute calendar without fake savings claims.",
      "Peak rules affect some products — verify current NS definitions before you budget."
    ),
    firstWeek: visual(
      "first-week",
      "Premium first-week commute board — home to station bike or walk, check-in, train, check-out, last mile — Dutch kitchen-table phone scene with First week checklist rail.",
      "Practice one full corridor off-peak before Monday morning."
    ),
    nsInternational: visual(
      "ns-international",
      "Premium boundary board — domestic NS vs NS International / cross-border — when to deepen elsewhere, passport and reservation cues — Dutch border-station scene with Boundary notes rail.",
      "NS International is a light boundary here — domestic commuting stays the focus."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first week arrival, daily Randstad commute, weekend visitor, hybrid OV plus occasional car — first-step arrows and Dutch skyline band.",
      "Match stay length and commute rhythm to ticket path instead of copying a colleague."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — buying season tickets too early, forgetting checkout, confusing peak rules, treating metro as NS — Fix notes beside each card.",
      "Most friction is product timing and tap discipline — not finding the NS website."
    ),
    checklist: visual(
      "checklist",
      "Premium NS trains readiness checklist clipboard — ticket type chosen, buy path tested, peak notes checked, first corridor practiced, siblings opened — Dutch kitchen table with canal light.",
      "Use this checklist so your first busy rail week stays intentional."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "Pay-as-you-go", note: "Learn your week" },
    { label: "Must do", value: "Check in + out", note: "Every rail leg" },
    { label: "Later", value: "Flex / season", note: "Stable pattern first" },
    { label: "Sibling", value: "OVpay & card", note: "Cluster guides" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "NS (Nederlandse Spoorwegen) runs most of the Dutch national train network — the backbone for city-to-city and many suburban commutes. For expats it is less about memorising every product name and more about choosing how to pay, closing every trip, and waiting until your weekly pattern is stable before locking a subscription.",
    "Getting around is the wider mobility mental model (bikes, tram, metro, multimodal). OVpay covers contactless bank-card and phone travel. OV-chipkaart deepens the personal plastic card. This page stays on NS train travel for expats — not metro/tram deep-dives and not driving.",
  ],
  introHighlights: [
    "Start pay-as-you-go until your commute corridor and days-per-week are clear.",
    "Check in and check out on every rail leg — missed checkouts create expensive surprises.",
    "Treat peak-hour rules as orientation — verify current NS definitions before you budget.",
    "Open OVpay and OV-chipkaart when you need tap mechanics or personal-card products.",
  ],
  orientationFlowSteps: [
    "Install the NS app and confirm your home–work corridor on a calm day.",
    "Choose a first payment path: OVpay, OV-chipkaart or a single e-ticket.",
    "Practice one full check-in / train / check-out loop off-peak.",
    "Only compare Flex or season tickets after two stable commute weeks.",
  ],
  travelFileChecklist: [
    "Home–work corridor written down",
    "NS app installed and English set",
    "Primary pay method chosen (OVpay / chipkaart / e-ticket)",
    "Same-method check-out habit practiced",
    "Peak / off-peak notes checked on NS.nl",
    "Subscription decision deferred until pattern is stable",
    "Last-mile plan (bike, walk, local OV) noted",
    "Sibling guides opened: Getting around, OVpay, OV-chipkaart",
  ],
  introScenarios: [
    {
      situation: "New arrival, first Randstad commute week",
      approach: "Pay-as-you-go via OVpay or personal OV-chipkaart usually beats buying a season ticket on day one.",
      firstStep: "Practice one off-peak loop, then read ticket types before you lock anything.",
    },
    {
      situation: "Stable 4–5 day rail commute already proven",
      approach: "Compare Flex-style and season options on official NS pages once your pattern is clear.",
      firstStep: "Collect two weeks of trip history, then open ticket types and recommended tools.",
    },
    {
      situation: "Mostly bikes and city OV, occasional long train",
      approach: "Single tickets or contactless pay-as-you-go — skip season products until trains dominate your week.",
      firstStep: "Keep Getting around open for multimodal weeks; use this page for rail-only depth.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Getting around remains the multimodal overview for bikes, modes and apps.",
    "OVpay deepens contactless bank-card and phone taps.",
    "OV-chipkaart deepens personal cards, top-up and many subscriptions.",
    "Car sharing is optional when OV is not enough — not a substitute for this rail guide.",
  ],
  quickAnswer: {
    heading: "NS trains in one minute",
    summary:
      "NS runs the main Dutch train network for city-to-city and many suburban trips. Expats usually start with pay-as-you-go — OVpay (bank card or phone), a personal OV-chipkaart, or a single e-ticket from the NS app or station machine. You check in at the start of a rail trip and check out at the end. After your weekly pattern is stable, compare NS Flex-style subscriptions and season tickets on official NS pages. Peak and off-peak rules can change the maths for some products — verify current definitions. Use Getting around for tram/metro/bike stitching; use OVpay and OV-chipkaart for tap and card depth.",
    bullets: [
      "Pay-as-you-go first; subscriptions after your week is stable.",
      "Check in and out on every rail leg with one consistent method.",
      "App, machine, OVpay and chipkaart are all valid buy/travel paths.",
      "Peak rules and Flex/season products need live NS confirmation — not forum folklore.",
    ],
    note: "Getting around, OVpay and OV-chipkaart are siblings — use them for multimodal overview, contactless travel and personal cards.",
  },
  snapshotCards: [
    {
      title: "What NS is",
      body: "National rail backbone for intercity and many sprinter / suburban trips.",
    },
    {
      title: "Ticket types",
      body: "Single / e-ticket, pay-as-you-go, Flex-style options and season tickets.",
    },
    {
      title: "How to buy",
      body: "NS app, station machines, OVpay taps or personal OV-chipkaart.",
    },
    {
      title: "Peak hours",
      body: "Weekday rush bands affect some products — verify current NS windows.",
    },
    {
      title: "First week",
      body: "Practice one corridor off-peak before Monday morning.",
    },
    {
      title: "NS International",
      body: "Cross-border boundary only — domestic commuting stays here.",
    },
  ],
  whatItIs: {
    heading: "What NS trains are (and are not)",
    intro:
      "NS is the main national railway operator for passenger trains in the Netherlands. Most expat commuting questions about Intercity and Sprinter services land here.",
    paragraphs: [
      "This guide does not replace live NS journey planners, does not rank train products, and does not teach driving. For tram, metro, bus and bike-first weeks, stay linked to Getting around. For contactless taps and personal cards, open OVpay and OV-chipkaart.",
      "Regional operators and city OV still matter for last-mile hops. NS International covers many cross-border journeys — treated lightly below as a boundary, not a deep-dive.",
    ],
    rows: [
      {
        topic: "NS domestic trains",
        whatToCheck: "Intercity / Sprinter corridors for home–work travel.",
        tip: "This page is your rail depth.",
      },
      {
        topic: "City OV (tram / metro / bus)",
        whatToCheck: "Last-mile and intra-city hops.",
        tip: "Stay on Getting around — not a metro deep-dive here.",
      },
      {
        topic: "OVpay / OV-chipkaart",
        whatToCheck: "How you tap and which card or wallet you use.",
        tip: "Sibling guides own the mechanics.",
      },
      {
        topic: "Driving / car sharing",
        whatToCheck: "Only when rail cannot cover a trip type.",
        tip: "Light explore-next — do not deep-dive driving here.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Rail backbone",
        body: "NS connects cities; local OV finishes many door-to-door trips.",
      },
      {
        title: "Products vs taps",
        body: "Ticket type is separate from whether you tap plastic or a bank card.",
      },
      {
        title: "Cluster siblings",
        body: "Getting around → OVpay → OV-chipkaart → this page for rail depth.",
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
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless bank-card and phone travel.",
      },
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Personal travel card and many subscriptions.",
      },
    ] satisfies TransportLink[],
  },
  ticketTypes: {
    heading: "Ticket types for expats",
    intro:
      "Most newcomers start with single e-tickets or pay-as-you-go. Flex-style subscriptions and season tickets make sense after your weekly pattern is stable.",
    paragraphs: [
      "Names and eligibility change — treat the table as orientation and confirm live products on NS English pages. Many subscriptions still require a personal OV-chipkaart; deepen card setup on the OV-chipkaart guide.",
    ],
    rows: [
      {
        topic: "Single / e-ticket",
        whatToCheck: "One journey or day trips; app or machine purchase.",
        tip: "Calm for weekends and early uncertainty.",
      },
      {
        topic: "Pay-as-you-go (OVpay / chipkaart)",
        whatToCheck: "Tap in/out; billed per trip after check-out.",
        tip: "Best learning weeks for daily commuting.",
      },
      {
        topic: "NS Flex-style",
        whatToCheck: "Subscription with monthly settlement on a personal card path.",
        tip: "Compare only after your corridor is stable.",
      },
      {
        topic: "Season / discount products",
        whatToCheck: "Route, days-per-week and peak eligibility.",
        tip: "Verify official NS maths — not forum screenshots.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Learn before you lock",
        body: "Two stable weeks of trip history beat guessing a season ticket on day three.",
      },
      {
        title: "Card often required",
        body: "Many rail subscriptions sit on a personal OV-chipkaart — open that sibling when ready.",
      },
      {
        title: "No fake rankings",
        body: "We do not rank which Flex or season product is “best” — confirm on NS.nl.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Personal cards that unlock many subscriptions.",
      },
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless pay-as-you-go without plastic balance.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "When bikes replace short rail hops.",
      },
    ] satisfies TransportLink[],
  },
  howToBuy: {
    heading: "How to buy and travel",
    intro:
      "You can buy or travel via the NS app, station ticket machines, OVpay contactless taps, or a personal OV-chipkaart — pick one primary method per leg.",
    paragraphs: [
      "E-tickets from the app or machine are simple for occasional trips. Daily commuting usually settles into OVpay or a personal OV-chipkaart with check-in/out. Mixing methods mid-leg creates support chaos.",
    ],
    steps: [
      {
        phase: "Plan",
        timing: "Before you leave",
        detail: "Confirm live departures in the NS app or 9292 for transfers.",
      },
      {
        phase: "Buy or tap",
        timing: "At start",
        detail: "E-ticket ready, or check in with OVpay / chipkaart at the pole or gate.",
      },
      {
        phase: "Travel",
        timing: "On board",
        detail: "Keep the same payment method available for inspection or exit taps.",
      },
      {
        phase: "Close",
        timing: "At destination",
        detail: "Check out with the same method — or validate an e-ticket if that was your path.",
      },
    ] satisfies TimelineStep[],
    rows: [
      {
        topic: "NS app",
        whatToCheck: "E-tickets, planner and disruptions.",
        tip: "Install before Monday peak.",
      },
      {
        topic: "Station machine",
        whatToCheck: "Card or cashless purchase when the app fails.",
        tip: "Keep as a calm backup.",
      },
      {
        topic: "OVpay",
        whatToCheck: "Accepted Dutch debit / wallet on your corridor.",
        tip: "Deepen on the OVpay guide.",
      },
      {
        topic: "OV-chipkaart",
        whatToCheck: "Balance or subscription loaded on a personal card.",
        tip: "Deepen on the OV-chipkaart guide.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "One method per leg",
        body: "Phone check-in with plastic check-out creates expensive confusion.",
      },
      {
        title: "App is not optional forever",
        body: "Even if you tap plastic, the NS app helps with disruptions and platforms.",
      },
      {
        title: "Machines still matter",
        body: "Dead phones and empty wallets are calmer with a machine fallback.",
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
  peakHours: {
    heading: "Peak hours orientation",
    intro:
      "Weekday morning and evening rush periods matter for crowding and for some ticket products. Treat published windows as orientation — confirm current NS definitions before you budget.",
    paragraphs: [
      "Off-peak travel can feel calmer and may change the maths for certain discount or subscription products. Do not rely on outdated forum screenshots. This section does not promise savings.",
    ],
    rows: [
      {
        topic: "Morning peak",
        whatToCheck: "Typical weekday inbound rush into major stations.",
        tip: "Practice your corridor once off-peak first.",
      },
      {
        topic: "Evening peak",
        whatToCheck: "Outbound rush; platforms can be crowded.",
        tip: "Allow transfer buffer on first weeks.",
      },
      {
        topic: "Off-peak windows",
        whatToCheck: "Whether a product cares about peak eligibility.",
        tip: "Verify on official NS product pages.",
      },
      {
        topic: "Crowding vs price",
        whatToCheck: "Comfort is separate from fare rules.",
        tip: "Both matter for first-month stress.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Orientation only",
        body: "Peak labels change — NS.nl beats memory and WhatsApp advice.",
      },
      {
        title: "Products can care",
        body: "Some Flex / season options hinge on when you travel — check eligibility.",
      },
      {
        title: "Crowding tip",
        body: "Standing room on Intercity runs is normal in rush hour — pack light.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Commuting reality across modes.",
      },
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Day-cap orientation for contactless weeks.",
      },
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "When subscriptions sit on a personal card.",
      },
    ] satisfies TransportLink[],
  },
  firstWeek: {
    heading: "First-week commute tips",
    intro:
      "Your first busy rail week is about rhythm: last mile to the station, check-in, train, check-out, and a backup if something fails.",
    paragraphs: [
      "Practice the full corridor once off-peak. Screenshot platform numbers and transfer notes. Keep a machine or e-ticket fallback if contactless fails. Do not buy a season ticket until Monday mornings feel boring.",
    ],
    steps: [
      {
        phase: "Home → station",
        timing: "Day −1 practice",
        detail: "Time the bike or walk; know where validators sit.",
      },
      {
        phase: "Check in",
        timing: "Start of leg",
        detail: "Same card or phone every time — confirm the beep / light.",
      },
      {
        phase: "On the train",
        timing: "During trip",
        detail: "Watch NS app for disruptions; leave a transfer buffer.",
      },
      {
        phase: "Check out + last mile",
        timing: "Arrival",
        detail: "Close the trip, then finish by bike, walk or local OV.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "One calm practice run",
        body: "Sunday afternoon teaches more than a frantic Monday.",
      },
      {
        title: "Disruption habit",
        body: "Open the NS app before you leave home on wet or strike-rumour days.",
      },
      {
        title: "Last mile matters",
        body: "Getting around covers bikes and city OV — finish the door-to-door story there.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Bikes, modes and multimodal stitching.",
      },
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless tap discipline for first weeks.",
      },
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Plastic backup and missed-checkout fixes.",
      },
    ] satisfies TransportLink[],
  },
  nsInternational: {
    heading: "NS International (light boundary)",
    intro:
      "NS International covers many cross-border and high-speed journeys. This page only marks the boundary — domestic commuting stays the focus.",
    paragraphs: [
      "If you need Thalys-style, Eurostar-adjacent or other international products, open official NS International pages for reservations, passports and seat rules. Do not assume domestic Flex or OVpay habits cover every international journey.",
    ],
    rows: [
      {
        topic: "Domestic NS",
        whatToCheck: "Everyday Intercity / Sprinter commuting.",
        tip: "Stay on this guide.",
      },
      {
        topic: "NS International",
        whatToCheck: "Cross-border tickets, reservations, ID rules.",
        tip: "Use official international pages.",
      },
      {
        topic: "Same-day hop abroad",
        whatToCheck: "Whether your domestic product or contactless path applies.",
        tip: "Verify before you board — do not assume.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Boundary, not deep-dive",
        body: "We flag international travel so you know where domestic advice stops.",
      },
      {
        title: "Reservations differ",
        body: "Some international services need reserved seats — domestic Sprinters usually do not.",
      },
      {
        title: "ID ready",
        body: "Carry passport or ID notes when leaving the Schengen comfort zone of a normal commute.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider mobility model inside the Netherlands.",
      },
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Domestic contactless taps.",
      },
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Domestic personal card products.",
      },
    ] satisfies TransportLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Transport tools to explore",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when your week runs on NS trains. This block is not a ranking of operators, tickets or apps.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for an NS commute week — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-ns-trains-support-providers",
    analyticsPageContext: "ns-trains-netherlands-recommended-options",
    categoryLinks: [
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: OVPAY_NETHERLANDS_PATH, label: "OVpay" },
      { href: OV_CHIPKAART_NETHERLANDS_PATH, label: "OV-chipkaart" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat NS train scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First week, Dutch debit card ready",
        approach: "OVpay pay-as-you-go on NS plus the NS app for planning usually covers learning weeks.",
        firstStep: "Practice one off-peak loop, then install the NS app.",
      },
      {
        situation: "Daily Amsterdam–Utrecht or similar commute",
        approach: "Stay pay-as-you-go for two weeks, then compare Flex / season on official NS pages.",
        firstStep: "Collect trip history, then open ticket types and OV-chipkaart if products need a personal card.",
      },
      {
        situation: "Weekend visitor for 10 days",
        approach: "Single e-tickets or contactless for a few rail days — skip season products.",
        firstStep: "Buy in the NS app and keep a strict check-out habit if tapping.",
      },
      {
        situation: "Mostly bike-first, occasional long train",
        approach: "Pay-as-you-go or singles; deepen multimodal habits on Getting around.",
        firstStep: "Keep this page for rail days only.",
      },
      {
        situation: "Considering car sharing vs more trains",
        approach: "Trains for predictable corridors; car sharing for awkward weekend errands — light explore-next only.",
        firstStep: "Finish rail setup here, then open Car sharing if four wheels are occasional.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Buying a season ticket too early",
      body: "Day-three enthusiasm locks you into the wrong corridor or day-count.",
      advice: "Ride pay-as-you-go until two stable weeks prove your pattern.",
    },
    {
      title: "Forgetting to check out",
      body: "Open rail trips trigger maximum-fare style charges and stressful corrections.",
      advice: "Build an exit-tap habit with the same method and fix the same day if you miss one.",
    },
    {
      title: "Treating metro/tram as NS",
      body: "City OV uses different operators and products — forum advice gets mixed.",
      advice: "Use Getting around for local modes; keep this page for trains.",
    },
    {
      title: "Ignoring peak eligibility",
      body: "Outdated peak windows create false subscription maths.",
      advice: "Verify current peak definitions on official NS product pages.",
    },
    {
      title: "Mixing payment methods mid-leg",
      body: "Phone check-in with plastic check-out creates support chaos.",
      advice: "Finish the open trip with the same method you started.",
    },
    {
      title: "Skipping the NS app",
      body: "Without live platforms and disruption alerts, first weeks feel harder than they need to.",
      advice: "Install the NS app even if you tap with OVpay or a chipkaart.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "NS trains readiness checklist",
    intro: "Use this before your first busy commute week on Dutch Railways.",
    items: [
      "Home–work rail corridor confirmed in the NS app",
      "Primary pay method chosen (OVpay / OV-chipkaart / e-ticket)",
      "One full check-in / train / check-out loop practiced off-peak",
      "Peak / off-peak notes verified on official NS pages",
      "Subscription decision deferred until pattern is stable",
      "Machine or e-ticket backup known for dead-phone days",
      "Last-mile plan written (bike, walk, local OV)",
      "Sibling guides opened: Getting around, OVpay, OV-chipkaart",
    ],
  },
  howTo: {
    heading: "How to start NS train travel calmly as an expat",
    steps: [
      {
        name: "Map your corridor",
        text: "Confirm home and work stations in the NS app and note transfer points on a calm day.",
      },
      {
        name: "Choose a first payment path",
        text: "Prefer OVpay or a personal OV-chipkaart for commuting weeks, or a single e-ticket for rare trips.",
      },
      {
        name: "Practice one full loop off-peak",
        text: "Check in, ride, check out — so Monday peak is not your first validator lesson.",
      },
      {
        name: "Set disruption and backup habits",
        text: "Open the NS app before leaving home and know the station-machine fallback.",
      },
      {
        name: "Compare Flex or season later",
        text: "Only after your weekly pattern stabilises — confirm products on official NS pages and deepen chipkaart setup if required.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to start NS train travel in the Netherlands as an expat",
    description:
      "Orientation steps for expats mapping an NS corridor, choosing a first payment path, practising check-in/out, setting disruption habits and delaying subscriptions until the weekly pattern is stable.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Do I need an OV-chipkaart to ride NS trains?",
      a: "Not always. Many travellers use OVpay (bank card or phone) or buy single e-tickets in the NS app or at machines. A personal OV-chipkaart is most useful when you want certain subscriptions, account tools on plastic, or a reliable backup.",
    },
    {
      q: "What is NS Flex?",
      a: "NS Flex-style products are subscription options that settle travel on a monthly basis for eligible travellers, usually linked to a personal OV-chipkaart path. Treat marketing names as orientation and confirm current eligibility, peak rules and pricing on official NS pages.",
    },
    {
      q: "When should I buy a season ticket?",
      a: "After your weekly pattern is stable — typically after at least two clear commute weeks. Compare route, days-per-week and peak eligibility on NS.nl before you lock anything.",
    },
    {
      q: "What happens if I forget to check out on a train trip?",
      a: "You may be charged a maximum-style fare until the trip is corrected. Use the official missed check-out flow for OVpay or OV-chipkaart as soon as you notice. Prevention — tapping at every exit with the same method — is calmer than recovery.",
    },
    {
      q: "Are peak hours the same for every ticket?",
      a: "No. Crowding exists for everyone in rush hour, but fare and product rules differ. Verify current peak definitions on the specific NS product page you are considering.",
    },
    {
      q: "Is this the guide for metro and tram?",
      a: "No. This page is NS trains. Use Getting around for multimodal orientation including tram, metro, bus and bikes. OVpay and OV-chipkaart cover taps across modes.",
    },
    {
      q: "What about international trains?",
      a: "NS International and other cross-border products have their own reservation and ID rules. This page only marks the boundary — confirm on official international pages before you travel.",
    },
    {
      q: "Is this legal or financial advice?",
      a: "No. ExpatLife provides general orientation only. Follow NS, OVpay, OV-chipkaart.nl and local operator instructions for tickets, refunds and corrections.",
    },
  ],
  relatedGuidesTips: [
    "Discount products → Train discounts.",
    "Leisure weekends → Weekend travel.",
    "Wider mobility → Getting around.",
    "Contactless taps → OVpay.",
    "Personal travel card → OV-chipkaart.",
    "Station last mile → Bike sharing.",
  ],
  relatedGuides: [
    {
      label: "Train discounts",
      href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
      status: "live",
      description: "Dal Voordeel, Weekend Voordeel and break-even orientation.",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Leisure day trips and weekends by NS + regional OV.",
    },
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
      label: "Trams",
      href: TRAMS_NETHERLANDS_PATH,
      status: "live",
      description: "City tram travel — last-mile after many NS trips.",
    },
    {
      label: "Metro",
      href: METRO_NETHERLANDS_PATH,
      status: "live",
      description: "Metro spines that feed major NS stations.",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "OV-fiets and subscription fleets for rail last miles.",
    },
  ] satisfies TransportLink[],
  transportHubTips: [
    "NS trains is the flagship rail guide in the Public Transport cluster.",
    "Train discounts deepens Dal / Weekend / Flex product math.",
    "Weekend travel deepens leisure planning.",
    "Getting around remains the wider mobility overview.",
    "OVpay and OV-chipkaart cover ticket methods.",
    "Bike sharing covers active last-mile peers.",
  ],
  transportHubCards: [
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "Rail products and commute orientation — you are here.",
    },
    {
      label: "Train discounts",
      href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
      status: "live",
      description: "NS discount products and break-even orientation.",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Leisure rail days and weekend planning.",
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
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Modes, bikes and multimodal commuting.",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "OV-fiets and shared fleets for station last miles.",
    },
  ] satisfies TransportLink[],
  exploreNextCards: [
    {
      label: "Train discounts",
      href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
      status: "live",
      description: "Need Dal / Weekend product math after learning to ride?",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Planning leisure day trips and weekends by OV?",
    },
    {
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Need contactless tap depth after rail products?",
    },
    {
      label: "OV-chipkaart",
      href: OV_CHIPKAART_NETHERLANDS_PATH,
      status: "live",
      description: "Ready for personal cards and subscriptions?",
    },
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Need OV-fiets or subscription last-mile bikes?",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Widen the model to multimodal weeks?",
    },
  ] satisfies TransportLink[],
  exploreNextTips: [
    "Contactless taps → OVpay.",
    "Plastic and products → OV-chipkaart.",
    "City surface rail → Trams.",
    "Bus feeders → Regional buses.",
    "Station last mile → Bike sharing.",
    "Everyday bikes → Cycling.",
  ],
  officialSources: [
    {
      label: "NS — English",
      href: LIVING_TRANSPORT_APP_DOWNLOADS.ns.web,
      description: "Dutch Railways tickets, subscriptions and station services",
    },
    {
      label: "NS — App Store",
      href: LIVING_TRANSPORT_APP_DOWNLOADS.ns.appStore,
      description: "Official iOS journey planner and tickets",
    },
    {
      label: "NS — Google Play",
      href: LIVING_TRANSPORT_APP_DOWNLOADS.ns.playStore,
      description: "Official Android journey planner and tickets",
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
        "Know NS vs city OV.",
        "Choose ticket type.",
        "Learn how to buy.",
        "Practice first-week commute.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "What NS is.",
        "Ticket types.",
        "How to buy.",
        "Peak hours.",
        "First-week tips.",
        "NS International boundary.",
      ],
    },
    whatItIs: {
      title: "From the visual — NS cues",
      items: [
        "National rail backbone.",
        "City OV is last mile.",
        "Taps live on sibling guides.",
        "Driving is explore-next only.",
      ],
    },
    ticketTypes: {
      title: "From the visual — ticket cues",
      items: [
        "Singles for uncertainty.",
        "Pay-as-you-go to learn.",
        "Flex after pattern.",
        "Season with official maths.",
      ],
    },
    howToBuy: {
      title: "From the visual — buy cues",
      items: [
        "NS app.",
        "Station machine.",
        "OVpay tap.",
        "Personal chipkaart.",
      ],
    },
    peakHours: {
      title: "From the visual — peak cues",
      items: [
        "Morning rush.",
        "Evening rush.",
        "Off-peak windows.",
        "Verify product rules.",
      ],
    },
    firstWeek: {
      title: "From the visual — first-week cues",
      items: [
        "Home to station.",
        "Check in.",
        "Ride + buffer.",
        "Check out + last mile.",
      ],
    },
    nsInternational: {
      title: "From the visual — boundary cues",
      items: [
        "Domestic vs international.",
        "Reservations may differ.",
        "ID notes.",
        "Confirm on official pages.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "First week arrival.",
        "Daily commute.",
        "Short visitor.",
        "Bike-first + occasional train.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "Season ticket too early.",
        "Missed checkout.",
        "Metro confusion.",
        "Peak folklore.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Corridor mapped.",
        "Pay method chosen.",
        "Loop practiced.",
        "Siblings opened.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general public-transport orientation for newcomers. It is not legal, financial or product advice. Ticket rules, peak definitions, subscriptions and contactless acceptance change — always confirm on NS, OVpay and OV-chipkaart.nl before you travel or buy.",
} as const;

export type NsTrainsNetherlandsPage = typeof nsTrainsNetherlandsPage;

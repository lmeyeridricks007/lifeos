import {
  BIKE_SHARING_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LIVING_HUB_PATH,
  METRO_NETHERLANDS_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  WEEKEND_TRAVEL_NETHERLANDS_PATH,
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
  TRAIN_DISCOUNTS_NETHERLANDS_PATH,
  WEEKEND_TRAVEL_NETHERLANDS_PATH,
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
export type CostRow = { category: string; range: string; notes: string };
export type TimelineStep = { phase: string; timing: string; detail: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "ovpay-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const ovpayNetherlandsPage = {
  slug: "ovpay-netherlands",
  path: OVPAY_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(OVPAY_NETHERLANDS_PATH) ?? "2026-09-07",
  seo: {
    title: "OVpay in the Netherlands | Complete Guide for Expats",
    description:
      "How OVpay contactless travel works for expats: bank card or phone check-in/out, day caps orientation, when to prefer OVpay vs OV-chipkaart, and common tap mistakes.",
    keywords: [
      "OVpay Netherlands",
      "OVpay expats",
      "contactless public transport Netherlands",
      "pay with bank card Dutch trains",
      "OVpay check in check out",
      "OVpay vs OV-chipkaart",
      "OVpay day cap",
      "debit card tram metro Netherlands",
      "OVpay app",
      "contactless OV Netherlands",
      "travel with credit card Netherlands OV",
      "Dutch public transport contactless",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Public transport",
    pageTitle: "OVpay in the Netherlands",
    subtitle:
      "Contactless public-transport travel with a Dutch debit card, credit card or phone wallet: how check-in and check-out work, day-cap orientation, when plastic OV-chipkaart still wins, and the mistakes that create expensive open trips.",
    primaryCta: { label: "How OVpay works", href: "#how-it-works" },
    secondaryCta: { label: "OVpay checklist", href: "#checklist" },
    chips: ["What it is", "Bank card taps", "Check-in/out", "Day caps", "Vs chipkaart"],
    disclaimer:
      "General orientation only — not legal, financial or product advice and not a substitute for OVpay, OV-chipkaart.nl, NS or local operator terms. Acceptance, caps and contactless rules change. Verify current steps on official sites before you travel.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch metro gate: multicultural expat tapping a contactless bank card or phone wallet at a validator, soft daylight tiled station and bikes, reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what-it-is", label: "What it is" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#check-in-out", label: "Check-in/out" },
    { href: "#caps-products", label: "Caps & products" },
    { href: "#vs-chipkaart", label: "Vs chipkaart" },
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
      "Premium orientation board titled OVpay After Arrival — four building blocks: know contactless, choose card or phone, learn check-in/out, decide vs chipkaart — Travel File Checklist rail on the right, Dutch canal and tram skyline and ExpatLife brand footer.",
      "Four habits cover most OVpay questions: acceptance, tap method, checkout discipline, and chipkaart timing."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of OVpay in the Netherlands — what it is, how contactless works, check-in/out, caps, vs chipkaart, common mistakes — Dutch mobility band and ExpatLife brand footer.",
      "Six building blocks explain almost every OVpay question for newcomers."
    ),
    whatItIs: visual(
      "what-it-is",
      "Premium ecosystem diagram — bank card and phone wallet tapping train, tram, metro and bus validators — desk scene with debit card, phone and Dutch station props, General information only rail.",
      "OVpay is contactless settlement for Dutch public transport — not a plastic travel card and not a timetable app."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium how-it-works board — Dutch debit, selected credit cards and phone wallets at validators — acceptance checklist rail, calm consultation desk with canal light and ExpatLife brand footer.",
      "Test your card or wallet once off-peak before Monday rush."
    ),
    checkInOut: visual(
      "check-in-out",
      "Premium trip timeline — check in with the same card or phone, travel, check out at destination, transfers as new legs when required — Dutch tram and train validators with checklist rail.",
      "Finish every open trip with the same method you started — mixing mid-leg creates support chaos."
    ),
    capsProducts: visual(
      "caps-products",
      "Premium caps and products map — day-cap orientation, pay-as-you-go contactless, when subscriptions still need a personal OV-chipkaart — Dutch commute calendar without fake rankings.",
      "Day caps can soften heavy city days — season tickets still live on personal cards."
    ),
    vsChipkaart: visual(
      "vs-chipkaart",
      "Premium decide board — OVpay bank-card tap vs personal OV-chipkaart — when contactless is enough and when a named card still helps — Dutch validators and phone wallet scene.",
      "OVpay covers many weeks; personal cards still shine for subscriptions and account control."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first week with Dutch debit, daily Randstad commute, weekend visitor, foreign card uncertainty — first-step arrows and Dutch skyline band.",
      "Match banking readiness and commute rhythm to OVpay vs chipkaart instead of copying a colleague."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — forgetting checkout, mixing methods mid-leg, assuming every foreign card works, ignoring chipkaart when you need products — Fix notes beside each card.",
      "Most friction is tap discipline and acceptance — not finding the OVpay website."
    ),
    checklist: visual(
      "checklist",
      "Premium OVpay readiness checklist clipboard — card accepted, first tap practiced, checkout habit set, day-cap notes checked, chipkaart compared — Dutch kitchen table with canal light.",
      "Use this checklist so your first busy contactless week stays intentional."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "Test one tap", note: "Off-peak first" },
    { label: "Must do", value: "Check in + out", note: "Same method" },
    { label: "Softener", value: "Day caps", note: "Verify current rules" },
    { label: "Sibling", value: "Chipkaart & NS", note: "Cluster guides" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "OVpay lets many travellers pay for Dutch public transport by tapping a contactless bank card or phone wallet — no separate travel-card balance to top up for everyday trips. For expats it is less about a new product name and more about acceptance, check-in/out discipline, and knowing when a personal OV-chipkaart still helps.",
    "Getting around is the wider mobility mental model. OV-chipkaart deepens the personal plastic card. NS trains deepens rail products and commuting. This page stays on contactless OVpay travel — not chipkaart account setup and not season-ticket deep-dives.",
  ],
  introHighlights: [
    "Confirm your Dutch debit, credit card or wallet is accepted on your real routes.",
    "Check in and check out with the same card or phone on every leg.",
    "Use day-cap orientation as a planning cue — not a guaranteed savings claim.",
    "Compare OV-chipkaart before you assume contactless covers subscriptions.",
  ],
  orientationFlowSteps: [
    "Confirm a Dutch debit card or phone wallet works on validators near home.",
    "Practice one short check-in / check-out loop off-peak with that same method.",
    "Open the OVpay app or official site for trip history and missed-checkout notes.",
    "Decide whether a personal OV-chipkaart is still needed for products or backup.",
  ],
  travelFileChecklist: [
    "Dutch bank card or wallet ready",
    "Acceptance tested on a local validator",
    "Same-method check-out habit written down",
    "OVpay app or web account bookmarked",
    "Day-cap / fare notes checked on OVpay.nl",
    "OV-chipkaart compared for subscriptions",
    "Foreign-card backup plan (ticket machine / chipkaart)",
    "Sibling guides opened: Getting around, OV-chipkaart, NS trains",
  ],
  introScenarios: [
    {
      situation: "Dutch debit card just arrived this week",
      approach: "OVpay-first often covers daily tram, metro and many train taps without buying plastic yet.",
      firstStep: "Test one off-peak hop, then open the OVpay app for trip overview.",
    },
    {
      situation: "Heavy weekday Randstad rail commute",
      approach: "Contactless may work for pay-as-you-go, but subscriptions usually need a personal OV-chipkaart — deepen on NS trains.",
      firstStep: "Ride two weeks on OVpay, then compare chipkaart products when your pattern is stable.",
    },
    {
      situation: "Only a foreign credit card in your wallet",
      approach: "Acceptance varies; do not assume every foreign card taps. Keep a ticket-machine or chipkaart backup.",
      firstStep: "Try once calmly, then read OV-chipkaart if contactless fails.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Getting around remains the multimodal overview for bikes, modes and apps.",
    "OV-chipkaart deepens personal cards, top-up and subscriptions.",
    "NS trains deepens rail products and commute patterns.",
    "Car sharing is optional when OV is not enough — not a substitute for this contactless guide.",
  ],
  quickAnswer: {
    heading: "OVpay in one minute",
    summary:
      "OVpay is contactless payment for Dutch public transport: you check in and check out with a bank card or phone wallet instead of loading balance onto a separate travel card. Dutch-issued debit cards are the most reliable everyday option; some credit cards and wallets also work — verify acceptance. You still must close every trip. Day caps can limit how much you pay on certain heavy days, but season tickets and many subscriptions still sit on a personal OV-chipkaart. Use this page for contactless orientation; open OV-chipkaart and NS trains when you need plastic cards or rail products.",
    bullets: [
      "Tap the same card or phone in and out — never switch mid-leg.",
      "Dutch debit cards are usually the calm default; foreign cards vary.",
      "Day caps are orientation only — confirm current rules on OVpay.nl.",
      "Personal OV-chipkaart still matters for many subscriptions and backups.",
    ],
    note: "Getting around, OV-chipkaart and NS trains are siblings — use them for multimodal overview, plastic cards and rail deep-dives.",
  },
  snapshotCards: [
    {
      title: "What it is",
      body: "Contactless bank-card / phone travel across many Dutch OV validators.",
    },
    {
      title: "How it works",
      body: "Accepted debit, credit or wallet taps settle the trip after check-out.",
    },
    {
      title: "Check-in / check-out",
      body: "Same method every leg; open trips create expensive surprises.",
    },
    {
      title: "Caps & products",
      body: "Day-cap orientation for heavy days; season products still need chipkaart depth.",
    },
    {
      title: "Vs OV-chipkaart",
      body: "Contactless for many weeks; plastic for products and backup.",
    },
    {
      title: "Mistakes",
      body: "Mixing methods, skipping checkout, assuming every foreign card works.",
    },
  ] satisfies TipCard[],
  whatItIs: {
    heading: "What OVpay is (and is not)",
    intro:
      "Think of OVpay as the contactless way to pay for Dutch public transport with the card or phone you already carry. It is a payment method at validators — not a named travel card and not a journey planner.",
    paragraphs: [
      "You tap in and out on many trains, trams, metros and buses. Fares settle against your bank card or wallet after the trip closes. The OVpay website and app help with trip history and corrections; 9292 and operator apps still help you plan.",
      "This guide does not replace OV-chipkaart account setup, does not rank banks or cards, and does not teach NS season tickets in depth. For plastic cards open OV-chipkaart. For rail subscriptions and commute patterns open NS trains. For bikes and multimodal weeks stay linked to Getting around.",
    ],
    rows: [
      {
        topic: "Role",
        whatToCheck: "Whether contactless already covers your everyday taps.",
        tip: "If yes, you may defer buying a personal OV-chipkaart.",
      },
      {
        topic: "Coverage",
        whatToCheck: "Validators on your home–work and weekend routes.",
        tip: "Practice once off-peak on the real corridor.",
      },
      {
        topic: "Not included",
        whatToCheck: "Live departures, seat reservations and driving rights.",
        tip: "Use planner apps and sibling guides for those jobs.",
      },
      {
        topic: "Account value",
        whatToCheck: "Whether you want OVpay trip history and correction tools.",
        tip: "Install the official app or use the website after your first week.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Shared contactless wallet",
        body: "One debit card or phone can settle many operator taps without a separate travel balance.",
      },
      {
        title: "Operator products differ",
        body: "Season tickets and city products often still need a personal OV-chipkaart — verify each.",
      },
      {
        title: "Cluster siblings",
        body: "OV-chipkaart and NS trains complete plastic and rail depth; this page stays on OVpay.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Modes, bikes and the wider mobility mental model.",
      },
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Personal travel card, top-up and subscriptions.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Rail products and commute patterns.",
      },
    ] satisfies TransportLink[],
  },
  howItWorks: {
    heading: "How OVpay contactless travel works",
    intro:
      "You present a contactless bank card or phone wallet at the validator, check in, travel, then check out. Fares settle later against that payment method — there is no separate OV-chipkaart balance to top up for those trips.",
    paragraphs: [
      "Dutch-issued debit cards (contactless) are the most reliable everyday path for residents. Some credit cards and mobile wallets also work; foreign cards vary by issuer and validator. Always keep a calm backup: ticket machine, service desk or an OV-chipkaart.",
      "Phone wallets usually mirror the underlying card — use one primary method per trip. The official OVpay site and app explain current acceptance and let you review trips. Soft bank/card setup is only useful when you still lack a working Dutch debit path — not because ExpatLife ranks issuers.",
    ],
    rows: [
      {
        topic: "Dutch debit",
        whatToCheck: "Contactless enabled and accepted on your local validators.",
        tip: "Default calm path for most residents after banking settles.",
      },
      {
        topic: "Credit / foreign cards",
        whatToCheck: "Whether your specific card is accepted this month.",
        tip: "Test once; do not rely on forum screenshots.",
      },
      {
        topic: "Phone wallet",
        whatToCheck: "Which card is tokenised and which device you will carry.",
        tip: "Keep the same phone for check-in and check-out.",
      },
      {
        topic: "Backup",
        whatToCheck: "Ticket machine or OV-chipkaart if contactless fails.",
        tip: "Arrive five minutes early until the habit is boring.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "No travel-card top-up",
        body: "Everyday OVpay trips settle against your bank method instead of plastic balance.",
      },
      {
        title: "Official tools first",
        body: "Use OVpay.nl and the OVpay app for acceptance notes and trip history.",
      },
      {
        title: "One primary method",
        body: "Pick card or phone as primary for a leg — finish with that same method.",
      },
    ] satisfies TipCard[],
    steps: [
      {
        phase: "Choose method",
        timing: "Before first OV week",
        detail: "Prefer a Dutch debit card or a proven phone wallet token.",
      },
      {
        phase: "Test acceptance",
        timing: "Off-peak short hop",
        detail: "Confirm the validator beeps cleanly in and out.",
      },
      {
        phase: "Open OVpay tools",
        timing: "Same day",
        detail: "Bookmark the website or install the app for history and fixes.",
      },
      {
        phase: "Set a backup",
        timing: "Before Monday peak",
        detail: "Know the ticket-machine or chipkaart fallback on your corridor.",
      },
    ] satisfies TimelineStep[],
    crossLinks: [
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Plastic backup and personal-card products.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Apps and first-week mobility orientation.",
      },
      {
        label: "OVpay official site",
        href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.web,
        status: "external",
        description: "Acceptance, app and trip tools from OVpay.",
      },
    ] satisfies TransportLink[],
  },
  checkInOut: {
    heading: "Check-in and check-out with bank card or phone",
    intro:
      "OVpay uses the same tap rhythm as a travel card: check in at the start, check out at the end. The difference is that your bank card or phone is the ticket carrier for that leg.",
    paragraphs: [
      "At gates and poles, hold the same card or phone flat until you get a clear acceptance signal. On transfers, treat each new operator leg as needing its own tap pair when the system requires it — do not assume one tap covers a whole multimodal day.",
      "If you miss check-out, open trips can charge a maximum-style fare until corrected. Use OVpay’s official missed check-out tools promptly. Prevention — tapping at every exit with the same method — is calmer than recovery.",
    ],
    steps: [
      {
        phase: "Check in",
        timing: "Before boarding / at the gate",
        detail: "Tap once with your chosen card or phone; wait for the clear signal.",
      },
      {
        phase: "Travel",
        timing: "During the leg",
        detail: "Keep that same method available — do not switch to another card mid-trip.",
      },
      {
        phase: "Check out",
        timing: "At destination exit",
        detail: "Tap the same method again so the trip can close and fare correctly.",
      },
      {
        phase: "Transfer habit",
        timing: "When changing modes",
        detail: "Start a new check-in when required; never invent a mid-leg method swap.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Same method in and out",
        body: "Mixing phone check-in with plastic check-out is a classic support headache.",
      },
      {
        title: "Listen for the beep",
        body: "If the signal is unclear, try again calmly before you walk away.",
      },
      {
        title: "Fix open trips early",
        body: "Use official OVpay correction flows the same day when possible.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Same tap discipline on plastic cards.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Rail gates and commute patterns.",
      },
      {
        label: "OVpay app (App Store)",
        href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.appStore,
        status: "external",
        description: "Official iOS app for trip overview.",
      },
    ] satisfies TransportLink[],
  },
  capsProducts: {
    heading: "Day caps and when products still need a chipkaart",
    intro:
      "OVpay can apply day-cap style limits on some travel patterns so a heavy city day does not stack endless pay-as-you-go taps without a ceiling. Treat published caps as orientation — verify current amounts and eligible modes on OVpay.nl.",
    paragraphs: [
      "Day caps are not the same as NS season tickets or city subscriptions. Caps soften certain contactless days; season products usually require a personal OV-chipkaart and operator enrolment. Do not buy a subscription because a forum claimed a cap was “enough forever”.",
      "If your week is rail-heavy with predictable peak travel, compare products on official NS pages and deepen on NS trains after your pattern stabilises. Keep this section high-level: no fake savings percentages and no ranked product picks.",
    ],
    rows: [
      {
        topic: "Day caps",
        whatToCheck: "Whether your modes and regions are included in current OVpay cap rules.",
        tip: "Confirm on OVpay.nl — rules and amounts change.",
      },
      {
        topic: "Pay-as-you-go",
        whatToCheck: "Whether contactless without a season product matches your week.",
        tip: "Fine for irregular weeks and first-month learning.",
      },
      {
        topic: "Season / Flex-style",
        whatToCheck: "Whether the product needs a personal OV-chipkaart.",
        tip: "Open OV-chipkaart and NS trains before you enrol.",
      },
      {
        topic: "Planning cue",
        whatToCheck: "Two weeks of real trips before locking a product.",
        tip: "History beats guessing your peak days.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Caps ≠ subscriptions",
        body: "A day cap is a contactless ceiling cue — not a full season ticket.",
      },
      {
        title: "Verify before you budget",
        body: "Use official OVpay figures only; do not paste outdated social posts into a spreadsheet.",
      },
      {
        title: "Products live elsewhere",
        body: "Personal cards and rail subscriptions deepen on sibling guides.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Personal cards and subscription pathways.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Rail products and commute depth.",
      },
      {
        label: "OVpay official site",
        href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.web,
        status: "external",
        description: "Current day-cap and fare orientation.",
      },
    ] satisfies TransportLink[],
  },
  vsChipkaart: {
    heading: "OVpay vs OV-chipkaart — when to prefer which",
    intro:
      "Many expats can run ordinary weeks on OVpay alone. A personal OV-chipkaart still wins when you want certain subscriptions, clearer loss protection on plastic, or a backup when contactless fails.",
    paragraphs: [
      "Prefer OVpay when your Dutch debit or wallet taps reliably, your week is pay-as-you-go, and you do not need a product that requires a named travel card. Prefer a personal OV-chipkaart when you are ready for season tickets, want account tools on plastic, or travel corridors where your bank card is unreliable.",
      "Hybrid is allowed: OVpay as primary, chipkaart as backup or product carrier. Avoid three half-used methods. Anonymous chip cards remain useful for short stays without Dutch banking — deepen that path on the OV-chipkaart guide, not here.",
    ],
    rows: [
      {
        topic: "OVpay-first",
        whatToCheck: "Reliable Dutch debit/wallet and irregular or learning weeks.",
        tip: "Skip plastic until a product actually needs it.",
      },
      {
        topic: "Chipkaart-first",
        whatToCheck: "Subscriptions, personal account tools, or weak contactless acceptance.",
        tip: "Read OV-chipkaart before you buy a second card.",
      },
      {
        topic: "Hybrid",
        whatToCheck: "Primary contactless plus one plastic backup.",
        tip: "Label which method is primary per commute corridor.",
      },
      {
        topic: "Short visit",
        whatToCheck: "Foreign card acceptance vs anonymous chipkaart bridge.",
        tip: "Test once; keep ticket-machine fallback.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Test before you buy",
        body: "One successful contactless week can save you an unused personal card.",
      },
      {
        title: "Products tip the scale",
        body: "When you need season tickets, open OV-chipkaart and NS trains.",
      },
      {
        title: "One primary tool",
        body: "Decide which method owns Monday morning — then stick to it.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Anonymous vs personal, top-up and missed checkout on plastic.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "When rail products tip you toward a personal card.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider mobility model including apps and bikes.",
      },
    ] satisfies TransportLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Transport tools to explore",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when your week runs on contactless OV. This block is not a ranking of banks, cards, operators or apps.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for an OVpay week — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-ovpay-support-providers",
    analyticsPageContext: "ovpay-netherlands-recommended-options",
    categoryLinks: [
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: OV_CHIPKAART_NETHERLANDS_PATH, label: "OV-chipkaart" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat OVpay scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "Dutch debit card ready, first OV week",
        approach: "OVpay-first usually covers everyday taps without buying plastic yet.",
        firstStep: "Practice one short loop, then install the OVpay app.",
      },
      {
        situation: "Daily Amsterdam–Utrecht or similar commute",
        approach: "Contactless works for learning weeks; subscriptions usually need a personal card later.",
        firstStep: "Collect two weeks of trips, then open OV-chipkaart and NS trains.",
      },
      {
        situation: "Weekend visitor for 10 days",
        approach: "Try contactless if accepted; otherwise anonymous chipkaart or machine tickets.",
        firstStep: "One test tap and a strict check-out habit.",
      },
      {
        situation: "Foreign card only, no Dutch account yet",
        approach: "Acceptance is uncertain — plan a chipkaart or ticket-machine bridge.",
        firstStep: "Read OV-chipkaart and keep cashless machine options ready.",
      },
      {
        situation: "Student with changing timetable",
        approach: "Stay flexible on OVpay pay-as-you-go until eligibility and routes are stable.",
        firstStep: "Verify student products on official pages before locking a season ticket.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Forgetting to check out",
      body: "Open contactless trips trigger maximum-fare style charges and stressful corrections.",
      advice: "Build an exit-tap habit with the same card or phone and fix the same day if you miss one.",
    },
    {
      title: "Mixing methods mid-leg",
      body: "Phone check-in with plastic check-out creates support chaos.",
      advice: "Finish the open trip with the same method you checked in with.",
    },
    {
      title: "Assuming every foreign card works",
      body: "Acceptance varies by issuer and validator — peak-hour rejection is expensive time.",
      advice: "Test once off-peak and keep a ticket-machine or chipkaart backup.",
    },
    {
      title: "Ignoring OV-chipkaart when you need products",
      body: "Some expats stay contactless-only and miss season tickets that need a personal card.",
      advice: "Read OV-chipkaart and NS trains when your commute pattern stabilises.",
    },
    {
      title: "Treating day caps as guaranteed savings",
      body: "Outdated forum numbers create false budgets.",
      advice: "Verify current caps on OVpay.nl and treat them as orientation only.",
    },
    {
      title: "Skipping the OVpay app or trip history",
      body: "Without overview, missed checkouts linger unnoticed.",
      advice: "Open official OVpay tools after your first real week of taps.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "OVpay readiness checklist",
    intro: "Use this before your first busy commute week on contactless travel.",
    items: [
      "Dutch debit or proven wallet chosen as primary method",
      "Acceptance tested once off-peak on a real corridor",
      "Same-method check-in / check-out habit practiced",
      "OVpay website or app bookmarked for history and fixes",
      "Day-cap / fare notes verified on official OVpay pages",
      "Backup plan set (ticket machine or OV-chipkaart)",
      "Subscription decision deferred until pattern is stable",
      "Sibling guides opened: Getting around, OV-chipkaart, NS trains",
    ],
  },
  howTo: {
    heading: "How to start OVpay calmly as an expat",
    steps: [
      {
        name: "Confirm a contactless payment method",
        text: "Prefer a Dutch debit card or phone wallet token that you will carry every commute day.",
      },
      {
        name: "Test one full check-in / check-out loop",
        text: "Use an off-peak short hop so Monday peak is not your first validator lesson.",
      },
      {
        name: "Open official OVpay tools",
        text: "Install the app or bookmark the website for trip history, acceptance notes and missed-checkout recovery.",
      },
      {
        name: "Set a backup path",
        text: "Know the ticket-machine or OV-chipkaart fallback on your home–work corridor.",
      },
      {
        name: "Revisit chipkaart and NS products later",
        text: "Only compare subscriptions after your weekly pattern stabilises — deepen on sibling guides.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to start OVpay contactless travel in the Netherlands as an expat",
    description:
      "Orientation steps for expats testing bank-card or phone OVpay taps, practising check-in/out, opening official trip tools and deciding when an OV-chipkaart is still needed.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Do I need an OV-chipkaart if I use OVpay?",
      a: "Not always. If your Dutch bank card or phone taps reliably on your routes, OVpay can cover everyday travel. Keep or get a personal OV-chipkaart when you want certain subscriptions, account tools on plastic, or a reliable backup.",
    },
    {
      q: "Can I use a foreign credit card with OVpay?",
      a: "Sometimes, but acceptance varies. Dutch-issued debit cards are more reliable on validators. If contactless fails, use a ticket machine, service desk or an OV-chipkaart. Verify current acceptance on OVpay.nl.",
    },
    {
      q: "What happens if I forget to check out with OVpay?",
      a: "You may be charged a maximum-style fare until the trip is corrected. Use the official missed check-out flow in the OVpay app or website as soon as you notice. Prevention — tapping at every exit with the same method — is calmer than recovery.",
    },
    {
      q: "What is an OVpay day cap?",
      a: "Day caps can limit how much you pay for certain contactless travel on a heavy day. Treat published caps as orientation only and confirm current rules and eligible modes on official OVpay pages. Caps are not the same as NS season tickets.",
    },
    {
      q: "Should I use my phone wallet or the physical card?",
      a: "Either can work when accepted — pick one primary method per leg and use that same method to check out. Mixing mid-trip creates support problems.",
    },
    {
      q: "When should I get a train subscription?",
      a: "After your weekly pattern is stable. Compare products on official NS pages and deepen on the NS trains guide. Many subscriptions still need a personal OV-chipkaart.",
    },
    {
      q: "Is OVpay the same as a journey planner?",
      a: "No. This page covers contactless payment and taps. Use planner apps for live times, Getting around for multimodal orientation, and NS trains for rail commuting depth.",
    },
    {
      q: "Is this legal or financial advice?",
      a: "No. ExpatLife provides general orientation only. Follow OVpay, OV-chipkaart.nl, NS and local operator instructions for payments, refunds and corrections.",
    },
  ],
  relatedGuidesTips: [
    "Wider mobility → Getting around.",
    "Personal travel card → OV-chipkaart.",
    "Rail products → NS trains.",
    "Everyday bikes → Cycling.",
    "Subscription fleets → Bike sharing.",
    "Bus corridors → Regional buses.",
  ],
  relatedGuides: [
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "OV, bikes and everyday multimodal mobility.",
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
      description: "Rail commuting and train products for expats.",
    },
    {
      label: "Train discounts",
      href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
      status: "live",
      description: "Dal Voordeel, Weekend Voordeel and when discounts beat PAYG.",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Leisure day trips and weekends by NS + regional OV.",
    },
    {
      label: "Trams",
      href: TRAMS_NETHERLANDS_PATH,
      status: "live",
      description: "City tram travel — how to ride and when trams win.",
    },
    {
      label: "Metro",
      href: METRO_NETHERLANDS_PATH,
      status: "live",
      description: "Metro / rapid transit for Amsterdam and Rotterdam.",
    },
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Bus travel when tracks and metro spines do not go there.",
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
    "OVpay is the flagship contactless guide in the Public Transport cluster.",
    "Getting around remains the wider mobility overview.",
    "OV-chipkaart covers personal plastic cards and subscriptions.",
    "NS trains, Trams, Metro and Regional buses are mode siblings.",
    "Cycling and Bike sharing continue the active-mobility lane.",
  ],
  transportHubCards: [
    {
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Contactless bank-card and phone travel — you are here.",
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
      description: "Rail products and commute orientation.",
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
      description: "Metro / rapid transit orientation.",
    },
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Regional and city bus corridors.",
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
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Modes, bikes and multimodal commuting.",
    },
  ] satisfies TransportLink[],
  exploreNextCards: [
    {
      label: "OV-chipkaart",
      href: OV_CHIPKAART_NETHERLANDS_PATH,
      status: "live",
      description: "Need plastic, top-up or subscriptions after contactless?",
    },
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "Ready for rail subscriptions and commute depth?",
    },
    {
      label: "Trams",
      href: TRAMS_NETHERLANDS_PATH,
      status: "live",
      description: "Need city tram boarding and etiquette depth?",
    },
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Need bus corridors and 9292 planning orientation?",
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
    "Plastic and products → OV-chipkaart.",
    "Rail commute depth → NS trains.",
    "City surface rail → Trams.",
    "Bus corridors → Regional buses.",
    "Everyday bikes → Cycling.",
    "Subscription fleets → Bike sharing.",
  ],
  officialSources: [
    {
      label: "OVpay — contactless travel",
      href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.web,
      description: "Official contactless bank-card and phone travel information",
    },
    {
      label: "OVpay — App Store",
      href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.appStore,
      description: "Official iOS app for trip overview and corrections",
    },
    {
      label: "OVpay — Google Play",
      href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.playStore,
      description: "Official Android app for trip overview and corrections",
    },
    {
      label: "OV-chipkaart — English FAQ",
      href: "https://www.ov-chipkaart.nl/en/frequently-asked-questions",
      description: "Official orientation when you still need a personal travel card",
    },
    {
      label: "NS — English",
      href: LIVING_TRANSPORT_APP_DOWNLOADS.ns.web,
      description: "Dutch Railways tickets, subscriptions and station services",
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
        "Know contactless OVpay.",
        "Choose card or phone.",
        "Learn check-in/out.",
        "Decide vs chipkaart.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "What it is.",
        "How contactless works.",
        "Check-in/out.",
        "Caps & products.",
        "Vs chipkaart.",
        "Common mistakes.",
      ],
    },
    whatItIs: {
      title: "From the visual — OVpay cues",
      items: [
        "Contactless settlement.",
        "Not a plastic travel card.",
        "Not a timetable app.",
        "Cluster siblings complete the picture.",
      ],
    },
    howItWorks: {
      title: "From the visual — acceptance cues",
      items: [
        "Dutch debit default.",
        "Credit/foreign vary.",
        "Phone wallet OK when accepted.",
        "Keep a backup path.",
      ],
    },
    checkInOut: {
      title: "From the visual — tap cues",
      items: [
        "Check in at start.",
        "Same method while travelling.",
        "Check out at end.",
        "Transfers often need new pairs.",
      ],
    },
    capsProducts: {
      title: "From the visual — cap cues",
      items: [
        "Day caps soften some days.",
        "Verify current rules.",
        "Subscriptions need chipkaart depth.",
        "No fake savings claims.",
      ],
    },
    vsChipkaart: {
      title: "From the visual — decide cues",
      items: [
        "Test contactless once.",
        "Personal card for subscriptions.",
        "Hybrid is allowed.",
        "One primary method.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "Dutch debit ready.",
        "Daily commute.",
        "Short visitor.",
        "Foreign card only.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "Missed checkout.",
        "Mixing methods.",
        "Foreign-card assumptions.",
        "Ignoring chipkaart products.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Method chosen.",
        "Tap practiced.",
        "App bookmarked.",
        "Backup set.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general information for orientation only. It is not legal, financial or product advice. Verify current acceptance, caps and contactless rules with OVpay, OV-chipkaart.nl, NS and local operators. Soft partner links, when shown, are labelled and never presented as official rankings.",
} as const;

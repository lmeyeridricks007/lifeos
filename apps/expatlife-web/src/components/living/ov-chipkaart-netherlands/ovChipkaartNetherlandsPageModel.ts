import { LIVING_GETTING_AROUND_PATH, LIVING_PILLAR_ROOT_PATH } from "@/src/components/living/livingPillarContent";
import {
  CAR_SHARING_NETHERLANDS_PATH,
  DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
} from "@/src/components/living/driving-licence-exchange-netherlands/drivingLicenceExchangeNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Public Transport Cluster — lead PATH exports (tickets, rail, local modes). */
export const OV_CHIPKAART_NETHERLANDS_PATH = "/netherlands/living/ov-chipkaart-netherlands/" as const;
export const OVPAY_NETHERLANDS_PATH = "/netherlands/living/ovpay-netherlands/" as const;
export const NS_TRAINS_NETHERLANDS_PATH = "/netherlands/living/ns-trains-netherlands/" as const;
export const TRAMS_NETHERLANDS_PATH = "/netherlands/living/trams-netherlands/" as const;
export const METRO_NETHERLANDS_PATH = "/netherlands/living/metro-netherlands/" as const;
export const REGIONAL_BUSES_NETHERLANDS_PATH = "/netherlands/living/regional-buses-netherlands/" as const;
export const CYCLING_NETHERLANDS_PATH = "/netherlands/living/cycling-netherlands/" as const;
export const BIKE_SHARING_NETHERLANDS_PATH = "/netherlands/living/bike-sharing-netherlands/" as const;
export const TRAIN_DISCOUNTS_NETHERLANDS_PATH = "/netherlands/living/train-discounts-netherlands/" as const;
export const WEEKEND_TRAVEL_NETHERLANDS_PATH = "/netherlands/living/weekend-travel-netherlands/" as const;

export const GETTING_AROUND_PATH = LIVING_GETTING_AROUND_PATH;
export const LIVING_HUB_PATH = LIVING_PILLAR_ROOT_PATH;

export {
  CAR_SHARING_NETHERLANDS_PATH,
  DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
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
const VISUAL_PREFIX = "ov-chipkaart-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const ovChipkaartNetherlandsPage = {
  slug: "ov-chipkaart-netherlands",
  path: OV_CHIPKAART_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(OV_CHIPKAART_NETHERLANDS_PATH) ?? "2026-09-07",
  seo: {
    title: "OV-chipkaart in the Netherlands | Complete Guide for Expats",
    description:
      "How the personal OV-chipkaart works for expats: anonymous vs personal cards, buying and topping up, check-in/out, missed checkout fixes, subscriptions high-level, and when OVpay is enough.",
    keywords: [
      "OV-chipkaart Netherlands",
      "OV chipkaart expats",
      "personal OV-chipkaart",
      "anonymous OV-chipkaart",
      "OV-chipkaart top up",
      "OV-chipkaart check in check out",
      "missed checkout OV-chipkaart",
      "OV-chipkaart vs OVpay",
      "Dutch public transport card",
      "OV chip card Netherlands",
      "NS Flex OV-chipkaart",
      "public transport Netherlands card",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Public transport",
    pageTitle: "OV-chipkaart in the Netherlands",
    subtitle:
      "What the personal travel card is, how anonymous and personal cards differ, how to buy and top up, check-in and check-out discipline, missed checkout fixes, and when OVpay already covers your week.",
    primaryCta: { label: "Anonymous vs personal", href: "#anonymous-vs-personal" },
    secondaryCta: { label: "OV-chipkaart checklist", href: "#checklist" },
    chips: ["What it is", "Anonymous vs personal", "Top-up", "Check-in/out", "Vs OVpay"],
    disclaimer:
      "General orientation only — not legal, financial or product advice and not a substitute for OV-chipkaart.nl, OVpay, NS or local operator terms. Products, balances and contactless rules change. Verify current steps on official sites before you travel or subscribe.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch tram platform: multicultural expat holding a personal OV-chipkaart near a validator pole, soft daylight brick station and bikes, reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what-it-is", label: "What it is" },
    { href: "#anonymous-vs-personal", label: "Anonymous vs personal" },
    { href: "#get-card", label: "Get a card" },
    { href: "#top-up", label: "Top-up" },
    { href: "#check-in-out", label: "Check-in/out" },
    { href: "#missed-checkout", label: "Missed checkout" },
    { href: "#products", label: "Products" },
    { href: "#vs-ovpay", label: "Vs OVpay" },
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
      "Premium orientation board titled OV-chipkaart After Arrival — four building blocks: know the card, choose anonymous or personal, learn check-in/out, decide vs OVpay — Card File Checklist rail on the right, Dutch canal and tram skyline and ExpatLife brand footer.",
      "Four habits cover most OV-chipkaart questions: card type, balance, tap discipline, and OVpay timing."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of OV-chipkaart in the Netherlands — what it is, anonymous vs personal, get and top up, check-in/out, missed checkout, vs OVpay — Dutch mobility band and ExpatLife brand footer.",
      "Six building blocks explain almost every OV-chipkaart question for newcomers."
    ),
    whatItIs: visual(
      "what-it-is",
      "Premium ecosystem diagram — one smartcard for train, tram, metro and bus validators — desk scene with card, app phone and Dutch station props, General information only rail.",
      "One card family covers most Dutch public transport taps — operators still set their own products."
    ),
    anonymousVsPersonal: visual(
      "anonymous-vs-personal",
      "Premium comparison board — anonymous disposable balance vs personal named card with online account, auto-reload and subscriptions — calm Dutch desk with two card mocks and Verify before you buy rail.",
      "Anonymous is fine for short stays; personal unlocks account tools most residents want."
    ),
    getCard: visual(
      "get-card",
      "Premium acquire map — service desks, station machines, online order and pickup — Dutch NS-style hall without fake logos, checklist rail for ID and address notes.",
      "Buy where it is calm — machines and desks both work; personal cards need account setup."
    ),
    topUp: visual(
      "top-up",
      "Premium top-up timeline — machine, online load, auto-reload and minimum balance habit — euro planning bands as orientation only, Dutch kitchen-table phone scene.",
      "Keep a buffer before busy weeks — empty cards create gate stress."
    ),
    checkInOut: visual(
      "check-in-out",
      "Premium trip timeline — check in at pole or gate, travel, check out at destination, transfers as new legs when required — Dutch tram and train validators with checklist rail.",
      "Every open trip needs a clean close — transfers often mean a new tap pair."
    ),
    missedCheckout: visual(
      "missed-checkout",
      "Premium recovery board — notice maximum fare, fix in app or operator flow, keep trip history screenshots — calm support desk scene with Fix notes rail.",
      "Fix missed checkouts early — waiting rarely makes the fare cheaper."
    ),
    products: visual(
      "products",
      "Premium products map — pay-as-you-go balance, season tickets, NS Flex-style subscriptions high-level — Dutch commute calendar without fake rankings.",
      "Subscriptions sit on personal cards — learn your weekly pattern before you lock a product."
    ),
    vsOvpay: visual(
      "vs-ovpay",
      "Premium decide board — bank card or phone tap vs personal OV-chipkaart — when contactless is enough and when a named card still helps — Dutch validators and phone wallet scene.",
      "OVpay covers many weeks; personal cards still shine for subscriptions and account control."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first week arrival, daily Randstad commute, weekend visitor, student pattern — first-step arrows and Dutch skyline band.",
      "Match stay length and commute rhythm to card type instead of copying a colleague."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — forgetting checkout, empty balance, buying personal too early, ignoring OVpay option — Fix notes beside each card.",
      "Most friction is tap discipline and balance — not finding a card shop."
    ),
    checklist: visual(
      "checklist",
      "Premium OV-chipkaart readiness checklist clipboard — card type chosen, balance topped, first tap practiced, missed-checkout path known, OVpay compared — Dutch kitchen table with canal light.",
      "Use this checklist so your first busy commute week stays intentional."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "Personal or OVpay", note: "Match stay length" },
    { label: "Must do", value: "Check in + out", note: "Every leg" },
    { label: "Buffer", value: "Keep balance", note: "Avoid gate stress" },
    { label: "Sibling", value: "OVpay & NS", note: "Cluster guides" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "The OV-chipkaart is the Dutch public-transport smartcard used on trains, trams, metros and buses. For expats it is less about collecting plastic and more about choosing anonymous versus personal, keeping enough balance, and closing every trip with a check-out.",
    "Getting around is the wider mobility mental model. OVpay covers contactless bank-card and phone travel. NS trains deepen rail products and commuting. This page stays on the personal OV-chipkaart journey — not full timetables and not driving.",
  ],
  introHighlights: [
    "Decide anonymous versus personal before you buy a second card you will not use.",
    "Check in and check out on every leg — missed checkouts create maximum-fare surprises.",
    "Keep a balance buffer; empty cards fail at busy gates.",
    "Compare OVpay before you assume you must carry plastic every day.",
  ],
  orientationFlowSteps: [
    "Decide whether OVpay, an anonymous card or a personal card fits your first month.",
    "Buy or order the card and create an online account if the card is personal.",
    "Top up a calm buffer and practice one short check-in / check-out loop.",
    "Learn the missed-checkout fix path before your first late-night transfer.",
  ],
  cardFileChecklist: [
    "Stay length clear (days vs months)",
    "Anonymous vs personal decision written down",
    "OVpay tried once if your bank card or phone is accepted",
    "Card purchased or ordered from an official channel",
    "Online account set up for personal cards",
    "Balance topped with a weekday buffer",
    "First check-in / check-out practiced off-peak",
    "Missed-checkout recovery path bookmarked",
  ],
  introScenarios: [
    {
      situation: "First week after arrival, no Dutch bank card yet",
      approach: "Anonymous card or ticket machine products often bridge the gap until banking and OVpay settle.",
      firstStep: "Buy a card at a station service point, top up once, practice one short loop.",
    },
    {
      situation: "Daily Randstad commute for 6+ months",
      approach: "Personal card plus subscription orientation usually beats stacking anonymous top-ups.",
      firstStep: "Open a personal account path, then compare OVpay vs subscription on OVpay and NS trains guides.",
    },
    {
      situation: "Dutch debit card already works on validators",
      approach: "OVpay-only can cover many weeks — keep OV-chipkaart for products that still need a named card.",
      firstStep: "Read OVpay, then return here only if you need subscriptions or a plastic backup.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Getting around remains the multimodal overview for bikes, modes and apps.",
    "OVpay deepens contactless bank-card and phone travel.",
    "NS trains deepens rail products and commute patterns.",
    "Car sharing is optional when OV is not enough — not a substitute for this card guide.",
  ],
  quickAnswer: {
    heading: "OV-chipkaart in one minute",
    summary:
      "An OV-chipkaart is a reloadable Dutch public-transport smartcard. Anonymous cards hold balance without an account; personal cards are named, can auto-reload, and unlock many season tickets and subscriptions. You check in at the start of a trip and check out at the end — missed checkouts often charge a maximum fare until fixed. OVpay (bank card or phone) now covers many everyday taps, so a personal OV-chipkaart is most useful when you want account control, certain products, or a reliable plastic backup.",
    bullets: [
      "Personal cards need an online account; anonymous cards do not.",
      "Always check out — open trips are expensive surprises.",
      "Top up before busy weeks; validators reject empty cards.",
      "Compare OVpay before buying plastic you will not need.",
    ],
    note: "Getting around, OVpay and NS trains are siblings — use them for multimodal overview, contactless travel and rail deep-dives.",
  },
  snapshotCards: [
    {
      title: "What it is",
      body: "One smartcard family for train, tram, metro and bus taps.",
    },
    {
      title: "Anonymous vs personal",
      body: "Disposable balance versus named account tools.",
    },
    {
      title: "Get & top up",
      body: "Buy officially, keep a buffer, enable auto-reload if useful.",
    },
    {
      title: "Check-in / check-out",
      body: "Close every leg; transfers often need a new tap pair.",
    },
    {
      title: "Missed checkout",
      body: "Fix early in app or operator flow — do not wait.",
    },
    {
      title: "Vs OVpay",
      body: "Contactless may be enough; cards still unlock products.",
    },
  ] satisfies TipCard[],
  whatItIs: {
    heading: "What the OV-chipkaart is (and is not)",
    intro:
      "Think of the OV-chipkaart as the classic Dutch travel card that talks to validators across operators. It is a payment and product carrier — not a timetable app and not a driving document.",
    paragraphs: [
      "You tap the same card family on NS gates, city metros, trams and many buses. Operators still set their own fares and products; the card is the shared wallet and ticket holder. 9292 and operator apps help you plan; the card (or OVpay) settles the trip.",
      "This guide does not replace NS journey planners, does not rank operators, and does not teach driving. For bike-first weeks and multimodal mental models, stay linked to Getting around. For rail subscriptions and commute patterns, open NS trains.",
    ],
    rows: [
      {
        topic: "Role",
        whatToCheck: "Whether you need a reusable card for balance and products.",
        tip: "If contactless already works every day, you may only need OVpay.",
      },
      {
        topic: "Coverage",
        whatToCheck: "Train, tram, metro and bus validators in your city and commute.",
        tip: "Practice on your real home–work route once off-peak.",
      },
      {
        topic: "Not included",
        whatToCheck: "Live departures, seat reservations and driving rights.",
        tip: "Use planner apps and sibling guides for those jobs.",
      },
      {
        topic: "Account value",
        whatToCheck: "Whether you want trip history, auto-reload and subscriptions.",
        tip: "That usually means a personal card — see the next section.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Shared wallet",
        body: "One plastic can carry balance and many travel products across operators.",
      },
      {
        title: "Operator products differ",
        body: "NS Flex-style options and city season tickets are not the same product — verify each.",
      },
      {
        title: "Cluster siblings",
        body: "OVpay and NS trains complete contactless and rail depth; this page stays on the card.",
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
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless bank-card and phone travel.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Rail products and commute patterns.",
      },
    ] satisfies TransportLink[],
  },
  anonymousVsPersonal: {
    heading: "Anonymous vs personal OV-chipkaart",
    intro:
      "Anonymous cards are the simple balance holders. Personal cards are named, linked to an online account, and unlock tools most longer-stay expats eventually want.",
    paragraphs: [
      "Anonymous cards are quick: buy, top up, travel. They are harder to protect if lost, and many subscriptions will not load on them. Personal cards require registration (and usually identity details) but support online top-up, auto-reload, trip overview and a clearer path to season tickets.",
      "Short visitors often stay anonymous or ticket-based. Residents and long assignees usually move to personal — or lean on OVpay and keep a personal card only for products that still need one. Do not buy both on day one unless you already know why.",
    ],
    rows: [
      {
        topic: "Anonymous",
        whatToCheck: "No account; balance on the plastic; limited product options.",
        tip: "Fine for short stays and backup plastic.",
      },
      {
        topic: "Personal",
        whatToCheck: "Named card, online account, auto-reload and subscription pathways.",
        tip: "Default for six-month-plus stays with weekly OV.",
      },
      {
        topic: "Loss & block",
        whatToCheck: "Whether you can freeze and recover value via an account.",
        tip: "Personal cards are usually easier to protect — verify current rules.",
      },
      {
        topic: "Subscriptions",
        whatToCheck: "Which products require a personal card.",
        tip: "Check NS and local operator pages before you assume anonymous works.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Start simple",
        body: "If you arrive without documents sorted, anonymous or OVpay can bridge week one.",
      },
      {
        title: "Upgrade intentionally",
        body: "Move to personal when you want auto-reload or a season product — not because a forum said so.",
      },
      {
        title: "One primary tool",
        body: "Avoid juggling three half-loaded cards; pick a primary and one backup method.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless alternative when you may not need plastic yet.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "First-week mobility orientation including apps.",
      },
    ] satisfies TransportLink[],
  },
  getCard: {
    heading: "How to get an OV-chipkaart",
    intro:
      "Buy from official channels: station service desks, ticket machines where offered, or the official online order flow for personal cards. Avoid random resellers with unclear balance.",
    paragraphs: [
      "Anonymous cards are often available immediately at stations. Personal cards may be ordered online and delivered, or handled via service desks depending on current processes — verify the live OV-chipkaart and NS English pages for your situation.",
      "Have a delivery address that can receive post if you order. After arrival, activate and link the card in your account before you rely on it for Monday peak. Soft NS CTAs later are orientation only — not a ranking of retailers.",
    ],
    steps: [
      {
        phase: "Choose card type",
        timing: "Before purchase",
        detail: "Anonymous for short stays; personal for account tools and many subscriptions.",
      },
      {
        phase: "Buy or order",
        timing: "Day of setup",
        detail: "Use station desk/machine or official online order — keep the receipt.",
      },
      {
        phase: "Create account",
        timing: "Personal cards",
        detail: "Register, link the card number, and confirm the card shows as active.",
      },
      {
        phase: "First top-up",
        timing: "Before first commute",
        detail: "Load a buffer and test one short check-in / check-out loop off-peak.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Official only",
        body: "Prefer OV-chipkaart.nl, NS and recognised operator desks over informal sellers.",
      },
      {
        title: "English pages exist",
        body: "Start on English FAQs, then switch to Dutch pages if a step is clearer there.",
      },
      {
        title: "Keep the card number",
        body: "Photograph the card number (not as a public post) for account and block flows.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Station products and rail commute context.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Apps and first-week mobility setup.",
      },
    ] satisfies TransportLink[],
  },
  topUp: {
    heading: "Top-up, balance and auto-reload",
    intro:
      "Empty cards fail at gates. Treat balance like phone credit: top up before busy weeks, and enable auto-reload on personal cards if your pattern is stable.",
    paragraphs: [
      "You can usually top up at station machines, some service desks, and online for personal cards. Auto-reload (automatic top-up) helps residents avoid mid-commute surprises. Minimum balance requirements can apply for certain trips — verify current thresholds on official pages.",
      "Orientation ranges below are planning cues only. Fares differ by distance, operator and product. This is not a price list.",
    ],
    rows: [
      {
        category: "Machine top-up",
        range: "Immediate",
        notes: "Useful when online load has not yet written to the card",
      },
      {
        category: "Online load",
        range: "Account-linked",
        notes: "Personal cards — confirm when balance becomes travel-ready",
      },
      {
        category: "Auto-reload",
        range: "Threshold-based",
        notes: "Set only after your weekly spend is predictable",
      },
      {
        category: "Busy-week buffer",
        range: "Personal habit",
        notes: "Keep headroom above one typical return commute",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Write before travel",
        body: "Some online top-ups need a check-in or machine action before the balance is live — read the confirmation.",
      },
      {
        title: "Do not chase zero",
        body: "Running to €0 invites peak-hour failure at the gate.",
      },
      {
        title: "Subscriptions change maths",
        body: "Season products may reduce raw balance spend — deepen on NS trains and operator pages.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless travel that bills your bank card instead of card balance.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "When rail subscriptions change how you pay.",
      },
    ] satisfies TransportLink[],
  },
  checkInOut: {
    heading: "Check-in and check-out discipline",
    intro:
      "Dutch OV pricing assumes a closed trip. Check in when you start, check out when you finish. Transfers often mean a new check-in — do not assume one tap covers a multimodal journey.",
    paragraphs: [
      "Validators are poles or gates. Hold the card flat and still until you see or hear confirmation. On trains, remember station gates or platform poles depending on the station design. On trams and buses, tap as you board and again when you leave if the operator requires it.",
      "OVpay follows similar leg logic — deepen that on the OVpay guide. The painful pattern for newcomers is leaving a trip open and discovering a maximum fare later.",
    ],
    steps: [
      {
        phase: "Check in",
        timing: "Start of leg",
        detail: "Tap at the pole or gate before you board or enter the paid area.",
      },
      {
        phase: "Travel",
        timing: "During",
        detail: "Keep the same payment method for that open trip — do not switch mid-leg casually.",
      },
      {
        phase: "Check out",
        timing: "End of leg",
        detail: "Tap again at destination; wait for confirmation before you walk away.",
      },
      {
        phase: "Transfer",
        timing: "Mode or operator change",
        detail: "Often check out, then check in again — treat each leg as its own pair.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Confirmation matters",
        body: "If the beep fails, try once more flat and still — then step aside and use another method.",
      },
      {
        title: "Same method per leg",
        body: "Mixing phone wallet and plastic mid-trip creates support headaches.",
      },
      {
        title: "Practice off-peak",
        body: "Learn your home station’s gate layout before Monday 08:00.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless check-in/out with bank card or phone.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Tap discipline inside the wider mobility model.",
      },
    ] satisfies TransportLink[],
  },
  missedCheckout: {
    heading: "Missed checkout and maximum fare",
    intro:
      "If you forget to check out, systems often charge a maximum fare until the trip is corrected. Fix it as soon as you notice — waiting rarely helps.",
    paragraphs: [
      "Personal accounts and operator apps usually show recent trips. Use the official missed check-out or journey correction flow described on OV-chipkaart, OVpay or operator English pages. Keep screenshots of odd charges before you call support.",
      "Prevention beats recovery: build a habit of tapping when you leave the platform or vehicle. If gates are open after hours, still look for a pole. This section is orientation — follow the live operator steps for your ticket type.",
    ],
    rows: [
      {
        topic: "Symptom",
        whatToCheck: "Maximum fare, open trip, or missing check-out in history.",
        tip: "Open trip history the same evening if something felt wrong.",
      },
      {
        topic: "Fix path",
        whatToCheck: "In-app correction, website form or service desk process.",
        tip: "Bookmark the English FAQ before you need it at 23:00.",
      },
      {
        topic: "Evidence",
        whatToCheck: "Time, stations, and screenshots of the open trip.",
        tip: "Support moves faster with clear journey details.",
      },
      {
        topic: "Prevention",
        whatToCheck: "Exit poles at your regular stations — including late hours.",
        tip: "Walk the exit path once when the station is quiet.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Act early",
        body: "Same-day corrections are calmer than month-end statement hunting.",
      },
      {
        title: "Do not force gates",
        body: "If a validator fails, step aside and use a machine ticket or desk — then fix later.",
      },
      {
        title: "OVpay has its own flow",
        body: "Contactless corrections live on the OVpay guide — do not mix instructions casually.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Missed checkout orientation for bank-card and phone travel.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Station and rail product context when trips go wrong.",
      },
    ] satisfies TransportLink[],
  },
  products: {
    heading: "Products and subscriptions (high-level)",
    intro:
      "Balance pay-as-you-go is the default. Season tickets and subscription-style products (including NS Flex-style options) usually need a personal card and a stable weekly pattern.",
    paragraphs: [
      "Do not buy a subscription on day two. Ride for a week or two, note peak versus off-peak habits, then compare products on official NS and local operator pages. Soft NS listings later are discovery only — not rankings or savings guarantees.",
      "City tram/metro season tickets and national rail products solve different weeks. Getting around covers when bikes replace short hops; NS trains deepens rail commuting. This section only orients you that products exist and usually sit on personal cards.",
    ],
    rows: [
      {
        topic: "Pay-as-you-go",
        whatToCheck: "Balance or OVpay per trip without a season commitment.",
        tip: "Best while your pattern is still forming.",
      },
      {
        topic: "Season / travel products",
        whatToCheck: "Route or network coverage, peak rules, personal-card requirement.",
        tip: "Match the product to real days travelled — not optimism.",
      },
      {
        topic: "NS Flex-style",
        whatToCheck: "Subscription billing, class, and whether plastic or app is primary.",
        tip: "Deepen on NS trains before you switch.",
      },
      {
        topic: "Student / discount schemes",
        whatToCheck: "Eligibility windows and required documents.",
        tip: "Verify on official pages — schemes change.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Pattern first",
        body: "Two calm weeks of trip history beat guessing a season ticket.",
      },
      {
        title: "Personal card gate",
        body: "Many products will not load on anonymous cards — plan the upgrade.",
      },
      {
        title: "No fake savings claims",
        body: "ExpatLife will not promise euro amounts — run your own maths on official calculators.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Rail subscriptions and commute product orientation.",
      },
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "When contactless pay-as-you-go is enough.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "When bikes and multimodal habits change product need.",
      },
    ] satisfies TransportLink[],
  },
  vsOvpay: {
    heading: "When OV-chipkaart still matters vs OVpay",
    intro:
      "OVpay lets many travellers tap a Dutch bank card or phone. A personal OV-chipkaart remains useful for subscriptions, account control, backups and cases where contactless is refused.",
    paragraphs: [
      "If your debit card or wallet already works on your daily validators, you can live OVpay-first and keep this guide as the plastic/product path. If you need season tickets, prefer a named card account, or want a backup when phones die, keep a personal OV-chipkaart ready.",
      "Foreign cards are less reliable on Dutch validators than Dutch-issued debit. Getting around and OVpay explain the contactless reality; this page helps you decide when plastic still earns a place in your wallet.",
    ],
    rows: [
      {
        topic: "OVpay-first wins",
        whatToCheck: "Reliable Dutch debit or wallet taps on your real routes.",
        tip: "Skip buying plastic until a product requires it.",
      },
      {
        topic: "Personal card wins",
        whatToCheck: "Subscriptions, auto-reload preference, or weak contactless acceptance.",
        tip: "Use personal card as primary; keep OVpay as backup if useful.",
      },
      {
        topic: "Anonymous card wins",
        whatToCheck: "Short stay, no account appetite, occasional OV only.",
        tip: "Top up once and retire the card when you leave.",
      },
      {
        topic: "Hybrid",
        whatToCheck: "OVpay weekdays + personal card for a season product.",
        tip: "Common once your commute stabilises — still one primary habit per leg.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Test your card once",
        body: "A single successful OVpay tap on your commute route answers half the question.",
      },
      {
        title: "Phone battery risk",
        body: "Plastic backup still calms late trains when wallets fail.",
      },
      {
        title: "Cluster reading order",
        body: "Getting around → OVpay → this page → NS trains for product depth.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless travel deep-dive.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider mobility model including apps and bikes.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "When rail products tip you toward a personal card.",
      },
    ] satisfies TransportLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Transport tools to explore",
    subtitle:
      "Soft CTAs for established Dutch rail and mobility options when your week runs on OV. This block is not a ranking of operators, cards or apps.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for OV-chipkaart week — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-ov-chipkaart-support-providers",
    analyticsPageContext: "ov-chipkaart-netherlands-recommended-options",
    categoryLinks: [
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: OVPAY_NETHERLANDS_PATH, label: "OVpay" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat OV-chipkaart scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "Landed this week, no Dutch bank account yet",
        approach: "Anonymous card or machine tickets bridge until banking and OVpay settle.",
        firstStep: "Buy once at a station, top up, practice a short loop.",
      },
      {
        situation: "Daily Amsterdam–Utrecht or similar commute",
        approach: "Personal card plus later subscription comparison usually beats anonymous top-ups.",
        firstStep: "Create a personal account, ride two weeks, then open NS trains.",
      },
      {
        situation: "Dutch debit already taps everywhere you go",
        approach: "OVpay-first is enough for many residents; keep plastic for products or backup.",
        firstStep: "Read OVpay, then decide if this page’s personal card path is still needed.",
      },
      {
        situation: "Weekend visitor for 10 days",
        approach: "Anonymous balance or OVpay if accepted — skip subscriptions.",
        firstStep: "One top-up and strict check-out habit.",
      },
      {
        situation: "Student with changing timetable",
        approach: "Stay flexible on pay-as-you-go until eligibility and routes are stable.",
        firstStep: "Verify student products on official pages before locking a season ticket.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Forgetting to check out",
      body: "Open trips trigger maximum-fare style charges and stressful corrections.",
      advice: "Build an exit-pole habit and fix the same day if you miss one.",
    },
    {
      title: "Running the balance to zero",
      body: "Peak-hour rejection at the gate is an expensive time lesson.",
      advice: "Keep a buffer or enable auto-reload on a personal card.",
    },
    {
      title: "Buying personal on day one without a plan",
      body: "You may only need OVpay or an anonymous bridge for week one.",
      advice: "Test contactless and your real routes before you commit.",
    },
    {
      title: "Ignoring OVpay entirely",
      body: "Some expats carry unused plastic while their debit card already works.",
      advice: "Read the OVpay guide and pick one primary method per leg.",
    },
    {
      title: "Loading subscriptions too early",
      body: "Guessing peak patterns wastes money when your office days are still fluid.",
      advice: "Collect two weeks of trip history, then compare products on NS trains.",
    },
    {
      title: "Mixing payment methods mid-leg",
      body: "Switching from phone to plastic mid-journey creates support chaos.",
      advice: "Finish the open trip with the same method you checked in with.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "OV-chipkaart readiness checklist",
    intro: "Use this before your first busy commute week on a personal or anonymous card.",
    items: [
      "Stay length and weekly OV pattern sketched",
      "OVpay tested once if a Dutch debit or wallet is available",
      "Anonymous vs personal decision made",
      "Card bought or ordered via an official channel",
      "Personal account linked (if applicable)",
      "Balance buffer topped up",
      "Home and work check-in/out poles walked once",
      "Missed-checkout FAQ bookmarked",
      "Subscription decision deferred until pattern is stable",
      "Sibling guides opened: Getting around, OVpay, NS trains",
    ],
  },
  howTo: {
    heading: "How to set up OV-chipkaart calmly as an expat",
    steps: [
      {
        name: "Decide your primary payment method",
        text: "Test OVpay if possible, then choose anonymous card, personal card, or hybrid based on stay length and products.",
      },
      {
        name: "Acquire the card through official channels",
        text: "Buy or order from recognised desks, machines or the official online flow — keep proof of purchase.",
      },
      {
        name: "Link the account and top up a buffer",
        text: "For personal cards, register, link the card number, and load enough balance for a calm week.",
      },
      {
        name: "Practice one full check-in / check-out loop",
        text: "Use an off-peak short hop so Monday peak is not your first validator lesson.",
      },
      {
        name: "Bookmark the missed-checkout fix, then revisit products later",
        text: "Know the correction path before you need it, and only compare subscriptions after your pattern stabilises.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to set up an OV-chipkaart in the Netherlands as an expat",
    description:
      "Orientation steps for expats choosing anonymous or personal OV-chipkaart, topping up, practising check-in/out and preparing missed-checkout recovery.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Do I need an OV-chipkaart if I have OVpay?",
      a: "Not always. If your Dutch bank card or phone taps reliably on your routes, OVpay can cover everyday travel. Keep or get a personal OV-chipkaart when you want certain subscriptions, account tools or a plastic backup.",
    },
    {
      q: "What is the difference between anonymous and personal OV-chipkaart?",
      a: "Anonymous cards hold balance without an online account and are limited for many products. Personal cards are named, link to an account, and usually support auto-reload, clearer loss protection and season tickets. Choose based on stay length and product needs.",
    },
    {
      q: "What happens if I forget to check out?",
      a: "You may be charged a maximum fare until the trip is corrected. Use the official missed check-out flow in your account, OVpay or operator channels as soon as you notice. Prevention — tapping at every exit — is calmer than recovery.",
    },
    {
      q: "Can I use a foreign bank card on Dutch public transport?",
      a: "Sometimes, but Dutch-issued debit cards are more reliable on validators. If contactless fails, use a ticket machine, service desk or an OV-chipkaart. See OVpay for contactless acceptance orientation.",
    },
    {
      q: "Where should I buy an OV-chipkaart?",
      a: "Prefer official channels: OV-chipkaart.nl, NS service desks and recognised operator machines or desks. Avoid informal sellers with unclear balances.",
    },
    {
      q: "When should I get a subscription?",
      a: "After your weekly pattern is stable. Compare products on official NS and local operator pages — deepen rail options on NS trains. This page stays high-level.",
    },
    {
      q: "Is OV-chipkaart the same as a train timetable guide?",
      a: "No. This page covers the card, taps and products at orientation level. Use planner apps for live times and the NS trains guide for rail commuting depth.",
    },
    {
      q: "Is this legal or financial advice?",
      a: "No. ExpatLife provides general orientation only. Follow OV-chipkaart.nl, OVpay, NS and local operator instructions for purchases, refunds and corrections.",
    },
  ],
  relatedGuidesTips: [
    "Wider mobility → Getting around.",
    "Contactless taps → OVpay.",
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
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Contactless travel with bank card or phone.",
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
    "OV-chipkaart is the flagship personal-card guide in the Public Transport cluster.",
    "Getting around remains the wider mobility overview.",
    "OVpay covers contactless bank-card and phone travel.",
    "NS trains, Trams, Metro and Regional buses are mode siblings.",
    "Cycling and Bike sharing continue the active-mobility lane.",
  ],
  transportHubCards: [
    {
      label: "OV-chipkaart",
      href: OV_CHIPKAART_NETHERLANDS_PATH,
      status: "live",
      description: "Personal travel card setup — you are here.",
    },
    {
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Contactless bank-card and phone travel.",
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
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Compare contactless taps to carrying plastic.",
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
    "Contactless first → OVpay.",
    "Rail commute depth → NS trains.",
    "City surface rail → Trams.",
    "Bus corridors → Regional buses.",
    "Everyday bikes → Cycling.",
    "Subscription fleets → Bike sharing.",
  ],
  officialSources: [
    {
      label: "OV-chipkaart — English FAQ",
      href: "https://www.ov-chipkaart.nl/en/frequently-asked-questions",
      description: "Official orientation for buying, balance and missed check-out",
    },
    {
      label: "OVpay — contactless travel",
      href: "https://www.ovpay.nl/en",
      description: "Official contactless bank-card and phone travel information",
    },
    {
      label: "NS — English",
      href: "https://www.ns.nl/en",
      description: "Dutch Railways tickets, subscriptions and station services",
    },
    {
      label: "9292 — journey planner",
      href: "https://9292.nl/en",
      description: "Multimodal public-transport journey planning",
    },
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "Dutch government portal for living and transport orientation",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Know the card.",
        "Choose anonymous or personal.",
        "Learn check-in/out.",
        "Decide vs OVpay.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "What it is.",
        "Anonymous vs personal.",
        "Get and top up.",
        "Check-in/out.",
        "Missed checkout.",
        "Vs OVpay.",
      ],
    },
    whatItIs: {
      title: "From the visual — card cues",
      items: [
        "Shared wallet across modes.",
        "Operator products differ.",
        "Not a timetable app.",
        "Cluster siblings complete the picture.",
      ],
    },
    anonymousVsPersonal: {
      title: "From the visual — card-type cues",
      items: [
        "Anonymous = simple balance.",
        "Personal = account tools.",
        "Loss protection differs.",
        "Subscriptions usually need personal.",
      ],
    },
    getCard: {
      title: "From the visual — acquire cues",
      items: [
        "Choose card type.",
        "Buy officially.",
        "Link personal account.",
        "First top-up and test tap.",
      ],
    },
    topUp: {
      title: "From the visual — balance cues",
      items: [
        "Machine top-up.",
        "Online load timing.",
        "Auto-reload habit.",
        "Keep a busy-week buffer.",
      ],
    },
    checkInOut: {
      title: "From the visual — tap cues",
      items: [
        "Check in at start.",
        "Travel on one method.",
        "Check out at end.",
        "Transfers often need new pairs.",
      ],
    },
    missedCheckout: {
      title: "From the visual — recovery cues",
      items: [
        "Spot maximum fare early.",
        "Use official fix flow.",
        "Keep screenshots.",
        "Learn exit poles.",
      ],
    },
    products: {
      title: "From the visual — product cues",
      items: [
        "Pay-as-you-go first.",
        "Season products later.",
        "Personal card gate.",
        "No fake savings claims.",
      ],
    },
    vsOvpay: {
      title: "From the visual — decide cues",
      items: [
        "Test contactless once.",
        "Personal for subscriptions.",
        "Anonymous for short stays.",
        "Hybrid is allowed.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "First-week arrival.",
        "Daily commute.",
        "OVpay-ready resident.",
        "Short visitor.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "Missed checkout.",
        "Empty balance.",
        "Personal too early.",
        "Ignoring OVpay.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Method chosen.",
        "Card linked.",
        "Buffer topped.",
        "Fix path bookmarked.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general information for orientation only. It is not legal, financial or product advice. Verify current products, balances and contactless rules with OV-chipkaart.nl, OVpay, NS and local operators. Soft partner links, when shown, are labelled and never presented as official rankings.",
} as const;

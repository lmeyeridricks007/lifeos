import {
  BIKE_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LIVING_HUB_PATH,
  METRO_NETHERLANDS_PATH,
  NS_TRAINS_NETHERLANDS_PATH,
  OV_CHIPKAART_NETHERLANDS_PATH,
  OVPAY_NETHERLANDS_PATH,
  REGIONAL_BUSES_NETHERLANDS_PATH,
  TRAMS_NETHERLANDS_PATH,
} from "@/src/components/living/ov-chipkaart-netherlands/ovChipkaartNetherlandsPageModel";
import {
  HIDDEN_GEMS_NETHERLANDS_PATH,
  HIKING_NETHERLANDS_PATH,
  MUSEUMS_NETHERLANDS_PATH,
} from "@/src/components/living/weekend-trips-netherlands/weekendTripsNetherlandsPageModel";
import { LIVING_TRANSPORT_APP_DOWNLOADS } from "@/src/components/living/livingTransportAppStoreLinks";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Re-export cluster PATH constants from the OV-chipkaart lead model (single source of truth). */
export {
  BIKE_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
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
const VISUAL_PREFIX = "cycling-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const cyclingNetherlandsPage = {
  slug: "cycling-netherlands",
  path: CYCLING_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(CYCLING_NETHERLANDS_PATH) ?? "2026-09-13",
  seo: {
    title: "Cycling in the Netherlands | Complete Guide for Expats",
    description:
      "Everyday cycling for expats in the Netherlands: buying or borrowing a bike, rules and etiquette, lights and locks, rain and winter riding, parking and theft prevention, and when the bike beats OV — not a bike-sharing deep-dive.",
    keywords: [
      "cycling Netherlands",
      "bike Netherlands expats",
      "Dutch cycling rules",
      "buy bike Netherlands",
      "bike lock Netherlands",
      "cycling etiquette Netherlands",
      "bike lights Netherlands",
      "winter cycling Netherlands",
      "bike theft Netherlands",
      "bike vs public transport Netherlands",
      "fiets Netherlands",
      "expat cycling guide",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Active mobility",
    pageTitle: "Cycling in the Netherlands",
    subtitle:
      "Everyday bike life for expats: how to get a bike, ride with Dutch rules and etiquette, keep lights and locks ready, handle rain and winter, park more safely, and know when the bike beats OV — orientation, not legal advice or a bike-sharing deep-dive.",
    primaryCta: { label: "Buy or borrow", href: "#buying" },
    secondaryCta: { label: "Cycling checklist", href: "#checklist" },
    chips: ["Everyday bike life", "Rules & etiquette", "Lights & locks", "Rain & winter", "Bike vs OV"],
    disclaimer:
      "General orientation only — not legal, insurance or product advice and not a substitute for traffic rules, municipality parking rules or police guidance. Laws, local bylaws and product terms change. Verify current rules on official sources before you ride or buy.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch canal bike path: multicultural expat cycling a practical city bike under soft daylight with brick houses, cycle path markings and soft greenery, reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#buying", label: "Buy or borrow" },
    { href: "#rules", label: "Rules & etiquette" },
    { href: "#gear", label: "Lights & locks" },
    { href: "#weather", label: "Rain & winter" },
    { href: "#parking", label: "Parking & theft" },
    { href: "#bike-vs-ov", label: "Bike vs OV" },
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
      "Premium orientation board titled Cycling After Arrival — four building blocks: get a workable bike, learn rules and etiquette, lock and light every trip, know when bike beats OV — Ride File Checklist rail on the right, Dutch canal bike skyline and ExpatLife brand footer.",
      "Four habits cover most first-month cycling questions: bike access, rules, security, and mode choice."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of cycling in the Netherlands — buy or borrow, rules, lights and locks, rain and winter, parking and theft, bike vs OV — Dutch cycle path band and ExpatLife brand footer.",
      "Six building blocks explain almost every everyday cycling question for newcomers."
    ),
    buying: visual(
      "buying",
      "Premium buy vs borrow board — used bike purchase, short borrow, subscription via bike sharing sibling — calm Dutch bike shop desk scene with Decision checklist rail, canal skyline and ExpatLife brand footer.",
      "Match stay length and maintenance appetite before you buy, borrow or open Bike sharing."
    ),
    rules: visual(
      "rules",
      "Premium rules and etiquette board — cycle paths, right-of-way orientation, hand signals, phone and music habits — Dutch junction desk scene with Etiquette notes rail and ExpatLife brand footer.",
      "Predictable path habits matter as much as knowing the formal rules."
    ),
    gear: visual(
      "gear",
      "Premium lights locks and safety gear board — front and rear lights, solid locks, bell, reflective cues — evening Dutch bike path scene with Gear checklist rail and ExpatLife brand footer.",
      "Lights and a serious lock prevent most avoidable evening and parking stress."
    ),
    weather: visual(
      "weather",
      "Premium rain and winter riding board — waterproof layers, slower braking, visibility, icy mornings — soft Dutch autumn canal scene with Weather notes rail and ExpatLife brand footer.",
      "Dutch cycling continues in rain — gear and speed choices keep trips calm."
    ),
    parking: visual(
      "parking",
      "Premium parking and theft prevention board — fixed object lock, busy racks, frame number notes, avoid dark corners — Dutch station bike rack desk scene with Theft prevention rail and ExpatLife brand footer.",
      "Where and how you lock matters more than how expensive the bike looks."
    ),
    bikeVsOv: visual(
      "bike-vs-ov",
      "Premium decide board — when bike beats OV vs multimodal bike plus train or bus — Dutch multimodal desk with Mode choice rail, canal skyline and ExpatLife brand footer.",
      "Short dry trips often favour the bike; longer wet corridors often stitch bike plus OV."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first week arrival, daily city commute, student budget, rain season, station feed — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match stay length and corridor pattern to bike habits instead of copying a colleague."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — no lights, weak lock, wrong side of path, phone distraction, ignoring rain gear, forcing bike when OV is calmer — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is lighting, locking and etiquette — not finding a bike shop."
    ),
    checklist: visual(
      "checklist",
      "Premium cycling readiness checklist clipboard — bike access chosen, lights and lock ready, path etiquette practiced, weather kit, parking habit, sibling guides opened — Dutch kitchen table with bike light and ExpatLife brand footer.",
      "Use this checklist so your first busy bike week stays intentional."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "Workable bike", note: "Buy, borrow or share" },
    { label: "Must do", value: "Lights + lock", note: "Every evening trip" },
    { label: "Know", value: "Path etiquette", note: "Predictable riding" },
    { label: "Sibling", value: "Bike sharing", note: "Subscription depth" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Cycling in the Netherlands is everyday transport, not a sport hobby. For expats the calm path is: get a workable bike quickly, learn path rules and etiquette, ride with lights and a serious lock, prepare for rain, and know when the bike beats OV — or when to combine both.",
    "Getting around is the wider mobility mental model. Bike sharing deepens subscription and shared fleets. OV-chipkaart, OVpay, NS trains, Trams, Metro and Regional buses cover public transport. This page stays on everyday personal cycling — ownership and borrowing orientation, rules, gear, weather, parking and multimodal choice — not bike-sharing product deep-dives or Driving Cluster car pages.",
  ],
  introHighlights: [
    "Choose buy, borrow or subscription based on stay length and maintenance appetite — open Bike sharing for subscription fleets.",
    "Ride predictably on cycle paths: lights after dark, clear hand signals, phone habits that keep you aware.",
    "Lock to a fixed object with a solid lock and note frame details — theft prevention is part of Dutch bike life.",
    "Use Getting around and OV siblings when short bike trips stop being the calmest door-to-door option.",
  ],
  orientationFlowSteps: [
    "Confirm how you will access a bike for the next 2–8 weeks — buy, borrow, or open Bike sharing.",
    "Fit working front and rear lights plus a solid lock before your first evening commute.",
    "Practice one calm path loop: right-of-way cues, hand signals, and where you will park at home and work.",
    "Write one rain plan and one multimodal backup (9292 + OV) for wet or long days.",
  ],
  travelFileChecklist: [
    "Bike access path chosen (buy / borrow / bike sharing)",
    "Working front and rear lights packed or fitted",
    "Solid lock purchased and practiced on a fixed object",
    "Frame number or proof notes stored somewhere safe",
    "One rain layer and slower-brake habit tested",
    "Home and workplace parking spots identified",
    "Sibling guides opened: Getting around, Bike sharing, OV tickets or NS as needed",
  ],
  introScenarios: [
    {
      situation: "New arrival needing a bike this week",
      approach: "Borrow or short-term share often beats a rushed used-bike purchase before you know your commute.",
      firstStep: "Open buy-or-borrow, then Bike sharing if you want a maintained subscription bike.",
    },
    {
      situation: "Daily city commute already on two wheels",
      approach: "Deepen lights, locks, etiquette and rain habits — skip rewriting your whole mobility stack.",
      firstStep: "Confirm gear and parking sections, then skim bike vs OV for wet weeks.",
    },
    {
      situation: "Mostly OV, occasional short bike hops",
      approach: "Keep a simple city bike for sub-20-minute dry trips; use OVpay or chipkaart for longer corridors.",
      firstStep: "Keep Getting around open for multimodal weeks; use this page for bike-only depth.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Getting around remains the multimodal overview for bikes, modes and apps.",
    "Bike sharing deepens subscription fleets and shared bikes — not repeated here.",
    "OVpay and OV-chipkaart deepen taps when you combine bike plus OV.",
    "NS trains covers rail legs; station bike parking still needs lock discipline.",
    "Driving Cluster car pages are separate — this guide does not teach licence exchange or buying a car.",
  ],
  quickAnswer: {
    heading: "Cycling in one minute",
    summary:
      "Dutch cities are built for everyday cycling. Expats usually need a workable bike, path etiquette, lights after dark, a serious lock, and a rain plan. Short dry trips often beat OV door-to-door; longer, wet or luggage-heavy trips often combine bike and public transport. Use Bike sharing for subscription deep-dives; Getting around for multimodal stitching; OV and NS siblings for tickets and trains.",
    bullets: [
      "Get a workable bike matched to stay length — buy, borrow or share.",
      "Ride with lights, a solid lock and predictable path etiquette.",
      "Expect rain; slow down and stay visible rather than skipping the bike forever.",
      "Compare short bike trips with OV when weather, distance or luggage change the math.",
    ],
    note: "Getting around, Bike sharing, OVpay, OV-chipkaart and NS trains are siblings — use them for multimodal overview, subscriptions and tickets.",
  },
  snapshotCards: [
    {
      title: "Buy or borrow",
      body: "Match stay length, budget and maintenance appetite.",
    },
    {
      title: "Rules & etiquette",
      body: "Cycle paths, signals and predictable riding habits.",
    },
    {
      title: "Lights & locks",
      body: "Visibility after dark and theft-resistant locking.",
    },
    {
      title: "Rain & winter",
      body: "Layers, slower braking and visibility in wet months.",
    },
    {
      title: "Parking & theft",
      body: "Fixed-object locks, busy racks and frame notes.",
    },
    {
      title: "Bike vs OV",
      body: "When two wheels win — and when to multimodal.",
    },
  ],
  buying: {
    heading: "Buying vs borrowing a bike",
    intro:
      "Your first Dutch bike decision is about access, not brand loyalty. Stay length, storage, and who fixes flats matter more than finding the perfect frame in week one.",
    paragraphs: [
      "Buying used can be excellent once you know your commute and can store the bike safely. Borrowing from a friend or employer bridge programme buys time. Subscription and shared fleets belong on the Bike sharing sibling — this page only orients you to that choice.",
      "This guide does not rank shops, guarantee prices or certify second-hand sellers. Check frame numbers, brakes, lights and lock reality before money changes hands. Soft marketplace folklore is not a substitute for a short test ride and a working lock.",
    ],
    rows: [
      {
        topic: "Buy used / new",
        whatToCheck: "Stay length, storage, repair appetite and a working lock plan.",
        tip: "A plain city bike with lights often beats a fancy weekend bike for commuting.",
      },
      {
        topic: "Borrow short-term",
        whatToCheck: "How long you can keep it and who covers flats or theft.",
        tip: "Great bridge while you learn your corridor and parking spots.",
      },
      {
        topic: "Subscription / share",
        whatToCheck: "Monthly cost, swap rules and city coverage.",
        tip: "Open Bike sharing for fleet and subscription depth — not repeated here.",
      },
      {
        topic: "Not a car decision",
        whatToCheck: "Whether you actually need four wheels for luggage or hours.",
        tip: "Driving Cluster pages cover cars; keep this page on bike access.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Stay length first",
        body: "Three months and two years need different ownership economics.",
      },
      {
        title: "Maintenance is real",
        body: "Flats, cables and rusty chains are normal — plan who fixes them.",
      },
      {
        title: "Subscription sibling",
        body: "Bike sharing owns subscription fleets and shared-bike mechanics.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Bike sharing",
        href: BIKE_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription and shared bike fleets — sibling deep-dive.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Modes, bikes and multimodal commuting.",
      },
      {
        label: "Bike vs OV",
        href: "#bike-vs-ov",
        status: "live",
        description: "When ownership still loses to public transport.",
      },
    ] satisfies TransportLink[],
  },
  rules: {
    heading: "Rules and etiquette on Dutch cycle paths",
    intro:
      "Dutch cycling works because most riders are predictable. Expats who learn path norms early feel safer than people who only memorise a few legal phrases.",
    paragraphs: [
      "Use cycle paths and lanes where they exist, keep right when practical, signal turns, and yield according to junction markings and traffic lights. Phones, earbuds and sudden stops create friction on busy corridors. This section is orientation — not legal advice. Confirm current traffic rules on official government sources.",
      "Hand signals, ringing a bell before overtaking, and giving space at crowded junctions matter as much as formal right-of-way. Children, cargo bikes and delivery riders share many paths — leave margin.",
    ],
    rows: [
      {
        topic: "Cycle paths & lanes",
        whatToCheck: "Whether a dedicated path exists for your corridor.",
        tip: "Follow path markings and signs rather than inventing pavement shortcuts.",
      },
      {
        topic: "Signals & yielding",
        whatToCheck: "Hand signals, lights and junction priority cues.",
        tip: "Be boring and readable — surprise moves cause near-misses.",
      },
      {
        topic: "Phone & audio",
        whatToCheck: "Whether you can hear bells and keep hands free.",
        tip: "Stop at the side if you need the map or a call.",
      },
      {
        topic: "Not a race",
        whatToCheck: "Pace relative to cargo bikes, kids and tourists.",
        tip: "Overtake wide and early; ring once before you pass.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Predictable wins",
        body: "Clear lines and early signals beat aggressive gap-seeking.",
      },
      {
        title: "Share the path",
        body: "Cargo bikes and families are normal weekday traffic, not obstacles.",
      },
      {
        title: "Official rules first",
        body: "Forum screenshots age poorly — verify on government traffic pages.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Lights & locks",
        href: "#gear",
        status: "live",
        description: "Visibility and locking habits that complete etiquette.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider mobility norms and apps.",
      },
      {
        label: "Official sources",
        href: "#sources",
        status: "live",
        description: "Government and trusted cycling references.",
      },
    ] satisfies TransportLink[],
  },
  gear: {
    heading: "Lights, locks and everyday safety gear",
    intro:
      "Two pieces of kit prevent most expat bike stress: working lights after dark and a lock that can attach the frame to something fixed. Everything else is useful support.",
    paragraphs: [
      "Dutch evenings get dark early in winter. Front white and rear red lights — and reflectors where required — keep you readable. A cheap cable alone is rarely enough in busy cities; combine a solid lock habit with busy, lit parking. A bell helps on shared paths. Helmets are a personal choice for adults in many everyday contexts — this page does not mandate gear beyond visibility and locking orientation.",
      "Buy gear from a reputable shop if you are unsure about fit. Soft CTAs below are optional; Bike sharing often includes maintained lights on subscription bikes.",
    ],
    steps: [
      {
        phase: "Lights",
        timing: "Before dusk rides",
        detail: "Confirm front white and rear red lights work, and pack spare batteries or charge USB lights.",
      },
      {
        phase: "Lock",
        timing: "Every park stop",
        detail: "Lock the frame (and ideally a wheel) to a fixed object — not only the front wheel.",
      },
      {
        phase: "Bell & visibility",
        timing: "Busy paths",
        detail: "Use a working bell and reflective cues when light is low.",
      },
      {
        phase: "Quick check",
        timing: "Weekly",
        detail: "Brakes, tyre pressure and light mount tightness — five calm minutes.",
      },
    ] satisfies TimelineStep[],
    rows: [
      {
        topic: "Lights",
        whatToCheck: "Front white + rear red, charged or battery-ready.",
        tip: "Test before you leave — dusk arrives earlier than you expect in winter.",
      },
      {
        topic: "Locks",
        whatToCheck: "Solid lock that reaches a fixed rack or post.",
        tip: "Busy lit racks beat lonely dark corners even with a strong lock.",
      },
      {
        topic: "Bell",
        whatToCheck: "Audible warning before overtaking.",
        tip: "One clear ring is calmer than weaving silently.",
      },
      {
        topic: "Personal extras",
        whatToCheck: "Rain layers, gloves, optional helmet preference.",
        tip: "Comfort gear keeps you riding; see rain & winter next.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Lights are non-optional after dark",
        body: "Visibility protects you and keeps path traffic readable.",
      },
      {
        title: "Lock the frame",
        body: "Wheel-only locks teach thieves how to leave you walking.",
      },
      {
        title: "Subscription alternative",
        body: "Bike sharing often bundles maintained lights — deepen there if you subscribe.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Parking & theft",
        href: "#parking",
        status: "live",
        description: "Where locking habits meet real racks.",
      },
      {
        label: "Bike sharing",
        href: BIKE_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "When you prefer maintained subscription gear.",
      },
      {
        label: "Rain & winter",
        href: "#weather",
        status: "live",
        description: "Visibility and layers for wet months.",
      },
    ] satisfies TransportLink[],
  },
  weather: {
    heading: "Rain and winter riding",
    intro:
      "Dutch bike culture does not pause for drizzle. Expats who prepare for wet roads keep more of their week on two wheels without white-knuckle mornings.",
    paragraphs: [
      "Waterproof outer layers, mudguards, slower braking distances and brighter lights matter more than buying a second bike. Black ice and hard frost are less common than damp days, but they deserve caution — walk short stretches if traction disappears. This is orientation, not weather forecasting or product testing.",
      "When wind, ice or heavy luggage make the bike stressful, stitch OV instead of forcing heroics. Keep 9292 and your OVpay or chipkaart ready as a wet-day backup.",
    ],
    rows: [
      {
        topic: "Rain layers",
        whatToCheck: "Jacket, trousers or poncho that keep you functional.",
        tip: "Comfort beats fashion on commute mornings.",
      },
      {
        topic: "Braking & speed",
        whatToCheck: "Longer stopping distance on wet bricks and metal bridges.",
        tip: "Leave earlier rather than braking late.",
      },
      {
        topic: "Visibility",
        whatToCheck: "Lights and reflective cues in grey daylight.",
        tip: "Daytime lights help in autumn downpours too.",
      },
      {
        topic: "When to switch modes",
        whatToCheck: "Ice, storms or luggage that make OV calmer.",
        tip: "Open bike vs OV and Getting around for multimodal weeks.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Drizzle is normal",
        body: "Most weeks include wet rides — prepare once, then keep going.",
      },
      {
        title: "Slow is skilled",
        body: "Wet brick and tram tracks need earlier braking, not bravado.",
      },
      {
        title: "OV backup ready",
        body: "A wet-day ticket habit prevents forced risky rides.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Bike vs OV",
        href: "#bike-vs-ov",
        status: "live",
        description: "When weather flips the mode choice.",
      },
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless taps for wet-day public transport.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider multimodal commuting model.",
      },
    ] satisfies TransportLink[],
  },
  parking: {
    heading: "Parking and theft prevention",
    intro:
      "Bike theft is a known Dutch friction point. Calm prevention beats optimism: lock to something fixed, prefer busy lit racks, and store proof details.",
    paragraphs: [
      "At home, work and stations, choose racks that let you secure the frame. Avoid leaving a prized bike overnight in dark corners. Note the frame number and keep a photo of the bike somewhere safe. Municipality and station rules for bike parking vary — follow local signs and removal notices.",
      "This page does not guarantee security outcomes or recommend insurance products. If you use OV stations often, combine lock discipline with realistic expectations about crowded racks.",
    ],
    rows: [
      {
        topic: "Fixed-object lock",
        whatToCheck: "Frame + fixed rack or post within lock reach.",
        tip: "Never lock only a quick-release front wheel.",
      },
      {
        topic: "Busy lit locations",
        whatToCheck: "Foot traffic and lighting at home, work and stations.",
        tip: "A strong lock in a lonely alley is still a soft target.",
      },
      {
        topic: "Proof notes",
        whatToCheck: "Frame number, photos and purchase proof.",
        tip: "Store them off the bike — they help if something goes wrong.",
      },
      {
        topic: "Local rules",
        whatToCheck: "Tagged or timed parking, station sheds, removal notices.",
        tip: "Follow municipality and NS station cues where posted.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Lock habit every stop",
        body: "Even five-minute shops are enough for opportunistic theft.",
      },
      {
        title: "Ugly can be safer",
        body: "A plain well-locked city bike often lasts longer than a flashy unlocked one.",
      },
      {
        title: "Station realism",
        body: "Crowded racks need patience and a lock that still reaches the frame.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Lights & locks",
        href: "#gear",
        status: "live",
        description: "Kit that makes parking habits work.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "When your bike feed ends at a rail hub.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider everyday mobility context.",
      },
    ] satisfies TransportLink[],
  },
  bikeVsOv: {
    heading: "When the bike beats OV (and when to combine)",
    intro:
      "Many expat weeks are hybrid: bike for short dry hops, OV for longer wet corridors, and bike-plus-train for station feeds. Mode honesty beats ideology.",
    paragraphs: [
      "Door-to-door time, weather, luggage and night return shape the choice. Sub-20-minute dry city trips often favour the bike. Peak OV can still win when rain, distance or a direct metro spine is simply faster. Use 9292 to compare, then keep OVpay or OV-chipkaart ready.",
      "This section links lightly to Getting around and OV siblings. It does not deep-dive tickets, tram networks or Driving Cluster cars. Bike sharing remains the place for subscription fleets when you want maintained bikes without ownership.",
    ],
    rows: [
      {
        topic: "Bike often wins",
        whatToCheck: "Short dry trips, flexible timing, direct cycle paths.",
        tip: "Count door-to-door minutes, not just vehicle speed.",
      },
      {
        topic: "OV often wins",
        whatToCheck: "Long distance, heavy rain, luggage, late thin bike routes.",
        tip: "Open OVpay, OV-chipkaart or mode siblings for ticket depth.",
      },
      {
        topic: "Bike + train / bus",
        whatToCheck: "Station or hub feeds with secure parking.",
        tip: "Lock discipline still applies at the rack before you tap in.",
      },
      {
        topic: "When sharing wins",
        whatToCheck: "Short stay or maintenance-free preference.",
        tip: "Open Bike sharing instead of forcing a purchase.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Compare live",
        body: "9292 plus a honest weather check beats static “always bike” advice.",
      },
      {
        title: "Hybrid is normal",
        body: "Many settled expats keep both a bike and an OV habit.",
      },
      {
        title: "No rankings",
        body: "We do not rank cities or operators — confirm your corridor on official tools.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Multimodal commuting mental model.",
      },
      {
        label: "Bike sharing",
        href: BIKE_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Subscription fleets when ownership is optional.",
      },
      {
        label: "Regional buses",
        href: REGIONAL_BUSES_NETHERLANDS_PATH,
        status: "live",
        description: "When the corridor is bus-first outside bike range.",
      },
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless taps for mixed weeks.",
      },
    ] satisfies TransportLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility options to explore",
    subtitle:
      "Soft CTAs for established Dutch mobility options when your week runs on a personal bike. Subscription fleets deepen on Bike sharing — this block is not a ranking of shops, locks or apps.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for an everyday cycling week — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer the Bike sharing guide for subscription bike depth.",
    placementId: "nl-living-cycling-support-providers",
    analyticsPageContext: "cycling-netherlands-recommended-options",
    categoryLinks: [
      { href: BIKE_SHARING_NETHERLANDS_PATH, label: "Bike sharing" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: OVPAY_NETHERLANDS_PATH, label: "OVpay" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat cycling scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First week arrival, need a bike before furniture arrives",
        approach: "Borrow or open Bike sharing while you learn parking and commute timing.",
        firstStep: "Read buy-or-borrow, then set lights and lock habits immediately.",
      },
      {
        situation: "Daily city commute under 20 minutes in good weather",
        approach: "Personal city bike with lights, lock discipline and path etiquette.",
        firstStep: "Confirm gear and rules, then add a rain layer kit.",
      },
      {
        situation: "Student or short contract with limited storage",
        approach: "Subscription or careful used buy — avoid oversized weekend bikes.",
        firstStep: "Open Bike sharing for fleets; keep parking notes from this page.",
      },
      {
        situation: "Mostly OV, bike for last-mile and weekends",
        approach: "Simple bike plus OVpay/chipkaart; lock seriously at stations.",
        firstStep: "Skim bike vs OV and parking; keep Getting around for the wider model.",
      },
      {
        situation: "Wet autumn with late office returns",
        approach: "Daytime lights, slower braking, and a ready OV backup.",
        firstStep: "Open rain & winter, then save a wet-day 9292 alternative.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Riding after dark without lights",
      body: "You become invisible on busy paths and create near-misses at junctions.",
      advice: "Fit working front and rear lights before the first dusk commute — test them weekly.",
    },
    {
      title: "Locking only a wheel",
      body: "Thieves lift the rest of the bike and leave you with a useless hoop.",
      advice: "Lock the frame to a fixed object; add a second lock if you park long hours.",
    },
    {
      title: "Ignoring path etiquette",
      body: "Sudden stops, wrong-side riding and silent overtakes create conflict fast.",
      advice: "Signal early, keep right when practical, and ring once before you pass.",
    },
    {
      title: "Buying a flashy bike before you have storage",
      body: "Expensive frames parked badly are stressful targets in week one.",
      advice: "Match the bike to stay length and parking reality — or open Bike sharing first.",
    },
    {
      title: "Treating rain as a reason to quit forever",
      body: "You lose the easiest Dutch mobility habit because of drizzle.",
      advice: "Add a rain layer and slower braking; keep OV as the storm backup.",
    },
    {
      title: "Forcing the bike when OV is clearly calmer",
      body: "Long wet luggage trips turn into avoidable exhaustion.",
      advice: "Compare door-to-door in 9292 and keep OVpay or chipkaart ready.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Cycling readiness checklist",
    intro: "Use this before your first busy bike week in the Netherlands.",
    items: [
      "Bike access chosen (buy / borrow / bike sharing)",
      "Working front and rear lights confirmed",
      "Solid lock practiced on a fixed object",
      "Frame number or proof photo stored safely",
      "One calm path loop practiced with hand signals",
      "Rain layer packed and slower wet braking noted",
      "Home and workplace parking spots identified",
      "Wet-day OV backup ready (OVpay / chipkaart + 9292)",
      "Sibling guides opened: Getting around, Bike sharing, and OV or NS as needed",
    ],
  },
  howTo: {
    heading: "How to start everyday cycling calmly as an expat",
    steps: [
      {
        name: "Choose how you will access a bike",
        text: "Decide buy, borrow or subscription based on stay length and storage — open Bike sharing when you want a maintained fleet.",
      },
      {
        name: "Fit lights and a serious lock",
        text: "Confirm front and rear lights work and practice locking the frame to a fixed object before your first evening ride.",
      },
      {
        name: "Learn path etiquette on a calm loop",
        text: "Practice signals, yielding cues and busy-path patience away from Monday peak pressure.",
      },
      {
        name: "Prepare for rain and parking reality",
        text: "Pack a rain layer, identify home and work racks, and store frame notes somewhere safe.",
      },
      {
        name: "Keep a multimodal backup",
        text: "Save a wet or long-day OV alternative in 9292 and open Getting around or OV siblings when the corridor leaves pure bike range.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to start everyday cycling in the Netherlands as an expat",
    description:
      "Orientation steps for expats choosing bike access, fitting lights and locks, practising path etiquette, preparing for rain and parking, and knowing when to combine cycling with OV.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Do I need to buy a bike as soon as I arrive?",
      a: "Not always. Borrowing or a short subscription can cover the first weeks while you learn your commute and parking options. Buying used works well once storage and lock habits are clear. Deepen subscription fleets on the Bike sharing guide.",
    },
    {
      q: "Are bike lights required in the Netherlands?",
      a: "You need to be properly visible after dark — typically with a white front light and red rear light, plus reflectors where required. Confirm current rules on official traffic sources. Test lights before dusk rides, especially in winter.",
    },
    {
      q: "What lock should I use?",
      a: "Use a solid lock that can secure the frame to a fixed object. Cable-only habits are weak in busy cities. Prefer busy lit racks and never lock only a quick-release wheel. This is orientation, not a product ranking.",
    },
    {
      q: "Is cycling safe in the rain?",
      a: "Many people ride in drizzle with waterproof layers, slower braking and good lights. Black ice and severe storms are different — walk short stretches or switch to OV when traction or wind make the bike stressful.",
    },
    {
      q: "When should I take OV instead of the bike?",
      a: "Long distance, heavy rain, luggage, late thin bike corridors or a clearly faster metro/tram spine often favour OV. Compare door-to-door times and keep OVpay or an OV-chipkaart ready. Getting around covers the wider multimodal model.",
    },
    {
      q: "Where do I learn bike sharing or subscription bikes?",
      a: "Open the Bike sharing sibling guide. This Cycling page stays on everyday personal bike life — ownership, borrowing orientation, rules, gear, weather and parking.",
    },
    {
      q: "Does this page cover driving or car ownership?",
      a: "No. Driving licence exchange, buying a car and related topics live in the Driving Cluster. Use those guides when four wheels are the real need.",
    },
    {
      q: "Is this legal advice?",
      a: "No. ExpatLife provides general orientation only. Follow official traffic rules, municipality parking notices and police guidance for legal obligations.",
    },
  ],
  relatedGuidesTips: [
    "Wider mobility → Getting around.",
    "Subscription fleets → Bike sharing.",
    "Contactless taps → OVpay.",
    "Personal travel card → OV-chipkaart.",
    "National rail → NS trains.",
    "Bus corridors → Regional buses.",
    "Indoor culture days → Museums.",
    "Quiet neighbourhood rides → Hidden gems.",
  ],
  relatedGuides: [
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
      description: "Subscription and shared bike fleets for expats.",
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
      description: "National rail — bike often feeds major stations.",
    },
    {
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "When corridors are bus-first outside bike range.",
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
      label: "Hiking",
      href: HIKING_NETHERLANDS_PATH,
      status: "live",
      description: "Walking culture when you want trails instead of wheels.",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Museumkaart and museum-going — bike to the door when rain ends.",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Lesser-known neighbourhood and small-town spots by bike.",
    },
  ] satisfies TransportLink[],
  transportHubTips: [
    "Cycling is the everyday bike guide in the Public Transport / active mobility continuation.",
    "Bike sharing deepens subscription and shared fleets.",
    "Getting around remains the wider mobility overview.",
    "OVpay and OV-chipkaart cover tickets when you multimodal.",
    "NS trains, Trams, Metro and Regional buses are mode siblings.",
  ],
  transportHubCards: [
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday personal cycling — you are here.",
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
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Regional and city bus travel — sibling guide.",
    },
  ] satisfies TransportLink[],
  exploreNextCards: [
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Want subscription or shared fleets instead of owning?",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Widen the model to multimodal weeks.",
    },
    {
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Need contactless taps for wet-day OV?",
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
      description: "Bike-to-station then national rail?",
    },
    {
      label: "Museums",
      href: MUSEUMS_NETHERLANDS_PATH,
      status: "live",
      description: "Swap a wet ride for Museumkaart culture?",
    },
    {
      label: "Hidden gems",
      href: HIDDEN_GEMS_NETHERLANDS_PATH,
      status: "live",
      description: "Explore quieter neighbourhood loops by bike?",
    },
  ] satisfies TransportLink[],
  exploreNextTips: [
    "Subscription fleets → Bike sharing.",
    "Modes and apps → Getting around.",
    "Contactless taps → OVpay.",
    "Plastic and products → OV-chipkaart.",
    "National rail → NS trains.",
    "Indoor culture → Museums.",
    "Quiet loops → Hidden gems.",
  ],
  officialSources: [
    {
      label: "Government.nl — traffic rules",
      href: "https://www.government.nl/topics/mobility-public-transport-and-road-safety",
      description: "Official orientation on mobility, public transport and road safety",
    },
    {
      label: "Rijksoverheid — fiets",
      href: "https://www.rijksoverheid.nl/onderwerpen/fiets",
      description: "Dutch government cycling topic pages and related rules orientation",
    },
    {
      label: "Fietsersbond",
      href: "https://www.fietsersbond.nl/",
      description: "Cyclists’ association orientation on everyday Dutch cycling",
    },
    {
      label: "9292 — journey planner",
      href: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].web,
      description: "Multimodal comparisons when bike vs OV is unclear",
    },
    {
      label: "OVpay — contactless travel",
      href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.web,
      description: "Official contactless bank-card and phone travel information",
    },
    {
      label: "NS — Dutch Railways",
      href: "https://www.ns.nl/en",
      description: "National rail orientation for bike-to-station trips",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Get a workable bike.",
        "Learn rules and etiquette.",
        "Lock and light every trip.",
        "Know when bike beats OV.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Buy or borrow.",
        "Rules & etiquette.",
        "Lights & locks.",
        "Rain & winter.",
        "Parking & theft.",
        "Bike vs OV.",
      ],
    },
    buying: {
      title: "From the visual — access cues",
      items: [
        "Buy used or new.",
        "Borrow short-term.",
        "Subscription via Bike sharing.",
        "Match stay length.",
      ],
    },
    rules: {
      title: "From the visual — etiquette cues",
      items: [
        "Use cycle paths.",
        "Signal turns.",
        "Stay predictable.",
        "Share with cargo bikes.",
      ],
    },
    gear: {
      title: "From the visual — gear cues",
      items: [
        "Front and rear lights.",
        "Solid frame lock.",
        "Working bell.",
        "Weekly quick check.",
      ],
    },
    weather: {
      title: "From the visual — weather cues",
      items: [
        "Rain layers.",
        "Slower wet braking.",
        "Extra visibility.",
        "OV backup ready.",
      ],
    },
    parking: {
      title: "From the visual — parking cues",
      items: [
        "Lock to a fixed object.",
        "Prefer busy lit racks.",
        "Store frame notes.",
        "Follow local rules.",
      ],
    },
    bikeVsOv: {
      title: "From the visual — mode cues",
      items: [
        "Short dry trips → bike.",
        "Long wet trips → OV.",
        "Station feeds → bike + rail.",
        "Short stay → Bike sharing.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "First week arrival.",
        "Daily city commute.",
        "Student storage limits.",
        "Wet late returns.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "No lights after dark.",
        "Wheel-only lock.",
        "Path etiquette gaps.",
        "Forcing bike in storms.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Bike access chosen.",
        "Lights and lock ready.",
        "Path loop practiced.",
        "Siblings opened.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general cycling and mobility orientation for newcomers. It is not legal, insurance or product advice. Traffic rules, parking bylaws and product terms change — always confirm on official government, municipality, police and provider pages before you ride or buy.",
} as const;

export type CyclingNetherlandsPage = typeof cyclingNetherlandsPage;

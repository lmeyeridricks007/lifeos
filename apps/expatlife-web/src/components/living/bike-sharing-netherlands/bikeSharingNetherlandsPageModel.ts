import {
  BIKE_SHARING_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  CYCLING_NETHERLANDS_PATH,
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
const VISUAL_PREFIX = "bike-sharing-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const bikeSharingNetherlandsPage = {
  slug: "bike-sharing-netherlands",
  path: BIKE_SHARING_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(BIKE_SHARING_NETHERLANDS_PATH) ?? "2026-09-13",
  seo: {
    title: "Bike Sharing in the Netherlands | Complete Guide for Expats",
    description:
      "Shared and subscription bikes for expats in the Netherlands: when sharing beats owning, Swapfiets-style doorstep plans, OV-fiets and city systems, costs orientation, how to start, and train multimodal tips — not a private ownership deep-dive.",
    keywords: [
      "bike sharing Netherlands",
      "Swapfiets Netherlands",
      "OV-fiets expats",
      "bike subscription Netherlands",
      "shared bikes Netherlands",
      "city bike share Netherlands",
      "bike rental Netherlands expats",
      "OV fiets train",
      "fiets abonnement Nederland",
      "expat bike sharing",
      "doorstep bike subscription",
      "station bike Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Active mobility",
    pageTitle: "Bike sharing in the Netherlands",
    subtitle:
      "Shared and subscription bikes for expats: when sharing beats owning, doorstep plans like Swapfiets versus station systems like OV-fiets, cost orientation, how to start, and calm train multimodal habits — orientation, not legal advice or a private-bike ownership deep-dive.",
    primaryCta: { label: "When sharing wins", href: "#decide" },
    secondaryCta: { label: "Bike sharing checklist", href: "#checklist" },
    chips: ["Share vs own", "Subscription models", "OV-fiets", "Costs", "How to start"],
    disclaimer:
      "General orientation only — not legal, insurance or product advice and not a substitute for provider terms, NS/OV-fiets rules or municipality parking rules. Plans, prices and station availability change. Verify current steps on official and provider sites before you subscribe or unlock.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch station plaza: multicultural expat unlocking a shared city bike near blue racks under soft daylight with canal houses and soft greenery, reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#decide", label: "Share vs own" },
    { href: "#models", label: "Models" },
    { href: "#costs", label: "Costs" },
    { href: "#start", label: "How to start" },
    { href: "#ovfiets", label: "OV-fiets + train" },
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
      "Premium orientation board titled Bike Sharing After Arrival — four building blocks: decide share vs own, pick a model, start calmly, stitch OV-fiets with train — Share File Checklist rail on the right, Dutch station bike skyline and ExpatLife brand footer.",
      "Four habits cover most first-month sharing questions: decide, model, start, multimodal."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of bike sharing in the Netherlands — share vs own, models, costs, how to start, OV-fiets plus train, mistakes to avoid — Dutch cycle path band and ExpatLife brand footer.",
      "Six building blocks explain almost every shared-bike question for newcomers."
    ),
    decide: visual(
      "decide",
      "Premium decide board — when subscription or station share beats buying — calm Dutch kitchen table with stay-length cards, Decision checklist rail, canal skyline and ExpatLife brand footer.",
      "Match stay length, storage and maintenance appetite before you buy or subscribe."
    ),
    models: visual(
      "models",
      "Premium three-model board — doorstep subscription, station OV-fiets, city dock or free-float systems — Dutch multimodal desk with Model notes rail and ExpatLife brand footer.",
      "Doorstep, station and city systems solve different weeks — they are not interchangeable."
    ),
    costs: visual(
      "costs",
      "Premium cost orientation board — monthly subscription, per-trip station fees, deposits and extras — soft Dutch bike café desk scene with Cost checklist rail and ExpatLife brand footer.",
      "Compare a realistic month, not one sunny Saturday, before you commit."
    ),
    start: visual(
      "start",
      "Premium how-to-start timeline — pick model, register, unlock first trip, set parking habit — Dutch apartment hallway with blue bike and Start checklist rail plus ExpatLife brand footer.",
      "A calm first unlock beats a rushed Monday commute signup."
    ),
    ovfiets: visual(
      "ovfiets",
      "Premium OV-fiets plus train board — tap out, unlock station bike, ride last mile, return on time — Dutch rail plaza desk scene with Multimodal rail and ExpatLife brand footer.",
      "Station bikes shine as last-mile tools after an NS or regional train leg."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — first week arrival, student storage, daily commute, train last mile, short contract — first-step arrows and Dutch skyline band with ExpatLife brand footer.",
      "Match stay length and corridor pattern to a sharing model instead of copying a colleague."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — buying too soon, wrong model, late OV-fiets return, ignoring coverage map, skipping Cycling habits, treating share like ownership — Fix notes beside each card and ExpatLife brand footer.",
      "Most friction is model mismatch and return timing — not finding a blue tyre."
    ),
    checklist: visual(
      "checklist",
      "Premium bike-sharing readiness checklist clipboard — share vs own decided, model chosen, account ready, first unlock practiced, OV-fiets rules noted, Cycling sibling opened — Dutch kitchen table with bike key and ExpatLife brand footer.",
      "Use this checklist so your first shared-bike week stays intentional."
    ),
  },
  snapshotSignals: [
    { label: "Best start", value: "Pick a model", note: "Doorstep vs station" },
    { label: "Often wins", value: "Short stays", note: "Low maintenance" },
    { label: "Multimodal", value: "OV-fiets", note: "Train last mile" },
    { label: "Sibling", value: "Cycling", note: "Rules & locks depth" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Bike sharing in the Netherlands means using a maintained fleet instead of — or before — owning a private fiets. For expats the calm path is: decide when sharing beats owning, pick a model (doorstep subscription, station OV-fiets, or city systems), understand cost orientation, start with one clean unlock, and stitch OV-fiets with trains when last-mile matters.",
    "Getting around is the wider mobility mental model. Cycling deepens everyday ownership, rules, lights and locks. OV-chipkaart, OVpay, NS trains, Trams, Metro and Regional buses cover public transport. Car sharing is a light Driving peer for occasional four wheels. This page stays on shared and subscription bikes — not private ownership deep-dives or car fleets.",
  ],
  introHighlights: [
    "Choose share vs own based on stay length, storage and who fixes flats — open Cycling when you commit to a personal bike.",
    "Treat doorstep subscription, OV-fiets and city dock systems as different tools, not one brand story.",
    "Price a realistic month (fees, deposits, late returns) before you subscribe or rely on station bikes daily.",
    "Use NS trains + OV-fiets for last-mile days; keep Getting around open for multimodal stitching.",
  ],
  orientationFlowSteps: [
    "Decide whether the next 2–8 weeks need a shared bike, a subscription, or a path toward ownership on Cycling.",
    "Pick one primary model: doorstep subscription, station OV-fiets, or a city system that actually covers your home and work.",
    "Register calmly off-peak, complete ID or card steps, and practice one unlock-return loop.",
    "Write one multimodal backup (9292 + OVpay/chipkaart + train) for wet days and empty stations.",
  ],
  travelFileChecklist: [
    "Share vs own decision written for the next 2–8 weeks",
    "Primary model chosen (doorstep / OV-fiets / city system)",
    "Account or OV product ready for unlocks",
    "Coverage checked for home, work and weekend areas",
    "First unlock and return practiced off-peak",
    "Late-return and deposit rules noted for station bikes",
    "Sibling guides opened: Cycling, Getting around, NS trains as needed",
  ],
  introScenarios: [
    {
      situation: "New arrival needing a bike this week",
      approach: "Doorstep subscription or short city share often beats a rushed used-bike purchase before you know parking.",
      firstStep: "Open share vs own, then models — keep Cycling for ownership later.",
    },
    {
      situation: "Train commute with a last-mile gap",
      approach: "OV-fiets at major stations plus NS habits; keep a backup walk or bus if racks empty.",
      firstStep: "Open OV-fiets + train, then NS trains for the rail leg.",
    },
    {
      situation: "Settled and riding every day already",
      approach: "You may outgrow pure sharing — deepen ownership habits on Cycling while keeping OV-fiets for travel days.",
      firstStep: "Skim decide and costs, then open Cycling for lights, locks and etiquette.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Getting around remains the multimodal overview for bikes, modes and apps.",
    "Cycling deepens private bike life — rules, gear, rain and theft prevention.",
    "NS trains covers rail legs that often pair with OV-fiets.",
    "OVpay and OV-chipkaart deepen taps when you combine share bikes with OV.",
    "Car sharing is a light Driving peer — occasional four wheels only.",
  ],
  quickAnswer: {
    heading: "Bike sharing in one minute",
    summary:
      "Dutch cities make shared and subscription bikes a practical first mobility layer. Expats usually choose between doorstep subscriptions (predictable monthly bike at home), station systems like OV-fiets (last mile after trains), and city dock or free-float fleets. Sharing often wins for short stays, limited storage and maintenance-free weeks; ownership deepens on the Cycling sibling when you ride daily and want a personal setup. Use Getting around for multimodal stitching; NS trains when OV-fiets feeds a rail trip.",
    bullets: [
      "Match stay length and storage before you buy or subscribe.",
      "Pick doorstep, station or city systems for the week you actually live.",
      "Price deposits, late returns and extras — not only the headline fee.",
      "Keep Cycling open for rules, lights and locks once you own or ride daily.",
    ],
    note: "Getting around, Cycling, OVpay, OV-chipkaart and NS trains are siblings — use them for multimodal overview, ownership depth and tickets.",
  },
  snapshotCards: [
    {
      title: "Share vs own",
      body: "Stay length, storage and maintenance decide the path.",
    },
    {
      title: "Models",
      body: "Doorstep subscription, OV-fiets stations, city systems.",
    },
    {
      title: "Costs",
      body: "Monthly plans, per-trip fees, deposits and extras.",
    },
    {
      title: "How to start",
      body: "Register, unlock once calmly, then build a habit.",
    },
    {
      title: "OV-fiets + train",
      body: "Station bikes for last-mile after NS or regional rail.",
    },
    {
      title: "Avoid mistakes",
      body: "Wrong model, late returns, empty-rack surprises.",
    },
  ],
  decide: {
    heading: "When sharing beats owning",
    intro:
      "Sharing is not a moral upgrade on ownership — it is a fit check. Stay length, storage, repair appetite and how often you need a bike on unpredictable days matter more than brand loyalty.",
    paragraphs: [
      "Sharing often wins in the first months: limited balcony space, unknown commute, and zero desire to fix flats at 07:00. Doorstep subscriptions shine when you want one maintained bike at home. Station bikes shine when trips start at rail hubs. City systems shine for occasional hops if coverage is real where you live.",
      "Ownership often wins once you ride daily, want custom bags or a cargo setup, or hate depending on station stock. Open the Cycling sibling for buy/borrow depth, lights, locks, rain and etiquette — this page only orients the share-vs-own fork.",
    ],
    rows: [
      {
        topic: "Short stay / temp housing",
        whatToCheck: "Contract length, storage rules and move-out date.",
        tip: "Subscription or station share usually beats a rushed used buy.",
      },
      {
        topic: "Daily city commute",
        whatToCheck: "Whether you need the same bike every morning at your door.",
        tip: "Doorstep subscription or ownership — station bikes are weaker as a sole commute tool.",
      },
      {
        topic: "Mostly train weeks",
        whatToCheck: "Last-mile gaps from major stations to office or campus.",
        tip: "OV-fiets + NS can cover many days without a home bike.",
      },
      {
        topic: "Ready to own",
        whatToCheck: "Safe parking, lock budget and repair plan.",
        tip: "Open Cycling — keep this page for travel-day OV-fiets only.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Stay length first",
        body: "Three months and three years need different bike economics.",
      },
      {
        title: "Maintenance is the product",
        body: "Sharing buys someone else’s workshop — that is the real value.",
      },
      {
        title: "Ownership sibling",
        body: "Cycling owns private bike life — rules, gear and theft habits.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Everyday personal cycling — ownership, rules, locks and rain.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Modes, bikes and multimodal commuting.",
      },
      {
        label: "Models",
        href: "#models",
        status: "live",
        description: "Doorstep vs station vs city systems.",
      },
    ] satisfies TransportLink[],
  },
  models: {
    heading: "Models: doorstep, station and city systems",
    intro:
      "Dutch bike sharing is not one product. Doorstep subscriptions, station fleets like OV-fiets, and city dock or free-float systems solve different weeks — mix them only when the rules stay clear.",
    paragraphs: [
      "Doorstep subscriptions (Swapfiets is the well-known example) deliver a maintained bike to your address with swap/repair included in a monthly plan. Station systems such as OV-fiets sit at many rail hubs: unlock after a train, ride the last mile, return on time. City systems vary by municipality — docks, app unlocks or seasonal tourist fleets — coverage maps matter more than marketing names.",
      "This guide does not rank providers or certify apps. Soft CTAs later are optional exploration only. Confirm live cities, deposits, ID rules and return windows on each official site.",
    ],
    rows: [
      {
        topic: "Doorstep subscription",
        whatToCheck: "Monthly tier, bike type, swap rules, city coverage, notice period.",
        tip: "Best when you need a reliable home bike without workshop hunting.",
      },
      {
        topic: "Station / OV-fiets",
        whatToCheck: "Which stations stock bikes, personal OV product needs, return deadlines.",
        tip: "Best as a train last-mile tool — weaker as your only everyday bike.",
      },
      {
        topic: "City dock / free-float",
        whatToCheck: "Home and work geofences, parking rules, membership vs pay-as-you-go.",
        tip: "Great for occasional hops if density is real on your corridor.",
      },
      {
        topic: "Mixing models",
        whatToCheck: "Whether you still need ownership habits from Cycling.",
        tip: "Subscription at home + OV-fiets for travel days is a common hybrid.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Match density",
        body: "Central cities usually have denser share options than smaller towns.",
      },
      {
        title: "Match trip pattern",
        body: "Doorstep for daily loops; stations for rail feeds; city apps for occasional hops.",
      },
      {
        title: "Soft CTAs only",
        body: "Provider cards later are labelled soft recommendations — verify prices yourself.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Costs",
        href: "#costs",
        status: "live",
        description: "Price a realistic month across models.",
      },
      {
        label: "OV-fiets + train",
        href: "#ovfiets",
        status: "live",
        description: "Station bikes after NS or regional rail.",
      },
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "Rail products that often pair with OV-fiets.",
      },
    ] satisfies TransportLink[],
  },
  costs: {
    heading: "Cost orientation for shared bikes",
    intro:
      "Compare a realistic month — not one sunny Saturday. Subscriptions stack monthly fees; station bikes stack per-trip fees, deposits and late-return risk; city systems mix membership and time charges.",
    paragraphs: [
      "Sketch how many days you need a bike, then price doorstep monthly tiers against occasional OV-fiets trips and against buying used (plus lock, lights and repairs). Include deposits and the cost of a missed return window. Soft price hints age quickly — confirm live quotes.",
      "This is orientation, not financial advice. If car trips still appear a few times a month, Car sharing is a light peer — keep four wheels optional rather than forcing a bike model to do everything.",
    ],
    rows: [
      {
        category: "Doorstep subscription",
        range: "Monthly tier orientation",
        notes: "Varies by city and bike type — verify live plans",
      },
      {
        category: "OV-fiets / station trips",
        range: "Per trip + product rules",
        notes: "Late returns and empty racks change the real cost",
      },
      {
        category: "City share apps",
        range: "Membership and/or time",
        notes: "Idle and out-of-zone fees matter — read the timer rules",
      },
      {
        category: "Ownership alternative",
        range: "Purchase + lock + repairs",
        notes: "Deepen on Cycling when daily riding makes buy-once calmer",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Count busy days",
        body: "Twenty commute days beat one weekend tourist price comparison.",
      },
      {
        title: "Late returns sting",
        body: "Station bikes punish forgotten return windows more than headline fees.",
      },
      {
        title: "No fake rankings",
        body: "We do not rank fleets by price — confirm your city’s live tariffs.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Share vs own",
        href: "#decide",
        status: "live",
        description: "Re-check fit before you optimise euros.",
      },
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Ownership cost habits when buying becomes the plan.",
      },
      {
        label: "Car sharing",
        href: CAR_SHARING_NETHERLANDS_PATH,
        status: "live",
        description: "Occasional four wheels when bikes are not enough.",
      },
    ] satisfies TransportLink[],
  },
  start: {
    heading: "How to start bike sharing calmly",
    intro:
      "Most friction comes from rushing signup on a Monday peak. Register off-peak, confirm coverage, unlock once for practice, then build your weekday habit.",
    paragraphs: [
      "For doorstep plans: check city availability, pick a tier, schedule delivery or pickup, and photograph the bike condition if the app asks. For OV-fiets: confirm your OV product eligibility, learn which stations stock bikes, and practice return timing. For city systems: walk the geofence around home and work before you depend on it.",
      "Keep lights, path etiquette and rain habits from the Cycling guide even on shared bikes — shared fleets still ride Dutch paths. Soft provider CTAs below are optional.",
    ],
    steps: [
      {
        phase: "Choose model",
        timing: "Day 0",
        detail: "Doorstep, OV-fiets or city system based on stay length and corridors.",
      },
      {
        phase: "Register",
        timing: "Off-peak",
        detail: "Complete ID, address or OV product steps before the first busy commute.",
      },
      {
        phase: "Practice unlock",
        timing: "First evening",
        detail: "Do one short unlock-return loop when stations and apps are calmer.",
      },
      {
        phase: "Set habits",
        timing: "Week 1",
        detail: "Save return reminders, coverage notes and a wet-day OV backup.",
      },
    ] satisfies TimelineStep[],
    rows: [
      {
        topic: "Documents",
        whatToCheck: "ID, payment method, address and any OV product requirements.",
        tip: "Screenshot confirmation emails — support chats go faster with them.",
      },
      {
        topic: "Coverage",
        whatToCheck: "Home, work and weekend areas on the live map.",
        tip: "A perfect CBD fleet does not help a suburb without stations.",
      },
      {
        topic: "Return rules",
        whatToCheck: "Deadlines, docks, and what happens if racks are full.",
        tip: "Learn the empty-rack plan before you rely on a tight train connection.",
      },
      {
        topic: "Path habits",
        whatToCheck: "Lights, signals and parking courtesy on shared bikes.",
        tip: "Open Cycling for etiquette depth that still applies here.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Practice off-peak",
        body: "First unlock is calmer on a weekday evening than Monday rain rush.",
      },
      {
        title: "One model first",
        body: "Master one system before stacking three apps and a subscription.",
      },
      {
        title: "Keep OV ready",
        body: "Empty stations and wet weeks still need OVpay or chipkaart.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Models",
        href: "#models",
        status: "live",
        description: "Confirm which system you are registering for.",
      },
      {
        label: "Cycling",
        href: CYCLING_NETHERLANDS_PATH,
        status: "live",
        description: "Path etiquette, lights and rain habits on any bike.",
      },
      {
        label: "OVpay",
        href: OVPAY_NETHERLANDS_PATH,
        status: "live",
        description: "Contactless taps when share bikes are unavailable.",
      },
    ] satisfies TransportLink[],
  },
  ovfiets: {
    heading: "OV-fiets and train multimodal habits",
    intro:
      "OV-fiets is the classic Dutch station bike: unlock after a rail trip, cover the last mile, return on time. It pairs naturally with NS and many regional stations — it is not a full replacement for a home bike.",
    paragraphs: [
      "Eligibility and products change; confirm current OV-fiets rules on official NS/OV sources before you travel. Expect busy morning stations to run low, especially in dense cities. Build a backup: walk, tram, metro, bus or a second nearby station.",
      "This section links lightly to NS trains and ticket siblings. It does not deep-dive rail products, tram networks or private ownership. Keep return timers visible — late fees and blocked accounts create more expat stress than the ride itself.",
    ],
    rows: [
      {
        topic: "When OV-fiets shines",
        whatToCheck: "Train arrival plus a short last-mile to office or campus.",
        tip: "Plan the return window before you leave the office.",
      },
      {
        topic: "Eligibility",
        whatToCheck: "Personal OV product and account status for unlocks.",
        tip: "Fix card or app issues the evening before a critical trip.",
      },
      {
        topic: "Empty racks",
        whatToCheck: "Backup walk, tram/metro/bus or alternate station.",
        tip: "9292 plus Getting around beat standing frustrated at an empty dock.",
      },
      {
        topic: "Not a home bike",
        whatToCheck: "Whether you still need doorstep access every morning.",
        tip: "Combine with subscription or ownership if daily door-to-door matters.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Timer discipline",
        body: "Return windows matter as much as unlocking the bike.",
      },
      {
        title: "Peak realism",
        body: "Monday hubs empty earlier than tourist midday maps suggest.",
      },
      {
        title: "Hybrid weeks",
        body: "Many expats keep OV-fiets for travel days and another model for local loops.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "NS trains",
        href: NS_TRAINS_NETHERLANDS_PATH,
        status: "live",
        description: "National rail orientation for bike-fed trips.",
      },
      {
        label: "OV-chipkaart",
        href: OV_CHIPKAART_NETHERLANDS_PATH,
        status: "live",
        description: "Personal travel card products that may unlock station bikes.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Wider multimodal commuting model.",
      },
      {
        label: "Metro",
        href: METRO_NETHERLANDS_PATH,
        status: "live",
        description: "When last-mile is underground instead of two wheels.",
      },
    ] satisfies TransportLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Bike-sharing options to explore",
    subtitle:
      "Soft CTAs for established Dutch mobility options when shared or subscription bikes fit your week. Private ownership deepens on Cycling — this block is not a ranking of fleets, apps or shops.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for a shared-bike week — not pay-to-rank placement unless a link is explicitly labelled as sponsored. Prefer the Cycling guide for ownership depth and Car sharing for occasional four wheels.",
    placementId: "nl-living-bike-sharing-support-providers",
    analyticsPageContext: "bike-sharing-netherlands-recommended-options",
    categoryLinks: [
      { href: CYCLING_NETHERLANDS_PATH, label: "Cycling" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: NS_TRAINS_NETHERLANDS_PATH, label: "NS trains" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat bike-sharing scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "First week arrival, need a bike before furniture arrives",
        approach: "Doorstep subscription or city share while you learn parking and commute timing.",
        firstStep: "Read share vs own and models, then register off-peak.",
      },
      {
        situation: "Student or short contract with limited storage",
        approach: "Subscription or careful station use — avoid oversized ownership commitments.",
        firstStep: "Open costs, then Cycling only if you later decide to buy.",
      },
      {
        situation: "Daily city commute under 20 minutes from home",
        approach: "Doorstep subscription or ownership; station bikes are a weak sole commute tool.",
        firstStep: "Compare decide and models, then keep Cycling open for path habits.",
      },
      {
        situation: "Mostly train, bike for last-mile and weekends",
        approach: "OV-fiets plus NS; optional city share for local hops.",
        firstStep: "Open OV-fiets + train and NS trains; keep OVpay/chipkaart ready.",
      },
      {
        situation: "Settled rider outgrowing share fleets",
        approach: "Move ownership depth to Cycling; keep OV-fiets for travel days.",
        firstStep: "Skim decide, then open Cycling for buy, locks and rain.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Buying a private bike in week one by default",
      body: "You lock money into storage and repair before you know your corridor.",
      advice: "Run share vs own for 2–8 weeks first — open Cycling when ownership clearly wins.",
    },
    {
      title: "Using OV-fiets as your only everyday bike",
      body: "Empty morning racks and return windows create constant commute stress.",
      advice: "Keep OV-fiets for last-mile rail days; use doorstep or ownership for daily loops.",
    },
    {
      title: "Ignoring late-return and deposit rules",
      body: "Fees and blocked accounts hurt more than the ride ever helped.",
      advice: "Screenshot return deadlines and set a calendar reminder before you leave the desk.",
    },
    {
      title: "Signing up without checking coverage maps",
      body: "A famous brand in the city centre does not unlock your suburb.",
      advice: "Verify home, work and weekend zones on live maps before you pay.",
    },
    {
      title: "Skipping path etiquette because the bike is shared",
      body: "Lights, signals and parking courtesy still apply — near-misses do not care who owns the frame.",
      advice: "Open Cycling for rules, lights and locks habits that transfer to every shared bike.",
    },
    {
      title: "Forcing bikes when a rare car trip is the real need",
      body: "Furniture weekends and distant family visits are not subscription-bike problems.",
      advice: "Keep Car sharing as a light peer for occasional four wheels.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Bike sharing readiness checklist",
    intro: "Use this before your first busy shared-bike week in the Netherlands.",
    items: [
      "Share vs own decision written for the next 2–8 weeks",
      "Primary model chosen (doorstep / OV-fiets / city system)",
      "Coverage checked for home, work and weekend areas",
      "Account or OV product ready for unlocks",
      "First unlock-return loop practiced off-peak",
      "Late-return, deposit and empty-rack plan noted",
      "Wet-day OV backup ready (OVpay / chipkaart + 9292)",
      "Sibling guides opened: Cycling, Getting around, and NS trains as needed",
    ],
  },
  howTo: {
    heading: "How to start bike sharing calmly as an expat",
    steps: [
      {
        name: "Decide share vs own for your stay window",
        text: "Write whether the next 2–8 weeks need a shared bike, a subscription, or a path toward ownership on Cycling.",
      },
      {
        name: "Pick one primary model",
        text: "Choose doorstep subscription, OV-fiets station bikes, or a city system that actually covers your corridors.",
      },
      {
        name: "Register and practice one unlock",
        text: "Complete account steps off-peak, then do a short unlock-return loop before Monday peak pressure.",
      },
      {
        name: "Learn return and coverage rules",
        text: "Note deadlines, deposits, docks and empty-rack backups; save them where you will see them before trips.",
      },
      {
        name: "Keep multimodal and ownership siblings ready",
        text: "Open NS trains for OV-fiets days, Getting around for stitching, and Cycling when personal bike habits matter.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to start bike sharing in the Netherlands as an expat",
    description:
      "Orientation steps for expats deciding share vs own, picking doorstep station or city models, registering calmly, practising unlocks, and stitching OV-fiets with trains.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Is bike sharing better than buying a bike in the Netherlands?",
      a: "It depends on stay length, storage and maintenance appetite. Sharing often wins for short stays and the first months; daily settled riding often moves toward ownership. Use this page for sharing models and the Cycling sibling for private bike depth.",
    },
    {
      q: "What is the difference between Swapfiets-style plans and OV-fiets?",
      a: "Doorstep subscriptions typically give you a maintained bike at home for a monthly fee. OV-fiets is a station system aimed at last-mile trips after trains. They solve different weeks and can be combined.",
    },
    {
      q: "Do I need an OV-chipkaart for bike sharing?",
      a: "Doorstep and many city apps use their own accounts. OV-fiets usually ties to personal OV products — confirm current eligibility on official NS/OV sources. OVpay and OV-chipkaart guides deepen ticket products.",
    },
    {
      q: "Can OV-fiets replace a home bike?",
      a: "Usually not for every morning commute. Station stock, return windows and walking distance to hubs make OV-fiets excellent for last-mile rail days but stressful as a sole everyday bike.",
    },
    {
      q: "Where do I learn cycling rules, lights and locks?",
      a: "Open the Cycling sibling guide. Shared bikes still ride Dutch paths — etiquette and visibility habits transfer even when you do not own the frame.",
    },
    {
      q: "Does this page cover car sharing?",
      a: "Only lightly as an explore-next peer. Occasional four wheels live on the Car sharing guide in the Driving cluster.",
    },
    {
      q: "Are provider cards rankings?",
      a: "No. Soft CTAs are optional exploration only. Ordering reflects page relevance, not a league table of fleets. Always confirm live prices and terms yourself.",
    },
    {
      q: "Is this legal advice?",
      a: "No. ExpatLife provides general orientation only. Follow official traffic rules, provider contracts and municipality parking notices for obligations.",
    },
  ],
  relatedGuidesTips: [
    "Everyday ownership & rules → Cycling.",
    "Wider mobility → Getting around.",
    "National rail + last mile → NS trains.",
    "Contactless taps → OVpay.",
    "Personal travel card → OV-chipkaart.",
    "Occasional four wheels → Car sharing (light peer).",
  ],
  relatedGuides: [
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday personal cycling — ownership, rules, locks and rain.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "OV, bikes and everyday multimodal mobility.",
    },
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "National rail — often pairs with OV-fiets last mile.",
    },
    {
      label: "Train discounts",
      href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
      status: "live",
      description: "NS discount products when weekend or off-peak rail stacks up.",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Leisure weekends that often use OV-fiets last mile.",
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
  ] satisfies TransportLink[],
  transportHubTips: [
    "Bike sharing is the subscription and shared-fleet guide in the Public Transport / active mobility continuation.",
    "Cycling deepens everyday personal bike life.",
    "Getting around remains the wider mobility overview.",
    "NS trains pairs with OV-fiets last-mile habits.",
    "OVpay and OV-chipkaart cover tickets when you multimodal.",
  ],
  transportHubCards: [
    {
      label: "Bike sharing",
      href: BIKE_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Subscription and shared bike fleets — you are here.",
    },
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday personal cycling — ownership and rules.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Modes, bikes and multimodal commuting.",
    },
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "National rail products and commute orientation.",
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
      label: "Regional buses",
      href: REGIONAL_BUSES_NETHERLANDS_PATH,
      status: "live",
      description: "Regional and city bus travel — sibling guide.",
    },
  ] satisfies TransportLink[],
  exploreNextCards: [
    {
      label: "Cycling",
      href: CYCLING_NETHERLANDS_PATH,
      status: "live",
      description: "Ready for ownership, rules, lights and locks depth?",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Widen the model to multimodal weeks.",
    },
    {
      label: "NS trains",
      href: NS_TRAINS_NETHERLANDS_PATH,
      status: "live",
      description: "Train legs that pair with OV-fiets?",
    },
    {
      label: "Weekend travel",
      href: WEEKEND_TRAVEL_NETHERLANDS_PATH,
      status: "live",
      description: "Leisure weekends needing station bikes?",
    },
    {
      label: "Train discounts",
      href: TRAIN_DISCOUNTS_NETHERLANDS_PATH,
      status: "live",
      description: "Discount products for habitual rail weekends?",
    },
    {
      label: "OVpay",
      href: OVPAY_NETHERLANDS_PATH,
      status: "live",
      description: "Need contactless taps when stations are empty?",
    },
    {
      label: "OV-chipkaart",
      href: OV_CHIPKAART_NETHERLANDS_PATH,
      status: "live",
      description: "Personal cards and products for station unlocks?",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Occasional four wheels when bikes are not enough?",
    },
  ] satisfies TransportLink[],
  exploreNextTips: [
    "Ownership & rules → Cycling.",
    "Modes and apps → Getting around.",
    "Rail + last mile → NS trains.",
    "Contactless taps → OVpay.",
    "Plastic and products → OV-chipkaart.",
    "Occasional cars → Car sharing.",
  ],
  officialSources: [
    {
      label: "NS — OV-fiets",
      href: "https://www.ns.nl/en/door-to-door/ov-fiets",
      description: "Official OV-fiets orientation for station bike hire after train trips",
    },
    {
      label: "NS — Dutch Railways",
      href: "https://www.ns.nl/en",
      description: "National rail orientation for multimodal bike-fed journeys",
    },
    {
      label: "Government.nl — mobility",
      href: "https://www.government.nl/topics/mobility-public-transport-and-road-safety",
      description: "Official orientation on mobility, public transport and road safety",
    },
    {
      label: "Rijksoverheid — fiets",
      href: "https://www.rijksoverheid.nl/onderwerpen/fiets",
      description: "Dutch government cycling topic pages and related rules orientation",
    },
    {
      label: "9292 — journey planner",
      href: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].web,
      description: "Multimodal comparisons when share bikes and OV both matter",
    },
    {
      label: "OVpay — contactless travel",
      href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.web,
      description: "Official contactless bank-card and phone travel information",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Decide share vs own.",
        "Pick a model.",
        "Start calmly.",
        "Stitch OV-fiets with train.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Share vs own.",
        "Models.",
        "Costs.",
        "How to start.",
        "OV-fiets + train.",
        "Mistakes to avoid.",
      ],
    },
    decide: {
      title: "From the visual — decide cues",
      items: [
        "Stay length first.",
        "Storage and repairs.",
        "Daily door-to-door need.",
        "Open Cycling when owning.",
      ],
    },
    models: {
      title: "From the visual — model cues",
      items: [
        "Doorstep subscription.",
        "Station OV-fiets.",
        "City dock systems.",
        "Hybrid weeks OK.",
      ],
    },
    costs: {
      title: "From the visual — cost cues",
      items: [
        "Monthly tiers.",
        "Per-trip station fees.",
        "Deposits and late returns.",
        "Compare a full month.",
      ],
    },
    start: {
      title: "From the visual — start cues",
      items: [
        "Choose model.",
        "Register off-peak.",
        "Practice unlock.",
        "Set return habits.",
      ],
    },
    ovfiets: {
      title: "From the visual — OV-fiets cues",
      items: [
        "Train then unlock.",
        "Last-mile ride.",
        "Return on time.",
        "Empty-rack backup.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "First week arrival.",
        "Student storage limits.",
        "Train last mile.",
        "Outgrowing share fleets.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "Buying too soon.",
        "OV-fiets as only bike.",
        "Late return fees.",
        "Skipping Cycling habits.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Share vs own decided.",
        "Model chosen.",
        "First unlock practiced.",
        "Siblings opened.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general bike-sharing and mobility orientation for newcomers. It is not legal, insurance or product advice. Provider terms, OV-fiets rules, parking bylaws and traffic rules change — always confirm on official government, NS/OV and provider pages before you subscribe or unlock.",
} as const;

export type BikeSharingNetherlandsPage = typeof bikeSharingNetherlandsPage;

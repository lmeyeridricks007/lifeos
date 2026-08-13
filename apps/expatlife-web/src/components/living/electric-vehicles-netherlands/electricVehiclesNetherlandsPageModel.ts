import {
  BUYING_A_CAR_NETHERLANDS_PATH,
  CAR_INSURANCE_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
  ELECTRIC_VEHICLES_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LEASE_CARS_NETHERLANDS_PATH,
  LIVING_HUB_PATH,
  MOT_APK_NETHERLANDS_PATH,
  MUNICIPALITY_PATH,
  PARKING_PATH,
  ROAD_TAX_NETHERLANDS_PATH,
  SPEED_CAMERAS_NETHERLANDS_PATH,
} from "@/src/components/living/driving-licence-exchange-netherlands/drivingLicenceExchangeNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export {
  BUYING_A_CAR_NETHERLANDS_PATH,
  CAR_INSURANCE_NETHERLANDS_PATH,
  CAR_SHARING_NETHERLANDS_PATH,
  DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
  ELECTRIC_VEHICLES_NETHERLANDS_PATH,
  GETTING_AROUND_PATH,
  LEASE_CARS_NETHERLANDS_PATH,
  LIVING_HUB_PATH,
  MOT_APK_NETHERLANDS_PATH,
  MUNICIPALITY_PATH,
  PARKING_PATH,
  ROAD_TAX_NETHERLANDS_PATH,
  SPEED_CAMERAS_NETHERLANDS_PATH,
};

export type DrivingLink = {
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
const VISUAL_PREFIX = "electric-vehicles-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const electricVehiclesNetherlandsPage = {
  slug: "electric-vehicles-netherlands",
  path: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(ELECTRIC_VEHICLES_NETHERLANDS_PATH) ?? "2026-09-04",
  seo: {
    title: "Electric Vehicles in the Netherlands | Complete Guide for Expats",
    description:
      "How expats buy, charge and own electric cars in the Netherlands: home and public charging, BPM and road-tax orientation, range and winter notes, plus light insurance and APK ties — not tax or lease advice.",
    keywords: [
      "electric vehicles Netherlands",
      "EV Netherlands expats",
      "electric car Netherlands",
      "charging station Netherlands",
      "home charging Netherlands",
      "public charging Netherlands",
      "BPM electric car Netherlands",
      "road tax electric car Netherlands",
      "EV range winter Netherlands",
      "buy electric car Netherlands",
      "EV insurance Netherlands",
      "electric car ownership Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Driving",
    pageTitle: "Electric Vehicles in the Netherlands",
    subtitle:
      "Buying, charging and owning an EV here: home and public charging, tax and road-tax orientation, realistic range and winter notes, and how EV ownership ties lightly to insurance and APK — without lease-only or car-sharing deep-dives.",
    primaryCta: { label: "Start with the EV decision", href: "#decide" },
    secondaryCta: { label: "EV ownership checklist", href: "#checklist" },
    chips: ["Home charging", "Public charging", "Tax orientation", "Range & winter", "Insurance & APK"],
    disclaimer:
      "General orientation only — not legal, tax, financial or insurance advice and not a substitute for RDW, Belastingdienst, municipality, installer, insurer or dealer contracts. Incentives, tariffs and fees change. Verify current rules and amounts on official sites before you buy, charge or drive.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch canal-side street: multicultural expat couple beside a modern compact electric hatchback at a tidy public charger, soft daylight brick houses, reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#decide", label: "Decide" },
    { href: "#buy", label: "Buying an EV" },
    { href: "#home-charging", label: "Home charging" },
    { href: "#public-charging", label: "Public charging" },
    { href: "#incentives", label: "Tax & incentives" },
    { href: "#range", label: "Range & winter" },
    { href: "#ownership-stack", label: "Insurance & APK" },
    { href: "#costs", label: "Costs" },
    { href: "#recommended-options", label: "Recommended" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#driving-hub", label: "Hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Electric Vehicles After Arrival — four building blocks: decide if an EV fits, plan charging, check tax and road-tax orientation, own with insurance and APK — EV File Checklist rail on the right, Dutch canal skyline and ExpatLife brand footer.",
      "Four habits cover most EV questions: fit, charging, tax orientation, and ownership stack."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of electric vehicles in the Netherlands — decide, buy, home charge, public charge, tax orientation, range and winter — Dutch mobility band and ExpatLife brand footer.",
      "Six building blocks explain almost every EV ownership question for newcomers."
    ),
    decide: visual(
      "decide",
      "Premium decision board — own an EV vs OV and bike vs car-share or lease — commute, parking and charging access forks with a Verify before you buy rail, Dutch canal and bike lane props.",
      "EV ownership is optional — confirm parking, charging and assignment length before you commit."
    ),
    buy: visual(
      "buy",
      "Premium purchase desk — new showroom EV versus used EV market with battery health, warranty, APK and dealer vs private notes — calm Dutch dealer-window scene.",
      "Used EVs need battery and history checks; new EVs trade price for simpler first ownership."
    ),
    homeCharging: visual(
      "home-charging",
      "Premium home charging scene — wallbox vs socket habits, VvE or landlord permission, electrician and smart meter notes — Dutch terrace house with canal light and General information only rail.",
      "Home charging is a housing and installation project — not only buying a cable."
    ),
    publicCharging: visual(
      "public-charging",
      "Premium public charging map — street poles, hubs, motorway fast charge, apps and RFID cards — Dutch city curb and highway band with ExpatLife brand footer.",
      "Public charging works with apps and cards — plan slow street charge vs trip fast charge separately."
    ),
    incentives: visual(
      "incentives",
      "Premium tax orientation board — BPM and road-tax differences for EVs at a high level, municipal or employer incentives when they exist — calculator-style desk with Dutch canal light, no fake rates.",
      "BPM and road tax can differ for EVs — confirm live rules on official tools before you budget."
    ),
    range: visual(
      "range",
      "Premium range and winter board — catalogue range vs real trips, cold-weather drop, cabin preheat and charging cadence — Dutch winter canal road scene with checklist rail.",
      "Winter and highway speed shrink usable range — plan buffers, not brochure optimism."
    ),
    ownershipStack: visual(
      "ownership-stack",
      "Premium ownership stack scene — WA insurance timing, EV repair notes, APK calendar, RDW registration — Dutch living-room desk with policy and inspection folders.",
      "EVs still need insurance, APK and registration — sibling guides deepen each track."
    ),
    costs: visual(
      "costs",
      "Premium EV cost stack — purchase or lease payment, electricity, charging fees, insurance, road tax orientation, parking and maintenance — euro planning bands as orientation only.",
      "Budget the full stack — electricity is not free and public charging fees add up."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — apartment without driveway, suburban family, short assignment, company lease temptation — first-step arrows.",
      "Match housing and assignment length to a calm first step instead of copying a colleague’s EV."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — buying before charging plan, ignoring VvE rules, brochure-only range, under-budgeting public charge fees, skipping insurance timing — Fix notes beside each card.",
      "Most friction is charging access and total cost — not finding a pretty EV online."
    ),
    checklist: visual(
      "checklist",
      "Premium EV readiness checklist clipboard — licence OK, charging plan, tax orientation checked, insurance quote ready, APK noted, parking researched — Dutch kitchen table with canal light.",
      "Use this checklist so purchase day stays intentional, not improvised."
    ),
  },
  snapshotSignals: [
    { label: "Charging first", value: "Home or public plan", note: "Before you buy" },
    { label: "Tax orientation", value: "BPM & road tax", note: "Verify live rules" },
    { label: "Range reality", value: "Winter buffers", note: "Not brochure only" },
    { label: "Ownership", value: "Insure + APK", note: "Same stack as ICE" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Electric vehicles in the Netherlands are an ownership and charging journey — purchase path, home or public charging, tax and road-tax orientation, range habits, insurance and APK — not the same topic as exchanging a foreign licence or learning the OV network.",
    "Buying a car covers general purchase and RDW transfer. Road tax and car insurance deepen those admin tracks. Lease cars and car sharing will cover those alternatives in their own guides. This page stays on buying, charging and using an EV as an expat owner or long-term driver.",
  ],
  introHighlights: [
    "Confirm where you will charge overnight before you commit money to an EV.",
    "BPM and road-tax treatment for EVs can differ from petrol or diesel — verify live official tools.",
    "Winter, highway speed and cabin heat shrink usable range versus brochure figures.",
    "Do not treat this page as tax, legal or insurance advice — verify official sources and quotes.",
  ],
  orientationFlowSteps: [
    "Decide if an EV fits your housing, commute and assignment length.",
    "Plan home charging permission and installation — or a realistic public-charging routine.",
    "Check BPM, road-tax and any incentive orientation on official tools.",
    "Complete RDW, insurance and APK habits like any other car — then drive with winter buffers.",
  ],
  evFileChecklist: [
    "Licence status clear (drive rights)",
    "Parking plan (permit, garage or private spot)",
    "Home charging permission / wallbox quote OR public charging routine",
    "BPM / road-tax orientation screenshots (dated)",
    "Battery health / warranty notes (used EVs)",
    "Insurance quote ready for transfer day",
    "APK due date noted",
    "Charging apps / RFID card set up",
  ],
  introScenarios: [
    {
      situation: "Apartment without a private driveway",
      approach: "Treat public street charging and permit parking as first-class constraints — not afterthoughts.",
      firstStep: "Walk your street for chargers and read Parking permits before you shortlist EVs.",
    },
    {
      situation: "House with driveway and a cooperative landlord or VvE",
      approach: "Home wallbox is often the calm path — but permission and electrician work come first.",
      firstStep: "Ask written permission, then get an installer quote with smart-meter notes.",
    },
    {
      situation: "Considering lease or car-share instead of owning",
      approach: "Ownership maths differs from lease and occasional share — keep those paths separate.",
      firstStep: "Use this page for ownership; open Car sharing for occasional access or Lease cars for contracted access.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "EV ownership is optional in many bike-first cities — stress-test against Getting around.",
    "General purchase and RDW transfer deepen on Buying a car.",
    "Wegenbelasting details deepen on Road tax.",
    "Cover choices deepen on Car insurance; inspection on MOT / APK.",
  ],
  quickAnswer: {
    heading: "Electric vehicles in one minute",
    summary:
      "An EV in the Netherlands still needs RDW registration, insurance and (when due) APK — plus a charging plan. Many owners charge at home with a wallbox where housing allows; others rely on public street poles, hubs and motorway fast chargers via apps or RFID cards. BPM and road tax can differ for fully electric cars versus petrol or diesel — confirm live official calculators. Plan realistic range with winter and highway buffers, not brochure optimism alone.",
    bullets: [
      "Charging access (home permission or public routine) should precede the purchase deposit.",
      "Tax and road-tax orientation for EVs is a planning topic — not a guaranteed forever-zero bill.",
      "Public charging needs apps/cards and a fee habit; electricity is not free.",
      "Insurance and APK still apply — use sibling guides for deep cover and inspection detail.",
    ],
    note: "Buying a car, road tax, car insurance, MOT / APK, lease and car-sharing guides are siblings — use them for those deep-dives, not as substitutes for Belastingdienst or installer contracts.",
  },
  snapshotCards: [
    {
      title: "Decide if an EV fits",
      body: "Housing, commute, parking and assignment length before you shortlist models.",
    },
    {
      title: "Buying an EV",
      body: "New vs used, battery health, dealer vs private — then RDW transfer.",
    },
    {
      title: "Home charging",
      body: "Wallbox, permission, electrician and smart-meter habits.",
    },
    {
      title: "Public charging",
      body: "Street poles, hubs, fast charge, apps and RFID cards.",
    },
    {
      title: "Tax & incentives",
      body: "BPM and road-tax orientation — verify live official tools.",
    },
    {
      title: "Range & ownership",
      body: "Winter buffers plus insurance and APK like any car.",
    },
  ] satisfies TipCard[],
  decide: {
    heading: "Decide whether an EV fits your life here",
    intro:
      "An EV is optional. In dense Dutch cities, OV, bikes and occasional car-share can beat ownership. An EV shines when you have reliable overnight charging, regular longer trips, and parking that does not depend on a multi-year permit waitlist.",
    paragraphs: [
      "Start with housing: driveway or garage with permission to install, or a realistic public-charging walk from your door. Then commute: daily motorway kilometres favour home charging; rare weekend trips may favour hire or share. Then assignment length: short stays rarely amortise wallbox and learning costs.",
      "Licence status still comes first — you must be allowed to drive. Lease and company cars can be EV too, but the contract maths belong on the Lease cars guide when it publishes. This section only decides whether EV ownership is worth exploring.",
    ],
    rows: [
      {
        topic: "Overnight charging",
        whatToCheck: "Private spot with install rights, or nearby public poles you can use regularly.",
        tip: "No charging plan = pause the purchase.",
      },
      {
        topic: "Weekly kilometres",
        whatToCheck: "Whether home electricity beats public fast-charge fees for your pattern.",
        tip: "Sketch a month of trips before you compare models.",
      },
      {
        topic: "Parking reality",
        whatToCheck: "Permit waitlists, garage fees, visitor rules.",
        tip: "Read Parking and local permits early.",
      },
      {
        topic: "Alternatives",
        whatToCheck: "OV + bike, car-share, or lease through work.",
        tip: "Getting around and Car sharing cover those paths; Lease cars covers contracted access.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Bike-first cities",
        body: "Amsterdam- and Utrecht-style denseness often makes EV ownership a lifestyle choice, not a necessity.",
      },
      {
        title: "Suburban families",
        body: "Home charging plus weekend flexibility is a common calm EV pattern — still budget the full stack.",
      },
      {
        title: "No fake rankings",
        body: "ExpatLife does not rank “best EV for expats” or invent dealer discounts.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "OV, bikes and multimodal options when ownership is optional.",
      },
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "General purchase and RDW transfer orientation for any powertrain.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Resident parking reality before you commit to a curb car.",
      },
      {
        label: "Driving licence exchange",
        href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
        status: "live",
        description: "Confirm drive rights before EV shopping stress compounds.",
      },
    ] satisfies DrivingLink[],
  },
  buy: {
    heading: "Buying an electric car in the Netherlands",
    intro:
      "Purchase mechanics mirror other cars: dealer or private path, paperwork, RDW ownership transfer and insurance start. EV-specific diligence adds battery health, remaining warranty, charging cable/adapters and software update habits.",
    paragraphs: [
      "New EVs trade higher sticker price for simpler first ownership and clearer warranty. Used EVs can be excellent value but need stronger checks on battery state-of-health reports, prior fast-charge intensity (when disclosed), and next APK date.",
      "Importing a foreign EV can add BPM and registration complexity — run official tools before deposits. Dealer purchases often include transfer support; private sales need buyer diligence. Deepen general purchase habits on Buying a car; this section stays on EV-specific checks.",
    ],
    rows: [
      {
        topic: "New EV",
        whatToCheck: "Delivery timeline, wallbox package offers, warranty and service network.",
        tip: "Still plan charging and parking independently of the showroom pitch.",
      },
      {
        topic: "Used EV",
        whatToCheck: "Battery health report, warranty remainder, service history, APK due date.",
        tip: "Independent inspection is wise on higher-value used EVs.",
      },
      {
        topic: "Dealer vs private",
        whatToCheck: "Who handles RDW transfer and what is written about defects.",
        tip: "Agree insurance start on purchase day in writing.",
      },
      {
        topic: "Import temptation",
        whatToCheck: "BPM and RDW registration risks for your specific car.",
        tip: "Official calculators beat forum folklore.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Cables and connectors",
        body: "Confirm Type 2 / CCS habits for NL public chargers and what cables are included.",
      },
      {
        title: "Software and apps",
        body: "Factory apps help preconditioning and charge scheduling — set them up early.",
      },
      {
        title: "Same RDW handoff",
        body: "You still become the registered keeper — keep transfer proof with the EV file.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Full purchase path, BPM orientation and RDW transfer.",
      },
      {
        label: "MOT / APK",
        href: MOT_APK_NETHERLANDS_PATH,
        status: "live",
        description: "Check the next inspection window before you buy used.",
      },
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "Align cover with the moment you drive away.",
      },
    ] satisfies DrivingLink[],
  },
  homeCharging: {
    heading: "Home charging: wallbox, permission and setup",
    intro:
      "Home charging is usually the calmest ownership pattern when you have a private parking spot and written permission. A dedicated wallbox with a qualified installer is the common long-term setup; occasional granny-cable charging from a domestic socket is slower and needs careful safety habits.",
    paragraphs: [
      "Apartment and VvE (owners’ association) buildings often require formal approval before any facade or parking-bay install. Landlords may refuse or set conditions. Start with written permission, then an installer quote covering load capacity, smart meter / dynamic tariffs if relevant, and cable routing.",
      "Municipality rules and grid operator processes can apply for new connections or heavier installs — verify locally. ExpatLife does not design electrical systems. Treat home charging as a housing project that unlocks cheaper overnight energy versus repeated public fast charging.",
    ],
    steps: [
      {
        phase: "Permission",
        timing: "Before quotes get serious",
        detail: "Ask landlord, VvE or homeowners’ rules in writing — include who pays for common-area work.",
      },
      {
        phase: "Installer survey",
        timing: "After permission",
        detail: "Qualified electrician assesses capacity, placement and smart-charging options.",
      },
      {
        phase: "Install & test",
        timing: "Scheduled day",
        detail: "Commission the wallbox, pair the car, test scheduled charging overnight.",
      },
      {
        phase: "Habits",
        timing: "Ongoing",
        detail: "Prefer off-peak or smart schedules when your tariff supports it; keep the cable tidy and locked.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Permission first",
        body: "A wallbox without approval can become a neighbour and contract problem.",
      },
      {
        title: "Safety over speed",
        body: "Long-term high loads belong on proper circuits — not improvised extensions.",
      },
      {
        title: "Tariffs change",
        body: "Energy contracts and dynamic prices move — re-check yearly, do not freeze old assumptions.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Municipality services",
        href: MUNICIPALITY_PATH,
        status: "live",
        description: "Local admin orientation when permits or address context matter.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Private vs curb parking shapes whether home charging is realistic.",
      },
    ] satisfies DrivingLink[],
  },
  publicCharging: {
    heading: "Public charging: street poles, hubs and fast charge",
    intro:
      "The Netherlands has dense public charging: neighbourhood street poles, retail hubs and motorway fast chargers. You typically start a session with a charging card (RFID), a provider app, or sometimes contactless — networks and prices vary.",
    paragraphs: [
      "Separate two jobs: overnight or top-up street charging near home versus trip fast charging on corridors. Street poles can be busy in dense districts; learn etiquette (move when full, do not ICE-block bays). Fast chargers cost more per kWh but unlock longer journeys.",
      "Set up at least one widely accepted card or app before purchase day. Compare live prices in the app — ExpatLife does not publish a fake national tariff table. Soft comparison tools for mobility and insurance can help later; they do not replace reading the charger screen.",
    ],
    rows: [
      {
        topic: "Street / neighbourhood poles",
        whatToCheck: "Walking distance, occupancy patterns, permit-zone rules.",
        tip: "Scout at the hours you would actually charge.",
      },
      {
        topic: "Hub / destination charge",
        whatToCheck: "Supermarket, office or leisure parking with chargers.",
        tip: "Useful top-ups while you already stop — not a full home substitute for everyone.",
      },
      {
        topic: "Motorway fast charge",
        whatToCheck: "CCS compatibility, app login, payment method.",
        tip: "Preload accounts before a long Friday drive.",
      },
      {
        topic: "Payment & apps",
        whatToCheck: "RFID card, roaming apps, receipts for expenses.",
        tip: "Keep one backup payment method when travelling.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Busy cities",
        body: "Expect competition for curb chargers — a home plan still wins when possible.",
      },
      {
        title: "Session etiquette",
        body: "Unplug when charged if local rules or courtesy expect it; never block with a non-charging car.",
      },
      {
        title: "Fees are real",
        body: "Idle fees and high kWh rates can erase “cheap EV” assumptions — track a month of receipts.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Train corridors can replace some long EV trips entirely.",
      },
      {
        label: "Speed cameras",
        href: SPEED_CAMERAS_NETHERLANDS_PATH,
        status: "live",
        description: "Motorway trip habits — signed limits still apply while charging logistics run.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Charging bays and permit zones interact on many streets.",
      },
    ] satisfies DrivingLink[],
  },
  incentives: {
    heading: "Tax and incentives orientation (BPM, road tax, extras)",
    intro:
      "Fully electric cars can face different BPM and motor vehicle tax (wegenbelasting / MRB) treatment than petrol or diesel cars — and those rules change over time. Treat every euro figure as something you verify on Belastingdienst and related official tools for your registration year and vehicle details.",
    paragraphs: [
      "BPM often matters most for new cars and certain imports; many simple domestic used purchases between residents follow different patterns. Road tax for EVs has seen preferential treatment in periods, with phase-downs or adjustments announced for later years — do not budget “forever free” from an old blog post.",
      "Municipal, employer or national subsidy programmes appear and expire. ExpatLife does not invent current grant amounts or promise eligibility. Screenshot dated official pages into your EV file. Soft affiliate comparison (e.g. insurance via Independer-style tools) is separate from tax law.",
    ],
    rows: [
      {
        topic: "BPM orientation",
        whatToCheck: "Whether your purchase or import path triggers BPM and at what planning band.",
        tip: "Run official calculators before deposits — especially imports.",
      },
      {
        topic: "Road tax / MRB",
        whatToCheck: "Current EV tariffs for your weight/province and any announced changes.",
        tip: "Deepen on the Road tax guide after a first official check.",
      },
      {
        topic: "Local or employer perks",
        whatToCheck: "Gemeente pages, HR lease/EV policies, workplace chargers.",
        tip: "Get written confirmation — verbal hallway tips go stale.",
      },
      {
        topic: "Company / lease tax",
        whatToCheck: "Bijtelling and payroll treatment if the car is not privately owned.",
        tip: "That maths belongs with HR and the future Lease cars guide.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Rules move",
        body: "Preferential EV tax treatment has a political and calendar life — re-verify yearly.",
      },
      {
        title: "No guarantees here",
        body: "ExpatLife provides orientation only — not a tax ruling for your kenteken.",
      },
      {
        title: "Keep dated proof",
        body: "Save calculator outputs and policy PDFs with the purchase file.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Road tax",
        href: ROAD_TAX_NETHERLANDS_PATH,
        status: "live",
        description: "Wegenbelasting / MRB orientation for registered keepers.",
      },
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "BPM and purchase-path orientation for any car.",
      },
    ] satisfies DrivingLink[],
  },
  range: {
    heading: "Range, winter and real-world trip planning",
    intro:
      "Catalogue range assumes mild conditions and careful driving. Dutch winters, cabin heat, wet roads and sustained motorway speeds commonly shrink usable range. Plan buffers and charging stops instead of arriving on fumes.",
    paragraphs: [
      "Preconditioning the cabin and battery while plugged in (when your car supports it) preserves more range for the trip. Highway 100/130 patterns, headwinds and roof boxes also matter. Navigation with charger waypoints beats improvising at 8% on a dark provincial road.",
      "Battery health on used cars affects both range and resale. Ask for state-of-health documentation where available. ExpatLife does not publish model-by-model range rankings — verify WLTP vs your commute with a dealer test drive in similar weather when you can.",
    ],
    steps: [
      {
        phase: "Weekday pattern",
        timing: "Normal weeks",
        detail: "Home or street charge to cover commute plus a buffer — avoid daily panic top-ups.",
      },
      {
        phase: "Winter mode",
        timing: "Cold months",
        detail: "Expect less range; preheat while plugged in; carry a backup charging option for longer days.",
      },
      {
        phase: "Long trip",
        timing: "Before departure",
        detail: "Map fast chargers, confirm apps are logged in, leave with a high state of charge.",
      },
      {
        phase: "Arrival habit",
        timing: "End of day",
        detail: "Plug in when you can — tomorrow-you will thank today-you.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Brochure ≠ winter",
        body: "Treat marketing range as an upper reference, not a guarantee for January motorways.",
      },
      {
        title: "Heat is energy",
        body: "Cabin comfort spends battery — precondition on shore power when possible.",
      },
      {
        title: "Apps help, physics wins",
        body: "Live traffic and cold still change outcomes — leave margin.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Trains remain a strong long-trip alternative in bad weather weeks.",
      },
      {
        label: "Speed cameras",
        href: SPEED_CAMERAS_NETHERLANDS_PATH,
        status: "live",
        description: "Steady legal pace on corridors — also kinder to range.",
      },
    ] satisfies DrivingLink[],
  },
  ownershipStack: {
    heading: "Insurance, APK and the rest of the ownership stack",
    intro:
      "An EV is still a motor vehicle: you need insurance to drive, RDW registration as keeper, and APK when due. Battery and body repairs can differ in workshop networks and cost patterns — compare cover thoughtfully, then deepen on the Car insurance and MOT / APK guides.",
    paragraphs: [
      "WA remains the common third-party baseline; higher cover is a risk and budget choice. Tell insurers the car is electric and confirm any battery-related conditions in the policy wording. Align policy start with RDW transfer day.",
      "APK timing still follows the vehicle’s inspection calendar — check due dates on used EVs before purchase. Road tax continues as its own Belastingdienst track. This section is a bridge, not a substitute for those sibling deep-dives.",
    ],
    rows: [
      {
        topic: "Insurance",
        whatToCheck: "WA vs higher cover, excess, named drivers, EV-specific wording.",
        tip: "Compare live quotes — soft tools like Independer-style comparison are orientation aids, not rankings.",
      },
      {
        topic: "APK / MOT",
        whatToCheck: "Next due date and RDW-approved station booking habits.",
        tip: "Diary the window after purchase.",
      },
      {
        topic: "Road tax",
        whatToCheck: "EV tariff orientation for your registration details.",
        tip: "Open the Road tax guide after an official check.",
      },
      {
        topic: "Parking",
        whatToCheck: "Permit or garage plan that fits charging.",
        tip: "Curb cars without a charge plan create weekly friction.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Same legal baseline",
        body: "Electric does not remove the need for motor insurance or registration.",
      },
      {
        title: "Repair networks",
        body: "Ask insurers and dealers where EV repairs are handled before a claim surprises you.",
      },
      {
        title: "Sibling guides win",
        body: "Use Car insurance and MOT / APK for depth — keep this page on EV context.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "WA, WA+ and cover comparison for expats.",
      },
      {
        label: "MOT / APK",
        href: MOT_APK_NETHERLANDS_PATH,
        status: "live",
        description: "Periodic inspection orientation after you own the car.",
      },
      {
        label: "Road tax",
        href: ROAD_TAX_NETHERLANDS_PATH,
        status: "live",
        description: "MRB habits for registered keepers.",
      },
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "RDW transfer and purchase-day stack.",
      },
    ] satisfies DrivingLink[],
  },
  costs: {
    heading: "EV ownership cost stack (orientation)",
    intro:
      "Budget the full monthly and annual stack: purchase or lease payment, electricity or public charging fees, insurance, road tax orientation, parking, maintenance/tyres and eventual battery or repair risk. Sticker price optimism fades in month two.",
    paragraphs: [
      "Home electricity is often cheaper per kilometre than public fast charging — but only if you can charge at home. Tyres and brakes can follow different wear patterns; still plan a maintenance buffer. Residual value depends on battery health and market taste — ExpatLife does not invent guaranteed residuals.",
      "Compare ownership to OV + bike + occasional share for your real kilometres. Soft affiliate blocks below may help compare insurance; they are not a total-cost-of-ownership calculator for your household.",
    ],
    rows: [
      {
        category: "Purchase / deposit",
        range: "Model-dependent",
        notes: "New vs used; include accessories and cables",
      },
      {
        category: "Electricity / charging",
        range: "Home vs public mix",
        notes: "Track a month of kWh and session fees",
      },
      {
        category: "Insurance",
        range: "Quote-dependent",
        notes: "EV value and cover level drive premiums",
      },
      {
        category: "Road tax orientation",
        range: "Verify live",
        notes: "EV tariffs change — official tools only",
      },
      {
        category: "Parking",
        range: "City-dependent",
        notes: "Permits and garages often surprise newcomers",
      },
      {
        category: "Maintenance buffer",
        range: "Plan a reserve",
        notes: "Tyres, APK, unexpected repairs",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Public charge fees add up",
        body: "Fast-charge-only lifestyles can erase EV running-cost stories.",
      },
      {
        title: "Parking is part of EV maths",
        body: "A cheap car with expensive curb reality is still expensive.",
      },
      {
        title: "Compare alternatives",
        body: "Car-share or lease may win for short assignments — different guides.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Road tax",
        href: ROAD_TAX_NETHERLANDS_PATH,
        status: "live",
        description: "Confirm MRB planning bands officially.",
      },
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "Get live premiums before you buy.",
      },
    ] satisfies DrivingLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Charging, mobility and insurance orientation",
    subtitle:
      "Soft CTAs for insurance comparison when you are ready to cover an EV, and mobility context if you want to delay ownership. This block is not a ranking of cars, chargers, dealers or insurers.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for EV ownership week — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-electric-vehicles-support-providers",
    analyticsPageContext: "electric-vehicles-netherlands-recommended-options",
    categoryLinks: [
      { href: CAR_INSURANCE_NETHERLANDS_PATH, label: "Car insurance" },
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: BUYING_A_CAR_NETHERLANDS_PATH, label: "Buying a car" },
    ],
    browseLabel: "More driving context: ",
  },
  scenarios: {
    heading: "Common expat EV scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "Apartment, no driveway, busy street chargers",
        approach: "Stress-test a full month of public charging before you buy; consider share/OV hybrids.",
        firstStep: "Scout poles at your hours and price a month of sessions in an app.",
      },
      {
        situation: "House with driveway and cooperative VvE/landlord",
        approach: "Home wallbox path usually wins — permission and installer first.",
        firstStep: "Get written permission, then two installer quotes.",
      },
      {
        situation: "Short assignment under 18 months",
        approach: "Ownership + wallbox rarely amortises; lease or share may fit better.",
        firstStep: "Compare total cost to Getting around + hire/share for your kilometres.",
      },
      {
        situation: "Used EV bargain online",
        approach: "Battery health, APK and charging kit matter as much as price.",
        firstStep: "Request SOH docs and book an independent check.",
      },
      {
        situation: "Company offering an EV lease",
        approach: "Payroll/bijtelling maths differ from private ownership — separate tracks.",
        firstStep: "Ask HR for a written breakdown; keep this page for private ownership context.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Buying before a charging plan",
      body: "A pretty EV with nowhere to charge becomes a weekly stress machine.",
      advice: "Lock home permission or a realistic public routine first.",
    },
    {
      title: "Ignoring VvE or landlord rules",
      body: "Unauthorised wallboxes create neighbour and contract conflict.",
      advice: "Get written approval before install day.",
    },
    {
      title: "Believing brochure range in January",
      body: "Cold weather and motorways shrink usable kilometres.",
      advice: "Plan winter buffers and trip chargers.",
    },
    {
      title: "Under-budgeting public charge fees",
      body: "Fast-charge-only maths surprises many newcomers.",
      advice: "Track a month of receipts before you call it cheap.",
    },
    {
      title: "Skipping insurance timing",
      body: "Keys without cover is not a flex.",
      advice: "Align policy start with RDW transfer — see Car insurance.",
    },
    {
      title: "Treating old tax blogs as law",
      body: "EV road-tax and BPM rules change.",
      advice: "Re-run official tools with dated screenshots.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "EV ownership readiness checklist",
    intro: "Use this before you transfer money — and again on the day you take the keys.",
    items: [
      "Confirm you may legally drive (licence exchange status clear)",
      "Confirm parking plan that fits charging",
      "Home charging permission + installer path OR public charging routine tested",
      "BPM / road-tax orientation checked on official tools (dated notes)",
      "New vs used decision with battery/warranty checks if used",
      "Agree purchase terms and RDW transfer sequence in writing",
      "Activate insurance to cover the moment you drive",
      "Set up charging apps / RFID and save receipts habit",
      "Diary APK, road tax expectations and first service reminder",
      "Winter range buffer noted for your commute",
    ],
  },
  howTo: {
    heading: "How to start EV ownership in the Netherlands (orientation)",
    steps: [
      {
        name: "Confirm drive rights, parking and charging access",
        text: "Make sure you may legally drive and that overnight charging is realistic where you live before you shop.",
      },
      {
        name: "Check tax and total-cost orientation",
        text: "Run official BPM and road-tax tools, sketch electricity vs public charging fees, and compare to not owning.",
      },
      {
        name: "Shortlist and verify the EV",
        text: "For used cars, inspect battery health, warranty, APK timing and charging kit; test drive with your real commute in mind.",
      },
      {
        name: "Complete RDW transfer and start insurance",
        text: "Follow the official ownership transfer flow and activate insurance before you drive away.",
      },
      {
        name: "Finish charging setup and first-week admin",
        text: "Commission home charging or lock public apps/cards, file documents, and diary APK and winter habits.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to buy and set up an electric car in the Netherlands as an expat",
    description:
      "Orientation steps for expats deciding on an EV, planning charging, verifying tax orientation, completing RDW transfer and starting insurance.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Do I need a driveway to own an EV in the Netherlands?",
      a: "No, but you need a realistic charging plan. Many owners use public street chargers and hubs. Home charging is calmer when housing allows a wallbox with permission.",
    },
    {
      q: "Is road tax free for electric cars?",
      a: "Not as a forever rule you can assume from old articles. EV motor vehicle tax treatment has differed from petrol/diesel and has been subject to change. Verify current tariffs on official Belastingdienst tools and read the Road tax guide.",
    },
    {
      q: "How do I charge on the street?",
      a: "Typically with a charging card (RFID) or provider app at neighbourhood poles and hubs. Set up accounts before you rely on them, and expect variable prices and busy bays in dense cities.",
    },
    {
      q: "What happens to range in winter?",
      a: "Cold weather, cabin heat and motorway speeds usually reduce usable range versus brochure figures. Preheat while plugged in when possible and plan charging buffers.",
    },
    {
      q: "Do EVs still need APK and insurance?",
      a: "Yes. You need motor insurance to drive, and APK applies on the vehicle’s inspection calendar. See Car insurance and MOT / APK for depth.",
    },
    {
      q: "Should I lease instead of buying an EV?",
      a: "Sometimes — especially on shorter assignments or when HR offers a company car. Lease maths (including bijtelling orientation) deepen on Lease cars; this page stays on ownership and charging.",
    },
    {
      q: "Is car sharing better than owning an EV?",
      a: "For low weekly kilometres, sharing plus OV can win. Use Getting around and the Car sharing guide; stress-test against your real trips.",
    },
    {
      q: "Is this tax or legal advice?",
      a: "No. ExpatLife provides general orientation only. Follow RDW, Belastingdienst, your municipality, installer, insurer and written contracts for decisions on your vehicle.",
    },
  ],
  relatedGuidesTips: [
    "Purchase & RDW → Buying a car.",
    "Cover choices → Car insurance.",
    "Recurring tax → Road tax.",
    "Inspection → MOT / APK.",
    "Occasional access → Car sharing.",
    "Contracted access → Lease cars.",
    "OV and bikes → Getting around.",
    "Resident parking → Parking and local permits.",
  ],
  relatedGuides: [
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase paths, BPM orientation and RDW transfer for any car.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "WA, WA+ and cover choices — align policy start with transfer.",
    },
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB orientation after you become the registered keeper.",
    },
    {
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Periodic vehicle inspection timing after purchase.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange — confirm before you buy.",
    },
    {
      label: "Speed cameras",
      href: SPEED_CAMERAS_NETHERLANDS_PATH,
      status: "live",
      description: "Speed enforcement orientation for Dutch roads.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Trains, OVpay, bikes and everyday mobility when ownership is optional.",
    },
    {
      label: "Parking and local permits",
      href: PARKING_PATH,
      status: "live",
      description: "Resident parking, visitor permits and paid zones once you have a car.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Occasional shared cars when ownership is optional — memberships, trips and cost orientation.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Private lease, company cars and bijtelling orientation when contracted access beats buying.",
    },
  ] satisfies DrivingLink[],
  drivingHubTips: [
    "Electric vehicles is the EV ownership cornerstone of the Driving cluster.",
    "Buying a car remains the general purchase sibling.",
    "Car sharing covers occasional access without owning.",
    "Lease cars covers contracted exclusive access and company cars.",
    "Car insurance, road tax and MOT / APK complete the ownership stack.",
    "Getting around remains the wider mobility guide for OV and bikes.",
  ],
  drivingHubCards: [
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "EV purchase, charging and ownership orientation — you are here.",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase, registration and ownership orientation for any car.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Membership models and cost orientation when ownership is optional.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Private lease, company cars and contract orientation.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "Mandatory WA and optional cover orientation.",
    },
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB for registered keepers.",
    },
    {
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch MOT / periodic vehicle inspection orientation.",
    },
    {
      label: "Speed cameras",
      href: SPEED_CAMERAS_NETHERLANDS_PATH,
      status: "live",
      description: "Speed enforcement orientation for Dutch roads.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "OV, bikes and multimodal commuting.",
    },
    {
      label: "Parking and local permits",
      href: PARKING_PATH,
      status: "live",
      description: "Permits and paid parking after you have a vehicle.",
    },
  ] satisfies DrivingLink[],
  exploreNextCards: [
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Ready to purchase? Build the full RDW and paperwork plan.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "About to transfer? Align cover with drive-away day.",
    },
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Registered keeper soon? Check how MRB fits EV ownership.",
    },
    {
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Diary the next APK window after you own the car.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Not buying yet? Occasional shared cars vs ownership maths.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Company EV lease or private lease? Contract and bijtelling orientation.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Not buying yet? Use OV and bike systems well.",
    },
    {
      label: "Parking permits",
      href: PARKING_PATH,
      status: "live",
      description: "EV on the way? Learn resident parking early.",
    },
  ] satisfies DrivingLink[],
  exploreNextTips: [
    "Purchase path → Buying a car.",
    "Need cover → Car insurance.",
    "Need MRB orientation → Road tax.",
    "Inspection due → MOT / APK.",
    "Occasional access → Car sharing.",
    "Contracted access → Lease cars.",
    "No car yet → Getting around.",
    "Car at the curb → Parking permits.",
  ],
  officialSources: [
    {
      label: "RDW — vehicle registration orientation",
      href: "https://www.rdw.nl/en",
      description: "Official vehicle authority orientation for registration and ownership",
    },
    {
      label: "Belastingdienst — motor vehicle tax / BPM tools",
      href: "https://www.belastingdienst.nl/",
      description: "Official tax orientation for road tax and BPM — confirm live EV amounts",
    },
    {
      label: "Government.nl — transport topics",
      href: "https://www.government.nl/",
      description: "Dutch government portal for living and transport orientation",
    },
    {
      label: "Netherlands Enterprise Agency (RVO) — mobility orientation",
      href: "https://english.rvo.nl/",
      description: "Orientation on programmes and mobility topics when relevant — verify current schemes",
    },
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Practical official orientation for living in the Netherlands",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Decide if an EV fits.",
        "Plan charging access.",
        "Check tax orientation.",
        "Own with insure + APK.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Decide.",
        "Buy.",
        "Home charge.",
        "Public charge.",
        "Tax orientation.",
        "Range & ownership.",
      ],
    },
    decide: {
      title: "From the visual — decision cues",
      items: [
        "Charging access first.",
        "Parking reality.",
        "Assignment length.",
        "OV and share alternatives.",
      ],
    },
    buy: {
      title: "From the visual — purchase cues",
      items: [
        "New vs used.",
        "Battery health.",
        "Dealer vs private.",
        "RDW transfer day.",
      ],
    },
    homeCharging: {
      title: "From the visual — home charge cues",
      items: [
        "Written permission.",
        "Installer survey.",
        "Wallbox commission.",
        "Smart schedule habits.",
      ],
    },
    publicCharging: {
      title: "From the visual — public charge cues",
      items: [
        "Street poles.",
        "Hubs and fast charge.",
        "Apps and RFID.",
        "Fee awareness.",
      ],
    },
    incentives: {
      title: "From the visual — tax cues",
      items: [
        "BPM orientation.",
        "Road tax changes.",
        "Local or employer perks.",
        "Dated official proof.",
      ],
    },
    range: {
      title: "From the visual — range cues",
      items: [
        "Brochure ≠ winter.",
        "Preheat on shore power.",
        "Map trip chargers.",
        "Leave a buffer.",
      ],
    },
    ownershipStack: {
      title: "From the visual — ownership cues",
      items: [
        "Insure before you drive.",
        "APK calendar.",
        "Road tax track.",
        "Sibling guides for depth.",
      ],
    },
    costs: {
      title: "From the visual — cost cues",
      items: [
        "Full monthly stack.",
        "Home vs public energy.",
        "Parking reality.",
        "Maintenance buffer.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "Apartment curb charging.",
        "Driveway wallbox.",
        "Short assignment.",
        "Company lease offer.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "No charging plan.",
        "VvE surprises.",
        "Brochure-only range.",
        "Stale tax blogs.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Licence and parking.",
        "Charging plan locked.",
        "Tax orientation checked.",
        "Insurance and APK diaried.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general information for orientation only. It is not legal, tax, financial, insurance or product advice. Verify current rules, tariffs and contracts with RDW, Belastingdienst, municipalities, installers, insurers and dealers. Soft partner links, when shown, are labelled and never presented as official rankings.",
} as const;

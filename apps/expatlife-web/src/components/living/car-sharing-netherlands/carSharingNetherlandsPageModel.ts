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
const VISUAL_PREFIX = "car-sharing-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const carSharingNetherlandsPage = {
  slug: "car-sharing-netherlands",
  path: CAR_SHARING_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(CAR_SHARING_NETHERLANDS_PATH) ?? "2026-09-04",
  seo: {
    title: "Car Sharing in the Netherlands | Complete Guide for Expats",
    description:
      "When car sharing beats owning for expats in the Netherlands: membership models, how apps and trips work, cost orientation vs ownership, licence and insurance notes — plus soft mobility CTAs.",
    keywords: [
      "car sharing Netherlands",
      "car share Netherlands expats",
      "Greenwheels Netherlands",
      "MyWheels Netherlands",
      "SnappCar Netherlands",
      "deelauto Netherlands",
      "car sharing membership Netherlands",
      "car sharing vs owning Netherlands",
      "occasional car Netherlands",
      "shared car app Netherlands",
      "car rental vs sharing Netherlands",
      "expat car sharing Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Driving",
    pageTitle: "Car Sharing in the Netherlands",
    subtitle:
      "When sharing beats owning: membership and app models, how trips work, cost orientation versus full ownership, and practical licence and insurance notes — without lease or EV ownership deep-dives.",
    primaryCta: { label: "Decide if sharing fits", href: "#decide" },
    secondaryCta: { label: "Car-sharing checklist", href: "#checklist" },
    chips: ["When sharing wins", "Memberships & apps", "Trip flow", "Cost vs owning", "Licence notes"],
    disclaimer:
      "General orientation only — not legal, tax, financial or insurance advice and not a substitute for provider terms, RDW, municipality or insurer contracts. Prices, zones and cover change. Verify current rates and rules in the app and on official sites before you book or drive.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch canal-side street: multicultural expat unlocking a compact shared hatchback via phone beside a marked parking bay, soft daylight brick houses and bikes, reassuring mobility mood without brand or government logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#decide", label: "Decide" },
    { href: "#models", label: "Models" },
    { href: "#trip", label: "How a trip works" },
    { href: "#licence", label: "Licence & insurance" },
    { href: "#costs", label: "Costs" },
    { href: "#parking", label: "Parking & zones" },
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
      "Premium orientation board titled Car Sharing After Arrival — four building blocks: decide if sharing fits, pick a membership model, learn the trip flow, compare costs to owning — Share File Checklist rail on the right, Dutch canal skyline and ExpatLife brand footer.",
      "Four habits cover most car-sharing questions: fit, model, trip flow, and cost orientation."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of car sharing in the Netherlands — decide, membership models, trip flow, licence notes, costs vs owning, parking zones — Dutch mobility band and ExpatLife brand footer.",
      "Six building blocks explain almost every car-sharing question for newcomers."
    ),
    decide: visual(
      "decide",
      "Premium decision board — share vs own vs OV and bike — weekly kilometres, parking stress and assignment length forks with a Verify before you join rail, Dutch canal and bike lane props.",
      "Sharing wins when trips are occasional — confirm licence validity and real trip patterns first."
    ),
    models: visual(
      "models",
      "Premium membership map — station-based fleets, neighbourhood street cars, peer-to-peer day hire — calm Dutch desk with app cards and General information only rail.",
      "Station, street and peer-to-peer models feel different — match density and trip length."
    ),
    trip: visual(
      "trip",
      "Premium trip timeline — register and verify, book unlock, drive and refuel or charge, end in the right zone — Dutch city curb scene with checklist rail.",
      "Most trips follow the same loop: verify, book, unlock, return cleanly."
    ),
    licence: visual(
      "licence",
      "Premium licence and insurance desk — foreign licence validity, age and experience rules, bundled trip insurance vs personal policies — Dutch living-room desk with documents.",
      "You still need valid drive rights — sharing cover is not a substitute for checking your licence status."
    ),
    costs: visual(
      "costs",
      "Premium cost comparison board — membership fees, hourly and per-km rates, ownership stack of parking insurance and tax — euro planning bands as orientation only.",
      "Compare a realistic month of share trips to ownership — not a single weekend hire."
    ),
    parking: visual(
      "parking",
      "Premium parking and zones map — home zones, paid street rules, station return spots, permit realities — Dutch curb and permit signage without fake logos.",
      "Ending a trip in the wrong zone is a common expensive surprise — learn return rules early."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — bike-first city, IKEA weekend, short assignment, family with occasional van need — first-step arrows.",
      "Match housing and trip rhythm to a calm first membership instead of copying a colleague."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — joining without a licence check, ignoring return zones, ownership maths from one weekend, skipping fuel or charge rules — Fix notes beside each card.",
      "Most friction is zones, licence timing and under-counting kilometres — not finding an app."
    ),
    checklist: visual(
      "checklist",
      "Premium car-sharing readiness checklist clipboard — licence OK, app verified, membership chosen, zone map learned, cost stress-test done — Dutch kitchen table with canal light.",
      "Use this checklist so your first paid trip stays intentional, not improvised."
    ),
  },
  snapshotSignals: [
    { label: "Best when", value: "Occasional trips", note: "Not daily commute" },
    { label: "Models", value: "Station · street · P2P", note: "Match your city" },
    { label: "Must have", value: "Valid licence", note: "Check exchange rules" },
    { label: "Budget", value: "Fee + time + km", note: "Vs full ownership" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Car sharing in the Netherlands is a membership and trip-cost journey — when four wheels beat bike and OV for occasional needs, how apps and fleets work, and how that compares to owning — not the same topic as buying a car, leasing, or owning an EV.",
    "Getting around covers trains, OVpay and bikes. Buying a car and Electric vehicles deepen ownership paths. Parking covers curb and permit reality. This page stays on deelauto / car-share memberships for expats who want occasional access without the ownership stack.",
  ],
  introHighlights: [
    "Stress-test your real monthly kilometres before you join a paid plan.",
    "Station, street-fleet and peer-to-peer apps feel different — pick for density and trip length.",
    "Valid drive rights still matter — foreign licence windows and Dutch rijbewijs rules apply.",
    "Do not treat this page as legal or insurance advice — verify provider terms and official sources.",
  ],
  orientationFlowSteps: [
    "Decide if occasional car access beats ownership for your housing and commute.",
    "Choose a membership model that matches your city density and trip length.",
    "Confirm licence validity and read bundled insurance notes in the provider terms.",
    "Run a calm first trip — then compare a month of share costs to owning.",
  ],
  shareFileChecklist: [
    "Licence status clear (drive rights / exchange timing)",
    "App account verified (ID / licence upload if required)",
    "Membership tier chosen (pay-as-you-go vs monthly)",
    "Home and destination zones understood",
    "Fuel or charge end-of-trip rules noted",
    "One practice booking completed in off-peak hours",
    "Monthly share cost sketched vs parking + insurance + tax",
    "Getting around plan for days you do not share",
  ],
  introScenarios: [
    {
      situation: "Bike-first city, IKEA or airport few times a month",
      approach: "Pay-as-you-go or light membership usually beats ownership and resident parking stress.",
      firstStep: "Map the nearest station or street cars, then price two realistic trips in an app.",
    },
    {
      situation: "Short assignment under 18 months",
      approach: "Ownership + parking rarely amortises — share plus OV is often calmer.",
      firstStep: "Read Getting around, then compare share memberships to a rare weekend hire.",
    },
    {
      situation: "Considering buying or an EV instead",
      approach: "Ownership maths and charging belong on Buying a car and Electric vehicles — keep them separate.",
      firstStep: "Use this page for occasional access; open sibling guides only if you commit to owning.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Car sharing is optional — many expats never need a membership if OV and bikes cover life.",
    "General ownership deepens on Buying a car; EV ownership on Electric vehicles.",
    "Curb and permit reality deepen on Parking and local permits.",
    "Drive rights deepen on Driving licence exchange.",
  ],
  quickAnswer: {
    heading: "Car sharing in one minute",
    summary:
      "Car sharing (deelauto) lets you book a car by the hour or day through an app — station fleets near hubs, neighbourhood street cars, or peer-to-peer day hire — without buying, insuring and taxing a vehicle yourself. It fits best when you mostly use bike and OV but need a boot, weekend trip or odd errand. You still need a valid licence, you pay membership and/or time-plus-kilometre fees, and you must end trips in the right zone. Compare a realistic month of trips to the full ownership stack before you buy.",
    bullets: [
      "Occasional drivers usually win with sharing; daily motorway commuters often do not.",
      "Membership models differ — station, free-floating street fleets and peer-to-peer are not interchangeable.",
      "Provider trip insurance is common but terms vary — read excess and foreign-licence rules.",
      "Parking return zones and fuel/charge habits cause most first-trip friction.",
    ],
    note: "Buying a car, Electric vehicles, Getting around and Parking are siblings — use them for ownership, EV and curb deep-dives, not as substitutes for provider contracts.",
  },
  snapshotCards: [
    {
      title: "Decide if sharing fits",
      body: "Weekly kilometres, parking stress and assignment length before you join.",
    },
    {
      title: "Membership models",
      body: "Station fleets, street cars and peer-to-peer day hire.",
    },
    {
      title: "How a trip works",
      body: "Verify, book, unlock, drive, return in zone.",
    },
    {
      title: "Licence & insurance",
      body: "Valid drive rights plus bundled cover notes.",
    },
    {
      title: "Costs vs owning",
      body: "Fees and km versus parking, insurance and tax.",
    },
    {
      title: "Parking & zones",
      body: "Home zones, paid streets and clean returns.",
    },
  ] satisfies TipCard[],
  decide: {
    heading: "Decide whether car sharing fits your life here",
    intro:
      "Sharing is optional. In dense Dutch cities, bikes and OV cover most weeks. Sharing shines when you need a car a few times a month — furniture, family visits, airport runs — without resident-permit waitlists and ownership admin.",
    paragraphs: [
      "Start with trip rhythm: count real car needs over the last month (or imagine your next three). Then housing: paid street parking and scarce permits raise the cost of owning. Then assignment length: short stays rarely amortise purchase, insurance and tax. Licence status still comes first — you must be allowed to drive.",
      "Lease and company cars can also provide access without personal ownership — deepen contract and bijtelling orientation on Lease cars. EV ownership charging and BPM orientation belong on Electric vehicles. This section only decides whether occasional share access is worth exploring.",
    ],
    rows: [
      {
        topic: "Weekly car need",
        whatToCheck: "How often you truly need four wheels versus bike, OV or a taxi.",
        tip: "If most weeks are zero car days, start with pay-as-you-go.",
      },
      {
        topic: "Parking reality",
        whatToCheck: "Resident permit waitlists, garage prices and visitor rules where you live.",
        tip: "Hard parking often tips the scale toward sharing — see Parking.",
      },
      {
        topic: "Assignment length",
        whatToCheck: "Whether purchase and admin will amortise before you leave.",
        tip: "Under ~18 months, stress-test share + OV first.",
      },
      {
        topic: "Licence window",
        whatToCheck: "Foreign licence validity and exchange timing.",
        tip: "Do not join a paid plan until drive rights are clear — see Driving licence exchange.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Sharing usually wins",
        body: "Occasional trips, dense city housing, uncertain stay length, or you want to delay buying.",
      },
      {
        title: "Ownership may win",
        body: "Daily car commuting, regular long motorway runs, or predictable family logistics that apps cannot cover calmly.",
      },
      {
        title: "Hybrid is common",
        body: "OV and bike for weekdays, share for weekends — many expats never need a second model.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "OV, bikes and multimodal commuting when you skip ownership.",
      },
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "If sharing fails your trip test, learn purchase and RDW paths.",
      },
      {
        label: "Electric vehicles",
        href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
        status: "live",
        description: "Considering an EV instead? Charging and ownership orientation.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Resident parking stress is often the hidden ownership cost.",
      },
    ] satisfies DrivingLink[],
  },
  models: {
    heading: "Membership models: station, street and peer-to-peer",
    intro:
      "Dutch car sharing is not one product. Station-based fleets, neighbourhood street cars and peer-to-peer day hire solve different trips — compare availability where you live, not brand marketing alone.",
    paragraphs: [
      "Station or hub fleets often sit near NS stations and neighbourhood pods — predictable pickup when you plan ahead. Street or free-floating fleets let you find a nearby car on a map and end within allowed zones. Peer-to-peer platforms connect you to private owners for longer blocks or specific vehicle sizes (estate, van).",
      "Membership tiers usually trade a monthly fee for lower hourly or per-kilometre rates. Pay-as-you-go suits rare trips; light monthly plans suit IKEA-and-weekend patterns. Soft provider listings below are orientation — not rankings. Always confirm live rates in the app.",
    ],
    rows: [
      {
        topic: "Station / hub fleets",
        whatToCheck: "Cars reserved to marked spots; return to the same or partner stations.",
        tip: "Strong near rail hubs — plan the walk from your door.",
      },
      {
        topic: "Street / neighbourhood fleets",
        whatToCheck: "App map availability, home zones and end-trip geofences.",
        tip: "Great for spontaneous errands — learn zone borders before peak hours.",
      },
      {
        topic: "Peer-to-peer day hire",
        whatToCheck: "Listing insurance, mileage caps, pickup handovers and cancellation rules.",
        tip: "Useful for vans or multi-day trips — read the total price, not the headline day rate.",
      },
      {
        topic: "Membership tiers",
        whatToCheck: "Monthly fee versus discounted time/km; unlock fees; idle charges.",
        tip: "Run last month’s trips through two tiers before you subscribe.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Match density",
        body: "Central Amsterdam, Rotterdam, Utrecht and The Hague usually have denser fleets than smaller towns.",
      },
      {
        title: "Match trip length",
        body: "Two-hour furniture runs differ from a three-day family visit — model choice follows duration.",
      },
      {
        title: "Soft CTAs only",
        body: "Provider cards later are labelled soft recommendations — verify prices yourself.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Keep OV and bike as the default between share trips.",
      },
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "If no fleet covers your town, ownership may be the fallback.",
      },
    ] satisfies DrivingLink[],
  },
  trip: {
    heading: "How a typical car-sharing trip works",
    intro:
      "Most apps follow the same calm loop: verify identity and licence, book, unlock with the phone, drive, then end the trip in an allowed place with fuel or charge rules respected.",
    paragraphs: [
      "Registration often needs a Dutch or accepted foreign licence photo, ID, and sometimes a short waiting period while the provider checks documents. Book the car for a time window — some fleets are instant, others need reservation ahead for weekends.",
      "During the trip, photograph damage at start if the app asks, follow fuel or charge thresholds, and keep the key card or fob rules straight. Ending early or late can change the price. Never assume you can leave the car anywhere a private owner would park.",
    ],
    steps: [
      {
        phase: "Register & verify",
        timing: "Before first booking",
        detail: "Upload ID and licence; wait for approval if the provider reviews documents.",
      },
      {
        phase: "Book & unlock",
        timing: "Day of trip",
        detail: "Reserve on the map, walk to the car, unlock via app, check damage photos.",
      },
      {
        phase: "Drive & refuel/charge",
        timing: "During trip",
        detail: "Follow fuel card or charge rules; keep receipts if the app requires them.",
      },
      {
        phase: "End in zone",
        timing: "Return",
        detail: "Park in an allowed spot or station, lock via app, confirm trip end and price.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Practice off-peak",
        body: "First unlock is calmer on a weekday evening than Saturday IKEA rush.",
      },
      {
        title: "Damage photos",
        body: "Document existing scratches at start — protects you if the next user reports them.",
      },
      {
        title: "Idle time costs",
        body: "Some tariffs charge while parked during a reservation — read the timer rules.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Understand paid zones so return spots do not surprise you.",
      },
      {
        label: "Speed cameras",
        href: SPEED_CAMERAS_NETHERLANDS_PATH,
        status: "live",
        description: "Shared cars still get fines — know how enforcement works.",
      },
    ] satisfies DrivingLink[],
  },
  licence: {
    heading: "Licence and insurance practical notes",
    intro:
      "Car sharing does not create drive rights. You need a valid licence for Dutch roads, and you should read how the provider’s trip insurance interacts with age, experience and foreign documents.",
    paragraphs: [
      "If you recently arrived, check how long your foreign licence remains valid and whether you must exchange it — Driving licence exchange is the deep guide. Providers may reject licences outside their accepted list or require a minimum holding period.",
      "Trip insurance is often bundled in the hourly rate, with an excess (eigen risico) if you cause damage. Optional lower-excess add-ons sometimes exist. Personal car insurance is for owned vehicles — do not assume a private policy covers a share fleet. This is orientation only; contracts and insurer wording win.",
    ],
    rows: [
      {
        topic: "Drive rights",
        whatToCheck: "Foreign licence window, exchange status, categories on the card.",
        tip: "Pause membership signup until you know you may legally drive.",
      },
      {
        topic: "Provider acceptance",
        whatToCheck: "Accepted countries, minimum age, years of experience, probation rules.",
        tip: "Read the English help pages before you pay a monthly fee.",
      },
      {
        topic: "Bundled cover",
        whatToCheck: "What is included, excess amount, exclusions (alcohol, unlisted drivers).",
        tip: "Screenshot the excess figure before your first long trip.",
      },
      {
        topic: "Fines & tolls",
        whatToCheck: "How speed, parking and congestion charges are billed back to you.",
        tip: "Providers usually pass fines to the driver account — see Speed cameras.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Not ownership insurance",
        body: "WA / WA+ shopping for a private car belongs on Car insurance — different problem.",
      },
      {
        title: "Named drivers",
        body: "Most share accounts are for the verified member only — do not hand the key to a partner casually.",
      },
      {
        title: "EV share cars",
        body: "Shared EVs still need charge habits; ownership charging deep-dives stay on Electric vehicles.",
      },
    ] satisfies TipCard[],
    crossLinks: [
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
        description: "If you later buy a car — WA timing and cover choices.",
      },
      {
        label: "Electric vehicles",
        href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
        status: "live",
        description: "Owning an EV is a different path from booking a shared EV.",
      },
    ] satisfies DrivingLink[],
  },
  costs: {
    heading: "Cost orientation: sharing versus owning",
    intro:
      "Compare a realistic month — not one weekend. Sharing costs are membership plus time and kilometres. Ownership stacks purchase or lease payment, insurance, road tax, parking, APK and maintenance.",
    paragraphs: [
      "Sketch your last four weeks of car needs as hours and kilometres, then price them in an app’s rate card. Add any monthly membership you would actually keep. Against that, list resident parking or garage, WA insurance, road tax orientation, and a maintenance buffer if you owned.",
      "Break-even points vary wildly by city and kilometres. Occasional users often stay cheaper on share; high weekly kilometres tip toward ownership or lease. Soft rate hints in provider listings are outdated the moment they ship — confirm live quotes. This is not financial advice.",
    ],
    rows: [
      {
        category: "Membership / unlock",
        range: "€0–25+/mo orientation",
        notes: "Pay-as-you-go vs discounted tiers — verify live",
      },
      {
        category: "Time + km fees",
        range: "Varies by car class",
        notes: "Hourly plus per-km is common; idle rules matter",
      },
      {
        category: "Ownership parking",
        range: "City-dependent",
        notes: "Permits and garages often dominate — see Parking",
      },
      {
        category: "Ownership insurance + tax",
        range: "Recurring stack",
        notes: "Deepen on Car insurance and Road tax if you buy",
      },
      {
        category: "Maintenance / APK",
        range: "Owner-only",
        notes: "Share fleets handle this — owners see MOT / APK",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Count real trips",
        body: "Fantasy weekends inflate share costs; forgotten daily drives inflate ownership.",
      },
      {
        title: "Include parking",
        body: "Ownership without a parking plan is incomplete maths in Dutch cities.",
      },
      {
        title: "Delay buying calmly",
        body: "Many expats share for a year, then reopen Buying a car with better data.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Full ownership cost orientation when sharing no longer fits.",
      },
      {
        label: "Road tax",
        href: ROAD_TAX_NETHERLANDS_PATH,
        status: "live",
        description: "MRB appears only when you become a registered keeper.",
      },
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "Get live premiums before you switch to owning.",
      },
      {
        label: "MOT / APK",
        href: MOT_APK_NETHERLANDS_PATH,
        status: "live",
        description: "Inspection calendar is an owner responsibility.",
      },
    ] satisfies DrivingLink[],
  },
  parking: {
    heading: "Parking, return zones and local permits",
    intro:
      "Ending a trip correctly matters as much as unlocking. Home zones, paid streets and station return spots differ by provider — learn the map before peak Saturday.",
    paragraphs: [
      "Street fleets usually require you to end inside a geofenced service area, sometimes with tighter home-zone rules. Station fleets want the car back in a marked bay. Peer-to-peer returns follow the owner’s instructions. Illegal parking or wrong-zone ends can add fees.",
      "If you later buy a car, resident permits and visitor rules dominate curb life — Parking and local permits is the deep guide. Sharing often avoids that admin; it does not teach you every municipal quirk automatically.",
    ],
    rows: [
      {
        topic: "Service area",
        whatToCheck: "Where the app allows trip end — city borders and forbidden streets.",
        tip: "Zoom the zone map on a quiet evening before your first booking.",
      },
      {
        topic: "Paid parking during trip",
        whatToCheck: "Whether the fleet covers city parking fees while the booking is active.",
        tip: "Rules differ — never assume free parking everywhere.",
      },
      {
        topic: "Station returns",
        whatToCheck: "Bay availability and late-return penalties.",
        tip: "Weekend evenings fill hubs — leave buffer time.",
      },
      {
        topic: "Later ownership",
        whatToCheck: "Permit waitlists and garage prices on your street.",
        tip: "Use Parking if ownership becomes the plan.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Wrong-zone fees",
        body: "The expensive lesson most newcomers learn once — end where the app says.",
      },
      {
        title: "Airport & station hubs",
        body: "Handy pickups — confirm return rules if you one-way to a hub.",
      },
      {
        title: "Quiet practice run",
        body: "A short local loop teaches zone borders better than reading alone.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Resident parking, visitor permits and paid zones.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "P+R and multimodal options when sharing is not needed.",
      },
      {
        label: "Municipality services",
        href: MUNICIPALITY_PATH,
        status: "live",
        description: "Local services orientation when permits enter the picture.",
      },
    ] satisfies DrivingLink[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Car-sharing and mobility orientation",
    subtitle:
      "Soft CTAs for established Dutch car-sharing options when occasional four wheels fit your life. This block is not a ranking of fleets, apps or insurers.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for car-sharing week — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-car-sharing-support-providers",
    analyticsPageContext: "car-sharing-netherlands-recommended-options",
    categoryLinks: [
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: BUYING_A_CAR_NETHERLANDS_PATH, label: "Buying a car" },
      { href: PARKING_PATH, label: "Parking permits" },
    ],
    browseLabel: "More driving context: ",
  },
  scenarios: {
    heading: "Common expat car-sharing scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "Bike-first Amsterdam / Rotterdam / Utrecht life",
        approach: "Pay-as-you-go or light membership for monthly errands usually beats ownership.",
        firstStep: "Price two realistic trips and walk to the nearest share car once.",
      },
      {
        situation: "IKEA, Marktplaats haul or airport run",
        approach: "Book a larger class or estate when available; allow buffer for return zones.",
        firstStep: "Reserve ahead for weekend peaks; photograph the empty boot before loading.",
      },
      {
        situation: "Short assignment under 18 months",
        approach: "Avoid purchase admin; combine OV, bike and share.",
        firstStep: "Read Getting around, then join one fleet that covers your neighbourhood.",
      },
      {
        situation: "Family needs an occasional van",
        approach: "Peer-to-peer or specialist day hire can beat owning a second vehicle.",
        firstStep: "Compare P2P listing totals to fleet day rates for the same weekend.",
      },
      {
        situation: "Thinking of buying an EV instead",
        approach: "Ownership charging and tax orientation are a different guide.",
        firstStep: "Finish a month of share maths, then open Electric vehicles only if ownership wins.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Joining before licence clarity",
      body: "Paying a monthly fee while your foreign licence window is unclear wastes money and creates stress.",
      advice: "Confirm drive rights on Driving licence exchange before you subscribe.",
    },
    {
      title: "Ignoring return zones",
      body: "Ending outside the service area or in the wrong bay triggers fees and support chats.",
      advice: "Study the zone map on a quiet evening and practice one short loop.",
    },
    {
      title: "Ownership maths from one weekend",
      body: "A single expensive hire day does not prove buying is cheaper.",
      advice: "Price a full month of realistic trips against parking, insurance and tax.",
    },
    {
      title: "Skipping fuel or charge rules",
      body: "Returning below the required fuel or charge level adds penalties.",
      advice: "Read end-of-trip rules in the app before you leave home.",
    },
    {
      title: "Treating share as EV ownership advice",
      body: "Booking a shared EV teaches little about wallboxes, BPM or APK ownership.",
      advice: "Keep Electric vehicles for ownership; keep this page for occasional access.",
    },
    {
      title: "Assuming partner can drive",
      body: "Unverified extra drivers are usually excluded from trip cover.",
      advice: "Each driver needs their own verified account unless terms say otherwise.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Car-sharing readiness checklist",
    intro: "Use this before your first paid membership month or busy weekend booking.",
    items: [
      "Licence status confirmed (validity / exchange timing)",
      "App verification approved",
      "Membership tier chosen with a written monthly cost guess",
      "Nearest station or street cars walked once",
      "Service area / return zone map reviewed",
      "Fuel or charge end rules noted",
      "Damage photo habit practiced",
      "Getting around plan for non-share days",
      "Ownership alternative stress-tested (Buying a car / EV) only if needed",
      "Parking permit reality checked if ownership is still tempting",
    ],
  },
  howTo: {
    heading: "How to start car sharing calmly as an expat",
    steps: [
      {
        name: "Confirm you may legally drive",
        text: "Check foreign licence validity or Dutch rijbewijs status before you pay for a plan.",
      },
      {
        name: "Map your real car needs",
        text: "List trips from the last month and note hours, kilometres and vehicle size needs.",
      },
      {
        name: "Pick a model that matches your neighbourhood",
        text: "Compare station, street-fleet and peer-to-peer availability where you live and travel.",
      },
      {
        name: "Verify in the app and read insurance notes",
        text: "Complete ID checks, screenshot excess figures, and learn fuel or charge return rules.",
      },
      {
        name: "Run a short practice trip, then review monthly maths",
        text: "End correctly in zone, then compare a month of share costs to owning before you buy a car.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to start car sharing in the Netherlands as an expat",
    description:
      "Orientation steps for expats deciding on car sharing, verifying licence status, choosing a membership model and completing a calm first trip.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Is car sharing cheaper than owning a car in the Netherlands?",
      a: "Often yes if you only need a car occasionally. High weekly kilometres, or family logistics that need daily access, can tip toward ownership or lease. Compare a full month of share fees to parking, insurance, road tax and maintenance — not one weekend hire.",
    },
    {
      q: "Do I need a Dutch driving licence to use car sharing?",
      a: "You need a licence the provider accepts and that is valid for driving in the Netherlands. Many expats start on a foreign licence within their legal window, then exchange. Confirm provider rules and read Driving licence exchange.",
    },
    {
      q: "What is the difference between Greenwheels-style fleets and SnappCar?",
      a: "Fleet apps usually offer station or neighbourhood cars with standardised hourly pricing. Peer-to-peer platforms list private owners’ cars by the day with listing-specific insurance and mileage rules. Choose based on trip length and vehicle size, not brand familiarity alone.",
    },
    {
      q: "Does car sharing include insurance?",
      a: "Most fleets bundle trip cover with an excess. Terms, exclusions and optional lower-excess products vary. Read the provider’s policy summary. Personal WA insurance for an owned car is a different product — see Car insurance if you buy later.",
    },
    {
      q: "Can I use car sharing instead of buying an EV?",
      a: "Yes for occasional access. Owning an EV adds charging, tax orientation and APK responsibilities covered on Electric vehicles. Do not treat a shared EV trip as a full ownership test.",
    },
    {
      q: "What about parking permits?",
      a: "Sharing often avoids resident-permit admin. You still must end trips in allowed zones. If you later own a car, Parking and local permits becomes essential.",
    },
    {
      q: "Is lease the same as car sharing?",
      a: "No. Lease is a long-term contracted vehicle (often via employer) with different tax and mileage rules. Deepen on Lease cars. This page stays on on-demand memberships and day hire.",
    },
    {
      q: "Is this legal or financial advice?",
      a: "No. ExpatLife provides general orientation only. Follow provider terms, RDW, your municipality and written contracts for decisions on driving and payments.",
    },
  ],
  relatedGuidesTips: [
    "OV and bikes → Getting around.",
    "Purchase path → Buying a car.",
    "EV ownership → Electric vehicles.",
    "Contracted access → Lease cars.",
    "Curb reality → Parking and local permits.",
    "Drive rights → Driving licence exchange.",
    "Cover if you buy → Car insurance.",
  ],
  relatedGuides: [
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Trains, OVpay, bikes and everyday mobility when ownership is optional.",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase paths, BPM orientation and RDW transfer when sharing is not enough.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "EV purchase, charging and ownership — separate from booking a shared car.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Private lease, company cars and contract orientation when exclusive access beats sharing.",
    },
    {
      label: "Parking and local permits",
      href: PARKING_PATH,
      status: "live",
      description: "Resident parking, visitor permits and paid zones.",
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
      description: "WA cover when you later own a car.",
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
      description: "Periodic inspection for owners — providers usually handle this on shared fleets.",
    },
    {
      label: "Speed cameras",
      href: SPEED_CAMERAS_NETHERLANDS_PATH,
      status: "live",
      description: "Speed enforcement orientation — fines still apply in shared cars.",
    },
  ] satisfies DrivingLink[],
  drivingHubTips: [
    "Car sharing is the occasional-access cornerstone of the Driving cluster.",
    "Getting around remains the wider mobility guide for OV and bikes.",
    "Buying a car and Electric vehicles cover ownership paths.",
    "Lease cars covers contracted exclusive access.",
    "Parking completes curb reality when you stop sharing.",
  ],
  drivingHubCards: [
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Membership models, trips and cost orientation — you are here.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "OV, bikes and multimodal commuting.",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase, registration and ownership orientation.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "EV purchase, charging and ownership orientation.",
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
      label: "Parking and local permits",
      href: PARKING_PATH,
      status: "live",
      description: "Permits and paid parking after you have a vehicle.",
    },
  ] satisfies DrivingLink[],
  exploreNextCards: [
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Build the OV and bike baseline between share trips.",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Sharing not enough? Start the purchase and RDW plan.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "Considering ownership as an EV? Learn charging first.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Need exclusive access without buying? Compare private and company lease.",
    },
    {
      label: "Parking permits",
      href: PARKING_PATH,
      status: "live",
      description: "Owning soon? Learn resident parking early.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Need drive rights clarity before you join?",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "Buying next? Align cover with transfer day.",
    },
  ] satisfies DrivingLink[],
  exploreNextTips: [
    "No car most days → Getting around.",
    "Ready to buy → Buying a car.",
    "EV ownership path → Electric vehicles.",
    "Exclusive access without buying → Lease cars.",
    "Curb admin → Parking permits.",
    "Licence unclear → Driving licence exchange.",
    "Owning soon → Car insurance.",
  ],
  officialSources: [
    {
      label: "RDW — driving licence and vehicle orientation",
      href: "https://www.rdw.nl/en",
      description: "Official orientation for licences and vehicle topics",
    },
    {
      label: "Government.nl — transport topics",
      href: "https://www.government.nl/",
      description: "Dutch government portal for living and transport orientation",
    },
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Practical official orientation for living in the Netherlands",
    },
    {
      label: "ANWB — mobility orientation",
      href: "https://www.anwb.nl/",
      description: "Consumer mobility orientation — verify current guidance yourself",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Decide if sharing fits.",
        "Pick a membership model.",
        "Learn the trip flow.",
        "Compare costs to owning.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Decide.",
        "Models.",
        "Trip flow.",
        "Licence notes.",
        "Costs vs owning.",
        "Parking zones.",
      ],
    },
    decide: {
      title: "From the visual — decision cues",
      items: [
        "Weekly car need.",
        "Parking reality.",
        "Assignment length.",
        "Licence window.",
      ],
    },
    models: {
      title: "From the visual — model cues",
      items: [
        "Station / hub fleets.",
        "Street neighbourhood cars.",
        "Peer-to-peer day hire.",
        "Membership tiers.",
      ],
    },
    trip: {
      title: "From the visual — trip cues",
      items: [
        "Verify documents.",
        "Book and unlock.",
        "Fuel or charge rules.",
        "End in zone.",
      ],
    },
    licence: {
      title: "From the visual — licence cues",
      items: [
        "Valid drive rights.",
        "Provider acceptance.",
        "Bundled excess.",
        "Fines still apply.",
      ],
    },
    costs: {
      title: "From the visual — cost cues",
      items: [
        "Month of real trips.",
        "Membership + time + km.",
        "Ownership parking stack.",
        "Insurance and tax if buying.",
      ],
    },
    parking: {
      title: "From the visual — parking cues",
      items: [
        "Service area map.",
        "Paid parking rules.",
        "Station bay returns.",
        "Later permit reality.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "Bike-first city.",
        "IKEA weekend.",
        "Short assignment.",
        "Occasional van need.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "No licence check.",
        "Wrong return zone.",
        "One-weekend maths.",
        "Skipped fuel rules.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Licence and app OK.",
        "Tier chosen.",
        "Zone map learned.",
        "Month maths done.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general information for orientation only. It is not legal, tax, financial, insurance or product advice. Verify current rates, zones and contracts with car-sharing providers, RDW and municipalities. Soft partner links, when shown, are labelled and never presented as official rankings.",
} as const;

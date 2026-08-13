import { LIVING_GETTING_AROUND_PATH, LIVING_PILLAR_ROOT_PATH } from "@/src/components/living/livingPillarContent";
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
export type TimelineStep = { phase: string; timing: string; detail: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "road-tax-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const roadTaxNetherlandsPage = {
  slug: "road-tax-netherlands",
  path: ROAD_TAX_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(ROAD_TAX_NETHERLANDS_PATH) ?? "2026-08-29",
  seo: {
    title: "Road Tax in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how Dutch road tax (wegenbelasting / motorrijtuigenbelasting) works for expats: who pays, how weight, fuel and province affect amounts, how to check and pay via Belastingdienst and RDW, and timing after buying a car.",
    keywords: [
      "road tax Netherlands",
      "wegenbelasting Netherlands",
      "motorrijtuigenbelasting expats",
      "Dutch motor vehicle tax",
      "MRB Netherlands",
      "road tax Belastingdienst",
      "RDW road tax check",
      "car tax Netherlands weight fuel",
      "pay road tax Netherlands",
      "expat road tax Netherlands",
      "vehicle tax after buying car Netherlands",
      "province road tax Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Driving",
    pageTitle: "Road Tax in the Netherlands",
    subtitle:
      "How Dutch motor vehicle tax (wegenbelasting) works for expats: who pays, what drives the amount, how to check and pay via official portals, and what to do after you register a car — without insurance or purchase deep-dives.",
    primaryCta: { label: "See what affects the amount", href: "#factors" },
    secondaryCta: { label: "Payment checklist", href: "#checklist" },
    chips: ["Who pays", "Weight & fuel", "Province", "Check & pay", "After registration"],
    disclaimer:
      "General orientation only — not tax, legal or financial advice and not a substitute for Belastingdienst or RDW instructions. Tariffs, exemptions and payment rules change. Verify live amounts and steps on official sites before you budget or pay.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch canal-side desk scene: multicultural expat reviewing a vehicle registration letter and road-tax notice beside a laptop showing a neutral calculator layout, soft daylight, no government logos, reassuring orientation mood.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what", label: "What it is" },
    { href: "#who-pays", label: "Who pays" },
    { href: "#factors", label: "Amount factors" },
    { href: "#check", label: "Check amount" },
    { href: "#pay", label: "How to pay" },
    { href: "#timing", label: "After purchase" },
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
      "Premium orientation board titled Road Tax After You Own a Car — four building blocks: know what MRB is, confirm you are the registered keeper, check live amount factors, pay via official portals — Tax File Checklist rail on the right, Dutch canal skyline and ExpatLife brand footer.",
      "Four habits cover most road-tax questions: definition, keeper status, live factors, and official payment."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch road tax — what MRB is, who pays, weight fuel province factors, how to check, how to pay, timing after RDW registration — Dutch city mobility band and ExpatLife brand footer.",
      "Six building blocks explain almost every road-tax question for newcomers."
    ),
    what: visual(
      "what",
      "Premium explain board — motorrijtuigenbelasting / wegenbelasting as recurring ownership tax tied to the registered vehicle, not insurance and not BPM — calm Dutch desk with registration papers and canal light.",
      "Road tax is a recurring ownership cost linked to the car on the RDW register — separate from insurance and BPM."
    ),
    whoPays: visual(
      "who-pays",
      "Premium ownership handoff scene — the person named on the RDW registration as keeper is typically responsible for road tax — Verify with Belastingdienst rail, Dutch municipal-adjacent paperwork desk.",
      "The registered keeper usually carries the tax obligation — confirm who is on the RDW record after purchase."
    ),
    factors: visual(
      "factors",
      "Premium factor map — vehicle weight band, fuel or powertrain type, and province or region as orientation levers that change the amount — calculator-style desk with Dutch province map props, no fake euro rates.",
      "Weight, fuel/powertrain and province are the common orientation levers — always confirm live tariffs officially."
    ),
    check: visual(
      "check",
      "Premium check-amount journey — DigiD or portal login, enter vehicle details, read the calculated period amount, save a dated screenshot — Belastingdienst orientation desk with canal-view window.",
      "Use official calculators or your tax messages — never trust a forum screenshot as your personal amount."
    ),
    pay: visual(
      "pay",
      "Premium payment methods board — automatic debit, portal payment, and calendar reminders for the tax period — calm Dutch living-room laptop scene with IBAN and notice letter props.",
      "Most households set a reliable payment habit via official channels — diary the period so cashflow stays calm."
    ),
    timing: visual(
      "timing",
      "Premium post-purchase timeline — buy and RDW transfer, first tax messages, first payment window, ongoing quarterly or monthly habit — Dutch kitchen table with keys and registration pack.",
      "Road tax follows registration — plan the first weeks after you become the registered keeper."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — city compact car, heavier family SUV, EV or hybrid curiosity, short assignment lease vs own — first-step arrows and General information only rail.",
      "Match your vehicle and assignment to a calm first check instead of copying a colleague’s euro figure."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — budgeting sticker price only, ignoring province differences, confusing BPM with MRB, missing first payment after transfer, treating insurance as tax — Fix notes beside each card.",
      "Most friction comes from timing and mixing tax topics — not from finding a portal link."
    ),
    checklist: visual(
      "checklist",
      "Premium road-tax checklist clipboard — RDW name confirmed, live amount checked, payment method set, first period diaried, insurance separate, purchase docs filed — Dutch kitchen table with canal light.",
      "Use this checklist so the first tax period after purchase stays intentional."
    ),
  },
  snapshotSignals: [
    { label: "Tax name", value: "MRB / wegenbelasting", note: "Recurring ownership tax" },
    { label: "Who", value: "Registered keeper", note: "RDW name matters" },
    { label: "Drivers", value: "Weight · fuel · province", note: "Confirm live tariffs" },
    { label: "Action", value: "Check + pay officially", note: "After RDW transfer" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Road tax in the Netherlands — often called wegenbelasting or motorrijtuigenbelasting (MRB) — is the recurring tax linked to owning a registered motor vehicle. It sits beside insurance, parking and fuel in your monthly cost stack.",
    "Buying a car covers purchase and RDW transfer. Car insurance covers liability and optional cover. Driving licence exchange covers whether you may drive. This page stays on road tax orientation: what it is, who pays, what changes the amount, and how to check and pay.",
  ],
  introHighlights: [
    "Road tax is usually tied to the vehicle’s registered keeper, not to who currently holds the keys.",
    "Weight, fuel or powertrain type, and province are common factors — amounts must be verified live.",
    "Check and pay through official Belastingdienst / RDW-oriented flows — not social-media calculators.",
    "Do not treat this page as tax advice — confirm your situation on official sites.",
  ],
  orientationFlowSteps: [
    "Confirm you are (or will be) the RDW registered keeper after purchase or transfer.",
    "Check the live amount using official tools with your vehicle and address factors.",
    "Set a payment method and diary the first tax period after registration.",
    "Keep road tax separate from insurance, BPM and parking in your budget notes.",
  ],
  taxFileChecklist: [
    "RDW registration confirmation (you are the keeper)",
    "Kenteken / vehicle details used for the official check",
    "Dated screenshot or PDF of the calculated or assessed amount",
    "Payment method confirmation (e.g. automatic debit setup)",
    "Calendar reminder for the next tax period",
    "Separate folder note for insurance policy (not the same as road tax)",
  ],
  introScenarios: [
    {
      situation: "Just bought a used car and completed RDW transfer",
      approach: "Expect road-tax responsibility to follow the new keeper record — check the official amount promptly.",
      firstStep: "Open the check-amount section and verify with your kenteken on official tools.",
    },
    {
      situation: "Comparing two cars before buying",
      approach: "Treat road tax as a recurring line item that can differ by weight, fuel and province.",
      firstStep: "Run official orientation checks for both vehicles before you bid.",
    },
    {
      situation: "Moving to another province with the same car",
      approach: "Province can affect the amount — do not assume last year’s figure still applies.",
      firstStep: "Re-check after your address and registration context are up to date.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "MRB is recurring — budget it like insurance, not like a one-off fee.",
    "BPM (purchase/import tax) is a different topic from road tax.",
    "Parking permits are municipal — see Parking and local permits.",
    "Insurance is mandatory to drive — see the Car insurance sibling when live.",
  ],
  quickAnswer: {
    heading: "Road tax in one minute",
    summary:
      "If you own a car registered in your name in the Netherlands, you will usually pay motor vehicle tax (wegenbelasting / MRB). The amount depends on vehicle characteristics and where you live — confirm live figures on official portals, then set a reliable payment habit after RDW registration.",
    bullets: [
      "Road tax is a recurring ownership tax linked to the registered vehicle.",
      "The RDW registered keeper is typically the person Belastingdienst looks to for payment.",
      "Weight, fuel/powertrain and province commonly change what you owe.",
      "Check and pay via official channels; diary the first period after you buy.",
    ],
    note: "Buying a car and car insurance are sibling guides — use them for purchase and cover, not as substitutes for Belastingdienst rules.",
  },
  snapshotCards: [
    {
      title: "What it is",
      body: "Dutch motor vehicle tax (MRB / wegenbelasting) for registered cars and similar vehicles.",
    },
    {
      title: "Who pays",
      body: "Usually the person named as keeper on the RDW registration.",
    },
    {
      title: "Amount factors",
      body: "Orientation levers include weight, fuel or powertrain, and province — verify live.",
    },
    {
      title: "How to check",
      body: "Use Belastingdienst / official calculators with your vehicle details.",
    },
    {
      title: "How to pay",
      body: "Follow official payment options and reminders for each tax period.",
    },
    {
      title: "After purchase",
      body: "Plan the first weeks after RDW transfer so the first assessment does not surprise you.",
    },
  ] satisfies TipCard[],
  what: {
    heading: "What Dutch road tax is",
    intro:
      "Road tax is the everyday English label for motorrijtuigenbelasting — often shortened to MRB and still widely called wegenbelasting. It is a recurring tax on keeping a registered motor vehicle in the Netherlands.",
    paragraphs: [
      "It is not car insurance. Paying road tax does not create liability cover if you cause an accident. It is also not BPM, which is a different tax topic that can appear around new cars or certain import paths.",
      "For most resident car owners, road tax shows up as a predictable ownership cost after the vehicle is on the RDW register in their name. Exact tariffs, exemptions and special vehicle categories must be confirmed on official sites — ExpatLife does not publish invented euro rates.",
    ],
    rows: [
      {
        topic: "MRB / wegenbelasting",
        whatToCheck: "That you understand it as recurring ownership tax for the registered vehicle.",
        tip: "Budget it monthly even if you pay per period.",
      },
      {
        topic: "BPM",
        whatToCheck: "Whether any purchase/import tax applies to your purchase path — separate from MRB.",
        tip: "See Buying a car for BPM orientation; verify on Belastingdienst tools.",
      },
      {
        topic: "Insurance",
        whatToCheck: "That you have motor insurance to drive — separate legal topic.",
        tip: "Open Car insurance when you need cover comparisons.",
      },
      {
        topic: "Parking",
        whatToCheck: "Municipal permits and paid zones where you store the car.",
        tip: "Use Parking and local permits — not the road-tax portal.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Ownership tax, not a driving fee",
        body: "Road tax follows the registered vehicle. Driving without insurance is a different problem.",
      },
      {
        title: "Official names vary",
        body: "You may see MRB, motorrijtuigenbelasting or wegenbelasting — same family of obligation for most cars.",
      },
      {
        title: "No invented tariffs here",
        body: "ExpatLife explains the system. Live euro amounts come from Belastingdienst and related official tools.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Purchase, RDW transfer and ownership stack — including where road tax sits in the budget.",
      },
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "Liability and cover choices — separate from road tax.",
      },
    ] satisfies DrivingLink[],
  },
  whoPays: {
    heading: "Who pays road tax",
    intro:
      "In ordinary private ownership, the person registered as the vehicle’s keeper with RDW is the one Belastingdienst typically holds responsible for motor vehicle tax.",
    paragraphs: [
      "If you buy a car and complete RDW ownership transfer, expect the tax obligation to move with that registration change. If a partner, employer or lease company remains the registered keeper, your personal road-tax picture may look different — confirm the name on the register rather than assuming based on who drives.",
      "Company cars, lease contracts and temporary arrangements can shift who is billed. Read the contract and the registration record; do not rely on workplace hallway explanations as tax law.",
    ],
    steps: [
      {
        phase: "Before you buy",
        timing: "Decision week",
        detail: "Ask who will be the RDW registered keeper after transfer — that usually drives the tax bill.",
      },
      {
        phase: "On purchase day",
        timing: "Transfer moment",
        detail: "Complete RDW ownership change correctly and keep confirmation documents.",
      },
      {
        phase: "First weeks after",
        timing: "Post-registration",
        detail: "Watch for official tax messages and set payment before the first period is due.",
      },
      {
        phase: "If registration changes later",
        timing: "Sale, gift, export",
        detail: "Transfer or deregister through official flows so you are not billed for a car you no longer keep.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Keys ≠ registration",
        body: "Holding the keys does not always mean you are the registered keeper for tax purposes.",
      },
      {
        title: "Lease and company cars",
        body: "Employer or lessor paperwork may keep tax with the company — verify in writing.",
      },
      {
        title: "Joint households",
        body: "Decide whose name goes on the RDW record before purchase day, not after the first assessment.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car — RDW transfer",
        href: `${BUYING_A_CAR_NETHERLANDS_PATH}#rdw`,
        status: "live",
        description: "How ownership transfer usually fits into purchase day.",
      },
      {
        label: "Municipality services",
        href: MUNICIPALITY_PATH,
        status: "live",
        description: "Broader gemeente orientation when address registration also changes.",
      },
    ] satisfies DrivingLink[],
  },
  factors: {
    heading: "What affects the amount",
    intro:
      "Dutch road-tax amounts are calculated from official rules. For everyday passenger cars, newcomers usually hear three orientation levers: vehicle weight, fuel or powertrain type, and the province (or related location factors) linked to where the vehicle is kept.",
    paragraphs: [
      "Heavier cars often cost more. Petrol, diesel, electric and other powertrains can sit in different tariff patterns. Moving between provinces can change what you pay for the same kenteken — so a colleague’s monthly figure is not a personal quote.",
      "Special categories, exemptions, classic cars, commercial vehicles and temporary measures exist. This page does not enumerate them as advice. Use official calculators with your exact vehicle details and confirm any exemption claims on Belastingdienst guidance.",
    ],
    rows: [
      {
        topic: "Weight",
        whatToCheck: "The vehicle’s official weight band used in tax tools — not a guess from a brochure.",
        tip: "When comparing cars, run both through the official checker.",
      },
      {
        topic: "Fuel / powertrain",
        whatToCheck: "Petrol, diesel, electric, hybrid or other classifications as used officially.",
        tip: "Do not assume EV always equals zero tax without verifying the current rule set.",
      },
      {
        topic: "Province / location",
        whatToCheck: "Where the vehicle is registered or kept for tax purposes.",
        tip: "Re-check after moving house or changing registration address context.",
      },
      {
        topic: "Vehicle type",
        whatToCheck: "Passenger car vs van, motorcycle or special category if relevant.",
        tip: "Commercial or specialty vehicles can follow different tables — verify officially.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Orientation, not a quote",
        body: "These levers explain why amounts differ — they are not a substitute for the live calculation.",
      },
      {
        title: "Compare before you buy",
        body: "Two similar-looking hatchbacks can diverge once weight and fuel codes differ.",
      },
      {
        title: "Save dated evidence",
        body: "Screenshot official results with the date when you budget a purchase.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car — costs",
        href: `${BUYING_A_CAR_NETHERLANDS_PATH}#costs`,
        status: "live",
        description: "See how road tax sits in the full ownership cost stack.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "If ownership costs look high, stress-test OV and bike options.",
      },
    ] satisfies DrivingLink[],
  },
  check: {
    heading: "How to check your road-tax amount",
    intro:
      "Treat the official Belastingdienst motor vehicle tax tools and your personal tax messages as the source of truth. RDW vehicle data often feeds the identity of the car; the tax calculation and assessment sit with Belastingdienst.",
    paragraphs: [
      "You will typically need DigiD (or the login method the portal currently supports) and accurate vehicle details such as the kenteken. Enter data carefully — a mistyped plate or outdated address context produces a useless number.",
      "Forum posts, dealer hallway estimates and AI chat guesses go stale. Prefer a dated official result you can file next to your purchase documents.",
    ],
    steps: [
      {
        phase: "Gather vehicle details",
        timing: "10 minutes",
        detail: "Kenteken, expected registered keeper, and address/province context you will use.",
      },
      {
        phase: "Open official tools",
        timing: "Same session",
        detail: "Use Belastingdienst MRB / motorrijtuigenbelasting orientation or calculator pages — verify the live URL.",
      },
      {
        phase: "Read the period amount",
        timing: "Same session",
        detail: "Note whether the figure is per quarter, month or another period the tool states.",
      },
      {
        phase: "File evidence",
        timing: "Before you budget",
        detail: "Save a PDF or screenshot with the date for your purchase or ownership file.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "DigiD readiness",
        body: "If you cannot log in, fix DigiD first — guessing tariffs wastes a weekend.",
      },
      {
        title: "Period language",
        body: "Convert official period amounts into a monthly number for your household budget.",
      },
      {
        title: "Two-car comparison",
        body: "Check both candidates the same day with the same address assumptions.",
      },
    ] satisfies TipCard[],
  },
  pay: {
    heading: "How to pay road tax",
    intro:
      "Once Belastingdienst assesses or expects payment for a period, you pay through the official channels described in your tax messages — often including automatic debit from a Dutch IBAN when set up correctly.",
    paragraphs: [
      "Many households prefer automatic collection so a forgotten quarter does not become an avoidable fine or reminder spiral. If you pay manually, diary the due dates like rent.",
      "Payment problems are usually operational: wrong IBAN, closed foreign account habits, or ignoring the first letter after registration. Resolve them on official portals or help desks — not by waiting for a second notice.",
    ],
    rows: [
      {
        topic: "Automatic debit",
        whatToCheck: "That your Dutch IBAN is authorised for Belastingdienst collections where offered.",
        tip: "Confirm the mandate after registration changes.",
      },
      {
        topic: "Portal / notice payment",
        whatToCheck: "The payment reference and due date on the official assessment.",
        tip: "Pay early in the window if cashflow is tight.",
      },
      {
        topic: "Bank account readiness",
        whatToCheck: "You have a Dutch payment account suitable for recurring government collections.",
        tip: "Foreign cards alone are a fragile plan for MRB.",
      },
      {
        topic: "Reminders and arrears",
        whatToCheck: "Any open amounts in your Belastingdienst overview.",
        tip: "Act on the first reminder — delays cost calm more than euros.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Official channels only",
        body: "Pay using Belastingdienst instructions — ignore third-party “pay your tax” phishing lookalikes.",
      },
      {
        title: "Separate from insurance premiums",
        body: "Insurer direct debit is not road tax. Keep both mandates labelled in your banking app.",
      },
      {
        title: "After you sell",
        body: "Confirm registration left your name so collections stop for that kenteken.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Payments basics",
        href: "/netherlands/living/payments/",
        status: "live",
        description: "How everyday Dutch payments and direct debits usually work.",
      },
    ] satisfies DrivingLink[],
  },
  timing: {
    heading: "Timing after buying or registering a car",
    intro:
      "Road tax becomes your problem when you become the registered keeper — typically right after RDW ownership transfer on a purchase. Plan the first weeks deliberately.",
    paragraphs: [
      "Purchase day should already include RDW transfer and insurance start. Road tax is the next ownership habit: check the expected amount, confirm payment setup, and watch for the first official message.",
      "If you delay checking, the first assessment can feel sudden even when the system worked as designed. A 30-minute admin block in week one prevents most expat stress stories.",
    ],
    steps: [
      {
        phase: "Purchase / transfer day",
        timing: "Day 0",
        detail: "Complete RDW ownership transfer and start insurance; file the confirmation pack.",
      },
      {
        phase: "Same week",
        timing: "Days 1–7",
        detail: "Run an official amount check and set or confirm payment method.",
      },
      {
        phase: "First assessment window",
        timing: "Early ownership",
        detail: "Read Belastingdienst messages carefully and pay or confirm debit before the due date.",
      },
      {
        phase: "Ongoing habit",
        timing: "Each tax period",
        detail: "Keep IBAN funded, diary reminders, and re-check after address or vehicle changes.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Transfer triggers responsibility",
        body: "Once you are on the RDW record, assume tax follow-up is yours until proven otherwise.",
      },
      {
        title: "Insurance still required",
        body: "Road-tax timing does not replace the need to insure before you drive.",
      },
      {
        title: "Parking in parallel",
        body: "Resident permits are a municipal track — start them early in permit cities.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Full purchase-day stack: RDW, insurance orientation and ownership costs.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Resident parking after you have a vehicle.",
      },
      {
        label: "Driving licence exchange",
        href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
        status: "live",
        description: "Confirm you may legally drive before ownership stress compounds.",
      },
    ] satisfies DrivingLink[],
  },
  scenarios: {
    heading: "Common expat road-tax scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "Comparing a light city hatchback vs a heavier SUV",
        approach: "Expect different official amounts; weight and fuel codes matter more than badge design.",
        firstStep: "Run both kentekens (or candidate specs) through official tools the same day.",
      },
      {
        situation: "Just completed RDW transfer this week",
        approach: "Treat road tax as active ownership admin, not a vague future bill.",
        firstStep: "Check amount + confirm payment method before the weekend.",
      },
      {
        situation: "Moving from Noord-Holland to another province",
        approach: "Province can change the figure for the same car — re-verify after the move.",
        firstStep: "Update registration/address context, then re-run the official check.",
      },
      {
        situation: "Considering an EV or hybrid",
        approach: "Powertrain rules evolve — never inherit a friend’s old “EVs are free” claim.",
        firstStep: "Confirm the current official treatment for that exact vehicle.",
      },
      {
        situation: "Company or lease car offered at work",
        approach: "Tax billing may sit with the employer or lessor — your payslip treatment can differ.",
        firstStep: "Ask HR/lease desk who is the registered keeper and who pays MRB.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Budgeting only the purchase price",
      body: "Road tax is a recurring line that surprises people in month two.",
      advice: "Add an official monthly equivalent to your ownership spreadsheet before you buy.",
    },
    {
      title: "Copying a colleague’s euro amount",
      body: "Different weight, fuel and province produce different bills.",
      advice: "Run your own official check with your vehicle and address context.",
    },
    {
      title: "Confusing BPM with road tax",
      body: "Purchase/import tax and recurring MRB are different topics.",
      advice: "Keep separate notes — see Buying a car for BPM orientation.",
    },
    {
      title: "Ignoring the first weeks after RDW transfer",
      body: "The system may work on schedule while your inbox is still unpacking boxes.",
      advice: "Diary a same-week check-and-pay setup block.",
    },
    {
      title: "Thinking insurance premiums include road tax",
      body: "Insurers collect premiums; Belastingdienst collects MRB.",
      advice: "Label both mandates clearly in your banking app.",
    },
    {
      title: "Leaving your name on a sold car",
      body: "Incomplete transfer can leave tax responsibility hanging.",
      advice: "Confirm RDW shows the new keeper after you sell.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Road tax readiness checklist",
    intro: "Use this when you buy, transfer or move — and again when a tax period is due.",
    items: [
      "Confirm who is (or will be) the RDW registered keeper",
      "File kenteken and transfer confirmation documents",
      "Run an official Belastingdienst amount check with dated evidence",
      "Convert the official period amount into a monthly budget line",
      "Set or confirm payment method / automatic debit on a Dutch IBAN",
      "Diary the first due date after registration",
      "Keep insurance and parking admin on separate tracks",
      "Re-check after province moves, vehicle swaps or sales",
      "Verify you are removed from the register when you sell",
    ],
  },
  howTo: {
    heading: "How to handle road tax as an expat (orientation)",
    steps: [
      {
        name: "Confirm registered-keeper status",
        text: "Make sure RDW ownership matches the person who should carry motor vehicle tax after purchase or transfer.",
      },
      {
        name: "Check the live amount officially",
        text: "Use Belastingdienst tools with accurate vehicle and location details; save a dated result for your file.",
      },
      {
        name: "Set a reliable payment habit",
        text: "Authorise official collection or diary manual payments so the first period is not missed.",
      },
      {
        name: "Separate related ownership costs",
        text: "Keep insurance, parking and BPM notes distinct so you do not double-count or under-budget.",
      },
      {
        name: "Re-verify after life changes",
        text: "Moves, sales and vehicle swaps can change amounts or responsibility — confirm on official portals again.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to check and pay Dutch road tax as an expat",
    description:
      "Orientation steps for expats confirming RDW keeper status, checking motor vehicle tax amounts on official tools, and setting a payment habit after registering a car.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What is road tax in the Netherlands?",
      a: "Road tax usually means motorrijtuigenbelasting (MRB), also called wegenbelasting — the recurring tax linked to keeping a registered motor vehicle. It is separate from car insurance and from BPM.",
    },
    {
      q: "Who has to pay wegenbelasting?",
      a: "In typical private ownership, the person registered as the vehicle’s keeper with RDW is responsible. Lease and company cars can work differently — check the registration and contract.",
    },
    {
      q: "How is Dutch road tax calculated?",
      a: "Official rules use vehicle characteristics and location factors. For many cars, weight, fuel or powertrain type, and province are the orientation levers newcomers notice. Always verify the live amount on Belastingdienst tools.",
    },
    {
      q: "How do I check how much road tax I will pay?",
      a: "Use official Belastingdienst motor vehicle tax calculators or your personal tax messages with the correct kenteken and address context. Save a dated screenshot for budgeting.",
    },
    {
      q: "When do I start paying after buying a car?",
      a: "Responsibility typically follows RDW ownership transfer. Check the expected amount the same week you become the registered keeper and watch for the first official assessment or collection.",
    },
    {
      q: "Is road tax the same as car insurance?",
      a: "No. Road tax is a tax. Motor insurance is a separate legal requirement to drive. Paying one does not replace the other.",
    },
    {
      q: "Do electric cars pay road tax?",
      a: "Rules for electric and other powertrains can differ and change over time. Do not rely on outdated “always free” claims — confirm the current official treatment for your exact vehicle.",
    },
    {
      q: "Is this tax advice?",
      a: "No. ExpatLife provides general orientation only. Follow Belastingdienst and RDW instructions for your situation.",
    },
  ],
  relatedGuidesTips: [
    "Purchase and RDW transfer → Buying a car.",
    "Cover choices → Car insurance.",
    "Drive rights → Driving licence exchange.",
    "OV and bikes → Getting around.",
    "Resident parking → Parking and local permits.",
  ],
  relatedGuides: [
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase paths, RDW registration and the full ownership cost stack.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "Liability and cover orientation — separate from road tax.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange.",
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
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Periodic vehicle inspection — separate from road tax.",
    },
    {
      label: "Speed cameras",
      href: SPEED_CAMERAS_NETHERLANDS_PATH,
      status: "live",
      description: "Speed enforcement orientation for Dutch roads.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "EV road-tax and ownership stack orientation.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Avoid registered-keeper tax with membership cars when ownership is optional.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Lease and company-car paths where tax handling may differ from private ownership.",
    },
  ] satisfies DrivingLink[],
  drivingHubTips: [
    "Road tax is the recurring-tax cornerstone of the Driving cluster.",
    "Buying a car is the purchase and registration sibling.",
    "Car insurance is the cover sibling.",
    "MOT / APK is the roadworthiness sibling.",
    "Electric vehicles, car sharing and lease cars cover alternative access paths.",
    "Driving licence exchange remains the drive-rights guide.",
  ],
  drivingHubCards: [
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB orientation — you are here.",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase, BPM orientation, RDW transfer and ownership costs.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "WA, WA+ and cover choices for expats.",
    },
    {
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch MOT / periodic vehicle inspection orientation.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "EV ownership: charging, incentives orientation and range notes.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "App and membership cars when you need occasional four wheels.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Private lease and company-car orientation for expats.",
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
    {
      label: "Speed cameras",
      href: SPEED_CAMERAS_NETHERLANDS_PATH,
      status: "live",
      description: "Speed enforcement orientation for Dutch roads.",
    },
  ] satisfies DrivingLink[],
  exploreNextCards: [
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Still shopping? Build the full purchase and ownership plan.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "EV road-tax differences? Start with electric vehicles orientation.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "Need cover before you drive? Start with insurance orientation.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Lease instead of own? Orient before you sign.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Skip ownership tax with occasional shared cars.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Ownership looking expensive? Strengthen OV and bike habits.",
    },
  ] satisfies DrivingLink[],
  exploreNextTips: [
    "Still buying → Buying a car.",
    "Going electric → Electric vehicles.",
    "Need cover → Car insurance.",
    "Lease path → Lease cars.",
    "Occasional use → Car sharing.",
    "Delay ownership → Getting around.",
  ],
  officialSources: [
    {
      label: "Belastingdienst — motorrijtuigenbelasting",
      href: "https://www.belastingdienst.nl/",
      description: "Official tax authority orientation for MRB / road tax amounts, payment and rules — confirm live pages",
    },
    {
      label: "RDW — vehicle registration",
      href: "https://www.rdw.nl/en",
      description: "Official vehicle authority for registration and keeper status that underpins tax responsibility",
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
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Know what MRB is.",
        "Confirm registered keeper.",
        "Check live amount factors.",
        "Pay via official portals.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "What road tax is.",
        "Who pays.",
        "Weight, fuel, province.",
        "How to check.",
        "How to pay.",
        "Timing after registration.",
      ],
    },
    what: {
      title: "From the visual — definition checks",
      items: [
        "Recurring ownership tax.",
        "Not insurance.",
        "Not BPM.",
        "Verify official names on letters.",
      ],
    },
    whoPays: {
      title: "From the visual — keeper checks",
      items: [
        "RDW name drives responsibility.",
        "Keys are not enough.",
        "Lease may differ.",
        "Confirm after transfer.",
      ],
    },
    factors: {
      title: "From the visual — amount levers",
      items: [
        "Weight band.",
        "Fuel or powertrain.",
        "Province / location.",
        "Live official calculation only.",
      ],
    },
    check: {
      title: "From the visual — check flow",
      items: [
        "Gather kenteken details.",
        "Use official tools.",
        "Read the period amount.",
        "Save dated evidence.",
      ],
    },
    pay: {
      title: "From the visual — payment habits",
      items: [
        "Prefer reliable automatic debit.",
        "Watch due dates.",
        "Use a Dutch IBAN.",
        "Ignore phishing lookalikes.",
      ],
    },
    timing: {
      title: "From the visual — first weeks",
      items: [
        "Transfer day stack.",
        "Same-week amount check.",
        "First assessment window.",
        "Ongoing period habit.",
      ],
    },
    scenarios: {
      title: "From the visual — first steps",
      items: [
        "Compare cars officially.",
        "Act the week of transfer.",
        "Re-check after moves.",
        "Verify EV rules live.",
      ],
    },
    mistakes: {
      title: "From the visual — fix patterns",
      items: [
        "Budget the recurring line.",
        "Run your own check.",
        "Separate BPM from MRB.",
        "Confirm sales leave your name.",
      ],
    },
    checklist: {
      title: "From the visual — readiness",
      items: [
        "Keeper confirmed.",
        "Amount checked.",
        "Payment set.",
        "First period diaried.",
      ],
    },
  },
  disclosure:
    "General information only. Not tax, legal or financial advice and not a substitute for Belastingdienst, RDW or contract instructions. Rules and tariffs change. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
};

/** Re-export pillar root for breadcrumbs/tests that expect a local name. */
export const ROAD_TAX_LIVING_HUB_PATH = LIVING_PILLAR_ROOT_PATH;

// Silence unused import when tree-shaking living pillar path alias in some tooling.
void LIVING_GETTING_AROUND_PATH;

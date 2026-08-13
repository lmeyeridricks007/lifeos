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
export type CostRow = { category: string; range: string; notes: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "mot-apk-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const motApkNetherlandsPage = {
  slug: "mot-apk-netherlands",
  path: MOT_APK_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(MOT_APK_NETHERLANDS_PATH) ?? "2026-09-01",
  seo: {
    title: "MOT / APK in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how the Dutch APK (MOT / periodic vehicle inspection) works for expats: what it is, when it is due, how to book an RDW-approved station, pass/fail orientation, cost bands, and how APK ties to ownership after buying a car.",
    keywords: [
      "APK Netherlands",
      "MOT Netherlands",
      "Dutch MOT APK",
      "vehicle inspection Netherlands",
      "periodic technical inspection Netherlands",
      "APK keuring expats",
      "RDW APK due date",
      "book APK Netherlands",
      "APK cost Netherlands",
      "APK after buying a car",
      "roadworthiness test Netherlands",
      "PTI Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Driving",
    pageTitle: "MOT / APK in the Netherlands",
    subtitle:
      "How the Dutch APK (periodic vehicle inspection — the local MOT) works for expats: when it is due, how to book an RDW-approved station, what pass and fail mean, and how it fits ownership after you buy a car.",
    primaryCta: { label: "Check when APK is due", href: "#when-due" },
    secondaryCta: { label: "APK checklist", href: "#checklist" },
    chips: ["What APK is", "Due dates", "Book a station", "Pass / fail", "After purchase"],
    disclaimer:
      "General orientation only — not legal advice and not a substitute for RDW or garage instructions. Inspection intervals, fees and rejection rules depend on the vehicle and change over time. Verify your live APK due date and station requirements on official RDW tools before you book or drive.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch garage bay scene: multicultural expat reviewing an APK appointment confirmation beside a clean hatchback under soft daylight, RDW-style approval signage blurred in background without readable logos, reassuring ownership-admin mood.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what", label: "What it is" },
    { href: "#when-due", label: "When due" },
    { href: "#book", label: "How to book" },
    { href: "#pass-fail", label: "Pass / fail" },
    { href: "#costs", label: "Costs" },
    { href: "#after-purchase", label: "After purchase" },
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
      "Premium orientation board titled APK After You Own a Car — four building blocks: know what APK is, check the RDW due date, book an RDW-approved station, diary pass or repair follow-up — Inspection File Checklist rail on the right, Dutch canal skyline and ExpatLife brand footer.",
      "Four habits cover most APK questions: definition, due date, booking, and follow-up."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch APK / MOT — what it is, when due, how to book, pass/fail, cost bands, ownership after purchase — Dutch city mobility band and ExpatLife brand footer.",
      "Six building blocks explain almost every APK question for newcomers."
    ),
    what: visual(
      "what",
      "Premium explain board — APK as Algemene Periodieke Keuring / periodic technical inspection (Dutch MOT), roadworthiness and environmental safety check separate from insurance and road tax — calm Dutch garage consultation desk with canal light.",
      "APK is the periodic roadworthiness inspection — not insurance, not road tax, not a full provenance report."
    ),
    whenDue: visual(
      "when-due",
      "Premium calendar timeline — first APK timing depends on vehicle age and fuel type, then recurring intervals; RDW reminder and kenteken check — Dutch kitchen table with laptop showing neutral due-date layout.",
      "Your live due date lives on RDW tools — intervals vary by vehicle, so verify before you assume annual."
    ),
    book: visual(
      "book",
      "Premium booking journey — find RDW-approved station, compare appointment slots, book early in busy months, bring the car not a document stack — garage reception desk with appointment card props.",
      "Only RDW-approved stations can perform APK — book ahead, especially around holidays."
    ),
    passFail: visual(
      "pass-fail",
      "Premium pass-fail board — approved with new expiry, rejection with repair points, advisory notes, re-inspection path — inspector clipboard scene with General information only rail.",
      "Pass renews the inspection window; fail means repair then re-check — read the report carefully."
    ),
    costs: visual(
      "costs",
      "Premium cost-band orientation — typical inspection fee bands, possible repair buffer, re-inspection notes — euro planning cards as orientation only, no fake guarantees.",
      "Station fees vary; repairs after a fail can dwarf the inspection price — budget a buffer on older cars."
    ),
    afterPurchase: visual(
      "after-purchase",
      "Premium post-purchase timeline — check next APK date before buying used, complete RDW transfer, diary the due date, book before expiry — Dutch kitchen table with keys and registration pack.",
      "APK timing is a purchase signal and an ownership habit — diary it the week you buy."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — used car near due date, brand-new first APK, failed inspection, short assignment lease — first-step arrows and General information only rail.",
      "Match your vehicle age and purchase moment to a calm first booking step."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — driving with expired APK, booking any garage, confusing APK with insurance, ignoring advisory points, waiting until the due week — Fix notes beside each card.",
      "Most friction is timing and mixing ownership topics — not finding a station."
    ),
    checklist: visual(
      "checklist",
      "Premium APK checklist clipboard — RDW due date checked, approved station booked, repair buffer planned, report filed, insurance and road tax separate — Dutch kitchen table with canal light.",
      "Use this checklist so the next inspection window stays intentional."
    ),
  },
  snapshotSignals: [
    { label: "Dutch name", value: "APK", note: "Periodic vehicle inspection" },
    { label: "English labels", value: "MOT / PTI", note: "Same family of check" },
    { label: "Authority", value: "RDW-approved stations", note: "Not every garage" },
    { label: "Action", value: "Check + book early", note: "Before expiry" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "APK — Algemene Periodieke Keuring — is the Netherlands’ periodic technical inspection for most cars. Expats often search “MOT Netherlands” or “Dutch MOT”; APK is the local equivalent: a roadworthiness and environmental-safety check at an RDW-approved station.",
    "Buying a car covers purchase and RDW transfer. Car insurance covers liability. Road tax covers recurring MRB. Driving licence exchange covers whether you may drive. This page stays on APK orientation: what it is, when it is due, how to book, what pass/fail means, and how it fits ownership after you buy.",
  ],
  introHighlights: [
    "APK is mandatory for most vehicles on public roads — an expired APK is not a paperwork inconvenience.",
    "Check your live due date with the RDW kenteken / registration check — do not guess from vehicle age alone.",
    "Only RDW-approved inspection stations can perform APK — look for official approval signs.",
    "Do not treat this page as legal advice — confirm intervals and station rules on RDW before you book or drive.",
  ],
  orientationFlowSteps: [
    "Check the live APK due date on official RDW tools with your kenteken.",
    "Book an RDW-approved station with enough buffer for possible repairs.",
    "Attend the inspection and keep the APK report (especially if you drive abroad).",
    "Diary the next due date and keep APK separate from insurance and road tax in your file.",
  ],
  inspectionFileChecklist: [
    "Kenteken / vehicle details",
    "Dated screenshot of RDW APK due date",
    "Appointment confirmation at an RDW-approved station",
    "APK inspection report after the visit",
    "Calendar reminder for the next due window",
    "Separate notes for insurance policy and road-tax period (not the same as APK)",
  ],
  introScenarios: [
    {
      situation: "Just bought a used car with APK valid for months",
      approach: "Still diary the next due date — APK is a purchase signal and an ownership habit.",
      firstStep: "Open the when-due section and confirm the live RDW date for your new kenteken.",
    },
    {
      situation: "APK expires within a few weeks",
      approach: "Book early enough that a fail still leaves time to repair and re-inspect.",
      firstStep: "Find an RDW-approved station and lock an appointment this week.",
    },
    {
      situation: "Comparing two used cars before buying",
      approach: "Treat a near due date as a negotiation and budget signal, not a deal-breaker by itself.",
      firstStep: "Ask sellers for the next APK date and verify with RDW when you have the plate.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "APK is roadworthiness — budget inspection fees and a repair buffer on older cars.",
    "Road tax (MRB) is a different recurring cost — see Road tax.",
    "Insurance is mandatory to drive — see Car insurance.",
    "Purchase and RDW transfer live on Buying a car — including a short APK purchase check.",
  ],
  quickAnswer: {
    heading: "APK / MOT in one minute",
    summary:
      "If you keep a car registered in the Netherlands, you will usually need a valid APK — the Dutch periodic vehicle inspection (often called MOT by expats). Check the due date on RDW tools, book an RDW-approved station before expiry, and treat pass/fail as an ownership admin habit after purchase — not as insurance or road tax.",
    bullets: [
      "APK is the mandatory periodic roadworthiness inspection for most vehicles.",
      "Your live due date sits on RDW registration checks — intervals vary by vehicle.",
      "Only RDW-approved stations can inspect; book ahead in busy periods.",
      "Pass renews the window; fail means repair then re-check before you rely on the car.",
    ],
    note: "Buying a car, car insurance and road tax are sibling guides — use them for purchase, cover and MRB, not as substitutes for RDW APK rules.",
  },
  snapshotCards: [
    {
      title: "What it is",
      body: "Dutch periodic technical inspection (APK) — the local MOT / PTI for roadworthiness.",
    },
    {
      title: "When due",
      body: "First and recurring dates depend on the vehicle — always confirm on RDW.",
    },
    {
      title: "How to book",
      body: "Make an appointment at an RDW-approved garage or testing station.",
    },
    {
      title: "Pass / fail",
      body: "You receive a report; rejection means repair and re-inspection orientation.",
    },
    {
      title: "Costs",
      body: "Station fees vary; repairs after a fail can cost more than the inspection.",
    },
    {
      title: "After purchase",
      body: "Check the next due date when buying used and diary it after RDW transfer.",
    },
  ] satisfies TipCard[],
  what: {
    heading: "What Dutch APK (MOT) is",
    intro:
      "APK stands for Algemene Periodieke Keuring. It is the legally required periodic technical inspection for most vehicles in the Netherlands. In English, people often say MOT, PTI or “vehicle inspection” — they are pointing at the same family of roadworthiness check.",
    paragraphs: [
      "An APK checks whether the vehicle is roadworthy, environmentally acceptable under the inspection rules, and correctly registered for the inspection process. It is not a full mechanical warranty, not a history report, and not proof that every future repair is unnecessary.",
      "APK is separate from car insurance, separate from road tax (wegenbelasting / MRB), and separate from having a valid driving licence. You can pass APK and still be uninsured — or pay insurance and still drive with an expired APK. Keep the topics in different folders.",
    ],
    rows: [
      {
        topic: "APK / MOT / PTI",
        whatToCheck: "That you understand it as periodic roadworthiness inspection at an RDW-approved station.",
        tip: "Search “APK” on Dutch sites; “MOT” is the expat shorthand.",
      },
      {
        topic: "Insurance",
        whatToCheck: "That you have motor insurance to drive — separate legal topic.",
        tip: "Open Car insurance for WA / cover orientation.",
      },
      {
        topic: "Road tax",
        whatToCheck: "Recurring MRB for the registered keeper — not the inspection.",
        tip: "See Road tax for Belastingdienst orientation.",
      },
      {
        topic: "Buying used",
        whatToCheck: "Next APK due date as a purchase and negotiation signal.",
        tip: "Buying a car covers the wider purchase stack.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Roadworthiness, not a deep service",
        body: "APK is a regulated inspection. Dealers may still recommend extra maintenance outside the pass criteria.",
      },
      {
        title: "English labels vary",
        body: "MOT, PTI and “Dutch vehicle test” usually mean APK in expat conversations.",
      },
      {
        title: "No invented due dates here",
        body: "ExpatLife explains the system. Your live expiry comes from RDW tools for that kenteken.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Purchase, RDW transfer and ownership stack — including APK as a used-car check.",
      },
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "Liability and cover choices — separate from APK.",
      },
      {
        label: "Road tax",
        href: ROAD_TAX_NETHERLANDS_PATH,
        status: "live",
        description: "Wegenbelasting / MRB — separate recurring ownership tax.",
      },
    ] satisfies DrivingLink[],
  },
  whenDue: {
    heading: "When APK is due",
    intro:
      "APK timing depends on the vehicle — age, fuel or powertrain category and other official rules. Expats should not memorise a single “every year” slogan. The practical habit is: look up the live due date for your kenteken on RDW tools, then book before that date.",
    paragraphs: [
      "Many passenger cars have a first APK a few years after first registration, then return annually or on another interval the rules set for that category. Diesel and other fuel types can follow different first-inspection patterns than petrol or electric cars. Older vehicles can sit on different schedules; some very old vehicles have special treatments — always verify on RDW rather than forum posts.",
      "RDW typically sends a reminder weeks before expiry, but reminders are a courtesy layer — your responsibility is the due date on the register. You can often inspect early within an official early-booking window so you do not lose cycle time; confirm the current early-window rule on RDW before you assume dates.",
    ],
    steps: [
      {
        phase: "Look up the kenteken",
        timing: "10 minutes",
        detail: "Use the RDW registration / kenteken check and find the APK expiry under expiration dates / history.",
      },
      {
        phase: "Read the category rules",
        timing: "Same session",
        detail: "If you are planning a first APK on a newer car, confirm first-due and interval guidance on RDW for that vehicle type.",
      },
      {
        phase: "Diary with buffer",
        timing: "Same day",
        detail: "Put the due date in your calendar and aim to book weeks earlier so repairs fit.",
      },
      {
        phase: "Watch for reminders",
        timing: "Weeks before expiry",
        detail: "Treat RDW reminders as a prompt, not the first time you learn the date.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Live date beats memory",
        body: "Two similar hatchbacks can have different due dates — check the plate you own.",
      },
      {
        title: "Early booking can protect the cycle",
        body: "Inspecting within the official early window often keeps the original cycle — verify the current RDW rule.",
      },
      {
        title: "Unused cars still matter",
        body: "Standing unused does not automatically pause APK rules — confirm before assuming you can wait.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car — APK section",
        href: `${BUYING_A_CAR_NETHERLANDS_PATH}#apk`,
        status: "live",
        description: "How APK timing shows up when you buy used.",
      },
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "If ownership admin looks heavy, stress-test OV and bike options.",
      },
    ] satisfies DrivingLink[],
  },
  book: {
    heading: "How to book an APK inspection",
    intro:
      "APK must be carried out at a garage or testing station approved by RDW. You recognise approved companies by official approval signage (for example “RDW erkend”) and APK-related stickers — or by searching RDW’s approved-station tools.",
    paragraphs: [
      "Most people book online or by phone with a local approved station. Availability tightens around holidays and popular due months — book early rather than hoping for a same-week slot on the expiry day.",
      "You generally do not need to bring a paper registration certificate for a standard APK appointment — the station works from the vehicle and official systems. Still bring your appointment confirmation and arrive with enough fuel/charge for the inspection process. Ask the station what they need if anything is unusual (import paperwork, adaptations, commercial use).",
    ],
    rows: [
      {
        topic: "Approved station only",
        whatToCheck: "RDW approval for APK light or heavy vehicles as relevant to your car.",
        tip: "Use RDW station search — not a random “cheap MOT” social post.",
      },
      {
        topic: "Appointment timing",
        whatToCheck: "A slot before expiry with buffer for repairs if the car is older.",
        tip: "Busy periods fill up; diary the booking when you see the due date.",
      },
      {
        topic: "What to bring",
        whatToCheck: "Appointment confirmation and the vehicle itself — ask the station for extras.",
        tip: "For foreign trips after APK, keep the report in the glovebox.",
      },
      {
        topic: "Language",
        whatToCheck: "Whether the desk can explain rejection points in English if you need it.",
        tip: "Bring a Dutch-speaking friend if the report language would block decisions.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Chains, independents, dealers",
        body: "Price and wait times differ — approval status matters more than brand familiarity.",
      },
      {
        title: "Pre-checks are optional extras",
        body: "Some garages offer advisory pre-inspections. Useful on older cars — not a substitute for official APK.",
      },
      {
        title: "Illegal online “APK” offers",
        body: "RDW warns against illegal remote approvals. Use real approved stations only.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "After you own a car, resident parking is another ownership admin track.",
      },
      {
        label: "Municipality services",
        href: MUNICIPALITY_PATH,
        status: "live",
        description: "Broader gemeente orientation when address and vehicle life change together.",
      },
    ] satisfies DrivingLink[],
  },
  passFail: {
    heading: "What gets checked — pass and fail orientation",
    intro:
      "The APK inspector examines the vehicle against official requirements. After the visit you receive an inspection report — even if the car is rejected. The report lists rejection points, repair points and advisory points. Read them as different urgency levels.",
    paragraphs: [
      "If the vehicle is approved, the new APK expiry is recorded in the systems and stated on the report. In the Netherlands you generally do not need to carry the report while driving — but take it when you drive abroad.",
      "If the vehicle is rejected, you typically repair the rejection points and return for re-inspection according to the station’s process. Objecting to a rejection has strict on-the-spot rules involving RDW — do not improvise; follow the inspector’s instructions if you disagree immediately after the check. ExpatLife does not coach appeals as legal advice.",
      "RDW also runs spot checks on inspections. If selected, cooperate — it is part of the quality system around APK.",
    ],
    steps: [
      {
        phase: "Inspection",
        timing: "Appointment day",
        detail: "The approved inspector runs the APK checks; stay available if the station needs you.",
      },
      {
        phase: "Report",
        timing: "Same visit",
        detail: "Collect the report; note expiry date, rejection points and advisory notes.",
      },
      {
        phase: "If approved",
        timing: "Same day",
        detail: "File the report digitally and diary the next due window.",
      },
      {
        phase: "If rejected",
        timing: "Before you rely on the car",
        detail: "Repair required points and arrange re-inspection; do not treat advisory notes as optional forever.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Rejection ≠ advisory",
        body: "Rejection points block approval. Advisory points are warnings — still worth budgeting.",
      },
      {
        title: "Re-inspection timing",
        body: "Ask the station how re-checks work and whether a free or paid return applies.",
      },
      {
        title: "Abroad travel",
        body: "Carry the report when crossing borders — domestic Dutch driving usually does not require it on you.",
      },
    ] satisfies TipCard[],
  },
  costs: {
    heading: "APK cost bands (orientation)",
    intro:
      "APK inspection prices are set by stations, not as a single national sticker price. Treat euro figures here as orientation bands for budgeting — always confirm the live quote when you book.",
    paragraphs: [
      "Many passenger-car inspections land in a modest two-digit euro range at budget or independent stations, with dealer or brand desks often higher. Motorcycles and special vehicles can differ. Optional pre-checks cost extra.",
      "The inspection fee is only part of the story. A fail that needs brakes, tyres, emissions work or lighting repairs can dwarf the APK price. Older used cars deserve a repair buffer in the purchase spreadsheet — not optimism.",
    ],
    rows: [
      {
        category: "Budget / chain APK stations",
        range: "Often ~€50–€70",
        notes: "Orientation only — confirm when booking; promotions change.",
      },
      {
        category: "Independent approved garages",
        range: "Often ~€60–€80",
        notes: "May bundle advice; still verify the APK line item.",
      },
      {
        category: "Brand dealers",
        range: "Often ~€70–€90+",
        notes: "Higher desk prices can come with brand familiarity — not a ranking.",
      },
      {
        category: "Repair buffer (older cars)",
        range: "Plan extra",
        notes: "Fails can cost far more than the inspection — budget separately.",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Ask for the all-in inspection price",
        body: "Clarify whether the quote is APK only or includes extras before you arrive.",
      },
      {
        title: "Compare stations on approval + slot",
        body: "Cheapest is useless if the only free slot is after your expiry date.",
      },
      {
        title: "No fake “best garage” list here",
        body: "ExpatLife does not rank stations — use RDW approval and your own quotes.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car — costs",
        href: `${BUYING_A_CAR_NETHERLANDS_PATH}#costs`,
        status: "live",
        description: "See how APK sits in the full ownership cost stack.",
      },
      {
        label: "Road tax",
        href: ROAD_TAX_NETHERLANDS_PATH,
        status: "live",
        description: "Another recurring ownership cost — separate from APK fees.",
      },
    ] satisfies DrivingLink[],
  },
  afterPurchase: {
    heading: "APK after buying or registering a car",
    intro:
      "APK becomes an ownership habit the moment you keep a registered car. On used purchases, the next due date is also a negotiation and cashflow signal before you pay.",
    paragraphs: [
      "Purchase day should include RDW ownership transfer and insurance start. APK is the roadworthiness calendar: confirm the live due date, store it with the purchase pack, and book early enough that a fail does not strand you.",
      "A car with months of APK left can still need work soon — APK is not a provenance report. A car due within weeks is not automatically a bad buy, but the price should reflect inspection and repair risk.",
    ],
    steps: [
      {
        phase: "Before you buy (used)",
        timing: "Viewing / offer",
        detail: "Ask for the next APK date; verify with RDW when you have the kenteken.",
      },
      {
        phase: "Purchase / transfer day",
        timing: "Day 0",
        detail: "Complete RDW transfer, start insurance, file the confirmation pack with APK notes.",
      },
      {
        phase: "Same week",
        timing: "Days 1–7",
        detail: "Diary the due date and book if the window is short.",
      },
      {
        phase: "Ongoing habit",
        timing: "Each cycle",
        detail: "Treat RDW reminders as backup; keep the next booking in your calendar.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Transfer does not reset APK mythology",
        body: "Ownership change does not invent a new due date — the vehicle’s APK record continues.",
      },
      {
        title: "Insurance still required",
        body: "A fresh APK does not replace motor insurance before you drive.",
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
        description: "Full purchase-day stack: RDW, insurance orientation, APK and ownership costs.",
      },
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "Cover before you drive — parallel to APK timing.",
      },
      {
        label: "Driving licence exchange",
        href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
        status: "live",
        description: "Confirm you may legally drive before ownership stress compounds.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Resident parking after you have a vehicle.",
      },
    ] satisfies DrivingLink[],
  },
  scenarios: {
    heading: "Common expat APK scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "Used car with APK due in under a month",
        approach: "Price in inspection + repair risk; do not wait until the final week to book.",
        firstStep: "Verify the RDW due date and lock an approved-station appointment.",
      },
      {
        situation: "Newer car approaching first APK",
        approach: "Confirm the first-due rule for that fuel/age category on RDW — do not copy a friend’s interval.",
        firstStep: "Look up the kenteken and diary the first window with buffer.",
      },
      {
        situation: "Failed APK on an older daily driver",
        approach: "Treat rejection points as blocking; get a repair plan and re-inspection date.",
        firstStep: "Ask the station which points must be fixed before re-check.",
      },
      {
        situation: "Short assignment / lease car",
        approach: "APK responsibility may sit with the lessor — still confirm who books and who pays.",
        firstStep: "Ask the lease desk or employer who owns the inspection calendar.",
      },
      {
        situation: "Planning a European road trip",
        approach: "Ensure APK is valid for the travel window and carry the report abroad.",
        firstStep: "Check expiry vs travel dates; book early if renewal falls mid-trip.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Driving with an expired APK",
      body: "Public-road driving without a valid APK is not a soft paperwork miss — fines and enforcement risk are real.",
      advice: "Check RDW early and book before the due date with repair buffer.",
    },
    {
      title: "Booking any garage that “does MOTs”",
      body: "Only RDW-approved stations can perform APK.",
      advice: "Confirm approval via RDW tools or clear on-site approval signs.",
    },
    {
      title: "Confusing APK with insurance or road tax",
      body: "Three different ownership obligations — mixing them creates false confidence.",
      advice: "Keep separate file notes and calendar entries for each.",
    },
    {
      title: "Ignoring a near due date when buying used",
      body: "A cheap car that fails next week is not cheap.",
      advice: "Verify the due date and negotiate with repair risk in mind.",
    },
    {
      title: "Waiting until the due week to book",
      body: "Busy stations and repair lead times can push you past expiry.",
      advice: "Book weeks ahead, especially before holidays.",
    },
    {
      title: "Throwing away the inspection report",
      body: "You may need it for disputes, re-checks or foreign travel.",
      advice: "Photograph the report and store it with the purchase pack.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "APK readiness checklist",
    intro: "Use this when you buy, transfer or approach a due date.",
    items: [
      "Confirm the live APK due date on RDW for your kenteken",
      "File a dated screenshot of the due date with purchase documents",
      "Book an RDW-approved station with buffer before expiry",
      "Ask for the all-in inspection price when you book",
      "Plan a repair buffer if the car is older or due soon",
      "Attend the inspection and collect the report",
      "Diary the next due window after a pass",
      "If rejected, clarify re-inspection rules before leaving the desk",
      "Keep insurance and road-tax admin on separate tracks",
      "Carry the report when driving abroad",
    ],
  },
  howTo: {
    heading: "How to handle APK as an expat (orientation)",
    steps: [
      {
        name: "Check the live due date",
        text: "Look up your kenteken on official RDW tools and note the APK expiry under expiration dates / history.",
      },
      {
        name: "Book an RDW-approved station",
        text: "Choose an approved garage or testing station and reserve a slot early enough for possible repairs.",
      },
      {
        name: "Complete the inspection",
        text: "Attend with the vehicle, collect the report, and confirm the new expiry or rejection points.",
      },
      {
        name: "Follow up on pass or fail",
        text: "On a pass, diary the next window. On a fail, repair required points and arrange re-inspection.",
      },
      {
        name: "Keep ownership admin separated",
        text: "Store APK notes beside — not mixed into — insurance and road-tax records after purchase.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to handle Dutch APK (MOT) as an expat",
    description:
      "Orientation steps for expats checking RDW APK due dates, booking an approved station, completing the inspection, and filing the result after buying or keeping a car in the Netherlands.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What is APK in the Netherlands?",
      a: "APK (Algemene Periodieke Keuring) is the mandatory periodic technical inspection for most vehicles. Expats often call it the Dutch MOT. It checks roadworthiness and related requirements at an RDW-approved station.",
    },
    {
      q: "Is APK the same as a UK MOT?",
      a: "It is the Dutch equivalent idea — a periodic roadworthiness inspection — but Dutch rules, intervals and stations are RDW-based. Do not assume UK MOT paperwork transfers as a Dutch APK.",
    },
    {
      q: "How do I check when my APK is due?",
      a: "Use the RDW registration / kenteken check and look under expiration dates and history for the APK date. Verify live rather than relying on memory or seller screenshots alone.",
    },
    {
      q: "Where can I get an APK?",
      a: "Only at RDW-approved garages or testing stations. Look for official approval signs or use RDW’s station search tools.",
    },
    {
      q: "What happens if my car fails APK?",
      a: "You receive a report with rejection points. Repair what is required and arrange re-inspection according to the station’s process. Ask which points block approval before you leave.",
    },
    {
      q: "How much does APK cost?",
      a: "Stations set their own prices. Many passenger-car inspections fall in a modest two-digit euro band, with dealers often higher. Repairs after a fail can cost much more — confirm quotes when booking.",
    },
    {
      q: "Does APK replace car insurance or road tax?",
      a: "No. APK is roadworthiness inspection. Motor insurance and road tax (MRB) are separate obligations. See the Car insurance and Road tax guides for those topics.",
    },
    {
      q: "Is this legal advice?",
      a: "No. ExpatLife provides general orientation only. Follow RDW and your inspection station’s instructions for your vehicle.",
    },
  ],
  relatedGuidesTips: [
    "Purchase and RDW transfer → Buying a car.",
    "Cover choices → Car insurance.",
    "Recurring tax → Road tax.",
    "Drive rights → Driving licence exchange.",
    "OV and bikes → Getting around.",
    "Resident parking → Parking and local permits.",
    "Enforcement awareness → Speed cameras.",
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
      description: "Liability and cover orientation — separate from APK.",
    },
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB — separate recurring ownership tax.",
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
      label: "Speed cameras",
      href: SPEED_CAMERAS_NETHERLANDS_PATH,
      status: "live",
      description: "Speed enforcement orientation for drivers in the Netherlands.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "EV APK still applies — pair with electric vehicles ownership notes.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Providers usually handle inspection — useful when you avoid ownership.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Lease contracts often include maintenance and inspection handling.",
    },
  ] satisfies DrivingLink[],
  drivingHubTips: [
    "APK / MOT is the roadworthiness cornerstone of the Driving cluster.",
    "Buying a car is the purchase and registration sibling.",
    "Car insurance is the cover sibling.",
    "Road tax is the recurring-tax sibling.",
    "Electric vehicles, car sharing and lease cars cover alternative access paths.",
    "Driving licence exchange remains the drive-rights guide.",
  ],
  drivingHubCards: [
    {
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Periodic vehicle inspection orientation — you are here.",
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
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB after you register a car.",
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
      description: "Owning an EV? Pair APK timing with EV ownership notes.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Lease desk often owns inspection calendars — orient first.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Skip ownership inspection duty with membership cars.",
    },
    {
      label: "Speed cameras",
      href: SPEED_CAMERAS_NETHERLANDS_PATH,
      status: "live",
      description: "Driving soon? Learn speed enforcement patterns.",
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
    "Lease path → Lease cars.",
    "Occasional use → Car sharing.",
    "Enforcement awareness → Speed cameras.",
    "Delay ownership → Getting around.",
  ],
  officialSources: [
    {
      label: "RDW — Periodic Technical Inspection (APK)",
      href: "https://www.rdw.nl/en/periodic-technical-inspection/about-the-periodic-technical-inspection",
      description: "Official vehicle authority orientation for APK / PTI rules, due dates and approved stations",
    },
    {
      label: "RDW — Over de APK (Dutch)",
      href: "https://www.rdw.nl/apk/over-de-apk",
      description: "Dutch-language official APK overview and booking guidance",
    },
    {
      label: "Business.gov.nl — Periodic motor vehicle test (APK)",
      href: "https://business.gov.nl/regulations/periodic-motor-vehicle-test-apk/",
      description: "Government business portal orientation on APK requirements",
    },
    {
      label: "Government.nl — transport topics",
      href: "https://www.government.nl/",
      description: "Dutch government portal for living and transport orientation",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Know what APK is.",
        "Check the RDW due date.",
        "Book an approved station.",
        "Diary pass or repair follow-up.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "What APK is.",
        "When it is due.",
        "How to book.",
        "Pass / fail.",
        "Cost bands.",
        "After purchase.",
      ],
    },
    what: {
      title: "From the visual — definition cues",
      items: [
        "APK = Dutch MOT / PTI.",
        "Roadworthiness, not insurance.",
        "Separate from road tax.",
        "Verify live on RDW.",
      ],
    },
    whenDue: {
      title: "From the visual — timing cues",
      items: [
        "Intervals vary by vehicle.",
        "Kenteken check is source of truth.",
        "Reminders are backup.",
        "Book with buffer.",
      ],
    },
    book: {
      title: "From the visual — booking cues",
      items: [
        "RDW-approved only.",
        "Book early in busy months.",
        "Confirm price when booking.",
        "Bring the car to the slot.",
      ],
    },
    passFail: {
      title: "From the visual — result cues",
      items: [
        "Collect the report.",
        "Rejection blocks approval.",
        "Advisory ≠ optional forever.",
        "Re-inspect after repairs.",
      ],
    },
    costs: {
      title: "From the visual — cost cues",
      items: [
        "Fees vary by station.",
        "Orientation bands only.",
        "Repairs can dwarf the fee.",
        "No fake garage rankings.",
      ],
    },
    afterPurchase: {
      title: "From the visual — ownership cues",
      items: [
        "Check due date before buying used.",
        "Diary after RDW transfer.",
        "Insurance still required.",
        "APK ≠ road tax.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "Near due date used car.",
        "First APK on a newer car.",
        "Failed inspection path.",
        "Lease vs own responsibility.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "Expired APK driving.",
        "Non-approved stations.",
        "Mixing ownership topics.",
        "Last-week booking.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "RDW due date saved.",
        "Approved station booked.",
        "Repair buffer planned.",
        "Report filed.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general orientation for newcomers. APK rules, fees and station processes change. Always verify your vehicle’s due date and inspection requirements with RDW and the approved station you book. This page is not legal advice.",
} as const;

export type MotApkNetherlandsPage = typeof motApkNetherlandsPage;

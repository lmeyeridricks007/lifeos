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
const VISUAL_PREFIX = "speed-cameras-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const speedCamerasNetherlandsPage = {
  slug: "speed-cameras-netherlands",
  path: SPEED_CAMERAS_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(SPEED_CAMERAS_NETHERLANDS_PATH) ?? "2026-09-01",
  seo: {
    title: "Speed Cameras in the Netherlands | Complete Guide for Expats",
    description:
      "How Dutch speed cameras, flitsers and trajectcontrole work for expats: enforcement types, what to expect on the road, how fines arrive via CJIB, and high-level payment and objection orientation — not legal advice.",
    keywords: [
      "speed cameras Netherlands",
      "flitsers Netherlands",
      "trajectcontrole Netherlands",
      "average speed camera Netherlands",
      "Dutch speed fines",
      "CJIB fine Netherlands",
      "speeding ticket Netherlands expats",
      "speed enforcement Netherlands",
      "how Dutch fines work",
      "pay traffic fine Netherlands",
      "object to fine Netherlands",
      "speed cameras for expats",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Driving",
    pageTitle: "Speed Cameras in the Netherlands",
    subtitle:
      "How Dutch speed enforcement works for expats: fixed cameras, mobile checks, trajectcontrole (average speed), how fines usually arrive, and calm high-level steps for payment or objection — orientation only, not legal advice.",
    primaryCta: { label: "How enforcement works", href: "#enforcement" },
    secondaryCta: { label: "Fine checklist", href: "#checklist" },
    chips: ["Flitsers", "Trajectcontrole", "How fines arrive", "Pay / object", "Driver habits"],
    disclaimer:
      "General orientation only — not legal advice and not a substitute for CJIB, police or court instructions. Fine amounts, deadlines, camera locations and objection rules change. Verify every notice against the official letter and trusted government sources before you pay, object or ignore anything.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch motorway approach scene: multicultural expat driver glancing at clear speed-limit signs beside a modern gantry with blurred camera housing, soft daylight canal-belt landscape, reassuring mobility-admin mood without readable official logos.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what", label: "What they are" },
    { href: "#enforcement", label: "Enforcement" },
    { href: "#trajectcontrole", label: "Trajectcontrole" },
    { href: "#fines", label: "How fines arrive" },
    { href: "#payment", label: "Pay / object" },
    { href: "#practical", label: "Practical tips" },
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
      "Premium orientation board titled Speed Enforcement After You Drive — four building blocks: know camera types, respect limits and trajectcontrole, expect a postal fine, pay or object via official channels — Fine File Checklist rail on the right, Dutch canal skyline and ExpatLife brand footer.",
      "Four habits cover most speed-camera questions: types, limits, fine arrival, and official follow-up."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch speed cameras — types, enforcement, trajectcontrole, how fines arrive, pay/object, practical habits — Dutch motorway band and ExpatLife brand footer.",
      "Six building blocks explain almost every speed-enforcement question for newcomers."
    ),
    what: visual(
      "what",
      "Premium explain board — fixed flitsers, mobile police checks, section control / trajectcontrole, red-light hybrids — calm Dutch roadside desk scene with canal light, General information only rail.",
      "Dutch speed enforcement mixes fixed cameras, mobile checks and average-speed corridors — not one gadget."
    ),
    enforcement: visual(
      "enforcement",
      "Premium enforcement flow — posted limit, measurement, threshold orientation, plate read, registered-keeper notice — Dutch highway consultation desk with map props and ExpatLife brand footer.",
      "Enforcement is measurement plus admin: the notice usually follows the registered keeper, not a roadside chat."
    ),
    trajectcontrole: visual(
      "trajectcontrole",
      "Premium corridor timeline — entry gantry, exit gantry, average speed over the stretch, steady pace beats braking spikes — Dutch motorway map with time markers and General information only rail.",
      "Trajectcontrole averages your speed between entry and exit — last-second braking does not “fix” the stretch."
    ),
    fines: visual(
      "fines",
      "Premium mail-and-portal journey — camera capture, processing, CJIB letter to registered address, payment reference, deadline — Dutch kitchen table with neutral envelope props and ExpatLife brand footer.",
      "Most speed fines arrive by post via CJIB after processing — keep your RDW address current."
    ),
    payment: visual(
      "payment",
      "Premium decision board — read the letter, verify details, pay via official channel, or object within the stated window — calm desk scene with checklist rail and General information only note.",
      "Pay or object only through the channels on the official notice — never via random social DMs."
    ),
    practical: visual(
      "practical",
      "Premium driver-habits board — watch signed limits, expect 100/130 patterns, stay steady in corridors, separate parking fines — Dutch dashboard scene with soft daylight and ExpatLife brand footer.",
      "Calm habits beat radar folklore: signed limits, steady corridor pace, current address."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — rental car fine, leased company car, just moved address, foreign plate trip — first-step arrows and General information only rail.",
      "Match your ownership or rental situation to a calm first admin step."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — ignoring post, paying fake links, braking only at flitsers, confusing parking tickets, outdated address — Fix notes beside each card.",
      "Most friction is address, scams and last-second braking myths — not finding a camera map."
    ),
    checklist: visual(
      "checklist",
      "Premium speed-fine checklist clipboard — letter verified, deadline diaried, official payment or objection path, address checked, driving peers linked — Dutch kitchen table with canal light.",
      "Use this checklist so a notice stays intentional instead of stressful."
    ),
  },
  snapshotSignals: [
    { label: "Dutch labels", value: "Flitsers / trajectcontrole", note: "Speed enforcement family" },
    { label: "Fine admin", value: "Often CJIB", note: "Postal notice pattern" },
    { label: "Who is billed", value: "Registered keeper", note: "Check RDW address" },
    { label: "Action", value: "Read → pay or object", note: "Official channels only" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "The Netherlands enforces speed with fixed cameras (often called flitsers), mobile police checks, and trajectcontrole — average-speed (section) control between gantries. Expats searching “speed cameras Netherlands” usually need orientation on what those systems do, how a fine typically arrives, and what calm next steps look like — not a full road-rules encyclopedia.",
    "Getting around covers multimodal mobility. Driving licence exchange covers whether you may drive. Buying a car, insurance, road tax and MOT / APK cover ownership. This page stays on speed-enforcement orientation: camera types, enforcement patterns, how notices arrive, and high-level payment or objection habits.",
  ],
  introHighlights: [
    "Signed limits and corridor averages matter more than informal “everyone does 10 over” folklore.",
    "Many fines are processed after the fact and sent to the registered keeper’s address — not handed over roadside.",
    "Pay or object only through the official channels printed on the notice (often CJIB).",
    "Do not treat this page as legal advice — verify every deadline and procedure on the letter and trusted government sources.",
  ],
  orientationFlowSteps: [
    "Know the main enforcement types: fixed cameras, mobile checks, trajectcontrole.",
    "Drive to signed limits and keep a steady pace in average-speed corridors.",
    "If a notice arrives, read it carefully and diary the payment or objection deadline.",
    "Use only official payment or objection channels — then keep the confirmation with your driving file.",
  ],
  fineFileChecklist: [
    "Original fine letter / digital notice",
    "Payment reference and deadline",
    "Screenshot of official portal confirmation (if paid online)",
    "Objection submission confirmation (if you object)",
    "Current RDW / gemeente address on file",
    "Rental or lease desk contact (if the car is not yours)",
  ],
  introScenarios: [
    {
      situation: "Just got a letter mentioning CJIB and a speed fine",
      approach: "Treat it as formal admin — verify plate, date, location and deadline before you pay or object.",
      firstStep: "Open the how-fines-arrive and pay/object sections, then follow only the channels on the letter.",
    },
    {
      situation: "Driving a rental or company lease car",
      approach: "The registered keeper may receive the notice first — ask the rental or lease desk how they pass fines on.",
      firstStep: "Save the rental agreement and ask who handles traffic fines for that plate.",
    },
    {
      situation: "New to Dutch motorways and trajectcontrole signs",
      approach: "Average-speed corridors measure the stretch, not a single flash moment — steady legal pace wins.",
      firstStep: "Read the trajectcontrole section before your next long motorway drive.",
    },
  ] satisfies ScenarioRow[],
  snapshotTips: [
    "Speed cameras are enforcement orientation — not a substitute for the full traffic code.",
    "Parking tickets are a different track — see Parking and local permits.",
    "Licence validity lives on Driving licence exchange.",
    "Ownership stack (buy, insure, tax, APK) sits on sibling Driving guides.",
  ],
  quickAnswer: {
    heading: "Speed cameras in one minute",
    summary:
      "Dutch roads use fixed speed cameras, mobile police enforcement and trajectcontrole (average speed between entry and exit points). Exceeding the signed limit can produce a processed fine that usually arrives by post to the registered keeper — often via CJIB. Read the letter, verify details, then pay or object through official channels within the stated window.",
    bullets: [
      "Fixed flitsers, mobile checks and trajectcontrole are the common patterns expats meet.",
      "Trajectcontrole averages speed over a corridor — sudden braking at the end does not erase earlier speeding.",
      "Fines often arrive later by post; keep your registration address current.",
      "Never pay via unofficial DMs or lookalike websites — use the notice’s official instructions.",
    ],
    note: "Getting around, parking, licence exchange and ownership guides are siblings — use them for mobility and car admin, not as substitutes for CJIB or police procedures.",
  },
  snapshotCards: [
    {
      title: "What they are",
      body: "Fixed cameras, mobile checks and section control — Dutch speed enforcement family.",
    },
    {
      title: "How enforcement works",
      body: "Signed limit → measurement → processing → notice to the registered keeper.",
    },
    {
      title: "Trajectcontrole",
      body: "Average speed between gantries — pace the whole stretch, not the exit flash.",
    },
    {
      title: "How fines arrive",
      body: "Usually postal admin after the fact — often CJIB with a payment reference.",
    },
    {
      title: "Pay / object",
      body: "High-level: verify, diary the deadline, use only official channels.",
    },
    {
      title: "Practical habits",
      body: "Watch signs, stay steady in corridors, keep address and rental contacts ready.",
    },
  ] satisfies TipCard[],
  what: {
    heading: "What Dutch speed cameras are",
    intro:
      "“Speed cameras Netherlands” covers several enforcement tools. Locals often say flitsers for fixed flash cameras. Trajectcontrole (also called section control or average-speed control) measures speed between two points. Police also run mobile checks with marked or unmarked vehicles and portable equipment.",
    paragraphs: [
      "Some installations combine speed and red-light enforcement at intersections. Camera housings and gantries are visible on many motorways and urban corridors — but presence of a box does not always mean a live flash at that moment, and absence of a box does not mean you are unenforced.",
      "This page is not a live camera map and does not rank “safe” speeding margins. Signed limits and official notices are the source of truth. ExpatLife explains the system so you can drive calmly and handle admin if a fine arrives.",
    ],
    rows: [
      {
        topic: "Fixed cameras (flitsers)",
        whatToCheck: "Posted limit at that location and whether the approach is a known corridor.",
        tip: "Watch signs first — folklore about “always 10 over” is not a plan.",
      },
      {
        topic: "Mobile police checks",
        whatToCheck: "That enforcement can appear without a permanent gantry.",
        tip: "Drive the signed limit even on familiar quiet roads.",
      },
      {
        topic: "Trajectcontrole",
        whatToCheck: "Entry and exit points and that the average over the stretch matters.",
        tip: "A steady legal pace beats last-second braking.",
      },
      {
        topic: "Parking / local tickets",
        whatToCheck: "That parking enforcement is a different admin track.",
        tip: "See Parking and local permits — do not mix files.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "English labels vary",
        body: "Speed camera, flitser, average-speed camera and section control often point at related Dutch systems.",
      },
      {
        title: "Not a full road-rules guide",
        body: "Priorities, roundabouts and alcohol rules belong elsewhere — this page stays on speed enforcement orientation.",
      },
      {
        title: "No invented thresholds here",
        body: "ExpatLife does not publish unofficial “tolerance” tables as advice. Follow signed limits and official communications.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "OV, bikes and multimodal options when driving feels heavy.",
      },
      {
        label: "Driving licence exchange",
        href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
        status: "live",
        description: "Confirm you may legally drive before enforcement stress compounds.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Parking tickets and permits — separate from speed fines.",
      },
    ] satisfies DrivingLink[],
  },
  enforcement: {
    heading: "How speed enforcement usually works",
    intro:
      "In simple terms: a measurement is taken against the signed limit, the system or officer records the vehicle, and admin processing can produce a fine notice for the registered keeper. Many camera cases are not a roadside conversation — the letter arrives later.",
    paragraphs: [
      "Registered-keeper liability is the pattern expats need to understand. If the plate is yours, keep your RDW and municipality address current so notices reach you. If you drive a rental, lease or company car, the keeper may be the rental firm or employer — they often recharge the driver under contract.",
      "Fine amounts and categories depend on how much you exceeded the limit, where it happened and current official tariffs. ExpatLife does not invent euro tables that pretend to be live law. Use the amount and deadline printed on your notice.",
    ],
    steps: [
      {
        phase: "Signed limit",
        timing: "On the road",
        detail: "Watch gantries, roadside signs and temporary works limits — limits change by road and time of day on some stretches.",
      },
      {
        phase: "Measurement",
        timing: "Moment or corridor",
        detail: "Fixed flash, mobile check or average over a trajectcontrole section.",
      },
      {
        phase: "Processing",
        timing: "Days to weeks (orientation)",
        detail: "Admin systems prepare a notice — timing varies; do not assume “no flash means no fine”.",
      },
      {
        phase: "Notice",
        timing: "After processing",
        detail: "Letter or digital notice to the registered keeper with amount, reference and deadline.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Address is part of driving",
        body: "A missed letter can escalate. Update RDW / gemeente details when you move.",
      },
      {
        title: "Company and rental cars",
        body: "Ask early who receives fines and how recharge works — before a holiday hire.",
      },
      {
        title: "Temporary limits count",
        body: "Roadworks and variable-message signs are enforceable — do not keep the “usual” speed.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Ownership and RDW transfer — the plate that receives notices.",
      },
      {
        label: "Municipality services",
        href: MUNICIPALITY_PATH,
        status: "live",
        description: "Address and registration context when you move.",
      },
    ] satisfies DrivingLink[],
  },
  trajectcontrole: {
    heading: "Trajectcontrole (average speed) explained",
    intro:
      "Trajectcontrole measures how long you take between an entry point and an exit point, then calculates average speed over that stretch. It is designed to reward a steady legal pace — not last-second braking in front of a single camera.",
    paragraphs: [
      "You will often see gantries or signs marking the start and end of a controlled section on motorways and busy corridors. If your average over the section is above the enforced limit, a fine can follow even if you never saw a flash at the exit.",
      "Common expat mistakes: speeding early then braking hard near the end; assuming rain “turns cameras off”; treating corridor limits like optional guidelines. Drive the signed corridor limit for the whole stretch.",
    ],
    steps: [
      {
        phase: "Enter the section",
        timing: "Start gantry / signs",
        detail: "Note the posted limit for the controlled stretch and settle to a steady pace.",
      },
      {
        phase: "Drive the corridor",
        timing: "Whole stretch",
        detail: "Average speed is what matters — spikes in the middle still raise the average.",
      },
      {
        phase: "Exit the section",
        timing: "End gantry / signs",
        detail: "Do not rely on a dramatic brake at the end to “fix” earlier speeding.",
      },
      {
        phase: "Afterwards",
        timing: "If a notice arrives",
        detail: "Read location and time carefully — corridor fines still need the same official follow-up.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Steady beats theatrical",
        body: "A calm cruise at the signed limit is simpler than gaming gantries.",
      },
      {
        title: "Works and variable limits",
        body: "Some corridors change limits — read the signs for that day and time.",
      },
      {
        title: "Not every gantry is trajectcontrole",
        body: "Learn the signing for section control rather than assuming every camera is average-speed.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Long trips by train can skip corridor stress entirely.",
      },
      {
        label: "MOT / APK",
        href: MOT_APK_NETHERLANDS_PATH,
        status: "live",
        description: "Roadworthiness inspection — separate ownership habit from speed enforcement.",
      },
    ] satisfies DrivingLink[],
  },
  fines: {
    heading: "How speed fines usually arrive",
    intro:
      "Many camera-based speed fines are processed after the event. The registered keeper typically receives a letter with the alleged offence details, amount, payment reference and deadline. In the Netherlands, CJIB (Centraal Justitieel Incassobureau) is a common collection and payment channel for traffic fines.",
    paragraphs: [
      "Expect processing delay. A quiet week after a trip does not prove you were not recorded. When mail arrives, check the plate, date, time, location and amount against your memory and any rental paperwork.",
      "Digital options may exist depending on the notice — still start from the official letter or trusted government portals linked from it. Lookalike “pay your Dutch fine” websites and WhatsApp demands are a known scam pattern.",
    ],
    rows: [
      {
        topic: "Registered keeper mail",
        whatToCheck: "That your RDW / address data matches where you actually receive post.",
        tip: "Update address when you move — before a holiday hire if possible.",
      },
      {
        topic: "CJIB-style notice",
        whatToCheck: "Payment reference, amount, deadline and official payment instructions.",
        tip: "Diary the deadline the same day the letter arrives.",
      },
      {
        topic: "Rental / lease recharge",
        whatToCheck: "Contract clauses and the desk’s admin fee for passing on fines.",
        tip: "Ask before you collect the keys, not after the bill.",
      },
      {
        topic: "Foreign plates / visitors",
        whatToCheck: "That cross-border collection can still follow visitor plates.",
        tip: "Do not assume “rental abroad = unenforceable” — verify with the hire desk.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Read before you rage-pay",
        body: "Confirm it is your plate and trip. Mistakes happen — still use official channels to query.",
      },
      {
        title: "Keep the envelope",
        body: "Store the letter and any portal confirmation with your driving file.",
      },
      {
        title: "Escalation risk",
        body: "Ignoring deadlines can increase cost and stress — orientation only; follow the letter.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "Insurance is about cover — not a substitute for paying traffic fines.",
      },
      {
        label: "Road tax",
        href: ROAD_TAX_NETHERLANDS_PATH,
        status: "live",
        description: "Another registered-keeper admin track — keep files separate.",
      },
    ] satisfies DrivingLink[],
  },
  payment: {
    heading: "Paying or objecting (high-level orientation)",
    intro:
      "When a notice looks correct, most people pay through the official channel on the letter before the deadline. If you believe the fine is wrong, Dutch procedures usually offer an objection or similar challenge path with a strict window — follow the instructions on that specific notice.",
    paragraphs: [
      "ExpatLife does not coach case strategy, draft objections or promise outcomes. We orient you to: verify details, note the deadline, use only official portals or payment references, and keep proof. Language support and legal help may be needed for complex disputes — seek qualified advice if stakes are high.",
      "Paying is not always the same as admitting a story you disagree with in every legal sense — procedures differ. Read the letter’s own wording. Soft affiliate tools (banking apps, accountants) do not replace CJIB or court channels.",
    ],
    rows: [
      {
        topic: "Verify",
        whatToCheck: "Plate, date, location, amount, your role (owner / renter / driver).",
        tip: "Compare with rental contracts and calendar trips.",
      },
      {
        topic: "Pay",
        whatToCheck: "Official payment reference and trusted portal or bank details on the letter.",
        tip: "Save the confirmation PDF or screenshot.",
      },
      {
        topic: "Object / challenge",
        whatToCheck: "The objection window and required form stated on the notice.",
        tip: "Submit on time; late objections often fail on process alone.",
      },
      {
        topic: "Get help",
        whatToCheck: "Whether you need a lawyer or legal-expenses cover for a serious dispute.",
        tip: "Insurance policies sometimes include legal assistance — check your own policy wording.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Official channels only",
        body: "No social-media payment links, gift cards or crypto “settlements”.",
      },
      {
        title: "Deadline discipline",
        body: "Diary the date immediately — weekends and travel do not pause the letter.",
      },
      {
        title: "Not legal advice",
        body: "This section is orientation. Complex or high-stakes cases need professional help.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Driving licence exchange",
        href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
        status: "live",
        description: "Licence status is separate — still confirm you may drive.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "Different ticket family — do not use speed-fine portals for parking.",
      },
    ] satisfies DrivingLink[],
  },
  practical: {
    heading: "Practical habits for expat drivers",
    intro:
      "Calm driving habits prevent most speed-fine stress. Learn how Dutch limits are signed, expect corridor control on major routes, and keep ownership admin (address, insurance, APK) in parallel so a notice never lands in a vacuum.",
    paragraphs: [
      "Motorway limits can vary by road, time and vehicle class — read signs rather than copying the car ahead. Urban 30 zones and school areas are enforced too. Navigation apps that warn about cameras are optional aids; they do not create a legal right to speed.",
      "If you rarely drive, lean on Getting around for OV and bikes. If you own a car, keep the Driving cluster stack current: licence, insurance, road tax, APK, parking permits — and this enforcement orientation.",
    ],
    steps: [
      {
        phase: "Before you drive",
        timing: "Same day",
        detail: "Confirm licence validity, insurance and that you know the car’s plate and keeper setup (own / rental / lease).",
      },
      {
        phase: "On motorways",
        timing: "During the trip",
        detail: "Watch gantries and temporary limits; settle early into trajectcontrole corridors.",
      },
      {
        phase: "In cities",
        timing: "During the trip",
        detail: "Respect 30 zones and changing signed limits — parking rules are a separate habit.",
      },
      {
        phase: "After a notice",
        timing: "Same day it arrives",
        detail: "Verify, diary the deadline, pay or object via official channels, file the proof.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Apps are helpers, not shields",
        body: "Camera warnings do not legalise speeding — signed limits still win.",
      },
      {
        title: "Separate parking fines",
        body: "Keep speed-fine and parking-ticket folders apart to avoid missed deadlines.",
      },
      {
        title: "Ownership peers",
        body: "APK, insurance and road tax do not pay your speed fine for you — different folders.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "Strengthen OV and bike habits when driving is optional.",
      },
      {
        label: "MOT / APK",
        href: MOT_APK_NETHERLANDS_PATH,
        status: "live",
        description: "Keep the car roadworthy on its own calendar.",
      },
      {
        label: "Car insurance",
        href: CAR_INSURANCE_NETHERLANDS_PATH,
        status: "live",
        description: "Cover orientation before you drive.",
      },
      {
        label: "Buying a car",
        href: BUYING_A_CAR_NETHERLANDS_PATH,
        status: "live",
        description: "Purchase and RDW transfer for owners.",
      },
    ] satisfies DrivingLink[],
  },
  scenarios: {
    heading: "Common expat speed-camera scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "CJIB letter for your own kenteken",
        approach: "Verify details, diary the deadline, pay or object via the official channel on the letter.",
        firstStep: "Photograph the letter and open the pay/object checklist the same day.",
      },
      {
        situation: "Fine on a rental car after a weekend trip",
        approach: "Expect the rental company to receive the notice and recharge you under contract — sometimes with an admin fee.",
        firstStep: "Check the rental agreement and contact the desk with your booking reference.",
      },
      {
        situation: "Company lease car",
        approach: "Employer or lessor may be the registered keeper — ask HR or the lease desk how fines are handled.",
        firstStep: "Request the written fine policy before your next long drive.",
      },
      {
        situation: "You moved house recently",
        approach: "Notices may go to the old address — update RDW / gemeente data and watch both mailboxes if needed.",
        firstStep: "Confirm your registered address today, then diary any known open fines.",
      },
      {
        situation: "Unsure if a corridor was trajectcontrole",
        approach: "If a notice arrives, the location text usually clarifies; for future trips, watch section-control signing.",
        firstStep: "Re-read the trajectcontrole section and drive signed limits on the next motorway run.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Ignoring the letter",
      body: "Deadlines can escalate cost and stress — silence is not a strategy.",
      advice: "Diary the deadline the day mail arrives and choose pay or object deliberately.",
    },
    {
      title: "Paying via fake links or DMs",
      body: "Scammers impersonate fine collection. Random WhatsApp “CJIB” messages are a red flag.",
      advice: "Use only the payment path printed on the official notice or trusted government portals.",
    },
    {
      title: "Braking only at the flitser",
      body: "Trajectcontrole and mobile checks punish average or mid-stretch speeding too.",
      advice: "Drive the signed limit for the whole corridor, not the last 200 metres.",
    },
    {
      title: "Mixing parking tickets with speed fines",
      body: "Different issuers and portals — mixed folders create missed payments.",
      advice: "Keep separate files; use the Parking guide for curb-side tickets.",
    },
    {
      title: "Outdated registered address",
      body: "Keeper notices go where the register says you live.",
      advice: "Update RDW / gemeente details when you move — before holiday rentals if possible.",
    },
    {
      title: "Assuming rental plates are unenforceable",
      body: "Hire companies routinely pass fines (and fees) to the driver named on the contract.",
      advice: "Ask the desk how fines work before you collect the keys.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Speed-fine readiness checklist",
    intro: "Use this when a notice arrives — or before a rental / motorway week.",
    items: [
      "Know whether you drive as owner, renter or lease driver",
      "Confirm your registered address is current",
      "On the road: watch signed limits and trajectcontrole corridors",
      "When mail arrives: verify plate, date, location and amount",
      "Diary the payment or objection deadline the same day",
      "Pay only via official channels on the letter — save confirmation",
      "If objecting: follow the notice’s form and window exactly",
      "Tell the rental / lease desk promptly if their plate is involved",
      "File the letter separately from parking tickets and APK papers",
      "Re-check licence, insurance and APK on their own calendars",
    ],
  },
  howTo: {
    heading: "How to handle a Dutch speed fine as an expat (orientation)",
    steps: [
      {
        name: "Read the official notice carefully",
        text: "Check vehicle plate, date, time, location, amount, payment reference and deadline. Confirm it matches your trip or rental period.",
      },
      {
        name: "Decide pay or object",
        text: "If details look correct, prepare to pay via the official channel. If something looks wrong, use the objection path and window stated on that notice.",
      },
      {
        name: "Use only official channels",
        text: "Follow the letter’s payment or objection instructions. Avoid unofficial websites, DMs or payment requests that did not come with the notice.",
      },
      {
        name: "Keep proof and update contacts",
        text: "Save confirmations. If you rent or lease, notify the desk as required. Update your registered address if you have moved.",
      },
      {
        name: "Separate driving admin",
        text: "Keep speed-fine files apart from parking tickets, insurance, road tax and APK — then return to calm signed-limit habits.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to handle a Dutch speed camera fine as an expat",
    description:
      "Orientation steps for expats reading a Dutch speed-enforcement notice, verifying details, paying or objecting via official channels, and filing proof.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "What are speed cameras called in the Netherlands?",
      a: "People often say flitsers for fixed flash cameras. Trajectcontrole means average-speed or section control between entry and exit points. Mobile police checks are also common.",
    },
    {
      q: "What is trajectcontrole?",
      a: "Trajectcontrole calculates your average speed over a marked stretch. Speeding early and braking at the end usually does not erase a high average. Drive the signed limit for the whole corridor.",
    },
    {
      q: "How do I get a speeding ticket in the Netherlands?",
      a: "Many camera fines are processed after the event and sent to the registered keeper by post — often via CJIB — with an amount, reference and deadline. Timing varies; absence of a roadside stop does not mean no fine.",
    },
    {
      q: "Who receives the fine if I drive a rental car?",
      a: "Usually the registered keeper (often the rental company) receives the notice first, then recharges the renter under the contract — sometimes with an admin fee. Ask the desk how fines are handled before you drive.",
    },
    {
      q: "How do I pay a Dutch speeding fine?",
      a: "Use the official payment instructions and reference on your notice (commonly CJIB channels). Save the confirmation. Do not pay via unofficial links or messages.",
    },
    {
      q: "Can I object to a speed fine?",
      a: "Notices typically explain if and how you can object, with a strict time window. Follow that letter’s process. ExpatLife does not provide legal advice or draft objections.",
    },
    {
      q: "Is this the same as a parking ticket?",
      a: "No. Parking and local permit enforcement is a different track. See Parking and local permits for curb-side tickets and permits.",
    },
    {
      q: "Is this legal advice?",
      a: "No. ExpatLife provides general orientation only. Follow the official notice and trusted government sources for your case.",
    },
  ],
  relatedGuidesTips: [
    "Multimodal mobility → Getting around.",
    "Drive rights → Driving licence exchange.",
    "Purchase and RDW → Buying a car.",
    "Cover → Car insurance.",
    "Recurring tax → Road tax.",
    "Inspection → MOT / APK.",
    "Curb-side tickets → Parking and local permits.",
  ],
  relatedGuides: [
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Trains, OVpay, bikes and everyday mobility when ownership is optional.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange.",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Purchase paths, RDW registration and the ownership cost stack.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "Liability and cover orientation — separate from fines.",
    },
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB — separate registered-keeper tax.",
    },
    {
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Periodic vehicle inspection — separate from speed enforcement.",
    },
    {
      label: "Parking and local permits",
      href: PARKING_PATH,
      status: "live",
      description: "Resident parking, visitor permits and paid zones — different ticket family.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "EV drivers still face the same speed rules — ownership notes live here.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Shared-car fines often route via the provider — know the membership rules.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Lease and company cars: keeper notices may hit the desk first.",
    },
  ] satisfies DrivingLink[],
  drivingHubTips: [
    "Speed cameras is the enforcement cornerstone of the Driving cluster.",
    "Getting around is the multimodal sibling.",
    "Driving licence exchange remains the drive-rights guide.",
    "Buying a car, insurance, road tax and MOT / APK cover ownership.",
    "Electric vehicles, car sharing and lease cars cover alternative access paths.",
    "Parking stays on the practical-life permit track.",
  ],
  drivingHubCards: [
    {
      label: "Speed cameras",
      href: SPEED_CAMERAS_NETHERLANDS_PATH,
      status: "live",
      description: "Speed enforcement orientation — you are here.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "OV, bikes and multimodal commuting.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange.",
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
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Periodic vehicle inspection orientation.",
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
      description: "Prefer trains and bikes? Strengthen multimodal habits.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Drive occasionally? Membership cars reduce ownership risk.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Company or private lease? Know how fines are handled.",
    },
    {
      label: "Electric vehicles",
      href: ELECTRIC_VEHICLES_NETHERLANDS_PATH,
      status: "live",
      description: "Driving an EV? Same cameras — different ownership stack.",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Still shopping? Build the full purchase and ownership plan.",
    },
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Confirm drive rights before motorway weeks.",
    },
  ] satisfies DrivingLink[],
  exploreNextTips: [
    "Less driving → Getting around.",
    "Occasional use → Car sharing.",
    "Lease desk fines → Lease cars.",
    "Going electric → Electric vehicles.",
    "Still buying → Buying a car.",
    "Licence status → Driving licence exchange.",
  ],
  officialSources: [
    {
      label: "CJIB — traffic fines",
      href: "https://www.cjib.nl/en",
      description: "Central fine collection orientation for many Dutch traffic fines",
    },
    {
      label: "Government.nl — traffic and transport",
      href: "https://www.government.nl/",
      description: "Dutch government portal for living and transport orientation",
    },
    {
      label: "RDW — vehicle registration",
      href: "https://www.rdw.nl/en",
      description: "Vehicle authority orientation for registration and keeper data",
    },
    {
      label: "Police.nl — traffic",
      href: "https://www.politie.nl/en",
      description: "Police orientation for traffic enforcement context",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Know camera types.",
        "Respect limits and corridors.",
        "Expect postal fine admin.",
        "Pay or object officially.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "What cameras are.",
        "How enforcement works.",
        "Trajectcontrole.",
        "How fines arrive.",
        "Pay / object.",
        "Practical habits.",
      ],
    },
    what: {
      title: "From the visual — definition cues",
      items: [
        "Flitsers and mobile checks.",
        "Trajectcontrole corridors.",
        "Not a full road-rules book.",
        "Signed limits win.",
      ],
    },
    enforcement: {
      title: "From the visual — enforcement cues",
      items: [
        "Signed limit first.",
        "Measurement then processing.",
        "Keeper receives the notice.",
        "Address must be current.",
      ],
    },
    trajectcontrole: {
      title: "From the visual — corridor cues",
      items: [
        "Entry and exit points.",
        "Average over the stretch.",
        "Steady pace beats spikes.",
        "End braking is not a fix.",
      ],
    },
    fines: {
      title: "From the visual — notice cues",
      items: [
        "Postal CJIB-style admin.",
        "Verify plate and date.",
        "Diary the deadline.",
        "Watch for scam lookalikes.",
      ],
    },
    payment: {
      title: "From the visual — decision cues",
      items: [
        "Verify before you pay.",
        "Official channels only.",
        "Objection windows are strict.",
        "Keep confirmation proof.",
      ],
    },
    practical: {
      title: "From the visual — habit cues",
      items: [
        "Read motorway signs.",
        "Respect urban 30 zones.",
        "Separate parking tickets.",
        "Keep ownership peers current.",
      ],
    },
    scenarios: {
      title: "From the visual — scenario cues",
      items: [
        "Own-plate CJIB letter.",
        "Rental recharge path.",
        "Lease / employer policy.",
        "Address change risk.",
      ],
    },
    mistakes: {
      title: "From the visual — mistake cues",
      items: [
        "Ignoring deadlines.",
        "Fake payment links.",
        "Flitser-only braking.",
        "Outdated address.",
      ],
    },
    checklist: {
      title: "From the visual — checklist cues",
      items: [
        "Letter verified.",
        "Deadline diaried.",
        "Official pay or object.",
        "Proof filed.",
      ],
    },
  },
  disclosure:
    "ExpatLife provides general orientation for newcomers. Speed limits, enforcement methods, fine amounts and objection rules change. Always verify your notice against official CJIB, police or government instructions. This page is not legal advice.",
} as const;

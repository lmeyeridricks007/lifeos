import { LIVING_GETTING_AROUND_PATH, LIVING_PILLAR_ROOT_PATH } from "@/src/components/living/livingPillarContent";
import {
  MUNICIPALITY_SERVICES_PATH,
  PARKING_AND_LOCAL_PERMITS_NETHERLANDS_PATH,
} from "@/src/components/practical-life/parkingAndLocalPermitsNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH =
  "/netherlands/living/driving-licence-exchange-netherlands/" as const;

export const BUYING_A_CAR_NETHERLANDS_PATH = "/netherlands/living/buying-a-car-netherlands/" as const;

export const ROAD_TAX_NETHERLANDS_PATH = "/netherlands/living/road-tax-netherlands/" as const;

export const CAR_INSURANCE_NETHERLANDS_PATH = "/netherlands/living/car-insurance-netherlands/" as const;

export const MOT_APK_NETHERLANDS_PATH = "/netherlands/living/mot-apk-netherlands/" as const;

export const SPEED_CAMERAS_NETHERLANDS_PATH = "/netherlands/living/speed-cameras-netherlands/" as const;

export const ELECTRIC_VEHICLES_NETHERLANDS_PATH = "/netherlands/living/electric-vehicles-netherlands/" as const;

export const CAR_SHARING_NETHERLANDS_PATH = "/netherlands/living/car-sharing-netherlands/" as const;

export const LEASE_CARS_NETHERLANDS_PATH = "/netherlands/living/lease-cars-netherlands/" as const;

export const GETTING_AROUND_PATH = LIVING_GETTING_AROUND_PATH;
export const PARKING_PATH = PARKING_AND_LOCAL_PERMITS_NETHERLANDS_PATH;
export const MUNICIPALITY_PATH = MUNICIPALITY_SERVICES_PATH;
export const LIVING_HUB_PATH = LIVING_PILLAR_ROOT_PATH;

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
const VISUAL_PREFIX = "driving-licence-exchange-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const drivingLicenceExchangeNetherlandsPage = {
  slug: "driving-licence-exchange-netherlands",
  path: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
  hubPath: LIVING_HUB_PATH,
  parentGuidePath: GETTING_AROUND_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH) ?? "2026-08-26",
  seo: {
    title: "Driving Licence Exchange in the Netherlands | Complete Guide for Expats",
    description:
      "Learn when to exchange a foreign driving licence for a Dutch one, RDW and municipality steps, documents, timelines, EU vs non-EU rules orientation, and what expats should check before driving.",
    keywords: [
      "driving licence exchange Netherlands",
      "exchange foreign driving licence Netherlands",
      "Dutch driving licence RDW",
      "convert driving licence Netherlands",
      "EU driving licence Netherlands",
      "non-EU driving licence Netherlands",
      "rijbewijs exchange expats",
      "foreign licence validity Netherlands",
      "municipality driving licence",
      "driving licence documents Netherlands",
      "expat driving licence Netherlands",
      "exchange rijbewijs",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Living · Driving",
    pageTitle: "Driving Licence Exchange in the Netherlands",
    subtitle:
      "When your foreign licence is enough, when you must exchange it for a Dutch rijbewijs, and how RDW and municipality steps usually fit together for expats.",
    primaryCta: { label: "Check if you must exchange", href: "#validity" },
    secondaryCta: { label: "Documents checklist", href: "#documents" },
    chips: ["Validity rules", "RDW & gemeente", "Documents", "Timelines", "EU vs non-EU"],
    disclaimer:
      "General orientation only — not legal advice and not a substitute for RDW, CBR or municipality instructions. Rules depend on your licence country, residency status and timing. Verify current requirements on official sites before you book or drive.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch municipal desk scene: multicultural expat reviewing a foreign driving licence and Dutch rijbewijs paperwork beside a canal-view window, soft daylight, no logos of governments or banks, reassuring orientation mood.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#validity", label: "Validity" },
    { href: "#process", label: "Process" },
    { href: "#documents", label: "Documents" },
    { href: "#timelines", label: "Timelines" },
    { href: "#origin-rules", label: "EU vs non-EU" },
    { href: "#tests", label: "Tests" },
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
      "Premium orientation board titled Licence Exchange After Arrival — four building blocks: check foreign licence validity window, confirm your origin-country exchange path, gather documents, book municipality or RDW steps — Licence File Checklist rail on the right, Dutch canal skyline and ExpatLife brand footer.",
      "Four habits cover most exchange questions: validity, origin path, documents, and booking the right desk."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of driving licence exchange in the Netherlands — validity window, RDW role, municipality appointment, document pack, EU vs non-EU paths, and test triggers — Dutch city mobility band and ExpatLife brand footer.",
      "Six building blocks explain almost every licence-exchange question for newcomers."
    ),
    validity: visual(
      "validity",
      "Premium validity decision board — still valid to drive with foreign licence vs must start exchange vs stop driving until sorted — timeline markers and a Verify with RDW rail, Dutch desk props.",
      "Validity windows differ by origin country and residency timing — confirm before you assume you can keep driving."
    ),
    process: visual(
      "process",
      "Premium process map — gemeente appointment, RDW exchange checks, photo and signature capture, waiting for Dutch rijbewijs delivery — calm municipal counter scene with canal houses outside.",
      "Municipality desks and RDW checks usually share the journey; your city site says how to book."
    ),
    documents: visual(
      "documents",
      "Premium document desk scene — foreign licence, passport or ID, BSN/BRP proof, residence evidence, translations or declarations when needed, and a photo checklist — Document Pack rail.",
      "Bring the full pack once; missing papers are the most common appointment delay."
    ),
    timelines: visual(
      "timelines",
      "Premium calendar timeline — first weeks after registration, exchange booking window, processing wait, and first Dutch rijbewijs arrival — General information only rail.",
      "Plan buffer weeks around appointments and processing — never leave exchange to the last driving day."
    ),
    originRules: visual(
      "origin-rules",
      "Premium comparison bridge — EU/EEA/Swiss-style paths versus other countries, with notes on when exchange is simpler and when theory or practical tests may apply — Dutch map and treaty-style bridge motif.",
      "Origin country changes the path more than your job title does — start with RDW country lists."
    ),
    tests: visual(
      "tests",
      "Premium CBR orientation board — when theory or practical tests may be required, medical checks when relevant, and when exchange can proceed without a full new exam — no fake pass rates.",
      "Not every exchange needs a full driving exam — confirm your country path on official pages."
    ),
    costs: visual(
      "costs",
      "Premium cost stack — municipality fees, photo/admin costs, possible translation or declaration fees, optional test fees, plus a mobility buffer while you wait — euro bands as planning orientation only.",
      "Budget for fees and a short mobility buffer — ranges are orientation, not quotes."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards — EU licence after BRP registration, US/UK/other non-EU licence, company car start date, and bike-first household delaying a car purchase — first-step arrows.",
      "Match your situation to a first practical step instead of copying a colleague’s timeline."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board — assuming foreign licence lasts forever, missing the exchange deadline, incomplete documents, ignoring origin-country rules, buying a car before licence status is clear — Fix notes beside each card.",
      "Most friction comes from timing and paperwork — not from learning Dutch road signs overnight."
    ),
    checklist: visual(
      "checklist",
      "Premium licence-exchange checklist clipboard — confirm validity window, check RDW country path, gather documents, book gemeente step, plan mobility backup, save confirmation numbers — Dutch kitchen table with canal light.",
      "Use this checklist in your first months so licence status stays intentional, not improvised."
    ),
  },
  snapshotSignals: [
    { label: "Validity", value: "Check the window", note: "Before you keep driving" },
    { label: "Path", value: "RDW + gemeente", note: "Origin country decides" },
    { label: "Papers", value: "Full pack once", note: "Avoid rebooking" },
    { label: "Backup", value: "OV / share / bike", note: "While you wait" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Exchanging a foreign driving licence for a Dutch rijbewijs is an admin journey — not the same topic as buying a car or learning the OV network. This page orients you on validity windows, RDW and municipality roles, documents, timelines and when tests may apply.",
    "Getting around covers bikes, trains and OVpay. Parking and local permits covers resident parking once you have a car. Buying a car is the cluster sibling for purchase, registration and ownership. Municipality services covers broader gemeente admin.",
  ],
  introHighlights: [
    "Foreign licence validity is time- and country-dependent — confirm before you assume.",
    "RDW sets many exchange rules; municipalities often handle the appointment and photo.",
    "EU/EEA paths can differ sharply from non-EU paths — start with your licence country.",
    "Do not treat this page as permission to drive; verify official instructions for your case.",
  ],
  orientationFlowSteps: [
    "Confirm whether your foreign licence is still valid to drive after registration.",
    "Look up your licence country on official RDW exchange guidance.",
    "Gather documents (ID, residence proof, licence, translations if required).",
    "Book the municipality / exchange step and plan OV or car-share backup while you wait.",
  ],
  licenceFileChecklist: [
    "Foreign driving licence (valid, physical card when required)",
    "Passport or national ID used for Dutch registration",
    "BSN / BRP registration proof or DigiD-ready identity",
    "Residence / immigration evidence if your path asks for it",
    "Official translation or declaration if RDW/gemeente requires one",
    "Appointment confirmation + fee payment method",
  ],
  introScenarios: [
    {
      situation: "I just registered at the municipality and still have my home-country licence",
      approach: "Start with the validity window for your origin country — exchange timing often runs from residency/registration milestones.",
      firstStep: "Check RDW guidance for your country, then diarise the exchange deadline.",
    },
    {
      situation: "I am EU/EEA and wonder if I need a Dutch card at all",
      approach: "EU-style paths are often simpler, but Dutch-card needs still depend on residency and validity rules — do not invent exemptions.",
      firstStep: "Confirm EU/EEA exchange and recognition notes on official pages for your exact licence.",
    },
    {
      situation: "I want a car next month for work",
      approach: "Licence status comes before purchase logistics — Buying a car covers ownership; this page covers whether you may legally drive on your current licence.",
      firstStep: "Confirm you can drive now; only then progress purchase and parking setup.",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "Do I need to exchange my foreign driving licence in the Netherlands?",
    summary:
      "Often yes within a validity window after you become a Dutch resident — but the exact timing and process depend on the country that issued your licence. Some licences can be exchanged with municipality and RDW steps; others may require additional tests. Always verify current RDW and gemeente instructions for your case.",
    bullets: [
      "Check how long your foreign licence remains valid to drive after registration.",
      "Look up whether your country is on an exchange list and what documents are required.",
      "Book the municipality step early if exchange is required — processing takes time.",
      "Use OV, bike or car-sharing as a backup while paperwork completes.",
      "Buying a car and Getting around are separate guides — link out, do not mix topics here.",
    ],
    note: "This page does not replace RDW, CBR or municipality decisions for your file.",
  },
  snapshotCards: [
    {
      title: "Validity window",
      body: "Foreign licences usually have a limited period of use after you live here — confirm the countdown for your origin country.",
    },
    {
      title: "RDW rules",
      body: "RDW guidance decides much of the exchange path, including which licences can be swapped.",
    },
    {
      title: "Municipality desk",
      body: "Many residents book a gemeente appointment for photo, signature and application handling.",
    },
    {
      title: "Document pack",
      body: "Licence, ID, residence proof and any required translation or declaration — complete packs prevent rebooking.",
    },
    {
      title: "EU vs non-EU",
      body: "Origin country changes the path more than your employer does — start with country-specific official notes.",
    },
    {
      title: "Tests when needed",
      body: "Some paths need theory, practical or medical checks; others exchange without a full new exam.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Getting around covers OV and bikes; this page covers licence exchange only.",
    "Buying a car is the purchase sibling — keep ownership separate from licence status.",
    "Parking permits assume you already have a car and local address rules.",
  ],
  validity: {
    heading: "When can you keep driving — and when must you exchange?",
    intro:
      "The core expat question is not “is my plastic card pretty?” — it is whether Dutch rules still recognise your foreign licence for driving, and when exchange becomes mandatory.",
    paragraphs: [
      "After you register as a resident, many foreign licences remain usable only for a limited period. That period and the exchange options depend heavily on the issuing country.",
      "If your validity window ends and you have not completed a required exchange, you should assume you must not keep driving on that foreign card. Plan the appointment earlier than the last legal day.",
      "Short visits and tourism rules differ from resident exchange rules. This guide focuses on people who live here and need a durable Dutch driving position.",
    ],
    rows: [
      {
        topic: "Still within resident validity window",
        whatToCheck: "Official validity period for your licence country after BRP registration / residency start.",
        tip: "Diary the end date immediately; exchange bookings can take weeks.",
      },
      {
        topic: "Exchange required soon",
        whatToCheck: "Whether your country allows exchange and which desk (gemeente / RDW path) applies.",
        tip: "Start documents before you feel urgency — translations add lag.",
      },
      {
        topic: "Exchange not available / tests needed",
        whatToCheck: "Whether theory, practical or medical steps apply for your origin country.",
        tip: "Do not buy a car on hope; confirm the path first.",
      },
      {
        topic: "Licence expired or wrong category",
        whatToCheck: "Expiry date, vehicle categories (B, BE, etc.) and any restrictions on the foreign card.",
        tip: "Expired foreign cards rarely help — verify renewal rules in the issuing country too.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Resident vs visitor",
        body: "Tourist recognition and resident exchange are different problems. Once you live here, follow resident guidance.",
      },
      {
        title: "Countdown from registration",
        body: "Many clocks effectively start around municipal registration / residency milestones — confirm the official trigger for your case.",
      },
      {
        title: "Stop-the-line moments",
        body: "If your window ends or your path requires tests you have not passed, pause driving until status is clear.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Getting around",
        href: GETTING_AROUND_PATH,
        status: "live",
        description: "OV, bikes and multimodal mobility while licence status is pending.",
      },
      {
        label: "Municipality services",
        href: MUNICIPALITY_PATH,
        status: "live",
        description: "Broader gemeente orientation around appointments and registration.",
      },
    ] satisfies DrivingLink[],
  },
  process: {
    heading: "How the exchange process usually works",
    intro:
      "Think of exchange as a relay: RDW rules define what is possible; your municipality often runs the appointment; you supply a complete file and wait for the Dutch rijbewijs.",
    paragraphs: [
      "Exact booking flows differ by city. Some municipalities use online appointment tools; others combine DigiD steps with desk visits. Always follow your gemeente’s current instructions.",
      "RDW may need to verify that your foreign licence can be exchanged. That check is why country lists and document quality matter.",
      "After approval steps, you typically receive a Dutch driving licence by post or via the process your municipality describes — keep tracking numbers and old-licence surrender rules in one note.",
    ],
    steps: [
      {
        phase: "1 · Orient",
        timing: "Week 1 after you know you will stay",
        detail: "Identify your licence country path on RDW guidance and note any test triggers.",
      },
      {
        phase: "2 · Gather",
        timing: "Before booking",
        detail: "Collect ID, residence proof, foreign licence and any translation/declaration.",
      },
      {
        phase: "3 · Book",
        timing: "As soon as the pack is ready",
        detail: "Schedule the municipality exchange appointment or follow the digital flow your city offers.",
      },
      {
        phase: "4 · Apply",
        timing: "Appointment day",
        detail: "Photo, signature, fee payment and submission — ask what happens to the foreign card.",
      },
      {
        phase: "5 · Wait & drive plan",
        timing: "Processing weeks",
        detail: "Track status, keep mobility backup, and only drive if your current status still allows it.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "RDW",
        body: "Sets exchange eligibility orientation and country-specific conditions many residents must follow.",
      },
      {
        title: "Municipality (gemeente)",
        body: "Often the practical desk for appointments, photos and submitting the exchange request.",
      },
      {
        title: "CBR (when tests apply)",
        body: "Theory/practical exam pathways belong here if your origin country requires them — confirm before booking lessons.",
      },
    ] satisfies TipCard[],
  },
  documents: {
    heading: "Documents checklist for exchange",
    intro:
      "Incomplete files cause most rebookings. Build a single licence folder — digital scans plus originals for the desk.",
    paragraphs: [
      "Requirements vary by origin country and municipality. Treat the list below as an orientation pack, then confirm the exact list on RDW and your gemeente site.",
      "If a sworn translation or certificate is required, start that vendor early. Photo and identity mismatches also delay files.",
    ],
    items: [
      "Valid foreign driving licence (correct categories)",
      "Passport or EU/EEA identity card",
      "Proof you are registered in the BRP / can identify with DigiD as required",
      "Residence document or immigration evidence if your path asks for it",
      "Official translation or declaration when mandated for your language/country",
      "Payment method for municipality / processing fees",
      "Any medical certificate if your path explicitly requires one",
      "Appointment confirmation and previous correspondence",
    ],
    rows: [
      {
        topic: "Identity",
        whatToCheck: "Name spelling matches licence, passport and BRP records.",
        tip: "Fix mismatches before the appointment when possible.",
      },
      {
        topic: "Licence artefact",
        whatToCheck: "Physical card condition, expiry, categories, restrictions.",
        tip: "Bring the original; photos alone are rarely enough at the desk.",
      },
      {
        topic: "Translations",
        whatToCheck: "Whether RDW/gemeente requires a sworn translation or specific declaration.",
        tip: "Order translations only from channels your official checklist accepts.",
      },
      {
        topic: "Residence proof",
        whatToCheck: "What evidence your municipality lists for exchange appointments.",
        tip: "Screenshot confirmations into your licence folder.",
      },
    ] satisfies ComparisonRow[],
    crossLinks: [
      {
        label: "Municipality services",
        href: MUNICIPALITY_PATH,
        status: "live",
        description: "Orientation for gemeente appointments and local admin.",
      },
      {
        label: "Parking and local permits",
        href: PARKING_PATH,
        status: "live",
        description: "After you have a car — resident parking is a separate track.",
      },
    ] satisfies DrivingLink[],
  },
  timelines: {
    heading: "Timelines and planning buffers",
    intro:
      "Exchange is rarely a same-week errand. Build calendar buffers for documents, appointments and processing.",
    paragraphs: [
      "Popular municipalities can have busy appointment calendars. Processing after submission can also take multiple weeks depending on checks.",
      "If your employer expects you to drive on a fixed start date, reverse-plan from that date with spare capacity — do not treat the validity end-date as your booking date.",
    ],
    steps: [
      {
        phase: "Orient + country check",
        timing: "1–3 days",
        detail: "Read RDW notes for your licence country and list required documents.",
      },
      {
        phase: "Collect documents / translations",
        timing: "1–4 weeks",
        detail: "Longer if translations, declarations or medical steps are needed.",
      },
      {
        phase: "Appointment wait",
        timing: "Days to several weeks",
        detail: "Depends on your gemeente capacity — book early in busy cities.",
      },
      {
        phase: "Processing after apply",
        timing: "Often multiple weeks",
        detail: "Track official status; keep a mobility backup until the Dutch card arrives.",
      },
    ] satisfies TimelineStep[],
    cards: [
      {
        title: "Do not use the last legal day",
        body: "Book exchange well before your foreign-licence driving window ends.",
      },
      {
        title: "Employer driving dates",
        body: "Tell HR your licence status early if a company car or field role depends on it.",
      },
      {
        title: "Mobility backup",
        body: "OV, bike and car-sharing bridge gaps better than hopeful last-minute appointments.",
      },
    ] satisfies TipCard[],
  },
  originRules: {
    heading: "EU/EEA paths versus other countries",
    intro:
      "Your issuing country is the biggest fork in the road. Two colleagues at the same company can face completely different exchange journeys.",
    paragraphs: [
      "Licences from EU/EEA countries (and some related arrangements) often follow recognition and exchange patterns that differ from many non-EU licences. Still verify — do not rely on office folklore.",
      "Some non-EU countries appear on exchange lists with document conditions; others require exam pathways. RDW country guidance is the orientation source of truth.",
      "If you hold multiple licences, clarify which one you will exchange and whether categories transfer as you expect.",
    ],
    rows: [
      {
        topic: "EU/EEA-style licence",
        whatToCheck: "Recognition while valid, and whether/when a Dutch card is still needed after residency.",
        tip: "Confirm on official pages — simplicity is common, not guaranteed for every edge case.",
      },
      {
        topic: "Exchange-list non-EU licence",
        whatToCheck: "Document list, possible declarations, and municipality booking rules.",
        tip: "Start translations early if required.",
      },
      {
        topic: "Non-exchange / exam path",
        whatToCheck: "Theory, practical and medical requirements via CBR pathways.",
        tip: "Budget time and lesson costs before promising a drive date at work.",
      },
      {
        topic: "Category upgrades (trailer, motorcycle)",
        whatToCheck: "Whether extra categories exchange cleanly or need separate steps.",
        tip: "Exchange the categories you actually need first.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Country first",
        body: "Search official guidance by the country printed on your licence — not by your passport alone if they differ.",
      },
      {
        title: "No fake “expat exemptions”",
        body: "Employers and relocation agents cannot invent driving rights. Official rules win.",
      },
      {
        title: "Keep screenshots",
        body: "Save the RDW/gemeente pages you relied on with the date — requirements can update.",
      },
    ] satisfies TipCard[],
  },
  tests: {
    heading: "When theory, practical or medical checks appear",
    intro:
      "Not every exchange is a paperwork-only swap. Some origin countries require exam or medical steps before a Dutch rijbewijs is issued.",
    paragraphs: [
      "If tests apply, you are closer to a structured CBR journey than a simple desk exchange. Confirm whether you need theory, practical, both, or a medical assessment.",
      "ExpatLife does not publish pass-rate promises, school rankings or “guaranteed exchange” claims. Use official exam information and licensed instructors when lessons are needed.",
    ],
    rows: [
      {
        topic: "Paperwork-only exchange",
        whatToCheck: "Country is eligible and your documents match the checklist.",
        tip: "Still verify — eligibility can include extra certificates.",
      },
      {
        topic: "Theory required",
        whatToCheck: "CBR theory booking rules and language options.",
        tip: "Study Dutch road-priority norms; they surprise many newcomers.",
      },
      {
        topic: "Practical required",
        whatToCheck: "Lesson planning, exam booking and vehicle category.",
        tip: "Do not schedule a company driving start before a realistic exam buffer.",
      },
      {
        topic: "Medical assessment",
        whatToCheck: "Whether your age, health declaration or licence history triggers checks.",
        tip: "Follow only the official medical pathway listed for your case.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "No rankings here",
        body: "We do not rank driving schools. Choose instructors based on fit, availability and transparent pricing.",
      },
      {
        title: "Separate from car buying",
        body: "Passing tests does not replace RDW vehicle registration when you later buy a car.",
      },
    ] satisfies TipCard[],
  },
  costs: {
    heading: "Cost orientation for licence exchange",
    intro:
      "Fees vary by municipality and by whether translations or exams are required. Use ranges for planning only — confirm live amounts before you pay.",
    paragraphs: [
      "A paperwork-only exchange is usually far cheaper than a full exam path. Translations, medical checks and driving lessons dominate budgets when they apply.",
      "While you wait, factor mobility costs: OV subscriptions, bike maintenance or occasional car-sharing can be cheaper than rushing a car purchase.",
    ],
    rows: [
      {
        category: "Municipality / exchange admin fees",
        range: "Often tens of euros (verify locally)",
        notes: "City fee pages change — check your gemeente before booking.",
      },
      {
        category: "Photos / minor admin extras",
        range: "Small add-on if not included",
        notes: "Some desks include photo capture in the appointment flow.",
      },
      {
        category: "Sworn translation / declarations",
        range: "Wide range — get a written quote",
        notes: "Only needed when your path requires them.",
      },
      {
        category: "Theory / practical exam path",
        range: "Lessons + exam fees can reach hundreds of euros+",
        notes: "Depends on hours needed; no guaranteed package outcome.",
      },
      {
        category: "Mobility buffer while waiting",
        range: "OV / bike / car-share as used",
        notes: "Plan deliberately if your foreign validity window is short.",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "Get fee quotes in writing",
        body: "Screenshot gemeente fee pages and keep translation quotes with dates.",
      },
      {
        title: "Do not under-budget exam paths",
        body: "If tests apply, lesson volume is the real variable — not just the exam ticket.",
      },
      {
        title: "No fake discounts",
        body: "ExpatLife does not invent fee waivers, guaranteed pass offers or official partnerships with RDW.",
      },
    ] satisfies TipCard[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Mobility and insurance orientation while you sort your licence",
    subtitle:
      "Soft CTAs for car-sharing if you need occasional four wheels, and insurance comparison when you later insure a car. This block is not a ranking of driving schools, municipalities or licence agents.",
    boundaryNote:
      "Editorial sections above are separate from this block. Ordering reflects relevance for mobility while licence admin runs — not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-living-driving-licence-exchange-support-providers",
    analyticsPageContext: "driving-licence-exchange-netherlands-recommended-options",
    categoryLinks: [
      { href: GETTING_AROUND_PATH, label: "Getting around" },
      { href: BUYING_A_CAR_NETHERLANDS_PATH, label: "Buying a car" },
      { href: PARKING_PATH, label: "Parking permits" },
    ],
    browseLabel: "More mobility context: ",
  },
  scenarios: {
    heading: "Common expat licence scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "EU licence, newly BRP-registered",
        approach: "Confirm recognition/exchange notes for your exact country and diary any Dutch-card deadline.",
        firstStep: "Read official EU/EEA guidance pages and your gemeente appointment options.",
      },
      {
        situation: "US/UK/other non-EU licence",
        approach: "Country lists decide whether you exchange or face exam steps — folklore is unreliable.",
        firstStep: "Look up your issuing country on RDW exchange guidance today.",
      },
      {
        situation: "Company car starts in six weeks",
        approach: "Reverse-plan documents and appointments; tell HR if status is uncertain.",
        firstStep: "Book the earliest sensible appointment and keep OV backup.",
      },
      {
        situation: "Bike-first, might buy a car later",
        approach: "You can still track the validity window now so a future purchase is not blocked.",
        firstStep: "Note the exchange deadline; read Buying a car when purchase becomes real.",
      },
      {
        situation: "Partner drives, I do not yet",
        approach: "Household mobility can rely on one licence short-term — still protect each adult’s legal status.",
        firstStep: "Confirm each driver’s validity separately; do not share assumptions.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Assuming the foreign card lasts indefinitely",
      body: "Resident rules usually add a countdown after you live here.",
      advice: "Diary the official validity end date as soon as you register.",
    },
    {
      title: "Booking the appointment with half a file",
      body: "Missing translations or ID mismatches burn scarce appointment slots.",
      advice: "Complete the document pack before you reserve the desk time.",
    },
    {
      title: "Copying a colleague’s country path",
      body: "EU and non-EU journeys differ; even two non-EU countries can diverge.",
      advice: "Always check the issuing country on official RDW pages.",
    },
    {
      title: "Buying a car before licence status is clear",
      body: "Ownership costs stack quickly if you cannot legally drive yet.",
      advice: "Confirm driving rights first; then use the Buying a car guide.",
    },
    {
      title: "Ignoring mobility backup",
      body: "Processing delays are common enough to plan for.",
      advice: "Keep OV/bike/car-share options ready across the wait.",
    },
    {
      title: "Treating blogs as law",
      body: "Unofficial threads go stale and miss edge cases.",
      advice: "Prefer RDW, CBR and your municipality — save dated screenshots.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Licence exchange readiness checklist",
    intro: "Use this in your first months after arrival — or whenever a driving start date appears at work.",
    items: [
      "Confirm foreign-licence driving validity window for residents",
      "Look up issuing-country exchange path on official RDW guidance",
      "List documents (ID, residence proof, licence, translations if needed)",
      "Book municipality / exchange appointment with buffer before the deadline",
      "Pay attention to fee pages and keep payment proof",
      "Plan OV, bike or car-share backup during processing",
      "Save confirmation numbers and surrender rules for the old card",
      "Only then progress car purchase / parking permit tracks if needed",
    ],
  },
  howTo: {
    heading: "How to start a Dutch driving licence exchange",
    steps: [
      {
        name: "Check whether you may still drive",
        text: "Find the official validity rules for your foreign licence after becoming a Dutch resident and note the end date.",
      },
      {
        name: "Identify your country exchange path",
        text: "Use RDW guidance for the country that issued your licence to see whether exchange is possible and whether tests apply.",
      },
      {
        name: "Build the document pack",
        text: "Gather ID, residence proof, the foreign licence and any required translation or declaration before booking.",
      },
      {
        name: "Book the municipality step",
        text: "Follow your gemeente’s appointment or digital flow, attend with originals, and confirm fees and next steps.",
      },
      {
        name: "Wait with a mobility plan",
        text: "Track processing, keep OV/bike/car-share backup, and only drive if your current status still allows it.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to exchange a foreign driving licence in the Netherlands",
    description:
      "Orientation steps for expats checking validity, gathering documents and booking municipality and RDW-related exchange steps.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "How long can I drive on a foreign licence in the Netherlands?",
      a: "It depends on the country that issued your licence and your residency situation. Many residents face a limited validity window after registration. Confirm the current period on official RDW guidance for your country — do not rely on workplace hearsay.",
    },
    {
      q: "Do EU driving licences need to be exchanged?",
      a: "EU/EEA licences often follow different recognition patterns than many non-EU licences, but you should still verify whether and when a Dutch rijbewijs is required for your situation. Check official pages for your exact licence.",
    },
    {
      q: "Is exchange handled by RDW or the municipality?",
      a: "Both can matter. RDW sets much of the exchange eligibility orientation; municipalities commonly run appointments, photos and submission steps. Follow the booking flow your gemeente publishes.",
    },
    {
      q: "What documents do I need?",
      a: "Typically your foreign licence, passport or ID, proof of registration/residence as required, and any translation or declaration listed for your country. Confirm the live checklist before your appointment.",
    },
    {
      q: "Will I need a theory or practical test?",
      a: "Sometimes. Some origin countries allow exchange without a full new exam; others require theory, practical or medical steps. Your issuing country path on official guidance is the starting point.",
    },
    {
      q: "Can I buy a car before exchanging my licence?",
      a: "You can explore purchase logistics, but you should not assume you may drive. Confirm licence validity first. Use the Buying a car guide for ownership steps and Parking permits for resident parking later.",
    },
    {
      q: "What if my appointment is after my validity window ends?",
      a: "Plan earlier. If your legal driving window ends, you should assume you must stop driving on that foreign licence until your status is valid again. Use OV, bike or car-sharing meanwhile.",
    },
    {
      q: "Is this legal advice?",
      a: "No. ExpatLife provides general orientation only. Follow RDW, CBR and your municipality for decisions on your file.",
    },
  ],
  relatedGuidesTips: [
    "OV, bikes and multimodal travel → Getting around.",
    "Car purchase sibling → Buying a car.",
    "Recurring ownership tax → Road tax.",
    "Cover choices → Car insurance.",
    "Resident parking after you own a car → Parking and local permits.",
    "Gemeente admin context → Municipality services.",
  ],
  relatedGuides: [
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Trains, OVpay, bikes and everyday mobility — the live sibling for non-car travel.",
    },
    {
      label: "Buying a car in the Netherlands",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Driving cluster sibling — purchase, registration and ownership orientation.",
    },
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB orientation after you become the registered keeper.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "WA, WA+ and cover choices — separate from licence paperwork.",
    },
    {
      label: "MOT / APK",
      href: MOT_APK_NETHERLANDS_PATH,
      status: "live",
      description: "Periodic vehicle inspection — separate from licence exchange.",
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
      description: "Buying and using EVs: charging, tax orientation, range and ownership stack.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Membership models when occasional cars beat full ownership.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Private lease, operational lease and company-car orientation.",
    },
    {
      label: "Parking and local permits",
      href: PARKING_PATH,
      status: "live",
      description: "Resident parking, visitor permits and paid zones once you have a car.",
    },
    {
      label: "Municipality services",
      href: MUNICIPALITY_PATH,
      status: "live",
      description: "Gemeente services, registration context and local admin orientation.",
    },
  ] satisfies DrivingLink[],
  drivingHubTips: [
    "Driving licence exchange is the paperwork cornerstone of the Driving cluster.",
    "Buying a car is the ownership sibling.",
    "Road tax, car insurance and MOT / APK complete the ownership stack.",
    "Electric vehicles, car sharing and lease cars cover alternative access paths.",
    "Getting around remains the wider mobility guide for OV and bikes.",
  ],
  drivingHubCards: [
    {
      label: "Driving licence exchange",
      href: DRIVING_LICENCE_EXCHANGE_NETHERLANDS_PATH,
      status: "live",
      description: "Foreign licence validity and Dutch rijbewijs exchange — you are here.",
    },
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Cluster sibling — buying and owning a car in the Netherlands.",
    },
    {
      label: "Road tax",
      href: ROAD_TAX_NETHERLANDS_PATH,
      status: "live",
      description: "Wegenbelasting / MRB orientation for registered keepers.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "Mandatory WA and optional cover orientation.",
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
  ] satisfies DrivingLink[],
  exploreNextCards: [
    {
      label: "Buying a car",
      href: BUYING_A_CAR_NETHERLANDS_PATH,
      status: "live",
      description: "Licence path clear? Continue to purchase and ownership.",
    },
    {
      label: "Car sharing",
      href: CAR_SHARING_NETHERLANDS_PATH,
      status: "live",
      description: "Need wheels while paperwork completes? Try sharing first.",
    },
    {
      label: "Lease cars",
      href: LEASE_CARS_NETHERLANDS_PATH,
      status: "live",
      description: "Employer or private lease path? Orient before you sign.",
    },
    {
      label: "Car insurance",
      href: CAR_INSURANCE_NETHERLANDS_PATH,
      status: "live",
      description: "Need cover before you drive? Start with insurance orientation.",
    },
    {
      label: "Getting around",
      href: GETTING_AROUND_PATH,
      status: "live",
      description: "Need mobility while you wait? Use OV and bike systems.",
    },
    {
      label: "Parking permits",
      href: PARKING_PATH,
      status: "live",
      description: "Planning a car at home? Learn resident parking early.",
    },
  ] satisfies DrivingLink[],
  exploreNextTips: [
    "Ownership next → Buying a car.",
    "Occasional wheels → Car sharing.",
    "Employer / private lease → Lease cars.",
    "Need cover → Car insurance.",
    "No car yet → Getting around.",
    "Car at the curb → Parking permits.",
  ],
  officialSources: [
    {
      label: "RDW — driving licence exchange orientation",
      href: "https://www.rdw.nl/en/driving-licence",
      description: "Official vehicle authority orientation for driving licences — verify current exchange pages",
    },
    {
      label: "Government.nl — driving licence topics",
      href: "https://www.government.nl/",
      description: "Dutch government portal for living and transport orientation",
    },
    {
      label: "CBR — exams and theory orientation",
      href: "https://www.cbr.nl/en",
      description: "When tests apply, use official exam information",
    },
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Practical official orientation for living in the Netherlands",
    },
    {
      label: "Your municipality website",
      href: "https://www.government.nl/topics/municipalities",
      description: "Appointment booking and local fee pages — check your city site",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Check foreign licence validity window.",
        "Confirm origin-country exchange path.",
        "Gather the document pack.",
        "Book gemeente / RDW steps with a mobility backup.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Validity window.",
        "RDW role.",
        "Municipality appointment.",
        "Document pack.",
        "EU vs non-EU paths.",
        "Test triggers.",
      ],
    },
    validity: {
      title: "From the visual — validity checks",
      items: [
        "Still valid to drive?",
        "Must start exchange?",
        "Stop until sorted?",
        "Verify with RDW for your country.",
      ],
    },
    process: {
      title: "From the visual — process map",
      items: [
        "Gemeente appointment.",
        "RDW exchange checks.",
        "Photo and signature.",
        "Wait for Dutch rijbewijs.",
      ],
    },
    documents: {
      title: "From the visual — document pack",
      items: [
        "Foreign licence + ID.",
        "Residence / BRP proof.",
        "Translations when required.",
        "Fee and appointment confirmation.",
      ],
    },
    timelines: {
      title: "From the visual — timeline buffers",
      items: [
        "Orient early after registration.",
        "Collect documents before booking.",
        "Expect processing weeks.",
        "Keep mobility backup.",
      ],
    },
    originRules: {
      title: "From the visual — origin forks",
      items: [
        "EU/EEA-style paths.",
        "Exchange-list non-EU paths.",
        "Exam pathways when listed.",
        "Save dated official screenshots.",
      ],
    },
    tests: {
      title: "From the visual — test triggers",
      items: [
        "Paperwork-only when eligible.",
        "Theory when required.",
        "Practical when required.",
        "Medical checks when listed.",
      ],
    },
    costs: {
      title: "From the visual — cost stack",
      items: [
        "Municipality fees.",
        "Translation / declaration costs.",
        "Optional exam path costs.",
        "Mobility buffer while waiting.",
      ],
    },
    scenarios: {
      title: "From the visual — first steps",
      items: [
        "Confirm country path today.",
        "Book with document pack ready.",
        "Tell HR if driving dates matter.",
        "Use Buying a car only after status is clear.",
      ],
    },
    mistakes: {
      title: "From the visual — fix patterns",
      items: [
        "Diary the validity end date.",
        "Do not copy another country’s path.",
        "Complete papers before booking.",
        "Plan OV backup.",
      ],
    },
    checklist: {
      title: "From the visual — readiness",
      items: [
        "Validity confirmed.",
        "Country path confirmed.",
        "Documents complete.",
        "Appointment booked with buffer.",
      ],
    },
  },
  disclosure:
    "General information only. Not legal advice and not a substitute for RDW, CBR or municipality instructions. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
};

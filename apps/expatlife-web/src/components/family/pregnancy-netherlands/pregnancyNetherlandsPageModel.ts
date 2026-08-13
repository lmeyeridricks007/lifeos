import { PARENTING_NETHERLANDS_PATH } from "@/src/components/family/parentingNetherlandsPageModel";
import { HEALTHCARE_FOR_CHILDREN_PATH } from "@/src/components/family/healthcareForChildrenNetherlandsPageModel";
import { FAMILY_ACTIVITIES_NETHERLANDS_PATH } from "@/src/components/family/family-activities-netherlands/familyActivitiesNetherlandsPageModel";
import { CHILD_BENEFITS_NETHERLANDS_PATH } from "@/src/components/family/childBenefitsNetherlandsPageModel";
import { GIVING_BIRTH_NETHERLANDS_PATH } from "@/src/components/family/giving-birth-netherlands/givingBirthNetherlandsPageModel";
import {
  EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
  GP_NETHERLANDS_PATH,
  HEALTH_INSURANCE_COMPARISON_PATH,
  HEALTH_INSURANCE_PATH,
  HOSPITALS_NETHERLANDS_PATH,
  MATERNITY_CARE_NETHERLANDS_PATH,
} from "@/src/components/health/maternityCareNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const PREGNANCY_NETHERLANDS_PATH = "/netherlands/family/pregnancy-netherlands/" as const;
export const FAMILY_HUB_PATH = PARENTING_NETHERLANDS_PATH;
export const MOVING_WITH_KIDS_PATH = "/netherlands/moving-to-netherlands-with-kids/" as const;
export const MOVING_WITH_FAMILY_PATH = "/netherlands/moving-to-netherlands-with-family/" as const;
export const CHILDCARE_ALLOWANCE_PATH = "/netherlands/taxes/childcare-allowance-netherlands/" as const;

export type PregnancyLink = {
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
export type TimelineStep = { phase: string; title: string; detail: string };
export type CheckpointRow = { trimester: string; focus: string; admin: string; tip: string };
export type PrepareRow = { item: string; why: string; when: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "pregnancy-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const pregnancyNetherlandsPage = {
  slug: "pregnancy-netherlands",
  path: PREGNANCY_NETHERLANDS_PATH,
  hubPath: FAMILY_HUB_PATH,
  parentGuidePath: PARENTING_NETHERLANDS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(PREGNANCY_NETHERLANDS_PATH) ?? "2026-08-20",
  seo: {
    title: "Pregnancy in the Netherlands | Complete Guide for Expats",
    description:
      "Expat pregnancy orientation in the Netherlands: finding a midwife, trimester checkpoints, BSN and registration timing, insurance basics and what to prepare — calm practical guidance, not medical advice.",
    keywords: [
      "pregnancy Netherlands",
      "pregnant in the Netherlands",
      "expat pregnancy Netherlands",
      "find midwife Netherlands",
      "verloskundige pregnancy",
      "trimester Netherlands",
      "pregnancy insurance Netherlands",
      "BSN pregnancy Netherlands",
      "register midwife Netherlands",
      "pregnancy checklist Netherlands",
      "Dutch pregnancy care for expats",
      "antenatal care Netherlands expats",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Family · Pregnancy",
    pageTitle: "Pregnancy in the Netherlands",
    subtitle:
      "Calm prenatal orientation for newcomers — finding a midwife, trimester checkpoints, BSN and registration timing awareness, insurance basics and what to prepare before deeper maternity pathways.",
    primaryCta: { label: "Find a midwife", href: "#midwife" },
    secondaryCta: { label: "Pregnancy checklist", href: "#checklist" },
    chips: ["Find a midwife", "Trimester checkpoints", "BSN timing", "Insurance basics", "What to prepare"],
    disclaimer:
      "General orientation only — not medical advice, not a birth plan, and not a ranking of midwives, hospitals or insurers. For your own pregnancy, speak with your midwife, obstetric team or GP. Call 112 for life-threatening emergencies.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch prenatal consultation — multicultural pregnant expat and partner with a verloskundige at a bright neighbourhood practice desk, pregnancy calendar and notebook on the table, soft canal-street light, welcoming atmosphere, no graphic birth scenes.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#midwife", label: "Find midwife" },
    { href: "#trimesters", label: "Trimesters" },
    { href: "#registration", label: "BSN & registration" },
    { href: "#insurance", label: "Insurance" },
    { href: "#prepare", label: "Prepare" },
    { href: "#differences", label: "Differences" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#family-hub", label: "Family hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Pregnancy Journey for Expats — four building blocks: find a midwife early, know trimester checkpoints, track BSN and registration timing, and check insurance plus prepare documents — Pregnancy File Checklist rail on the right, Dutch canal neighbourhood backdrop, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Four habits cover most prenatal orientation questions: midwife, trimester rhythm, admin timing, and insurance readiness."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of pregnancy in the Netherlands — midwife first door, trimester checkpoints, BSN awareness, insurance basics, prepare list, and maternity pathway pointer — Dutch skyline water band and ExpatLife brand footer with compass and Live. Love. Stay.",
      "Six cards summarise the prenatal journey for newcomers — deeper sections expand each theme."
    ),
    midwife: visual(
      "midwife",
      "Premium find-a-midwife map board — search by postcode, ask about English and capacity, confirm intake documents, save on-call numbers — Dutch neighbourhood practice desk scene with a Midwife File rail, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Contact verloskundige practices early after confirmation — capacity and language matter."
    ),
    trimesters: visual(
      "trimesters",
      "Premium trimester checkpoint timeline — first trimester intake and early checks, second trimester rhythm and planning talks, third trimester birth-place and call-cue orientation — calendar desk scene with a Checkpoint rail, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Trimester checkpoints are orientation themes — your midwife sets the personal schedule."
    ),
    registration: visual(
      "registration",
      "Premium BSN and registration timing calendar — municipality registration awareness, BSN for care and insurance, midwife intake documents, moving mid-pregnancy speed notes — gemeente desk scene with an Admin File rail, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Registration and BSN timing affect insurance and care logistics — start admin early when relocating."
    ),
    insurance: visual(
      "insurance",
      "Premium pregnancy insurance orientation board — basic package maternity awareness, policy year checks, comparison-site pointer, verify-with-insurer labels — calm desk with policy card and pregnancy notes, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Much maternity care sits in the basic package — still verify cover and own contributions for your year."
    ),
    prepare: visual(
      "prepare",
      "Premium what-to-prepare checklist board — ID and insurance, prior pregnancy records, medication list, midwife contacts, partner logistics, kraamzorg awareness pointer — open folder on a canal apartment table, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Prepare documents and contacts early so antenatal visits stay focused on your questions."
    ),
    differences: visual(
      "differences",
      "Premium surprise cards for expats about Dutch pregnancy — midwife-first system, birth-place talk is normal, hospital is not automatic, BSN and insurance matter early, and maternity care depth lives on a sibling guide — ExpatLife brand footer with compass and Live. Love. Stay.",
      "Dutch prenatal culture often differs from obstetrician-first systems — orientation, not judgement."
    ),
    scenarios: visual(
      "scenarios",
      "Premium four-scenario board for expat pregnancy — newly confirmed, relocating mid-pregnancy, English-first newcomers, and dual-system insurance questions — each with a first-move card, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Different starting points need different first calls — midwife capacity and admin timing lead."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistakes board for Netherlands pregnancy — waiting to find a midwife, ignoring BSN timing, skipping insurance checks, treating this as a full maternity encyclopedia, delaying prepare lists — Fix tips on a right-side rail, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Most prenatal friction comes from late midwife contact and incomplete admin — not preference alone."
    ),
    checklist: visual(
      "checklist",
      "Premium pregnancy readiness checklist clipboard — midwife registered, trimester questions listed, BSN and insurance checked, documents pouch ready, maternity and birth-day guides bookmarked — Dutch desk scene, ExpatLife brand footer with compass and Live. Love. Stay.",
      "Use this checklist from confirmation through late pregnancy orientation."
    ),
  },
  snapshotSignals: [
    { label: "First door", value: "Verloskundige", note: "Register early after confirmation" },
    { label: "Rhythm", value: "Trimester checks", note: "Your midwife sets the schedule" },
    { label: "Admin", value: "BSN + insurance", note: "Timing matters when relocating" },
    { label: "Next guides", value: "Maternity · Birth", note: "System depth and birth day" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Pregnancy care in the Netherlands is often midwife-led (verloskundige) for pregnancies considered low risk. After confirmation, many people contact a midwife practice early, complete intake, and follow antenatal check-ups there — with obstetric or hospital pathways when indicated.",
    "This guide is the prenatal journey cornerstone for newcomers: finding a midwife, trimester checkpoints, BSN and registration timing awareness, insurance basics and what to prepare. Full maternity-system depth lives on Maternity care. Birth-day orientation continues on Giving birth. Family leisure lives on Family activities.",
  ],
  introHighlights: [
    "Orientation for the prenatal journey — not week-by-week clinical advice.",
    "Find and register with a midwife early; capacity fills in busy areas.",
    "BSN, municipality and insurance timing matter especially when relocating.",
    "Maternity care and Giving birth are the companion system and birth-day guides.",
  ],
  orientationFlowSteps: [
    "Confirm pregnancy and contact midwife practices about capacity and intake.",
    "Map trimester checkpoints and questions with your midwife.",
    "Track BSN, municipality registration and insurance readiness.",
    "Prepare documents, contacts and next-guide bookmarks.",
  ],
  safetyFileChecklist: [
    "Midwife practice name, intake date and on-call numbers",
    "ID / passport and BSN if issued",
    "Dutch health insurance policy details",
    "Prior pregnancy or medical records if relevant",
    "Medication and allergy list",
    "GP / huisarts details if registered",
    "Partner or support-person contacts",
    "Bookmarks: Maternity care + Giving birth",
  ],
  introScenarios: [
    {
      situation: "We just confirmed pregnancy in the Netherlands",
      approach: "Many people start by contacting a nearby verloskundige practice for capacity and intake — not by waiting for an obstetrician by default.",
      firstStep: "Call 2–3 midwife practices this week; ask about English support and documents needed.",
    },
    {
      situation: "We are relocating mid-pregnancy",
      approach: "Bring prior records and register with a local midwife quickly; BSN and insurance timing often need parallel admin.",
      firstStep: "Contact practices before or on arrival; gather records into one phone folder.",
    },
    {
      situation: "We expected hospital obstetric care from week one",
      approach: "Dutch pathways often begin with a midwife; obstetric or hospital care applies when indications call for it.",
      firstStep: "Read Maternity care for system depth; use this page for the prenatal starting journey.",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "How does pregnancy work for expats in the Netherlands?",
    summary:
      "After confirmation, many expats register with a midwife (verloskundige), attend antenatal check-ups on a trimester rhythm set by that team, and keep BSN, municipality and insurance admin moving in parallel. This page orients the prenatal journey; Maternity care covers system pathways and kraamzorg depth; Giving birth covers labour day.",
    bullets: [
      "Contact midwife practices early — capacity and language matter.",
      "Trimester checkpoints are orientation themes; your midwife sets the schedule.",
      "BSN and insurance timing are especially important when relocating.",
      "Prepare documents and contacts before late pregnancy.",
      "System pathways → Maternity care; birth day → Giving birth; leisure → Family activities.",
    ],
    note: "This page does not replace your midwife’s instructions or any personal clinical guidance.",
  },
  snapshotCards: [
    {
      title: "Find a midwife",
      body: "Search by postcode, ask about capacity and English, complete intake with documents ready.",
    },
    {
      title: "Trimester checkpoints",
      body: "Early intake, mid-pregnancy rhythm, late-pregnancy planning talks — personal schedule with your team.",
    },
    {
      title: "BSN & registration",
      body: "Municipality registration and BSN timing affect insurance and care logistics for newcomers.",
    },
    {
      title: "Insurance basics",
      body: "Much maternity care sits in the basic package — verify policy year details with your insurer.",
    },
    {
      title: "What to prepare",
      body: "ID, records, medication list, midwife contacts and partner logistics in one calm folder.",
    },
    {
      title: "Companion guides",
      body: "Maternity care for system depth; Giving birth for labour day; Family activities for leisure later.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Maternity care owns pathway and kraamzorg depth; this page owns the prenatal starting journey.",
    "Do not wait for “perfect” admin — midwife contact and documents first.",
    "Ask for English call sheets and intake forms early if you need them.",
  ],
  midwife: {
    heading: "Finding and registering with a midwife",
    intro:
      "For many low-risk pregnancies, a neighbourhood midwife practice (verloskundige) is the first and main door. Register early — popular areas fill and intake paperwork takes time.",
    paragraphs: [
      "Search practices by postcode or neighbourhood, ask about capacity for your due date, English support, how they work with nearby hospitals, and what documents to bring to intake. Save day and on-call numbers after registration.",
      "If indications later call for obstetric or hospital pathways, your midwife team usually explains the change. Full pathway maps live on Maternity care — this section stays focused on getting started.",
    ],
    cards: [
      {
        title: "Search nearby",
        body: "Start with practices close to home — travel during pregnancy and labour cues is easier nearby.",
      },
      {
        title: "Ask capacity & language",
        body: "Confirm intake slots for your due window and whether English visits or interpreters are available.",
      },
      {
        title: "Complete intake",
        body: "Bring ID, insurance, medical history and prior pregnancy notes if relevant.",
      },
      {
        title: "Save contacts",
        body: "Store practice and on-call numbers on two phones; ask how urgent concerns are handled.",
      },
    ] satisfies TipCard[],
    checklist: [
      "2–3 practices contacted about capacity",
      "Intake date booked",
      "Documents list confirmed with the practice",
      "English / language needs flagged",
      "On-call numbers saved after registration",
      "GP details shared if you have a huisarts",
    ],
    crossLinks: [
      {
        label: "Maternity care",
        href: MATERNITY_CARE_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Verloskundige pathways, obstetric doors and kraamzorg awareness",
      },
      {
        label: "General Practitioner (GP)",
        href: GP_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Huisarts registration beside maternity coordination",
      },
    ] satisfies PregnancyLink[],
  },
  trimesters: {
    heading: "Trimester checkpoints (orientation)",
    intro:
      "Dutch antenatal care usually follows a check-up rhythm your midwife explains. The themes below are orientation only — not a clinical schedule or week-by-week medical advice.",
    paragraphs: [
      "Early pregnancy often focuses on intake, history and first checks. Mid-pregnancy continues monitoring and planning conversations. Late pregnancy often includes birth-place discussion, call cues and practical readiness — details that continue on Giving birth and Maternity care.",
      "If something feels urgent at any stage, use the contacts your midwife gave you — or 112 for life-threatening emergencies.",
    ],
    rows: [
      {
        trimester: "First",
        focus: "Confirmation, midwife intake, early checks, questions list",
        admin: "Insurance details, ID/BSN awareness, prior records",
        tip: "Contact practices as soon as pregnancy is confirmed",
      },
      {
        trimester: "Second",
        focus: "Ongoing check-ups, planning talks, language preferences",
        admin: "Keep policy and address details current",
        tip: "Raise kraamzorg awareness and birth-place questions early",
      },
      {
        trimester: "Third",
        focus: "Birth-place discussion, call cues, packing orientation",
        admin: "Documents pouch ready; on-call numbers confirmed",
        tip: "Bookmark Giving birth for labour-day detail",
      },
    ] satisfies CheckpointRow[],
    timeline: [
      {
        phase: "1",
        title: "Confirm and register",
        detail: "Contact midwife practices; complete intake with documents.",
      },
      {
        phase: "2",
        title: "Antenatal rhythm",
        detail: "Attend check-ups your team schedules; keep a written question list.",
      },
      {
        phase: "3",
        title: "Plan and prepare",
        detail: "Birth-place and call-cue talks; prepare bag and partner roles later.",
      },
      {
        phase: "4",
        title: "Know next doors",
        detail: "Maternity care for system depth; Giving birth for labour day; JGZ after birth.",
      },
    ] satisfies TimelineStep[],
    flowLabels: ["Confirm", "Register midwife", "Trimester checks", "Prepare", "Birth day"],
  },
  registration: {
    heading: "BSN, municipality and registration timing",
    intro:
      "For newcomers, municipality registration and BSN timing often run in parallel with midwife intake. This section is awareness — not legal advice or a full gemeente encyclopedia.",
    paragraphs: [
      "A BSN (citizen service number) is commonly needed for healthcare and insurance administration. If you are relocating, start municipality registration as early as your situation allows and tell midwife practices what documents you already have.",
      "Moving mid-pregnancy adds urgency: bring prior pregnancy records, medication lists and ultrasound reports, and explain your due date clearly on first contact.",
    ],
    cards: [
      {
        title: "Municipality awareness",
        body: "Registration timing affects many admin doors — ask your gemeente or relocation support what applies to you.",
      },
      {
        title: "BSN for care logistics",
        body: "Practices and insurers often need BSN once issued — keep the number in your documents pouch.",
      },
      {
        title: "Midwife intake docs",
        body: "ID, insurance, medical history and prior pregnancy notes speed the first visit.",
      },
      {
        title: "Mid-pregnancy moves",
        body: "Contact local practices before or on arrival; do not wait for perfect admin completion.",
      },
    ] satisfies TipCard[],
    tips: [
      "Keep scans of ID, insurance and records in one encrypted phone folder.",
      "Ask the midwife practice what they need if your BSN is still pending.",
      "Municipality services guides help with broader gemeente orientation.",
    ],
    crossLinks: [
      {
        label: "Maternity care",
        href: MATERNITY_CARE_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Registration timing inside maternity pathways",
      },
      {
        label: "Moving with kids",
        href: MOVING_WITH_KIDS_PATH,
        status: "live" as const,
        description: "Relocation orientation for families with children",
      },
      {
        label: "Moving with family",
        href: MOVING_WITH_FAMILY_PATH,
        status: "live" as const,
        description: "Broader family relocation orientation",
      },
    ] satisfies PregnancyLink[],
  },
  insurance: {
    heading: "Pregnancy and insurance basics",
    intro:
      "Much maternity care is oriented within Dutch basic health insurance, with separate awareness for own contributions (for example kraamzorg or some birth settings). Always verify your policy year with your insurer.",
    paragraphs: [
      "If you are choosing or renewing cover while pregnant or planning pregnancy, compare factors calmly — basic vs supplementary questions, networks and own-risk rules. Use Health insurance comparison for a decision framework, not an insurer ranking.",
      "This page does not quote personal premiums or promise cover. Maternity care expands insurance orientation for maternity pathways; Health Insurance covers package basics.",
    ],
    cards: [
      {
        title: "Basic package awareness",
        body: "Many maternity pathway elements sit in basic cover — confirm what applies to your policy year.",
      },
      {
        title: "Own contributions",
        body: "Ask about kraamzorg and birth-related own contributions early — details vary.",
      },
      {
        title: "Compare calmly",
        body: "Use comparison frameworks before renewal if you expect pregnancy-related costs.",
      },
      {
        title: "Verify, then decide",
        body: "Insurer and midwife admin teams confirm what documents they need from you.",
      },
    ] satisfies TipCard[],
    tips: [
      "Save your policy number and insurer app login before intake.",
      "Ask your midwife which insurance questions they hear most from expats.",
      "Do not treat online premium guesses as personal advice.",
    ],
    crossLinks: [
      {
        label: "Maternity care",
        href: MATERNITY_CARE_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Maternity insurance and kraamzorg contribution awareness",
      },
      {
        label: "Health Insurance",
        href: HEALTH_INSURANCE_PATH,
        status: "live" as const,
        description: "Basic package and deductible orientation",
      },
      {
        label: "Health insurance comparison",
        href: HEALTH_INSURANCE_COMPARISON_PATH,
        status: "live" as const,
        description: "Decision framework — not an insurer ranking",
      },
    ] satisfies PregnancyLink[],
  },
  prepare: {
    heading: "What to prepare during pregnancy",
    intro:
      "A calm prepare list keeps antenatal visits focused on your questions. Pack documents early; birth-day packing detail continues on Giving birth.",
    paragraphs: [
      "Prioritise ID, insurance, midwife contacts, medication lists and prior records. Add partner logistics, language needs and bookmarks for Maternity care and Giving birth. Kraamzorg awareness and children’s healthcare doors matter before the due date — not only after birth.",
      "Child benefits and childcare allowance become relevant after birth for many families — short links below; they are not pregnancy-care pathways.",
    ],
    rows: [
      {
        item: "Documents pouch",
        why: "Speeds intake and urgent calls",
        when: "As soon as midwife contact starts",
      },
      {
        item: "Question list",
        why: "Language and pathway clarity",
        when: "Before each antenatal visit",
      },
      {
        item: "Partner logistics",
        why: "Transport, advocacy, contacts",
        when: "Second / third trimester",
      },
      {
        item: "Birth-day bookmarks",
        why: "Call cues and packing later",
        when: "Third trimester orientation",
      },
      {
        item: "Kraamzorg awareness",
        why: "Postpartum home support door",
        when: "Often during pregnancy",
      },
      {
        item: "JGZ / children’s healthcare pointer",
        why: "Baby care after birth",
        when: "Late pregnancy",
      },
    ] satisfies PrepareRow[],
    cards: [
      {
        title: "One folder",
        body: "Keep scans and paper copies of ID, insurance and records together.",
      },
      {
        title: "Two phones",
        body: "Save midwife and emergency numbers on parent and partner devices.",
      },
      {
        title: "Language plan",
        body: "Ask for English materials or interpreter support before late pregnancy.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Giving birth",
        href: GIVING_BIRTH_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Packing, call cues, partner role and first hours",
      },
      {
        label: "Healthcare for Children",
        href: HEALTHCARE_FOR_CHILDREN_PATH,
        status: "live" as const,
        description: "JGZ and children’s healthcare after birth",
      },
      {
        label: "Child benefits",
        href: CHILD_BENEFITS_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Kinderbijslag orientation after birth",
      },
      {
        label: "Childcare allowance",
        href: CHILDCARE_ALLOWANCE_PATH,
        status: "live" as const,
        description: "Kinderopvangtoeslag orientation — separate from pregnancy care",
      },
    ] satisfies PregnancyLink[],
  },
  differences: {
    heading: "What surprises expats about Dutch pregnancy",
    intro:
      "Many newcomers arrive from obstetrician-first systems. Dutch prenatal culture often starts with a midwife and an open birth-place conversation — when clinically suitable.",
    paragraphs: [
      "Hospital birth is common and available when indicated or preferred within pathway rules — but it is not the only culturally discussed option. Registration, insurance and kraamzorg awareness are practical Dutch norms to learn early.",
      "This page stays calm and practical. It does not rank practices or hospitals and does not tell you which birth place is “best”.",
    ],
    cards: [
      {
        title: "Midwife-first is normal",
        body: "Verloskundige care is a designed first door for many pregnancies — not a lesser pathway.",
      },
      {
        title: "Birth-place talk is expected",
        body: "Home, birth centre and hospital may all be discussed — suitability is clinical.",
      },
      {
        title: "Admin runs in parallel",
        body: "BSN, insurance and intake documents matter as much as appointment dates.",
      },
      {
        title: "Companion guides exist",
        body: "Maternity care and Giving birth hold system and birth-day depth on purpose.",
      },
    ] satisfies TipCard[],
  },
  scenarios: {
    heading: "Common expat pregnancy scenarios",
    intro: "Match your starting point to a calm first step — then deepen on Maternity care or Giving birth as needed.",
    rows: [
      {
        situation: "Newly confirmed pregnancy, already living in NL",
        approach: "Contact nearby midwife practices for capacity; gather ID and insurance for intake.",
        firstStep: "Call practices this week; book the earliest suitable intake.",
      },
      {
        situation: "Relocating while pregnant",
        approach: "Bring records, contact local midwives early, track BSN and insurance in parallel.",
        firstStep: "Email or call practices with due date and language needs before arrival if possible.",
      },
      {
        situation: "English-first and unsure about pathways",
        approach: "Ask practices about English visits; use Maternity care for system maps.",
        firstStep: "Flag language needs at first contact; keep a written question list.",
      },
      {
        situation: "Expecting obstetrician-led care from week one",
        approach: "Understand midwife-first norms; obstetric doors open when indicated.",
        firstStep: "Read Maternity care obstetric pathways; register with a midwife unless advised otherwise.",
      },
      {
        situation: "Insurance confusion during pregnancy",
        approach: "Verify basic-package maternity awareness with insurer; compare calmly at renewal.",
        firstStep: "Open Health Insurance / comparison guides; ask midwife which documents they need.",
      },
      {
        situation: "Want leisure ideas while pregnant",
        approach: "Keep activity plans gentle and practical — Family activities covers parks, museums and rainy-day options.",
        firstStep: "Bookmark Family activities for low-pressure outings; follow your midwife on activity limits.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Waiting to find a midwife",
      body: "Popular neighbourhoods fill; late contact shrinks options.",
      advice: "Call practices as soon as pregnancy is confirmed or on arrival if relocating.",
    },
    {
      title: "Ignoring BSN and registration timing",
      body: "Admin delays can slow insurance and care logistics for newcomers.",
      advice: "Start municipality / BSN awareness early and tell practices what you already have.",
    },
    {
      title: "Skipping insurance checks",
      body: "Assuming “everything is free” without verifying own contributions creates surprise bills.",
      advice: "Verify maternity-related cover and contributions with your insurer for this policy year.",
    },
    {
      title: "Treating this page as clinical advice",
      body: "Online trimester lists cannot replace your midwife’s schedule.",
      advice: "Use this guide for orientation; ask clinical questions in appointments.",
    },
    {
      title: "Skipping companion guides",
      body: "Pathway depth and birth-day packing live elsewhere on purpose.",
      advice: "Bookmark Maternity care and Giving birth before the third trimester.",
    },
    {
      title: "No documents pouch",
      body: "Searching for ID during intake or urgent calls adds stress.",
      advice: "Build one folder early — ID, insurance, records, medication list.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Pregnancy readiness checklist",
    intro:
      "Use this from confirmation through late pregnancy orientation. Confirm clinical details with your midwife — this is not a medical checklist.",
    items: [
      "Midwife practices contacted and intake booked",
      "On-call / practice numbers saved on two phones",
      "ID, insurance and BSN (if issued) in documents pouch",
      "Prior pregnancy / medical records gathered if relevant",
      "Medication and allergy list updated",
      "Trimester question list started",
      "Language / interpreter needs flagged",
      "Insurance maternity awareness verified for this year",
      "Kraamzorg awareness raised with midwife",
      "Maternity care and Giving birth guides bookmarked",
      "Family activities bookmarked for gentle leisure ideas",
      "Partner logistics roles sketched for later pregnancy",
    ],
  },
  howTo: {
    heading: "How to start your pregnancy journey in the Netherlands",
    steps: [
      {
        name: "Confirm and contact midwives",
        text: "After confirmation, call nearby verloskundige practices about capacity, language and intake documents.",
      },
      {
        name: "Complete intake with a documents pouch",
        text: "Bring ID, insurance, medical history and prior records; save on-call numbers afterwards.",
      },
      {
        name: "Align admin timing",
        text: "Track municipality registration and BSN awareness in parallel if you are new to the Netherlands.",
      },
      {
        name: "Verify insurance basics",
        text: "Confirm maternity-related cover questions with your insurer; use comparison guides for renewal decisions.",
      },
      {
        name: "Prepare and bookmark next doors",
        text: "Keep a question list, raise kraamzorg awareness, and bookmark Maternity care plus Giving birth.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "Starting Pregnancy Care in the Netherlands",
    description:
      "Step-by-step orientation for expats on Dutch prenatal care: finding a midwife, intake documents, BSN timing awareness, insurance basics and preparing for maternity pathways.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Do I need an obstetrician for pregnancy care in the Netherlands?",
      a: "Many low-risk pregnancies are midwife-led. Obstetric or hospital pathways apply when medical indications call for them. Your midwife or GP explains pathway changes. See Maternity care for system depth.",
    },
    {
      q: "When should I register with a midwife?",
      a: "Contact practices early after pregnancy confirmation — capacity can be limited, especially in busy areas. If you move mid-pregnancy, register as soon as you arrive.",
    },
    {
      q: "What documents do I need for midwife intake?",
      a: "Typically ID, insurance details, medical history, medication lists and prior pregnancy records if available. Ask the practice for their exact list and whether BSN is required yet.",
    },
    {
      q: "How do trimesters work with Dutch antenatal care?",
      a: "Your midwife sets the check-up rhythm. This guide offers orientation themes by trimester — not a personal clinical schedule. Ask questions at each visit.",
    },
    {
      q: "What about BSN if I am newly arrived?",
      a: "BSN timing often matters for healthcare and insurance admin. Start municipality registration awareness early and tell practices which documents you already have. This is not legal advice.",
    },
    {
      q: "Does basic health insurance cover pregnancy care?",
      a: "Much maternity care is oriented within the basic package, with separate awareness for some own contributions. Verify your policy year with your insurer. See Maternity care and Health Insurance guides.",
    },
    {
      q: "Where do birth day and maternity system details live?",
      a: "Giving birth covers place of birth, call cues, packing and first hours. Maternity care covers verloskundige pathways, obstetric doors, registration timing depth and kraamzorg awareness.",
    },
    {
      q: "Where can I find family activities while pregnant?",
      a: "Family activities covers parks, museums, libraries and rainy-day ideas. Always follow your midwife’s guidance on activity limits.",
    },
    {
      q: "What about parenting culture and children’s healthcare?",
      a: "Parenting covers Dutch family culture. Healthcare for Children covers JGZ and children’s healthcare after birth.",
    },
    {
      q: "Is this medical advice?",
      a: "No. ExpatLife provides general orientation only. Follow your midwife, obstetric team or GP for personal clinical guidance. Call 112 for life-threatening emergencies.",
    },
  ],
  relatedGuidesTips: [
    "Maternity pathways & kraamzorg → Maternity care (required companion).",
    "Birth day → Giving birth.",
    "Leisure while pregnant → Family activities.",
    "Baby healthcare / JGZ → Healthcare for Children.",
    "Family culture → Parenting (short link).",
    "GP registration → GP guide.",
    "Cover questions → Health Insurance / comparison.",
  ],
  relatedGuides: [
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "System companion — verloskundige pathways, obstetric doors, insurance and kraamzorg depth.",
    },
    {
      label: "Giving birth",
      href: GIVING_BIRTH_NETHERLANDS_PATH,
      status: "live",
      description: "Birth-day orientation — place of birth, call cues, packing and first hours.",
    },
    {
      label: "Family activities",
      href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Parks, museums, libraries and rainy-day ideas for gentle leisure.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "JGZ and children’s healthcare orientation after birth.",
    },
    {
      label: "Parenting in the Netherlands",
      href: PARENTING_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch parenting culture — short cultural companion link.",
    },
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Huisarts registration and primary-care coordination.",
    },
    {
      label: "Hospitals",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Hospital care context for obstetric pathways.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package and deductible orientation.",
    },
    {
      label: "Health insurance comparison",
      href: HEALTH_INSURANCE_COMPARISON_PATH,
      status: "live",
      description: "Decision framework for comparing policies — not a ranking.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112 and urgent doors when symptoms are acute.",
    },
    {
      label: "Child benefits",
      href: CHILD_BENEFITS_NETHERLANDS_PATH,
      status: "live",
      description: "Kinderbijslag orientation after birth.",
    },
    {
      label: "Moving with kids",
      href: MOVING_WITH_KIDS_PATH,
      status: "live",
      description: "Relocation orientation for families with children.",
    },
  ] satisfies PregnancyLink[],
  familyHubTips: [
    "Pregnancy is the prenatal journey cornerstone in the Family cluster.",
    "Maternity care remains the system pathway guide under Health.",
    "Family activities is the leisure sibling in this cluster.",
    "Giving birth continues labour-day orientation when you need it.",
  ],
  familyHubCards: [
    {
      label: "Pregnancy",
      href: PREGNANCY_NETHERLANDS_PATH,
      status: "live",
      description: "Prenatal journey — midwife, trimesters, BSN timing, insurance basics — you are here.",
    },
    {
      label: "Family activities",
      href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Cluster sibling — parks, museums, libraries and everyday outings.",
    },
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Required companion — maternity system pathways and kraamzorg.",
    },
    {
      label: "Giving birth",
      href: GIVING_BIRTH_NETHERLANDS_PATH,
      status: "live",
      description: "Birth-day place options, packing and first hours.",
    },
    {
      label: "Parenting",
      href: PARENTING_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch parenting culture and everyday family life.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "JGZ and children’s healthcare after birth.",
    },
  ] satisfies PregnancyLink[],
  exploreNextCards: [
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Continue to midwife pathways, obstetric doors and kraamzorg depth.",
    },
    {
      label: "Giving birth",
      href: GIVING_BIRTH_NETHERLANDS_PATH,
      status: "live",
      description: "Continue to birth-day place options, call cues and packing.",
    },
    {
      label: "Family activities",
      href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Gentle leisure ideas — parks, museums and rainy-day plans.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Prepare for JGZ and children’s healthcare after birth.",
    },
    {
      label: "Health insurance comparison",
      href: HEALTH_INSURANCE_COMPARISON_PATH,
      status: "live",
      description: "Compare policy factors calmly before renewal.",
    },
    {
      label: "Parenting",
      href: PARENTING_NETHERLANDS_PATH,
      status: "live",
      description: "Short cultural companion for Dutch family life.",
    },
  ] satisfies PregnancyLink[],
  exploreNextTips: [
    "System depth → Maternity care.",
    "Birth day → Giving birth.",
    "Leisure → Family activities.",
    "Baby pathways → Healthcare for Children.",
    "Cover decisions → Health insurance comparison.",
  ],
  officialSources: [
    {
      label: "Government.nl — Healthcare",
      href: "https://www.government.nl/topics/health-issues",
      description: "Official orientation on Dutch health topics for residents and newcomers.",
    },
    {
      label: "RIVM",
      href: "https://www.rivm.nl/en",
      description: "National institute for public health orientation and trusted health information.",
    },
    {
      label: "KNOV (midwifery association)",
      href: "https://www.knov.nl/",
      description: "Professional association context for midwifery in the Netherlands.",
    },
    {
      label: "Zorgverzekeringslijn",
      href: "https://www.zorgverzekeringslijn.nl/",
      description: "Independent orientation on Dutch health insurance questions.",
    },
  ],
  disclosure:
    "ExpatLife provides general orientation for international newcomers. We do not provide medical, legal or insurance advice, and we do not rank midwives, hospitals or insurers. Verify personal decisions with your midwife, obstetric team, GP, insurer and official sources.",
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Find a midwife early after confirmation.",
        "Know trimester checkpoint themes.",
        "Track BSN and registration timing.",
        "Check insurance and prepare documents.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Midwife first door.",
        "Trimester checkpoints.",
        "BSN awareness.",
        "Insurance basics.",
        "Prepare list.",
        "Maternity companion pointer.",
      ],
    },
    midwife: {
      title: "From the visual — midwife file",
      items: [
        "Search by postcode.",
        "Ask capacity and English.",
        "Complete intake documents.",
        "Save on-call numbers.",
      ],
    },
    trimesters: {
      title: "From the visual — trimester rhythm",
      items: [
        "First: intake and early checks.",
        "Second: ongoing rhythm and planning.",
        "Third: birth-place and call cues.",
        "Always: your midwife sets the schedule.",
      ],
    },
    registration: {
      title: "From the visual — admin file",
      items: [
        "Municipality registration awareness.",
        "BSN for care logistics.",
        "Midwife intake documents.",
        "Speed matters for mid-pregnancy moves.",
      ],
    },
    insurance: {
      title: "From the visual — insurance board",
      items: [
        "Basic package maternity awareness.",
        "Verify own contributions.",
        "Compare calmly at renewal.",
        "Confirm documents with insurer.",
      ],
    },
    prepare: {
      title: "From the visual — prepare list",
      items: [
        "Documents pouch first.",
        "Medication and records.",
        "Partner logistics.",
        "Bookmark companion guides.",
      ],
    },
    differences: {
      title: "From the visual — expat surprises",
      items: [
        "Midwife-first is normal.",
        "Birth-place talk is expected.",
        "Admin runs in parallel.",
        "Companion guides hold depth.",
      ],
    },
    scenarios: {
      title: "From the visual — first moves",
      items: [
        "Newly confirmed → call midwives.",
        "Relocating → bring records fast.",
        "English-first → flag language needs.",
        "Insurance confusion → verify this year.",
      ],
    },
    mistakes: {
      title: "From the visual — fix patterns",
      items: [
        "Call midwives early.",
        "Start BSN awareness early.",
        "Verify insurance contributions.",
        "Bookmark Maternity care and Giving birth.",
      ],
    },
    checklist: {
      title: "From the visual — readiness",
      items: [
        "Intake booked.",
        "Documents pouch ready.",
        "Insurance checked.",
        "Companion guides bookmarked.",
      ],
    },
  },
} as const;

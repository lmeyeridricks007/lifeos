import { PARENTING_NETHERLANDS_PATH } from "@/src/components/family/parentingNetherlandsPageModel";
import { HEALTHCARE_FOR_CHILDREN_PATH } from "@/src/components/family/healthcareForChildrenNetherlandsPageModel";
import {
  EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
  GP_NETHERLANDS_PATH,
  HEALTH_INSURANCE_PATH,
  HOSPITALS_NETHERLANDS_PATH,
  MATERNITY_CARE_NETHERLANDS_PATH,
} from "@/src/components/health/maternityCareNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const GIVING_BIRTH_NETHERLANDS_PATH = "/netherlands/family/giving-birth-netherlands/" as const;
export const PETS_NETHERLANDS_PATH = "/netherlands/family/pets-netherlands/" as const;
/** Sibling prenatal journey — local path avoids circular import with pregnancy model. */
const PREGNANCY_NETHERLANDS_PATH = "/netherlands/family/pregnancy-netherlands/" as const;
export const FAMILY_HUB_PATH = PARENTING_NETHERLANDS_PATH;

export type GivingBirthLink = {
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
export type ComparisonRow = { place: string; feel: string; whoSupports: string; tip: string };
export type CallRow = { cue: string; urgency: string; action: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "giving-birth-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const givingBirthNetherlandsPage = {
  slug: "giving-birth-netherlands",
  path: GIVING_BIRTH_NETHERLANDS_PATH,
  hubPath: FAMILY_HUB_PATH,
  parentGuidePath: PARENTING_NETHERLANDS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(GIVING_BIRTH_NETHERLANDS_PATH) ?? "2026-08-24",
  seo: {
    title: "Giving Birth in the Netherlands | Complete Guide for Expats",
    description:
      "Birth-day orientation for expats in the Netherlands: home vs hospital vs birth centre, when to call the midwife, what to pack, partner role and the first hours after birth — not medical advice.",
    keywords: [
      "giving birth Netherlands",
      "birth Netherlands",
      "home birth Netherlands",
      "hospital birth Netherlands",
      "birth centre Netherlands",
      "geboortecentrum",
      "when to call midwife Netherlands",
      "hospital bag Netherlands",
      "partner during birth Netherlands",
      "after birth Netherlands",
      "expat birth Netherlands",
      "Dutch birth day",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Family · Giving birth",
    pageTitle: "Giving Birth in the Netherlands",
    subtitle:
      "Birth-day and place-of-birth orientation for expats — home, hospital or birth centre, when to call your midwife, packing lists, partner role and the calm first hours after birth.",
    primaryCta: { label: "See birth places", href: "#birth-places" },
    secondaryCta: { label: "When to call", href: "#call-midwife" },
    chips: ["Birth places", "Call the midwife", "Hospital bag", "Partner role", "First hours"],
    disclaimer:
      "General orientation only — not medical advice, not a birth plan, and not a ranking of midwives, hospitals or birth centres. For your own labour and birth, follow the instructions of your midwife or obstetric team. Call 112 for life-threatening emergencies.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic calm Dutch birth-day preparation scene: multicultural expectant couple packing a hospital bag on a kitchen table with a midwife contact card, soft canal-house daylight, welcoming atmosphere, no graphic birth imagery.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#birth-places", label: "Birth places" },
    { href: "#call-midwife", label: "Call midwife" },
    { href: "#packing", label: "Packing" },
    { href: "#partner", label: "Partner" },
    { href: "#labour-day", label: "Labour day" },
    { href: "#first-hours", label: "First hours" },
    { href: "#plans-change", label: "Plans change" },
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
      "Premium orientation board titled Birth Day Readiness — four building blocks: know your place of birth options, save midwife call cues, pack a calm bag, and plan partner support for the first hours — Birth File Checklist rail on the right.",
      "Four habits cover most birth-day questions: place options, call cues, packing, and partner support."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of giving birth in the Netherlands — place of birth discussion, midwife on call, packing list, partner role, transfer awareness, first hours after birth — Dutch canal skyline band and ExpatLife brand footer.",
      "Six building blocks explain almost every birth-day orientation question."
    ),
    birthPlaces: visual(
      "birth-places",
      "Premium three-place birth map — home birth with midwife when suitable, geboortecentrum birth centre, and hospital birth — calm place cards with a note that suitability is clinical, not preference alone.",
      "Home, birth centre and hospital are discussed with your midwife or obstetric team."
    ),
    callMidwife: visual(
      "call-midwife",
      "Premium when-to-call timeline board — early labour notes, regular contractions, waters breaking, reduced movements or concerning symptoms, and 112 for emergencies — phone and midwife card on a Dutch kitchen desk.",
      "Save your midwife’s on-call number and the cues they gave you for when to call."
    ),
    packing: visual(
      "packing",
      "Premium hospital-bag packing board — ID and insurance card, birth plan notes, clothes for parent and baby, toiletries, snacks, chargers and partner overnight kit — open suitcase on a canal apartment table.",
      "Pack early so labour day is about calling your midwife, not hunting for documents."
    ),
    partner: visual(
      "partner",
      "Premium partner-support scene — calm coaching roles: timing contractions, packing the car, advocating language needs, hydration and rest, and knowing when plans may transfer — Dutch birth-centre corridor light.",
      "Partners and support people help with logistics, advocacy and calm presence — not clinical decisions."
    ),
    labourDay: visual(
      "labour-day",
      "Premium labour-day flow — early labour at home cues, call midwife, arrive or stay as advised, active labour support, and birth with your team — timeline with a General information only rail.",
      "Labour day usually starts with the cues and call plan your midwife already shared."
    ),
    firstHours: visual(
      "first-hours",
      "Premium first-hours-after-birth board — skin-to-skin when suitable, first feeds, checks for parent and baby, paperwork orientation, and kraamzorg / JGZ next-step pointers — calm postpartum room.",
      "The first hours focus on recovery, bonding cues and the next practical door — not a full postpartum encyclopedia."
    ),
    plansChange: visual(
      "plans-change",
      "Premium transfer-awareness board — planned home or centre birth may move to hospital when indications appear, ambulance or car transfer orientation, partner keeps documents ready — calm bridge illustration.",
      "Transfers are common enough that planning them reduces stress — your team explains why in the moment."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board for birth day — waiting too long to call, unfinished packing, no partner logistics plan, assuming hospital is automatic, ignoring transfer talk — checklist with Fix notes.",
      "Most birth-day friction comes from missing call cues, packing or transfer awareness — not from preference alone."
    ),
    checklist: visual(
      "checklist",
      "Premium birth-day checklist clipboard — midwife number saved, place of birth discussed, bag packed, partner roles clear, transfer notes ready, first-hours contacts listed — Dutch desk scene.",
      "Use this checklist in the final weeks so birth day feels oriented, not improvised."
    ),
  },
  snapshotSignals: [
    { label: "Places", value: "Home · Centre · Hospital", note: "Discussed with your team" },
    { label: "First call", value: "Your midwife / on-call", note: "Save the number early" },
    { label: "Pack early", value: "Bag + baby kit", note: "Documents in one pouch" },
    { label: "After birth", value: "First hours calm", note: "Then kraamzorg / JGZ doors" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "In the Netherlands, many births are planned with a midwife (verloskundige) and a discussed place of birth — home, birth centre (geboortecentrum) or hospital. Suitability depends on your clinical situation, not preference alone.",
    "This guide is the birth-day cornerstone: place options, when to call, packing, partner role and the first hours after birth. Full maternity pathways, registration timing and kraamzorg detail live on Maternity care. Baby healthcare after birth continues on Healthcare for Children.",
  ],
  introHighlights: [
    "Orientation for labour day and place of birth — not trimester pregnancy care.",
    "Home, birth centre and hospital are all part of Dutch birth culture when suitable.",
    "Your midwife’s call plan beats generic internet timelines.",
    "Transfers can happen; planning them is normal, not failure.",
  ],
  orientationFlowSteps: [
    "Confirm place-of-birth discussion with your midwife or obstetric team.",
    "Save on-call numbers and the cues for when to call.",
    "Pack documents, clothes and partner kit early.",
    "Know first-hour expectations and the next practical doors.",
  ],
  safetyFileChecklist: [
    "Midwife practice + on-call / emergency midwife numbers",
    "Hospital or birth-centre address and entrance notes",
    "ID, insurance card / policy details, BSN if issued",
    "Pregnancy notes / birth preferences your team already has",
    "Partner or support-person phone and logistics plan",
    "Packed bag + car seat if leaving home after birth",
  ],
  introScenarios: [
    {
      situation: "We hope for a home birth",
      approach: "Home birth can be discussed when your midwife considers it suitable — it is not automatic for every pregnancy.",
      firstStep: "Ask your midwife what suitability checks and transfer plans look like for your situation.",
    },
    {
      situation: "We expect a hospital birth",
      approach: "Hospital births may be midwife-led or obstetric-led depending on indications — your team explains the pathway.",
      firstStep: "Confirm which hospital entrance to use and what to bring on the day.",
    },
    {
      situation: "We are unsure when labour has started",
      approach: "Dutch care usually starts with the call cues your midwife already gave you — not a generic online clock.",
      firstStep: "Call your midwife with the cues they listed; use 112 for life-threatening emergencies.",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "How does giving birth work for expats in the Netherlands?",
    summary:
      "Birth day is planned with your midwife or obstetric team: place of birth (home, birth centre or hospital), clear cues for when to call, a packed bag, and a support plan. The first hours after birth focus on recovery and bonding cues, then practical next doors such as kraamzorg awareness and children’s healthcare.",
    bullets: [
      "Place of birth is a clinical discussion — not a ranking of venues.",
      "Call your midwife using their cues; call 112 for emergencies.",
      "Pack documents and essentials early; partners handle logistics and advocacy.",
      "Transfers from home or centre to hospital can happen — prepare calmly.",
      "System pathways and kraamzorg detail → Maternity care; baby care → Healthcare for Children.",
    ],
    note: "This page does not replace your midwife’s instructions or any personal birth plan.",
  },
  snapshotCards: [
    {
      title: "Place of birth",
      body: "Home, geboortecentrum or hospital — discussed with your midwife or obstetric team based on suitability.",
    },
    {
      title: "When to call",
      body: "Use the contraction, waters and symptom cues your midwife gave you — save the on-call number.",
    },
    {
      title: "What to pack",
      body: "ID, insurance, clothes, toiletries, snacks, chargers and a partner overnight kit.",
    },
    {
      title: "Partner role",
      body: "Timing, transport, language advocacy, hydration and calm presence — not clinical decisions.",
    },
    {
      title: "Plans can change",
      body: "Transfers are part of safe Dutch birth pathways when indications appear.",
    },
    {
      title: "First hours",
      body: "Recovery, first feeds when suitable, checks, then postpartum and JGZ next steps.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Maternity care covers pathways and registration; this page covers the birth event.",
    "Do not wait for “perfect” packing — documents first, then comfort items.",
    "Ask your midwife for their written call sheet if you have not received one.",
  ],
  birthPlaces: {
    heading: "Home, birth centre or hospital?",
    intro:
      "Dutch maternity culture often discusses place of birth openly. Suitability depends on pregnancy and labour factors your midwife or obstetric team assesses — not on which option sounds nicest online.",
    paragraphs: [
      "Home birth with a midwife can be an option when the situation is considered suitable. A birth centre (geboortecentrum) sits between home and hospital for some pathways. Hospital birth may be midwife-led or involve obstetric care when indicated.",
      "Your team should explain why a place is or is not suitable and what a transfer would look like. Prefer that conversation over rankings or anecdotal “best hospital” lists.",
    ],
    rows: [
      {
        place: "Home",
        feel: "Familiar space; midwife comes to you when suitable",
        whoSupports: "Midwife (+ assistant roles as arranged)",
        tip: "Ask about transfer plan, parking for support people and what to prepare at home",
      },
      {
        place: "Birth centre (geboortecentrum)",
        feel: "Home-like rooms, often linked to hospital pathways",
        whoSupports: "Midwife team; hospital nearby if transfer needed",
        tip: "Confirm entrance, parking and what happens if labour needs hospital care",
      },
      {
        place: "Hospital",
        feel: "Clinical setting; midwife-led or obstetric pathway",
        whoSupports: "Midwife and/or obstetric / hospital team",
        tip: "Know which entrance and ward; pack for possible overnight stay",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Suitability first",
        body: "Place of birth is a clinical discussion with your team — preference alone does not decide safety.",
      },
      {
        title: "Transfer awareness",
        body: "Home or centre plans can move to hospital when indications appear. That is pathway design, not failure.",
      },
      {
        title: "Language & advocacy",
        body: "Ask early whether English support is available on the day and who can help translate preferences.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Maternity care",
        href: MATERNITY_CARE_NETHERLANDS_PATH,
        status: "live" as const,
        description: "System pathways, registration and kraamzorg awareness",
      },
      {
        label: "Hospitals",
        href: HOSPITALS_NETHERLANDS_PATH,
        status: "live" as const,
        description: "How Dutch hospitals work for secondary care context",
      },
    ] satisfies GivingBirthLink[],
  },
  callMidwife: {
    heading: "When to call the midwife",
    intro:
      "Your midwife (or obstetric team) should give you personalised cues for when to call. Use those first. The rows below are orientation themes — not a substitute for their instructions.",
    paragraphs: [
      "Many practices share a written sheet covering contractions, waters breaking, blood loss, reduced movements and other concerning symptoms. Save the on-call number in your phone and your partner’s phone.",
      "For life-threatening emergencies — severe bleeding, collapse, or other critical situations — call 112. Emergency Healthcare explains Dutch urgent doors more broadly.",
    ],
    rows: [
      {
        cue: "Regular contractions / labour progressing as discussed",
        urgency: "Call midwife",
        action: "Use the timing or pattern cues your midwife listed",
      },
      {
        cue: "Waters breaking",
        urgency: "Call midwife",
        action: "Note time, colour/odour notes they asked for, then call",
      },
      {
        cue: "Reduced baby movements or concerning symptoms they listed",
        urgency: "Call promptly",
        action: "Do not wait for a scheduled appointment — call the on-call line",
      },
      {
        cue: "Life-threatening emergency",
        urgency: "112",
        action: "Call emergency services; then inform your midwife when safe",
      },
    ] satisfies CallRow[],
    tips: [
      "Ask for the call sheet in English if you need it.",
      "Practise the first sentence you will say on the phone (name, weeks pregnant, cue).",
      "Know whether to call the practice number or a night on-call number.",
    ],
  },
  packing: {
    heading: "What to pack for birth day",
    intro:
      "Pack in the final weeks so labour day is about calling your midwife — not searching for passports. Lists vary by place of birth; confirm with your midwife what they expect.",
    paragraphs: [
      "Documents matter most: ID, insurance details, pregnancy notes and any hospital registration paperwork. Comfort items come next. If you may go home the same day, a car seat and going-home outfit for the baby are practical.",
      "Partners should pack a small overnight kit too — chargers, snacks, change of clothes and any medication they need for themselves.",
    ],
    parentBag: [
      "Passport / ID and insurance card or policy details",
      "Phone + charger; headphones optional",
      "Comfortable labour clothes and going-home outfit",
      "Toiletries, lip balm, hair tie, glasses/contacts if needed",
      "Snacks and a refillable bottle if allowed",
      "Birth preferences notes your team already knows",
    ],
    babyBag: [
      "Going-home outfit and hat (weather-aware)",
      "Nappies and wipes if advised for your place of birth",
      "Car seat installed and practised before labour day",
      "Blanket for the journey home when suitable",
    ],
    partnerBag: [
      "Phone chargers and power bank",
      "Snacks, water, change of clothes",
      "List of midwife / hospital numbers",
      "Cash or card for parking / snacks",
      "Own medication and snacks for long waits",
    ],
    cards: [
      {
        title: "Documents pouch",
        body: "Keep ID, insurance and pregnancy notes in one zip pouch at the top of the bag.",
      },
      {
        title: "Place-specific extras",
        body: "Home birth needs a prepared room list; hospital stays need overnight toiletries — ask your midwife.",
      },
      {
        title: "Do not overpack",
        body: "One calm bag beats three suitcases. Add items your midwife specifically requested.",
      },
    ] satisfies TipCard[],
  },
  partner: {
    heading: "Partner and support-person role",
    intro:
      "Partners and support people are a practical part of Dutch birth-day culture: logistics, advocacy and calm presence. Clinical decisions stay with the midwife or obstetric team.",
    paragraphs: [
      "Helpful roles include timing contractions as instructed, driving or arranging transport, speaking up about language needs, offering hydration and rest prompts, and keeping the documents pouch ready if a transfer happens.",
      "Agree in advance who will update family, who holds the phone, and what “calm advocacy” means for you — especially if English is needed on the day.",
    ],
    cards: [
      {
        title: "Logistics lead",
        body: "Transport, parking, bag, car seat and knowing the correct entrance.",
      },
      {
        title: "Communication lead",
        body: "Call the midwife with clear cues; advocate language needs politely.",
      },
      {
        title: "Comfort lead",
        body: "Hydration, snacks, rest prompts and protecting focus during labour.",
      },
      {
        title: "Transfer ready",
        body: "Keep documents pouch and phone chargers ready if plans change.",
      },
    ] satisfies TipCard[],
    tips: [
      "Ask the midwife what they expect from support people at home vs hospital.",
      "Decide photo / visitor boundaries before labour day.",
      "Support people should also rest when possible — long labours are normal.",
    ],
  },
  labourDay: {
    heading: "Labour day orientation",
    intro:
      "Labour day usually follows the plan your midwife already shared: early cues, a call, then stay home, go to a centre or go to hospital as advised.",
    paragraphs: [
      "Early labour often continues at home when suitable. Your midwife may visit, advise waiting, or ask you to come in. Active labour support and birth then continue with your team in the agreed place — or in hospital after a transfer.",
      "This section is orientation only. Pain management options, interventions and clinical choices belong in conversations with your midwife or obstetric team — not in an online guide.",
    ],
    timeline: [
      {
        phase: "1",
        title: "Early cues",
        detail: "Contractions, waters or other cues from your call sheet — note time and pattern.",
      },
      {
        phase: "2",
        title: "Call your midwife",
        detail: "Share the cues clearly; follow their advice on timing, stay-home or travel.",
      },
      {
        phase: "3",
        title: "Arrive or stay",
        detail: "Home visit, birth centre or hospital entrance — bring documents pouch.",
      },
      {
        phase: "4",
        title: "Birth with your team",
        detail: "Midwife and/or obstetric team support labour and birth as indicated.",
      },
      {
        phase: "5",
        title: "First hours",
        detail: "Recovery, bonding cues, checks — then practical next steps.",
      },
    ] satisfies TimelineStep[],
    flowLabels: ["Cues", "Call midwife", "Place of birth", "Birth", "First hours"],
  },
  firstHours: {
    heading: "The first hours after birth",
    intro:
      "The immediate postpartum hours focus on recovery for the parent who gave birth, checks for parent and baby, and bonding cues such as skin-to-skin when suitable. Exact routines vary by place and clinical situation.",
    paragraphs: [
      "Feeding support, observations and paperwork orientation (including registration steps that matter after birth) are usually introduced by your team. Kraamzorg postpartum home support and Youth Healthcare (JGZ) are important next doors — detailed on Maternity care and Healthcare for Children.",
      "If something feels urgent after you are home, use the contacts your midwife gave you — or 112 for emergencies.",
    ],
    cards: [
      {
        title: "Recovery & bonding",
        body: "Skin-to-skin and quiet time when suitable — follow your team’s guidance in the moment.",
      },
      {
        title: "Checks",
        body: "Parent and baby observations happen on a schedule your team explains — ask questions.",
      },
      {
        title: "Feeding support",
        body: "First feeds are supported according to your situation — this page does not prescribe a method.",
      },
      {
        title: "Next doors",
        body: "Kraamzorg awareness and children’s healthcare / JGZ continue the postpartum journey.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Maternity care",
        href: MATERNITY_CARE_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Kraamzorg awareness and postpartum pathway context",
      },
      {
        label: "Healthcare for Children",
        href: HEALTHCARE_FOR_CHILDREN_PATH,
        status: "live" as const,
        description: "JGZ and children’s healthcare after birth",
      },
      {
        label: "Parenting",
        href: PARENTING_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Dutch family life orientation beyond birth day",
      },
    ] satisfies GivingBirthLink[],
  },
  plansChange: {
    heading: "When birth plans change",
    intro:
      "Transfers from home or birth centre to hospital — or from midwife-led to obstetric pathways — happen when indications appear. Planning for change reduces fear.",
    paragraphs: [
      "Your midwife should explain common reasons transfers happen and how transport is arranged. Partners should keep the documents pouch, phone and keys ready. Ask what you will be told in the moment so the change feels oriented.",
      "A changed plan is still your birth. Focus on clear communication with the team rather than comparing to an ideal script.",
    ],
    scenarios: [
      {
        situation: "Planned home birth needs hospital care",
        approach: "Midwife coordinates transfer; hospital team continues care as indicated.",
        firstStep: "Keep bag and documents ready; follow transport instructions.",
      },
      {
        situation: "Birth centre labour moves to hospital",
        approach: "Centres are often linked to nearby hospitals for this pathway.",
        firstStep: "Ask in advance which hospital and how transfer works.",
      },
      {
        situation: "Partner is unsure what to say",
        approach: "Short facts help: name, weeks pregnant, what changed, midwife already informed.",
        firstStep: "Practise a one-sentence handover before labour day.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Ask for the transfer story in plain English during antenatal visits.",
      "Know parking / entrance for the hospital you would go to.",
      "Emergency Healthcare covers 112 and urgent doors if a crisis develops.",
    ],
  },
  mistakes: [
    {
      title: "Waiting too long to call",
      body: "Generic internet timelines can delay contacting your midwife.",
      advice: "Use your practice’s call sheet — when in doubt, call.",
    },
    {
      title: "Packing on the day",
      body: "Searching for ID during contractions adds stress.",
      advice: "Pack documents first in the final weeks; refresh the bag once.",
    },
    {
      title: "No partner logistics plan",
      body: "Unclear transport, entrance or phone roles create friction.",
      advice: "Assign logistics, communication and comfort roles before labour.",
    },
    {
      title: "Assuming hospital is automatic",
      body: "Dutch pathways often discuss home or centre when suitable.",
      advice: "Have the place-of-birth talk early — and revisit it.",
    },
    {
      title: "Ignoring transfer talk",
      body: "Transfers feel scarier when never discussed.",
      advice: "Ask “what if we need to move?” during antenatal visits.",
    },
    {
      title: "Skipping next-door orientation",
      body: "Birth day ends; kraamzorg and JGZ still matter.",
      advice: "Bookmark Maternity care and Healthcare for Children before the due date.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Birth-day readiness checklist",
    intro: "Use this in the final weeks. Confirm clinical details with your midwife — this is orientation, not a medical checklist.",
    items: [
      "Place of birth discussed and written down",
      "Midwife on-call / emergency numbers saved (two phones)",
      "Call-sheet cues reviewed with partner",
      "Documents pouch packed (ID, insurance, notes)",
      "Parent, baby and partner packing lists done",
      "Car seat practised if needed for going home",
      "Hospital / centre entrance and parking notes saved",
      "Transfer “what if” conversation completed",
      "Language / advocacy needs flagged with the practice",
      "Kraamzorg awareness and JGZ next steps bookmarked",
    ],
  },
  howTo: {
    heading: "How to prepare for birth day in the Netherlands",
    steps: [
      {
        name: "Confirm place of birth with your team",
        text: "Discuss home, birth centre or hospital suitability and what a transfer would look like.",
      },
      {
        name: "Save call cues and numbers",
        text: "Get the midwife call sheet, save on-call numbers, and practise the first phone sentence with your partner.",
      },
      {
        name: "Pack the calm bag",
        text: "Documents first, then parent, baby and partner kits — refresh once in the final weeks.",
      },
      {
        name: "Assign partner roles",
        text: "Logistics, communication and comfort leads — plus who updates family.",
      },
      {
        name: "Orient to the first hours and next doors",
        text: "Ask what recovery and checks look like, then bookmark Maternity care and Healthcare for Children.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "Preparing for Birth Day in the Netherlands",
    description:
      "Step-by-step orientation for expats on Dutch birth day: place of birth discussion, midwife call cues, packing, partner roles and first-hours awareness.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Can I give birth at home in the Netherlands?",
      a: "Home birth can be an option when your midwife considers the situation suitable. It is not automatic for every pregnancy. Discuss suitability, preparation and transfer plans with your midwife.",
    },
    {
      q: "What is a geboortecentrum?",
      a: "A birth centre is a home-like birth setting often linked to hospital pathways. Ask your midwife whether a centre is part of your options and how transfer to hospital works if needed.",
    },
    {
      q: "When should I call my midwife in labour?",
      a: "Follow the cues on the call sheet your midwife gave you — contractions, waters breaking, reduced movements and other symptoms they listed. When unsure, call. Use 112 for life-threatening emergencies.",
    },
    {
      q: "What should I pack for a Dutch hospital birth?",
      a: "Prioritise ID, insurance details and pregnancy notes, then comfortable clothes, toiletries, chargers, snacks and a partner overnight kit. Confirm any place-specific items with your midwife.",
    },
    {
      q: "What does the partner do during birth?",
      a: "Typical support roles include logistics, calling the midwife, language advocacy, comfort prompts and keeping documents ready if plans change. Clinical decisions stay with the care team.",
    },
    {
      q: "What happens in the first hours after birth?",
      a: "Routines vary, but teams usually focus on recovery, checks for parent and baby, and bonding or feeding support when suitable. Ask your midwife what to expect for your pathway.",
    },
    {
      q: "What if we planned a home birth but need the hospital?",
      a: "Transfers are a planned part of safe pathways when indications appear. Your midwife coordinates; partners keep documents and phones ready. Ask about the transfer process antenatally.",
    },
    {
      q: "Where do I learn about maternity care and kraamzorg?",
      a: "Use the Maternity care guide for midwife pathways, registration timing, insurance orientation and kraamzorg awareness. This page stays focused on birth day itself.",
    },
    {
      q: "What about healthcare for the baby after birth?",
      a: "Continue with Healthcare for Children for JGZ and children’s healthcare orientation, and Parenting for broader Dutch family life.",
    },
    {
      q: "Is this medical advice?",
      a: "No. ExpatLife provides general orientation only. Follow your midwife or obstetric team for personal clinical guidance.",
    },
  ],
  relatedGuidesTips: [
    "Prenatal journey → Pregnancy.",
    "Maternity pathways & kraamzorg → Maternity care.",
    "Baby healthcare / JGZ → Healthcare for Children.",
    "Family life culture → Parenting.",
    "Urgent doors → Emergency Healthcare.",
    "Hospital system context → Hospitals.",
    "Pets sibling (weak link) → Pets in the Netherlands.",
  ],
  relatedGuides: [
    {
      label: "Pregnancy",
      href: PREGNANCY_NETHERLANDS_PATH,
      status: "live",
      description: "Prenatal journey — midwife setup, trimester checkpoints and what to prepare before birth day.",
    },
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Verloskundige pathways, registration, insurance and kraamzorg — system companion to birth day.",
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
      description: "Dutch parenting culture and everyday family life.",
    },
    {
      label: "Pets in the Netherlands",
      href: PETS_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday pet life after arrival — housing, vets, insurance orientation, parks etiquette and costs.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112 and urgent care doors when symptoms are acute.",
    },
    {
      label: "Hospitals",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Hospital care context for obstetric and hospital birth pathways.",
    },
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Huisarts registration and primary-care coordination.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package and cover orientation beside maternity pathways.",
    },
  ] satisfies GivingBirthLink[],
  familyHubTips: [
    "Giving birth is the birth-day cornerstone in the Family cluster.",
    "Pregnancy covers the prenatal journey before birth day.",
    "Maternity care remains the system pathway guide under Health.",
    "Healthcare for Children continues baby care after birth.",
    "Pets is the cluster sibling for household animal orientation.",
  ],
  familyHubCards: [
    {
      label: "Giving birth",
      href: GIVING_BIRTH_NETHERLANDS_PATH,
      status: "live",
      description: "Birth day, place of birth, packing and first hours — you are here.",
    },
    {
      label: "Pregnancy",
      href: PREGNANCY_NETHERLANDS_PATH,
      status: "live",
      description: "Prenatal journey — midwife setup and trimester checkpoints before birth day.",
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
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Midwife pathways, registration and kraamzorg awareness.",
    },
    {
      label: "Pets in the Netherlands",
      href: PETS_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday pet life after arrival — housing, vets, etiquette and costs.",
    },
  ] satisfies GivingBirthLink[],
  exploreNextCards: [
    {
      label: "Pregnancy",
      href: PREGNANCY_NETHERLANDS_PATH,
      status: "live",
      description: "Back to the prenatal journey if you are still preparing for birth day.",
    },
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Continue to full maternity pathways and kraamzorg awareness.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Baby and children’s healthcare after birth.",
    },
    {
      label: "Parenting",
      href: PARENTING_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch family life beyond birth day.",
    },
    {
      label: "Pets in the Netherlands",
      href: PETS_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday pet life after arrival — housing, vets, etiquette and costs.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "Know urgent doors if a crisis develops.",
    },
  ] satisfies GivingBirthLink[],
  exploreNextTips: [
    "Still pregnant → Pregnancy.",
    "System pathways → Maternity care.",
    "Baby care → Healthcare for Children.",
    "Family culture → Parenting.",
    "Pets sibling → Pets.",
    "Scary symptoms → Emergency Healthcare.",
  ],
  officialSources: [
    {
      label: "Government.nl — Healthcare",
      href: "https://www.government.nl/topics/health-issues",
      description: "Official Dutch government orientation on health topics",
    },
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Practical official orientation for living in the Netherlands",
    },
    {
      label: "KNOV — Royal Dutch Organisation of Midwives",
      href: "https://www.knov.nl/",
      description: "Professional midwifery association context (verify current public pages)",
    },
    {
      label: "RIVM",
      href: "https://www.rivm.nl/en",
      description: "National Institute for Public Health — public health orientation",
    },
    {
      label: "Zorgverzekeringslijn",
      href: "https://www.zorgverzekeringslijn.nl/",
      description: "Independent orientation on Dutch health insurance questions",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Know place-of-birth options.",
        "Save midwife call cues.",
        "Pack a calm bag early.",
        "Plan partner support for first hours.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Place of birth discussion.",
        "Midwife on call.",
        "Packing list.",
        "Partner role.",
        "Transfer awareness.",
        "First hours after birth.",
      ],
    },
    birthPlaces: {
      title: "From the visual — three places",
      items: [
        "Home when suitable.",
        "Birth centre (geboortecentrum).",
        "Hospital birth pathways.",
        "Suitability is clinical.",
      ],
    },
    callMidwife: {
      title: "From the visual — call cues",
      items: [
        "Use your midwife’s sheet.",
        "Contractions and waters notes.",
        "Concerning symptoms → call promptly.",
        "112 for life-threatening emergencies.",
      ],
    },
    packing: {
      title: "From the visual — packing rails",
      items: [
        "Documents pouch first.",
        "Parent comfort kit.",
        "Baby going-home kit.",
        "Partner overnight kit.",
      ],
    },
    partner: {
      title: "From the visual — partner roles",
      items: [
        "Logistics lead.",
        "Communication lead.",
        "Comfort lead.",
        "Transfer ready.",
      ],
    },
    labourDay: {
      title: "From the visual — labour day flow",
      items: [
        "Early cues.",
        "Call midwife.",
        "Arrive or stay as advised.",
        "Birth with your team.",
      ],
    },
    firstHours: {
      title: "From the visual — first hours",
      items: [
        "Recovery and bonding cues.",
        "Checks for parent and baby.",
        "Feeding support as suitable.",
        "Next doors: kraamzorg / JGZ.",
      ],
    },
    plansChange: {
      title: "From the visual — transfer awareness",
      items: [
        "Transfers can be planned for.",
        "Keep documents ready.",
        "Ask the “what if” story early.",
        "Changed plans are still your birth.",
      ],
    },
    mistakes: {
      title: "From the visual — common mistakes",
      items: [
        "Waiting too long to call.",
        "Packing on the day.",
        "No partner logistics plan.",
        "Ignoring transfer talk.",
      ],
    },
    checklist: {
      title: "From the visual — readiness checklist",
      items: [
        "Numbers saved.",
        "Place discussed.",
        "Bag packed.",
        "Roles and transfer notes ready.",
      ],
    },
  },
  disclosure:
    "General orientation only. ExpatLife does not provide medical advice or rank midwives, hospitals or birth centres. Confirm personal guidance with your midwife or obstetric team.",
} as const;

export type GivingBirthNetherlandsPage = typeof givingBirthNetherlandsPage;

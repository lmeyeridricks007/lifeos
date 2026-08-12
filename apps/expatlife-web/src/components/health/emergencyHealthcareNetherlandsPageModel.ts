export const EMERGENCY_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/emergency-healthcare-netherlands/" as const;
export const GP_NETHERLANDS_PATH = "/netherlands/health/gp-netherlands/" as const;
export const DENTISTS_NETHERLANDS_PATH = "/netherlands/health/dentists-netherlands/" as const;
export const HEALTH_HUB_PATH = "/netherlands/health/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const HEALTHCARE_FOR_CHILDREN_PATH = "/netherlands/family/healthcare-for-children-netherlands/" as const;
export const HEALTHCARE_BASICS_PATH = "/netherlands/living/healthcare-basics/" as const;
export const EMERGENCIES_SAFETY_PATH = "/netherlands/living/emergencies-safety/" as const;
export const HEALTH_SYSTEM_CULTURE_PATH = "/netherlands/culture/health-system-culture-basics/" as const;
export const HOSPITALS_NETHERLANDS_PATH = "/netherlands/health/hospitals-netherlands/" as const;
export const MENTAL_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/mental-healthcare-netherlands/" as const;
export const PHARMACIES_NETHERLANDS_PATH = "/netherlands/health/pharmacies-netherlands/" as const;
export const PRESCRIPTIONS_NETHERLANDS_PATH = "/netherlands/health/prescriptions-netherlands/" as const;

export type EmergencyLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon" | "external";
};

export type TipCard = { title: string; body: string };

export type SnapshotSignal = { label: string; value: string; note: string };

export type MistakeCard = { title: string; body: string; advice: string };

export type TimelineStep = { phase: string; title: string; detail: string };

export type UrgencyRow = {
  situation: string;
  level: "emergency" | "urgent" | "routine";
  action: string;
};

export type ScenarioRow = {
  situation: string;
  approach: string;
  firstStep: string;
};

export type HowToStep = { name: string; text: string };

export type ContactRouteRow = {
  route: string;
  when: string;
  how: string;
  note: string;
};

export type RoleCard = { role: string; focus: string };

/** Comparison across daytime GP, out-of-hours Huisartsenpost and hospital SEH. */
export type ComparisonRow = {
  topic: string;
  gp: string;
  huisartsenpost: string;
  seh: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "premium-v2";
const VISUAL_PREFIX = "emergency-healthcare-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const emergencyHealthcareNetherlandsPage = {
  slug: "emergency-healthcare-netherlands",
  path: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
  hubPath: HEALTH_HUB_PATH,
  parentGuidePath: HEALTHCARE_BASICS_PATH,
  publish: true,
  publishDate: "2027-02-07",
  seo: {
    title: "Emergency Healthcare in the Netherlands | Complete Guide for Expats",
    description:
      "Learn what to do in a medical emergency in the Netherlands, including when to call 112, visit a GP, use a GP cooperative (Huisartsenpost) or go to an emergency department.",
    keywords: [
      "emergency healthcare Netherlands",
      "emergency room Netherlands",
      "ambulance Netherlands",
      "emergency medical care Netherlands",
      "112 Netherlands",
      "GP cooperative",
      "Huisartsenpost",
      "urgent care Netherlands",
      "emergency hospital",
      "emergency doctor Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Health · Emergency Care",
    pageTitle: "Emergency Healthcare in the Netherlands",
    subtitle:
      "Understand exactly what to do during a medical emergency, who to call and which healthcare service to use—from 112 and ambulances to GP cooperatives and emergency departments.",
    primaryCta: { label: "Know What To Do", href: "#decision-tree" },
    secondaryCta: { label: "Understand Dutch Healthcare", href: "#related-guides" },
    chips: ["112", "Huisartsenpost", "SEH", "Ambulance", "Pharmacy", "Dentists"],
    disclaimer:
      "General orientation only — not medical advice, diagnosis or treatment recommendations. For individual concerns, contact a GP, the huisartsenpost or emergency services. Always verify coverage with your insurer. Call 112 for life-threatening emergencies.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic Dutch emergency healthcare scene — modern SEH entrance at blue-hour dusk with a yellow ambulance parked outside, calm paramedic and nurse near the doors, warm lobby light, and canal houses softly visible across the street, with no graphic injuries.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#decision-tree", label: "Decision tree" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#calling-112", label: "Calling 112" },
    { href: "#comparison", label: "GP vs post vs SEH" },
    { href: "#huisartsenpost", label: "Huisartsenpost" },
    { href: "#seh", label: "Emergency dept" },
    { href: "#ambulance", label: "Ambulance" },
    { href: "#children", label: "Children" },
    { href: "#mental-health", label: "Mental health" },
    { href: "#pharmacy", label: "Pharmacy" },
    { href: "#dentists", label: "Dentists" },
    { href: "#costs", label: "Costs" },
    { href: "#surprises", label: "Surprises" },
    { href: "#preparation", label: "Preparation" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#healthcare-hub", label: "Health hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Before An Emergency Happens — four building blocks for urgent care in the Netherlands: save 112 and your regional huisartsenpost number, register a huisarts near home, know that SEH is not the default walk-in, and keep ID plus insurance details ready — with an Emergency file rail listing BSN, insurer card, GP name and postcode address.",
      "Four building blocks cover emergency readiness: numbers saved, a GP registered, the right door chosen, and ID plus insurance ready to hand."
    ),
    decisionTree: visual(
      "decision-tree",
      "Premium emergency decision flow — life-threatening situations to 112, daytime GP for urgent non-emergency care when the practice is open, huisartsenpost when the practice is closed, and SEH when triage or ambulance directs you there.",
      "Start with severity: 112 if life may be at risk, otherwise your GP by day or the huisartsenpost after hours."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch emergency care — 112, daytime GP, Huisartsenpost, SEH emergency department, ambulance and emergency pharmacy — each with a one-line role description.",
      "Six doors cover almost every urgent situation — the sections below explain when each one fits."
    ),
    calling112: visual(
      "calling-112",
      "Premium 112 call board — location first, what is wrong, who needs help, language note that operators can work in English, and a reminder that 112 reaches ambulance, fire and police.",
      "Call 112 for life-threatening emergencies — give your location first, then what is wrong."
    ),
    comparison: visual(
      "comparison",
      "Premium three-column comparison of daytime GP, Huisartsenpost and hospital SEH across opening hours, purpose, referral, typical situations and emergency level.",
      "Same concern, three doors — choose by severity and whether your GP practice is open."
    ),
    huisartsenpost: visual(
      "huisartsenpost",
      "Premium huisartsenpost board — evenings, nights, weekends and public holidays, call-first telephone triage, advice or appointment outcomes, home visits when needed, and escalation to hospital when indicated.",
      "Outside practice hours, call the regional huisartsenpost first for urgent non-life-threatening care."
    ),
    seh: visual(
      "seh",
      "Premium SEH pathway diagram — ambulance arrival, GP or huisartsenpost referral, triage by severity, assessment and specialist treatment, with a note that walk-in primary care is usually redirected.",
      "Hospital emergency departments prioritise by severity — many patients arrive by ambulance or with a referral."
    ),
    ambulance: visual(
      "ambulance",
      "Premium ambulance response board — call assessment, on-scene treatment by ambulance professionals, transport to hospital when needed, and a note that not every assessed patient is transported.",
      "Ambulances provide medical assessment and treatment — transport follows clinical need, not automatically."
    ),
    children: visual(
      "children",
      "Premium child emergency decision chart linking 112, huisartsenpost and daytime GP with a cross-link card to the Healthcare for Children guide for paediatric pathways.",
      "Children use the same three doors — with paediatric triage and a dedicated family healthcare guide."
    ),
    mentalHealth: visual(
      "mental-health",
      "Premium mental health crisis orientation board — 112 for immediate danger, 113 for suicidal thoughts support, GP or huisartsenpost for urgent non-life-threatening concerns, and regional crisis services when indicated.",
      "Crisis routes exist alongside routine GP mental health support — use 112 when there is immediate danger."
    ),
    pharmacy: visual(
      "pharmacy",
      "Premium emergency pharmacy map — daytime apotheek, regional dienstapotheek after hours, and a note that the huisartsenpost usually tells you which out-of-hours pharmacy serves your area.",
      "Urgent medicines outside hours go through the regional dienstapotheek after triage guidance."
    ),
    dentists: visual(
      "dentists",
      "Premium dental emergency flow — daytime tandarts, regional out-of-hours dental service, and 112 or hospital A&E for airway-threatening swelling, uncontrolled bleeding or major facial trauma — with a cross-link to the Dentists guide.",
      "Dental urgency has its own pathway — link to the Dentists guide for full detail."
    ),
    costs: visual(
      "costs",
      "Premium cost orientation board about basic insurance, eigen risico for many hospital and ambulance pathways, children's coverage differences, and a reminder to verify current terms with your insurer — no hardcoded fee amounts.",
      "Coverage and deductible rules matter more than memorising prices — verify with your insurer."
    ),
    surprises: visual(
      "surprises",
      "Premium surprise cards for expats — GP as first contact, severity triage at SEH, call-first telephone triage, ambulance professionals on scene, and not every emergency meaning hospital admission.",
      "Expect triage and stepped care — once you know the pattern, urgent evenings feel far less chaotic."
    ),
    preparation: visual(
      "preparation",
      "Premium emergency preparation checklist board — GP registered, huisartsenpost number saved, nearest hospital noted, address ready, insurance card and ID carried, household emergency contacts listed.",
      "Prepare once, calmly — so the right door is obvious when something happens."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with Fix advice cards — walking into SEH for primary care, skipping GP registration, misusing 112, not knowing after-hours routes, and waiting too long in a genuine emergency.",
      "Each common mistake includes a practical Fix — clarity reduces delay when speed matters."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with readable question and answer pairs on 112, Huisartsenpost, SEH access, ambulance orientation, English language support and tourist emergency care.",
      "Orientation answers only — confirm your own situation with clinicians, insurers and official sources."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking Emergency Healthcare to the GP guide, health insurance, healthcare for children, dentists, healthcare basics and emergencies and safety.",
      "Emergency care connects to your GP, insurance and family planning — read them together."
    ),
    healthcareHub: visual(
      "healthcare-hub",
      "Premium healthcare cluster ecosystem diagram with Emergency Healthcare at the centre, connected to GP, insurance, dentists, children's healthcare, healthcare basics and emergencies and safety.",
      "This page is the emergency-care cornerstone — explore the wider healthcare cluster next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from Emergency Healthcare to the GP guide, health insurance, healthcare for children, dentists and emergencies and safety, with official source cards for Government.nl, 112, Rijksoverheid and NZa.",
      "Continue with GP registration and insurance setup — and verify details on the official sources."
    ),
  },
  quickAnswer: {
    heading: "Quick answer: what to do in a medical emergency",
    summary:
      "If someone has a life-threatening medical emergency in the Netherlands, call 112 immediately. For urgent medical problems that are not life-threatening, contact your GP during opening hours or the regional GP cooperative (Huisartsenpost) when the practice is closed. Hospital emergency departments (SEH) are generally intended for serious emergencies — many patients are first assessed through a GP or huisartsenpost referral unless arriving by ambulance or in an acute emergency.",
    bullets: [
      "Call 112 immediately for life-threatening emergencies — operators can work in English.",
      "During GP opening hours, contact your huisarts for urgent but non-life-threatening problems.",
      "Outside practice hours, call the regional Huisartsenpost for urgent GP-level care.",
      "SEH / A&E is generally for serious emergencies and referred or ambulance arrivals — not routine walk-in primary care.",
      "Save your GP number, huisartsenpost number and 112 in your phone before you need them.",
    ],
    note: "If you are unsure whether a situation is life-threatening, call 112 — triage exists to assess with you. This guide never tells you to delay emergency help when life may be at risk.",
  },
  introParagraphs: [
    "Emergency healthcare in the Netherlands is organised as a set of clear doors rather than a single walk-in hospital entrance. Life-threatening situations go to 112. Urgent problems that are not life-threatening usually go to your huisarts by day or the regional Huisartsenpost after hours. Hospital emergency departments (spoedeisende hulp, SEH) focus on serious emergencies and referred or ambulance arrivals.",
    "That structure can feel unfamiliar if you are used to emergency rooms as the default after-hours option. Once you know which door matches severity — and you have the numbers saved — most stressful evenings become more manageable. The system is designed to get the right help quickly, not to make people wait when they are in danger.",
    "This guide is calm, practical orientation for expats, students, tourists and newcomers: how to choose between 112, the GP, the Huisartsenpost and SEH; what happens when you call an ambulance; how emergency pharmacies and dentists fit in; what costs and insurance usually mean; and how to prepare before anything goes wrong. It is not medical advice — for your own situation, contact a clinician or call 112 in an emergency.",
  ],
  orientationFlowSteps: [
    "Save 112 and your regional huisartsenpost number now — before the first difficult evening.",
    "Register with a huisarts near home so daytime urgent care has a clear owner.",
    "Learn the three-door pattern: 112 for life-threatening, GP or Huisartsenpost for urgent non-emergency care, SEH for serious emergency pathways.",
    "Keep ID, insurance details and your exact address ready to share under pressure.",
  ],
  introHighlights: [
    "112 is the national emergency number for life-threatening situations — use it without waiting for a GP slot.",
    "Urgent but non-life-threatening care usually starts with your GP or the Huisartsenpost, not a hospital walk-in.",
    "SEH departments triage by severity and often expect ambulance arrival or a referral.",
    "Preparation is simple: numbers saved, GP registered, ID and insurance details to hand.",
  ],
  safetyFileChecklist: [
    "112 saved in every household phone",
    "Regional Huisartsenpost number and address",
    "Own GP practice daytime number",
    "Exact home address and how to reach the entrance",
    "Insurer name, policy number and a photo of your insurance card",
    "BSN and ID details",
    "Current medication and allergy list",
    "Emergency contact person and callback number",
  ],
  introScenarios: [
    {
      situation: "Someone collapses or cannot breathe",
      approach: "Treat this as a life-threatening emergency — do not wait for a GP appointment or search for a hospital entrance.",
      firstStep: "Call 112 immediately and give your exact location first.",
    },
    {
      situation: "High fever and severe pain on a Sunday evening",
      approach: "Urgent but not clearly life-threatening care usually starts with the Huisartsenpost telephone triage line.",
      firstStep: "Call your regional huisartsenpost number and describe onset, severity and what specifically worries you.",
    },
    {
      situation: "Same concern during GP opening hours",
      approach: "Contact your own huisarts practice for same-day triage rather than going straight to SEH.",
      firstStep: "Call the practice urgent line or follow the practice's same-day booking route.",
    },
    {
      situation: "Just arrived and not yet registered with a GP",
      approach: "Still use 112 for life-threatening emergencies. For urgent non-emergency care after hours, call the regional huisartsenpost; register a GP as soon as you can.",
      firstStep: "Save the local huisartsenpost number today and start GP registration this week.",
    },
  ] satisfies ScenarioRow[],
  decisionTree: {
    heading: "Emergency decision tree: which door should you use?",
    intro:
      "When something feels urgent, start with one question: could this be life-threatening right now? If yes — or if you are unsure and life may be at risk — call 112. If not, the next question is whether your GP practice is open.",
    paragraphs: [
      "The Dutch pathway is designed to match severity to the right service quickly. Calling the Huisartsenpost or your GP first for non-life-threatening problems is not a delay tactic — it is often the fastest route to advice, an urgent appointment or a referral into hospital care when needed.",
      "If symptoms worsen while you are waiting for a callback or appointment, reassess. A situation that started as urgent can become an emergency — call 112 if life may now be at risk.",
    ],
    steps: [
      {
        phase: "1",
        title: "Is it life-threatening?",
        detail: "Unresponsiveness, severe breathing difficulty, heavy bleeding, stroke signs, severe allergic reaction, major trauma, chest pain with worrying features — call 112 now.",
      },
      {
        phase: "2",
        title: "If not life-threatening: is your GP open?",
        detail: "During practice hours, contact your huisarts for urgent same-day triage, advice or an appointment.",
      },
      {
        phase: "3",
        title: "If the practice is closed",
        detail: "Call the regional Huisartsenpost. Telephone triage may give advice, invite you in, arrange a home visit or escalate.",
      },
      {
        phase: "4",
        title: "When SEH becomes the next step",
        detail: "Follow ambulance transport or a GP / huisartsenpost referral into the hospital emergency department when that is the indicated pathway.",
      },
    ] satisfies TimelineStep[],
    flowLabels: ["Life-threatening?", "Call 112", "GP open?", "Huisartsenpost", "SEH if directed"],
    urgencyRows: [
      { situation: "Unresponsiveness, severe breathing difficulty, or suspected stroke", level: "emergency", action: "Call 112 immediately." },
      { situation: "Heavy bleeding, severe allergic reaction, or major trauma", level: "emergency", action: "Call 112 immediately." },
      { situation: "Chest pain with worrying features", level: "emergency", action: "Call 112 — do not wait for a GP appointment." },
      { situation: "High fever with rapid worsening outside practice hours", level: "urgent", action: "Call the huisartsenpost for triage." },
      { situation: "Severe pain or acute injury that cannot wait until morning", level: "urgent", action: "Call the huisartsenpost; they may advise the post, a visit or escalation." },
      { situation: "Urgent prescription need outside hours", level: "urgent", action: "Call the huisartsenpost — urgent dispensing may go via the dienstapotheek." },
      { situation: "Mild cold, minor symptoms, routine follow-up", level: "routine", action: "Book a normal GP appointment or use e-consult if offered." },
      { situation: "Non-urgent specialist discussion", level: "routine", action: "Book a planned GP consult rather than using emergency routes." },
    ] satisfies UrgencyRow[],
    decisionTips: [
      "112 = life-threatening now, or you are unsure and life may be at risk.",
      "Own GP = urgent non-emergency care during opening hours.",
      "Huisartsenpost = urgent, cannot wait for practice hours, not clearly life-threatening.",
      "SEH = serious emergency pathway via ambulance or referral in many cases.",
      "If unsure between 112 and the post, call 112 when life could be at risk.",
    ],
    howToSteps: [
      {
        name: "Assess whether life may be at risk",
        text: "If someone is unresponsive, cannot breathe adequately, has heavy bleeding, stroke signs, a severe allergic reaction, major trauma or other life-threatening features — or you are unsure and life may be at risk — call 112 immediately.",
      },
      {
        name: "Call 112 for life-threatening emergencies",
        text: "Give your exact location first, then explain what is wrong, who needs help and a callback number. Stay on the line and follow the operator's instructions.",
      },
      {
        name: "If not life-threatening, check whether your GP is open",
        text: "During practice hours, contact your huisarts for same-day urgent triage rather than walking into a hospital emergency department.",
      },
      {
        name: "Outside practice hours, call the Huisartsenpost",
        text: "Use your regional out-of-hours GP cooperative number. Describe the main symptom, how fast it started and what specifically worries you.",
      },
      {
        name: "Follow triage advice",
        text: "Accept advice, an appointment at the post, a home visit or escalation to hospital when that is the outcome of triage.",
      },
      {
        name: "Go to SEH when directed or arriving by ambulance",
        text: "Hospital emergency departments prioritise by severity. Bring ID, insurance details and a medication list when you are able to.",
      },
      {
        name: "Reassess if symptoms worsen",
        text: "If the situation becomes life-threatening while waiting, call 112 immediately — do not wait for a previously arranged slot.",
      },
    ] satisfies HowToStep[],
  },
  snapshotSignals: [
    { label: "Life-threatening", value: "Call 112", note: "National emergency number for ambulance, fire and police." },
    { label: "Daytime urgent", value: "Your GP", note: "Contact the huisarts during opening hours for non-life-threatening urgency." },
    { label: "Out of hours", value: "Huisartsenpost", note: "Regional GP cooperative — call first for triage." },
    { label: "Serious emergency", value: "SEH / ambulance", note: "Hospital emergency pathway, often via ambulance or referral." },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "112",
      body: "National emergency number for life-threatening situations. Reaches ambulance, fire and police. Operators can work in English.",
    },
    {
      title: "GP (huisarts)",
      body: "First contact for urgent non-life-threatening problems during practice opening hours, including same-day triage.",
    },
    {
      title: "Huisartsenpost",
      body: "Regional out-of-hours GP cooperative for evenings, nights, weekends and public holidays — call first.",
    },
    {
      title: "Emergency Department (SEH)",
      body: "Hospital spoedeisende hulp for serious emergencies, typically via ambulance or referral rather than routine walk-in.",
    },
    {
      title: "Ambulance",
      body: "Emergency medical response with on-scene assessment and treatment; transport follows clinical need.",
    },
    {
      title: "Emergency Pharmacy",
      body: "Regional dienstapotheek for urgent medicines outside normal pharmacy hours, usually after triage guidance.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Save 112 and your regional huisartsenpost number before the first difficult evening.",
    "Register with a GP early — daytime urgent care works best when you already have a practice.",
    "SEH is not the default substitute for primary care after hours.",
    "Keep a photo of your insurance card and a medication list on your phone.",
    "Agree a household plan for who calls and who meets responders at the door.",
    "If unsure and life may be at risk, call 112 — triage would rather assess an unnecessary call than a delayed one.",
  ],
  calling112: {
    heading: "Calling 112",
    paragraphs: [
      "112 is the European emergency number used in the Netherlands for life-threatening situations. One call can reach ambulance, fire and police. You do not need to decide which service is needed before dialling — the operator helps route the response.",
      "Operators can work in English. Start with your location: full address, building name, floor, entrance, nearby landmark or GPS pin if you are outside. Then explain what is wrong, who needs help, approximate age, and whether the person is breathing, conscious or bleeding heavily.",
      "Stay on the line. Follow instructions on speakerphone if you need your hands free. If you called from a mobile, keep the phone available for a callback. After the call, someone should meet responders at the entrance when it is safe to do so.",
    ],
    whenToCall: [
      "Unresponsiveness or sudden collapse",
      "Severe difficulty breathing",
      "Signs of a possible stroke",
      "Heavy, uncontrolled bleeding",
      "Severe allergic reaction with breathing or swelling concerns",
      "Major trauma or serious traffic injury",
      "Chest pain with worrying features",
      "Any situation where you believe life may be at immediate risk",
    ],
    whatToSay: [
      "Exact address and how to reach the door or entrance",
      "What happened and how fast it started",
      "Age of the person who needs help",
      "Breathing, consciousness, bleeding, chest pain or stroke-sign concerns",
      "Medication already taken and known allergies, if known",
      "A callback number that will be answered",
    ],
    services: [
      { role: "Ambulance", focus: "Medical emergencies needing urgent assessment, treatment and possible hospital transport." },
      { role: "Fire", focus: "Fire, rescue and related emergency response coordinated through the same 112 entry point." },
      { role: "Police", focus: "Immediate danger, serious incidents and public-safety emergencies." },
    ] satisfies RoleCard[],
    afterCalling: [
      "Stay on the line until the operator says you may hang up.",
      "Follow first-aid or safety instructions given by the operator.",
      "Send someone to the entrance with a phone light if it helps responders find you.",
      "Gather ID, insurance card and medication list if someone can do so safely.",
      "Do not leave the person alone if they are unstable, unless you must open access for responders.",
    ],
    languageNote:
      "You can ask for English. Speak clearly, one fact at a time. Location first remains the priority even if language feels stressful.",
    tips: [
      "Save 112 in your phone under a clear label — everyone in the household should know it.",
      "Share your live location with a trusted contact if you are alone and able to.",
      "If you misdialled and there is no emergency, stay on the line and explain — hanging up can trigger a callback check.",
      "Tourists and newcomers use the same number — residency is not required to call 112 in an emergency.",
    ],
    scenarios: [
      {
        situation: "You are unsure whether it is serious enough for 112",
        approach: "If life may be at risk, call 112. Operators and ambulance triage exist to assess urgency with you.",
        firstStep: "Call 112 and describe what you see, including breathing and consciousness.",
      },
      {
        situation: "You do not speak Dutch",
        approach: "Call anyway — ask for English and keep sentences short and factual.",
        firstStep: "State the address first, then the main problem in plain English.",
      },
      {
        situation: "You are not at home",
        approach: "Use landmarks, street names, building numbers, station names or a maps pin.",
        firstStep: "Look for a street sign or entrance number while the call connects.",
      },
    ] satisfies ScenarioRow[],
  },
  comparison: {
    heading: "GP vs Huisartsenpost vs Emergency Department (SEH)",
    intro:
      "Most expat confusion comes from treating these three services as interchangeable. They are not. Each has a different purpose, access route and urgency level.",
    paragraphs: [
      "Your daytime GP handles urgent non-life-threatening problems while the practice is open. The Huisartsenpost extends that GP-level role into evenings, nights, weekends and public holidays through call-first triage. The hospital SEH focuses on serious emergencies and higher-acuity care.",
      "Using the comparison below as orientation — not as a self-diagnosis tool — helps you choose faster under pressure.",
    ],
    rows: [
      {
        topic: "Opening hours",
        gp: "Practice opening hours on working days",
        huisartsenpost: "Evenings, nights, weekends and public holidays",
        seh: "24/7 hospital emergency department",
      },
      {
        topic: "Purpose",
        gp: "Primary care, same-day urgency and coordination",
        huisartsenpost: "Urgent GP-level care when the practice is closed",
        seh: "Serious emergencies and high-acuity assessment",
      },
      {
        topic: "How you access care",
        gp: "Phone, online booking or e-consult",
        huisartsenpost: "Call regional number first for triage",
        seh: "Often ambulance arrival or referral; walk-in primary care commonly redirected",
      },
      {
        topic: "Referral needed",
        gp: "No — you contact your own practice",
        huisartsenpost: "No referral to call; may refer you onward to hospital",
        seh: "Many non-ambulance arrivals are expected to come via GP or post referral",
      },
      {
        topic: "Typical situations",
        gp: "Fever, infections, injuries and urgent daytime concerns that are not life-threatening",
        huisartsenpost: "Same type of urgent GP problems outside practice hours",
        seh: "Major trauma, acute life-threatening illness, ambulance arrivals and referred emergencies",
      },
      {
        topic: "Costs orientation",
        gp: "Usually within basic insurance primary-care rules",
        huisartsenpost: "Urgent GP-level pathway; verify insurer details for your policy",
        seh: "Hospital emergency care may involve your annual deductible (eigen risico)",
      },
      {
        topic: "Waiting / triage",
        gp: "Practice assistant triage; same-day slots when clinically needed",
        huisartsenpost: "Telephone triage first, then advice, appointment or escalation",
        seh: "Severity triage — the most urgent patients are seen first",
      },
      {
        topic: "Emergency level",
        gp: "Urgent non-emergency primary care",
        huisartsenpost: "Urgent non-life-threatening out-of-hours care",
        seh: "Serious / life-threatening emergency pathway",
      },
    ] satisfies ComparisonRow[],
    tips: [
      "Match the door to severity first, opening hours second.",
      "Call-first is normal for the Huisartsenpost — walking in without calling often slows you down.",
      "If life may be at risk, skip the comparison and call 112.",
      "Ask triage what happens next: advice, appointment, home visit, pharmacy route or hospital.",
    ],
    checklist: [
      "Decide severity first — life-threatening means 112, not a comparison table",
      "Know whether your GP practice is open right now",
      "Have the regional huisartsenpost number saved for when it is closed",
      "Expect SEH to prioritise serious emergencies and redirect primary-care walk-ins",
      "Bring ID and insurance details if you are directed to the post or SEH",
    ],
    scenarios: [
      {
        situation: "Fever and ear pain at 10:00 on a weekday",
        approach: "Contact your own GP for same-day triage rather than going to SEH.",
        firstStep: "Call the practice urgent line and state onset, severity and your main worry.",
      },
      {
        situation: "Same symptoms at 22:00 on a Sunday",
        approach: "Call the Huisartsenpost for out-of-hours GP-level triage.",
        firstStep: "Use the saved regional number and follow telephone triage advice.",
      },
      {
        situation: "Chest pain with worrying features now",
        approach: "Skip GP vs post comparisons — treat as a potential emergency.",
        firstStep: "Call 112 immediately and give your location first.",
      },
    ] satisfies ScenarioRow[],
    crossLink: {
      label: "General Practitioner (GP) in the Netherlands",
      href: GP_NETHERLANDS_PATH,
      description:
        "How daytime huisarts registration, appointments and referrals work when the situation is urgent but not life-threatening.",
      status: "live" as const,
    },
  },
  huisartsenpost: {
    heading: "Huisartsenpost (out-of-hours GP cooperative)",
    paragraphs: [
      "When your own GP practice is closed — evenings, nights, weekends and public holidays — urgent GP-level care is organised through the regional Huisartsenpost (GP cooperative / out-of-hours GP post). You call first. A trained triage nurse assesses urgency and may give advice, arrange a phone consult, invite you to the post, organise a home visit or escalate toward hospital care.",
      "Hospital emergency departments are generally for emergencies and referred urgent care, not for routine after-hours primary care. Walking in with a non-emergency problem often results in redirection to the huisartsenpost pathway.",
      "Find your regional number once your address is known and save it beside 112. Your GP practice website or assistant can tell you which post covers your area. Posts are often near a hospital but use a separate entrance.",
    ],
    points: [
      "Call first — telephone triage is the normal entry point.",
      "Covers evenings, nights, weekends and public holidays.",
      "Outcomes can include advice, an appointment at the post, a home visit or escalation.",
      "Bring ID, insurance details and a medication list if you are invited in.",
      "If symptoms become life-threatening while waiting, call 112 immediately.",
      "Follow up with your own GP the next working day when triage advises it.",
    ],
    findNumberTips: [
      "Check your GP website spoed / urgent-care page, ask the practice assistant, or search huisartsenpost + your postcode.",
      "Save the number, address and any entrance note — posts are often at a separate hospital entrance.",
      "What to say: location, age, symptom, onset speed, breathing or consciousness concerns, medication and allergies.",
      "Ask which dienstapotheek applies if an urgent medicine is needed.",
    ],
    contrastRows: [
      { route: "Own GP (daytime)", when: "Practice opening hours", how: "Phone, online booking or e-consult", note: "Best for routine and same-day non-emergency care." },
      { route: "Huisartsenpost", when: "Evenings, nights, weekends, public holidays", how: "Call regional number first for triage", note: "Urgent GP-level care that cannot wait for the practice to reopen." },
      { route: "112", when: "Life-threatening emergency", how: "Call immediately", note: "Unresponsiveness, severe breathing difficulty, heavy bleeding, stroke signs, severe allergic reaction and similar crises." },
    ] satisfies ContactRouteRow[],
    checklist: [
      "Regional huisartsenpost number saved in every adult's phone",
      "Post address and entrance notes stored with the number",
      "Household knows to call first rather than walking into SEH for primary care",
      "ID, insurance card photo and medication list ready to take if invited in",
    ],
    tips: [
      "Describe the main symptom in one sentence, then timing and what worries you most.",
      "Say if a child, pregnancy, recent surgery or chronic condition is relevant.",
      "Ask explicitly whether you should go to the post, stay home, collect medicine or call 112 instead.",
      "Keep the callback number free — triage may call back.",
    ],
    scenarios: [
      {
        situation: "Child with high fever on Saturday night",
        approach: "Call the huisartsenpost for paediatric triage rather than driving to SEH by default.",
        firstStep: "Have the child's age, temperature trend and fluid intake ready when you call.",
      },
      {
        situation: "Urgent medicine needed after pharmacy closing time",
        approach: "Call the huisartsenpost — they can advise whether a dienstapotheek route is appropriate.",
        firstStep: "State the medicine name, why it cannot wait, and any allergies.",
      },
      {
        situation: "Triage invites you to the post",
        approach: "Go to the stated entrance with ID and insurance details; do not assume it is the main hospital lobby.",
        firstStep: "Confirm the address and entrance before you leave.",
      },
    ] satisfies ScenarioRow[],
  },
  seh: {
    heading: "Emergency departments (SEH)",
    paragraphs: [
      "Dutch hospital emergency departments are called spoedeisende hulp (SEH). They are organised for serious emergencies and high-acuity care. Patients are triaged by severity, so waiting times vary — the most urgent cases are seen first.",
      "Many people arrive by ambulance or with a referral from a GP or Huisartsenpost. Self-referral walk-ins with primary-care problems are commonly redirected to the appropriate GP-level pathway. That is a system design choice, not a refusal of genuine emergency care.",
      "If you are directed to SEH, bring ID, insurance details, a medication and allergy list, and a short timeline of what happened. Ask who will receive the discharge information and whether you should contact your own GP afterward.",
    ],
    points: [
      "SEH prioritises by clinical urgency, not by arrival order alone.",
      "Ambulance arrival and GP / huisartsenpost referrals are common access routes.",
      "Expect triage questions about breathing, consciousness, pain, bleeding and onset speed.",
      "Not every SEH visit leads to hospital admission.",
      "Language support varies — ask for English and keep a written symptom summary if helpful.",
      "Follow discharge advice and contact your GP when told to do so.",
    ],
    pathwayCards: [
      {
        title: "Arrival by ambulance",
        body: "Ambulance professionals assess on scene, treat as needed and transport to an appropriate hospital when clinically indicated.",
      },
      {
        title: "Referral pathway",
        body: "A GP or Huisartsenpost may refer you to SEH after triage when hospital emergency assessment is the right next step.",
      },
      {
        title: "Triage and treatment",
        body: "SEH staff assess urgency, then provide emergency diagnostics and treatment, involving specialists when needed.",
      },
      {
        title: "Aftercare",
        body: "You may be discharged with advice, observed further, admitted, or directed back to GP follow-up.",
      },
    ] satisfies TipCard[],
    whatToBring: [
      "ID / residence documents",
      "Insurance card or clear photo of policy details",
      "Medication list with generic names and doses",
      "Allergy list",
      "Phone with a charged battery and emergency contact",
      "Any referral notes or messages from the GP or huisartsenpost",
    ],
    tips: [
      "If life may be at risk and you have not called yet, call 112 rather than driving yourself when unsafe.",
      "Tell triage the single most worrying feature first.",
      "Ask for an interpreter or English-speaking clinician if communication is difficult.",
      "Keep copies or photos of discharge papers for your GP and insurer.",
    ],
    scenarios: [
      {
        situation: "Huisartsenpost refers you to SEH",
        approach: "Follow the referral instructions exactly — entrance, timing and what to tell triage.",
        firstStep: "Confirm whether you should travel yourself or await further transport advice.",
      },
      {
        situation: "Long wait after triage",
        approach: "Severity triage means less urgent cases wait longer — tell staff immediately if symptoms worsen.",
        firstStep: "Ask what symptom changes should trigger an immediate re-check.",
      },
    ] satisfies ScenarioRow[],
  },
  ambulance: {
    heading: "Ambulance services",
    paragraphs: [
      "Ambulances in the Netherlands are emergency medical responses, not only transport vehicles. Crews assess the situation, provide treatment on scene and decide whether hospital transport is needed. Not every assessed patient is transported — that decision is clinical.",
      "You usually reach ambulance care by calling 112. Give a clear location and describe what is wrong. The dispatch centre may give instructions while help is on the way.",
      "When the ambulance arrives, make access easy: lights on, entrance unlocked if safe, someone waiting outside when possible. Share medication, allergy and medical-history details if you know them.",
    ],
    timeline: [
      { phase: "1", title: "Call and dispatch", detail: "112 takes location and urgency details and mobilises the appropriate response." },
      { phase: "2", title: "On-scene assessment", detail: "Ambulance professionals evaluate the patient and begin treatment as needed." },
      { phase: "3", title: "Treatment decision", detail: "Care may continue on scene, with transport, or with advice that another pathway fits better." },
      { phase: "4", title: "Hospital coordination", detail: "If transport is needed, the crew coordinates with an appropriate emergency department." },
    ] satisfies TimelineStep[],
    points: [
      "Call 112 for ambulance response in life-threatening emergencies.",
      "Crews treat as well as transport — transport is not automatic.",
      "Clear access and a precise address speed the response.",
      "Share medicines, allergies and what changed just before the emergency.",
      "Costs and insurance interactions vary — verify with your insurer after the event; never delay calling when life is at risk.",
    ],
    tips: [
      "Do not wait to tidy the house or find paperwork before calling if life may be at risk.",
      "If you are alone, put the phone on speaker and unlock the door when the operator advises it.",
      "Tell responders about pregnancy, recent surgery, epilepsy, heart conditions or blood thinners when relevant.",
      "Ask which hospital you are going to and who should be contacted.",
    ],
    scenarios: [
      {
        situation: "Ambulance assesses but does not transport",
        approach: "Follow the safety-net advice you are given — including when to call back or contact the huisartsenpost or GP.",
        firstStep: "Write down the advice and any recommended next contact before the crew leaves.",
      },
      {
        situation: "You called for someone else",
        approach: "Stay until responders arrive if safe, and pass on what you observed.",
        firstStep: "Note the time symptoms started and any medicines already taken.",
      },
    ] satisfies ScenarioRow[],
    checklist: [
      "Exact address and entrance ready before or during the 112 call",
      "Lights on and access clear if safe to do so",
      "Medication and allergy details available to share",
      "Someone waiting outside when possible",
      "Phone on speaker if you are alone and need hands free",
    ],
    contrastRows: [
      {
        route: "Ambulance via 112",
        when: "Life-threatening or dispatcher decides emergency response is needed",
        how: "Call 112 and follow operator instructions",
        note: "Crews assess and treat on scene; transport is clinical, not automatic.",
      },
      {
        route: "Self-travel to SEH",
        when: "Only when triage or clinical advice says it is safe and appropriate",
        how: "Follow the referring clinician's entrance and timing instructions",
        note: "Do not drive yourself if unsafe; call 112 if the situation worsens.",
      },
      {
        route: "Huisartsenpost / GP",
        when: "Urgent but not life-threatening after assessment",
        how: "Call the appropriate GP-level number",
        note: "Ambulance advice may redirect you here when hospital transport is not needed.",
      },
    ] satisfies ContactRouteRow[],
    whenInDoubt:
      "If you are unsure whether someone needs an ambulance, call 112 — dispatch triage exists to assess with you. Do not delay when life may be at risk.",
  },
  children: {
    heading: "Child emergencies",
    paragraphs: [
      "Children use the same three doors as adults: 112 for life-threatening emergencies, the Huisartsenpost for urgent out-of-hours GP-level care, and the daytime huisarts for non-life-threatening urgency during practice hours. Paediatric triage questions often focus on breathing, alertness, fluid intake, fever pattern and how quickly the child has changed.",
      "Parents sometimes feel pressure to go straight to hospital. In the Dutch system, calling first is often the fastest way to the right place — and if the situation is life-threatening, 112 remains the correct first call.",
      "For the full children's healthcare pathway — GP care, Youth Healthcare (JGZ), vaccinations, hospitals and family setup — use the Healthcare for Children guide.",
    ],
    points: [
      "Call 112 for life-threatening childhood emergencies without waiting.",
      "Outside practice hours, call the huisartsenpost for urgent but non-life-threatening concerns.",
      "Register children with a family GP before the first fever evening.",
      "Bring vaccination records and known allergies when seeking urgent care.",
      "Ask triage what warning signs mean you should call back immediately.",
    ],
    cards: [
      {
        title: "112 for life-threatening",
        body: "Unresponsive, severe breathing difficulty, major trauma or rapid dangerous deterioration — call immediately.",
      },
      {
        title: "Huisartsenpost after hours",
        body: "Urgent paediatric concerns when the family GP is closed — call first for telephone triage.",
      },
      {
        title: "Daytime family GP",
        body: "Same-day urgent concerns during practice hours; continuity helps when the child is known to the practice.",
      },
      {
        title: "JGZ is not emergency care",
        body: "Youth Healthcare handles growth checks and many vaccinations — it does not replace urgent GP or 112 pathways.",
      },
    ] satisfies TipCard[],
    urgencyRows: [
      { situation: "Child unresponsive, severe breathing difficulty or major trauma", level: "emergency", action: "Call 112 immediately." },
      { situation: "Infant under three months with fever", level: "urgent", action: "Seek urgent clinical triage the same day — GP or huisartsenpost; call 112 if the child deteriorates." },
      { situation: "High fever with rapid worsening outside practice hours", level: "urgent", action: "Call the huisartsenpost for triage." },
      { situation: "Mild cold symptoms in an otherwise well child", level: "routine", action: "Use routine GP advice routes or next available appointment unless warning signs appear." },
    ] satisfies UrgencyRow[],
    prepareChecklist: [
      "Child's age and weight if known",
      "Fever timeline and any medicines already given",
      "Fluid intake and wet nappies / toilet output",
      "Breathing and alertness changes",
      "Allergy and medication list",
      "Insurance card and ID for the accompanying adult",
    ],
    scenarios: [
      {
        situation: "Toddler with high fever on Saturday evening",
        approach: "Call the huisartsenpost for paediatric triage rather than defaulting to SEH.",
        firstStep: "Have age, temperature trend, fluids and alertness ready when you call.",
      },
      {
        situation: "Child suddenly floppy or hard to wake",
        approach: "Treat as a potential emergency — do not wait for a routine appointment.",
        firstStep: "Call 112 immediately and stay on the line.",
      },
      {
        situation: "School reports an injury during GP opening hours",
        approach: "Call the family GP for same-day triage unless life-threatening features are present.",
        firstStep: "Ask what the school has already observed and whether breathing is affected.",
      },
    ] satisfies ScenarioRow[],
    crossLink: {
      label: "Healthcare for Children in the Netherlands",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      description:
        "Complete orientation for expat families — GP care for children, Youth Healthcare (JGZ), vaccinations, specialists, dental care and emergencies.",
      status: "live" as const,
    },
    tips: [
      "Save 112 and the huisartsenpost number in every parent's and caregiver's phone.",
      "Agree who calls and who stays with the child before an emergency happens.",
      "Trust observed change — a suddenly floppy or hard-to-wake child needs urgent help.",
      "Use the children's healthcare guide for prevention and routine setup alongside this emergency page.",
    ],
  },
  mentalHealth: {
    heading: "Mental health crises (orientation)",
    paragraphs: [
      "Urgent mental health situations are part of emergency planning too. This section is system orientation only — not diagnosis, not treatment advice, and not a substitute for professional care.",
      "If you or someone else is in immediate danger, call 112. For suicidal thoughts, the national 113 service is a dedicated crisis resource. For urgent but non-life-threatening mental health concerns outside GP hours, the Huisartsenpost can help with triage and next steps. During opening hours, your huisarts is often the first contact and may involve a mental health practice nurse (POH-GGZ) or referral pathways.",
      "Regional crisis services can become involved when urgent psychiatric assessment is needed. Exact local routes vary — triage clinicians help direct you.",
    ],
    points: [
      "Immediate danger to life or safety → call 112.",
      "Suicidal thoughts → 113 is a dedicated national resource; call 112 if there is immediate danger.",
      "Urgent non-emergency concerns → GP by day, Huisartsenpost after hours.",
      "Ask about POH-GGZ and GGZ referral routes for stepped care beyond the crisis moment.",
      "You do not need perfect Dutch to ask for help — request English support.",
    ],
    routes: [
      {
        title: "112 — immediate danger",
        body: "Use when there is immediate danger to life or safety, including severe self-harm risk or a medical emergency accompanying a crisis.",
      },
      {
        title: "113 — suicidal thoughts support",
        body: "National resource for suicidal thoughts support. If danger is immediate, call 112.",
      },
      {
        title: "GP / Huisartsenpost",
        body: "Urgent non-life-threatening mental health concerns and next-step planning, including escalation when indicated.",
      },
      {
        title: "Regional crisis services",
        body: "Urgent psychiatric assessment pathways arranged through clinical triage when needed.",
      },
    ] satisfies TipCard[],
    worthDiscussing: [
      "Feeling unsafe alone right now",
      "Thoughts of self-harm or not wanting to live",
      "Sudden severe agitation, confusion or inability to care for yourself",
      "A supporting person who is worried about your immediate safety",
    ],
    disclaimer:
      "This section provides system orientation only. It does not assess, diagnose or treat mental health conditions. Seek professional help for your own situation. In immediate danger, call 112.",
    tips: [
      "Save 112 and 113 before a crisis night.",
      "If supporting someone else, stay with them if safe and call for help rather than debating the perfect service name.",
      "Tell triage about medicines, alcohol or substance use if relevant to safety.",
      "Ask what interim support exists while waiting for specialist follow-up.",
    ],
    crossLink: {
      label: "Mental Healthcare in the Netherlands",
      href: "/netherlands/health/mental-healthcare-netherlands/",
      description:
        "Full cornerstone on GP first contact, POH-GGZ, GGZ specialist care, stepped care, waiting times and crisis routes beyond the emergency moment.",
      status: "live" as const,
    },
    contrastRows: [
      {
        route: "112",
        when: "Immediate danger to life or safety",
        how: "Call 112 and stay on the line",
        note: "Use when self-harm risk is immediate or a medical emergency accompanies a crisis.",
      },
      {
        route: "113",
        when: "Suicidal thoughts and you need dedicated crisis support",
        how: "Contact 113 for suicidal thoughts support",
        note: "If danger is immediate, call 112 instead of or as well as 113.",
      },
      {
        route: "GP / Huisartsenpost",
        when: "Urgent mental health concern that is not immediately life-threatening",
        how: "Call your GP by day or the huisartsenpost after hours",
        note: "Triage can advise next steps, including crisis-service involvement.",
      },
      {
        route: "Regional crisis services",
        when: "Urgent psychiatric assessment is needed after clinical triage",
        how: "Arranged through GP, huisartsenpost or emergency pathways",
        note: "Exact local names and doors vary by region.",
      },
    ] satisfies ContactRouteRow[],
    checklist: [
      "112 and 113 saved in your phone before a crisis night",
      "Huisartsenpost number saved for urgent out-of-hours concerns",
      "A trusted contact who knows how to reach you and when to call for help",
      "Current medicines and any substances that affect safety noted somewhere accessible",
      "Plan for who stays with you if you feel unsafe alone",
    ],
    scenarios: [
      {
        situation: "You feel unsafe alone tonight but are not in immediate danger",
        approach: "Contact 113 if suicidal thoughts are present, or the huisartsenpost / GP for urgent triage and next steps.",
        firstStep: "Tell the person on the line you feel unsafe alone and whether anyone can stay with you.",
      },
      {
        situation: "A friend talks about ending their life and has a plan",
        approach: "Treat immediate danger as an emergency — call 112 rather than debating the perfect service name.",
        firstStep: "Stay with them if safe, call 112, and pass on what you heard and observed.",
      },
      {
        situation: "Severe anxiety spike during GP opening hours",
        approach: "Contact your huisarts for same-day urgency triage and ask about POH-GGZ or next-step options.",
        firstStep: "Say what changed today, whether you feel safe, and what support you already have.",
      },
    ] satisfies ScenarioRow[],
  },
  pharmacy: {
    heading: "Emergency pharmacies (dienstapotheek)",
    paragraphs: [
      "During the day, prescriptions are usually dispensed by your regular apotheek. Outside normal opening hours, urgent medicines may be dispensed by a regional out-of-hours pharmacy (dienstapotheek).",
      "You typically reach that route after contact with the Huisartsenpost or another clinician who confirms the medicine cannot wait. The triage service can tell you which emergency pharmacy covers your area and whether a prescription pathway is arranged.",
      "A drogist (drugstore such as Etos or Kruidvat) sells selected over-the-counter products but is not a substitute for prescription dispensing or clinical triage.",
    ],
    points: [
      "Daytime: use your regular apotheek where possible.",
      "Out of hours: ask the Huisartsenpost which dienstapotheek applies.",
      "Bring ID and insurance details when collecting urgent medicines.",
      "Confirm dose instructions before leaving the counter.",
      "Not every late-evening medicine need is clinically urgent — triage helps decide.",
    ],
    checklist: [
      "Know your regular daytime pharmacy name and hours",
      "Saved note that out-of-hours dispensing goes via dienstapotheek after triage",
      "Insurance card photo stored on your phone",
      "Up-to-date medication and allergy list",
    ],
    tips: [
      "Call before travelling — confirm the pharmacy is open for your prescription.",
      "Ask whether the medicine is available immediately or needs ordering.",
      "Keep packaging and instructions for your GP follow-up.",
      "For children's dosing questions, ask the pharmacist directly and state the child's age and weight if known.",
      "For full apotheek finding, hours, OTC vs Rx and dienstapotheek depth, open the Pharmacies cornerstone.",
    ],
    crossLink: {
      label: "Pharmacies in the Netherlands",
      href: PHARMACIES_NETHERLANDS_PATH,
      description:
        "Finding an apotheek, opening hours, OTC vs Rx, counseling and dienstapotheek depth — this emergency page orients the urgent door only.",
      status: "live" as const,
    },
    prescriptionsCrossLink: {
      label: "Prescriptions in the Netherlands",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      description:
        "Recepten, e-prescriptions, herhaalrecept, medication lists and foreign prescriptions.",
      status: "live" as const,
    },
    scenarios: [
      {
        situation: "Ran out of essential medicine on a Sunday",
        approach: "Contact the huisartsenpost to assess urgency and the correct dienstapotheek route.",
        firstStep: "Have the medicine name, dose and your pharmacy history ready.",
      },
      {
        situation: "Need over-the-counter pain relief late at night",
        approach: "A drogist may help for simple OTC products when open; for clinical urgency or prescription needs, use triage routes.",
        firstStep: "If symptoms are severe or worrying, call the huisartsenpost or 112 as appropriate rather than focusing only on a shop.",
      },
    ] satisfies ScenarioRow[],
    contrastRows: [
      {
        route: "Regular apotheek",
        when: "Daytime dispensing and prescription collection",
        how: "Use your usual pharmacy where possible",
        note: "Best place for medication history and repeat prescriptions during opening hours.",
      },
      {
        route: "Dienstapotheek",
        when: "Urgent medicines outside normal pharmacy hours",
        how: "Reached after Huisartsenpost or clinician confirms urgency",
        note: "Call first — confirm opening status and that your prescription can be dispensed.",
      },
      {
        route: "Drogist",
        when: "Selected over-the-counter products when open",
        how: "Buy simple OTC items if clinically appropriate",
        note: "Not a substitute for prescription dispensing or medical triage.",
      },
    ] satisfies ContactRouteRow[],
  },
  emergencyDentists: {
    heading: "Emergency dentists",
    paragraphs: [
      "Dental emergencies have a parallel pathway. During opening hours, contact your own tandarts. Outside hours, urgent but non-life-threatening dental problems usually go to the regional out-of-hours dental service (dienstdoenende tandarts).",
      "Call 112 or use hospital emergency care for genuine medical emergencies involving the face or airway — for example severe swelling affecting breathing, uncontrolled bleeding or major facial trauma. Ordinary toothache belongs with dental services, not SEH by default.",
      "For finding a dentist, insurance, costs and children's dental care, use the Dentists in the Netherlands guide.",
    ],
    points: [
      "Daytime dental urgency → your own tandarts.",
      "Evenings and weekends → regional out-of-hours dental service.",
      "Airway-threatening swelling, uncontrolled bleeding or major facial trauma → 112 / emergency pathway.",
      "Save dental emergency numbers alongside 112 and the huisartsenpost.",
      "Adult dental funding often differs from basic medical insurance — verify with your dentist and insurer.",
    ],
    numbers: [
      {
        title: "Own dentist — daytime",
        body: "Same-day dental urgency and advice during practice opening hours via phone or the practice booking route.",
      },
      {
        title: "Dienstdoenende tandarts",
        body: "Regional out-of-hours dental service for urgent problems that cannot wait until the practice reopens.",
      },
      {
        title: "112 / hospital emergency",
        body: "Airway-threatening swelling, uncontrolled bleeding, major facial trauma or other life-threatening medical emergencies.",
      },
    ] satisfies TipCard[],
    contrastRows: [
      {
        route: "Own dentist",
        when: "Practice opening hours — urgent or same-day dental problems",
        how: "Call your registered tandarts",
        note: "Default first door for non-life-threatening dental urgency by day.",
      },
      {
        route: "Out-of-hours dental service",
        when: "Evenings, nights and weekends — urgent, not life-threatening",
        how: "Call the regional dienstdoenende tandarts number for your postcode",
        note: "Ask your practice in advance which number covers your area.",
      },
      {
        route: "112 / SEH",
        when: "Breathing, swallowing, uncontrolled bleeding or major facial trauma",
        how: "Call 112 or follow emergency pathway advice",
        note: "Ordinary toothache is usually not an SEH walk-in.",
      },
    ] satisfies ContactRouteRow[],
    urgencyRows: [
      { situation: "Severe facial swelling affecting breathing", level: "emergency", action: "Call 112 immediately." },
      { situation: "Uncontrolled oral bleeding or major facial trauma", level: "emergency", action: "Call 112 or use hospital emergency care now." },
      { situation: "Severe toothache or knocked-out tooth outside dental hours", level: "urgent", action: "Call the regional out-of-hours dental service." },
      { situation: "Mild toothache during practice hours", level: "urgent", action: "Call your own dentist for same-day advice." },
    ] satisfies UrgencyRow[],
    decisionTips: [
      "112 or hospital emergency = genuine medical emergency involving airway, uncontrolled bleeding or major trauma.",
      "Dienstdoenende tandarts = urgent dental problem that cannot wait for the practice to reopen, not life-threatening.",
      "Own dentist = daytime same-day urgency and follow-up during opening hours.",
      "Ordinary toothache after hours still belongs with dental services, not SEH by default.",
    ],
    whatToSay: [
      "What happened and when symptoms started",
      "Whether breathing, swallowing or bleeding is a concern",
      "Pain level and whether you have a fever or facial swelling",
      "Your dentist's name if registered, and your postcode for the duty service",
      "Medicines, allergies and any blood thinners you take",
    ],
    preparednessChecklist: [
      "Save 112 and your dentist's out-of-hours number in your phone",
      "Keep a photo of your insurance card accessible",
      "Know that dental practices, not SEH, are the default for urgent non-life-threatening dental problems",
      "Ask your practice which regional duty-dentist number covers your postcode",
      "Register with a dentist before the first toothache weekend",
    ],
    scenarios: [
      {
        situation: "Severe toothache at 23:00 on a Saturday",
        approach: "Call the regional out-of-hours dental service rather than walking into SEH.",
        firstStep: "Describe pain, swelling, fever and whether breathing or swallowing is affected.",
      },
      {
        situation: "Knocked-out permanent tooth after a fall",
        approach: "Treat as urgent dental emergency and call dental emergency services immediately.",
        firstStep: "Follow phone advice on handling the tooth and how quickly you need to be seen.",
      },
      {
        situation: "Rapid facial swelling making breathing harder",
        approach: "Treat as a medical emergency — this is not a routine dental booking.",
        firstStep: "Call 112 immediately and stay on the line.",
      },
    ] satisfies ScenarioRow[],
    whenInDoubt:
      "If you are unsure whether facial swelling, bleeding or trauma is a medical emergency, call 112 — triage would rather assess an unnecessary call than a delayed one.",
    crossLink: {
      label: "Dentists in the Netherlands",
      href: DENTISTS_NETHERLANDS_PATH,
      description:
        "Finding a dentist, insurance, check-ups, emergency dental routes, children's dentistry and orthodontics.",
      status: "live" as const,
    },
    tips: [
      "Register with a dentist before you need urgent care.",
      "Ask your practice which out-of-hours dental number covers your postcode.",
      "For a knocked-out permanent tooth, call dental emergency services immediately and follow phone advice.",
      "Do not assume SEH can provide routine dental treatment.",
    ],
  },
  costs: {
    heading: "Emergency costs and insurance (orientation)",
    paragraphs: [
      "Emergency care in the Netherlands interacts with mandatory basic health insurance (basisverzekering), your annual deductible (eigen risico) for many non-GP hospital pathways, and — for some services such as adult dental care — separate funding rules. Exact amounts change over time, so this guide does not hardcode fee figures.",
      "As orientation: primary-care GP routes often work differently from hospital emergency and ambulance pathways when it comes to deductible. Children's coverage rules can also differ from adult rules. Tourists and uninsured situations have different practical and financial consequences — clinical emergency help should still be sought when life is at risk.",
      "After an emergency, keep invoices, referral notes and discharge papers. Check your insurer's claims process and ask customer service to explain any deductible application for your specific event.",
    ],
    orientationCards: [
      {
        title: "Basic insurance",
        body: "Residents generally need Dutch basic health insurance. Emergency medically necessary care is part of how the system is organised — verify your own policy details with your insurer.",
      },
      {
        title: "Eigen risico",
        body: "Adults usually have an annual deductible that can apply to many hospital and specialist pathways. Confirm whether your emergency event touches deductible with your insurer.",
      },
      {
        title: "Ambulance & SEH",
        body: "Ambulance and hospital emergency care can involve insurance billing and deductible rules. Never delay calling 112 because of cost worries when life may be at risk.",
      },
      {
        title: "Children",
        body: "Children often have different premium and deductible treatment under basic insurance than adults — confirm family cover with your insurer.",
      },
      {
        title: "Dental emergencies",
        body: "Adult dental care frequently sits outside basic insurance. Check supplementary dental cover separately.",
      },
      {
        title: "Paperwork",
        body: "Keep referral letters, discharge notes and invoices — insurers usually need documentation for reimbursement questions.",
      },
    ] satisfies TipCard[],
    checklist: [
      "Know your insurer name and how to reach claims support",
      "Photo of insurance card stored on your phone",
      "Understood that eigen risico may apply to some emergency hospital pathways",
      "Plan to keep discharge papers after SEH or ambulance care",
      "Verified children's cover separately if you have a family policy",
    ],
    costFactors: [
      "Whether care stayed in GP / Huisartsenpost routes or moved into hospital and ambulance pathways",
      "How your annual eigen risico applies to the specific event",
      "Whether adult dental emergency care sits outside basic insurance",
      "Supplementary cover choices for dental or other extras",
      "Tourist or uninsured status versus Dutch resident basic insurance",
    ],
    indicativeNote:
      "This section is cost orientation only — not a fee schedule, quote or guarantee. Coverage, deductible and dental-funding rules change over time. Always verify current terms with your own insurer, and never delay calling 112 when life may be at risk because of cost uncertainty.",
    scenarios: [
      {
        situation: "Ambulance visit then discharge home",
        approach: "Expect insurance paperwork later; ask your insurer how deductible applied to this event.",
        firstStep: "Keep the discharge or crew advice note and any invoice references.",
      },
      {
        situation: "Huisartsenpost advice without hospital care",
        approach: "Primary-care routes often interact with insurance differently from SEH — confirm with your insurer if unsure.",
        firstStep: "Note the date, advice given and any prescription issued for your records.",
      },
      {
        situation: "Adult dental emergency at the duty dentist",
        approach: "Check supplementary dental cover separately from basic medical insurance.",
        firstStep: "Ask the dental service what will be billed and what your insurer needs for reimbursement questions.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Do not let cost uncertainty stop a 112 call when life may be at risk.",
      "Ask the hospital or insurer later which codes or deductible rules applied — after care is underway.",
      "Compare policies annually during the switching period for deductible and supplementary choices.",
      "Tourists should check travel insurance separately while still using 112 in emergencies.",
    ],
    crossLink: {
      label: "Health Insurance in the Netherlands",
      href: HEALTH_INSURANCE_PATH,
      description:
        "Basic insurance, eigen risico, switching and how cover interacts with everyday and urgent care.",
      status: "live" as const,
    },
  },
  surprises: {
    heading: "What expats often find surprising",
    intro:
      "None of these are problems once you expect them. Each card is a system characteristic that becomes easier after the first experience.",
    cards: [
      {
        title: "GP is usually first contact",
        body: "For urgent but non-life-threatening problems, the huisarts or Huisartsenpost is the normal front door — not the hospital lobby.",
        advice: "Save both numbers and practise the decision tree once while calm.",
      },
      {
        title: "Emergency departments prioritise by severity",
        body: "A long wait can mean someone else is more critically ill. Re-report immediately if you deteriorate.",
        advice: "Describe the most dangerous feature first at triage.",
      },
      {
        title: "Telephone triage is normal",
        body: "Out-of-hours care usually starts with a call, questions and a planned next step.",
        advice: "Prepare location, symptom, onset and callback number before dialling.",
      },
      {
        title: "Ambulances are medical professionals",
        body: "Crews assess and treat on scene; transport is a clinical decision, not an automatic ride.",
        advice: "Follow on-scene advice and ask what should trigger a new 112 call.",
      },
      {
        title: "Not every emergency means hospital admission",
        body: "You may be treated, observed, discharged with safety-net advice or referred back to your GP.",
        advice: "Leave with written or clear verbal aftercare instructions.",
      },
      {
        title: "English help is often available — ask",
        body: "112 operators can work in English, and many clinicians in cities manage English, but it is not guaranteed everywhere.",
        advice: "Ask for English early and keep a short written summary of the problem.",
      },
    ] satisfies MistakeCard[],
    tips: [
      "Treat call-first culture as a speed feature, not a barrier.",
      "Register with a GP even if you feel healthy — emergencies are harder without a practice.",
      "Review your household plan after any urgent episode and update saved numbers.",
    ],
  },
  preparation: {
    heading: "Emergency preparation checklist",
    paragraphs: [
      "The best emergency plan is boring and written down before you need it. Ten minutes of preparation removes most panic about which number to call and what to take with you.",
      "Store the same core details in every adult's phone and in a shared household note. If you have children, caregivers and schools should know who to call and where key documents live.",
    ],
    checklist: [
      "112 saved under a clear label in every household phone",
      "Regional Huisartsenpost number and address saved",
      "Own GP practice name and daytime number saved",
      "Nearest hospital / SEH location noted (without treating it as a walk-in default)",
      "Exact home address and entrance instructions written in Dutch and English if helpful",
      "Insurance card photo and policy number stored offline",
      "ID / residence documents easy to grab",
      "Current medication and allergy list on your phone",
      "Emergency contact person agreed and listed",
      "Out-of-hours dental number saved if you have a dentist",
      "Children's caregivers given the same core numbers",
      "Household plan for who calls and who meets responders",
    ],
    roleCards: [
      { role: "Household lead", focus: "Keeps numbers current and makes sure every adult has them." },
      { role: "Caller", focus: "Dials 112 or the huisartsenpost and stays on the line." },
      { role: "Door person", focus: "Meets responders at the entrance with lights and access." },
      { role: "Document person", focus: "Grabs ID, insurance details and medication list when safe." },
    ] satisfies RoleCard[],
    tips: [
      "Rehearse one 60-second household briefing: who calls, who opens the door, where documents live.",
      "Update the list after you move house, change GP or switch insurer.",
      "Tourists: save accommodation address in your phone maps and note the local huisartsenpost if staying longer.",
      "Put a paper copy near the door if phone batteries are a concern.",
    ],
  },
  mistakes: {
    heading: "Common expat mistakes",
    intro:
      "These mistakes are common because emergency systems differ between countries. Each one has a simple fix.",
    cards: [
      {
        title: "Going directly to the emergency department for primary care",
        body: "Example: walking into SEH with a non-emergency problem and being redirected to the Huisartsenpost.",
        advice: "Use GP by day and Huisartsenpost after hours for urgent non-life-threatening care; call 112 when life may be at risk.",
      },
      {
        title: "Not registering with a GP",
        body: "Example: searching for daytime urgent care while already unwell and unregistered.",
        advice: "Register with a huisarts in your first weeks, even if you feel fine.",
      },
      {
        title: "Using 112 for clearly non-emergency admin questions",
        body: "Example: calling 112 only to ask where a routine clinic is.",
        advice: "Keep 112 for emergencies — and still call 112 immediately whenever life may be at risk.",
      },
      {
        title: "Not knowing after-hours services",
        body: "Example: discovering the Huisartsenpost exists only after a stressful weekend search.",
        advice: "Save the regional number and entrance notes now.",
      },
      {
        title: "Waiting too long during genuine emergencies",
        body: "Example: delaying a 112 call because you are worried about bothering someone or about cost.",
        advice: "If life may be at risk, call 112 now — triage would rather assess early than late.",
      },
      {
        title: "Driving to hospital when an ambulance is safer",
        body: "Example: driving an unstable person yourself and losing the chance for on-scene treatment.",
        advice: "Call 112 when emergency medical response may be needed on the way.",
      },
      {
        title: "Forgetting ID and insurance details",
        body: "Example: arriving at the post or SEH without identification or policy information.",
        advice: "Keep phone photos of ID and insurance cards in an easy folder.",
      },
      {
        title: "Assuming toothache belongs in SEH",
        body: "Example: waiting in a hospital emergency department for a dental problem that needs the duty dentist.",
        advice: "Use dental emergency routes for dental urgency unless there is a medical airway or trauma emergency.",
      },
    ] satisfies MistakeCard[],
    adaptationTips: [
      "Learn the three-door pattern once and teach it to everyone in your home.",
      "Register GP and dentist early as part of moving admin.",
      "When unsure and life may be at risk, choose 112 without debating etiquette.",
      "Keep paperwork photos updated after insurer or address changes.",
      "Review what happened after any urgent episode and adjust your checklist.",
    ],
  },
  faq: [
    {
      q: "When should I call 112 in the Netherlands?",
      a: "Call 112 for life-threatening emergencies such as unresponsiveness, severe breathing difficulty, heavy bleeding, stroke signs, severe allergic reaction, major trauma or chest pain with worrying features. If you are unsure and life may be at risk, call — operators and triage exist to assess with you.",
    },
    {
      q: "Can I go directly to the hospital emergency department?",
      a: "SEH departments are for serious emergencies and often receive patients by ambulance or with a GP / Huisartsenpost referral. Walking in with a non-emergency primary-care problem commonly leads to redirection. For urgent non-life-threatening issues, contact your GP or the Huisartsenpost first. If life may be at risk, call 112.",
    },
    {
      q: "What is a Huisartsenpost?",
      a: "A Huisartsenpost is the regional out-of-hours GP cooperative. When your own practice is closed — evenings, nights, weekends and public holidays — you call the post for urgent GP-level care. Telephone triage may give advice, invite you in, arrange a home visit or escalate.",
    },
    {
      q: "How much does an ambulance cost?",
      a: "Ambulance billing interacts with health insurance and may involve your annual deductible depending on the situation and policy. This guide does not quote amounts that change over time — verify current terms with your insurer. Never delay calling 112 because of cost concerns when life may be at risk.",
    },
    {
      q: "Will someone speak English if I call 112?",
      a: "112 operators can work in English. Speak clearly, give your location first, then what is wrong. In hospitals and GP posts, English availability varies by location — ask for English support early.",
    },
    {
      q: "Do tourists receive emergency care in the Netherlands?",
      a: "Yes — in a life-threatening emergency, call 112. Tourists should also check travel insurance for financial coverage, but clinical emergency response should not wait on paperwork. For urgent non-emergency problems, local out-of-hours GP routes may still apply.",
    },
    {
      q: "What if I don't have insurance?",
      a: "Seek emergency help anyway if life may be at risk — call 112. Residents are generally required to hold basic health insurance, and uninsured care can create financial follow-up. Arrange cover as soon as you are obligated to, and speak with hospital administration or an insurer about your situation after urgent care is underway.",
    },
    {
      q: "What happens after I arrive at SEH?",
      a: "You are triaged by severity, then assessed and treated according to urgency. You may be discharged with advice, observed, admitted or referred for further specialist care. Ask for clear aftercare instructions and whether your GP will receive information.",
    },
    {
      q: "What is the difference between 112 and the Huisartsenpost?",
      a: "112 is for life-threatening emergencies and dispatches ambulance, fire or police as needed. The Huisartsenpost is for urgent GP-level problems outside practice hours that are not life-threatening. If you are unsure and life may be at risk, call 112.",
    },
    {
      q: "How do I find my regional Huisartsenpost number?",
      a: "Check your GP practice website's spoed or urgent-care page, ask the practice assistant, or search for huisartsenpost plus your postcode. Save the number, address and entrance notes beside 112.",
    },
    {
      q: "Are emergency pharmacies open at night?",
      a: "Urgent out-of-hours dispensing usually goes through a regional dienstapotheek. The Huisartsenpost can tell you which pharmacy applies after assessing whether the medicine need is clinically urgent.",
    },
    {
      q: "What should I do for a dental emergency?",
      a: "Contact your dentist during opening hours or the regional out-of-hours dental service after hours for urgent dental problems. Call 112 for airway-threatening swelling, uncontrolled bleeding or major facial trauma. See the Dentists guide for full dental-emergency detail.",
    },
    {
      q: "Does eigen risico apply to emergency hospital care?",
      a: "Many adult hospital and specialist pathways can touch the annual deductible, while GP-level primary care often works under different rules. Confirm your own event with your insurer. Cost questions should never delay a 112 call when life may be at risk.",
    },
    {
      q: "What should I prepare before an emergency happens?",
      a: "Save 112, your GP number and Huisartsenpost number; keep ID and insurance details available; store a medication and allergy list; and agree who calls and who meets responders. The preparation checklist on this page covers the full set.",
    },
  ],
  faqQuickReference: [
    "Life-threatening or unsure and life may be at risk → call 112.",
    "Urgent, not life-threatening, GP open → contact your huisarts.",
    "Urgent, not life-threatening, GP closed → call Huisartsenpost.",
    "SEH is for serious emergencies — often via ambulance or referral.",
    "Ambulances assess and treat; transport is not automatic.",
    "Ask for English; give location first on 112.",
    "Save numbers and insurance details before you need them.",
    "Dental urgency usually has its own out-of-hours dental route.",
  ],
  howToSchema: {
    name: "What To Do In A Medical Emergency",
    description:
      "Step-by-step orientation for expats and newcomers facing a medical emergency in the Netherlands — choosing between 112, the GP, the Huisartsenpost and hospital emergency care.",
    anchor: "#decision-tree",
    howToSteps: [
      {
        name: "Assess whether life may be at risk",
        text: "If someone is unresponsive, cannot breathe adequately, has heavy bleeding, stroke signs, a severe allergic reaction, major trauma or other life-threatening features — or you are unsure and life may be at risk — call 112 immediately.",
      },
      {
        name: "Call 112 for life-threatening emergencies",
        text: "Give your exact location first, then explain what is wrong, who needs help and a callback number. Stay on the line and follow the operator's instructions.",
      },
      {
        name: "If not life-threatening, check whether your GP is open",
        text: "During practice hours, contact your huisarts for same-day urgent triage rather than walking into a hospital emergency department.",
      },
      {
        name: "Outside practice hours, call the Huisartsenpost",
        text: "Use your regional out-of-hours GP cooperative number. Describe the main symptom, how fast it started and what specifically worries you.",
      },
      {
        name: "Follow triage advice",
        text: "Accept advice, an appointment at the post, a home visit or escalation to hospital when that is the outcome of triage.",
      },
      {
        name: "Go to SEH when directed or arriving by ambulance",
        text: "Hospital emergency departments prioritise by severity. Bring ID, insurance details and a medication list when you are able to.",
      },
      {
        name: "Reassess if symptoms worsen",
        text: "If the situation becomes life-threatening while waiting, call 112 immediately — do not wait for a previously arranged slot.",
      },
    ] satisfies HowToStep[],
  },
  relatedGuidesTips: [
    "Need daytime primary care clarity → the GP (huisarts) guide.",
    "Insurance and deductible questions → health insurance guide.",
    "Family with children → healthcare for children cornerstone.",
    "Dental urgency detail → dentists guide.",
    "Dienstapotheek depth → Pharmacies guide.",
    "Recept mechanics → Prescriptions guide.",
    "Broader safety numbers → emergencies and safety living guide.",
  ],
  relatedGuides: [
    {
      label: "General Practitioner (GP) in the Netherlands",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Registration, appointments, referrals and daytime urgent care with the Dutch GP.",
    },
    {
      label: "Health Insurance in the Netherlands",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package, deductible, choosing an insurer and supplementary cover.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "GPs, JGZ, vaccinations, dental care and emergencies for children.",
    },
    {
      label: "Dentists in the Netherlands",
      href: DENTISTS_NETHERLANDS_PATH,
      status: "live",
      description: "Finding a dentist, insurance, costs and emergency dental routes.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Finding an apotheek, hours, counseling and dienstapotheek depth.",
    },
    {
      label: "Prescriptions",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      status: "live",
      description: "Recepten, e-prescriptions, herhaalrecept, medication lists and foreign prescriptions.",
    },
    {
      label: "Healthcare Basics",
      href: HEALTHCARE_BASICS_PATH,
      status: "live",
      description: "How Dutch healthcare fits together for everyday living.",
    },
    {
      label: "Emergencies & Safety",
      href: EMERGENCIES_SAFETY_PATH,
      status: "live",
      description: "Emergency numbers, safety orientation and what to do under pressure.",
    },
    {
      label: "Health System Culture Basics",
      href: HEALTH_SYSTEM_CULTURE_PATH,
      status: "live",
      description: "How care interactions often feel in Dutch healthcare culture.",
    },
    {
      label: "Hospitals in the Netherlands",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "GP referrals, specialists, outpatient clinics, admissions, UMCs and hospital pathways for expats.",
    },
    {
      label: "Mental Healthcare in the Netherlands",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GP first contact, POH-GGZ, GGZ specialist care, stepped care, waiting times and crisis routes.",
    },
  ] satisfies EmergencyLink[],
  healthcareHubTips: [
    "Emergency care, GP care and insurance are connected — set up numbers and registration before you need them.",
    "This page is the emergency healthcare cornerstone; the GP guide covers daytime primary care in depth.",
    "Families should also read the children's healthcare guide for paediatric pathways.",
    "Pharmacies owns dienstapotheek depth; Prescriptions owns recept mechanics.",
    "A dedicated health hub landing page is planned — use the live links meanwhile.",
  ],
  healthcareHubCards: [
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112, Huisartsenpost, SEH, ambulance, pharmacy and urgent pathways — you are here.",
    },
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Huisarts registration, appointments, referrals and daytime urgent care.",
    },
    {
      label: "Hospitals",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Referrals, specialists, outpatient clinics, admissions and UMCs.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package and insurer setup.",
    },
    {
      label: "Dentists",
      href: DENTISTS_NETHERLANDS_PATH,
      status: "live",
      description: "Dental care and dental emergency routes.",
    },
    {
      label: "Mental Healthcare",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GP first contact, POH-GGZ, GGZ specialist care, stepped care and crisis routes.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Apotheek finding, hours, counseling and dienstapotheek.",
    },
    {
      label: "Prescriptions",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      status: "live",
      description: "Recepten, e-prescriptions, herhaalrecept and medication lists.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family and children's healthcare cornerstone.",
    },
    {
      label: "Healthcare Basics",
      href: HEALTHCARE_BASICS_PATH,
      status: "live",
      description: "System overview for everyday living.",
    },
    {
      label: "Emergencies & Safety",
      href: EMERGENCIES_SAFETY_PATH,
      status: "live",
      description: "Broader emergency numbers and safety orientation.",
    },
  ] satisfies EmergencyLink[],
  exploreNextCards: [
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Register and understand daytime urgent primary care.",
    },
    {
      label: "Hospitals",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Understand referrals, specialists and hospital pathways.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Learn daytime apotheek setup and dienstapotheek patterns in depth.",
    },
    {
      label: "Prescriptions",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      status: "live",
      description: "Understand recepten, herhaalrecept and medication lists.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Arrange basic cover and understand deductible orientation.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family GP care, JGZ and paediatric emergency context.",
    },
  ] satisfies EmergencyLink[],
  exploreNextTips: [
    "No GP yet → register using the GP guide.",
    "Coverage questions → health insurance guide.",
    "Moving with children → healthcare for children.",
    "Dienstapotheek depth → Pharmacies guide.",
    "Recept mechanics → Prescriptions guide.",
    "Broader safety planning → emergencies and safety.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks before an emergency",
      items: [
        "Save 112 and your regional huisartsenpost number.",
        "Register a huisarts near home.",
        "Know that SEH is not the default walk-in for primary care.",
        "Keep ID and insurance details ready to hand.",
      ],
    },
    decisionTree: {
      title: "From the visual — choose the right door",
      items: [
        "Life-threatening or unsure and life may be at risk → call 112.",
        "GP open → contact your huisarts for urgent non-emergency care.",
        "GP closed → call the Huisartsenpost for telephone triage.",
        "SEH when ambulance or triage directs you there.",
        "Save fill-in numbers: 112, GP daytime, regional huisartsenpost.",
      ],
    },
    snapshot: {
      title: "From the visual — six emergency doors",
      items: [
        "112 for life-threatening emergencies.",
        "GP for daytime urgent non-emergency care.",
        "Huisartsenpost for out-of-hours GP-level urgency.",
        "SEH for serious hospital emergency care.",
        "Ambulance for emergency medical response on scene.",
        "Emergency pharmacy for urgent out-of-hours medicines.",
      ],
    },
    calling112: {
      title: "From the visual — make a clear 112 call",
      items: [
        "Location and entrance first, then what is wrong.",
        "State breathing, consciousness and who needs help.",
        "Operators can work in English — ask clearly.",
        "Stay on the line and follow instructions.",
      ],
    },
    comparison: {
      title: "From the visual — GP vs post vs SEH",
      items: [
        "Match severity first, opening hours second.",
        "Huisartsenpost is call-first out-of-hours GP care.",
        "SEH prioritises serious emergencies — not primary-care walk-ins.",
        "If life may be at risk, call 112 without comparing doors.",
        "Use the scenarios below to practise weekday vs weekend choices.",
      ],
    },
    huisartsenpost: {
      title: "From the visual — out-of-hours GP post",
      items: [
        "Evenings, nights, weekends and public holidays.",
        "Telephone triage before attendance.",
        "Advice, appointment, home visit or escalation.",
        "Call 112 if the situation becomes life-threatening.",
      ],
    },
    seh: {
      title: "From the visual — hospital emergency pathway",
      items: [
        "Ambulance and referral are common access routes.",
        "Triage is by severity, not arrival order alone.",
        "Bring ID, insurance and medication details.",
        "Not every visit ends in admission.",
      ],
    },
    ambulance: {
      title: "From the visual — ambulance response",
      items: [
        "Call 112 to mobilise emergency medical response.",
        "Crews assess and treat on scene — transport is clinical, not automatic.",
        "Clear address, entrance and access speed help.",
        "Follow safety-net advice if you are not transported.",
        "If unsure whether an ambulance is needed, call 112 anyway.",
      ],
    },
    children: {
      title: "From the visual — child emergency doors",
      items: [
        "Same doors: 112, huisartsenpost, daytime family GP.",
        "Describe breathing, alertness and fluid intake clearly.",
        "Infants with fever need same-day urgent triage.",
        "JGZ is not an emergency pathway — use GP or 112 when urgent.",
        "Register children with a family GP before the first fever evening.",
      ],
    },
    mentalHealth: {
      title: "From the visual — crisis routes",
      items: [
        "Immediate danger → 112.",
        "Suicidal thoughts support → 113; call 112 if danger is immediate.",
        "Urgent non-emergency concerns → GP by day or Huisartsenpost after hours.",
        "Regional crisis services via clinical triage when needed.",
        "Save 112 and 113 before a crisis night.",
      ],
    },
    pharmacy: {
      title: "From the visual — urgent medicines",
      items: [
        "Daytime apotheek for regular dispensing.",
        "Out-of-hours dienstapotheek after triage guidance.",
        "Drogist helps with selected OTC items — not prescriptions.",
        "Bring ID and insurance details; confirm dose instructions.",
      ],
    },
    dentists: {
      title: "From the visual — dental emergency routes",
      items: [
        "Own dentist by day; duty dentist after hours.",
        "112 for airway-threatening facial emergencies.",
        "Ordinary toothache is usually not an SEH walk-in.",
        "Say what happened, when it started, and whether breathing or bleeding is affected.",
        "Open the Dentists guide for insurance, finding a practice and full detail.",
      ],
    },
    costs: {
      title: "From the visual — cost orientation",
      items: [
        "Basic insurance and eigen risico rules matter more than memorised prices.",
        "Hospital and ambulance pathways may involve deductible.",
        "Adult dental emergencies often sit outside basic insurance.",
        "Keep invoices and discharge papers for claims questions.",
        "Never delay 112 because of cost worries when life may be at risk.",
      ],
    },
    surprises: {
      title: "From the visual — expect these patterns",
      items: [
        "GP-level care is often the first urgent door.",
        "SEH triage is by severity.",
        "Call-first telephone triage is normal.",
        "Ambulance transport is not automatic.",
      ],
    },
    preparation: {
      title: "From the visual — prepare once",
      items: [
        "Save 112, GP and huisartsenpost numbers.",
        "Keep ID and insurance details ready.",
        "Store medication and allergy lists.",
        "Agree who calls and who meets responders.",
      ],
    },
    mistakes: {
      title: "From the visual — mistakes with fixes",
      items: [
        "SEH for primary care → use GP or Huisartsenpost.",
        "No GP registration → register early.",
        "Delaying genuine emergencies → call 112 when life may be at risk.",
        "Unknown after-hours numbers → save them today.",
      ],
    },
    faq: {
      title: "From the visual — top questions answered",
      items: [
        "112 for life-threatening emergencies.",
        "Huisartsenpost for urgent out-of-hours GP care.",
        "SEH for serious emergency pathways.",
        "Ask for English and give location first.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next by need",
      items: [
        "Daytime care → GP guide.",
        "Cover and deductible → health insurance.",
        "Family pathways → healthcare for children.",
        "Dental urgency → dentists guide.",
      ],
    },
    healthcareHub: {
      title: "From the visual — the healthcare cluster",
      items: [
        "Emergency cornerstone (this page): 112 to aftercare orientation.",
        "GP: primary care registration and daytime urgency.",
        "Insurance and basics: coverage and system overview.",
        "Family and dental: children and tandarts pathways.",
      ],
    },
    exploreNext: {
      title: "From the visual — choose the card matching your next need",
      items: [
        "GP registration → primary care setup.",
        "Health insurance → cover and deductible orientation.",
        "Children or dental → family or tandarts guides.",
        "Broader safety → emergencies and safety.",
      ],
    },
  },
  sourceUsageTips: [
    "Use Government.nl for official orientation on 112 and how emergency care is organised.",
    "Use Rijksoverheid topic pages for Dutch-language government healthcare context.",
    "Use NZa for regulator orientation on healthcare rules and patient-facing rights.",
    "Use your insurer portal for deductible and claims questions after an emergency event.",
  ],
  officialSources: [
    {
      label: "Government.nl — Emergency number 112",
      href: "https://www.government.nl/topics/emergency-number-112",
      description: "Official orientation on when and how to use the European emergency number in the Netherlands.",
    },
    {
      label: "112.nl",
      href: "https://www.112.nl/",
      description: "National emergency-number information and public guidance related to 112.",
    },
    {
      label: "Government.nl — Health insurance",
      href: "https://www.government.nl/topics/health-insurance",
      description: "Official orientation on Dutch health insurance obligations and covered care.",
    },
    {
      label: "Rijksoverheid — Healthcare",
      href: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering",
      description: "Dutch government topic pages on health insurance and care organisation.",
    },
    {
      label: "NZa — Dutch Healthcare Authority",
      href: "https://www.nza.nl/english",
      description: "Regulator information on healthcare rules, tariff regulation and patient-facing rights orientation.",
    },
  ],
  officialSourcesNote:
    "General information only — not medical advice. Local huisartsenpost procedures, hospital pathways and insurer terms change, so verify your own situation with clinicians, your insurer and the official sources above. In an emergency, call 112.",
} as const;

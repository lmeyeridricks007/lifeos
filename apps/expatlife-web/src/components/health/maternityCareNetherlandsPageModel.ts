export const MATERNITY_CARE_NETHERLANDS_PATH = "/netherlands/health/maternity-care-netherlands/" as const;
export const PHYSIOTHERAPY_NETHERLANDS_PATH = "/netherlands/health/physiotherapy-netherlands/" as const;
export const PHARMACIES_NETHERLANDS_PATH = "/netherlands/health/pharmacies-netherlands/" as const;
export const PRESCRIPTIONS_NETHERLANDS_PATH = "/netherlands/health/prescriptions-netherlands/" as const;
export const GP_NETHERLANDS_PATH = "/netherlands/health/gp-netherlands/" as const;
export const EMERGENCY_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/emergency-healthcare-netherlands/" as const;
export const HOSPITALS_NETHERLANDS_PATH = "/netherlands/health/hospitals-netherlands/" as const;
export const DENTISTS_NETHERLANDS_PATH = "/netherlands/health/dentists-netherlands/" as const;
export const MENTAL_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/mental-healthcare-netherlands/" as const;
export const HEALTH_HUB_PATH = "/netherlands/health/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const HEALTHCARE_FOR_CHILDREN_PATH =
  "/netherlands/family/healthcare-for-children-netherlands/" as const;
export const HEALTHCARE_BASICS_PATH = "/netherlands/living/healthcare-basics/" as const;
export const EMERGENCIES_SAFETY_PATH = "/netherlands/living/emergencies-safety/" as const;
export const HEALTH_SYSTEM_CULTURE_PATH = "/netherlands/culture/health-system-culture-basics/" as const;
export const HEALTH_INSURANCE_COMPARISON_PATH =
  "/netherlands/health/health-insurance-comparison-netherlands/" as const;

export type MaternityLink = {
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

export type ComparisonRow = {
  type: string;
  focus: string;
  whenReferred: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "maternity-care-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const maternityCareNetherlandsPage = {
  slug: "maternity-care-netherlands",
  path: MATERNITY_CARE_NETHERLANDS_PATH,
  hubPath: HEALTH_HUB_PATH,
  parentGuidePath: HEALTHCARE_BASICS_PATH,
  publish: true,
  publishDate: "2027-02-18",
  seo: {
    title: "Maternity Care in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how maternity care works in the Netherlands for expats — verloskundige (midwife) first line, hospital and obstetric pathways, registration timing, insurance orientation and kraamzorg awareness.",
    keywords: [
      "maternity care Netherlands",
      "midwife Netherlands",
      "verloskundige Netherlands",
      "pregnancy care Netherlands",
      "hospital birth Netherlands",
      "obstetrician Netherlands",
      "kraamzorg Netherlands",
      "maternity insurance Netherlands",
      "birth centre Netherlands",
      "expat pregnancy Netherlands",
      "Dutch maternity care",
      "register midwife Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Health · Maternity care",
    pageTitle: "Maternity Care in the Netherlands",
    subtitle:
      "How Dutch maternity pathways work for expats — verloskundige first line, when hospital or obstetric care applies, registration timing, insurance orientation and kraamzorg awareness.",
    primaryCta: { label: "Understand Maternity Pathways", href: "#how-it-works" },
    secondaryCta: { label: "Explore Healthcare Guides", href: "#related-guides" },
    chips: [
      "Verloskundige",
      "Obstetric pathways",
      "Hospital birth",
      "Registration timing",
      "Insurance",
      "Kraamzorg",
    ],
    disclaimer:
      "General orientation only — not medical advice, not a birth plan, and not a ranking or recommendation of any midwife practice, hospital or kraamzorg agency. For your own pregnancy, speak with your midwife, obstetric team or GP. Call 112 for life-threatening emergencies.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic calm Dutch midwife consultation — multicultural pregnant expat and partner seated with a verloskundige at a bright practice desk, pregnancy notes and calendar on the table, canal-street light through the window, welcoming atmosphere, no graphic birth scenes.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#midwife", label: "Midwife" },
    { href: "#obstetric-pathways", label: "Obstetric pathways" },
    { href: "#birth-places", label: "Birth places" },
    { href: "#registration", label: "Registration" },
    { href: "#insurance", label: "Costs" },
    { href: "#recommended", label: "Recommended" },
    { href: "#kraamzorg", label: "Kraamzorg" },
    { href: "#finding", label: "Finding care" },
    { href: "#differences", label: "Differences" },
    { href: "#checklist", label: "Checklist" },
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
      "Premium orientation board titled Before Your First Maternity Pathway Step — four building blocks: understand verloskundige first line, know when obstetric or hospital pathways apply, register early with a midwife practice, and check insurance plus kraamzorg awareness — with a Maternity File Checklist rail.",
      "Four building blocks cover readiness: midwife first line, obstetric doors, registration timing, and insurance plus kraamzorg orientation."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch maternity care — verloskundige first line, obstetric and hospital pathways, birth place options, registration timing, basic-package insurance orientation, and kraamzorg awareness — each with a one-line role description.",
      "Six building blocks explain almost every maternity orientation question — the sections below add practical detail."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium maternity pathway flow — confirm pregnancy, register with a midwife practice, antenatal check-ups, birth-place discussion, birth with midwife or obstetric team when indicated, postpartum and kraamzorg pointer, then JGZ for the baby — calm Dutch consultation backdrop with a record rail.",
      "Most journeys run from early midwife registration through antenatal checks to birth planning and postpartum orientation."
    ),
    midwife: visual(
      "midwife",
      "Premium verloskundige first-line board — neighbourhood midwife practice as primary door for many low-risk pregnancies, check-ups and counselling, coordination with GP and hospital when needed, and a clear boundary that this is system orientation not personal medical advice.",
      "The midwife (verloskundige) is often the first and main door for maternity care in the Netherlands."
    ),
    obstetricPathways: visual(
      "obstetric-pathways",
      "Premium obstetric and hospital pathway comparison — left door midwife-led care, right door obstetrician or hospital pathway when medical indications apply, with a calm transfer note and a General information only rail.",
      "Obstetric and hospital pathways apply when clinical indications call for specialist or hospital-based care — your team explains the why."
    ),
    birthPlaces: visual(
      "birth-places",
      "Premium birth-place orientation map — home birth with midwife when suitable, birth centre (geboortecentrum), and hospital birth — three calm place cards with a note that suitability is clinical, not preference alone.",
      "Birth-place options are discussed with your midwife or obstetric team — suitability depends on your situation."
    ),
    registration: visual(
      "registration",
      "Premium registration timing calendar — confirm pregnancy, contact midwife practices early, complete intake, add insurance and kraamzorg awareness to the timeline, and keep GP details for coordination — Dutch neighbourhood practice desk scene.",
      "Register with a midwife practice early — popular areas fill and intake timing matters."
    ),
    insurance: visual(
      "insurance",
      "Premium maternity insurance board — basic package covers much maternity care, indicative kraamzorg own contribution about €5.70 per hour in 2026, polyclinic birth own-contribution awareness, and verify-with-insurer year label — calm desk with policy card and pregnancy notes.",
      "Much maternity care sits in the basic package — still verify kraamzorg and birth own contributions for your policy year."
    ),
    kraamzorg: visual(
      "kraamzorg",
      "Premium kraamzorg awareness card — short pointer that postpartum maternity home care (kraamzorg) exists, register interest early via your midwife or agency pathway, hours and own contribution vary, and this page is not a full kraamzorg encyclopedia.",
      "Kraamzorg is postpartum home support — arrange awareness early; details belong with your midwife and agency."
    ),
    finding: visual(
      "finding",
      "Premium finding-maternity-care map — search midwife practices by postcode, ask about English and capacity, confirm hospital links, note kraamzorg registration, save emergency midwife numbers — Dutch canal neighbourhood scene.",
      "Choose a nearby midwife practice, confirm language and capacity, then complete intake rather than waiting."
    ),
    differences: visual(
      "differences",
      "Premium surprise cards for expats about Dutch maternity care — midwife-first system, birth-place discussion is normal, hospital is not automatic for every birth, kraamzorg exists after birth, and no practice rankings appear here.",
      "Most surprises are system design — once you expect midwife-first pathways, planning becomes clearer."
    ),
    checklist: visual(
      "checklist",
      "Premium maternity preparation board — ID, insurance card, midwife practice contact, intake notes, birth preferences discussion list, kraamzorg registration reminder, hospital bag orientation, and four role cards for you, midwife, obstetric team and insurer.",
      "A short preparation routine makes intake and birth planning clearer."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with Fix advice cards — waiting too long to register, assuming hospital obstetrician is automatic first door, skipping kraamzorg awareness, ignoring insurance own-contribution questions, and expecting ranking-style hospital lists.",
      "Each common mistake has a practical Fix — most are avoided with early registration and clear questions."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with readable question and answer pairs about verloskundige first line, obstetric pathways, birth places, registration timing, insurance, kraamzorg, English support and when to call urgent routes.",
      "Orientation answers only — confirm your own situation with your midwife, obstetric team and insurer."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking Maternity care to Healthcare for Children, GP, hospitals, emergency healthcare, health insurance, pharmacies, prescriptions and mental healthcare.",
      "Maternity care connects to GP care, hospitals, insurance and children's healthcare — read them together."
    ),
    healthcareHub: visual(
      "healthcare-hub",
      "Premium healthcare cluster ecosystem diagram with Maternity care at the centre, connected to GP, hospitals, emergency healthcare, health insurance, children's healthcare, pharmacies, prescriptions, physiotherapy and mental healthcare.",
      "This page is the maternity care cornerstone — explore the wider healthcare cluster next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from Maternity care to Healthcare for Children, GP, hospitals, health insurance and emergency healthcare, with official source cards for Government.nl, KNOV and Rijksoverheid.",
      "Continue with children's healthcare and insurance checks — and verify specifics on the official sources."
    ),
  },
  quickAnswer: {
    heading: "Quick answer: how maternity care works in the Netherlands",
    summary:
      "Dutch maternity care is often midwife-led (verloskundige) for pregnancies considered low risk. You typically register with a midwife practice early, attend antenatal check-ups there, and discuss birth place options (home, birth centre or hospital) with that team. When medical indications apply, care can move to an obstetrician and/or hospital pathway. Much maternity care is oriented within basic health insurance, with separate awareness needed for kraamzorg (postpartum maternity home care) and any own contributions. This guide is pathway orientation for expats — not a full pregnancy encyclopedia and not personal medical advice.",
    bullets: [
      "A verloskundige (midwife) is often the first-line door for maternity care in the Netherlands.",
      "Obstetrician and hospital pathways apply when clinical indications call for specialist or hospital-based care.",
      "Register with a midwife practice early — capacity and intake timing matter, especially in busy cities.",
      "Much maternity care sits in the basic insurance package — still verify your policy year and kraamzorg contributions.",
      "After birth, JGZ / children's healthcare pathways matter for the baby — see Healthcare for Children.",
    ],
    note: "This page is orientation for expats. It is not a birth plan, not medical advice, and not a ranking of midwives or hospitals.",
  },
  introParagraphs: [
    "In the Netherlands, maternity care is organised around midwifery and obstetric pathways rather than an automatic obstetrician-first model. For many pregnancies, a neighbourhood verloskundige practice coordinates antenatal check-ups, discusses birth options, and stays involved around birth when midwife-led care remains appropriate.",
    "Two ideas surprise newcomers. First: hospital birth is common and available, but it is not the only discussed option — home birth and birth centres can be part of the conversation when clinically suitable. Second: when higher-risk indications appear, transfer to obstetric or hospital pathways is a normal system feature, not a failure of the midwife model.",
    "This guide stays inside a clear content boundary: midwife and obstetric pathway orientation, hospital birth orientation, registration timing, insurance orientation for maternity in the basic package, and a short kraamzorg awareness pointer. It is not a week-by-week pregnancy encyclopedia, not labour coaching, and not treatment advice.",
  ],
  introHighlights: [
    "Midwife-first is normal for many low-risk pregnancies — obstetric care joins when indicated.",
    "Register early with a verloskundige practice; do not wait for a hospital-only assumption.",
    "Birth-place discussions are clinical conversations, not ranking contests.",
    "Basic insurance covers much maternity care — verify own contributions (including kraamzorg).",
    "Post-birth baby checks connect strongly to Healthcare for Children / JGZ pathways.",
  ],
  orientationFlowSteps: [
    "Confirm pregnancy and contact midwife practices to ask about capacity and intake.",
    "Complete registration and intake; keep GP and insurance details ready.",
    "Follow antenatal check-ups and discuss birth-place and pathway options with your team.",
    "Arrange kraamzorg awareness early; after birth, connect to JGZ / children's healthcare routes.",
  ],
  safetyFileChecklist: [
    "Valid ID or residence document",
    "BSN (citizen service number)",
    "Insurer name, policy number and insurance card photo",
    "Confirmed midwife practice name, address and phone",
    "Out-of-hours midwife / practice emergency number (once registered)",
    "GP practice details for coordination",
    "Pregnancy confirmation notes or lab results if you already have them",
    "Medication list and allergies",
    "Questions about language, birth-place options and kraamzorg registration",
    "Partner or support-person contact details",
  ],
  introScenarios: [
    {
      situation: "You just learned you are pregnant and feel unsure where to start",
      approach:
        "In the Dutch system, contacting a midwife practice (verloskundige) is often the practical first step for maternity pathway orientation. Your GP can also advise if you are unsure or have medical questions.",
      firstStep: "Search midwife practices near your postcode and ask about intake timing and English support.",
    },
    {
      situation: "You expected an obstetrician to manage the whole pregnancy from week one",
      approach:
        "Many low-risk pregnancies are midwife-led unless indications call for obstetric or hospital pathways. That difference is system design, not a lower standard of care by default.",
      firstStep: "Read the midwife and obstetric-pathway sections, then ask your midwife how your situation is classified over time.",
    },
    {
      situation: "You are moving to the Netherlands mid-pregnancy",
      approach:
        "Bring prior pregnancy records, medication lists and ultrasound reports. Register with a local midwife practice quickly and ask how previous care will be reviewed.",
      firstStep: "Contact practices immediately about capacity, then book GP registration if you do not have a huisarts yet.",
    },
    {
      situation: "You want English-language support",
      approach:
        "Many city practices can work in English, but availability varies. Ask when you enquire rather than assuming every appointment will be in English.",
      firstStep: "When calling practices, ask specifically whether antenatal visits and birth support can be in English.",
    },
  ] satisfies ScenarioRow[],
  snapshotSignals: [
    {
      label: "First line",
      value: "Often midwife",
      note: "A verloskundige practice is commonly the main maternity door for low-risk care.",
    },
    {
      label: "Specialist door",
      value: "When indicated",
      note: "Obstetrician / hospital pathways apply when clinical indications call for them.",
    },
    {
      label: "Register",
      value: "Early",
      note: "Contact practices soon after confirmation — capacity can be tight.",
    },
    {
      label: "After birth",
      value: "Kraamzorg + JGZ",
      note: "Postpartum home support awareness plus children's healthcare pathways.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Verloskundige First Line",
      body: "Neighbourhood midwives often coordinate antenatal care, birth planning discussions and postpartum orientation for pregnancies remaining in midwife-led pathways.",
    },
    {
      title: "Obstetric & Hospital Pathways",
      body: "When medical indications apply, care can involve an obstetrician and/or hospital team. Transfers are a normal part of the system when needed.",
    },
    {
      title: "Birth Place Options",
      body: "Home, birth centre and hospital options may be discussed when clinically suitable. Suitability is decided with your care team — not from a generic ranking.",
    },
    {
      title: "Registration Timing",
      body: "Contact a midwife practice early after pregnancy confirmation. Popular areas fill; intake paperwork and insurance details help the first visit.",
    },
    {
      title: "Insurance Orientation",
      body: "Much maternity care is oriented within the basic health insurance package. Still verify your policy year and any own contributions, including kraamzorg.",
    },
    {
      title: "Kraamzorg Awareness",
      body: "Kraamzorg is postpartum maternity home care. This page gives a short pointer only — arrange awareness early via midwife or agency pathways.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Save your midwife practice number and out-of-hours instructions once registered.",
    "Keep pregnancy records and medication lists in one phone folder.",
    "Ask about English at enquiry — not only at the first appointment.",
    "Do not treat hospital ranking lists as medical advice; this site does not rank hospitals.",
    "Urgent pregnancy concerns: use the pathway your midwife or GP gives you — call 112 for life-threatening emergencies.",
    "After birth, bookmark Healthcare for Children for JGZ and baby-care orientation.",
  ],
  howItWorks: {
    heading: "How Dutch maternity care works: from registration to postpartum",
    intro:
      "A typical pathway starts with early registration at a midwife practice, continues with antenatal check-ups and birth-place discussions, and may stay midwife-led or move to obstetric/hospital care when indicated. Postpartum orientation includes kraamzorg awareness and children's healthcare routes for the baby.",
    paragraphs: [
      "After pregnancy confirmation, many people contact a verloskundige practice to register. Intake covers medical history, prior pregnancies, medicines and practical logistics. Your midwife explains how check-ups are scheduled and how to reach the practice outside office hours.",
      "During pregnancy, antenatal visits monitor progress and create space to discuss birth preferences and place options. If indications appear that call for obstetric or hospital involvement, your team explains the pathway change. That coordination is a core design feature of Dutch maternity care.",
      "Around birth and afterward, midwife involvement often continues for midwife-led pathways, while hospital teams lead when obstetric care is indicated. Kraamzorg can support the first days at home. Baby follow-up then connects strongly to JGZ / Healthcare for Children pathways.",
    ],
    flowLabels: [
      "Confirm pregnancy",
      "Register midwife",
      "Antenatal checks",
      "Birth-place talk",
      "Birth pathway",
      "Postpartum + JGZ",
    ],
    timeline: [
      {
        phase: "1",
        title: "Pregnancy confirmed",
        detail:
          "You confirm pregnancy (often via test and then practice contact). Gather ID, insurance and any prior medical notes.",
      },
      {
        phase: "2",
        title: "Register with a midwife practice",
        detail:
          "Contact nearby verloskundige practices about capacity and intake. Ask about language and how they coordinate with local hospitals.",
      },
      {
        phase: "3",
        title: "Antenatal check-ups",
        detail:
          "Attend scheduled visits, share symptoms early, and keep medication lists updated. Your team explains screening offers and next appointments.",
      },
      {
        phase: "4",
        title: "Pathway and birth-place discussion",
        detail:
          "Discuss home, birth centre or hospital options when relevant, and understand when obstetric pathways may apply.",
      },
      {
        phase: "5",
        title: "Birth according to your pathway",
        detail:
          "Birth may remain midwife-led or take place in hospital with obstetric involvement when indicated. Follow the urgent-contact instructions you were given.",
      },
      {
        phase: "6",
        title: "Postpartum, kraamzorg and baby pathways",
        detail:
          "Arrange kraamzorg awareness in advance when possible. After birth, connect to JGZ / children's healthcare orientation for the baby.",
      },
    ] satisfies TimelineStep[],
    decisionTips: [
      "Just pregnant → contact midwife practices early.",
      "Medical complexity or prior high-risk history → tell the practice at intake; obstetric pathways may apply.",
      "Urgent severe symptoms in pregnancy → follow midwife / GP urgent instructions; call 112 if life-threatening.",
      "No GP yet → register with a huisarts in parallel (see GP guide).",
      "Moving mid-pregnancy → bring records and register locally quickly.",
      "Language needs → confirm English when you enquire.",
    ],
    howToSteps: [
      {
        name: "Confirm pregnancy and gather basics",
        text: "Have ID, BSN, insurance details and a short medical history ready before you call practices.",
      },
      {
        name: "Contact midwife practices early",
        text: "Ask about capacity, intake timing, English support and how the practice works with local hospitals.",
      },
      {
        name: "Complete registration and intake",
        text: "Share prior records, medicines and questions. Save the practice phone and out-of-hours instructions.",
      },
      {
        name: "Follow antenatal appointments",
        text: "Attend check-ups, raise concerns early, and keep a simple written list of questions for each visit.",
      },
      {
        name: "Discuss pathway and birth-place options",
        text: "Use appointments to understand midwife-led versus obstetric/hospital pathways for your situation — clinical suitability comes first.",
      },
      {
        name: "Arrange kraamzorg awareness",
        text: "Ask your midwife how kraamzorg registration works in your area and what own contribution to expect from your insurer information.",
      },
      {
        name: "Know your urgent contact route",
        text: "Before late pregnancy, confirm whom to call day and night for urgent pregnancy concerns, and when 112 is appropriate.",
      },
      {
        name: "Connect postpartum and baby care",
        text: "After birth, follow midwife/hospital discharge guidance and use Healthcare for Children for JGZ and baby healthcare orientation.",
      },
    ] satisfies HowToStep[],
  },
  midwife: {
    heading: "Verloskundige first line: the midwife as primary maternity door",
    intro:
      "For many pregnancies, a verloskundige (midwife) is the first and main professional coordinating maternity care. Understanding that door helps expats avoid waiting for an obstetrician-only model that is not how Dutch care is usually organised.",
    paragraphs: [
      "Midwife practices are often neighbourhood-based. They schedule antenatal visits, discuss screening offers at a high level, help you prepare practical birth questions, and explain how to reach them urgently. They also coordinate with GPs and hospitals when needed.",
      "Midwife-led care does not mean 'no hospital ever'. It means the midwife remains the coordinating door while the pregnancy stays within the indications for that pathway. If indications change, obstetric or hospital teams become involved.",
      "This page does not tell you which practice to choose and does not give clinical advice about your pregnancy. Those conversations belong with your midwife, obstetric team or GP.",
    ],
    cards: [
      {
        title: "Antenatal coordination",
        body: "Check-ups, practical counselling and appointment rhythm usually sit with the midwife practice for midwife-led pathways.",
      },
      {
        title: "Birth planning conversations",
        body: "Preferences and place options are discussed with clinical suitability in mind — not as a menu of guaranteed choices.",
      },
      {
        title: "Urgent contact instructions",
        body: "Once registered, you should know how to reach the practice or on-call midwife route outside office hours.",
      },
      {
        title: "Handover when needed",
        body: "If indications call for obstetric or hospital care, midwife teams coordinate the pathway change with you.",
      },
    ] satisfies TipCard[],
    points: [
      "Verloskundige = common first-line maternity professional.",
      "GP remains useful for general health and registration in the Dutch system.",
      "Obstetrician pathways join when indicated — not always from week one.",
      "No midwife rankings appear on this page.",
      "Language fit should be confirmed at enquiry.",
      "Your personal plan is set with your care team, not from this article.",
    ],
    checklist: [
      "Midwife practice shortlist by postcode",
      "Capacity and intake timing asked",
      "English support confirmed if needed",
      "Out-of-hours contact saved after registration",
      "GP practice known for coordination",
      "Prior pregnancy records gathered if relevant",
    ],
    scenarios: [
      {
        situation: "You feel healthy and want a clear first phone call",
        approach:
          "Calling midwife practices is usually the right maternity starting move after pregnancy confirmation.",
        firstStep: "Ask: 'Do you have capacity for my due month, and can visits be in English?'",
      },
      {
        situation: "You have a complex medical history",
        approach:
          "Tell the practice at first contact. Intake may involve obstetric pathway discussion earlier.",
        firstStep: "Prepare a one-page history and medication list before the intake call.",
      },
      {
        situation: "Your GP already knows you are pregnant",
        approach:
          "The GP can advise and may point you to midwife registration; maternity pathway care still typically centres on midwifery/obstetrics.",
        firstStep: "Ask the GP practice assistant for local midwife registration tips, then call practices.",
      },
      {
        situation: "You cannot find capacity nearby",
        approach:
          "Widen the postcode search, ask practices about waitlists, and keep your GP informed.",
        firstStep: "Call three practices the same day and note reply timelines.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Write your due month on a sticky note before calling — practices plan by capacity.",
      "Ask who covers nights and weekends once you are registered.",
      "Keep ultrasound and lab results in one cloud folder.",
      "If communication feels unsafe, fix language support early.",
    ],
    contrastRows: [
      {
        type: "Verloskundige (midwife)",
        focus: "First-line maternity coordination for many pathways",
        whenReferred: "Common starting door after pregnancy confirmation",
        note: "Coordinates with GP and hospital when needed",
      },
      {
        type: "Obstetrician / hospital team",
        focus: "Specialist and hospital-based maternity care",
        whenReferred: "When clinical indications apply",
        note: "May be planned from intake or after transfer",
      },
      {
        type: "GP (huisarts)",
        focus: "Primary care registration and general health",
        whenReferred: "General questions, other illness, system entry",
        note: "Not a substitute for maternity pathway registration",
      },
      {
        type: "Emergency routes",
        focus: "112 / urgent medical pathways",
        whenReferred: "Life-threatening emergencies",
        note: "Also know your midwife urgent instructions",
      },
    ] satisfies ComparisonRow[],
    crossLink: {
      label: "General Practitioner (GP) in the Netherlands",
      href: GP_NETHERLANDS_PATH,
      description: "Register with a huisarts in parallel — useful for coordination and non-maternity primary care.",
    },
  },
  obstetricPathways: {
    heading: "When obstetrician and hospital pathways apply",
    intro:
      "Obstetric and hospital maternity pathways are used when clinical indications call for specialist monitoring, hospital birth, or other hospital-based care. Understanding the 'why' helps expats interpret transfers calmly.",
    paragraphs: [
      "Some pregnancies begin in obstetric or hospital pathways because of medical history or known indications. Others start midwife-led and later transfer when new indications appear. Both patterns are normal in the Dutch system.",
      "A transfer is not automatically a judgement about your birth preferences. It is a clinical pathway change. Your team should explain what is changing and who coordinates next appointments.",
      "This guide does not list indications as medical advice. Only your midwife or obstetric team can interpret your situation. For hospital system context, see the Hospitals guide; for urgent symptoms, see Emergency Healthcare.",
    ],
    cards: [
      {
        title: "Planned obstetric pathway",
        body: "Known medical indications may mean obstetric or hospital-led care from early on, with midwife collaboration depending on local practice.",
      },
      {
        title: "Transfer during pregnancy",
        body: "If new indications appear, care can move to obstetric/hospital pathways. Ask what changes for appointments and birth place.",
      },
      {
        title: "Hospital birth orientation",
        body: "Hospital birth may be planned or become appropriate during labour. Bring ID, insurance details and your care-team instructions.",
      },
      {
        title: "Shared communication",
        body: "You should leave pathway conversations knowing who to call and which team is now primary.",
      },
    ] satisfies TipCard[],
    points: [
      "Obstetric pathways = indication-led, not preference-ranked.",
      "Transfers are system features when clinically needed.",
      "Ask who coordinates after any pathway change.",
      "Hospital guides explain secondary care mechanics — not birth coaching.",
      "Urgent danger signs need urgent routes, not waiting for a routine slot.",
      "No hospital rankings on this page.",
    ],
    checklist: [
      "Current primary team identified (midwife / obstetric / both)",
      "Reason for pathway explained in your own words",
      "Next appointment location confirmed",
      "Urgent contact numbers updated",
      "Insurance card and ID ready for hospital visits",
      "Questions written before the next consult",
    ],
    contrastRows: [
      {
        route: "Midwife-led pathway",
        when: "Pregnancy remains within midwife-care indications",
        how: "Antenatal visits at midwife practice; birth place per clinical discussion",
        note: "Can transfer if indications change",
      },
      {
        route: "Obstetric / hospital pathway",
        when: "Clinical indications call for specialist or hospital-based care",
        how: "Appointments and birth planning with obstetric/hospital team involvement",
        note: "Local collaboration models vary",
      },
      {
        route: "Urgent midwife / GP route",
        when: "Urgent pregnancy concerns that are not life-threatening",
        how: "Use the urgent instructions your practice gave you",
        note: "Do not wait for a routine antenatal slot",
      },
      {
        route: "112 emergency",
        when: "Life-threatening emergencies",
        how: "Call 112",
        note: "See Emergency Healthcare for urgent system orientation",
      },
    ] satisfies ContactRouteRow[],
    scenarios: [
      {
        situation: "Your midwife mentions a hospital consultation",
        approach:
          "Treat it as a pathway conversation. Ask what question the hospital visit answers and who follows up afterward.",
        firstStep: "Write three questions: why, what changes, who is my main contact now?",
      },
      {
        situation: "You strongly prefer hospital birth from the start",
        approach:
          "Share preferences early. Suitability and local pathway rules still guide what is possible.",
        firstStep: "Ask at intake how hospital birth planning works in that practice's network.",
      },
      {
        situation: "You are anxious about 'transfer' language",
        approach:
          "Transfers are common when indications appear. Ask for plain-language explanations and interpreter support if needed.",
        firstStep: "Request a written summary of the next step after the consult.",
      },
      {
        situation: "You need secondary-care context",
        approach:
          "Use the Hospitals guide for referrals, admissions and hospital expectations — keep maternity clinical questions with your maternity team.",
        firstStep: "Open Hospitals for system orientation, then bring practical hospital questions to your midwife/obstetric appointment.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "After any pathway change, update your phone favourites.",
      "Bring a support person to complex consults when helpful.",
      "Ask whether midwife involvement continues alongside obstetric care.",
      "Keep discharge and consult letters together for later JGZ / paediatric context.",
    ],
    crossLink: {
      label: "Hospitals in the Netherlands",
      href: HOSPITALS_NETHERLANDS_PATH,
      description: "Hospital referrals, admissions and what expats should expect in secondary care.",
    },
  },
  birthPlaces: {
    heading: "Birth place orientation: home, birth centre, hospital",
    intro:
      "Dutch maternity conversations often include birth-place options. This is orientation about the map — not a promise that every option is suitable for every pregnancy.",
    paragraphs: [
      "Depending on clinical suitability and local organisation, discussions may include home birth with midwife support, birth in a birth centre (geboortecentrum), or hospital birth. Suitability can change during pregnancy or labour.",
      "Expats sometimes hear 'home birth is common in the Netherlands' and over-interpret it. Home birth can be part of the system for some pathways; it is not a requirement, and it is not appropriate for every situation.",
      "Your midwife or obstetric team explains what is realistic for you. This page does not recommend a place of birth.",
    ],
    cards: [
      {
        title: "Home birth orientation",
        body: "Discussed when clinically suitable and locally supported. Logistics and urgent transfer plans are part of the conversation with your team.",
      },
      {
        title: "Birth centre orientation",
        body: "Some regions offer geboortecentrum options linked to midwifery and hospital networks. Availability is local.",
      },
      {
        title: "Hospital birth orientation",
        body: "Hospital birth may be preferred, planned for indications, or become appropriate during labour. Know parking, entrance and document needs in advance.",
      },
      {
        title: "Flexibility",
        body: "Plans can change. Ask how transfers work and which number to call if labour starts.",
      },
    ] satisfies TipCard[],
    points: [
      "Birth place = clinical discussion, not a ranking list.",
      "Suitability can change over time.",
      "Know the call-when-labour-starts instructions.",
      "Hospital bag and ID still matter for hospital pathways.",
      "Partner roles and language needs should be planned early.",
      "No place-of-birth recommendations on this page.",
    ],
    checklist: [
      "Current intended birth-place discussion noted",
      "Conditions that would change the plan understood at a high level",
      "Labour-start phone instructions saved",
      "Travel time to hospital estimated",
      "ID and insurance card placement agreed at home",
      "Support-person plan discussed",
    ],
    timeline: [
      {
        phase: "A",
        title: "Early preference conversation",
        detail: "Share preferences without treating them as guarantees; ask what factors matter in Dutch pathways.",
      },
      {
        phase: "B",
        title: "Ongoing suitability review",
        detail: "Antenatal visits revisit whether midwife-led place options remain appropriate.",
      },
      {
        phase: "C",
        title: "Late-pregnancy practical plan",
        detail: "Confirm numbers, routes, documents and what to do when labour starts.",
      },
      {
        phase: "D",
        title: "In-labour flexibility",
        detail: "Follow your team's guidance if transfer or hospital care becomes appropriate.",
      },
    ] satisfies TimelineStep[],
    urgencyRows: [
      {
        situation: "Life-threatening emergency in pregnancy or postpartum",
        level: "emergency",
        action: "Call 112. Do not wait for a routine antenatal slot.",
      },
      {
        situation: "Urgent pregnancy concern (severe symptoms) outside life-threatening emergencies",
        level: "urgent",
        action: "Use the urgent midwife / practice instructions you were given, or GP / Huisartsenpost pathways when directed.",
      },
      {
        situation: "Routine antenatal question or scheduling",
        level: "routine",
        action: "Contact your midwife practice during listed hours or use their normal messaging route.",
      },
    ] satisfies UrgencyRow[],
    scenarios: [
      {
        situation: "You assumed hospital birth was automatic",
        approach:
          "Ask how place-of-birth discussions work in your practice. Hospital birth remains available when appropriate.",
        firstStep: "Put 'birth place options' on your next appointment question list.",
      },
      {
        situation: "You want home birth because you read it is 'Dutch culture'",
        approach:
          "Culture notes are not clinical clearance. Suitability is individual and can change.",
        firstStep: "Ask your midwife what factors they review before home birth remains on the table.",
      },
      {
        situation: "You live far from the hospital",
        approach:
          "Travel time is a practical planning factor. Discuss it explicitly with your team.",
        firstStep: "Estimate night-time travel time and share it at a check-up.",
      },
      {
        situation: "Your preference and clinical advice differ",
        approach:
          "Ask for plain-language reasons and what monitoring or place change is recommended.",
        firstStep: "Request a written summary of the agreed plan after the consult.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Keep the labour-start number on the fridge and in your phone.",
      "Pack ID and insurance card even if you hope for a non-hospital birth.",
      "Discuss language needs for labour support early.",
      "Read Emergency Healthcare for 112 / urgent system orientation.",
    ],
    crossLink: {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      description: "112, Huisartsenpost, SEH and urgent care pathways when symptoms are acute.",
    },
  },
  registration: {
    heading: "Registration timing: contact a midwife practice early",
    intro:
      "Early registration is one of the highest-value expat actions in Dutch maternity care. Practices plan capacity by due month; waiting can shrink your options.",
    paragraphs: [
      "After pregnancy confirmation, contact midwife practices promptly — especially in larger cities and popular neighbourhoods. Ask about intake timing, documents, language and how they work with nearby hospitals.",
      "If you are new to the Netherlands, also progress GP registration and insurance paperwork in parallel. Maternity pathway care still centres on midwifery/obstetrics, but Dutch healthcare works better when your huisarts and insurer details are in order.",
      "Moving mid-pregnancy requires extra speed: bring prior records and explain your due date clearly on first contact.",
    ],
    cards: [
      {
        title: "Call early",
        body: "Do not wait until the second trimester to discover local capacity limits.",
      },
      {
        title: "Intake file",
        body: "ID, BSN, insurance, medical history and prior pregnancy notes speed registration.",
      },
      {
        title: "Language check",
        body: "Confirm English (or interpreter needs) when you enquire, including for later birth support if relevant.",
      },
      {
        title: "Parallel admin",
        body: "GP registration and insurer details support the wider healthcare system around maternity care.",
      },
    ] satisfies TipCard[],
    points: [
      "Early contact protects capacity options.",
      "Due month is a practical planning fact — share it.",
      "Keep a log of which practices you called and their replies.",
      "No practice rankings on this page.",
      "If capacity is tight, widen geography and ask about waitlists.",
      "Update registration details after address changes.",
    ],
    checklist: [
      "Pregnancy confirmation noted",
      "Three nearby practices contacted",
      "Intake appointment booked",
      "Documents folder prepared",
      "GP registration status checked",
      "Kraamzorg awareness question added to intake list",
    ],
    contrastRows: [
      {
        route: "Midwife practice registration",
        when: "As soon as pregnancy is confirmed (or on arrival if mid-pregnancy move)",
        how: "Phone or online enquiry → intake → antenatal schedule",
        note: "Primary maternity pathway door for many people",
      },
      {
        route: "GP registration",
        when: "If you do not yet have a huisarts",
        how: "Register with a local GP practice",
        note: "Supports coordination and non-maternity care",
      },
      {
        route: "Insurer details check",
        when: "Early pregnancy admin",
        how: "Confirm policy active; ask maternity / kraamzorg contribution questions",
        note: "Verify for your policy year",
      },
      {
        route: "Kraamzorg awareness",
        when: "Often during pregnancy, not after birth only",
        how: "Ask midwife which registration route applies locally",
        note: "Short pointer — not full encyclopedia here",
      },
    ] satisfies ContactRouteRow[],
    scenarios: [
      {
        situation: "You confirmed pregnancy this week",
        approach: "Start midwife calls now, even if your first intake is weeks away.",
        firstStep: "Call two practices today and ask about capacity for your due month.",
      },
      {
        situation: "Practices say they are full",
        approach: "Ask for waitlists and neighbouring-area referrals; keep trying promptly.",
        firstStep: "Widen your postcode radius and call three more practices.",
      },
      {
        situation: "You arrive at week 28",
        approach: "Treat registration as urgent admin. Bring foreign records translated if possible.",
        firstStep: "Email/call practices with due date, week number and record summary attached.",
      },
      {
        situation: "You only want a hospital registration desk",
        approach:
          "Hospital pathways still usually connect to maternity network rules. Ask hospital maternity information desks how local registration works, and still clarify midwife vs obstetric doors.",
        firstStep: "Ask: 'How do expats register for maternity care in this hospital network?' then follow the answer with midwife/obstetric intake as directed.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Put 'midwife registration' on your moving-to-NL checklist if you are relocating pregnant.",
      "Save acceptance emails/PDFs in the same folder as insurance cards.",
      "Tell your employer leave-planning separately — this page is healthcare orientation only.",
      "Re-confirm out-of-hours numbers after registration.",
    ],
  },
  insurance: {
    heading: "Insurance & costs: what maternity care usually costs",
    intro:
      "Much maternity care sits in the basic health insurance package (basisverzekering). The money surprises for expats are usually kraamzorg own contribution, and a possible own contribution if you choose a polyclinic hospital birth without a medical indication. Use the indicative 2026 figures below for planning — then verify with your insurer.",
    paragraphs: [
      "Midwife care (verloskundige), medically indicated obstetric/hospital birth care, and standard maternity pathway elements are generally oriented in the basic package. Core midwifery and obstetric maternity care usually sits outside eigen risico — but some related diagnostics, transport or non-maternity services can still touch deductible rules. Always verify the billing route for your situation.",
      "Kraamzorg (postpartum maternity home care) is covered from the basic package for indicated hours (commonly oriented between about 24–80 hours; many families land somewhere around the mid-40s). In 2026 the statutory own contribution (eigen bijdrage) for kraamzorg at home is about €5.70 per hour. At roughly 45–49 hours that often lands around €250–€280 out of pocket — unless your aanvullende verzekering reimburses (part of) that contribution.",
      "If you choose a polyclinic hospital or birth-centre birth without a medical indication, a separate statutory own contribution commonly applies. Orientation figures for 2026 often put that household contribution toward roughly €450–€600+ depending on the facility tariff versus the basic-package contribution. Medically indicated hospital birth is typically covered without that same own-contribution logic — confirm with your midwife and insurer. This is orientation only — not a quote.",
    ],
    indicativeNote:
      "Indicative cost orientation for 2026 planning conversations — not a fee schedule, quotation or reimbursement promise. Hours, facility tariffs and package extras change by indication, insurer and policy year. Always verify remaining eigen risico relevance, kraamzorg hour indication, own-contribution amounts and any aanvullende reimbursement before you rely on a number.",
    indicativeRows: [
      {
        item: "Midwife / obstetric maternity pathway care",
        indicative: "Usually covered via basic package",
        whatYouPay: "Typically €0 for core maternity pathway care",
        note: "Usually outside eigen risico — verify edge cases with insurer.",
      },
      {
        item: "Kraamzorg own contribution (home, 2026)",
        indicative: "About €5.70 / hour",
        whatYouPay: "Often roughly €250–€280 for ~45–49 indicated hours",
        note: "Hours commonly oriented ~24–80; indication sets your total.",
      },
      {
        item: "Kraamzorg hours (orientation)",
        indicative: "Often about 24–80 indicated hours",
        whatYouPay: "Own contribution × indicated hours (unless aanvullend reimburses)",
        note: "Ask midwife/agency for your expected indication band.",
      },
      {
        item: "Polyclinic hospital birth (no medical indication)",
        indicative: "Statutory own contribution — often toward ~€450–€600+",
        whatYouPay: "Facility-dependent residual after basic contribution",
        note: "Medically indicated hospital birth usually follows different cover rules.",
      },
      {
        item: "Birth-centre / kraamhotel stay without medical indication",
        indicative: "Often ~€45 / day own contribution (mother + child combined orientation)",
        whatYouPay: "Daily own contribution while you stay under those rules",
        note: "Confirm 2026 day tariffs with insurer and facility.",
      },
      {
        item: "Related diagnostics / non-maternity services",
        indicative: "May interact with eigen risico (~€385 adult mandatory in 2026)",
        whatYouPay: "Depends on the service code and remaining deductible",
        note: "Ask before optional extras; maternity core care is different.",
      },
      {
        item: "Aanvullende package extras",
        indicative: "Package-specific reimbursement for eigen bijdrage",
        whatYouPay: "Premium for packages that refund kraamzorg / birth own contribution",
        note: "Compare before renewal if you expect pregnancy costs.",
      },
      {
        item: "Adult mandatory eigen risico (2026 context)",
        indicative: "About €385 / year (higher with voluntary top-up)",
        whatYouPay: "Usually not for core midwifery/kraamzorg — may apply to other care",
        note: "Eigen bijdrage ≠ eigen risico — both can appear on maternity budgets.",
      },
    ],
    orientationCards: [
      {
        title: "Basic package first",
        body: "Essential maternity pathway care is oriented in basisverzekering — budget stress usually comes from own contributions, not from midwife visit fees.",
      },
      {
        title: "Kraamzorg €5.70/hour (2026)",
        body: "Plan for about €5.70 per indicated kraamzorg hour at home. Roughly 45–49 hours often means about €250–€280 unless aanvullend helps.",
      },
      {
        title: "Hospital birth choice matters",
        body: "Without a medical indication, a polyclinic hospital birth can add a statutory own contribution (often toward €450–€600+). Medically indicated stays follow different rules.",
      },
      {
        title: "Compare aanvullend early",
        body: "Some supplementary packages reimburse kraamzorg or birth own contributions — useful to check before January switching season.",
      },
    ] satisfies TipCard[],
    costFactors: [
      "Kraamzorg indicated hours × ~€5.70 own contribution (2026)",
      "Whether hospital/birth-centre birth has a medical indication",
      "Facility tariffs above the basic-package contribution for polyclinic birth",
      "Aanvullende reimbursement of eigen bijdrage (if any)",
      "Related services that may touch eigen risico (~€385)",
      "Administrative mistakes (wrong policy number, expired registration)",
    ],
    checklist: [
      "Insurer app/portal login works",
      "Policy active for your BSN",
      "2026 kraamzorg own contribution confirmed (~€5.70/hour orientation)",
      "Expected kraamzorg hour band asked (e.g. mid-40s vs higher indication)",
      "Polyclinic vs medically indicated hospital birth cost difference asked",
      "Aanvullende eigen-bijdrage reimbursement checked",
      "Eigen risico relevance asked for any related non-maternity services",
      "Insurance card photo saved offline",
    ],
    scenarios: [
      {
        situation: "You worry maternity care will be fully self-pay",
        approach:
          "Core midwife and medically indicated obstetric pathway care is generally oriented in basic insurance. Budget instead for kraamzorg own contribution (~€5.70/hour in 2026) and any non-indicated hospital birth contribution.",
        firstStep:
          "Message insurer support: 'Please confirm maternity pathway cover, 2026 kraamzorg eigen bijdrage, and polyclinic birth own contribution for my package.'",
      },
      {
        situation: "You expect about 49 hours of kraamzorg",
        approach:
          "Multiply indicated hours by about €5.70 for a rough 2026 own-contribution estimate (often around €280), then check whether aanvullend reimburses any of it.",
        firstStep: "Ask your midwife/agency for the expected indication band and ask insurer what aanvullend refunds.",
      },
      {
        situation: "You want a hospital birth without a medical indication",
        approach:
          "Expect a statutory own contribution that can land toward roughly €450–€600+ depending on facility tariffs — verify exact 2026 figures before you decide.",
        firstStep: "Ask midwife and insurer for the polyclinic birth own-contribution estimate for your preferred hospital.",
      },
      {
        situation: "You change insurer in January while pregnant",
        approach:
          "Confirm continuity of maternity pathway billing, kraamzorg contribution rules and update your midwife practice with new policy details.",
        firstStep: "Send the new insurance card to the practice admin as soon as it is available.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Ask insurance cost questions in writing so you can revisit euro figures.",
      "Do not delay midwife registration while waiting for perfect tariff clarity.",
      "Keep kraamzorg €/hour × hours next to other birth-prep budget notes.",
      "Compare aanvullende packages that refund kraamzorg or birth own contribution before renewal season.",
    ],
    crossLink: {
      label: "Health Insurance in the Netherlands",
      href: HEALTH_INSURANCE_PATH,
      description: "Basic package, deductible and choosing cover — the funding layer beside maternity pathways.",
    },
  },
  kraamzorg: {
    heading: "Kraamzorg awareness (short pointer)",
    intro:
      "Kraamzorg is postpartum maternity home care in the Netherlands. This section is a short awareness pointer only — not a full kraamzorg encyclopedia.",
    paragraphs: [
      "Many families arrange kraamzorg during pregnancy so support can start after birth at home. Hours, scheduling and own contribution depend on indication, availability and insurer rules.",
      "Your midwife is usually the practical person to ask which registration route applies locally. Agencies and availability vary by region and season — arrange awareness early rather than only after discharge.",
      "For baby healthcare after the first days — consultatiebureau / JGZ orientation — use Healthcare for Children. That page is the stronger home for ongoing child health system questions.",
    ],
    cards: [
      {
        title: "What it is",
        body: "Postpartum maternity home support in the first days after birth — practical and care-support oriented under local rules.",
      },
      {
        title: "When to arrange awareness",
        body: "During pregnancy, via midwife guidance and local registration routes — not only after you are home.",
      },
      {
        title: "Costs",
        body: "In 2026 the statutory own contribution for kraamzorg at home is about €5.70 per hour. Roughly 45–49 indicated hours often means about €250–€280 unless aanvullend reimburses part of it — verify with your insurer.",
      },
      {
        title: "Boundary of this page",
        body: "We do not expand into a full kraamzorg guide here. Ask your midwife for the local operational path.",
      },
    ] satisfies TipCard[],
    points: [
      "Kraamzorg = postpartum home support awareness.",
      "Register interest early.",
      "Own contribution often applies — about €5.70/hour in 2026.",
      "Availability can be seasonal or regional.",
      "Baby follow-up → Healthcare for Children / JGZ.",
      "Not medical advice and not an agency ranking.",
    ],
    checklist: [
      "Asked midwife how kraamzorg registration works locally",
      "Noted any registration deadline mentioned",
      "Requested insurer own-contribution explanation",
      "Saved agency confirmation if received",
      "Bookmarked Healthcare for Children for baby pathways",
      "Shared address access details with partner/support person",
    ],
    scenarios: [
      {
        situation: "You have never heard of kraamzorg",
        approach:
          "Treat it as a standard Dutch postpartum support concept to ask about during pregnancy.",
        firstStep: "Add 'kraamzorg registration' to your next midwife appointment agenda.",
      },
      {
        situation: "You plan to have family flying in for help",
        approach:
          "Family help and kraamzorg can coexist, but registration timing still matters if you want agency support.",
        firstStep: "Ask what happens if you decline or reduce hours — then decide with full information.",
      },
      {
        situation: "You will stay with relatives in another city after birth",
        approach:
          "Location affects kraamzorg logistics. Tell your midwife the planned postpartum address early.",
        firstStep: "Confirm which address should be used for kraamzorg planning.",
      },
      {
        situation: "You want deep kraamzorg detail",
        approach:
          "Use your midwife and insurer for operational detail. This cornerstone stays at awareness level by design.",
        firstStep: "Ask the practice for their standard kraamzorg explanation sheet or trusted local link.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Do not leave kraamzorg questions until the hospital discharge moment.",
      "Keep contribution estimates next to other birth-prep costs.",
      "If language is a concern, ask whether kraamverzorgenden with English are available — never guaranteed.",
      "After the first days, shift baby healthcare questions to JGZ / Healthcare for Children.",
    ],
    crossLink: {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      description: "JGZ / consultatiebureau and children's healthcare orientation after birth.",
    },
  },
  finding: {
    heading: "Finding maternity care: midwife practices and network fit",
    intro:
      "Finding care usually means finding a midwife practice with capacity, confirming language and hospital-network fit, and knowing how obstetric pathways work if indications apply.",
    paragraphs: [
      "Search by postcode, ask neighbours or expats for process tips (not rankings), and call practices directly about capacity. Ask how the practice collaborates with local hospitals and what happens if transfer is needed.",
      "If your history suggests obstetric pathways from the start, say so on first contact so the practice can explain the local route. Hospital information desks can also explain network registration habits — still clarify who your primary maternity team will be.",
      "This site does not recommend or rank midwives, hospitals or kraamzorg agencies.",
    ],
    cards: [
      {
        title: "Search nearby",
        body: "Start with practices close to home; night-time travel time matters later.",
      },
      {
        title: "Ask capacity questions",
        body: "Due month, intake timing and whether the practice is accepting new clients.",
      },
      {
        title: "Confirm language",
        body: "Antenatal English support and labour-language realities can differ — ask both.",
      },
      {
        title: "Network clarity",
        body: "Understand linked hospitals and obstetric referral habits at a high level.",
      },
    ] satisfies TipCard[],
    points: [
      "Capacity first, then fit questions.",
      "No rankings on this page.",
      "Save written confirmation of registration.",
      "Check website + phone; websites can lag capacity.",
      "Partner should also know the practice number.",
      "Re-check details after you move house.",
    ],
    checklist: [
      "Postcode shortlist created",
      "Capacity calls logged",
      "Language confirmed",
      "Hospital network noted",
      "Registration confirmation saved",
      "Urgent number saved after intake",
    ],
    contrastRows: [
      {
        route: "Midwife practice search",
        when: "Starting maternity pathway",
        how: "Postcode search + phone/email enquiry",
        note: "Most common expat starting move",
      },
      {
        route: "Hospital maternity information",
        when: "You need network/process clarity",
        how: "Ask how registration works in that hospital's maternity network",
        note: "Still clarify midwife vs obstetric primary door",
      },
      {
        route: "GP practice assistant",
        when: "You need local process tips",
        how: "Ask how patients usually register for maternity care locally",
        note: "Helpful pointer, not a substitute for midwife intake",
      },
      {
        route: "Insurer support",
        when: "Coverage and contribution questions",
        how: "Portal message or phone",
        note: "Does not replace clinical registration",
      },
    ] satisfies ContactRouteRow[],
    scenarios: [
      {
        situation: "Two practices have capacity",
        approach:
          "Compare practical fit: language, distance, hospital links and how questions are answered — not online star ratings.",
        firstStep: "Ask each the same three questions and compare notes the same day.",
      },
      {
        situation: "You need obstetric-led care from the start",
        approach:
          "State indications/history clearly and ask which registration route the region uses.",
        firstStep: "Call and say you need guidance on obstetric pathway registration, then follow their intake instructions.",
      },
      {
        situation: "English is essential for you",
        approach:
          "Confirm the care team language, not only reception English.",
        firstStep: "Ask: 'Can antenatal visits and birth support be in English with the treating team?'",
      },
      {
        situation: "You found conflicting forum advice",
        approach:
          "Prefer your midwife/obstetric team and official sources over anonymous threads.",
        firstStep: "Bring the conflicting claim to your intake as a clarifying question.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Keep a simple spreadsheet: practice, capacity answer, language, notes.",
      "Touring every practice is optional; a clear phone enquiry often unlocks intake.",
      "If you feel dismissed on language, try another practice rather than staying unsafe.",
      "After registration, meet practical logistics: parking, bike routes, partner instructions.",
    ],
  },
  differences: {
    heading: "Common differences expats notice",
    intro:
      "Dutch maternity care can feel unfamiliar if you expected obstetrician-first, hospital-only pathways. These differences are system characteristics — once expected, planning gets easier.",
    cards: [
      {
        title: "Midwife-first is normal",
        body: "Many pregnancies are coordinated by a verloskundige unless indications call for obstetric pathways.",
        advice: "Start with midwife registration rather than waiting for an automatic obstetrician assignment.",
      },
      {
        title: "Birth-place talk is expected",
        body: "Home, birth centre and hospital may all appear in conversations when clinically relevant.",
        advice: "Share preferences, then listen for suitability factors — plans can change.",
      },
      {
        title: "Transfer is a pathway tool",
        body: "Moving to hospital or obstetric care when indicated is normal system behaviour.",
        advice: "Ask for plain-language reasons and who coordinates next.",
      },
      {
        title: "Kraamzorg exists",
        body: "Postpartum home support is a known Dutch feature with registration and contribution rules.",
        advice: "Raise kraamzorg awareness during pregnancy, not only after birth.",
      },
      {
        title: "Admin timing matters",
        body: "Capacity constraints make early registration more important than in some other countries.",
        advice: "Call practices as soon as pregnancy is confirmed or on arrival if relocating.",
      },
      {
        title: "No ranking culture here",
        body: "This guide will not tell you the 'best hospital' or 'best midwife'.",
        advice: "Choose on capacity, communication, distance and clinical fit questions with professionals.",
      },
    ] satisfies MistakeCard[],
    tips: [
      "Translate your home-country assumptions into questions, not demands.",
      "Keep GP, midwife and insurer contacts in one note.",
      "Use Healthcare for Children early for post-birth system orientation.",
      "For acute fear or danger signs, use urgent routes immediately.",
    ],
  },
  preparation: {
    heading: "Maternity preparation checklist",
    paragraphs: [
      "A short file and a clear contact plan reduce stress more than collecting every possible product. Focus on registration, documents, urgent numbers, insurance clarity and kraamzorg awareness.",
      "Clinical decisions stay with your midwife or obstetric team. This checklist is administrative and orientation support only.",
    ],
    checklist: [
      "Midwife practice registered and confirmation saved",
      "Out-of-hours maternity contact instructions saved",
      "GP practice known / registered",
      "ID, BSN and insurance card accessible",
      "Medication and allergy list updated",
      "Birth-place and pathway questions written",
      "Kraamzorg registration awareness started",
      "Hospital route and parking notes for your network",
      "Partner/support-person briefed on phone numbers",
      "Healthcare for Children bookmarked for after birth",
    ],
    roleCards: [
      { role: "You / partner", focus: "Register early, keep documents, ask language and pathway questions." },
      { role: "Verloskundige", focus: "First-line maternity coordination for many pathways; urgent instructions." },
      { role: "Obstetric / hospital team", focus: "Indication-led specialist and hospital maternity care when needed." },
      { role: "Insurer", focus: "Coverage explanations, eigen risico questions and kraamzorg contribution rules." },
    ] satisfies RoleCard[],
    tips: [
      "Rehearse the urgent call route once with your partner.",
      "Keep a paper backup of key numbers.",
      "Do not let perfect nesting delay registration admin.",
      "After birth, shift baby healthcare questions to JGZ pathways.",
    ],
  },
  mistakes: {
    heading: "Common expat mistakes (and fixes)",
    intro:
      "Most maternity-care mistakes are timing or assumption errors — waiting to register, expecting obstetrician-first care, or discovering kraamzorg too late.",
    cards: [
      {
        title: "Waiting too long to register",
        body: "Delaying midwife contact until late pregnancy can shrink capacity options.",
        advice: "Call practices as soon as pregnancy is confirmed or immediately after relocating.",
      },
      {
        title: "Assuming obstetrician-first care",
        body: "Expecting a hospital obstetrician to automatically own every pregnancy from week one leads to confusion.",
        advice: "Start with verloskundige registration and ask when obstetric pathways apply.",
      },
      {
        title: "Skipping kraamzorg awareness",
        body: "Leaving postpartum support questions until after birth creates avoidable stress.",
        advice: "Ask your midwife during pregnancy how local kraamzorg registration works.",
      },
      {
        title: "Ignoring insurance contribution questions",
        body: "Surprise bills often come from unverified eigen risico or kraamzorg own-contribution assumptions.",
        advice: "Message your insurer early and save the written answer.",
      },
      {
        title: "Using hospital ranking lists as medical advice",
        body: "Forum 'best hospital' threads are not clinical guidance.",
        advice: "Discuss network fit with your maternity team; this site does not rank hospitals.",
      },
      {
        title: "No urgent-number plan",
        body: "Couples sometimes only save the daytime reception number.",
        advice: "After intake, save day and out-of-hours instructions, plus 112 for life-threatening emergencies.",
      },
    ] satisfies MistakeCard[],
    adaptationTips: [
      "Replace assumptions with a written question list for intake.",
      "Treat registration like a moving-house critical path item.",
      "Keep maternity, GP and insurer threads separate but linked in one folder.",
      "After birth, open Healthcare for Children before scrambling for baby-system answers.",
    ],
  },
  faq: [
    {
      q: "Do I need an obstetrician for pregnancy care in the Netherlands?",
      a: "Not automatically. Many pregnancies are midwife-led (verloskundige) unless clinical indications call for obstetric or hospital pathways. Your team explains what applies to you.",
    },
    {
      q: "When should I register with a midwife?",
      a: "Contact practices early after pregnancy confirmation — capacity can be limited, especially in busy areas. If you move mid-pregnancy, register as soon as you arrive.",
    },
    {
      q: "Can I give birth in hospital?",
      a: "Yes. Hospital birth is part of Dutch maternity pathways and may be planned or become appropriate based on indications and local organisation. Discuss options with your midwife or obstetric team.",
    },
    {
      q: "Is home birth required?",
      a: "No. Home birth can be discussed when clinically suitable and locally supported, but it is not required and is not appropriate for every situation.",
    },
    {
      q: "What is a verloskundige?",
      a: "A midwife — often the first-line maternity care professional coordinating antenatal care and birth planning conversations for midwife-led pathways.",
    },
    {
      q: "What is kraamzorg?",
      a: "Postpartum maternity home care. This guide only gives awareness — ask your midwife about local registration and your insurer about own contribution.",
    },
    {
      q: "Is maternity care covered by basic insurance?",
      a: "Essential midwife and medically indicated obstetric pathway care is generally oriented within the basic package and usually outside eigen risico. Budget separately for kraamzorg own contribution (about €5.70/hour in 2026) and any polyclinic hospital birth own contribution if you birth in hospital without a medical indication.",
    },
    {
      q: "How much does kraamzorg cost?",
      a: "Indicated kraamzorg hours are covered from the basic package, but you pay a statutory own contribution — about €5.70 per hour in 2026. Many families land around the mid-40s hours, which often means roughly €250–€280 out of pocket unless aanvullende cover reimburses (part of) that contribution. Confirm your indication and package.",
    },
    {
      q: "Does a hospital birth cost extra?",
      a: "Medically indicated hospital birth is typically covered under maternity pathway rules. If you choose a polyclinic hospital or birth-centre birth without a medical indication, a statutory own contribution commonly applies — orientation figures for 2026 often land toward roughly €450–€600+ depending on the facility. Verify exact amounts with your insurer and midwife.",
    },
    {
      q: "Can I get maternity care in English?",
      a: "Many practices in internationally oriented areas can work in English, but it is not guaranteed. Confirm with the treating team when you enquire.",
    },
    {
      q: "What if my pregnancy becomes higher risk?",
      a: "Care may transfer to obstetric and/or hospital pathways. Ask what changes, who coordinates next, and which numbers to use urgently.",
    },
    {
      q: "How does this connect to children's healthcare?",
      a: "After birth, baby follow-up often connects to JGZ / consultatiebureau pathways. See Healthcare for Children for that system orientation.",
    },
    {
      q: "Who do I call for urgent pregnancy concerns?",
      a: "Use the urgent instructions from your midwife or obstetric team. For life-threatening emergencies, call 112. See also Emergency Healthcare.",
    },
    {
      q: "Does this page recommend midwives or hospitals?",
      a: "No midwife or hospital ranking. Where we list partner or referral options (for example insurance comparison or childcare discovery), those links are disclosed discovery tools — not clinical recommendations. Always confirm language, capacity and fit yourself.",
    },
    {
      q: "Do I still need a GP?",
      a: "Yes, GP registration remains important for Dutch primary care and coordination. Maternity pathway care is still centred on midwifery/obstetrics.",
    },
    {
      q: "What should I bring to intake?",
      a: "ID, insurance details, medication list, prior pregnancy or medical records if available, and your top questions about language, pathways and kraamzorg.",
    },
  ],
  faqQuickReference: [
    "Verloskundige is often first line.",
    "Obstetric/hospital pathways when indicated.",
    "Register early for capacity.",
    "Hospital birth is available when appropriate — not the only discussed option.",
    "Kraamzorg own contribution ~€5.70/hour in 2026 (often ~€250–€280 for mid-40s hours).",
    "Polyclinic birth without indication can add ~€450–€600+ own contribution — verify.",
    "Urgent: midwife instructions; life-threatening: 112.",
    "After birth: Healthcare for Children / JGZ.",
  ],
  recommended: {
    heading: "Recommended support for maternity planning",
    intro:
      "Use these referral options when you want to compare insurance packages that can refund kraamzorg or birth own contributions, or when you are planning childcare after birth. This is not a ranking of midwives, hospitals or kraamzorg agencies — confirm clinical and local registration routes with your midwife.",
    disclosure:
      "Some links are affiliate or referral links. If you use them, we may earn a commission at no extra cost to you. Ordering reflects editorial relevance for expats, not pay-to-rank. This is not medical advice and not a clinic or agency ranking.",
    affiliatePlacementId: "nl-health-maternity-support-providers" as const,
    supportCards: [
      {
        name: "Independer",
        partnerSlug: "independer",
        url: "https://www.independer.nl/",
        useFor:
          "Compare Dutch basic and supplementary insurance — useful when checking packages that reimburse kraamzorg or polyclinic-birth own contributions.",
        priceRange: "Free comparison; premiums and eigen-bijdrage reimbursements vary by package.",
        city: "Netherlands-wide",
        isAffiliate: true,
      },
      {
        name: "Kinderdagverblijf.nl",
        partnerSlug: "kinderdagverblijf-nl",
        url: "https://www.kinderdagverblijf.nl/",
        useFor: "Search daycare centres by location while you plan the months after birth — waiting lists can be long in busy cities.",
        priceRange: "Directory for discovery; confirm fees and availability with each centre.",
        city: "Netherlands-wide",
        isAffiliate: false,
      },
      {
        name: "Sitters.nl",
        partnerSlug: "sitters-nl",
        url: "https://www.sitters.nl/",
        useFor: "Flexible babysitting for evenings or gaps before a fixed daycare slot — useful after the kraamzorg weeks.",
        priceRange: "Confirm hourly rates and vetting on the platform.",
        city: "Netherlands-wide",
        isAffiliate: false,
      },
    ],
    categoryLinks: [
      { href: HEALTH_INSURANCE_PATH, label: "Health insurance guide" },
      { href: HEALTH_INSURANCE_COMPARISON_PATH, label: "Health insurance comparison" },
      { href: "/netherlands/services/health-insurance/", label: "Health insurance providers" },
      { href: HEALTHCARE_FOR_CHILDREN_PATH, label: "Healthcare for Children" },
      { href: "/netherlands/services/", label: "Browse all services" },
    ],
  },
  howToSchema: {
    name: "Using Maternity Care Pathways in the Netherlands",
    description:
      "Step-by-step orientation for expats on Dutch maternity care: registering with a midwife, understanding obstetric pathways, discussing birth places, checking insurance and arranging kraamzorg awareness.",
    anchor: "#how-it-works",
  },
  relatedGuidesTips: [
    "Post-birth baby pathways → Healthcare for Children.",
    "GP registration → GP guide.",
    "Hospital system context → Hospitals.",
    "Urgent symptoms → Emergency Healthcare.",
    "Package and deductible basics → Health Insurance.",
    "Medicines → Pharmacies / Prescriptions.",
  ],
  relatedGuides: [
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "JGZ and children's healthcare orientation after birth — key post-maternity cross-link.",
    },
    {
      label: "General Practitioner (GP) in the Netherlands",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Registration, appointments and primary-care coordination beside maternity pathways.",
    },
    {
      label: "Hospitals in the Netherlands",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Hospital care, referrals and admissions context for obstetric pathways.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112, Huisartsenpost, SEH and urgent pathways when symptoms are acute.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package, deductible and choosing cover beside maternity orientation.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Apotheek orientation for medicines around pregnancy and postpartum.",
    },
    {
      label: "Prescriptions",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      status: "live",
      description: "Recepten, e-prescriptions and medication lists.",
    },
    {
      label: "Mental Healthcare",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GP first contact and GGZ pathways when mental health support is needed.",
    },
    {
      label: "Physiotherapy",
      href: PHYSIOTHERAPY_NETHERLANDS_PATH,
      status: "live",
      description: "Fysiotherapie orientation — separate from maternity pathways.",
    },
    {
      label: "Health insurance comparison",
      href: HEALTH_INSURANCE_COMPARISON_PATH,
      status: "live",
      description: "Decision framework for comparing policies beside maternity cover questions.",
    },
    {
      label: "Healthcare Basics",
      href: HEALTHCARE_BASICS_PATH,
      status: "live",
      description: "How Dutch healthcare fits together for everyday living.",
    },
  ] satisfies MaternityLink[],
  healthcareHubTips: [
    "Maternity care connects midwife pathways, hospitals, insurance and children's healthcare.",
    "This page is the maternity cornerstone for the healthcare cluster.",
    "Keep Emergency Healthcare bookmarked for acute moments.",
    "Healthcare for Children is the key post-birth system guide.",
  ],
  healthcareHubCards: [
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Midwife and obstetric pathways, registration, insurance and kraamzorg awareness — you are here.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family and children's healthcare cornerstone after birth.",
    },
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Huisarts registration, appointments and referrals.",
    },
    {
      label: "Hospitals",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Referrals, specialists and admissions.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112, Huisartsenpost, SEH and urgent routes.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package and deductible.",
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
      label: "Physiotherapy",
      href: PHYSIOTHERAPY_NETHERLANDS_PATH,
      status: "live",
      description: "Direct access, insurance limits and finding a therapist.",
    },
    {
      label: "Mental Healthcare",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GP first contact, POH-GGZ and GGZ care.",
    },
    {
      label: "Health insurance comparison",
      href: HEALTH_INSURANCE_COMPARISON_PATH,
      status: "live",
      description: "Decision framework for comparing Dutch health insurance — not an insurer ranking.",
    },
  ] satisfies MaternityLink[],
  exploreNextCards: [
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Continue to JGZ and children's healthcare after birth.",
    },
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Register and unlock primary-care coordination.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Understand basic cover, deductible and package choices.",
    },
    {
      label: "Hospitals",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Secondary care context for obstetric and hospital pathways.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "Know which urgent door to use when symptoms are acute.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Apotheek orientation for medicines around maternity care.",
    },
  ] satisfies MaternityLink[],
  exploreNextTips: [
    "Baby pathways next → Healthcare for Children.",
    "No GP yet → GP guide.",
    "Cover confusion → Health Insurance.",
    "Hospital questions → Hospitals.",
    "Scary symptoms → Emergency Healthcare.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Understand verloskundige first line.",
        "Know when obstetric/hospital pathways apply.",
        "Register early with a midwife practice.",
        "Check insurance and kraamzorg awareness.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Verloskundige first line.",
        "Obstetric and hospital pathways.",
        "Birth-place options.",
        "Registration timing.",
        "Insurance orientation.",
        "Kraamzorg awareness.",
      ],
    },
    howItWorks: {
      title: "From the visual — the maternity pathway",
      items: [
        "Confirm and register early.",
        "Antenatal checks with your team.",
        "Birth-place and pathway discussion.",
        "Postpartum and JGZ next steps.",
      ],
    },
    midwife: {
      title: "From the visual — midwife first line",
      items: [
        "Neighbourhood verloskundige coordination.",
        "Antenatal visits and planning talks.",
        "Urgent contact instructions.",
        "Handover when indications change.",
      ],
    },
    obstetricPathways: {
      title: "From the visual — two pathway doors",
      items: [
        "Midwife-led when indications allow.",
        "Obstetric/hospital when indicated.",
        "Transfers explained in plain language.",
        "Urgent routes when needed.",
      ],
    },
    birthPlaces: {
      title: "From the visual — place map",
      items: [
        "Home when suitable.",
        "Birth centre where available.",
        "Hospital when appropriate.",
        "Plans can change.",
      ],
    },
    registration: {
      title: "From the visual — timing priorities",
      items: [
        "Contact practices early.",
        "Prepare intake documents.",
        "Confirm language and capacity.",
        "Parallel GP and insurer admin.",
      ],
    },
    insurance: {
      title: "From the visual — cost orientation",
      items: [
        "Kraamzorg own contribution about €5.70/hour (2026).",
        "Mid-40s hours often ≈ €250–€280 out of pocket.",
        "Polyclinic birth without indication often ~€450–€600+.",
        "Core midwife care usually outside eigen risico — verify annually.",
      ],
    },
    kraamzorg: {
      title: "From the visual — short pointer",
      items: [
        "Postpartum home support exists.",
        "Arrange awareness during pregnancy.",
        "Own contribution ~€5.70/hour in 2026.",
        "Baby pathways → Healthcare for Children.",
      ],
    },
    finding: {
      title: "From the visual — choose and confirm",
      items: [
        "Search by postcode.",
        "Confirm capacity and language.",
        "Note hospital network fit.",
        "Save registration confirmation.",
      ],
    },
    differences: {
      title: "From the visual — system characteristics",
      items: [
        "Midwife-first is normal.",
        "Birth-place talk is expected.",
        "Transfers are pathway tools.",
        "Kraamzorg awareness matters.",
      ],
    },
    checklist: {
      title: "From the visual — preparation priorities",
      items: [
        "Registration and urgent numbers.",
        "ID and insurance documents.",
        "Pathway questions written.",
        "Kraamzorg awareness started.",
      ],
    },
    mistakes: {
      title: "From the visual — mistakes with fixes",
      items: [
        "Late registration → call early.",
        "Obstetrician-only assumption → midwife first.",
        "Skipped kraamzorg → ask in pregnancy.",
        "Ranking lists → ask your team.",
      ],
    },
    faq: {
      title: "From the visual — top questions",
      items: [
        "Midwife vs obstetrician.",
        "Registration timing.",
        "Insurance and kraamzorg.",
        "Urgent contacts.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next by need",
      items: [
        "Children → Healthcare for Children.",
        "GP → registration and coordination.",
        "Hospitals → secondary care context.",
        "Emergency → urgent map.",
      ],
    },
    healthcareHub: {
      title: "From the visual — healthcare cluster",
      items: [
        "Maternity cornerstone (this page).",
        "GP, hospitals, emergency, insurance.",
        "Pharmacies, prescriptions, physio, mental health.",
        "Planned: health insurance comparison.",
      ],
    },
    exploreNext: {
      title: "From the visual — choose your next card",
      items: [
        "Baby pathways → Healthcare for Children.",
        "No GP yet → GP guide.",
        "Cover confusion → Health Insurance.",
        "Acute symptoms → Emergency Healthcare.",
      ],
    },
  },
  sourceUsageTips: [
    "Use Government.nl for official health insurance and care organisation orientation.",
    "Use KNOV for professional midwifery-association context — not personal birth plans.",
    "Use Rijksoverheid topic pages for Dutch-language official explanations.",
    "Use your insurer portal for coverage and kraamzorg contribution questions.",
    "Use the GP, Hospitals and Emergency Healthcare guides alongside official 112 guidance for urgent routes.",
  ],
  officialSources: [
    {
      label: "Government.nl — Health insurance",
      href: "https://www.government.nl/topics/health-insurance",
      description: "Official orientation on Dutch health insurance obligations and covered care.",
    },
    {
      label: "Government.nl — Emergency number 112",
      href: "https://www.government.nl/topics/emergency-number-112",
      description: "When to use the European emergency number in the Netherlands.",
    },
    {
      label: "KNOV — Royal Dutch Organisation of Midwives",
      href: "https://www.knov.nl/",
      description: "Professional body for Dutch midwives — profession and system context.",
    },
    {
      label: "Rijksoverheid — Healthcare",
      href: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering",
      description: "Dutch government topic pages on health insurance and care organisation.",
    },
    {
      label: "NZa — Dutch Healthcare Authority",
      href: "https://www.nza.nl/english",
      description: "Regulator information on healthcare rules and patient-facing rights orientation.",
    },
  ],
  officialSourcesNote:
    "General information only — not medical advice. Maternity pathways, insurer rules and practice availability change, so verify your own situation with your midwife, obstetric team and insurer. In an emergency, call 112.",
} as const;

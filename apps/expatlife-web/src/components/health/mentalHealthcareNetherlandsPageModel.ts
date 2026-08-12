export const MENTAL_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/mental-healthcare-netherlands/" as const;
export const GP_NETHERLANDS_PATH = "/netherlands/health/gp-netherlands/" as const;
export const EMERGENCY_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/emergency-healthcare-netherlands/" as const;
export const HOSPITALS_NETHERLANDS_PATH = "/netherlands/health/hospitals-netherlands/" as const;
export const DENTISTS_NETHERLANDS_PATH = "/netherlands/health/dentists-netherlands/" as const;
export const HEALTH_HUB_PATH = "/netherlands/health/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const HEALTHCARE_FOR_CHILDREN_PATH =
  "/netherlands/family/healthcare-for-children-netherlands/" as const;
export const HEALTHCARE_BASICS_PATH = "/netherlands/living/healthcare-basics/" as const;
export const EMERGENCIES_SAFETY_PATH = "/netherlands/living/emergencies-safety/" as const;
export const HEALTH_SYSTEM_CULTURE_PATH = "/netherlands/culture/health-system-culture-basics/" as const;
export const EXPAT_LONELINESS_PATH = "/netherlands/life/expat-loneliness-netherlands/" as const;
export const PHARMACIES_NETHERLANDS_PATH = "/netherlands/health/pharmacies-netherlands/" as const;
export const HEALTH_INSURANCE_COMPARISON_NETHERLANDS_PATH =
  "/netherlands/health/health-insurance-comparison-netherlands/" as const;
export const HEALTH_INSURANCE_COMPARISON_PATH = HEALTH_INSURANCE_COMPARISON_NETHERLANDS_PATH;

export type MentalHealthLink = {
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

/** Comparison across Dutch mental healthcare levels (stepped care). */
export type ComparisonRow = {
  type: string;
  focus: string;
  whenReferred: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "mental-healthcare-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const mentalHealthcareNetherlandsPage = {
  slug: "mental-healthcare-netherlands",
  path: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
  hubPath: HEALTH_HUB_PATH,
  parentGuidePath: HEALTHCARE_BASICS_PATH,
  publish: true,
  publishDate: "2027-02-14",
  seo: {
    title: "Mental Healthcare in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how mental healthcare works in the Netherlands for expats — GP first contact, POH-GGZ, GGZ specialist care, stepped care, waiting times, crisis routes (112 / 113), insurance and English-language realities.",
    keywords: [
      "mental healthcare Netherlands",
      "mental health Netherlands",
      "GGZ Netherlands",
      "POH-GGZ",
      "therapy Netherlands",
      "psychologist Netherlands",
      "psychiatrist Netherlands",
      "mental health expats Netherlands",
      "Dutch mental health system",
      "huisarts mental health",
      "crisis mental health Netherlands",
      "113 suicide prevention",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Health · Mental Healthcare",
    pageTitle: "Mental Healthcare in the Netherlands",
    subtitle:
      "How mental healthcare works for expats — GP first contact, POH-GGZ support, GGZ specialist care, stepped care, waiting times, insurance and what to do in a crisis.",
    primaryCta: { label: "Understand Mental Healthcare Pathways", href: "#how-it-works" },
    secondaryCta: { label: "Explore Healthcare Guides", href: "#related-guides" },
    chips: ["GP first", "POH-GGZ", "GGZ", "Stepped care", "Waiting", "Crisis", "Insurance"],
    disclaimer:
      "General orientation only — not diagnosis, not treatment advice, and not a recommendation of any therapist, clinic or programme. For your own situation, speak with your GP or a mental health professional. If you or someone else is in immediate danger, call 112. If you are having suicidal thoughts, contact 113 Suicide Prevention (113.nl).",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic calm Dutch primary-care consultation — multicultural expat adult and huisarts at a light desk with a quiet waiting-room corridor beyond, soft afternoon light through canal-house windows, bicycles outside, supportive and composed atmosphere with no distress imagery.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#gp-first-contact", label: "GP first contact" },
    { href: "#poh-ggz", label: "POH-GGZ" },
    { href: "#ggz", label: "GGZ care" },
    { href: "#finding", label: "Finding care" },
    { href: "#waiting", label: "Waiting times" },
    { href: "#english", label: "English" },
    { href: "#crisis", label: "Crisis" },
    { href: "#children-youth", label: "Children & youth" },
    { href: "#costs", label: "Costs" },
    { href: "#patient-rights", label: "Patient rights" },
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
      "Premium orientation board titled Before You Seek Mental Health Support — four calm building blocks: register with a huisarts as first contact, ask about POH-GGZ in the practice, understand stepped care into GGZ when needed, and know crisis doors 112 and 113 — with a Support file rail listing BSN, insurance details, symptom timeline, medication list and questions for the GP.",
      "Four building blocks cover readiness: a GP, POH-GGZ awareness, stepped GGZ pathways, and clear crisis numbers."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch mental healthcare — GP first contact, POH-GGZ practice support, GGZ specialist care, waiting and interim support, English-language realities, and crisis routes — each with a one-line role description and a small Dutch-word label.",
      "Six building blocks explain almost every adult mental health pathway — the sections below add the practical detail."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium stepped-care pathway flow — concern noticed, huisarts conversation, POH-GGZ support in the practice, GGZ referral when indicated, specialist assessment and care, follow-up, and return to the GP — drawn as a labelled calm journey with a Dutch practice and canal backdrop.",
      "Dutch mental healthcare runs as stepped care: GP first, POH-GGZ when available, specialist GGZ when needed, then back to the GP."
    ),
    gpFirstContact: visual(
      "gp-first-contact",
      "Premium GP mental health first-contact board — booking a huisarts appointment, bringing a short written timeline, discussing stress sleep mood or anxiety concerns, receiving first-line advice or POH-GGZ booking, and agreeing what happens next — with a right-side rail of what to bring.",
      "Most non-emergency mental health pathways start with a calm conversation at your huisarts practice."
    ),
    pohGgz: visual(
      "poh-ggz",
      "Premium POH-GGZ orientation board — practice-based mental health practice nurse, structured conversations inside primary care, short series of appointments, coordination with the GP, and a clear note about when GGZ referral may be discussed — without naming or ranking providers.",
      "POH-GGZ is first-line mental health support inside many GP practices — a normal stepped-care step."
    ),
    ggz: visual(
      "ggz",
      "Premium GGZ care-levels comparison board — psychologist, psychiatrist and GGZ institution pathways showing focus, when referred and coordination notes — without ranking clinics or promising wait times — with a Dutch city skyline band and ExpatLife brand footer.",
      "Specialist GGZ care is layered by need — your referral usually decides the level, not a provider ranking."
    ),
    finding: visual(
      "finding",
      "Premium finding-care map — start with your GP, check insurer contracted GGZ networks, ask about e-health and blended options, and use care mediation when waits are long — with route cards from home to practice, contracted provider and interim support.",
      "Finding care is usually coordinated, not self-referral shopping — GP, insurer network and waiting-time tools matter."
    ),
    waiting: {
      src: `/images/infographics/${VISUAL_PREFIX}-waiting-premium-v2.png`,
      alt: "Premium waiting-times orientation board with Treeknorm targets (4 weeks to intake, 10 weeks to treatment start, 14 weeks total) plus indicative real-world ranges for POH-GGZ, basis GGZ and specialised GGZ, interim-support steps, insurer zorgbemiddeling and crisis doors — calm Dutch waiting-room context.",
      caption:
        "Use Treeknorm as the field target, then ask for your pathway’s current weeks — specialised GGZ often runs longer than the 14-week total.",
    },
    english: visual(
      "english",
      "Premium English-language realities board — many clinicians speak English especially in larger cities, availability varies by region and specialty, ask when booking, request an interpreter for complex consent conversations, and avoid relying on a child to interpret — supportive desk scene.",
      "English is often workable but never guaranteed — ask early and arrange interpreter support when needed."
    ),
    crisis: visual(
      "crisis",
      "Premium crisis orientation board — 112 for immediate danger, 113 Suicide Prevention for suicidal thoughts, GP during opening hours, huisartsenpost after hours, and regional crisis services on professional referral — with a strong cross-link card to the Emergency Healthcare guide and no invented phone numbers.",
      "Crisis care has dedicated doors — this section orients you; the emergency guide covers urgent pathways in full."
    ),
    childrenYouth: visual(
      "children-youth",
      "Premium youth mental health orientation board — GP and JGZ pathways, youth GGZ referral pointer, municipal jeugdhulp note, school support team, and a cross-link card to Healthcare for Children — calm family consultation scene with no distressing imagery.",
      "Children and young people use partly different doors — start with GP or JGZ and read the children guide for family pathways."
    ),
    costs: {
      src: `/images/infographics/${VISUAL_PREFIX}-costs-premium-v2.png`,
      alt: "Premium mental healthcare cost orientation board with indicative 2026 figures — mandatory eigen risico about €385 for adults, GP and POH-GGZ usually outside deductible, specialist GGZ covered by basic insurance after referral, contracted versus non-contracted personal share, and youth financing notes — desk scene with Dutch canal context.",
      caption:
        "Indicative cost orientation for 2026: adults often face about €385 eigen risico for specialist GGZ; GP and POH-GGZ usually sit outside that deductible — always verify your policy year.",
    },
    patientRights: visual(
      "patient-rights",
      "Premium patient rights board for mental healthcare — informed consent, privacy and confidentiality, interpreter support, access to records, complaints routes and shared decision-making with three questions to ask — calm supportive layout.",
      "Dutch mental healthcare expects you to ask questions — consent, privacy, interpreters and complaints routes are normal parts of it."
    ),
    differences: visual(
      "differences",
      "Premium surprise cards for expats about Dutch mental healthcare — GP-first access, stepped care instead of direct specialist shopping, waiting times, direct communication style, practice-based POH-GGZ, and shared decision-making — each with a short adaptation tip.",
      "Most surprises are system design, not neglect — knowing the pattern makes mental healthcare feel predictable."
    ),
    checklist: visual(
      "checklist",
      "Premium mental health conversation preparation board — symptom timeline, sleep and stress notes, medication list, questions written down, insurance details, interpreter arranged, and four role cards for you, companion, GP and POH-GGZ or GGZ clinician.",
      "A ten-minute preparation routine makes the first GP or POH-GGZ conversation clearer and less stressful."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with Fix advice cards about Dutch mental healthcare — skipping the GP, assuming walk-in specialist therapy, ignoring waiting-time alternatives, expecting guaranteed English everywhere, delaying crisis help, and confusing loneliness support with clinical pathways.",
      "Each common mistake has a practical Fix — most are avoided with one clear conversation early."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with readable question and answer pairs about GP first contact, POH-GGZ, GGZ referrals, insurance coverage, waiting times, English-language support, crisis numbers 112 and 113, and youth pathways.",
      "Orientation answers only — confirm your own situation with clinicians, your insurer and official sources."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking Mental Healthcare to the GP guide, emergency healthcare, hospitals, health insurance, healthcare for children, dentists, expat loneliness and healthcare basics.",
      "Mental healthcare connects to GP care, crisis routes, insurance and family pathways — read them together."
    ),
    healthcareHub: visual(
      "healthcare-hub",
      "Premium healthcare cluster ecosystem diagram with Mental Healthcare at the centre, connected to GP care, emergency healthcare, hospitals, health insurance, children's healthcare, dentists, healthcare basics and health system culture.",
      "This page is the mental healthcare cornerstone — explore the wider healthcare cluster next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from Mental Healthcare to the GP guide, emergency healthcare, health insurance, healthcare for children and expat loneliness, with official source cards for Government.nl, Rijksoverheid, 113.nl and Thuisarts.nl.",
      "Continue with GP registration and crisis orientation — and verify specifics on the official sources."
    ),
  },
  quickAnswer: {
    heading: "Quick answer: how mental healthcare works in the Netherlands",
    summary:
      "In the Netherlands, non-emergency adult mental healthcare usually starts with your GP (huisarts). Many practices offer a mental health practice nurse (POH-GGZ) for first-line conversations and short support. When specialist care is needed, the GP refers into GGZ (geestelijke gezondheidszorg) — psychologists, psychiatrists and mental health institutions. Care is stepped: the lightest appropriate level first. Basic health insurance covers medically necessary GGZ for adults, usually with the annual deductible (eigen risico). In a crisis, use 112 for immediate danger and 113 for suicidal thoughts.",
    bullets: [
      "Start with your huisarts for non-emergency mental health concerns — specialists are generally not walk-in services.",
      "Ask whether your practice has a POH-GGZ; booking is often a different appointment type.",
      "GGZ specialist care usually needs a referral. Treeknorm targets 14 weeks total; specialised pathways commonly take longer — ask for current weeks.",
      "Crisis doors are separate: 112 for immediate danger, 113 for suicidal thoughts, GP or huisartsenpost for urgent non-life-threatening needs.",
      "Adults: specialist GGZ usually counts toward the annual deductible (about €385 mandatory in 2026) — verify your remaining balance and policy year.",
    ],
    note: "This page explains the system, not your diagnosis or treatment. For clinical questions, speak with your GP or a mental health professional. If life may be at risk, call 112. If you are having suicidal thoughts, contact 113 Suicide Prevention.",
  },
  introParagraphs: [
    "Dutch mental healthcare sits inside a referral-based, stepped-care system. Your GP handles a large share of first conversations about stress, sleep, anxiety, low mood, trauma responses and other concerns. Many practices also employ a POH-GGZ — a practice-based mental health professional who offers structured conversations and helps decide whether specialist GGZ support is appropriate. That primary-care step is not a barrier; it is how the system matches intensity of support to need.",
    "When specialist care is indicated, the GP writes a referral into GGZ. That may mean a psychologist, a psychiatrist, a GGZ institution or a combination of assessment and treatment. Waiting times can be real, especially for some care types and regions, so asking early about interim support and insurer care mediation (zorgbemiddeling) is practical, not pushy. English-language care is often workable in larger cities and academic settings, but it is never guaranteed everywhere — ask when booking and request an interpreter when conversations are complex.",
    "This guide is practical orientation for expats, students, families and newcomers: how the pathway works, what POH-GGZ and GGZ mean, how to prepare for a first conversation, what to expect around waiting and costs, how crisis routes fit in, and how youth pathways differ. It is not diagnosis, not treatment advice, and not a ranking or endorsement of any therapist, clinic or programme.",
  ],
  introHighlights: [
    "A GP conversation is the standard entry point for non-emergency adult mental healthcare.",
    "POH-GGZ offers first-line support inside many huisarts practices before or alongside specialist referral.",
    "GGZ specialist care is stepped by intensity — referral usually opens the door, not direct self-booking.",
    "Waiting is common: Treeknorm is 14 weeks total for GGZ, while specialised care often runs longer — interim support and zorgbemiddeling are legitimate tools.",
    "Crisis pathways are separate from routine booking: 112, 113, GP, huisartsenpost and regional crisis services.",
  ],
  orientationFlowSteps: [
    "Register with a huisarts near home — most non-emergency mental health pathways start there.",
    "Arrange Dutch basic health insurance and store your policy details where you can find them quickly.",
    "Keep a support file ready: BSN, ID, insurance card, medication list, short timeline of what is happening.",
    "Know crisis doors in advance: 112 for immediate danger, 113 for suicidal thoughts, GP or huisartsenpost for urgent needs.",
  ],
  safetyFileChecklist: [
    "Valid ID or residence document",
    "BSN (citizen service number)",
    "Insurer name, policy number and a photo of your insurance card",
    "Current medication list with generic names and doses, including non-prescription items",
    "Allergy and intolerance list",
    "Short written timeline: what started, when, what changed, what helps or worsens it",
    "Sleep, stress, work or study impact notes if relevant",
    "Previous letters or summaries from care abroad if you have them",
    "Your GP practice name and contact details",
    "Three questions you most want answered at the first appointment",
  ],
  introScenarios: [
    {
      situation: "You feel overwhelmed after relocating and want support",
      approach:
        "Start with your huisarts for a first conversation. Ask whether the practice has a POH-GGZ and what the next step would look like. Loneliness and adjustment stress are common after a move; clinical pathways and community support can both matter.",
      firstStep: "Book a GP appointment and bring a short written timeline of what has changed since you arrived.",
    },
    {
      situation: "You already had therapy or psychiatry abroad",
      approach:
        "Continuity is usually arranged through the GP, who can discuss POH-GGZ or GGZ referral with your existing records. Bring translated summaries and medication lists so assessments are not started from zero.",
      firstStep: "Register with a huisarts, then share previous letters, diagnoses if documented, and current medication details.",
    },
    {
      situation: "You want to book a psychologist directly",
      approach:
        "Direct self-referral into insured specialist GGZ is generally not how Dutch access works. Insurers usually expect a valid referral for coverage of medically necessary specialist care.",
      firstStep: "Discuss the concern with your GP first and ask what would justify POH-GGZ support or a GGZ referral.",
    },
    {
      situation: "You are worried about safety tonight",
      approach:
        "Crisis care uses dedicated doors, not the routine appointment system. Immediate danger goes to 112; suicidal thoughts can be discussed with 113 Suicide Prevention.",
      firstStep:
        "Call 112 if there is immediate danger; contact 113 if you are having suicidal thoughts; otherwise call your GP during opening hours or the huisartsenpost after hours.",
    },
  ] satisfies ScenarioRow[],
  snapshotSignals: [
    {
      label: "Entry point",
      value: "GP first",
      note: "A huisarts conversation opens most non-emergency adult mental health pathways.",
    },
    {
      label: "Practice support",
      value: "POH-GGZ",
      note: "Many practices offer a mental health practice nurse for first-line conversations.",
    },
    {
      label: "Specialist care",
      value: "GGZ referral",
      note: "Psychologists, psychiatrists and institutions usually need a referral.",
    },
    {
      label: "Crisis doors",
      value: "112 / 113",
      note: "Immediate danger → 112; suicidal thoughts → 113; urgent care → GP or huisartsenpost.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "GP First Contact (huisarts)",
      body: "Your huisarts assesses what is happening, offers first-line medical orientation and decides whether POH-GGZ support or a GGZ referral is appropriate. Keep the practice relationship active — they coordinate ongoing care.",
    },
    {
      title: "POH-GGZ",
      body: "A practice-based mental health practice nurse who offers structured conversations and stepped support inside primary care. Booking is often a separate appointment type arranged through the practice.",
    },
    {
      title: "GGZ Specialist Care",
      body: "Geestelijke gezondheidszorg covers psychologists, psychiatrists and mental health institutions. Access for insured specialist care normally starts with a GP referral naming the reason and level of need.",
    },
    {
      title: "Waiting & Interim Support",
      body: "Field target (Treeknorm) is 14 weeks total for GGZ; many specialised pathways take longer. Ask for current weeks, keep interim GP/POH support, and use insurer zorgbemiddeling.",
    },
    {
      title: "English-Language Realities",
      body: "English is often workable in larger cities and academic settings, but availability varies. Ask when booking and request an interpreter for complex or consent conversations.",
    },
    {
      title: "Crisis Pathways",
      body: "Immediate danger → 112. Suicidal thoughts → 113 Suicide Prevention. Urgent but not life-threatening → GP by day or huisartsenpost after hours, with regional crisis services involved when professionals escalate.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Register with a GP early — without one, planned mental health access is much harder to arrange.",
    "Store insurance details, medication list and a short personal timeline in one phone folder.",
    "Ask specifically about POH-GGZ when you call the practice — it is often a different slot.",
    "Ask at the end of every appointment who arranges the next step and when you should hear something.",
    "Do not use routine outpatient booking for crisis situations — use 112, 113, GP or huisartsenpost by severity.",
    "Coverage questions belong with your insurer; clinical questions belong with your GP or treating clinician.",
  ],
  howItWorks: {
    heading: "How mental healthcare works: stepped care from concern to follow-up",
    intro:
      "Dutch mental healthcare is best understood as stepped care rather than a single destination. The lightest appropriate level comes first — often a GP conversation and POH-GGZ support — with specialist GGZ added when intensity, complexity or risk requires it, and responsibility returning to the GP for ongoing coordination.",
    paragraphs: [
      "The pathway usually starts when you notice that sleep, mood, anxiety, trauma responses, concentration or daily functioning have changed enough that you want professional support. You book a huisarts appointment, bring a short written timeline, and discuss what is happening. The GP may offer first-line advice, arrange blood tests or other medical checks if relevant, book POH-GGZ inside the practice, or start a GGZ referral.",
      "POH-GGZ sits between everyday GP care and specialist GGZ. Conversations are structured and time-limited; the goal is practical support and a clearer view of whether specialist care is needed. If a referral is indicated, the GP issues a verwijzing naming the reason and often the level of care. You then wait for intake at a contracted GGZ provider, or sometimes the practice helps with the first booking step.",
      "Specialist care can include assessment, talking therapies, medication management with a psychiatrist, group programmes or more intensive pathways. When an episode of specialist care ends or stabilises, follow-up often returns to the GP and, where useful, POH-GGZ. Referrals also have practical limits — if a long time passes without contact, your GP may need to issue a new one.",
    ],
    flowLabels: [
      "Concern",
      "GP visit",
      "POH-GGZ",
      "GGZ referral",
      "Specialist care",
      "Follow-up",
      "Back to GP",
    ],
    timeline: [
      {
        phase: "1",
        title: "You notice a concern",
        detail:
          "Write down when symptoms or difficulties started, how they changed, what you have already tried and what worries you most. This one page shortens every later conversation.",
      },
      {
        phase: "2",
        title: "GP (huisarts) conversation",
        detail:
          "Your GP listens, may screen for medical contributors and decides whether practice-based support, watchful waiting with a clear review date, or specialist referral fits best.",
      },
      {
        phase: "3",
        title: "POH-GGZ support (when available)",
        detail:
          "A mental health practice nurse offers structured conversations inside the practice and helps clarify next steps with the GP.",
      },
      {
        phase: "4",
        title: "GGZ referral (verwijzing)",
        detail:
          "If specialist care is indicated, the GP issues a referral. Keep the letter or digital confirmation for the provider and your insurer.",
      },
      {
        phase: "5",
        title: "Specialist assessment and care",
        detail:
          "Intake clarifies needs and intensity. Treatment may include therapy, psychiatric review, group programmes or coordinated multidisciplinary care.",
      },
      {
        phase: "6",
        title: "Follow-up and review",
        detail:
          "Progress is reviewed against agreed goals. Ask what would change the plan and who to contact between appointments if things worsen.",
      },
      {
        phase: "7",
        title: "Back to the GP",
        detail:
          "When the specialist episode ends or stabilises, letters usually return to your huisarts, who resumes ongoing coordination, prescriptions where relevant and future referrals.",
      },
    ] satisfies TimelineStep[],
    decisionTips: [
      "Non-emergency mental health concern → huisarts first, ask about POH-GGZ.",
      "Urgent but not life-threatening → GP during opening hours, huisartsenpost outside them.",
      "Immediate danger to life → 112, not a routine intake form.",
      "Suicidal thoughts → 113 Suicide Prevention, and seek urgent clinical contact as advised.",
      "Coverage or waiting-time alternatives → your insurer, including zorgbemiddeling.",
      "Ongoing coordination after specialist care → back to your GP unless the specialist says otherwise.",
    ],
    howToSteps: [
      {
        name: "Book a huisarts appointment and say it is about mental health support",
        text: "When you call or use the practice portal, say clearly that you want to discuss stress, mood, anxiety, sleep or another mental health concern. Ask whether a longer slot or a POH-GGZ route is available.",
      },
      {
        name: "Write a short timeline before you go",
        text: "Note when difficulties started, what changed, how sleep work relationships and daily functioning are affected, what you have already tried, and what you most want help with. Keep it to one page.",
      },
      {
        name: "Collect your documents",
        text: "Bring ID, your BSN, insurance details, a current medication and allergy list, and any relevant letters or summaries from previous care, including care abroad.",
      },
      {
        name: "Write three questions you want answered",
        text: "Appointments are focused. Typical questions include what the next step could be, whether POH-GGZ is available, what a GGZ referral would mean, and what to do if things worsen before the next contact.",
      },
      {
        name: "Arrange language support if you need it",
        text: "Ask the practice in advance about English-language consultation or interpreter options. Avoid relying on a child to interpret sensitive conversations.",
      },
      {
        name: "During the appointment, be concrete",
        text: "Describe frequency, severity, triggers and impact rather than only labels. Mention safety concerns openly — clinicians need that information to route care correctly.",
      },
      {
        name: "Confirm the plan before you leave",
        text: "Ask what happens next, who arranges it, when you should hear something, and what to do if risk increases. Repeat the plan back in your own words.",
      },
      {
        name: "Save the next contact routes",
        text: "Store the practice number, any POH-GGZ booking details, crisis numbers 112 and 113, and your insurer's care-mediation contact if a referral wait begins.",
      },
    ] satisfies HowToStep[],
  },
  gpFirstContact: {
    heading: "GP first contact: starting with your huisarts",
    intro:
      "For most non-emergency adult mental health concerns, the huisarts is the first door. That conversation is assessment and routing, not a promise of a specific therapy — and it is the step that usually opens POH-GGZ or GGZ pathways.",
    paragraphs: [
      "Dutch GPs are trained to recognise and manage a wide range of first-line mental health presentations. They may explore sleep, mood, anxiety, substance use, physical contributors, medication and safety. They may also suggest short-term practical steps, arrange relevant medical checks, book POH-GGZ, or start a specialist referral.",
      "Expats sometimes worry that starting with a GP means their concern will not be taken seriously. In practice, the opposite is usually true: a clear GP record and referral is what makes insured specialist care workable. Bring a written timeline, be specific about impact, and say if you are worried about safety.",
      "If you are not yet registered with a huisarts, that is the first practical task. Without registration, planned mental health access is much harder to arrange. Our GP cornerstone guide covers registration, appointments and out-of-hours routes in depth.",
    ],
    cards: [
      {
        title: "What the GP conversation is for",
        body: "To understand what is happening, check for medical contributors, assess urgency and decide the lightest appropriate next step — advice, POH-GGZ, referral or urgent escalation.",
      },
      {
        title: "What to bring",
        body: "A one-page timeline, medication list, insurance details and any previous mental health letters. Written notes beat trying to remember everything under stress.",
      },
      {
        title: "What to say out loud",
        body: "Describe impact on sleep, work, study, relationships and safety. Mention suicidal thoughts or risk of harm if present — this routes care correctly and is taken seriously.",
      },
      {
        title: "What happens next",
        body: "You should leave with a clear plan: watchful waiting with a review date, POH-GGZ booking, GGZ referral, or urgent crisis routing. Ask who does what and by when.",
      },
    ] satisfies TipCard[],
    points: [
      "Most non-emergency adult mental health pathways start with the huisarts.",
      "Ask whether the practice has a POH-GGZ and how to book that route.",
      "A referral is usually needed for insured specialist GGZ care.",
      "Safety concerns change the route — say them clearly.",
      "English-language availability varies; ask when booking.",
      "Stay registered with a GP even after specialist care starts — they coordinate.",
    ],
    checklist: [
      "Registered with a huisarts near home",
      "Appointment booked and reason stated as mental health support",
      "One-page timeline prepared",
      "Medication and allergy list updated",
      "Insurance details available",
      "Three questions written down",
      "Language support requested if needed",
      "Next-step plan confirmed before leaving",
    ],
    scenarios: [
      {
        situation: "You are unsure whether your concern is 'serious enough'",
        approach:
          "You do not need to self-diagnose severity. GPs are used to early conversations, and stepped care exists precisely so support can start at a lighter level.",
        firstStep: "Book a GP appointment and describe impact on daily life rather than waiting for a crisis.",
      },
      {
        situation: "You want medication discussed",
        approach:
          "Medication decisions belong with a clinician after assessment. The GP can discuss options, monitoring and whether psychiatric input is needed — this page does not recommend treatments.",
        firstStep: "Raise the question at the GP appointment and ask what assessment would come first.",
      },
      {
        situation: "You feel dismissed after a short appointment",
        approach:
          "Dutch consultations can be short and direct. Ask for a follow-up, request POH-GGZ if available, or say clearly what still feels unresolved.",
        firstStep: "Write your remaining questions and book a review appointment or ask for POH-GGZ.",
      },
      {
        situation: "You have no GP yet",
        approach:
          "Registration comes first for planned pathways. In a crisis, use 112 or 113 regardless of registration status.",
        firstStep: "Start GP registration using the GP guide, and use crisis doors immediately if safety is at risk.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Say the word 'mental health' or describe symptoms plainly when booking — practices route slots better with clarity.",
      "Bring notes; short appointments reward preparation.",
      "Ask explicitly about POH-GGZ if the GP does not mention it.",
      "Keep the GP relationship active after any specialist referral.",
    ],
    crossLink: {
      label: "General Practitioner (GP) in the Netherlands",
      href: GP_NETHERLANDS_PATH,
      description:
        "Registration, appointments, referrals and how the huisarts coordinates primary care — including mental health first contact.",
      status: "live" as const,
    },
  },
  pohGgz: {
    heading: "POH-GGZ: mental health support inside the GP practice",
    intro:
      "POH-GGZ (praktijkondersteuner huisarts geestelijke gezondheidszorg) is a practice-based mental health professional working inside many huisarts practices. It is first-line support within stepped care — not a lesser service, and not the same as specialist GGZ.",
    paragraphs: [
      "The POH-GGZ offers structured conversations about stress, anxiety, low mood, sleep problems, adjustment difficulties and related concerns. Appointments are usually longer than a standard GP slot and may be offered as a short series. The POH-GGZ coordinates with your GP and helps decide whether specialist GGZ referral is appropriate.",
      "Availability varies by practice. Some practices have strong POH-GGZ capacity; others have limited hours or none. Ask when you register or when you book: 'Does this practice have a POH-GGZ, and how do I get an appointment?' Booking is often arranged through the practice assistant after the GP agrees the route.",
      "What to expect is practical and focused: clarifying what is happening, building coping strategies, monitoring progress and deciding next steps. It is orientation and support inside primary care — not a guarantee of a specific therapy model, and not a substitute for crisis services when risk is high.",
    ],
    cards: [
      {
        title: "Who the POH-GGZ is",
        body: "A trained mental health practice nurse or equivalent professional working under the huisarts practice model, focused on first-line conversations and stepped support.",
      },
      {
        title: "How booking usually works",
        body: "Often via the GP or practice assistant after an initial triage conversation. It is frequently a different appointment type from a standard doctor slot.",
      },
      {
        title: "What sessions are like",
        body: "Structured conversations about current difficulties, goals and practical next steps. A short series is common; intensity stays within primary-care scope.",
      },
      {
        title: "When GGZ may be discussed",
        body: "If needs appear more complex, persistent or specialised than practice-based support can cover, the POH-GGZ and GP discuss referral into specialist GGZ.",
      },
    ] satisfies TipCard[],
    points: [
      "POH-GGZ is practice-based first-line support, not specialist GGZ.",
      "Not every practice has the same capacity — ask explicitly.",
      "Sessions are usually structured and time-limited.",
      "The GP remains responsible for medical coordination and referrals.",
      "Crisis situations still use 112, 113, GP or huisartsenpost — not a routine POH slot.",
      "English-language availability varies; ask when booking.",
    ],
    checklist: [
      "Asked whether the practice has a POH-GGZ",
      "Understood how booking is arranged",
      "Brought a timeline and questions to the first session",
      "Agreed goals and review points",
      "Know who to contact if things worsen between sessions",
      "Know when a GGZ referral would be reconsidered",
    ],
    scenarios: [
      {
        situation: "The practice says there is a waiting list for POH-GGZ",
        approach:
          "Ask what interim support exists, whether the GP can review sooner, and whether a GGZ referral should run in parallel if needs are significant.",
        firstStep: "Ask the practice assistant what the current wait looks like and what to do if risk increases while waiting.",
      },
      {
        situation: "You hoped for long-term therapy in the practice",
        approach:
          "POH-GGZ is usually short-series and stepped. Longer or more specialised therapy typically sits in GGZ after referral.",
        firstStep: "Ask the POH-GGZ and GP what level of care matches your goals and how referral would work if needed.",
      },
      {
        situation: "You are not sure the POH-GGZ route is enough",
        approach:
          "Say so clearly. Stepped care includes escalation when first-line support is not sufficient.",
        firstStep: "Request a joint review with the GP about whether specialist GGZ referral is appropriate.",
      },
      {
        situation: "Language is a barrier in sessions",
        approach:
          "Ask about English-language POH-GGZ capacity or interpreter support. Do not push through consent-level conversations you cannot follow.",
        firstStep: "Tell the practice before the next appointment that you need language support.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Ask about POH-GGZ at registration — knowing the route early saves time later.",
      "Treat the first session as orientation: goals, safety, next steps.",
      "Keep the GP informed; POH-GGZ and GP work as a team.",
      "If waiting feels unsafe, escalate through GP, huisartsenpost, 113 or 112 as appropriate — do not wait silently.",
    ],
  },
  ggz: {
    heading: "GGZ specialist mental healthcare",
    intro:
      "GGZ (geestelijke gezondheidszorg) is specialist mental healthcare. It includes psychologists, psychiatrists and mental health institutions. This section explains care levels and referral logic — it does not rank providers or recommend specific clinics.",
    paragraphs: [
      "Specialist GGZ is usually reached through a GP referral when practice-based support is not enough, or when assessment suggests specialised treatment from the start. The referral describes the concern and often the indicated intensity. Insurers normally expect a valid referral for coverage of medically necessary specialist care.",
      "Inside GGZ you may meet a psychologist for assessment and talking therapies, a psychiatrist when medical-psychiatric expertise is needed, or a multidisciplinary team in a GGZ institution for more complex or intensive pathways. Care can be outpatient, intensive outpatient or, when clinically necessary, inpatient — always based on professional assessment, not self-selection of intensity.",
      "Expats often ask which provider is 'best'. Dutch insured care is organised around indication, contracts and availability rather than prestige rankings. Practical questions are: Is a referral in place? Is the provider contracted by my insurer? What is the indicative wait? Is English-language care available? Who coordinates with my GP?",
    ],
    rows: [
      {
        type: "GP / first-line medical care",
        focus: "First conversation, medical checks, safety orientation and routing into POH-GGZ or GGZ.",
        whenReferred: "You start here for almost all non-emergency adult concerns.",
        note: "Remains the coordinator even after specialist care begins.",
      },
      {
        type: "POH-GGZ (practice support)",
        focus: "Structured first-line mental health conversations inside the huisarts practice.",
        whenReferred: "When the GP judges practice-based support is appropriate.",
        note: "Not specialist GGZ; escalation remains possible.",
      },
      {
        type: "Psychologist (GGZ)",
        focus: "Specialist psychological assessment and talking therapies within GGZ pathways.",
        whenReferred: "When needs exceed primary-care scope or specialised therapy is indicated.",
        note: "Usually requires a GP referral for insured care.",
      },
      {
        type: "Psychiatrist (GGZ)",
        focus: "Medical-psychiatric assessment, diagnosis within specialist care, and medication management when indicated.",
        whenReferred: "When psychiatric expertise is needed alongside or instead of psychological care.",
        note: "This page does not recommend medication — decisions belong with clinicians.",
      },
      {
        type: "GGZ institution / multidisciplinary team",
        focus: "Coordinated specialist pathways for more complex, intensive or combined needs.",
        whenReferred: "When multidisciplinary or higher-intensity care is indicated after assessment.",
        note: "Intensity follows clinical indication, not preference for a brand of clinic.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Referral opens the door",
        body: "For planned insured specialist GGZ, a valid GP referral is normally required. Keep the letter or digital confirmation with your documents.",
      },
      {
        title: "Assessment before intensity",
        body: "Intake clarifies needs. Starting at a lighter appropriate level is system design, not a refusal to help.",
      },
      {
        title: "No provider rankings here",
        body: "This guide describes care levels only. It never ranks therapists, clinics or institutions.",
      },
      {
        title: "GP stays in the loop",
        body: "Specialist letters usually return to your huisarts. Ongoing prescriptions and future referrals often run through primary care.",
      },
    ] satisfies TipCard[],
    points: [
      "GGZ means specialist mental healthcare, not one single clinic type.",
      "Psychologists, psychiatrists and institutions cover different roles within GGZ.",
      "Referral, insurer contracts and waiting times shape access more than online reviews.",
      "Ask who your main treating clinician is and how the GP is informed.",
      "If care feels mismatched, ask for a review of indication and alternatives.",
      "Crisis escalation remains available during GGZ waits or treatment — use the right door.",
    ],
    checklist: [
      "GP referral issued and saved",
      "Insurer contract status checked for the intended provider",
      "Indicative waiting time asked about",
      "Language support needs raised at intake booking",
      "Medication list shared accurately",
      "GP contact details confirmed for letters",
      "Next review date and crisis plan noted",
    ],
    scenarios: [
      {
        situation: "You are offered a different intensity than you expected",
        approach:
          "Ask what the indication is based on, what alternatives exist, and what would change the plan. Shared decision-making is normal.",
        firstStep: "Request a plain-language explanation of the recommended care level and why.",
      },
      {
        situation: "You want a specific therapy brand you read about online",
        approach:
          "Insured GGZ follows clinical indication and available programmes. Ask what evidence-based options are offered for your situation rather than insisting on a brand name.",
        firstStep: "Describe your goals to the referring GP or intake clinician and ask which approaches they consider appropriate.",
      },
      {
        situation: "Specialist care ends and you feel unfinished",
        approach:
          "Ask for a closing plan, GP handover and what would justify a new referral later. Ending an episode is not the same as abandoning support.",
        firstStep: "Request a discharge conversation covering warning signs, GP follow-up and re-entry routes.",
      },
      {
        situation: "You are unsure whether psychology or psychiatry is needed",
        approach:
          "You do not need to choose alone. The GP and intake assessment decide based on presentation — both can be involved over time.",
        firstStep: "Describe symptoms and history to your GP and ask which specialist route fits first.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Keep referral documents — insurers and providers ask for them.",
      "Ask about contracted status before assuming full reimbursement.",
      "Write questions for intake; first meetings cover a lot of ground.",
      "Treat GP coordination as part of GGZ success, not optional admin.",
    ],
  },
  finding: {
    heading: "Finding mental healthcare: where to start and what to check",
    paragraphs: [
      "Finding care in the Netherlands is usually coordinated rather than free-form shopping. Start with your GP, ask about POH-GGZ, and use a referral into contracted GGZ when specialist care is indicated. Your insurer's provider network and care-mediation service are practical tools, especially when waits are long.",
      "Some people also encounter e-health or blended programmes — digital modules combined with professional contact. These can be useful interim or complementary options when clinically appropriate, but they are not a universal substitute for face-to-face care, and availability depends on indication and insurer arrangements. Ask your GP or insurer what is offered for your situation.",
      "Private self-pay routes exist outside standard insured pathways, with different cost and quality-assurance implications. This guide does not recommend private providers. If you consider that route, still keep your GP informed and verify what happens if you later need insured GGZ or crisis care.",
    ],
    points: [
      "Start with the huisarts for non-emergency adult pathways.",
      "Ask about POH-GGZ inside the practice before assuming you need specialist GGZ.",
      "Check whether intended GGZ providers are contracted by your insurer.",
      "Ask about e-health or blended options as orientation — not as a promise they fit every case.",
      "Use insurer zorgbemiddeling when waiting times feel unacceptably long.",
      "Raise English-language or interpreter needs when you first book.",
    ],
    contrastRows: [
      {
        route: "Huisarts practice",
        when: "First non-emergency conversation, medical checks, routing",
        how: "Book a GP appointment; bring a timeline and questions",
        note: "Standard entry point for most adults.",
      },
      {
        route: "POH-GGZ",
        when: "First-line mental health support inside primary care",
        how: "Usually arranged via the GP or practice assistant",
        note: "Availability varies by practice.",
      },
      {
        route: "Contracted GGZ provider",
        when: "Specialist care after referral",
        how: "GP referral, then intake with a contracted psychologist, psychiatrist or institution",
        note: "Check insurer network and indicative waits.",
      },
      {
        route: "Insurer care mediation (zorgbemiddeling)",
        when: "Waiting time feels too long",
        how: "Contact your insurer's care-mediation service",
        note: "They can look for earlier availability at contracted providers.",
      },
      {
        route: "E-health / blended options",
        when: "Clinically appropriate digital or mixed support",
        how: "Ask GP or insurer what programmes exist for your indication",
        note: "Orientation only — not suitable for every situation or for crisis care.",
      },
      {
        route: "Crisis doors",
        when: "Immediate danger, suicidal thoughts or urgent deterioration",
        how: "112, 113, GP or huisartsenpost depending on severity",
        note: "Do not wait for a routine intake if safety is at risk.",
      },
    ] satisfies ContactRouteRow[],
    checklist: [
      "GP registration confirmed",
      "POH-GGZ availability asked about",
      "Referral reason and documents ready if specialist care is planned",
      "Insurer contracted-provider list checked",
      "Indicative waiting time asked about",
      "Language support requested if needed",
      "Care-mediation contact saved if a wait begins",
      "Crisis numbers known: 112 and 113",
    ],
    scenarios: [
      {
        situation: "Online directories look confusing",
        approach:
          "Use your GP and insurer network as the primary route for insured care rather than choosing by advertising.",
        firstStep: "Book a GP appointment and ask which contracted options fit your referral.",
      },
      {
        situation: "A friend recommends a private therapist",
        approach:
          "Private care can be a personal choice but sits outside this page's insured-pathway orientation. Keep your GP informed and verify costs and continuity.",
        firstStep: "Ask your GP how private care would interact with insured GGZ or crisis routes if needed later.",
      },
      {
        situation: "You want something English-speaking and nearby",
        approach:
          "Say both preferences early. Availability varies; interpreter support may be the practical bridge.",
        firstStep: "Ask the practice and insurer about English-language contracted options and interpreter arrangements.",
      },
      {
        situation: "You relocated mid-treatment from abroad",
        approach:
          "Bring records to the GP and ask for continuity planning. A new Dutch referral is often still needed for insured GGZ.",
        firstStep: "Register with a huisarts and share translated summaries and medication lists.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Write your must-haves — language, travel distance, timing — before comparing options.",
      "Your insurer's provider list is the fastest contract-status check.",
      "Ask about cancellation lists and care mediation rather than waiting silently.",
      "Keep one document folder for referral, letters and insurer correspondence.",
    ],
  },
  waiting: {
    heading: "Waiting times and what to do while you wait",
    intro:
      "GGZ waiting times are often longer than people expect. The Dutch field standard (Treeknorm) is a useful benchmark — then ask for the current weeks for your specific pathway, because reality frequently runs longer, especially in specialised care.",
    paragraphs: [
      "Treeknorm — the agreed maximum acceptable wait for GGZ — is 4 weeks from registration to the first intake conversation, then 10 weeks from intake to the start of treatment (14 weeks total). NZa reporting has repeatedly shown that many people wait longer than those targets, particularly for the intake stage and for specialised pathways. A wait does not mean your referral was rejected.",
      "Use the indicative ranges below as orientation only. They are not a promise for your case. Ask the referring GP, the provider’s intake team and your insurer for the current weeks for your care type and region — then decide whether to activate zorgbemiddeling (care mediation).",
      "While you wait, ask what interim support is available: continued GP or POH-GGZ contact, practical coping plans, e-health options if appropriate, and clear instructions for what to do if risk increases. If your situation deteriorates, do not wait politely for an intake date — use urgent and crisis doors (GP, huisartsenpost, 113 or 112) and tell clinicians you are already on a waiting list.",
    ],
    indicativeRows: [
      {
        pathway: "POH-GGZ (inside GP practice)",
        treeknorm: "Practice booking (not Treeknorm)",
        indicative: "Often days to about 2–4 weeks for a first conversation",
        note: "Shorter than specialist GGZ in most practices — ask the assistant for the current slot.",
      },
      {
        pathway: "GGZ intake (aanmeld / first consultation)",
        treeknorm: "Within 4 weeks",
        indicative: "Often longer — many people wait beyond 4 weeks",
        note: "Ask for the provider’s current intake wait in weeks when the referral is sent.",
      },
      {
        pathway: "Start of GGZ treatment after intake",
        treeknorm: "Within 10 weeks after intake",
        indicative: "Often around 8–12+ weeks; can stretch further by diagnosis",
        note: "Some pathways meet Treeknorm; specialised routes more often overshoot.",
      },
      {
        pathway: "Basis GGZ — total to treatment start",
        treeknorm: "Within 14 weeks total",
        indicative: "Often about 3–4 months (around Treeknorm)",
        note: "National averages for basis GGZ have sat near the 14-week target in recent NZa snapshots.",
      },
      {
        pathway: "Specialised GGZ (SGGZ) — total to treatment start",
        treeknorm: "Within 14 weeks total",
        indicative: "Commonly about 4–6+ months; some pathways longer",
        note: "Diagnosis group and region matter a lot — verify current weeks and ask about mediation early.",
      },
      {
        pathway: "Youth / children’s pathways",
        treeknorm: "Local targets apply; adult Treeknorm is a rough orientation only",
        indicative: "Often several weeks to several months",
        note: "Coordinate via GP/JGZ and ask for the youth pathway’s current wait — do not assume adult GGZ numbers.",
      },
    ] satisfies Array<{
      pathway: string;
      treeknorm: string;
      indicative: string;
      note: string;
    }>,
    points: [
      "Treeknorm benchmark: 4 weeks to intake + 10 weeks to treatment start = 14 weeks total.",
      "Ask for your pathway’s current wait in weeks — not only whether ‘there is a wait’.",
      "Basis GGZ is often nearer Treeknorm; specialised GGZ more often runs longer (commonly 4–6+ months total).",
      "Interim GP or POH-GGZ contact can continue while specialist intake is pending.",
      "Zorgbemiddeling through your insurer is a legitimate tool when weeks stretch past Treeknorm or feel unsafe to wait through.",
      "Ask to be added to cancellation or earlier-availability lists.",
      "A rising safety risk changes the route immediately — use crisis doors.",
      "Keep your referral documents valid; long delays may require a renewed referral.",
    ],
    checklist: [
      "Treeknorm explained and current wait asked in weeks at referral",
      "Indicative wait confirmed again at intake booking",
      "Interim support plan agreed with GP or POH-GGZ",
      "Insurer care-mediation contacted if weeks exceed Treeknorm or feel too long",
      "Cancellation list requested where available",
      "Personal crisis plan written: who to call, when",
      "Referral expiry or renewal needs checked with the GP",
      "Workplace or study adjustments considered if functioning is affected",
    ],
    scenarios: [
      {
        situation: "Intake is quoted at 8–12 weeks (past Treeknorm’s 4 weeks)",
        approach:
          "Treat that as a signal to activate interim support and insurer zorgbemiddeling, not to wait silently for the letter date.",
        firstStep: "Call the intake secretariat and your insurer’s care-mediation line in the same week with the referral details.",
      },
      {
        situation: "Specialised GGZ total wait is quoted around 5–6 months",
        approach:
          "Ask about earlier contracted alternatives, different intensity or modality, cancellation lists, and keep GP/POH-GGZ support active.",
        firstStep: "Contact your insurer with the referral and the quoted weeks; ask what faster contracted options exist.",
      },
      {
        situation: "You feel worse while waiting",
        approach:
          "Do not wait for the original date if risk or severity rises. Re-contact your GP and use urgent or crisis routes as needed.",
        firstStep: "Call your GP practice today, or the huisartsenpost outside hours, and describe the change clearly.",
      },
      {
        situation: "Your referral is getting old",
        approach:
          "Ask the GP whether it is still valid for the provider and insurer, and renew if needed before intake.",
        firstStep: "Check referral date with the practice and confirm requirements with the intended GGZ provider.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Write the quoted wait in weeks next to Treeknorm (4 / 10 / 14) so you can see the gap clearly.",
      "Save zorgbemiddeling contact details when the referral is issued — not months later.",
      "Tell trusted people what to do if you become harder to reach.",
      "Crisis care does not require you to 'finish waiting' first.",
    ],
  },
  english: {
    heading: "English-language realities without overpromising",
    intro:
      "Many clinicians in the Netherlands speak English, especially in larger cities and academic settings. That does not mean every practice, every POH-GGZ slot or every GGZ programme can offer high-quality English care on demand.",
    paragraphs: [
      "Ask early. When booking a GP, POH-GGZ or GGZ intake, say that you need the consultation in English or that you need an interpreter. For consent, diagnosis explanations and safety planning, accurate understanding matters more than politeness.",
      "Interpreter support can be arranged in many care settings, though processes differ. Avoid relying on a child, partner or colleague to interpret sensitive mental health conversations unless there is no alternative in an emergency. Written information in plain language also helps — ask for key points after the appointment.",
      "If English-language specialist capacity is limited in your region, options may include travelling further, using interpreter-supported local care, or interim primary-care support while mediation finds a better language match. None of these is a failure — they are practical adaptations inside a system that was not designed as an English-only service.",
    ],
    cards: [
      {
        title: "Ask when booking",
        body: "State your language need at the first phone call or portal message. Notes in the record help the whole team prepare.",
      },
      {
        title: "Interpreter support",
        body: "Request an interpreter for complex or consent conversations. Confirm who arranges it and whether it will be in-person or remote.",
      },
      {
        title: "City versus region",
        body: "Larger cities and academic centres often have more English-capable clinicians; smaller regions may rely more on interpreters.",
      },
      {
        title: "No guarantee means plan ahead",
        body: "English being 'often fine' is not a promise. Have a backup plan: interpreter request, written summary, companion who takes notes.",
      },
    ] satisfies TipCard[],
    points: [
      "English is common but not universal in Dutch mental healthcare.",
      "Raise language needs before the appointment, not halfway through.",
      "Interpreters are appropriate for sensitive mental health conversations.",
      "Do not use children as interpreters for clinical content.",
      "Ask for written key points if verbal English was only partly clear.",
      "Language limits can affect waiting options — say so to care mediation.",
    ],
    checklist: [
      "Language preference noted when booking",
      "Interpreter requested if needed for consent or complex discussion",
      "Companion arranged to take notes if helpful",
      "Key questions written in advance",
      "Ask for a written summary of the plan",
      "Tell the clinician immediately if you did not understand something important",
    ],
    scenarios: [
      {
        situation: "The clinician's English is limited",
        approach:
          "Pause and request clearer language support rather than guessing. Safety and consent require understanding.",
        firstStep: "Say you need an interpreter or a slower plain-language explanation before decisions are made.",
      },
      {
        situation: "You understand everyday English but not clinical terms",
        approach:
          "Ask for plain language and written notes. Mental health vocabulary is hard even for fluent speakers.",
        firstStep: "Request a short written plan: next step, who contacts whom, what to do if things worsen.",
      },
      {
        situation: "No English-speaking GGZ slot is available nearby",
        approach:
          "Ask about interpreter-supported local care, wider contracted networks and insurer mediation.",
        firstStep: "Contact your insurer with language needs stated as a hard requirement.",
      },
      {
        situation: "Your partner usually translates",
        approach:
          "For mental health content, professional interpreting is usually safer and more private.",
        firstStep: "Ask the practice how to book an interpreter for the next appointment.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Put language needs in writing in the portal or email so they are on record.",
      "Bring your three questions written down — clearer under language strain.",
      "Confirm understanding by repeating the plan back.",
      "Language access is a patient-rights issue, not a favour.",
    ],
  },
  crisis: {
    heading: "Crisis pathways: 112, 113 and urgent mental health help",
    intro:
      "Crisis care uses dedicated doors. This section is orientation only — it does not replace professional judgement, and it never invents local phone numbers beyond the well-known national numbers 112 and 113.",
    paragraphs: [
      "If you or someone else is in immediate danger, call 112. That is the Dutch emergency number for ambulance and urgent emergency response. Do not wait for a routine GGZ intake if life may be at risk.",
      "If you are having suicidal thoughts, contact 113 Suicide Prevention (113.nl). 113 provides specialised suicide-prevention support. You can also seek urgent clinical contact through your GP during opening hours or the huisartsenpost after hours. Regional crisis services exist and are typically accessed when professionals escalate urgent mental health crises — your GP, huisartsenpost or emergency pathway can involve them.",
      "For the full picture of urgent physical and mental health doors — 112, huisartsenpost, SEH and related routes — use our Emergency Healthcare cornerstone. This mental healthcare page orients you; that guide goes deeper on emergency system mechanics.",
    ],
    points: [
      "Immediate danger to life → call 112.",
      "Suicidal thoughts → contact 113 Suicide Prevention (113.nl).",
      "Urgent but not immediately life-threatening during GP hours → your huisarts.",
      "Urgent outside GP hours → regional huisartsenpost.",
      "Regional crisis services are usually reached via professional escalation — ask GP or huisartsenpost how that works locally.",
      "Never delay crisis help because a routine waiting list exists.",
    ],
    urgencyRows: [
      {
        situation: "Immediate danger to yourself or someone else",
        level: "emergency",
        action: "Call 112 now.",
      },
      {
        situation: "Suicidal thoughts, with or without a plan",
        level: "emergency",
        action: "Contact 113 Suicide Prevention and seek urgent clinical help; call 112 if danger is immediate.",
      },
      {
        situation: "Rapid mental health deterioration tonight, not immediately life-threatening",
        level: "urgent",
        action: "Call your GP during opening hours or the huisartsenpost after hours.",
      },
      {
        situation: "Worsening symptoms while waiting for GGZ intake",
        level: "urgent",
        action: "Re-contact your GP, describe the change, and use huisartsenpost or crisis routes if risk rises.",
      },
      {
        situation: "Ongoing stress or low mood without acute safety risk",
        level: "routine",
        action: "Book a huisarts appointment and ask about POH-GGZ or referral as appropriate.",
      },
      {
        situation: "Admin questions about referral or waiting lists",
        level: "routine",
        action: "Contact the practice assistant, GGZ intake secretariat or your insurer — not 112.",
      },
    ] satisfies UrgencyRow[],
    disclaimer:
      "Crisis orientation only. This page does not provide therapy, does not assess your risk, and does not list unverified local numbers. If you are unsure which door to use and danger may be immediate, call 112. For suicidal thoughts, contact 113.",
    scenarios: [
      {
        situation: "A housemate is talking about suicide tonight",
        approach:
          "Take it seriously. If danger is immediate, call 112. Otherwise contact 113 for guidance and seek urgent clinical help via GP or huisartsenpost.",
        firstStep: "If anyone is in immediate danger call 112; otherwise contact 113 and stay with the person if it is safe to do so.",
      },
      {
        situation: "You are in crisis but worried about costs or paperwork",
        approach:
          "Safety comes first. Emergency and crisis routes are not something to delay for insurance admin.",
        firstStep: "Call 112 or 113 as appropriate; sort paperwork afterwards with your GP and insurer.",
      },
      {
        situation: "You called the wrong number and feel embarrassed",
        approach:
          "Services would rather you sought help. If you still need support, call the correct door now.",
        firstStep: "Use 112 for immediate danger, 113 for suicidal thoughts, or GP/huisartsenpost for urgent clinical contact.",
      },
      {
        situation: "You are abroad-minded and unsure Dutch crisis numbers",
        approach:
          "Memorise two numbers: 112 for emergencies and 113 for suicide prevention. Save them in your phone today.",
        firstStep: "Add 112 and 113 to favourites, and read the Emergency Healthcare guide for surrounding context.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Save 112 and 113 before you need them.",
      "Tell one trusted person where your GP practice details are stored.",
      "If waiting for GGZ, write a personal 'if things worsen' plan with your GP.",
      "Read the Emergency Healthcare guide alongside this section.",
    ],
    crossLink: {
      label: "Emergency Healthcare in the Netherlands",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      description:
        "112, huisartsenpost, ambulance, SEH and urgent pathways explained in full — use this when something is urgent tonight.",
      status: "live" as const,
    },
  },
  childrenYouth: {
    heading: "Children and young people: youth mental health orientation",
    intro:
      "Children and adolescents use partly different doors from adult GGZ. This section is brief orientation only — family pathways are covered in depth in the Healthcare for Children guide.",
    paragraphs: [
      "Concerns about a child's mood, behaviour, anxiety, eating, sleep or school functioning usually start with the GP, the school support team, or youth health services (JGZ). The GP can assess and refer into youth mental healthcare (jeugd-GGZ) when specialist care is indicated.",
      "Municipalities are responsible for a large part of youth support under the Youth Act (jeugdhulp). Local teams and family centres may offer support that sits alongside or instead of specialist GGZ, depending on need. Exact local organisation varies by municipality — ask your GP, JGZ team or municipality what applies where you live.",
      "Waiting times for specialist youth mental health care can be long in some regions. Ask what interim support exists through school, JGZ, GP or municipal teams. In a crisis involving immediate danger, call 112. For suicidal thoughts in young people, seek urgent professional help and use 113 as appropriate.",
    ],
    cards: [
      {
        title: "GP and JGZ",
        body: "Common first doors for concerns about a child's mental wellbeing, development and school functioning.",
      },
      {
        title: "Youth GGZ",
        body: "Specialist youth mental healthcare usually reached via referral when indicated — orientation only, not a provider list.",
      },
      {
        title: "Municipal jeugdhulp",
        body: "Youth support organised via the municipality under the Youth Act; local teams and family centres vary by place.",
      },
      {
        title: "School support",
        body: "Internal school support coordinators often work with JGZ and parents when wellbeing or learning is affected.",
      },
    ] satisfies TipCard[],
    points: [
      "Children's pathways are not identical to adult GGZ routes.",
      "Start with GP, JGZ or school support for non-emergency concerns.",
      "Municipal youth support may be involved — ask locally.",
      "Immediate danger → 112; suicidal thoughts → seek urgent help and 113 as appropriate.",
      "Use the Healthcare for Children cornerstone for family system detail.",
    ],
    scenarios: [
      {
        situation: "A teacher raises wellbeing concerns",
        approach:
          "Take school observations seriously and coordinate with GP or JGZ rather than waiting for a crisis.",
        firstStep: "Book a GP appointment and ask the school what support is already in place.",
      },
      {
        situation: "You are told to contact the municipality",
        approach:
          "This can be a normal youth-support route under jeugdhulp. Ask what the local team offers and how it coordinates with GP care.",
        firstStep: "Request clear contact details from the GP, JGZ or school and note what to bring to the first conversation.",
      },
      {
        situation: "Your teenager refuses help",
        approach:
          "Ask professionals how to engage adolescents respectfully. Safety concerns still need urgent routes even if engagement is difficult.",
        firstStep: "Speak with the GP about options and escalate via crisis doors if danger is present.",
      },
      {
        situation: "You need the wider family healthcare map",
        approach:
          "Children's mental health sits inside a larger system of GP, JGZ, insurance and specialist care.",
        firstStep: "Open the Healthcare for Children guide and read the mental health section alongside this page.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Write down observations with dates — professionals need concrete examples.",
      "Ask every service who coordinates if several organisations are involved.",
      "Do not wait out safety concerns because adult waiting-list logic feels familiar.",
      "Keep school, GP and JGZ information in one family folder.",
    ],
    crossLink: {
      label: "Healthcare for Children in the Netherlands",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      description:
        "GPs, JGZ, vaccinations, paediatric pathways and children's mental health support in the family healthcare system.",
      status: "live" as const,
    },
  },
  costs: {
    heading: "Costs, insurance and the annual deductible",
    intro:
      "Most medically necessary adult GGZ is covered by basic health insurance once referral and indication rules are met. What you personally pay is usually driven by the annual deductible (eigen risico), whether the provider is contracted, and whether care sits in primary care (GP / POH-GGZ) or specialist GGZ.",
    paragraphs: [
      "For orientation in 2026, the mandatory eigen risico for adults is about €385 per calendar year (higher if you chose a voluntary top-up, up to about €885). Specialist GGZ for adults generally counts toward that deductible. GP consultations and POH-GGZ inside the huisarts practice are usually financed as primary care and typically do not consume eigen risico — confirm for your own policy year.",
      "With a contracted GGZ provider and a valid referral, adults often pay only whatever remains of their eigen risico for that year; after the deductible is used up, basic insurance usually covers the rest of insured specialist GGZ. Non-contracted care can leave a much larger personal share (often a substantial percentage of the bill, depending on natura vs restitutie policy). Without a referral, insured reimbursement is commonly refused and you may pay the full private rate.",
      "Trajectory values billed to insurers are much larger than typical out-of-pocket amounts: short basis-GGZ pathways are often in a rough €800–€1,200 range and specialised pathways often several thousand euros. Those are care-value ranges, not what most contracted insured adults pay beyond their remaining deductible. Children under 18 usually follow youth / municipal financing rules rather than adult GGZ billing — ask locally.",
    ],
    indicativeRows: [
      {
        item: "GP consultation",
        indicative: "Usually €0 eigen risico",
        whatYouPay: "Typically covered under basic insurance without deductible",
        note: "Primary-care visit — confirm medicines or diagnostics separately.",
      },
      {
        item: "POH-GGZ (in GP practice)",
        indicative: "Usually €0 eigen risico",
        whatYouPay: "Typically no deductible when booked via the huisarts practice",
        note: "First-line stepped support inside primary care for most adults.",
      },
      {
        item: "Mandatory eigen risico (adults, 2026)",
        indicative: "About €385 / year",
        whatYouPay: "First specialist GGZ costs of the year usually draw this down",
        note: "Voluntary top-up can raise the annual deductible to about €885 — check your policy.",
      },
      {
        item: "Specialist GGZ (contracted + referral)",
        indicative: "Usually remaining eigen risico only",
        whatYouPay: "Often €0–€385 depending on unused deductible",
        note: "After deductible is used, basic insurance usually covers insured contracted care.",
      },
      {
        item: "Basis GGZ care value (orientation)",
        indicative: "Roughly €800–€1,200 per short pathway",
        whatYouPay: "Insurer bill value — your share is usually still the deductible rules above",
        note: "Useful for understanding claim size; not a private self-pay quote.",
      },
      {
        item: "Specialised GGZ care value (orientation)",
        indicative: "Often about €2,000–€6,000+ per pathway",
        whatYouPay: "Insurer bill value — your share usually still follows deductible + contract rules",
        note: "Longer or more intensive pathways sit higher; ask your insurer before assuming.",
      },
      {
        item: "Non-contracted GGZ",
        indicative: "Often large personal share",
        whatYouPay: "Can be a substantial % of the bill (policy-dependent)",
        note: "Get a written reimbursement estimate before starting — especially for English-only private routes.",
      },
      {
        item: "Children / youth under 18",
        indicative: "Usually no adult eigen risico",
        whatYouPay: "Often municipal / Jeugdwet financing rather than adult Zvw billing",
        note: "Ask GP, JGZ or municipality which route applies — do not assume adult GGZ invoices.",
      },
    ] satisfies Array<{
      item: string;
      indicative: string;
      whatYouPay: string;
      note: string;
    }>,
    orientationCards: [
      {
        title: "Basic insurance",
        body: "Medically necessary specialist GGZ is generally covered under basic insurance with a valid referral and indication — confirm details with your insurer.",
      },
      {
        title: "Eigen risico (~€385 in 2026)",
        body: "Adults should expect specialist GGZ to count toward the mandatory deductible of about €385 (or higher with voluntary top-up). Ask how much remains unused this year.",
      },
      {
        title: "Contracted GGZ",
        body: "Contracted providers usually give the most predictable bill: remaining deductible, then insurer covers insured care. Non-contracted care can increase your personal share sharply.",
      },
      {
        title: "GP / POH-GGZ first",
        body: "Huisarts and POH-GGZ support usually sit outside eigen risico, which is why starting there is both clinically and financially practical for many people.",
      },
    ] satisfies TipCard[],
    costFactors: [
      "Whether care is primary-care based (GP / POH-GGZ) or specialist GGZ",
      "How much of your ~€385 (or higher) annual deductible remains",
      "Whether the provider is contracted by your insurer",
      "Your policy type and reimbursement rules for non-contracted care",
      "Whether a valid referral was in place for specialist care",
      "Whether any supplementary cover applies to additional non-basic services",
      "Adult versus child financing rules, including municipal youth support where relevant",
    ],
    checklist: [
      "Insurer provider list checked for intended GGZ care",
      "Referral in place for planned specialist GGZ",
      "Remaining eigen risico asked about for the current year (about €385 mandatory in 2026)",
      "Understanding of contracted versus non-contracted reimbursement percentages",
      "Written estimate requested before starting non-contracted care",
      "Supplementary policy checked only as an extra, not as the main plan",
      "Invoices and letters kept together",
    ],
    indicativeNote:
      "Indicative cost orientation for planning conversations — not a fee schedule, quotation, reimbursement promise or guarantee. Deductible amounts, tariff pathways and insurer contracts change by year and policy. Figures above use commonly published 2026 orientation (mandatory eigen risico about €385; care-value ranges for basis vs specialised GGZ). Always verify current terms with your own insurer, and never delay crisis care because of cost uncertainty.",
    scenarios: [
      {
        situation: "You are afraid of the bill so you delay help",
        approach:
          "For contracted specialist GGZ, adults often face remaining eigen risico (up to about €385 in 2026) rather than the full multi-thousand-euro pathway value. Still: never delay crisis care.",
        firstStep: "If safety is at risk use 112 or 113; otherwise ask your insurer what remains of your deductible and whether the intended provider is contracted.",
      },
      {
        situation: "An invoice arrives for GGZ you thought was fully covered",
        approach:
          "Check whether unused eigen risico applied and whether the provider was contracted. Ask the insurer to explain the claim line by line.",
        firstStep: "Compare the invoice with your policy documents, then call your insurer with the claim reference.",
      },
      {
        situation: "You want a non-contracted English-speaking therapist",
        approach:
          "Reimbursement may be partial or limited depending on policy type — personal costs can jump from ‘remaining deductible’ to a large share of the full rate.",
        firstStep: "Ask your insurer what percentage or amount would be reimbursed for that specific non-contracted route before the first session.",
      },
      {
        situation: "Your child needs support and financing looks different",
        approach:
          "Youth pathways may involve municipal financing as well as healthcare insurance rules. Ask locally rather than assuming adult GGZ billing or adult eigen risico.",
        firstStep: "Ask the GP or municipality which financing route applies and read the children healthcare guide.",
      },
    ] satisfies ScenarioRow[],
    crossLink: {
      label: "Health Insurance in the Netherlands",
      href: HEALTH_INSURANCE_PATH,
      description:
        "Basic insurance, the annual deductible, policy types, contracted providers, switching and supplementary cover explained.",
      status: "live" as const,
    },
    tips: [
      "Write down remaining eigen risico before specialist GGZ starts — that is usually your main adult out-of-pocket risk with contracted care.",
      "Check contract status before planned specialist GGZ, not after the invoice.",
      "Ask about deductible impact in the same call as care mediation.",
      "Keep referral letters with invoices — insurers ask for documentation.",
      "Never let cost uncertainty delay 112 or 113 when safety is at risk.",
    ],
  },
  patientRights: {
    heading: "Patient rights in mental healthcare",
    paragraphs: [
      "Dutch healthcare law gives patients clear rights around information, consent, privacy and access to records. In mental healthcare these rights matter especially because conversations are sensitive and decisions can affect work, study and family life.",
      "Shared decision-making is expected: clinicians explain options and listen to your preferences. Asking questions is not confrontation. You may request interpreter support, access your records, raise complaints through formal routes and involve a trusted person if you wish.",
      "Privacy and confidentiality are core. Information is shared within the care team on a need-to-know basis. Ask who will receive letters, how your GP is informed, and what happens if you do not want certain details shared with family members.",
    ],
    cards: [
      {
        title: "Informed consent",
        body: "You should receive understandable information about proposed care, alternatives and risks before agreeing. You may take time to decide and may withdraw consent.",
      },
      {
        title: "Privacy and confidentiality",
        body: "Mental health information is confidential. Ask who has access, how GP letters work and how family requests are handled.",
      },
      {
        title: "Interpreter and language support",
        body: "Request language support for consent and complex discussions. Accurate understanding is part of safe care.",
      },
      {
        title: "Access to records",
        body: "You generally have the right to access your medical record and to see letters and plans through portals where available.",
      },
      {
        title: "Shared decision-making",
        body: "Ask three questions: what are my options, what are the benefits and risks, and what does that mean for my situation.",
      },
      {
        title: "Complaints routes",
        body: "Practices and GGZ institutions have complaints officers, with independent escalation available if issues are not resolved.",
      },
      {
        title: "Companion or representative",
        body: "You may bring someone to appointments. Ask how to record who may receive information about your care.",
      },
      {
        title: "Second opinion",
        body: "Requesting another specialist view can be appropriate in complex cases. Ask your GP how to arrange it and check coverage with your insurer.",
      },
    ] satisfies TipCard[],
    checklist: [
      "Ask for information in a language you understand before consenting",
      "Request an interpreter in advance if needed",
      "Clarify who receives letters and portal access",
      "Ask what the alternatives are and what happens if you wait",
      "Note the complaints officer route in case it is ever needed",
      "Record who may be informed about your care",
      "Keep your own copies of key letters and plans",
    ],
    scenarios: [
      {
        situation: "You do not want your family to know details",
        approach:
          "Say so explicitly. Confidentiality rules exist for this reason, with limited exceptions around safety.",
        firstStep: "Tell the clinician who may and may not receive information, and ask how that is recorded.",
      },
      {
        situation: "You felt pressured to accept a plan",
        approach:
          "Consent should follow understanding. Ask for time, written information or a follow-up conversation.",
        firstStep: "Say you want to understand before deciding and request the plan in writing.",
      },
      {
        situation: "Something went wrong in communication",
        approach:
          "Start with the treating team, then the complaints officer, with independent escalation available afterwards.",
        firstStep: "Ask reception for the complaints officer contact details and keep a factual timeline.",
      },
      {
        situation: "You want someone with you but fear it affects privacy",
        approach:
          "You can bring a companion and still set boundaries about what is discussed. Ask how to structure the session.",
        firstStep: "Tell the clinician at the start what the companion may hear and when you want a private moment.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Write your three key questions before important conversations.",
      "Ask for written plans — easier to review calmly at home.",
      "Privacy preferences should be stated early and recorded.",
      "Complaints routes exist to improve care, not to punish you for speaking up.",
    ],
  },
  differences: {
    heading: "What expats often find surprising about Dutch mental healthcare",
    intro:
      "None of these are problems once you expect them. Each card describes a system characteristic and how to work with it rather than against it.",
    cards: [
      {
        title: "You usually cannot shop directly for insured specialist therapy",
        body: "Example: contacting psychologists for weeks before learning a GP referral is required for coverage.",
        advice: "Start with your huisarts and ask about POH-GGZ or a GGZ referral — that conversation is the actual first step.",
      },
      {
        title: "Stepped care feels like delay if you expected a specialist first",
        body: "Example: being offered POH-GGZ before GGZ and interpreting it as dismissal.",
        advice: "Treat stepped care as matching intensity to need, and ask what would trigger escalation.",
      },
      {
        title: "Waiting times are part of the landscape",
        body: "Example: a specialist intake months away with little explanation of interim options.",
        advice: "Ask immediately about interim GP/POH support, cancellation lists and insurer zorgbemiddeling.",
      },
      {
        title: "Communication is direct and factual",
        body: "Example: a clinician stating options and limits plainly without soft framing.",
        advice: "Read directness as clarity, and ask follow-up questions freely about alternatives and timelines.",
      },
      {
        title: "Appointments are shorter than you may be used to",
        body: "Example: a focused GP slot ending before your third question.",
        advice: "Bring three prioritised questions in writing and state upfront what you most need covered.",
      },
      {
        title: "English is common but not a promise",
        body: "Example: assuming every clinician can conduct a full mental health assessment in fluent English.",
        advice: "Ask when booking and arrange interpreter support for consent-level conversations.",
      },
      {
        title: "Crisis doors are separate from therapy booking",
        body: "Example: waiting for an intake while risk is rising because the 'official' pathway feels unfinished.",
        advice: "Use 112, 113, GP or huisartsenpost by severity — crisis care does not require completing a waitlist first.",
      },
      {
        title: "Loneliness and clinical care are related but not identical",
        body: "Example: expecting a GGZ referral to solve isolation after a move without also rebuilding social structure.",
        advice: "Use clinical pathways when needed, and also explore community and loneliness resources alongside them.",
      },
    ] satisfies MistakeCard[],
    tips: [
      "Learn the stepped pathway once: GP → POH-GGZ → GGZ → back to GP.",
      "Write questions down; short appointments reward preparation.",
      "Ask about waiting-time alternatives instead of waiting silently.",
      "Keep crisis numbers saved even when your pathway feels routine.",
    ],
  },
  preparation: {
    heading: "Preparation checklist for mental health conversations",
    paragraphs: [
      "Good first conversations are mostly the result of ten minutes of preparation. A written timeline, an updated medication list and three clear questions change a rushed appointment into a productive one.",
      "Preparation also means being clear about roles. You know your history and priorities; a companion can listen and take notes; your GP coordinates medical care and referrals; the POH-GGZ or GGZ clinician provides the indicated level of mental health support. When roles are clear, fewer things fall between the cracks.",
    ],
    checklist: [
      "Registered with a huisarts",
      "Insurance details and a photo of your insurance card ready",
      "ID or residence document and BSN available",
      "Current medication list with generic names and doses",
      "Allergy and intolerance list",
      "One-page timeline of what is happening and since when",
      "Notes on sleep, work/study impact and what you have already tried",
      "Previous letters or summaries from care abroad if relevant",
      "Three prioritised questions written down",
      "Language support or interpreter requested if needed",
      "Companion arranged for a stressful first appointment if helpful",
      "Crisis plan noted: 112, 113, GP, huisartsenpost",
      "Practice phone number and portal access saved",
    ],
    roleCards: [
      {
        role: "You",
        focus: "Bring history, priorities and questions; confirm you understand the next-step plan before leaving.",
      },
      {
        role: "Companion",
        focus: "Listens, takes notes and helps remember what was said when the conversation is stressful.",
      },
      {
        role: "Your GP (huisarts)",
        focus: "First contact, medical coordination, POH-GGZ routing and GGZ referrals.",
      },
      {
        role: "POH-GGZ",
        focus: "Practice-based first-line mental health conversations and stepped support.",
      },
      {
        role: "GGZ clinician / team",
        focus: "Specialist assessment and treatment at the indicated intensity, then reporting back to the GP.",
      },
      {
        role: "Your insurer",
        focus: "Answers coverage, deductible, contract and care-mediation questions about waiting times.",
      },
    ] satisfies RoleCard[],
    tips: [
      "Keep one phone folder with ID, insurance card, timeline and medication list.",
      "Update the medication list after every change — it is often out of date.",
      "Ask at every appointment who arranges the next step and by when you should hear.",
      "Save 112 and 113 even if you hope never to need them.",
    ],
  },
  mistakes: {
    heading: "Common expat mistakes with Dutch mental healthcare",
    intro:
      "These mistakes are common because mental health access models differ between countries. Each one has a straightforward fix that usually takes a single conversation.",
    cards: [
      {
        title: "Skipping the GP and contacting specialists directly",
        body: "Example: emailing clinics for weeks before learning a referral is required for insured care.",
        advice: "Book a huisarts appointment first and ask specifically about POH-GGZ or a GGZ referral.",
      },
      {
        title: "Assuming POH-GGZ is a brush-off",
        body: "Example: declining practice-based support because you wanted a 'real' psychologist immediately.",
        advice: "Use POH-GGZ as stepped care when offered, and ask what would justify escalation to GGZ.",
      },
      {
        title: "Waiting silently on a long list",
        body: "Example: enduring months without asking about interim support or care mediation.",
        advice: "Ask about interim GP/POH contact, cancellation lists and insurer zorgbemiddeling in the same week the wait is confirmed.",
      },
      {
        title: "Expecting guaranteed English everywhere",
        body: "Example: arriving at intake and discovering language support was never arranged.",
        advice: "State language needs when booking and request an interpreter for complex conversations.",
      },
      {
        title: "Delaying crisis help because paperwork is incomplete",
        body: "Example: not calling 112 or 113 while waiting for registration or a referral letter.",
        advice: "Use crisis doors immediately when safety is at risk — paperwork can follow.",
      },
      {
        title: "Hiding safety concerns to seem 'not too bad'",
        body: "Example: avoiding mention of suicidal thoughts so the clinician will not overreact.",
        advice: "Say safety concerns plainly — correct routing depends on accurate information.",
      },
      {
        title: "Ignoring insurer contract status",
        body: "Example: starting with a non-contracted provider and facing unexpected personal costs.",
        advice: "Check the insurer's provider list before planned specialist GGZ and ask what would be reimbursed.",
      },
      {
        title: "Letting the GP relationship lapse during specialist care",
        body: "Example: stopping all primary-care contact and having no coordinator for renewals or prescriptions.",
        advice: "Stay registered with a huisarts and make sure specialist letters reach them.",
      },
      {
        title: "Treating loneliness only as a clinical problem",
        body: "Example: waiting for therapy to invent a social life after relocation.",
        advice: "Use clinical pathways when needed and also rebuild community — see the expat loneliness guide.",
      },
      {
        title: "Using children as interpreters",
        body: "Example: asking a teenager to translate a parent's trauma history.",
        advice: "Request professional interpreter support for sensitive mental health conversations.",
      },
    ] satisfies MistakeCard[],
    adaptationTips: [
      "Learn the stepped pathway once: concern → GP → POH-GGZ → GGZ → follow-up → GP.",
      "Register with a GP and arrange insurance in your first weeks.",
      "Ask about waiting-time alternatives instead of waiting silently.",
      "Save 112 and 113, and know huisartsenpost hours for your region.",
      "Keep a document folder and a personal timeline of appointments and plans.",
    ],
  },
  faq: [
    {
      q: "Do I need a GP referral for mental healthcare in the Netherlands?",
      a: "For non-emergency adult care, yes in practice — you normally start with your huisarts. Specialist GGZ usually requires a referral for insured care. POH-GGZ inside the practice is arranged through the GP practice. Crisis care is different: call 112 for immediate danger and contact 113 for suicidal thoughts.",
    },
    {
      q: "What is POH-GGZ?",
      a: "POH-GGZ is a mental health practice nurse (or equivalent practice-based professional) working inside many GP practices. They offer structured first-line conversations and help decide whether specialist GGZ is needed. It is stepped primary-care support, not the same as specialist GGZ.",
    },
    {
      q: "What is GGZ?",
      a: "GGZ means geestelijke gezondheidszorg — specialist mental healthcare. It includes psychologists, psychiatrists and mental health institutions. Access for planned insured care normally runs through a GP referral, with insurer contracts and waiting times shaping practical options.",
    },
    {
      q: "Does basic health insurance cover therapy?",
      a: "Medically necessary specialist GGZ is generally covered under basic insurance when indication and referral rules are met. For adults in 2026, expect the mandatory eigen risico of about €385 (or higher with voluntary top-up) to apply to specialist GGZ — so personal cost with a contracted provider is often only whatever deductible remains. GP and POH-GGZ usually sit outside that deductible. Non-contracted care can leave a much larger personal share. Children under 18 often follow municipal youth financing instead of adult billing. Always verify with your insurer.",
    },
    {
      q: "How long are waiting times for mental healthcare?",
      a: "The Dutch field standard (Treeknorm) for GGZ is 4 weeks to the first intake and 10 weeks from intake to treatment start (14 weeks total). In practice, POH-GGZ inside a GP practice is often days to about 2–4 weeks; basis GGZ totals often land around 3–4 months; specialised GGZ commonly runs longer — often about 4–6+ months depending on diagnosis and region. Always ask for the current weeks for your pathway, use interim GP/POH support while waiting, and contact insurer care mediation (zorgbemiddeling) if the wait stretches past Treeknorm or feels unsafe. Escalate via urgent or crisis doors if risk rises.",
    },
    {
      q: "Will clinicians speak English?",
      a: "Often yes in larger cities and academic settings, but it is not guaranteed everywhere. Ask when booking whether the consultation can be in English or whether an interpreter can be arranged, especially for consent and complex decisions.",
    },
    {
      q: "What should I do in a mental health crisis?",
      a: "If there is immediate danger, call 112. If you are having suicidal thoughts, contact 113 Suicide Prevention (113.nl). For urgent but not immediately life-threatening situations, contact your GP during opening hours or the huisartsenpost after hours. Read the Emergency Healthcare guide for surrounding urgent-care context.",
    },
    {
      q: "Can I see a psychiatrist directly?",
      a: "Usually not for insured planned care. Psychiatric assessment within GGZ is typically reached through GP referral and specialist intake. Your GP helps decide whether psychiatric expertise is indicated. This page does not recommend medication or specific clinicians.",
    },
    {
      q: "How does mental healthcare work for children and teenagers?",
      a: "Youth pathways often involve the GP, JGZ, school support and sometimes municipal jeugdhulp, with specialist youth GGZ when indicated. Organisation varies locally. Use the Healthcare for Children guide for family-system detail, and call 112 if there is immediate danger.",
    },
    {
      q: "I feel lonely after moving — is that a mental health referral?",
      a: "Relocation loneliness is common and can sit alongside clinical concerns without being the same thing. Start with your GP if mood, anxiety or functioning are affected, and also explore community rebuilding. Our Expat Loneliness guide covers the social side in depth.",
    },
    {
      q: "What if I already have a therapist abroad?",
      a: "Bring summaries and medication lists to your Dutch GP and ask how continuity can be arranged. A new Dutch referral is often still needed for insured GGZ. Online continuation with a foreign therapist may be a personal arrangement — check practical, legal and insurance implications yourself; this page does not endorse specific cross-border setups.",
    },
    {
      q: "Who coordinates my care after GGZ treatment ends?",
      a: "Usually your GP. Specialist letters return to primary care, which resumes ongoing coordination and can issue a new referral later if needed. Ask for a clear closing plan before specialist care ends.",
    },
  ],
  faqQuickReference: [
    "Non-emergency adult care → huisarts first; ask about POH-GGZ.",
    "Specialist GGZ → usually needs a GP referral and may involve waiting times.",
    "Adults: specialist GGZ usually draws on eigen risico (about €385 mandatory in 2026) — verify remaining balance with your insurer.",
    "English is often workable but not guaranteed — ask early; request an interpreter when needed.",
    "Immediate danger → 112. Suicidal thoughts → 113.",
    "Long waits → interim support + insurer zorgbemiddeling.",
    "Children/youth → GP, JGZ, school and sometimes municipal jeugdhulp; see children guide.",
    "After specialist care → coordination returns to your GP.",
  ],
  howToSchema: {
    name: "Preparing for a first mental health conversation with your GP",
    description:
      "Step-by-step orientation for expats and newcomers preparing for a first Dutch huisarts conversation about mental health support — booking clearly, writing a timeline, collecting documents, arranging language support and agreeing the next-step plan.",
    anchor: "#how-it-works",
    howToSteps: [
      {
        name: "Book a huisarts appointment and say it is about mental health support",
        text: "When you call or use the practice portal, say clearly that you want to discuss stress, mood, anxiety, sleep or another mental health concern. Ask whether a longer slot or a POH-GGZ route is available.",
      },
      {
        name: "Write a short timeline before you go",
        text: "Note when difficulties started, what changed, how sleep work relationships and daily functioning are affected, what you have already tried, and what you most want help with. Keep it to one page.",
      },
      {
        name: "Collect your documents",
        text: "Bring ID, your BSN, insurance details, a current medication and allergy list, and any relevant letters or summaries from previous care, including care abroad.",
      },
      {
        name: "Write three questions you want answered",
        text: "Appointments are focused. Typical questions include what the next step could be, whether POH-GGZ is available, what a GGZ referral would mean, and what to do if things worsen before the next contact.",
      },
      {
        name: "Arrange language support if you need it",
        text: "Ask the practice in advance about English-language consultation or interpreter options. Avoid relying on a child to interpret sensitive conversations.",
      },
      {
        name: "During the appointment, be concrete",
        text: "Describe frequency, severity, triggers and impact rather than only labels. Mention safety concerns openly — clinicians need that information to route care correctly.",
      },
      {
        name: "Confirm the plan before you leave",
        text: "Ask what happens next, who arranges it, when you should hear something, and what to do if risk increases. Repeat the plan back in your own words.",
      },
      {
        name: "Save the next contact routes",
        text: "Store the practice number, any POH-GGZ booking details, crisis numbers 112 and 113, and your insurer's care-mediation contact if a referral wait begins.",
      },
    ] satisfies HowToStep[],
  },
  relatedGuidesTips: [
    "No GP yet → start with the GP (huisarts) guide.",
    "Urgent or life-threatening situations → emergency healthcare guide.",
    "Coverage, deductible and contract questions → health insurance guide.",
    "Children's pathways → healthcare for children cornerstone.",
    "Relocation loneliness → expat loneliness guide.",
    "Hospital pathways if physical specialty care is also needed → hospitals guide.",
    "System overview for daily life → healthcare basics.",
  ],
  relatedGuides: [
    {
      label: "General Practitioner (GP) in the Netherlands",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Registration, appointments and the first-contact role that opens mental health pathways.",
    },
    {
      label: "Emergency Healthcare in the Netherlands",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112, huisartsenpost, SEH and urgent pathways — essential alongside crisis orientation here.",
    },
    {
      label: "Hospitals in the Netherlands",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Referrals, specialists, outpatient clinics and admissions when hospital care is involved.",
    },
    {
      label: "Health Insurance in the Netherlands",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package, annual deductible, policy types, contracted providers and switching.",
    },
    {
      label: "Health insurance comparison",
      href: HEALTH_INSURANCE_COMPARISON_PATH,
      status: "live",
      description: "Decision framework for comparing policies — not an insurer ranking.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Apotheek finding, hours, counseling and dienstapotheek when medicines sit beside mental health care.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "GPs, JGZ, vaccinations, paediatric specialists and youth mental health orientation.",
    },
    {
      label: "Dentists in the Netherlands",
      href: DENTISTS_NETHERLANDS_PATH,
      status: "live",
      description: "Finding a dentist, insurance, check-ups and emergency dental routes.",
    },
    {
      label: "Expat Loneliness in the Netherlands",
      href: EXPAT_LONELINESS_PATH,
      status: "live",
      description: "Why loneliness is common after moving and how to rebuild community alongside clinical care.",
    },
    {
      label: "Healthcare Basics",
      href: HEALTHCARE_BASICS_PATH,
      status: "live",
      description: "How Dutch healthcare fits together for everyday living.",
    },
    {
      label: "Health System Culture Basics",
      href: HEALTH_SYSTEM_CULTURE_PATH,
      status: "live",
      description: "Why Dutch consultations feel direct, and how shared decision-making works.",
    },
    {
      label: "Emergencies & Safety",
      href: EMERGENCIES_SAFETY_PATH,
      status: "live",
      description: "Emergency numbers and safety orientation for daily life.",
    },
    {
      label: "Mental Healthcare in the Netherlands",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "Stepped care, POH-GGZ, GGZ, waiting times and crisis doors — you are here.",
    },
  ] satisfies MentalHealthLink[],
  healthcareHubTips: [
    "Mental healthcare depends on two foundations: a GP and health insurance.",
    "This page is the mental healthcare cornerstone; the GP guide covers first contact in depth.",
    "Crisis situations follow separate doors — read the emergency healthcare guide alongside this one.",
    "Families should also read the children's healthcare guide for youth pathways.",
    "Relocation loneliness has a dedicated life guide that complements clinical routes.",
  ],
  healthcareHubCards: [
    {
      label: "Mental Healthcare in the Netherlands",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GP first contact, POH-GGZ, GGZ, waiting times, crisis doors and costs — you are here.",
    },
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Huisarts registration, appointments and referrals.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112, huisartsenpost, SEH, ambulance and urgent pathways.",
    },
    {
      label: "Hospitals",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Hospital referrals, specialists, outpatient clinics and admissions.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package, deductible and insurer contracts.",
    },
    {
      label: "Health insurance comparison",
      href: HEALTH_INSURANCE_COMPARISON_PATH,
      status: "live",
      description: "Compare policy factors without rankings — useful beside GGZ deductible literacy.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Apotheek finding, hours, counseling and dienstapotheek.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family and children's healthcare cornerstone.",
    },
    {
      label: "Dentists",
      href: DENTISTS_NETHERLANDS_PATH,
      status: "live",
      description: "Dental care and dental emergency routes.",
    },
    {
      label: "Healthcare Basics",
      href: HEALTHCARE_BASICS_PATH,
      status: "live",
      description: "System overview for everyday living.",
    },
    {
      label: "Health System Culture Basics",
      href: HEALTH_SYSTEM_CULTURE_PATH,
      status: "live",
      description: "How care conversations usually feel in Dutch healthcare.",
    },
    {
      label: "Health Hub",
      href: HEALTH_HUB_PATH,
      status: "comingSoon",
      description: "Dedicated health hub landing page — planned.",
    },
  ] satisfies MentalHealthLink[],
  exploreNextCards: [
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Register with a huisarts and understand how mental health first contact works.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "Know which door to use when something is urgent tonight.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Arrange basic cover and understand deductible and contract rules.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Youth pathways, JGZ and family healthcare setup.",
    },
    {
      label: "Expat Loneliness",
      href: EXPAT_LONELINESS_PATH,
      status: "live",
      description: "Rebuild community and social support after relocating.",
    },
  ] satisfies MentalHealthLink[],
  exploreNextTips: [
    "No GP yet → GP guide.",
    "Urgent situation planning → emergency healthcare guide.",
    "Coverage and invoice questions → health insurance guide.",
    "Child or teen concerns → healthcare for children.",
    "Feeling isolated after moving → expat loneliness guide.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks before you seek support",
      items: [
        "Register with a huisarts — most non-emergency pathways start there.",
        "Ask about POH-GGZ inside the practice.",
        "Understand stepped care into GGZ when specialist support is needed.",
        "Know crisis doors: 112 for immediate danger, 113 for suicidal thoughts.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks of mental healthcare",
      items: [
        "GP first contact opens most adult pathways.",
        "POH-GGZ offers practice-based first-line support.",
        "GGZ covers psychologists, psychiatrists and institutions.",
        "Waiting times need interim plans and care mediation.",
        "English is often workable but never guaranteed.",
        "Crisis doors are separate from routine booking.",
      ],
    },
    howItWorks: {
      title: "From the visual — the stepped-care loop",
      items: [
        "Concern noticed and written down as a short timeline.",
        "GP conversation decides POH-GGZ, watchful waiting or referral.",
        "POH-GGZ offers structured practice-based support when available.",
        "GGZ referral opens specialist assessment and care.",
        "Follow-up and return to the GP for ongoing coordination.",
      ],
    },
    gpFirstContact: {
      title: "From the visual — starting with your huisarts",
      items: [
        "Book clearly as a mental health conversation.",
        "Bring a timeline, medication list and three questions.",
        "Ask about POH-GGZ and what would justify GGZ referral.",
        "Leave with a next-step plan and review timing.",
        "Say safety concerns openly so routing is correct.",
      ],
    },
    pohGgz: {
      title: "From the visual — POH-GGZ inside the practice",
      items: [
        "Practice-based mental health support, not specialist GGZ.",
        "Structured, usually time-limited conversations.",
        "Booked via the GP practice, often as a separate slot type.",
        "Coordinates with the GP on escalation decisions.",
        "Crisis still uses 112, 113, GP or huisartsenpost.",
      ],
    },
    ggz: {
      title: "From the visual — specialist care levels",
      items: [
        "Psychologist pathways for specialised psychological care.",
        "Psychiatrist pathways when medical-psychiatric expertise is needed.",
        "GGZ institutions for multidisciplinary or higher-intensity care.",
        "Referral and indication decide level — this guide ranks no providers.",
        "GP remains the coordinator across episodes.",
      ],
    },
    finding: {
      title: "From the visual — how to find care",
      items: [
        "Start with the huisarts, not provider shopping.",
        "Check insurer contracted GGZ networks.",
        "Ask about e-health or blended options when appropriate.",
        "Use zorgbemiddeling if waits are long.",
        "Raise language needs at the first booking contact.",
      ],
    },
    waiting: {
      title: "From the visual — waiting with real week ranges",
      items: [
        "Treeknorm: 4 weeks to intake, 10 weeks to treatment, 14 weeks total.",
        "POH-GGZ often days–2–4 weeks; basis GGZ often ~3–4 months; specialised GGZ commonly ~4–6+ months.",
        "Ask for your pathway’s current wait in weeks.",
        "Agree interim GP or POH-GGZ support and use zorgbemiddeling early.",
        "Escalate via crisis doors if risk rises — do not wait silently.",
      ],
    },
    english: {
      title: "From the visual — English-language realities",
      items: [
        "Ask about English when booking.",
        "Request an interpreter for consent-level conversations.",
        "City capacity often differs from regional capacity.",
        "Do not use children as interpreters.",
        "Repeat the plan back to confirm understanding.",
      ],
    },
    crisis: {
      title: "From the visual — crisis doors",
      items: [
        "Immediate danger → call 112.",
        "Suicidal thoughts → contact 113 Suicide Prevention.",
        "Urgent during GP hours → your huisarts.",
        "Urgent outside hours → huisartsenpost.",
        "Open the Emergency Healthcare guide for the full urgent-care map.",
      ],
    },
    childrenYouth: {
      title: "From the visual — children and youth orientation",
      items: [
        "GP and JGZ are common first doors.",
        "Youth GGZ usually needs referral when indicated.",
        "Municipal jeugdhulp may be part of the local map.",
        "School support teams often coordinate with families.",
        "Use the Healthcare for Children guide for family detail.",
      ],
    },
    costs: {
      title: "From the visual — cost orientation with indicative figures",
      items: [
        "GP / POH-GGZ: usually no eigen risico.",
        "Adults 2026: mandatory eigen risico about €385 (higher if voluntary top-up).",
        "Contracted specialist GGZ: often remaining deductible only, then insurer covers insured care.",
        "Care-value orientation: basis GGZ ~€800–€1,200; specialised often €2,000–€6,000+ (insurer bill, not typical out-of-pocket).",
        "Never delay crisis care because of cost uncertainty.",
      ],
    },
    patientRights: {
      title: "From the visual — your rights and how to use them",
      items: [
        "Informed consent after understandable information.",
        "Privacy and confidentiality with clear sharing rules.",
        "Interpreter support can be requested.",
        "Access records and ask about complaints routes.",
        "Shared decision-making expects your questions.",
      ],
    },
    differences: {
      title: "From the visual — expect these patterns",
      items: [
        "GP-first access for insured specialist pathways.",
        "Stepped care before or instead of immediate specialist therapy.",
        "Waiting times with interim tools available.",
        "Direct communication and short focused appointments.",
        "Crisis doors separate from routine booking.",
      ],
    },
    checklist: {
      title: "From the visual — prepare in ten minutes",
      items: [
        "Timeline, medication list and insurance details ready.",
        "Three prioritised questions written down.",
        "Language support arranged if needed.",
        "Companion organised for stressful first visits.",
        "Crisis numbers saved: 112 and 113.",
      ],
    },
    mistakes: {
      title: "From the visual — mistakes with fixes",
      items: [
        "Skipping the GP → book huisarts first.",
        "Waiting silently → ask about mediation and interim support.",
        "Assuming English everywhere → ask and arrange interpreters.",
        "Delaying crisis help → use 112 or 113 when safety is at risk.",
        "Letting the GP relationship lapse → keep primary care active.",
      ],
    },
    faq: {
      title: "From the visual — top questions answered",
      items: [
        "GP first contact opens most adult pathways.",
        "POH-GGZ is practice-based stepped support.",
        "GGZ usually needs a referral for insured specialist care.",
        "Waiting times vary; mediation and interim plans help.",
        "112 and 113 are the well-known national crisis numbers used here.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next by need",
      items: [
        "First contact and registration → GP guide.",
        "Urgent tonight → emergency healthcare guide.",
        "Coverage and invoices → health insurance guide.",
        "Children or loneliness → family and life guides.",
      ],
    },
    healthcareHub: {
      title: "From the visual — the healthcare cluster",
      items: [
        "Mental healthcare cornerstone (this page): stepped care orientation.",
        "GP: registration, everyday care and referrals.",
        "Emergency healthcare: 112, huisartsenpost and urgent doors.",
        "Insurance and basics: coverage and system overview.",
        "Family and dental: children's and tandarts pathways.",
      ],
    },
    exploreNext: {
      title: "From the visual — choose the card matching your next need",
      items: [
        "GP registration → the first-contact route into mental healthcare.",
        "Emergency healthcare → know the urgent doors in advance.",
        "Health insurance → coverage, deductible and contracts.",
        "Children or loneliness → family and community guides.",
      ],
    },
  },
  sourceUsageTips: [
    "Use Government.nl for official English-language orientation on Dutch health topics.",
    "Use Rijksoverheid topic pages for Dutch-language government context on geestelijke gezondheidszorg.",
    "Use 113.nl for suicide-prevention support and official information about 113.",
    "Use Thuisarts.nl for plain-language medical orientation written for patients.",
    "Use GGZ sector orientation pages for how specialist mental healthcare is organised — not as a provider ranking.",
    "Use your insurer portal for contract status, deductible and care-mediation questions.",
  ],
  officialSources: [
    {
      label: "Government.nl — Health issues",
      href: "https://www.government.nl/topics/health-issues",
      description: "Official English-language orientation on Dutch health topics and how care is organised.",
    },
    {
      label: "Rijksoverheid — Geestelijke gezondheidszorg",
      href: "https://www.rijksoverheid.nl/onderwerpen/geestelijke-gezondheidszorg",
      description: "Dutch government topic pages on mental healthcare organisation and policy context.",
    },
    {
      label: "113 Suicide Prevention",
      href: "https://www.113.nl/",
      description: "National suicide-prevention organisation — contact route and information for people with suicidal thoughts.",
    },
    {
      label: "Thuisarts.nl",
      href: "https://www.thuisarts.nl/",
      description: "Patient-facing medical orientation in plain language, developed with Dutch GPs.",
    },
    {
      label: "GGZ Nederland",
      href: "https://www.ggznederland.nl/",
      description: "Sector orientation on how specialist mental healthcare (GGZ) is organised in the Netherlands.",
    },
    {
      label: "Government.nl — Emergency number 112",
      href: "https://www.government.nl/topics/emergency-number-112",
      description: "Official orientation on when and how to use the emergency number 112.",
    },
    {
      label: "NZa — Dutch Healthcare Authority",
      href: "https://www.nza.nl/english",
      description: "Regulator information on healthcare rules, waiting-time transparency and patient-facing rights.",
    },
  ],
  officialSourcesNote:
    "General information only — not diagnosis, not treatment advice, and not a ranking, endorsement or quality assessment of any therapist, clinic or programme. Pathways, waiting times, insurer contracts and coverage rules change, so verify your own situation with your GP, treating clinician and insurer, alongside the official sources above. If you or someone else is in immediate danger, call 112. If you are having suicidal thoughts, contact 113 Suicide Prevention.",
} as const;

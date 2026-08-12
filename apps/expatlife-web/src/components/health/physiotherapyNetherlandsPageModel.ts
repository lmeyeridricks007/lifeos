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
export const MATERNITY_CARE_NETHERLANDS_PATH = "/netherlands/health/maternity-care-netherlands/" as const;
export const HEALTH_INSURANCE_COMPARISON_PATH =
  "/netherlands/health/health-insurance-comparison-netherlands/" as const;

export type PhysioLink = {
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
const VISUAL_PREFIX = "physiotherapy-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const physiotherapyNetherlandsPage = {
  slug: "physiotherapy-netherlands",
  path: PHYSIOTHERAPY_NETHERLANDS_PATH,
  hubPath: HEALTH_HUB_PATH,
  parentGuidePath: HEALTHCARE_BASICS_PATH,
  publish: true,
  publishDate: "2027-02-17",
  seo: {
    title: "Physiotherapy in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how physiotherapy (fysiotherapie) works in the Netherlands for expats — what it covers, direct access vs GP referral, finding a therapist, insurance limits, typical pathways and English-language realities.",
    keywords: [
      "physiotherapy Netherlands",
      "fysiotherapie Netherlands",
      "physio Netherlands",
      "Dutch physiotherapy",
      "direct access physiotherapy Netherlands",
      "DTF fysiotherapie",
      "physio insurance Netherlands",
      "aanvullende verzekering physiotherapy",
      "English speaking physiotherapist Netherlands",
      "expat physiotherapy Netherlands",
      "physical therapy Netherlands",
      "fysio referral Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Health · Physiotherapy",
    pageTitle: "Physiotherapy in the Netherlands",
    subtitle:
      "How fysiotherapie works for expats — what it covers, direct access versus GP referral, finding a therapist, insurance limits, typical pathways and English-language realities.",
    primaryCta: { label: "Understand How Physiotherapy Works", href: "#how-it-works" },
    secondaryCta: { label: "Explore Healthcare Guides", href: "#related-guides" },
    chips: ["Fysiotherapie", "Direct access", "GP referral", "Insurance limits", "Finding a physio", "English"],
    disclaimer:
      "General orientation only — not medical advice, not a treatment plan, and not a medical ranking of clinics. Partner referral listings (where shown) are disclosed discovery tools only. For your own symptoms, speak with a physiotherapist, GP or treating clinician. Call 112 for life-threatening emergencies.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic Dutch physiotherapy practice — multicultural physiotherapist guiding an expat patient through a calm movement assessment beside treatment table and exercise props, canal-street light through the window, welcoming atmosphere, no graphic procedures.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#what-it-covers", label: "What it covers" },
    { href: "#direct-access", label: "Direct access" },
    { href: "#finding", label: "Finding a physio" },
    { href: "#insurance", label: "Costs" },
    { href: "#recommended", label: "Recommended" },
    { href: "#pathways", label: "Pathways" },
    { href: "#english", label: "English" },
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
      "Premium orientation board titled Before Your First Fysiotherapie Visit — four building blocks: understand what physio covers, check direct access vs referral, verify insurance session limits, and prepare ID insurance history and questions — with a Physio File Checklist rail.",
      "Four building blocks cover readiness: what physio does, access routes, insurance limits, and what to bring to the first visit."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch physiotherapy — what fysiotherapie covers, direct access DTF, GP referral routes, finding a therapist, insurance basic vs supplementary, and English-language realities — each with a one-line role description.",
      "Six building blocks explain almost every physio question — the sections below add practical detail."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium physiotherapy pathway flow — symptom or recovery need, screening intake, treatment plan and exercises, progress review, and GP or specialist coordination when needed — calm Dutch practice backdrop with a record rail.",
      "Most journeys run from intake screening to a shared plan with home exercises and progress reviews."
    ),
    whatItCovers: visual(
      "what-it-covers",
      "Premium what-physio-covers board — musculoskeletal recovery, mobility and strength work, post-op orientation, chronic condition support, and a clear boundary card that physio is not a substitute for GP diagnosis or emergency care.",
      "Physio supports movement and recovery — clinical diagnosis and emergencies stay with GP, specialist or 112 pathways."
    ),
    directAccess: visual(
      "direct-access",
      "Premium direct-access versus GP referral comparison — left door Directe Toegankelijkheid Fysiotherapie (DTF) screening, right door GP or specialist referral, and a note that insurance reimbursement rules may still ask for a referral even when clinical access is open.",
      "You can often start without a GP visit — but reimbursement rules may still favour a referral. Check both."
    ),
    finding: visual(
      "finding",
      "Premium finding-a-physio map — search by postcode, check KNGF registration and specialties, ask about English support and insurer contracts, book an intake, save address and cancellation rules — Dutch neighbourhood practice scene.",
      "Choose a nearby practice, confirm language and insurer fit, then book an intake rather than hopping between clinics."
    ),
    insurance: {
      src: `/images/infographics/${VISUAL_PREFIX}-insurance-premium-v2.png`,
      alt: "Premium physio costs board with indicative 2026 euro ranges — regular session about €40–€55, manual therapy often €55–€75, aanvullende packages typically 6–52 sessions, mandatory eigen risico about €385 when basic-insurance rules apply, and verify-with-insurer notes.",
      caption:
        "Indicative 2026 physio costs: regular sessions often about €40–€55; adults usually need aanvullende cover or self-pay for everyday care — verify your policy year.",
    },
    pathways: visual(
      "pathways",
      "Premium three-pathway orientation — injury recovery, chronic condition support, and post-operative rehab orientation — each with first-step cards and a disclaimer that this is system orientation, not personal treatment advice.",
      "Injury, chronic and post-op routes share intake and insurance checks — clinical plans stay with your treating clinicians."
    ),
    english: visual(
      "english",
      "Premium English-language realities board — many city practices offer English, availability varies by roster, ask before booking, bring key terms and history in writing, and use interpreter options when safety needs it.",
      "English support is common in international areas but never guaranteed — confirm when you book."
    ),
    differences: visual(
      "differences",
      "Premium surprise cards for expats about Dutch physiotherapy — direct access exists, insurance session caps surprise many adults, home exercises are central, GP coordination remains important, and clinics are not ranked here.",
      "Most surprises are system design — once you expect them, physio visits become predictable."
    ),
    checklist: visual(
      "checklist",
      "Premium physiotherapy visit preparation board — ID, insurance card, referral if any, symptom timeline, medication list, sports or work demands, questions written down, and four role cards for you, physio, GP and insurer.",
      "A five-minute preparation routine makes the first intake clearer."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with Fix advice cards — assuming basic insurance covers all adult sessions, skipping insurer checks, treating direct access as automatic reimbursement, ignoring red-flag symptoms, and expecting ranking-style clinic lists.",
      "Each common mistake has a practical Fix — most are avoided with one clear habit."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with readable question and answer pairs about DTF direct access, GP referrals, insurance limits, finding a therapist, English support, children, costs and when to call the GP or 112.",
      "Orientation answers only — confirm your own situation with your physiotherapist, GP and insurer."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking Physiotherapy to GP, hospitals, emergency healthcare, health insurance, healthcare for children, pharmacies, prescriptions and mental healthcare.",
      "Physiotherapy connects to GP care, insurance, hospitals and family pathways — read them together."
    ),
    healthcareHub: visual(
      "healthcare-hub",
      "Premium healthcare cluster ecosystem diagram with Physiotherapy at the centre, connected to GP, hospitals, emergency healthcare, health insurance, children's healthcare, pharmacies, prescriptions and mental healthcare.",
      "This page is the physiotherapy cornerstone — explore the wider healthcare cluster next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from Physiotherapy to the GP guide, health insurance, hospitals, emergency healthcare and healthcare for children, with official source cards for Government.nl, KNGF and Rijksoverheid.",
      "Continue with GP registration and insurance checks — and verify specifics on the official sources."
    ),
  },
  quickAnswer: {
    heading: "Quick answer: how physiotherapy works in the Netherlands",
    summary:
      "Dutch physiotherapy (fysiotherapie) helps with movement, recovery after injury or surgery, and many musculoskeletal complaints. Adults can often book directly (directe toegankelijkheid / DTF) after a screening intake — a GP referral is not always required to start. Insurance is the bigger surprise: basic health insurance covers physiotherapy only in specific situations; for many common adult injuries you need supplementary (aanvullende) cover or you pay yourself, usually with a session limit. Choose a nearby practice, confirm language and insurer rules before the first visit, and involve your GP when symptoms are unclear, severe or not improving.",
    bullets: [
      "Fysiotherapie supports movement, recovery and many musculoskeletal problems — it is not a substitute for GP diagnosis or emergency care.",
      "Direct access (DTF) often lets you book without a GP referral after screening — reimbursement rules may still prefer a referral.",
      "Basic insurance covers physio only in limited situations; many adults use aanvullende verzekering with annual session caps.",
      "Find a nearby practice, ask about English and insurer contracts, then book an intake.",
      "Red-flag symptoms, trauma and sudden severe problems belong with GP, Huisartsenpost or 112 — not a routine physio slot alone.",
    ],
    note: "This page is orientation for expats. It is not a treatment plan, not a clinic ranking, and not insurance advice for your policy year.",
  },
  introParagraphs: [
    "In the Netherlands, fysiotherapie is a regulated allied-health profession. Physiotherapists assess how you move, screen for problems that need a doctor first, and design exercise and treatment plans aimed at recovery and function. Many practices sit in neighbourhoods near homes and workplaces rather than only inside hospitals.",
    "Two systems surprise newcomers. First: you can often walk in or book directly without seeing a GP first (directe toegankelijkheid fysiotherapie). Second: what you can book clinically is not the same as what basic insurance will pay for. Adults recovering from everyday sports or desk-related complaints frequently discover that sessions come from supplementary insurance — or from their own pocket — until a defined annual limit is reached.",
    "This guide is practical orientation for expats, students, families and newcomers: what physio covers, how direct access and GP referrals differ, how to find a therapist, how insurance usually works, what typical injury / chronic / post-op pathways look like at a high level, and what English-language support feels like in practice. It is not personal medical advice and not a ranking of clinics.",
  ],
  introHighlights: [
    "Direct access exists — but insurance reimbursement can still ask for a referral or apply session caps.",
    "Basic package physio cover is limited for many adult situations; aanvullende cover matters.",
    "A screening intake comes first; home exercises are usually central to the plan.",
    "English is common in international cities but never guaranteed — ask when booking.",
    "GP, hospital and emergency pathways remain the right doors for diagnosis, trauma and red flags.",
  ],
  orientationFlowSteps: [
    "Check whether your complaint sounds routine for physio or needs a GP / urgent route first.",
    "Verify insurance: basic rules for your situation, aanvullende session limits, and any referral requirement for reimbursement.",
    "Find a nearby practice, ask about English and specialties, then book an intake.",
    "Bring ID, insurance details, history and questions — leave with a clear next-step plan.",
  ],
  safetyFileChecklist: [
    "Valid ID or residence document",
    "BSN (citizen service number)",
    "Insurer name, policy number and insurance card photo",
    "Note of remaining aanvullende physio sessions if your portal shows them",
    "GP referral letter if you have one (even when using direct access)",
    "Symptom timeline: when it started, what worsens or improves it",
    "Current medication list and allergies",
    "Relevant imaging or hospital discharge letters if you have them",
    "Work, sport and daily activity demands that matter for recovery",
    "Questions about language, costs and expected visit frequency",
  ],
  introScenarios: [
    {
      situation: "You twisted your ankle or strained your back and want physio soon",
      approach:
        "For many non-emergency musculoskeletal complaints you can book a physiotherapist directly for screening. Still check insurance rules and escalate to a GP or urgent care if pain is severe, neurological, or followed significant trauma.",
      firstStep: "Rule out red flags, then call a nearby practice to book an intake and ask about reimbursement.",
    },
    {
      situation: "Your insurer says adult physio needs supplementary cover",
      approach:
        "That is a common Dutch pattern for everyday adult physiotherapy. Confirm your aanvullende session limit for the current policy year before committing to a long course.",
      firstStep: "Open your insurer portal, note remaining physio sessions, then share that number at intake.",
    },
    {
      situation: "You are recovering after planned surgery",
      approach:
        "Hospital teams often give post-op exercise instructions and may refer you to physiotherapy. Follow discharge guidance and confirm whether sessions route via basic or supplementary rules for your indication.",
      firstStep: "Bring the discharge letter and any referral to the practice your hospital recommended or one near home.",
    },
    {
      situation: "You need English-language support",
      approach:
        "Many practices in internationally oriented cities can work in English, but availability varies by therapist and day. Ask when you book rather than assuming.",
      firstStep: "When booking, ask specifically whether the intake can be in English.",
    },
  ] satisfies ScenarioRow[],
  snapshotSignals: [
    {
      label: "Access",
      value: "Often direct (DTF)",
      note: "Many people can book without a GP visit after screening — reimbursement may still differ.",
    },
    {
      label: "Adult cover",
      value: "Often aanvullend",
      note: "Everyday adult physio frequently sits outside full basic-package cover.",
    },
    {
      label: "Children",
      value: "Broader basic rules",
      note: "Under-18 physiotherapy coverage in basic insurance is often wider — verify for your child.",
    },
    {
      label: "Language",
      value: "Ask when booking",
      note: "English is common in some cities but not guaranteed at every practice.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "What Physio Covers",
      body: "Movement assessment, recovery support after injury or surgery, exercise plans and many musculoskeletal complaints — with clear boundaries when a doctor or emergency route is needed first.",
    },
    {
      title: "Direct Access (DTF)",
      body: "You can often start physiotherapy without a GP referral after a screening intake. Clinical access and insurance reimbursement are separate questions.",
    },
    {
      title: "GP Referral",
      body: "A huisarts or specialist referral still helps when symptoms are complex, when your insurer asks for it, or when another diagnosis needs ruling out first.",
    },
    {
      title: "Finding a Therapist",
      body: "Search near home or work, check registration and specialties, ask about English and insurer contracts, then book an intake.",
    },
    {
      title: "Insurance Limits",
      body: "Basic insurance covers physio only in specific situations. Many adults rely on supplementary policies with annual session caps — verify every policy year.",
    },
    {
      title: "English Realities",
      body: "International neighbourhoods often have English-capable therapists, but you should confirm language at booking and bring written history if needed.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Save your insurer's physio reimbursement page beside your practice's phone number.",
    "Ask about cancellation windows when you book — missed sessions can still count against caps.",
    "Direct access ≠ automatic payment by basic insurance.",
    "Bring prior imaging or discharge notes if you have them; do not invent a diagnosis yourself.",
    "If symptoms include chest pain, sudden weakness, loss of bladder control or severe trauma, use GP / urgent / 112 pathways first.",
    "Children's coverage rules differ — check the family policy rather than copying adult assumptions.",
  ],
  howItWorks: {
    heading: "How Dutch physiotherapy works: from intake to progress review",
    intro:
      "A typical journey starts with screening and history-taking, then a shared plan that usually combines hands-on care with home exercises. Progress is reviewed; your GP stays in the loop when medical questions remain.",
    paragraphs: [
      "At the first visit the physiotherapist screens whether your complaint is appropriate for physio now, or whether you should see a GP or urgent pathway first. That screening is a safety step — not a promise that insurance will reimburse every session.",
      "If treatment continues, expect a clear goal (for example walking further, returning to desk work, or rebuilding strength after surgery), a mix of supervised sessions and home exercises, and periodic review. Many plans are shorter and more exercise-focused than newcomers from other systems expect.",
      "Coordination matters. If recovery stalls, red flags appear, or another specialty is needed, the physiotherapist may advise contact with your huisarts or the referring specialist. Hospital-linked rehab pathways can look more structured after surgery — follow the discharge instructions you were given.",
    ],
    flowLabels: [
      "Need / symptom",
      "Screening intake",
      "Shared plan",
      "Sessions + home exercises",
      "Progress review",
      "GP / specialist if needed",
    ],
    timeline: [
      {
        phase: "1",
        title: "You notice a recovery or movement need",
        detail:
          "Injury, post-op recovery, stiffness, or a longer-term musculoskeletal complaint brings you toward physiotherapy — after ruling out urgent medical routes when relevant.",
      },
      {
        phase: "2",
        title: "You book an intake (direct or via referral)",
        detail:
          "Many practices accept direct bookings. A GP or specialist referral may still be useful for reimbursement or complex cases.",
      },
      {
        phase: "3",
        title: "Screening and history",
        detail:
          "The physiotherapist checks safety, gathers your story, and assesses movement. You may be redirected to a doctor if needed.",
      },
      {
        phase: "4",
        title: "Shared goals and plan",
        detail:
          "Together you set practical goals and agree how often to attend, what to practise at home, and how progress will be judged.",
      },
      {
        phase: "5",
        title: "Sessions and home exercises",
        detail:
          "Supervised sessions support technique and progression; home exercises usually carry much of the recovery work between visits.",
      },
      {
        phase: "6",
        title: "Review and next decisions",
        detail:
          "Plans adapt as you improve, plateau, or need another clinical door. Insurance session limits should be tracked alongside clinical progress.",
      },
    ] satisfies TimelineStep[],
    decisionTips: [
      "Routine musculoskeletal complaint → consider direct physio booking after red-flag check.",
      "Unclear diagnosis, fever, unexplained weight loss, neurological red flags → GP first.",
      "Severe trauma / life-threatening symptoms → 112 or emergency pathways.",
      "Post-op instructions from hospital → follow those, then local physio as directed.",
      "Insurance uncertainty → check portal before committing to a long package.",
      "Language needs → confirm English at booking.",
    ],
    howToSteps: [
      {
        name: "Decide whether physio is the right first door",
        text: "If symptoms are severe, sudden after major trauma, or include red flags, contact your GP, Huisartsenpost or 112 first. For many everyday musculoskeletal complaints, physiotherapy can be an appropriate next step.",
      },
      {
        name: "Check insurance before a long course",
        text: "Look up whether your situation falls under basic-package physio rules or aanvullende session limits for the current policy year, and whether a referral is needed for reimbursement.",
      },
      {
        name: "Find a nearby practice",
        text: "Search by postcode, check registration and specialties, and ask about English support and insurer contracts.",
      },
      {
        name: "Book an intake and prepare a short file",
        text: "Bring ID, insurance details, referral if any, symptom timeline, medication list and your top questions.",
      },
      {
        name: "Complete screening and agree goals",
        text: "Use the first visit to confirm physio is appropriate, set practical goals, and understand the home-exercise expectation.",
      },
      {
        name: "Track sessions and progress together",
        text: "Note remaining insured sessions, keep doing agreed exercises, and ask for a GP review if recovery stalls or new medical questions appear.",
      },
      {
        name: "Escalate when the picture changes",
        text: "New neurological symptoms, worsening trauma signs, chest pain or sudden severe illness are not 'push through physio' moments — use medical urgent routes.",
      },
      {
        name: "Close or continue with a clear plan",
        text: "When goals are met, agree a maintenance approach. If more care is needed, confirm clinical and insurance next steps explicitly.",
      },
    ] satisfies HowToStep[],
  },
  whatItCovers: {
    heading: "What physiotherapy covers (and what it does not)",
    intro:
      "Fysiotherapie focuses on movement, function and recovery. It spans common injuries, post-operative orientation, and support for some longer-term conditions — with clear limits around diagnosis, medication and emergencies.",
    paragraphs: [
      "Typical reasons people see a physiotherapist include back or neck complaints, sports injuries, joint stiffness, post-fracture or post-surgery rehabilitation orientation, and guidance to rebuild strength and confidence in daily activities. Practices may also list specialties such as sports physio, pelvic physio, paediatric physio or manual therapy — availability varies.",
      "Physiotherapists do not replace your GP. They do not prescribe most medicines, do not run the Dutch hospital referral system on their own, and are not the right door for chest pain, breathing emergencies, major trauma or unexplained systemic illness. Screening exists precisely to redirect those situations.",
      "This page does not recommend specific techniques, products or clinics. Your own plan should come from the professional who assesses you.",
    ],
    cards: [
      {
        title: "Musculoskeletal recovery",
        body: "Sprains, strains, overuse complaints and many joint or soft-tissue problems are common physio reasons — after urgent medical issues are ruled out.",
      },
      {
        title: "Mobility and strength",
        body: "Exercise progression, movement coaching and return-to-work or return-to-sport orientation often sit at the centre of treatment.",
      },
      {
        title: "Post-operative orientation",
        body: "After surgery, hospital teams may refer you for guided recovery. Follow discharge instructions and confirm insurance routing for your indication.",
      },
      {
        title: "Longer-term support",
        body: "Some chronic conditions involve physiotherapy under specific insurance and clinical rules. Verify indication and session logic with clinician and insurer.",
      },
    ] satisfies TipCard[],
    points: [
      "Physio = movement, function and recovery support.",
      "GP / specialist = diagnosis, medicines and medical referrals.",
      "112 / SEH = life-threatening and major trauma emergencies.",
      "Specialties exist (sports, pelvic, paediatric) — ask what your practice offers.",
      "No clinic rankings appear on this page.",
      "Your personal programme is set after intake, not from a generic article.",
    ],
    checklist: [
      "Complaint described in your own words",
      "Red-flag check completed honestly",
      "Goal defined (walk, work, sport, sleep, stairs)",
      "Home-exercise willingness confirmed",
      "Specialty need identified if relevant",
      "Insurance category noted (basic / aanvullend / self-pay)",
    ],
    scenarios: [
      {
        situation: "Desk-related neck and shoulder tension",
        approach:
          "Often suitable for physio assessment and exercise coaching. Still see a GP if symptoms are neurological, progressive or unexplained.",
        firstStep: "Book an intake and bring notes on work setup and symptom timing.",
      },
      {
        situation: "You want a massage clinic, not rehab",
        approach:
          "Physiotherapy is a clinical recovery service, not a spa substitute. Ask what the practice focuses on before booking.",
        firstStep: "Clarify goals on the phone: recovery plan versus wellness massage.",
      },
      {
        situation: "Child with a movement concern",
        approach:
          "Paediatric pathways and insurance rules can differ. Coordinate with JGZ / GP guidance when needed and verify basic-insurance child physio rules.",
        firstStep: "Read Healthcare for Children alongside this page, then ask a suitable practice about paediatric experience.",
      },
      {
        situation: "Pain after a car accident with possible concussion",
        approach:
          "Trauma with head injury signs needs medical assessment first. Physio may come later under clinical guidance.",
        firstStep: "Use GP / emergency pathways first; do not start with routine physio alone.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Write one sentence: 'I want physio so I can …'.",
      "Bring shoes you actually walk or train in when relevant.",
      "Ask how much of the plan is home exercise versus in-clinic time.",
      "Keep GP details handy if screening redirects you.",
    ],
    contrastRows: [
      {
        type: "Physiotherapy",
        focus: "Movement, recovery, exercise plans",
        whenReferred: "Many musculoskeletal and post-op recovery needs",
        note: "Screening may redirect to a doctor",
      },
      {
        type: "GP (huisarts)",
        focus: "Primary diagnosis, medicines, referrals",
        whenReferred: "Unclear, systemic or complex medical pictures",
        note: "Still central for coordination",
      },
      {
        type: "Hospital / specialist",
        focus: "Surgery, complex diagnostics, specialty care",
        whenReferred: "After GP referral or emergency pathways",
        note: "May initiate post-op physio plans",
      },
      {
        type: "Emergency routes",
        focus: "112, Huisartsenpost, SEH",
        whenReferred: "Life-threatening or urgent medical problems",
        note: "Not replaced by a physio booking",
      },
    ] satisfies ComparisonRow[],
  },
  directAccess: {
    heading: "Direct access vs GP referral: two related doors",
    intro:
      "Directe toegankelijkheid fysiotherapie (DTF) means many people can book a physiotherapist without seeing the GP first. A referral remains useful — and sometimes necessary for reimbursement or complex care.",
    paragraphs: [
      "With direct access, the first appointment includes screening: is physiotherapy appropriate now, or should you see a doctor? If screening passes, treatment can start. If not, you are advised to contact your huisarts or another medical route.",
      "A GP or specialist referral is still common after hospital care, for unclear diagnoses, or when your insurer's reimbursement rules expect one. Some adults discover they can attend without a referral clinically, yet their aanvullende or basic-cover rules still ask for paperwork — always verify for your policy year.",
      "Think of it as two checklists: clinical access and payment rules. Passing one does not automatically satisfy the other.",
    ],
    cards: [
      {
        title: "Direct access (DTF)",
        body: "Book a physiotherapist directly. Expect screening. Useful for many straightforward musculoskeletal complaints when no red flags are present.",
      },
      {
        title: "GP referral",
        body: "Your huisarts assesses first and may write a referral. Helpful for complex pictures, medical coordination and some insurer processes.",
      },
      {
        title: "Specialist / hospital referral",
        body: "After surgery or specialty care, instructions and referrals often come from the treating team. Bring discharge papers to local physio.",
      },
      {
        title: "Reimbursement check",
        body: "Ask your insurer whether a referral is required for payment even when DTF allows clinical access.",
      },
    ] satisfies TipCard[],
    points: [
      "DTF = clinical doorway with screening.",
      "Referral = medical coordination and often paperwork for payers.",
      "You may need both clarity on access and clarity on reimbursement.",
      "Screening can still send you back to the GP.",
      "Do not delay emergency care waiting for a physio slot.",
      "Keep copies of any referral letters in your phone.",
    ],
    checklist: [
      "Red-flag self-check done",
      "DTF booking vs GP-first decision made",
      "Insurer referral requirement checked for this year",
      "Referral PDF or letter saved if available",
      "Screening outcome understood at intake",
      "GP practice contact saved for escalation",
    ],
    scenarios: [
      {
        situation: "You want to start this week without waiting for a GP appointment",
        approach:
          "Many practices accept direct bookings. Confirm screening and insurance rules when you call.",
        firstStep: "Call two nearby practices and ask: 'Do you accept DTF, and what does my insurer usually need?'",
      },
      {
        situation: "Your insurer portal mentions a referral for physio claims",
        approach:
          "Get the referral even if you already started via DTF, if that is what reimbursement requires.",
        firstStep: "Message your GP practice assistant with the insurer requirement and your physio details.",
      },
      {
        situation: "Screening says see a doctor first",
        approach:
          "Treat that as useful triage, not a rejection. Book the GP and share the physio's concerns.",
        firstStep: "Ask the physiotherapist what specifically should be checked medically.",
      },
      {
        situation: "Post-op hospital letter names a physio pathway",
        approach:
          "Follow hospital timing and precautions. Local practices can continue care with the discharge plan.",
        firstStep: "Bring the full discharge pack to the first outpatient physio visit.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Photograph referral letters the day you receive them.",
      "Ask the practice whether they declare DTF intakes to insurers differently.",
      "If unsure medically, a short GP visit can prevent a wasted physio course.",
      "Direct access is a convenience feature — not a ranking of how 'serious' your problem is.",
    ],
    contrastRows: [
      {
        route: "Direct access (DTF)",
        when: "Many routine musculoskeletal starts",
        how: "Book practice → screening intake → plan or redirect",
        note: "Check reimbursement separately",
      },
      {
        route: "GP referral",
        when: "Complex, unclear, or insurer-required cases",
        how: "Huisarts visit or message → referral → physio",
        note: "Strong coordination route",
      },
      {
        route: "Hospital / specialist referral",
        when: "After surgery or specialty treatment",
        how: "Follow discharge / clinic instructions",
        note: "Bring documents to local physio",
      },
      {
        route: "Urgent medical routes",
        when: "Red flags, major trauma, emergencies",
        how: "GP, Huisartsenpost or 112 as appropriate",
        note: "Do not substitute with DTF alone",
      },
    ] satisfies ContactRouteRow[],
    crossLink: {
      label: "General Practitioner (GP) in the Netherlands",
      href: GP_NETHERLANDS_PATH,
      description: "How huisarts registration, appointments and referrals work when you need the GP door first.",
    },
  },
  finding: {
    heading: "Finding a physiotherapist: choose nearby, confirm fit",
    intro:
      "Most people are best served by a practice they can reach reliably for repeated visits. Continuity beats hopping between trendy clinics.",
    paragraphs: [
      "Search for fysiotherapie near your postcode or workplace. Check whether the practice is easy to reach by bike or transit during your working hours. Ask about specialties if you need sports, pelvic or paediatric expertise.",
      "Registration and quality signals help orientation — for example professional association context via KNGF — but this guide does not rank clinics. Ask practical questions: English support, waiting time for intake, insurer contracts, and how they handle DTF screening.",
      "If you already have a hospital recommendation, you can still choose a neighbourhood practice for ongoing sessions when that fits your recovery plan and insurer rules.",
    ],
    cards: [
      {
        title: "Location and hours",
        body: "Pick a practice you can attend consistently. Ask about early, evening or Saturday options if your job is rigid.",
      },
      {
        title: "Language and communication",
        body: "Confirm English (or another language) for the actual therapist you will see, not only the front desk.",
      },
      {
        title: "Insurer contracts",
        body: "Ask whether they work with your insurer and how claims are submitted for aanvullende sessions.",
      },
      {
        title: "Specialty fit",
        body: "Sports, pelvic, paediatric and other focus areas exist — match the practice to your need without chasing rankings.",
      },
    ] satisfies TipCard[],
    points: [
      "Nearby + consistent beats far + famous.",
      "Ask for the treating therapist's language, not only reception English.",
      "Confirm insurer process before a long package.",
      "Waiting lists vary — call more than one practice if timing matters.",
      "Cancellation rules can affect both money and session caps.",
      "No league table of 'best physios' appears here.",
    ],
    checklist: [
      "Two nearby practices shortlisted",
      "English availability asked",
      "Specialty relevance checked",
      "Insurer contract / claim process asked",
      "Intake waiting time noted",
      "Cancellation policy understood",
      "Address and phone saved",
      "GP informed if they should receive updates",
    ],
    scenarios: [
      {
        situation: "Every practice near you has a two-week wait",
        approach:
          "Widen the radius slightly, ask about cancellation lists, and use GP advice if symptoms worsen meanwhile.",
        firstStep: "Join a cancellation list at the closest suitable practice and book the next realistic intake.",
      },
      {
        situation: "You want English and sports physio",
        approach:
          "State both needs when booking. Availability may mean a specific therapist on certain days.",
        firstStep: "Ask: 'Which therapist can do an English sports-oriented intake this month?'",
      },
      {
        situation: "Your insurer uses preferred providers",
        approach:
          "Check whether reimbursement differs outside contracted practices before you commit.",
        firstStep: "Search your insurer's physio partner list, then call a listed nearby practice.",
      },
      {
        situation: "You moved cities mid-treatment",
        approach:
          "Ask the current practice for a summary letter and transfer goals to a new local physio.",
        firstStep: "Request a short transfer note before your final session in the old city.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Put the practice pin next to your GP pin in maps.",
      "Ask how progress notes are shared with your huisarts when relevant.",
      "If booking online, still confirm language by phone or chat.",
      "Keep one family note with each person's physio contacts if they differ.",
    ],
    contrastRows: [
      {
        route: "Neighbourhood practice",
        when: "Most ongoing musculoskeletal and post-op follow-up",
        how: "Book intake near home or work",
        note: "Best default for continuity",
      },
      {
        route: "Hospital-linked therapy",
        when: "During admission or structured post-op pathways",
        how: "Follow hospital scheduling",
        note: "May transition to local physio later",
      },
      {
        route: "Specialist physio focus",
        when: "Pelvic, paediatric, sports or other named needs",
        how: "Ask explicitly for that expertise",
        note: "Availability varies by city",
      },
      {
        route: "Insurer-contracted practice",
        when: "When your policy steers reimbursement",
        how: "Check insurer partner lists",
        note: "Verify before a long course",
      },
    ] satisfies ContactRouteRow[],
  },
  insurance: {
    heading: "Insurance & costs: session prices and what you usually pay",
    intro:
      "For many adult expats, physiotherapy costs are shaped by session tariffs plus aanvullende verzekering session caps — not by the basic package alone. Use the indicative 2026 ranges below for planning, then verify with your practice and insurer.",
    paragraphs: [
      "Self-pay / practice tariffs (indicative 2026): a regular fysiotherapie session is often about €40–€55 (commonly around the mid-€40s). Manual therapy and some specialist sessions are often higher — roughly €55–€75. Practices set their own prices, so always ask for today’s list before you book a long course.",
      "Dutch basic health insurance includes physiotherapy only in specific situations (for example certain chronic indications after a defined threshold such as the first 20 sessions self-funded then basic cover, some post-hospital pathways, and generally broader cover for children under 18). Everyday adult sports or desk injuries are frequently not fully covered by basic insurance alone.",
      "Supplementary insurance (aanvullende verzekering) often reimburses a fixed number of physio sessions per year — commonly somewhere in a 6–52 session band depending on package and premium. Those aanvullende claims usually do not use eigen risico. When physio is billed under basic-insurance rules for adults, the mandatory eigen risico (about €385 in 2026, or higher with voluntary top-up) can apply. This is orientation only — not a quote and not advice to buy or drop a package.",
    ],
    indicativeNote:
      "Indicative cost orientation for 2026 planning conversations — not a fee schedule, quotation or reimbursement promise. Tariffs, session caps and deductible rules change by practice, insurer and policy year. Always verify remaining sessions, referral requirements, eigen risico impact and today’s practice tariff before you start.",
    indicativeRows: [
      {
        item: "Regular physio session (self-pay tariff)",
        indicative: "About €40–€55 / session (often ~€43–€50)",
        whatYouPay: "Full fee if uninsured for that visit or after your session cap",
        note: "Ask the practice for today’s price list — tariffs are free-set.",
      },
      {
        item: "Manual / specialist session",
        indicative: "Often about €55–€75 / session",
        whatYouPay: "Higher than a regular session when self-paying",
        note: "Manuele therapie and some specialty techniques sit above regular tariffs.",
      },
      {
        item: "Adult everyday physio (many common injuries)",
        indicative: "Usually aanvullende cover or self-pay",
        whatYouPay: "Insured sessions until your annual cap; then self-pay at practice tariff",
        note: "Basic package alone often does not cover routine adult recovery.",
      },
      {
        item: "Aanvullende physio package (orientation)",
        indicative: "Commonly about 6–52 sessions / year",
        whatYouPay: "Package premium; claims usually outside eigen risico",
        note: "Higher session budgets cost more premium — compare at renewal.",
      },
      {
        item: "Basic-package physio (specific indications)",
        indicative: "Only in defined situations (e.g. chronic list rules)",
        whatYouPay: "May hit adult eigen risico (~€385 in 2026) when basic-billed",
        note: "Ask insurer whether your indication qualifies and from which session.",
      },
      {
        item: "Chronic-list style pathway (orientation)",
        indicative: "Often first ~20 sessions self-pay / aanvullend, then basic may continue",
        whatYouPay: "Depends on indication list + insurer confirmation",
        note: "Do not assume — verify the exact threshold for your diagnosis.",
      },
      {
        item: "Children under 18",
        indicative: "Often broader basic-insurance physio rules than adults",
        whatYouPay: "Confirm child-specific limits — do not copy adult assumptions",
        note: "Verify in the family insurer portal.",
      },
      {
        item: "Adult mandatory eigen risico (2026)",
        indicative: "About €385 / year (up to ~€885 with voluntary top-up)",
        whatYouPay: "May apply when care is billed under basic insurance rules",
        note: "Aanvullende physio claims usually do not consume eigen risico — verify.",
      },
    ],
    orientationCards: [
      {
        title: "Know the session price",
        body: "Ask for today’s tariff before intake. Regular sessions often land around €40–€55; specialist techniques can run higher.",
      },
      {
        title: "Basic vs aanvullend",
        body: "Basic cover is selective for adult physio. Supplementary packages usually buy a session budget (often 6–52) — compare caps before renewal season.",
      },
      {
        title: "Referral for payment",
        body: "Even with DTF clinical access, some reimbursement routes still want a GP referral. Check paperwork early.",
      },
      {
        title: "Session tracking",
        body: "Keep a running count of used and remaining sessions. Practices and portals can lag — ask before booking extras.",
      },
    ] satisfies TipCard[],
    costFactors: [
      "Practice tariff for regular vs specialist sessions (€40–€55 vs often €55–€75)",
      "Whether your indication sits in basic-package physio rules",
      "Remaining aanvullende sessions for this calendar/policy year (often 6–52)",
      "Whether a referral is required for reimbursement",
      "Possible adult eigen risico (~€385) impact on basic-insured routes",
      "No-show / late-cancellation fees",
    ],
    checklist: [
      "Today’s practice tariff asked (regular + any specialist rates)",
      "Policy year confirmed",
      "Basic-indication question asked (if relevant)",
      "Aanvullende session cap noted (e.g. how many of 6–52 remain)",
      "Remaining sessions checked in portal",
      "Referral-for-payment rule checked",
      "Eigen risico relevance asked when basic-billed (~€385 in 2026)",
      "Health Insurance / comparison guides bookmarked for package choice",
    ],
    scenarios: [
      {
        situation: "Portal shows nine physio sessions left this year",
        approach:
          "Plan frequency with the therapist so clinical progress and the cap stay aligned. Ask what happens after session nine and what the self-pay tariff would be.",
        firstStep: "Share the remaining count at intake and agree a review before the last insured visits.",
      },
      {
        situation: "You have only basic insurance as an adult",
        approach:
          "Expect many everyday physio courses to be self-pay at roughly €40–€55 per regular session unless a specific basic indication applies.",
        firstStep: "Call insurer with your complaint category and ask whether basic cover applies; ask the practice for today’s tariff.",
      },
      {
        situation: "Child needs physiotherapy",
        approach:
          "Child rules are often more favourable under basic insurance, but still verify indication and any limits.",
        firstStep: "Check the child policy page, then book a practice with paediatric experience if needed.",
      },
      {
        situation: "Two insurers in one household",
        approach:
          "Each person's package and remaining sessions can differ. Do not assume partner benefits transfer.",
        firstStep: "Check each login separately before family bookings.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Multiply remaining sessions × practice tariff to see your self-pay risk after the cap.",
      "Screenshot remaining sessions after each claim updates.",
      "Ask whether the intake session counts toward the cap.",
      "Renewal season is when session budgets change — re-read the physio line.",
    ],
    crossLink: {
      label: "Health Insurance in the Netherlands",
      href: HEALTH_INSURANCE_PATH,
      description: "Basic package, deductible and choosing cover — use alongside your insurer portal for physio limits.",
    },
  },
  pathways: {
    heading: "Typical pathways: injury, chronic and post-op orientation",
    intro:
      "Most expat journeys fall into a few patterns. The details of your exercises and hands-on care are clinical decisions — this section only orients the system steps.",
    paragraphs: [
      "Injury pathways often start with direct access or a GP visit, then screening, short-course physio and home exercises, with medical escalation if recovery stalls or red flags appear.",
      "Chronic or longer-term pathways may involve clearer insurance indication rules, GP coordination and pacing that protects session budgets. Do not invent a diagnosis from an article; ask clinicians how your situation is categorised for care and cover.",
      "Post-operative pathways usually begin with hospital instructions: precautions, early exercises and timing for outpatient physio. Bring discharge letters so the neighbourhood therapist continues the same plan rather than starting from zero.",
    ],
    cards: [
      {
        title: "Injury recovery",
        body: "Screen → plan → progress with home exercises. Use GP/urgent routes for trauma or red flags. Track insurance sessions from day one.",
      },
      {
        title: "Chronic support",
        body: "Expect more coordination with your GP and clearer questions about whether basic or supplementary rules apply. Goals stay functional and realistic.",
      },
      {
        title: "Post-operative orientation",
        body: "Follow hospital timing and restrictions. Transfer documents to local physio. Confirm billing route for your procedure year.",
      },
      {
        title: "When to change doors",
        body: "Worsening neurology, infection signs, chest symptoms or major new trauma mean medical review — not simply more of the same physio plan.",
      },
    ] satisfies TipCard[],
    timeline: [
      {
        phase: "A",
        title: "Injury path (orientation)",
        detail:
          "Safety check → DTF or GP → physio intake → short plan → review. Escalate if not improving as expected.",
      },
      {
        phase: "B",
        title: "Chronic path (orientation)",
        detail:
          "GP context + insurance indication questions → physio goals that fit session budgets → periodic medical review.",
      },
      {
        phase: "C",
        title: "Post-op path (orientation)",
        detail:
          "Hospital plan → precautions → outpatient physio with discharge papers → graded return to activity.",
      },
    ] satisfies TimelineStep[],
    points: [
      "Orientation only — not your personal protocol.",
      "Documents travel with you: referrals, discharge letters, imaging summaries.",
      "Insurance category can differ by pathway.",
      "Home exercises remain central in almost every path.",
      "Hospitals guide deepens specialist and admission context.",
      "Emergency Healthcare covers urgent doors when pathways break.",
    ],
    checklist: [
      "Pathway type identified (injury / chronic / post-op)",
      "Red-flag monitoring agreed",
      "Documents packed for intake",
      "Insurance route asked for this pathway",
      "Home-exercise schedule written down",
      "Review date booked",
    ],
    scenarios: [
      {
        situation: "Ankle sprain after sport, walking possible",
        approach:
          "Often a physio-first candidate after ruling out inability to bear weight or severe deformity that needs urgent medical care.",
        firstStep: "If walking is possible and no red flags, book DTF intake and start RICE-style first aid guidance from trusted clinical advice you already have.",
      },
      {
        situation: "Long-running back pain with prior GP visits",
        approach:
          "Bring previous letters and imaging summaries. Align physio goals with what the GP already ruled in or out.",
        firstStep: "Ask the GP whether a physio course and any referral paperwork are appropriate now.",
      },
      {
        situation: "Two weeks after planned knee surgery",
        approach:
          "Follow the surgeon/hospital physio protocol. Do not copy a generic internet programme over discharge instructions.",
        firstStep: "Book outpatient physio with the discharge pack in hand.",
      },
      {
        situation: "Physio for three weeks, now new leg weakness",
        approach:
          "New neurological signs need medical review promptly — pause the assumption that more of the same plan is enough.",
        firstStep: "Contact GP or urgent pathways as advised; inform the physiotherapist.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Label your phone folder: Injury / Chronic / Post-op docs.",
      "Ask 'what should make me call the GP sooner?' at intake.",
      "For post-op, photograph wound-care and weight-bearing rules.",
      "Link Hospitals and GP guides when pathways span multiple doors.",
    ],
    urgencyRows: [
      {
        situation: "Chest pain, severe breathlessness, collapse",
        level: "emergency",
        action: "Call 112 — not a physio booking.",
      },
      {
        situation: "Major trauma, suspected fracture, inability to bear weight after injury",
        level: "urgent",
        action: "Use GP / Huisartsenpost / SEH guidance rather than routine DTF alone.",
      },
      {
        situation: "New saddle anaesthesia, bladder/bowel loss, progressive leg weakness",
        level: "urgent",
        action: "Seek urgent medical assessment; inform physio you are redirecting.",
      },
      {
        situation: "Everyday sprain improving with advice",
        level: "routine",
        action: "Physio intake and graded plan can be appropriate after safety checks.",
      },
    ] satisfies UrgencyRow[],
    crossLink: {
      label: "Hospitals in the Netherlands",
      href: HOSPITALS_NETHERLANDS_PATH,
      description: "Referrals, specialists, admissions and discharge context when physio follows hospital care.",
    },
  },
  english: {
    heading: "English-language realities for physiotherapy",
    intro:
      "Many therapists in internationally oriented Dutch cities can work in English, but it is a local roster question — never a national guarantee.",
    paragraphs: [
      "Reception English does not always mean your treating physiotherapist is fluent that day. Ask for the specific clinician and appointment slot. In smaller towns, English availability can be thinner; written notes and translation support may help.",
      "Bring a short written symptom timeline, medication list and goals in English (and Dutch keywords if you have them). Safety words matter: numbness, weakness, chest pain, fever, trauma. If communication still feels unsafe for clinical decisions, ask about another therapist, a GP visit with interpretation support, or postponing non-urgent care until language fit is clear.",
      "This page does not maintain a directory of English-speaking clinics and does not rank anyone on language skills.",
    ],
    cards: [
      {
        title: "Ask at booking",
        body: "State that you need the intake and treatment explanations in English. Get a yes for the named therapist.",
      },
      {
        title: "Bring written history",
        body: "A one-page timeline reduces misunderstandings about onset, aggravating factors and prior treatment.",
      },
      {
        title: "Confirm exercise instructions",
        body: "Ask for written or video home-exercise guidance you can replay — technique errors are costly.",
      },
      {
        title: "Escalate language risk",
        body: "If you cannot understand precautions after surgery or red-flag advice, pause and fix communication before continuing.",
      },
    ] satisfies TipCard[],
    points: [
      "City ≠ automatic English on every shift.",
      "Name the therapist when confirming language.",
      "Written exercises beat memory alone.",
      "Medical red flags need clear comprehension.",
      "No public ranking of English clinics here.",
      "GP interpreter options may help when language blocks safety.",
    ],
    checklist: [
      "English requested for treating therapist",
      "Confirmation noted in booking email/chat",
      "Symptom timeline printed or on phone",
      "Medication and allergy list ready",
      "Exercise handout/video requested",
      "Backup plan if language fit fails",
    ],
    scenarios: [
      {
        situation: "Website says 'English spoken' but therapist is unsure",
        approach:
          "Ask to reschedule with a colleague rather than guessing through post-op precautions.",
        firstStep: "Call reception and request an English-capable clinician explicitly.",
      },
      {
        situation: "You understand conversation but not exercise nuance",
        approach:
          "Request written cues, fewer exercises done well, and a follow-up check of technique.",
        firstStep: "Say: 'Please write the three most important home exercises for me.'",
      },
      {
        situation: "Partner translates for you",
        approach:
          "Helpful for logistics; still ensure the patient understands safety limits personally.",
        firstStep: "Repeat precautions back in your own words before leaving.",
      },
      {
        situation: "Small town with limited English",
        approach:
          "Combine a GP visit, written materials and the best available local physio — or travel to a city practice if clinically needed.",
        firstStep: "Ask the GP practice which nearby physios usually work with internationals.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Learn a few Dutch scheduling phrases; clinical detail can stay in English when agreed.",
      "Save exercise PDFs in a phone album named Physio.",
      "If post-op rules are unclear in English, contact the hospital team that operated.",
      "Language friction is a safety issue, not rudeness.",
    ],
  },
  differences: {
    heading: "Common differences expats notice",
    intro:
      "Dutch physiotherapy often feels more direct-access and exercise-heavy than systems built around long specialist waitlists — while insurance caps surprise many adults.",
    cards: [
      {
        title: "Direct access exists",
        body: "Example: booking physio this week without a GP letter.",
        advice: "Still complete screening and check reimbursement paperwork.",
      },
      {
        title: "Insurance caps for adults",
        body: "Example: discovering everyday physio is aanvullend with nine sessions.",
        advice: "Read the physio line in your package every policy year.",
      },
      {
        title: "Home exercises are central",
        body: "Example: shorter in-clinic time than expected.",
        advice: "Treat homework as the main treatment between visits.",
      },
      {
        title: "GP stays important",
        body: "Example: physio redirects you for medical review.",
        advice: "Keep huisarts registration active and share updates.",
      },
      {
        title: "No ranking culture here",
        body: "Example: looking for a 'top 10 physios' list on this site.",
        advice: "Choose nearby fit, language and insurer clarity instead.",
      },
      {
        title: "Children's rules differ",
        body: "Example: assuming adult self-pay logic for a child.",
        advice: "Verify basic-insurance child physio rules separately.",
      },
    ] satisfies MistakeCard[],
    tips: [
      "Separate clinical access from payment rules in your notes.",
      "Budget sessions like a scarce resource when caps are tight.",
      "Use GP and Emergency guides when the picture is medical, not mechanical.",
      "Ask for written plans — Dutch care is often concise verbally.",
      "Renewal season is when surprises reset.",
      "Continuity with one practice beats clinic hopping.",
    ],
  },
  preparation: {
    heading: "Physiotherapy checklist: prepare once, reuse often",
    paragraphs: [
      "A short preparation routine makes intakes faster and safer. You reuse the same file when switching practices or continuing after hospital care.",
      "Update the file when medicines, insurers or goals change. Share only what clinicians need; keep copies of referrals and discharge letters.",
    ],
    checklist: [
      "ID and BSN available",
      "Insurance card / portal screenshots for physio limits",
      "Referral letter if you have one",
      "Symptom timeline and goals written",
      "Medication and allergy list updated",
      "Discharge or imaging summaries packed when relevant",
      "English-language need confirmed at booking",
      "Cancellation policy and session count noted",
      "GP contact saved for escalation",
      "Home-exercise tools ready (space, shoes, mat)",
    ],
    roleCards: [
      { role: "You", focus: "History, goals, home exercises, honest red-flag reporting." },
      { role: "Physiotherapist", focus: "Screening, plan, technique coaching, progress review." },
      { role: "GP / specialist", focus: "Diagnosis, medicines, referrals, medical escalation." },
      { role: "Insurer", focus: "Session caps, claim rules, referral-for-payment requirements." },
    ] satisfies RoleCard[],
    tips: [
      "Keep a single Physio folder in cloud notes.",
      "After each visit, write three homework cues in your own words.",
      "Before renewal, export how many sessions you actually used.",
      "Tell the practice if you will self-pay versus claim.",
    ],
  },
  mistakes: {
    heading: "Common expat mistakes (and how to fix them)",
    intro: "These mistakes are common and fixable. Each one has a practical correction.",
    cards: [
      {
        title: "Assuming basic insurance covers all adult physio",
        body: "Example: surprise invoices after a sports injury course.",
        advice: "Check basic vs aanvullend rules for your indication before week two.",
      },
      {
        title: "Treating DTF as automatic reimbursement",
        body: "Example: starting without paperwork your insurer still requires.",
        advice: "Ask the payment question separately from the booking question.",
      },
      {
        title: "Skipping red-flag checks",
        body: "Example: booking physio for post-trauma symptoms that need imaging or urgent care.",
        advice: "When in doubt, GP / urgent pathways first.",
      },
      {
        title: "Ignoring home exercises",
        body: "Example: attending sessions but changing nothing between visits.",
        advice: "Schedule homework like a recurring calendar event.",
      },
      {
        title: "Chasing rankings instead of fit",
        body: "Example: delaying care to find a 'best clinic' list.",
        advice: "Choose nearby, language-capable, insurer-clear care now.",
      },
      {
        title: "Letting session caps run out unnoticed",
        body: "Example: discovering zero sessions left mid-plan.",
        advice: "Track remaining visits with the therapist each fortnight.",
      },
    ] satisfies MistakeCard[],
    adaptationTips: [
      "Make insurer portal checks part of intake week.",
      "Keep GP registration current even if you love your physio.",
      "Use written exercises to survive busy work weeks.",
      "Read Emergency Healthcare before the first scary symptom spike.",
      "Prefer continuity over hopping for marginal convenience.",
      "Re-verify rules every January or after package changes.",
    ],
  },
  faq: [
    {
      q: "Do I need a GP referral for physiotherapy in the Netherlands?",
      a: "Often no for clinical access — directe toegankelijkheid (DTF) lets many people book after screening. Your insurer may still want a referral for reimbursement. Check both the clinical and payment rules.",
    },
    {
      q: "Is physiotherapy covered by basic health insurance?",
      a: "Only in specific situations for many adults. Everyday injury recovery often relies on aanvullende verzekering or self-pay. Children frequently have broader basic-package physio rules — verify your own policy year.",
    },
    {
      q: "How do I find a physiotherapist?",
      a: "Search near your postcode, ask about specialties, English support and insurer contracts, then book an intake — or use the recommended referral options on this page as a starting point. Confirm fit yourself; this is not a medical ranking.",
    },
    {
      q: "Can I get physiotherapy in English?",
      a: "Many practices in internationally oriented areas can, but it is not guaranteed. Confirm that the treating therapist — not only reception — can work in English.",
    },
    {
      q: "What happens at the first appointment?",
      a: "Expect history-taking, screening for medical red flags, a movement assessment and a proposed plan with goals and home exercises. You may be referred to a GP instead if physio is not appropriate yet.",
    },
    {
      q: "What is DTF?",
      a: "Directe Toegankelijkheid Fysiotherapie — the route that allows direct booking without a prior GP referral, with mandatory screening at the start.",
    },
    {
      q: "Should I see a GP or a physiotherapist first?",
      a: "Use GP, Huisartsenpost or 112 for red flags, major trauma, unclear systemic illness or emergencies. For many routine musculoskeletal complaints, DTF physio can be a reasonable first clinical door after a safety check.",
    },
    {
      q: "How much does a session cost if I pay myself?",
      a: "Indicative 2026 practice tariffs for a regular session are often about €40–€55 (commonly around the mid-€40s). Manual therapy and some specialist sessions are often about €55–€75. Practices set their own prices — ask for today’s list. Not a quote.",
    },
    {
      q: "Does eigen risico apply to physiotherapy?",
      a: "When physio is billed under basic-insurance rules for adults, the mandatory eigen risico (about €385 in 2026, or higher with voluntary top-up) can apply. Aanvullende physio claims usually do not use eigen risico. Verify the billing route with your insurer.",
    },
    {
      q: "How many sessions does supplementary insurance cover?",
      a: "Packages commonly sit somewhere in a 6–52 session band per year depending on insurer and premium. Check your remaining count in the portal before booking a long course.",
    },
    {
      q: "Can children get physiotherapy?",
      a: "Yes. Coverage rules for under-18s are often more favourable under basic insurance than for adults, but indication and practice fit still matter. See also Healthcare for Children.",
    },
    {
      q: "What if physiotherapy is not helping?",
      a: "Tell your physiotherapist, review goals and technique, and ask whether a GP or specialist review is needed. Do not silently escalate exercises beyond agreed plans.",
    },
    {
      q: "Do you recommend specific clinics?",
      a: "This guide is system orientation first. Where we list partner or referral physio options, those links are disclosed discovery tools — not a medical ranking and not a guarantee of fit, availability or insurance contract status. Always confirm language, specialty and insurer rules yourself.",
    },
    {
      q: "How does physio connect to hospitals?",
      a: "After surgery or specialty care, hospitals may start or refer physiotherapy. Bring discharge instructions to your local practice. See the Hospitals guide for secondary-care context.",
    },
    {
      q: "When should I call 112 instead of booking physio?",
      a: "For life-threatening symptoms such as severe chest pain, breathing difficulty, collapse, or major trauma emergencies. Physio bookings are for non-emergency recovery pathways.",
    },
  ],
  faqQuickReference: [
    "DTF often allows booking without a GP visit.",
    "Regular self-pay sessions often ~€40–€55 (2026 orientation).",
    "Adult everyday physio often uses aanvullende caps (commonly 6–52).",
    "Children frequently follow broader basic rules — verify.",
    "Ask for English with the treating therapist.",
    "Home exercises are central.",
    "Red flags → GP / urgent / 112, not more routine sessions.",
    "Partner clinic links are discovery tools — not rankings.",
  ],
  recommended: {
    heading: "Recommended physiotherapists & support",
    intro:
      "Use these referral options when you want English-friendly physiotherapy discovery or to compare supplementary insurance that covers physio sessions. Listings are for discovery — confirm language, specialty, availability and insurer contracts yourself.",
    disclosure:
      "Some links are affiliate or referral links. If you use them, we may earn a commission at no extra cost to you. Ordering reflects editorial relevance for expats, not pay-to-rank. This is not medical advice and not a clinic ranking.",
    affiliatePlacementId: "nl-health-physiotherapy-support-providers" as const,
    physioCards: [
      {
        name: "Evolution Fysiotherapie",
        partnerSlug: "evolution-fysiotherapie",
        url: "https://evolutionfysiotherapie.nl/physiotherapy-for-expats-in-amsterdam/",
        useFor: "English-speaking physiotherapy for expats in Amsterdam — direct access, clear insurance claims support.",
        priceRange: "Ask practice for today’s tariff (regular sessions often ~€40–€55).",
        city: "Amsterdam",
        isAffiliate: true,
      },
      {
        name: "Alter Physio",
        partnerSlug: "alter-physio",
        url: "https://www.alterphysio.com/physiotherapy-zuidas-amsterdam",
        useFor: "English physio near Amsterdam Zuidas / Zuid — convenient for desk-work and travel-related complaints.",
        priceRange: "Confirm session fees and insurer contracts when booking.",
        city: "Amsterdam Zuid",
        isAffiliate: true,
      },
      {
        name: "Art of Physio",
        partnerSlug: "art-of-physio",
        url: "https://artofphysio.nl/",
        useFor: "International physiotherapy team in Amsterdam Zuid focused on expats and injury recovery.",
        priceRange: "Confirm language, specialty and today’s tariff before intake.",
        city: "Amsterdam Zuid",
        isAffiliate: true,
      },
    ],
    supportCards: [
      {
        name: "Independer",
        partnerSlug: "independer",
        url: "https://www.independer.nl/",
        useFor: "Compare Dutch basic and supplementary insurance — useful when checking physio session budgets (often 6–52).",
        priceRange: "Free comparison; premiums and session caps vary by package.",
        city: "Netherlands-wide",
        isAffiliate: true,
      },
    ],
    categoryLinks: [
      { href: HEALTH_INSURANCE_PATH, label: "Health insurance guide" },
      { href: HEALTH_INSURANCE_COMPARISON_PATH, label: "Health insurance comparison" },
      { href: "/netherlands/services/health-insurance/", label: "Health insurance providers" },
      { href: "/netherlands/services/", label: "Browse all services" },
    ],
  },
  howToSchema: {
    name: "Using Physiotherapy in the Netherlands",
    description:
      "Step-by-step orientation for expats on Dutch physiotherapy (fysiotherapie): checking the right door, verifying insurance limits, finding a therapist, completing screening intake and tracking sessions.",
    anchor: "#how-it-works",
  },
  relatedGuidesTips: [
    "GP registration and referrals → GP guide.",
    "Hospital and post-op context → Hospitals.",
    "Urgent symptoms → Emergency Healthcare.",
    "Package and deductible basics → Health Insurance.",
    "Family pathways → Healthcare for Children.",
    "Medicines around recovery → Pharmacies / Prescriptions.",
  ],
  relatedGuides: [
    {
      label: "General Practitioner (GP) in the Netherlands",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Registration, appointments, referrals and when the huisarts door comes first.",
    },
    {
      label: "Hospitals in the Netherlands",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Referrals, specialists, admissions and discharge context for post-op physio.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112, Huisartsenpost, SEH and urgent pathways when physio is the wrong door.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package, deductible and choosing cover alongside physio limits.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family healthcare pathways when children need movement care.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Apotheek orientation if medicines are part of your recovery story.",
    },
    {
      label: "Prescriptions",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      status: "live",
      description: "Recepten, e-prescriptions and medication lists around recovery.",
    },
    {
      label: "Mental Healthcare",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GP first contact, POH-GGZ and GGZ pathways when mental health is also in play.",
    },
    {
      label: "Dentists",
      href: DENTISTS_NETHERLANDS_PATH,
      status: "live",
      description: "Dental care orientation — separate from physiotherapy.",
    },
    {
      label: "Healthcare Basics",
      href: HEALTHCARE_BASICS_PATH,
      status: "live",
      description: "How Dutch healthcare fits together for everyday living.",
    },
  ] satisfies PhysioLink[],
  healthcareHubTips: [
    "Physiotherapy connects GP care, hospitals, insurance and family pathways.",
    "This page is the physiotherapy cornerstone for the healthcare cluster.",
    "Keep Emergency Healthcare bookmarked for red-flag moments.",
    "Pharmacies and Prescriptions help when medicines sit beside recovery.",
  ],
  healthcareHubCards: [
    {
      label: "Physiotherapy (fysiotherapie)",
      href: PHYSIOTHERAPY_NETHERLANDS_PATH,
      status: "live",
      description: "Direct access, insurance limits, finding a therapist and pathways — you are here.",
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
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family and children's healthcare cornerstone.",
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
      label: "Mental Healthcare",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GP first contact, POH-GGZ and GGZ care.",
    },
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Verloskundige first line, obstetric pathways, registration, insurance and kraamzorg awareness.",
    },
    {
      label: "Health insurance comparison",
      href: HEALTH_INSURANCE_COMPARISON_PATH,
      status: "live",
      description: "Decision framework for comparing Dutch health insurance — not an insurer ranking.",
    },
  ] satisfies PhysioLink[],
  exploreNextCards: [
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Register and unlock referrals when the medical door comes first.",
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
      description: "Secondary care and discharge context for post-op physio.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "Know which urgent door to use when red flags appear.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family pathways alongside children's physio questions.",
    },
    {
      label: "Prescriptions",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      status: "live",
      description: "Medication lists and recept mechanics around recovery.",
    },
  ] satisfies PhysioLink[],
  exploreNextTips: [
    "No GP yet → GP guide.",
    "Session-cap confusion → Health Insurance + insurer portal.",
    "Post-op documents → Hospitals.",
    "Scary symptoms → Emergency Healthcare.",
    "Child movement care → Healthcare for Children.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Understand what Dutch physio covers.",
        "Separate direct access from reimbursement rules.",
        "Check insurance session limits for this year.",
        "Prepare ID, history and questions for intake.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "What fysiotherapie covers.",
        "Direct access (DTF).",
        "GP referral routes.",
        "Finding a therapist.",
        "Insurance basic vs aanvullend.",
        "English-language realities.",
      ],
    },
    howItWorks: {
      title: "From the visual — the physio pathway",
      items: [
        "Screening intake first.",
        "Shared goals and plan.",
        "Sessions plus home exercises.",
        "Review and GP escalation when needed.",
      ],
    },
    whatItCovers: {
      title: "From the visual — scope boundaries",
      items: [
        "Movement and recovery support.",
        "Post-op orientation with documents.",
        "Not a GP or emergency substitute.",
        "No clinic rankings.",
      ],
    },
    directAccess: {
      title: "From the visual — two doors",
      items: [
        "DTF clinical access with screening.",
        "GP / specialist referral routes.",
        "Payment rules checked separately.",
        "Urgent medical doors when needed.",
      ],
    },
    finding: {
      title: "From the visual — choose and confirm",
      items: [
        "Search near home or work.",
        "Confirm language and specialty.",
        "Ask insurer contract questions.",
        "Book intake and save cancellation rules.",
      ],
    },
    insurance: {
      title: "From the visual — cost orientation",
      items: [
        "Regular self-pay sessions often about €40–€55 (2026).",
        "Manual / specialist sessions often about €55–€75.",
        "Aanvullende packages commonly cover about 6–52 sessions.",
        "Adult eigen risico ~€385 when basic-billed — verify annually.",
      ],
    },
    pathways: {
      title: "From the visual — three orientations",
      items: [
        "Injury recovery path.",
        "Chronic support path.",
        "Post-op hospital-linked path.",
        "Escalate on red flags.",
      ],
    },
    english: {
      title: "From the visual — language fit",
      items: [
        "Ask for the treating therapist.",
        "Bring written history.",
        "Request written exercises.",
        "Fix unsafe communication gaps.",
      ],
    },
    differences: {
      title: "From the visual — system characteristics",
      items: [
        "Direct access exists.",
        "Adult insurance caps surprise many.",
        "Home exercises are central.",
        "GP coordination remains important.",
      ],
    },
    checklist: {
      title: "From the visual — preparation priorities",
      items: [
        "ID, insurance and referral paperwork.",
        "Timeline, meds and goals.",
        "Language confirmation.",
        "Session-count awareness.",
      ],
    },
    mistakes: {
      title: "From the visual — mistakes with fixes",
      items: [
        "Basic cover assumption → verify.",
        "DTF ≠ automatic payment.",
        "Skipped red flags → medical door.",
        "Ignored homework → schedule it.",
      ],
    },
    faq: {
      title: "From the visual — top questions",
      items: [
        "Referral vs DTF.",
        "Insurance limits.",
        "Finding a therapist.",
        "English and costs.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next by need",
      items: [
        "GP → medical door and referrals.",
        "Insurance → package and deductible.",
        "Hospitals → post-op context.",
        "Emergency → red-flag map.",
      ],
    },
    healthcareHub: {
      title: "From the visual — healthcare cluster",
      items: [
        "Physiotherapy cornerstone (this page).",
        "GP, hospitals, emergency, insurance.",
        "Pharmacies, prescriptions, mental health.",
        "Live: maternity care; planned: insurance comparison.",
      ],
    },
    exploreNext: {
      title: "From the visual — choose your next card",
      items: [
        "No GP yet → GP guide.",
        "Cover confusion → Health Insurance.",
        "Post-op → Hospitals.",
        "Scary symptoms → Emergency Healthcare.",
      ],
    },
  },
  sourceUsageTips: [
    "Use Government.nl for official health insurance and care organisation orientation.",
    "Use KNGF for professional physiotherapy-association context — not personal treatment plans.",
    "Use Rijksoverheid topic pages for Dutch-language official explanations.",
    "Use your insurer portal for session caps, referral requirements and claims.",
    "Use the GP and Emergency Healthcare guides alongside official 112 guidance for urgent routes.",
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
      label: "KNGF — Royal Dutch Society for Physical Therapy",
      href: "https://www.kngf.nl/",
      description: "Professional body for Dutch physiotherapists — practice and profession context.",
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
    "General information only — not medical advice. Physiotherapy processes, insurer rules and practice availability change, so verify your own situation with your physiotherapist, GP and insurer. In an emergency, call 112.",
} as const;

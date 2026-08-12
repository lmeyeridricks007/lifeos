export const HOSPITALS_NETHERLANDS_PATH = "/netherlands/health/hospitals-netherlands/" as const;
export const GP_NETHERLANDS_PATH = "/netherlands/health/gp-netherlands/" as const;
export const EMERGENCY_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/emergency-healthcare-netherlands/" as const;
export const MENTAL_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/mental-healthcare-netherlands/" as const;
export const DENTISTS_NETHERLANDS_PATH = "/netherlands/health/dentists-netherlands/" as const;
export const HEALTH_HUB_PATH = "/netherlands/health/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const HEALTHCARE_FOR_CHILDREN_PATH = "/netherlands/family/healthcare-for-children-netherlands/" as const;
export const HEALTHCARE_BASICS_PATH = "/netherlands/living/healthcare-basics/" as const;
export const EMERGENCIES_SAFETY_PATH = "/netherlands/living/emergencies-safety/" as const;
export const HEALTH_SYSTEM_CULTURE_PATH = "/netherlands/culture/health-system-culture-basics/" as const;
export const PHARMACIES_NETHERLANDS_PATH = "/netherlands/health/pharmacies-netherlands/" as const;
export const PHYSIOTHERAPY_NETHERLANDS_PATH = "/netherlands/health/physiotherapy-netherlands/" as const;
export const MATERNITY_CARE_NETHERLANDS_PATH = "/netherlands/health/maternity-care-netherlands/" as const;

export type HospitalLink = {
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

/** Comparison across the main kinds of Dutch hospital and treatment centre. */
export type ComparisonRow = {
  type: string;
  focus: string;
  whenReferred: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "hospitals-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const hospitalsNetherlandsPage = {
  slug: "hospitals-netherlands",
  path: HOSPITALS_NETHERLANDS_PATH,
  hubPath: HEALTH_HUB_PATH,
  parentGuidePath: HEALTHCARE_BASICS_PATH,
  publish: true,
  publishDate: "2027-02-10",
  seo: {
    title: "Hospitals in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how hospitals work in the Netherlands, including referrals, admissions, specialists, emergency departments, insurance, university medical centres and what expats should expect.",
    keywords: [
      "hospitals Netherlands",
      "hospital Netherlands",
      "Dutch hospitals",
      "hospital care Netherlands",
      "specialist hospital Netherlands",
      "university medical centre",
      "hospital referral",
      "outpatient clinic Netherlands",
      "inpatient care Netherlands",
      "expat hospital Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Health · Hospitals",
    pageTitle: "Hospitals in the Netherlands",
    subtitle:
      "Everything you need to know about hospital care in the Netherlands, including referrals, specialists, admissions, emergency departments and university medical centres.",
    primaryCta: { label: "Understand Hospital Care", href: "#how-it-works" },
    secondaryCta: { label: "Explore Healthcare Guides", href: "#related-guides" },
    chips: ["Referral", "Specialists", "Outpatient", "Admission", "SEH", "UMCs"],
    disclaimer:
      "General orientation only — not medical advice, diagnosis or treatment recommendations, and not a ranking or endorsement of any hospital. For your own situation, speak with your GP, your treating specialist or your insurer. Call 112 for life-threatening emergencies.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic Dutch hospital scene — bright modern ziekenhuis entrance hall in soft late-afternoon light with a glass facade, wayfinding signs pointing to polikliniek and SEH, a calm reception desk, patients seated with appointment letters, bicycles racked outside and low canal-side brick housing visible through the windows.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#hospital-types", label: "Hospital types" },
    { href: "#finding", label: "Choosing a hospital" },
    { href: "#outpatient", label: "Outpatient" },
    { href: "#admissions", label: "Admission" },
    { href: "#specialists", label: "Specialists" },
    { href: "#umc", label: "UMCs" },
    { href: "#emergency", label: "Emergency" },
    { href: "#children", label: "Children" },
    { href: "#maternity", label: "Maternity" },
    { href: "#private-clinics", label: "Private clinics" },
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
      "Premium orientation board titled Before Your First Hospital Visit — four building blocks for Dutch hospital care: register with a huisarts because most hospital care starts with a referral, arrange basic health insurance, keep your BSN, ID and insurer details together, and expect outpatient clinics rather than walk-in departments — with a Hospital file rail listing referral letter, BSN, insurance card, medication list and appointment letter.",
      "Four building blocks cover hospital readiness: a GP for referrals, insurance in place, documents together, and outpatient appointments as the normal route."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch hospital care — GP referral, medical specialists, outpatient clinic (polikliniek), hospital admission (opname), emergency department (SEH) and university medical centres — each with a one-line role description and a small Dutch-word label.",
      "Six building blocks explain almost every hospital pathway — the sections below add the practical detail."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium hospital pathway flow — patient to huisarts, referral letter, specialist outpatient appointment, diagnostics such as imaging and blood tests, treatment or day surgery, follow-up appointment, and discharge back to the GP for ongoing care — drawn as a labelled clinical journey with a Dutch hospital corridor backdrop.",
      "Dutch hospital care runs as a referral loop: GP in, specialist assessment and treatment, then back to the GP."
    ),
    hospitalTypes: visual(
      "hospital-types",
      "Premium comparison board of Dutch hospital types — general hospital (algemeen ziekenhuis), teaching hospital (topklinisch/STZ), university medical centre (UMC), specialist categorical hospital and independent treatment centre (ZBC) — showing focus, typical referral reason and complexity level without naming or ranking specific hospitals.",
      "Different hospital types handle different complexity — your referral usually decides which one fits."
    ),
    finding: visual(
      "finding",
      "Premium map-style board about choosing a hospital in the Netherlands — travel distance from home, contracted status with your insurer, waiting time for the specialty, treatment volume and expertise for complex care, and language support — with a route line from a home address to two nearby hospitals and one specialist centre further away.",
      "You usually have a choice of hospital — weigh distance, insurer contracts, waiting time and expertise together."
    ),
    outpatient: visual(
      "outpatient",
      "Premium outpatient clinic board (polikliniek) — appointment letter with clinic and time, check-in kiosk and reception, consultation with the specialist, diagnostics such as blood draw and imaging, and a follow-up plan — with a right-side rail listing what to bring and what to ask.",
      "Most hospital care happens in outpatient clinics — short appointments, diagnostics and a clear follow-up plan."
    ),
    admissions: visual(
      "admissions",
      "Premium hospital admission timeline (opname) — pre-admission screening and anaesthesia intake, admission day paperwork and ward arrival, treatment or surgery, recovery and ward rounds, discharge conversation with medication and aftercare instructions, and GP handover — drawn as a calm ward corridor sequence.",
      "Planned admissions follow a predictable sequence, ending with a discharge conversation and GP handover."
    ),
    specialists: visual(
      "specialists",
      "Premium specialist directory board showing Dutch hospital specialties — cardiology, orthopaedics, dermatology, neurology, paediatrics, oncology, ENT, gynaecology and general surgery — each as a labelled card with a plain-language description of what the specialty covers, plus a coordination note about referral and multidisciplinary teams.",
      "Specialty names are easier than they look — your referral names the department you will visit."
    ),
    umc: visual(
      "umc",
      "Premium university medical centre diagram — academic hospital building with three connected pillars for complex patient care, medical education and research, plus a referral arrow from a general hospital and a note about clinical trials and multidisciplinary expert teams.",
      "University medical centres combine complex care, teaching and research — often the destination for rare conditions."
    ),
    emergency: visual(
      "emergency",
      "Premium hospital emergency orientation board — 112 for life-threatening emergencies, huisarts during opening hours, huisartsenpost after hours, and SEH triage by severity with ambulance and referral arrivals — with a cross-link card to the Emergency Healthcare guide.",
      "Emergency care has its own doors — this section orients you; the emergency guide covers it in full."
    ),
    children: visual(
      "children",
      "Premium paediatric hospital board — child-friendly outpatient clinic with a play corner, parent staying with the child, paediatrician consultation, day-treatment room and a preparation checklist for children's hospital visits, with a cross-link card to the Healthcare for Children guide.",
      "Children's hospital care is built around families — preparation and paediatric teams make visits calmer."
    ),
    maternity: visual(
      "maternity",
      "Premium maternity care board — midwife-led care at the centre, hospital involvement when medically indicated, outpatient birth room, obstetrician and gynaecology clinic, neonatal support and postnatal kraamzorg at home — with a Coming soon marker for the dedicated Pregnancy and Birth guide.",
      "Maternity care is midwife-led by default, with hospital involvement when there is a medical indication."
    ),
    privateClinics: visual(
      "private-clinics",
      "Premium comparison board of independent treatment centres (ZBC) versus general hospitals — planned routine procedures and short waiting times on one side, full-spectrum and complex care with intensive care backup on the other — plus a checklist about insurer contracts, referral requirements and aftercare arrangements.",
      "Independent treatment centres handle planned routine care; hospitals cover complex and acute needs."
    ),
    costs: visual(
      "costs",
      "Premium hospital cost orientation board about basic insurance, the annual deductible (eigen risico) applying to most hospital care, contracted versus non-contracted hospitals, treatment-package billing that can span calendar years, children's coverage differences, and a reminder to verify current terms with your insurer — with no fee amounts shown.",
      "Coverage rules, deductible and insurer contracts matter more than memorising prices — always verify with your insurer."
    ),
    patientRights: visual(
      "patient-rights",
      "Premium patient rights board — informed consent conversation, interpreter and language support, privacy and medical confidentiality, access to your own records through the patient portal, second opinion request, complaints officer route and shared decision-making with three questions to ask.",
      "Dutch care expects you to ask questions — consent, records, interpreters and second opinions are normal parts of it."
    ),
    differences: visual(
      "differences",
      "Premium surprise cards for expats about Dutch hospitals — referral-first access, appointment-based clinics instead of walk-ins, direct and factual communication style, early discharge with home recovery, watchful waiting before intervention, and shared decision-making expectations — each with a short adaptation tip.",
      "Most surprises are system design, not neglect — knowing the pattern makes hospital care feel predictable."
    ),
    checklist: visual(
      "checklist",
      "Premium hospital preparation checklist board — referral letter, ID and BSN, insurance details, medication and allergy list, symptom timeline, questions written down, interpreter or companion arranged, and transport and aftercare planned — with four small role cards for patient, companion, GP and specialist.",
      "A ten-minute preparation routine makes every hospital appointment shorter, clearer and less stressful."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with Fix advice cards about Dutch hospitals — skipping the GP referral, assuming walk-in specialist access, ignoring insurer contract status, missing pre-admission instructions, not asking about waiting-time alternatives and leaving without aftercare clarity.",
      "Each common mistake has a practical Fix — most are avoided with one question before the appointment."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with readable question and answer pairs about hospital referrals, choosing a hospital, insurance coverage, second opinions, university medical centres, English-language support, waiting times and what happens during admission.",
      "Orientation answers only — confirm your own situation with clinicians, your insurer and official sources."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking Hospitals to the GP guide, emergency healthcare, health insurance, healthcare for children, mental healthcare, dentists and healthcare basics, with a Coming soon marker for the Pregnancy and Birth guide.",
      "Hospital care connects to GP referrals, insurance, mental healthcare and family pathways — read them together."
    ),
    healthcareHub: visual(
      "healthcare-hub",
      "Premium healthcare cluster ecosystem diagram with Hospitals at the centre, connected to GP care, emergency healthcare, health insurance, children's healthcare, dentists, healthcare basics and health system culture.",
      "This page is the hospitals cornerstone — explore the wider healthcare cluster next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from Hospitals to the GP guide, emergency healthcare, health insurance, healthcare for children and dentists, with official source cards for Government.nl, Rijksoverheid, the NZa and the Dutch hospital sector association.",
      "Continue with GP registration and insurance setup — and verify specifics on the official sources."
    ),
  },
  quickAnswer: {
    heading: "Quick answer: how hospital care works in the Netherlands",
    summary:
      "In the Netherlands, hospital care is normally reached through a referral (verwijzing) from your GP (huisarts), or through emergency and ambulance pathways. Once referred, you usually visit a hospital outpatient clinic (polikliniek) by appointment to see a medical specialist. Diagnostics, day treatment and planned surgery are arranged from there, and an overnight admission (opname) happens only when it is medically needed. Basic health insurance covers medically necessary hospital care, and for adults the annual deductible (eigen risico) usually applies.",
    bullets: [
      "Most hospital care starts with a GP referral — specialists are generally not walk-in services.",
      "Outpatient clinic appointments (polikliniek) are the normal setting, not hospital wards.",
      "You usually have a choice of hospital — check travel distance, waiting time and whether your insurer has a contract.",
      "Emergency care runs on separate doors: 112 for life-threatening emergencies, GP or huisartsenpost for urgent non-emergency needs.",
      "Adults should expect the annual deductible to apply to most hospital care — verify your own policy with your insurer.",
    ],
    note: "This page explains the system, not your diagnosis or treatment. For clinical questions, speak with your GP or treating specialist. If life may be at risk, call 112 rather than travelling to a hospital yourself.",
  },
  introParagraphs: [
    "Dutch hospitals (ziekenhuizen) sit in the middle of a referral-based system. Your GP handles a large share of everyday medical problems, and when specialist assessment, imaging, surgery or intensive treatment is needed, the GP writes a referral into a hospital outpatient clinic. That is why arriving in the Netherlands and looking for a specialist directly usually leads back to the huisarts first.",
    "Once you are inside the hospital system, most care is planned and appointment-based. You are given a clinic (polikliniek) and a time, you are assessed by a medical specialist or a specialist in training, diagnostics are arranged, and treatment follows if it is indicated. Overnight stays are kept as short as clinically sensible, and recovery frequently continues at home with GP or district nursing support.",
    "This guide is practical orientation for expats, students, families and newcomers: how referrals work, what the different types of hospital do, how to choose one, what happens at an outpatient appointment and during an admission, which specialties exist, how emergency departments and university medical centres fit in, what to expect around costs and insurance, and what your rights as a patient look like. It is not medical advice and does not rank or recommend individual hospitals.",
  ],
  introHighlights: [
    "A GP referral is the standard entry point to hospital specialists for non-emergency care.",
    "Outpatient clinics handle most consultations, diagnostics, follow-ups and day treatment.",
    "General hospitals, teaching hospitals, university medical centres and independent treatment centres each cover different complexity.",
    "Insurance coverage, deductible and insurer contracts shape the financial side more than any price list.",
    "Asking questions, requesting an interpreter and asking about a second opinion are normal, accepted parts of Dutch care.",
  ],
  orientationFlowSteps: [
    "Register with a huisarts near home — the referral route into hospital care starts there.",
    "Arrange Dutch basic health insurance and store your policy details where you can find them quickly.",
    "Keep a hospital file ready: BSN, ID, insurance card, medication and allergy list, referral letter.",
    "Expect appointment-based outpatient care, and use emergency doors only for urgent and emergency needs.",
  ],
  safetyFileChecklist: [
    "Referral letter or referral confirmation from your GP",
    "Valid ID or residence document",
    "BSN (citizen service number)",
    "Insurer name, policy number and a photo of your insurance card",
    "Current medication list with generic names and doses",
    "Allergy and intolerance list",
    "Short written symptom timeline: what started, when, what changed",
    "Previous test results, imaging or letters from care abroad if you have them",
    "Appointment letter with clinic name, building, floor and time",
    "Your GP practice name and contact details",
  ],
  introScenarios: [
    {
      situation: "You have a persistent problem your GP cannot resolve",
      approach: "Ask the GP whether a hospital referral is appropriate, and to which specialty. The referral letter is what opens the outpatient clinic door.",
      firstStep: "Book a GP appointment and bring a written timeline of symptoms and what has already been tried.",
    },
    {
      situation: "You arrive with an ongoing condition treated abroad",
      approach: "Continuity is usually arranged through the GP, who can refer you to the right specialty with your existing records.",
      firstStep: "Register with a huisarts, then share translated summaries, medication lists and recent test results.",
    },
    {
      situation: "You want to see a specialist directly",
      approach: "Direct self-referral is generally not how Dutch hospital access works, and insurers usually expect a valid referral for coverage.",
      firstStep: "Discuss the concern with your GP first and ask what would justify a referral.",
    },
    {
      situation: "Something is urgent tonight",
      approach: "Urgent care runs through emergency doors, not the outpatient clinic. Life-threatening situations go to 112.",
      firstStep: "Call 112 if life may be at risk; otherwise call your GP during opening hours or the huisartsenpost after hours.",
    },
  ] satisfies ScenarioRow[],
  snapshotSignals: [
    { label: "Entry point", value: "GP referral", note: "A verwijzing from your huisarts opens specialist hospital care." },
    { label: "Usual setting", value: "Outpatient clinic", note: "Polikliniek appointments cover most consultations and diagnostics." },
    { label: "Overnight stay", value: "Only if needed", note: "Admission (opname) is reserved for clinical necessity." },
    { label: "Funding", value: "Basic insurance", note: "Medically necessary hospital care, usually with the annual deductible for adults." },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "GP Referral (verwijzing)",
      body: "Your huisarts assesses the problem and writes a referral naming the specialty. Insurers normally expect a valid referral for planned hospital care, so keep the letter or digital confirmation.",
    },
    {
      title: "Medical Specialists",
      body: "Hospital specialists (medisch specialisten) work within departments such as cardiology or orthopaedics. You may also be seen by a specialist in training or a specialised nurse as part of the team.",
    },
    {
      title: "Outpatient Care (polikliniek)",
      body: "Appointment-based consultations, blood tests, imaging, minor procedures and day treatment. This is where most hospital care happens, and where follow-ups are arranged.",
    },
    {
      title: "Hospital Admission (opname)",
      body: "Planned or acute stays on a ward, with pre-admission screening for planned surgery. Stays are kept as short as clinically sensible, with recovery continuing at home.",
    },
    {
      title: "Emergency Department (SEH)",
      body: "Spoedeisende hulp handles serious emergencies and triages by severity. Many patients arrive by ambulance or with a GP or huisartsenpost referral rather than walking in.",
    },
    {
      title: "University Medical Centres",
      body: "UMCs combine complex patient care with medical education and research. Rare conditions and highly specialised treatment are often referred there from other hospitals.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Register with a GP early — without one, planned hospital access is much harder to arrange.",
    "Store your referral letter, insurance details and medication list in one phone folder.",
    "Read your appointment letter carefully: clinic name, building, floor and preparation instructions all matter.",
    "Ask at the end of every appointment who arranges the next step and when you should hear something.",
    "Do not use outpatient clinics for urgent problems — use GP, huisartsenpost or 112 depending on severity.",
    "Coverage questions belong with your insurer; clinical questions belong with your GP or specialist.",
  ],
  howItWorks: {
    heading: "How hospital care works: from GP referral to follow-up",
    intro:
      "Dutch hospital care is best understood as a loop rather than a destination. The GP refers you in, the hospital assesses and treats, and responsibility returns to the GP for ongoing care once the specialist episode ends.",
    paragraphs: [
      "The loop starts with your huisarts. If specialist assessment is needed, the GP writes a referral (verwijsbrief or a digital referral) naming the specialty and the reason. You then make an appointment at a hospital outpatient clinic, often by phone or through the hospital's online portal, and sometimes the practice arranges the first appointment for you.",
      "At the outpatient appointment, a specialist takes a history, examines you and decides which diagnostics are useful. Blood tests, imaging, function tests or scopes may be arranged the same day or scheduled separately. A follow-up appointment is then used to discuss results and agree a treatment plan with you.",
      "Treatment can be medication, therapy, a day procedure or an operation requiring admission. When the specialist episode is complete, a discharge or closing letter goes to your GP so that ongoing monitoring, prescriptions and questions return to primary care. Referrals also have practical limits — if a long time passes, your GP may need to issue a new one.",
    ],
    flowLabels: ["GP visit", "Referral", "Outpatient appointment", "Diagnostics", "Treatment", "Follow-up", "Back to GP"],
    timeline: [
      {
        phase: "1",
        title: "Patient — you notice a problem",
        detail: "Write down when symptoms started, how they changed and what worries you most. This one page shortens every later conversation.",
      },
      {
        phase: "2",
        title: "GP (huisarts) assessment",
        detail: "Your GP examines, may run initial tests and decides whether specialist input is needed or whether primary care can manage it.",
      },
      {
        phase: "3",
        title: "Referral (verwijzing)",
        detail: "The GP issues a referral naming the specialty and reason. Keep the letter or digital confirmation for the hospital and your insurer.",
      },
      {
        phase: "4",
        title: "Specialist outpatient appointment",
        detail: "You attend the polikliniek by appointment. Expect history taking, examination and a plan for what needs to be investigated.",
      },
      {
        phase: "5",
        title: "Diagnostics",
        detail: "Blood tests, imaging, function tests or scopes are arranged. Some are same-day; others are separate appointments with preparation instructions.",
      },
      {
        phase: "6",
        title: "Treatment decision and treatment",
        detail: "Results are discussed with you, options are explained, and a plan is agreed — from medication and monitoring to day treatment or surgery.",
      },
      {
        phase: "7",
        title: "Follow-up",
        detail: "Follow-up appointments check progress. Ask what result would change the plan and who to contact between appointments.",
      },
      {
        phase: "8",
        title: "Back to the GP",
        detail: "When the specialist episode ends, the hospital sends a letter to your GP, who resumes ongoing care, repeat prescriptions and monitoring.",
      },
    ] satisfies TimelineStep[],
    decisionTips: [
      "Planned specialist care → GP referral first, then an outpatient appointment.",
      "Urgent but not life-threatening → GP during opening hours, huisartsenpost outside them.",
      "Life-threatening → 112, not a hospital reception desk.",
      "Results or admin questions → the clinic's secretariat or patient portal, not the emergency department.",
      "Ongoing monitoring after treatment → back to your GP unless the specialist says otherwise.",
    ],
    howToSteps: [
      {
        name: "Confirm your referral and appointment details",
        text: "Check that your GP referral names the right specialty and that your appointment letter lists the hospital, clinic, building, floor and time. Confirm whether you must arrive earlier for registration or blood tests.",
      },
      {
        name: "Follow any preparation instructions exactly",
        text: "Read the letter or portal message for fasting instructions, medication pauses, hydration requirements or forms to complete in advance. If anything is unclear, call the clinic secretariat before the appointment rather than guessing.",
      },
      {
        name: "Collect your documents",
        text: "Bring ID, your BSN, insurance details, the referral, a current medication and allergy list, and any relevant results or letters from previous care, including care abroad.",
      },
      {
        name: "Write a symptom timeline and your top questions",
        text: "Note when symptoms started, what makes them better or worse, what has already been tried, and the three questions you most want answered. Appointments are focused, so a written list keeps nothing behind.",
      },
      {
        name: "Arrange language support and a companion if useful",
        text: "Ask the clinic in advance about English-language consultation or interpreter options, and bring someone who can listen and take notes if the topic is complex or stressful.",
      },
      {
        name: "Plan travel, parking and timing",
        text: "Allow time for parking or public transport, finding the right building and registration. Arriving unhurried matters more than arriving early at the wrong entrance.",
      },
      {
        name: "During the appointment, confirm the plan",
        text: "Ask what the working diagnosis is, what the next investigation or treatment step is, what the alternatives are, and what would change the plan. Repeat the plan back in your own words to check you understood it.",
      },
      {
        name: "Before leaving, agree the follow-up",
        text: "Confirm who arranges the next appointment, how and when you will receive results, who to contact with questions, and whether your GP will be informed.",
      },
    ] satisfies HowToStep[],
  },
  hospitalTypes: {
    heading: "Types of hospitals and treatment centres",
    intro:
      "Not every hospital does everything. Dutch hospital care is layered by complexity, so a routine procedure and a rare condition may be handled in different places — sometimes deliberately far from home.",
    paragraphs: [
      "General hospitals (algemene ziekenhuizen) cover the majority of common specialist care: outpatient clinics, diagnostics, day treatment, planned surgery, maternity and an emergency department in many locations. For most people, most of the time, this is the hospital they will use.",
      "Teaching hospitals — often described as top clinical or STZ hospitals — sit a step further, combining general care with more complex treatment and training of specialists. University medical centres (UMCs) are attached to medical faculties and concentrate the most complex care, research and education.",
      "Alongside these are specialist categorical hospitals focused on one field, such as eye or cancer care, and independent treatment centres (zelfstandige behandelcentra, ZBCs) that handle planned, routine, lower-risk procedures. This page describes the categories and never ranks or recommends specific hospitals.",
    ],
    rows: [
      {
        type: "General hospital (algemeen ziekenhuis)",
        focus: "Common specialist care: outpatient clinics, diagnostics, day treatment, planned surgery, often maternity and an emergency department.",
        whenReferred: "Standard GP referral for the majority of specialist problems, and the default nearby option.",
        note: "Usually the closest and most practical choice for routine specialist care and follow-up.",
      },
      {
        type: "Teaching hospital (topklinisch / STZ)",
        focus: "General care plus more complex treatment, specialist training and applied research within several fields.",
        whenReferred: "Referred for conditions needing more specialised teams, equipment or combined expertise.",
        note: "You may be seen by specialists in training working under supervision as part of the team.",
      },
      {
        type: "University medical centre (UMC)",
        focus: "Highly complex and rare conditions, transplant and specialised programmes, medical education and research.",
        whenReferred: "Referred by a GP or, frequently, onward from another hospital when complexity increases.",
        note: "Often involves multidisciplinary teams; clinical trial participation may be discussed with you.",
      },
      {
        type: "Specialist categorical hospital",
        focus: "Concentrated expertise in one field, for example eye care, cancer care or rehabilitation.",
        whenReferred: "Referred when a single-field concentration of expertise fits the diagnosis.",
        note: "Care is deep rather than broad — other health needs stay with your GP or another hospital.",
      },
      {
        type: "Independent treatment centre (ZBC)",
        focus: "Planned, routine, lower-risk procedures and consultations with a narrow scope and short pathways.",
        whenReferred: "Referred for eligible planned care, sometimes with shorter waiting times than a hospital.",
        note: "Check insurer contract status, referral requirements and how complications or aftercare are arranged.",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Complexity decides the level",
        body: "Routine cataract surgery and a rare metabolic disorder are handled at very different levels of the system. Referral decisions follow clinical complexity, not prestige.",
      },
      {
        title: "Onward referral is normal",
        body: "Starting at a general hospital and being referred onward to a teaching hospital or UMC is a standard escalation, not a sign that something went wrong.",
      },
      {
        title: "Distance can be intentional",
        body: "Some specialised treatments are concentrated in a limited number of centres to maintain expertise, which can mean travelling further for part of your care.",
      },
      {
        title: "Shared care happens",
        body: "Complex treatment at one hospital with check-ups closer to home is a common arrangement — ask explicitly who does what and who coordinates.",
      },
    ] satisfies TipCard[],
    checklist: [
      "Know which hospital your referral names and why that level was chosen",
      "Ask whether a nearer hospital could also provide the same care",
      "Check whether follow-up can happen closer to home",
      "Confirm insurer contract status for the hospital or treatment centre",
      "Ask who coordinates if two hospitals are involved in your care",
    ],
    tips: [
      "Ask your GP what type of hospital the referral points to and why.",
      "Escalation to a more specialised hospital is normal in complex cases.",
      "For planned routine procedures, ask whether an independent treatment centre is an option.",
      "This guide describes categories only — it never ranks hospitals or recommends providers.",
    ],
  },
  finding: {
    heading: "Choosing and finding a hospital",
    paragraphs: [
      "For planned care you generally have a choice of hospital, and your GP will usually suggest options rather than dictate one. The practical decision balances four things: how far you can realistically travel, whether your insurer has a contract with that hospital, how long the waiting time is for the specialty, and whether the condition needs concentrated expertise.",
      "Waiting times differ by hospital and by specialty, and hospitals publish indicative waiting information. If a wait feels too long, ask the clinic or your insurer about alternatives — insurers operate care-mediation services (zorgbemiddeling) that help find an earlier slot at a contracted provider.",
      "Language support also varies. In larger cities and academic centres, English is often workable, but it is not guaranteed everywhere. Ask when booking whether the consultation can be held in English or whether an interpreter can be arranged, especially for consent conversations and complex treatment decisions.",
    ],
    points: [
      "Travel distance matters more than it seems — follow-ups, diagnostics and rehabilitation add up to many journeys.",
      "Contracted hospitals usually give the most predictable reimbursement; non-contracted care can mean higher personal costs.",
      "Waiting times vary by specialty and location — always worth asking about alternatives.",
      "For complex or rare conditions, concentrated expertise can outweigh convenience.",
      "Ask about English-language consultations or interpreter support before the first appointment.",
      "Accessibility, parking, public transport and visiting arrangements are legitimate factors in your choice.",
    ],
    contrastRows: [
      {
        route: "Nearby general hospital",
        when: "Routine specialist care, diagnostics and follow-up",
        how: "GP referral, then book with the outpatient clinic",
        note: "Usually the most practical option when travel frequency is high.",
      },
      {
        route: "Teaching hospital or UMC",
        when: "Complex, rare or multidisciplinary conditions",
        how: "GP referral or onward referral from another hospital",
        note: "Concentrated expertise can justify a longer journey.",
      },
      {
        route: "Independent treatment centre (ZBC)",
        when: "Eligible planned routine procedures",
        how: "Referral to a contracted centre offering that treatment",
        note: "Confirm contract status, referral rules and aftercare arrangements first.",
      },
      {
        route: "Insurer care mediation (zorgbemiddeling)",
        when: "Waiting time feels unacceptably long",
        how: "Contact your insurer's care-mediation service",
        note: "They can look for earlier availability at contracted providers.",
      },
    ] satisfies ContactRouteRow[],
    checklist: [
      "Referral specialty and reason confirmed with your GP",
      "Hospital options discussed, including a nearer alternative",
      "Insurer contract status checked for the chosen hospital",
      "Indicative waiting time asked about for that specialty",
      "Language support or interpreter needs raised when booking",
      "Travel, parking and accessibility practicalities planned",
      "Portal or phone route noted for rescheduling and questions",
    ],
    scenarios: [
      {
        situation: "Two hospitals are equally close",
        approach: "Compare insurer contract status, waiting time for that specialty and practical access before choosing.",
        firstStep: "Ask your GP or the clinic secretariats for indicative waiting times, then check your insurer's provider list.",
      },
      {
        situation: "The first appointment is months away",
        approach: "Ask the clinic whether cancellation slots exist and contact your insurer's care-mediation service about alternatives.",
        firstStep: "Call the outpatient secretariat and ask to be added to any earlier-availability list.",
      },
      {
        situation: "You are told to attend a hospital far from home",
        approach: "Ask whether the specialised part must happen there and whether follow-up can be shared with a hospital closer to home.",
        firstStep: "Raise the travel burden explicitly with the referring GP or specialist and ask about shared-care options.",
      },
      {
        situation: "You are worried about the language barrier",
        approach: "Ask when booking about English-language consultations or interpreter support, especially for consent discussions.",
        firstStep: "Call the clinic secretariat and note your language preference in the appointment record.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Write down your must-haves — distance, timing, language — before you compare hospitals.",
      "Your insurer's provider list is the fastest way to check contract status.",
      "Ask about cancellation lists; slots do open up.",
      "Keep the clinic secretariat number saved — it handles most admin, not the emergency department.",
    ],
  },
  outpatient: {
    heading: "Outpatient clinics (polikliniek)",
    paragraphs: [
      "The polikliniek is where most hospital care happens. Each specialty has its own clinic with its own secretariat, and appointments are scheduled and often quite short. That is not a lack of interest: the model assumes focused consultations supported by diagnostics and follow-up appointments rather than one long visit.",
      "Expect a registration step on arrival — a check-in kiosk, a reception desk or a portal check-in — and expect that blood tests or imaging may be booked before or after the consultation. Preparation instructions in your appointment letter are important: fasting, medication pauses or hydration requirements exist for a reason and can lead to a rescheduled test if missed.",
      "You may be seen by a medical specialist, a specialist in training, a physician assistant or a specialised nurse working within the team. Continuity is normal for chronic conditions, but a different team member can appear at follow-ups. If continuity matters to you, say so.",
    ],
    cards: [
      {
        title: "Appointment letter",
        body: "Names the clinic, building, floor, time and preparation instructions. Read it twice — hospital sites are large and clinics are not always where you expect.",
      },
      {
        title: "Registration and check-in",
        body: "Kiosk or reception check-in with ID and insurance details. Address changes and insurer changes should be updated here or in the portal.",
      },
      {
        title: "Consultation",
        body: "History, examination and a plan. Focused and factual — a written question list ensures nothing important is left out.",
      },
      {
        title: "Diagnostics",
        body: "Blood tests, imaging, function tests or scopes, sometimes same-day. Confirm where to go, what to prepare and how results will be shared.",
      },
      {
        title: "Follow-up and results",
        body: "Results are usually discussed at a follow-up appointment, by phone or through the patient portal. Ask which route applies and when.",
      },
      {
        title: "Clinic secretariat",
        body: "Handles rescheduling, questions between appointments and paperwork. This is the number to save, not the emergency department.",
      },
    ] satisfies TipCard[],
    points: [
      "Appointments are scheduled and time-boxed — prepare to be concise and specific.",
      "Preparation instructions can determine whether a test can go ahead at all.",
      "You may see different team members across appointments, especially in large clinics.",
      "Patient portals often show letters, results and appointments; ask how to activate access.",
      "Ask explicitly how and when you will receive results, and who to contact if you hear nothing.",
      "Bring an up-to-date medication list — including anything you take without a prescription.",
    ],
    checklist: [
      "Appointment letter read, including preparation instructions",
      "ID, BSN and insurance details in your bag",
      "Referral letter or digital referral confirmation available",
      "Medication and allergy list printed or on your phone",
      "Three questions written down in priority order",
      "Symptom timeline noted with dates",
      "Interpreter or companion arranged if needed",
      "Travel and parking planned with time to find the clinic",
    ],
    scenarios: [
      {
        situation: "You forgot part of your medication list",
        approach: "Say so at the start — accurate medication information affects tests and prescriptions more than most patients expect.",
        firstStep: "Ask whether your pharmacy overview can be checked, or call your pharmacy for a current list.",
      },
      {
        situation: "The appointment felt too short",
        approach: "Focused consultations are normal, but you can ask for a follow-up or a longer appointment for complex discussions.",
        firstStep: "Say which question is still unanswered and ask how to get an answer — portal message, phone consult or new appointment.",
      },
      {
        situation: "You cannot attend the scheduled time",
        approach: "Reschedule through the clinic secretariat or the portal as early as you can, since slots are limited.",
        firstStep: "Call or message the secretariat with your appointment reference and preferred alternatives.",
      },
      {
        situation: "You have not heard about results",
        approach: "Do not assume silence means good news — follow up through the agreed route.",
        firstStep: "Contact the clinic secretariat and ask when results were expected and who reviews them.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Ask at the end: what happens next, who arranges it, and by when should I hear something.",
      "Take notes or bring someone who can — recall after stressful news is poor for everyone.",
      "Activate the hospital patient portal early; it reduces phone calls significantly.",
      "If a test needs preparation you cannot manage, say so in advance rather than arriving unprepared.",
    ],
  },
  admissions: {
    heading: "Hospital admission (opname)",
    paragraphs: [
      "An admission means staying in hospital, either planned (for surgery or treatment) or acute (through the emergency department). Planned admissions usually begin with a pre-admission process: a screening appointment, an anaesthesia intake if you are having an operation, and clear instructions about fasting, medication and what to bring.",
      "On the ward you will meet a mix of nurses, specialists in training and the responsible specialist, with ward rounds at set times. Dutch hospitals generally aim for the shortest clinically appropriate stay, so plans for discharge are often discussed early. This can feel abrupt if you are used to longer stays, but home recovery with GP or district nursing support is the standard model.",
      "The discharge conversation matters. Ask what medication changes were made, which symptoms should prompt you to call, who to contact and when, what activity limits apply and what follow-up is arranged. Ask that your GP is informed, and keep any discharge letter or medication overview safe.",
    ],
    timeline: [
      {
        phase: "1",
        title: "Indication and planning",
        detail: "The specialist explains why admission is needed, what the alternatives are, and what the expected length of stay looks like.",
      },
      {
        phase: "2",
        title: "Pre-admission screening",
        detail: "Health checks, blood tests and an anaesthesia intake for surgery. Bring your full medication list — including blood thinners and supplements.",
      },
      {
        phase: "3",
        title: "Preparation instructions",
        detail: "Fasting times, medication to pause or continue, hygiene instructions and arrival time. Follow these exactly to avoid cancellation.",
      },
      {
        phase: "4",
        title: "Admission day",
        detail: "Registration, ward arrival, consent confirmation and identification checks. Bring ID, insurance details and a small overnight bag.",
      },
      {
        phase: "5",
        title: "Treatment or surgery",
        detail: "The procedure or treatment takes place, with monitoring afterwards in recovery or on the ward.",
      },
      {
        phase: "6",
        title: "Recovery and ward rounds",
        detail: "Daily rounds review progress. Ask what milestones need to be reached before discharge is considered.",
      },
      {
        phase: "7",
        title: "Discharge conversation",
        detail: "Medication changes, warning signs, activity limits, wound or aftercare instructions, and who to contact — ideally written down.",
      },
      {
        phase: "8",
        title: "Aftercare and GP handover",
        detail: "Follow-up appointments, home care or physiotherapy if needed, and a letter to your GP so primary care can continue monitoring.",
      },
    ] satisfies TimelineStep[],
    points: [
      "Planned admissions almost always include a pre-admission screening step.",
      "Preparation instructions are non-negotiable — missing them can postpone surgery.",
      "Ward teams include nurses, specialists in training and the responsible specialist.",
      "Short stays are intentional; recovery at home is the norm rather than a shortcut.",
      "Visiting hours and rules vary by ward — check before family travels.",
      "The discharge conversation is your best opportunity to clarify aftercare.",
    ],
    checklist: [
      "Pre-admission appointment attended and questions asked",
      "Fasting and medication instructions understood and written down",
      "ID, BSN and insurance details packed",
      "Medication list and allergy list packed",
      "Comfortable clothing, toiletries, phone charger and glasses or hearing aids",
      "Emergency contact informed of the admission and ward",
      "Transport home arranged, including someone to accompany you after anaesthesia",
      "Home support planned for the first days after discharge",
      "Work, school or childcare arrangements notified",
      "Discharge questions written down before the conversation happens",
    ],
    scenarios: [
      {
        situation: "You feel discharged too early",
        approach: "Say so directly and ask which criteria were used. Shared decision-making means your concerns belong in the conversation.",
        firstStep: "Ask what specific symptoms would mean you need to come back and who to call at any hour.",
      },
      {
        situation: "You are unsure whether to pause a medication",
        approach: "Never guess — pre-admission teams give explicit instructions for each medicine.",
        firstStep: "Call the pre-admission or anaesthesia department and read out the full medication name and dose.",
      },
      {
        situation: "Family wants to visit but lives abroad",
        approach: "Check ward-specific visiting rules and expected length of stay before flights are booked.",
        firstStep: "Ask the ward about visiting hours, numbers of visitors and any restrictions in place.",
      },
      {
        situation: "You will be alone at home after a procedure",
        approach: "Raise this before admission — aftercare planning can include home care or a longer observation period.",
        firstStep: "Tell the pre-admission team you live alone and ask what support can be arranged.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Write your discharge questions down while you are still calm and admitted.",
      "Ask for a written medication overview at discharge and compare it with what you took before.",
      "Confirm that your GP and pharmacy will receive the discharge information.",
      "Arrange the first days at home before you go in — food, transport, help with stairs.",
    ],
  },
  specialists: {
    heading: "Medical specialists and departments",
    paragraphs: [
      "Hospital care is organised by specialty, and your referral names the department rather than an individual in most cases. Knowing what each specialty covers makes referral letters and appointment invitations far less confusing, especially when the Dutch name differs from what you are used to.",
      "Specialists work in teams. For complex conditions, several specialties may discuss your case together in a multidisciplinary meeting before a plan is proposed to you — that is a strength of the system, though it can mean waiting for the next meeting date. A case manager or specialised nurse is often your practical point of contact.",
      "Coordination is shared between the hospital and your GP. If more than one specialty is involved, ask who holds the overall plan and how information travels between them. When the hospital episode ends, coordination returns to the GP.",
    ],
    roleCards: [
      { role: "Cardiology", focus: "Heart and circulation — chest pain assessment, rhythm problems, heart failure, blood pressure complications and cardiac imaging." },
      { role: "Orthopaedics", focus: "Bones, joints, ligaments and musculoskeletal injuries — fractures, joint replacement, sports injuries and often combined with physiotherapy." },
      { role: "Dermatology", focus: "Skin, hair and nails — persistent rashes, eczema and psoriasis, skin lesion assessment and skin cancer pathways." },
      { role: "Neurology", focus: "Brain, spinal cord and nerves — headaches and migraine, seizures, numbness or weakness, multiple sclerosis and stroke follow-up." },
      { role: "Paediatrics", focus: "Children's medicine from newborns to adolescents, with child-friendly clinics and parents involved in decisions." },
      { role: "Oncology", focus: "Cancer diagnosis and treatment, usually multidisciplinary, with case managers and specialised nurses supporting the pathway." },
      { role: "ENT (KNO)", focus: "Ear, nose and throat — hearing problems, sinus and nasal conditions, tonsils, voice and swallowing issues." },
      { role: "Gynaecology", focus: "Female reproductive health, menstrual and fertility concerns, and obstetric care when pregnancy needs medical involvement." },
      { role: "General surgery", focus: "Abdominal and soft-tissue surgery — gallbladder, hernia, appendix, and coordination with acute surgical care." },
    ] satisfies RoleCard[],
    points: [
      "Referrals usually name a specialty and reason, not a named specialist — though you can express a preference.",
      "You may be seen by a specialist in training, physician assistant or specialised nurse within the team.",
      "Complex cases are often discussed in multidisciplinary meetings before a plan is proposed.",
      "A case manager or specialised nurse is frequently your best contact for practical questions.",
      "When several specialties are involved, ask explicitly who holds the overall plan.",
      "Your GP remains the coordinator of your overall health record and ongoing care.",
    ],
    cards: [
      {
        title: "Team-based care",
        body: "Seeing a different team member at a follow-up is normal. Records are shared within the department, so context is not lost — but you can ask for continuity if it matters.",
      },
      {
        title: "Multidisciplinary discussion",
        body: "For cancer and other complex conditions, several specialties agree a proposal together. Ask when the meeting happens and when you will hear the outcome.",
      },
      {
        title: "Your point of contact",
        body: "Ask for the name and number of a case manager, specialised nurse or clinic secretariat for questions between appointments.",
      },
      {
        title: "Referral between specialties",
        body: "An internal referral to another department inside the hospital is often possible without going back to the GP — ask whether that applies.",
      },
    ] satisfies TipCard[],
    scenarios: [
      {
        situation: "You are not sure which specialty you were referred to",
        approach: "The referral letter and appointment invitation both name the department — check before travelling.",
        firstStep: "Read the appointment letter, or call the clinic secretariat with your appointment reference.",
      },
      {
        situation: "Two specialties give different impressions",
        approach: "Ask who coordinates the overall plan and request that they align — this is a reasonable request, not a complaint.",
        firstStep: "Raise it with the specialist you see next and ask for the coordinating clinician's name.",
      },
      {
        situation: "You want continuity with one specialist",
        approach: "Say so when booking follow-ups; continuity is often possible for chronic conditions, though not guaranteed.",
        firstStep: "Ask the secretariat to schedule with the same specialist where clinically possible.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Ask what the specialty covers if the referral is unfamiliar — it is a fair question.",
      "Note the name and role of who you saw; it helps at the next appointment.",
      "Request the contact details of a case manager for complex pathways.",
      "Keep your own timeline of appointments, tests and outcomes.",
    ],
  },
  umc: {
    heading: "University medical centres (UMCs)",
    paragraphs: [
      "University medical centres are hospitals attached to a medical faculty, combining patient care with education and research. They exist in a limited number of Dutch cities and concentrate expertise for complex, rare and highly specialised conditions alongside the everyday care they also deliver.",
      "You can be referred to a UMC by your GP, but very often the route is an onward referral from another hospital when a condition proves more complex than a general or teaching hospital handles routinely. Concentrating rare procedures in fewer centres is a deliberate way to maintain expertise and quality.",
      "Being treated in an academic setting brings some specific features: multidisciplinary teams, involvement of students and specialists in training, and the possibility that participation in research or a clinical trial is discussed with you. Participation is always your choice, and declining does not affect your right to standard care.",
    ],
    points: [
      "UMCs combine complex patient care, medical education and research in one organisation.",
      "Referral often comes onward from another hospital rather than directly from a GP.",
      "Rare and highly specialised treatments are concentrated to preserve expertise.",
      "Students and specialists in training are part of care teams under supervision — you may decline student involvement.",
      "Research or clinical trial participation may be offered; it is voluntary and separate from standard care.",
      "Travel and shared-care arrangements are worth discussing early if the UMC is far from home.",
    ],
    cards: [
      {
        title: "Complex patient care",
        body: "Multidisciplinary teams and specialised facilities for rare conditions, complex surgery and highly specialised programmes.",
      },
      {
        title: "Education and training",
        body: "Medical students and specialists in training work under supervision. You may be asked whether a student can be present.",
      },
      {
        title: "Research and trials",
        body: "New treatments are studied in academic settings. Participation is voluntary, with an information and consent process, and declining is always acceptable.",
      },
      {
        title: "Shared care with local hospitals",
        body: "Highly specialised treatment at the UMC combined with monitoring nearer home is common — ask who coordinates what.",
      },
    ] satisfies TipCard[],
    scenarios: [
      {
        situation: "You are referred onward to a UMC",
        approach: "Treat it as an escalation for expertise, and ask what the UMC will do that the current hospital cannot.",
        firstStep: "Ask the referring specialist what question the UMC is expected to answer, and what happens afterwards.",
      },
      {
        situation: "You are invited to join a study",
        approach: "Participation is voluntary. Ask for written information, time to consider it and the option to decline without consequences for standard care.",
        firstStep: "Ask what the study involves practically, what the alternatives are, and who to contact with questions.",
      },
      {
        situation: "The UMC is a long journey away",
        approach: "Ask whether diagnostics or follow-ups can happen at a hospital closer to home under shared care.",
        firstStep: "Raise the travel burden explicitly and ask for a written division of responsibilities.",
      },
    ] satisfies ScenarioRow[],
    whenInDoubt:
      "If you do not understand why you are being referred to an academic centre, ask directly. A clear answer about what expertise is being added — and what stays closer to home — is a reasonable expectation, not a challenge to the clinician.",
    tips: [
      "Ask what specific expertise the UMC adds to your case.",
      "You may decline student presence without affecting your care.",
      "Trial participation is voluntary and reversible — ask about withdrawal before agreeing.",
      "Plan travel realistically, including someone to accompany you for long appointment days.",
    ],
  },
  emergency: {
    heading: "Hospital emergency departments (SEH)",
    paragraphs: [
      "Hospital emergency departments (spoedeisende hulp, SEH) sit inside hospitals but work on a completely different access model from outpatient clinics. They handle serious emergencies, triage by severity rather than arrival order, and receive many patients by ambulance or on referral from a GP or huisartsenpost.",
      "For life-threatening situations, call 112 — do not drive to a hospital reception and ask for help. For urgent problems that are not life-threatening, your GP during opening hours or the regional huisartsenpost outside them is usually both the correct and the faster route, and they refer you into the SEH when hospital assessment is needed.",
      "This section is orientation only. The dedicated Emergency Healthcare guide covers 112, ambulances, out-of-hours GP care, emergency pharmacies and dental emergencies in full detail.",
    ],
    points: [
      "Call 112 immediately for life-threatening emergencies — operators can work in English.",
      "SEH triage is by clinical severity, so waiting times vary widely.",
      "Ambulance arrival and GP or huisartsenpost referral are the most common access routes.",
      "Walking in with a primary-care problem often leads to redirection to a GP-level service.",
      "Bring ID, insurance details and a medication list if you can — but never delay emergency help to collect them.",
      "Not every SEH visit results in admission; many end in treatment, advice and GP follow-up.",
    ],
    urgencyRows: [
      { situation: "Unresponsiveness, severe breathing difficulty or suspected stroke", level: "emergency", action: "Call 112 immediately — do not travel to a hospital yourself." },
      { situation: "Heavy bleeding, severe allergic reaction or major trauma", level: "emergency", action: "Call 112 immediately." },
      { situation: "Chest pain with worrying features", level: "emergency", action: "Call 112 — do not wait for an appointment." },
      { situation: "Sudden severe deterioration while under hospital treatment", level: "emergency", action: "Call 112 if life may be at risk; otherwise use the emergency contact number your treatment team gave you." },
      { situation: "Urgent problem outside GP opening hours", level: "urgent", action: "Call the regional huisartsenpost for triage and referral if needed." },
      { situation: "Post-operative wound concern or fever after discharge", level: "urgent", action: "Use the contact number from your discharge instructions; call the huisartsenpost or 112 if it escalates." },
      { situation: "Results question or appointment change", level: "routine", action: "Contact the outpatient clinic secretariat or use the patient portal." },
      { situation: "Ongoing symptom without new warning signs", level: "routine", action: "Book a GP appointment and discuss whether a referral or follow-up is needed." },
    ] satisfies UrgencyRow[],
    crossLink: {
      label: "Emergency Healthcare in the Netherlands",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      description:
        "The full urgent-care picture: when to call 112, how the huisartsenpost works, what happens at the SEH, ambulances, emergency pharmacies and dental emergencies.",
      status: "live" as const,
    },
    tips: [
      "Save 112 and your regional huisartsenpost number before you need them.",
      "Keep the emergency contact number from any discharge letter in your phone.",
      "Tell triage the single most worrying feature first.",
      "Ask for English support early if communication is difficult.",
    ],
  },
  children: {
    heading: "Children in hospital",
    paragraphs: [
      "Children are treated by paediatric teams, in clinics and wards designed with families in mind. Access follows the same referral logic: the family GP refers to paediatrics or another specialty, and appointments happen in outpatient clinics unless the situation is urgent.",
      "Parents are expected to be involved. You are normally able to stay with your child, including during many procedures and often overnight, and decisions are explained to both the parents and — age-appropriately — the child. Older children and adolescents gradually gain more say in their own care.",
      "Preparation is the single biggest lever for a calmer visit. Explaining honestly what will happen, bringing comfort items and knowing the practical routine reduces fear far more than reassurance alone. For vaccinations, growth monitoring and the wider children's healthcare system, use the Healthcare for Children guide.",
    ],
    cards: [
      {
        title: "Paediatric clinics",
        body: "Child-friendly outpatient clinics with paediatricians, specialised nurses and play facilities, and appointment lengths adapted to children.",
      },
      {
        title: "Parents stay involved",
        body: "You can normally accompany your child, including during many procedures and often overnight. Ask the ward what the arrangements are.",
      },
      {
        title: "Age-appropriate explanation",
        body: "Clinicians explain to children in a way they can understand, and involve adolescents progressively in decisions about their own care.",
      },
      {
        title: "Day treatment where possible",
        body: "Many paediatric procedures are arranged as day treatment so the child sleeps at home, with clear aftercare instructions for parents.",
      },
      {
        title: "School and daily life",
        body: "Ask about school support, activity limits and how long recovery normally takes so you can plan realistically.",
      },
      {
        title: "Not the emergency route",
        body: "For urgent problems use the GP, huisartsenpost or 112 depending on severity — outpatient clinics are not the urgent-care door.",
      },
    ] satisfies TipCard[],
    points: [
      "Referral to paediatrics normally comes from the family GP.",
      "Vaccination records, growth information and previous test results are useful to bring.",
      "Parents are partners in decision-making, and adolescents gain increasing say themselves.",
      "Interpreter support can be requested for consent conversations and complex treatment discussions.",
      "Ask what warning signs after a procedure should prompt an immediate call, and who to call.",
    ],
    prepareChecklist: [
      "Child's ID, BSN and insurance details",
      "Referral letter and appointment invitation",
      "Vaccination record and any previous specialist letters",
      "Current medication and allergy list, with doses by weight if relevant",
      "Symptom timeline including fever pattern, appetite and sleep",
      "Comfort item, snack, drink and something to pass the time",
      "Honest, simple explanation given to the child beforehand",
      "Time booked off work and childcare arranged for siblings",
      "Questions written down, including recovery and school implications",
    ],
    scenarios: [
      {
        situation: "First paediatric appointment after moving countries",
        approach: "Bring translated records so the team does not have to repeat investigations unnecessarily.",
        firstStep: "Ask your GP to include previous diagnoses and treatments in the referral, and bring the original documents.",
      },
      {
        situation: "Your child is anxious about a procedure",
        approach: "Ask the clinic what preparation support exists — explanation materials, play support or a pre-visit are often available.",
        firstStep: "Call the clinic and say your child is anxious; ask what they can arrange in advance.",
      },
      {
        situation: "Your child needs day surgery",
        approach: "Confirm fasting instructions, arrival time, who can stay and what recovery at home involves.",
        firstStep: "Read the pre-admission instructions carefully and call with any uncertainty rather than guessing.",
      },
      {
        situation: "Your teenager wants to be seen alone",
        approach: "Growing autonomy is part of Dutch paediatric care — discuss with the clinician what fits your child's age and situation.",
        firstStep: "Ask the clinic how consultations are usually arranged for that age group.",
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
      "Prepare children honestly and simply — surprises are harder than facts.",
      "Bring one comfort item and one distraction; waiting is part of hospital visits.",
      "Write down aftercare instructions while you are still in the room.",
      "Ask about school notes, sports restrictions and expected recovery time.",
    ],
  },
  maternity: {
    heading: "Maternity and birth in hospital",
    paragraphs: [
      "Dutch maternity care is midwife-led by default. A community midwife (verloskundige) provides routine antenatal care, and hospital involvement follows a medical indication rather than being automatic. If risks or complications appear, care shifts to an obstetrician-gynaecologist and the hospital takes a larger role.",
      "Birth location is a real choice within that framework: at home, in a birth centre, or in hospital as an outpatient birth (poliklinische bevalling) or a medically indicated hospital birth. Which options are open to you depends on your clinical situation, and midwives explain the reasoning as the pregnancy progresses.",
      "After birth, Dutch postnatal care includes kraamzorg — maternity home care that supports recovery, feeding and newborn checks in your own home. Hospitals provide neonatal care when a baby needs medical support. A dedicated Pregnancy & Birth guide covering the full pathway is coming soon.",
    ],
    points: [
      "Routine pregnancy care is led by a community midwife, not automatically by a hospital.",
      "Hospital involvement follows a medical indication, and can change during pregnancy in either direction.",
      "Birth options include home, birth centre and hospital, depending on your clinical situation.",
      "An outpatient birth in hospital is possible without a medical indication in many situations — discuss it with your midwife.",
      "Kraamzorg provides structured maternity support at home after birth.",
      "Register with a midwife early — capacity in busy regions can be limited.",
    ],
    cards: [
      {
        title: "Midwife-led care",
        body: "The verloskundige provides routine antenatal checks, monitors progress and refers to hospital care when a medical indication arises.",
      },
      {
        title: "Obstetrics and gynaecology",
        body: "Hospital obstetric teams take over antenatal care and birth when there is a medical indication, working alongside midwives.",
      },
      {
        title: "Birth location choice",
        body: "Home, birth centre or hospital, including outpatient birth. Options depend on your clinical situation and are discussed as the pregnancy progresses.",
      },
      {
        title: "Neonatal care",
        body: "Hospitals provide newborn medical support when needed, with more specialised neonatal units in larger and academic centres.",
      },
      {
        title: "Kraamzorg at home",
        body: "Maternity home care supports recovery, feeding and newborn checks in the days after birth — arrange it early in pregnancy.",
      },
      {
        title: "Insurance and registration",
        body: "Check maternity-related coverage with your insurer, and arrange midwife and kraamzorg registration well before the due date.",
      },
    ] satisfies TipCard[],
    comingSoonNote:
      "For full antenatal care, birth choices, kraamzorg, leave and registration depth, open the Maternity care cornerstone. This section is hospital-focused orientation only.",
    crossLink: {
      label: "Maternity care in the Netherlands",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      description:
        "Verloskundige first line, obstetric pathways, registration, insurance orientation and kraamzorg awareness.",
      status: "live" as const,
    },
    scenarios: [
      {
        situation: "You want to give birth in hospital without a medical indication",
        approach: "Discuss an outpatient birth (poliklinische bevalling) with your midwife, including how it is arranged and what your insurer covers.",
        firstStep: "Raise your preference early in pregnancy so arrangements and coverage can be checked in time.",
      },
      {
        situation: "Your midwife refers you to the hospital",
        approach: "A medical indication has arisen; ask what it means, what changes practically and whether it may change back.",
        firstStep: "Ask for the reason in plain language and what it means for birth-location options.",
      },
      {
        situation: "You are new to the Netherlands and pregnant",
        approach: "Register with a community midwife promptly and with your GP, and share records from care abroad.",
        firstStep: "Contact a local midwifery practice as early as possible — capacity can be tight in busy areas.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Register with a midwife as early as possible in pregnancy.",
      "Ask about birth-location options and what would change them.",
      "Arrange kraamzorg early and confirm coverage with your insurer.",
      "Ask about interpreter support for birth-plan and consent conversations.",
    ],
  },
  privateClinics: {
    heading: "Independent treatment centres and private clinics",
    paragraphs: [
      "Alongside hospitals, the Netherlands has independent treatment centres (zelfstandige behandelcentra, ZBCs) that provide planned, routine, lower-risk specialist care such as certain eye, orthopaedic, dermatological or diagnostic procedures. Many work with insurer contracts and require the same GP referral as a hospital.",
      "The trade-off is scope. A ZBC can offer a short, focused pathway and sometimes a shorter waiting time, but it does not carry the full breadth of a hospital, and it does not have the intensive care and acute backup that complex or higher-risk treatment may require. That is exactly why eligibility is assessed before treatment is offered.",
      "There are also fully private services where you pay yourself. Before choosing any non-hospital option, check three things: whether your insurer has a contract, whether a referral is required for coverage, and how complications, aftercare and follow-up are arranged if something does not go to plan.",
    ],
    points: [
      "A GP referral is normally still required for insured care at a ZBC.",
      "Contracted status determines how predictable reimbursement will be.",
      "Scope is narrow by design — complex and acute care stays with hospitals.",
      "Ask where you go if a complication occurs outside opening hours.",
      "Confirm who provides aftercare and who informs your GP.",
      "Paying privately does not remove the value of GP coordination and record-keeping.",
    ],
    contrastRows: [
      {
        route: "Independent treatment centre (ZBC)",
        when: "Planned, routine, lower-risk procedures you are assessed as eligible for",
        how: "GP referral to a contracted centre offering that treatment",
        note: "Focused pathways and sometimes shorter waits; limited scope and no acute backup.",
      },
      {
        route: "General or teaching hospital",
        when: "Broader specialist care, higher-risk procedures, or complications requiring escalation",
        how: "GP referral or onward referral into the outpatient clinic",
        note: "Full spectrum of specialties with intensive care and emergency support on site.",
      },
      {
        route: "Fully private, self-paid service",
        when: "You choose to pay yourself for speed, convenience or a service outside insured care",
        how: "Direct booking, though a referral may still be advisable",
        note: "Clarify costs, aftercare, complication routes and whether your GP will be informed.",
      },
    ] satisfies ContactRouteRow[],
    checklist: [
      "Insurer contract status confirmed in writing or via the insurer's provider list",
      "Referral requirement for coverage checked before booking",
      "Eligibility assessment understood — including why you do or do not qualify",
      "Complication and out-of-hours escalation route explained",
      "Aftercare and follow-up responsibility confirmed",
      "Agreement that your GP will receive a letter",
      "Any self-paid costs confirmed in advance and in writing",
    ],
    scenarios: [
      {
        situation: "A treatment centre offers a much earlier date",
        approach: "Check contract status, referral requirements and complication arrangements before accepting the earlier slot.",
        firstStep: "Call your insurer to confirm coverage, then ask the centre how complications and aftercare are handled.",
      },
      {
        situation: "You are told you are not eligible for treatment at a ZBC",
        approach: "Eligibility reflects risk and complexity — hospital care exists precisely for these situations.",
        firstStep: "Ask which factor made you ineligible and what the hospital pathway looks like instead.",
      },
      {
        situation: "You want to pay privately to skip a wait",
        approach: "Weigh cost, aftercare and continuity, and keep your GP informed either way.",
        firstStep: "Ask for written cost information and check what your insurer would and would not reimburse.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Contract status is the first question, not the last.",
      "Ask about complications before you ask about waiting times.",
      "Make sure a letter goes to your GP so your record stays complete.",
      "This guide compares categories only — it does not recommend individual providers.",
    ],
  },
  costs: {
    heading: "Hospital costs and insurance (orientation)",
    paragraphs: [
      "Hospital care in the Netherlands is funded through mandatory basic health insurance (basisverzekering), which covers medically necessary hospital care. For adults, the annual deductible (eigen risico) usually applies to hospital care, unlike GP consultations which are generally exempt. Children's coverage rules differ from adults'. Amounts and terms change over time, so this guide deliberately does not print fee figures.",
      "Two things surprise newcomers most. First, insurers contract with providers, and using a non-contracted hospital can mean a larger personal share depending on your policy type. Second, hospital care is billed as treatment packages that can run across calendar years, so an invoice may arrive months later and may touch a different year's deductible than you expected.",
      "Keep referral letters, appointment confirmations, discharge letters and invoices together. If a bill is unclear, ask the hospital's finance department what the invoice covers and ask your insurer how the deductible and any contract rules were applied to your specific treatment.",
    ],
    orientationCards: [
      {
        title: "Basic insurance",
        body: "Residents are generally required to hold Dutch basic health insurance, which covers medically necessary hospital care. Verify your own policy details with your insurer.",
      },
      {
        title: "Annual deductible (eigen risico)",
        body: "Most adult hospital care counts towards the annual deductible, while GP care is generally exempt. Ask your insurer how it applies to your treatment.",
      },
      {
        title: "Contracted providers",
        body: "Insurers contract with hospitals and treatment centres. Non-contracted care can leave a bigger personal share, depending on whether you hold an in-kind, restitution or combination policy.",
      },
      {
        title: "Treatment-package billing",
        body: "Hospital care is billed as packages that can span calendar years, so invoices may arrive late and touch a different year's deductible than you expect.",
      },
      {
        title: "Children",
        body: "Coverage and deductible rules for children differ from adult rules under basic insurance. Confirm family arrangements with your insurer.",
      },
      {
        title: "Supplementary cover",
        body: "Some extras such as certain physiotherapy or dental care sit outside basic insurance. Check whether supplementary cover is relevant to your treatment plan.",
      },
    ] satisfies TipCard[],
    checklist: [
      "Basic health insurance arranged and active",
      "Insurer name, policy number and claims contact saved",
      "Policy type understood — in-kind, restitution or combination",
      "Contract status of your hospital or treatment centre checked",
      "Referral in place, since insurers normally require one for planned care",
      "Understanding that the annual deductible usually applies to adult hospital care",
      "Referral letters, discharge letters and invoices kept together",
      "Children's coverage confirmed separately if you have a family policy",
    ],
    costFactors: [
      "Whether the hospital or treatment centre is contracted by your insurer",
      "Your policy type and how it reimburses non-contracted care",
      "How much of your annual deductible remains unused",
      "Which calendar year the treatment package is attributed to",
      "Whether the care is inside the basic package or needs supplementary cover",
      "Whether a valid referral was in place for planned specialist care",
      "Adult versus child coverage rules under basic insurance",
    ],
    indicativeNote:
      "Cost orientation only — this is not a fee schedule, quotation, reimbursement promise or guarantee. Coverage rules, deductible amounts and insurer contracts change over time and differ per policy. Always verify current terms with your own insurer, and never delay emergency care because of cost uncertainty.",
    scenarios: [
      {
        situation: "An invoice arrives months after treatment",
        approach: "Treatment-package billing is often delayed. Check what period and treatment it covers before assuming it is wrong.",
        firstStep: "Ask the hospital finance department to explain the invoice, then ask your insurer how the deductible was applied.",
      },
      {
        situation: "Your chosen hospital is not contracted",
        approach: "Reimbursement depends on your policy type; a larger personal share is possible.",
        firstStep: "Call your insurer before the appointment and ask what would be reimbursed for that specific hospital.",
      },
      {
        situation: "Treatment spans New Year",
        approach: "Package attribution can mean the deductible of one specific year applies — clarity beats assumption.",
        firstStep: "Ask your insurer which year the treatment package will be attributed to.",
      },
      {
        situation: "You are unsure whether a treatment is covered",
        approach: "Ask before treatment starts. The hospital can name the treatment; the insurer confirms coverage.",
        firstStep: "Request the treatment description from the clinic and check it with your insurer.",
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
      "Check contract status before planned care, not after the invoice.",
      "Keep every letter and invoice in one folder — insurers ask for documentation.",
      "Ask the clinic for the treatment description, then ask the insurer about coverage.",
      "Review your policy annually during the switching period, especially if treatment is planned.",
    ],
  },
  patientRights: {
    heading: "Patient rights and communication",
    paragraphs: [
      "Dutch healthcare law gives patients clear rights around information, consent, privacy and access to records. In practice, this shows up as an expectation that you take part in decisions: clinicians explain options and risks, and they expect questions rather than silent agreement.",
      "That participatory style can be unfamiliar if you are used to a more directive model. Shared decision-making means it is entirely normal to ask what the alternatives are, what happens if you wait, and what the specialist would advise a family member in the same situation. Asking is not seen as distrust.",
      "You also have practical routes when something is unclear or goes wrong: interpreter support, access to your own records through a patient portal, the option to request a second opinion, and a complaints officer (klachtenfunctionaris) at every hospital, with independent escalation available if a complaint is not resolved.",
    ],
    cards: [
      {
        title: "Informed consent",
        body: "You should receive understandable information about the proposed treatment, alternatives and risks before agreeing. Consent can be withdrawn, and you may take time to decide.",
      },
      {
        title: "Interpreter and language support",
        body: "Ask in advance about English-language consultation or interpreter arrangements, especially for consent conversations. Avoid relying on a child to interpret.",
      },
      {
        title: "Privacy and confidentiality",
        body: "Medical information is confidential and shared on a need-to-know basis within your care team. You can ask who has access and how information is shared.",
      },
      {
        title: "Access to your records",
        body: "You have the right to see your medical record and usually to access letters, results and appointments through the hospital patient portal.",
      },
      {
        title: "Second opinion",
        body: "You may request a second opinion from another specialist. Ask your GP or specialist how to arrange it and check coverage with your insurer.",
      },
      {
        title: "Complaints and escalation",
        body: "Every hospital has a complaints officer, and independent escalation routes exist if the issue is not resolved internally.",
      },
      {
        title: "Shared decision-making",
        body: "Ask three questions: what are my options, what are the benefits and risks, and what does that mean for my situation. This is expected, not confrontational.",
      },
      {
        title: "Representation and support",
        body: "You may bring someone to appointments, and arrangements exist for people who cannot make decisions themselves. Ask the clinic how to record who may be informed.",
      },
    ] satisfies TipCard[],
    checklist: [
      "Ask for information in a language you understand before consenting",
      "Request an interpreter in advance if needed for consent discussions",
      "Activate the hospital patient portal to see letters and results",
      "Ask what the alternatives are and what happens if you wait",
      "Ask how a second opinion would be arranged if you want one",
      "Note the complaints officer route in case it is ever needed",
      "Record who may receive information about your care",
      "Keep your own copies of key letters and results",
    ],
    scenarios: [
      {
        situation: "You do not fully understand a proposed treatment",
        approach: "Consent should follow understanding. Ask for a plainer explanation, written information or time to think.",
        firstStep: "Say clearly that you want to understand before deciding, and ask for the information in writing.",
      },
      {
        situation: "You want a second opinion",
        approach: "This is an accepted part of Dutch care. Arrange it through your GP or specialist and check coverage with your insurer.",
        firstStep: "Tell your specialist you would like a second opinion and ask what records should be shared.",
      },
      {
        situation: "You are unhappy with how you were treated",
        approach: "Start with the department, then the hospital complaints officer, with independent escalation available afterwards.",
        firstStep: "Ask reception or the clinic secretariat for the complaints officer's contact details.",
      },
      {
        situation: "The consultation was in Dutch and you missed details",
        approach: "Do not sign or agree to something you did not follow. Language support exists for this reason.",
        firstStep: "Ask for the explanation again in English or for an interpreter at the next appointment.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Write your three key questions down before every important conversation.",
      "Bring someone to listen and take notes for difficult appointments.",
      "Ask for written information — it is easier to review calmly at home.",
      "Asking about alternatives and second opinions is normal and welcomed.",
    ],
  },
  differences: {
    heading: "What expats often find surprising about Dutch hospitals",
    intro:
      "None of these are problems once you expect them. Each card describes a system characteristic and how to work with it rather than against it.",
    cards: [
      {
        title: "You cannot usually walk in to see a specialist",
        body: "Example: arriving at a hospital outpatient clinic hoping to book a dermatologist directly and being sent back to the GP.",
        advice: "Start with your huisarts and ask what would justify a referral — that conversation is the actual first step.",
      },
      {
        title: "Appointments are short and focused",
        body: "Example: a fifteen-minute consultation ending before you asked your second question.",
        advice: "Bring three prioritised questions in writing and state upfront what you most want to cover.",
      },
      {
        title: "Communication is direct and factual",
        body: "Example: a specialist stating probabilities and options plainly without softening language.",
        advice: "Read directness as respect for your ability to decide, and ask follow-up questions freely.",
      },
      {
        title: "Watchful waiting is a real treatment choice",
        body: "Example: being advised to monitor a condition for several weeks before further investigation.",
        advice: "Ask what specifically would change the plan and when you should report back — then you have a plan, not a delay.",
      },
      {
        title: "Discharge happens earlier than you may expect",
        body: "Example: going home the day after a procedure that would mean several nights elsewhere.",
        advice: "Prepare home recovery in advance and use the discharge conversation to confirm warning signs and contacts.",
      },
      {
        title: "Shared decision-making is expected",
        body: "Example: being asked which option you prefer rather than being told what will happen.",
        advice: "Ask what the specialist would advise and why, then decide together — your preferences legitimately count.",
      },
      {
        title: "Care returns to your GP",
        body: "Example: the specialist closing the episode and your GP handling ongoing prescriptions and monitoring.",
        advice: "Keep the GP relationship active; they hold your overall record and coordinate onward care.",
      },
      {
        title: "Paperwork arrives late",
        body: "Example: an invoice or letter appearing months after treatment ended.",
        advice: "Keep a folder for hospital documents and check invoices against treatment dates before worrying.",
      },
    ] satisfies MistakeCard[],
    tips: [
      "Treat the referral system as triage, not gatekeeping — it decides where care is best delivered.",
      "Write questions down; short appointments reward preparation.",
      "Ask about alternatives and timelines rather than waiting to be told.",
      "Keep your GP in the loop, especially after treatment abroad or private care.",
    ],
  },
  preparation: {
    heading: "Hospital preparation checklist",
    paragraphs: [
      "Good hospital visits are mostly the result of ten minutes of preparation. Having documents ready, a written symptom timeline and three clear questions changes a rushed appointment into a productive one, and it makes admissions far less stressful.",
      "Preparation also means being clear about roles. You are the person who knows your history and priorities; a companion can listen and take notes; your GP holds the overall record and handles ongoing care; the hospital specialist and team run the episode of specialist care. When everyone's role is clear, fewer things fall between the cracks.",
    ],
    checklist: [
      "Referral letter or digital referral confirmation available",
      "ID or residence document and BSN ready",
      "Insurance details and a photo of your insurance card",
      "Current medication list with generic names and doses, including non-prescription items",
      "Allergy and intolerance list",
      "Written symptom timeline with dates and what changed",
      "Previous results, imaging and letters, including from care abroad",
      "Three prioritised questions written down",
      "Interpreter or English-language support requested if needed",
      "Companion arranged for complex or stressful appointments",
      "Preparation instructions followed — fasting, medication pauses, hydration",
      "Travel, parking and clinic location checked in advance",
      "Transport home arranged if sedation or anaesthesia is involved",
      "Aftercare and home support planned before an admission",
      "Clinic secretariat number and patient portal access saved",
    ],
    roleCards: [
      { role: "You (the patient)", focus: "Bring history, priorities and questions; confirm you understand the plan before agreeing to it." },
      { role: "Companion", focus: "Listens, takes notes and remembers what was said when the conversation is stressful." },
      { role: "Your GP (huisarts)", focus: "Refers you in, holds the overall record and resumes ongoing care after the specialist episode." },
      { role: "Hospital specialist and team", focus: "Assesses, investigates, treats and coordinates the specialist episode, then reports back to the GP." },
      { role: "Clinic secretariat", focus: "Handles appointments, rescheduling, paperwork and routing your practical questions." },
      { role: "Your insurer", focus: "Answers coverage, deductible, contract and care-mediation questions about waiting times." },
    ] satisfies RoleCard[],
    tips: [
      "Keep one phone folder with ID, insurance card, referral and medication list.",
      "Update the medication list after every change — it is the document most often out of date.",
      "Ask at every appointment who arranges the next step and by when you should hear.",
      "Prepare the first days at home before a planned admission, not after it.",
    ],
  },
  mistakes: {
    heading: "Common expat mistakes with Dutch hospitals",
    intro:
      "These mistakes are common because hospital access models differ between countries. Each one has a straightforward fix that usually takes a single phone call.",
    cards: [
      {
        title: "Skipping the GP and contacting hospitals directly",
        body: "Example: calling outpatient clinics for weeks before learning that a GP referral is required.",
        advice: "Book a GP appointment first and ask specifically about a referral, the specialty and the reason.",
      },
      {
        title: "Assuming a referral is optional for coverage",
        body: "Example: attending a specialist without a valid referral and facing reimbursement problems.",
        advice: "Keep the referral letter or digital confirmation and check referral requirements with your insurer.",
      },
      {
        title: "Ignoring insurer contract status",
        body: "Example: choosing a hospital or treatment centre that is not contracted and receiving a larger personal share.",
        advice: "Check the insurer's provider list before booking planned care, and ask what would be reimbursed.",
      },
      {
        title: "Accepting a long wait without asking about alternatives",
        body: "Example: waiting months without knowing that care mediation and cancellation lists exist.",
        advice: "Ask the clinic about earlier slots and contact your insurer's care-mediation service.",
      },
      {
        title: "Missing preparation instructions",
        body: "Example: eating before a procedure requiring fasting, leading to a postponed appointment.",
        advice: "Read the appointment letter and portal messages twice, and call the clinic with any uncertainty.",
      },
      {
        title: "Arriving without documents",
        body: "Example: turning up without ID, insurance details or a medication list, slowing everything down.",
        advice: "Keep a single hospital folder on your phone and check it the evening before.",
      },
      {
        title: "Leaving without understanding the plan",
        body: "Example: going home unsure who arranges the next step or when results will arrive.",
        advice: "Before leaving, repeat the plan back and confirm who does what, by when, and who to contact.",
      },
      {
        title: "Using the emergency department for routine questions",
        body: "Example: going to the SEH about a results question or an appointment change.",
        advice: "Use the clinic secretariat or patient portal for admin, and the GP, huisartsenpost or 112 for urgent needs by severity.",
      },
      {
        title: "Not telling the hospital about care abroad",
        body: "Example: repeating investigations because previous results were never shared.",
        advice: "Bring translated summaries and results, and ask that they be added to your record.",
      },
      {
        title: "Letting the GP relationship lapse",
        body: "Example: relying only on specialists and having no coordinator for ongoing care or prescriptions.",
        advice: "Stay registered with a huisarts and make sure hospital letters reach them.",
      },
    ] satisfies MistakeCard[],
    adaptationTips: [
      "Learn the referral loop once: GP in, specialist episode, GP out.",
      "Register with a GP and arrange insurance in your first weeks.",
      "Ask about waiting-time alternatives instead of waiting silently.",
      "Keep a document folder and a personal timeline of appointments and results.",
      "Use the right channel: secretariat for admin, GP for ongoing care, 112 for emergencies.",
    ],
  },
  faq: [
    {
      q: "Do I need a referral to go to a hospital in the Netherlands?",
      a: "For planned specialist care, yes — you normally need a referral (verwijzing) from your GP, and insurers generally expect a valid referral for reimbursement. Emergency care is different: 112 and emergency departments do not require a referral. Keep the referral letter or digital confirmation with your appointment documents.",
    },
    {
      q: "Can I choose which hospital I go to?",
      a: "For planned care you usually have a choice, and your GP will often suggest options. Weigh travel distance, whether your insurer has a contract with the hospital, waiting time for that specialty and whether your condition needs concentrated expertise. For highly specialised treatment, the choice may be limited to a few centres.",
    },
    {
      q: "Does my health insurance cover hospital treatment?",
      a: "Dutch basic health insurance covers medically necessary hospital care. For adults the annual deductible (eigen risico) usually applies to hospital care, unlike GP consultations. Using a non-contracted hospital can mean a larger personal share depending on your policy type. Verify your own policy and treatment with your insurer.",
    },
    {
      q: "Can I ask for a second opinion?",
      a: "Yes. Requesting a second opinion from another specialist is an accepted part of Dutch care. Arrange it through your GP or your current specialist, ask which records should be shared, and check with your insurer how it is covered under your policy.",
    },
    {
      q: "What is a university medical centre and when would I go there?",
      a: "A university medical centre (UMC) is a hospital attached to a medical faculty that combines complex patient care with education and research. You may be referred there by your GP, but more often by another hospital when a condition is rare or highly complex. Expect multidisciplinary teams and the possible involvement of specialists in training and students.",
    },
    {
      q: "Will hospital staff speak English?",
      a: "In larger cities and academic centres, English is often workable, and many clinicians are comfortable in it — but it is not guaranteed everywhere. Ask when booking whether the consultation can be in English or whether an interpreter can be arranged, particularly for consent conversations and complex decisions.",
    },
    {
      q: "How long are hospital waiting times?",
      a: "Waiting times vary by specialty, hospital and season, and hospitals publish indicative waiting information. If a wait seems too long, ask the clinic about cancellation slots and contact your insurer's care-mediation service (zorgbemiddeling), which can look for earlier availability at contracted providers.",
    },
    {
      q: "What happens when I am admitted to hospital?",
      a: "Planned admissions usually start with pre-admission screening and, for surgery, an anaesthesia intake, followed by clear preparation instructions. On the ward you meet nurses, specialists in training and the responsible specialist, with daily rounds. Stays are kept as short as clinically appropriate, ending with a discharge conversation about medication, warning signs, aftercare and follow-up, plus a letter to your GP.",
    },
    {
      q: "What is the difference between a polikliniek and the SEH?",
      a: "The polikliniek is the outpatient clinic where planned, appointment-based specialist care happens. The SEH is the emergency department, which handles serious emergencies and triages by severity, receiving many patients by ambulance or on referral. Use the polikliniek for planned care and the appropriate emergency door — GP, huisartsenpost or 112 — for urgent situations.",
    },
    {
      q: "Can I go to the emergency department instead of waiting for an appointment?",
      a: "No — that is not what emergency departments are for, and non-urgent patients are commonly redirected. For urgent problems, contact your GP during opening hours or the huisartsenpost outside them; they refer you to the SEH if hospital assessment is needed. Call 112 whenever life may be at risk.",
    },
    {
      q: "Can my family stay with me or with my child in hospital?",
      a: "Visiting arrangements vary by ward and hospital. For children, parents are normally able to stay with them, including during many procedures and often overnight. Ask the specific ward about visiting hours, numbers of visitors and any current restrictions before family travels.",
    },
    {
      q: "How do I get my test results and medical records?",
      a: "Results are usually discussed at a follow-up appointment, by phone or through the hospital patient portal. You also have the right to access your own medical record. Ask how to activate portal access and confirm at each appointment how and when results will reach you — do not assume silence means everything is fine.",
    },
    {
      q: "What if I need hospital care and have just arrived in the Netherlands?",
      a: "Register with a huisarts and arrange Dutch basic health insurance as early as you can, because both are needed for smooth planned hospital access. Bring translated records from care abroad so investigations are not repeated. In a life-threatening emergency, call 112 regardless of your registration status.",
    },
    {
      q: "Who is responsible for my care after hospital treatment ends?",
      a: "Your GP. When the specialist episode closes, the hospital sends a letter to your huisarts, who resumes ongoing monitoring, repeat prescriptions and follow-up questions. If new specialist input is needed later, the GP can issue a new referral.",
    },
  ],
  faqQuickReference: [
    "Planned specialist care → GP referral first, then an outpatient appointment.",
    "You usually have a choice of hospital — check distance, contract status and waiting time.",
    "Adults: expect the annual deductible to apply to hospital care.",
    "Second opinions and interpreter support are normal requests.",
    "UMCs handle complex and rare conditions, often on onward referral.",
    "Admin questions → clinic secretariat or patient portal, not the SEH.",
    "Urgent care → GP by day, huisartsenpost after hours, 112 for life-threatening emergencies.",
    "After treatment → care and monitoring return to your GP.",
  ],
  howToSchema: {
    name: "Preparing for a Hospital Appointment in the Netherlands",
    description:
      "Step-by-step orientation for expats and newcomers preparing for a Dutch hospital outpatient appointment — confirming the referral, following preparation instructions, collecting documents, writing questions and agreeing the follow-up plan.",
    anchor: "#how-it-works",
    howToSteps: [
      {
        name: "Confirm your referral and appointment details",
        text: "Check that your GP referral names the right specialty and that your appointment letter lists the hospital, clinic, building, floor and time. Confirm whether you must arrive earlier for registration or blood tests.",
      },
      {
        name: "Follow any preparation instructions exactly",
        text: "Read the letter or portal message for fasting instructions, medication pauses, hydration requirements or forms to complete in advance. If anything is unclear, call the clinic secretariat before the appointment rather than guessing.",
      },
      {
        name: "Collect your documents",
        text: "Bring ID, your BSN, insurance details, the referral, a current medication and allergy list, and any relevant results or letters from previous care, including care abroad.",
      },
      {
        name: "Write a symptom timeline and your top questions",
        text: "Note when symptoms started, what makes them better or worse, what has already been tried, and the three questions you most want answered. Appointments are focused, so a written list keeps nothing behind.",
      },
      {
        name: "Arrange language support and a companion if useful",
        text: "Ask the clinic in advance about English-language consultation or interpreter options, and bring someone who can listen and take notes if the topic is complex or stressful.",
      },
      {
        name: "Plan travel, parking and timing",
        text: "Allow time for parking or public transport, finding the right building and registration. Arriving unhurried matters more than arriving early at the wrong entrance.",
      },
      {
        name: "During the appointment, confirm the plan",
        text: "Ask what the working diagnosis is, what the next investigation or treatment step is, what the alternatives are, and what would change the plan. Repeat the plan back in your own words to check you understood it.",
      },
      {
        name: "Before leaving, agree the follow-up",
        text: "Confirm who arranges the next appointment, how and when you will receive results, who to contact with questions, and whether your GP will be informed.",
      },
    ] satisfies HowToStep[],
  },
  relatedGuidesTips: [
    "No referral yet → start with the GP (huisarts) guide.",
    "Urgent or life-threatening situations → emergency healthcare guide.",
    "Coverage, deductible and contract questions → health insurance guide.",
    "Children's pathways → healthcare for children cornerstone.",
    "Dental care and dental urgency → dentists guide.",
    "System overview for daily life → healthcare basics.",
  ],
  relatedGuides: [
    {
      label: "General Practitioner (GP) in the Netherlands",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Registration, appointments and the referrals that open hospital specialist care.",
    },
    {
      label: "Emergency Healthcare in the Netherlands",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112, ambulances, the huisartsenpost and what happens at the emergency department.",
    },
    {
      label: "Health Insurance in the Netherlands",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package, annual deductible, policy types, contracted providers and switching.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "GPs, JGZ, vaccinations, paediatric specialists and family healthcare setup.",
    },
    {
      label: "Dentists in the Netherlands",
      href: DENTISTS_NETHERLANDS_PATH,
      status: "live",
      description: "Finding a dentist, insurance, check-ups and emergency dental routes.",
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
      description: "GP first contact, POH-GGZ, GGZ specialist care, stepped care, waiting times and crisis routes.",
    },
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Verloskundige first line, obstetric pathways, registration, insurance and kraamzorg awareness.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Apotheek finding, hours, counseling and dienstapotheek — including discharge medicine pickup.",
    },
    {
      label: "Physiotherapy",
      href: PHYSIOTHERAPY_NETHERLANDS_PATH,
      status: "live",
      description: "Fysiotherapie, direct access, insurance limits and post-op recovery orientation.",
    },
  ] satisfies HospitalLink[],
  healthcareHubTips: [
    "Hospital care depends on two things being in place first: a GP and health insurance.",
    "This page is the hospitals cornerstone; the GP guide covers primary care and referrals in depth.",
    "Emergency situations follow separate doors — read the emergency healthcare guide alongside this one.",
    "Families should also read the children's healthcare guide for paediatric pathways.",
    "Maternity care owns midwife-first and kraamzorg depth; this page stays hospital-focused.",
    "A dedicated health hub landing page is planned — use the live links meanwhile.",
  ],
  healthcareHubCards: [
    {
      label: "Hospitals in the Netherlands",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Referrals, specialists, outpatient clinics, admissions, UMCs and costs — you are here.",
    },
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Huisarts registration, appointments and hospital referrals.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112, huisartsenpost, SEH, ambulance and urgent pathways.",
    },
    {
      label: "Mental Healthcare",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GP first contact, POH-GGZ, GGZ specialist care and crisis routes.",
    },
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Midwife-first pathways, obstetric care and kraamzorg awareness.",
    },
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Apotheek finding, hours and dienstapotheek.",
    },
    {
      label: "Physiotherapy",
      href: PHYSIOTHERAPY_NETHERLANDS_PATH,
      status: "live",
      description: "Direct access, insurance limits and recovery pathways.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package, deductible and insurer contracts.",
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
  ] satisfies HospitalLink[],
  exploreNextCards: [
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Register with a huisarts and understand how referrals are arranged.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "Know which door to use when something is urgent tonight.",
    },
    {
      label: "Maternity care",
      href: MATERNITY_CARE_NETHERLANDS_PATH,
      status: "live",
      description: "Continue from hospital birth orientation to the full maternity pathway.",
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
      description: "Paediatric pathways, vaccinations and family healthcare setup.",
    },
    {
      label: "Physiotherapy",
      href: PHYSIOTHERAPY_NETHERLANDS_PATH,
      status: "live",
      description: "Post-op and recovery physiotherapy orientation.",
    },
  ] satisfies HospitalLink[],
  exploreNextTips: [
    "No referral route yet → GP guide.",
    "Urgent situation planning → emergency healthcare guide.",
    "Birth pathway depth → maternity care guide.",
    "Coverage and invoice questions → health insurance guide.",
    "Children in hospital → healthcare for children.",
    "Recovery movement care → physiotherapy guide.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks before your first hospital visit",
      items: [
        "Register with a huisarts — most hospital care starts with a referral.",
        "Arrange Dutch basic health insurance and save your policy details.",
        "Keep BSN, ID, insurance card and medication list together.",
        "Expect appointment-based outpatient care, not walk-in departments.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks of hospital care",
      items: [
        "GP referral (verwijzing) opens specialist care.",
        "Medical specialists work in hospital departments.",
        "Outpatient clinics (polikliniek) handle most appointments and diagnostics.",
        "Admission (opname) happens only when clinically needed.",
        "Emergency departments (SEH) triage serious emergencies by severity.",
        "University medical centres concentrate complex care, teaching and research.",
      ],
    },
    howItWorks: {
      title: "From the visual — the referral loop",
      items: [
        "GP assessment decides whether specialist input is needed.",
        "Referral names the specialty and the reason.",
        "Outpatient appointment, then diagnostics such as imaging or blood tests.",
        "Treatment and follow-up with a clear plan you agree to.",
        "Care and monitoring return to your GP when the episode ends.",
      ],
    },
    hospitalTypes: {
      title: "From the visual — which hospital type does what",
      items: [
        "General hospital: most routine specialist care and diagnostics.",
        "Teaching hospital: more complex care plus specialist training.",
        "University medical centre: rare and highly complex care with research.",
        "Specialist categorical hospital: deep expertise in one field.",
        "Independent treatment centre (ZBC): planned routine procedures.",
      ],
    },
    finding: {
      title: "From the visual — how to choose a hospital",
      items: [
        "Travel distance matters across many appointments, not just the first.",
        "Check whether your insurer has a contract with the hospital.",
        "Ask about waiting time for that specific specialty.",
        "Complex conditions may justify travelling to concentrated expertise.",
        "Raise language support needs when you book.",
      ],
    },
    outpatient: {
      title: "From the visual — inside the outpatient clinic",
      items: [
        "Appointment letter names clinic, building, floor and preparation.",
        "Check in at the kiosk or reception with ID and insurance details.",
        "Consultations are short and focused — bring three written questions.",
        "Diagnostics may be same-day or separately scheduled.",
        "Confirm how and when results will reach you before you leave.",
      ],
    },
    admissions: {
      title: "From the visual — the admission sequence",
      items: [
        "Pre-admission screening and anaesthesia intake for planned surgery.",
        "Follow fasting and medication instructions exactly.",
        "Ward care with daily rounds and short planned stays.",
        "Discharge conversation covers medication, warning signs and aftercare.",
        "A letter goes to your GP so primary care can continue monitoring.",
      ],
    },
    specialists: {
      title: "From the visual — what each specialty covers",
      items: [
        "Cardiology for heart and circulation; neurology for brain and nerves.",
        "Orthopaedics for bones and joints; general surgery for abdominal and soft tissue.",
        "Dermatology for skin; ENT for ear, nose and throat.",
        "Paediatrics for children; gynaecology for reproductive and obstetric care.",
        "Oncology coordinates cancer care through multidisciplinary teams.",
      ],
    },
    umc: {
      title: "From the visual — university medical centres",
      items: [
        "Three pillars: complex patient care, education and research.",
        "Referral often comes onward from another hospital.",
        "Specialists in training and students work under supervision.",
        "Clinical trial participation is voluntary and separate from standard care.",
        "Ask about shared care if the centre is far from home.",
      ],
    },
    emergency: {
      title: "From the visual — emergency doors",
      items: [
        "Life-threatening emergency → call 112 immediately.",
        "Urgent during GP hours → your huisarts.",
        "Urgent outside GP hours → the regional huisartsenpost.",
        "SEH triages by severity; ambulance and referral are common routes.",
        "Open the Emergency Healthcare guide for the full picture.",
      ],
    },
    children: {
      title: "From the visual — children in hospital",
      items: [
        "Paediatric clinics are designed around children and families.",
        "Parents can normally stay, including during many procedures.",
        "Explanations are age-appropriate; adolescents gain more say.",
        "Bring vaccination records, medication list and a comfort item.",
        "Use the Healthcare for Children guide for the wider family pathway.",
      ],
    },
    maternity: {
      title: "From the visual — maternity pathways",
      items: [
        "Community midwife leads routine pregnancy care.",
        "Hospital involvement follows a medical indication.",
        "Birth options include home, birth centre and hospital.",
        "Kraamzorg supports recovery at home after birth.",
        "A dedicated Pregnancy & Birth guide is coming soon.",
      ],
    },
    privateClinics: {
      title: "From the visual — treatment centres versus hospitals",
      items: [
        "ZBCs handle planned, routine, lower-risk procedures.",
        "Hospitals cover complex care with acute and intensive care backup.",
        "A GP referral is normally still needed for insured care.",
        "Check insurer contract status before booking.",
        "Ask how complications and aftercare are arranged.",
      ],
    },
    costs: {
      title: "From the visual — cost orientation",
      items: [
        "Basic insurance covers medically necessary hospital care.",
        "Adults: the annual deductible usually applies to hospital care.",
        "Contracted versus non-contracted providers change your personal share.",
        "Treatment packages can span calendar years, so invoices arrive late.",
        "Verify your own policy and treatment with your insurer.",
      ],
    },
    patientRights: {
      title: "From the visual — your rights and how to use them",
      items: [
        "Informed consent after understandable information about options and risks.",
        "Interpreter and English-language support can be requested in advance.",
        "Access your records and letters through the patient portal.",
        "Second opinions are an accepted part of Dutch care.",
        "Every hospital has a complaints officer, with independent escalation available.",
      ],
    },
    differences: {
      title: "From the visual — expect these patterns",
      items: [
        "Referral first; specialists are not walk-in services.",
        "Short, focused appointments reward written questions.",
        "Watchful waiting can be a deliberate treatment choice.",
        "Early discharge with recovery at home is standard.",
        "Shared decision-making expects your preferences to be voiced.",
      ],
    },
    checklist: {
      title: "From the visual — prepare in ten minutes",
      items: [
        "Referral, ID, BSN and insurance details ready.",
        "Medication and allergy list up to date.",
        "Symptom timeline and three prioritised questions written down.",
        "Interpreter or companion arranged if needed.",
        "Transport, aftercare and home support planned for procedures.",
      ],
    },
    mistakes: {
      title: "From the visual — mistakes with fixes",
      items: [
        "Contacting hospitals directly → start with your GP.",
        "Ignoring contract status → check your insurer's provider list first.",
        "Waiting silently → ask about cancellation slots and care mediation.",
        "Missing preparation instructions → reread the letter and call if unsure.",
        "Leaving without clarity → confirm who does what, by when.",
      ],
    },
    faq: {
      title: "From the visual — top questions answered",
      items: [
        "Referrals are needed for planned specialist care.",
        "You usually have a choice of hospital.",
        "Adults: expect the annual deductible for hospital care.",
        "Second opinions and interpreters can be requested.",
        "Care returns to your GP after treatment ends.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next by need",
      items: [
        "Referrals and primary care → GP guide.",
        "Urgent tonight → emergency healthcare guide.",
        "Coverage and invoices → health insurance guide.",
        "Children's pathways → healthcare for children.",
        "Mental health support → mental healthcare guide.",
      ],
    },
    healthcareHub: {
      title: "From the visual — the healthcare cluster",
      items: [
        "Hospitals cornerstone (this page): referral to discharge orientation.",
        "GP: registration, everyday care and referrals.",
        "Emergency healthcare: 112, huisartsenpost and SEH.",
        "Insurance and basics: coverage and system overview.",
        "Family, mental health and dental: children's, GGZ and tandarts pathways.",
      ],
    },
    exploreNext: {
      title: "From the visual — choose the card matching your next need",
      items: [
        "GP registration → the referral route into hospital care.",
        "Emergency healthcare → know the urgent doors in advance.",
        "Health insurance → coverage, deductible and contracts.",
        "Children or dental → family and tandarts guides.",
      ],
    },
  },
  sourceUsageTips: [
    "Use Government.nl for official English-language orientation on Dutch healthcare and insurance obligations.",
    "Use Rijksoverheid topic pages for Dutch-language government context on hospital care and insurance.",
    "Use the NZa for regulator information on healthcare rules, tariffs and patient-facing rights.",
    "Use the Dutch hospital sector association for general information about how hospitals are organised.",
    "Use your insurer portal for contract status, deductible and reimbursement questions.",
  ],
  officialSources: [
    {
      label: "Government.nl — Health insurance",
      href: "https://www.government.nl/topics/health-insurance",
      description: "Official orientation on Dutch health insurance obligations and the care that basic insurance covers.",
    },
    {
      label: "Rijksoverheid — Zorgverzekering",
      href: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering",
      description: "Dutch government topic pages on health insurance, deductible rules and how care is organised.",
    },
    {
      label: "NZa — Dutch Healthcare Authority",
      href: "https://www.nza.nl/english",
      description: "Regulator information on healthcare rules, tariff regulation, waiting times and patient-facing rights.",
    },
    {
      label: "NVZ — Dutch Association of Hospitals",
      href: "https://www.nvz-ziekenhuizen.nl/",
      description: "Sector association information about how Dutch hospitals are organised and what they do.",
    },
    {
      label: "Government.nl — Emergency number 112",
      href: "https://www.government.nl/topics/emergency-number-112",
      description: "Official orientation on when and how to use the emergency number, including ambulance response.",
    },
  ],
  officialSourcesNote:
    "General information only — not medical advice, and not a ranking, endorsement or quality assessment of any hospital. Hospital procedures, waiting times, insurer contracts and coverage rules change, so verify your own situation with your GP, treating specialist, the hospital and your insurer, alongside the official sources above. In an emergency, call 112.",
} as const;

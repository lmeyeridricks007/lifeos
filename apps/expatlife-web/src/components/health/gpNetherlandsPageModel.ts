export const GP_NETHERLANDS_PATH = "/netherlands/health/gp-netherlands/" as const;
export const HEALTH_HUB_PATH = "/netherlands/health/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const HEALTHCARE_FOR_CHILDREN_PATH = "/netherlands/family/healthcare-for-children-netherlands/" as const;
export const HEALTHCARE_BASICS_PATH = "/netherlands/living/healthcare-basics/" as const;
export const EMERGENCIES_SAFETY_PATH = "/netherlands/living/emergencies-safety/" as const;
export const EMERGENCY_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/emergency-healthcare-netherlands/" as const;
export const HEALTH_SYSTEM_CULTURE_PATH = "/netherlands/culture/health-system-culture-basics/" as const;

export type GpLink = {
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

export type ComparisonRow = {
  topic: string;
  withReferral: string;
  withoutReferral: string;
};

export type ContactRouteRow = {
  route: string;
  when: string;
  how: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "premium-v2";
const VISUAL_PREFIX = "gp-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const gpNetherlandsPage = {
  slug: "gp-netherlands",
  path: GP_NETHERLANDS_PATH,
  hubPath: HEALTH_HUB_PATH,
  parentGuidePath: HEALTHCARE_BASICS_PATH,
  publish: true,
  publishDate: "2027-01-31",
  seo: {
    title: "GP (Huisarts) in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how GPs (huisartsen) work in the Netherlands, including registration, appointments, referrals, prescriptions, emergencies and what expats should expect.",
    keywords: [
      "GP Netherlands",
      "huisarts Netherlands",
      "doctor Netherlands",
      "general practitioner Netherlands",
      "GP for expats",
      "register GP Netherlands",
      "Dutch healthcare",
      "GP referral",
      "family doctor Netherlands",
      "Dutch GP system",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Health · Primary Care",
    pageTitle: "General Practitioner (GP / Huisarts) in the Netherlands",
    subtitle:
      "How Dutch GPs work for expats — registration, appointments, referrals, prescriptions, home visits, out-of-hours care and what to expect from the huisarts system.",
    primaryCta: { label: "Understand the GP System", href: "#how-it-works" },
    secondaryCta: { label: "Register with a GP", href: "#registering" },
    chips: ["Registration", "Appointments", "Referrals", "Huisartsenpost", "Emergencies"],
    disclaimer:
      "General orientation only — not medical advice, diagnosis or treatment recommendations. For individual concerns, contact a GP, the huisartsenpost or emergency services. Always verify coverage with your insurer.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic Dutch huisarts consultation — GP and multicultural expat patient at a light oak desk with a Verwijzing referral letter, blood-pressure cuff and practice tablet, canal houses and city bikes visible through the clinic window in soft daylight.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#what-gp-does", label: "What a GP does" },
    { href: "#registering", label: "Registering" },
    { href: "#booking", label: "Booking" },
    { href: "#consultation", label: "Consultation" },
    { href: "#referrals", label: "Referrals" },
    { href: "#prescriptions", label: "Prescriptions" },
    { href: "#home-visits", label: "Home visits" },
    { href: "#out-of-hours", label: "Out of hours" },
    { href: "#emergency-care", label: "Emergencies" },
    { href: "#expat-differences", label: "Expat differences" },
    { href: "#children-family", label: "Children" },
    { href: "#mental-health", label: "Mental health" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#healthcare-hub", label: "Health hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Before Your First GP Visit — four building blocks for primary care in the Netherlands: confirm basic insurance, register a huisarts near home, learn the appointment triage route, and save emergency numbers for 112 and the huisartsenpost — with a Safety file rail listing BSN, insurer card and GP practice details.",
      "Four building blocks cover setup: insurance, a GP near home, how to book, and emergency routes saved before you need them."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of the Dutch GP system — first contact and gatekeeper role, catchment registration, short triaged appointments, referral letters for specialists, prescriptions via the apotheek, and out-of-hours care via the huisartsenpost.",
      "Six building blocks explain almost every GP question — the sections below add detail to each."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium patient pathway diagram from patient to GP to treatment to referral to hospital — the huisarts as gatekeeper, practice assistant triage, treatment in the practice when possible, and the referral letter unlocking specialist and hospital care.",
      "Care flows patient → GP → treatment or referral → hospital. The referral letter is the access key beyond the practice."
    ),
    whatGpDoes: visual(
      "what-gp-does",
      "Premium role map of a Dutch huisarts practice — assessment and treatment of common illness, prescriptions, chronic condition follow-up, preventive advice, mental health first contact via POH-GGZ, and coordination with pharmacy and hospital specialists.",
      "Your GP treats what can be treated in general practice and coordinates everything else."
    ),
    registering: visual(
      "registering",
      "Premium registration timeline board — find practices accepting patients by postcode, check catchment and language, submit the aanmelden form with BSN and insurance, transfer medical history, book an intake, and save daytime and out-of-hours numbers.",
      "Register early, before you need care — popular neighbourhoods can have closed practice lists."
    ),
    booking: visual(
      "booking",
      "Premium booking desk scene — phone triage script with the practice assistant, same-day slots versus planned consults, e-consult and phone consult options, and a reminder card to state symptom, duration and your main worry clearly.",
      "Appointments are short and phone-triaged — clear facts get you the right slot faster."
    ),
    consultation: visual(
      "consultation",
      "Premium consultation scene — a ten-minute consult clock, prepared three-sentence summary, return-if-worse instructions on a notepad, and a dual card showing what to expect from assessment-first Dutch practice style.",
      "Lead with your main worry, leave with a clear plan, and always ask what should make you come back."
    ),
    referrals: visual(
      "referrals",
      "Premium referral comparison board — with a verwijzing versus without, contracted hospital notes, how the referral letter travels to the specialist, and a checklist for keeping a copy for your own records.",
      "Most specialist and hospital care starts with a GP referral — asking for one is normal and expected."
    ),
    prescriptions: visual(
      "prescriptions",
      "Premium pharmacy and prescription board — digital recipe to the apotheek, repeat prescription request slip, generic drug names, and the difference between drogist and apotheek with a note on conservative antibiotic prescribing culture.",
      "Register with one pharmacy near home so prescriptions, repeats and interaction checks stay in one place."
    ),
    homeVisits: visual(
      "home-visits",
      "Premium home-visit orientation card — when a huisarts may visit at home, how to request via the practice assistant, what is usually handled by phone or practice visit instead, and a note that home visits are assessed case by case.",
      "Home visits exist but are selective — mobility and medical need decide, not preference alone."
    ),
    outOfHours: visual(
      "out-of-hours",
      "Premium huisartsenpost board — evenings, nights, weekends and public holidays, call-first triage, appointment or advice outcomes, and a contrast card showing daytime GP versus out-of-hours GP post versus 112.",
      "Outside practice hours, call the regional huisartsenpost first for urgent non-emergency care."
    ),
    emergencyCare: visual(
      "emergency-care",
      "Premium emergency decision flow — life-threatening situations to 112, urgent but not life-threatening to the huisartsenpost, routine concerns to the next GP appointment, with a phone card of numbers to save and information to have ready.",
      "When in doubt, call — triage staff would rather assess an unnecessary call than a delayed one."
    ),
    expatDifferences: visual(
      "expat-differences",
      "Premium expat orientation board presenting Dutch GP system characteristics — gatekeeper referrals, short triaged consults, assessment-first prescribing, catchment registration, and call-first out-of-hours care — framed as system design, not shortcomings.",
      "Expat differences are system characteristics — once you expect them, the pathway becomes predictable."
    ),
    childrenFamily: visual(
      "children-family",
      "Premium family care map linking the family huisarts for illness with Youth Healthcare JGZ for prevention, plus a cross-link card to the Healthcare for Children guide for vaccinations, consultatiebureau and paediatric pathways.",
      "Illness goes to the family GP; growth, screening and vaccinations usually run through JGZ."
    ),
    mentalHealth: visual(
      "mental-health",
      "Premium mental health orientation pathway — GP as first contact, practice-based POH-GGZ support, referral routes into GGZ when needed, and a note that this section is orientation only, not diagnosis or treatment advice.",
      "Many practices offer a mental health practice nurse (POH-GGZ) as a first support step."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with Fix advice cards — waiting until illness to register, walking into A&E without triage, expecting direct specialist booking, arriving unprepared for a ten-minute slot, and assuming English without asking.",
      "Each common mistake includes a practical Fix — small prep changes remove most friction."
    ),
    checklist: visual(
      "checklist",
      "Premium ten-step GP setup checklist — insurance, find accepting practices, register, transfer records, intake appointment, save numbers, register pharmacy, understand huisartsenpost, know 112 criteria, and annual review reminder.",
      "Work through the essentials in order — most people finish core GP setup within the first weeks."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with readable question and answer pairs on GP registration, referrals, appointments, out-of-hours care, emergencies, prescriptions, English language and insurance for expats in the Netherlands.",
      "Orientation answers only — confirm your own situation with your GP, insurer and official sources."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking the GP cornerstone to health insurance, healthcare basics, children's healthcare, emergencies and safety, and health system culture basics.",
      "Primary care connects to insurance, family health and emergency planning — read them together."
    ),
    healthcareHub: visual(
      "healthcare-hub",
      "Premium healthcare cluster ecosystem diagram with the GP guide at the centre, connected to insurance, healthcare basics, children, emergencies, pharmacies and mental health topics — some marked coming soon.",
      "This page is the GP cornerstone — explore the wider healthcare cluster next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from the GP guide to health insurance, healthcare basics, children's healthcare and emergencies, with official source cards for Government.nl, Thuisarts.nl, NHG, NZa and Rijksoverheid.",
      "Continue with insurance and emergency planning — and verify details on the official sources."
    ),
  },
  quickAnswer: {
    heading: "Quick answer: how the Dutch GP works",
    summary:
      "In the Netherlands your general practitioner (huisarts) is usually the first contact for non-emergency care. You register with a local practice, book through phone or online triage, and receive treatment in the practice when possible — with a referral letter (verwijzing) unlocking most hospital and specialist care.",
    bullets: [
      "Register with a huisarts near home once you have a BSN and Dutch health insurance.",
      "Expect short, phone-triaged appointments — state the symptom, duration and your main worry.",
      "Specialist and hospital care normally needs a GP referral letter.",
      "Outside opening hours, call the regional huisartsenpost for urgent non-emergency care.",
      "Call 112 for life-threatening emergencies — do not wait for a GP appointment.",
    ],
    note: "Set up insurance and GP registration in your first weeks — searching while you are ill is far harder than registering early.",
  },
  introParagraphs: [
    "The Dutch huisarts is the centre of gravity in primary care. For everyday illness, injuries, prescriptions, chronic condition follow-up and most first assessments of new symptoms, the family doctor is where care starts. Practices are local by design: most accept patients living within a defined catchment area around the practice, so your postcode matters more than a preferred brand name.",
    "What often surprises newcomers is not the quality of care but the structure. Appointments are typically short and triaged by a trained practice assistant (doktersassistent). Specialists are usually reached through a referral rather than booked directly. Out-of-hours care starts with a phone call to the huisartsenpost rather than a walk-in at the hospital emergency department.",
    "This guide is orientation for expats: how the system works, how to register, how to book and prepare for a consult, how referrals and prescriptions work, when home visits apply, how out-of-hours and emergency routes differ, and what commonly feels different if you arrive from another healthcare culture. It is not medical advice — for anything about your own health, speak to a GP, the huisartsenpost or, in an emergency, call 112.",
  ],
  orientationFlowSteps: [
    "Confirm basic insurance — keep your insurer name and policy number somewhere you can find quickly.",
    "Register a huisarts near home — catchment area, BSN and insurance details are usually required.",
    "Learn the booking route — phone triage, online booking or e-consult, depending on the practice.",
    "Save emergency routes now — 112 for life-threatening situations and your regional huisartsenpost number for urgent out-of-hours care.",
  ],
  introHighlights: [
    "The huisarts is first contact and gatekeeper — most specialist care needs a referral.",
    "Registration is local: practices often only accept patients in their catchment area.",
    "Appointments are short and phone-triaged — preparation makes the consult work.",
    "Out-of-hours care usually starts with a call to the huisartsenpost, not a hospital walk-in.",
  ],
  safetyFileChecklist: [
    "Your BSN (citizen service number)",
    "Insurer name, policy number and a photo of the insurance card",
    "GP practice name, daytime number and any urgent practice line",
    "Regional huisartsenpost number and address",
    "Preferred pharmacy (apotheek) name and number",
    "Medical summary and current prescriptions with generic drug names",
  ],
  introScenarios: [
    {
      situation: "Just arrived and not yet registered",
      approach: "Finish municipal registration and insurance first, then search huisarts practices by postcode that are accepting patients.",
      firstStep: "Confirm BSN and insurer details, then complete the practice aanmelden form.",
    },
    {
      situation: "Need care tonight and the practice is closed",
      approach: "For urgent but not life-threatening problems, call the regional huisartsenpost; for life-threatening situations call 112.",
      firstStep: "Save both numbers in your phone before the first evening you need them.",
    },
    {
      situation: "Want to see a specialist directly",
      approach: "In most cases you start with the GP, who assesses and writes a referral when specialist care is indicated.",
      firstStep: "Book a GP consult and explain why you believe specialist assessment is needed.",
    },
    {
      situation: "Managing a chronic condition from abroad",
      approach: "Continuity depends on a written handover — the Dutch GP builds the file from your summary and then coordinates repeats and referrals.",
      firstStep: "Bring an English or Dutch medical summary plus current prescriptions with generic names.",
    },
  ] satisfies ScenarioRow[],
  snapshotSignals: [
    { label: "First contact", value: "Huisarts (GP)", note: "Illness, prescriptions and most referrals start at the family practice." },
    { label: "Registration", value: "Local catchment", note: "Most practices accept patients living near the practice only." },
    { label: "Specialists", value: "Referral letter", note: "A verwijzing is usually required for hospital and specialist care." },
    { label: "Out of hours", value: "Huisartsenpost / 112", note: "Call the GP post for urgent care; call 112 for life-threatening emergencies." },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "First contact & gatekeeper",
      body: "Your GP assesses new symptoms, treats what can be treated in the practice, and writes the referral that unlocks most specialist and hospital care.",
    },
    {
      title: "Local registration",
      body: "You usually register with one practice near home. Closed lists are common in busy cities — ask which nearby practices are accepting patients.",
    },
    {
      title: "Short, triaged appointments",
      body: "A standard consult is often around ten minutes. A practice assistant asks what the problem is before you get a slot — clear facts help.",
    },
    {
      title: "Referrals (verwijzing)",
      body: "Hospital outpatient clinics and many specialists expect a referral letter from your GP. Keep a copy for your own records.",
    },
    {
      title: "Prescriptions & pharmacy",
      body: "Prescriptions usually go digitally to your registered apotheek. Over-the-counter basics sit at the drogist; prescribed medicines at the pharmacy.",
    },
    {
      title: "Out-of-hours & emergencies",
      body: "Evenings and weekends: call the huisartsenpost for urgent GP-level care. Life-threatening situations: call 112 immediately.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Treat insurance and GP registration as two separate steps — finishing one does not finish the other.",
    "Save your GP daytime number and the regional huisartsenpost number before you need them.",
    "Keep one folder with BSN, insurance details, medical summary and current medication list.",
    "Ask whether staff speak English — many do, especially in international cities, but confirm rather than assume.",
    "Expect short ~10-minute consults — prepare three sentences before you arrive.",
    "Register with one nearby apotheek so digital prescriptions and repeats stay in one place.",
  ],
  howItWorks: {
    heading: "How the Dutch GP system works",
    paragraphs: [
      "Dutch primary care is organised around the huisarts as both clinician and coordinator. You contact the practice for most non-emergency problems. The practice assesses urgency, offers advice, a phone consult, an e-consult or an in-person appointment, and treats what belongs in general practice.",
      "When specialist assessment, diagnostics or hospital treatment are needed, the GP writes a referral letter (verwijzing). That letter is what most hospitals use to book and to bill your insurer. The design keeps continuity with one doctor who knows your history, and it means the quality of your GP relationship matters more than in systems where patients book specialists directly.",
      "Outside practice hours, urgent GP-level care moves to the regional huisartsenpost. Life-threatening emergencies go straight to 112. Understanding which door to use — daytime GP, out-of-hours post, or emergency services — removes most of the stress newcomers feel on the first difficult evening.",
    ],
    timeline: [
      {
        phase: "1",
        title: "Patient has a health question",
        detail:
          "New symptoms, follow-up, prescriptions, chronic condition questions or a worry that something needs checking.",
      },
      {
        phase: "2",
        title: "Contact the GP practice",
        detail:
          "Call, use online booking or send an e-consult. A practice assistant triages urgency and the type of contact needed.",
      },
      {
        phase: "3",
        title: "Assessment by the huisarts",
        detail:
          "In person, by phone or via e-consult, the GP assesses the problem, explains the working plan and agrees what should trigger a return visit.",
      },
      {
        phase: "4",
        title: "Treatment in the practice",
        detail:
          "Many issues are treated entirely in general practice — advice, monitoring, prescriptions, minor procedures or practice-nurse follow-up.",
      },
      {
        phase: "5",
        title: "Referral when needed",
        detail:
          "If specialist or hospital care is indicated, the GP writes a referral letter that unlocks the next step in the insured system.",
      },
      {
        phase: "6",
        title: "Hospital or specialist care",
        detail:
          "The hospital or clinic books from the referral. Letters ideally copy back to your GP so coordination stays in one place.",
      },
    ] satisfies TimelineStep[],
    principles: [
      "Start with the huisarts for almost every non-emergency concern.",
      "The GP is the usual gate to specialist and hospital outpatient care.",
      "Registration order matters: BSN and insurance first, then the practice.",
      "Out-of-hours urgent care is organised regionally through the huisartsenpost.",
      "112 is for life-threatening emergencies — use it without waiting for a GP slot.",
      "Continuity improves when one practice holds your history, allergies and medication list.",
    ],
    gatekeeperNote:
      "If you believe specialist assessment is needed, say so explicitly and ask what would need to be true for a referral. Asking directly is normal here — it is not considered rude.",
    flowLabels: ["Patient", "GP practice", "Treatment in practice", "Referral letter", "Hospital / specialist"],
  },
  whatGpDoes: {
    heading: "What a Dutch GP does",
    paragraphs: [
      "A huisarts is a fully trained medical doctor specialising in general practice. The role covers a wide range of first-line care: infections, injuries, skin problems, musculoskeletal complaints, women's and men's health questions, chronic disease follow-up, preventive advice and first assessment of mental health concerns.",
      "Many practices also include practice nurses and a mental health practice nurse (POH-GGZ). That team model means some follow-up happens with a nurse rather than always with the doctor — which is a normal feature of Dutch primary care, not a lower tier of care.",
      "What the GP generally does not do is replace hospital emergency departments for life-threatening events, or act as a direct booking desk for every specialist preference. The value of the role is continuity, triage and coordination across the rest of the system.",
    ],
    responsibilities: [
      "Assess and treat common illness, injuries and skin problems in the practice.",
      "Prescribe medication and manage repeat prescriptions for ongoing conditions.",
      "Order many first-line blood tests and imaging when indicated, then follow up results.",
      "Refer to specialists, diagnostics or hospital care when indicated.",
      "Follow chronic conditions such as asthma, diabetes or hypertension with practice nurses.",
      "Provide first-line mental health orientation and route patients to POH-GGZ or GGZ when appropriate.",
      "Coordinate with the pharmacy, hospital specialists and other providers around your record.",
      "Discuss work-absence documentation where the practice provides it — rules vary by employer.",
    ],
    limitations: [
      "Appointments are short — complex multi-issue visits may need a longer or double slot booked in advance.",
      "Most specialists are not booked directly by patients without a referral pathway.",
      "Home visits are selective and based on medical need and mobility, not convenience alone.",
      "English is widely available in many cities but not guaranteed at every practice.",
      "Preventive child checks and national childhood vaccinations often sit with JGZ rather than the GP.",
    ],
    teamRoles: [
      { role: "Huisarts (GP)", focus: "Assessment, diagnosis orientation, treatment plan, referrals and prescriptions." },
      { role: "Doktersassistent", focus: "Phone triage, appointment booking, admin and practical care questions." },
      { role: "Praktijkondersteuner (POH)", focus: "Chronic condition follow-up and structured monitoring." },
      { role: "POH-GGZ", focus: "First-line mental health conversations and stepped support inside the practice." },
    ],
  },
  registering: {
    heading: "How to register with a GP",
    paragraphs: [
      "Registering with a huisarts is one of the highest-leverage admin steps after you arrive. Practices need your identity details, BSN and insurance information, and they usually only accept patients who live in their catchment area. In popular city neighbourhoods, lists can be closed — being registered somewhere nearby is far better than searching while you are unwell.",
      "If your first choice is full, ask the assistant which neighbouring practices are accepting patients. Practice websites often have an aanmelden (registration) page; some use a shared regional registration tool. Bring or upload ID, insurance details and, if you have one, a medical summary from your previous doctor.",
      "After registration, save the daytime number, any practice urgent line, the regional huisartsenpost number and 112. Book an introduction or intake consult if offered — especially if you manage a chronic condition, allergies, pregnancy or regular medication.",
    ],
    howToSteps: [
      {
        name: "Confirm BSN and insurance",
        text: "Make sure you have a BSN from municipal registration and are registered on a Dutch basic health insurance policy. Practices ask for both when you register.",
      },
      {
        name: "Find practices accepting new patients",
        text: "Search for 'huisarts' with your postcode and check each practice website for an aanmelden page. Confirm the practice serves your address catchment area.",
      },
      {
        name: "Check practical fit",
        text: "Compare distance from home, opening hours, booking method, whether staff speak English, and experience with any condition you manage.",
      },
      {
        name: "Submit the registration form",
        text: "Complete the practice registration form with BSN, insurance details, date of birth and a copy of ID or residence documents where requested.",
      },
      {
        name: "Arrange transfer of medical history",
        text: "Ask your previous doctor for a medical summary and current medication list, in English or Dutch, and pass it to the new practice.",
      },
      {
        name: "Book an introduction appointment",
        text: "If the practice offers a kennismakingsgesprek or intake, use it to discuss chronic conditions, allergies, medication and how to reach the practice urgently.",
      },
      {
        name: "Save the numbers you will need in a hurry",
        text: "Store the practice daytime number, any practice urgent line, the regional huisartsenpost number and 112 in your phone.",
      },
    ] satisfies HowToStep[],
    timeline: [
      { phase: "Week 1", title: "After BSN and insurance", detail: "Start searching practices by postcode and shortlist those accepting patients." },
      { phase: "Week 1–2", title: "Submit registration", detail: "Complete aanmelden forms and send ID, insurance and medical summary documents." },
      { phase: "Week 2–3", title: "Confirmation & intake", detail: "Confirm you are on the list and book an introduction consult if available." },
      { phase: "Ongoing", title: "Keep details current", detail: "Update the practice when you move address, change insurer or start new long-term medication." },
    ] satisfies TimelineStep[],
    checklist: [
      "BSN ready and Dutch basic insurance active",
      "Postcode search for accepting practices",
      "Catchment area confirmed for your address",
      "Registration form submitted for every household member who needs care there",
      "Medical summary and medication list handed over",
      "Daytime GP and huisartsenpost numbers saved",
    ],
    closedListTips: [
      "Ask closed practices which nearby practices are still accepting patients — assistants usually know.",
      "Widen the search slightly beyond your immediate street if your neighbourhood is full.",
      "Register as soon as your address is stable — waiting lists change through the year.",
      "A slightly farther practice that accepts you is better than no registration at all.",
      "When changing GP, ask both practices about deregistration and medical-record transfer.",
      "Register each household member who needs care there — children are not automatic add-ons everywhere.",
    ],
  },
  booking: {
    heading: "Booking a GP appointment",
    paragraphs: [
      "Most practices ask you to explain the reason for contact when you book. That triage step decides whether you get advice only, a same-day slot, a planned consult, a phone consult or an e-consult. It is not meant to block care — it matches urgency to capacity.",
      "Being specific helps: say what the symptom is, how long it has lasted, what you have already tried, and what specifically worries you. If you have several issues, say so when booking and ask whether a longer or double appointment is possible.",
      "Booking channels vary by practice: phone during opening hours, online portals, apps or secure e-consult forms. Learn your practice's preferred route once, then reuse it.",
    ],
    tips: [
      "Lead with age (if booking for someone else), main symptom, duration and your key worry.",
      "Ask for same-day urgency if symptoms are escalating — triage will confirm what is possible.",
      "Use e-consult or phone consult for simple follow-ups when the practice offers them.",
      "Request a longer slot in advance when you need to discuss multiple or complex topics.",
      "Call early in the morning for same-day capacity — many practices release slots then.",
    ],
    callScript: [
      "Lead with: name, date of birth (BSN if asked), main symptom, duration, getting worse yes/no, and your main worry.",
      "If booking for someone else: state their age and whether they can travel to the practice.",
      "Ask explicitly for the contact type you need — same-day slot, phone consult, e-consult, or longer/double appointment.",
      "If the assistant offers advice-only first: ask what should trigger a callback or visit.",
      "End by confirming time, channel and anything you should bring.",
    ],
    haveReady: [
      "Name, date of birth and BSN if the practice asks for it",
      "Main symptom, start date and whether it is worsening",
      "Temperature, pain level or other simple measurements if relevant",
      "Medication already taken and known allergies",
      "What you want from the contact (exam, prescription, referral discussion, sick note)",
    ],
    scenarios: [
      {
        situation: "Woke up with escalating symptoms",
        approach: "Call as soon as the practice opens — same-day slots often release early.",
        firstStep: "State urgency, symptom and duration in one clear sentence.",
      },
      {
        situation: "Multiple issues or a chronic review",
        approach: "Request a longer or double slot when booking; do not try to squeeze three topics into ten minutes.",
        firstStep: "List topics in priority order before you call.",
      },
      {
        situation: "Simple results or admin question",
        approach: "Use e-consult or the portal if offered — that frees phone capacity for urgent triage.",
        firstStep: "Check the practice website for the preferred digital route.",
      },
      {
        situation: "Need care but the practice is closed",
        approach: "Do not leave a voicemail and wait — use the huisartsenpost for urgent non-emergency care.",
        firstStep: "Call the regional huisartsenpost number saved in your phone.",
      },
    ] satisfies ScenarioRow[],
    channels: [
      { channel: "Phone", bestFor: "Same-day urgency, unclear problems, booking help from the assistant." },
      { channel: "Online booking", bestFor: "Planned non-urgent consults when the portal shows open slots." },
      { channel: "E-consult", bestFor: "Simple written questions, results follow-up or admin medication requests where offered." },
      { channel: "Phone consult with GP", bestFor: "Advice and follow-up that does not need physical examination." },
    ],
  },
  consultation: {
    heading: "What to expect in a consultation",
    paragraphs: [
      "A standard Dutch GP consult is short — often around ten minutes. The conversation is direct: the GP focuses on the main problem, examines as needed, explains the working plan and agrees warning signs that should bring you back.",
      "Assessment-first care is common. You may leave with a monitoring plan and clear return criteria rather than an immediate prescription. That reflects Dutch prescribing culture and shared decision-making, not dismissal of your concern.",
      "Preparation turns a short slot into a useful one. Arrive with three sentences ready, your medication list, and one clear ask — diagnosis clarification, a prescription, a referral discussion or a sick-note related question, depending on your need.",
    ],
    prepareChecklist: [
      "One sentence describing the main problem",
      "How long it has lasted and whether it is getting worse",
      "What you have already tried",
      "Your current medication and allergy list",
      "The outcome you hope for from this visit",
      "Any documents or photos that help explain the problem",
    ],
    duringVisit: [
      "Lead with your main worry in the first minute.",
      "Answer triage and history questions factually — duration and severity matter.",
      "Ask what the GP is watching for and by when you should expect improvement.",
      "Ask explicitly if you think a referral may be needed.",
      "Confirm how repeat prescriptions or follow-up will work.",
    ],
    leaveWith: [
      "A clear plan for the next days or weeks",
      "Return-if-worse criteria written down",
      "Any prescription route to your pharmacy confirmed",
      "Any referral next step and timing explained",
    ],
    threeSentenceScript: [
      "Sentence 1: the main problem and how long it has lasted.",
      "Sentence 2: what is getting worse, what you have tried, and your biggest worry.",
      "Sentence 3: the outcome you hope for today — exam, plan, prescription discussion or referral conversation.",
    ],
  },
  referrals: {
    heading: "Referrals to specialists and hospitals",
    paragraphs: [
      "A referral letter (verwijzing) is the usual key to hospital outpatient clinics and many specialist services. The GP assesses whether specialist care is indicated, writes the referral, and the hospital or clinic uses it to schedule and to coordinate billing with your insurer.",
      "You can and should discuss referral requests openly. Explain symptoms, duration, functional impact and any previous investigations. Ask what would need to be true for a referral now versus a period of monitoring first.",
      "After a referral, keep a copy, check whether the hospital is contracted by your insurer, and ask that specialist letters are copied back to your GP so your primary-care file stays complete.",
    ],
    comparisonRows: [
      {
        topic: "Access to hospital outpatient clinic",
        withReferral: "Standard route — clinic books from the GP letter",
        withoutReferral: "Often limited; many clinics expect a referral first",
      },
      {
        topic: "Insurance reimbursement",
        withReferral: "Usually the expected pathway under basic insurance",
        withoutReferral: "May be declined or only partially reimbursed — verify with your insurer",
      },
      {
        topic: "Clinical coordination",
        withReferral: "GP remains the coordinator and receives follow-up letters",
        withoutReferral: "Harder to keep one continuous medical record",
      },
      {
        topic: "Urgency handling",
        withReferral: "GP can mark urgency and choose an appropriate pathway",
        withoutReferral: "Walk-in specialist access is not the Dutch default",
      },
    ] satisfies ComparisonRow[],
    tips: [
      "Ask for the referral reason to be stated clearly on the letter.",
      "Keep a digital or paper copy for your own records.",
      "Confirm the hospital is contracted by your insurer before the first visit.",
      "Tell the specialist your GP practice details so letters can be copied back.",
      "Ask whether the referral is routine or urgent, and what waiting-time band to expect.",
      "Ask who books whom after the letter — you, the hospital, or the practice.",
      "If symptoms worsen while waiting, call the practice and say the picture has changed.",
      "For a second opinion, ask your GP how that pathway works under your insurance.",
    ],
    afterReferralChecklist: [
      "Save a copy of the verwijzing / referral confirmation",
      "Confirm hospital or clinic name and insurer contracting",
      "Note expected waiting-time guidance from the GP",
      "Know who will contact whom to book the appointment",
      "Plan what to do if symptoms escalate before the specialist visit",
    ],
  },
  prescriptions: {
    heading: "Prescriptions and pharmacies",
    paragraphs: [
      "Dutch GPs usually send prescriptions digitally to your registered pharmacy (apotheek). Registering with one nearby pharmacy keeps interaction checks, repeats and dosing advice in one place.",
      "Prescribing culture is often more conservative than in some other countries — especially for antibiotics and some symptom-relief medicines. Ask what you should watch for and when to return if you expected a prescription and received a monitoring plan instead.",
      "For over-the-counter basics, the drugstore (drogist) is the usual first stop. Prescription-only medicines, many interactions checks and professional dosing advice sit with the apotheek. Out of hours, urgent dispensing may go through a regional dienstapotheek after contact with the huisartsenpost.",
    ],
    points: [
      "Register with one apotheek near home for a single medication record.",
      "Bring generic drug names — familiar brand names may differ or be unavailable.",
      "Repeat prescriptions are often requested via the practice portal or pharmacy, not only in a full consult.",
      "Some medicines carry a personal contribution — the pharmacy can tell you before dispensing.",
      "GP care itself is typically covered under basic insurance; medicine reimbursement follows national rules.",
    ],
    practicalTips: [
      "Request repeats about a week before you run out — portals and pharmacies need processing time.",
      "Brand names from abroad often differ — use INN / generic names with dose and frequency.",
      "Antibiotics are indication-based; ask return-if-worse criteria instead of assuming dismissal.",
      "Drogist = over-the-counter basics; apotheek = prescriptions, interaction checks and dosing advice.",
      "Travel: ask the pharmacy what documentation helps when carrying medicines abroad.",
    ],
    continuityChecklist: [
      "List every medicine with generic name, dose, frequency and reason",
      "Bring 2–4 weeks of supply to bridge registration where possible",
      "Ask which repeats can go via portal or pharmacy without a full consult",
      "Ask the apotheek about any eigen bijdrage before first dispense",
      "Note the dienstapotheek route for urgent out-of-hours medicines",
      "Update allergies and intolerances in the pharmacy record",
    ],
    pharmacyChecklist: [
      "Choose and register a nearby apotheek",
      "Share your GP practice details with the pharmacy",
      "Store a current medication and allergy list on your phone",
      "Ask how repeat requests work at your practice",
      "Know the regional out-of-hours pharmacy route for urgent needs",
    ],
  },
  homeVisits: {
    heading: "Home visits (visite)",
    paragraphs: [
      "Dutch GPs can visit patients at home when medically appropriate — for example when someone cannot reasonably travel to the practice because of acute illness, immobility or frailty. Home visits are assessed case by case through the practice or, outside hours, via the huisartsenpost.",
      "A preference for convenience alone is usually not enough. Many issues that feel urgent are still handled more effectively by phone triage first, then a practice visit if examination is needed and travel is possible.",
      "If you think a home visit is required, explain clearly why travel is not possible and what symptoms are present. The assistant or triage nurse will advise whether a visit, practice appointment, phone advice or emergency pathway fits.",
    ],
    whenTypical: [
      "Patient cannot travel due to acute illness or mobility limits",
      "Frail or bed-bound patients needing assessment at home",
      "Situations where triage judges examination at home is the safer option",
    ],
    whenNotTypical: [
      "Routine concerns where the patient can come to the practice",
      "Administrative requests that can be handled by phone or e-consult",
      "Life-threatening emergencies — call 112 instead of waiting for a GP visit",
    ],
    tips: [
      "Call the practice and explain mobility limits and symptoms clearly.",
      "Outside hours, use the huisartsenpost triage line rather than walking into hospital.",
      "Have address details, medication list and a phone number ready for the visiting doctor.",
      "Expect triage first — visit, practice appointment, phone advice or 112 may all be outcomes.",
      "Do not wait for a home visit if life may be at risk — call 112.",
    ],
    requestScript: [
      "Explain the symptoms and why travel is not possible (mobility, acute illness, frailty).",
      "Have address, door/entry code, phone number, medication list and BSN ready.",
      "Ask what the triage decision is: home visit, practice slot, phone advice or emergency pathway.",
      "Outside hours: request via the huisartsenpost, not a hospital walk-in.",
    ],
  },
  outOfHours: {
    heading: "Out-of-hours care (huisartsenpost)",
    paragraphs: [
      "When your own GP practice is closed — evenings, nights, weekends and public holidays — urgent GP-level care is organised through the regional out-of-hours GP post (huisartsenpost). You call first; a triage nurse assesses urgency and may give advice, arrange a phone consult, invite you to the post, or escalate.",
      "Hospital emergency departments are generally for emergencies and referred urgent care, not for routine after-hours primary care. Walking in with a non-emergency problem often results in redirection to the huisartsenpost pathway.",
      "Find your regional number once your address is known and save it beside 112. Your GP practice website or assistant can tell you which post covers your area.",
    ],
    points: [
      "Call first — do not assume a walk-in slot at the post or hospital.",
      "Have your BSN, insurer details, medication list and symptoms ready.",
      "Triage may resolve the issue with advice — that can be the right outcome.",
      "If symptoms become life-threatening while waiting, call 112 immediately.",
      "Follow-up with your own GP on the next working day when advised.",
    ],
    findNumberTips: [
      "Find your post on the GP website spoed / urgent-care page, ask the practice assistant, or search huisartsenpost + your postcode.",
      "Save the number, address and any entrance note — posts are often at a separate hospital entrance.",
      "What to say: location, age, symptom, onset speed, breathing/consciousness concerns, medication and allergies.",
      "Bring ID, insurance card or photo, and a medication list if you are invited to the post.",
      "Next working day: follow up with your own GP when triage advises it.",
    ],
    contrastRows: [
      { route: "Own GP (daytime)", when: "Practice opening hours", how: "Phone, online booking or e-consult", note: "Best for routine and same-day non-emergency care." },
      { route: "Huisartsenpost", when: "Evenings, nights, weekends, public holidays", how: "Call regional number first for triage", note: "Urgent GP-level care that cannot wait for the practice to reopen." },
      { route: "112", when: "Life-threatening emergency", how: "Call immediately", note: "Unresponsiveness, severe breathing difficulty, heavy bleeding, stroke signs, severe allergic reaction and similar crises." },
    ] satisfies ContactRouteRow[],
  },
  emergencyCare: {
    heading: "Emergency care: who should I contact?",
    paragraphs: [
      "Choosing the right door is one of the most useful skills for newcomers. Life-threatening emergencies go to 112. Urgent problems that cannot wait for your practice to reopen go to the huisartsenpost. Routine concerns wait for a normal GP appointment.",
      "Operators on 112 can work in English. When you call the huisartsenpost, state the main symptom, how fast it started, and what specifically worries you. If you are unsure whether something is life-threatening, call — triage exists to make that call with you.",
      "This section is orientation only. It cannot replace professional triage for your situation.",
    ],
    urgencyRows: [
      { situation: "Unresponsiveness, severe breathing difficulty, or suspected stroke", level: "emergency", action: "Call 112 immediately." },
      { situation: "Heavy bleeding, severe allergic reaction, or major trauma", level: "emergency", action: "Call 112 immediately." },
      { situation: "Chest pain with worrying features", level: "emergency", action: "Call 112 — do not wait for a GP appointment." },
      { situation: "High fever with rapid worsening outside practice hours", level: "urgent", action: "Call the huisartsenpost for triage." },
      { situation: "Severe pain or acute injury that cannot wait until morning", level: "urgent", action: "Call the huisartsenpost; they may advise the post or escalate." },
      { situation: "Urgent prescription need outside hours", level: "urgent", action: "Call the huisartsenpost — urgent dispensing may go via the dienstapotheek." },
      { situation: "Mild cold, minor symptoms, routine follow-up", level: "routine", action: "Book a normal GP appointment or use e-consult if offered." },
      { situation: "Repeat prescription for a stable condition", level: "routine", action: "Use your practice repeat process or pharmacy request route." },
      { situation: "Non-urgent referral discussion", level: "routine", action: "Book a planned GP consult and prepare your reasons." },
    ] satisfies UrgencyRow[],
    decisionTips: [
      "112 = life-threatening now.",
      "Huisartsenpost = urgent, cannot wait for practice hours, not clearly life-threatening.",
      "Own GP = routine and same-day non-emergency during opening hours.",
      "If unsure between 112 and the post, call 112 when life could be at risk.",
    ],
    numbers: [
      {
        title: "112 — emergency",
        body: "Life-threatening situations. Operators can work in English. Give your location first, then what is wrong.",
      },
      {
        title: "Own GP — daytime",
        body: "Same-day urgency and routine care during practice opening hours via phone, portal or e-consult.",
      },
      {
        title: "Huisartsenpost — out of hours",
        body: "Evenings, nights, weekends and public holidays. Call first for urgent non-life-threatening care.",
      },
      {
        title: "Dienstapotheek — urgent medicines",
        body: "Urgent out-of-hours dispensing after huisartsenpost triage when a medicine cannot wait.",
      },
    ],
    whatToSay: [
      "Full address and how to reach the door or entrance",
      "Age and what changed",
      "Breathing, consciousness, bleeding, chest pain or stroke-sign concerns",
      "Medication already taken and known allergies",
      "A callback number that will be answered",
    ],
    preparednessChecklist: [
      "Save 112 and your regional huisartsenpost number in your phone",
      "Keep a photo of your insurance card and your BSN somewhere accessible",
      "Store a medication and allergy list on your phone",
      "Know that SEH / A&E is not the default walk-in for primary care",
      "Agree a household plan for who calls and who meets responders",
    ],
    whenInDoubt: "If you are unsure whether a situation is life-threatening, call — triage staff would rather assess an unnecessary call than a delayed one.",
  },
  expatDifferences: {
    heading: "What often feels different for expats",
    paragraphs: [
      "Most friction newcomers feel with Dutch GPs comes from mismatched expectations, not from a broken system. The huisarts model is designed around continuity, triage and stepped care. Once you know the characteristics, the pathway becomes predictable.",
      "Advantages include a single coordinating doctor, strong primary-care coverage under basic insurance, organised out-of-hours GP services, and a clear emergency number. Limitations include short slots, referral requirements for many specialists, and variable English availability outside international hubs.",
      "Presenting these as system characteristics — rather than personal slights — makes conversations with practice staff easier and more effective.",
    ],
    cards: [
      {
        title: "Gatekeeper referrals",
        body: "You usually cannot book many hospital specialists directly. Care beyond the practice often needs a GP referral letter.",
        advice: "Register early and discuss referral requests explicitly with reasons and functional impact.",
      },
      {
        title: "Short, phone-triaged consults",
        body: "Ten-minute slots and assistant triage are standard. Unprepared visits feel rushed.",
        advice: "Prepare three sentences and ask for a longer appointment when you have multiple issues.",
      },
      {
        title: "Assessment-first prescribing",
        body: "Monitoring plans are common; antibiotics and some medicines are reserved for clearer indications.",
        advice: "Ask what should make you return and by when you should see improvement.",
      },
      {
        title: "Local catchment registration",
        body: "Practices serve defined areas and may close lists in busy neighbourhoods.",
        advice: "Search by postcode early and accept a nearby practice that is open rather than waiting indefinitely.",
      },
      {
        title: "Call-first out-of-hours care",
        body: "Evening and weekend care starts with the huisartsenpost phone line, not a hospital walk-in.",
        advice: "Save the regional number now and call first outside practice hours.",
      },
      {
        title: "English availability varies",
        body: "Many city practices manage English well; it is less consistent everywhere.",
        advice: "Ask when registering, and bring a written symptom summary if language feels uncertain.",
      },
    ] satisfies MistakeCard[],
    advantages: [
      "One coordinating doctor who holds your history",
      "Clear daytime vs out-of-hours vs emergency pathways",
      "Strong primary-care role inside basic health insurance",
      "Digital prescriptions and organised pharmacy repeats",
    ],
    limitations: [
      "Short standard appointments",
      "Referral step before many specialists",
      "Closed lists in some neighbourhoods",
      "English not guaranteed at every practice",
    ],
  },
  childrenFamily: {
    heading: "Children and family care",
    paragraphs: [
      "Families usually register children at the same huisarts practice as the parents. The GP handles childhood illness, injuries, prescriptions and referrals to paediatric specialists. Preventive care — growth checks, developmental screening and many childhood vaccinations — often runs through Youth Healthcare (JGZ) and the consultatiebureau rather than only through the GP.",
      "That split is a system characteristic: illness and referrals with the GP; scheduled prevention with JGZ. You need both set up for a complete children's healthcare pathway.",
      "For the full children's healthcare cornerstone — insurance for under-18s, JGZ, vaccinations, hospitals and emergencies — use the Healthcare for Children guide.",
    ],
    points: [
      "Register every child on the family GP list before the first fever.",
      "Illness, injury and specialist referrals → GP; growth, screening and many vaccines → JGZ / consultatiebureau.",
      "Bring foreign vaccination records to both JGZ and the GP file.",
      "Ask the practice how they handle under-3-month fever and same-day child slots.",
      "Save the huisartsenpost number for urgent out-of-hours childhood concerns.",
      "For insurance under 18, dentist pathways and hospital detail, open the children's healthcare guide.",
    ],
    splitCards: [
      {
        title: "Family huisarts (illness)",
        body: "Fever, injury, rashes, prescriptions, referrals to paediatric specialists and urgent day-time triage for registered children.",
      },
      {
        title: "JGZ / consultatiebureau (prevention)",
        body: "Growth checks, developmental screening, many childhood vaccinations and scheduled preventive appointments.",
      },
    ],
    crossLink: {
      label: "Healthcare for Children in the Netherlands",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      description:
        "Complete orientation for expat families — GP care for children, Youth Healthcare (JGZ), vaccinations, specialists, dental care and emergencies.",
      status: "live" as const,
    },
  },
  mentalHealth: {
    heading: "Mental health and the GP (orientation)",
    paragraphs: [
      "For many people in the Netherlands, the huisarts is the first contact for stress, anxiety, low mood, sleep problems or other mental health concerns. This is orientation only — not diagnosis, not treatment advice, and not a substitute for professional care.",
      "Many practices have a mental health practice nurse (POH-GGZ) who can offer structured conversations and help decide whether further GGZ support is appropriate. The GP can also discuss referral options when stepped care beyond the practice is needed.",
      "If you or someone else is in immediate danger, call 112. For suicidal thoughts, the national 113 service is a dedicated crisis resource. Practice staff can help you navigate non-emergency next steps during opening hours.",
    ],
    points: [
      "Start with your GP for non-emergency mental health concerns in many cases.",
      "Ask whether the practice has a POH-GGZ and how to book that route — it is often a different slot type.",
      "Referral into specialist mental health care is a stepped pathway — waiting times vary.",
      "Ask what interim support exists while waiting for GGZ.",
      "Crisis: 112 for immediate danger; 113 for suicidal thoughts support.",
    ],
    routes: [
      {
        title: "GP first contact",
        body: "Common starting point for non-emergency concerns — assessment, advice and next-step planning.",
      },
      {
        title: "POH-GGZ",
        body: "Practice-based mental health nurse conversations and stepped support inside primary care.",
      },
      {
        title: "GGZ referral",
        body: "Specialist mental health pathway when indicated; waiting times and entry criteria vary.",
      },
      {
        title: "Crisis routes",
        body: "112 for immediate danger; 113 for suicidal thoughts support — do not wait for a routine GP slot.",
      },
    ],
    worthDiscussing: [
      "Sleep, mood or anxiety lasting weeks and limiting daily life",
      "Work or study avoidance, or a sudden drop in functioning",
      "Substance-use concerns you want help navigating",
      "Anything about self-harm or not wanting to live — seek urgent help",
    ],
    disclaimer:
      "This section provides system orientation only. It does not assess, diagnose or treat mental health conditions. Seek professional help for your own situation.",
    comingSoonNote: "A dedicated adult mental health guide is planned. Until then, start with your GP and the official crisis resources above.",
  },
  mistakes: {
    heading: "Common mistakes expats make",
    intro:
      "These patterns create avoidable stress. Each includes a practical Fix so you can adapt to the system rather than fight it.",
    cards: [
      {
        title: "Waiting until you are ill to register",
        body: "Example: searching closed city lists on a Friday night with fever — assistants triage registered patients first.",
        advice: "Register in week 1–2 after BSN and insurance are in place.",
      },
      {
        title: "Walking into A&E for non-emergencies",
        body: "Example: arriving at SEH with a non-emergency problem and being redirected to the huisartsenpost pathway.",
        advice: "Use your GP by day and the huisartsenpost out of hours; call 112 for life-threatening situations.",
      },
      {
        title: "Expecting to book specialists directly",
        body: "Example: calling a hospital clinic and being told to return with a GP verwijzing.",
        advice: "Book a GP consult and present a clear case for why specialist assessment is needed.",
      },
      {
        title: "Arriving unprepared for a short consult",
        body: "Example: ten minutes gone before the main worry is clear.",
        advice: "Prepare three sentences, lead with your main worry, and ask for return-if-worse criteria.",
      },
      {
        title: "Assuming every practice speaks English",
        body: "Example: registering without asking, then struggling to explain symptoms under pressure.",
        advice: "Ask when registering and bring a written summary if helpful.",
      },
      {
        title: "Skipping pharmacy registration",
        body: "Example: prescriptions bouncing between pharmacies with incomplete interaction checks.",
        advice: "Register with one nearby pharmacy when you register with your GP.",
      },
    ] satisfies MistakeCard[],
    adaptationTips: [
      "Start with the huisarts for almost every new non-emergency concern.",
      "Treat referrals as a normal pathway, not a personal barrier.",
      "Save 112 and the huisartsenpost number before the first difficult evening.",
      "Ask directly for what you need — longer slots, referrals, or clarification of the plan.",
      "Keep your own copies of letters, medication lists and referral documents.",
      "Update the practice promptly after you move address or change insurer.",
    ],
  },
  checklist: {
    heading: "GP setup checklist for expats",
    intro: "Work through these steps once your address, BSN and insurance are in motion.",
    tips: [
      "Do insurance and GP registration as parallel early priorities.",
      "Print or screenshot the checklist into your move admin folder.",
      "Revisit the list after you move house — catchment areas are address-based.",
    ],
    early: [
      "Confirm BSN and Dutch basic health insurance",
      "Search huisarts practices by postcode",
      "Shortlist practices accepting new patients",
      "Ask about English language if you need it",
    ],
    registration: [
      "Submit the aanmelden form with ID and insurance details",
      "Transfer medical summary and medication list",
      "Confirm registration for each household member",
      "Book an intake or introduction consult if offered",
    ],
    readiness: [
      "Save GP daytime number and any urgent practice line",
      "Save regional huisartsenpost number and 112",
      "Register with a nearby apotheek",
      "Learn the practice booking and repeat-prescription process",
      "Confirm preferred hospitals are contracted by your insurer",
      "Ask about English language preference at registration if you need it",
      "Read the emergency decision section once while calm",
    ],
    full: [
      "BSN and insurance confirmed",
      "GP practice registered and confirmed",
      "Medical history transferred",
      "Intake completed if needed",
      "Pharmacy registered",
      "Emergency and out-of-hours numbers saved",
      "Household members registered where appropriate",
      "Know daytime vs huisartsenpost vs 112",
      "Medication and allergy list stored on your phone",
      "Annual reminder to update address and insurer details",
    ],
  },
  faq: [
    {
      q: "What is a huisarts / GP in the Netherlands?",
      a: "A huisarts is a Dutch general practitioner — a fully trained medical doctor who provides first-line care and coordinates much of what happens beyond the practice. For most non-emergency problems, the huisarts is the usual starting point for assessment, treatment, prescriptions and referrals.",
    },
    {
      q: "Do I need to register with a GP?",
      a: "In practice, yes, if you want reliable access to primary care. Practices need you on their patient list before routine booking and continuity work smoothly. Register once your BSN and Dutch health insurance are in place, ideally before you need urgent care.",
    },
    {
      q: "How do I find and register with a GP?",
      a: "Search for huisarts practices near your postcode, check which ones accept new patients and serve your catchment area, then complete the practice registration (aanmelden) form with BSN, insurance details and ID. Hand over a medical summary if you have one, and save the practice and huisartsenpost numbers afterwards.",
    },
    {
      q: "Can I see a specialist without a GP referral?",
      a: "Often not for hospital outpatient care. Many specialists and clinics expect a referral letter (verwijzing) from your GP. Some private or specific pathways differ — verify with the clinic and your insurer — but the standard insured route starts with the huisarts.",
    },
    {
      q: "How do I book a GP appointment?",
      a: "Call the practice, use online booking, or send an e-consult if offered. A practice assistant usually asks what the problem is to match urgency and appointment type. Be specific about symptoms, duration and your main worry.",
    },
    {
      q: "What happens when my GP practice is closed?",
      a: "For urgent GP-level care in evenings, nights, weekends and public holidays, call your regional huisartsenpost. They triage by phone and may give advice, arrange a visit to the post, or escalate. For life-threatening emergencies, call 112 instead.",
    },
    {
      q: "When should I call 112 instead of the huisartsenpost?",
      a: "Call 112 for life-threatening situations such as unresponsiveness, severe breathing difficulty, heavy bleeding, signs of stroke, severe allergic reaction or major trauma. Use the huisartsenpost for urgent problems that are not life-threatening but cannot wait until your practice reopens. If life may be at risk, call 112.",
    },
    {
      q: "Do Dutch GPs speak English?",
      a: "Many do, especially in internationally oriented cities and practices, but it is not guaranteed everywhere. Ask when you register. If language feels uncertain, bring a short written summary of symptoms and medication.",
    },
    {
      q: "How do prescriptions work?",
      a: "GPs usually send prescriptions digitally to your registered pharmacy (apotheek). Register with one nearby pharmacy so repeats and interaction checks stay in one place. Bring generic drug names, and ask the pharmacist about any personal contribution before dispensing.",
    },
    {
      q: "Can the GP visit me at home?",
      a: "Yes, when medically appropriate — for example if you cannot reasonably travel to the practice. Home visits are assessed case by case via the practice or huisartsenpost. Life-threatening emergencies still go to 112 rather than waiting for a home visit.",
    },
    {
      q: "Is GP care covered by Dutch health insurance?",
      a: "GP care is part of the basic insurance package. Rules around the annual deductible (eigen risico) and medicine reimbursement can still affect related costs — verify your own policy with your insurer. Children under 18 are treated differently for premiums and deductible; see the children's healthcare guide for family details.",
    },
    {
      q: "What if practices near me are full?",
      a: "Ask closed practices which nearby lists are open, widen your search slightly, and register as soon as your address is stable. A slightly farther accepting practice is better than remaining unregistered.",
    },
    {
      q: "Does a GP visit cost eigen risico?",
      a: "GP care itself is part of basic insurance. Related costs — medicines, diagnostics or hospital care — can still hit the annual deductible (eigen risico) for adults. Verify your own policy with your insurer.",
    },
    {
      q: "Can I change GP or register temporarily?",
      a: "Yes if another practice accepts you and serves your address. Ask about deregistration and medical-record transfer. Temporary options vary by practice and situation — ask the practice and your insurer.",
    },
    {
      q: "Will the GP write a sick note for my employer?",
      a: "Practices handle arbeidsverzuim documentation differently. Ask what paperwork they provide and what your employer expects — rules and forms vary by workplace.",
    },
    {
      q: "What if I am not registered yet and need care?",
      a: "Call practices for urgent daytime advice if they can help; for urgent out-of-hours care call the huisartsenpost; for life-threatening situations call 112. Register as soon as possible for continuity.",
    },
    {
      q: "How do I get blood tests or imaging?",
      a: "These are often ordered by the GP after assessment when indicated. The practice or lab explains booking and how results are followed up — ask who will contact whom.",
    },
  ],
  faqQuickReference: [
    "Register a local huisarts after BSN and insurance are in place.",
    "Most specialist care needs a GP referral letter.",
    "Daytime GP → huisartsenpost out of hours → 112 for life-threatening emergencies.",
    "Appointments are short and phone-triaged — prepare three sentences.",
    "Register with one pharmacy for prescriptions and repeats.",
    "Ask about English when registering; confirm rather than assume.",
    "GP care is in basic insurance; related costs can still hit eigen risico — verify with your insurer.",
  ],
  howToSchema: {
    name: "Register with a GP in the Netherlands",
    description:
      "Step-by-step orientation for expats registering with a Dutch general practitioner (huisarts), including BSN and insurance requirements, choosing a practice and transferring medical records.",
    anchor: "#registering",
  },
  relatedGuidesTips: [
    "Insurance not arranged yet → start with the health insurance guide.",
    "Want the wider system map → healthcare basics.",
    "Family with children → healthcare for children cornerstone.",
    "Emergency planning → emergency healthcare cornerstone.",
  ],
  relatedGuides: [
    { label: "Health Insurance in the Netherlands", href: HEALTH_INSURANCE_PATH, status: "live", description: "Basic package, deductible, choosing an insurer and supplementary cover." },
    { label: "Dentists in the Netherlands", href: "/netherlands/health/dentists-netherlands/", status: "live", description: "Finding a dentist, dental insurance, check-ups, emergency care and orthodontics." },
    { label: "Emergency Healthcare", href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH, status: "live", description: "112, Huisartsenpost, SEH, ambulance and urgent-care pathways." },
    { label: "Healthcare Basics", href: HEALTHCARE_BASICS_PATH, status: "live", description: "How Dutch healthcare fits together for everyday living." },
    { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "live", description: "GPs, JGZ, vaccinations, specialists and emergencies for children." },
    { label: "Emergencies & Safety", href: EMERGENCIES_SAFETY_PATH, status: "live", description: "Broader living guide for emergency numbers, safety and day-to-day readiness." },
    { label: "Health System Culture Basics", href: HEALTH_SYSTEM_CULTURE_PATH, status: "live", description: "How care interactions often feel in Dutch healthcare culture." },
    { label: "Pharmacies (Apotheek)", href: HEALTHCARE_BASICS_PATH + "#care-settings", status: "live", description: "Pharmacy orientation inside the healthcare basics guide until a dedicated page ships." },
    { label: "Mental Health Guide", href: "#mental-health", status: "comingSoon", description: "Dedicated adult mental health cornerstone — planned." },
  ] satisfies GpLink[],
  healthcareHubTips: [
    "Primary care, insurance and emergencies are decided together — finish registration first.",
    "This page is the GP cornerstone; healthcare basics maps the wider system.",
    "Families should also read the children's healthcare guide for JGZ and paediatric pathways.",
    "Oral healthcare sits with the dentists guide — separate from the huisarts pathway.",
  ],
  healthcareHubCards: [
    { label: "General Practitioner (GP)", href: GP_NETHERLANDS_PATH, status: "live", description: "Huisarts registration, appointments, referrals and emergencies — you are here." },
    { label: "Dentists", href: "/netherlands/health/dentists-netherlands/", status: "live", description: "Dental care, insurance, check-ups and emergency dentists." },
    { label: "Emergency Healthcare", href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH, status: "live", description: "112, Huisartsenpost, SEH and ambulance pathways." },
    { label: "Health Insurance", href: HEALTH_INSURANCE_PATH, status: "live", description: "Basic package and insurer setup." },
    { label: "Healthcare Basics", href: HEALTHCARE_BASICS_PATH, status: "live", description: "System overview for everyday living." },
    { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "live", description: "Family and children's healthcare cornerstone." },
  ] satisfies GpLink[],
  exploreNextCards: [
    { label: "Health Insurance", href: HEALTH_INSURANCE_PATH, status: "live", description: "Arrange the policy that covers GP and hospital care." },
    { label: "Emergency Healthcare", href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH, status: "live", description: "Know which door to use before the first difficult evening." },
    { label: "Healthcare Basics", href: HEALTHCARE_BASICS_PATH, status: "live", description: "See how pharmacies, hospitals and urgent care fit together." },
    { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "live", description: "Family GP care, JGZ and paediatric pathways." },
    { label: "Health System Culture", href: HEALTH_SYSTEM_CULTURE_PATH, status: "live", description: "What care conversations often feel like here." },
  ] satisfies GpLink[],
  exploreNextTips: [
    "Coverage questions still open → health insurance guide.",
    "Want the full system map → healthcare basics.",
    "Moving with children → healthcare for children.",
    "Need emergency clarity → emergency healthcare cornerstone.",
    "Curious about interaction style → health system culture basics.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks before your first visit",
      items: [
        "Confirm basic insurance and keep the policy number handy.",
        "Register a huisarts near home for illness and referrals.",
        "Learn how your practice books and triages appointments.",
        "Save emergency routes — 112 and your local huisartsenpost.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "First contact: the huisarts assesses and treats in primary care.",
        "Registration: local catchment, sometimes closed lists.",
        "Short consults: about ten minutes — prepare three sentences.",
        "Referrals: specialist access usually needs a verwijzing.",
        "Pharmacy: register one apotheek for digital recipes and repeats.",
        "Out of hours: huisartsenpost for urgent care; 112 for emergencies.",
      ],
    },
    howItWorks: {
      title: "From the visual — the care pathway",
      items: [
        "Patient contacts the practice; triage matches urgency to slot type.",
        "GP treats in practice when possible.",
        "Referral letter unlocks hospital and specialist pathways.",
        "Continuity improves when letters copy back to your GP.",
      ],
    },
    whatGpDoes: {
      title: "From the visual — GP responsibilities",
      items: [
        "Illness, injuries, prescriptions and chronic follow-up.",
        "First-line mental health orientation and POH-GGZ where available.",
        "Referral and coordination with pharmacy and specialists.",
        "Not a replacement for 112 in life-threatening emergencies.",
      ],
    },
    registering: {
      title: "From the visual — registration sequence",
      items: [
        "BSN and insurance first, then postcode search.",
        "Confirm catchment and accepting status.",
        "Submit aanmelden and transfer medical history.",
        "Save daytime GP and huisartsenpost numbers.",
      ],
    },
    booking: {
      title: "From the visual — booking tips",
      items: [
        "Use the call script: symptom, duration, worse yes/no, main worry.",
        "Have BSN, medication and what you want from the contact ready.",
        "Use phone for same-day urgency; portals and e-consults for planned or simple follow-ups.",
        "Ask for a longer appointment when you have multiple issues.",
        "If the practice is closed, call the huisartsenpost — do not wait on voicemail.",
      ],
    },
    consultation: {
      title: "From the visual — make a short consult work",
      items: [
        "Use a three-sentence script in the first minute.",
        "Bring medication and allergy lists.",
        "Ask what should make you come back.",
        "Leave with a written plan and next-step owners when possible.",
      ],
    },
    referrals: {
      title: "From the visual — referral essentials",
      items: [
        "Most hospital outpatient care expects a GP letter.",
        "Discuss referral requests openly with reasons and urgency.",
        "Keep a copy and check insurer contracting.",
        "Know who books whom and what to do if symptoms escalate while waiting.",
      ],
    },
    prescriptions: {
      title: "From the visual — pharmacy practicalities",
      items: [
        "Register with one apotheek near home.",
        "Prescriptions often arrive digitally from the GP.",
        "Use generic drug names and request repeats before you run out.",
        "Drogist for OTC basics; apotheek for prescriptions and interaction checks.",
      ],
    },
    homeVisits: {
      title: "From the visual — home visit orientation",
      items: [
        "Home visits are based on medical need and mobility.",
        "Explain clearly why travel is not possible.",
        "Out of hours, triage goes via the huisartsenpost.",
        "Life-threatening situations still go to 112.",
      ],
    },
    outOfHours: {
      title: "From the visual — huisartsenpost basics",
      items: [
        "Evenings, nights, weekends and public holidays.",
        "Find and save your regional number before you need it.",
        "Call first for triage — advice or appointment may follow.",
        "Follow up with your own GP when advised.",
      ],
    },
    emergencyCare: {
      title: "From the visual — choose the right door",
      items: [
        "112: life-threatening now.",
        "Huisartsenpost: urgent, cannot wait, not life-threatening.",
        "Own GP: routine and daytime same-day care.",
        "Have address, medication and callback number ready when you call.",
      ],
    },
    expatDifferences: {
      title: "From the visual — system characteristics",
      items: [
        "Gatekeeper referrals are design, not personal obstruction.",
        "Short triaged slots reward preparation.",
        "Assessment-first prescribing is common.",
        "Call-first out-of-hours care is the default.",
        "English availability varies — ask when registering.",
      ],
    },
    childrenFamily: {
      title: "From the visual — family pathways",
      items: [
        "Register children on the family GP list before the first fever.",
        "Illness → GP; prevention and many vaccines → JGZ.",
        "Bring foreign vaccination records to both systems.",
        "Use the Healthcare for Children guide for full detail.",
      ],
    },
    mentalHealth: {
      title: "From the visual — mental health orientation",
      items: [
        "GP is a common first contact for non-emergency concerns.",
        "Ask about POH-GGZ booking inside the practice.",
        "Further GGZ support follows a stepped pathway.",
        "Crisis: 112 for immediate danger; 113 for suicidal thoughts.",
      ],
    },
    mistakes: {
      title: "From the visual — mistakes with fixes",
      items: [
        "Late registration → register in the first weeks.",
        "A&E walk-ins for non-emergencies → GP or huisartsenpost.",
        "Direct specialist expectations → start with a referral discussion.",
        "Unprepared consults → three-sentence prep every time.",
        "Assuming English → ask when registering.",
        "Skipping pharmacy registration → choose one apotheek early.",
      ],
    },
    checklist: {
      title: "From the visual — checklist priorities",
      items: [
        "Insurance and GP registration first.",
        "Transfer records and complete intake.",
        "Save 112 and huisartsenpost numbers.",
        "Register a pharmacy, learn repeats and check hospital contracting.",
      ],
    },
    faq: {
      title: "From the visual — top questions answered",
      items: [
        "Register locally after BSN and insurance.",
        "Referrals unlock most specialist care.",
        "Huisartsenpost for urgent out-of-hours GP care.",
        "112 for life-threatening emergencies.",
        "GP care is in basic insurance; related costs can still hit eigen risico.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next by need",
      items: [
        "Insurance → health insurance guide.",
        "System map → healthcare basics.",
        "Children → healthcare for children.",
        "Emergency planning → emergencies and safety.",
      ],
    },
    healthcareHub: {
      title: "From the visual — the healthcare cluster",
      items: [
        "GP cornerstone (this page): registration to emergencies.",
        "Insurance and basics: coverage and system overview.",
        "Family: children's healthcare pathway.",
        "Coming soon: dedicated hub, pharmacy and hospital pages.",
      ],
    },
    exploreNext: {
      title: "From the visual — choose the card matching your next need",
      items: [
        "Health insurance → coverage and policy setup.",
        "Healthcare basics → pharmacies, hospitals and urgent care map.",
        "Children or emergencies → family care or safety planning.",
        "Culture basics → how care conversations often feel.",
      ],
    },
  },
  sourceUsageTips: [
    "Use Government.nl for official rules on health insurance and how care is organised.",
    "Use Thuisarts.nl for reliable everyday symptom information written with Dutch GPs.",
    "Use NHG for professional general-practice standards context — not as personal medical advice.",
    "Use NZa for regulator information on patient rights and healthcare market rules.",
    "Use Rijksoverheid and your insurer portal for entitlements, contracting and reimbursement questions.",
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
      label: "Thuisarts.nl",
      href: "https://www.thuisarts.nl/",
      description: "Reliable, non-commercial health information used widely with Dutch general practice.",
    },
    {
      label: "NHG — Dutch College of General Practitioners",
      href: "https://www.nhg.org/",
      description: "Professional body for huisartsen — standards and primary-care organisation context.",
    },
    {
      label: "NZa — Dutch Healthcare Authority",
      href: "https://www.nza.nl/english",
      description: "Regulator information on healthcare rules, supervision and patient-facing rights orientation.",
    },
    {
      label: "Rijksoverheid — Healthcare",
      href: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering",
      description: "Dutch government topic pages on health insurance and care organisation.",
    },
  ],
  officialSourcesNote:
    "General information only — not medical advice. Local practice rules, insurer contracting and clinical pathways change, so verify your own situation with your GP, insurer and the official sources above. In an emergency, call 112.",
} as const;

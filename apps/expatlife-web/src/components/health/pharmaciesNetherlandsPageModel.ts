export const PHARMACIES_NETHERLANDS_PATH = "/netherlands/health/pharmacies-netherlands/" as const;
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
export const PRESCRIPTIONS_NETHERLANDS_PATH = "/netherlands/health/prescriptions-netherlands/" as const;
export const PHYSIOTHERAPY_NETHERLANDS_PATH = "/netherlands/health/physiotherapy-netherlands/" as const;
export const MATERNITY_CARE_NETHERLANDS_PATH = "/netherlands/health/maternity-care-netherlands/" as const;
export const HEALTH_INSURANCE_COMPARISON_PATH =
  "/netherlands/health/health-insurance-comparison-netherlands/" as const;

export type PharmacyLink = {
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
const VISUAL_PREFIX = "pharmacies-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const pharmaciesNetherlandsPage = {
  slug: "pharmacies-netherlands",
  path: PHARMACIES_NETHERLANDS_PATH,
  hubPath: HEALTH_HUB_PATH,
  parentGuidePath: HEALTHCARE_BASICS_PATH,
  publish: true,
  publishDate: "2027-02-15",
  seo: {
    title: "Pharmacies in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how Dutch pharmacies (apotheken) work for expats — finding one, opening hours, OTC vs prescription pickup, service desk, medication counseling and emergency pharmacy orientation.",
    keywords: [
      "pharmacies Netherlands",
      "pharmacy Netherlands",
      "apotheek Netherlands",
      "Dutch pharmacy",
      "prescription Netherlands",
      "OTC pharmacy Netherlands",
      "dienstapotheek",
      "emergency pharmacy Netherlands",
      "medication counseling Netherlands",
      "expat pharmacy Netherlands",
      "pharmacy opening hours Netherlands",
      "zelfzorg middelen",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Health · Pharmacies",
    pageTitle: "Pharmacies in the Netherlands",
    subtitle:
      "How Dutch pharmacies (apotheken) work for expats — finding one, opening hours, OTC vs prescription pickup, the service desk, medication counseling and emergency pharmacy orientation.",
    primaryCta: { label: "Understand How Pharmacies Work", href: "#how-it-works" },
    secondaryCta: { label: "Explore Healthcare Guides", href: "#related-guides" },
    chips: ["Apotheek", "Opening hours", "OTC vs Rx", "Service desk", "Counseling", "Dienstapotheek"],
    disclaimer:
      "General orientation only — not medical advice, not a recommendation of any pharmacy or medicine, and not dosing guidance. For your own medicines, speak with your GP, pharmacist or treating clinician. Call 112 for life-threatening emergencies.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic Dutch apotheek interior — multicultural pharmacist at a bright service desk counseling an expat customer with labelled shelving and a canal-street bicycle scene visible through the window, calm welcoming light, no medical procedures.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#finding", label: "Finding a pharmacy" },
    { href: "#opening-hours", label: "Opening hours" },
    { href: "#otc-vs-rx", label: "OTC vs Rx" },
    { href: "#service-desk", label: "Service desk" },
    { href: "#counseling", label: "Counseling" },
    { href: "#emergency", label: "Emergency pharmacy" },
    { href: "#costs", label: "Costs" },
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
    intro: {
      src: `/images/infographics/${VISUAL_PREFIX}-intro-premium-v2.png`,
      alt: "Premium orientation board titled Before Your First Apotheek Visit — four building blocks: understand the basics, prepare your information, organize your health history, and know what to expect — with a Pharmacy File Checklist for ID, BSN, insurance, prescriptions, medication list and language needs.",
      caption:
        "Four building blocks cover readiness: how pharmacies work, documents to bring, your medicine history, and what to expect at the counter.",
    },
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch pharmacies — finding an apotheek, opening hours, OTC versus prescription pickup, service desk, medication counseling, and emergency dienstapotheek — each with a one-line role description and a small Dutch-word label.",
      "Six building blocks explain almost every pharmacy question — the sections below add practical detail."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium pharmacy pathway flow — GP or specialist issues a prescription, digital or paper route reaches the apotheek, pharmacist checks and prepares, counseling at the counter, pickup, and follow-up questions back to GP or pharmacy — calm Dutch street pharmacy backdrop.",
      "Most prescription journeys run from clinician to apotheek to counseling to pickup — with the GP still coordinating care."
    ),
    finding: visual(
      "finding",
      "Premium finding-a-pharmacy map — search by postcode for apotheek, prefer one near home or GP, ask about English support and registration, save opening hours and out-of-hours dienstapotheek note — with route cards from home to pharmacy.",
      "Choose a regular daytime pharmacy near home, confirm hours and language, then save the out-of-hours route separately."
    ),
    openingHours: visual(
      "opening-hours",
      "Premium opening-hours board — weekday daytime apotheek, Saturday morning patterns, closed evenings and Sundays for many practices, and a clear dienstapotheek card for urgent out-of-hours medicines after triage guidance.",
      "Daytime pharmacies have limited hours — urgent medicines outside those hours use the regional dienstapotheek after triage."
    ),
    otcVsRx: visual(
      "otc-vs-rx",
      "Premium OTC versus prescription comparison board — zelfzorg / OTC products available without a prescription, prescription-only medicines that need a valid recept, and a note that deep e-prescription and herhaalrecept mechanics belong on the Prescriptions guide.",
      "OTC is self-care; prescription medicines need a valid recept — this page orients pickup, not deep e-prescription mechanics."
    ),
    serviceDesk: visual(
      "service-desk",
      "Premium service-desk scene — numbered ticket or queue, counter conversation, privacy for counseling, medication bag with leaflet, and a right-side rail of what to bring: ID, BSN, insurance card, allergy list and questions.",
      "The service desk is where pickup, short questions and first counseling happen — arrive prepared and expect a short wait."
    ),
    counseling: visual(
      "counseling",
      "Premium medication counseling board — first dispense begeleidingsgesprek, how to take the medicine, side-effect signals to report, interactions and allergies checked, and when to contact the GP — supportive consultation scene without dosing advice presented as treatment.",
      "Pharmacists counsel on safe use — especially at first dispense — while clinical decisions stay with your GP or specialist."
    ),
    emergency: visual(
      "emergency",
      "Premium emergency pharmacy orientation board — daytime regular apotheek, huisartsenpost triage for urgent medicines after hours, regional dienstapotheek, and a cross-link card to the Emergency Healthcare guide — no invented phone numbers.",
      "Out-of-hours dispensing is regional and usually follows triage — know the pattern before you need it."
    ),
    costs: visual(
      "costs",
      "Premium pharmacy cost orientation board — prescribed medicines usually billed via basic insurance with adult eigen risico, OTC often self-pay, possible pharmacy service fees, and a verify-with-insurer reminder — desk scene with Dutch canal context.",
      "Prescribed medicines often route through insurance; OTC is usually self-pay — verify your own policy and remaining deductible."
    ),
    differences: visual(
      "differences",
      "Premium surprise cards for expats about Dutch pharmacies — pharmacies differ from drugstores, limited opening hours, counseling is normal, many OTC products sit in drugstores too, and emergency pharmacy is regional not 24/7 at every shop.",
      "Most surprises are system design — once you expect them, pharmacy visits become predictable."
    ),
    checklist: visual(
      "checklist",
      "Premium pharmacy visit preparation board — ID, BSN, insurance card, medication and allergy list, questions written down, pickup confirmation, and four role cards for you, companion, pharmacist and GP.",
      "A five-minute preparation routine makes pickup and counseling clearer."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with Fix advice cards — assuming every drugstore is a pharmacy, arriving after closing for urgent Rx, skipping counseling, mixing medicines without asking, and using hospital A&E for routine medicine pickup.",
      "Each common mistake has a practical Fix — most are avoided with one clear habit."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with readable question and answer pairs about finding an apotheek, opening hours, OTC versus prescription, counseling, dienstapotheek, costs, English support and how prescriptions fit.",
      "Orientation answers only — confirm your own situation with your pharmacist, GP and insurer."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking Pharmacies to GP, emergency healthcare, hospitals, mental healthcare, health insurance, healthcare for children, dentists and prescriptions.",
      "Pharmacies connect to GP care, prescriptions, emergency routes and insurance — read them together."
    ),
    healthcareHub: visual(
      "healthcare-hub",
      "Premium healthcare cluster ecosystem diagram with Pharmacies at the centre, connected to GP, emergency healthcare, hospitals, mental healthcare, health insurance, children's healthcare, dentists and prescriptions.",
      "This page is the pharmacies cornerstone — explore the wider healthcare cluster next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from Pharmacies to the GP guide, emergency healthcare, health insurance, healthcare for children and prescriptions, with official source cards for Government.nl, KNMP and Rijksoverheid.",
      "Continue with GP registration and emergency orientation — and verify specifics on the official sources."
    ),
  },
  quickAnswer: {
    heading: "Quick answer: how pharmacies work in the Netherlands",
    summary:
      "Dutch pharmacies (apotheken) dispense prescription medicines, offer medication counseling, and sell selected pharmacy-only or pharmacy-advised products. Everyday self-care items also appear in drugstores (drogisterijen) such as Etos or Kruidvat — those are not full pharmacies. Most people choose a regular daytime apotheek near home. Prescriptions usually arrive digitally from the GP or specialist; you pick up at the counter after a pharmacist check. Outside opening hours, urgent medicines may go via a regional out-of-hours pharmacy (dienstapotheek), typically after huisartsenpost or clinician guidance.",
    bullets: [
      "Choose a regular apotheek near home and save its opening hours.",
      "A drugstore is not the same as a pharmacy — prescriptions are dispensed at an apotheek.",
      "OTC / zelfzorg products may be bought without a prescription; prescription-only medicines need a valid recept.",
      "Expect short counseling at first dispense — ask about allergies, timing and what to report.",
      "After hours, urgent medicines usually follow Huisartsenpost triage to a regional dienstapotheek — not every pharmacy is 24/7.",
    ],
    note: "Deep herhaalrecept and e-prescription mechanics belong on the Prescriptions guide. This page is the overall pharmacy orientation.",
  },
  introParagraphs: [
    "In the Netherlands, the apotheek is a regulated healthcare setting, not just a shop with medicines. Pharmacists check prescriptions, screen for interactions and allergies, prepare or order medicines, and counsel patients — especially at first dispense. Many expats first meet this system when a GP sends a digital prescription and the pharmacy texts or emails that the medicine is ready.",
    "Two easy mix-ups create friction. First: drogisterijen (drugstores) sell many self-care products but do not replace a pharmacy for prescription dispensing. Second: opening hours are often weekday-focused; evenings, Sundays and holidays may require a regional dienstapotheek after triage, not a walk to the nearest lit storefront.",
    "This guide is practical orientation for expats, students, families and newcomers: how to find a pharmacy, what opening hours feel like, how OTC and prescription pickup differ, what happens at the service desk, what counseling is for, how emergency pharmacy routes work at a high level, and how costs usually fit with basic insurance. It is not dosing advice, not a ranking of pharmacies, and not a substitute for speaking with your GP or pharmacist about your own medicines.",
  ],
  introHighlights: [
    "A regular daytime apotheek is your home base for most prescription pickups.",
    "Drugstores help with many OTC items; pharmacies dispense prescriptions and counsel on medicines.",
    "Opening hours are limited — know the dienstapotheek pattern before you need it.",
    "First dispenses often include a short begeleidingsgesprek (counseling conversation).",
    "Prescribed medicines often bill through insurance; OTC is usually self-pay.",
  ],
  orientationFlowSteps: [
    "Choose a regular apotheek near home and note its opening hours.",
    "Keep a pharmacy file: ID, BSN, insurance card, medication list and allergies.",
    "Know OTC versus prescription pickup — and when the GP must write a recept.",
    "Save the out-of-hours pattern: Huisartsenpost triage → regional dienstapotheek when urgent.",
  ],
  safetyFileChecklist: [
    "Valid ID or residence document",
    "BSN (citizen service number)",
    "Insurer name, policy number and a photo of your insurance card",
    "Current medication list with generic names and doses",
    "Allergy and intolerance list",
    "Name of your regular apotheek and its phone number",
    "GP practice name and contact details",
    "Questions you want to ask about new medicines",
    "Pickup confirmation message or prescription reference if you have one",
    "Note that deep repeat-prescription setup is covered on the Prescriptions guide",
  ],
  introScenarios: [
    {
      situation: "Your GP just prescribed a medicine",
      approach:
        "In many practices the prescription is sent digitally to your chosen pharmacy. Wait for a ready notification, bring ID and insurance details, and expect a short counseling conversation at first dispense.",
      firstStep: "Confirm which apotheek received the prescription and check opening hours before you travel.",
    },
    {
      situation: "You need painkillers or cold remedies tonight",
      approach:
        "Many zelfzorg products are available in drugstores during their hours. If you need a prescription medicine after pharmacy closing time, contact the huisartsenpost for urgency assessment rather than assuming a 24/7 counter nearby.",
      firstStep: "Decide whether you need OTC self-care or a prescription medicine — the route differs.",
    },
    {
      situation: "You are new in town and do not have a pharmacy yet",
      approach:
        "Search for an apotheek near home, ask whether they can register you as a regular patient, and share your medication and allergy list so counseling is safer.",
      firstStep: "Pick one daytime pharmacy, save the address and hours, then tell your GP which apotheek you use.",
    },
    {
      situation: "You need medicine after 20:00 or on Sunday",
      approach:
        "Most daytime pharmacies are closed. Urgent dispensing may go through a regional dienstapotheek after contact with the huisartsenpost or another clinician.",
      firstStep: "Call the huisartsenpost for triage guidance and ask which dienstapotheek applies — see also the Emergency Healthcare guide.",
    },
  ] satisfies ScenarioRow[],
  snapshotSignals: [
    {
      label: "Daytime base",
      value: "Your apotheek",
      note: "Choose one regular pharmacy near home for most pickups and counseling.",
    },
    {
      label: "Self-care",
      value: "OTC / zelfzorg",
      note: "Many everyday products are sold without a prescription in pharmacies and drugstores.",
    },
    {
      label: "Prescription",
      value: "Recept + pickup",
      note: "Prescription-only medicines need a valid recept and pharmacist check.",
    },
    {
      label: "After hours",
      value: "Dienstapotheek",
      note: "Urgent out-of-hours medicines usually follow regional triage — not every shop is open.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Finding an Apotheek",
      body: "Search near your postcode, prefer a pharmacy close to home or your GP, ask about English support, and tell your practice which pharmacy should receive digital prescriptions.",
    },
    {
      title: "Opening Hours",
      body: "Many pharmacies focus on weekday daytime hours, with limited Saturday mornings. Evenings, Sundays and holidays often require the regional out-of-hours route.",
    },
    {
      title: "OTC vs Prescription",
      body: "Zelfzorg products can often be bought without a recept. Prescription-only medicines require a valid prescription and pharmacist screening before pickup.",
    },
    {
      title: "Service Desk",
      body: "Pickup, short questions and first counseling happen at the counter. Bring ID, insurance details, your medication list and any pickup confirmation.",
    },
    {
      title: "Medication Counseling",
      body: "Pharmacists explain how to use a medicine safely, especially at first dispense. Clinical decisions and diagnoses stay with your GP or specialist.",
    },
    {
      title: "Emergency Pharmacy",
      body: "Regional dienstapotheek covers urgent medicines outside normal hours, usually after Huisartsenpost or clinician guidance. Details live in the Emergency Healthcare guide too.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Save your pharmacy's phone number and Saturday hours the week you register with a GP.",
    "Keep allergies and current medicines in your phone notes before any new prescription.",
    "Ask the counter which language they can counsel in if English matters for safety.",
    "Do not confuse Etos/Kruidvat-style drugstores with prescription pharmacies.",
    "For after-hours urgency, use triage first — then travel to the named dienstapotheek.",
    "Repeat-prescription setup depth belongs on the Prescriptions guide.",
  ],
  howItWorks: {
    heading: "How Dutch pharmacies work: from prescription to pickup",
    intro:
      "Dutch pharmacies sit between your clinician and safe medicine use. A GP or specialist decides what is prescribed; the apotheek checks, prepares and counsels; you leave with the medicine, the leaflet and a clearer plan for questions.",
    paragraphs: [
      "For many expats the flow feels digital: the huisarts sends a prescription electronically to your nominated pharmacy. The pharmacy prepares the medicine, may message you when it is ready, and asks you to the counter for pickup. At first dispense, expect a short begeleidingsgesprek covering how to take the medicine, what to watch for, and when to contact the GP.",
      "Not everything is prescription-based. Pharmacies and drugstores sell zelfzorg products for common self-care needs. Staff can help you choose within that category, but they will redirect you to a GP when symptoms need clinical assessment or when a medicine is prescription-only.",
      "Outside opening hours, the system switches to regional duty arrangements. Urgent medicines are not assumed to be available at every storefront. The huisartsenpost or another clinician often confirms urgency and points you to the correct dienstapotheek. Deep mechanics of herhaalrecept and e-prescription accounts belong on the Prescriptions cornerstone.",
    ],
    flowLabels: [
      "Clinician",
      "Prescription",
      "Apotheek check",
      "Counseling",
      "Pickup",
      "Questions",
      "Back to GP",
    ],
    timeline: [
      {
        phase: "1",
        title: "Clinician decides a medicine is needed",
        detail:
          "Your GP or specialist assesses the problem and, when appropriate, issues a prescription. Hospital discharge may also generate prescriptions to fill.",
      },
      {
        phase: "2",
        title: "Prescription reaches the pharmacy",
        detail:
          "Many prescriptions travel digitally to your chosen apotheek. Paper routes still exist in some situations — follow the instructions you are given.",
      },
      {
        phase: "3",
        title: "Pharmacist checks and prepares",
        detail:
          "The pharmacy screens dose, interactions, allergies and practical supply. They may contact the clinician if something needs clarification.",
      },
      {
        phase: "4",
        title: "You are invited to pick up",
        detail:
          "A message, call or ready status tells you the medicine can be collected during opening hours. Bring ID and insurance details.",
      },
      {
        phase: "5",
        title: "Counseling at the counter",
        detail:
          "Especially at first dispense, the pharmacist explains safe use, timing and what to report. Ask questions before you leave.",
      },
      {
        phase: "6",
        title: "Home use and follow-up",
        detail:
          "Follow the agreed plan. Contact the pharmacy for practical medicine questions and your GP for clinical change or worsening symptoms.",
      },
      {
        phase: "7",
        title: "Ongoing coordination",
        detail:
          "Keep one regular pharmacy where possible so your medicine history stays coherent. Repeat-prescription workflows are covered in depth on the Prescriptions guide.",
      },
    ] satisfies TimelineStep[],
    decisionTips: [
      "Daytime prescription pickup → your regular apotheek.",
      "Everyday self-care products → pharmacy or drugstore during opening hours.",
      "Urgent medicine after closing → huisartsenpost triage → dienstapotheek when indicated.",
      "Clinical worsening or new diagnosis questions → GP, not the pharmacy counter alone.",
      "Life-threatening emergency → 112.",
      "Deep e-prescription / herhaalrecept setup → Prescriptions guide.",
    ],
    howToSteps: [
      {
        name: "Choose a regular daytime apotheek",
        text: "Search near your home postcode, confirm opening hours and language support, and tell your GP which pharmacy should receive digital prescriptions.",
      },
      {
        name: "Build a simple pharmacy file",
        text: "Store ID, BSN, insurance card photo, current medication list and allergies where you can reach them quickly at the counter.",
      },
      {
        name: "Understand OTC versus prescription",
        text: "Zelfzorg products may not need a recept. Prescription-only medicines do. If unsure, ask the pharmacist which category applies.",
      },
      {
        name: "Wait for ready status before travelling",
        text: "When a prescription is sent digitally, confirm the pharmacy has prepared it and is open — especially on Saturdays.",
      },
      {
        name: "Use counseling time",
        text: "At first dispense, ask how to take the medicine, what to avoid, and what symptoms mean you should contact the GP.",
      },
      {
        name: "Save the out-of-hours pattern",
        text: "Know that urgent after-hours medicines usually need triage guidance to a regional dienstapotheek rather than a random open shop.",
      },
      {
        name: "Keep one pharmacy history when you can",
        text: "Using the same apotheek helps interaction checks. Update them when medicines change after hospital or specialist visits.",
      },
      {
        name: "Separate practical from clinical questions",
        text: "Ask pharmacists about supply, timing and interactions; ask your GP about diagnosis, dose changes and whether a medicine is still needed.",
      },
    ] satisfies HowToStep[],
  },
  finding: {
    heading: "Finding a pharmacy: choosing your regular apotheek",
    intro:
      "Most people are best served by one regular daytime pharmacy near home. Continuity helps interaction checks, counseling and prescription routing from your GP.",
    paragraphs: [
      "Search for 'apotheek' near your postcode. Prefer a location you can reach on foot, by bike or with a short tram ride during weekday hours. Ask whether they can register you as a regular patient and whether English counseling is available when needed.",
      "Tell your huisarts practice which pharmacy should receive digital prescriptions. If you change pharmacies later, update both the old and new pharmacy and your GP practice so new recepten do not land in the wrong place.",
      "Hospital or specialist prescriptions may still be filled at your regular pharmacy unless you are directed otherwise. Keep discharge letters and medicine lists so the pharmacist can reconcile what changed.",
    ],
    cards: [
      {
        title: "What to look for",
        body: "Daytime hours that match your schedule, clear pickup process, language support you can use safely, and a location you will actually visit.",
      },
      {
        title: "Registration practicalities",
        body: "Bring ID, BSN, insurance details, allergy list and current medicines. Ask how they prefer to notify you when a prescription is ready.",
      },
      {
        title: "GP coordination",
        body: "Ask the practice assistant which pharmacy is on file for you. Correct it before the next prescription is sent.",
      },
      {
        title: "When you move house",
        body: "Choose a new local apotheek early, transfer relevant medicine history, and update your GP. Do not wait for the first urgent need.",
      },
    ] satisfies TipCard[],
    points: [
      "Prefer one regular daytime apotheek near home.",
      "Confirm English-language counseling if you need it for safety.",
      "Tell your GP which pharmacy receives digital prescriptions.",
      "Drugstores are useful for many OTC items but do not replace prescription pharmacies.",
      "Save phone number, Saturday hours and website or app if they use one.",
      "Update pharmacy details when you move or change insurer.",
    ],
    checklist: [
      "Apotheek chosen near home",
      "Opening hours saved, including Saturday if offered",
      "ID, BSN and insurance details shared",
      "Allergy and medication list provided",
      "GP practice told which pharmacy to use",
      "Ready-notification preference confirmed",
      "Out-of-hours dienstapotheek pattern noted",
      "Emergency Healthcare guide bookmarked for urgent routes",
    ],
    scenarios: [
      {
        situation: "Two pharmacies are equally close",
        approach:
          "Compare opening hours, Saturday availability and language support. Continuity matters more than branding.",
        firstStep: "Pick one as your regular pharmacy and tell your GP.",
      },
      {
        situation: "Your prescription went to the wrong pharmacy",
        approach:
          "Call both pharmacies and your GP practice assistant to reroute. Keep the prescription reference if you have one.",
        firstStep: "Confirm where the recept currently sits before travelling.",
      },
      {
        situation: "You only need occasional OTC products",
        approach:
          "Drugstores may be enough for many zelfzorg items, but still choose a pharmacy before you need a prescription.",
        firstStep: "Register a daytime apotheek even if your first need is months away.",
      },
      {
        situation: "You want English support",
        approach:
          "Ask when you call or visit. Availability varies by location and staff roster — never assume.",
        firstStep: "Ask specifically whether counseling for new medicines can be done in English.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Put the pharmacy pin next to your GP pin in maps.",
      "Photograph the opening-hours sticker on the door.",
      "Keep one shared family note with each person's regular pharmacy if they differ.",
      "Ask how vacation closures are communicated.",
    ],
    contrastRows: [
      {
        route: "Regular daytime apotheek",
        when: "Most prescription pickups and counseling",
        how: "Visit during posted hours after ready status",
        note: "Best default for continuity",
      },
      {
        route: "Drugstore (drogisterij)",
        when: "Many everyday zelfzorg products",
        how: "Buy during drugstore opening hours",
        note: "Not for prescription dispensing",
      },
      {
        route: "Dienstapotheek",
        when: "Urgent medicines outside normal pharmacy hours",
        how: "Usually after huisartsenpost or clinician triage",
        note: "Regional — confirm before travelling",
      },
      {
        route: "Hospital pharmacy context",
        when: "During admission or specialist pathways",
        how: "Follow hospital instructions; reconcile with your regular apotheek afterward",
        note: "Bring discharge medicine lists home",
      },
    ] satisfies ContactRouteRow[],
  },
  openingHours: {
    heading: "Opening hours: daytime pharmacies vs out-of-hours reality",
    intro:
      "Dutch daytime pharmacies often keep weekday business hours with limited Saturday openings. Planning around those hours prevents last-minute stress.",
    paragraphs: [
      "Expect many apotheken to open in the morning, close in the early evening, and offer shorter Saturday hours if any. Sundays and public holidays are commonly closed for regular dispensing. Exact hours vary — always check your own pharmacy.",
      "When a prescription is ready near closing time, arrive with margin. Counseling and insurance checks take a few minutes. If you miss closing time with an urgent need, do not invent a route: contact the huisartsenpost for triage and the correct dienstapotheek.",
      "Tourists and newcomers sometimes assume 24/7 pharmacy counters on every high street. That is not the Dutch default. The emergency pharmacy system is regional and purpose-built for urgency after clinical guidance.",
    ],
    cards: [
      {
        title: "Weekday daytime",
        body: "Most prescription pickups happen here. Save exact open and close times for your own apotheek.",
      },
      {
        title: "Saturday mornings",
        body: "Some pharmacies open shorter Saturday hours. Confirm before relying on weekend pickup.",
      },
      {
        title: "Evenings and Sundays",
        body: "Regular pharmacies are often closed. Urgent medicines may require the dienstapotheek pathway.",
      },
      {
        title: "Holidays",
        body: "Public holidays can shift duty arrangements. Check local notices and triage guidance when urgency appears.",
      },
    ] satisfies TipCard[],
    points: [
      "Check your pharmacy's posted hours rather than assuming late evenings.",
      "Build buffer before closing time for counseling and payment or insurance processing.",
      "Saturday availability is limited and local — verify.",
      "Out-of-hours urgency uses regional duty pharmacy routes after triage.",
      "Ready messages do not extend opening hours.",
      "Ask how holiday closures are announced.",
    ],
    checklist: [
      "Weekday hours saved",
      "Saturday hours confirmed or marked unavailable",
      "Closing-time buffer habit set",
      "Huisartsenpost number/route saved for after-hours urgency",
      "Understood that dienstapotheek is regional",
      "Holiday closure check noted for the next long weekend",
    ],
    scenarios: [
      {
        situation: "Ready SMS arrives at 17:40 and the pharmacy closes at 18:00",
        approach:
          "Travel only if you can arrive with time for counseling. Otherwise pick up next opening or ask whether anything must be urgent tonight.",
        firstStep: "Call the pharmacy before leaving if timing is tight.",
      },
      {
        situation: "You need a medicine on Sunday",
        approach:
          "If it cannot wait, contact the huisartsenpost for urgency assessment and the correct out-of-hours pharmacy.",
        firstStep: "Do not assume a random open drugstore can dispense prescription medicines.",
      },
      {
        situation: "Your pharmacy is closed for renovation",
        approach:
          "Ask which temporary pharmacy covers pickups and update your GP prescription routing.",
        firstStep: "Get the temporary address and hours in writing or via the practice.",
      },
      {
        situation: "You work late every weekday",
        approach:
          "Choose a pharmacy with later closing or reliable Saturday hours, or plan pickup during lunch.",
        firstStep: "Compare hours before registering as a regular patient.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Put pharmacy closing time in your calendar reminders for new prescriptions.",
      "Ask colleagues or neighbours which local pharmacies open Saturday.",
      "Keep a small buffer of essential chronic medicines when your clinician agrees it is appropriate — never adjust doses yourself.",
      "Read the Emergency Healthcare guide for the full out-of-hours map.",
    ],
  },
  otcVsRx: {
    heading: "OTC vs prescription pickup: two different doors",
    intro:
      "Zelfzorg (OTC) products and prescription-only medicines follow different rules. Mixing them up is one of the most common expat surprises.",
    paragraphs: [
      "Over-the-counter and pharmacy-advised zelfzorg products are for common self-care situations. You can often buy them without a recept in a pharmacy or drugstore. Staff may ask a few questions to steer you toward appropriate options and to spot when a GP visit is wiser.",
      "Prescription-only medicines require a valid recept from a clinician. The pharmacy checks the prescription, prepares the medicine and counsels you. You generally cannot walk in and request a prescription-only antibiotic or similar medicine without the clinical step first.",
      "This page stays at orientation level for pickup and counseling. Detailed herhaalrecept, e-prescription accounts and repeat workflows belong on the Prescriptions cornerstone.",
    ],
    rows: [
      {
        type: "OTC / zelfzorg",
        focus: "Everyday self-care products",
        whenReferred: "Minor self-limiting needs when no prescription is required",
        note: "Available in pharmacies and often in drugstores",
      },
      {
        type: "Pharmacy counseling product",
        focus: "Guidance at the counter without a full prescription pathway",
        whenReferred: "When you want help choosing within zelfzorg limits",
        note: "Staff may redirect you to a GP if symptoms need assessment",
      },
      {
        type: "Prescription-only medicine",
        focus: "Medicines that need a valid recept",
        whenReferred: "After GP or specialist assessment",
        note: "Dispensed at an apotheek after pharmacist checks",
      },
      {
        type: "Repeat / e-prescription workflows",
        focus: "Ongoing supply for chronic medicines",
        whenReferred: "When a clinician has authorised ongoing supply processes",
        note: "Deep detail → Prescriptions guide",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "What OTC is for",
        body: "Common self-care needs within product rules — not a substitute for diagnosis when symptoms are severe, persistent or unclear.",
      },
      {
        title: "What a recept unlocks",
        body: "Prescription-only medicines after clinician assessment, with pharmacist screening and counseling at dispense.",
      },
      {
        title: "What drugstores do",
        body: "Sell many zelfzorg items conveniently. They do not replace apotheek prescription dispensing.",
      },
      {
        title: "What this page does not deep-dive",
        body: "Herhaalrecept portals, e-prescription account setup and advanced repeat logistics — see Prescriptions.",
      },
    ] satisfies TipCard[],
    points: [
      "OTC does not mean 'any medicine without limits' — follow label and staff guidance.",
      "Prescription-only medicines need a clinician recept.",
      "Pharmacists can refuse unsafe combinations and will explain why.",
      "Bring your medication list even for OTC questions if you take other medicines.",
      "Children's dosing questions should be handled carefully — ask staff and your GP when unsure.",
      "Deep repeat-prescription mechanics are intentionally deferred to the Prescriptions page.",
    ],
    checklist: [
      "Know whether your need is zelfzorg or likely prescription-only",
      "Medication and allergy list available",
      "Recept confirmed ready before travelling for Rx pickup",
      "Asked the pharmacist when unsure about interactions",
      "GP booked if symptoms need clinical assessment",
      "Noted Prescriptions guide for repeat workflows later",
    ],
    scenarios: [
      {
        situation: "You want antibiotics without seeing a doctor",
        approach:
          "Antibiotics are not an OTC self-serve category. You need clinical assessment and a valid prescription when appropriate.",
        firstStep: "Contact your GP or the appropriate urgent route — do not expect pharmacy counters to sell them freely.",
      },
      {
        situation: "You need allergy tablets before a flight tomorrow",
        approach:
          "Many zelfzorg options exist. Ask pharmacy or drugstore staff and mention other medicines you take.",
        firstStep: "Bring your medication list and ask which options fit self-care rules.",
      },
      {
        situation: "You have a hospital discharge prescription",
        approach:
          "Fill it at the directed pharmacy or your regular apotheek, then reconcile the new list with counseling questions.",
        firstStep: "Keep the discharge medicine list and ask what changed versus your old medicines.",
      },
      {
        situation: "You want to set up automatic repeats",
        approach:
          "That is a prescriptions-workflow topic. Use your pharmacy and GP processes, then open the Prescriptions cornerstone for herhaalrecept depth.",
        firstStep: "Ask your current pharmacy what repeat options they support at a high level, then follow clinician rules.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Say the symptom and the medicines you already take — not only the brand you remember from home.",
      "Keep packages until you know the generic name Dutch labels use.",
      "If two people in a household share a counter visit, separate their medication lists clearly.",
      "Use the Prescriptions page for deep e-prescription detail.",
    ],
    crossLink: {
      label: "Prescriptions in the Netherlands",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      description:
        "Deep guide for herhaalrecept, e-prescription mechanics and repeat workflows — this pharmacies page stays at apotheek operations.",
      status: "live" as const,
    },
  },
  serviceDesk: {
    heading: "Service desk: what happens at the counter",
    intro:
      "The service desk is where pickup, identity and insurance checks, short questions and counseling come together. A little preparation makes it faster and safer.",
    paragraphs: [
      "You may take a ticket, join a short queue, or respond to a ready notification. At the counter, staff confirm who the medicine is for, check details, and hand over the package with the patient leaflet. First dispenses usually include counseling time.",
      "Bring ID and insurance details. If someone picks up for you, ask the pharmacy in advance what authorisation they need. Privacy matters — counseling conversations are normal and you can ask for a quieter moment if the desk is busy.",
      "If a medicine is not in stock, the pharmacy will explain ordering timelines or alternatives after clinician agreement when needed. Do not swap doses on your own while waiting.",
    ],
    cards: [
      {
        title: "What to bring",
        body: "ID, BSN if asked, insurance card, allergy list, medication list, pickup confirmation and your questions.",
      },
      {
        title: "What they check",
        body: "Identity, prescription validity, interactions, allergies and practical supply details.",
      },
      {
        title: "What you receive",
        body: "The medicine, usage instructions, leaflet and sometimes a summary of counseling points.",
      },
      {
        title: "What to ask before leaving",
        body: "Timing with food, what to do if a dose is missed, which side effects need GP contact, and whether alcohol or other medicines are a concern — as orientation, not DIY dosing changes.",
      },
    ] satisfies TipCard[],
    points: [
      "Arrive with ID and insurance details even if you have been before.",
      "First dispense usually includes counseling — budget a few extra minutes.",
      "Ask for clarification if Dutch label text is unclear.",
      "Confirm whose medicine it is when picking up for family members.",
      "Report known allergies every time a new medicine starts.",
      "Keep the leaflet until you are confident about use.",
    ],
    checklist: [
      "Ready status confirmed",
      "ID and insurance card packed",
      "Allergy and medication list updated",
      "Questions written down",
      "Time buffer before closing",
      "Understood who may pick up on your behalf",
    ],
    scenarios: [
      {
        situation: "The queue is long and you are unsure what to say",
        approach:
          "Lead with your name, that you are picking up a prescription, and whether it is a first dispense. Hand over ID when asked.",
        firstStep: "Keep your ready message or reference visible.",
      },
      {
        situation: "You do not understand the Dutch instructions",
        approach:
          "Say so immediately and ask for English explanation or the key points in simple language.",
        firstStep: "Do not leave until timing and warnings are clear enough to use safely.",
      },
      {
        situation: "A friend will collect for you",
        approach:
          "Ask the pharmacy what they require — ID rules vary. Share only necessary details.",
        firstStep: "Call ahead before your friend travels.",
      },
      {
        situation: "Part of the prescription is delayed",
        approach:
          "Ask what is available now, when the rest arrives, and whether the clinician needs to be contacted.",
        firstStep: "Clarify whether you should start the available part as prescribed.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Put questions in your phone notes before you reach the desk.",
      "Photograph the label after counseling if that helps you remember timing — keep photos private.",
      "If you feel rushed, ask one clarifying question before stepping away.",
      "Update the pharmacy when specialists change your medicines.",
    ],
    contrastRows: [
      {
        route: "Pickup only",
        when: "Repeat of a known medicine with no new questions",
        how: "Ready status → counter → confirm identity",
        note: "Still report new allergies or problems",
      },
      {
        route: "First dispense counseling",
        when: "New medicine or major change",
        how: "Counter conversation + leaflet",
        note: "Budget extra time",
      },
      {
        route: "Practical medicine question",
        when: "Timing, interactions, supply issues",
        how: "Ask pharmacist at desk or by phone during hours",
        note: "Clinical diagnosis stays with GP",
      },
      {
        route: "Out-of-hours urgent supply",
        when: "Cannot wait until next opening",
        how: "Huisartsenpost triage → dienstapotheek",
        note: "See Emergency Healthcare guide",
      },
    ] satisfies ContactRouteRow[],
  },
  counseling: {
    heading: "Medication counseling: what pharmacists help with",
    intro:
      "Medication counseling (often called a begeleidingsgesprek at first dispense) helps you use medicines safely. It is guidance and screening — not a replacement for your GP's clinical plan.",
    paragraphs: [
      "Pharmacists are trained to explain how to take a medicine, what to watch for, and how it may interact with other products you use. They also protect against obvious allergy and interaction risks in the pharmacy record.",
      "Use counseling for practical safety questions. Use your GP for diagnosis, whether a medicine is still appropriate, and dose changes. If side effects worry you, contact the pharmacy or GP based on urgency — and call 112 for severe allergic reactions or other emergencies.",
      "English-language counseling is often possible in internationally oriented areas, but it is not guaranteed. Ask early. For complex conversations, request clear language or interpreter support rather than relying on a child to translate.",
    ],
    cards: [
      {
        title: "First dispense",
        body: "Expect a short structured conversation covering use, timing, key warnings and when to seek help.",
      },
      {
        title: "Interactions and allergies",
        body: "Share your full list, including OTC products and supplements. Incomplete lists create avoidable risk.",
      },
      {
        title: "What stays with the GP",
        body: "Diagnosis, starting or stopping medicines, and clinical dose changes belong with your clinician.",
      },
      {
        title: "Language and clarity",
        body: "Ask for English or simplified explanation. Do not guess critical timing instructions.",
      },
    ] satisfies TipCard[],
    points: [
      "First dispenses are the most important counseling moments.",
      "Bring a complete medication and allergy list.",
      "Ask what to do if you miss a dose — as orientation from the pharmacist.",
      "Report pregnancy, breastfeeding or planned pregnancy when relevant.",
      "Severe allergic symptoms → emergency pathway / 112.",
      "Keep leaflets for the first weeks of a new medicine.",
    ],
    checklist: [
      "Full medication list shared",
      "Allergies stated",
      "Timing with meals clarified",
      "Key warning symptoms understood",
      "Know who to call if side effects appear",
      "Leaflet kept accessible",
    ],
    scenarios: [
      {
        situation: "You already take three other medicines",
        approach:
          "Hand the pharmacist a written list. Ask specifically about interactions and timing conflicts.",
        firstStep: "Update the pharmacy record before the new medicine is dispensed.",
      },
      {
        situation: "Side effects start two days later",
        approach:
          "Contact the pharmacy or GP depending on severity. For breathing difficulty, swelling or collapse, call 112.",
        firstStep: "Do not silently double or stop doses without clinical advice unless emergency guidance says otherwise.",
      },
      {
        situation: "Label text is dense and unfamiliar",
        approach:
          "Ask the pharmacist to highlight the three actions that matter today: when to take it, what to avoid, when to call.",
        firstStep: "Repeat those three points back in your own words.",
      },
      {
        situation: "Your child needs a liquid medicine",
        approach:
          "Confirm measuring device, timing and storage. Ask the pharmacist to demonstrate the measuring tool.",
        firstStep: "Write the schedule in a phone reminder after counseling.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Treat counseling as part of the medicine, not an optional chat.",
      "If you are distracted, ask for the key points in writing.",
      "Update the pharmacy after hospital discharges.",
      "Pair pharmacy counseling with a GP review when a medicine is long-term.",
    ],
  },
  emergency: {
    heading: "Emergency pharmacy orientation (dienstapotheek)",
    intro:
      "When your regular apotheek is closed and a medicine cannot wait, the Netherlands uses regional out-of-hours pharmacy arrangements — usually after triage guidance.",
    paragraphs: [
      "During daytime hours, use your regular pharmacy whenever possible. Outside those hours, contact the huisartsenpost (or follow clinician instructions) so urgency can be assessed. If urgent dispensing is appropriate, you will be directed to the regional dienstapotheek covering your area.",
      "This section is orientation only. The Emergency Healthcare cornerstone covers 112, Huisartsenpost, SEH and ambulance pathways in full. Do not travel to a random late-open drugstore expecting prescription dispensing.",
      "Call before you travel when possible. Confirm the pharmacy is open for your prescription and bring ID, insurance details and your medication list.",
    ],
    points: [
      "Daytime default: regular apotheek.",
      "After hours: triage first, then regional dienstapotheek when indicated.",
      "Huisartsenpost often knows which duty pharmacy applies.",
      "Confirm before travelling — duty arrangements are local.",
      "112 remains the number for life-threatening emergencies.",
      "Read the Emergency Healthcare guide for the wider urgent-care map.",
    ],
    checklist: [
      "Regular pharmacy hours known",
      "Huisartsenpost route saved",
      "Understood that dienstapotheek is regional",
      "ID and insurance details ready for urgent pickup",
      "Medication and allergy list available",
      "Emergency Healthcare guide bookmarked",
    ],
    urgencyRows: [
      {
        situation: "Life-threatening allergic reaction, collapse or severe breathing problem",
        level: "emergency",
        action: "Call 112 immediately — this is not a routine pharmacy errand.",
      },
      {
        situation: "Urgent medicine needed after pharmacy closing time",
        level: "urgent",
        action: "Contact the huisartsenpost for triage and the correct dienstapotheek route.",
      },
      {
        situation: "Prescription ready during normal opening hours",
        level: "routine",
        action: "Pick up at your regular apotheek with ID and insurance details.",
      },
      {
        situation: "OTC self-care need during drugstore hours",
        level: "routine",
        action: "Use pharmacy or drugstore zelfzorg options; see a GP if symptoms worsen.",
      },
    ] satisfies UrgencyRow[],
    scenarios: [
      {
        situation: "You run out of a critical chronic medicine on Saturday night",
        approach:
          "Contact the huisartsenpost to assess urgency and whether a dienstapotheek dispense is appropriate.",
        firstStep: "Have the medicine name, dose and your regular pharmacy details ready.",
      },
      {
        situation: "A child spikes a fever and you need advice plus possible medicine",
        approach:
          "Use GP by day or huisartsenpost after hours for clinical triage. Pharmacy routes follow that assessment when a prescription is needed.",
        firstStep: "Do not skip triage for prescription-only medicines.",
      },
      {
        situation: "You see a lit storefront and assume it can fill any Rx",
        approach:
          "Confirm it is an apotheek on duty for your prescription. Many late-open shops are not duty pharmacies.",
        firstStep: "Ask triage which dienstapotheek applies.",
      },
      {
        situation: "You need the full urgent-care map",
        approach:
          "Use the Emergency Healthcare cornerstone for 112, Huisartsenpost, SEH and pharmacy interplay.",
        firstStep: "Open that guide and save the decision points before the next evening urgency.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Save huisartsenpost guidance the same day you register with a GP.",
      "Keep a photo of critical medicine packaging for spelling accuracy on the phone.",
      "Never drive to an uncertain address without confirming duty status.",
      "Separate true emergencies (112) from urgent medicine supply questions.",
    ],
    disclaimer:
      "Orientation only — not triage advice. If life may be at risk, call 112. For urgent but non-life-threatening needs outside GP hours, contact the huisartsenpost.",
    crossLink: {
      label: "Emergency Healthcare in the Netherlands",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      description:
        "112, Huisartsenpost, SEH, ambulance and emergency pharmacy pathways — the full urgent-care map for expats.",
      status: "live" as const,
    },
  },
  costs: {
    heading: "Costs & insurance: how pharmacy bills usually work",
    intro:
      "Prescribed medicines are often handled through basic health insurance, while many OTC products are self-pay. Exact amounts depend on your policy year, remaining eigen risico and the medicine itself.",
    paragraphs: [
      "For insured prescription medicines, adults usually pay toward the annual deductible (eigen risico) until it is used up for that year. Children often follow different deductible rules — verify with your insurer. Pharmacies may also apply regulated dispensing or service components depending on the situation.",
      "OTC / zelfzorg products are commonly paid directly at the counter or drugstore till. Supplementary insurance sometimes contributes to specific categories — never assume; check your policy.",
      "This page does not hardcode prices as guarantees. Figures change by year, contract and medicine. Ask the pharmacy what you will pay before you leave, and confirm reimbursement rules in your insurer portal.",
    ],
    indicativeNote:
      "Indicative orientation only — verify current eigen risico, reimbursement and any pharmacy service fees with your insurer and pharmacy for your policy year.",
    indicativeRows: [
      {
        item: "Adult annual deductible (eigen risico)",
        indicative: "Mandatory amount set per policy year (verify current year)",
        whatYouPay: "Often applies to insured specialist and many pharmacy dispenses until depleted",
        note: "GP care usually sits outside deductible — pharmacy medicines often do not",
      },
      {
        item: "Insured prescription medicine",
        indicative: "Varies by medicine and contract",
        whatYouPay: "May count toward remaining eigen risico; ask at pickup",
        note: "Prefer contracted pathways your insurer recognises",
      },
      {
        item: "OTC / zelfzorg product",
        indicative: "Shelf price",
        whatYouPay: "Usually self-pay at till",
        note: "Supplementary cover only if your policy says so",
      },
      {
        item: "Out-of-hours dienstapotheek dispense",
        indicative: "May include additional service components",
        whatYouPay: "Ask what is charged before travelling when possible",
        note: "Urgency route first via triage",
      },
    ],
    orientationCards: [
      {
        title: "What to verify each year",
        body: "Your remaining eigen risico, whether a medicine is preferred on your insurer's list, and any personal contribution rules.",
      },
      {
        title: "What to ask at the counter",
        body: "What you pay today, whether the medicine is ordered specially, and whether a cheaper appropriate alternative exists after clinician agreement.",
      },
      {
        title: "What not to assume",
        body: "That OTC is reimbursed, that every brand is covered equally, or that last year's rules still apply.",
      },
      {
        title: "Where deeper insurance help lives",
        body: "The Health Insurance cornerstone explains basic cover, deductible and choosing an insurer.",
      },
    ] satisfies TipCard[],
    costFactors: [
      "Policy year and remaining eigen risico",
      "Whether the medicine is insured under basic cover",
      "Insurer preference policies and substitutions",
      "OTC versus prescription status",
      "Possible out-of-hours service components",
      "Whether supplementary insurance applies to a specific product category",
    ],
    checklist: [
      "Know your insurer and policy number",
      "Check remaining eigen risico in the insurer app or portal",
      "Ask the pharmacy what you will pay before leaving",
      "Keep receipts for OTC if you claim supplementary benefits",
      "Clarify children's coverage separately from adults",
      "Re-check rules after you change insurer on 1 January",
    ],
    scenarios: [
      {
        situation: "The till asks for a payment you did not expect",
        approach:
          "Ask which component is eigen risico, product price or service-related. Check your insurer portal afterward.",
        firstStep: "Request a clear breakdown before you leave the desk.",
      },
      {
        situation: "You want a specific brand from home",
        approach:
          "Dutch pharmacies often dispense preferred or generic equivalents when clinically appropriate and contracted. Discuss concerns with pharmacist and GP.",
        firstStep: "Ask whether an equivalent is being dispensed and why.",
      },
      {
        situation: "You only need OTC pain relief",
        approach:
          "Expect self-pay pricing at pharmacy or drugstore. Insurance usually is not involved.",
        firstStep: "Compare options with staff using your medication list for safety.",
      },
      {
        situation: "You are comparing insurers next year",
        approach:
          "Use the Health Insurance guide and, when live, the comparison page — pharmacy habits alone should not drive the whole decision.",
        firstStep: "List chronic medicines and ask how preference policies affect them.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Screenshot remaining eigen risico after large dispenses.",
      "Ask before special-order medicines are placed if cost matters.",
      "Keep family members' insurance cards distinct at pickup.",
      "Read the Health Insurance cornerstone for system funding context.",
    ],
    crossLink: {
      label: "Health Insurance in the Netherlands",
      href: HEALTH_INSURANCE_PATH,
      description: "Basic package, deductible, choosing an insurer and how everyday care is funded.",
      status: "live" as const,
    },
  },
  differences: {
    heading: "Common differences expats notice",
    intro:
      "Most pharmacy surprises are system design, not unfriendliness. Expecting them makes the first months easier.",
    cards: [
      {
        title: "Pharmacy ≠ drugstore",
        body: "Example: expecting Etos or Kruidvat to fill a prescription.",
        advice: "Use an apotheek for prescription dispensing; use drugstores for many OTC items.",
      },
      {
        title: "Limited evening hours",
        body: "Example: arriving at 20:30 for a routine pickup.",
        advice: "Save daytime hours and use triage → dienstapotheek only when urgency justifies it.",
      },
      {
        title: "Counseling is normal",
        body: "Example: feeling surprised when staff ask detailed medicine questions.",
        advice: "Treat counseling as safety infrastructure — answer fully and ask your own questions.",
      },
      {
        title: "Generics are common",
        body: "Example: receiving a different box design than the brand you knew abroad.",
        advice: "Check the active ingredient with the pharmacist and ask if anything clinically changed.",
      },
      {
        title: "Digital prescriptions",
        body: "Example: waiting for a paper script that never appears.",
        advice: "Ask which pharmacy received the digital recept and wait for ready status.",
      },
      {
        title: "Emergency pharmacy is regional",
        body: "Example: searching for any 24/7 counter nearby.",
        advice: "Follow huisartsenpost guidance to the correct dienstapotheek.",
      },
    ] satisfies MistakeCard[],
    tips: [
      "Learn the words apotheek, recept, zelfzorg and dienstapotheek early.",
      "Keep one regular pharmacy for continuity.",
      "Separate clinical questions (GP) from practical medicine questions (pharmacist).",
      "Plan pickups before Saturday noon when hours are short.",
      "Read Emergency Healthcare for after-hours pathways.",
      "Watch for the Prescriptions guide for repeat workflows.",
    ],
  },
  preparation: {
    heading: "Pharmacy checklist: prepare once, reuse often",
    paragraphs: [
      "A short pharmacy file removes most counter friction. Build it when you arrive in the Netherlands, then update it when medicines change.",
      "Share the same essentials with your GP practice so prescriptions, allergies and pharmacy routing stay aligned.",
    ],
    checklist: [
      "Regular apotheek chosen and hours saved",
      "GP told which pharmacy receives prescriptions",
      "ID and BSN available",
      "Insurance card photo stored",
      "Current medication list with generic names",
      "Allergy and intolerance list",
      "Questions template for first dispenses",
      "Huisartsenpost / dienstapotheek pattern understood",
      "Emergency Healthcare guide bookmarked",
      "Family pickup rules clarified if someone else collects",
    ],
    roleCards: [
      { role: "You", focus: "Keep lists current, ask questions, and confirm understanding before leaving." },
      { role: "Pharmacist", focus: "Screen, prepare, counsel and flag interaction or supply issues." },
      { role: "GP / specialist", focus: "Decide what is prescribed and adjust the clinical plan." },
      { role: "Companion", focus: "Help with language or pickup only when the pharmacy allows authorised collection." },
    ] satisfies RoleCard[],
    tips: [
      "Update the medication list after every hospital or specialist change.",
      "Keep paper and phone copies of allergies.",
      "Review Saturday hours when seasons or holidays change.",
      "Revisit this checklist after you move house.",
    ],
  },
  mistakes: {
    heading: "Common expat mistakes (and how to fix them)",
    intro: "These mistakes are common and fixable. Each one has a practical correction.",
    cards: [
      {
        title: "Treating every drugstore as a pharmacy",
        body: "Example: showing a prescription at a drogisterij till.",
        advice: "Go to an apotheek for prescription dispensing.",
      },
      {
        title: "Arriving after closing for urgent Rx",
        body: "Example: discovering at 19:30 that the pharmacy is closed.",
        advice: "Check hours first; for true urgency use huisartsenpost → dienstapotheek.",
      },
      {
        title: "Skipping counseling",
        body: "Example: rushing out without asking how to take a new medicine.",
        advice: "Budget five minutes for first-dispense questions.",
      },
      {
        title: "Hiding other medicines or supplements",
        body: "Example: forgetting to mention blood thinners when buying OTC products.",
        advice: "Share the full list every time something new starts.",
      },
      {
        title: "Using hospital A&E for routine medicine pickup",
        body: "Example: going to SEH because a daytime pharmacy was missed.",
        advice: "SEH is for emergencies — use pharmacy hours or out-of-hours duty routes.",
      },
      {
        title: "Never naming a regular pharmacy to the GP",
        body: "Example: digital prescriptions landing nowhere useful.",
        advice: "Tell the practice which apotheek should receive your recepten.",
      },
    ] satisfies MistakeCard[],
    adaptationTips: [
      "Make pharmacy hours part of your weekly logistics like grocery closing times.",
      "Use counseling fully on first dispenses.",
      "Keep GP, pharmacy and insurer details in one phone folder.",
      "Read Emergency Healthcare before the first late-night scare.",
      "Leave deep repeat-prescription setup for the Prescriptions guide while using pharmacy staff for today's practical steps.",
      "Prefer continuity over hopping between pharmacies for every pickup.",
    ],
  },
  faq: [
    {
      q: "What is an apotheek and how is it different from a drugstore?",
      a: "An apotheek (pharmacy) dispenses prescription medicines, performs pharmacist checks and offers medication counseling. A drogisterij (drugstore) sells many zelfzorg / OTC products but does not replace a pharmacy for prescription dispensing.",
    },
    {
      q: "How do I find a pharmacy in the Netherlands?",
      a: "Search for apotheek near your postcode, compare opening hours and language support, register as a regular patient where possible, and tell your GP which pharmacy should receive digital prescriptions.",
    },
    {
      q: "What are typical pharmacy opening hours?",
      a: "Many pharmacies focus on weekday daytime hours with limited Saturday openings. Evenings, Sundays and holidays often require a regional dienstapotheek after triage. Always check your own pharmacy's posted hours.",
    },
    {
      q: "Can I buy medicines without a prescription?",
      a: "Many zelfzorg / OTC products can be bought without a recept in pharmacies and drugstores. Prescription-only medicines require a valid clinician prescription and pharmacist screening.",
    },
    {
      q: "How do prescription pickups usually work?",
      a: "Your GP or specialist often sends a digital prescription to your nominated pharmacy. When it is ready, you pick it up at the counter with ID and insurance details, and you may receive counseling — especially at first dispense.",
    },
    {
      q: "What is a begeleidingsgesprek?",
      a: "It is a medication counseling conversation, commonly at first dispense, covering how to use the medicine safely and what to watch for. It is guidance and screening, not a replacement for your GP's clinical decisions.",
    },
    {
      q: "What is a dienstapotheek?",
      a: "A regional out-of-hours pharmacy for urgent medicines when regular pharmacies are closed. You typically reach it after huisartsenpost or clinician triage confirms urgency and names the correct location.",
    },
    {
      q: "Do I need to register with a pharmacy?",
      a: "It is strongly practical to choose a regular apotheek so your medicine history, allergies and prescription routing stay coherent. Ask how registration works at your chosen pharmacy.",
    },
    {
      q: "Are pharmacy medicines covered by insurance?",
      a: "Many prescribed medicines are handled through basic insurance and may count toward an adult's remaining eigen risico. OTC products are usually self-pay. Always verify your own policy year and remaining deductible.",
    },
    {
      q: "Do pharmacists speak English?",
      a: "Many can, especially in internationally oriented areas, but it is not guaranteed. Ask when you register or before counseling for a new medicine.",
    },
    {
      q: "Can someone else pick up my medicine?",
      a: "Sometimes, depending on pharmacy policy and the medicine. Call ahead to ask what authorisation and ID are required.",
    },
    {
      q: "Where do I learn about herhaalrecept and e-prescriptions in depth?",
      a: "This pharmacies page stays at overall orientation. Deep herhaalrecept and e-prescription mechanics belong on the Prescriptions cornerstone.",
    },
    {
      q: "What should I do if I have a bad reaction to a medicine?",
      a: "For severe symptoms such as breathing difficulty, swelling of the face or throat, or collapse, call 112. For other concerning side effects, contact your pharmacist or GP according to urgency — do not silently invent a new dosing plan.",
    },
    {
      q: "Can I use any pharmacy or only one?",
      a: "You can often fill at different pharmacies, but using one regular apotheek improves continuity and interaction checks. Keep your GP's routing updated if you switch.",
    },
    {
      q: "What if my medicine is out of stock?",
      a: "Ask the pharmacy about ordering timelines, partial supply, or clinician-approved alternatives. Do not change doses on your own while waiting.",
    },
    {
      q: "How do pharmacies fit with emergency care?",
      a: "Daytime pharmacies handle routine dispensing. After hours, urgent medicines usually follow triage to a dienstapotheek. Life-threatening emergencies still go to 112. See the Emergency Healthcare guide for the full map.",
    },
  ],
  faqQuickReference: [
    "Apotheek dispenses prescriptions; drugstores sell many OTC items.",
    "Choose a regular daytime pharmacy and tell your GP.",
    "Hours are limited — dienstapotheek is regional after triage.",
    "OTC ≠ prescription-only; recepts need clinician assessment.",
    "First dispenses include counseling — use it.",
    "Insured Rx may hit eigen risico; OTC is usually self-pay.",
    "Deep herhaalrecept detail → Prescriptions guide.",
    "112 for life-threatening emergencies.",
  ],
  howToSchema: {
    name: "Using a Pharmacy in the Netherlands",
    description:
      "Step-by-step orientation for expats choosing a Dutch pharmacy (apotheek), preparing for pickup and counseling, and understanding out-of-hours emergency pharmacy routes.",
    anchor: "#how-it-works",
  },
  relatedGuidesTips: [
    "GP prescriptions and referrals → GP guide.",
    "Urgent after-hours pathways → Emergency Healthcare.",
    "Hospital discharge medicines → Hospitals guide.",
    "Coverage and deductible → Health Insurance.",
    "Family medicine logistics → Healthcare for Children.",
    "Deep repeat prescriptions → Prescriptions.",
  ],
  relatedGuides: [
    { label: "General Practitioner (GP) in the Netherlands", href: GP_NETHERLANDS_PATH, status: "live", description: "Registration, appointments, referrals and how prescriptions start with the huisarts." },
    { label: "Emergency Healthcare", href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH, status: "live", description: "112, Huisartsenpost, SEH, ambulance and emergency pharmacy pathways." },
    { label: "Hospitals in the Netherlands", href: HOSPITALS_NETHERLANDS_PATH, status: "live", description: "Referrals, specialists, admissions and discharge medicine reconciliation." },
    { label: "Mental Healthcare", href: MENTAL_HEALTHCARE_NETHERLANDS_PATH, status: "live", description: "GP first contact, POH-GGZ, GGZ pathways and crisis routes." },
    { label: "Dentists", href: DENTISTS_NETHERLANDS_PATH, status: "live", description: "Finding a dentist, insurance, check-ups and dental emergencies." },
    { label: "Health Insurance", href: HEALTH_INSURANCE_PATH, status: "live", description: "Basic package, deductible and choosing an insurer." },
    { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "live", description: "Family healthcare pathways from birth through adolescence." },
    { label: "Prescriptions", href: PRESCRIPTIONS_NETHERLANDS_PATH, status: "live", description: "Recepten, e-prescriptions, herhaalrecept, medication lists and foreign prescriptions." },
    { label: "Physiotherapy", href: PHYSIOTHERAPY_NETHERLANDS_PATH, status: "live", description: "Fysiotherapie, direct access, insurance limits and finding a therapist." },
    { label: "Maternity care", href: MATERNITY_CARE_NETHERLANDS_PATH, status: "live", description: "Verloskundige first line, obstetric pathways, registration, insurance and kraamzorg awareness." },
    { label: "Health insurance comparison", href: HEALTH_INSURANCE_COMPARISON_PATH, status: "live", description: "Decision framework for comparing Dutch health insurance — not an insurer ranking." },
    { label: "Healthcare Basics", href: HEALTHCARE_BASICS_PATH, status: "live", description: "How Dutch healthcare fits together for everyday living." },
  ] satisfies PharmacyLink[],
  healthcareHubTips: [
    "Pharmacies connect GP care, prescriptions, insurance and urgent routes.",
    "This page is the pharmacies cornerstone; Prescriptions goes deeper on repeats.",
    "Keep Emergency Healthcare bookmarked for after-hours medicine urgency.",
    "Families should also read Healthcare for Children for paediatric pathways.",
  ],
  healthcareHubCards: [
    { label: "Pharmacies (apotheek)", href: PHARMACIES_NETHERLANDS_PATH, status: "live", description: "Finding a pharmacy, hours, OTC vs Rx, counseling and dienstapotheek — you are here." },
    { label: "General Practitioner (GP)", href: GP_NETHERLANDS_PATH, status: "live", description: "Huisarts registration, appointments and referrals." },
    { label: "Emergency Healthcare", href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH, status: "live", description: "112, Huisartsenpost, SEH and emergency pharmacy." },
    { label: "Hospitals", href: HOSPITALS_NETHERLANDS_PATH, status: "live", description: "Referrals, specialists and admissions." },
    { label: "Mental Healthcare", href: MENTAL_HEALTHCARE_NETHERLANDS_PATH, status: "live", description: "GP first contact, POH-GGZ and GGZ care." },
    { label: "Health Insurance", href: HEALTH_INSURANCE_PATH, status: "live", description: "Basic package and deductible." },
    { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "live", description: "Family and children's healthcare cornerstone." },
    { label: "Prescriptions", href: PRESCRIPTIONS_NETHERLANDS_PATH, status: "live", description: "Recepten, e-prescriptions, herhaalrecept, medication lists and foreign prescriptions." },
    { label: "Physiotherapy", href: PHYSIOTHERAPY_NETHERLANDS_PATH, status: "live", description: "Fysiotherapie, direct access, insurance limits and finding a therapist." },
    { label: "Maternity care", href: MATERNITY_CARE_NETHERLANDS_PATH, status: "live", description: "Verloskundige first line, obstetric pathways, registration, insurance and kraamzorg awareness." },
    { label: "Health insurance comparison", href: HEALTH_INSURANCE_COMPARISON_PATH, status: "live", description: "Decision framework for comparing Dutch health insurance — not an insurer ranking." },
  ] satisfies PharmacyLink[],
  exploreNextCards: [
    { label: "General Practitioner (GP)", href: GP_NETHERLANDS_PATH, status: "live", description: "See how prescriptions and referrals start with the huisarts." },
    { label: "Emergency Healthcare", href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH, status: "live", description: "Know which door to use after hours, including dienstapotheek." },
    { label: "Health Insurance", href: HEALTH_INSURANCE_PATH, status: "live", description: "Understand basic cover and eigen risico." },
    { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "live", description: "Family pathways alongside pharmacy logistics." },
    { label: "Prescriptions", href: PRESCRIPTIONS_NETHERLANDS_PATH, status: "live", description: "Deep herhaalrecept and e-prescription mechanics." },
    { label: "Hospitals", href: HOSPITALS_NETHERLANDS_PATH, status: "live", description: "Discharge medicines and specialist pathways." },
  ] satisfies PharmacyLink[],
  exploreNextTips: [
    "No GP yet → register using the GP guide.",
    "After-hours uncertainty → Emergency Healthcare.",
    "Coverage questions → Health Insurance.",
    "Family setup → Healthcare for Children.",
    "Repeat prescription depth → Prescriptions.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Understand how Dutch pharmacies and insurance basics fit together.",
        "Prepare ID, BSN, insurance details and any recept.",
        "Organize allergies, medicines and supplements in one list.",
        "Know what to ask at the counter, including language support.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Finding an apotheek near home.",
        "Opening hours and Saturday limits.",
        "OTC versus prescription doors.",
        "Service desk pickup flow.",
        "Medication counseling at first dispense.",
        "Emergency dienstapotheek after triage.",
      ],
    },
    howItWorks: {
      title: "From the visual — the pharmacy pathway",
      items: [
        "Clinician issues a prescription.",
        "Pharmacy checks and prepares.",
        "Counseling and pickup at the counter.",
        "Follow-up questions return to pharmacist or GP as appropriate.",
      ],
    },
    finding: {
      title: "From the visual — choose and register",
      items: [
        "Search by postcode near home.",
        "Confirm hours and language support.",
        "Tell your GP which pharmacy to use.",
        "Save the out-of-hours pattern separately.",
      ],
    },
    openingHours: {
      title: "From the visual — hours reality",
      items: [
        "Weekday daytime is the default.",
        "Saturday hours are limited and local.",
        "Evenings and Sundays often closed.",
        "Urgent after-hours → triage → dienstapotheek.",
      ],
    },
    otcVsRx: {
      title: "From the visual — two doors",
      items: [
        "OTC / zelfzorg without a recept when allowed.",
        "Prescription-only medicines need a valid recept.",
        "Drugstores help with many OTC items.",
        "Deep repeats → Prescriptions guide.",
      ],
    },
    serviceDesk: {
      title: "From the visual — counter readiness",
      items: [
        "Bring ID, insurance and lists.",
        "Expect checks and possible short waits.",
        "Use counseling time at first dispense.",
        "Clarify pickup rules for someone else.",
      ],
    },
    counseling: {
      title: "From the visual — counseling focus",
      items: [
        "First dispense begeleidingsgesprek.",
        "Share allergies and other medicines.",
        "Clarify timing and warning signs.",
        "Clinical dose changes stay with the GP.",
      ],
    },
    emergency: {
      title: "From the visual — after-hours route",
      items: [
        "Daytime: regular apotheek.",
        "Urgent after hours: huisartsenpost triage.",
        "Regional dienstapotheek when indicated.",
        "112 for life-threatening emergencies.",
      ],
    },
    costs: {
      title: "From the visual — cost orientation",
      items: [
        "Insured Rx may use adult eigen risico.",
        "OTC is usually self-pay.",
        "Ask what you pay today at the till.",
        "Verify rules in your insurer portal.",
      ],
    },
    differences: {
      title: "From the visual — system characteristics",
      items: [
        "Pharmacy and drugstore are different.",
        "Hours are limited compared with some countries.",
        "Counseling is expected, not optional.",
        "Emergency pharmacy is regional.",
      ],
    },
    checklist: {
      title: "From the visual — preparation priorities",
      items: [
        "Regular pharmacy + GP routing.",
        "ID, insurance, medicines, allergies.",
        "Questions for first dispenses.",
        "Out-of-hours pattern saved.",
      ],
    },
    mistakes: {
      title: "From the visual — mistakes with fixes",
      items: [
        "Drugstore for Rx → use an apotheek.",
        "Late arrival → check hours / triage route.",
        "Skipped counseling → ask before leaving.",
        "Hidden medicines → share the full list.",
      ],
    },
    faq: {
      title: "From the visual — top questions",
      items: [
        "Apotheek vs drugstore.",
        "Hours and dienstapotheek.",
        "OTC versus prescription.",
        "Counseling and costs.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next by need",
      items: [
        "GP → prescriptions start.",
        "Emergency → after-hours map.",
        "Insurance → deductible context.",
        "Prescriptions → repeats deep dive.",
      ],
    },
    healthcareHub: {
      title: "From the visual — healthcare cluster",
      items: [
        "Pharmacies cornerstone (this page).",
        "GP, emergency, hospitals, mental health.",
        "Insurance and children's healthcare.",
        "Planned: prescriptions, physio, maternity, comparison.",
      ],
    },
    exploreNext: {
      title: "From the visual — choose your next card",
      items: [
        "No GP yet → GP guide.",
        "After-hours → Emergency Healthcare.",
        "Coverage → Health Insurance.",
        "Repeats depth → Prescriptions.",
      ],
    },
  },
  sourceUsageTips: [
    "Use Government.nl for official health insurance and care organisation orientation.",
    "Use KNMP for professional pharmacy-association context — not personal dosing advice.",
    "Use Rijksoverheid topic pages for Dutch-language official explanations.",
    "Use your insurer portal for deductible and reimbursement questions.",
    "Use the Emergency Healthcare guide alongside official 112 guidance for urgent routes.",
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
      label: "KNMP — Royal Dutch Pharmacists Association",
      href: "https://www.knmp.nl/",
      description: "Professional body for Dutch pharmacists — pharmacy practice context.",
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
    "General information only — not medical advice. Pharmacy processes, insurer rules and medicine availability change, so verify your own situation with your pharmacist, GP and insurer. In an emergency, call 112.",
} as const;

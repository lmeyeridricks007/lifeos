export const PRESCRIPTIONS_NETHERLANDS_PATH = "/netherlands/health/prescriptions-netherlands/" as const;
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
export const PHYSIOTHERAPY_NETHERLANDS_PATH = "/netherlands/health/physiotherapy-netherlands/" as const;
export const MATERNITY_CARE_NETHERLANDS_PATH = "/netherlands/health/maternity-care-netherlands/" as const;
export const HEALTH_INSURANCE_COMPARISON_PATH =
  "/netherlands/health/health-insurance-comparison-netherlands/" as const;

export type PrescriptionLink = {
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
const VISUAL_PREFIX = "prescriptions-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const prescriptionsNetherlandsPage = {
  slug: "prescriptions-netherlands",
  path: PRESCRIPTIONS_NETHERLANDS_PATH,
  hubPath: HEALTH_HUB_PATH,
  parentGuidePath: HEALTHCARE_BASICS_PATH,
  publish: true,
  publishDate: "2027-02-16",
  seo: {
    title: "Prescriptions in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how prescriptions (recepten) work in the Netherlands for expats — who issues them, electronic prescriptions, pharmacy pickup, herhaalrecept, medication lists, insurance orientation and foreign prescriptions.",
    keywords: [
      "prescriptions Netherlands",
      "prescription Netherlands",
      "recept Netherlands",
      "herhaalrecept",
      "electronic prescription Netherlands",
      "e-recept Netherlands",
      "Dutch prescription",
      "repeat prescription Netherlands",
      "medication list Netherlands",
      "foreign prescription Netherlands",
      "eigen risico medicines",
      "expat prescriptions Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Health · Prescriptions",
    pageTitle: "Prescriptions in the Netherlands",
    subtitle:
      "How prescriptions (recepten) work for expats — who issues them, electronic prescriptions, pharmacy pickup, herhaalrecept, medication lists, insurance orientation and bringing foreign prescriptions.",
    primaryCta: { label: "Understand How Prescriptions Work", href: "#how-it-works" },
    secondaryCta: { label: "Explore Healthcare Guides", href: "#related-guides" },
    chips: ["Recept", "E-prescription", "Herhaalrecept", "Pharmacy pickup", "Medication list", "Foreign Rx"],
    disclaimer:
      "General orientation only — not medical advice, not dosing guidance, and not a recommendation of any medicine or pharmacy. For your own medicines, speak with your GP, pharmacist or treating clinician. Call 112 for life-threatening emergencies.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic Dutch GP consultation desk — multicultural huisarts handing a digital prescription tablet to an expat patient, medicine leaflet and medication list nearby, canal-street light through the window, calm welcoming atmosphere, no procedures.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#who-issues", label: "Who issues" },
    { href: "#electronic", label: "E-prescription" },
    { href: "#pharmacy-pickup", label: "Pharmacy pickup" },
    { href: "#herhaalrecept", label: "Herhaalrecept" },
    { href: "#medication-list", label: "Medication list" },
    { href: "#costs", label: "Costs" },
    { href: "#foreign", label: "Foreign Rx" },
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
      src: `/images/infographics/${VISUAL_PREFIX}-intro-${INFOGRAPHIC_VERSION}.png`,
      alt: "Premium orientation board titled Before Your First Dutch Prescription — four building blocks: who issues recepten, electronic routing, pharmacy pickup, and herhaalrecept readiness — with a Prescription File Checklist for ID, BSN, insurance, medication list, allergies and nominated apotheek.",
      caption:
        "Four building blocks cover readiness: who writes recepten, how they travel digitally, pickup at the apotheek, and repeat-prescription habits.",
    },
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch prescriptions — who issues recepten, electronic prescriptions, pharmacy pickup, herhaalrecept, medication lists, and foreign prescriptions — each with a one-line role description and a small Dutch-word label.",
      "Six building blocks explain almost every prescription question — the sections below add practical detail."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium prescription pathway flow — clinician assesses, issues recept, digital or paper route reaches the apotheek, pharmacist checks, counseling and pickup, then herhaalrecept or GP follow-up — calm Dutch canal-city backdrop with a record rail.",
      "Most prescription journeys run from clinician to e-recept to pharmacy pickup — with herhaalrecept for ongoing medicines."
    ),
    whoIssues: visual(
      "who-issues",
      "Premium who-issues comparison board — huisarts GP, hospital specialist, discharge prescriptions, and dentist or other clinicians — with when each typically writes a recept and a note that pharmacists dispense but do not diagnose.",
      "GPs write most everyday recepten; specialists and discharge pathways add others — pharmacists check and dispense."
    ),
    electronic: visual(
      "electronic",
      "Premium electronic prescription board — GP nominates your apotheek, digital recept travels, pharmacy prepares, ready notification, counter pickup — with a paper-route card for exceptions and a right-side checklist of what to confirm.",
      "Most recepten travel digitally to your nominated pharmacy — confirm which apotheek is on file before you travel."
    ),
    pharmacyPickup: visual(
      "pharmacy-pickup",
      "Premium pharmacy-pickup orientation — ready status, ID and insurance at the counter, first-dispense counseling, medication bag and leaflet — with a cross-link card to the Pharmacies cornerstone for finding an apotheek, hours and dienstapotheek.",
      "Pickup happens at the apotheek — this page orients the recept journey; Pharmacies owns finding, hours and emergency pharmacy depth."
    ),
    herhaalrecept: visual(
      "herhaalrecept",
      "Premium herhaalrecept timeline — stable long-term medicine, request via GP practice or pharmacy process, clinician review when needed, new recept issued, pharmacy pickup — calendar and request-channel cards without dosing advice.",
      "Repeat prescriptions are requested and reviewed — they are not automatic forever without a practice process."
    ),
    medicationList: visual(
      "medication-list",
      "Premium medication-list builder — current medicines with generic names, doses and timing, allergies and intolerances, supplements, and who to share the list with: GP, pharmacist, hospital and travel — desk scene with Dutch context.",
      "One accurate medication and allergy list makes every recept, counseling conversation and hospital visit safer."
    ),
    costs: visual(
      "costs",
      "Premium prescription cost orientation board — prescribed medicines via basic insurance, adult eigen risico, children often without deductible, pharmacy service fees possible, OTC self-pay — verify-with-insurer reminder and year label.",
      "Prescribed medicines often route through insurance and may count toward adult eigen risico — verify your own policy year."
    ),
    foreign: visual(
      "foreign",
      "Premium foreign-prescription orientation board — bring original packaging and letters, expect a Dutch clinician review, do not assume foreign recepts fill automatically, plan bridge supply before travel ends — passport and medicine-list props.",
      "Foreign prescriptions rarely fill automatically — plan a Dutch GP or specialist review and a temporary supply bridge."
    ),
    differences: visual(
      "differences",
      "Premium surprise cards for expats about Dutch prescriptions — GP-centred writing, digital routing to one pharmacy, herhaalrecept processes, counseling at first dispense, and limited walk-in specialist prescribing.",
      "Most surprises are system design — once you expect them, prescriptions become predictable."
    ),
    checklist: visual(
      "checklist",
      "Premium prescription preparation board — nominated pharmacy, medication and allergy list, herhaalrecept request habit, insurance card, questions for new medicines, and four role cards for you, GP, pharmacist and companion.",
      "A five-minute preparation routine makes new and repeat prescriptions clearer."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with Fix advice cards — assuming foreign Rx fills here, running out before requesting herhaalrecept, wrong pharmacy on file, skipping the medication list, and changing doses without clinical review.",
      "Each common mistake has a practical Fix — most are avoided with one clear habit."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with readable question and answer pairs about who issues recepten, e-prescriptions, herhaalrecept, pharmacy pickup, medication lists, costs, foreign prescriptions and English support.",
      "Orientation answers only — confirm your own situation with your GP, pharmacist and insurer."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking Prescriptions to Pharmacies, GP, emergency healthcare, hospitals, mental healthcare, health insurance, healthcare for children and dentists.",
      "Prescriptions connect to GP care, pharmacies, insurance and hospital discharge — read them together."
    ),
    healthcareHub: visual(
      "healthcare-hub",
      "Premium healthcare cluster ecosystem diagram with Prescriptions at the centre, connected to Pharmacies, GP, emergency healthcare, hospitals, mental healthcare, health insurance, children's healthcare and dentists.",
      "This page is the prescriptions cornerstone — explore the wider healthcare cluster next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from Prescriptions to Pharmacies, GP, health insurance, emergency healthcare and healthcare for children, with official source cards for Government.nl, KNMP and Rijksoverheid.",
      "Continue with pharmacy orientation and GP registration — and verify specifics on the official sources."
    ),
  },
  quickAnswer: {
    heading: "Quick answer: how prescriptions work in the Netherlands",
    summary:
      "In the Netherlands, most everyday medicines that need a prescription (recept) are issued by your GP (huisarts) or a specialist. Many recepten travel electronically to your nominated pharmacy (apotheek). You pick up after a pharmacist check — often with counseling at first dispense. Ongoing medicines usually use a herhaalrecept (repeat prescription) process through your GP practice or pharmacy, not an endless automatic refill without review. Pharmacies own finding an apotheek, hours and dienstapotheek depth — this page owns the recept journey.",
    bullets: [
      "GPs issue most everyday recepten; specialists and hospital discharge add others.",
      "Electronic prescriptions usually go to the apotheek you nominate with your GP.",
      "Pickup happens at a pharmacy after pharmacist screening and, often, first-dispense counseling.",
      "Herhaalrecept covers ongoing medicines — request early and expect periodic review.",
      "Keep a medication and allergy list; foreign prescriptions usually need a Dutch clinician review.",
    ],
    note: "Finding a pharmacy, opening hours and emergency dienstapotheek depth live on the Pharmacies guide. Use that page for apotheek operations; use this page for recept mechanics.",
  },
  introParagraphs: [
    "A Dutch recept is a clinician decision that a medicine should be dispensed under pharmacist oversight. Expats often meet the system when a huisarts sends a digital prescription to a local apotheek and a text or email says the medicine is ready. That simple loop hides several pieces newcomers need: who may write the recept, how electronic routing works, how herhaalrecept requests are made, and how insurance and eigen risico usually apply to prescribed medicines.",
    "Two mix-ups create friction. First: assuming a foreign paper prescription will fill automatically at any Dutch counter. Second: assuming repeats never need a review or that the pharmacy invents ongoing authorisation without a practice process. In reality, clinical responsibility stays with the GP or specialist; the pharmacy checks, prepares, counsels and dispenses.",
    "This guide is practical orientation for expats, students, families and newcomers: who issues prescriptions, how e-prescriptions travel, how pickup fits, how herhaalrecept works at a high level, how to keep a medication list, how costs usually connect to basic insurance, and what to do with foreign prescriptions. It is not dosing advice, not a ranking of medicines, and not a substitute for speaking with your own clinician or pharmacist.",
  ],
  introHighlights: [
    "Most everyday recepten start with your registered huisarts.",
    "Nominate one regular apotheek so digital prescriptions land in the right place.",
    "Herhaalrecept is a request-and-review process for stable ongoing medicines.",
    "A shared medication and allergy list protects you at GP, pharmacy and hospital.",
    "Pharmacies guide owns finding, hours and dienstapotheek — link there for operations.",
  ],
  orientationFlowSteps: [
    "Register with a GP and nominate your regular apotheek for digital recepten.",
    "Build a prescription file: ID, BSN, insurance, medication list and allergies.",
    "Learn the e-prescription → ready → pickup loop for first dispenses.",
    "Set a herhaalrecept habit so ongoing medicines never run out unexpectedly.",
  ],
  safetyFileChecklist: [
    "Valid ID or residence document",
    "BSN (citizen service number)",
    "Insurer name, policy number and insurance card photo",
    "Current medication list with generic names and doses",
    "Allergy and intolerance list",
    "Name of your nominated apotheek and phone number",
    "GP practice name and herhaalrecept request channel",
    "Hospital or specialist letters for recent medicine changes",
    "Questions for any new medicine before first pickup",
    "Link saved to the Pharmacies guide for hours and dienstapotheek",
  ],
  introScenarios: [
    {
      situation: "Your GP just prescribed a new medicine",
      approach:
        "Confirm which pharmacy received the digital recept, wait for ready status if offered, bring ID and insurance details, and use first-dispense counseling before you leave.",
      firstStep: "Ask the practice which apotheek is on file for you.",
    },
    {
      situation: "You take a long-term medicine and supplies are low",
      approach:
        "Use your practice or pharmacy herhaalrecept process early — do not wait until the last tablet. Expect a review when clinically needed.",
      firstStep: "Check how your GP practice accepts repeat requests and how many days ahead they need.",
    },
    {
      situation: "You arrive with a foreign prescription",
      approach:
        "Plan a Dutch GP or specialist review. Bring original packaging, letters and a medication list. Do not assume automatic filling.",
      firstStep: "Book a huisarts appointment and prepare a bridge supply plan with your clinician.",
    },
    {
      situation: "A hospital discharge changed your medicines",
      approach:
        "Bring the discharge letter and updated list to your regular pharmacy and GP so records stay aligned.",
      firstStep: "Reconcile hospital medicines with your apotheek before the next herhaalrecept request.",
    },
  ] satisfies ScenarioRow[],
  snapshotSignals: [
    {
      label: "Writer",
      value: "GP / specialist",
      note: "Most everyday recepten come from your huisarts; specialists add others.",
    },
    {
      label: "Routing",
      value: "E-prescription",
      note: "Digital recepten usually travel to your nominated apotheek.",
    },
    {
      label: "Ongoing",
      value: "Herhaalrecept",
      note: "Repeat medicines use a request-and-review process, not endless silence.",
    },
    {
      label: "Pickup",
      value: "Apotheek",
      note: "Pharmacist check and counseling happen at the pharmacy counter.",
    },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Who Issues Recepten",
      body: "Your GP writes most everyday prescriptions. Specialists, hospital discharge and some other clinicians write others. Pharmacists dispense and counsel — they do not replace the clinician decision.",
    },
    {
      title: "Electronic Prescriptions",
      body: "Many recepten are sent digitally to the pharmacy your GP has on file. Confirm the destination before you travel, and keep paper routes for the exceptions you are given.",
    },
    {
      title: "Pharmacy Pickup",
      body: "After preparation, you collect at the apotheek with ID and insurance details. First dispenses often include counseling. Finding and hours live on the Pharmacies guide.",
    },
    {
      title: "Herhaalrecept",
      body: "Ongoing medicines usually need a repeat-prescription request through your GP practice or pharmacy process, with clinical review when appropriate.",
    },
    {
      title: "Medication Lists",
      body: "Keep one accurate list of medicines, doses, allergies and supplements. Share it with GP, pharmacist and hospital teams whenever something changes.",
    },
    {
      title: "Foreign Prescriptions",
      body: "Foreign recepts rarely fill automatically. Plan a Dutch clinician review, bring documentation, and arrange a safe bridge supply before your old pack runs out.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Tell your GP which apotheek should receive digital prescriptions the week you register.",
    "Photograph discharge medicine lists before you leave hospital.",
    "Request herhaalrecept several days before you run out.",
    "Store generic names, not only brand names, in your medication list.",
    "Use the Pharmacies guide for opening hours and dienstapotheek patterns.",
    "Verify insurance and eigen risico for medicines in your insurer portal each year.",
  ],
  howItWorks: {
    heading: "How Dutch prescriptions work: from clinician to pickup",
    intro:
      "A prescription journey starts with a clinical decision, travels as a recept to a pharmacy, and ends with safe dispensing and counseling. Herhaalrecept extends that loop for stable ongoing medicines.",
    paragraphs: [
      "For many expats the flow feels digital: the huisarts assesses the problem, writes a recept, and sends it electronically to your nominated apotheek. The pharmacy screens interactions and allergies, prepares the medicine, and invites you to pick up. At first dispense, expect a short begeleidingsgesprek covering safe use and when to contact the GP.",
      "Ongoing medicines usually do not refill forever without a process. Practices and pharmacies support herhaalrecept requests so stable therapies continue under clinical oversight. If your symptoms change, doses need review, or new interactions appear, you return to the clinician — not only to the counter.",
      "Pharmacy operations — finding an apotheek, opening hours, OTC shelves and dienstapotheek — belong on the Pharmacies cornerstone. This page stays on recept mechanics: who writes, how electronic routing works, how repeats are requested, how lists and foreign prescriptions fit, and how costs usually connect to insurance.",
    ],
    flowLabels: [
      "Clinician",
      "Recept",
      "E-route / paper",
      "Apotheek check",
      "Counseling",
      "Pickup",
      "Herhaal / follow-up",
    ],
    timeline: [
      {
        phase: "1",
        title: "Clinician decides a medicine is needed",
        detail:
          "Your GP or specialist assesses the problem and, when appropriate, issues a prescription. Hospital discharge may also generate recepten to fill.",
      },
      {
        phase: "2",
        title: "Recept is created and routed",
        detail:
          "Many prescriptions travel digitally to your nominated apotheek. Paper or alternative routes still exist in some situations — follow the instructions you are given.",
      },
      {
        phase: "3",
        title: "Pharmacist checks and prepares",
        detail:
          "The pharmacy screens dose, interactions, allergies and supply. They may contact the clinician if something needs clarification.",
      },
      {
        phase: "4",
        title: "You are invited to pick up",
        detail:
          "A message, call or ready status tells you the medicine can be collected during opening hours. Bring ID and insurance details.",
      },
      {
        phase: "5",
        title: "Counseling at first dispense",
        detail:
          "Especially for new medicines, the pharmacist explains safe use, timing and what to report. Ask questions before you leave.",
      },
      {
        phase: "6",
        title: "Home use and monitoring",
        detail:
          "Follow the agreed plan. Contact the pharmacy for practical medicine questions and your GP for clinical change or worsening symptoms.",
      },
      {
        phase: "7",
        title: "Herhaalrecept or clinical follow-up",
        detail:
          "For ongoing medicines, request a repeat through your practice or pharmacy process before you run out. Return to the clinician when review is needed.",
      },
    ] satisfies TimelineStep[],
    decisionTips: [
      "New symptom assessment → GP appointment or appropriate urgent route.",
      "First prescription → confirm nominated pharmacy → pickup + counseling.",
      "Ongoing stable medicine → herhaalrecept request early.",
      "Hospital discharge changes → reconcile list with GP and apotheek.",
      "Foreign prescription → Dutch clinician review, not automatic fill.",
      "Pharmacy hours / dienstapotheek → Pharmacies guide.",
      "Life-threatening emergency → 112.",
    ],
    howToSteps: [
      {
        name: "Register with a GP and nominate a pharmacy",
        text: "Choose a huisarts practice and tell them which apotheek should receive your digital prescriptions.",
      },
      {
        name: "Build a prescription file",
        text: "Store ID, BSN, insurance card photo, current medication list and allergies where you can reach them quickly.",
      },
      {
        name: "Confirm routing before you travel",
        text: "When a new recept is written, ask which pharmacy received it and whether a ready notification is expected.",
      },
      {
        name: "Use first-dispense counseling",
        text: "Ask how to take the medicine, what to avoid, and what symptoms mean you should contact the GP.",
      },
      {
        name: "Set a herhaalrecept habit",
        text: "Learn your practice's request channel and lead time so ongoing medicines never run out unexpectedly.",
      },
      {
        name: "Update lists after every change",
        text: "After hospital, specialist or travel changes, refresh the shared medication and allergy list.",
      },
      {
        name: "Verify costs in your insurer portal",
        text: "Check how prescribed medicines interact with your remaining adult eigen risico for the current year.",
      },
      {
        name: "Use Pharmacies for operations depth",
        text: "For finding an apotheek, opening hours and dienstapotheek patterns, follow the Pharmacies cornerstone.",
      },
    ] satisfies HowToStep[],
  },
  whoIssues: {
    heading: "Who issues prescriptions: GP, specialist and other routes",
    intro:
      "Most everyday recepten come from your registered huisarts. Specialists and hospital teams write prescriptions for their pathways. Pharmacists check and dispense — they do not replace the clinician who decides a medicine is appropriate.",
    paragraphs: [
      "Your GP is the default writer for common acute and chronic medicines once you are registered. Practice assistants often help with herhaalrecept logistics, but clinical decisions stay with the GP or treating clinician.",
      "Hospital specialists write recepten for medicines started in outpatient or inpatient care. Discharge letters should list what changed so your GP and regular pharmacy can reconcile. Dentists and some other clinicians may prescribe within their scope — ask what to do next for pickup.",
      "If you do not yet have a GP, solving registration usually unlocks everyday prescribing. Urgent situations without a registered GP may go through huisartsenpost pathways — see Emergency Healthcare for door choice, not for inventing a medicine plan.",
    ],
    cards: [
      {
        title: "Huisarts (GP)",
        body: "Primary writer for most everyday and many chronic medicines once you are registered. Also coordinates referrals and often owns herhaalrecept review.",
      },
      {
        title: "Specialist",
        body: "Writes recepten for medicines started or managed in specialist care. Keep the GP informed so your overall list stays coherent.",
      },
      {
        title: "Hospital discharge",
        body: "Discharge may include new or changed prescriptions. Bring papers to your regular apotheek and GP promptly.",
      },
      {
        title: "Pharmacist role",
        body: "Screens, prepares, counsels and dispenses. Contacts the clinician when clarification is needed. Does not diagnose or invent treatment plans.",
      },
    ] satisfies TipCard[],
    points: [
      "Register with a GP early — everyday recepten depend on it.",
      "Specialist medicines still benefit from GP and pharmacy list reconciliation.",
      "Discharge letters are part of your prescription file.",
      "Pharmacists dispense; clinicians prescribe.",
      "Urgent care without a GP uses triage pathways — not DIY prescribing.",
      "Tell every writer which apotheek should receive digital recepten.",
    ],
    checklist: [
      "GP practice registered",
      "Nominated apotheek on file",
      "Specialist letters saved",
      "Discharge medicine list photographed",
      "Pharmacy told about hospital changes",
      "Herhaalrecept channel known for GP-managed medicines",
      "Emergency Healthcare bookmarked for urgent doors",
      "Pharmacies guide bookmarked for pickup operations",
    ],
    scenarios: [
      {
        situation: "You need antibiotics after a GP consult",
        approach:
          "The GP assesses and, if appropriate, sends a recept to your pharmacy. Pick up during opening hours after ready status.",
        firstStep: "Confirm the destination apotheek before leaving the practice.",
      },
      {
        situation: "A specialist starts a new long-term medicine",
        approach:
          "Clarify who will manage repeats — specialist or GP — and update your medication list and pharmacy.",
        firstStep: "Ask who owns herhaalrecept for this medicine going forward.",
      },
      {
        situation: "You leave hospital with new tablets",
        approach:
          "Fill as instructed, then reconcile with your regular apotheek and GP so interaction checks stay accurate.",
        firstStep: "Keep the discharge letter with the medicine names and doses.",
      },
      {
        situation: "You are not yet registered with a GP",
        approach:
          "Prioritise huisarts registration for everyday prescribing. Use urgent pathways only for true urgency.",
        firstStep: "Open the GP guide and start registration while arranging temporary clinical review if needed.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "One nominated pharmacy reduces lost digital recepten.",
      "After every specialist visit, ask whether a new recept was sent.",
      "Keep brand and generic names when you note discharge medicines.",
      "If two clinicians prescribe, ask who leads dose changes.",
    ],
    contrastRows: [
      {
        route: "Huisarts recept",
        when: "Most everyday and many chronic medicines",
        how: "Consultation or agreed herhaalrecept process",
        note: "Default for registered patients",
      },
      {
        route: "Specialist recept",
        when: "Medicines started or managed in specialist care",
        how: "Outpatient or inpatient pathway",
        note: "Reconcile with GP and apotheek",
      },
      {
        route: "Discharge recept",
        when: "After hospital stay or day treatment",
        how: "Follow discharge instructions for filling",
        note: "Update regular pharmacy history",
      },
      {
        route: "Urgent pathway",
        when: "True urgency without routine GP access",
        how: "Huisartsenpost or emergency routes as appropriate",
        note: "See Emergency Healthcare",
      },
    ] satisfies ContactRouteRow[],
  },
  electronic: {
    heading: "Electronic prescriptions: how digital recepten travel",
    intro:
      "Many Dutch prescriptions are electronic. Your GP or specialist sends the recept to a nominated pharmacy; you collect when it is ready. Confirming the destination prevents wasted trips.",
    paragraphs: [
      "Ask your practice which apotheek is stored for you. If you move house or change pharmacies, update both the practice and the pharmacies involved so new recepten do not land in the wrong place.",
      "Ready notifications vary: SMS, email, app or a call. A ready message does not extend opening hours. If you need medicine after closing, use the out-of-hours pattern described in Pharmacies and Emergency Healthcare — do not assume every counter is open.",
      "Paper or alternative routes still appear in some situations. Follow the instructions on the day. The principle stays the same: a valid clinician recept, a pharmacist check, then dispensing.",
    ],
    cards: [
      {
        title: "Nominate the right apotheek",
        body: "Tell your GP practice which pharmacy should receive digital prescriptions and verify it after any move.",
      },
      {
        title: "Ready status",
        body: "Wait for preparation when possible. Arriving before the pharmacy has processed the recept often means a longer wait or a second trip.",
      },
      {
        title: "Exceptions",
        body: "Some pathways still use paper or special routing. Follow clinician and pharmacy instructions rather than inventing a transfer.",
      },
      {
        title: "Privacy and identity",
        body: "Bring ID to pickup. Ask the pharmacy what authorisation is needed if someone else collects for you.",
      },
    ] satisfies TipCard[],
    points: [
      "Digital routing depends on the pharmacy on file at the practice.",
      "Update routing when you change apotheek.",
      "Ready messages are convenience — hours still apply.",
      "Pharmacists may call the clinician if something needs clarification.",
      "Keep prescription references if you are given them.",
      "Deep pharmacy hour patterns → Pharmacies guide.",
    ],
    checklist: [
      "Nominated pharmacy confirmed with GP",
      "Pharmacy phone number saved",
      "Ready-notification preference known",
      "ID available for pickup",
      "Plan B if recept landed at the wrong pharmacy",
      "Saturday hours checked before weekend pickup",
      "Out-of-hours pattern saved via Pharmacies / Emergency guides",
      "Medication list ready for counseling",
    ],
    scenarios: [
      {
        situation: "The recept went to the wrong pharmacy",
        approach:
          "Call both pharmacies and the GP practice assistant to reroute. Do not travel until you know where it sits.",
        firstStep: "Confirm current destination before leaving home.",
      },
      {
        situation: "You never received a ready message",
        approach:
          "Call the nominated pharmacy and ask whether the recept arrived and whether preparation is complete.",
        firstStep: "Verify the pharmacy on file with the practice.",
      },
      {
        situation: "You need the medicine today near closing time",
        approach:
          "Call ahead, confirm readiness, and arrive with buffer for counseling and insurance processing.",
        firstStep: "Check opening hours on the Pharmacies guide pattern for your own apotheek.",
      },
      {
        situation: "You switched pharmacies last month",
        approach:
          "Update the GP practice and ask both pharmacies about any open recepten still pending.",
        firstStep: "Change the on-file apotheek before the next prescription is written.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Put GP and pharmacy pins next to each other in maps.",
      "Screenshot the practice confirmation of your nominated apotheek.",
      "If English counseling matters, ask before first dispense of a complex medicine.",
      "Keep one shared family note if household members use different pharmacies.",
    ],
  },
  pharmacyPickup: {
    heading: "Pharmacy pickup: where the recept becomes medicine",
    intro:
      "Pickup is the apotheek step: identity check, pharmacist screening, counseling when needed, and dispensing. This section orients the recept side of pickup — finding a pharmacy, hours and dienstapotheek depth live on the Pharmacies cornerstone.",
    paragraphs: [
      "Bring ID, insurance details, your medication list and any ready confirmation. At first dispense, budget time for counseling questions. If the medicine is for someone else, ask in advance what authorisation is required.",
      "Stock issues, partial supplies and clinician clarifications can delay pickup. Do not change doses on your own while waiting. Ask the pharmacy what options exist and whether the GP needs to be contacted.",
      "For opening hours, Saturday patterns, drugstore versus pharmacy differences and regional dienstapotheek routes, use the Pharmacies guide. For life-threatening emergencies, call 112.",
    ],
    cards: [
      {
        title: "What to bring",
        body: "ID, insurance card or details, medication and allergy list, and questions for new medicines.",
      },
      {
        title: "What happens at the counter",
        body: "Checks, possible short wait, counseling especially at first dispense, medicine bag and leaflet.",
      },
      {
        title: "If something is unclear",
        body: "Pharmacists clarify practical use and may contact the clinician. Clinical dose changes stay with the GP or specialist.",
      },
      {
        title: "Operations depth elsewhere",
        body: "Finding an apotheek, hours and emergency pharmacy belong on the Pharmacies page — linked below.",
      },
    ] satisfies TipCard[],
    points: [
      "Pickup requires a valid recept and pharmacist check.",
      "First dispenses deserve counseling time.",
      "Someone else collecting may need advance authorisation.",
      "Do not invent doses during stock delays.",
      "Use Pharmacies for hours and dienstapotheek.",
      "Use Emergency Healthcare for urgent door choice after hours.",
    ],
    checklist: [
      "Ready status confirmed when possible",
      "ID and insurance details packed",
      "Medication and allergy list available",
      "Questions written for new medicines",
      "Opening hours checked",
      "Authorisation arranged if someone else collects",
      "Pharmacies guide bookmarked",
      "Emergency Healthcare bookmarked for after-hours urgency",
    ],
    scenarios: [
      {
        situation: "First dispense of a new chronic medicine",
        approach:
          "Arrive with time for counseling. Confirm timing, what to report, and how herhaalrecept will work later.",
        firstStep: "Write three questions before you reach the counter.",
      },
      {
        situation: "Medicine is not in stock",
        approach:
          "Ask about ordering timelines, partial supply, or clinician-approved alternatives. Do not skip doses silently without advice.",
        firstStep: "Call the pharmacy early the same day you learn about the gap.",
      },
      {
        situation: "You need pickup after closing",
        approach:
          "Do not assume a random open shop. Follow triage and dienstapotheek guidance when urgency is real.",
        firstStep: "Open Pharmacies and Emergency Healthcare for the after-hours pattern.",
      },
      {
        situation: "A family member will collect for you",
        approach:
          "Ask the pharmacy what ID and permission they need before that person travels.",
        firstStep: "Call ahead the same morning.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Treat first-dispense counseling as part of the prescription, not an optional chat.",
      "Keep the leaflet with your medication list photo.",
      "If costs surprise you at the till, ask what relates to eigen risico versus self-pay.",
      "Reconcile hospital discharge packs with your regular apotheek within a few days.",
    ],
    crossLink: {
      label: "Pharmacies in the Netherlands",
      href: PHARMACIES_NETHERLANDS_PATH,
      description:
        "Finding an apotheek, opening hours, OTC vs prescription pickup orientation, counseling context and dienstapotheek pathways.",
      status: "live" as const,
    },
  },
  herhaalrecept: {
    heading: "Herhaalrecept: repeat prescriptions for ongoing medicines",
    intro:
      "Herhaalrecept is the Dutch repeat-prescription pathway for many stable ongoing medicines. It is a request-and-review process — not a promise that medicines refill forever without clinical oversight.",
    paragraphs: [
      "Practices differ in how you request repeats: online portal, phone, email, pharmacy-supported request, or another channel. Learn your practice's method and lead time. Requesting several days before you run out prevents stressful gaps.",
      "Clinicians may want a review before extending some medicines — for example after dose changes, side effects, new diagnoses, pregnancy plans, or long intervals without contact. That review protects you; it is not bureaucratic harassment.",
      "Pharmacy staff often help with logistics and may flag interaction or supply issues. They still need a valid recept from the responsible clinician. If ownership of a specialist-started medicine is unclear, ask who manages repeats going forward.",
    ],
    cards: [
      {
        title: "Request early",
        body: "Build a habit of requesting before the pack is empty. Lead times vary by practice and medicine.",
      },
      {
        title: "Know the channel",
        body: "Portal, phone, pharmacy request or another route — save the correct path for your practice.",
      },
      {
        title: "Expect reviews",
        body: "Some medicines need periodic GP or specialist review before the next recept is issued.",
      },
      {
        title: "Keep lists current",
        body: "Update your medication list whenever a repeat set changes, stops or adds a new item.",
      },
    ] satisfies TipCard[],
    points: [
      "Herhaalrecept is requested — it is not always automatic.",
      "Lead times matter; do not wait for the last tablet.",
      "Clinical reviews are part of safe ongoing care.",
      "Clarify GP versus specialist ownership for each long-term medicine.",
      "Pharmacy logistics help, but recepts still need clinician authorisation.",
      "Travel and holidays need earlier requests.",
    ],
    checklist: [
      "List of ongoing medicines marked for herhaalrecept",
      "Practice request channel saved",
      "Typical lead time known",
      "Calendar reminder before pack ends",
      "Review appointments booked when asked",
      "Pharmacy informed of medicine changes",
      "Holiday travel buffer planned",
      "Specialist vs GP ownership clarified per medicine",
    ],
    scenarios: [
      {
        situation: "You have five days of tablets left",
        approach:
          "Submit the herhaalrecept request immediately and call if your practice's lead time is longer than five days.",
        firstStep: "Use the official request channel today — do not wait for the weekend.",
      },
      {
        situation: "The practice asks you to book a review first",
        approach:
          "Book promptly. Explain supply timing so they can plan any bridging steps if clinically appropriate.",
        firstStep: "Schedule the review and tell the pharmacy you are awaiting renewal.",
      },
      {
        situation: "A specialist started the medicine last year",
        approach:
          "Ask whether repeats now sit with the GP or remain with the specialist clinic.",
        firstStep: "Clarify ownership before the next request.",
      },
      {
        situation: "You are travelling for three weeks",
        approach:
          "Request early enough for pickup before departure. Ask clinician and pharmacist about travel supply rules that apply to you.",
        firstStep: "Start the request at least one practice lead-time before travel.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Put a phone reminder at roughly 75% of each pack.",
      "Keep one note with medicine name, dose, and who owns repeats.",
      "If a request is refused or delayed, ask what clinical step is missing.",
      "Never double doses to 'catch up' after a gap without clinician advice.",
    ],
    timeline: [
      {
        phase: "1",
        title: "Medicine is stable and ongoing",
        detail: "You and your clinician agree a long-term medicine is appropriate to continue under review.",
      },
      {
        phase: "2",
        title: "You request a herhaalrecept",
        detail: "Use your practice or pharmacy-supported channel with enough lead time.",
      },
      {
        phase: "3",
        title: "Clinician reviews when needed",
        detail: "Some requests are extended; others need an appointment, message or test first.",
      },
      {
        phase: "4",
        title: "New recept is issued",
        detail: "The prescription is created and usually sent digitally to your nominated apotheek.",
      },
      {
        phase: "5",
        title: "Pharmacy prepares and you pick up",
        detail: "Collect during opening hours after ready status, with ID and insurance details.",
      },
    ] satisfies TimelineStep[],
  },
  medicationList: {
    heading: "Medication lists: the file every recept depends on",
    intro:
      "An accurate medication and allergy list makes prescribing, dispensing and hospital care safer. Expats who keep only brand names or forget supplements create avoidable friction.",
    paragraphs: [
      "Include prescription medicines, important zelfzorg products you use regularly, vitamins and supplements that matter for interactions, and known allergies or intolerances. Prefer generic names plus brand if you use both.",
      "Share the list with your GP, pharmacist and hospital teams whenever medicines change. After discharge, reconcile hospital lists with your regular apotheek so interaction checks stay coherent.",
      "A list is not medical advice and not a substitute for clinician review. It is the shared record that helps professionals protect you.",
    ],
    cards: [
      {
        title: "What to record",
        body: "Generic name, brand if relevant, dose, timing, reason if known, and who prescribed it.",
      },
      {
        title: "Allergies and intolerances",
        body: "Medicine name, reaction type, and approximate date if known. Update after any new reaction.",
      },
      {
        title: "Supplements",
        body: "Include products that may interact. Pharmacists often ask — honesty helps screening.",
      },
      {
        title: "Who receives the list",
        body: "GP practice, regular apotheek, hospital admissions, and travel clinicians when relevant.",
      },
    ] satisfies TipCard[],
    points: [
      "One shared list beats scattered photos of boxes.",
      "Update after every hospital or specialist change.",
      "Generic names travel better across countries.",
      "Allergies belong on the same sheet as medicines.",
      "Bring the list to first-dispense counseling.",
      "Keep a paper copy in your go-bag for urgent care.",
    ],
    checklist: [
      "Current prescription medicines listed",
      "Doses and timing noted",
      "Allergies and intolerances listed",
      "Supplements noted",
      "Generic names included",
      "GP and pharmacy have the latest version",
      "Discharge changes reconciled",
      "Travel copy packed when leaving the country",
    ],
    scenarios: [
      {
        situation: "You take medicines from both a specialist and a GP",
        approach:
          "Merge into one list and confirm both writers know the full set.",
        firstStep: "Rewrite a single list this week and share it with GP and apotheek.",
      },
      {
        situation: "You only remember brand names from home",
        approach:
          "Ask the pharmacist or GP to help map generic names for your Dutch records.",
        firstStep: "Bring original packs or photos to the next appointment.",
      },
      {
        situation: "Hospital changed two medicines",
        approach:
          "Update the list the same day and visit or call your regular pharmacy for reconciliation.",
        firstStep: "Photograph the discharge medicine section before leaving.",
      },
      {
        situation: "You start a new supplement",
        approach:
          "Add it to the list and mention it at the next pharmacy or GP contact.",
        firstStep: "Write it down before you forget the product name.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Store the list in your phone notes and as a PDF photo.",
      "Date the list every time you edit it.",
      "If a medicine stops, mark it stopped — do not delete history blindly before telling clinicians.",
      "Children's lists should include weight-sensitive notes only as provided by clinicians — never invent paediatric doses.",
    ],
  },
  costs: {
    heading: "Costs & insurance: medicines, eigen risico and what to verify",
    intro:
      "Many prescribed medicines are handled through basic health insurance (basisverzekering). Adults usually have an annual deductible (eigen risico) that can apply to insured care, including many medicines. Figures change by year — verify your own policy.",
    paragraphs: [
      "Indicative framing for orientation only (verify for the current policy year): adult mandatory eigen risico is commonly discussed around €385 per year in recent Dutch basic-insurance years, but your remaining balance, insurer rules, medicine reimbursement status and any voluntary higher deductible can change what you pay at the pharmacy.",
      "Children typically do not have the same adult deductible pattern for basic insured care — confirm family rules with your insurer. OTC / zelfzorg products are usually self-pay. Pharmacies may apply service or dispensing fees depending on the situation — ask what you are paying today.",
      "This is not a price quote and not insurance advice. Use your insurer portal, policy documents and pharmacist explanation for your case. Deeper package choice belongs on the Health Insurance guide.",
    ],
    indicativeNote:
      "Indicative cost orientation only — figures and rules change by policy year. Verify remaining eigen risico, reimbursement status and any pharmacy fees with your insurer and pharmacist. Not a quote and not financial advice.",
    indicativeRows: [
      {
        item: "Adult mandatory eigen risico (basic insurance)",
        indicative: "Often cited around €385 / year in recent policy years",
        whatYouPay: "Remaining deductible may apply to many insured medicines until the annual amount is met",
        note: "Verify your year and remaining balance in the insurer portal",
      },
      {
        item: "Prescribed medicine via basic insurance",
        indicative: "Often billed via insurer processes",
        whatYouPay: "May count toward remaining adult eigen risico; some items have different rules",
        note: "Ask the pharmacy what applies to this recept today",
      },
      {
        item: "Children on basic insurance",
        indicative: "Different deductible pattern than adults",
        whatYouPay: "Confirm family rules — do not assume adult deductible logic",
        note: "Verify with insurer for each child policy setup",
      },
      {
        item: "OTC / zelfzorg products",
        indicative: "Usually not via recept insurance billing",
        whatYouPay: "Typically self-pay at pharmacy or drugstore",
        note: "Not the same as prescription reimbursement",
      },
      {
        item: "Pharmacy service / dispensing fees",
        indicative: "May apply depending on situation",
        whatYouPay: "Ask for a clear till explanation",
        note: "Varies — verify at your apotheek",
      },
    ],
    orientationCards: [
      {
        title: "Check remaining deductible",
        body: "Before expensive new medicines, look up remaining adult eigen risico for the current year.",
      },
      {
        title: "Ask at the till",
        body: "If the amount surprises you, ask which part is medicine cost, deductible, or fees.",
      },
      {
        title: "Reimbursement status",
        body: "Not every product is reimbursed the same way. Your insurer and pharmacist can explain the category for your recept.",
      },
      {
        title: "Policy changes each year",
        body: "January policy switches can change networks and reimbursement details — re-check after renewals.",
      },
    ] satisfies TipCard[],
    costFactors: [
      "Whether the medicine is reimbursed under basic insurance",
      "Your remaining adult eigen risico for the calendar year",
      "Any voluntary higher deductible you chose",
      "Child versus adult policy rules",
      "Pharmacy fees that may apply",
      "OTC self-pay versus prescribed insured medicines",
    ],
    checklist: [
      "Insurer app or portal bookmarked",
      "Remaining eigen risico checked this year",
      "Policy number available at pickup",
      "Till explanation requested when amounts are unclear",
      "OTC vs insured Rx distinguished",
      "Family / children rules verified",
      "Health Insurance guide bookmarked",
      "No assumption that foreign insurance works the same way",
    ],
    scenarios: [
      {
        situation: "The pharmacy asks for a payment you did not expect",
        approach:
          "Ask calmly which component you are paying. Check remaining deductible in your portal afterward.",
        firstStep: "Request an itemised explanation at the counter.",
      },
      {
        situation: "It is January and you switched insurers",
        approach:
          "Update pharmacy records and re-check reimbursement and deductible settings for the new year.",
        firstStep: "Bring new insurance details on the next pickup.",
      },
      {
        situation: "Your child needs a prescribed medicine",
        approach:
          "Do not assume adult eigen risico logic. Confirm family rules with the insurer.",
        firstStep: "Check the child's coverage note in your insurer portal.",
      },
      {
        situation: "You also buy OTC products in the same visit",
        approach:
          "Expect OTC to be self-pay even if the prescribed item bills via insurance processes.",
        firstStep: "Separate the two categories mentally before you reach the till.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Screenshot remaining deductible after large medicine months.",
      "Keep insurer chat or call reference numbers when rules are unclear.",
      "Ask about preference policies for generic equivalents without treating that as dosing advice.",
      "Read Health Insurance for package and deductible orientation beyond pharmacy tills.",
    ],
    crossLink: {
      label: "Health Insurance in the Netherlands",
      href: HEALTH_INSURANCE_PATH,
      description: "Basic package, deductible orientation and choosing an insurer — verify current-year rules.",
      status: "live" as const,
    },
  },
  foreign: {
    heading: "Foreign prescriptions: bridging to Dutch care",
    intro:
      "A prescription from another country rarely fills automatically in the Netherlands. Plan a Dutch clinician review, bring documentation, and arrange a safe bridge supply before your old pack runs out.",
    paragraphs: [
      "Bring original packaging, clinic letters, a medication list with generic names, and allergy information. Book a huisarts appointment (or specialist pathway when appropriate) so a Dutch recept can be considered under local rules.",
      "Do not stop critical medicines abruptly without clinical advice. If you are arriving soon and supplies are short, seek guidance early — urgent pathways exist for true urgency, while routine conversion belongs with GP registration and scheduled review.",
      "Customs, controlled medicines and travel certificates are situation-specific. This page does not provide legal clearance advice. Ask clinicians and official sources what applies to your medicines before you travel.",
    ],
    cards: [
      {
        title: "Documents to bring",
        body: "Original packs, letters, generic names, doses, allergies and treating clinician contact if available.",
      },
      {
        title: "Dutch review",
        body: "Expect a GP or specialist to assess whether and how to continue a medicine under Dutch prescribing rules.",
      },
      {
        title: "Bridge supply",
        body: "Plan timing so you do not run out between arrival and the first Dutch recept.",
      },
      {
        title: "Not automatic filling",
        body: "Foreign paper recepts are not a guarantee of Dutch dispensing. Ask before you rely on them.",
      },
    ] satisfies TipCard[],
    points: [
      "Foreign recept ≠ automatic Dutch fill.",
      "Generic names help Dutch clinicians and pharmacists.",
      "Register with a GP to unlock everyday prescribing.",
      "Urgent shortages need triage — not DIY dose changes.",
      "Hospital or specialist medicines may need specialty follow-up.",
      "Travel and controlled-medicine rules need official verification.",
    ],
    checklist: [
      "Medication list with generic names prepared",
      "Original packaging or clear photos packed",
      "Clinic letters saved as PDF",
      "GP registration started or completed",
      "Bridge supply days calculated",
      "Allergy list included",
      "Pharmacy nominated after GP registration",
      "Urgent pathway understood via Emergency Healthcare if needed",
    ],
    scenarios: [
      {
        situation: "You arrive with two weeks of a chronic medicine left",
        approach:
          "Book a GP appointment promptly and bring full documentation. Do not wait until day thirteen.",
        firstStep: "Request a huisarts intake focused on medicine continuity.",
      },
      {
        situation: "A pharmacy declines a foreign paper prescription",
        approach:
          "Treat that as expected in many cases. Seek Dutch clinician review rather than arguing for automatic fill.",
        firstStep: "Contact a GP pathway with your medication file.",
      },
      {
        situation: "Your medicine has a different brand name here",
        approach:
          "Ask clinician and pharmacist to map the generic equivalent. Do not switch products on brand recognition alone.",
        firstStep: "Show the original pack and generic name at the appointment.",
      },
      {
        situation: "You need a temporary urgent supply",
        approach:
          "Use appropriate urgent care pathways for true urgency. Explain the shortage clearly and bring documentation.",
        firstStep: "Follow Emergency Healthcare door choice — call 112 only for life-threatening emergencies.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Translate key letter headings before arrival if you can.",
      "Keep medicines in hand luggage when flying when rules allow.",
      "Ask your home clinician for a summary letter before you move.",
      "After the first Dutch recept, set herhaalrecept reminders immediately.",
    ],
    urgencyRows: [
      {
        situation: "Life-threatening allergic reaction or collapse",
        level: "emergency",
        action: "Call 112 immediately.",
      },
      {
        situation: "Critical medicine nearly finished and no GP yet",
        level: "urgent",
        action: "Use huisartsenpost / urgent guidance as appropriate; bring documentation.",
      },
      {
        situation: "Routine conversion of a stable foreign prescription",
        level: "routine",
        action: "Book GP registration and a scheduled medicine review.",
      },
    ] satisfies UrgencyRow[],
  },
  differences: {
    heading: "Common differences expats notice",
    intro:
      "Dutch prescription culture is GP-centred, often digital, and paired with pharmacist counseling. These differences are system design — once expected, they become predictable.",
    cards: [
      {
        title: "GP-centred writing",
        body: "Example: expecting walk-in specialist prescriptions for everyday medicines.",
        advice: "Register with a huisarts for most recepten and herhaalrecept review.",
      },
      {
        title: "Digital routing to one pharmacy",
        body: "Example: wandering between shops looking for a paper script.",
        advice: "Nominate an apotheek and confirm where each new recept was sent.",
      },
      {
        title: "Herhaalrecept is a process",
        body: "Example: assuming endless automatic refills without requests or reviews.",
        advice: "Learn the request channel and lead time; book reviews when asked.",
      },
      {
        title: "Counseling at first dispense",
        body: "Example: treating the counter as a silent checkout.",
        advice: "Use begeleidingsgesprek time for safety questions.",
      },
      {
        title: "Foreign recepts need translation into Dutch care",
        body: "Example: handing a home-country script to any counter.",
        advice: "Plan a Dutch clinician review and bridge supply.",
      },
      {
        title: "Pharmacy hours are limited",
        body: "Example: arriving late evening for routine pickup.",
        advice: "Check hours; use Pharmacies / Emergency guides for after-hours urgency.",
      },
    ] satisfies MistakeCard[],
    tips: [
      "Treat the GP–pharmacy pair as your home base for medicines.",
      "Keep digital routing updated like you keep your address updated.",
      "Build herhaalrecept into your calendar, not your panic response.",
      "Read Pharmacies alongside this page for operational reality.",
    ],
  },
  preparation: {
    heading: "Prescription checklist for expats",
    paragraphs: [
      "Use this checklist when you register with a GP, start a new medicine, set up herhaalrecept, or convert foreign prescriptions into Dutch care.",
      "Pair it with the Pharmacies checklist for finding an apotheek and saving opening hours.",
    ],
    checklist: [
      "GP registered",
      "Apotheek nominated for digital recepten",
      "ID, BSN and insurance details ready",
      "Medication list with generic names",
      "Allergy and intolerance list",
      "Herhaalrecept request channel saved",
      "Lead-time reminder set for ongoing medicines",
      "First-dispense questions prepared",
      "Discharge letters filed after hospital care",
      "Foreign prescription documents packed if converting",
      "Insurer portal checked for deductible context",
      "Pharmacies and Emergency guides bookmarked",
    ],
    roleCards: [
      { role: "You", focus: "Keep lists current, request repeats early, and ask questions at first dispense." },
      { role: "GP / clinician", focus: "Assess, prescribe, review ongoing medicines and clarify ownership of specialist therapies." },
      { role: "Pharmacist", focus: "Screen, prepare, counsel and dispense — contact clinicians when clarification is needed." },
      { role: "Companion", focus: "Help with language, pickup authorisation and remembering counseling points when invited." },
    ] satisfies RoleCard[],
    tips: [
      "Complete GP nomination of pharmacy in the same week you register.",
      "Photograph every discharge medicine list.",
      "Keep a go-bag copy of your medication list for urgent care.",
      "Rehearse the herhaalrecept channel once before you need it urgently.",
    ],
  },
  mistakes: {
    heading: "Common expat mistakes (and how to fix them)",
    intro: "These mistakes are common and fixable. Each one has a practical correction.",
    cards: [
      {
        title: "Assuming a foreign prescription fills automatically",
        body: "Example: handing a home-country script to a Dutch till and expecting immediate dispensing.",
        advice: "Book a Dutch clinician review and bring full documentation.",
      },
      {
        title: "Running out before requesting herhaalrecept",
        body: "Example: noticing two tablets left on a Sunday night.",
        advice: "Request early using the practice channel; set calendar reminders.",
      },
      {
        title: "Wrong pharmacy on file",
        body: "Example: travelling to pharmacy A while the recept sits at pharmacy B.",
        advice: "Confirm the nominated apotheek whenever a new recept is written.",
      },
      {
        title: "Skipping the medication list",
        body: "Example: forgetting supplements or specialist medicines during counseling.",
        advice: "Keep one shared list and update it after every change.",
      },
      {
        title: "Changing doses without clinical review",
        body: "Example: doubling tablets after a missed day or stretching packs.",
        advice: "Ask the GP or pharmacist what to do — do not invent a new plan.",
      },
      {
        title: "Using SEH for routine prescription logistics",
        body: "Example: going to hospital A&E because a daytime pharmacy was missed.",
        advice: "Use GP/pharmacy hours or urgent triage routes — SEH is for emergencies.",
      },
    ] satisfies MistakeCard[],
    adaptationTips: [
      "Make herhaalrecept requests part of monthly admin like paying rent.",
      "Treat digital routing updates like changing your address.",
      "Use counseling fully on first dispenses.",
      "Keep GP, pharmacy and insurer details in one phone folder.",
      "Read Pharmacies for hours and dienstapotheek before the first late-night scare.",
      "Convert foreign medicines through clinicians, not hope.",
    ],
  },
  faq: [
    {
      q: "Who can issue a prescription in the Netherlands?",
      a: "Most everyday recepten are issued by your GP (huisarts). Specialists, hospital discharge pathways and some other clinicians also prescribe within their roles. Pharmacists check and dispense but do not replace the clinician decision.",
    },
    {
      q: "How do electronic prescriptions work?",
      a: "Many recepten are sent digitally to the pharmacy nominated with your GP practice. Confirm which apotheek is on file, wait for ready status when offered, then pick up with ID and insurance details.",
    },
    {
      q: "What is a herhaalrecept?",
      a: "A herhaalrecept is a repeat prescription for many ongoing medicines. You usually request it through your GP practice or a pharmacy-supported process, and clinicians may require a review before extending some medicines.",
    },
    {
      q: "Where do I pick up prescribed medicines?",
      a: "At an apotheek (pharmacy) after pharmacist screening. Finding a pharmacy, opening hours and dienstapotheek depth are covered in the Pharmacies guide.",
    },
    {
      q: "Can I use a foreign prescription in the Netherlands?",
      a: "Usually not as an automatic fill. Plan a Dutch GP or specialist review, bring documentation and packaging, and arrange a bridge supply. Ask before you rely on a foreign paper script.",
    },
    {
      q: "How do costs and eigen risico work for medicines?",
      a: "Many prescribed medicines are handled through basic insurance and may count toward an adult's remaining annual eigen risico. OTC products are usually self-pay. Figures change by year — verify in your insurer portal.",
    },
    {
      q: "Do I need a medication list?",
      a: "Yes — keep current medicines, doses, allergies and relevant supplements in one list. Share it with your GP, pharmacist and hospital teams whenever something changes.",
    },
    {
      q: "What happens at first dispense?",
      a: "Pharmacists often provide a short counseling conversation (begeleidingsgesprek) covering safe use and what to watch for. It supports safety; clinical decisions stay with your GP or specialist.",
    },
    {
      q: "Can someone else pick up my prescription?",
      a: "Sometimes, depending on pharmacy policy and the medicine. Call ahead to ask what authorisation and ID are required.",
    },
    {
      q: "What if my medicine is out of stock?",
      a: "Ask about ordering timelines, partial supply, or clinician-approved alternatives. Do not change doses on your own while waiting.",
    },
    {
      q: "Who manages repeats for a specialist-started medicine?",
      a: "Ask explicitly. Some remain with the specialist clinic; others transfer to the GP. Clarify ownership before the next herhaalrecept request.",
    },
    {
      q: "What should I do after hospital discharge?",
      a: "Keep the discharge medicine list, fill as instructed, and reconcile changes with your regular apotheek and GP so records stay aligned.",
    },
    {
      q: "Are prescription services available in English?",
      a: "Many clinicians and pharmacists can work in English, especially in internationally oriented areas, but it is not guaranteed. Ask when you register and before complex counseling.",
    },
    {
      q: "What if I have a bad reaction to a medicine?",
      a: "For severe symptoms such as breathing difficulty, facial or throat swelling, or collapse, call 112. For other concerning side effects, contact your pharmacist or GP according to urgency — do not silently invent a new dosing plan.",
    },
    {
      q: "How is this page different from the Pharmacies guide?",
      a: "This page owns recept mechanics: who issues, e-prescriptions, herhaalrecept, medication lists, medicine cost orientation and foreign prescriptions. Pharmacies owns finding an apotheek, hours, OTC vs pickup operations, counseling context and dienstapotheek depth.",
    },
    {
      q: "Do I need a GP before I can get everyday prescriptions?",
      a: "For most everyday recepten, yes — registration with a huisarts is the practical unlock. Urgent situations without a GP use triage pathways described in Emergency Healthcare.",
    },
  ],
  faqQuickReference: [
    "GPs write most everyday recepten; specialists add others.",
    "Nominate an apotheek for digital routing.",
    "Herhaalrecept = request + possible review.",
    "Pickup at apotheek after pharmacist check.",
    "Keep one medication and allergy list.",
    "Foreign Rx usually needs Dutch clinician review.",
    "Insured medicines may hit adult eigen risico — verify yearly.",
    "Pharmacies guide owns hours and dienstapotheek.",
    "112 for life-threatening emergencies.",
  ],
  howToSchema: {
    name: "Using Prescriptions in the Netherlands",
    description:
      "Step-by-step orientation for expats on Dutch prescriptions (recepten): nominating a pharmacy, electronic routing, pickup counseling, herhaalrecept requests and medication-list habits.",
    anchor: "#how-it-works",
  },
  relatedGuidesTips: [
    "Pharmacy finding and hours → Pharmacies guide.",
    "GP registration and everyday care → GP guide.",
    "Urgent after-hours pathways → Emergency Healthcare.",
    "Hospital discharge medicines → Hospitals guide.",
    "Coverage and deductible → Health Insurance.",
    "Family medicine logistics → Healthcare for Children.",
  ],
  relatedGuides: [
    {
      label: "Pharmacies in the Netherlands",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Finding an apotheek, opening hours, OTC vs pickup, counseling and dienstapotheek.",
    },
    {
      label: "General Practitioner (GP) in the Netherlands",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Registration, appointments, referrals and how everyday prescriptions start.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "112, Huisartsenpost, SEH, ambulance and emergency pharmacy pathways.",
    },
    {
      label: "Hospitals in the Netherlands",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Referrals, specialists, admissions and discharge medicine reconciliation.",
    },
    {
      label: "Mental Healthcare",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GP first contact, POH-GGZ, GGZ pathways and crisis routes.",
    },
    {
      label: "Dentists",
      href: DENTISTS_NETHERLANDS_PATH,
      status: "live",
      description: "Finding a dentist, insurance, check-ups and dental emergencies.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Basic package, deductible and choosing an insurer.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family healthcare pathways from birth through adolescence.",
    },
    {
      label: "Physiotherapy",
      href: PHYSIOTHERAPY_NETHERLANDS_PATH,
      status: "live",
      description: "Fysiotherapie, direct access, insurance limits and finding a therapist.",
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
    {
      label: "Healthcare Basics",
      href: HEALTHCARE_BASICS_PATH,
      status: "live",
      description: "How Dutch healthcare fits together for everyday living.",
    },
  ] satisfies PrescriptionLink[],
  healthcareHubTips: [
    "Prescriptions connect GP care, pharmacies, insurance and hospital discharge.",
    "This page is the prescriptions cornerstone; Pharmacies owns apotheek operations.",
    "Keep Emergency Healthcare bookmarked for after-hours urgency.",
    "Families should also read Healthcare for Children for paediatric pathways.",
  ],
  healthcareHubCards: [
    {
      label: "Prescriptions (recepten)",
      href: PRESCRIPTIONS_NETHERLANDS_PATH,
      status: "live",
      description: "Who issues, e-prescriptions, herhaalrecept, lists, costs and foreign Rx — you are here.",
    },
    {
      label: "Pharmacies (apotheek)",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Finding a pharmacy, hours, OTC vs Rx pickup, counseling and dienstapotheek.",
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
      description: "112, Huisartsenpost, SEH and emergency pharmacy.",
    },
    {
      label: "Hospitals",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Referrals, specialists and admissions.",
    },
    {
      label: "Mental Healthcare",
      href: MENTAL_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "GP first contact, POH-GGZ and GGZ care.",
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
      label: "Physiotherapy",
      href: PHYSIOTHERAPY_NETHERLANDS_PATH,
      status: "live",
      description: "Fysiotherapie, direct access, insurance limits and finding a therapist.",
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
  ] satisfies PrescriptionLink[],
  exploreNextCards: [
    {
      label: "Pharmacies",
      href: PHARMACIES_NETHERLANDS_PATH,
      status: "live",
      description: "Find an apotheek, save hours and learn dienstapotheek patterns.",
    },
    {
      label: "General Practitioner (GP)",
      href: GP_NETHERLANDS_PATH,
      status: "live",
      description: "Register and unlock everyday prescribing.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Understand basic cover and eigen risico.",
    },
    {
      label: "Emergency Healthcare",
      href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
      status: "live",
      description: "Know which door to use after hours.",
    },
    {
      label: "Healthcare for Children",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      status: "live",
      description: "Family pathways alongside prescription logistics.",
    },
    {
      label: "Hospitals",
      href: HOSPITALS_NETHERLANDS_PATH,
      status: "live",
      description: "Discharge medicines and specialist pathways.",
    },
  ] satisfies PrescriptionLink[],
  exploreNextTips: [
    "No regular pharmacy yet → Pharmacies guide.",
    "No GP yet → GP guide.",
    "Coverage questions → Health Insurance.",
    "After-hours uncertainty → Emergency Healthcare.",
    "Family setup → Healthcare for Children.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Know who issues recepten in Dutch care.",
        "Prepare ID, BSN, insurance and medication list.",
        "Understand electronic routing to your apotheek.",
        "Set herhaalrecept habits before packs run out.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Who issues recepten.",
        "Electronic prescriptions.",
        "Pharmacy pickup.",
        "Herhaalrecept.",
        "Medication lists.",
        "Foreign prescriptions.",
      ],
    },
    howItWorks: {
      title: "From the visual — the prescription pathway",
      items: [
        "Clinician issues a recept.",
        "Digital or paper route reaches the apotheek.",
        "Counseling and pickup at the counter.",
        "Herhaalrecept or clinical follow-up continues the loop.",
      ],
    },
    whoIssues: {
      title: "From the visual — writers and roles",
      items: [
        "GP for most everyday recepten.",
        "Specialist and discharge pathways.",
        "Pharmacist checks and dispenses.",
        "Urgent doors when routine GP access is missing.",
      ],
    },
    electronic: {
      title: "From the visual — digital routing",
      items: [
        "Nominate the correct apotheek.",
        "Confirm ready status when offered.",
        "Bring ID to pickup.",
        "Update routing after moves.",
      ],
    },
    pharmacyPickup: {
      title: "From the visual — pickup readiness",
      items: [
        "Ready status, ID and insurance.",
        "First-dispense counseling.",
        "Ask about authorisation for others.",
        "Operations depth → Pharmacies guide.",
      ],
    },
    herhaalrecept: {
      title: "From the visual — repeat loop",
      items: [
        "Request early via the practice channel.",
        "Expect reviews when clinically needed.",
        "New recept → pharmacy pickup.",
        "Clarify GP vs specialist ownership.",
      ],
    },
    medicationList: {
      title: "From the visual — list builder",
      items: [
        "Generic names, doses and timing.",
        "Allergies and intolerances.",
        "Supplements that matter.",
        "Share with GP, pharmacy and hospital.",
      ],
    },
    costs: {
      title: "From the visual — cost orientation",
      items: [
        "Insured Rx may use adult eigen risico.",
        "Children follow different deductible patterns.",
        "OTC is usually self-pay.",
        "Verify rules in your insurer portal.",
      ],
    },
    foreign: {
      title: "From the visual — foreign Rx bridge",
      items: [
        "Bring packs and letters.",
        "Expect Dutch clinician review.",
        "Plan bridge supply timing.",
        "Do not assume automatic filling.",
      ],
    },
    differences: {
      title: "From the visual — system characteristics",
      items: [
        "GP-centred prescribing.",
        "Digital routing to one pharmacy.",
        "Herhaalrecept as a process.",
        "Counseling expected at first dispense.",
      ],
    },
    checklist: {
      title: "From the visual — preparation priorities",
      items: [
        "GP + nominated pharmacy.",
        "Medication and allergy list.",
        "Herhaalrecept channel and lead time.",
        "Insurance and document file.",
      ],
    },
    mistakes: {
      title: "From the visual — mistakes with fixes",
      items: [
        "Foreign Rx assumption → Dutch review.",
        "Late herhaalrecept → request early.",
        "Wrong pharmacy → confirm routing.",
        "Hidden medicines → share the full list.",
      ],
    },
    faq: {
      title: "From the visual — top questions",
      items: [
        "Who issues recepten.",
        "E-prescriptions and herhaalrecept.",
        "Foreign prescriptions.",
        "Costs and eigen risico.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next by need",
      items: [
        "Pharmacies → operations.",
        "GP → registration and everyday care.",
        "Emergency → after-hours map.",
        "Insurance → deductible context.",
      ],
    },
    healthcareHub: {
      title: "From the visual — healthcare cluster",
      items: [
        "Prescriptions cornerstone (this page).",
        "Pharmacies, GP, emergency, hospitals.",
        "Insurance and children's healthcare.",
        "Planned: physio, maternity, comparison.",
      ],
    },
    exploreNext: {
      title: "From the visual — choose your next card",
      items: [
        "No pharmacy yet → Pharmacies.",
        "No GP yet → GP guide.",
        "Coverage → Health Insurance.",
        "After-hours → Emergency Healthcare.",
      ],
    },
  },
  sourceUsageTips: [
    "Use Government.nl for official health insurance and care organisation orientation.",
    "Use KNMP for professional pharmacy-association context — not personal dosing advice.",
    "Use Rijksoverheid topic pages for Dutch-language official explanations.",
    "Use your insurer portal for deductible and reimbursement questions.",
    "Use the Pharmacies and Emergency Healthcare guides alongside official 112 guidance for urgent routes.",
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
    "General information only — not medical advice. Prescription processes, insurer rules and medicine availability change, so verify your own situation with your GP, pharmacist and insurer. In an emergency, call 112.",
} as const;

export const DENTISTS_NETHERLANDS_PATH = "/netherlands/health/dentists-netherlands/" as const;
export const GP_NETHERLANDS_PATH = "/netherlands/health/gp-netherlands/" as const;
export const HEALTH_HUB_PATH = "/netherlands/health/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const HEALTHCARE_FOR_CHILDREN_PATH = "/netherlands/family/healthcare-for-children-netherlands/" as const;
export const HEALTHCARE_BASICS_PATH = "/netherlands/living/healthcare-basics/" as const;
export const EMERGENCIES_SAFETY_PATH = "/netherlands/living/emergencies-safety/" as const;
export const HEALTH_SYSTEM_CULTURE_PATH = "/netherlands/culture/health-system-culture-basics/" as const;

export type DentistLink = {
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

export type CoverageRow = {
  topic: string;
  children: string;
  adults: string;
};

export type ContactRouteRow = {
  route: string;
  when: string;
  how: string;
  note: string;
};

export type RoleCard = { role: string; focus: string };

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "premium-v2";
const VISUAL_PREFIX = "dentists-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const dentistsNetherlandsPage = {
  slug: "dentists-netherlands",
  path: DENTISTS_NETHERLANDS_PATH,
  hubPath: HEALTH_HUB_PATH,
  parentGuidePath: HEALTHCARE_BASICS_PATH,
  publish: true,
  publishDate: "2027-02-03",
  seo: {
    title: "Dentists in the Netherlands | Complete Guide for Expats",
    description:
      "Learn how dental care works in the Netherlands, including finding a dentist, insurance, costs, emergency dentists, children's dentistry and orthodontics.",
    keywords: [
      "dentist Netherlands",
      "dental care Netherlands",
      "dentists Netherlands",
      "Dutch dentist",
      "dental treatment Netherlands",
      "dental insurance Netherlands",
      "English speaking dentist",
      "orthodontist Netherlands",
      "emergency dentist",
      "expat dentist",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Health · Dental Care",
    pageTitle: "Dentists in the Netherlands",
    subtitle:
      "Everything you need to know about Dutch dental care, including finding a dentist, insurance, routine check-ups, emergency treatment and children's dentistry.",
    primaryCta: { label: "Understand Dental Care", href: "#how-it-works" },
    secondaryCta: { label: "Explore Healthcare Guides", href: "#related-guides" },
    chips: ["Finding a dentist", "Insurance", "Check-ups", "Emergency", "Children", "Orthodontics"],
    disclaimer:
      "General orientation only — not dental or medical treatment advice. For individual concerns, contact a dentist, an out-of-hours dental service or emergency services. Always verify coverage with your insurer. Call 112 for life-threatening emergencies.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Unique photorealistic Dutch tandarts consultation — South Asian dentist explaining a printed begroting cost estimate to a Black expat patient seated on a modern dental chair, with canal houses and a bicycle visible through the clinic window in soft daylight.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#finding", label: "Finding a dentist" },
    { href: "#insurance", label: "Insurance" },
    { href: "#check-ups", label: "Check-ups" },
    { href: "#treatments", label: "Treatments" },
    { href: "#children", label: "Children" },
    { href: "#orthodontics", label: "Orthodontics" },
    { href: "#emergency", label: "Emergency" },
    { href: "#costs", label: "Costs" },
    { href: "#preventive", label: "Preventive care" },
    { href: "#specialists", label: "Specialists" },
    { href: "#expat-differences", label: "Expat differences" },
    { href: "#moving", label: "Moving checklist" },
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
      "Premium orientation board titled Before Your First Dental Visit — four building blocks for dental care in the Netherlands: understand that adult dental care sits outside basic insurance, choose and register a tandarts near home, learn how check-up intervals and cost estimates work, and save emergency dental numbers alongside 112 — with a Dental file rail listing BSN, insurer card and dental records.",
      "Four building blocks cover setup: insurance reality, a dentist near home, how check-ups and costs work, and emergency routes saved before you need them."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of Dutch dental care — adult dental care sitting outside basic insurance, near-full coverage for children, personalised recall intervals rather than a fixed schedule, mandatory cost estimates for bigger treatments, specialist referral routes, and out-of-hours dental services for urgent problems.",
      "Six building blocks explain almost every dental question — the sections below add detail to each."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium patient pathway diagram showing Choose, Register, Check-up, Preventive, Treatment and Maintenance as six connected stages of ongoing Dutch dental care, with a small icon and short label under each stage.",
      "Dental care flows in a cycle: choose and register once, then check-up, prevention, treatment and maintenance repeat over time."
    ),
    finding: visual(
      "finding",
      "Premium dentist-search board — postcode search for a tandarts, checking accepting-patient status and English-speaking staff, the aanmelden registration form with BSN and ID, and a note to request transfer of dental records and X-rays from a previous dentist.",
      "Search by postcode, confirm the practice is accepting patients, then register with BSN, ID and any previous dental records."
    ),
    insurance: visual(
      "insurance",
      "Premium dental insurance comparison board — a child icon linked to basic-insurance coverage for most routine dental care, an adult icon linked to self-pay or optional aanvullende (supplementary) dental insurance, and a reminder card about comparing annual maximums and reimbursement percentages.",
      "Children's dental care is largely covered by basic insurance; for adults it usually is not — supplementary cover is optional and worth comparing."
    ),
    checkUps: visual(
      "check-ups",
      "Premium check-up scene — a dentist reviewing a personalised recall-interval card, an intraoral X-ray screen, and a mondhygiënist performing a professional cleaning at a separate but connected station in the same modern practice.",
      "Check-up frequency is personalised to your oral health, and professional cleaning is often a separate visit with the hygienist."
    ),
    treatments: visual(
      "treatments",
      "Premium treatment orientation board with seven labelled icons — fillings, crowns, root canal, extractions, bridges, implants and professional cleaning — each paired with a short one-line description, framed as general orientation rather than a personal treatment plan.",
      "Seven common treatments explained at a glance — your own treatment plan and cost estimate always come from your dentist."
    ),
    children: visual(
      "children",
      "Premium family dental care map linking a child's first dental visit and basic-insurance coverage with a cross-link card to the Healthcare for Children guide for JGZ, vaccinations and the wider paediatric healthcare pathway.",
      "Register children with a tandarts early — most routine dental care for under-18s is covered by basic insurance."
    ),
    orthodontics: visual(
      "orthodontics",
      "Premium orthodontics timeline — early screening around age eight to ten, an independent assessment for a severe medical indication that unlocks reimbursement, active treatment with braces or clear aligners, and a retention phase with a retainer icon.",
      "Screening starts early; reimbursement for children depends on a severe medical indication — most orthodontic care is self-pay."
    ),
    emergency: visual(
      "emergency",
      "Premium dental emergency decision flow — daytime own dentist, the regional out-of-hours dental service (dienstdoenende tandarts) for evenings and weekends, and hospital A&E or 112 for airway-threatening swelling, uncontrolled bleeding or facial trauma.",
      "Three routes: your own dentist by day, the out-of-hours dental service after hours, and 112 or hospital A&E for a genuine medical emergency."
    ),
    costs: visual(
      "costs",
      "Premium dental cost orientation board with a record-file style layout showing indicative euro ranges for a check-up, X-ray, filling, extraction, root canal and crown, alongside a written cost-estimate (begroting) document icon and a note that NZa regulates maximum tariffs.",
      "Indicative examples only — NZa regulates maximum tariffs, and your dentist provides your own written estimate before larger treatment."
    ),
    preventive: visual(
      "preventive",
      "Premium preventive care board — fluoride toothpaste and interdental brushes on a bathroom shelf, a note that Dutch tap water is not fluoridated, and a mondhygiënist card explaining professional cleaning and tailored home-care advice.",
      "Daily fluoride use matters more here since Dutch tap water is not fluoridated — plus regular professional cleaning."
    ),
    specialists: visual(
      "specialists",
      "Premium specialist referral map linking the general tandarts to an oral surgeon (kaakchirurg), periodontist, endodontist, prosthodontist and paediatric dentist, each with a one-line focus description.",
      "Your general dentist refers you onward when a procedure needs specialist skill or equipment."
    ),
    expatDifferences: visual(
      "expat-differences",
      "Premium expat orientation board presenting Dutch dental system characteristics — adult care outside basic insurance, personalised recall intervals, mandatory cost estimates for larger work, and NZa-regulated tariff codes — framed as system design, not shortcomings.",
      "Expat differences are system characteristics — once you expect them, dental visits become predictable and budgetable."
    ),
    moving: visual(
      "moving",
      "Premium moving-to-the-Netherlands dental checklist board — early research by postcode, registration with BSN and ID, transferring dental records and X-rays, and saving daytime and out-of-hours dental numbers, styled as a ten-step admin checklist.",
      "Work through dental setup alongside your other move admin — it takes only a few focused steps."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with Fix advice cards — assuming adult dental care is covered by basic insurance, skipping check-ups until pain starts, not asking for a cost estimate, going to hospital A&E for routine toothache, and registering only after an emergency happens.",
      "Each common mistake includes a practical Fix — small habit changes avoid most of the friction and cost surprises."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with readable question and answer pairs on dental insurance, finding a dentist, costs, emergencies, children's dental care and orthodontics for expats in the Netherlands.",
      "Orientation answers only — confirm your own situation with your dentist, insurer and official sources."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking the dentists cornerstone to the GP guide, health insurance, healthcare for children, healthcare basics and health system culture basics.",
      "Dental care connects to your GP, insurance and family health planning — read them together."
    ),
    healthcareHub: visual(
      "healthcare-hub",
      "Premium healthcare cluster ecosystem diagram with the Dentists guide at the centre, connected to the GP guide, insurance, healthcare basics, children's healthcare and emergencies, some marked coming soon.",
      "This page is the dentistry cornerstone — explore the wider healthcare cluster next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from the Dentists guide to the GP guide, health insurance, healthcare for children and emergencies, with official source cards for Government.nl, NZa, KNMT and Rijksoverheid.",
      "Continue with your GP and insurance setup — and verify details on the official sources."
    ),
  },
  quickAnswer: {
    heading: "Quick answer: how dental care works in the Netherlands",
    summary:
      "Dental care in the Netherlands is separate from your GP and, for adults, sits mostly outside basic health insurance. You choose and register with a tandarts (dentist), attend check-ups at a personalised interval, and pay out of pocket or via optional supplementary insurance for most routine treatment. Children under 18 are covered differently — most routine dental care for them is included in basic insurance.",
    bullets: [
      "Register with a tandarts near home — practices are not catchment-based the way GPs often are, but many still prefer local patients.",
      "Basic health insurance does not cover most adult dental care — decide whether supplementary (aanvullende) dental insurance makes sense for you.",
      "Children's routine dental care is largely covered by basic insurance up to age 18.",
      "Ask for a written cost estimate (begroting) before agreeing to anything beyond a routine check-up.",
      "For urgent problems outside opening hours, call the regional out-of-hours dental service; call 112 for a genuine medical emergency.",
    ],
    note: "Register with a dentist in your first weeks, even if your teeth feel fine — finding an accepting practice and an emergency route is far easier before you need one.",
  },
  introParagraphs: [
    "Dental care in the Netherlands runs on a separate track from the rest of the healthcare system. Your huisarts (GP) handles illness and referrals to hospital specialists, but teeth, gums and jaws are the tandarts's (dentist's) territory, with its own registration process, its own funding rules and its own out-of-hours arrangements.",
    "The biggest surprise for many newcomers is insurance. Dutch basic health insurance (basisverzekering) covers GP visits and most hospital care, but for adults it generally does not cover routine dental care — check-ups, fillings, cleanings and most other everyday treatment are paid out of pocket or through an optional supplementary (aanvullende) dental policy that you choose separately. Children under 18 are treated very differently: most of their routine dental care is included in basic insurance.",
    "This guide is orientation for expats: how to find and register with a dentist, how insurance and costs actually work, what to expect at check-ups, an overview of common treatments, children's dentistry, orthodontics, emergencies, and the mistakes that create avoidable stress or unexpected bills. It is not dental or medical advice — for anything about your own teeth, gums or jaw, speak to a dentist or, in a genuine emergency, call 112.",
  ],
  orientationFlowSteps: [
    "Understand the insurance reality — adult dental care mostly sits outside basic insurance, so decide early whether supplementary cover suits you.",
    "Choose and register a tandarts near home — search by postcode and confirm the practice is accepting new patients.",
    "Learn how check-ups and cost estimates work — intervals are personalised and larger treatments come with a written quote first.",
    "Save emergency dental routes now — your dentist's out-of-hours number and 112 for genuine medical emergencies.",
  ],
  introHighlights: [
    "Dental care is a separate system from your GP, with its own registration, funding and out-of-hours arrangements.",
    "Adult dental care generally sits outside basic insurance — budgeting and optional supplementary cover matter.",
    "Children under 18 are covered very differently — most routine dental care is included in basic insurance.",
    "Cost estimates (begrotingen) are a normal, expected part of agreeing to non-routine treatment.",
  ],
  safetyFileChecklist: [
    "Your BSN (citizen service number)",
    "Insurer name and policy number, including any supplementary dental policy",
    "Dentist practice name, daytime number and any urgent practice line",
    "Regional out-of-hours dental service (dienstdoenende tandarts) number",
    "Copies of previous dental records and X-rays, if you have switched dentists",
    "A note of your personal check-up recall interval once your dentist sets one",
  ],
  introScenarios: [
    {
      situation: "Just arrived and not yet registered with a dentist",
      approach: "Finish BSN and municipal registration first, then search for a tandarts near your postcode that is accepting new patients.",
      firstStep: "Confirm your BSN, then submit the practice's aanmelden (registration) form.",
    },
    {
      situation: "Have tooth pain tonight and the practice is closed",
      approach: "Call the regional out-of-hours dental service for urgent but non-life-threatening problems; call 112 or go to hospital A&E for airway-threatening swelling or uncontrolled bleeding.",
      firstStep: "Save both numbers in your phone before the first painful evening.",
    },
    {
      situation: "Want to know what dental care actually costs",
      approach: "Ask your dentist for a written cost estimate (begroting) before agreeing to anything beyond a routine check-up, and check what your supplementary insurance, if any, reimburses.",
      firstStep: "Book a check-up and ask directly what a proposed treatment would cost.",
    },
    {
      situation: "Managing a child's dental care from abroad",
      approach: "Register your child with a tandarts early — most routine dental care for under-18s is covered by basic insurance, but orthodontics usually needs a separate medical-indication assessment.",
      firstStep: "Bring any existing dental records and ask the practice about first-visit timing for young children.",
    },
  ] satisfies ScenarioRow[],
  snapshotSignals: [
    { label: "Adult coverage", value: "Mostly self-pay", note: "Basic insurance rarely covers routine adult dental care." },
    { label: "Children's coverage", value: "Largely included", note: "Most routine dental care for under-18s sits in basic insurance." },
    { label: "Check-up interval", value: "Personalised", note: "Your dentist sets an individual recall interval, not a fixed schedule for everyone." },
    { label: "Out of hours", value: "Dienstdoenende tandarts / 112", note: "Call the regional dental service for urgent care; 112 for genuine emergencies." },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Routine check-ups",
      body: "Your dentist sets a personalised recall interval — often yearly for low risk, more often when gums or cavities need closer monitoring.",
    },
    {
      title: "Dental insurance",
      body: "Adults usually self-pay or use optional aanvullende cover; most routine care for under-18s sits in basic insurance.",
    },
    {
      title: "Emergency dentist",
      body: "Daytime: your own practice. Evenings and weekends: regional duty dentist. Life-threatening facial trauma or airway risk: 112.",
    },
    {
      title: "Children's dentistry",
      body: "Register children with a tandarts early — separate from JGZ — and expect strong basic-insurance coverage for routine care.",
    },
    {
      title: "Orthodontics",
      body: "Screening often starts around ages 8–10. Child reimbursement usually needs a severe medical indication; adults are almost always self-pay.",
    },
    {
      title: "Preventive care",
      body: "Dutch tap water is not fluoridated — daily fluoride toothpaste, interdental cleaning and mondhygiënist visits matter more here.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Treat dental insurance as a separate decision from your basic health insurance — compare aanvullende policies on their own merits.",
    "Save your dentist's daytime number and the regional out-of-hours dental number before you need them.",
    "Keep dental records and X-rays from your previous dentist together with your other move admin.",
    "Ask what your personal recall interval is and why — it may differ from what you are used to elsewhere.",
    "Always ask for a written cost estimate before agreeing to treatment beyond a routine check-up.",
    "Register children on a dentist's list early — most routine care for them is covered by basic insurance.",
  ],
  howItWorks: {
    heading: "How Dutch dental care works",
    paragraphs: [
      "Dutch dental care follows a repeating cycle rather than a single linear pathway. You choose a practice and register once, then move through check-ups, preventive care and, when needed, treatment — with the cycle repeating at whatever interval your dentist sets for you.",
      "Unlike GP care, there is no national gatekeeper model: you register directly with a tandarts, and most day-to-day dental problems are handled entirely within the practice. Specialist referrals exist for complex cases, but far more dental care happens without ever leaving your own dentist's chair.",
      "Funding is the other structural difference. Because most adult dental care sits outside basic insurance, cost communication is built into the system — dentists are expected to explain your options and, for larger treatment, give you a written estimate before you commit.",
    ],
    timeline: [
      {
        phase: "1",
        title: "Choose a dentist",
        detail: "Search by postcode, check whether the practice is accepting new patients, and ask about English-language support if you need it.",
      },
      {
        phase: "2",
        title: "Register",
        detail: "Submit the aanmelden form with BSN, ID and insurance details, and pass on previous dental records or X-rays if you have them.",
      },
      {
        phase: "3",
        title: "Check-up",
        detail: "An initial exam assesses your oral health, may include X-rays, and sets your personal recall interval for future visits.",
      },
      {
        phase: "4",
        title: "Preventive care",
        detail: "Regular check-ups and professional cleaning with the mondhygiënist keep small issues from becoming bigger ones.",
      },
      {
        phase: "5",
        title: "Treatment when needed",
        detail: "For fillings, extractions or more complex work, your dentist explains options and provides a cost estimate before starting.",
      },
      {
        phase: "6",
        title: "Ongoing maintenance",
        detail: "The cycle repeats — your recall interval may be adjusted over time based on how your oral health develops.",
      },
    ] satisfies TimelineStep[],
    principles: [
      "Register directly with a tandarts — there is no GP-style gatekeeper for routine dental care.",
      "Adult dental care mostly sits outside basic insurance, so cost awareness is part of the normal process.",
      "Check-up frequency is personalised, not a fixed rule applied to everyone.",
      "Cost estimates (begrotingen) are standard practice for non-routine treatment, not an unusual request.",
      "Specialists exist for complex cases, but most dental care stays within your own practice.",
      "Continuity improves when one practice holds your history, X-rays and treatment plan.",
    ],
    keyNote:
      "If a proposed treatment feels unclear or expensive, ask for the reasoning and the written estimate in plain terms. Asking directly about cost and alternatives is normal here — it is not considered rude.",
    flowLabels: ["Choose", "Register", "Check-up", "Preventive", "Treatment", "Maintenance"],
  },
  finding: {
    heading: "Finding and registering with a dentist",
    paragraphs: [
      "Finding a tandarts is usually more flexible than finding a GP — there is no strict catchment-area rule — but popular practices in busy cities can still have waiting lists, so it pays to start early rather than while you are already in pain.",
      "Search for 'tandarts' with your postcode, check each practice's website for whether it is accepting new patients, and look at practical details like opening hours, appointment systems and whether staff speak English. If you are switching from a previous dentist, ask your old practice to transfer your dental history and X-rays.",
      "Registration itself is usually a short form: BSN, ID or residence documents, insurance details if you have supplementary dental cover, and any relevant medical history. Once registered, save the practice's daytime number and the regional out-of-hours dental number together.",
    ],
    howToSteps: [
      {
        name: "Check your insurance situation",
        text: "Confirm whether you have, or want, supplementary (aanvullende) dental insurance, since basic insurance will not cover most adult dental care.",
      },
      {
        name: "Search for a tandarts near your postcode",
        text: "Look up practices near home, check their websites, and note which ones explicitly say they are accepting new patients.",
      },
      {
        name: "Confirm the practice is accepting new patients",
        text: "Call or email if the website is unclear — busy city practices can have waiting lists even without a formal catchment rule.",
      },
      {
        name: "Check practical fit",
        text: "Compare distance from home, opening hours, appointment booking method, and whether staff speak English if you need that.",
      },
      {
        name: "Submit the registration (aanmelden) form",
        text: "Provide your BSN, ID or residence documents, date of birth and insurance details where relevant.",
      },
      {
        name: "Arrange transfer of dental records and X-rays",
        text: "If you are switching from a previous dentist, ask them to send your dental history and any existing X-rays to the new practice.",
      },
      {
        name: "Book an intake or check-up appointment",
        text: "Your first visit typically includes an oral health assessment and sets your personal recall interval for future check-ups.",
      },
      {
        name: "Save numbers for a dental emergency",
        text: "Store the practice's daytime number, the regional out-of-hours dental service number, and 112 in your phone.",
      },
    ] satisfies HowToStep[],
    timeline: [
      { phase: "Week 1", title: "Search by postcode", detail: "Shortlist nearby practices and confirm which are accepting new patients." },
      { phase: "Week 1–2", title: "Submit registration", detail: "Complete the aanmelden form and provide ID, insurance details and dental history." },
      { phase: "Week 2–3", title: "Confirmation & intake", detail: "Confirm you are registered and book your first check-up appointment." },
      { phase: "Ongoing", title: "Keep details current", detail: "Update the practice when you move address, change insurer or need a new supplementary policy noted." },
    ] satisfies TimelineStep[],
    checklist: [
      "Decided whether supplementary dental insurance makes sense for you",
      "Postcode search completed for nearby practices",
      "Confirmed a practice is accepting new patients",
      "Registration form submitted for every household member who needs care there",
      "Dental records and X-rays transferred from a previous dentist, if applicable",
      "Daytime practice number and regional out-of-hours dental number saved",
    ],
    waitlistTips: [
      "Ask practices with closed lists which nearby dentists are still accepting new patients.",
      "Widen your search slightly beyond your immediate street if your neighbourhood is busy.",
      "Register as soon as your address is stable — waiting lists change through the year.",
      "A slightly farther practice that accepts you is better than remaining unregistered.",
      "When changing dentist, ask both practices about transferring your file and X-rays.",
      "Register each household member who needs care there — children are not automatic add-ons everywhere.",
    ],
  },
  insurance: {
    heading: "Dental insurance: what's covered and what isn't",
    paragraphs: [
      "This is the single biggest difference expats notice compared with many other healthcare systems. Dutch basic health insurance (basisverzekering) covers your GP and most hospital care, but for adults it generally does not cover routine dental care. Check-ups, fillings, cleanings, crowns and most extractions are paid out of pocket unless you have specific circumstances, such as certain oral surgery linked to a covered medical condition.",
      "Children under 18 are treated very differently: most routine dental care — check-ups, fillings, extractions, sealants and fluoride treatments — is included in basic insurance. Orthodontics is the main exception: braces for children are usually only reimbursed when an independent assessment confirms a severe medical indication, not for moderate or cosmetic misalignment.",
      "Supplementary (aanvullende) dental insurance is an optional add-on with its own premium, reimbursement percentage and annual maximum. It is worth comparing policies each year, since insurers change terms, and worth doing the maths honestly — if you rarely need treatment beyond check-ups, the premium can sometimes exceed what you would get back.",
      "The annual deductible (eigen risico) that applies to basic insurance generally does not apply to routine adult dental care, simply because that care is not part of the basic package in the first place. Supplementary dental policies have their own separate terms rather than interacting with the eigen risico.",
    ],
    comparisonRows: [
      {
        topic: "Routine check-up",
        children: "Usually covered under basic insurance",
        adults: "Not covered by basic insurance — self-pay or supplementary cover",
      },
      {
        topic: "Fillings",
        children: "Usually covered under basic insurance",
        adults: "Not covered by basic insurance — supplementary cover may reimburse a percentage",
      },
      {
        topic: "Extractions",
        children: "Usually covered under basic insurance",
        adults: "Not covered by basic insurance — supplementary cover may reimburse a percentage",
      },
      {
        topic: "Orthodontics (braces)",
        children: "Only reimbursed with an approved severe medical indication",
        adults: "Almost always self-pay; rarely reimbursed even with supplementary cover",
      },
      {
        topic: "Crowns & bridges",
        children: "Case by case, often limited",
        adults: "Not covered by basic insurance — supplementary policies often apply annual caps",
      },
      {
        topic: "Emergency dental treatment",
        children: "Usually covered under basic insurance",
        adults: "Not covered by basic insurance unless linked to a covered medical condition",
      },
    ] satisfies CoverageRow[],
    tips: [
      "Compare at least two or three aanvullende dental policies before renewing — coverage percentages and annual maximums vary by insurer.",
      "Ask about waiting periods, especially for orthodontics or crowns, before you switch or add supplementary cover.",
      "If you rarely need dental treatment, calculate whether self-pay plus occasional treatment costs less than a year of premiums.",
      "Keep invoices and cost estimates — supplementary insurers usually reimburse after you submit a claim, not automatically.",
      "For children, ask your dentist directly whether a proposed orthodontic treatment meets the medical-indication threshold for reimbursement.",
      "Review your policy every year during the switching period — insurer terms and prices change annually.",
    ],
    checklist: [
      "Confirmed whether your basic insurance includes any dental exceptions relevant to you",
      "Compared at least two supplementary dental policies on coverage percentage and annual maximum",
      "Checked waiting periods for orthodontics or crowns if relevant",
      "Registered children separately if their coverage differs from yours",
      "Saved a note of what your policy actually reimburses and how to claim",
    ],
  },
  checkUps: {
    heading: "Routine check-ups and cleanings",
    paragraphs: [
      "Dutch dentists typically set a personalised recall interval rather than applying a fixed rule such as 'every six months for everyone'. Someone with good oral health and low risk factors might be seen once a year, while someone with gum disease, a high cavity rate or other risk factors might be recalled more often.",
      "A standard check-up includes an examination of your teeth and gums, screening for cavities, gum disease and, periodically, oral cancer screening, plus a discussion of your home-care routine. X-rays are taken periodically based on clinical need, not automatically at every visit.",
      "Professional cleaning is often carried out by a mondhygiënist (dental hygienist), a separate qualified professional who may work in the same practice or a dedicated hygienist clinic. Some practices combine the check-up and cleaning into one visit; others schedule them separately and bill them as distinct services.",
    ],
    points: [
      "Ask your dentist what your personal recall interval is and what would change it.",
      "X-rays are taken based on clinical need, not automatically at every check-up.",
      "Gum health and screening are a normal part of a routine check-up, not just cavity checking.",
      "Professional cleaning with a hygienist is often billed separately from the check-up itself.",
      "Bring any symptoms or concerns to the check-up even if they seem minor — early treatment is usually simpler and cheaper.",
    ],
    prepareChecklist: [
      "Any symptoms since your last visit — sensitivity, bleeding gums, clicking jaw, grinding",
      "List of medicines and allergies that affect dental care",
      "Previous dental records or X-rays if this is a first visit",
      "Your insurance card if you have supplementary dental cover",
      "Questions about cost estimates or proposed treatment",
      "One clear ask for the visit — check-up only, cleaning, or a specific concern",
    ],
    visitScript: [
      "Lead with your main dental concern in one sentence, even if it feels minor.",
      "Mention duration, what makes it worse, and anything you have already tried.",
      "Ask what your personal recall interval is and why.",
      "Ask whether hygienist cleaning is included today or booked separately.",
      "If treatment is proposed, ask for options and a written begroting before agreeing.",
    ],
    leaveWith: [
      "Your personal recall interval and next appointment booked if possible",
      "Clarity on whether cleaning is separate and roughly what it costs",
      "Any proposed treatment explained in plain language",
      "A written cost estimate for anything beyond routine care",
      "Home-care advice tailored to your gums and risk factors",
    ],
    scenarios: [
      {
        situation: "First check-up after moving to the Netherlands",
        approach: "Expect a fuller intake: history, exam, possible X-rays, and a personal recall interval.",
        firstStep: "Bring ID, BSN, insurance details and any previous dental records.",
      },
      {
        situation: "Mild sensitivity but no pain",
        approach: "Mention it at the check-up rather than waiting for a crisis — early advice is usually simpler.",
        firstStep: "Book your normal recall and list the symptom when you arrive.",
      },
      {
        situation: "Want cleaning and check-up together",
        approach: "Ask the practice whether they combine visits or bill the mondhygiënist separately.",
        firstStep: "Confirm booking type and indicative cost when you schedule.",
      },
      {
        situation: "Anxious about cost surprises",
        approach: "Say at the start that you want to discuss options and estimates before any non-routine work.",
        firstStep: "Ask for a begroting before agreeing to treatment beyond the check-up.",
      },
    ] satisfies ScenarioRow[],
    tips: [
      "Book your next check-up before you leave the practice so the recall interval is respected automatically.",
      "Ask directly whether hygienist cleaning is included in your visit or billed as a separate appointment.",
      "Mention sensitivity, bleeding gums or bruxism (teeth grinding) even if it feels minor — it affects your recall interval.",
      "Keep a copy of your latest X-rays if you plan to switch dentists or move house.",
      "If cost is a concern, ask at the start of the appointment rather than after treatment has begun.",
    ],
  },
  treatments: {
    heading: "Common dental treatments (orientation only)",
    intro:
      "This section is general orientation only — not treatment advice and not a substitute for your own dentist's assessment. Any treatment plan and cost estimate for your specific situation comes from your dentist, based on an examination of your teeth.",
    paragraphs: [
      "Most adults eventually meet a handful of common treatments: fillings, crowns, root canal treatment, extractions, bridges, implants and professional cleaning. Knowing what each name means helps you ask better questions — it does not replace a personal treatment plan.",
      "Dutch practices normally explain options and, for non-routine work, provide a written cost estimate (begroting) before you commit. Asking for alternatives, timelines and follow-up expectations is expected, not awkward.",
      "Complex cases may stay with your general tandarts or move to a specialist via referral. Either way, keep copies of the treatment plan, estimate and invoices for insurance claims and future dentists.",
    ],
    cards: [
      {
        title: "Fillings",
        body: "Used to repair a tooth affected by decay or minor damage, typically with a tooth-coloured composite material. Size and number of surfaces affect both the procedure and the cost.",
      },
      {
        title: "Crowns",
        body: "A cap that covers a damaged or heavily restored tooth to restore its shape and strength, often used after a large filling or root canal treatment.",
      },
      {
        title: "Root canal treatment",
        body: "Removes infected or damaged tissue from inside a tooth to save it rather than extract it. Complex cases, especially molars, may be referred to an endodontist.",
      },
      {
        title: "Extractions",
        body: "Removal of a tooth that cannot reasonably be saved, or removal of wisdom teeth causing problems. More complex extractions may be referred to an oral surgeon.",
      },
      {
        title: "Bridges",
        body: "A fixed restoration that replaces one or more missing teeth by anchoring to neighbouring teeth or implants, discussed as an alternative to a removable denture.",
      },
      {
        title: "Implants",
        body: "A titanium post placed in the jaw to support a replacement tooth or denture. Often involves a longer timeline and may include a referral to a specialist.",
      },
      {
        title: "Professional cleaning",
        body: "Removes plaque and tartar build-up beyond what daily brushing reaches, usually performed by a mondhygiënist as part of preventive care.",
      },
    ] satisfies TipCard[],
    scenarios: [
      {
        situation: "Dentist proposes a filling today",
        approach: "Ask whether it is urgent, what happens if you wait briefly, and the indicative cost.",
        firstStep: "Confirm material, surfaces involved and whether a begroting is needed.",
      },
      {
        situation: "Larger plan such as crown or root canal",
        approach: "Request a written behandelplan and begroting, then decide after you understand options.",
        firstStep: "Ask for alternatives and the full expected cost across the course of care.",
      },
      {
        situation: "Wisdom tooth concerns",
        approach: "Your general dentist assesses first; complex cases often go to a kaakchirurg.",
        firstStep: "Ask whether referral is needed and what the wait and cost path looks like.",
      },
      {
        situation: "Missing tooth replacement options",
        approach: "Discuss bridge, implant and removable options with pros, timeline and budget.",
        firstStep: "Ask for a comparison estimate rather than a single recommendation only.",
      },
    ] satisfies ScenarioRow[],
    beforeTreatmentTips: [
      "Ask for a written treatment plan (behandelplan) and cost estimate (begroting) for anything beyond a routine check-up.",
      "Ask what alternatives exist and why your dentist recommends a particular option.",
      "If you feel anxious, ask about numbing options or a slower-paced appointment — this is a normal request.",
      "Ask about expected follow-up, warranty terms and what to do if something feels wrong afterwards.",
      "For anything expensive or unfamiliar, it is reasonable to ask for time to think it over before agreeing.",
    ],
    afterTreatmentChecklist: [
      "Keep the invoice and treatment codes for insurance claims",
      "Follow home-care and warning-sign instructions given by the practice",
      "Book any planned follow-up before you leave",
      "Contact the practice promptly if pain, swelling or bleeding worsens unexpectedly",
      "Update your supplementary insurer claim if reimbursement applies",
    ],
  },
  children: {
    heading: "Children's dental care",
    paragraphs: [
      "Most routine dental care for children under 18 is included in basic health insurance, which is a significant difference from adult care. Many dentists recommend a first dental visit around age two to three, or as soon as the first teeth appear, so ask your practice what they suggest.",
      "Dental care sits separately from Youth Healthcare (JGZ), which handles general growth checks, developmental screening and many vaccinations but does not replace an oral exam by a tandarts. Registering your child with a dentist — often the same practice as the parents, or a dedicated kindertandarts (paediatric dentist) — is a separate step from JGZ registration.",
      "For the full children's healthcare pathway — insurance for under-18s, JGZ, vaccinations, hospitals and emergencies — use the Healthcare for Children guide alongside this page.",
    ],
    cards: [
      {
        title: "Tandarts for teeth and gums",
        body: "Register your child with a dentist for check-ups, fillings, cleanings and oral-health advice. Most routine care under 18 is covered by basic insurance.",
      },
      {
        title: "JGZ for growth and vaccinations",
        body: "Youth Healthcare (consultatiebureau / JGZ) covers growth checks, developmental screening and many vaccinations — it does not replace dental visits.",
      },
      {
        title: "Orthodontics is separate",
        body: "Braces are not automatic under basic insurance. Reimbursement usually needs an independent severe medical-indication assessment.",
      },
      {
        title: "Same practice or paediatric dentist",
        body: "Many families use the parents' practice; children with additional needs may be better with a kindertandarts.",
      },
    ] satisfies TipCard[],
    points: [
      "Register your child with a tandarts early — most routine dental care for under-18s is covered by basic insurance.",
      "Ask your dentist for a suggested age for the first visit and how often check-ups should happen.",
      "Bring any existing dental records or X-rays if your child has seen a dentist before moving.",
      "Orthodontic reimbursement for children depends on an approved severe medical indication, not automatic coverage.",
      "For growth checks, vaccinations and the wider family healthcare pathway, use the Healthcare for Children guide.",
    ],
    checklist: [
      "Child registered with a tandarts (not only with JGZ)",
      "First-visit age and recall interval confirmed with the practice",
      "Previous dental records transferred if you moved from abroad",
      "Understood what basic insurance covers vs orthodontics exceptions",
      "Household emergency dental numbers saved for school and babysitters",
      "Healthcare for Children guide bookmarked for JGZ and vaccinations",
    ],
    crossLink: {
      label: "Healthcare for Children in the Netherlands",
      href: HEALTHCARE_FOR_CHILDREN_PATH,
      description:
        "Complete orientation for expat families — GP care for children, Youth Healthcare (JGZ), vaccinations, specialists, dental care and emergencies.",
      status: "live" as const,
    },
  },
  orthodontics: {
    heading: "Orthodontics (braces) in the Netherlands",
    paragraphs: [
      "Your general dentist usually screens for orthodontic issues and refers to an orthodontist when treatment may be needed. Screening often starts around age eight to ten, even though active treatment, if recommended, typically begins later.",
      "Reimbursement rules differ sharply by age. For children under 18, basic insurance only covers orthodontic treatment when an independent assessment confirms a severe medical indication — moderate or cosmetic misalignment is generally not reimbursed. For adults, orthodontic treatment is almost always self-pay, whether through traditional braces or clear aligners such as Invisalign.",
      "Treatment options include traditional metal or ceramic braces and clear aligner systems, followed by a retention phase with a retainer to keep teeth in position. Timelines vary considerably — children's treatment often runs one to three years, while adult clear-aligner treatment can be shorter but is highly individual.",
    ],
    pathCards: [
      {
        title: "1. Screening",
        body: "Often around ages 8–10 at the general dentist — early spotting does not always mean immediate braces.",
      },
      {
        title: "2. Indication check",
        body: "For possible insurance coverage in children, an independent assessment of severe medical indication is usually required.",
      },
      {
        title: "3. Active treatment",
        body: "Braces or clear aligners with a full course estimate covering appointments, appliances and adjustments.",
      },
      {
        title: "4. Retention",
        body: "Retainers keep teeth in position after active treatment — budget time and cost for this phase too.",
      },
    ] satisfies TipCard[],
    comparisonRows: [
      {
        topic: "Who starts the process",
        children: "Usually general dentist screening, then orthodontist referral",
        adults: "Dentist or self-referral to orthodontist / aligner provider",
      },
      {
        topic: "Basic insurance",
        children: "Only with approved severe medical indication",
        adults: "Almost never covered",
      },
      {
        topic: "Supplementary insurance",
        children: "May help for non-indicated cases — check waiting periods and caps",
        adults: "Often limited or excluded — verify policy terms carefully",
      },
      {
        topic: "Typical funding",
        children: "Indication pathway or family self-pay",
        adults: "Self-pay in almost all cases",
      },
    ] satisfies CoverageRow[],
    points: [
      "Screening can start early even if treatment is recommended for a later age.",
      "A severe medical indication, confirmed independently, is usually required for reimbursed children's orthodontics.",
      "Cosmetic or moderate misalignment orthodontics is typically self-pay for both children and adults.",
      "Ask for a full cost estimate covering the entire treatment course, not just the starting fee.",
      "The retention phase after active treatment is important — ask how long retainer wear is recommended.",
    ],
    scenarios: [
      {
        situation: "Child aged 8–10 at a check-up",
        approach: "Ask whether orthodontic screening is due and what signs would trigger a referral.",
        firstStep: "Book the recommended follow-up rather than waiting for crowding to become painful.",
      },
      {
        situation: "Hoping insurance will cover braces",
        approach: "Confirm whether a severe medical-indication assessment applies before assuming cover.",
        firstStep: "Ask the dentist or orthodontist what the indication pathway involves.",
      },
      {
        situation: "Adult wanting clear aligners",
        approach: "Treat as a self-pay plan unless your supplementary policy explicitly includes it.",
        firstStep: "Request a full-course quote including retainers and refinement visits.",
      },
    ] satisfies ScenarioRow[],
    checklist: [
      "Asked whether screening or referral is recommended now",
      "Understood child vs adult reimbursement rules for your case",
      "Requested a full-course begroting (not only the starter fee)",
      "Checked supplementary policy waiting periods and annual caps",
      "Factored retainers and follow-up into budget and calendar",
      "Compared at least one alternative quote if self-paying",
    ],
    tips: [
      "Ask your dentist directly whether your child's situation is likely to meet the medical-indication threshold before starting the referral process.",
      "Compare orthodontist quotes if self-paying — treatment approach and price can vary between practices.",
      "Ask about adult clear-aligner options if traditional braces feel impractical for work or social reasons.",
      "Factor retainers and follow-up visits into your budget, not just the active treatment phase.",
      "If cost is a concern, ask about payment plans — some orthodontic practices offer instalment options.",
    ],
  },
  emergency: {
    heading: "Dental emergencies: who should I contact?",
    paragraphs: [
      "Most dental emergencies are urgent rather than life-threatening, and the right first call is usually your own dentist or the regional out-of-hours dental service, not 112 or a hospital emergency department.",
      "A genuine medical emergency — severe facial swelling affecting breathing or swallowing, uncontrolled bleeding that will not stop, or major facial trauma — is different, and that does need 112 or a hospital emergency department, since dental practices are not equipped to treat life-threatening situations.",
      "This section is orientation only. It cannot replace professional triage for your specific situation — if you are unsure how serious something is, call and describe it clearly.",
    ],
    urgencyRows: [
      { situation: "Severe facial swelling with fever, or difficulty breathing or swallowing", level: "emergency", action: "Call 112 immediately." },
      { situation: "Uncontrolled bleeding after a dental injury or extraction that will not stop", level: "emergency", action: "Call 112 or go to hospital A&E immediately." },
      { situation: "Jaw fracture or major facial trauma from an accident", level: "emergency", action: "Call 112 immediately." },
      { situation: "Knocked-out permanent tooth", level: "urgent", action: "Call your dentist or the out-of-hours dental service immediately — quick action improves the chance of saving the tooth." },
      { situation: "Severe toothache not settling with pain relief", level: "urgent", action: "Call your dentist for a same-day slot, or the out-of-hours dental service if closed." },
      { situation: "Broken or chipped tooth with pain or a sharp edge", level: "urgent", action: "Call the practice or the out-of-hours dental service for urgent assessment." },
      { situation: "Lost filling or crown causing pain", level: "urgent", action: "Call the practice for an urgent slot." },
      { situation: "Dental abscess with swelling but no breathing difficulty", level: "urgent", action: "Call the practice or the out-of-hours dental service promptly." },
      { situation: "Mild sensitivity to hot or cold", level: "routine", action: "Mention it at your next check-up or book a standard appointment." },
      { situation: "Chipped tooth without pain", level: "routine", action: "Book a normal appointment rather than an urgent one." },
      { situation: "Overdue routine check-up", level: "routine", action: "Book your next recall appointment." },
    ] satisfies UrgencyRow[],
    contrastRows: [
      {
        route: "Own dentist (daytime)",
        when: "Practice opening hours",
        how: "Call or use online booking",
        note: "Best for routine and same-day urgent dental problems.",
      },
      {
        route: "Dienstdoenende tandarts (out of hours)",
        when: "Evenings, nights, weekends and public holidays",
        how: "Call the regional out-of-hours dental line, usually announced on your own dentist's voicemail or website",
        note: "Urgent dental care that cannot wait until the practice reopens.",
      },
      {
        route: "Hospital A&E (SEH) / 112",
        when: "Life-threatening facial trauma, uncontrolled bleeding or airway-threatening swelling",
        how: "Call 112 or go straight to hospital emergency",
        note: "Dental practices cannot treat life-threatening emergencies — this route is for genuine medical emergencies with a dental cause.",
      },
    ] satisfies ContactRouteRow[],
    decisionTips: [
      "112 or hospital A&E = a genuine medical emergency now.",
      "Dienstdoenende tandarts = urgent, cannot wait for the practice to reopen, not life-threatening.",
      "Own dentist = routine and same-day non-emergency during opening hours.",
      "If unsure between 112 and the out-of-hours dental service, call 112 when breathing, swallowing or bleeding is a concern.",
    ],
    numbers: [
      {
        title: "Own dentist — daytime",
        body: "Same-day urgency and routine care during practice opening hours via phone or online booking.",
      },
      {
        title: "Dienstdoenende tandarts — out of hours",
        body: "Evenings, nights, weekends and public holidays. Call first for urgent dental problems that cannot wait.",
      },
      {
        title: "112 — emergency",
        body: "Life-threatening situations. Give your location first, then describe what is wrong.",
      },
      {
        title: "Hospital A&E (SEH)",
        body: "For major facial trauma or medical complications that a dental practice cannot treat.",
      },
    ],
    whatToSay: [
      "Full address and how to reach the door or entrance",
      "What happened and when it started",
      "Whether breathing, swallowing or bleeding is a concern",
      "Pain level and any swelling",
      "A callback number that will be answered",
    ],
    preparednessChecklist: [
      "Save 112 and your dentist's out-of-hours number in your phone",
      "Keep a photo of your insurance card and your BSN somewhere accessible",
      "Know that dental practices, not hospital A&E, are the default for urgent non-life-threatening dental problems",
      "Agree a household plan for who calls and who travels if a child has a dental accident",
      "Keep a small dental first-aid note: for a knocked-out tooth, avoid touching the root and seek care immediately",
    ],
    whenInDoubt:
      "If you are unsure whether a situation is a genuine medical emergency, call — triage staff would rather assess an unnecessary call than a delayed one.",
  },
  costs: {
    heading: "What does dental care cost? (orientation only)",
    paragraphs: [
      "The Dutch Healthcare Authority (NZa) sets maximum tariffs for dental treatments using standardised procedure codes, so prices sit within regulated bands rather than being set freely by each practice. Your actual invoice still depends on the complexity of the treatment, the materials used and the time involved.",
      "For anything beyond a routine check-up, it is normal — and worth asking for if it is not offered — to receive a written cost estimate (begroting) before treatment starts. This lets you understand the likely cost and ask questions before committing.",
      "Because most adult dental care sits outside basic insurance, many adults pay out of pocket or rely on an optional supplementary (aanvullende) policy, which has its own reimbursement percentage, annual maximum and possible waiting periods.",
    ],
    exampleCosts: [
      { title: "Check-up (periodiek onderzoek)", body: "Roughly €25–€35 as an indicative example — confirm your own invoice with the practice." },
      { title: "X-ray (single image)", body: "Roughly €15–€30 indicative per image, depending on the type taken." },
      { title: "Professional cleaning (hygienist)", body: "Roughly €40–€90 indicative, depending on time needed." },
      { title: "Small filling (composite)", body: "Roughly €40–€90 indicative, depending on size and number of surfaces." },
      { title: "Simple extraction", body: "Roughly €60–€110 indicative for a straightforward case." },
      { title: "Root canal treatment (molar)", body: "Roughly €300–€700+ indicative, depending on complexity and number of canals." },
      { title: "Crown", body: "Roughly €400–€900+ indicative, depending on material and technique." },
    ] satisfies TipCard[],
    costFactors: [
      "Material choice — for example composite versus ceramic, or the crown material used.",
      "Number of tooth surfaces or root canals involved in the procedure.",
      "Whether imaging such as X-rays is needed as part of the visit.",
      "Time and complexity of the specific case, including whether a specialist is involved.",
      "Whether hygienist time is billed as part of the check-up or as a separate appointment.",
    ],
    begrotingChecklist: [
      "Ask for a written begroting before non-routine treatment",
      "Check which procedure codes and descriptions are listed",
      "Ask what is included versus optional or follow-up costs",
      "Confirm what your supplementary policy reimburses and its annual maximum",
      "Keep the estimate and final invoice together for claims",
      "Ask whether a payment plan is available for larger work",
    ],
    indicativeNote:
      "Figures on this page are illustrative orientation only — not an official NZa fee schedule and not a quote for your teeth. Always confirm with your dentist and insurer before treatment.",
    tips: [
      "These figures are illustrative examples only, not an official fee schedule — always confirm your own quote with the practice.",
      "Ask for a written cost estimate (begroting) before agreeing to treatment beyond a routine check-up.",
      "Ask what your supplementary insurance, if any, reimburses and what the annual maximum is.",
      "Ask whether hygienist cleaning is billed separately from the check-up itself.",
      "For larger treatment plans, ask for the total expected cost across the whole course, not just the first session.",
      "NZa maximum tariffs and your dentist's own invoice are the source of truth — this section is orientation only.",
    ],
  },
  preventive: {
    heading: "Preventive dental care",
    paragraphs: [
      "Daily habits matter more in the Netherlands than in some other countries for one specific reason: Dutch tap water is not fluoridated. That makes fluoride toothpaste, and sometimes additional fluoride products recommended by your dentist, an important part of a daily routine rather than an optional extra.",
      "Brushing twice a day with fluoride toothpaste, combined with interdental cleaning using floss or interdental brushes, forms the baseline. Diet also matters — frequency of sugar exposure affects cavity risk more than total quantity in a single sitting.",
      "The mondhygiënist plays a central preventive role: professional cleaning removes plaque and tartar build-up beyond what daily brushing reaches, and hygienists often give tailored advice based on your specific gum health and risk factors.",
    ],
    roleCards: [
      {
        title: "Your daily routine",
        body: "Fluoride toothpaste twice a day, cleaning between teeth daily, and limiting how often sugary drinks and snacks appear.",
      },
      {
        title: "Mondhygiënist",
        body: "Professional cleaning and tailored home-care coaching — often a separate appointment and invoice from the check-up.",
      },
      {
        title: "Tandarts check-ups",
        body: "Personalised recall visits monitor cavities, gums and risk factors so small problems stay small.",
      },
      {
        title: "Lifestyle factors",
        body: "Smoking, grinding and frequent sugar exposure all change your risk — mention them so advice fits your life.",
      },
    ] satisfies TipCard[],
    points: [
      "Dutch tap water is not fluoridated — fluoride toothpaste and any additional products your dentist recommends matter more here.",
      "Brush twice daily with fluoride toothpaste and clean between teeth daily with floss or interdental brushes.",
      "Frequency of sugary food and drink affects cavity risk more than total amount eaten at once.",
      "Regular professional cleaning with a mondhygiënist catches build-up that brushing alone cannot remove.",
      "Preventive care keeps your personal recall interval longer and avoids more expensive reactive treatment later.",
    ],
    dailyChecklist: [
      "Brush twice daily with fluoride toothpaste",
      "Clean between teeth once daily (floss or interdental brushes)",
      "Keep sugary drinks and snacks less frequent, not only smaller",
      "Replace toothbrush or brush head when bristles wear",
      "Book professional cleaning on the schedule your practice recommends",
      "Mention grinding, bleeding gums or dry mouth at your next visit",
    ],
    tips: [
      "Ask your dentist or hygienist whether additional fluoride products are recommended for your situation.",
      "Replace your toothbrush or electric brush head every few months, or sooner if bristles are worn.",
      "Ask about mouth guards if you play contact sports, to reduce the risk of a dental injury.",
      "Mention teeth grinding (bruxism) symptoms — a night guard can prevent significant long-term damage.",
      "Treat prevention as cheaper than treatment — most preventive visits cost far less than the fillings or crowns they help you avoid.",
    ],
  },
  specialists: {
    heading: "Dental specialists you may be referred to",
    paragraphs: [
      "Most day-to-day dental care stays within your general tandarts's practice. Referral to a specialist happens when a procedure needs particular skill, equipment or experience that goes beyond routine general dentistry.",
      "Your dentist coordinates the referral and usually receives a letter back describing what was done, so your dental record stays complete even when specialist treatment happens elsewhere.",
      "Reimbursement for specialist dental care generally follows the same rules as general dental care — mostly self-pay or supplementary insurance for adults, with children's coverage depending on the specific treatment and any medical indication involved.",
    ],
    roles: [
      { role: "Kaakchirurg (oral & maxillofacial surgeon)", focus: "Complex extractions such as wisdom teeth, jaw surgery, facial trauma and implant surgery." },
      { role: "Parodontoloog (periodontist)", focus: "Advanced gum disease treatment and long-term gum health management." },
      { role: "Endodontoloog (endodontist)", focus: "Complex root canal treatment, especially difficult cases or retreatment." },
      { role: "Prosthodontist / tandprotheticus", focus: "Dentures, complex bridges and implant-supported restorations." },
      { role: "Kindertandarts (paediatric dentist)", focus: "Specialised dental care for young children and children with additional needs." },
    ] satisfies RoleCard[],
    points: [
      "Referral happens for complexity or equipment needs, not because your general dentist is unable to help you.",
      "Ask your dentist why a referral is being suggested and what the specialist visit will involve.",
      "Specialist letters usually go back to your general dentist to keep your dental record complete.",
      "Reimbursement rules for specialist care generally mirror general dental care — verify with your insurer for your situation.",
      "Waiting times for specialist appointments vary — ask your dentist what to expect when the referral is made.",
    ],
    scenarios: [
      {
        situation: "Complex wisdom tooth extraction",
        approach: "General dentist assesses; many cases are referred to a kaakchirurg.",
        firstStep: "Ask why referral is recommended and request cost orientation before booking.",
      },
      {
        situation: "Persistent gum disease",
        approach: "Periodontal therapy may stay in-practice or move to a parodontoloog.",
        firstStep: "Ask for the treatment plan, expected visits and who coordinates follow-up.",
      },
      {
        situation: "Failed or complex root canal",
        approach: "Endodontist referral is common for difficult canals or retreatment.",
        firstStep: "Confirm whether imaging and specialist fees are separate from the general dentist invoice.",
      },
    ] satisfies ScenarioRow[],
    afterReferralChecklist: [
      "Understand why the referral was made and what the specialist will assess",
      "Ask who books the appointment — you or the practice",
      "Request indicative cost and insurance implications before specialist treatment",
      "Keep a copy of the referral and any imaging sent",
      "Confirm the specialist letter will return to your general dentist",
      "Know what symptoms should bring you back sooner while waiting",
    ],
  },
  expatDifferences: {
    heading: "What often feels different for expats",
    paragraphs: [
      "Most friction newcomers feel around Dutch dental care comes from insurance assumptions carried over from another country, not from the quality of care itself. Many people arrive expecting dental care to be bundled with general health insurance, and are surprised to learn that for adults it usually is not.",
      "Other characteristics — personalised recall intervals instead of a fixed schedule, and a strong expectation of written cost estimates for larger treatment — are also system design choices rather than inconsistency. Once you know what to expect, dental visits become predictable and budgetable.",
      "Presenting these as system characteristics, rather than personal inconvenience, makes conversations with practice staff easier and helps you plan financially with fewer surprises.",
    ],
    cards: [
      {
        title: "No automatic adult coverage",
        body: "Basic insurance does not cover most adult dental care, which surprises people used to bundled health and dental cover.",
        advice: "Budget for dental care directly and compare supplementary (aanvullende) policies annually if you want partial reimbursement.",
      },
      {
        title: "Personalised recall intervals",
        body: "Check-up frequency is set per patient rather than a fixed rule such as 'every six months for everyone'.",
        advice: "Ask your dentist what your interval is and what would change it, rather than assuming a fixed schedule.",
      },
      {
        title: "Cost estimates required for bigger work",
        body: "Dentists are expected to explain costs and provide a written estimate before larger, non-routine treatment.",
        advice: "Always ask for a begroting before agreeing to anything beyond a routine check-up.",
      },
      {
        title: "No catchment-area registration",
        body: "Unlike GP practices, dentists are not tied to a strict local catchment area, though busy practices can still have waiting lists.",
        advice: "Search by postcode early and register before you need urgent care, even without a formal catchment rule.",
      },
      {
        title: "Separate hygienist visits",
        body: "Professional cleaning is sometimes billed as a distinct appointment from the check-up itself.",
        advice: "Ask directly whether cleaning is included in your visit or scheduled and billed separately.",
      },
      {
        title: "NZa-regulated tariff codes",
        body: "Treatments follow standardised procedure codes with regulated maximum tariffs rather than fully open pricing.",
        advice: "Ask for the treatment code and description on your invoice if you want to understand what you were charged for.",
      },
    ] satisfies MistakeCard[],
    advantages: [
      "Regulated maximum tariffs limit how much any single treatment can cost",
      "Written cost estimates are standard practice for non-routine treatment",
      "Strong coverage for children's routine dental care under basic insurance",
      "Clear daytime versus out-of-hours versus emergency pathways",
    ],
    limitations: [
      "Adult dental care mostly requires self-pay or supplementary insurance",
      "Orthodontic reimbursement for children depends on a strict medical-indication threshold",
      "Supplementary insurance value depends heavily on how much treatment you actually need",
      "English availability varies by practice, especially outside international hubs",
    ],
  },
  moving: {
    heading: "Moving to the Netherlands: dental setup checklist",
    intro: "Work through these steps once your address, BSN and insurance are in motion — dental setup fits alongside your other move admin.",
    tips: [
      "Treat dental registration as a parallel early priority alongside GP and insurance setup, not an afterthought.",
      "Print or screenshot this checklist into your move admin folder.",
      "Revisit the list after you move house — even without a strict catchment rule, a nearby dentist is more practical.",
    ],
    early: [
      "Confirm BSN and decide on supplementary dental insurance",
      "Search for a tandarts by postcode",
      "Shortlist practices accepting new patients",
      "Ask about English language if you need it",
    ],
    registration: [
      "Submit the aanmelden form with ID and insurance details",
      "Request transfer of dental records and X-rays from a previous dentist",
      "Confirm registration for each household member",
      "Book an intake or check-up appointment",
    ],
    readiness: [
      "Save the practice daytime number and any urgent line",
      "Save the regional out-of-hours dental number and 112",
      "Learn your personal recall interval once your dentist sets one",
      "Ask about cost estimates and what your supplementary insurance reimburses",
      "Confirm children are registered and understand their coverage rules",
      "Read the emergency decision section once while calm",
    ],
    full: [
      "BSN and insurance decisions confirmed",
      "Dentist practice registered and confirmed",
      "Dental records and X-rays transferred",
      "Intake or first check-up completed",
      "Emergency and out-of-hours numbers saved",
      "Household members registered where appropriate",
      "Know daytime dentist vs out-of-hours dental service vs 112",
      "Understand your personal recall interval and cost-estimate process",
      "Children's dental coverage confirmed separately from adults",
      "Annual reminder to review supplementary insurance at renewal time",
    ],
  },
  mistakes: {
    heading: "Common mistakes expats make",
    intro:
      "These patterns create avoidable stress and unexpected bills. Each includes a practical Fix so you can adapt to the system rather than be caught out by it.",
    cards: [
      {
        title: "Assuming basic insurance covers adult dental care",
        body: "Example: booking a filling expecting reimbursement, then receiving a full self-pay invoice.",
        advice: "Check your own coverage before treatment, and compare supplementary dental policies if you want partial reimbursement.",
      },
      {
        title: "Skipping check-ups until pain starts",
        body: "Example: avoiding the dentist for years, then needing a root canal or crown instead of a small filling.",
        advice: "Keep your personalised recall interval — preventive visits are almost always cheaper than reactive treatment.",
      },
      {
        title: "Not asking for a cost estimate before treatment",
        body: "Example: agreeing verbally to a crown or bridge and being surprised by the final invoice.",
        advice: "Ask for a written cost estimate (begroting) before agreeing to anything beyond a routine check-up.",
      },
      {
        title: "Going to hospital A&E for a non-emergency toothache",
        body: "Example: arriving at hospital A&E with tooth pain and being redirected to the out-of-hours dental service.",
        advice: "Use your own dentist by day and the out-of-hours dental service after hours; call 112 only for genuine medical emergencies.",
      },
      {
        title: "Registering only after an emergency happens",
        body: "Example: searching for an accepting dentist while already in pain on a weekend.",
        advice: "Register with a tandarts in your first weeks, before you need urgent care.",
      },
      {
        title: "Assuming children's and adult dental coverage are the same",
        body: "Example: expecting a child's orthodontic treatment to be automatically reimbursed like a routine check-up.",
        advice: "Confirm children's coverage separately, especially for orthodontics, which needs a medical-indication assessment.",
      },
    ] satisfies MistakeCard[],
    adaptationTips: [
      "Budget for adult dental care directly, and treat supplementary insurance as an optional financial decision, not a default expectation.",
      "Ask for cost estimates proactively rather than waiting for the practice to offer one.",
      "Keep your personal recall interval — prevention saves both money and discomfort.",
      "Save 112 and the out-of-hours dental number before the first painful evening.",
      "Keep your own copies of X-rays, treatment plans and cost estimates.",
      "Update the practice promptly after you move address or change insurer.",
    ],
  },
  faq: [
    {
      q: "Does Dutch health insurance cover dental care?",
      a: "For adults, basic health insurance generally does not cover routine dental care such as check-ups, fillings and cleanings. For children under 18, most routine dental care is included in basic insurance. Optional supplementary (aanvullende) dental insurance exists for adults who want partial reimbursement — compare policies before relying on one.",
    },
    {
      q: "How do I find and register with a dentist in the Netherlands?",
      a: "Search for 'tandarts' near your postcode, check which practices are accepting new patients, and confirm practical details like opening hours and English-language support. Complete the practice's aanmelden (registration) form with your BSN, ID and insurance details, and ask your previous dentist to transfer your dental records and X-rays if you have them.",
    },
    {
      q: "How much does a dental check-up cost in the Netherlands?",
      a: "As an indicative example, a routine check-up is often roughly €25–€35, though this varies by practice and what the visit includes. The Dutch Healthcare Authority (NZa) regulates maximum tariffs, but your own invoice depends on your specific treatment — always confirm current pricing with your practice.",
    },
    {
      q: "What should I do in a dental emergency?",
      a: "For urgent but non-life-threatening problems such as severe toothache or a knocked-out tooth, call your own dentist during opening hours or the regional out-of-hours dental service (dienstdoenende tandarts) after hours. For a genuine medical emergency — severe facial swelling affecting breathing, uncontrolled bleeding, or major facial trauma — call 112 or go to hospital A&E immediately.",
    },
    {
      q: "Is dental care free for children in the Netherlands?",
      a: "Most routine dental care for children under 18 is included in basic health insurance, so it is largely covered rather than fully 'free' in every case. Orthodontics is a notable exception — reimbursement usually requires an independent assessment confirming a severe medical indication.",
    },
    {
      q: "Are braces covered by insurance in the Netherlands?",
      a: "For children, orthodontic treatment is generally only reimbursed by basic insurance when an independent assessment confirms a severe medical indication — moderate or cosmetic misalignment is usually not covered. For adults, orthodontic treatment is almost always self-pay, whether through traditional braces or clear aligners.",
    },
    {
      q: "How often should I go to the dentist in the Netherlands?",
      a: "Dutch dentists typically set a personalised recall interval based on your individual oral health rather than a fixed rule for everyone. Ask your dentist what your interval is and what factors would change it.",
    },
    {
      q: "Do Dutch dentists speak English?",
      a: "Many do, especially in internationally oriented cities and practices, but it is not guaranteed everywhere. Ask when you register, and bring a short written summary of your dental history if language feels uncertain.",
    },
    {
      q: "What is a begroting and why does my dentist give me one?",
      a: "A begroting is a written cost estimate that Dutch dentists typically provide before starting non-routine treatment, so you understand the likely cost before agreeing. It is standard practice — you can and should ask for one if it is not offered.",
    },
    {
      q: "Can I see a dental specialist directly, or do I need a referral?",
      a: "Your general tandarts usually refers you to a specialist such as an oral surgeon, periodontist or endodontist when a procedure needs particular skill or equipment. Most day-to-day dental care, however, stays within your own dentist's practice without any referral needed.",
    },
    {
      q: "What if dentists near me are not accepting new patients?",
      a: "Ask practices with closed lists which nearby dentists are still accepting patients, widen your search area slightly, and register as soon as your address is stable. A slightly farther accepting practice is better than remaining unregistered.",
    },
    {
      q: "Is hygienist cleaning included in my check-up?",
      a: "Not always. Some practices combine the check-up and mondhygiënist cleaning; others schedule and bill them separately. Ask when you book so you know what the visit includes and what it may cost.",
    },
    {
      q: "Does the annual deductible (eigen risico) apply to adult dental care?",
      a: "Usually not for routine adult dental care, because that care is generally outside the basic insurance package. Supplementary dental policies have their own separate terms, reimbursement percentages and annual maximums.",
    },
    {
      q: "What should I do if a permanent tooth is knocked out?",
      a: "Call your dentist or the regional out-of-hours dental service immediately — quick action improves the chance of saving the tooth. Avoid touching the root if you can, and follow the advice you are given on the phone. Call 112 if there is major facial trauma, uncontrolled bleeding or breathing difficulty.",
    },
    {
      q: "How do I change dentist or transfer my dental records?",
      a: "Register with the new practice, then ask your previous dentist to transfer your dental history and X-rays. Keep your own copies of recent X-rays, treatment plans and cost estimates when you move.",
    },
    {
      q: "Can I find an English-speaking dentist?",
      a: "Many practices in internationally oriented cities have English-speaking staff, but it is not guaranteed everywhere. Ask when you register, and bring a short written dental-history summary if language feels uncertain.",
    },
  ],
  faqQuickReference: [
    "Adult dental care mostly sits outside basic insurance — budget directly or add supplementary cover.",
    "Children's routine dental care is largely covered by basic insurance up to age 18.",
    "Register with a tandarts early — practices are flexible but busy ones can have waiting lists.",
    "Ask for a written cost estimate (begroting) before agreeing to non-routine treatment.",
    "Own dentist by day, out-of-hours dental service after hours, 112 for genuine emergencies.",
    "Orthodontic reimbursement for children needs an approved severe medical indication.",
    "Check-up frequency is personalised — ask your dentist what your recall interval is.",
    "Hygienist cleaning may be billed separately from the check-up — confirm when booking.",
  ],
  howToSchema: {
    name: "Finding a Dentist in the Netherlands",
    description:
      "Step-by-step orientation for expats finding and registering with a Dutch dentist (tandarts), including insurance considerations, searching by postcode and transferring dental records.",
    anchor: "#finding",
  },
  relatedGuidesTips: [
    "GP care and referrals → the GP (huisarts) guide.",
    "Insurance not arranged yet → start with the health insurance guide.",
    "Family with children → healthcare for children cornerstone.",
    "Want the wider system map → healthcare basics.",
    "Emergency planning → emergencies and safety living guide.",
  ],
  relatedGuides: [
    { label: "General Practitioner (GP) in the Netherlands", href: GP_NETHERLANDS_PATH, status: "live", description: "Registration, appointments, referrals and emergencies with the Dutch GP." },
    { label: "Health Insurance in the Netherlands", href: HEALTH_INSURANCE_PATH, status: "live", description: "Basic package, deductible, choosing an insurer and supplementary cover." },
    { label: "Healthcare Basics", href: HEALTHCARE_BASICS_PATH, status: "live", description: "How Dutch healthcare fits together for everyday living." },
    { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "live", description: "GPs, JGZ, vaccinations, dental care and emergencies for children." },
    { label: "Emergencies & Safety", href: EMERGENCIES_SAFETY_PATH, status: "live", description: "Emergency numbers, safety orientation and what to do under pressure." },
    { label: "Health System Culture Basics", href: HEALTH_SYSTEM_CULTURE_PATH, status: "live", description: "How care interactions often feel in Dutch healthcare culture." },
  ] satisfies DentistLink[],
  healthcareHubTips: [
    "Dental care, GP care and insurance are decided separately — register for each on its own timeline.",
    "This page is the dentistry cornerstone; the GP guide and healthcare basics cover the wider system.",
    "Families should also read the children's healthcare guide for JGZ and paediatric dental timing.",
    "A dedicated health hub landing page is planned — use the live links meanwhile.",
  ],
  healthcareHubCards: [
    { label: "Dentists (tandarts)", href: DENTISTS_NETHERLANDS_PATH, status: "live", description: "Finding a dentist, insurance, costs, children's dental care and emergencies — you are here." },
    { label: "General Practitioner (GP)", href: GP_NETHERLANDS_PATH, status: "live", description: "Huisarts registration, appointments, referrals and emergencies." },
    { label: "Health Insurance", href: HEALTH_INSURANCE_PATH, status: "live", description: "Basic package and insurer setup." },
    { label: "Healthcare Basics", href: HEALTHCARE_BASICS_PATH, status: "live", description: "System overview for everyday living." },
    { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "live", description: "Family and children's healthcare cornerstone." },
    { label: "Emergencies & Safety", href: EMERGENCIES_SAFETY_PATH, status: "live", description: "112 and urgent-care orientation." },
    { label: "Health Hub", href: HEALTH_HUB_PATH, status: "comingSoon", description: "Dedicated health hub landing page — planned." },
  ] satisfies DentistLink[],
  exploreNextCards: [
    { label: "General Practitioner (GP)", href: GP_NETHERLANDS_PATH, status: "live", description: "See how GP care and referrals fit alongside dental care." },
    { label: "Health Insurance", href: HEALTH_INSURANCE_PATH, status: "live", description: "Arrange basic cover and compare supplementary dental policies." },
    { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "live", description: "Family GP care, JGZ, dental timing and paediatric pathways." },
    { label: "Emergencies & Safety", href: EMERGENCIES_SAFETY_PATH, status: "live", description: "Save the right numbers before you need them." },
    { label: "Health System Culture", href: HEALTH_SYSTEM_CULTURE_PATH, status: "live", description: "What care conversations often feel like here." },
  ] satisfies DentistLink[],
  exploreNextTips: [
    "GP care and referrals still unclear → the GP guide.",
    "Coverage questions still open → health insurance guide.",
    "Moving with children → healthcare for children.",
    "Need emergency clarity → emergencies and safety.",
    "Curious about interaction style → health system culture basics.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks before your first visit",
      items: [
        "Understand that adult dental care sits outside basic insurance.",
        "Choose and register a tandarts near home.",
        "Learn how check-up intervals and cost estimates work.",
        "Save emergency dental routes alongside 112.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Routine check-ups: personalised recall, not a fixed rule for everyone.",
        "Dental insurance: adults mostly self-pay; children largely covered.",
        "Emergency dentist: own practice by day, duty dentist after hours, 112 if life-threatening.",
        "Children's dentistry: register early, separate from JGZ.",
        "Orthodontics: indication rules for children; adults usually self-pay.",
        "Preventive care: fluoride, interdental cleaning and hygienist visits.",
      ],
    },
    howItWorks: {
      title: "From the visual — the care cycle",
      items: [
        "Choose and register with a tandarts once.",
        "Check-up assesses oral health and sets your recall interval.",
        "Preventive care and treatment repeat as needed.",
        "Maintenance keeps the cycle going over time.",
      ],
    },
    finding: {
      title: "From the visual — registration sequence",
      items: [
        "Search by postcode and confirm accepting-patient status.",
        "Ask about English-speaking staff if you need it.",
        "Submit aanmelden with BSN and ID.",
        "Request transfer of dental records and X-rays.",
      ],
    },
    insurance: {
      title: "From the visual — coverage at a glance",
      items: [
        "Children: most routine dental care is covered by basic insurance.",
        "Adults: routine dental care usually is not covered.",
        "Supplementary insurance is optional — compare annually.",
        "Check reimbursement percentage and annual maximum before relying on a policy.",
      ],
    },
    checkUps: {
      title: "From the visual — make a check-up useful",
      items: [
        "Recall interval is personalised to your oral health.",
        "X-rays are taken based on clinical need, not every visit.",
        "Hygienist cleaning may be a separate appointment.",
        "Prepare symptoms, medicines and cost questions before you sit down.",
        "Leave with your next recall booked and any begroting in writing.",
      ],
    },
    treatments: {
      title: "From the visual — seven treatments explained",
      items: [
        "Fillings, crowns and root canal treatment repair damaged teeth.",
        "Extractions and bridges address missing or unsalvageable teeth.",
        "Implants offer a longer-term replacement option.",
        "Professional cleaning is preventive, not restorative.",
        "Ask for a behandelplan and begroting before larger work.",
      ],
    },
    children: {
      title: "From the visual — family dental pathways",
      items: [
        "Register children with a tandarts early — separate from JGZ.",
        "Most routine care for under-18s is covered by basic insurance.",
        "Orthodontics needs a separate medical-indication assessment.",
        "Use the Healthcare for Children guide for the full family pathway.",
      ],
    },
    orthodontics: {
      title: "From the visual — orthodontics timeline",
      items: [
        "Screening can start around age eight to ten.",
        "Reimbursement for children needs an approved severe indication.",
        "Most orthodontic treatment is self-pay, especially for adults.",
        "Ask for a full-course estimate including retainers.",
      ],
    },
    emergency: {
      title: "From the visual — choose the right door",
      items: [
        "Own dentist: routine and daytime same-day care.",
        "Dienstdoenende tandarts: urgent, cannot wait, not life-threatening.",
        "112 or hospital A&E: genuine medical emergency now.",
        "Have your address, symptoms and callback number ready when you call.",
      ],
    },
    costs: {
      title: "From the visual — cost orientation",
      items: [
        "NZa regulates maximum tariffs for dental treatment.",
        "Ask for a written cost estimate (begroting) before larger work.",
        "Figures shown are indicative examples, not a fee schedule.",
        "Check codes, inclusions and insurer reimbursement before you agree.",
      ],
    },
    preventive: {
      title: "From the visual — daily prevention habits",
      items: [
        "Dutch tap water is not fluoridated — fluoride toothpaste matters more.",
        "Brush twice daily and clean between teeth daily.",
        "Sugar frequency affects cavity risk more than total amount.",
        "Professional cleaning catches what brushing alone cannot.",
      ],
    },
    specialists: {
      title: "From the visual — specialist referral map",
      items: [
        "Oral surgeon: complex extractions, jaw surgery and implants.",
        "Periodontist: advanced gum disease treatment.",
        "Endodontist: complex or retreatment root canal cases.",
        "After referral: keep copies and confirm the letter returns to your dentist.",
      ],
    },
    expatDifferences: {
      title: "From the visual — system characteristics",
      items: [
        "No automatic adult coverage is a system design, not an omission.",
        "Personalised recall intervals replace a fixed rule for everyone.",
        "Cost estimates for bigger work are standard practice.",
        "No strict catchment area, but busy practices can still have waiting lists.",
      ],
    },
    moving: {
      title: "From the visual — moving checklist priorities",
      items: [
        "Decide on supplementary insurance early.",
        "Search, register and transfer dental records.",
        "Save daytime and out-of-hours dental numbers.",
        "Confirm children's coverage separately from adults.",
      ],
    },
    mistakes: {
      title: "From the visual — mistakes with fixes",
      items: [
        "Assuming adult cover → check your policy first.",
        "Skipping check-ups → keep your recall interval.",
        "No cost estimate → always ask for a begroting.",
        "A&E for toothache → dentist or out-of-hours dental service.",
        "Late registration → register in the first weeks.",
      ],
    },
    faq: {
      title: "From the visual — top questions answered",
      items: [
        "Adult dental care mostly sits outside basic insurance.",
        "Children's routine care is largely covered up to age 18.",
        "Register early — practices can have waiting lists.",
        "Own dentist by day, out-of-hours service after hours, 112 for emergencies.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next by need",
      items: [
        "GP care → the GP guide.",
        "Insurance → health insurance guide.",
        "Children → healthcare for children.",
        "Emergency planning → emergencies and safety.",
      ],
    },
    healthcareHub: {
      title: "From the visual — the healthcare cluster",
      items: [
        "Dentists cornerstone (this page): finding a dentist to emergencies.",
        "GP: primary care registration and referrals.",
        "Insurance and basics: coverage and system overview.",
        "Family: children's healthcare pathway.",
      ],
    },
    exploreNext: {
      title: "From the visual — choose the card matching your next need",
      items: [
        "GP care → primary care registration and referrals.",
        "Health insurance → coverage and supplementary policy setup.",
        "Children or emergencies → family care or safety planning.",
        "Culture basics → how care conversations often feel.",
      ],
    },
  },
  sourceUsageTips: [
    "Use Government.nl for official rules on health insurance and how care is organised.",
    "Use NZa for regulator information on dental tariff codes and patient rights.",
    "Use KNMT for professional dental-association context — not as personal treatment advice.",
    "Use Rijksoverheid and your insurer portal for entitlements and reimbursement questions.",
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
      label: "NZa — Dutch Healthcare Authority",
      href: "https://www.nza.nl/english",
      description: "Regulator information on healthcare rules, tariff regulation and patient-facing rights orientation.",
    },
    {
      label: "KNMT — Royal Dutch Dental Association",
      href: "https://www.knmt.nl/",
      description: "Professional body for Dutch dentists — standards and dental-care organisation context.",
    },
    {
      label: "Rijksoverheid — Healthcare",
      href: "https://www.rijksoverheid.nl/onderwerpen/zorgverzekering",
      description: "Dutch government topic pages on health insurance and care organisation.",
    },
  ],
  officialSourcesNote:
    "General information only — not dental or medical advice. Practice rules, insurer contracting and treatment approaches change, so verify your own situation with your dentist, insurer and the official sources above. In an emergency, call 112.",
} as const;

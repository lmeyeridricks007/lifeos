export const HEALTHCARE_FOR_CHILDREN_PATH = "/netherlands/family/healthcare-for-children-netherlands/" as const;
export const GP_NETHERLANDS_PATH = "/netherlands/health/gp-netherlands/" as const;
export const PARENTING_NETHERLANDS_PATH = "/netherlands/family/parenting-netherlands/" as const;
export const CHILD_BENEFITS_PATH = "/netherlands/family/child-benefits-netherlands/" as const;
export const DAYCARE_NETHERLANDS_PATH = "/netherlands/education/daycare-netherlands/" as const;
export const AFTER_SCHOOL_CARE_PATH = "/netherlands/education/after-school-care-netherlands/" as const;
export const DUTCH_SCHOOLS_PATH = "/netherlands/education/dutch-schools-netherlands/" as const;
export const INTERNATIONAL_SCHOOLS_PATH = "/netherlands/education/international-schools-netherlands/" as const;
export const MOVING_WITH_KIDS_PATH = "/netherlands/moving-to-netherlands-with-kids/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const FAMILY_HUB_PATH = PARENTING_NETHERLANDS_PATH;
export const HOSPITALS_NETHERLANDS_PATH = "/netherlands/health/hospitals-netherlands/" as const;
export const EMERGENCY_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/emergency-healthcare-netherlands/" as const;
export const MENTAL_HEALTHCARE_NETHERLANDS_PATH =
  "/netherlands/health/mental-healthcare-netherlands/" as const;
export const PHARMACIES_NETHERLANDS_PATH = "/netherlands/health/pharmacies-netherlands/" as const;
export const PRESCRIPTIONS_NETHERLANDS_PATH = "/netherlands/health/prescriptions-netherlands/" as const;
export const PHYSIOTHERAPY_NETHERLANDS_PATH = "/netherlands/health/physiotherapy-netherlands/" as const;
export const MATERNITY_CARE_NETHERLANDS_PATH = "/netherlands/health/maternity-care-netherlands/" as const;
export const HEALTH_INSURANCE_COMPARISON_NETHERLANDS_PATH =
  "/netherlands/health/health-insurance-comparison-netherlands/" as const;
export const HEALTH_INSURANCE_COMPARISON_PATH = HEALTH_INSURANCE_COMPARISON_NETHERLANDS_PATH;

export type HealthcareLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon" | "external";
};

export type TipCard = { title: string; body: string };

export type SnapshotSignal = { label: string; value: string; note: string };

export type SurpriseCard = { title: string; body: string; tip: string };

export type TimelineStep = { phase: string; title: string; detail: string };

export type ServiceRow = {
  service: string;
  purpose: string;
  whenToUse: string;
  access: string;
};

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

export type AgeMomentRow = {
  moment: string;
  focus: string;
  note: string;
};

export type CoverageRow = {
  careType: string;
  coverage: string;
  note: string;
};

export type VaccinationPhaseRow = {
  phase: string;
  typicallyOffered: string;
  parentAction: string;
};

export type HospitalRow = {
  setting: string;
  covers: string;
  howYouGetThere: string;
};

export type IllnessRow = {
  whatYouNotice: string;
  firstContact: string;
  note: string;
};

export type HowToStep = { name: string; text: string };

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "premium-v2";
const VISUAL_PREFIX = "healthcare-for-children-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const healthcareForChildrenNetherlandsPage = {
  slug: "healthcare-for-children-netherlands",
  path: HEALTHCARE_FOR_CHILDREN_PATH,
  hubPath: PARENTING_NETHERLANDS_PATH,
  parentGuidePath: PARENTING_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2027-01-24",
  seo: {
    title: "Healthcare for Children in the Netherlands | Complete Guide for Expat Families",
    description:
      "Everything parents need to know about children's healthcare in the Netherlands, including GPs, Youth Healthcare (JGZ), vaccinations, specialists, hospitals, dental care and emergencies.",
    keywords: [
      "healthcare for children netherlands",
      "children's healthcare netherlands",
      "child health insurance netherlands",
      "jgz netherlands",
      "consultatiebureau",
      "huisarts children netherlands",
      "vaccinations netherlands children",
      "rijksvaccinatieprogramma",
      "kinderarts netherlands",
      "dental care children netherlands",
      "emergency care children netherlands",
      "huisartsenpost children",
      "expat family healthcare netherlands",
      "youth healthcare netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Family · Children's Healthcare",
    pageTitle: "Healthcare for Children in the Netherlands",
    subtitle:
      "Everything parents need to know about children's healthcare, from newborn check-ups and vaccinations to GPs, hospitals, specialists and emergency care.",
    primaryCta: { label: "Understand Children's Healthcare", href: "#how-it-works" },
    secondaryCta: { label: "Explore Family Guides", href: PARENTING_NETHERLANDS_PATH },
    chips: ["Health insurance", "GP", "JGZ", "Vaccinations", "Emergencies"],
    disclaimer:
      "General orientation only — not medical advice. For individual concerns, contact a GP, JGZ or emergency services. Always verify coverage with your insurer and current RIVM/JGZ guidance.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic editorial photo of a Dutch Youth Healthcare consultatiebureau visit — a multicultural father kneeling beside his toddler on a child weighing scale while a JGZ nurse records growth in a booklet, wooden toys nearby, brick canal houses and bicycles visible through the clinic window in soft daylight.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#health-insurance", label: "Insurance" },
    { href: "#gp", label: "GP (huisarts)" },
    { href: "#jgz", label: "JGZ" },
    { href: "#consultation-bureaus", label: "Consultation bureau" },
    { href: "#vaccinations", label: "Vaccinations" },
    { href: "#hospitals-specialists", label: "Hospitals" },
    { href: "#emergency-care", label: "Emergencies" },
    { href: "#dental-care", label: "Dental" },
    { href: "#mental-health", label: "Mental health" },
    { href: "#childhood-illnesses", label: "Common illnesses" },
    { href: "#medications", label: "Medicines" },
    { href: "#moving-checklist", label: "Moving" },
    { href: "#healthcare-checklist", label: "Checklist" },
    { href: "#expat-surprises", label: "Surprises" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#family-hub", label: "Family hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Before Your First Appointment — four building blocks for children's healthcare in the Netherlands: confirm basic insurance on a parent policy, register a huisarts for illness care, find JGZ or the consultation bureau for preventive checks, and save emergency routes for 112 and the huisartsenpost — with a Safety file rail listing BSN, insurer card, GP name and JGZ invitations.",
      "Four building blocks cover setup: insurance, a GP near home, JGZ preventive care, and emergency numbers saved before you need them."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of children's healthcare in the Netherlands — Health Insurance (free cover under 18), GP as first contact and referral gate, Youth Healthcare JGZ for preventive checks, national vaccination programme, dental care covered until 18, and emergency care via 112 and the out-of-hours GP post.",
      "Six building blocks explain almost every children's healthcare question — the sections below add detail to each."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium nine-step pathway timeline from birth or arrival to school years — municipal registration and BSN, adding the child to health insurance, newborn screening, consultation bureau invitation, vaccinations, GP registration, referrals to paediatric specialists, and school-age preventive screening moments.",
      "Children's care runs on two parallel tracks: preventive checks through JGZ and illness care through your GP."
    ),
    healthInsurance: visual(
      "health-insurance",
      "Premium insurance record board for a Dutch family policy — children under 18 insured without premium and without deductible, basic package covering GP, hospital, medicines and youth dental care, with supplementary cover noted for orthodontics and a four-month registration deadline for newborns.",
      "Children pay no premium and no deductible — but they must still be actively registered with an insurer."
    ),
    gp: visual(
      "gp",
      "Premium GP practice desk scene — a family registration form with BSN and insurance fields, the practice assistant triage phone script, a referral letter to a paediatrician, and a note card showing daytime GP hours versus the out-of-hours GP post number.",
      "The huisarts is your family's first contact for illness and the gateway to hospital and specialist care."
    ),
    jgz: visual(
      "jgz",
      "Premium youth healthcare ecosystem diagram showing JGZ services from birth to eighteen — growth and development monitoring, vision and hearing screening, vaccinations, parenting guidance, and school-based youth health teams, with the consultation bureau and school health nurse as two entry points.",
      "JGZ is free preventive care funded through your municipality — it runs alongside, not instead of, your GP."
    ),
    consultationBureaus: visual(
      "consultation-bureaus",
      "Premium consultation bureau appointment scene — a youth healthcare nurse plotting a growth curve while a parent asks questions from a prepared note, weighing scale and measuring board in view, and a card listing the professional roles a family meets at the bureau.",
      "Bring your questions in writing — the bureau appointment is short but the team is there to advise, not judge."
    ),
    vaccinations: visual(
      "vaccinations",
      "Premium vaccination programme overview board with four broad life phases — infant series in the first year, toddler boosters, school-age boosters and adolescent vaccinations — plus a catch-up route for children arriving from abroad and a prominent reminder to verify the current schedule with RIVM.",
      "Vaccinations are free and voluntary — check the current RIVM schedule rather than relying on any summary."
    ),
    hospitalsSpecialists: visual(
      "hospitals-specialists",
      "Premium referral map from the GP practice to paediatric care settings — regional hospital paediatric outpatient clinic, university medical centre children's hospital, specialised national paediatric centre, and day-treatment unit, with the referral letter as the connecting thread.",
      "Almost all paediatric specialist care starts with a GP referral — the referral letter is your access key."
    ),
    emergencyCare: visual(
      "emergency-care",
      "Premium emergency decision board contrasting life-threatening situations that need 112 with urgent situations for the out-of-hours GP post and routine concerns for a normal GP appointment, alongside a phone card showing which numbers to save and what information to have ready when calling.",
      "When in doubt, call — Dutch triage staff would rather assess an unnecessary call than a delayed one."
    ),
    dentalCare: visual(
      "dental-care",
      "Premium dental record board for a Dutch family — child dental check-up covered under the basic insurance until eighteen, routine six-monthly appointments, orthodontics usually needing supplementary cover, and a registration note about practice waiting lists in busy cities.",
      "Dental care for children is covered until 18, but you must register with a practice yourself."
    ),
    mentalHealth: visual(
      "mental-health",
      "Premium support pathway diagram for children's mental wellbeing — school support team and youth health nurse, GP referral to youth mental health services, municipal youth support teams and family centres, plus free confidential helplines for children and crisis contacts.",
      "Several doors lead to the same support — school, JGZ, your GP or the municipal youth team."
    ),
    childhoodIllnesses: visual(
      "childhood-illnesses",
      "Premium orientation board on how the Dutch system responds to common childhood illness — watchful waiting and clear return-if-worse instructions, conservative antibiotic prescribing, reliable national self-help information, and daycare or school notification practice, with a note that treatment guidance always comes from a professional.",
      "Expect watchful waiting with clear warning signs — and ask directly what should make you come back."
    ),
    medications: visual(
      "medications",
      "Premium pharmacy scene — a Dutch apotheek counter with a digital prescription on screen, a children's paracetamol box, a repeat prescription request slip, and a card explaining the difference between a drugstore, a pharmacy and the out-of-hours pharmacy.",
      "Register with one pharmacy near home so prescriptions, repeats and interaction checks stay in one place."
    ),
    movingChecklist: visual(
      "moving-checklist",
      "Premium relocation timeline for families with children — before departure gather vaccination records, growth charts and prescriptions with generic names; week one register at the municipality and arrange insurance; week two register a GP, dentist and pharmacy; month one attend the first JGZ appointment.",
      "Records travel badly — collect and translate them before you leave, not after you arrive."
    ),
    healthcareChecklist: visual(
      "healthcare-checklist",
      "Premium ten-step children's healthcare checklist board — insurance registration, GP, JGZ, dentist, pharmacy, vaccination record, emergency numbers, school health consent, chronic condition handover and an annual review reminder.",
      "Work through the essentials in order — most families finish the core setup within their first month."
    ),
    expatSurprises: visual(
      "expat-surprises",
      "Premium surprise board with six cards and fixes — the GP acts as gatekeeper, prescriptions are conservative, preventive care sits outside the GP practice, appointments are short and phone-triaged, children's dental care needs your own registration, and out-of-hours care starts with a phone call rather than the hospital.",
      "None of these are problems once you expect them — each card includes the practical fix."
    ),
    faq: visual(
      "faq",
      "Premium FAQ board with eight readable question and answer pairs on children's healthcare in the Netherlands — cost and insurance, GP registration, JGZ, vaccinations, specialist access, emergencies, dental cover and records from abroad.",
      "Orientation answers only — confirm your own situation with your insurer, GP and JGZ team."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking children's healthcare to the health insurance guide, parenting guide, child benefits, daycare, after-school care, schools and the relocation-with-children guide.",
      "Healthcare connects to insurance, childcare and school choices — read them together when planning."
    ),
    familyHub: visual(
      "family-hub",
      "Premium family cluster ecosystem diagram with children's healthcare at the centre, connected to parenting, daycare, schools, child benefits and moving with children guides.",
      "This page is the children's healthcare cornerstone — explore the wider family cluster next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from children's healthcare to health insurance, parenting, child benefits, daycare and the moving-with-children checklist, with official source cards for government, RIVM and youth healthcare information.",
      "Continue with insurance, benefits and childcare planning — and verify details on the official sources."
    ),
  },
  quickAnswer: {
    heading: "Quick answer: how children's healthcare works here",
    summary:
      "Children under 18 are covered by Dutch health insurance without paying a premium or deductible, but they must be registered on a parent's policy. Illness care runs through your family GP (huisarts), while free preventive check-ups and vaccinations run through Youth Healthcare (JGZ).",
    bullets: [
      "Register your child with a Dutch health insurer — cover is free for under-18s but not automatic.",
      "Register the whole family with a GP practice near home; the huisarts refers you to specialists.",
      "Accept the JGZ / consultatiebureau invitation — growth, development, hearing, vision and vaccinations.",
      "Register a dentist (tandarts) yourself — routine dental care is covered until 18, but not arranged for you.",
      "Save two numbers: 112 for life-threatening emergencies and your regional out-of-hours GP post (huisartsenpost).",
    ],
    note: "Set up insurance, GP and JGZ in your first month — everything else (specialists, dentist, pharmacy) becomes far easier once those three are in place.",
  },
  introParagraphs: [
    "Children's healthcare in the Netherlands is built on two parallel tracks. Illness and injury go through your family GP (huisarts), who treats what can be treated in the practice and writes referrals for hospitals and paediatric specialists. Prevention — growth, development, vision, hearing, vaccinations and parenting questions — runs through Youth Healthcare (jeugdgezondheidszorg, JGZ), delivered by the consultation bureau for under-fours and by school-based youth health teams afterwards.",
    "Financially, children are treated generously: under-18s are insured without paying a premium and without the annual deductible (eigen risico) that applies to adults, and JGZ preventive care is funded through your municipality rather than billed to you. What surprises many newcomers is not the cost but the structure — you cannot usually book a paediatrician directly, appointments are short and phone-triaged, and out-of-hours care starts with a call to the huisartsenpost rather than a walk-in at the hospital.",
    "This guide walks through each part of the system in the order you will meet it: insurance and registration, the GP, JGZ and consultation bureaus, vaccinations, hospitals and specialists, emergencies, dental care, mental health support, everyday illness, medicines, and the practical checklists for relocating families. It is orientation, not medical advice — for anything about your own child, speak to a GP, a JGZ professional or, in an emergency, call 112.",
  ],
  orientationFlowSteps: [
    "Confirm basic insurance — add every child to a parent's Dutch basic policy and keep the insurer name and policy number somewhere you can find at 22:00.",
    "Register a huisarts near home — the GP is first contact for illness and the only practical gate to specialist care.",
    "Find your JGZ / consultation bureau — accept the invitation for preventive checks, growth monitoring and vaccinations.",
    "Save emergency routes now — 112 for life-threatening situations and your regional huisartsenpost number for urgent out-of-hours care.",
  ],
  introHighlights: [
    "Insurance, GP and JGZ are three separate registrations — finishing one never finishes the others.",
    "Under-18s pay no premium and no deductible, but cover is still not automatic until the child is on a policy.",
    "Illness goes to the GP; growth, screening and vaccinations go to JGZ — you need both active.",
    "Out-of-hours care starts with a phone call to the huisartsenpost, not a walk-in at the hospital.",
  ],
  safetyFileChecklist: [
    "Each child's BSN (citizen service number)",
    "Insurer name, policy number and a photo of the insurance card",
    "GP practice name, daytime number and any urgent line",
    "JGZ / consultation bureau letters and invitation dates",
    "Regional huisartsenpost number and address",
    "Vaccination record (original plus translation if needed)",
  ],
  introScenarios: [
    {
      situation: "Baby born in the Netherlands",
      approach: "Midwife and maternity care (kraamzorg) handle the first days; JGZ takes over preventive care from around two weeks.",
      firstStep: "Declare the birth at the gemeente, then contact your insurer to add the baby to your policy.",
    },
    {
      situation: "Arriving with a toddler",
      approach: "Register the family, arrange insurance, then contact the local JGZ organisation so check-ups and vaccinations continue.",
      firstStep: "Bring the original vaccination record and ask JGZ to assess what is still needed.",
    },
    {
      situation: "Arriving with a school-age child",
      approach: "Preventive care shifts to school-based youth healthcare; illness care runs through your new GP.",
      firstStep: "Register a GP and dentist in the first weeks, and tell the school about health needs.",
    },
    {
      situation: "Child with a chronic condition",
      approach: "Continuity depends on a good handover — the Dutch GP needs a written summary before they can refer effectively.",
      firstStep: "Ask the previous specialist for an English medical summary and current prescriptions with generic drug names.",
    },
  ] satisfies ScenarioRow[],
  snapshotSignals: [
    { label: "Cost for children", value: "No premium, no deductible", note: "Under-18s are insured free on a parent's policy — registration is still required." },
    { label: "First contact", value: "Huisarts (GP)", note: "Illness, prescriptions and referrals all start at the family practice." },
    { label: "Preventive care", value: "JGZ, free", note: "Consultation bureau to age 4, then school-based youth health teams." },
    { label: "Out of hours", value: "112 or huisartsenpost", note: "112 for life-threatening emergencies; the GP post for urgent evening and weekend care." },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    {
      title: "Health insurance",
      body: "Children under 18 are covered on a parent's Dutch basic insurance without a premium and without the annual deductible. You must still register them with an insurer — for newborns, normally within four months of birth, with cover backdated to birth.",
    },
    {
      title: "GP (huisarts)",
      body: "Your family doctor is the first contact for illness, injury, prescriptions and worries about development. The GP treats what can be treated in the practice and writes the referral letter that unlocks hospital and specialist care.",
    },
    {
      title: "Youth Healthcare (JGZ)",
      body: "Free preventive care from birth to 18: growth and development monitoring, vision and hearing screening, vaccinations and parenting guidance — via the consultatiebureau for under-fours and school health teams afterwards.",
    },
    {
      title: "Vaccinations",
      body: "The national immunisation programme (Rijksvaccinatieprogramma) is offered free through JGZ. It is voluntary, not mandatory. Children arriving from abroad can usually join a catch-up route after their existing record is assessed.",
    },
    {
      title: "Dental care",
      body: "Routine dental care for under-18s is covered by the basic insurance, typically including check-ups, fillings and extractions. Orthodontics usually needs supplementary cover. You choose and register with a practice yourself.",
    },
    {
      title: "Emergency care",
      body: "Call 112 for life-threatening emergencies. For urgent problems outside practice hours, call your regional huisartsenpost first — hospital emergency departments generally expect a referral rather than a walk-in.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Treat insurance, GP and JGZ as three separate registrations — completing one does not complete the others.",
    "Save your GP's daytime number and the regional huisartsenpost number in your phone before you need them.",
    "Keep one folder (paper or digital) with BSN, insurance policy number, vaccination record and any specialist letters.",
    "Ask every practice whether staff speak English — many do, but confirm rather than assume, especially outside the Randstad.",
  ],
  serviceComparison: {
    heading: "GP, JGZ and specialists — who does what",
    intro:
      "Newcomers most often lose time by contacting the wrong service. This table shows which service handles which question, and how you reach it.",
    rows: [
      {
        service: "Huisarts (GP)",
        purpose: "Illness, injury, prescriptions, ongoing conditions, first assessment of any worry",
        whenToUse: "Fever with warning signs, persistent symptoms, rashes, injuries, medication questions, referral requests",
        access: "Register once, then book by phone or online. Covered by insurance; no deductible for under-18s.",
      },
      {
        service: "JGZ / consultatiebureau",
        purpose: "Preventive care — growth, development, hearing, vision, vaccinations, parenting and sleep guidance",
        whenToUse: "Scheduled check moments, vaccination appointments, questions about development, feeding, sleep or behaviour",
        access: "Invited automatically after municipal registration; you can also contact them yourself. Free — funded by the municipality.",
      },
      {
        service: "Kinderarts (paediatrician)",
        purpose: "Hospital-based paediatric assessment, diagnostics and treatment of more complex conditions",
        whenToUse: "When the GP or JGZ doctor concludes that specialist assessment or hospital diagnostics are needed",
        access: "By referral (verwijzing) from the GP or youth healthcare doctor. Covered by basic insurance for under-18s.",
      },
      {
        service: "Huisartsenpost (out-of-hours GP post)",
        purpose: "Urgent GP-level care in evenings, at night, at weekends and on public holidays",
        whenToUse: "Urgent but not life-threatening problems that cannot wait for the next working day",
        access: "Call the regional number first — you will be triaged by phone and given an appointment or advice.",
      },
      {
        service: "Tandarts (dentist)",
        purpose: "Routine dental check-ups, fillings, extractions and preventive dental advice",
        whenToUse: "Twice-yearly check-ups, toothache, dental injuries, questions about brushing and fluoride",
        access: "You register with a practice yourself. Routine care for under-18s is covered by the basic insurance.",
      },
      {
        service: "Apotheek (pharmacy)",
        purpose: "Dispensing prescriptions, repeat medication, interaction checks and dosing advice",
        whenToUse: "Collecting prescribed medicines, repeat requests, questions about children's dosing",
        access: "Register with one pharmacy near home so your family's medication record stays in one place.",
      },
    ] satisfies ServiceRow[],
    note: "Contact details differ by municipality and region. If you are unsure which service to call, call your own GP practice during opening hours — the assistant will redirect you.",
  },
  howItWorks: {
    heading: "How Children's Healthcare Works",
    paragraphs: [
      "The Dutch system separates prevention from treatment. Preventive care for children is a public service delivered by Youth Healthcare (JGZ) organisations on behalf of your municipality: check-ups, screening and vaccinations, free of charge and invited automatically once your child is registered in the municipal records. Treatment of illness and injury sits in the insured system, where your GP is the first contact and the gatekeeper for everything beyond the practice.",
      "That gatekeeper role is the biggest structural difference for families used to booking paediatricians directly. In the Netherlands the huisarts assesses first, treats what can be treated in general practice, and refers to a hospital paediatrician (kinderarts) when specialist assessment or diagnostics are needed. It keeps costs and over-treatment down, and it means the quality of your GP relationship matters more than in many other systems.",
      "The sequence below is the order most families experience it, whether the journey starts with a birth in a Dutch hospital or with a plane landing at Schiphol. Registration comes first because a BSN unlocks insurance, insurance unlocks insured care, and municipal registration triggers the JGZ invitation.",
    ],
    timeline: [
      {
        phase: "1",
        title: "Birth or arrival",
        detail:
          "Babies born here are supported by a midwife (verloskundige) and maternity care (kraamzorg) in the first days at home. Families arriving from abroad start with their own existing records and prescriptions.",
      },
      {
        phase: "2",
        title: "Municipal registration and BSN",
        detail:
          "A birth is declared at the gemeente within a few working days; arriving families register the whole household. Each child receives a BSN (citizen service number) — the key to insurance, insured care and school enrolment.",
      },
      {
        phase: "3",
        title: "Health insurance",
        detail:
          "Add the child to a Dutch basic health insurance policy. For a newborn this is normally done within four months of birth, with cover backdated to the birth date. Newcomers arrange insurance shortly after registration; verify the deadline for your situation.",
      },
      {
        phase: "4",
        title: "Newborn screening",
        detail:
          "In the first week after a Dutch birth, families are offered the newborn blood spot screening (hielprik) and a hearing screening, organised through the national programme and youth healthcare. Both are voluntary and free.",
      },
      {
        phase: "5",
        title: "Consultation bureau invitation",
        detail:
          "Once registered, you are invited to the local consultatiebureau. Appointments are frequent in the first year and then spread out — height, weight, development, feeding, sleep and any questions you bring.",
      },
      {
        phase: "6",
        title: "Vaccinations",
        detail:
          "The national immunisation programme is offered free through JGZ, starting in the first months. Participation is voluntary. Children arriving from abroad have their existing record assessed for a catch-up plan.",
      },
      {
        phase: "7",
        title: "GP registration",
        detail:
          "Register the family with a huisarts practice near home. This is your first contact for illness, injury, prescriptions and referrals — and for a child, ideally arranged before the first bout of fever rather than during it.",
      },
      {
        phase: "8",
        title: "Specialists and hospitals",
        detail:
          "When needed, the GP (or youth healthcare doctor) writes a referral to a hospital paediatrician or another specialist. The referral letter is what the hospital uses to book and to bill your insurer.",
      },
      {
        phase: "9",
        title: "Preventive care in the school years",
        detail:
          "From age four, preventive care shifts to school-based youth healthcare: screening moments at set ages, vaccinations, and access to a youth health nurse or doctor for growth, wellbeing and school-related concerns.",
      },
    ] satisfies TimelineStep[],
    principles: [
      "Prevention and treatment are separate services — JGZ checks development, the GP treats illness.",
      "The GP is the referral gate: specialist care normally requires a referral letter (verwijzing).",
      "Registration order matters: BSN, then insurance, then GP and JGZ.",
      "Under-18s pay no premium and no deductible, so cost is rarely the barrier — access and language usually are.",
      "Care is documented digitally, but you should still keep your own copies of records and vaccination history.",
      "Nothing is mandatory: screening and vaccinations are offered, explained and then chosen by parents.",
    ],
    gatekeeperNote:
      "If you believe your child needs specialist assessment, say so explicitly at the GP appointment and ask what would need to be true for a referral. Asking directly is normal and expected here — it is not considered rude.",
  },
  healthInsurance: {
    heading: "Health Insurance for Children",
    paragraphs: [
      "Every resident of the Netherlands needs Dutch basic health insurance (basisverzekering), but children are treated differently from adults: under-18s are insured without paying a premium and are exempt from the annual deductible (eigen risico). What parents pay is their own premium and their own deductible — not a second bill for the children.",
      "That does not make cover automatic. Children must be actively registered with an insurer, normally on a parent's policy. For a baby born in the Netherlands, registration is usually required within four months of birth, and cover is backdated to the date of birth. Families arriving from abroad take out insurance shortly after becoming insurable; the exact deadline depends on your situation, so confirm it with the insurer or Government.nl rather than guessing.",
      "The basic package is defined nationally, so the covered care is the same at every insurer: GP care, hospital and specialist treatment, prescribed medicines, and routine dental care for under-18s. What differs between insurers is service, the network of contracted providers, and the supplementary packages (aanvullende verzekering) that cover extras such as orthodontics. If you use a provider your insurer has no contract with, reimbursement can be partial — worth checking before a first specialist appointment.",
    ],
    coverageRows: [
      {
        careType: "GP care (huisarts)",
        coverage: "Covered by the basic insurance; no deductible for under-18s",
        note: "Includes consultations, phone consults and out-of-hours GP post care.",
      },
      {
        careType: "Hospital and paediatric specialist care",
        coverage: "Covered by the basic insurance with a valid referral",
        note: "Check whether the hospital is contracted by your insurer to avoid partial reimbursement.",
      },
      {
        careType: "Prescribed medicines",
        coverage: "Largely covered under the national medicine reimbursement system",
        note: "Some medicines carry a personal contribution; the pharmacy can tell you before dispensing.",
      },
      {
        careType: "Routine dental care under 18",
        coverage: "Covered by the basic insurance",
        note: "Typically check-ups, fillings and extractions — confirm specifics with your insurer.",
      },
      {
        careType: "Orthodontics (braces)",
        coverage: "Usually not in the basic package for children",
        note: "Often requires supplementary dental cover; compare limits and waiting conditions before you need it.",
      },
      {
        careType: "Speech therapy and physiotherapy",
        coverage: "Cover for children is broader than for adults, within conditions",
        note: "Usually needs a referral or indication; verify the number of covered sessions with your insurer.",
      },
      {
        careType: "Youth healthcare (JGZ) checks and vaccinations",
        coverage: "Not billed to your insurance — funded publicly",
        note: "Consultation bureau visits, screening and national programme vaccinations are free.",
      },
      {
        careType: "Care received abroad",
        coverage: "Limited and conditional",
        note: "Ask your insurer about holiday cover and whether you need extra travel health cover.",
      },
    ] satisfies CoverageRow[],
    points: [
      "Children under 18: no premium, no eigen risico — but registration with an insurer is still mandatory.",
      "Newborns are normally registered within four months of birth, with cover backdated to the birth date.",
      "The basic package content is identical at every insurer; service, networks and extras are what differ.",
      "Supplementary insurance is where orthodontics and some paramedical extras usually sit.",
      "Contracted versus non-contracted providers affects how much your insurer reimburses.",
      "Switching insurers is normally done at year end — check current switching rules before you commit.",
    ],
    setupChecklist: [
      "Confirm each child's BSN before contacting the insurer",
      "Add every child to the policy and request written confirmation of the start date",
      "Store the policy number and insurer contact details with your GP and dentist registrations",
      "Check whether your preferred hospital and dentist are contracted by your insurer",
      "Decide whether supplementary dental or orthodontic cover fits your family's likely needs",
      "Review the policy once a year — family needs and package terms both change",
    ],
    crossLink: {
      label: "Health Insurance in the Netherlands",
      href: HEALTH_INSURANCE_PATH,
      description:
        "The full guide to Dutch health insurance — basic package, deductible, choosing an insurer, supplementary cover and switching. Start here if your family policy is not yet arranged.",
      status: "live" as const,
    },
    disclaimer:
      "Insurance rules, package content and deadlines change. Verify your own situation directly with your insurer or on Government.nl before making decisions.",
  },
  gp: {
    heading: "The Family GP (Huisarts)",
    paragraphs: [
      "The huisarts is the centre of gravity in Dutch healthcare. For children, the practice handles fevers, infections, rashes, injuries, growth concerns, medication and chronic condition follow-up — and decides when hospital assessment is needed. Practices are local by design: most only accept patients living within their catchment area, so the search starts with your postcode.",
      "Appointments are usually ten minutes and are triaged by a trained practice assistant (doktersassistent) who asks what the problem is. That question is not gatekeeping for its own sake — it decides whether you get a same-day slot, a phone consult, an e-consult or advice to wait and watch. Being specific and factual helps: say the age, the symptom, how long it has lasted, what you have already tried and what specifically worries you.",
      "Register the whole family at once, ideally in your first weeks. Practices in popular city neighbourhoods sometimes close their lists, and being registered somewhere is far better than searching while a child is ill. If your first choice is full, ask which nearby practices are accepting patients — assistants usually know.",
    ],
    howToSteps: [
      {
        name: "Confirm BSN and insurance",
        text: "Make sure each child has a BSN from municipal registration and is registered on a Dutch health insurance policy. Practices ask for both when you register.",
      },
      {
        name: "Find practices accepting new patients",
        text: "Search for 'huisarts' with your postcode and check each practice website for an aanmelden (registration) page. Most practices serve a defined catchment area around the practice.",
      },
      {
        name: "Check practical fit",
        text: "Compare distance from home, opening hours, whether staff speak English, how appointments are booked, and whether the practice has experience with young children and any condition your family manages.",
      },
      {
        name: "Submit the registration form",
        text: "Complete the practice registration form for every family member, including BSN, insurance details, date of birth and a copy of ID or residence documents where requested.",
      },
      {
        name: "Arrange transfer of medical history",
        text: "Ask your previous doctor for a medical summary and vaccination record, in English or Dutch, and pass it to the new practice so allergies, conditions and past treatment are on file.",
      },
      {
        name: "Book an introduction appointment",
        text: "Many practices offer a short intake or introduction consult (kennismakingsgesprek). Use it to discuss chronic conditions, allergies, medication, vaccination status and how to reach the practice urgently.",
      },
      {
        name: "Save the numbers you will need in a hurry",
        text: "Store the practice daytime number, the practice's own emergency line if it has one, the regional out-of-hours GP post (huisartsenpost) number and 112 in every parent's phone.",
      },
    ] satisfies HowToStep[],
    whatGpDoes: [
      "Assess and treat childhood illness, infections, injuries and skin problems in the practice.",
      "Prescribe medication and manage repeat prescriptions for ongoing conditions.",
      "Refer to a paediatrician, other specialist or diagnostic tests when needed.",
      "Follow up chronic conditions such as asthma or eczema together with practice nurses.",
      "Discuss development, behaviour and wellbeing concerns and refer into youth support where appropriate.",
      "Coordinate with hospital specialists, youth healthcare and the pharmacy around your child's record.",
    ],
    appointmentTips: [
      "Call early in the morning for same-day slots — many practices release urgent appointments then.",
      "Prepare three sentences: what is happening, since when, and what worries you most.",
      "Ask for a double appointment if you have more than one question or more than one child.",
      "Ask what warning signs should make you come back — and write the answer down.",
      "Use e-consults or the patient portal for non-urgent questions and repeat prescriptions.",
      "If language is a barrier, ask whether the consultation can be in English or bring someone who can interpret.",
    ],
    callChecklist: [
      "Child's name, date of birth and BSN",
      "Temperature and how it has changed over time",
      "How long symptoms have lasted and whether they are getting worse",
      "Eating, drinking, urinating and sleeping compared with normal",
      "Any medication given, including when and how much",
      "Known conditions, allergies and recent travel",
    ],
    scenarios: [
      {
        situation: "Practice list is closed in your neighbourhood",
        approach: "Ask the practice which nearby practices are still open, and check whether a new practice is starting in the area.",
        firstStep: "Register anywhere reasonable that accepts you now; you can switch later once your first choice reopens.",
      },
      {
        situation: "You want a paediatrician, the GP wants to wait",
        approach: "Ask what the GP is watching for, what would change the plan, and agree a review moment in writing.",
        firstStep: "Book the follow-up before you leave and ask directly what the threshold for referral would be.",
      },
      {
        situation: "Your child has an ongoing condition from abroad",
        approach: "Continuity depends on documents — Dutch prescriptions and referrals are written from the GP's own file.",
        firstStep: "Send the medical summary and medication list to the practice before the intake appointment.",
      },
      {
        situation: "Consultations feel too short",
        approach: "Structure beats speed: one clear main question, plus a written list of the rest.",
        firstStep: "Request a longer appointment when booking and say it concerns more than one issue.",
      },
    ] satisfies ScenarioRow[],
  },
  jgz: {
    heading: "Youth Healthcare (JGZ) Explained",
    paragraphs: [
      "Jeugdgezondheidszorg — youth healthcare, usually shortened to JGZ — is one of the most valuable and most misunderstood parts of Dutch family life. It is a free public service, commissioned by your municipality and delivered by local organisations (often a GGD or a regional youth healthcare provider), that follows every child from birth to around age 18 with preventive check-ups, screening, vaccinations and parenting support.",
      "JGZ is not a doctor's practice and does not treat illness. Its job is to notice things early: growth that flattens, hearing or vision that needs checking, motor or speech development that lags, or a parent who is exhausted and needs practical help. Appointments are scheduled at fixed ages rather than when something is wrong, which is exactly why they catch what busy families miss.",
      "For under-fours, contact happens at the consultatiebureau (consultation bureau). From age four, the same service continues through school: youth health nurses and doctors run screening moments at set ages, deliver programme vaccinations, and are available for conversations about growth, wellbeing, sleep, bullying or school stress. Parents can also request contact themselves — you do not need to wait for an invitation or a referral.",
      "For expat families, JGZ is often the single best orientation resource in the first year. The staff know local childcare, schools, activities and support services, they are used to multilingual families, and the conversation is free and unhurried compared with a ten-minute GP slot. If you only accept one appointment in your first month, make it this one.",
    ],
    whatJgzDoes: [
      {
        title: "Growth and development monitoring",
        body: "Height, weight and head circumference are plotted on Dutch growth curves, alongside motor, speech and social development milestones — trends over time matter more than single measurements.",
      },
      {
        title: "Vision and hearing screening",
        body: "Screening at set ages picks up hearing loss and vision problems early, including a newborn hearing screening and later school-age eye checks, with referral to a specialist when something needs follow-up.",
      },
      {
        title: "Vaccinations",
        body: "The national immunisation programme is delivered through JGZ, free of charge, with invitations sent at the relevant ages and a record kept of what your child has received.",
      },
      {
        title: "Parenting and everyday guidance",
        body: "Feeding, sleep, screen time, toilet training, tantrums, sibling rivalry and adolescence — JGZ nurses give practical, non-judgemental advice and know when something needs more than advice.",
      },
      {
        title: "Wellbeing and school support",
        body: "From primary school onwards, youth health teams work with schools on wellbeing, absence, bullying and stress, and can involve the school support team or municipal youth services.",
      },
      {
        title: "Signposting to further support",
        body: "JGZ is a hub: they refer to speech therapy, dietetics, physiotherapy, youth mental health, family support and municipal services, and can write referrals in their own right.",
      },
    ] satisfies TipCard[],
    ageMoments: [
      {
        moment: "First weeks after birth",
        focus: "Home visit or first bureau contact — feeding, weight, newborn screening follow-up, parental wellbeing",
        note: "Ask everything at this stage; nothing is considered a silly question.",
      },
      {
        moment: "First year",
        focus: "Frequent check-ups combining growth, development and the infant vaccination series",
        note: "Appointment frequency is highest here; bring your questions written down.",
      },
      {
        moment: "Toddler and preschool years",
        focus: "Development, speech, motor skills, vision, behaviour and boosters",
        note: "A good moment to discuss daycare, language exposure and bilingual development.",
      },
      {
        moment: "Around school entry",
        focus: "Handover to school-based youth healthcare; screening of growth, vision, hearing and school readiness",
        note: "You will meet a new team — check how to contact them directly.",
      },
      {
        moment: "Primary school years",
        focus: "Screening moments at set ages, programme vaccinations and wellbeing conversations",
        note: "Consent forms come via school; read them rather than signing on autopilot.",
      },
      {
        moment: "Adolescence",
        focus: "Growth, mental wellbeing, lifestyle, adolescent vaccinations and confidential conversations",
        note: "Teenagers can speak to the youth health nurse without a parent present.",
      },
    ] satisfies AgeMomentRow[],
    jgzVsGp: [
      "JGZ = prevention and monitoring; GP = illness, injury and treatment.",
      "JGZ appointments are invited at fixed ages; GP appointments are booked when something is wrong.",
      "JGZ is free and publicly funded; GP care runs through your health insurance (with no deductible for children).",
      "Both can refer to specialists — a youth healthcare doctor can refer as well as a GP.",
      "Keep both active: skipping JGZ means missing screening, and having no GP means no route to treatment.",
      "Records are kept separately, so tell each service what the other has found or advised.",
    ],
    preparationTips: [
      "Bring the vaccination record and any growth charts from your previous country.",
      "Write down your top three questions before you go — appointments are focused.",
      "Note what a normal day looks like: sleeping, eating, mood, screen time and activity.",
      "Say early if you would prefer the conversation in English, so the team can plan accordingly.",
      "Ask how to contact the team between appointments — most have a phone hour or e-mail route.",
    ],
    contactNote:
      "JGZ organisation names and contact routes differ by municipality — search for 'jeugdgezondheidszorg' or 'consultatiebureau' with your city name, or ask your municipality. You can request contact yourself at any time; you do not need a referral.",
  },
  consultationBureaus: {
    heading: "Consultation Bureaus (Consultatiebureau)",
    paragraphs: [
      "The consultatiebureau is where JGZ meets families with children under four. It is usually a small, calm local centre — a weighing room, a measuring board, growth charts on the wall — and it is where most Dutch parents get their questions answered in the first years. Visits are free, invited automatically after municipal registration, and follow a schedule that is dense in the first year and then spreads out.",
      "A typical appointment takes twenty to thirty minutes. Your child is weighed and measured, development is checked against milestones, and the nurse or doctor asks about feeding, sleep, mood and family life. Vaccinations from the national programme are often given at the same visit. The tone is advisory: you will be given information and options rather than instructions, which some newcomers initially read as vagueness and later come to appreciate.",
      "The team is multidisciplinary. A doktersassistent handles measurements and administration, a jeugdverpleegkundige (youth health nurse) does most consultations and advice, and a jeugdarts (youth healthcare doctor) sees children at key moments and where something needs medical judgement. Many bureaus also have access to a pedagogical adviser for behaviour and parenting questions.",
    ],
    whatHappens: [
      "Height, weight and (in babies) head circumference measured and plotted on Dutch growth curves.",
      "Development checked against milestones — motor skills, speech, hearing, vision and social interaction.",
      "Vaccinations from the national programme offered at the relevant ages.",
      "Conversation about feeding, sleep, safety at home, play and screen time.",
      "Space for your questions and concerns — including about your own wellbeing as a parent.",
      "Referral or extra appointments arranged if anything needs closer attention.",
    ],
    teamRoles: [
      {
        title: "Jeugdverpleegkundige (youth health nurse)",
        body: "Your main contact for most visits — measurements, development, feeding, sleep and everyday parenting questions, plus home visits in the newborn period in many regions.",
      },
      {
        title: "Jeugdarts (youth healthcare doctor)",
        body: "Sees children at key check moments and whenever medical assessment is needed. Can refer to specialists directly and liaises with your GP.",
      },
      {
        title: "Doktersassistent (medical assistant)",
        body: "Handles weighing, measuring, vaccination administration and appointment logistics — and is usually the person who answers the phone.",
      },
      {
        title: "Pedagogisch adviseur (parenting adviser)",
        body: "Available in many regions for behaviour, routine and parenting support — often through the family centre (Centrum voor Jeugd en Gezin) linked to the bureau.",
      },
    ] satisfies TipCard[],
    appointmentPrep: [
      "Bring your child's vaccination record and any records from abroad",
      "Bring the growth booklet or app details if you already have one",
      "Note current feeding pattern, sleep pattern and any medication",
      "Write down your questions — including ones that feel too small to mention",
      "Dress your child in easy-to-remove clothing for weighing and measuring",
      "Allow extra time for the first visit, which includes intake administration",
    ],
    languageTips: [
      "Ask when booking whether the appointment can be held in English — many teams can accommodate this.",
      "Bring a partner, friend or interpreter if you would rather not rely on your Dutch for a health conversation.",
      "Ask for written summaries or leaflets — printed guidance is easier to translate at home than spoken advice.",
      "Growth charts and development milestones are visual; ask to see them and take a photo for your records.",
    ],
    missedAppointmentNote:
      "If you miss or cannot attend an appointment, call to rebook rather than waiting for the next invitation — the schedule is built around specific ages, and catching up early keeps screening on track.",
  },
  vaccinations: {
    heading: "Vaccinations & the National Immunisation Programme",
    paragraphs: [
      "The Netherlands runs a national immunisation programme (Rijksvaccinatieprogramma, RVP), coordinated by RIVM and delivered free of charge through JGZ. Children are invited at set ages, parents are given information about each vaccination, and participation is voluntary — there is no legal obligation to vaccinate. Uptake is high, and the programme is one of the reasons JGZ contact moments are scheduled the way they are.",
      "Vaccinations are grouped into broad phases: a series in the first year of life, boosters in the toddler and early school years, and further vaccinations offered in the school-age and adolescent years. Because the exact composition and timing of the programme is reviewed and updated periodically, this guide deliberately does not reproduce a detailed schedule — check the current one on the RIVM website or with your JGZ team.",
      "Children arriving from abroad are not expected to start over. Bring the original vaccination record, ideally with an English or Dutch translation, and JGZ will assess what your child has already received and propose a catch-up plan (inhaalprogramma) to align with the Dutch programme. If records are missing or unclear, the team will discuss options with you rather than guessing.",
      "Daycare centres, schools and some employers may ask about vaccination status for information or outbreak management. That is not the same as a requirement, and policies differ by provider — ask each organisation directly what they ask for and why.",
    ],
    phases: [
      {
        phase: "First year of life",
        typicallyOffered: "The infant series, given across several appointments alongside growth and development checks",
        parentAction: "Attend the invited bureau appointments; ask for the information leaflet for each vaccination.",
      },
      {
        phase: "Toddler years",
        typicallyOffered: "Booster doses completing the early childhood series",
        parentAction: "Keep the record updated and note the dates yourself, not only in the JGZ system.",
      },
      {
        phase: "Primary school years",
        typicallyOffered: "Booster vaccinations offered through school-based youth healthcare",
        parentAction: "Watch for consent forms sent via school and return them on time.",
      },
      {
        phase: "Adolescence",
        typicallyOffered: "Additional vaccinations offered in the pre-teen and teenage years",
        parentAction: "Discuss the invitation with your child; teenagers are involved in the decision.",
      },
      {
        phase: "Arriving from abroad",
        typicallyOffered: "An individual catch-up plan after assessment of existing records",
        parentAction: "Bring the original record plus a translation, and book a JGZ assessment appointment early.",
      },
    ] satisfies VaccinationPhaseRow[],
    keyPoints: [
      "Free of charge and delivered through JGZ — not billed to your health insurance.",
      "Voluntary: you will be informed and asked, not compelled.",
      "Invitations arrive automatically once your child is registered with the municipality.",
      "Records from other countries are assessed rather than ignored — bring the original document.",
      "Missed doses can usually be caught up; call JGZ rather than waiting for the next invitation.",
      "The programme is reviewed periodically — always verify the current schedule on RIVM before planning.",
    ],
    recordTips: [
      "Photograph your child's vaccination record and store it in a shared family folder.",
      "Ask JGZ for a printed overview of what has been given in the Netherlands before you move abroad again.",
      "Keep translations of foreign records together with the originals — schools and JGZ may both ask.",
      "Note the brand and date for any vaccination given privately or outside the national programme.",
    ],
    verifyNote:
      "Vaccination schedules change. This guide describes the structure only — for which vaccinations are currently offered at which age, use the RIVM national immunisation programme pages or ask your JGZ team.",
  },
  hospitalsSpecialists: {
    heading: "Hospitals & Paediatric Specialists",
    paragraphs: [
      "Paediatric specialist care in the Netherlands is hospital-based and referral-led. When your GP or youth healthcare doctor concludes that specialist assessment is needed, they write a referral (verwijzing) to a kinderarts — a hospital paediatrician — or to another relevant specialist. The referral letter is both a clinical handover and the administrative key your insurer needs.",
      "Most children are seen at a regional hospital paediatric outpatient clinic, which handles the large majority of paediatric problems. More complex conditions are referred onwards to a university medical centre (UMC) with a dedicated children's hospital, or to a national specialised centre for a specific field. This tiering is deliberate: care stays close to home where possible and concentrates where specialised expertise matters.",
      "Waiting times vary considerably by specialty, region and urgency. If you are worried about a wait, call the hospital's planning desk and ask about earlier slots or another location of the same hospital group; you can also ask your GP whether a different hospital has shorter waits. Second opinions are a normal part of the system — ask your GP how to arrange one rather than assuming it will cause offence.",
    ],
    settings: [
      {
        setting: "Regional hospital paediatric clinic",
        covers: "General paediatrics — infections, growth, asthma, allergies, abdominal complaints, follow-up after admission",
        howYouGetThere: "GP or youth healthcare referral; appointment booked by the hospital or by you with the referral number.",
      },
      {
        setting: "University medical centre (UMC) children's hospital",
        covers: "Complex, rare and multidisciplinary paediatric care, including specialised diagnostics and surgery",
        howYouGetThere: "Onward referral from a regional hospital paediatrician, or directly for specific conditions.",
      },
      {
        setting: "Specialised national centre",
        covers: "Concentrated expertise for specific fields such as paediatric oncology",
        howYouGetThere: "Referral from a treating specialist as part of a national care network.",
      },
      {
        setting: "Day treatment and diagnostics",
        covers: "Blood tests, imaging, minor procedures and day-case treatment without overnight admission",
        howYouGetThere: "Requested by the referring doctor or specialist; often bookable at several locations.",
      },
      {
        setting: "Hospital emergency department (SEH)",
        covers: "Acute assessment of serious injury and illness",
        howYouGetThere: "Via 112, ambulance, or referral from your GP or the out-of-hours GP post — walk-ins are generally redirected.",
      },
    ] satisfies HospitalRow[],
    referralPoints: [
      "Ask for a copy of the referral letter and keep it with your records.",
      "Check that the hospital is contracted by your insurer before the first appointment.",
      "Bring the referral, insurance details, BSN and a written list of medication to every appointment.",
      "Ask who coordinates care if more than one specialist is involved.",
      "Request that letters are copied to your GP — the GP remains the coordinating doctor.",
      "Ask whether follow-up can happen by video or phone to reduce school absence and travel.",
    ],
    visitPrep: [
      "Write your main question at the top of a single sheet and bring it with you",
      "Bring a timeline of symptoms with dates rather than relying on memory",
      "Bring current medication packaging or a printed medication list",
      "Bring earlier test results, imaging reports and letters from abroad",
      "Bring something to occupy your child during waiting time",
      "Ask at the end: what happens next, who calls whom, and by when",
    ],
    waitingTimeNote:
      "If a wait feels clinically risky, say so — call the hospital and your GP and explain what has changed. Deterioration is a reason to be reassessed sooner, and both the GP practice and the hospital can escalate.",
  },
  emergencyCare: {
    heading: "Emergency & Out-of-Hours Care",
    paragraphs: [
      "Two numbers cover almost every urgent situation with a child. 112 is the national emergency number for life-threatening situations — it reaches ambulance, fire and police, and operators speak English. For urgent problems that are not life-threatening but cannot wait until the practice reopens, you call your regional huisartsenpost (out-of-hours GP post), where a triage nurse assesses by phone and either gives advice, books you in, or escalates.",
      "The important cultural difference: you do not usually walk into a hospital emergency department (spoedeisende hulp, SEH) with a child. Emergency departments in the Netherlands expect patients to arrive by ambulance or with a referral from a GP or the GP post, and self-referrals are commonly redirected to the huisartsenpost. Calling first is not a delay — it is the fastest route to the right place.",
      "Find your regional huisartsenpost number now, while nothing is wrong, and save it next to 112 in every parent's phone. Also note the address, because posts are often attached to a hospital but with a separate entrance, and the location may not be your nearest hospital.",
    ],
    urgencyRows: [
      {
        situation: "Child is unresponsive, not breathing normally, or turning blue",
        level: "emergency",
        action: "Call 112 immediately and follow the operator's instructions.",
      },
      {
        situation: "Severe allergic reaction — swelling of face or throat, breathing difficulty",
        level: "emergency",
        action: "Call 112 immediately; use prescribed emergency medication if you have it and have been trained.",
      },
      {
        situation: "A seizure that does not stop, or a first-ever seizure",
        level: "emergency",
        action: "Call 112 immediately.",
      },
      {
        situation: "Serious injury — heavy bleeding, suspected fracture with deformity, head injury with drowsiness or vomiting",
        level: "emergency",
        action: "Call 112 for severe injuries; for less severe injuries call the huisartsenpost for triage.",
      },
      {
        situation: "Suspected poisoning, or swallowing medication, batteries or chemicals",
        level: "emergency",
        action:
          "Call 112 immediately if the child is unwell; otherwise call the National Poison Information Centre (+31 30 274 88 88) and have the packaging to hand.",
      },
      {
        situation: "Baby under three months with a fever",
        level: "urgent",
        action: "Contact your GP the same day, or the huisartsenpost outside practice hours.",
      },
      {
        situation: "Fever with a stiff neck, a rash that does not fade, or unusual drowsiness",
        level: "urgent",
        action: "Contact the huisartsenpost immediately; call 112 if your child deteriorates quickly.",
      },
      {
        situation: "Repeated vomiting, refusing all fluids, or far fewer wet nappies than usual",
        level: "urgent",
        action: "Call your GP or the huisartsenpost for assessment the same day.",
      },
      {
        situation: "Worsening breathing, persistent wheeze, or asthma medication not helping as usual",
        level: "urgent",
        action: "Call the GP or huisartsenpost; call 112 if breathing becomes severely difficult.",
      },
      {
        situation: "Earache, sore throat, mild fever or a rash without warning signs",
        level: "routine",
        action: "Book a normal GP appointment on the next working day; use Thuisarts.nl for interim orientation.",
      },
      {
        situation: "Ongoing concerns about growth, sleep, feeding or development",
        level: "routine",
        action: "Contact your GP or your JGZ team for a scheduled appointment.",
      },
      {
        situation: "Immediate risk of self-harm or a mental health crisis",
        level: "emergency",
        action: "Call 112 if there is immediate danger; otherwise contact your GP or the huisartsenpost urgently.",
      },
    ] satisfies UrgencyRow[],
    numbers: [
      {
        title: "112 — emergency services",
        body: "Life-threatening situations only. Reaches ambulance, fire and police; operators speak English. Give the location first, then what has happened.",
      },
      {
        title: "Your own GP practice",
        body: "First contact during opening hours, including for urgent same-day problems. Save the number and the practice's urgent line if it has one.",
      },
      {
        title: "Huisartsenpost (out-of-hours GP post)",
        body: "Evenings, nights, weekends and public holidays. Call before travelling — you will be triaged by phone and given advice or an appointment.",
      },
      {
        title: "National Poison Information Centre",
        body: "Orientation number +31 30 274 88 88 when a child may have swallowed medication, batteries, chemicals or plants — and call 112 immediately if they are unwell.",
      },
      {
        title: "Dienstapotheek (out-of-hours pharmacy)",
        body: "For urgent prescriptions outside normal pharmacy hours. The GP post will tell you which one serves your area.",
      },
    ] satisfies TipCard[],
    quickTips: [
      "Stay calm and choose the door that matches severity — 112, huisartsenpost or next-day GP — rather than defaulting to the hospital.",
      "Have age, symptoms, duration, medication and allergies ready before you dial.",
      "Bring ID and insurance details when you travel to the huisartsenpost or GP.",
      "When in doubt, call — triage nurses would rather take an unnecessary call than a late one.",
    ],
    whatToSay: [
      "Where you are — full address and, if relevant, how to reach the door",
      "The child's age and what has happened or changed",
      "Breathing, consciousness and skin colour",
      "Temperature, and whether it is rising",
      "Known conditions, allergies and any medication given",
      "Your phone number, in case the call drops",
    ],
    preparednessChecklist: [
      "Save 112 and your regional huisartsenpost number in every parent's phone",
      "Write both numbers, plus your address, somewhere visible for babysitters",
      "Note the huisartsenpost address and entrance — it may not be your nearest hospital",
      "Keep BSN, insurance policy number and a medication list in a photo on your phone",
      "Keep children's paracetamol, a thermometer and basic first aid supplies at home",
      "Make sure childcare, school and babysitters know who to call and what conditions your child has",
    ],
    note:
      "This decision overview is orientation only and cannot replace assessment of your own child. If you are unsure, call — triage nurses and 112 operators would much rather take an unnecessary call than a late one.",
  },
  dentalCare: {
    heading: "Dental Care for Children",
    paragraphs: [
      "Routine dental care for children under 18 is covered by the Dutch basic health insurance — typically periodic check-ups, fillings, extractions and preventive advice. That makes dental care one of the least expensive parts of raising children here. What it does not do is arrange itself: there is no automatic school dentist, and no one will register your child for you.",
      "Register with a dental practice (tandartspraktijk) in your first weeks. In busy cities practices sometimes have closed lists or waiting periods, and being registered matters more than which practice you chose. Once registered, most practices invite children for check-ups roughly twice a year and will tell you when they want to see your child more or less often.",
      "Orthodontics — braces and related treatment — usually sits outside the basic package for children and is a common reason families take supplementary dental cover. If braces are likely in your family, compare supplementary packages early: waiting periods and annual limits mean cover taken after treatment is proposed is often too late to help.",
    ],
    coverageRows: [
      {
        careType: "Periodic check-up",
        coverage: "Covered for under-18s under the basic insurance",
        note: "Typically offered around twice a year; the practice advises the interval.",
      },
      {
        careType: "Fillings and extractions",
        coverage: "Generally covered for under-18s",
        note: "Confirm specifics with your insurer, especially for less common treatments.",
      },
      {
        careType: "Preventive treatment and advice",
        coverage: "Generally covered for under-18s",
        note: "Includes cleaning and instruction; sealants may have conditions.",
      },
      {
        careType: "Orthodontics (braces)",
        coverage: "Usually not covered for children by the basic insurance",
        note: "Commonly requires supplementary cover with annual limits and waiting periods.",
      },
      {
        careType: "Crowns and specialist restorative work",
        coverage: "Conditional — depends on the treatment and indication",
        note: "Ask for a written cost estimate (begroting) before treatment starts.",
      },
      {
        careType: "Urgent dental care outside opening hours",
        coverage: "Available through regional dental emergency services",
        note: "Your practice's answering message usually names the on-call service.",
      },
    ] satisfies CoverageRow[],
    registrationChecklist: [
      "Search for practices near home and ask whether they accept new child patients",
      "Register the whole family so appointments can be combined",
      "Provide BSN and insurance details at registration",
      "Ask how check-up invitations are sent — post, e-mail or app",
      "Ask what happens outside opening hours and note the emergency route",
      "Ask whether the practice works with a paediatric dentist for anxious or complex cases",
    ],
    habitTips: [
      "Ask your dentist for practical brushing and fluoride advice for your child's age rather than following general internet guidance.",
      "Book check-ups in school holidays or late-afternoon slots early — those fill first.",
      "Take a knocked-out or broken tooth seriously: call the practice immediately, as timing affects options.",
      "Tell the practice if your child is anxious; many practices adapt appointments for children who need more time.",
    ],
    note:
      "Dental coverage details and supplementary packages differ by insurer and change annually. Verify what your policy covers before treatment and ask the practice for a written estimate for anything beyond routine care.",
  },
  mentalHealth: {
    heading: "Mental Health & Wellbeing Support",
    paragraphs: [
      "Children's mental health support in the Netherlands is spread across several doors that all lead into the same system. Your GP can assess and refer to youth mental health care (jeugd-GGZ). Municipalities are responsible for youth support under the Youth Act (Jeugdwet) and run local teams, often through a family centre (Centrum voor Jeugd en Gezin) or neighbourhood team. Schools have internal support coordinators and work with youth health nurses and doctors from JGZ.",
      "For expat families, relocation itself is a common reason to seek support. Homesickness, language stress, losing a friendship group, or a parent's own adjustment strain all show up in children as changed sleep, appetite, behaviour or school performance. Most of it is normal adjustment that settles within six to twelve months — but it is not something you have to manage alone or wait out silently.",
      "Practically, the fastest routes are usually your GP (for referral into specialist care) and the school or JGZ (for support around school, wellbeing and family life). Waiting times for specialist youth mental health care can be long in some regions, so ask what interim support is available while you wait, and ask the municipality what it offers directly.",
    ],
    routes: [
      {
        title: "GP (huisarts)",
        body: "Assesses what is happening, offers first-line support in the practice — often with a practice-based mental health worker — and refers into youth mental health care when specialist assessment is needed.",
      },
      {
        title: "School support team",
        body: "Internal support coordinators, mentors and the school social worker can adjust school expectations, arrange in-school support and involve external help.",
      },
      {
        title: "JGZ youth health nurse or doctor",
        body: "Available from primary school onwards for wellbeing conversations, and can refer independently. Teenagers can talk to them confidentially without a parent present.",
      },
      {
        title: "Municipal youth team",
        body: "Your municipality is responsible for youth support. Local teams and family centres offer parenting support, family coaching and access to funded youth care.",
      },
      {
        title: "Confidential helplines",
        body: "De Kindertelefoon (0800 0432) is a free, anonymous helpline where children can talk about anything. For suicidal thoughts, 113 Suicide Prevention is reachable on 0800 0113.",
      },
      {
        title: "Crisis support",
        body: "If there is immediate danger to your child, call 112. Outside practice hours, the huisartsenpost can arrange urgent assessment and involve crisis services.",
      },
    ] satisfies TipCard[],
    worthDiscussing: [
      "Sleep, appetite or mood that has changed markedly and stayed changed for weeks.",
      "Withdrawal from friends, activities or family life that used to matter to your child.",
      "School refusal, escalating absence or a sudden drop in school functioning.",
      "Persistent physical complaints such as stomach aches or headaches without a clear cause.",
      "Anxiety that limits normal activities — sleeping alone, going to school, seeing friends.",
      "Anything about self-harm or not wanting to live — always discuss this with a professional promptly.",
    ],
    relocationTips: [
      "Name the change out loud: children cope better when the move is discussed openly rather than treated as settled.",
      "Protect one continuity anchor — a sport, an instrument, a weekly call with old friends.",
      "Expect a language-fatigue phase; a child working in a second language all day is genuinely tired, not lazy.",
      "Tell the school what your child has moved through — teachers can only adjust for what they know.",
      "Watch your own load too: parental stress and child stress track each other closely in relocation years.",
    ],
    note:
      "This section is orientation, not a diagnostic tool. Any concern about your child's mental health belongs with a professional — start with your GP, the school or your JGZ team, and call 112 if there is immediate danger.",
  },
  childhoodIllnesses: {
    heading: "Everyday Illness — How the Dutch System Responds",
    paragraphs: [
      "Dutch general practice is deliberately conservative. For common childhood illness the standard approach is assessment, an explanation, clear instructions about what to watch for, and a review moment if things do not improve — rather than immediate medication. Antibiotics are prescribed when there is a clear indication, not as reassurance, and 'uitzieken' (letting an illness run its course, with monitoring) is a normal and evidence-based part of the conversation.",
      "That approach surprises many newcomers, and the mismatch is usually about communication rather than clinical care. The fix is to ask two specific questions at every appointment: what should make me come back, and by when should I expect improvement? A good GP answers both readily, and the answers give you a concrete plan instead of a vague wait.",
      "For reliable, non-commercial self-help information, Dutch households use Thuisarts.nl, written by the professional body for GPs. It explains symptoms, what usually happens and when to contact a doctor. It is mostly in Dutch, but browser translation handles it well and it is far more trustworthy than general internet searching.",
      "This guide deliberately gives no treatment guidance and no symptom-by-symptom instructions. What follows is about how the system responds and how to work with it — the clinical judgement belongs to your GP, the huisartsenpost or 112.",
    ],
    responseRows: [
      {
        whatYouNotice: "Fever without warning signs in an otherwise well child",
        firstContact: "Thuisarts.nl for orientation, then your GP if it persists or you are worried",
        note: "Age matters: babies under three months with fever are assessed the same day.",
      },
      {
        whatYouNotice: "Cough, cold or sore throat",
        firstContact: "Normally managed at home with monitoring; GP if symptoms worsen or persist",
        note: "Expect an explanation and warning signs rather than automatic medication.",
      },
      {
        whatYouNotice: "Vomiting or diarrhoea",
        firstContact: "GP or huisartsenpost if fluid intake drops, or if there are signs of dehydration",
        note: "Ask specifically about hydration signs to watch for at home.",
      },
      {
        whatYouNotice: "Rash",
        firstContact: "GP appointment; urgent contact if the rash does not fade under pressure or comes with fever and drowsiness",
        note: "Photograph the rash when you see it — rashes change fast.",
      },
      {
        whatYouNotice: "Earache",
        firstContact: "GP appointment; urgent contact if severe pain, high fever or discharge",
        note: "Watchful waiting is common for ear infections in older children.",
      },
      {
        whatYouNotice: "Recurring or unexplained complaints",
        firstContact: "GP appointment with a written symptom timeline; JGZ if it concerns growth or development",
        note: "Patterns over weeks are more useful to a doctor than single episodes.",
      },
      {
        whatYouNotice: "Infectious illness affecting daycare or school",
        firstContact: "Inform the childcare provider or school; they follow national public health guidance",
        note: "Exclusion rules come from public health guidance, not from the provider's preference.",
      },
    ] satisfies IllnessRow[],
    culturalPoints: [
      "Assessment first, medication only where indicated — this is policy, not dismissal.",
      "Paracetamol is the standard first-line comfort measure for fever and pain in children.",
      "You will often be given warning signs and a review moment instead of a prescription.",
      "Repeat contact is welcome: if your child gets worse, calling back is expected, not annoying.",
      "Daycare and school follow national infection guidance on when a child must stay home.",
      "Thuisarts.nl is the standard reliable self-help source used by Dutch GPs themselves.",
    ],
    advocacyTips: [
      "Ask directly: what should make me come back, and when should I see improvement?",
      "Say clearly what worries you most — the worry itself is clinically useful information.",
      "Keep a short symptom log with dates, temperatures and how much your child drinks.",
      "Ask for a reassessment if the picture changes; a new symptom justifies a new appointment.",
      "If you remain concerned after reassessment, ask about a referral or a second opinion.",
    ],
    note:
      "No treatment guidance is given here on purpose. For symptom-specific information use Thuisarts.nl, and for your own child contact your GP, the huisartsenpost or 112 in an emergency.",
  },
  medications: {
    heading: "Medicines & Pharmacies (Apotheek)",
    paragraphs: [
      "Prescription medicines come from a pharmacy (apotheek), not from your GP practice. Prescriptions are sent digitally, so once you register with one pharmacy near home the process is quick: the GP prescribes, the pharmacy prepares, you collect. Registering with a single pharmacy also means your family's medication record sits in one place, which is how interaction and dosing checks work.",
      "A drogist (drugstore such as Etos or Kruidvat) sells over-the-counter products including children's paracetamol, saline drops and plasters. An apotheek dispenses prescriptions and gives medication advice, including on dosing for children by weight. For urgent prescriptions outside opening hours there is a regional out-of-hours pharmacy (dienstapotheek) — the huisartsenpost will tell you which one serves your area.",
      "Families arriving from abroad should plan medication continuity carefully. A Dutch GP prescribes from their own file, so bring a medication list with generic names (not only brand names), current dosages and the reason for use. Some brands and formulations available elsewhere are not marketed here, so an equivalent may be prescribed instead. Bring enough supply to bridge the first weeks while registration and appointments are arranged.",
    ],
    points: [
      "Register with one pharmacy near home so prescriptions, repeats and interaction checks stay in one record.",
      "Prescriptions are sent digitally by your GP — usually there is no paper slip to carry.",
      "Children under 18 have no deductible, but some medicines carry a personal contribution; the pharmacy can check before dispensing.",
      "Over-the-counter basics come from a drogist; prescription medicines and dosing advice come from the apotheek.",
      "Ask the pharmacy for dosing by weight and for a liquid formulation if your child cannot swallow tablets.",
      "Out of hours, urgent prescriptions go through the regional dienstapotheek.",
    ],
    continuityChecklist: [
      "Bring a medication list with generic names, doses and indications",
      "Bring enough supply to cover the first weeks after arrival",
      "Bring the prescribing specialist's letter for any ongoing treatment",
      "Ask your new GP early about repeat prescriptions and who reviews them",
      "Check with the pharmacy whether an equivalent product replaces a familiar brand",
      "Keep emergency medication (such as an adrenaline auto-injector or inhaler) accessible and in date",
    ],
    practicalTips: [
      "Request repeat prescriptions a week before you run out — approval and preparation take time.",
      "Ask the pharmacy to note allergies and intolerances in your child's record.",
      "Tell childcare and school what medication your child needs and get their policy in writing.",
      "Before holidays, ask the pharmacy about travel supplies and documentation for medicines carried abroad.",
      "Keep medicines out of reach and stored as instructed — and call 112 immediately if a child swallows medication.",
    ],
    note:
      "Never adjust a prescribed dose based on general information. Dosing for children depends on weight and age — ask your pharmacy or GP.",
  },
  movingChecklist: {
    heading: "Moving to the Netherlands With Children",
    paragraphs: [
      "The healthcare part of a family relocation is mostly paperwork done in the right order — and the paperwork is much easier to gather before you leave than after. Records travel badly: previous clinics may be slow to respond, may not send documents internationally, and may charge for copies. Collect and translate what you need while you are still a local patient.",
      "After arrival, the sequence is municipal registration (which gives each child a BSN and triggers the JGZ invitation), insurance, then the practical registrations: GP, dentist and pharmacy. Most families complete this within a month. The first JGZ appointment is worth prioritising — it also gives you a local guide to childcare, schools and support services.",
    ],
    beforeMove: [
      "Request a medical summary for each child, in English where possible",
      "Get the complete vaccination record, with translation if it is not in English or Dutch",
      "Collect growth charts and any developmental assessments",
      "Get prescriptions listed with generic drug names, doses and indications",
      "Collect allergy documentation and emergency medication plans",
      "Collect dental records, recent X-rays and any orthodontic treatment plan",
      "Note glasses or contact lens prescriptions and recent eye test results",
      "Bring enough medication supply to bridge the first weeks",
      "Ask specialists for a written handover letter for any ongoing condition",
    ],
    firstWeek: [
      "Register the family at the gemeente and confirm each child's BSN",
      "Arrange Dutch health insurance and add every child to the policy",
      "Save 112 and your regional huisartsenpost number in every parent's phone",
      "Identify GP practices near home that are accepting patients",
      "Locate your nearest pharmacy and note its opening hours",
    ],
    firstMonth: [
      "Complete GP registration for the whole family and share medical summaries",
      "Contact the local JGZ organisation and book the first appointment",
      "Have vaccination records assessed and agree a catch-up plan if needed",
      "Register with a dental practice and book first check-ups",
      "Register with a pharmacy and transfer repeat prescriptions",
      "Inform childcare or school about allergies, conditions and medication",
      "Arrange onward referrals for any specialist care that was ongoing abroad",
    ],
    scenarios: [
      {
        situation: "Newborn arriving or born shortly after the move",
        approach: "Insurance registration and JGZ contact are the priorities; the bureau schedule is dense in the first year.",
        firstStep: "Declare the birth or register the baby, then add them to the insurance policy immediately.",
      },
      {
        situation: "Child with asthma, allergies or another chronic condition",
        approach: "Continuity needs a written handover plus a GP who can re-prescribe and refer quickly.",
        firstStep: "Book a GP intake appointment specifically to hand over the file, before medication runs low.",
      },
      {
        situation: "Teenager arriving mid-school-year",
        approach: "School-based youth healthcare replaces the consultation bureau; wellbeing support runs partly through school.",
        firstStep: "Register the GP, then ask the school who the youth health nurse and support coordinator are.",
      },
      {
        situation: "Non-EU family with a pending residence procedure",
        approach: "Insurance eligibility and timing depend on your residence and work situation.",
        firstStep: "Check your insurance obligation and deadline as soon as you register, and keep proof of the start date.",
      },
    ] satisfies ScenarioRow[],
  },
  healthcareChecklist: {
    heading: "Your Children's Healthcare Checklist",
    intro:
      "Work through these four blocks in order. Most families finish the essentials in their first month, and the annual review keeps everything current as children grow.",
    essentials: [
      "Each child registered at the gemeente with a confirmed BSN",
      "Each child added to a Dutch basic health insurance policy, with the start date confirmed in writing",
      "Whole family registered with a GP practice near home",
      "First JGZ / consultatiebureau contact arranged",
      "Vaccination records handed over and assessed",
    ],
    routineSetup: [
      "Dental practice registered and first check-ups booked",
      "Pharmacy registered and repeat prescriptions transferred",
      "Regional huisartsenpost number saved alongside 112",
      "Childcare or school informed about allergies, conditions and medication",
      "Referrals arranged for any care that was ongoing before the move",
    ],
    ongoing: [
      "Attend JGZ check moments and vaccination appointments as invited",
      "Attend dental check-ups roughly twice a year, or as advised",
      "Review your insurance policy and any supplementary cover once a year",
      "Refresh emergency medication and check expiry dates",
      "Update the school and childcare when health needs change",
    ],
    records: [
      "Vaccination record (original plus translation)",
      "Insurance policy number and insurer contact details",
      "BSN for every child",
      "Specialist letters, referral letters and test results",
      "Current medication list with generic names and doses",
      "GP, dentist, pharmacy and huisartsenpost contact details in one place",
    ],
    checklistTips: [
      "Work the four blocks in order — essentials unlock routine setup, and routine setup unlocks the annual review.",
      "Print or screenshot the checklist and keep it in the same folder as BSN and insurance cards.",
      "Tick vaccinations and dentist as soon as the first invitations and registrations land — they are easy to forget after the GP is done.",
      "Refresh emergency medication expiry dates and school health notes whenever a child changes school year.",
    ],
  },
  expatSurprises: {
    heading: "What Surprises Expat Parents Most",
    intro:
      "None of these are problems once you expect them. Each card explains the surprise and the practical fix that experienced expat families use.",
    cards: [
      {
        title: "The GP is the gatekeeper",
        body: "You usually cannot book a paediatrician directly. Every route to hospital paediatric care runs through a referral from your GP or a youth healthcare doctor, which feels slow if you are used to choosing specialists yourself.",
        tip: "Register a GP early and build the relationship before you need it. If you think specialist assessment is needed, say so explicitly and ask what would justify a referral.",
      },
      {
        title: "Fewer prescriptions than you expect",
        body: "Dutch practice favours assessment, explanation and monitoring over immediate medication, and antibiotics are reserved for clear indications. Parents used to leaving with a prescription can read this as being brushed off.",
        tip: "Ask two questions every time: what should make me come back, and by when should I see improvement? You leave with a plan instead of a prescription.",
      },
      {
        title: "Preventive care sits outside the GP practice",
        body: "Growth, development, screening and vaccinations happen at JGZ, not at your GP. Families who only register a GP end up missing the entire preventive track — and vice versa.",
        tip: "Set up both. Treat the JGZ invitation as a real appointment, and tell each service what the other has advised.",
      },
      {
        title: "Appointments are short and phone-triaged",
        body: "A standard consult is around ten minutes and an assistant asks what the problem is before you get a slot. Without preparation, that is not much time for a worried parent with two children.",
        tip: "Prepare three sentences, lead with your main worry, and ask for a longer or double appointment when booking if you have several issues.",
      },
      {
        title: "Children's dental care is covered but not arranged",
        body: "Routine dental care is covered until 18, yet nobody enrols your child — and practices in popular city areas sometimes have closed lists or waiting periods.",
        tip: "Register with a dental practice in your first weeks, even if you are still unsure whether you will stay in that neighbourhood.",
      },
      {
        title: "Out-of-hours care starts with a phone call",
        body: "Emergency departments expect an ambulance or a referral, so walking in with a feverish child usually means being redirected to the out-of-hours GP post instead.",
        tip: "Save the regional huisartsenpost number now and call it first outside practice hours — and call 112 straight away for anything life-threatening.",
      },
    ] satisfies SurpriseCard[],
    adaptationTips: [
      "Start with the huisarts for almost every new concern — walk-in paediatricians are not the Dutch default.",
      "Expect a referral pathway for hospital specialists rather than booking them yourself.",
      "Keep JGZ invitation letters and vaccination invitations — open them and schedule promptly.",
      "Register the GP early, before the first fever, so triage and referrals are already set up.",
      "Ask the pharmacist and GP when prescribing culture feels more conservative than you are used to.",
      "Treat short appointments as a reason to prepare three sentences, not as a sign you are being ignored.",
    ],
  },
  faq: [
    {
      q: "Is healthcare free for children in the Netherlands?",
      a: "Largely, yes. Children under 18 are covered by Dutch basic health insurance without paying a premium and without the annual deductible (eigen risico) that applies to adults, and preventive youth healthcare (JGZ) — including check-ups, screening and national programme vaccinations — is publicly funded rather than billed to you. Parents still pay their own premium and deductible, and some things sit outside the basic package for children, most commonly orthodontics. Verify the details of your own policy with your insurer.",
    },
    {
      q: "Do children need their own health insurance?",
      a: "Children need to be insured, but not with a separate premium-paying policy. They are registered on a parent's Dutch basic insurance and covered free of charge until they turn 18. Registration is not automatic: for a baby born in the Netherlands you normally have four months from birth to arrange it, with cover backdated to the birth date, and families arriving from abroad arrange insurance shortly after becoming insurable. Confirm the exact deadline for your situation with your insurer or on Government.nl.",
    },
    {
      q: "How do I register my child with a GP (huisarts)?",
      a: "Search for practices near your home that accept new patients — most serve a defined catchment area — and complete the practice registration form for every family member using each child's BSN and your insurance details. Ask your previous doctor for a medical summary and vaccination record so allergies, conditions and past treatment are on file, and book an introduction appointment if the practice offers one. Do this in your first weeks rather than during a child's first illness.",
    },
    {
      q: "What is the consultatiebureau and is it the same as a GP?",
      a: "The consultatiebureau is the local Youth Healthcare (JGZ) centre for children under four, and it is not a GP. It provides free preventive care — growth and development monitoring, vision and hearing screening, national programme vaccinations and parenting guidance — at scheduled ages rather than when your child is ill. From age four the same service continues through school-based youth health teams. You need both: JGZ for prevention and your GP for illness, injury and referrals.",
    },
    {
      q: "Are vaccinations mandatory in the Netherlands?",
      a: "No. The national immunisation programme (Rijksvaccinatieprogramma), coordinated by RIVM and delivered free through JGZ, is voluntary. You are invited at set ages, given information about each vaccination and asked to decide. Some childcare providers and schools ask about vaccination status for information or outbreak management, which is not the same as a legal requirement — ask each organisation what they ask for and why. For the current schedule, check RIVM rather than any summary.",
    },
    {
      q: "How does my child see a paediatrician (kinderarts)?",
      a: "Through a referral. Your GP — or a youth healthcare doctor — assesses first and writes a referral letter (verwijzing) to a hospital paediatric clinic when specialist assessment or diagnostics are needed. Most children are seen at a regional hospital; more complex care is referred onwards to a university medical centre or a specialised national centre. Keep a copy of the referral, check that the hospital is contracted by your insurer, and ask that letters are copied back to your GP.",
    },
    {
      q: "What do I do in a medical emergency with my child?",
      a: "Call 112 immediately for anything life-threatening — unresponsiveness, serious breathing difficulty, a severe allergic reaction, a seizure that does not stop, heavy bleeding or suspected poisoning. Operators speak English. For urgent problems that are not life-threatening but cannot wait for your GP practice to reopen, call your regional huisartsenpost (out-of-hours GP post) first; they triage by phone and give advice or an appointment. Hospital emergency departments generally expect an ambulance or a referral rather than a walk-in.",
    },
    {
      q: "Is dental care for children covered, and what about braces?",
      a: "Routine dental care for under-18s — periodic check-ups, fillings, extractions and preventive advice — is covered by the basic insurance, but you must register with a dental practice yourself, as there is no automatic school dentist. Orthodontics such as braces usually falls outside the basic package for children and is a common reason families take supplementary dental cover. Compare supplementary packages early, since waiting periods and annual limits mean late cover often does not help.",
    },
  ],
  faqQuickReference: [
    "Children under 18: no premium and no deductible — but registration with an insurer is still required.",
    "Illness and referrals go to the GP; growth, screening and vaccinations go to JGZ.",
    "Specialist paediatric care needs a referral letter from the GP or youth healthcare doctor.",
    "112 for life-threatening emergencies; the regional huisartsenpost for urgent out-of-hours care.",
    "Routine dental care is covered until 18; orthodontics usually needs supplementary cover.",
    "Records from abroad are assessed rather than discarded — bring originals plus translations.",
  ],
  howToSchema: {
    name: "Registering Your Child With a GP in the Netherlands",
    description:
      "Step-by-step orientation for expat parents registering a child with a Dutch family doctor (huisarts), including BSN and insurance requirements, choosing a practice and transferring medical records.",
    anchor: "#gp",
  },
  relatedGuidesTips: [
    "Family GP setup → the General Practitioner (GP) guide for registration and referrals.",
    "Insurance not arranged yet → start with the health insurance guide before anything else.",
    "New to Dutch family life → the parenting guide covers culture, schools, sport and daily rhythm.",
    "Planning childcare → daycare and after-school care guides explain waiting lists and allowance.",
    "Still relocating → the moving-with-children guide sequences registration, schools and healthcare.",
  ],
  relatedGuides: [
    { label: "General Practitioner (GP)", href: GP_NETHERLANDS_PATH, status: "live", description: "Huisarts registration, appointments, referrals and out-of-hours care." },
    { label: "Health Insurance in the Netherlands", href: HEALTH_INSURANCE_PATH, status: "live", description: "Basic package, deductible, choosing an insurer and supplementary cover." },
    { label: "Health insurance comparison", href: HEALTH_INSURANCE_COMPARISON_PATH, status: "live", description: "Decision framework for comparing policies — not an insurer ranking." },
    { label: "Maternity care", href: MATERNITY_CARE_NETHERLANDS_PATH, status: "live", description: "Verloskundige first line, obstetric pathways, registration, insurance and kraamzorg awareness." },
    { label: "Pharmacies", href: PHARMACIES_NETHERLANDS_PATH, status: "live", description: "Finding an apotheek, hours, counseling and dienstapotheek for family medicines." },
    { label: "Prescriptions", href: PRESCRIPTIONS_NETHERLANDS_PATH, status: "live", description: "Recepten, e-prescriptions, herhaalrecept, medication lists and foreign prescriptions." },
    { label: "Hospitals", href: HOSPITALS_NETHERLANDS_PATH, status: "live", description: "Referrals, specialists, outpatient clinics, admissions and paediatric hospital pathways." },
    { label: "Emergency Healthcare", href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH, status: "live", description: "112, Huisartsenpost, SEH, ambulance and urgent-care pathways." },
    { label: "Mental Healthcare", href: MENTAL_HEALTHCARE_NETHERLANDS_PATH, status: "live", description: "GP first contact, POH-GGZ, GGZ, stepped care, waiting times and crisis routes." },
    { label: "Physiotherapy", href: PHYSIOTHERAPY_NETHERLANDS_PATH, status: "live", description: "Fysiotherapie, direct access, insurance limits and finding a therapist." },
    { label: "Parenting in the Netherlands", href: PARENTING_NETHERLANDS_PATH, status: "live", description: "Dutch parenting culture, daily family life and practical orientation." },
    { label: "Child Benefits", href: CHILD_BENEFITS_PATH, status: "live", description: "Kinderbijslag and financial support for families with children." },
    { label: "Daycare (Kinderopvang)", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Childcare options, costs and waiting lists for ages 0–4." },
    { label: "After-School Care (BSO)", href: AFTER_SCHOOL_CARE_PATH, status: "live", description: "Buitenschoolse opvang for primary school children." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool, secondary tracks and parent involvement." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "International and bilingual education options." },
    { label: "Moving to the Netherlands With Kids", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Registration, schools, childcare and healthcare for relocating families." },
  ] satisfies HealthcareLink[],
  familyHubTips: [
    "Healthcare, childcare and schools are decided together — housing location affects all three.",
    "Benefits and allowances follow registration, so finish gemeente and insurance steps first.",
    "The parenting guide is the cornerstone for culture and daily life; this page is the healthcare cornerstone.",
    "Relocating families should read the moving-with-children checklist alongside this guide.",
  ],
  familyHubCards: [
    { label: "Healthcare for Children", href: HEALTHCARE_FOR_CHILDREN_PATH, status: "live", description: "GP, JGZ, vaccinations, hospitals and emergencies — you are here." },
    { label: "Parenting", href: PARENTING_NETHERLANDS_PATH, status: "live", description: "Dutch parenting culture and everyday family life." },
    { label: "Daycare", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Childcare options and waiting lists." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool and secondary education." },
    { label: "Child Benefits", href: CHILD_BENEFITS_PATH, status: "live", description: "Kinderbijslag and family allowances." },
    { label: "Moving With Kids", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Relocation checklist for families with children." },
  ] satisfies HealthcareLink[],
  exploreNextCards: [
    { label: "Maternity care", href: MATERNITY_CARE_NETHERLANDS_PATH, status: "live", description: "Midwife pathways, registration and kraamzorg before and after birth." },
    { label: "General Practitioner (GP)", href: GP_NETHERLANDS_PATH, status: "live", description: "Register and use the family huisarts for illness and referrals." },
    { label: "Pharmacies", href: PHARMACIES_NETHERLANDS_PATH, status: "live", description: "Register a family apotheek and learn hours and dienstapotheek." },
    { label: "Prescriptions", href: PRESCRIPTIONS_NETHERLANDS_PATH, status: "live", description: "Understand recepten, herhaalrecept and medication lists for children." },
    { label: "Emergency Healthcare", href: EMERGENCY_HEALTHCARE_NETHERLANDS_PATH, status: "live", description: "Know which door to use for paediatric urgency." },
    { label: "Health Insurance", href: HEALTH_INSURANCE_PATH, status: "live", description: "Arrange the policy that covers your children's care." },
  ] satisfies HealthcareLink[],
  exploreNextTips: [
    "Pregnancy or newborn pathway → maternity care guide.",
    "Family GP setup still open → the General Practitioner (GP) guide.",
    "Medicines logistics → Pharmacies and Prescriptions.",
    "Coverage questions still open → open the health insurance guide first.",
    "Everyday family life and Dutch parenting norms → the parenting guide.",
    "Still mid-relocation → the moving-with-children checklist sequences the rest.",
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks before your first appointment",
      items: [
        "Confirm basic insurance — child on a parent policy, keep the policy number.",
        "Register a huisarts — first contact for illness and referrals.",
        "Find JGZ / consultation bureau — preventive checks and vaccinations.",
        "Save emergency routes — 112 and your local huisartsenpost.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Insurance: under-18s pay no premium and no deductible, but must be registered.",
        "GP: first contact for illness and the gate to specialist and hospital care.",
        "JGZ: free preventive checks, screening and vaccinations from birth to 18.",
        "Emergencies: 112 for life-threatening; huisartsenpost for urgent out-of-hours care.",
      ],
    },
    howItWorks: {
      title: "From the visual — the pathway in order",
      items: [
        "Registration first: BSN unlocks insurance, and insurance unlocks insured care.",
        "Municipal registration also triggers your automatic JGZ invitation.",
        "GP registration before you need it — practices can have closed lists.",
        "Specialist care follows a referral letter, not a direct booking.",
      ],
    },
    healthInsurance: {
      title: "From the visual — insurance essentials for children",
      items: [
        "No premium and no eigen risico for under-18s on a parent's policy.",
        "Newborns are normally registered within four months, backdated to birth.",
        "The basic package is identical everywhere; networks and extras differ.",
        "Orthodontics usually needs supplementary cover — compare it early.",
      ],
    },
    gp: {
      title: "From the visual — GP registration and appointments",
      items: [
        "Register the whole family at once, using each child's BSN and insurance details.",
        "Hand over a medical summary and vaccination record from your previous doctor.",
        "Expect phone triage: state age, symptom, duration and your main worry.",
        "Always ask what should make you come back, and write the answer down.",
      ],
    },
    jgz: {
      title: "From the visual — what JGZ covers",
      items: [
        "Growth, development, vision and hearing screening at fixed ages from birth to 18.",
        "National programme vaccinations, free of charge and by invitation.",
        "Parenting guidance on feeding, sleep, behaviour and adolescence.",
        "JGZ can refer independently — but it does not replace your GP for illness.",
      ],
    },
    consultationBureaus: {
      title: "From the visual — making bureau visits count",
      items: [
        "Appointments run 20–30 minutes and are frequent in the first year.",
        "You meet a nurse, a doctor and an assistant — each with a different role.",
        "Bring vaccination records, growth charts and your written questions.",
        "Ask for the appointment in English if that makes the conversation easier.",
      ],
    },
    vaccinations: {
      title: "From the visual — vaccination structure",
      items: [
        "Four broad phases: infant series, toddler boosters, school-age boosters, adolescence.",
        "Free through JGZ and voluntary — you are informed and asked, not compelled.",
        "Records from abroad are assessed for an individual catch-up plan.",
        "Always verify the current schedule on RIVM rather than any summary.",
      ],
    },
    hospitalsSpecialists: {
      title: "From the visual — how referrals work",
      items: [
        "GP or youth healthcare doctor writes the referral; the hospital books the appointment.",
        "Regional hospitals handle most paediatrics; UMCs handle complex care.",
        "Check that the hospital is contracted by your insurer before the first visit.",
        "Ask for letters to be copied to your GP so coordination stays in one place.",
      ],
    },
    emergencyCare: {
      title: "From the visual — choose the right door",
      items: [
        "112: life-threatening — breathing problems, seizure, severe injury, unresponsiveness.",
        "Huisartsenpost: urgent but not life-threatening outside GP hours — call first.",
        "Routine GP: mild illness and minor concerns — next working day.",
        "Poison orientation: +31 30 274 88 88 — and 112 if the child is unwell.",
      ],
    },
    dentalCare: {
      title: "From the visual — dental care under 18",
      items: [
        "Routine care is covered by the basic insurance until age 18.",
        "You register with a practice yourself — there is no automatic school dentist.",
        "Check-ups are typically twice a year, as advised by the practice.",
        "Orthodontics usually needs supplementary cover with limits and waiting periods.",
      ],
    },
    mentalHealth: {
      title: "From the visual — support routes",
      items: [
        "GP referral is the main route into youth mental health care (jeugd-GGZ).",
        "School support teams and JGZ nurses can act quickly and refer onwards.",
        "Your municipality funds youth support — ask what is available locally.",
        "De Kindertelefoon 0800 0432 for children; 113 on 0800 0113 for suicidal thoughts; 112 in immediate danger.",
      ],
    },
    childhoodIllnesses: {
      title: "From the visual — how the system responds",
      items: [
        "Assessment, explanation and warning signs come before medication.",
        "Antibiotics are prescribed on clear indication, not as reassurance.",
        "Thuisarts.nl is the standard reliable self-help source used by Dutch GPs.",
        "Calling back when your child worsens is expected — not an imposition.",
      ],
    },
    medications: {
      title: "From the visual — pharmacy practicalities",
      items: [
        "Register with one apotheek so the medication record stays in one place.",
        "Drogist for over-the-counter basics; apotheek for prescriptions and dosing advice.",
        "Bring generic drug names — some familiar brands are not available here.",
        "Out of hours, urgent prescriptions go through the regional dienstapotheek.",
      ],
    },
    movingChecklist: {
      title: "From the visual — relocation sequence",
      items: [
        "Before you leave: medical summaries, vaccination records, prescriptions with generic names.",
        "Week 1: gemeente registration, BSN, insurance and emergency numbers saved.",
        "Week 2: GP, dentist and pharmacy registrations.",
        "Month 1: first JGZ appointment and vaccination catch-up assessment.",
      ],
    },
    healthcareChecklist: {
      title: "From the visual — checklist priorities",
      items: [
        "BSN, insurance, huisarts and JGZ first — then vaccinations and dentist.",
        "Save 112 and the huisartsenpost number in every parent's phone.",
        "Store medical records and vaccination history in one family admin file.",
        "Print or screenshot the checklist so it travels with your move paperwork.",
      ],
    },
    expatSurprises: {
      title: "From the visual — surprises with fixes",
      items: [
        "GP acts as gatekeeper → start with the huisarts.",
        "Fewer walk-in specialists → expect a referral pathway.",
        "Preventive JGZ visits and vaccination invitations by post → open and schedule.",
        "Different prescribing culture → ask the pharmacist and GP what to watch for.",
      ],
    },
    faq: {
      title: "From the visual — top questions answered",
      items: [
        "Children are insured free until 18, but registration is still required.",
        "Specialist care needs a referral from the GP or youth healthcare doctor.",
        "Vaccinations are free and voluntary through JGZ.",
        "Dental care is covered until 18; orthodontics usually is not.",
      ],
    },
    relatedGuides: {
      title: "From the visual — read next by need",
      items: [
        "Insurance not arranged → health insurance guide.",
        "New to Dutch family life → parenting guide.",
        "Childcare planning → daycare and after-school care guides.",
        "Still relocating → moving with children checklist.",
      ],
    },
    familyHub: {
      title: "From the visual — the family cluster",
      items: [
        "Healthcare (this page): insurance, GP, JGZ, specialists and emergencies.",
        "Childcare and schools: daycare, BSO and education choices.",
        "Money: child benefits and childcare allowance.",
        "Relocation: the moving-with-children sequence.",
      ],
    },
    exploreNext: {
      title: "From the visual — choose the card matching your next family need",
      items: [
        "Health insurance → coverage questions and policy setup.",
        "Parenting → everyday family life and Dutch norms.",
        "Daycare or child benefits → childcare setup or financial support.",
        "Moving with children → the relocation checklist when paperwork is still open.",
      ],
    },
  },
  sourceUsageTips: [
    "Use RIVM for the current vaccination schedule — it changes periodically and summaries go stale.",
    "Use Government.nl for the rules on insuring children and on youth healthcare entitlements.",
    "Use Thuisarts.nl for everyday symptom information written by Dutch GPs, not commercial sites.",
    "Use your insurer's own portal for coverage, contracted providers and reimbursement questions.",
    "Use your municipality's website to find the local JGZ organisation and youth support team.",
  ],
  officialSources: [
    {
      label: "Government.nl — Health insurance",
      href: "https://www.government.nl/topics/health-insurance",
      description: "Official rules on Dutch health insurance, including how children are insured and registration obligations.",
    },
    {
      label: "Government.nl — Youth health care",
      href: "https://www.government.nl/topics/youth-health-care",
      description: "Government overview of preventive youth healthcare (JGZ) for children and young people.",
    },
    {
      label: "RIVM — National Immunisation Programme",
      href: "https://www.rivm.nl/en/national-immunisation-programme",
      description: "The current vaccination schedule, information per vaccination and guidance for children from abroad.",
    },
    {
      label: "Thuisarts.nl",
      href: "https://www.thuisarts.nl/",
      description: "Reliable, non-commercial health information written by the Dutch college of general practitioners.",
    },
    {
      label: "NCJ — Netherlands Centre for Youth Health",
      href: "https://www.ncj.nl/",
      description: "Professional knowledge centre for JGZ — useful for understanding how youth healthcare is organised.",
    },
    {
      label: "NZa — Dutch Healthcare Authority",
      href: "https://www.nza.nl/english",
      description: "Regulator information on healthcare rules, patient rights and how the insured system is supervised.",
    },
  ],
  officialSourcesNote:
    "General information only — not medical advice. Coverage, schedules and local arrangements change, so verify your own situation with your insurer's portal, your municipality's JGZ organisation and your GP. In an emergency, call 112.",
} as const;

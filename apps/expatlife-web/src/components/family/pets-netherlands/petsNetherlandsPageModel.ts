import { PARENTING_NETHERLANDS_PATH } from "@/src/components/family/parentingNetherlandsPageModel";
import {
  GIVING_BIRTH_NETHERLANDS_PATH,
  PETS_NETHERLANDS_PATH as PETS_PATH_FROM_CLUSTER,
} from "@/src/components/family/giving-birth-netherlands/givingBirthNetherlandsPageModel";
import { FAMILY_ACTIVITIES_NETHERLANDS_PATH } from "@/src/components/family/family-activities-netherlands/familyActivitiesNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Canonical pets everyday-life path — reuses cluster export from giving-birth model (no conflicting duplicate). */
export const PETS_NETHERLANDS_PATH = PETS_PATH_FROM_CLUSTER;
export { GIVING_BIRTH_NETHERLANDS_PATH };
export const FAMILY_HUB_PATH = PARENTING_NETHERLANDS_PATH;
export const BRINGING_PETS_PATH = "/netherlands/bringing-pets-to-netherlands/" as const;
export const MOVING_WITH_FAMILY_PATH = "/netherlands/moving-to-netherlands-with-family/" as const;
export const RENTING_PATH = "/netherlands/housing/rental-contracts-and-deposits-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const PET_RELOCATION_COMPANIES_PATH = "/netherlands/services/pet-relocation-companies/" as const;

export type PetsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon" | "external";
};

export type TipCard = { title: string; body: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type MistakeCard = { title: string; body: string; advice: string };
export type ScenarioRow = { situation: string; approach: string; firstStep: string };
export type HowToStep = { name: string; text: string };
export type ComparisonRow = { topic: string; whatToCheck: string; tip: string };
export type CostRow = { category: string; range: string; notes: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "pets-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const petsNetherlandsPage = {
  slug: "pets-netherlands",
  path: PETS_NETHERLANDS_PATH,
  hubPath: FAMILY_HUB_PATH,
  parentGuidePath: PARENTING_NETHERLANDS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(PETS_NETHERLANDS_PATH) ?? "2026-08-24",
  seo: {
    title: "Pets in the Netherlands | Complete Guide for Expats",
    description:
      "Living with pets in the Netherlands after arrival: housing and landlord pet rules, chip and registration norms, finding a vet, pet insurance orientation, parks and leash etiquette, and everyday costs for expats.",
    keywords: [
      "pets Netherlands",
      "pet ownership Netherlands",
      "dogs cats Netherlands expats",
      "pet-friendly housing Netherlands",
      "vet Netherlands",
      "pet insurance Netherlands",
      "dog parks Netherlands",
      "leash rules Netherlands",
      "microchip pet Netherlands",
      "living with pets Netherlands",
      "expat pets Netherlands",
      "pet costs Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Family · Pets",
    pageTitle: "Pets in the Netherlands",
    subtitle:
      "Everyday life with dogs and cats after you arrive — housing rules, chip and registration norms, finding a vet, insurance orientation, parks etiquette and typical costs.",
    primaryCta: { label: "See housing rules", href: "#housing" },
    secondaryCta: { label: "Find a vet", href: "#vet" },
    chips: ["Housing rules", "Chip & register", "Vets", "Insurance", "Parks & etiquette"],
    disclaimer:
      "General orientation only — not veterinary medical advice, not legal advice on leases, and not a ranking of vets, insurers or brands. Confirm landlord rules in writing, follow your vet for clinical care, and verify municipal leash or park rules where you live.",
    image: {
      src: `/images/heroes/${VISUAL_PREFIX}-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic welcoming Dutch canal neighbourhood scene: multicultural expat walking a calm dog past brick townhouses and a bike, soft afternoon light, pet collar tags visible, no distress or clinic procedures.",
    },
  },
  sectionNav: [
    { href: "#quick-answer", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#housing", label: "Housing" },
    { href: "#chip-registration", label: "Chip & register" },
    { href: "#vet", label: "Vets" },
    { href: "#insurance", label: "Insurance" },
    { href: "#parks", label: "Parks & etiquette" },
    { href: "#costs", label: "Costs" },
    { href: "#recommended-options", label: "Recommended" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#howto", label: "How-to" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Related" },
    { href: "#family-hub", label: "Family hub" },
    { href: "#explore-next", label: "Explore next" },
    { href: "#sources", label: "Sources" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium orientation board titled Pet Life After Arrival — four building blocks: confirm housing pet rules in writing, chip and registration norms, choose a local vet, and learn parks etiquette — Pet File Checklist rail on the right, Dutch canal skyline and ExpatLife brand footer.",
      "Four habits cover most everyday pet questions: housing, ID/register, vet, and public etiquette."
    ),
    snapshot: visual(
      "snapshot",
      "Premium six-card snapshot of living with pets in the Netherlands — housing permission, microchip norms, local vet, insurance orientation, leash and park etiquette, monthly cost bands — Dutch city park band and ExpatLife brand footer.",
      "Six building blocks explain almost every everyday pet-life question after arrival."
    ),
    housing: visual(
      "housing",
      "Premium rental desk scene — lease pages with pet clause highlight, landlord email checklist, deposit and house-rule notes, dog bowl and cat carrier on a Dutch apartment table — Verify with landlord rail.",
      "Get pet permission in writing before you sign or move a pet into a rental."
    ),
    chipRegistration: visual(
      "chip-registration",
      "Premium chip and registration board — microchip scan icon, passport or registration card, owner contact details update, and a reminder to keep records after a move — Dutch vet desk props.",
      "Identification and up-to-date owner details help reunite lost pets — confirm current Dutch norms with your vet."
    ),
    vet: visual(
      "vet",
      "Premium finding-a-vet map board — register with a local practice, ask about English support and emergency hours, transfer prior records, and save after-hours contact — calm Dutch clinic waiting scene.",
      "Choose a nearby practice early; ask about urgent and after-hours pathways."
    ),
    insurance: visual(
      "insurance",
      "Premium pet insurance orientation board — what policies often cover vs exclude, waiting periods, and questions to ask before you buy — General information only rail, no fake ratings.",
      "Pet insurance is optional orientation — compare cover, exclusions and waiting periods yourself."
    ),
    parks: visual(
      "parks",
      "Premium parks and etiquette map — leash zones, off-leash areas when signed, scoop bags, bike-path awareness, and apartment hallway manners — Dutch park path with canal houses.",
      "Municipal signs and common courtesy beat assumptions from other countries."
    ),
    costs: {
      src: `/images/infographics/${VISUAL_PREFIX}-costs-premium-v2.png`,
      alt: "Premium everyday pet cost stack for the Netherlands — food and litter, routine vet visits, insurance premiums, daycare sitting and training bands, plus an unexpected care buffer — euro ranges as 2026 planning orientation only, Dutch canal skyline and ExpatLife brand footer.",
      caption:
        "Budget for routine care, optional insurance and paid help, plus a buffer — 2026 euro bands are planning orientation, not quotes.",
    },
    scenarios: visual(
      "scenarios",
      "Premium scenario cards board — new rental with a dog, adopting after arrival, cat in an apartment, and weekend travel with pets — first-step arrows and Dutch desk props.",
      "Match your situation to a first practical step instead of copying someone else’s setup."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board for pet life — assuming pets are allowed, skipping chip/record updates, no local vet before an emergency, ignoring leash signs, under-budgeting care — Fix notes beside each card.",
      "Most friction comes from housing surprises, missing ID records, or unclear park rules — not from loving your pet less."
    ),
    checklist: visual(
      "checklist",
      "Premium pet readiness checklist clipboard — housing permission written, chip and contacts current, vet registered, emergency number saved, insurance decision noted, leash and scoop kit ready — Dutch kitchen table.",
      "Use this checklist in your first weeks so pet life feels oriented, not improvised."
    ),
  },
  snapshotSignals: [
    { label: "Housing", value: "Ask in writing", note: "Before you sign or move in" },
    { label: "ID", value: "Chip + contacts", note: "Keep details current" },
    { label: "Care", value: "Local vet first", note: "Save emergency hours" },
    { label: "Public", value: "Leash & scoop", note: "Follow local signs" },
  ] satisfies SnapshotSignal[],
  introParagraphs: [
    "Once you live in the Netherlands, everyday pet life is about housing permission, identification norms, a local vet, optional insurance, public etiquette and realistic monthly costs — not import paperwork.",
    "Import, quarantine and travel documents belong on Bringing pets to the Netherlands. This page is the after-arrival companion for dogs and cats in expat households. Family cluster sibling Giving birth covers birth-day orientation; Parenting covers broader family culture.",
  ],
  introHighlights: [
    "Everyday pet life after arrival — not the move-import deep-dive.",
    "Landlord and VvE rules vary; written permission beats verbal assumptions.",
    "Microchip and contact details are practical norms — confirm current requirements with your vet.",
    "Parks and streets have local leash and scoop expectations; check municipal signs.",
  ],
  orientationFlowSteps: [
    "Confirm housing pet rules in writing (lease, landlord or VvE).",
    "Check chip, registration and owner-contact details with your vet.",
    "Register with a nearby practice and save after-hours contacts.",
    "Learn local leash, park and apartment etiquette — then set a monthly cost buffer.",
  ],
  petFileChecklist: [
    "Written pet permission / lease clause or landlord email",
    "Microchip number + where records are stored",
    "Vaccination and medical history summary for your Dutch vet",
    "Local vet practice name, phone and after-hours route",
    "Pet insurance decision (buy / skip / review later) with policy notes if any",
    "Leash, ID tags, scoop bags, carrier and emergency go-bag basics",
  ],
  introScenarios: [
    {
      situation: "We already have a dog and just moved into a rental",
      approach: "Housing permission and neighbour/VvE rules come first — then local vet and park etiquette.",
      firstStep: "Confirm the pet clause in writing and book a settling-in vet visit.",
    },
    {
      situation: "We want to adopt a cat after arrival",
      approach: "Adoption is easier when housing allows pets and you have a vet lined up for first checks.",
      firstStep: "Get landlord permission in writing, then ask shelters or reputable adoption channels about process and fees.",
    },
    {
      situation: "We are still finishing pet import paperwork",
      approach: "Import rules and travel documents live on the Bringing pets move guide — this page starts after arrival.",
      firstStep: "Finish travel requirements on Bringing pets, then return here for housing, vet and everyday life.",
    },
  ] satisfies ScenarioRow[],
  quickAnswer: {
    heading: "How does living with pets work for expats in the Netherlands?",
    summary:
      "After arrival, pet life centres on permission in your home, clear identification and contacts, a local veterinarian, optional insurance, public etiquette (leash, scoop, signs) and a realistic monthly budget. Import and travel paperwork are covered separately on Bringing pets.",
    bullets: [
      "Ask landlords and buildings about pets in writing before you commit.",
      "Keep microchip and owner details current; ask your vet what registration norms apply.",
      "Register with a nearby practice and learn their urgent / after-hours pathway.",
      "Follow municipal leash and park signs; carry scoop bags as default courtesy.",
      "Import & travel docs → Bringing pets; birth-day family sibling → Giving birth.",
    ],
    note: "This page does not replace your lease, municipal bylaws or your veterinarian’s clinical advice.",
  },
  snapshotCards: [
    {
      title: "Housing permission",
      body: "Rentals and apartments often set pet rules — get them in writing before you move a pet in.",
    },
    {
      title: "Chip & records",
      body: "Microchips and up-to-date owner contacts help if a pet is lost; confirm norms with your vet.",
    },
    {
      title: "Local vet",
      body: "Choose a nearby practice, transfer history, and save emergency / after-hours contacts.",
    },
    {
      title: "Insurance orientation",
      body: "Optional cover — compare waiting periods, exclusions and claim rules yourself.",
    },
    {
      title: "Parks & etiquette",
      body: "Leash zones, off-leash areas when signed, scoop bags and bike-path awareness.",
    },
    {
      title: "Everyday costs",
      body: "Food, routine care, gear and a buffer for unexpected visits — plan ranges, not guarantees.",
    },
  ] satisfies TipCard[],
  snapshotTips: [
    "Bringing pets covers import; this page covers life after you settle.",
    "Never rely on a verbal “pets are fine” for a competitive rental.",
    "Ask your vet about English support and emergency hours in week one.",
  ],
  housing: {
    heading: "Housing and landlord pet rules",
    intro:
      "Pet-friendly housing is not automatic in the Netherlands. Many landlords, agencies and apartment associations (VvE) set conditions, bans or deposits. Confirm rules before you sign or before you bring a pet into an existing home.",
    paragraphs: [
      "Ask specifically about dogs, cats, size or breed limits, balconies, and whether written approval is required. Keep email or contract language — verbal nods are hard to enforce later.",
      "If you are still searching for a home, treat pet permission as a filter alongside budget and commute. Renting and housing guides help with the wider search; this section focuses on the pet clause.",
    ],
    rows: [
      {
        topic: "Lease / contract",
        whatToCheck: "Explicit pet clause, ban, or “permission required” wording",
        tip: "Request a short written confirmation if the clause is vague",
      },
      {
        topic: "Landlord / agency",
        whatToCheck: "Whether pets need prior approval and any fee or deposit",
        tip: "Ask before viewings so you do not waste scarce appointments",
      },
      {
        topic: "VvE / building rules",
        whatToCheck: "Apartment house rules on pets, noise and common areas",
        tip: "A landlord yes can still conflict with building rules — check both",
      },
      {
        topic: "Moving a pet in later",
        whatToCheck: "Whether permission can be added after you already live there",
        tip: "Get approval in writing before adopting or relocating a pet mid-lease",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Write it down",
        body: "Save landlord emails and keep the signed clause. Screenshots of chats are better than memory.",
      },
      {
        title: "Neighbours & noise",
        body: "Barking, hallway accidents and litter smells are common complaint themes — plan training and cleaning habits early.",
      },
      {
        title: "Temporary stays",
        body: "Hotels, short-stays and some temporary housing have separate pet policies — confirm before you book.",
      },
    ] satisfies TipCard[],
    crossLinks: [
      {
        label: "Rental contracts and deposits",
        href: RENTING_PATH,
        status: "live" as const,
        description: "Lease orientation beside the pet clause",
      },
      {
        label: "Housing hub",
        href: HOUSING_HUB_PATH,
        status: "live" as const,
        description: "Housing guides for expats settling in",
      },
      {
        label: "Bringing pets",
        href: BRINGING_PETS_PATH,
        status: "live" as const,
        description: "Import and travel paperwork before everyday life",
      },
    ] satisfies PetsLink[],
  },
  chipRegistration: {
    heading: "Microchip and registration norms",
    intro:
      "Identification helps reunite lost pets. In Dutch everyday practice, microchips and up-to-date owner details are the practical baseline — exact registration databases and legal duties can depend on species, municipality and current rules.",
    paragraphs: [
      "Ask your veterinarian what is expected for your dog or cat after arrival: chip check, passport or registration documents, and how to update your address and phone number.",
      "If you brought a pet from abroad, import timing and certificate rules belong on Bringing pets. Once you live here, keep local contact details current so a found pet can be returned to you.",
    ],
    tips: [
      "Photograph the chip number and keep it in your phone notes.",
      "Update owner contacts after every move or number change.",
      "Ask your vet which registry or passport workflow they use locally.",
      "ID tags on collars still help neighbours return a pet quickly.",
    ],
    cards: [
      {
        title: "Chip check visit",
        body: "A settling-in appointment is a good moment to scan the chip and review vaccination history.",
      },
      {
        title: "Lost-pet plan",
        body: "Know who to call: vet, municipal tips if any, and local lost-and-found groups — without sharing personal data unsafely.",
      },
      {
        title: "Not medical advice",
        body: "Your vet decides clinical and identification steps for your animal — this page is orientation only.",
      },
    ] satisfies TipCard[],
  },
  vet: {
    heading: "Finding a veterinarian",
    intro:
      "Register with a local dierenarts (veterinary practice) early — ideally before an urgent problem. Practices vary on English support, appointment lead times and how they handle evenings and weekends.",
    paragraphs: [
      "Search by neighbourhood, ask fellow expats for orientation (not rankings), and call to ask about new-client intake, vaccination review and emergency pathways. Transfer prior records when you can.",
      "Urgent care is not the same everywhere: some practices share after-hours cooperatives; others redirect to specific clinics. Save the number you are told to use — do not invent a “best ER” list from social media alone.",
    ],
    rows: [
      {
        topic: "New-client intake",
        whatToCheck: "Whether they accept new patients and how soon",
        tip: "Book a routine settling visit before summer holiday weeks if you can",
      },
      {
        topic: "Language",
        whatToCheck: "English support for consults and written instructions",
        tip: "Ask what to bring (passport, history, chip number)",
      },
      {
        topic: "After hours",
        whatToCheck: "Evening / weekend / holiday pathway",
        tip: "Save the exact number or clinic name they recommend",
      },
      {
        topic: "Records",
        whatToCheck: "How to share previous vaccines and treatments",
        tip: "Digital copies in one folder speed the first visit",
      },
    ] satisfies ComparisonRow[],
    cards: [
      {
        title: "Proximity matters",
        body: "A slightly farther “famous” clinic helps less than a reachable practice you will actually use.",
      },
      {
        title: "Preventive rhythm",
        body: "Ask about parasite prevention, dental checks and vaccine schedules appropriate for Dutch life — follow your vet.",
      },
      {
        title: "No rankings here",
        body: "ExpatLife does not rank veterinarians or award clinics — choose based on access, communication and trust.",
      },
    ] satisfies TipCard[],
    tips: [
      "Save practice WhatsApp or portal details if they use them.",
      "Note opening hours for phone triage vs walk-in policies.",
      "Ask whether they treat both dogs and cats if you have both.",
    ],
  },
  insurance: {
    heading: "Pet insurance orientation",
    intro:
      "Pet insurance (dierenverzekering) is optional in the Netherlands. Some households buy cover for unexpected veterinary costs; others self-fund with a savings buffer. There is no single “best” policy — compare cover, exclusions, waiting periods and claim processes yourself.",
    paragraphs: [
      "Indicative 2026 premium bands for mainstream dog and cat packages often land around €20–€50 per month for dogs and €10–€26 per month for cats, depending on age, breed, annual cover ceiling, deductible and whether you choose basic accident/surgery cover or broader illness packages. Older pets, large breeds and “all-risk” style plans can sit higher.",
      "Typical questions: accident vs illness cover, dental or chronic conditions, age limits at signup, co-payments, annual maxima and whether pre-existing issues are excluded. Read the policy conditions, not just marketing headlines.",
      "This section is orientation only — not a product ranking, not financial advice, and not a promise that any insurer will pay a claim. Verify live quotes on insurer or comparison sites.",
    ],
    premiumRows: [
      {
        category: "Cat — basic to mid cover",
        range: "Often ~€10–€26 / month",
        notes: "2026 orientation; age, breed and deductible change quotes",
      },
      {
        category: "Dog — basic to mid cover",
        range: "Often ~€20–€50 / month",
        notes: "Larger / older dogs and broader packages cost more",
      },
      {
        category: "Broader / higher-limit packages",
        range: "Can exceed €45–€80+ / month",
        notes: "Confirm annual maxima, waiting periods and exclusions",
      },
      {
        category: "Deductible / eigen risico",
        range: "Often ~€50–€150 / year (examples)",
        notes: "Higher deductible usually means lower premium — check claim maths",
      },
    ] satisfies CostRow[],
    tips: [
      "List what you want covered (surgery, illness, dental, abroad) before you compare brands.",
      "Check waiting periods before an upcoming procedure or new pet arrival.",
      "Compare annual cover ceilings and co-payments — not only the monthly premium.",
      "Keep invoices and referral letters organised for claims.",
      "Revisit cover after a big life change (new pet, move, budget shift).",
    ],
    cards: [
      {
        title: "Cover vs buffer",
        body: "Insurance and an emergency savings buffer can complement each other — decide consciously for your risk tolerance.",
      },
      {
        title: "Exclusions matter",
        body: "Breed, age and pre-existing condition clauses often decide real-world usefulness more than the brand name.",
      },
      {
        title: "Verify with providers",
        body: "Confirm current 2026 terms with the insurer or comparison site — pages and products change.",
      },
    ] satisfies TipCard[],
  },
  parks: {
    heading: "Parks, leash rules and etiquette",
    intro:
      "Public space rules for dogs vary by municipality and even by park zone. Assume leash and scoop obligations unless signs clearly allow otherwise. Cats that go outdoors raise different neighbour and traffic considerations in dense neighbourhoods.",
    paragraphs: [
      "Watch for on-leash areas, designated off-leash fields, playground exclusions and seasonal nesting restrictions. Bike paths and tram areas need extra attention — Dutch traffic expects predictable behaviour.",
      "Apartment life adds hallway etiquette: dry muddy paws, quiet hours, lift manners and litter odour control. Family activities guides cover parks for kids; here the focus is pet manners in shared space.",
    ],
    cards: [
      {
        title: "Read the signs",
        body: "Local pictograms beat habits from your previous country. When unsure, leash on.",
      },
      {
        title: "Scoop by default",
        body: "Carry bags every walk. Leaving waste is a fast way to sour neighbours and landlords.",
      },
      {
        title: "Shared paths",
        body: "Keep dogs close near bikes, cargo bikes and children’s scooters.",
      },
      {
        title: "Indoor cats",
        body: "Many urban cats live indoors or on secured balconies — discuss safety with your vet if relevant.",
      },
    ] satisfies TipCard[],
    tips: [
      "Locate one reliable walking loop and one backup rainy-day route.",
      "Ask your municipality site about dog zones if signs are unclear.",
      "Introduce balcony nets or screens only with landlord permission when needed.",
    ],
    crossLinks: [
      {
        label: "Family activities",
        href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
        status: "live" as const,
        description: "Parks and outings for families — pair with pet etiquette",
      },
    ] satisfies PetsLink[],
  },
  costs: {
    heading: "Everyday pet costs (indicative 2026)",
    intro:
      "Monthly costs vary by species, diet, city prices and whether you use daycare, sitters, training or insurance. The euro bands below are planning orientation for 2026 — your vet, municipality and local providers set real prices.",
    paragraphs: [
      "Budget for food, litter or walking gear, routine visits, preventatives your vet recommends, optional insurance, and a buffer for unexpected care. One-off setup (carrier, bed, baby gate, balcony screens) often hits in month one.",
      "Paid help is the big swing item for office households: daycare, walkers, overnight sitters and boarding can dwarf food spend in busy months. Training courses are usually a discrete outlay rather than a monthly line.",
      "Import travel costs belong on Bringing pets. Here the focus is ongoing life after you settle.",
    ],
    rows: [
      {
        category: "Food & consumables",
        range: "€25–€90+ / month",
        notes: "Diet, size, litter and brand drive the spread",
      },
      {
        category: "Routine vet consult (non-urgent)",
        range: "Often ~€45–€75 per visit",
        notes: "Ask your practice; city clinics can sit higher",
      },
      {
        category: "Preventatives & yearly rhythm",
        range: "Often ~€10–€30 / month equivalent",
        notes: "Vaccines, parasite control and check-ups averaged over the year",
      },
      {
        category: "Insurance (if chosen)",
        range: "Cats ~€10–€26 · dogs ~€20–€50 / month",
        notes: "Broader packages and older pets can cost more — see Insurance",
      },
      {
        category: "Dog daycare",
        range: "Often ~€13–€35 / day",
        notes: "Subscriptions and region change the rate",
      },
      {
        category: "Boarding / pension (overnight)",
        range: "Often ~€20–€55 / night",
        notes: "Size, season and high-care needs raise prices",
      },
      {
        category: "Dog walking",
        range: "Often ~€10–€25 / walk",
        notes: "Duration, group vs solo, and city premium matter",
      },
      {
        category: "Pet sitting (home / overnight)",
        range: "Often ~€25–€50+ / night or visit packs",
        notes: "Marketplace and private sitters vary widely — meet first",
      },
      {
        category: "Training (group course)",
        range: "Often ~€100–€250+ per course",
        notes: "Puppy / basic obedience blocks; private sessions extra",
      },
      {
        category: "Unexpected care buffer",
        range: "Keep €500–€2,000+ accessible",
        notes: "Diagnostics and procedures can spike quickly even with insurance",
      },
    ] satisfies CostRow[],
    cards: [
      {
        title: "First-month spike",
        body: "Setup gear plus a settling vet visit often make month one cost more than a steady month.",
      },
      {
        title: "Office-day multiplier",
        body: "Two to three daycare or walking days a week can add €150–€400+ per month — price the weekday plan before you commit.",
      },
      {
        title: "Track for 90 days",
        body: "A simple note of real spend beats generic online averages — then revisit insurance vs buffer.",
      },
      {
        title: "No fake deals",
        body: "ExpatLife does not promote fabricated discounts, clinic awards or guaranteed claim payouts.",
      },
    ] satisfies TipCard[],
  },
  recommendedOptions: {
    sectionId: "recommended-options",
    eyebrow: "Provider listings",
    title: "Recommended pet support options",
    subtitle:
      "Soft CTAs for insurance comparison, mainstream Dutch pet policies, sitting/walking marketplaces and everyday supplies. Confirm premiums, cover and availability on official sites — this is not a ranking of vets or trainers.",
    boundaryNote:
      "Editorial cost and insurance sections above are separate from this block. Ordering reflects relevance for expat pet life after arrival, not pay-to-rank placement unless a link is explicitly labelled as sponsored.",
    placementId: "nl-family-pets-support-providers",
    analyticsPageContext: "pets-netherlands-recommended-options",
    categoryLinks: [
      { href: BRINGING_PETS_PATH, label: "Bringing pets (import)" },
      { href: FAMILY_ACTIVITIES_NETHERLANDS_PATH, label: "Family activities" },
      { href: RENTING_PATH, label: "Rental contracts" },
    ],
    browseLabel: "More family & housing context: ",
  },
  scenarios: {
    heading: "Common expat pet scenarios",
    intro: "Match your situation to a calm first step — then deepen in the sections above.",
    rows: [
      {
        situation: "Landlord said yes verbally",
        approach: "Verbal permission is fragile in disputes or when staff change.",
        firstStep: "Ask for email or contract wording before the pet moves in.",
      },
      {
        situation: "Pet seems healthy but records are abroad",
        approach: "Dutch vets still need history and a chip check for continuity.",
        firstStep: "Book a settling visit and bring digital copies of prior records.",
      },
      {
        situation: "We work long office days",
        approach: "Dogs especially need a realistic daytime plan — walker, daycare or schedule redesign.",
        firstStep: "Trial a sustainable weekday routine before adding more pets.",
      },
      {
        situation: "Weekend trips and holidays",
        approach: "Pet sitting, boarding and travel rules need lead time.",
        firstStep: "List trusted sitters or boarding options and their booking windows.",
      },
      {
        situation: "Still completing import steps",
        approach: "Travel documents are a move task, not an everyday-life shortcut.",
        firstStep: "Use Bringing pets for import; return here for housing and local care.",
      },
    ] satisfies ScenarioRow[],
  },
  mistakes: [
    {
      title: "Assuming pets are allowed",
      body: "Many competitive rentals ban pets or require written approval.",
      advice: "Filter listings and confirm clauses before you emotionally commit.",
    },
    {
      title: "Skipping local vet registration",
      body: "Waiting until an emergency wastes time when every minute feels urgent.",
      advice: "Register and save after-hours instructions in week one.",
    },
    {
      title: "Outdated chip contacts",
      body: "A chip without your current phone number slows reunions.",
      advice: "Update details after moves; keep the number in your phone too.",
    },
    {
      title: "Ignoring leash and scoop norms",
      body: "Complaints escalate to neighbours, landlords and fines in some places.",
      advice: "Follow signs; carry bags; keep dogs predictable near bikes.",
    },
    {
      title: "No cost buffer",
      body: "Unexpected diagnostics can exceed a month of routine spend.",
      advice: "Keep a reserve or knowingly choose insurance after reading exclusions.",
    },
    {
      title: "Mixing import tasks into everyday life",
      body: "Certificate timing and airline rules deserve the dedicated move guide.",
      advice: "Use Bringing pets for entry paperwork; use this page for life after arrival.",
    },
  ] satisfies MistakeCard[],
  checklist: {
    heading: "Pet life readiness checklist",
    intro: "Work through this in your first weeks in a Dutch home — or before you adopt locally.",
    items: [
      "Written housing / landlord / VvE pet permission saved",
      "Microchip scanned; owner contacts updated",
      "Vaccination and medical history folder ready",
      "Local vet registered; after-hours pathway saved",
      "Insurance decision recorded (policy PDF or “self-fund buffer”)",
      "Leash, ID tag, scoop bags, carrier and basic first-aid contacts",
      "Walking route and rainy-day backup identified",
      "Sitter or boarding options listed for the next trip",
      "Import leftovers closed out via Bringing pets if still open",
    ],
  },
  howTo: {
    heading: "How to set up everyday pet life after arrival",
    steps: [
      {
        name: "Confirm housing rules in writing",
        text: "Check the lease, landlord email and any building rules. Do not move a pet in on a verbal maybe.",
      },
      {
        name: "Book a settling-in vet visit",
        text: "Register with a nearby practice, share prior records, confirm chip details and ask about after-hours care.",
      },
      {
        name: "Update identification contacts",
        text: "Make sure chip registries or passport details show your Dutch address and phone number as advised by your vet.",
      },
      {
        name: "Learn local public etiquette",
        text: "Map leash zones, carry scoop bags, and practise calm behaviour on bike-heavy paths.",
      },
      {
        name: "Set a monthly cost plan",
        text: "Budget food, routine care and a buffer — decide knowingly on insurance after reading exclusions.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to set up everyday pet life in the Netherlands",
    description:
      "Orientation steps for expats living with dogs or cats after arrival: housing permission, local vet, identification contacts, public etiquette and cost planning.",
    anchor: "#howto",
  },
  faq: [
    {
      q: "Are pets allowed in Dutch rental apartments?",
      a: "It depends on the landlord, agency and building (VvE) rules. Some homes allow pets, others ban them or require written permission. Always confirm in writing before you sign or move a pet in.",
    },
    {
      q: "Do dogs and cats need a microchip in the Netherlands?",
      a: "Microchip identification is a common practical standard and often ties into registration or passport workflows. Ask your veterinarian what applies to your pet and how to keep owner contact details current.",
    },
    {
      q: "How do I find an English-speaking vet?",
      a: "Call nearby practices and ask about English support, new-client intake and emergency hours. Expat communities can share orientation, but choose based on access and communication — not social-media rankings.",
    },
    {
      q: "Is pet insurance mandatory?",
      a: "No. Pet insurance is optional. Indicative 2026 premiums often land around €10–€26 per month for cats and €20–€50 for dogs for mainstream packages, with broader cover costing more. Some owners buy a policy; others keep a savings buffer. Compare exclusions, waiting periods and annual maxima carefully if you buy cover.",
    },
    {
      q: "What do pet sitting, daycare and training cost in the Netherlands?",
      a: "Orientation only for 2026: dog daycare often ~€13–€35 per day; boarding/pension ~€20–€55 per night; walks ~€10–€25; overnight sitting varies widely (often tens of euros per night). Group training courses commonly land around €100–€250+. Always confirm live rates with local providers.",
    },
    {
      q: "Can my dog be off-leash in Dutch parks?",
      a: "Only where local signs allow it. Many areas require a leash. When unsure, keep the leash on and follow municipal rules for your city.",
    },
    {
      q: "Where do I learn about bringing a pet into the Netherlands?",
      a: "Use the Bringing pets to the Netherlands move guide for import rules, documents and travel timing. This Pets page covers everyday life after arrival.",
    },
    {
      q: "Is this veterinary or legal advice?",
      a: "No. ExpatLife provides general orientation only. Follow your veterinarian for clinical care and confirm lease or municipal rules with the responsible parties.",
    },
  ],
  relatedGuidesTips: [
    "Import & travel paperwork → Bringing pets.",
    "Specialist pet movers → Pet relocation companies.",
    "Family cluster sibling → Giving birth.",
    "Family culture → Parenting.",
    "Parks for families → Family activities.",
    "Rentals → Rental contracts and deposits.",
    "Household move context → Moving with family.",
  ],
  relatedGuides: [
    {
      label: "Bringing pets to the Netherlands",
      href: BRINGING_PETS_PATH,
      status: "live",
      description: "Import, documents and travel — the move guide this page complements.",
    },
    {
      label: "Pet relocation companies",
      href: PET_RELOCATION_COMPANIES_PATH,
      status: "live",
      description: "Specialist pet import/export and flight-pet logistics providers — IATA crates and quarantine orientation.",
    },
    {
      label: "Giving birth in the Netherlands",
      href: GIVING_BIRTH_NETHERLANDS_PATH,
      status: "live",
      description: "Family cluster sibling — birth-day orientation for expat families.",
    },
    {
      label: "Parenting in the Netherlands",
      href: PARENTING_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch parenting culture and everyday family life.",
    },
    {
      label: "Family activities",
      href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Parks, museums and outings — pair with pet etiquette outdoors.",
    },
    {
      label: "Rental contracts and deposits",
      href: RENTING_PATH,
      status: "live",
      description: "Lease orientation beside landlord pet rules.",
    },
    {
      label: "Moving with family",
      href: MOVING_WITH_FAMILY_PATH,
      status: "live",
      description: "Broader family relocation planning context.",
    },
  ] satisfies PetsLink[],
  familyHubTips: [
    "Pets is the everyday animal-life cornerstone in the Family cluster.",
    "Giving birth is the cluster sibling for birth-day orientation.",
    "Parenting remains the wider family-culture hub.",
    "Bringing pets stays under Move for import paperwork.",
  ],
  familyHubCards: [
    {
      label: "Pets in the Netherlands",
      href: PETS_NETHERLANDS_PATH,
      status: "live",
      description: "Everyday pet life after arrival — you are here.",
    },
    {
      label: "Giving birth",
      href: GIVING_BIRTH_NETHERLANDS_PATH,
      status: "live",
      description: "Family cluster sibling — birth day and first hours.",
    },
    {
      label: "Parenting",
      href: PARENTING_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch parenting culture and everyday family life.",
    },
    {
      label: "Family activities",
      href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Parks and outings for expat families.",
    },
    {
      label: "Bringing pets",
      href: BRINGING_PETS_PATH,
      status: "live",
      description: "Move guide — import and travel paperwork.",
    },
  ] satisfies PetsLink[],
  exploreNextCards: [
    {
      label: "Bringing pets",
      href: BRINGING_PETS_PATH,
      status: "live",
      description: "Need import or travel docs? Start with the move guide.",
    },
    {
      label: "Pet relocation companies",
      href: PET_RELOCATION_COMPANIES_PATH,
      status: "live",
      description: "Compare specialist pet movers for crates, flights and ground transfer.",
    },
    {
      label: "Giving birth",
      href: GIVING_BIRTH_NETHERLANDS_PATH,
      status: "live",
      description: "Family cluster sibling — birth-day orientation.",
    },
    {
      label: "Parenting",
      href: PARENTING_NETHERLANDS_PATH,
      status: "live",
      description: "Widen into Dutch family culture.",
    },
    {
      label: "Rental contracts",
      href: RENTING_PATH,
      status: "live",
      description: "Continue housing admin with pet filters in mind.",
    },
    {
      label: "Family activities",
      href: FAMILY_ACTIVITIES_NETHERLANDS_PATH,
      status: "live",
      description: "Plan park days with kids and pets thoughtfully.",
    },
    {
      label: "Moving with family",
      href: MOVING_WITH_FAMILY_PATH,
      status: "live",
      description: "Zoom out to family relocation planning.",
    },
  ] satisfies PetsLink[],
  exploreNextTips: [
    "Import paperwork → Bringing pets.",
    "Specialist pet movers → Pet relocation companies.",
    "Cluster sibling → Giving birth.",
    "Family culture → Parenting.",
    "Housing search → Rental contracts.",
  ],
  officialSources: [
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "Official Dutch government orientation portal",
    },
    {
      label: "Netherlands Worldwide",
      href: "https://www.netherlandsworldwide.nl/",
      description: "Practical official orientation for living in the Netherlands",
    },
    {
      label: "NVWA — Netherlands Food and Consumer Product Safety Authority",
      href: "https://www.nvwa.nl/zoeken?zoekterm=gezelschapsdieren",
      description: "Official orientation themes that can touch companion animals — verify current pages",
    },
    {
      label: "Licentiedierenartsen / find a vet orientation",
      href: "https://www.licentiedierenartsen.nl/",
      description: "Starting point many residents use when locating veterinary practices — verify locally",
    },
    {
      label: "Your municipality website",
      href: "https://www.government.nl/topics/municipalities",
      description: "Local leash, waste and park rules are often municipal — check your city site",
    },
  ],
  visualTextDetails: {
    intro: {
      title: "From the visual — four building blocks",
      items: [
        "Confirm housing pet rules in writing.",
        "Chip and registration contacts current.",
        "Choose a local vet and after-hours path.",
        "Learn parks and apartment etiquette.",
      ],
    },
    snapshot: {
      title: "From the visual — six building blocks",
      items: [
        "Housing permission.",
        "Microchip norms.",
        "Local vet.",
        "Insurance orientation.",
        "Leash and park etiquette.",
        "Monthly cost bands.",
      ],
    },
    housing: {
      title: "From the visual — housing checks",
      items: [
        "Lease pet clause.",
        "Landlord written approval.",
        "VvE / building rules.",
        "Keep proof in one folder.",
      ],
    },
    chipRegistration: {
      title: "From the visual — ID habits",
      items: [
        "Scan and store the chip number.",
        "Update owner contacts after moves.",
        "Keep passport or registry notes handy.",
        "Ask your vet about local norms.",
      ],
    },
    vet: {
      title: "From the visual — vet setup",
      items: [
        "Register nearby.",
        "Ask about English support.",
        "Transfer prior records.",
        "Save after-hours contacts.",
      ],
    },
    insurance: {
      title: "From the visual — policy questions",
      items: [
        "Cover vs exclusions.",
        "Waiting periods and annual maxima.",
        "Indicative premium bands (verify live quotes).",
        "Age and pre-existing clauses.",
      ],
    },
    parks: {
      title: "From the visual — public manners",
      items: [
        "Follow leash signs.",
        "Scoop by default.",
        "Watch bike paths.",
        "Apartment hallway courtesy.",
      ],
    },
    costs: {
      title: "From the visual — cost stack",
      items: [
        "Food, litter and gear.",
        "Routine vet and preventatives.",
        "Optional insurance premiums.",
        "Daycare, sitting, walking, training.",
        "Unexpected care buffer.",
      ],
    },
    scenarios: {
      title: "From the visual — first steps",
      items: [
        "Get housing proof in writing.",
        "Book a settling vet visit.",
        "Plan weekday care realistically.",
        "Use Bringing pets for import leftovers.",
      ],
    },
    mistakes: {
      title: "From the visual — fix patterns",
      items: [
        "Do not assume pets are allowed.",
        "Register a vet before emergencies.",
        "Keep chip contacts current.",
        "Budget a care buffer.",
      ],
    },
    checklist: {
      title: "From the visual — readiness",
      items: [
        "Housing permission saved.",
        "Chip and contacts updated.",
        "Vet and after-hours saved.",
        "Etiquette kit ready.",
      ],
    },
  },
  disclosure:
    "General information only. Not veterinary, legal or insurance advice. Some links may be affiliate links; if you use them, we may earn a commission at no extra cost to you.",
};

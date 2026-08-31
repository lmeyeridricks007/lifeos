import {
  AMSTERDAM_APPOINTMENT_LINKS,
  EINDHOVEN_APPOINTMENT_LINKS,
  THE_HAGUE_APPOINTMENT_LINKS,
} from "@/src/data/cities/municipalityAppointmentLinks";

export const REGISTERING_YOUR_ADDRESS_NETHERLANDS_PATH =
  "/netherlands/practical-life/registering-your-address-netherlands/" as const;

export const MUNICIPALITY_SERVICES_PATH = "/netherlands/practical-life/municipality-services-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const BSN_NETHERLANDS_PATH = "/netherlands/practical-life/bsn-netherlands/" as const;
export const DIGID_NETHERLANDS_PATH = "/netherlands/practical-life/digid-netherlands/" as const;
export const LOCAL_TAXES_NETHERLANDS_PATH = "/netherlands/practical-life/local-taxes-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const REGISTER_ADDRESS_LEGACY_PATH = "/netherlands/register-address-netherlands/" as const;
export const BSN_REGISTRATION_PATH = "/netherlands/bsn-registration/" as const;
export const DIGID_AWARENESS_PATH = "/netherlands/digid-awareness/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const OPEN_BANK_ACCOUNT_PATH = "/netherlands/open-bank-account-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;

export type PracticalLifeLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type TipCard = {
  title: string;
  body: string;
};

export type RegistrationStep = {
  step: string;
  detail: string;
};

export type MunicipalityCityCard = {
  city: string;
  population: string;
  href: string;
  website: string;
  appointmentNote: string;
  expatServices: string;
};

const visual = (slug: string, version: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-address-registration-${slug}-${version}.png`,
  alt,
  caption,
});

export const registeringYourAddressNetherlandsPage = {
  slug: "registering-your-address-netherlands",
  path: REGISTERING_YOUR_ADDRESS_NETHERLANDS_PATH,
  hubPath: MOVING_TO_NETHERLANDS_PATH,
  parentGuidePath: MUNICIPALITY_SERVICES_PATH,
  publish: true,
  publishDate: "2026-10-11",
  seo: {
    title: "Registering Your Address in the Netherlands | Complete Expat Guide",
    description:
      "Learn how to register your address in the Netherlands, obtain a BSN, work with your municipality and complete one of the most important steps after moving.",
    keywords: [
      "register address netherlands",
      "address registration netherlands",
      "municipality registration netherlands",
      "expat address registration netherlands",
      "register with gemeente netherlands",
      "bsn registration netherlands",
      "moving netherlands registration",
      "dutch municipality registration",
      "register residence netherlands",
      "gemeente registration",
    ],
  },
  hero: {
    eyebrow: "Practical life guide",
    pageTitle: "Registering Your Address in the Netherlands",
    subtitle:
      "Learn how address registration works, what documents you need and how registration connects to your BSN, healthcare, taxes and daily life in the Netherlands.",
    primaryCta: { label: "Understand Registration", href: "#intro" },
    secondaryCta: { label: "Explore Municipality Services", href: MUNICIPALITY_SERVICES_PATH },
    image: {
      src: "/images/heroes/netherlands-address-registration-hero-v2.png",
      alt: "Photorealistic scene of an international couple outside a modern Dutch gemeente city hall on a bright morning, holding a folder with passport, rental contract and appointment confirmation, with bicycles, canal houses and a tree-lined street in the background.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#essentials", label: "Essentials" },
    { href: "#understanding", label: "What it is" },
    { href: "#timing", label: "When" },
    { href: "#who", label: "Who" },
    { href: "#documents", label: "Documents" },
    { href: "#appointments", label: "Appointments" },
    { href: "#bsn", label: "BSN" },
    { href: "#digital", label: "DigiD" },
    { href: "#temporary", label: "Temporary stay" },
    { href: "#moving", label: "Moving" },
    { href: "#consequences", label: "Why it matters" },
    { href: "#cities", label: "Cities" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#next-services", label: "Next steps" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    overview: visual(
      "overview",
      "premium-v2",
      "Premium infographic explaining why address registration matters for expats in the Netherlands.",
      "Registration connects BSN issuance, healthcare, taxes, employment, banking and government services."
    ),
    snapshot: visual(
      "snapshot",
      "premium-v2",
      "Premium infographic snapshot of Dutch address registration essentials for newcomers.",
      "Appointments, BSN, DigiD, document packs and keeping records up to date are the core themes."
    ),
    understanding: visual(
      "understanding",
      "premium-v2",
      "Premium infographic explaining Dutch address registration and the population register.",
      "Residents register their home address with the municipality where they live."
    ),
    timing: visual(
      "timing",
      "premium-v2",
      "Premium infographic timeline for when to register after arriving in the Netherlands.",
      "Book early, prepare documents and align registration with your housing and permit timeline."
    ),
    who: visual(
      "who",
      "premium-v2",
      "Premium infographic showing who typically needs to register an address in the Netherlands.",
      "Workers, students, families, partners, entrepreneurs and long-term residents often register locally."
    ),
    documents: visual(
      "documents",
      "premium-v2",
      "Premium infographic of typical documents for Dutch municipality address registration.",
      "Passport, residence documents, rental agreement and proof of address are common examples."
    ),
    appointments: visual(
      "appointments",
      "premium-v2",
      "Premium infographic step-by-step municipality registration appointment flow.",
      "Find your gemeente, book, gather documents, attend, confirm registration and follow next steps."
    ),
    bsn: visual(
      "bsn",
      "premium-v2",
      "Premium infographic linking address registration to BSN issuance in the Netherlands.",
      "The BSN supports work, healthcare, taxes, banking and government services."
    ),
    digital: visual(
      "digital",
      "premium-v2",
      "Premium infographic showing digital government steps after address registration.",
      "DigiD, healthcare registration, banking and employer onboarding often follow registration."
    ),
    temporary: visual(
      "temporary",
      "premium-v2",
      "Premium infographic explaining temporary accommodation and address registration scenarios.",
      "Serviced apartments, corporate housing, short-term rentals and other setups vary by municipality."
    ),
    movingWithin: visual(
      "moving-within",
      "premium-v2",
      "Premium infographic explaining how to update your address when moving within the Netherlands.",
      "Report address changes when moving cities or neighborhoods to keep records accurate."
    ),
    consequences: visual(
      "consequences",
      "premium-v2",
      "Premium infographic explaining why address registration is important for expats.",
      "Registration affects healthcare, employment, banking, government services and taxation systems."
    ),
    cities: visual(
      "cities",
      "premium-v2",
      "Premium infographic map of major Dutch municipality registration services for expats.",
      "Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and Groningen differ in appointment access."
    ),
    checklist: visual(
      "checklist",
      "premium-v2",
      "Premium infographic checklist for address registration after moving to the Netherlands.",
      "Secure housing, gather documents, book appointments, obtain BSN and set up DigiD and healthcare."
    ),
    mistakes: visual(
      "mistakes",
      "premium-v2",
      "Premium infographic of common address registration mistakes expats make in the Netherlands.",
      "Avoid late bookings, missing documents, ignored letters and delayed DigiD setup."
    ),
    nextServices: visual(
      "next-services",
      "premium-v2",
      "Premium infographic journey map of government services after address registration.",
      "BSN, DigiD, health insurance, municipality services, banking and taxes are common next steps."
    ),
    faq: visual(
      "faq",
      "premium-v2",
      "Premium infographic summarizing common address registration FAQ answers for expats.",
      "Quick orientation on timing, documents, temporary accommodation and BSN connection."
    ),
    sources: visual(
      "sources",
      "premium-v2",
      "Premium infographic showing official address registration resources in the Netherlands.",
      "Verify current requirements directly with Government.nl, Rijksoverheid and your municipality."
    ),
    relatedGuides: visual(
      "related-guides",
      "premium-v2",
      "Premium infographic connecting address registration to municipality, BSN, DigiD and housing guides.",
      "Continue into the guide that matches your next onboarding step."
    ),
    exploreNext: visual(
      "explore-next",
      "premium-v2",
      "Premium infographic explore-next cards after address registration in the Netherlands.",
      "Move into BSN, DigiD, municipality services, housing and health insurance setup."
    ),
  },
  intro: {
    heading: "Why Address Registration Matters",
    paragraphs: [
      "Most people moving to the Netherlands need to register their residential address with the municipality where they live. This is one of the first practical steps after securing accommodation.",
      "Registration is not just paperwork — it connects to BSN issuance, healthcare, taxes, employment, banking and access to many government services.",
      "Requirements vary by nationality, permit route, housing type and municipality. This guide simplifies the process and helps you prepare — but always verify current rules with your gemeente and official sources.",
    ],
  },
  quickAnswer: {
    summary: "Most newcomers register shortly after moving into a Dutch residence.",
    bullets: [
      "Registration is typically linked to BSN issuance and official post delivery.",
      "Appointment availability, document lists and temporary-accommodation rules differ by city.",
      "Keep your address updated when you move within the Netherlands.",
    ],
    note: "Requirements vary by nationality, permit route and municipality — verify with official sources before your appointment.",
  },
  snapshotCards: [
    {
      title: "Municipality appointment often required",
      body: "Most gemeenten use appointments for registration. Book as early as possible after you know your move-in date.",
    },
    {
      title: "BSN typically issued during registration",
      body: "Many newcomers receive a BSN through municipality registration rather than a separate standalone process.",
    },
    {
      title: "Required for many services",
      body: "Employers, insurers, banks and government portals often expect a registered address and BSN.",
    },
    {
      title: "Must be kept up to date",
      body: "Report address changes when you move cities or neighborhoods to keep records and post accurate.",
    },
    {
      title: "Linked to DigiD access",
      body: "DigiD activation usually requires a registered Dutch address and BSN — apply soon after registration.",
    },
    {
      title: "Connected to taxes and healthcare",
      body: "Registration timing can affect when municipal letters arrive and when you can complete healthcare setup.",
    },
  ] satisfies TipCard[],
  understanding: {
    heading: "Understanding Dutch Address Registration",
    paragraphs: [
      "The Netherlands maintains an official population register (Basisregistratie Personen, BRP). Residents generally register their home address with the municipality where they live.",
      "Registration helps the government maintain accurate records for taxes, elections, public services and official correspondence. For expats, it is also the practical gateway to BSN issuance and many day-one admin tasks.",
      "Your registered address should reflect where you actually live. Rules for short stays, temporary accommodation and cross-border situations can differ — verify your route with official sources.",
    ],
    orientationPoints: [
      "Registration happens at the gemeente for your residential address, not at national immigration offices.",
      "Landlords, hotels and short-stay providers cannot register you — you register yourself at the municipality.",
      "Some cities publish English newcomer pages and expat desks; others rely mainly on Dutch-language portals.",
      "Keep copies of registration confirmation — employers and service providers often request them.",
    ],
    brpKeyTerms: [
      { title: "BRP (Basisregistratie Personen)", body: "The official population register where your home address, household composition and core identity data are recorded." },
      { title: "Gemeente", body: "Your local municipality — the authority that processes registration appointments and maintains your BRP record." },
      { title: "Inschrijving", body: "Dutch term for registration; you will see it on appointment portals and confirmation letters." },
      { title: "Uitschrijving", body: "Deregistration when leaving the Netherlands or when the gemeente records a move to another municipality." },
    ] satisfies TipCard[],
  },
  timing: {
    heading: "When to Register After Arrival",
    paragraphs: [
      "New arrivals typically register shortly after moving into their Dutch residence. Exact timing depends on your permit route, housing contract and municipality appointment availability.",
      "Book your appointment as early as you can once your address is confirmed. Popular cities can have waiting times, especially during peak relocation seasons.",
      "Align registration with your employer start date, healthcare deadline and banking plans — delays can slow payroll, insurance and official post.",
    ],
    timingTips: [
      "Secure accommodation that qualifies for registration before booking your appointment.",
      "Gather documents while waiting for your slot — missing papers are a common reason for rescheduling.",
      "If you arrive before your lease starts, clarify temporary-stay rules before assuming you can register.",
      "Family members may need separate appointments or joint registration visits depending on the gemeente.",
    ],
    registrationTimingByProfile: [
      { profile: "Employed professional", when: "Within days of move-in", why: "Employers need a BSN for payroll — book before your start date when possible." },
      { profile: "Student (long stay)", when: "After securing qualifying housing", why: "Peak demand in August–September; appointment slots fill quickly." },
      { profile: "Family relocation", when: "Joint or linked appointments", why: "Partners and children register at the same address with combined document packs." },
      { profile: "EU/EEA citizen", when: "Shortly after establishing residence", why: "Immigration route differs but long-term residents still register in the BRP." },
      { profile: "Temporary housing first", when: "Only if the address qualifies", why: "Verify with landlord and gemeente before paying deposits or booking." },
    ],
  },
  whoCards: [
    {
      title: "Workers",
      body: "Employed newcomers usually register to obtain a BSN for payroll, tax and contract onboarding.",
    },
    {
      title: "Students",
      body: "Students staying longer than a short visit often register once they have qualifying accommodation.",
    },
    {
      title: "Families",
      body: "Partners and children may need to register together or in linked appointments at the gemeente.",
    },
    {
      title: "Partners",
      body: "Non-working partners on family routes typically register at the same address as the main permit holder.",
    },
    {
      title: "Entrepreneurs",
      body: "ZZP and business owners register personally even when business registration (KVK) is separate.",
    },
    {
      title: "Long-term residents",
      body: "Anyone establishing a primary Dutch residence generally registers rather than relying on temporary visitor status.",
    },
  ] satisfies TipCard[],
  documents: {
    heading: "Typical Registration Documents",
    paragraphs: [
      "Document requirements vary by municipality, nationality and personal circumstances. The list below shows common examples — not a guarantee of what your gemeente will request.",
      "Bring originals where possible and check whether translations or legalisations are needed for your situation.",
    ],
    documentList: [
      "Valid passport or national ID",
      "Residence permit or route-specific immigration documents",
      "Rental agreement or proof of occupancy",
      "Proof of address (landlord declaration, registration permission or similar)",
      "Birth certificate (sometimes required for family registration)",
      "Marriage or partnership certificate (where relevant)",
    ],
    documentTips: [
      "Ask your gemeente for the exact checklist before your appointment.",
      "Some landlords must sign a registration permission form — confirm this early.",
      "Apostille or translation requirements depend on document origin and municipality policy.",
      "Bring appointment confirmation and contact details for your landlord or housing provider.",
    ],
    documentScenarios: [
      { scenario: "Renting an apartment", typicalDocs: "Passport, rental contract, landlord registration permission", notes: "Landlord signature delays are a common reason for rescheduling." },
      { scenario: "Buying a home", typicalDocs: "Passport, notary letter or deed, proof of occupancy", notes: "Timing often aligns with key handover — confirm with your gemeente." },
      { scenario: "Living with a partner or friend", typicalDocs: "Passport, main tenant permission, proof main resident is registered", notes: "The gemeente may verify who lives at the address." },
      { scenario: "Corporate housing", typicalDocs: "Passport, employer letter, housing provider confirmation", notes: "HR or relocation teams often supply permission templates." },
      { scenario: "Family with children", typicalDocs: "Birth certificates, marriage or partnership docs, children's IDs", notes: "Apostille or certified translation may be required." },
    ],
  },
  registrationSteps: [
    {
      step: "Find your municipality",
      detail: "Identify the gemeente for your residential postcode — this is where you register, not where you work.",
    },
    {
      step: "Schedule an appointment",
      detail: "Book online or by phone. Larger cities often require advance booking with limited walk-in options.",
    },
    {
      step: "Gather required documents",
      detail: "Prepare ID, housing proof and any family or permit documents listed by your municipality.",
    },
    {
      step: "Attend the appointment",
      detail: "Arrive on time with originals. Staff verify your identity, address and household composition.",
    },
    {
      step: "Confirm registration",
      detail: "Keep registration proof safe — employers, banks and insurers may request it.",
    },
    {
      step: "Follow municipality guidance",
      detail: "Complete next steps such as BSN confirmation, DigiD application and healthcare registration.",
    },
  ] satisfies RegistrationStep[],
  bsn: {
    heading: "BSN and Address Registration",
    paragraphs: [
      "Address registration is commonly linked to BSN (Burgerservicenummer) issuance. The BSN is a unique personal number used across Dutch administration.",
      "Employers, tax authorities, health insurers and banks routinely ask for your BSN. Many newcomers receive it through municipality registration rather than a separate appointment.",
    ],
    bsnUses: [
      { title: "Employment and payroll", body: "Employers use the BSN for contracts, payroll tax and social security reporting." },
      { title: "Healthcare", body: "Health insurers and care providers link policies and records to your BSN." },
      { title: "Taxes", body: "Belastingdienst and municipal tax systems use the BSN for correspondence and returns." },
      { title: "Banking", body: "Many banks request a BSN when opening a Dutch account, though policies vary." },
    ] satisfies TipCard[],
  },
  digital: {
    heading: "What Happens After Registration?",
    paragraphs: [
      "After registering your address, many residents move quickly into digital and service setup. DigiD is often the first digital milestone because it unlocks government portals.",
      "Healthcare registration, banking and employer onboarding frequently depend on having a registered address and BSN in place.",
    ],
    afterRegistrationSteps: [
      "Apply for DigiD once you have BSN and post delivery at your registered address.",
      "Arrange Dutch basic health insurance within the required window after registration.",
      "Open or update a bank account using your registration proof and BSN.",
      "Share registration details with your employer for payroll setup.",
      "Check MijnOverheid and gemeente portals for local tax and service information.",
    ],
    digitalServices: [
      { title: "DigiD", body: "Standard login for Dutch government and many benefit or tax portals." },
      { title: "MijnOverheid", body: "Digital mailbox for official government correspondence." },
      { title: "Belastingdienst", body: "Tax letters and filings often require DigiD after registration." },
      { title: "Gemeente portals", body: "Local waste, parking, permits and tax questions may be handled online." },
    ] satisfies TipCard[],
    afterRegistrationTimeline: [
      { phase: "Same week", tasks: "Confirm BSN on registration letter, notify employer, start DigiD application when post begins." },
      { phase: "Week 2", tasks: "Complete DigiD activation, arrange basic health insurance, open or update bank account." },
      { phase: "Week 3–4", tasks: "Check MijnOverheid, review gemeente waste and parking rules, update subscriptions and insurers." },
      { phase: "Ongoing", tasks: "Report address changes promptly; keep registration proof for future service providers." },
    ],
  },
  temporary: {
    heading: "Can You Register at Temporary Accommodation?",
    paragraphs: [
      "Temporary accommodation rules vary widely. Some serviced apartments, corporate housing units and short-term rentals qualify for registration; others do not.",
      "Hotels and many holiday rentals typically cannot be used as a registration address. Staying with friends or family may be possible only when the main resident agrees and the municipality accepts the arrangement.",
      "Always confirm with your housing provider and gemeente before assuming a temporary address qualifies.",
    ],
    temporaryScenarios: [
      { title: "Serviced apartments", body: "Some providers allow registration; others block it in the contract — read terms carefully." },
      { title: "Corporate housing", body: "Employer-arranged housing may include registration support — ask HR and the landlord." },
      { title: "Temporary rentals", body: "Short furnished contracts may or may not permit BRP registration depending on duration and rules." },
      { title: "Hotels", body: "Hotels are generally not registration addresses for long-term residents." },
      { title: "Friends and family", body: "Main tenant or owner permission is usually required; gemeente may verify occupancy." },
    ] satisfies TipCard[],
    temporaryRegistrationTips: [
      "Read your rental contract for explicit registration (inschrijving) permission before signing.",
      "Ask corporate housing providers whether they supply landlord permission forms.",
      "If registration is blocked, you may need different accommodation before BSN and payroll can proceed.",
      "Short-stay platforms often prohibit registration — confirm in writing, not only in the listing.",
    ],
  },
  movingWithin: {
    heading: "Changing Your Address",
    paragraphs: [
      "Residents who move within the Netherlands must update their address with the municipality. This applies when changing neighborhoods within the same city and when relocating to a different gemeente.",
      "Prompt updates keep post, DigiD letters, tax correspondence and local service records accurate. Some cities allow online address changes; others require an appointment.",
    ],
    movingTips: [
      "Report your move before or shortly after your move-in date according to gemeente rules.",
      "Update your address with banks, insurers, employers and subscriptions separately.",
      "Parking permits, waste calendars and local tax accounts may reset when you change cities.",
      "If you temporarily have two addresses, clarify which one is your official residence with the municipality.",
    ],
    movingDeadlineNotes: [
      { situation: "Moving within the same gemeente", action: "Report the new address online or by appointment — rules vary by city.", deadline: "Usually within a few days of move-in" },
      { situation: "Moving to a different gemeente", action: "Register at your new municipality; the old gemeente records the move-out.", deadline: "Before or shortly after move-in date" },
      { situation: "Leaving the Netherlands", action: "Deregister (uitschrijving) at your last gemeente before departure.", deadline: "Before or on departure date" },
      { situation: "Temporary absence abroad", action: "Long absences may affect registration status — check gemeente rules.", deadline: "Varies by duration and circumstances" },
    ],
  },
  consequences: {
    heading: "Why Registration Is Important",
    paragraphs: [
      "Failing to register on time can delay access to essential services. Registration is the foundation for BSN issuance, official post and many employer and insurer processes.",
      "This section is informational only — not legal advice. If you are unsure about your obligation to register, check official sources and your municipality.",
    ],
    impactAreas: [
      { title: "Healthcare", body: "Insurance registration and care access often depend on BSN and a registered address." },
      { title: "Employment", body: "Payroll, contracts and social security reporting typically require a BSN." },
      { title: "Banking", body: "Account opening and identity verification flows often ask for registration proof." },
      { title: "Government services", body: "Benefits, tax letters and digital portals rely on accurate BRP records." },
      { title: "Taxation systems", body: "Municipal and national tax correspondence is tied to your registered address." },
    ] satisfies TipCard[],
    delayExamples: [
      { title: "Payroll blocked", body: "Without BSN, employers may delay contracts or salary processing." },
      { title: "Insurance deadline risk", body: "Basic health insurance registration windows start from your official residence date." },
      { title: "Lost official post", body: "DigiD activation codes and tax letters go to your registered address only." },
      { title: "Bank onboarding stalled", body: "Many banks request registration proof and BSN before completing account setup." },
    ] satisfies TipCard[],
  },
  cityCards: [
    {
      city: "Amsterdam",
      population: "~920,000",
      href: "/netherlands/amsterdam/",
      website: AMSTERDAM_APPOINTMENT_LINKS.cityOfficeImmigration,
      appointmentNote:
        "Book via the City Office immigration appointment form; eligible EU / highly skilled newcomers can use IN Amsterdam instead.",
      expatServices: "IN Amsterdam offers combined registration support for eligible newcomers.",
    },
    {
      city: "Rotterdam",
      population: "~670,000",
      href: "/netherlands/rotterdam/",
      website: "https://www.rotterdam.nl/",
      appointmentNote: "Appointment system via gemeente portal; check dedicated newcomer information pages.",
      expatServices: "Rotterdam publishes multilingual newcomer resources and digital appointment tools.",
    },
    {
      city: "The Hague",
      population: "~560,000",
      href: "/netherlands/the-hague/",
      website: THE_HAGUE_APPOINTMENT_LINKS.movingAndImmigration,
      appointmentNote:
        "Pick the BRP registration page that matches your status, or book via The Hague International Centre if eligible.",
      expatServices: "The Hague International Centre supports many international professionals and families.",
    },
    {
      city: "Utrecht",
      population: "~370,000",
      href: "/netherlands/utrecht/",
      website: "https://www.utrecht.nl/",
      appointmentNote: "Strong digital portal; book early during academic and corporate relocation peaks.",
      expatServices: "Utrecht offers English information for newcomers and international residents.",
    },
    {
      city: "Eindhoven",
      population: "~250,000",
      href: "/netherlands/eindhoven/",
      website: EINDHOVEN_APPOINTMENT_LINKS.onlineBooking,
      appointmentNote:
        "Book Inwonersplein online (mijnafspraakmaken), or Holland Expat Center South for combined municipal + IND if eligible.",
      expatServices: "Holland Expat Center South supports international talent with settling-in and registration appointments.",
    },
    {
      city: "Groningen",
      population: "~240,000",
      href: "/netherlands/groningen/",
      website: "https://www.gemeente.groningen.nl/",
      appointmentNote: "Popular student city — appointment availability tight around academic intake periods.",
      expatServices: "International Welcome Center North supports newcomers in the region.",
    },
    ] satisfies MunicipalityCityCard[],
  cityBookingComparison: [
    {
      city: "Amsterdam",
      bookingChannel: "City Office immigration form or IN Amsterdam (eligible profiles)",
      typicalWait: "Often 2–6 weeks in peak season",
      expatSupport: "IN Amsterdam",
    },
    { city: "Rotterdam", bookingChannel: "Gemeente portal online booking", typicalWait: "Varies; check newcomer pages for current lead times", expatSupport: "Rotterdam International Center" },
    {
      city: "The Hague",
      bookingChannel: "Status-based BRP pages or The Hague International Centre",
      typicalWait: "Often 2–4 weeks; International Centre has its own slots",
      expatSupport: "The Hague International Centre",
    },
    { city: "Utrecht", bookingChannel: "Digital portal; limited walk-in options", typicalWait: "Tight around academic and corporate peaks", expatSupport: "English newcomer pages on utrecht.nl" },
    {
      city: "Eindhoven",
      bookingChannel: "Inwonersplein online booking or Holland Expat Center South",
      typicalWait: "Often 1–2 weeks municipally; Expat Center can be faster",
      expatSupport: "Holland Expat Center South",
    },
    { city: "Groningen", bookingChannel: "Online booking via gemeente portal", typicalWait: "Student intake periods are busiest", expatSupport: "International Welcome Center North" },
  ],
  checklist: [
    "Secure accommodation that qualifies for registration",
    "Gather required documents (ID, housing proof, permits)",
    "Identify your municipality and book an appointment",
    "Attend registration and obtain confirmation",
    "Obtain or confirm your BSN",
    "Apply for DigiD after post delivery starts",
    "Register for Dutch basic health insurance",
    "Update employers, banks and subscriptions with new details",
  ],
  checklistPhases: [
    {
      phase: "Before move-in",
      items: ["Confirm housing allows BRP registration", "Ask landlord for permission form if renting", "Start gathering ID and permit documents"],
    },
    {
      phase: "First week after arrival",
      items: ["Book gemeente appointment immediately", "Prepare document folder with originals", "Notify employer of expected BSN timeline"],
    },
    {
      phase: "After registration",
      items: ["Store registration confirmation safely", "Apply for DigiD when post arrives", "Register health insurance within the required window"],
    },
  ],
  commonMistakes: [
    {
      title: "Waiting too long to book appointments",
      body: "Popular cities fill up quickly — delay pushes back BSN, payroll and insurance timelines.",
    },
    {
      title: "Missing documents at the appointment",
      body: "Incomplete packs are a top reason for rescheduling and wasted slots.",
    },
    {
      title: "Assuming all municipalities are identical",
      body: "Document lists, appointment systems and English support vary by gemeente.",
    },
    {
      title: "Forgetting address updates after moving",
      body: "Stale addresses break post delivery, DigiD activation and tax correspondence.",
    },
    {
      title: "Ignoring municipality communications",
      body: "Tax, waste and parking letters often arrive soon after registration.",
    },
    {
      title: "Not understanding BSN importance",
      body: "Without BSN access, employment and insurance setup stall.",
    },
    {
      title: "Delaying DigiD setup",
      body: "Many government tasks require DigiD — apply once post reaches your registered address.",
    },
    {
      title: "Assuming temporary accommodation qualifies",
      body: "Verify registration eligibility before signing short-stay contracts.",
    },
  ] satisfies TipCard[],
  nextServices: [
    {
      label: "BSN Netherlands",
      href: BSN_NETHERLANDS_PATH,
      status: "comingSoon",
      description: "Focused practical-life guide to BSN routes, documents and timing.",
    },
    {
      label: "DigiD Netherlands",
      href: DIGID_NETHERLANDS_PATH,
      status: "comingSoon",
      description: "Step-by-step digital identity setup after registration.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Mandatory basic insurance setup after obtaining your BSN.",
    },
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      status: "live",
      description: "Broader gemeente services beyond address registration.",
    },
    {
      label: "Open a Bank Account",
      href: OPEN_BANK_ACCOUNT_PATH,
      status: "live",
      description: "Banking setup that often follows BSN and registration proof.",
    },
    {
      label: "Taxes Hub",
      href: TAXES_HUB_PATH,
      status: "live",
      description: "National and local tax orientation after registration.",
    },
  ] satisfies PracticalLifeLink[],
  faqs: [
    {
      q: "How do I register my address in the Netherlands?",
      a: "Identify the municipality for your residential address, book an appointment, gather the documents your gemeente lists and attend the registration visit. Keep your confirmation safe for employers and service providers.",
    },
    {
      q: "When should I register after arriving?",
      a: "Most newcomers register shortly after moving into qualifying accommodation. Book as early as possible once your address is confirmed because appointment waiting times vary by city and season.",
    },
    {
      q: "What documents are typically needed?",
      a: "Common examples include valid ID, residence documents, rental agreement or proof of address and sometimes birth or marriage certificates. Exact requirements depend on your municipality and personal situation.",
    },
    {
      q: "Can I register at temporary accommodation?",
      a: "Sometimes — it depends on the accommodation type and municipality rules. Serviced apartments, corporate housing and staying with friends may qualify in some cases; hotels usually do not. Always verify before signing.",
    },
    {
      q: "How do I get a BSN?",
      a: "Many newcomers receive a BSN through municipality registration. If you already registered but did not receive a BSN, contact your gemeente and check official guidance.",
    },
    {
      q: "What happens if I move within the Netherlands?",
      a: "You typically report your new address to the municipality — either online or by appointment. Update banks, insurers and employers separately.",
    },
    {
      q: "Can I register before arrival?",
      a: "Generally no — you need a qualifying Dutch residential address. Prepare documents before arrival, but registration itself usually happens after you move in.",
    },
    {
      q: "Why is registration important?",
      a: "Registration connects to BSN issuance, official post, healthcare, employment, banking and government services. Delays can slow down many practical setup steps after moving.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "National government portal with living-in-the-Netherlands orientation.",
    },
    {
      label: "NederlandWereldwijd",
      href: "https://www.nederlandwereldwijd.nl/",
      description: "Official guidance for Dutch nationals abroad and newcomer context.",
    },
    {
      label: "Rijksoverheid",
      href: "https://www.rijksoverheid.nl/",
      description: "Central government information on registration and public services.",
    },
    {
      label: "Your municipality website",
      href: "https://www.government.nl/topics/municipalities",
      description: "Always verify appointment systems, document lists and fees locally.",
    },
  ],
  sourceUsageTips: [
    "Check your gemeente website for the latest appointment and document checklist.",
    "Use Government.nl for national context, then confirm local rules with your municipality.",
    "Registration requirements can change — verify before your appointment, not from memory.",
    "This guide is general information only, not legal or immigration advice.",
  ],
  relatedGuides: [
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      status: "live",
      description: "Broader gemeente services including taxes, parking and waste.",
    },
    {
      label: "BSN Netherlands",
      href: BSN_NETHERLANDS_PATH,
      status: "comingSoon",
      description: "Deep dive on BSN routes and documents.",
    },
    {
      label: "DigiD Netherlands",
      href: DIGID_NETHERLANDS_PATH,
      status: "comingSoon",
      description: "Digital identity setup after registration.",
    },
    {
      label: "Housing in the Netherlands",
      href: HOUSING_HUB_PATH,
      status: "live",
      description: "Renting, buying and accommodation before registration.",
    },
    {
      label: "Moving to the Netherlands",
      href: MOVING_TO_NETHERLANDS_PATH,
      status: "live",
      description: "Full relocation hub and arrival sequencing.",
    },
  ] satisfies PracticalLifeLink[],
  whoSection: {
    heading: "Who Must Register?",
    paragraphs: [
      "Registration obligations depend on nationality, permit route and length of stay. These cards describe common scenarios — verify your situation with official sources.",
    ],
    eligibilityNotes: [
      "Long-term residents establishing a primary Dutch home generally register in the BRP.",
      "Short tourist stays typically do not require registration — length and purpose matter.",
      "Cross-border commuters and specific permit routes may have different rules.",
      "Children and non-working partners usually register at the same address as the main household member.",
    ],
  },
  essentialsSection: {
    heading: "Registration Essentials at a Glance",
    paragraphs: [
      "These core facts apply to most newcomer routes. Use them to plan your first weeks — then confirm the exact checklist with your gemeente before your appointment.",
    ],
    essentialsFacts: [
      "You register at the gemeente where you live — not where you work.",
      "Appointment booking is required in most major cities; walk-ins are rare.",
      "BSN usually arrives through registration rather than a separate appointment.",
      "DigiD activation codes are posted to your registered address only.",
      "Report every internal move to keep post, taxes and digital access accurate.",
    ],
  },
  appointmentsSection: {
    heading: "Registering With Your Municipality",
    paragraphs: [
      "Follow this sequence to book and complete your registration appointment. Exact processes differ by gemeente — use your municipal website as the source of truth.",
    ],
    appointmentChannels: [
      "Online booking through your gemeente website is the norm in larger cities.",
      "Phone booking may be available where online slots are full or for complex cases.",
      "Walk-in registration is rare in Amsterdam, Rotterdam, Utrecht and The Hague.",
      "Some gemeenten offer separate expat or international desks with English support.",
    ],
  },
  citiesSection: {
    heading: "Major Municipality Registration Services",
    paragraphs: [
      "Compare appointment access, expat desks and online tools across popular relocation cities. Population figures are orientation only.",
    ],
  },
  checklistSection: {
    heading: "Address Registration Checklist",
    paragraphs: ["Use this sequence after confirming your move-in date and qualifying accommodation."],
  },
  mistakesSection: {
    heading: "Common Registration Mistakes",
    paragraphs: [
      "These are the address registration errors expats most often make after arriving in the Netherlands.",
    ],
  },
  nextServicesSection: {
    heading: "Services You'll Likely Need Next",
    paragraphs: [
      "After registration, move into BSN confirmation, DigiD, healthcare, banking and broader municipality services.",
    ],
    priorityOrder: [
      "Confirm BSN details and share them with your employer.",
      "Apply for DigiD once post delivery starts at your registered address.",
      "Register for Dutch basic health insurance within the mandatory window.",
      "Open or update a bank account using registration proof.",
      "Read municipality services for local taxes, waste and parking.",
    ],
  },
  faqSection: {
    heading: "Address Registration FAQ",
    paragraphs: [
      "Use these quick answers for orientation before checking your gemeente website and official sources.",
    ],
  },
  sourcesSection: {
    heading: "Official Resources",
    paragraphs: [
      "Registration requirements and procedures can change. Always verify current information directly with your municipality.",
    ],
  },
  relatedSection: {
    heading: "Related Guides",
    paragraphs: [
      "Continue from address registration into municipality services, BSN, DigiD, housing and relocation guides.",
    ],
  },
  exploreNextSection: {
    heading: "Complete Your Dutch Onboarding",
    paragraphs: [
      "Move from address registration into BSN and DigiD setup, healthcare, housing and your broader relocation checklist.",
    ],
  },
  exploreNextTips: [
    "Open the BSN guide immediately after registration to confirm documents employers and insurers will request.",
    "Apply for DigiD as soon as post arrives at your registered address — many government tasks depend on it.",
    "Read municipality services next for local taxes, waste rules and parking permits at your new address.",
  ],
  exploreNextCards: [
    {
      label: "BSN Guide",
      href: BSN_REGISTRATION_PATH,
      status: "live",
      description: "Live BSN guide with documents, timing and employer context.",
    },
    {
      label: "DigiD Awareness",
      href: DIGID_AWARENESS_PATH,
      status: "live",
      description: "Why DigiD matters and when to apply after registration.",
    },
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      status: "live",
      description: "Local taxes, parking, waste and family services.",
    },
    {
      label: "Housing Guide",
      href: HOUSING_HUB_PATH,
      status: "live",
      description: "Secure qualifying accommodation before registration.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Mandatory insurance setup after BSN and registration.",
    },
  ] satisfies PracticalLifeLink[],
  visualTextDetails: {
    overview: {
      title: "Why registration comes first",
      items: [
        "Address registration is the gateway to BSN, official post and many employer processes.",
        "Most newcomers register at the gemeente where they live, usually by appointment.",
        "Timing affects healthcare, banking and tax correspondence — plan early.",
        "Rules vary by housing type, nationality and municipality.",
        "Verify current requirements with official sources before your appointment.",
      ],
    },
    snapshot: {
      title: "Registration essentials",
      items: [
        "Book municipality appointments as soon as your address is confirmed.",
        "Prepare ID, housing proof and route-specific documents in advance.",
        "BSN often follows registration — keep confirmation documents safe.",
        "Apply for DigiD once post delivery starts at your registered address.",
        "Update your address promptly whenever you move within the Netherlands.",
      ],
    },
    understanding: {
      title: "Population register basics",
      items: [
        "The BRP is the official population register maintained by municipalities.",
        "Your registered address should match where you actually live.",
        "Registration supports accurate tax, election and public-service records.",
        "Landlords cannot register on your behalf — you visit the gemeente.",
        "Short-stay and cross-border rules may differ — verify your route.",
      ],
    },
    timing: {
      title: "Timing checklist",
      items: [
        "Register after moving into qualifying accommodation, not before arrival.",
        "Book appointments early — waiting times vary by city and season.",
        "Align registration with employer start dates and insurance deadlines.",
        "Gather documents while waiting for your appointment slot.",
        "Family members may need linked or separate appointments.",
      ],
    },
    who: {
      title: "Common registrant profiles",
      items: [
        "Employed professionals need BSN access for payroll and contracts.",
        "Students register once they have long-term qualifying housing.",
        "Families register partners and children according to gemeente rules.",
        "Entrepreneurs register personally even when KVK registration is separate.",
        "Long-term residents establish a primary Dutch address in the BRP.",
      ],
    },
    documents: {
      title: "Document preparation",
      items: [
        "Valid passport or national ID is almost always required.",
        "Bring residence permits or route-specific immigration documents.",
        "Rental agreement and landlord permission may be required for tenants.",
        "Birth and marriage certificates are sometimes needed for family registration.",
        "Ask your gemeente for the exact checklist — do not rely on generic lists alone.",
      ],
    },
    appointments: {
      title: "Appointment flow",
      items: [
        "Identify the gemeente for your residential postcode.",
        "Book online or by phone — walk-ins are rare in larger cities.",
        "Attend with originals and appointment confirmation.",
        "Staff verify identity, address and household composition.",
        "Keep registration proof for employers, banks and insurers.",
      ],
    },
    bsn: {
      title: "BSN connection",
      items: [
        "BSN is used for employment, healthcare, taxes and banking.",
        "Many newcomers receive BSN through municipality registration.",
        "Store registration confirmation — service providers often request it.",
        "BSN rules differ for short stays and specific permit routes.",
        "Use dedicated BSN guides for deeper detail beyond this overview.",
      ],
    },
    digital: {
      title: "Post-registration digital setup",
      items: [
        "Apply for DigiD after BSN and post delivery at your address.",
        "MijnOverheid collects official government correspondence digitally.",
        "Healthcare registration follows BSN and address registration.",
        "Employers need BSN and registration proof for payroll setup.",
        "Gemeente portals cover local taxes, waste and parking information.",
      ],
    },
    temporary: {
      title: "Temporary accommodation notes",
      items: [
        "Serviced apartments may or may not allow registration — read contracts.",
        "Corporate housing sometimes includes registration support via HR.",
        "Hotels are generally not valid registration addresses.",
        "Staying with friends requires main-resident permission and gemeente approval.",
        "Verify eligibility before paying deposits on short-stay housing.",
      ],
    },
    movingWithin: {
      title: "Internal moves",
      items: [
        "Report address changes to your new gemeente when moving cities.",
        "Some address updates can be done online; others need appointments.",
        "Update banks, insurers and subscriptions separately from BRP records.",
        "Parking permits and waste rules may change with your new postcode.",
        "Prompt updates prevent lost post and DigiD activation issues.",
      ],
    },
    consequences: {
      title: "Impact of delays",
      items: [
        "Delayed registration slows BSN access and payroll onboarding.",
        "Healthcare registration windows depend on BSN and address records.",
        "Banks often request registration proof during account opening.",
        "Government benefits and tax letters require accurate BRP data.",
        "This is orientation only — not legal advice on registration obligations.",
      ],
    },
    cities: {
      title: "City differences",
      items: [
        "Amsterdam and The Hague run strong expat-facing registration support.",
        "Rotterdam and Utrecht combine digital portals with appointment demand peaks.",
        "Eindhoven and Groningen serve large international student and talent populations.",
        "Appointment lead times differ more than underlying national rules.",
        "Open your city guide alongside your gemeente website when planning.",
      ],
    },
    checklist: {
      title: "Registration sequence",
      items: [
        "Confirm housing qualifies for BRP registration.",
        "Book gemeente appointment and gather documents.",
        "Attend registration and secure confirmation.",
        "Obtain or verify BSN details.",
        "Apply for DigiD, health insurance and banking in parallel where possible.",
      ],
    },
    mistakes: {
      title: "Avoid these errors",
      items: [
        "Booking appointments too late in peak relocation seasons.",
        "Arriving without landlord permission or complete document packs.",
        "Assuming hotel or holiday rentals qualify as registration addresses.",
        "Ignoring Dutch letters after registration — they may be tax or gemeente notices.",
        "Forgetting to update address records after internal moves.",
      ],
    },
    nextServices: {
      title: "After registration",
      items: [
        "BSN unlocks employment, insurance and banking workflows.",
        "DigiD enables online government and tax portal access.",
        "Health insurance is mandatory within the required window.",
        "Municipality services cover local taxes, waste and parking.",
        "Tax hub guides help interpret letters that arrive after registration.",
      ],
    },
    faq: {
      title: "FAQ highlights",
      items: [
        "Register at the gemeente where you live, usually by appointment.",
        "BSN often follows registration for many newcomer routes.",
        "Temporary accommodation eligibility varies — verify before signing.",
        "Update your address when moving within the Netherlands.",
        "Exact rules depend on municipality, nationality and permit type.",
      ],
    },
    sources: {
      title: "Official verification",
      items: [
        "Government.nl and Rijksoverheid publish national registration context.",
        "NederlandWereldwijd supports official newcomer orientation.",
        "Your gemeente website has the authoritative appointment and document list.",
        "Requirements change — verify close to your appointment date.",
      ],
    },
    relatedGuides: {
      title: "Continue your setup",
      items: [
        "Municipality services guide covers taxes, parking and waste after registration.",
        "Housing hub helps secure qualifying accommodation before you register.",
        "Moving hub sequences arrival tasks beyond address registration.",
        "BSN and DigiD child guides provide deeper focused detail when they ship.",
      ],
    },
    exploreNext: {
      title: "Suggested next steps",
      items: [
        "Complete BSN and DigiD setup immediately after registration.",
        "Arrange health insurance within the mandatory window.",
        "Open banking and notify your employer with registration proof.",
        "Read municipality services for local tax and waste rules.",
        "Use housing guides if you still need longer-term accommodation.",
      ],
    },
  },
  howToSchema: {
    name: "How to register your address in the Netherlands",
    description:
      "Step-by-step orientation for booking a municipality appointment and completing address registration after moving to the Netherlands.",
    steps: [
      { name: "Find your municipality", text: "Identify the gemeente responsible for your residential postcode." },
      { name: "Schedule an appointment", text: "Book a registration appointment through the municipal portal or phone line." },
      { name: "Gather required documents", text: "Prepare valid ID, housing proof and any permit or family documents listed by your gemeente." },
      { name: "Attend the appointment", text: "Bring originals to the appointment for identity and address verification." },
      { name: "Confirm registration", text: "Keep registration confirmation for employers, banks and insurers." },
      { name: "Complete follow-up steps", text: "Obtain or verify your BSN, apply for DigiD and arrange healthcare and banking setup." },
    ],
  },
};

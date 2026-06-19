export const DIGID_NETHERLANDS_PATH = "/netherlands/practical-life/digid-netherlands/" as const;

export const MUNICIPALITY_SERVICES_PATH = "/netherlands/practical-life/municipality-services-netherlands/" as const;
export const REGISTERING_ADDRESS_PATH = "/netherlands/practical-life/registering-your-address-netherlands/" as const;
export const BSN_NETHERLANDS_PATH = "/netherlands/practical-life/bsn-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const EXPAT_TAXES_PATH = "/netherlands/taxes/expat-taxes-netherlands/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const DIGID_AWARENESS_PATH = "/netherlands/digid-awareness/" as const;
export const BSN_REGISTRATION_PATH = "/netherlands/bsn-registration/" as const;

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

export type TimelinePhase = {
  phase: string;
  tasks: readonly string[];
};

export type OrganizationEntry = {
  name: string;
  body: string;
  examples: readonly string[];
};

export type ServiceScenario = {
  service: string;
  examplePortal: string;
  whenUseful: string;
};

export type ActivationChecklistItem = {
  task: string;
  timing: string;
  detail: string;
};

export type SnapshotSignal = {
  label: string;
  value: string;
  note: string;
};

export type ProfileScenario = {
  profile: string;
  situation: string;
  whatToDo: string;
};

export type PortalTask = {
  task: string;
  portal: string;
  timing: string;
};

const INFOGRAPHIC_VERSION = "premium-v7";
const HERO_IMAGE_VERSION = "v2";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-digid-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const digiDNetherlandsPage = {
  slug: "digid-netherlands",
  path: DIGID_NETHERLANDS_PATH,
  hubPath: MUNICIPALITY_SERVICES_PATH,
  parentGuidePath: MUNICIPALITY_SERVICES_PATH,
  publish: true,
  publishDate: "2026-10-25",
  seo: {
    title: "DigiD in the Netherlands | Complete Expat Guide",
    description:
      "Learn what DigiD is, how it works, who can get it and why it is essential for healthcare, taxes, municipalities and government services in the Netherlands.",
    keywords: [
      "digid netherlands",
      "what is digid",
      "digid expat netherlands",
      "dutch digital identity",
      "digid guide",
      "bsn and digid",
      "government services netherlands",
      "digital government netherlands",
      "digid login",
      "expat government services",
    ],
  },
  hero: {
    eyebrow: "Practical life guide",
    pageTitle: "DigiD in the Netherlands",
    subtitle:
      "Understand how DigiD works, why it is important and how it helps residents access healthcare, taxes, municipalities and government services online.",
    chips: ["Digital identity", "BSN & registration", "Government portals", "Official sources only"],
    disclaimer:
      "Practical orientation only — not identity verification advice. Never share DigiD codes, passwords or activation letters. Always apply and activate through official channels such as DigiD.nl.",
    primaryCta: { label: "Understand DigiD", href: "#intro" },
    secondaryCta: { label: "Explore Government Services", href: MUNICIPALITY_SERVICES_PATH },
    image: {
      src: `/images/heroes/netherlands-digid-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic editorial photo of an international professional at a sunlit Dutch apartment table with canal houses outside the window, reviewing a smartphone beside an official government envelope and closed laptop — calm trusted digital identity mood for DigiD, with no visible passwords or codes.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#why-matters", label: "Why it matters" },
    { href: "#who-eligible", label: "Eligibility" },
    { href: "#bsn-connection", label: "BSN link" },
    { href: "#use-cases", label: "Use cases" },
    { href: "#healthcare", label: "Healthcare" },
    { href: "#taxes", label: "Taxes" },
    { href: "#municipalities", label: "Municipalities" },
    { href: "#pensions-benefits", label: "Benefits" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#security", label: "Security" },
    { href: "#newcomer-timeline", label: "Timeline" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#organizations", label: "Organizations" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium infographic overview of DigiD digital identity for expats in the Netherlands.",
      "DigiD is the national login for many Dutch government and public services online."
    ),
    snapshot: visual(
      "snapshot",
      "Premium infographic snapshot of DigiD essentials at a glance for newcomers.",
      "Digital identity, nationwide use, BSN connection and secure login for millions of residents."
    ),
    whyMatters: visual(
      "why-matters",
      "Premium infographic explaining why DigiD matters for daily life in the Netherlands.",
      "Taxes, healthcare, municipalities and official correspondence often require secure identification online."
    ),
    whoEligible: visual(
      "who-eligible",
      "Premium infographic explaining who can obtain DigiD in the Netherlands.",
      "Many registered residents including workers, students and families can apply after registration steps."
    ),
    bsnConnection: visual(
      "bsn-connection",
      "Premium infographic connecting DigiD setup to BSN and address registration.",
      "Register address, receive BSN, then apply for DigiD when post can reach your home."
    ),
    useCases: visual(
      "use-cases",
      "Premium infographic map of common DigiD use cases across Dutch public services.",
      "Taxes, healthcare, municipalities, pensions, education and benefits are frequent entry points."
    ),
    healthcare: visual(
      "healthcare",
      "Premium infographic showing DigiD use in Dutch healthcare portals and administration.",
      "Insurer portals, healthcare letters and medical administration often use DigiD login."
    ),
    taxes: visual(
      "taxes",
      "Premium infographic explaining DigiD for Dutch tax services and Belastingdienst access.",
      "Tax filings, correspondence and personal tax information are common DigiD workflows."
    ),
    municipalities: visual(
      "municipalities",
      "Premium infographic for DigiD and Dutch municipality online services.",
      "Address changes, permits and local registrations often connect to gemeente portals."
    ),
    pensionsBenefits: visual(
      "pensions-benefits",
      "Premium infographic for DigiD with pensions, benefits and long-term resident services.",
      "UWV, SVB and pension portals frequently require DigiD for secure access."
    ),
    howItWorks: visual(
      "how-it-works",
      "Premium infographic explaining how DigiD login and mobile app work conceptually.",
      "Website login, mobile app and additional verification steps protect your digital identity."
    ),
    security: visual(
      "security",
      "Premium infographic on keeping DigiD secure for residents in the Netherlands.",
      "Strong passwords, device protection and official websites reduce identity risk."
    ),
    newcomerTimeline: visual(
      "newcomer-timeline",
      "Premium infographic timeline from arrival to DigiD activation for newcomers.",
      "Move, register, receive BSN, apply, activate and access services in sequence."
    ),
    mistakes: visual(
      "mistakes",
      "Premium infographic of common DigiD mistakes expats make in the Netherlands.",
      "Delaying setup, losing codes and unofficial websites create avoidable admin stress."
    ),
    organizations: visual(
      "organizations",
      "Premium infographic of organizations commonly connected to DigiD in the Netherlands.",
      "Belastingdienst, municipalities, UWV, SVB, insurers and healthcare providers."
    ),
    faq: visual(
      "faq",
      "Premium infographic summarizing common DigiD FAQ answers for expats.",
      "Quick orientation on eligibility, BSN connection, security and moving scenarios."
    ),
    sources: visual(
      "sources",
      "Premium infographic of official DigiD and government resources for verification.",
      "DigiD.nl, Government.nl, NederlandWereldwijd and Rijksoverheid are primary sources."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium infographic linking DigiD to BSN, municipality, tax and relocation guides.",
      "Continue into the guide that matches your next onboarding step."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium infographic explore-next paths after DigiD setup for expats in the Netherlands.",
      "Continue into BSN, address registration, municipality services, taxes and healthcare."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "DigiD essentials",
      items: [
        "DigiD is the Netherlands' digital identity for many online public services.",
        "It is not a physical ID card — it is a login system tied to your personal registration.",
        "Most residents apply after address registration and BSN issuance.",
        "Activation often uses a letter sent to your registered home address.",
        "Treat DigiD like a bank login — protect codes and devices carefully.",
      ],
    },
    snapshot: {
      title: "At a glance",
      items: [
        "Nationwide digital identity for government and public-sector portals.",
        "Often required for taxes, healthcare admin and municipality tasks.",
        "Linked to your personal registration data, including BSN context.",
        "Mobile app and website login with additional verification options.",
        "Millions of residents use DigiD for everyday Dutch bureaucracy online.",
      ],
    },
    whyMatters: {
      title: "Why newcomers notice DigiD quickly",
      items: [
        "Employers and insurers reference government portals that use DigiD.",
        "Tax letters and municipal correspondence push you toward online portals.",
        "Healthcare portals and insurer sites often expect DigiD login.",
        "Delaying setup can block tasks until post and activation complete.",
        "Understanding DigiD early reduces first-month admin confusion.",
      ],
    },
    whoEligible: {
      title: "Eligibility orientation",
      items: [
        "Many residents with a registered Dutch address can apply.",
        "BSN and personal registration data are typically part of the process.",
        "Students, workers and families follow similar high-level routes.",
        "Exact rules and verification steps are set by DigiD and official sources.",
        "Do not rely on unofficial third-party “fast DigiD” services.",
      ],
    },
    bsnConnection: {
      title: "BSN and registration link",
      items: [
        "Address registration at the gemeente is usually the first official step.",
        "BSN is issued or confirmed through municipality registration for most newcomers.",
        "DigiD applications generally require BSN and a registered address.",
        "Post to your registered address is used for activation codes.",
        "Keep address data current when you move within the Netherlands.",
      ],
    },
    useCases: {
      title: "Where DigiD appears",
      items: [
        "Belastingdienst tax portal and correspondence workflows.",
        "Municipality portals for address and permit-related tasks.",
        "Healthcare insurer portals and some medical administration sites.",
        "Pension and benefits agencies such as UWV and SVB.",
        "Education and student finance portals in some cases.",
      ],
    },
    healthcare: {
      title: "Healthcare context",
      items: [
        "Insurer portals for policy details and letters.",
        "Healthcare administration and official healthcare correspondence.",
        "Not a substitute for GP registration or insurance itself.",
        "Pair DigiD setup with health insurance and huisarts registration.",
        "Verify each portal's login method on official sites.",
      ],
    },
    taxes: {
      title: "Tax context",
      items: [
        "Mijn Belastingdienst and related official tax portals.",
        "Viewing tax assessments and correspondence online.",
        "Some allowance and benefit interactions connect to tax data.",
        "DigiD does not replace professional tax advice when needed.",
        "Keep tax letters and activation codes in a secure folder.",
      ],
    },
    municipalities: {
      title: "Gemeente context",
      items: [
        "Address change notifications and some permit flows.",
        "Local tax and waste portals in many municipalities.",
        "Parking permits and resident service desks online.",
        "Processes differ by gemeente — check your city website.",
        "English support varies; bookmark your municipal portal early.",
      ],
    },
    pensionsBenefits: {
      title: "Long-term services",
      items: [
        "Pension overview portals for employed and former residents.",
        "Social security and benefit correspondence via official sites.",
        "DigiD helps access records — eligibility rules stay separate.",
        "Students and short-term residents may use fewer of these services.",
        "Verify agency-specific requirements on official websites.",
      ],
    },
    howItWorks: {
      title: "Login flow (conceptual)",
      items: [
        "Choose DigiD on an official service website or app.",
        "Authenticate with username, password and verification step.",
        "Mobile app can confirm logins with app-based approval.",
        "Additional methods may apply for higher-security transactions.",
        "Never share codes, passwords or activation letters with others.",
      ],
    },
    security: {
      title: "Security habits",
      items: [
        "Use unique strong passwords and protect your phone.",
        "Enable extra security features when offered in the DigiD app.",
        "Only log in through official websites — check the URL carefully.",
        "Report lost phones or suspected misuse through official channels.",
        "Do not photograph or email activation codes to third parties.",
      ],
    },
    newcomerTimeline: {
      title: "Typical sequence",
      items: [
        "Secure housing and register your address at the gemeente.",
        "Receive BSN through registration or confirmation letter.",
        "Apply for DigiD when post reliably reaches your home.",
        "Activate within the official window when the letter arrives.",
        "Test login on one low-risk official portal before urgent deadlines.",
      ],
    },
    mistakes: {
      title: "Mistakes to avoid",
      items: [
        "Waiting until a tax or healthcare deadline to start DigiD.",
        "Missing activation deadlines after the letter arrives.",
        "Using unofficial websites or paid “setup helpers”.",
        "Forgetting to update address data after an internal move.",
        "Storing passwords in unsecured notes or shared chats.",
      ],
    },
    organizations: {
      title: "Common connections",
      items: [
        "Belastingdienst — national tax authority portals.",
        "Gemeenten — local registration and permit services.",
        "UWV — employment and benefits administration.",
        "SVB — social insurance and related benefit flows.",
        "Health insurers and healthcare providers — portal access.",
      ],
    },
    faq: {
      title: "FAQ orientation",
      items: [
        "DigiD is a login system, not a visa or residence permit.",
        "Many expats benefit from DigiD once registered with a BSN.",
        "Mandatory use depends on the service — many portals expect it.",
        "Moving within NL usually requires address updates in official systems.",
        "Always verify current rules on DigiD.nl and Government.nl.",
      ],
    },
    sources: {
      title: "Official verification",
      items: [
        "DigiD.nl — applications, activation and security guidance.",
        "Government.nl — broader digital government context for residents.",
        "NederlandWereldwijd — Dutch nationals abroad and cross-border topics.",
        "Rijksoverheid — central government information portal.",
        "Rules and supported services change — recheck before each application.",
      ],
    },
    relatedGuides: {
      title: "Next guides",
      items: [
        "Municipality services — gemeente tasks after registration.",
        "Address registration — prerequisite for BSN and DigiD post.",
        "BSN Netherlands — identity number context for newcomers.",
        "Taxes hub — filings and correspondence after DigiD setup.",
        "Moving guide — full relocation timeline including digital admin.",
      ],
    },
  },
  quickAnswer: {
    heading: "What Is DigiD?",
    summaryPoints: [
      "DigiD is the Netherlands' digital identity system for secure online access to many public services.",
      "Residents use it to log in to portals for municipalities, healthcare administration, tax authorities, pension systems and other government agencies.",
      "For many people living in the Netherlands, DigiD becomes one of the most important digital tools in everyday life.",
      "You apply after gemeente registration and BSN context are in place — activation usually arrives by post to your registered home address.",
    ],
  },
  firstWeekActions: [
    "Register your address at the gemeente and confirm how post reaches your home (mailbox name, building access).",
    "Save BSN confirmation and identity documents in one folder for DigiD and employer onboarding.",
    "Bookmark DigiD.nl, your gemeente portal and your health insurer site — type URLs manually, not from ads.",
    "Apply for DigiD once post is reliable; do not wait for your first tax or insurer letter.",
    "When the activation letter arrives, complete setup within the deadline printed on the letter.",
  ],
  snapshotUseTips: [
    "Apply after your address is registered and post reliably reaches your home.",
    "Keep activation letters secure — they are tied to your identity setup.",
    "Test DigiD on one low-stakes official portal before urgent tax or insurer deadlines.",
    "Each adult needs their own DigiD; do not share logins with partners or employers.",
    "Bookmark DigiD.nl and your gemeente portal — avoid search-result phishing sites.",
  ],
  snapshotSignals: [
    { label: "What it is", value: "Digital identity login", note: "For Dutch public services online" },
    { label: "Linked to", value: "BSN & address", note: "After gemeente registration" },
    { label: "Used for", value: "Tax & healthcare", note: "Plus municipality portals" },
    { label: "Activate via", value: "Official post", note: "Letter to your home address" },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    { title: "Digital identity system", body: "A national login layer for official online services — not a physical ID card." },
    { title: "Used nationwide", body: "Municipalities, tax offices, insurers and agencies across the Netherlands connect to DigiD." },
    { title: "Connected to government services", body: "Often the bridge between your registration data and online portals." },
    { title: "Often linked to BSN", body: "Personal registration and BSN context are part of typical application routes." },
    { title: "Supports secure login", body: "Password, app approval and additional verification protect access." },
    { title: "Used by millions of residents", body: "From tax letters to insurer portals — DigiD is mainstream Dutch digital life." },
  ] satisfies TipCard[],
  orientationFlowSteps: [
    "Register your address and confirm BSN before applying for DigiD.",
    "Bookmark DigiD.nl and your gemeente portal — apply only through official channels.",
    "Activate promptly when your letter arrives, then test login on one official portal.",
  ],
  whyMatters: {
    heading: "Why DigiD Is Important",
    paragraphs: [
      "Many Dutch online services require secure identification before you can view letters, submit forms or complete administrative tasks. Without a working DigiD, you may need slower paper routes or phone queues for the same information.",
      "DigiD often acts as the gateway to taxes, healthcare administration, municipalities, pension information and official government communication. Newcomers usually encounter it within the first weeks after registration.",
      "Understanding DigiD early helps you sequence BSN registration, post delivery and urgent deadlines — especially during tax season, healthcare setup and municipality appointments.",
    ],
  },
  whyMattersCards: [
    { title: "Tax correspondence", body: "Belastingdienst letters and online tax information frequently route through DigiD-enabled portals." },
    { title: "Healthcare administration", body: "Insurer portals and official healthcare correspondence often expect DigiD login." },
    { title: "Municipality tasks", body: "Address changes, permits and local registrations increasingly start online." },
    { title: "Pension and benefits", body: "Long-term residents access UWV, SVB and pension records through secure login." },
    { title: "Official communication", body: "Government messages and digital services reduce reliance on paper-only workflows." },
  ] satisfies TipCard[],
  whyMattersScenarios: [
    {
      profile: "New hire with Dutch employer",
      situation: "First payroll month and insurer enrollment letters arrive",
      whatToDo: "Activate DigiD before month two so insurer and tax portals are ready when letters reference online access.",
    },
    {
      profile: "Student with municipal registration",
      situation: "Student finance or gemeente student services open online",
      whatToDo: "Each adult applies individually — parent DigiD cannot access student portals on your behalf.",
    },
    {
      profile: "Family relocating together",
      situation: "Multiple adults need tax, insurer and gemeente access",
      whatToDo: "Plan separate applications and post delivery for each adult at the registered address.",
    },
    {
      profile: "Remote worker settling in NL",
      situation: "Cross-border tax questions plus Dutch correspondence",
      whatToDo: "DigiD unlocks Dutch portals only — cross-border tax advice may still need a specialist.",
    },
  ] satisfies ProfileScenario[],
  whoEligible: {
    heading: "Who Is Eligible?",
    paragraphs: [
      "Many residents can obtain DigiD after completing the necessary registration processes with a Dutch municipality. Eligibility and verification steps are defined by DigiD and official government sources — this section orients you, not replaces official rules.",
      "Workers, students, families and long-term residents commonly apply once they have a registered address and BSN context. Immigration permit type alone does not replace the registration and identity steps DigiD relies on.",
      "Always confirm current application requirements on DigiD.nl before you apply. Do not use unofficial intermediaries that ask for your credentials.",
    ],
  },
  eligibilityCards: [
    { title: "Registered residents", body: "People with a registered Dutch home address are the core user group." },
    { title: "Expats and international workers", body: "After BSN and registration, many expats follow the same application route as Dutch residents." },
    { title: "Students", body: "Students with municipal registration and BSN often apply for student finance and gemeente portals." },
    { title: "Families", body: "Each adult usually needs their own DigiD — children do not share parent logins." },
    { title: "Verify officially", body: "Check DigiD.nl for current eligibility, ID checks and activation rules." },
  ] satisfies TipCard[],
  eligibilityScenarios: [
    {
      profile: "EU citizen after gemeente appointment",
      situation: "Address registered and BSN issued or confirmed",
      whatToDo: "Apply via DigiD.nl when post reaches your home — verify current ID check rules on the official site.",
    },
    {
      profile: "Non-EU worker with residence permit",
      situation: "Permit valid and address registered at gemeente",
      whatToDo: "Registration and BSN matter more than permit type alone — confirm data matches your ID before applying.",
    },
    {
      profile: "Partner without own employment yet",
      situation: "Registered at same address as working partner",
      whatToDo: "If you have BSN and registration, you typically apply separately — do not use a partner's login.",
    },
    {
      profile: "Short-stay without registration",
      situation: "Tourist or guest stay without BR registration",
      whatToDo: "DigiD usually requires registered residence — complete gemeente registration first or verify exceptions on DigiD.nl.",
    },
    {
      profile: "Dutch national returning from abroad",
      situation: "Re-registering address after years abroad",
      whatToDo: "Update gemeente registration first; old DigiD may need reset — follow return-resident guidance on official sites.",
    },
  ] satisfies ProfileScenario[],
  bsnConnection: {
    heading: "The Connection Between DigiD and BSN",
    paragraphs: [
      "For most newcomers, the practical sequence starts with address registration at the gemeente. During or after that process, you typically receive or confirm your BSN (Burgerservicenummer) — the personal identification number used across Dutch administration.",
      "DigiD applications generally require that your personal data and registered address are in order. Activation codes are usually sent by post to your registered home address, which is why reliable post delivery matters in your first weeks.",
      "If your address or household composition changes, update your gemeente registration promptly so DigiD and other services stay aligned with official records.",
    ],
  },
  bsnSequenceSteps: [
    "Register your residential address with the municipality where you live.",
    "Receive or confirm your BSN through registration or official correspondence.",
    "Ensure post can reach your registered address reliably.",
    "Apply for DigiD through the official DigiD application process.",
    "Activate DigiD when your activation letter arrives — note official deadlines.",
    "Log in to one official portal to confirm your setup before urgent deadlines.",
  ],
  bsnDigiDPrerequisites: [
    { label: "Registered address", value: "Gemeente BR", note: "Post must reach your home for activation letters" },
    { label: "BSN context", value: "On official records", note: "Employer and insurer data align with registration" },
    { label: "Identity match", value: "Name & DOB", note: "Application data must match gemeente and ID documents" },
    { label: "Reliable post", value: "2–4 weeks", note: "Plan for letter delivery before urgent portal deadlines" },
  ] satisfies SnapshotSignal[],
  useCases: {
    heading: "Common DigiD Use Cases",
    paragraphs: [
      "DigiD is not tied to a single department — it is reused across many parts of Dutch public life. The cards below show the areas newcomers most often encounter during the first year.",
    ],
  },
  useCaseCards: [
    { title: "Taxes", body: "Tax assessments, correspondence and some allowance interactions via Belastingdienst portals." },
    { title: "Healthcare", body: "Insurer portals, healthcare letters and administration tied to Dutch health insurance." },
    { title: "Municipalities", body: "Address changes, permits, local taxes and resident service desks online." },
    { title: "Pensions", body: "Pension overview portals and employment-related pension correspondence." },
    { title: "Education", body: "Student finance and some education portals for registered students." },
    { title: "Benefits", body: "Social security and benefit correspondence through official agency sites." },
    { title: "Driving services", body: "Some RDW and mobility-related online services use DigiD where applicable." },
    { title: "Government communication", body: "Official letters and digital service access across ministries and agencies." },
  ] satisfies TipCard[],
  serviceScenarios: [
    {
      service: "Tax assessment letter",
      examplePortal: "Mijn Belastingdienst",
      whenUseful: "Read provisional assessments and respond before payment deadlines.",
    },
    {
      service: "Health insurer portal",
      examplePortal: "Insurer self-service site",
      whenUseful: "View policy letters, premium details and annual statements online.",
    },
    {
      service: "Address change",
      examplePortal: "Gemeente online desk",
      whenUseful: "Report an internal move so post and records stay accurate.",
    },
    {
      service: "Student finance",
      examplePortal: "DUO-style student portal",
      whenUseful: "Students with BSN and registration may manage finance correspondence.",
    },
    {
      service: "Parking permit renewal",
      examplePortal: "Municipal parking portal",
      whenUseful: "Renew resident permits where the city offers online renewal.",
    },
    {
      service: "Benefit correspondence",
      examplePortal: "UWV or SVB portal",
      whenUseful: "Access employment or social insurance letters securely online.",
    },
  ] satisfies ServiceScenario[],
  healthcare: {
    heading: "Healthcare Services",
    paragraphs: [
      "DigiD is widely used in healthcare administration — not for clinical care itself, but for portals and official correspondence connected to Dutch health insurance and healthcare providers.",
      "Examples include insurer self-service portals, viewing policy letters, and some healthcare administration workflows. GP registration and choosing a huisarts remain separate steps from DigiD setup.",
      "Pair DigiD activation with mandatory health insurance registration and GP enrollment so your digital and clinical access align with your first months in the Netherlands.",
    ],
  },
  healthcareExamples: [
    "Health insurer portals for policy details and premium letters.",
    "Official healthcare correspondence and administration sites.",
    "Some municipal health program registrations tied to gemeente portals.",
    "Student healthcare and insurance verification in some student finance flows.",
  ],
  healthcarePortalTasks: [
    {
      task: "Download annual policy statement",
      portal: "Insurer self-service site",
      timing: "After first premium month — often January for annual summaries",
    },
    {
      task: "Read insurer letter about coverage change",
      portal: "Insurer portal or Berichtenbox-style messaging",
      timing: "When switching insurers or adding family members",
    },
    {
      task: "Confirm deductible (eigen risico) details",
      portal: "Insurer portal",
      timing: "First quarter after registration — before GP-heavy year",
    },
    {
      task: "Access municipal health program info",
      portal: "Gemeente site (varies by city)",
      timing: "When enrolling in local prevention or integration programs",
    },
  ] satisfies PortalTask[],
  healthcareSetupTips: [
    "Register for mandatory health insurance in parallel with DigiD — portals assume both exist.",
    "Choose a huisarts separately; DigiD does not replace GP registration.",
    "Store insurer login and DigiD credentials separately — never reuse passwords.",
    "If post is slow, insurer letters may arrive before DigiD is active — plan activation early.",
  ],
  taxes: {
    heading: "Tax Services",
    paragraphs: [
      "Residents often use DigiD for Belastingdienst portals — viewing tax assessments, reading official correspondence and completing filing workflows where online submission applies.",
      "DigiD does not replace understanding your tax situation. Expats with cross-border income may still need professional advice even with a working DigiD login.",
      "Set up DigiD before your first tax letter season so you can respond to deadlines without postal delays.",
    ],
  },
  taxExamples: [
    "Mijn Belastingdienst and related official tax portals.",
    "Reading provisional assessments and tax correspondence online.",
    "Some allowance and benefit interactions connected to tax records.",
    "Downloading official tax documents for advisors when needed.",
  ],
  taxPortalTasks: [
    {
      task: "Read provisional tax assessment",
      portal: "Mijn Belastingdienst",
      timing: "Often spring — respond before payment or objection deadlines",
    },
    {
      task: "Download annual income statement for employer",
      portal: "Mijn Belastingdienst",
      timing: "After year-end — useful for mortgage or cross-border filings",
    },
    {
      task: "Check toeslagen / allowance correspondence",
      portal: "Belastingdienst-related portals",
      timing: "When household or income changes mid-year",
    },
    {
      task: "Share documents with tax advisor",
      portal: "Official tax download area",
      timing: "Before advisor filing deadline — export PDFs securely",
    },
  ] satisfies PortalTask[],
  taxSeasonTips: [
    "Activate DigiD at least one month before your first expected tax letter season.",
    "Belastingdienst deadlines are strict — missing portal access does not pause legal deadlines.",
    "Cross-border income may need a specialist even with working DigiD.",
    "Keep paper tax letters until you confirm the same document appears online.",
  ],
  municipalities: {
    heading: "Municipality Services",
    paragraphs: [
      "Municipalities increasingly offer online services for residents — from address change notifications to permit requests and local tax portals. DigiD is often the login layer for these gemeente websites.",
      "Processes differ by city: Amsterdam, Rotterdam, Utrecht and The Hague each publish their own portals and English support levels. Bookmark your gemeente site early and verify which tasks require DigiD versus in-person visits.",
    ],
  },
  municipalityExamples: [
    "Reporting address changes when moving within the Netherlands.",
    "Parking permits, waste tax portals and local levy information.",
    "Some permit requests and resident registration follow-up tasks.",
    "Integration program sign-up where municipalities offer online booking.",
  ],
  municipalityPortalTasks: [
    {
      task: "Report internal move within same city",
      portal: "Gemeente online desk",
      timing: "Within official window after moving rooms or apartments",
    },
    {
      task: "Renew resident parking permit",
      portal: "Municipal parking portal",
      timing: "Before permit expiry — many cities offer online renewal",
    },
    {
      task: "View local waste or water tax levy",
      portal: "Gemeente or regional tax portal",
      timing: "When annual local tax letters arrive",
    },
    {
      task: "Book integration or language program",
      portal: "City program portal",
      timing: "First months after registration — slots can be limited",
    },
  ] satisfies PortalTask[],
  municipalityCityNotes: [
    "Amsterdam — many tasks via amsterdam.nl; English pages vary by topic.",
    "Rotterdam — gemeente portal for address and permits; check DigiD requirement per service.",
    "Utrecht — online address changes common; confirm ID rules on the city site.",
    "The Hague — international resident pages exist; still verify login method per task.",
    "Smaller gemeenten — fewer English pages; bookmark Dutch portal URL early.",
  ],
  pensionsBenefits: {
    heading: "Long-Term Resident Services",
    paragraphs: [
      "Beyond first-month setup, DigiD remains important for pension information, social services and government benefits accessed through official agency portals.",
      "UWV (employment and benefits), SVB (social insurance) and pension funds commonly use DigiD for secure access. Eligibility for benefits is separate from having a DigiD — the login only unlocks digital access to your records.",
    ],
  },
  pensionsBenefitsExamples: [
    "Pension overview and annual pension statements online.",
    "UWV correspondence for employment and benefit situations.",
    "SVB portals for social insurance-related administration.",
    "Official records and digital government messages over time.",
  ],
  pensionsBenefitsScenarios: [
    {
      profile: "Employed resident building pension",
      situation: "Annual pension overview letter references online portal",
      whatToDo: "Use DigiD to view mijnpensioenoverzicht-style summaries — eligibility is separate from login access.",
    },
    {
      profile: "Between jobs",
      situation: "UWV correspondence about employment insurance",
      whatToDo: "DigiD unlocks letters online; benefit eligibility follows UWV rules, not DigiD status alone.",
    },
    {
      profile: "Parent receiving child-related benefits",
      situation: "SVB or toeslagen letters about household changes",
      whatToDo: "Keep address and household data updated at gemeente — portals reflect official records.",
    },
    {
      profile: "Long-term resident nearing retirement",
      situation: "Multiple pension funds and government letters",
      whatToDo: "Secure DigiD early; pension portals accumulate history over years.",
    },
  ] satisfies ProfileScenario[],
  howItWorks: {
    heading: "How DigiD Works",
    paragraphs: [
      "Conceptually, DigiD works as a secure login bridge between you and an official service. You choose DigiD on a government or public-sector website, authenticate with your credentials, and complete any additional verification step required for that session.",
      "The DigiD mobile app can approve logins from your phone — reducing reliance on SMS codes in many flows. Higher-security transactions may ask for extra confirmation; follow only official prompts inside the app or website.",
      "This guide does not provide step-by-step activation instructions that could be outdated — always follow the current process on DigiD.nl.",
    ],
  },
  loginMethodCards: [
    { title: "Website login", body: "Select DigiD on official portals, then enter credentials on the secure DigiD login page." },
    { title: "Mobile app", body: "Approve logins from the official DigiD app on your smartphone." },
    { title: "Additional verification", body: "Some services require an extra confirmation step for sensitive data." },
    { title: "Official channels only", body: "Never enter DigiD credentials on unofficial sites or third-party forms." },
  ] satisfies TipCard[],
  activationChecklistItems: [
    {
      task: "Confirm BSN and registered address",
      timing: "Before applying",
      detail: "DigiD applications rely on accurate gemeente registration and post delivery to your home.",
    },
    {
      task: "Apply through official DigiD channels",
      timing: "Week 2–4",
      detail: "Use DigiD.nl only — follow the current application flow published there.",
    },
    {
      task: "Watch for activation letter",
      timing: "After applying",
      detail: "Official post to your registered address — note the activation deadline on the letter.",
    },
    {
      task: "Activate within the official window",
      timing: "When letter arrives",
      detail: "Missing the window usually means reapplying and waiting for new post.",
    },
    {
      task: "Install the official DigiD app",
      timing: "After activation",
      detail: "App approval simplifies logins on many portals — keep your phone secured.",
    },
    {
      task: "Test on one official portal",
      timing: "First week active",
      detail: "Try a low-risk login (e.g. insurer or gemeente info page) before urgent deadlines.",
    },
  ] satisfies ActivationChecklistItem[],
  security: {
    heading: "Keeping Your DigiD Secure",
    paragraphs: [
      "Treat DigiD like online banking credentials. Phishing sites, shared passwords and lost phones are common risk factors. Official sources emphasize personal responsibility for device and password security.",
      "If you suspect misuse, follow official DigiD guidance to block or reset access. Never share activation codes, passwords or app approvals with landlords, employers or unofficial “relocation helpers”.",
    ],
  },
  securityCards: [
    { title: "Use strong passwords", body: "Unique passwords and a secure password manager reduce credential theft risk." },
    { title: "Protect devices", body: "Lock your phone and laptop; DigiD app approval lives on your devices." },
    { title: "Enable additional security", body: "Use extra security features in the DigiD app when offered." },
    { title: "Never share credentials", body: "No legitimate service asks for your DigiD password by email or phone." },
    { title: "Monitor activity", body: "Review login approvals in the app and report suspicious prompts." },
    { title: "Use official websites", body: "Type URLs manually or use bookmarks — beware of phishing links." },
  ] satisfies TipCard[],
  securityRedFlags: [
    "Email or SMS asking for your DigiD password or activation code.",
    "Websites with misspelled domains or no padlock on login pages.",
    "Phone callers claiming to be Belastingdienst asking for app approval.",
    "Landlord or employer requesting your DigiD login to 'help' with registration.",
    "Unexpected login approval prompts when you are not using a government site.",
  ],
  securityIncidentSteps: [
    "Decline any suspicious login approval in the DigiD app immediately.",
    "Do not reply to messages asking for codes — contact the organization via its official website.",
    "If your phone is lost, follow DigiD.nl guidance to block app access from a secure device.",
    "Change passwords if you entered credentials on a suspicious site — then verify on DigiD.nl only.",
    "Keep a record of incident date and screenshots for gemeente or insurer support if needed.",
  ],
  newcomerTimeline: {
    heading: "Typical Newcomer Journey",
    paragraphs: [
      "Most expats follow a similar high-level sequence. Timing varies by city appointment availability, housing type and permit route — use this as a planning map, not a legal timeline.",
    ],
  },
  timelinePhases: [
    {
      phase: "Arrival",
      tasks: ["Secure qualifying accommodation", "Book municipality registration appointment", "Gather identity and housing documents"],
    },
    {
      phase: "Registration",
      tasks: ["Register address at gemeente", "Receive or confirm BSN", "Set up reliable post delivery at home"],
    },
    {
      phase: "DigiD application",
      tasks: ["Apply via official DigiD channels when eligible", "Watch for activation letter by post", "Note activation deadline on the letter"],
    },
    {
      phase: "Activation & access",
      tasks: ["Activate DigiD within the official window", "Test login on one official portal", "Complete healthcare and tax setup tasks online"],
    },
  ] satisfies TimelinePhase[],
  mistakes: {
    heading: "Common DigiD Mistakes",
    paragraphs: [
      "These mistakes slow down newcomers most often. Avoiding them saves stress before tax deadlines, insurer letters and municipality tasks pile up.",
    ],
  },
  mistakeCards: [
    { title: "Delaying setup", body: "Waiting until an urgent letter arrives leaves no time for postal activation." },
    { title: "Ignoring activation steps", body: "Activation letters expire — complete setup within the official window." },
    { title: "Losing login details", body: "Store recovery information securely; resetting access takes time." },
    { title: "Underestimating importance", body: "DigiD is not optional for many portals even if you prefer paper." },
    { title: "Using unofficial websites", body: "Phishing and paid “helpers” put your identity at risk." },
    { title: "Delaying BSN registration", body: "Without registration and BSN context, DigiD applications stall." },
    { title: "Weak security habits", body: "Shared passwords and unlocked phones undermine DigiD protection." },
    { title: "Waiting for urgent deadlines", body: "Tax season and insurer letters are harder without active DigiD." },
  ] satisfies TipCard[],
  mistakeRecoveryTips: [
    "Missed activation deadline — check DigiD.nl for reapplication steps; expect another postal wait.",
    "Lost activation letter — follow official lost-letter guidance; never accept codes from third parties.",
    "Wrong address on record — update gemeente registration before reapplying for DigiD.",
    "Phishing scare — reset access via DigiD.nl only; do not use links from the suspicious message.",
    "Partner used your login — set up separate DigiD accounts for each adult in the household.",
  ],
  organizations: {
    heading: "Organizations Commonly Connected to DigiD",
    paragraphs: [
      "DigiD connects to many public organizations. Names below are orientation only — each agency defines its own login requirements and supported services on official websites.",
    ],
  },
  organizationEntries: [
    {
      name: "Belastingdienst",
      body: "National tax authority — tax assessments, correspondence and related digital services.",
      examples: ["Mijn Belastingdienst portal", "Tax letters and assessments", "Some allowance interactions"],
    },
    {
      name: "Municipalities (gemeenten)",
      body: "Local government — registration follow-up, permits and local taxes.",
      examples: ["Address change notifications", "Parking and waste portals", "Local permit requests"],
    },
    {
      name: "UWV",
      body: "Employee insurance agency — employment and benefits administration.",
      examples: ["Benefit correspondence", "Employment insurance portals", "Official employment letters"],
    },
    {
      name: "SVB",
      body: "Social insurance bank — social security-related administration.",
      examples: ["Benefit administration portals", "Official social insurance correspondence"],
    },
    {
      name: "Healthcare providers & insurers",
      body: "Insurers and some healthcare administration portals.",
      examples: ["Insurer self-service sites", "Healthcare administration letters", "Policy and premium portals"],
    },
    {
      name: "Educational institutions",
      body: "Student finance and some university portals for registered students.",
      examples: ["Student finance applications", "Official education correspondence"],
    },
  ] satisfies OrganizationEntry[],
  faqs: [
    {
      q: "What is DigiD?",
      a: "DigiD is the Netherlands' digital identity system. It lets residents securely log in to many online government and public-sector services, including municipalities, healthcare administration, tax authorities and pension systems.",
    },
    {
      q: "Do expats need DigiD?",
      a: "Many expats benefit from DigiD once they are registered with a Dutch address and BSN. If you use Dutch online services for taxes, healthcare, municipalities or benefits, DigiD is usually essential.",
    },
    {
      q: "Is DigiD mandatory?",
      a: "DigiD itself is not a law you sign up for — but many official portals require it for online access. You may still complete some tasks in person or by post, though that is often slower.",
    },
    {
      q: "How do I get DigiD?",
      a: "Apply through the official DigiD website after you have the registration prerequisites (typically BSN and a registered address). Follow current activation instructions on DigiD.nl — activation usually involves a letter sent to your home.",
    },
    {
      q: "What is DigiD used for?",
      a: "Common uses include tax portals, municipality services, healthcare insurer sites, pension information, benefits administration and official government communication.",
    },
    {
      q: "Is DigiD connected to my BSN?",
      a: "Yes — DigiD is tied to your personal registration data, which includes your BSN context. Address registration at the gemeente is usually a prerequisite step.",
    },
    {
      q: "Is DigiD secure?",
      a: "DigiD uses secure authentication, but you must protect passwords, devices and activation codes. Use official websites only and never share credentials with third parties.",
    },
    {
      q: "What happens if I move?",
      a: "Update your address with the municipality when you move within the Netherlands. Official records, post delivery and some DigiD-related processes depend on accurate address data.",
    },
  ],
  officialSources: [
    {
      label: "DigiD",
      href: "https://www.digid.nl/",
      description: "Official digital identity portal — applications, activation, security and supported services.",
    },
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "Central government information for residents and digital public services context.",
    },
    {
      label: "NederlandWereldwijd",
      href: "https://www.nederlandwereldwijd.nl/",
      description: "Government information for Dutch nationals abroad and cross-border resident topics.",
    },
    {
      label: "Rijksoverheid",
      href: "https://www.rijksoverheid.nl/",
      description: "Dutch central government portal for policies, services and official announcements.",
    },
  ],
  sourcesDisclaimer:
    "Eligibility requirements, activation methods and supported services may change over time. Always verify information through official sources before applying or sharing personal data.",
  sourceUsageTips: [
    "Start on DigiD.nl for application and activation steps.",
    "Use Government.nl for broader digital government context.",
    "Check your gemeente website for local portal login requirements.",
    "Bookmark official URLs — avoid search ads and unofficial helpers.",
    "Re-verify security guidance if you change phones or email addresses.",
  ],
  sourceVerificationScenarios: [
    {
      profile: "Applying for first DigiD",
      situation: "Unsure which site is official",
      whatToDo: "Use DigiD.nl only — type the URL manually; ignore paid setup services.",
    },
    {
      profile: "Tax letter references online portal",
      situation: "Need Belastingdienst context",
      whatToDo: "Government.nl and Belastingdienst official pages — then log in via portal link from there.",
    },
    {
      profile: "Moved cities within NL",
      situation: "Old gemeente portal bookmark fails",
      whatToDo: "Find new city site via Government.nl gemeente search — update bookmarks.",
    },
    {
      profile: "Dutch national abroad",
      situation: "Cross-border registration question",
      whatToDo: "NederlandWereldwijd for orientation — still verify DigiD rules on DigiD.nl.",
    },
  ] satisfies ProfileScenario[],
  relatedGuideRouting: [
    "No BSN yet — start with address registration, then BSN registration guide.",
    "DigiD active but no insurer — open health insurance guide before portal deadlines.",
    "Tax letter arrived — taxes hub for orientation; expat taxes if income is cross-border.",
    "Gemeente task unclear — municipality services guide for permits, local taxes and desks.",
    "Still relocating — moving guide for full first-month sequencing including digital admin.",
  ],
  relatedGuides: [
    {
      label: "Municipality Services in the Netherlands",
      href: MUNICIPALITY_SERVICES_PATH,
      status: "live",
      description: "Gemeente registration, local taxes, permits and digital government touchpoints.",
    },
    {
      label: "Registering Your Address",
      href: REGISTERING_ADDRESS_PATH,
      status: "live",
      description: "Prerequisite step before BSN and DigiD — appointments, documents and timing.",
    },
    {
      label: "BSN Netherlands",
      href: BSN_NETHERLANDS_PATH,
      status: "comingSoon",
      description: "Planned practical guide to BSN routes, documents and employer onboarding.",
    },
    {
      label: "Taxes Hub",
      href: TAXES_HUB_PATH,
      status: "live",
      description: "Expat tax guides, filings context and Belastingdienst orientation.",
    },
    {
      label: "Expat Taxes Netherlands",
      href: EXPAT_TAXES_PATH,
      status: "live",
      description: "Tax residency and filing context for internationally mobile residents.",
    },
    {
      label: "Health Insurance Netherlands",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Mandatory insurance setup paired with healthcare portal access.",
    },
    {
      label: "Moving to the Netherlands",
      href: MOVING_TO_NETHERLANDS_PATH,
      status: "live",
      description: "Full relocation hub including first-week and first-month admin sequencing.",
    },
  ] satisfies PracticalLifeLink[],
  exploreNextCards: [
    {
      label: "BSN Netherlands",
      href: BSN_NETHERLANDS_PATH,
      status: "comingSoon",
      description: "Identity number routes, documents and timing for newcomers.",
    },
    {
      label: "Address Registration",
      href: REGISTERING_ADDRESS_PATH,
      status: "live",
      description: "Register your home address before applying for DigiD.",
    },
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      status: "live",
      description: "Gemeente tasks, local taxes and digital service map.",
    },
    {
      label: "Taxes Hub",
      href: TAXES_HUB_PATH,
      status: "live",
      description: "Tax filing context after your DigiD is active.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Insurance setup and insurer portals that use DigiD.",
    },
  ] satisfies PracticalLifeLink[],
  exploreNextTips: [
    "Complete address registration before expecting DigiD post at your home.",
    "Keep activation letters in a secure place — treat them like banking codes.",
    "Pair DigiD setup with health insurance and tax portal orientation in month one.",
    "Update your gemeente registration whenever you move within the Netherlands.",
  ],
} as const;

export type DigiDNetherlandsPage = typeof digiDNetherlandsPage;

export const GOVERNMENT_PORTALS_NETHERLANDS_PATH =
  "/netherlands/practical-life/government-portals-netherlands/" as const;
export const GOVERNMENT_SERVICES_HUB_PATH = "/netherlands/government-services/" as const;

export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const DIGID_NETHERLANDS_PATH = "/netherlands/practical-life/digid-netherlands/" as const;
export const REGISTERING_ADDRESS_PATH = "/netherlands/practical-life/registering-your-address-netherlands/" as const;
export const MUNICIPALITY_SERVICES_PATH = "/netherlands/practical-life/municipality-services-netherlands/" as const;
export const BSN_NETHERLANDS_PATH = "/netherlands/practical-life/bsn-netherlands/" as const;
export const LOCAL_TAXES_NETHERLANDS_PATH = "/netherlands/practical-life/local-taxes-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const VISAS_HUB_PATH = "/netherlands/moving/visas-residency/" as const;
export const STARTING_BUSINESS_PATH = "/netherlands/business/starting-a-business-netherlands/" as const;
export const ZZP_PATH = "/netherlands/business/zzp-netherlands/" as const;

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

export type LifeEventRow = {
  lifeEvent: string;
  portal: string;
  notes: string;
};

export type PortalDirectoryEntry = {
  name: string;
  purpose: string;
  audience: string;
  website: string;
  websiteLabel: string;
  keyServices: readonly string[];
};

export type PortalGuideSection = {
  id: string;
  visualSlug: string;
  heading: string;
  paragraphs: readonly string[];
  cards: readonly TipCard[];
  tasks?: readonly PortalTask[];
  bulletTitle?: string;
  bulletItems?: readonly string[];
  crossLink?: {
    href: string;
    title: string;
    description: string;
    linkLabel: string;
  };
};

export type PortalTask = {
  task: string;
  portal: string;
  timing: string;
};

export type SetupChecklistItem = {
  task: string;
  timing: string;
  detail: string;
};

export type SnapshotSignal = {
  label: string;
  value: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";
const HERO_IMAGE_VERSION = "v2";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-government-portals-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const governmentPortalsNetherlandsPage = {
  slug: "government-portals-netherlands",
  path: GOVERNMENT_PORTALS_NETHERLANDS_PATH,
  hubPath: GOVERNMENT_SERVICES_HUB_PATH,
  parentGuidePath: GOVERNMENT_SERVICES_HUB_PATH,
  publish: true,
  publishDate: "2026-10-29",
  seo: {
    title: "Government Portals in the Netherlands | Complete Expat Guide",
    description:
      "Discover the most important Dutch government portals, including DigiD, Belastingdienst, IND, municipalities, healthcare and business services used by expats.",
    keywords: [
      "government portals netherlands",
      "dutch government websites",
      "government services netherlands",
      "netherlands government portal",
      "expat government services netherlands",
      "digid netherlands",
      "municipality services netherlands",
      "dutch online services",
      "government websites expats",
      "digital government netherlands",
    ],
  },
  hero: {
    eyebrow: "Practical life guide",
    pageTitle: "Government Portals in the Netherlands",
    subtitle:
      "Learn which Dutch government websites and digital services you will use for taxes, healthcare, municipalities, immigration, business and daily life.",
    chips: ["DigiD & MijnOverheid", "Tax & immigration", "Gemeente portals", "Official sources only"],
    disclaimer:
      "Practical orientation only — not legal, tax or immigration advice. Always verify requirements on official government websites before acting.",
    primaryCta: { label: "Explore Government Services", href: "#intro" },
    secondaryCta: { label: "Understand DigiD", href: DIGID_NETHERLANDS_PATH },
    image: {
      src: `/images/heroes/netherlands-government-portals-hero-${HERO_IMAGE_VERSION}.png`,
      alt:
        "Photorealistic editorial photo of an international professional at a bright Dutch home desk with laptop and smartphone showing a clean government services dashboard, canal houses visible through the window — trustworthy digital government mood without paperwork piles or fear imagery.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "At a glance" },
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#digid", label: "DigiD" },
    { href: "#mijnoverheid", label: "MijnOverheid" },
    { href: "#belastingdienst", label: "Taxes" },
    { href: "#ind", label: "IND" },
    { href: "#municipalities", label: "Gemeenten" },
    { href: "#uwv", label: "UWV" },
    { href: "#svb", label: "SVB" },
    { href: "#healthcare", label: "Healthcare" },
    { href: "#kvk", label: "KVK" },
    { href: "#business-gov", label: "Business.gov" },
    { href: "#nederlandwereldwijd", label: "NL worldwide" },
    { href: "#life-events", label: "Life events" },
    { href: "#checklist", label: "Checklist" },
    { href: "#directory", label: "Directory" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
    { href: "#related-guides", label: "Related" },
    { href: "#explore-next", label: "Explore next" },
  ],
  visuals: {
    intro: visual(
      "intro",
      "Premium infographic overview of Dutch government portals for expats in the Netherlands.",
      "The essential government websites newcomers bookmark for taxes, municipalities, immigration and daily admin."
    ),
    snapshot: visual(
      "snapshot",
      "Premium infographic snapshot of government services at a glance for expats.",
      "DigiD, MijnOverheid, Belastingdienst, IND, municipalities and employment agencies in one map."
    ),
    ecosystem: visual(
      "ecosystem",
      "Premium infographic of the Dutch digital government ecosystem flow for newcomers.",
      "From BSN and DigiD to portals for taxes, healthcare, gemeente and business services."
    ),
    digid: visual(
      "digid",
      "Premium infographic explaining DigiD in the Dutch government portal landscape.",
      "Digital identity login connecting residents to taxes, healthcare admin and municipality portals."
    ),
    mijnoverheid: visual(
      "mijnoverheid",
      "Premium infographic for MijnOverheid government messages and correspondence.",
      "Central inbox for official letters, notifications and personal government records."
    ),
    belastingdienst: visual(
      "belastingdienst",
      "Premium infographic for Belastingdienst tax portals used by residents in the Netherlands.",
      "Income tax, allowances, assessments and tax correspondence online."
    ),
    ind: visual(
      "ind",
      "Premium infographic for IND immigration and residence portal orientation.",
      "Immigration information and residence-related services — verify rules on official IND channels."
    ),
    municipalities: visual(
      "municipalities",
      "Premium infographic for Dutch municipality portals and local government services.",
      "Address registration, permits, local taxes, parking and waste via gemeente websites."
    ),
    uwv: visual(
      "uwv",
      "Premium infographic for UWV employment and benefits portals.",
      "Employment insurance, labour market resources and benefit correspondence at a high level."
    ),
    svb: visual(
      "svb",
      "Premium infographic for SVB social insurance administration portals.",
      "Family benefits, pensions and social insurance programs through official channels."
    ),
    healthcare: visual(
      "healthcare",
      "Premium infographic connecting healthcare portals with DigiD in the Netherlands.",
      "Insurers, healthcare administration and national care systems online."
    ),
    kvk: visual(
      "kvk",
      "Premium infographic for KVK Chamber of Commerce business registration portals.",
      "Company registration, trade register lookups and entrepreneur orientation."
    ),
    businessGov: visual(
      "business-gov",
      "Premium infographic for Business.gov.nl entrepreneur government information.",
      "Regulations, permits and business guidance from Dutch government sources."
    ),
    nederlandwereldwijd: visual(
      "nederlandwereldwijd",
      "Premium infographic for NederlandWereldwijd information for internationals.",
      "Government information for Dutch nationals abroad and internationals in the Netherlands."
    ),
    lifeEvents: visual(
      "life-events",
      "Premium infographic table of which government portal to use per life event.",
      "Move, register, tax, healthcare, business and benefits mapped to official portals."
    ),
    checklist: visual(
      "checklist",
      "Premium infographic digital setup checklist for new arrivals in the Netherlands.",
      "Address, BSN, DigiD, MijnOverheid, municipality and tax basics in sequence."
    ),
    directory: visual(
      "directory",
      "Premium infographic directory of major Dutch government portals for expats.",
      "Government.nl, DigiD, Belastingdienst, IND, UWV, SVB, KVK and more with purposes."
    ),
    mistakes: visual(
      "mistakes",
      "Premium infographic of common government portal mistakes expats make.",
      "Delaying DigiD, ignoring MijnOverheid and unofficial websites create admin stress."
    ),
    faq: visual(
      "faq",
      "Premium infographic summarizing government portal FAQ for expats.",
      "Which websites to know, what DigiD does and what to set up first."
    ),
    sources: visual(
      "sources",
      "Premium infographic of official government portal sources for verification.",
      "Bookmark official domains — verify eligibility and services on government sites."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium infographic linking government portals guide to DigiD, taxes and relocation guides.",
      "Continue into the guide that matches your next onboarding step."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium infographic explore-next paths after government portal orientation.",
      "DigiD, municipality services, taxes, healthcare and business setup guides."
    ),
  },
  visualTextDetails: {
    intro: {
      title: "Portal essentials",
      items: [
        "Dutch public life is digital-first — most residents use online portals weekly.",
        "DigiD is the login layer for many tax, healthcare and municipality sites.",
        "MijnOverheid collects official government messages in one place.",
        "Each agency runs its own portal — this guide maps which site does what.",
        "Bookmark official URLs; avoid paid “setup helpers” and search-ad phishing sites.",
      ],
    },
    snapshot: {
      title: "At a glance",
      items: [
        "DigiD — secure login for many public-sector portals.",
        "MijnOverheid — government correspondence and notifications.",
        "Belastingdienst — taxes, allowances and assessments.",
        "IND — immigration and residence information (verify officially).",
        "Gemeente portals — local registration, permits and local taxes.",
        "UWV and SVB — employment and social insurance administration.",
      ],
    },
    ecosystem: {
      title: "How systems connect",
      items: [
        "Register your address at the gemeente and confirm BSN context.",
        "Apply for and activate DigiD when post reaches your home.",
        "Use DigiD to log in to agency portals (tax, insurer, municipality).",
        "MijnOverheid surfaces messages from multiple government bodies.",
        "Business routes add KVK and Business.gov.nl after registration needs arise.",
      ],
    },
    digid: {
      title: "DigiD in context",
      items: [
        "National digital identity — not a physical ID card.",
        "Required for many online government and public-sector logins.",
        "Tied to personal registration data including BSN context.",
        "Activate via official post to your registered address.",
        "See our full DigiD guide for orientation and security habits.",
      ],
    },
    mijnoverheid: {
      title: "Why residents use it",
      items: [
        "Official government messages arrive in a central digital mailbox.",
        "Reduces missed letters about tax, benefits or municipality matters.",
        "Often linked to DigiD for secure access.",
        "Check regularly during your first months in the Netherlands.",
        "Not a substitute for agency-specific portals — a message hub.",
      ],
    },
    belastingdienst: {
      title: "Tax portal context",
      items: [
        "Mijn Belastingdienst for assessments and correspondence.",
        "Allowance and toeslagen interactions may connect here.",
        "Strict deadlines — portal access does not pause legal dates.",
        "Cross-border income may still need professional advice.",
        "Pair with our taxes hub for expat filing orientation.",
      ],
    },
    ind: {
      title: "Immigration orientation",
      items: [
        "IND handles residence permits and immigration information.",
        "Portal content explains processes — not individual legal advice.",
        "Permit type and employer sponsorship affect your route.",
        "Always verify current rules on ind.nl and official correspondence.",
        "See visas hub for broader relocation permit context.",
      ],
    },
    municipalities: {
      title: "Gemeente portals",
      items: [
        "Address registration and internal moves within a city.",
        "Local taxes, waste, parking and permit requests.",
        "Processes and English support vary by municipality.",
        "Bookmark your city site early — Amsterdam, Rotterdam, Utrecht, The Hague, Eindhoven.",
        "See municipality services guide for full gemeente map.",
      ],
    },
    uwv: {
      title: "Employment agency context",
      items: [
        "UWV covers employment insurance and labour market administration.",
        "Benefit correspondence often routes through secure login.",
        "Eligibility rules are separate from having portal access.",
        "Workers between jobs may encounter UWV portals over time.",
        "Verify agency-specific requirements on uwv.nl.",
      ],
    },
    svb: {
      title: "Social insurance context",
      items: [
        "SVB administers social insurance-related programs.",
        "Family benefits and pension-related flows may use SVB portals.",
        "Household and address data at gemeente affect records.",
        "Long-term residents interact with SVB more over time.",
        "Official svb.nl for current program information.",
      ],
    },
    healthcare: {
      title: "Healthcare portals",
      items: [
        "Mandatory health insurance — insurer self-service portals.",
        "DigiD often unlocks policy letters and premium details.",
        "GP registration is separate from government portal setup.",
        "National healthcare administration sites for official correspondence.",
        "See health insurance guide for enrollment orientation.",
      ],
    },
    kvk: {
      title: "Business register context",
      items: [
        "KVK is the Dutch Chamber of Commerce trade register.",
        "Company registration and business lookups for entrepreneurs.",
        "Required step for many formal business structures.",
        "Pair with starting a business and ZZP guides.",
        "Official kvk.nl for registration workflows.",
      ],
    },
    businessGov: {
      title: "Entrepreneur information",
      items: [
        "Business.gov.nl aggregates government guidance for companies.",
        "Permits, regulations and sector rules at a national level.",
        "Use alongside KVK and tax portals for full picture.",
        "Does not replace professional legal or tax advice.",
        "Bookmark for permit and compliance orientation.",
      ],
    },
    nederlandwereldwijd: {
      title: "For internationals",
      items: [
        "Government information tailored to Dutch nationals abroad.",
        "Useful cross-border and relocation context for internationals.",
        "Complements Government.nl and agency-specific portals.",
        "Verify DigiD and registration steps on DigiD.nl as well.",
        "Official nederlandwereldwijd.nl for current topics.",
      ],
    },
    lifeEvents: {
      title: "Portal routing",
      items: [
        "Match your life event to the primary portal first.",
        "Many flows still need DigiD even when the agency site differs.",
        "Municipality tasks almost always start at your gemeente website.",
        "Tax season centers on Belastingdienst portals.",
        "Immigration questions start on IND — confirm with official sources.",
      ],
    },
    checklist: {
      title: "Setup sequence",
      items: [
        "Register address before expecting DigiD post.",
        "Activate DigiD and MijnOverheid in your first weeks.",
        "Bookmark Belastingdienst and your gemeente portal.",
        "Add insurer portal after health insurance enrollment.",
        "Entrepreneurs add KVK and Business.gov.nl when registering a business.",
      ],
    },
    directory: {
      title: "Directory tips",
      items: [
        "Use this section as a bookmark reference — verify URLs manually.",
        "Agency names in Dutch — search using official spellings.",
        "English pages vary; gemeente and IND differ widely.",
        "Mobile apps exist for DigiD and some agencies — use official apps only.",
        "Re-check portals after internal moves or permit changes.",
      ],
    },
    mistakes: {
      title: "Avoid these",
      items: [
        "Delaying DigiD until an urgent tax or insurer deadline.",
        "Ignoring MijnOverheid messages for months.",
        "Logging in via unofficial links from emails or ads.",
        "Assuming one portal replaces gemeente registration.",
        "Missing tax letters because portal was not activated.",
      ],
    },
    faq: {
      title: "FAQ orientation",
      items: [
        "Most expats use DigiD, MijnOverheid, Belastingdienst and gemeente portals regularly.",
        "IND portal is for immigration information — not legal advice.",
        "Healthcare portals are often insurer-specific with DigiD login.",
        "Business portals layer on after KVK registration.",
        "Always verify current rules on official websites.",
      ],
    },
    sources: {
      title: "Official verification",
      items: [
        "Government.nl and Rijksoverheid for central government context.",
        "DigiD.nl for identity setup and security guidance.",
        "Agency sites (Belastingdienst, IND, UWV, SVB, KVK) for domain-specific rules.",
        "MijnOverheid.nl for message inbox orientation.",
        "Rules and supported services change — recheck before applications.",
      ],
    },
    relatedGuides: {
      title: "Next guides",
      items: [
        "DigiD Netherlands — full digital identity orientation.",
        "Address registration — prerequisite for BSN and DigiD post.",
        "Municipality services — gemeente tasks and local taxes.",
        "Taxes hub — Belastingdienst context for expats.",
        "Health insurance — mandatory care and insurer portals.",
      ],
    },
    exploreNext: {
      title: "Pick your next step",
      items: [
        "No DigiD yet — start with address registration and our DigiD guide.",
        "Tax letter arrived — open taxes hub for Belastingdienst orientation.",
        "Gemeente task unclear — municipality services guide for permits and local taxes.",
        "Starting a business — pair KVK registration with Business.gov.nl and our business guides.",
        "Still relocating — moving guide for full first-month sequencing.",
      ],
    },
  },
  quickAnswer: {
    heading: "The Most Important Government Websites",
    summaryPoints: [
      "Most expats regularly use DigiD, MijnOverheid, Belastingdienst, municipality portals, IND, UWV and SVB — each handles a different part of Dutch public life.",
      "DigiD is the secure login layer that connects you to many of these portals online.",
      "Bookmark official websites early, activate DigiD after registration, and check MijnOverheid so official messages do not pile up unseen.",
      "This guide maps which portal handles taxes, immigration, local services, healthcare administration and business — without replacing official advice.",
    ],
  },
  expatQuestions: [
    {
      q: "Which Dutch government websites do I need?",
      a: "Most newcomers bookmark DigiD, MijnOverheid, Belastingdienst, their gemeente portal and IND — then add UWV, SVB, health insurer and KVK portals as their situation requires.",
    },
    {
      q: "What is DigiD used for?",
      a: "DigiD is the national digital login for many public-sector websites — taxes, healthcare admin, municipalities and agency portals.",
    },
    {
      q: "Which portal handles taxes?",
      a: "Belastingdienst operates the national tax portal for income tax, allowances and official tax correspondence.",
    },
    {
      q: "Where do I register my address?",
      a: "Address registration happens at your municipality (gemeente) — book an appointment on your city's official gemeente website.",
    },
    {
      q: "Which website handles healthcare?",
      a: "Mandatory health insurance uses your insurer's self-service portal, often with DigiD. National healthcare administration sites sit alongside insurer portals.",
    },
    {
      q: "Which website handles immigration?",
      a: "IND publishes immigration and residence information — verify permit rules through official IND channels.",
    },
    {
      q: "What government services should I know about?",
      a: "Registration (gemeente), digital identity (DigiD), messages (MijnOverheid), taxes (Belastingdienst), employment (UWV), social insurance (SVB) and business (KVK) cover most recurring admin.",
    },
    {
      q: "Which portals should I bookmark?",
      a: "DigiD, MijnOverheid, Belastingdienst, your gemeente site and your health insurer portal — then IND, UWV, SVB or KVK when your situation requires them.",
    },
  ],
  snapshotSignals: [
    { label: "Identity login", value: "DigiD", note: "Gateway to many portals" },
    { label: "Messages", value: "MijnOverheid", note: "Official government inbox" },
    { label: "Taxes", value: "Belastingdienst", note: "Filings and correspondence" },
    { label: "Local admin", value: "Gemeente", note: "Registration and permits" },
  ] satisfies SnapshotSignal[],
  snapshotCards: [
    { title: "DigiD for identity", body: "Secure login for taxes, healthcare admin, municipalities and many agency portals." },
    { title: "MijnOverheid for messages", body: "Central government correspondence — check during your first months." },
    { title: "Belastingdienst for taxes", body: "Income tax, allowances, assessments and official tax letters online." },
    { title: "IND for immigration", body: "Residence and immigration information — verify rules on official IND channels." },
    { title: "Municipality portals", body: "Address registration, local taxes, parking, waste and permits per city." },
    { title: "UWV for employment", body: "Employment insurance, benefits correspondence and labour market resources." },
    { title: "SVB for social insurance", body: "Family benefits, pension-related admin and social insurance correspondence." },
  ] satisfies TipCard[],
  ecosystemMilestones: [
    { label: "Week 1", value: "Gemeente registration", note: "Address + BSN context for most newcomers" },
    { label: "Week 2–4", value: "DigiD application", note: "When post reliably reaches your home" },
    { label: "Month 1", value: "Portal bookmarks", note: "MijnOverheid, Belastingdienst, gemeente" },
    { label: "Month 1–3", value: "Healthcare + business", note: "Insurer portal; KVK if entrepreneur" },
  ] satisfies SnapshotSignal[],
  snapshotUseTips: [
    "Bookmark official URLs in your browser — type them manually, not from ads.",
    "Activate DigiD in week two–four after address registration when post is reliable.",
    "Log into MijnOverheid monthly during your first year.",
    "Use this page as a reference map — each agency publishes its own detailed steps.",
    "Pair portal setup with our DigiD and municipality guides for sequencing.",
  ],
  orientationFlowSteps: [
    "Register your address and confirm BSN before expecting DigiD and portal access.",
    "Activate DigiD and MijnOverheid, then bookmark Belastingdienst and your gemeente site.",
    "Add insurer and business portals when healthcare enrollment or KVK registration begins.",
  ],
  ecosystem: {
    heading: "How Dutch Government Services Work",
    paragraphs: [
      "Many Dutch public services are digital-first. After you register at the gemeente and receive BSN context, you typically apply for DigiD — the national login used across tax, healthcare administration, municipality and agency portals.",
      "The practical chain looks like: BSN and registration data → DigiD activation → agency portals (Belastingdienst, gemeente, insurer, IND, UWV, SVB) → day-to-day online tasks.",
      "MijnOverheid sits alongside agency portals as a message hub. Entrepreneurs add KVK and Business.gov.nl when company registration becomes relevant.",
    ],
  },
  ecosystemSteps: [
    "Register your residential address at the municipality (gemeente).",
    "Receive or confirm your BSN through registration or official correspondence.",
    "Apply for DigiD when post reliably reaches your registered home address.",
    "Activate MijnOverheid and bookmark Belastingdienst plus your gemeente portal.",
    "Add healthcare insurer portals after mandatory insurance enrollment.",
    "Use IND, UWV or SVB portals when your residence or employment situation requires them.",
  ],
  portalGuideSections: [
    {
      id: "digid",
      visualSlug: "digid",
      heading: "DigiD",
      paragraphs: [
        "DigiD is the Netherlands' digital identity system. It lets residents securely log in to many government and public-sector websites — from tax portals to insurer self-service and municipality desks.",
        "For most newcomers, DigiD is the first technical bridge between registration at the gemeente and practical online admin. Activation usually involves official post to your registered address.",
      ],
      cards: [
        { title: "Healthcare admin", body: "Insurer portals and official healthcare correspondence." },
        { title: "Tax portals", body: "Mijn Belastingdienst and related tax services." },
        { title: "Municipalities", body: "Address changes, permits and local resident services." },
        { title: "Agency logins", body: "UWV, SVB and other public-sector portals where applicable." },
      ],
      crossLink: {
        href: DIGID_NETHERLANDS_PATH,
        title: "DigiD in the Netherlands",
        description: "Full guide to digital identity, activation orientation, security and use cases.",
        linkLabel: "Open DigiD guide",
      },
      tasks: [
        { task: "Apply for DigiD after gemeente registration", portal: "DigiD.nl", timing: "When post reliably reaches your registered address" },
        { task: "Activate with code from official letter", portal: "DigiD.nl / app", timing: "Within deadline printed on activation post" },
        { task: "Test login on gemeente or insurer portal", portal: "Low-stakes official site", timing: "Before urgent tax or benefit deadlines" },
        { task: "Approve mobile logins from official app", portal: "DigiD app", timing: "Ongoing — replaces SMS in many flows" },
      ],
    },
    {
      id: "mijnoverheid",
      visualSlug: "mijnoverheid",
      heading: "MijnOverheid",
      paragraphs: [
        "MijnOverheid is the central government communication platform for many residents. Official messages from ministries and agencies can appear here — similar to a secure government inbox.",
        "Checking MijnOverheid during your first months reduces the risk of missing tax letters, benefit notices or municipality follow-ups that also arrive digitally.",
      ],
      cards: [
        { title: "Official messages", body: "Government correspondence collected in one digital place." },
        { title: "Notifications", body: "Alerts when new official documents are available." },
        { title: "Personal records", body: "Access to certain government-held information where offered." },
        { title: "DigiD login", body: "Typically accessed with the same secure identity as other portals." },
      ],
      bulletTitle: "Check regularly for",
      bulletItems: [
        "Tax assessments and Belastingdienst correspondence.",
        "Municipality or agency notifications about your registration.",
        "Benefit or employment insurance letters when applicable.",
      ],
      tasks: [
        { task: "Log in and scan unread messages", portal: "MijnOverheid", timing: "Monthly during your first year" },
        { task: "Open Belastingdienst letter notification", portal: "MijnOverheid → agency link", timing: "When tax season alerts appear" },
        { task: "Confirm digital message settings", portal: "MijnOverheid preferences", timing: "After first login" },
      ],
    },
    {
      id: "belastingdienst",
      visualSlug: "belastingdienst",
      heading: "Belastingdienst (Dutch Tax Authority)",
      paragraphs: [
        "Belastingdienst operates the national tax administration. Residents use its portals for income tax, provisional assessments, allowances (toeslagen) and official tax correspondence.",
        "DigiD is commonly required for online access. Deadlines are strict — set up portal access before your first tax letter season.",
      ],
      cards: [
        { title: "Income tax", body: "Filings, assessments and payment information." },
        { title: "Allowances", body: "Healthcare, rent and childcare allowance interactions where applicable." },
        { title: "Correspondence", body: "Official letters and document downloads for advisors." },
        { title: "Cross-border", body: "Dutch portal access does not replace specialist tax advice when income is international." },
      ],
      crossLink: {
        href: TAXES_HUB_PATH,
        title: "Taxes Hub",
        description: "Expat tax guides, Belastingdienst orientation and filing context.",
        linkLabel: "Open taxes hub",
      },
      tasks: [
        { task: "Download annual income tax assessment", portal: "Mijn Belastingdienst", timing: "After assessment letter (often spring)" },
        { task: "Review toeslagen / allowance status", portal: "Belastingdienst toeslagen", timing: "When household or income changes" },
        { task: "Pay or arrange tax balance", portal: "Mijn Belastingdienst", timing: "By deadline on assessment — portal does not extend dates" },
        { task: "Share letters with tax advisor", portal: "Mijn Belastingdienst downloads", timing: "Before cross-border filing deadlines" },
      ],
    },
    {
      id: "ind",
      visualSlug: "ind",
      heading: "IND (Immigration and Naturalisation Service)",
      paragraphs: [
        "IND handles immigration and residence matters for the Netherlands. Its website explains permit types, application processes and residence-related services at a high level.",
        "This guide does not provide immigration or legal advice. Always verify your situation on ind.nl and through official correspondence tied to your permit.",
      ],
      cards: [
        { title: "Residence permits", body: "Information on permit types and application routes." },
        { title: "Immigration FAQs", body: "Official explanations of common residence topics." },
        { title: "Employer sponsorship", body: "Context for highly skilled migrant and work permit routes." },
        { title: "Verify officially", body: "IND rules change — use only official IND channels for applications." },
      ],
      crossLink: {
        href: VISAS_HUB_PATH,
        title: "Visas & residency hub",
        description: "Broader relocation permit context and visa guides for the Netherlands.",
        linkLabel: "Open visas hub",
      },
      tasks: [
        { task: "Read permit type overview for your route", portal: "ind.nl", timing: "Before applying or changing employer" },
        { task: "Check application requirements list", portal: "IND information pages", timing: "Orientation only — verify officially" },
        { task: "Track official correspondence on permit", portal: "IND / employer channels", timing: "After application submitted" },
      ],
    },
    {
      id: "municipalities",
      visualSlug: "municipalities",
      heading: "Municipality Websites",
      paragraphs: [
        "Dutch municipalities (gemeenten) manage local resident services: address registration, local taxes, waste collection, parking permits and many permit requests.",
        "Each city publishes its own portal. English support varies — bookmark your gemeente site on day one.",
      ],
      cards: [
        { title: "Address registration", body: "First official step for most newcomers — book gemeente appointment." },
        { title: "Local taxes", body: "Waste tax, water board levies and municipal charges." },
        { title: "Permits", body: "Parking, events and housing-related permits where offered online." },
        { title: "DigiD integration", body: "Many gemeente tasks use DigiD login after activation." },
      ],
      bulletTitle: "Major city portals (examples)",
      bulletItems: [
        "Amsterdam — amsterdam.nl resident services.",
        "Rotterdam — gemeente Rotterdam online desk.",
        "The Hague — denhaag.nl international resident pages.",
        "Utrecht — gemeente Utrecht registration and permits.",
        "Eindhoven — eindhoven.nl municipality services.",
      ],
      crossLink: {
        href: MUNICIPALITY_SERVICES_PATH,
        title: "Municipality Services in the Netherlands",
        description: "Gemeente registration, BSN, local taxes, permits and digital government touchpoints.",
        linkLabel: "Open municipality services guide",
      },
      tasks: [
        { task: "Book address registration appointment", portal: "Your gemeente website", timing: "Within official window after arrival" },
        { task: "Report internal move within city", portal: "Gemeente online desk", timing: "After changing apartment within same municipality" },
        { task: "Apply for resident parking permit", portal: "Municipal parking portal", timing: "When you need on-street parking at home" },
        { task: "View local waste or water tax levy", portal: "Gemeente / regional tax site", timing: "When annual local tax letters arrive" },
      ],
    },
    {
      id: "uwv",
      visualSlug: "uwv",
      heading: "UWV",
      paragraphs: [
        "UWV (Uitvoeringsinstituut Werknemersverzekeringen) handles employment insurance and related labour market administration. Residents may encounter UWV portals for employment information and benefit correspondence.",
        "Having DigiD access helps read letters online; eligibility for benefits follows UWV rules, not portal setup alone.",
      ],
      cards: [
        { title: "Employment insurance", body: "Information on work-related social insurance topics." },
        { title: "Benefit correspondence", body: "Official letters about employment and benefit situations." },
        { title: "Labour market", body: "Resources connected to work and re-employment." },
        { title: "Official only", body: "Verify procedures on uwv.nl — avoid unofficial intermediaries." },
      ],
      tasks: [
        { task: "Read employment insurance correspondence", portal: "UWV portal", timing: "When between jobs or benefit letters arrive" },
        { task: "Check labour market resources", portal: "uwv.nl", timing: "During job search or contract changes" },
      ],
    },
    {
      id: "svb",
      visualSlug: "svb",
      heading: "SVB (Social Insurance Bank)",
      paragraphs: [
        "SVB administers social insurance programs including family benefits and aspects of pension-related administration. Long-term residents and families may use SVB portals over time.",
        "Portal access is separate from eligibility — official rules define who can receive which benefits.",
      ],
      cards: [
        { title: "Family benefits", body: "Administration connected to household and child-related programs." },
        { title: "Social insurance", body: "Official social insurance correspondence and records." },
        { title: "Pension links", body: "Some flows connect to broader pension and benefits landscape." },
        { title: "Household data", body: "Keep gemeente registration current for accurate records." },
      ],
      tasks: [
        { task: "Review family benefit correspondence", portal: "SVB portal", timing: "When household or child situation changes" },
        { task: "Confirm address data matches gemeente", portal: "SVB + gemeente registration", timing: "After any move — records must align" },
      ],
    },
    {
      id: "healthcare",
      visualSlug: "healthcare",
      heading: "Healthcare Services",
      paragraphs: [
        "Healthcare in the Netherlands combines mandatory health insurance, GP (huisarts) care and national administration systems. Government portals intersect through insurer self-service sites and official healthcare correspondence — often via DigiD.",
        "Clinical care itself is not booked through DigiD, but insurance letters, policy details and some administration flows are online.",
      ],
      cards: [
        { title: "Health insurers", body: "Policy portals for premiums, letters and annual statements." },
        { title: "Healthcare providers", body: "Some administration and referral portals use DigiD." },
        { title: "National systems", body: "Official healthcare information and registration context." },
        { title: "Mandatory insurance", body: "Register for insurance within the legal window after arrival." },
      ],
      crossLink: {
        href: HEALTH_INSURANCE_PATH,
        title: "Health Insurance Netherlands",
        description: "Mandatory insurance setup paired with insurer portals that often use DigiD.",
        linkLabel: "Open health insurance guide",
      },
      tasks: [
        { task: "Enroll in mandatory basic insurance", portal: "Insurer website", timing: "Within legal window after becoming resident" },
        { task: "Download policy and premium letters", portal: "Insurer self-service (often DigiD)", timing: "After enrollment and each January" },
        { task: "Update bank details for premium", portal: "Insurer portal", timing: "When payment method changes" },
      ],
    },
    {
      id: "kvk",
      visualSlug: "kvk",
      heading: "KVK (Chamber of Commerce)",
      paragraphs: [
        "KVK is the Dutch Chamber of Commerce. Entrepreneurs register businesses in the trade register, look up company data and access starter information through KVK portals.",
        "Formal business activity in the Netherlands typically involves KVK registration alongside tax and permit portals.",
      ],
      cards: [
        { title: "Company registration", body: "Register sole proprietorships, partnerships and companies." },
        { title: "Trade register", body: "Look up official business information and registrations." },
        { title: "Entrepreneur support", body: "Orientation for starters and small business owners." },
        { title: "Tax follow-up", body: "Pair KVK steps with Belastingdienst business tax orientation." },
      ],
      crossLink: {
        href: STARTING_BUSINESS_PATH,
        title: "Starting a Business in the Netherlands",
        description: "Registration routes, KVK context and entrepreneur onboarding.",
        linkLabel: "Open starting a business guide",
      },
      tasks: [
        { task: "Register sole proprietorship or company", portal: "kvk.nl", timing: "Before trading formally or invoicing clients" },
        { task: "Look up trade register number", portal: "KVK search", timing: "When verifying partners or suppliers" },
        { task: "Download registration extract", portal: "KVK portal", timing: "For bank account or contract onboarding" },
      ],
    },
    {
      id: "business-gov",
      visualSlug: "businessGov",
      heading: "Business.gov.nl",
      paragraphs: [
        "Business.gov.nl aggregates government information for entrepreneurs — regulations, permits and sector guidance from Dutch authorities.",
        "Use it alongside KVK and Belastingdienst when planning permits, compliance and business structure questions at a high level.",
      ],
      cards: [
        { title: "Regulations", body: "National rules and sector guidance for companies." },
        { title: "Permits", body: "Orientation on which permits may apply to your activity." },
        { title: "Starter routes", body: "Links to agency-specific registration steps." },
        { title: "Not legal advice", body: "Confirm complex compliance questions with professionals." },
      ],
      crossLink: {
        href: ZZP_PATH,
        title: "ZZP Netherlands",
        description: "Freelancer and sole proprietor orientation including KVK and tax context.",
        linkLabel: "Open ZZP guide",
      },
    },
    {
      id: "nederlandwereldwijd",
      visualSlug: "nederlandwereldwijd",
      heading: "NederlandWereldwijd",
      paragraphs: [
        "NederlandWereldwijd provides government information for Dutch nationals living abroad and internationals navigating Dutch administration.",
        "Expats often use it for cross-border topics, document context and links to central government resources alongside agency-specific portals.",
      ],
      cards: [
        { title: "Internationals", body: "Relocation and life-in-the-Netherlands orientation." },
        { title: "Cross-border", body: "Topics for people moving between countries." },
        { title: "Official links", body: "Gateway to verified government information sources." },
        { title: "Complement DigiD", body: "Use with DigiD.nl and gemeente portals for setup steps." },
      ],
    },
  ] satisfies PortalGuideSection[],
  lifeEventTable: [
    { lifeEvent: "Move to the Netherlands", portal: "Gemeente + IND", notes: "Register address; confirm residence route on official IND channels." },
    { lifeEvent: "Register address", portal: "Gemeente portal", notes: "Book appointment; bring housing and ID documents." },
    { lifeEvent: "Obtain BSN", portal: "Gemeente (registration)", notes: "BSN issued through municipal registration for most newcomers." },
    { lifeEvent: "Activate digital identity", portal: "DigiD.nl", notes: "Apply after registration; activate via official post." },
    { lifeEvent: "Read government mail", portal: "MijnOverheid", notes: "Check inbox monthly in your first year." },
    { lifeEvent: "Taxes and allowances", portal: "Belastingdienst", notes: "Mijn Belastingdienst for assessments and toeslagen context." },
    { lifeEvent: "Healthcare insurance", portal: "Insurer portal + DigiD", notes: "Mandatory insurance; insurer sites for policy admin." },
    { lifeEvent: "Immigration questions", portal: "IND", notes: "Information only — verify permit rules officially." },
    { lifeEvent: "Start a business", portal: "KVK + Business.gov.nl", notes: "Trade register plus entrepreneur guidance." },
    { lifeEvent: "Find benefits", portal: "UWV / SVB / Belastingdienst", notes: "Agency depends on benefit type — eligibility is rule-based." },
    { lifeEvent: "Retirement / pensions", portal: "SVB + pension portals", notes: "Long-term residents; often DigiD-enabled." },
    { lifeEvent: "Parking permit", portal: "Gemeente portal", notes: "City-specific resident parking desks online." },
    { lifeEvent: "Local taxes", portal: "Gemeente / regional tax", notes: "Waste tax and water board levies vary by location." },
  ] satisfies LifeEventRow[],
  setupChecklist: [
    "Register your address at the gemeente.",
    "Obtain or confirm your BSN through registration.",
    "Apply for DigiD when post reliably reaches your home.",
    "Activate DigiD within the official window on the letter.",
    "Set up and check MijnOverheid for government messages.",
    "Bookmark your municipality portal and Belastingdienst.",
    "Enroll in mandatory health insurance and save insurer portal login.",
    "Bookmark Government.nl, IND and KVK if relevant to your situation.",
  ],
  setupChecklistDetails: [
    {
      task: "Register address at gemeente",
      timing: "Week 1",
      detail: "Book appointment on your city portal; bring housing contract, ID and any residence permit documents required by your municipality.",
    },
    {
      task: "Confirm BSN context",
      timing: "Week 1",
      detail: "BSN is usually issued at registration or follows by post — keep the confirmation letter for employer and DigiD application.",
    },
    {
      task: "Apply for DigiD",
      timing: "Week 2–4",
      detail: "Only when post reliably reaches your registered home — activation letter is sent to that address.",
    },
    {
      task: "Activate DigiD",
      timing: "When letter arrives",
      detail: "Complete activation within the deadline on the official letter; test login on a low-stakes portal.",
    },
    {
      task: "Set up MijnOverheid",
      timing: "Week 3–6",
      detail: "Log in with DigiD and scan for existing government messages — check monthly in year one.",
    },
    {
      task: "Bookmark core portals",
      timing: "Month 1",
      detail: "Gemeente site, Belastingdienst, DigiD and MijnOverheid — type URLs manually into bookmarks.",
    },
    {
      task: "Health insurance + insurer portal",
      timing: "Month 1",
      detail: "Enroll within the legal window; save insurer login and enable DigiD if offered.",
    },
    {
      task: "Add IND / KVK bookmarks",
      timing: "As needed",
      detail: "Permit holders bookmark IND; entrepreneurs add KVK and Business.gov.nl after planning business structure.",
    },
  ] satisfies SetupChecklistItem[],
  portalDirectory: [
    {
      name: "Government.nl",
      purpose: "Central English-friendly government information portal.",
      audience: "All residents and newcomers seeking official topic overviews.",
      website: "https://www.government.nl/",
      websiteLabel: "government.nl",
      keyServices: ["Topic guides", "Agency links", "Living in the NL orientation"],
    },
    {
      name: "Rijksoverheid",
      purpose: "Dutch central government portal (often Dutch-first).",
      audience: "Residents comfortable with Dutch official pages.",
      website: "https://www.rijksoverheid.nl/",
      websiteLabel: "rijksoverheid.nl",
      keyServices: ["Policy news", "Ministry services", "Official announcements"],
    },
    {
      name: "DigiD",
      purpose: "National digital identity and secure login.",
      audience: "Registered residents with BSN context.",
      website: "https://www.digid.nl/",
      websiteLabel: "digid.nl",
      keyServices: ["Application", "Activation", "Security guidance"],
    },
    {
      name: "MijnOverheid",
      purpose: "Central government message and correspondence inbox.",
      audience: "Residents receiving official digital government mail.",
      website: "https://www.mijnoverheid.nl/",
      websiteLabel: "mijnoverheid.nl",
      keyServices: ["Official messages", "Notifications", "Personal records access"],
    },
    {
      name: "Belastingdienst",
      purpose: "National tax authority portals and information.",
      audience: "Residents with tax filing and allowance obligations.",
      website: "https://www.belastingdienst.nl/",
      websiteLabel: "belastingdienst.nl",
      keyServices: ["Income tax", "Allowances", "Tax correspondence"],
    },
    {
      name: "IND",
      purpose: "Immigration and residence service information.",
      audience: "Non-EU workers, families and permit holders.",
      website: "https://ind.nl/",
      websiteLabel: "ind.nl",
      keyServices: ["Permit information", "Application orientation", "Official FAQs"],
    },
    {
      name: "UWV",
      purpose: "Employment insurance and labour market administration.",
      audience: "Workers and residents with employment insurance topics.",
      website: "https://www.uwv.nl/",
      websiteLabel: "uwv.nl",
      keyServices: ["Employment insurance", "Benefit correspondence", "Labour resources"],
    },
    {
      name: "SVB",
      purpose: "Social insurance bank administration.",
      audience: "Families and long-term residents with social insurance flows.",
      website: "https://www.svb.nl/",
      websiteLabel: "svb.nl",
      keyServices: ["Family benefits", "Social insurance", "Pension-related admin"],
    },
    {
      name: "KVK",
      purpose: "Chamber of Commerce trade register.",
      audience: "Entrepreneurs, freelancers and company owners.",
      website: "https://www.kvk.nl/",
      websiteLabel: "kvk.nl",
      keyServices: ["Business registration", "Trade register", "Starter information"],
    },
    {
      name: "Business.gov.nl",
      purpose: "Government entrepreneur information portal.",
      audience: "Business owners seeking regulations and permits.",
      website: "https://business.gov.nl/",
      websiteLabel: "business.gov.nl",
      keyServices: ["Regulations", "Permits", "Sector guidance"],
    },
    {
      name: "NederlandWereldwijd",
      purpose: "Government information for internationals and Dutch abroad.",
      audience: "Expats and cross-border residents.",
      website: "https://www.nederlandwereldwijd.nl/",
      websiteLabel: "nederlandwereldwijd.nl",
      keyServices: ["International topics", "Document context", "Official links"],
    },
  ] satisfies PortalDirectoryEntry[],
  mistakeCards: [
    { title: "Delaying DigiD setup", body: "Urgent tax and insurer deadlines arrive before activation post completes." },
    { title: "Ignoring MijnOverheid", body: "Official messages stack up unseen until a payment or response is overdue." },
    { title: "Using unofficial websites", body: "Phishing and paid helpers put identity and money at risk." },
    { title: "Confusing agencies", body: "Tax tasks on Belastingdienst — not the gemeente — unless it is a local tax." },
    { title: "Missing tax mail", body: "Legal deadlines apply even if you did not read the digital letter." },
    { title: "Late registration", body: "Without gemeente registration, BSN and DigiD chains stall." },
    { title: "No bookmarks", body: "Searching each time increases clicks on fake government ads." },
    { title: "Expecting one portal", body: "Netherlands uses many agency sites linked by DigiD, not one mega-site." },
  ] satisfies TipCard[],
  mistakeRecoveryTips: [
    "Missed DigiD activation — follow DigiD.nl reapplication guidance; expect postal wait.",
    "Unread MijnOverheid pile — log in weekly until caught up; verify Belastingdienst separately.",
    "Clicked phishing link — reset via official site only; never reuse passwords across portals.",
    "Wrong agency for task — use life-event table above to find the primary portal.",
    "Moved cities — update gemeente registration and refresh portal bookmarks.",
  ],
  faqs: [
    {
      q: "Which government websites should I know?",
      a: "Most expats bookmark DigiD, MijnOverheid, Belastingdienst, their gemeente portal, and IND if they hold a residence permit. Entrepreneurs add KVK and Business.gov.nl. Government.nl is a useful starting point for official topic overviews.",
    },
    {
      q: "What is DigiD?",
      a: "DigiD is the Netherlands' digital identity login. It lets you securely access many government and public-sector websites online, including tax portals, insurer sites and municipality services.",
    },
    {
      q: "What is MijnOverheid?",
      a: "MijnOverheid is a central platform where many official government messages and notifications appear. Residents often check it alongside agency-specific portals so important letters are not missed.",
    },
    {
      q: "Which website handles taxes?",
      a: "Belastingdienst (belastingdienst.nl) operates Dutch national tax administration. Residents typically use Mijn Belastingdienst with DigiD for assessments, allowances and correspondence.",
    },
    {
      q: "Which website handles immigration?",
      a: "IND (ind.nl) publishes immigration and residence information. It does not replace legal advice — always verify your permit situation through official IND channels and correspondence.",
    },
    {
      q: "Which website handles local services?",
      a: "Your municipality (gemeente) website handles address registration, many permits, local taxes and parking. Each city runs its own portal — bookmark yours after choosing where to live.",
    },
    {
      q: "What should I set up first?",
      a: "Register your address at the gemeente, confirm BSN context, apply for DigiD when post is reliable, then activate MijnOverheid and bookmark Belastingdienst and your gemeente portal.",
    },
    {
      q: "Which portals do expats use most?",
      a: "DigiD, MijnOverheid, Belastingdienst and municipality portals are the highest-frequency tools for most international residents. IND, UWV and SVB matter when immigration or employment situations apply.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "Central government information for residents — topic guides and agency links.",
    },
    {
      label: "Rijksoverheid",
      href: "https://www.rijksoverheid.nl/",
      description: "Dutch central government portal for policies and official services.",
    },
    {
      label: "DigiD",
      href: "https://www.digid.nl/",
      description: "Official digital identity — applications, activation and security.",
    },
    {
      label: "MijnOverheid",
      href: "https://www.mijnoverheid.nl/",
      description: "Central government message inbox and notifications.",
    },
    {
      label: "Belastingdienst",
      href: "https://www.belastingdienst.nl/",
      description: "National tax authority — filings, allowances and correspondence.",
    },
    {
      label: "IND",
      href: "https://ind.nl/",
      description: "Immigration and residence information — verify officially.",
    },
    {
      label: "UWV",
      href: "https://www.uwv.nl/",
      description: "Employment insurance and labour market administration.",
    },
    {
      label: "SVB",
      href: "https://www.svb.nl/",
      description: "Social insurance bank — family benefits and social programs.",
    },
    {
      label: "KVK",
      href: "https://www.kvk.nl/",
      description: "Chamber of Commerce — business registration and trade register.",
    },
    {
      label: "Business.gov.nl",
      href: "https://business.gov.nl/",
      description: "Government entrepreneur information — regulations and permits.",
    },
    {
      label: "NederlandWereldwijd",
      href: "https://www.nederlandwereldwijd.nl/",
      description: "Government information for internationals and Dutch nationals abroad.",
    },
  ],
  sourcesDisclaimer:
    "Portal availability, login requirements and supported services may change. Always verify information on official government websites before applying or sharing personal data.",
  sourceUsageTips: [
    "Type official URLs manually — avoid search ads and email links.",
    "Use Government.nl to find the right agency before deep-diving.",
    "Keep DigiD and phone security updated when changing devices.",
    "Re-check IND and Belastingdienst pages after permit or income changes.",
    "Gemeente portals differ — bookmark your city after registration.",
  ],
  relatedGuides: [
    {
      label: "DigiD in the Netherlands",
      href: DIGID_NETHERLANDS_PATH,
      status: "live",
      description: "Digital identity setup, security and portal login orientation.",
    },
    {
      label: "Registering Your Address",
      href: REGISTERING_ADDRESS_PATH,
      status: "live",
      description: "Gemeente registration prerequisite for BSN and DigiD post.",
    },
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      status: "live",
      description: "Local taxes, permits, parking and gemeente digital services.",
    },
    {
      label: "Taxes Hub",
      href: TAXES_HUB_PATH,
      status: "live",
      description: "Expat tax guides and Belastingdienst context.",
    },
    {
      label: "Health Insurance Netherlands",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Mandatory insurance and insurer portal orientation.",
    },
    {
      label: "Starting a Business",
      href: STARTING_BUSINESS_PATH,
      status: "live",
      description: "KVK registration and entrepreneur onboarding.",
    },
  ] satisfies PracticalLifeLink[],
  exploreNextCards: [
    {
      label: "DigiD Guide",
      href: DIGID_NETHERLANDS_PATH,
      status: "live",
      description: "Activate digital identity and secure portal logins.",
    },
    {
      label: "Municipality Services",
      href: MUNICIPALITY_SERVICES_PATH,
      status: "live",
      description: "Gemeente tasks, local taxes and permits.",
    },
    {
      label: "Taxes Hub",
      href: TAXES_HUB_PATH,
      status: "live",
      description: "Belastingdienst orientation for expat filers.",
    },
    {
      label: "Health Insurance",
      href: HEALTH_INSURANCE_PATH,
      status: "live",
      description: "Insurance enrollment and healthcare portals.",
    },
    {
      label: "Starting a Business",
      href: STARTING_BUSINESS_PATH,
      status: "live",
      description: "KVK and entrepreneur government routes.",
    },
  ] satisfies PracticalLifeLink[],
  exploreNextTips: [
    "Complete address registration before expecting DigiD and portal post.",
    "Check MijnOverheid monthly during your first year in the Netherlands.",
    "Bookmark Belastingdienst before your first tax letter season.",
    "Entrepreneurs should pair KVK registration with Business.gov.nl orientation.",
  ],
} as const;

export type GovernmentPortalsNetherlandsPage = typeof governmentPortalsNetherlandsPage;

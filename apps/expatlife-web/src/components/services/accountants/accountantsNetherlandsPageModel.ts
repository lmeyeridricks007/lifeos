import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Services directory — accountants / administratiekantoren / bookkeepers for expats & ZZP. */
export const ACCOUNTANTS_PATH = "/netherlands/services/accountants/" as const;
export const ACCOUNTANTS_NETHERLANDS_PATH = ACCOUNTANTS_PATH;

export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;
export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const BUSINESS_CONSULTANTS_PATH = "/netherlands/services/business-consultants/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const ZZP_NETHERLANDS_PATH = "/netherlands/business/zzp-netherlands/" as const;
export const STARTING_A_BUSINESS_PATH = "/netherlands/business/starting-a-business-netherlands/" as const;
export const FREELANCING_PATH = "/netherlands/jobs/freelancing-netherlands/" as const;
export const STARTING_CONSULTANCY_PATH = "/netherlands/jobs/starting-consultancy-netherlands/" as const;
export const CONTRACTOR_VS_EMPLOYEE_PATH = "/netherlands/jobs/contractor-vs-employee-netherlands/" as const;

export const ACCOUNTANTS_AFFILIATE_PLACEMENT_ID =
  "nl-services-accountants-support-providers" as const;

export type AccountantProvider = {
  name: string;
  slug: string;
  city: string;
  region: string;
  summary: string;
  expatFocus: string;
  languages: string[];
  remoteSupport: boolean;
  inPersonAvailability: string;
  website: string;
  engagementType: string;
  accountantType:
    | "Administratiekantoor / bookkeeping office"
    | "Accountant / AA-RA orientation"
    | "Payroll admin specialist"
    | "Expat-oriented accountancy"
    | "BTW & jaarrekening support"
    | "NBA / KvK discovery path"
    | "Tax-adjacent filing support";
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type AccountantLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-accountants";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const accountantsNetherlandsPage = {
  slug: "accountants",
  path: ACCOUNTANTS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(ACCOUNTANTS_PATH) ?? "2026-11-13",
  affiliatePlacementId: ACCOUNTANTS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Accountants in the Netherlands for Expats | Bookkeeping & ZZP Admin",
    description:
      "Find Dutch accountants and administratiekantoren for bookkeeping, BTW filings, jaarrekening and payroll admin. Soft discovery for expats and ZZP — not a ranking or tax advice.",
    keywords: [
      "accountants netherlands",
      "administratiekantoor netherlands",
      "bookkeeper netherlands expat",
      "ZZP accountant netherlands",
      "BTW accountant netherlands",
      "jaarrekening accountant",
      "payroll admin netherlands",
      "expat bookkeeping netherlands",
      "accountant vs tax advisor netherlands",
      "Dutch accounting office expats",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Accountants",
    pageTitle: "Accountants in the Netherlands for Expats",
    subtitle:
      "Discover Dutch accountants and administratiekantoren who help with bookkeeping, BTW filings, jaarrekening and payroll admin — especially for ZZP’ers and internationally mobile professionals. This directory owns accountant and bookkeeper discovery; tax advice, wealth planning and business strategy live on their own pages.",
    primaryCta: { label: "Browse Accountant Directory", href: "#directory" },
    secondaryCta: { label: "Accountant vs Tax Advisor", href: "#differentiate" },
    chips: ["Bookkeeping & BTW", "Jaarrekening", "ZZP admin", "Soft discovery"],
    image: {
      src: "/images/heroes/netherlands-services-accountants-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an international freelancer reviewing Dutch bookkeeping ledgers, BTW folders and a laptop with an accountant at a bright canal-side desk in Amsterdam.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what Dutch accountants and administratiekantoren help with: bookkeeping, BTW filings, jaarrekening, payroll admin and ZZP administration.",
      "Accountants and bookkeeping offices keep the administratie running — tax advice and wealth planning belong on their own directories."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating accountants, tax advisors, financial advisors and business consultants for expats in the Netherlands.",
      "Pick the right page first: accountants own bookkeeping and filings admin; tax advisors own advice and 30% ruling conversations."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about Dutch accountants and administratiekantoren for expats.",
      "Use this snapshot before shortlisting: role boundaries, BTW cycles, jaarrekening timing and language support differ."
    ),
    accountantServices: visual(
      "accountant-services",
      "Infographic of accountant-supported services: bookkeeping, BTW, jaarrekening, payroll, ZZP admin and Belastingdienst correspondence handoffs.",
      "Service mix varies by firm — confirm what is included versus advisory work billed separately."
    ),
    accountantTypes: visual(
      "accountant-types",
      "Infographic comparing administratiekantoren, accountants, payroll specialists, expat-oriented firms and tax-adjacent filing support.",
      "Match the firm model to your need — a bookkeeping office is not the same as tax advice or strategy consulting."
    ),
    whenToUse: visual(
      "when-to-use",
      "Infographic decision map: when to use an accountant vs tax advisor vs DIY software vs business consultant.",
      "Routine BTW and bookkeeping often suit an administratiekantoor; complex tax advice should go to the tax advisors page."
    ),
    credentials: visual(
      "credentials",
      "Infographic explaining NBA orientation, engagement letters, fee transparency and what to verify before instructing an accountant.",
      "Ask how the firm is organised and what is in scope — then verify publicly where relevant."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges with Dutch accountants: role mix-ups, English ledgers, BTW timing, ZZP vs BV admin and DIY software gaps.",
      "Clarify scope, language and software handoffs before you share bank feeds and invoices."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral accountant directory workflow: shortlist, compare scope, verify credentials and decide.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for accountants: bookkeeping focus, BTW support, languages, city coverage and expat support.",
      "Compare firms by fit and transparency before comparing marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask Dutch accountants before instructing them.",
      "Good questions reveal scope, fees, English support, BTW cadence and where tax advice starts."
    ),
    relatedBusiness: visual(
      "related-business",
      "Infographic connecting accountant research to ZZP, starting a business, freelancing, consultancy and contractor vs employee guides.",
      "Bookkeeping sits beside how the Dutch business system works — keep those how-to guides linked."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist accountants: define admin needs, check scope, ask fees and align with tax advisor pages.",
      "Turn accountant discovery into a structured shortlist before sharing sensitive financial records."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common accountant FAQ topics: vs tax advisor, administratiekantoor, BTW, jaarrekening, ZZP and red flags.",
      "FAQ answers should help you pick the next verification step — not replace personal advice."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official sources for accountant orientation: Belastingdienst, KvK, NBA and Business.gov.nl.",
      "Verify consumer and professional orientation with official sources — not marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around Dutch business admin: accountants, tax advisors, financial advisors, business consultants and mortgage advisors.",
      "Accountants are one piece of the wider money and business-setup ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing accountants: tax advisors, ZZP guide, starting a business and freelancing.",
      "Continue from accountant discovery into tax advice, ZZP setup and business how-to guides."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting accountant research to tax advisors, financial advisors, business consultants, ZZP and Dutch cities.",
      "Accountant shortlists connect naturally into tax, planning and business-setup next steps."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#accountant-role", label: "What accountants do" },
    { href: "#accountant-types", label: "Firm types" },
    { href: "#when-to-use", label: "When to use" },
    { href: "#credentials", label: "Checklist" },
    { href: "#challenges", label: "Challenges" },
    { href: "#directory", label: "Directory" },
    { href: "#comparison", label: "Compare" },
    { href: "#affiliate-providers", label: "Providers" },
    { href: "#questions", label: "Questions" },
    { href: "#related-business", label: "Business guides" },
    { href: "#lead-cta", label: "Get help" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  intro: {
    heading: "Why Expats Use Dutch Accountants & Administratiekantoren",
    paragraphs: [
      "In the Netherlands, accountants and administratiekantoren (bookkeeping offices) help keep your administratie organised: invoices, bank reconciliations, BTW (VAT) filings, jaarrekening (annual accounts) and often payroll admin for small teams or ZZP setups.",
      "This page is a services directory for accountant and bookkeeper discovery. It owns bookkeeping / jaarrekening / BTW filings admin / payroll admin. Tax advisors own tax advice and 30% ruling conversations; financial advisors own wealth planning; business consultants own strategy and growth; ZZP and starting-a-business guides own how the system works.",
      "Inclusion here is informational soft discovery, not a ranking. No directory can guarantee filing outcomes, deadlines or English support. Confirm scope, fees, software and credentials directly with the firm before you share bank feeds.",
    ],
    links: [
      { label: "Tax advisors", href: TAX_ADVISORS_PATH },
      { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH },
      { label: "Business consultants", href: BUSINESS_CONSULTANTS_PATH },
      { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH },
      { label: "Starting a business", href: STARTING_A_BUSINESS_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Accountants (this page)",
      body: "Bookkeeping, administratiekantoren, BTW filings admin, jaarrekening and payroll admin discovery for expats and ZZP.",
      href: ACCOUNTANTS_PATH,
      status: "live" as const,
    },
    {
      title: "Tax advisors",
      body: "Tax advice, returns advisory, 30% ruling conversations and cross-border filing strategy — not day-to-day bookkeeping alone.",
      href: TAX_ADVISORS_PATH,
      status: "live" as const,
    },
    {
      title: "Financial advisors",
      body: "Pensions, investments and long-term wealth planning — overlapping money questions, but not administratie.",
      href: FINANCIAL_ADVISORS_PATH,
      status: "live" as const,
    },
    {
      title: "Business consultants",
      body: "Strategy, setup and growth consulting — how to build the business, not how to file the BTW return.",
      href: BUSINESS_CONSULTANTS_PATH,
      status: "live" as const,
    },
  ],
  snapshotCards: [
    { label: "Core role", value: "Keep admin running", note: "Bookkeeping, BTW and annual accounts — not investment advice." },
    { label: "Common office", value: "Administratiekantoor", note: "Many ZZP’ers start with a bookkeeping office rather than a Big Four desk." },
    { label: "VAT cycle", value: "BTW filings", note: "Quarterly or monthly filing cadence is a frequent expat friction point." },
    { label: "Annual close", value: "Jaarrekening", note: "Year-end accounts timing differs for ZZP vs BV structures." },
    { label: "Tax advice", value: "Separate page", note: "Complex tax strategy belongs on the Tax advisors directory." },
    { label: "Guarantee", value: "None", note: "No directory ranks accountants or guarantees Belastingdienst outcomes." },
  ],
  accountantServices: [
    {
      title: "Bookkeeping & ledger hygiene",
      body: "Invoice capture, bank reconciliation and clean ledgers so you can see cash flow and prepare filings without last-minute chaos.",
    },
    {
      title: "BTW (VAT) filings admin",
      body: "Preparing and submitting Dutch VAT returns on the agreed cycle — confirm who presses submit and who owns deadline reminders.",
    },
    {
      title: "Jaarrekening support",
      body: "Annual accounts preparation for sole traders and small companies — scope depends on legal form and firm capacity.",
    },
    {
      title: "Payroll admin",
      body: "Wage administration for small teams or directors — often separate from pure bookkeeping; ask what is included.",
    },
    {
      title: "ZZP administration packs",
      body: "Recurring packages for freelancers: invoices, costs, BTW and year-end handoff — useful when Dutch is not your working language.",
    },
    {
      title: "Belastingdienst correspondence handoffs",
      body: "Some firms help interpret letters and portal messages — still verify whether that is admin support or billed advisory time.",
    },
  ],
  accountantTypeComparison: [
    {
      type: "Administratiekantoor / bookkeeping office",
      scope: "Day-to-day bookkeeping, BTW prep and routine year-end admin for freelancers and small companies.",
      usefulWhen: "You need reliable monthly or quarterly administratie more than deep tax strategy.",
      questions: ["What is in the monthly package?", "Who files BTW?", "English support?"],
    },
    {
      type: "Accountant / AA-RA orientation",
      scope: "Professionally titled accountants who may combine assurance, annual accounts and broader reporting — titles and scopes vary.",
      usefulWhen: "You need formal accounts depth, lender packs or growing-company reporting.",
      questions: ["Which title/credentials apply?", "Assurance vs compilation?", "Fee model?"],
    },
    {
      type: "Payroll admin specialist",
      scope: "Focused on loonadministratie, payslips and employer wage filings rather than full ledger work.",
      usefulWhen: "You already bookkeep elsewhere but need payroll done correctly.",
      questions: ["Software used?", "Director-shareholder payroll?", "Deadline ownership?"],
    },
    {
      type: "Expat-oriented accountancy",
      scope: "Markets English support and internationally mobile ZZP / BV admin workflows.",
      usefulWhen: "Language and first-year Netherlands setup are your main frictions.",
      questions: ["Who explains BTW in English?", "Remote onboarding?", "Software handoff?"],
    },
    {
      type: "Tax-adjacent filing support",
      scope: "Providers who help with returns and filings that sit next to bookkeeping — useful soft discovery, not a substitute for the tax advisors page.",
      usefulWhen: "You need filing help and may later need separate tax advice.",
      questions: ["Is this bookkeeping or advice?", "When should I see a tax advisor?", "What is out of scope?"],
    },
  ],
  whenToUseScenarios: [
    {
      profile: "New ZZP freelancer",
      whatCanMatter: "Invoice tools, BTW cycle, cost categories, English explanations.",
      exampleQuestion: "Can you run a quarterly ZZP bookkeeping pack and file BTW in English?",
      betterPath: "Administratiekantoor first — link ZZP and freelancing guides for how-the-system works.",
    },
    {
      profile: "Employee with side income",
      whatCanMatter: "Separate ledgers, BTW thresholds, year-end handoff to tax filing.",
      exampleQuestion: "How do you keep side-business admin separate from employment income?",
      betterPath: "Bookkeeping office + Tax advisors page for return strategy.",
    },
    {
      profile: "New arrival scaling a consultancy",
      whatCanMatter: "KvK timing, first invoices, software choice, when to hire vs DIY.",
      exampleQuestion: "What should be ready before my first Dutch invoice goes out?",
      betterPath: "Starting consultancy + accountant shortlist; strategy stays on Business consultants.",
    },
    {
      profile: "Growing BV with payroll",
      whatCanMatter: "Jaarrekening quality, payroll accuracy, director admin, lender packs.",
      exampleQuestion: "Can you handle payroll and annual accounts, or do we need two firms?",
      betterPath: "Accountant / payroll specialist — tax advice still on Tax advisors when complex.",
    },
  ],
  credentialChecklist: [
    {
      item: "Scope of engagement",
      why: "Bookkeeping, BTW, jaarrekening and payroll may be separate line items — get them in writing.",
    },
    {
      item: "Professional orientation (e.g. NBA context)",
      why: "Ask how the firm is organised and verify publicly where titles or memberships are claimed.",
    },
    {
      item: "Fee & package transparency",
      why: "Monthly retainers vs hourly overruns change the true cost of messy bookkeeping.",
    },
    {
      item: "Software & bank-feed handoffs",
      why: "Confirm which tools you will use and who owns access if you switch firms later.",
    },
    {
      item: "Language of working papers",
      why: "Marketing English is not the same as explaining BTW and year-end packs before deadlines.",
    },
    {
      item: "Where tax advice starts",
      why: "Know when the firm stops at admin and when you should open the Tax advisors directory.",
    },
  ],
  challengeCards: [
    {
      title: "Accountant vs tax advisor mix-up",
      body: "Bookkeeping offices keep ledgers; tax advisors own advice and many return strategies. Use both pages deliberately.",
    },
    {
      title: "DIY software surprises",
      body: "Apps help capture invoices, but someone still owns BTW submission and year-end quality.",
    },
    {
      title: "BTW timing stress",
      body: "Quarterly deadlines sneak up when bank feeds and receipts are incomplete.",
    },
    {
      title: "English policy vs Dutch portals",
      body: "Belastingdienst and KvK portals are often Dutch-first — confirm who navigates them with you.",
    },
    {
      title: "ZZP vs BV admin differences",
      body: "Legal form changes what a jaarrekening package includes — ask early.",
    },
    {
      title: "Payroll bolted on late",
      body: "Hiring your first employee without payroll admin lined up creates avoidable errors.",
    },
    {
      title: "Strategy consulting confusion",
      body: "Business consultants own growth and setup strategy — not monthly ledger hygiene.",
    },
    {
      title: "Directory = ranking myth",
      body: "Soft discovery lists are not endorsements. Verify scope and fees yourself.",
    },
  ],
  providers: [
    {
      name: "Blue Umbrella",
      slug: "blue-umbrella",
      city: "Netherlands-wide",
      region: "Netherlands",
      summary:
        "Dutch tax filing and administration support for internationals — useful soft discovery when bookkeeping handoffs and Belastingdienst communication matter.",
      expatFocus:
        "English-oriented administration support that often sits next to accountant workflows for newcomers and freelancers.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Primarily remote / online workflows.",
      website: "https://www.blueumbrella.nl/",
      engagementType: "Tax & administration support",
      accountantType: "Tax-adjacent filing support",
      citiesServed: ["Netherlands-wide online"],
      featured: true,
      verificationNote:
        "Confirm whether you need bookkeeping, filing support or separate tax advice before engaging — not a ranking endorsement.",
    },
    {
      name: "BROADSTREET",
      slug: "broadstreet",
      city: "Netherlands-wide",
      region: "Netherlands",
      summary:
        "Tax, accountancy, payroll and cross-border support for internationals and entrepreneurs comparing depth beyond a single filing.",
      expatFocus:
        "Useful when you want accountancy-adjacent conversations with English support and cross-border context.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Remote consultations common; confirm current office options.",
      website: "https://broadstreet.nl/taxes-netherlands/",
      engagementType: "Accountancy & cross-border support",
      accountantType: "Expat-oriented accountancy",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote:
        "Ask which services are bookkeeping vs advisory; verify current scope and fees on the live site.",
    },
    {
      name: "TaxSavers",
      slug: "taxsavers",
      city: "Netherlands-wide",
      region: "Netherlands",
      summary:
        "Dutch tax return, M-form, VAT and self-employed filing support for internationals sorting annual obligations.",
      expatFocus:
        "Helpful soft discovery for newcomers and ZZP’ers who need filing support beside bookkeeping research.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Online-oriented workflows; confirm current options.",
      website: "https://taxsavers.nl/",
      engagementType: "Tax return & VAT support",
      accountantType: "BTW & jaarrekening support",
      citiesServed: ["Netherlands-wide online"],
      featured: true,
      verificationNote:
        "Filing support is not a substitute for a dedicated administratiekantoor relationship — clarify boundaries.",
    },
    {
      name: "Local administratiekantoren",
      slug: "local-administratiekantoren",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Neighbourhood and city bookkeeping offices that run monthly ZZP and small-company administratie packages.",
      expatFocus:
        "Often the practical starting point for routine BTW and ledger work when you want a local Dutch office.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Many offer intake in-person with remote monthly work.",
      website: "https://www.kvk.nl/english/",
      engagementType: "Bookkeeping office packages",
      accountantType: "Administratiekantoor / bookkeeping office",
      citiesServed: ["Amsterdam", "Utrecht", "Rotterdam", "The Hague", "Eindhoven", "Other cities"],
      featured: true,
      verificationNote:
        "Use KvK and local search to identify current firms — this row explains the role, not a single brand endorsement.",
    },
    {
      name: "NBA / professional accountant orientation",
      slug: "nba-professional-orientation",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Professional association orientation for accountants in the Netherlands — useful when titles and memberships matter to your shortlist.",
      expatFocus:
        "Helps you understand professional context before instructing a titled accountant — still interview the person handling your file.",
      languages: ["Dutch", "English site sections"],
      remoteSupport: true,
      inPersonAvailability: "Online orientation; local firms vary.",
      website: "https://www.nba.nl/english/",
      engagementType: "Professional orientation",
      accountantType: "NBA / KvK discovery path",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote:
        "NBA context is orientation — confirm the specific firm and engagement letter before sharing documents.",
    },
    {
      name: "KvK business register discovery",
      slug: "kvk-business-register-discovery",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Chamber of Commerce orientation for finding registered businesses and understanding Dutch business administration context.",
      expatFocus:
        "Useful verification starting point when shortlisting bookkeeping offices and related service providers.",
      languages: ["Dutch", "English"],
      remoteSupport: true,
      inPersonAvailability: "Online register and KvK desks.",
      website: "https://www.kvk.nl/english/",
      engagementType: "Register / discovery orientation",
      accountantType: "NBA / KvK discovery path",
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote:
        "Register presence is not a quality ranking — always verify services and fees directly.",
    },
    {
      name: "Payroll administration specialists",
      slug: "payroll-admin-specialists",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Specialists focused on loonadministratie for small employers and growing freelancers who hire help.",
      expatFocus:
        "Useful when bookkeeping is already covered but wage filings and payslips need a dedicated partner.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Often remote with occasional intake meetings.",
      website: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/",
      engagementType: "Payroll admin",
      accountantType: "Payroll admin specialist",
      citiesServed: ["Netherlands-wide local offices"],
      featured: false,
      verificationNote:
        "Ask whether payroll is bundled with bookkeeping or contracted separately.",
    },
    {
      name: "Expat-oriented bookkeeping workflows",
      slug: "expat-oriented-bookkeeping-workflows",
      city: "Randstad focus",
      region: "Western Netherlands",
      summary:
        "Firms and workflows that market bilingual ZZP packages, remote onboarding and English explanations of Dutch portals.",
      expatFocus:
        "Strong fit when language and first-year Netherlands timing are the main blockers.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Randstad meetings common; remote nationwide possible.",
      website: "https://business.gov.nl/",
      engagementType: "Expat bookkeeping packages",
      accountantType: "Expat-oriented accountancy",
      citiesServed: ["Amsterdam", "The Hague", "Utrecht", "Rotterdam"],
      featured: true,
      verificationNote:
        "Marketing English is not enough — ask who explains BTW and year-end packs before deadlines.",
    },
  ] satisfies AccountantProvider[],
  comparisonTable: [
    {
      advisor: "Blue Umbrella",
      citiesServed: "Netherlands-wide",
      expatFocus: "Admin & filing support",
      languages: "English, Dutch",
      onlineConsultations: "Yes",
      advisorType: "Tax-adjacent filing support",
    },
    {
      advisor: "BROADSTREET",
      citiesServed: "Netherlands-wide",
      expatFocus: "Accountancy & cross-border",
      languages: "English, Dutch",
      onlineConsultations: "Yes",
      advisorType: "Expat-oriented accountancy",
    },
    {
      advisor: "TaxSavers",
      citiesServed: "Netherlands-wide",
      expatFocus: "Returns & VAT support",
      languages: "English, Dutch",
      onlineConsultations: "Yes",
      advisorType: "BTW & jaarrekening support",
    },
    {
      advisor: "Local administratiekantoren",
      citiesServed: "Major cities",
      expatFocus: "Routine ZZP packages",
      languages: "Dutch, English varies",
      onlineConsultations: "Often",
      advisorType: "Administratiekantoor / bookkeeping office",
    },
    {
      advisor: "NBA / professional orientation",
      citiesServed: "Netherlands-wide",
      expatFocus: "Credential context",
      languages: "Dutch, English site",
      onlineConsultations: "Online orientation",
      advisorType: "NBA / KvK discovery path",
    },
    {
      advisor: "KvK register discovery",
      citiesServed: "Netherlands-wide",
      expatFocus: "Verification start",
      languages: "Dutch, English",
      onlineConsultations: "Online register",
      advisorType: "NBA / KvK discovery path",
    },
    {
      advisor: "Payroll admin specialists",
      citiesServed: "National / local",
      expatFocus: "Wage administration",
      languages: "Dutch, English varies",
      onlineConsultations: "Often",
      advisorType: "Payroll admin specialist",
    },
    {
      advisor: "Expat-oriented bookkeeping",
      citiesServed: "Randstad common",
      expatFocus: "English ZZP admin",
      languages: "English, Dutch",
      onlineConsultations: "Yes",
      advisorType: "Expat-oriented accountancy",
    },
  ],
  questionsToAsk: [
    "Does your package include bookkeeping, BTW filing, jaarrekening and payroll — or are those separate?",
    "How are fees structured (monthly retainer, hourly, year-end pack) and what triggers overruns?",
    "Which software and bank feeds will we use, and who owns the login if I switch firms?",
    "Will you explain BTW and year-end packs in English before deadlines?",
    "Where does your work stop and tax advice begin — should I also speak with a tax advisor?",
    "How do you handle ZZP vs BV differences for my legal form?",
    "Who submits filings and who owns deadline reminders?",
    "Where can I verify your firm’s professional orientation or registration context?",
  ],
  relatedBusinessGuides: [
    {
      label: "ZZP Netherlands",
      href: ZZP_NETHERLANDS_PATH,
      status: "live",
      description: "How Dutch freelance / ZZP status works — system context beside bookkeeping.",
    },
    {
      label: "Starting a business",
      href: STARTING_A_BUSINESS_PATH,
      status: "live",
      description: "Setup path for new Dutch businesses — KvK and first-year orientation.",
    },
    {
      label: "Freelancing Netherlands",
      href: FREELANCING_PATH,
      status: "live",
      description: "Freelance work patterns and practical setup for internationals.",
    },
    {
      label: "Starting consultancy",
      href: STARTING_CONSULTANCY_PATH,
      status: "live",
      description: "Consultancy-specific setup themes that often need clean administratie early.",
    },
    {
      label: "Contractor vs employee",
      href: CONTRACTOR_VS_EMPLOYEE_PATH,
      status: "live",
      description: "Status questions that change which admin packages you need.",
    },
  ] satisfies AccountantLink[],
  leadCta: {
    heading: "Need Help Shortlisting Accountants?",
    body: "Use the directory to compare bookkeeping scope, BTW support, language options and remote workflows. Then contact shortlisted firms for a written engagement letter — and keep tax advice, wealth planning and business strategy on their own service pages.",
    primaryCta: { label: "Compare Accountants", href: "#directory" },
    secondaryCta: { label: "Open Tax Advisors", href: TAX_ADVISORS_PATH },
  },
  faqs: [
    {
      q: "What does a Dutch accountant or administratiekantoor do?",
      a: "An administratiekantoor or accountant typically helps with bookkeeping, BTW (VAT) filings, jaarrekening (annual accounts) and sometimes payroll admin. Scope varies widely — always confirm what is included in writing.",
    },
    {
      q: "How is an accountant different from a tax advisor?",
      a: "Accountants and bookkeeping offices focus on keeping the administratie running and preparing filings. Tax advisors focus on tax advice, return strategy, 30% ruling conversations and more complex cross-border questions. Use both directories when your needs overlap.",
    },
    {
      q: "Do I need an accountant if I use bookkeeping software?",
      a: "Software helps capture invoices and bank feeds, but someone still needs to own BTW submission quality, year-end packs and deadline discipline. Many expats combine DIY capture with a bookkeeping office review.",
    },
    {
      q: "When should a ZZP’er hire bookkeeping help?",
      a: "Common triggers include first Dutch invoices, confusing BTW cycles, language barriers with portals, or growth that makes DIY riskier. The ZZP Netherlands guide explains how the system works; this page helps you find admin support.",
    },
    {
      q: "Is this page a ranking of accountants?",
      a: "No. Listings are informational soft discovery only. Always verify current services, fees, languages and fit directly with the firm.",
    },
    {
      q: "Where do business consultants fit?",
      a: "Business consultants own strategy, setup and growth consulting. Accountants own the bookkeeping and filings admin layer. Link both when you are building a company and need clean numbers.",
    },
    {
      q: "Do mortgage or financial advisors replace accountants?",
      a: "No. Mortgage advisors help with home financing; financial advisors help with wealth and long-term planning. Keep those soft-linked when money questions overlap, but use this page for administratie discovery.",
    },
    {
      q: "Which official sources should I check?",
      a: "Start with Belastingdienst (business), KvK and NBA orientation pages for professional and filing context. This guide is orientation only — not tax, legal or financial advice.",
    },
  ],
  officialSources: [
    {
      label: "Belastingdienst — Business",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/",
      description:
        "Dutch Tax Administration business orientation for VAT, payroll and business tax topics.",
    },
    {
      label: "KvK — English",
      href: "https://www.kvk.nl/english/",
      description: "Netherlands Chamber of Commerce — business registration and entrepreneur orientation.",
    },
    {
      label: "NBA — English",
      href: "https://www.nba.nl/english/",
      description: "Royal Netherlands Institute of Chartered Accountants — professional orientation for accountants.",
    },
    {
      label: "Business.gov.nl",
      href: "https://business.gov.nl/",
      description: "Official English-language government portal for doing business in the Netherlands.",
    },
    {
      label: "Government.nl",
      href: "https://www.government.nl/",
      description: "Official Dutch government information portal for public orientation.",
    },
  ],
  relatedGuides: [
    {
      label: "Tax advisors",
      href: TAX_ADVISORS_PATH,
      status: "live",
      description: "Tax advice, returns advisory and 30% ruling conversations.",
    },
    {
      label: "Financial advisors",
      href: FINANCIAL_ADVISORS_PATH,
      status: "live",
      description: "Pensions, investments and long-term wealth planning.",
    },
    {
      label: "Business consultants",
      href: BUSINESS_CONSULTANTS_PATH,
      status: "live",
      description: "Strategy, setup and growth consulting beside clean administratie.",
    },
    {
      label: "Mortgage advisors",
      href: MORTGAGE_ADVISORS_PATH,
      status: "live",
      description: "Home financing support when personal and business money timelines overlap.",
    },
    {
      label: "ZZP Netherlands",
      href: ZZP_NETHERLANDS_PATH,
      status: "live",
      description: "How Dutch freelance status works before you hire bookkeeping help.",
    },
    {
      label: "Starting a business",
      href: STARTING_A_BUSINESS_PATH,
      status: "live",
      description: "First-year business setup orientation for internationals.",
    },
    {
      label: "Freelancing Netherlands",
      href: FREELANCING_PATH,
      status: "live",
      description: "Freelance work patterns that create bookkeeping needs.",
    },
  ] satisfies AccountantLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Tax advice and filing strategy support." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Long-term financial planning support." },
    { label: "Business consultants", href: BUSINESS_CONSULTANTS_PATH, status: "live", description: "Strategy and growth consulting discovery." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Regulated mortgage advice for buyers." },
  ] satisfies AccountantLink[],
  exploreNextCards: [
    {
      label: "Tax advisors",
      href: TAX_ADVISORS_PATH,
      status: "live",
      description: "When bookkeeping is stable, sort tax advice and return strategy here.",
    },
    {
      label: "Business consultants",
      href: BUSINESS_CONSULTANTS_PATH,
      status: "live",
      description: "Pair clean numbers with strategy and growth conversations.",
    },
    {
      label: "ZZP Netherlands",
      href: ZZP_NETHERLANDS_PATH,
      status: "live",
      description: "Understand freelance status before locking an admin package.",
    },
    {
      label: "Starting a business",
      href: STARTING_A_BUSINESS_PATH,
      status: "live",
      description: "Map KvK and first-year setup beside your accountant shortlist.",
    },
    {
      label: "Financial advisors",
      href: FINANCIAL_ADVISORS_PATH,
      status: "live",
      description: "Connect business admin to longer-term money planning.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "City context for where you meet local administratiekantoren.",
    },
  ] satisfies AccountantLink[],
};

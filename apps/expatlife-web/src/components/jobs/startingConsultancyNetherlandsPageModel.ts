import {
  CV_NETHERLANDS_PATH,
  INTERVIEW_TIPS_NETHERLANDS_PATH,
  FREELANCING_NETHERLANDS_PATH,
  CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH,
  FINDING_JOBS_NETHERLANDS_PATH,
  SALARY_NEGOTIATION_NETHERLANDS_PATH,
  JOBS_HUB_PATH,
  HSM_VISA_PATH,
  CAREER_COACHES_PATH,
  IMMIGRATION_LAWYERS_PATH,
  TAX_ADVISORS_PATH,
  RELOCATION_SERVICES_PATH,
} from "./cvNetherlandsPageModel";
import { COVER_LETTER_NETHERLANDS_PATH, LINKEDIN_NETHERLANDS_PATH, NETWORKING_NETHERLANDS_PATH } from "./coverLetterNetherlandsPageModel";
import {
  ENGLISH_SPEAKING_JOBS_NETHERLANDS_PATH,
  RECRUITMENT_AGENCIES_NETHERLANDS_PATH,
  REMOTE_WORK_NETHERLANDS_PATH,
} from "./englishSpeakingJobsNetherlandsPageModel";
import {
  ACCOUNTANTS_PATH,
  BUSINESS_CONSULTANTS_PATH,
  EXPAT_TAXES_NETHERLANDS_PATH,
  FINANCIAL_ADVISORS_PATH,
  HEALTH_INSURANCE_PATH,
  STARTING_BUSINESS_NETHERLANDS_PATH,
  ZZP_NETHERLANDS_PATH,
} from "./freelancingNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const STARTING_CONSULTANCY_NETHERLANDS_PATH = "/netherlands/jobs/starting-consultancy-netherlands/" as const;
export const STARTING_CONSULTANCY_AFFILIATE_PLACEMENT_ID = "nl-jobs-starting-consultancy-support-providers" as const;

export {
  FREELANCING_NETHERLANDS_PATH,
  CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH,
  ZZP_NETHERLANDS_PATH,
  STARTING_BUSINESS_NETHERLANDS_PATH,
  FINDING_JOBS_NETHERLANDS_PATH,
  JOBS_HUB_PATH,
  LINKEDIN_NETHERLANDS_PATH,
  NETWORKING_NETHERLANDS_PATH,
  IMMIGRATION_LAWYERS_PATH,
  TAX_ADVISORS_PATH,
  CAREER_COACHES_PATH,
  HEALTH_INSURANCE_PATH,
  FINANCIAL_ADVISORS_PATH,
  ACCOUNTANTS_PATH,
  BUSINESS_CONSULTANTS_PATH,
  HSM_VISA_PATH,
  RELOCATION_SERVICES_PATH,
};

export type StartingConsultancyLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type StartingConsultancyCard = { title: string; body: string };
export type StartingConsultancyScenarioRow = { profile: string; scenario: string; whatToCheck: string };
export type StartingConsultancyComparisonRow = { topic: string; dutchContext: string; whatToConfirm: string };
export type ServiceCategory = {
  label: string;
  href: string;
  description: string;
  status?: "live" | "comingSoon";
};
export type HowToStep = { name: string; text: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "starting-consultancy-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const startingConsultancyNetherlandsPage = {
  slug: "starting-consultancy-netherlands",
  path: STARTING_CONSULTANCY_NETHERLANDS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(STARTING_CONSULTANCY_NETHERLANDS_PATH) ?? "2026-10-09",
  affiliatePlacementId: STARTING_CONSULTANCY_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Starting a Consultancy in the Netherlands | Expat Practice Guide",
    description:
      "How expats start a consultancy practice in the Netherlands: positioning, niche, first clients, rates orientation, KvK/ZZP overlap, contracts and when consultancy differs from generic freelancing.",
    keywords: [
      "starting consultancy Netherlands",
      "consultancy Netherlands expat",
      "start consulting practice Netherlands",
      "independent consultant Netherlands",
      "consultancy ZZP Netherlands",
      "consulting rates Netherlands",
      "consultancy contracts Netherlands",
      "how to start consulting Netherlands",
      "expat consultant Netherlands",
      "consultancy vs freelancing Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Starting consultancy",
    pageTitle: "Starting a Consultancy in the Netherlands",
    subtitle:
      "Orientation for expats launching a consultancy practice — positioning, first clients, rates thinking, KvK/ZZP overlap, contracts and how consultancy differs from generic freelancing.",
    primaryCta: { label: "Start With Positioning", href: "#positioning" },
    secondaryCta: { label: "Explore Freelancing Guide", href: FREELANCING_NETHERLANDS_PATH },
    chips: ["Niche & offer", "First clients", "Rates orientation", "Contracts & KvK"],
    image: {
      src: `/images/heroes/starting-consultancy-netherlands-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic editorial photo of an international consultant presenting a one-page offer and day-rate sheet at a bright Dutch canal-side meeting table with laptop, notebook and coffee.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium record-file builder showing six consultancy-setup lanes — niche, clients, rates, KvK/ZZP, contracts and permits — with an expat consultant desk scene and checklist rail.",
      "Start here: clarify what you sell, who buys it and which registration path you need before pitching."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance board with six consultancy cards — practice focus, pipeline, day rates, KvK overlap, contracts and visa checks — each with practical notes.",
      "Use this snapshot to separate consultancy practice setup from generic freelancing admin."
    ),
    vsFreelancing: visual(
      "vs-freelancing",
      "Premium comparison bridge contrasting consultancy practice (niche offer, SOW, advisory outcomes) with generic freelancing (task delivery, platforms, hourly gigs).",
      "Consultancy sells outcomes and advice; freelancing often sells delivery capacity — both may use ZZP."
    ),
    positioning: visual(
      "positioning",
      "Premium offer-design desk scene with niche statement, ideal client profile, proof points and package options for a Dutch consultancy practice.",
      "A clear niche and packaged offer beat a vague “I do consulting” profile in the Dutch market."
    ),
    firstClients: visual(
      "first-clients",
      "Premium ecosystem map of warm intros, LinkedIn, networking events, alumni and former employers for first consultancy clients in Randstad cities.",
      "Most first consultancy clients come from warm trust — not cold platforms alone."
    ),
    rates: visual(
      "rates",
      "Premium rates orientation board showing day-rate vs project fee thinking, non-billable time, buffer set-aside and comparison with employment packages — orientation only.",
      "Rate math includes unpaid sales, admin and buffers — not just hours on a timesheet."
    ),
    kvkZzp: visual(
      "kvk-zzp",
      "Premium overlap diagram linking consultancy practice setup to KvK registration and ZZP freelancing guides with short orientation cards.",
      "KvK/ZZP is shared plumbing — this page owns the consultancy practice lane; deep registration lives on ZZP and Freelancing guides."
    ),
    contracts: visual(
      "contracts",
      "Premium contract desk with SOW sections, IP, confidentiality, liability notes and milestone payment rail for professional services.",
      "Written scope and payment terms reduce disputes — verify clauses with qualified advisers for large engagements."
    ),
    insurance: visual(
      "insurance",
      "Premium insurance and cash-flow board covering health insurance, buffers, invoicing hygiene and optional liability/disability orientation for consultants.",
      "Plan health cover, tax set-aside and payment terms before your first invoice clears late."
    ),
    visas: visual(
      "visas",
      "Premium two-track bridge separating IND permit rules from consultancy business activity for expats and highly skilled migrants.",
      "Permit route and consultancy registration are separate planning tracks — verify IND rules independently."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with eight consultancy pitfalls — vague niche, underpricing, one-client dependency, no SOW, late KvK, permit assumptions, unpaid sales time and skipped buffers.",
      "Most costly mistakes happen in the first 90 days of a practice launch."
    ),
    checklist: visual(
      "checklist",
      "Premium launch checklist timeline from niche draft through first SOW, KvK orientation, invoice template and pipeline calendar.",
      "Work the checklist in order — positioning and pipeline before large invoices."
    ),
    scenarios: visual(
      "scenarios",
      "Premium scenario cards for expat consultants — ex-employee, niche switcher, EU remote clients and permit-holder side practice.",
      "Match your profile to the nearest scenario, then verify with official sources and advisers."
    ),
    faq: visual(
      "faq",
      "Premium FAQ accordion board answering common expat consultancy questions on niche, rates, KvK, contracts and visas.",
      "FAQ answers orient you — confirm your situation with KvK, Belastingdienst, IND and qualified advisers."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium numbered route-map linking starting consultancy to freelancing, ZZP, contractor vs employee, networking and LinkedIn guides.",
      "Suggested order: freelancing orientation → ZZP registration deep-dive → networking/LinkedIn for pipeline."
    ),
    services: visual(
      "services",
      "Premium provider map showing when tax advisors, immigration lawyers, accountants and career coaches may help during consultancy setup — discovery only.",
      "Use professionals for scoped review — still read official sources yourself."
    ),
    officialSources: visual(
      "official-sources",
      "Premium Netherlands map pinning KvK, Belastingdienst, Business.gov.nl, Government.nl, IND and UWV with what to verify where for consultants.",
      "Bookmark these before your first client invoice — rules and thresholds change over time."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal-route journey with next steps — freelancing, ZZP, starting a business, contractor comparison and networking.",
      "Pick your next guide based on whether you need registration depth, pipeline or employment comparison."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#vs-freelancing", label: "vs Freelancing" },
    { href: "#positioning", label: "Positioning" },
    { href: "#first-clients", label: "First clients" },
    { href: "#rates", label: "Rates" },
    { href: "#kvk-zzp", label: "KvK / ZZP" },
    { href: "#contracts", label: "Contracts" },
    { href: "#insurance", label: "Insurance" },
    { href: "#visas", label: "Visas" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#checklist", label: "Checklist" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#related-guides", label: "Guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#explore-next", label: "Explore next" },
  ],
  intro: {
    heading: "Can Expats Start a Consultancy Practice in the Netherlands?",
    paragraphs: [
      "Many international professionals launch consultancy practices in the Netherlands — advising on strategy, IT, HR, finance, marketing, operations, sustainability or specialised industry topics for Dutch, EU and global clients.",
      "Consultancy here usually means selling advisory outcomes and packaged expertise, not only delivering freelance tasks. You still often use ZZP / KvK plumbing, but the practice design — niche, offer, pipeline, rates and contracts — is its own planning lane.",
      "This guide is practical orientation only — not legal, tax, financial or immigration advice. Verify your situation with KvK, Belastingdienst, IND and qualified professionals. For general freelancing admin, use the Freelancing guide; for registration depth, use the ZZP guide.",
    ],
    keyPoints: [
      {
        title: "Consultancy ≠ generic freelancing",
        body: "Example: change-management adviser sells a 6-week diagnostic + roadmap package — not open-ended hourly admin support. Position the practice around outcomes.",
      },
      {
        title: "Niche and proof beat vague profiles",
        body: "Example: “SaaS pricing consultant for B2B scale-ups” converts warmer than “business consultant” on LinkedIn and in intros.",
      },
      {
        title: "KvK / ZZP is shared plumbing",
        body: "Example: most solo consultants register eenmanszaak at KvK — deep registration and tax steps live on the ZZP and Freelancing guides.",
      },
      {
        title: "Permit route is separate",
        body: "Example: HS migrant considering side consulting — employment permit rules and consultancy activity are separate IND topics.",
      },
    ] satisfies StartingConsultancyCard[],
    scenarios: [
      {
        profile: "Ex-employee — Amsterdam",
        scenario: "Leaving corporate strategy role; wants to advise former industry peers",
        whatToCheck: "Niche statement, first warm intros, KvK timing and written SOW before day one.",
      },
      {
        profile: "IT consultant — Utrecht",
        scenario: "Offered 4-month architecture advisory via agency at day rate",
        whatToCheck: "Classification risk, SOW vs employment-like setup — see Contractor vs employee guide.",
      },
      {
        profile: "EU consultant — remote clients",
        scenario: "Based in Rotterdam; German and French B2B clients",
        whatToCheck: "Cross-border VAT orientation with accountant; freelancing international-clients section.",
      },
      {
        profile: "HS migrant — side practice",
        scenario: "Full-time sponsored job plus weekend advisory idea",
        whatToCheck: "IND rules on additional self-employment — separate from KvK eligibility.",
      },
    ] satisfies StartingConsultancyScenarioRow[],
  },
  introPlanningSteps: [
    "Write a one-sentence niche and ideal-client profile before updating LinkedIn or pitching.",
    "Map three warm introductions and one case study — pipeline before large invoices.",
    "Bookmark Freelancing + ZZP guides for registration, then confirm permit rules on ind.nl if needed.",
  ],
  snapshotCards: [
    { label: "Practice focus", value: "Outcomes", note: "Consultancy usually sells advisory outcomes and packaged expertise, not only task delivery." },
    { label: "First clients", value: "Warm trust", note: "Referrals, former colleagues and LinkedIn warm outreach beat cold platforms for many consultants." },
    { label: "Rates", value: "Orientation", note: "Day rates and project fees need buffer, tax and unpaid sales time — not fake official rankings." },
    { label: "KvK / ZZP", value: "Shared", note: "Solo consultants often use eenmanszaak — deep registration lives on ZZP and Freelancing guides." },
    { label: "Contracts", value: "SOW first", note: "Scope, IP, payment terms and liability orientation protect both sides." },
    { label: "Permits", value: "Separate track", note: "IND rules may restrict self-employment even when KvK registration is available." },
  ],
  snapshotNextSteps: [
    "Draft niche + offer package on one page before registering anything.",
    "Compare consultancy day-rate math with employment total package including pension and sick pay.",
    "Confirm whether your permit allows the planned consultancy activity.",
  ],
  snapshotComparisonHeading: "Consultancy practice vs common expat assumptions",
  snapshotComparisonParagraphs: [
    "Many internationals assume “consultancy” is just freelancing with a nicer title. In Dutch practice, the differences that matter are niche clarity, packaged offers, professional-services contracts and pipeline quality — registration plumbing may still look similar.",
  ],
  snapshotComparisonRows: [
    { topic: "Offer", dutchContext: "Packaged advisory outcomes and retainers common", whatToConfirm: "Whether you sell tasks or outcomes" },
    { topic: "Pipeline", dutchContext: "Warm intros and LinkedIn trust matter early", whatToConfirm: "Three reachable warm leads this month" },
    { topic: "Pricing", dutchContext: "Day rates and project fees both used", whatToConfirm: "Buffer + tax set-aside in rate model" },
    { topic: "Registration", dutchContext: "Often ZZP / eenmanszaak at KvK", whatToConfirm: "ZZP guide for deep steps" },
    { topic: "Contracts", dutchContext: "SOW, IP and payment terms expected", whatToConfirm: "Written scope before kickoff" },
    { topic: "Permits", dutchContext: "Self-employment may need separate IND route", whatToConfirm: "ind.nl for your permit type" },
  ] satisfies StartingConsultancyComparisonRow[],
  snapshotScenarios: [
    {
      profile: "Vague LinkedIn — “consultant”",
      scenario: "Profile says consultant without niche; low inbound",
      whatToCheck: "Rewrite niche + proof points; see LinkedIn Netherlands guide.",
    },
    {
      profile: "Rate vs employment offer",
      scenario: "€850/day consultancy vs €6,200/month employment",
      whatToCheck: "Add pension, vakantiegeld, sick pay and unpaid sales time.",
    },
    {
      profile: "First invoice — no SOW",
      scenario: "Friend asks for “a few days of advice” verbally",
      whatToCheck: "Write short SOW with scope, fee and payment terms.",
    },
    {
      profile: "Permit holder — side gig",
      scenario: "HSM employee wants weekend consulting",
      whatToCheck: "IND rules before KvK or invoicing.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  vsFreelancingHeading: "Consultancy vs Generic Freelancing",
  vsFreelancingParagraphs: [
    "Freelancing in the Netherlands is the broad self-employment lane (often ZZP): clients, invoicing, taxes, cities and financial planning. Consultancy is a practice design inside that world — niche, advisory offer, professional-services contracts and pipeline based on trust.",
    "Use this page for practice setup. Use Freelancing for general ZZP orientation. Use Contractor vs employee when comparing employment-like engagements. Use ZZP for registration-system depth. Use Starting a business when you outgrow solo practice.",
  ],
  vsFreelancingPoints: [
    "Consultancy — packaged advice, diagnostics, retainers and outcome-led SOWs",
    "Generic freelancing — delivery capacity, platforms and task-based gigs often dominate",
    "Shared plumbing — KvK, BTW, invoicing and insurance still apply to both",
    "Classification risk — long single-client “consultancy” may resemble employment",
  ],
  vsFreelancingRows: [
    { topic: "What you sell", dutchContext: "Consultancy: advice and outcomes", whatToConfirm: "Freelance: often hours or deliverables" },
    { topic: "How clients find you", dutchContext: "Warm intros, niche LinkedIn, referrals", whatToConfirm: "Platforms and open gigs more common in generic freelance" },
    { topic: "Contracts", dutchContext: "SOW, IP, confidentiality, milestones", whatToConfirm: "Simple rate cards may suffice for short gigs" },
    { topic: "Registration", dutchContext: "Often same ZZP / KvK path", whatToConfirm: "Deep steps on ZZP + Freelancing guides" },
  ] satisfies StartingConsultancyComparisonRow[],
  vsFreelancingScenarios: [
    {
      profile: "Designer — task freelance",
      scenario: "Logo packages via platform at fixed fee",
      whatToCheck: "Freelancing guide — not this consultancy practice lane.",
    },
    {
      profile: "Interim PM — advisory",
      scenario: "12-week operating model redesign with workshops",
      whatToCheck: "This page for offer + SOW; Freelancing for KvK/tax orientation.",
    },
    {
      profile: "Agency bench — ZZP",
      scenario: "Placed full-time on one client via recruiter",
      whatToCheck: "Contractor vs employee — classification risk.",
    },
    {
      profile: "Growing beyond solo",
      scenario: "Considering hiring or BV later",
      whatToCheck: "Starting a business guide when scaling structure.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  positioningHeading: "Positioning, Niche and Offer Design",
  positioningParagraphs: [
    "Dutch clients and introducers respond to specific expertise. A consultancy practice needs a clear problem you solve, who you solve it for, proof you can deliver and a package they can buy — not an open-ended “available for consulting” status.",
    "Offer design can include discovery calls, fixed diagnostic packages, retainers or day-rate advisory blocks. Keep language concrete and evidence-led; avoid theatrical sales copy that clashes with Dutch workplace norms.",
  ],
  positioningPoints: [
    "Niche sentence — problem + audience + context (industry or stage)",
    "Ideal client — company size, buyer role and trigger events",
    "Proof — case studies, metrics, references or sample frameworks",
    "Packages — discovery, diagnostic, implementation advisory, retainer",
    "Boundaries — what you do not sell (avoids scope creep and dilution)",
  ],
  positioningCards: [
    {
      title: "Niche clarity",
      body: "Example: “Help Series B SaaS teams fix churn in 6 weeks” beats “growth consultant for startups.”",
    },
    {
      title: "Buyer map",
      body: "Example: know whether CFO, CHRO or CTO signs — tailor LinkedIn and intros to that buyer.",
    },
    {
      title: "Package menu",
      body: "Example: €X discovery, €Y diagnostic workshop, optional retainer — easier than open-ended day rates alone.",
    },
    {
      title: "Proof kit",
      body: "Example: two anonymised case studies + one framework one-pager ready for warm intros.",
    },
  ] satisfies StartingConsultancyCard[],
  positioningChecklist: [
    "Write a one-sentence niche and a one-paragraph ideal-client profile.",
    "List three proof points you can share without breaking confidentiality.",
    "Define one entry package and one deeper package with clear outcomes.",
    "Update LinkedIn headline/About to match the niche — see LinkedIn Netherlands guide.",
  ],
  positioningScenarios: [
    {
      profile: "Generalist trap",
      scenario: "CV lists strategy, ops, marketing and HR consulting",
      whatToCheck: "Pick one primary niche for the first 90 days; park the rest.",
    },
    {
      profile: "Technical SME — commercial language",
      scenario: "Deep expert; vague buyer-facing offer",
      whatToCheck: "Translate expertise into a problem statement buyers recognise.",
    },
    {
      profile: "Industry switch",
      scenario: "Banking background; wants climate advisory",
      whatToCheck: "Bridge proof carefully; start with adjacent buyers who know your past.",
    },
    {
      profile: "Productised offer",
      scenario: "Wants productised workshops vs pure day rate",
      whatToCheck: "Write outcomes, prep time and revision limits into the package.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  firstClientsHeading: "First Clients and Pipeline",
  firstClientsParagraphs: [
    "Most expat consultants land early work through warm trust: former managers, colleagues, alumni, clients abroad who need NL/EU coverage, and niche LinkedIn conversations. Cold platforms can help later — they rarely replace a referral engine.",
    "Cross-link Networking and LinkedIn career guides for channel tactics. Keep a simple pipeline: intro → discovery → proposal → SOW → kickoff.",
  ],
  firstClientsPoints: [
    "Warm intros — ask for introduction-ready referrals, not vague “keep me in mind”",
    "LinkedIn — niche posts and thoughtful outreach to buyers, not spam",
    "Networking — sector meetups and expat professional groups",
    "Alumni and former employers — common first-cheque sources",
    "Recruiters — interim advisory placements with classification checks",
  ],
  firstClientsCards: [
    { title: "Warm intros", body: "Ask two former colleagues for a named introduction this week — provide a one-liner they can forward." },
    { title: "LinkedIn", body: "Publish niche proof; message buyers with a specific observation — see LinkedIn Netherlands guide." },
    { title: "Networking", body: "Join one sector meetup and one expat professional group — see Networking Netherlands." },
    { title: "Alumni / ex-employer", body: "Former teams often need short advisory bursts after you leave — still use a written SOW." },
    { title: "Recruitment agencies", body: "Interim and contractor placements — verify fee, classification and exclusivity." },
    { title: "International clients", body: "Existing abroad clients can follow you to NL — confirm VAT and contract law with an accountant." },
  ] satisfies StartingConsultancyCard[],
  firstClientsChecklist: [
    "List 15 warm contacts and mark the top five for outreach this fortnight.",
    "Prepare a forwardable one-liner and a one-page offer PDF.",
    "Book two discovery calls; follow each with a written proposal.",
    "Track pipeline stages in a simple sheet — no CRM required at day one.",
  ],
  firstClientsGuideLinks: [
    { label: "Networking Netherlands", href: NETWORKING_NETHERLANDS_PATH, status: "live", description: "How expats build professional networks in Dutch career contexts." },
    { label: "LinkedIn Netherlands", href: LINKEDIN_NETHERLANDS_PATH, status: "live", description: "Profile, outreach and hiring-platform norms for Dutch opportunities." },
    { label: "Recruitment agencies", href: RECRUITMENT_AGENCIES_NETHERLANDS_PATH, status: "live", description: "When agencies place interim or advisory roles." },
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Broader client-acquisition channels for ZZP professionals." },
  ] satisfies StartingConsultancyLink[],
  firstClientsScenarios: [
    {
      profile: "First cheque — warm intro",
      scenario: "Ex-manager introduces scale-up COO for operating-model review",
      whatToCheck: "Discovery call → written SOW → KvK orientation before kickoff.",
    },
    {
      profile: "LinkedIn inbound",
      scenario: "Niche post leads to DM from Dutch SaaS HR director",
      whatToCheck: "Qualify budget and timeline; send proposal with payment terms.",
    },
    {
      profile: "Agency interim",
      scenario: "Recruiter offers 4-day/week advisory placement",
      whatToCheck: "Classification + fee after commission — Contractor vs employee guide.",
    },
    {
      profile: "Cold platform only",
      scenario: "No warm network; bidding on low-rate gigs",
      whatToCheck: "Rebuild warm list; platforms as secondary channel.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  ratesHeading: "Rates Orientation (Not Official Benchmarks)",
  ratesParagraphs: [
    "Consultants in the Netherlands often price with day rates, half-days, project fees or retainers. There is no single official “correct” consultancy rate — skills, niche scarcity, client size and risk shape outcomes. Avoid treating internet league tables as guarantees.",
    "Build rates from costs and capacity: unpaid sales time, admin, tax/BTW set-aside, insurance, pension gap and slow months. Compare fairly with employment packages before leaving a salary.",
  ],
  ratesPoints: [
    "Day rate — common for advisory blocks; define hours and prep included",
    "Project fee — better when outcomes are clearer than hours",
    "Retainer — for ongoing advisory access with response expectations",
    "Non-billable time — sales, proposals and admin reduce effective rate",
    "Employment comparison — add pension, sick pay and vakantiegeld to salary offers",
  ],
  ratesRows: [
    { topic: "Calendar capacity", dutchContext: "~20 working days/month if full-time", whatToConfirm: "Not all days are billable — sales and admin reduce capacity" },
    { topic: "Billable target", dutchContext: "Often well below calendar days early on", whatToConfirm: "Track one month; adjust pipeline or rate" },
    { topic: "Tax + BTW reserve", dutchContext: "Many set aside a meaningful share of revenue", whatToConfirm: "Accountant helps refine for your client mix" },
    { topic: "Buffers", dutchContext: "No employer sick pay by default", whatToConfirm: "3–6 month expense reserve in planning" },
    { topic: "Example orientation", dutchContext: "Illustrative only — not a market ranking", whatToConfirm: "Model your niche with an adviser; do not copy headlines blindly" },
  ] satisfies StartingConsultancyComparisonRow[],
  ratesChecklist: [
    "Estimate monthly costs including health insurance, software and accountant fees.",
    "Add unpaid sales/admin percentage to your day-rate model.",
    "Decide when to use project fees vs day rates for clearer outcomes.",
    "Compare one employment offer total package before resigning.",
  ],
  ratesScenarios: [
    {
      profile: "Day-rate trap",
      scenario: "Quotes €700/day but only 8 billable days after sales",
      whatToCheck: "Effective monthly income — raise rate or reduce non-billable load.",
    },
    {
      profile: "Project underpricing",
      scenario: "Fixed fee for open-ended transformation advice",
      whatToCheck: "Cap scope, revisions and meeting load in SOW.",
    },
    {
      profile: "Employment exit",
      scenario: "€6k salary vs consultancy day rate offer",
      whatToCheck: "Salary Negotiation / Expat salary context for package math; Freelancing finance section.",
    },
    {
      profile: "Retainer ambiguity",
      scenario: "Client wants “unlimited Slack access” for flat fee",
      whatToCheck: "Define hours, response windows and out-of-scope rates.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  kvkZzpHeading: "KvK / ZZP Overlap (Short Orientation)",
  kvkZzpParagraphs: [
    "Most solo consultants operate as ZZP (zelfstandige zonder personeel) via an eenmanszaak registered at the Chamber of Commerce (KvK). Clients expect a KvK number on invoices; Belastingdienst handles BTW and income tax.",
    "This page does not duplicate the full freelancing or ZZP deep-dives. Use those guides for registration order, BTW schemes, bookkeeping and city/financial planning — then return here for practice design.",
  ],
  kvkZzpPoints: [
    "KvK registration — business number before substantial commercial activity",
    "ZZP — common solo structure without employees",
    "BTW / income tax — your responsibility; accountant early for cross-border clients",
    "DBA / classification — long exclusive engagements may resemble employment",
  ],
  kvkZzpChecklist: [
    "Read Freelancing Netherlands for ZZP lifecycle orientation.",
    "Read ZZP Netherlands for registration-system depth.",
    "Confirm permit rules on ind.nl before registering if you are a permit holder.",
    "Save registration PDFs for clients and your accountant.",
  ],
  kvkZzpGuideLinks: [
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "General ZZP freelancing orientation — clients, taxes, visas, cities." },
    { label: "ZZP in the Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Registration/system deep-dive for Dutch self-employment." },
    { label: "Starting a business", href: STARTING_BUSINESS_NETHERLANDS_PATH, status: "live", description: "Broader entrepreneurship when you outgrow solo consultancy." },
    { label: "Contractor vs employee", href: CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH, status: "live", description: "Employment-model comparison for interim-like engagements." },
  ] satisfies StartingConsultancyLink[],
  kvkZzpScenarios: [
    {
      profile: "First Dutch client — no KvK",
      scenario: "Wants to invoice next week",
      whatToCheck: "Priority KvK enrolment — Freelancing registration section + ZZP guide.",
    },
    {
      profile: "One dominant client",
      scenario: "4 days/week at single scale-up for 9 months",
      whatToCheck: "Classification risk — Contractor vs employee + accountant.",
    },
    {
      profile: "Side consulting while employed",
      scenario: "Evening advisory while on payroll",
      whatToCheck: "Employment contract moonlighting clause + IND if permit-tied.",
    },
    {
      profile: "Considering BV later",
      scenario: "Revenue growing; liability concerns",
      whatToCheck: "Starting a business guide + tax adviser — not day-one requirement.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  contractsHeading: "Contracts, SOWs, IP and Liability Orientation",
  contractsParagraphs: [
    "Professional-services work needs clearer paperwork than informal gigs: statement of work (SOW), payment schedule, intellectual property, confidentiality and liability boundaries. Orientation here is not a contract template or legal advice.",
    "Dutch clients often expect clarity on deliverables, meeting load and whether rates are exclusive of BTW. For large or high-risk engagements, have a qualified adviser review key clauses.",
  ],
  contractsPoints: [
    "SOW — scope, outcomes, timeline, assumptions and out-of-scope list",
    "Payment — deposits, milestones, 14/30-day terms, late-payment rights",
    "IP — who owns frameworks, reports and pre-existing methods",
    "Confidentiality — NDAs and data-handling expectations",
    "Liability — caps and insurance orientation with advisers — not DIY guarantees",
  ],
  contractsChecklist: [
    "Never start material work on WhatsApp-only scope for paid advisory.",
    "State whether fees are ex BTW or incl BTW on every proposal.",
    "Define acceptance criteria for deliverables and revision rounds.",
    "Ask a lawyer or adviser to review high-value or high-risk contracts.",
  ],
  contractsRows: [
    { topic: "Scope", dutchContext: "Written SOW with outcomes and exclusions", whatToConfirm: "Meeting caps and travel assumptions" },
    { topic: "IP", dutchContext: "Client owns deliverables; you keep methods — often negotiated", whatToConfirm: "Pre-existing tools and open materials" },
    { topic: "Payment", dutchContext: "Deposit + milestones common for projects", whatToConfirm: "Stop-work rights if unpaid" },
    { topic: "Liability", dutchContext: "Caps and insurance often discussed on larger deals", whatToConfirm: "Qualified review — not forum templates alone" },
  ] satisfies StartingConsultancyComparisonRow[],
  contractsScenarios: [
    {
      profile: "Scope creep",
      scenario: "Diagnostic turns into unpaid implementation support",
      whatToCheck: "Change-order clause and out-of-scope list in SOW.",
    },
    {
      profile: "IP dispute",
      scenario: "Client claims ownership of your reusable framework",
      whatToCheck: "IP clause distinguishing deliverables vs methodology.",
    },
    {
      profile: "Late payment — €12k",
      scenario: "60-day delay; no late-fee clause",
      whatToCheck: "Future deposits; collection options with adviser.",
    },
    {
      profile: "Verbal start",
      scenario: "“Just start Monday — paperwork later”",
      whatToCheck: "Short SOW email before day one at minimum.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  insuranceHeading: "Insurance, Buffers and Invoicing Orientation",
  insuranceParagraphs: [
    "Consultants typically carry mandatory basic health insurance, plan tax/BTW set-aside, and consider buffers for slow months. Professional liability and disability (AOV) insurance are common topics to explore with advisers — not automatic.",
    "Invoice hygiene matters: KvK number, BTW treatment, sequential numbering and clear payment details. Deep freelancing finance guidance lives on the Freelancing guide.",
  ],
  insurancePoints: [
    "Basic health insurance — mandatory for residents",
    "Tax reserve — separate account for BTW and income tax",
    "Cash buffer — 3–6 months expenses for pipeline gaps",
    "Optional covers — liability / AOV with adviser exploration",
    "Invoicing — KvK, BTW ID, terms and sequential numbers",
  ],
  insuranceChecklist: [
    "Compare basic health insurers when newly self-employed — Independenter or insurer sites.",
    "Automate a transfer to tax reserve when invoices pay.",
    "Keep invoice templates reviewed by your accountant.",
    "Read Freelancing financial-planning section for deeper rate and buffer math.",
  ],
  insuranceGuideLinks: [
    { label: "Health insurance services", href: HEALTH_INSURANCE_PATH, status: "live", description: "Compare mandatory basic coverage when you become self-employed." },
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Buffers, rate math, health and pension orientation for ZZP." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Pension gaps, insurance and variable-income planning." },
    { label: "Expat taxes", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax orientation when consultancy income joins other streams." },
  ] satisfies StartingConsultancyLink[],
  insuranceScenarios: [
    {
      profile: "Switch from employer plan",
      scenario: "Leaves corporate job; must pick own insurer",
      whatToCheck: "Mandatory basic coverage within required window.",
    },
    {
      profile: "Slow pipeline month",
      scenario: "No billable days for 5 weeks",
      whatToCheck: "Buffer usage + networking sprint — normal early-practice cycle.",
    },
    {
      profile: "BTW shock",
      scenario: "Spent full invoices; quarterly BTW due",
      whatToCheck: "Accountant + Belastingdienst payment plan; reserve habit next quarter.",
    },
    {
      profile: "Client asks for insurance proof",
      scenario: "Enterprise procurement checklist",
      whatToCheck: "Liability cover discussion with adviser before signing.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  visasHeading: "Visa and Permit Intersection",
  visasParagraphs: [
    "Your residence and work permit type may restrict or shape self-employment and consultancy activity. EU/EEA/Swiss citizens generally have different options than permit holders tied to a sponsoring employer.",
    "IND rules are separate from KvK registration. Do not assume an HS migrant employment permit covers freelance or consultancy side work. Verify on ind.nl and with immigration professionals when unsure.",
  ],
  visasPoints: [
    "EU/EEA/Swiss — broader self-employment access subject to registration and tax",
    "Highly skilled migrant — employment often tied to sponsor; side work often restricted",
    "Self-employment permit — separate IND entrepreneur route",
    "Partner/family permits — work rights vary by document",
  ],
  visasChecklist: [
    "Read ind.nl for your exact permit type before registering KvK activity.",
    "Do not assume sponsor employment covers consultancy side projects.",
    "Consult immigration lawyers for route changes — not job forums alone.",
    "Keep timing clear: last employment day vs first consultancy invoice.",
  ],
  visasComparisonRows: [
    { topic: "EU citizen consultant", dutchContext: "Register KvK and tax; no work permit", whatToConfirm: "BSN, address and insurance setup" },
    { topic: "HS migrant — side practice", dutchContext: "Additional work often restricted", whatToConfirm: "IND and employer contract before invoicing" },
    { topic: "Self-employment visa", dutchContext: "Separate entrepreneur criteria on ind.nl", whatToConfirm: "Business plan and income thresholds independently" },
    { topic: "Leaving sponsor for full practice", dutchContext: "Permit change may be required", whatToConfirm: "Immigration lawyer before last employment day" },
  ] satisfies StartingConsultancyComparisonRow[],
  visasScenarios: [
    {
      profile: "HS migrant — weekend advice",
      scenario: "Wants to invoice outside sponsor job",
      whatToCheck: "IND rules and employment moonlighting clause.",
    },
    {
      profile: "EU consultant relocates",
      scenario: "Moves to NL with existing EU clients",
      whatToCheck: "Tax residency + KvK — Freelancing international clients section.",
    },
    {
      profile: "Route change",
      scenario: "Leaving HSM employment to consult full time",
      whatToCheck: "Immigration lawyer timing before KvK and last day.",
    },
    {
      profile: "Partner permit",
      scenario: "Residence card mentions work rights",
      whatToCheck: "IND document-specific FAQ before commercial activity.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  mistakesHeading: "Common Mistakes When Starting a Consultancy",
  mistakesParagraphs: [
    "Expats launching consultancy practices often repeat predictable errors: vague niches, underpricing, skipping SOWs, depending on one client, late KvK registration and assuming permits allow side work.",
    "Most issues are easier to prevent in the first 90 days than to fix after payment disputes or Belastingdienst letters.",
  ],
  mistakeCards: [
    { title: "Vague niche", body: "Example: “business consultant” profile — buyers cannot refer you precisely." },
    { title: "Underpricing", body: "Example: day rate copied from a forum without buffer or non-billable time." },
    { title: "No written SOW", body: "Example: friend project expands unpaid for weeks." },
    { title: "One-client dependency", body: "Example: 90% income from one engagement — classification and cash-flow risk." },
    { title: "Late KvK", body: "Example: invoices sent before registration — backdating questions." },
    { title: "Permit assumptions", body: "Example: HSM side consulting without IND clearance." },
    { title: "Ignoring unpaid sales time", body: "Example: rate math assumes 100% billable days." },
    { title: "Skipping buffers", body: "Example: no tax reserve — quarterly BTW shock." },
  ] satisfies StartingConsultancyCard[],
  mistakesChecklist: [
    "Lock niche and proof kit before broad outreach.",
    "Use written SOWs with payment terms for every paid engagement.",
    "Register KvK before substantial commercial revenue.",
    "Verify IND rules if any permit is tied to employment.",
  ],
  mistakesScenarios: [
    {
      profile: "Niche dilution",
      scenario: "Accepts any gig; LinkedIn becomes incoherent",
      whatToCheck: "Re-centre on primary niche for 90 days.",
    },
    {
      profile: "DBA scare",
      scenario: "12-month exclusive “consultancy” at one client",
      whatToCheck: "Classification review — Contractor vs employee guide.",
    },
    {
      profile: "Unpaid invoice",
      scenario: "€9k delayed; verbal scope only",
      whatToCheck: "Future deposits; adviser on collection options.",
    },
    {
      profile: "Permit side work",
      scenario: "Invoices without IND clearance",
      whatToCheck: "Immigration lawyer before continuing.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  launchChecklistHeading: "Consultancy Launch Checklist",
  launchChecklistParagraphs: [
    "Work this checklist in order: practice design first, then pipeline, then registration and paperwork. Skip steps that do not apply — but do not skip permit checks if you hold a Dutch residence document tied to employment.",
  ],
  launchChecklist: [
    "Write niche sentence, ideal client and one-page offer menu.",
    "Prepare two proof items and a forwardable intro blurb.",
    "Build a warm-outreach list of 15; contact the top five.",
    "Confirm permit rules on ind.nl if you are not freelancing under EU free movement.",
    "Read Freelancing + ZZP guides; plan KvK timing before large invoices.",
    "Draft SOW and invoice templates (ex/incl BTW clear).",
    "Open dedicated banking and set tax-reserve habit.",
    "Compare basic health insurance; sketch 3–6 month buffer target.",
    "Book accountant orientation for BTW and cross-border clients if relevant.",
    "Schedule weekly pipeline time — sales is part of the practice.",
  ],
  howTo: {
    name: "Orient your consultancy practice launch in the Netherlands",
    description: "High-level orientation steps for expats designing a consultancy practice — not legal or tax advice.",
    steps: [
      { name: "Define niche and offer", text: "Write a one-sentence niche, ideal client and packaged entry offer with clear outcomes." },
      { name: "Build a warm pipeline", text: "List warm contacts, update LinkedIn to match the niche and book discovery conversations." },
      { name: "Confirm permits and registration path", text: "Check IND rules if needed, then plan KvK/ZZP steps using the Freelancing and ZZP guides." },
      { name: "Prepare contracts and money hygiene", text: "Draft SOW and invoice templates, plan tax reserves, health insurance and buffers." },
      { name: "Launch with written first engagement", text: "Convert the first paid conversation into a signed SOW before substantial work begins." },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to start a consultancy practice in the Netherlands (orientation)",
    description: "Orientation steps for niche, pipeline, permits, registration and first SOW — not professional advice.",
    anchor: "#checklist",
  },
  scenariosHeading: "Scenarios Expats Often Face",
  scenariosParagraphs: [
    "Use these composite scenarios to spot what to verify next. They are orientation examples — not recommendations for any specific person.",
  ],
  scenarios: [
    {
      profile: "Corporate exit — strategy",
      scenario: "Resigns to advise former industry peers at day rate",
      whatToCheck: "Niche, warm intros, KvK timing, SOW and employment package comparison.",
    },
    {
      profile: "Niche switcher",
      scenario: "Tech PM pivoting to AI adoption consulting",
      whatToCheck: "Bridge proof; start with buyers who know prior delivery.",
    },
    {
      profile: "EU remote clients",
      scenario: "Lives in NL; invoices German and French B2B",
      whatToCheck: "VAT treatment per client — Freelancing international + accountant.",
    },
    {
      profile: "Permit holder",
      scenario: "HSM considering side advisory",
      whatToCheck: "IND first — then practice design if allowed.",
    },
    {
      profile: "Agency interim",
      scenario: "Full-time placement labelled consultancy",
      whatToCheck: "Contractor vs employee classification and fee structure.",
    },
    {
      profile: "Scaling later",
      scenario: "Solo year one; considering hiring associate",
      whatToCheck: "Starting a business guide when structure changes.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  relatedGuides: [
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "General ZZP freelancing orientation — do not duplicate; link heavily." },
    { label: "ZZP in the Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Registration/system deep-dive for self-employment." },
    { label: "Starting a business", href: STARTING_BUSINESS_NETHERLANDS_PATH, status: "live", description: "Broader entrepreneurship beyond solo consultancy." },
    { label: "Contractor vs employee", href: CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH, status: "live", description: "Employment-model comparison for interim-like work." },
    { label: "Networking Netherlands", href: NETWORKING_NETHERLANDS_PATH, status: "live", description: "Pipeline and professional network building." },
    { label: "LinkedIn Netherlands", href: LINKEDIN_NETHERLANDS_PATH, status: "live", description: "Profile and outreach for Dutch professional services." },
    { label: "Finding jobs", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Employer routes when consultancy is a bridge or alternative." },
    { label: "Remote work Netherlands", href: REMOTE_WORK_NETHERLANDS_PATH, status: "live", description: "Employed remote/hybrid norms — light cross-link only." },
    { label: "Recruitment agencies", href: RECRUITMENT_AGENCIES_NETHERLANDS_PATH, status: "live", description: "Interim and advisory placements via agencies." },
    { label: "English-speaking jobs", href: ENGLISH_SPEAKING_JOBS_NETHERLANDS_PATH, status: "live", description: "English-friendly employer landscape alongside self-employment." },
    { label: "CV Netherlands", href: CV_NETHERLANDS_PATH, status: "live", description: "CV norms when you still apply in parallel." },
    { label: "Cover letter", href: COVER_LETTER_NETHERLANDS_PATH, status: "live", description: "Motivatiebrief when vacancies still require a letter." },
    { label: "Interview tips", href: INTERVIEW_TIPS_NETHERLANDS_PATH, status: "live", description: "Interview norms for employed roles alongside consulting." },
    { label: "Salary negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Package math when comparing employment offers to consultancy." },
  ] satisfies StartingConsultancyLink[],
  relatedGuideReadingOrder: [
    "Open Freelancing for general ZZP orientation, then ZZP for registration depth.",
    "Use Networking and LinkedIn when building the first-client pipeline.",
    "Use Contractor vs employee when an engagement looks employment-like.",
  ],
  hubCards: [
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Sibling freelancing lane — clients, taxes, visas and cities." },
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Registration-system deep-dive." },
    { label: "Contractor vs employee", href: CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH, status: "live", description: "Work-model comparison hub." },
    { label: "Starting a business", href: STARTING_BUSINESS_NETHERLANDS_PATH, status: "live", description: "Broader entrepreneurship cluster." },
    { label: "Networking", href: NETWORKING_NETHERLANDS_PATH, status: "live", description: "Warm pipeline and professional networks." },
    { label: "LinkedIn", href: LINKEDIN_NETHERLANDS_PATH, status: "live", description: "Profile and outreach for consultancy visibility." },
    { label: "Finding jobs", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Employer search alongside practice launch." },
    { label: "Jobs hub", href: JOBS_HUB_PATH, status: "live", description: "Working in the Netherlands — cluster home." },
  ] satisfies StartingConsultancyLink[],
  relatedGuideScenarios: [
    {
      profile: "Need registration depth",
      scenario: "Niche clear; unsure about KvK/BTW",
      whatToCheck: "ZZP + Freelancing guides this week.",
    },
    {
      profile: "Need pipeline",
      scenario: "Offer ready; empty calendar",
      whatToCheck: "Networking + LinkedIn guides + warm list sprint.",
    },
    {
      profile: "Employment-like offer",
      scenario: "4 days/week exclusive via agency",
      whatToCheck: "Contractor vs employee before signing.",
    },
    {
      profile: "Parallel job search",
      scenario: "Consulting while applying for permanent roles",
      whatToCheck: "Finding jobs + CV/Cover letter cluster pages.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  serviceCategories: [
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "BTW, income tax and cross-border clients during practice setup." },
    { label: "Accountants", href: ACCOUNTANTS_PATH, status: "live", description: "Bookkeeping and filings for consultancy practices — confirm scope before engaging." },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, status: "live", description: "Permit questions when consultancy intersects with residency." },
    { label: "Career coaches", href: CAREER_COACHES_PATH, status: "live", description: "Positioning and transition support — not a ranking of coaches." },
    { label: "Business consultants", href: BUSINESS_CONSULTANTS_PATH, status: "live", description: "Operations and growth beyond day-one practice design." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Buffers, pension gaps and insurance planning." },
    { label: "Health insurance", href: HEALTH_INSURANCE_PATH, status: "live", description: "Mandatory basic coverage when self-employed." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, status: "live", description: "Moves timed around practice launch and housing." },
  ] satisfies ServiceCategory[],
  servicesWhenToUse: [
    "Tax advisors: KvK timing, BTW scheme choice and cross-border client invoicing.",
    "Immigration lawyers: permit restrictions and employment-to-consultancy route changes.",
    "Career coaches: niche clarity and transition planning — discovery, not rankings.",
    "Financial advisors: buffers, pension gaps and optional insurance covers.",
    "Relocation services: housing and family moves aligned with first-client timing.",
  ],
  serviceScenarios: [
    {
      profile: "First year — US + NL clients",
      scenario: "Complex VAT and tax residency",
      whatToCheck: "Tax adviser with expat self-employment experience.",
    },
    {
      profile: "HS migrant — full practice",
      scenario: "Leaving sponsor to consult full time",
      whatToCheck: "Immigration lawyer before last employment day.",
    },
    {
      profile: "Niche unclear",
      scenario: "Strong CV; weak offer language",
      whatToCheck: "Career coach or trusted peer review — still verify yourself.",
    },
    {
      profile: "Buffer planning",
      scenario: "Age 40 leaving corporate pension",
      whatToCheck: "Financial adviser to model rate and retirement gap.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  servicesNote:
    "Listings are for discovery when starting a consultancy practice — not a ranking of consultancy firms or coaches. They do not replace KvK registration or qualified advice.",
  faq: [
    {
      q: "Can expats start a consultancy in the Netherlands?",
      a: "Often yes depending on nationality and permit. EU citizens typically register at KvK; permit holders must verify IND rules on ind.nl before invoicing.",
    },
    {
      q: "How is consultancy different from freelancing?",
      a: "Consultancy emphasises niche, advisory outcomes, packaged offers and professional-services contracts. Freelancing is the broader ZZP lane. Many consultants still use ZZP plumbing.",
    },
    {
      q: "Do I need KvK registration?",
      a: "Many consultants register before substantial commercial activity and receive a KvK number for invoices. See the ZZP and Freelancing guides for depth.",
    },
    {
      q: "How should I think about rates?",
      a: "Day rates, project fees and retainers are common. Model unpaid sales time, tax set-aside and buffers — there is no official guaranteed rate table.",
    },
    {
      q: "How do consultants find first clients?",
      a: "Warm intros, former colleagues, LinkedIn niche visibility and networking are common. See Networking and LinkedIn guides for channel tactics.",
    },
    {
      q: "What belongs in a consultancy contract?",
      a: "Typically SOW scope, payment terms, IP, confidentiality and liability orientation. Have large engagements reviewed by a qualified adviser.",
    },
    {
      q: "Can highly skilled migrants consult on the side?",
      a: "Often restricted because employment is tied to a sponsor — verify ind.nl before side or full consultancy activity.",
    },
    {
      q: "When should I read Starting a business instead?",
      a: "When you outgrow solo practice — hiring, BV structure or broader entrepreneurship beyond consultancy setup.",
    },
  ],
  faqNextSteps: [
    "Confirm permit rules on ind.nl if you are not under EU free movement.",
    "Draft niche + offer, then read Freelancing and ZZP for registration.",
    "Prepare SOW and tax-reserve habit before the first large invoice.",
  ],
  faqScenarios: [
    {
      profile: "KvK timing",
      scenario: "Client start in 5 days; no registration",
      whatToCheck: "Priority KvK + accountant call; delay kickoff if needed.",
    },
    {
      profile: "Rate confusion",
      scenario: "Client pushes net rate without BTW clarity",
      whatToCheck: "State ex/incl BTW and payment deadline in writing.",
    },
    {
      profile: "HS migrant side project",
      scenario: "Weekend consulting while employed",
      whatToCheck: "IND FAQ and immigration lawyer before invoicing.",
    },
    {
      profile: "Vague niche",
      scenario: "Low referral conversion",
      whatToCheck: "Rewrite niche sentence and LinkedIn About.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  officialSources: [
    { label: "KvK", href: "https://www.kvk.nl/", description: "Chamber of Commerce — business registration, trade names and activity codes." },
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Dutch Tax Administration — BTW/VAT, income tax and self-employment tax information." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Practical government information on starting and running a business in the Netherlands." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Central portal for living, working and self-employment in the Netherlands." },
    { label: "IND", href: "https://ind.nl/", description: "Immigration and permit rules when self-employment affects residency — verify independently." },
    { label: "UWV", href: "https://www.uwv.nl/", description: "Employee insurance orientation when transitioning from employment to self-employment." },
  ],
  officialSourcesNote:
    "Registration rules, tax thresholds and permit requirements change over time. Always verify current requirements through official resources — this page is orientation only.",
  sourceVerificationTips: [
    "KvK — business registration steps, trade names and activity codes.",
    "Belastingdienst — BTW registration, filing deadlines and income tax.",
    "Business.gov.nl — starting a business checklists and self-employment context.",
    "IND — permit types and whether consultancy activity is allowed on your route.",
  ],
  officialSourcesScenarios: [
    {
      profile: "First KvK registration",
      scenario: "Unsure which activity code fits advisory work",
      whatToCheck: "KvK online wizard and Business.gov.nl activity descriptions.",
    },
    {
      profile: "BTW letter",
      scenario: "First quarterly filing deadline approaching",
      whatToCheck: "Belastingdienst portal and accountant.",
    },
    {
      profile: "Permit sticker",
      scenario: "Residence card mentions work restrictions",
      whatToCheck: "IND website for document-specific work rights.",
    },
    {
      profile: "Leaving employment",
      scenario: "Last employment day 30 June",
      whatToCheck: "UWV orientation plus IND if permit tied to employer.",
    },
  ] satisfies StartingConsultancyScenarioRow[],
  exploreNextTips: [
    "Open Freelancing when you need general ZZP lifecycle orientation.",
    "Open ZZP when registration and system depth is the blocker.",
    "Open Networking / LinkedIn when the offer is clear but the calendar is empty.",
    "Open Contractor vs employee when an engagement looks like employment.",
  ],
  exploreNextCards: [
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Sibling freelancing lane — live; link heavily." },
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Registration/system deep-dive." },
    { label: "Starting a business", href: STARTING_BUSINESS_NETHERLANDS_PATH, status: "live", description: "Broader entrepreneurship beyond solo practice." },
    { label: "Contractor vs employee", href: CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH, status: "live", description: "Compare employment and contractor models." },
    { label: "Networking Netherlands", href: NETWORKING_NETHERLANDS_PATH, status: "live", description: "Build the warm pipeline for first clients." },
    { label: "LinkedIn Netherlands", href: LINKEDIN_NETHERLANDS_PATH, status: "live", description: "Make the niche visible to Dutch buyers." },
  ] satisfies StartingConsultancyLink[],
  planningLinks: [
    { label: "Freelancing guide", href: FREELANCING_NETHERLANDS_PATH, description: "General ZZP freelancing orientation for expats." },
    { label: "ZZP guide", href: ZZP_NETHERLANDS_PATH, description: "Registration and system deep-dive." },
    { label: "Networking guide", href: NETWORKING_NETHERLANDS_PATH, description: "Warm intros and professional networks." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, description: "BTW and income tax when practice revenue starts." },
  ] satisfies StartingConsultancyLink[],
  expatQuestions: [
    { q: "Is consultancy just freelancing with a nicer title?", a: "Not quite — practice design (niche, offer, SOW, pipeline) differs even when KvK/ZZP plumbing is shared." },
    { q: "Where do I register?", a: "Many solo consultants register as ZZP/eenmanszaak at KvK — see ZZP and Freelancing guides." },
    { q: "How do I get first clients?", a: "Warm intros, LinkedIn niche visibility and networking are common starting points." },
    { q: "Are there official rate tables?", a: "No guaranteed official ranking — model costs, buffers and niche scarcity with advisers." },
    { q: "Do I need a contract?", a: "Written SOW and payment terms are strongly advisable for paid advisory work." },
    { q: "What about my visa?", a: "Permit rules may block or shape self-employment — verify on ind.nl independently." },
  ],
  conversationPrompts: [
    { audience: "Accountant", question: "How should I invoice domestic vs EU B2B clients for this advisory work?", whyAsk: "Wrong VAT treatment creates corrections and client confusion." },
    { audience: "IND / lawyer", question: "Does my permit allow the consultancy activity I am planning?", whyAsk: "KvK registration does not override permit restrictions." },
    { audience: "Client", question: "Can we define outcomes, milestones and payment within 14 days?", whyAsk: "Written terms reduce scope creep and late payment." },
    { audience: "Former colleague", question: "Could you introduce me to [named buyer] for a short diagnostic?", whyAsk: "Warm intros convert better than cold outreach." },
    { audience: "Career coach", question: "Does my niche sentence make the buyer and problem obvious?", whyAsk: "Vague positioning slows referrals." },
    { audience: "Insurer", question: "Which basic health package fits my expected self-employed income?", whyAsk: "Mandatory coverage with premium trade-offs." },
  ],
} as const;

// Fix typo introduced above — TypeScript will fail on saturatesStartingConsultancyScenarioRow_PLACEHOLDER
export type StartingConsultancyNetherlandsPage = typeof startingConsultancyNetherlandsPage;

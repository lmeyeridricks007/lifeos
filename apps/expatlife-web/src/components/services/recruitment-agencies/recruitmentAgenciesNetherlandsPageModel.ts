import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

/** Services directory — compare/find recruitment agency providers. */
export const RECRUITMENT_AGENCIES_SERVICES_PATH = "/netherlands/services/recruitment-agencies/" as const;

/** Career Cluster guide — how the agency channel works for job seekers (do not confuse with this directory). */
export const CAREER_RECRUITMENT_AGENCIES_PATH = "/netherlands/jobs/recruitment-agencies-netherlands/" as const;

export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;
export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const VISA_CONSULTANTS_PATH = "/netherlands/services/visa-consultants/" as const;
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;
export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const CAREER_COACHES_PATH = "/netherlands/services/career-coaches/" as const;
export const RELOCATION_SERVICES_PATH = "/netherlands/services/relocation-services/" as const;
export const RELOCATION_AGENCIES_PATH = "/netherlands/services/relocation-agencies/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const JOBS_HUB_PATH = "/netherlands/jobs/" as const;
export const FINDING_JOBS_PATH = "/netherlands/jobs/finding-jobs-netherlands/" as const;
export const LINKEDIN_NETHERLANDS_PATH = "/netherlands/jobs/linkedin-netherlands/" as const;
export const ENGLISH_SPEAKING_JOBS_PATH = "/netherlands/jobs/english-speaking-jobs-netherlands/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;

export const RECRUITMENT_AGENCIES_SERVICES_AFFILIATE_PLACEMENT_ID =
  "nl-services-recruitment-agencies-support-providers" as const;

export type RecruitmentAgencyProvider = {
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
  agencyType: "Expat-focused" | "Specialist" | "Generalist" | "Interim / staffing" | "Executive search" | "Large national";
  sectors: string[];
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type RecruitmentAgencyLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-recruitment-agencies";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const recruitmentAgenciesServicesNetherlandsPage = {
  slug: "recruitment-agencies",
  path: RECRUITMENT_AGENCIES_SERVICES_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(RECRUITMENT_AGENCIES_SERVICES_PATH) ?? "2026-10-22",
  affiliatePlacementId: RECRUITMENT_AGENCIES_SERVICES_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Recruitment Agencies in the Netherlands for Expats | Provider Directory",
    description:
      "Compare recruitment agency types, fee models, languages and sectors in the Netherlands. Soft provider discovery for expats — not a ranking, and not the career how-to guide.",
    keywords: [
      "recruitment agencies netherlands",
      "expat recruitment agencies netherlands",
      "dutch recruiters for expats",
      "uitzendbureau netherlands",
      "intermediair netherlands",
      "executive search netherlands",
      "recruitment agency fees netherlands",
      "english speaking recruiters netherlands",
      "agency types netherlands jobs",
      "compare recruitment agencies netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Recruitment agencies",
    pageTitle: "Recruitment Agencies in the Netherlands for Expats",
    subtitle:
      "Compare agency types, commercial models, languages and sector coverage so you can shortlist providers — then verify fit directly. This is a services directory, not a job-search how-to.",
    primaryCta: { label: "Browse Agency Directory", href: "#directory" },
    secondaryCta: { label: "How Agencies Work (Career Guide)", href: CAREER_RECRUITMENT_AGENCIES_PATH },
    chips: ["Agency types", "Fees & models", "Languages & sectors", "Provider directory"],
    image: {
      src: "/images/heroes/netherlands-services-recruitment-agencies-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an international professional reviewing recruitment agency shortlists and role briefs with a consultant in a bright Amsterdam canal-side office, CV folders and laptop on the desk.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what recruitment agencies help with for expats: role matching, market feedback, employer introductions, interview coordination and offer logistics.",
      "Agencies sit between candidates and hiring companies — confirm what they cover before you share documents."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about recruitment agencies in the Netherlands for expats.",
      "Use this snapshot before shortlisting: agency type, fee model, languages and sector fit differ."
    ),
    agencyTypes: visual(
      "agency-types",
      "Infographic comparing recruitment agency types: generalist, specialist, interim/temp, executive search and niche tech/finance.",
      "Pick the agency model that matches your seniority and sector — not every recruiter covers every role."
    ),
    agencyServices: visual(
      "agency-services",
      "Infographic of agency service scope: vacancy matching, CV feedback, client intros, process coordination and market signals.",
      "Service depth varies: some teams only screen CVs; others coach through full processes."
    ),
    compare: visual(
      "compare",
      "Infographic checklist for comparing recruitment agencies: sector depth, languages, visa awareness, LinkedIn interplay and transparency.",
      "Compare process quality and fit criteria before you compare brand names."
    ),
    fees: visual(
      "fees",
      "Infographic explaining recruitment commercial models: employer-paid permanent fees, staffing markups and retained executive search.",
      "Candidates rarely pay for permanent placements in the Netherlands — ask who pays and what that means for you."
    ),
    documents: visual(
      "documents",
      "Infographic listing documents and prep items agencies often request from expat candidates.",
      "Clean documents help agencies pitch you accurately — requirements still vary by role and client."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges with Dutch recruiters: language filters, visa questions, niche fit, ghosting and fee confusion.",
      "Use early calls to test whether an agency understands your profile and constraints."
    ),
    cityCoverage: visual(
      "city-coverage",
      "Infographic showing recruitment agency coverage across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and other Dutch cities.",
      "Many agencies work nationally online; local desks can still matter for certain sectors and languages."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral provider directory workflow: shortlist, compare, verify and decide.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for recruitment agencies: agency type, sectors, languages, remote support and expat focus.",
      "Compare agencies by scope and process quality before you compare marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask recruitment agencies before partnering.",
      "Good questions reveal sector depth, fee model, language support and visa awareness."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common recruitment agency FAQ topics: fees, types, LinkedIn, visa awareness and red flags.",
      "FAQ answers should help you identify the next verification step — not guarantee placements."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist recruitment agencies: pick types, ask scope, check fees and verify fit.",
      "Turn provider discovery into a structured shortlist before you share sensitive documents."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official and trusted sources for employment and staffing context in the Netherlands.",
      "Verify employment rules and staffing context with official sources — not agency marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around job search: recruitment agencies, career coaches, visa consultants, immigration lawyers, tax advisors and relocation.",
      "Recruitment is one part of the wider work and relocation support ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing agencies: career how-to guide, finding jobs, LinkedIn, English roles and services hub.",
      "Continue from provider discovery into channel tactics and related career guides."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting recruitment agency research to career guide, finding jobs, LinkedIn, immigration lawyers and cities.",
      "Agency shortlists connect naturally into job-search tactics, visa context and city choice."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#agency-types", label: "Agency types" },
    { href: "#agency-role", label: "What agencies do" },
    { href: "#compare", label: "How to compare" },
    { href: "#fees", label: "Fees & models" },
    { href: "#documents", label: "Documents" },
    { href: "#challenges", label: "Challenges" },
    { href: "#cities", label: "Cities" },
    { href: "#directory", label: "Directory" },
    { href: "#comparison", label: "Compare" },
    { href: "#affiliate-providers", label: "Providers" },
    { href: "#questions", label: "Questions" },
    { href: "#lead-cta", label: "Get help" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  intro: {
    heading: "Why Expats Compare Recruitment Agencies as Providers",
    paragraphs: [
      "Recruitment agencies, uitzendbureaus and intermediars are a major hiring channel in the Netherlands. Expats often need to shortlist providers by sector, language, seniority and commercial model — not just “apply to every agency email.”",
      "This page is a services directory: how to choose and compare recruitment agency providers. For the job-seeker playbook — when to use agencies, how to partner with recruiters, and how the channel fits beside LinkedIn and networking — use the Career Cluster guide.",
      "Inclusion here is informational, not a ranking. No agency can guarantee interviews, sponsorship or placement. Confirm scope, fees and fit directly before sharing documents.",
    ],
    links: [
      { label: "Career guide: how agencies work", href: CAREER_RECRUITMENT_AGENCIES_PATH },
      { label: "Finding jobs Netherlands", href: FINDING_JOBS_PATH },
      { label: "LinkedIn Netherlands", href: LINKEDIN_NETHERLANDS_PATH },
      { label: "Services hub", href: SERVICES_HUB_PATH },
    ],
  },
  snapshotCards: [
    { label: "Agency market", value: "Large", note: "Permanent, interim and executive search firms operate nationwide." },
    { label: "Who usually pays", value: "Employer", note: "Permanent placement fees are typically paid by the hiring company." },
    { label: "Provider models", value: "5+ types", note: "Generalist, specialist, staffing, executive and niche desks differ." },
    { label: "Languages", value: "Varies", note: "English-friendly desks exist; some roles still require Dutch." },
    { label: "LinkedIn interplay", value: "Common", note: "Many recruiters source and message via LinkedIn as well as databases." },
    { label: "Guarantee", value: "None", note: "No directory or agency can guarantee a job or visa outcome." },
  ],
  agencyTypeComparison: [
    {
      type: "Generalist / multi-sector",
      scope: "Broad vacancy coverage across industries; useful for early exploration.",
      usefulWhen: "You want volume of roles and are open across sectors or cities.",
      questions: ["Which desks own my sector?", "Who will personally represent me?", "How do you prioritise English-speaking roles?"],
    },
    {
      type: "Specialist (IT, finance, life sciences…)",
      scope: "Deep client relationships in one or a few verticals.",
      usefulWhen: "Your title and stack are niche and you need market-accurate feedback.",
      questions: ["Which clients do you actively fill?", "How recent is your vacancy list?", "Do you place similar seniority regularly?"],
    },
    {
      type: "Interim / uitzendbureau / staffing",
      scope: "Temp, secondment and flexible contracts; payroll often via the agency.",
      usefulWhen: "You want faster starts, project roles or bridge employment.",
      questions: ["Who is the employer of record?", "What contract type applies?", "How does conversion to permanent work?"],
    },
    {
      type: "Executive search / headhunters",
      scope: "Retained or contingency search for senior and leadership roles.",
      usefulWhen: "You are targeting leadership, scarce skills or confidential searches.",
      questions: ["Retained or contingency?", "Which levels do you cover?", "How confidential is the process?"],
    },
    {
      type: "Expat / international-focused desk",
      scope: "English-first processes and familiarity with international CVs and relocation timing.",
      usefulWhen: "You need clear language support and awareness of visa/sponsorship questions.",
      questions: ["How often do you place internationals?", "Do you discuss sponsorship openly?", "Which cities and sectors?"],
    },
  ],
  agencyServices: [
    { title: "Role matching", body: "Map your skills, seniority and preferences to open client vacancies and upcoming briefs." },
    { title: "Market feedback", body: "Share salary bands, demand signals and Dutch market expectations for your profile." },
    { title: "Employer introductions", body: "Present you to hiring managers and coordinate screening steps with client teams." },
    { title: "Interview coordination", body: "Schedule rounds, share prep notes and relay feedback between you and the client." },
    { title: "Offer logistics", body: "Help clarify package components, start dates and sometimes relocation timing questions." },
    { title: "LinkedIn sourcing", body: "Many desks also source passively via LinkedIn — keep profiles consistent with your CV." },
  ],
  compareCriteria: [
    { criterion: "Sector depth", whyItMatters: "Specialist desks often know clients and titles better than generalist volume desks.", howToCheck: "Ask for recent similar placements (anonymised) and active vacancy examples." },
    { criterion: "Languages", whyItMatters: "English support does not always mean English-friendly client roles.", howToCheck: "Ask which roles require Dutch B1+ and how language screens work." },
    { criterion: "Commercial model", whyItMatters: "Employer-paid vs staffing payroll vs retained search changes incentives and timelines.", howToCheck: "Ask who pays, what you sign, and whether any candidate fees apply." },
    { criterion: "Visa / sponsorship awareness", whyItMatters: "Some desks know IND/sponsorship realities; others waste cycles on ineligible roles.", howToCheck: "Ask how they handle non-EU candidates and which clients sponsor." },
    { criterion: "Process transparency", whyItMatters: "Clear feedback beats silence after CV drops.", howToCheck: "Ask expected response times and how status updates work." },
    { criterion: "LinkedIn + database interplay", whyItMatters: "You may already be in their ATS from prior applications.", howToCheck: "Ask how they store profiles and whether to apply via portal and recruiter." },
  ],
  feeExamples: [
    { item: "Permanent placement (agency fee)", typicalRange: "Employer-paid % of salary", whatToConfirm: "That you are not charged a candidate placement fee; ask what the agency invoices the client." },
    { item: "Interim / staffing markup", typicalRange: "Hourly/daily markup to client", whatToConfirm: "Who employs you, pay cycle, and conversion terms to permanent." },
    { item: "Executive retained search", typicalRange: "Client retainer + success fee", whatToConfirm: "Whether the search is exclusive and how confidential your involvement is." },
    { item: "Candidate-paid “job guarantee” schemes", typicalRange: "Red flag", whatToConfirm: "Walk away from anyone requiring large upfront fees for promised jobs." },
  ],
  documentChecklist: [
    { document: "Up-to-date CV (Dutch/EU style)", why: "Agencies forward a clean file to clients; length and format expectations vary by sector." },
    { document: "LinkedIn URL aligned with CV", why: "Recruiters cross-check profiles; inconsistencies slow introductions." },
    { document: "Work authorisation summary", why: "EU/EEA, highly skilled migrant, dependent permit or other status changes which roles are realistic." },
    { document: "Notice period / availability", why: "Clients plan start dates; unclear availability wastes processes." },
    { document: "Salary expectation range", why: "Helps agencies filter briefs without under- or over-pitching." },
    { document: "Portfolio or certification links", why: "Relevant for tech, design, regulated or specialist professions." },
    { document: "Relocation / city preferences", why: "National desks need clear geography and hybrid constraints." },
  ],
  challengeCards: [
    { title: "Language filters", body: "Some vacancies require Dutch even when the team works in English day-to-day." },
    { title: "Visa uncertainty", body: "Sponsorship appetite differs by employer; agencies may not control IND outcomes." },
    { title: "Niche mismatch", body: "Generalist desks may push volume roles that do not match your seniority." },
    { title: "Ghosting after CV drop", body: "Busy markets create silence — set expectations on feedback early." },
    { title: "Fee confusion", body: "Candidates sometimes misunderstand who pays; clarify before exclusive arrangements." },
    { title: "Multiple agency conflict", body: "Being presented twice to one client can hurt; track where your CV is sent." },
    { title: "LinkedIn spam", body: "Volume outreach is common; prioritise recruiters who show role and client clarity." },
    { title: "Temp vs permanent mix-ups", body: "Staffing contracts differ from permanent employment — read the model carefully." },
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "Tech, scale-ups, finance and international desks with high English volume." },
    { city: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Logistics, maritime, engineering and mixed professional demand." },
    { city: "The Hague", href: "/netherlands/cities/the-hague/", note: "International organisations, public sector-adjacent and policy ecosystems." },
    { city: "Utrecht", href: "/netherlands/cities/utrecht/", note: "Central hub for corporate, consultancy and regional HQ roles." },
    { city: "Eindhoven", href: "/netherlands/cities/eindhoven/", note: "Deep tech, engineering and highly skilled migrant hiring." },
    { city: "Haarlem", href: "/netherlands/cities/haarlem/", note: "Amsterdam-area spillover for hybrid and professional roles." },
    { city: "Leiden", href: "/netherlands/cities/leiden/", note: "Life sciences, research and university-linked hiring." },
    { city: "Delft", href: "/netherlands/cities/delft/", note: "Tech and engineering talent near TU Delft." },
    { city: "Groningen", href: "/netherlands/cities/groningen/", note: "Northern professional and graduate demand with regional agencies." },
    { city: "Arnhem", href: "/netherlands/cities/arnhem/", note: "Eastern Netherlands corporate and public-sector adjacent roles." },
    { city: "Nijmegen", href: "/netherlands/cities/nijmegen/", note: "Healthcare, research and university ecosystem." },
    { city: "Maastricht", href: "/netherlands/cities/maastricht/", note: "Cross-border region with international residents and specialised hiring." },
  ],
  providers: [
    {
      name: "Undutchables",
      slug: "undutchables",
      city: "Amsterdam",
      region: "Netherlands-wide",
      summary: "Well-known recruitment brand focused on bilingual and international professionals seeking Dutch roles.",
      expatFocus: "Positions around internationals and bilingual talent; verify current desks and language requirements per vacancy.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Offices and remote processes; verify current city coverage.",
      website: "https://www.undutchables.nl/",
      engagementType: "Permanent and contract recruitment processes",
      agencyType: "Expat-focused",
      sectors: ["Commercial", "Office", "Specialist professional"],
      citiesServed: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Netherlands-wide"],
      featured: true,
      verificationNote: "Public brand materials emphasise international talent; confirm current sectors, fees and contact channels directly.",
    },
    {
      name: "Blue Lynx",
      slug: "blue-lynx",
      city: "Amsterdam",
      region: "Randstad focus",
      summary: "Recruitment agency known for placing internationals into English-friendly professional roles.",
      expatFocus: "English-first candidate experience is a common public positioning; verify role language needs with the desk.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Primarily Randstad with remote screening; verify current offices.",
      website: "https://www.bluelynx.nl/",
      engagementType: "Candidate screening and client introductions",
      agencyType: "Expat-focused",
      sectors: ["Professional services", "Office", "Specialist"],
      citiesServed: ["Amsterdam", "Utrecht", "The Hague", "Rotterdam"],
      featured: true,
      verificationNote: "Verify active vacancies, exclusivity rules and how they present candidates to clients.",
    },
    {
      name: "Hays",
      slug: "hays",
      city: "Multiple cities",
      region: "National / international network",
      summary: "Large specialist recruitment firm with multiple Dutch desks across professional disciplines.",
      expatFocus: "International network can help mobility cases; Dutch language and local desk quality still vary by team.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Multiple Dutch offices; verify the specialist desk for your sector.",
      website: "https://www.hays.nl/",
      engagementType: "Specialist permanent and contract recruitment",
      agencyType: "Specialist",
      sectors: ["IT", "Finance", "Engineering", "Life sciences", "Office"],
      citiesServed: ["Amsterdam", "Rotterdam", "Utrecht", "Eindhoven", "Netherlands-wide"],
      featured: true,
      verificationNote: "Ask which Hays desk owns your specialism and how international profiles are handled.",
    },
    {
      name: "Michael Page",
      slug: "michael-page",
      city: "Multiple cities",
      region: "National",
      summary: "International recruitment brand with Dutch offices covering mid-to-senior professional hiring.",
      expatFocus: "Useful when you want structured processes and named consultants; confirm English desk coverage.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Dutch offices plus video screening; verify city desk.",
      website: "https://www.michaelpage.nl/",
      engagementType: "Permanent and temporary professional recruitment",
      agencyType: "Specialist",
      sectors: ["Finance", "Marketing", "HR", "Technology", "Sales"],
      citiesServed: ["Amsterdam", "Rotterdam", "Utrecht", "Eindhoven", "Netherlands-wide"],
      featured: false,
      verificationNote: "Confirm consultant specialism, fee model transparency and CV distribution rules.",
    },
    {
      name: "Robert Half",
      slug: "robert-half",
      city: "Multiple cities",
      region: "National",
      summary: "Specialist recruiter often associated with finance, accounting, technology and administrative roles.",
      expatFocus: "International brand recognition; local Dutch requirements still apply per vacancy.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Office network; verify current locations.",
      website: "https://www.roberthalf.nl/",
      engagementType: "Permanent and interim placements",
      agencyType: "Specialist",
      sectors: ["Finance", "Accounting", "Technology", "Administration"],
      citiesServed: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague", "Netherlands-wide"],
      featured: false,
      verificationNote: "Ask about interim vs permanent tracks and language expectations for each brief.",
    },
    {
      name: "Yacht",
      slug: "yacht",
      city: "Multiple cities",
      region: "National",
      summary: "Dutch professional staffing and interim specialist brand within a larger HR services group.",
      expatFocus: "Strong interim/professional secondment presence; confirm English support by desk.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "National coverage; verify local consultant language support.",
      website: "https://www.yacht.nl/",
      engagementType: "Interim, project and professional staffing",
      agencyType: "Interim / staffing",
      sectors: ["Finance", "IT", "Engineering", "Public", "Professional"],
      citiesServed: ["Amsterdam", "Rotterdam", "Utrecht", "Eindhoven", "Netherlands-wide"],
      featured: false,
      verificationNote: "Clarify employer-of-record model, rates and conversion options before accepting interim work.",
    },
    {
      name: "Randstad",
      slug: "randstad",
      city: "Multiple cities",
      region: "National",
      summary: "Large national staffing and recruitment organisation with broad sector and volume coverage.",
      expatFocus: "Scale and branch network; English-friendly experience can vary strongly by branch and role type.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Large branch network across the Netherlands.",
      website: "https://www.randstad.nl/",
      engagementType: "Staffing, temporary and permanent recruitment",
      agencyType: "Large national",
      sectors: ["Industrial", "Logistics", "Office", "Professional"],
      citiesServed: ["Multiple cities", "Netherlands-wide"],
      featured: false,
      verificationNote: "Verify branch language support, contract type and which desk owns professional vs industrial roles.",
    },
    {
      name: "Tempo-Team",
      slug: "tempo-team",
      city: "Multiple cities",
      region: "National",
      summary: "Staffing brand commonly used for temporary and flexible work across many sectors.",
      expatFocus: "May help with bridge employment; professional English roles are not guaranteed at every branch.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Branches nationwide; verify local options.",
      website: "https://www.tempo-team.nl/",
      engagementType: "Temporary staffing and flexible work",
      agencyType: "Interim / staffing",
      sectors: ["Logistics", "Production", "Office", "Hospitality"],
      citiesServed: ["Multiple cities", "Netherlands-wide"],
      featured: false,
      verificationNote: "Confirm contract terms, pay cycle and language requirements for each assignment.",
    },
    {
      name: "Unique",
      slug: "unique",
      city: "Multiple cities",
      region: "National",
      summary: "Staffing and recruitment brand with temporary and permanent tracks across Dutch branches.",
      expatFocus: "Useful as a volume staffing option; check English support and professional desk availability.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Branch network; verify city coverage.",
      website: "https://www.unique.nl/",
      engagementType: "Temporary and permanent staffing",
      agencyType: "Interim / staffing",
      sectors: ["Office", "Customer service", "Logistics", "Specialist"],
      citiesServed: ["Multiple cities", "Netherlands-wide"],
      featured: false,
      verificationNote: "Ask which consultant owns your file and how they avoid duplicate submissions.",
    },
    {
      name: "Page Executive",
      slug: "page-executive",
      city: "Amsterdam",
      region: "Leadership / executive",
      summary: "Executive search brand within the PageGroup network for senior leadership hiring.",
      expatFocus: "Relevant for senior internationals; processes are often confidential and client-led.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Primarily major cities and remote executive processes.",
      website: "https://www.pageexecutive.com/",
      engagementType: "Executive search and leadership recruitment",
      agencyType: "Executive search",
      sectors: ["Leadership", "Board", "C-level adjacent", "Specialist senior"],
      citiesServed: ["Amsterdam", "Netherlands-wide", "International network"],
      featured: false,
      verificationNote: "Confirm retained vs contingency model, confidentiality and seniority band covered.",
    },
  ] satisfies RecruitmentAgencyProvider[],
  comparisonTable: [
    { agency: "Undutchables", citiesServed: "Major cities, Netherlands-wide", expatFocus: "International / bilingual focus", languages: "English, Dutch", remoteSupport: "Yes", agencyType: "Expat-focused" },
    { agency: "Blue Lynx", citiesServed: "Randstad focus", expatFocus: "English-friendly professionals", languages: "English, Dutch", remoteSupport: "Yes", agencyType: "Expat-focused" },
    { agency: "Hays", citiesServed: "Multiple Dutch cities", expatFocus: "International network + local desks", languages: "English, Dutch", remoteSupport: "Yes", agencyType: "Specialist" },
    { agency: "Michael Page", citiesServed: "Multiple Dutch cities", expatFocus: "Structured mid-senior hiring", languages: "English, Dutch", remoteSupport: "Yes", agencyType: "Specialist" },
    { agency: "Robert Half", citiesServed: "Multiple Dutch cities", expatFocus: "Finance/tech specialist lanes", languages: "English, Dutch", remoteSupport: "Yes", agencyType: "Specialist" },
    { agency: "Yacht", citiesServed: "Netherlands-wide", expatFocus: "Interim/professional staffing", languages: "Dutch, English varies", remoteSupport: "Yes", agencyType: "Interim / staffing" },
    { agency: "Randstad", citiesServed: "National branch network", expatFocus: "Volume staffing + recruitment", languages: "Dutch, English varies", remoteSupport: "Yes", agencyType: "Large national" },
    { agency: "Page Executive", citiesServed: "Major cities / network", expatFocus: "Senior leadership searches", languages: "English, Dutch", remoteSupport: "Yes", agencyType: "Executive search" },
  ],
  questionsToAsk: [
    "Which sectors and seniority levels does your desk actively fill right now?",
    "Who pays your fee — the employer, staffing client, or (red flag) the candidate?",
    "How often do you place internationals or English-first candidates?",
    "Which roles typically require Dutch, and how do you screen language?",
    "How do you handle visa or sponsorship questions with clients?",
    "Will you tell me before sending my CV to a specific employer?",
    "What is your usual feedback timeline after I apply or interview?",
    "How do you coordinate with LinkedIn outreach if I am already in your database?",
  ],
  leadCta: {
    heading: "Need Help Shortlisting Recruitment Agencies?",
    body: "Use the directory to compare agency types, city coverage, languages and commercial models. Then contact shortlisted desks directly — and use the Career guide when you need the job-seeker playbook for working with recruiters.",
    primaryCta: { label: "Compare Agencies", href: "#directory" },
    secondaryCta: { label: "Open Career Agency Guide", href: CAREER_RECRUITMENT_AGENCIES_PATH },
  },
  faqs: [
    {
      q: "Is this the same as the Recruitment agencies Career guide?",
      a: "No. This Services directory helps you compare and choose agency providers (types, fees, languages, sectors). The Career guide at /netherlands/jobs/recruitment-agencies-netherlands/ explains how the agency channel works for job seekers — partnership habits, process, and how agencies fit beside LinkedIn and networking.",
    },
    {
      q: "Do candidates pay recruitment agencies in the Netherlands?",
      a: "For permanent placements, fees are typically paid by employers. Interim/staffing models use client markups. Treat large candidate-paid “job guarantee” offers as a red flag and verify any agreement before paying.",
    },
    {
      q: "What types of recruitment agencies exist?",
      a: "Common models include generalist multi-sector agencies, specialist desks (IT, finance, life sciences), uitzendbureaus/interim staffing, executive search, and expat-focused international desks. Match the model to your seniority and sector.",
    },
    {
      q: "How should I compare agencies without rankings?",
      a: "Compare sector depth, languages, commercial model, visa awareness, feedback habits and whether they will ask before submitting your CV. Rankings and fake reviews are not a substitute for direct verification.",
    },
    {
      q: "Do agencies help with visas?",
      a: "Some recruiters are familiar with sponsorship conversations, but immigration outcomes depend on employers and IND rules. For legal immigration support, see immigration lawyers and visa consultants — not recruitment marketing claims.",
    },
    {
      q: "How do agencies interact with LinkedIn?",
      a: "Many recruiters source and message on LinkedIn while also using ATS databases. Keep your CV and LinkedIn consistent, and ask how they handle duplicate presentations.",
    },
    {
      q: "Can I work with multiple agencies?",
      a: "Yes, but track where your CV is sent. Being introduced twice to the same employer can create conflict. Prefer transparency about exclusivity and submission lists.",
    },
    {
      q: "Does directory inclusion mean ExpatLife recommends an agency?",
      a: "No. Listings are informational soft discovery only. Always verify current services, languages, contract models and fit directly with the provider.",
    },
  ],
  officialSources: [
    { label: "Business.gov.nl — Employment", href: "https://business.gov.nl/regulation/employment/", description: "Official business information on employing staff in the Netherlands." },
    { label: "UWV", href: "https://www.uwv.nl/en", description: "Employee Insurance Agency — employment and work-related orientation." },
    { label: "Government.nl — Work", href: "https://www.government.nl/topics/work", description: "Official Dutch government information on work and employment topics." },
    { label: "IND", href: "https://ind.nl/en", description: "Immigration and Naturalisation Service — residence and work authorisation context." },
  ],
  relatedGuides: [
    {
      label: "Recruitment Agencies Netherlands (Career guide)",
      href: CAREER_RECRUITMENT_AGENCIES_PATH,
      status: "live",
      description: "How the agency channel works for job seekers — partnership, process and channel fit.",
    },
    {
      label: "Finding Jobs in the Netherlands",
      href: FINDING_JOBS_PATH,
      status: "live",
      description: "Multi-channel search strategy beyond agencies alone.",
    },
    {
      label: "LinkedIn Netherlands",
      href: LINKEDIN_NETHERLANDS_PATH,
      status: "live",
      description: "Profile, Open to Work and recruiter messaging tactics.",
    },
    {
      label: "English Speaking Jobs Netherlands",
      href: ENGLISH_SPEAKING_JOBS_PATH,
      status: "live",
      description: "English-friendly sectors and language reality checks.",
    },
    {
      label: "Immigration Lawyers",
      href: IMMIGRATION_LAWYERS_PATH,
      status: "live",
      description: "Legal immigration support when sponsorship questions go beyond recruiter advice.",
    },
    {
      label: "Mortgage Advisors",
      href: MORTGAGE_ADVISORS_PATH,
      status: "live",
      description: "Housing finance providers when an offer leads to buying plans.",
    },
  ] satisfies RecruitmentAgencyLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, status: "live", description: "Legal support for residence and sponsorship questions." },
    { label: "Visa consultants", href: VISA_CONSULTANTS_PATH, status: "live", description: "Visa route orientation and application support providers." },
    { label: "Career coaches", href: CAREER_COACHES_PATH, status: "comingSoon", description: "Coaching support for positioning and interview preparation." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Tax support when offers, 30% ruling or relocation overlap." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Broader financial planning beyond the job search." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Mortgage provider discovery for home buyers." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, status: "live", description: "Move and settling support around a new role." },
    { label: "Relocation agencies", href: RELOCATION_AGENCIES_PATH, status: "live", description: "Agency-style relocation packages for internationals." },
    {
      label: "Moving companies",
      href: "/netherlands/services/moving-companies/",
      status: "live",
      description: "Domestic NL house moves, packing and local transport.",
    },
    {
      label: "Removal companies",
      href: "/netherlands/services/removal-companies/",
      status: "live",
      description: "International household removals for arrivals and leavers.",
    },
  ] satisfies RecruitmentAgencyLink[],
  exploreNextCards: [
    {
      label: "Career: Recruitment agencies how-to",
      href: CAREER_RECRUITMENT_AGENCIES_PATH,
      status: "live",
      description: "Switch to the job-seeker playbook for working with recruiters.",
    },
    {
      label: "Finding Jobs",
      href: FINDING_JOBS_PATH,
      status: "live",
      description: "Build a multi-channel search plan around your agency shortlist.",
    },
    {
      label: "LinkedIn Netherlands",
      href: LINKEDIN_NETHERLANDS_PATH,
      status: "live",
      description: "Align your profile with how recruiters source candidates.",
    },
    {
      label: "Immigration lawyers",
      href: IMMIGRATION_LAWYERS_PATH,
      status: "live",
      description: "Get legal clarity when sponsorship is part of your search.",
    },
    {
      label: "Visa consultants",
      href: VISA_CONSULTANTS_PATH,
      status: "live",
      description: "Compare visa support providers for route-specific help.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "Compare cities before locking geography with agencies.",
    },
  ] satisfies RecruitmentAgencyLink[],
};

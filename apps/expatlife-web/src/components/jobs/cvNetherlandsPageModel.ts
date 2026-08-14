import { FINDING_JOBS_NETHERLANDS_PATH, SALARY_NEGOTIATION_NETHERLANDS_PATH } from "./findingJobsNetherlandsPageModel";
import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";

export const CV_NETHERLANDS_PATH = "/netherlands/jobs/cv-netherlands/" as const;
export const INTERVIEW_TIPS_NETHERLANDS_PATH = "/netherlands/jobs/interview-tips-netherlands/" as const;
export { FINDING_JOBS_NETHERLANDS_PATH, SALARY_NEGOTIATION_NETHERLANDS_PATH };

export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const EMPLOYMENT_CONTRACT_NETHERLANDS_PATH = "/netherlands/jobs/employment-contract-netherlands/" as const;
export const EMPLOYEE_BENEFITS_NETHERLANDS_PATH = "/netherlands/jobs/employee-benefits-netherlands/" as const;
export const DUTCH_WORKPLACE_CULTURE_PATH = "/netherlands/jobs/dutch-workplace-culture/" as const;
export const DUTCH_DIRECTNESS_AT_WORK_PATH = "/netherlands/jobs/dutch-directness-at-work/" as const;
export const FREELANCING_NETHERLANDS_PATH = "/netherlands/jobs/freelancing-netherlands/" as const;
export const CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH = "/netherlands/jobs/contractor-vs-employee-netherlands/" as const;
export const JOBS_HUB_PATH = "/netherlands/moving/working-in-the-netherlands/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const HSM_VISA_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const CAREER_COACHES_PATH = "/netherlands/services/career-coaches/" as const;
export const RELOCATION_SERVICES_PATH = "/netherlands/services/relocation-services/" as const;
export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;
export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;

export const CV_NETHERLANDS_AFFILIATE_PLACEMENT_ID = "nl-jobs-cv-netherlands-support-providers" as const;

export type CvNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type CvCard = { title: string; body: string };
export type SnapshotSignal = { label: string; value: string; note: string };
export type MistakeCard = { title: string; body: string; advice: string };
export type ScenarioRow = { situation: string; approach: string; firstStep: string };
export type HowToStep = { name: string; text: string };
export type StructureRow = { section: string; include: string; tip: string };
export type ScanRow = { whatTheyScan: string; whyItMatters: string; howToShowIt: string };

const INFOGRAPHIC_VERSION = "premium-v1";
const HERO_IMAGE_VERSION = "premium-v1";
const VISUAL_PREFIX = "cv-netherlands";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const cvNetherlandsPage = {
  slug: "cv-netherlands",
  path: CV_NETHERLANDS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(CV_NETHERLANDS_PATH) ?? "2026-10-01",
  affiliatePlacementId: CV_NETHERLANDS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "CV in the Netherlands | Dutch Resume & Application Guide for Expats",
    description:
      "Learn how Dutch CVs and application documents work for expats: length, structure, photo norms, motivation letters, LinkedIn alignment and common mistakes.",
    keywords: [
      "CV Netherlands",
      "Dutch CV",
      "resume Netherlands",
      "CV for Netherlands job",
      "sollicitatiebrief",
      "motivation letter Netherlands",
      "Dutch resume photo",
      "LinkedIn Netherlands CV",
      "expat CV Netherlands",
      "application letter Netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · CV & applications",
    pageTitle: "CV in the Netherlands",
    subtitle:
      "Learn how Dutch CVs and application materials work for expats — including length, structure, photo norms, motivation letters and LinkedIn alignment.",
    primaryCta: { label: "Localise Your Dutch CV", href: "#structure" },
    secondaryCta: { label: "Browse Jobs Guides", href: JOBS_HUB_PATH },
    chips: ["1–2 page CV norms", "Photo context", "Motivation letter", "LinkedIn alignment"],
    image: {
      src: `/images/heroes/cv-netherlands-hero-${HERO_IMAGE_VERSION}.png`,
      alt: "Photorealistic editorial photo of an international professional refining a concise Dutch CV on a laptop at a bright Amsterdam café desk, with canal houses and bicycles visible through the window.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic explaining how Dutch CV and application documents differ from generic international resumes, highlighting concise structure, role fit and honest work-authorization context.",
      "A localised Dutch CV often outperforms a long generic international resume — but it does not guarantee interviews."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six Dutch CV facts for expats: concise length, achievement focus, photo norms, motivation letters, LinkedIn alignment and recruiter scan habits.",
      "Use this overview before rewriting your CV and motivation letter for Dutch vacancies."
    ),
    structure: visual(
      "structure",
      "Infographic showing typical Dutch CV sections: contact details, profile summary, experience, education, skills, languages and optional extras with length guidance.",
      "Dutch recruiters often prefer clear sections and measurable outcomes over long narrative resumes."
    ),
    photo: visual(
      "photo",
      "Infographic explaining Dutch CV photo norms: common in many sectors, not always required, professional headshot guidance and when a photo may be optional.",
      "Photos are culturally common in many Dutch applications — confirm vacancy expectations and keep the image professional."
    ),
    motivation: visual(
      "motivation",
      "Infographic showing how a Dutch motivation letter (sollicitatiebrief) complements a CV with role fit, company interest and concise closing.",
      "A short, specific motivation letter usually works better than a generic cover letter template."
    ),
    linkedin: visual(
      "linkedin",
      "Infographic aligning LinkedIn headline, about section, experience bullets and Dutch city targeting with the CV you submit.",
      "Recruiters often cross-check LinkedIn against your CV — keep titles, dates and cities consistent."
    ),
    recruiterScan: visual(
      "recruiter-scan",
      "Infographic of what Dutch recruiters and hiring managers typically scan first: role fit, recent impact, tools, language and work authorization.",
      "Assume the first pass is fast — put the strongest evidence near the top."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic board of common expat CV mistakes in the Netherlands including oversized resumes, vague duties, mismatched LinkedIn and overclaiming visa certainty.",
      "Fixing these issues improves clarity — it still does not guarantee an interview."
    ),
    checklist: visual(
      "checklist",
      "Infographic checklist for a Dutch application package: CV, motivation letter, LinkedIn, portfolio links and authorization note.",
      "Treat applications as a package — not only a PDF attachment."
    ),
    scenarios: visual(
      "scenarios",
      "Infographic map of expat CV scenarios: career switchers, recent graduates, senior specialists, remote applicants and sponsored roles.",
      "Your CV emphasis changes depending on how you enter the Dutch labour market."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic connecting CV localisation to finding jobs, interview tips, salary negotiation, workplace culture and employment contracts.",
      "CV work sits between channel strategy and live interview preparation."
    ),
    services: visual(
      "services",
      "Infographic showing professional support that may help during applications: career coaches, relocation, immigration and tax planning after offers.",
      "Services can help with specific steps — they do not guarantee offers or permits."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common Dutch CV FAQ topics: length, photos, motivation letters, English CVs, LinkedIn and work authorization wording.",
      "FAQ answers should lead to a concrete edit on your CV or LinkedIn profile."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing trusted orientation sources for Dutch work and applications: Government.nl, UWV, Werk.nl, Business.gov.nl and IND for permit context.",
      "Verify labour market and permit rules on official sites — not recruiter marketing alone."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting CV preparation to finding jobs, interview tips, salary negotiation and Dutch workplace culture guides.",
      "After your documents are ready, move into channels, interviews and offer talks."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#structure", label: "Structure" },
    { href: "#photo", label: "Photo" },
    { href: "#motivation", label: "Motivation letter" },
    { href: "#linkedin", label: "LinkedIn" },
    { href: "#recruiter-scan", label: "Recruiter scan" },
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
    heading: "How Dutch CVs Work for Expats",
    paragraphs: [
      "Dutch employers and recruiters often expect a concise, achievement-focused CV (curriculum vitae / resume) that makes role fit obvious within seconds. Many international professionals arrive with longer, more narrative documents that work elsewhere — and underperform in Dutch screening.",
      "This guide covers CV length and structure, photo norms, motivation letters (sollicitatiebrieven), LinkedIn alignment and what hiring managers typically scan. It does not rank CV writers, guarantee interviews or replace immigration advice.",
      "Use Finding Jobs for channels and sponsorship strategy, Interview Tips for live interview process, and Salary Negotiation once an offer arrives.",
    ],
    keyPoints: [
      { title: "Keep it concise", body: "One to two pages is the usual expectation for most professional roles — clarity beats volume." },
      { title: "Show outcomes", body: "Replace generic duty lists with measurable impact, tools used and scope of responsibility." },
      { title: "Match LinkedIn", body: "Recruiters often open your profile next — titles, dates and cities should match the CV." },
      { title: "Be honest on authorization", body: "State work-authorization context clearly without implying permit certainty." },
    ],
    scenarios: [
      {
        situation: "US-style 3-page resume",
        approach: "Condense to two pages with role-relevant bullets and Dutch city targeting",
        firstStep: "Cut older roles to one line each and move deep detail to LinkedIn",
      },
      {
        situation: "Applying from abroad",
        approach: "Add start-date flexibility and authorization status without overclaiming",
        firstStep: "Add a short profile line on location preference and permit context",
      },
      {
        situation: "Career switch into Dutch tech",
        approach: "Lead with transferable projects, tools and certifications",
        firstStep: "Rewrite the top third of the CV around the target role title",
      },
      {
        situation: "Senior specialist with long history",
        approach: "Keep two pages; summarise early career in a short block",
        firstStep: "Expand the last 8–10 years; compress everything older",
      },
    ] satisfies ScenarioRow[],
  },
  introPlanningSteps: [
    "Pick one target role family and rewrite the top third of your CV around that title.",
    "Align LinkedIn headline, dates and city with the PDF you will submit.",
    "Draft a one-page motivation letter for a real vacancy — not a generic template.",
  ],
  snapshotCards: [
    { label: "Typical length", value: "1–2 pages", note: "Most professional Dutch CVs stay short and scannable." },
    { label: "Photo", value: "Often expected", note: "Common in many sectors; still confirm vacancy norms." },
    { label: "Motivation letter", value: "Usually useful", note: "Short, specific sollicitatiebrief beats a generic cover letter." },
    { label: "Tone", value: "Direct & factual", note: "Clear evidence over marketing fluff." },
    { label: "LinkedIn", value: "Cross-checked", note: "Keep titles, dates and cities consistent with your CV." },
    { label: "Authorization", value: "State honestly", note: "Do not imply visa certainty you do not have." },
  ] satisfies SnapshotSignal[],
  snapshotNextSteps: [
    "Audit your CV against the structure table in this guide.",
    "Decide photo approach for your target sector.",
    "Rewrite one motivation letter for a live Dutch vacancy.",
  ],
  structureHeading: "Dutch CV Length and Structure",
  structureParagraphs: [
    "Dutch CVs are usually one or two pages. Recruiters and hiring managers often scan for recent role fit, measurable outcomes, tools and language skills before reading deep narrative.",
    "A practical structure is: contact details, short profile, experience (reverse chronological), education, skills/tools, languages, and optional extras such as certifications or volunteering when relevant.",
    "Senior candidates can still stay within two pages by compressing early career. Graduate CVs can emphasise projects, internships and coursework when paid experience is limited.",
  ],
  structurePoints: [
    "Lead with the role you want — not only the last title you held.",
    "Use reverse-chronological experience with 3–6 bullets per recent role.",
    "Quantify outcomes where honest (scope, users, revenue, efficiency, team size).",
    "List languages with realistic levels (e.g. English C2, Dutch A2) rather than vague claims.",
    "Include Dutch city or relocation target when applying from abroad.",
  ],
  structureRows: [
    { section: "Contact & location", include: "Name, email, phone, LinkedIn, city or relocation target", tip: "Avoid long address blocks; city + country is enough." },
    { section: "Profile summary", include: "3–4 lines on role fit, strengths and authorization context", tip: "Write for the vacancy — not a biography." },
    { section: "Experience", include: "Employer, title, dates, city, outcome bullets", tip: "Most recent roles get the most detail." },
    { section: "Education", include: "Degree, institution, year; thesis only if relevant", tip: "Keep short unless you are early-career." },
    { section: "Skills & tools", include: "Hard skills, software, methods employers search for", tip: "Mirror vacancy keywords honestly." },
    { section: "Languages", include: "Language + level (CEFR where helpful)", tip: "Do not overstate Dutch fluency." },
    { section: "Optional extras", include: "Certifications, volunteering, publications", tip: "Only if they support the target role." },
  ] satisfies StructureRow[],
  structureChecklist: [
    "CV fits on 1–2 pages at readable font size.",
    "Top third answers: what role, what impact, what city/authorization.",
    "Recent roles have outcome bullets — not only responsibilities.",
    "Dates and titles match LinkedIn.",
    "File named professionally (e.g. Firstname-Lastname-CV.pdf).",
  ],
  photoHeading: "CV Photo Norms in the Netherlands",
  photoParagraphs: [
    "Including a professional photo on a Dutch CV is culturally common in many sectors. It is not a universal legal requirement, and practice can vary by employer, industry and international team.",
    "When you include a photo, keep it professional: clear head-and-shoulders framing, neutral background, business-casual attire and a friendly but natural expression. Avoid holiday shots, filters or busy backgrounds.",
    "Some international employers and tech teams are less photo-oriented. If a vacancy or ATS instruction says not to include a photo, follow that instruction.",
  ],
  photoPoints: [
    "Photos are common on many Dutch CVs — treat them as cultural context, not a guarantee of preference.",
    "Use a recent professional headshot rather than a passport scan with glare.",
    "Keep the image small and secondary to content — the CV must still read well in black-and-white print.",
    "If applying to highly international teams, check vacancy instructions and recruiter guidance.",
    "Never use a photo to compensate for weak role fit or unclear achievements.",
  ],
  photoScenarios: [
    {
      situation: "Corporate Randstad role",
      approach: "Include a professional headshot unless the vacancy says otherwise",
      firstStep: "Commission or crop a clean portrait and place it top-right",
    },
    {
      situation: "Global tech team, English vacancy",
      approach: "Follow vacancy/ATS guidance; photo optional if unclear",
      firstStep: "Ask the recruiter if photos are preferred for that employer",
    },
    {
      situation: "Applying via LinkedIn Easy Apply only",
      approach: "Prioritise LinkedIn profile photo consistency",
      firstStep: "Match LinkedIn photo style with any PDF photo you use",
    },
    {
      situation: "Privacy-conscious candidate",
      approach: "Submit without photo if vacancy allows; strengthen profile text",
      firstStep: "Ensure the first third of the CV is exceptionally clear",
    },
  ] satisfies ScenarioRow[],
  motivationHeading: "Motivation Letter (Sollicitatiebrief)",
  motivationParagraphs: [
    "A Dutch motivation letter — sollicitatiebrief — is a short letter explaining why you want this role at this employer and how your profile fits. It complements the CV; it should not repeat every bullet.",
    "Keep it specific: reference the team, product, city or mission; connect two or three proof points from your CV; close with availability and a clear invitation to talk.",
    "English letters are common for English-language vacancies. Dutch letters can help for Dutch-language roles — only write Dutch if quality is strong.",
  ],
  motivationPoints: [
    "One page is usually enough — often half to three-quarters of a page.",
    "Open with the role title and a concrete reason for applying to this employer.",
    "Pick 2–3 achievements that match the vacancy requirements.",
    "Address work-authorization and start-date context briefly if relevant.",
    "Close with thanks, availability for interview and contact details.",
  ],
  motivationStructure: [
    { title: "Opening", body: "Role title, how you found the vacancy and one clear reason this employer fits your path." },
    { title: "Proof", body: "Two or three outcomes from your CV that map to the job requirements." },
    { title: "Fit", body: "Why this team, city or product — show you researched beyond the company logo." },
    { title: "Close", body: "Availability, authorization note if needed, polite invitation to interview." },
  ] satisfies CvCard[],
  motivationChecklist: [
    "Letter names the exact role and employer.",
    "At least one sentence shows company-specific research.",
    "Proof points match vacancy keywords without copying the job ad.",
    "No full CV rewrite inside the letter.",
    "Tone is direct, warm and factual — not salesy.",
  ],
  linkedinHeading: "Align LinkedIn with Your Dutch CV",
  linkedinParagraphs: [
    "Dutch recruiters frequently open LinkedIn after reading a CV. Mismatched titles, dates or cities create friction. Treat LinkedIn as the living version of your application package.",
    "Optimise your headline for Dutch role titles and cities (for example: Product Manager | SaaS | Amsterdam / open to Eindhoven). Keep experience bullets consistent with the CV, even if LinkedIn can hold more detail.",
    "Recommendations, featured links and a clear About section help — but consistency and searchability matter more than buzzwords.",
  ],
  linkedinTips: [
    "Match employer names, titles and date ranges exactly between CV and LinkedIn.",
    "Use a professional photo consistent with any CV photo.",
    "Put Dutch city or Open to work location preferences in the profile.",
    "Add tools and skills that appear in target vacancies — only if you can discuss them.",
    "Turn on Open to Work visibility appropriately for recruiters when actively searching.",
    "Message recruiters with a specific role fit — not a generic CV blast.",
  ],
  linkedinChecklist: [
    "Headline includes target role family and NL city context.",
    "About section summarises the same story as your CV profile.",
    "Experience dates match the PDF exactly.",
    "Featured section links portfolio, GitHub or publications when relevant.",
    "Language entries match the CV levels.",
  ],
  recruiterScanHeading: "What Dutch Recruiters Typically Scan",
  recruiterScanParagraphs: [
    "First passes are often fast. Screeners look for role-title fit, recent impact, relevant tools, language ability and whether relocation or authorization will block progress.",
    "Design the top third of your CV so those answers appear without hunting. Supporting detail can live lower or on LinkedIn.",
  ],
  recruiterScanRows: [
    { whatTheyScan: "Role fit", whyItMatters: "Screens out mismatched seniority or function", howToShowIt: "Target title + matching recent experience near the top" },
    { whatTheyScan: "Recent impact", whyItMatters: "Shows you can contribute quickly", howToShowIt: "Outcome bullets with scope, tools and results" },
    { whatTheyScan: "Tools & methods", whyItMatters: "Matches vacancy keyword filters", howToShowIt: "Skills section + tools inside experience bullets" },
    { whatTheyScan: "Languages", whyItMatters: "Client and team communication reality", howToShowIt: "Honest CEFR-style levels; do not inflate Dutch" },
    { whatTheyScan: "Location / start", whyItMatters: "Relocation and onboarding planning", howToShowIt: "City target and realistic start-date note" },
    { whatTheyScan: "Authorization", whyItMatters: "Sponsorship capacity and timeline", howToShowIt: "Clear status line — never fake certainty" },
  ] satisfies ScanRow[],
  recruiterScanTips: [
    "Assume someone may only spend 30–60 seconds on the first pass.",
    "Put the strongest evidence above the fold on page one.",
    "Use familiar role titles Dutch employers search for — add original titles in parentheses if needed.",
    "Avoid dense paragraphs; short bullets scan faster.",
  ],
  mistakesHeading: "Common Expat CV Mistakes",
  mistakes: [
    {
      title: "Oversized resume",
      body: "Three-plus pages with every job duty dilute the signal Dutch screeners need.",
      advice: "Cut to 1–2 pages; move older detail to LinkedIn.",
    },
    {
      title: "Duty lists without outcomes",
      body: "Responsible for… bullets do not show impact.",
      advice: "Rewrite with scope, tools and measurable results where honest.",
    },
    {
      title: "Generic motivation letter",
      body: "Copy-paste cover letters are easy to spot and easy to reject.",
      advice: "Name the employer, role and one researched reason you applied.",
    },
    {
      title: "LinkedIn mismatch",
      body: "Different titles or dates create doubt in the follow-up check.",
      advice: "Sync PDF and profile before sending applications.",
    },
    {
      title: "Overclaiming Dutch or visa status",
      body: "Inflated language levels or implied permit certainty damage trust.",
      advice: "State levels and authorization honestly; verify IND rules separately.",
    },
    {
      title: "Ignoring vacancy language",
      body: "Applying in English to a clearly Dutch-required role wastes cycles.",
      advice: "Read language requirements before investing in a tailored letter.",
    },
    {
      title: "Unprofessional photo",
      body: "Casual or low-quality photos can distract from strong content.",
      advice: "Use a clean professional headshot or omit if instructions say so.",
    },
    {
      title: "No city or start context",
      body: "Abroad applicants who omit location and timing look harder to place.",
      advice: "Add relocation target and realistic availability.",
    },
  ] satisfies MistakeCard[],
  checklistHeading: "Application Package Checklist",
  checklistIntro:
    "Treat each application as a package: CV, motivation letter, LinkedIn, and any requested portfolio or certificates. Completing this checklist does not guarantee an interview.",
  howTo: {
    steps: [
      {
        name: "Choose a target role family",
        text: "Pick one role title family and city focus so the CV top third can be rewritten with a clear fit.",
      },
      {
        name: "Rebuild the CV structure",
        text: "Condense to 1–2 pages with profile, reverse-chronological experience, education, skills and languages.",
      },
      {
        name: "Decide photo approach",
        text: "Add a professional headshot when culturally expected for your sector, or follow vacancy instructions to omit one.",
      },
      {
        name: "Write a specific motivation letter",
        text: "Draft a short sollicitatiebrief naming the employer, role and two proof points from your CV.",
      },
      {
        name: "Align LinkedIn",
        text: "Match titles, dates, city and headline to the CV; enable appropriate Open to Work visibility if searching.",
      },
      {
        name: "Final honesty pass",
        text: "Check language levels, authorization wording, file name and that you can discuss every claim in interview.",
      },
    ] satisfies HowToStep[],
  },
  howToSchema: {
    name: "How to prepare a Dutch CV and application package",
    description: "Step-by-step orientation for localising a CV, photo, motivation letter and LinkedIn profile for Dutch job applications.",
    anchor: "#checklist",
  },
  applicationChecklist: [
    "CV is 1–2 pages with measurable outcomes on recent roles.",
    "Photo decision matches sector and vacancy instructions.",
    "Motivation letter is specific to this employer and role.",
    "LinkedIn titles, dates and cities match the CV.",
    "Work-authorization and start-date context are honest.",
    "Portfolio or certificates attached only when requested or clearly relevant.",
    "PDF file name is professional and easy to find.",
    "You can discuss every bullet in a Dutch-style direct interview.",
  ],
  scenariosHeading: "Expat CV Scenarios",
  scenarios: [
    {
      situation: "Mid-level professional relocating with sponsorship needs",
      approach: "Lead with scarce skills and employer-relevant outcomes; state authorization status clearly",
      firstStep: "Add a one-line profile note on sponsorship context and target city",
    },
    {
      situation: "Graduate / early career",
      approach: "Highlight projects, internships, tools and coursework tied to the vacancy",
      firstStep: "Create a projects block with outcomes and tech stack",
    },
    {
      situation: "Senior specialist / leadership",
      approach: "Emphasise scope, team size, stakeholder impact; compress early career",
      firstStep: "Rewrite top bullets around leadership outcomes and domain expertise",
    },
    {
      situation: "Career switcher",
      approach: "Reframe transferable achievements and certifications toward the new role title",
      firstStep: "Change profile and skills section before rewriting every past job",
    },
    {
      situation: "Applying while still abroad",
      approach: "Show relocation timeline, remote interview readiness and city preference",
      firstStep: "Add availability window and timezone for interviews",
    },
    {
      situation: "Freelancer moving toward employment",
      approach: "Translate client projects into employer-readable outcomes and collaboration examples",
      firstStep: "Pick 3 client engagements that map to the job requirements",
    },
  ] satisfies ScenarioRow[],
  relatedGuides: [
    {
      label: "Finding Jobs in the Netherlands",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Where and how expats search: platforms, recruiters, sponsorship and city demand.",
    },
    { label: "Recruitment Agencies Netherlands", href: "/netherlands/jobs/recruitment-agencies-netherlands/", status: "live", description: "Agency channel for Dutch roles after CV localisation." },
    { label: "English Speaking Jobs Netherlands", href: "/netherlands/jobs/english-speaking-jobs-netherlands/", status: "live", description: "English-friendly market lane to target with your CV." },
    { label: "Remote Work Netherlands", href: "/netherlands/jobs/remote-work-netherlands/", status: "live", description: "Remote and hybrid employment norms for Dutch roles." },

    {
      label: "Cover Letter Netherlands",
      href: "/netherlands/jobs/cover-letter-netherlands/",
      status: "live",
      description: "Dutch motivatiebrief norms when applications require a letter beyond the CV.",
    },
    {
      label: "LinkedIn Netherlands",
      href: "/netherlands/jobs/linkedin-netherlands/",
      status: "live",
      description: "Profile, Open to Work, messaging recruiters and Dutch LinkedIn norms for job search.",
    },
    {
      label: "Networking Netherlands",
      href: "/netherlands/jobs/networking-netherlands/",
      status: "live",
      description: "Events, communities, referrals and Dutch directness in professional outreach.",
    },
    {
      label: "Interview Tips Netherlands",
      href: INTERVIEW_TIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Live interview process, Dutch interview culture and preparation after your CV gets you in the door.",
    },
    {
      label: "Salary Negotiation Netherlands",
      href: SALARY_NEGOTIATION_NETHERLANDS_PATH,
      status: "live",
      description: "How to evaluate and negotiate Dutch offers beyond headline gross salary.",
    },
    {
      label: "Expat Salary Netherlands",
      href: EXPAT_SALARY_NETHERLANDS_PATH,
      status: "live",
      description: "Salary expectations for international professionals by city and industry.",
    },
    {
      label: "Employment Contracts",
      href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH,
      status: "live",
      description: "Dutch employment contract orientation once an offer is drafted.",
    },
    {
      label: "Employee Benefits",
      href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH,
      status: "live",
      description: "Pension, holiday allowance, leave and package components to understand after interviews.",
    },
    {
      label: "Dutch Workplace Culture",
      href: DUTCH_WORKPLACE_CULTURE_PATH,
      status: "live",
      description: "How Dutch teams collaborate — useful context for motivation letters and interviews.",
    },
    {
      label: "Dutch Directness at Work",
      href: DUTCH_DIRECTNESS_AT_WORK_PATH,
      status: "live",
      description: "Communication norms that shape interviews and written applications.",
    },
    {
      label: "Freelancing Netherlands",
      href: FREELANCING_NETHERLANDS_PATH,
      status: "live",
      description: "ZZP and freelance routes when employment is not the only path.",
    },
    {
      label: "Contractor vs Employee",
      href: CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH,
      status: "live",
      description: "Compare employment and contractor models before you position your profile.",
    },
  ] satisfies CvNetherlandsLink[],
  relatedGuideReadingOrder: [
    "Localise CV and LinkedIn with this guide first.",
    "Open Finding Jobs to choose channels and sponsorship-aware employers.",
    "Use Interview Tips once screeners reply.",
    "Move to Salary Negotiation and contract/benefits guides after an offer.",
  ],
  relatedGuideScenarios: [
    {
      situation: "Documents ready, no pipeline",
      approach: "Shift time into Finding Jobs channels and networking",
      firstStep: "Open Finding Jobs and shortlist three platforms",
    },
    {
      situation: "First interview invite",
      approach: "Switch focus to Interview Tips and workplace culture",
      firstStep: "Prepare STAR examples that match CV bullets",
    },
    {
      situation: "Offer received",
      approach: "Use Salary Negotiation plus contract and benefits guides",
      firstStep: "Model gross-to-net before countering",
    },
    {
      situation: "Considering ZZP instead",
      approach: "Read Freelancing and Contractor vs Employee",
      firstStep: "Compare permit and income implications before rewriting the CV as a freelancer",
    },
  ] satisfies ScenarioRow[],
  hubCards: [
    {
      label: "Finding Jobs",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Job search channels, recruiters and sponsorship orientation.",
    },
    {
      label: "Cover Letter",
      href: "/netherlands/jobs/cover-letter-netherlands/",
      status: "live",
      description: "Dutch motivatiebrief when vacancies still ask for a letter.",
    },
    {
      label: "LinkedIn Netherlands",
      href: "/netherlands/jobs/linkedin-netherlands/",
      status: "live",
      description: "Profile and Open to Work aligned with your Dutch CV.",
    },
    {
      label: "Interview Tips",
      href: INTERVIEW_TIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Next step after a strong Dutch application package.",
    },
  ] satisfies CvNetherlandsLink[],
  serviceCategories: [
    {
      label: "Career coaches",
      href: CAREER_COACHES_PATH,
      status: "live",
      description: "Application strategy and interview coaching discovery — not a ranking of CV writers.",
    },
    {
      label: "Relocation services",
      href: RELOCATION_SERVICES_PATH,
      status: "live",
      description: "Move logistics when interviews turn into a start date.",
    },
    {
      label: "Immigration lawyers",
      href: IMMIGRATION_LAWYERS_PATH,
      status: "live",
      description: "Permit questions when sponsorship is part of your search.",
    },
    {
      label: "Tax advisors",
      href: TAX_ADVISORS_PATH,
      status: "live",
      description: "Offer modelling, 30% ruling and payroll context after interviews.",
    },
  ],
  servicesWhenToUse: [
    "Career coaches: when positioning, LinkedIn strategy or interview practice needs structured feedback.",
    "Relocation services: when city, housing and family timing follow a successful application.",
    "Immigration lawyers: when permit routes or recognised-sponsor questions remain unclear.",
    "Tax advisors: when offer packages, rulings or cross-border income need modelling.",
  ],
  serviceScenarios: [
    {
      situation: "Strong experience, weak Dutch positioning",
      approach: "Career coach for CV narrative and interview practice",
      firstStep: "Book a scoped review of one target-role CV",
    },
    {
      situation: "Offer with relocation package",
      approach: "Relocation support plus housing search",
      firstStep: "Confirm what HR covers before signing",
    },
    {
      situation: "Sponsorship-dependent applications",
      approach: "Immigration orientation alongside employer HR",
      firstStep: "Verify recognised-sponsor status before relying on a verbal offer",
    },
    {
      situation: "Complex offer + 30% ruling questions",
      approach: "Tax adviser after Salary Negotiation reading",
      firstStep: "Collect gross package details before the call",
    },
  ] satisfies ScenarioRow[],
  servicesNote:
    "Some links may be affiliate or referral links. Professional services may help with specific steps — they do not replace honest applications, official IND guidance or qualified advice. This page does not rank CV writers or guarantee interviews.",
  faq: [
    {
      q: "How long should a Dutch CV be?",
      a: "Most professional Dutch CVs are one to two pages. Senior candidates usually compress early career rather than adding a third page.",
    },
    {
      q: "Do I need a photo on my CV in the Netherlands?",
      a: "Photos are culturally common in many sectors but not universally required. Follow vacancy instructions and keep any photo professional.",
    },
    {
      q: "Should I write a motivation letter?",
      a: "A short, specific sollicitatiebrief is usually useful for Dutch applications. Avoid generic templates that could fit any employer.",
    },
    {
      q: "Can my CV be in English?",
      a: "Yes for English-language vacancies. For Dutch-language roles, a strong Dutch CV and letter can help — only if quality is high.",
    },
    {
      q: "Should LinkedIn match my CV?",
      a: "Yes. Recruiters often cross-check titles, dates and cities. Keep the story consistent even if LinkedIn holds extra detail.",
    },
    {
      q: "How do I mention visa sponsorship?",
      a: "State your authorization status honestly and avoid implying permit certainty. Confirm IND rules and employer sponsor capacity separately.",
    },
    {
      q: "What do Dutch recruiters look for first?",
      a: "Role fit, recent impact, relevant tools, language ability and whether location or authorization will block progress.",
    },
    {
      q: "Is a Europass CV required?",
      a: "Usually not for private-sector professional roles. A clear, tailored CV generally works better than a generic template unless an employer requests a specific format.",
    },
  ],
  faqNextSteps: [
    "Rewrite the top third of your CV for one target role.",
    "Draft one employer-specific motivation letter.",
    "Sync LinkedIn dates and titles with the PDF.",
  ],
  officialSources: [
    {
      label: "Government.nl — Working",
      href: "https://www.government.nl/",
      description: "Central government orientation on living and working in the Netherlands.",
    },
    {
      label: "UWV",
      href: "https://www.uwv.nl/",
      description: "Employee insurance and labour market orientation.",
    },
    {
      label: "Werk.nl",
      href: "https://www.werk.nl/",
      description: "Public employment services and vacancy orientation.",
    },
    {
      label: "Business.gov.nl",
      href: "https://business.gov.nl/",
      description: "Practical government information for working and doing business in the Netherlands.",
    },
    {
      label: "IND",
      href: "https://ind.nl/",
      description: "Immigration and permit rules when sponsorship intersects with your applications.",
    },
    {
      label: "Highly Skilled Migrant guide",
      href: HSM_VISA_PATH,
      description: "ExpatLife orientation on HSM routes when authorization is part of your search.",
    },
  ],
  officialSourcesNote:
    "Labour market practices and permit rules change. Verify current requirements through official resources — this page is orientation only, not career or immigration advice.",
  sourceVerificationTips: [
    "Government.nl / Business.gov.nl — working and living orientation.",
    "UWV / Werk.nl — labour market and public employment context.",
    "IND — permit and sponsorship rules when applying from abroad.",
    "Employer vacancy text — final authority on language, documents and photo expectations.",
  ],
  exploreNextTips: [
    "Open Finding Jobs when your documents are ready and you need channels.",
    "Open Interview Tips when screeners reply.",
    "Open Salary Negotiation when an offer arrives.",
  ],
  exploreNextCards: [
    {
      label: "Finding Jobs Netherlands",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      status: "live",
      description: "Channels, recruiters, sponsorship and city demand.",
    },
    {
      label: "Cover Letter Netherlands",
      href: "/netherlands/jobs/cover-letter-netherlands/",
      status: "live",
      description: "Dutch motivatiebrief when applications require a letter.",
    },
    {
      label: "LinkedIn Netherlands",
      href: "/netherlands/jobs/linkedin-netherlands/",
      status: "live",
      description: "Align LinkedIn with your Dutch CV and target roles.",
    },
    {
      label: "Interview Tips Netherlands",
      href: INTERVIEW_TIPS_NETHERLANDS_PATH,
      status: "live",
      description: "Live interview process after your CV gets a response.",
    },
    {
      label: "Networking Netherlands",
      href: "/netherlands/jobs/networking-netherlands/",
      status: "live",
      description: "Referrals and community outreach while applications run.",
    },
    {
      label: "Salary Negotiation",
      href: SALARY_NEGOTIATION_NETHERLANDS_PATH,
      status: "live",
      description: "Evaluate and negotiate Dutch job offers.",
    },
  ] satisfies CvNetherlandsLink[],
} as const;

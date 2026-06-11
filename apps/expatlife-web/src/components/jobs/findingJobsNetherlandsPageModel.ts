export const FINDING_JOBS_NETHERLANDS_PATH = "/netherlands/jobs/finding-jobs-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const AVERAGE_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/average-salary-netherlands/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const GROSS_VS_NET_SALARY_PATH = "/netherlands/taxes/gross-vs-net-salary/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const COST_OF_LIVING_CALCULATOR_PATH = "/netherlands/money/tools/cost-of-living-calculator/" as const;
export const HSM_VISA_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const EU_BLUE_CARD_PATH = "/netherlands/visa/eu-blue-card/" as const;
export const VISAS_HUB_PATH = "/netherlands/moving/visas-residency/" as const;
export const JOBS_HUB_PATH = "/netherlands/moving/working-in-the-netherlands/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const BEST_CITIES_FOR_EXPATS_PATH = "/netherlands/cities/best-cities-for-expats/" as const;
export const DOUBLE_TAXATION_PATH = "/netherlands/taxes/double-taxation-netherlands/" as const;
export const FOREIGN_INCOME_PATH = "/netherlands/taxes/foreign-income-netherlands/" as const;
export const SALARY_NEGOTIATION_NETHERLANDS_PATH = "/netherlands/jobs/salary-negotiation-netherlands/" as const;

export const FINDING_JOBS_AFFILIATE_PLACEMENT_ID = "nl-jobs-finding-jobs-support-providers" as const;

export type FindingJobsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type JobPlatform = {
  name: string;
  summary: string;
  focus: string[];
  industries: string[];
  expatFriendly: boolean;
  englishRoles: boolean;
  website: string;
};

export type RecruitmentAgency = {
  name: string;
  summary: string;
  focus: string[];
  industries: string[];
  expatFriendly: boolean;
  englishRoles: boolean;
  website: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-finding-jobs-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const findingJobsNetherlandsPage = {
  slug: "finding-jobs-netherlands",
  path: FINDING_JOBS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-08-16",
  seo: {
    title: "Finding Jobs in the Netherlands | Expat Job Guide",
    description:
      "Learn how to find jobs in the Netherlands as an expat, including visa sponsorship, salaries, recruiters, English-speaking roles and job market insights.",
    keywords: [
      "finding jobs netherlands",
      "jobs in the netherlands for expats",
      "expat jobs netherlands",
      "working in the netherlands",
      "netherlands jobs english speakers",
      "highly skilled migrant jobs",
      "visa sponsorship netherlands",
      "english speaking jobs netherlands",
      "dutch job market",
      "recruitment agencies netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Finding work",
    pageTitle: "Finding Jobs in the Netherlands",
    subtitle:
      "Learn how expats and international professionals find jobs in the Netherlands, including visa sponsorship, salaries, recruiters, Dutch hiring culture and high-demand industries.",
    primaryCta: { label: "Explore the Dutch Job Market", href: "#intro" },
    secondaryCta: { label: "Browse Expat Career Guides", href: JOBS_HUB_PATH },
    chips: ["English-speaking roles", "Visa sponsorship context", "Recruiters & platforms", "City job markets"],
    image: {
      src: "/images/heroes/netherlands-finding-jobs-netherlands-hero-v2.png",
      alt: "Photorealistic editorial photo of an international professional reviewing job listings on a laptop at a bright Amsterdam coworking desk, with Dutch canal houses, bicycles and modern office towers visible through the window at golden morning light.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic explaining whether expats can find jobs in the Netherlands, highlighting international companies, English proficiency and factors like industry, visa status and networking.",
      "Many expats work in the Netherlands — outcomes still depend on role fit, location and realistic planning."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six Dutch job market facts for expats: international business, English roles, tech demand, sponsorship possibility, salary variation and city competition.",
      "Use this overview before diving into industries, cities and application strategy."
    ),
    jobMarket: visual(
      "job-market",
      "Infographic explaining how the Dutch job market values specialization, international experience, direct communication and work-life balance compared with other countries.",
      "Dutch hiring culture may feel different from the US, UK or Southern Europe — adjust expectations accordingly."
    ),
    industries: visual(
      "industries",
      "Infographic showing ten industries hiring international professionals in the Netherlands including technology, engineering, finance, logistics, energy, life sciences and semiconductors.",
      "Demand shifts over time and by city — treat industry cards as orientation, not guarantees."
    ),
    englishJobs: visual(
      "english-jobs",
      "Infographic showing where English-speaking jobs are most common in the Netherlands: tech, startups, international corporations and research environments.",
      "English can open doors — Dutch skills may still improve long-term opportunities."
    ),
    visaSponsorship: visual(
      "visa-sponsorship",
      "Infographic explaining visa sponsorship concepts for expats including highly skilled migrant routes, intra-company transfers and EU Blue Card pathways without guaranteeing approval.",
      "Sponsorship depends on employer, role and permit rules — verify current IND requirements."
    ),
    cities: visual(
      "cities",
      "Infographic comparing ten Dutch cities for expat job seekers: Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, Haarlem, Leiden, Delft, Groningen and Maastricht.",
      "City choice affects competition, salary potential and housing pressure — compare more than Amsterdam alone."
    ),
    cvCulture: visual(
      "cv-culture",
      "Infographic showing Dutch CV and application expectations: concise CVs, practical achievements, LinkedIn visibility, motivation letters and direct interview communication.",
      "A localized application often performs better than a generic international CV."
    ),
    salaries: visual(
      "salaries",
      "Infographic connecting job search to salary expectations, gross vs net pay, city living costs and expat compensation guides.",
      "Salary comfort depends on industry, city and household — model net pay and housing together."
    ),
    platformsDirectory: visual(
      "platforms-directory",
      "Infographic directory of job platforms and recruitment agencies used by expats in the Netherlands including LinkedIn, Undutchables, Michael Page and Randstad.",
      "Use real platforms and agencies to search — no directory entry guarantees placement or sponsorship."
    ),
    networking: visual(
      "networking",
      "Infographic showing networking channels in the Netherlands: LinkedIn, expat communities, meetups, conferences, university networks and startup events.",
      "Many roles surface through referrals and professional networks, not only public listings."
    ),
    remoteWork: visual(
      "remote-work",
      "Infographic explaining remote and hybrid work considerations for expats including payroll complexity, visa implications and cross-border tax context.",
      "Remote arrangements can trigger tax and permit questions — confirm setup before accepting an offer."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic board of eight common expat job search mistakes in the Netherlands including ignoring networking, unrealistic salary expectations and visa assumptions.",
      "Avoiding these pitfalls saves time — but no strategy guarantees a job offer."
    ),
    experienceLevels: visual(
      "experience-levels",
      "Infographic showing job search approaches by career stage: graduates, mid-level professionals, senior specialists, executives, freelancers and researchers.",
      "The right channels and visa routes differ by seniority and contract type."
    ),
    questions: visual(
      "questions",
      "Infographic summarising eight questions expats ask about working in the Netherlands: English sufficiency, sponsorship, salaries, recruiters and LinkedIn.",
      "Use these prompts to structure your research before applying widely."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic connecting job search research to expat salary, HSM visa, average salary, cost of living and Dutch cities guides.",
      "Job hunting connects naturally into salary, visa and relocation planning."
    ),
    services: visual(
      "services",
      "Infographic showing professional services that may support a Dutch job search: recruitment agencies, career coaches, immigration lawyers, CV writers and relocation support.",
      "Services can help with specific steps — they do not guarantee offers or permits."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common expat job search FAQ topics: English roles, sponsorship, industries, cities, salaries, recruiters and LinkedIn.",
      "FAQ answers should lead to the next fact, document or verification step."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official Dutch job market and immigration sources: IND, Government.nl, UWV, Werk.nl, Business.gov.nl and NederlandWereldwijd.",
      "Verify sponsorship rules, labour market data and permit requirements on official sites."
    ),
    exploreNext: {
      ...visual(
        "explore-next",
        "Infographic connecting job search research to expat salary guide, HSM visa, Dutch cities, cost of living and moving to the Netherlands.",
        "Continue from job market orientation into salary, visa and relocation decisions."
      ),
      src: "/images/infographics/netherlands-finding-jobs-explore-next-premium-v3.png",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#job-market", label: "Job market" },
    { href: "#industries", label: "Industries" },
    { href: "#english-jobs", label: "English jobs" },
    { href: "#visa-sponsorship", label: "Visa sponsorship" },
    { href: "#cities", label: "Cities" },
    { href: "#cv-culture", label: "CV culture" },
    { href: "#salaries", label: "Salaries" },
    { href: "#platforms-directory", label: "Platforms" },
    { href: "#networking", label: "Networking" },
    { href: "#remote-work", label: "Remote work" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#experience-levels", label: "Experience" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#explore-next", label: "Explore next" },
  ],
  intro: {
    heading: "Can Expats Find Jobs in the Netherlands?",
    paragraphs: [
      "Yes — many expats successfully work in the Netherlands. The country attracts international professionals because of strong English proficiency in business, a dense network of international companies, sustained demand in technology and engineering, and a globally connected economy.",
      "However, finding work still depends on your industry, experience level, visa situation, salary expectations, networking effort and chosen city. A realistic search strategy usually works better than applying broadly without localization.",
      "This guide is practical orientation — not immigration advice, not a job guarantee and not a promise of visa sponsorship.",
    ],
    attractors: [
      { title: "English in business", body: "Many international employers operate primarily in English, especially in tech, finance and corporate headquarters." },
      { title: "International employers", body: "Multinationals, scale-ups and research organisations routinely hire across borders." },
      { title: "Skills demand", body: "Technology, engineering, data, logistics and life sciences often recruit internationally for scarce skills." },
      { title: "Global hub cities", body: "Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven concentrate knowledge-work hiring." },
    ],
    dependsOn: [
      { title: "Industry fit", body: "Some sectors hire internationals routinely; others expect Dutch fluency or local credentials." },
      { title: "Experience & specialization", body: "Mid-level and senior specialists with niche skills often face less competition than generic applications." },
      { title: "Visa route", body: "Work permit eligibility depends on employer sponsorship, salary thresholds and permit type — not applicant preference alone." },
      { title: "Location strategy", body: "Focusing only on Amsterdam can miss strong opportunities in Brainport, Rotterdam logistics or The Hague international organisations." },
    ],
  },
  snapshotNextSteps: [
    "Pick two target industries and run a one-week vacancy scan before committing to a city.",
    "Shortlist three cities using sector fit and rent — not headline salary alone.",
    "Confirm visa route feasibility with realistic employers in your field.",
  ],
  snapshotCards: [
    { label: "International business", value: "Strong presence", note: "Multinationals and EU-facing headquarters create English-friendly hiring pools." },
    { label: "English roles", value: "Available", note: "Most common in tech, startups and international corporations — not universal." },
    { label: "Tech & engineering", value: "High demand", note: "Software, semiconductors and industrial engineering recruit internationally in several hubs." },
    { label: "Visa sponsorship", value: "Possible", note: "Some employers sponsor HSM or EU Blue Card routes — never assume it is automatic." },
    { label: "Salaries", value: "Sector-dependent", note: "Offers vary widely by role, city and seniority — compare gross vs net and housing costs." },
    { label: "Competition", value: "City-dependent", note: "Randstad markets are competitive; regional cities may offer different trade-offs." },
  ],
  jobSearchChecklist: [
    "Shortlist two or three target industries and verify live vacancies before relocating.",
    "Compare at least two Dutch cities for rent, commute and sector fit — not only Amsterdam.",
    "Confirm your work-authorization route and employer sponsor capacity early.",
    "Localize your CV and LinkedIn headline for Dutch role titles and cities.",
    "Run platform search, recruiter outreach and networking in parallel.",
    "Model gross offers against net pay and housing costs before accepting.",
  ],
  jobMarketHeading: "Understanding the Dutch Job Market",
  jobMarketParagraphs: [
    "The Dutch labour market often values specialization, international experience, practical skills, direct communication and a healthy work-life balance. Employers may expect concise applications, realistic salary bands and evidence that you can contribute quickly.",
    "Hiring culture can feel different from the US, UK, South Africa, Asia or Southern Europe. Interviews may be structured and direct; negotiation exists in skilled markets but is not always as aggressive as in some Anglo-American contexts.",
    "Demand shifts with economic cycles and sector trends. Use labour market data and industry research — not outdated anecdotes — when planning your search.",
  ],
  jobMarketCards: [
    { title: "Specialization", body: "Clear role fit and demonstrable skills often matter more than a long list of generic responsibilities." },
    { title: "International experience", body: "Cross-border projects, multilingual teamwork and global client exposure can differentiate expat candidates." },
    { title: "Practical skills", body: "Employers frequently look for evidence you can deliver — portfolios, certifications, case studies or measurable outcomes." },
    { title: "Direct communication", body: "Dutch professional culture tends to favour clarity, modesty and straightforward questions over vague positioning." },
    { title: "Work-life balance", body: "Contracts, leave and working hours are part of the value proposition — not only headline salary." },
  ],
  jobMarketPoints: [
    "Applications from abroad may need extra context on work authorization and start date — address visa topics honestly without overstating certainty.",
    "Recruitment timelines can be slower than in some markets; follow up professionally and keep parallel channels open.",
    "Part-time and hybrid arrangements are common in knowledge work — confirm contract type before comparing offers.",
    "CAO collective agreements in some sectors shape pay bands and benefits — research whether your target industry uses them.",
  ],
  industryCards: [
    { title: "Technology & Software", body: "Strong expat hiring in Amsterdam, Utrecht and Eindhoven. English-language product and engineering teams are common." },
    { title: "Engineering", body: "Manufacturing, infrastructure and industrial employers recruit internationally — especially around Brainport and Randstad corridors." },
    { title: "Data & AI", body: "High demand for analysts, scientists and ML engineers. Competition is real — specialization helps." },
    { title: "Finance", body: "Banks, fintech and corporate finance hire internationally; compliance and language needs vary by team." },
    { title: "Logistics & Supply Chain", body: "Rotterdam port ecosystem and Schiphol corridor drive operations, planning and trade roles." },
    { title: "Energy & Sustainability", body: "Transition projects across power, grids and cleantech create engineering and project roles." },
    { title: "Life Sciences", body: "Leiden and university-corridor biotech hiring; research and regulatory skills are valued." },
    { title: "Semiconductor Industry", body: "Brainport concentration around Eindhoven — strong demand for hardware, process and supply-chain expertise." },
    { title: "Creative & Design", body: "Agencies and in-house teams in Randstad cities; portfolios and network visibility matter." },
    { title: "Hospitality & Tourism", body: "International-facing roles exist but Dutch language expectations are often higher than in corporate tech." },
  ],
  industryNote: "Demand changes over time and by city. Treat these cards as orientation — verify hiring activity in your target sector before relocating.",
  industrySearchTips: [
    "Search live vacancies on LinkedIn and Indeed using Dutch city names plus English role titles.",
    "Cross-check Brainport (Eindhoven), Rotterdam port/logistics and The Hague international org hiring separately.",
    "Read language requirements in the vacancy — not only the job title or company brand.",
    "Follow sector-specific recruiters (e.g. Yacht for engineering, Undutchables for expat placement) alongside direct applications.",
  ],
  englishJobsHeading: "Can You Work in English?",
  englishJobsPoints: [
    "Many international companies operate primarily in English for internal communication, especially in technology, finance and corporate headquarters.",
    "English-only opportunities are most common in tech, startups, international corporations and research environments.",
    "Client-facing or public-sector roles may still require Dutch — especially outside core Randstad international employers.",
    "Learning Dutch can improve long-term mobility, internal promotion and roles outside the international bubble.",
    "Do not assume every listed job is English-friendly — read vacancy language requirements carefully.",
  ],
  englishJobsScenarios: [
    { title: "Tech & product teams", body: "Software, data and product roles in Amsterdam, Utrecht and Eindhoven often run in English day to day — still check team language in the vacancy." },
    { title: "International headquarters", body: "Multinationals and EU-facing offices frequently use English internally, even when Dutch is preferred for local client work." },
    { title: "Research & academia", body: "Universities, institutes and biotech corridors publish and collaborate in English — funding cycles and contracts still follow Dutch rules." },
    { title: "Startups & scale-ups", body: "Founding teams are often international; English job posts are common — growth-stage hiring may later expect Dutch for operations roles." },
    { title: "Client-facing & public roles", body: "Healthcare, government, retail and many SMEs often expect Dutch for customer contact — English alone may not be enough." },
    { title: "Hybrid language teams", body: "Some employers hire in English but expect Dutch within 12–24 months — clarify expectations before accepting an offer." },
  ],
  englishJobsComparison: [
    { sector: "Software & data", englishLikelihood: "Often sufficient", dutchUse: "Useful for career mobility", note: "Verify team language in interviews, not only the job title." },
    { sector: "Finance & consulting", englishLikelihood: "Common in HQ teams", dutchUse: "Often needed for client work", note: "Compliance and local reporting may require Dutch fluency." },
    { sector: "Engineering & manufacturing", englishLikelihood: "Varies by site", dutchUse: "Helpful on factory floors", note: "Brainport and international R&D sites differ from local SMEs." },
    { sector: "Public sector & healthcare", englishLikelihood: "Limited for frontline roles", dutchUse: "Usually required", note: "International policy roles exist but are competitive." },
    { sector: "Hospitality & retail", englishLikelihood: "Some tourist-facing roles", dutchUse: "Typically expected", note: "Seasonal English roles exist — long-term paths often need Dutch." },
  ],
  visaSponsorship: {
    heading: "Visa Sponsorship and Highly Skilled Migrants",
    paragraphs: [
      "Some employers sponsor international talent through highly skilled migrant (kennismigrant) routes, intra-company transfers or EU Blue Card pathways. Sponsorship depends on the employer, role, salary and current IND rules — not on the candidate alone.",
      "A job offer does not automatically mean a permit will be approved. Employers must be recognised sponsors where required, and salary thresholds change over time.",
      "This section explains concepts only. For personal permit advice, consult official IND guidance and qualified immigration professionals.",
    ],
    routes: [
      { title: "Highly Skilled Migrant", body: "Common employer-sponsored route for qualified professionals meeting IND salary and sponsor requirements." },
      { title: "Intra-company transfer", body: "Multinational transfers may use separate permit categories — confirm with employer HR and IND rules." },
      { title: "EU Blue Card", body: "EU-wide skilled work route with qualifying salary and contract criteria — compare with HSM for your profile." },
    ],
    disclaimer: "No employer, recruiter or guide can guarantee visa sponsorship or permit approval.",
    verificationChecklist: [
      "Confirm the employer is a recognised sponsor (where required) before relying on a verbal offer.",
      "Check current IND salary thresholds for your permit route — market rate and legal minimum can differ.",
      "Ask HR which permit type they intend to use and whether probation affects sponsorship timing.",
      "Verify contract type, start date and whether remote work outside the Netherlands is allowed.",
      "Keep copies of vacancy language, offer letter drafts and sponsor correspondence for your own records.",
      "Use official IND guidance for final rules — not recruiter marketing or social media summaries.",
    ],
    links: [
      { label: "Highly Skilled Migrant Visa", href: HSM_VISA_PATH, description: "Salary thresholds, sponsor requirements and process overview." },
      { label: "EU Blue Card", href: EU_BLUE_CARD_PATH, description: "Qualifying salary, contract criteria and comparison context with HSM." },
      { label: "Visas & residency hub", href: VISAS_HUB_PATH, description: "Broader visa routes and relocation permit orientation." },
    ] satisfies FindingJobsLink[],
  },
  cityCards: [
    {
      city: "Amsterdam",
      href: "/netherlands/cities/amsterdam/",
      industries: ["Tech", "Finance", "International business"],
      internationalPresence: "Very high — startups, multinationals and EU-facing headquarters.",
      salaryPositioning: "Often among the highest knowledge-worker salaries; housing costs absorb much of the premium.",
      vibe: "Fast-paced, international, competitive rental market.",
    },
    {
      city: "Rotterdam",
      href: "/netherlands/cities/rotterdam/",
      industries: ["Logistics", "Port", "Engineering"],
      internationalPresence: "High in trade, maritime and growing tech sectors.",
      salaryPositioning: "Strong professional salaries with somewhat different rent dynamics than Amsterdam.",
      vibe: "Modern, port-city energy with expanding international community.",
    },
    {
      city: "The Hague",
      href: "/netherlands/cities/the-hague/",
      industries: ["Government", "NGOs", "International organisations"],
      internationalPresence: "Very high — diplomacy, legal and NGO ecosystems.",
      salaryPositioning: "Stable professional hiring; international org pay scales vary by employer type.",
      vibe: "International, institutional, coastal Randstad lifestyle.",
    },
    {
      city: "Utrecht",
      href: "/netherlands/cities/utrecht/",
      industries: ["Tech", "Services", "Central business hub"],
      internationalPresence: "High and growing — commuter hub with scale-up activity.",
      salaryPositioning: "Competitive salaries with high housing demand.",
      vibe: "Compact, young-professional, central rail access nationwide.",
    },
    {
      city: "Eindhoven",
      href: "/netherlands/cities/eindhoven/",
      industries: ["Semiconductors", "Engineering", "Brainport tech"],
      internationalPresence: "Very high among tech and hardware employers.",
      salaryPositioning: "Strong engineering packages; often better salary-to-rent balance than core Randstad.",
      vibe: "Design and tech oriented; Brainport ecosystem.",
    },
    {
      city: "Haarlem",
      href: "/netherlands/cities/haarlem/",
      industries: ["Randstad services", "Amsterdam commute"],
      internationalPresence: "Moderate — many residents work for Amsterdam employers.",
      salaryPositioning: "Often follows Amsterdam employers with local rent trade-offs.",
      vibe: "Historic city, commuter-friendly to Amsterdam.",
    },
    {
      city: "Leiden",
      href: "/netherlands/cities/leiden/",
      industries: ["Biotech", "Research", "University"],
      internationalPresence: "High in life sciences and academic research.",
      salaryPositioning: "Corporate biotech can differ from academic pay scales.",
      vibe: "University city with strong research corridor.",
    },
    {
      city: "Delft",
      href: "/netherlands/cities/delft/",
      industries: ["Engineering", "Research", "University"],
      internationalPresence: "High among engineering graduates and research employers.",
      salaryPositioning: "Commute-to-Rotterdam or The Hague is common for broader options.",
      vibe: "Technical university town with canal-city character.",
    },
    {
      city: "Groningen",
      href: "/netherlands/cities/groningen/",
      industries: ["Energy", "Research", "Regional services"],
      internationalPresence: "Moderate — university and energy sector hiring.",
      salaryPositioning: "Lower gross bands possible; housing often more affordable than Randstad.",
      vibe: "Student city energy with northern Netherlands lifestyle.",
    },
    {
      city: "Maastricht",
      href: "/netherlands/cities/maastricht/",
      industries: ["EU institutions", "Cross-border services", "Education"],
      internationalPresence: "High European and cross-border professional community.",
      salaryPositioning: "Moderate professional market with cross-border commuting options.",
      vibe: "Southern, European feel close to Belgium and Germany.",
    },
  ],
  cvCultureHeading: "Dutch CV and Application Expectations",
  cvCulturePoints: [
    "Keep CVs concise and achievement-focused — Dutch recruiters often prefer clarity over long narrative resumes.",
    "Highlight practical outcomes, tools used and scope of responsibility rather than generic duty lists.",
    "Use direct language in cover letters and emails — explain why your profile fits this role and location.",
    "Include work authorization context honestly if applying from abroad; do not imply permit certainty.",
    "Quote realistic salary expectations when asked — research market bands by city and seniority first.",
  ],
  linkedInTips: [
    "Optimize your headline for target roles and cities in the Netherlands — not only your home-country job title.",
    "Request recommendations from managers and cross-border colleagues who can speak to deliverables.",
    "Follow Dutch employers, recruiters and industry groups to surface vacancies and networking events.",
    "Engage thoughtfully with posts from hiring managers — visibility can complement formal applications.",
    "Keep Dutch and English profile versions aligned if you market bilingual skills.",
  ],
  interviewCulture: {
    heading: "Interview culture",
    points: [
      "Panels may include HR, hiring manager and future teammates — prepare examples for each perspective.",
      "Expect direct questions about collaboration, feedback style and realistic start dates.",
      "Salary discussions may happen later than in some markets — still research bands before interviews.",
      "Ask about contract type, probation, hybrid policy and growth path — Dutch candidates commonly clarify these topics.",
      "Follow up with a brief thank-you message; persistence is fine but respect stated timelines.",
    ],
  },
  applicationChecklist: [
    "Keep your CV to two pages with measurable outcomes and tools used.",
    "Tailor your motivation to the specific team, city and language requirements.",
    "State work-authorization status honestly — do not imply permit certainty.",
    "Prepare three STAR examples that show collaboration in flat, direct teams.",
    "Research gross salary bands for the role and city before the first interview.",
    "Send a concise follow-up if you have not heard back within the stated timeline.",
  ],
  salaries: {
    heading: "Understanding Salaries in the Netherlands",
    paragraphs: [
      "Salary expectations vary significantly by industry, city, experience level and whether an employer sponsors a work permit. Dutch offers are usually quoted gross (bruto) — take-home pay depends on payroll tax, pension and personal circumstances.",
      "A strong gross figure in Amsterdam may feel different once rent, commute and household costs are included. Compare offers using net-salary tools and city living-cost context.",
    ],
    factors: [
      { title: "Industry", body: "Tech, finance and engineering often sit above broader medians; hospitality and some public roles may differ." },
      { title: "City", body: "Randstad salaries can look higher until housing and transport are modelled." },
      { title: "Experience", body: "Specialists and scarce skills command premiums; generic applications face more competition." },
      { title: "Sponsorship", body: "Permit routes may have legal salary floors — verify current IND thresholds separately from market rates." },
    ],
    links: [
      { label: "Expat Salary Netherlands", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary expectations for international professionals by city and industry." },
      { label: "Average Salary Netherlands", href: AVERAGE_SALARY_NETHERLANDS_PATH, status: "live", description: "Broader labour market benchmarks and wage context." },
      { label: "Net Salary Netherlands", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Understand take-home pay from gross offers." },
      { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Why Dutch salaries are quoted gross and what affects net pay." },
      { label: "Cost of living calculator", href: COST_OF_LIVING_CALCULATOR_PATH, status: "live", description: "Estimate monthly expenses by city and household." },
    ] satisfies FindingJobsLink[],
  },
  jobPlatforms: [
    {
      name: "LinkedIn",
      summary: "Primary professional network for Dutch and international vacancies, recruiter outreach and employer research.",
      focus: ["Professional network", "Direct employer posts", "Recruiter inbox"],
      industries: ["Cross-sector", "Tech", "Finance", "Consulting"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.linkedin.com/",
    },
    {
      name: "Indeed",
      summary: "Large aggregator of Dutch vacancies across sectors and experience levels.",
      focus: ["Broad vacancy search", "Company pages", "Salary snapshots"],
      industries: ["Cross-sector"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.indeed.nl/",
    },
    {
      name: "Glassdoor",
      summary: "Job listings combined with employer reviews and reported salary bands — useful for research, not guarantees.",
      focus: ["Employer research", "Interview reviews", "Salary reports"],
      industries: ["Cross-sector"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.glassdoor.nl/",
    },
    {
      name: "Undutchables",
      summary: "Recruitment and job board focused on international professionals relocating to the Netherlands.",
      focus: ["Expat placement", "English vacancies", "Recruitment support"],
      industries: ["Office support", "Customer service", "Tech", "Finance"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://undutchables.nl/",
    },
    {
      name: "Together Abroad",
      summary: "Vacancy board and resources aimed at international job seekers in the Netherlands.",
      focus: ["Expat vacancies", "Career articles", "Event listings"],
      industries: ["Cross-sector", "International employers"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.togetherabroad.com/",
    },
    {
      name: "IamExpat Jobs",
      summary: "Job board from the IamExpat media platform for English-speaking professionals.",
      focus: ["English vacancies", "Expat community", "Relocation context"],
      industries: ["Cross-sector", "International employers"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.iamexpat.nl/career",
    },
    {
      name: "Welcome to the Jungle",
      summary: "Employer-branding platform with tech and creative vacancies, often with culture-focused company profiles.",
      focus: ["Employer culture", "Tech", "Startups", "Creative roles"],
      industries: ["Tech", "Creative", "Scale-ups"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.welcometothejungle.com/en",
    },
    {
      name: "Magnet.me",
      summary: "Network-based hiring platform where candidates and employers connect through profiles and matches.",
      focus: ["Profile matching", "Graduate roles", "Tech and business"],
      industries: ["Tech", "Consulting", "Corporate"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://magnet.me/",
    },
  ] satisfies JobPlatform[],
  recruitmentAgencies: [
    {
      name: "Undutchables",
      summary: "Established expat-focused recruiter and job board for international professionals entering the Dutch labour market.",
      focus: ["Expat placement", "English support", "Cross-sector hiring"],
      industries: ["Office", "Customer service", "Tech", "Finance"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://undutchables.nl/",
    },
    {
      name: "Adams Multilingual Recruitment",
      summary: "Multilingual recruitment specialist for international and Dutch-facing professional roles.",
      focus: ["Multilingual talent", "Professional placement", "Randstad coverage"],
      industries: ["Customer service", "Sales", "Office", "Shared services"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.adams.nl/",
    },
    {
      name: "Blue Lynx",
      summary: "International recruitment firm supporting employers and professionals across several Dutch regions.",
      focus: ["International hiring", "Contract and permanent roles", "Multilingual teams"],
      industries: ["Corporate services", "Tech", "Engineering"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.blue-lynx.com/",
    },
    {
      name: "Michael Page",
      summary: "Global recruitment brand with Dutch offices covering finance, tech, engineering and business support roles.",
      focus: ["Professional search", "Finance", "Tech", "Engineering"],
      industries: ["Finance", "Tech", "Engineering", "Procurement"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.michaelpage.nl/",
    },
    {
      name: "Robert Walters",
      summary: "Specialist professional recruitment across finance, technology, legal and commerce disciplines.",
      focus: ["Specialist roles", "Mid-senior hiring", "International candidates"],
      industries: ["Finance", "Tech", "Legal", "Commerce"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.robertwalters.nl/",
    },
    {
      name: "Hays",
      summary: "Large recruitment firm with Dutch offices spanning IT, engineering, finance and construction.",
      focus: ["Contract and permanent", "IT", "Engineering", "Finance"],
      industries: ["IT", "Engineering", "Construction", "Finance"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.hays.nl/",
    },
    {
      name: "Randstad",
      summary: "Major staffing and recruitment group with broad sector coverage across the Netherlands.",
      focus: ["Staffing", "Permanent placement", "Large employer network"],
      industries: ["Cross-sector", "Industrial", "Office", "Healthcare"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.randstad.nl/",
    },
    {
      name: "Yacht",
      summary: "Technical and engineering recruitment specialist with strong Brainport and industrial client base.",
      focus: ["Engineering", "Technical specialists", "Project professionals"],
      industries: ["Engineering", "High-tech", "Manufacturing"],
      expatFriendly: true,
      englishRoles: true,
      website: "https://www.yacht.nl/",
    },
  ] satisfies RecruitmentAgency[],
  platformsDirectoryNote:
    "Platforms and agencies help discovery — they do not guarantee interviews, offers or visa sponsorship. Verify vacancy details and permit requirements directly with employers.",
  platformSearchTips: [
    "Save searches on LinkedIn and Indeed with Dutch city filters plus English keywords.",
    "Set alerts on Undutchables, IamExpat Jobs and Together Abroad for expat-facing roles.",
    "Check company career pages directly — some roles never reach aggregators.",
    "Track applications in a spreadsheet with sponsor status, language requirements and follow-up dates.",
  ],
  networkingHeading: "Networking and the Hidden Job Market",
  networkingPoints: [
    "Networking matters in the Netherlands — referrals and introductions often surface roles before public posting.",
    "LinkedIn is widely used for professional visibility, recruiter contact and industry conversations.",
    "Expat communities, meetups and city networking groups help newcomers learn hiring norms and employer names.",
    "Industry conferences, university alumni networks and startup events can connect you to hiring managers.",
    "Informational conversations are common — prepare concise questions about teams, hiring timelines and skill fit.",
  ],
  networkingChannels: [
    { title: "LinkedIn visibility", body: "Follow target employers, comment thoughtfully on hiring posts and message recruiters with a specific role fit — not a generic CV blast." },
    { title: "Expat communities", body: "City groups and professional networks share hiring norms, employer names and referral culture — useful before your first interviews." },
    { title: "Meetups & events", body: "Tech, startup and industry meetups in Amsterdam, Rotterdam, The Hague and Eindhoven often lead to informal introductions." },
    { title: "Alumni & university ties", body: "Dutch and international alumni networks can open research, engineering and corporate paths — especially for graduates." },
    { title: "Recruiter relationships", body: "Build relationships with two or three relevant agencies — share target roles and visa context honestly." },
    { title: "Informational chats", body: "Short conversations with people in your target function help you learn team language, hiring timelines and realistic salary bands." },
  ],
  networkingWeeklyActions: [
    "Message three relevant contacts or recruiters with a specific role and city target.",
    "Attend one online or in-person industry event in your target sector.",
    "Comment on or share two posts from employers or hiring managers you want to reach.",
    "Update LinkedIn headline and recent achievement to match Dutch role titles.",
    "Track introductions in a simple spreadsheet — follow up once, professionally, after two weeks.",
  ],
  remoteWork: {
    heading: "Remote Work and International Employers",
    paragraphs: [
      "Many expats target hybrid roles, remote-friendly companies or international employers with Dutch entities. Contract structure determines tax, social security and permit implications.",
      "Working remotely for a foreign employer while living in the Netherlands can create payroll, residency and compliance complexity. Remote work is not a workaround for work-authorization rules.",
    ],
    points: [
      "Confirm whether the role is tied to a Dutch entity — entity and contract type affect permits and payroll.",
      "Hybrid policies vary by team; clarify office expectations before accepting an offer.",
      "Cross-border remote income may trigger tax reporting obligations in multiple countries.",
      "Do not assume remote work exempts you from Dutch work-permit requirements if you are resident in the Netherlands.",
    ],
    scenarios: [
      { title: "Dutch employer, hybrid office", body: "Most straightforward for permits and payroll when you live in the Netherlands — confirm office days and contract entity." },
      { title: "Foreign employer, no Dutch entity", body: "May require contractor setup or separate immigration advice — not the same as a standard employment sponsorship route." },
      { title: "Remote from NL for foreign HQ", body: "Tax residency, social security and payroll location matter — remote is not a shortcut around work-authorization rules." },
      { title: "Cross-border commuter", body: "Living in NL while working abroad part-time can trigger treaty and reporting questions — clarify before signing." },
    ],
    links: [
      { label: "Foreign income guide", href: FOREIGN_INCOME_PATH, status: "live", description: "Reporting context when income or employment spans countries." },
      { label: "Double taxation guide", href: DOUBLE_TAXATION_PATH, status: "live", description: "Treaty context for cross-border work and income." },
    ] satisfies FindingJobsLink[],
  },
  mistakeCards: [
    { title: "Applying without localization", body: "Generic CVs that ignore Dutch format, language cues and work-authorization context often underperform." },
    { title: "Ignoring networking", body: "Relying only on online applications misses referrals, recruiter relationships and community introductions." },
    { title: "Unrealistic salary expectations", body: "Targeting bands far above market without specialization slows progress — research city and industry norms." },
    { title: "Assuming English-only everywhere", body: "Many roles still require Dutch — especially client-facing, public-sector and SME positions." },
    { title: "Applying too broadly", body: "Spray-and-pray applications reduce quality; targeted roles with tailored motivation perform better." },
    { title: "Ignoring visa realities", body: "Applying to employers who cannot sponsor, or misreading permit rules, wastes time — verify sponsorship capacity early." },
    { title: "Focusing only on Amsterdam", body: "Strong roles exist in Eindhoven, Rotterdam, The Hague and university cities with different competition profiles." },
    { title: "Underestimating housing costs", body: "A job offer in an expensive city may not feel comfortable until rent and commute are modelled against net pay." },
  ],
  experienceLevelCards: [
    { title: "Students & Graduates", body: "Internships, graduate programmes and entry roles exist — competition is strong; language and visa route matter early." },
    { title: "Mid-Level Professionals", body: "Specialization and international experience help; recruiters and LinkedIn are common channels." },
    { title: "Senior Specialists", body: "Scarce skills and leadership scope drive hiring; employer sponsorship and total compensation packages need careful review." },
    { title: "Executives", body: "Search is often relationship-driven through networks and executive recruiters; relocation packages vary widely." },
    { title: "Freelancers & Contractors", body: "ZZP and contractor routes have separate tax and permit rules — not interchangeable with standard employment sponsorship." },
    { title: "Researchers & Academics", body: "University and institute hiring follows academic timelines and grant funding; corporate biotech may differ from academic pay scales." },
  ],
  expatQuestions: [
    {
      q: "Can foreigners get jobs in the Netherlands?",
      a: "Yes — many international professionals work in the Netherlands, especially in tech, engineering, finance and international organisations. Success depends on industry fit, experience, visa route, networking and city choice — not nationality alone.",
    },
    {
      q: "Is English enough?",
      a: "English is often sufficient in international companies, tech and research environments. Dutch still improves long-term options in many sectors and client-facing roles. Read each vacancy's language requirements carefully.",
    },
    {
      q: "Which industries hire expats?",
      a: "Technology, engineering, data, finance, logistics, energy, life sciences, semiconductors and international business commonly hire internationally. Hospitality and some public roles may expect Dutch sooner.",
    },
    {
      q: "Which cities have the most jobs?",
      a: "Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven concentrate much international hiring. Haarlem, Leiden, Delft, Groningen and Maastricht offer different sector strengths and competition levels.",
    },
    {
      q: "What salaries can expats expect?",
      a: "There is no single expat salary. Outcomes vary by industry, seniority, city and employer. Use expat salary and average salary guides, then model net pay and housing costs — figures here are orientation only.",
    },
    {
      q: "How does sponsorship work?",
      a: "Some employers sponsor highly skilled migrant or EU Blue Card routes if role and salary meet IND rules. Sponsorship is employer-driven and not guaranteed — verify sponsor status and current thresholds on ind.nl.",
    },
    {
      q: "Should I use recruiters?",
      a: "Recruiters can help with market context, introductions and English-friendly employers — especially for mid-level professional roles. They do not guarantee placement; compare agencies and stay active on direct applications.",
    },
    {
      q: "Is LinkedIn important?",
      a: "Yes — LinkedIn is widely used in the Netherlands for job discovery, recruiter contact and visibility. A clear headline, achievement-focused profile and thoughtful networking complement formal applications.",
    },
  ],
  relatedGuides: [
    { label: "Expat Salary Netherlands", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary expectations, taxes and cost-of-living context for international professionals." },
    { label: "Highly Skilled Migrant Visa", href: HSM_VISA_PATH, status: "live", description: "Work permit route context alongside employer-sponsored hiring." },
    { label: "Average Salary Netherlands", href: AVERAGE_SALARY_NETHERLANDS_PATH, status: "live", description: "Broader wage benchmarks by city, industry and experience." },
    { label: "Cost of living calculator", href: COST_OF_LIVING_CALCULATOR_PATH, status: "live", description: "Estimate monthly expenses before accepting an offer in a new city." },
    { label: "Best Cities for Expats", href: BEST_CITIES_FOR_EXPATS_PATH, status: "live", description: "Compare Dutch cities for international professionals and families." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiate total compensation once interviews progress." },
    { label: "Working in the Netherlands hub", href: JOBS_HUB_PATH, status: "live", description: "Broader career and employment guides for newcomers." },
    { label: "Moving to the Netherlands", href: MOVING_HUB_PATH, status: "live", description: "Relocation planning with employment and visa context." },
  ] satisfies FindingJobsLink[],
  affiliatePlacementId: FINDING_JOBS_AFFILIATE_PLACEMENT_ID,
  servicesWhenToUse: [
    { title: "Recruitment agencies", body: "Useful for market context, English-friendly employers and introductions — not a substitute for direct applications." },
    { title: "Career coaches", body: "Helpful for CV positioning, interview preparation and search strategy in an unfamiliar market." },
    { title: "Immigration lawyers", body: "Support for permit questions when job offers and visa routes are linked — not general job placement." },
    { title: "CV writing services", body: "May help localize application materials for Dutch expectations — verify deliverables and scope." },
    { title: "Relocation services", body: "Useful when job timing depends on housing search, family logistics and arrival planning." },
  ],
  services: [
    { label: "Recruitment agencies", href: "/netherlands/services/recruitment-agencies/", status: "comingSoon", description: "Future directory for expat-focused recruitment support." },
    { label: "Career coaches", href: "/netherlands/services/career-coaches/", status: "comingSoon", description: "Future directory for career coaching and interview support." },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/", status: "live", description: "Permit and sponsorship questions alongside job offers." },
    { label: "CV writing services", href: "/netherlands/services/cv-writing-services/", status: "comingSoon", description: "Future directory for CV and application localization support." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Move planning alongside job search and arrival timing." },
  ] satisfies FindingJobsLink[],
  relatedCalculators: [
    {
      label: "Dutch salary net calculator",
      href: DUTCH_SALARY_NET_CALCULATOR_PATH,
      status: "live",
      description: "Estimate take-home pay from gross offers before comparing city living costs.",
    },
    {
      label: "Expat cost of living calculator",
      href: COST_OF_LIVING_CALCULATOR_PATH,
      status: "live",
      description: "Model monthly expenses by city and household alongside salary offers.",
    },
  ] satisfies FindingJobsLink[],
  faq: [
    {
      q: "Can expats find jobs in the Netherlands?",
      a: "Yes — many expats work in the Netherlands, particularly in international companies and skills-short sectors. Outcomes depend on industry, experience, visa route, networking and city — no guide can guarantee a job.",
    },
    {
      q: "Is English enough to work in the Netherlands?",
      a: "English is often sufficient in tech, startups, international corporations and research settings. Dutch language skills may still improve long-term opportunities, especially outside international employers.",
    },
    {
      q: "Which industries hire foreigners?",
      a: "Technology, engineering, data, finance, logistics, energy, life sciences, semiconductors and international business frequently hire international talent. Requirements vary by role and employer.",
    },
    {
      q: "How does visa sponsorship work?",
      a: "Some employers sponsor highly skilled migrant or EU Blue Card permits when role and salary meet IND requirements. Sponsorship is not automatic — verify employer sponsor status and current rules on ind.nl.",
    },
    {
      q: "Which cities are best for jobs?",
      a: "Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven lead for many international roles. Other cities offer sector-specific strengths with different competition and housing profiles.",
    },
    {
      q: "What salaries can expats expect?",
      a: "Salaries vary by industry, seniority and city. Dutch offers are usually gross. Use salary guides and net-pay calculators for planning — not as guarantees of any specific offer.",
    },
    {
      q: "Should I use recruiters?",
      a: "Recruiters can complement direct applications, especially for professional roles and English-friendly employers. They do not guarantee interviews or offers — stay active across multiple channels.",
    },
    {
      q: "Is LinkedIn important in the Netherlands?",
      a: "LinkedIn is widely used for job discovery, recruiter outreach and professional visibility. A focused profile and thoughtful networking often support formal applications.",
    },
  ],
  officialSources: [
    { label: "IND — Immigration & Naturalisation Service", href: "https://ind.nl/en", description: "Work permit routes, recognised sponsors and highly skilled migrant rules." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official government information on working, living and labour rights in the Netherlands." },
    { label: "UWV", href: "https://www.uwv.nl/", description: "Employee insurance agency — labour market and benefits context for workers in the Netherlands." },
    { label: "Werk.nl", href: "https://www.werk.nl/", description: "Public employment service vacancies and labour market information." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Official guidance for employers and employees on contracts, hiring and working in the Netherlands." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Government portal for Dutch nationals abroad — useful official links for international work context." },
  ],
  officialSourcesNote:
    "Visa sponsorship, labour market demand and salary expectations vary significantly depending on profession, experience and economic conditions. Verify current rules on official sources.",
  exploreNextCards: [
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Understand compensation expectations after identifying target roles." },
    { label: "Highly Skilled Migrant Visa", href: HSM_VISA_PATH, status: "live", description: "Permit route context for employer-sponsored offers." },
    { label: "Best Dutch Cities", href: BEST_CITIES_FOR_EXPATS_PATH, status: "live", description: "Compare cities before committing to a job location." },
    { label: "Cost of Living Calculator", href: COST_OF_LIVING_CALCULATOR_PATH, status: "live", description: "Stress-test offers against local expenses." },
    { label: "Moving to the Netherlands", href: MOVING_HUB_PATH, status: "live", description: "Relocation hub connecting visas, housing and employment." },
  ] satisfies FindingJobsLink[],
} as const;

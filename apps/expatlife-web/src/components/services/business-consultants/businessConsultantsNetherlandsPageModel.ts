import { scheduledPublishDateForPath } from "@/src/lib/publishing/scheduledGuides";
import { ACCOUNTANTS_PATH } from "@/src/components/services/accountants/accountantsNetherlandsPageModel";

/** Services directory — business consultants for strategy, setup facilitation, KvK growth and operations. */
export const BUSINESS_CONSULTANTS_PATH = "/netherlands/services/business-consultants/" as const;
export const BUSINESS_CONSULTANTS_NETHERLANDS_PATH = BUSINESS_CONSULTANTS_PATH;

export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;
export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const ZZP_NETHERLANDS_PATH = "/netherlands/business/zzp-netherlands/" as const;
export const STARTING_A_BUSINESS_PATH = "/netherlands/business/starting-a-business-netherlands/" as const;
export const FREELANCING_PATH = "/netherlands/jobs/freelancing-netherlands/" as const;
export const STARTING_CONSULTANCY_PATH = "/netherlands/jobs/starting-consultancy-netherlands/" as const;
export const CONTRACTOR_VS_EMPLOYEE_PATH = "/netherlands/jobs/contractor-vs-employee-netherlands/" as const;

export const BUSINESS_CONSULTANTS_AFFILIATE_PLACEMENT_ID =
  "nl-services-business-consultants-support-providers" as const;

export type BusinessConsultantProvider = {
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
  consultantType:
    | "Strategy & growth consulting"
    | "Market-entry facilitation"
    | "Operations / process consulting"
    | "KvK & setup facilitation"
    | "Expat-oriented business coaching"
    | "Tax/admin-adjacent setup support"
    | "Official / register discovery path";
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type BusinessConsultantLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v1";
const VISUAL_PREFIX = "netherlands-services-business-consultants";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/${VISUAL_PREFIX}-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const businessConsultantsNetherlandsPage = {
  slug: "business-consultants",
  path: BUSINESS_CONSULTANTS_PATH,
  publish: true,
  publishDate: scheduledPublishDateForPath(BUSINESS_CONSULTANTS_PATH) ?? "2026-11-13",
  affiliatePlacementId: BUSINESS_CONSULTANTS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Business Consultants in the Netherlands for Expats | Strategy & Setup",
    description:
      "Find Dutch business consultants for strategy, KvK growth advice, market entry and operations consulting. Soft discovery for expats and entrepreneurs — not a ranking or business advice guarantee.",
    keywords: [
      "business consultants netherlands",
      "business consultant netherlands expat",
      "Dutch business strategy consultant",
      "market entry consultant netherlands",
      "KvK business setup consultant",
      "operations consultant netherlands",
      "growth consultant netherlands",
      "startup consultant netherlands expat",
      "business coach netherlands english",
      "consultant vs accountant netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Business consultants",
    pageTitle: "Business Consultants in the Netherlands for Expats",
    subtitle:
      "Discover Dutch business consultants who help with strategy, setup facilitation, KvK growth advice, market entry and operations — especially for internationals starting or scaling a company. This directory owns consultant discovery; how-the-system guides, consultancy-practice how-to, bookkeeping and tax live on their own pages.",
    primaryCta: { label: "Browse Consultant Directory", href: "#directory" },
    secondaryCta: { label: "Consultant vs Accountant", href: "#differentiate" },
    chips: ["Strategy & growth", "Market entry", "KvK facilitation", "Soft discovery"],
    image: {
      src: "/images/heroes/netherlands-services-business-consultants-hero-premium-v1.png",
      alt: "Photorealistic editorial scene of an international founder reviewing Dutch market-entry strategy boards, KvK folders and a laptop with a business consultant at a bright canal-side meeting table in Amsterdam.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what Dutch business consultants help with: strategy, market entry, KvK growth facilitation, operations and setup coaching for expats.",
      "Business consultants help you decide how to build and scale — bookkeeping and tax advice belong on their own directories."
    ),
    differentiate: visual(
      "differentiate",
      "Infographic differentiating business consultants, starting-a-business guides, accountants, tax advisors and starting-consultancy how-to for expats.",
      "Pick the right page first: consultants own strategy discovery; guides own how the system works; accountants own administratie."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about Dutch business consultants for expats and entrepreneurs.",
      "Use this snapshot before shortlisting: role boundaries, engagement models and when DIY guides are enough."
    ),
    consultantServices: visual(
      "consultant-services",
      "Infographic of consultant-supported services: strategy, market entry, operations, KvK facilitation, growth coaching and stakeholder mapping.",
      "Service mix varies by consultant — confirm deliverables versus ongoing retainers before you share sensitive plans."
    ),
    consultantTypes: visual(
      "consultant-types",
      "Infographic comparing strategy consultants, market-entry facilitators, ops consultants, KvK setup coaches and tax-adjacent setup support.",
      "Match the consultant model to your need — strategy is not the same as bookkeeping or tax advice."
    ),
    whenToUse: visual(
      "when-to-use",
      "Infographic decision map: when to use a business consultant vs DIY guides vs accountant vs tax advisor.",
      "System how-to often suits Starting a business / ZZP guides; complex tax belongs on Tax advisors; strategy shortlists live here."
    ),
    credentials: visual(
      "credentials",
      "Infographic explaining scope letters, fee transparency, references and what to verify before instructing a business consultant.",
      "Ask what is in scope and how success is measured — then verify publicly where claims matter."
    ),
    challenges: visual(
      "challenges",
      "Infographic of common expat challenges with Dutch business consultants: role mix-ups, English deliverables, KvK myths, DIY vs paid help and fake rankings.",
      "Clarify scope, language and handoffs to accountants or tax advisors before you share bank or ownership details."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral business-consultant directory workflow: shortlist, compare scope, verify fit and decide.",
      "Provider discovery should lead to verification — not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for business consultants: strategy focus, market entry, languages, city coverage and expat support.",
      "Compare consultants by fit and transparency before comparing marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask Dutch business consultants before instructing them.",
      "Good questions reveal scope, fees, English deliverables, KvK facilitation limits and where tax or bookkeeping starts."
    ),
    relatedBusiness: visual(
      "related-business",
      "Infographic connecting consultant research to ZZP, starting a business, freelancing, consultancy and contractor vs employee guides.",
      "Strategy discovery sits beside how Dutch business and freelance systems work — keep those how-to guides linked."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist business consultants: define goals, check scope, ask fees and align with accountant and tax pages.",
      "Turn consultant discovery into a structured shortlist before sharing sensitive commercial plans."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common business-consultant FAQ topics: vs accountant, vs starting-a-business guide, KvK, market entry and red flags.",
      "FAQ answers should help you pick the next verification step — not replace personal advice."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official sources for business orientation: KvK, Belastingdienst business pages, RVO and Business.gov.nl.",
      "Verify entrepreneur orientation with official sources — not marketing alone."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around Dutch business setup: business consultants, accountants, tax advisors, financial advisors and mortgage advisors.",
      "Business consultants are one piece of the wider money and business-setup ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing consultants: accountants, tax advisors, ZZP guide and starting a business.",
      "Continue from consultant discovery into bookkeeping, tax advice, ZZP setup and business how-to guides."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting consultant research to accountants, tax advisors, financial advisors, ZZP and Dutch cities.",
      "Consultant shortlists connect naturally into admin, tax, planning and business-setup next steps."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#differentiate", label: "Not the same as…" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#consultant-role", label: "What consultants do" },
    { href: "#consultant-types", label: "Consultant types" },
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
    heading: "Why Expats Hire Dutch Business Consultants",
    paragraphs: [
      "In the Netherlands, business consultants help founders and operators make clearer decisions about strategy, market entry, KvK growth facilitation, operations design and setup coaching — especially when Dutch processes and English working language both matter.",
      "This page is a services directory for business-consultant discovery. It owns strategy / setup facilitation / KvK growth advice / operations consulting. Starting a business and ZZP guides own how the system works; Starting consultancy owns consultancy-practice how-to; accountants own bookkeeping; tax advisors own tax; financial advisors own wealth planning.",
      "Inclusion here is informational soft discovery, not a ranking. No directory can guarantee commercial outcomes, KvK results or English deliverables. Confirm scope, fees and references directly before you share sensitive plans or ownership details.",
    ],
    links: [
      { label: "Accountants", href: ACCOUNTANTS_PATH },
      { label: "Tax advisors", href: TAX_ADVISORS_PATH },
      { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH },
      { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH },
      { label: "Starting a business", href: STARTING_A_BUSINESS_PATH },
    ],
  },
  differentiateCards: [
    {
      title: "Business consultants (this page)",
      body: "Strategy, market entry, KvK growth facilitation, operations and setup coaching discovery for expats and entrepreneurs.",
      href: BUSINESS_CONSULTANTS_PATH,
      status: "live" as const,
    },
    {
      title: "Starting a business / ZZP guides",
      body: "How Dutch business and freelance systems work — orientation and checklists, not a consultant shortlist.",
      href: STARTING_A_BUSINESS_PATH,
      status: "live" as const,
    },
    {
      title: "Accountants",
      body: "Bookkeeping, BTW filings admin, jaarrekening and payroll admin — numbers hygiene, not growth strategy.",
      href: ACCOUNTANTS_PATH,
      status: "live" as const,
    },
    {
      title: "Tax advisors",
      body: "Tax advice, returns advisory and 30% ruling conversations — not day-to-day strategy workshops.",
      href: TAX_ADVISORS_PATH,
      status: "live" as const,
    },
  ],
  snapshotCards: [
    { label: "Core role", value: "Decide & design", note: "Strategy, market entry and ops design — not BTW filing itself." },
    { label: "Common trigger", value: "First NL company", note: "New arrivals often need facilitation beside DIY KvK guides." },
    { label: "Growth work", value: "Scale & pivot", note: "Pricing, process cleanup and hiring plans are frequent asks." },
    { label: "DIY first", value: "System guides", note: "Starting a business / ZZP pages own how-the-system orientation." },
    { label: "Admin layer", value: "Accountants page", note: "Bookkeeping and jaarrekening discovery lives with accountants." },
    { label: "Guarantee", value: "None", note: "No directory ranks consultants or guarantees commercial outcomes." },
  ],
  consultantServices: [
    {
      title: "Strategy & positioning",
      body: "Clarify offer, customer segments, pricing logic and near-term priorities so you stop guessing what to build next.",
    },
    {
      title: "Market-entry facilitation",
      body: "Map Netherlands go-to-market steps, stakeholder conversations and practical sequencing for internationals entering Dutch markets.",
    },
    {
      title: "KvK & setup facilitation",
      body: "Help you prepare questions and document packs around registration timing — still verify official KvK and Belastingdienst steps yourself.",
    },
    {
      title: "Operations & process design",
      body: "Clean up delivery workflows, tools and handoffs so a small team can scale without constant founder firefighting.",
    },
    {
      title: "Growth coaching for founders",
      body: "Recurring sessions for pipeline, hiring decisions and capacity planning — useful when English coaching matters as much as Dutch context.",
    },
    {
      title: "Handoffs to admin & tax",
      body: "Know when strategy work should stop and accountants or tax advisors should take over filings and advice.",
    },
  ],
  consultantTypeComparison: [
    {
      type: "Strategy & growth consulting",
      scope: "Positioning, offer design, pricing and near-term growth plans for freelancers and small companies.",
      usefulWhen: "You know you want to sell in the Netherlands but need a clearer plan before spending on ads or hiring.",
      questions: ["What deliverables do I get?", "Workshop vs retainer?", "English materials?"],
    },
    {
      type: "Market-entry facilitation",
      scope: "Sequencing for internationals entering Dutch markets — stakeholders, channels and practical first steps.",
      usefulWhen: "You already have a product or service abroad and need a Netherlands landing plan.",
      questions: ["Which industries do you know?", "Who owns research work?", "Remote kickoff?"],
    },
    {
      type: "Operations / process consulting",
      scope: "Workflow, tooling and delivery redesign for growing solo operators and small teams.",
      usefulWhen: "Revenue exists but chaos, missed handoffs or founder bottlenecks are the main risk.",
      questions: ["Do you implement or advise only?", "Tools included?", "Change timeline?"],
    },
    {
      type: "KvK & setup facilitation",
      scope: "Orientation and prep for registration, first invoices and setup sequencing — not a substitute for official KvK guidance.",
      usefulWhen: "Language and first-year Netherlands timing are the main frictions.",
      questions: ["What is out of scope?", "Do you coordinate with accountants?", "How do fees work?"],
    },
    {
      type: "Tax/admin-adjacent setup support",
      scope: "Providers who help when setup hits tax filings and bookkeeping — useful soft discovery, not a substitute for Tax advisors or Accountants pages.",
      usefulWhen: "Strategy work created admin questions you need to shortlist next.",
      questions: ["Is this consulting or filing?", "When should I open Accountants?", "What is advisory vs admin?"],
    },
  ],
  whenToUseScenarios: [
    {
      profile: "New arrival starting BV/ZZP",
      whatCanMatter: "Sequencing KvK, first offer, English facilitation, when DIY is enough.",
      exampleQuestion: "Can you help me sequence setup steps and clarify what I should DIY vs hire for?",
      betterPath: "Starting a business / ZZP guides first — then consultant shortlist for facilitation gaps.",
    },
    {
      profile: "Scaling an existing Dutch company",
      whatCanMatter: "Ops cleanup, hiring plan, pricing, capacity and process design.",
      exampleQuestion: "Where are the bottlenecks in our delivery process and what should we change in 90 days?",
      betterPath: "Operations / growth consultant — keep Accountants for administratie as volumes rise.",
    },
    {
      profile: "Pivoting into consultancy practice",
      whatCanMatter: "Positioning, packaging, first clients, practice how-to vs strategy help.",
      exampleQuestion: "How should I package my expertise for Dutch clients without inventing fake credentials?",
      betterPath: "Starting consultancy guide for practice how-to — this page for strategy discovery.",
    },
    {
      profile: "Ops cleanup after messy growth",
      whatCanMatter: "Tools, handoffs, founder bottlenecks, accountant/tax boundaries.",
      exampleQuestion: "Can you redesign our weekly ops rhythm and clarify what our accountant should own?",
      betterPath: "Ops consultant + Accountants / Tax advisors directories for admin and advice.",
    },
  ],
  credentialChecklist: [
    {
      item: "Written scope of engagement",
      why: "Strategy workshops, market research, facilitation and retainers may be separate line items — get them in writing.",
    },
    {
      item: "Deliverables & success measures",
      why: "Ask what you receive (decks, plans, facilitation notes) and how progress will be reviewed.",
    },
    {
      item: "Fee & package transparency",
      why: "Day rates vs project fees vs retainers change the true cost of open-ended coaching.",
    },
    {
      item: "Language of working materials",
      why: "Marketing English is not the same as delivering plans and workshops you can action before deadlines.",
    },
    {
      item: "Where admin and tax start",
      why: "Know when the consultant stops and when you should open Accountants or Tax advisors directories.",
    },
    {
      item: "References & domain fit",
      why: "Ask for relevant experience with internationals, your industry and similar company stage — without treating testimonials as guarantees.",
    },
  ],
  challengeCards: [
    {
      title: "Consultant vs accountant mix-up",
      body: "Consultants help decide and design; accountants keep administratie running. Use both pages deliberately.",
    },
    {
      title: "DIY guide skipped too early",
      body: "Starting a business and ZZP guides often answer system questions before you need paid facilitation.",
    },
    {
      title: "Starting consultancy confusion",
      body: "Practice how-to lives on Starting consultancy; this page owns strategy and growth consultant discovery.",
    },
    {
      title: "English promise vs Dutch portals",
      body: "KvK and Belastingdienst portals are often Dutch-first — confirm who navigates them with you.",
    },
    {
      title: "Scope creep into tax advice",
      body: "Tax strategy belongs on Tax advisors — do not treat a growth coach as a tax adviser.",
    },
    {
      title: "Fake ranking expectations",
      body: "Soft discovery lists are not McKinsey-style league tables. Verify fit yourself.",
    },
    {
      title: "Wealth planning overlap",
      body: "Financial advisors own pensions and investments — soft-link when founder money questions appear.",
    },
    {
      title: "No outcome guarantee",
      body: "No directory can promise revenue, clients or KvK outcomes. Confirm terms before you instruct.",
    },
  ],
  providers: [
    {
      name: "Blue Umbrella",
      slug: "blue-umbrella",
      city: "Netherlands-wide",
      region: "Netherlands",
      summary:
        "Dutch tax filing and administration support for internationals — useful soft discovery when strategy and KvK setup work hits Belastingdienst and bookkeeping handoffs.",
      expatFocus:
        "English-oriented administration support that often sits next to business-setup workflows for newcomers and founders.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Primarily remote / online workflows.",
      website: "https://www.blueumbrella.nl/",
      engagementType: "Tax & administration support",
      consultantType: "Tax/admin-adjacent setup support",
      citiesServed: ["Netherlands-wide online"],
      featured: true,
      verificationNote:
        "Confirm whether you need consulting, filing support or separate tax advice before engaging — not a ranking endorsement.",
    },
    {
      name: "BROADSTREET",
      slug: "broadstreet",
      city: "Netherlands-wide",
      region: "Netherlands",
      summary:
        "Tax, accountancy, payroll and cross-border support for internationals and entrepreneurs comparing setup depth beyond a single strategy workshop.",
      expatFocus:
        "Useful when market-entry plans create accountancy-adjacent conversations with English support.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Remote consultations common; confirm current office options.",
      website: "https://broadstreet.nl/taxes-netherlands/",
      engagementType: "Accountancy & cross-border support",
      consultantType: "Tax/admin-adjacent setup support",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote:
        "Ask which services are consulting vs bookkeeping vs advisory; verify current scope and fees on the live site.",
    },
    {
      name: "TaxSavers",
      slug: "taxsavers",
      city: "Netherlands-wide",
      region: "Netherlands",
      summary:
        "Dutch tax return, M-form, VAT and self-employed filing support for internationals sorting first-year obligations after setup work.",
      expatFocus:
        "Helpful soft discovery when consultant research creates annual filing and VAT questions.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Online-oriented workflows; confirm current options.",
      website: "https://taxsavers.nl/",
      engagementType: "Tax return & VAT support",
      consultantType: "Tax/admin-adjacent setup support",
      citiesServed: ["Netherlands-wide online"],
      featured: true,
      verificationNote:
        "Filing support is not a substitute for strategy consulting — clarify boundaries and open Tax advisors when advice is needed.",
    },
    {
      name: "Independent strategy & growth coaches",
      slug: "independent-strategy-growth-coaches",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Independent coaches and boutique consultants who run positioning workshops, growth retainers and founder facilitation in English or Dutch.",
      expatFocus:
        "Often the practical starting point when you want a human facilitator after reading Starting a business / ZZP guides.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Many offer intake in-person with remote follow-ups.",
      website: "https://business.gov.nl/",
      engagementType: "Strategy workshops & retainers",
      consultantType: "Strategy & growth consulting",
      citiesServed: ["Amsterdam", "Utrecht", "Rotterdam", "The Hague", "Eindhoven", "Other cities"],
      featured: true,
      verificationNote:
        "Use Business.gov.nl, KvK and local search to identify current consultants — this row explains the role, not a single brand endorsement.",
    },
    {
      name: "Market-entry facilitation paths",
      slug: "market-entry-facilitation-paths",
      city: "Randstad focus",
      region: "Western Netherlands",
      summary:
        "Facilitators and programmes that help internationals sequence Netherlands market entry, stakeholder mapping and first commercial steps.",
      expatFocus:
        "Strong fit when you already sell elsewhere and need a Netherlands landing plan with English working language.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Randstad meetings common; remote nationwide possible.",
      website: "https://english.rvo.nl/",
      engagementType: "Market-entry facilitation",
      consultantType: "Market-entry facilitation",
      citiesServed: ["Amsterdam", "The Hague", "Utrecht", "Rotterdam"],
      featured: true,
      verificationNote:
        "RVO and official portals are orientation — interview the specific facilitator handling your file.",
    },
    {
      name: "Operations & process consultants",
      slug: "operations-process-consultants",
      city: "Major cities",
      region: "Netherlands",
      summary:
        "Consultants focused on delivery workflows, tooling and founder-bottleneck cleanup for growing freelancers and small teams.",
      expatFocus:
        "Useful when revenue exists but chaos and missed handoffs are the main risk.",
      languages: ["Dutch", "English availability varies"],
      remoteSupport: true,
      inPersonAvailability: "Often remote with occasional workshops.",
      website: "https://www.kvk.nl/english/",
      engagementType: "Ops redesign projects",
      consultantType: "Operations / process consulting",
      citiesServed: ["Netherlands-wide local offices"],
      featured: false,
      verificationNote:
        "Ask whether implementation is included or advice-only, and how work hands off to your accountant.",
    },
    {
      name: "KvK & setup facilitation coaches",
      slug: "kvk-setup-facilitation-coaches",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Coaches who help prepare registration questions, document packs and first-year sequencing for internationals — still verify official KvK steps yourself.",
      expatFocus:
        "Helpful when language and timing are the blockers after reading Starting a business.",
      languages: ["English", "Dutch"],
      remoteSupport: true,
      inPersonAvailability: "Online common; local desks vary.",
      website: "https://www.kvk.nl/english/",
      engagementType: "Setup facilitation",
      consultantType: "KvK & setup facilitation",
      citiesServed: ["Netherlands-wide"],
      featured: true,
      verificationNote:
        "Facilitation is not official registration — confirm KvK requirements on the live KvK site.",
    },
    {
      name: "KvK / RVO / Business.gov.nl discovery",
      slug: "kvk-rvo-business-gov-discovery",
      city: "Nationwide",
      region: "Netherlands",
      summary:
        "Official entrepreneur orientation for finding registered businesses, subsidies context and doing-business guidance in English.",
      expatFocus:
        "Useful verification starting point before shortlisting paid consultants and related service providers.",
      languages: ["Dutch", "English"],
      remoteSupport: true,
      inPersonAvailability: "Online portals and KvK desks.",
      website: "https://www.kvk.nl/english/",
      engagementType: "Official / discovery orientation",
      consultantType: "Official / register discovery path",
      citiesServed: ["Netherlands-wide"],
      featured: false,
      verificationNote:
        "Official presence is not a quality ranking of consultants — always verify services and fees directly.",
    },
  ] satisfies BusinessConsultantProvider[],
  comparisonTable: [
    {
      advisor: "Blue Umbrella",
      citiesServed: "Netherlands-wide",
      expatFocus: "Admin & filing support",
      languages: "English, Dutch",
      onlineConsultations: "Yes",
      advisorType: "Tax/admin-adjacent setup support",
    },
    {
      advisor: "BROADSTREET",
      citiesServed: "Netherlands-wide",
      expatFocus: "Accountancy & cross-border",
      languages: "English, Dutch",
      onlineConsultations: "Yes",
      advisorType: "Tax/admin-adjacent setup support",
    },
    {
      advisor: "TaxSavers",
      citiesServed: "Netherlands-wide",
      expatFocus: "Returns & VAT support",
      languages: "English, Dutch",
      onlineConsultations: "Yes",
      advisorType: "Tax/admin-adjacent setup support",
    },
    {
      advisor: "Independent strategy coaches",
      citiesServed: "Major cities",
      expatFocus: "Positioning & growth",
      languages: "Dutch, English varies",
      onlineConsultations: "Often",
      advisorType: "Strategy & growth consulting",
    },
    {
      advisor: "Market-entry facilitation",
      citiesServed: "Randstad common",
      expatFocus: "NL landing plans",
      languages: "English, Dutch",
      onlineConsultations: "Yes",
      advisorType: "Market-entry facilitation",
    },
    {
      advisor: "Operations consultants",
      citiesServed: "National / local",
      expatFocus: "Process cleanup",
      languages: "Dutch, English varies",
      onlineConsultations: "Often",
      advisorType: "Operations / process consulting",
    },
    {
      advisor: "KvK setup facilitators",
      citiesServed: "Netherlands-wide",
      expatFocus: "First-year sequencing",
      languages: "English, Dutch",
      onlineConsultations: "Yes",
      advisorType: "KvK & setup facilitation",
    },
    {
      advisor: "KvK / RVO / Business.gov.nl",
      citiesServed: "Netherlands-wide",
      expatFocus: "Official orientation",
      languages: "Dutch, English",
      onlineConsultations: "Online portals",
      advisorType: "Official / register discovery path",
    },
  ],
  questionsToAsk: [
    "Does your engagement include strategy workshops, market research, facilitation notes and follow-up — or are those separate?",
    "How are fees structured (day rate, project fee, retainer) and what triggers overruns?",
    "Will you deliver materials and workshops in English I can action before KvK or launch deadlines?",
    "Where does your work stop and bookkeeping or tax advice begin — should I also speak with an accountant or tax advisor?",
    "How do you handle ZZP vs BV differences for my legal form without giving tax advice?",
    "What industry and company-stage experience is most relevant to my file?",
    "Who owns research work versus facilitation of decisions I still make?",
    "Where can I verify your firm registration context or references before sharing sensitive plans?",
  ],
  relatedBusinessGuides: [
    {
      label: "ZZP Netherlands",
      href: ZZP_NETHERLANDS_PATH,
      status: "live",
      description: "How Dutch freelance / ZZP status works — system context beside strategy help.",
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
      description: "Consultancy-practice how-to — packaging and practice themes, not this directory.",
    },
    {
      label: "Contractor vs employee",
      href: CONTRACTOR_VS_EMPLOYEE_PATH,
      status: "live",
      description: "Status questions that change which setup and consulting packages you need.",
    },
  ] satisfies BusinessConsultantLink[],
  leadCta: {
    heading: "Need Help Shortlisting Business Consultants?",
    body: "Use the directory to compare strategy focus, market-entry facilitation, language options and remote workflows. Then contact shortlisted consultants for a written scope letter — and keep bookkeeping, tax advice and wealth planning on their own service pages.",
    primaryCta: { label: "Compare Consultants", href: "#directory" },
    secondaryCta: { label: "Open Accountants", href: ACCOUNTANTS_PATH },
  },
  faqs: [
    {
      q: "What does a Dutch business consultant do?",
      a: "A business consultant typically helps with strategy, market entry, KvK growth facilitation, operations design or founder coaching. Scope varies widely — always confirm deliverables and fees in writing.",
    },
    {
      q: "How is a business consultant different from an accountant?",
      a: "Consultants help you decide and design how to build or scale. Accountants and administratiekantoren keep bookkeeping, BTW filings and jaarrekening running. Use both directories when your needs overlap.",
    },
    {
      q: "Should I read Starting a business before hiring a consultant?",
      a: "Often yes. Starting a business and ZZP guides explain how the Dutch system works. Hire a consultant when you need facilitation, strategy or ops design beyond DIY orientation.",
    },
    {
      q: "Where does Starting consultancy fit?",
      a: "Starting consultancy owns consultancy-practice how-to. This page owns discovery of strategy and growth consultants who may help you build that practice or another business.",
    },
    {
      q: "Is this page a ranking of business consultants?",
      a: "No. Listings are informational soft discovery only. We do not invent Big Four or McKinsey-style rankings. Always verify current services, fees, languages and fit directly.",
    },
    {
      q: "When should I open Tax advisors or Financial advisors?",
      a: "Open Tax advisors for tax advice and filing strategy. Open Financial advisors for pensions, investments and wealth planning. Soft-link them when strategy work creates money questions.",
    },
    {
      q: "Do mortgage advisors replace business consultants?",
      a: "No. Mortgage advisors help with home financing. Keep them soft-linked when personal and business money timelines overlap, but use this page for strategy and growth discovery.",
    },
    {
      q: "Which official sources should I check?",
      a: "Start with KvK, Belastingdienst (business), RVO and Business.gov.nl for entrepreneur orientation. This guide is orientation only — not tax, legal or financial advice.",
    },
  ],
  officialSources: [
    {
      label: "KvK — English",
      href: "https://www.kvk.nl/english/",
      description: "Netherlands Chamber of Commerce — business registration and entrepreneur orientation.",
    },
    {
      label: "Belastingdienst — Business",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/",
      description:
        "Dutch Tax Administration business orientation for VAT, payroll and business tax topics.",
    },
    {
      label: "RVO — English",
      href: "https://english.rvo.nl/",
      description: "Netherlands Enterprise Agency — entrepreneurship and innovation orientation.",
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
      label: "Accountants",
      href: ACCOUNTANTS_PATH,
      status: "live",
      description: "Bookkeeping, BTW filings admin and jaarrekening discovery.",
    },
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
      label: "Mortgage advisors",
      href: MORTGAGE_ADVISORS_PATH,
      status: "live",
      description: "Home financing support when personal and business money timelines overlap.",
    },
    {
      label: "ZZP Netherlands",
      href: ZZP_NETHERLANDS_PATH,
      status: "live",
      description: "How Dutch freelance status works before you hire strategy help.",
    },
    {
      label: "Starting a business",
      href: STARTING_A_BUSINESS_PATH,
      status: "live",
      description: "First-year business setup orientation for internationals.",
    },
    {
      label: "Starting consultancy",
      href: STARTING_CONSULTANCY_PATH,
      status: "live",
      description: "Consultancy-practice how-to beside consultant discovery.",
    },
  ] satisfies BusinessConsultantLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Accountants", href: ACCOUNTANTS_PATH, status: "live", description: "Bookkeeping and administratie discovery." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Tax advice and filing strategy support." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Long-term financial planning support." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Regulated mortgage advice for buyers." },
  ] satisfies BusinessConsultantLink[],
  exploreNextCards: [
    {
      label: "Accountants",
      href: ACCOUNTANTS_PATH,
      status: "live",
      description: "Pair strategy work with clean bookkeeping and BTW admin.",
    },
    {
      label: "Tax advisors",
      href: TAX_ADVISORS_PATH,
      status: "live",
      description: "When setup plans create tax advice and return strategy needs.",
    },
    {
      label: "ZZP Netherlands",
      href: ZZP_NETHERLANDS_PATH,
      status: "live",
      description: "Understand freelance status before locking a consulting package.",
    },
    {
      label: "Starting a business",
      href: STARTING_A_BUSINESS_PATH,
      status: "live",
      description: "Map KvK and first-year setup beside your consultant shortlist.",
    },
    {
      label: "Financial advisors",
      href: FINANCIAL_ADVISORS_PATH,
      status: "live",
      description: "Connect business strategy to longer-term money planning.",
    },
    {
      label: "Dutch Cities Guide",
      href: CITIES_HUB_PATH,
      status: "live",
      description: "City context for where you meet local facilitators and coaches.",
    },
  ] satisfies BusinessConsultantLink[],
};

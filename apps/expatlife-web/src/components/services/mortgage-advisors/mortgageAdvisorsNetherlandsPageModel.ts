export const MORTGAGE_ADVISORS_NETHERLANDS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const MORTGAGES_FOR_EXPATS_PATH = "/netherlands/housing/mortgages-netherlands-expats/" as const;
export const BUYING_HOUSE_NETHERLANDS_PATH = "/netherlands/housing/buying-a-house-netherlands/" as const;
export const BUY_VS_RENT_NETHERLANDS_PATH = "/netherlands/housing/buy-vs-rent-netherlands/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const SERVICES_HUB_PATH = "/netherlands/services/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;

export type MortgageAdvisorProvider = {
  name: string;
  slug: string;
  city: string;
  region: string;
  summary: string;
  expatSpecialization: string;
  languages: string[];
  onlineConsultations: boolean;
  inPersonAvailability: string;
  website: string;
  consultationType: string;
  advisorType: "Expat-focused" | "Independent broker" | "Digital-first" | "Large national" | "Boutique";
  citiesServed: string[];
  featured: boolean;
  verificationNote: string;
};

export type MortgageAdvisorLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

const VISUAL_VERSION_OVERRIDES: Partial<Record<string, string>> = {
  "comparison-matrix": "premium-v3",
  directory: "premium-v3",
  "lead-cta": "premium-v3",
};

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-mortgage-advisors-${name}-${VISUAL_VERSION_OVERRIDES[name] ?? "premium-v2"}.png`,
  alt,
  caption,
});

export const mortgageAdvisorsNetherlandsPage = {
  slug: "mortgage-advisors",
  path: MORTGAGE_ADVISORS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-08-09",
  seo: {
    title: "Mortgage Advisors in the Netherlands for Expats | Find Trusted Advisors",
    description:
      "Find trusted mortgage advisors in the Netherlands for expats and international professionals. Learn how Dutch mortgage advice works and compare providers.",
    keywords: [
      "mortgage advisors netherlands",
      "expat mortgage advisor netherlands",
      "mortgage broker netherlands expat",
      "dutch mortgage advisor",
      "expat mortgage netherlands",
      "highly skilled migrant mortgage",
      "mortgage broker amsterdam",
      "buying house netherlands expat",
      "independent mortgage advisor netherlands",
      "dutch mortgages expats",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Services · Mortgage advisors",
    pageTitle: "Mortgage Advisors in the Netherlands for Expats",
    subtitle:
      "Find trusted mortgage advisors who help expats and international professionals navigate Dutch mortgages, home buying and financing in the Netherlands.",
    primaryCta: { label: "Compare Mortgage Advisors", href: "#directory" },
    secondaryCta: { label: "Learn About Dutch Mortgages", href: MORTGAGES_FOR_EXPATS_PATH },
    chips: ["AFM-regulated advice", "Expat mortgage files", "Independent vs bank-linked", "Provider directory"],
    image: {
      src: "/images/heroes/netherlands-mortgage-advisors-hero-v1.png",
      alt: "Photorealistic editorial image of an expat couple reviewing Dutch property financing with a mortgage advisor in a modern Dutch residential setting, with laptop, calculator and paperwork on a table.",
    },
  },
  visuals: {
    role: visual(
      "role",
      "Infographic showing what mortgage advisors help with: affordability, lender comparison, application support, buying team coordination and expat terminology.",
      "Mortgage advisors often sit between your buying budget, lender criteria, documents and the wider home-buying team."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six facts about mortgage advisors in the Netherlands for expats.",
      "Use this snapshot before shortlisting providers: advisor scope, independence and fees differ."
    ),
    advisorServices: visual(
      "advisor-services",
      "Infographic showing the service scope of a mortgage advisor: budget, comparison, file preparation and coordination.",
      "Advisor scope varies by provider — confirm whether support includes advice, mediation, insurance and coordination."
    ),
    independentVsBank: visual(
      "independent-vs-bank",
      "Infographic comparing independent mortgage advisors and bank-linked advisors in the Netherlands.",
      "Independent and bank-linked advice can both be legitimate, but the comparison scope is different."
    ),
    expatEligibility: visual(
      "expat-eligibility",
      "Infographic explaining expat mortgage eligibility factors: income, contract, residence, savings, debts and property.",
      "Lenders assess the file, not just nationality; expat cases often need clearer documentation."
    ),
    fees: visual(
      "fees",
      "Infographic explaining Dutch mortgage advisor fee models: fixed package, consultation or complex file scope.",
      "Ask what is included, what is excluded, when payment is due and what happens if the mortgage is not completed."
    ),
    documents: visual(
      "documents",
      "Infographic listing documents mortgage advisors often request from expats.",
      "Exact requirements vary by lender, but these records commonly start the mortgage file."
    ),
    challenges: visual(
      "challenges",
      "Infographic showing common expat mortgage challenges: temporary contracts, visa uncertainty, terminology, overbidding, foreign finances and fast markets.",
      "Use early advisor calls to identify where your file may need extra explanation."
    ),
    cityCoverage: visual(
      "city-coverage",
      "Infographic showing mortgage advisor city coverage across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven and other Dutch cities.",
      "Many advisors work online nationwide, while local knowledge can still matter in competitive markets."
    ),
    directory: visual(
      "directory",
      "Infographic showing a neutral provider directory workflow: shortlist, compare, verify and decide.",
      "Provider discovery should lead to verification, not blind trust in a ranking."
    ),
    comparisonMatrix: visual(
      "comparison-matrix",
      "Infographic comparison matrix for mortgage advisors showing lender scope, expat fit, languages, online availability and fees.",
      "Compare advisors by scope and process quality before you compare marketing claims."
    ),
    questions: visual(
      "questions",
      "Infographic of questions expats should ask mortgage advisors before choosing one.",
      "Good questions reveal independence, lender scope, fees, language support and expat file experience."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common mortgage advisor FAQ topics: need, eligibility, cost, independence, temporary contracts and online consultations.",
      "FAQ answers should help users identify the next fact, document or verification step."
    ),
    housingGuides: visual(
      "housing-guides",
      "Infographic showing how mortgage advisor research connects to buy vs rent, mortgages, buying process, property tax, cities and housing costs.",
      "Advisor research should sit inside the bigger buying decision: budget, city, taxes and timing."
    ),
    leadCta: visual(
      "lead-cta",
      "Infographic showing how to shortlist mortgage advisors before booking: pick providers, ask scope, check fees and verify credentials.",
      "Turn provider discovery into a structured shortlist before you share sensitive documents."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official trust sources for mortgage advisor checks: AFM, Government.nl and Business.gov.nl.",
      "Verify credentials, independence, fees and advisory scope before proceeding."
    ),
    servicesEcosystem: visual(
      "services-ecosystem",
      "Infographic showing services around a Dutch home purchase: mortgage advisor, bank, real estate agent, tax advisor, notary and financial advisor.",
      "Mortgage advice is one part of the home-buying support ecosystem."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic showing a research path after comparing mortgage advisors: mortgage guide, buying guide, buy vs rent, property tax and cities.",
      "Continue from advisor discovery into budget, buying process, tax context and city choice."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting mortgage advisor research to buying a house, mortgages for expats, buy vs rent, property tax and Dutch cities.",
      "Mortgage advice connects naturally into buying process, city choice, taxes and housing costs."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#advisor-role", label: "What advisors do" },
    { href: "#independent-vs-bank", label: "Advisor types" },
    { href: "#expat-mortgages", label: "Expat mortgages" },
    { href: "#fees", label: "Fees" },
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
    heading: "Why Expats Use Mortgage Advisors in the Netherlands",
    paragraphs: [
      "Many expats use mortgage advisors because Dutch mortgage systems can feel unfamiliar, documentation requirements can be complex, and lender criteria differ across banks, insurers and other mortgage providers.",
      "A mortgage advisor often helps translate your personal situation into a Dutch lender file: income, contract type, residence status, savings, debts, property value, insurance questions and timing with the notary.",
      "This directory is not financial advice and does not rank providers. It helps you understand the market, compare advisor models and ask better questions before choosing professional support.",
    ],
    links: [
      { label: "Mortgages for Expats", href: MORTGAGES_FOR_EXPATS_PATH },
      { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH },
      { label: "Buy vs Rent", href: BUY_VS_RENT_NETHERLANDS_PATH },
      { label: "Housing Hub", href: HOUSING_HUB_PATH },
    ],
  },
  snapshotCards: [
    { label: "Advisor market", value: "Common", note: "Mortgage advice is widely used in Dutch home buying." },
    { label: "Typical process", value: "4–8+ weeks", note: "From accepted offer to lender approval varies by file and lender." },
    { label: "Provider models", value: "2 main types", note: "Independent brokers and bank-linked advisors have different scope." },
    { label: "Documents", value: "7+ records", note: "ID, permit, contract, salary slips, bank statements and more." },
    { label: "Own funds", value: "Often needed", note: "Buyer costs and appraisal gaps may sit outside the mortgage." },
    { label: "Guarantee", value: "None", note: "No advisor can guarantee lender approval." },
  ],
  advisorServices: [
    { title: "Affordability estimates", body: "Indicative borrowing capacity before you start viewings, including income, debts and sometimes 30% ruling context." },
    { title: "Mortgage comparisons", body: "Explanation of interest periods, repayment structures, NHG where relevant, conditions and lender differences." },
    { title: "Application support", body: "Document checklist, lender submission, follow-up questions and progress tracking after an offer is accepted." },
    { title: "Expat documentation guidance", body: "Support translating temporary contracts, residence permits, foreign income or employer statements into lender requirements." },
    { title: "Insurance discussions", body: "Explanation of term life, disability or related insurance topics when they are part of the advice scope." },
    { title: "Buying-team coordination", body: "Communication with real estate agents, valuation parties, notaries and sometimes tax or insurance specialists." },
  ],
  advisorTypeComparison: [
    {
      type: "Independent mortgage advisor",
      scope: "Can compare products across multiple lenders where available.",
      usefulWhen: "Your case may need lender choice: temporary contract, international income, highly skilled migrant status or specific affordability goals.",
      questions: ["How many lenders do you compare?", "Are any providers excluded?", "How do you disclose fees or commissions?"],
    },
    {
      type: "Bank-linked advisor",
      scope: "Focuses on the mortgage products from one bank or lender group.",
      usefulWhen: "You already bank with the lender, want a direct route or prefer a familiar institution.",
      questions: ["Which products are you allowed to advise on?", "What happens if this lender declines?", "Can I compare this offer elsewhere?"],
    },
  ],
  expatMortgageProfiles: [
    { profile: "Highly skilled migrant", whatCanMatter: "Residence permit, employer, salary threshold context, contract, 30% ruling details.", exampleQuestion: "Will lenders count my full salary and 30% ruling benefit?" },
    { profile: "EU citizen employee", whatCanMatter: "Dutch employment contract, probation period, income stability, debts and savings.", exampleQuestion: "Can I get capacity before making offers?" },
    { profile: "Temporary contract", whatCanMatter: "Employer statement, employment history, industry, probation status and lender appetite.", exampleQuestion: "Which lenders accept my contract type?" },
    { profile: "Foreign income or assets", whatCanMatter: "Currency, tax records, employer location, foreign debts and documentation format.", exampleQuestion: "Can this income be used and how should I document it?" },
  ],
  feeExamples: [
    { item: "Initial intake", typicalRange: "Often free to paid", whatToConfirm: "Whether the first call is no-obligation and what is assessed." },
    { item: "Advice + mediation package", typicalRange: "Provider-specific fixed fee", whatToConfirm: "Whether application handling, lender contact and insurance advice are included." },
    { item: "Complex file surcharge", typicalRange: "May apply", whatToConfirm: "Whether self-employment, foreign income, buy-to-let or divorce changes the fee." },
    { item: "Third-party costs", typicalRange: "Separate", whatToConfirm: "Valuation, notary, translator, NHG, bank and tax-related costs." },
  ],
  documentChecklist: [
    { document: "Passport or national ID", why: "Identity verification for advisor and lender onboarding." },
    { document: "Residence permit", why: "Important for non-EU applicants and lender policy checks." },
    { document: "Employment contract", why: "Shows contract type, salary, probation and employment conditions." },
    { document: "Recent salary slips", why: "Used to verify current income and payroll details." },
    { document: "Employer statement", why: "Often requested for temporary contracts or lender underwriting." },
    { document: "Bank statements", why: "Can show savings, debts, regular payments and own-funds evidence." },
    { document: "Tax or annual income records", why: "Relevant for self-employment, foreign income, 30% ruling or bonus patterns." },
  ],
  challengeCards: [
    { title: "Temporary contracts", body: "A temporary contract does not automatically block a mortgage, but lender treatment can differ." },
    { title: "Visa uncertainty", body: "Permit type, expiry and long-term residence plans may need clear explanation." },
    { title: "Dutch terminology", body: "Annuity, linear, NHG, bouwdepot and tax deduction rules can be unfamiliar." },
    { title: "Overbidding pressure", body: "Fast markets can push buyers to bid before capacity and own-funds gaps are clear." },
    { title: "Foreign finances", body: "Foreign income, debts and assets may need translation, conversion or extra evidence." },
    { title: "Unfamiliar tax rules", body: "Mortgage interest deduction and property taxes depend on personal use and official rules." },
    { title: "Comparing lenders", body: "Different lenders may take different views on the same expat file." },
    { title: "Buying quickly", body: "Accepted offers can trigger tight timelines for valuation, application and notary steps." },
  ],
  cityCards: [
    { city: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "High competition, apartments and expat buyer demand." },
    { city: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Mixed housing stock and broad international community." },
    { city: "The Hague", href: "/netherlands/cities/the-hague/", note: "International organisations, families and coastal districts." },
    { city: "Utrecht", href: "/netherlands/cities/utrecht/", note: "Central location and competitive commuter market." },
    { city: "Eindhoven", href: "/netherlands/cities/eindhoven/", note: "Tech workers, highly skilled migrants and regional growth." },
    { city: "Haarlem", href: "/netherlands/cities/haarlem/", note: "Amsterdam-area alternative with premium family demand." },
    { city: "Leiden", href: "/netherlands/cities/leiden/", note: "University city with compact housing market." },
    { city: "Delft", href: "/netherlands/cities/delft/", note: "Tech and university-linked buyer interest." },
    { city: "Groningen", href: "/netherlands/cities/groningen/", note: "Northern city with student and professional demand." },
    { city: "Arnhem", href: "/netherlands/cities/arnhem/", note: "Eastern Netherlands option with regional affordability differences." },
    { city: "Nijmegen", href: "/netherlands/cities/nijmegen/", note: "University and healthcare ecosystem." },
    { city: "Maastricht", href: "/netherlands/cities/maastricht/", note: "Cross-border region with international residents." },
  ],
  providers: [
    {
      name: "Expat Mortgages",
      slug: "expat-mortgages",
      city: "Amsterdam",
      region: "Netherlands-wide",
      summary: "Independent mortgage brokerage focused on international clients buying property in the Netherlands.",
      expatSpecialization: "Works specifically with expats and provides English-language guidance through the mortgage process.",
      languages: ["English"],
      onlineConsultations: true,
      inPersonAvailability: "Offices and flexible meeting options; verify current locations directly.",
      website: "https://expatmortgages.nl/",
      consultationType: "Initial consultation and full mortgage-advice process",
      advisorType: "Expat-focused",
      citiesServed: ["Amsterdam", "The Hague", "Netherlands-wide"],
      featured: true,
      verificationNote: "Public materials state AFM supervision and Wft register details; verify current status directly.",
    },
    {
      name: "Viisi Expats",
      slug: "viisi-expats",
      city: "Amsterdam",
      region: "Netherlands-wide",
      summary: "Full-service mortgage advice brand with expat-focused pages and offices across the Netherlands.",
      expatSpecialization: "Positions around expat mortgage advice, online document upload, lender comparison and full-process guidance.",
      languages: ["English", "Dutch"],
      onlineConsultations: true,
      inPersonAvailability: "Offices in multiple Dutch cities; verify current city coverage.",
      website: "https://www.viisi-expats.nl/",
      consultationType: "No-obligation preliminary consultation and full-service mortgage advice",
      advisorType: "Independent broker",
      citiesServed: ["Amsterdam", "The Hague", "Utrecht", "Netherlands-wide"],
      featured: true,
      verificationNote: "Public pages state independent comparison across many lenders; confirm current scope and fees.",
    },
    {
      name: "Hanno",
      slug: "hanno",
      city: "Utrecht",
      region: "Online / Netherlands-wide",
      summary: "Modern mortgage-advice organisation combining personal mortgage advice with an online working method.",
      expatSpecialization: "Has dedicated expat mortgage pages and positions around independent comparison and digital process efficiency.",
      languages: ["English", "Dutch"],
      onlineConsultations: true,
      inPersonAvailability: "Primarily online-oriented; verify meeting options directly.",
      website: "https://www.hanno.nl/expat-mortgages/",
      consultationType: "Free appointment or online consultation, followed by mortgage advice package",
      advisorType: "Digital-first",
      citiesServed: ["Utrecht", "Online", "Netherlands-wide"],
      featured: true,
      verificationNote: "Public pages state independent comparison across 43+ lenders; verify current lender panel and fees.",
    },
    {
      name: "Mister Mortgage",
      slug: "mister-mortgage",
      city: "Amsterdam",
      region: "Netherlands-wide",
      summary: "Expat-focused mortgage broker offering mortgage advice, pre-approval support and home-buying process guidance.",
      expatSpecialization: "Specialises in expat mortgages and explains broker-versus-bank choice for international buyers.",
      languages: ["English"],
      onlineConsultations: true,
      inPersonAvailability: "Online consultations; verify current in-person options directly.",
      website: "https://mistermortgage.nl/",
      consultationType: "Introductory call and mortgage advisory process",
      advisorType: "Expat-focused",
      citiesServed: ["Amsterdam", "Online", "Netherlands-wide"],
      featured: true,
      verificationNote: "Public pages state access to multiple lenders; confirm advisory scope and current fees.",
    },
    {
      name: "Expat Mortgage Platform",
      slug: "expat-mortgage-platform",
      city: "Rotterdam",
      region: "Netherlands-wide",
      summary: "Rotterdam-based expat mortgage platform offering independent mortgage guidance for internationals.",
      expatSpecialization: "Focuses on English-language expat mortgage cases, including temporary contracts and non-standard files.",
      languages: ["English", "Dutch"],
      onlineConsultations: true,
      inPersonAvailability: "Rotterdam office and remote appointments; verify current availability.",
      website: "https://expatmortgageplatform.nl/",
      consultationType: "Free intake and full mortgage process support",
      advisorType: "Expat-focused",
      citiesServed: ["Rotterdam", "Online", "Netherlands-wide"],
      featured: false,
      verificationNote: "Public materials state independent advice and major-lender comparison; verify current status directly.",
    },
    {
      name: "FVB de Boer Mortgages",
      slug: "fvb-de-boer",
      city: "The Hague",
      region: "Amsterdam / The Hague / online",
      summary: "Independent mortgage advisor focused on clear guidance for expats buying a home in the Netherlands.",
      expatSpecialization: "Public pages highlight expat mortgage guidance, lender comparison and English-language consultations.",
      languages: ["English", "Dutch"],
      onlineConsultations: true,
      inPersonAvailability: "The Hague and Amsterdam offices plus phone or video appointments.",
      website: "https://fvbdeboer.nl/",
      consultationType: "Free consultation and independent mortgage advice",
      advisorType: "Boutique",
      citiesServed: ["The Hague", "Amsterdam", "Online"],
      featured: false,
      verificationNote: "Public pages state independent advice; confirm credentials, fees and lender scope directly.",
    },
    {
      name: "TSS Mortgages",
      slug: "tss-mortgages",
      city: "Netherlands",
      region: "Netherlands-wide",
      summary: "Mortgage broker for expat mortgages with a focus on comparing multiple banks and lenders.",
      expatSpecialization: "Public pages describe specialist expat mortgage support and qualified/certified advisors.",
      languages: ["English", "Dutch"],
      onlineConsultations: true,
      inPersonAvailability: "Verify current meeting locations directly.",
      website: "https://mortgage.nl/",
      consultationType: "Mortgage advisory service for expats",
      advisorType: "Independent broker",
      citiesServed: ["Netherlands-wide", "Online"],
      featured: false,
      verificationNote: "Public materials mention SEH membership; verify current regulatory and certification status.",
    },
    {
      name: "Expat Mortgage Advisor",
      slug: "expat-mortgage-advisor",
      city: "Netherlands",
      region: "Netherlands-wide",
      summary: "Independent mortgage-advice provider for expats, with guidance through the Dutch home-buying process.",
      expatSpecialization: "Positions around certified mortgage advisors familiar with buying a house in the Netherlands as an expat.",
      languages: ["English"],
      onlineConsultations: true,
      inPersonAvailability: "Verify current locations and remote options directly.",
      website: "https://expatmortgageadvisor.nl/",
      consultationType: "Mortgage advice and lender comparison",
      advisorType: "Expat-focused",
      citiesServed: ["Netherlands-wide", "Online"],
      featured: false,
      verificationNote: "Public pages state independent advice and certified advisors; verify current credentials.",
    },
    {
      name: "Hypotheek Visie",
      slug: "hypotheek-visie",
      city: "Multiple cities",
      region: "National",
      summary: "Large Dutch mortgage-advice organisation with expat information pages and nationwide office coverage.",
      expatSpecialization: "Provides expat buying-a-house information and independent advice through local advisors.",
      languages: ["Dutch", "English availability varies by office"],
      onlineConsultations: true,
      inPersonAvailability: "More than 60 branches according to public materials; verify the nearest office.",
      website: "https://hypotheekvisie.nl/mijn-situatie/expat",
      consultationType: "Personal advice meeting and mortgage advisory process",
      advisorType: "Large national",
      citiesServed: ["Eindhoven", "Multiple cities", "Online"],
      featured: false,
      verificationNote: "Public pages state independent advice and broad lender comparison; confirm English support by office.",
    },
    {
      name: "De Hypotheker",
      slug: "de-hypotheker",
      city: "Multiple cities",
      region: "National",
      summary: "Large Dutch mortgage-advice chain with branches across the Netherlands and mortgage comparison services.",
      expatSpecialization: "May be relevant for expats who want a large national advisor; English support can vary by branch.",
      languages: ["Dutch", "English availability varies by office"],
      onlineConsultations: true,
      inPersonAvailability: "Large branch network; verify local office expertise and language support.",
      website: "https://www.hypotheker.nl/",
      consultationType: "Branch or online mortgage advice",
      advisorType: "Large national",
      citiesServed: ["Multiple cities", "Online", "Netherlands-wide"],
      featured: false,
      verificationNote: "Verify local office scope, regulatory status, language support and fees before proceeding.",
    },
  ] satisfies MortgageAdvisorProvider[],
  comparisonTable: [
    { advisor: "Expat Mortgages", citiesServed: "Amsterdam, The Hague, Netherlands-wide", expatFocus: "Dedicated expat focus", languages: "English", onlineConsultations: "Yes", advisorType: "Expat-focused independent broker" },
    { advisor: "Viisi Expats", citiesServed: "Multiple Dutch cities", expatFocus: "Dedicated expat pages", languages: "English, Dutch", onlineConsultations: "Yes", advisorType: "Independent broker" },
    { advisor: "Hanno", citiesServed: "Utrecht, online, Netherlands-wide", expatFocus: "Dedicated expat pages", languages: "English, Dutch", onlineConsultations: "Yes", advisorType: "Digital-first independent advisor" },
    { advisor: "Mister Mortgage", citiesServed: "Amsterdam, online, Netherlands-wide", expatFocus: "Dedicated expat focus", languages: "English", onlineConsultations: "Yes", advisorType: "Expat-focused broker" },
    { advisor: "Expat Mortgage Platform", citiesServed: "Rotterdam, online, Netherlands-wide", expatFocus: "Dedicated expat focus", languages: "English, Dutch", onlineConsultations: "Yes", advisorType: "Expat-focused independent advisor" },
    { advisor: "FVB de Boer Mortgages", citiesServed: "The Hague, Amsterdam, online", expatFocus: "Dedicated expat focus", languages: "English, Dutch", onlineConsultations: "Yes", advisorType: "Boutique independent advisor" },
    { advisor: "TSS Mortgages", citiesServed: "Netherlands-wide, online", expatFocus: "Dedicated expat focus", languages: "English, Dutch", onlineConsultations: "Yes", advisorType: "Independent broker" },
    { advisor: "Hypotheek Visie", citiesServed: "Multiple cities, online", expatFocus: "Expat information pages", languages: "Dutch, English varies", onlineConsultations: "Yes", advisorType: "Large national advisor" },
  ],
  questionsToAsk: [
    "Do you work with expats regularly?",
    "Which lenders do you compare, and are any excluded?",
    "Can you help with temporary contracts, probation or employer statements?",
    "What languages do you support during advice and document review?",
    "How are fees structured and when are they due?",
    "Do you assist with the full buying process after an offer is accepted?",
    "Can you explain annuity, linear, NHG and interest-period trade-offs clearly?",
    "Do you coordinate with notaries, valuations, real estate agents or tax advisors?",
  ],
  relatedHousingGuides: [
    { label: "Mortgages for Expats", href: MORTGAGES_FOR_EXPATS_PATH, status: "live", description: "Eligibility, borrowing capacity, mortgage types and application steps for internationals." },
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Full expat guide to buying Dutch property, costs, bidding and notary transfer." },
    { label: "Buy vs Rent", href: BUY_VS_RENT_NETHERLANDS_PATH, status: "live", description: "Decision guide before committing to a Dutch home purchase." },
    { label: "Property Tax Netherlands", href: "/netherlands/taxes/property-tax-netherlands/", status: "live", description: "Transfer tax, WOZ value and recurring homeowner costs." },
    { label: "Housing Costs Netherlands", href: "/netherlands/housing/housing-costs-netherlands/", status: "live", description: "Typical housing costs for renters and buyers." },
  ] satisfies MortgageAdvisorLink[],
  leadCta: {
    heading: "Need Help Finding the Right Mortgage Advisor?",
    body: "Use the directory to compare provider scope, city coverage, language support and consultation model. Then request an introduction or contact shortlisted advisors directly to verify fees, credentials and fit.",
    primaryCta: { label: "Compare Advisors", href: "#directory" },
    secondaryCta: { label: "Request Introduction", href: "/contact/?topic=mortgage-advisors-netherlands" },
  },
  faqs: [
    { q: "Do expats need mortgage advisors in the Netherlands?", a: "Expats are not choosing an advisor because they are foreign by default; they often use one because Dutch lender criteria, documents, terminology and buying timelines can be unfamiliar. Whether you need one depends on your file and confidence level." },
    { q: "Can highly skilled migrants get mortgages in the Netherlands?", a: "Many highly skilled migrants can obtain Dutch mortgages, but approval depends on income, contract, residence status, debts, property value and lender policy. No directory or advisor can guarantee approval." },
    { q: "What do mortgage advisors cost?", a: "Mortgage advisors may charge fixed advice-and-mediation packages, consultation fees or extra fees for complex files. Pricing changes by provider, so confirm current fees and scope directly before signing an advisory agreement." },
    { q: "Are mortgage advisors independent?", a: "Some advisors are independent and compare multiple lenders. Others are bank-linked and advise on one lender's products. Ask which lenders are compared and how independence is disclosed." },
    { q: "Can advisors help with temporary contracts?", a: "Some advisors regularly work with temporary contracts and employer statements. A temporary contract does not automatically mean rejection, but lender criteria vary and the file may require extra documentation." },
    { q: "Do advisors compare lenders?", a: "Independent mortgage advisors usually compare multiple lenders, while bank-linked advisors focus on their own products. Ask the advisor for their lender panel and whether any lender types are excluded." },
    { q: "Is Dutch mortgage advice regulated?", a: "Mortgage advice is a regulated financial service in the Netherlands. Consumers should verify AFM/Wft status, advisor credentials, fee disclosures and advisory agreements before proceeding." },
    { q: "Can mortgage consultations happen online?", a: "Many providers offer video or phone consultations and online document upload, while others also have offices. Confirm the consultation format, document security and whether in-person meetings are available if you prefer them." },
  ],
  officialSources: [
    { label: "AFM", href: "https://www.afm.nl/en", description: "Dutch Authority for the Financial Markets: consumer information and regulatory context for financial advice." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information on housing, consumers and living in the Netherlands." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Official business information that can help users understand regulated service-provider context." },
  ],
  relatedGuides: [
    { label: "Mortgages for Expats", href: MORTGAGES_FOR_EXPATS_PATH, status: "live", description: "Dutch mortgage eligibility, borrowing capacity and application basics." },
    { label: "Buying a House Netherlands", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "End-to-end home-buying guide for expats." },
    { label: "Buy vs Rent Netherlands", href: BUY_VS_RENT_NETHERLANDS_PATH, status: "live", description: "Compare renting flexibility with buying stability." },
    { label: "Property Tax Netherlands", href: "/netherlands/taxes/property-tax-netherlands/", status: "live", description: "Tax and municipal cost context for homeowners." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare cities before choosing where to buy." },
  ] satisfies MortgageAdvisorLink[],
  servicesLinks: [
    { label: "All Services", href: SERVICES_HUB_PATH, status: "live", description: "Browse service providers for expats in the Netherlands." },
    { label: "Banks", href: "/netherlands/services/banks/", status: "live", description: "Compare Dutch banks and banking setup for expats." },
    { label: "Tax Advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Tax support where housing, mortgage interest and relocation overlap." },
    { label: "Real Estate Agents", href: "/netherlands/services/real-estate-agents/", status: "comingSoon", description: "Buying-agent support for search, bidding and local market insight." },
    { label: "Financial Advisors", href: "/netherlands/services/financial-advisors/", status: "live", description: "Broader financial planning beyond the mortgage transaction." },
  ] satisfies MortgageAdvisorLink[],
  exploreNextCards: [
    { label: "Buying a House", href: BUYING_HOUSE_NETHERLANDS_PATH, status: "live", description: "Understand the buying process before you choose providers." },
    { label: "Mortgages for Expats", href: MORTGAGES_FOR_EXPATS_PATH, status: "live", description: "Go deeper on eligibility, capacity and mortgage types." },
    { label: "Buy vs Rent", href: BUY_VS_RENT_NETHERLANDS_PATH, status: "live", description: "Pressure-test whether buying fits your relocation horizon." },
    { label: "Housing Costs", href: "/netherlands/housing/housing-costs-netherlands/", status: "live", description: "Plan recurring housing costs beyond mortgage payments." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare city markets, commute and lifestyle trade-offs." },
  ] satisfies MortgageAdvisorLink[],
};

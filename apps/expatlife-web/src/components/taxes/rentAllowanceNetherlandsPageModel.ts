import { rentAllowanceReference2026 } from "./rentAllowanceReference2026";

export const RENT_ALLOWANCE_NETHERLANDS_PATH = "/netherlands/taxes/rent-allowance-netherlands/" as const;
export const HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH = "/netherlands/taxes/healthcare-allowance-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const HOUSING_HUB_PATH = "/netherlands/housing/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const RENT_AFFORDABILITY_TOOL_PATH = "/netherlands/housing/tools/rent-affordability-calculator/" as const;
export const EXPAT_TAXES_NETHERLANDS_PATH = "/netherlands/taxes/expat-taxes-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const BONUS_TAX_NETHERLANDS_PATH = "/netherlands/taxes/bonus-tax-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const MUNICIPALITY_REGISTRATION_PATH = "/netherlands/municipality-registration-netherlands/" as const;
export const BSN_REGISTRATION_PATH = "/netherlands/bsn-registration/" as const;

export type RentAllowanceNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const rentAllowanceNetherlandsPage = {
  slug: "rent-allowance-netherlands",
  path: RENT_ALLOWANCE_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-07-05",
  seo: {
    title: "Rent Allowance in the Netherlands (Huurtoeslag) | Expat Guide",
    description:
      "Learn how rent allowance (huurtoeslag) works in the Netherlands, who may qualify, how to apply and what expats should know about Dutch housing support.",
    keywords: [
      "rent allowance netherlands",
      "huurtoeslag netherlands",
      "housing allowance netherlands",
      "rent subsidy netherlands",
      "dutch rent allowance",
      "huurtoeslag expats",
      "rent allowance expats",
      "rent benefit netherlands",
      "apply for huurtoeslag",
      "housing allowance expats netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes · Housing benefits",
    pageTitle: "Rent Allowance in the Netherlands",
    subtitle:
      "Understand how Dutch rent allowance (huurtoeslag) works — 2026 thresholds, who may qualify, indicative amounts and how to apply through Dienst Toeslagen.",
    primaryCta: { label: "Understand Rent Allowance", href: "#intro" },
    secondaryCta: { label: "Explore Housing Guides", href: HOUSING_HUB_PATH },
    chips: ["Huurtoeslag", "Income & rent", "Property rules", "Dienst Toeslagen"],
    image: {
      src: "/images/heroes/netherlands-rent-allowance-netherlands-hero-v3.png",
      alt: "Photorealistic editorial photo of an international couple reviewing Dutch rental paperwork at a bright apartment table, with canal houses and bicycles visible through the window.",
    },
  },
  infographics: {
    introFlow: {
      src: "/images/infographics/netherlands-rent-allowance-intro-flow-infographic-v3.png",
      alt: "Infographic explaining Dutch rent allowance (huurtoeslag): housing support through Toeslagen, income and rent tests, and property requirements.",
      caption: "Huurtoeslag supports qualifying rent — eligibility depends on income, rent level, property type and household, not nationality alone.",
    },
    snapshot: {
      src: "/images/infographics/netherlands-rent-allowance-snapshot-infographic-v3.png",
      alt: "Infographic snapshot of Dutch rent allowance at a glance: purpose, income test, rent limits, property rules and application channel.",
      caption: "Use this snapshot before applying — thresholds change with policy and only official sources determine entitlement.",
    },
    whyExists: {
      src: "/images/infographics/netherlands-rent-allowance-why-exists-infographic-v3.png",
      alt: "Infographic explaining why rent allowance exists in the Netherlands: social and private rental market context and housing affordability support.",
      caption: "The benefit helps eligible residents with housing costs in a competitive Dutch rental market.",
    },
    whoQualifies: {
      src: "/images/infographics/netherlands-rent-allowance-who-qualifies-infographic-v3.png",
      alt: "Infographic overview of who may qualify for huurtoeslag: residence, age, income, rent, property and household composition.",
      caption: "Qualification is a bundle of conditions — confirm each on official toeslagen guidance.",
    },
    expats: {
      src: "/images/infographics/netherlands-rent-allowance-expats-infographic-v3.png",
      alt: "Infographic showing expat rent allowance context: registration, rental contracts, highly skilled migrants and official confirmation steps.",
      caption: "Expats follow the same benefit framework — but move timing and housing setup add planning complexity.",
    },
    students: {
      src: "/images/infographics/netherlands-rent-allowance-students-infographic-v3.png",
      alt: "Infographic explaining huurtoeslag for students: qualifying rentals, part-time income, shared housing and reporting changes.",
      caption: "Student status alone does not guarantee allowance — income, property and household tests still apply.",
    },
    properties: {
      src: "/images/infographics/netherlands-rent-allowance-properties-infographic-v3.png",
      alt: "Infographic explaining which Dutch rental properties may qualify for huurtoeslag: independent accommodation, registration, rent limits and shared housing.",
      caption: "Property requirements are often the biggest source of confusion — verify your rental on official guidance.",
    },
    income: {
      src: "/images/infographics/netherlands-rent-allowance-income-infographic-v3.png",
      alt: "Infographic explaining why income matters for huurtoeslag: personal, partner and household income tests.",
      caption: "Income tests use official definitions — payslip gross alone may not match the toeslagen income picture.",
    },
    howMuch: {
      src: "/images/infographics/netherlands-rent-allowance-how-much-infographic-v3.png",
      alt: "Infographic showing how rent allowance amounts are determined through income, rent and household rules — use official calculators for personal figures.",
      caption: "Allowance depends on income, rent and household situation — use official tools for planning, not hardcoded blog figures.",
    },
    apply: {
      src: "/images/infographics/netherlands-rent-allowance-apply-infographic-v3.png",
      alt: "Infographic flow for applying for Dutch rent allowance through Dienst Toeslagen and Mijn Toeslagen.",
      caption: "Apply and update through official toeslagen channels — this guide does not submit applications.",
    },
    situationChanges: {
      src: "/images/infographics/netherlands-rent-allowance-situation-changes-infographic-v3.png",
      alt: "Infographic explaining life changes that affect huurtoeslag: job changes, moves, partner income and relationship updates.",
      caption: "Report changes promptly — overpayment can lead to repayment through Dienst Toeslagen.",
    },
    mistakes: {
      src: "/images/infographics/netherlands-rent-allowance-mistakes-infographic-v3.png",
      alt: "Infographic summarising common expat mistakes with huurtoeslag: non-qualifying property, wrong income, shared housing and late updates.",
      caption: "Conservative planning and official confirmation reduce common expat rent allowance mistakes.",
    },
    compareBenefits: {
      src: "/images/infographics/netherlands-rent-allowance-compare-benefits-infographic-v3.png",
      alt: "Infographic comparing rent allowance with healthcare allowance and other Dutch toeslagen benefits.",
      caption: "Each toeslag has separate rules — qualifying for one does not automatically mean qualifying for others.",
    },
    housingMarket: {
      src: "/images/infographics/netherlands-rent-allowance-housing-market-infographic-v3.png",
      alt: "Infographic linking huurtoeslag to Dutch housing costs across major cities and rental market context.",
      caption: "Housing affordability varies by city — connect allowance planning to local rent reality.",
    },
    questions: {
      src: "/images/infographics/netherlands-rent-allowance-questions-infographic-v3.png",
      alt: "Infographic summarising common expat questions about Dutch rent allowance eligibility, properties, partners and applications.",
      caption: "Use these prompts when planning — then confirm on official sources or with qualified advice.",
    },
    relatedGuides: {
      src: "/images/infographics/netherlands-rent-allowance-related-guides-infographic-v3.png",
      alt: "Infographic linking to related housing and tax guides: renting, housing hub, healthcare allowance and expat taxes.",
      caption: "Connect huurtoeslag planning to housing search and broader relocation context.",
    },
    services: {
      src: "/images/infographics/netherlands-rent-allowance-services-infographic-v3.png",
      alt: "Infographic showing professional services for rent allowance questions: relocation, rental agencies, housing specialists and tax advisors.",
      caption: "Use professionals for personal entitlement questions — this guide is orientation only.",
    },
    officialSources: {
      src: "/images/infographics/netherlands-rent-allowance-official-sources-infographic-v3.png",
      alt: "Infographic map of official Dutch rent allowance sources: Belastingdienst Toeslagen, Government.nl, Business.gov.nl and Mijn Toeslagen.",
      caption: "Verify current rent limits, income caps and rules on official government sources before applying.",
    },
    exploreNext: {
      src: "/images/infographics/netherlands-rent-allowance-explore-next-infographic-v3.png",
      alt: "Infographic linking to next-step guides: renting in the Netherlands, healthcare allowance, cities and moving guide.",
      caption: "Move from huurtoeslag concepts into housing search, city comparison and relocation planning.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#thresholds-2026", label: "2026 figures" },
    { href: "#why-exists", label: "Why it exists" },
    { href: "#who-qualifies", label: "Who qualifies" },
    { href: "#expats", label: "Expats" },
    { href: "#students", label: "Students" },
    { href: "#properties", label: "Properties" },
    { href: "#income", label: "Income" },
    { href: "#how-much", label: "How much" },
    { href: "#apply", label: "Apply" },
    { href: "#situation-changes", label: "Changes" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#compare-benefits", label: "Compare benefits" },
    { href: "#housing-market", label: "Housing market" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Related guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  conceptCards: [
    { title: "Huurtoeslag", body: "A Dutch allowance (toeslag) that can help eligible residents pay qualifying housing costs." },
    { title: "Means-tested", body: "Eligibility and amount depend on income, rent level, property type and household — not nationality alone." },
    { title: "Official channel", body: "Applications and updates go through Dienst Toeslagen — not landlords and not third-party calculators." },
  ],
  snapshotCards: [
    { label: "Dutch name", value: "Huurtoeslag" },
    { label: "Max calc. rent (21+)", value: "€932.93 / month bare rent" },
    { label: "Youth calc. rent (<21)", value: "€498.20 / month" },
    { label: "Asset limit (single)", value: "€38,479 on 1 Jan 2026" },
    { label: "Own rent share", value: "~€200 / month (approx.)" },
    { label: "2026 eligibility change", value: "No max rent cap to qualify" },
  ],
  snapshotTips: [
    "From 2026, only bare rent (kale huur) counts — service costs are excluded from the calculation.",
    "You can qualify with rent above €932.93, but allowance is calculated only up to that cap (21+).",
    "Asset limits: €38,479 single, €76,958 with toeslagpartner, €38,479 per medebewoner.",
    "Indicative allowance often lands around €250–€300/month at modest income — verify in the official proefberekening.",
  ],
  reference2026: rentAllowanceReference2026,
  introChecklist: [
    "Confirm your rental is self-contained (zelfstandige woonruimte) and you are registered at the address.",
    "Use bare rent (kale huur) — from 2026 service costs no longer count toward huurtoeslag.",
    "Check 1 January assets against €38,479 (single) or €76,958 (with partner).",
    "Run the official proefberekening on toeslagen.nl with your toetsingsinkomen and rent.",
  ],
  newcomerSurprises: [
    "Dutch housing can be expensive in major cities — huurtoeslag exists but not every expat rental qualifies.",
    "Rent allowance is not automatic — you apply through Dienst Toeslagen and keep records updated.",
    "Many market-rate expat apartments in Amsterdam or Utrecht may fall outside typical huurtoeslag rules.",
    "Nationality alone does not decide eligibility — income, rent, property and registration do.",
  ],
  whyExistsTips: [
    "The Dutch housing market mixes social housing, private rentals and targeted support programs.",
    "Huurtoeslag helps make housing more affordable for eligible residents with qualifying rent.",
    "The benefit is administered as a toeslag through Dienst Toeslagen, separate from payroll withholding.",
    "Policy, rent limits and income caps change — always verify current rules on official sources.",
  ],
  whoQualifiesTips: [
    "Legal residency, age and registered address context matter alongside income and rent tests.",
    "Income is tested against single or combined (toeslagpartner) ceilings depending on household type.",
    "Your rental property must meet official property and rent-level requirements — not all homes qualify.",
    "Always verify your personal situation on Belastingdienst and Government.nl guidance.",
  ],
  qualificationCriteria: [
    { title: "Legal residency", body: "Lawful residence and BRP registration at your rental address for the months you claim." },
    { title: "Age 18+", body: "Generally 18 or older (limited exceptions). Youth rent cap €498.20 applies only when everyone in the household is under 21." },
    { title: "Income within limits", body: "Toetsingsinkomen is tapered — combined ceiling reference €60,525. Partner income counts when toeslagpartner rules apply." },
    { title: "Bare rent", body: "From 2026 only kale huur counts. Calculation capped at €932.93/month (21+) regardless of actual rent." },
    { title: "Assets on 1 January", body: "Max €38,479 single, €76,958 with partner, €38,479 per medebewoner — savings and investments count." },
    { title: "Self-contained home", body: "Independent accommodation (zelfstandige woonruimte) — shared rooms and many student setups often fail." },
  ],
  expatTips: [
    "Huurtoeslag depends on residence, income, rent and property — not nationality or expat label alone.",
    "Highly skilled migrants and international employees may qualify when they meet the same conditions.",
    "Move timing, partner abroad and temporary housing can complicate registration and property tests.",
    "Confirm property and household type before assuming eligibility from forum advice alone.",
  ],
  expatScenarios: [
    { title: "Highly skilled migrant", body: "Package pay and partner setup may affect combined income tests — model scenarios before signing a lease." },
    { title: "International employee", body: "Long-term residents with qualifying rentals and registration may apply — confirm property rules on official guidance." },
    { title: "Partner abroad", body: "Toeslagpartner rules differ from informal cohabitation — confirm household type with Dienst Toeslagen." },
    { title: "Recent arrival", body: "Temporary housing and registration timing can delay eligibility — plan BSN, address registration and qualifying lease in sequence." },
  ],
  studentTips: [
    "International and Dutch students may qualify when they meet the same income, rent and property tests as other residents.",
    "Part-time work, internships and parental support can affect the income picture used for huurtoeslag.",
    "Student housing and shared flats often fail independent accommodation tests — verify property rules before applying.",
    "Report income and household changes during the academic year — student status alone does not lock in allowance.",
  ],
  studentScenarios: [
    { title: "International student", body: "Registration at a qualifying address and lawful residence matter alongside income and property tests." },
    { title: "Working student", body: "Part-time salary can push income toward taper zones — update toeslagen records when hours increase." },
    { title: "Shared student flat", body: "Housemates and coupled households change which rent and income figures count — confirm household type officially." },
  ],
  propertyTips: [
    "Property requirements are often the biggest source of confusion for expats — verify before applying.",
    "Independent living accommodation, registration at the address and a valid rental contract typically matter.",
    "Shared accommodation and student housing situations need extra care — rules differ from single-tenant rentals.",
    "Do not rely on landlord assurances alone — confirm property eligibility on official toeslagen information.",
  ],
  propertyCriteria: [
    { title: "Independent accommodation", body: "Zelfstandige woonruimte with own front door, kitchen and bathroom — not a shared room in landlord's home." },
    { title: "Registered address", body: "BRP inschrijving at the rental address for every month you claim allowance." },
    { title: "Bare rent contract", body: "Lawful rental agreement showing kale huur. From 2026 service costs are excluded from the toeslag calculation." },
    { title: "No rent ceiling to qualify", body: "From 2026 you can qualify with rent above €932.93 — but allowance is only calculated up to that cap (21+)." },
    { title: "Shared housing", body: "Medebewoners and toeslagpartners change income and asset tests — each co-tenant adds a €38,479 asset reference." },
  ],
  howMuchTips: [
    "Belastingdienst: you always pay roughly €200 of rent yourself — allowance never covers the full rent.",
    "At ~€18,000 toetsingsinkomen and €800 bare rent, indicative allowance is often ~€280/month (verify in proefberekening).",
    "At full-time minimum wage (~€33,045/year) and €850 rent, proefberekening examples show ~€273/month.",
    "Higher income tapers allowance to zero — many expat salaries sit above practical huurtoeslag ranges.",
  ],
  incomeTips: [
    "Toeslagen income definitions may differ from payslip gross or expat package headlines.",
    "With a toeslagpartner, combined income is tested against a higher ceiling — both incomes count.",
    "Bonuses, variable pay and partner income shifts can move the real test during the year.",
    "Use conservative income inputs when uncertain — overestimating allowance creates repayment risk later.",
  ],
  incomeFactors: [
    { title: "Single vs partner ceiling", body: "Partner status switches you to combined income tests with different limits." },
    { title: "Taper zone", body: "Allowance typically reduces gradually as income rises — not only at a hard ceiling." },
    { title: "Rent figure", body: "The qualifying rent amount used in the test may differ from your total monthly housing bill." },
    { title: "Updates required", body: "Report income and household changes to Dienst Toeslagen — estimates at application time are not permanent." },
  ],
  applicationSteps: [
    { step: "1", title: "Obtain your BSN", body: "Register with the municipality and secure a BSN — you typically need it for housing and toeslagen processes." },
    { step: "2", title: "Register your address", body: "Ensure you are registered at your rental address (inschrijving) for the months you plan to claim." },
    { step: "3", title: "Secure qualifying rental", body: "Sign a rental contract for property that may meet official huurtoeslag requirements — verify before applying." },
    { step: "4", title: "Create DigiD", body: "Set up DigiD for secure access to Dutch government portals, including Mijn Toeslagen." },
    { step: "5", title: "Access Toeslagen", body: "Log in to Mijn Toeslagen via toeslagen.nl with DigiD to start or manage your application." },
    { step: "6", title: "Submit application", body: "Enter income estimates, rent figures and household type — confirm on official guidance before submitting." },
    { step: "7", title: "Track updates", body: "Monitor decisions in Mijn Toeslagen and report income, rent, household or address changes promptly." },
  ],
  applyTips: [
    "Apply through Dienst Toeslagen (often via Mijn Toeslagen) — landlords cannot grant huurtoeslag on your behalf.",
    "You can often apply retroactively within official time limits — confirm current deadlines on Belastingdienst toeslagen pages.",
    "Keep copies of submitted figures and your rental contract — you may need them if circumstances change.",
    "This guide does not submit applications or read government systems — orientation only.",
  ],
  situationChangeTips: [
    "Salary increases, job changes and partner income shifts can reduce or remove allowance during the year.",
    "Moving home, relationship changes and partner arrivals in the Netherlands affect household and rent tests.",
    "If you received too much based on later income, Dienst Toeslagen may recover overpayments — report changes early.",
    "Use official calculators to stress-test higher income or rent changes before assuming allowance continues unchanged.",
  ],
  situationChangeScenarios: [
    { title: "New job or promotion", body: "Higher annual income may shrink allowance or push you above the ceiling — update toeslagen records." },
    { title: "Moving home", body: "A new address and rent figure can reset property and rent tests — update before and after the move." },
    { title: "Partner starts working", body: "Combined income can change quickly — toeslagpartner status means both incomes count." },
    { title: "Relationship change", body: "Household type may switch between single and partner rules — report changes to Dienst Toeslagen." },
    { title: "Partner arrives in NL", body: "Registration, combined income and rent tests may apply once toeslagpartner rules kick in." },
    { title: "Rent increase", body: "A higher contract rent can change the allowance calculation — verify on official guidance when rent changes." },
  ],
  mistakeCards: [
    { title: "Non-qualifying property", body: "Many expat market rentals in major cities may not meet property or rent-level rules — verify before applying." },
    { title: "Incorrect income estimate", body: "Optimistic income inputs create repayment risk if your salary or bonus increases mid-year." },
    { title: "Forgetting partner income", body: "When toeslagpartner rules apply, both incomes count — treating the household as single leads to wrong planning." },
    { title: "Incorrect registration", body: "Allowance months align with registered address and qualifying rental periods — not move date alone." },
    { title: "Missing updates", body: "Failing to report raises, moves or household changes is a common source of later recovery letters." },
    { title: "Shared housing confusion", body: "Informal house shares and coupled households have different rules — confirm household type officially." },
    { title: "Assuming automatic eligibility", body: "Huurtoeslag is not paid through your employer or landlord — you must apply through Dienst Toeslagen." },
    { title: "Confusing benefits", body: "Huurtoeslag is not zorgtoeslag, kindgebonden budget or payroll tax credit — each has separate rules." },
  ],
  mistakesTips: [
    "Many expats never apply because they assume foreign nationality disqualifies them — check property and income tests first.",
    "Conservative income and rent estimates reduce repayment risk if circumstances change mid-year.",
    "Report household, partner and address changes to Dienst Toeslagen — informal cohabitation rules differ from toeslagpartner status.",
    "Do not sign a lease assuming huurtoeslag — confirm property eligibility on official sources before budgeting.",
  ],
  comparisonRows: [
    { component: "Rent allowance (huurtoeslag)", treatment: "Supports qualifying housing costs", note: "Income, rent, property and household tests" },
    { component: "Healthcare allowance (zorgtoeslag)", treatment: "Supports basic health insurance premiums", note: "Different income, asset and insurance rules" },
    { component: "Child budget (kindgebonden budget)", treatment: "Separate family-related toeslag", note: "Not tied to rent directly" },
    { component: "Payroll tax credit (heffingskorting)", treatment: "Applied through employer payroll", note: "Not the same as monthly huurtoeslag" },
  ],
  comparisonTips: [
    "Rent allowance supports qualifying housing costs — not health insurance premiums directly.",
    "Healthcare allowance (zorgtoeslag) has separate insurance, income and asset rules — see the healthcare allowance guide.",
    "You might qualify for one toeslag, both or neither — check each benefit on official channels.",
    "Payroll tax credit flows through employer payroll — separate from monthly huurtoeslag payments.",
  ],
  housingMarketTips: [
    "Housing affordability varies significantly between Amsterdam, Utrecht, Rotterdam and smaller cities.",
    "Huurtoeslag may help eligible households — but high market rents in Randstad cities still require careful budgeting.",
    "Use city guides and rent planning tools alongside allowance orientation — not as a substitute for official entitlement.",
    "Social housing and private sector rentals follow different rules — property type affects huurtoeslag eligibility.",
  ],
  housingMarketConcepts: [
    { title: "City rent reality", body: "Randstad cities often have higher market rents — allowance may not cover the gap for non-qualifying properties." },
    { title: "Registration + lease", body: "Your registered address and rental contract must align with the months you claim — plan gemeente registration early." },
    { title: "Budget planning", body: "Combine huurtoeslag orientation with rent affordability tools to stress-test net housing costs." },
  ],
  housingMarketLinks: [
    { title: "Rent Affordability Calculator", body: "Model housing budget ranges from income and rent inputs.", href: RENT_AFFORDABILITY_TOOL_PATH },
    { title: "Netherlands Housing Hub", body: "Search, contracts and registration context for expat renters.", href: HOUSING_HUB_PATH },
    { title: "Municipality registration", body: "How address registration ties to BSN and toeslagen eligibility.", href: MUNICIPALITY_REGISTRATION_PATH },
  ],
  cityLinks: [
    { label: "Amsterdam", href: "/netherlands/amsterdam/", description: "High demand and premium rents — allowance rules still apply for qualifying properties." },
    { label: "Utrecht", href: "/netherlands/utrecht/", description: "Compact city with strong student and professional rental markets." },
    { label: "Haarlem", href: "/netherlands/haarlem/", description: "Randstad commuter city with its own rent dynamics." },
    { label: "Leiden", href: "/netherlands/leiden/", description: "University city with mixed rental stock and registration considerations." },
    { label: "Rotterdam", href: "/netherlands/rotterdam/", description: "Often more affordable than Amsterdam — still verify property rules." },
    { label: "Eindhoven", href: "/netherlands/eindhoven/", description: "Tech hub with growing international rental demand." },
    { label: "Groningen", href: "/netherlands/groningen/", description: "Northern student city with distinct housing market patterns." },
    { label: "Arnhem", href: "/netherlands/arnhem/", description: "Eastern city with varied private rental options." },
  ] satisfies RentAllowanceNetherlandsLink[],
  futureBenefitLinks: [
    { label: "Healthcare Allowance Netherlands", href: HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Zorgtoeslag guide — separate rules from huurtoeslag." },
    { label: "Childcare Allowance Netherlands", href: "/netherlands/taxes/childcare-allowance-netherlands/", status: "live", description: "Kinderopvangtoeslag guide — registered childcare, work rules and application path." },
  ] satisfies RentAllowanceNetherlandsLink[],
  questionsSectionTips: [
    "Highly skilled migrants follow the same huurtoeslag framework — confirm property and income against toeslagen definitions.",
    "Couples should verify toeslagpartner status before assuming single-household income limits apply.",
    "Students in qualifying rental situations may still need to meet income and property tests like any other resident.",
    "If you move mid-year, update address, rent and household records before assuming allowance continues unchanged.",
  ],
  expatQuestions: [
    { q: "Can expats receive rent allowance?", a: "Often yes if you meet residence, income, rent and property conditions — nationality alone does not determine eligibility. Confirm your personal situation on official toeslagen guidance." },
    { q: "What apartments qualify?", a: "Property must meet official requirements for independent accommodation, rent level and registration. Many market-rate expat rentals may not qualify — verify on Belastingdienst guidance." },
    { q: "How much can I receive?", a: "It depends on bare rent, toetsingsinkomen, age and household. Illustrative 2026 examples: ~€280/month at €800 rent and ~€18,000 income; ~€273/month at €850 rent and minimum-wage income. You always keep ~€200 rent yourself. Use the official proefberekening for your figure." },
    { q: "Can students receive huurtoeslag?", a: "Students may qualify in qualifying rental situations when they meet income, property and household tests. Student status alone does not guarantee allowance." },
    { q: "Does partner income matter?", a: "When a toeslagpartner applies for the allowance year, combined income is tested against the partner ceiling. Confirm household type with Dienst Toeslagen." },
    { q: "Can highly skilled migrants apply?", a: "Highly skilled migrants can qualify when they meet the same residence, income, rent and property conditions as other residents." },
    { q: "What if I move?", a: "Report address and rent changes to Dienst Toeslagen. Moving can reset property and rent tests — update records promptly." },
    { q: "What if my salary changes?", a: "Report income changes to Dienst Toeslagen. Raises can reduce allowance; failing to update can lead to repayment later." },
  ],
  relatedGuideTips: [
    "Start with the housing hub before comparing city rents — allowance changes net affordability context.",
    "Read the healthcare allowance guide to understand how huurtoeslag differs from zorgtoeslag.",
    "Use the rent affordability calculator for budget planning — not as a substitute for official huurtoeslag determination.",
    "Connect housing search with registration and toeslagen planning during your first months in the Netherlands.",
  ],
  relatedHousingGuides: [
    { label: "Netherlands Housing Hub", href: HOUSING_HUB_PATH, status: "live", description: "Central housing guide for expats — search, renting and costs." },
    { label: "Healthcare Allowance", href: HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Zorgtoeslag guide — separate rules from huurtoeslag." },
    { label: "Expat Taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Cross-border tax orientation for international residents." },
    { label: "Netherlands Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Broader tax and benefits context for expats." },
    { label: "Rent Affordability Calculator", href: RENT_AFFORDABILITY_TOOL_PATH, status: "live", description: "Plan housing budget ranges from income and rent inputs." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Main relocation guide for housing and registration planning." },
  ] satisfies RentAllowanceNetherlandsLink[],
  faqQuickChecks: [
    "Confirm your rental property may qualify under official huurtoeslag property rules.",
    "Check single vs toeslagpartner household type before using combined income limits.",
    "Include accurate rent and income figures — not optimistic planning numbers.",
    "Report income, rent and household changes to Dienst Toeslagen during the year.",
  ],
  servicesWhenToUse: [
    { title: "Relocation services", body: "Move-year registration, address setup and housing orientation for new arrivals." },
    { title: "Rental agencies", body: "Agency-assisted housing search — confirm property eligibility separately on official sources." },
    { title: "Expat housing specialists", body: "International tenant support and contract context — not official toeslag determination." },
    { title: "Tax advisors", body: "Income picture, toeslagpartner questions and correspondence with Dienst Toeslagen." },
  ],
  servicesTips: [
    "Most huurtoeslag questions can be answered through official Belastingdienst and toeslagen.nl guidance.",
    "Use relocation services for registration and housing search — not as a substitute for property eligibility checks.",
    "Tax advisors help with income picture and toeslagpartner status — they do not grant allowance on your behalf.",
    "Rental agents find housing — always verify huurtoeslag property rules independently before signing.",
  ],
  services: [
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Move support including registration and housing orientation." },
    { label: "Rental agencies", href: "/netherlands/services/rental-agencies/", status: "live", description: "Agency directories for expat housing search." },
    { label: "Expat housing agencies", href: "/netherlands/services/expat-housing-agencies/", status: "live", description: "Specialists for international tenant housing search." },
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Income and toeslagen planning context for expats." },
  ] satisfies RentAllowanceNetherlandsLink[],
  faq: [
    { q: "What is rent allowance (huurtoeslag)?", a: "A Dutch benefit administered by Dienst Toeslagen that can help eligible residents pay qualifying housing costs. It is means-tested through income, rent, property and household rules." },
    { q: "Can expats receive rent allowance?", a: "Expats can qualify when they meet the same residence, income, rent and property conditions. Nationality alone does not determine eligibility." },
    { q: "What properties qualify?", a: "Property must meet official requirements for accommodation type, rent level and registration. Many market-rate rentals may not qualify — confirm on official Belastingdienst sources." },
    { q: "How do I apply for rent allowance?", a: "Apply through Dienst Toeslagen, often via Mijn Toeslagen. Gather income, rent and household figures first and update records when circumstances change." },
    { q: "How much rent allowance will I get?", a: "Calculated from bare rent (max €932.93 for 21+), toetsingsinkomen and assets. Indicative planning: €250–€300/month at modest income; ~€273/month at minimum wage with €850 rent. Allowance tapers to zero as income approaches ~€60,525 combined. Confirm in the official proefberekening." },
    { q: "Does partner income matter?", a: "If toeslagpartner rules apply, combined income is tested against partner ceilings. Household type must match official definitions." },
    { q: "Can students receive rent allowance?", a: "Students may qualify in qualifying rental situations when they meet income, property and household tests. Student status alone does not guarantee allowance." },
    { q: "What if my income changes?", a: "Report changes to Dienst Toeslagen. Higher income can reduce or remove allowance; overpayments may be recovered if updates are late." },
  ],
  officialSources: [
    { label: "Belastingdienst — Rent benefit", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/rent-benefit", description: "Official English overview of rent allowance (huurtoeslag) from the Dutch Tax Administration." },
    { label: "Toeslagen — Mijn toeslagen", href: "https://www.toeslagen.nl/", description: "Official portal to apply for and manage huurtoeslag and other allowances." },
    { label: "Government.nl — Rent benefit", href: "https://www.government.nl/topics/housing/rent-benefit", description: "Official Dutch government information on rent allowance and housing support." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Official government portal with practical information for residents and businesses in the Netherlands." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Government information for Dutch nationals abroad and international context — useful for cross-border planning." },
  ],
  sourcesDisclaimer:
    "Rent allowance eligibility rules, rent thresholds and income limits can change regularly. Always verify current requirements through official government resources before applying or updating records.",
  relatedGuides: [
    { label: "Netherlands Housing Hub", href: HOUSING_HUB_PATH, status: "live", description: "Central housing guide for expats." },
    { label: "Netherlands Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Central Dutch tax guide for expats." },
    { label: "Healthcare Allowance", href: HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Zorgtoeslag guide — separate rules from huurtoeslag." },
    { label: "Expat Taxes in the Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Cross-border tax orientation for international residents." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Main relocation guide for housing and toeslagen planning." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare cities and housing markets across the Netherlands." },
    { label: "Rent Affordability Calculator", href: RENT_AFFORDABILITY_TOOL_PATH, status: "live", description: "Plan housing budget ranges from your inputs." },
  ] satisfies RentAllowanceNetherlandsLink[],
  exploreNextCards: [
    { label: "Renting in the Netherlands", href: "/netherlands/renting-in-the-netherlands/", status: "comingSoon", description: "Full renting guide for expats — contracts, search and tenant rights." },
    { label: "Healthcare Allowance", href: HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Zorgtoeslag guide — separate rules from huurtoeslag." },
    { label: "Housing Hub", href: HOUSING_HUB_PATH, status: "live", description: "Central housing guide for search, costs and relocation." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Main relocation guide for newcomers planning housing and toeslagen." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare cities and housing markets before you choose where to live." },
    { label: "Rent Affordability Calculator", href: RENT_AFFORDABILITY_TOOL_PATH, status: "live", description: "Plan housing budget ranges from income and rent inputs." },
  ] satisfies RentAllowanceNetherlandsLink[],
  officialCalculatorCta: {
    title: "Confirm your amount officially",
    description:
      "The figures on this page use published 2026 parameters and indicative proefberekening examples. For your personal monthly amount, run the official proefberekening on toeslagen.nl with your bare rent, toetsingsinkomen and household type.",
    primaryCta: { label: "Proefberekening Toeslagen", href: "https://www.toeslagen.nl/proefberekening" },
    secondaryCta: { label: "Belastingdienst rent benefit", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/rent-benefit" },
    disclaimer: rentAllowanceReference2026.disclaimer,
  },
} as const;

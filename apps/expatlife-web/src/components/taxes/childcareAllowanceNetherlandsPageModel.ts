export const CHILDCARE_ALLOWANCE_NETHERLANDS_PATH = "/netherlands/taxes/childcare-allowance-netherlands/" as const;
export const CHILDCARE_COST_ESTIMATOR_PATH = "/netherlands/family/tools/childcare-cost-estimator/" as const;
export const FAMILY_TOOLS_PATH = "/netherlands/family/tools/" as const;
export const HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH = "/netherlands/taxes/healthcare-allowance-netherlands/" as const;
export const RENT_ALLOWANCE_NETHERLANDS_PATH = "/netherlands/taxes/rent-allowance-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const MOVING_WITH_FAMILY_PATH = "/netherlands/moving-to-netherlands-with-family/" as const;
export const BONUS_TAX_NETHERLANDS_PATH = "/netherlands/taxes/bonus-tax-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const EXPAT_TAXES_NETHERLANDS_PATH = "/netherlands/taxes/expat-taxes-netherlands/" as const;
export const MUNICIPALITY_REGISTRATION_PATH = "/netherlands/municipality-registration-netherlands/" as const;
export const BSN_REGISTRATION_PATH = "/netherlands/bsn-registration/" as const;

export type ChildcareAllowanceNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const childcareAllowanceNetherlandsPage = {
  slug: "childcare-allowance-netherlands",
  path: CHILDCARE_ALLOWANCE_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-07-08",
  seo: {
    title: "Childcare Allowance in the Netherlands (Kinderopvangtoeslag) | Expat Guide",
    description:
      "Learn how childcare allowance (kinderopvangtoeslag) works in the Netherlands, who may qualify, how to apply and how it can help reduce childcare costs for expat families.",
    keywords: [
      "childcare allowance netherlands",
      "kinderopvangtoeslag netherlands",
      "childcare benefit netherlands",
      "childcare subsidy netherlands",
      "dutch childcare allowance",
      "childcare allowance expats",
      "daycare allowance netherlands",
      "childcare costs netherlands",
      "childcare benefit expats",
      "kinderopvangtoeslag expats",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes · Family benefits",
    pageTitle: "Childcare Allowance in the Netherlands",
    subtitle:
      "Understand how Dutch childcare allowance (kinderopvangtoeslag) works, who may qualify, how to apply and how it can help reduce childcare costs for families living in the Netherlands.",
    primaryCta: { label: "Understand Childcare Allowance", href: "#intro" },
    secondaryCta: { label: "Explore Family Guides", href: FAMILY_TOOLS_PATH },
    chips: ["Kinderopvangtoeslag", "Registered childcare", "Working parents", "Dienst Toeslagen"],
    image: {
      src: "/images/heroes/netherlands-childcare-allowance-netherlands-hero-v3.png",
      alt: "Photorealistic editorial photo of an international couple reviewing Dutch childcare allowance paperwork and a registered childcare contract at a bright apartment table, with a young child nearby and canal houses visible through the window.",
    },
  },
  infographics: {
    introFlow: {
      src: "/images/infographics/netherlands-childcare-allowance-intro-flow-infographic-v3.png",
      alt: "Infographic explaining Dutch childcare allowance (kinderopvangtoeslag): registered childcare, work requirements, income tests and reimbursement through Dienst Toeslagen.",
      caption: "Kinderopvangtoeslag supports registered childcare costs — eligibility depends on work, income, provider registration and household type, not nationality alone.",
    },
    snapshot: {
      src: "/images/infographics/netherlands-childcare-allowance-snapshot-infographic-v3.png",
      alt: "Infographic snapshot of Dutch childcare allowance at a glance: purpose, registered provider requirement, income dependency and application channel.",
      caption: "Use this snapshot before applying — reimbursement rates and income rules change with policy; only official sources determine entitlement.",
    },
    childcareSystem: {
      src: "/images/infographics/netherlands-childcare-allowance-childcare-system-infographic-v3.png",
      alt: "Infographic explaining childcare types in the Netherlands: daycare, childminder, after-school care and which arrangements may qualify for toeslag.",
      caption: "Not every childcare arrangement qualifies — registered providers and eligible hours matter as much as income.",
    },
    whoQualifies: {
      src: "/images/infographics/netherlands-childcare-allowance-who-qualifies-infographic-v3.png",
      alt: "Infographic overview of who may qualify for kinderopvangtoeslag: employment, registered childcare, residency, income and household composition.",
      caption: "Qualification is a bundle of conditions — confirm each on official toeslagen guidance.",
    },
    expats: {
      src: "/images/infographics/netherlands-childcare-allowance-expats-infographic-v3.png",
      alt: "Infographic showing expat childcare allowance context: registration, provider contracts, highly skilled migrants and official confirmation steps.",
      caption: "Expat families follow the same benefit framework — but move timing and childcare search add planning complexity.",
    },
    employment: {
      src: "/images/infographics/netherlands-childcare-allowance-employment-infographic-v3.png",
      alt: "Infographic explaining work and study requirements for kinderopvangtoeslag: employment, self-employment, education and integration programmes.",
      caption: "Work-linked eligibility is central — household circumstances matter beyond a simple both-parents-must-work rule.",
    },
    howMuch: {
      src: "/images/infographics/netherlands-childcare-allowance-how-much-infographic-v3.png",
      alt: "Infographic showing how childcare allowance amounts are determined through income, childcare costs and registered hours — use official calculators for personal figures.",
      caption: "Allowance depends on income, costs and eligible hours — use official tools and the childcare cost estimator for planning, not hardcoded blog figures.",
    },
    childcareCosts: {
      src: "/images/infographics/netherlands-childcare-allowance-childcare-costs-infographic-v3.png",
      alt: "Infographic linking kinderopvangtoeslag to Dutch childcare costs across daycare, BSO and childminder options by city.",
      caption: "Childcare costs vary significantly by city and provider — connect allowance planning to local cost reality.",
    },
    apply: {
      src: "/images/infographics/netherlands-childcare-allowance-apply-infographic-v3.png",
      alt: "Infographic flow for applying for Dutch childcare allowance through Dienst Toeslagen and Mijn Toeslagen.",
      caption: "Apply and update through official toeslagen channels — this guide does not submit applications.",
    },
    situationChanges: {
      src: "/images/infographics/netherlands-childcare-allowance-situation-changes-infographic-v3.png",
      alt: "Infographic explaining life changes that affect kinderopvangtoeslag: job changes, new children, provider switches and income shifts.",
      caption: "Report changes promptly — overpayment can lead to repayment through Dienst Toeslagen.",
    },
    mistakes: {
      src: "/images/infographics/netherlands-childcare-allowance-mistakes-infographic-v3.png",
      alt: "Infographic summarising common expat mistakes with kinderopvangtoeslag: non-registered care, wrong income, missed deadlines and late updates.",
      caption: "Conservative planning and official confirmation reduce common expat childcare allowance mistakes.",
    },
    compareBenefits: {
      src: "/images/infographics/netherlands-childcare-allowance-compare-benefits-infographic-v3.png",
      alt: "Infographic comparing childcare allowance with child benefit, healthcare allowance and rent allowance.",
      caption: "Each toeslag has separate rules — qualifying for one does not automatically mean qualifying for others.",
    },
    expatFamily: {
      src: "/images/infographics/netherlands-childcare-allowance-expat-family-infographic-v3.png",
      alt: "Infographic explaining expat family concerns: waiting lists, language, international schools and balancing work and childcare.",
      caption: "Allowance planning sits alongside childcare search, schools and relocation timing — not instead of them.",
    },
    questions: {
      src: "/images/infographics/netherlands-childcare-allowance-questions-infographic-v3.png",
      alt: "Infographic summarising common expat questions about Dutch childcare allowance eligibility, providers, partners and applications.",
      caption: "Use these prompts when planning — then confirm on official sources or with qualified advice.",
    },
    relatedGuides: {
      src: "/images/infographics/netherlands-childcare-allowance-related-guides-infographic-v3.png",
      alt: "Infographic linking to related family, education and tax guides: childcare estimator, healthcare allowance, rent allowance and moving with children.",
      caption: "Connect kinderopvangtoeslag planning to family tools, city comparison and broader relocation context.",
    },
    services: {
      src: "/images/infographics/netherlands-childcare-allowance-services-infographic-v3.png",
      alt: "Infographic showing professional services for childcare allowance questions: relocation, education consultants and tax advisors.",
      caption: "Use professionals for personal entitlement questions — this guide is orientation only.",
    },
    officialSources: {
      src: "/images/infographics/netherlands-childcare-allowance-official-sources-infographic-v3.png",
      alt: "Infographic map of official Dutch childcare allowance sources: Belastingdienst Toeslagen, Government.nl, toeslagen.nl and Rijksoverheid.",
      caption: "Verify current reimbursement rules, income tests and provider requirements on official government sources before applying.",
    },
    exploreNext: {
      src: "/images/infographics/netherlands-childcare-allowance-explore-next-infographic-v3.png",
      alt: "Infographic linking to next-step guides: child benefit, schools, healthcare allowance, rent allowance and moving with children.",
      caption: "Move from kinderopvangtoeslag concepts into family planning, education choices and relocation next steps.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#thresholds-2026", label: "2026 figures" },
    { href: "#childcare-system", label: "Childcare system" },
    { href: "#who-qualifies", label: "Who qualifies" },
    { href: "#expats", label: "Expats" },
    { href: "#employment", label: "Employment" },
    { href: "#how-much", label: "How much" },
    { href: "#childcare-costs", label: "Costs" },
    { href: "#apply", label: "Apply" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#situation-changes", label: "Changes" },
    { href: "#compare-benefits", label: "Compare benefits" },
    { href: "#expat-family", label: "Expat families" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Related guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  conceptCards: [
    { title: "Kinderopvangtoeslag", body: "A Dutch allowance (toeslag) that can reimburse part of registered childcare costs for eligible working parents." },
    { title: "Registered care only", body: "Only childcare from registered providers (LRK) with qualifying contracts typically counts — informal care usually does not." },
    { title: "Official channel", body: "Applications and updates go through Dienst Toeslagen — providers administer care, not your allowance entitlement." },
  ],
  snapshotCards: [
    { label: "Dutch name", value: "Kinderopvangtoeslag" },
    { label: "Daycare cap (2026)", value: "€11.23 / hour" },
    { label: "BSO cap (2026)", value: "€9.98 / hour" },
    { label: "Hours cap", value: "230 h / child / mo" },
    { label: "Max reimbursement", value: "96% (income ≤ ~€56,412)" },
    { label: "Apply via", value: "Mijn Toeslagen" },
  ],
  snapshotTips: [
    "2026 statutory hourly caps: daycare €11.23, BSO €9.98, gastouder €8.49 — provider fees above the cap stay out of pocket.",
    "Reimbursement percentage comes from your toetsingsinkomen table row — up to 96% for many working households in 2026, floor 36.5% for high incomes.",
    "There is no single hard income cutoff like zorgtoeslag — allowance tapers but high earners still receive at least the minimum percentage on the reimbursable base.",
    "Only Dienst Toeslagen determines official awards — use the proefberekening and childcare cost estimator for personal planning.",
  ],
  introChecklist: [
    "Confirm your childcare provider is registered and your contract shows eligible hours.",
    "Check work or study requirements for each applying parent on official toeslagen guidance.",
    "Gather income planning figures and household type before applying.",
    "Run the official proefberekening or childcare cost estimator — do not rely on forum percentages.",
  ],
  newcomerSurprises: [
    "Dutch childcare can be expensive and competitive — kinderopvangtoeslag helps eligible families but does not cover full costs.",
    "Childcare allowance is not automatic — you apply through Dienst Toeslagen after arranging registered care.",
    "Waiting lists in major cities can delay your start date — plan childcare search early in your relocation.",
    "Nationality alone does not decide eligibility — work, income, registered provider and residence rules do.",
  ],
  childcareSystemTips: [
    "The Dutch system combines daycare (kinderdagverblijf), registered childminders (gastouder) and after-school care (BSO).",
    "Kinderopvangtoeslag reimburses part of qualifying registered childcare costs for eligible working parents.",
    "The benefit is administered as a toeslag through Dienst Toeslagen, separate from payroll withholding and kinderbijslag.",
    "Reimbursement rates, income tests and hourly limits change — always verify current rules on official sources.",
  ],
  childcareSystemConcepts: [
    { title: "Kinderdagverblijf (daycare)", body: "Full-day care for young children — the most common route for working parents with babies and toddlers." },
    { title: "Gastouder (childminder)", body: "Registered childminder care — can qualify when the gastouder and agency meet official registration rules." },
    { title: "BSO (after-school care)", body: "Out-of-school care for school-age children — separate contracts and hours from daycare." },
    { title: "Not all care qualifies", body: "Informal babysitting, unregistered providers and some au-pair setups typically fall outside kinderopvangtoeslag." },
  ],
  whoQualifiesTips: [
    "Legal residency and a registered address context matter alongside work, income and provider tests.",
    "Income is tested against household rules — partner income may count when toeslagpartner status applies.",
    "Your childcare provider must be registered (LRK) and your contract must reflect eligible hours.",
    "Always verify your personal situation on Belastingdienst and Government.nl guidance.",
  ],
  qualificationCriteria: [
    { title: "Legal residency", body: "You generally need lawful residence in the Netherlands for the relevant allowance period." },
    { title: "Work or study link", body: "Eligibility is tied to work, self-employment, education or certain integration programmes — confirm current rules officially." },
    { title: "Registered childcare", body: "Care must be from a registered provider with a qualifying contract showing eligible hours." },
    { title: "Income within rules", body: "Taxable household income affects the reimbursement percentage — higher income means lower allowance." },
    { title: "Child age and hours", body: "Eligible childcare hours depend on work hours and child age — statutory caps apply to reimbursable hours." },
    { title: "Household composition", body: "Single vs toeslagpartner status changes which income figures count together." },
  ],
  childcareTypes: [
    { title: "Daycare (kinderdagverblijf)", body: "Centre-based care for 0–4 year-olds — most common for full-time working parents. Must be LRK-registered to qualify." },
    { title: "Childminder (gastouder)", body: "Care at a registered childminder's home, often via a gastouderbureau agency. Registration chain must be complete." },
    { title: "After-school care (BSO)", body: "Before- and after-school care for primary-school children — separate contract and hour rules from daycare." },
    { title: "Pre-school (voorschool / peuteropvang)", body: "Part-time early education programmes — may qualify when provided by registered childcare with eligible hours." },
    { title: "Non-qualifying care", body: "Informal babysitting, unregistered providers, most au-pair hours and family-only arrangements typically do not qualify." },
  ],
  expatTips: [
    "Kinderopvangtoeslag depends on residence, work, income and registered childcare — not nationality or expat label alone.",
    "Highly skilled migrants and international employees may qualify when they meet the same conditions as Dutch residents.",
    "Move timing, partner job search and waiting lists can delay both childcare start and allowance application.",
    "Confirm provider registration and work requirements before assuming eligibility from forum advice alone.",
  ],
  expatScenarios: [
    { title: "Highly skilled migrant", body: "Dual-income HSM households often use daycare — model income and childcare costs before signing contracts." },
    { title: "International professional", body: "Long-term residents with registered childcare and qualifying work may apply — confirm provider LRK status early." },
    { title: "Trailing partner", body: "If one partner is not working, work-hour rules for the applying parent still matter — verify household setup officially." },
    { title: "Recent arrival", body: "BSN, provider contract and work registration timing can delay first allowance months — plan childcare search in parallel with housing." },
  ],
  employmentTips: [
    "Kinderopvangtoeslag is designed for parents who work, study or follow qualifying integration programmes — not for general childcare subsidy without activity.",
    "Both parents do not always need full-time jobs — but work-hour rules link eligible childcare hours to parental activity.",
    "Self-employment, part-time work and phased returns from parental leave each have specific rules — confirm officially.",
    "A non-working partner does not automatically disqualify the household — the applying parent's activity and household type matter.",
  ],
  employmentFactors: [
    { title: "Work hours link", body: "Eligible childcare hours are typically tied to the work hours of the least-working parent — not unlimited reimbursement." },
    { title: "Self-employment", body: "Freelancers and zzp'ers may qualify when they meet activity and income tests — keep records of working hours." },
    { title: "Study & integration", body: "Certain education and inburgering programmes may count as qualifying activity — verify on official guidance." },
    { title: "Partner activity", body: "When both parents work, combined activity can affect eligible hours — toeslagpartner income still counts for the income test." },
  ],
  howMuchFactors: [
    { title: "Household toetsingsinkomen", body: "Your row in the 2026 table sets the reimbursement % — e.g. up to €56,412 combined income can mean 96% on the reimbursable base; ~€85,000 often lands near 81% for the first child." },
    { title: "Provider rate vs official cap", body: "2026 caps: daycare €11.23/h, BSO €9.98/h, gastouder €8.49/h. Randstad providers often quote €11.50–€13.50/h for daycare — the gap is never subsidised." },
    { title: "Eligible hours", body: "Max 230 reimbursable hours per child per month. Three full days (~104 h/mo) vs five days (~173 h/mo) changes both gross invoice and allowance — but only within the cap." },
    { title: "Care type & children", body: "Each child has a separate contract and table row (first vs next child %). Two children means two gross lines; income is tested once for the household." },
  ],
  howMuchScenarios: [
    { title: "Full-time daycare, one child", body: "~173 h/mo at the €11.23 cap ≈ €1,946 gross before allowance. At ~€70,000 income (~90% table row), indicative allowance ~€1,750/mo — still ~€200 out of pocket at cap, more if the provider charges above it." },
    { title: "BSO after school starts", body: "BSO cap €9.98/h vs daycare €11.23/h lowers the reimbursable base, but a provider billing €11/h still calculates at €9.98. School holidays and study days can add separate cost lines." },
    { title: "Part-time work household", body: "Three days/week (~104 h/mo) at cap ≈ €1,168 gross. At 96% (income ≤ ~€56,412), allowance ~€1,121/mo — net under €50/mo at cap, but premium city rates push net cost up quickly." },
  ],
  childcareCostsConcepts: [
    { title: "Gross invoice vs net cost", body: "Example: 3 days daycare in Amsterdam at ~€11.90/h × 104 h ≈ €1,238/mo gross. At ~€85,000 income, indicative allowance ~€950/mo — net ~€290/mo before registration fees." },
    { title: "Randstad vs smaller cities", body: "Model anchors: Amsterdam standard daycare ~€11.90/h vs Eindhoven ~€10.90/h — same 2026 cap applies, but gross invoices and over-cap loss differ by city." },
    { title: "First-month cash flow", body: "Registration €100–€300+, deposits and partial first months can add €500–€1,500 on top of recurring gross — benefit payments may lag the first invoice." },
    { title: "Multiple children", body: "Two daycare contracts at 3 days each (~€1,168/mo at cap per child) can mean ~€2,336 gross before allowance — next-child table % is often close to but slightly below the first child rate." },
  ],
  employmentScenarios: [
    { title: "Both parents employed", body: "Dual-income households often contract the most childcare hours. Combined income affects the reimbursement rate; both parents' activity can influence eligible hours." },
    { title: "One parent part-time", body: "Part-time work can still qualify when hour thresholds are met. Eligible childcare hours often follow the parent with fewer work hours — confirm before booking full-time daycare." },
    { title: "Self-employed (zzp)", body: "Freelancers may qualify when they meet activity and income tests. Keep evidence of working hours — informal estimates at application time create repayment risk later." },
  ],
  expatFamilyLinks: [
    { label: "Moving with family", href: MOVING_WITH_FAMILY_PATH, status: "live", description: "Relocation sequencing for schools, childcare search and registration." },
    { label: "Childcare cost estimator", href: CHILDCARE_COST_ESTIMATOR_PATH, status: "live", description: "Model gross costs and planning-range benefit for your household." },
    { label: "Best cities for families", href: "/netherlands/cities/best-cities-for-families/", status: "live", description: "Compare family-oriented cities including childcare context." },
  ] satisfies ChildcareAllowanceNetherlandsLink[],
  howMuchTips: [
    "Allowance amounts depend on household income, childcare costs, number of children and eligible hours — not a fixed monthly figure.",
    "Reimbursement percentages and hourly caps change with government policy — do not rely on outdated blog posts.",
    "Use the official proefberekening on toeslagen.nl and the ExpatCopilot childcare cost estimator for planning ranges.",
    "Official awards use detailed rules — your real amount can differ from any planning estimate.",
  ],
  childcareCostsTips: [
    "Childcare is often one of the largest monthly expenses for expat families in the Netherlands.",
    "Daycare full-time in Randstad cities is typically more expensive than in smaller cities — allowance reduces but rarely eliminates the gap.",
    "After-school care (BSO) costs less per hour than full daycare but still adds up with multiple children.",
    "Use the childcare cost estimator and city guides to stress-test net childcare costs after allowance.",
  ],
  applicationSteps: [
    { step: "1", title: "Obtain BSN", body: "Register with the municipality and secure a BSN for each family member — required for toeslagen and provider contracts." },
    { step: "2", title: "Find registered childcare", body: "Choose an LRK-registered daycare, gastouder or BSO — confirm waiting lists and start dates early." },
    { step: "3", title: "Sign childcare contract", body: "Obtain a qualifying contract showing childcare hours, costs and provider registration details." },
    { step: "4", title: "Create DigiD", body: "Set up DigiD for secure access to Dutch government portals, including Mijn Toeslagen." },
    { step: "5", title: "Access Toeslagen", body: "Log in to Mijn Toeslagen via toeslagen.nl with DigiD to start or manage your application." },
    { step: "6", title: "Submit application", body: "Enter income estimates, provider details and childcare hours — confirm on official guidance before submitting." },
    { step: "7", title: "Track updates", body: "Monitor decisions in Mijn Toeslagen and report income, hours, provider or household changes promptly." },
  ],
  applyTips: [
    "Apply through Dienst Toeslagen (Mijn Toeslagen) — childcare providers cannot grant kinderopvangtoeslag on your behalf.",
    "You typically apply after childcare starts — confirm retroactive application deadlines on Belastingdienst toeslagen pages.",
    "Keep copies of your provider contract, LRK number and submitted figures — you may need them if circumstances change.",
    "This guide does not submit applications or read government systems — orientation only.",
  ],
  situationChangeTips: [
    "Salary increases, job changes and partner income shifts can reduce reimbursement during the year.",
    "New children, provider switches, divorce and partner relocation affect household and hour tests.",
    "If you received too much based on later income, Dienst Toeslagen may recover overpayments — report changes early.",
    "Use official calculators to stress-test higher income or hour changes before assuming allowance continues unchanged.",
  ],
  situationChangeScenarios: [
    { title: "New job or promotion", body: "Higher annual income may shrink reimbursement percentage — update toeslagen records." },
    { title: "Additional child", body: "A new child and new contract can change total allowance — apply for the new childcare period." },
    { title: "Changing provider", body: "Switching daycare or BSO requires updating provider details in Mijn Toeslagen." },
    { title: "Divorce or separation", body: "Household type and custody arrangements change income and hour tests — report promptly." },
    { title: "Partner starts working", body: "Combined income and eligible hours may both change — toeslagpartner rules apply." },
    { title: "Reduced work hours", body: "Fewer work hours can reduce eligible childcare hours — verify before reducing contracted care." },
  ],
  mistakeCards: [
    { title: "Non-registered provider", body: "Informal or unregistered childcare does not qualify — verify LRK registration before signing." },
    { title: "Incorrect income estimate", body: "Optimistic income inputs create repayment risk if salary or bonus increases mid-year." },
    { title: "Forgetting partner income", body: "When toeslagpartner rules apply, combined income affects reimbursement — treating the household as single leads to wrong planning." },
    { title: "Missing deadlines", body: "Late applications may lose retroactive months — confirm official time limits on toeslagen.nl." },
    { title: "Wrong eligible hours", body: "Contracted hours above work-linked limits may not be fully reimbursed — align contract with official hour rules." },
    { title: "Incorrect provider details", body: "Wrong LRK number or contract dates delay or reject applications — double-check before submitting." },
    { title: "Assuming automatic approval", body: "Kinderopvangtoeslag is not paid through your employer or childcare invoice — you must apply through Dienst Toeslagen." },
    { title: "Not updating changes", body: "Failing to report job, provider or household changes is a common source of later recovery letters." },
  ],
  mistakesTips: [
    "Many expat families never apply because they assume foreign nationality disqualifies them — check work and provider tests first.",
    "Conservative income estimates reduce repayment risk if circumstances change mid-year.",
    "Report provider switches, hour changes and household updates to Dienst Toeslagen — not only at initial application.",
    "Do not sign a childcare contract assuming full reimbursement — confirm provider and hour eligibility on official sources.",
  ],
  comparisonRows: [
    { component: "Childcare allowance (kinderopvangtoeslag)", treatment: "Reimburses part of registered childcare costs", note: "Work, income, provider and hour tests" },
    { component: "Child benefit (kinderbijslag)", treatment: "Quarterly payment for children", note: "Separate SVB benefit — not tied to childcare costs directly" },
    { component: "Healthcare allowance (zorgtoeslag)", treatment: "Supports basic health insurance premiums", note: "Different income, asset and insurance rules" },
    { component: "Rent allowance (huurtoeslag)", treatment: "Supports qualifying housing costs", note: "Income, rent, property and household tests" },
  ],
  comparisonTips: [
    "Kinderopvangtoeslag supports registered childcare costs — not general child expenses or school fees.",
    "Kinderbijslag is paid by SVB to parents with children — separate from toeslagen childcare reimbursement.",
    "You might qualify for one toeslag, several or none — check each benefit on official channels.",
    "Healthcare and rent allowances have entirely separate rules — see those guides for detail.",
  ],
  expatFamilyTips: [
    "Start childcare search early — Randstad waiting lists can run months, affecting both care start and allowance timing.",
    "Language of care varies by provider — Dutch immersion is common; international daycare options exist in major cities.",
    "International schools follow a different path from Dutch daycare — kinderopvangtoeslag targets registered Dutch childcare frameworks.",
    "Connect allowance planning with partner work eligibility, housing and school choices during relocation.",
  ],
  expatFamilyConcepts: [
    { title: "Waiting lists", body: "Register with multiple LRK providers early — allowance months align with when registered care actually starts, not when you join a waiting list." },
    { title: "Language & integration", body: "Dutch-language daycare is standard; allowance rules do not depend on care language. International options exist in major cities but follow the same toeslag framework." },
    { title: "School vs daycare path", body: "International school fees are separate from kinderopvangtoeslag. Dutch registered daycare, gastouder and BSO are the typical qualifying routes for the benefit." },
    { title: "Work-life balance", body: "Dutch employers often assume shared childcare. Plan contracted hours against both parents' schedules and official eligible-hour rules." },
  ],
  cityLinks: [
    { label: "Amsterdam", href: "/netherlands/amsterdam/", description: "High demand and premium childcare costs — plan allowance alongside city rent." },
    { label: "Utrecht", href: "/netherlands/utrecht/", description: "Family-friendly city with strong daycare demand and waiting lists." },
    { label: "Rotterdam", href: "/netherlands/rotterdam/", description: "Often more affordable childcare than Amsterdam — still verify provider registration." },
    { label: "The Hague", href: "/netherlands/the-hague/", description: "International community with varied registered childcare options." },
    { label: "Eindhoven", href: "/netherlands/eindhoven/", description: "Tech hub with growing international family demand for daycare." },
    { label: "Haarlem", href: "/netherlands/haarlem/", description: "Randstad commuter city with its own childcare market dynamics." },
    { label: "Best cities for families", href: "/netherlands/cities/best-cities-for-families/", description: "Compare family-oriented cities including childcare and cost context." },
  ] satisfies ChildcareAllowanceNetherlandsLink[],
  futureBenefitLinks: [
    { label: "Healthcare Allowance Netherlands", href: HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Zorgtoeslag guide — separate rules from kinderopvangtoeslag." },
    { label: "Rent Allowance Netherlands", href: RENT_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Huurtoeslag guide — housing support with different tests." },
    { label: "Child Benefit Netherlands", href: "/netherlands/family/child-benefit-netherlands/", status: "comingSoon", description: "Kinderbijslag orientation — SVB child benefit separate from childcare toeslag." },
  ] satisfies ChildcareAllowanceNetherlandsLink[],
  questionsSectionTips: [
    "Highly skilled migrant families follow the same kinderopvangtoeslag framework — confirm provider registration and work hours.",
    "Couples should verify toeslagpartner status before assuming single-household income rules apply.",
    "Both parents do not always need full-time jobs — but work-hour rules link eligible childcare hours to parental activity.",
    "If you switch providers mid-year, update Mijn Toeslagen before assuming allowance continues unchanged.",
  ],
  expatQuestions: [
    { q: "Can expats receive childcare allowance?", a: "Often yes if you meet work, income, registered childcare and residence conditions — nationality alone does not determine eligibility. Highly skilled migrants and EU workers use the same framework as Dutch residents." },
    { q: "How much can I receive?", a: "Depends on income, provider costs, eligible hours and number of children — not a fixed monthly amount. Use the official proefberekening for entitlement and the childcare cost estimator for relocation budgeting." },
    { q: "Does partner income matter?", a: "When toeslagpartner rules apply, combined toetsingsinkomen sets the reimbursement percentage. Confirm household type in Mijn Toeslagen before using single-person planning figures." },
    { q: "Do both parents need to work?", a: "Not always full-time — but eligible hours link to parental work, study or qualifying programmes. One part-time working parent can still qualify when hour rules are met." },
    { q: "What childcare qualifies?", a: "LRK-registered daycare (kinderdagverblijf), gastouder with complete registration chain, and BSO typically qualify. Informal babysitting, unregistered care and most au-pair hours do not." },
    { q: "Can highly skilled migrants apply?", a: "Yes, when they meet the same work, income, provider and residence conditions. Plan BSN, childcare contract and Mijn Toeslagen application in your first months after arrival." },
    { q: "How do I apply?", a: "After registered care starts: log in to Mijn Toeslagen with DigiD, enter provider LRK details, contract hours and income estimates. Keep copies of everything you submit." },
    { q: "What if my salary changes?", a: "Report changes in Mijn Toeslagen promptly. Raises can lower reimbursement; late updates may lead to recovery of overpaid amounts." },
  ],
  relatedGuideTips: [
    "Use the childcare cost estimator to model net costs after allowance — not as a substitute for official determination.",
    "Read the healthcare and rent allowance guides to understand how kinderopvangtoeslag differs from other toeslagen.",
    "Connect childcare planning with city guides and moving-with-family content during your first months in the Netherlands.",
    "Partner work eligibility tools help trailing spouses plan income alongside childcare decisions.",
  ],
  relatedGuides: [
    { label: "Childcare Cost Estimator", href: CHILDCARE_COST_ESTIMATOR_PATH, status: "live", description: "Model childcare costs and allowance impact from your inputs." },
    { label: "Family Tools Hub", href: FAMILY_TOOLS_PATH, status: "live", description: "Partner work checker and other family planning tools." },
    { label: "Healthcare Allowance", href: HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Zorgtoeslag guide — separate rules from kinderopvangtoeslag." },
    { label: "Rent Allowance", href: RENT_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Huurtoeslag guide — housing support with different tests." },
    { label: "Netherlands Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Broader tax and benefits context for expat families." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Main relocation guide for family planning and registration." },
    { label: "Best Cities for Families", href: "/netherlands/cities/best-cities-for-families/", status: "live", description: "Compare family-oriented cities including childcare context." },
  ] satisfies ChildcareAllowanceNetherlandsLink[],
  faqQuickChecks: [
    "Confirm your childcare provider is LRK-registered before signing a contract.",
    "Check work-hour rules and eligible childcare hours against your contract.",
    "Include accurate income figures — not optimistic planning numbers.",
    "Report income, provider and household changes to Dienst Toeslagen during the year.",
  ],
  servicesWhenToUse: [
    { title: "Relocation services", body: "Family move support including registration, housing and childcare orientation for new arrivals." },
    { title: "Family relocation specialists", body: "International family move planning — confirm allowance eligibility separately on official sources." },
    { title: "Education consultants", body: "School and childcare search context — not official toeslag determination." },
    { title: "Tax advisors", body: "Income picture, toeslagpartner questions and correspondence with Dienst Toeslagen." },
  ],
  servicesTips: [
    "Most kinderopvangtoeslag questions can be answered through official Belastingdienst and toeslagen.nl guidance.",
    "Use relocation services for family move logistics — not as a substitute for provider registration checks.",
    "Tax advisors help with income picture and toeslagpartner status — they do not grant allowance on your behalf.",
    "Education consultants help find schools and childcare — always verify LRK registration independently.",
  ],
  services: [
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Move support including family registration and orientation." },
    { label: "International schools", href: "/netherlands/services/international-schools/", status: "comingSoon", description: "Directory for international school options — separate from toeslag childcare." },
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Income and toeslagen planning context for expat families." },
    { label: "Family relocation", href: "/netherlands/services/relocation-services/", status: "live", description: "Relocation agencies with family move experience." },
  ] satisfies ChildcareAllowanceNetherlandsLink[],
  faq: [
    { q: "What is childcare allowance (kinderopvangtoeslag)?", a: "A Dutch benefit administered by Dienst Toeslagen that can reimburse part of registered childcare costs for eligible working parents. It is means-tested through income, work activity, provider registration and eligible hours." },
    { q: "Can expats receive childcare allowance?", a: "Expat families can qualify when they meet the same work, income, registered childcare and residence conditions. Nationality alone does not determine eligibility." },
    { q: "How much childcare allowance can I receive?", a: "Amounts depend on income, childcare costs, eligible hours and number of children. Use the official proefberekening and childcare cost estimator for planning ranges — only Dienst Toeslagen determines official awards." },
    { q: "Does partner income matter?", a: "If toeslagpartner rules apply, combined income affects the reimbursement percentage. Household type must match official definitions." },
    { q: "Do both parents need to work?", a: "Not necessarily both full-time — but eligible childcare hours are linked to parental work, study or qualifying activity. Verify your situation on official guidance." },
    { q: "What childcare providers qualify?", a: "Registered providers (LRK) including daycare, gastouder and BSO typically qualify. Informal or unregistered arrangements usually do not." },
    { q: "How do I apply for childcare allowance?", a: "Apply through Dienst Toeslagen via Mijn Toeslagen after arranging registered childcare. Enter provider details, contract hours and income figures, and update when circumstances change." },
    { q: "What if my income changes?", a: "Report changes to Dienst Toeslagen. Higher income can reduce reimbursement; overpayments may be recovered if updates are late." },
  ],
  officialSources: [
    { label: "Belastingdienst — Childcare benefit", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/childcare-benefit", description: "Official English overview of childcare allowance (kinderopvangtoeslag) from the Dutch Tax Administration." },
    { label: "Toeslagen — Mijn toeslagen", href: "https://www.toeslagen.nl/", description: "Official portal to apply for and manage kinderopvangtoeslag and other allowances." },
    { label: "Government.nl — Childcare", href: "https://www.government.nl/topics/childcare", description: "Official Dutch government information on childcare and family support." },
    { label: "Rijksoverheid — Kinderopvang", href: "https://www.rijksoverheid.nl/onderwerpen/kinderopvang", description: "Dutch government information on childcare types, registration and policy." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Government information for Dutch nationals abroad and international context — useful for cross-border family planning." },
  ],
  sourcesDisclaimer:
    "Childcare allowance eligibility rules, reimbursement rates, income tests and hourly limits can change regularly. Always verify current requirements through official government resources before applying or updating records.",
  exploreNextCards: [
    { label: "Child Benefit Netherlands", href: "/netherlands/family/child-benefit-netherlands/", status: "comingSoon", description: "Kinderbijslag guide — SVB child benefit separate from kinderopvangtoeslag." },
    { label: "Schools in the Netherlands", href: "/netherlands/education/schools-netherlands/", status: "comingSoon", description: "School system orientation for expat families." },
    { label: "Healthcare Allowance", href: HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Zorgtoeslag guide — separate rules from kinderopvangtoeslag." },
    { label: "Rent Allowance", href: RENT_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Huurtoeslag guide — housing support with different tests." },
    { label: "Moving with Children", href: MOVING_WITH_FAMILY_PATH, status: "live", description: "Family relocation planning including childcare and schools." },
    { label: "Childcare Cost Estimator", href: CHILDCARE_COST_ESTIMATOR_PATH, status: "live", description: "Model net childcare costs and allowance impact from your inputs." },
  ] satisfies ChildcareAllowanceNetherlandsLink[],
  officialCalculatorCta: {
    title: "Use official tools for amounts",
    description:
      "Kinderopvangtoeslag amounts depend on income, childcare costs, eligible hours and current policy rules. Use the official proefberekening on toeslagen.nl and the ExpatCopilot childcare cost estimator for planning ranges — orientation only, not an official determination.",
    primaryCta: { label: "Proefberekening Toeslagen", href: "https://www.toeslagen.nl/proefberekening" },
    secondaryCta: { label: "Childcare cost estimator", href: CHILDCARE_COST_ESTIMATOR_PATH },
    disclaimer: "Official awards use detailed rules that change with policy. Only Dienst Toeslagen determines entitlement and amounts.",
  },
} as const;

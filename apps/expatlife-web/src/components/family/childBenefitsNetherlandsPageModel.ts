export const CHILD_BENEFITS_NETHERLANDS_PATH = "/netherlands/family/child-benefits-netherlands/" as const;
export const CHILDCARE_ALLOWANCE_PATH = "/netherlands/taxes/childcare-allowance-netherlands/" as const;
export const CHILDCARE_COST_ESTIMATOR_PATH = "/netherlands/family/tools/childcare-cost-estimator/" as const;
export const FAMILY_TOOLS_PATH = "/netherlands/family/tools/" as const;
export const DAYCARE_NETHERLANDS_PATH = "/netherlands/education/daycare-netherlands/" as const;
export const DUTCH_SCHOOLS_PATH = "/netherlands/education/dutch-schools-netherlands/" as const;
export const INTERNATIONAL_SCHOOLS_PATH = "/netherlands/education/international-schools-netherlands/" as const;
export const MOVING_WITH_KIDS_PATH = "/netherlands/moving-to-netherlands-with-kids/" as const;
export const MOVING_WITH_FAMILY_PATH = "/netherlands/moving-to-netherlands-with-family/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const HEALTHCARE_ALLOWANCE_PATH = "/netherlands/taxes/healthcare-allowance-netherlands/" as const;
export const RENT_ALLOWANCE_PATH = "/netherlands/taxes/rent-allowance-netherlands/" as const;
export const DIGID_PATH = "/netherlands/practical-life/digid-netherlands/" as const;
export const BSN_REGISTRATION_PATH = "/netherlands/bsn-registration/" as const;
export const FAMILY_LIFE_PATH = "/netherlands/culture/family-and-school-culture/" as const;
export const LEAVING_TAX_PATH = "/netherlands/taxes/leaving-netherlands-tax/" as const;

export type ChildBenefitsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type ChildBenefitsCard = {
  title: string;
  body: string;
};

export type BenefitComparisonRow = {
  benefit: string;
  purpose: string;
  adminOrg: string;
  paymentFrequency: string;
  eligibilityBasis: string;
};

export type ApplicationStep = {
  name: string;
  text: string;
  tip: string;
};

export type QualifyCard = {
  title: string;
  body: string;
  expatNote: string;
};

export type MistakeCard = {
  title: string;
  body: string;
  advice: string;
};

const INFOGRAPHIC_VERSION = "premium-v1";

const visual = (slug: string, alt: string, caption: string) => ({
  src: `/images/infographics/child-benefits-netherlands-${slug}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const childBenefitsNetherlandsPage = {
  slug: "child-benefits-netherlands",
  path: CHILD_BENEFITS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2027-01-06",
  seo: {
    title: "Child Benefits in the Netherlands | Complete Guide for Expat Families",
    description:
      "Understand Dutch child benefits for expat families — Kinderbijslag (SVB), Kindgebonden Budget, childcare allowance and other family support. Who may qualify, how to apply and what to update when life changes.",
    keywords: [
      "child benefits netherlands",
      "kinderbijslag netherlands",
      "kindgebonden budget",
      "dutch child benefit expats",
      "family allowances netherlands",
      "child benefit netherlands expats",
      "svb kinderbijslag",
      "dutch family benefits",
      "childcare allowance vs kinderbijslag",
      "toeslagen netherlands families",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Family · Child benefits",
    pageTitle: "Child Benefits in the Netherlands",
    subtitle:
      "A practical guide for expat families to Kinderbijslag, Kindgebonden Budget, childcare allowance and related Dutch family support — who may qualify, how to apply and what to keep updated.",
    primaryCta: { label: "Understand Dutch Family Benefits", href: "#quick-answer" },
    secondaryCta: { label: "Childcare Allowance Guide", href: CHILDCARE_ALLOWANCE_PATH },
    chips: ["Kinderbijslag · SVB", "Kindgebonden Budget", "Kinderopvangtoeslag", "DigiD & toeslagen"],
    image: {
      src: "/images/heroes/child-benefits-netherlands-hero-premium-v1.png",
      alt: "Photorealistic editorial photo of a multicultural family with young children playing by a Dutch canal — parents smiling as a toddler and preschooler launch a toy boat, tulips and parked bicycles nearby, gabled canal houses and a stone bridge in warm afternoon light.",
    },
  },
  visuals: {
    understanding: visual(
      "understanding-dutch-family-benefits",
      "Premium ecosystem flow diagram mapping Dutch family benefits — register child, Kinderbijslag via SVB, Kindgebonden Budget and toeslagen via Dienst Toeslagen, plus municipal support.",
      "Three main benefit families — child benefit, child budget and childcare allowance — each with different rules and administrators."
    ),
    kinderbijslag: visual(
      "kinderbijslag",
      "Premium Kinderbijslag record board showing SVB child benefit purpose, quarterly payments, child age bands and registration via SVB portal.",
      "Kinderbijslag is universal child benefit — separate from income-tested toeslagen."
    ),
    childBudget: visual(
      "child-budget",
      "Premium Kindgebonden Budget desk scene with income-dependent supplement, Belastingdienst toeslagen portal and household composition notes.",
      "Kindgebonden Budget supplements low-income families — amounts depend on official income tests."
    ),
    childcareAllowance: visual(
      "childcare-allowance",
      "Premium kinderopvangtoeslag flow linking registered LRK childcare, work hours and Dienst Toeslagen reimbursement.",
      "Childcare allowance reduces registered childcare costs — see our dedicated guide for detail."
    ),
    howToApply: visual(
      "how-to-apply",
      "Premium application timeline from BSN registration through SVB Kinderbijslag and Belastingdienst toeslagen with DigiD checkpoints.",
      "Apply through official portals — SVB for Kinderbijslag, Belastingdienst for toeslagen."
    ),
    paymentSchedules: visual(
      "payment-schedules",
      "Premium calendar rail showing quarterly Kinderbijslag dates, monthly toeslagen rhythm and annual review reminders.",
      "Payment timing differs by benefit — plan household cash flow around official schedules."
    ),
    familyScenarios: visual(
      "family-scenarios",
      "Premium family scenario board — newborn, dual-income relocation, single parent, blended family and cross-border household sketches.",
      "Realistic profiles help you map which benefits to research — official calculators confirm entitlement."
    ),
    movingTo: visual(
      "moving-to-netherlands",
      "Premium relocation timeline for families arriving with children — registration, SVB application and toeslagen setup before school start.",
      "Register address and BSN early — benefit applications often follow gemeente registration."
    ),
    movingAway: visual(
      "moving-away",
      "Premium departure checklist for families leaving the Netherlands — notify SVB and Belastingdienst, final toeslagen and cross-border child benefit orientation.",
      "Report departures promptly to avoid repayments and missed notifications abroad."
    ),
    commonMistakes: visual(
      "common-mistakes",
      "Premium mistake board covering confused benefit types, missed deadlines, outdated income and unreported household changes.",
      "Conservative planning and prompt updates reduce common expat family benefit mistakes."
    ),
    expatQuestions: visual(
      "common-expat-questions",
      "Premium FAQ-style board with common expat questions about Dutch child benefits, nationality and cross-border work.",
      "Use these prompts in planning — then confirm on SVB, Belastingdienst and Government.nl."
    ),
    faq: visual(
      "faq",
      "Premium FAQ overview board for Kinderbijslag, Kindgebonden Budget and kinderopvangtoeslag with official source pointers.",
      "Orientation answers — SVB and Belastingdienst determine entitlement for your household."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium related guides map linking childcare allowance, daycare, schools and relocation guides for expat families.",
      "Connect child benefits with childcare, schools and relocation planning."
    ),
    familyHub: visual(
      "family-hub",
      "Premium family hub ecosystem diagram — tools, childcare, benefits and culture guides for relocating families.",
      "This page is the child benefits cornerstone — explore family tools and guides next."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium explore-next pathway from child benefits to daycare, allowance, schools and DigiD setup.",
      "Continue with daycare, childcare allowance, schools and relocation guides."
    ),
  },
  sectionNav: [
    { href: "#quick-answer", label: "Quick answer" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#understanding", label: "Overview" },
    { href: "#kinderbijslag", label: "Kinderbijslag" },
    { href: "#child-budget", label: "Child budget" },
    { href: "#childcare-allowance", label: "Childcare" },
    { href: "#other-support", label: "Other support" },
    { href: "#who-qualifies", label: "Who qualifies" },
    { href: "#apply", label: "Apply" },
    { href: "#payments", label: "Payments" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#moving-to", label: "Moving to NL" },
    { href: "#moving-away", label: "Moving away" },
    { href: "#expat-questions", label: "Expat questions" },
    { href: "#checklist", label: "Checklist" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#faq", label: "FAQ" },
    { href: "#related-guides", label: "Guides" },
    { href: "#family-hub", label: "Family hub" },
    { href: "#explore-next", label: "Explore next" },
  ],
  quickAnswer: {
    heading: "Quick answer: child benefits for families in the Netherlands",
    paragraphs: [
      "Dutch family support for children typically spans three separate systems: Kinderbijslag (child benefit) paid by SVB to parents with children in the Netherlands; Kindgebonden Budget (child-related budget) and kinderopvangtoeslag (childcare allowance) administered by the Belastingdienst through the toeslagen system; plus municipal or sector-specific schemes that vary by gemeente and employer.",
      "These benefits are not interchangeable. Kinderbijslag is a general child benefit tied to legal residence and children living in the Netherlands. Kindgebonden Budget is income-tested and supplements families with lower household incomes. Childcare allowance reimburses part of registered childcare costs for eligible working parents. Qualifying for one does not guarantee qualifying for another.",
      "Expat families follow the same official channels as Dutch nationals — SVB for Kinderbijslag, Mijn Toeslagen for Kindgebonden Budget and childcare allowance. You typically need a BSN, registered address and DigiD (or approved alternative). Amounts and thresholds change with policy — use official SVB and Belastingdienst calculators rather than blog figures.",
    ],
    keyPoints: [
      { title: "Three separate systems", body: "Kinderbijslag (SVB), Kindgebonden Budget (Belastingdienst) and kinderopvangtoeslag each have distinct rules — never assume one application covers all." },
      { title: "Residence matters", body: "Benefits generally require legal residence in the Netherlands and children registered at your Dutch address — cross-border commuting adds complexity." },
      { title: "Update life changes", body: "Income shifts, new children, divorce, relocation and childcare contract changes can affect toeslagen — report via official portals promptly." },
      { title: "No entitlement guarantees", body: "This guide orients you — SVB and Belastingdienst determine eligibility and amounts based on current law and your household data." },
    ] satisfies ChildBenefitsCard[],
    benefitSummary: [
      "Kinderbijslag — quarterly child benefit via SVB for parents with children in the Netherlands",
      "Kindgebonden Budget — income-tested supplement via Belastingdienst toeslagen",
      "Kinderopvangtoeslag — childcare cost reimbursement for registered LRK care",
      "Healthcare allowance (zorgtoeslag) — separate toeslag for health insurance premiums",
      "Rent allowance (huurtoeslag) — separate toeslag for qualifying renters",
      "Municipal schemes — childcare vouchers or subsidies vary by gemeente — check locally",
    ],
    scenarios: [
      { profile: "Newborn — Amsterdam", scenario: "Baby born in NL; both parents employed; registered at gemeente", whatToCheck: "Apply Kinderbijslag via SVB after BSN; check Kindgebonden Budget and childcare allowance when income known." },
      { profile: "HSM relocation — The Hague", scenario: "Two children ages 3 and 7; arriving from UK; 30% ruling", whatToCheck: "Register address; SVB application; toeslagen after tax residency clear; school and childcare parallel." },
      { profile: "Single parent — Utrecht", scenario: "One child age 5; part-time work; registered childcare 3 days", whatToCheck: "Kinderbijslag regardless of income; Kindgebonden Budget if income qualifies; childcare allowance if work hours meet rules." },
      { profile: "Cross-border — Limburg", scenario: "Partner works in Belgium; family lives in NL", whatToCheck: "Residence vs work country rules; SVB and toeslagen may still apply — verify cross-border with official sources." },
    ],
  },
  introPlanningSteps: [
    "Register your address at the gemeente and obtain BSNs for all family members.",
    "Set up DigiD and explore SVB and Mijn Toeslagen portals before applying.",
    "List each benefit separately — Kinderbijslag, Kindgebonden Budget and childcare allowance — with its administrator.",
  ],
  snapshotCards: [
    { label: "Child benefit", value: "Kinderbijslag", note: "Paid by SVB — general benefit for children living in the Netherlands." },
    { label: "Child budget", value: "Kindgebonden Budget", note: "Income-tested toeslag via Belastingdienst — not automatic with Kinderbijslag." },
    { label: "Childcare allowance", value: "Kinderopvangtoeslag", note: "Reimburses registered childcare — working-hour rules apply." },
    { label: "Apply Kinderbijslag", value: "SVB", note: "Sociale Verzekeringsbank — online portal after BSN registration." },
    { label: "Apply toeslagen", value: "Mijn Toeslagen", note: "Belastingdienst Dienst Toeslagen — DigiD required for most applicants." },
    { label: "Verify amounts", value: "Official tools", note: "Use SVB and Belastingdienst calculators — amounts change with policy." },
  ],
  understanding: {
    heading: "Understanding Dutch family benefits",
    paragraphs: [
      "The Netherlands supports families through a mix of universal and income-tested benefits. For most expat parents, the starting trio is Kinderbijslag, Kindgebonden Budget and kinderopvangtoeslag — but each sits in a different administrative system with different eligibility logic.",
      "Kinderbijslag is the broad child benefit paid to parents or guardians for children who live in the Netherlands. It is administered by SVB and is not the same as toeslagen. Kindgebonden Budget and childcare allowance are toeslagen — supplements calculated from household income, family composition and specific conditions such as childcare registration or rent.",
      "Planning tip: map benefits to life events. A newborn triggers SVB registration. Starting registered childcare triggers kinderopvangtoeslag. A sharp income drop may affect Kindgebonden Budget. Leaving the Netherlands requires notifying both SVB and Belastingdienst. Treat official portals as the source of truth.",
    ],
    comparisonRows: [
      { benefit: "Kinderbijslag", purpose: "General child benefit for parents with children in NL", adminOrg: "SVB (Sociale Verzekeringsbank)", paymentFrequency: "Quarterly", eligibilityBasis: "Child residence in NL; parent/guardian link; legal residence rules" },
      { benefit: "Kindgebonden Budget", purpose: "Income supplement for families with children", adminOrg: "Belastingdienst — Dienst Toeslagen", paymentFrequency: "Monthly (toeslagen rhythm)", eligibilityBasis: "Household income test; children registered; toeslagen residency rules" },
      { benefit: "Kinderopvangtoeslag", purpose: "Reimburse part of registered childcare costs", adminOrg: "Belastingdienst — Dienst Toeslagen", paymentFrequency: "Monthly", eligibilityBasis: "LRK childcare; work/study hours; income; childcare contract" },
      { benefit: "Zorgtoeslag", purpose: "Help with health insurance premium", adminOrg: "Belastingdienst — Dienst Toeslagen", paymentFrequency: "Monthly", eligibilityBasis: "Income test; Dutch health insurance; separate from child benefits" },
      { benefit: "Huurtoeslag", purpose: "Help with rent for qualifying tenants", adminOrg: "Belastingdienst — Dienst Toeslagen", paymentFrequency: "Monthly", eligibilityBasis: "Income; rent level; housing type — separate child benefit" },
      { benefit: "Municipal support", purpose: "Local childcare or family schemes", adminOrg: "Gemeente (varies)", paymentFrequency: "Varies", eligibilityBasis: "Local policy — check gemeente website" },
    ] satisfies BenefitComparisonRow[],
  },
  kinderbijslag: {
    heading: "Child benefit (Kinderbijslag)",
    paragraphs: [
      "Kinderbijslag is the Dutch child benefit paid to parents or guardians for children who live in the Netherlands. SVB (Sociale Verzekeringsbank) administers payments. It is designed as a general family benefit — not tied to childcare invoices or rent like toeslagen.",
      "Amounts depend on the child's age band and policy set by government — they update periodically. Do not rely on blog figures: check SVB's current payment information. Kinderbijslag is typically paid quarterly. You apply through SVB once your child is registered and you meet residence requirements.",
      "For expats, the key questions are whether your child is considered to live in the Netherlands, whether you have legal residence and BSN, and whether cross-border work or prior residence abroad affects the start date. SVB publishes guidance for international situations — use their portal rather than informal forums.",
    ],
    points: [
      "Administrator: SVB — not Belastingdienst.",
      "Purpose: general child benefit — not linked to childcare costs or rent.",
      "Payment rhythm: typically quarterly — confirm current schedule on SVB.",
      "Application: SVB online portal after BSN and child registration.",
      "Age bands: payment category changes as children grow — SVB adjusts automatically when data is correct.",
      "Cross-border: special rules may apply if parents work abroad or children recently moved — verify with SVB.",
    ],
    links: [
      { label: "SVB — Kinderbijslag", href: "https://www.svb.nl/en/child-benefit", description: "Official SVB child benefit information and application portal." },
      { label: "Government.nl — Child benefit", href: "https://www.government.nl/topics/child-benefit", description: "Government overview of Kinderbijslag policy and parents' rights." },
    ] satisfies ChildBenefitsLink[],
  },
  childBudget: {
    heading: "Child budget (Kindgebonden Budget)",
    paragraphs: [
      "Kindgebonden Budget is an income-tested toeslag for families with children. It supplements households with lower incomes and is administered by the Belastingdienst through Dienst Toeslagen — the same system as childcare allowance and healthcare allowance.",
      "Eligibility depends on household income, family composition and toeslagen residency rules. It is not automatic when you receive Kinderbijslag. You must apply (or receive a provisional decision) through Mijn Toeslagen. Amounts change with income — higher household income reduces or eliminates the supplement.",
      "Expat families with variable income — bonus years, 30% ruling transitions or first-year partial employment — should model toeslagen carefully. Overestimating income can mean lower supplements; underestimating can lead to repayments. Use Belastingdienst provisional calculation tools and update when salary stabilises.",
    ],
    points: [
      "Income-tested: household income determines entitlement — use official calculators.",
      "Separate from Kinderbijslag: SVB child benefit and Kindgebonden Budget are different applications.",
      "Monthly toeslagen rhythm: paid with other allowances through Dienst Toeslagen.",
      "Children count: number and age of children in household affect calculation.",
      "Updates required: report income changes, relationship changes and address moves promptly.",
      "Partner income: toeslagen generally assess the household — not individual salaries alone.",
    ],
    links: [
      { label: "Belastingdienst — Toeslagen", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/allowances/allowances", description: "Official allowance information including Kindgebonden Budget." },
      { label: "Mijn Toeslagen", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/toeslagen/toeslagen", description: "Application and update portal for Dutch allowances." },
    ] satisfies ChildBenefitsLink[],
  },
  childcareAllowance: {
    heading: "Childcare allowance (kinderopvangtoeslag)",
    paragraphs: [
      "Childcare allowance reimburses part of the cost of registered LRK childcare for eligible parents who work or study. It is one of the most valuable toeslagen for working expat families but has strict rules on provider registration, contracted hours and work-linked eligibility.",
      "This page summarises how childcare allowance fits alongside Kinderbijslag and Kindgebonden Budget. For step-by-step eligibility, work-hour rules, application flows and expat scenarios, use our dedicated childcare allowance guide and cost estimator.",
    ],
    points: [
      "Administrator: Belastingdienst Dienst Toeslagen — not SVB.",
      "Registered care only: LRK-registered kinderopvang typically required.",
      "Work-linked: parents usually need qualifying work or study hours.",
      "Income-dependent: reimbursement percentage varies with household income.",
      "Separate benefit: receiving Kinderbijslag does not automatically grant childcare allowance.",
      "Dedicated guide: see full kinderopvangtoeslag walkthrough for expat detail.",
    ],
    links: [
      { label: "Childcare Allowance guide", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Full ExpatLife guide to kinderopvangtoeslag rules and expat scenarios." },
      { label: "Daycare guide", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Find registered childcare and understand LRK requirements." },
      { label: "Childcare cost estimator", href: CHILDCARE_COST_ESTIMATOR_PATH, status: "live", description: "Model net childcare costs with allowance orientation." },
    ] satisfies ChildBenefitsLink[],
  },
  otherSupport: {
    heading: "Other family support to know about",
    paragraphs: [
      "Beyond the core child benefits, Dutch families often use healthcare allowance (zorgtoeslag) and rent allowance (huurtoeslag) — both are toeslagen with their own income tests. Employer benefits such as enhanced parental leave, childcare search support or sector pensions may add to household planning.",
      "Municipalities sometimes offer childcare vouchers, play schemes or low-income supplements — policies differ by gemeente. International employers and diplomatic missions may provide separate education or childcare stipends that do not replace Dutch statutory benefits but affect your net budget.",
    ],
    cards: [
      { title: "Healthcare allowance (zorgtoeslag)", body: "Income-tested help with Dutch health insurance premiums — separate application via Mijn Toeslagen." },
      { title: "Rent allowance (huurtoeslag)", body: "Income-tested help for qualifying renters — housing type and rent level matter; not a child benefit." },
      { title: "Parental leave benefits", body: "Employer and UWV schemes during birth leave — distinct from Kinderbijslag; check contract and SVB/UWV guidance." },
      { title: "Municipal childcare schemes", body: "Some gemeenten offer vouchers or subsidies — check local childcare pages after registration." },
      { title: "Employer relocation packages", body: "May include childcare search or stipends — clarify tax treatment with employer and advisor." },
      { title: "School costs", body: "Dutch basisschool is generally free; international schools charge fees — separate from child benefit system." },
    ] satisfies ChildBenefitsCard[],
    links: [
      { label: "Healthcare Allowance", href: HEALTHCARE_ALLOWANCE_PATH, status: "live", description: "Zorgtoeslag orientation for expat households." },
      { label: "Rent Allowance", href: RENT_ALLOWANCE_PATH, status: "live", description: "Huurtoeslag rules for qualifying renters." },
      { label: "Taxes hub", href: TAXES_HUB_PATH, status: "live", description: "Broader toeslagen and tax context for families." },
    ] satisfies ChildBenefitsLink[],
  },
  whoQualifies: {
    heading: "Who may qualify?",
    paragraphs: [
      "Eligibility is benefit-specific. Nationality alone rarely determines entitlement — legal residence, where children live, household income and work patterns matter more. The cards below summarise typical orientation for expat families; SVB and Belastingdienst confirm individual cases.",
    ],
    cards: [
      {
        title: "Parents with children in the Netherlands",
        body: "Kinderbijslag generally requires children to live in the Netherlands and parents to meet SVB residence rules.",
        expatNote: "Register your child at the gemeente promptly after birth or arrival — SVB uses official registration data.",
      },
      {
        title: "Low to moderate income households",
        body: "Kindgebonden Budget targets families whose household income falls within toeslagen thresholds.",
        expatNote: "First-year expats with partial-year income should use Belastingdienst provisional tools — update when final salary is clear.",
      },
      {
        title: "Working parents using registered childcare",
        body: "Childcare allowance requires LRK-registered care and qualifying work or study hours for parents.",
        expatNote: "Both partners' hours often matter — verify exceptions for single parents, ZZP and study pathways on official guidance.",
      },
      {
        title: "New arrivals with residence permits",
        body: "Legal residence and BSN are typically prerequisites for SVB and toeslagen applications.",
        expatNote: "Highly skilled migrants and EU citizens follow the same portals — timing starts after registration, not visa approval alone.",
      },
      {
        title: "Single parents and co-parenting",
        body: "Household composition affects toeslagen — who is fiscally partnered matters for income tests.",
        expatNote: "Blended families and shared custody may need extra documentation — keep gemeente and toeslagen records aligned.",
      },
      {
        title: "Cross-border families",
        body: "Living in NL while working abroad (or vice versa) can trigger special coordination rules.",
        expatNote: "Border commuters in Limburg and Brabant should read SVB and Belastingdienst cross-border sections — do not assume domestic-only rules.",
      },
      {
        title: "Families with variable or bonus income",
        body: "Bonus years, 30% ruling transitions and partial first-year employment affect toeslagen calculations.",
        expatNote: "Model provisional income carefully and update Mijn Toeslagen when your tax picture stabilises.",
      },
    ] satisfies QualifyCard[],
  },
  apply: {
    heading: "How to apply",
    paragraphs: [
      "Applications go through official channels — never through childcare providers for Kinderbijslag or through SVB for toeslagen. Most expat families need DigiD (or an approved alternative) for online portals. Start after BSN and address registration are complete.",
    ],
    steps: [
      { name: "Register at the gemeente", text: "Register your address and obtain BSN for each family member.", tip: "Bring birth certificates and marriage documents — international docs may need legalisation." },
      { name: "Set up DigiD", text: "Activate DigiD for online access to SVB and Belastingdienst.", tip: "See our DigiD guide if you are new to Dutch digital government." },
      { name: "Apply Kinderbijslag — SVB", text: "Submit child benefit application via SVB portal when child is registered.", tip: "SVB may start payments from registration date if data is complete — confirm start month on acceptance letter." },
      { name: "Apply toeslagen — Belastingdienst", text: "Apply for Kindgebonden Budget and childcare allowance via Mijn Toeslagen.", tip: "You can apply for multiple toeslagen in one session — each has separate eligibility checks." },
      { name: "Link childcare contract", text: "For kinderopvangtoeslag, enter LRK provider details and contracted hours.", tip: "Apply after childcare starts — retroactive rules are limited; check official deadlines." },
      { name: "Review provisional decision", text: "Read Belastingdienst provisional calculation and expected amounts.", tip: "Provisional toeslagen use estimated income — true-up happens after annual tax assessment." },
      { name: "Update when life changes", text: "Report income, address, relationship and childcare changes promptly.", tip: "Late updates are a leading cause of toeslagen repayments for expat families." },
    ] satisfies ApplicationStep[],
    links: [
      { label: "DigiD guide", href: DIGID_PATH, status: "live", description: "Set up Dutch digital ID for government portals." },
      { label: "BSN registration", href: BSN_REGISTRATION_PATH, status: "live", description: "Personal number needed before benefit applications." },
    ] satisfies ChildBenefitsLink[],
  },
  payments: {
    heading: "Payment schedules",
    paragraphs: [
      "Payment timing differs by benefit. Kinderbijslag from SVB is typically quarterly. Toeslagen from Belastingdienst — including Kindgebonden Budget and childcare allowance — usually follow a monthly rhythm aligned with the toeslagen calendar.",
      "Annual tax assessment reconciles provisional toeslagen with actual household income. A higher final income than estimated can mean repayment; a lower income may mean a supplement. Plan household cash flow knowing quarters and months may not align across SVB and Belastingdienst.",
    ],
    points: [
      "Kinderbijslag: quarterly SVB payments — confirm dates on SVB for current year.",
      "Toeslagen: monthly payments — Kindgebonden Budget and childcare allowance together when both granted.",
      "Provisional vs final: toeslagen are estimates until annual tax assessment completes.",
      "Bank account: ensure Dutch or SEPA-capable account registered with SVB and Belastingdienst.",
      "Holiday timing: SVB and Belastingdienst publish payment calendars — useful for family budgeting.",
      "Cross-year moves: arrival or departure mid-year affects which months count — notify administrators.",
    ],
  },
  scenarios: {
    heading: "Family scenarios",
    paragraphs: [
      "These examples illustrate how different households typically approach Dutch child benefits. They are planning sketches — not eligibility guarantees. Use official calculators and application outcomes for your situation.",
    ],
    rows: [
      { profile: "Newborn Dutch couple", scenario: "Baby born in NL; both employed full-time; planning daycare at 4 months", whatToCheck: "SVB Kinderbijslag after registration; Kindgebonden Budget if income qualifies; kinderopvangtoeslag when LRK contract starts." },
      { profile: "Expat HSM family", scenario: "Relocating from US; children ages 2 and 6; 30% ruling; The Hague", whatToCheck: "Address registration; SVB application; toeslagen after tax picture clear; international school fees separate from benefits." },
      { profile: "Single parent", scenario: "One child age 4; part-time work; gastouder 3 days", whatToCheck: "Kinderbijslag via SVB; Kindgebonden Budget likely if income lower; childcare allowance if work hours meet rules." },
      { profile: "Blended family", scenario: "Two children from previous relationships; co-parenting schedule", whatToCheck: "Household composition for toeslagen; gemeente registration for each child; document custody for SVB if asked." },
      { profile: "EU commuter", scenario: "Family in Maastricht; one parent employed in Belgium", whatToCheck: "Cross-border residence and work rules; SVB international desk orientation; toeslagen residency test." },
      { profile: "Non-working trailing spouse", scenario: "One earner; two young children; no childcare yet", whatToCheck: "Kinderbijslag still relevant; Kindgebonden Budget depends on household income; no childcare allowance without qualifying work pattern." },
    ],
  },
  movingTo: {
    heading: "Moving to the Netherlands with children",
    paragraphs: [
      "Relocating with children adds benefit applications to your arrival checklist alongside housing, schools and childcare. Start SVB and toeslagen planning once your gemeente registration is confirmed — many families apply within the first weeks after BSN issuance.",
      "If children remain abroad temporarily (e.g. finishing a school term), benefit start dates may differ. Bring birth certificates, marriage certificates and prior tax records. Employer relocation teams sometimes assist with SVB orientation but do not submit applications on your behalf.",
    ],
    points: [
      "Pre-arrival: gather identity and birth documents; note target gemeente registration date.",
      "First week: register address; apply BSN for children; activate DigiD.",
      "First month: apply SVB Kinderbijslag; assess toeslagen when income data available.",
      "Childcare: register LRK providers early; apply kinderopvangtoeslag when contract active.",
      "Schools: basisschool from age 4 — benefit planning parallel to school choice.",
      "Moving guide: see family relocation guide for broader checklist.",
    ],
    checklist: [
      "Legalise or apostille birth certificates if required by gemeente",
      "Register all children at gemeente on same appointment where possible",
      "Apply SVB Kinderbijslag within first months after registration",
      "Model toeslagen once employment contract income is known",
      "Link childcare allowance application to LRK contract start date",
      "Keep copies of SVB and Belastingdienst decision letters",
    ],
    links: [
      { label: "Moving with children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Broader family relocation planning guide." },
      { label: "Moving with family", href: MOVING_WITH_FAMILY_PATH, status: "live", description: "Household relocation orientation for couples and families." },
    ] satisfies ChildBenefitsLink[],
  },
  movingAway: {
    heading: "Moving away from the Netherlands",
    paragraphs: [
      "Leaving the Netherlands triggers benefit end dates and reporting duties. Notify SVB when children no longer live in the Netherlands and update Belastingdienst toeslagen when your tax residency changes. Failure to report departure is a common source of repayments and continued payments that must be returned.",
      "Cross-border moves may raise questions about which country pays child benefit after departure. EU coordination rules and bilateral agreements can apply — SVB publishes guidance for outgoing families. Align benefit notifications with your deregistration (uitgeschreven) date at the gemeente.",
    ],
    points: [
      "Notify SVB: end Kinderbijslag when children leave Dutch residence.",
      "Update toeslagen: report departure and income changes to Belastingdienst.",
      "Gemeente deregistration: align uitgeschreven date with benefit end planning.",
      "Final tax year: toeslagen reconciliation may continue into departure year.",
      "Cross-border child benefit: another country may claim priority — verify coordination rules.",
      "Leaving tax guide: see exit tax orientation for broader fiscal departure planning.",
    ],
    links: [
      { label: "Leaving Netherlands tax", href: LEAVING_TAX_PATH, status: "live", description: "Tax and toeslagen context when exiting the Netherlands." },
      { label: "SVB — international situations", href: "https://www.svb.nl/en/child-benefit/living-or-working-abroad", description: "Official SVB guidance when living or working abroad." },
    ] satisfies ChildBenefitsLink[],
  },
  expatQuestions: {
    heading: "Common expat questions",
    paragraphs: [
      "Expat families often ask the same benefit questions during relocation. Use these orientation answers — then confirm details on official sources or with qualified advisors for personal cases.",
    ],
    questions: [
      { q: "Do expats get Kinderbijslag?", a: "Many expat families with legal residence and children living in the Netherlands can apply for Kinderbijslag through SVB — nationality is not the primary test; residence and registration matter." },
      { q: "Is Kinderbijslag the same as childcare allowance?", a: "No. Kinderbijslag is SVB child benefit. Childcare allowance (kinderopvangtoeslag) is a Belastingdienst toeslag for registered childcare costs — separate application and rules." },
      { q: "Do I need to apply for Kindgebonden Budget?", a: "Yes — it is not automatic with Kinderbijslag. Apply via Mijn Toeslagen if your household income may qualify under current toeslagen rules." },
      { q: "When should I apply after arrival?", a: "Apply SVB Kinderbijslag after BSN and gemeente registration — many families do so in the first weeks. Toeslagen when income and childcare plans are clear." },
      { q: "Does the 30% ruling affect child benefits?", a: "It affects your tax and income picture used for toeslagen calculations — verify how your ruling year income is assessed on Belastingdienst guidance." },
      { q: "What if my partner is not Dutch?", a: "Toeslagen assess the household — partner nationality matters less than residence, registration and combined income." },
      { q: "Can I receive benefits while on parental leave?", a: "Parental leave may affect work-hour tests for childcare allowance — Kinderbijslag generally continues while child resides in NL; confirm leave-specific rules officially." },
      { q: "What happens if we leave mid-year?", a: "Report departure to SVB and Belastingdienst; benefits typically end when residency ends — annual toeslagen reconciliation may still apply for the departure year." },
    ],
  },
  checklist: {
    heading: "Family benefits checklist",
    early: [
      "Confirm legal residence and target gemeente registration date for all children",
      "Gather birth certificates and legalised marriage documents",
      "Read SVB Kinderbijslag and Belastingdienst toeslagen overview pages",
      "Set up DigiD for adults who will manage applications",
    ],
    apply: [
      "Register address and obtain BSN for each child",
      "Submit SVB Kinderbijslag application online",
      "Apply Kindgebonden Budget via Mijn Toeslagen if income may qualify",
      "Apply kinderopvangtoeslag when LRK childcare contract starts",
      "Save confirmation letters and provisional toeslagen decisions",
    ],
    ongoing: [
      "Report income changes within official Belastingdienst windows",
      "Update childcare hours when contracts change",
      "Notify SVB of address moves within the Netherlands",
      "Review annual tax assessment and toeslagen reconciliation",
      "Report departure promptly if leaving the Netherlands",
    ],
  },
  mistakeCards: [
    {
      title: "Assuming one application covers all",
      body: "Example: applying only for Kinderbijslag and expecting childcare costs to be covered automatically.",
      advice: "Map SVB vs Belastingdienst benefits separately — three applications may be needed.",
    },
    {
      title: "Using outdated blog amounts",
      body: "Example: budgeting from a three-year-old Kinderbijslag table or toeslagen percentage.",
      advice: "Use current SVB and Belastingdienst calculators — policy updates change figures.",
    },
    {
      title: "Late toeslagen updates",
      body: "Example: salary increase or extra childcare days not reported for months.",
      advice: "Report changes via Mijn Toeslagen promptly — repayments can be substantial.",
    },
    {
      title: "Unregistered childcare",
      body: "Example: paying a nanny or informal caregiver and expecting kinderopvangtoeslag.",
      advice: "Only registered LRK childcare typically qualifies — see daycare guide for LRK verification.",
    },
    {
      title: "Missing gemeente registration",
      body: "Example: delaying child registration after birth or arrival.",
      advice: "SVB and toeslagen rely on official registration — book gemeente appointment early.",
    },
    {
      title: "Ignoring departure reporting",
      body: "Example: leaving NL without notifying SVB or Belastingdienst.",
      advice: "Align uitgeschreven date with benefit end notifications to avoid repayments.",
    },
    {
      title: "Confusing partner income rules",
      body: "Example: assuming only the lower earner's salary counts for toeslagen.",
      advice: "Household income generally drives toeslagen tests — model combined income officially.",
    },
  ] satisfies MistakeCard[],
  faq: [
    {
      q: "What is Kinderbijslag in the Netherlands?",
      a: "Kinderbijslag is the Dutch child benefit paid by SVB to parents or guardians for children living in the Netherlands. It is a general family benefit — separate from income-tested toeslagen like Kindgebonden Budget or childcare allowance.",
    },
    {
      q: "What is Kindgebonden Budget?",
      a: "Kindgebonden Budget is an income-tested toeslag for families with children, administered by the Belastingdienst. It supplements lower-income households and requires a separate application through Mijn Toeslagen.",
    },
    {
      q: "How is childcare allowance different from Kinderbijslag?",
      a: "Childcare allowance (kinderopvangtoeslag) reimburses registered childcare costs for eligible working parents via Belastingdienst. Kinderbijslag is SVB child benefit not tied to childcare invoices. Different administrators, rules and applications.",
    },
    {
      q: "Who administers Dutch child benefits?",
      a: "SVB administers Kinderbijslag. Belastingdienst Dienst Toeslagen administers Kindgebonden Budget, childcare allowance and other toeslagen. Municipal schemes vary by gemeente.",
    },
    {
      q: "When should expat families apply?",
      a: "After gemeente registration and BSN issuance — typically within the first weeks after arrival or birth. SVB for Kinderbijslag; Mijn Toeslagen for toeslagen when income and childcare plans are known.",
    },
    {
      q: "Do child benefit amounts change?",
      a: "Yes — government sets Kinderbijslag age bands and toeslagen rules, which update with policy. Always verify current amounts on SVB and Belastingdienst rather than third-party blogs.",
    },
    {
      q: "What documents are needed?",
      a: "Typically BSN, proof of registration, bank account details and childcare LRK data for kinderopvangtoeslag. Cross-border or custody situations may need extra documents — SVB and Belastingdienst list requirements online.",
    },
    {
      q: "What if we leave the Netherlands?",
      a: "Notify SVB when children no longer live in the Netherlands and update Belastingdienst toeslagen when tax residency ends. Align notifications with gemeente deregistration to avoid overpayment repayments.",
    },
  ],
  relatedGuides: [
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Kinderopvangtoeslag rules, work hours and application for expat parents." },
    { label: "Daycare", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Registered childcare, LRK and waiting lists for young children." },
    { label: "Moving with Children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Family relocation checklist including schools and registration." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "Basisschool enrolment from age 4 — parallel to benefit planning." },
    { label: "International Schools", href: INTERNATIONAL_SCHOOLS_PATH, status: "live", description: "International education costs — separate from statutory child benefits." },
    { label: "Healthcare Allowance", href: HEALTHCARE_ALLOWANCE_PATH, status: "live", description: "Zorgtoeslag for health insurance premiums — another toeslag." },
    { label: "Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Broader tax and toeslagen orientation for expat households." },
  ] satisfies ChildBenefitsLink[],
  familyHubCards: [
    { label: "Child benefits", href: CHILD_BENEFITS_NETHERLANDS_PATH, status: "live", description: "This guide — Kinderbijslag, Kindgebonden Budget and family allowances." },
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Kinderopvangtoeslag for registered childcare." },
    { label: "Childcare cost estimator", href: CHILDCARE_COST_ESTIMATOR_PATH, status: "live", description: "Model net childcare costs with allowance orientation." },
    { label: "Daycare", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Childcare types, directory and waiting list planning." },
    { label: "Moving with children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "Relocation planning for families with young children." },
    { label: "Family life culture", href: FAMILY_LIFE_PATH, status: "live", description: "Dutch family norms and school rhythms." },
  ] satisfies ChildBenefitsLink[],
  exploreNextCards: [
    { label: "Childcare Allowance", href: CHILDCARE_ALLOWANCE_PATH, status: "live", description: "Deep dive into kinderopvangtoeslag after this overview." },
    { label: "Daycare", href: DAYCARE_NETHERLANDS_PATH, status: "live", description: "Find LRK childcare before applying for allowance." },
    { label: "Moving with children", href: MOVING_WITH_KIDS_PATH, status: "live", description: "End-to-end arrival checklist for families." },
    { label: "Dutch Schools", href: DUTCH_SCHOOLS_PATH, status: "live", description: "School choice when your child turns 4." },
    { label: "DigiD", href: DIGID_PATH, status: "live", description: "Set up digital ID for SVB and toeslagen portals." },
  ] satisfies ChildBenefitsLink[],
  officialSources: [
    { label: "SVB — Child benefit", href: "https://www.svb.nl/en/child-benefit", description: "Official Kinderbijslag information, application and payment schedules." },
    { label: "Belastingdienst — Allowances", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/allowances/allowances", description: "Kindgebonden Budget, childcare allowance and other toeslagen." },
    { label: "Government.nl — Child benefit", href: "https://www.government.nl/topics/child-benefit", description: "Government policy overview for Dutch child benefit." },
    { label: "Rijksoverheid — Kinderbijslag", href: "https://www.rijksoverheid.nl/onderwerpen/kinderbijslag", description: "Dutch-language official Kinderbijslag information." },
    { label: "DigiD", href: "https://www.digid.nl/en/", description: "Digital identity for Dutch government online services." },
  ],
  officialSourcesNote:
    "Child benefit and toeslagen rules change with policy and household circumstances. Verify current eligibility, amounts and deadlines on SVB, Belastingdienst and Government.nl — this guide is orientation only, not financial or legal advice.",
} as const;

export type ChildBenefitsNetherlandsPage = typeof childBenefitsNetherlandsPage;

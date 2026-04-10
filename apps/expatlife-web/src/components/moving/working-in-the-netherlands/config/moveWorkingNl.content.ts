import type { PillarFaqItem } from "@expatlife/content";
import type {
  MoveWorkingNlMisunderstanding,
  MoveWorkingNlPageMeta,
  MoveWorkingNlReferences,
  MoveWorkingNlRelatedTools,
  MoveWorkingNlSections,
  MoveWorkingNlStartCard,
  MoveWorkingNlTip,
} from "./moveWorkingNl.types";

export const moveWorkingNlRoutes = {
  canonical: "/netherlands/moving/working-in-the-netherlands/",
  hub: "/netherlands/moving-to-the-netherlands/",
  visas: "/netherlands/moving/visas-residency/",
  residencePermits: "/netherlands/moving/residence-permits/",
  twvWorkPermit: "/netherlands/moving/twv-work-permit/",
  extensions: "/netherlands/moving/extensions-changes/",
  statusChanges: "/netherlands/moving/status-changes/",
  workGuide: "/netherlands/work/working-in-netherlands/",
  workTools: "/netherlands/work/tools/",
  moveTools: "/netherlands/moving/tools/",
  moneyTools: "/netherlands/money/tools/",
  housingTools: "/netherlands/housing/tools/",
  documentsNeeded: "/netherlands/documents-needed-to-move-netherlands/",
  jobOffer: "/netherlands/work/tools/job-offer-comparison/",
  contractScanner: "/netherlands/work/tools/employment-contract-risk-scanner/",
  employmentType: "/netherlands/work/tools/employment-type-scenario-tool/",
  payslip: "/netherlands/work/tools/payslip-decoder/",
  salaryNet: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
  ruling: "/netherlands/taxes/tools/30-ruling-calculator/",
  costOfLiving: "/netherlands/money/tools/cost-of-living-calculator/",
  rentAffordability: "/netherlands/housing/tools/rent-affordability-calculator/",
  healthcareAllowance: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
  childcare: "/netherlands/family/tools/childcare-cost-estimator/",
  first90Days: "/netherlands/moving/tools/first-90-days/",
  arrivalPlanner: "/netherlands/moving/tools/arrival-planner/",
  documentReadiness: "/netherlands/moving/tools/document-readiness/",
  afterArriving: "/netherlands/after-arriving-netherlands/",
  municipalityRegistration: "/netherlands/municipality-registration-netherlands/",
  bsn: "/netherlands/bsn-registration/",
  healthcareBasics: "/netherlands/living/healthcare-basics/",
  survivalGuide: "/netherlands/living/survival-guide/",
  dailyLife: "/netherlands/living/daily-life/",
} as const;

const ROUTES = moveWorkingNlRoutes;

const moveWorkingNlHero = {
  eyebrow: "Netherlands · Moving",
  pageTitle: "Working in the Netherlands",
  subtitle:
    "A practical Move guide for people relocating to the Netherlands for work — so you can understand **the offer, the contract, the salary, the permit picture, and the first-month setup** before the move starts feeling expensive or unclear.",
  contextChips: ["Offer", "Contract", "Salary", "Permit", "Payroll", "Housing"],
  bullets: [
    "See what matters **before you accept**, **before you move**, and **after you arrive**",
    "Understand how **salary, permits, payroll, housing, and admin** connect in real life",
    "Know which details are worth clarifying with **HR, payroll, or official sources early**",
    "Open the right next tools without turning this into a legal or tax deep dive",
  ],
  primaryCta: { label: "Start with the essentials", href: "#start-here" },
  secondaryCta: { label: "See the common work-move issues", href: "#misunderstandings" },
  compareLinks: {
    visasPage: { label: "Visas & residency orientation", href: ROUTES.visas },
    permitsPage: { label: "Residence permits in the Netherlands", href: ROUTES.residencePermits },
    workGuide: { label: "broader work guide", href: ROUTES.workGuide },
  },
} as const;

const moveWorkingNlAtAGlance = {
  sectionTitle: "At a glance",
  subtitle: "A Move-pillar orientation page for people whose relocation is being shaped by a job.",
  cells: [
    {
      title: "What this page is for",
      body: "**Practical orientation** for people moving to the Netherlands because of work, so you can spot the big decisions before you get lost in fine print.",
    },
    {
      title: "Best for",
      body: "**Expats, professionals, employer-sponsored movers, and couples or families** comparing a Dutch role with the real-life move that comes with it.",
    },
    {
      title: "What it covers",
      body: "**Offers, contracts, salary, permits, payroll, tax setup, housing pressure, and post-arrival admin** — plus the next ExpatCopilot tools and guides to open.",
    },
    {
      title: "What it skips",
      body: "**Case-specific legal advice, full labour-law detail, and job-search listings.** This page helps you orient, not self-decide an official outcome.",
    },
  ],
  note:
    "**Moving for work is not only about the role.** Salary, sponsorship, payroll, admin, and living costs all interact. Use this page to get oriented fast, then confirm critical details with your employer, payroll, official sources, or a qualified adviser.",
} as const;

export const moveWorkingNlTips: MoveWorkingNlTip[] = [
  {
    id: "reassurance",
    title: "Treat the job decision and the move decision as one package",
    intro:
      "A role can look strong on paper while the **relocation picture still feels shaky**. The useful next step is usually not “read everything” — it is **clarify one missing piece**: the contract, the sponsor setup, the rent reality, or the first-weeks admin plan.",
    whatMattersNext: "Pick one pressure point and open the next page or tool for that specific question.",
    visualKey: "default",
  },
];

const moveWorkingNlPillarJourneyBridge = {
  id: "move-pillar-context",
  eyebrow: "Inside the Move pillar",
  title: "How this page connects to the rest of ExpatCopilot",
  intro:
    "**Visas & residency** helps you compare routes. **Residence permits** explains what residence means over time. **This page** sits on the work-led move path: what a job offer changes, what employers often support, and what becomes real after arrival. **Extensions & changes** and **Status changes** take over later when your situation shifts.",
  links: [
    {
      href: ROUTES.hub,
      label: "Moving to the Netherlands",
      description: "Main Move pillar: stages, scenarios, tools, and the wider relocation picture.",
      meta: "Move",
    },
    {
      href: ROUTES.visas,
      label: "Visas & residency orientation",
      description: "Route-doorway page before you lock onto one permit story.",
      meta: "Move",
    },
    {
      href: ROUTES.residencePermits,
      label: "Residence permits",
      description: "Permit purpose, renewal, and what residence means in practical life.",
      meta: "Move",
    },
    {
      href: ROUTES.jobOffer,
      label: "Job offer comparison",
      description: "Compare relocation value, support, and cash flow rather than gross alone.",
      meta: "Work",
    },
    {
      href: ROUTES.salaryNet,
      label: "Dutch salary net calculator",
      description: "Translate gross salary into a more realistic monthly picture.",
      meta: "Money",
    },
    {
      href: ROUTES.first90Days,
      label: "First 90 days planner",
      description: "Keep the first months practical once the job start date is real.",
      meta: "Move",
    },
  ],
} as const;

const moveWorkingNlStartHereRegion = {
  id: "start-here",
  eyebrow: "Start here",
  title: "If you are moving for work",
  subtitle:
    "Use this page in **three moments**: before you accept, before you relocate, and after you arrive. That sequence is usually more useful than trying to solve everything at once.",
} as const;

export const moveWorkingNlStartCards: MoveWorkingNlStartCard[] = [
  {
    id: "accept-offer",
    iconKey: "offer",
    visualKey: "offer",
    title: "Before you accept the offer",
    intro: "Treat the offer like a **move package** rather than a salary headline.",
    bestFor: "Best for people comparing a real role, negotiation point, or shortlist.",
    keyPoints: [
      "Check the **contract type**, probation, notice, and whether the role is fixed-term or open-ended",
      "Clarify **sponsorship, relocation help, and what the employer actually handles**",
      "Compare salary against **rent, city choice, commute, and setup cash**",
      "Ask whether **30% ruling support** is likely, expected, or not in scope",
      "Do not compare **gross salary alone** without benefits, pension, and move support",
    ],
    whatMattersNext: "Open the offer, salary, and rent tools once the package starts feeling concrete.",
    internalLinks: [
      { label: "Job offer comparison tool", href: ROUTES.jobOffer },
      { label: "Dutch salary net calculator", href: ROUTES.salaryNet },
    ],
  },
  {
    id: "before-relocate",
    iconKey: "relocate",
    visualKey: "relocate",
    title: "Before you relocate",
    intro: "The move gets easier once **permit logic, housing, and admin timing** are connected early.",
    bestFor: "Best for people with a start date, permit path, or relocation timeline already forming.",
    keyPoints: [
      "Understand the **permit, residence, and employer admin path** before booking around assumptions",
      "Plan **housing, deposits, furnishing, and buffer cash** for the first weeks",
      "Know the basics of **payroll, health insurance, BSN, and bank setup** before day one",
      "Gather the **documents, dates, and employer requests** that can block the move",
      "Plan beyond the first workday: **registration and settling-in tasks** still matter",
    ],
    whatMattersNext: "Use Move, permit, and arrival tools to turn the job start into an actual relocation plan.",
    internalLinks: [
      { label: "Visas & residency", href: ROUTES.visas },
      { label: "Arrival planner", href: ROUTES.arrivalPlanner },
    ],
  },
  {
    id: "after-arrive",
    iconKey: "arrival",
    visualKey: "arrival",
    title: "After you arrive",
    intro: "The first weeks often feel like **admin plus adaptation**, not just starting a new role.",
    bestFor: "Best for people who have landed or are about to start work and need the first weeks sequenced.",
    keyPoints: [
      "Sort **municipality registration, BSN, payroll, and bank details** quickly",
      "Arrange **healthcare and insurance** on the right timeline for your situation",
      "Understand your **payslip, deductions, and onboarding steps** once payroll starts",
      "Settle **commute, utilities, and daily routine** so the role is sustainable",
      "If relevant, coordinate **partner, childcare, or family admin** alongside your own setup",
    ],
    whatMattersNext: "Use the first-weeks tools to unblock payroll and make the role feel sustainable in real life.",
    internalLinks: [
      { label: "First 90 days planner", href: ROUTES.first90Days },
      { label: "Healthcare basics", href: ROUTES.healthcareBasics },
    ],
  },
];

export const moveWorkingNlSections: MoveWorkingNlSections = {
  journey: {
    id: "work-move-journey",
    eyebrow: "Main framing",
    title: "How working in the Netherlands fits into the move journey",
    subtitle:
      "For many expats, **work is the trigger for the move**. But the real decision is usually bigger than the role itself: it also includes **permits, housing, payroll, health insurance, and the shape of daily life once you land**.",
    intro:
      "A Dutch offer can reshape your route, your city shortlist, your budget, your family timing, and the order of your first-month admin. The useful frame is simple: **compare the move before you sign, prepare the setup before you fly, and stabilise life after you land**.",
    firstFocus: {
      title: "What matters first",
      body: "Do not start with legal detail. Start by asking: **Is this a good move package? What needs clarifying before I commit? What still has to be set up after arrival?**",
      chips: ["Compare the role", "Pressure-test the budget", "Plan the first month"],
    },
    blocks: [
      {
        id: "journey-signing",
        label: "Before signing",
        visualKey: "journey",
        title: "Check move fit, not only role fit",
        intro:
          "Ask the practical version of the question: **does this still look good once rent, permits, payroll, and the first month are included**?",
        bestFor: "Best when the offer looks attractive but the wider move still feels fuzzy.",
        keyPoints: [
          "Salary, city, rent, commute, and benefits can change the picture quickly",
          "Employer sponsorship or relocation help may matter more than it first appears",
          "A strong local offer is not always a strong **first-move** offer",
        ],
        whatMattersNext: "Pressure-test the package before you let the role headline make the decision for you.",
      },
      {
        id: "journey-before-arrival",
        label: "Before arrival",
        visualKey: "relocate",
        title: "Turn the offer into a workable relocation plan",
        intro: "Once the role is real, the move becomes an operations question as much as a career question.",
        bestFor: "Best when the job is agreed but documents, dates, and housing still need sequencing.",
        keyPoints: [
          "Documents, permit coordination, housing, and travel often move in parallel",
          "Payroll, bank timing, and insurance can shape how smooth the first month feels",
          "Small admin gaps can create very visible stress once work has started",
        ],
        whatMattersNext: "Translate the job start into a calendar of practical tasks before the move date arrives.",
      },
      {
        id: "journey-after-arrival",
        label: "After arrival",
        visualKey: "arrival",
        title: "Starting work often triggers a setup phase",
        intro: "The contract may be signed, but the move is usually still in its setup phase.",
        bestFor: "Best when you want to avoid treating arrival as the end of the process.",
        keyPoints: [
          "Registration, BSN, payroll, and healthcare become immediate priorities",
          "Commute, housing, and daily systems affect whether the role actually feels sustainable",
          "Family setup and the real budget often become clearer only after arrival",
        ],
        whatMattersNext: "Plan the first month as a setup sprint, not as spare time around work.",
      },
    ],
  },
  offers: {
    id: "offers-contracts",
    eyebrow: "Offers & contracts",
    title: "Job offers, contracts, and employer support",
    subtitle:
      "A Dutch offer can differ in **much more than salary**. Contract structure, support level, hybrid expectations, and relocation help often decide whether the move feels smooth or fragile.",
    intro:
      "Newcomers often underestimate how much depends on what is or is not **spelled out clearly**. This section is not a contract-law guide; it is a short list of what is worth comparing before you commit.",
    firstFocus: {
      title: "Compare these first",
      body: "**Contract structure, employer support, and realistic after-tax affordability** usually matter before edge-case clause detail.",
      chips: ["Contract frame", "Employer support", "Real monthly budget"],
    },
    pairedToolsEyebrow: "Use these next when you are comparing an offer seriously",
    pairedTools: [
      {
        label: "Job offer comparison tool",
        href: ROUTES.jobOffer,
        description: "Compare total package value, expat support, and affordability side by side.",
      },
      {
        label: "Employment contract risk scanner",
        href: ROUTES.contractScanner,
        description: "Spot important clauses and missing detail before you sign.",
      },
      {
        label: "Employment type scenario tool",
        href: ROUTES.employmentType,
        description: "Pressure-test payroll, contractor, or mixed employment models.",
      },
    ],
    blocks: [
      {
        id: "compare-offer",
        chip: "Offer",
        visualKey: "offer",
        title: "What to compare in a Dutch job offer",
        intro: "The headline gross is only one line in the package.",
        bestFor: "Best for first-pass comparisons between two offers or between expectation and reality.",
        keyPoints: [
          "Recurring pay, holiday allowance, bonus structure, pension, and reimbursements",
          "Office rhythm, travel expectations, and whether hybrid means real flexibility",
          "Relocation budget, start-date flexibility, and onboarding support",
        ],
        whatMattersNext: "Compare the offer as a relocation package, not as an isolated salary line.",
      },
      {
        id: "contract-terms",
        chip: "Contract",
        visualKey: "contract",
        title: "Why contract terms matter",
        intro: "The move can feel very different depending on the contract frame.",
        bestFor: "Best when the job looks good but the wording may change risk, stability, or flexibility.",
        keyPoints: [
          "Fixed-term vs open-ended changes stability and later planning",
          "Probation, notice, and restrictive clauses can matter faster than people expect",
          "Small wording differences become practical once you are already living here",
        ],
        whatMattersNext: "Pressure-test the contract against how exposed you would feel after moving.",
      },
      {
        id: "employer-support",
        chip: "Support",
        visualKey: "support",
        title: "Employer support and relocation help",
        intro: "Support is often part of the real value, especially for first-time movers.",
        bestFor: "Best when one employer feels more international or more organised than another.",
        keyPoints: [
          "Ask what the employer handles for sponsorship, paperwork, relocation, and arrival",
          "Clarify whether help is guaranteed, optional, or outsourced",
          "Watch for assumptions around 30% ruling support, housing help, or repayment clauses",
        ],
        whatMattersNext: "Write down what is actually included so nothing important stays in verbal assumptions.",
      },
      {
        id: "hr-questions",
        chip: "HR",
        visualKey: "admin",
        title: "What to clarify with HR early",
        intro: "Clear answers early usually save stress later.",
        bestFor: "Best once the role feels likely and you want fewer surprises between signature and arrival.",
        keyPoints: [
          "Expected start date, permit route, remote-work limits, and onboarding milestones",
          "Payroll timing, required documents, and when a bank account or BSN becomes urgent",
          "Who owns each question when immigration, payroll, and relocation details do not line up cleanly",
        ],
        whatMattersNext: "Get owners and dates for the details that could otherwise block the move later.",
      },
    ],
  },
  salary: {
    id: "salary-tax-cost",
    eyebrow: "Salary, tax & cost of living",
    title: "Salary, tax, and cost-of-living reality",
    subtitle:
      "**Gross salary** is only one part of the move picture. Net pay, rent, transport, pension, utilities, childcare, and city choice shape what the move actually feels like month to month.",
    intro:
      "A salary that feels solid in one city or household setup can feel tight in another. This is usually the point where one headline number stops being useful and a few simple calculators become much more useful.",
    firstFocus: {
      title: "Pressure-test these numbers first",
      body: "Start with **net pay**, then test **rent**, **city choice**, and **household costs**. That usually gives a better answer than debating whether the gross looks “good.”",
      chips: ["Net pay", "Rent pressure", "City choice"],
    },
    pairedToolsEyebrow: "Which tools to use next",
    pairedTools: [
      {
        label: "Dutch salary net calculator",
        href: ROUTES.salaryNet,
        description: "Estimate take-home pay before you compare budgets.",
      },
      {
        label: "30% ruling calculator",
        href: ROUTES.ruling,
        description: "Check planning assumptions around the expat tax facility.",
      },
      {
        label: "Cost of living calculator",
        href: ROUTES.costOfLiving,
        description: "Model monthly reality by city and household.",
      },
      {
        label: "Rent affordability calculator",
        href: ROUTES.rentAffordability,
        description: "Check what housing may feel sustainable on your income.",
      },
      {
        label: "Childcare cost estimator",
        href: ROUTES.childcare,
        description: "Useful when family setup is part of the move.",
      },
    ],
    blocks: [
      {
        id: "gross-net",
        visualKey: "salary",
        title: "Gross vs net reality",
        intro: "What lands in your bank matters more than the offer headline.",
        bestFor: "Best when the offer sounds strong but monthly take-home still feels abstract.",
        keyPoints: [
          "Payroll withholding, pension, holiday allowance structure, and 30% ruling context can all shift the monthly picture",
          "Two similar gross salaries can feel very different after deductions and benefits",
          "Payslip literacy becomes useful fast once payroll actually starts",
        ],
        whatMattersNext: "Translate the offer into realistic monthly cash flow before assuming the number works.",
      },
      {
        id: "city-housing",
        visualKey: "housing",
        title: "Why city and housing costs matter",
        intro: "Rent pressure can reshape the whole value of an offer.",
        bestFor: "Best when you are choosing between cities, commute patterns, or temporary housing options.",
        keyPoints: [
          "Amsterdam, Utrecht, Rotterdam, The Hague, and Eindhoven can feel different at the same income",
          "Deposits, furnishing, utilities, and a registrable address affect first-month cash needs",
          "Commute trade-offs matter if the office city and home city are not the same",
        ],
        whatMattersNext: "Model rent and setup cash early so the housing side does not ambush the job decision.",
      },
      {
        id: "household-context",
        visualKey: "family",
        title: "Why household context changes everything",
        intro: "Singles, couples, and families can experience the same salary very differently.",
        bestFor: "Best when partner timing, childcare, or second-income plans are part of the move.",
        keyPoints: [
          "Childcare, second-income timing, school choices, and healthcare costs can change affordability",
          "A salary that works for one person may feel stretched for a family in the same city",
          "A “good salary” only makes sense once it is tied to a household and location",
        ],
        whatMattersNext: "Tie the budget to your actual household, not to a generic expat salary benchmark.",
      },
    ],
  },
  permits: {
    id: "permits-sponsorship",
    eyebrow: "Permits & sponsorship",
    title: "Work permits, sponsorship, and residency context",
    subtitle:
      "For many expats, **work, sponsorship, residence, and later admin are tightly linked**. It usually helps to keep them in one picture rather than treating the job and the immigration side as separate projects.",
    intro:
      "This section stays high-level on purpose. The goal is to understand where the dependencies sit, not to replace official eligibility guidance.",
    firstFocus: {
      title: "What matters first here",
      body: "You usually do not need every rule. You do need to know **which route the employer expects, how much depends on the employer, and which later changes could affect your setup**.",
      chips: ["Expected route", "Employer dependency", "Later changes"],
    },
    pairedToolsEyebrow: "Pages to open next",
    pairedTools: [
      {
        label: "Visas & residency",
        href: ROUTES.visas,
        description: "Route overview before you go deep on one permit story.",
      },
      {
        label: "Residence permits",
        href: ROUTES.residencePermits,
        description: "What residence means in practice over time.",
      },
      {
        label: "TWV work permit",
        href: ROUTES.twvWorkPermit,
        description: "When employer-driven work authorization may matter in practice.",
      },
      {
        label: "Extensions & changes",
        href: ROUTES.extensions,
        description: "Renewals, timing, and after-arrival changes.",
      },
      {
        label: "Status changes",
        href: ROUTES.statusChanges,
        description: "When the basis of stay itself may be changing.",
      },
    ],
    blocks: [
      {
        id: "linked",
        visualKey: "permit",
        title: "Why work and residence are often linked",
        intro: "Your work route often shapes how you arrive and what changes matter later.",
        bestFor: "Best when the role is real but the residence side still feels like a separate topic.",
        keyPoints: [
          "The employer, contract type, and route can affect what gets coordinated before arrival",
          "A work-led move is often part job start, part residence planning, part timeline management",
          "It helps to know which page explains the route and which explains life after approval",
        ],
        whatMattersNext: "Keep the job plan and residence plan in one timeline so dependencies stay visible.",
      },
      {
        id: "employer-sponsor",
        visualKey: "support",
        title: "Why employer and sponsorship context matter",
        intro: "Employer support can shape how practical the move feels.",
        bestFor: "Best when one employer seems far more prepared for international hiring than another.",
        keyPoints: [
          "Some employers are very used to international hires; others are not",
          "Clarity around sponsorship, start dates, and paperwork can reduce relocation risk",
          "Questions about flexibility, payroll timing, and remote work are easier before you move",
        ],
        whatMattersNext: "Clarify how much of the route depends on the employer so you know where the risk sits.",
      },
      {
        id: "changes-later",
        visualKey: "journey",
        title: "Why later changes still matter",
        intro: "A work move can keep evolving after the first contract is signed.",
        bestFor: "Best when you want a move plan that still makes sense after the first contract or life change.",
        keyPoints: [
          "A job change, salary shift, family change, or contract change can create new questions later",
          "Extensions, renewals, or route changes can have admin impact beyond the role itself",
          "That is why it helps to keep the sibling Move guides nearby from the start",
        ],
        whatMattersNext: "Keep the sibling Move guides nearby so later changes do not feel like a fresh start.",
      },
    ],
  },
  afterArrival: {
    id: "after-arrival",
    eyebrow: "After arrival",
    title: "What changes after arrival: payroll, registration, healthcare, and daily setup",
    subtitle:
      "Starting work in the Netherlands often triggers a **practical setup journey**: municipality registration, BSN, payroll, banking, insurance, housing, commuting, and routine admin.",
    intro:
      "This is often the part newcomers underestimate. The role may be the reason you moved, but the first weeks are usually about **setting up the systems that make the role workable**.",
    firstFocus: {
      title: "What changes first",
      body: "Think in **first days**, **first weeks**, and **first months**. That usually makes the admin feel manageable instead of endless.",
      chips: ["Unblock payroll", "Get insured", "Stabilise routine"],
    },
    blocks: [
      {
        id: "first-days",
        label: "First days",
        visualKey: "admin",
        title: "Secure the basics that unblock the rest",
        intro: "The first tasks usually exist to unblock later systems rather than to feel complete on day one.",
        bestFor: "Best when you have landed and need the essentials that stop the rest of the move from stalling.",
        priority: "Unblock admin",
        keyPoints: [
          "Registrable address, municipality booking, ID documents, and employer onboarding requests",
          "A clear plan for when BSN, payroll setup, and bank details become urgent",
          "Temporary housing and move-in timing if permanent housing is still in progress",
        ],
        whatMattersNext: "Prioritise whatever unblocks registration, BSN, and payroll first.",
        internalLinks: [
          { label: "Municipality registration", href: ROUTES.municipalityRegistration },
          { label: "Document readiness", href: ROUTES.documentReadiness },
        ],
      },
      {
        id: "first-weeks",
        label: "First weeks",
        visualKey: "arrival",
        title: "Turn arrival admin into a working routine",
        intro: "This is where scattered tasks start becoming a livable week-to-week setup.",
        bestFor: "Best when work is starting and you need the essentials to become usable, not just booked.",
        priority: "Make work operational",
        keyPoints: [
          "BSN, payroll onboarding, Dutch bank account, and health insurance setup",
          "Commute planning, phone, payments, and a first realistic monthly budget",
          "Understanding your first payslip and deductions if payroll starts quickly",
        ],
        whatMattersNext: "Once payroll and insurance are moving, shift attention to routine and budget realism.",
        internalLinks: [
          { label: "Arrival planner", href: ROUTES.arrivalPlanner },
          { label: "Healthcare basics", href: ROUTES.healthcareBasics },
          { label: "Payslip decoder", href: ROUTES.payslip },
        ],
      },
      {
        id: "first-months",
        label: "First months",
        visualKey: "housing",
        title: "Stabilize life around the role",
        intro: "By this point the question becomes whether the move actually works well in daily life.",
        bestFor: "Best when the emergency admin is done and the real sustainability questions are appearing.",
        priority: "Check if it works in real life",
        keyPoints: [
          "Housing, utilities, transport rhythm, and city fit become clearer after the first month",
          "Family setup, childcare, or partner admin can become the next bottleneck",
          "You may start checking whether the salary really works once rent and deductions are real",
        ],
        whatMattersNext: "Use the calmer period after arrival to test whether the setup is actually sustainable.",
        internalLinks: [
          { label: "First 90 days planner", href: ROUTES.first90Days },
          { label: "Cost of living calculator", href: ROUTES.costOfLiving },
          { label: "Netherlands Survival Guide", href: ROUTES.survivalGuide },
        ],
      },
    ],
  },
};

const moveWorkingNlMisunderstandingsRegion = {
  eyebrow: "Reality check",
  title: "What people often misunderstand",
  subtitle: "Seven short reminders that make the move feel more realistic and less overwhelming.",
} as const;

export const moveWorkingNlMisunderstandings: MoveWorkingNlMisunderstanding[] = [
  {
    id: "role-package",
    title: "A strong role on paper can still be a weak relocation package",
    intro: "Salary, sponsorship, flexibility, housing reality, and arrival support all affect whether the move actually feels workable.",
    whatMattersNext: "Compare the move package, not just the job title.",
    visualKey: "offer",
  },
  {
    id: "gross-alone",
    title: "Gross salary alone is not enough",
    intro: "Net pay, rent, transport, pension, and household context change what the same number actually means in daily life.",
    whatMattersNext: "Run the number through salary, rent, and cost tools together.",
    visualKey: "salary",
  },
  {
    id: "systems-together",
    title: "Work, permits, payroll, healthcare, and housing often move together",
    intro: "If one part slips, it often affects the rest of the first-month setup.",
    whatMattersNext: "Sequence the move as one system instead of disconnected tasks.",
    visualKey: "admin",
  },
  {
    id: "support-matters",
    title: "Employer support can matter more than people expect",
    intro: "A calmer sponsor or relocation process often has real value, even when another offer looks stronger on headline pay.",
    whatMattersNext: "Treat support quality as part of the offer value.",
    visualKey: "support",
  },
  {
    id: "admin-bigger",
    title: "Post-arrival admin can feel bigger than the job itself at first",
    intro: "Registration, BSN, insurance, banking, and commuting can dominate the first weeks.",
    whatMattersNext: "Protect time and attention for the setup phase after landing.",
    visualKey: "arrival",
  },
  {
    id: "not-done",
    title: "The move is not done once the contract is signed",
    intro: "The role may be secured, but the systems that make it sustainable still need attention.",
    whatMattersNext: "Plan through the first months, not just through signature day.",
    visualKey: "journey",
  },
  {
    id: "same-salary-different-life",
    title: "The same salary can create very different lives in different cities or households",
    intro: "That is why modelling city, rent, tax, and family setup matters before you assume the number is enough.",
    whatMattersNext: "Use location and household context before calling the offer “good.”",
    visualKey: "housing",
  },
];

const moveWorkingNlWhatNextRegion = {
  eyebrow: "How to use this page",
  title: "How to use this page and what to do next",
  subtitle:
    "The goal is simple: understand whether **work is really your move route**, compare the offer beyond salary, then open the right pages and tools in the right order.",
} as const;

const moveWorkingNlProgressionSteps = [
  {
    id: "route",
    label: "Decide whether work is the main route for your move",
    href: "#work-move-journey",
    description: "Use the journey framing to see where the job decision overlaps with relocation reality.",
  },
  {
    id: "offer",
    label: "Compare the offer beyond headline salary",
    href: "#offers-contracts",
    description: "Look at support, contract terms, payroll fit, and real-life sustainability.",
  },
  {
    id: "permit-admin",
    label: "Understand permit, residency, payroll, and admin implications",
    href: "#permits-sponsorship",
    description: "Keep work planning and residence planning connected rather than separate.",
  },
  {
    id: "numbers",
    label: "Model the cost side before you move",
    href: "#salary-tax-cost",
    description: "Use net salary, cost-of-living, rent, and childcare tools as one budgeting stack.",
  },
  {
    id: "arrival",
    label: "Plan beyond the first workday",
    href: "#after-arrival",
    description: "Registration, BSN, payroll, health insurance, and daily life setup still need sequencing.",
  },
  {
    id: "tools",
    label: "Open the next ExpatCopilot tools and sibling guides",
    href: "#helpful-tools",
    description: "Use the tools section as your handoff into Work, Money, Housing, and Living.",
  },
] as const;

const moveWorkingNlToolsRegion = {
  id: "helpful-tools",
  title: "Helpful tools & related guides",
  subtitle:
    "Open the next layer that matches your stage: **Move** for route and arrival planning, **Work** for offers and contracts, **Money** for salary and tax, and **Living / Housing / Family** for the real-life setup around the role.",
} as const;

const moveWorkingNlToolsJourneySnapshot = {
  eyebrow: "Product map",
  title: "Where this page sits in the work-led move journey",
  subtitle:
    "**Move pages** help you orient the route and timing. **Work tools** help you compare the offer. **Money and housing tools** show whether life feels affordable. **Arrival and living guides** take over once you land.",
  steps: [
    {
      href: ROUTES.hub,
      label: "Moving to the Netherlands",
      description: "Main move hub for scenarios, documents, and relocation stages.",
      meta: "Move",
    },
    {
      href: ROUTES.visas,
      label: "Visas & residency orientation",
      description: "Compare work, study, family, and self-employment routes first.",
      meta: "Move",
    },
    {
      href: ROUTES.jobOffer,
      label: "Job offer comparison",
      description: "Use when the role is real and the trade-offs matter.",
      meta: "Work",
    },
    {
      href: ROUTES.first90Days,
      label: "First 90 days planner",
      description: "Use once the move date and start date feel concrete.",
      meta: "Move",
    },
  ],
} as const;

const moveWorkingNlExplorePillarCards = [
  {
    href: ROUTES.hub,
    title: "Moving to the Netherlands",
    description: "The main Move pillar for stages, scenarios, and the bigger relocation sequence.",
    meta: "Move",
  },
  {
    href: ROUTES.visas,
    title: "Visas & residency orientation",
    description: "Start here when the route itself still needs clarity.",
    meta: "Move",
  },
  {
    href: ROUTES.twvWorkPermit,
    title: "TWV work permit",
    description: "Route guide for TWV, employer action, GVVA comparisons, and timing questions.",
    meta: "Move",
  },
  {
    href: ROUTES.residencePermits,
    title: "Residence permits in the Netherlands",
    description: "Permit purpose, continuity, and practical meaning after approval.",
    meta: "Move",
  },
  {
    href: ROUTES.extensions,
    title: "Extensions & changes in the Netherlands",
    description: "Useful once work, dates, or life circumstances start shifting after arrival.",
    meta: "Move",
  },
  {
    href: ROUTES.statusChanges,
    title: "Status changes in the Netherlands",
    description: "Use when the basis of stay itself may be changing across work, study, family, or self-employment.",
    meta: "Move",
  },
  {
    href: ROUTES.moveTools,
    title: "Move & immigration tools",
    description: "Checklists, document readiness, first 90 days, and arrival flow in one place.",
    meta: "Tools",
  },
  {
    href: ROUTES.workTools,
    title: "Work tools",
    description: "Job offer comparison, contract scanner, payslip decoder, and employment-model tools.",
    meta: "Work",
  },
  {
    href: ROUTES.moneyTools,
    title: "Money tools",
    description: "Salary, 30% ruling, allowances, and cost-of-living planning after the offer gets real.",
    meta: "Money",
  },
  {
    href: ROUTES.housingTools,
    title: "Housing tools",
    description: "Rent affordability and housing planning once income and city choice are clearer.",
    meta: "Housing",
  },
] as const;

export const moveWorkingNlRelatedTools: MoveWorkingNlRelatedTools = {
  journeyIntro:
    "**This page is the orientation layer**, not the calculator layer. Once you know where the pressure points are — offer quality, sponsorship, salary realism, housing, or first-month admin — open the block that matches that question.",
  sections: [
    {
      eyebrow: "Move & residence",
      description: "Use these when the work question is still mixed with route, permit, or arrival timing.",
      items: [
        {
          title: "Move hub",
          description: "Main relocation guide with stages, scenarios, and broader move context.",
          href: ROUTES.hub,
          cta: "Open guide",
        },
        {
          title: "Visas & residency",
          description: "Compare work, study, family, and other move routes before you go deeper.",
          href: ROUTES.visas,
          cta: "Open guide",
        },
        {
          title: "Residence permits",
          description: "Understand permit purpose, continuity, and what residence means in practice.",
          href: ROUTES.residencePermits,
          cta: "Open guide",
        },
        {
          title: "TWV work permit",
          description: "Useful when employer-driven work authorization may be part of the route.",
          href: ROUTES.twvWorkPermit,
          cta: "Open guide",
        },
        {
          title: "Extensions & changes",
          description: "Use later when expiry dates, renewals, or employer changes show up.",
          href: ROUTES.extensions,
          cta: "Open guide",
        },
        {
          title: "Status changes",
          description: "Use when a life change may be changing the basis of stay itself.",
          href: ROUTES.statusChanges,
          cta: "Open guide",
        },
        {
          title: "Arrival planner",
          description: "Sequence municipality, banking, insurance, and move-in tasks around the job start.",
          href: ROUTES.arrivalPlanner,
          cta: "Open planner",
        },
      ],
    },
    {
      eyebrow: "Offers, contracts & payroll",
      description: "Use these when the role is real and you need to compare or stress-test the job package.",
      items: [
        {
          title: "Job offer comparison tool",
          description: "Compare compensation, expat support, commute, and affordability side by side.",
          href: ROUTES.jobOffer,
          cta: "Open tool",
        },
        {
          title: "Employment contract risk scanner",
          description: "Review clauses and surface questions before you sign.",
          href: ROUTES.contractScanner,
          cta: "Open tool",
        },
        {
          title: "Employment type scenario tool",
          description: "Compare payroll, contractor, and other work-model trade-offs.",
          href: ROUTES.employmentType,
          cta: "Open tool",
        },
        {
          title: "Payslip decoder",
          description: "Helpful once payroll starts and you want plain-English line-item context.",
          href: ROUTES.payslip,
          cta: "Open tool",
        },
        {
          title: "Work tools hub",
          description: "See the broader cluster of employment-related tools and guides.",
          href: ROUTES.workTools,
          cta: "Open hub",
        },
        {
          title: "Broader work guide",
          description: "Go deeper on employment culture, contracts, and everyday work context.",
          href: ROUTES.workGuide,
          cta: "Open guide",
        },
      ],
    },
    {
      eyebrow: "Money, housing & family planning",
      description: "Use these when you need to pressure-test affordability, allowances, and family costs around the role.",
      items: [
        {
          title: "Dutch salary net calculator",
          description: "Turn gross salary into a more practical monthly estimate.",
          href: ROUTES.salaryNet,
          cta: "Open tool",
        },
        {
          title: "30% ruling calculator",
          description: "Check planning assumptions around the facility and employer support.",
          href: ROUTES.ruling,
          cta: "Open tool",
        },
        {
          title: "Cost of living calculator",
          description: "Model monthly reality by city and household.",
          href: ROUTES.costOfLiving,
          cta: "Open tool",
        },
        {
          title: "Rent affordability calculator",
          description: "Estimate what housing may feel sustainable once salary gets real.",
          href: ROUTES.rentAffordability,
          cta: "Open tool",
        },
        {
          title: "Healthcare allowance estimator",
          description: "Useful when monthly net costs and eligibility bands matter.",
          href: ROUTES.healthcareAllowance,
          cta: "Open tool",
        },
        {
          title: "Childcare cost estimator",
          description: "Useful when partner, childcare, or school timing is part of the move.",
          href: ROUTES.childcare,
          cta: "Open tool",
        },
      ],
    },
    {
      eyebrow: "Arrival & daily life",
      description: "Use these when the job has started and you want the role to feel sustainable in daily life.",
      items: [
        {
          title: "First 90 days planner",
          description: "Week-by-week priorities after arrival and job start.",
          href: ROUTES.first90Days,
          cta: "Open planner",
        },
        {
          title: "After arriving in the Netherlands",
          description: "Practical setup once you have landed and need the first tasks in order.",
          href: ROUTES.afterArriving,
          cta: "Open guide",
        },
        {
          title: "Healthcare basics",
          description: "Understand how Dutch healthcare and insurance fit together in daily life.",
          href: ROUTES.healthcareBasics,
          cta: "Open guide",
        },
        {
          title: "Netherlands Survival Guide",
          description: "Daily systems, payments, transport, and local routine after the admin rush.",
          href: ROUTES.survivalGuide,
          cta: "Open guide",
        },
        {
          title: "Daily life basics",
          description: "Useful when the move is moving from setup into stable routine.",
          href: ROUTES.dailyLife,
          cta: "Open guide",
        },
      ],
    },
  ],
};

const moveWorkingNlContinueMove = {
  eyebrow: "Stay in the Move pillar",
  title: "Continue your move plan",
  subtitle: "This page works best as one stop in a wider relocation sequence.",
  cards: [
    {
      id: "hub",
      title: "Moving to the Netherlands",
      description: "The main hub for the overall move, scenarios, timelines, and planning tools.",
      href: ROUTES.hub,
      ctaLabel: "Open hub",
    },
    {
      id: "visas",
      title: "Visas & residency orientation",
      description: "Go broader when the route itself still needs clarity.",
      href: ROUTES.visas,
      ctaLabel: "Open guide",
    },
    {
      id: "permits",
      title: "Residence permits in the Netherlands",
      description: "Go deeper on permit logic, continuity, and what residence means over time.",
      href: ROUTES.residencePermits,
      ctaLabel: "Open guide",
    },
    {
      id: "extensions",
      title: "Extensions & changes in the Netherlands",
      description: "Use later for renewals, job shifts, and other after-arrival changes.",
      href: ROUTES.extensions,
      ctaLabel: "Open guide",
    },
    {
      id: "arrival",
      title: "First 90 days planner",
      description: "Turn the move into a practical first-month sequence once dates are fixed.",
      href: ROUTES.first90Days,
      ctaLabel: "Open planner",
    },
    {
      id: "documents",
      title: "Documents needed to move",
      description: "Keep paperwork and practical setup aligned with the work move.",
      href: ROUTES.documentsNeeded,
      ctaLabel: "Read guide",
    },
  ],
} as const;

const moveWorkingNlSectionNav = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#start-here", label: "Start here" },
  { href: "#work-move-journey", label: "Work and the move journey" },
  { href: "#offers-contracts", label: "Offers & contracts" },
  { href: "#salary-tax-cost", label: "Salary, tax & cost of living" },
  { href: "#permits-sponsorship", label: "Permits & sponsorship" },
  { href: "#after-arrival", label: "After arrival" },
  { href: "#misunderstandings", label: "Common misunderstandings" },
  { href: "#what-next", label: "What to do next" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] as const;

const moveWorkingNlDeepLinks = [
  {
    href: ROUTES.hub,
    label: "Moving to the Netherlands (hub)",
    description: "The full relocation picture: stages, scenarios, tools, and FAQs.",
  },
  {
    href: ROUTES.twvWorkPermit,
    label: "TWV work permit",
    description: "Useful when work authorization may depend on employer-driven TWV context rather than a simpler setup.",
  },
  {
    href: ROUTES.jobOffer,
    label: "Job offer comparison tool",
    description: "Best next step when you are comparing offers or negotiation trade-offs.",
  },
  {
    href: ROUTES.salaryNet,
    label: "Dutch salary net calculator",
    description: "Turn gross salary into a more practical monthly estimate.",
  },
  {
    href: ROUTES.first90Days,
    label: "First 90 days planner",
    description: "Useful when the move date and work start date are close together.",
  },
  {
    href: ROUTES.costOfLiving,
    label: "Cost of living calculator",
    description: "Pressure-test whether the role still works once rent and living costs are real.",
  },
] as const;

export const moveWorkingNlFaq: PillarFaqItem[] = [
  {
    q: "What should I understand before moving to the Netherlands for work?",
    a: "Start with the **whole move picture**, not only the role: the **contract**, **salary after tax**, **housing reality**, **permit or sponsorship context**, and the **first-month admin** that follows arrival. This page helps you get those threads straight before you open detailed tools.",
  },
  {
    q: "Is a Dutch job offer only about salary?",
    a: "No. Salary matters, but so do **contract type, probation, notice, pension, relocation help, sponsorship context, hybrid expectations, and city or commute impact**. For many expats, the move fit matters almost as much as the role fit.",
  },
  {
    q: "How important are permits and sponsorship?",
    a: "For many international hires, they matter a lot. The job and residence side are often linked, especially before arrival. This page stays high-level, but it should help you spot when you need the **Visas & residency** or **Residence permits** guides next.",
  },
  {
    q: "How do I compare a Dutch offer properly?",
    a: "Look beyond headline gross. Compare **net pay, benefits, contract stability, relocation support, rent pressure, commute, and household context**. The **Job offer comparison tool** is the strongest next step when you have two real options on the table.",
  },
  {
    q: "What should I sort out after I arrive?",
    a: "Usually **municipality registration, BSN, payroll setup, bank details, health insurance, and commute or housing basics**. If work starts quickly, those systems can become urgent fast, so planning the first weeks matters.",
  },
  {
    q: "How do salary, rent, and tax fit together?",
    a: "The same gross salary can feel very different depending on **payroll deductions, pension, 30% ruling context, rent, city, commute, and household size**. That is why salary, cost-of-living, and rent tools work best together rather than one number on its own.",
  },
  {
    q: "What if my job changes later?",
    a: "Later job changes can affect not only work life but also your wider admin or residence picture. Use **Extensions & changes** for renewals and after-arrival shifts, and **Status changes** if the basis of your stay itself may be changing.",
  },
  {
    q: "Is this page legal or tax advice?",
    a: "No. It is a **practical orientation page** inside the Move pillar. Use it to understand the shape of the decision, then confirm anything binding with official guidance, your employer, payroll, or a qualified adviser.",
  },
];

export const moveWorkingNlReferences: MoveWorkingNlReferences = {
  sectionId: "official-sources",
  sectionTitle: "Official sources / useful references",
  disclaimer:
    "Use this page to orient yourself first, then confirm anything binding with official guidance, your employer, payroll, or a qualified adviser. Official requirements and timelines can change.",
  groups: [
    {
      id: "work-residence",
      title: "Work, residence, and newcomer guidance",
      links: [
        { type: "external", label: "IND: residence and permits", href: "https://ind.nl/en" },
        {
          type: "external",
          label: "Government.nl: working in the Netherlands",
          href: "https://www.government.nl/topics/working-in-the-netherlands",
        },
        {
          type: "external",
          label: "Government.nl: coming to the Netherlands",
          href: "https://www.government.nl/topics/immigration-to-the-netherlands",
        },
        { type: "external", label: "Work in NL", href: "https://www.workinnl.nl/" },
      ],
    },
    {
      id: "tax-payroll-registration",
      title: "Tax, payroll, registration, and local setup",
      links: [
        {
          type: "external",
          label: "Belastingdienst: individuals and internationals",
          href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/individuals",
        },
        {
          type: "external",
          label: "Government.nl: employment contracts and CAO guidance",
          href: "https://www.government.nl/topics/employment-contract-and-collective-agreement-cao",
        },
        { type: "internal", label: "Municipality registration guide", href: ROUTES.municipalityRegistration },
        { type: "internal", label: "After arriving in the Netherlands", href: ROUTES.afterArriving },
      ],
    },
  ],
};

export const workingInTheNetherlandsPageMeta: MoveWorkingNlPageMeta = {
  canonicalPath: ROUTES.canonical,
  movePillarHubPath: ROUTES.hub,
  hero: {
    ...moveWorkingNlHero,
    contextChips: [...moveWorkingNlHero.contextChips],
    bullets: [...moveWorkingNlHero.bullets],
  },
  atAGlance: {
    ...moveWorkingNlAtAGlance,
    cells: [...moveWorkingNlAtAGlance.cells],
  },
  reassurance: moveWorkingNlTips.map((tip) => ({ title: tip.title, body: tip.intro })),
  pillarJourneyBridge: {
    ...moveWorkingNlPillarJourneyBridge,
    links: [...moveWorkingNlPillarJourneyBridge.links],
  },
  startHereRegion: moveWorkingNlStartHereRegion,
  startHereCards: moveWorkingNlStartCards,
  journeySection: {
    ...moveWorkingNlSections.journey,
    stages: moveWorkingNlSections.journey.blocks,
  },
  offersSection: {
    ...moveWorkingNlSections.offers,
    cards: moveWorkingNlSections.offers.blocks,
  },
  salarySection: {
    ...moveWorkingNlSections.salary,
    cards: moveWorkingNlSections.salary.blocks,
  },
  permitsSection: {
    ...moveWorkingNlSections.permits,
    cards: moveWorkingNlSections.permits.blocks,
  },
  afterArrivalRegion: {
    ...moveWorkingNlSections.afterArrival,
    cards: moveWorkingNlSections.afterArrival.blocks.map(({ internalLinks, ...card }) => ({
      ...card,
      links: internalLinks,
    })),
  },
  misunderstandingsRegion: moveWorkingNlMisunderstandingsRegion,
  misunderstandings: moveWorkingNlMisunderstandings.map(({ intro, ...item }) => ({
    ...item,
    body: intro,
  })),
  whatNextRegion: moveWorkingNlWhatNextRegion,
  progressionSteps: [...moveWorkingNlProgressionSteps],
  toolsRegion: moveWorkingNlToolsRegion,
  toolsJourneySnapshot: {
    ...moveWorkingNlToolsJourneySnapshot,
    steps: [...moveWorkingNlToolsJourneySnapshot.steps],
  },
  explorePillarCards: [...moveWorkingNlExplorePillarCards],
  relatedTools: moveWorkingNlRelatedTools,
  continueMove: {
    ...moveWorkingNlContinueMove,
    cards: [...moveWorkingNlContinueMove.cards],
  },
  sectionNav: [...moveWorkingNlSectionNav],
  deepLinks: [...moveWorkingNlDeepLinks],
  faq: moveWorkingNlFaq,
  references: moveWorkingNlReferences,
};

export type WorkingInTheNetherlandsPageMeta = typeof workingInTheNetherlandsPageMeta;

import { moveChangingJobsNlRoutes as ROUTES } from "./moveChangingJobsNl.routes";
import type { MoveChangingJobsSections } from "./moveChangingJobsNl.config.types";

export const moveChangingJobsSections: MoveChangingJobsSections = {
  whatJobChangeAffects: {
    id: "what-job-change-affects",
    eyebrow: "Main framing",
    title: "What changing jobs can affect",
    subtitle:
      "Locally, a switch is often **career + payslip**. For many internationals it is also **stay context, employer processes, net reality, and where you actually live your week**.",
    intro:
      "If you only compare **title and gross**, you can miss **timing, clauses, and monthly life**. Scan four layers once; then go deep where **your** situation is sensitive.",
    firstFocus: {
      title: "Four layers — quick scan",
      body: "Not every layer applies equally. **Skipping one on purpose** is fine; **forgetting one exists** is what hurts.",
      chips: ["Career", "Stay", "Money", "Life admin"],
    },
    blocks: [
      {
        id: "layer-career",
        label: "Career",
        title: "Role, contract, and expectations",
        intro:
          "**Notice, probation, hours, and travel** decide whether the job is livable — not only the LinkedIn headline.",
        keyPoints: [
          "**Contract type and end dates** vs how long you need stability",
          "**Clauses** that touch **side work, confidentiality, or post-employment restrictions**",
          "**Hybrid and on-site** expectations vs commute and childcare",
          "If permits are in play, whether the role narrative matches **what sponsors and systems expect**",
        ],
      },
      {
        id: "layer-status",
        label: "Stay & work auth",
        title: "Residence and employer-linked steps",
        intro:
          "When stay or work permission is **tied to employment**, employer actions and **dates** matter as much as the offer PDF.",
        keyPoints: [
          "Could this switch touch **sponsorship, notifications, or conditions**? Ask early, not after resigning",
          "**Order matters**: signing, resigning, last day, and start can each trigger different needs",
          "**Route type** (work-led, partner-led, etc.) changes which questions are urgent",
          "Treat gaps as **planned**, not assumed — especially if income or employment is part of your story",
        ],
      },
      {
        id: "layer-money",
        label: "Money",
        title: "What you keep each month",
        intro:
          "**Net**, **pension**, **allowance timing**, and **bonuses** shape the household budget more than gross alone.",
        keyPoints: [
          "Model **take-home** and **holiday pay** rhythm, not one annual figure",
          "**30% ruling and payroll** — confirm with the employer or adviser; do not infer from ads",
          "Watch **gap months** and probation if cash flow is tight",
          "Stack **rent, commute, childcare** on top of net — calculators below help",
        ],
      },
      {
        id: "layer-life",
        label: "Life admin",
        title: "Housing, health, family, documents",
        intro: "The same salary **feels different** in another city, school catchment, or insurance situation.",
        keyPoints: [
          "**Rent and landlord math** when income proofs or city change",
          "**Insurance and registration** through employer changes or short gaps",
          "**Partner and children** — schools, childcare waitlists, and linked permits",
          "**Proof and paperwork** you will need again (contracts, IDs, bank letters)",
        ],
      },
    ],
  },

  contracts: {
    id: "contracts-notice",
    eyebrow: "Contracts & clarity",
    title: "Contracts, notice periods, and what to clarify early",
    subtitle:
      "Read **exit and entry** together: what you **must** honour when leaving, and what the **new** employer actually commits to in writing.",
    intro:
      "**Notice**, **probation**, **repayment clauses**, and **location** assumptions are where timelines break. Line them up **before** you fix a last day or a start date — especially if payroll, insurance, or permits need to stay continuous.",
    firstFocus: {
      title: "What matters before resigning vs before signing",
      body: "**Before resigning**: know your **notice and clauses** on the way out. **Before signing**: ensure **start date, package, and employer-owned steps** match that reality.",
      chips: ["Before resigning", "Before signing", "Ask HR", "Tools"],
    },
    blocks: [
      {
        id: "review-current",
        chip: "Before resigning",
        title: "What to review in your current contract",
        intro:
          "You are mapping **constraints on the way out** — notice, money owed, and what stops when employment ends.",
        whatMattersNext:
          "Clean exit dates protect the **next** start — especially when insurance, permits, or rent proofs need continuity.",
        keyPoints: [
          "**Notice** and any **garden leave / PILON** that moves the real last day",
          "**Fixed-term or probation** dates that collide with your plan",
          "**Non-compete, confidentiality, side-work** — what still binds you until the end",
          "**Repayment** (relocation, training) and **benefits that die on termination**",
        ],
      },
      {
        id: "review-new",
        chip: "Before signing",
        title: "What to review in the new contract",
        intro:
          "Turn the offer into **checkable commitments**: money, dates, place of work, and what the employer will **do** for admin.",
        whatMattersNext: "If it is not clear enough to plan a **calendar**, ask for clarification **before** you sign.",
        keyPoints: [
          "**Salary, holiday pay, pension, bonus** — when each hits your account",
          "**Contract type, duration, probation** vs how long you need stability",
          "**Hours and location** — on-site days affect rent and childcare",
          "**Start date** aligned with **notice** and any **processing time** you need",
        ],
      },
      {
        id: "ask-hr",
        chip: "Ask early",
        title: "What to ask HR (both sides)",
        intro:
          "Same conversation, two employers: **what you must deliver** when leaving, and **what they will file or confirm** when joining.",
        whatMattersNext: "**Who / when / which document** beats guessing when payroll or permits stall.",
        keyPoints: [
          "Leaving: **last day**, **final payslip**, **references or statements** you need for housing or permits",
          "Joining: **payroll go-live**, **benefits start**, **onboarding uploads** with deadlines",
          "If permits apply: **who initiates**, **what you sign**, and **earliest realistic start**",
          "If multiple teams exist: **single point of contact** for mobility vs payroll",
        ],
      },
      {
        id: "contract-tools",
        chip: "Next step",
        title: "Which tools to open next",
        intro:
          "When you have **two packages** or **long clause text**, tools structure the comparison — they do not replace HR or legal advice.",
        whatMattersNext: "Pick **one** tool, run it with real numbers, then return with **specific** questions.",
        keyPoints: [
          "**Job offer comparison** when both offers are real",
          "**Contract risk scanner** when the PDF is dense or unfamiliar",
          "**Employment type scenario** when payroll vs contractor-style setups are in play",
        ],
      },
    ],
    pairedToolsEyebrow: "Offers, contracts & work model",
    pairedTools: [
      {
        label: "Job offer comparison tool",
        href: ROUTES.jobOffer,
        description: "Compare relocation value, support, and cash flow — not gross alone.",
      },
      {
        label: "Employment contract risk scanner",
        href: ROUTES.contractScanner,
        description: "Surface questions from clauses before you sign.",
      },
      {
        label: "Employment type scenario tool",
        href: ROUTES.employmentType,
        description: "Stress-test payroll vs contractor-style setups where relevant.",
      },
    ],
  },

  permits: {
    id: "permits-status",
    eyebrow: "Permits & status",
    title: "Permits, sponsorship, and status questions",
    subtitle:
      "When stay or work permission is **employment-shaped**, a new job is not only HR — it can be **timing, sponsor steps, and route context** too.",
    intro:
      "Stay **high level** here: learn **when to escalate** to **IND**, **employer mobility**, or **advisers**. This page helps you **not miss the question**; it does not replace the answer.",
    firstFocus: {
      title: "Before resigning vs before signing (status edition)",
      body: "**Before resigning**: understand whether your **current** stay story assumes this employer. **Before signing**: confirm what the **new** employer will **initiate or guarantee** in writing and by when.",
      chips: ["Linked to employer?", "Who acts?", "Dates", "Route"],
    },
    blocks: [
      {
        id: "why-status",
        chip: "Why it matters",
        title: "When a job change touches stay or work auth",
        intro: "Systems care about **employer, contract, and purpose of stay** — not your career arc.",
        whatMattersNext:
          "If any part of your stay is **employer-named or employer-processed**, add status questions to the **same** calendar as notice and start date.",
        keyPoints: [
          "Some routes are **sponsor- or employer-typed**; switching names can mean **new steps**",
          "A switch may need **notifications, checks, or paperwork** — route-dependent",
          "**Gaps** between employers can matter for **continuity** in practice",
          "**Partner-led vs work-led** routes change what is urgent first",
        ],
      },
      {
        id: "why-employer",
        chip: "Employer role",
        title: "What employers often own",
        intro: "You may supply documents; **they** may need to **file, confirm, or sponsor** — clarify which.",
        whatMattersNext: "Get **names, portals, and deadlines** in writing when steps are employer-gated.",
        keyPoints: [
          "**Recognised sponsor** or mobility workflows where they apply",
          "**HR vs payroll vs immigration vendor** — who is your actual contact",
          "**Start date** tied to **readiness** (payroll, permit, contract signed)",
          "**Fees and who pays** before you budget the move",
        ],
      },
      {
        id: "why-timing",
        chip: "Sequence",
        title: "Timing: sign, resign, last day, start",
        intro:
          "Fixing dates in the wrong order is how people end up **uninsured**, **between employers**, or **short on proof**.",
        whatMattersNext:
          "Do not lock a **last day** until **written** clarity on the new side matches your risk level.",
        keyPoints: [
          "High stakes: **offer signed** (or written conditions met) **before** irreversible resign steps",
          "Build in **processing time** if a step sits between signature and desk",
          "Plan **income and insurance** across any gap — even a short one",
          "**Family** linked to your permit: ask how their files interact **early**",
        ],
      },
      {
        id: "permits-next-pages",
        chip: "Read next",
        title: "Which Move pages to open next",
        intro:
          "These guides give **language and sequence**; they still pair with **your** employer and **official** sources.",
        whatMattersNext:
          "Open **one** sibling guide that matches your worry (renewal, employer change, route shift) — not all five in one night.",
        keyPoints: [
          "**Residence permits** — continuity and purpose over time",
          "**Extensions & changes** — after-arrival and employer shifts",
          "**Status changes** — when the **basis** of stay might move",
          "**TWV** — employer-driven work permission framing",
          "**Visas & residency** — wider route map when you are unsure where you sit",
        ],
      },
    ],
    pairedToolsEyebrow: "Move guides that pair with job switches",
    pairedTools: [
      {
        label: "Residence permits in the Netherlands",
        href: ROUTES.residencePermits,
        description: "Permit framing next to your employment situation.",
      },
      {
        label: "Extensions & changes",
        href: ROUTES.extensions,
        description: "After-arrival shifts, renewals, and employer changes.",
      },
      {
        label: "Status changes",
        href: ROUTES.statusChanges,
        description: "When the basis of stay may move across categories.",
      },
      {
        label: "TWV work permit",
        href: ROUTES.twvWorkPermit,
        description: "TWV-oriented orientation when that layer may apply.",
      },
      {
        label: "Visas & residency orientation",
        href: ROUTES.visas,
        description: "Doorway to the wider route picture.",
      },
    ],
  },

  salary: {
    id: "salary-tax-col",
    eyebrow: "Money & housing pressure",
    title: "Salary, benefits, tax, and cost-of-living implications",
    subtitle: "**Gross** is a headline; **net + rhythm + city + household** is the month you actually live.",
    intro:
      "Run the numbers as a **stack**: take-home, then **fixed costs** (rent, commute, childcare), then **tax or allowance** questions you will confirm with payroll or Belastingdienst.",
    firstFocus: {
      title: "Model monthly reality, not the offer PDF",
      body: "Use **salary net + COL + rent** together. One calculator in isolation often **overstates** how good the switch feels.",
      chips: ["Net pay", "Benefits", "Rent & city", "Family"],
    },
    blocks: [
      {
        id: "gross-net",
        chip: "Take-home",
        title: "Gross vs net after a job change",
        intro:
          "Employers choose **pension and scheme** details; deductions move **take-home** even when gross is flat.",
        whatMattersNext: "Before you celebrate a raise, run **both** packages through a **net** model with honest inputs.",
        keyPoints: [
          "Compare **monthly net**, not a single annual gross",
          "Map **holiday pay** and **bonuses** to **calendar months** you will feel",
          "**30% ruling** — verify with payroll; ads and peers are unreliable",
          "**Probation or gaps** — stress-test the worst month, not the best",
        ],
      },
      {
        id: "benefits-pension",
        chip: "Total reward",
        title: "Pension, leave, and non-cash value",
        intro:
          "A few thousand gross can disappear next to **pension**, **leave**, or **subsidies** you lose or gain.",
        whatMattersNext: "If two offers are close on net, **pension + leave + allowances** often decide the winner.",
        keyPoints: [
          "**Pension** contribution levels and employer parts",
          "**Travel, WFH, and hours** that change weekly spend",
          "**Insurance or allowance** thresholds tied to income",
          "**Perks** that replace cash (bike, phone, training) — count them honestly",
        ],
      },
      {
        id: "city-housing",
        chip: "Location",
        title: "City, commute, and rent",
        intro:
          "A new office pin can change **rent, season tickets, and school runs** even when salary rises.",
        whatMattersNext: "If the role moves **where you live or travel**, open **rent affordability** next to **net pay**.",
        keyPoints: [
          "**Rent and deposit** if you must move catchment or city",
          "**Commute time and OV** as a fixed monthly line",
          "**Childcare and schools** tied to geography",
          "**Landlord paperwork** when income or employer name changes",
        ],
      },
      {
        id: "money-tools",
        chip: "Tools",
        title: "Which calculators to use next",
        intro: "Rough inputs are enough — you are **comparing scenarios**, not filing taxes.",
        whatMattersNext: "Run **net → COL or rent → childcare** in that order when housing or kids are in play.",
        keyPoints: [
          "**Dutch salary net calculator**",
          "**30% ruling calculator** when relevant",
          "**Cost of living** for city and household shape",
          "**Rent affordability** when housing might move",
          "**Childcare cost estimator** when daycare is a major line item",
        ],
      },
    ],
    pairedToolsEyebrow: "Money & housing tools",
    pairedTools: [
      {
        label: "Dutch salary net calculator",
        href: ROUTES.salaryNet,
        description: "Rough monthly take-home from gross.",
      },
      {
        label: "30% ruling calculator",
        href: ROUTES.ruling,
        description: "Planning check when the facility might apply.",
      },
      {
        label: "Cost of living calculator",
        href: ROUTES.costOfLiving,
        description: "City and household monthly pressure.",
      },
      {
        label: "Rent affordability calculator",
        href: ROUTES.rentAffordability,
        description: "Housing sustainability vs income.",
      },
      {
        label: "Healthcare allowance estimator",
        href: ROUTES.healthcareAllowance,
        description: "Rough allowance context by income band.",
      },
      {
        label: "Childcare cost estimator",
        href: ROUTES.childcare,
        description: "Family cash flow when daycare is in play.",
      },
    ],
  },

  practicalLife: {
    id: "practical-life",
    eyebrow: "Life admin",
    title: "Practical life impact: housing, healthcare, registration, and family setup",
    subtitle:
      "The switch is the trigger; **rent, health insurance, BSN-linked admin, childcare, and documents** are where the stress shows up.",
    intro:
      "Use this section as a **handoff**: pick the lane that matches your pain (cash flow, housing, health, family) and open **one** linked guide or tool.",
    firstFocus: {
      title: "What changes after the switch",
      body: "**Soon**: payslips and commute. **If ignored**: gaps, landlord math, waitlists. **Then**: the right tool or Move page — not all of them.",
      chips: ["Right away", "If you wait", "Open next"],
    },
    cards: [
      {
        id: "immediate",
        label: "Right away",
        priority: "First weeks",
        title: "What can change immediately",
        keyPoints: [
          "**Pay date and cash flow** — rent and bills follow the calendar, not your excitement",
          "**Commute and hours** — the week changes before the salary does",
          "**Insurance route** — employer switch or gap can touch **how** you are covered",
          "**Housing proofs** — new contract or employer name may matter for search or renewal",
        ],
        links: [
          { label: "Municipality registration guide", href: ROUTES.municipalityRegistration },
          { label: "Healthcare basics", href: ROUTES.healthcareBasics },
          { label: "Dutch salary net calculator", href: ROUTES.salaryNet },
        ],
      },
      {
        id: "stress",
        label: "If you wait",
        priority: "Risk",
        title: "What gets expensive when deferred",
        keyPoints: [
          "**Gaps** — even short ones need a **cash and coverage** plan",
          "**Childcare and school waitlists** — geography and timing bite together",
          "**Landlord math** — income and employer letter timing",
          "**Partner permits or work** — linked stories need one shared calendar",
        ],
        links: [
          { label: "Rent affordability calculator", href: ROUTES.rentAffordability },
          { label: "First 90 days planner", href: ROUTES.first90Days },
          { label: "After arriving in the Netherlands", href: ROUTES.afterArriving },
        ],
      },
      {
        id: "open-next",
        label: "Next step",
        priority: "Handoff",
        title: "Where to go on ExpatCopilot",
        keyPoints: [
          "**Move tools** — planners and checklists when dates and documents tangle",
          "**Housing tools** — when rent or move is the bottleneck",
          "**Money tools** — net pay, COL, allowances when the budget is unclear",
          "**Living guides** — healthcare, routine, survival guide when life rhythm is the pain",
        ],
        links: [
          { label: "Move & immigration tools", href: ROUTES.moveTools },
          { label: "Housing tools", href: ROUTES.housingTools },
          { label: "Netherlands survival guide", href: ROUTES.survivalGuide },
          { label: "Daily life basics", href: ROUTES.dailyLife },
        ],
      },
    ],
  },
};

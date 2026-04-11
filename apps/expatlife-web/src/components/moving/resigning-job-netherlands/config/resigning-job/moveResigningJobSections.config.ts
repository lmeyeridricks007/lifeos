import type { MoveResigningJobSections } from "./moveResigningJobNl.config.types";
import { moveResigningJobNlRoutes as ROUTES } from "./moveResigningJobNl.routes";

export const moveResigningJobSections = {
  whatResignationAffects: {
    id: "what-resignation-affects",
    eyebrow: "Main framing",
    title: "What resignation can affect",
    subtitle:
      "Quitting is often taught as **HR + notice**. For many internationals it is also **residence logic, sponsor ties, monthly cash, and household admin** — especially without a next job locked in.",
    intro:
      "**When** you act matters: some things must stay true **until the last day**; others **flip when payroll stops**. Scan **four layers** once, then go deep only where **your** file is fragile.",
    firstFocus: {
      title: "Four layers — 60-second scan",
      body: "You will not max out every layer — you **will** regret skipping the one that actually applies.",
      chips: ["Employment", "Stay", "Money", "Life admin"],
    },
    blocks: [
      {
        id: "layer-employment",
        label: "Employment",
        title: "Contract obligations and exit mechanics",
        intro:
          "**Notice, probation, clauses, handover** = what “done” looks like on paper — and what you can still **use or export** in the final weeks.",
        keyPoints: [
          "**Who, how, when** notice is delivered — follow contract / CAO / handbook",
          "**Garden leave or PILON** — your **real** last day of duties may move",
          "**Kit, confidentiality, side work** — obligations that often **survive** the job",
          "**Repayment** (relocation, course fees) — triggers and amounts **before** you send notice",
        ],
      },
      {
        id: "layer-status",
        label: "Stay & work auth",
        title: "Immigration, sponsorship, and status",
        intro:
          "When stay or work permission is **job-shaped**, quitting is not “just” HR — it is **who must do what**, and **by when**.",
        keyPoints: [
          "**Employer-named permits** — clarify **before** the last day is carved in stone",
          "**No next employer yet** — you need a **honest** gap story for cash **and** stay, not vibes",
          "**Partner / kids on linked files** — one household timeline",
          "**TWV or niche routes** — use Move guides for vocabulary, then **IND / employer** for truth",
        ],
      },
      {
        id: "layer-money",
        label: "Money",
        title: "Salary continuity, benefits, and tax assumptions",
        intro:
          "**Final pay, holiday pay, pension, bonus** can land on **different dates** — while **rent and daycare** keep their rhythm.",
        keyPoints: [
          "Stress-test **one bad month** if income might pause — not only the optimistic case",
          "**30% ruling** — planning only until **payroll** confirms",
          "**Perks tied to the job** — insurance, travel, allowances that **stop with employment**",
          "**Rent / mortgage proofs** — landlords and banks care about **ongoing** income",
        ],
      },
      {
        id: "layer-life",
        label: "Life admin",
        title: "Housing, health, registration, family",
        intro:
          "Schools, landlords, and insurers read **stability and dates** — not how clear the decision felt in your head.",
        keyPoints: [
          "**Income story for housing** — employed vs searching vs gap: different **paperwork**",
          "**Health cover** — employer scheme end vs **basic insurance**; short gaps still need a plan",
          "**BSN / gemeente** if address or household narrative shifts",
          "**Partner work + childcare waitlists** — they do not pause for your notice letter",
        ],
      },
    ],
  },

  contracts: {
    id: "notice-contract-review",
    eyebrow: "Before notice · contract pass",
    title: "Notice, clauses, and what to read first",
    subtitle:
      "Your **current contract** (plus CAO / handbook if they apply) is the **exit map** — not the resignation email.",
    intro:
      "Skim for **three time zones**: **before notice**, **between notice and last day**, **after payroll stops**. Probation, repayment, leave, bonus, and kit rules sit in different zones.",
    firstFocus: {
      title: "Read first — then pick dates",
      body: "The letter is the **last** step: first you want **constraints** and **downstream** effects visible.",
      chips: ["Contract", "Notice", "HR", "In writing", "Tools"],
    },
    blocks: [
      {
        id: "review-contract",
        chip: "Contract",
        title: "What to review in your current contract",
        intro:
          "You are listing **exit obligations** and **what dies with the job** — not improving the role you are leaving.",
        whatMattersNext:
          "If you would not bet a **last day** on a clause as written, pause and ask **HR or an adviser** — not the group chat.",
        keyPoints: [
          "**Notice length** + CAO / handbook overrides",
          "**Probation** — often a different, shorter notice game",
          "**Non-compete, confidentiality, side work, IP** — what survives the exit",
          "**Repayment** — relocation, signing bonus, training",
          "**Leave, bonus, commission** — accrual vs payout timing",
        ],
      },
      {
        id: "notice-timing",
        chip: "Notice",
        title: "Notice periods and resignation timing",
        intro:
          "Track **three dates**: notice **starts**, **last working day**, and **last pay / coverage** — they are not always the same evening.",
        whatMattersNext:
          "Do not commit a last day until **cash, cover, and stay** (if relevant) are at least **roughly** visible.",
        keyPoints: [
          "**Written vs verbal** — follow what contract / CAO expects",
          "**Garden leave / PILON** — duties may end before the calendar looks “done”",
          "**No next job** — model **gap months** on purpose",
          "**Handover** vs **your runway** — negotiate tension, not morality",
        ],
      },
      {
        id: "ask-hr",
        chip: "HR",
        title: "What to clarify with HR early",
        intro:
          "Polite, factual questions: **pay**, **leave**, **letters**, **mobility**, **when access ends**.",
        whatMattersNext: "**Who · when · which PDF** beats learning the portal is gone.",
        keyPoints: [
          "**Last pay** + **holiday pay** settlement",
          "**Benefits offboarding** — especially if a **scheme** becomes **individual** insurance",
          "**Reference / income letters** for housing or agencies",
          "**Laptop, data, exports** — what must leave the building **with** you",
        ],
      },
      {
        id: "in-writing",
        chip: "In writing",
        title: "What to keep in writing",
        intro:
          "Warmth ≠ **audit trail**. Email yourself **facts** after calls: dates, amounts, who owns the next step.",
        whatMattersNext: "Short, dated, boring emails age better than heroic memory.",
        keyPoints: [
          "**Accepted resignation** + **agreed last day**",
          "**Leave balance** + payout",
          "**Bonus / commission** eligibility as discussed",
          "**Mobility steps** — owner + deadline",
        ],
      },
      {
        id: "contract-tools",
        chip: "Tools",
        title: "Which ExpatCopilot tools to use next",
        intro:
          "Tools **sort questions** — they do not replace HR, legal, or tax advice.",
        whatMattersNext: "Pick **one** tool, run it with **real** inputs, then go back to HR with **specific** asks.",
        keyPoints: [
          "**Contract risk scanner** — clause pass **before** notice",
          "**Job offer comparison** — when a **next** package exists",
          "**Employment type tool** — employee vs contractor-style **offboarding** differences",
        ],
      },
    ],
    pairedToolsEyebrow: "Offers, contracts & work model",
    pairedTools: [
      {
        label: "Employment contract risk scanner",
        href: ROUTES.contractScanner,
        description: "Surface exit and clause questions from your current contract.",
      },
      {
        label: "Job offer comparison tool",
        href: ROUTES.jobOffer,
        description: "When a next package is real and timing must align.",
      },
      {
        label: "Employment type scenario tool",
        href: ROUTES.employmentType,
        description: "Stress-test how engagement type affects obligations.",
      },
    ],
  },

  permits: {
    id: "permits-status",
    eyebrow: "Before last day · stay logic",
    title: "Permits, sponsorship, and status",
    subtitle:
      "When stay or work permission is **job-linked**, resignation sits beside **sponsorship, notifications, and what happens next** — not only a goodbye email.",
    intro:
      "Stay at **plain-language** level: know **when to escalate** to **IND**, **employer mobility**, or an adviser. This page flags **questions**; it does not issue **answers**.",
    firstFocus: {
      title: "Same calendar: notice + status",
      body: "If your file **names an employer** or **assumes payroll**, ask mobility **while** dates are still movable — not from the airport.",
      chips: ["Employer-linked?", "Who acts?", "Timing", "Route"],
    },
    blocks: [
      {
        id: "why-resignation-status",
        chip: "Why it matters",
        title: "Why resignation can affect residency or status",
        intro:
          "Authorities care about **purpose of stay** and **economic activity** — not your performance review.",
        whatMattersNext:
          "Unsure if your permit is **job-tied**? Read **Residence permits**, then ping **mobility** with a **specific** question.",
        keyPoints: [
          "Some filings are **easier while employed**",
          "**Ending work** can start **clocks or duties** — route-specific",
          "**No next job** — sketch **best and lean** scenarios on paper",
          "**Family on linked permits** — one resignation, several files",
        ],
      },
      {
        id: "employer-support",
        chip: "Employer role",
        title: "Why employer support can still matter on the way out",
        intro:
          "Letters, filings, and confirmations are often **employer-gated** — and **access dies** faster than relationships.",
        whatMattersNext: "Names, deadlines, and **who pays** — in writing.",
        keyPoints: [
          "**Mobility vs HR vs payroll** — three desks, three inboxes",
          "**What they still file** after you resign",
          "**Next job start** vs **government processing** — overlap is not automatic",
          "**Fees** — who covers what in a transition",
        ],
      },
      {
        id: "timing-status",
        chip: "Timing",
        title: "Why timing matters before and after your final day",
        intro:
          "**Employed** often means **payslips, portals, and sign-offs** are still easy — **unemployed** means you live out of your own folder.",
        whatMattersNext:
          "If something **must** happen after exit, **download the PDFs now**.",
        keyPoints: [
          "**Last day ≠ last pay ≠ last insurance day** — three different events",
          "**Gap months** — honest cash + stay story",
          "**Who notifies whom** — confirm against **official** guidance for your route",
        ],
      },
      {
        id: "permits-next-pages",
        chip: "Read next",
        title: "Which Move pages to open next",
        intro:
          "Sibling guides give **vocabulary and order**; **IND / employer** still own outcomes.",
        whatMattersNext: "**One** guide that matches your **actual** worry tonight.",
        keyPoints: [
          "**Residence permits**",
          "**Extensions & changes**",
          "**Status changes**",
          "**TWV**",
          "**Visas & residency** — when you do not know which bucket you are in",
        ],
      },
    ],
    pairedToolsEyebrow: "Move guides that pair with resignation planning",
    pairedTools: [
      {
        label: "Residence permits in the Netherlands",
        href: ROUTES.residencePermits,
        description: "Permit framing next to employment endings.",
      },
      {
        label: "Extensions & changes",
        href: ROUTES.extensions,
        description: "Renewals and shifts after you are already here.",
      },
      {
        label: "Status changes",
        href: ROUTES.statusChanges,
        description: "When the basis of stay may move across categories.",
      },
      {
        label: "TWV work permit",
        href: ROUTES.twvWorkPermit,
        description: "TWV-oriented context when that layer may apply.",
      },
      {
        label: "Visas & residency orientation",
        href: ROUTES.visas,
        description: "Doorway to the wider route picture.",
      },
    ],
  },

  salary: {
    id: "salary-benefits-tax",
    eyebrow: "Money · stress-test the month",
    title: "Pay, benefits, tax, and the month that follows",
    subtitle:
      "**Gross** is a headline; **net, pension, holiday pay, rent, and childcare** decide whether the transition feels survivable — especially with a **gap**.",
    intro:
      "Rough models are fine: stack **take-home**, **worst-month cash**, and **fixed costs**, then refine with **payroll and Belastingdienst** when numbers bind you.",
    firstFocus: {
      title: "Layer calculators — do not stop at gross",
      body: "**Net + rent (+ childcare)** beats a single salary fantasy.",
      chips: ["Income gaps", "Benefits", "Rent & commute", "Family"],
    },
    blocks: [
      {
        id: "income-gaps",
        chip: "Continuity",
        title: "Income continuity and gaps",
        intro:
          "**Last pay** and **first next pay** can miss each other by **weeks**. Name that hole before you romanticise it.",
        whatMattersNext:
          "Run **net pay** once with **€0** next salary — feel the floor.",
        keyPoints: [
          "**Final payslip** + **holiday pay** timing",
          "**Runway vs rent / insurance / daycare**",
          "**Slow job market** — add a pessimistic month count",
          "**Side income** — contract + stay story may cap what is allowed",
        ],
      },
      {
        id: "benefits-pension",
        chip: "Benefits",
        title: "Why benefits and pension matter on the way out",
        intro:
          "**Pension, leave rhythm, and insured perks** change the **real** value of what you are walking away from.",
        whatMattersNext: "Payroll: **pension + leave settlement** in one thread **before** last day if you can.",
        keyPoints: [
          "**Pension** — accrual, statements, transfer questions",
          "**Holiday allowance** vs **exit date**",
          "**Bonus / commission windows**",
          "**Collective or employer insurance** → **individual basic insurance** timing",
        ],
      },
      {
        id: "rent-commute-family",
        chip: "Household",
        title: "Why rent, commute, and family costs keep running",
        intro:
          "**Rent, mortgage, OV, childcare** follow the calendar — not your notice letter.",
        whatMattersNext:
          "**Rent affordability** + **net pay** with a **conservative** next-income guess.",
        keyPoints: [
          "**Landlord / bank** — updated income story",
          "**Commute products** — sunk cost vs unknown next office",
          "**Childcare** — deposits + city",
          "**Household budget** — partner income in the same frame",
        ],
      },
      {
        id: "tax-ruling",
        chip: "Tax",
        title: "30% ruling, payroll, and changing affordability",
        intro:
          "**Ruling and payroll** can move when the employer or income pattern moves — peers are a **hazardous** source of truth.",
        whatMattersNext:
          "**30% calculator** = sketch only; **payroll** = verdict.",
        keyPoints: [
          "**30% ruling** — continuity, documentation",
          "**Allowances** tied to income bands",
          "**Tax year boundary** if exit lands near year-end",
        ],
      },
      {
        id: "money-tools",
        chip: "Tools",
        title: "Which calculators to use next",
        intro: "Messy numbers are fine — you are **stress-testing**, not filing a return.",
        whatMattersNext: "**Net** → **rent or COL** → **childcare** if kids matter.",
        keyPoints: [
          "**Dutch salary net**",
          "**30% ruling** (if relevant)",
          "**Cost of living**",
          "**Rent affordability**",
          "**Healthcare allowance**",
          "**Childcare cost**",
        ],
      },
    ],
    pairedToolsEyebrow: "Money & housing tools",
    pairedTools: [
      {
        label: "Dutch salary net calculator",
        href: ROUTES.salaryNet,
        description: "Rough monthly take-home through transitions.",
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
        description: "Housing vs income after change.",
      },
      {
        label: "Healthcare allowance estimator",
        href: ROUTES.healthcareAllowance,
        description: "Rough allowance context by income band.",
      },
      {
        label: "Childcare cost estimator",
        href: ROUTES.childcare,
        description: "Family cash flow when daycare is a major line.",
      },
    ],
  },

  practicalLife: {
    id: "practical-life",
    eyebrow: "After employment ends · life admin",
    title: "Housing, health, registration, family",
    subtitle:
      "The resignation email is short; **rent, insurance, gemeente tasks, childcare, and PDFs** are where people lose weekends.",
    intro:
      "Pick **one lane** below, open **one** link, then come back — this page stays useful even if deeper “resignation-only” articles do not exist yet.",
    firstFocus: {
      title: "Three lenses",
      body: "**Now** = cash + cover. **Risk** = what bites if you ghost it. **Next** = one intentional handoff link.",
      chips: ["Now", "Risk", "Next"],
    },
    cards: [
      {
        id: "immediate",
        label: "Now",
        priority: "First weeks",
        title: "What shifts quickly",
        keyPoints: [
          "**Pay dates** — calendar ≠ emotions",
          "**Employer benefits** — when cover flips to **your** insurance choice",
          "**Housing proofs** — landlord may want a **fresh** income story",
          "**Routine** — commute and hours can wobble before cash does",
        ],
        links: [
          { label: "Municipality registration guide", href: ROUTES.municipalityRegistration },
          { label: "Healthcare basics", href: ROUTES.healthcareBasics },
          { label: "Dutch salary net calculator", href: ROUTES.salaryNet },
        ],
      },
      {
        id: "stress",
        label: "Risk",
        priority: "If ignored",
        title: "What gets expensive or slow",
        keyPoints: [
          "**Insurance gaps** — even **short** ones need intent",
          "**Childcare / school** — geography + timing",
          "**Partner permits** — one household, one timeline",
          "**Portal access** — export PDFs **before** the account dies",
        ],
        links: [
          { label: "Rent affordability calculator", href: ROUTES.rentAffordability },
          { label: "First 90 days planner", href: ROUTES.first90Days },
          { label: "After arriving in the Netherlands", href: ROUTES.afterArriving },
        ],
      },
      {
        id: "open-next",
        label: "Next",
        priority: "Handoff",
        title: "Where to go from here",
        keyPoints: [
          "**Changing jobs** — signed next role + aligned dates",
          "**Move tools** — planners when dates and papers tangle",
          "**Housing tools** — rent is the bottleneck",
          "**Living guides** — health, survival guide, daily rhythm",
        ],
        links: [
          { label: "Changing jobs in the Netherlands", href: ROUTES.changingJobs },
          { label: "Move & immigration tools", href: ROUTES.moveTools },
          { label: "Housing tools", href: ROUTES.housingTools },
          { label: "Netherlands survival guide", href: ROUTES.survivalGuide },
        ],
      },
    ],
  },
} satisfies MoveResigningJobSections;

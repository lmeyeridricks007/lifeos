import type { MoveLayoffsSectionsConfig } from "../moveLayoffsNl.content.model";
import { moveLayoffsNlRoutes as ROUTES, workingInNl } from "./moveLayoffsNl.routes";

export const moveLayoffsSections = {
  whatJobChangeAffects: {
    id: "what-layoffs-affect",
    eyebrow: "Main framing",
    title: "What layoffs can affect",
    subtitle:
      "One piece of news can touch four areas: the job ending, how you may stay in the Netherlands, money in your account, and documents landlords or insurers still ask for.",
    intro:
      "Skim all four once. Then focus only where your situation needs detail — not every block applies to everyone.",
    firstFocus: {
      title: "What matters when",
      body: "Early: contract basics, clear HR questions, copies of permits and payslips outside work email. When dates are fixed: when pay stops, when benefits end, and any stay steps — do what has a real deadline first.",
      chips: ["Clarify early", "After confirmation", "In writing", "One topic at a time"],
    },
    blocks: [
      {
        id: "layoff-employment",
        label: "Employment",
        title: "Contract, notice, and the end of the role",
        intro:
          "Last day, notice or pay in lieu, and what still pays decide how much runway you have for stay and rent math.",
        keyPoints: [
          "Access — email, laptop, systems — and when it cuts off",
          "Severance / transition — only counts if it is signed or clearly committed",
          "Holiday pay, bonus, leave — which month it lands in",
          "Clauses that survive the last day (non-compete, confidentiality)",
        ],
      },
      {
        id: "layoff-status",
        label: "Immigration / status",
        title: "Sponsorship, permits, and stay context",
        intro:
          "If work is how you stay, the exit is a parallel track to severance — not something to put off until you feel ready.",
        keyPoints: [
          "Your route — employer-tied vs other — at a headline level only",
          "Who files or notifies, and what you must supply",
          "Gaps between employers — even short ones can matter",
          "Partner / kids on linked documents — one household timeline",
        ],
      },
      {
        id: "layoff-money",
        label: "Financial continuity",
        title: "Income, benefits, tax assumptions, and monthly life",
        intro:
          "Net pay changes first; rent, daycare, and insurance keep the same due dates.",
        keyPoints: [
          "Worst month — gap before the next payslip, even if you hope it is short",
          "30% ruling — confirm with payroll; forums are not your file",
          "Employer benefits (insurance schemes, passes) vs what you must replace",
          "Proof of income for rent or credit — plan the next story early",
        ],
      },
      {
        id: "layoff-life",
        label: "Daily life & family",
        title: "Housing, healthcare, registration, schools",
        intro:
          "This is where paperwork and emotion collide — landlords, insurers, and school calendars do not wait for closure on the job side.",
        keyPoints: [
          "Lease renewal or search — when your income letter changes",
          "Health cover — no accidental gap between schemes",
          "BSN / address — if you move or household changes",
          "Childcare & schools — contracts and catchments outlive the redundancy thread",
        ],
      },
    ],
  },

  contracts: {
    id: "employment-notice",
    eyebrow: "Employment clarity",
    title: "Employment ending, notice, and what to clarify",
    subtitle:
      "Early: read your contract and ask clear questions. When things are confirmed: get written last day and pay details before you fix other plans.",
    intro:
      "Keep one simple picture: how the role ends, when pay stops, and what money you still expect. You are making a checklist, not debating law.",
    firstFocus: {
      title: "Confirmed vs assumed",
      body: "Assumed = \"we will email you.\" Confirmed = dates and amounts you could show a bank or landlord. If last day or pay stop stays unclear, keep asking — silence is not an answer.",
      chips: ["Early: read + ask", "After: dates locked", "HR + contract match", "Save PDFs"],
    },
    blocks: [
      {
        id: "review-contract-exit",
        chip: "Review",
        title: "What to review in your current contract",
        intro:
          "Find how your role can end: notice, redundancy language, and money triggers.",
        whatMattersNext:
          "If HR's story and the contract disagree, fix that before you plan rent or travel.",
        keyPoints: [
          "Notice and pay in lieu / garden leave",
          "Fixed term or probation crossing redundancy timing",
          "Bonus, equity, relocation clawback",
          "Restrictions after the last day (non-compete, etc.)",
        ],
      },
      {
        id: "ask-hr-early",
        chip: "Ask HR",
        title: "What to ask HR early",
        intro:
          "Ask for dates, amounts, and one owner for mobility — not vibes.",
        whatMattersNext:
          "Vague on last day or when pay stops = keep asking; everything else hangs off those.",
        keyPoints: [
          "Last working day vs payroll end",
          "Final payslip, UWV / references letters you need for housing or permits",
          "Laptop / access handback and how to reach HR later",
          "Outplacement or support — committed vs \"we are looking into it\"",
        ],
      },
      {
        id: "keep-writing",
        chip: "Paper trail",
        title: "What to keep in writing",
        intro:
          "Screenshots help; PDFs in your own cloud help when work login dies.",
        whatMattersNext:
          "Pull payslips and permit letters before access cuts — boring, high leverage.",
        keyPoints: [
          "End date + pay components (signed or PDF email)",
          "Pension / leave balances from systems you can still open",
          "Benefit end dates from employer or insurer",
          "IND / sponsor letters you already have",
        ],
      },
      {
        id: "employment-tools",
        chip: "Tools",
        title: "Which ExpatCopilot tools to use next",
        intro:
          "Tools surface questions — they do not replace HR or a lawyer.",
        whatMattersNext:
          "Open one tool with your real contract or offer on screen.",
        keyPoints: [
          "Contract scanner — exit and clause prompts",
          "Offer comparison — exit package vs new offer",
          "Employment type tool — if how you are paid might change",
        ],
        internalLinks: [
          { label: "Employment contract risk scanner", href: ROUTES.contractScanner, description: "Structured clause prompts." },
          { label: "Job offer comparison tool", href: ROUTES.jobOffer, description: "Side-by-side packages." },
          { label: "Employment type scenario tool", href: ROUTES.employmentType, description: "Work-model comparisons." },
        ],
      },
    ],
    pairedToolsEyebrow: "Contracts & work tools",
    pairedTools: [
      {
        label: "Employment contract risk scanner",
        href: ROUTES.contractScanner,
        description: "Surface questions from dense contract language.",
      },
      {
        label: "Job offer comparison tool",
        href: ROUTES.jobOffer,
        description: "When you are weighing an exit package against a new offer.",
      },
      {
        label: "Employment type scenario tool",
        href: ROUTES.employmentType,
        description: "When payroll or engagement model might change.",
      },
    ],
  },

  permits: {
    id: "permits-status",
    eyebrow: "Permits & status",
    title: "Permits, sponsorship, and status questions",
    subtitle:
      "Overview only — enough to see if you need a separate track, not to guess IND decisions yourself.",
    intro:
      "Focus on your permit: who is named, what it expects from work, and which dates start from notice or last day. Other people's stories are not your file.",
    firstFocus: {
      title: "Early vs after confirmation",
      body: "Early: see if stay is tied to this employer and who usually takes the next step. After confirmation: put IND, employer, and calendar tasks on one line so deadlines do not hide in email.",
      chips: ["Route", "Employer steps", "Deadlines", "Household"],
    },
    blocks: [
      {
        id: "why-layoff-status",
        chip: "Why it matters",
        title: 'Why layoffs are not "only HR" for some expats',
        intro:
          "If work anchors stay, the same news can mean new filings, deadlines, or a different route — or a straightforward employer-led step. You will not know from a blog post.",
        whatMattersNext:
          "Unsure? Run stay in parallel with severance talk — not only after you feel you have processed it.",
        keyPoints: [
          "Employer-tied vs other stay — headline only",
          "Who notifies / files, and your to-do list",
          "Search or grace ideas — verify; skip WhatsApp lore",
          "Partner / kids on linked documents",
        ],
      },
      {
        id: "employer-support-layoff",
        chip: "Employer role",
        title: "Why employer support or timing can matter",
        intro:
          "Some steps only move when employer clicks submit. Chasing the right name beats rereading policy PDFs.",
        whatMattersNext:
          "Ask for one mobility/HR owner when payroll, legal, and people-ops all touch your file.",
        keyPoints: [
          "Sponsor workflows where they apply",
          "Last payroll vs termination on paper — systems may differ",
          "Letters for housing, bank, or gemeente",
          "Fees / lawyer — what they will pay vs won’t",
        ],
      },
      {
        id: "timing-layoff",
        chip: "Timing",
        title: "Why timing matters before and after the last day",
        intro:
          "Before last day: easier payslips, access, internal HR. After: some letters and portals get slower — not always worse, just slower.",
        whatMattersNext:
          "One visible timeline: notice → last day → pay stop → any IND steps.",
        keyPoints: [
          "Which clock — notice signed, last day, or payroll end",
          "New offer timing vs current permit story",
          "Travel if ID or sticker is in process",
          "Kids — school and daycare do not wait on your exit chat",
        ],
      },
      {
        id: "permits-next-guides",
        chip: "Read next",
        title: "Which Move pages to open next",
        intro:
          "Each guide is standalone — open one that matches your worry.",
        whatMattersNext:
          "Stay continuity → permits or extensions. Different category of stay → status changes. Unsure → visas & residency first.",
        keyPoints: [
          "Residence permits — purpose over time",
          "Extensions & changes — renewals and employer shifts",
          "Status changes — when the basis of stay might move",
          "TWV — employer work permission layer",
          "Visas & residency — when you do not know where you sit",
        ],
        internalLinks: [
          { label: "Residence permits", href: ROUTES.residencePermits, description: "Permit framing." },
          { label: "Extensions & changes", href: ROUTES.extensions, description: "After-arrival shifts." },
          { label: "Status changes", href: ROUTES.statusChanges, description: "Basis-of-stay transitions." },
          { label: "TWV work permit", href: ROUTES.twvWorkPermit, description: "TWV context." },
          { label: "Visas & residency", href: ROUTES.visas, description: "Route doorway." },
        ],
      },
    ],
    pairedToolsEyebrow: "Move guides next to layoff planning",
    pairedTools: [
      { label: "Residence permits in the Netherlands", href: ROUTES.residencePermits, description: "Stay framing alongside employment." },
      { label: "Extensions & changes", href: ROUTES.extensions, description: "Renewals and employer-linked shifts." },
      { label: "Status changes", href: ROUTES.statusChanges, description: "When the basis of stay may move." },
      { label: "TWV work permit", href: ROUTES.twvWorkPermit, description: "TWV-oriented orientation." },
      { label: "Visas & residency orientation", href: ROUTES.visas, description: "Wider route picture." },
    ],
  },

  salary: {
    id: "salary-benefits-tax",
    eyebrow: "Money & housing",
    title: "Salary, benefits, tax, and monthly life",
    subtitle:
      "Income often changes first; rent and bills keep going. Sketch one careful month before you rely on best-case guesses.",
    intro:
      "You are checking cash flow, not filing a tax return. When numbers become firm, run the calculators again — rough first, precise later.",
    firstFocus: {
      title: "Stack in order",
      body: "Net pay (or a gap) → rent → childcare / travel → allowances linked to income. Skip lines that do not apply to your household.",
      chips: ["Net / gap", "Fixed costs", "Allowances", "Re-run later"],
    },
    blocks: [
      {
        id: "income-gaps",
        chip: "Income",
        title: "Income continuity and gaps",
        intro:
          "Severance, notice pay, and next start rarely land in one neat month — map cash in vs debits out.",
        whatMattersNext:
          "Any gap, even short: plan liquidity and insurance on purpose.",
        keyPoints: [
          "Last payslip month vs lump sums — watch the bank calendar",
          "WW / schemes — orientation only; confirm with official sources",
          "Buffer for rent + insurance + subs",
          "Cross-border bills if you stack multiple countries",
        ],
      },
      {
        id: "benefits-pension-layoff",
        chip: "Benefits",
        title: "Why benefits and pension matter",
        intro:
          "Pension, holiday pay, and employer perks often have a hard stop — know what ends when.",
        whatMattersNext:
          "Ask payroll for a written final breakdown when they can.",
        keyPoints: [
          "Pension — accrual stop, vesting, your vs employer parts",
          "Leave — payout vs forfeit — date matters",
          "Employer insurance vs mandatory Dutch cover",
          "Toeslag and other income-linked allowances",
        ],
      },
      {
        id: "rent-family-costs",
        chip: "Housing & family",
        title: "Why rent, commute, and family costs keep running",
        intro:
          "Your lease and daycare contract did not get the HR email — align monthly lines with the new income story.",
        whatMattersNext:
          "Pair rent affordability with realistic net or zero income for one month.",
        keyPoints: [
          "Rent proof — what the landlord will want next",
          "OV / commute — cancel or downshift what you can",
          "Childcare — notice periods and deposits",
          "Partner — joint cash and linked stay, if any",
        ],
      },
      {
        id: "money-tools-layoff",
        chip: "Tools",
        title: "Which tools to use next",
        intro:
          "Rough inputs first — scenario compare, not a tax return.",
        whatMattersNext:
          "Re-run after firm last day and any offer numbers.",
        keyPoints: [
          "Salary net — next role or lower months",
          "30% ruling — if it might apply; payroll confirms",
          "Cost of living — city + household shape",
          "Rent affordability",
          "Childcare estimator",
        ],
        internalLinks: [
          { label: "Dutch salary net calculator", href: ROUTES.salaryNet, description: "Take-home from gross." },
          { label: "30% ruling calculator", href: ROUTES.ruling, description: "Planning check." },
          { label: "Cost of living calculator", href: ROUTES.costOfLiving, description: "Monthly pressure." },
          { label: "Rent affordability calculator", href: ROUTES.rentAffordability, description: "Housing vs income." },
          { label: "Childcare cost estimator", href: ROUTES.childcare, description: "Daycare cash flow." },
        ],
      },
    ],
    pairedToolsEyebrow: "Money & housing calculators",
    pairedTools: [
      { label: "Dutch salary net calculator", href: ROUTES.salaryNet, description: "Model take-home after a new offer or reduced income." },
      { label: "30% ruling calculator", href: ROUTES.ruling, description: "When the facility might be in scope." },
      { label: "Cost of living calculator", href: ROUTES.costOfLiving, description: "Household monthly bands by city." },
      { label: "Rent affordability calculator", href: ROUTES.rentAffordability, description: "Stress-test housing vs income." },
      { label: "Healthcare allowance estimator", href: ROUTES.healthcareAllowance, description: "Rough allowance context." },
      { label: "Childcare cost estimator", href: ROUTES.childcare, description: "Family line items." },
    ],
  },

  employeeRights: {
    id: "employee-rights-nl",
    eyebrow: "Dutch employment context",
    title: "Employee rights & what to verify (overview)",
    subtitle:
      "High-level orientation for internationals — not legal advice. Rules depend on contract, CAO, company size, and timing; confirm facts with HR, your union, **UWV**, or a qualified employment lawyer.",
    intro:
      "The Netherlands has strong worker protections on paper, but your file is unique. Use this block to know what topics exist — then chase **written** answers from the right party.",
    firstFocus: {
      title: "What “rights” usually means here",
      body: "Notice periods, consultation in larger restructures, transition pay where it applies, and clear paperwork — not vibes in a Teams call. If something sounds off, note it and verify in writing.",
      chips: ["Notice", "Consultation", "Written terms", "Official sources"],
    },
    blocks: [
      {
        id: "nl-notice-contract",
        chip: "Contract & notice",
        title: "Notice, contract type, and how the role can end",
        intro:
          "Fixed term vs indefinite, probation, and collective agreements (**CAO**) can change what “fair” looks like. Your contract + any CAO beat a generic blog post.",
        whatMattersNext:
          "Ask HR which CAO or handbook rules apply and for the **termination letter or agreement in writing** once terms exist.",
        keyPoints: [
          "Individual dismissal vs collective redundancy — different consultation paths",
          "Garden leave / pay in lieu — only counts if agreed or stated clearly",
          "Non-compete clauses — often narrower than people fear; still read yours",
          "Probation — shorter notice if still inside probation window",
        ],
      },
      {
        id: "nl-consultation-uwv",
        chip: "Process",
        title: "Works council, OR, and when **UWV** appears",
        intro:
          "Larger layoffs can trigger works council (**OR**) steps or timelines you do not see in a one-to-one exit. Smaller exits may be simpler — do not assume your case matches someone else’s headline.",
        whatMattersNext:
          "If many roles are at risk, ask whether a collective process is running and where official letters will land.",
        keyPoints: [
          "Works council (**OR**) — can delay or shape restructures; not every company has the same rhythm",
          "Dismissal permit (**ontslagvergunning**) — employer-side step in some routes; you still want your own copy of outcomes",
          "**UWV** — benefits and re-employment support; separate from IND stay questions",
          "Keep a dated log of what you were told vs what arrived in writing",
        ],
      },
      {
        id: "nl-where-not-advice",
        chip: "Escalate wisely",
        title: "Where to go when you need more than HR",
        intro:
          "Disputes, discrimination worries, or unclear packages deserve a specialist. This page cannot pick your lawyer or union for you.",
        whatMattersNext:
          "If you sign anything with money attached, pause until you understand every line — including Dutch-only PDFs.",
        keyPoints: [
          "Company confidential helpline or second HR opinion — sometimes available in bigger firms",
          "Legal aid (**rechtsbijstand**) or employment lawyers — shop for someone who handles internationals",
          "Union (**vakbond**) — if you are a member, they often know CAO + sector patterns",
          "IND / tax — separate lane; do not mix stay questions into severance negotiation without a plan",
        ],
        internalLinks: [
          { label: "Working in the Netherlands", href: workingInNl, description: "Broader work + move framing." },
          { label: "Employment contract risk scanner", href: ROUTES.contractScanner, description: "Clause prompts before you sign." },
        ],
      },
    ],
    pairedToolsEyebrow: "Work cluster — contracts & offers",
    pairedTools: [
      { label: "Employment contract risk scanner", href: ROUTES.contractScanner, description: "Structured questions on exit language." },
      { label: "Work tools hub", href: ROUTES.workTools, description: "Offers, contracts, payslips." },
      { label: "Work in the Netherlands (Work cluster)", href: ROUTES.workGuide, description: "Employment context beyond this Move guide." },
    ],
  },

  expatBenefits: {
    id: "benefits-extras-layoffs",
    eyebrow: "Benefits & extras",
    title: "Benefits, allowances, and what often stops with payroll",
    subtitle:
      "Employer schemes feel “free” until the last day. Map what was pretax, what was insured through work, and what needs a personal replacement.",
    intro:
      "Pension, travel, meal, and gym perks usually have a last accrual or eligibility date. Ask payroll for a **single summary** when they can — screenshots from apps are a backup, not the source of truth.",
    firstFocus: {
      title: "Stack what was employer-led",
      body: "Health collective, pension, bike plan, WFH allowance — mark “ends with last payslip” vs “ends with contract date” vs “you must port yourself.”",
      chips: ["Pension", "Insurances", "Allowances", "Payroll letter"],
    },
    blocks: [
      {
        id: "benefits-pension-leave",
        chip: "Pension & leave",
        title: "Pension accrual, holiday hours, and special leave",
        intro:
          "Accrual often stops on a defined date; payouts may land in a later month. Holiday sell-back rules depend on CAO + contract.",
        whatMattersNext:
          "Request pensionable salary history and employer scheme name so you can talk to the provider if needed.",
        keyPoints: [
          "Defined contribution vs older schemes — different statements",
          "Holiday balance — payout, carry, or forfeit windows",
          "Parental / care leave that was employer-topped — what reverts",
        ],
      },
      {
        id: "benefits-insurance-perks",
        chip: "Insurance & perks",
        title: "Collective health, disability, and “soft” benefits",
        intro:
          "Collective **zorg** via employer may end on a fixed date; you must pick basic Dutch insurance yourself to avoid a gap. Disability (**WIA**) top-ups through work also need a handover.",
        whatMattersNext:
          "Book a basic insurance start date that touches your employer scheme end date — even if you feel healthy.",
        keyPoints: [
          "Collective → personal insurance — compare on independer / Zorgwijzer when ready",
          "Travel / NS business card — cancel deadlines",
          "Learning budget, phone, laptop — return rules vs buyout",
        ],
        internalLinks: [
          { label: "Healthcare basics", href: ROUTES.healthcareBasics, description: "How Dutch cover fits together." },
          { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/", description: "Choosing a policy after employer cover." },
        ],
      },
      {
        id: "benefits-30-percent",
        chip: "30% ruling",
        title: "30% ruling and payroll-only perks",
        intro:
          "The facility is payroll-administered. A job end can change eligibility or proof needs for your next role — forums are not your tax file.",
        whatMattersNext:
          "Ask payroll in writing whether the ruling is still active, until when, and what they send to **Belastingdienst**.",
        keyPoints: [
          "Ruling end date vs last payslip — not always the same story",
          "Minimum salary thresholds for new roles — revisit when comparing offers",
          "Proof of foreign expertise — sometimes requested again when switching employers",
        ],
        internalLinks: [
          { label: "30% ruling calculator", href: ROUTES.ruling, description: "Rough planning only." },
          { label: "Payslip decoder", href: ROUTES.payslip, description: "Read components while access lasts." },
        ],
      },
    ],
    pairedToolsEyebrow: "Money & benefits tools",
    pairedTools: [
      { label: "Payslip decoder", href: ROUTES.payslip, description: "Decode components before access ends." },
      { label: "Healthcare allowance estimator", href: ROUTES.healthcareAllowance, description: "Rough **toeslag** context if income drops." },
      { label: "Money tools hub", href: ROUTES.moneyTools, description: "Salary + household money stack." },
    ],
  },

  expatWatchOuts: {
    id: "expat-watch-outs",
    eyebrow: "Things to watch",
    title: "Common pitfalls when you are not Dutch-default",
    subtitle:
      "Extra admin layers — stay proof, landlord math, cross-border ties — often surprise people who expected “only HR.”",
    intro:
      "None of this is drama for drama’s sake; it is timing. If two systems disagree (bank vs IND vs employer), write it down and chase the owner of each.",
    firstFocus: {
      title: "Read slowly, act on deadlines",
      body: "Emotional bandwidth is finite. Split “must this week” from “research later” — same idea as the start-here phases on this page.",
      chips: ["Stay proof", "Housing", "Tax home", "Stories ≠ law"],
    },
    blocks: [
      {
        id: "watch-stay-landlord",
        chip: "Stay & housing",
        title: "Landlord, bank, and gemeente still want proof",
        intro:
          "A work contract letter that was true last month may be stale next month. Plan the next acceptable proof early — often payslips + savings + employer letters in combination.",
        whatMattersNext:
          "If you need a landlord update, ask what format they accept before you pay rush fees.",
        keyPoints: [
          "Income checks — age of payslips; some want Dutch employment only",
          "Joint contracts — partner income may help or complicate",
          "Registration (**BRP**) — mismatches slow other services",
        ],
        internalLinks: [
          { label: "Rent affordability calculator", href: ROUTES.rentAffordability, description: "Stress-test housing vs income." },
          { label: "Municipality registration guide", href: ROUTES.municipalityRegistration, description: "Address + local admin." },
        ],
      },
      {
        id: "watch-permit-gaps",
        chip: "Permit clocks",
        title: "Short gaps in work permission feel long on paper",
        intro:
          "“A few weeks between employers” can still be a structured story for IND — or simple if your route allows. Do not infer from expat group chats.",
        whatMattersNext:
          "If your permit name is still the old employer, ask who files what before you book non-refundable travel.",
        keyPoints: [
          "Search year myths vs your actual permit type",
          "Partner / kids on linked permits — one household decision",
          "Business travel if a sticker appointment slips",
        ],
        internalLinks: [
          { label: "Residence permits", href: ROUTES.residencePermits, description: "Stay framing." },
          { label: "Extensions & changes", href: ROUTES.extensions, description: "Employer-linked shifts." },
        ],
      },
      {
        id: "watch-tax-social",
        chip: "Tax & social",
        title: "Cross-border ties and “where am I tax-resident?”",
        intro:
          "Second homes, partner abroad, or RSUs in another country do not vanish because your Dutch job ends. You still want a boring, defensible story.",
        whatMattersNext:
          "Use **Belastingdienst** / your payroll contact for filing obligations — not this page.",
        keyPoints: [
          "30% ruling interactions with foreign assets — specialist territory",
          "Social security coordination — A1 / certificates — only when relevant",
          "RSU / bonus cliffs — check vest dates vs termination date",
        ],
      },
    ],
    pairedToolsEyebrow: "Move guides when stay wobbles",
    pairedTools: [
      { label: "Status changes", href: ROUTES.statusChanges, description: "Basis-of-stay transitions." },
      { label: "Visas & residency orientation", href: ROUTES.visas, description: "Route doorway." },
      { label: "TWV work permit", href: ROUTES.twvWorkPermit, description: "Employer-linked work permission." },
    ],
  },

  expatActions: {
    id: "expat-tips-actions",
    eyebrow: "Tips & actions",
    title: "Practical moves internationals can take this week",
    subtitle:
      "Small, boring steps beat heroic multitasking. Pick three actions, schedule them, then come back to this page when you have new dates.",
    intro:
      "You do not need every box ticked on day one. You do need a short list with owners: you, employer, partner, or adviser.",
    firstFocus: {
      title: "Suggested order",
      body: "Written last day + pay stop → permit snapshot → one money model → one housing call → inbox cleanup for PDFs.",
      chips: ["Write down", "One owner", "Revisit weekly"],
    },
    blocks: [
      {
        id: "action-week-one",
        chip: "This week",
        title: "Seven actions that age well",
        intro:
          "None require talent — only calendar space. Skip lines that genuinely do not apply.",
        whatMattersNext:
          "After HR answers, update your one-page timeline so your partner or housemate sees the same dates you do.",
        keyPoints: [
          "Ask for written last day + pay components + benefit end dates",
          "Export payslips, pension overview, and permit PDFs to personal storage",
          "Book basic health insurance if employer collective ends",
          "Run one conservative net-pay / gap month on paper",
          "Tell your landlord or bank only when you have numbers you trust",
          "Silence non-official advice channels for a week if they spike anxiety",
          "Put IND / gemeente tasks on the same calendar as HR — not separate mental drawers",
        ],
      },
      {
        id: "action-documents",
        chip: "Paper",
        title: "Documents people forget until login dies",
        intro:
          "Work laptop = not archive. Treat cloud copies like insurance.",
        whatMattersNext:
          "If HR portals lock early, email yourself PDFs the same day you receive them — boring, decisive.",
        keyPoints: [
          "Signed agreements and variation letters",
          "Bonus / RSU grant confirmations",
          "Lease, childcare contract, and insurance policy numbers",
          "BSN + digid readiness — password reset before stress week",
        ],
        internalLinks: [
          { label: "Document readiness", href: ROUTES.documentReadiness, description: "Structured paperwork pass." },
          { label: "Documents needed for the move", href: ROUTES.documentsNeeded, description: "Broader checklist." },
        ],
      },
      {
        id: "action-support",
        chip: "People",
        title: "Who to loop in (and when)",
        intro:
          "Pay for clarity once if it saves six weeks of drift — especially for stay + tax intersections.",
        whatMattersNext:
          "If you hire help, bring a single folder: contract, last three payslips, permit letter, and your written HR answers.",
        keyPoints: [
          "Employer mobility / HRBP — owner for work letters",
          "IND logged correspondence — for stay questions",
          "**Belastingdienst** / payroll — for income and ruling questions",
          "Immigration lawyer — when routes conflict or timelines are tight",
        ],
        internalLinks: [
          { label: "Move & immigration tools", href: ROUTES.moveTools, description: "Planners and checklists." },
          { label: "Moving checklist", href: ROUTES.movingChecklist, description: "Sequence tasks under pressure." },
        ],
      },
    ],
    pairedToolsEyebrow: "Planners & checklists",
    pairedTools: [
      { label: "Moving checklist", href: ROUTES.movingChecklist, description: "Turn chaos into ordered tasks." },
      { label: "First 90 days planner", href: ROUTES.first90Days, description: "When admin stacks up." },
      { label: "Document readiness", href: ROUTES.documentReadiness, description: "Paper sprint support." },
    ],
  },

  practicalLife: {
    id: "practical-life",
    eyebrow: "Life admin",
    title: "Practical life: housing, health, registration, family",
    subtitle:
      "Where documents and insurance meet a new income story — often before your next job.",
    intro:
      "Three cards: what changes soon, what hurts if ignored, and where to read next. Start with one card that fits your week.",
    firstFocus: {
      title: "How to read this block",
      body: "First weeks — money and logins. Risks — costs that creep up quietly. Next pages — other guides when you are ready.",
      chips: ["Cash & access", "Quiet risks", "Next pages"],
    },
    cards: [
      {
        id: "layoff-immediate",
        label: "What can change immediately",
        priority: "First weeks",
        title: "Income, access, and proofs",
        intro:
          "Pay stop, login cut-off, and landlords asking for recent payslips — pull PDFs early.",
        keyPoints: [
          "Direct debits that assume old income",
          "Health — bridge from employer scheme to mandatory cover without a gap",
          "Housing — renewal or search proof timeline",
          "BSN / address services if you move",
        ],
        links: [
          { label: "Healthcare basics", href: ROUTES.healthcareBasics },
          { label: "Municipality registration guide", href: ROUTES.municipalityRegistration },
          { label: "Rent affordability calculator", href: ROUTES.rentAffordability },
        ],
      },
      {
        id: "layoff-stress",
        label: "What often becomes stressful if ignored",
        priority: "Risk",
        title: "Gaps, family, and timing",
        intro:
          "Short gaps still need a named plan. Kids and partners add clocks HR does not track.",
        keyPoints: [
          "Uninsured weeks — say it out loud and fix it",
          "Daycare / school — notice, deposits, catchment",
          "Partner stay or work — one shared timeline",
          "Tax year quirks when income stops mid-year — verify officially",
        ],
        links: [
          { label: "First 90 days planner", href: ROUTES.first90Days },
          { label: "After arriving in the Netherlands", href: ROUTES.afterArriving },
          { label: "Childcare cost estimator", href: ROUTES.childcare },
        ],
      },
      {
        id: "layoff-handoff",
        label: "Pages & tools to open next",
        priority: "Handoff",
        title: "Continue on ExpatCopilot",
        intro:
          "Match the bottleneck, not the catalog. Stay → Move guides. Cash → Money tools. Rent → Housing. Routine → Living.",
        keyPoints: [
          "Changing jobs / resigning if voluntary exit is also live",
          "Move tools when dates + documents tangle",
          "Work tools for the next offer or contract",
          "Living guides when day-to-day feels shaky",
        ],
        links: [
          { label: "Changing jobs in the Netherlands", href: ROUTES.changingJobs },
          { label: "Resigning a job in the Netherlands", href: ROUTES.resigningJob },
          { label: "Move & immigration tools", href: ROUTES.moveTools },
          { label: "Netherlands survival guide", href: ROUTES.survivalGuide },
        ],
      },
    ],
  },
} satisfies MoveLayoffsSectionsConfig;

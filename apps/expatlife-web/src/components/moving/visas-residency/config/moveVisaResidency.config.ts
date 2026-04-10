import type { PillarFaqItem } from "@expatlife/content";
import type {
  MoveVisaResidencyMisunderstanding,
  MoveVisaResidencyPageMeta,
  MoveVisaResidencyReferences,
  MoveVisaResidencyRelatedTools,
  MoveVisaResidencyRouteCard,
  MoveVisaResidencySection,
  MoveVisaResidencyTip,
} from "./moveVisaResidency.types";

const HUB = "/netherlands/moving-to-the-netherlands/";
const CANONICAL = "/netherlands/moving/visas-residency/";

/** Route selector — “Start here” doorway cards */
export const moveVisaResidencyRouteCards: MoveVisaResidencyRouteCard[] = [
  {
    id: "job",
    visualKey: "job",
    title: "Moving for a job",
    intro: "Your employer often sets the pace. Your contract, home, and payslip need to fit together—not just the permit name.",
    bestFor: "New job, transfer, or employer helping with your permit.",
    chips: ["Work", "Sponsor"],
    nextStep: { ctaLabel: "Work routes", href: "#work-routes" },
  },
  {
    id: "partner",
    visualKey: "partner",
    title: "Partner or family",
    intro: "You’re joining someone who already has a right to be here. The proof you need is different from a work-based move.",
    bestFor: "Partner, spouse, children, or other family routes.",
    chips: ["Partner", "Family"],
    nextStep: { ctaLabel: "Partner & family guide", href: "/netherlands/visa/partner-family-visa/" },
  },
  {
    id: "study",
    visualKey: "study",
    title: "Study",
    intro: "School acceptance, your study permit, insurance, and signing up at the gemeente (town hall)—these steps usually go together.",
    bestFor: "Degree, exchange year, or other study-based stay.",
    chips: ["Study"],
    nextStep: { ctaLabel: "Student route", href: "/netherlands/visa/student-visa/" },
  },
  {
    id: "self",
    visualKey: "self",
    title: "ZZP / entrepreneur",
    intro: "You’ll often show a business plan or proof the business can work. Some people use special treaties (for example DAFT for US citizens).",
    bestFor: "Freelancers, founders, or running your own business.",
    chips: ["ZZP", "Startup"],
    nextStep: { ctaLabel: "Self-employed guide", href: "/netherlands/visa/self-employed-visa/" },
  },
  {
    id: "change",
    visualKey: "change",
    title: "Already in NL",
    intro: "Extending your permit, changing jobs, or changing your reason to stay—dates and rules matter more here.",
    bestFor: "You already live in the Netherlands and need to renew or switch.",
    chips: ["Extend", "Change"],
    nextStep: { ctaLabel: "Extensions & changes guide", href: "/netherlands/moving/extensions-changes/" },
  },
  {
    id: "long",
    visualKey: "longTerm",
    title: "Long-term stay",
    intro: "After many years of legal stay, different rules can apply than for a first permit.",
    bestFor: "You’re thinking about long-term or permanent options.",
    chips: ["Long-term"],
    nextStep: { ctaLabel: "Browse route cards", href: "#start-here" },
  },
];

/** Work, study/family, after-arrival — doorway grid above covers route picking (no duplicate “main routes” block). */
export const moveVisaResidencySections: MoveVisaResidencySection[] = [
  {
    kind: "workRoutes",
    id: "work-routes",
    eyebrow: "Often the busiest path",
    title: "Work-based stays",
    subtitle: "Your job, your contract, and your home address usually need to line up—not only the permit.",
    visualKey: "work",
    keyPoints: [
      "**Who applies for what** (you or your employer) and your **start date** affect travel and housing—not just the permit title.",
      "Problems often come from **address, BSN (citizen number), and pay** if dates or sponsor details are unclear—sort this early with HR.",
      "Ask HR once: **which permit type they expect**, **whether you can work remotely**, and **what they need from you before you book travel**.",
    ],
    pairedToolsEyebrow: "Helpful tools if work is your main reason to move",
    pairedTools: [
      {
        label: "Job offer comparison",
        href: "/netherlands/work/tools/job-offer-comparison/",
        description: "— compare two offers on pay, pension, and leave—not only the headline salary.",
      },
      {
        label: "Employment contract risk scanner",
        href: "/netherlands/work/tools/employment-contract-risk-scanner/",
        description: "— spot important clauses before you sign.",
      },
      {
        label: "Dutch salary (net) calculator",
        href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
        description: "— see what gross salary means in your bank each month.",
      },
      {
        label: "30% ruling calculator",
        href: "/netherlands/taxes/tools/30-ruling-calculator/",
        description: "— rough estimate if the 30% tax rule might apply (planning only).",
      },
      {
        label: "Working in the Netherlands",
        href: "/netherlands/moving/working-in-the-netherlands/",
        description: "— bigger picture on working in the Netherlands once you know your permit type.",
      },
      {
        label: "TWV work permit",
        href: "/netherlands/moving/twv-work-permit/",
        description: "— useful when employer-driven work authorization may be part of the route.",
      },
    ],
  },
  {
    kind: "studyFamily",
    id: "study-family-routes",
    eyebrow: "Study · family · self-employed · changes",
    title: "Not moving mainly for a job?",
    subtitle: "Each path needs different paperwork. Open the guide that matches your situation.",
    blocks: [
      {
        id: "study",
        visualKey: "study",
        chip: "Study",
        title: "Study: acceptance and enrolment",
        intro:
          "Plan **school letters**, **health insurance**, and **signing up at the gemeente** together—don’t only fix housing in a vacuum.",
        nextStep: { ctaLabel: "Student visa", href: "/netherlands/visa/student-visa/" },
      },
      {
        id: "partner",
        visualKey: "partner",
        chip: "Family",
        title: "Partner & dependants",
        intro: "Start from your **sponsor’s permit** and **proof of your relationship**. A work-permit checklist usually won’t fit.",
        nextStep: { ctaLabel: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" },
      },
      {
        id: "self",
        visualKey: "zzp",
        chip: "ZZP",
        title: "Self-employed or business",
        intro:
          "You may need a **business plan** and extra proof. Some people use **special treaties** (DAFT for US citizens). Read the overview pages before focusing on one form.",
        nextStep: { ctaLabel: "Self-employed · DAFT", href: "/netherlands/visa/self-employed-visa/" },
      },
      {
        id: "change",
        visualKey: "change",
        chip: "Change",
        title: "Extend or change your permit",
        intro:
          "**Renewing**, **changing employer**, or **changing your reason to stay** are separate processes. Don’t assume the same rules as your first permit.",
        nextStep: { ctaLabel: "Extensions & changes guide", href: "/netherlands/moving/extensions-changes/" },
      },
    ],
  },
  {
    kind: "afterArrival",
    id: "after-arrival",
    eyebrow: "After the permit",
    title: "After you arrive: register, insure, settle in",
    subtitle: "Sorting your permit is one part. Registering, insuring yourself, and daily life are the rest.",
    intro:
      "Getting a permit is **only part** of moving. After you land, most people still need to **register with the gemeente** (and get a **BSN**), **take out health insurance**, **open a bank account**, and find **a home you’re allowed to register at**—often in an order your town and employer need to support.",
    openNextLabel: "Open next: ",
    openNextLinks: [
      { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
      { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
      { label: "Banking", href: "/netherlands/open-bank-account-netherlands/" },
    ],
    phases: [
      { label: "First days", text: "Have an address you can register, book the gemeente if needed, IDs ready, and rental papers in order." },
      { label: "First weeks", text: "BSN on paper, insurance active, bank account for paying bills, and a simple commute routine." },
    ],
    moreNote: "Use our **documents** and **after you arrive** guides together with this page—see the links below.",
    docLinks: [
      { label: "Documents overview", href: "/netherlands/documents-needed-to-move-netherlands/" },
      { label: "Document readiness", href: "/netherlands/moving/tools/document-readiness/" },
      { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Extensions & changes", href: "/netherlands/moving/extensions-changes/" },
      { label: "EU vs non-EU", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
    ],
    primaryCtas: [
      { label: "Extensions & changes in the Netherlands", href: "/netherlands/moving/extensions-changes/" },
      { label: "First 90 days planner", href: "/netherlands/moving/tools/first-90-days/" },
      { label: "Netherlands Survival Guide", href: "/netherlands/living/survival-guide/" },
      { label: "Rent affordability calculator", href: "/netherlands/housing/tools/rent-affordability-calculator/" },
      { label: "Arrival planner", href: "/netherlands/moving/tools/arrival-planner/" },
    ],
  },
];

export const moveVisaResidencyTips: MoveVisaResidencyTip[] = [
  {
    id: "reassurance",
    visualKey: "default",
    title: "You don’t need every rule memorised today",
    body: "First, get **clear on your situation** (work, study, family, or self-employed). Pick **one official source** you trust for your case. Then take the **next practical step**—papers, a question to your employer, or a gemeente appointment. Save the fine print for when you’re actually doing that step.",
  },
];

export const moveVisaResidencyMisunderstandings: MoveVisaResidencyMisunderstanding[] = [
  {
    id: "visa-word",
    title: "“Visa” is used for everything",
    body: "People say “visa” for many things. You might need **permission to enter**, a **residence permit**, or (if you’re from the EU) **free movement rules**—different offices and timelines.",
  },
  {
    id: "purpose",
    title: "Your reason to stay shapes the paperwork",
    body: "Work, study, and family are **different checklists**, even when you all want the same thing: to live in the Netherlands.",
  },
  {
    id: "not-whole",
    title: "The permit isn’t the whole relocation",
    body: "**Housing, insurance, your bank, and schools** still need planning—do them **alongside** your permit, not only after.",
  },
  {
    id: "sponsor",
    title: "Who sponsors you changes the steps",
    body: "**Your employer’s or family member’s permit type** can matter as much as your own forms.",
  },
  {
    id: "threads",
    title: "Everyone’s situation is different",
    body: "Your **nationality, income, and family** change what applies to you—be careful with one-size-fits-all advice online.",
  },
  {
    id: "approval",
    title: "A ‘yes’ on your permit isn’t the end",
    body: "You still need **town hall registration, your BSN, and your job’s paperwork** on sensible dates—don’t leave that for ‘when I have time’.",
  },
];

export const moveVisaResidencyFaq: PillarFaqItem[] = [
  {
    q: "What is the difference between a visa and a residence permit in practice?",
    a: "In everyday speech people say **visa** for almost everything. What actually matters is: **what you need before you travel**, **what you apply for after you arrive**, and **how long each step takes**. That might be a short visit, a long-stay entry visa, or a **residence permit**—it depends on your plans and your nationality.",
  },
  {
    q: "Which residence route is most common for expats?",
    a: "It depends where you live and who you are. Many people come for **work**, especially in big cities. **EU citizens** often follow simpler rules. **Students** and **families** have their own common paths. Focus on **your** case—not what happened to “most people.”",
  },
  {
    q: "What if I am moving for work?",
    a: "Agree **who applies for the permit**, your **start date**, and whether you have **an address you can register**—ideally before you book flights. When you know the broad permit type, you can use our **work tools** for offers, contracts, and net pay.",
    links: [{ label: "Working in the Netherlands", href: "/netherlands/moving/working-in-the-netherlands/" }],
  },
  {
    q: "What if I am joining my partner or family?",
    a: "Start with **your sponsor’s right to live here** and **proof of your relationship**. A standard work-permit packing list usually won’t match.",
    links: [{ label: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" }],
  },
  {
    q: "What if I want to study?",
    a: "Treat **acceptance at school**, your **study residence permit**, **health insurance**, and **registering with the gemeente** as one timeline—if one part slips, the rest often stall too.",
    links: [{ label: "Student visa", href: "/netherlands/visa/student-visa/" }],
  },
  {
    q: "Can I change status after arriving?",
    a: "Sometimes, yes—but **rules and timing** apply. Treat each change as a **new process**. Don’t assume your second permit works like your first.",
    links: [
      { label: "Extensions & changes guide", href: "/netherlands/moving/extensions-changes/" },
      { label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" },
    ],
  },
  {
    q: "What should I sort out after I arrive?",
    a: "Usually: **register and get your BSN**, **health insurance**, **a bank account**, and **a home you’re allowed to register at**. Then settle daily life—see our **First 90 days planner** and **Survival Guide**.",
    links: [
      { label: "First 90 days planner", href: "/netherlands/moving/tools/first-90-days/" },
      { label: "BSN registration", href: "/netherlands/bsn-registration/" },
    ],
  },
  {
    q: "Is this page legal advice?",
    a: "**No.** This page helps you **get oriented**. For binding rules, use **IND** and other official sites, and talk to a **qualified adviser** if your case is complicated or high-stakes.",
  },
];

export const moveVisaResidencyReferences: MoveVisaResidencyReferences = {
  sectionId: "official-sources",
  sectionTitle: "Official sources & useful references",
  disclaimer:
    "ExpatCopilot is here to help you understand your move—not to replace government advice. If your nationality, income, address, or permit type affects the rules, check official sources or ask a qualified adviser.",
  groups: [
    {
      id: "immigration",
      title: "Immigration & residence",
      links: [
        { type: "external", label: "IND — Immigration and Naturalisation Service →", href: "https://ind.nl/en" },
        { type: "external", label: "Netherlands Worldwide — travel & documents from abroad →", href: "https://www.netherlandsworldwide.nl/" },
      ],
    },
    {
      id: "government",
      title: "Government newcomer information",
      links: [
        { type: "external", label: "Government.nl — immigration topics →", href: "https://www.government.nl/topics/immigration/" },
        { type: "external", label: "Dutch government (English) →", href: "https://www.rijksoverheid.nl/en" },
      ],
    },
    {
      id: "municipality",
      title: "Municipality registration",
      links: [
        { type: "internal", label: "Municipality registration guide (ExpatCopilot) →", href: "/netherlands/municipality-registration-netherlands/" },
        { type: "internal", label: "BSN registration →", href: "/netherlands/bsn-registration/" },
      ],
    },
    {
      id: "health",
      title: "Also useful",
      links: [
        { type: "external", label: "Government.nl — health insurance →", href: "https://www.government.nl/topics/health-insurance" },
        { type: "internal", label: "Health insurance guide (ExpatCopilot) →", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
  ],
};

export const moveVisaResidencyRelatedTools: MoveVisaResidencyRelatedTools = {
  journeyIntro:
    "**First your permit, then money and work, then settling in.** Use the sections below in that order so your paperwork and daily life stay in step.",
  sections: [
    {
      eyebrow: "Move & immigration",
      description: "Lists and planners once you know roughly which path you’re on.",
      items: [
        { title: "Moving pillar hub", description: "The main Moving guide: stages, scenarios, and tools.", href: HUB },
        {
          title: "Residence permits in the Netherlands",
          description: "Permit logic: purpose, renewal, and what comes after approval.",
          href: "/netherlands/moving/residence-permits/",
        },
        {
          title: "Extensions & changes in the Netherlands",
          description: "After arrival: expiries, renewals, job and life shifts—practical orientation.",
          href: "/netherlands/moving/extensions-changes/",
        },
        {
          title: "Status changes in the Netherlands",
          description: "Route-shift guide when the basis of your stay itself may be changing.",
          href: "/netherlands/moving/status-changes/",
        },
        {
          title: "Move & immigration tools",
          description: "All Move tools: checklist, readiness, first 90 days, arrival.",
          href: "/netherlands/moving/tools/",
        },
        {
          title: "Document readiness",
          description: "What to gather for your origin and situation.",
          href: "/netherlands/moving/tools/document-readiness/",
        },
        {
          title: "First 90 days planner",
          description: "Week-by-week after landing.",
          href: "/netherlands/moving/tools/first-90-days/",
        },
      ],
    },
    {
      eyebrow: "Work & pay",
      description: "When your job is the main reason you’re moving.",
      items: [
        {
          title: "Job offer comparison",
          description: "Two offers: cash, pension, leave—not just gross.",
          href: "/netherlands/work/tools/job-offer-comparison/",
        },
        {
          title: "Employment contract risk scanner",
          description: "Clause checks before you sign.",
          href: "/netherlands/work/tools/employment-contract-risk-scanner/",
        },
        {
          title: "Dutch salary (net) calculator",
          description: "Gross to net for realistic take-home.",
          href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
        },
        {
          title: "30% ruling calculator",
          description: "Rough check if the 30% ruling might apply (planning only).",
          href: "/netherlands/taxes/tools/30-ruling-calculator/",
        },
      ],
    },
    {
      eyebrow: "Money & household",
      description: "Budgeting and family-related costs next to rent.",
      items: [
        {
          title: "Cost of living calculator",
          description: "Rough costs by city and household size.",
          href: "/netherlands/money/tools/cost-of-living-calculator/",
        },
        {
          title: "Healthcare allowance estimator",
          description: "Estimate the healthcare allowance (toeslag) from income and rent.",
          href: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
        },
        {
          title: "Childcare cost estimator",
          description: "Family moves: daycare vs timing.",
          href: "/netherlands/family/tools/childcare-cost-estimator/",
        },
      ],
    },
  ],
};

export const moveVisaResidencyPageMeta: MoveVisaResidencyPageMeta = {
  canonicalPath: CANONICAL,
  movePillarHubPath: HUB,
  hero: {
    eyebrow: "Netherlands · Moving",
    pageTitle: "Visas & Residency in the Netherlands",
    subtitle:
      "Find your situation, see how the main Dutch routes differ, and open the guides and tools that fit—without studying immigration law first.",
    bullets: [
      "See which path fits you: work, study, family, self-employed, or changing your permit",
      "Learn what usually comes next after the permit: register, get insurance, get paid",
      "Go to the next page or tool when you’re ready—one step at a time",
    ],
    primaryCta: { label: "Start with your likely route", href: "#start-here" },
    secondaryCta: { label: "See the common pathways", href: "#start-here" },
    compareLinks: {
      compareVisas: { label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" },
      visaChecker: { label: "Visa checker", href: "/netherlands/visa-checker/" },
    },
  },
  atAGlance: {
    sectionTitle: "At a glance",
    subtitle: "Four quick answers—then how to use this page without stress.",
    cells: [
      {
        title: "What this page is for",
        body: "A **simple overview** of how Dutch stay routes differ—before you dive into long forms or forums.",
      },
      {
        title: "Best for",
        body: "Anyone who wants the **big picture first** and the details when they need them.",
      },
      {
        title: "What it covers",
        body: "The main route types, what happens after you arrive, and **links** to our guides and tools.",
      },
      {
        title: "What it skips",
        body: "Court cases, personal eligibility decisions, and **filling in every box** for you—use **IND** and professionals for that.",
      },
    ],
    note: "Rules depend on **nationality, income, family, and timing**. Use this page to get your bearings; for anything decisive, check **official sources** or ask a **qualified adviser**.",
  },
  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#start-here", label: "Start here" },
    { href: "#work-routes", label: "Work routes" },
    { href: "#study-family-routes", label: "Study & family routes" },
    { href: "#after-arrival", label: "After arrival" },
    { href: "#misunderstandings", label: "Common misunderstandings" },
    { href: "#what-next", label: "What to do next" },
    { href: "#helpful-tools", label: "Helpful tools" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ],
  deepLinks: [
    {
      href: HUB,
      label: "Moving to the Netherlands (pillar)",
      description: "Full timeline, scenarios, and tools when you’re ready to see the whole Moving section—not only visas.",
    },
    {
      href: "/netherlands/moving/residence-permits/",
      label: "Residence permits in the Netherlands",
      description: "How permits connect to purpose, renewal, work, study, family, and life after approval.",
    },
    {
      href: "/netherlands/moving/working-in-the-netherlands/",
      label: "Working in the Netherlands",
      description: "Work-led move guide for offers, salary, permits, payroll, and first-month setup.",
    },
    {
      href: "/netherlands/moving/twv-work-permit/",
      label: "TWV work permit",
      description: "Practical route guide for TWV, GVVA comparisons, and employer timing questions.",
    },
    {
      href: "/netherlands/moving/extensions-changes/",
      label: "Extensions & changes in the Netherlands",
      description: "Renewals, job changes, study and family shifts—when to notice and what to open next.",
    },
    {
      href: "/netherlands/moving/status-changes/",
      label: "Status changes in the Netherlands",
      description: "When the basis of your stay may be shifting across work, study, family, or self-employment.",
    },
    {
      href: "/netherlands/moving/tools/",
      label: "Move & immigration tools",
      description: "Checklists, document readiness, first 90 days, and arrival planners in one hub.",
    },
    {
      href: "/netherlands/visa/compare-visas/",
      label: "Compare visa routes",
      description: "Compare common permit types side by side when you want more detail than this page.",
    },
    {
      href: "/netherlands/work/tools/",
      label: "Work tools",
      description: "Compare offers, read contracts, and decode payslips once a work-based stay looks likely.",
    },
  ],
  progressionSteps: [
    {
      id: "route",
      label: "Name your likely route",
      href: "#start-here",
      description: "Skim the cards above so you know which guide matches your situation.",
    },
    {
      id: "official",
      label: "Confirm with official guidance",
      href: "#official-sources",
      description: "Use IND and government sources—or an adviser—for anything that decides your stay.",
    },
    {
      id: "docs",
      label: "Gather documents & timing",
      href: "/netherlands/moving/tools/document-readiness/",
      description: "Gather papers in line with your permit steps once you know your direction.",
    },
    {
      id: "tools",
      label: "Open the right ExpatCopilot tools",
      href: "#helpful-tools",
      description: "Salary, contract, and cost tools sit next to your move plan when you need numbers.",
    },
    {
      id: "local",
      label: "Plan local setup in parallel",
      href: "#after-arrival",
      description: "Registration, insurance, housing, and banking are the second half of the relocation story.",
    },
  ],
  continueMove: {
    eyebrow: "Stay in the Move pillar",
    title: "Continue your move plan",
    subtitle: "Same flow as the main Moving page: start with the hub, then open deeper guides when you need them.",
    cards: [
      {
        id: "pillar",
        title: "Moving to the Netherlands",
        description: "Scenarios, stages, tools, and FAQs for the whole move.",
        href: HUB,
        ctaLabel: "Open pillar",
      },
      {
        id: "working",
        title: "Working in the Netherlands",
        description: "Move-focused bridge from visa route questions into offers, salary, permits, payroll, and arrival admin.",
        href: "/netherlands/moving/working-in-the-netherlands/",
        ctaLabel: "Open guide",
      },
      {
        id: "twv",
        title: "TWV work permit",
        description: "Useful when the work route may depend on employer-driven authorization rather than a simpler setup.",
        href: "/netherlands/moving/twv-work-permit/",
        ctaLabel: "Open guide",
      },
      {
        id: "first-90",
        title: "First 90 days guide",
        description: "Read alongside your first weeks in the country.",
        href: "/netherlands/first-90-days-netherlands/",
        ctaLabel: "Read guide",
      },
      {
        id: "documents",
        title: "Documents needed to move",
        description: "Which documents matter for your situation.",
        href: "/netherlands/documents-needed-to-move-netherlands/",
        ctaLabel: "Read guide",
      },
      {
        id: "eu-noneu",
        title: "EU vs non-EU moving",
        description: "How EU and non-EU moves differ in simple terms.",
        href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/",
        ctaLabel: "Read guide",
      },
      {
        id: "status",
        title: "Status changes in the Netherlands",
        description: "When your basis of stay may be changing, not only your permit timing.",
        href: "/netherlands/moving/status-changes/",
        ctaLabel: "Open guide",
      },
    ],
  },
  toolsRegion: {
    id: "helpful-tools",
    title: "Helpful tools & related guides",
    subtitle:
      "Start with your permit, then use Move checklists, work and money calculators, and everyday-life guides—the same order as our other Moving pages.",
  },
  misunderstandingsRegion: {
    eyebrow: "Reality check",
    title: "What people often misunderstand",
    subtitle: "Six plain reminders for when everything sounds confusing.",
  },
  whatNextRegion: {
    eyebrow: "How to use this page",
    title: "What to do next",
    subtitle: "First get your bearings, then check official rules, then take action.",
  },
  startHereRegion: {
    id: "start-here",
    eyebrow: "Find your path",
    title: "Start here: which route sounds like you?",
    subtitle: "Tap one card—then scroll to the matching section or guide. You can change your mind.",
  },
};


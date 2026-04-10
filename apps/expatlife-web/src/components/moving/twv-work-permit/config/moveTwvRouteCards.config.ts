import type { MoveTwvComparisonSections, MoveTwvRouteCard } from "./moveTwvWorkPermit.types";
import { moveTwvWorkPermitRoutes } from "./moveTwvWorkPermit.shared";

const ROUTES = moveTwvWorkPermitRoutes;

export const moveTwvRouteCards: MoveTwvRouteCard[] = [
  {
    id: "twv-setup",
    iconKey: "authorization",
    visualKey: "twv",
    title: "TWV is about work authorization in a specific setup",
    intro: "TWV usually matters on the **employment authorization side** of a Dutch work situation, not as a generic label for every residence route.",
    whoItAppliesTo: "People hearing “work permit” and trying to work out which Dutch structure that actually means.",
    keyPoints: [
      "TWV shows up in **specific non-EU employment situations**, not automatically in every non-EU case",
      "The phrase “work permit” can hide very different Dutch route structures",
      "Ask whether the setup is really **TWV, GVVA, permit wording, or free work**",
      "The route matters because timing, employer action, and later changes can all differ",
    ],
    whatMattersNext: "Name the route first, then worry about paperwork.",
  },
  {
    id: "employer-role",
    iconKey: "employer",
    visualKey: "employer",
    title: "Employer involvement usually matters a lot",
    intro: "In TWV-relevant situations, the employer side is often what makes the route practical, delayed, or uncertain.",
    whoItAppliesTo: "People already speaking with an employer, HR team, or recruiter.",
    keyPoints: [
      "Employer readiness can affect **timing, certainty, and relocation planning**",
      "“HR will handle it” is usually not enough detail on its own",
      "It is worth clarifying **who owns which step**, and what cannot happen until authorization is clear",
      "A vague employer answer can still leave the move timeline fragile",
    ],
    whatMattersNext: "Ask early what depends on the employer and what is still unconfirmed.",
  },
  {
    id: "wider-picture",
    iconKey: "route",
    visualKey: "route",
    title: "TWV is only one part of the wider work/residence picture",
    intro: "Even when TWV is relevant, it still sits inside a bigger decision about **work, residence, contract timing, salary, and the move itself**.",
    whoItAppliesTo: "People who want to keep permit context connected to the actual relocation decision.",
    keyPoints: [
      "TWV questions often sit next to **contract timing, start date, housing, and relocation certainty**",
      "Some work routes are handled differently through **GVVA, permit wording, or free labor market rights**",
      "A useful next step is usually a sibling Move page or tool, not more permit jargon",
      "The goal is route clarity first, not bureaucracy overload",
    ],
    whatMattersNext: "Use this page to decide which work, permit, or move-planning page should come next.",
  },
];

export const moveTwvComparisonSections: MoveTwvComparisonSections = {
  comparison: {
    id: "twv-vs-other-routes",
    eyebrow: "Route comparison",
    title: "TWV vs GVVA vs residence-permit-only situations",
    subtitle:
      "Dutch work authorization is **not one single route**. Some situations use a TWV, some use a combined route like GVVA, and some depend on permit wording that already allows work or says TWV is not required.",
    intro:
      "Stay high-level here on purpose. The useful question is not “which acronym have I heard before?” but **which structure roughly matches my situation, and what do I need to verify next**.",
    firstFocus: {
      title: "Compare structure before procedure",
      body: "Start by asking **what kind of work/residence setup this is**, who usually acts first, and what wording or route category actually decides the answer.",
      chips: ["TWV", "GVVA", "Permit wording", "Free work"],
    },
    pairedToolsEyebrow: "Open these next when the route is still unclear",
    pairedTools: [
      {
        label: "Visas & residency orientation",
        href: ROUTES.visas,
        description: "See the broader work, study, family, and self-employment route map.",
      },
      {
        label: "Residence permits",
        href: ROUTES.residencePermits,
        description: "Check how permit wording and purpose affect the practical answer.",
      },
      {
        label: "Compare visa routes",
        href: ROUTES.compareVisas,
        description: "Useful when you want a second route-level comparison beside this page.",
      },
    ],
    blocks: [
      {
        id: "route-twv",
        chip: "TWV",
        visualKey: "twv",
        title: "TWV route",
        intro: "A TWV is a **work-authorization route detail** that can matter in specific employer-driven employment situations.",
        whoItAppliesTo: "Look deeper if employed work may still need separate work authorization.",
        keyPoints: [
          "Think of TWV as a **work authorization route detail**, not a universal residence answer",
          "Employer action often matters heavily",
          "It can appear where salaried work rights are not simply “free” by default",
        ],
        whatMattersNext: "Confirm that TWV is really the structure in play before assuming it applies.",
        internalLinks: [
          { label: "Working in the Netherlands", href: ROUTES.workingPage },
          { label: "Job offer comparison", href: ROUTES.jobOffer },
        ],
      },
      {
        id: "route-gvva",
        chip: "GVVA",
        visualKey: "gvva",
        title: "GVVA / combined route",
        intro: "Some situations are handled through a **combined work-and-residence route** instead of treating work authorization separately.",
        whoItAppliesTo: "Look deeper if your case seems to combine residence and work approval in one route.",
        keyPoints: [
          "This is not the same setup as a stand-alone TWV conversation",
          "Employer and employee should know which route label is actually relevant",
          "The right next page is usually route orientation, not a TWV-only explainer",
        ],
        whatMattersNext: "Use visas and residence pages when the answer sounds more like a combined route than separate TWV logic.",
        internalLinks: [
          { label: "Visas & residency", href: ROUTES.visas },
          { label: "Residence permits", href: ROUTES.residencePermits },
        ],
      },
      {
        id: "route-permit-only",
        chip: "Permit wording",
        visualKey: "permitOnly",
        title: "Residence permit only / no-TWV route",
        intro: "Some permits already tell you whether work is allowed, restricted, or TWV is not required.",
        whoItAppliesTo: "Look deeper if the answer depends on the wording attached to the residence basis.",
        keyPoints: [
          "Permit wording can matter more than general assumptions about nationality or job type",
          "The residence basis itself may already answer the work question",
          "This is why route and permit context should stay together",
        ],
        whatMattersNext: "Read the permit wording or permit-category guidance rather than relying on hearsay.",
        internalLinks: [
          { label: "Residence permits", href: ROUTES.residencePermits },
          { label: "Status changes", href: ROUTES.statusChanges },
        ],
      },
      {
        id: "route-free-work",
        chip: "Free work",
        visualKey: "freeWork",
        title: "Free labor market / no-TWV situations",
        intro: "Some people can work freely and do not need a TWV because their route or status already allows it.",
        whoItAppliesTo: "Look deeper if the person may already have free labor-market access or free-movement rights.",
        keyPoints: [
          "EU/EEA and Swiss situations are usually different from non-EU permit questions",
          "Some permit holders can work freely if the wording says so",
          "Assumptions based only on “foreign worker” language are often too broad",
        ],
        whatMattersNext: "Check status and permit wording before spending time on TWV questions that may not apply.",
        internalLinks: [
          { label: "Visas & residency", href: ROUTES.visas },
          { label: "Working in the Netherlands", href: ROUTES.workingPage },
        ],
      },
    ],
  },
  matters: {
    id: "when-twv-matters",
    eyebrow: "When TWV matters",
    title: "When a TWV commonly matters",
    subtitle:
      "TWV usually becomes relevant in **specific employer-driven non-EU employment situations**. The category matters more than a simple “I’m non-EU” assumption.",
    intro:
      "Stay practical here: the goal is not to classify your case conclusively, but to help you recognise when TWV questions are realistic enough that you should clarify them early.",
    firstFocus: {
      title: "Look for category, not only nationality",
      body: "A better question than “am I non-EU?” is **what type of work situation this is, what residence basis exists, and whether employed work still depends on employer-led authorization**.",
      chips: ["Employer-driven", "Student work", "Specific categories", "Temporary setups"],
    },
    pairedToolsEyebrow: "Useful next pages when TWV might matter",
    pairedTools: [
      {
        label: "Working in the Netherlands",
        href: ROUTES.workingPage,
        description: "Connect work authorization questions to the offer, salary, payroll, and move package.",
      },
      {
        label: "Job offer comparison",
        href: ROUTES.jobOffer,
        description: "Useful if permit certainty changes whether an offer is really workable.",
      },
      {
        label: "Employment contract risk scanner",
        href: ROUTES.contractScanner,
        description: "Helpful when timing or employer promises need to be tested against the contract.",
      },
    ],
    blocks: [
      {
        id: "matters-employer-hire",
        chip: "Employer hire",
        visualKey: "employer",
        title: "Employer wants to hire someone in a TWV-relevant category",
        intro: "This is the classic case where employer action becomes central.",
        whoItAppliesTo: "Best when the job is real and the employer is already asking work-authorization questions.",
        keyPoints: [
          "The employer may need to identify early whether TWV is the route they are dealing with",
          "Start-date certainty can depend on the right route being identified, not only goodwill from HR",
          "Employees should ask what the employer has actually confirmed rather than assume it is routine",
        ],
        whatMattersNext: "Clarify what the employer thinks the route is, and whether that has actually been confirmed.",
        internalLinks: [
          { label: "Job offer comparison", href: ROUTES.jobOffer },
          { label: "Employment contract risk scanner", href: ROUTES.contractScanner },
        ],
      },
      {
        id: "matters-student",
        chip: "Student work",
        visualKey: "student",
        title: "Student work or limited-work situations",
        intro: "Some study-related work situations involve TWV-based limits or special rules rather than broad free work.",
        whoItAppliesTo: "Best when work rights depend on study status, limited hours, or a specific work pattern.",
        keyPoints: [
          "Student-related employment is not the same as standard full labor-market access",
          "Work limits, employer action, and route wording may matter more than people expect",
          "The wrong assumption here can create problems for both employer and student",
        ],
        whatMattersNext: "Check the study route and work-rights structure together, not as separate topics.",
        internalLinks: [
          { label: "Visas & residency", href: ROUTES.visas },
          { label: "Residence permits", href: ROUTES.residencePermits },
        ],
      },
      {
        id: "matters-residence-basis",
        chip: "Residence basis",
        visualKey: "permitOnly",
        title: "Work attached to a residence basis that still needs TWV for employed work",
        intro: "Some residence situations still leave employed work dependent on separate authorization or restrictions.",
        whoItAppliesTo: "Best when someone already has residence but is not sure whether employed work is freely allowed.",
        keyPoints: [
          "Existing residence does not automatically mean unrestricted salaried work",
          "Permit wording or category can matter more than assumptions from friends or recruiters",
          "This becomes important quickly when a new job offer appears",
        ],
        whatMattersNext: "Read the permit wording and route guidance before assuming existing residence solves the work question.",
        internalLinks: [
          { label: "Residence permits", href: ROUTES.residencePermits },
          { label: "Working in the Netherlands", href: ROUTES.workingPage },
        ],
      },
      {
        id: "matters-temporary",
        chip: "Specific setup",
        visualKey: "timing",
        title: "Temporary or specific employment situations where TWV may arise",
        intro: "Some narrower or time-bound situations can bring TWV back into the conversation even when people expect a simpler answer.",
        whoItAppliesTo: "Best when the work arrangement is unusual, temporary, or not a standard long-term employer move.",
        keyPoints: [
          "Short-term or special-category work can be structured differently from the routes people talk about most often",
          "Identify the category first, then ask what employer action is expected",
          "A quick answer from a recruiter is not always enough when the setup is non-standard",
        ],
        whatMattersNext: "Treat unusual work structures as route questions first, not as assumptions to tidy up later.",
        internalLinks: [
          { label: "Visas & residency", href: ROUTES.visas },
          { label: "Job offer comparison", href: ROUTES.jobOffer },
        ],
      },
    ],
  },
  notApply: {
    id: "when-it-may-not",
    eyebrow: "When TWV often does not apply",
    title: "When a TWV often does not apply or the setup is different",
    subtitle:
      "TWV is easy to over-assume. Many people are actually dealing with **free movement, permit wording that already allows work, GVVA, or a self-employed structure that should not be treated like standard salaried employment**.",
    intro:
      "A good outcome of this section is simple: **I probably should not default to TWV language here.** That alone can save a lot of confusion in employer and adviser conversations.",
    firstFocus: {
      title: "Check rights, not assumptions",
      body: "The fastest reality check is usually **free movement, permit wording, or route structure**. Those tell you more than the phrase “work permit” on its own.",
      chips: ["Free movement", "Permit says work is free", "GVVA", "Self-employed"],
    },
    pairedToolsEyebrow: "Open these next when TWV may not be the right frame",
    pairedTools: [
      {
        label: "Residence permits",
        href: ROUTES.residencePermits,
        description: "Useful when the answer depends on permit wording or permit category.",
      },
      {
        label: "Compare visa routes",
        href: ROUTES.compareVisas,
        description: "Useful when a combined or alternative route may fit better than TWV language.",
      },
      {
        label: "Self-employed visa",
        href: ROUTES.selfEmployed,
        description: "Helpful when salaried work and independent work should not be mixed together.",
      },
    ],
    blocks: [
      {
        id: "no-twv-free-movement",
        chip: "Free movement",
        visualKey: "freeWork",
        title: "EU/EEA or Swiss free labor market situations",
        intro: "These situations are generally different from non-EU work-authorization questions.",
        whoItAppliesTo: "Best when someone is asking about TWV but may actually have free-movement rights.",
        keyPoints: [
          "Free movement changes the whole framing of the question",
          "The employer conversation is different when TWV is not the route at all",
          "Using TWV language here can create unnecessary confusion",
        ],
        whatMattersNext: "First confirm whether the person is even in a category where TWV belongs in the conversation.",
        internalLinks: [{ label: "Working in the Netherlands", href: ROUTES.workingPage }],
      },
      {
        id: "no-twv-permit-wording",
        chip: "Permit wording",
        visualKey: "permitOnly",
        title: "Permits that allow work freely",
        intro: "Some residence permits explicitly say work is allowed and TWV is not required.",
        whoItAppliesTo: "Best when someone already has residence and needs to know what the permit actually says.",
        keyPoints: [
          "The wording attached to the permit can matter more than general online summaries",
          "A permit that says work is free is very different from one that still depends on employer action",
          "Checking the wording early can save unnecessary alarm",
        ],
        whatMattersNext: "Read the permit wording and permit-category guidance before assuming TWV still matters.",
        internalLinks: [
          { label: "Residence permits", href: ROUTES.residencePermits },
          { label: "Status changes", href: ROUTES.statusChanges },
        ],
      },
      {
        id: "no-twv-gvva",
        chip: "Combined route",
        visualKey: "gvva",
        title: "GVVA or other combined-route situations",
        intro: "Some work-and-residence cases are better understood as a combined route rather than a TWV-only route.",
        whoItAppliesTo: "Best when the route seems to combine work and residence approval rather than separate them.",
        keyPoints: [
          "The paperwork logic and timing can differ from a stand-alone TWV story",
          "Employer and employee should know which route label actually applies",
          "Route-comparison pages often help more than permit jargon here",
        ],
        whatMattersNext: "Use the route pages when the answer sounds more like combined authorization than separate TWV logic.",
        internalLinks: [
          { label: "Visas & residency", href: ROUTES.visas },
          { label: "Residence permits", href: ROUTES.residencePermits },
        ],
      },
      {
        id: "no-twv-self-employed",
        chip: "Self-employed",
        visualKey: "selfEmployed",
        title: "Self-employed situations that differ from salaried employment",
        intro: "Independent work should not be treated as if it automatically follows the same logic as employer-based salaried work.",
        whoItAppliesTo: "Best when freelance, ZZP, or self-employed language is getting mixed with salaried-work assumptions.",
        keyPoints: [
          "Self-employed permission and employed work rights are not the same thing",
          "Someone may be allowed to work independently while employed work still raises different questions",
          "This is another reason route wording matters more than casual labels",
        ],
        whatMattersNext: "Separate salaried and self-employed scenarios before deciding what route to research next.",
        internalLinks: [
          { label: "Visas & residency", href: ROUTES.visas },
          { label: "Self-employed visa", href: ROUTES.selfEmployed },
        ],
      },
    ],
  },
  roles: {
    id: "employer-employee-roles",
    eyebrow: "Employer & employee roles",
    title: "Employer role, employee role, and what to clarify early",
    subtitle:
      "In TWV situations, **employer understanding, timing, and ownership** often matter as much as the worker’s documents. Employees still need to understand the impact on certainty, contract timing, and relocation planning.",
    intro:
      "This is often where confusion becomes expensive. A vague answer like “it should be fine” can still leave the move timeline fragile if nobody is clear on route, timing, or ownership.",
    firstFocus: {
      title: "Clarify ownership early",
      body: "The most useful early questions are usually **who owns what, what is already confirmed, what depends on timing, and which parts of the relocation should wait until certainty improves**.",
      chips: ["Employer owns", "Employee should ask", "Contract timing", "Relocation timing"],
    },
    pairedToolsEyebrow: "Use these next when employer action is central",
    pairedTools: [
      {
        label: "Job offer comparison",
        href: ROUTES.jobOffer,
        description: "Compare how permit certainty changes the real value of an offer.",
      },
      {
        label: "Employment contract risk scanner",
        href: ROUTES.contractScanner,
        description: "Useful when contract timing, probation, or vague support language feels risky.",
      },
      {
        label: "Working in the Netherlands",
        href: ROUTES.workingPage,
        description: "Connect TWV questions to salary, payroll, admin, and move planning.",
      },
      {
        label: "Visas & residency orientation",
        href: ROUTES.visas,
        description: "Go broader if the route itself is still unclear.",
      },
    ],
    blocks: [
      {
        id: "roles-employer",
        chip: "Employer",
        visualKey: "employer",
        title: "What the employer usually needs to own",
        intro: "In TWV-relevant cases, the employer side is often where practical momentum or delay begins.",
        whoItAppliesTo: "Best when you need to know whether the employer really understands the route they are naming.",
        keyPoints: [
          "The employer often needs clarity on the route, the timing, and what cannot start before authorization is in place",
          "A company’s international-hiring experience can change how smooth this feels in practice",
          "Vague recruiter language is not route confirmation",
        ],
        whatMattersNext: "Ask what the employer has actually confirmed, not what they expect will probably work.",
        internalLinks: [
          { label: "Job offer comparison", href: ROUTES.jobOffer },
          { label: "Working in the Netherlands", href: ROUTES.workingPage },
        ],
      },
      {
        id: "roles-employee",
        chip: "Employee",
        visualKey: "employee",
        title: "What the employee should clarify early",
        intro: "Employees still need a clear picture of what the route means for their own timing and risk.",
        whoItAppliesTo: "Best when you are the worker and want to avoid planning around assumptions.",
        keyPoints: [
          "Ask whether the route is really TWV, and whether anyone has confirmed that with the right source",
          "Clarify what depends on employer action, and what documents or dates you still need to supply",
          "Understand how uncertainty affects your move timing, not only your first workday",
        ],
        whatMattersNext: "Use early questions to reduce uncertainty before the move becomes financially committed.",
        internalLinks: [
          { label: "Employment contract risk scanner", href: ROUTES.contractScanner },
          { label: "Working in the Netherlands", href: ROUTES.workingPage },
        ],
      },
      {
        id: "roles-contract",
        chip: "Contract",
        visualKey: "timing",
        title: "Why contract timing matters",
        intro: "The practical value of an offer changes quickly if work-authorization timing is still uncertain.",
        whoItAppliesTo: "Best when signing, start dates, or probation timing feel out of sync with route certainty.",
        keyPoints: [
          "A contract may look fine on paper while the work-authorization path still feels unconfirmed",
          "Start dates, relocation dates, and employer promises should line up realistically",
          "This is why you compare the move package, not just the salary line",
        ],
        whatMattersNext: "Pressure-test the offer against timing risk before the relocation becomes costly.",
        internalLinks: [
          { label: "Job offer comparison", href: ROUTES.jobOffer },
          { label: "Dutch salary net calculator", href: ROUTES.salaryNet },
        ],
      },
      {
        id: "roles-hr-questions",
        chip: "HR questions",
        visualKey: "route",
        title: "What to ask HR or the employer",
        intro: "Short, direct questions early are usually more useful than vague reassurance.",
        whoItAppliesTo: "Best when you want a practical conversation script rather than more terminology.",
        keyPoints: [
          "Which route do you believe applies here, and who confirmed it?",
          "What depends on employer action, and what timing should I plan around?",
          "At what point is it realistic to treat the start date and move date as firm?",
        ],
        whatMattersNext: "Use clear questions to surface whether the route is truly understood or still assumed.",
        internalLinks: [
          { label: "Employment contract risk scanner", href: ROUTES.contractScanner },
          { label: "Visas & residency", href: ROUTES.visas },
        ],
      },
    ],
  },
  timing: {
    id: "timing-changes",
    eyebrow: "Timing & changes",
    title: "Timing, renewal, and changes in work situation",
    subtitle:
      "Work authorization timing matters **before it feels urgent**. Changes in job, employer, or work conditions can matter later too, especially once you are already in the Netherlands.",
    intro:
      "A calmer way to think about this is simple: what matters **before work starts**, what matters **if the work situation changes later**, and what matters **if continuity starts feeling tight**.",
    firstFocus: {
      title: "Watch continuity, not only approval",
      body: "A useful question is not only “can this start?” but also **what happens if dates slip, the role changes, or the work basis shifts later**.",
      chips: ["Before starting", "If work changes", "If timing gets tight"],
    },
    blocks: [
      {
        id: "timing-before-start",
        label: "Before starting work",
        visualKey: "timing",
        title: "Do not let the move run ahead of authorization certainty",
        intro: "The earliest stress usually comes from treating a likely route as if it were already firm.",
        whoItAppliesTo: "Best when you are planning around a start date or relocation calendar.",
        priority: "Protect the timeline",
        keyPoints: [
          "Do not treat vague employer confidence as the same as route clarity",
          "Housing, flights, notice periods, and move commitments feel different once timing becomes uncertain",
          "A little realism early can prevent expensive last-minute pressure later",
        ],
        whatMattersNext: "Sequence relocation decisions around what is confirmed, not just what is hoped for.",
        internalLinks: [
          { label: "Working in the Netherlands", href: ROUTES.workingPage },
          { label: "Arrival planner", href: ROUTES.arrivalPlanner },
        ],
      },
      {
        id: "timing-job-change",
        label: "If work changes later",
        visualKey: "change",
        title: "Changing employer, role, or conditions can create new questions",
        intro: "A later work change can affect the route picture even if the original setup felt settled.",
        whoItAppliesTo: "Best when you are already in the Netherlands and the work situation may change.",
        priority: "Protect continuity",
        keyPoints: [
          "A new employer or different work structure may not fit the old assumptions automatically",
          "Job-change planning should sit next to permit continuity, not apart from it",
          "The practical question is what needs re-checking before the change becomes real",
        ],
        whatMattersNext: "Treat a work change as a new route question if the structure behind the authorization may also change.",
        internalLinks: [
          { label: "Extensions & changes", href: ROUTES.extensions },
          { label: "Status changes", href: ROUTES.statusChanges },
        ],
      },
      {
        id: "timing-expiry",
        label: "If timing is getting tight",
        visualKey: "timing",
        title: "Expiry, continuity, and late action create avoidable stress",
        intro: "People often notice timing only once it already feels urgent.",
        whoItAppliesTo: "Best when a permit, work authorization, or job timeline is close to a deadline or transition.",
        priority: "Act before pressure spikes",
        keyPoints: [
          "Continuity matters as much as the initial yes/no question",
          "Late clarification can create pressure on work, payroll, or relocation decisions",
          "Keeping sibling Move guides nearby helps when one issue turns into a broader change",
        ],
        whatMattersNext: "Use earlier check-ins so timing problems do not become emergency decisions.",
        internalLinks: [
          { label: "Residence permits", href: ROUTES.residencePermits },
          { label: "First 90 days planner", href: ROUTES.first90Days },
        ],
      },
    ],
  },
};

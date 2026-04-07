import type { LinkRegistry, NlFlagshipPillarContent } from "./types";

const linkRegistry: LinkRegistry = {
  work_tools: { href: "/netherlands/work/tools/", title: "Work tools hub" },
  compare_visas: { href: "/netherlands/visa/compare-visas/", title: "Compare visa routes" },
  visa_checker: { href: "/netherlands/visa-checker/", title: "Visa checker" },
  hsm: { href: "/netherlands/visa/highly-skilled-migrant/", title: "Highly skilled migrant visa" },
  eu_blue: { href: "/netherlands/visa/eu-blue-card/", title: "EU Blue Card" },
  services_banks: { href: "/netherlands/services/banks/", title: "Banks directory" },
  bsn: { href: "/netherlands/bsn-registration/", title: "BSN registration" },
  moving_pillar: { href: "/netherlands/moving-to-the-netherlands/", title: "Moving to the Netherlands" },
  document_readiness: { href: "/netherlands/document-readiness-checker/", title: "Document readiness checker" },
};

export const nlWorkFlagshipContent: NlFlagshipPillarContent = {
  meta: {
    breadcrumbs: [
      { label: "Netherlands", href: "/netherlands" },
      { label: "Work", href: "/netherlands/work/working-in-netherlands" },
    ],
    canonicalPath: "/netherlands/work/working-in-netherlands/",
    lastUpdated: new Date().toISOString().slice(0, 10),
    seo: {
      title: "Working in the Netherlands: visas, contracts, and payroll basics",
      description:
        "Orient yourself on Dutch work permits, highly skilled routes, payroll and BSN dependencies, and where to compare visa options before you sign.",
    },
  },
  stagesTitle: "Your work move in 3 stages",
  scenarios: [
    {
      id: "work-offer",
      chips: ["job_offer"],
      personaTitle: "Signed or negotiated Dutch job offer",
      whatMatters: ["Sponsor vs self routes", "Start date vs permit timing", "30% ruling question"],
      readingOrder: ["hsm", "compare_visas", "document_readiness"],
      startTool: { key: "visa_checker" },
      unknownsToConfirm: ["Recognised sponsor", "Salary thresholds", "Probation and notice"],
    },
    {
      id: "work-eu",
      chips: ["eu"],
      personaTitle: "EU/EEA mobility",
      whatMatters: ["Registration not visa", "BSN and contracts", "Insurance obligations"],
      readingOrder: ["moving_pillar", "bsn", "services_banks"],
      startTool: { key: "moving_pillar" },
      unknownsToConfirm: ["Cross-border commuting", "Partner status", "Healthcare timing"],
    },
    {
      id: "work-job-search",
      chips: ["search"],
      personaTitle: "Still searching or interviewing",
      whatMatters: ["Realistic permit routes", "CV & credential framing", "Timeline vs housing"],
      readingOrder: ["compare_visas", "visa_checker", "work_tools"],
      startTool: { key: "compare_visas" },
      unknownsToConfirm: ["Industry demand", "Remote vs on-site", "Internship vs full role"],
    },
    {
      id: "work-unsure",
      chips: ["unsure"],
      personaTitle: "Unsure which permit fits",
      whatMatters: ["Nationality", "Offer status", "Education vs experience routes"],
      readingOrder: ["visa_checker", "compare_visas", "hsm"],
      startTool: { key: "visa_checker" },
      unknownsToConfirm: ["Current location", "Employer willingness to sponsor", "Study-to-work pivot"],
    },
  ],
  faq: [
    {
      q: "Do I always need a work permit?",
      a: "**EU/EEA** nationals generally **do not** need a Dutch work permit in the same way as many **non-EU** routes. **Non-EU** paths usually tie to a **residence purpose** such as highly skilled employment, EU Blue Card, or other permits—confirm with **IND** materials.",
      links: [{ label: "Compare visas", href: "/netherlands/visa/compare-visas/" }],
    },
    {
      q: "What is a recognised sponsor?",
      a: "Many work-based permits require an employer that is or becomes a **recognised sponsor** with the **IND**. That status affects how applications are submitted and processed.",
      links: [{ label: "Highly skilled migrant", href: "/netherlands/visa/highly-skilled-migrant/" }],
    },
    {
      q: "When do I need a BSN for payroll?",
      a: "Employers typically need your **BSN** for payroll reporting. You usually receive a BSN after **municipality registration** at an acceptable address—sequence housing, registration, and start dates carefully.",
      links: [{ label: "BSN registration", href: "/netherlands/bsn-registration/" }],
    },
    {
      q: "Highly skilled migrant vs EU Blue Card?",
      a: "Both are **work-based** routes for qualified employees but differ in **framework, salary references, and employer context**. Compare official criteria rather than choosing from job title alone.",
      links: [
        { label: "EU Blue Card", href: "/netherlands/visa/eu-blue-card/" },
        { label: "HSM visa", href: "/netherlands/visa/highly-skilled-migrant/" },
      ],
    },
    {
      q: "Is this legal advice?",
      a: "**No.** Use IND, official employer letters, and qualified immigration counsel for decisions.",
    },
  ],
  linkRegistry,
  timelineStages: [
    {
      id: "w1",
      label: "Route clarity",
      goal: "Know your permit lane before you relocate.",
      actions: [
        "Run **visa checker** and read **compare visas** for your nationality.",
        "Confirm employer **sponsor** status and intended permit type.",
        "Align **start date** with realistic IND processing.",
      ],
      links: [
        { href: "/netherlands/visa-checker/", label: "Visa checker" },
        { href: "/netherlands/visa/compare-visas/", label: "Compare visas" },
      ],
    },
    {
      id: "w2",
      label: "Paperwork & arrival",
      goal: "Documents, housing, and first appointments.",
      actions: [
        "Use **document readiness** for employer and IND asks.",
        "Secure **registrable housing** if BSN timing matters for payroll.",
        "Book **gemeente** registration soon after move-in where required.",
      ],
      links: [
        { href: "/netherlands/document-readiness-checker/", label: "Document readiness" },
        { href: "/netherlands/moving-to-the-netherlands/", label: "Moving pillar" },
      ],
    },
    {
      id: "w3",
      label: "Payroll & banking",
      goal: "Get paid on time with correct withholdings.",
      actions: [
        "Share **BSN** with HR once issued.",
        "Open a **Dutch bank account** path that matches your docs.",
        "Ask payroll about **30% ruling** status if applicable.",
      ],
      links: [
        { href: "/netherlands/services/banks/", label: "Banks directory" },
        { href: "/netherlands/taxes/30-percent-ruling/", label: "30% ruling" },
      ],
    },
  ],
  toolsStrip: [
    {
      title: "Dutch payslip decoder",
      href: "/netherlands/work/tools/payslip-decoder/",
      description: "Read common payroll lines once your first Dutch salary lands.",
    },
    {
      title: "Visa checker",
      href: "/netherlands/visa-checker/",
      description: "Short questionnaire to narrow viable routes.",
    },
    {
      title: "Compare visas",
      href: "/netherlands/visa/compare-visas/",
      description: "Side-by-side framing for common permits.",
    },
  ],
  sections: {
    pageHeader: {
      eyebrow: "Netherlands · Work",
      title: "Working in the Netherlands",
      subtitle:
        "From permit type to first payslip: understand sponsor rules, common highly skilled routes, and how work ties to housing registration and your BSN.",
      heroImage: "/images/relocation-planning-netherlands-hero.png",
      heroImageAlt: "Professional opening a laptop in a Dutch office setting",
    },
    overview: {
      sectionTitle: "Overview",
      overviewParagraph:
        "Most non-EU employees anchor on **employer-sponsored** residence permits. **EU/EEA** movers focus on **registration**, **contracts**, and **insurance**. In both cases, **timing** between housing, BSN, and payroll is where plans break—use the stages below to sequence.",
      collapsibleTitle: "Details",
      disclaimerItems: [
        "Immigration rules change; verify with IND and your employer’s counsel before booking irreversible moves.",
      ],
    },
    whoThisGuideFor: {
      sectionTitle: "Who this is for",
      paragraph: "People evaluating or starting employment in the Netherlands across tech, corporate, and SME contexts.",
      audiences: ["Non-EU with Dutch offer", "EU movers registering locally", "Job seekers comparing routes"],
    },
    scenarioPaths: {
      intro: "Pick the scenario that matches your contract status and nationality context.",
    },
    stepByStepSummary: {
      sectionTitle: "At a glance",
      introParagraph: "Three checkpoints before you celebrate the offer:",
      steps: [
        "Confirm permit type and sponsor mechanics—not just the job title.",
        "Line up housing that supports BSN timing if payroll is tight.",
        "Parallel-track banking and document checks with HR’s IND workflow.",
      ],
    },
    practicalEssentials: {
      intro: "What employers and desks ask for repeatedly.",
      documents: {
        bullets: ["Passport and any prior permits", "Degree or credential copies if role-specific", "Signed offer or assignment letter"],
        primaryLinkKey: "document_readiness",
      },
      banking: {
        bullets: ["Payroll IBAN requirements", "ID bundles banks accept pre-BSN", "Salary breakdown vs net expectations"],
        primaryLinkKey: "services_banks",
      },
      housing: {
        bullets: ["Registrable lease for gemeente", "Commute feasibility vs hybrid policy", "Temporary stay if permit dates slip"],
        registrationNote: "Payroll and many contracts assume you can register within a realistic window—validate with HR.",
        primaryLinkKey: "bsn",
      },
    },
  },
  nextSteps: [
    {
      label: "Moving to the Netherlands",
      href: "/netherlands/moving-to-the-netherlands/",
      description: "Broader relocation timeline beyond work permits.",
    },
    {
      label: "Highly skilled migrant visa",
      href: "/netherlands/visa/highly-skilled-migrant/",
      description: "Deep dive on the common sponsored route.",
    },
    {
      label: "Compare visa routes",
      href: "/netherlands/visa/compare-visas/",
      description: "Match permits to nationality and offer type.",
    },
  ],
};

export async function getNlWorkFlagshipContent(): Promise<NlFlagshipPillarContent> {
  return nlWorkFlagshipContent;
}

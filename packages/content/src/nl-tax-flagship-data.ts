import type { LinkRegistry, NlFlagshipPillarContent } from "./types";

const linkRegistry: LinkRegistry = {
  taxes_hub: { href: "/netherlands/taxes/", title: "Netherlands taxes hub" },
  taxes_how: { href: "/netherlands/taxes/how-taxes-work-netherlands/", title: "How taxes work in the Netherlands" },
  taxes_expat: { href: "/netherlands/taxes/expat-taxes-netherlands/", title: "Expat taxes Netherlands" },
  taxes_30: { href: "/netherlands/taxes/30-percent-ruling/", title: "30% ruling guide" },
  taxes_30_calc: { href: "/netherlands/taxes/tools/30-ruling-calculator/", title: "30% ruling eligibility calculator" },
  taxes_return: { href: "/netherlands/taxes/tax-return-netherlands/", title: "Tax return Netherlands" },
  digid: { href: "/netherlands/digid-awareness/", title: "DigiD guide" },
  bsn: { href: "/netherlands/bsn-registration/", title: "BSN registration" },
  money_tools: { href: "/netherlands/money/tools/", title: "Money & tax tools hub" },
  moving_pillar: { href: "/netherlands/moving-to-the-netherlands/", title: "Moving to the Netherlands" },
};

export const nlTaxFlagshipContent: NlFlagshipPillarContent = {
  meta: {
    breadcrumbs: [
      { label: "Netherlands", href: "/netherlands" },
      { label: "Taxes", href: "/netherlands/taxes" },
    ],
    canonicalPath: "/netherlands/taxes/",
    lastUpdated: new Date().toISOString().slice(0, 10),
    seo: {
      title: "Taxes in the Netherlands for expats",
      description:
        "Understand Dutch tax basics for newcomers: payroll tax, tax residency, filing, DigiD, and where the 30% ruling fits—then dive into focused guides.",
    },
  },
  stagesTitle: "Your first tax picture in 3 stages",
  scenarios: [
    {
      id: "tax-new-job",
      chips: ["employee"],
      personaTitle: "New employee on Dutch payroll",
      whatMatters: ["Payslip codes", "Payroll tax vs final settlement", "Filing deadline"],
      readingOrder: ["taxes_how", "taxes_return", "digid"],
      startTool: { key: "money_tools" },
      unknownsToConfirm: ["30% ruling eligibility", "Prior foreign income", "Partner income"],
    },
    {
      id: "tax-30",
      chips: ["30%"],
      personaTitle: "Highly skilled / 30% ruling context",
      whatMatters: ["Eligibility rules", "Salary thresholds", "Changing employers"],
      readingOrder: ["taxes_30", "taxes_expat", "taxes_return"],
      startTool: { key: "taxes_30_calc" },
      unknownsToConfirm: ["Sponsor change", "Partial year", "Partner implications"],
    },
    {
      id: "tax-cross-border",
      chips: ["cross_border"],
      personaTitle: "Cross-border or recent arrival",
      whatMatters: ["Tax residency timing", "Double taxation angles", "Records to keep"],
      readingOrder: ["taxes_expat", "taxes_how", "bsn"],
      startTool: { key: "taxes_expat" },
      unknownsToConfirm: ["Split year", "Foreign assets", "Treaty position"],
    },
    {
      id: "tax-unsure",
      chips: ["unsure"],
      personaTitle: "Not sure where to start",
      whatMatters: ["Confirm residency", "Gather letters from employer", "Open DigiD path"],
      readingOrder: ["taxes_how", "digid", "taxes_return"],
      startTool: { key: "taxes_how" },
      unknownsToConfirm: ["Employment start date", "Previous country tax status"],
    },
  ],
  faq: [
    {
      q: "Do I file a tax return every year?",
      a: "Many employees have **payroll tax withheld** and may still **file a return** to reconcile deductions, partner credits, or mortgage interest where relevant. Deadlines and boxes change—use Belastingdienst guidance for your year.",
      links: [{ label: "Tax return guide", href: "/netherlands/taxes/tax-return-netherlands/" }],
    },
    {
      q: "What is box 1 / box 2 / box 3?",
      a: "Dutch income tax uses **boxes** for different income and wealth categories at a high level. The exact treatment depends on residency and sources—read a structured overview rather than guessing from a payslip alone.",
      links: [{ label: "How taxes work", href: "/netherlands/taxes/how-taxes-work-netherlands/" }],
    },
    {
      q: "Why do people mention DigiD for taxes?",
      a: "**DigiD** is the common login for many Dutch government services, including tax filing flows. Plan activation once you have a **BSN** and the required verification steps.",
    },
    {
      q: "Is the 30% ruling automatic?",
      a: "No. The **30% ruling** requires **eligibility**, **employer application**, and adherence to **salary thresholds** and procedure. It is not guaranteed by job title alone.",
      links: [{ label: "30% ruling", href: "/netherlands/taxes/30-percent-ruling/" }],
    },
    {
      q: "Is this site tax advice?",
      a: "**No.** ExpatCopilot provides orientation and links. For positions involving large income, equity, or cross-border complexity, use a **qualified tax adviser** and **Belastingdienst** primary sources.",
    },
  ],
  linkRegistry,
  timelineStages: [
    {
      id: "t1",
      label: "Clarify status",
      goal: "Know residency, employer setup, and key letters.",
      actions: [
        "Confirm when you became **tax resident** (if applicable).",
        "Collect payslips, annual statements, and prior-country returns if relevant.",
        "Check whether **30% ruling** paperwork was submitted.",
      ],
      links: [
        { href: "/netherlands/taxes/tax-residency-netherlands/", label: "Tax residency" },
        { href: "/netherlands/taxes/expat-taxes-netherlands/", label: "Expat taxes overview" },
      ],
    },
    {
      id: "t2",
      label: "Digital access",
      goal: "DigiD and Belastingdienst channels ready.",
      actions: [
        "Plan **DigiD** activation after BSN where possible.",
        "Bookmark official **Belastingdienst** pages for your filing year.",
        "Note filing **deadlines** and extension rules.",
      ],
      links: [
        { href: "/netherlands/digid-awareness/", label: "DigiD guide" },
        { href: "/netherlands/taxes/tax-return-netherlands/", label: "Tax return guide" },
      ],
    },
    {
      id: "t3",
      label: "File & reconcile",
      goal: "Complete return or adviser handoff with clean records.",
      actions: [
        "Match payroll withholdings to annual statements.",
        "Declare partner, mortgage, or allowance items if they apply.",
        "Keep PDFs of submissions and assessments.",
      ],
      links: [
        { href: "/netherlands/taxes/how-taxes-work-netherlands/", label: "How taxes work" },
        { href: "/netherlands/money/tools/", label: "Money tools hub" },
      ],
    },
  ],
  toolsStrip: [
    {
      title: "Dutch payslip decoder",
      href: "/netherlands/work/tools/payslip-decoder/",
      description: "Understand bruto/netto, loonheffing, and vakantiegeld from pasted text or a text PDF.",
    },
    {
      title: "Money & tax tools",
      href: "/netherlands/money/tools/",
      description: "Calculators and planners for salary, tax, and benefits topics.",
    },
    {
      title: "30% ruling guide",
      href: "/netherlands/taxes/30-percent-ruling/",
      description: "Eligibility framing before you rely on net-pay estimates.",
    },
  ],
  sections: {
    pageHeader: {
      eyebrow: "Netherlands · Taxes",
      title: "Taxes in the Netherlands",
      subtitle:
        "Payroll withholding, annual filing, DigiD, and expat-specific topics like the 30% ruling. Start here, then open the deep guides that match your situation.",
      heroImage: "/images/relocation-planning-netherlands-hero.png",
      heroImageAlt: "Dutch city skyline and documents—planning taxes as an expat",
    },
    overview: {
      sectionTitle: "Overview",
      overviewParagraph:
        "Dutch taxation touches **work**, **housing benefits**, and **wealth reporting** depending on your profile. New arrivals usually begin with **payroll tax**, then learn whether they must **file**, how **DigiD** works, and whether **30% ruling** applies.",
      collapsibleTitle: "Details",
      disclaimerItems: [
        "Not tax, legal, or financial advice. Confirm with Belastingdienst and a qualified adviser for your facts.",
      ],
    },
    whoThisGuideFor: {
      sectionTitle: "Who this is for",
      paragraph: "Employees, highly skilled migrants, partners, and cross-border workers who need a sane map before reading specialist articles.",
      audiences: ["First-year filers", "30% ruling candidates", "Cross-border households"],
    },
    scenarioPaths: {
      intro: "Choose the lane that matches your job and mobility story.",
    },
    stepByStepSummary: {
      sectionTitle: "At a glance",
      introParagraph: "Three moves that prevent April surprises:",
      steps: [
        "Know your residency year and keep employer letters.",
        "Enable DigiD once BSN and verification allow.",
        "File or appoint help before deadlines—don’t rely on payslips alone.",
      ],
    },
    practicalEssentials: {
      intro: "Records and channels that make Dutch tax admin smoother.",
      documents: {
        bullets: ["Payslips and annual income statements", "Prior-year returns if you moved mid-year", "30% ruling letters if applicable"],
        primaryLinkKey: "taxes_return",
      },
      banking: {
        bullets: ["IBAN for refunds", "Separate savings for unexpected assessments", "Understand net vs gross from contract"],
        primaryLinkKey: "taxes_how",
      },
      housing: {
        bullets: ["Mortgage or rent details if they affect allowances", "Address history for residency narrative", "Keep gemeente correspondence"],
        registrationNote: "Your registered address supports many government workflows, including some tax-related letters.",
        primaryLinkKey: "bsn",
      },
    },
  },
  nextSteps: [
    {
      label: "How taxes work in the Netherlands",
      href: "/netherlands/taxes/how-taxes-work-netherlands/",
      description: "Boxes, payroll tax, and filing concepts in one pass.",
    },
    {
      label: "Expat taxes Netherlands",
      href: "/netherlands/taxes/expat-taxes-netherlands/",
      description: "Common expat angles and pitfalls.",
    },
    {
      label: "Tax return Netherlands",
      href: "/netherlands/taxes/tax-return-netherlands/",
      description: "When and how filing usually works.",
    },
  ],
};

export async function getNlTaxFlagshipContent(): Promise<NlFlagshipPillarContent> {
  return nlTaxFlagshipContent;
}

import type { MoveResidencePermitSections } from "../moveResidencePermits.types";
import { RESIDENCE_PERMITS_VISAS } from "../moveResidencePermitConstants";

/** Work-led section + study / family / entrepreneur / in-NL route clusters. */
export const moveResidencePermitSections: MoveResidencePermitSections = {
  work: {
    id: "work-permits",
    visualKey: "work",
    eyebrow: "When your job is the main reason you’re here",
    title: "Residence permits for work",
    subtitle:
      "Your contract, employer sponsor, and pay dates usually need to **match immigration**—not sit in a separate “HR only” chat.",
    intro:
      "Most work permits involve **your employer**: who applies, when you start, and what has to stay true after day one. That doesn’t replace the immigration service (IND)—but it shapes what you plan for.",
    keyPoints: [
      "**Sponsor and permit type** set the outline; your **contract and start date** fill in the timeline.",
      "Big changes—**new employer, working remotely, job ending**—can matter for immigration later; note them early.",
      "HR runs **internal steps**; **IND** (or an adviser) sets the rules that count.",
      "The salary and contract tools below help you **check money and clauses** once you know your route—they don’t decide a permit for you.",
    ],
    pairedToolsEyebrow: "If work drives your permit, try these next",
    pairedTools: [
      {
        label: "Job offer comparison",
        href: "/netherlands/work/tools/job-offer-comparison/",
        description: "— compare two offers—not only gross salary.",
      },
      {
        label: "Employment contract risk scanner",
        href: "/netherlands/work/tools/employment-contract-risk-scanner/",
        description: "— spot important clauses before you sign.",
      },
      {
        label: "Dutch salary (net) calculator",
        href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
        description: "— rough idea of take-home pay from gross.",
      },
      {
        label: "30% ruling calculator",
        href: "/netherlands/taxes/tools/30-ruling-calculator/",
        description: "— rough planning only (not a final answer).",
      },
      {
        label: "Working in the Netherlands",
        href: "/netherlands/moving/working-in-the-netherlands/",
        description: "— wider work context once your route is clearer.",
      },
      {
        label: "Changing jobs in the Netherlands",
        href: "/netherlands/moving/changing-jobs-netherlands/",
        description: "— when you are switching employers and permit or payroll timing may move too.",
      },
      {
        label: "Resigning a job in the Netherlands",
        href: "/netherlands/moving/resigning-job-netherlands/",
        description: "— exit planning when employment may end and permit or household timing still matters.",
      },
      {
        label: "Layoffs in the Netherlands",
        href: "/netherlands/moving/layoffs-netherlands/",
        description: "— redundancy or role-ending risk next to stay, payroll, rent, and family admin.",
      },
      {
        label: "TWV work permit",
        href: "/netherlands/moving/twv-work-permit/",
        description: "— useful when employer-driven work authorization may be part of the route.",
      },
    ],
  },
  routeCategories: {
    id: "study-family-other",
    eyebrow: "Not only a job-sponsored permit",
    title: "Study, family, business, and changing situations",
    subtitle: "Four groups—each needs different papers and timing. Pick the letter that fits you.",
    blocks: [
      {
        id: "study",
        visualKey: "study-block",
        letter: "A",
        title: "Study",
        bestFor: "Your main reason to stay is a degree, exchange, or other approved study.",
        whatMattersNext: "Keep **school, insurance, and gemeente** on one timeline—one missed step delays the rest.",
        nextLinks: [
          { label: "Student visa guide", href: "/netherlands/visa/student-visa/" },
          { label: "Healthcare basics", href: "/netherlands/living/healthcare-basics/" },
        ],
      },
      {
        id: "partner",
        visualKey: "partner",
        letter: "B",
        title: "Partner / family",
        bestFor: "You’re joining someone whose right to be here is the basis for your case.",
        whatMattersNext: "Lead with **relationship and sponsor proof**—not a generic work checklist.",
        nextLinks: [
          { label: "Partner & family visa", href: "/netherlands/visa/partner-family-visa/" },
          { label: "Visas & residency hub", href: RESIDENCE_PERMITS_VISAS },
        ],
      },
      {
        id: "zzp",
        visualKey: "zzp",
        letter: "C",
        title: "ZZP / entrepreneur",
        bestFor: "Your stay is based on **running a business or freelance work**.",
        whatMattersNext: "Expect **more documents and prep** than a standard hire with an employer.",
        nextLinks: [
          { label: "Self-employed visa", href: "/netherlands/visa/self-employed-visa/" },
          { label: "DAFT (US)", href: "/netherlands/visa/dutch-american-friendship-treaty/" },
        ],
      },
      {
        id: "other",
        visualKey: "other",
        letter: "D",
        title: "Changing situation / already here",
        bestFor: "Extending, switching route, or sorting the next step while you’re already in NL.",
        whatMattersNext: "Treat it as a **process with dates**, not something that renews itself.",
        nextLinks: [
          { label: "Compare visa routes", href: "/netherlands/visa/compare-visas/" },
          { label: "Visa checker", href: "/netherlands/visa-checker/" },
        ],
      },
    ],
  },
};

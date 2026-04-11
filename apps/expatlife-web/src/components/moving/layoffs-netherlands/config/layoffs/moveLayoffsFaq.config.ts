import { moveLayoffsNlRoutes as ROUTES } from "./moveLayoffsNl.routes";
import type { MoveLayoffsFaqConfig } from "../moveLayoffsNl.content.model";

export const moveLayoffsFaq = [
  {
    q: "What should I check first if a layoff might happen?",
    a: "Four areas: your job (contract, notice, last day, pay), stay if it depends on this job, money (gaps, rent, family costs), and daily life (insurance, proofs, registration). Ask for written answers where banks, landlords, or authorities will care.",
    links: [
      { label: "What layoffs can affect", href: `${ROUTES.canonical}#what-layoffs-affect` },
      { label: "Employment & notice section", href: `${ROUTES.canonical}#employment-notice` },
    ],
  },
  {
    q: "Can a layoff affect my permit or status?",
    a: "Sometimes. It depends on your permit type and timing. Read Residence permits, Extensions & changes, or Status changes for wording — then confirm with your employer and official sources. This page is not immigration advice.",
    links: [
      { label: "Residence permits", href: ROUTES.residencePermits },
      { label: "Status changes", href: ROUTES.statusChanges },
    ],
  },
  {
    q: "What should I look at in my contract?",
    a: "How a role can end, notice, termination or redundancy wording, pay and bonus timing, leave, and rules that continue after the last day. Compare that with HR letters — dates and money should match.",
    links: [{ label: "Contract risk scanner", href: ROUTES.contractScanner }],
  },
  {
    q: "What if I do not have a new job yet?",
    a: "You can still stabilise: cash buffer, health insurance without a gap, realistic rent, and stay questions if relevant. Use calculators with lower or zero income; check official sites for any benefit you might use.",
    links: [
      { label: "Dutch salary net calculator", href: ROUTES.salaryNet },
      { label: "Rent affordability", href: ROUTES.rentAffordability },
    ],
  },
  {
    q: "How do salary, benefits, rent, and tax fit together?",
    a: "Use one calendar: when pay stops, fixed costs often do not. Add rent, childcare, and travel, then ask payroll or Belastingdienst about tax and allowances when income changes.",
    links: [
      { label: "Cost of living calculator", href: ROUTES.costOfLiving },
      { label: "Healthcare allowance estimator", href: ROUTES.healthcareAllowance },
    ],
  },
  {
    q: "What if there is a gap after my last payslip?",
    a: "Count the gap in weeks and euros. Plan cash and insurance — short gaps still hit direct debits and proof-of-income questions. Health and housing are common pain points.",
    links: [{ label: "Healthcare basics", href: ROUTES.healthcareBasics }],
  },
  {
    q: "Which practical life areas often move?",
    a: "Housing (renewals, landlord checks), health (employer scheme → mandatory Dutch cover), BSN / address, childcare and schools, banking, and family permits when linked to your job. Use the practical life section as a checklist, not a single-afternoon to-do.",
    links: [{ label: "Practical life section", href: `${ROUTES.canonical}#practical-life` }],
  },
  {
    q: "Is this legal, tax, or immigration advice?",
    a: "No. It is a Move guide to help you orient, ask clearer questions, and open tools and official links. For binding answers, use employers, qualified advisers, and government sources.",
  },
] satisfies MoveLayoffsFaqConfig;

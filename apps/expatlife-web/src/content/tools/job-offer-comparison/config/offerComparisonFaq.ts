/**
 * FAQ items — plain Q/A for Accordion + FAQ schema.
 * Answers avoid implying exact tax, legal outcomes, or permit approval.
 */

export type OfferComparisonFaqItem = {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
};

export const OFFER_COMPARISON_FAQ: readonly OfferComparisonFaqItem[] = [
  {
    id: "compare-offers-nl",
    question: "How should I compare job offers in the Netherlands?",
    answer:
      "Align definitions first: is vakantiegeld inside the gross you were quoted or on top? Are bonuses guaranteed, target, or discretionary? Then add pension wording, allowances, probation and notice, visa and 30% ruling support, relocation clawbacks, and where you will actually live. This tool turns those answers into estimated take-home (using the Dutch salary calculator), rent pressure, commute, and simple scores — use it to prepare questions for HR and advisors, not as a final payroll or legal answer.",
  },
  {
    id: "gross-not-enough",
    question: "Is higher gross salary always the better offer in the Netherlands?",
    answer:
      "No. Dutch packages often differ on holiday allowance presentation, bonus certainty, pension quality, travel and home-office allowances, 30% ruling employer support, relocation repayment rules, fixed-term vs permanent risk, and city-level rent. A higher Amsterdam gross can leave less spare cash than a lower Rotterdam gross after housing if you commute full time. Use the at-a-glance cards and affordability section here to see when salary and “money left” disagree.",
  },
  {
    id: "holiday-allowance-included",
    question: "Does holiday allowance (vakantiegeld) need to be included in the gross for comparison?",
    answer:
      "You must match how each employer quotes pay. If gross already includes 8% vakantiegeld, choose “included in gross”. If the letter shows base + separate vakantiegeld, choose “separate (on top)”. Mixing this up is one of the fastest ways to make two offers look closer or farther apart than they really are. When unsure, ask HR for the annual gross including all recurring components.",
  },
  {
    id: "ruling-difference",
    question: "Does 30% ruling employer support make a big difference when comparing offers?",
    answer:
      "For many eligible hires it changes take-home a lot, but eligibility depends on your personal situation and timing — not on the word “support” alone. In this tool, “Yes”, “Best efforts”, “No”, and “Not mentioned” shift both estimated net and the expat-support score. Treat them as planning hints; confirm with a tax advisor and official documentation before you count on the benefit.",
  },
  {
    id: "fixed-vs-perm",
    question: "How do I compare fixed-term vs permanent contracts in the Netherlands?",
    answer:
      "Read renewal language, notice periods, probation, and whether the sponsor or landlord will accept the term length. Two offers with identical gross can carry very different practical risk. This tool scores security and surfaces contract flags; paste the text into the Employment Contract Risk Scanner and involve a lawyer when non-compete, repayment, or renewal is unclear.",
  },
  {
    id: "contractor-vs-employee-offer",
    question: "How do I compare a Dutch payroll offer vs contractor or umbrella pay?",
    answer:
      "Do not compare the contractor day rate directly to payroll gross without adjusting for holiday pay, pension, leave, sick pay, and costs you now carry yourself. This tool marks contractor paths and applies conservative adjustments to net while scoring benefits and stability lower. For structure questions, use the employment type scenario tool and get payroll or tax advice before committing.",
  },
  {
    id: "after-rent-commute",
    question: "Should I compare Dutch job offers after rent and commute costs?",
    answer:
      "If you care about month-to-month life, yes. Gross salary does not know your rent, your partner’s commute, or how many days you are in the office. Enter home or target city, office days, commute mode, and either typical city rent or your real budget. The affordability section and topic-by-topic cards translate the same gross into different “money left” stories.",
  },
  {
    id: "amsterdam-vs-rotterdam-offer",
    question: "Is a higher salary in Amsterdam always better than a lower salary in Rotterdam?",
    answer:
      "Not automatically. Higher gross often pairs with higher rent and, for office-heavy roles, higher commute spend. Model both cities with honest office days. Many people find Rotterdam’s lower typical rent narrows or reverses the advantage of a higher Amsterdam gross — your priorities (cash vs city lifestyle) still decide.",
  },
  {
    id: "negotiate-before-accepting-nl",
    question: "What should I negotiate on a Dutch job offer before accepting?",
    answer:
      "Clarify vakantiegeld and bonus rules in writing, base salary review timing, pension employer contribution, probation length, notice, hybrid policy (fixed vs “manager discretion”), travel and home-office allowances, relocation budget and clawback, 30% ruling and visa support, equipment, and sign-on when you are leaving a bonus behind. Use the negotiation question lists this tool generates per offer as a checklist email to HR.",
  },
  {
    id: "foreign-employer-remote-nl",
    question: "How do I compare a Dutch employer with a foreign employer who hires me remotely from the Netherlands?",
    answer:
      "Map who runs payroll, social security, and immigration. Foreign setups often add hassle even when gross looks strong. This tool scores expat clarity lower on remote-foreign paths and applies conservative adjustments to net. Cross-check with the double tax awareness tool and a tax advisor when you have cross-border elements.",
  },
  {
    id: "lower-salary-better",
    question: "Can a lower gross salary still be the better job offer overall?",
    answer:
      "Yes. Stronger pension, guaranteed bonus, allowances, ruling support, lower-rent city, shorter commute, permanent contract, or better relocation terms routinely beat a slightly higher gross. The overall score and topic-by-topic cards show which areas flip the answer for the priorities you chose.",
  },
  {
    id: "sign-on-vs-relocation-bonus",
    question: "Is a sign-on bonus the same as a relocation bonus?",
    answer:
      "Usually not in purpose: sign-on compensates for joining (lost bonus elsewhere, risk), while relocation offsets moving costs. Both may have repayment clauses. Enter them separately in the tool so one-off cash is visible alongside recurring salary; ask HR which bucket each payment sits in and whether repayment applies if you leave early.",
  },
  {
    id: "exact-tax",
    question: "Does this tool calculate exact Dutch wage tax and payroll deductions?",
    answer:
      "No. It uses the same estimate as the Dutch salary net calculator — useful for direction and side-by-side comparison, not for payslip-final amounts. Payroll systems, pensionable salary definitions, and personal credits can differ.",
  },
  {
    id: "deep-contract",
    question: "Can this tool replace a lawyer or contract review?",
    answer:
      "No. It captures planning signals you type, not enforceability. Use the Employment Contract Risk Scanner on the text, then engage an employment lawyer for non-compete, repayment, overtime, and unusual clauses — especially on fixed-term and foreign employer deals.",
  },
  {
    id: "partner-two-offers-same-company",
    question: "Can I compare two roles at the same company or my current salary vs an internal move?",
    answer:
      "Yes — use “current vs new” mode or duplicate offer A into B and edit only what changes. That is useful for internal transfers, promotion letters, or renegotiation where benefits stay similar but base or flexibility shifts.",
  },
] as const satisfies readonly OfferComparisonFaqItem[];

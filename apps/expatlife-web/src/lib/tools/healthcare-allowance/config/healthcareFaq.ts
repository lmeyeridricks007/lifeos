/**
 * FAQ entries for the Healthcare Allowance Estimator page.
 * Render with an accordion; same items can feed FAQ JSON-LD on the page.
 */

export type HealthcareFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const healthcareFaqItems: readonly HealthcareFaqItem[] = [
  {
    id: "need-insurance",
    question: "Do I need Dutch health insurance to get healthcare allowance?",
    answer:
      "In normal cases, yes — zorgtoeslag is tied to holding Dutch basic health insurance in the relevant period. If you are not insured or not entitled, do not expect allowance. This tool flags obvious insurance gaps but does not verify your policy.",
  },
  {
    id: "partner-income",
    question: "Does my partner’s income matter?",
    answer:
      "When a toeslagpartner is included for the allowance year, combined income is tested against the higher partner income ceiling in our model. If you file as single for this benefit or your partner is not a toeslagpartner under the rules, the test differs — confirm your household type with Dienst Toeslagen.",
  },
  {
    id: "savings",
    question: "Do savings affect healthcare allowance?",
    answer:
      "Yes — relevant assets on 1 January (savings, investments, and similar) are compared to a statutory-style ceiling in this planner. Everyday monthly cash flow is not the same as the asset test.",
  },
  {
    id: "lower-than-max",
    question: "Why is my estimated amount lower than the maximum?",
    answer:
      "The public maximum is an upper bound. In this tool we taper the estimate as income rises toward the ceiling so mid-range earners see smaller amounts. Official awards use detailed rules — your real amount can differ.",
  },
  {
    id: "mid-year",
    question: "Can I still get allowance if I moved mid-year?",
    answer:
      "Often yes for the months you are insured and eligible, but amounts are time-bound. We prorate annual totals by the months you select so you can compare remainder-of-year cash impact with a hypothetical full year.",
  },
  {
    id: "salary-changes",
    question: "What happens if my salary changes during the year?",
    answer:
      "Allowance depends on the income picture you report and later updates. Raises can reduce or remove allowance; you may need to repay if you received too much. Keep Dienst Toeslagen informed when circumstances change.",
  },
  {
    id: "official-calc",
    question: "Is this the same as the official Toeslagen calculator?",
    answer:
      "No. ExpatCopilot uses transparent planning thresholds and a simple taper for orientation. Only Dienst Toeslagen and official tools determine entitlement.",
  },
  {
    id: "unsure-income",
    question: "What if I am not sure about my income yet?",
    answer:
      "Use the uncertainty toggle — we stress-test with a higher income and show warnings so you do not accidentally overestimate allowance.",
  },
  {
    id: "income-limit-2026",
    question: "What is the zorgtoeslag income limit for 2026?",
    answer:
      "Public ceilings change with policy. This tool uses 2026 planning thresholds from our site configuration — always verify the current single and partner income limits on Belastingdienst / Rijksoverheid before you rely on a number for real decisions.",
  },
  {
    id: "asset-limit-explainer",
    question: "What is the asset limit for healthcare allowance?",
    answer:
      "There is a separate cap for relevant assets on 1 January (combined with a partner when applicable). This estimator mirrors statutory-style caps for planning; exact categories and exemptions are defined only in official rules.",
  },
  {
    id: "expat-same-rules",
    question: "Are the rules the same for expats?",
    answer:
      "Zorgtoeslag depends on insurance, residence, income, assets, and household type — not nationality alone. Expats often have more moving parts (move date, partner abroad, package pay), so planning with conservative inputs and official confirmation matters more, not less.",
  },
  {
    id: "apply-where",
    question: "Where do I apply for zorgtoeslag?",
    answer:
      "Applications and changes go through Dienst Toeslagen (often via Mijn Toeslagen). This page helps you estimate and prepare — it does not submit anything on your behalf.",
  },
  {
    id: "different-from-huurtoeslag",
    question: "Is this the same as rent benefit (huurtoeslag)?",
    answer:
      "No. Healthcare allowance supports basic health insurance premiums; rent allowance is a different toeslag with its own rules. You might qualify for one, both, or neither — always check each benefit separately on official channels.",
  },
] as const;

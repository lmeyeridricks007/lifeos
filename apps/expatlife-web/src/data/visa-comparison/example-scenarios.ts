/**
 * Example visa situations for the Netherlands visa comparison page.
 * Used in the "Example visa situations" section; links can prefill the Visa Checker via query params.
 */

const BASE = "/netherlands";
const VISA_CHECKER = `${BASE}/visa-checker/`;

export type ExampleScenario = {
  id: string;
  title: string;
  explanation: string;
  recommendedRoutes: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const COMPARISON_EXAMPLE_SCENARIOS: ExampleScenario[] = [
  {
    id: "india-hsm",
    title: "Indian software engineer with Dutch job offer",
    explanation: "Non-EU professional with a Dutch job offer from a recognized sponsor; compare HSM and EU Blue Card.",
    recommendedRoutes: ["Highly Skilled Migrant", "EU Blue Card"],
    ctaLabel: "Use this scenario in the Visa Checker",
    ctaHref: `${VISA_CHECKER}?scenario=india-hsm#tool-inputs`,
  },
  {
    id: "us-daft",
    title: "US freelancer comparing DAFT and Self-Employed",
    explanation: "American planning to work as self-employed in the Netherlands; compare DAFT vs general self-employed route.",
    recommendedRoutes: ["DAFT", "Self-Employed (if eligible)"],
    ctaLabel: "Use this scenario in the Visa Checker",
    ctaHref: `${VISA_CHECKER}?scenario=us-daft#tool-inputs`,
  },
  {
    id: "uk-student",
    title: "UK student moving for university",
    explanation: "Non-EU student with or expecting admission to Dutch education.",
    recommendedRoutes: ["Student Visa"],
    ctaLabel: "Use this scenario in the Visa Checker",
    ctaHref: `${VISA_CHECKER}?scenario=uk-student#tool-inputs`,
  },
  {
    id: "partner-join",
    title: "South African partner joining spouse in the Netherlands",
    explanation: "Moving to join a partner or spouse who already lives in the Netherlands.",
    recommendedRoutes: ["Partner & Family Visa"],
    ctaLabel: "Use this scenario in the Visa Checker",
    ctaHref: `${VISA_CHECKER}?scenario=partner-join#tool-inputs`,
  },
  {
    id: "entrepreneur-no-sponsor",
    title: "Entrepreneur without employer sponsor",
    explanation: "Considering self-employment or exploring options without a job offer.",
    recommendedRoutes: ["DAFT (if US)", "Self-Employed Visa"],
    ctaLabel: "Use this scenario in the Visa Checker",
    ctaHref: `${VISA_CHECKER}?scenario=consultant-exploring#tool-inputs`,
  },
  {
    id: "couple-work-vs-partner",
    title: "Couple deciding between work route and partner route",
    explanation: "One partner has a job offer; the other may join via work route or partner/family route.",
    recommendedRoutes: ["Highly Skilled Migrant", "Partner & Family Visa"],
    ctaLabel: "Use this scenario in the Visa Checker",
    ctaHref: `${VISA_CHECKER}?scenario=family-work#tool-inputs`,
  },
];

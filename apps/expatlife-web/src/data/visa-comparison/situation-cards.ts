/**
 * "Compare by your situation" cards for the Netherlands visa comparison page.
 */

const BASE = "/netherlands";
const VISA_CHECKER = `${BASE}/visa-checker/`;

export type SituationCard = {
  id: string;
  title: string;
  /** e.g. "I have a job offer" */
  routes: Array<{ name: string; href: string }>;
  reasoning: string;
  visaCheckerHref: string;
};

export const COMPARISON_SITUATION_CARDS: SituationCard[] = [
  {
    id: "job-offer",
    title: "I have a job offer",
    routes: [
      { name: "Highly Skilled Migrant", href: `${BASE}/visa/highly-skilled-migrant/` },
      { name: "EU Blue Card", href: `${BASE}/visa/eu-blue-card/` },
    ],
    reasoning: "If your employer is (or can become) a recognized IND sponsor and the salary meets the threshold, HSM is the most common route. EU Blue Card is an alternative with different salary and EU-wide mobility rules.",
    visaCheckerHref: VISA_CHECKER,
  },
  {
    id: "freelance-business",
    title: "I want to freelance or start a business",
    routes: [
      { name: "DAFT (US only)", href: `${BASE}/visa/dutch-american-friendship-treaty/` },
      { name: "Self-Employed Visa", href: `${BASE}/visa/self-employed-visa/` },
    ],
    reasoning: "US citizens can use DAFT with a lower capital requirement. Others use the self-employed residence permit, which has viability and profit criteria.",
    visaCheckerHref: VISA_CHECKER,
  },
  {
    id: "us-entrepreneur",
    title: "I am a US citizen entrepreneur",
    routes: [
      { name: "DAFT", href: `${BASE}/visa/dutch-american-friendship-treaty/` },
      { name: "Self-Employed Visa", href: `${BASE}/visa/self-employed-visa/` },
    ],
    reasoning: "DAFT is designed for US citizens; compare with the general self-employed route for requirements and timeline.",
    visaCheckerHref: VISA_CHECKER,
  },
  {
    id: "study",
    title: "I want to study",
    routes: [{ name: "Student Visa", href: `${BASE}/visa/student-visa/` }],
    reasoning: "Non-EU students need a study residence permit; the institution usually submits the application. You will need admission and proof of funds.",
    visaCheckerHref: VISA_CHECKER,
  },
  {
    id: "join-partner",
    title: "I want to join my partner",
    routes: [{ name: "Partner / Family Visa", href: `${BASE}/visa/partner-family-visa/` }],
    reasoning: "The partner or family residence permit allows you to join a spouse or partner who lives legally in the Netherlands. The sponsor must meet income and housing requirements.",
    visaCheckerHref: VISA_CHECKER,
  },
  {
    id: "not-sure",
    title: "I am still not sure",
    routes: [],
    reasoning: "Use the Visa Checker to answer a few questions and get a personalized recommendation, then compare the suggested routes on this page.",
    visaCheckerHref: VISA_CHECKER,
  },
];

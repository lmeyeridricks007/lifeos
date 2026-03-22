/**
 * Official sources and further reading for the Netherlands visa comparison page.
 */

export type OfficialSource = {
  label: string;
  href: string;
};

export const COMPARISON_OFFICIAL_SOURCES: OfficialSource[] = [
  { label: "IND – Residence permits overview", href: "https://ind.nl/en/residence-permits" },
  { label: "IND – Work permits", href: "https://ind.nl/en/residence-permits/work" },
  { label: "IND – Study permits", href: "https://ind.nl/en/residence-permits/study" },
  { label: "IND – Family and partner permits", href: "https://ind.nl/en/residence-permits/family-and-partner" },
  { label: "Business.gov.nl – Self-employed / startup", href: "https://business.gov.nl/regulations/work-permit-self-employed-professionals/" },
  { label: "Government.nl – Migration", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
];

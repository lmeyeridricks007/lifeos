/**
 * Shared data for recommended immigration lawyers section.
 * Used by visa-checker, visa-application-plan, visa-cost-calculator, and other NL tools.
 */

export type RecommendedImmigrationLawyer = {
  name: string;
  description: string;
  typicalCost: string;
  url: string;
  contact?: string;
  logo?: { src: string; alt: string };
};

export const RECOMMENDED_IMMIGRATION_LAWYERS: RecommendedImmigrationLawyer[] = [
  {
    name: "Everaert Advocaten Immigration Lawyers",
    description:
      "Full-service immigration practice: work visas (HSM, EU Blue Card), DAFT, self-employed permits, family reunification, naturalisation, and residence permit extensions. English-speaking team in Amsterdam.",
    typicalCost: "Consultation €150–350; full application support by hourly rate (typically €150–300/hr). Confirm current fees with the firm.",
    url: "https://www.everaert.nl/",
    contact: "+31 (0)20 752 32 00 · lawyers@everaert.nl",
    logo: { src: "/images/affiliates/logos/everaert.svg", alt: "Everaert Advocaten Immigration Lawyers logo" },
  },
  {
    name: "Orion Immigration Law",
    description:
      "Specialist in Dutch immigration and nationality law. Advice and representation for private clients and businesses: residence permits, extensions, and complex cases.",
    typicalCost: "Initial consultation typically €150–250; full applications from c. €1,000. Quote provided on request.",
    url: "https://www.orionimmigrationlaw.nl/en",
    contact: "Contact via website form.",
    logo: { src: "/images/affiliates/logos/orion-immigration.svg", alt: "Orion Immigration Law logo" },
  },
  {
    name: "Franssen Advocaten",
    description:
      "Amsterdam-based firm focused on immigration and international family law. Work visas, DAFT, partner and family reunification, and residence permit applications.",
    typicalCost: "Consultation typically €150–300; residence permit applications from c. €750. Fees confirmed before engagement.",
    url: "https://www.franssenadvocaten.nl/english/",
    contact: "+31 (0)20 66 319 66",
    logo: { src: "/images/affiliates/logos/franssen-advocaten.svg", alt: "Franssen Advocaten logo" },
  },
  {
    name: "Pathway Partners",
    description:
      "Immigration and legal services for residence permits, visa extensions, objections (bezwaar) and appeals. Family reunification, employment and self-employment permits, naturalisation. Free eligibility assessments available.",
    typicalCost: "Free eligibility check. Residence permit applications typically €750–1,500; objections/appeals from c. €900. Fixed or hourly by service.",
    url: "https://pathwaypartners.nl/",
    contact: "Amsterdam; contact via website.",
    logo: { src: "/images/affiliates/logos/pathway-partners.svg", alt: "Pathway Partners logo" },
  },
  {
    name: "Fragomen (Amsterdam)",
    description:
      "Global immigration consultancy with an Amsterdam office. Suited to corporate relocations and high-volume work-permit programmes, as well as individual cases.",
    typicalCost: "Corporate and individual; typical range €1,000–2,500+ depending on case. Quote on request.",
    url: "https://www.fragomen.com/offices/amsterdam",
    contact: "Contact via website.",
    logo: { src: "/images/affiliates/logos/fragomen.svg", alt: "Fragomen logo" },
  },
];

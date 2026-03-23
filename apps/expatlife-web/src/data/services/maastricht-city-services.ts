/**
 * Service cards for /netherlands/maastricht/: Gemeente Maastricht (EN), Expat Centre Maastricht Region,
 * shared banking / housing / documents, and expert-partner examples (not endorsements).
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/** Listed via Expat Centre Maastricht Region expert partners — compare scope and fees yourself. */
export const maastrichtExpatCentrePartnerCards: CityServiceCard[] = [
  {
    id: "ecmr-relocation-services",
    name: "Expat Centre Maastricht Region – Relocation services",
    category: "Expat Centre ecosystem (formalities & relocation)",
    description:
      "Overview of relocation-related support pathways surfaced by Expat Centre Maastricht Region for internationals settling in participating municipalities. Use it to understand what the regional ecosystem covers — then confirm eligibility and providers on their live pages.",
    bestFor: "Mapping relocation support in the Maastricht Region",
    url: "https://www.expatcentremaastrichtregion.nl/expats/formalities/relocation-services",
    isOfficial: true,
  },
  {
    id: "ecmr-expat-mortgages-south",
    name: "Expat Mortgages South",
    category: "Expat Centre ecosystem (housing / finance example)",
    description:
      "Mortgage specialist profile listed under Expat Centre Maastricht Region’s housing expert partners. Relevant when buying or comparing mortgage advice for the south — verify products and suitability directly with the provider.",
    bestFor: "Mortgage questions for internationals in Limburg / the south",
    url: "https://www.expatcentremaastrichtregion.nl/expert-partners/partners-housing/expat-mortgages-south",
    logo: { src: favicon("expatmortgages.nl"), alt: "Expat Mortgages" },
  },
];

export const maastrichtServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "gemeente-maastricht-en",
      name: "Municipality of Maastricht (English)",
      category: "Official / newcomer support",
      description:
        "English entry point for Gemeente Maastricht, including first registration in the Netherlands, DigiD, and BRP extracts — your municipal source for local civil procedures alongside national rules.",
      bestFor: "First registration, DigiD context, BRP documentation",
      costNote: "Official municipal service",
      url: "https://www.maastricht.nl/en",
      isOfficial: true,
    },
    {
      id: "expat-centre-maastricht-region",
      name: "Expat Centre Maastricht Region",
      category: "Official / newcomer support",
      description:
        "Regional hub created to support international talent and businesses in the Maastricht Region. International residents in participating municipalities can use information services, expert staff, and one-on-one consultation — plus events, information sessions, and consultation hours with expert partners.",
      bestFor: "Regional orientation, events, consultation, partner ecosystem",
      url: "https://www.expatcentremaastrichtregion.nl/",
      isOfficial: true,
    },
    {
      id: "ecmr-employers-sessions-events",
      name: "Expat Centre Maastricht Region – Services, sessions & events (employers)",
      category: "Official / newcomer support",
      description:
        "Employer-facing overview of sessions and events connected to the Expat Centre — useful when your company coordinates onboarding or community integration in the region.",
      bestFor: "Employers sponsoring internationals in the Maastricht Region",
      url: "https://www.expatcentremaastrichtregion.nl/employers/services-sessions-events",
      isOfficial: true,
    },
    {
      id: "ecmr-events",
      name: "Expat Centre Maastricht Region – Events",
      category: "Official / newcomer support",
      description:
        "Formal and social events for internationals — practical for networking and practical tips soon after arrival.",
      bestFor: "Community orientation after arrival",
      url: "https://www.expatcentremaastrichtregion.nl/events",
      isOfficial: true,
    },
    {
      id: "ecmr-taxation",
      name: "Expat Centre Maastricht Region – Taxation system",
      category: "Official / newcomer support",
      description:
        "Regional guidance context on the Dutch taxation system for internationals — pair with Belastingdienst and professional advice for your situation.",
      bestFor: "Tax orientation (not personalised advice)",
      url: "https://www.expatcentremaastrichtregion.nl/expats/taxation-insurance/taxation-system",
      isOfficial: true,
    },
    {
      id: "ecmr-gp",
      name: "Expat Centre Maastricht Region – General practitioner (GP)",
      category: "Official / newcomer support",
      description:
        "Practical orientation on GPs and healthcare access in the Netherlands — use alongside national health insurance guidance.",
      bestFor: "Healthcare navigation after insurance",
      url: "https://www.expatcentremaastrichtregion.nl/expats/healthcare/general-practitioner-gp",
      isOfficial: true,
    },
    {
      id: "ecmr-starting-business",
      name: "Expat Centre Maastricht Region – Starting a business",
      category: "Official / newcomer support",
      description:
        "Information for internationals exploring entrepreneurship in the region — confirm legal and permit requirements with official bodies and advisors.",
      bestFor: "Founders and self-employed newcomers",
      url: "https://www.expatcentremaastrichtregion.nl/expats/education-careers/starting-business",
      isOfficial: true,
    },
    {
      id: "ecmr-finding-job",
      name: "Expat Centre Maastricht Region – Finding a job",
      category: "Official / newcomer support",
      description:
        "Regional job-market orientation resources for internationals — complement with employer networking and national permit rules.",
      bestFor: "Job seekers new to the Maastricht Region",
      url: "https://www.expatcentremaastrichtregion.nl/expats/education-careers/finding-job",
      isOfficial: true,
    },
  ],
  "Banking / money": [
    {
      id: "bunq",
      name: "bunq",
      category: "Banking / money",
      description:
        "Digital bank with expat-friendly signup and multi-currency options. Often used by newcomers before or shortly after receiving a BSN.",
      bestFor: "Expats, digital-first banking",
      costNote: "Varies by plan",
      url: "https://www.bunq.com/",
      logo: { src: favicon("bunq.com"), alt: "bunq" },
    },
    {
      id: "abn-amro",
      name: "ABN AMRO",
      category: "Banking / money",
      description:
        "Major Dutch bank with branches and online banking. Full-service accounts; requirements typically include ID and BSN.",
      bestFor: "Traditional banking, in-branch support",
      costNote: "Typical account fees apply",
      url: "https://www.abnamro.nl/en/personal/",
      logo: { src: favicon("abnamro.nl"), alt: "ABN AMRO" },
    },
    {
      id: "ing",
      name: "ING",
      category: "Banking / money",
      description:
        "Large Dutch bank with strong digital offering. Common choice for salary and daily banking.",
      bestFor: "Salary account, iDEAL, daily use",
      costNote: "Typical account fees apply",
      url: "https://www.ing.nl/particulier/english/index.html",
      logo: { src: favicon("ing.nl"), alt: "ING" },
    },
    {
      id: "wise",
      name: "Wise",
      category: "Banking / money",
      description:
        "International transfers and multi-currency. Useful for moving money to the Netherlands and holding euros; often used alongside a Dutch bank account.",
      bestFor: "International transfers, multicurrency",
      costNote: "Varies by transaction",
      url: "https://wise.com/",
      logo: { src: favicon("wise.com"), alt: "Wise" },
    },
  ],
  "Housing / relocation": [
    {
      id: "housing-anywhere",
      name: "HousingAnywhere",
      category: "Housing / relocation",
      description:
        "Platform for mid-term rentals and accommodation search, often used by students and short-term relocators.",
      bestFor: "Mid-term rental, students",
      costNote: "Varies",
      url: "https://housinganywhere.com/",
      logo: { src: favicon("housinganywhere.com"), alt: "HousingAnywhere" },
    },
  ],
  "Documents / translation": sharedDocumentsTranslationServices,
  Insurance: sharedInsuranceServices,
};

export function getMaastrichtCityServices(categories?: string[]): CityServiceCard[] {
  const base = Object.values(maastrichtServicesByCategory).flat();
  const withPartners = [...base, ...maastrichtExpatCentrePartnerCards];
  if (!categories?.length) return withPartners;
  return withPartners.filter((s) => categories.includes(s.category));
}

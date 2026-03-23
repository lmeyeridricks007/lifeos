/**
 * Service cards for /netherlands/groningen/: IWCN (northern Netherlands), Gemeente Groningen,
 * national banking / housing platforms, and IWCN-listed provider examples (not endorsements).
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/** Example providers surfaced via IWCN’s public service-provider ecosystem — compare terms yourself. */
export const groningenIwcnExampleCards: CityServiceCard[] = [
  {
    id: "iwcn-service-providers-hub",
    name: "IWCN – Service providers directory",
    category: "IWCN ecosystem (directory)",
    description:
      "IWCN publishes a searchable directory of service providers for internationals and employers in the northern Netherlands. Use it to compare housing, relocation, mortgages, and other services — always verify scope, contracts, and fees on each provider’s site.",
    bestFor: "Finding vetted-style listings to shortlist (not a guarantee of fit)",
    url: "https://iwcn.nl/service-providers/",
  },
  {
    id: "iwcn-housing-service-providers",
    name: "IWCN – Housing service providers",
    category: "IWCN ecosystem (housing)",
    description:
      "IWCN explains how internationals can get help finding a home and points to housing-related service providers in the region. Useful when you want agency or relocation-style support alongside platform search.",
    bestFor: "Housing search with human support options",
    url: "https://iwcn.nl/living/housing/finding-a-home/get-help-from-iwcn-housing-service-providers/",
  },
  {
    id: "iwcn-real-estate-relocation-agents",
    name: "IWCN – Real estate and relocation agents",
    category: "IWCN ecosystem (housing)",
    description:
      "Overview page on real estate and relocation agents connected to IWCN’s housing guidance. Treat it as a starting point to understand agency-style paths in the north — not a substitute for reading your own rental contract.",
    bestFor: "Rental agency orientation in northern NL",
    url: "https://iwcn.nl/living/housing/finding-a-home/real-estate-and-relocation-agents/",
  },
  {
    id: "iwcn-expat-mortgages",
    name: "Expat Mortgages B.V.",
    category: "IWCN ecosystem (listed provider example)",
    description:
      "Listed on IWCN’s service provider pages as a mortgage specialist for internationals. Relevant when you are buying or need mortgage advice — confirm eligibility, products, and advice rules with the provider directly.",
    bestFor: "Mortgage questions for internationals (verify suitability)",
    url: "https://iwcn.nl/service-providers/expat-mortgages-b-v/",
    logo: { src: favicon("expatmortgages.nl"), alt: "Expat Mortgages" },
  },
];

export const groningenServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "iwcn",
      name: "International Welcome Center North (IWCN)",
      category: "Official / newcomer support",
      description:
        "One-stop shop for internationals and companies in the northern Netherlands. IWCN helps arrange practical matters such as residence permits, municipal registration, and BSN-related formalities for eligible clients — check their services pages for what you can book and how appointments work.",
      bestFor: "Newcomers and employers in the north needing formalities guidance",
      costNote: "See IWCN for current services and any fees",
      url: "https://iwcn.nl/",
      isOfficial: true,
    },
    {
      id: "iwcn-formalities-services",
      name: "IWCN – Formalities services",
      category: "Official / newcomer support",
      description:
        "Describes formalities support (permits, registration, BSN-related steps) available through IWCN for qualifying situations. Use it alongside Gemeente Groningen’s own moving and registration pages.",
      bestFor: "Mapping your admin route before you arrive",
      url: "https://iwcn.nl/our-services/formalities-services/",
      isOfficial: true,
    },
    {
      id: "iwcn-appointments",
      name: "IWCN – Appointments and requests",
      category: "Official / newcomer support",
      description:
        "How to request appointments and navigate formalities services with IWCN. Always confirm the latest process on IWCN’s site before you travel.",
      bestFor: "Booking and sequencing formalities appointments",
      url: "https://iwcn.nl/formalities-services-and-requesting-appointments/",
      isOfficial: true,
    },
    {
      id: "gemeente-groningen-moving",
      name: "Municipality of Groningen – Moving (English)",
      category: "Official / newcomer support",
      description:
        "English-language municipal guidance for moving to or within Groningen, including registration expectations when you come from abroad. Your local source for address registration rules and appointments.",
      bestFor: "First registration, address changes, local civil requirements",
      costNote: "Official municipal service",
      url: "https://gemeente.groningen.nl/en/moving-to-or-within-groningen",
      isOfficial: true,
    },
    {
      id: "gemeente-groningen-moving-nl",
      name: "Municipality of Groningen – Moving hub",
      category: "Official / newcomer support",
      description:
        "Municipal moving hub with links to scenarios such as moving to the Netherlands and local registration context.",
      bestFor: "Cross-checking topics tied to your move scenario",
      url: "https://gemeente.groningen.nl/en/moving",
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
  "Insurance": sharedInsuranceServices,
};

/** Flat list for CityHubTemplate + banking filter. */
export function getGroningenCityServices(categories?: string[]): CityServiceCard[] {
  const base = Object.values(groningenServicesByCategory).flat();
  const withIwcnExamples = [...base, ...groningenIwcnExampleCards];
  if (!categories?.length) return withIwcnExamples;
  return withIwcnExamples.filter((s) => categories.includes(s.category));
}

/**
 * The Hague city hub – service cards by category.
 * Used for official support, banking, housing, documents, insurance.
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const theHagueServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "the-hague-international-centre",
      name: "The Hague International Centre",
      category: "Official / newcomer support",
      description:
        "Part of the municipal newcomer ecosystem. Offers free services for internationals; helps with municipal registration, BSN, residence/work document collection, and newcomer guidance. Particularly relevant for highly skilled migrants, diplomats, researchers, graduates, start-ups, and family members in supported cases.",
      bestFor: "HSM, diplomats, researchers, families; registration and permit collection in one appointment for supported cases",
      costNote: "Free services",
      url: "https://www.thehagueinternationalcentre.nl/",
      isOfficial: true,
    },
    {
      id: "municipality-the-hague",
      name: "Municipality of The Hague – Moving and immigration",
      category: "Official / newcomer support",
      description:
        "Official BRP registration routes: first registration (EU/EEA/Swiss, residence permit, Dutch from abroad), re-registration, and highly skilled migrants/researchers.",
      bestFor: "First registration, re-registration, correct flow for your status",
      costNote: "Official municipal service",
      url: "https://www.denhaag.nl/en/moving-and-immigration/1st-brp-registration-for-eu-eea-and-swiss-nationals-coming-from-abroad-you-do-not-have-a-bsn/",
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

/** All The Hague services in a flat list for filtering by category. */
export function getTheHagueServices(categories?: string[]): CityServiceCard[] {
  const all = Object.values(theHagueServicesByCategory).flat();
  if (!categories?.length) return all;
  return all.filter((s) => categories.includes(s.category));
}

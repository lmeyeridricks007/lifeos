/**
 * Eindhoven city hub – service cards by category.
 * Used for official support, banking, housing, documents, insurance.
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const eindhovenServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "holland-expat-center-south",
      name: "Holland Expat Center South",
      category: "Official / newcomer support",
      description:
        "Non-profit governmental agency that helps international knowledge workers and their families settle in Brabant. Offers combined municipal registration and IND procedures in one appointment; BSN issued at the appointment if you live in Eindhoven, otherwise by post within 5 working days.",
      bestFor: "International knowledge workers, families; combined registration + IND in one visit",
      costNote: "Check service for current offer",
      url: "https://www.hollandexpatcenter.com/",
      isOfficial: true,
    },
    {
      id: "municipality-eindhoven",
      name: "Municipality of Eindhoven – Moving from abroad",
      category: "Official / newcomer support",
      description:
        "First registration from abroad: make an appointment and come to the counter at the Inwonersplein. English guidance on the city’s English portal; foreign students have a specific registration page.",
      bestFor: "First registration, foreign students, move-from-abroad",
      costNote: "Official municipal service",
      url: "https://www.eindhoven.nl/stad-en-wonen/verhuizen/verhuizen-vanuit-het-buitenland",
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

/** All Eindhoven services in a flat list for filtering by category. */
export function getEindhovenServices(categories?: string[]): CityServiceCard[] {
  const all = Object.values(eindhovenServicesByCategory).flat();
  if (!categories?.length) return all;
  return all.filter((s) => categories.includes(s.category));
}

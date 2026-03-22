/**
 * Amsterdam city hub – service cards by category.
 * Used for banking, official support, housing, documents, insurance.
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

export const amsterdamServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "in-amsterdam",
      name: "IN Amsterdam",
      category: "Official / newcomer support",
      description:
        "One-stop-shop for many international newcomers in the Amsterdam Area. Helps eligible newcomers with municipal registration, BSN, and immigration formalities. Especially relevant for EU citizens and highly skilled migrants in supported cases.",
      bestFor: "EU citizens, highly skilled migrants, first registration",
      costNote: "Free for eligible newcomers",
      url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/how-in-amsterdam-helps-international-newcomers/in-amsterdam-services-for-international-newcomers",
      isOfficial: true,
    },
    {
      id: "city-amsterdam-civil",
      name: "City of Amsterdam – Civil Affairs",
      category: "Official / newcomer support",
      description: "Municipal registration, address changes, and civil affairs. Book appointments for first registration or moving within Amsterdam.",
      bestFor: "Registration, BSN, address change",
      costNote: "Official municipal service",
      url: "https://www.amsterdam.nl/en/civil-affairs/",
      isOfficial: true,
    },
  ],
  "Banking / money": [
    {
      id: "bunq",
      name: "bunq",
      category: "Banking / money",
      description: "Digital bank with expat-friendly signup and multi-currency options. Often used by newcomers before or shortly after receiving a BSN.",
      bestFor: "Expats, digital-first banking",
      costNote: "Varies by plan",
      url: "https://www.bunq.com/",
      logo: { src: "https://www.google.com/s2/favicons?domain=bunq.com&sz=128", alt: "bunq" },
    },
    {
      id: "abn-amro",
      name: "ABN AMRO",
      category: "Banking / money",
      description: "Major Dutch bank with branches and online banking. Full-service accounts; requirements typically include ID and BSN.",
      bestFor: "Traditional banking, in-branch support",
      costNote: "Typical account fees apply",
      url: "https://www.abnamro.nl/en/personal/",
      logo: { src: "https://www.google.com/s2/favicons?domain=abnamro.nl&sz=128", alt: "ABN AMRO" },
    },
    {
      id: "ing",
      name: "ING",
      category: "Banking / money",
      description: "Large Dutch bank with strong digital offering. Common choice for salary and daily banking.",
      bestFor: "Salary account, iDEAL, daily use",
      costNote: "Typical account fees apply",
      url: "https://www.ing.nl/particulier/english/index.html",
      logo: { src: "https://www.google.com/s2/favicons?domain=ing.nl&sz=128", alt: "ING" },
    },
    {
      id: "wise",
      name: "Wise",
      category: "Banking / money",
      description: "International transfers and multi-currency. Useful for moving money to the Netherlands and holding euros; often used alongside a Dutch bank account.",
      bestFor: "International transfers, multicurrency",
      costNote: "Varies by transaction",
      url: "https://wise.com/",
      logo: { src: "https://www.google.com/s2/favicons?domain=wise.com&sz=128", alt: "Wise" },
    },
  ],
  "Housing / relocation": [
    {
      id: "housing-anywhere",
      name: "HousingAnywhere",
      category: "Housing / relocation",
      description: "Platform for mid-term rentals and accommodation search, often used by students and short-term relocators.",
      bestFor: "Mid-term rental, students",
      costNote: "Varies",
      url: "https://housinganywhere.com/",
      logo: { src: "https://www.google.com/s2/favicons?domain=housinganywhere.com&sz=128", alt: "HousingAnywhere" },
    },
  ],
  "Documents / translation": sharedDocumentsTranslationServices,
  "Insurance": sharedInsuranceServices,
};

/** All Amsterdam services in a flat list for filtering by category. */
export function getAmsterdamServices(categories?: string[]): CityServiceCard[] {
  const all = Object.values(amsterdamServicesByCategory).flat();
  if (!categories?.length) return all;
  return all.filter((s) => categories.includes(s.category));
}

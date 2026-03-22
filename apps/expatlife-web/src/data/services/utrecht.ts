/**
 * Utrecht city hub – service cards by category.
 * Used for official support, banking, housing, documents, insurance.
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

export const utrechtServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "utrecht-municipality-registration",
      name: "City of Utrecht – Registration",
      category: "Official / newcomer support",
      description:
        "Municipal registration for first registration (from abroad) and address changes. Registration in Utrecht requires an appointment; partner and/or children who need to be registered must attend as well.",
      bestFor: "First registration, address change, BSN",
      costNote: "Official municipal service",
      url: "https://www.utrecht.nl/city-of-utrecht/registration",
      isOfficial: true,
    },
    {
      id: "utrecht-international-center",
      name: "Utrecht International Center",
      category: "Official / newcomer support",
      description:
        "Specific registration path for international students. Students are told they need to register within 5 days after arrival in the Netherlands.",
      bestFor: "International students, structured newcomer support",
      costNote: "Check municipality for current offer",
      url: "https://www.utrecht.nl/city-of-utrecht/registration/registration-international-students",
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
      logo: { src: "https://www.google.com/s2/favicons?domain=bunq.com&sz=128", alt: "bunq" },
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
      logo: { src: "https://www.google.com/s2/favicons?domain=abnamro.nl&sz=128", alt: "ABN AMRO" },
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
      logo: { src: "https://www.google.com/s2/favicons?domain=ing.nl&sz=128", alt: "ING" },
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
      logo: { src: "https://www.google.com/s2/favicons?domain=wise.com&sz=128", alt: "Wise" },
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
      logo: { src: "https://www.google.com/s2/favicons?domain=housinganywhere.com&sz=128", alt: "HousingAnywhere" },
    },
  ],
  "Documents / translation": sharedDocumentsTranslationServices,
  "Insurance": sharedInsuranceServices,
};

/** All Utrecht services in a flat list for filtering by category. */
export function getUtrechtServices(categories?: string[]): CityServiceCard[] {
  const all = Object.values(utrechtServicesByCategory).flat();
  if (!categories?.length) return all;
  return all.filter((s) => categories.includes(s.category));
}

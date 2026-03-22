/**
 * Rotterdam city hub – service cards by category.
 * Used for official support, banking, and practical links.
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

export const rotterdamServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "rotterdam-international-center",
      name: "Rotterdam International Center",
      category: "Official / newcomer support",
      description:
        "Helps international newcomers get settled in Rotterdam. Supports highly skilled migrants and can assist with immigration-related formalities in supported cases.",
      bestFor: "Highly skilled migrants, international newcomers",
      costNote: "Official city service",
      url: "https://www.rotterdam.nl/en/rotterdam-international-center",
      isOfficial: true,
    },
    {
      id: "rotterdam-expat-centre",
      name: "Rotterdam Expat Centre",
      category: "Official / newcomer support",
      description:
        "Information and support for expats on formalities including immigration and BSN / Citizen Service Number. Referred to by the city for highly skilled migrants.",
      bestFor: "Expats, highly skilled migrants, BSN and immigration info",
      costNote: "Check service for current offer",
      url: "https://rotterdamexpatcentre.nl/expats/formalities/immigration/",
      isOfficial: true,
    },
    {
      id: "city-rotterdam-registration",
      name: "City of Rotterdam – First registration & moving",
      category: "Official / newcomer support",
      description:
        "Municipal first registration (from abroad) and reporting your move when relocating to Rotterdam. Leads to BSN and BRP registration.",
      bestFor: "First registration, address change, BSN",
      costNote: "Official municipal service",
      url: "https://www.rotterdam.nl/en/first-registration-in-the-netherlands",
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
  "Documents / translation": sharedDocumentsTranslationServices,
  "Insurance": sharedInsuranceServices,
};

/** All Rotterdam services in a flat list for filtering by category. */
export function getRotterdamServices(categories?: string[]): CityServiceCard[] {
  const all = Object.values(rotterdamServicesByCategory).flat();
  if (!categories?.length) return all;
  return all.filter((s) => categories.includes(s.category));
}

/**
 * Service cards for /netherlands/arnhem/: Gemeente Arnhem (first registration), Netherlands Worldwide checklist,
 * Lorentz Lyceum (school information for families), shared banking / housing / documents / insurance.
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/** Arnhem-focused information cards — not endorsements; verify scope on each site. */
export const arnhemRegionalInfoCards: CityServiceCard[] = [
  {
    id: "netherlands-worldwide-checklist",
    name: "Netherlands Worldwide – relocating to the Netherlands checklist",
    category: "National relocation context",
    description:
      "Government-backed checklist covering immigration and practical steps when relocating to the Netherlands — useful alongside your municipality’s first-registration page.",
    bestFor: "High-level national orientation before and after you pick a city",
    url: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
    isOfficial: true,
  },
  {
    id: "lorentz-lyceum",
    name: "Lorentz Lyceum (Arnhem)",
    category: "Education (information)",
    description:
      "Secondary school in Arnhem publishing orientation materials online. Families researching local schools should verify admissions, language of instruction, and any international or bilingual tracks directly with the school — we do not rank schools.",
    bestFor: "Families comparing education options in Arnhem",
    url: "https://lorentzlyceum.nl/",
    logo: { src: favicon("lorentzlyceum.nl"), alt: "Lorentz Lyceum" },
  },
  {
    id: "lorentz-schoolgids",
    name: "Lorentz Lyceum – school guide (digital)",
    category: "Education (information)",
    description:
      "Digital school guide published by Lorentz Lyceum — use as one reference point while you build your own shortlist and confirm requirements with schools and gemeente where needed.",
    bestFor: "Parents reviewing published school information",
    url: "https://lorentzlyceum.nl/portals/1/flippingbook/Schoolgids_2024_2025/index.html",
    logo: { src: favicon("lorentzlyceum.nl"), alt: "Lorentz Lyceum" },
  },
];

export const arnhemServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "gemeente-arnhem-eerste-inschrijving",
      name: "Municipality of Arnhem – First registration in the Netherlands",
      category: "Official / newcomer support",
      description:
        "Gemeente Arnhem explains first registration for people moving to the Netherlands from abroad: when to register, which documents to bring (including proof of address and identification), and that foreign civil documents may need legalisation or translation. Non-EU/EEA/Swiss residents may need to complete IND steps before municipal registration in some cases — confirm the live page for your situation.",
      bestFor: "Municipal registration timing, document list, and BSN context in Arnhem",
      costNote: "Official municipal information",
      url: "https://www.arnhem.nl/product/eerste-inschrijving-in-nederland/",
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

export function getArnhemCityServices(categories?: string[]): CityServiceCard[] {
  const base = Object.values(arnhemServicesByCategory).flat();
  const withRegional = [...base, ...arnhemRegionalInfoCards];
  if (!categories?.length) return withRegional;
  return withRegional.filter((s) => categories.includes(s.category));
}

/**
 * Service cards for /netherlands/tilburg/: Gemeente Tilburg (EN), International Center Tilburg,
 * Holland Expat Center (Brabant), Tilburg University practical page, shared banking / housing / documents.
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/** Brabant-wide and Tilburg-specific ecosystem cards — not endorsements; verify scope on each site. */
export const tilburgRegionalSupportCards: CityServiceCard[] = [
  {
    id: "holland-expat-center",
    name: "Holland Expat Center South",
    category: "Regional newcomer support (Brabant)",
    description:
      "Non-profit governmental agency helping international knowledge workers and families settle in Brabant; offers orientation and formalities support where applicable. Confirm eligibility and services on their live site.",
    bestFor: "Brabant immigration and settling-in procedures (eligible cases)",
    url: "https://www.hollandexpatcenter.com/",
    isOfficial: true,
  },
  {
    id: "brabant-international-expo",
    name: "Holland Expat Center – Brabant International Expo",
    category: "Regional newcomer support (Brabant)",
    description:
      "Regional expo / orientation resource listed under Holland Expat Center — useful for discovering Brabant-wide services and networks; check dates and relevance for your move.",
    bestFor: "Regional orientation and community discovery",
    url: "https://www.hollandexpatcenter.com/how-we-help/brabant-international-expo",
    isOfficial: true,
  },
  {
    id: "tilburg-international-club",
    name: "Tilburg International Club",
    category: "Community (Tilburg)",
    description:
      "Social and community organisation for internationals in Tilburg — complementary to ICT and official municipal channels, not a government service.",
    bestFor: "Social connections and club activities",
    url: "https://tilburginternationalclub.com/",
  },
  {
    id: "tilburg-university-moving",
    name: "Tilburg University – moving to Tilburg (practical matters)",
    category: "Education (information)",
    description:
      "Practical relocation notes from Tilburg University content — especially relevant for students and academics; confirm faculty-specific guidance on the main university site for your programme.",
    bestFor: "Students and staff linked to Tilburg University",
    url: "https://www.tilburguniversity.edu/research/humanities/graduate-school-humanities/practical-matters/moving-tilburg",
    logo: { src: favicon("tilburguniversity.edu"), alt: "Tilburg University" },
  },
];

export const tilburgServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "gemeente-tilburg-settling",
      name: "Municipality of Tilburg – Settling in the Netherlands",
      category: "Official / newcomer support",
      description:
        "English guidance from Gemeente Tilburg for newcomers, including registration expectations when you move from abroad — always confirm current wording and appointments on the live page.",
      bestFor: "Municipal registration and first steps in Tilburg",
      costNote: "Official municipal information",
      url: "https://www.tilburg.nl/english/settling-in-the-netherlands/",
      isOfficial: true,
    },
    {
      id: "gemeente-tilburg-address",
      name: "Municipality of Tilburg – Changing address",
      category: "Official / newcomer support",
      description:
        "English-language guidance when your address within Tilburg or the region changes — relevant after your first registration and for keeping BRP data accurate.",
      bestFor: "Address updates and municipal follow-up",
      url: "https://www.tilburg.nl/english/changing-address/",
      isOfficial: true,
    },
    {
      id: "infopunt-integration-tilburg",
      name: "Gemeente Tilburg – Integration in Tilburg (Infopunt Midden-Brabant)",
      category: "Official / newcomer support",
      description:
        "Municipal / regional integration information via Infopunt Midden-Brabant — use alongside ICT and Holland Expat Center when building your local picture.",
      bestFor: "Integration topics and official regional context",
      url: "https://www.tilburg.nl/gemeente/actueel/infopunt-midden-brabant/integration-in-tilburg/",
      isOfficial: true,
    },
    {
      id: "infopunt-healthcare-tilburg",
      name: "Gemeente Tilburg – Healthcare in Tilburg",
      category: "Official / newcomer support",
      description:
        "Local healthcare orientation from the municipality — pair with national health insurance rules and our health insurance guide.",
      bestFor: "Healthcare navigation after arrival",
      url: "https://www.tilburg.nl/gemeente/actueel/infopunt-midden-brabant/healthcare-in-tilburg/",
      isOfficial: true,
    },
    {
      id: "international-center-tilburg",
      name: "International Center Tilburg",
      category: "Official / newcomer support",
      description:
        "Community-driven meeting place for internationals in Tilburg and Midden-Brabant: Dutch courses, events, practical support, and signposting to trusted resources — not a substitute for gemeente or IND decisions.",
      bestFor: "Community, language learning, events, local orientation",
      url: "https://www.ictilburg.com/",
    },
    {
      id: "ictilburg-join-community",
      name: "International Center Tilburg – Join the community",
      category: "Official / newcomer support",
      description:
        "Entry point to connect with ICT programmes and community life after arrival.",
      bestFor: "Getting involved with Tilburg’s international community",
      url: "https://www.ictilburg.com/join-community",
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

export function getTilburgCityServices(categories?: string[]): CityServiceCard[] {
  const base = Object.values(tilburgServicesByCategory).flat();
  const withRegional = [...base, ...tilburgRegionalSupportCards];
  if (!categories?.length) return withRegional;
  return withRegional.filter((s) => categories.includes(s.category));
}

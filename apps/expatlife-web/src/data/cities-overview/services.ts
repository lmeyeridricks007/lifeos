/**
 * Services for the Netherlands cities overview page.
 * Reuses CityServiceCard for consistency with city hub pages.
 * Insurance and Documents/translation use shared data (real companies, costs, logos).
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const citiesOverviewServicesByCategory: Record<string, CityServiceCard[]> = {
  "Banking / money": [
    { id: "bunq", name: "bunq", category: "Banking / money", description: "Digital bank with expat-friendly signup and multi-currency options.", bestFor: "Expats, digital-first banking", costNote: "Varies by plan", url: "https://www.bunq.com/", logo: { src: favicon("bunq.com"), alt: "bunq" } },
    { id: "abn-amro", name: "ABN AMRO", category: "Banking / money", description: "Major Dutch bank with branches and online banking.", bestFor: "Traditional banking, in-branch support", costNote: "Typical account fees apply", url: "https://www.abnamro.nl/en/personal/", logo: { src: favicon("abnamro.nl"), alt: "ABN AMRO" } },
    { id: "ing", name: "ING", category: "Banking / money", description: "Large Dutch bank with strong digital offering.", bestFor: "Salary account, iDEAL, daily use", costNote: "Typical account fees apply", url: "https://www.ing.nl/particulier/english/index.html", logo: { src: favicon("ing.nl"), alt: "ING" } },
    { id: "wise", name: "Wise", category: "Banking / money", description: "International transfers and multi-currency.", bestFor: "International transfers, multicurrency", costNote: "Varies by transaction", url: "https://wise.com/", logo: { src: favicon("wise.com"), alt: "Wise" } },
  ],
  "Housing / relocation": [
    { id: "housing-anywhere", name: "HousingAnywhere", category: "Housing / relocation", description: "Platform for mid-term rentals and accommodation search.", bestFor: "Mid-term rental, students", costNote: "Varies", url: "https://housinganywhere.com/", logo: { src: favicon("housinganywhere.com"), alt: "HousingAnywhere" } },
  ],
  "Documents / translation": sharedDocumentsTranslationServices,
  "Insurance": sharedInsuranceServices,
  "Expat support / setup": [
    { id: "in-amsterdam", name: "IN Amsterdam", category: "Expat support / setup", description: "Official expat centre; accelerated procedures for highly skilled migrants.", bestFor: "Amsterdam area; HSM, EU citizens", costNote: "Free for eligible newcomers", url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam", isOfficial: true },
    { id: "ric", name: "Rotterdam International Center", category: "Expat support / setup", description: "Helps international newcomers settle in Rotterdam.", bestFor: "Rotterdam; international newcomers", costNote: "Official city service", url: "https://www.rotterdam.nl/en/rotterdam-international-center", isOfficial: true },
    { id: "uic", name: "Utrecht International Center", category: "Expat support / setup", description: "Residence permit, municipal registration, practical information.", bestFor: "Utrecht; students, knowledge workers", costNote: "Check municipality", url: "https://www.utrecht.nl/city-of-utrecht/registration/registration-international-students", isOfficial: true },
    { id: "thic", name: "The Hague International Centre", category: "Expat support / setup", description: "Municipal free services for newcomers.", bestFor: "The Hague; international newcomers", costNote: "Free", url: "https://www.thehagueinternationalcentre.nl/", isOfficial: true },
    { id: "hecs", name: "Holland Expat Center South", category: "Expat support / setup", description: "Governmental agency for international knowledge workers in Brabant.", bestFor: "Eindhoven region; knowledge workers, families", costNote: "Non-profit governmental", url: "https://www.hollandalumni.nl/holland-expat-center-south", isOfficial: true },
  ],
};

export function getCitiesOverviewServices(categories?: string[]): CityServiceCard[] {
  const all = Object.values(citiesOverviewServicesByCategory).flat();
  if (!categories?.length) return all;
  return all.filter((s) => categories.includes(s.category));
}

/**
 * Service cards for /netherlands/amstelveen/: Gemeente Amstelveen, IN Amsterdam / I amsterdam,
 * international school profiles, shared Amsterdam Area banking & housing, and I amsterdam partner examples.
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import { getAmsterdamServices } from "@/src/data/services/amsterdam";
import { haarlemAmsterdamAreaPartnerCards } from "@/src/data/services/haarlem-city-services";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const amstelveenOfficialAndSchoolCards: CityServiceCard[] = [
  {
    id: "amstelveen-first-registration",
    name: "Gemeente Amstelveen – First registration in the Netherlands",
    category: "Official / newcomer support",
    description:
      "Official municipal guidance for registering in the Netherlands when you will live at an Amstelveen address — including the first-time registration scenario when you expect to stay at least four months in the next six months. Follow the gemeente’s current checklist for appointments and documents.",
    bestFor: "First BRP registration from abroad, address in Amstelveen",
    costNote: "Official municipal service",
    url: "https://www.amstelveen.nl/voor-het-eerst-inschrijven-nederland",
    isOfficial: true,
  },
  {
    id: "in-amsterdam-living-hub",
    name: "I amsterdam – Living in the Amsterdam Area",
    category: "Official / newcomer support",
    description:
      "Regional living overview from I amsterdam, including housing and practical context for places such as Amstelveen within the wider Amsterdam Area.",
    bestFor: "Orientation before you choose a neighbourhood",
    url: "https://www.iamsterdam.com/en/live-work-study/living",
    isOfficial: true,
  },
  {
    id: "iamsterdam-amstelveen-where-to-live",
    name: "I amsterdam – Where to live: Amstelveen",
    category: "Official / newcomer support",
    description:
      "I amsterdam’s area guide context for Amstelveen as an Amsterdam Area place to live — useful alongside gemeente pages and your own housing search.",
    bestFor: "Understanding Amstelveen in regional context",
    url: "https://www.iamsterdam.com/en/live-work-study/living/housing/where-to-live/amstelveen",
    isOfficial: true,
  },
  {
    id: "isa-iamsterdam-profile",
    name: "The International School of Amsterdam",
    category: "Schools & education (I amsterdam profiles)",
    description:
      "Education-provider profile on I amsterdam — a common reference point for international families in the Amsterdam Area. Confirm admissions, fees, and availability directly with the school.",
    bestFor: "International families comparing schools",
    url: "https://www.iamsterdam.com/en/live-work-study/schools-universities-and-education-providers/all/education-providers/the-international-school-of-amsterdam",
    logo: { src: favicon("isa.nl"), alt: "The International School of Amsterdam" },
  },
  {
    id: "amstelland-is-iamsterdam-profile",
    name: "Amstelland International School",
    category: "Schools & education (I amsterdam profiles)",
    description:
      "Education-provider profile on I amsterdam. Use it as a starting point alongside school open days and admissions teams — not a substitute for direct application advice.",
    bestFor: "International families in Amstelveen / Amsterdam Area",
    url: "https://www.iamsterdam.com/en/live-work-study/schools-universities-and-education-providers/all/education-providers/amstelland-international-school",
  },
];

export function getAmstelveenCityServices(categories?: string[]): CityServiceCard[] {
  const base = getAmsterdamServices().filter((s) => s.id !== "city-amsterdam-civil");
  const flat = [
    ...amstelveenOfficialAndSchoolCards,
    ...base,
    ...haarlemAmsterdamAreaPartnerCards,
  ];
  if (!categories?.length) return flat;
  return flat.filter((s) => categories.includes(s.category));
}

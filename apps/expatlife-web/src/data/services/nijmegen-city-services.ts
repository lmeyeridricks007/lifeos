/**
 * Service cards for /netherlands/nijmegen/: Gemeente Nijmegen (English moving / RNI), Lifeport Welcome Center,
 * Radboud University news context, shared banking / housing / documents / insurance.
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/** Regional newcomer and knowledge-ecosystem cards — not endorsements; verify scope on each site. */
export const nijmegenRegionalInfoCards: CityServiceCard[] = [
  {
    id: "lifeport-welcome-center",
    name: "Lifeport Welcome Center for expats",
    category: "Regional newcomer support (Lifeport)",
    description:
      "Regional welcome centre for international knowledge workers, students, employers, and family members. Lifeport describes a combined offer of government services (municipality and IND in the regional model) alongside welcome activities, family support, and social programming — confirm opening hours, eligibility, and which procedures you can complete on site via their live pages.",
    bestFor: "International talent settling in the Arnhem–Nijmegen–Wageningen knowledge region",
    url: "https://lifeport.nl/lifeport-welcome-center-for-expats/",
    logo: { src: favicon("lifeport.nl"), alt: "Lifeport" },
  },
  {
    id: "lifeport-nieuw-dienstverleningspunt",
    name: "Lifeport – regional service point for international talent (announcement)",
    category: "Regional newcomer support (Lifeport)",
    description:
      "Lifeport article on the regional service-point model for internationals — useful background when comparing formalities support in the east with Randstad expat desks. Always cross-check current services with the main Welcome Center page.",
    bestFor: "Understanding how regional government and welcome services are organised",
    url: "https://lifeport.nl/lifeport-welcome-center-nieuw-dienstverleningspunt-voor-internationaal-talent-in-de-regio/",
    logo: { src: favicon("lifeport.nl"), alt: "Lifeport" },
  },
  {
    id: "lifeport-welcome-center-tag",
    name: "Lifeport – Lifeport Welcome Center (articles & updates)",
    category: "Regional newcomer support (Lifeport)",
    description:
      "English-tagged articles from Lifeport about the Welcome Center and related regional topics — complementary to municipal pages, not a substitute for IND or gemeente decisions.",
    bestFor: "Ongoing regional orientation and news",
    url: "https://lifeport.nl/en/tag/lifeport-welcome-center/",
    logo: { src: favicon("lifeport.nl"), alt: "Lifeport" },
  },
  {
    id: "ru-lifeport-opens",
    name: "Radboud University – Lifeport Welcome Center opens (news)",
    category: "Education & regional context (information)",
    description:
      "Radboud University news article on the official opening of the Lifeport Welcome Center — contextualises the regional knowledge-worker and student audience; does not replace official immigration or municipal instructions.",
    bestFor: "Students and staff linked to Radboud / regional research ecosystem",
    url: "https://www.ru.nl/en/about-us/news/lifeport-welcome-center-officially-opens-its-doors-to-international-knowledge-workers-and-students",
    logo: { src: favicon("ru.nl"), alt: "Radboud University" },
  },
  {
    id: "ru-service-point-talent",
    name: "Radboud University – service point for international talent in the region (news)",
    category: "Education & regional context (information)",
    description:
      "Radboud news on the regional service point for international talent — use alongside Lifeport and gemeente English pages to understand how support is framed locally.",
    bestFor: "Researchers and knowledge workers comparing regional support options",
    url: "https://www.ru.nl/en/about-us/news/new-service-point-for-international-talent-in-the-region",
    logo: { src: favicon("ru.nl"), alt: "Radboud University" },
  },
  {
    id: "netherlands-worldwide-checklist",
    name: "Netherlands Worldwide – relocating to the Netherlands checklist",
    category: "National relocation context",
    description:
      "Government-backed checklist covering immigration and practical steps when relocating to the Netherlands — use next to Gemeente Nijmegen’s English moving pages.",
    bestFor: "National orientation before and after you choose Nijmegen",
    url: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
    isOfficial: true,
  },
];

export const nijmegenServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "gemeente-nijmegen-moving-abroad",
      name: "Municipality of Nijmegen – Moving from abroad (English)",
      category: "Official / newcomer support",
      description:
        "Gemeente Nijmegen explains in English what to do when you move to Nijmegen from abroad, including that you must register in person within five working days by appointment. Re-read the live page for document lists, booking, and how this interacts with national IND rules.",
      bestFor: "First municipal registration and timing after arrival",
      costNote: "Official municipal information",
      url: "https://www.nijmegen.nl/languages/english/moving-from-abroad/",
      isOfficial: true,
    },
    {
      id: "gemeente-nijmegen-rni",
      name: "Municipality of Nijmegen – Registration of non-residents / RNI (English)",
      category: "Official / newcomer support",
      description:
        "English guidance on RNI registration when you stay in the Netherlands for less than four months or live abroad while studying or working in the Netherlands — a different path from full municipal registration; confirm which route applies to you on the live gemeente page.",
      bestFor: "Short stays, cross-border commuters, and specific study/work abroad situations",
      costNote: "Official municipal information",
      url: "https://www.nijmegen.nl/languages/english/registration-non-residents/",
      isOfficial: true,
    },
    {
      id: "gemeente-nijmegen-english",
      name: "Municipality of Nijmegen – English information portal",
      category: "Official / newcomer support",
      description:
        "Entry point to Nijmegen’s English-language municipal topics — use alongside moving-from-abroad and RNI pages for a complete picture.",
      bestFor: "Navigating gemeente services in English",
      url: "https://www.nijmegen.nl/languages/english/",
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

export function getNijmegenCityServices(categories?: string[]): CityServiceCard[] {
  const base = Object.values(nijmegenServicesByCategory).flat();
  const withRegional = [...base, ...nijmegenRegionalInfoCards];
  if (!categories?.length) return withRegional;
  return withRegional.filter((s) => categories.includes(s.category));
}

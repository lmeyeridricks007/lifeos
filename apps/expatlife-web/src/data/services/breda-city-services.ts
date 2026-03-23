/**
 * Service cards for /netherlands/breda/: Gemeente Breda (EN), Breda Internationals, Holland Expat Center South,
 * shared banking / housing / documents, and education-oriented references (not endorsements).
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/** Regional one-stop referenced by Breda Internationals for immigration procedures — verify scope for your case. */
export const bredaRegionalSupportCards: CityServiceCard[] = [
  {
    id: "holland-expat-center-south",
    name: "Holland Expat Center South",
    category: "Regional newcomer support (Brabant)",
    description:
      "Non-profit governmental one-stop shop for international knowledge workers and families in Brabant; Breda Internationals references it for free support with immigration-related procedures where applicable. Confirm eligibility and services on their site.",
    bestFor: "Immigration formalities orientation in the Brabant / southern NL context",
    url: "https://www.hollandalumni.nl/holland-expat-center-south",
    isOfficial: true,
  },
  {
    id: "buas-international",
    name: "Breda University of Applied Sciences (BUas)",
    category: "Education (information)",
    description:
      "Major applied-sciences university in Breda; relevant when your move is study- or institution-driven. Use the official international pages for programmes, admissions, and practical student topics — not a relocation provider.",
    bestFor: "International students and staff linked to BUas",
    url: "https://www.buas.nl/en",
    logo: { src: favicon("buas.nl"), alt: "BUas" },
  },
  {
    id: "avans-international",
    name: "Avans University of Applied Sciences",
    category: "Education (information)",
    description:
      "Avans has a strong presence in Breda among other locations; internationals often cross paths with it for study routes. Confirm campus and programme location on Avans’ official international pages.",
    bestFor: "Students considering Avans programmes based in Breda",
    url: "https://www.avans.nl/international",
    logo: { src: favicon("avans.nl"), alt: "Avans" },
  },
  {
    id: "international-school-breda",
    name: "International School Breda",
    category: "Education (information)",
    description:
      "Profiled on Breda Internationals as part of the city’s education landscape for international families. Admissions, fees, and curriculum are school-specific — verify directly.",
    bestFor: "Families comparing international schooling in Breda",
    url: "https://bredainternationals.com/education/international-school-breda/",
  },
];

export const bredaServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "gemeente-breda-welcome",
      name: "Municipality of Breda – Welcome to Breda",
      category: "Official / newcomer support",
      description:
        "English-language newcomer entry from Gemeente Breda — practical orientation when you are settling in the city alongside national registration and insurance rules.",
      bestFor: "First steps and municipal context in Breda",
      costNote: "Official municipal information",
      url: "https://www.breda.nl/en/welcome-breda-you-are-now-bredanaar",
      isOfficial: true,
    },
    {
      id: "gemeente-breda-main",
      name: "Municipality of Breda (English)",
      category: "Official / newcomer support",
      description:
        "English hub for municipal services and local civil topics — pair with our Netherlands-wide registration and BSN guides.",
      bestFor: "Local government services and procedures",
      url: "https://www.breda.nl/en/municipality-breda",
      isOfficial: true,
    },
    {
      id: "breda-internationals",
      name: "Breda Internationals",
      category: "Official / newcomer support",
      description:
        "Practical information and community platform for internationals in Breda: arrival, housing, healthcare, education, transport, leisure, business, and expat guides — useful alongside official gemeente and national sources.",
      bestFor: "Local orientation, events, and practical guides",
      url: "https://bredainternationals.com/",
    },
    {
      id: "breda-internationals-practical",
      name: "Breda Internationals – Practical information",
      category: "Official / newcomer support",
      description:
        "Structured practical topics for daily life in Breda; use to complement municipal pages and our service hubs.",
      bestFor: "Topic-by-topic settling-in checklist",
      url: "https://bredainternationals.com/practical-information/",
    },
    {
      id: "breda-internationals-arrival",
      name: "Breda Internationals – Arrival",
      category: "Official / newcomer support",
      description:
        "Arrival-focused guidance for internationals — useful in the first weeks with housing, registration context, and local tips.",
      bestFor: "First days and weeks in Breda",
      url: "https://bredainternationals.com/arrival/",
    },
    {
      id: "breda-internationals-guides",
      name: "Breda Internationals – Expat guides",
      category: "Official / newcomer support",
      description:
        "Editorial guides aimed at expats living in or moving to Breda — compare with official rules when decisions matter.",
      bestFor: "Readable local context beyond dry checklists",
      url: "https://bredainternationals.com/expat-guides/",
    },
    {
      id: "breda-internationals-housing",
      name: "Breda Internationals – Housing",
      category: "Official / newcomer support",
      description:
        "Local housing orientation for internationals — still compare listings, contracts, and registration rules yourself.",
      bestFor: "Renting and living-area orientation in Breda",
      url: "https://bredainternationals.com/housing/",
    },
    {
      id: "breda-internationals-buy-house",
      name: "Breda Internationals – Buy a house",
      category: "Official / newcomer support",
      description:
        "Introduction to buying in the Netherlands from a Breda-focused site — pair with mortgage advisors and notary advice for your situation.",
      bestFor: "Purchase pathway orientation",
      url: "https://bredainternationals.com/buy-a-house/",
    },
    {
      id: "breda-internationals-healthcare",
      name: "Breda Internationals – Healthcare",
      category: "Official / newcomer support",
      description:
        "Local healthcare navigation context — mandatory Dutch basic insurance rules remain national; see Government.nl and our health insurance guide.",
      bestFor: "GP, insurance, and care system orientation",
      url: "https://bredainternationals.com/healthcare/",
    },
    {
      id: "breda-internationals-education",
      name: "Breda Internationals – Education",
      category: "Official / newcomer support",
      description:
        "Overview of education options for families and students in Breda, including links to international schooling topics.",
      bestFor: "School research for children and students",
      url: "https://bredainternationals.com/education/",
    },
    {
      id: "breda-internationals-business",
      name: "Breda Internationals – Business",
      category: "Official / newcomer support",
      description:
        "Business and entrepreneurship orientation for internationals in Breda — confirm permits, KvK, and tax obligations with official bodies and advisors.",
      bestFor: "Founders and self-employed newcomers",
      url: "https://bredainternationals.com/business/",
    },
    {
      id: "breda-internationals-events",
      name: "Breda Internationals – Events",
      category: "Official / newcomer support",
      description:
        "Community events calendar — helpful for meeting people and learning practical tips after arrival.",
      bestFor: "Networking and social integration",
      url: "https://bredainternationals.com/events/",
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

export function getBredaCityServices(categories?: string[]): CityServiceCard[] {
  const base = Object.values(bredaServicesByCategory).flat();
  const withRegional = [...base, ...bredaRegionalSupportCards];
  if (!categories?.length) return withRegional;
  return withRegional.filter((s) => categories.includes(s.category));
}

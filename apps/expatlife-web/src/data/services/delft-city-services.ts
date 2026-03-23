/**
 * Service cards for /netherlands/delft/: Gemeente Delft, The Hague International Centre (regional partner),
 * national banking / housing platforms, and THIC-listed provider examples (not endorsements).
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/** Listed on The Hague International Centre partner pages — compare scope and fees yourself. */
export const delftThicPartnerExampleCards: CityServiceCard[] = [
  {
    id: "thic-service-providers-hub",
    name: "The Hague International Centre – Service providers",
    category: "THIC ecosystem (directory)",
    description:
      "Directory of housing, relocation, and other service providers connected to the regional newcomer ecosystem. Delft is among the partner municipalities supported by The Hague International Centre alongside The Hague itself.",
    bestFor: "Shortlisting regional providers to contact directly",
    url: "https://www.thehagueinternationalcentre.nl/service-providers",
    isOfficial: true,
  },
  {
    id: "thic-corporate-housing-living",
    name: "Corporate Housing Living",
    category: "THIC ecosystem (housing example)",
    description:
      "Housing partner profile on The Hague International Centre’s site. Relevant when you need furnished, corporate, or assisted rental routes in the wider region — confirm whether listings fit Delft and your timeline.",
    bestFor: "Corporate or assisted housing search (verify coverage)",
    url: "https://www.thehagueinternationalcentre.nl/partners/housing/corporate-housing-living",
  },
  {
    id: "thic-eurohome",
    name: "Eurohome Relocation Services",
    category: "THIC ecosystem (relocation example)",
    description:
      "Relocation services partner listed by The Hague International Centre. Useful for comparing destination support packages — not a substitute for reading your own contract terms.",
    bestFor: "Relocation orientation and quotes",
    url: "https://www.thehagueinternationalcentre.nl/partners/relocation-services/eurohome-relocation-services",
  },
  {
    id: "thic-rsh",
    name: "RSH Relocation and Immigration Services",
    category: "THIC ecosystem (relocation example)",
    description:
      "Listed on The Hague International Centre for relocation and immigration support. Check what they cover for Delft municipality steps versus permit advice.",
    bestFor: "Immigration + relocation bundles (verify scope)",
    url: "https://www.thehagueinternationalcentre.nl/partners/relocation-services/rsh-relocation-and-immigration-services",
  },
  {
    id: "thic-relocaid",
    name: "RelocAid",
    category: "THIC ecosystem (relocation example)",
    description:
      "Destination and settling-in support as listed on The Hague International Centre. Compare with other partners before you commit.",
    bestFor: "Settling-in support (compare quotes)",
    url: "https://www.thehagueinternationalcentre.nl/partners/relocation-services/relocaid",
  },
  {
    id: "thic-jimble",
    name: "Jimble",
    category: "THIC ecosystem (relocation example)",
    description:
      "Destination services provider listed under The Hague International Centre relocation partners. Often used for orientation-style support — confirm deliverables in writing.",
    bestFor: "Destination services (compare offerings)",
    url: "https://www.thehagueinternationalcentre.nl/partners/relocation-services/jimble-destination-service-provider",
    logo: { src: favicon("jimble.nl"), alt: "Jimble" },
  },
  {
    id: "thic-de-gruijter",
    name: "Royal De Gruijter & Co.",
    category: "THIC ecosystem (relocation example)",
    description:
      "Relocation partner listed on The Hague International Centre. Relevant for household moves and destination support when you need a full-service provider.",
    bestFor: "Full-service relocation (request quote)",
    url: "https://www.thehagueinternationalcentre.nl/partners/relocation-services/royal-de-gruijter-co",
  },
  {
    id: "thic-access",
    name: "ACCESS",
    category: "THIC ecosystem (community example)",
    description:
      "Community and information support for internationals, listed on The Hague International Centre. Often complements (rather than replaces) formal relocation agencies.",
    bestFor: "Information, community, referrals",
    url: "https://www.thehagueinternationalcentre.nl/partners/relocation-services/access",
    logo: { src: favicon("access-nl.org"), alt: "ACCESS" },
  },
];

export const delftServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "delft-moving-abroad",
      name: "Municipality of Delft – Moving to Delft from abroad",
      category: "Official / newcomer support",
      description:
        "English guidance for settling in Delft when you arrive from another country, including registration expectations when you stay at least four months. Follow the gemeente’s current checklist for appointments and documents.",
      bestFor: "First registration, address change, move-from-abroad",
      costNote: "Official municipal service",
      url: "https://www.delft.nl/en/moving-delft-abroad",
      isOfficial: true,
    },
    {
      id: "delft-official-matters",
      name: "Municipality of Delft – Official matters",
      category: "Official / newcomer support",
      description:
        "English hub for practical municipal topics such as registration, DigiD-related context, and other civil services. Use it alongside the moving-from-abroad pages for your situation.",
      bestFor: "Mapping gemeente tasks after arrival",
      url: "https://www.delft.nl/en/official-matters",
      isOfficial: true,
    },
    {
      id: "delft-municipal-services",
      name: "Municipality of Delft – Municipal services (English)",
      category: "Official / newcomer support",
      description:
        "Overview entry point for Delft’s English-language municipal information, including links relevant to new residents.",
      bestFor: "Finding the right counter or online service",
      url: "https://www.delft.nl/en/municipal-services",
      isOfficial: true,
    },
    {
      id: "delft-immigration-procedure",
      name: "Municipality of Delft – Immigration procedure",
      category: "Official / newcomer support",
      description:
        "Municipal context for immigration-related steps where the city is involved. Pair with IND and employer guidance for permit routes.",
      bestFor: "Understanding gemeente-side immigration touchpoints",
      url: "https://www.delft.nl/en/immigration-procedure",
      isOfficial: true,
    },
    {
      id: "the-hague-international-centre-delft-region",
      name: "The Hague International Centre",
      category: "Official / newcomer support",
      description:
        "Regional newcomer centre that works with partner municipalities including Delft. Supports work, live, and study journeys for internationals in the area — check eligibility, services, and appointment routes on their site.",
      bestFor: "Regional registration support, student routes, HSM where eligible",
      costNote: "Free services for eligible newcomers (see THIC site)",
      url: "https://www.thehagueinternationalcentre.nl/",
      isOfficial: true,
    },
    {
      id: "delft-studying",
      name: "Municipality of Delft – Studying in Delft",
      category: "Official / newcomer support",
      description:
        "Official municipal orientation for international students and study-related practical topics in Delft.",
      bestFor: "Students comparing city and gemeente expectations",
      url: "https://www.delft.nl/en/studying-delft",
      isOfficial: true,
    },
    {
      id: "delft-student-housing",
      name: "Municipality of Delft – Student housing",
      category: "Official / newcomer support",
      description:
        "Municipal guidance on student housing; many students interact with DUWO as a major student-housing organisation in Delft — confirm allocation rules with your institution and DUWO directly.",
      bestFor: "Student housing orientation",
      url: "https://www.delft.nl/en/student-housing",
      isOfficial: true,
    },
    {
      id: "delft-knowledge-migrants",
      name: "Municipality of Delft – Knowledge migrants",
      category: "Official / newcomer support",
      description:
        "English pages aimed at highly skilled migrants and knowledge workers settling in Delft. Use with THIC and employer immigration support where applicable.",
      bestFor: "HSM / knowledge workers new to Delft",
      url: "https://www.delft.nl/en/knowledge-migrants",
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

export function getDelftCityServices(categories?: string[]): CityServiceCard[] {
  const base = Object.values(delftServicesByCategory).flat();
  const withThic = [...base, ...delftThicPartnerExampleCards];
  if (!categories?.length) return withThic;
  return withThic.filter((s) => categories.includes(s.category));
}

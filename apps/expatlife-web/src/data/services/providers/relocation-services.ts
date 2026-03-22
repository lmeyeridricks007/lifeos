/**
 * Relocation services provider records for the top-level relocation-services hub.
 * Broader set: core relocation agencies plus providers from trusted expat-centre ecosystems
 * (Packimpex, Eurohome, Royal De Gruijter, Utility Direct). Same shape as RelocationProviderRecord.
 * Run scripts/fetch-relocation-agencies.ts (or a dedicated relocation-services script) to refresh.
 */

import type { RelocationProviderRecord } from "@/src/lib/service-category/types";
import { relocationAgenciesProviders } from "@/src/data/services/providers/relocation-agencies";

export const RELOCATION_SERVICES_LAST_CHECKED = "2026-03-11";
export const RELOCATION_SERVICES_SOURCE_MODEL =
  "Trusted expat-centre / public-support ecosystems";

const additionalProviders: RelocationProviderRecord[] = [
  {
    slug: "packimpex",
    name: "Packimpex",
    providerUrl: "https://www.packimpex.com",
    logoUrl: "https://logo.clearbit.com/packimpex.com",
    sourceEcosystems: ["IN Amsterdam"],
    cityRelevance: ["Amsterdam", "Region Amsterdam", "Netherlands"],
    shortDescription:
      "Relocation and moving services including immigration, housing, tax, and settling-in support for internationals.",
    servicesOrProducts: [
      "Immigration and housing support",
      "Tax and settling-in",
      "Moving and relocation coordination",
    ],
    serviceTags: ["relocation", "housing", "immigration", "tax", "settling in"],
    typicalCost: "Varies by scope. Check directly for quote.",
    pros: [
      "Immigration, housing, tax and settling-in in one place",
      "Moving and relocation coordination",
      "Amsterdam and Netherlands coverage",
    ],
    cons: ["Pricing not published; request a quote", "Confirm scope in writing"],
    whoShouldChoose: "Expats who want combined immigration, housing, tax and settling-in support, especially in the Amsterdam area.",
    isOfficial: false,
    sourcePages: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/packimpex",
    ],
    lastChecked: RELOCATION_SERVICES_LAST_CHECKED,
  },
  {
    slug: "eurohome-relocation-services",
    name: "Eurohome Relocation Services",
    providerUrl: "https://www.eurohome.nl",
    logoUrl: "https://logo.clearbit.com/eurohome.nl",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    shortDescription:
      "Home finding, immigration, school search, moving, and local registration support for internationals and families.",
    servicesOrProducts: [
      "Home finding",
      "Immigration coordination",
      "School search",
      "Moving and local registration",
    ],
    serviceTags: ["relocation", "housing", "immigration", "family support", "school search"],
    typicalCost: "Packages vary. Confirm scope and quote with provider.",
    pros: [
      "Home finding, immigration and school search",
      "Moving and local registration",
      "Family-focused; The Hague region",
    ],
    cons: ["The Hague–focused; check coverage elsewhere", "Quote required for pricing"],
    whoShouldChoose: "Families moving to The Hague who need home finding, school search and immigration in one package.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/eurohome-relocation-services",
    ],
    lastChecked: RELOCATION_SERVICES_LAST_CHECKED,
  },
  {
    slug: "royal-de-gruijter-co",
    name: "Royal De Gruijter & Co.",
    providerUrl: "https://www.royaldegruijter.com",
    logoUrl: "https://logo.clearbit.com/royaldegruijter.com",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    shortDescription:
      "Relocation and moving services for internationals and families in the The Hague region.",
    servicesOrProducts: [
      "Relocation and moving",
      "Housing and registration support",
    ],
    serviceTags: ["relocation", "housing", "moving", "family support"],
    typicalCost: "Check directly for scope and pricing.",
    pros: [
      "Relocation and moving in one place",
      "Housing and registration support",
      "The Hague region experience",
    ],
    cons: ["Pricing not published; request quote", "Region-focused"],
    whoShouldChoose: "Expats and families relocating to The Hague who want moving and housing support from a local provider.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/royal-de-gruijter-co",
    ],
    lastChecked: RELOCATION_SERVICES_LAST_CHECKED,
  },
  {
    slug: "utility-direct",
    name: "Utility Direct",
    providerUrl: "https://www.utilitydirect.nl",
    logoUrl: "https://logo.clearbit.com/utilitydirect.nl",
    sourceEcosystems: ["Rotterdam Expat Centre"],
    cityRelevance: ["Rotterdam", "Region Rotterdam"],
    shortDescription:
      "Utility and practical setup support for expats; often used alongside relocation and housing services.",
    servicesOrProducts: [
      "Utility setup",
      "Practical settling-in",
    ],
    serviceTags: ["utilities", "settling in", "expat support"],
    typicalCost: "Check directly.",
    pros: [
      "Utility setup and practical settling-in",
      "Often used alongside relocation and housing services",
      "Rotterdam expat centre partner",
    ],
    cons: ["Focused on utilities and practical setup; not full relocation", "Pricing on request"],
    whoShouldChoose: "Expats who need utility and practical setup support, often in combination with another relocation or housing provider.",
    isOfficial: false,
    sourcePages: ["https://rotterdamexpatcentre.nl/location/utility-direct/"],
    lastChecked: RELOCATION_SERVICES_LAST_CHECKED,
  },
];

export const relocationServicesProviders: RelocationProviderRecord[] = [
  ...relocationAgenciesProviders,
  ...additionalProviders,
];

export const relocationServicesMetadata = {
  slug: "relocation-services",
  parent: "services",
  country: "netherlands",
  sourceModel: RELOCATION_SERVICES_SOURCE_MODEL,
  totalRecords: relocationServicesProviders.length,
  lastChecked: RELOCATION_SERVICES_LAST_CHECKED,
};

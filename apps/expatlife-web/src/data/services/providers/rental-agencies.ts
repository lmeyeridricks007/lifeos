/**
 * Rental agencies and expat rental brokers from trusted public-support ecosystems
 * (I amsterdam, The Hague International Centre, Rotterdam Expat Centre, etc.).
 * Used for the rental-agencies category directory.
 * Run scripts/build-rental-agencies-dataset.ts to refresh metadata.
 */

import type { RentalAgencyRecord } from "@/src/lib/service-category/types";

const LAST_CHECKED = "2026-03-11";

export const rentalAgencies: RentalAgencyRecord[] = [
  {
    slug: "mva-certified-expat-broker",
    name: "MVA Certified Expat Brokers",
    providerUrl: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/mva-certified-expat-broker",
    providerType: "expat-broker-network",
    shortDescription:
      "I amsterdam partner network of certified expat brokers who can help with renting, leasing out, or valuing a home and give information and advice about the Amsterdam housing market. I amsterdam states they represent a large share of the expat housing market in the Amsterdam Area.",
    bestFor: ["long-term rental", "expats", "Amsterdam", "viewing support", "market advice"],
    cityRelevance: ["Amsterdam", "Amsterdam Area"],
    sourceReferences: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/mva-certified-expat-broker",
    ],
    feeNote: "Fees vary by broker; check directly.",
    isOfficial: false,
    lastChecked: LAST_CHECKED,
    pros: ["Certified expat broker network", "Viewing and market advice", "Strong Amsterdam presence"],
    cons: ["Fees vary by broker; compare before committing"],
    whoShouldChoose: "Expats in the Amsterdam area who want a vetted broker for long-term rental, viewings, or market advice.",
  },
  {
    slug: "corporate-housing-living",
    name: "Corporate Housing Living",
    providerUrl: "https://www.thehagueinternationalcentre.nl/partners/housing/corporate-housing-living",
    providerType: "rental-service",
    shortDescription:
      "The Hague International Centre housing partner. Provides housing and rental-related services for internationals moving to the The Hague region.",
    bestFor: ["long-term rental", "expats", "The Hague", "corporate housing"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    sourceReferences: [
      "https://www.thehagueinternationalcentre.nl/partners/housing/corporate-housing-living",
    ],
    feeNote: "Check directly with provider.",
    isOfficial: false,
    lastChecked: LAST_CHECKED,
    pros: ["The Hague International Centre partner", "Corporate and long-term rental focus", "Internationals-oriented"],
    cons: ["Confirm fees and scope directly"],
    whoShouldChoose: "Internationals moving to The Hague who need corporate or long-term rental support.",
  },
  {
    slug: "serviced-apartments-by-preferred",
    name: "Serviced Apartments by Preferred",
    providerUrl: "https://www.thehagueinternationalcentre.nl/partners/housing/serviced-apartments-by-preferred",
    providerType: "serviced-apartments",
    shortDescription:
      "The Hague International Centre housing partner. Serviced and temporary apartment options for internationals in the The Hague region.",
    bestFor: ["temporary accommodation", "serviced apartments", "The Hague", "expats"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    sourceReferences: [
      "https://www.thehagueinternationalcentre.nl/partners/housing/serviced-apartments-by-preferred",
    ],
    feeNote: "Check directly with provider.",
    isOfficial: false,
    lastChecked: LAST_CHECKED,
    pros: ["Serviced and temporary options", "The Hague focus", "Suitable for short stays"],
    cons: ["Pricing and availability vary; confirm directly"],
    whoShouldChoose: "Internationals needing temporary or serviced apartments in The Hague.",
  },
  {
    slug: "corporate-housing-factory",
    name: "Corporate Housing Factory",
    providerUrl: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/corporate-housing-factory",
    providerType: "rental-service",
    shortDescription:
      "I amsterdam partner. Corporate housing and rental services for expats and internationals in the Amsterdam area.",
    bestFor: ["furnished rental", "expats", "Amsterdam", "corporate housing"],
    cityRelevance: ["Amsterdam", "Amsterdam Area"],
    sourceReferences: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/corporate-housing-factory",
    ],
    feeNote: "Check directly with provider.",
    isOfficial: false,
    lastChecked: LAST_CHECKED,
    pros: ["Corporate housing specialist", "Furnished rental", "I amsterdam partner"],
    cons: ["Confirm fees and minimum stay"],
    whoShouldChoose: "Expats and companies in Amsterdam needing furnished or corporate housing.",
  },
  {
    slug: "city-retreat",
    name: "City Retreat",
    providerUrl: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/city-retreat",
    providerType: "rental-service",
    shortDescription:
      "I amsterdam partner. Housing and accommodation services for expats and internationals in Amsterdam.",
    bestFor: ["furnished rental", "expats", "Amsterdam", "short-term", "mid-term"],
    cityRelevance: ["Amsterdam", "Amsterdam Area"],
    sourceReferences: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/city-retreat",
    ],
    feeNote: "Check directly with provider.",
    isOfficial: false,
    lastChecked: LAST_CHECKED,
    pros: ["Short- and mid-term options", "Amsterdam focus", "Expat-oriented"],
    cons: ["Fees and availability vary; verify directly"],
    whoShouldChoose: "Expats in Amsterdam needing furnished short- or mid-term accommodation.",
  },
  {
    slug: "woon",
    name: "!WOON",
    providerUrl: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/woon",
    websiteUrl: "https://www.woon.nl",
    providerType: "tenant-support",
    shortDescription:
      "I amsterdam partner. Tenant support and housing rights information. Focus on tenant rights, dispute support, and housing advice—distinct from private rental agencies that focus on search and viewings.",
    bestFor: ["tenant rights", "housing advice", "dispute support", "Amsterdam"],
    cityRelevance: ["Amsterdam", "Amsterdam Area"],
    sourceReferences: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/woon",
    ],
    feeNote: "Tenant support services; check for free or low-cost options.",
    isOfficial: false,
    lastChecked: LAST_CHECKED,
    pros: ["Tenant rights and dispute support", "Housing advice", "May offer free or low-cost services"],
    cons: ["Not a rental search agency; focus is rights and advice"],
    whoShouldChoose: "Tenants in Amsterdam who need rights advice, dispute support, or housing information.",
  },
  {
    slug: "rsh-relocation",
    name: "RSH Relocation and Immigration Services",
    providerUrl: "https://www.thehagueinternationalcentre.nl/partners/relocation-services/rsh-relocation-and-immigration-services",
    providerType: "relocation-with-rental",
    shortDescription:
      "The Hague International Centre partner. Relocation and immigration services including housing and registration support for internationals in the The Hague region.",
    bestFor: ["relocation", "housing search", "expats", "The Hague", "family support"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    sourceReferences: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/rsh-relocation-and-immigration-services",
    ],
    feeNote: "Check directly; often bundled with relocation packages.",
    isOfficial: false,
    lastChecked: LAST_CHECKED,
    pros: ["Immigration and housing in one", "Family support", "The Hague specialist"],
    cons: ["Packages and fees vary; confirm scope"],
    whoShouldChoose: "Internationals moving to The Hague who want combined immigration and housing support.",
  },
  {
    slug: "relocaid",
    name: "RelocAid",
    providerUrl: "https://www.thehagueinternationalcentre.nl/partners/relocation-services/relocaid",
    providerType: "relocation-with-rental",
    shortDescription:
      "The Hague International Centre partner. Relocation support including housing search, registration, and settling-in for expats and families in The Hague.",
    bestFor: ["relocation", "housing search", "expats", "The Hague", "family support"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    sourceReferences: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/relocaid",
    ],
    feeNote: "Check directly; often bundled with relocation packages.",
    isOfficial: false,
    lastChecked: LAST_CHECKED,
    pros: ["Housing, registration, settling-in", "Family-focused", "The Hague partner"],
    cons: ["Fees often bundled; clarify what is included"],
    whoShouldChoose: "Expats and families relocating to The Hague who want full settling-in support.",
  },
  {
    slug: "pasbms",
    name: "PASBMS Immigration and Relocation Services",
    providerUrl: "https://rotterdamexpatcentre.nl/location/pasbms-immigration-and-relocation-services/",
    providerType: "relocation-with-rental",
    shortDescription:
      "Rotterdam Expat Centre partner. Immigration and relocation services including housing and practical support for internationals in the Rotterdam region.",
    bestFor: ["relocation", "housing", "Rotterdam", "expats", "immigration"],
    cityRelevance: ["Rotterdam", "Region Rotterdam"],
    sourceReferences: [
      "https://rotterdamexpatcentre.nl/location/pasbms-immigration-and-relocation-services/",
    ],
    feeNote: "Check directly.",
    isOfficial: false,
    lastChecked: LAST_CHECKED,
    pros: ["Immigration and housing combined", "Rotterdam Expat Centre partner", "Practical support"],
    cons: ["Confirm fees and package scope"],
    whoShouldChoose: "Internationals moving to Rotterdam who need immigration and housing support together.",
  },
  {
    slug: "hr-expat-services",
    name: "HR Expat Services",
    providerUrl: "https://rotterdamexpatcentre.nl/location/hr-expat-services/",
    providerType: "relocation-with-rental",
    shortDescription:
      "Rotterdam Expat Centre partner. Expat and relocation services including housing and settlement support in the Rotterdam area.",
    bestFor: ["relocation", "housing", "Rotterdam", "expats"],
    cityRelevance: ["Rotterdam", "Region Rotterdam"],
    sourceReferences: [
      "https://rotterdamexpatcentre.nl/location/hr-expat-services/",
    ],
    feeNote: "Check directly.",
    isOfficial: false,
    lastChecked: LAST_CHECKED,
    pros: ["Rotterdam-focused", "Housing and settlement support", "Expat Centre partner"],
    cons: ["Verify services and fees directly"],
    whoShouldChoose: "Expats relocating to Rotterdam who want housing and settlement support.",
  },
];

export const rentalAgenciesMetadata = {
  slug: "rental-agencies",
  parent: "services",
  country: "netherlands",
  sourceModel: "Trusted public-support ecosystems and validated provider references",
  totalRecords: rentalAgencies.length,
  lastChecked: LAST_CHECKED,
};

/**
 * Normalized relocation provider records from trusted expat-centre and
 * public-support ecosystems (IN Amsterdam, The Hague International Centre,
 * Rotterdam Expat Centre). Used for the relocation-agencies category directory.
 * Run scripts/fetch-relocation-agencies.ts to refresh from source pages.
 * Logos via Clearbit (logo.clearbit.com/domain). Typical costs are indicative; confirm with provider.
 */

import type { RelocationProviderRecord } from "@/src/lib/service-category/types";

export const RELOCATION_AGENCIES_LAST_CHECKED = "2026-03-11";
export const RELOCATION_AGENCIES_SOURCE_MODEL =
  "Trusted expat-centre / public-support ecosystems";

export const relocationAgenciesProviders: RelocationProviderRecord[] = [
  {
    slug: "expat2holland",
    name: "Expat2Holland",
    providerUrl: "https://www.expat2holland.com",
    logoUrl: "https://logo.clearbit.com/expat2holland.com",
    sourceEcosystems: ["IN Amsterdam"],
    cityRelevance: ["Amsterdam", "Amstelveen", "Region Amsterdam"],
    shortDescription:
      "Relocation and settling-in support for internationals, including housing, registration, and practical onboarding.",
    servicesOrProducts: [
      "Housing search and rental support",
      "Municipal registration (BRP) and BSN",
      "Bank account and insurance setup",
      "School and childcare referrals",
      "Settling-in and orientation",
      "Employer and individual packages",
    ],
    serviceTags: ["relocation", "housing", "registration", "expat advice", "settling in"],
    typicalCost: "Full package from ~€1,500–3,000; à la carte from ~€200–500 per service. Employer packages often higher.",
    pros: [
      "Full-service relocation and settling-in",
      "Housing, registration, bank and insurance support",
      "School and childcare referrals",
      "Employer and individual packages",
    ],
    cons: ["Pricing not published online; request a quote", "Amsterdam-focused; confirm coverage for other cities"],
    whoShouldChoose: "Expats and families moving to the Amsterdam region who want end-to-end support from housing to settling-in.",
    isOfficial: false,
    sourcePages: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/expat2holland",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "jimble",
    name: "Jimble",
    providerUrl: "https://www.jimble.nl",
    logoUrl: "https://logo.clearbit.com/jimble.nl",
    sourceEcosystems: ["IN Amsterdam"],
    cityRelevance: ["Amsterdam", "Region Amsterdam"],
    shortDescription:
      "Relocation and mobility services for expats and internationals in the Amsterdam area.",
    servicesOrProducts: [
      "Relocation and move coordination",
      "Housing and registration support",
      "Mobility and settling-in",
      "Corporate and individual clients",
    ],
    serviceTags: ["relocation", "expat advice", "mobility"],
    typicalCost: "Packages vary; often €1,000–2,500+ for core relocation. Check directly for quote.",
    pros: [
      "Relocation and move coordination in one place",
      "Housing and registration support",
      "Corporate and individual clients",
      "Amsterdam-area focus",
    ],
    cons: ["Limited to Amsterdam region", "Exact pricing requires a quote"],
    whoShouldChoose: "Expats and companies relocating to the Amsterdam area who want combined mobility and settling-in support.",
    isOfficial: false,
    sourcePages: [
      "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/jimble",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "rsh-relocation-and-immigration-services",
    name: "RSH Relocation and Immigration Services",
    providerUrl: "https://www.rsh.nl",
    logoUrl: "https://logo.clearbit.com/rsh.nl",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    shortDescription:
      "Relocation and immigration services for internationals and families, including housing and registration support.",
    servicesOrProducts: [
      "Immigration and permit support",
      "Housing search and rental",
      "Municipal registration and BSN",
      "Family and school support",
      "Settling-in and orientation",
    ],
    serviceTags: ["relocation", "immigration", "housing", "registration", "family support"],
    typicalCost: "From ~€1,200 for basic package; full relocation €2,000–4,000+. Immigration support often separate.",
    pros: [
      "Relocation and immigration in one provider",
      "Housing, registration, family and school support",
      "The Hague and region experience",
    ],
    cons: ["Immigration fees often separate from relocation", "Confirm full scope and quote in writing"],
    whoShouldChoose: "Expats and families moving to The Hague who want both relocation and immigration support from a single provider.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/rsh-relocation-and-immigration-services",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "relocaid",
    name: "RelocAid",
    providerUrl: "https://www.relocaid.com",
    logoUrl: "https://logo.clearbit.com/relocaid.com",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Region The Hague"],
    shortDescription:
      "Relocation support for expats and families, including housing search, registration, and settling-in assistance.",
    servicesOrProducts: [
      "Housing search and viewings",
      "Registration and BSN",
      "Family and school search",
      "Settling-in and practical support",
    ],
    serviceTags: ["relocation", "housing", "registration", "family support", "settling in"],
    typicalCost: "Packages from ~€1,000; full family relocation €2,000–3,500+. Confirm scope and quote.",
    pros: [
      "Family and school search support",
      "Housing search and viewings",
      "Registration and settling-in",
    ],
    cons: ["The Hague–focused; check coverage elsewhere", "Request written quote for full scope"],
    whoShouldChoose: "Families relocating to The Hague who want housing, registration, and school support in one package.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/relocaid",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "access",
    name: "ACCESS",
    providerUrl: "https://www.access-nl.org",
    logoUrl: "https://logo.clearbit.com/access-nl.org",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Netherlands"],
    shortDescription:
      "Support for internationals and families with practical settling-in, information, and referral services.",
    servicesOrProducts: [
      "Information and orientation",
      "Referrals to housing, legal, tax",
      "Volunteer and community support",
      "Workshops and events",
    ],
    serviceTags: ["relocation", "expat advice", "family support", "information"],
    typicalCost: "Many services free or low-cost; membership and specific programmes may have fees. Check website.",
    pros: [
      "Many free or low-cost services",
      "Information, orientation, and referrals",
      "Volunteer and community support",
      "Workshops and events",
    ],
    cons: ["Not full-service relocation; more information and referral focused", "Some programmes may have membership or fees"],
    whoShouldChoose: "Expats in The Hague who want practical information, referrals, and community support rather than full-service relocation.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/access",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "altair-global",
    name: "Altair Global",
    providerUrl: "https://www.altairglobal.com",
    logoUrl: "https://logo.clearbit.com/altairglobal.com",
    sourceEcosystems: ["The Hague International Centre"],
    cityRelevance: ["The Hague", "Den Haag", "Netherlands"],
    shortDescription:
      "Global relocation and mobility services, including corporate and family moves, housing, and immigration coordination.",
    servicesOrProducts: [
      "Corporate relocation programmes",
      "Destination and assignment support",
      "Housing and household goods",
      "Immigration and visa coordination",
      "Family and school support",
    ],
    serviceTags: ["relocation", "corporate relocation", "housing", "immigration", "mobility"],
    typicalCost: "Typically employer-paid; corporate packages €3,000–10,000+ depending on scope. Individual pricing on request.",
    pros: [
      "Global relocation and mobility experience",
      "Corporate and assignment support",
      "Housing, immigration, family and school coordination",
      "Often used by multinational employers",
    ],
    cons: ["Positioned for corporate and employer clients", "Individual pricing not standard; request quote"],
    whoShouldChoose: "Employers and assignees needing global mobility and corporate relocation support, often employer-funded.",
    isOfficial: false,
    sourcePages: [
      "https://www.thehagueinternationalcentre.nl/partners/relocation-services/altair-global",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "pasbms-immigration-and-relocation-services",
    name: "PASBMS Immigration and Relocation Services",
    providerUrl: "https://www.pasbms.com",
    logoUrl: "https://logo.clearbit.com/pasbms.com",
    sourceEcosystems: ["Rotterdam Expat Centre"],
    cityRelevance: ["Rotterdam", "Region Rotterdam"],
    shortDescription:
      "Immigration and relocation services for expats in the Rotterdam area, including permits, housing, and registration.",
    servicesOrProducts: [
      "Residence and work permits",
      "Housing search and registration",
      "BSN and municipal registration",
      "Settling-in support",
    ],
    serviceTags: ["relocation", "immigration", "housing", "registration"],
    typicalCost: "From ~€800 for immigration support; full relocation €1,500–3,000+. Fees depend on scope.",
    pros: [
      "Immigration and relocation in one place",
      "Rotterdam-area focus",
      "Permits, housing, BSN and settling-in",
    ],
    cons: ["Rotterdam-focused; confirm coverage for other cities", "Scope and fees vary; get written quote"],
    whoShouldChoose: "Expats moving to Rotterdam who want combined immigration and relocation support from a local provider.",
    isOfficial: false,
    sourcePages: [
      "https://rotterdamexpatcentre.nl/location/pasbms-immigration-and-relocation-services/",
    ],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
  {
    slug: "hr-expat-services",
    name: "HR Expat Services",
    providerUrl: "https://www.hrexpatservices.com",
    logoUrl: "https://logo.clearbit.com/hrexpatservices.com",
    sourceEcosystems: ["Rotterdam Expat Centre"],
    cityRelevance: ["Rotterdam", "Region Rotterdam"],
    shortDescription:
      "Expat and relocation support services, including immigration, housing, and HR-related settling-in for internationals.",
    servicesOrProducts: [
      "Immigration and permit support",
      "Housing and registration",
      "HR and onboarding support",
      "Settling-in for employees",
    ],
    serviceTags: ["relocation", "expat advice", "immigration", "housing", "HR support"],
    typicalCost: "Often employer-funded; packages from ~€1,000. Individual and corporate quotes on request.",
    pros: [
      "HR and onboarding focus for employers",
      "Immigration, housing and registration",
      "Settling-in for employees",
    ],
    cons: ["Often employer-funded; individual pricing on request", "Rotterdam-area focus"],
    whoShouldChoose: "Employers and HR teams in the Rotterdam area needing expat onboarding and relocation support for new hires.",
    isOfficial: false,
    sourcePages: ["https://rotterdamexpatcentre.nl/location/hr-expat-services/"],
    lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
  },
];

export const relocationAgenciesMetadata = {
  slug: "relocation-agencies",
  parent: "services",
  country: "netherlands",
  sourceModel: RELOCATION_AGENCIES_SOURCE_MODEL,
  totalRecords: relocationAgenciesProviders.length,
  lastChecked: RELOCATION_AGENCIES_LAST_CHECKED,
};

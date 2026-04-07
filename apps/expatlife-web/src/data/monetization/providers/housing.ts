/**
 * Housing search: portals, furnished bridge options, and room platforms. Affiliate not active.
 */
import type { MonetizationProvider } from "@/src/lib/monetization/types";
import {
  DEFAULT_MONETIZATION_DISCLOSURE,
  monetizationAffiliatePlaceholder,
} from "@/src/lib/monetization/types";

const LOGOS = "/images/affiliates/logos";

export const housingMonetizationProviders: MonetizationProvider[] = [
  {
    id: "monetization-housing-funda",
    name: "Funda",
    category: "housing",
    logo: { src: "https://www.google.com/s2/favicons?domain=www.funda.nl&sz=128", alt: "Funda" },
    shortDescription:
      "Largest Dutch property portal for rent and sale. Useful to understand asking rents, neighbourhoods, and agent-listed stock before you commit.",
    tags: ["Listings", "Rent & buy", "Nationwide"],
    bestFor: "Primary research on the mainstream Dutch rental and purchase market.",
    priceHint: "Free to browse; agency or landlord costs separate",
    affiliateUrl: monetizationAffiliatePlaceholder("housing-funda"),
    directUrl: "https://www.funda.nl/en/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/housing", "netherlands/housing-platforms", "netherlands/moving"],
    recommendedForStages: ["pre-arrival", "arrival", "settling"],
    status: "active",
  },
  {
    id: "monetization-housing-pararius",
    name: "Pararius",
    category: "housing",
    logo: { src: `${LOGOS}/pararius.svg`, alt: "Pararius" },
    shortDescription:
      "Rental-focused platform with English-friendly browsing; mixes agency and landlord listings across Dutch cities.",
    tags: ["Rentals", "English", "Nationwide"],
    bestFor: "Long-term apartment or house hunts when you want a rental-specific UI.",
    priceHint: "Free to browse",
    affiliateUrl: monetizationAffiliatePlaceholder("housing-pararius"),
    directUrl: "https://www.pararius.com/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/housing", "netherlands/housing-platforms"],
    recommendedForStages: ["pre-arrival", "arrival"],
    status: "active",
  },
  {
    id: "monetization-housing-housinganywhere",
    name: "HousingAnywhere",
    category: "housing",
    logo: { src: `${LOGOS}/housinganywhere.svg`, alt: "HousingAnywhere" },
    shortDescription:
      "Mid- and long-term furnished rentals aimed at students and internationals; often used as bridge housing while you search locally.",
    tags: ["Furnished", "Mid-term", "Internationals"],
    bestFor: "Temporary furnished stays in student-heavy cities.",
    priceHint: "Service or booking fees may apply—read terms",
    affiliateUrl: monetizationAffiliatePlaceholder("housing-housinganywhere"),
    directUrl: "https://housinganywhere.com/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/housing", "netherlands/moving", "netherlands/amsterdam"],
    recommendedForStages: ["pre-arrival", "arrival"],
    status: "active",
  },
  {
    id: "monetization-housing-holland2stay",
    name: "Holland2Stay",
    category: "housing",
    logo: { src: "https://www.google.com/s2/favicons?domain=www.holland2stay.com&sz=128", alt: "Holland2Stay" },
    shortDescription:
      "Operator of furnished studios and apartments in several Dutch cities; inventory rotates and minimum stays apply.",
    tags: ["Furnished", "Operator", "Short / mid-term"],
    bestFor: "Arrival housing when you want a managed inventory rather than private listings only.",
    priceHint: "Minimum stay and monthly rent vary by city and season",
    affiliateUrl: monetizationAffiliatePlaceholder("housing-holland2stay"),
    directUrl: "https://www.holland2stay.com/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/housing", "netherlands/moving"],
    recommendedForStages: ["arrival", "settling"],
    status: "active",
  },
  {
    id: "monetization-housing-kamernet",
    name: "Kamernet",
    category: "housing",
    logo: { src: "https://www.google.com/s2/favicons?domain=www.kamernet.nl&sz=128", alt: "Kamernet" },
    shortDescription:
      "Room and shared-housing marketplace—common for students and young professionals. Expect subscription or contact fees; scams exist, so verify landlords carefully.",
    tags: ["Rooms", "Shared housing", "Students"],
    bestFor: "Single-room searches and budget-conscious flatshares.",
    priceHint: "Paid subscription or per-contact fees on platform",
    affiliateUrl: monetizationAffiliatePlaceholder("housing-kamernet"),
    directUrl: "https://www.kamernet.nl/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/housing", "netherlands/moving"],
    recommendedForStages: ["pre-arrival", "arrival", "settling"],
    status: "active",
  },
];

/**
 * Dutch basic health insurance (basisverzekering) insurers—editorial shortlist only.
 * Affiliate programme not active: `isAffiliate` false; `affiliateUrl` is placeholder until live.
 */
import type { MonetizationProvider } from "@/src/lib/monetization/types";
import {
  DEFAULT_MONETIZATION_DISCLOSURE,
  monetizationAffiliatePlaceholder,
} from "@/src/lib/monetization/types";

const LOGOS = "/images/affiliates/logos";

export const insuranceMonetizationProviders: MonetizationProvider[] = [
  {
    id: "monetization-insurance-zilveren-kruis",
    name: "Zilveren Kruis",
    category: "health-insurance",
    logo: { src: `${LOGOS}/zilveren-kruis.svg`, alt: "Zilveren Kruis" },
    shortDescription:
      "One of the largest Dutch insurers (Achmea group). Often compared for broad care networks and optional supplementary cover such as dental or physiotherapy.",
    tags: ["Basic package", "Large network", "Supplementary options"],
    bestFor: "People who want a high-recognition brand and flexible add-ons on top of mandatory cover.",
    priceHint: "~€145–165/mo basic indicative; excess and extras change the total",
    affiliateUrl: monetizationAffiliatePlaceholder("insurance-zilveren-kruis"),
    directUrl: "https://www.zilverenkruis.nl/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/health-insurance", "netherlands/moving", "guide/health", "netherlands/living/healthcare-basics", "netherlands/living/emergencies-safety"],
    recommendedForStages: ["pre-arrival", "arrival", "settling"],
    status: "active",
  },
  {
    id: "monetization-insurance-cz",
    name: "CZ",
    category: "health-insurance",
    logo: { src: `${LOGOS}/cz.svg`, alt: "CZ" },
    shortDescription:
      "Established Dutch insurer with a large member base and a wide choice of basic and supplementary packages.",
    tags: ["Basic package", "National coverage"],
    bestFor: "Straightforward comparison shopping among major domestic insurers.",
    priceHint: "~€142–160/mo basic indicative; verify with zorgwijzer or insurer",
    affiliateUrl: monetizationAffiliatePlaceholder("insurance-cz"),
    directUrl: "https://www.cz.nl/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/health-insurance", "netherlands/living/healthcare-basics", "netherlands/living/emergencies-safety"],
    recommendedForStages: ["arrival", "settling"],
    status: "active",
  },
  {
    id: "monetization-insurance-menzis",
    name: "Menzis",
    category: "health-insurance",
    logo: { src: `${LOGOS}/menzis.svg`, alt: "Menzis" },
    shortDescription:
      "Major Dutch insurer offering basic insurance plus optional modules; frequently shortlisted when balancing premium and package flexibility.",
    tags: ["Basic package", "Flexible add-ons"],
    bestFor: "Expats comparing mid-tier premiums with clear supplementary options.",
    priceHint: "~€138–158/mo basic indicative",
    affiliateUrl: monetizationAffiliatePlaceholder("insurance-menzis"),
    directUrl: "https://www.menzis.nl/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/health-insurance", "netherlands/living/healthcare-basics", "netherlands/living/emergencies-safety"],
    recommendedForStages: ["pre-arrival", "arrival"],
    status: "active",
  },
  {
    id: "monetization-insurance-vgz",
    name: "VGZ",
    category: "health-insurance",
    logo: { src: `${LOGOS}/vgz.svg`, alt: "VGZ" },
    shortDescription:
      "Large cooperative-style insurer in the Netherlands with a broad range of basic and supplementary products.",
    tags: ["Basic package", "Wide product range"],
    bestFor: "Those who want many package variants from a single established brand.",
    priceHint: "~€140–160/mo basic indicative",
    affiliateUrl: monetizationAffiliatePlaceholder("insurance-vgz"),
    directUrl: "https://www.vgz.nl/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/health-insurance", "netherlands/living/healthcare-basics", "netherlands/living/emergencies-safety"],
    recommendedForStages: ["arrival", "settling", "ongoing"],
    status: "active",
  },
  {
    id: "monetization-insurance-fbto",
    name: "FBTO",
    category: "health-insurance",
    logo: { src: `${LOGOS}/fbto.svg`, alt: "FBTO" },
    shortDescription:
      "Dutch insurer (Achmea) often positioned for direct online sales and competitive basic premiums; supplementary cover available.",
    tags: ["Direct", "Basic package", "Online-first"],
    bestFor: "Price-sensitive shoppers who still want a recognised domestic insurer.",
    priceHint: "~€130–150/mo basic indicative",
    affiliateUrl: monetizationAffiliatePlaceholder("insurance-fbto"),
    directUrl: "https://www.fbto.nl/",
    isAffiliate: false,
    disclosureText: DEFAULT_MONETIZATION_DISCLOSURE,
    recommendedForContexts: ["netherlands/health-insurance", "netherlands/living/healthcare-basics", "netherlands/living/emergencies-safety"],
    recommendedForStages: ["arrival", "settling"],
    status: "active",
  },
];

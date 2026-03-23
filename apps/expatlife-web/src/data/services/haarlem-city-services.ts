/**
 * Service cards for /netherlands/haarlem/: Amsterdam Area ecosystem + I amsterdam partner examples.
 * Descriptions are editorial; providers are listed on public partner directories—not endorsements.
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import { getAmsterdamServices } from "@/src/data/services/amsterdam";

export const haarlemAmsterdamAreaPartnerCards: CityServiceCard[] = [
  {
    id: "expat2holland-partner",
    name: "Expat2Holland",
    category: "Amsterdam Area partners (directory examples)",
    description:
      "Appears on the I amsterdam partner list under relocation services. If you are comparing providers, check what they cover for your municipality, timelines, and fees on their site.",
    bestFor: "Relocation orientation (verify scope)",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/expat2holland",
    logo: { src: "https://logo.clearbit.com/expat2holland.com", alt: "Expat2Holland" },
  },
  {
    id: "jimble-partner",
    name: "Jimble",
    category: "Amsterdam Area partners (directory examples)",
    description:
      "Listed on the I amsterdam partner directory (destination / relocation services). Useful as a starting point to compare offerings—not a substitute for reading contract terms yourself.",
    bestFor: "Destination services (compare quotes)",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/jimble",
    logo: { src: "https://logo.clearbit.com/jimble.nl", alt: "Jimble" },
  },
  {
    id: "packimpex-partner",
    name: "Packimpex",
    category: "Amsterdam Area partners (directory examples)",
    description:
      "Listed on I amsterdam as a relocation / moving partner. Relevant when you need international household moves alongside housing and setup—confirm what is included before booking.",
    bestFor: "International moving + relocation bundles",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/packimpex",
    logo: { src: "https://logo.clearbit.com/packimpex.com", alt: "Packimpex" },
  },
  {
    id: "mva-expat-brokers-partner",
    name: "MVA Certified Expat Brokers",
    category: "Amsterdam Area partners (directory examples)",
    description:
      "I amsterdam describes this network as certified expat brokers focused on the Amsterdam Area rental market. Helpful context for understanding agency-style rental support—always confirm who you contract with.",
    bestFor: "Rental market orientation (Amsterdam Area)",
    url: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/mva-certified-expat-broker",
  },
];

/** Haarlem hub: Amsterdam Area services minus City of Amsterdam-only civil desk; plus partner-directory examples. */
export function getHaarlemCityServices(): CityServiceCard[] {
  const base = getAmsterdamServices().filter((s) => s.id !== "city-amsterdam-civil");
  return [...base, ...haarlemAmsterdamAreaPartnerCards];
}

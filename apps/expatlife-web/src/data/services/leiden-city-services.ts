/**
 * Service cards for /netherlands/leiden/: Leiden International Centre (LIC), national banking / housing,
 * and example entries aligned with LIC’s public partnership & service-provider ecosystem (not endorsements).
 */

import type { CityServiceCard } from "@/src/lib/city-hub/types";
import {
  sharedDocumentsTranslationServices,
  sharedInsuranceServices,
} from "@/src/data/services/shared-insurance-documents";

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/** Shortlist via LIC’s published directories — compare scope, contracts, and fees yourself. */
export const leidenLicPartnerExampleCards: CityServiceCard[] = [
  {
    id: "lic-service-providers-hub",
    name: "Leiden International Centre – Service providers",
    category: "LIC ecosystem (directory)",
    description:
      "Public directory of service providers connected to Leiden International Centre’s regional newcomer ecosystem. Use it to compare housing, relocation, banking, and other support — always verify current listings and suitability on LIC’s site and with each provider.",
    bestFor: "Shortlisting regional providers to contact directly",
    url: "https://www.leideninternationalcentre.nl/service-providers/",
    isOfficial: true,
  },
  {
    id: "lic-partnership-programme",
    name: "Leiden International Centre – Partnership programme",
    category: "LIC ecosystem (partners)",
    description:
      "Describes how employers and organisations partner with Leiden International Centre to support internationals in the region. Useful context when your company points you to LIC for onboarding or practical help.",
    bestFor: "Understanding employer-linked regional support",
    url: "https://www.leideninternationalcentre.nl/the-partnership-programme",
    isOfficial: true,
  },
  {
    id: "lic-housing-page",
    name: "Leiden International Centre – Housing (just arrived)",
    category: "LIC ecosystem (housing guidance)",
    description:
      "LIC’s practical housing orientation for newcomers in the Leiden region. Pairs well with our housing platforms and rental-agency hubs when you want both official guidance and independent search channels.",
    bestFor: "First-pass housing orientation in the region",
    url: "https://www.leideninternationalcentre.nl/just-arrived/housing",
    isOfficial: true,
  },
  {
    id: "jimble-destination-services",
    name: "Jimble",
    category: "LIC ecosystem (example provider)",
    description:
      "Dutch relocation and destination-services provider sometimes referenced in national newcomer partner networks. Check Leiden International Centre’s current service-provider listings to see whether they appear for your route, then compare offerings in writing.",
    bestFor: "Destination / settling-in support (verify LIC listing + scope)",
    url: "https://www.jimble.nl/",
    logo: { src: favicon("jimble.nl"), alt: "Jimble" },
  },
  {
    id: "expat-mortgages",
    name: "Expat Mortgages B.V.",
    category: "LIC ecosystem (example provider)",
    description:
      "Mortgage specialist for internationals that appears in other Dutch newcomer service-provider ecosystems (e.g. IWCN listings). May also surface via LIC’s directory for relevant cases — confirm products and advice rules directly.",
    bestFor: "Buying or mortgage questions for internationals",
    url: "https://www.expatmortgages.nl/",
    logo: { src: favicon("expatmortgages.nl"), alt: "Expat Mortgages" },
  },
  {
    id: "remax-netherlands",
    name: "RE/MAX Netherlands",
    category: "LIC ecosystem (example provider)",
    description:
      "National real-estate brand with rental and purchase paths in many Dutch cities. Treat as one option to compare with independent agencies and platforms — confirm local office coverage for Leiden and your timeline.",
    bestFor: "Agency-style housing search (compare fees and scope)",
    url: "https://www.remax.nl/en",
    logo: { src: favicon("remax.nl"), alt: "RE/MAX" },
  },
];

export const leidenServicesByCategory: Record<string, CityServiceCard[]> = {
  "Official / newcomer support": [
    {
      id: "lic-home",
      name: "Leiden International Centre",
      category: "Official / newcomer support",
      description:
        "Non-profit regional hub for internationals and employers in the Leiden area. Offers practical newcomer information, a helpdesk, BSN registration appointments for eligible cases, and links to housing, work, healthcare, and daily-life topics — confirm services and booking on their live site.",
      bestFor: "First steps, BSN appointments (where eligible), employer-linked orientation",
      costNote: "Non-profit; see LIC for current services",
      url: "https://www.leideninternationalcentre.nl/",
      isOfficial: true,
    },
    {
      id: "lic-about",
      name: "Leiden International Centre – About us",
      category: "Official / newcomer support",
      description:
        "Background on LIC’s mission supporting international newcomers and employers in the Leiden region.",
      bestFor: "Understanding what LIC does and who it serves",
      url: "https://www.leideninternationalcentre.nl/about-us/",
      isOfficial: true,
    },
    {
      id: "lic-plan-your-move",
      name: "Leiden International Centre – Plan your move",
      category: "Official / newcomer support",
      description:
        "Before-you-arrive guidance for internationals moving to the Leiden region, including practical planning topics aligned with LIC’s newcomer content.",
      bestFor: "Sequencing tasks before arrival",
      url: "https://www.leideninternationalcentre.nl/before-moving/plan-your-move",
      isOfficial: true,
    },
    {
      id: "lic-work-in-leiden",
      name: "Leiden International Centre – Work in Leiden",
      category: "Official / newcomer support",
      description:
        "Regional work context for internationals, including how the Leiden area positions itself as a knowledge city — useful alongside employer HR and permit advice.",
      bestFor: "Jobs and regional economy orientation",
      url: "https://www.leideninternationalcentre.nl/work-study/work-in-leiden",
      isOfficial: true,
    },
    {
      id: "lic-events",
      name: "Leiden International Centre – Events (living here)",
      category: "Official / newcomer support",
      description:
        "Community and orientation-style events for internationals in the region — helpful for early networking alongside formal relocation steps.",
      bestFor: "Meeting people and learning local practical tips",
      url: "https://www.leideninternationalcentre.nl/living-here/events",
      isOfficial: true,
    },
    {
      id: "lic-newsletter",
      name: "Leiden International Centre – Newsletter",
      category: "Official / newcomer support",
      description:
        "Subscribe for updates on events, news, and practical information for internationals in the Leiden region.",
      bestFor: "Ongoing orientation after arrival",
      url: "https://www.leideninternationalcentre.nl/newsletter",
      isOfficial: true,
    },
    {
      id: "netherlands-worldwide-checklist",
      name: "Netherlands Worldwide – Relocation checklist",
      category: "Official / newcomer support",
      description:
        "Government checklist for relocating to the Netherlands covering immigration-related steps — use alongside LIC and municipality guidance.",
      bestFor: "National immigration and relocation framing",
      url: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
      isOfficial: true,
    },
  ],
  "Banking / money": [
    {
      id: "abn-amro-international-clients",
      name: "ABN AMRO – International clients",
      category: "Banking / money",
      description:
        "English-language entry for international clients of a major Dutch bank. Useful when comparing onboarding requirements with other banks — not Leiden-specific.",
      bestFor: "Traditional banking with international-client information",
      costNote: "Typical account fees apply",
      url: "https://www.abnamro.nl/en/personal/international-clients/index.html",
      logo: { src: favicon("abnamro.nl"), alt: "ABN AMRO" },
    },
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

export function getLeidenCityServices(categories?: string[]): CityServiceCard[] {
  const base = Object.values(leidenServicesByCategory).flat();
  const withLic = [...base, ...leidenLicPartnerExampleCards];
  if (!categories?.length) return withLic;
  return withLic.filter((s) => categories.includes(s.category));
}

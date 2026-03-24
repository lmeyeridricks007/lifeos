/**
 * Featured category highlights for the services hub.
 * Links to live category pages. Provider examples are illustrative; no rankings or endorsements.
 */

import type { FeaturedCategoryHighlight } from "@/src/lib/services-hub/types";

const BASE = "/netherlands/services";

export const NETHERLANDS_FEATURED_HIGHLIGHTS: FeaturedCategoryHighlight[] = [
  {
    slug: "banks",
    title: "Banks",
    intro:
      "Expats typically need a Dutch or expat-friendly bank for salary, iDEAL, and daily spending. Compare traditional and digital options.",
    providerExamples: ["bunq", "ABN AMRO", "ING", "Wise", "N26", "Revolut"],
    href: `${BASE}/banks/`,
    guideLinks: [
      { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
    ],
  },
  {
    slug: "health-insurance",
    title: "Health Insurance",
    intro:
      "Dutch health insurance is mandatory for residents. Compare providers, costs, and expat-friendly options.",
    providerExamples: ["Zilveren Kruis", "CZ", "Menzis", "VGZ", "ONVZ", "DSW"],
    href: `${BASE}/health-insurance/`,
    guideLinks: [
      { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
    ],
  },
  {
    slug: "housing-platforms",
    title: "Housing Platforms",
    intro:
      "Finding a home often involves rental platforms, furnished and short-term options. Compare platforms used by internationals.",
    providerExamples: ["HousingAnywhere", "Funda", "Pararius", "Expat Housing"],
    href: `${BASE}/housing-platforms/`,
    guideLinks: [{ label: "Rental agencies", href: `${BASE}/rental-agencies/` }],
  },
  {
    slug: "rental-agencies",
    title: "Rental Agencies",
    intro:
      "Rental agencies and brokers can help with housing search, viewings, and contracts—especially in tight markets.",
    providerExamples: ["Expat-focused brokers", "Rental search support", "Contract guidance"],
    href: `${BASE}/rental-agencies/`,
    guideLinks: [
      { label: "Housing platforms", href: `${BASE}/housing-platforms/` },
      { label: "Relocation services", href: `${BASE}/relocation-services/` },
    ],
  },
  {
    slug: "relocation-services",
    title: "Relocation Services",
    intro:
      "Relocation support across housing, immigration, registration, and settling in. Compare agencies and coordination services.",
    providerExamples: ["Relocation agencies", "Rental agencies", "Visa support", "Registration help"],
    href: `${BASE}/relocation-services/`,
    guideLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
    ],
  },
  {
    slug: "visa-consultants",
    title: "Visa Consultants & Immigration",
    intro:
      "Visa consultants and immigration lawyers help with MVV, residence permits, family migration, and startup routes.",
    providerExamples: ["Visa consultants", "Immigration lawyers", "HSM sponsors", "Startup visa advisors"],
    href: `${BASE}/visa-consultants/`,
    guideLinks: [
      { label: "Compare visas", href: "/netherlands/visa/compare-visas/" },
      { label: "Immigration lawyers", href: `${BASE}/immigration-lawyers/` },
    ],
  },
  {
    slug: "mobile-connectivity",
    title: "Mobile & connectivity",
    intro:
      "A Dutch mobile number helps with SMS codes for banks, DigiD, and many services. Compare SIM-only and prepaid options expats often use.",
    providerExamples: ["Simyo", "Lebara", "KPN", "Vodafone", "Odido"],
    href: `${BASE}/mobile-connectivity/`,
    guideLinks: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "First 30 days", href: "/netherlands/first-30-days-netherlands/" },
    ],
  },
  {
    slug: "immigration-lawyers",
    title: "Immigration Lawyers",
    intro:
      "Legal support for permits, appeals, family reunification, and complex immigration situations—useful when stakes are high.",
    providerExamples: ["Immigration law firms", "Permit specialists", "Appeals support"],
    href: `${BASE}/immigration-lawyers/`,
    guideLinks: [
      { label: "Visa consultants", href: `${BASE}/visa-consultants/` },
      { label: "Compare visas", href: "/netherlands/visa/compare-visas/" },
    ],
  },
];

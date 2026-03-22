/**
 * International health insurance providers for the health insurance category page.
 * For expats who need cover before moving, employer packages, or supplement to Dutch insurance.
 * Editorial only; verify coverage and terms with each provider.
 */

import type { ServiceCategoryProviderCard } from "@/src/lib/service-category/types";

const INSURANCE_BASE = "/netherlands/services/insurance";

export const internationalHealthInsuranceProviders: ServiceCategoryProviderCard[] = [
  {
    slug: "cigna-global",
    name: "Cigna Healthcare (Cigna Global)",
    href: `${INSURANCE_BASE}/cigna-global/`,
    shortDescription:
      "Global health insurance for expats and internationally mobile individuals. Flexible plans and optional coverage for treatment in the Netherlands and abroad.",
    bestFor: "Expats before or after moving, global coverage, employer-sponsored options",
    priceNote: "Plans and premiums vary by region and cover level; get a quote.",
    typicalCost: "From ~€100–300+/mo (varies by plan)",
    pros: ["Wide global network", "English-first; expat-focused", "Flexible plans and optional modules"],
    cons: ["Premium often higher than Dutch basic only", "Not a substitute for mandatory Dutch insurance if you live/work in NL"],
    whoShouldChoose: "Expats who need international cover before relocating, or alongside Dutch insurance for travel and home-country care.",
    englishSupportNote: "English-first; global product",
    isFeatured: true,
    externalUrl: "https://www.cigna.com/international/",
    reviewComingSoon: true,
    features: ["International medical cover", "In-patient and out-patient options", "Optional dental and wellness", "Global network", "Pre-departure and in-country cover"],
  },
  {
    slug: "allianz-care",
    name: "Allianz Care",
    href: `${INSURANCE_BASE}/allianz-care/`,
    shortDescription:
      "International health insurance for expatriates and globally mobile people. Plans can cover treatment in the Netherlands and worldwide.",
    bestFor: "Expats, international assignees, flexible geographic cover",
    priceNote: "Premiums depend on area, level of cover, and options.",
    typicalCost: "From ~€80–250+/mo (varies by plan)",
    pros: ["Strong global presence", "Often used by employers for assignees", "English support and online tools"],
    cons: ["Not a replacement for compulsory Dutch insurance when resident in NL", "Price varies significantly by plan"],
    whoShouldChoose: "Expats and assignees who want international cover that includes the Netherlands and other countries.",
    englishSupportNote: "English support available",
    isFeatured: true,
    externalUrl: "https://www.allianzcare.com/",
    reviewComingSoon: true,
    features: ["International health plans", "In-patient and out-patient", "Optional dental and maternity", "Global network", "Assignment and relocation support"],
  },
  {
    slug: "bupa-global",
    name: "Bupa Global",
    href: `${INSURANCE_BASE}/bupa-global/`,
    shortDescription:
      "Worldwide health insurance for individuals and families. Plans can include treatment in the Netherlands and direct settlement with many providers.",
    bestFor: "Expats and families wanting global cover including the Netherlands",
    priceNote: "Premiums vary by plan, region, and options.",
    typicalCost: "From ~€120–350+/mo (varies by plan)",
    pros: ["Established global insurer", "Direct settlement and network options", "English-first"],
    cons: ["Generally premium positioning", "Does not replace mandatory Dutch basic insurance if you live in NL"],
    whoShouldChoose: "Expats who prioritise global coverage and direct billing, including before or alongside Dutch residence.",
    englishSupportNote: "English-first",
    isFeatured: true,
    externalUrl: "https://www.bupaglobal.com/",
    reviewComingSoon: true,
    features: ["Global health plans", "In-patient and out-patient", "Optional dental and wellness", "Direct settlement network", "Pre-departure and in-NL cover"],
  },
  {
    slug: "aetna-international",
    name: "Aetna International",
    href: `${INSURANCE_BASE}/aetna-international/`,
    shortDescription:
      "International health benefits for expats and globally mobile employees. Coverage can include the Netherlands and other countries.",
    bestFor: "Employer-sponsored expats, international assignees",
    priceNote: "Typically offered through employers; individual plans may be available.",
    typicalCost: "Varies; often employer-sponsored",
    pros: ["Widely used for corporate mobility", "Global network and support", "English support"],
    cons: ["Individual plans may be limited; check availability", "Not a substitute for Dutch mandatory insurance when resident"],
    whoShouldChoose: "Expats whose employer offers Aetna International or who are exploring international group cover.",
    englishSupportNote: "English support",
    isFeatured: false,
    externalUrl: "https://www.aetnainternational.com/",
    reviewComingSoon: true,
    features: ["International medical plans", "In-patient and out-patient", "Corporate and individual options", "Global network", "Wellness and support programmes"],
  },
  {
    slug: "now-health",
    name: "Now Health International",
    href: `${INSURANCE_BASE}/now-health/`,
    shortDescription:
      "International health insurance for expats and families. Plans can cover treatment worldwide including in the Netherlands.",
    bestFor: "Expats seeking mid-market international cover",
    priceNote: "Premiums depend on area and plan level.",
    typicalCost: "From ~€70–200+/mo (varies by plan)",
    pros: ["Expat-focused", "Range of plan levels", "English-first"],
    cons: ["Not a replacement for compulsory Dutch insurance when you live in NL", "Check Netherlands-specific terms"],
    whoShouldChoose: "Expats who want international cover that includes the Netherlands, often before or in addition to Dutch basic insurance.",
    englishSupportNote: "English-first",
    isFeatured: false,
    externalUrl: "https://www.nowhealth.com/",
    reviewComingSoon: true,
    features: ["Worldwide plans", "In-patient and out-patient", "Optional modules", "Global network", "Pre- and post-move cover"],
  },
];

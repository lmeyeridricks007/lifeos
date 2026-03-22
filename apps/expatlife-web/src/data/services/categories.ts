/**
 * Canonical service categories for the Netherlands expat services hub.
 * Used by /netherlands/services/, nav, and internal linking.
 * All live category pages are listed; placeholders can be added with same shape for future routes.
 */

import type { ServiceCategoryCard } from "@/src/lib/services-hub/types";

const BASE = "/netherlands/services";

/** Group labels for "Browse by category group" sections. */
export const SERVICE_GROUP_LABELS: Record<string, string> = {
  "immigration-legal": "Immigration & Legal",
  "banking-insurance": "Banking & Insurance",
  "housing-relocation": "Housing & Relocation",
  "family-everyday-life": "Family & Everyday Life",
  "documents-legal": "Documents & Legal",
  "career-employment": "Career & Employment",
};

/** All live service category pages. Order: featured first, then by group. */
export const NETHERLANDS_SERVICES_CATEGORIES: ServiceCategoryCard[] = [
  // ——— Banking & Insurance (featured) ———
  {
    slug: "health-insurance",
    name: "Health Insurance",
    href: `${BASE}/health-insurance/`,
    description: "Compare Dutch health insurance providers, rules, costs, and expat-friendly options.",
    examples: ["Basic package", "Supplementary", "Expat-friendly insurers"],
    bestForStage: "First weeks after arrival",
    group: "banking-insurance",
    featured: true,
  },
  {
    slug: "banks",
    name: "Banks",
    href: `${BASE}/banks/`,
    description: "Compare Dutch banks, digital banking options, fees, and onboarding for expats.",
    examples: ["Traditional banks", "Digital banks", "Multi-currency"],
    bestForStage: "First weeks after arrival",
    group: "banking-insurance",
    featured: true,
  },
  // ——— Immigration & Legal ———
  {
    slug: "immigration-lawyers",
    name: "Immigration Lawyers",
    href: `${BASE}/immigration-lawyers/`,
    description: "Understand when legal immigration help is useful and compare specialist firms.",
    examples: ["Permits", "Appeals", "Family migration", "Sponsorship"],
    bestForStage: "Before you move",
    group: "immigration-legal",
    /** MVP featured hub category — toggle off if the category page is demoted. */
    featured: true,
  },
  {
    slug: "visa-consultants",
    name: "Visa Consultants",
    href: `${BASE}/visa-consultants/`,
    description: "Compare visa support providers for MVV, residence permits, family migration, and startup routes.",
    examples: ["MVV", "Residence permits", "Family migration", "Startup visa"],
    bestForStage: "Before you move",
    group: "immigration-legal",
    featured: true,
  },
  {
    slug: "highly-skilled-migrant-sponsors",
    name: "Highly Skilled Migrant Sponsors",
    href: `${BASE}/highly-skilled-migrant-sponsors/`,
    description: "Search the official recognised sponsor list for highly skilled migrant employers.",
    examples: ["IND register", "Recognised sponsors", "Employer search"],
    bestForStage: "Before you move & first weeks",
    group: "immigration-legal",
    featured: false,
  },
  {
    slug: "startup-visa-advisors",
    name: "Startup Visa Advisors",
    href: `${BASE}/startup-visa-advisors/`,
    description: "Search the official startup facilitator list and compare startup-route support.",
    examples: ["RVO facilitators", "Accelerators", "Startup residence permit"],
    bestForStage: "Before you move",
    group: "immigration-legal",
    featured: false,
  },
  // ——— Housing & Relocation ———
  {
    slug: "housing-platforms",
    name: "Housing Platforms",
    href: `${BASE}/housing-platforms/`,
    description: "Compare rental, room, furnished, and temporary housing platforms used by expats.",
    examples: ["Rental platforms", "Furnished", "Short-term", "Room shares"],
    bestForStage: "Before you move & first weeks",
    group: "housing-relocation",
    featured: true,
  },
  {
    slug: "rental-agencies",
    name: "Rental Agencies",
    href: `${BASE}/rental-agencies/`,
    description: "Find expat-friendly rental agencies and housing-search support services.",
    examples: ["Rental brokers", "Expat housing", "Search support"],
    bestForStage: "Before you move & first weeks",
    group: "housing-relocation",
    /** MVP featured hub category — toggle off if the category page is demoted. */
    featured: true,
  },
  {
    slug: "relocation-agencies",
    name: "Relocation Agencies",
    href: `${BASE}/relocation-agencies/`,
    description: "Compare agencies that coordinate housing, registration, family moves, and settling in.",
    examples: ["Full-service relocation", "Registration support", "Family moves"],
    bestForStage: "Before you move & first weeks",
    group: "housing-relocation",
    featured: false,
  },
  {
    slug: "relocation-services",
    name: "Relocation Services",
    href: `${BASE}/relocation-services/`,
    description: "Explore broader relocation support across housing, immigration, registration, and local setup.",
    examples: ["Housing", "Immigration coordination", "Registration", "Settling-in"],
    bestForStage: "Before you move & first weeks",
    group: "housing-relocation",
    featured: true,
  },
];

/** Featured categories for hub "Featured services" and nav. */
export const FEATURED_SERVICE_SLUGS = NETHERLANDS_SERVICES_CATEGORIES.filter((c) => c.featured).map((c) => c.slug);

export function getCategoriesForCountry(servicesBasePath: string): ServiceCategoryCard[] {
  return NETHERLANDS_SERVICES_CATEGORIES.map((cat) => ({
    ...cat,
    href: `${servicesBasePath}/${cat.slug}/`,
  }));
}

/** Categories grouped by group key for "Browse by category group" sections. */
export function getCategoriesByGroup(): Array<{ groupKey: string; label: string; categories: ServiceCategoryCard[] }> {
  const byGroup = new Map<string, ServiceCategoryCard[]>();
  for (const cat of NETHERLANDS_SERVICES_CATEGORIES) {
    const key = cat.group ?? "other";
    if (!byGroup.has(key)) byGroup.set(key, []);
    byGroup.get(key)!.push(cat);
  }
  return Array.from(byGroup.entries()).map(([groupKey, categories]) => ({
    groupKey,
    label: SERVICE_GROUP_LABELS[groupKey] ?? groupKey,
    categories,
  }));
}

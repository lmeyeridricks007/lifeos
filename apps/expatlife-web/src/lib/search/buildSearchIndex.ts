/**
 * Aggregates searchable documents from existing page datasets.
 * When new hubs, guides, or categories ship: extend sources here and ensure route-registry LIVE_PATHS stays in sync.
 */

import movingRegistry from "@/src/content/guides/netherlands/moving/registry.json";
import livingCultureCluster from "@/src/content/guides/netherlands/living-culture-cluster.json";
import toolCategoriesJson from "@/src/content/tools/categories.json";
import { loadGuideBySlug } from "@/src/lib/guides/loadGuide";
import { isPubliclyVisible } from "@/src/lib/publishing/isPubliclyVisible";
import { loadToolRegistry } from "@/src/lib/tools/loadToolRegistry";
import { getPublishedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { NETHERLANDS_SERVICES_CATEGORIES, SERVICE_GROUP_LABELS } from "@/src/data/services/categories";
import { netherlandsServicesPage } from "@/src/data/services/netherlands-services-page";
import { netherlandsCitiesOverview } from "@/src/data/cities-overview/netherlands-cities";
import { randstadPage } from "@/src/components/cities/randstad/randstadPageModel";
import { taxesHubPage } from "@/src/components/taxes/taxesHubPageModel";
import { expatTaxesNetherlandsPage } from "@/src/components/taxes/expatTaxesNetherlandsPageModel";
import { thirtyPercentRulingPage } from "@/src/components/taxes/thirtyPercentRulingPageModel";
import { netSalaryNetherlandsPage } from "@/src/components/taxes/netSalaryNetherlandsPageModel";
import { grossVsNetSalaryPage } from "@/src/components/taxes/grossVsNetSalaryPageModel";
import { payrollTaxNetherlandsPage } from "@/src/components/taxes/payrollTaxNetherlandsPageModel";
import { bonusTaxNetherlandsPage } from "@/src/components/taxes/bonusTaxNetherlandsPageModel";
import { healthcareAllowanceNetherlandsPage } from "@/src/components/taxes/healthcareAllowanceNetherlandsPageModel";
import { rentAllowanceNetherlandsPage } from "@/src/components/taxes/rentAllowanceNetherlandsPageModel";
import { childcareAllowanceNetherlandsPage } from "@/src/components/taxes/childcareAllowanceNetherlandsPageModel";
import { buyingHouseNetherlandsPage } from "@/src/components/housing/buyingHouseNetherlandsPageModel";
import { averageSalaryNetherlandsPage } from "@/src/components/taxes/averageSalaryNetherlandsPageModel";
import { salaryNegotiationNetherlandsPage } from "@/src/components/jobs/salaryNegotiationNetherlandsPageModel";
import { minimumWageNetherlandsPage } from "@/src/components/jobs/minimumWageNetherlandsPageModel";
import { expatSalaryNetherlandsPage } from "@/src/components/jobs/expatSalaryNetherlandsPageModel";
import { employeeBenefitsNetherlandsPage } from "@/src/components/jobs/employeeBenefitsNetherlandsPageModel";
import { pensionNetherlandsExpatsPage } from "@/src/components/jobs/pensionNetherlandsExpatsPageModel";
import { holidayAllowanceNetherlandsPage } from "@/src/components/jobs/holidayAllowanceNetherlandsPageModel";
import { NETHERLANDS_CITY_HUB_PAGES } from "@/src/lib/city-hub/netherlandsCityHubPages";
import { banksCategoryPage } from "@/src/data/services/categories/banks";
import { healthInsuranceCategoryPage } from "@/src/data/services/categories/health-insurance";
import { immigrationLawyersCategoryPage } from "@/src/data/services/categories/immigration-lawyers";
import { visaConsultantsCategoryPage } from "@/src/data/services/categories/visa-consultants";
import { highlySkilledMigrantSponsorsCategoryPage } from "@/src/data/services/categories/highly-skilled-migrant-sponsors";
import { startupVisaAdvisorsCategoryPage } from "@/src/data/services/categories/startup-visa-advisors";
import { housingPlatformsCategoryPage } from "@/src/data/services/categories/housing-platforms";
import { rentalAgenciesCategoryPage } from "@/src/data/services/categories/rental-agencies";
import { relocationAgenciesCategoryPage } from "@/src/data/services/categories/relocation-agencies";
import { relocationServicesCategoryPage } from "@/src/data/services/categories/relocation-services";
import { HIGHLY_SKILLED_MIGRANT_VISA } from "@/src/content/visas/highly-skilled-migrant";
import { EU_BLUE_CARD_VISA } from "@/src/content/visas/eu-blue-card";
import { DAFT_VISA } from "@/src/content/visas/dutch-american-friendship-treaty";
import { SELF_EMPLOYED_VISA } from "@/src/content/visas/self-employed-visa";
import { STUDENT_VISA } from "@/src/content/visas/student-visa";
import { PARTNER_FAMILY_VISA } from "@/src/content/visas/partner-family-visa";
import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import type { VisaPageData } from "@/src/content/visas/types";
import type { RegistryGuide } from "@/src/lib/guides/types";
import type { SearchDocument } from "./searchDocument";
import { isContentHidden, parseContentPublishStatus } from "@/src/lib/content/contentPublishStatus";

const SERVICE_CATEGORY_FULL: ServiceCategoryPageData[] = [
  banksCategoryPage,
  healthInsuranceCategoryPage,
  immigrationLawyersCategoryPage,
  visaConsultantsCategoryPage,
  highlySkilledMigrantSponsorsCategoryPage,
  startupVisaAdvisorsCategoryPage,
  housingPlatformsCategoryPage,
  rentalAgenciesCategoryPage,
  relocationAgenciesCategoryPage,
  relocationServicesCategoryPage,
];

const VISA_PAGES: VisaPageData[] = [
  HIGHLY_SKILLED_MIGRANT_VISA,
  EU_BLUE_CARD_VISA,
  DAFT_VISA,
  SELF_EMPLOYED_VISA,
  STUDENT_VISA,
  PARTNER_FAMILY_VISA,
];

function joinSearchParts(...parts: (string | undefined | null | readonly string[])[]): string {
  const flat: string[] = [];
  for (const p of parts) {
    if (p == null) continue;
    if (typeof p === "string") flat.push(p);
    else flat.push(...p.filter(Boolean));
  }
  return flat.join(" ").trim();
}

function docFromVisa(v: VisaPageData): SearchDocument {
  const keywords = [
    v.slug.replace(/-/g, " "),
    v.category,
    v.shortTitle,
    v.keyFacts?.routeType,
    v.keyFacts?.commonUsers,
  ].filter(Boolean) as string[];
  const description = v.summary || v.seo.description;
  return {
    id: `visa:${v.slug}`,
    title: v.title,
    href: v.path,
    categoryLabel: "Visa guide",
    pageType: "visa",
    section: v.category,
    description,
    image: v.heroImage ?? null,
    imageAlt: v.heroImageAlt ?? null,
    keywords,
    searchText: joinSearchParts(v.title, v.shortTitle, description, v.seo?.description, v.category, keywords),
  };
}

/** All candidate documents (includes paths that may not be live — filter downstream). */
export function buildAllSearchDocuments(): SearchDocument[] {
  const out: SearchDocument[] = [];

  out.push({
    id: "hub:home",
    title: "ExpatCopilot",
    href: "/",
    categoryLabel: "Home",
    pageType: "hub",
    description: "Practical relocation guidance for moving to the Netherlands — guides, tools, services, and city overviews.",
    keywords: ["expat", "netherlands", "relocation", "move", "guides", "tools"],
    searchText: joinSearchParts(
      "ExpatCopilot",
      "Netherlands relocation",
      "guides tools services cities",
      "expat move"
    ),
  });

  out.push({
    id: "hub:netherlands",
    title: "Move to the Netherlands",
    href: "/netherlands/",
    categoryLabel: "Netherlands",
    pageType: "hub",
    description:
      "Practical relocation platform with guides, tools, and country-specific routes for moving to the Netherlands.",
    keywords: ["netherlands", "nl", "dutch", "expat", "relocation", "immigration"],
    searchText: joinSearchParts(
      "Move to the Netherlands",
      "guides tools relocation",
      "dutch expat immigration"
    ),
  });

  out.push({
    id: "hub:living-survival-guide",
    title: "Netherlands Survival Guide for Expats",
    href: "/netherlands/living/survival-guide/",
    categoryLabel: "Living in the Netherlands",
    pageType: "hub",
    description:
      "Day-to-day orientation for expats: transport, essential apps, payments, weather, groceries, and household rhythms in the Netherlands.",
    keywords: [
      "survival guide Netherlands",
      "living in Netherlands daily life",
      "expat Netherlands apps transport",
      "Dutch everyday essentials",
    ],
    searchText: joinSearchParts(
      "Netherlands survival guide expat living daily life transport apps payments weather groceries"
    ),
  });

  out.push({
    id: "hub:living-daily-life",
    title: "Daily Life Basics in the Netherlands",
    href: "/netherlands/living/daily-life/",
    categoryLabel: "Living in the Netherlands",
    pageType: "hub",
    description:
      "Practical guide to groceries, shops, payments, deliveries, waste awareness, and everyday routines for newcomers in the Netherlands.",
    keywords: [
      "daily life Netherlands expat",
      "Dutch supermarkets errands",
      "Netherlands shopping payments parcels",
      "expat everyday guide Netherlands",
    ],
    searchText: joinSearchParts(
      "daily life Netherlands expat groceries shopping payments deliveries waste routines everyday guide"
    ),
  });

  out.push({
    id: "hub:living-language",
    title: "Language & Phrases for Life in the Netherlands",
    href: "/netherlands/living/language/",
    categoryLabel: "Living in the Netherlands",
    pageType: "hub",
    description:
      "Practical Dutch phrases and language habits for shops, transport, work, neighbors, and everyday life in the Netherlands.",
    keywords: [
      "dutch phrases for expats",
      "do i need dutch in the netherlands",
      "english vs dutch netherlands",
      "useful dutch daily life",
    ],
    searchText: joinSearchParts(
      "language phrases life Netherlands expat Dutch phrases daily life English vs Dutch shops transport work neighbors"
    ),
  });

  out.push({
    id: "hub:moving-pillar",
    title: "Moving to the Netherlands — full guide",
    href: "/netherlands/moving-to-the-netherlands/",
    categoryLabel: "Netherlands",
    pageType: "hub",
    description:
      "Central pillar for planning your move: visas, documents, arrival, registration, banking, insurance, and settling in.",
    keywords: ["moving", "checklist", "plan", "relocation", "visa", "documents"],
    searchText: joinSearchParts(
      "moving to the Netherlands guide pillar",
      "visa documents registration banking insurance"
    ),
  });

  out.push({
    id: "hub:moving-from-index",
    title: "Moving to the Netherlands from your country",
    href: "/netherlands/moving-to-netherlands-from/",
    categoryLabel: "Moving from",
    pageType: "hub",
    description:
      "Country-specific guides for relocating from your home country: documents, visas, shipping, and first steps.",
    keywords: ["from", "country", "india", "usa", "uk", "origin", "international"],
    searchText: joinSearchParts(
      "moving to Netherlands from country guide",
      "origin international relocation"
    ),
  });

  const catBySlug = new Map(SERVICE_CATEGORY_FULL.map((p) => [p.slug, p]));

  for (const card of NETHERLANDS_SERVICES_CATEGORIES) {
    const full = catBySlug.get(card.slug);
    const group = card.group;
    const groupLabel = group != null ? SERVICE_GROUP_LABELS[group] ?? group : "";
    const kw = [...(card.examples ?? []), ...(groupLabel ? [groupLabel] : [])];
    out.push({
      id: `service:${card.slug}`,
      title: card.name,
      href: card.href,
      categoryLabel: "Service",
      pageType: "service",
      section: group != null ? SERVICE_GROUP_LABELS[group] : undefined,
      description: card.description,
      image: full?.hero?.image?.src ?? null,
      imageAlt: full?.hero?.image?.alt ?? null,
      keywords: kw,
      searchText: joinSearchParts(card.name, card.description, kw, full?.seo?.keywords),
    });
  }

  const servicesHub = netherlandsServicesPage;
  out.push({
    id: "hub:services",
    title: servicesHub.hero.title,
    href: servicesHub.path,
    categoryLabel: "Hub",
    pageType: "hub",
    section: "Services",
    description: servicesHub.hero.subtitle,
    image: servicesHub.hero.image?.src ?? null,
    imageAlt: servicesHub.hero.image?.alt ?? null,
    keywords: servicesHub.seo.keywords ?? [],
    searchText: joinSearchParts(
      servicesHub.hero.title,
      servicesHub.hero.subtitle,
      servicesHub.seo.description,
      servicesHub.seo.keywords
    ),
  });

  const citiesHub = netherlandsCitiesOverview;
  out.push({
    id: "hub:cities",
    title: citiesHub.hero.title,
    href: citiesHub.path,
    categoryLabel: "Hub",
    pageType: "hub",
    section: "Cities",
    description: citiesHub.hero.subtitle,
    image: citiesHub.hero.image?.src ?? null,
    imageAlt: citiesHub.hero.image?.alt ?? null,
    keywords: citiesHub.seo.keywords ?? [],
    searchText: joinSearchParts(
      citiesHub.hero.title,
      citiesHub.hero.subtitle,
      citiesHub.seo.description,
      citiesHub.seo.keywords
    ),
  });

  out.push({
    id: "region:randstad",
    title: randstadPage.hero.pageTitle,
    href: randstadPage.path,
    categoryLabel: "Region",
    pageType: "guide",
    section: "Cities",
    description: randstadPage.seo.description,
    image: randstadPage.hero.image.src,
    imageAlt: randstadPage.hero.image.alt,
    keywords: [...randstadPage.seo.keywords],
    searchText: joinSearchParts(
      randstadPage.hero.pageTitle,
      randstadPage.hero.subtitle,
      randstadPage.seo.description,
      [...randstadPage.seo.keywords],
      randstadPage.mainCities.map((city) => city.name)
    ),
  });

  out.push({
    id: "hub:taxes",
    title: taxesHubPage.hero.pageTitle,
    href: taxesHubPage.path,
    categoryLabel: "Hub",
    pageType: "hub",
    section: "Taxes",
    description: taxesHubPage.seo.description,
    image: taxesHubPage.hero.image.src,
    imageAlt: taxesHubPage.hero.image.alt,
    keywords: [...taxesHubPage.seo.keywords],
    searchText: joinSearchParts(
      taxesHubPage.hero.pageTitle,
      taxesHubPage.hero.subtitle,
      taxesHubPage.seo.description,
      [...taxesHubPage.seo.keywords],
      taxesHubPage.taxTopics.map((topic) => topic.label)
    ),
  });

  out.push({
    id: "guide:expat-taxes-netherlands",
    title: expatTaxesNetherlandsPage.hero.pageTitle,
    href: expatTaxesNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Taxes",
    description: expatTaxesNetherlandsPage.seo.description,
    image: expatTaxesNetherlandsPage.hero.image.src,
    imageAlt: expatTaxesNetherlandsPage.hero.image.alt,
    keywords: [...expatTaxesNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      expatTaxesNetherlandsPage.hero.pageTitle,
      expatTaxesNetherlandsPage.hero.subtitle,
      expatTaxesNetherlandsPage.seo.description,
      [...expatTaxesNetherlandsPage.seo.keywords],
      expatTaxesNetherlandsPage.topicLinks.map((topic) => topic.label),
      [...expatTaxesNetherlandsPage.scenarios]
    ),
  });

  out.push({
    id: "guide:30-percent-ruling",
    title: thirtyPercentRulingPage.hero.pageTitle,
    href: thirtyPercentRulingPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Taxes",
    description: thirtyPercentRulingPage.seo.description,
    image: thirtyPercentRulingPage.hero.image.src,
    imageAlt: thirtyPercentRulingPage.hero.image.alt,
    keywords: [...thirtyPercentRulingPage.seo.keywords],
    searchText: joinSearchParts(
      thirtyPercentRulingPage.hero.pageTitle,
      thirtyPercentRulingPage.hero.subtitle,
      thirtyPercentRulingPage.seo.description,
      [...thirtyPercentRulingPage.seo.keywords],
      thirtyPercentRulingPage.snapshotCards.map((card) => `${card.title} ${card.body}`),
      thirtyPercentRulingPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:net-salary-netherlands",
    title: netSalaryNetherlandsPage.hero.pageTitle,
    href: netSalaryNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Taxes",
    description: netSalaryNetherlandsPage.seo.description,
    image: netSalaryNetherlandsPage.hero.image.src,
    imageAlt: netSalaryNetherlandsPage.hero.image.alt,
    keywords: [...netSalaryNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      netSalaryNetherlandsPage.hero.pageTitle,
      netSalaryNetherlandsPage.hero.subtitle,
      netSalaryNetherlandsPage.seo.description,
      [...netSalaryNetherlandsPage.seo.keywords],
      netSalaryNetherlandsPage.salaryExamples.map((example) => `${example.grossSalary} ${example.takeHomeConcept}`),
      netSalaryNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:gross-vs-net-salary",
    title: grossVsNetSalaryPage.hero.pageTitle,
    href: grossVsNetSalaryPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Taxes",
    description: grossVsNetSalaryPage.seo.description,
    image: grossVsNetSalaryPage.hero.image.src,
    imageAlt: grossVsNetSalaryPage.hero.image.alt,
    keywords: [...grossVsNetSalaryPage.seo.keywords],
    searchText: joinSearchParts(
      grossVsNetSalaryPage.hero.pageTitle,
      grossVsNetSalaryPage.hero.subtitle,
      grossVsNetSalaryPage.seo.description,
      [...grossVsNetSalaryPage.seo.keywords],
      grossVsNetSalaryPage.salaryExamples.map((example) => `${example.grossSalary} ${example.estimatedNetRange}`),
      grossVsNetSalaryPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:payroll-tax-netherlands",
    title: payrollTaxNetherlandsPage.hero.pageTitle,
    href: payrollTaxNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Taxes",
    description: payrollTaxNetherlandsPage.seo.description,
    image: payrollTaxNetherlandsPage.hero.image.src,
    imageAlt: payrollTaxNetherlandsPage.hero.image.alt,
    keywords: [...payrollTaxNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      payrollTaxNetherlandsPage.hero.pageTitle,
      payrollTaxNetherlandsPage.hero.subtitle,
      payrollTaxNetherlandsPage.seo.description,
      [...payrollTaxNetherlandsPage.seo.keywords],
      payrollTaxNetherlandsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      payrollTaxNetherlandsPage.expatQuestions.map((item) => `${item.q} ${item.a}`),
      payrollTaxNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:bonus-tax-netherlands",
    title: bonusTaxNetherlandsPage.hero.pageTitle,
    href: bonusTaxNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Taxes",
    description: bonusTaxNetherlandsPage.seo.description,
    image: bonusTaxNetherlandsPage.hero.image.src,
    imageAlt: bonusTaxNetherlandsPage.hero.image.alt,
    keywords: [...bonusTaxNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      bonusTaxNetherlandsPage.hero.pageTitle,
      bonusTaxNetherlandsPage.hero.subtitle,
      bonusTaxNetherlandsPage.seo.description,
      [...bonusTaxNetherlandsPage.seo.keywords],
      bonusTaxNetherlandsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      bonusTaxNetherlandsPage.expatQuestions.map((item) => `${item.q} ${item.a}`),
      bonusTaxNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:healthcare-allowance-netherlands",
    title: healthcareAllowanceNetherlandsPage.hero.pageTitle,
    href: healthcareAllowanceNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Taxes",
    description: healthcareAllowanceNetherlandsPage.seo.description,
    image: healthcareAllowanceNetherlandsPage.hero.image.src,
    imageAlt: healthcareAllowanceNetherlandsPage.hero.image.alt,
    keywords: [...healthcareAllowanceNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      healthcareAllowanceNetherlandsPage.hero.pageTitle,
      healthcareAllowanceNetherlandsPage.hero.subtitle,
      healthcareAllowanceNetherlandsPage.seo.description,
      [...healthcareAllowanceNetherlandsPage.seo.keywords],
      healthcareAllowanceNetherlandsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      healthcareAllowanceNetherlandsPage.expatQuestions.map((item) => `${item.q} ${item.a}`),
      healthcareAllowanceNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:rent-allowance-netherlands",
    title: rentAllowanceNetherlandsPage.hero.pageTitle,
    href: rentAllowanceNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Taxes",
    description: rentAllowanceNetherlandsPage.seo.description,
    image: rentAllowanceNetherlandsPage.hero.image.src,
    imageAlt: rentAllowanceNetherlandsPage.hero.image.alt,
    keywords: [...rentAllowanceNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      rentAllowanceNetherlandsPage.hero.pageTitle,
      rentAllowanceNetherlandsPage.hero.subtitle,
      rentAllowanceNetherlandsPage.seo.description,
      [...rentAllowanceNetherlandsPage.seo.keywords],
      rentAllowanceNetherlandsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      rentAllowanceNetherlandsPage.reference2026.highlights.map((item) => `${item.label} ${item.value} ${item.note}`),
      rentAllowanceNetherlandsPage.reference2026.thresholds.map((row) => `${row.parameter} ${row.value2026} ${row.notes}`),
      rentAllowanceNetherlandsPage.reference2026.workedExamples.map((ex) => `${ex.title} ${ex.inputs} ${ex.indicativeMonthly}`),
      rentAllowanceNetherlandsPage.expatQuestions.map((item) => `${item.q} ${item.a}`),
      rentAllowanceNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:childcare-allowance-netherlands",
    title: childcareAllowanceNetherlandsPage.hero.pageTitle,
    href: childcareAllowanceNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Taxes",
    description: childcareAllowanceNetherlandsPage.seo.description,
    image: childcareAllowanceNetherlandsPage.hero.image.src,
    imageAlt: childcareAllowanceNetherlandsPage.hero.image.alt,
    keywords: [...childcareAllowanceNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      childcareAllowanceNetherlandsPage.hero.pageTitle,
      childcareAllowanceNetherlandsPage.hero.subtitle,
      childcareAllowanceNetherlandsPage.seo.description,
      [...childcareAllowanceNetherlandsPage.seo.keywords],
      childcareAllowanceNetherlandsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      [...childcareAllowanceNetherlandsPage.snapshotTips],
      childcareAllowanceNetherlandsPage.expatQuestions.map((item) => `${item.q} ${item.a}`),
      childcareAllowanceNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:buying-a-house-netherlands",
    title: buyingHouseNetherlandsPage.hero.pageTitle,
    href: buyingHouseNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Housing",
    description: buyingHouseNetherlandsPage.seo.description,
    image: buyingHouseNetherlandsPage.hero.image.src,
    imageAlt: buyingHouseNetherlandsPage.hero.image.alt,
    keywords: [...buyingHouseNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      buyingHouseNetherlandsPage.hero.pageTitle,
      buyingHouseNetherlandsPage.hero.subtitle,
      buyingHouseNetherlandsPage.seo.description,
      [...buyingHouseNetherlandsPage.seo.keywords],
      buyingHouseNetherlandsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      [...buyingHouseNetherlandsPage.snapshotTips],
      buyingHouseNetherlandsPage.reference2026.highlights.map((item) => `${item.label} ${item.value} ${item.note}`),
      buyingHouseNetherlandsPage.cityCards.map((city) => `${city.label} ${city.vibe} ${city.pricing}`),
      buyingHouseNetherlandsPage.expatQuestions.map((item) => `${item.q} ${item.a}`),
      buyingHouseNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:average-salary-netherlands",
    title: averageSalaryNetherlandsPage.hero.pageTitle,
    href: averageSalaryNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Taxes",
    description: averageSalaryNetherlandsPage.seo.description,
    image: averageSalaryNetherlandsPage.hero.image.src,
    imageAlt: averageSalaryNetherlandsPage.hero.image.alt,
    keywords: [...averageSalaryNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      averageSalaryNetherlandsPage.hero.pageTitle,
      averageSalaryNetherlandsPage.hero.subtitle,
      averageSalaryNetherlandsPage.seo.description,
      [...averageSalaryNetherlandsPage.seo.keywords],
      averageSalaryNetherlandsPage.snapshotContextCards.map((card) => `${card.label} ${card.value} ${card.note}`),
      averageSalaryNetherlandsPage.industryCards.map((card) => `${card.title} ${card.body}`),
      averageSalaryNetherlandsPage.cityCards.map((card) => `${card.label} ${card.note}`),
      averageSalaryNetherlandsPage.scenarioQuestions.map((item) => `${item.q} ${item.a}`),
      averageSalaryNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:salary-negotiation-netherlands",
    title: salaryNegotiationNetherlandsPage.hero.pageTitle,
    href: salaryNegotiationNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Jobs",
    description: salaryNegotiationNetherlandsPage.seo.description,
    image: salaryNegotiationNetherlandsPage.hero.image.src,
    imageAlt: salaryNegotiationNetherlandsPage.hero.image.alt,
    keywords: [...salaryNegotiationNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      salaryNegotiationNetherlandsPage.hero.pageTitle,
      salaryNegotiationNetherlandsPage.hero.subtitle,
      salaryNegotiationNetherlandsPage.seo.description,
      [...salaryNegotiationNetherlandsPage.seo.keywords],
      salaryNegotiationNetherlandsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      salaryNegotiationNetherlandsPage.negotiationTopics.map((card) => `${card.title} ${card.body}`),
      salaryNegotiationNetherlandsPage.mistakeCards.map((card) => `${card.title} ${card.body}`),
      salaryNegotiationNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:minimum-wage-netherlands",
    title: minimumWageNetherlandsPage.hero.pageTitle,
    href: minimumWageNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Jobs",
    description: minimumWageNetherlandsPage.seo.description,
    image: minimumWageNetherlandsPage.hero.image.src,
    imageAlt: minimumWageNetherlandsPage.hero.image.alt,
    keywords: [...minimumWageNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      minimumWageNetherlandsPage.hero.pageTitle,
      minimumWageNetherlandsPage.hero.subtitle,
      minimumWageNetherlandsPage.seo.description,
      [...minimumWageNetherlandsPage.seo.keywords],
      minimumWageNetherlandsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      minimumWageNetherlandsPage.industryCards.map((card) => `${card.title} ${card.body}`),
      minimumWageNetherlandsPage.expatQuestions.map((item) => `${item.q} ${item.a}`),
      minimumWageNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:expat-salary-netherlands",
    title: expatSalaryNetherlandsPage.hero.pageTitle,
    href: expatSalaryNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Jobs",
    description: expatSalaryNetherlandsPage.seo.description,
    image: expatSalaryNetherlandsPage.hero.image.src,
    imageAlt: expatSalaryNetherlandsPage.hero.image.alt,
    keywords: [...expatSalaryNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      expatSalaryNetherlandsPage.hero.pageTitle,
      expatSalaryNetherlandsPage.hero.subtitle,
      expatSalaryNetherlandsPage.seo.description,
      [...expatSalaryNetherlandsPage.seo.keywords],
      expatSalaryNetherlandsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      expatSalaryNetherlandsPage.industryCards.map((card) => `${card.title} ${card.body}`),
      expatSalaryNetherlandsPage.expatQuestions.map((item) => `${item.q} ${item.a}`),
      expatSalaryNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:employee-benefits-netherlands",
    title: employeeBenefitsNetherlandsPage.hero.pageTitle,
    href: employeeBenefitsNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Jobs",
    description: employeeBenefitsNetherlandsPage.seo.description,
    image: employeeBenefitsNetherlandsPage.hero.image.src,
    imageAlt: employeeBenefitsNetherlandsPage.hero.image.alt,
    keywords: [...employeeBenefitsNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      employeeBenefitsNetherlandsPage.hero.pageTitle,
      employeeBenefitsNetherlandsPage.hero.subtitle,
      employeeBenefitsNetherlandsPage.seo.description,
      [...employeeBenefitsNetherlandsPage.seo.keywords],
      employeeBenefitsNetherlandsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      employeeBenefitsNetherlandsPage.industryCards.map((card) => `${card.title} ${card.body}`),
      employeeBenefitsNetherlandsPage.expatQuestions.map((item) => `${item.q} ${item.a}`),
      employeeBenefitsNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:pension-netherlands-expats",
    title: pensionNetherlandsExpatsPage.hero.pageTitle,
    href: pensionNetherlandsExpatsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Jobs",
    description: pensionNetherlandsExpatsPage.seo.description,
    image: pensionNetherlandsExpatsPage.hero.image.src,
    imageAlt: pensionNetherlandsExpatsPage.hero.image.alt,
    keywords: [...pensionNetherlandsExpatsPage.seo.keywords],
    searchText: joinSearchParts(
      pensionNetherlandsExpatsPage.hero.pageTitle,
      pensionNetherlandsExpatsPage.hero.subtitle,
      pensionNetherlandsExpatsPage.seo.description,
      [...pensionNetherlandsExpatsPage.seo.keywords],
      pensionNetherlandsExpatsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      pensionNetherlandsExpatsPage.industryCards.map((card) => `${card.title} ${card.body}`),
      pensionNetherlandsExpatsPage.expatQuestions.map((item) => `${item.q} ${item.a}`),
      pensionNetherlandsExpatsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  out.push({
    id: "guide:holiday-allowance-netherlands",
    title: holidayAllowanceNetherlandsPage.hero.pageTitle,
    href: holidayAllowanceNetherlandsPage.path,
    categoryLabel: "Guide",
    pageType: "guide",
    section: "Jobs",
    description: holidayAllowanceNetherlandsPage.seo.description,
    image: holidayAllowanceNetherlandsPage.hero.image.src,
    imageAlt: holidayAllowanceNetherlandsPage.hero.image.alt,
    keywords: [...holidayAllowanceNetherlandsPage.seo.keywords],
    searchText: joinSearchParts(
      holidayAllowanceNetherlandsPage.hero.pageTitle,
      holidayAllowanceNetherlandsPage.hero.subtitle,
      holidayAllowanceNetherlandsPage.seo.description,
      [...holidayAllowanceNetherlandsPage.seo.keywords],
      holidayAllowanceNetherlandsPage.snapshotCards.map((card) => `${card.label} ${card.value}`),
      holidayAllowanceNetherlandsPage.industryCards.map((card) => `${card.title} ${card.body}`),
      holidayAllowanceNetherlandsPage.expatQuestions.map((item) => `${item.q} ${item.a}`),
      holidayAllowanceNetherlandsPage.faq.map((item) => `${item.q} ${item.a}`)
    ),
  });

  for (const city of NETHERLANDS_CITY_HUB_PAGES) {
    out.push({
      id: `city:${city.slug}`,
      title: city.hero.title,
      href: city.path,
      categoryLabel: "City",
      pageType: "city",
      description: city.hero.subtitle || city.seo.description,
      image: city.hero.image?.src ?? null,
      imageAlt: city.hero.image?.alt ?? null,
      keywords: [...(city.seo.keywords ?? []), city.name],
      searchText: joinSearchParts(
        city.name,
        city.hero.title,
        city.hero.subtitle,
        city.seo.description,
        city.seo.keywords
      ),
    });
  }

  const now = new Date();
  for (const g of movingRegistry.guides as RegistryGuide[]) {
    if (!isPubliclyVisible(g.publish, g.publishDate, now)) continue;
    const json = loadGuideBySlug(g.slug);
    const heroImg = json?.hero?.image;
    const desc = g.description ?? json?.description ?? "";
    const kw = [g.category, json?.subtitle].filter(Boolean) as string[];
    out.push({
      id: `guide:${g.slug}`,
      title: g.title ?? json?.title ?? g.slug,
      href: g.path,
      categoryLabel: "Guide",
      pageType: "guide",
      section: g.category,
      description: desc,
      image: heroImg?.src ?? null,
      imageAlt: heroImg?.alt ?? null,
      keywords: kw,
      searchText: joinSearchParts(g.title, desc, json?.subtitle, json?.description, kw),
    });
  }

  for (const c of getPublishedOriginCountryGuides()) {
    out.push({
      id: `concept:${c.slug}`,
      title: c.title,
      href: c.href,
      categoryLabel: "Moving from",
      pageType: "concept",
      description: c.shortDescription,
      keywords: [c.countryName, c.shortName, c.region, ...(c.keywords ?? [])].filter(Boolean) as string[],
      searchText: joinSearchParts(
        c.title,
        c.countryName,
        c.shortName,
        c.shortDescription,
        c.metaDescription,
        c.keywords
      ),
    });
  }

  for (const t of loadToolRegistry()) {
    if (t.status !== "live") continue;
    if (!isPubliclyVisible(t.publish, t.publishDate, now)) continue;
    const kw = t.seo?.keywords ?? [];
    out.push({
      id: `tool:${t.id}`,
      title: t.title,
      href: t.route,
      categoryLabel: "Tool",
      pageType: "tool",
      description: t.summary || t.seo.description,
      keywords: [...kw, ...(t.aliases ?? [])],
      searchText: joinSearchParts(t.title, t.summary, t.seo.description, kw, t.aliases, t.mostUsefulFor),
    });
  }

  for (const cat of toolCategoriesJson.categories) {
    out.push({
      id: `tool-category:${cat.id}`,
      title: cat.label,
      href: cat.route,
      categoryLabel: "Tools",
      pageType: "hub",
      section: "Tool categories",
      description: cat.description,
      keywords: [cat.menuGroup, cat.id],
      searchText: joinSearchParts(cat.label, cat.description, cat.id),
    });
  }

  for (const v of VISA_PAGES) {
    out.push(docFromVisa(v));
  }

  out.push({
    id: "visa:compare-visas",
    title: "Compare Netherlands visas",
    href: "/netherlands/visa/compare-visas/",
    categoryLabel: "Visa guide",
    pageType: "visa",
    description:
      "Compare main Dutch visa and residence routes side by side — work, entrepreneur, student, partner, and more.",
    keywords: ["visa", "compare", "routes", "residence permit", "immigration", "kennismigrant"],
    searchText: joinSearchParts(
      "compare Netherlands visas routes residence permit work student partner entrepreneur immigration"
    ),
  });

  const trustPages: Array<{
    href: string;
    title: string;
    description: string;
    keywords: string[];
  }> = [
    {
      href: "/about/",
      title: "About ExpatCopilot",
      description: "Who we are, how we help expats plan moves to the Netherlands, and our editorial approach.",
      keywords: ["about", "company", "team"],
    },
    {
      href: "/contact/",
      title: "Contact",
      description: "Get in touch with questions or feedback about guides and tools.",
      keywords: ["contact", "email", "help"],
    },
    {
      href: "/how-this-site-works/",
      title: "How this site works",
      description: "How guides, tools, and provider information fit together on ExpatCopilot.",
      keywords: ["how", "works", "guides", "tools"],
    },
    {
      href: "/methodology/",
      title: "Methodology",
      description: "How we research and maintain relocation content.",
      keywords: ["methodology", "research", "sources"],
    },
    {
      href: "/editorial-policy/",
      title: "Editorial policy",
      description: "What we publish, independence, and corrections.",
      keywords: ["editorial", "policy", "independence"],
    },
    {
      href: "/sources/",
      title: "Sources",
      description: "Types of official and institutional sources we rely on.",
      keywords: ["sources", "official", "government"],
    },
    {
      href: "/how-we-rank-services/",
      title: "How we rank services",
      description: "How provider lists and comparisons are built and evaluated.",
      keywords: ["rank", "services", "providers", "comparison"],
    },
    {
      href: "/sitemap/",
      title: "Sitemap",
      description: "Browse all main sections and pages.",
      keywords: ["sitemap", "index", "all pages"],
    },
  ];

  for (const tp of trustPages) {
    out.push({
      id: `trust:${tp.href}`,
      title: tp.title,
      href: tp.href,
      categoryLabel: "Site info",
      pageType: "trust",
      description: tp.description,
      keywords: tp.keywords,
      searchText: joinSearchParts(tp.title, tp.description, tp.keywords),
    });
  }

  type ClusterRow = {
    cluster: string;
    path: string;
    title: string;
    metaDescription: string;
    intro: string;
    pageType: string;
    breadcrumbLabel: string;
    navGroup: string | null;
    contentStatus?: string;
  };
  for (const row of livingCultureCluster.entries as ClusterRow[]) {
    const categoryLabel = row.cluster === "living" ? "Living in the Netherlands" : "Culture in the Netherlands";
    const pageType = row.pageType === "hub" ? ("hub" as const) : ("guide" as const);
    const keywords = [row.cluster, row.navGroup, row.pageType, row.breadcrumbLabel].filter(Boolean) as string[];
    const contentPublishStatus = parseContentPublishStatus(row.contentStatus);
    if (isContentHidden(contentPublishStatus)) continue;
    out.push({
      id: `living-culture:${row.path}`,
      title: row.title,
      href: row.path,
      categoryLabel,
      pageType,
      section: row.cluster,
      description: row.metaDescription,
      keywords,
      searchText: joinSearchParts(row.title, row.metaDescription, row.intro, row.cluster, row.navGroup),
      contentPublishStatus,
    });
  }

  return out;
}

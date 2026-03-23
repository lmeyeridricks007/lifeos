/**
 * Aggregates searchable documents from existing page datasets.
 * When new hubs, guides, or categories ship: extend sources here and ensure route-registry LIVE_PATHS stays in sync.
 */

import movingRegistry from "@/src/content/guides/netherlands/moving/registry.json";
import toolCategoriesJson from "@/src/content/tools/categories.json";
import { loadGuideBySlug } from "@/src/lib/guides/loadGuide";
import { isPubliclyVisible } from "@/src/lib/publishing/isPubliclyVisible";
import { loadToolRegistry } from "@/src/lib/tools/loadToolRegistry";
import { getPublishedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { NETHERLANDS_SERVICES_CATEGORIES, SERVICE_GROUP_LABELS } from "@/src/data/services/categories";
import { netherlandsServicesPage } from "@/src/data/services/netherlands-services-page";
import { netherlandsCitiesOverview } from "@/src/data/cities-overview/netherlands-cities";
import { amsterdamCityPage } from "@/src/data/cities/amsterdam";
import { rotterdamCityPage } from "@/src/data/cities/rotterdam";
import { utrechtCityPage } from "@/src/data/cities/utrecht";
import { theHagueCityPage } from "@/src/data/cities/the-hague";
import { eindhovenCityPage } from "@/src/data/cities/eindhoven";
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
import type { CityHubPageData } from "@/src/lib/city-hub/types";
import type { VisaPageData } from "@/src/content/visas/types";
import type { RegistryGuide } from "@/src/lib/guides/types";
import type { SearchDocument } from "./searchDocument";

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

const CITY_PAGES: CityHubPageData[] = [
  amsterdamCityPage,
  rotterdamCityPage,
  utrechtCityPage,
  theHagueCityPage,
  eindhovenCityPage,
];

const VISA_PAGES: VisaPageData[] = [
  HIGHLY_SKILLED_MIGRANT_VISA,
  EU_BLUE_CARD_VISA,
  DAFT_VISA,
  SELF_EMPLOYED_VISA,
  STUDENT_VISA,
  PARTNER_FAMILY_VISA,
];

function joinSearchParts(...parts: (string | undefined | null | string[])[]): string {
  const flat: string[] = [];
  for (const p of parts) {
    if (p == null) continue;
    if (Array.isArray(p)) flat.push(...p.filter(Boolean));
    else flat.push(p);
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

  for (const city of CITY_PAGES) {
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

  return out;
}

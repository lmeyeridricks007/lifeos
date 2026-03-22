import { getSiteOrigin } from "@/lib/site-origin";
import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";
import {
  buildCountryCostNarrative,
  buildCountryDifferences,
  buildCountryIntro,
  buildCountryTimelineNarrative,
} from "./buildCountryNarrative";
import type { CountryContact, CountryCostRange, CountryRecord, CountryTemplateData } from "./loadCountries";

const GUIDE_LABELS: Record<string, string> = {
  "/netherlands/moving-to-the-netherlands/": "Moving to the Netherlands",
  "/netherlands/moving-to-netherlands-from/": "See all country-specific relocation guides",
  "/netherlands/documents-needed-to-move-netherlands/": "Documents needed to move",
  "/netherlands/moving-to-netherlands-cost/": "Cost of moving to the Netherlands",
  "/netherlands/first-90-days-netherlands/": "First 90 days in the Netherlands",
  "/netherlands/eu-vs-non-eu-moving-to-netherlands/": "EU vs non-EU moving to the Netherlands",
  "/netherlands/open-bank-account-netherlands/": "Open a bank account in the Netherlands",
  "/netherlands/services/housing-platforms/": "Housing platforms for expats",
  "/netherlands/bringing-pets-to-netherlands/": "Bringing pets to the Netherlands",
  "/netherlands/bsn-registration/": "BSN registration",
  "/netherlands/register-address-netherlands/": "Register address in the Netherlands",
  "/netherlands/first-30-days-netherlands/": "First 30 days in the Netherlands",
};

function formatCountryForLabel(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function inject(text: string, countryName: string): string {
  return text.replace(/\{countryName\}/g, countryName);
}

function normalizeFaq(
  templates: Array<{ q: string; a: string }>,
  overrides: Array<{ q: string; a: string }>
): Array<{ q: string; a: string }> {
  const merged = [...templates];
  for (const override of overrides) {
    const existingIndex = merged.findIndex((item) => item.q.toLowerCase() === override.q.toLowerCase());
    if (existingIndex >= 0) {
      merged[existingIndex] = override;
    } else {
      merged.push(override);
    }
  }
  return merged.slice(0, Math.max(6, merged.length));
}

export type CountryPageModel = {
  slug: string;
  name: string;
  /** Optional custom alt text for the hero image. */
  heroImageAlt?: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  opening: {
    intro: string;
    differences: string;
  };
  overviewCards: Array<{ label: string; value: string; note?: string }>;
  whyMove: {
    reasons: string[];
    sectors: string[];
  };
  visaAwareness: {
    commonRoutes: string[];
    notes: string[];
    disclaimer: string;
    visaHubPath: string;
    officialContacts: CountryContact[];
  };
  documents: {
    commonStarterDocuments: string[];
    countrySpecificNotes: string[];
    sources: CountryContact[];
    ctaHref: string;
  };
  timeline: {
    beforeMove: string[];
    arrivalWeek: string[];
    first90Days: string[];
    narrative: string;
  };
  shipping: {
    intro: string;
    notes: string[];
  };
  costs: {
    currency?: string;
    ranges: CountryCostRange[];
    narrative: string;
    disclaimer?: string;
    ctaLabel?: string;
  };
  scenariosSectionIntro?: string;
  checklistPreview: {
    summary: string;
    links: Array<{ label: string; href: string }>;
  };
  affiliate: {
    placementId: string;
    categoryOrder: string[];
    notes: string[];
  };
  scenarios: Array<{ title: string; summary: string }>;
  faq: Array<{ q: string; a: string }>;
  relatedLinks: Array<{ label: string; href: string }>;
  structuredData: {
    webPage: Record<string, unknown>;
    breadcrumb: Record<string, unknown>;
    faq: Record<string, unknown>;
  };
};

export function buildCountryPageModel(country: CountryRecord, templates: CountryTemplateData): CountryPageModel {
  const countryLabel = country.name || formatCountryForLabel(country.slug);
  const siteUrl = getSiteOrigin();
  const canonicalPath = `/netherlands/moving/moving-to-netherlands-from/${country.slug}/`;
  const fromQuery = `?from=${encodeURIComponent(country.slug)}`;

  const subtitleTemplate =
    templates.defaults.hero.subtitleTemplates[country.distanceCategory] ??
    templates.defaults.hero.subtitleTemplates.default;

  const faqTemplates = templates.faqTemplates.map((item) => ({
    q: inject(item.q, countryLabel),
    a: inject(item.a, countryLabel),
  }));
  const faq = normalizeFaq(faqTemplates, country.faqOverrides ?? []);

  const scenarioTemplates = templates.scenarioTemplates.map((item) => ({
    title: inject(item.title, countryLabel),
    summary: inject(item.summary, countryLabel),
  }));
  const scenarios = [...(country.scenarioOverrides ?? []), ...scenarioTemplates].slice(0, 4);

  const defaultTimeline = templates.defaults.timelineDefaults;
  const distanceTimelineAdjustments = defaultTimeline.distanceAdjustments[country.distanceCategory] ?? [];
  const beforeMove = [...defaultTimeline.beforeMove];
  if (country.distanceCategory === "far") {
    beforeMove.unshift("Start document collection earlier to account for longer lead times.");
  }
  beforeMove.push(...distanceTimelineAdjustments);

  const arrivalWeek = [...defaultTimeline.arrivalWeek];
  if (country.distanceCategory === "far") {
    arrivalWeek.unshift("Use temporary housing as a buffer while you complete first-week admin tasks.");
  }

  const first90Days = [...defaultTimeline.first90Days];
  if ((country.travel?.notes?.length ?? 0) > 0) {
    first90Days.push("Review any remaining logistics and shipping follow-ups during month two.");
  }

  const shippingConfig = templates.defaults.shipping?.[country.distanceCategory as "far" | "near"];
  const shippingIntro =
    country.shipping?.intro ?? shippingConfig?.intro ?? "Plan your shipping and logistics in line with your move timeline.";
  const shippingNotes = country.shipping?.notes?.length
    ? country.shipping.notes
    : shippingConfig?.notes ?? ["Coordinate shipment or luggage with your travel and temporary housing dates."];

  const relatedLinks = filterLiveInternalLinks(
    templates.internalLinkRules.requiredRelatedGuides.map((href) => ({
      href,
      label: GUIDE_LABELS[href] ?? href,
    }))
  );

  const preferredCategories =
    country.affiliateContext?.preferredCategories?.length
      ? country.affiliateContext.preferredCategories
      : templates.affiliateMapping.byDistanceCategory[country.distanceCategory] ??
        templates.affiliateMapping.fallbackCategories;

  const placementId = `${templates.affiliateMapping.defaultPlacementIdPrefix}${country.slug.replace(/-/g, "_")}`;
  const seoTitle = country.seo?.title ?? `Moving to the Netherlands from ${countryLabel}: Checklist and Planning Guide`;
  const seoDescription =
    country.seo?.description ??
    `Practical planning guidance for people moving from ${countryLabel} to the Netherlands, including route awareness, document preparation, and first-step priorities.`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Netherlands", item: `${siteUrl}/netherlands/` },
      { "@type": "ListItem", position: 3, name: "Moving to the Netherlands", item: `${siteUrl}/netherlands/moving-to-the-netherlands/` },
      { "@type": "ListItem", position: 4, name: `Moving from ${countryLabel}`, item: `${siteUrl}${canonicalPath}` },
    ],
  };

  return {
    slug: country.slug,
    name: countryLabel,
    heroImageAlt: country.heroImageAlt,
    seo: {
      title: seoTitle,
      description: seoDescription,
      canonicalPath,
    },
    hero: {
      title: `Moving to the Netherlands from ${countryLabel}`,
      subtitle: inject(subtitleTemplate, countryLabel),
      primaryCta: {
        label: templates.defaults.hero.checklistCtaLabel,
        href: `/netherlands/moving/tools/moving-checklist/${fromQuery}`,
      },
      secondaryCta: {
        label: templates.defaults.hero.first90DaysCtaLabel,
        href: `/netherlands/moving/tools/first-90-days/${fromQuery}`,
      },
    },
    opening: {
      intro: buildCountryIntro(country),
      differences: buildCountryDifferences(country),
    },
    overviewCards: [
      {
        label: "Travel distance / flight time",
        value: country.travel?.typicalFlightTime ?? "Varies by route",
        note: country.distanceCategory === "far" ? "Long-haul route" : "Regional route",
      },
      {
        label: "Common route type",
        value: country.regionGroup === "eu" ? "EU / regional route" : "Non-EU route",
      },
      {
        label: "Popular Dutch cities",
        value: (country.relocationProfile?.popularDutchCities ?? []).slice(0, 4).join(", ") || "Amsterdam, Rotterdam",
      },
      {
        label: "Common relocation sectors",
        value: (country.relocationProfile?.commonSectors ?? []).slice(0, 4).join(", ") || "Technology, services",
      },
    ],
    whyMove: {
      reasons: country.relocationProfile?.commonReasons ?? [],
      sectors: country.relocationProfile?.commonSectors ?? [],
    },
    visaAwareness: {
      commonRoutes: country.visaAwareness?.commonRoutes ?? [],
      notes: country.visaAwareness?.notes ?? [],
      disclaimer: "Route suitability depends on your individual circumstances and sponsor setup.",
      visaHubPath: templates.defaults.visaHubPath,
      officialContacts: country.contacts?.official ?? [],
    },
    documents: {
      commonStarterDocuments: country.documents?.commonStarterDocuments ?? [],
      countrySpecificNotes: country.documents?.countrySpecificNotes ?? [],
      sources: country.documents?.sources ?? [],
      ctaHref: `/netherlands/document-readiness-checker/${fromQuery}`,
    },
    timeline: {
      beforeMove,
      arrivalWeek,
      first90Days,
      narrative: buildCountryTimelineNarrative(country),
    },
    shipping: {
      intro: shippingIntro,
      notes: shippingNotes,
    },
    costs: {
      currency: country.costs?.currency,
      ranges: country.costs?.ranges ?? [],
      narrative: buildCountryCostNarrative(country),
      disclaimer: templates.defaults.costSection?.disclaimer,
      ctaLabel: templates.defaults.costSection?.ctaLabel,
    },
    scenariosSectionIntro: templates.defaults.scenariosSection?.intro,
    checklistPreview: {
      summary: templates.defaults.checklistPreview.summary,
      links: [
        { label: "Open moving checklist tool", href: `/netherlands/moving/tools/moving-checklist/${fromQuery}` },
        { label: "Open arrival planner", href: `/netherlands/moving/tools/arrival-planner/${fromQuery}` },
        { label: "Open first 90 days tool", href: `/netherlands/moving/tools/first-90-days/${fromQuery}` },
      ],
    },
    affiliate: {
      placementId,
      categoryOrder: preferredCategories,
      notes: country.affiliateContext?.customNotes ?? [],
    },
    scenarios,
    faq,
    relatedLinks,
    structuredData: {
      webPage: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: seoTitle,
        description: seoDescription,
        url: `${siteUrl}${canonicalPath}`,
      },
      breadcrumb,
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    },
  };
}


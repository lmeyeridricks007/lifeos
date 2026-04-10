import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveClusterToolPostValueBlock } from "@/src/components/monetization/MoveClusterToolPostValueBlock";
import { UtilitiesServicesAtAGlance } from "@/src/components/tools/utilities-services/UtilitiesServicesAtAGlance";
import { UtilitiesServicesCalculatorClient } from "@/src/components/tools/utilities-services/UtilitiesServicesCalculatorClient";
import { UTILITIES_SERVICES_FAQ_ITEMS } from "@/src/components/tools/utilities-services/UtilitiesServicesFAQ";
import { UtilitiesServicesGuideContent } from "@/src/components/tools/utilities-services/UtilitiesServicesGuideContent";
import { UtilitiesServicesHero } from "@/src/components/tools/utilities-services/UtilitiesServicesHero";
import { UtilitiesServicesOfficialSources } from "@/src/components/tools/utilities-services/UtilitiesServicesOfficialSources";
import { UtilitiesServicesRecommendedDynamic } from "@/src/components/tools/utilities-services/UtilitiesServicesRecommendedDynamic";
import { UtilitiesServicesRecommendedSections } from "@/src/components/tools/utilities-services/UtilitiesServicesRecommendedSections";
import { UtilitiesServicesRightRail } from "@/src/components/tools/utilities-services/UtilitiesServicesRightRail";
import { UtilitiesServicesScenarioCards } from "@/src/components/tools/utilities-services/UtilitiesServicesScenarioCards";
import { getUtilitiesServicesGroupedRecommendations } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/living/tools/utilities-services-comparison/";
const BASE = "/netherlands";
const HERO_IMAGE = "/images/tools/netherlands-utilities-services-comparison-hero.png";

const META_TITLE = "Netherlands Utilities & Household Services Planner | ExpatCopilot";
const META_DESCRIPTION =
  "Destination guide and free planner for Dutch household utilities: what to arrange yourself vs local charges, landlord questions, first-month setup, and monthly bands for energy, water, internet, mobile, and gemeente-linked costs. Worked presets, FAQs, official sources, and links to cost of living, rent, cities, and moving tools. Planning only — not live quotes.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical },
  keywords: [
    "utilities comparison Netherlands",
    "Dutch energy internet setup expat",
    "moving utilities Netherlands expat",
    "what utilities to arrange Netherlands",
    "monthly utilities Netherlands apartment",
    "utility setup checklist Netherlands",
    "Dutch household services estimate",
    "gemeente charges Netherlands planning",
    "landlord utilities included Netherlands",
    "first month utilities Netherlands",
    "water company Netherlands expat",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: canonical,
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dutch household with utilities-planning motifs — editorial hero for the utilities and services comparison tool; not a provider advertisement.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

const RELATED_NEXT_STEPS = [
  {
    href: `${BASE}/living/survival-guide/`,
    title: "Netherlands Survival Guide",
    description: "Day-to-day transport, apps, payments, and household rhythm next to utilities.",
  },
  {
    href: `${BASE}/living/daily-life/`,
    title: "Daily life basics",
    description: "Groceries, errands, deliveries, and household habits alongside recurring utility setup.",
  },
  {
    href: `${BASE}/living/utilities/`,
    title: "Utilities in the Netherlands",
    description: "Energy, water, internet, and municipality context.",
  },
  {
    href: `${BASE}/living/rental-market/`,
    title: "Rental market guide",
    description: "What is often included in rent vs paid separately.",
  },
  {
    href: `${BASE}/money/tools/cost-of-living-calculator/`,
    title: "Cost of living calculator",
    description: "Full monthly budget next to household services.",
  },
  {
    href: `${BASE}/housing/tools/rent-affordability-calculator/`,
    title: "Rent affordability calculator",
    description: "Pair rent stress with utilities assumptions.",
  },
  {
    href: `${BASE}/tools/city-comparison/`,
    title: "Netherlands city comparison",
    description: "City choice interacts with housing and commute.",
  },
  {
    href: `${BASE}/family/tools/childcare-cost-estimator/`,
    title: "Childcare cost estimator",
    description: "Family cash-flow beyond utilities.",
  },
  {
    href: `${BASE}/taxes/tools/healthcare-allowance-estimator/`,
    title: "Healthcare allowance estimator",
    description: "Toeslag planning alongside fixed monthly lines.",
  },
  {
    href: `${BASE}/moving/tools/moving-checklist/`,
    title: "Moving checklist",
    description: "Broader relocation tasks beyond utilities.",
  },
  {
    href: `${BASE}/moving/tools/first-90-days/`,
    title: "First 90 days planner",
    description: "Sequence admin and setup after arrival.",
  },
  {
    href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`,
    title: "Dutch salary net calculator",
    description: "Net income context for household budgeting.",
  },
  {
    href: `${BASE}/housing/tools/`,
    title: "Housing tools hub",
    description: "Rent and mortgage-related calculators.",
  },
  {
    href: `${BASE}/living/survival-guide/`,
    title: "Living Survival Guide hub",
    description: "Housing, utilities, transport, and daily-life entry point.",
  },
  {
    href: `${BASE}/cities/`,
    title: "Netherlands cities overview",
    description: "Compare major cities before you lock in housing and commute.",
  },
] as const;

function relatedGuidesFromRouteStatus(
  items: typeof RELATED_NEXT_STEPS
): Array<{ href: string; title: string; description: string; status?: "coming_soon" }> {
  const out: Array<{ href: string; title: string; description: string; status?: "coming_soon" }> = [];
  for (const r of items) {
    const st = getRouteStatus(r.href);
    if (st === "hidden") continue;
    if (st === "coming-soon") {
      out.push({ href: r.href, title: r.title, description: r.description, status: "coming_soon" });
    } else {
      out.push({ href: r.href, title: r.title, description: r.description });
    }
  }
  return out;
}

const FAQ_ITEMS = UTILITIES_SERVICES_FAQ_ITEMS.map((q) => ({
  id: q.id,
  question: q.question,
  answer: q.answer,
}));

const PAGE_DISCLOSURE =
  "This tool produces household planning estimates only. It is not a live tariff engine, provider switching service, legal interpretation of your lease, or personalized quote. Energy retailers, water companies, municipalities, and landlords set real prices and rules — confirm every line with official letters and contracts before you rely on figures for decisions.";

export default function UtilitiesServicesComparisonPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(canonical, origin).toString();
  const recommendedGroups = getUtilitiesServicesGroupedRecommendations();
  const relatedGuidesResolved = relatedGuidesFromRouteStatus(RELATED_NEXT_STEPS);

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Living Survival Guide", url: "/netherlands/living/survival-guide/" },
    { name: "Utilities & services comparison", url: canonical },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Netherlands Utilities & Household Services Comparison Planner",
    description:
      "Client-side planner for expat household utilities in the Netherlands: monthly bands, compare vs fixed guidance, first-month setup, scenario comparison, URL share state, HTML export — indicative only, not quotes or legal advice.",
    url: canonical,
    applicationCategory: "PlanningApplication",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: META_TITLE,
    description:
      "Guide and calculator for Dutch household utilities: energy, internet, mobile, water, gemeente charges, first-month setup, landlord questions, presets, FAQs, and links to cost of living, rent, cities, and moving tools.",
    canonicalPath: canonical,
  });
  const faqJsonLd = buildFaqSchema(FAQ_ITEMS.map((q) => ({ question: q.question, answer: q.answer })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}

      <ToolPageTemplate
        movingClusterHero
        examplesCollapsibleDefaultOpen={false}
        hero={<UtilitiesServicesHero shareUrl={shareUrl} canonicalPath={canonical} primaryScrollToId="tool-inputs" />}
        intro={<UtilitiesServicesAtAGlance />}
        disclosure={PAGE_DISCLOSURE}
        sidebar={<UtilitiesServicesRightRail />}
        primarySectionTitle="Calculator"
        primarySectionContent={
          <UtilitiesServicesCalculatorClient
            calculatorCanonicalUrl={new URL(canonical, origin).toString()}
            siteName="ExpatCopilot"
          />
        }
        mainSectionTitle="Worked examples & presets"
        examplesCollapsibleTitle="Worked examples & presets"
        examplesSection={<UtilitiesServicesScenarioCards canonicalPath={canonical} />}
        seoContentSectionTitle="Netherlands utilities & household services guide"
        seoContent={<UtilitiesServicesGuideContent />}
        recommendedServices={
          <Suspense fallback={<UtilitiesServicesRecommendedSections groups={recommendedGroups} />}>
            <UtilitiesServicesRecommendedDynamic baseGroups={recommendedGroups} />
          </Suspense>
        }
        relatedGuidesSectionTitle="Related guides and tools"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuidesResolved}
        faqItems={FAQ_ITEMS}
        postToolValue={<MoveClusterToolPostValueBlock preset="utilitiesAfterPlanning" />}
        allowPreFaqMonetization
        internalLinkStrip={
          <div className="space-y-5 text-sm">
            <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Living and utilities">
              <span className="w-full text-xs font-semibold uppercase tracking-wide text-foreground-muted">Living</span>
              <Link href={`${BASE}/living/`} className="font-medium text-brand-600 hover:text-brand-700">
                Living hub
              </Link>
              <Link href={`${BASE}/living/utilities/`} className="font-medium text-brand-600 hover:text-brand-700">
                Utilities guides
              </Link>
              <Link href={`${BASE}/living/rental-market/`} className="font-medium text-brand-600 hover:text-brand-700">
                Rental market
              </Link>
            </nav>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border/60 pt-5" aria-label="Money and housing tools">
              <span className="w-full text-xs font-semibold uppercase tracking-wide text-foreground-muted">Money & housing</span>
              <Link href={`${BASE}/money/tools/cost-of-living-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
                Cost of living calculator
              </Link>
              <Link href={`${BASE}/housing/tools/rent-affordability-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
                Rent affordability calculator
              </Link>
              <Link href={`${BASE}/tools/city-comparison/`} className="font-medium text-brand-600 hover:text-brand-700">
                City comparison
              </Link>
              <Link href={`${BASE}/housing/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
                Housing tools
              </Link>
            </nav>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border/60 pt-5" aria-label="Move and family">
              <span className="w-full text-xs font-semibold uppercase tracking-wide text-foreground-muted">Move & family</span>
              <Link href={`${BASE}/moving/tools/moving-checklist/`} className="font-medium text-brand-600 hover:text-brand-700">
                Moving checklist
              </Link>
              <Link href={`${BASE}/moving/tools/first-90-days/`} className="font-medium text-brand-600 hover:text-brand-700">
                First 90 days
              </Link>
              <Link href={`${BASE}/family/tools/childcare-cost-estimator/`} className="font-medium text-brand-600 hover:text-brand-700">
                Childcare estimator
              </Link>
              <Link href={`${BASE}/taxes/tools/healthcare-allowance-estimator/`} className="font-medium text-brand-600 hover:text-brand-700">
                Healthcare allowance estimator
              </Link>
              <Link href={`${BASE}/cities/`} className="font-medium text-brand-600 hover:text-brand-700">
                Cities overview
              </Link>
            </nav>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border/60 pt-5" aria-label="Services hubs">
              <span className="w-full text-xs font-semibold uppercase tracking-wide text-foreground-muted">Services</span>
              <Link href={`${BASE}/services/mobile-connectivity/`} className="font-medium text-brand-600 hover:text-brand-700">
                Mobile & internet
              </Link>
              <Link href={`${BASE}/living/utilities/`} className="font-medium text-brand-600 hover:text-brand-700">
                Utilities guides
              </Link>
            </nav>
          </div>
        }
        extraSection={<UtilitiesServicesOfficialSources />}
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { ChildcareAtAGlance } from "@/src/components/tools/childcare/ChildcareAtAGlance";
import { ChildcareHero } from "@/src/components/tools/childcare/ChildcareHero";
import { ChildcareMethodology } from "@/src/components/tools/childcare/ChildcareMethodology";
import { ChildcareOfficialSources } from "@/src/components/tools/childcare/ChildcareOfficialSources";
import { ChildcareRecommendedServices } from "@/src/components/tools/childcare/ChildcareRecommendedServices";
import { ChildcareRightRail } from "@/src/components/tools/childcare/ChildcareRightRail";
import { MoveClusterToolPostValueBlock } from "@/src/components/monetization/MoveClusterToolPostValueBlock";
import { CHILDCARE_FAQ_ITEMS } from "@/src/content/tools/childcare/childcareFaq";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { getChildcareGroupedRecommendations } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const ChildcareEstimatorClient = dynamic(
  () =>
    import("@/src/components/tools/childcare/ChildcareEstimatorClient").then((m) => ({
      default: m.ChildcareEstimatorClient,
    })),
  {
    loading: () => (
      <div
        className="mx-auto max-w-3xl rounded-2xl border border-copilot-primary/12 bg-copilot-bg-soft/50 p-10 text-center text-sm text-copilot-text-secondary"
        role="status"
        aria-live="polite"
      >
        Loading childcare calculator…
      </div>
    ),
  }
);

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/family/tools/childcare-cost-estimator/";
const BASE = "/netherlands";
const HERO_IMAGE = "/images/heroes/netherlands-childcare-cost-estimator-hero.png";

const META_TITLE =
  "Netherlands Childcare Cost Estimator 2026 | Daycare, BSO & Gastouder Planning for Expats";
const META_DESCRIPTION =
  "Estimate Dutch childcare costs for expats: gross provider bills, estimated childcare benefit (not Belastingdienst), net out-of-pocket, first-month cash, and budget context for daycare, BSO, and gastouder. City model rates, cap logic, scenario comparison — planning only.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical },
  keywords: [
    "childcare cost Netherlands expat",
    "childcare benefit Netherlands calculator planning",
    "daycare cost Amsterdam",
    "BSO cost Netherlands",
    "gastouder cost Netherlands",
    "kinderopvangtoeslag estimate",
    "daycare after subsidy Netherlands",
    "Netherlands family budget childcare",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: canonical,
    images: [
      {
        url: HERO_IMAGE,
        width: 1376,
        height: 768,
        alt: "Illustration: Netherlands childcare cost planning and family budgeting — indicative, not official benefit data.",
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
    href: `${BASE}/moving-to-netherlands-with-kids/`,
    title: "Moving to the Netherlands with kids",
    description: "Schools, childcare timing, and family admin.",
  },
  {
    href: `${BASE}/money/tools/cost-of-living-calculator/`,
    title: "Cost of living calculator",
    description: "Monthly budget context beyond childcare.",
  },
  {
    href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`,
    title: "Dutch salary net calculator",
    description: "Gross-to-net for salary negotiations.",
  },
  {
    href: `${BASE}/taxes/tools/30-ruling-calculator/`,
    title: "30% ruling calculator",
    description: "Facility allowance planning for eligible roles.",
  },
  {
    href: `${BASE}/housing/tools/rent-affordability-calculator/`,
    title: "Rent affordability calculator",
    description: "Pair housing stress with childcare lines.",
  },
  {
    href: `${BASE}/tools/city-comparison/`,
    title: "Netherlands city comparison",
    description: "Compare cities before you lock childcare and commute.",
  },
  {
    href: `${BASE}/amsterdam/`,
    title: "Amsterdam city hub",
    description: "Rent, commute, and lifestyle context next to childcare quotes.",
  },
  {
    href: `${BASE}/utrecht/`,
    title: "Utrecht city hub",
    description: "Train connections and family-friendly angles for budgeting.",
  },
  {
    href: `${BASE}/the-hague/`,
    title: "The Hague city hub",
    description: "Institutions and family life — pair with your care search.",
  },
  {
    href: `${BASE}/moving/tools/relocation-cost-estimator/`,
    title: "Relocation cost estimator",
    description: "One-off move costs alongside monthly family cash needs.",
  },
  {
    href: `${BASE}/moving/tools/first-90-days/`,
    title: "First 90 days planner",
    description: "Sequence arrival tasks when children are involved.",
  },
  {
    href: `${BASE}/first-90-days-netherlands/`,
    title: "First 90 days in the Netherlands",
    description: "Editorial guide to early weeks after arrival.",
  },
  {
    href: `${BASE}/health-insurance-netherlands/`,
    title: "Health insurance in the Netherlands",
    description: "Mandatory basic insurance for most residents.",
  },
  {
    href: `${BASE}/open-bank-account-netherlands/`,
    title: "Open a Dutch bank account",
    description: "Pay rent and childcare from a local account.",
  },
  {
    href: `${BASE}/family/tools/`,
    title: "Family tools hub",
    description: "More partner and family planning tools.",
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

const FAQ_ITEMS = CHILDCARE_FAQ_ITEMS.map((q) => ({
  id: q.id,
  question: q.question,
  answer: q.answer,
}));

const CHILDCARE_PLACEMENT_SEARCH = "tool_childcare_cost_estimator_childcare_search";
const CHILDCARE_PLACEMENT_RELOCATION = "tool_childcare_cost_estimator_relocation_childcare_help";
const CHILDCARE_PLACEMENT_FAMILY_FINANCE = "tool_childcare_cost_estimator_recommended";

export default function ChildcareCostEstimatorPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(canonical, origin).toString();
  const childcareRecommendedGroups = getChildcareGroupedRecommendations();
  const childcareSearchPartners = loadPlacementWithProviders(CHILDCARE_PLACEMENT_SEARCH, "netherlands", undefined);
  const childcareRelocationPartners = loadPlacementWithProviders(CHILDCARE_PLACEMENT_RELOCATION, "netherlands", undefined);
  const childcareFamilyFinancePartners = loadPlacementWithProviders(CHILDCARE_PLACEMENT_FAMILY_FINANCE, "netherlands", undefined);
  const relatedGuidesResolved = relatedGuidesFromRouteStatus(RELATED_NEXT_STEPS);

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Family tools", url: "/netherlands/family/tools/" },
    { name: "Childcare cost estimator", url: canonical },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Netherlands Expat Childcare Cost Estimator",
    description:
      "Client-side planning tool for expat childcare costs in the Netherlands: daycare, BSO, gastouder, estimated benefit bands, official cap logic, first-month cash, URL share and local storage — not an official toeslag calculator.",
    url: canonical,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: META_TITLE,
    description: META_DESCRIPTION,
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
        introSurfaceId="before-you-start"
        hero={<ChildcareHero shareUrl={shareUrl} canonicalPath={canonical} />}
        intro={<ChildcareAtAGlance />}
        disclosure="This tool is for family budgeting and relocation planning only. It is not the official Dutch childcare benefit (kinderopvangtoeslag) calculator, not legal or tax advice, and does not replace Belastingdienst outcomes or contracts from childcare providers. Provider rates, waiting lists, and holiday gaps can change real totals quickly."
        sidebar={<ChildcareRightRail />}
        primarySectionTitle="Childcare calculator"
        primarySectionContent={<ChildcareEstimatorClient />}
        mainSectionTitle="Supporting detail"
        recommendedServices={
          <div className="flex flex-col gap-8">
            {childcareSearchPartners && childcareSearchPartners.items.length > 0 ? (
              <div id="childcare-search-partners" className="scroll-mt-28 md:scroll-mt-32">
                <AffiliateBlockView placement={childcareSearchPartners.placement} items={childcareSearchPartners.items} />
              </div>
            ) : null}
            {childcareRelocationPartners && childcareRelocationPartners.items.length > 0 ? (
              <div id="childcare-relocation-partners" className="scroll-mt-28 md:scroll-mt-32">
                <AffiliateBlockView placement={childcareRelocationPartners.placement} items={childcareRelocationPartners.items} />
              </div>
            ) : null}
            {childcareFamilyFinancePartners && childcareFamilyFinancePartners.items.length > 0 ? (
              <div id="childcare-family-finances" className="scroll-mt-28 md:scroll-mt-32">
                <AffiliateBlockView placement={childcareFamilyFinancePartners.placement} items={childcareFamilyFinancePartners.items} />
              </div>
            ) : null}
            <ChildcareRecommendedServices groups={childcareRecommendedGroups} />
          </div>
        }
        seoContentSectionTitle="How we estimate"
        seoContent={<ChildcareMethodology />}
        relatedGuidesSectionTitle="Related guides and next steps"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuidesResolved}
        faqItems={FAQ_ITEMS}
        postToolValue={<MoveClusterToolPostValueBlock preset="movingChecklistAndRelocationCost" />}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Hubs and related tools">
            <Link href={`${BASE}/family/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Family tools
            </Link>
            <Link href={`${BASE}/money/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Money tools
            </Link>
            <Link href={`${BASE}/taxes/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Tax tools
            </Link>
            <Link href={`${BASE}/housing/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Housing tools
            </Link>
            <Link href={`${BASE}/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              All Netherlands tools
            </Link>
          </nav>
        }
        extraSection={<ChildcareOfficialSources />}
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

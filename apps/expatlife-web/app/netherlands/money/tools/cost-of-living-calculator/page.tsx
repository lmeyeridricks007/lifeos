import type { Metadata } from "next";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { CostOfLivingAffiliateSection } from "@/src/components/tools/cost-of-living/CostOfLivingAffiliateSection";
import { CostOfLivingAtAGlance } from "@/src/components/tools/cost-of-living/CostOfLivingAtAGlance";
import { CostOfLivingCalculatorClient } from "@/src/components/tools/cost-of-living/CostOfLivingCalculatorClient";
import { CostOfLivingHero } from "@/src/components/tools/cost-of-living/CostOfLivingHero";
import { COST_OF_LIVING_FAQ_ITEMS } from "@/src/components/tools/cost-of-living/CostOfLivingFAQ";
import { CostOfLivingMethodology } from "@/src/components/tools/cost-of-living/CostOfLivingMethodology";
import { CostOfLivingOfficialSources } from "@/src/components/tools/cost-of-living/CostOfLivingOfficialSources";
import { CostOfLivingPlanningExtras } from "@/src/components/tools/cost-of-living/CostOfLivingPlanningExtras";
import { CostOfLivingRightRail } from "@/src/components/tools/cost-of-living/CostOfLivingRightRail";
import { CostOfLivingScenarioCards } from "@/src/components/tools/cost-of-living/CostOfLivingScenarioCards";
import { MoveClusterToolPostValueBlock } from "@/src/components/monetization/MoveClusterToolPostValueBlock";
import { getCostOfLivingRecommendedCards } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/money/tools/cost-of-living-calculator/";
const BASE = "/netherlands";
const HERO_IMAGE = "/images/tools/netherlands-cost-of-living-calculator-hero.png";

const META_TITLE =
  "Netherlands Cost of Living Calculator 2026 | Expat Monthly Expenses, Setup Costs & Salary Target";
const META_DESCRIPTION =
  "Plan expat cost of living in the Netherlands: monthly expenses by city (Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven), moving setup costs, first-month cash, savings buffer, and a recommended net salary band. Planning estimates only — not financial advice.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical },
  keywords: [
    "cost of living Netherlands",
    "expat cost of living Netherlands",
    "Amsterdam cost of living expat",
    "monthly expenses Netherlands",
    "moving to Netherlands budget",
    "cost of living calculator Netherlands",
    "how much salary do I need in the Netherlands",
    "Netherlands budget planner expat",
    "Dutch cities cost comparison",
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
        alt: "Illustration: expat cost-of-living planning for the Netherlands — indicative, not financial advice.",
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
    href: `${BASE}/moving-to-the-netherlands/`,
    title: "Moving to the Netherlands",
    description: "Full relocation pillar: timeline, documents, and first months.",
  },
  {
    href: `${BASE}/moving-to-netherlands-cost/`,
    title: "Cost of moving to the Netherlands",
    description: "One-off move costs alongside monthly living context.",
  },
  {
    href: `${BASE}/cities/`,
    title: "Compare Dutch cities",
    description: "City hubs for Amsterdam, Rotterdam, The Hague, Utrecht, and more.",
  },
  {
    href: `${BASE}/amsterdam/`,
    title: "Amsterdam expat hub",
    description: "Local orientation when Amsterdam is your target.",
  },
  {
    href: `${BASE}/rotterdam/`,
    title: "Rotterdam expat hub",
    description: "Housing and lifestyle notes for Rotterdam.",
  },
  {
    href: `${BASE}/the-hague/`,
    title: "The Hague expat hub",
    description: "International city costs and setup context.",
  },
  {
    href: `${BASE}/utrecht/`,
    title: "Utrecht expat hub",
    description: "Smaller city, still a hot rental market.",
  },
  {
    href: `${BASE}/eindhoven/`,
    title: "Eindhoven expat hub",
    description: "Tech-region planning angle.",
  },
  {
    href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`,
    title: "Dutch salary net calculator",
    description: "Gross-to-net planning to pair with this budget band.",
  },
  {
    href: `${BASE}/taxes/tools/30-ruling-calculator/`,
    title: "30% ruling calculator",
    description: "Facility norms — separate from living-cost lines.",
  },
  {
    href: `${BASE}/work/tools/payslip-decoder/`,
    title: "Dutch payslip decoder",
    description: "Understand net lines once payroll starts.",
  },
  {
    href: `${BASE}/health-insurance-netherlands/`,
    title: "Health insurance in the Netherlands",
    description: "Mandatory basic insurance timing and comparison.",
  },
  {
    href: `${BASE}/open-bank-account-netherlands/`,
    title: "Open a bank account in the Netherlands",
    description: "Banking setup for rent and salary.",
  },
  {
    href: `${BASE}/services/housing-platforms/`,
    title: "Housing platforms directory",
    description: "Search portals and listing ecosystems.",
  },
  {
    href: `${BASE}/services/banks/`,
    title: "Banks directory",
    description: "Compare providers before you move money.",
  },
  {
    href: `${BASE}/taxes/`,
    title: "Dutch taxes hub",
    description: "Salary, payroll, and filing context.",
  },
  {
    href: `${BASE}/money/`,
    title: "Money hub",
    description: "Budgeting, banking, and cost themes for expats.",
  },
  {
    href: `${BASE}/moving/tools/relocation-cost-estimator/`,
    title: "Relocation cost estimator",
    description: "Flights, shipping, and move-specific one-offs.",
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

const FAQ_ITEMS = COST_OF_LIVING_FAQ_ITEMS.map((q) => ({
  id: q.id,
  question: q.question,
  answer: q.answer,
}));

export default function CostOfLivingCalculatorPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(canonical, origin).toString();
  const recommendedCards = getCostOfLivingRecommendedCards();
  const relatedGuidesResolved = relatedGuidesFromRouteStatus(RELATED_NEXT_STEPS);

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Money hub", url: "/netherlands/money/" },
    { name: "Money tools", url: "/netherlands/money/tools/" },
    { name: "Cost of living calculator", url: canonical },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Netherlands Expat Cost of Living Calculator",
    description:
      "Client-side planning tool for expat monthly living costs in the Netherlands: city and household scenarios, setup cash, salary target band, URL share and local storage — indicative only, not financial advice.",
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
        hero={
          <CostOfLivingHero
            shareUrl={shareUrl}
            canonicalPath={canonical}
            primaryScrollToId="tool-inputs"
            secondaryGuideHref={`${BASE}/moving-to-netherlands-cost/`}
          />
        }
        intro={<CostOfLivingAtAGlance />}
        disclosure="This tool produces planning estimates only. It is not legal, tax, or financial advice, does not know your personal circumstances, and does not replace quotes from landlords, insurers, schools, or employers. City choice, housing luck, and lifestyle decisions swing real totals more than any calculator can predict."
        sidebar={<CostOfLivingRightRail />}
        primarySectionTitle="Calculator"
        primarySectionContent={<CostOfLivingCalculatorClient />}
        mainSectionTitle="Scenarios & supporting detail"
        examplesSection={<CostOfLivingScenarioCards />}
        recommendedServices={<CostOfLivingAffiliateSection cards={recommendedCards} />}
        seoContentSectionTitle="How we estimate your result"
        seoContent={<CostOfLivingMethodology />}
        relatedGuidesSectionTitle="Related guides and next steps"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuidesResolved}
        faqItems={FAQ_ITEMS}
        postToolValue={<MoveClusterToolPostValueBlock preset="movingChecklistAndRelocationCost" />}
        allowPreFaqMonetization
        beforeFaq={<CostOfLivingPlanningExtras />}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Hubs and related tools">
            <Link href={`${BASE}/money/`} className="font-medium text-brand-600 hover:text-brand-700">
              Money hub
            </Link>
            <Link href={`${BASE}/money/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Money tools
            </Link>
            <Link href={`${BASE}/taxes/`} className="font-medium text-brand-600 hover:text-brand-700">
              Taxes hub
            </Link>
            <Link href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              Salary net calculator
            </Link>
            <Link href={`${BASE}/taxes/tools/30-ruling-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              30% ruling calculator
            </Link>
            <Link href={`${BASE}/work/tools/payslip-decoder/`} className="font-medium text-brand-600 hover:text-brand-700">
              Payslip decoder
            </Link>
            <Link href={`${BASE}/moving/tools/relocation-cost-estimator/`} className="font-medium text-brand-600 hover:text-brand-700">
              Relocation cost estimator
            </Link>
            <Link href={`${BASE}/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              All Netherlands tools
            </Link>
          </nav>
        }
        extraSection={<CostOfLivingOfficialSources />}
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveClusterToolPostValueBlock } from "@/src/components/monetization/MoveClusterToolPostValueBlock";
import { RentAffordabilityAtAGlance } from "@/src/components/tools/rent-affordability/RentAffordabilityAtAGlance";
import { RentAffordabilityCalculatorClient } from "@/src/components/tools/rent-affordability/RentAffordabilityCalculatorClient";
import { RENT_AFFORDABILITY_FAQ_ITEMS } from "@/src/components/tools/rent-affordability/RentAffordabilityFAQ";
import { RentAffordabilityGuide } from "@/src/components/tools/rent-affordability/RentAffordabilityGuide";
import { RentAffordabilityHero } from "@/src/components/tools/rent-affordability/RentAffordabilityHero";
import { RentAffordabilityMethodology } from "@/src/components/tools/rent-affordability/RentAffordabilityMethodology";
import { RentAffordabilityOfficialSources } from "@/src/components/tools/rent-affordability/RentAffordabilityOfficialSources";
import { RentAffordabilityPlanningExtras } from "@/src/components/tools/rent-affordability/RentAffordabilityPlanningExtras";
import { RentAffordabilityRecommendedSections } from "@/src/components/tools/rent-affordability/RentAffordabilityRecommendedSections";
import { RentAffordabilityRightRail } from "@/src/components/tools/rent-affordability/RentAffordabilityRightRail";
import { RentAffordabilityScenarioCards } from "@/src/components/tools/rent-affordability/RentAffordabilityScenarioCards";
import { getRentAffordabilityServiceBundles } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/housing/tools/rent-affordability-calculator/";
const BASE = "/netherlands";
const HERO_IMAGE = "/images/tools/netherlands-rent-affordability-calculator-hero.png";

const META_TITLE = "Netherlands Rent Affordability Calculator & Planning Guide | ExpatCopilot";
const META_DESCRIPTION =
  "Free Dutch rent affordability calculator plus a practical guide: affordable rent norms, landlord screening vs net budgeting, Amsterdam vs Rotterdam vs The Hague vs Utrecht, move-in cash, 30% ruling planning, and first-month rental costs. Indicative planning only — not legal or financial advice.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical },
  keywords: [
    "rent affordability calculator netherlands",
    "how much rent can i afford netherlands",
    "amsterdam rent affordability",
    "landlord income requirement netherlands",
    "expat rent calculator netherlands",
    "Dutch rental budget planner",
    "gross salary rent multiple Netherlands",
    "Utrecht rent planning",
    "Rotterdam rent budget",
    "Dutch landlord gross rent multiple",
    "first month rent Netherlands deposit",
    "expat housing budget Netherlands",
    "The Hague rent affordability",
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
        alt: "Netherlands rent affordability calculator — editorial hero with housing and budget motifs; planning tool, not financial advice.",
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
    description: "Relocation pillar: timeline, documents, and first months.",
  },
  {
    href: `${BASE}/moving-to-netherlands-cost/`,
    title: "Cost of moving to the Netherlands",
    description: "One-off move costs next to monthly rent planning.",
  },
  {
    href: `${BASE}/living/rental-market/`,
    title: "Housing & rental market guide",
    description: "Viewings, competition, and how listings behave in practice.",
  },
  {
    href: `${BASE}/housing/`,
    title: "Housing & rental guides",
    description: "Renting, contracts, and housing hub context.",
  },
  {
    href: `${BASE}/housing/tools/`,
    title: "Housing tools hub",
    description: "More calculators and planners for renters and buyers.",
  },
  {
    href: `${BASE}/housing/tools/dutch-rental-budget-calculator/`,
    title: "Dutch rental budget calculator",
    description: "Complementary rental cash-flow angles alongside affordability.",
  },
  {
    href: `${BASE}/services/rental-agencies/`,
    title: "Rental agencies hub",
    description: "Agencies and rental support — useful after you have a budget bracket.",
  },
  {
    href: `${BASE}/services/housing-platforms/`,
    title: "Housing platforms directory",
    description: "Listing ecosystems many expats use once the budget is clear.",
  },
  {
    href: `${BASE}/money/tools/cost-of-living-calculator/`,
    title: "Netherlands cost of living calculator",
    description: "Full monthly budget bands alongside rent.",
  },
  {
    href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`,
    title: "Dutch salary net calculator",
    description: "Gross-to-net with optional 30% ruling structure.",
  },
  {
    href: `${BASE}/taxes/tools/30-ruling-calculator/`,
    title: "30% ruling calculator",
    description: "Eligibility and facility norms — separate from this planner.",
  },
  {
    href: `${BASE}/work/tools/payslip-decoder/`,
    title: "Dutch payslip decoder",
    description: "Understand payroll lines once you are hired.",
  },
  {
    href: `${BASE}/amsterdam/`,
    title: "Amsterdam expat hub",
    description: "Local housing and cost context.",
  },
  {
    href: `${BASE}/rotterdam/`,
    title: "Rotterdam expat hub",
    description: "Often a lower rent anchor than Amsterdam.",
  },
  {
    href: `${BASE}/the-hague/`,
    title: "The Hague expat hub",
    description: "International city and commuting patterns.",
  },
  {
    href: `${BASE}/utrecht/`,
    title: "Utrecht expat hub",
    description: "Tight rental market, strong jobs base.",
  },
  {
    href: `${BASE}/eindhoven/`,
    title: "Eindhoven expat hub",
    description: "Tech-region planning angle.",
  },
  {
    href: `${BASE}/haarlem/`,
    title: "Haarlem expat hub",
    description: "Randstad housing context next to Amsterdam.",
  },
  {
    href: `${BASE}/leiden/`,
    title: "Leiden expat hub",
    description: "University city and commuter belt angles.",
  },
  {
    href: `${BASE}/delft/`,
    title: "Delft expat hub",
    description: "Smaller-city baseline near The Hague and Rotterdam.",
  },
  {
    href: `${BASE}/amstelveen/`,
    title: "Amstelveen expat hub",
    description: "Suburban Amsterdam corridor planning.",
  },
  {
    href: `${BASE}/groningen/`,
    title: "Groningen expat hub",
    description: "Northern NL rent anchor vs Randstad.",
  },
  {
    href: `${BASE}/breda/`,
    title: "Breda expat hub",
    description: "Southern NL housing and commute framing.",
  },
  {
    href: `${BASE}/cities/`,
    title: "Netherlands city hubs",
    description: "All published city pages in one place.",
  },
  {
    href: `${BASE}/services/banks/`,
    title: "Banks for expats in the Netherlands",
    description: "Accounts and rent payment readiness.",
  },
  {
    href: `${BASE}/services/health-insurance/`,
    title: "Dutch health insurance hub",
    description: "Basic policy is a fixed monthly line next to rent.",
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

const FAQ_ITEMS = RENT_AFFORDABILITY_FAQ_ITEMS.map((q) => ({
  id: q.id,
  question: q.question,
  answer: q.answer,
}));

const PAGE_DISCLOSURE =
  "This tool produces planning estimates only. It is not legal, tax, or financial advice, does not know your contract or landlord policy, and does not replace listings, employer payroll, or professional review. Landlord income multiples and documentation rules vary by operator — treat them as screening assumptions, not guarantees.";

export default function RentAffordabilityCalculatorPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(canonical, origin).toString();
  const serviceBundles = getRentAffordabilityServiceBundles();
  const relatedGuidesResolved = relatedGuidesFromRouteStatus(RELATED_NEXT_STEPS);

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Housing hub", url: "/netherlands/housing/" },
    { name: "Housing tools", url: "/netherlands/housing/tools/" },
    { name: "Rent affordability calculator", url: canonical },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Netherlands Rent Affordability Calculator",
    description:
      "Client-side planner and guide for Dutch rental affordability: net and gross income, landlord screening multiples, city and neighborhood anchors, monthly vs move-in cash, 30% ruling planning toggle, scenario comparison, URL state and HTML export — indicative only, not legal or financial advice.",
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
        examplesCollapsibleDefaultOpen
        hero={
          <RentAffordabilityHero shareUrl={shareUrl} canonicalPath={canonical} primaryScrollToId="tool-inputs" />
        }
        intro={<RentAffordabilityAtAGlance />}
        disclosure={PAGE_DISCLOSURE}
        sidebar={<RentAffordabilityRightRail />}
        primarySectionTitle="Calculator"
        primarySectionContent={
          <RentAffordabilityCalculatorClient
            calculatorCanonicalUrl={new URL(canonical, origin).toString()}
            siteName="ExpatCopilot"
          />
        }
        mainSectionTitle="Worked examples"
        examplesSection={<RentAffordabilityScenarioCards />}
        recommendedServices={<RentAffordabilityRecommendedSections bundles={serviceBundles} />}
        seoContentSectionTitle="Rent affordability in the Netherlands"
        seoContent={
          <>
            <RentAffordabilityGuide />
            <div className="not-prose mt-12 border-t border-copilot-primary/10 pt-10">
              <h3 className="text-lg font-semibold tracking-tight text-copilot-text-primary">How we estimate your result</h3>
              <div className="mt-4">
                <RentAffordabilityMethodology />
              </div>
            </div>
          </>
        }
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuidesResolved}
        faqItems={FAQ_ITEMS}
        postToolValue={<MoveClusterToolPostValueBlock preset="movingChecklistAndRelocationCost" />}
        allowPreFaqMonetization
        beforeFaq={<RentAffordabilityPlanningExtras />}
        internalLinkStrip={
          <div className="space-y-5 text-sm">
            <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Moving and housing guides">
              <span className="w-full text-xs font-semibold uppercase tracking-wide text-foreground-muted">Moving & housing</span>
              <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
                Moving to the Netherlands
              </Link>
              <Link href={`${BASE}/moving-to-netherlands-cost/`} className="font-medium text-brand-600 hover:text-brand-700">
                Cost of moving
              </Link>
              <Link href={`${BASE}/housing/`} className="font-medium text-brand-600 hover:text-brand-700">
                Housing hub
              </Link>
              <Link href={`${BASE}/housing/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
                Housing tools
              </Link>
              <Link href={`${BASE}/living/rental-market/`} className="font-medium text-brand-600 hover:text-brand-700">
                Rental market guide
              </Link>
            </nav>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border/60 pt-5" aria-label="Money, tax, and payroll tools">
              <span className="w-full text-xs font-semibold uppercase tracking-wide text-foreground-muted">Money & payroll</span>
              <Link href={`${BASE}/money/tools/cost-of-living-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
                Cost of living calculator
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
            </nav>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border/60 pt-5" aria-label="Services and city hubs">
              <span className="w-full text-xs font-semibold uppercase tracking-wide text-foreground-muted">Services & cities</span>
              <Link href={`${BASE}/services/housing-platforms/`} className="font-medium text-brand-600 hover:text-brand-700">
                Housing platforms
              </Link>
              <Link href={`${BASE}/services/rental-agencies/`} className="font-medium text-brand-600 hover:text-brand-700">
                Rental agencies
              </Link>
              <Link href={`${BASE}/services/health-insurance/`} className="font-medium text-brand-600 hover:text-brand-700">
                Health insurance
              </Link>
              <Link href={`${BASE}/services/banks/`} className="font-medium text-brand-600 hover:text-brand-700">
                Banks
              </Link>
              <Link href={`${BASE}/amsterdam/`} className="font-medium text-brand-600 hover:text-brand-700">
                Amsterdam
              </Link>
              <Link href={`${BASE}/rotterdam/`} className="font-medium text-brand-600 hover:text-brand-700">
                Rotterdam
              </Link>
              <Link href={`${BASE}/the-hague/`} className="font-medium text-brand-600 hover:text-brand-700">
                The Hague
              </Link>
              <Link href={`${BASE}/utrecht/`} className="font-medium text-brand-600 hover:text-brand-700">
                Utrecht
              </Link>
              <Link href={`${BASE}/cities/`} className="font-medium text-brand-600 hover:text-brand-700">
                All city hubs
              </Link>
              <Link href={`${BASE}/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
                All Netherlands tools
              </Link>
            </nav>
          </div>
        }
        extraSection={<RentAffordabilityOfficialSources />}
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { MoveHero } from "@/components/page/move-shell";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { CostOfLivingAffiliateGrouped } from "@/src/components/tools/cost-of-living/CostOfLivingAffiliateGrouped";
import { CityComparisonAtAGlance } from "@/src/components/tools/city-comparison/CityComparisonAtAGlance";
import { CityComparisonCalculatorClient } from "@/src/components/tools/city-comparison/CityComparisonCalculatorClient";
import { CityComparisonRightRail } from "@/src/components/tools/city-comparison/CityComparisonRightRail";
import {
  CITY_COMPARISON_CANONICAL,
  CITY_COMPARISON_FAQ,
  CITY_COMPARISON_OFFICIAL_SOURCES,
  CITY_COMPARISON_RELATED_GUIDES,
  CITY_COMPARISON_WORKED_EXAMPLES,
  NL_BASE,
} from "@/src/content/tools/city-comparison/content";
import { getCityComparisonGroupedRecommendations } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const HERO_IMAGE = "/images/tools/netherlands-city-comparison-tool-hero.png";

const META_TITLE =
  "Netherlands City Comparison: Best Dutch Cities for Expats, Families & Remote Work | Planning Tool";
const META_DESCRIPTION =
  "Compare Amsterdam vs Utrecht, Rotterdam vs The Hague, Eindhoven vs Utrecht, and more Dutch cities for expats and international workers: affordability, commute planning, family fit, and lifestyle. Uses shared cost-of-living anchors — not live rental listings, tax advice, or an objective “best city.” Free planning tool.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: CITY_COMPARISON_CANONICAL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "best city Netherlands expats",
    "best Dutch city for international workers",
    "Amsterdam vs Utrecht expat",
    "Rotterdam vs The Hague expat",
    "cheapest city Netherlands expats",
    "which Dutch city best for families",
    "best Dutch city remote workers",
    "where to live Netherlands expat",
    "Netherlands city comparison tool",
    "Eindhoven vs Utrecht tech",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CITY_COMPARISON_CANONICAL,
    images: [
      {
        url: HERO_IMAGE,
        width: 1376,
        height: 768,
        alt: "Illustration: Netherlands map with city markers for expat city comparison planning.",
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

function resolveRelatedGuides() {
  return CITY_COMPARISON_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function NetherlandsCityComparisonPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(CITY_COMPARISON_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();
  const recommendedGroups = getCityComparisonGroupedRecommendations();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Tools", url: "/netherlands/tools/" },
    { name: "City comparison tool", url: CITY_COMPARISON_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Netherlands City Comparison Tool",
    description:
      "Deterministic expat planning tool: compare Dutch cities using shared cost-of-living anchors, commute heuristics, and weighted lifestyle, family, and career signals. Not live rental data, tax advice, or legal advice. Rankings are directional, not objective best-city truth.",
    url: CITY_COMPARISON_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: META_TITLE,
    description: META_DESCRIPTION,
    canonicalPath: CITY_COMPARISON_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(CITY_COMPARISON_FAQ.map((item) => ({ question: item.question, answer: item.answer })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}

      <ToolPageTemplate
        movingClusterHero
        monetizationPageType="comparison"
        introDisclaimerId="before-you-start"
        hero={
          <MoveHero
            variant="tool"
            eyebrow="TOOL"
            title="Netherlands City Comparison Tool"
            subtitle="Plan where to live: compare Dutch cities for expats and international workers — Amsterdam vs Utrecht, Rotterdam vs The Hague, Eindhoven vs Randstad, affordability vs commute, family fit, and lifestyle. Export a summary when you are ready."
            introBullets={[
              "Rank two to four cities with the same cost-of-living engine as our monthly calculator",
              "See affordability bands, commute practicality, and scenario lenses (budget, family, commute, lifestyle)",
              "Directional fit only — not live Funda prices, not tax or immigration advice",
              "Jump to comparison guides below for crawlable Amsterdam / Rotterdam / family / remote context",
            ]}
            primaryCtaLabel="Start comparing"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Dutch cities hub"
            secondaryCtaHref={`${NL_BASE}/cities/`}
            image={{
              src: HERO_IMAGE,
              alt: "Stylized Netherlands map with connected city markers — city comparison planning tool, not market data.",
            }}
            imageFallback={{
              src: HERO_IMAGE,
              alt: "Netherlands city comparison tool hero illustration.",
            }}
            shareUrl={shareUrl}
            pageId={CITY_COMPARISON_CANONICAL}
          />
        }
        intro={<CityComparisonAtAGlance />}
        disclosure="Planning-only comparison — not legal, tax, or financial advice. Outputs are directional: they do not use live rental listings, exact NS timetables, school admissions data, or Belastingdienst payroll rules. City fit mixes editorial heuristics with the same cost-of-living model as our calculator; it is not an objective “best city” for everyone. Recommended services are grouped by typical next steps; providers never influence rankings or scores."
        sidebar={<CityComparisonRightRail />}
        primarySectionTitle="Calculator"
        primarySectionContent={
          <CityComparisonCalculatorClient calculatorCanonicalUrl={new URL(CITY_COMPARISON_CANONICAL, origin).toString()} />
        }
        explanatorySectionsOuterTitle="Methodology: how the tool works"
        explanatorySections={[
          {
            id: "ncc-scoring-dimensions",
            title: "Scoring dimensions",
            body: [
              "Affordability compares your entered net salary to modelled monthly outflow, rent pressure, and household sensitivity. Commute uses deterministic city-pair classes (excellent → poor), relaxed when you pick remote work. Family, expat ease, lifestyle, and career use editorial 1–10 city profiles scaled to scores and weighted by your sliders.",
            ],
          },
          {
            id: "ncc-cost-anchors",
            title: "Cost anchors (shared with COL)",
            bullets: [
              "Rent and non-rent lines come from the Netherlands expat cost-of-living calculator — mid bands for planning, not scraped listings.",
              "Essentials-only mode uses the same engine with lighter leisure/dining lines so comparisons stay consistent.",
            ],
          },
          {
            id: "ncc-lifestyle-heuristic",
            title: "Lifestyle & international fit",
            body: [
              "Nightlife vs calm, international preference, and family priority are matched to editorial city narratives — useful for discussion, not a scientific quality-of-life index.",
            ],
          },
          {
            id: "ncc-commute-planning",
            title: "Commute practicality",
            body: [
              "Labels summarize typical Randstad and intercity stories. They are not NS or 9292 results; always verify door-to-door time before committing to a lease.",
            ],
          },
          {
            id: "ncc-not-advice",
            title: "Not advice, not live market data",
            bullets: [
              "No tax, immigration, landlord, or mortgage advice. Gross salary is optional; net pay drives affordability here.",
              "For payroll detail use the Dutch salary net calculator, 30% ruling calculator, and payslip decoder — then re-run this comparison.",
            ],
          },
        ]}
        seoContentSectionTitle="Choosing a Dutch city: guides & comparisons"
        seoContent={
          <div className="space-y-8 text-sm text-copilot-text-secondary">
            <p className="leading-relaxed md:text-[0.9375rem]">
              Use this section as a quick, crawlable orientation before you touch the calculator. It mirrors common Google intents — best city in the Netherlands for expats, cheapest Dutch city, Amsterdam vs Utrecht, Rotterdam vs The Hague, family-friendly cities, and remote-friendly bases — without pretending there is one correct answer. Internal links point to city hubs and money tools so you can go deeper on rent, net pay, and setup order.
            </p>

            <div id="city-comparison-guides" className="scroll-mt-28 space-y-6 md:scroll-mt-32">
              <h3 className="text-base font-semibold text-copilot-text-primary">City comparison guides (concise)</h3>

              <article
                id="guide-amsterdam-utrecht"
                className="scroll-mt-28 rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm md:scroll-mt-32 md:p-5"
              >
                <h4 className="font-semibold text-copilot-text-primary">Amsterdam vs Utrecht for expats</h4>
                <p className="mt-2 leading-relaxed">
                  Amsterdam usually wins on international hiring depth, nightlife, and English-first services; Utrecht often wins on central train connectivity and a calmer core, while still carrying tight rent competition. For Amsterdam-office hybrid workers, Utrecht is a frequent commuter choice — model both in the tool with your real office city. Read the{" "}
                  <Link href={`${NL_BASE}/amsterdam/`} className="font-medium text-brand-600 hover:underline">
                    Amsterdam
                  </Link>{" "}
                  and{" "}
                  <Link href={`${NL_BASE}/utrecht/`} className="font-medium text-brand-600 hover:underline">
                    Utrecht
                  </Link>{" "}
                  hubs, then cross-check budgets with the{" "}
                  <Link href={`${NL_BASE}/housing/tools/rent-affordability-calculator/`} className="font-medium text-brand-600 hover:underline">
                    rent affordability calculator
                  </Link>{" "}
                  and{" "}
                  <Link href={`${NL_BASE}/money/tools/cost-of-living-calculator/`} className="font-medium text-brand-600 hover:underline">
                    cost of living calculator
                  </Link>
                  .
                </p>
              </article>

              <article
                id="guide-rotterdam-hague"
                className="scroll-mt-28 rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm md:scroll-mt-32 md:p-5"
              >
                <h4 className="font-semibold text-copilot-text-primary">Rotterdam vs The Hague for expats</h4>
                <p className="mt-2 leading-relaxed">
                  Rotterdam leans urban and port-city dynamic; The Hague leans institutions, internationals, and a calmer seaside-adjacent story. Modelled monthly costs can look similar — the split is often lifestyle and commute to your employer. Compare them side by side here, then read{" "}
                  <Link href={`${NL_BASE}/rotterdam/`} className="font-medium text-brand-600 hover:underline">
                    Rotterdam
                  </Link>{" "}
                  and{" "}
                  <Link href={`${NL_BASE}/the-hague/`} className="font-medium text-brand-600 hover:underline">
                    The Hague
                  </Link>{" "}
                  for neighborhood context.
                </p>
              </article>

              <article
                id="guide-eindhoven-utrecht-tech"
                className="scroll-mt-28 rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm md:scroll-mt-32 md:p-5"
              >
                <h4 className="font-semibold text-copilot-text-primary">Eindhoven vs Utrecht for tech workers</h4>
                <p className="mt-2 leading-relaxed">
                  Eindhoven (Brainport) is strong for many hardware, embedded, and deep-tech employers; Utrecht and the wider Randstad offer a different employer mix and train-hub access. If your office is fixed, set office city in the tool — commute classes change the story quickly. See the{" "}
                  <Link href={`${NL_BASE}/eindhoven/`} className="font-medium text-brand-600 hover:underline">
                    Eindhoven hub
                  </Link>{" "}
                  and salary tools:{" "}
                  <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-medium text-brand-600 hover:underline">
                    Dutch salary net calculator
                  </Link>
                  ,{" "}
                  <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-medium text-brand-600 hover:underline">
                    30% ruling calculator
                  </Link>
                  , and{" "}
                  <Link href={`${NL_BASE}/work/tools/payslip-decoder/`} className="font-medium text-brand-600 hover:underline">
                    payslip decoder
                  </Link>
                  .
                </p>
              </article>

              <article
                id="guide-best-cities-families"
                className="scroll-mt-28 rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm md:scroll-mt-32 md:p-5"
              >
                <h4 className="font-semibold text-copilot-text-primary">Best cities in the Netherlands for families (planning view)</h4>
                <p className="mt-2 leading-relaxed">
                  Families often shortlist The Hague, Utrecht, Haarlem, Amstelveen, and smaller cores depending on schools, commute, and budget. This tool raises family scores where the editorial profile assumes stronger fit — it does not know your school waitlist or municipality rules. Enable family effects in the calculator and validate with official school and gemeente sources. Start from{" "}
                  <Link href={`${NL_BASE}/moving-to-the-netherlands/`} className="font-medium text-brand-600 hover:underline">
                    Moving to the Netherlands
                  </Link>{" "}
                  if you are early in the move.
                </p>
              </article>

              <article
                id="guide-remote-workers"
                className="scroll-mt-28 rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm md:scroll-mt-32 md:p-5"
              >
                <h4 className="font-semibold text-copilot-text-primary">Best Dutch cities for remote workers</h4>
                <p className="mt-2 leading-relaxed">
                  When work is truly remote, commute weighting drops and lower rent anchors (for example Groningen or smaller cities in the model) can rank higher. You still need a practical base for registration, social life, and travel to airports or clients — use lifestyle sliders honestly. Compare{" "}
                  <Link href={`${NL_BASE}/groningen/`} className="font-medium text-brand-600 hover:underline">
                    Groningen
                  </Link>{" "}
                  with Randstad hubs in the tool and read the{" "}
                  <Link href={`${NL_BASE}/cities/`} className="font-medium text-brand-600 hover:underline">
                    cities hub
                  </Link>
                  .
                </p>
              </article>
            </div>

            <div id="example-scenarios" className="scroll-mt-28 md:scroll-mt-32">
              <h3 className="text-base font-semibold text-copilot-text-primary">Worked examples</h3>
              <p className="mt-2 max-w-3xl leading-relaxed">
                These are illustrative — your ranking changes with net salary, office city, commute tolerance, and scenario lens. Run the calculator with your own numbers.
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {CITY_COMPARISON_WORKED_EXAMPLES.map((ex) => (
                  <article
                    key={ex.title}
                    className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm md:p-5"
                  >
                    <p className="font-semibold text-copilot-text-primary">{ex.title}</p>
                    <p className="mt-2 leading-relaxed">{ex.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 md:p-5">
                <p className="font-semibold text-copilot-text-primary">Randstad vs smaller cores</p>
                <p className="mt-2 leading-relaxed">
                  Major hubs cluster international hiring; smaller cities and belts can win on monthly outflow while adding commute time. The comparison table shows both in euros and scores — on desktop and in stacked cards on mobile.
                </p>
              </article>
              <article className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 md:p-5">
                <p className="font-semibold text-copilot-text-primary">Cheapest city vs right city</p>
                <p className="mt-2 leading-relaxed">
                  Searching only for the cheapest city in the Netherlands for expats can backfire if your office is far away. This tool is built to surface that tension explicitly: budget, commute, and family priorities all feed the same ranking.
                </p>
              </article>
            </div>
          </div>
        }
        recommendedServices={
          <CostOfLivingAffiliateGrouped
            lead="Editorial planning picks — useful after you have a shortlist and rough monthly range. Ordering follows typical next steps (housing search → agencies → banking → insurance → relocation help), not payouts. Confirm scope and fees with each provider."
            groups={recommendedGroups}
          />
        }
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={[...CITY_COMPARISON_FAQ]}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related Netherlands links">
            <Link href={`${NL_BASE}/moving-to-the-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Moving to the Netherlands
            </Link>
            <Link href={`${NL_BASE}/cities/`} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch cities hub
            </Link>
            <Link href={`${NL_BASE}/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Netherlands tools
            </Link>
            <Link href={`${NL_BASE}/housing/tools/rent-affordability-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              Rent affordability calculator
            </Link>
            <Link href={`${NL_BASE}/money/tools/cost-of-living-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              Cost of living calculator
            </Link>
            <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch salary net calculator
            </Link>
            <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              30% ruling calculator
            </Link>
            <Link href={`${NL_BASE}/work/tools/payslip-decoder/`} className="font-medium text-brand-600 hover:text-brand-700">
              Payslip decoder
            </Link>
            <Link href={`${NL_BASE}/housing/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Housing tools
            </Link>
            <Link href={`${NL_BASE}/moving/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Move tools
            </Link>
          </nav>
        }
        beforeFaq={
          <section id="official-sources" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
            <h3 className="text-lg font-semibold text-copilot-text-primary">Official sources</h3>
            <p className="text-sm text-copilot-text-secondary">
              Use these for statistics, policy context, and live journey planning — not as proof of this tool’s euro lines.
            </p>
            <ul className="space-y-3">
              {CITY_COMPARISON_OFFICIAL_SOURCES.map((source) => (
                <li key={source.href} className="text-sm">
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 hover:underline">
                    {source.label} →
                  </a>
                  {source.note ? <p className="mt-1 text-xs text-copilot-text-secondary">{source.note}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

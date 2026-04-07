import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveHero, MoveToolSidebar } from "@/components/page/move-shell";
import { SectionBlock } from "@/components/page/pillar-template";
import { CardLink } from "@/components/ui/card-link";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { VisaCostCalculatorClient } from "@/src/components/tools/visa-cost-calculator/VisaCostCalculatorClient";
import { RecommendedImmigrationLawyersSection } from "@/src/components/tools/shared/RecommendedImmigrationLawyersSection";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { EXAMPLE_SCENARIOS } from "@/src/data/tools/visa-cost-calculator/example-scenarios";
import { RELATED_TOOLS } from "@/src/data/tools/visa-cost-calculator/related-links";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getVisaRelocationMarketingRecommendedCards } from "@/src/lib/recommended-services/pageRegistryRecommendations";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/visa-cost-calculator/";
const BASE = "/netherlands";

export const metadata: Metadata = {
  title: "Netherlands Visa Cost Calculator | Estimate Fees, Documents, and Move Costs",
  description:
    "Estimate the cost of applying for a Dutch visa or residence route, including official fees, document preparation, route-specific extras, and practical move-planning costs.",
  alternates: { canonical },
  openGraph: {
    title: "Netherlands Visa Cost Calculator | Estimate Fees, Documents, and Move Costs",
    description:
      "Estimate the cost of applying for a Dutch visa or residence route, including official fees, document preparation, route-specific extras, and practical move-planning costs.",
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: "Netherlands Visa Cost Calculator | Estimate Fees, Documents, and Move Costs",
    description:
      "Estimate the cost of applying for a Dutch visa or residence route, including official fees, document preparation, route-specific extras, and practical move-planning costs.",
  },
};

const FAQ_ITEMS = [
  {
    id: "how-much-visa-cost",
    question: "How much does a visa for the Netherlands cost?",
    answer:
      "It depends on the route. Official IND application fees range from about €45 (child on family route) to €423 (work and self-employed routes). The study permit is €254. Partner/adult family fee is €210. These are only the application fees; total planning costs usually include document preparation, translation, apostille or legalization, travel, and first-week setup. Use this calculator for a route-aware estimate.",
  },
  {
    id: "only-application-fee",
    question: "Is the official application fee the only cost I should plan for?",
    answer:
      "No. Most movers also need to budget for document preparation (certified copies, translations, apostille or legalization), flights, temporary housing, and first-week setup such as bank, phone, and insurance. Family moves and long-haul travel increase these costs. This tool helps you estimate the full range.",
  },
  {
    id: "why-vary",
    question: "Why does the total estimate vary so much?",
    answer:
      "The total depends on your route, country of origin, household size, document complexity, and which practical items you include (flights, temporary housing, etc.). Long-haul flights, family members, and extra document steps all add to the range. The calculator uses bands, not exact quotes.",
  },
  {
    id: "students-less",
    question: "Do students usually pay less than work-route movers?",
    answer:
      "The official study permit fee (€254) is lower than the work permit fee (€423). However, students must often show proof of funds (study amount) and still face travel, housing, and first-month costs. Total planning cost can be similar in range once those are included.",
  },
  {
    id: "family-more",
    question: "Are family moves more expensive?",
    answer:
      "Yes. More travelers mean higher flight and possibly shipping costs; children add to civil-document and sometimes application fees (e.g. €45 per child on the partner route). Temporary housing and first-month setup also scale with household size.",
  },
  {
    id: "daft-vs-self-employed",
    question: "Does DAFT cost the same as the self-employed route?",
    answer:
      "The IND application fee is the same (€423). DAFT has a minimum capital investment (e.g. €4,500 for common business forms) and is only for US citizens. Both routes involve business setup and document costs; total planning cost depends on your situation.",
  },
  {
    id: "apostille-translation",
    question: "Do apostille and translation costs matter?",
    answer:
      "Yes. Documents from many countries need apostille or legalization, and non-Dutch/English documents may need certified translation. These can add hundreds of euros and extra time. The calculator includes optional document-complexity steps so you can see a more realistic range.",
  },
  {
    id: "not-chosen-visa",
    question: "Can I use this tool even if I have not chosen a visa yet?",
    answer:
      "Yes. Choose “Not sure yet” and you will get broad ranges. For a better estimate, use the Visa Checker first to find your likely route, then return here to see route-specific costs.",
  },
  {
    id: "exact-or-estimate",
    question: "Are these exact prices or estimates?",
    answer:
      "They are planning estimates. Official fees are based on current IND figures; document, travel, and setup costs are typical ranges. Provider prices and your exact situation will vary. Always confirm current fees on the IND website and get quotes from providers before committing.",
  },
  {
    id: "which-tool-after",
    question: "Which tool should I use after this one?",
    answer:
      "After estimating costs: use the Document Readiness Checker to see what documents you still need, the Relocation Cost Estimator for full first-year budgeting, and the Moving Checklist or First 90 Days Planner to turn your plan into steps. The Visa Checker helps if you have not yet chosen a route.",
  },
];

const OFFICIAL_SOURCES = [
  { label: "IND – Fees and costs", href: "https://ind.nl/en/fees-costs-of-an-application" },
  { label: "IND – Required amounts", href: "https://ind.nl/en/required-amounts-income-requirements" },
  { label: "IND – Residence permits overview", href: "https://ind.nl/en/residence-permits" },
  { label: "Government.nl – Migration", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
  { label: "Business.gov.nl – Self-employed", href: "https://business.gov.nl/regulations/work-permit-self-employed-professionals/" },
];

const RELATED_GUIDES = [
  { href: `${BASE}/visa-checker/`, title: "Visa Checker", description: "Find the best route for your situation." },
  { href: `${BASE}/visa/highly-skilled-migrant/`, title: "Highly Skilled Migrant", description: "Salary, sponsor, costs, and process." },
  { href: `${BASE}/visa/eu-blue-card/`, title: "EU Blue Card", description: "Salary thresholds and process." },
  { href: `${BASE}/visa/dutch-american-friendship-treaty/`, title: "DAFT", description: "US entrepreneur route: investment and process." },
  { href: `${BASE}/visa/self-employed-visa/`, title: "Self-Employed Visa", description: "Fees, requirements, and process." },
  { href: `${BASE}/visa/student-visa/`, title: "Student Visa", description: "Application fee, study amounts, timeline." },
  { href: `${BASE}/visa/partner-family-visa/`, title: "Partner & Family Visa", description: "Requirements, income, costs." },
  { href: `${BASE}/document-readiness-checker/`, title: "Document Readiness Checker", description: "Check which documents to prepare." },
  { href: `${BASE}/moving/tools/relocation-cost-estimator/`, title: "Relocation Cost Estimator", description: "Estimate full relocation budget." },
];

type PageProps = { searchParams?: Promise<Record<string, string | string[] | undefined>> };

type SearchParamsRecord = Record<string, string | string[] | undefined>;

export default async function VisaCostCalculatorPage(props: PageProps) {
  const raw = props.searchParams;
  const searchParams: SearchParamsRecord =
    raw !== undefined && raw !== null ? await Promise.resolve(raw) : {};
  const scenarioId = typeof searchParams.scenario === "string" ? searchParams.scenario : undefined;
  const scenario = scenarioId ? EXAMPLE_SCENARIOS.find((s) => s.id === scenarioId) : undefined;
  const initialPrefill = scenario?.prefilledAnswers;
  const recommendedServiceCards = getVisaRelocationMarketingRecommendedCards();

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Visa Cost Calculator", url: canonical },
  ];
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Netherlands Visa Cost Calculator",
    description:
      "Estimate the cost of applying for a Dutch visa or residence route, including official fees, document preparation, route-specific extras, and practical move-planning costs.",
    url: canonical,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const faqJsonLd = buildFaqSchema(FAQ_ITEMS.map((q) => ({ question: q.question, answer: q.answer })));

  const intro = (
    <>
      <p className="mb-3">
        Besides IND fees, most movers budget for documents, travel, temporary housing, and first-week setup. This calculator gives route-aware planning ranges—not quotes.
      </p>
      <p className="mb-3">
        Pick your route and situation below, then confirm official fees and provider prices before you commit.
      </p>
    </>
  );

  const exampleScenariosBlock = (
    <div id="example-scenarios" className="scroll-mt-24 mb-6">
      <CollapsiblePanel
        title="Example visa cost situations"
        defaultOpen={false}
        titleClassName="text-base font-semibold text-slate-800"
        triggerClassName="cursor-pointer rounded-t-xl bg-sky-50/80 text-sky-800 hover:bg-sky-100/90 hover:text-sky-900"
        className="border-sky-200/80 bg-sky-50/40 rounded-2xl border border-sky-200/80"
      >
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
          <p className="mb-4 text-sm text-slate-600">
            Click &quot;Use this scenario&quot; to prefill the tool. You can then adjust answers and see your cost range.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {EXAMPLE_SCENARIOS.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-200 hover:bg-brand-50/30"
              >
                <h4 className="font-medium text-slate-900">{s.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{s.explanation}</p>
                <p className="mt-1 text-xs text-slate-500">{s.costEmphasis}</p>
                <Link
                  href={`${canonical}?scenario=${encodeURIComponent(s.id)}#tool-inputs`}
                  className="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  Use this scenario →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </CollapsiblePanel>
    </div>
  );

  const primarySectionContent = (
    <div className="space-y-6">
      <div>
        <VisaCostCalculatorClient key={scenarioId ?? "default"} initialPrefill={initialPrefill} />
      </div>
      {exampleScenariosBlock}
    </div>
  );

  const explanatorySections = [
    { id: "what-tool-does", title: "What this tool does", body: ["Estimates route-specific visa and pre-move costs for the Netherlands."] },
    { id: "what-it-includes", title: "What it includes", body: ["Official application fees, document preparation, and common move-related setup costs."] },
    { id: "what-you-get", title: "What you get", body: ["A personalized cost range, breakdown by category, and suggested next steps."] },
  ];

  const sidebarOnThisPage = [
    { id: "example-scenarios", label: "Example scenarios" },
    { id: "tool-inputs", label: "Calculate your costs" },
    { id: "recommended-immigration-lawyers", label: "Immigration lawyers" },
    { id: "recommended-services", label: "Services" },
    { id: "how-the-tool-works", label: "How the tool works" },
    { id: "seo-content", label: "Visa and move costs" },
    { id: "faq", label: "FAQ" },
    { id: "official-sources", label: "Official sources" },
  ];

  const visaCostQuickLinks = [
    { label: "Calculate my visa costs", href: "#tool-inputs" },
    { label: "Find my visa", href: `${BASE}/visa-checker/` },
    { label: "Check my documents", href: `${BASE}/document-readiness-checker/` },
    { label: "Estimate full relocation budget", href: `${BASE}/moving/tools/relocation-cost-estimator/` },
  ];

  const sidebar = <MoveToolSidebar tocItems={sidebarOnThisPage} quickLinks={visaCostQuickLinks} />;

  const seoContent = (
    <div className="prose prose-slate max-w-none text-slate-600">
      <p>
        IND fees are only part of the picture: documents, flights, temporary housing, and first-week setup often dominate the range. Route matters—work, study, partner, and entrepreneur paths have different fees, proof-of-funds rules, and typical extras.
      </p>
      <p>
        Long-haul moves and larger households usually cost more (flights, more documents, longer short-stay). Use the Document Readiness Checker and Relocation Cost Estimator next; confirm current IND fees and provider quotes before you book or sign.
      </p>
    </div>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}

      <ToolPageTemplate
        movingClusterHero
        hero={
          <MoveHero
            variant="tool"
            eyebrow="TOOL"
            title="Netherlands Visa Cost Calculator"
            subtitle="Estimate the likely cost of your Dutch visa or residence route, including official application fees, document preparation, route-specific extras, and practical move-related costs."
            primaryCtaLabel="Calculate my visa costs"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Find my visa first"
            secondaryCtaHref={`${BASE}/visa-checker/`}
            image={{
              src: "/images/heroes/netherlands-visa-cost-calculator.png",
              alt: "An expat budgets visa and relocation costs at a wooden desk by a Dutch canal-side window. A laptop displays a cost calculator, while a passport, Euro currency, and books titled 'VISA FEES' and 'RELOCATION BUDGET' are arranged on the desk.",
            }}
          />
        }
        intro={intro}
        disclosure="Planning ranges only — confirm exact official fees and provider costs before applying."
        explanatorySections={explanatorySections}
        primarySectionTitle="Calculate your visa costs"
        primarySectionContent={primarySectionContent}
        sidebar={sidebar}
        faqItems={FAQ_ITEMS}
        relatedGuides={RELATED_GUIDES}
        recommendedLawyersSection={
          <RecommendedImmigrationLawyersSection intro="For complex cases or tailored advice on visa fees and routes, these Dutch immigration law firms specialise in residence permits, work visas, DAFT, family reunification, and related matters. Fees and services vary; contact them directly for quotes." />
        }
        recommendedServices={
          <div id="recommended-services" className="scroll-mt-24 rounded-2xl border-2 border-brand-200/80 bg-gradient-to-br from-brand-50/80 via-white to-sky-50/50 p-6 shadow-md md:p-8">
            <p className="mb-5 text-sm text-slate-600">
              These services may help with different parts of your move and budgeting. Pricing and suitability vary by
              provider and route.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedServiceCards.map((service) => {
                const initials =
                  service.name
                    .split(/[\s-]+/)
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((p) => p[0])
                    .join("")
                    .toUpperCase() || service.name.slice(0, 2).toUpperCase();
                return (
                  <a
                    key={service.name}
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-2 group-hover:bg-brand-50">
                        {service.logo ? (
                          <Image
                            src={service.logo.src}
                            alt={service.logo.alt}
                            width={80}
                            height={48}
                            className="h-10 w-auto max-w-[72px] object-contain"
                          />
                        ) : (
                          <span
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-sm font-semibold text-slate-600"
                            aria-hidden
                          >
                            {initials}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-slate-900 group-hover:text-brand-700">{service.name}</p>
                        <p className="mt-0.5 text-sm text-slate-600">{service.useFor}</p>
                      </div>
                    </div>
                    <p className="mt-3 border-t border-slate-100 pt-3 text-xs font-medium text-slate-700">
                      {service.priceRange ?? "Check provider for current pricing."}
                    </p>
                    <span className="mt-2 inline-block text-xs font-medium text-brand-600 group-hover:text-brand-700">
                      Visit site →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        }
        seoContentSectionTitle="How much does it cost to apply for a visa and move to the Netherlands?"
        seoContent={seoContent}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Related guides and tools">
            {RELATED_GUIDES.slice(0, 6).map((g) => (
              <Link key={g.href} href={g.href} className="font-medium text-brand-600 hover:text-brand-700">
                {g.title}
              </Link>
            ))}
            {RELATED_TOOLS.map((t) => (
              <Link key={t.href} href={t.href} className="font-medium text-brand-600 hover:text-brand-700">
                {t.title}
              </Link>
            ))}
          </nav>
        }
        extraSection={
          <>
            <SectionBlock id="related-tools" title="Related tools" compact className="pt-3 md:pt-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {RELATED_TOOLS.map((t) => (
                  <CardLink
                    key={t.href}
                    href={t.href}
                    title={t.title}
                    description={t.description}
                    className="border-l-4 border-l-brand-500/70 border-sky-200/80 bg-white hover:border-brand-300 hover:bg-sky-50/50"
                  />
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="official-sources" title="Official sources" className="scroll-mt-24">
              <p className="mb-4 text-sm text-slate-600">
                Confirm exact fees and requirements with these official resources.
              </p>
              <ul className="space-y-2">
                {OFFICIAL_SOURCES.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand-600 hover:underline"
                    >
                      {s.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </SectionBlock>
          </>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

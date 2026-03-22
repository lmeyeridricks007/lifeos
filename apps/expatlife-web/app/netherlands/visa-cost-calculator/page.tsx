import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { ToolHero } from "@/src/components/tools/ToolHero";
import { Section } from "@/components/ui/section";
import { CardLink } from "@/components/ui/card-link";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { PillarTOC } from "@/components/content/PillarTOC";
import { VisaCostCalculatorClient } from "@/src/components/tools/visa-cost-calculator/VisaCostCalculatorClient";
import { RecommendedImmigrationLawyersSection } from "@/src/components/tools/shared/RecommendedImmigrationLawyersSection";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { EXAMPLE_SCENARIOS } from "@/src/data/tools/visa-cost-calculator/example-scenarios";
import { RELATED_TOOLS } from "@/src/data/tools/visa-cost-calculator/related-links";

export const revalidate = 3600;

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

const RECOMMENDED_SERVICES: Array<{
  name: string;
  useFor: string;
  href: string;
  logo?: { src: string; alt: string };
  costEstimate: string;
}> = [
  {
    name: "Wise",
    useFor: "International transfers / moving money.",
    href: "https://wise.com",
    logo: { src: "/images/affiliates/logos/wise.svg", alt: "Wise logo" },
    costEstimate: "Low fees; typical transfer ~0.5–1%. Check wise.com for current rates.",
  },
  {
    name: "bunq",
    useFor: "Dutch banking after arrival.",
    href: "https://www.bunq.com",
    logo: { src: "/images/affiliates/logos/bunq.svg", alt: "bunq logo" },
    costEstimate: "Free and paid plans; paid from approx. €8.99/month. Check bunq.com for current tiers.",
  },
  {
    name: "HousingAnywhere",
    useFor: "Temporary housing.",
    href: "https://www.housinganywhere.com",
    logo: { src: "/images/affiliates/logos/housinganywhere.svg", alt: "HousingAnywhere logo" },
    costEstimate: "Rent and service fee vary by listing. Check listing for prices.",
  },
  {
    name: "Simyo",
    useFor: "Mobile setup.",
    href: "https://www.simyo.nl",
    logo: { src: "/images/affiliates/logos/simyo.svg", alt: "Simyo logo" },
    costEstimate: "SIM from a few euros; monthly plans from approx. €10–25. Check simyo.nl for current bundles.",
  },
  {
    name: "Independer",
    useFor: "Insurance comparison.",
    href: "https://www.independer.nl",
    logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" },
    costEstimate: "Comparison free. Premiums depend on insurer and profile.",
  },
  {
    name: "Everaert Immigration Lawyers",
    useFor: "Complex route and fee questions.",
    href: "https://www.everaert.nl/",
    logo: { src: "/images/affiliates/logos/everaert.svg", alt: "Everaert Advocaten logo" },
    costEstimate: "Consultation approx. €150–350; application support by hourly rate. Confirm current fees with the firm.",
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
        Dutch visa and residence routes involve more than one cost. Many people think only about the application fee,
        but realistic planning also includes document preparation, translations, legalization, travel, temporary housing,
        and first-week setup.
      </p>
      <p className="mb-3">
        This tool helps you estimate route-aware cost ranges before moving. It does not replace official fee lists or
        provider quotes. Major route types include{" "}
        <Link href={`${BASE}/visa/highly-skilled-migrant/`} className="font-medium text-brand-600 hover:underline">
          Highly Skilled Migrant
        </Link>
        ,{" "}
        <Link href={`${BASE}/visa/eu-blue-card/`} className="font-medium text-brand-600 hover:underline">
          EU Blue Card
        </Link>
        ,{" "}
        <Link href={`${BASE}/visa/dutch-american-friendship-treaty/`} className="font-medium text-brand-600 hover:underline">
          DAFT
        </Link>
        ,{" "}
        <Link href={`${BASE}/visa/self-employed-visa/`} className="font-medium text-brand-600 hover:underline">
          Self-Employed
        </Link>
        ,{" "}
        <Link href={`${BASE}/visa/student-visa/`} className="font-medium text-brand-600 hover:underline">
          Student
        </Link>
        , and{" "}
        <Link href={`${BASE}/visa/partner-family-visa/`} className="font-medium text-brand-600 hover:underline">
          Partner / Family
        </Link>
        . Answer a few questions to get a personalized estimate.
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
      {exampleScenariosBlock}
      <div>
        <VisaCostCalculatorClient key={scenarioId ?? "default"} initialPrefill={initialPrefill} />
      </div>
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

  const sidebar = (
    <>
      <PillarTOC items={sidebarOnThisPage} />
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Tools</p>
        <ul className="mt-3 space-y-2">
          <li>
            <Link href="#tool-inputs" className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Calculate my visa costs</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/visa-checker/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Find my visa</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/document-readiness-checker/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Check my documents</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/moving/tools/relocation-cost-estimator/`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white hover:shadow-sm">
              <span>Estimate full relocation budget</span>
              <span className="shrink-0 text-slate-400" aria-hidden>→</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );

  const seoContent = (
    <div className="prose prose-slate max-w-none text-slate-600">
      <h2 className="text-xl font-semibold text-slate-900">
        How much does it cost to apply for a visa and move to the Netherlands?
      </h2>
      <p>
        Official application fees are only one part of the cost. The IND sets fees per route (e.g. €423 for work and
        self-employed permits, €254 for study, €210 for partner/adult family). On top of that, you often need to budget
        for document preparation—certified copies, translation, apostille or legalization—which can add hundreds of
        euros. Travel, temporary housing, and first-week setup (bank, phone, insurance) add more. This tool combines
        these into a single planning range.
      </p>
      <h3 className="text-lg font-semibold text-slate-900">Why route type changes the budget</h3>
      <p>
        Work routes like Highly Skilled Migrant and EU Blue Card share a similar application fee (€423) but may differ
        in document and sponsor requirements. The self-employed and DAFT routes also use the €423 fee plus business
        setup and, for DAFT, a minimum investment. Student and partner routes have different fee structures and
        proof-of-funds or income requirements. Your total estimate depends on which route you choose.
      </p>
      <h3 className="text-lg font-semibold text-slate-900">Why family, partner, student and entrepreneur routes differ</h3>
      <p>
        Family and partner moves scale with the number of applicants (e.g. child fees, extra documents, more flights).
        Student movers must plan for the study amount and first-month costs. Entrepreneur routes add business
        registration and often legal or accountancy support. Each route has its own typical band of total planning cost.
      </p>
      <h3 className="text-lg font-semibold text-slate-900">Why long-haul movers often spend more</h3>
      <p>
        Flights from outside Europe cost more and can dominate the travel part of your estimate. Document
        legalization and translation are more common for long-haul origins and add both cost and time. Temporary
        housing may be needed for longer if you cannot secure a rental before arrival. Use the distance band in the
        calculator to see how this affects your range.
      </p>
      <h3 className="text-lg font-semibold text-slate-900">Why temporary housing can heavily affect total cost</h3>
      <p>
        In large Dutch cities, short-term rentals can run from hundreds to over a thousand euros per week. If you
        need a month or more before moving into a long-term place, this can add a significant amount to your
        one-off costs. The calculator lets you include temporary housing so you can see a more realistic total.
      </p>
      <h3 className="text-lg font-semibold text-slate-900">Combine this tool with the document checker and relocation estimator</h3>
      <p>
        For a full picture: use the{" "}
        <Link href={`${BASE}/document-readiness-checker/`} className="font-medium text-brand-600 hover:underline">
          Document Readiness Checker
        </Link>{" "}
        to see what you still need to gather, and the{" "}
        <Link href={`${BASE}/moving/tools/relocation-cost-estimator/`} className="font-medium text-brand-600 hover:underline">
          Relocation Cost Estimator
        </Link>{" "}
        for first-year and monthly budgeting. Together they help you plan from visa choice through to arrival and
        first months.
      </p>
      <h3 className="text-lg font-semibold text-slate-900">Why budget planning matters before booking or signing</h3>
      <p>
        Confirming your cost range before you book flights or sign a housing contract helps you avoid surprises.
        Official fees can change; provider prices vary. Use this calculator for planning ranges, then confirm
        current fees on the IND website and get quotes from translators, movers, and housing providers before
        committing.
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
        hero={
          <ToolHero
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
            imageFallback={{
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
              {RECOMMENDED_SERVICES.map((service) => {
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
                    href={service.href}
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
                      {service.costEstimate}
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
            <Section title="Related tools" contained={true}>
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
            </Section>

            <Section id="official-sources" title="Official sources" className="scroll-mt-24" contained={true}>
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
            </Section>
          </>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}

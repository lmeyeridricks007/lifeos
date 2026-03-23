import Link from "next/link";
import { Lightbulb } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PillarTOC } from "@/components/content/PillarTOC";
import { InfoBox } from "@/components/ui/info-box";
import type { CityHubPageData } from "@/src/lib/city-hub/types";
import type { CityServiceCard } from "@/src/lib/city-hub/types";
import { CityHero } from "./CityHero";
import { QuickFactsGrid } from "./QuickFactsGrid";
import { OverviewIntro } from "./OverviewIntro";
import { ProcessTimeline } from "./ProcessTimeline";
import { CityChecklist } from "./CityChecklist";
import { ExampleScenarios } from "./ExampleScenarios";
import { ServiceCards } from "./ServiceCards";
import { ToolCards } from "./ToolCards";
import { FAQAccordion } from "./FAQAccordion";
import { RelatedGuidesSection } from "./RelatedGuidesGrid";
import { OfficialSourcesList } from "./OfficialSourcesList";
import { CityLinksSection } from "./CityLinksSection";
import { CityOverview } from "./CityOverview";
import { CityWhyExpatsCombinedSection } from "./CityReasonsGrid";
import { CityStatsCards } from "./CityStatsCards";
import { CityComparisonTable } from "./CityComparisonTable";
import { CityExpatsProfile } from "./CityExpatsProfile";
import { cn } from "@/lib/cn";

const pageContainerClass = "w-full max-w-screen-2xl";

export type CityHubTemplateProps = {
  data: CityHubPageData;
  /** Optional: all services for the "Services for Expats" section. If not provided, uses data.banking.services only for banking block. */
  allServices?: CityServiceCard[];
};

/** Breadcrumb: Home > Netherlands > Cities > [City name]. Pass basePath e.g. /netherlands/amsterdam/ */
function CityBreadcrumb({
  cityName,
  basePath,
}: {
  cityName: string;
  basePath: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
        </li>
        <li aria-hidden className="text-slate-400">/</li>
        <li>
          <Link href="/netherlands/" className="hover:text-slate-900">
            Netherlands
          </Link>
        </li>
        <li aria-hidden className="text-slate-400">/</li>
        <li>
          <Link href="/netherlands/cities/" className="hover:text-slate-900">
            Cities
          </Link>
        </li>
        <li aria-hidden className="text-slate-400">/</li>
        <li className="font-medium text-slate-900" aria-current="page">
          {cityName}
        </li>
      </ol>
    </nav>
  );
}

/** Section id for registration (city-specific, e.g. register-amsterdam, register-rotterdam). */
function getRegistrationSectionId(tocItems: { id: string }[]): string {
  return tocItems.find((t) => t.id.includes("register"))?.id ?? "register";
}

export function CityHubTemplate({ data, allServices }: CityHubTemplateProps) {
  const bankingServices = data.banking.services?.length
    ? data.banking.services
    : allServices?.filter((s) => s.category === "Banking / money") ?? [];
  const servicesForExpats = allServices ?? [];
  const registrationSectionId = getRegistrationSectionId(data.tocItems);
  const isAltLayout = data.hubLayout === "amsterdam-area-alternative";
  const earlyPractical = Boolean(isAltLayout && data.earlyPracticalSections);

  const first30DaysSection = (
    <section id="first-30-days" className="scroll-mt-24 mt-12 space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {data.first30Days.heading}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {data.first30Days.weeks.map((w, i) => (
          <div
            key={i}
            className={cn(
              "rounded-xl border border-slate-200/80 p-5",
              "border-l-4 border-l-teal-500 bg-teal-50/40"
            )}
          >
            <h3 className="font-semibold text-slate-900">{w.week}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
              {w.items.map((item, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {data.first30Days.internalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );

  const whoMovesHereAndTradeoffs = (
    <>
      {data.whoMovesHere ? <CityExpatsProfile data={data.whoMovesHere} /> : null}
      {data.tradeOffs ? (
        <section id="trade-offs" className="scroll-mt-24 mt-12 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {data.tradeOffs.heading}
          </h2>
          {data.tradeOffs.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-700 leading-relaxed">
              {p}
            </p>
          ))}
        </section>
      ) : null}
    </>
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-8 sm:py-10 md:py-14">
        <Container className={pageContainerClass}>
          <CityBreadcrumb cityName={data.name} basePath={data.path} />
          <CityHero hero={data.hero} />
        </Container>
      </section>

      <Section contained={false} className="py-8 md:py-12">
        <Container className={pageContainerClass}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(280px,1fr)]">
            <main className="min-w-0 w-full">
              {/* Mobile TOC */}
              <div className="mb-8 lg:hidden rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                <PillarTOC items={data.tocItems} />
              </div>

              {/* Reading order: overview → at a glance → compare → why (merged) → life in city → jobs → profile blocks */}
              <section id="overview" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Overview
                </h2>
                <OverviewIntro data={data} />
              </section>

              {data.quickFacts?.length ? (
                <div className="mt-10 space-y-4">
                  <h2
                    id={`${data.slug}-at-a-glance`}
                    className="scroll-mt-24 text-2xl font-semibold tracking-tight text-slate-900"
                  >
                    {data.quickFactsHeading ?? `${data.name} at a Glance`}
                  </h2>
                  <QuickFactsGrid items={data.quickFacts} />
                </div>
              ) : null}

              {data.cityComparison ? (
                <CityComparisonTable
                  heading={data.cityComparison.heading}
                  currentCityName={data.name}
                  ctaLabel={data.cityComparison.ctaLabel}
                  ctaHref={data.cityComparison.ctaHref}
                />
              ) : null}

              <CityWhyExpatsCombinedSection
                cityName={data.name}
                cityOverview={data.cityOverview}
                whyExpatsChoose={data.whyExpatsChoose}
              />

              {data.lifeInCity ? (
                <CityOverview
                  data={data.lifeInCity}
                  sectionId="what-life-like"
                  className="mt-12"
                />
              ) : null}

              {data.jobsEcosystem ? <CityStatsCards data={data.jobsEcosystem} /> : null}

              {isAltLayout && earlyPractical ? (
                <>
                  {first30DaysSection}
                  {whoMovesHereAndTradeoffs}
                </>
              ) : null}
              {isAltLayout && !earlyPractical ? whoMovesHereAndTradeoffs : null}
              {!isAltLayout ? (
                <>
                  {data.whoMovesHere ? <CityExpatsProfile data={data.whoMovesHere} /> : null}
                  {data.tradeOffs ? (
                    <section id="trade-offs" className="scroll-mt-24 mt-12 space-y-4">
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                        {data.tradeOffs.heading}
                      </h2>
                      {data.tradeOffs.paragraphs.map((p, i) => (
                        <p key={i} className="text-slate-700 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </section>
                  ) : null}
                </>
              ) : null}

              {/* Register in city */}
              <section id={registrationSectionId} className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {data.registration.heading}
                </h2>
                {data.registration.body.map((p, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
                <ProcessTimeline data={data} />
                <CityChecklist data={data} />
              </section>

              {/* BSN + DigiD */}
              <section id="bsn-digid" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {data.bsnDigid.heading}
                </h2>
                {data.bsnDigid.body.map((p, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
                {data.bsnDigid.digidRequirements?.length ? (
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                    <p className="text-sm font-semibold text-slate-900">DigiD requirements</p>
                    <ul className="mt-2 space-y-1 text-sm text-slate-700">
                      {data.bsnDigid.digidRequirements.map((r, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-emerald-500" aria-hidden>✓</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {data.bsnDigid.examples?.length ? (
                  <p className="text-sm text-slate-600">
                    <span className="font-medium">Used for:</span>{" "}
                    {data.bsnDigid.examples.join(", ")}.
                  </p>
                ) : null}
                {data.bsnDigid.plannedPageLinks?.length ? (
                  <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-4">
                    {data.bsnDigid.plannedPageLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </section>

              {/* Health insurance */}
              <section id="health-insurance" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {data.healthInsurance.heading}
                </h2>
                {data.healthInsurance.body.map((p, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
                {data.healthInsurance.advice?.length ? (
                  <ul className="space-y-1 text-sm text-slate-700">
                    {data.healthInsurance.advice.map((a, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-500" aria-hidden>✓</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <p>
                  <Link
                    href={data.healthInsurance.internalLink.href}
                    className="font-medium text-brand-700 hover:text-brand-800 underline"
                  >
                    {data.healthInsurance.internalLink.label}
                  </Link>
                </p>
              </section>

              {/* Banking */}
              <section id="banking" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {data.banking.heading}
                </h2>
                {data.banking.body.map((p, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
                {data.banking.typicalNeeds?.length ? (
                  <ul className="space-y-1 text-sm text-slate-700">
                    {data.banking.typicalNeeds.map((n, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-slate-400" aria-hidden>•</span>
                        {n}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {bankingServices.length ? (
                  <div className="mt-6">
                    <ServiceCards services={bankingServices} byCategory={false} />
                  </div>
                ) : null}
                <p>
                  <Link
                    href={data.banking.internalLink.href}
                    className="font-medium text-brand-700 hover:text-brand-800 underline"
                  >
                    {data.banking.internalLink.label}
                  </Link>
                </p>
              </section>

              {/* Housing & cost of living */}
              <section id="housing-costs" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {data.housingCosts.heading}
                </h2>
                {data.housingCosts.body.map((p, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
                {data.housingCosts.neighborhoodsNote ? (
                  <p className="text-sm text-slate-600">{data.housingCosts.neighborhoodsNote}</p>
                ) : null}
                {data.housingCosts.warning ? (
                  <InfoBox variant="warn" title="Watch out">
                    <p>{data.housingCosts.warning}</p>
                  </InfoBox>
                ) : null}
                {data.housingCosts.internalLinks?.length ? (
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {data.housingCosts.internalLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </section>

              {/* Transport */}
              <section id="transport" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {data.transport.heading}
                </h2>
                {data.transport.body.map((p, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
                {data.transport.goodToKnow?.length ? (
                  <div className="overflow-hidden rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50/90 to-white shadow-sm ring-1 ring-amber-100/50">
                    <div className="border-l-4 border-amber-500 bg-amber-50/50 px-5 py-4">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-700">
                          <Lightbulb className="h-4 w-4" aria-hidden />
                        </span>
                        <p className="text-sm font-semibold text-slate-900">Good to know</p>
                      </div>
                      <ul className="mt-3 space-y-2.5 pl-0.5">
                        {data.transport.goodToKnow.map((item, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-700">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </section>

              {/* Services for expats */}
              <section id="services-expats" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {data.servicesExpatsHeading ?? `Useful Services for Newcomers in ${data.name}`}
                </h2>
                {data.servicesIntro ? (
                  <p className="text-slate-700 leading-relaxed">{data.servicesIntro}</p>
                ) : null}
                <ServiceCards services={servicesForExpats} byCategory={true} />
              </section>

              {/* First 30 days (after services when not moved up with earlyPracticalSections) */}
              {!earlyPractical ? first30DaysSection : null}

              {/* Example scenarios */}
              <section id="example-scenarios" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {data.exampleScenariosHeading ?? "Example Scenarios"}
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  {data.exampleScenariosIntro ??
                    "Realistic situations and what to prioritise: documents, timing, and common pitfalls."}
                </p>
                <ExampleScenarios scenarios={data.exampleScenarios} />
              </section>

              {/* Common mistakes */}
              <section id="common-mistakes" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Common Mistakes
                </h2>
                <ul className="space-y-3">
                  {data.commonMistakes.map((m, i) => (
                    <li key={i} className="flex flex-wrap items-baseline gap-2 text-sm text-slate-700">
                      <span className="text-amber-500" aria-hidden>•</span>
                      <span>{m.mistake}</span>
                      {m.internalLink ? (
                        <Link
                          href={m.internalLink.href}
                          className="font-medium text-brand-700 hover:text-brand-800 underline"
                        >
                          {m.internalLink.label}
                        </Link>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tools */}
              <section id="tools" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Useful Tools
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Plan your move and check your document readiness with these tools.
                </p>
                <ToolCards tools={data.tools} />
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  FAQs
                </h2>
                <FAQAccordion data={data} />
              </section>

              {/* Official sources */}
              <section id="official-sources" className="scroll-mt-24 mt-12 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {data.officialSourcesHeading ?? "Official Sources"}
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  {data.officialSourcesIntro ??
                    "Use these official links for registration, DigiD, health insurance, and transport."}
                </p>
                <OfficialSourcesList sources={data.officialSources} />
              </section>

              {/* Related guides */}
              <RelatedGuidesSection
                id="related-guides"
                title={
                  data.relatedGuidesSectionTitle ?? "Continue Setting Up Your Life in the Netherlands"
                }
                blocks={data.relatedGuides}
              />

              {/* Other cities + services CTAs */}
              <section id="other-cities" className="scroll-mt-24 mt-12 space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {data.cityLinksSectionTitle ?? "Other Popular Dutch Cities for Expats"}
                </h2>
                <CityLinksSection data={data} />
              </section>
            </main>

            {/* Sticky TOC - desktop */}
            <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                <PillarTOC items={data.tocItems} />
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </div>
  );
}

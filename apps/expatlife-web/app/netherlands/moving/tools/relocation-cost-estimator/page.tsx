import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveHero } from "@/components/page/move-shell";
import { RelocationCostEstimatorClient } from "@/src/components/tools/relocation-cost-estimator/RelocationCostEstimatorClient";
import {
  loadRelocationCostEstimatorMeta,
  loadRelocationCostEstimatorFaq,
} from "@/src/lib/tools/loadRelocationCostEstimatorContent";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema, getToolBreadcrumbItems } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import {
  MOVING_HUB,
  PILLAR,
  RELOCATION_COST_ESTIMATOR_RELATED_GUIDES,
  RELOCATION_COST_ESTIMATOR_RELATED_TOOLS,
} from "@/src/lib/tools/shared/toolInternalLinks";
import { getFeaturedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { OriginCountryGuideGrid } from "@/src/components/guides/OriginCountryGuideGrid";
import { ContentTable, ContentTableRow, ContentTableCell } from "@/components/ui/content-table";
import { InfoBox } from "@/components/ui/info-box";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { MoveClusterToolPostValueBlock } from "@/src/components/monetization/MoveClusterToolPostValueBlock";
import { getRelocationCostMarketingRecommendedCards } from "@/src/lib/recommended-services/pageRegistryRecommendations";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/moving/tools/relocation-cost-estimator/";

export const metadata: Metadata = {
  title: "Relocation Cost Estimator: Calculate the Cost of Moving to the Netherlands",
  description:
    "Estimate how much it costs to move to the Netherlands. Calculate relocation, housing, setup and monthly living costs, then download your budget as a PDF.",
  alternates: { canonical },
  openGraph: {
    title: "Relocation Cost Estimator: Calculate the Cost of Moving to the Netherlands",
    description:
      "Estimate how much it costs to move to the Netherlands. Calculate relocation, housing, setup and monthly living costs, then download your budget as a PDF.",
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: "Relocation Cost Estimator: Calculate the Cost of Moving to the Netherlands",
    description:
      "Estimate how much it costs to move to the Netherlands. Calculate relocation, housing, setup and monthly living costs, then download your budget as a PDF.",
  },
};

export default async function RelocationCostEstimatorPage() {
  const recommendedServiceCards = getRelocationCostMarketingRecommendedCards();
  const meta = loadRelocationCostEstimatorMeta();
  const faq = loadRelocationCostEstimatorFaq();

  if (!meta) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-slate-600">Tool content could not be loaded. Please try again later.</p>
      </div>
    );
  }

  const intro = (
    <>
      {meta.seo.introParagraphs?.map((paragraph, index) => (
        <p key={index} className="mb-3">
          {paragraph}
        </p>
      ))}
    </>
  );

  const breadcrumbItems = getToolBreadcrumbItems("Relocation Cost Estimator", canonical);
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Relocation Cost Estimator",
    description: meta.hero.subtitle,
    url: canonical,
    applicationCategory: "Calculator",
  });
  const faqJsonLd = buildFaqSchema(faq.map((q) => ({ question: q.question, answer: q.answer })));

  const explanatorySections = meta.explanatorySections?.map((s) => ({
    id: s.id,
    title: s.title,
    body: s.body ?? [],
    bullets: undefined,
  }));

  const seoContent = (
    <div className="prose prose-slate max-w-none text-slate-600">
      <h2 className="text-xl font-semibold text-slate-900">
        How much does it cost to move to the Netherlands?
      </h2>
      <p>
        Moving to the Netherlands involves one-off relocation costs and ongoing monthly living
        costs. This page outlines the main categories so you can plan a realistic budget and use the
        calculator above for a personalized estimate. Results are estimates, not quotes—city, season,
        provider pricing, and household choices all affect final numbers; first-year cost can rise
        quickly due to deposits and temporary housing overlap.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">
        Biggest cost categories when relocating
      </h3>
      <p>
        The largest expenses are usually flights (especially from outside Europe), visa and document
        preparation, international shipping or moving, temporary housing if you need it, rent
        deposit and first month’s rent, and initial setup such as furniture, utilities, and admin.
        Families and pet owners often face higher one-time and monthly costs. For document planning
        see our{" "}
        <Link href="/netherlands/documents-needed-to-move-netherlands/" className="font-medium text-brand-600 hover:text-brand-700">
          documents needed to move
        </Link>
        ; for pets see{" "}
        <Link href="/netherlands/bringing-pets-to-netherlands/" className="font-medium text-brand-600 hover:text-brand-700">
          bringing pets to the Netherlands
        </Link>
        .
      </p>

      <h3 className="text-lg font-semibold text-slate-900">
        Flights, visas and document costs
      </h3>
      <p>
        Flight costs depend on your region of origin and how many people are traveling. EU/EEA
        citizens generally have no visa fee, while other routes (e.g.{" "}
        <Link href="/netherlands/visa/highly-skilled-migrant/" className="font-medium text-brand-600 hover:text-brand-700">
          Highly Skilled Migrant
        </Link>
        ,{" "}
        <Link href="/netherlands/visa/dutch-american-friendship-treaty/" className="font-medium text-brand-600 hover:text-brand-700">
          DAFT
        </Link>
        {" "}for US entrepreneurs,{" "}
        <Link href="/netherlands/visa/eu-blue-card/" className="font-medium text-brand-600 hover:text-brand-700">
          EU Blue Card
        </Link>
        ,{" "}
        <Link href="/netherlands/visa/student-visa/" className="font-medium text-brand-600 hover:text-brand-700">
          student visa
        </Link>
        ,{" "}
        <Link href="/netherlands/visa/partner-family-visa/" className="font-medium text-brand-600 hover:text-brand-700">
          partner visa
        </Link>
        ,{" "}
        <Link href="/netherlands/visa/self-employed-visa/" className="font-medium text-brand-600 hover:text-brand-700">
          self-employed visa
        </Link>
        ) involve permit and sometimes document translation or legalization costs.
        Not sure which visa fits you? Use the{" "}
        <Link href="/netherlands/visa-checker/" className="font-medium text-brand-600 hover:text-brand-700">
          visa checker
        </Link>
        {" "}to see which route may fit your situation. To estimate visa and document costs for your route, use the{" "}
        <Link href="/netherlands/visa-cost-calculator/" className="font-medium text-brand-600 hover:text-brand-700">
          Visa Cost Calculator
        </Link>
        . Budget for appointments and potential delays.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">
        Housing deposits and temporary accommodation
      </h3>
      <p>
        Landlords usually ask for one to two months’ rent as a deposit. If you don’t have a
        long-term rental immediately, temporary accommodation (hotel, Airbnb, serviced apartment)
        can add hundreds to over a thousand euros per week depending on city and standard. Amsterdam
        and Utrecht tend to be more expensive than many other Dutch cities.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">
        Moving boxes, shipping and luggage
      </h3>
      <p>
        Suitcases-only keeps costs low but may mean buying more after arrival. Shipping a few boxes
        or a small shipment costs in the hundreds to low thousands; a full container is significantly
        more. Use the calculator to see ranges for your chosen moving method.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">
        Monthly living costs after arrival
      </h3>
      <p>
        After the move, monthly costs include rent, groceries, transport, health insurance, and
        phone/internet. These vary by city, household size, and lifestyle. The calculator applies
        typical multipliers for couples and families so you can see a monthly range and a first-year
        total. For banking setup see{" "}
        <Link href="/netherlands/open-bank-account-netherlands/" className="font-medium text-brand-600 hover:text-brand-700">
          opening a bank account in the Netherlands
        </Link>
        .
      </p>

      <h3 className="text-lg font-semibold text-slate-900">
        Why families and pet owners often need bigger budgets
      </h3>
      <p>
        More travelers mean higher flight and possibly shipping costs; children add to groceries,
        childcare, and often housing size. Pets involve vet documents, crates, airline fees, and
        sometimes a relocation service. Planning for these in the calculator gives a more realistic
        one-time and first-year estimate.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">
        How to reduce relocation costs
      </h3>
      <p>
        You can reduce costs by traveling light or shipping only essentials, avoiding peak season
        and last-minute bookings, choosing a less expensive city or neighborhood, and preparing
        documents early to avoid rush fees. Comparing banks, insurers, and utility providers can
        trim monthly spending once you’re in the Netherlands.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">
        When a move becomes more expensive than expected
      </h3>
      <p>
        Costs can run higher if you need temporary housing for longer, pay premium rents in
        Amsterdam or Utrecht, ship a large amount of goods, use a pet relocation service, or face
        visa or document delays. The calculator’s high end and the PDF breakdown help you plan a
        buffer. For detailed planning, see our{" "}
        <Link href="/netherlands/moving-to-netherlands-cost/" className="font-medium text-brand-600 hover:text-brand-700">
          Cost of Moving to the Netherlands
        </Link>{" "}
        guide and{" "}
        <Link href="/netherlands/moving/tools/moving-checklist/" className="font-medium text-brand-600 hover:text-brand-700">
          Moving Checklist
        </Link>{" "}
        tool.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        Typical relocation cost examples
      </h2>
      <p>
        Actual budgets vary by route, city, and choices; the scenarios below are indicative examples
        to show how different household types affect costs. Use the calculator above for a
        personalized range.
      </p>
      <ContentTable headers={["Scenario", "One-time relocation", "Monthly living", "First year"]}>
        <ContentTableRow>
          <ContentTableCell emphasis>Single expat</ContentTableCell>
          <ContentTableCell>€3,000 – €8,000</ContentTableCell>
          <ContentTableCell>€2,200 – €2,800</ContentTableCell>
          <ContentTableCell>€30,000 – €42,000</ContentTableCell>
        </ContentTableRow>
        <ContentTableRow>
          <ContentTableCell emphasis>Couple</ContentTableCell>
          <ContentTableCell>€5,000 – €12,000</ContentTableCell>
          <ContentTableCell>€3,200 – €4,000</ContentTableCell>
          <ContentTableCell>€44,000 – €60,000</ContentTableCell>
        </ContentTableRow>
        <ContentTableRow>
          <ContentTableCell emphasis>Family with kids</ContentTableCell>
          <ContentTableCell>€8,000 – €18,000</ContentTableCell>
          <ContentTableCell>€4,500 – €6,000</ContentTableCell>
          <ContentTableCell>€62,000 – €90,000</ContentTableCell>
        </ContentTableRow>
        <ContentTableRow>
          <ContentTableCell emphasis>Moving with pets</ContentTableCell>
          <ContentTableCell>€6,000 – €14,000</ContentTableCell>
          <ContentTableCell>€3,200 – €4,200</ContentTableCell>
          <ContentTableCell>€45,000 – €62,000</ContentTableCell>
        </ContentTableRow>
      </ContentTable>
      <p className="mt-3 text-sm text-slate-600">
        Use the calculator above for a personalized range based on your own route, housing plan,
        and household setup.
      </p>
      <p className="mt-2">
        <Link
          href="#tool-inputs"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow hover:from-brand-700 hover:to-cyan-700"
        >
          Calculate my budget
        </Link>
      </p>

      <div className="mt-8 rounded-2xl border-2 border-brand-200/80 bg-brand-50/50 p-5 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Want a personalized relocation estimate?</h3>
        <p className="mt-2 text-sm text-slate-600">
          Use the calculator above to estimate your own move based on city, housing, household type,
          pets, and visa route.
        </p>
        <Link
          href="#tool-inputs"
          className="mt-4 inline-flex h-11 items-center justify-center rounded-xl border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow hover:from-brand-700 hover:to-cyan-700"
        >
          Calculate my budget
        </Link>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        Cost of moving to Amsterdam vs other Dutch cities
      </h2>
      <p>
        City choice affects rent, deposits, and first-year budget. Amsterdam is often the most
        expensive for rent and temporary housing; Utrecht can also be relatively high. Rotterdam and
        Eindhoven may be somewhat lower depending on area and housing quality. Final costs depend on
        exact neighborhood, housing type, and household size. For arrival planning see{" "}
        <Link href="/netherlands/first-90-days-netherlands/" className="font-medium text-brand-600 hover:text-brand-700">
          first 90 days in the Netherlands
        </Link>
        .
      </p>
      <ContentTable
        headers={["City", "Typical rent range", "Monthly living estimate", "Typical first-year budget"]}
      >
        <ContentTableRow>
          <ContentTableCell emphasis>Amsterdam</ContentTableCell>
          <ContentTableCell>€2,200 – €4,100</ContentTableCell>
          <ContentTableCell>€3,600 – €4,200</ContentTableCell>
          <ContentTableCell>€50,000 – €57,000</ContentTableCell>
        </ContentTableRow>
        <ContentTableRow>
          <ContentTableCell emphasis>Utrecht</ContentTableCell>
          <ContentTableCell>€2,000 – €3,500</ContentTableCell>
          <ContentTableCell>€3,400 – €3,900</ContentTableCell>
          <ContentTableCell>€46,000 – €53,000</ContentTableCell>
        </ContentTableRow>
        <ContentTableRow>
          <ContentTableCell emphasis>Rotterdam</ContentTableCell>
          <ContentTableCell>€1,700 – €3,000</ContentTableCell>
          <ContentTableCell>€2,900 – €3,400</ContentTableCell>
          <ContentTableCell>€41,000 – €48,000</ContentTableCell>
        </ContentTableRow>
        <ContentTableRow>
          <ContentTableCell emphasis>Eindhoven</ContentTableCell>
          <ContentTableCell>€1,600 – €2,800</ContentTableCell>
          <ContentTableCell>€2,800 – €3,300</ContentTableCell>
          <ContentTableCell>€40,000 – €47,000</ContentTableCell>
        </ContentTableRow>
      </ContentTable>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        Hidden relocation costs people forget
      </h2>
      <p>
        Many budgets focus only on flights and rent. Real relocation costs often include overlooked
        setup items:
      </p>
      <ul className="list-disc pl-6 text-slate-600">
        <li>Document translation or legalization</li>
        <li>Municipality registration timing and repeat appointments</li>
        <li>Furniture and household basics</li>
        <li>Bike purchase or transport setup</li>
        <li>Mobile plan and utilities activation</li>
        <li>International money transfer fees</li>
        <li>Pet documentation and travel fees</li>
        <li>Extra temporary housing days if long-term housing takes longer than expected</li>
      </ul>
      <InfoBox title="Budget warning" variant="warn" className="mt-4">
        Many relocation budgets go wrong because people underestimate deposits, setup shopping, and
        short-term housing overlap.
      </InfoBox>

      <div className="mt-8 rounded-2xl border-2 border-slate-200 bg-slate-50/80 p-5 md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Ready to calculate your relocation cost?</h3>
        <Link
          href="#tool-inputs"
          className="mt-4 inline-flex h-11 items-center justify-center rounded-xl border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow hover:from-brand-700 hover:to-cyan-700"
        >
          Start cost estimator
        </Link>
      </div>
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
            title={meta.hero.title}
            subtitle={meta.hero.subtitle}
            introBullets={meta.hero.introBullets}
            primaryCtaLabel={meta.hero.primaryCtaLabel}
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel={meta.hero.secondaryCtaLabel ?? undefined}
            secondaryCtaHref={meta.hero.secondaryCtaHref ?? undefined}
            image={meta.hero.image}
            imageFallback={meta.hero.imageFallback}
          />
        }
        intro={intro}
        disclosure={meta.disclosure}
        explanatorySections={explanatorySections}
        faqItems={faq}
        relatedGuides={RELOCATION_COST_ESTIMATOR_RELATED_GUIDES}
        recommendedServices={
          <div className="rounded-2xl border-2 border-brand-200/80 bg-gradient-to-br from-brand-50/80 via-white to-sky-50/50 p-6 shadow-md md:p-8">
            <p className="mb-5 text-sm text-slate-600">
              These services may help with relocation costs. Pricing notes are indicative for planning only—check providers directly for current rates.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedServiceCards.map((service) => (
                <a
                  key={service.name}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-50 p-2 group-hover:bg-brand-50">
                      {service.logo ? (
                        <Image
                          src={service.logo.src}
                          alt={service.logo.alt}
                          width={48}
                          height={48}
                          className="h-8 w-auto object-contain"
                        />
                      ) : (
                        <span className="text-xs font-semibold text-slate-600" aria-hidden>
                          {service.name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-900 group-hover:text-brand-700">{service.name}</p>
                      <p className="mt-0.5 text-sm text-slate-600">{service.useFor}</p>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-slate-100 pt-3 text-sm font-medium text-slate-800">
                    {service.priceRange ?? "Check provider for current pricing."}
                  </p>
                </a>
              ))}
            </div>
          </div>
        }
        seoContent={seoContent}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Moving hub, main guide, and related tools">
            <Link href={MOVING_HUB} className="font-medium text-brand-600 hover:text-brand-700">
              Moving hub
            </Link>
            <Link href={PILLAR} className="font-medium text-brand-600 hover:text-brand-700">
              Moving to the Netherlands guide
            </Link>
            {RELOCATION_COST_ESTIMATOR_RELATED_TOOLS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="font-medium text-brand-600 hover:text-brand-700"
              >
                {t.label}
              </Link>
            ))}
          </nav>
        }
        extraSection={
          <OriginCountryGuideGrid
            title="Moving from a specific country?"
            intro="See country-specific relocation guides for origin-based planning notes, document cues, and route context."
            items={getFeaturedOriginCountryGuides(4)}
            limit={4}
            showViewAll={true}
            compact={true}
            contained={false}
          />
        }
        postToolValue={<MoveClusterToolPostValueBlock preset="compareVisaRoutes" />}
      >
        <>
          <RelocationCostEstimatorClient
          whatYouGetTitle={meta.toolPanel.whatYouGetTitle}
          whatYouGetItems={meta.toolPanel.whatYouGetItems}
          ctaBlockTitle={meta.ctaBlock.title}
          ctaBlockText={meta.ctaBlock.text}
          ctaChecklistHref={meta.ctaBlock.checklistHref}
          ctaChecklistLabel={meta.ctaBlock.checklistLabel}
          ctaFirst90Href={meta.ctaBlock.first90Href}
          ctaFirst90Label={meta.ctaBlock.first90Label}
          disclaimerNote="These are planning ranges, not provider quotes. Final costs vary by city, route, season, and the choices you make."
          pdfButtonLabel={meta.pdfButtonLabel}
          recommendationsIntro={meta.recommendationsIntro}
          />
          <div className="mt-6 rounded-2xl border-2 border-brand-200/80 bg-gradient-to-br from-brand-50/80 to-sky-50/50 p-5 shadow-sm md:p-6">
            <h3 className="text-lg font-semibold text-slate-900">Estimate your move in under a minute</h3>
            <p className="mt-2 text-sm text-slate-600">
              Get a personalized range for one-time relocation costs, monthly living costs, and first-year budget.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="#tool-inputs"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow hover:from-brand-700 hover:to-cyan-700"
              >
                Start Estimating
              </Link>
              <Link
                href="#example-budgets"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                See example budgets
              </Link>
            </div>
          </div>
        </>
      </ToolPageTemplate>
    </>
  );
}

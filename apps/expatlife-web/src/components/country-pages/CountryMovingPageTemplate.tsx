import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import type { CountryPageModel } from "@/src/lib/countries/buildCountryPageModel";
import { CountryCostSection } from "./CountryCostSection";
import { CountryDocumentSection } from "./CountryDocumentSection";
import { CountryFaq } from "./CountryFaq";
import { CountryHero } from "./CountryHero";
import { CountryOverviewCards } from "./CountryOverviewCards";
import { CountryRelatedLinks } from "./CountryRelatedLinks";
import { CountryScenarioCards } from "./CountryScenarioCards";
import { CountryTimelineSection } from "./CountryTimelineSection";
import { CountryVisaAwareness } from "./CountryVisaAwareness";

function hasPublicAsset(relativePath: string) {
  return existsSync(path.join(process.cwd(), "public", relativePath.replace(/^\//, "")));
}

export function CountryMovingPageTemplate({ model }: { model: CountryPageModel }) {
  const heroImageSrc = hasPublicAsset(`/images/countries/${model.slug}-to-netherlands-hero.webp`)
    ? `/images/countries/${model.slug}-to-netherlands-hero.webp`
    : undefined;
  const timelineImageSrc = hasPublicAsset("/images/infographics/moving-timeline.webp")
    ? "/images/infographics/moving-timeline.webp"
    : undefined;
  const documentsImageSrc = hasPublicAsset("/images/infographics/documents-to-prepare.webp")
    ? "/images/infographics/documents-to-prepare.webp"
    : undefined;

  const affiliateData = loadPlacementWithProviders(model.affiliate.placementId, "netherlands", model.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(model.structuredData.webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(model.structuredData.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(model.structuredData.faq) }} />

      <CountryHero
        title={model.hero.title}
        subtitle={model.hero.subtitle}
        primaryCta={model.hero.primaryCta}
        secondaryCta={model.hero.secondaryCta}
        heroImageSrc={heroImageSrc}
      />

      <CountryOverviewCards cards={model.overviewCards} />

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Why people move from {model.name} to the Netherlands
          </h2>
          <p className="mt-3 text-sm text-slate-700">{model.opening.intro}</p>
          <p className="mt-3 text-sm text-slate-600">{model.opening.differences}</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900">Common reasons</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {model.whyMove.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900">Common sectors</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {model.whyMove.sectors.map((sector) => (
                  <li key={sector}>{sector}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <CountryVisaAwareness
        commonRoutes={model.visaAwareness.commonRoutes}
        notes={model.visaAwareness.notes}
        disclaimer={model.visaAwareness.disclaimer}
        visaHubPath={model.visaAwareness.visaHubPath}
        officialContacts={model.visaAwareness.officialContacts}
      />

      <CountryDocumentSection
        documents={model.documents.commonStarterDocuments}
        notes={model.documents.countrySpecificNotes}
        sources={model.documents.sources}
        ctaHref={model.documents.ctaHref}
        infographicSrc={documentsImageSrc}
      />

      <CountryTimelineSection
        beforeMove={model.timeline.beforeMove}
        arrivalWeek={model.timeline.arrivalWeek}
        first90Days={model.timeline.first90Days}
        narrative={model.timeline.narrative}
        infographicSrc={timelineImageSrc}
      />

      <CountryCostSection currency={model.costs.currency} ranges={model.costs.ranges} narrative={model.costs.narrative} />

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Step-by-step checklist preview</h2>
          <p className="mt-2 text-sm text-slate-600">{model.checklistPreview.summary}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {model.checklistPreview.links.map((link) => (
              <li key={link.href} className="rounded-lg border border-slate-200 bg-white p-3">
                <Link href={link.href} className="text-sm font-medium text-brand-700 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Services often used by people moving from {model.name}
          </h2>
          {model.affiliate.notes.length ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {model.affiliate.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          ) : null}
          <div className="mt-4">
            {affiliateData ? (
              <AffiliateBlockView placement={affiliateData.placement} items={affiliateData.items} />
            ) : (
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                Service recommendations are updated continuously.
              </div>
            )}
          </div>
        </div>
      </section>

      <CountryScenarioCards countryName={model.name} scenarios={model.scenarios} />
      <CountryFaq items={model.faq} />
      <CountryRelatedLinks links={model.relatedLinks} />
    </>
  );
}


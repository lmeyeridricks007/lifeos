import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { PillarTOC } from "@/components/content/PillarTOC";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/ui/container";
import { GuidePageTemplate } from "@/components/page/page-templates";
import {
  FAQBlock,
  PageHero,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarGuideToolsSection,
  ToolCard,
} from "@/components/page/pillar-template";
import { MajorCityCardsGrid } from "@/src/components/cities-overview/MajorCityCardsGrid";
import { CityComparisonTable } from "@/src/components/cities-overview/CityComparisonTable";
import { SecondaryCitiesSection } from "@/src/components/cities-overview/SecondaryCitiesSection";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { netherlandsCitiesOverview } from "@/src/data/cities-overview/netherlands-cities";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import type { CitiesOverviewHero } from "@/src/lib/cities-overview/types";
import {
  applyLiveGatesToCityComparisonRows,
  applyLiveGatesToMajorCityCards,
  applyLiveGatesToSecondaryCityCards,
} from "@/src/lib/cities-overview/applyLiveGatesToCityOverview";
import { filterLiveInternalLinks, isRouteLive } from "@/src/lib/routes/routeStatus";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { cn } from "@/lib/cn";
import { siteGuideColumnPadYClass } from "@/lib/ui/site-shell-identity";
import {
  BookOpen,
  Building2,
  Compass,
  HeartHandshake,
  Home,
  Landmark,
  LayoutGrid,
  Scale,
  Shield,
  TrainFront,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

function serviceCardIcon(href: string): LucideIcon {
  if (href.includes("housing-platforms")) return Home;
  if (href.includes("rental-agencies")) return Building2;
  if (href.includes("relocation-services")) return TrainFront;
  if (href.includes("banks")) return Landmark;
  if (href.includes("health-insurance")) return Shield;
  if (href.includes("visa-consultants")) return LayoutGrid;
  if (href.includes("immigration-lawyers")) return HeartHandshake;
  return LayoutGrid;
}

function exploreCardIcon(href: string): LucideIcon {
  if (href === "/netherlands/" || href.startsWith("/netherlands/?")) return Compass;
  if (href.includes("/services")) return LayoutGrid;
  if (href.includes("/about")) return HeartHandshake;
  if (href.includes("how-this-site-works")) return BookOpen;
  return Compass;
}

function CitiesHubHeroCtas({ hero }: { hero: CitiesOverviewHero }) {
  const primaryCtas = hero.ctas.filter((c) => c.primary);
  const secondaryCtas = hero.ctas.filter((c) => !c.primary);
  return (
    <div className="flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
      {primaryCtas.map((cta) =>
        cta.href.startsWith("#") ? (
          <a
            key={cta.href}
            href={cta.href}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-copilot-primary px-5 py-2.5 text-base font-semibold text-white shadow-expatos-md transition hover:bg-copilot-primary-strong hover:shadow-expatos-hover sm:w-auto sm:px-6 sm:py-3"
          >
            {cta.label}
            <span className="ml-1" aria-hidden>
              →
            </span>
          </a>
        ) : (
          <Link
            key={cta.href}
            href={cta.href}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-copilot-primary px-5 py-2.5 text-base font-semibold text-white shadow-expatos-md transition hover:bg-copilot-primary-strong hover:shadow-expatos-hover sm:w-auto sm:px-6 sm:py-3"
          >
            {cta.label}
            <span className="ml-1" aria-hidden>
              →
            </span>
          </Link>
        )
      )}
      {secondaryCtas.map((cta) => (
        <Link
          key={cta.href}
          href={cta.href}
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-slate-900/12 bg-copilot-surface px-5 py-2.5 text-sm font-semibold text-copilot-text-primary shadow-expatos-sm ring-1 ring-copilot-primary/10 hover:bg-copilot-bg-soft sm:w-auto"
        >
          {cta.label}
        </Link>
      ))}
    </div>
  );
}

const baseUrl = getSiteOrigin();
const path = netherlandsCitiesOverview.path;
const data = netherlandsCitiesOverview;

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  keywords: data.seo.keywords,
  alternates: { canonical: path },
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    type: "article",
    url: new URL(path, baseUrl).toString(),
  },
  twitter: {
    card: "summary_large_image",
    title: data.seo.title,
    description: data.seo.description,
  },
};

export const revalidate = CONTENT_REVALIDATE;

export default function NetherlandsCitiesPage() {
  const officialSources: CityOfficialSource[] = data.officialSources;
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL(path, baseUrl).toString() },
  ];
  const dateModified = data.publishDate;
  const hubServices = filterLiveInternalLinks(data.hubServiceLinks ?? []);
  const exploreCards = (data.exploreNextCards ?? []).filter((c) => isRouteLive(c.href));
  const hubGuideBlock = data.hubGuideBlock
    ? {
        ...data.hubGuideBlock,
        links: filterLiveInternalLinks(data.hubGuideBlock.links),
      }
    : null;

  const introLinks = filterLiveInternalLinks(data.intro.links);
  const majorCityCards = applyLiveGatesToMajorCityCards(data.majorCityCards);
  const comparisonRows = applyLiveGatesToCityComparisonRows(data.comparisonRows);
  const secondaryCities = data.secondaryCities?.length
    ? applyLiveGatesToSecondaryCityCards(data.secondaryCities)
    : [];

  const tocItems =
    secondaryCities.length > 0
      ? data.tocItems
      : data.tocItems.filter((t) => t.id !== "coming-soon-cities");

  const canonicalUrl = new URL(path, baseUrl).toString();
  const toolStrip = data.tools.slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <WebPageJsonLd
        name={data.hero.title}
        description={data.seo.description}
        urlPath={path}
        datePublished={data.publishDate}
      />
      <ArticleJsonLd
        headline={data.hero.title}
        description={data.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {data.faqs?.length ? <FaqPageJsonLd items={data.faqs} /> : null}

      <GuidePageTemplate
        rootClassName="min-h-screen"
        wrapContent={(inner) => (
          <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>{inner}</Container>
        )}
        hero={
          <PillarGuideHeroRegion>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-copilot-text-secondary sm:mb-5">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="hover:text-copilot-text-primary">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-copilot-text-muted">
                  /
                </li>
                <li>
                  <Link href="/netherlands/" className="hover:text-copilot-text-primary">
                    Netherlands
                  </Link>
                </li>
                <li aria-hidden className="text-copilot-text-muted">
                  /
                </li>
                <li className="font-medium text-copilot-text-primary" aria-current="page">
                  Cities
                </li>
              </ol>
            </nav>
            <PageHero
              movingPillarIdentity
              eyebrow={data.hero.eyebrow}
              title={data.hero.title}
              subtitle={data.hero.subtitle}
              shareUrl={canonicalUrl}
              pageId={path}
              afterSubtitle={<CitiesHubHeroCtas hero={data.hero} />}
              heroImage={
                data.hero.image?.src
                  ? {
                      src: data.hero.image.src,
                      alt: data.hero.image.alt,
                      caption: data.hero.image.caption,
                      priority: true,
                    }
                  : null
              }
            />
          </PillarGuideHeroRegion>
        }
        tools={
          toolStrip.length ? (
            <PillarGuideToolsSection
              compact
              id="tools"
              title="Useful tools when comparing cities"
              subtitle="Checklists, documents, and visa planning alongside city research."
            >
              {toolStrip.map((t) => (
                <ToolCard
                  key={t.href}
                  title={t.label}
                  description={t.description ?? ""}
                  href={t.href}
                  ctaLabel={t.status === "coming_soon" ? "Coming soon" : "Open"}
                  compact
                />
              ))}
            </PillarGuideToolsSection>
          ) : null
        }
        keySections={
          <div className="py-8 md:py-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(280px,1fr)]">
              <main className="min-w-0 w-full">
                <div className="mb-8 rounded-xl border border-copilot-primary/[0.08] bg-copilot-bg-soft/50 p-4 lg:hidden">
                  <PillarTOC items={tocItems} tone="support" />
                </div>

                <section id="overview" className="scroll-mt-24 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-sky-600 text-white shadow-md shadow-brand-500/25">
                      <Compass className="h-5 w-5" aria-hidden strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">{data.guideIntro.heading}</h2>
                  </div>
                  {data.guideIntro.paragraphs.map((p, i) => (
                    <p key={i} className="text-copilot-text-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
                    {introLinks.map((link, i) => (
                      <span key={link.href} className="flex items-center gap-x-3">
                        {i > 0 ? (
                          <span className="text-slate-300" aria-hidden>
                            ·
                          </span>
                        ) : null}
                        <Link
                          href={link.href}
                          className="font-medium text-brand-700 underline hover:text-brand-800"
                        >
                          {link.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                </section>

                <section id="covered-cities" className="scroll-mt-24 mt-12 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-md shadow-teal-500/20">
                      <LayoutGrid className="h-5 w-5" aria-hidden strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">Cities Already Covered</h2>
                  </div>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Each card links to a full city guide with local context for registration, housing, transport, and
                    practical next steps.
                  </p>
                  <MajorCityCardsGrid cards={majorCityCards} />
                </section>

                {secondaryCities.length ? (
                  <section id="coming-soon-cities" className="scroll-mt-24 mt-12 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 text-white shadow-md">
                        <Building2 className="h-5 w-5" aria-hidden strokeWidth={2} />
                      </span>
                      <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">More Dutch Cities Coming Soon</h2>
                    </div>
                    <p className="text-copilot-text-secondary leading-relaxed">
                      We are expanding city-by-city guides. These destinations are common choices depending on work,
                      university, lifestyle, and budget—bookmark this hub for updates, and use the covered cities above to
                      start planning today.
                    </p>
                    <SecondaryCitiesSection cities={secondaryCities} />
                  </section>
                ) : null}

                <section
                  id="compare-dutch-cities"
                  className="scroll-mt-24 mt-12 space-y-6 rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-white to-white p-6 shadow-sm md:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md shadow-violet-500/20">
                      <Scale className="h-5 w-5" aria-hidden strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      How Dutch Cities Differ for Expats
                    </h2>
                  </div>
                  {data.hubComparisonIntro?.paragraphs.map((p, i) => (
                    <p key={i} className="text-copilot-text-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {data.hubComparisonIntro?.dimensions?.length ? (
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Practical lenses</h3>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {data.hubComparisonIntro.dimensions.map((d, di) => {
                          const tints = [
                            "from-sky-50 to-white ring-sky-100",
                            "from-teal-50 to-white ring-teal-100",
                            "from-amber-50 to-white ring-amber-100",
                            "from-violet-50 to-white ring-violet-100",
                            "from-rose-50 to-white ring-rose-100",
                            "from-emerald-50 to-white ring-emerald-100",
                            "from-indigo-50 to-white ring-indigo-100",
                            "from-cyan-50 to-white ring-cyan-100",
                          ];
                          const tint = tints[di % tints.length];
                          return (
                            <div
                              key={d}
                              className={cn(
                                "flex gap-3 rounded-xl border border-slate-100 bg-gradient-to-br p-4 shadow-sm ring-1",
                                tint
                              )}
                            >
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/80 text-brand-600 shadow-sm ring-1 ring-slate-200/60">
                                <Compass className="h-4 w-4" aria-hidden />
                              </span>
                              <p className="text-sm leading-snug text-slate-700">{d}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                  <CityComparisonTable rows={comparisonRows} />
                </section>

                <section id="popular-services" className="scroll-mt-24 mt-12 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20">
                      <HeartHandshake className="h-5 w-5" aria-hidden strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      Useful Services When Choosing a City
                    </h2>
                  </div>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Housing pressure, banking setup, insurance, and permit support all interact with where you settle.
                    These Netherlands service hubs help whichever city you pick.
                  </p>
                  {hubServices.length ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {hubServices.map((s) => {
                        const Icon = serviceCardIcon(s.href);
                        return (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={cn(
                              "group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-200/40 transition",
                              "hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10"
                            )}
                          >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-white text-slate-700 shadow-sm ring-1 ring-slate-200/80 transition group-hover:from-brand-50 group-hover:text-brand-700 group-hover:ring-brand-200/50">
                              <Icon className="h-5 w-5" aria-hidden strokeWidth={2} />
                            </span>
                            <span className="mt-4 text-base font-semibold text-slate-900 group-hover:text-brand-800">
                              {s.label}
                            </span>
                            {"description" in s && s.description ? (
                              <span className="mt-2 text-sm text-slate-600">{s.description}</span>
                            ) : null}
                            <span className="mt-4 text-sm font-semibold text-brand-700">View hub →</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </section>

                {hubGuideBlock && hubGuideBlock.links.length ? (
                  <RelatedGuidesSection
                    id="helpful-guides"
                    title="Helpful Guides Before You Choose a City"
                    blocks={[hubGuideBlock]}
                  />
                ) : null}

                <section id="explore-next" className="scroll-mt-24 mt-12 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20">
                      <Compass className="h-5 w-5" aria-hidden strokeWidth={2} />
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">Not Sure Where to Start?</h2>
                  </div>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Use these entry points to move from city comparison into country-wide planning and trust resources.
                  </p>
                  {exploreCards.length ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {exploreCards.map((c) => {
                        const Icon = exploreCardIcon(c.href);
                        return (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="flex flex-col rounded-2xl border-2 border-brand-100 bg-gradient-to-br from-brand-50/90 via-white to-sky-50/50 p-6 shadow-md shadow-brand-500/5 transition hover:border-brand-200 hover:shadow-lg"
                          >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-brand-700 shadow-sm ring-1 ring-brand-100">
                              <Icon className="h-5 w-5" aria-hidden strokeWidth={2} />
                            </span>
                            <span className="mt-4 text-lg font-bold text-copilot-text-primary">{c.label}</span>
                            <span className="mt-2 text-sm text-slate-600">{c.description}</span>
                            <span className="mt-4 text-sm font-semibold text-brand-800">Open →</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </section>

                <section id="official-sources" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">Official Sources</h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Official newcomer centres and national business context for deeper research.
                  </p>
                  <OfficialSourcesList sources={officialSources} />
                </section>

                <RelatedGuidesSection title="Continue Planning Your Move" blocks={data.relatedGuides} />
              </main>

              <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-xl border border-copilot-primary/[0.08] bg-copilot-bg-soft/50 p-4">
                  <PillarTOC items={tocItems} tone="support" />
                </div>
              </aside>
            </div>
          </div>
        }
        faq={
          data.faqs?.length ? (
            <PillarGuideFaqRegion>
              <FAQBlock
                id="faq"
                eyebrow="Support"
                title="FAQs"
                items={data.faqs.map((f) => ({ q: f.q, a: f.a }))}
                maxItems={Math.max(5, data.faqs.length)}
              />
            </PillarGuideFaqRegion>
          ) : null
        }
      />
    </>
  );
}

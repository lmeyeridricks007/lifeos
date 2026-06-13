import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { siteGuideColumnPadYClass, sitePageCanvasClass } from "@/lib/ui/site-shell-identity";
import { movingNlCardMicroLiftClass, movingNlSectionH2Class, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { CITIES_FUNNEL_SOFT_COPILOT_SURFACE } from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  CITIES_HUB_PATH,
  citiesCompareHubPage as page,
  type CitiesCompareLink,
} from "./citiesCompareHubPageModel";

const baseUrl = getSiteOrigin();
const cardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass);

function LinkCard({ item }: { item: CitiesCompareLink }) {
  const isLive = item.status !== "comingSoon";
  const inner = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : "bg-slate-200")} aria-hidden />
      <h3 className="text-lg font-bold text-foreground">
        {item.label}
        {!isLive ? <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">Coming soon</span> : null}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.description}</p>
      {isLive ? (
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
          Open <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      ) : null}
    </>
  );
  if (!isLive) return <article className={cn(cardClass, "opacity-90")}>{inner}</article>;
  return (
    <Link href={item.href} className={cn(cardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30", transitionInteractive, activeBrightnessPress)}>
      {inner}
    </Link>
  );
}

export function CitiesCompareHubView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL(CITIES_HUB_PATH, baseUrl).toString() },
    { name: "Compare cities", item: new URL(page.path, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <header className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <span aria-hidden>/</span>
              <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link>
              <span aria-hidden>/</span>
              <Link href={CITIES_HUB_PATH} className="hover:text-foreground">Cities</Link>
              <span aria-hidden>/</span>
              <span className="text-foreground" aria-current="page">Compare</span>
            </nav>
            <h1 className={cn(movingNlSectionH2Class, "mt-8 text-4xl sm:text-5xl")}>{page.hero.pageTitle}</h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground-muted">{page.hero.subtitle}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={page.hero.primaryCta.href} className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong">
                {page.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={page.hero.secondaryCta.href} className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:bg-surface-muted">
                {page.hero.secondaryCta.label}
              </Link>
            </div>
          </header>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Head-to-head comparisons</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.liveComparisons.map((item) => <LinkCard key={item.href} item={item} />)}
              {page.comingSoonComparisons.map((item) => <LinkCard key={item.label} item={item} />)}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">City shortlist guides</h2>
            <p className="mt-2 max-w-2xl text-foreground-muted">Scenario-based guides when you are not comparing two cities directly.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.funnelGuides.map((item) => <LinkCard key={item.href} item={item} />)}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Tools</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {page.tools.map((item) => <LinkCard key={item.href} item={item} />)}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}

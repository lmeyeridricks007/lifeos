import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Calculator, CheckCircle2, FileText, Globe2, PiggyBank, ReceiptText, ShieldCheck, type LucideIcon } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { TrackedExternalLink } from "@/components/analytics/TrackedExternalLink";
import {
  siteGuideColumnPadYClass,
  siteHeroFramedShellClass,
  siteHeroGlowPrimaryClass,
  siteHeroGlowSecondaryClass,
  siteHeroTopAccentClass,
  sitePageCanvasClass,
} from "@/lib/ui/site-shell-identity";
import {
  movingNlCardMicroLiftClass,
  movingNlSectionH2Class,
  movingNlSectionH2OnDarkClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { CITIES_FUNNEL_INFO_CHIP, CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE } from "@/src/components/cities/shared/citiesFunnelPageUi";
import { taxAdvisorsPage as page, taxAdvisorsProviders, type TaxAdvisorDirectoryLink } from "@/src/data/services/categories/tax-advisors";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();
const { path, seo, hero, publishDate } = page;
const icons = [Calculator, ReceiptText, Globe2, BriefcaseBusiness, PiggyBank, FileText, ShieldCheck, CheckCircle2] as const;
const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5", movingNlCardMicroLiftClass);
const primaryCtaClass = cn("inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress);
const secondaryCtaClass = cn("inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress);
const sectionNav = [
  { href: "#intro", label: "Why use an advisor" },
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#when-help", label: "When help fits" },
  { href: "#types", label: "Specialist types" },
  { href: "#providers", label: "Providers" },
  { href: "#specialized", label: "Service fit" },
  { href: "#choose", label: "How to choose" },
  { href: "#scenarios", label: "Scenarios" },
  { href: "#faq", label: "FAQ" },
] as const;

function providerPartnerSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: path },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: { title: seo.title, description: seo.description, type: "website", url: new URL(path, baseUrl).toString(), images: [{ url: hero.image.src, alt: hero.image.alt }] },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [hero.image.src] },
};

function SectionIntro({ title, children, tone = "default" }: { title: string; children?: ReactNode; tone?: "default" | "dark" }) {
  return (
    <div className="max-w-3xl">
      <h2 className={tone === "dark" ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class}>{title}</h2>
      {children ? <div className={cn("mt-3 space-y-3 text-base leading-relaxed", tone === "dark" ? "text-slate-300" : "text-foreground-muted")}>{children}</div> : null}
    </div>
  );
}

function VisualFigure({ visual, className }: { visual: { src: string; alt: string; caption: string }; className?: string }) {
  return (
    <figure className={cn("overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-expatos-lg ring-1 ring-slate-900/[0.05]", className)}>
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-contain" />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">
        {visual.caption}
      </figcaption>
    </figure>
  );
}

function InsightPanel({ eyebrow, title, rows, note, tone = "light" }: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl p-5 shadow-expatos-xl ring-1 sm:p-6", dark ? "bg-white/10 text-white ring-white/10" : "bg-slate-950 text-white ring-black/20")}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
      <div className="mt-4 space-y-3">
        {rows.map(({ label, body, Icon }) => (
          <div key={label} className={cn("flex gap-3 rounded-2xl p-3 ring-1", dark ? "bg-white/10 ring-white/10" : "bg-white/8 ring-white/10")}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-100/15 text-cyan-100 ring-1 ring-white/15"><Icon className="h-4 w-4" aria-hidden /></span>
            <span><span className="block text-sm font-bold text-white">{label}</span><span className="mt-1 block text-sm leading-relaxed text-slate-300">{body}</span></span>
          </div>
        ))}
      </div>
      {note ? <p className="mt-4 rounded-2xl bg-white/10 p-3 text-sm leading-relaxed text-slate-200 ring-1 ring-white/10">{note}</p> : null}
    </aside>
  );
}

function LinkCard({ item, index, tone = "default" }: { item: TaxAdvisorDirectoryLink; index: number; tone?: "default" | "dark" }) {
  const Icon = icons[index % icons.length];
  const live = item.status !== "comingSoon";
  const dark = tone === "dark";
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", live ? movingNlSignatureGradientClass : dark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <div className="flex gap-3">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1", dark ? "bg-white/10 text-cyan-100 ring-white/15" : "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10")}><Icon className="h-5 w-5" aria-hidden /></span>
        <span><span className={cn("text-sm font-bold", dark ? "text-white" : "text-foreground")}>{item.label}</span>{item.status === "comingSoon" ? <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", dark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500")}>Coming soon</span> : null}{item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", dark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}</span>
      </div>
      <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", dark ? "text-cyan-100" : live ? "text-link" : "text-slate-500")}>{live ? "Open" : "Planned"} <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
    </>
  );
  const cls = cn("relative overflow-hidden rounded-2xl p-5 shadow-sm ring-1", dark ? "border border-white/10 bg-white/10 ring-white/10" : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, movingNlCardMicroLiftClass));
  return live ? <Link href={item.href} className={cn(cls, "block", transitionInteractive, activeBrightnessPress)}>{body}</Link> : <article className={cn(cls, "opacity-90")}>{body}</article>;
}

function ScenarioTile({ scenario, index }: { scenario: (typeof page.scenarios)[number]; index: number }) {
  const link = scenario.links[0] as TaxAdvisorDirectoryLink | undefined;
  const Icon = icons[index % icons.length];
  const live = link?.status !== "comingSoon";
  const linkLabel = link?.label ?? "Related guide";

  const content = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", live ? movingNlSignatureGradientClass : "bg-slate-200")} aria-hidden />
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-bold leading-snug text-foreground">{scenario.title}</h3>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-foreground-muted ring-1 ring-slate-200">
              Start with: <span className="text-foreground">{linkLabel}</span>
            </span>
            {!live ? (
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                Coming soon
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <span className={cn("mt-5 inline-flex items-center gap-1 text-sm font-semibold", live ? "text-link" : "text-slate-500")}>
        {live ? "Open guide" : "Planned guide"}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </>
  );

  const className = cn("relative block min-h-[172px] overflow-hidden rounded-2xl border border-copilot-primary/[0.1] bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass);

  if (live && link) {
    return (
      <Link href={link.href} className={cn(className, transitionInteractive, activeBrightnessPress)}>
        {content}
      </Link>
    );
  }

  return <article className={cn(className, "opacity-90")}>{content}</article>;
}

export default function TaxAdvisorsServicesPage() {
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Tax Advisors", item: new URL(path, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(path, baseUrl).toString()} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "p-0")}>
            <div className={siteHeroTopAccentClass} aria-hidden /><div className={siteHeroGlowPrimaryClass} aria-hidden /><div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
                <div>
                  <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted"><Link href="/" className="hover:text-foreground">Home</Link><span aria-hidden>/</span><Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link><span aria-hidden>/</span><Link href="/netherlands/services/" className="hover:text-foreground">Services</Link><span aria-hidden>/</span><span className="text-foreground" aria-current="page">Tax advisors</span></nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{hero.chips.map((chip) => <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>{chip}</span>)}</div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href={hero.primaryCta.href} className={primaryCtaClass}>{hero.primaryCta.label}<ArrowRight className="h-4 w-4" aria-hidden /></Link><Link href={hero.secondaryCta.href} className={secondaryCtaClass}>{hero.secondaryCta.label}</Link></div>
                </div>
                <figure className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/70 bg-white shadow-expatos-xl ring-1 ring-slate-900/[0.06]"><Image src={hero.image.src} alt={hero.image.alt} width={1600} height={1000} priority sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" aria-hidden /></figure>
              </div>
            </div>
          </section>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white/80 p-3 shadow-sm ring-1 ring-slate-900/[0.03]">
            <nav aria-label="Tax advisor directory sections" className="flex min-w-max gap-2">
              {sectionNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
                    transitionInteractive,
                    activeBrightnessPress
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)]">
                <SectionIntro title="Why Expats Often Use Tax Advisors in the Netherlands">
                  <p>Many expats arrive with tax situations that are more complex than those of a typical local employee. Common topics include the 30% ruling, tax residency, foreign income, investments abroad, Dutch tax returns, payroll questions, freelancing or ZZP registration, and moving during a tax year.</p>
                  <p>Not everyone needs a tax advisor, but professional support can help in more complex international situations.</p>
                </SectionIntro>
                <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Decision lens</p><h3 className="mt-2 text-xl font-bold">Use paid help when facts stack</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">Cross-border income, foreign assets, move-year returns and ZZP income are common reasons to compare tax help after reading official guidance.</p></aside>
              </div>
              <VisualFigure visual={page.infographics.whenToGetHelp} className="mt-6" />
              <div className="mt-6 grid gap-4 sm:grid-cols-3">{page.relatedGuides.slice(0, 3).map((item, index) => <LinkCard key={item.href} item={item} index={index} />)}</div>
            </section>

            <section id="at-a-glance" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-start">
                <div>
                  <SectionIntro title="Tax Advisor Services at a Glance"><p>Use this snapshot to understand the category before comparing individual firms. The right provider depends on your tax topic, not a universal ranking.</p></SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{page.snapshotCards.map((card, index) => { const Icon = icons[index % icons.length]; return <article key={card.title} className={mutedCardClass}><div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden /><div className="flex gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10"><Icon className="h-5 w-5" aria-hidden /></span><span><h3 className="text-sm font-bold uppercase tracking-[0.12em] text-brand-strong">{card.title}</h3><p className="mt-2 text-sm text-foreground-muted">{card.body}</p></span></div></article>; })}</div>
                </div>
                <InsightPanel eyebrow="Quick read" title="What the snapshot tells you" rows={[{ label: "Start with the topic", body: "Return filing, 30% ruling, ZZP and payroll questions can need different specialists.", Icon: Calculator }, { label: "Match service depth", body: "A quick review, full filing and ongoing bookkeeping are different engagements.", Icon: FileText }, { label: "Check language and scope", body: "English support matters, but so does whether the provider handles your exact situation.", Icon: CheckCircle2 }]} />
              </div>
            </section>

            <section id="when-help" className={sectionClass}><SectionIntro title="Situations Where Professional Tax Help May Be Useful"><p>Complex international situations often involve multiple tax systems. These prompts help you decide when to compare support.</p></SectionIntro><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{page.needHelpCards.map((title, index) => { const Icon = icons[index % icons.length]; return <article key={title} className={cn("relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}><div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden /><Icon className="h-5 w-5 text-brand-strong" aria-hidden /><p className="mt-3 text-sm font-semibold text-foreground">{title}</p></article>; })}</div><div className="mt-6"><InsightPanel eyebrow="Complexity signals" title="Three common reasons help becomes useful" rows={[{ label: "Move-year facts", body: "Arrival, departure and M-form timing can make a normal return less straightforward.", Icon: ReceiptText }, { label: "Cross-border income", body: "Foreign employer, assets or investments can add reporting and residency questions.", Icon: Globe2 }, { label: "Business income", body: "ZZP, VAT and bookkeeping obligations often need separate admin from personal filing.", Icon: BriefcaseBusiness }]} /></div></section>

            <section id="types" className={sectionClass}><SectionIntro title="Different Types of Tax Advisors and Specialists" /><VisualFigure visual={page.infographics.specialistMatch} className="mt-6" /><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{page.specialistTypes.map((card) => <article key={card.title} className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5", movingNlCardMicroLiftClass)}><div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden /><h3 className="text-base font-bold text-foreground">{card.title}</h3><p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p></article>)}</div></section>

            <section id="providers" className={sectionClass}>
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(300px,0.55fr)] lg:items-start">
                <SectionIntro title="Expat Tax Advisors and Specialists in the Netherlands"><p>These are neutral discovery cards for real businesses. They are not ranked and do not imply endorsement.</p></SectionIntro>
                <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Directory standard</p>
                  <h3 className="mt-2 text-xl font-bold">Discovery, not rankings</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">Use provider cards to compare focus, customer fit and scope. Confirm fees, credentials and exact services directly with the business.</p>
                </aside>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {taxAdvisorsProviders.map((provider, index) => (
                  <article key={provider.name} className={cn(mutedCardClass, "p-0")}>
                    <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-copilot-bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Provider {index + 1}</span>
                            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">Business entity</span>
                          </div>
                          <h3 className="mt-3 text-lg font-bold text-foreground">{provider.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{provider.summary}</p>
                        </div>
                        <TrackedExternalLink
                          href={provider.href}
                          target="_blank"
                          rel="sponsored noopener noreferrer"
                          linkType="provider"
                          partnerSlug={providerPartnerSlug(provider.name)}
                          linkText={`Website: ${provider.name}`}
                          className={cn("shrink-0 rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold text-link shadow-sm hover:border-brand/30 hover:bg-copilot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30", transitionInteractive)}
                        >
                          Website
                        </TrackedExternalLink>
                      </div>
                      <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
                        <div className="rounded-2xl bg-slate-50/90 p-3 ring-1 ring-slate-900/[0.04]"><dt className="font-bold text-brand-strong">Focus</dt><dd className="mt-1 text-foreground-muted">{provider.focus}</dd></div>
                        <div className="rounded-2xl bg-slate-50/90 p-3 ring-1 ring-slate-900/[0.04]"><dt className="font-bold text-brand-strong">Ideal customer</dt><dd className="mt-1 text-foreground-muted">{provider.idealCustomer}</dd></div>
                        <div className="rounded-2xl bg-slate-50/90 p-3 ring-1 ring-slate-900/[0.04]"><dt className="font-bold text-brand-strong">City/region</dt><dd className="mt-1 text-foreground-muted">{provider.region}</dd></div>
                      </dl>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-5 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-4 text-sm leading-relaxed text-amber-950 shadow-sm ring-1 ring-amber-100">{page.disclosure}</p>
            </section>

            <section id="specialized" className={sectionClass}><div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-start"><div><SectionIntro title="Find the Right Tax Specialist for Your Situation"><p>These service groupings show where a provider may fit. They are examples for discovery, not rankings or guarantees that a provider is right for every case.</p></SectionIntro><div className="mt-6 grid gap-4 lg:grid-cols-4">{page.specializedServices.map((group) => <article key={group.title} className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5", movingNlCardMicroLiftClass)}><div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden /><h3 className="font-bold text-foreground">{group.title}</h3><ul className="mt-3 space-y-2 text-sm text-foreground-muted">{group.providers.map((p) => <li key={p}>{p}</li>)}</ul></article>)}</div></div><InsightPanel eyebrow="Service fit" title="Choose by problem, then provider" rows={[{ label: "Name the problem", body: "30% ruling, M-form, ZZP, payroll and foreign income point to different skills.", Icon: Calculator }, { label: "Ask what is included", body: "Filing, review, coaching and representation are different service scopes.", Icon: FileText }, { label: "Confirm handoff", body: "If tax connects to immigration or payroll, ask whether the provider coordinates or only advises.", Icon: ShieldCheck }]} /></div></section>

            <section id="choose" className={sectionClass}><SectionIntro title="How to Choose the Right Tax Advisor"><p>Do not choose based on a list position. Compare the type of help, scope, documents, pricing and whether the advisor regularly handles your situation.</p></SectionIntro><VisualFigure visual={page.infographics.providerChecklist} className="mt-6" /><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{page.comparisonFactors.map((factor) => <div key={factor} className="rounded-2xl border border-slate-200/90 bg-white/95 p-4 text-sm font-semibold text-foreground shadow-sm">{factor}</div>)}</div></section>

            <section id="scenarios" className={sectionClass}>
              <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.55fr)] lg:items-end">
                <SectionIntro title="Common Expat Tax Situations">
                  <p>Use these scenarios to decide what to read first and which service category might fit afterward. Start with the relevant guide, then compare provider scope only if your facts still need help.</p>
                </SectionIntro>
                <div className="rounded-3xl border border-copilot-primary/[0.1] bg-slate-50/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Scenario path</p>
                  <div className="mt-3 grid gap-2 text-sm text-foreground-muted sm:grid-cols-3 lg:grid-cols-1">
                    <p><span className="font-semibold text-foreground">1. Read</span> the guide first.</p>
                    <p><span className="font-semibold text-foreground">2. Prepare</span> dates and documents.</p>
                    <p><span className="font-semibold text-foreground">3. Compare</span> advisor scope.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {page.scenarios.map((scenario, index) => <ScenarioTile key={scenario.title} scenario={scenario} index={index} />)}
              </div>
            </section>

            <section id="related-guides" className={sectionClass}><div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-start"><div><SectionIntro title="Learn More About Dutch Taxes"><p>These guides give the context behind provider questions. Use them to clarify the issue before paying for a scoped advisor call.</p></SectionIntro><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{page.relatedGuides.map((item, index) => <LinkCard key={item.href} item={item} index={index} />)}</div></div><InsightPanel eyebrow="Learning order" title="Best next reading path" rows={[{ label: "Start broad", body: "Use the Dutch taxes hub for the system map and key terms.", Icon: Globe2 }, { label: "Then your case", body: "Read expat taxes, 30% ruling or tax return content based on your facts.", Icon: FileText }, { label: "Then compare help", body: "Only compare providers once you can explain your question clearly.", Icon: CheckCircle2 }]} /></div></section>

            <section id="faq" className={sectionClass}><div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-start"><div><SectionIntro title="Frequently Asked Questions"><p>These answers set expectations before contacting a provider: what advisors often do, what they cannot guarantee, and where bookkeepers or payroll specialists may be a better fit.</p></SectionIntro><div className="mt-6 grid gap-4 lg:grid-cols-2">{page.faq.map((item) => <article key={item.q} className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5", movingNlCardMicroLiftClass)}><div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden /><h3 className="font-bold text-foreground">{item.q}</h3><p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p></article>)}</div></div><InsightPanel eyebrow="Before you book" title="Questions to bring to a provider" rows={[{ label: "What is in scope?", body: "Ask whether they advise, file, review or represent you with authorities.", Icon: FileText }, { label: "Who does the work?", body: "Confirm the advisor, accountant or bookkeeper who will handle your file.", Icon: BriefcaseBusiness }, { label: "How are documents handled?", body: "Ask about secure document exchange, deadlines and written deliverables.", Icon: ShieldCheck }]} /></div></section>

            <section id="official-sources" className={sectionClass}><div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-start"><div><SectionIntro title="Official Tax Resources"><p>Use official sources for tax authority rules and government business guidance. Directory sites can help identify providers, but they do not replace official tax information or professional advice for your file.</p></SectionIntro><div className="mt-6 grid gap-3 sm:grid-cols-2">{page.officialSources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className={cn("rounded-2xl border border-border bg-white p-5 text-sm font-semibold text-foreground hover:text-brand-strong", transitionInteractive)}>{source.label}</a>)}</div></div><InsightPanel eyebrow="Source hierarchy" title="How to use sources" rows={[{ label: "Official first", body: "Belastingdienst and government pages define rules and official processes.", Icon: ShieldCheck }, { label: "Guides second", body: "Use ExpatCopilot guides to understand context and vocabulary.", Icon: FileText }, { label: "Providers third", body: "Use providers for scoped help tied to your documents and facts.", Icon: BriefcaseBusiness }]} /></div></section>

            <section id="related-services" className={sectionClass}><div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-start"><div><SectionIntro title="Related Expat Services"><p>Tax questions often overlap with business setup, payroll, bookkeeping, immigration and relocation. These categories help you route the non-tax parts of the problem to the right service area.</p></SectionIntro><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{page.relatedServices.map((item, index) => <LinkCard key={item.href} item={item} index={index} />)}</div></div><InsightPanel eyebrow="Service boundary" title="When tax is not the only service" rows={[{ label: "Bookkeeping", body: "Ongoing invoices, records and VAT administration may sit with a bookkeeper.", Icon: ReceiptText }, { label: "Payroll", body: "Employer-side salary, withholding and expat compensation may need payroll support.", Icon: Calculator }, { label: "Immigration", body: "Visa and residence issues belong with immigration specialists, not only tax advisors.", Icon: Globe2 }]} /></div></section>

            <section id="explore-next" className="scroll-mt-28 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8"><div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-start"><div><SectionIntro title="Explore Next" tone="dark"><p>Move from provider discovery into tax guides, business setup and related services.</p></SectionIntro><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{[...page.relatedGuides.slice(0, 4), ...page.relatedServices.slice(3, 5)].map((item, index) => <LinkCard key={item.href} item={item} index={index} tone="dark" />)}</div></div><InsightPanel tone="dark" eyebrow="Next step" title="Turn research into a clearer brief" rows={[{ label: "Summarize your year", body: "Write down move dates, employer setup, income types and foreign ties.", Icon: FileText }, { label: "Pick the service lane", body: "Choose tax advice, filing, bookkeeping, payroll or immigration support.", Icon: BriefcaseBusiness }, { label: "Contact with scope", body: "Ask for price, deliverables and timeline before sharing sensitive documents.", Icon: ShieldCheck }]} /></div></section>
          </div>
        </Container>
      </main>
    </>
  );
}

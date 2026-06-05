import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Home,
  Landmark,
  MapPin,
  Percent,
  ReceiptText,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
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
import {
  citiesFunnelHeroFigureClassName,
  CITIES_FUNNEL_INFO_CHIP,
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  mortgagesNetherlandsExpatsPage as page,
  type MortgagesNetherlandsExpatsLink,
} from "./mortgagesNetherlandsExpatsPageModel";

const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-white/80 after:pointer-events-none after:absolute after:-right-20 after:-top-20 after:h-52 after:w-52 after:rounded-full after:bg-copilot-primary/5 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-6 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const primaryCtaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);
const secondaryCtaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

const cardIcons = [Home, Landmark, BriefcaseBusiness, WalletCards, Percent, Calculator, FileText, ShieldCheck] as const;
const snapshotIcons = [Home, Banknote, Percent, ClipboardCheck, ReceiptText, BriefcaseBusiness] as const;

function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "default",
  fullWidth = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  tone?: "default" | "onDark";
  fullWidth?: boolean;
}) {
  const onDark = tone === "onDark";
  return (
    <div className={cn(fullWidth ? "w-full max-w-none" : "max-w-3xl")}>
      {eyebrow ? <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p> : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? (
        <div
          className={cn(
            "mt-3 w-full space-y-3 text-base leading-relaxed",
            fullWidth && "max-w-none lg:columns-2 lg:gap-x-10 [&>p]:break-inside-avoid",
            onDark ? "text-slate-300" : "text-foreground-muted"
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <Image src={page.hero.image.src} alt={page.hero.image.alt} width={1600} height={900} priority sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" aria-hidden />
    </figure>
  );
}

function VisualFigure({ visual }: { visual: (typeof page.visuals)[keyof typeof page.visuals] }) {
  return (
    <figure className={cn("overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-expatos-xl ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft">
        <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-contain" />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">{visual.caption}</figcaption>
    </figure>
  );
}

function StatCard({ label, value, iconIndex }: { label: string; value: string; iconIndex: number }) {
  const Icon = snapshotIcons[iconIndex % snapshotIcons.length];
  return (
    <article className={cn(mutedCardClass, "min-h-full")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-foreground-muted">{label}</p>
          <p className="mt-1 text-base font-bold leading-snug text-foreground">{value}</p>
        </div>
      </div>
    </article>
  );
}

function FeatureCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
  return (
    <article className={cn(mutedCardClass, "min-h-full")}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
        </div>
      </div>
    </article>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: MortgagesNetherlandsExpatsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const shell = onDark
    ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10"
    : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <div className="flex gap-3">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1", onDark ? "bg-white/10 text-cyan-100 ring-white/15" : isLive ? "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10" : "bg-slate-100 text-slate-500 ring-slate-200")}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className={cn("text-sm font-bold", onDark ? "text-white" : "text-foreground")}>{item.label}</span>
          {!isLive ? <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300 ring-1 ring-white/10" : "bg-slate-100 text-slate-500")}>Coming soon</span> : null}
          {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
        </span>
      </div>
      {isLive ? <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover")}>Open <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span> : null}
    </>
  );
  if (!isLive) return <article className={cn(shell, "opacity-90")}>{body}</article>;
  return (
    <Link href={item.href} className={cn(shell, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas", !onDark && movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
      {body}
    </Link>
  );
}

function BulletPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <ul className={cn("mt-4 grid gap-3", items.length >= 4 && "md:grid-cols-2")}>
        {items.map((item) => (
          <li key={item} className="flex gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 text-sm leading-relaxed text-foreground-muted">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ExampleTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: readonly string[];
  rows: readonly Record<string, string>[];
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="border-b border-slate-200/80 px-5 py-4">
        <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/80 bg-slate-50/80">
              {columns.map((column) => (
                <th key={column} scope="col" className="px-4 py-3 font-bold text-foreground">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`} className="border-b border-slate-100 last:border-0">
                {columns.map((column) => (
                  <td key={column} className="px-4 py-3 leading-relaxed text-foreground-muted">
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BorrowerScenarioCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {page.borrowerScenarios.map((scenario) => (
        <article key={scenario.title} className={cn(mutedCardClass, "min-h-full")}>
          <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold tracking-tight text-foreground">{scenario.title}</h3>
          <p className="mt-2 rounded-2xl bg-slate-50/90 p-3 text-sm font-semibold leading-relaxed text-foreground ring-1 ring-slate-200/80">{scenario.profile}</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{scenario.takeaway}</p>
        </article>
      ))}
    </div>
  );
}

function ProcessSteps() {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {page.processSteps.map((step) => (
        <li key={step.step} className={cn("relative rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
          <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-sm">{step.step}</span>
            <div>
              <h3 className="text-base font-bold tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function CityCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {page.cityCards.map((city) => (
        <Link key={city.label} href={city.href} className={cn("group block rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-bold tracking-tight text-foreground">{city.label}</h3>
              <p className="mt-1 text-sm text-foreground-muted">{city.affordability}</p>
            </div>
            <MapPin className="h-5 w-5 shrink-0 text-brand-strong" aria-hidden />
          </div>
          <dl className="mt-4 grid gap-2 text-sm">
            <div className="flex justify-between gap-3 border-t border-slate-100 pt-2">
              <dt className="text-foreground-muted">Competition</dt>
              <dd className="text-right font-medium text-foreground">{city.competition}</dd>
            </div>
            <div className="flex justify-between gap-3 border-t border-slate-100 pt-2">
              <dt className="text-foreground-muted">Expat demand</dt>
              <dd className="text-right font-medium text-foreground">{city.expatDemand}</dd>
            </div>
            <div className="border-t border-slate-100 pt-2 text-foreground-muted">{city.commute}</div>
          </dl>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">Open city guide <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
        </Link>
      ))}
    </div>
  );
}

function FaqSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {page.faq.map((item) => (
        <article key={item.q} className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm">
          <h3 className="text-base font-bold tracking-tight text-foreground">{item.q}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
        </article>
      ))}
    </div>
  );
}

function SourcesSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {page.officialSources.map((source) => (
        <a key={source.href} href={source.href} className={cn("group block rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)} target="_blank" rel="noreferrer">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <ShieldCheck className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="text-sm font-bold text-foreground">{source.label}</span>
              <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">Open official source <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

const crumbs = [
  { name: "Home", item: "/" },
  { name: "Netherlands", item: "/netherlands/" },
  { name: "Housing", item: page.relatedGuides[0].href },
  { name: page.hero.pageTitle, item: page.path },
];

export function MortgagesNetherlandsExpatsView() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "overflow-hidden p-6 sm:p-8 lg:p-10")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_0.78fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-strong">{page.hero.eyebrow}</p>
                <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {page.hero.chips.map((chip) => (
                    <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>{chip}</span>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>{page.hero.primaryCta.label}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
                  <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>{page.hero.secondaryCta.label}</Link>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                  This guide is general orientation, not mortgage advice, tax advice, investment advice or a guarantee of approval.
                </p>
              </div>
              <HeroImage />
            </div>
          </section>

          <nav className="mt-6 flex gap-2 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/85 p-2 shadow-sm" aria-label="Mortgage guide sections">
            {page.sectionNav.map((item) => (
              <a key={item.href} href={item.href} className="shrink-0 rounded-xl px-3 py-2 text-sm font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong">
                {item.label}
              </a>
            ))}
          </nav>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="Eligibility" title="Can Expats Get Mortgages in the Netherlands?">
                  {page.introPoints.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </SectionIntro>
                <VisualFigure visual={page.visuals.eligibility} />
              </div>
              <div className="mt-6">
                <BulletPanel title="Start with this mortgage-readiness checklist" items={page.introChecklist} />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <SectionIntro eyebrow="At a glance" title="Dutch Mortgages at a Glance" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.snapshotCards.map((card, index) => (
                  <StatCard key={card.label} label={card.label} value={card.value} iconIndex={index} />
                ))}
              </div>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <ExampleTable
                  title="Illustrative buyer-cost ranges"
                  columns={["Purchase price", "Transfer tax", "Other costs", "Total planning range"]}
                  rows={page.buyerCostExamples.map((row) => ({
                    "Purchase price": row.purchasePrice,
                    "Transfer tax": row.transferTax,
                    "Other costs": row.otherCosts,
                    "Total planning range": row.totalPlanningRange,
                  }))}
                />
                <ExampleTable
                  title="Overbidding valuation-gap examples"
                  columns={["Asking price", "Offer", "Valuation", "Gap from savings"]}
                  rows={page.appraisalGapExamples.map((row) => ({
                    "Asking price": row.askingPrice,
                    Offer: row.offer,
                    Valuation: row.valuation,
                    "Gap from savings": row.gapFromSavings,
                  }))}
                />
              </div>
              <div className="mt-6">
                <BulletPanel title="How to use this snapshot" items={page.snapshotUseTips} />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {page.adviserCallMilestones.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
            </section>

            <section id="how-it-works" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Dutch mortgage system" title="How Mortgages Work in the Netherlands">
                    <p>A Dutch mortgage is a long-term loan used to purchase property. The lender assesses the borrower, the property and the affordability of the loan before approval.</p>
                    <p>The process usually combines income checks, advice, valuation, interest and repayment structure decisions, and a notarial transfer. For many newcomers, the adviser and notary roles are the biggest differences from home-country systems.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {page.conceptCards.map((card, index) => (
                      <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.process} />
              </div>
            </section>

            <section id="hsm" className={sectionClass}>
              <SectionIntro eyebrow="Highly skilled migrants" title="Mortgages for Highly Skilled Migrants">
                <p>Many highly skilled migrants successfully obtain Dutch mortgages. Banks may evaluate visa type, employment contract, income stability, employer profile and the wider financial picture.</p>
                <p>That does not mean approval is automatic. Treat any early estimate as indicative until the lender completes the formal assessment.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {page.hsmCards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <div className="mt-6">
                <BorrowerScenarioCards />
              </div>
              <div className="mt-6">
                <BulletPanel title="Prepare before an adviser call" items={page.hsmPrepChecklist} />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="Document-readiness examples"
                  columns={["Situation", "Documents", "Watch-out"]}
                  rows={page.documentReadinessExamples.map((row) => ({
                    Situation: row.situation,
                    Documents: row.documents,
                    "Watch-out": row.watchOut,
                  }))}
                />
              </div>
            </section>

            <section id="borrowing" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Borrowing capacity" title="How Borrowing Capacity Works">
                    <p>Dutch lenders use affordability calculations. Gross salary matters, but it is only one input next to partner income, debts, contract stability, interest assumptions and household costs.</p>
                    <p>Before house hunting, connect mortgage planning to salary and take-home-pay planning so your search range is realistic.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {page.borrowingFactors.map((card, index) => (
                      <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.borrowingCapacity} />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {page.salaryLinks.map((link, index) => (
                  <LinkCard key={link.href} item={link} iconIndex={index} />
                ))}
              </div>
              <div className="mt-6">
                <BorrowerScenarioCards />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="Borrowing-capacity planning examples"
                  columns={["Profile", "Income signal", "Planning focus"]}
                  rows={page.capacityPlanningExamples.map((row) => ({
                    Profile: row.profile,
                    "Income signal": row.incomeSignal,
                    "Planning focus": row.planningFocus,
                  }))}
                />
              </div>
            </section>

            <section id="rates" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Interest choices" title="Fixed vs Variable Interest Rates">
                    <p>Fixed-rate mortgages prioritise predictability. Variable-rate mortgages may change over time. Neither is universally better; the decision depends on stability needs, flexibility, risk tolerance and professional advice.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {page.rateCards.map((card, index) => (
                      <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.fixedVariable} />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="Fixed vs variable decision examples"
                  columns={["Preference", "May fit", "Trade-off"]}
                  rows={page.rateDecisionExamples.map((row) => ({
                    Preference: row.preference,
                    "May fit": row.mayFit,
                    "Trade-off": row.tradeOff,
                  }))}
                />
              </div>
            </section>

            <section id="structures" className={sectionClass}>
              <SectionIntro eyebrow="Mortgage structures" title="Common Mortgage Structures">
                <p>Annuity, linear and limited interest-only structures affect monthly payments, repayment pace and possible tax treatment. Use regulated advice rather than product assumptions from another country.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {page.structureCards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="Repayment structure examples, excluding interest-rate quotes"
                  columns={["Structure", "Example", "First-year principal", "Pattern"]}
                  rows={page.repaymentStructureExamples.map((row) => ({
                    Structure: row.structure,
                    Example: row.example,
                    "First-year principal": row.firstYearPrincipal,
                    Pattern: row.pattern,
                  }))}
                />
              </div>
              <div className="mt-6">
                <BulletPanel title="Questions to ask about structure" items={page.structureQuestions} />
              </div>
            </section>

            <section id="temporary-contracts" className={sectionClass}>
              <SectionIntro eyebrow="Contracts" title="Can You Get a Mortgage With a Temporary Contract?" />
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <BulletPanel title="What lenders may look for" items={page.temporaryContractPoints} />
                <BulletPanel title="Documents to prepare" items={page.temporaryContractDocuments} />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="Temporary-contract scenarios"
                  columns={["Contract type", "Likely issue", "Practical move"]}
                  rows={page.temporaryContractScenarios.map((row) => ({
                    "Contract type": row.contractType,
                    "Likely issue": row.likelyIssue,
                    "Practical move": row.practicalMove,
                  }))}
                />
              </div>
            </section>

            <section id="costs" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Buyer costs" title="Costs Beyond the Mortgage">
                    <p>Many expats underestimate total upfront costs. The mortgage is not the only cash requirement: advice, valuation, notary, inspection, transfer tax and application-related costs can all matter.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {page.costItems.map((card, index) => (
                      <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.visuals.costs} />
              </div>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <ExampleTable
                  title="Buyer-cost examples"
                  columns={["Purchase price", "Transfer tax", "Other costs", "Total planning range"]}
                  rows={page.buyerCostExamples.map((row) => ({
                    "Purchase price": row.purchasePrice,
                    "Transfer tax": row.transferTax,
                    "Other costs": row.otherCosts,
                    "Total planning range": row.totalPlanningRange,
                  }))}
                />
                <ExampleTable
                  title="Valuation gaps when offers exceed appraisal"
                  columns={["Asking price", "Offer", "Valuation", "Gap from savings"]}
                  rows={page.appraisalGapExamples.map((row) => ({
                    "Asking price": row.askingPrice,
                    Offer: row.offer,
                    Valuation: row.valuation,
                    "Gap from savings": row.gapFromSavings,
                  }))}
                />
              </div>
            </section>

            <section id="tax" className={sectionClass}>
              <SectionIntro eyebrow="Tax context" title="Mortgage Interest Deduction">
                <p>The Dutch tax system may allow mortgage-related deductions in certain owner-occupied situations. Rules and eligibility can change, and personal situations differ.</p>
                <p>Use this guide as orientation only, then verify with Belastingdienst and a qualified tax or mortgage professional.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {page.taxLinks.map((link, index) => (
                  <LinkCard key={link.href} item={link} iconIndex={index} />
                ))}
              </div>
              <div className="mt-6">
                <BulletPanel title="Verify before relying on deductions" items={page.taxVerificationTips} />
              </div>
            </section>

            <section id="process" className={sectionClass}>
              <SectionIntro eyebrow="Step by step" title="The Dutch Mortgage Process" />
              <div className="mt-6">
                <ProcessSteps />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="Illustrative mortgage-process timing"
                  columns={["Phase", "Typical timing", "What can delay it"]}
                  rows={page.timelineExamples.map((row) => ({
                    Phase: row.phase,
                    "Typical timing": row.typicalTiming,
                    "What can delay it": row.whatCanDelayIt,
                  }))}
                />
              </div>
              <div className="mt-6">
                <BulletPanel title="Process guardrails" items={page.processPlanningTips} />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="Mortgage-timeline risks to manage"
                  columns={["Risk", "Effect", "Mitigation"]}
                  rows={page.mortgageTimelineRisks.map((row) => ({
                    Risk: row.risk,
                    Effect: row.effect,
                    Mitigation: row.mitigation,
                  }))}
                />
              </div>
            </section>

            <section id="mistakes" className={sectionClass}>
              <SectionIntro eyebrow="Expat risk points" title="Common Expat Mortgage Mistakes" />
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.mistakeCards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <div className="mt-6">
                <BulletPanel title="Practical guardrails" items={page.mistakeGuardrails} />
              </div>
            </section>

            <section id="cities" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="City planning" title="Buying Property in Different Dutch Cities">
                  <p>Mortgage capacity is national, but buying pressure is local. Affordability, competition, expat demand and commute patterns differ sharply between cities.</p>
                </SectionIntro>
                <VisualFigure visual={page.visuals.buyRentCities} />
              </div>
              <div className="mt-6">
                <CityCards />
              </div>
              <div className="mt-6">
                <ExampleTable
                  title="City mortgage-planning examples"
                  columns={["City type", "Mortgage impact", "Planning question"]}
                  rows={page.cityMortgageExamples.map((row) => ({
                    "City type": row.cityType,
                    "Mortgage impact": row.mortgageImpact,
                    "Planning question": row.planningQuestion,
                  }))}
                />
              </div>
            </section>

            <section id="buy-or-rent" className={sectionClass}>
              <SectionIntro eyebrow="Decision frame" title="Should Expats Buy or Rent?" />
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <BulletPanel title="Buying may suit" items={page.buyReasons} />
                <BulletPanel title="Renting may suit" items={page.rentReasons} />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <LinkCard item={{ label: "Buying a House", href: "/netherlands/housing/buying-a-house-netherlands/", status: "live", description: "Read the full Dutch purchase-process guide." }} iconIndex={0} />
                <LinkCard item={{ label: "Renting in the Netherlands", href: "/netherlands/housing/renting-in-the-netherlands/", status: "comingSoon", description: "Useful for short-term or uncertain relocation plans." }} iconIndex={1} />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <SectionIntro eyebrow="Common questions" title="Questions Expats Often Ask About Mortgages" />
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.expatQuestions.map((item, index) => (
                  <FeatureCard key={item.q} title={item.q} body={item.a} iconIndex={index} />
                ))}
              </div>
              <div className="mt-6">
                <BulletPanel title="How to use these questions" items={page.questionPromptTips} />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro eyebrow="Internal planning hub" title="Related Housing & Tax Guides" />
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {page.relatedGuides.map((link, index) => (
                  <LinkCard key={link.href} item={link} iconIndex={index} />
                ))}
              </div>
              <div className="mt-6">
                <BulletPanel title="Recommended reading order" items={page.relatedGuideUseTips} />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <SectionIntro eyebrow="Professional help" title="Mortgage Providers, Banks and Services You Can Contact">
                <p>Use this section to move from research to contact: compare banks, speak with licensed mortgage advisers and verify the exact eligibility, fees and documents for your situation.</p>
              </SectionIntro>
              <div className="mt-6">
                <MoveGuideAffiliateSupportBlock
                  placementId={page.affiliatePlacementId}
                  categoryLinks={[
                    { href: "/netherlands/services/mortgage-advisors/", label: "Mortgage advisors" },
                    { href: "/netherlands/services/banks/", label: "Banks" },
                    { href: "/netherlands/services/real-estate-agents/", label: "Real estate agents" },
                    { href: "/netherlands/services/tax-advisors/", label: "Tax advisors" },
                    { href: "/netherlands/services/", label: "Browse all services" },
                  ]}
                  browseLabel="Also browse service categories: "
                />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {page.services.map((link, index) => (
                  <LinkCard key={link.href} item={link} iconIndex={index} />
                ))}
              </div>
              <div className="mt-6">
                <BulletPanel title="Choosing professional help" items={page.serviceSelectionTips} />
              </div>
              <div className="mt-6">
                <BulletPanel title="Before you contact a bank or provider" items={page.providerContactChecklist} />
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions" />
              <div className="mt-6">
                <FaqSection />
              </div>
              <div className="mt-6">
                <BulletPanel title="Use the FAQ carefully" items={page.faqUseTips} />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <SectionIntro eyebrow="Official sources" title="Official Sources">
                <p>{page.sourcesDisclaimer}</p>
              </SectionIntro>
              <div className="mt-6">
                <SourcesSection />
              </div>
              <div className="mt-6">
                <BulletPanel title="Where to verify what" items={page.sourceVerificationTips} />
              </div>
            </section>

            <section className={cn("relative overflow-hidden rounded-3xl bg-slate-950 p-6 shadow-expatos-xl sm:p-8")}>
              <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
              <SectionIntro eyebrow="Explore next" title="Continue Your Housing Plan" tone="onDark">
                <p>Move from mortgage concepts into buying, salary, city and relocation planning.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {page.exploreNextCards.map((link, index) => (
                  <LinkCard key={link.href} item={link} iconIndex={index} tone="onDark" />
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}

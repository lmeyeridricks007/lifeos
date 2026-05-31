import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  FileText,
  Globe2,
  Home,
  Landmark,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
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
import { expatTaxesNetherlandsPage as meta, type ExpatTaxGuideLink } from "./expatTaxesNetherlandsPageModel";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8";
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
const mutedCardClass = cn(
  "relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);

const guideIcons = [Globe2, ReceiptText, PiggyBank, BadgePercent, Calculator, FileText, BriefcaseBusiness, ShieldCheck] as const;
const scenarioIcons = [Globe2, BadgePercent, BriefcaseBusiness, ReceiptText, Calculator, PiggyBank, Home, ArrowRight] as const;

function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p> : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? <div className={cn("mt-3 space-y-3 text-base leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{children}</div> : null}
    </div>
  );
}

function GuideLinkCard({ item, iconIndex = 0, tone = "default" }: { item: ExpatTaxGuideLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = guideIcons[iconIndex % guideIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const shell = onDark
    ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10"
    : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5");
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <div className="flex gap-3">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1", onDark ? "bg-white/10 text-cyan-100 ring-white/15" : isLive ? "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10" : "bg-slate-100 text-slate-500 ring-slate-200")}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span>
          <span className={cn("text-sm font-bold", onDark ? "text-white" : "text-foreground")}>{item.label}</span>
          {item.status === "comingSoon" ? (
            <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300 ring-1 ring-white/10" : "bg-slate-100 text-slate-500")}>Coming soon</span>
          ) : null}
          {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
        </span>
      </div>
      <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-100" : isLive ? "text-link group-hover:text-link-hover" : "text-slate-500")}>
        {isLive ? "Open guide" : "Planned guide"} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </>
  );
  if (!isLive) return <article className={cn(shell, "opacity-90")}>{body}</article>;
  return (
    <Link href={item.href} className={cn(shell, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
      {body}
    </Link>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <Image src={meta.hero.image.src} alt={meta.hero.image.alt} width={1600} height={900} priority sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" aria-hidden />
    </figure>
  );
}

function InfographicFigure({ graphic }: { graphic: (typeof meta.infographics)[keyof typeof meta.infographics] }) {
  return (
    <figure className={cn("overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <Image src={graphic.src} alt={graphic.alt} width={1600} height={1000} sizes="(min-width: 1024px) 980px, 100vw" className="h-auto w-full object-cover" />
      <figcaption className="border-t border-slate-100 bg-slate-50/80 px-5 py-4 text-sm leading-relaxed text-foreground-muted">{graphic.caption}</figcaption>
    </figure>
  );
}

function ProcessPanel({ eyebrow, title, rows, note }: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string }) {
  return (
    <aside className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5 sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">{title}</h3>
      <div className="mt-5 grid gap-3">
        {rows.map(({ label, body, Icon }) => (
          <div key={label} className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">{label}</span>
              <span className="mt-1 block text-sm leading-relaxed text-foreground-muted">{body}</span>
            </span>
          </div>
        ))}
      </div>
      {note ? <p className="mt-4 rounded-2xl bg-amber-50/80 p-4 text-sm leading-relaxed text-amber-950 ring-1 ring-amber-100">{note}</p> : null}
    </aside>
  );
}

function GuideUsePanel() {
  const steps = [
    { label: "Start with status", body: "Residency and move timing shape the rest of the questions.", Icon: Globe2 },
    { label: "Match work setup", body: "Employee, foreign employer, freelancer and company-owner paths differ.", Icon: BriefcaseBusiness },
    { label: "Flag complexity early", body: "Foreign assets, family changes and leaving the Netherlands deserve extra care.", Icon: AlertTriangle },
  ];

  return (
    <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Guide flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Use this page as a tax triage map</h3>
        <div className="mt-5 grid gap-3">
          {steps.map(({ label, body, Icon }, index) => (
            <div key={label} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-100 ring-1 ring-white/15">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">{index + 1}. {label}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-300">{body}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function BoxSystemMiniVisual() {
  const boxes = [
    { label: "Box 1", body: "Work, home and main income", Icon: BriefcaseBusiness },
    { label: "Box 2", body: "Substantial shareholding", Icon: Landmark },
    { label: "Box 3", body: "Savings and investments", Icon: PiggyBank },
  ];

  return (
    <aside className={cn(mutedCardClass, "p-5 sm:p-6")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Mental model</p>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">Three boxes, different questions</h3>
      <div className="mt-5 grid gap-3">
        {boxes.map(({ label, body, Icon }) => (
          <div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-gradient-to-r from-white to-slate-50 p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-bold text-foreground">{label}</span>
              <span className="mt-1 block text-sm text-foreground-muted">{body}</span>
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-2xl bg-copilot-bg-soft/80 p-4 text-sm leading-relaxed text-foreground-muted ring-1 ring-copilot-primary/10">
        The boxes are categories, not personal calculations. This page avoids unsupported rates and conclusions.
      </p>
    </aside>
  );
}

function ScenarioCard({ scenario, index }: { scenario: string; index: number }) {
  const Icon = scenarioIcons[index % scenarioIcons.length];
  return (
    <article className={cn(mutedCardClass, "p-4")}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span>
          <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Check this if</span>
          <span className="mt-1 block text-sm font-semibold leading-relaxed text-foreground">{scenario}</span>
        </span>
      </div>
    </article>
  );
}

function SourceUsePanel() {
  return (
    <ProcessPanel
      eyebrow="Source habit"
      title="Use official pages for final checks"
      rows={[
        { label: "Confirm current rules", body: "Tax rules and forms can change by tax year.", Icon: ShieldCheck },
        { label: "Separate overview from advice", body: "Guides explain concepts; official sources confirm procedures.", Icon: FileText },
        { label: "Prepare your facts", body: "Residency, work setup and foreign assets affect what to ask next.", Icon: Globe2 },
      ]}
    />
  );
}

export function ExpatTaxesNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Taxes", item: new URL("/netherlands/taxes/", baseUrl).toString() },
    { name: "Expat Taxes", item: new URL(meta.path, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "p-0")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
                <div>
                  <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
                    <Link href="/" className="hover:text-foreground">Home</Link><span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link><span aria-hidden>/</span>
                    <Link href="/netherlands/taxes/" className="hover:text-foreground">Taxes</Link><span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Expat taxes</span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{meta.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{meta.hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{meta.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{meta.hero.chips.map((chip) => <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>{chip}</span>)}</div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href={meta.hero.primaryCta.href} className={primaryCtaClass}>{meta.hero.primaryCta.label}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
                    <Link href={meta.hero.secondaryCta.href} className={secondaryCtaClass}>{meta.hero.secondaryCta.label}</Link>
                  </div>
                </div>
                <HeroImage />
              </div>
            </div>
          </section>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white/80 p-3 shadow-sm ring-1 ring-slate-900/[0.03]">
            <nav aria-label="Expat tax guide sections" className="flex min-w-max gap-2">
              {meta.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)]">
                <SectionIntro title="What Expats Need to Know About Dutch Taxes">
                  <p>Dutch taxes can feel confusing for newcomers because immigration, payroll, housing, family and foreign-income questions can overlap.</p>
                  <p>Expats often deal with payroll tax, tax residency, tax returns, the 30% ruling, foreign assets, investments, or income from abroad. The goal is to understand the main concepts before making decisions.</p>
                  <p>This guide is general orientation, not personal tax advice.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Start here"
                  title="Your expat tax map"
                  rows={[
                    { label: "Where are you resident?", body: "Residency drives which questions become relevant.", Icon: Globe2 },
                    { label: "How are you paid?", body: "Payroll, freelance income or foreign employer structures differ.", Icon: ReceiptText },
                    { label: "What changed this year?", body: "Moving, family, assets or 30% ruling changes may affect filing.", Icon: AlertTriangle },
                  ]}
                />
              </div>
            </section>

            <section id="at-a-glance" className={sectionClass}>
              <SectionIntro title="Expat Taxes at a Glance" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {meta.snapshotCards.map((card, index) => {
                  const Icon = guideIcons[index % guideIcons.length];
                  return (
                  <article key={card.title} className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5", movingNlCardMicroLiftClass)}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-brand-strong">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
                      </span>
                    </div>
                  </article>
                  );
                })}
              </div>
            </section>

            <section id="expat-tax-topics" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="Core Expat Tax Topics">
                  <p>Use these topic cards as the content cluster map. Live guides open directly; planned guides are intentionally marked so the page never sends users to unfinished URLs.</p>
                </SectionIntro>
                <GuideUsePanel />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{meta.topicLinks.map((item, index) => <GuideLinkCard key={item.href} item={item} iconIndex={index} />)}</div>
            </section>

            <section id="tax-residency" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.75fr)]">
                <SectionIntro title="Are You a Dutch Tax Resident?">
                  <p>Tax residency determines what income and assets may be taxable. It depends on facts and circumstances, not just nationality or visa type.</p>
                  <p>Living, working, family ties, home, registration and economic interests can matter. Expats moving mid-year should be especially careful.</p>
                </SectionIntro>
                <GuideLinkCard item={meta.topicLinks[0]!} iconIndex={0} />
              </div>
              <div className="mt-7">
                <InfographicFigure graphic={meta.infographics.residencyScope} />
              </div>
            </section>

            <section id="income-tax" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <div>
                  <SectionIntro title="Dutch Income Tax for Expats">
                    <p>Employees usually see tax withheld through payroll. Annual tax returns may still be needed, especially when your situation changed during the year.</p>
                    <p>Freelancers and entrepreneurs usually need more active tax planning because invoicing, records, VAT and income tax responsibilities sit closer to the individual.</p>
                  </SectionIntro>
                  <div className="mt-6"><GuideLinkCard item={meta.topicLinks[1]!} iconIndex={1} /></div>
                </div>
                <ProcessPanel
                  eyebrow="Income lens"
                  title="Start with how money reaches you"
                  rows={[
                    { label: "Dutch employer", body: "Payroll withholding usually happens before salary lands in your account.", Icon: BriefcaseBusiness },
                    { label: "Freelance income", body: "Invoices, records and periodic obligations become part of your routine.", Icon: ReceiptText },
                    { label: "Foreign income", body: "Residency, source and treaty questions may need qualified review.", Icon: Globe2 },
                  ]}
                />
              </div>
            </section>

            <section id="box-system" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <div>
                  <SectionIntro title="Box 1, Box 2 and Box 3 Explained">
                    <p>Box 1 generally covers work, home and main income. Box 2 relates to substantial shareholding. Box 3 relates to savings and investments.</p>
                    <p>Expats with foreign savings, investments or property should understand Box 3 carefully and avoid guessing from general summaries.</p>
                  </SectionIntro>
                  <div className="mt-6"><GuideLinkCard item={meta.topicLinks[2]!} iconIndex={2} /></div>
                </div>
                <BoxSystemMiniVisual />
              </div>
            </section>

            <section id="thirty-ruling" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.75fr)]">
                <SectionIntro title="The 30% Ruling for Expats">
                  <p>The 30% ruling is a tax facility for some qualifying international employees. It is usually arranged through the employer and has eligibility requirements that can change over time.</p>
                  <p>Expats should verify eligibility before assuming they qualify.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="30% ruling"
                  title="Do not assume it applies"
                  rows={[
                    { label: "Employer application", body: "The setup usually depends on employer and payroll processes.", Icon: BriefcaseBusiness },
                    { label: "Eligibility facts", body: "Salary, recruitment and timing can matter.", Icon: BadgePercent },
                    { label: "Rule changes", body: "Confirm current rules before making salary decisions.", Icon: ShieldCheck },
                  ]}
                  note="This guide does not decide eligibility."
                />
              </div>
            </section>

            <section id="payroll-tax" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <div>
                  <SectionIntro title="Payroll Tax and Salary Deductions">
                    <p>Employers withhold wage tax and social contributions. Net salary may differ significantly from gross salary, and payroll withholding is not always the same as your final annual tax position.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <GuideLinkCard item={meta.topicLinks[4]!} iconIndex={4} />
                    <GuideLinkCard item={{ label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/", status: "live", description: "Banking setup for salary, refunds and everyday Dutch payments." }} iconIndex={5} />
                  </div>
                </div>
                <ProcessPanel
                  eyebrow="Payslip path"
                  title="Gross salary is only the starting point"
                  rows={[
                    { label: "Gross salary", body: "Your contract or offer usually starts from gross pay.", Icon: FileText },
                    { label: "Withholding", body: "Payroll may withhold wage tax and social contributions.", Icon: Calculator },
                    { label: "Net pay and filing", body: "Your net salary and annual return can still require attention.", Icon: ReceiptText },
                  ]}
                />
              </div>
            </section>

            <section id="tax-return" className={sectionClass}>
              <SectionIntro title="Do Expats Need to File a Dutch Tax Return?">
                <p>Common reasons include receiving a tax letter, moving during the year, foreign income or assets, mortgage deductions, freelance income, partner or family tax implications, or wanting to claim deductions or refunds.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(320px,0.55fr)] lg:items-start">
                <InfographicFigure graphic={meta.infographics.taxReturnTriggers} />
                <GuideLinkCard item={meta.topicLinks[5]!} iconIndex={5} />
              </div>
            </section>

            <section id="foreign-income" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.75fr)]">
                <SectionIntro title="Foreign Income, Savings and Investments">
                  <p>Expats may have income, savings, investments, property or business interests outside the Netherlands. Tax treatment depends on residency, source, treaties and asset type.</p>
                  <p>Professional advice is sensible for complex cross-border cases.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Cross-border flags"
                  title="Prepare before you ask for advice"
                  rows={[
                    { label: "Income source", body: "Know where income was earned and paid.", Icon: Globe2 },
                    { label: "Assets abroad", body: "Keep records for savings, investments and property.", Icon: PiggyBank },
                    { label: "Treaty questions", body: "Do not draw country-specific conclusions from a general guide.", Icon: AlertTriangle },
                  ]}
                />
              </div>
            </section>

            <section id="freelancers" className={sectionClass}>
              <SectionIntro title="Expat Freelancers, ZZP and Business Taxes">
                <p>Freelancers may deal with VAT, invoicing, bookkeeping and income tax. Business owners may need different guidance from employees.</p>
              </SectionIntro>
              <div className="mt-6">
                <InfographicFigure graphic={meta.infographics.employeeFreelancerFlow} />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {meta.topicLinks.slice(7, 8).map((item, index) => <GuideLinkCard key={item.href} item={item} iconIndex={index + 6} />)}
                <GuideLinkCard item={{ label: "VAT (BTW)", href: "/netherlands/taxes/vat-btw-netherlands/", status: "comingSoon", description: "Future guide for VAT obligations." }} iconIndex={6} />
                <GuideLinkCard item={{ label: "Business taxes", href: "/netherlands/taxes/business-taxes-netherlands/", status: "comingSoon", description: "Future guide for business tax topics." }} iconIndex={7} />
              </div>
            </section>

            <section id="scenarios" className={sectionClass}>
              <SectionIntro title="Common Expat Tax Scenarios">
                <p>These cards turn the guide into a checklist for common moments when expats should slow down and verify the tax implications.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {meta.scenarios.map((scenario, index) => <ScenarioCard key={scenario} scenario={scenario} index={index} />)}
              </div>
            </section>

            <section id="tax-services" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="Tax Services That May Help Expats">
                  <p>Use service categories to understand what kind of help exists. If a category is not live yet, it appears as planned rather than a broken link.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Service fit"
                  title="Match help to the problem"
                  rows={[
                    { label: "One-off clarity", body: "Tax advisors can help frame a specific return or residency question.", Icon: CheckCircle2 },
                    { label: "Ongoing admin", body: "Bookkeeping and accounting support is more relevant for freelance work.", Icon: Calculator },
                    { label: "Employer setup", body: "Payroll providers matter when the work structure is more complex.", Icon: BriefcaseBusiness },
                  ]}
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{meta.serviceLinks.map((item, index) => <GuideLinkCard key={item.href} item={item} iconIndex={index} />)}</div>
            </section>

            <section id="official-sources" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <div>
                  <SectionIntro title="Official Sources">
                    <p>Use these references to verify current Dutch government and tax authority information before acting on a specific filing, residency or business question.</p>
                  </SectionIntro>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {meta.officialSources.map((source) => (
                      <li key={source.href}>
                        <a href={source.href} target="_blank" rel="noopener noreferrer" className={cn("group flex items-center justify-between gap-3 rounded-2xl border border-border bg-white p-5 text-sm font-semibold text-foreground hover:border-brand/35 hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>
                          {source.label}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <SourceUsePanel />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="Related Guides">
                  <p>Use these guides to connect taxes with the practical setup topics that often sit around them: banking, healthcare, moving steps and services.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Next route"
                  title="Connect taxes to setup"
                  rows={[
                    { label: "Money setup", body: "Banking and tax refunds often depend on practical account access.", Icon: PiggyBank },
                    { label: "Arrival setup", body: "Moving and registration context can affect the questions you ask.", Icon: Home },
                    { label: "Service comparison", body: "Provider categories help when a situation becomes too specific for a guide.", Icon: CheckCircle2 },
                  ]}
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{meta.relatedGuides.map((item, index) => <GuideLinkCard key={item.href} item={item} iconIndex={index} />)}</div>
            </section>

            <section id="explore-next" className="scroll-mt-28 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8">
              <SectionIntro title="Explore Next" tone="onDark">
                <p>Move from expat tax concepts into the wider tax cluster and service categories.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{meta.exploreNextCards.map((item, index) => <GuideLinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />)}</div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}

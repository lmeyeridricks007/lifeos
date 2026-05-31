import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  CalendarDays,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  Landmark,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  WalletCards,
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
import {
  grossVsNetSalaryPage as page,
  type GrossVsNetSalaryLink,
} from "./grossVsNetSalaryPageModel";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5", movingNlCardMicroLiftClass);
const linkIcons = [Calculator, ReceiptText, BadgePercent, FileText, BriefcaseBusiness, ShieldCheck, PiggyBank, Globe2] as const;
const questionIcons = [Calculator, ReceiptText, BadgePercent, ClipboardCheck, PiggyBank, ShieldCheck, Globe2, BriefcaseBusiness] as const;

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

function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
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

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <Image
        src={page.hero.image.src}
        alt={page.hero.image.alt}
        width={1600}
        height={900}
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" aria-hidden />
    </figure>
  );
}

function VisualFigure({ visual, className }: { visual: (typeof page.infographics)[keyof typeof page.infographics]; className?: string }) {
  return (
    <figure className={cn("overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-expatos-xl ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass, className)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-contain"
        />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">
        {visual.caption}
      </figcaption>
    </figure>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: GrossVsNetSalaryLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = linkIcons[iconIndex % linkIcons.length];
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
        <span className="min-w-0">
          <span className={cn("text-sm font-bold", onDark ? "text-white" : "text-foreground")}>{item.label}</span>
          {!isLive ? <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300 ring-1 ring-white/10" : "bg-slate-100 text-slate-500")}>Coming soon</span> : null}
          {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
        </span>
      </div>
      <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-100" : isLive ? "text-link group-hover:text-link-hover" : "text-slate-500")}>
        {isLive ? "Open" : "Planned"} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
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

function GrossToNetFlow() {
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-3">
      {page.conceptCards.map((card, index) => {
        const Icon = [BriefcaseBusiness, ReceiptText, PiggyBank][index] ?? Calculator;
        return (
          <article key={card.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <Icon className="h-6 w-6 text-brand-strong" aria-hidden />
            <h3 className="mt-3 text-base font-bold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function SimpleExampleVisual() {
  return (
    <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Simple example</p>
        <h3 className="mt-2 text-2xl font-black tracking-tight">{page.simpleExample.grossMonthly}</h3>
        <p className="mt-1 text-sm text-slate-300">gross monthly salary</p>
        <div className="mt-5 grid gap-3">
          {page.simpleExample.deductions.map((deduction) => (
            <div key={deduction} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-3 ring-1 ring-white/10">
              <span className="text-sm font-semibold text-white">{deduction}</span>
              <span className="text-xs text-slate-300">varies</span>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-100">Estimated net salary</p>
          <p className="mt-1 text-2xl font-black">{page.simpleExample.estimatedNetRange}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">Illustrative range only. Exact results depend on payroll and personal details.</p>
        </div>
      </div>
    </aside>
  );
}

function DefinitionPanel({ title, items, Icon }: { title: string; items: readonly string[]; Icon: LucideIcon }) {
  return (
    <aside className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5 sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <Icon className="h-7 w-7 text-brand-strong" aria-hidden />
      <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function DefinitionCompareBand() {
  const items = [
    { label: "Gross", body: "The offer number before deductions.", Icon: BriefcaseBusiness },
    { label: "Payroll", body: "The employer-run step where taxes and contributions are processed.", Icon: ReceiptText },
    { label: "Net", body: "The amount you can plan your monthly life around.", Icon: WalletCards },
  ];

  return (
    <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Salary translation</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Convert the offer into a budget number</h3>
        <div className="mt-5 grid gap-3">
          {items.map(({ label, body, Icon }, index) => (
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

function DeductionsVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Deduction map"
      title="Group payslip lines before comparing numbers"
      rows={[
        { label: "Tax withholding", body: "Wage tax and related payroll withholding reduce gross pay before transfer.", Icon: Landmark },
        { label: "Insurance and pension", body: "Social contributions and pension can sit alongside payroll tax items.", Icon: ShieldCheck },
        { label: "Employer setup", body: "Benefits and employer-specific arrangements can change how lines appear.", Icon: BriefcaseBusiness },
      ]}
      note="Do not compare two offers from gross salary alone. Ask what deductions, pension and allowances are included."
    />
  );
}

function QuestionsVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Question triage"
      title="What to clarify first"
      rows={[
        { label: "Offer wording", body: "Find out if salary is annual or monthly and whether holiday allowance is included.", Icon: FileText },
        { label: "Payroll terms", body: "Use payslip terms like bruto loon and loonheffing to understand the deduction path.", Icon: ReceiptText },
        { label: "Scenario assumptions", body: "Keep pension, 30% ruling and calculator assumptions separate.", Icon: Calculator },
      ]}
    />
  );
}

function RelatedGuidesVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Next-step map"
      title="Turn salary clarity into action"
      rows={[
        { label: "Calculate", body: "Use the net salary page once you know the offer structure.", Icon: Calculator },
        { label: "Check taxes", body: "Use expat tax and 30% ruling guides for personal context.", Icon: BadgePercent },
        { label: "Set up payments", body: "Use banking and moving guides before payroll starts.", Icon: WalletCards },
      ]}
    />
  );
}

function MockPayslipVisual() {
  return (
    <aside className={cn("overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-expatos-lg ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Simplified payslip visual</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">Dutch salary terms to recognize</h3>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200/90">
          {page.payslipItems.map((item, index) => (
            <div key={item.label} className={cn("grid gap-2 px-4 py-3 sm:grid-cols-[180px_1fr]", index % 2 === 0 ? "bg-slate-50/80" : "bg-white")}>
              <span className="text-sm font-bold text-foreground">{item.label}</span>
              <span className="text-sm leading-relaxed text-foreground-muted">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function SourceLink({ source }: { source: (typeof page.officialSources)[number] }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "group block p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}
    >
      <span className="text-sm font-bold text-foreground group-hover:text-link">{source.label}</span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">Open source <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
    </a>
  );
}

export function GrossVsNetSalaryView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Taxes", item: new URL("/netherlands/taxes/", baseUrl).toString() },
    { name: "Gross vs Net Salary", item: new URL(page.path, baseUrl).toString() },
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
                    <span className="text-foreground" aria-current="page">Gross vs net salary</span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{page.hero.chips.map((chip) => <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>{chip}</span>)}</div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>{page.hero.primaryCta.label}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
                    <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>{page.hero.secondaryCta.label}</Link>
                  </div>
                </div>
                <HeroImage />
              </div>
            </div>
          </section>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white/80 p-3 shadow-sm ring-1 ring-slate-900/[0.03]">
            <nav aria-label="Gross vs net salary guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Why Gross Salary and Net Salary Are Different">
                    <p>In the Netherlands, employers usually discuss salary as a gross annual or monthly amount. That is the number you see in contracts, job ads and recruiter conversations.</p>
                    <p>Your actual take-home pay is lower because taxes, social contributions, pension deductions and other payroll items are processed before salary reaches your bank account.</p>
                    <p>For expats, this can be confusing when comparing Dutch offers with salaries in another country. Gross salary means before deductions. Net salary means after deductions.</p>
                  </SectionIntro>
                  <GrossToNetFlow />
                  <VisualFigure visual={page.infographics.grossToNetFlow} className="mt-6" />
                </div>
                <ProcessPanel
                  eyebrow="Beginner mental model"
                  title="Read salary in three steps"
                  rows={[
                    { label: "Start with contract salary", body: "This is usually the gross figure, not spendable income.", Icon: BriefcaseBusiness },
                    { label: "Account for payroll", body: "Deductions happen before the bank transfer.", Icon: ReceiptText },
                    { label: "Plan with net pay", body: "Use net salary for rent, savings and monthly cost planning.", Icon: PiggyBank },
                  ]}
                />
              </div>
            </section>

            <section id="simple-example" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <SectionIntro title="Gross Salary vs Net Salary - Simple Example">
                  <p>A gross monthly salary of EUR 5,000 does not mean EUR 5,000 reaches your bank account. Payroll tax, pension and social contributions can reduce the amount you receive.</p>
                  <p>An illustrative net result might be around EUR 3,200-EUR 3,800, depending on your tax bracket, pension setup, 30% ruling, tax credits, benefits and personal situation.</p>
                  <p>Do not treat this as a guaranteed calculation. It is a simple visual example to explain the concept.</p>
                </SectionIntro>
                <SimpleExampleVisual />
              </div>
            </section>

            <section id="gross-salary" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-start">
                <div>
                  <SectionIntro title="What Is Gross Salary?">
                    <p>Gross salary is your salary before deductions. In Dutch job offers, it is often quoted annually, although monthly figures are also common.</p>
                    <p>Gross compensation may include base salary, holiday allowance and sometimes bonus or benefits. Always check whether holiday allowance is included or paid separately.</p>
                    <p>Gross salary is not what reaches your bank account.</p>
                  </SectionIntro>
                  <div className="mt-6">
                    <DefinitionPanel title="Gross salary usually means" items={page.grossSalaryItems} Icon={BriefcaseBusiness} />
                  </div>
                </div>
                <DefinitionCompareBand />
              </div>
            </section>

            <section id="net-salary" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <SectionIntro title="What Is Net Salary?">
                  <p>Net salary is the amount left after payroll deductions. It is the salary that appears in your bank account and the number you should use for monthly budget planning.</p>
                  <p>Payroll tax, pension contributions, national insurance contributions and employee contributions can all affect the final amount.</p>
                </SectionIntro>
                <DefinitionPanel title="Net salary usually means" items={page.netSalaryItems} Icon={WalletCards} />
              </div>
            </section>

            <section id="deductions" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="What Is Taken Out of Your Salary?">
                    <p>Dutch payroll deductions may include wage tax, national insurance contributions, employee insurance contributions, pension contributions and other employer-specific items.</p>
                    <p>Belastingdienst explains that payroll taxes can include wage tax, national insurance contributions, employee insurance contributions and health-insurance-related contributions.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {page.deductionCards.map((card) => (
                      <article key={card.title} className={mutedCardClass}>
                        <ReceiptText className="h-5 w-5 text-brand-strong" aria-hidden />
                        <h3 className="mt-3 text-base font-bold text-foreground">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <DeductionsVisualPanel />
              </div>
            </section>

            <section id="payslip" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="Understanding a Dutch Payslip">
                    <p>A Dutch payslip can include several terms that are unfamiliar to newcomers. You do not need payroll-software knowledge to understand the basics.</p>
                    <p>Start by identifying bruto loon, loonheffing, pensioen, vakantiegeld and netto loon. These five terms explain much of the gross-to-net journey.</p>
                  </SectionIntro>
                  <div className="mt-6">
                    <MockPayslipVisual />
                  </div>
                </div>
                <VisualFigure visual={page.infographics.payslipAnatomy} className="lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="thirty-ruling" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <SectionIntro title="How the 30% Ruling Can Affect Net Salary">
                  <p>Some expats may qualify for the Dutch expat scheme commonly called the 30% ruling. If eligible and applied correctly, part of compensation may be paid tax-free, which can increase take-home pay.</p>
                  <p>This page does not guarantee eligibility or exact savings. The rules depend on official conditions and employer involvement.</p>
                  <p><Link href="/netherlands/taxes/30-percent-ruling/" className="font-semibold text-link hover:text-link-hover">Read the 30% ruling guide</Link></p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Ruling context"
                  title="Use it as a scenario, not an assumption"
                  rows={[
                    { label: "Eligibility matters", body: "Not every international employee qualifies.", Icon: ShieldCheck },
                    { label: "Employer setup matters", body: "Payroll treatment depends on employer participation.", Icon: BriefcaseBusiness },
                    { label: "Compare both outcomes", body: "Look at gross-to-net pay with and without the ruling.", Icon: Calculator },
                  ]}
                />
              </div>
            </section>

            <section id="examples" className={sectionClass}>
              <SectionIntro title="Example Gross-to-Net Salary Comparisons">
                <p>These examples are illustrative, not exact calculations. Two people with identical gross salaries may receive different net salaries because of pension, tax credits, 30% ruling status and employer setup.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.salaryExamples.map((example) => (
                  <article key={example.grossSalary} className={mutedCardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Gross salary</p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-foreground">{example.grossSalary}</h3>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground">{example.estimatedNetRange}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{example.explanation}</p>
                  </article>
                ))}
              </div>
              <VisualFigure visual={page.infographics.salaryPackageFactors} className="mt-6" />
            </section>

            <section id="allowance" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <SectionIntro title="Holiday Allowance and Salary">
                  <p>Many Dutch employers pay vakantiegeld, or holiday allowance. It is often around 8% of base salary and may be paid annually or monthly depending on the employer.</p>
                  <p>This affects how your gross compensation is structured. When comparing offers, check whether holiday allowance is included in the quoted annual number or paid on top.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Offer wording"
                  title="Questions to ask"
                  rows={[
                    { label: "Included or separate?", body: "The same annual figure can mean different monthly cash flow.", Icon: ClipboardCheck },
                    { label: "Monthly or annual?", body: "Some employers pay allowance monthly, others once per year.", Icon: CalendarDays },
                    { label: "Base salary impact", body: "Holiday allowance is part of compensation, not the same as net salary.", Icon: PiggyBank },
                  ]}
                />
              </div>
            </section>

            <section id="pension" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <SectionIntro title="Pension Contributions and Take-Home Pay">
                  <p>Some employers deduct pension contributions directly from salary. This can reduce net monthly salary while improving long-term retirement savings.</p>
                  <p>Pension setups vary widely between employers, so two identical gross salaries can produce different net amounts.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Pension lens"
                  title="Why pension changes comparisons"
                  rows={[
                    { label: "Employee share", body: "Your part may be deducted from monthly pay.", Icon: PiggyBank },
                    { label: "Employer share", body: "Employer contributions can add package value without increasing net salary.", Icon: BriefcaseBusiness },
                    { label: "Scheme differences", body: "Different employers can use different pension setups.", Icon: FileText },
                  ]}
                />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Questions Expats Often Have About Dutch Salaries">
                    <p>Most salary confusion comes from mixing contract wording, payroll terms and personal assumptions. Use these questions as a checklist before comparing offers.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {page.expatQuestions.map((question, index) => {
                      const Icon = questionIcons[index % questionIcons.length];
                      return (
                        <article key={question} className={mutedCardClass}>
                          <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
                          <h3 className="mt-3 text-sm font-bold leading-relaxed text-foreground">{question}</h3>
                        </article>
                      );
                    })}
                  </div>
                </div>
                <QuestionsVisualPanel />
              </div>
            </section>

            <section id="calculator" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)] lg:items-start">
                <SectionIntro eyebrow="Calculator" title={page.calculatorToolCta.title}>
                  <p>{page.calculatorToolCta.description}</p>
                  <p>{page.calculatorToolCta.supportingText}</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Before calculating"
                  title="Prepare better inputs"
                  rows={page.calculatorToolCta.prepItems.map((item, index) => ({
                    ...item,
                    Icon: [FileText, ClipboardCheck, BadgePercent][index] ?? FileText,
                  }))}
                  note={page.calculatorToolCta.disclaimer}
                />
              </div>
              <div className="relative mt-7 overflow-hidden rounded-3xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-indigo-50/40 p-6 shadow-expatos-lg ring-1 ring-copilot-primary/[0.08] sm:p-8">
                <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">Use the dedicated salary calculator tool</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                      This guide explains gross and net salary concepts. For side-by-side offer comparison, open the standalone Dutch salary net calculator.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:min-w-[240px]">
                    <Link href={page.calculatorToolCta.primaryCta.href} className={cn(primaryCtaClass, "w-full sm:w-auto lg:w-full")}>
                      {page.calculatorToolCta.primaryCta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link href={page.calculatorToolCta.secondaryCta.href} className={cn(secondaryCtaClass, "w-full sm:w-auto lg:w-full")}>
                      {page.calculatorToolCta.secondaryCta.label}
                    </Link>
                  </div>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-foreground-muted sm:text-sm">{page.calculatorToolCta.disclaimer}</p>
              </div>
            </section>

            <section id="related-tax-topics" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Related Dutch Tax Guides">
                    <p>Use these pages to move from salary definitions into calculation, tax context and payroll topics.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.relatedTaxTopics.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
                  </div>
                </div>
                <ProcessPanel
                  eyebrow="Learning path"
                  title="Use the cluster in sequence"
                  rows={[
                    { label: "Understand terms", body: "Start here with gross, net and payslip basics.", Icon: FileText },
                    { label: "Estimate take-home pay", body: "Open the dedicated Dutch salary net calculator.", Icon: Calculator },
                    { label: "Check expat-specific topics", body: "Use the 30% ruling and expat tax guides for context.", Icon: BadgePercent },
                  ]}
                />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <SectionIntro title="Professional Services That May Help">
                  <p>Most gross-vs-net questions are simple concepts, but cross-border tax, payroll, 30% ruling and complex compensation packages may need professional review.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Provider fit"
                  title="Match help to the question"
                  rows={[
                    { label: "Tax advisors", body: "For tax position, filing and cross-border questions.", Icon: ShieldCheck },
                    { label: "Payroll specialists", body: "For employer payroll setup and payslip questions.", Icon: ReceiptText },
                    { label: "Relocation services", body: "For salary planning alongside move logistics.", Icon: Globe2 },
                  ]}
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {page.services.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)]">
                <div>
                  <SectionIntro title="Frequently Asked Questions" />
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {page.faq.map((item) => (
                      <article key={item.q} className={mutedCardClass}>
                        <h3 className="text-base font-bold text-foreground">{item.q}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <ProcessPanel
                  eyebrow="Rule of thumb"
                  title="Gross explains the offer, net explains your budget"
                  rows={[
                    { label: "Use gross for offers", body: "Recruiters and contracts usually speak in gross salary.", Icon: BriefcaseBusiness },
                    { label: "Use net for life planning", body: "Rent, bills and savings need take-home pay.", Icon: PiggyBank },
                    { label: "Use official sources", body: "Rates and payroll rules can change over time.", Icon: Landmark },
                  ]}
                />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)]">
                <div>
                  <SectionIntro title="Official Sources">
                    <p>Use official sources for final checks. Supporting expat-friendly sources are useful for orientation, but official pages should drive current tax-year decisions.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {page.officialSources.map((source) => <SourceLink key={source.href} source={source} />)}
                  </div>
                </div>
                <ProcessPanel
                  eyebrow="Source hierarchy"
                  title="What the sources support"
                  rows={[
                    { label: "Payroll taxes", body: "Belastingdienst explains the payroll tax categories.", Icon: ReceiptText },
                    { label: "Wage tax calculations", body: "Official pages explain wage tax and national insurance calculation context.", Icon: Calculator },
                    { label: "Plain-English context", body: "Supporting expat sources help explain the wider tax system.", Icon: FileText },
                  ]}
                />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Related Guides">
                    <p>Connect salary understanding to taxes, banking, relocation and the rest of your setup.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.relatedGuides.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
                  </div>
                </div>
                <RelatedGuidesVisualPanel />
              </div>
            </section>

            <section id="explore-next" className="scroll-mt-28 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8">
              <SectionIntro title="Explore Next" tone="onDark">
                <p>Move from salary definitions into calculation, tax planning and practical setup.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {page.exploreNextCards.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />)}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}

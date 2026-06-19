import Image from "next/image";
import Link from "next/link";
import { Children, type ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ExternalLink,
  FileText,
  Heart,
  Landmark,
  Lock,
  Shield,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  guidePremiumCardGridClass,
  guidePremiumIntroStackClass,
  guidePremiumSectionDetailStackClass,
  guidePremiumVisualAfterIntroClass,
} from "@/lib/ui/guide-premium-page-ui";
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
  CITIES_FUNNEL_INFO_CHIP,
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  citiesFunnelHeroFigureClassName,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import { GuidePremiumVisualFigure, type GuidePremiumVisual } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  BSN_REGISTRATION_PATH,
  EXPAT_TAXES_PATH,
  HEALTH_INSURANCE_PATH,
  MUNICIPALITY_SERVICES_PATH,
  REGISTERING_ADDRESS_PATH,
  TAXES_HUB_PATH,
  digiDNetherlandsPage as page,
  type ActivationChecklistItem,
  type OrganizationEntry,
  type PortalTask,
  type PracticalLifeLink,
  type ProfileScenario,
} from "./digiDNetherlandsPageModel";

const baseUrl = getSiteOrigin();
const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const cardClass = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);
const iconPool = [Shield, Lock, Smartphone, Building2, Landmark, FileText, Heart, Users, ShieldCheck] as const;
const snapshotIcons = [Shield, Lock, Smartphone, Building2] as const;
const visualAfterIntroClass = cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8");
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

function InfoTable({
  rows,
  columns,
}: {
  rows: Array<Record<string, string>>;
  columns: Array<{ key: string; label: string }>;
}) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col" className="px-4 py-3 font-bold">{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr key={idx}>
                {columns.map((column, cellIdx) => (
                  <td key={column.key} className={cn("px-4 py-4 text-foreground-muted", cellIdx === 0 && "font-semibold text-foreground")}>
                    {row[column.key]}
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

function ProfileScenarioTable({ title, rows }: { title: string; rows: readonly ProfileScenario[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Examples" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ profile: row.profile, situation: row.situation, whatToDo: row.whatToDo }))}
          columns={[
            { key: "profile", label: "Profile" },
            { key: "situation", label: "Situation" },
            { key: "whatToDo", label: "What to do" },
          ]}
        />
      </div>
    </div>
  );
}

function PortalTaskTable({ title, rows }: { title: string; rows: readonly PortalTask[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Portal tasks" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ task: row.task, portal: row.portal, timing: row.timing }))}
          columns={[
            { key: "task", label: "Task" },
            { key: "portal", label: "Portal" },
            { key: "timing", label: "Typical timing" },
          ]}
        />
      </div>
    </div>
  );
}

function PrerequisiteStatGrid({ items }: { items: readonly { label: string; value: string; note: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.label} className={cn(cardClass, "p-4 sm:p-5")}>
          <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{item.label}</p>
          <p className="mt-2 text-xl font-black tracking-tight text-foreground">{item.value}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.note}</p>
        </article>
      ))}
    </div>
  );
}

function ChecklistDetailGrid({ items }: { items: readonly ActivationChecklistItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.task} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <CheckCircle2 className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{item.timing}</p>
              <h3 className="mt-1 text-base font-bold text-foreground">{item.task}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.detail}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function PremiumGuideSection({
  id,
  intro,
  visual,
  children,
}: {
  id: string;
  intro: ReactNode;
  visual: GuidePremiumVisual;
  children: ReactNode;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className={guidePremiumIntroStackClass}>{intro}</div>
      <GuidePremiumVisualFigure visual={visual} className={visualAfterIntroClass} />
      <div className={guidePremiumSectionDetailStackClass}>{children}</div>
    </section>
  );
}

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
  const useColumnLayout = fullWidth && Children.count(children) > 1;
  return (
    <div className={cn(fullWidth ? "w-full max-w-none" : "max-w-3xl")}>
      {eyebrow ? (
        <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? (
        <div
          className={cn(
            "mt-3 space-y-3 text-base leading-relaxed",
            useColumnLayout && "max-w-none lg:columns-2 lg:gap-x-10 [&>p]:break-inside-avoid",
            onDark ? "text-slate-300" : "text-foreground-muted"
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function HeroSignalStrip() {
  return (
    <div className="relative mt-5 grid gap-3 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/82 p-3 shadow-card ring-1 ring-slate-900/[0.03] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      {page.snapshotSignals.map((signal, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <div key={signal.label} className="relative rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-copilot-bg-soft/70 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-foreground-muted">{signal.label}</span>
                <span className="mt-1 block text-sm font-bold leading-snug text-foreground">{signal.value}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-foreground-muted">{signal.note}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <div className={cn("absolute inset-x-0 top-0 z-10 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <Image
        src={page.hero.image.src}
        alt={page.hero.image.alt}
        width={1600}
        height={900}
        priority
        unoptimized
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-white/10" aria-hidden />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35" aria-hidden />
    </figure>
  );
}

function FeatureCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  const Icon = iconPool[iconIndex % iconPool.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
    </article>
  );
}

function ChecklistBlock({ title, items, columns = 1, className }: { title: string; items: readonly string[]; columns?: 1 | 2; className?: string }) {
  return (
    <div className={cn("w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass, className)}>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{title}</p>
      <ul className={cn("mt-4 gap-3", columns === 2 ? "grid md:grid-cols-2" : "space-y-3")}>
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SourceLink({ source }: { source: (typeof page.officialSources)[number] }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "group relative block overflow-hidden p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-link">
        <ShieldCheck className="h-4 w-4 text-brand-strong" aria-hidden />
        {source.label}
        <ExternalLink className="h-3.5 w-3.5 text-foreground-muted" aria-hidden />
      </span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">
        Open source <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </a>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: PracticalLifeLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = iconPool[iconIndex % iconPool.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1",
          onDark ? "bg-white/10 text-cyan-100 ring-white/15" : "bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong ring-copilot-primary/10"
        )}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className={cn("mt-4 block text-sm font-bold", onDark ? "text-white" : "text-foreground")}>
        {item.label}
        {!isLive ? (
          <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500")}>Coming soon</span>
        ) : null}
      </span>
      {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
      {isLive ? (
        <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover")}>
          Open <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      ) : null}
    </>
  );
  if (!isLive) {
    return <article className={cn(cardClass, onDark && "border-white/10 bg-white/10 text-white ring-white/10", "opacity-90")}>{body}</article>;
  }
  return (
    <Link
      href={item.href}
      className={cn(
        cardClass,
        onDark && "border-white/10 bg-white/10 ring-white/10",
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        transitionInteractive,
        activeBrightnessPress
      )}
    >
      {body}
    </Link>
  );
}

function OrientationFlowBand({ className }: { className?: string }) {
  const stepIcons = [Building2, Shield, Smartphone] as const;
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Orientation flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three moves before your first DigiD login</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {page.orientationFlowSteps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div key={step} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-100 ring-1 ring-white/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{index + 1}.</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-300">{step}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

function VisualTextDetails({ details }: { details: { title: string; items: readonly string[] } }) {
  return (
    <aside className="rounded-3xl border border-slate-200/90 bg-slate-50/85 p-5 ring-1 ring-slate-900/[0.03]">
      <h3 className="text-base font-black tracking-tight text-foreground">{details.title}</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {details.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function BulletPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function FeatureGrid({ items }: { items: Array<{ title: string; body: string }> }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => (
        <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={index} />
      ))}
    </div>
  );
}

function GuideCrossLink({
  href,
  title,
  description,
  linkLabel,
}: {
  href: string;
  title: string;
  description: string;
  linkLabel: string;
}) {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{description}</p>
      <Link href={href} className={cn(secondaryCtaClass, "mt-5")}>
        {linkLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </aside>
  );
}

function TimelinePhaseCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {page.timelinePhases.map((phase) => (
        <article key={phase.phase} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">{phase.phase}</p>
          <ul className="mt-4 space-y-3">
            {phase.tasks.map((task) => (
              <li key={task} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function OrganizationGrid({ items }: { items: readonly OrganizationEntry[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((entry) => (
        <article key={entry.name} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground">{entry.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{entry.body}</p>
          <ul className="mt-3 space-y-2">
            {entry.examples.map((example) => (
              <li key={example} className="flex gap-2 text-sm text-foreground-muted">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function LinkCardGrid({ items }: { items: PracticalLifeLink[] }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => (
        <LinkCard key={`${item.label}-${index}`} item={item} iconIndex={index} />
      ))}
    </div>
  );
}

export function DigiDNetherlandsView() {
  const faqAccordionItems = page.faqs.map((item, index) => ({ id: `faq-${index}`, title: item.q, content: item.a }));

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Municipality Services", item: new URL(page.hubPath, baseUrl).toString() },
          { name: "DigiD in the Netherlands", item: new URL(page.path, baseUrl).toString() },
        ]}
      />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "overflow-hidden p-0")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
                <div>
                  <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
                    <Link href="/" className="hover:text-foreground">Home</Link>
                    <span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link>
                    <span aria-hidden>/</span>
                    <Link href={page.hubPath} className="hover:text-foreground">Municipality services</Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">DigiD</span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {page.hero.chips.map((chip) => (
                      <span key={chip} className={cn(CITIES_FUNNEL_INFO_CHIP, "shadow-sm ring-1 ring-slate-900/[0.03]")}>{chip}</span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>
                      {page.hero.primaryCta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>
                      {page.hero.secondaryCta.label}
                    </Link>
                  </div>
                  <p className="mt-5 max-w-3xl rounded-2xl border border-amber-200/70 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950 shadow-sm ring-1 ring-amber-200/40">
                    {page.hero.disclaimer}
                  </p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="DigiD guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
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
              <SectionIntro eyebrow="Quick answer" title={page.quickAnswer.heading} fullWidth>
                {page.quickAnswer.summaryPoints.map((point) => <p key={point}>{point}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.intro} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.intro} />
                <div className="space-y-6">
                  <SectionIntro eyebrow="At a glance" title="DigiD at a Glance" fullWidth>
                    <p>Six facts that explain why newcomers hear about DigiD within their first weeks in the Netherlands.</p>
                  </SectionIntro>
                  <GuidePremiumVisualFigure visual={page.visuals.snapshot} className={visualAfterIntroClass} />
                  <FeatureGrid items={page.snapshotCards} />
                  <ChecklistBlock title="How to use this snapshot" items={page.snapshotUseTips} columns={2} />
                </div>
                <OrientationFlowBand className="mt-6" />
                <ChecklistBlock title="First-week actions that speed up DigiD" items={page.firstWeekActions} columns={2} />
              </div>
            </section>

            <PremiumGuideSection
              id="why-matters"
              intro={
                <SectionIntro title={page.whyMatters.heading} fullWidth>
                  {page.whyMatters.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.whyMatters}
            >
              <VisualTextDetails details={page.visualTextDetails.whyMatters} />
              <FeatureGrid items={page.whyMattersCards} />
              <ProfileScenarioTable title="When DigiD affects real plans" rows={page.whyMattersScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="who-eligible"
              intro={
                <SectionIntro title={page.whoEligible.heading} fullWidth>
                  {page.whoEligible.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.whoEligible}
            >
              <VisualTextDetails details={page.visualTextDetails.whoEligible} />
              <FeatureGrid items={page.eligibilityCards} />
              <ProfileScenarioTable title="Eligibility scenarios for common profiles" rows={page.eligibilityScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="bsn-connection"
              intro={
                <SectionIntro title={page.bsnConnection.heading} fullWidth>
                  {page.bsnConnection.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.bsnConnection}
            >
              <VisualTextDetails details={page.visualTextDetails.bsnConnection} />
              <SectionIntro eyebrow="Prerequisites" title="What must be in place before DigiD" fullWidth>
                <p>These four checks mirror what the infographic sequence shows — registration and post matter as much as the application itself.</p>
              </SectionIntro>
              <PrerequisiteStatGrid items={page.bsnDigiDPrerequisites} />
              <ChecklistBlock title="Typical sequence from registration to first login" items={page.bsnSequenceSteps} columns={2} />
              <div className="grid gap-4 md:grid-cols-2">
                <GuideCrossLink
                  href={BSN_REGISTRATION_PATH}
                  title="BSN Registration"
                  description="Live guide on BSN timing, documents and employer onboarding — the number DigiD relies on."
                  linkLabel="Open BSN registration guide"
                />
                <GuideCrossLink
                  href={REGISTERING_ADDRESS_PATH}
                  title="Address Registration"
                  description="Register your home address at the gemeente before applying for DigiD."
                  linkLabel="Open address registration guide"
                />
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="use-cases"
              intro={
                <SectionIntro title={page.useCases.heading}>
                  {page.useCases.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.useCases}
            >
              <VisualTextDetails details={page.visualTextDetails.useCases} />
              <div className="w-full">
                <SectionIntro eyebrow="Examples" title="Real-world service scenarios" fullWidth />
                <div className="mt-4 w-full">
                  <InfoTable
                    rows={page.serviceScenarios.map((row) => ({
                      service: row.service,
                      examplePortal: row.examplePortal,
                      whenUseful: row.whenUseful,
                    }))}
                    columns={[
                      { key: "service", label: "Service" },
                      { key: "examplePortal", label: "Example portal" },
                      { key: "whenUseful", label: "When DigiD helps" },
                    ]}
                  />
                </div>
              </div>
              <FeatureGrid items={page.useCaseCards} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="healthcare"
              intro={
                <SectionIntro title={page.healthcare.heading} fullWidth>
                  {page.healthcare.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.healthcare}
            >
              <VisualTextDetails details={page.visualTextDetails.healthcare} />
              <PortalTaskTable title="Healthcare portal tasks DigiD often unlocks" rows={page.healthcarePortalTasks} />
              <ChecklistBlock title="Healthcare setup tips alongside DigiD" items={page.healthcareSetupTips} columns={2} />
              <GuideCrossLink
                href={HEALTH_INSURANCE_PATH}
                title="Health Insurance Netherlands"
                description="Mandatory insurance setup paired with insurer portals that often use DigiD."
                linkLabel="Open health insurance guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="taxes"
              intro={
                <SectionIntro title={page.taxes.heading} fullWidth>
                  {page.taxes.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.taxes}
            >
              <VisualTextDetails details={page.visualTextDetails.taxes} />
              <PortalTaskTable title="Tax portal tasks and typical timing" rows={page.taxPortalTasks} />
              <ChecklistBlock title="Tax season tips with active DigiD" items={page.taxSeasonTips} columns={2} />
              <div className="grid gap-4 md:grid-cols-2">
                <GuideCrossLink href={TAXES_HUB_PATH} title="Taxes Hub" description="Orientation across expat tax guides and Belastingdienst context." linkLabel="Open taxes hub" />
                <GuideCrossLink href={EXPAT_TAXES_PATH} title="Expat Taxes Netherlands" description="Tax residency and filing context for internationally mobile residents." linkLabel="Open expat taxes guide" />
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="municipalities"
              intro={
                <SectionIntro title={page.municipalities.heading} fullWidth>
                  {page.municipalities.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.municipalities}
            >
              <VisualTextDetails details={page.visualTextDetails.municipalities} />
              <PortalTaskTable title="Common gemeente portal tasks" rows={page.municipalityPortalTasks} />
              <ChecklistBlock title="City notes for expat-heavy municipalities" items={page.municipalityCityNotes} columns={1} />
              <GuideCrossLink
                href={MUNICIPALITY_SERVICES_PATH}
                title="Municipality Services in the Netherlands"
                description="Gemeente registration, local taxes, permits and digital government touchpoints."
                linkLabel="Open municipality services guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="pensions-benefits"
              intro={
                <SectionIntro title={page.pensionsBenefits.heading} fullWidth>
                  {page.pensionsBenefits.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.pensionsBenefits}
            >
              <VisualTextDetails details={page.visualTextDetails.pensionsBenefits} />
              <ChecklistBlock title="Long-term service examples" items={page.pensionsBenefitsExamples} columns={2} />
              <ProfileScenarioTable title="Who uses DigiD for pensions and benefits" rows={page.pensionsBenefitsScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="how-it-works"
              intro={
                <SectionIntro title={page.howItWorks.heading} fullWidth>
                  {page.howItWorks.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.howItWorks}
            >
              <VisualTextDetails details={page.visualTextDetails.howItWorks} />
              <FeatureGrid items={page.loginMethodCards} />
              <ChecklistDetailGrid items={page.activationChecklistItems} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="security"
              intro={
                <SectionIntro title={page.security.heading} fullWidth>
                  {page.security.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.security}
            >
              <VisualTextDetails details={page.visualTextDetails.security} />
              <FeatureGrid items={page.securityCards} />
              <ChecklistBlock title="Red flags — stop and verify" items={page.securityRedFlags} columns={2} />
              <ChecklistBlock title="If something looks wrong" items={page.securityIncidentSteps} columns={1} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="newcomer-timeline"
              intro={
                <SectionIntro title={page.newcomerTimeline.heading} fullWidth>
                  {page.newcomerTimeline.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.newcomerTimeline}
            >
              <VisualTextDetails details={page.visualTextDetails.newcomerTimeline} />
              <TimelinePhaseCards />
              <div className="grid gap-4 md:grid-cols-3">
                <GuideCrossLink href={REGISTERING_ADDRESS_PATH} title="Address Registration" description="Start the sequence with gemeente registration." linkLabel="Open guide" />
                <GuideCrossLink href={BSN_REGISTRATION_PATH} title="BSN Registration" description="Live guide on BSN timing and documents." linkLabel="Open guide" />
                <GuideCrossLink href={MUNICIPALITY_SERVICES_PATH} title="Municipality Services" description="Broader gemeente and digital government map." linkLabel="Open guide" />
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              intro={
                <SectionIntro title={page.mistakes.heading} fullWidth>
                  {page.mistakes.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.mistakes}
            >
              <VisualTextDetails details={page.visualTextDetails.mistakes} />
              <FeatureGrid items={page.mistakeCards} />
              <ChecklistBlock title="How to recover from common mistakes" items={page.mistakeRecoveryTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="organizations"
              intro={
                <SectionIntro title={page.organizations.heading} fullWidth>
                  {page.organizations.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.organizations}
            >
              <VisualTextDetails details={page.visualTextDetails.organizations} />
              <OrganizationGrid items={page.organizationEntries} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              intro={
                <SectionIntro title="DigiD FAQ">
                  <p>Quick answers for orientation — verify eligibility and activation steps on DigiD.nl before applying.</p>
                </SectionIntro>
              }
              visual={page.visuals.faq}
            >
              <VisualTextDetails details={page.visualTextDetails.faq} />
              <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="sources"
              intro={
                <SectionIntro eyebrow="Trust" title="Official Resources" fullWidth>
                  <p>Eligibility requirements, activation methods and supported services may change over time. Always verify information through official sources.</p>
                </SectionIntro>
              }
              visual={page.visuals.sources}
            >
              <VisualTextDetails details={page.visualTextDetails.sources} />
              <ChecklistBlock title="How to use these resources" items={page.sourceUsageTips} columns={2} />
              <ProfileScenarioTable title="Which official source when — examples" rows={page.sourceVerificationScenarios} />
              <p className="text-sm leading-relaxed text-foreground-muted">{page.sourcesDisclaimer}</p>
              <div className={guidePremiumCardGridClass(page.officialSources.length)}>
                {page.officialSources.map((source) => (
                  <SourceLink key={source.href} source={source} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              intro={
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Continue from DigiD into BSN, municipality services, taxes, healthcare and relocation guides.</p>
                </SectionIntro>
              }
              visual={page.visuals.relatedGuides}
            >
              <VisualTextDetails details={page.visualTextDetails.relatedGuides} />
              <ChecklistBlock title="Route yourself to the right next guide" items={page.relatedGuideRouting} columns={2} />
              <LinkCardGrid items={[...page.relatedGuides]} />
            </PremiumGuideSection>

            <section
              id="explore-next"
              className={cn(
                CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
                "scroll-mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl sm:p-8 lg:p-10"
              )}
            >
              <div className={cn("h-1.5 rounded-full", movingNlSignatureGradientClass)} aria-hidden />
              <div className="mt-6">
                <SectionIntro eyebrow="Explore next" title="Complete Your Digital Onboarding" tone="onDark">
                  <p>Move from DigiD awareness into BSN, address registration, municipality services, taxes and healthcare setup.</p>
                </SectionIntro>
                <GuidePremiumVisualFigure
                  visual={page.visuals.exploreNext}
                  tone="onDark"
                  className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")}
                />
                <div className={guidePremiumSectionDetailStackClass}>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.exploreNextCards.map((item, idx) => (
                      <LinkCard key={`${item.label}-${idx}`} item={item} iconIndex={idx} tone="onDark" />
                    ))}
                  </div>
                  <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10">
                    <h3 className="text-base font-bold tracking-tight text-white">Choose your next guide</h3>
                    <ul className="mt-4 grid gap-3">
                      {page.exploreNextTips.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-cyan-100 ring-1 ring-white/15">
                            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </aside>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}

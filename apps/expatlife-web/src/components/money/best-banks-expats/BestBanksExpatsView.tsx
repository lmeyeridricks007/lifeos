import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  Building2,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  ExternalLink,
  Landmark,
  Scale,
  ShieldCheck,
  Smartphone,
  Users,
  WalletCards,
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
  guidePremiumVisualSpacingClass,
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
import { BANKING_HUB_PATH } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { BankingRecommendedOptionsSection } from "@/components/banking/BankingRecommendedOptionsSection";
import { BankingCompareFitEstimateCostCta } from "@/components/banking/BankingCompareFitEstimateCostCta";
import { BankComparisonTable, type BankAffiliateLink } from "@/components/banking/BankComparisonTable";
import { AffiliateDisclosureNote } from "@/src/components/monetization/AffiliateDisclosureNote";
import { DEFAULT_MONETIZATION_DISCLOSURE } from "@/src/lib/monetization/types";
import { loadProvider } from "@/src/lib/affiliates/loadAffiliates";
import { banks } from "@/src/data/banking/banks";
import { withPartnerReferralUtms, utmContentFromPath } from "@/lib/analytics/referral-utm";
import {
  BEST_BANKS_EXPATS_PATH,
  bestBanksExpatsPage as page,
  type BestBanksLink,
  type MistakeCard as MistakeCardData,
} from "./bestBanksExpatsPageModel";

const baseUrl = getSiteOrigin();
const CANONICAL = BEST_BANKS_EXPATS_PATH;

const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionClassOnDark = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  "relative isolate overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-white/10 sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const cardClass = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);

const iconPool = [
  Landmark,
  WalletCards,
  ClipboardList,
  CreditCard,
  Banknote,
  Building2,
  Smartphone,
  Scale,
  ShieldCheck,
  Users,
] as const;
const snapshotIcons = [Scale, Landmark, Banknote, ClipboardList] as const;
const orientationIcons = [ClipboardList, Scale, ShieldCheck, Landmark] as const;

const scenarioColumns = [
  { key: "situation", label: "Situation" },
  { key: "approach", label: "How it works here" },
  { key: "firstStep", label: "First step" },
] as const;

const BANK_PROVIDER_IDS = ["ing", "abn-amro", "rabobank", "bunq", "revolut", "wise", "n26"] as const;
const BANK_MENTION_PATTERN = /\b(ABN AMRO|Rabobank|Revolut|Wise|ING|bunq|N26|Rabo|ABN)\b/g;
const BANK_MENTION_TO_PROVIDER_ID: Record<string, (typeof BANK_PROVIDER_IDS)[number]> = {
  "ABN AMRO": "abn-amro",
  ABN: "abn-amro",
  Rabobank: "rabobank",
  Rabo: "rabobank",
  Revolut: "revolut",
  Wise: "wise",
  ING: "ing",
  bunq: "bunq",
  N26: "n26",
};

type BankLinkMap = Partial<Record<(typeof BANK_PROVIDER_IDS)[number] | string, BankAffiliateLink>>;

function buildBankAffiliateLinks(): BankLinkMap {
  const utmContent = utmContentFromPath(CANONICAL);
  return BANK_PROVIDER_IDS.reduce<BankLinkMap>((acc, providerId) => {
    const provider = loadProvider(providerId);
    if (!provider) return acc;
    acc[providerId] = {
      href: withPartnerReferralUtms(provider.cta.href, {
        partnerSlug: provider.id,
        utmContent,
      }),
      label: provider.cta.label,
      partnerSlug: provider.id,
      isAffiliate: provider.cta.isAffiliate,
    };
    return acc;
  }, {});
}

function BankMentionText({
  text,
  bankLinks,
  pageContext,
}: {
  text: string;
  bankLinks: BankLinkMap;
  pageContext: string;
}) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  BANK_MENTION_PATTERN.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = BANK_MENTION_PATTERN.exec(text)) !== null) {
    const label = match[0];
    const index = match.index ?? 0;
    const providerId = BANK_MENTION_TO_PROVIDER_ID[label];
    const link = bankLinks[providerId];
    if (index > lastIndex) parts.push(text.slice(lastIndex, index));
    if (link) {
      parts.push(
        <a
          key={`${pageContext}-${label}-${index}`}
          href={link.href}
          target="_blank"
          rel={link.isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
          className="font-semibold text-link underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          data-outbound-link-type="provider"
          data-outbound-partner-slug={link.partnerSlug}
          data-outbound-link-text={link.label}
          data-outbound-page-context={pageContext}
        >
          {label}
        </a>
      );
    } else {
      parts.push(label);
    }
    lastIndex = index + label.length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

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

function PremiumGuideSection({
  id,
  intro,
  visual,
  children,
  visualTone = "default",
  sectionTone = "default",
  tipsKey,
}: {
  id: string;
  intro: ReactNode;
  visual: GuidePremiumVisual;
  children: ReactNode;
  visualTone?: "default" | "onDark";
  sectionTone?: "default" | "onDark";
  tipsKey?: keyof typeof page.visualTextDetails;
}) {
  const onDark = sectionTone === "onDark";
  return (
    <section id={id} className={onDark ? sectionClassOnDark : sectionClass}>
      {onDark ? (
        <div
          className={cn("absolute inset-x-6 top-0 h-1.5 rounded-full sm:inset-x-8 lg:inset-x-10", movingNlSignatureGradientClass)}
          aria-hidden
        />
      ) : null}
      <div className={cn(guidePremiumIntroStackClass, onDark && "relative mt-2")}>{intro}</div>
      <GuidePremiumVisualFigure visual={visual} tone={visualTone} className={guidePremiumVisualSpacingClass} />
      <div className={guidePremiumSectionDetailStackClass}>
        {tipsKey ? <VisualTextDetails tipsKey={tipsKey} tone={onDark ? "onDark" : "default"} /> : null}
        {children}
      </div>
    </section>
  );
}

function VisualTextDetails({
  tipsKey,
  tone = "default",
}: {
  tipsKey: keyof typeof page.visualTextDetails;
  tone?: "default" | "onDark";
}) {
  const details = page.visualTextDetails[tipsKey];
  return <BulletPanel title={details.title} items={details.items} tone={tone} />;
}

function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "default",
  fullWidth = true,
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
        <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>
        {title}
      </h2>
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

function BulletPanel({
  title,
  items,
  tone = "default",
}: {
  title: string;
  items: readonly string[];
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl p-5 shadow-sm ring-1",
        onDark
          ? "border-white/10 bg-white/10 text-white ring-white/10"
          : "border border-slate-200/90 bg-white/95 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className={cn("text-base font-bold tracking-tight", onDark ? "text-white" : "text-foreground")}>{title}</h3>
      <ul className={cn("mt-4 grid gap-3", onDark ? undefined : "md:grid-cols-2")}>
        {items.map((item) => (
          <li
            key={item}
            className={cn("flex gap-3 text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}
          >
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1",
                onDark
                  ? "bg-white/10 text-cyan-200 ring-white/15"
                  : "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10"
              )}
            >
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ChecklistBlock({
  title,
  items,
  columns = 1,
  className,
}: {
  title: string;
  items: readonly string[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass,
        className
      )}
    >
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{title}</p>
      <ul className={cn("mt-4 gap-3", columns === 2 ? "grid md:grid-cols-2" : "space-y-3")}>
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoTable({
  rows,
  columns,
}: {
  rows: Array<Record<string, ReactNode>>;
  columns: ReadonlyArray<{ key: string; label: string }>;
}) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col" className="px-4 py-3 font-bold">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr key={idx}>
                {columns.map((column, cellIdx) => (
                  <td
                    key={column.key}
                    className={cn("px-4 py-4 text-foreground-muted", cellIdx === 0 && "font-semibold text-foreground")}
                  >
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

function ScenarioTable({
  title,
  rows,
}: {
  title: string;
  rows: ReadonlyArray<{ situation: string; approach: string; firstStep: string }>;
}) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Examples" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          columns={scenarioColumns}
          rows={rows.map((row) => ({ situation: row.situation, approach: row.approach, firstStep: row.firstStep }))}
        />
      </div>
    </div>
  );
}

function WarningPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl border border-amber-200/80 bg-amber-50/80 p-5 shadow-sm ring-1 ring-amber-200/50",
        movingNlCardMicroLiftClass
      )}
      role="note"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-300" aria-hidden />
      <h3 className="flex items-center gap-2 text-base font-bold tracking-tight text-amber-950">
        <AlertTriangle className="h-4 w-4 text-amber-700" aria-hidden />
        {title}
      </h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-amber-950">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/70 text-amber-800 ring-1 ring-amber-200/70">
              <AlertTriangle className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
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

function MiniStatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <article className={cn(cardClass, "p-4 sm:p-5")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{label}</p>
      <p className="mt-2 text-xl font-black tracking-tight text-foreground">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{note}</p>
    </article>
  );
}

function MistakeCard({ card, index }: { card: MistakeCardData; index: number }) {
  const Icon = iconPool[index % iconPool.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{card.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
      <p className="mt-3 rounded-2xl bg-copilot-bg-soft/70 p-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-copilot-primary/10">
        <span className="font-bold text-foreground">Fix: </span>
        {card.advice}
      </p>
    </article>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: BestBanksLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = iconPool[iconIndex % iconPool.length];
  const isExternal = item.status === "external";
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const body = (
    <>
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1.5 rounded-t-2xl",
          isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200"
        )}
        aria-hidden
      />
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1",
          onDark
            ? "bg-white/10 text-cyan-100 ring-white/15"
            : "bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong ring-copilot-primary/10"
        )}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className={cn("mt-4 block text-sm font-bold", onDark ? "text-white" : "text-foreground")}>
        {item.label}
        {!isLive ? (
          <span
            className={cn(
              "ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]",
              onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500"
            )}
          >
            Coming soon
          </span>
        ) : null}
      </span>
      {item.description ? (
        <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>
          {item.description}
        </span>
      ) : null}
      {isLive ? (
        <span
          className={cn(
            "mt-4 inline-flex items-center gap-1 text-xs font-semibold",
            onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover"
          )}
        >
          Open {isExternal ? <ExternalLink className="h-3.5 w-3.5" aria-hidden /> : <ArrowRight className="h-3.5 w-3.5" aria-hidden />}
        </span>
      ) : null}
    </>
  );

  if (!isLive) {
    return (
      <article className={cn(cardClass, "opacity-90", onDark && "border-white/10 bg-white/10 text-white ring-white/10")}>
        {body}
      </article>
    );
  }

  const linkClass = cn(
    cardClass,
    "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
    onDark
      ? "border-white/10 bg-white/10 ring-white/10 focus-visible:ring-offset-slate-950"
      : "focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  if (isExternal) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {body}
      </a>
    );
  }

  return (
    <Link href={item.href} className={linkClass}>
      {body}
    </Link>
  );
}

function SourceLink({
  source,
  tone = "default",
}: {
  source: { label: string; href: string; description: string };
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block overflow-hidden p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
        onDark
          ? "rounded-3xl border border-white/10 bg-white/10 text-white shadow-sm ring-1 ring-white/10 focus-visible:ring-offset-slate-950"
          : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "focus-visible:ring-offset-canvas"),
        movingNlCardMicroLiftClass,
        transitionInteractive,
        activeBrightnessPress
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span
        className={cn(
          "flex items-center gap-2 text-sm font-bold",
          onDark ? "text-white group-hover:text-cyan-200" : "text-foreground group-hover:text-link"
        )}
      >
        <ShieldCheck className={cn("h-4 w-4", onDark ? "text-cyan-200" : "text-brand-strong")} aria-hidden />
        {source.label}
        <ExternalLink className={cn("h-3.5 w-3.5", onDark ? "text-slate-400" : "text-foreground-muted")} aria-hidden />
      </span>
      <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>
        {source.description}
      </span>
      <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link")}>
        Open source <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </a>
  );
}

function QuickAnswerBox() {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-br from-copilot-bg-soft via-white to-cyan-50/50 p-5 ring-1 ring-copilot-primary/10",
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-sm font-bold text-foreground">{page.quickAnswer.summary}</p>
      <ul className="mt-4 space-y-2">
        {page.quickAnswer.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-2xl bg-white/80 p-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-slate-900/[0.04]">
        <span className="font-bold text-foreground">Tip: </span>
        {page.quickAnswer.note}
      </p>
    </aside>
  );
}

function OrientationFlowBand({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Orientation flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Four habits for shortlisting</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {page.orientationFlowSteps.map((step, index) => {
            const Icon = orientationIcons[index % orientationIcons.length];
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

function HeroSignalStrip() {
  return (
    <div className="relative mt-5 grid gap-3 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/82 p-3 shadow-card ring-1 ring-slate-900/[0.03] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      {page.snapshotSignals.map((signal, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <div
            key={signal.label}
            className="relative rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-copilot-bg-soft/70 p-4 shadow-sm"
          >
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

const faqAccordionItems = page.faq.map((item, index) => ({
  id: `faq-${index}`,
  title: item.q,
  content: item.a,
}));

export function BestBanksExpatsView() {
  const bankLinks = buildBankAffiliateLinks();

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: new URL("/", baseUrl).toString() },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Banking", item: new URL(BANKING_HUB_PATH, baseUrl).toString() },
          { name: "Best banks for expats", item: new URL(BEST_BANKS_EXPATS_PATH, baseUrl).toString() },
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
                    <Link href="/" className="hover:text-foreground">
                      Home
                    </Link>
                    <span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">
                      Netherlands
                    </Link>
                    <span aria-hidden>/</span>
                    <Link href={BANKING_HUB_PATH} className="hover:text-foreground">
                      Banking
                    </Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">
                      Best banks for expats
                    </span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    {page.hero.pageTitle}
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {page.hero.chips.map((chip) => (
                      <span key={chip} className={cn(CITIES_FUNNEL_INFO_CHIP, "shadow-sm ring-1 ring-slate-900/[0.03]")}>
                        {chip}
                      </span>
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
                  <div className="mt-5 rounded-2xl border border-border/70 bg-surface-muted/40 p-3.5 sm:p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Quick picks</p>
                    <ul className="mt-2.5 grid gap-2 sm:grid-cols-3" role="list">
                      {page.hero.quickPicks.map((row) => (
                        <li
                          key={row.label}
                          className="rounded-lg border border-border/60 bg-surface-raised/90 px-2.5 py-2 text-left shadow-sm ring-1 ring-border/30"
                        >
                          <span className="block text-[10px] font-semibold uppercase tracking-wide text-foreground-muted">
                            {row.label}
                          </span>
                          <span className="mt-0.5 block text-xs font-medium text-foreground">
                            <BankMentionText text={row.picks} bankLinks={bankLinks} pageContext="best-banks-expats-hero-quick-picks" />
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link href="#use-cases" className="mt-3 inline-flex text-xs font-semibold text-link hover:underline">
                      All use cases →
                    </Link>
                  </div>
                  <BankingCompareFitEstimateCostCta className="mt-4 max-w-full" />
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
            <nav aria-label="Page sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
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
            <PremiumGuideSection
              id="quick-answer"
              tipsKey="intro"
              visual={page.visuals.intro}
              intro={
                <SectionIntro eyebrow="Quick answer" title={page.quickAnswer.heading} fullWidth>
                  {page.introParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <QuickAnswerBox />
              <OrientationFlowBand />
              <BulletPanel title="What this overview is for" items={page.introHighlights} />
              <ChecklistBlock title="Shortlist file — keep these together" items={page.safetyFileChecklist} columns={2} />
              <ScenarioTable title="Where newcomers usually start" rows={page.introScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              visual={page.visuals.snapshot}
              intro={
                <SectionIntro eyebrow="Snapshot" title="Bank shortlisting at a glance" fullWidth>
                  <p>Six cards cover how to compare calmly. Deeper sections expand each theme without crowning a winner.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.snapshotSignals.length)}>
                {page.snapshotSignals.map((signal) => (
                  <MiniStatCard key={signal.label} label={signal.label} value={signal.value} note={signal.note} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.snapshotCards.length)}>
                {page.snapshotCards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="use-cases"
              tipsKey="useCases"
              visual={page.visuals.useCases}
              intro={
                <SectionIntro eyebrow="Use cases" title={page.useCases.heading} fullWidth>
                  <p>{page.useCases.lead}</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.useCases.cards.length)}>
                {page.useCases.cards.map((card, index) => (
                  <article key={card.title} className={cardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-copilot-bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong ring-1 ring-copilot-primary/10">
                        Use case
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">{card.title}</h3>
                    <div className="mt-4 rounded-xl border border-border/65 bg-white/70 px-3 py-3 ring-1 ring-border/20">
                      <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted">Shortlist</p>
                      <p className="mt-1.5 text-sm font-semibold text-foreground">
                        <BankMentionText text={card.picks} bankLinks={bankLinks} pageContext="best-banks-expats-use-cases" />
                      </p>
                    </div>
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted" role="list">
                      {card.bullets.map((b) => (
                        <li key={b}>
                          <BankMentionText text={b} bankLinks={bankLinks} pageContext="best-banks-expats-use-case-bullets" />
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="comparison"
              tipsKey="comparison"
              visual={page.visuals.comparison}
              intro={
                <SectionIntro eyebrow="Compare" title={page.comparisonIntro.heading} fullWidth>
                  <p>{page.comparisonIntro.lead}</p>
                </SectionIntro>
              }
            >
              <p className="text-xs text-foreground-muted md:hidden" role="note">
                On small screens the table becomes <strong className="font-semibold text-foreground">cards</strong> — same
                columns, easier scrolling.
              </p>
              <BankComparisonTable banks={banks} sortable bankLinks={bankLinks} className="mt-1" />
              <AffiliateDisclosureNote className="mt-4 text-xs">
                {DEFAULT_MONETIZATION_DISCLOSURE} Table cells describe typical patterns — not live tariffs. Indicative fee
                framing is for 2026 orientation only.
              </AffiliateDisclosureNote>
              <WarningPanel
                title="Verify before you apply"
                items={[
                  "BSN and address rules change — read the bank’s page today",
                  "Fee displays are editorial patterns, not quotes",
                  "Eligibility is decided by the bank, not this guide",
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="bank-details"
              tipsKey="bankNotes"
              visual={page.visuals.bankNotes}
              intro={
                <SectionIntro eyebrow="Notes" title="Bank breakdowns" fullWidth>
                  <p>{page.bankDetailsIntro}</p>
                </SectionIntro>
              }
            >
              <div className="space-y-5 sm:space-y-6">
                {page.bankDetails.map((b) => (
                  <article key={b.id} id={b.id} className={cn(cardClass, "scroll-mt-28 p-5 sm:p-6 md:scroll-mt-32")}>
                    <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      <BankMentionText text={b.name} bankLinks={bankLinks} pageContext="best-banks-expats-bank-breakdowns" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      <BankMentionText
                        text={b.overview}
                        bankLinks={bankLinks}
                        pageContext="best-banks-expats-bank-breakdown-overview"
                      />
                    </p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-800">Pros</p>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-foreground-muted">
                          {b.pros.map((p) => (
                            <li key={p}>
                              <BankMentionText text={p} bankLinks={bankLinks} pageContext="best-banks-expats-bank-breakdown-pros" />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-900/90">Cons</p>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-foreground-muted">
                          {b.cons.map((p) => (
                            <li key={p}>
                              <BankMentionText text={p} bankLinks={bankLinks} pageContext="best-banks-expats-bank-breakdown-cons" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 border-t border-dashed border-border/60 pt-4 sm:grid-cols-2">
                      <div className="rounded-xl bg-surface-muted/70 p-3 ring-1 ring-border/50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Best for</p>
                        <p className="mt-1.5 text-sm text-foreground-muted">
                          <BankMentionText
                            text={b.bestFor}
                            bankLinks={bankLinks}
                            pageContext="best-banks-expats-bank-breakdown-best-for"
                          />
                        </p>
                      </div>
                      <div className="rounded-xl bg-surface-muted/70 p-3 ring-1 ring-border/50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Not ideal for</p>
                        <p className="mt-1.5 text-sm text-foreground-muted">
                          <BankMentionText
                            text={b.notIdealFor}
                            bankLinks={bankLinks}
                            pageContext="best-banks-expats-bank-breakdown-not-ideal"
                          />
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="traditional-vs-digital"
              tipsKey="tradDigital"
              visual={page.visuals.tradDigital}
              intro={
                <SectionIntro eyebrow="Mental model" title={page.traditionalVsDigital.heading} fullWidth>
                  <p>{page.traditionalVsDigital.lead}</p>
                </SectionIntro>
              }
            >
              <div className="grid gap-4 md:grid-cols-2">
                <article className={cardClass}>
                  <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                  <h3 className="text-base font-bold text-foreground">{page.traditionalVsDigital.traditional.title}</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground-muted">
                    {page.traditionalVsDigital.traditional.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
                <article className={cardClass}>
                  <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                  <h3 className="text-base font-bold text-foreground">{page.traditionalVsDigital.digital.title}</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground-muted">
                    {page.traditionalVsDigital.digital.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="how-to-choose"
              tipsKey="choose"
              visual={page.visuals.choose}
              intro={
                <SectionIntro eyebrow="Decision framework" title={page.howToChoose.heading} fullWidth>
                  <p>{page.howToChoose.intro}</p>
                </SectionIntro>
              }
            >
              <dl className="space-y-4">
                {page.howToChoose.questions.map((item) => (
                  <div key={item.q} className={cn(cardClass, "p-4 sm:p-5")}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <dt className="text-sm font-bold text-foreground">{item.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      <BankMentionText text={item.a} bankLinks={bankLinks} pageContext="best-banks-expats-how-to-choose" />
                    </dd>
                  </div>
                ))}
              </dl>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="scenarios"
              tipsKey="scenarios"
              visual={page.visuals.scenarios}
              intro={
                <SectionIntro eyebrow="Situations" title={page.scenarios.heading} fullWidth>
                  <p>{page.scenarios.intro}</p>
                </SectionIntro>
              }
            >
              <ScenarioTable title="Arrival stories" rows={page.scenarios.rows} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              tipsKey="mistakes"
              visual={page.visuals.mistakes}
              intro={
                <SectionIntro eyebrow="Avoid" title={page.mistakes.heading} fullWidth>
                  <p>These patterns create avoidable banking friction — verify-on-site habits beat forum folklore.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.mistakes.cards.length)}>
                {page.mistakes.cards.map((card, idx) => (
                  <MistakeCard key={card.title} card={card} index={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="checklist"
              tipsKey="checklist"
              visual={page.visuals.checklist}
              intro={
                <SectionIntro eyebrow="Ready to shortlist" title={page.checklist.heading} fullWidth>
                  <p>Work through this list before you upload an application.</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Shortlist checklist" items={page.checklist.items} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="howto"
              tipsKey="choose"
              visual={page.visuals.choose}
              intro={
                <SectionIntro eyebrow="How-to" title={page.howTo.heading} fullWidth>
                  <p>{page.howTo.lead}</p>
                </SectionIntro>
              }
            >
              <ol className="space-y-4">
                {page.howTo.steps.map((step, index) => (
                  <li key={step.name} className={cn(cardClass, "p-5")}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Step {index + 1}</p>
                    <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">{step.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.text}</p>
                  </li>
                ))}
              </ol>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="tools"
              tipsKey="checklist"
              visual={page.visuals.checklist}
              intro={
                <SectionIntro eyebrow="Tools" title={page.tools.heading} fullWidth>
                  <p>Use tools for fit and cost planning — then verify products and fees on each bank’s official pages.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.tools.items.length)}>
                {page.tools.items.map((item, idx) => (
                  <LinkCard key={item.href} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <section id={page.recommendedOptions.sectionId} className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro
                  eyebrow={page.recommendedOptions.eyebrow}
                  title={page.recommendedOptions.title}
                  fullWidth
                >
                  <p>{page.recommendedOptions.subtitle}</p>
                </SectionIntro>
              </div>
              <div className={guidePremiumSectionDetailStackClass}>
                <BankingRecommendedOptionsSection
                  placementId={page.recommendedOptions.placementId}
                  analyticsPageContext={page.recommendedOptions.analyticsPageContext}
                  boundaryNote={page.recommendedOptions.boundaryNote}
                  categoryLinks={[...page.recommendedOptions.categoryLinks]}
                  browseLabel={page.recommendedOptions.browseLabel}
                />
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="FAQ" title="Frequently asked questions" fullWidth>
                  <p>Short answers for the searches expats ask most often about choosing a Dutch bank.</p>
                </SectionIntro>
              </div>
              <div className={guidePremiumSectionDetailStackClass}>
                <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
              </div>
            </section>

            <PremiumGuideSection
              id="related-guides"
              tipsKey="intro"
              visual={page.visuals.intro}
              intro={
                <SectionIntro eyebrow="Related" title="Related banking guides" fullWidth>
                  <p>Open a bank account and International transfers stay live cluster peers — never marked coming soon.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.relatedGuides.length)}>
                {page.relatedGuides.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="banking-hub"
              tipsKey="snapshot"
              visual={page.visuals.snapshot}
              intro={
                <SectionIntro eyebrow="Hub" title="Banking hub and cluster cards" fullWidth>
                  <p>Return to the Banking hub or jump to live cluster peers and fee / lens guides.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.hubCards.length)}>
                {page.hubCards.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="explore-next"
              tipsKey="scenarios"
              visual={page.visuals.scenarios}
              visualTone="onDark"
              sectionTone="onDark"
              intro={
                <SectionIntro eyebrow="Explore next" title="Pick your next money step" tone="onDark" fullWidth>
                  <p>Open an account, model costs, learn rails, or dig into cross-border transfers.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.exploreNext.length)}>
                {page.exploreNext.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} tone="onDark" />
                ))}
              </div>
              <div id="sources" className="mt-8 space-y-6">
                <SectionIntro eyebrow="Trust" title="Official sources" tone="onDark" fullWidth>
                  <p>Confirm supervision context and fees with providers — rules change.</p>
                </SectionIntro>
                <div className={guidePremiumCardGridClass(page.officialSources.length)}>
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} tone="onDark" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{page.disclosure}</p>
              </div>
            </PremiumGuideSection>
          </div>
        </Container>
      </main>
    </>
  );
}

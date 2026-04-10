import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { SectionBlock } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import {
  livingDailyLifeAtAGlance,
  livingDailyLifeReferences,
  livingDailyLifeRelatedTools,
  livingDailyLifeSurprises,
} from "./config/livingDailyLife.config";
import { resolveDailyLifeIcon } from "./config/livingDailyLife.icons";
import { LIVING_DAILY_LIFE_INTERNAL_LINKS } from "./config/livingDailyLife.links";
import type {
  LivingDailyLifeIntroChunk,
  LivingDailyLifeIntroParagraph,
  LivingDailyLifePracticalCard,
  LivingDailyLifeSection,
  LivingDailyLifeHowStep,
} from "./config/livingDailyLife.types";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

export const iconTileClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong ring-1 ring-brand/10 sm:h-11 sm:w-11";

export const practicalCardClass =
  "rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 transition-shadow duration-200 hover:shadow-card-hover sm:p-5";

export const practicalCardAccentClass =
  "rounded-card border border-border border-l-[3px] border-l-brand/90 bg-surface-raised p-4 shadow-card ring-1 ring-brand/10 transition-shadow duration-200 hover:shadow-card-hover sm:p-5";

export function PracticalBadge({ children }: { children: ReactNode }) {
  return (
    <span className="mb-2 inline-flex w-fit rounded-full border border-brand/25 bg-brand-muted/55 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-brand-strong">
      {children}
    </span>
  );
}

export function DailyLifeHowItWorksStrip({ steps }: { steps: readonly LivingDailyLifeHowStep[] }) {
  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6"
      role="list"
      aria-label="How it works in practice"
    >
      {steps.map((s, i) => (
        <div
          key={s.title}
          role="listitem"
          className="rounded-xl border border-brand/20 bg-gradient-to-br from-brand-muted/30 via-surface-muted/40 to-surface-raised px-4 py-3.5 shadow-sm ring-1 ring-brand/10 sm:px-5 sm:py-4"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Step {i + 1}</p>
          <h3 className="mt-1.5 text-sm font-semibold tracking-tight text-foreground">{s.title}</h3>
          <p className="mt-2 text-xs leading-snug text-foreground-muted sm:text-sm sm:leading-relaxed">{s.body}</p>
        </div>
      ))}
    </div>
  );
}

function IntroChunkNode({
  chunk,
  linkClass,
}: {
  chunk: LivingDailyLifeIntroChunk;
  linkClass: string;
}) {
  if (chunk.type === "link") {
    const href = LIVING_DAILY_LIFE_INTERNAL_LINKS[chunk.linkKey];
    return (
      <Link href={href} className={linkClass}>
        {chunk.label}
      </Link>
    );
  }
  if (chunk.emphasis === "medium") {
    return <span className="font-medium text-foreground">{chunk.text}</span>;
  }
  if (chunk.emphasis === "bold") {
    return <span className="font-bold text-foreground">{chunk.text}</span>;
  }
  return <span>{chunk.text}</span>;
}

export function DailyLifeIntroOneParagraph({
  chunks,
  linkClass,
  className,
}: {
  chunks: LivingDailyLifeIntroParagraph;
  linkClass: string;
  className?: string;
}) {
  return (
    <p className={className}>
      {chunks.map((c, ci) => (
        <IntroChunkNode key={ci} chunk={c} linkClass={linkClass} />
      ))}
    </p>
  );
}

export function DailyLifeIntroParagraphs({
  paragraphs,
  linkClass,
  paragraphClassName = "max-w-3xl text-sm leading-relaxed text-foreground-muted",
}: {
  paragraphs: LivingDailyLifeIntroParagraph[];
  linkClass: string;
  paragraphClassName?: string;
}) {
  return (
    <>
      {paragraphs.map((chunks, pi) => (
        <p key={pi} className={cn(paragraphClassName, pi > 0 && "mt-2")}>
          {chunks.map((c, ci) => (
            <IntroChunkNode key={ci} chunk={c} linkClass={linkClass} />
          ))}
        </p>
      ))}
    </>
  );
}

function PracticalCardView({ card }: { card: LivingDailyLifePracticalCard }) {
  if (card.kind === "gradientChecklist") {
    const TitleIcon = resolveDailyLifeIcon(card.titleIconKey);
    return (
      <div className="rounded-xl border border-brand/25 bg-gradient-to-br from-brand-muted/30 via-surface-muted/50 to-surface-raised p-4 shadow-sm ring-1 ring-brand/10 sm:p-5">
        {card.badge ? <PracticalBadge>{card.badge}</PracticalBadge> : null}
        <div className="mt-1 flex items-center gap-2">
          <TitleIcon className="h-4 w-4 text-brand-strong" aria-hidden />
          <h3 className="text-sm font-semibold text-foreground sm:text-base">{card.title}</h3>
        </div>
        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted" role="list">
          {card.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    );
  }

  const Icon = resolveDailyLifeIcon(card.iconKey);
  const wrapClass = card.tone === "accent" ? practicalCardAccentClass : practicalCardClass;
  return (
    <div className={cn(wrapClass, "flex gap-3 sm:gap-4", card.gridClass)}>
      <div className={iconTileClass} aria-hidden>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        {card.badge ? <PracticalBadge>{card.badge}</PracticalBadge> : null}
        <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">{card.title}</h3>
        {card.body ? (
          <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">{card.body}</p>
        ) : null}
        {card.bullets?.length ? (
          <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted" role="list">
            {card.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export function DailyLifeSectionBlock({
  section,
  linkClass,
}: {
  section: LivingDailyLifeSection;
  linkClass: string;
}) {
  const cardsGrid = cn(
    "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6",
    section.cardsGridClass
  );

  const sectionBody = (
    <div className="min-w-0 max-w-4xl space-y-6 sm:space-y-7 lg:max-w-none">
      {section.intro?.length ? (
        <div className="space-y-2">
          <DailyLifeIntroParagraphs paragraphs={section.intro} linkClass={linkClass} />
        </div>
      ) : null}
      {section.howItWorks?.length ? <DailyLifeHowItWorksStrip steps={section.howItWorks} /> : null}
      {section.cards?.length ? (
        <div className={cn(cardsGrid)}>
          {section.cards.map((c, i) => (
            <PracticalCardView key={i} card={c} />
          ))}
        </div>
      ) : null}
    </div>
  );

  if (section.layout === "stackWithSidebar") {
    return (
      <SectionBlock
        id={section.id}
        className={SECTION_SCROLL_MARGIN}
        eyebrow={section.eyebrow}
        title={section.title}
        subtitle={section.subtitle}
      >
        <div className="flex flex-col gap-6 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,1fr)_minmax(0,min(100%,320px))] lg:items-start lg:gap-8">
          {sectionBody}
          <aside
            className="rounded-card border border-amber-200/90 bg-amber-50/60 p-4 shadow-card ring-1 ring-amber-900/10 sm:p-5 lg:sticky lg:top-28"
            aria-labelledby={section.sidebar.ariaLabelledBy}
          >
            <h3 id={section.sidebar.ariaLabelledBy} className="text-sm font-semibold text-foreground">
              {section.sidebar.title}
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm leading-snug text-foreground-muted" role="list">
              {section.sidebar.items.map((item) => (
                <li key={item.term} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-600/80" aria-hidden />
                  <span>
                    <span className="font-medium text-foreground">{item.term}</span> — {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </SectionBlock>
    );
  }

  return (
    <SectionBlock
      id={section.id}
      className={SECTION_SCROLL_MARGIN}
      eyebrow={section.eyebrow}
      title={section.title}
      subtitle={section.subtitle}
    >
      {sectionBody}
    </SectionBlock>
  );
}

export function DailyLifeAtAGlanceBlock({ linkClass }: { linkClass: string }) {
  const g = livingDailyLifeAtAGlance;
  return (
    <SectionBlock
      id="at-a-glance"
      className={cn(SECTION_SCROLL_MARGIN, "!pt-4 sm:!pt-5 md:!pt-6")}
      eyebrow={g.eyebrow}
      title={g.title}
      subtitle={g.subtitle}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {g.cells.map((c) => (
          <div
            key={c.title}
            className="rounded-card border border-border/80 bg-surface-muted/80 p-4 shadow-card ring-1 ring-inset ring-border/10 sm:p-5"
          >
            <p className="text-sm font-semibold text-foreground">{c.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted sm:mt-2">{c.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:mt-5 sm:p-5">
        <p className="inline-flex flex-wrap items-center gap-2 text-sm font-semibold text-foreground">
          <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground-muted">
            {g.note.badgeLabel}
          </span>
          {g.note.headline}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{g.note.body}</p>
        <p className="mt-4 border-t border-border/70 pt-4 text-sm leading-relaxed text-foreground-muted">
          <span className="font-medium text-foreground">Also read:</span>{" "}
          {g.note.alsoRead.map((item, i) => (
            <Fragment key={item.linkKey}>
              {i > 0 ? ", " : null}
              <Link href={LIVING_DAILY_LIFE_INTERNAL_LINKS[item.linkKey]} className={linkClass}>
                {item.label}
              </Link>
            </Fragment>
          ))}
          .
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
          <span className="font-medium text-foreground">Run numbers:</span>{" "}
          {g.note.runNumbers.links.map((item, i) => (
            <Fragment key={item.linkKey}>
              {i > 0 ? ", " : null}
              <Link href={LIVING_DAILY_LIFE_INTERNAL_LINKS[item.linkKey]} className={linkClass}>
                {item.label}
              </Link>
            </Fragment>
          ))}
          {g.note.runNumbers.trailing}
        </p>
      </div>
    </SectionBlock>
  );
}

export function DailyLifeSurprisesBlockView() {
  const s = livingDailyLifeSurprises;
  return (
    <SectionBlock
      id="surprises"
      className={SECTION_SCROLL_MARGIN}
      eyebrow={s.eyebrow}
      title={s.title}
      subtitle={s.subtitle}
    >
      <ol className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-4 md:gap-5" aria-label="Common daily-life surprises">
        {s.items.map((item, i) => {
          const Icon = resolveDailyLifeIcon(item.iconKey);
          return (
            <li
              key={item.text}
              className="flex gap-3 rounded-card border border-border border-l-[3px] border-l-brand bg-surface-raised p-4 shadow-card ring-1 ring-brand/10 transition-shadow hover:shadow-card-hover sm:gap-3.5 sm:p-5"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-muted/85 text-brand-strong ring-1 ring-brand/15"
                aria-hidden
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0 pt-0.5 text-sm font-medium leading-snug text-foreground sm:leading-relaxed">
                <span className="sr-only">{`${i + 1}. `}</span>
                {item.text}
              </span>
            </li>
          );
        })}
      </ol>
    </SectionBlock>
  );
}

const officialLinkClass =
  "font-medium text-link underline-offset-2 hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm";

export function DailyLifeOfficialSourcesBlock() {
  const ref = livingDailyLifeReferences;

  return (
    <section
      id="official-sources"
      aria-labelledby="dl-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, "mt-8 rounded-2xl border-0 bg-slate-50/90 p-6 shadow-inner sm:p-8")}
    >
      <h2 id="dl-official-heading" className="text-xl font-bold tracking-tight text-foreground">
        {ref.sectionTitle}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{ref.intro}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {ref.links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className={officialLinkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-foreground-muted">
        {ref.footerIntro}{" "}
        {ref.footerLinks.map((fl, idx) => (
          <Fragment key={fl.linkKey}>
            {idx === 1 ? ", " : null}
            {idx === 2 ? ", or " : null}
            <Link
              href={LIVING_DAILY_LIFE_INTERNAL_LINKS[fl.linkKey]}
              className="font-semibold text-link hover:text-link-hover hover:underline"
            >
              {fl.label}
            </Link>
          </Fragment>
        ))}{" "}
        when you want transport depth or the install-order stack.
      </p>
    </section>
  );
}

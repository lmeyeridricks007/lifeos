import Link from "next/link";
import { Briefcase, Euro, HeartHandshake, Sparkles } from "lucide-react";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { SectionBlock } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import type { BestCitiesStartHereCard, BestCitiesStartHereIconKey } from "./bestCitiesForExpatsPageModel";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const ICONS: Record<BestCitiesStartHereIconKey, typeof Briefcase> = {
  work: Briefcase,
  affordability: Euro,
  family: HeartHandshake,
  lifestyle: Sparkles,
};

export function BestCitiesForExpatsStartHereGrid({
  id,
  eyebrow,
  title,
  subtitle,
  cards,
  compact,
  funnelFramed,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: BestCitiesStartHereCard[];
  /** Tighter SectionBlock top padding when stacked right after Choose your lens. */
  compact?: boolean;
  /** City funnel guides — match framed journey sections. */
  funnelFramed?: boolean;
}) {
  const ctaClass = cn(
    "mt-3 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-brand/40 bg-white px-3 py-2 text-xs font-semibold text-brand-strong shadow-sm ring-1 ring-brand/[0.08]",
    "hover:border-brand/55 hover:bg-copilot-bg-soft/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:text-sm",
    transitionInteractive,
    activeBrightnessPress
  );

  const quickPillClass = cn(
    "flex min-h-[34px] w-full items-center justify-center rounded-lg border border-border/90 bg-white/95 px-2 py-1.5 text-center text-[11px] font-semibold leading-snug text-link shadow-sm ring-1 ring-border/35 sm:min-h-[36px] sm:text-xs",
    "hover:border-brand/40 hover:bg-copilot-bg-soft/70 hover:text-link-hover",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-1",
    transitionInteractive
  );

  return (
    <SectionBlock
      id={id}
      funnelFramed={funnelFramed}
      className={SECTION_SCROLL_MARGIN}
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      subtitleMarkdown
      compact={compact}
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {cards.map((card) => {
          const Icon = ICONS[card.iconKey];
          return (
            <article
              key={card.id}
              className={cn(
                "relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                movingNlCardMicroLiftClass
              )}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <div className="relative flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-copilot-primary ring-1 ring-copilot-primary/12">
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold leading-snug tracking-tight text-copilot-text-primary sm:text-[1.0625rem] sm:leading-snug">
                    {card.title}
                  </h3>
                  <BoldParagraph
                    text={card.intro}
                    className="mt-2 text-[15px] leading-relaxed text-copilot-text-secondary sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                  />
                </div>
              </div>

              {card.quickLinks?.length ? (
                <div className="relative mt-3 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">
                    {card.quickLinksLabel ?? "Quick links"}
                  </p>
                  <ul className="mt-2 grid grid-cols-2 gap-1.5" role="list">
                    {card.quickLinks.map((q) => (
                      <li key={`${card.id}-${q.href}-${q.label}`} className="min-w-0">
                        <Link href={q.href} className={quickPillClass} title={q.label}>
                          {q.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <ul
                className="relative mt-2.5 space-y-1.5 border-t border-border/45 pt-2.5 text-xs leading-snug text-copilot-text-secondary sm:text-[13px] sm:leading-snug"
                role="list"
                aria-label={`${card.title}: checklist`}
              >
                {card.keyPoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-primary/50" aria-hidden />
                    <BoldInline
                      text={point}
                      className="min-w-0 [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                    />
                  </li>
                ))}
              </ul>

              <Link href={card.cta.href} className={ctaClass}>
                {card.cta.label}
              </Link>
            </article>
          );
        })}
      </div>
    </SectionBlock>
  );
}

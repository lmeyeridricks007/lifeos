import Link from "next/link";
import { BadgeCheck, CalendarClock, ClipboardList, FileSignature, LogOut, ScanSearch } from "lucide-react";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { SectionBlock } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import type { ChangingJobsNlStartCard } from "./config/moveChangingJobsNl.types";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const ICONS = {
  resign: LogOut,
  offer: FileSignature,
  start: CalendarClock,
  layoffPossible: ScanSearch,
  layoffUncertain: ClipboardList,
  layoffConfirmed: BadgeCheck,
} as const;

export function ChangingJobsNetherlandsStartHereGrid({
  id,
  eyebrow,
  title,
  subtitle,
  cards,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: ChangingJobsNlStartCard[];
}) {
  return (
    <SectionBlock id={id} className={SECTION_SCROLL_MARGIN} eyebrow={eyebrow} title={title} subtitle={subtitle} subtitleMarkdown>
      <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = ICONS[card.iconKey];
          return (
            <article
              key={card.id}
              id={card.anchorId}
              aria-labelledby={`${card.id}-title`}
              className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                movingNlCardMicroLiftClass
              )}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Phase</p>
                <span className="inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary">
                  {card.phaseBadge}
                </span>
              </div>
              <div className="flex items-start gap-3 pt-0.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-copilot-primary ring-1 ring-copilot-primary/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 id={`${card.id}-title`} className="text-base font-semibold tracking-tight text-foreground">
                    {card.title}
                  </h3>
                  <BoldParagraph
                    text={card.intro}
                    className="mt-2 text-[13px] leading-snug text-foreground-muted sm:text-sm sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
                  />
                  {card.bestFor ? (
                    <BoldParagraph
                      text={`**Best for:** ${card.bestFor}`}
                      className="mt-2 text-[12px] leading-snug text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  ) : null}
                  {card.whatMattersNext ? (
                    <div className="mt-2 rounded-lg border-l-[3px] border-l-brand/25 bg-copilot-bg-soft/60 px-3 py-2 ring-1 ring-copilot-primary/[0.04]">
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Next beat</p>
                      <BoldParagraph
                        text={card.whatMattersNext}
                        className="mt-1 text-[12px] leading-snug text-copilot-text-primary [&_strong]:font-semibold"
                      />
                    </div>
                  ) : null}
                  {card.internalLinks?.length ? (
                    <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5 text-[12px]" role="list">
                      {card.internalLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="font-semibold text-link hover:underline" title={link.description}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
              <ul className="mt-4 space-y-2 border-t border-border/70 pt-3 text-[13px] leading-snug text-foreground-muted sm:text-sm" role="list">
                {card.keyPoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    <BoldInline text={point} className="text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </SectionBlock>
  );
}

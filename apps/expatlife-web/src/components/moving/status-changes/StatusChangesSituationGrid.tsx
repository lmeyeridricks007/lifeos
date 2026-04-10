import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BoldInline } from "@/components/content/PillarContentBlocks";
import { SectionBlock } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import {
  movingNlCardMicroLiftClass,
  movingNlCardShadowHoverClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import type { MoveStatusChangesSituationCard } from "./config/moveStatusChanges.types";

const CHIP =
  "inline-flex rounded-full border-0 bg-copilot-bg-soft px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-copilot-primary ring-1 ring-copilot-primary/18 sm:px-2.5 sm:py-1 sm:text-[10px]";
const SCAN_BOX =
  "rounded-lg border-l-[3px] border-l-brand/35 bg-copilot-bg-soft/70 px-2.5 py-2 ring-1 ring-copilot-primary/[0.05] sm:px-3 sm:py-2.5";
const CTA_PILL =
  "inline-flex items-center rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

export function StatusChangesSituationGrid({
  region,
  cards,
}: {
  region: { id: string; eyebrow: string; title: string; subtitle: string };
  cards: readonly MoveStatusChangesSituationCard[];
}) {
  return (
    <SectionBlock
      id={region.id}
      className={cn(SECTION_SCROLL_MARGIN, "!pt-2 sm:!pt-3 md:!pt-4")}
      eyebrow={region.eyebrow}
      title={region.title}
      subtitle={region.subtitle}
      subtitleMarkdown
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-3 lg:gap-4">
        {cards.map((card) => (
          <article
            key={card.id}
            className={cn(
              "relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-copilot-primary/[0.08] bg-copilot-surface p-3.5 shadow-expatos-md sm:p-4",
              movingNlCardShadowHoverClass,
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Common pattern</p>
              <span className={CTA_PILL}>Start here</span>
            </div>
            <h3 className="mt-1 text-[0.9375rem] font-bold leading-tight tracking-tight text-copilot-text-primary sm:text-base">{card.title}</h3>
            <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Status change category">
              {card.chips.map((chip) => (
                <li key={chip}>
                  <span className={CHIP}>{chip}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 rounded-lg bg-white/70 px-3 py-2 text-[12px] leading-snug text-copilot-text-secondary ring-1 ring-copilot-primary/[0.05] sm:text-[13px] sm:leading-snug">
              {card.intro}
            </p>
            <div className={cn(SCAN_BOX, "mt-3")}>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Who this usually affects</p>
              <p className="mt-1 text-[12px] font-medium leading-snug text-copilot-text-primary sm:text-[13px]">
                <BoldInline text={card.whoItAffects} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
              </p>
            </div>
            <div className={cn(SCAN_BOX, "mt-2 border-l-amber-500/35 bg-amber-50/60")}>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Why it matters</p>
              <p className="mt-1 text-[12px] leading-snug text-copilot-text-secondary sm:text-[13px]">
                <BoldInline text={card.whyItMatters} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
              </p>
            </div>
            <div className={cn(SCAN_BOX, "mt-2 border-l-sky-500/35 bg-sky-50/60")}>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">What to think about next</p>
              <p className="mt-1 text-[12px] leading-snug text-copilot-text-secondary sm:text-[13px]">
                <BoldInline text={card.whatMattersNext} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
              </p>
            </div>
            <div className="mt-auto border-t border-copilot-primary/[0.06] pt-3">
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Best next page</p>
              <Link
                href={card.nextStep.href}
                aria-label={`${card.nextStep.ctaLabel}: ${card.title}`}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-copilot-bg-soft/90 px-3 py-2.5 text-sm font-bold text-copilot-primary ring-1 ring-copilot-primary/12 transition-colors hover:bg-copilot-bg-soft hover:text-copilot-primary-strong hover:ring-copilot-primary/20 sm:w-auto sm:justify-start sm:bg-transparent sm:px-0 sm:py-0 sm:ring-0"
              >
                {card.nextStep.ctaLabel}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}

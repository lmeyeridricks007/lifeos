import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_PANEL_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
} from "@/components/banking/bankingPageUi";
import type { BankingFeesAvoidableCostCard } from "@/src/data/banking/bankingFeesContent";

export type BankingAvoidableCostGridProps = {
  cards: readonly BankingFeesAvoidableCostCard[];
  className?: string;
};

/**
 * Neutral checklist cards: **what happens**, **why it adds cost**, **how to steer clear** — no alarm framing.
 */
export function BankingAvoidableCostGrid({ cards, className }: BankingAvoidableCostGridProps) {
  return (
    <div className={cn("grid min-w-0 max-w-full gap-3 sm:grid-cols-2 sm:gap-4", className)}>
      {cards.map((card, index) => (
        <article
          key={card.id}
          className={cn(
            BANKING_VISUAL_CARD_SHELL_CLASS,
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
          <div className={BANKING_VISUAL_CARD_BODY_CLASS}>
            <div className="flex flex-wrap items-center gap-2">
              <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>Avoidable cost</span>
              <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground">{card.title}</h3>
            <div className="mt-4 grid gap-3">
              <div className={BANKING_VISUAL_CARD_PANEL_CLASS}>
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted">What happens</p>
                <BoldParagraph
                  text={card.whatHappens}
                  className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
              </div>
              <div className={BANKING_VISUAL_CARD_PANEL_CLASS}>
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted">Why it costs money</p>
                <BoldParagraph
                  text={card.whyItCosts}
                  className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
              </div>
              <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/45 p-3 ring-1 ring-emerald-100/40">
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-emerald-900/80">How to avoid it</p>
                <BoldParagraph
                  text={card.howToAvoid}
                  className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

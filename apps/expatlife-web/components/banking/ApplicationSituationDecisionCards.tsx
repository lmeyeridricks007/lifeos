import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
} from "@/components/banking/bankingPageUi";

export type ApplicationSituationCard = {
  id: string;
  title: string;
  signs: readonly string[];
  whatToDo: readonly string[];
};

const LIST_CLASS = "mt-1.5 list-disc space-y-1 pl-4 text-sm marker:text-brand sm:space-y-1.5";

/**
 * Three-way triage (rejected vs delayed vs stuck) — banking card chrome, mobile-first grid.
 */
export function ApplicationSituationDecisionCards({
  cards,
  className,
  chipLabel = "Situation",
}: {
  cards: readonly ApplicationSituationCard[];
  className?: string;
  chipLabel?: string;
}) {
  if (!cards.length) return null;

  return (
    <div className={cn("grid min-w-0 grid-cols-1 gap-3 overflow-x-hidden sm:grid-cols-2 lg:grid-cols-3", className)} role="list">
      {cards.map((card) => (
        <article
          key={card.id}
          role="listitem"
          className={cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass, "min-w-0 max-w-full overflow-hidden")}
        >
          <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
          <div className={cn(BANKING_VISUAL_CARD_BODY_CLASS, "min-w-0")}>
            <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>{chipLabel}</span>
            <h3 className="mt-2 break-words text-base font-semibold leading-snug tracking-tight text-foreground">{card.title}</h3>
            <div className="mt-4 min-w-0 space-y-4 text-foreground-muted">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-strong">Signs</p>
                <ul className={LIST_CLASS} role="list">
                  {card.signs.map((s) => (
                    <li key={s} className="break-words leading-relaxed">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-brand/15 bg-brand/[0.04] px-3 py-2.5 ring-1 ring-brand/10 sm:px-3.5 sm:py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-strong">What to do</p>
                <ul className={cn(LIST_CLASS, "text-foreground-muted")} role="list">
                  {card.whatToDo.map((w) => (
                    <li key={w} className="break-words leading-relaxed">
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

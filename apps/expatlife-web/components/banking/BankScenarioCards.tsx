import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { getBankById, type BankId } from "@/src/data/banking/banks";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_PANEL_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
} from "@/components/banking/bankingPageUi";

export type BankScenarioCardVm = {
  title: string;
  recommendation: string;
  why: string;
  watchOuts: string;
  /** One or more editorial links (first is the primary CTA). */
  relatedLinks: readonly { href: string; label: string }[];
  /** Optional shortlist chips resolved from shared banking data. */
  relatedBankIds?: readonly BankId[];
};

export function BankScenarioCards({ cards, className }: { cards: readonly BankScenarioCardVm[]; className?: string }) {
  return (
    <div className={cn("mt-3 grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3", className)}>
      {cards.map((card, index) => (
        <article
          key={card.title}
          className={cn(
            BANKING_VISUAL_CARD_SHELL_CLASS,
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
          <div className={BANKING_VISUAL_CARD_BODY_CLASS}>
            <div className="flex flex-wrap items-center gap-2">
              <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>Scenario</span>
              <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground">{card.title}</h3>

            <div className="mt-4 rounded-xl border border-border/65 bg-white/70 px-3 py-3 ring-1 ring-border/20">
              <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-brand-strong">Recommendation</p>
              <BoldParagraph
                text={card.recommendation}
                className="mt-1.5 text-sm font-semibold leading-snug text-foreground [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </div>

            <div className="mt-3 grid gap-3">
              <div className={BANKING_VISUAL_CARD_PANEL_CLASS}>
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted">Why</p>
                <BoldParagraph
                  text={card.why}
                  className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
              </div>
              <div className="rounded-xl border border-amber-200/70 bg-amber-50/45 p-3 ring-1 ring-amber-100/40">
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-amber-900/80">Watch-outs</p>
                <BoldParagraph
                  text={card.watchOuts}
                  className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
              </div>
            </div>

            {card.relatedBankIds?.length ? (
              <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Related banks from data model">
                {card.relatedBankIds.map((id) => {
                  const b = getBankById(id);
                  if (!b) return null;
                  return (
                    <span
                      key={id}
                      className="inline-flex rounded-full border border-border/70 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground-muted ring-1 ring-border/25"
                    >
                      {b.name}
                    </span>
                  );
                })}
              </div>
            ) : null}
            <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-border/45 pt-3" role="list" aria-label="Related links">
              {card.relatedLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-xs font-semibold text-link hover:underline">
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

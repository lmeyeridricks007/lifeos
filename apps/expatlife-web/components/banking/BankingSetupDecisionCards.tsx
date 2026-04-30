import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_PANEL_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
} from "@/components/banking/bankingPageUi";

export type BankingSetupKind = "traditional" | "digital" | "hybrid";

export type BankingSetupDecisionCardVm = {
  title: string;
  setup: BankingSetupKind;
  why: string;
  watchOut: string;
  link: { href: string; label: string };
};

const SETUP_BADGE: Record<
  BankingSetupKind,
  { label: string; pillClass: string }
> = {
  traditional: {
    label: "Traditional-first",
    pillClass: "border-emerald-800/25 bg-emerald-50/90 text-emerald-950 ring-emerald-800/10",
  },
  digital: {
    label: "Digital-first",
    pillClass: "border-sky-700/25 bg-sky-50/90 text-sky-950 ring-sky-700/10",
  },
  hybrid: {
    label: "Hybrid",
    pillClass: "border-violet-700/25 bg-violet-50/90 text-violet-950 ring-violet-700/10",
  },
};

/**
 * Editorial “if this sounds like you” cards — **not** personalised advice or live pricing.
 */
export function BankingSetupDecisionCards({ cards, className }: { cards: readonly BankingSetupDecisionCardVm[]; className?: string }) {
  return (
    <div className={cn("mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4", className)}>
      {cards.map((card) => {
        const badge = SETUP_BADGE[card.setup];
        return (
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
                <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>Decision path</span>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.13em] ring-1",
                    badge.pillClass
                  )}
                >
                  {badge.label}
                </span>
              </div>
              <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground">{card.title}</h3>
              <div className="mt-4 grid gap-3">
                <div className={BANKING_VISUAL_CARD_PANEL_CLASS}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted">Why</p>
                  <BoldParagraph
                    text={card.why}
                    className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                  />
                </div>
                <div className="rounded-xl border border-amber-200/70 bg-amber-50/45 p-3 ring-1 ring-amber-100/40">
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-amber-900/85">Watch-out</p>
                  <BoldParagraph
                    text={card.watchOut}
                    className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                  />
                </div>
              </div>
              <Link href={card.link.href} className="mt-auto border-t border-border/45 pt-3 text-xs font-semibold text-link hover:underline">
                {card.link.label} →
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

"use client";

import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { getBankById, type BankId } from "@/src/data/banking/banks";
import { movingNlCardMicroLiftClass, movingNlFaqCardInnerClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { Accordion } from "@/components/ui/accordion";
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

export type BankScenarioCardsProps = {
  cards: readonly BankScenarioCardVm[];
  className?: string;
  /** Larger recommendation panel for pillar pages that need faster scanning. */
  recommendationEmphasis?: boolean;
  /** `grid` = bordered scenario cards (default). `accordion` = moving-pillar FAQ-style stack. */
  layout?: "grid" | "accordion";
};

function ScenarioRelatedBanks({
  relatedBankIds,
  palette,
}: {
  relatedBankIds?: readonly BankId[];
  palette: "grid" | "accordion";
}) {
  if (!relatedBankIds?.length) return null;
  const chipClass =
    palette === "grid"
      ? "inline-flex rounded-full border border-border/70 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground-muted ring-1 ring-border/25"
      : "inline-flex rounded-full border border-copilot-primary/15 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-copilot-text-muted ring-1 ring-copilot-primary/[0.06]";
  return (
    <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Related banks from data model">
      {relatedBankIds.map((id) => {
        const b = getBankById(id);
        if (!b) return null;
        return (
          <span key={id} className={chipClass}>
            {b.name}
          </span>
        );
      })}
    </div>
  );
}

function ScenarioRelatedLinks({
  links,
  palette,
}: {
  links: readonly { href: string; label: string }[];
  palette: "grid" | "accordion";
}) {
  const linkClass =
    palette === "grid"
      ? "text-xs font-semibold text-link hover:underline"
      : "text-sm font-bold text-copilot-primary hover:text-copilot-primary-strong hover:underline";
  const borderClass = palette === "grid" ? "border-border/45" : "border-copilot-primary/[0.08]";
  return (
    <ul className={cn("mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t pt-3", borderClass)} role="list" aria-label="Related links">
      {links.map((l) => (
        <li key={l.href + l.label}>
          <Link href={l.href} className={linkClass}>
            {l.label} →
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ScenarioBodyBlocks({
  card,
  recommendationEmphasis,
  palette,
}: {
  card: BankScenarioCardVm;
  recommendationEmphasis?: boolean;
  palette: "grid" | "accordion";
}) {
  const copilot = palette === "accordion";
  const recBox = cn(
    "mt-4 rounded-xl px-3 py-3",
    copilot
      ? cn(
          "border border-copilot-primary/15 bg-copilot-bg-soft/60 ring-1 ring-copilot-primary/[0.06]",
          recommendationEmphasis && "border-copilot-primary/25 bg-copilot-bg-soft/80 px-3.5 py-3.5 ring-copilot-primary/10"
        )
      : cn(
          "border border-border/65 bg-white/70 ring-1 ring-border/20",
          recommendationEmphasis && "border-brand-strong/20 bg-brand/[0.04] px-3.5 py-3.5 ring-2 ring-brand-strong/10"
        )
  );
  const recLabel = copilot
    ? "text-[10px] font-bold uppercase tracking-[0.13em] text-copilot-primary"
    : "text-[10px] font-bold uppercase tracking-[0.13em] text-brand-strong";
  const recText = cn(
    "mt-1.5 font-semibold leading-snug [&_strong]:font-semibold",
    copilot
      ? cn(
          "text-copilot-text-primary [&_strong]:text-copilot-text-primary",
          recommendationEmphasis ? "text-[0.9375rem] sm:text-base" : "text-sm"
        )
      : cn(
          "text-foreground [&_strong]:text-foreground",
          recommendationEmphasis ? "text-[0.9375rem] sm:text-base" : "text-sm"
        )
  );
  const whyPanel = copilot
    ? "rounded-xl border border-slate-200/80 bg-white/85 p-3 ring-1 ring-slate-900/[0.04]"
    : BANKING_VISUAL_CARD_PANEL_CLASS;
  const whyLabel = copilot
    ? "text-[10px] font-bold uppercase tracking-[0.13em] text-copilot-text-muted"
    : "text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted";
  const whyText = copilot
    ? "mt-1.5 text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
    : "mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground";
  const watchBox = copilot
    ? "rounded-xl border border-amber-200/70 bg-amber-50/50 p-3 ring-1 ring-amber-100/50"
    : "rounded-xl border border-amber-200/70 bg-amber-50/45 p-3 ring-1 ring-amber-100/40";
  const watchLabel = copilot ? "text-[10px] font-bold uppercase tracking-[0.13em] text-amber-900/75" : "text-[10px] font-bold uppercase tracking-[0.13em] text-amber-900/80";
  const watchText = whyText;

  return (
    <>
      <div className={recBox}>
        <p className={recLabel}>What often works</p>
        <BoldParagraph text={card.recommendation} className={recText} />
      </div>

      <div className="mt-3 grid gap-3">
        <div className={whyPanel}>
          <p className={whyLabel}>Why it helps</p>
          <BoldParagraph text={card.why} className={whyText} />
        </div>
        <div className={watchBox}>
          <p className={watchLabel}>Things to watch</p>
          <BoldParagraph text={card.watchOuts} className={watchText} />
        </div>
      </div>

      <ScenarioRelatedBanks relatedBankIds={card.relatedBankIds} palette={palette} />
      <ScenarioRelatedLinks links={card.relatedLinks} palette={palette} />
    </>
  );
}

export function BankScenarioCards({ cards, className, recommendationEmphasis, layout = "grid" }: BankScenarioCardsProps) {
  if (layout === "accordion") {
    return (
      <div className={cn("mt-5 sm:mt-6", movingNlFaqCardInnerClass, className)}>
        <Accordion
          density="comfortable"
          tone="copilot"
          allowMultiple
          initialOpenId="bank-scenario-0"
          items={cards.map((card, index) => ({
            id: `bank-scenario-${index}`,
            title: (
              <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-copilot-text-muted">Example</span>
                <span className="inline-flex h-6 min-w-[1.75rem] items-center justify-center rounded-full border border-copilot-primary/20 bg-copilot-bg-soft/90 px-1.5 text-[10px] font-bold tabular-nums text-copilot-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 basis-full font-semibold leading-snug text-copilot-text-primary sm:basis-auto">
                  {card.title}
                </span>
              </span>
            ),
            content: (
              <div className="space-y-1 pt-0.5">
                <ScenarioBodyBlocks card={card} recommendationEmphasis={recommendationEmphasis} palette="accordion" />
              </div>
            ),
          }))}
        />
      </div>
    );
  }

  return (
    <div className={cn("mt-3 grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3", className)}>
      {cards.map((card, index) => (
        <article
          key={card.title}
          className={cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass, "min-w-0 max-w-full")}
        >
          <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
          <div className={BANKING_VISUAL_CARD_BODY_CLASS}>
            <div className="flex flex-wrap items-center gap-2">
              <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>Scenario</span>
              <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground">{card.title}</h3>

            <ScenarioBodyBlocks card={card} recommendationEmphasis={recommendationEmphasis} palette="grid" />
          </div>
        </article>
      ))}
    </div>
  );
}

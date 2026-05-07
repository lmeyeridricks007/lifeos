"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { moneyExpatTaxesCautionChip, type MoneyExpatTaxesCautionTier } from "@/src/content/money/expat-taxes-nl/moneyExpatTaxesCautionUi";

export type TaxGuideStartingPointScenario = {
  id: string;
  pickerLabel: string;
  title: string;
  whyItMatters: string;
  recommendedNextAction: string;
  steps: readonly { label: string; href: string }[];
  /** Optional checklist lines (expat taxes scenario picker). */
  whatToCheck?: readonly string[];
  /** Caution tier for expat scenario cards — ignored when absent (e.g. broad tax guide). */
  cautionLevel?: MoneyExpatTaxesCautionTier;
};

type TaxGuideStartingPointSelectorProps = {
  scenarios: readonly TaxGuideStartingPointScenario[];
};

const proseMuted = "[&_strong]:font-semibold [&_strong]:text-foreground";

export function TaxGuideStartingPointSelector({ scenarios }: TaxGuideStartingPointSelectorProps) {
  const baseId = useId().replace(/:/g, "");
  const [activeId, setActiveId] = useState(scenarios[0]?.id ?? "");

  const active = scenarios.find((s) => s.id === activeId) ?? scenarios[0];
  if (!active) return null;

  const tabListId = `${baseId}-tabs`;
  const panelId = `${baseId}-panel`;

  return (
    <div className="space-y-5">
      <div
        id={tabListId}
        role="tablist"
        aria-label="Pick the situation closest to you"
        className="flex max-w-full gap-1 overflow-x-auto rounded-2xl border border-border/70 bg-surface-muted/55 p-1 shadow-sm ring-1 ring-border/15 [-ms-overflow-style:none] [scrollbar-width:none] sm:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {scenarios.map((s) => {
          const selected = s.id === active.id;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${s.id}`}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(s.id)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
                e.preventDefault();
                const i = scenarios.findIndex((x) => x.id === active.id);
                if (i < 0) return;
                let next = i;
                if (e.key === "ArrowRight") next = (i + 1) % scenarios.length;
                if (e.key === "ArrowLeft") next = (i - 1 + scenarios.length) % scenarios.length;
                if (e.key === "Home") next = 0;
                if (e.key === "End") next = scenarios.length - 1;
                const id = scenarios[next]?.id;
                if (id) {
                  setActiveId(id);
                  document.getElementById(`${baseId}-tab-${id}`)?.focus();
                }
              }}
              className={cn(
                "relative min-h-[42px] min-w-max flex-1 rounded-xl border px-3 py-2 text-center text-sm font-semibold outline-none transition sm:min-w-0 sm:px-2.5 lg:px-3.5",
                transitionInteractive,
                activeBrightnessPress,
                selected
                  ? "border-brand/35 bg-white text-brand-strong shadow-sm ring-1 ring-brand/20"
                  : "border-transparent bg-transparent text-foreground-muted hover:bg-white/70 hover:text-foreground"
              )}
            >
              {selected ? (
                <span
                  className={cn("pointer-events-none absolute inset-x-2 bottom-0 h-0.5 rounded-full", movingNlSignatureGradientClass)}
                  aria-hidden
                />
              ) : null}
              <span className="block whitespace-nowrap leading-snug">{s.pickerLabel}</span>
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-live="polite"
        aria-labelledby={`${baseId}-tab-${active.id}`}
        className="relative overflow-hidden rounded-2xl border border-border/90 bg-surface-raised p-5 shadow-card ring-1 ring-border/15 sm:p-6"
      >
        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
        <div className="flex flex-wrap items-start justify-between gap-2 pt-1">
          <h3 className="min-w-0 flex-1 text-base font-semibold tracking-tight text-foreground sm:text-lg">{active.title}</h3>
          {active.cautionLevel ? (
            <span
              className={cn(
                "shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em]",
                moneyExpatTaxesCautionChip[active.cautionLevel].chipClass
              )}
            >
              {moneyExpatTaxesCautionChip[active.cautionLevel].label}
            </span>
          ) : null}
        </div>

        <div className="mt-4 space-y-4 text-sm">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">In plain words</p>
            <BoldParagraph
              text={active.whyItMatters}
              className={cn("mt-1.5 leading-relaxed text-foreground-muted", proseMuted)}
            />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Suggested next step</p>
            <BoldParagraph
              text={active.recommendedNextAction}
              className={cn("mt-1.5 leading-relaxed text-foreground-muted", proseMuted)}
            />
          </div>
          {active.whatToCheck && active.whatToCheck.length > 0 ? (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Quick checks</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-4 text-foreground-muted" role="list">
                {active.whatToCheck.map((line) => (
                  <li key={line} className="leading-relaxed marker:text-foreground-muted">
                    <BoldParagraph text={line} className={cn("text-[13px] sm:text-sm", proseMuted)} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Links to open</p>
            <ul className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap" role="list">
              {active.steps.map((step) => (
                <li key={step.href + step.label}>
                  <Link
                    href={step.href}
                    className="inline-flex min-h-[44px] items-center rounded-xl border border-brand/20 bg-brand/5 px-4 py-2 text-sm font-semibold text-brand-strong transition hover:border-brand/35 hover:bg-brand/10 sm:min-h-0"
                  >
                    {step.label}
                    <span className="ml-1.5 text-brand-strong/80" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

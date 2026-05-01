"use client";

import { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/cn";
import type { BankComparisonProviderResult } from "@/src/lib/tools/bank-comparison/types";
import { SCORE_DIMENSIONS, type ScoreDimension } from "@/src/lib/tools/bank-comparison/types";
import { bankToolCardClass, DIM_LABELS } from "./bankComparisonUi";
import { BankScoreBreakdown } from "./BankScoreBreakdown";

function topContributionDims(breakdown: BankComparisonProviderResult["weightedBreakdown"], limit: number): ScoreDimension[] {
  return [...SCORE_DIMENSIONS]
    .map((dim) => ({ dim, c: breakdown[dim].contribution }))
    .sort((a, b) => b.c - a.c)
    .slice(0, limit)
    .map((x) => x.dim);
}

function outboundRel(match: BankComparisonProviderResult): string {
  return match.affiliateProviderKey ? "noopener noreferrer sponsored" : "noopener noreferrer";
}

function providerKindLabel(providerType: BankComparisonProviderResult["providerType"]): string {
  switch (providerType) {
    case "traditional":
      return "Classic Dutch bank";
    case "digital":
      return "App-first bank";
    case "transfer_specialist":
      return "Money transfer service";
  }
}

export type BankFitCardProps = {
  match: BankComparisonProviderResult;
  defaultBreakdownOpen?: boolean;
  className?: string;
};

const ctaBase =
  "inline-flex min-h-[44px] w-full min-w-0 items-center justify-center gap-1 rounded-xl border px-4 text-sm font-normal outline-none transition-colors focus-visible:ring-2 focus-visible:ring-copilot-primary/40 focus-visible:ring-offset-2 sm:w-auto";

const FIT_RING_SIZE = 56;
const FIT_RING_STROKE = 3.5;

/** Circular planning score (0–100) with track + gradient arc. */
function FitScoreRing({ score }: { score: number }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `fit-score-ring-${uid}`;
  const clamped = Math.min(100, Math.max(0, score));
  const cx = FIT_RING_SIZE / 2;
  const cy = FIT_RING_SIZE / 2;
  const r = (FIT_RING_SIZE - FIT_RING_STROKE) / 2 - 1;
  const circumference = 2 * Math.PI * r;
  const dashOffset = circumference * (1 - clamped / 100);

  return (
    <div
      className="relative flex shrink-0 items-center justify-center"
      style={{ width: FIT_RING_SIZE, height: FIT_RING_SIZE }}
      aria-hidden
    >
      <svg width={FIT_RING_SIZE} height={FIT_RING_SIZE} className="-rotate-90 drop-shadow-sm">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          strokeWidth={FIT_RING_STROKE}
          className="text-copilot-primary/[0.14]"
          stroke="currentColor"
        />
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          strokeWidth={FIT_RING_STROKE}
          strokeLinecap="round"
          stroke={`url(#${gradId})`}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="transition-[stroke-dashoffset] duration-500 ease-out"
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-0.5">
        <span className="text-xl font-normal tabular-nums leading-none tracking-tight text-copilot-primary">{score}</span>
        <span className="mt-0.5 text-[9px] font-normal uppercase tracking-[0.14em] text-copilot-text-muted">of 100</span>
      </div>
    </div>
  );
}

function DimensionScoreChip({
  label,
  scoreOutOf5,
}: {
  label: string;
  scoreOutOf5: number;
}) {
  const pct = Math.min(100, Math.max(0, (scoreOutOf5 / 5) * 100));
  return (
    <li className="min-w-0 rounded-xl border border-copilot-primary/12 bg-gradient-to-b from-white to-copilot-bg-soft/60 px-2.5 py-2 shadow-sm ring-1 ring-copilot-primary/[0.04]">
      <p className="line-clamp-2 min-h-[2.25rem] text-[10px] font-normal leading-snug text-copilot-text-primary sm:text-[11px]">{label}</p>
      <div className="mt-2 flex items-center gap-2">
        <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-copilot-bg-soft" role="presentation" aria-hidden>
          <div
            className="h-full rounded-full bg-gradient-to-r from-copilot-primary/85 to-copilot-accent/90 transition-[width] duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="shrink-0 tabular-nums text-[11px] font-normal text-copilot-text-muted">{scoreOutOf5}/5</span>
      </div>
    </li>
  );
}

export function BankFitCard({ match, defaultBreakdownOpen = false, className }: BankFitCardProps) {
  const chips = topContributionDims(match.weightedBreakdown, 3);
  const rel = outboundRel(match);
  const pricingHref = match.pricingPageUrl?.trim() || match.externalUrl;

  return (
    <article className={bankToolCardClass(cn("flex min-w-0 flex-col overflow-hidden break-words", className))}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          {match.logoSrc ? (
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-copilot-primary/10">
              <Image
                src={match.logoSrc}
                alt={`${match.name} logo`}
                width={40}
                height={40}
                sizes="40px"
                className="object-contain p-1"
              />
            </div>
          ) : (
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft text-xs font-normal text-copilot-text-primary"
              aria-hidden
            >
              {match.name.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div className="min-w-0">
            <h4 className="truncate text-base font-normal text-copilot-text-primary">{match.name}</h4>
            <p className="text-[11px] font-normal uppercase tracking-wide text-copilot-text-muted">
              {providerKindLabel(match.providerType)}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1" aria-label={`Planning score ${match.fitScore} out of 100`}>
          <FitScoreRing score={match.fitScore} />
          <span className="text-[10px] font-normal uppercase tracking-[0.12em] text-copilot-text-muted">Planning fit</span>
        </div>
      </div>
      <p className="mt-2 text-xs leading-snug text-copilot-text-muted">{match.fitScoreLabel}</p>

      <ul
        className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3"
        aria-label="Topics where this bank scored highest for you — each bar shows strength from 1 to 5"
      >
        {chips.map((dim) => (
          <DimensionScoreChip key={dim} label={DIM_LABELS[dim]} scoreOutOf5={match.weightedBreakdown[dim].score} />
        ))}
      </ul>

      <p className="mt-3 text-sm text-copilot-text-secondary">{match.bestUseCase}</p>

      {match.featuresSummary ? (
        <div className="mt-4 rounded-lg border border-copilot-primary/10 bg-copilot-bg-soft/40 px-3 py-3">
          <p className="text-xs font-normal uppercase tracking-[0.12em] text-copilot-text-muted">Accounts and everyday use</p>
          <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{match.featuresSummary}</p>
        </div>
      ) : null}

      <div className="mt-4">
        <p className="text-xs font-normal uppercase tracking-[0.12em] text-copilot-text-muted">Where it scores highest for you</p>
        <ul className="mt-2 space-y-1.5 text-xs text-copilot-text-secondary">
          {match.whyItFits.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copilot-accent" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      {match.watchOuts.length ? (
        <div className="mt-4 rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-950">
          <p className="font-normal">Heads-up before you apply</p>
          <ul className="mt-1 list-disc pl-4">
            {match.watchOuts.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-4 space-y-2 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/30 px-3 py-3 sm:px-4">
        <p className="text-xs font-normal uppercase tracking-[0.12em] text-copilot-text-muted">Costs and fees</p>
        <p className="text-sm leading-snug text-copilot-text-secondary">{match.pricingCaveat}</p>
        <p className="text-sm leading-snug text-copilot-text-secondary">
          <span className="font-normal text-copilot-text-primary">Pricing shape: </span>
          {match.costModelLabel}
        </p>
        {match.costExamples.length ? (
          <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm leading-snug text-copilot-text-secondary">
            {match.costExamples.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : null}
        <p className="mt-2 text-[11px] leading-snug text-copilot-text-muted">
          Euro amounts are rough editorial examples for planning (2026) — always confirm on the official price list from the provider.
        </p>
      </div>

      <BankScoreBreakdown breakdown={match.weightedBreakdown} defaultOpen={defaultBreakdownOpen} className="mt-4" />

      <div className="mt-4 flex flex-col gap-2">
        <a
          href={match.externalUrl}
          target="_blank"
          rel={rel}
          className={cn(
            ctaBase,
            "border-copilot-primary/25 bg-copilot-primary text-white hover:bg-copilot-primary/90",
          )}
        >
          Check provider
          <ExternalLink className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
          <span className="sr-only"> — {match.name} (opens in a new tab)</span>
        </a>
        {match.bankingGuideHref ? (
          <Link
            href={match.bankingGuideHref}
            prefetch={false}
            className={cn(
              ctaBase,
              "border-copilot-primary/20 bg-white text-copilot-text-primary shadow-expatos-sm hover:border-copilot-primary/35",
            )}
          >
            Compare features
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
            <span className="sr-only"> — ExpatCopilot banking guide</span>
          </Link>
        ) : null}
        <a
          href={pricingHref}
          target="_blank"
          rel={rel}
          className={cn(
            ctaBase,
            "border-copilot-primary/20 bg-copilot-bg-soft/80 text-copilot-text-primary hover:bg-copilot-bg-soft",
          )}
        >
          Check current pricing
          <ExternalLink className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
          <span className="sr-only"> — {match.name} (opens in a new tab)</span>
        </a>
      </div>

      {match.editorialDisclosure ? (
        <p className="mt-3 text-[11px] leading-snug text-copilot-text-muted">{match.editorialDisclosure}</p>
      ) : null}

      <div className="mt-3 space-y-1 border-t border-copilot-primary/10 pt-3 text-[11px] text-copilot-text-muted">
        {match.lastReviewed ? (
          <p>
            <span className="text-copilot-text-secondary">Last reviewed by our editors: </span>
            {match.lastReviewed}
          </p>
        ) : null}
        {match.reviewNotes ? <p>{match.reviewNotes}</p> : null}
      </div>
    </article>
  );
}

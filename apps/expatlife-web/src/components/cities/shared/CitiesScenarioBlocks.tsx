import type { ReactNode } from "react";
import Link from "next/link";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export type CitiesScenarioPickVm = {
  name: string;
  href: string;
  why: string;
  highlights?: string[];
};

export const CITIES_SCENARIO_PICK_TILE_CLASS = cn(
  "relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-0 bg-white/90 p-5 shadow-expatos-sm ring-1 ring-slate-900/[0.04] sm:p-6",
  movingNlCardMicroLiftClass
);

const pickTitleLinkClass =
  "pt-0.5 text-base font-bold tracking-tight text-copilot-text-primary transition-colors hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2";

const scenarioInlineLinkClass =
  "font-semibold text-link underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-1";

export function CitiesScenarioIntroPanel({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-copilot-primary/10 bg-gradient-to-br from-white via-copilot-bg-soft/25 to-copilot-bg-soft/55 px-4 py-4 sm:mt-5 sm:rounded-2xl sm:px-5 sm:py-5">
      {children}
    </div>
  );
}

export function CitiesScenarioTradeoffList({ lines }: { lines: string[] }) {
  if (!lines.length) return null;
  return (
    <ul className="m-0 mt-3 list-none space-y-2.5 p-0 sm:mt-3.5 sm:space-y-3" role="list">
      {lines.map((t) => (
        <li key={t} className="flex gap-3 text-sm leading-relaxed text-copilot-text-secondary">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-primary/50"
            aria-hidden
          />
          <BoldInline
            text={t}
            className="min-w-0 [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
          />
        </li>
      ))}
    </ul>
  );
}

export function CitiesScenarioPickTile({ pick }: { pick: CitiesScenarioPickVm }) {
  const hasBullets = Boolean(pick.highlights?.length);

  return (
    <div className={CITIES_SCENARIO_PICK_TILE_CLASS}>
      <div className={cn("absolute inset-x-0 top-0 h-1 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
      <Link href={pick.href} className={pickTitleLinkClass}>
        {pick.name}
      </Link>
      {hasBullets ? (
        <>
          <p className="mt-3 text-sm leading-relaxed text-copilot-text-secondary">
            <BoldInline
              text={pick.why}
              className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
              linkClassName={scenarioInlineLinkClass}
            />
          </p>
          <ul className="m-0 mt-3.5 list-none space-y-2.5 border-t border-copilot-primary/[0.08] pt-3.5 sm:space-y-2.5" role="list">
            {pick.highlights!.map((line, i) => (
              <li key={`${pick.href}-h-${i}`} className="flex gap-2.5 text-sm leading-snug text-copilot-text-secondary sm:leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" aria-hidden />
                <BoldInline
                  text={line}
                  className="min-w-0 [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                  linkClassName={scenarioInlineLinkClass}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <BoldParagraph
          text={pick.why}
          className="mt-3 text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
          linkClassName={scenarioInlineLinkClass}
        />
      )}
    </div>
  );
}

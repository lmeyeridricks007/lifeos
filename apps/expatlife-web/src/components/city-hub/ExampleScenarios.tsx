import type { CityExampleScenario } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export function ExampleScenarios({ scenarios }: { scenarios: CityExampleScenario[] }) {
  if (!scenarios?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
      {scenarios.map((s, i) => (
        <article
          key={i}
          className={cn(
            "relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-slate-900/[0.05]",
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="relative z-[1] text-lg font-bold tracking-tight text-copilot-text-primary">{s.title}</h3>
          <p className="relative z-[1] mt-2 text-sm leading-relaxed text-copilot-text-secondary">{s.summary}</p>
          <div className="relative z-[1] mt-4 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Needs first</p>
            <ul className="space-y-1 text-sm text-copilot-text-secondary">
              {s.needsFirst.map((n, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-copilot-accent" aria-hidden>
                    ✓
                  </span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative z-[1] mt-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Key documents</p>
            <p className="mt-1 text-sm text-copilot-text-secondary">{s.documents.join("; ")}</p>
          </div>
          <div className="relative z-[1] mt-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Timing</p>
            <p className="mt-1 text-sm text-copilot-text-secondary">{s.timing}</p>
          </div>
          {s.mistakes?.length ? (
            <div className="relative z-[1] mt-3 rounded-xl border border-amber-200/80 bg-amber-50/90 px-3 py-2 ring-1 ring-amber-200/60">
              <p className="text-xs font-semibold text-amber-900">Common mistakes</p>
              <ul className="mt-1 space-y-0.5 text-xs text-amber-950/90">
                {s.mistakes.map((m, j) => (
                  <li key={j}>• {m}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

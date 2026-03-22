import type { CityExampleScenario } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";

const accents = [
  "border-l-blue-500 bg-blue-50/60",
  "border-l-teal-500 bg-teal-50/60",
  "border-l-amber-500 bg-amber-50/60",
  "border-l-violet-500 bg-violet-50/60",
] as const;

export function ExampleScenarios({ scenarios }: { scenarios: CityExampleScenario[] }) {
  if (!scenarios?.length) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {scenarios.map((s, i) => (
        <article
          key={i}
          className={cn(
            "rounded-xl border border-slate-200/80 p-5 shadow-sm",
            "border-l-4",
            accents[i % accents.length]
          )}
        >
          <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.summary}</p>
          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Needs first
            </p>
            <ul className="space-y-1 text-sm text-slate-700">
              {s.needsFirst.map((n, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-emerald-500" aria-hidden>✓</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Key documents
            </p>
            <p className="mt-1 text-sm text-slate-700">{s.documents.join("; ")}</p>
          </div>
          <div className="mt-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Timing
            </p>
            <p className="mt-1 text-sm text-slate-700">{s.timing}</p>
          </div>
          {s.mistakes?.length ? (
            <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/80 px-3 py-2">
              <p className="text-xs font-semibold text-amber-800">Common mistakes</p>
              <ul className="mt-1 space-y-0.5 text-xs text-amber-900">
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

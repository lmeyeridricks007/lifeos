import Link from "next/link";
import type { CitiesExampleScenario } from "@/src/lib/cities-overview/types";

export function CitiesExampleScenarios({ scenarios }: { scenarios: CitiesExampleScenario[] }) {
  if (!scenarios?.length) return null;

  return (
    <div className="space-y-6">
      {scenarios.map((s, i) => (
        <article key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-slate-900">{s.title}</h3>
          <p className="mt-2 text-sm text-slate-700">{s.summary}</p>
          <p className="mt-2 text-sm text-slate-700">
            <span className="font-medium">Why this city:</span> {s.whyCity}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            <span className="font-medium">Tradeoffs:</span> {s.tradeoffs}
          </p>
          <p className="mt-2 text-sm text-slate-700">
            <span className="font-medium">Next steps:</span> {s.nextSteps}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {s.comingSoon ? (
              <span className="rounded bg-slate-100 px-2 py-1 text-sm text-slate-500">{s.cityName} guide – coming soon</span>
            ) : (
              <Link href={s.cityHref} className="rounded bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800">
                {s.cityName} guide →
              </Link>
            )}
            {s.internalLinks?.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-brand-700 hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

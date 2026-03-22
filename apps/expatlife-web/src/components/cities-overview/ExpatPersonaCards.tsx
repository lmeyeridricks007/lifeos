import Link from "next/link";
import type { ExpatPersona } from "@/src/lib/cities-overview/types";
import { cn } from "@/lib/cn";

export function ExpatPersonaCards({ personas }: { personas: ExpatPersona[] }) {
  if (!personas?.length) return null;

  return (
    <div className="space-y-6">
      {personas.map((persona) => (
        <article
          key={persona.id}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-900">{persona.title}</h3>
          <ul className="mt-3 space-y-2">
            {persona.recommendedCities.map((rec) => (
              <li key={rec.name} className="flex flex-wrap items-baseline gap-2 text-sm">
                {rec.comingSoon ? (
                  <span className="font-medium text-slate-600">{rec.name}</span>
                ) : (
                  <Link href={rec.href} className="font-medium text-brand-700 hover:underline">
                    {rec.name}
                  </Link>
                )}
                {rec.comingSoon && (
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">Soon</span>
                )}
                <span className="text-slate-600">— {rec.why}</span>
              </li>
            ))}
          </ul>
          {persona.watchOut ? (
            <p className="mt-3 border-t border-slate-100 pt-3 text-xs text-slate-600">
              <span className="font-medium text-slate-700">Watch out:</span> {persona.watchOut}
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

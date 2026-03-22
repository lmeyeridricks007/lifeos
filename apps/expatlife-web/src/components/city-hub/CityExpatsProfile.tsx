import type { CityExpatsProfile as CityExpatsProfileType } from "@/src/lib/city-hub/types";

export function CityExpatsProfile({ data }: { data: CityExpatsProfileType }) {
  if (!data.profiles?.length) return null;

  return (
    <section id="who-moves-here" className="scroll-mt-24 mt-12 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {data.heading}
      </h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {data.profiles.map((profile, i) => (
          <li
            key={i}
            className="flex gap-2 rounded-lg border border-slate-200/80 bg-slate-50/50 px-4 py-3 text-sm text-slate-700"
          >
            <span className="text-emerald-500 shrink-0" aria-hidden>✓</span>
            {profile}
          </li>
        ))}
      </ul>
    </section>
  );
}

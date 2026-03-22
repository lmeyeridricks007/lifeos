import type { CityOverviewSection as CityOverviewSectionType } from "@/src/lib/city-hub/types";

export function CityOverview({ data }: { data: CityOverviewSectionType }) {
  if (!data.paragraphs?.length) return null;

  return (
    <section id="living-in-city" className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {data.heading}
      </h2>
      <div className="space-y-4">
        {data.paragraphs.map((p, i) => (
          <p key={i} className="text-slate-700 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

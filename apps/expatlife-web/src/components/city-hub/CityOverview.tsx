import type { CityOverviewSection as CityOverviewSectionType } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";

export function CityOverview({
  data,
  sectionId = "living-in-city",
  className,
}: {
  data: CityOverviewSectionType;
  /** Anchor for TOC (default: living-in-city). */
  sectionId?: string;
  className?: string;
}) {
  if (!data.paragraphs?.length) return null;

  return (
    <section id={sectionId} className={cn("scroll-mt-24 space-y-4", className)}>
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

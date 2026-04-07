import type { CityOverviewSection as CityOverviewSectionType } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";
import { SectionBlock } from "@/components/page/pillar-template";

export function CityOverview({
  data,
  sectionId = "living-in-city",
  className,
}: {
  data: CityOverviewSectionType;
  sectionId?: string;
  className?: string;
}) {
  if (!data.paragraphs?.length) return null;

  return (
    <SectionBlock id={sectionId} title={data.heading} compact className={cn("scroll-mt-24", className)}>
      <div className="space-y-4">
        {data.paragraphs.map((p, i) => (
          <p key={i} className="text-copilot-text-secondary leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </SectionBlock>
  );
}

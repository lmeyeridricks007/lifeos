import type { CityExpatsProfile as CityExpatsProfileType } from "@/src/lib/city-hub/types";
import { SectionBlock } from "@/components/page/pillar-template";
import { cn } from "@/lib/cn";

export function CityExpatsProfile({ data }: { data: CityExpatsProfileType }) {
  if (!data.profiles?.length) return null;

  return (
    <SectionBlock id="who-moves-here" title={data.heading} compact className="scroll-mt-24">
      <ul className="grid gap-2 sm:grid-cols-2">
        {data.profiles.map((profile, i) => (
          <li
            key={i}
            className={cn(
              "flex gap-2 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/60 px-4 py-3 text-sm text-copilot-text-secondary ring-1 ring-copilot-primary/[0.04]"
            )}
          >
            <span className="shrink-0 text-copilot-accent" aria-hidden>
              ✓
            </span>
            {profile}
          </li>
        ))}
      </ul>
    </SectionBlock>
  );
}

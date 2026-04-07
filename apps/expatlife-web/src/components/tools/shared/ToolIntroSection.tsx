import type { ToolExplanatorySection } from "@/src/lib/tools/shared/toolPageContent";
import { cn } from "@/lib/cn";

export type ToolIntroSectionProps = {
  section: ToolExplanatorySection;
  className?: string;
};

/**
 * Single explanatory section with title and body (prose). Used for "What this tool covers", "Who it's for", etc.
 */
export function ToolIntroSection({ section, className = "" }: ToolIntroSectionProps) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none text-foreground-muted prose-p:leading-relaxed prose-li:marker:text-brand/60",
        className
      )}
    >
      <h2 className="!mt-0 text-lg font-semibold text-foreground">{section.title}</h2>
      {section.subtitle ? (
        <p className="text-sm text-foreground-faint">{section.subtitle}</p>
      ) : null}
      <div className="mt-2 space-y-3">
        {section.body.map((paragraph, i) => (
          <p key={i} className="text-sm md:text-base">
            {paragraph}
          </p>
        ))}
      </div>
      {section.bullets?.length ? (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm md:text-base">
          {section.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

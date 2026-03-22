import type { ToolExplanatorySection } from "@/src/lib/tools/shared/toolPageContent";

export type ToolIntroSectionProps = {
  section: ToolExplanatorySection;
  className?: string;
};

/**
 * Single explanatory section with title and body (prose). Used for "What this tool covers", "Who it's for", etc.
 */
export function ToolIntroSection({ section, className = "" }: ToolIntroSectionProps) {
  return (
    <div className={`prose prose-slate max-w-none text-slate-600 prose-p:leading-relaxed ${className}`}>
      <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
      {section.subtitle ? (
        <p className="text-sm text-slate-500">{section.subtitle}</p>
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

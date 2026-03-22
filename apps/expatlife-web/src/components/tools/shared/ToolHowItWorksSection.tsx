import type { ToolExplanatorySection } from "@/src/lib/tools/shared/toolPageContent";

export type ToolHowItWorksSectionProps = {
  title?: string;
  steps: string[];
  className?: string;
};

/**
 * Short "How it works" or numbered steps section. Indexable HTML.
 */
export function ToolHowItWorksSection({
  title = "How it works",
  steps,
  className = "",
}: ToolHowItWorksSectionProps) {
  return (
    <div className={className}>
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600 md:text-base">
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

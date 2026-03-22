import type { ToolPhaseOverviewItem } from "@/src/lib/tools/shared/toolPageContent";

export type ToolPhaseOverviewProps = {
  title: string;
  phases: ToolPhaseOverviewItem[];
  className?: string;
};

/**
 * Phase or timeline overview (e.g. preparation → final prep → travel → arrival). Indexable.
 */
export function ToolPhaseOverview({ title, phases, className = "" }: ToolPhaseOverviewProps) {
  return (
    <div className={className}>
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <ul className="mt-3 space-y-3">
        {phases.map((p) => (
          <li key={p.phase} className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <span className="font-medium text-slate-800">{p.label}</span>
            <p className="mt-1 text-sm text-slate-600">{p.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

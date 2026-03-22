"use client";

/**
 * Mode-aware title and optional reset for tool results.
 * Default mode: "Common X" with subtle badge.
 * Personalized mode: "Your X" with reset link.
 */

type ToolResultsHeaderProps = {
  title: string;
  mode: "default" | "personalized";
  onReset?: () => void;
  resetLabel?: string;
};

export function ToolResultsHeader({
  title,
  mode,
  onReset,
  resetLabel = "Show common view again",
}: ToolResultsHeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        {mode === "default" && (
          <span
            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600"
            aria-label="Generic view"
          >
            Common
          </span>
        )}
      </div>
      {mode === "personalized" && onReset && (
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-slate-800 hover:decoration-slate-500"
        >
          {resetLabel}
        </button>
      )}
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { trackChildcareEstimator } from "@/lib/analytics/track";
import { CHILDCARE_WORKED_EXAMPLES } from "@/src/content/tools/childcare/childcareExamples";
import type { ChildcareEstimatorInput } from "@/src/types/tools/childcare";

type Props = {
  onApply: (input: ChildcareEstimatorInput) => void;
};

export function ChildcareWorkedExamples({ onApply }: Props) {
  return (
    <div>
      <p className="text-sm leading-relaxed text-copilot-text-secondary">
        Each preset loads realistic Dutch cities, care types, and income bands. Use{" "}
        <strong className="font-semibold text-copilot-text-primary">The Hague — 3 days daycare</strong> and{" "}
        <strong className="font-semibold text-copilot-text-primary">3 days gastouder</strong> back-to-back to compare net impact
        for the same schedule, or pair <strong className="font-semibold text-copilot-text-primary">Utrecht — 4 days</strong>{" "}
        with your own baseline when a parent adds a work day.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {CHILDCARE_WORKED_EXAMPLES.map((ex) => (
          <div
            key={ex.id}
            className="flex flex-col rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 text-left shadow-expatos-sm"
          >
            <p className="font-semibold text-copilot-text-primary">{ex.title}</p>
            <p className="mt-1 flex-1 text-sm leading-relaxed text-copilot-text-secondary">{ex.description}</p>
            <Button
              type="button"
              variant="secondary"
              className="mt-3 min-h-9 w-full rounded-lg border-copilot-primary/25 px-3 py-2 text-sm"
              onClick={() => {
                onApply(ex.input);
                trackChildcareEstimator("example_preset_applied", { example_id: ex.id });
              }}
            >
              Load example
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

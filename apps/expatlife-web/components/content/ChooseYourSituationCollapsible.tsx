"use client";

import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { SegmentedControl } from "@/components/ui/segmented-control";

export type SituationInput = {
  key: string;
  label: string;
  type: "segmented";
  options: Array<{ value: string; label: string }>;
};

export type SituationSelections = Record<string, string>;

type ChooseYourSituationCollapsibleProps = {
  title: string;
  subtitle?: string;
  inputs: SituationInput[];
  value: SituationSelections;
  onChange: (next: SituationSelections) => void;
  /** Whether the panel is expanded by default */
  defaultOpen?: boolean;
  className?: string;
};

/**
 * Reusable, collapsible "Choose your situation" block. Use on the move hub
 * (defaultOpen true) or on the pillar above scenario cards (defaultOpen false).
 */
export function ChooseYourSituationCollapsible({
  title,
  subtitle,
  inputs,
  value,
  onChange,
  defaultOpen = false,
  className,
}: ChooseYourSituationCollapsibleProps) {
  return (
    <CollapsiblePanel
      title={title}
      defaultOpen={defaultOpen}
      className={className}
      titleClassName="text-lg font-semibold md:text-xl"
    >
      {subtitle ? (
        <p className="mb-4 text-sm text-slate-600">{subtitle}</p>
      ) : null}
      <div className="space-y-6">
        {inputs.map((input) => (
          <div key={input.key}>
            <p className="mb-2 text-sm font-medium text-slate-700">{input.label}</p>
            <SegmentedControl
              name={input.key}
              options={input.options}
              value={value[input.key] ?? ""}
              onChange={(optionValue) => onChange({ ...value, [input.key]: optionValue })}
            />
          </div>
        ))}
      </div>
    </CollapsiblePanel>
  );
}

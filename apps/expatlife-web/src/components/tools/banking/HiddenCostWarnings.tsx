"use client";

import { InfoBox } from "@/components/ui/info-box";

export type HiddenCostWarningsProps = {
  warnings: readonly string[];
  title?: string;
  className?: string;
};

export function HiddenCostWarnings({
  warnings,
  title = "Extra costs to watch for",
  className,
}: HiddenCostWarningsProps) {
  if (!warnings.length) return null;

  return (
    <InfoBox
      title={title}
      titleClassName="font-normal"
      variant="warn"
      className={className ?? "border-copilot-primary/15 bg-copilot-bg-soft/80 text-copilot-text-primary"}
    >
      <ul className="list-disc space-y-1 pl-4 text-sm text-copilot-text-secondary">
        {warnings.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>
    </InfoBox>
  );
}

"use client";

import { InfoBox } from "@/components/ui/info-box";

export type BankComparisonMethodologyProps = {
  lines: readonly string[];
  title?: string;
  className?: string;
};

export function BankComparisonMethodology({
  lines,
  title = "Methodology",
  className,
}: BankComparisonMethodologyProps) {
  if (!lines.length) return null;

  return (
    <InfoBox
      title={title}
      titleClassName="font-normal"
      variant="info"
      className={className ?? "border-copilot-primary/12 bg-copilot-bg-soft/80 text-copilot-text-primary"}
    >
      <ul className="list-disc space-y-2 pl-4 text-sm text-copilot-text-secondary">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </InfoBox>
  );
}

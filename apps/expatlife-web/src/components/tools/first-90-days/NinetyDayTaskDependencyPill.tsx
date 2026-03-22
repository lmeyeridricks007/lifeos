"use client";

const DEPENDENCY_LABELS: Record<string, string> = {
  "address-registration": "Address registration",
  bsn: "BSN",
  "bank-account": "Bank account",
  "employer-onboarding": "Employer onboarding",
  "health-insurance-choice": "Health insurance",
  "housing-stability": "Housing stability",
  "mobile-access": "Mobile access",
  digid: "DigiD",
};

export type NinetyDayTaskDependencyPillProps = {
  dependencyIds: string[];
  className?: string;
};

export function NinetyDayTaskDependencyPill({
  dependencyIds,
  className = "",
}: NinetyDayTaskDependencyPillProps) {
  if (!dependencyIds?.length) return null;
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      <span className="text-xs text-slate-500">Depends on:</span>
      {dependencyIds.map((id) => (
        <span
          key={id}
          className="inline-flex rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
        >
          {DEPENDENCY_LABELS[id] ?? id.replace(/-/g, " ")}
        </span>
      ))}
    </div>
  );
}

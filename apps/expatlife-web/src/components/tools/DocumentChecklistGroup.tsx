"use client";

import { DocumentChecklistItemRow } from "@/src/components/tools/document-readiness/DocumentChecklistItemRow";
import type { ChecklistStatus } from "./DocumentStatusToggle";
import type { DocumentChecklistItem } from "@/src/lib/tools/document-readiness/types";

export function DocumentChecklistGroup({
  title,
  categoryId,
  items,
  localStatuses,
  onStatusChange,
  renderHelpfulServices,
}: {
  title: string;
  categoryId: string;
  items: DocumentChecklistItem[];
  localStatuses: Record<string, ChecklistStatus>;
  onStatusChange: (id: string, status: ChecklistStatus) => void;
  renderHelpfulServices?: (categories: string[]) => React.ReactNode;
}) {
  const readyCount = items.filter((item) => (localStatuses[item.id] ?? "missing") === "ready").length;
  const missingCount = items.filter((item) => (localStatuses[item.id] ?? "missing") === "missing").length;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6" id={`doc-category-${categoryId}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
          {readyCount} ready / {missingCount} missing
        </span>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <DocumentChecklistItemRow
            key={item.id}
            item={item}
            localStatus={localStatuses[item.id] ?? "missing"}
            onStatusChange={onStatusChange}
            renderHelpfulServices={renderHelpfulServices}
          />
        ))}
      </ul>
    </section>
  );
}

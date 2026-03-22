"use client";

import { useState } from "react";
import { CheckCircle2, ChevronUp } from "lucide-react";
import { DocumentStatusToggle, type ChecklistStatus } from "@/src/components/tools/DocumentStatusToggle";
import { DocumentRequirementBadge } from "./DocumentRequirementBadge";
import { DocumentItemDetails } from "./DocumentItemDetails";
import type { DocumentChecklistItem } from "@/src/lib/tools/document-readiness/types";

export function DocumentChecklistItemRow({
  item,
  localStatus,
  onStatusChange,
  renderHelpfulServices,
}: {
  item: DocumentChecklistItem;
  localStatus: ChecklistStatus;
  onStatusChange: (id: string, status: ChecklistStatus) => void;
  renderHelpfulServices?: (categories: string[]) => React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const showApostille = item.apostilleOrLegalization?.mayBeRelevant;
  const showTranslation = item.translation?.mayBeRelevant;

  return (
    <li
      className={`rounded-xl border p-3.5 ${
        localStatus === "ready"
          ? "border-emerald-200 bg-emerald-50/50"
          : localStatus === "not_applicable"
            ? "border-slate-200 bg-slate-50/70"
            : "border-amber-200 bg-amber-50/50"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-[14rem] flex-1">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <div>
              <p className="font-medium text-slate-900">{item.title}</p>
              <p className="mt-0.5 text-sm text-slate-600">{item.shortDescription}</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {showApostille ? <DocumentRequirementBadge type="apostille" /> : null}
                {showTranslation ? <DocumentRequirementBadge type="translation" /> : null}
              </div>
              {expanded ? null : (
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="mt-2 text-xs font-medium text-brand-600 hover:text-brand-700"
                >
                  View details
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <DocumentStatusToggle value={localStatus} onChange={(next) => onStatusChange(item.id, next)} />
          {expanded ? (
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="flex items-center gap-0.5 text-xs font-medium text-slate-600 hover:text-slate-800"
            >
              <ChevronUp className="h-3.5 w-3.5" /> Hide details
            </button>
          ) : null}
        </div>
      </div>
      {expanded ? (
        <DocumentItemDetails doc={item} renderHelpfulServices={renderHelpfulServices} />
      ) : null}
    </li>
  );
}

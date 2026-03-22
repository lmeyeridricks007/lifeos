import { FileCheck, FileText } from "lucide-react";
import type { CityHubPageData } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";

export function CityChecklist({ data }: { data: CityHubPageData }) {
  const checklist = data.registration.checklist || [];
  if (!checklist.length) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 bg-gradient-to-r from-teal-50/80 to-white px-5 py-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
          <FileCheck className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Documents to prepare
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">
            Gather these before your registration appointment
          </p>
        </div>
      </div>

      {/* List as visual cards */}
      <ul className="divide-y divide-slate-100">
        {checklist.map((item, i) => (
          <li
            key={i}
            className={cn(
              "flex items-start gap-4 px-5 py-3.5 transition-colors hover:bg-slate-50/70",
              i % 2 === 1 && "bg-slate-50/30"
            )}
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm"
              aria-hidden
            >
              <FileText className="h-4 w-4" />
            </span>
            <span className="pt-1 text-sm text-slate-700 leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

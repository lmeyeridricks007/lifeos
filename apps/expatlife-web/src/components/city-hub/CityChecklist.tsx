import { FileCheck, FileText } from "lucide-react";
import type { CityHubPageData } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";

export function CityChecklist({ data }: { data: CityHubPageData }) {
  const checklist = data.registration.checklist || [];
  if (!checklist.length) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface-raised shadow-sm ring-1 ring-border/30">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border/80 bg-gradient-to-r from-accent-muted/80 to-surface-raised px-5 py-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-accent">
          <FileCheck className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Documents to prepare
          </h3>
          <p className="text-sm text-foreground-muted mt-0.5">
            Gather these before your registration appointment
          </p>
        </div>
      </div>

      {/* List as visual cards */}
      <ul className="divide-y divide-border/80">
        {checklist.map((item, i) => (
          <li
            key={i}
            className={cn(
              "flex items-start gap-4 px-5 py-3.5 transition-colors hover:bg-surface-muted/70",
              i % 2 === 1 && "bg-surface-muted/30"
            )}
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-raised text-foreground-muted shadow-sm"
              aria-hidden
            >
              <FileText className="h-4 w-4" />
            </span>
            <span className="pt-1 text-sm text-foreground leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

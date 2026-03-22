import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ContentTableProps = {
  headers: string[];
  children: ReactNode;
  /** Min width for horizontal scroll on small screens */
  minWidth?: string;
  className?: string;
};

const HEADER_CLASS = "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600";
const CELL_CLASS = "px-4 py-3 text-sm text-slate-700";
const ROW_BASE = "border-b border-slate-100 transition-colors last:border-0 hover:bg-slate-50/50";

/**
 * Reusable styled table for editorial content.
 * Use with ContentTableRow and ContentTableCell for consistent visuals.
 */
export function ContentTable({
  headers,
  children,
  minWidth = "360px",
  className,
}: ContentTableProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      <table className="w-full border-collapse" style={{ minWidth }}>
        <thead>
          <tr className="border-b border-slate-200 bg-slate-100/80">
            {headers.map((h, i) => (
              <th key={i} className={HEADER_CLASS}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export type ContentTableRowProps = {
  children: ReactNode;
  className?: string;
};

export function ContentTableRow({ children, className }: ContentTableRowProps) {
  return (
    <tr className={cn(ROW_BASE, "even:bg-slate-50/40", className)}>
      {children}
    </tr>
  );
}

export type ContentTableCellProps = {
  children: ReactNode;
  className?: string;
  /** Bold/emphasis for primary column */
  emphasis?: boolean;
};

export function ContentTableCell({
  children,
  className,
  emphasis,
}: ContentTableCellProps) {
  return (
    <td
      className={cn(
        CELL_CLASS,
        emphasis && "font-medium text-slate-800",
        className
      )}
    >
      {children}
    </td>
  );
}

/** Badge variant for status-like cells (Yes, Usually, Often, etc.) */
const BADGE_VARIANTS: Record<string, string> = {
  Yes: "bg-emerald-100 text-emerald-800",
  Usually: "bg-sky-100 text-sky-800",
  Often: "bg-blue-100 text-blue-800",
  Recommended: "bg-amber-100 text-amber-800",
  Important: "bg-violet-100 text-violet-800",
};

export type TableBadgeProps = {
  value: string;
  className?: string;
};

export function TableBadge({ value, className }: TableBadgeProps) {
  const variant = BADGE_VARIANTS[value] ?? "bg-slate-100 text-slate-700";
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant,
        className
      )}
    >
      {value}
    </span>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { transitionColors } from "@/lib/ui/interaction";

export type ContentTableProps = {
  headers: string[];
  children: ReactNode;
  /** Min width for horizontal scroll on small screens */
  minWidth?: string;
  className?: string;
};

const HEADER_CLASS =
  "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-foreground-muted";
const CELL_CLASS = "px-4 py-3 text-sm text-foreground";
const ROW_BASE = cn(
  transitionColors,
  "border-b border-border/80 last:border-0 hover:bg-surface-muted/50 motion-reduce:hover:bg-transparent"
);

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
        "-mx-px max-w-full overflow-x-auto overscroll-x-contain rounded-card border border-border bg-surface-raised shadow-card ring-1 ring-border/10 touch-pan-x",
        className
      )}
    >
      <table className="w-full min-w-0 border-collapse" style={{ minWidth }}>
        <thead>
          <tr className="border-b border-border bg-surface-muted/80">
            {headers.map((h, i) => (
              <th key={i} className={HEADER_CLASS} scope="col">
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
    <tr className={cn(ROW_BASE, "even:bg-surface-muted/25", className)}>
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

export function ContentTableCell({ children, className, emphasis }: ContentTableCellProps) {
  return (
    <td className={cn(CELL_CLASS, emphasis && "font-medium text-foreground", className)}>{children}</td>
  );
}

/** Badge variant for status-like cells (Yes, Usually, Often, etc.) — semantic tokens */
const BADGE_VARIANTS: Record<string, string> = {
  Yes: "border border-success-border/60 bg-success-muted text-success",
  Usually: "border border-info-border/50 bg-info-muted text-info",
  Often: "border border-brand/20 bg-brand-muted text-brand-strong",
  Recommended: "border border-warning-border/60 bg-warning-muted text-warning",
  Important: "border border-border bg-accent-muted text-accent",
};

export type TableBadgeProps = {
  value: string;
  className?: string;
};

export function TableBadge({ value, className }: TableBadgeProps) {
  const variant =
    BADGE_VARIANTS[value] ?? "border border-border bg-surface-muted text-foreground-muted";
  return (
    <span
      className={cn(
        "inline-flex rounded-pill px-2.5 py-0.5 text-xs font-medium leading-none",
        variant,
        className
      )}
    >
      {value}
    </span>
  );
}

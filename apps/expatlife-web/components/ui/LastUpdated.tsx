/**
 * Visible "Last updated" label for trust and E-E-A-T.
 * Use on key guides, city pages, service category pages, and methodology/editorial pages.
 */
import { cn } from "@/lib/cn";

type Props = {
  /** Display value, e.g. "March 2025" or "2025-03-11". */
  date: string;
  /** Optional label; default "Last updated". */
  label?: string;
  className?: string;
};

export function LastUpdated({ date, label = "Last updated", className }: Props) {
  return (
    <p className={cn("text-sm leading-relaxed text-foreground-muted", className)} role="doc-dateline">
      {label}: <span className="tabular-nums">{date}</span>
    </p>
  );
}

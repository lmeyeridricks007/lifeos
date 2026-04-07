import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Info, CheckCircle2, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/cn";

type InfoBoxProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  icon?: ReactNode;
  variant?: "info" | "success" | "warn";
};

const styles = {
  info: "border-info-border bg-info-muted text-foreground",
  success: "border-success-border bg-success-muted text-foreground",
  warn: "border-warning-border bg-warning-muted text-foreground",
} as const;

const iconTone = {
  info: "text-info",
  success: "text-success",
  warn: "text-warning",
} as const;

const defaultIcon = {
  info: <Info className="h-4 w-4" />,
  success: <CheckCircle2 className="h-4 w-4" />,
  warn: <TriangleAlert className="h-4 w-4" />,
} as const;

export function InfoBox({ title, icon, variant = "info", className, children, ...props }: InfoBoxProps) {
  return (
    <div className={cn("rounded-card border p-4", styles[variant], className)} {...props}>
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-surface-raised/80",
            iconTone[variant]
          )}
        >
          {icon ?? defaultIcon[variant]}
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <div className="mt-1 text-sm leading-6 text-foreground-muted">{children}</div>
        </div>
      </div>
    </div>
  );
}

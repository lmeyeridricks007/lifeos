import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Info, CheckCircle2, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/cn";

type InfoBoxProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  icon?: ReactNode;
  variant?: "info" | "success" | "warn";
};

const styles = {
  info: "border-sky-200 bg-sky-50",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  warn: "border-amber-200 bg-amber-50 text-amber-900",
} as const;

const defaultIcon = {
  info: <Info className="h-4 w-4" />,
  success: <CheckCircle2 className="h-4 w-4" />,
  warn: <TriangleAlert className="h-4 w-4" />,
} as const;

export function InfoBox({ title, icon, variant = "info", className, children, ...props }: InfoBoxProps) {
  return (
    <div className={cn("rounded-2xl border p-4", styles[variant], className)} {...props}>
      <div className="flex items-start gap-3">
        <span className={cn("mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/70", variant === "info" && "text-sky-600")}>{icon ?? defaultIcon[variant]}</span>
        <div className={variant === "info" ? "text-slate-900" : ""}>
          <p className="text-sm font-semibold">{title}</p>
          <div className="mt-1 text-sm leading-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import { cn } from "@/lib/cn";
import { ProviderLogo } from "./ProviderLogo";

export type CompactItem = {
  provider: AffiliateProvider;
  reason: string;
};

type Props = {
  items: CompactItem[];
  /** Matches JSON guide sidebar / moving-pillar surfaces */
  variant?: "default" | "copilot";
};

export function AffiliateCompactList({ items, variant = "default" }: Props) {
  if (!items.length) return null;
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.provider.id}
          className={cn(
            "flex min-w-0 items-start gap-3 p-3",
            variant === "copilot"
              ? "rounded-xl border-0 bg-copilot-bg-soft/90 shadow-expatos-sm ring-1 ring-copilot-primary/10"
              : "rounded-lg border border-slate-100 bg-white"
          )}
        >
          <ProviderLogo provider={item.provider} size="sm" className="shrink-0" />
          <div className="min-w-0 flex-1 overflow-hidden">
            <span
              className={cn(
                "block truncate font-medium",
                variant === "copilot" ? "text-copilot-text-primary" : "text-slate-900"
              )}
              title={item.provider.name}
            >
              {item.provider.name}
            </span>
            <p
              className={cn(
                "mt-0.5 text-xs",
                variant === "copilot" ? "text-copilot-text-secondary" : "text-slate-500"
              )}
            >
              {item.reason}
            </p>
            <a
              href={item.provider.cta.href}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className={cn(
                "mt-2 inline-block whitespace-nowrap rounded-xl px-2.5 py-1.5 text-xs font-semibold transition",
                variant === "copilot"
                  ? "bg-copilot-primary text-white shadow-expatos-sm hover:bg-copilot-primary-strong"
                  : "border border-slate-200 font-medium text-slate-700 hover:bg-slate-50"
              )}
              title={item.provider.cta.label}
            >
              View <span aria-hidden>→</span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import { ProviderLogo } from "./ProviderLogo";

export type CompactItem = {
  provider: AffiliateProvider;
  reason: string;
};

type Props = {
  items: CompactItem[];
};

export function AffiliateCompactList({ items }: Props) {
  if (!items.length) return null;
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.provider.id} className="flex min-w-0 items-start gap-3 rounded-lg border border-slate-100 bg-white p-3">
          <ProviderLogo provider={item.provider} size="sm" className="shrink-0" />
          <div className="min-w-0 flex-1 overflow-hidden">
            <span className="block truncate font-medium text-slate-900" title={item.provider.name}>
              {item.provider.name}
            </span>
            <p className="mt-0.5 text-xs text-slate-500">{item.reason}</p>
            <a
              href={item.provider.cta.href}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="mt-2 inline-block whitespace-nowrap rounded border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
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

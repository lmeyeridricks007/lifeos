import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import type { ComparisonField } from "@/src/lib/affiliates/types";
import { ProviderLogo } from "./ProviderLogo";
import {
  ContentTable,
  ContentTableRow,
  ContentTableCell,
} from "@/components/ui/content-table";

export type ComparisonItem = {
  provider: AffiliateProvider;
  reason: string;
  meta?: Record<string, string>;
};

type Props = {
  items: ComparisonItem[];
  comparisonFields: ComparisonField[];
};

function ComparisonRow({
  item,
  fields,
}: {
  item: ComparisonItem;
  fields: ComparisonField[];
}) {
  return (
    <ContentTableRow>
      <ContentTableCell emphasis>
        <div className="flex items-center gap-2">
          <ProviderLogo provider={item.provider} size="sm" />
          <div>
            <span className="font-medium text-slate-900">{item.provider.name}</span>
            <p className="text-xs text-slate-500">{item.reason}</p>
          </div>
        </div>
      </ContentTableCell>
      {fields.map((f) => (
        <ContentTableCell key={f.key}>
          {item.meta?.[f.key] ?? "—"}
        </ContentTableCell>
      ))}
      <ContentTableCell className="text-right">
        <a
          href={item.provider.cta.href}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="inline-flex rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          {item.provider.cta.label}
        </a>
      </ContentTableCell>
    </ContentTableRow>
  );
}

export function AffiliateComparison({ items, comparisonFields }: Props) {
  if (!items.length || !comparisonFields.length) return null;
  const headers = [
    "Provider",
    ...comparisonFields.map((f) => f.label),
    "CTA",
  ];
  return (
    <ContentTable headers={headers} minWidth="500px">
      {items.map((item) => (
        <ComparisonRow key={item.provider.id} item={item} fields={comparisonFields} />
      ))}
    </ContentTable>
  );
}

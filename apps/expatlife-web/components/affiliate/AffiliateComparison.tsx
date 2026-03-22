import Image from "next/image";
import Link from "next/link";
import type { AffiliateProvider } from "@/lib/affiliates";
import {
  ContentTable,
  ContentTableRow,
  ContentTableCell,
} from "@/components/ui/content-table";

const AFFILIATE_DISCLOSURE = "We may earn a commission if you use this link.";

type AffiliateComparisonProps = {
  providers: AffiliateProvider[];
  categoryTitle?: string;
};

export function AffiliateComparison({ providers, categoryTitle }: AffiliateComparisonProps) {
  if (!providers.length) return null;

  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
      {categoryTitle ? (
        <h3 className="mb-4 text-lg font-semibold text-slate-900">{categoryTitle}</h3>
      ) : null}
      <ContentTable
        className="border-blue-200 shadow-none"
        headers={["Provider", "Features", "CTA"]}
        minWidth="500px"
      >
        {providers.map((provider) => (
          <ContentTableRow key={provider.id}>
            <ContentTableCell emphasis>
              <div className="flex items-center gap-2">
                {provider.logo ? (
                  <div className="relative h-8 w-12 shrink-0">
                    <Image
                      src={provider.logo}
                      alt=""
                      width={48}
                      height={32}
                      className="object-contain object-left"
                    />
                  </div>
                ) : null}
                <span className="font-medium text-slate-900">{provider.title}</span>
              </div>
            </ContentTableCell>
            <ContentTableCell>
              {provider.features?.length ? (
                <ul className="list-disc space-y-0.5 pl-4">
                  {provider.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              ) : (
                <span className="text-slate-400">—</span>
              )}
            </ContentTableCell>
            <ContentTableCell className="text-right">
              <Link
                href={`/out/${provider.id}`}
                rel="sponsored"
                className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Visit
              </Link>
            </ContentTableCell>
          </ContentTableRow>
        ))}
      </ContentTable>
      <p className="mt-4 text-xs text-slate-500">{AFFILIATE_DISCLOSURE}</p>
    </div>
  );
}

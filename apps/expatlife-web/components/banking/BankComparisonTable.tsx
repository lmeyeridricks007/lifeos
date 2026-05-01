"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { ContentTableCell, ContentTableRow } from "@/components/ui/content-table";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";
import {
  bankMonthlyFeeDisplay,
  bankToComparisonRow,
  type Bank,
  type BankComparisonRowVm,
  type BankEnglishSupport,
  type BankKind,
  type BankOnboarding,
  type BankBsnRequired,
} from "@/src/data/banking/banks";

/** Shared surface for bank comparison tables (reuse on banking subpages with custom columns). */
export const bankComparisonTableSurfaceClass = cn(
  "-mx-px max-w-full overflow-x-auto overscroll-x-contain rounded-card border border-border bg-surface-raised shadow-card ring-1 ring-border/10 touch-pan-x"
);

const TABLE_WRAP = bankComparisonTableSurfaceClass;

const HEADER_TH = "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-foreground-muted";
const HEADER_BUTTON = cn(
  "group inline-flex min-h-9 w-full max-w-full items-center gap-1 rounded-lg px-1 py-0.5 text-left -mx-1",
  "text-foreground-muted hover:bg-surface-muted/90 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
);

export type BankComparisonTableProps = {
  banks: readonly Bank[];
  /** When true, desktop headers toggle sort; mobile shows a compact sort control. */
  sortable?: boolean;
  className?: string;
  bankLinks?: Partial<Record<string, BankAffiliateLink>>;
};

export type BankAffiliateLink = {
  href: string;
  label: string;
  partnerSlug: string;
  isAffiliate: boolean;
};

type SortColumn =
  | "name"
  | "type"
  | "monthlyFee"
  | "englishSupport"
  | "onboarding"
  | "bsnRequired"
  | "bestFor"
  | "keyDrawback";

type SortDir = "asc" | "desc";

const COL_LABEL: Record<SortColumn, string> = {
  name: "Bank",
  type: "Type",
  monthlyFee: "Monthly fee",
  englishSupport: "English",
  onboarding: "Onboarding",
  bsnRequired: "BSN",
  bestFor: "Best for",
  keyDrawback: "Key drawback",
};

const ONBOARD_RANK: Record<BankOnboarding, number> = { easy: 0, medium: 1, hard: 2 };
const TYPE_RANK: Record<BankKind, number> = { traditional: 0, digital: 1 };
const ENGLISH_RANK: Record<BankEnglishSupport, number> = { yes: 0, partial: 1 };

function bsnRank(b: BankBsnRequired): number {
  if (b === true) return 0;
  if (b === "partial") return 1;
  return 2;
}

function compareBanks(a: Bank, b: Bank, col: SortColumn, dir: SortDir): number {
  const sign = dir === "asc" ? 1 : -1;
  let cmp = 0;
  switch (col) {
    case "name":
      cmp = a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
      break;
    case "type":
      cmp = TYPE_RANK[a.type] - TYPE_RANK[b.type];
      break;
    case "monthlyFee":
      cmp = bankMonthlyFeeDisplay(a).localeCompare(bankMonthlyFeeDisplay(b), undefined, { sensitivity: "base" });
      break;
    case "englishSupport":
      cmp = ENGLISH_RANK[a.englishSupport] - ENGLISH_RANK[b.englishSupport];
      break;
    case "onboarding":
      cmp = ONBOARD_RANK[a.onboarding] - ONBOARD_RANK[b.onboarding];
      break;
    case "bsnRequired":
      cmp = bsnRank(a.bsnRequired) - bsnRank(b.bsnRequired);
      break;
    case "bestFor":
      cmp = a.bestFor.localeCompare(b.bestFor, undefined, { sensitivity: "base" });
      break;
    case "keyDrawback":
      cmp = a.keyDrawback.localeCompare(b.keyDrawback, undefined, { sensitivity: "base" });
      break;
    default:
      cmp = 0;
  }
  return cmp * sign;
}

function BankCell({ row, link }: { row: BankComparisonRowVm; link?: BankAffiliateLink }) {
  const content = (
    <div className="flex min-w-[130px] items-center gap-2">
      {row.logoSrc ? (
        <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-border/80 bg-surface-muted">
          <Image
            src={normalizeExternalProviderLogoSrc(row.logoSrc)}
            alt={row.logoAlt}
            width={36}
            height={36}
            className="object-contain p-1"
          />
        </span>
      ) : (
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-surface-muted text-[10px] font-bold text-foreground-muted"
          aria-hidden
        >
          {row.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="font-semibold text-foreground">{row.name}</span>
    </div>
  );

  if (!link) return content;

  return (
    <a
      href={link.href}
      target="_blank"
      rel={link.isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
      aria-label={link.label}
      className="inline-flex rounded-lg underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      data-outbound-link-type="provider"
      data-outbound-partner-slug={link.partnerSlug}
      data-outbound-link-text={link.label}
      data-outbound-page-context="best-banks-expats-comparison"
    >
      {content}
    </a>
  );
}

function SortAffix({ active, dir }: { active: boolean; dir: SortDir | null }) {
  if (!active || !dir) {
    return <ChevronsUpDown className="h-3.5 w-3.5 shrink-0 opacity-40 group-hover:opacity-70" aria-hidden />;
  }
  return dir === "asc" ? (
    <ChevronUp className="h-3.5 w-3.5 shrink-0 text-foreground" aria-hidden />
  ) : (
    <ChevronDown className="h-3.5 w-3.5 shrink-0 text-foreground" aria-hidden />
  );
}

export function BankComparisonTable({ banks: banksProp, sortable = false, className, bankLinks }: BankComparisonTableProps) {
  const [sort, setSort] = useState<{ col: SortColumn; dir: SortDir } | null>(null);

  const orderedBanks = useMemo(() => {
    const list = [...banksProp];
    if (sortable && sort) {
      list.sort((a, b) => compareBanks(a, b, sort.col, sort.dir));
    }
    return list;
  }, [banksProp, sortable, sort]);

  const rows = useMemo(() => orderedBanks.map(bankToComparisonRow), [orderedBanks]);

  const toggleSort = (col: SortColumn) => {
    setSort((prev) => {
      if (!prev || prev.col !== col) return { col, dir: "asc" };
      if (prev.dir === "asc") return { col, dir: "desc" };
      return null;
    });
  };

  if (!banksProp.length) return null;

  const mobileSortValue = sort ? `${sort.col}:${sort.dir}` : "";
  const mobileSortOptions: { value: string; label: string }[] = [
    { value: "", label: "Default order" },
    ...(
      [
        "name",
        "type",
        "monthlyFee",
        "englishSupport",
        "onboarding",
        "bsnRequired",
        "bestFor",
        "keyDrawback",
      ] as const
    ).flatMap((col) => [
      { value: `${col}:asc`, label: `${COL_LABEL[col]} · ascending` },
      { value: `${col}:desc`, label: `${COL_LABEL[col]} · descending` },
    ]),
  ];

  return (
    <div className={cn("space-y-4", className)}>
      {sortable ? (
        <div className="md:hidden">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">Sort by</span>
            <select
              className="min-h-11 w-full rounded-xl border border-border bg-surface-raised px-3 py-2 text-sm font-medium text-foreground shadow-card ring-1 ring-border/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
              value={mobileSortValue}
              onChange={(e) => {
                const v = e.target.value;
                if (!v) {
                  setSort(null);
                  return;
                }
                const [col, dir] = v.split(":") as [SortColumn, SortDir];
                setSort({ col, dir });
              }}
              aria-label="Sort bank comparison"
            >
              {mobileSortOptions.map((o) => (
                <option key={o.value || "default"} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      ) : null}

      <div className="hidden md:block">
        <div className={TABLE_WRAP}>
          <table className="w-full min-w-0 border-collapse" style={{ minWidth: "1040px" }}>
            <thead>
              <tr className="border-b border-border bg-surface-muted/80">
                {(Object.keys(COL_LABEL) as SortColumn[]).map((col) => (
                  <th
                    key={col}
                    className={HEADER_TH}
                    scope="col"
                    aria-sort={
                      sortable && sort?.col === col ? (sort.dir === "asc" ? "ascending" : "descending") : sortable ? "none" : undefined
                    }
                  >
                    {sortable ? (
                      <button type="button" className={HEADER_BUTTON} onClick={() => toggleSort(col)}>
                        <span className="min-w-0 truncate">{COL_LABEL[col]}</span>
                        <SortAffix active={sort?.col === col} dir={sort?.col === col ? sort.dir : null} />
                      </button>
                    ) : (
                      COL_LABEL[col]
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <ContentTableRow key={row.id}>
                  <ContentTableCell emphasis className="align-top text-[13px] leading-snug">
                    <BankCell row={row} link={bankLinks?.[row.id]} />
                  </ContentTableCell>
                  <ContentTableCell className="align-top text-[13px] leading-snug text-foreground-muted whitespace-nowrap">{row.type}</ContentTableCell>
                  <ContentTableCell className="align-top text-[13px] leading-snug text-foreground-muted">{row.monthlyFee}</ContentTableCell>
                  <ContentTableCell className="align-top text-[13px] leading-snug text-foreground-muted whitespace-nowrap">{row.englishSupport}</ContentTableCell>
                  <ContentTableCell className="align-top text-[13px] leading-snug text-foreground-muted whitespace-nowrap">{row.onboarding}</ContentTableCell>
                  <ContentTableCell className="align-top text-[13px] leading-snug text-foreground-muted whitespace-nowrap">{row.bsnRequired}</ContentTableCell>
                  <ContentTableCell className="align-top text-[13px] leading-snug text-foreground-muted max-w-[220px]">{row.bestFor}</ContentTableCell>
                  <ContentTableCell className="align-top text-[13px] leading-snug text-foreground-muted max-w-[200px]">{row.keyDrawback}</ContentTableCell>
                </ContentTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4 md:hidden" role="list" aria-label="Bank comparison">
        {rows.map((row) => (
          <article
            key={row.id}
            role="listitem"
            className="rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 space-y-4 sm:p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <BankCell row={row} link={bankLinks?.[row.id]} />
              <span className="shrink-0 rounded-full bg-surface-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-foreground-muted ring-1 ring-border/60">
                {row.type}
              </span>
            </div>
            <dl className="grid grid-cols-1 gap-3 text-sm">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Monthly fee</dt>
                <dd className="mt-0.5 leading-snug text-foreground-muted">{row.monthlyFee}</dd>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">English</dt>
                  <dd className="mt-0.5 leading-snug text-foreground-muted">{row.englishSupport}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Onboarding</dt>
                  <dd className="mt-0.5 leading-snug text-foreground-muted">{row.onboarding}</dd>
                </div>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">BSN</dt>
                <dd className="mt-0.5 leading-snug text-foreground-muted">{row.bsnRequired}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Best for</dt>
                <dd className="mt-0.5 leading-snug text-foreground-muted">{row.bestFor}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Key drawback</dt>
                <dd className="mt-0.5 leading-snug text-foreground-muted">{row.keyDrawback}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

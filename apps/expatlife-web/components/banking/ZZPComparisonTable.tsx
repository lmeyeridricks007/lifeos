"use client";

import Image from "next/image";
import { bankComparisonTableSurfaceClass } from "@/components/banking/BankComparisonTable";
import { ContentTableCell, ContentTableRow } from "@/components/ui/content-table";
import { cn } from "@/lib/cn";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";
import { bankMonthlyFeeDisplay, getBankById, type BankId } from "@/src/data/banking/banks";

const HEADER_TH = "px-3 py-2.5 text-left text-[10px] font-semibold uppercase leading-tight tracking-wider text-foreground-muted sm:px-4 sm:py-3 sm:text-[11px]";
const TD = "min-w-0 align-top px-3 py-2.5 text-[12px] leading-snug text-foreground-muted sm:px-4 sm:py-3 sm:text-[13px]";

export type ZzpComparisonEditorial = {
  invoicingTools: string;
  integrations: string;
  internationalUse: string;
  bestForFreelancers: string;
  watchOut: string;
};

export type ZZPComparisonTableProps = {
  bankIds: readonly BankId[];
  editorialByBankId: Partial<Record<BankId, ZzpComparisonEditorial>>;
  className?: string;
};

function typeLabel(type: string) {
  return type === "traditional" ? "Traditional" : "Digital";
}

/** Freelancer / ZZP bank comparison — same surfaces as {@link BankComparisonTable} + mobile card stack. */
export function ZZPComparisonTable({ bankIds, editorialByBankId, className }: ZZPComparisonTableProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="hidden min-w-0 max-w-full overflow-x-auto md:block">
        <div className={bankComparisonTableSurfaceClass}>
          <table className="w-full min-w-0 border-collapse" style={{ minWidth: "920px" }}>
            <caption className="sr-only">Freelancer bank comparison — our short notes; confirm every detail on each bank’s website.</caption>
            <thead>
              <tr className="border-b border-border bg-surface-muted/80">
                <th scope="col" className={HEADER_TH}>
                  Bank
                </th>
                <th scope="col" className={HEADER_TH}>
                  Type
                </th>
                <th scope="col" className={HEADER_TH}>
                  Business account
                </th>
                <th scope="col" className={HEADER_TH}>
                  Rough monthly fee
                </th>
                <th scope="col" className={HEADER_TH}>
                  Invoicing
                </th>
                <th scope="col" className={HEADER_TH}>
                  Bookkeeping & apps
                </th>
                <th scope="col" className={HEADER_TH}>
                  Abroad & other currencies
                </th>
                <th scope="col" className={HEADER_TH}>
                  Often suits
                </th>
                <th scope="col" className={HEADER_TH}>
                  Look out for
                </th>
              </tr>
            </thead>
            <tbody>
              {bankIds.map((id) => {
                const bank = getBankById(id);
                const ed = editorialByBankId[id];
                if (!bank || !ed) return null;
                const f = bank.feeModel;
                return (
                  <ContentTableRow key={id}>
                    <ContentTableCell emphasis className={cn(TD, "font-medium text-foreground")}>
                      <div className="flex min-w-[140px] items-center gap-2">
                        {bank.logoSrc ? (
                          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-border/80 bg-surface-muted">
                            <Image
                              src={normalizeExternalProviderLogoSrc(bank.logoSrc)}
                              alt=""
                              width={36}
                              height={36}
                              className="object-contain p-1"
                            />
                          </span>
                        ) : (
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-surface-muted text-[10px] font-bold text-foreground-muted" aria-hidden>
                            {bank.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                        <span>{bank.name}</span>
                      </div>
                    </ContentTableCell>
                    <ContentTableCell className={cn(TD, "whitespace-nowrap")}>{typeLabel(bank.type)}</ContentTableCell>
                    <ContentTableCell className={TD}>{f.businessAccountPattern ?? "Check business fees on bank site"}</ContentTableCell>
                    <ContentTableCell className={TD}>{bankMonthlyFeeDisplay(bank)}</ContentTableCell>
                    <ContentTableCell className={TD}>{ed.invoicingTools}</ContentTableCell>
                    <ContentTableCell className={TD}>{ed.integrations}</ContentTableCell>
                    <ContentTableCell className={TD}>{ed.internationalUse}</ContentTableCell>
                    <ContentTableCell className={cn(TD, "max-w-[200px]")}>{ed.bestForFreelancers}</ContentTableCell>
                    <ContentTableCell className={cn(TD, "max-w-[200px]")}>{ed.watchOut}</ContentTableCell>
                  </ContentTableRow>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4 md:hidden" role="list" aria-label="Freelancer bank comparison">
        {bankIds.map((id) => {
          const bank = getBankById(id);
          const ed = editorialByBankId[id];
          if (!bank || !ed) return null;
          const f = bank.feeModel;
          return (
            <article key={id} role="listitem" className="rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  {bank.logoSrc ? (
                    <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-border/80 bg-surface-muted">
                      <Image
                        src={normalizeExternalProviderLogoSrc(bank.logoSrc)}
                        alt=""
                        width={40}
                        height={40}
                        className="object-contain p-1"
                      />
                    </span>
                  ) : null}
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-foreground">{bank.name}</h3>
                    <p className="text-xs text-foreground-muted">{typeLabel(bank.type)}</p>
                  </div>
                </div>
              </div>
              <dl className="mt-4 grid gap-3 text-sm">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Business account</dt>
                  <dd className="mt-0.5 leading-snug text-foreground-muted">{f.businessAccountPattern ?? "Check business fees on bank site"}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Rough monthly fee</dt>
                  <dd className="mt-0.5 leading-snug text-foreground-muted">{bankMonthlyFeeDisplay(bank)}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Invoicing</dt>
                  <dd className="mt-0.5 leading-snug text-foreground-muted">{ed.invoicingTools}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Bookkeeping & apps</dt>
                  <dd className="mt-0.5 leading-snug text-foreground-muted">{ed.integrations}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Abroad & other currencies</dt>
                  <dd className="mt-0.5 leading-snug text-foreground-muted">{ed.internationalUse}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Often suits</dt>
                  <dd className="mt-0.5 leading-snug text-foreground-muted">{ed.bestForFreelancers}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Look out for</dt>
                  <dd className="mt-0.5 leading-snug text-foreground-muted">{ed.watchOut}</dd>
                </div>
              </dl>
            </article>
          );
        })}
      </div>
    </div>
  );
}

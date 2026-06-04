import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { CITIES_FUNNEL_SOFT_COPILOT_SURFACE } from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  BUYING_HOUSE_REFERENCE_DISCLAIMER,
  buyingHouseReference2026,
  type BuyingHouseReferenceHighlight,
  type BuyingHouseReferenceRow,
  type BuyingHouseOverbiddingRow,
  type BuyingHousePurchasePriceRow,
  type BuyingHouseWorkedExample,
} from "./buyingHouseReference2026";

export function BuyingHouseReferenceDisclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs leading-relaxed text-foreground-muted", className)}>
      <strong className="font-semibold text-foreground">Planning figures only.</strong> {BUYING_HOUSE_REFERENCE_DISCLAIMER}
    </p>
  );
}

export function BuyingHouseReferenceHighlightCards({
  highlights = buyingHouseReference2026.highlights,
  className,
}: {
  highlights?: readonly BuyingHouseReferenceHighlight[];
  className?: string;
}) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {highlights.map((item) => (
        <article
          key={item.id}
          className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-4", movingNlCardMicroLiftClass)}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{item.label}</p>
          <p className="mt-2 text-xl font-bold tracking-tight text-foreground">{item.value}</p>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{item.note}</p>
        </article>
      ))}
    </div>
  );
}

export function BuyingHouseReferenceTable({
  rows = buyingHouseReference2026.thresholds,
  className,
  subtitle,
}: {
  rows?: readonly BuyingHouseReferenceRow[];
  className?: string;
  subtitle?: string;
}) {
  return (
    <div className={cn("w-full max-w-none", className)}>
      {subtitle ? (
        <p className="w-full max-w-none text-sm leading-relaxed text-foreground-muted">{subtitle}</p>
      ) : null}
      <div className="mt-4 w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/90 bg-slate-50/90">
              <th className="px-4 py-3 font-bold text-foreground">Cost / parameter</th>
              <th className="px-4 py-3 font-bold text-brand-strong">2026 reference</th>
              <th className="px-4 py-3 font-bold text-foreground">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id} className={cn(index % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                <td className="px-4 py-3 font-semibold text-foreground">{row.parameter}</td>
                <td className="px-4 py-3 font-medium text-brand-strong">{row.value2026}</td>
                <td className="px-4 py-3 leading-relaxed text-foreground-muted">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
        Source note: {buyingHouseReference2026.sourceNote}
      </p>
    </div>
  );
}

export function BuyingHouseWorkedExampleCards({
  examples = buyingHouseReference2026.workedExamples,
  className,
}: {
  examples?: readonly BuyingHouseWorkedExample[];
  className?: string;
}) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {examples.map((example) => (
        <article
          key={example.id}
          className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass)}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">{example.tag}</p>
          <h3 className="mt-2 text-base font-bold text-foreground">{example.title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{example.inputs}</p>
          <p className="mt-4 text-2xl font-black tracking-tight text-brand-strong">{example.indicativeCosts}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground-muted">Indicative planning figure</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{example.body}</p>
        </article>
      ))}
    </div>
  );
}

export function BuyingHousePurchasePriceTable({
  rows = buyingHouseReference2026.purchasePriceTable,
  className,
  subtitle,
}: {
  rows?: readonly BuyingHousePurchasePriceRow[];
  className?: string;
  subtitle?: string;
}) {
  return (
    <div className={cn("w-full max-w-none", className)}>
      {subtitle ? (
        <p className="w-full max-w-none text-sm leading-relaxed text-foreground-muted">{subtitle}</p>
      ) : null}
      <div className="mt-4 w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/90 bg-slate-50/90">
              <th className="px-4 py-3 font-bold text-foreground">Purchase price</th>
              <th className="px-4 py-3 font-bold text-brand-strong">Transfer tax (2%)</th>
              <th className="px-4 py-3 font-bold text-foreground">Other buyer costs</th>
              <th className="px-4 py-3 font-bold text-brand-strong">Total kosten koper</th>
              <th className="px-4 py-3 font-bold text-foreground">Planning note</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id} className={cn(index % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                <td className="px-4 py-3 font-semibold text-foreground">{row.purchasePrice}</td>
                <td className="px-4 py-3 font-medium text-brand-strong">{row.transferTax}</td>
                <td className="px-4 py-3 text-foreground-muted">{row.otherBuyerCosts}</td>
                <td className="px-4 py-3 font-semibold text-brand-strong">{row.totalKostenKoper}</td>
                <td className="px-4 py-3 leading-relaxed text-foreground-muted">{row.ownFundsNote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
        Other buyer costs use mid-range planning figures (notary ~€2,000, valuation ~€750, inspection ~€500, advice ~€2,250 at €400k). Buyer&apos;s agent and NHG fee not included.
      </p>
    </div>
  );
}

export function BuyingHouseOverbiddingTable({
  rows = buyingHouseReference2026.overbiddingTable,
  className,
  subtitle,
}: {
  rows?: readonly BuyingHouseOverbiddingRow[];
  className?: string;
  subtitle?: string;
}) {
  return (
    <div className={cn("w-full max-w-none", className)}>
      {subtitle ? (
        <p className="w-full max-w-none text-sm leading-relaxed text-foreground-muted">{subtitle}</p>
      ) : null}
      <div className="mt-4 w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/90 bg-slate-50/90">
              <th className="px-4 py-3 font-bold text-foreground">Scenario</th>
              <th className="px-4 py-3 font-bold text-foreground">Asking</th>
              <th className="px-4 py-3 font-bold text-brand-strong">Winning bid</th>
              <th className="px-4 py-3 font-bold text-foreground">Appraisal</th>
              <th className="px-4 py-3 font-bold text-brand-strong">Gap from savings</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id} className={cn(index % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                <td className="px-4 py-3 font-semibold text-foreground">{row.scenario}</td>
                <td className="px-4 py-3 text-foreground-muted">{row.askingPrice}</td>
                <td className="px-4 py-3 font-medium text-brand-strong">{row.winningBid}</td>
                <td className="px-4 py-3 text-foreground-muted">{row.appraisal}</td>
                <td className="px-4 py-3 font-semibold text-brand-strong">{row.gapFromSavings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { InfoBox } from "@/components/ui/info-box";
import { cn } from "@/lib/cn";
import type { FieldConfidence, ParsedAmount, PayslipFieldKey, PayrollSignal } from "@/src/lib/tools/payslip/decoder/types";
import type { PayslipDecodeResponse } from "@/src/lib/tools/payslip/types";
import { HelpTooltip } from "@/src/components/tools/payslip-decoder/HelpTooltip";
import { PAYSLIP_FIELD_TOOLTIPS } from "@/src/components/tools/payslip-decoder/payslipFieldTooltips";

const NL = "/netherlands";
const SECTION_TITLE = "text-lg font-semibold tracking-tight text-copilot-text-primary";
const BODY = "text-sm leading-relaxed text-copilot-text-secondary";

function fmtEur(n: number) {
  try {
    return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(n);
  } catch {
    return `€ ${n.toFixed(2)}`;
  }
}

function confidenceChipClass(c: FieldConfidence) {
  if (c === "high") return "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-700/20";
  if (c === "medium") return "bg-amber-50 text-amber-950 ring-1 ring-amber-700/20";
  return "bg-slate-100 text-slate-800 ring-1 ring-slate-500/25";
}

function ConfidenceBadge({ c }: { c: FieldConfidence }) {
  return (
    <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide", confidenceChipClass(c))}>
      {c}
    </span>
  );
}

function AmountBlock({ label, amount }: { label: string; amount?: ParsedAmount | null }) {
  const v = amount?.normalized;
  if (v == null || !Number.isFinite(v)) return null;
  const neg = v < 0;
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wide text-copilot-text-secondary">{label}</p>
      <p className={cn("text-sm font-semibold text-copilot-text-primary", neg && "text-rose-800")}>
        {neg ? "−" : ""}
        {fmtEur(Math.abs(v))}
      </p>
    </div>
  );
}

const SIGNAL_COPY: Record<PayrollSignal, string> = {
  has_30_ruling_lines: "30% ruling–related lines detected",
  has_pension_deduction: "Pension deduction lines",
  has_holiday_allowance: "Holiday allowance",
  has_net_payment: "Net payment line",
  has_ytd_columns: "Year-to-date columns",
  has_taxable_wage_base: "Taxable wage base (e.g. heffingsloon)",
  has_health_insurance_wage_base: "Zvw wage base (Loon ZVW)",
  has_english_labels: "English (or mixed) labels detected",
  has_hourly_or_time_rows: "Hours or days rows detected",
  has_bonus_or_variable_pay: "Bonus or variable pay lines",
};

const KEY_FIGURE_KEYS: PayslipFieldKey[] = [
  "gross_salary",
  "net_salary",
  "wage_tax",
  "wage_tax_tb",
  "wage_tax_tbb",
  "taxable_wage_base",
  "health_insurance_wage_base",
  "holiday_allowance",
  "holiday_allowance_base",
  "pension_employee",
  "pension_taxable_base",
  "tax_free_reimbursement",
  "labour_credit",
  "general_tax_credit",
  "ruling_correction_taxable",
  "ruling_correction_special",
  "wga_deduction",
  "ww_deduction",
  "social_fund",
  "deductions_total",
  "payments_total",
  "hours_worked",
  "days_worked",
  "hourly_wage",
];

function qualityBannerClass(q: string) {
  if (q === "good") return "from-emerald-50/95 via-white to-copilot-bg-soft";
  if (q === "partial") return "from-amber-50/90 via-white to-copilot-bg-soft";
  return "from-rose-50/85 via-white to-copilot-bg-soft";
}

function NextStepsSection({ result }: { result: PayslipDecodeResponse }) {
  const p = result.parsedPayslip;
  const dr = result.decoderResult;
  const items: Array<{ key: string; title: string; body: ReactNode }> = [];

  if (p.netSalary || dr.fields.some((f) => f.key === "net_salary")) {
    items.push({
      key: "net",
      title: "Check take-home in context",
      body: (
        <>
          Compare with the{" "}
          <Link href={`${NL}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            Dutch net salary calculator
          </Link>{" "}
          for indicative planning. Set up{" "}
          <Link href={`${NL}/open-bank-account-netherlands/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            a Dutch bank account
          </Link>{" "}
          if salary lands locally.
        </>
      ),
    });
  }

  if (dr.detectedSignals.includes("has_30_ruling_lines")) {
    items.push({
      key: "30pct",
      title: "30% ruling context",
      body: (
        <>
          Use the{" "}
          <Link href={`${NL}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            30% ruling eligibility calculator
          </Link>{" "}
          for facility norms — payslip lines alone do not prove eligibility.
        </>
      ),
    });
  }

  if (p.pensionEmployee || dr.fields.some((f) => f.key === "pension_employee")) {
    items.push({
      key: "pension",
      title: "Pension lines",
      body: (
        <>
          Confirm scheme details with your employer. See{" "}
          <Link href={`${NL}/taxes/how-taxes-work-netherlands/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            how Dutch payroll taxes work
          </Link>
          .
        </>
      ),
    });
  }

  if (p.holidayAllowance || dr.fields.some((f) => f.key === "holiday_allowance")) {
    items.push({
      key: "holiday",
      title: "Holiday allowance",
      body: <>Many employers accrue ~8%; payout timing is contract- and policy-specific.</>,
    });
  }

  items.push({
    key: "payroll",
    title: "When something looks wrong",
    body: (
      <>
        Ask payroll for the authoritative coding. Browse the{" "}
        <Link href={`${NL}/taxes/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
          Dutch taxes hub
        </Link>{" "}
        or{" "}
        <Link href={`${NL}/moving-to-the-netherlands/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
          moving guide
        </Link>{" "}
        for broader context.
      </>
    ),
  });

  return (
    <section id="payslip-next-steps" className="scroll-mt-28 md:scroll-mt-32" aria-labelledby="payslip-next-steps-heading">
      <h2 id="payslip-next-steps-heading" className={SECTION_TITLE}>
        What to do next
      </h2>
      <p className={cn(BODY, "mt-2")}>Practical pointers — not personal tax or payroll advice.</p>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li
            key={it.key}
            className="rounded-2xl border-0 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.1] sm:p-5"
          >
            <p className="text-sm font-semibold text-copilot-text-primary">{it.title}</p>
            <div className={cn(BODY, "mt-2")}>{it.body}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PayslipDecoderResultPanels({ result }: { result: PayslipDecodeResponse }) {
  const dr = result.decoderResult;
  if (!dr) {
    return (
      <InfoBox title="Update available" variant="info">
        Run decode again to load the latest result format.
      </InfoBox>
    );
  }

  const keyFields = KEY_FIGURE_KEYS.map((key) => dr.fields.find((f) => f.key === key)).filter(Boolean) as typeof dr.fields;
  const metaFields = dr.fields.filter((f) =>
    ["employer_name", "employee_name", "period_label", "job_title", "start_date"].includes(f.key)
  );
  const rulingFields = dr.fields.filter((f) =>
    ["ruling_correction_taxable", "ruling_correction_special", "tax_free_reimbursement", "expat_allowance", "ruling_percentage"].includes(
      f.key
    )
  );
  const lineFields = dr.fields.filter(
    (f) =>
      !["employer_name", "employee_name", "period_label", "job_title", "start_date"].includes(f.key) &&
      (f.periodAmount?.normalized != null || f.ytdAmount?.normalized != null || f.taxableAmount?.normalized != null) &&
      !KEY_FIGURE_KEYS.includes(f.key)
  );

  const unresolvedByCat = new Map<string, typeof dr.unresolvedLines>();
  for (const u of dr.unresolvedLines) {
    const arr = unresolvedByCat.get(u.category) ?? [];
    arr.push(u);
    unresolvedByCat.set(u.category, arr);
  }

  const show30Section = dr.detectedSignals.includes("has_30_ruling_lines");

  const importantKeys: PayslipFieldKey[] = [
    "gross_salary",
    "net_salary",
    "wage_tax",
    "wage_tax_tb",
    "wage_tax_tbb",
    "taxable_wage_base",
    "pension_employee",
  ];
  const missingImportant = importantKeys.filter((k) => !dr.fields.some((f) => f.key === k));

  return (
    <>
      <div
        className={cn(
          "rounded-2xl border-0 bg-gradient-to-br p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.12] sm:p-6",
          qualityBannerClass(result.extractionQuality)
        )}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide",
              result.extractionQuality === "good" && "bg-emerald-100 text-emerald-950 ring-1 ring-emerald-800/20",
              result.extractionQuality === "partial" && "bg-amber-100 text-amber-950 ring-1 ring-amber-800/25",
              result.extractionQuality === "poor" && "bg-rose-100 text-rose-950 ring-1 ring-rose-800/25"
            )}
          >
            Extraction: {result.extractionQuality}
          </span>
        </div>
        <h2 className="mt-3 text-lg font-semibold text-copilot-text-primary">{dr.summaryHeadline}</h2>
        <p className={cn(BODY, "mt-2")}>{result.summaryMessage}</p>
        <p className={cn(BODY, "mt-1")}>
          <span className="font-medium text-copilot-text-primary">{result.extractionQualityLabel}</span>
          {result.inputSource === "pdf" && result.sanitizedFileName ? (
            <>
              {" "}
              · File <span className="font-mono text-xs">{result.sanitizedFileName}</span>
            </>
          ) : null}
        </p>
        {dr.summaryNotes.map((n, i) => (
          <p key={i} className={cn(BODY, "mt-2 text-copilot-text-primary/90")}>
            {n}
          </p>
        ))}
        <InfoBox title="Privacy (free tool)" variant="info" className="mt-4 shadow-expatos-sm">
          Processed in memory for this request only — we do not store payslips in a database. Text-based PDFs only; for
          scanned slips, copy-paste text if your viewer allows. Avoid shared computers; clear local downloads if needed.
        </InfoBox>
      </div>

      {metaFields.length > 0 ? (
        <section aria-labelledby="payslip-meta-heading">
          <h2 id="payslip-meta-heading" className={SECTION_TITLE}>
            Identity & period
          </h2>
          <ul className="mt-3 space-y-2">
            {metaFields.map((f) => (
              <li key={`${f.key}-${f.rawLine}`} className="rounded-xl bg-copilot-bg-soft/80 px-3 py-2 text-sm ring-1 ring-copilot-primary/[0.08]">
                <span className="font-semibold text-copilot-text-primary">{f.label}: </span>
                <span className="text-copilot-text-secondary">{f.rawLine}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section aria-labelledby="payslip-signals-heading">
        <h2 id="payslip-signals-heading" className={SECTION_TITLE}>
          Detected payroll signals
        </h2>
        <p className={cn(BODY, "mt-2")}>Heuristic flags from labels we recognized — not proof of payroll outcomes.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {dr.detectedSignals.length === 0 ? (
            <span className="text-sm text-copilot-text-secondary">No strong signals beyond basic parsing.</span>
          ) : (
            dr.detectedSignals.map((s) => (
              <span
                key={s}
                className="rounded-full bg-copilot-surface px-3 py-1 text-xs font-semibold text-copilot-text-primary ring-1 ring-copilot-primary/[0.12]"
              >
                {SIGNAL_COPY[s]}
              </span>
            ))
          )}
        </div>
      </section>

      <section aria-labelledby="payslip-key-heading">
        <h2 id="payslip-key-heading" className={SECTION_TITLE}>
          Key figures
        </h2>
        <p className={cn(BODY, "mt-2")}>
          Period vs year-to-date when both columns were detected — we do not invent YTD from a single amount.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {keyFields.map((f) => {
            const tip = PAYSLIP_FIELD_TOOLTIPS[f.key];
            return (
              <div
                key={`${f.key}-${f.rawLine}`}
                className="rounded-xl border-0 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.1]"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">{f.label}</p>
                  {tip ? (
                    <HelpTooltip label={f.label}>
                      <span>{tip}</span>
                    </HelpTooltip>
                  ) : null}
                  <ConfidenceBadge c={f.confidence} />
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <AmountBlock label="This period" amount={f.periodAmount} />
                  <AmountBlock label="Year to date" amount={f.ytdAmount} />
                  <AmountBlock label="Taxable / table column" amount={f.taxableAmount} />
                </div>
                {f.ratePercent != null ? (
                  <p className="mt-2 text-[11px] font-medium text-copilot-text-primary">Rate on slip: {f.ratePercent.toFixed(2)}%</p>
                ) : null}
                {f.periodAmount?.normalized == null && f.ytdAmount?.normalized != null ? (
                  <p className="mt-2 text-[11px] text-copilot-text-secondary">Detected amount (single column)</p>
                ) : f.periodAmount?.normalized != null && f.ytdAmount == null ? (
                  <p className="mt-2 text-[11px] text-copilot-text-secondary">
                    {f.key === "net_salary"
                      ? "Net pay for this run only — no separate YTD column on this row (compare with earlier slips if needed)."
                      : "Single amount — YTD not shown separately on this row."}
                  </p>
                ) : f.periodAmount?.normalized != null &&
                  f.ytdAmount?.normalized != null &&
                  Math.abs(f.periodAmount.normalized - f.ytdAmount.normalized) < 0.02 ? (
                  <p className="mt-2 text-[11px] text-copilot-text-secondary">
                    Period and YTD show the same figure here — some payroll layouts repeat the period value in the last column.
                  </p>
                ) : null}
                <p className="mt-2 font-mono text-[10px] text-copilot-text-secondary line-clamp-2">{f.rawLine}</p>
              </div>
            );
          })}
        </div>
      </section>

      {missingImportant.length > 0 ? (
        <InfoBox title="Important fields not detected" variant="info" className="shadow-expatos-sm">
          <p className="text-sm text-copilot-text-secondary">
            We did not confidently map: {missingImportant.map((k) => k.replace(/_/g, " ")).join(", ")}. Your slip may use different
            wording, omit these lines, or need a manual check — always confirm with payroll.
          </p>
        </InfoBox>
      ) : null}

      {show30Section ? (
        <section aria-labelledby="payslip-30-heading">
          <h2 id="payslip-30-heading" className="flex flex-wrap items-center gap-2 text-lg font-semibold text-copilot-text-primary">
            30% ruling–related lines
            <HelpTooltip label="30% ruling lines">
              <span>
                These rows often appear when payroll applies 30% ruling mechanics. Correction lines may reduce taxable bases.
                Employer treatment varies; this is not legal eligibility proof.
              </span>
            </HelpTooltip>
          </h2>
          {rulingFields.length === 0 ? (
            <p className={cn(BODY, "mt-2")}>
              Text on this slip suggests 30% ruling–related payroll treatment, but we did not isolate a dedicated numeric row — check the raw
              lines and ask payroll if unsure.
            </p>
          ) : null}
          <div className="mt-4 space-y-3">
            {rulingFields.map((f) => (
              <div key={`${f.key}-${f.rawLine}`} className="rounded-xl bg-amber-50/80 p-4 ring-1 ring-amber-700/15">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-copilot-text-primary">{f.label}</p>
                  <ConfidenceBadge c={f.confidence} />
                </div>
                <p className={cn(BODY, "mt-2")}>{f.explanation}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <AmountBlock label="This period" amount={f.periodAmount} />
                  <AmountBlock label="Year to date" amount={f.ytdAmount} />
                </div>
                <p className="mt-2 font-mono text-[11px] text-copilot-text-secondary">{f.rawLine}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section aria-labelledby="payslip-lines-heading">
        <h2 id="payslip-lines-heading" className={SECTION_TITLE}>
          Line-by-line
        </h2>
        <p className={cn(BODY, "mt-2")}>Canonical labels, confidence, and how we interpreted each numeric row.</p>
        <div className="mt-4 space-y-3">
          {lineFields.map((f) => (
            <div key={`${f.key}-${f.rawLine}`} className="rounded-xl border-0 bg-copilot-surface p-4 ring-1 ring-copilot-primary/[0.08]">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold text-copilot-text-primary">{f.canonicalLabel}</h3>
                <ConfidenceBadge c={f.confidence} />
              </div>
              <p className={cn(BODY, "mt-2")}>{f.explanation}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                <AmountBlock label="Period" amount={f.periodAmount} />
                <AmountBlock label="YTD" amount={f.ytdAmount} />
                <AmountBlock label="Other column" amount={f.taxableAmount} />
              </div>
              {f.notes?.map((n, i) => (
                <p key={i} className="mt-2 text-xs text-amber-900/90">
                  {n}
                </p>
              ))}
              <p className="mt-2 font-mono text-xs text-copilot-text-secondary whitespace-pre-wrap break-words">{f.rawLine}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="payslip-warn-heading">
        <h2 id="payslip-warn-heading" className={SECTION_TITLE}>
          Warnings & notes
        </h2>
        <div className="mt-3 space-y-3">
          <InfoBox title="Not payroll, tax, or legal advice" variant="warn" className="shadow-expatos-sm">
            Educational interpretation only. Your employer and qualified advisers are authoritative.
          </InfoBox>
          {result.extractionQuality !== "good" ? (
            <InfoBox
              title={result.extractionQuality === "partial" ? "Partial extraction" : "Low-confidence extraction"}
              variant="warn"
              className="shadow-expatos-sm"
            >
              {result.extractionQuality === "partial"
                ? "Some text was recovered, but layout or noise means you should double-check against the original document."
                : "Very little usable structure was found. Scanned PDFs often need Paste mode with copied text."}
            </InfoBox>
          ) : null}
          {result.scannedPdfHints.scannedLikely ||
          (result.inputSource === "pdf" &&
            result.extractionWarnings.some((w) => /scanned|image-only|image-based/i.test(w))) ? (
            <InfoBox title="Scanned-style or image PDF" variant="warn" className="shadow-expatos-sm">
              <p>
                We may only see a thin text layer. If your viewer allows it, select all text and use <strong>Paste text</strong>.
              </p>
              {result.scannedPdfHints.ocrRecommended && !result.scannedPdfHints.ocrAvailable ? (
                <p className="mt-2 text-sm text-foreground-muted">
                  Automated OCR for scans is not available in this free version; a future paid option may be offered separately.
                </p>
              ) : null}
            </InfoBox>
          ) : null}
          {result.extractionWarnings.length > 0 ? (
            <InfoBox title="Extraction" variant="info" className="shadow-expatos-sm">
              <ul className="list-disc space-y-1 pl-5 text-sm">
                {result.extractionWarnings.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </InfoBox>
          ) : null}
          {result.parsedPayslip.warnings && result.parsedPayslip.warnings.length > 0 ? (
            <InfoBox title="Parser notes" variant="info" className="shadow-expatos-sm">
              <ul className="list-disc space-y-1 pl-5 text-sm">
                {result.parsedPayslip.warnings.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </InfoBox>
          ) : null}
          {result.decodeHints ? (
            <InfoBox title="Partial decode hints" variant="info" className="shadow-expatos-sm">
              {result.decodeHints.partialDecode ? (
                <p className="text-sm font-medium text-copilot-text-primary">Some fields were not mapped automatically.</p>
              ) : null}
              {result.decodeHints.missingFields.length > 0 ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  {result.decodeHints.missingFields.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              ) : null}
            </InfoBox>
          ) : null}
          {result.parsedPayslip.ambiguousNetCandidates && result.parsedPayslip.ambiguousNetCandidates.length > 0 ? (
            <InfoBox title="Net pay: verify manually" variant="warn" className="shadow-expatos-sm">
              <p className="text-sm text-foreground-muted">Multiple plausible net lines — compare with your bank transfer.</p>
              <ul className="mt-3 space-y-2">
                {result.parsedPayslip.ambiguousNetCandidates.map((c, i) => (
                  <li key={i} className="rounded-lg bg-white/90 p-2 font-mono text-xs ring-1 ring-copilot-primary/[0.12]">
                    <span className="font-semibold text-copilot-text-primary">{c.amountDisplay}</span> ({fmtEur(c.normalizedAmount)}) —{" "}
                    {c.labelFound}
                    <div className="mt-1 whitespace-pre-wrap text-[11px] text-copilot-text-secondary">{c.rawLine}</div>
                  </li>
                ))}
              </ul>
            </InfoBox>
          ) : null}
        </div>
      </section>

      <section aria-labelledby="payslip-glossary-heading">
        <h2 id="payslip-glossary-heading" className={SECTION_TITLE}>
          Glossary
        </h2>
        <p className={cn(BODY, "mt-2")}>Mapped terms first; others appear if similar wording showed up in your text.</p>
        <div className="mt-4 space-y-2">
          {dr.glossaryTerms.slice(0, 28).map((g) => (
            <div
              key={g.term}
              className="rounded-xl border-0 bg-copilot-bg-soft/90 px-4 py-3 ring-1 ring-copilot-primary/[0.08]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-copilot-text-primary">{g.term}</span>
                {g.mapped ? (
                  <span className="text-[10px] font-bold uppercase text-emerald-800">Mapped</span>
                ) : (
                  <span className="text-[10px] font-bold uppercase text-copilot-text-secondary">Context</span>
                )}
                <ConfidenceBadge c={g.confidence} />
              </div>
              <p className={cn(BODY, "mt-1")}>{g.description}</p>
              {g.examples?.length ? (
                <ul className="mt-2 space-y-1 border-t border-copilot-primary/[0.1] pt-2">
                  {g.examples.map((ex, i) => (
                    <li key={i} className="font-mono text-[11px] text-copilot-text-secondary line-clamp-2">
                      {ex}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <div id="payslip-raw-text" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
        <CollapsiblePanel
          title="Extracted raw text"
          defaultOpen={false}
          className="border-copilot-primary/15 bg-copilot-surface ring-1 ring-copilot-primary/[0.08]"
          titleClassName="text-sm font-semibold text-copilot-text-primary"
          triggerClassName="rounded-t-xl hover:bg-copilot-bg-soft/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/25"
        >
          <div className="flex justify-end">
            <Button
              type="button"
              variant="secondary"
              className="mb-2 text-xs"
              onClick={() => void navigator.clipboard.writeText(result.extractedText)}
            >
              Copy text
            </Button>
          </div>
          <pre
            className="max-h-[320px] overflow-auto whitespace-pre-wrap break-words rounded-lg border border-slate-600/80 p-3 font-mono text-xs leading-relaxed shadow-inner [color-scheme:dark]"
            style={{ color: "#f1f5f9", backgroundColor: "#0f172a" }}
          >
            {result.extractedText || "—"}
          </pre>
        </CollapsiblePanel>
      </div>

      {dr.unresolvedLines.length > 0 ? (
        <section aria-labelledby="payslip-unresolved-heading">
          <h2 id="payslip-unresolved-heading" className={SECTION_TITLE}>
            Lines we could not categorize
          </h2>
          <p className={cn(BODY, "mt-2")}>Grouped heuristically — not a payroll classification.</p>
          <div className="mt-4 space-y-6">
            {Array.from(unresolvedByCat.entries()).map(([cat, lines]) => (
              <div key={cat}>
                <p className="text-xs font-bold uppercase tracking-wide text-copilot-text-secondary">{cat.replace(/_/g, " ")}</p>
                <ul className="mt-2 space-y-2">
                  {lines.map((u, i) => (
                    <li key={i} className="rounded-lg bg-copilot-surface p-3 text-sm ring-1 ring-copilot-primary/[0.06]">
                      <p className="font-mono text-xs text-copilot-text-primary">{u.rawLine}</p>
                      {u.probableMeaning ? <p className="mt-1 text-xs text-copilot-text-secondary">{u.probableMeaning}</p> : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {process.env.NODE_ENV === "development" && result.parseDiagnostics?.decoderDiagnostics ? (
        <CollapsiblePanel
          title="Developer diagnostics (dev only)"
          defaultOpen={false}
          className="border-dashed border-slate-400 bg-slate-50 ring-1 ring-slate-300"
          titleClassName="text-xs font-semibold text-slate-700"
        >
          <pre className="max-h-[360px] overflow-auto text-[10px] text-slate-700">
            {JSON.stringify(result.parseDiagnostics.decoderDiagnostics, null, 2)}
          </pre>
        </CollapsiblePanel>
      ) : null}

      <NextStepsSection result={result} />

      <InfoBox title="Privacy (this version)" variant="info" className="shadow-expatos-sm">
        No database storage of payslip contents. For photo or scanned PDFs, use pasted text today; future paid OCR may be
        offered separately.
      </InfoBox>
    </>
  );
}

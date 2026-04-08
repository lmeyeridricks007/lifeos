"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeftRight, ChevronDown, ChevronUp, Copy, FileUp, Lightbulb, RotateCcw, Share2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { InfoBox } from "@/components/ui/info-box";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { cn } from "@/lib/cn";
import {
  BALANCED_PRIORITIES,
  defaultFormState,
  emptyOffer,
} from "@/src/lib/tools/job-offer-comparison/defaults";
import {
  compareJobOffers,
  clearJobOfferComparisonStorage,
  decodeJobOfferComparisonParam,
  downloadJobOfferComparisonHtml,
  encodeJobOfferComparisonParam,
  loadJobOfferComparisonFromStorage,
  openPrintJobOfferComparisonSummary,
  saveJobOfferComparisonToStorage,
  type JobOfferComparisonExportPayload,
} from "@/src/lib/tools/job-offer-comparison";
import { formatEur } from "@/src/lib/tools/dutch-salary-net/calculateDutchSalaryNet";
import type {
  JobOfferComparisonFormState,
  JobOfferComparisonResult,
  JobOfferInput,
  OfferSlot,
  PriorityLevel,
  UserPriorities,
} from "@/src/lib/tools/job-offer-comparison/types";
import { OFFER_COMPARISON_RECOMMENDED_SERVICES } from "@/src/content/tools/job-offer-comparison/config/offerComparisonRecommendedServices";
import { JOB_OFFER_RELATED_TOOLS, NL_BASE } from "@/src/content/tools/job-offer-comparison/content";
import { JobOfferComparisonRecommendedServices } from "@/src/components/tools/job-offer-comparison/JobOfferComparisonRecommendedServices";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import {
  JOB_OFFER_DOCUMENT_MAX_BYTES,
  JOB_OFFER_EXTRACT_TEXT_API_PATH,
} from "@/src/lib/tools/job-offer-comparison/documentExtractConstants";
import { JOB_OFFER_AUTOFILL_FIELD_LABELS, parseJobOfferLetterFromText } from "@/src/lib/tools/job-offer-comparison/parseJobOfferLetter";

const FIELD_LABEL = "text-sm font-semibold text-copilot-text-primary";
const SELECT_CLASS =
  "mt-1.5 w-full rounded-lg border border-copilot-primary/15 bg-copilot-surface px-3 py-2 text-sm text-copilot-text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-copilot-primary/30";

const PRIORITY_META: { key: keyof UserPriorities; label: string; hint: string }[] = [
  { key: "highestNetPay", label: "Highest net pay", hint: "Pushes up estimated monthly take-home from the salary calculator." },
  { key: "strongestLongTermUpside", label: "Strongest long-term upside", hint: "Bonus certainty, equity notes, training, pension signals, sign-on scale." },
  { key: "stabilitySecurity", label: "Stability / security", hint: "Permanent vs fixed-term, notice, probation." },
  { key: "bestBenefits", label: "Best benefits", hint: "Allowances, pension description, leave, equipment." },
  { key: "visaExpatFriendliness", label: "Visa / expat friendliness", hint: "Sponsorship, ruling support, relocation, tax admin help." },
  { key: "lowestContractRisk", label: "Lowest contract risk", hint: "Fewer checklist warning flags from your answers — not legal advice." },
  { key: "bestWorkLifeBalance", label: "Best work-life balance", hint: "Hybrid / remote fit plus commute burden." },
  { key: "lowestCommuteBurden", label: "Lowest commute burden", hint: "Office days and how you commute (typical cost bands)." },
  { key: "bestAffordabilityAfterLivingCosts", label: "Best affordability after living costs", hint: "Money left after estimated rent, city costs, and commute." },
  { key: "bestTotalPackage", label: "Best total package", hint: "Cash + benefits + expat signals combined." },
];

type Props = {
  calculatorCanonicalUrl: string;
  pageContext: string;
};

function OfferSectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-xs font-bold uppercase tracking-wide text-copilot-primary">{children}</p>;
}

function FieldHint({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-xs leading-relaxed text-copilot-text-secondary">{children}</p>;
}

const OFFER_SUBPANEL_CLASS = "border-copilot-primary/15 bg-copilot-bg-soft/40 shadow-none";
const OFFER_SUBPANEL_TITLE = "text-xs font-bold uppercase tracking-wide text-copilot-primary";

const OFFER_LETTER_TEXTAREA_CLASS = cn(
  "mt-1.5 min-h-[72px] max-h-[220px] w-full resize-y rounded-lg border border-copilot-primary/15 bg-copilot-surface px-3 py-2 font-mono text-xs text-copilot-text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-copilot-primary/30"
);

type ExtractOfferLetterResponse = {
  error?: string;
  extractedText?: string;
  fileName?: string;
  warnings?: string[];
  parsedFields?: Partial<JobOfferInput>;
  parsedFieldLabels?: string[];
};

function OfferLetterUploadSection({
  fieldId,
  offer,
  onChange,
}: {
  fieldId: string;
  offer: JobOfferInput;
  onChange: (patch: Partial<JobOfferInput>) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [uploadErr, setUploadErr] = useState<string | null>(null);
  const [qualityHint, setQualityHint] = useState<string | null>(null);
  const [autofillSummary, setAutofillSummary] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const fileInputId = `offer-letter-file-${fieldId}`;
  const textAreaId = `offer-letter-text-${fieldId}`;

  const onPickFile = async (file: File | null) => {
    setUploadErr(null);
    setQualityHint(null);
    setAutofillSummary(null);
    if (!file) return;
    if (file.size > JOB_OFFER_DOCUMENT_MAX_BYTES) {
      setUploadErr(`File is too large (max ${Math.round(JOB_OFFER_DOCUMENT_MAX_BYTES / (1024 * 1024))} MB).`);
      return;
    }
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch(JOB_OFFER_EXTRACT_TEXT_API_PATH, { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as ExtractOfferLetterResponse;
      if (!res.ok) {
        setUploadErr(typeof data.error === "string" ? data.error : "Could not read this file.");
        return;
      }
      const text = typeof data.extractedText === "string" ? data.extractedText : "";
      const fileName = typeof data.fileName === "string" ? data.fileName : file.name;
      const parsed =
        data.parsedFields && typeof data.parsedFields === "object" ? (data.parsedFields as Partial<JobOfferInput>) : {};
      onChange({
        ...parsed,
        uploadedOfferLetterText: text,
        uploadedOfferLetterFileName: fileName,
      });
      const labels = Array.isArray(data.parsedFieldLabels) ? data.parsedFieldLabels.filter(Boolean) : [];
      if (labels.length) {
        setAutofillSummary(`Filled from your document (please verify): ${labels.join(", ")}.`);
      } else {
        setAutofillSummary("No extra fields could be inferred automatically — edit the form manually or paste clearer text below.");
      }
      if (Array.isArray(data.warnings) && data.warnings.length) {
        setQualityHint(data.warnings.join(" "));
      }
    } catch {
      setUploadErr("Network error — try again.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const reapplyParseFromExtractedText = () => {
    const t = offer.uploadedOfferLetterText.trim();
    if (!t) return;
    const { fields, filledKeys } = parseJobOfferLetterFromText(t);
    onChange(fields);
    const labels = filledKeys.map((k) => JOB_OFFER_AUTOFILL_FIELD_LABELS[k] ?? String(k));
    setAutofillSummary(
      labels.length
        ? `Filled from this text (please verify): ${labels.join(", ")}.`
        : "No fields could be inferred from this text — edit the form manually."
    );
  };

  return (
    <div className="sm:col-span-2">
      <OfferSectionTitle>Offer letter (optional)</OfferSectionTitle>
      <p className="mt-1 text-xs leading-relaxed text-copilot-text-secondary">
        Upload a PDF (text-based, not scanned) or a .txt export. We extract text and try to fill matching fields (salary, city, contract type, bonuses, etc.) — always double-check. Max{" "}
        {Math.round(JOB_OFFER_DOCUMENT_MAX_BYTES / (1024 * 1024))} MB per file.
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <input
          ref={fileRef}
          type="file"
          accept=".pdf,.txt,application/pdf,text/plain"
          className="sr-only"
          id={fileInputId}
          onChange={(e) => void onPickFile(e.target.files?.[0] ?? null)}
          disabled={uploading}
        />
        <Button
          type="button"
          variant="secondary"
          className="h-9 min-h-0 gap-1.5 px-3 py-2 text-xs"
          disabled={uploading}
          onClick={() => fileRef.current?.click()}
        >
          <FileUp className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {uploading ? "Extracting…" : "Upload PDF or .txt"}
        </Button>
        {offer.uploadedOfferLetterText.trim() ? (
          <>
            <Button
              type="button"
              variant="secondary"
              className="h-9 min-h-0 px-3 py-2 text-xs"
              disabled={uploading}
              onClick={reapplyParseFromExtractedText}
            >
              Parse fields again
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-9 min-h-0 px-3 py-2 text-xs"
              disabled={uploading}
              onClick={() => {
                setQualityHint(null);
                setUploadErr(null);
                setAutofillSummary(null);
                onChange({ uploadedOfferLetterText: "", uploadedOfferLetterFileName: "" });
              }}
            >
              Clear letter &amp; filename
            </Button>
          </>
        ) : null}
      </div>
      {offer.uploadedOfferLetterFileName.trim() ? (
        <p className="mt-1.5 text-xs text-copilot-text-secondary">
          Last file: <span className="font-medium text-copilot-text-primary">{offer.uploadedOfferLetterFileName}</span>
        </p>
      ) : null}
      {uploadErr ? <p className="mt-2 text-xs font-medium text-amber-900">{uploadErr}</p> : null}
      {autofillSummary ? <p className="mt-2 text-xs font-medium text-sky-950">{autofillSummary}</p> : null}
      {qualityHint ? <p className="mt-2 text-xs text-copilot-text-secondary">{qualityHint}</p> : null}
      <details className="mt-2 rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/20 px-2 py-1">
        <summary className="cursor-pointer py-1.5 text-xs font-medium text-copilot-text-secondary outline-none ring-copilot-primary/20 focus-visible:ring-2 [&::-webkit-details-marker]:hidden">
          {offer.uploadedOfferLetterText.trim() ? "Show raw extracted text" : "Paste letter text without PDF (optional)"}
        </summary>
        <label className="sr-only" htmlFor={textAreaId}>
          Raw extracted or pasted offer letter text
        </label>
        <textarea
          id={textAreaId}
          className={cn(OFFER_LETTER_TEXTAREA_CLASS, "mt-1")}
          value={offer.uploadedOfferLetterText}
          onChange={(e) => onChange({ uploadedOfferLetterText: e.target.value })}
          placeholder="Paste or fix OCR text here, then click “Parse fields again” above."
          spellCheck={false}
        />
      </details>
    </div>
  );
}

function annualGrossEquivalent(o: JobOfferInput): number {
  if (o.salaryInputBasis === "annual") return o.grossSalary;
  return o.grossSalary * 12;
}

function OfferCard({
  slot,
  onChange,
  onToggleExpand,
  onDuplicateFromA,
  onSyncCommuteFromA,
  onReset,
  showDuplicateFromA,
  showSyncCommuteFromA,
}: {
  slot: OfferSlot;
  onChange: (patch: Partial<JobOfferInput>) => void;
  onToggleExpand: () => void;
  onDuplicateFromA: () => void;
  onSyncCommuteFromA: () => void;
  onReset: () => void;
  showDuplicateFromA: boolean;
  showSyncCommuteFromA: boolean;
}) {
  const o = slot.offer;
  const cityLine = [o.city?.trim(), o.officeCity?.trim()].filter(Boolean).join(" · ") || "City not set";
  const hasSalary = annualGrossEquivalent(o) > 0;
  const salarySummary = hasSalary
    ? `${o.salaryInputBasis === "annual" ? "€" + Math.round(o.grossSalary).toLocaleString() + "/yr" : "€" + Math.round(o.grossSalary).toLocaleString() + "/mo"}`
    : "Add salary";

  return (
    <Card variant="expatCopilot" className="overflow-hidden p-0">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-copilot-primary/10 bg-copilot-bg-soft/40 px-4 py-3">
        <button
          type="button"
          onClick={onToggleExpand}
          className="min-w-0 flex-1 text-left font-semibold text-copilot-text-primary hover:text-copilot-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/30"
          aria-expanded={slot.expanded}
        >
          <span className="flex items-center gap-2">
            {slot.expanded ? <ChevronUp className="h-4 w-4 shrink-0" aria-hidden /> : <ChevronDown className="h-4 w-4 shrink-0" aria-hidden />}
            <span className="min-w-0">
              <span className="block">{slot.label}</span>
              {!slot.expanded ? (
                <span className="mt-0.5 block text-xs font-normal text-copilot-text-secondary">
                  {salarySummary} · {cityLine}
                </span>
              ) : null}
            </span>
          </span>
        </button>
        <div className="flex flex-wrap gap-2">
          {showDuplicateFromA ? (
            <Button type="button" variant="secondary" className="h-8 min-h-0 gap-1 px-3 py-1.5 text-xs" onClick={onDuplicateFromA} title="Copy every field from offer A — then edit what differs">
              <Copy className="h-3.5 w-3.5" aria-hidden />
              Duplicate A → here
            </Button>
          ) : null}
          {showSyncCommuteFromA ? (
            <Button type="button" variant="secondary" className="h-8 min-h-0 gap-1 px-3 py-1.5 text-xs" onClick={onSyncCommuteFromA} title="Keep salary different but match commute, home city, and rent settings to offer A">
              <ArrowLeftRight className="h-3.5 w-3.5" aria-hidden />
              Match commute from A
            </Button>
          ) : null}
          <Button type="button" variant="ghost" className="h-8 min-h-0 gap-1 px-3 py-1.5 text-xs" onClick={onReset}>
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            Reset
          </Button>
        </div>
      </div>
      {slot.expanded ? (
        <div className="space-y-3 px-4 pb-5 pt-3">
          <OfferSectionTitle>Basic details</OfferSectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className={FIELD_LABEL}>Employer name</label>
              <Input className="mt-1.5" value={o.employerName} onChange={(e) => onChange({ employerName: e.target.value })} />
            </div>
            <div>
              <label className={FIELD_LABEL}>Role title</label>
              <Input className="mt-1.5" value={o.roleTitle} onChange={(e) => onChange({ roleTitle: e.target.value })} />
            </div>
            <div>
              <label className={FIELD_LABEL}>Job city</label>
              <Input className="mt-1.5" value={o.city} onChange={(e) => onChange({ city: e.target.value })} />
            </div>
            <div>
              <label className={FIELD_LABEL}>Work mode</label>
              <select className={SELECT_CLASS} value={o.workMode} onChange={(e) => onChange({ workMode: e.target.value as JobOfferInput["workMode"] })}>
                <option value="office">Office</option>
                <option value="hybrid">Hybrid</option>
                <option value="remote">Remote</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Office city (if relevant)</label>
              <Input className="mt-1.5" value={o.officeCity} onChange={(e) => onChange({ officeCity: e.target.value })} />
              <FieldHint>
                Where you are expected on-site (hybrid/office). It feeds commute burden. If you will live in another city, still set the job location here and use target/home city under commute for rent.
              </FieldHint>
            </div>
            <div>
              <label className={FIELD_LABEL}>Contract type</label>
              <select
                className={SELECT_CLASS}
                value={o.contractType}
                onChange={(e) => onChange({ contractType: e.target.value as JobOfferInput["contractType"] })}
              >
                <option value="permanent">Permanent</option>
                <option value="fixed_term">Fixed-term</option>
                <option value="contractor">Contractor / umbrella</option>
                <option value="remote_foreign">Remote foreign employer</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={FIELD_LABEL}>Expected start date (optional)</label>
              <Input className="mt-1.5" value={o.expectedStartDate} onChange={(e) => onChange({ expectedStartDate: e.target.value })} placeholder="e.g. 2026-09-01" />
            </div>
            <OfferLetterUploadSection fieldId={slot.id} offer={o} onChange={onChange} />
          </div>

          <OfferSectionTitle>Salary package</OfferSectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className={FIELD_LABEL}>Salary input basis</label>
              <select
                className={SELECT_CLASS}
                value={o.salaryInputBasis}
                onChange={(e) => onChange({ salaryInputBasis: e.target.value as JobOfferInput["salaryInputBasis"] })}
              >
                <option value="annual">Annual gross</option>
                <option value="monthly">Monthly gross</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>{o.salaryInputBasis === "annual" ? "Gross annual (€)" : "Gross monthly (€)"}</label>
              <Input
                className="mt-1.5"
                type="number"
                min={0}
                value={Number.isFinite(o.grossSalary) ? o.grossSalary : 0}
                onChange={(e) => onChange({ grossSalary: Number(e.target.value) || 0 })}
              />
            </div>
            <div>
              <label className={FIELD_LABEL}>Holiday allowance</label>
              <select
                className={SELECT_CLASS}
                value={o.holidayAllowance}
                onChange={(e) => onChange({ holidayAllowance: e.target.value as JobOfferInput["holidayAllowance"] })}
              >
                <option value="included">Included in gross</option>
                <option value="separate">Separate (on top)</option>
                <option value="not_sure">Not sure</option>
              </select>
              <FieldHint>
                “Included in gross” means vakantiegeld is already inside the figure you typed. “Separate (on top)” means extra cash on top — pick the wrong option and recurring comp will look off.
              </FieldHint>
            </div>
            <div>
              <label className={FIELD_LABEL}>Bonus</label>
              <select className={SELECT_CLASS} value={o.bonusType} onChange={(e) => onChange({ bonusType: e.target.value as JobOfferInput["bonusType"] })}>
                <option value="none">None</option>
                <option value="discretionary">Discretionary</option>
                <option value="guaranteed">Guaranteed</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Bonus % of base (if used)</label>
              <Input
                className="mt-1.5"
                type="number"
                min={0}
                value={o.bonusPercent}
                onChange={(e) => onChange({ bonusPercent: Number(e.target.value) || 0 })}
              />
            </div>
            <div>
              <label className={FIELD_LABEL}>Bonus annual € (if fixed)</label>
              <Input
                className="mt-1.5"
                type="number"
                min={0}
                value={o.bonusAmountAnnual}
                onChange={(e) => onChange({ bonusAmountAnnual: Number(e.target.value) || 0 })}
              />
            </div>
            <div>
              <label className={FIELD_LABEL}>Sign-on bonus (€)</label>
              <Input className="mt-1.5" type="number" min={0} value={o.signOnBonus} onChange={(e) => onChange({ signOnBonus: Number(e.target.value) || 0 })} />
            </div>
            <div>
              <label className={FIELD_LABEL}>Relocation bonus (€)</label>
              <Input
                className="mt-1.5"
                type="number"
                min={0}
                value={o.relocationBonus}
                onChange={(e) => onChange({ relocationBonus: Number(e.target.value) || 0 })}
              />
            </div>
            <div className="sm:col-span-2">
              <FieldHint>
                Sign-on is usually a one-time payment at start; relocation bonus offsets moving costs. They are not the same as base salary — enter each only if it applies to this offer.
              </FieldHint>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <input
                id={`13-${slot.id}`}
                type="checkbox"
                checked={o.hasThirteenthMonth}
                onChange={(e) => onChange({ hasThirteenthMonth: e.target.checked })}
                className="h-4 w-4 rounded border-copilot-primary/30"
              />
              <label htmlFor={`13-${slot.id}`} className="text-sm text-copilot-text-primary">
                13th month / year-end payment
              </label>
            </div>
            <div className="sm:col-span-2">
              <label className={FIELD_LABEL}>Equity / RSUs / LTIP (notes)</label>
              <Input className="mt-1.5" value={o.equityNotes} onChange={(e) => onChange({ equityNotes: e.target.value })} placeholder="Optional — qualitative" />
            </div>
          </div>

          <CollapsiblePanel
            className={cn("mt-2", OFFER_SUBPANEL_CLASS)}
            titleClassName={OFFER_SUBPANEL_TITLE}
            triggerClassName="hover:bg-copilot-bg-soft/60"
            title="Advanced benefits & expat support"
          >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={FIELD_LABEL}>Employer pension (short description)</label>
              <Input
                className="mt-1.5"
                value={o.pensionEmployerDescription}
                onChange={(e) => onChange({ pensionEmployerDescription: e.target.value })}
                placeholder="e.g. 8% employer on pensionable salary"
              />
            </div>
            <div>
              <label className={FIELD_LABEL}>Travel allowance €/mo</label>
              <Input
                className="mt-1.5"
                type="number"
                min={0}
                value={o.travelAllowanceMonthly}
                onChange={(e) => onChange({ travelAllowanceMonthly: Number(e.target.value) || 0 })}
              />
            </div>
            <div>
              <label className={FIELD_LABEL}>WFH allowance €/mo</label>
              <Input className="mt-1.5" type="number" min={0} value={o.wfhAllowanceMonthly} onChange={(e) => onChange({ wfhAllowanceMonthly: Number(e.target.value) || 0 })} />
            </div>
            <div>
              <label className={FIELD_LABEL}>Phone / laptop / equipment</label>
              <select
                className={SELECT_CLASS}
                value={o.equipmentProvided}
                onChange={(e) => onChange({ equipmentProvided: e.target.value as JobOfferInput["equipmentProvided"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Training budget €/yr</label>
              <Input
                className="mt-1.5"
                type="number"
                min={0}
                value={o.trainingBudgetAnnual}
                onChange={(e) => onChange({ trainingBudgetAnnual: Number(e.target.value) || 0 })}
              />
            </div>
            <div>
              <label className={FIELD_LABEL}>Extra leave days</label>
              <Input className="mt-1.5" type="number" min={0} value={o.extraLeaveDays} onChange={(e) => onChange({ extraLeaveDays: Number(e.target.value) || 0 })} />
            </div>
            <div>
              <label className={FIELD_LABEL}>Health / wellness €/yr</label>
              <Input
                className="mt-1.5"
                type="number"
                min={0}
                value={o.healthWellnessAnnual}
                onChange={(e) => onChange({ healthWellnessAnnual: Number(e.target.value) || 0 })}
              />
            </div>
            <div>
              <label className={FIELD_LABEL}>Mobility €/mo</label>
              <Input
                className="mt-1.5"
                type="number"
                min={0}
                value={o.mobilityAllowanceMonthly}
                onChange={(e) => onChange({ mobilityAllowanceMonthly: Number(e.target.value) || 0 })}
              />
            </div>
            <div>
              <label className={FIELD_LABEL}>Sick pay beyond standard?</label>
              <select
                className={SELECT_CLASS}
                value={o.sickPayBeyondStandard}
                onChange={(e) => onChange({ sickPayBeyondStandard: e.target.value as JobOfferInput["sickPayBeyondStandard"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Parental / family support?</label>
              <select
                className={SELECT_CLASS}
                value={o.parentalFamilySupport}
                onChange={(e) => onChange({ parentalFamilySupport: e.target.value as JobOfferInput["parentalFamilySupport"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-wide text-copilot-primary">Expat / relocation</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className={FIELD_LABEL}>Visa sponsorship</label>
              <select
                className={SELECT_CLASS}
                value={o.visaSponsorship}
                onChange={(e) => onChange({ visaSponsorship: e.target.value as JobOfferInput["visaSponsorship"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>30% ruling support</label>
              <select
                className={SELECT_CLASS}
                value={o.thirtyPercentSupport}
                onChange={(e) => onChange({ thirtyPercentSupport: e.target.value as JobOfferInput["thirtyPercentSupport"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="best_efforts">Best efforts</option>
                <option value="not_mentioned">Not mentioned</option>
              </select>
              <FieldHint>
                “Best efforts” means the employer will try to help with the 30% ruling application process — not a guarantee of eligibility. Eligibility depends on your situation and rules in force.
              </FieldHint>
            </div>
            <div>
              <label className={FIELD_LABEL}>Relocation support</label>
              <select
                className={SELECT_CLASS}
                value={o.relocationSupport}
                onChange={(e) => onChange({ relocationSupport: e.target.value as JobOfferInput["relocationSupport"] })}
              >
                <option value="none">None</option>
                <option value="partial">Partial</option>
                <option value="strong">Strong</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Relocation repayment / clawback?</label>
              <select
                className={SELECT_CLASS}
                value={o.relocationRepayment}
                onChange={(e) => onChange({ relocationRepayment: e.target.value as JobOfferInput["relocationRepayment"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Tax filing support</label>
              <select className={SELECT_CLASS} value={o.taxFilingSupport} onChange={(e) => onChange({ taxFilingSupport: e.target.value as JobOfferInput["taxFilingSupport"] })}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Temporary housing support</label>
              <select
                className={SELECT_CLASS}
                value={o.temporaryHousingSupport}
                onChange={(e) => onChange({ temporaryHousingSupport: e.target.value as JobOfferInput["temporaryHousingSupport"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Moving budget</label>
              <select className={SELECT_CLASS} value={o.movingBudget} onChange={(e) => onChange({ movingBudget: e.target.value as JobOfferInput["movingBudget"] })}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
          </div>
          </CollapsiblePanel>

          <CollapsiblePanel
            className={cn("mt-2", OFFER_SUBPANEL_CLASS)}
            titleClassName={OFFER_SUBPANEL_TITLE}
            triggerClassName="hover:bg-copilot-bg-soft/60"
            title="Contract & risk details"
          >
          <p className="mt-0 text-xs text-copilot-text-secondary">
            Practical planning flags only.{" "}
            <Link href={`${NL_BASE}/work/tools/employment-contract-risk-scanner/`} className="font-medium text-copilot-primary hover:underline">
              Need a deeper clause review? Use the Employment Contract Risk Scanner.
            </Link>
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <label className={FIELD_LABEL}>Probation (months)</label>
              <Input className="mt-1.5" type="number" min={0} max={12} value={o.probationMonths} onChange={(e) => onChange({ probationMonths: Number(e.target.value) || 0 })} />
            </div>
            <div>
              <label className={FIELD_LABEL}>Your notice (months)</label>
              <Input
                className="mt-1.5"
                type="number"
                min={0}
                max={12}
                step={0.5}
                value={o.noticeMonthsEmployee}
                onChange={(e) => onChange({ noticeMonthsEmployee: Number(e.target.value) || 0 })}
              />
            </div>
            <div>
              <label className={FIELD_LABEL}>Non-compete present?</label>
              <select
                className={SELECT_CLASS}
                value={o.nonCompetePresent}
                onChange={(e) => onChange({ nonCompetePresent: e.target.value as JobOfferInput["nonCompetePresent"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Side-job restrictions?</label>
              <select
                className={SELECT_CLASS}
                value={o.sideJobRestrictions}
                onChange={(e) => onChange({ sideJobRestrictions: e.target.value as JobOfferInput["sideJobRestrictions"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Overtime included in salary?</label>
              <select
                className={SELECT_CLASS}
                value={o.overtimeIncludedInSalary}
                onChange={(e) => onChange({ overtimeIncludedInSalary: e.target.value as JobOfferInput["overtimeIncludedInSalary"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Fixed-term renewal likely?</label>
              <select
                className={SELECT_CLASS}
                value={o.fixedTermRenewalLikely}
                onChange={(e) => onChange({ fixedTermRenewalLikely: e.target.value as JobOfferInput["fixedTermRenewalLikely"] })}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Handbook / policy-heavy?</label>
              <select className={SELECT_CLASS} value={o.handbookHeavy} onChange={(e) => onChange({ handbookHeavy: e.target.value as JobOfferInput["handbookHeavy"] })}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Hybrid policy fixed (vs discretionary)?</label>
              <select
                className={SELECT_CLASS}
                value={o.hybridPolicyFixed}
                onChange={(e) => onChange({ hybridPolicyFixed: e.target.value as JobOfferInput["hybridPolicyFixed"] })}
              >
                <option value="yes">Fixed</option>
                <option value="no">Discretionary</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>
          </div>
          </CollapsiblePanel>

          <CollapsiblePanel
            className={cn("mt-2", OFFER_SUBPANEL_CLASS)}
            titleClassName={OFFER_SUBPANEL_TITLE}
            triggerClassName="hover:bg-copilot-bg-soft/60"
            title="Commute & affordability assumptions"
          >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={FIELD_LABEL}>Target / home city (for rent &amp; costs)</label>
              <Input className="mt-1.5" value={o.homeOrTargetCity} onChange={(e) => onChange({ homeOrTargetCity: e.target.value })} placeholder="Defaults to job city if empty" />
              <FieldHint>
                Rent and cost-of-living anchors use this (or job city if empty). Two offers in different cities can flip “money left after rent” even when gross pay looks similar.
              </FieldHint>
            </div>
            <div>
              <label className={FIELD_LABEL}>Commute days / week</label>
              <Input
                className="mt-1.5"
                type="number"
                min={0}
                max={5}
                value={o.commuteDaysPerWeek}
                onChange={(e) => onChange({ commuteDaysPerWeek: Number(e.target.value) || 0 })}
              />
              <FieldHint>
                Drives time-and-cost burden for hybrid/office. Remote with zero office days lowers commute pressure in the model.
              </FieldHint>
            </div>
            <div>
              <label className={FIELD_LABEL}>Commute mode</label>
              <select className={SELECT_CLASS} value={o.commuteMode} onChange={(e) => onChange({ commuteMode: e.target.value as JobOfferInput["commuteMode"] })}>
                <option value="public_transport">Public transport</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Use city rent assumptions?</label>
              <select
                className={SELECT_CLASS}
                value={o.useCityRentAssumptions ? "yes" : "no"}
                onChange={(e) => onChange({ useCityRentAssumptions: e.target.value === "yes" })}
              >
                <option value="yes">Yes (COL mid anchor)</option>
                <option value="no">No — I will set rent</option>
              </select>
            </div>
            <div>
              <label className={FIELD_LABEL}>Target rent budget €/mo (optional)</label>
              <Input
                className="mt-1.5"
                type="number"
                min={0}
                value={o.targetRentBudgetMonthly ?? ""}
                onChange={(e) => {
                  const v = e.target.value;
                  onChange({ targetRentBudgetMonthly: v === "" ? null : Number(v) || 0 });
                }}
              />
            </div>
          </div>
          </CollapsiblePanel>
        </div>
      ) : null}
    </Card>
  );
}

const PREVIEW_MIN_ANNUAL_EQ = 12_000;

function offerHasCoreSalary(offer: JobOfferInput): boolean {
  return annualGrossEquivalent(offer) >= PREVIEW_MIN_ANNUAL_EQ;
}

function previewReadyForState(state: JobOfferComparisonFormState): boolean {
  if (!offerHasCoreSalary(state.offers.A.offer) || !offerHasCoreSalary(state.offers.B.offer)) return false;
  if (state.includeOfferC && !offerHasCoreSalary(state.offers.C.offer)) return false;
  return true;
}

function jobOfferStateFingerprint(s: JobOfferComparisonFormState): string {
  try {
    return JSON.stringify(s, (_key, value) => {
      if (_key === "uploadedOfferLetterText" && typeof value === "string") {
        return `[len:${value.length}]`;
      }
      return value;
    });
  } catch {
    return "";
  }
}

function EarlyPreviewCard({ preview }: { preview: JobOfferComparisonResult }) {
  const reasons = preview.topRecommendation.whyItWon.slice(0, 3);
  return (
    <Card variant="expatCopilot" className="border border-sky-400/35 bg-gradient-to-br from-sky-50/90 to-copilot-bg-soft/40 p-4 md:p-5">
      <div className="flex flex-wrap items-start gap-3">
        <Sparkles className="h-5 w-5 shrink-0 text-sky-700" aria-hidden />
        <div className="min-w-0 flex-1 space-y-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-sky-900">Live preview</p>
            <p className="mt-1 text-sm text-copilot-text-secondary">
              Same planning model as full results, updated as you type. Flesh out benefits, contract flags, commute, and expat support for a fairer picture — priority weights below still apply. Click{" "}
              <strong className="text-copilot-text-primary">Calculate</strong> under priorities for topic-by-topic winners, export, and the full breakdown.
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-copilot-text-primary">{preview.topRecommendation.winnerLabel}</p>
            <p className="text-sm font-medium text-copilot-text-secondary">{preview.topRecommendation.confidenceLabel}</p>
          </div>
          {reasons.length ? (
            <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-primary">
              {reasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

function PreResultExplainer() {
  return (
    <Card variant="expatCopilot" className="border border-copilot-primary/12 bg-copilot-bg-soft/50 p-4 md:p-5">
      <div className="flex gap-3">
        <Lightbulb className="h-5 w-5 shrink-0 text-copilot-primary" aria-hidden />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-copilot-text-primary">What this tool compares</p>
          <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
            Overall fit: estimated cash and take-home, benefits, contract risk signals, expat and relocation help, commute, and rough money left
            after rent — blended using the importance you set below.
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-copilot-text-secondary">
            <li>
              Offers that look similar on gross salary often diverge on{" "}
              <span className="font-medium text-copilot-text-primary">holiday allowance treatment</span>, pension, fixed-term risk, or city-level rent.
            </li>
            <li>
              <span className="font-medium text-copilot-text-primary">City and employer support</span> change both the net estimate and scores for visa, 30%
              ruling help, relocation, and day-to-day hassle.
            </li>
          </ul>
          <p className="mt-3 text-sm text-copilot-text-secondary">
            Enter a plausible gross for each active offer to see a live preview, adjust priorities if you like, then click{" "}
            <strong className="text-copilot-text-primary">Calculate</strong> to load the full results (about one to two seconds).
          </p>
        </div>
      </div>
    </Card>
  );
}

function summarizePriorities(p: UserPriorities): string {
  const keys = Object.keys(p) as (keyof UserPriorities)[];
  const highs = keys.filter((k) => p[k] === "high").length;
  const lows = keys.filter((k) => p[k] === "low").length;
  if (highs === 0 && lows === 0) return "Balanced (medium across the board)";
  return `${highs} high, ${lows} low — tap to adjust`;
}

export function JobOfferComparisonClient({ calculatorCanonicalUrl, pageContext }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState<JobOfferComparisonFormState>(() => defaultFormState());
  const [shareHint, setShareHint] = useState<string | null>(null);
  const [hasRun, setHasRun] = useState(false);
  const [lastRunState, setLastRunState] = useState<JobOfferComparisonFormState | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const latestStateRef = useRef(state);
  const cancelCalcRunRef = useRef<null | (() => void)>(null);

  useEffect(() => {
    latestStateRef.current = state;
  }, [state]);

  useEffect(() => {
    return () => cancelCalcRunRef.current?.();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get("s");
    const fromUrl = encoded ? decodeJobOfferComparisonParam(encoded) : null;
    const stored = loadJobOfferComparisonFromStorage();
    if (fromUrl) setState(fromUrl);
    else if (stored) setState(stored);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => saveJobOfferComparisonToStorage(state), 400);
    return () => window.clearTimeout(t);
  }, [state]);

  const draftResult = useMemo(() => compareJobOffers(state), [state]);
  const liveResult = useMemo(() => (lastRunState ? compareJobOffers(lastRunState) : null), [lastRunState]);
  const previewReady = useMemo(() => previewReadyForState(state), [state]);
  const resultsStale =
    hasRun &&
    lastRunState !== null &&
    jobOfferStateFingerprint(state) !== jobOfferStateFingerprint(lastRunState);

  const handleCalculate = useCallback(() => {
    if (isCalculating) return;
    if (!previewReadyForState(latestStateRef.current)) return;
    cancelCalcRunRef.current?.();
    cancelCalcRunRef.current = null;

    setIsCalculating(true);
    setProgressPct(0);
    window.requestAnimationFrame(() => {
      document.getElementById("tool-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const durationMs = 1000 + Math.random() * 1000;
    const start = Date.now();
    const intervalId = window.setInterval(() => {
      const t = (Date.now() - start) / durationMs;
      setProgressPct(Math.min(95, t * 100));
    }, 40);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      setProgressPct(100);
      const snap = structuredClone(latestStateRef.current);
      setLastRunState(snap);
      setHasRun(true);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
      window.setTimeout(() => setProgressPct(0), 400);
    }, durationMs);

    cancelCalcRunRef.current = () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
      setIsCalculating(false);
      setProgressPct(0);
      cancelCalcRunRef.current = null;
    };
  }, [isCalculating]);

  const syncCommuteFromA = useCallback((id: "B" | "C") => {
    setState((s) => {
      const a = s.offers.A.offer;
      const patch: Partial<JobOfferInput> = {
        homeOrTargetCity: a.homeOrTargetCity,
        commuteDaysPerWeek: a.commuteDaysPerWeek,
        commuteMode: a.commuteMode,
        useCityRentAssumptions: a.useCityRentAssumptions,
        targetRentBudgetMonthly: a.targetRentBudgetMonthly,
      };
      return { ...s, offers: { ...s.offers, [id]: { ...s.offers[id], offer: { ...s.offers[id].offer, ...patch } } } };
    });
  }, []);

  const patchSlot = useCallback((id: "A" | "B" | "C", patch: Partial<JobOfferInput>) => {
    setState((s) => ({
      ...s,
      offers: { ...s.offers, [id]: { ...s.offers[id], offer: { ...s.offers[id].offer, ...patch } } },
    }));
  }, []);

  const setMode = useCallback((mode: JobOfferComparisonFormState["mode"]) => {
    setState((s) => {
      let includeOfferC = s.includeOfferC;
      if (mode === "compare_three") includeOfferC = true;
      if (mode === "compare_two" || mode === "current_vs_new") includeOfferC = false;

      const offers =
        mode === "current_vs_new"
          ? {
              ...s.offers,
              A: { ...s.offers.A, label: "Current job" },
              B: { ...s.offers.B, label: "New offer" },
            }
          : {
              ...s.offers,
              A: { ...s.offers.A, label: "Offer A" },
              B: { ...s.offers.B, label: "Offer B" },
            };

      return { ...s, mode, includeOfferC, offers };
    });
  }, []);

  const exportPayload = useMemo((): JobOfferComparisonExportPayload | null => {
    if (!lastRunState || !liveResult) return null;
    return {
      siteName: "ExpatCopilot",
      generatedAtIso: new Date().toISOString(),
      calculatorCanonicalUrl,
      disclaimer:
        "Planning tool only — not legal, tax, payroll, or immigration advice. Indicative figures; confirm with advisors and official sources.",
      state: lastRunState,
      result: liveResult,
    };
  }, [calculatorCanonicalUrl, lastRunState, liveResult]);

  const copyShareLink = useCallback(() => {
    const enc = encodeJobOfferComparisonParam(state);
    if (!enc) return;
    const url = `${calculatorCanonicalUrl}?s=${encodeURIComponent(enc)}`;
    void navigator.clipboard.writeText(url).then(() => {
      setShareHint("Link copied — paste to share this comparison setup.");
      window.setTimeout(() => setShareHint(null), 4_000);
    });
    router.replace(`${pathname}?s=${encodeURIComponent(enc)}`, { scroll: false });
  }, [calculatorCanonicalUrl, pathname, router, state]);

  return (
    <div className="space-y-10">
      <div id="offer-comparison-form" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-copilot-text-primary">Offer comparison</h2>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant={state.includeOfferC ? "primary" : "secondary"}
              className="min-h-0 px-3 py-2 text-xs sm:text-sm"
              onClick={() =>
                setState((s) => {
                  const next = !s.includeOfferC;
                  if (!next && s.mode === "compare_three") {
                    return { ...s, includeOfferC: false, mode: "compare_two" };
                  }
                  return { ...s, includeOfferC: next };
                })
              }
            >
              {state.includeOfferC ? "Hide offer C" : "Add another offer (C)"}
            </Button>
          </div>
        </div>

        <div id="tool-mode" className="scroll-mt-28 md:scroll-mt-32">
          <p className={FIELD_LABEL}>Mode</p>
          <SegmentedControl
            name="job-offer-comparison-mode"
            className="mt-2 max-w-xl"
            value={state.mode}
            onChange={(v) => setMode(v as JobOfferComparisonFormState["mode"])}
            options={[
              { value: "compare_two", label: "Two offers" },
              { value: "compare_three", label: "Three offers" },
              { value: "current_vs_new", label: "Current vs new" },
            ]}
          />
          {state.mode === "compare_three" && !state.includeOfferC ? (
            <p className="mt-2 text-xs text-amber-800">Tip: enable “Add another offer (C)” for three-way compare.</p>
          ) : null}
        </div>

        <div className={cn("gap-4", state.includeOfferC ? "space-y-4" : "grid lg:grid-cols-2")}>
          <OfferCard
            slot={state.offers.A}
            onChange={(p) => patchSlot("A", p)}
            onToggleExpand={() => setState((s) => ({ ...s, offers: { ...s.offers, A: { ...s.offers.A, expanded: !s.offers.A.expanded } } }))}
            onDuplicateFromA={() => {}}
            onSyncCommuteFromA={() => {}}
            onReset={() => setState((s) => ({ ...s, offers: { ...s.offers, A: { ...s.offers.A, offer: emptyOffer() } } }))}
            showDuplicateFromA={false}
            showSyncCommuteFromA={false}
          />
          <OfferCard
            slot={state.offers.B}
            onChange={(p) => patchSlot("B", p)}
            onToggleExpand={() => setState((s) => ({ ...s, offers: { ...s.offers, B: { ...s.offers.B, expanded: !s.offers.B.expanded } } }))}
            onDuplicateFromA={() =>
              setState((s) => ({ ...s, offers: { ...s.offers, B: { ...s.offers.B, offer: { ...s.offers.A.offer } } } }))
            }
            onSyncCommuteFromA={() => syncCommuteFromA("B")}
            onReset={() => setState((s) => ({ ...s, offers: { ...s.offers, B: { ...s.offers.B, offer: emptyOffer() } } }))}
            showDuplicateFromA
            showSyncCommuteFromA
          />
          {state.includeOfferC ? (
            <OfferCard
              slot={state.offers.C}
              onChange={(p) => patchSlot("C", p)}
              onToggleExpand={() => setState((s) => ({ ...s, offers: { ...s.offers, C: { ...s.offers.C, expanded: !s.offers.C.expanded } } }))}
              onDuplicateFromA={() =>
                setState((s) => ({ ...s, offers: { ...s.offers, C: { ...s.offers.C, offer: { ...s.offers.A.offer } } } }))
              }
              onSyncCommuteFromA={() => syncCommuteFromA("C")}
              onReset={() => setState((s) => ({ ...s, offers: { ...s.offers, C: { ...s.offers.C, offer: emptyOffer() } } }))}
              showDuplicateFromA
              showSyncCommuteFromA
            />
          ) : null}
        </div>

        {!hasRun ? previewReady ? <EarlyPreviewCard preview={draftResult} /> : <PreResultExplainer /> : null}
      </div>

      <div id="priority-weights" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
        <CollapsiblePanel
          className={cn("border-copilot-primary/15 bg-copilot-bg-soft/40 shadow-none")}
          titleClassName="text-sm font-semibold text-copilot-text-primary"
          triggerClassName="hover:bg-copilot-bg-soft/60"
          title={`Priorities — ${summarizePriorities(state.priorities)}`}
          defaultOpen={false}
        >
          <p className="mb-4 text-sm text-copilot-text-secondary">
            Low / Medium / High — the overall score normalises these weights. Open when you want the ranking to reflect what you care about most.
          </p>
          <div className="space-y-4">
            {PRIORITY_META.map((row) => (
              <div key={row.key} className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/30 p-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-copilot-text-primary">{row.label}</p>
                    <p className="text-xs text-copilot-text-secondary">{row.hint}</p>
                  </div>
                  <SegmentedControl
                    name={`job-offer-priority-${row.key}`}
                    className="sm:w-72"
                    value={state.priorities[row.key]}
                    onChange={(v) =>
                      setState((s) => ({
                        ...s,
                        priorities: { ...s.priorities, [row.key]: v as PriorityLevel },
                      }))
                    }
                    options={[
                      { value: "low", label: "Low" },
                      { value: "medium", label: "Medium" },
                      { value: "high", label: "High" },
                    ]}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              type="button"
              variant="secondary"
              className="min-h-0 px-3 py-2 text-sm"
              onClick={() => setState((s) => ({ ...s, priorities: { ...BALANCED_PRIORITIES } }))}
            >
              Reset to balanced priorities
            </Button>
          </div>
        </CollapsiblePanel>
      </div>

      <div
        id="run-comparison-calculation"
        className="scroll-mt-28 rounded-2xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft to-white p-5 shadow-expatos-md md:scroll-mt-32 md:p-6"
      >
        <h3 className="text-base font-semibold text-copilot-text-primary">Run comparison</h3>
        <p className="mt-2 text-sm text-copilot-text-secondary">
          Full results stay hidden until you click <strong className="text-copilot-text-primary">Calculate</strong> — same pacing as our other calculators (about one to two seconds).
        </p>
        <p className="mt-2 rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/60 px-3 py-2 text-xs text-copilot-text-secondary">
          You need a plausible gross salary for each active offer (≥ €{PREVIEW_MIN_ANNUAL_EQ.toLocaleString("en-NL")}/yr equivalent) before Calculate is available.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Button type="button" className="min-h-11" disabled={isCalculating || !previewReady} onClick={handleCalculate}>
            {isCalculating ? "Calculating…" : hasRun ? "Recalculate" : "Calculate"}
          </Button>
          {hasRun && !isCalculating ? (
            <p className="text-xs text-copilot-text-secondary">Showing your last calculated comparison.</p>
          ) : null}
        </div>
      </div>

      <div id="tool-results" className="scroll-mt-28 space-y-8 md:scroll-mt-32">
        {isCalculating ? (
          <div className="space-y-3">
            <ToolResultsLoading message="Comparing offers, take-home estimates, and your priority mix…" variant="copilot" />
            <div className="mx-auto h-2 max-w-md overflow-hidden rounded-full bg-copilot-primary/15" aria-hidden>
              <div
                className="h-full rounded-full bg-copilot-primary transition-[width] duration-150 ease-linear"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        ) : null}

        {!isCalculating && !hasRun ? (
          <InfoBox title="Results stay hidden until you calculate" variant="info">
            <p className="text-sm text-slate-700">
              Fill each offer and priorities above, then click <strong>Calculate</strong> to reveal at-a-glance numbers, topic-by-topic winners, negotiation prompts, and export options.
            </p>
          </InfoBox>
        ) : null}

        {!isCalculating && hasRun && resultsStale ? (
          <InfoBox title="Inputs changed since last run" variant="info">
            <p className="text-sm text-slate-700">
              The results below reflect your <strong>last</strong> calculation. Click <strong>Recalculate</strong> to refresh with your current inputs.
            </p>
          </InfoBox>
        ) : null}

        {hasRun && liveResult ? (
          <>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-copilot-text-primary">Results</h2>
          <p className="mt-1 text-sm text-copilot-text-secondary">{liveResult.priorityWeightingNote}</p>
        </div>

        <div id="results-at-glance" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
          <h3 className="text-base font-semibold text-copilot-text-primary">At a glance</h3>
          <p className="text-sm text-copilot-text-secondary">Headline numbers side by side — especially handy on a phone before you read the full story.</p>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {liveResult.activeOffers.map((o) => {
              const isWinner = o.slotId === liveResult.topRecommendation.winnerSlot;
              return (
                <Card
                  key={`ag-${o.slotId}`}
                  variant="expatCopilot"
                  className={cn("relative overflow-hidden p-4", isWinner && "ring-2 ring-emerald-500/45 shadow-md")}
                >
                  {isWinner ? (
                    <span className="absolute right-3 top-3 rounded-full bg-emerald-600/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-900">
                      Top pick
                    </span>
                  ) : null}
                  <p className={cn("font-semibold text-copilot-text-primary", isWinner && "pr-20")}>{o.label}</p>
                  <dl className="mt-3 space-y-2 text-sm">
                    <div className="flex justify-between gap-2 border-b border-copilot-primary/10 pb-2">
                      <dt className="text-copilot-text-secondary">Gross recurring / yr</dt>
                      <dd className="font-medium tabular-nums text-copilot-text-primary">{formatEur(o.compensationSummary.annualTotalCashRecurring)}</dd>
                    </div>
                    <div className="flex justify-between gap-2 border-b border-copilot-primary/10 pb-2">
                      <dt className="text-copilot-text-secondary">Est. net / mo</dt>
                      <dd
                        className="text-right font-medium tabular-nums text-copilot-text-primary"
                        title={o.netPayEstimate.modelNote}
                      >
                        {formatEur(o.netPayEstimate.estimatedNetMonthly)}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-2 border-b border-copilot-primary/10 pb-2">
                      <dt className="text-copilot-text-secondary">Est. remaining / mo</dt>
                      <dd className="font-medium tabular-nums text-copilot-text-primary">{formatEur(o.affordabilitySummary.estimatedNetRemainingMonthly)}</dd>
                    </div>
                    <div className="flex justify-between gap-2 pt-1">
                      <dt className="text-copilot-text-secondary">Overall fit</dt>
                      <dd className="text-lg font-bold tabular-nums text-copilot-text-primary">{o.overallScore}</dd>
                    </div>
                  </dl>
                </Card>
              );
            })}
          </div>
          <p className="text-xs leading-snug text-copilot-text-secondary">
            Estimated net follows the Dutch salary net model (incl. your holiday-allowance setting and contract type). Free-text pension fields are for your notes only — they are{" "}
            <span className="font-medium text-copilot-text-primary">not</span> deducted here; use the{" "}
            <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-medium text-copilot-primary underline-offset-2 hover:underline">
              salary net calculator
            </Link>{" "}
            if you need employee pension % in the estimate.
          </p>
        </div>

        <div id="results-summary" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
          <Card
            variant="expatCopilot"
            className="border-l-4 border-l-emerald-500/70 bg-gradient-to-br from-emerald-50/40 to-copilot-bg-soft/20 p-4 shadow-sm md:p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-900">Top pick</p>
                <p className="mt-1 text-xl font-bold tracking-tight text-copilot-text-primary md:text-2xl">
                  {liveResult.topRecommendation.winnerLabel}
                </p>
                <p className="mt-0.5 text-sm text-copilot-text-secondary">{liveResult.topRecommendation.confidenceLabel}</p>
              </div>
              <div className="shrink-0 rounded-xl border border-emerald-500/25 bg-white/70 px-3 py-2 text-center sm:text-right">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-900">Score gap</p>
                <p className="text-lg font-bold tabular-nums text-copilot-text-primary">
                  ~{liveResult.topRecommendation.closeness.overallScoreGap}
                  <span className="text-sm font-semibold text-copilot-text-secondary"> pts</span>
                </p>
                <p className="text-xs text-copilot-text-secondary">vs {liveResult.topRecommendation.runnerUpLabel}</p>
              </div>
            </div>

            <p className="mt-3 text-sm leading-snug text-copilot-text-primary">{liveResult.topRecommendation.plainEnglishLead}</p>
            {liveResult.topRecommendation.confidenceNote.trim() &&
            liveResult.topRecommendation.confidenceNote !== liveResult.topRecommendation.plainEnglishLead ? (
              <p className="mt-2 text-xs leading-snug text-copilot-text-secondary">{liveResult.topRecommendation.confidenceNote}</p>
            ) : null}

            <p className="mt-3 rounded-lg border border-copilot-primary/12 bg-white/50 px-3 py-2 text-sm leading-snug text-copilot-text-primary">
              <span className="font-semibold text-copilot-text-primary">Trade-off · </span>
              {liveResult.topRecommendation.mainTradeOff}
            </p>

            {liveResult.topRecommendation.moneyVsSecurityTension ? (
              <details className="mt-3 rounded-lg border border-amber-400/35 bg-amber-50/70 [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer px-3 py-2 text-sm font-semibold text-amber-950 outline-none ring-copilot-primary/20 focus-visible:ring-2">
                  Heads-up: money vs stability
                  <span className="ml-1 text-xs font-normal text-amber-900/80">(expand)</span>
                </summary>
                <p className="border-t border-amber-400/25 px-3 pb-2 pt-2 text-sm leading-snug text-amber-950">
                  {liveResult.topRecommendation.moneyVsSecurityTension}
                </p>
              </details>
            ) : null}

            <details className="mt-3 rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/40 [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer px-3 py-2 text-sm font-semibold text-copilot-text-primary outline-none ring-copilot-primary/20 focus-visible:ring-2">
                Why this offer ranks first
                <span className="ml-1.5 font-normal text-copilot-text-secondary">
                  ({liveResult.topRecommendation.whyItWon.length} point{liveResult.topRecommendation.whyItWon.length === 1 ? "" : "s"})
                </span>
              </summary>
              <ul className="space-y-1.5 border-t border-copilot-primary/10 px-3 py-2 text-sm leading-snug text-copilot-text-secondary">
                {liveResult.topRecommendation.whyItWon.map((w) => (
                  <li key={w} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-600/70" aria-hidden />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </details>

            <details className="mt-2 rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/30 [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer px-3 py-2 text-sm font-semibold text-copilot-text-primary outline-none ring-copilot-primary/20 focus-visible:ring-2">
                About {liveResult.topRecommendation.runnerUpLabel}
              </summary>
              <div className="border-t border-copilot-primary/10 px-3 py-2">
                <ul className="space-y-1.5 text-sm leading-snug text-copilot-text-secondary">
                  {liveResult.topRecommendation.runnerUpWhyLost.length ? (
                    liveResult.topRecommendation.runnerUpWhyLost.map((w) => (
                      <li key={w} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copilot-primary/40" aria-hidden />
                        <span>{w}</span>
                      </li>
                    ))
                  ) : (
                    <li>No runner-up detail for this run.</li>
                  )}
                </ul>
                <p className="mt-2 text-xs text-copilot-text-secondary">
                  Other strengths for the runner-up often show up in the <span className="font-medium text-copilot-text-primary">topic-by-topic</span> section below.
                </p>
              </div>
            </details>

            <details
              className={cn(
                "mt-2 rounded-lg border px-0 [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden",
                liveResult.topRecommendation.closeness.isCloseCall
                  ? "border-sky-400/40 bg-sky-50/60"
                  : "border-copilot-primary/12 bg-copilot-bg-soft/40"
              )}
            >
              <summary className="cursor-pointer px-3 py-2 text-sm font-semibold outline-none ring-copilot-primary/20 focus-visible:ring-2 text-copilot-text-primary">
                {liveResult.topRecommendation.closeness.isCloseCall ? "Close call — ways to sharpen this" : "Ways to refine the comparison"}
              </summary>
              <ul className="space-y-1.5 border-t border-copilot-primary/10 px-3 py-2 text-sm leading-snug text-copilot-text-secondary">
                {liveResult.topRecommendation.closeness.refinementSuggestions.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copilot-primary/45" aria-hidden />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </details>
          </Card>
        </div>

        <div id="decision-lenses" className="scroll-mt-28 md:scroll-mt-32">
          <h3 className="text-base font-semibold text-copilot-text-primary">Compare by topic</h3>
          <p className="mt-1 max-w-3xl text-sm text-copilot-text-secondary">
            Same offers, one question at a time — each card names a winner for pay, security, commute, and so on. Use them when the headline favourite feels too close to call.
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {liveResult.decisionLenses.map((l) => (
              <Card key={l.id} variant="expatCopilot" className="p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">{l.title}</p>
                <p className="mt-2 font-semibold text-copilot-text-primary">{l.winnerLabel}</p>
                <p className="mt-1 text-xs font-medium text-copilot-text-secondary">{l.winnerScoreSummary}</p>
                {l.tiedSlots && l.tiedSlots.length > 1 ? (
                  <p className="mt-1 text-xs text-copilot-text-secondary">Near-tie across: {l.tiedSlots.join(", ")}</p>
                ) : null}
                <p className="mt-2 text-sm text-copilot-text-secondary">{l.why}</p>
              </Card>
            ))}
          </div>
        </div>

        <div id="what-would-change" className="scroll-mt-28 md:scroll-mt-32">
          <Card variant="expatCopilot" className="border border-violet-400/35 bg-gradient-to-br from-violet-50/80 to-copilot-bg-soft/40 p-5 md:p-6">
            <div className="flex flex-wrap items-start gap-3">
              <Sparkles className="h-5 w-5 shrink-0 text-violet-700" aria-hidden />
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-copilot-text-primary">What would change the result</h3>
                <p className="mt-1 text-sm text-copilot-text-secondary">
                  Practical levers — use these when negotiating or when a topic card disagrees with the top pick.
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-copilot-text-primary">
                  {liveResult.whatWouldChange.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div id="headline-comparison" className="scroll-mt-28 md:scroll-mt-32">
          <CollapsiblePanel
            className={cn("border-copilot-primary/15 bg-copilot-bg-soft/40 shadow-none")}
            titleClassName="text-sm font-semibold text-copilot-text-primary"
            triggerClassName="hover:bg-copilot-bg-soft/60"
            title="Detailed score breakdown (0–100 per dimension)"
            defaultOpen={false}
          >
            <p className="mb-3 text-xs text-copilot-text-secondary">
              Technical view: scores are normalised against the other offer(s) in this run. Abbreviations — Comp: compensation, Ben: benefits, Sec:
              security, Exp: expat support, Life: commute / lifestyle, Aff: affordability after costs.
            </p>
            <div className="overflow-x-auto rounded-xl border border-copilot-primary/10">
              <table className="min-w-[920px] w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-copilot-primary/10 bg-copilot-bg-soft/50">
                    <th className="p-3 font-semibold text-copilot-text-primary">Offer</th>
                    <th className="p-3 font-semibold text-copilot-text-primary">Gross €/yr</th>
                    <th className="p-3 font-semibold text-copilot-text-primary">Comp</th>
                    <th className="p-3 font-semibold text-copilot-text-primary">Net €/mo</th>
                    <th className="p-3 font-semibold text-copilot-text-primary">Net</th>
                    <th className="p-3 font-semibold text-copilot-text-primary">Ben</th>
                    <th className="p-3 font-semibold text-copilot-text-primary">Sec</th>
                    <th className="p-3 font-semibold text-copilot-text-primary">Exp</th>
                    <th className="p-3 font-semibold text-copilot-text-primary">Contract</th>
                    <th className="p-3 font-semibold text-copilot-text-primary">Life</th>
                    <th className="p-3 font-semibold text-copilot-text-primary">Aff</th>
                    <th className="p-3 font-semibold text-copilot-text-primary">Fit</th>
                  </tr>
                </thead>
                <tbody>
                  {liveResult.activeOffers.map((o) => {
                    const ss = o.structuredScores;
                    return (
                      <tr key={o.slotId} className="border-b border-copilot-primary/5">
                        <td className="p-3 font-medium text-copilot-text-primary">{o.label}</td>
                        <td className="p-3 text-copilot-text-secondary">{formatEur(o.compensationSummary.annualTotalCashRecurring)}</td>
                        <td className="p-3 text-copilot-text-secondary">{ss.compensation}</td>
                        <td className="p-3 text-copilot-text-secondary">{formatEur(o.netPayEstimate.estimatedNetMonthly)}</td>
                        <td className="p-3 text-copilot-text-secondary">{ss.estimatedNetPay}</td>
                        <td className="p-3 text-copilot-text-secondary">{ss.benefits}</td>
                        <td className="p-3 text-copilot-text-secondary">{ss.securityStability}</td>
                        <td className="p-3 text-copilot-text-secondary">{ss.expatSupport}</td>
                        <td className="p-3 text-copilot-text-secondary">{ss.contractQuality}</td>
                        <td className="p-3 text-copilot-text-secondary">{ss.commuteLifestyle}</td>
                        <td className="p-3 text-copilot-text-secondary">{ss.affordabilityAfterCosts}</td>
                        <td className="p-3 font-semibold text-copilot-text-primary">{o.overallScore}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CollapsiblePanel>
        </div>

        <div id="hidden-costs" className="scroll-mt-28 md:scroll-mt-32">
          <h3 className="text-base font-semibold text-copilot-text-primary">Hidden costs &amp; heads-ups</h3>
          <p className="mt-1 text-sm text-copilot-text-secondary">
            Plain-language reminders from your inputs — not exact euros for every line, but easy to compare offer to offer. Pair with the negotiation questions below.
          </p>
          <div className="mt-3 grid gap-4 lg:grid-cols-2">
            {liveResult.activeOffers.map((o) => (
              <Card key={`hc-${o.slotId}`} variant="expatCopilot" className="p-4">
                <p className="text-sm font-semibold text-copilot-text-primary">{o.label}</p>
                <p className="mt-1 text-xs text-copilot-text-secondary">{o.hiddenCosts.summaryLine}</p>
                <ul className="mt-3 space-y-2">
                  {o.hiddenCosts.items.map((h) => (
                    <li
                      key={h.id}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-sm",
                        h.severity === "high" && "border-red-300/80 bg-red-50/70 text-red-950",
                        h.severity === "medium" && "border-amber-300/70 bg-amber-50/60 text-amber-950",
                        h.severity === "low" && "border-copilot-primary/12 bg-copilot-bg-soft/40 text-copilot-text-secondary"
                      )}
                    >
                      <span className="font-semibold text-copilot-text-primary">{h.headline}</span>
                      <span className="block text-xs text-copilot-text-secondary">{h.category}</span>
                      <span className="mt-1 block leading-relaxed">{h.detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div id="affordability-view" className="scroll-mt-28 md:scroll-mt-32">
          <h3 className="text-base font-semibold text-copilot-text-primary">Real-life affordability</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {liveResult.activeOffers.map((o) => (
              <Card key={o.slotId} variant="expatCopilot" className="p-4">
                <p className="font-semibold text-copilot-text-primary">{o.label}</p>
                <ul className="mt-2 space-y-1 text-sm text-copilot-text-secondary">
                  <li>Est. net monthly: {formatEur(o.netPayEstimate.estimatedNetMonthly)}</li>
                  <li>Modelled rent pressure: {formatEur(o.affordabilitySummary.rentPressureMonthly)}</li>
                  <li>City + commute pressure: {formatEur(o.affordabilitySummary.cityCostPressureMonthly)}</li>
                  <li className="font-medium text-copilot-text-primary">Est. remaining: {formatEur(o.affordabilitySummary.estimatedNetRemainingMonthly)}</li>
                </ul>
                <p className="mt-2 text-xs text-copilot-text-secondary">{o.affordabilitySummary.note}</p>
                <p className="mt-2 text-xs text-copilot-text-secondary">{o.netPayEstimate.modelNote}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {liveResult.activeOffers.map((o) => (
            <Card key={`sw-${o.slotId}`} variant="expatCopilot" className="p-4">
              <p className="font-semibold text-copilot-text-primary">{o.label} — strengths &amp; review points</p>
              <p className="mt-2 text-xs font-bold uppercase text-copilot-primary">Strengths</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
                {o.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs font-bold uppercase text-amber-800">Hidden downsides / review</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
                {o.weaknesses.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div id="risk-highlights" className="scroll-mt-28 md:scroll-mt-32">
          <h3 className="text-base font-semibold text-copilot-text-primary">Risk highlights</h3>
          <div className="mt-3 space-y-3">
            {liveResult.activeOffers.map((o) => (
              <div key={`risk-${o.slotId}`}>
                <p className="text-sm font-semibold text-copilot-text-primary">{o.label}</p>
                <ul className="mt-1 space-y-2">
                  {o.riskFlags.map((f, i) => (
                    <li
                      key={`${o.slotId}-${i}`}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-sm",
                        f.severity === "strong" && "border-red-300/80 bg-red-50/80 text-red-950",
                        f.severity === "watch" && "border-amber-300/80 bg-amber-50/70 text-amber-950",
                        f.severity === "info" && "border-copilot-primary/15 bg-copilot-bg-soft/50 text-copilot-text-secondary"
                      )}
                    >
                      {f.message}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div id="negotiation-prep" className="scroll-mt-28 md:scroll-mt-32">
          <h3 className="text-base font-semibold text-copilot-text-primary">Questions to ask / negotiation prep</h3>
          <div className="mt-3 space-y-4">
            {liveResult.activeOffers.map((o) => (
              <Card key={`q-${o.slotId}`} variant="expatCopilot" className="p-4">
                <p className="font-semibold text-copilot-text-primary">{o.label}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
                  {o.negotiationQuestions.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <CollapsiblePanel
          className={cn("border-copilot-primary/12 bg-copilot-bg-soft/30 shadow-none")}
          titleClassName="text-sm font-semibold text-copilot-text-primary"
          triggerClassName="hover:bg-copilot-bg-soft/60"
          title="How we calculated this (assumptions)"
          defaultOpen={false}
        >
          <InfoBox title="Assumptions echoed" variant="info" className="text-sm">
            <ul className="list-disc space-y-1 pl-5">
              {liveResult.assumptionsEcho.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </InfoBox>
        </CollapsiblePanel>

        <div id="download-summary" className="scroll-mt-28 md:scroll-mt-32">
        <Card variant="expatCopilot" className="border border-copilot-primary/10 bg-copilot-bg-soft/40 p-5 md:p-6">
          <h3 className="text-base font-semibold text-copilot-text-primary">Save or share</h3>
          <p className="mt-1 text-sm text-copilot-text-secondary">
            Optional — keep a copy for your files or send the same inputs to a partner. Exports include offers, priorities, topic-by-topic winners, and questions.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              type="button"
              className="min-h-0 px-4 py-2.5"
              disabled={!exportPayload}
              onClick={() => exportPayload && downloadJobOfferComparisonHtml(exportPayload)}
            >
              Download HTML
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="min-h-0 px-4 py-2.5"
              disabled={!exportPayload}
              onClick={() => exportPayload && openPrintJobOfferComparisonSummary(exportPayload)}
            >
              Print / PDF
            </Button>
            <Button type="button" variant="secondary" className="min-h-0 gap-1.5 px-4 py-2.5" onClick={copyShareLink}>
              <Share2 className="h-4 w-4" aria-hidden />
              Copy link
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="min-h-0 px-4 py-2.5"
              onClick={() => {
                clearJobOfferComparisonStorage();
                setState(defaultFormState());
                setHasRun(false);
                setLastRunState(null);
                router.replace(pathname, { scroll: false });
              }}
            >
              Reset all
            </Button>
          </div>
          {shareHint ? <p className="mt-3 text-sm font-medium text-emerald-800">{shareHint}</p> : null}
        </Card>
      </div>

      <section id="recommended-services" className="scroll-mt-28 border-t border-copilot-primary/10 pt-8 md:scroll-mt-32">
        <h3 className="text-base font-semibold text-copilot-text-primary">{OFFER_COMPARISON_RECOMMENDED_SERVICES.sectionTitle}</h3>
        <p className="mt-1 text-sm text-copilot-text-secondary">{OFFER_COMPARISON_RECOMMENDED_SERVICES.sectionSubtitle}</p>
        <div className="mt-5">
          <JobOfferComparisonRecommendedServices result={liveResult} />
        </div>
      </section>
          </>
        ) : null}
      </div>

      <div id="related-tools-inline" className="scroll-mt-28 border-t border-copilot-primary/10 pt-8 md:scroll-mt-32">
        <h3 className="text-base font-semibold text-copilot-text-primary">Related tools</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {JOB_OFFER_RELATED_TOOLS.map((t) => (
            <li key={t.href}>
              <Link href={t.href} className="text-sm font-medium text-copilot-primary hover:underline">
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="sr-only" aria-live="polite">
        Job offer comparison tool — page context {pageContext}
      </p>
    </div>
  );
}

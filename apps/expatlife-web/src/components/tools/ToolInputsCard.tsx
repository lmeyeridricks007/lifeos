"use client";

import { useRef, useState, useMemo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { cn } from "@/lib/cn";
import {
  CalendarClock,
  ChevronDown,
  ClipboardList,
  Compass,
  FileText,
  Link2,
  Loader2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type MovingChecklistInputValues = {
  from: string;
  stage: string;
  household: string;
  region: string;
  city: string;
  employment: string;
  housingReadiness: string;
  shippingNeeds: boolean;
  kidsSchoolNeeds: boolean;
  largeMoneyTransfer: boolean;
  hasCoreDocsReady: boolean;
  needsTemporaryHousing: boolean;
};

export type ArrivalPlannerInputValues = {
  from: string;
  arrivalDate: string;
  addressStatus: "yes" | "soon" | "no";
  household: "solo" | "partner" | "kids";
  needBankingSoon: "yes" | "no";
};

type OriginOption = { value: string; label: string };

type BaseToolInputsCardProps = {
  onGenerate: () => void;
  whatYouGetTitle?: string;
  whatYouGetItems?: string[];
  toolId?: string;
  className?: string;
  title?: string;
  generateLabel?: string;
  /** When true, button shows loading spinner and is disabled */
  isGenerating?: boolean;
};

type MovingChecklistToolInputsCardProps = BaseToolInputsCardProps & {
  mode?: "moving-checklist";
  values: MovingChecklistInputValues;
  onChange: (values: MovingChecklistInputValues) => void;
  originCountries: OriginOption[];
};

type CustomToolInputsCardProps = BaseToolInputsCardProps & {
  mode: "custom";
  customForm: ReactNode;
  originCountries: OriginOption[];
  originValue: string;
  onOriginChange: (value: string) => void;
};

type ToolInputsCardProps = MovingChecklistToolInputsCardProps | CustomToolInputsCardProps;

type OriginSelectorProps = {
  value: string;
  originCountries: OriginOption[];
  onChange: (value: string) => void;
};

function pickWhatYouGetIcon(item: string, index: number): LucideIcon {
  const label = item.toLowerCase();
  if (label.includes("phase") || label.includes("checklist")) return ClipboardList;
  if (label.includes("document")) return FileText;
  if (label.includes("link") || label.includes("guide")) return Link2;
  if (label.includes("tailored") || label.includes("route") || label.includes("personal")) return Compass;
  if (label.includes("week") || label.includes("month") || label.includes("appointment")) return CalendarClock;
  return index === 0 ? Sparkles : ClipboardList;
}

function OriginSelector({ value, originCountries, onChange }: OriginSelectorProps) {
  const [originOpen, setOriginOpen] = useState(false);
  const [originSearch, setOriginSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOrigins = useMemo(() => {
    if (!originSearch.trim()) return originCountries;
    const q = originSearch.toLowerCase();
    return originCountries.filter(
      (o) => o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q)
    );
  }, [originCountries, originSearch]);

  const selectedOriginLabel = originCountries.find((c) => c.value === value)?.label ?? value;

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">Origin country</label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setOriginOpen((o) => !o)}
          className="flex h-11 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3 text-left text-sm text-slate-900 shadow-sm"
        >
          <span>{selectedOriginLabel}</span>
          <ChevronDown className={cn("h-4 w-4", originOpen && "rotate-180")} />
        </button>
        {originOpen ? (
          <>
            <div
              className="fixed inset-0 z-10"
              aria-hidden
              onClick={() => setOriginOpen(false)}
            />
            <div className="absolute top-full left-0 right-0 z-20 mt-1 max-h-60 overflow-auto rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
              <input
                type="text"
                placeholder="Search country..."
                value={originSearch}
                onChange={(e) => setOriginSearch(e.target.value)}
                className="mx-2 mb-2 w-[calc(100%-1rem)] rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
              {filteredOrigins.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOriginOpen(false);
                    setOriginSearch("");
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-slate-50"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export function ToolInputsCard(props: ToolInputsCardProps) {
  const {
    onGenerate,
    whatYouGetTitle = "What you'll get",
    whatYouGetItems = [],
    toolId = "tool-inputs",
    className,
    title = "Your situation",
    generateLabel = "Generate checklist",
    isGenerating = false,
  } = props;

  return (
    <div id={toolId} className={cn("scroll-mt-24", className)}>
      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <div className="mt-4 space-y-5">
            {props.mode === "custom" ? (
              <>
                <OriginSelector
                  value={props.originValue}
                  originCountries={props.originCountries}
                  onChange={props.onOriginChange}
                />
                {props.customForm}
              </>
            ) : (
              <>
                <OriginSelector
                  value={props.values.from}
                  originCountries={props.originCountries}
                  onChange={(from) => props.onChange({ ...props.values, from })}
                />

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Arrival stage
                  </label>
                  <SegmentedControl
                    name="stage"
                    options={[
                      { value: "before-move", label: "Before move" },
                      { value: "arriving-soon", label: "Arriving soon" },
                      { value: "already-arrived", label: "Already arrived" },
                    ]}
                    value={props.values.stage}
                    onChange={(v) => props.onChange({ ...props.values, stage: v })}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Household</label>
                  <SegmentedControl
                    name="household"
                    options={[
                      { value: "solo", label: "Solo" },
                      { value: "partner", label: "Partner" },
                      { value: "kids", label: "With kids" },
                    ]}
                    value={props.values.household}
                    onChange={(v) => props.onChange({ ...props.values, household: v })}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Employment</label>
                  <SegmentedControl
                    name="employment"
                    options={[
                      { value: "job-offer", label: "Job offer" },
                      { value: "employed", label: "Employed" },
                      { value: "searching", label: "Searching" },
                    ]}
                    value={props.values.employment}
                    onChange={(v) => props.onChange({ ...props.values, employment: v })}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Nationality group
                  </label>
                  <SegmentedControl
                    name="region"
                    options={[
                      { value: "eu", label: "EU/EEA/Swiss" },
                      { value: "non-eu", label: "Non-EU" },
                    ]}
                    value={props.values.region}
                    onChange={(v) => props.onChange({ ...props.values, region: v })}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Housing for arrival
                  </label>
                  <SegmentedControl
                    name="housingReadiness"
                    options={[
                      { value: "no-place-yet", label: "No place yet" },
                      { value: "temporary-place", label: "Temporary" },
                      { value: "confirmed-rental", label: "Confirmed rental" },
                      { value: "employer-arranged", label: "Employer arranged" },
                    ]}
                    value={props.values.housingReadiness}
                    onChange={(v) => props.onChange({ ...props.values, housingReadiness: v })}
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={props.values.shippingNeeds}
                      onChange={(e) => props.onChange({ ...props.values, shippingNeeds: e.target.checked })}
                      className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-700">Shipping household goods</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={props.values.kidsSchoolNeeds}
                      onChange={(e) => props.onChange({ ...props.values, kidsSchoolNeeds: e.target.checked })}
                      className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-700">School / childcare prep</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={props.values.largeMoneyTransfer}
                      onChange={(e) => props.onChange({ ...props.values, largeMoneyTransfer: e.target.checked })}
                      className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-700">Large money transfer</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={props.values.hasCoreDocsReady}
                      onChange={(e) => props.onChange({ ...props.values, hasCoreDocsReady: e.target.checked })}
                      className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-700">Core documents ready</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={props.values.needsTemporaryHousing}
                      onChange={(e) => props.onChange({ ...props.values, needsTemporaryHousing: e.target.checked })}
                      className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-700">Need temporary housing</span>
                  </label>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    City (optional)
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g. Amsterdam"
                    value={props.values.city}
                    onChange={(e) => props.onChange({ ...props.values, city: e.target.value })}
                  />
                </div>
              </>
            )}

            <Button
              type="button"
              onClick={onGenerate}
              disabled={isGenerating}
              className="w-full sm:w-auto"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                  Building...
                </>
              ) : (
                generateLabel
              )}
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-brand-50 via-cyan-50 to-sky-50 px-5 py-4">
              <span className="inline-flex items-center rounded-full border border-brand-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                Preview
              </span>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{whatYouGetTitle}</h3>
            </div>
            <ul className="space-y-2 p-4">
              {whatYouGetItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2.5"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 ring-1 ring-slate-200">
                    {(() => {
                      const Icon = pickWhatYouGetIcon(item, i);
                      return <Icon className="h-4 w-4" />;
                    })()}
                  </span>
                  <span className="pt-1 text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

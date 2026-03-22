"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type ResolvedScenario = {
  id: string;
  chips?: string[];
  personaTitle: string;
  whatMatters: string[];
  readingOrderLinks: Array<{ title: string; href: string }>;
  startToolLink: { title: string; href: string } | null;
  unknownsToConfirm: string[];
};

const CHIP_OPTIONS = [
  { id: "work", label: "Work" },
  { id: "partner_family", label: "Partner & family" },
  { id: "study", label: "Study" },
  { id: "unsure", label: "Unsure" },
];

type PillarScenarioCardsProps = {
  scenarios: ResolvedScenario[];
  /** Controlled: selected chip filter (use with onChipChange) */
  selectedChip?: string;
  /** Controlled: when chip filter changes */
  onChipChange?: (chip: string) => void;
};

export function PillarScenarioCards({
  scenarios,
  selectedChip: controlledChip,
  onChipChange,
}: PillarScenarioCardsProps) {
  const [internalChip, setInternalChip] = useState("all");
  const selectedChip = controlledChip ?? internalChip;
  const setSelectedChip = onChipChange ?? setInternalChip;

  const filtered = useMemo(() => {
    if (selectedChip === "all") return scenarios;
    return scenarios.filter((s) => s.chips?.includes(selectedChip));
  }, [scenarios, selectedChip]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedChip("all")}
          className={cn(
            "rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold transition",
            selectedChip === "all" ? "bg-sky-100 text-sky-800" : "bg-transparent text-slate-600 hover:text-slate-900"
          )}
        >
          All
        </button>
        {CHIP_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setSelectedChip(opt.id)}
            className={cn(
              "rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold transition",
              selectedChip === opt.id ? "bg-sky-100 text-sky-800" : "bg-transparent text-slate-600 hover:text-slate-900"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {filtered.map((scenario) => (
          <div
            key={scenario.id}
            className="rounded-r-2xl border border-slate-200 border-l-4 border-l-sky-400 bg-white p-5 shadow-sm"
          >
            <h3 className="text-base font-semibold text-slate-900">{scenario.personaTitle}</h3>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-600">
              {scenario.whatMatters.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Suggested reading order</p>
              <ul className="flex flex-wrap gap-2">
                {scenario.readingOrderLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium text-brand-700 hover:underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {scenario.startToolLink && (
              <div className="mt-4">
                <Link
                  href={scenario.startToolLink.href}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Start: {scenario.startToolLink.title}
                  {!String(scenario.startToolLink.title).trim().endsWith("→") ? (
                    <span aria-hidden>→</span>
                  ) : null}
                </Link>
              </div>
            )}
            <div className="mt-4 border-t border-slate-100 pt-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Confirm with official sources</p>
              <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs text-slate-600">
                {scenario.unknownsToConfirm.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

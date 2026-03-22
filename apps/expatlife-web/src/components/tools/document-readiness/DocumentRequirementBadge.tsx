"use client";

import { FileCheck, Languages } from "lucide-react";

export function DocumentRequirementBadge({
  type,
  label,
}: {
  type: "apostille" | "translation" | "country";
  label?: string;
}) {
  const config = {
    apostille: {
      icon: FileCheck,
      defaultLabel: "Apostille may be relevant",
      className: "bg-amber-50 text-amber-800 ring-amber-200",
    },
    translation: {
      icon: Languages,
      defaultLabel: "Translation may be relevant",
      className: "bg-sky-50 text-sky-800 ring-sky-200",
    },
    country: {
      icon: FileCheck,
      defaultLabel: "Country-specific requirements may vary",
      className: "bg-slate-100 text-slate-700 ring-slate-200",
    },
  }[type];

  const Icon = config.icon;
  const text = label ?? config.defaultLabel;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ${config.className}`}
    >
      <Icon className="h-3 w-3 shrink-0" />
      {text}
    </span>
  );
}

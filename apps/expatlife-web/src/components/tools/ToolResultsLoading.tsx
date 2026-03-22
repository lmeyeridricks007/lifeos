"use client";

import { Loader2 } from "lucide-react";

const DEFAULT_MESSAGE = "Building your plan...";

type ToolResultsLoadingProps = {
  message?: string;
};

export function ToolResultsLoading({ message = DEFAULT_MESSAGE }: ToolResultsLoadingProps) {
  return (
    <div
      className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/80 py-16 px-6"
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <Loader2 className="h-10 w-10 animate-spin text-brand-600" aria-hidden />
      <p className="mt-4 text-sm font-medium text-slate-600">{message}</p>
    </div>
  );
}

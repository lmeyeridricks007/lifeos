"use client";

import { Globe } from "lucide-react";

export function DocumentCountryInfoBlock({ message }: { message: string }) {
  if (!message?.trim()) return null;
  return (
    <div className="flex gap-2 rounded-lg border border-slate-200 bg-slate-50/80 p-2.5 text-sm text-slate-700">
      <Globe className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
      <p>{message}</p>
    </div>
  );
}

import Link from "next/link";
import { cn } from "@/lib/cn";

export type ToolItem = {
  title: string;
  href: string;
  description: string;
  timeToComplete?: string;
};

const TOOL_ACCENT = [
  "border-l-4 border-l-sky-500 bg-sky-50/50",
  "border-l-4 border-l-teal-500 bg-teal-50/50",
  "border-l-4 border-l-amber-500 bg-amber-50/50",
  "border-l-4 border-l-emerald-500 bg-emerald-50/50",
] as const;

export function PillarToolsStrip({ tools }: { tools: ToolItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {tools.map((tool, i) => (
        <div
          key={tool.href}
          className={cn(
            "rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:shadow",
            TOOL_ACCENT[i % TOOL_ACCENT.length]
          )}
        >
          <h3 className="text-base font-semibold text-slate-900">{tool.title}</h3>
          <p className="mt-2 flex-1 text-sm text-slate-600">{tool.description}</p>
          {tool.timeToComplete ? (
            <p className="mt-2 text-xs text-slate-500">Often ~{tool.timeToComplete} to complete.</p>
          ) : null}
          <Link
            href={tool.href}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-800 hover:underline"
          >
            Open tool
            <span aria-hidden>→</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

export type ExampleScenario = {
  id: string;
  title: string;
  summary: string;
  inputs: Record<string, string>;
  topTasks: string[];
  links?: Array<{ label: string; href: string }>;
};

type ExamplesSectionProps = {
  title?: string;
  subtitle?: string;
  /** When false, heading and subtitle are not rendered (e.g. when inside a collapsible that has its own title) */
  showHeading?: boolean;
  examples: ExampleScenario[];
  toolPath: string;
  paramKeys: string[];
  /** ID to scroll to after navigation (e.g. "tool-inputs" for the form section). Appended as hash to the link. */
  scrollToId?: string;
  prefilledCtaLabel?: string;
  className?: string;
};

function buildPrefillHref(
  toolPath: string,
  paramKeys: string[],
  inputs: Record<string, string>,
  scrollToId?: string
): string {
  const params = new URLSearchParams();
  for (const key of paramKeys) {
    const v = inputs[key];
    if (v != null && v !== "") params.set(key, v);
  }
  const q = params.toString();
  const base = q ? `${toolPath}?${q}` : toolPath;
  const hash = scrollToId ? `#${scrollToId}` : "";
  return `${base}${hash}`;
}

export function ExamplesSection({
  title = "Example scenarios",
  subtitle,
  showHeading = true,
  examples,
  toolPath,
  paramKeys,
  scrollToId = "tool-inputs",
  prefilledCtaLabel = "Use this scenario",
  className,
}: ExamplesSectionProps) {
  return (
    <section className={cn("space-y-6", className)}>
      {showHeading ? (
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
          ) : null}
        </div>
      ) : subtitle ? (
        <p className="text-sm text-slate-600">{subtitle}</p>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {examples.map((ex) => (
          <div
            key={ex.id}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="font-semibold text-slate-900">{ex.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{ex.summary}</p>
            {ex.topTasks?.length ? (
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                {ex.topTasks.slice(0, 3).map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand-500">•</span>
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
            <Link
              href={buildPrefillHref(toolPath, paramKeys, ex.inputs, scrollToId)}
              className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              {prefilledCtaLabel}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

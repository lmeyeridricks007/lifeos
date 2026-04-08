import Link from "next/link";
import { utilitiesWorkedExamplePresets } from "@/src/lib/tools/utilities-services/checklistConfig";
import { buildUtilitiesServicesPresetHref } from "@/src/lib/tools/utilities-services/shareState";

export function UtilitiesServicesScenarioCards({ canonicalPath }: { canonicalPath: string }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-copilot-text-secondary">
        Each card loads a realistic profile into the calculator via the URL — scroll to <strong className="text-copilot-text-primary">Calculate</strong>{" "}
        to see bands, compare vs fixed labels, and the checklist. Adjust answers to match your lease afterward.
      </p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {utilitiesWorkedExamplePresets.map((p) => (
          <div
            key={p.id}
            className="flex flex-col rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm md:p-5 border-l-4 border-l-copilot-accent/50"
          >
            <p className="text-sm font-semibold text-copilot-text-primary">{p.title}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-copilot-text-secondary">{p.body}</p>
            <Link
              href={buildUtilitiesServicesPresetHref(canonicalPath, p.inputPatch)}
              className="mt-4 inline-flex min-h-10 items-center justify-center rounded-xl border border-copilot-primary/20 bg-copilot-bg-soft/60 px-3 text-sm font-semibold text-copilot-text-primary hover:border-copilot-primary/35 hover:bg-copilot-bg-soft"
            >
              Load this profile →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

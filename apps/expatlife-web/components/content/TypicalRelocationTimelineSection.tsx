import Link from "next/link";
import { Section } from "@/components/ui/section";

const PHASES = [
  {
    title: "6–12 weeks before the move",
    items: [
      "Prepare documents",
      "Confirm visa / residence route",
      "Begin housing search",
      "Estimate costs",
    ],
  },
  {
    title: "2–4 weeks before the move",
    items: [
      "Finalise travel",
      "Confirm first address",
      "Prepare hand-luggage document pack",
      "Arrange transfer strategy",
    ],
  },
  {
    title: "First week after arrival",
    items: [
      "Register address",
      "Receive BSN",
      "Start bank and insurance setup",
    ],
  },
  {
    title: "First 90 days",
    items: [
      "DigiD",
      "Transport",
      "GP (huisarts)",
      "Daily-life routines",
      "Housing and admin stability",
    ],
  },
] as const;

export function TypicalRelocationTimelineSection() {
  return (
    <Section
      id="typical-relocation-timeline"
      title="Typical relocation timeline"
      subtitle="A practical timeline for moving to the Netherlands — from preparation to your first months."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PHASES.map((phase) => (
          <div
            key={phase.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-base font-semibold text-slate-900">{phase.title}</h3>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600">
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600">
        For a detailed week-by-week view, see our{" "}
        <Link href="/netherlands/moving-to-netherlands-timeline" className="font-medium text-brand-700 underline hover:text-brand-800">
          moving to the Netherlands timeline
        </Link>{" "}
        and use the{" "}
        <Link href="/netherlands/moving/tools/moving-checklist" className="font-medium text-brand-700 underline hover:text-brand-800">
          moving checklist tool
        </Link>{" "}
        to track your progress.
      </p>
    </Section>
  );
}

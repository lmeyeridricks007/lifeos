import Link from "next/link";

export type TimelineStage = {
  id: string;
  label: string;
  goal: string;
  actions: string[];
  links: Array<{ label: string; href: string }>;
};

export function PillarTimeline({ stages }: { stages: TimelineStage[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stages.map((stage, i) => (
        <div
          key={stage.id}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {i + 1}. {stage.label}
          </div>
          <h3 className="text-base font-semibold text-slate-900">{stage.goal}</h3>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-600">
            {stage.actions.map((action, j) => (
              <li key={j}>{action}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {stage.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-700 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

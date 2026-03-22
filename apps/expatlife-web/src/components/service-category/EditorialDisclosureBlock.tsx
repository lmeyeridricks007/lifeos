import { cn } from "@/lib/cn";

type Props = { disclosure: string[]; className?: string };

export function EditorialDisclosureBlock({ disclosure, className }: Props) {
  return (
    <div className={cn("rounded-xl border border-slate-200 bg-amber-50/50 p-4", className)}>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
        Editorial disclosure
      </p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-700">
        {disclosure.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

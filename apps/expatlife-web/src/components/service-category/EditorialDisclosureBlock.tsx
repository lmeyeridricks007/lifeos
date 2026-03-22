type Props = { disclosure: string[] };

export function EditorialDisclosureBlock({ disclosure }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-amber-50/50 p-4">
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

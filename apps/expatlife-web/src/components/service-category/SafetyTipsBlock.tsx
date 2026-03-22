import { ShieldCheck } from "lucide-react";

type Props = {
  heading: string;
  paragraphs: string[];
  points: string[];
};

export function SafetyTipsBlock({ heading, paragraphs, points }: Props) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-5">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
        <ShieldCheck className="h-5 w-5 text-amber-600" aria-hidden />
        {heading}
      </h3>
      {paragraphs.map((p, i) => (
        <p key={i} className={`text-sm text-slate-700 leading-relaxed ${i > 0 ? "mt-3" : "mt-2"}`}>
          {p}
        </p>
      ))}
      <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-700">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

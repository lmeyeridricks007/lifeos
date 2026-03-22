import Link from "next/link";
import type { CityHubPageData } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";

export function ProcessTimeline({ data }: { data: CityHubPageData }) {
  const { registration } = data;
  const steps = registration.steps || [];
  if (!steps.length) return null;

  const accents = [
    "border-l-blue-500 bg-blue-50/80",
    "border-l-teal-500 bg-teal-50/80",
    "border-l-amber-500 bg-amber-50/80",
    "border-l-blue-500 bg-blue-50/80",
    "border-l-teal-500 bg-teal-50/80",
  ] as const;
  const nodeAccents = [
    "border-blue-400 bg-blue-50 text-blue-700",
    "border-teal-400 bg-teal-50 text-teal-700",
    "border-amber-400 bg-amber-50 text-amber-700",
    "border-blue-400 bg-blue-50 text-blue-700",
    "border-teal-400 bg-teal-50 text-teal-700",
  ] as const;

  return (
    <div className="relative">
      <div
        className="absolute left-[22px] top-6 bottom-12 w-0.5 rounded-full bg-slate-200/80"
        aria-hidden
      />
      <ol className="list-none space-y-0">
        {steps.map((step, index) => {
          const acc = accents[index % accents.length];
          const nodeAcc = nodeAccents[index % nodeAccents.length];
          return (
            <li
              key={index}
              className="relative flex items-stretch gap-5 pb-6 last:pb-0"
            >
              <span
                className={cn(
                  "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold shadow-sm ring-4 ring-white",
                  nodeAcc
                )}
                aria-hidden
              >
                {index + 1}
              </span>
              <div
                className={cn(
                  "min-w-0 flex-1 rounded-xl border border-slate-200/80 border-l-4 py-3.5 px-4 shadow-sm transition hover:shadow",
                  acc
                )}
              >
                <p className="text-sm font-medium leading-relaxed text-slate-700">
                  {step}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
      {registration.officialSourceLinks?.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {registration.officialSourceLinks.map((src) => (
            <a
              key={src.url}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              {src.label}
              <span className="ml-1" aria-hidden>→</span>
            </a>
          ))}
        </div>
      ) : null}
      {registration.internalLinks?.length ? (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-4">
          {registration.internalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

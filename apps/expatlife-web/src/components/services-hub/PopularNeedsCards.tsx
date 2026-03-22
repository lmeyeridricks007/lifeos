import Link from "next/link";
import type { PopularNeedCard } from "@/src/lib/services-hub/types";
import { ArrowRight } from "lucide-react";
import { isRouteLive } from "@/src/lib/routes/routeStatus";

export function PopularNeedsCards({ needs }: { needs: PopularNeedCard[] }) {
  const visible = needs.filter((n) => isRouteLive(n.href));
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {visible.map((need, i) => (
        <Link
          key={need.href}
          href={need.href}
          className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
        >
          <h3 className="text-base font-semibold text-slate-900">{need.title}</h3>
          <p className="mt-1 flex-1 text-sm text-slate-600 leading-relaxed">
            {need.description}
          </p>
          <span className="mt-3 inline-flex items-center text-sm font-medium text-brand-700 group-hover:text-brand-800">
            {need.linkLabel}
            <ArrowRight className="ml-1 h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}

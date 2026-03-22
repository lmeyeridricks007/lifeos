"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  ROUTE_TYPE_LABELS,
  ROUTE_COMPARISON_ENTRIES,
  type RouteTypeFilter,
  type RouteComparisonEntry,
} from "@/src/data/visa-comparison";

const FILTER_OPTIONS: RouteTypeFilter[] = ["all", "work", "entrepreneur", "study", "family"];

function filterRoutes(routes: RouteComparisonEntry[], filter: RouteTypeFilter): RouteComparisonEntry[] {
  if (filter === "all") return routes;
  return routes.filter((r) => r.routeType === filter);
}

export function CompareVisasFilterChips() {
  const [activeFilter, setActiveFilter] = useState<RouteTypeFilter>("all");
  const filtered = filterRoutes(ROUTE_COMPARISON_ENTRIES, activeFilter);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by route type">
        {FILTER_OPTIONS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={activeFilter === f}
            onClick={() => setActiveFilter(f)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              activeFilter === f
                ? "bg-brand-600 text-white shadow"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
          >
            {ROUTE_TYPE_LABELS[f]}
          </button>
        ))}
      </div>
      <div id="featured-routes" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((route) => (
          <div
            key={route.routeId}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-200 hover:shadow-md"
          >
            <h3 className="font-semibold text-slate-900">{route.title}</h3>
            <p className="mt-1 text-sm font-medium text-brand-600">{route.bestFor}</p>
            <p className="mt-2 text-sm text-slate-600">{route.shortDescription}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {route.idealForTags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={route.guideHref} className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700">
              View full guide →
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

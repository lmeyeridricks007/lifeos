"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { cn } from "@/lib/cn";
import type { SearchResult } from "@/src/lib/search/searchDocument";
import { SearchBadge } from "./SearchBadge";

export function SearchResultCard({ result, className }: { result: SearchResult; className?: string }) {
  return (
    <Link
      href={result.href}
      className={cn(
        "group flex min-h-[4.5rem] min-w-0 gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:gap-4 sm:p-5",
        className
      )}
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:h-[4.5rem] sm:w-[4.5rem]">
        {result.image ? (
          <Image
            src={result.image}
            alt={result.imageAlt || "Page thumbnail"}
            fill
            className="object-cover"
            sizes="72px"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400" aria-hidden>
            <FileText className="h-7 w-7" />
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 gap-y-1">
          <SearchBadge pageType={result.pageType} label={result.categoryLabel} />
          {result.section ? (
            <span className="truncate text-xs font-medium text-slate-500">{result.section}</span>
          ) : null}
        </div>
        <h3 className="mt-2 break-words text-base font-semibold leading-snug text-slate-900 group-hover:text-brand-800 sm:text-lg">
          {result.title}
        </h3>
        {result.description ? (
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-600">{result.description}</p>
        ) : null}
      </div>
    </Link>
  );
}

import { cn } from "@/lib/cn";

/**
 * Move-pillar hero visual: unexpected work ending → clarify dates & stay → salary/rent/admin stack.
 * Compact on small viewports so the hero does not dominate the fold.
 */
export function LayoffsNetherlandsHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 shadow-card ring-1 ring-slate-900/[0.04]",
        "max-h-[min(200px,40svh)] sm:max-h-none sm:min-h-[200px]",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-sky-400/[0.08] blur-3xl sm:h-48 sm:w-48" aria-hidden />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-teal-400/[0.07] blur-3xl" aria-hidden />

      <div
        className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:aspect-[16/10] sm:p-5 md:p-6"
        role="img"
        aria-label="When a role ends without you choosing it: clarify exit dates and stay impact, then line up net pay, rent, and admin in parallel — not in one panic block."
      >
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            <span className="rounded-full border border-slate-300/90 bg-white/95 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-slate-800 shadow-sm sm:px-2.5 sm:py-1 sm:text-[10px]">
              Unexpected exit
            </span>
            <span className="rounded-full border border-sky-200/90 bg-sky-50/95 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-sky-900 shadow-sm sm:px-2.5 sm:py-1 sm:text-[10px]">
              Admin + stay check
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            {[
              { label: "Notice", tone: "slate" },
              { label: "Contract", tone: "sky" },
              { label: "Permit", tone: "violet" },
              { label: "Payroll", tone: "amber" },
              { label: "Rent", tone: "teal" },
              { label: "Family", tone: "rose" },
            ].map(({ label, tone }) => (
              <span
                key={label}
                className={cn(
                  "rounded-full border px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm sm:px-2 sm:py-0.5 sm:text-[9px]",
                  tone === "sky" && "border-sky-200/90 bg-sky-50/95 text-sky-900",
                  tone === "violet" && "border-violet-200/90 bg-violet-50/95 text-violet-900",
                  tone === "amber" && "border-amber-200/90 bg-amber-50/95 text-amber-900",
                  tone === "slate" && "border-slate-200/90 bg-white/95 text-slate-800",
                  tone === "rose" && "border-rose-200/90 bg-rose-50/95 text-rose-900",
                  tone === "teal" && "border-teal-200/90 bg-teal-50/95 text-teal-900"
                )}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-0.5 flex min-h-0 flex-1 items-center justify-center py-0 sm:mt-1 sm:py-0.5">
          <svg
            viewBox="0 0 400 200"
            className="h-[76px] w-auto max-w-full min-[400px]:h-[88px] sm:h-full sm:max-h-[min(100%,176px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <linearGradient id="laynl-path" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#0ea5e9" stopOpacity="0.42" />
                <stop offset="0.5" stopColor="#6366f1" stopOpacity="0.45" />
                <stop offset="1" stopColor="#14b8a6" stopOpacity="0.42" />
              </linearGradient>
              <linearGradient id="laynl-card" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="1" stopColor="#2dd4bf" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            <text x="20" y="16" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.88">
              Role ending
            </text>
            <text x="158" y="16" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.88">
              Dates · stay?
            </text>
            <text x="292" y="16" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.88">
              Money · home · admin
            </text>

            <g transform="translate(24 34)">
              <rect x="0" y="0" width="88" height="68" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.05" opacity="0.96" />
              <rect x="10" y="10" width="56" height="5" rx="2" fill="#e0f2fe" />
              <rect x="10" y="22" width="68" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="32" width="40" height="4" rx="1.5" fill="#e2e8f0" />
              <path d="M22 48h44" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
              <text x="14" y="58" fontSize="6.5" fontWeight="700" fill="#b45309" fontFamily="system-ui,sans-serif">
                unplanned end
              </text>
            </g>

            <path d="M112 68 H148" stroke="url(#laynl-path)" strokeWidth="2.5" strokeLinecap="round" opacity="0.88" />

            <g transform="translate(152 34)">
              <rect x="0" y="0" width="96" height="72" rx="12" fill="#f0f9ff" stroke="#38bdf8" strokeWidth="1.1" />
              <rect x="10" y="10" width="28" height="12" rx="3" fill="#e0e7ff" />
              <rect x="42" y="10" width="28" height="12" rx="3" fill="#ccfbf1" />
              <text x="14" y="19" fontSize="5.5" fontWeight="700" fill="#3730a3" fontFamily="system-ui,sans-serif">
                calendar
              </text>
              <text x="46" y="19" fontSize="5.5" fontWeight="700" fill="#115e59" fontFamily="system-ui,sans-serif">
                IND?
              </text>
              <rect x="10" y="28" width="76" height="4" rx="1.5" fill="#cbd5e1" opacity="0.65" />
              <rect x="10" y="38" width="56" height="4" rx="1.5" fill="#cbd5e1" opacity="0.5" />
              <g transform="translate(38 48)">
                <rect x="0" y="0" width="20" height="16" rx="3" fill="#fff" stroke="#64748b" strokeWidth="0.9" opacity="0.9" />
                <path d="M5 5h10M5 8h7" stroke="#64748b" strokeWidth="0.9" strokeLinecap="round" />
              </g>
              <text x="48" y="70" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0369a1" fontFamily="system-ui,sans-serif">
                clarify calmly
              </text>
            </g>

            <path d="M248 70 H272 C288 70 296 62 304 54" stroke="url(#laynl-path)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.82" />
            <path d="M248 70 H272 C288 70 296 78 304 86" stroke="url(#laynl-path)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.82" />

            <g transform="translate(284 38)">
              <rect x="0" y="0" width="96" height="80" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.05" />
              <rect x="10" y="10" width="76" height="5" rx="2" fill="url(#laynl-card)" opacity="0.28" />
              <rect x="10" y="22" width="34" height="12" rx="4" fill="#dbeafe" />
              <rect x="50" y="22" width="36" height="12" rx="4" fill="#d1fae5" />
              <text x="16" y="31" fontSize="6" fontWeight="700" fill="#1e40af" fontFamily="system-ui,sans-serif">
                net pay
              </text>
              <text x="54" y="31" fontSize="6" fontWeight="700" fill="#047857" fontFamily="system-ui,sans-serif">
                rent
              </text>
              <rect x="10" y="40" width="76" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="50" width="52" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="60" width="76" height="12" rx="5" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="0.9" />
              <text x="14" y="69" fontSize="6" fontWeight="700" fill="#4c1d95" fontFamily="system-ui,sans-serif">
                gemeente · insurer · next job
              </text>
            </g>

            <path d="M24 138h352" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 5" opacity="0.4" />
            <g fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight="600" fill="#64748b">
              <text x="68" y="132" textAnchor="middle">
                Exit facts
              </text>
              <text x="200" y="132" textAnchor="middle">
                Stay + timeline
              </text>
              <text x="334" y="132" textAnchor="middle">
                Stabilise month
              </text>
            </g>
            <text x="24" y="188" fontSize="7.5" fill="#64748b" fontWeight="500" fontFamily="system-ui,sans-serif">
              One transition — work ends, proofs and permits still need answers
            </text>
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1 sm:text-[10px]" aria-hidden>
          Work shock · date truth · stay check · rent and admin — in parallel, not in panic
        </p>
      </div>
    </div>
  );
}

import { cn } from "@/lib/cn";

/**
 * Premium editorial hero motif: layered “city cards”, rail link, and comparison cue —
 * aligned with Move / city guide hero graphics (SVG, no stock imagery).
 */
export function BestCitiesForExpatsHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 shadow-card ring-1 ring-slate-900/[0.04]",
        "max-h-[min(152px,34vh)] sm:max-h-none sm:min-h-[200px]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-sky-400/[0.09] blur-3xl sm:h-48 sm:w-48" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-copilot-primary/[0.07] blur-3xl" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:aspect-[16/11] sm:p-4 md:p-5">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          {["Shortlist", "Compare", "Commute", "Rent", "Family"].map((label) => (
            <span
              key={label}
              className="rounded-full border border-slate-200/90 bg-white/95 px-2 py-0.5 text-[7px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="relative mt-1 flex min-h-0 flex-1 items-center justify-center py-0.5 sm:mt-0 sm:py-1">
          <svg
            viewBox="0 0 400 224"
            className="h-[76px] w-auto max-w-full min-[400px]:h-[88px] sm:h-full sm:max-h-[min(100%,200px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bcfe-rail" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#0ea5e9" stopOpacity="0.45" />
                <stop offset="1" stopColor="#6366f1" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="bcfe-card" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#f8fafc" />
                <stop offset="1" stopColor="#eff6ff" />
              </linearGradient>
              <linearGradient id="bcfe-accent" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#2563eb" stopOpacity="0.9" />
                <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            <text x="20" y="20" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#64748b">
              Shortlist
            </text>
            <text x="268" y="20" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#64748b">
              Next tools
            </text>

            <path
              d="M108 118 C 150 108, 178 108, 220 118 S 290 128, 332 118"
              stroke="url(#bcfe-rail)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.95"
            />
            <circle cx="108" cy="118" r="4" fill="#0ea5e9" opacity="0.85" />
            <circle cx="220" cy="118" r="4" fill="#6366f1" opacity="0.85" />
            <circle cx="332" cy="118" r="4" fill="#2563eb" opacity="0.85" />

            <g opacity="0.9">
              <rect x="24" y="40" width="92" height="118" rx="14" fill="url(#bcfe-card)" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="36" y="54" width="68" height="8" rx="3" fill="#e2e8f0" />
              <rect x="36" y="70" width="52" height="6" rx="2" fill="#e2e8f0" opacity="0.85" />
              <path d="M40 92 L56 72 L72 88 L88 64 L100 92 Z" fill="#94a3b8" opacity="0.35" />
              <rect x="40" y="100" width="60" height="4" rx="2" fill="#cbd5e1" />
              <rect x="40" y="108" width="44" height="4" rx="2" fill="#cbd5e1" opacity="0.8" />
              <rect x="40" y="132" width="28" height="14" rx="6" fill="url(#bcfe-accent)" opacity="0.35" />
            </g>

            <g opacity="0.92">
              <rect x="154" y="52" width="96" height="124" rx="14" fill="white" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="166" y="66" width="72" height="8" rx="3" fill="#e2e8f0" />
              <rect x="166" y="82" width="56" height="6" rx="2" fill="#e2e8f0" opacity="0.85" />
              <rect x="170" y="98" width="64" height="36" rx="6" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1" />
              <path d="M178 124 L190 108 L202 118 L214 104 L226 120 L238 108 L246 124 Z" fill="#38bdf8" opacity="0.35" />
              <rect x="166" y="142" width="72" height="5" rx="2" fill="#e2e8f0" />
              <rect x="166" y="152" width="48" height="5" rx="2" fill="#e2e8f0" opacity="0.75" />
              <text x="174" y="114" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#0369a1">
                A · B · C
              </text>
            </g>

            <g opacity="0.88">
              <rect x="286" y="44" width="90" height="114" rx="14" fill="url(#bcfe-card)" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="298" y="58" width="66" height="8" rx="3" fill="#e2e8f0" />
              <rect x="298" y="74" width="50" height="6" rx="2" fill="#e2e8f0" opacity="0.85" />
              <rect x="302" y="92" width="20" height="28" rx="4" fill="#cbd5e1" opacity="0.55" />
              <rect x="328" y="84" width="20" height="36" rx="4" fill="#94a3b8" opacity="0.4" />
              <rect x="354" y="96" width="14" height="24" rx="3" fill="#64748b" opacity="0.35" />
              <rect x="298" y="128" width="58" height="5" rx="2" fill="#cbd5e1" />
              <rect x="298" y="138" width="40" height="5" rx="2" fill="#cbd5e1" opacity="0.75" />
            </g>

            <g>
              <rect x="118" y="168" width="164" height="36" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
              <text x="132" y="186" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#475569">
                Decision snapshot
              </text>
              <text x="132" y="198" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="#64748b">
                Rent · commute · family · international feel
              </text>
              <rect x="272" y="178" width="42" height="16" rx="8" fill="url(#bcfe-accent)" opacity="0.9" />
              <text x="282" y="189" fontFamily="system-ui,sans-serif" fontSize="7" fontWeight="700" fill="white">
                Next →
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

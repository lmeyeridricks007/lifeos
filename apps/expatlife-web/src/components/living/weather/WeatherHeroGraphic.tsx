import { cn } from "@/lib/cn";

/**
 * Weather-in-daily-life collage for the Living pillar.
 * Keeps the same framed editorial feel as the other Living hero graphics:
 * soft gradients, practical chips, and everyday Dutch movement rather than app-style forecast UI.
 */
export function WeatherHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate max-h-[10.25rem] overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-sky-50/70 via-white to-slate-50 shadow-card ring-1 ring-slate-900/[0.04] sm:max-h-none sm:aspect-[16/11]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl sm:-right-16 sm:-top-20 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-slate-400/10 blur-3xl sm:h-52 sm:w-52" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-3 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2">
          {[
            { k: "Wind", hint: "Feels stronger on the move" },
            { k: "Rain", hint: "Carry a backup layer" },
            { k: "Bike", hint: "Commuting changes everything" },
            { k: "Layers", hint: "Dress for change" },
            { k: "Light", hint: "Dark days matter too" },
          ].map(({ k, hint }) => (
            <span
              key={k}
              title={hint}
              className="rounded-full border border-slate-200/90 bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]"
            >
              {k}
            </span>
          ))}
        </div>

        <div className="relative mt-1 flex min-h-0 flex-1 items-center justify-center py-0 sm:mt-3 sm:py-2">
          <svg
            viewBox="0 0 400 268"
            className="h-full max-h-[9rem] w-auto max-w-full text-slate-800 sm:max-h-[min(100%,248px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="weather-panel" x1="12" y1="20" x2="382" y2="236" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e0f2fe" stopOpacity="0.8" />
                <stop offset="0.45" stopColor="#f8fafc" />
                <stop offset="1" stopColor="#eef2ff" stopOpacity="0.78" />
              </linearGradient>
              <linearGradient id="weather-card-a" x1="38" y1="74" x2="150" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#dbeafe" stopOpacity="0.65" />
                <stop offset="1" stopColor="#60a5fa" stopOpacity="0.16" />
              </linearGradient>
              <linearGradient id="weather-card-b" x1="246" y1="78" x2="344" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e2e8f0" stopOpacity="0.72" />
                <stop offset="1" stopColor="#94a3b8" stopOpacity="0.18" />
              </linearGradient>
              <linearGradient id="weather-bubble" x1="132" y1="26" x2="220" y2="96" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fef9c3" stopOpacity="0.76" />
                <stop offset="1" stopColor="#facc15" stopOpacity="0.18" />
              </linearGradient>
            </defs>

            <rect x="14" y="16" width="372" height="236" rx="18" fill="url(#weather-panel)" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.55" />

            {/* sky bands */}
            <path d="M30 92 C90 70 150 82 208 74 C266 66 314 76 370 58" stroke="#93c5fd" strokeWidth="2" strokeOpacity="0.45" />
            <path d="M28 112 C82 96 152 106 214 98 C278 90 330 100 370 88" stroke="#cbd5e1" strokeWidth="2" strokeOpacity="0.42" />
            <path d="M246 52 C264 34 302 34 319 52" stroke="#facc15" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.55" />

            {/* weather card left */}
            <g>
              <rect x="34" y="74" width="112" height="72" rx="16" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="44" y="86" width="92" height="18" rx="7" fill="url(#weather-card-a)" stroke="#60a5fa" strokeWidth="1" />
              <text x="90" y="98" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
                WIND + RAIN
              </text>
              <path d="M52 118 C64 108 78 128 92 118 C104 109 116 124 128 116" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.72" />
              <path d="M56 130 l-4 10 M74 128 l-4 10 M92 130 l-4 10 M110 128 l-4 10" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* sun/cloud bubble */}
            <g>
              <rect x="132" y="28" width="94" height="46" rx="16" fill="url(#weather-bubble)" stroke="#eab308" strokeWidth="1" strokeOpacity="0.32" />
              <path d="M156 72 L150 84 L168 74" fill="#fde68a" fillOpacity="0.62" stroke="#eab308" strokeOpacity="0.32" />
              <circle cx="160" cy="49" r="8" fill="#facc15" fillOpacity="0.9" />
              <path d="M176 53 C180 45 194 45 198 53 C206 52 210 58 210 64 H168 C168 58 171 54 176 53 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
            </g>

            {/* person with bike and jacket */}
            <g stroke="#0f172a" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="170" cy="128" r="15" fill="#fff" strokeWidth="1.8" />
              <path d="M155 160 C159 148 165 144 176 144 C188 144 194 150 198 160" strokeWidth="2" />
              <path d="M186 148 L202 140 L220 148" strokeWidth="2" />
              <circle cx="150" cy="188" r="16" fill="#fff" strokeWidth="1.8" />
              <circle cx="220" cy="188" r="16" fill="#fff" strokeWidth="1.8" />
              <path d="M150 188 L180 170 L220 188 L190 188 Z" strokeWidth="2" />
              <path d="M180 170 L176 152" strokeWidth="2" />
              <path d="M175 126 C180 132 186 132 190 126" strokeWidth="1.4" opacity="0.7" />
            </g>

            {/* right card */}
            <g>
              <rect x="248" y="78" width="108" height="70" rx="16" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="260" y="90" width="84" height="18" rx="7" fill="url(#weather-card-b)" stroke="#94a3b8" strokeWidth="1" />
              <text x="302" y="102" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
                LAYERS + PLAN
              </text>
              <rect x="264" y="118" width="68" height="7" rx="3.5" fill="#cbd5e1" opacity="0.95" />
              <rect x="264" y="130" width="52" height="7" rx="3.5" fill="#e2e8f0" opacity="0.9" />
            </g>

            {/* season chips */}
            <g>
              <rect x="52" y="160" width="54" height="26" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="79" y="176" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                SPRING
              </text>
              <rect x="250" y="160" width="54" height="26" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="277" y="176" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                AUTUMN
              </text>
              <rect x="308" y="160" width="54" height="26" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="335" y="176" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                WINTER
              </text>
            </g>

            {/* route band */}
            <g>
              <rect x="116" y="204" width="126" height="28" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <circle cx="134" cy="218" r="4.5" fill="#60a5fa" />
              <circle cx="170" cy="218" r="4.5" fill="#facc15" />
              <circle cx="206" cy="218" r="4.5" fill="#94a3b8" />
              <path d="M138 218 H164 M174 218 H200" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 5" />
            </g>

            {/* right-side rain and motion cue */}
            <g>
              <path d="M320 186 l-4 10 M334 182 l-4 10 M348 186 l-4 10" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
              <path d="M286 196 C299 189 315 189 328 196" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
            </g>
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1.5 sm:text-[11px]">
          Check once · dress for change · adjust the commute
        </p>
      </div>
    </div>
  );
}

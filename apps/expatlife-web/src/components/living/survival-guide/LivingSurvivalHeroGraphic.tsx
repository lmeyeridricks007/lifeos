import { cn } from "@/lib/cn";

/**
 * Editorial hero collage for the Living / Survival Guide — Dutch daily-life cues:
 * gracht houses, OV/train, bike, phone, weather, canal — no stock photos.
 */
export function LivingSurvivalHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate max-h-[min(52vw,220px)] overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-sky-50/90 shadow-card ring-1 ring-slate-900/[0.04] sm:max-h-none sm:rounded-2xl",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-copilot-primary/[0.08] blur-3xl sm:-right-16 sm:-top-20 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-20 -left-8 h-40 w-40 rounded-full bg-sky-400/12 blur-3xl sm:-bottom-24 sm:-left-10 sm:h-48 sm:w-48" />
      {/* subtle rain hint */}
      <div className="pointer-events-none absolute right-[12%] top-6 flex gap-1 opacity-40 sm:top-8">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="h-4 w-px rounded-full bg-sky-500/80"
            style={{ transform: `translateY(${i * 2}px)`, height: `${10 + i}px` }}
          />
        ))}
      </div>

      <div className="relative flex h-full min-h-0 flex-col justify-between p-4 sm:aspect-[16/11] sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {[
            { k: "OV", hint: "check in / out" },
            { k: "Fiets", hint: "default commute" },
            { k: "Apps", hint: "9292, bank, maps" },
            { k: "PIN", hint: "shop like a local" },
            { k: "Weer", hint: "layers win" },
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

        <div className="relative mt-2 flex min-h-0 flex-1 items-center justify-center py-1 sm:mt-4 sm:py-2">
          <svg
            viewBox="0 0 400 260"
            className="h-full max-h-[200px] w-auto max-w-full text-slate-800 sm:max-h-[min(100%,240px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sg-sky" x1="60" y1="0" x2="340" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#bae6fd" stopOpacity="0.55" />
                <stop offset="1" stopColor="#f8fafc" />
              </linearGradient>
              <linearGradient id="sg-canal" x1="0" y1="180" x2="400" y2="240" gradientUnits="userSpaceOnUse">
                <stop stopColor="#94a3b8" stopOpacity="0.25" />
                <stop offset="1" stopColor="#64748b" stopOpacity="0.12" />
              </linearGradient>
              <linearGradient id="sg-ns" x1="280" y1="95" x2="340" y2="175" gradientUnits="userSpaceOnUse">
                <stop stopColor="#facc15" />
                <stop offset="1" stopColor="#eab308" />
              </linearGradient>
            </defs>

            {/* skyline — stepped gables */}
            <rect x="20" y="24" width="360" height="138" rx="16" fill="url(#sg-sky)" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.5" />
            <path d="M52 120 L52 78 L68 62 L84 78 L84 120Z" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.2" />
            <path d="M92 120 L92 70 L108 52 L124 70 L124 120Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.2" />
            <path d="M132 120 L132 74 L148 58 L164 74 L164 120Z" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" />
            <path d="M172 120 L172 66 L188 50 L204 66 L204 120Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.2" />
            <path d="M212 120 L212 72 L228 56 L244 72 L244 120Z" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.2" />
            <path d="M252 120 L252 64 L268 48 L284 64 L284 120Z" fill="#cbd5e1" stroke="#475569" strokeWidth="1.2" />
            <path d="M292 120 L292 70 L308 54 L324 70 L324 120Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.2" />

            {/* bike lane */}
            <rect x="28" y="148" width="344" height="10" rx="2" fill="#fef3c7" fillOpacity="0.5" />
            <path d="M36 153h8M52 153h8M68 153h8" stroke="#d97706" strokeWidth="1.5" strokeDasharray="6 10" opacity="0.5" />

            <rect x="32" y="168" width="336" height="64" rx="12" fill="url(#sg-canal)" />
            <path d="M48 200h304" stroke="#64748b" strokeWidth="0.9" strokeDasharray="5 7" opacity="0.35" />

            {/* train with yellow accent (NS-adjacent, not a logo) */}
            <g stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M278 108h52l-9 54h-34l-9-54z" fill="url(#sg-ns)" stroke="#ca8a04" strokeWidth="1.5" />
              <rect x="286" y="118" width="36" height="22" rx="3" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <path d="M292 154v20M314 154v20" opacity="0.9" />
              <circle cx="303" cy="98" r="5" fill="#fff" stroke="#0f172a" strokeWidth="2" />
            </g>

            {/* cyclist */}
            <g transform="translate(72 152)">
              <circle cx="22" cy="22" r="17" fill="#fff" stroke="#0f172a" strokeWidth="2" />
              <path d="M22 9v26M9 22h26" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* phone + notification */}
            <rect x="118" y="118" width="50" height="84" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="2" />
            <rect x="126" y="128" width="34" height="40" rx="5" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="1" />
            <circle cx="143" cy="182" r="2.5" fill="#0f172a" />
            <circle cx="154" y="124" r="4" fill="#22c55e" stroke="#fff" strokeWidth="1" />

            {/* wind + cloud */}
            <path
              d="M255 88c-8-14-24-18-40-10"
              stroke="#64748b"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
              opacity="0.55"
            />
            <ellipse cx="268" cy="78" rx="14" ry="8" fill="#fff" stroke="#94a3b8" strokeWidth="1" opacity="0.85" />
          </svg>
        </div>

        <p className="mt-1 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-2 sm:text-[11px]">
          Gracht city · OV · fiets · phone-first life
        </p>
      </div>
    </div>
  );
}

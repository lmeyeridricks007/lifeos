# Remediation: PERF-P1-MOBILE-LCP + PERF-P1-HUB-TBT

**Issue IDs:** PERF-P1-MOBILE-LCP, PERF-P1-HUB-TBT  
**Date:** 2026-09-06  
**Scope:** Shared template mobile LCP + main-thread/TBT — no redesign, no analytics removal, no content stripping  
**App:** `apps/expatlife-web`  
**Sources:** `reports/seo-audit/07-PERFORMANCE-UX-AUDIT.md`, `page-performance.csv`, `template-performance.csv`

**Companion table:** [`performance-before-after.csv`](./performance-before-after.csv)

---

## Measurement method

| Phase | Host | Tool |
|-------|------|------|
| **Before** | Production `https://www.expatcopilot.com` | Lighthouse 12.2.1 mobile (audit `_lh/*`) |
| **After** | Local `next start` `http://127.0.0.1:3456` (this branch) | Same LH 12.2.1 mobile + simulate throttle |

**Caveat:** Absolute LCP on localhost is **not** identical to production CDN edge (image optimizer cold/warm, no CDN cache). Prefer **TBT**, **transfer bytes**, and **relative** LCP movement on image pages. Dating LCP “after” uses a **warmed** image-optimizer retest.

CLS stayed **0** on all sampled after runs.

---

## Root causes by template (before coding)

### PERF-P1-HUB-TBT — `/netherlands`

| Factor | Finding |
|--------|---------|
| LCP element | Text H1 (no hero image) — LCP was “Needs improvement” (~2.7s), not the main issue |
| TBT | **~1450ms** — style/layout + script evaluation |
| Template | `PortalNetherlandsTemplate` was **fully `"use client"`** for one origin `<Select>` |
| Shell | `AppClientShell` hydrates Header (MegaMenu, MobileNavDrawer, search) on every page |
| Third party | gtag `afterInteractive` (~174 KiB) on critical path |

Explore strip is RSC and capped — **not** the TBT driver.

### PERF-P1-MOBILE-LCP — Poor families

| Family | LCP driver | Code pattern |
|--------|------------|--------------|
| Dating / Best banks | ~600–860 KiB PNGs | `priority` + **`unoptimized`** heroes; `GuidePremiumVisualFigure` always `unoptimized` |
| City / services / tax / about / search | Smaller or already-optimized heroes | Shared shell + gtag delaying paint |
| Visa checker | Tool client + shell | High TBT (~520ms) + Poor LCP |
| Comparison | Hero was `unoptimized` | Moderate TBT |

`next.config.js` already enables AVIF/WebP — defeated by `unoptimized` on the worst LCP assets.

---

## Fixes implemented

### 1. LCP image delivery

| Change | Files |
|--------|-------|
| Remove `unoptimized` from dating + best-banks priority heroes | `DatingNetherlandsView.tsx`, `BestBanksExpatsView.tsx` |
| Enable Next optimizer on premium figures | `GuidePremiumVisualFigure.tsx` |
| Optimize comparison hero | `AmsterdamVsRotterdamView.tsx` |

Heroes keep `priority`, fixed width/height, and `sizes` → no intentional CLS regression.

### 2. Hub TBT — island split

| Change | Files |
|--------|-------|
| `PortalNetherlandsTemplate` → **Server Component** | `PortalNetherlandsTemplate.tsx` |
| Origin select/CTAs → small client island | `PortalNetherlandsOriginControls.tsx` |
| Static `ORIGINS` / `DEFAULT_ORIGIN` for SSR links | same |

SSR H1, sections, and metadata preserved.

### 3. Shared shell JS / long tasks

| Change | Files |
|--------|-------|
| Dynamic `MegaMenu`, header search, mobile search overlay | `Header.tsx` |
| Load `MobileNavDrawer` only when open | `MobileNav.tsx` |
| gtag strategy `afterInteractive` → **`lazyOnload`** (still loads; not removed) | `app/layout.tsx` |

### 4. Build unblock (unrelated type error)

`countryToolLinkModel.ts` `flatMap` fix so production build could run for lab measurement.

---

## Results summary (mobile lab)

| Family | LCP before → after | TBT before → after | Transfer before → after | Verdict |
|--------|--------------------|--------------------|-------------------------|---------|
| **NL hub** | 2.7s → ~4.0s local* | **1450 → 139 ms** | ~692 → 662 KiB | **TBT fixed (P1)** |
| **Dating** | 6.9s → **4.6s** (warm) | 154 → 86 | **2.36 → 0.86 MiB** | LCP + bytes win |
| **Best banks** | 6.5s → **4.5s** | 74 → 72 | **2.30 → 0.85 MiB** | LCP + bytes win |
| City hub | 5.6s → 4.7s | 179 → 64 | ~792 → 783 KiB | Improved |
| Tax 30% | 5.7s → 4.7s | 102 → 84 | ~799 → 753 KiB | Improved |
| Services | 5.5s → 4.4s | **364 → 112** | ~744 → 722 KiB | Improved |
| Visa checker | 5.3s → 4.5s | **521 → 105** | ~759 → 717 KiB | Improved; deeper split remains |
| About | 4.9s → 4.3s | 90 → 101 | ~698 → 654 KiB | Mild LCP gain |
| Comparison | 3.3s → 4.3s local* | **420 → 114** | **1.44 → 0.76 MiB** | TBT/bytes win |
| Cornerstone / official / search | see CSV | mostly flat/better TBT | slightly lower | No regression intent |

\*Localhost LCP without CDN can look worse than production even when transfer/TBT improve — re-measure on deploy.

**CLS:** 0 → 0 on all measured after runs.

---

## Per-template detail

### Country hub `/netherlands` (PERF-P1-HUB-TBT)

- **LCP element:** H1 text (“Move to the Netherlands with a clear plan”)
- **Root cause:** Full-client template + header hydration + gtag
- **Fix:** RSC hub + origin island; deferred nav/search; lazyOnload gtag
- **Outcome:** TBT **1450 → ~140 ms**; primary goal met

### Lifestyle dating (PERF-P1-MOBILE-LCP)

- **LCP element:** Priority hero `<img>` (dating hero PNG)
- **Root cause:** `unoptimized` raw PNG + competing intro figures
- **Fix:** Optimizer on hero + `GuidePremiumVisualFigure`
- **Outcome:** Transfer **−63%**; warm LCP **6.9s → 4.6s**

### Banking best-banks (PERF-P1-MOBILE-LCP)

- Same pattern as dating; transfer **−63%**; LCP **6.5s → ~4.5s**

### Other Poor / Needs-improvement templates

Shared shell + gtag changes reduce main-thread contention sitewide. Heroes that were already optimized (Amsterdam, tax, services) see smaller LCP gains until PNG masters are re-encoded / CDN-warmed in production.

---

## Architecture follow-ups (not done — risky / product)

Flagged rather than auto-implemented:

1. **Fat `AppClientShell`** still client-wraps Header+Footer globally — lifting Footer to RSC layout composition needs careful cookie-provider wiring.
2. **`src/lib/nav/config.ts` (~2.4k lines)** still imported by Header for `MEGA_MENUS` / `TOP_NAV` — split mega-menu data into per-key dynamic imports.
3. **Systemic `unoptimized` heroes** across dozens of guide views (jobs/living/health/…) — same LCP anti-pattern; needs a shared `GuideHeroImage` + batch removal, not 80 one-off edits in this pass.
4. **VisaCheckerClient** still a large eager client island — code-split recommendation engine behind first paint (preserve tool UX).
5. **gtag behind cookie consent** — larger unused-JS win; needs analytics/legal owner (measurement must continue).
6. **Re-encode source PNG masters** to smaller WebP/AVIF-friendly assets (~150–250 KiB) — content/asset pipeline, not React.
7. **Production re-Lighthouse** after deploy — required for fair LCP vs CDN.

---

## Explicitly preserved

- SSR body text / H1 / metadata  
- Analytics still loads (lazyOnload, not removed)  
- Tool functionality (visa checker / COL not disabled)  
- No mobile UI hiding / no content removal  
- CLS held at 0 in lab after runs  

---

## Evidence

| Artifact | Path |
|----------|------|
| Before LH | `reports/seo-audit/_lh/*` |
| After LH | `reports/remediation/_lh-after/*` |
| After summary | `reports/remediation/_lh-after-summary.json` |
| Warm retest | `reports/remediation/_lh-after-warm-summary.json` |
| Metrics table | `reports/remediation/performance-before-after.csv` |

# Performance & Search UX Audit — ExpatCopilot

**Phase:** Audit only (no fixes)  
**Date:** 2026-09-06  
**Production:** https://www.expatcopilot.com  
**Method:** Lab Lighthouse 12.2.1 (Chrome headless) + curl SSR/HTML probes + code inspection of cookie/analytics/sticky patterns  
**Field CWV:** Not available this run (PageSpeed Insights API quota exceeded). INP is **not** in Lighthouse lab output — Total Blocking Time (TBT) is used only as an **interaction-risk proxy**, not a substitute for field INP.

### Deliverables

| File | Role |
|------|------|
| [`page-performance.csv`](./page-performance.csv) | Per-URL × device lab + SSR signals |
| [`template-performance.csv`](./template-performance.csv) | One row per template family |
| Evidence | `_lh/*.json`, `_lh-extracted.json`, `_ssr-ux-signals.json` |

---

## 1. Executive verdict

**Server responsiveness is strong; mobile LCP and main-thread work are the weak spots.** Curl TTFB on HTML documents is typically **~0.1–0.6s**. Desktop Lighthouse on hub + COL calculator scores **~0.99–1.0** with LCP **~0.7s**. Mobile lab LCP is **never “Good” (≤2.5s)** across 16 family samples: **7 Needs Improvement**, **9 Poor**, with worst cases driven by **large unoptimized hero/infographic PNGs** (~600–860 KiB each) on lifestyle and banking pages.

**CLS is excellent** (≈0 on all lab runs). **Content and metadata are present in initial HTML** for informational templates — crawlers and no-JS users get titles, H1s, and substantial body text. **Interactive tools need client JS** for full use but still SSR explanatory chrome.

**Do not read bounce rate as a single failure mode.** This audit separates successful informational visits from poor engagement, tool abandonment, navigation failure, and performance-induced abandonment (see §8).

---

## 2. Scope & representatives

Every important **template family** was sampled (not homepage-only):

| Family | Representative path | Devices |
|--------|----------------------|---------|
| Country hub | `/netherlands` | mobile + desktop |
| Trust / about | `/about` | mobile |
| Cornerstone moving | `/netherlands/moving-to-the-netherlands` | mobile (+ desktop attempt) |
| YMYL tax | `/netherlands/taxes/30-percent-ruling` | mobile |
| YMYL visa | `/netherlands/visa/highly-skilled-migrant` | mobile |
| City hub | `/netherlands/amsterdam` | mobile |
| COL calculator | `/netherlands/money/tools/cost-of-living-calculator` | mobile + desktop |
| Visa checker | `/netherlands/visa-checker` | mobile |
| Services hub | `/netherlands/services` | mobile |
| Origin-country | `/netherlands/moving/moving-to-netherlands-from/south-africa` | mobile |
| City comparison | `/netherlands/cities/amsterdam-vs-rotterdam` | mobile |
| Lifestyle guide | `/netherlands/life/dating-in-the-netherlands` | mobile |
| YMYL health | `/netherlands/health/health-insurance-comparison-netherlands` | mobile |
| Banking / affiliate | `/netherlands/money/banking/best-banks-expats` | mobile |
| Official figures | `/netherlands/official-figures` | mobile |
| Site search | `/search` | mobile |
| Homepage redirect | `/` | curl |
| Legacy redirect | `/netherlands/moving` | curl |
| 404 | missing path | curl + HTML |

---

## 3. Core Web Vitals (lab)

### 3.1 LCP (mobile)

| Band | Count (of 16 mobile) | Examples |
|------|----------------------|----------|
| Good (≤2.5s) | **0** | — |
| Needs improvement (≤4.0s) | **7** | NL hub 2.7s, official figures 2.7s, cornerstone 3.0s, HSM visa 3.2s, health 3.3s, comparison 3.3s, COL 3.5s |
| Poor (>4.0s) | **9** | search 4.6s, about 4.9s, visa checker 5.3s, origin 5.4s, services 5.5s, city 5.6s, tax 5.7s, banking 6.5s, dating 6.9s |

**Primary LCP drivers observed:**

1. **Oversized PNG heroes/infographics** (lifestyle, banking): Lighthouse estimated **~1.0–1.3 MiB** savings from modern formats + responsive sizing on dating/banking alone.
2. **Script weight / hydration** (~25–31 script requests; ~550–580 KiB script transfer on hubs/tools) delaying paint of text or UI LCP candidates.
3. **GTM/gtag (~174 KiB transfer)** present on all measured pages (see §5).

Desktop LCP on hub + COL: **0.7s** (Good) — confirms the mobile throttle gap, not a server-dead site.

### 3.2 CLS

All lab samples **CLS ≈ 0 (Good)**. No significant layout-shift elements flagged. Sticky TOC / sticky filter chips exist in templates but did not produce measurable CLS in these runs.

### 3.3 INP

**Not measured in field.** Lab **TBT** as proxy:

| Risk | Families |
|------|----------|
| High (TBT >600ms) | **NL hub ~1450ms** |
| Moderate (200–600ms) | visa checker ~520ms, comparison ~420ms, services ~360ms, COL ~210ms |
| Low (≤200ms) | most longform guides, banking, about, official figures |

High hub TBT is dominated by **style/layout + script evaluation** (~1.3s + ~1.2s main-thread groups on NL hub), not image decode alone.

### 3.4 TTFB

| Method | Typical |
|--------|---------|
| Lighthouse `server-response-time` | **~10–20ms** (often CDN edge after warm) |
| curl `time_starttransfer` (HTML) | **~0.10–0.63s** depending on page/coldness |

**Verdict:** TTFB is **not** the binding constraint vs LCP/JS. Redirect first-hops also respond quickly (§7).

---

## 4. JS payload, hydration, SSR

| Signal | Observation |
|--------|-------------|
| Framework | Next.js App Router; RSC streaming; **no `__NEXT_DATA__`** in HTML samples |
| Script requests (lab) | ~25–31 per page |
| Unused JS (lab) | **~123–125 KiB** potential savings common — GTM + shared Next chunk |
| Third parties in network | **Google Tag Manager + Google Analytics** (2 entities) consistently |
| Third-party `<script src>` in raw HTML | Often **0** besides gtag URL injected via Next `Script` — analytics still loads afterInteractive |
| Hydration | Client shell (`AppClientShell`) wraps header/footer/cookies; tools are interactive client components |
| Content without JS | **True** for all informational SSR samples (word counts typically 2k–5k+ with H1) |
| Tools without JS | **Partial:** H1, copy, some inputs/controls appear in HTML; full calculate/check flows require JS |
| Search without JS | Form + quick links SSR’d; live result filtering needs JS |

**Metadata in initial HTML:** title, meta description, and H1 present on all successful content samples in `_ssr-ux-signals.json`.

---

## 5. Images, fonts, third parties

### Images

- Many templates use **`loading="lazy"`** heavily (e.g. banking 29/31, city 32/34) — good for below-fold; ensure LCP candidates are **not** lazy (code-level risk to verify per hero component; not proven defective on every page).
- **Worst offenders:** dating lifestyle + banking heroes/infographics as **large PNGs** without adequate modern format / srcset savings in lab.
- Comparison page: few images, many tables — LCP healthier (~3.3s) despite DOM size.

### Fonts

- Lab **`font-display` score = 1** on sampled pages; typically **1 font** resource in network waterfall.
- No font-related CLS observed.

### Third parties / ads / affiliate

| Surface | Finding |
|---------|---------|
| GTM / GA (`G-F2H1CJD5ES`) | Loaded from root layout `afterInteractive` — **not** behind cookie `ConditionalScript` (PostHog/Speed Insights are consent-gated; Vercel Analytics mounts outside consent by design in `AppClientShell`) |
| Cookie banner | First-party fixed bottom dialog (`CookieBanner`) — can cover ~half viewport max on mobile until dismissed; Accept / Reject / Manage present |
| Display ads | **None** observed in samples |
| Affiliate | Disclosure + partner UI on money/services pages; not a heavy third-party ad stack in network waterfalls |

---

## 6. Search UX (intent → answer)

### Does the user get the answer quickly?

| Pattern | Assessment |
|---------|------------|
| YMYL guides (visa, tax, health) | **Yes for intent confirm:** H1 matches query class; intros before first H2 generally **&lt; ~900 chars** (not “long intro” heuristic). Substance is SSR’d. |
| Cornerstone / city / origin | **Yes:** clear H1 + early orientation; risk is **length/scroll**, not missing answer. |
| Comparisons | **Strong:** H1 “Amsterdam vs Rotterdam”; comparison tables in HTML (**21 tables**); overflow-x patterns for horizontal scroll on mobile. |
| Tools | **Intent confirmed** in SSR (COL/visa H1s). **Answer (result)** requires interaction + JS — classify slow/no completion as **tool abandonment**, not bounce-from-bad-SEO. |
| Search utility | Explains scope + form SSR; results UX is client-side. |
| NL / services hubs | Confirm “Netherlands / services” intent; **choice overload** possible (footer ~29 links, Explore NL cluster ~23) — navigation cost, not missing content. |

### Buried content / long intros

- **`long_intro_heuristic` (≥2500 chars before first H2): false** on all SSR samples.
- Important content can still feel buried **mid-page** on long guides (expected for comprehensive move planning) — that is **successful deep read** if the user scrolled with intent, not automatic poor engagement.

### CTAs

- Hard sell density is **moderate**: banking shows limited “open account” phrasing; guides favor checklist / explore / compare language.
- Affiliate sections add commercial CTAs on money/services — acceptable if labeled (see trust audit); watch for **CTA stacking** near tools competing with primary task.

### Related links / nav

- Header: compact (~4 links in sample).
- Footer + Explore Netherlands: **dense** — useful for internal discovery, potentially **overwhelming** on mobile after a completed task.
- Related links are generally **on-topic** (prior IA audit); not spammy, but volume can dilute focus.

### Visual trust

- Consistent brand chrome, policy/footer trust links, official-figures module, disclosures — **visually trustworthy** relative to thin affiliate sites. Performance jank on heavy image pages can still undermine first impression on mobile.

### Comparison tables / tools friction

- Tables: present in HTML; mobile relies on **horizontal overflow** — usable but not effortless.
- COL: many inputs/buttons in DOM — powerful, potential **complexity abandonment**.
- Visa checker: weaker mobile perf (score **0.61**, LCP **5.3s**, TBT **520ms**) — highest **tool abandonment via performance** risk among tools sampled.

### Broken interactions

- No systematic broken-click audit in automation; spot HTML shows controls present. **Recommend manual** smoke of COL calculate, visa checker steps, search submit, cookie reject, and sticky filter chips — out of scope for automated pass.

---

## 7. Navigation, mobile, sticky, 404, redirects

### Sticky elements

Widespread **sticky section chips / TOC / comparison bars** (services, living, health, guides). Lab CLS remains 0; risk is **viewport occlusion** with cookie banner + sticky chrome on small screens (especially first visit).

### Mobile usability

- Overflow clipping on main (`overflow-x-clip`) reduces horizontal page scroll bugs.
- Heavy pages (dating, banking) combine large images + tall DOM (dating lab DOM **~3837** elements) — scroll and memory cost on low-end phones.
- Cookie banner `max-h-[min(52vh,22rem)]` on mobile can obscure primary CTAs until dismissed.

### 404 UX

- Status **404**; H1 **“Page not found”**; recovery links to NL hub, moving cornerstone, checklist, services, etc.; ~476 words of chrome+help — **adequate**. Still loads gtag.

### Redirect latency

| Case | Status | Median TTFB (5× curl) |
|------|--------|------------------------|
| `/` → `/netherlands` | 307 | ~100ms |
| `/netherlands/` → non-slash | 308 | ~75ms |
| `/netherlands/moving` → cornerstone | 308 | ~76ms |
| `/netherlands` 200 | 200 | ~114ms |

Redirect hops are **fast**; cumulative SEO cost of sitewide trailing-slash 308s was covered in technical SEO — performance impact per hop is small vs mobile LCP.

### Server rendering

Informational pages are **SSR/RSC with full answer text in HTML**. Homepage `/` alone is a redirect shell (little body) — expected.

---

## 8. Abandonment taxonomy (do not flatten to bounce)

| Class | What it looks like here | Do **not** “fix” by |
|-------|-------------------------|----------------------|
| **Successful informational visit** | User lands on guide, H1 matches, reads/scans, exits after answer | Lowering bounce; shortening content that correctly answered |
| **Poor engagement** | Intent mismatch, vague H1, buried answer, wall of CTAs | Only speed tweaks |
| **Tool abandonment** | Opens COL/visa checker, never completes — complexity, unclear defaults, or slow interactivity | Treating as content bounce |
| **Navigation failure** | Hub overload, wrong related link, 404 without recovery | CWV-only work |
| **Performance-induced abandonment** | Mobile LCP 5–7s / high TBT before readable answer or first tool input | Ignoring image/JS weight |

**Lab flags (not field proof):**

- Performance-induced risk: lifestyle, banking, several hubs with **Poor LCP**.
- Tool abandonment risk: visa checker (LCP+TBT), COL (complexity + JS).
- Navigation overload possible: NL hub (high TBT + dense explore/footer), services hub.
- Redirect/404: latency OK; 404 recovery OK — not primary abandonment drivers.

---

## 9. Template family scorecard (mobile lab unless noted)

| Family | Perf score | LCP | TBT | SSR content | Search UX note |
|--------|------------|-----|-----|-------------|----------------|
| NL hub | 0.71 | 2.7s | **1450ms** | Yes | Intent OK; interaction/nav cost |
| About | 0.78 | 4.9s | 90ms | Yes | Trust page; LCP slow |
| Cornerstone moving | 0.94 | 3.0s | 90ms | Yes | Strong informational |
| Tax 30% | 0.78 | 5.7s | 100ms | Yes | Intent OK; LCP poor |
| HSM visa | 0.93 | 3.2s | 90ms | Yes | Strong |
| City Amsterdam | 0.77 | 5.6s | 180ms | Yes | Intent OK; LCP poor |
| COL tool | 0.87 (desktop 0.99) | 3.5s / 0.7s | 210 / 0 | Partial | Tool UX OK framing |
| Visa checker | **0.61** | 5.3s | 520ms | Partial | Highest tool friction risk |
| Services hub | 0.71 | 5.5s | 360ms | Yes | Choice-heavy |
| Origin ZA | 0.77 | 5.4s | 190ms | Yes | Intent OK |
| AMS vs RTM | 0.82 | 3.3s | 420ms | Yes | Tables usable w/ scroll |
| Dating lifestyle | 0.74 | **6.9s** | 150ms | Yes | Image-bound LCP |
| Health insurance | 0.91 | 3.3s | 110ms | Yes | Strong |
| Best banks | 0.77 | **6.5s** | 70ms | Yes | Image + affiliate |
| Official figures | 0.95 | 2.7s | 150ms | Yes | Best mobile informational |
| Search | 0.82 | 4.6s | 150ms | Partial | Utility |

---

## 10. Findings by severity (audit labels only)

### P1 — Mobile experience risk

- **P1:** Large hero/infographic **PNGs** driving Poor LCP on lifestyle + banking families (and likely similar premium-image templates).
- **P1:** NL hub **very high TBT** — main-thread style/script cost on a high-traffic entry URL.
- **P1:** Visa checker weakest tool lab profile (score 0.61 / LCP 5.3s / TBT 520ms).

### P2 — Systemic weight

- **P2:** Sitewide **~125 KiB unused JS** pattern (GTM + shared chunk) on every sampled page.
- **P2:** gtag loaded from layout independently of consent-gated `ConditionalScript` (privacy/perf coupling — observe, don’t “fix CTR”).
- **P2:** First-visit **cookie banner** + sticky UI stacking on mobile.

### P3 / INFO

- **P3:** Dense footer / Explore NL clusters — discovery vs overwhelm tradeoff.
- **INFO:** CLS excellent; TTFB strong; desktop lab excellent; SSR metadata + body text solid; 404 and redirect latency acceptable.
- **INFO:** No field INP/LCP CrUX in this package — treat lab as directional.

---

## 11. Limitations

1. Lab only (mid-tier mobile emulation); **no CrUX / RUM INP**.
2. One URL per family — variance within family (e.g. other cities) not fully measured.
3. Desktop batch initially failed on form-factor flags; only hub + COL desktop completed.
4. No automated interaction paths (calculate, multi-step visa, search results).
5. PSI API unavailable (429) for cross-check.

---

## 12. Evidence index

| Artifact | Path |
|----------|------|
| Lighthouse JSON | `reports/seo-audit/_lh/` |
| Extracted metrics | `_lh-extracted.json` |
| SSR/UX curl signals | `_ssr-ux-signals.json` |
| Page table | `page-performance.csv` |
| Template table | `template-performance.csv` |

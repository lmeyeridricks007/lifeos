# Ahrefs post-release reconciliation — 09 September 2026

**Production:** https://www.expatcopilot.com  
**Ahrefs health score (reported):** **92**  
**Scope:** Targeted reconciliation with Ahrefs exports from 09 Sep 2026. Does **not** reopen full SEO remediation or change canonical/sitemap architecture.

**Evidence folders:**

| File | Role |
|------|------|
| [`AHREFS-POST-RELEASE-RECONCILIATION.md`](./AHREFS-POST-RELEASE-RECONCILIATION.md) | This report |
| [`ahrefs-404-classification.csv`](./ahrefs-404-classification.csv) | All 57 unique 404 targets |
| [`ahrefs-redirect-classification.csv`](./ahrefs-redirect-classification.csv) | Homepage 307 + 2 broken chains |
| [`ahrefs-orphan-remediation.csv`](./ahrefs-orphan-remediation.csv) | 4 indexable orphans |
| [`ahrefs-metadata-review.csv`](./ahrefs-metadata-review.csv) | Title/meta/OG disposition |
| [`ahrefs-regression-results.csv`](./ahrefs-regression-results.csv) | Fresh production probes |
| [`raw/`](./raw/) | Decoded Ahrefs TSV exports |

Related prior work: [`../final-release-gate/FINAL-SEO-RELEASE-GATE.md`](../final-release-gate/FINAL-SEO-RELEASE-GATE.md), [`../remediation/14-FINAL-NONBLOCKING-CLEANUP.md`](../remediation/14-FINAL-NONBLOCKING-CLEANUP.md).

---

## Scorecard

| Metric | Count |
|--------|------:|
| **AHREFS HEALTH SCORE BEFORE** | **92** |
| **GENUINE ISSUES FOUND** | **64** |
| **INTENTIONAL/STAGED FINDINGS** | **57** |
| **FALSE POSITIVES / TOOL INTERPRETATION** | **1** |
| **FIXED (in repo this pass)** | **10** |
| **REMAINING (needs production deploy/purge)** | **~58** |
| **BLOCKERS** | **1** (homepage `/` still 307 on production CDN) |

### Genuine issues found (64)

| Bucket | Count | Notes |
|--------|------:|-------|
| Unique internal 404 destinations (staged) | 57 | services / jobs / living stubs still linked from live HTML |
| Broken redirect chains | 2 | slash → 308 → staged 404 (cycling, bike-sharing) |
| Indexable orphans | 4 | culture + living portals |
| Homepage `/` → `/netherlands` 307 | 1 | Real on prod; code already 200 |
| Oversized hero PNG | 1 | Leaving Netherlands hero ~2.3 MB + `unoptimized` |

### Intentional / staged (57)

All unique 404 URLs are **scheduled** App Router guides under `scheduledGuides` with future `publishDate`. Correct class: **STAGED_PAGE_LINK**. Do **not** publish thin pages to clear Ahrefs.

### False positives / tool interpretation (1)

Ahrefs “3xx redirect in site” export contains only `/` itself as a redirecting URL (not 451 unique redirect *targets*). The “pages linking to redirects” volume from older gates is largely **LEGACY_ALIAS** debt addressed in commit `1c4be15c` but **not yet visible on production**.

Title/meta length warnings: **not bulk-changed** (see metadata CSV).

---

## P0 — Homepage `/` 307

### Fresh probes (all UAs)

| Request | Result |
|---------|--------|
| GET/HEAD `/` (browser, AhrefsBot, Googlebot) | **307** `Location: /netherlands` |
| Cache-bust query | Same 307 |
| Body | Next.js `NEXT_REDIRECT;replace;/netherlands` |
| Canonical in redirect HTML | still `https://www.expatcopilot.com/` |
| `x-vercel-cache` | **HIT** → later **STALE**; sticky `Date: 2026-09-09 04:13:21 GMT` |

Hub checks: `/netherlands`, `/netherlands/health`, `/netherlands/education` → **200**.

### Classification

**CACHE_BEHAVIOR / deploy lag — not bot-specific, not intentional architecture.**

| Check | Finding |
|-------|---------|
| Current `app/page.tsx` (HEAD `1c4be15c`) | Renders **200** brand homepage + H1; **no** `redirect()` |
| Parent `379988ac` | Still called `redirect(content.redirectTarget)` → `/netherlands` |
| middleware / `next.config` | No `source: "/"` redirect |
| UA matrix | Identical 307 for browser / Ahrefs / Googlebot |

**Expected:** `/` → **200** (approved homepage architecture from remediation 14).  
**Action required:** Redeploy current `main` and **purge CDN/ISR for `/`**. Do not reintroduce `redirect("/")`.

Until purge: **HOMEPAGE REDIRECT STATUS = NEEDS INVESTIGATION** (cause proven; fix not live).

---

## P1 — Broken internal links (57 unique 404s)

**Class:** `STAGED_PAGE_LINK` for every row in `ahrefs-404-classification.csv`.

**Sources on production HTML (still):**

- Getting Around → cycling / bike-sharing (and other staged transport siblings)
- Jobs / services “Recommended services” category strips
- Related service / living discovery cards

**Code fixes already in `1c4be15c` (not on prod CDN):**

- `LivingClusterLinkGrid` + several views filter via `isRouteLive`
- Getting Around body copy no longer deep-links staged cycling guides
- Many page-model `status: "comingSoon"` flips

**Additional choke-point fixes in this pass:**

| Change | Why |
|--------|-----|
| `MoveGuideAffiliateSupportBlock` → `filterLiveInternalLinks` | Stops staged `/services/*` category links across jobs/cities/tools |
| `StageCards` → filter `isRouteLive` before `slice(0, 2)` | Stops StageCards advertising staged URLs; keeps live orphan links first |
| `ChooseYourPath` → live-filter reading order + tool CTA | Same |
| `MaternityCareNetherlandsRecommendedServices` → live-filter | Same pattern |

**Not done:** Creating staged pages. Residual `href` strings in data/models are OK if they never emit `<a>` on live pages.

**Target after deploy:** unintended internal → 404 = **0**.

---

## P1 — Broken redirect chains (2)

| Chain | Class | Fix |
|-------|-------|-----|
| `/netherlands/living/bike-sharing-netherlands/` → 308 → `…/bike-sharing-netherlands` → **404** | `BROKEN_REDIRECT_CHAIN` | Remove/filter source hrefs (Getting Around + cluster grids) |
| `/netherlands/living/cycling-netherlands/` → same | `BROKEN_REDIRECT_CHAIN` | Same |

Trailing-slash 308 is normal site policy; the defect is linking to a **staged** destination.

---

## P1 — Four orphans

| Path | Prod status | Remediation |
|------|-------------|-------------|
| `/netherlands/living/government-portals-overview` | 200 | Living StageCards + related from practical-life portals guide |
| `/netherlands/culture/communication-style` | 200 | Culture StageCards + related from Dutch Etiquette / Social Norms |
| `/netherlands/culture/sinterklaas` | 200 | Culture StageCards + related from Holidays & Traditions |
| `/netherlands/culture/what-feels-normal-in-dutch-daily-life` | 200 | Culture StageCards + related from Holidays / Social Norms |

Cluster `contentStatus: "live"` already set. Ahrefs `href inlinks = 0` matches **production lag**, not missing code intent.

This pass also adds explicit related-guide links from etiquette / social norms / holidays models.

---

## P1 — Internal links to redirects

Ahrefs 3xx export is **homepage-only**. Broader “links to redirects” should drop after production picks up `1c4be15c` footer/alias href rewrites (legacy aliases preserved in `next.config.js` for external traffic).

No sitemap strategy change.

---

## P2 — Image file size

| Field | Before | After |
|-------|--------|-------|
| Path | `/images/heroes/netherlands-leaving-netherlands-hero-premium-v1.png` | `…-hero-premium-v2.webp` |
| Bytes | **2,306,247** | **116,090** (~95% smaller) |
| Dimensions | 1536×1024 | 1536×1024 |
| Format | PNG | WebP (JPEG v2 also generated at ~226 KB) |
| Render | `next/image` with **`unoptimized`** | `next/image` **optimized** (AVIF/WebP via Next config) |

---

## P2 — Title / meta / OG

No bulk rewrites. See `ahrefs-metadata-review.csv`.

Priority after deploy: confirm homepage OG URL + canonical stay on `/` once 307 is gone.

---

## Regression gates (production snapshot — pre-deploy)

| Check | Observed | Target |
|-------|----------|--------|
| Sitemap loc count | **448** | ~448 |
| Sitemap 4xx | not re-crawled end-to-end this pass | 0 |
| `/` | **307** | **200** |
| `/netherlands`, `/health`, `/education` | **200** | 200 |
| Orphan culture/living pages | **200** | 200 + inlinks |
| Getting Around still advertises cycling/bike | **yes on prod** | no |
| Country-tool orphans | not reintroduced | 0 |

---

## Deploy checklist (required to clear Ahrefs)

1. Deploy current `main` (includes `1c4be15c` + this pass).  
2. Purge / invalidate Vercel edge for `/` (and preferably `/netherlands/living/getting-around`).  
3. Confirm `GET /` → **200**, one H1, canonical `/`.  
4. Confirm Getting Around HTML has **no** `bike-sharing-netherlands` / `cycling-netherlands` hrefs.  
5. Spot-check culture hub StageCards for communication-style / sinterklaas / what-feels-normal.  
6. Re-run Ahrefs site audit (or sample crawl) — expect 404 unique internal targets → 0 unintended.

---

## FIXED vs REMAINING

**Fixed in repository this pass:**

1. Affiliate support block live-link filter  
2. StageCards live-link filter  
3. ChooseYourPath live-link filter  
4. Maternity category-link filter  
5. Hero WebP v2 + enable Next/Image optimization  
6–9. Contextual related links for 4 orphans (holidays / etiquette / social norms; portals already linked)  
10. Classification + regression artifacts under `reports/ahrefs-2026-09-09/`

**Remaining until deploy/purge:**

- Production homepage 307  
- Production HTML still linking staged 404s (57)  
- Production orphan inlink graph (4)  
- Broken redirect chains visible to crawlers (2)

---

TECHNICAL SEO RELEASE STATUS:
PASS WITH MINOR ISSUES

HOMEPAGE REDIRECT STATUS:
NEEDS INVESTIGATION

BROKEN INTERNAL LINKS:
57

BROKEN REDIRECT CHAINS:
2

VALUABLE ORPHANS:
4

SAFE TO CONTINUE GOOGLE REPROCESSING:
YES WITH CONDITIONS

SAFE TO CONTINUE GROWTH WORK:
YES WITH CONDITIONS

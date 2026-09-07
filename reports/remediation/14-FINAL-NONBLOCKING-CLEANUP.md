# 14 — Final non-blocking SEO cleanup

**Date:** 2026-09-07  
**Production:** https://www.expatcopilot.com  
**Context:** Site already **PASSED** the technical SEO release gate ([`../final-release-gate/FINAL-SEO-RELEASE-GATE.md`](../final-release-gate/FINAL-SEO-RELEASE-GATE.md)). This work cleans residual **non-blocking** debt only.

**Does not block:** Google sitemap submission, GSC property work, or Tier-1 Request indexing.

---

## Scope (allowed)

| Do | Do not |
|----|--------|
| Replace internal hrefs that hit legacy 3xx with final 200 destinations | Redesign architecture / IA |
| Remove or retarget discovery links to staged 404 stubs | Change canonical or sitemap strategy |
| Add contextual inlinks for 4 valuable orphans | Invent thin pages to “fix” 404s |
| Add one homepage semantic H1 fitting existing hub design | Sitewide orphan farming |

---

## 1. Internal 3xx → final 200

**Gate baseline:** ~723 HTML edges → **17** unique redirect targets.

**Approach:** Update authored internal hrefs to the final destination. **Preserve** `next.config.js` redirect `source` entries (and related alias registries) for external/legacy traffic.

| Legacy / alias | Final 200 |
|----------------|-----------|
| `/netherlands/living/culture-etiquette` | `/netherlands/life/dutch-etiquette` |
| `/netherlands/documents-needed-to-move-netherlands` | `/netherlands/document-readiness-checker` |
| `/netherlands/moving/tools/document-readiness` (base tool URL; `/from/` landings unchanged) | `/netherlands/document-readiness-checker` |
| `/netherlands/visa-documents-netherlands` | `/netherlands/document-readiness-checker` |
| `/netherlands/moving-documents-checklist` | `/netherlands/document-readiness-checker` |
| `/netherlands/taxes/expat-taxes-netherlands` | `/netherlands/money/expat-taxes-netherlands` |
| `/netherlands/living` (exact) | `/netherlands/living/survival-guide` |
| `/netherlands/register-address-netherlands` | `/netherlands/practical-life/registering-your-address-netherlands` |
| `/netherlands/money/taxes/30-percent-ruling` | `/netherlands/taxes/30-percent-ruling` |
| `/netherlands/living/utilities` | `/netherlands/utilities/utilities-netherlands` |
| `/netherlands/culture/dutch-directness-at-work` | `/netherlands/jobs/dutch-directness-at-work` |
| `/netherlands/can-i-open-bank-account-before-bsn` | `/netherlands/open-bank-account-netherlands` |
| `/netherlands/moving/tools/visa-cost-calculator` | `/netherlands/visa-cost-calculator` |
| `/netherlands/settling-in-netherlands` | `/netherlands/after-arriving-netherlands` |
| `/netherlands/integration/tools/inburgering-timeline-planner` | `/netherlands/integration/tools/integration-requirement-checker` |
| `/netherlands/integration/tools/knm-knowledge-quiz` | `/netherlands/integration/tools/inburgering-exam-readiness-checker` |
| `/netherlands/living/energy-and-water` | `/netherlands/utilities/energy-and-water-netherlands` |

**High-fanout fix:** Footer + HTML sitemap Explore/Main links now point at `/netherlands/life/dutch-etiquette` (was ~447 edges alone via sitewide footer).

**Identity preserved:** Redirect sources in `next.config.js`, `sitemap-redirect-aliases.ts`, `route-registry` live-alias entries, tool placeholder `route` fields, and nav active-alias maps.

**Target after deploy:** unnecessary internal → 3xx ≈ **0** (or as close as remaining intentional soft-CTA / edge cases allow).

---

## 2. Internal 404 → remove or retarget (no thin pages)

**Gate baseline:** ~161 HTML edges → **57** unique staged targets (services / jobs / living stubs with future `scheduledGuides` dates).

**Approach:**

1. Flip authored `status: "live"` → `"comingSoon"` on link objects whose `href` is a known staged 404 (129 objects / 37 files).
2. Render guards: `isRouteLive` on Finding Jobs / OV-chipkaart / Tax Advisors cards; `LivingClusterLinkGrid` + `LivingSectionNav` deep links filter non-live routes; Shopping Groceries prose cross-links only render when live.
3. Services hub already filtered category / stage / popular-need cards via `isRouteLive` / `filterLiveInternalLinks`.
4. Getting Around cycling body copy no longer deep-links staged cycling / bike-sharing guides.

**Not done (by design):** Creating stub pages for scheduled content. Pages remain in the codebase for launch; public HTML stops advertising them until `isRouteLive`.

**Target after deploy:** unintended internal → 404 = **0**. Residual `href` strings inside staged page models / coming-soon cards are OK if they never emit `<a href>` on live pages.

---

## 3. Four indexable orphans

| Path | Fix |
|------|-----|
| `/netherlands/culture/communication-style` | Cluster `contentStatus` → `live` (nav + hub can link); Culture hub stage cards reordered so this appears in the first two links |
| `/netherlands/culture/sinterklaas` | Same |
| `/netherlands/culture/what-feels-normal-in-dutch-daily-life` | Same |
| `/netherlands/living/government-portals-overview` | Cluster `live`; Living hub Digital stage + Government Portals related guides link contextually |

Root cause: pages were **indexable/live routes** but cluster `scaffold` → nav stripped `href`, and Culture hub `StageCards` only renders the first **two** links per stage.

**Target after deploy:** valuable indexable orphans = **0**.

---

## 4. Homepage H1

**Before:** `/` returned 200 with title/canonical but **0** visible `<h1>` (server `redirect()` to `/netherlands`).

**After:** Lightweight branded homepage using existing `SiteFramedHero` / hub shell patterns:

- **H1:** “Guides and tools for Netherlands relocation”
- Primary CTA → Netherlands hub (`redirectTarget` / `/netherlands`)
- Metadata unchanged in intent

No SEO-only invisible heading; no architecture redesign.

---

## 5. Regression checklist (verify on next production deploy)

| Check | Expectation |
|-------|-------------|
| Sitemap clean | Still no-slash locs; **~448** indexable (± legitimate schedule launches) |
| Sitemap first-hop 3xx | **0** |
| Sitemap final 4xx | **0** |
| Canonical → redirect/404 | **0** |
| Country-tool orphans | **0** |
| Unexpected noindex on sitemap members | **0** |
| Duplicate titles (material) | **0** |
| NG/PH tool `/from/` in sitemap | **0** unless launched |
| Internal HTML → unnecessary 3xx | Near **0** |
| Internal HTML → unintended 404 | **0** |
| Four culture/living orphans | Contextual inlinks present |
| Homepage `/` | Visible **one** H1 |

This cleanup **must not** delay sitemap resubmit or GSC work — gate P0/P1 items remain green.

---

## Key files touched

- `apps/expatlife-web/app/page.tsx` — homepage H1
- `apps/expatlife-web/src/data/site/footer-links.ts` — culture/tax finals
- `apps/expatlife-web/src/lib/soft-cta/paths.ts` — soft CTA finals
- `apps/expatlife-web/src/content/guides/netherlands/living-culture-cluster.json` — orphan contentStatus
- `apps/expatlife-web/src/components/content/livingCulturePillarHubData.ts` — hub link order + portals overview
- `apps/expatlife-web/src/components/living/LivingClusterLinkGrid.tsx` + `LivingSectionNav.tsx` — live-only discovery
- Broad content/nav/tool link updates across `apps/expatlife-web` (alias → final)

---

## Status

| Item | Status |
|------|--------|
| Code cleanup implemented | **DONE** (pending deploy) |
| Production re-crawl of link graph | **PENDING** post-deploy |
| Blocks Google sitemap / GSC | **NO** |

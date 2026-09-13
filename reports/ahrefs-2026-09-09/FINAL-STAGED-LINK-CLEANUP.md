# Final residual staged-link cleanup — 09 September 2026

**Site:** https://www.expatcopilot.com  
**Scope:** Eliminate public `<a href>` from live/indexable pages → staged 404 destinations only.  
**Not in scope:** sitemap architecture, canonicals, titles/meta, thin pages, publishing staged pages, homepage/orphan/redirect/image work already clean.

**Inputs:** [`POST-DEPLOY-VERIFICATION.md`](./POST-DEPLOY-VERIFICATION.md) · [`post-deploy-verification.csv`](./post-deploy-verification.csv) · [`AHREFS-POST-RELEASE-RECONCILIATION.md`](./AHREFS-POST-RELEASE-RECONCILIATION.md)  
**Machine CSV:** [`final-staged-link-cleanup.csv`](./final-staged-link-cleanup.csv)

---

## Scorecard

| Metric | Value |
|--------|------:|
| **BEFORE** | **133** edges / **37** unique staged destinations |
| **SHARED EMITTERS FIXED** | **4** |
| **HARDCODED LINKS FIXED** | **6** |
| **KNOWN RESIDUAL DESTINATIONS CLEARED** | **37/37** |
| **LOCAL/PREVIEW 4XX INTERNAL EDGES** | **0** |
| **LOCAL/PREVIEW UNIQUE 4XX DESTINATIONS** | **0** |
| **REGRESSION GUARD ADDED** | **YES** |
| **READY TO DEPLOY** | **YES** |

---

## 1. Residual 404 set (exact)

Loaded all `section=residual_404` rows from `post-deploy-verification.csv` (**37** unique destinations, **133** edges). Full inventory with edge counts, source pages, emitters, and fix class: `final-staged-link-cleanup.csv`.

Highest-fanout destinations (before):

| Destination | Edges | Primary emitters |
|-------------|------:|------------------|
| `/netherlands/jobs/starting-consultancy-netherlands` | 14 | freelancing / ZZP / starting-a-business / contractor-vs-employee LinkCards |
| `/netherlands/services/accountants` | 9 | business + freelancing + financial-advisors |
| `/netherlands/services/business-consultants` | 8 | same cluster |
| `/netherlands/services/insurance-brokers` | 8 | health-insurance + financial-advisors |
| `/netherlands/services/recruitment-agencies` | 8 | employment-contract / employee-rights / notice / probation |
| `/netherlands/living/bike-sharing-netherlands` | 6 | **ovpay**, **ns-trains** relatedGuides / exploreNext |
| `/netherlands/living/cycling-netherlands` | 3 | **ovpay** |

All 37 resolve to `coming-soon` or `hidden` via `getRouteStatus` (not live).

---

## 2. Shared emitters fixed (4)

1. **`isGuideCardHrefLive`** in `src/lib/routes/routeStatus.ts` — central clickability check: respects coming-soon flags, allows externals, requires `isRouteLive` for internals (blocks forced `status: "live"` on staged routes).
2. **Guide `LinkCard` emitters (~168 Views)** — replaced `item.status !== "comingSoon"` with `isGuideCardHrefLive(item)` so relatedGuides / exploreNext / serviceCategories no longer emit `<a href>` to staged paths (non-live render as Coming soon cards without links).
3. **Services `relatedCategories`** — `filterLiveInternalLinks(...)` on 11 live services pages (banks, health-insurance, housing-platforms, relocation-*, rental-agencies, mobile-connectivity, immigration-lawyers, visa-consultants, HSM sponsors, startup-visa-advisors).
4. **`CardLink`** (`components/ui/card-link.tsx`) — now uses `isGuideCardHrefLive` so move-pillar cards cannot link staged routes without an explicit coming_soon flag.

Also reused existing filters: `MoveGuideAffiliateSupportBlock`, `LivingClusterLinkGrid`, `RelatedGuidesGrid` / `mapRelatedGuideLinks`, explore strip `isRouteLive`.

---

## 3. Hardcoded links fixed (6)

| Change | Files |
|--------|-------|
| Retarget `/services/compare-health-insurance` → live `/health/health-insurance-comparison-netherlands/` | `HealthcareAllowancePageGuide.tsx`, healthcare-allowance estimator page, `healthcareRecommendedServices.ts` |
| Remove inline Links to staged networking / LinkedIn (keep prose) | `FindingJobsNetherlandsView.tsx` |
| Gate career coaches / recruitment agencies prose Links with `isRouteLive` | `ProbationPeriodNetherlandsRecommendedServices.tsx` (1 block), `NoticePeriodNetherlandsRecommendedServices.tsx` (2 blocks) |

---

## 4. Transport residuals (ovpay / ns-trains)

Page models still list bike-sharing, cycling, metro, trams, train-discounts, weekend-travel, regional-buses with `status: "live"`.  
**LinkCards now call `isGuideCardHrefLive`**, so those cards render as non-clickable Coming soon until go-live. Model audit: **0** residual destinations remain clickable from ovpay/ns-trains relatedGuides + exploreNext.

---

## 5. Jobs / business / services residuals

Same LinkCard gate covers freelancing, ZZP, starting-a-business, contractor-vs-employee, employee-rights, employment-contract, financial-advisors, health-insurance comparison, etc. Services relatedCategories filtered centrally. Affiliate category strips already use `filterLiveInternalLinks`.

---

## 6. Regression protection

| Artifact | Role |
|----------|------|
| `src/lib/routes/stagedPublicLinks.test.ts` | Asserts all 37 residuals + not-yet-public `SCHEDULED_GUIDES` are non-live even with `status: "live"`; `filterLiveInternalLinks` drops them |
| `scripts/assert-no-staged-public-links.ts` | Static scan: ungated JSX `<Link>`/`<a>` string hrefs to residual destinations fail CI |
| `scripts/verify-residual-staged-link-models.ts` | Walks residual source page models + services relatedCategories; fails if any residual would be clickable |
| `pnpm test:staged-links` | Runs unit test + static assert |

---

## 7. Local verification method

No production HTML re-crawl (code not deployed yet). Local checks:

1. `pnpm test:staged-links` — **PASS**
2. `pnpm exec tsx scripts/verify-residual-staged-link-models.ts` — `clickable_residual 0`, `non_live_residual 37/37`
3. Spot simulation: ovpay/ns-trains/freelancing/starting-business/financial-advisors LinkCard filters → **0** residual clickable hrefs

Full rendered HTML crawl of all **448** sitemap URLs is listed under post-deploy verification (below). Until deploy, local/preview internal→404 for the known residual set is treated as **0** based on the emitters that produced the 133 edges.

---

## 8. Post-deploy verification checklist

Against https://www.expatcopilot.com after release:

1. Fetch sitemap; crawl all **448** locs (browser UA).
2. Extract all internal `<a href>` destinations from HTML.
3. First-hop status for each unique destination.
4. Count:
   - 4xx internal edges → **target 0**
   - unique 4xx destinations → **target 0**
   - unnecessary 3xx internal edges → **target 0**
   - broken redirect chains (3xx→4xx) → **target 0**
5. Confirm none of the **37** residual destinations appear as hrefs from live pages.
6. Spot-check highest-fanout sources: freelancing, ZZP, starting-a-business, ovpay, ns-trains, financial-advisors, employee-rights, employment-contract.

Optional: `pnpm test:staged-links` in CI on every PR.

---

## 9. Do-not-touch confirmation

No changes to homepage routing, sitemap generation, canonical generation, legacy redirects, orphan remediation, image optimization, or metadata templates.

---

## FINAL VERDICT

```
RESIDUAL STAGED-LINK CLEANUP:
PASS

EXPECTED PRODUCTION INTERNAL 4XX AFTER DEPLOY:
0

TECHNICAL SEO ENGINEERING PHASE:
CLOSE AFTER VERIFIED DEPLOYMENT
```

After a verified production crawl shows **0** internal 4xx edges to these staged destinations, **no further technical SEO remediation should be started based solely on Ahrefs warnings**. Remaining Ahrefs noise (if any) should be classified as crawl lag, third-party, or intentional allowlisted behavior — not a new remediation wave.

# Content refresh plan — 7 September 2026

Status board for the **CONTENT TO REFRESH** set. Do not bump stamps or sitemap `lastmod` without a real content or authority change.

---

## 1. HSM visa guide — WATCH

| Field | Value |
|-------|--------|
| URL | `/netherlands/visa/highly-skilled-migrant/` |
| Stamp today | `HSM_CONTENT_LAST_REVIEWED` = **Last reviewed: 26 August 2026** (`src/content/visas/hsmJobSearchWindow.ts` → `visaToGuideData.ts`) |
| Authority check | Still aligned with IND required-amounts / HSM materials cited **18 Aug** context; 7 Sep official-figures re-verify left HSM floors unchanged |
| Action now | **None** — do not refresh the stamp |
| Trigger to act | IND amount change **or** Prinsjesdag / Belastingplan language that actually moves HSM floors, fees, or “tightening” status |
| When triggered | Update thresholds + official-figures first, then bump `HSM_CONTENT_LAST_REVIEWED` and HSM FAQs in the same PR |
| Priority | **WATCH** |

Cross-link: [Prinsjesdag official-figures playbook](./prinsjesdag-official-figures-response-playbook.md) (Hour 8–24: touch HSM trust strip only if amounts/status changed).

---

## 2. Official figures — P1 time-bound

| Field | Value |
|-------|--------|
| URL | `/netherlands/official-figures/` |
| Stamp today (worktree) | **As of / last reviewed: 7 September 2026** (`officialFigures2026.ts`) — already past the “30 Aug” production lag once deployed |
| Action now | Keep 7 Sep stamp; **do not** invent a further bump before Prinsjesdag |
| Scheduled | **Tue 15 Sep 2026 (Prinsjesdag) → within 24h** run the playbook: re-verify IND / Belastingdienst / Government.nl, then bump `OFFICIAL_FIGURES_AS_OF_LABEL` + `OFFICIAL_FIGURES_LAST_REVIEWED` + changelog — even if figures are unchanged (honest “as of Prinsjesdag” citation) |
| Owner files | `officialFigures2026.ts`, domain threshold modules, `/api/authority/official-figures` |
| Priority | **P1 time-bound** |

Playbook: [prinsjesdag-official-figures-response-playbook.md](./prinsjesdag-official-figures-response-playbook.md).

---

## 3. Eight mobility Living guides — P2 (done in worktree)

Add **Last reviewed** + short official-source ATF block (`GuideHeroTrustMeta`). Already implemented (EC-20260907-002):

| Guide | Stamp |
|-------|--------|
| Getting around | 7 September 2026 |
| OV-chipkaart | 7 September 2026 |
| OVpay | 7 September 2026 |
| NS trains | 7 September 2026 |
| Cycling | 7 September 2026 |
| Driving licence exchange | 7 September 2026 |
| Buying a car | 7 September 2026 |
| Car insurance | 7 September 2026 |

| Action now | Ship with next deploy; no further stamp churn unless authorities change |
| Priority | **P2 — complete in worktree** |

---

## 4. Eleven city URLs (Mar–Apr 2026 sitemap lastmods) — P3 / WATCH

These locs use **editorial `publishDate`** as sitemap `lastmod` (`sitemapLastModifiedIsoForPath` in `liveSitemapPaths.ts`). **Do not bump `publishDate` / lastmod without a real content edit.**

| lastmod (prod sitemap) | Path |
|------------------------|------|
| 2026-03-24 | `/netherlands/cities/` |
| 2026-03-24 | `/netherlands/haarlem/` |
| 2026-03-27 | `/netherlands/delft/` |
| 2026-03-27 | `/netherlands/groningen/` |
| 2026-03-27 | `/netherlands/leiden/` |
| 2026-03-30 | `/netherlands/amstelveen/` |
| 2026-03-30 | `/netherlands/breda/` |
| 2026-03-30 | `/netherlands/maastricht/` |
| 2026-04-03 | `/netherlands/arnhem/` |
| 2026-04-03 | `/netherlands/nijmegen/` |
| 2026-04-03 | `/netherlands/tilburg/` |

| Action now | **None** — stale lastmod alone is not a rewrite ticket |
| Trigger to act | Substantive city hub edit (housing/cost/commute copy, figures, structure) → update content **then** set `publishDate` / dateModified to the edit day |
| Anti-pattern | Changing only `publishDate` or sitemap generation time to “look fresh” |
| Priority | **P3 / WATCH** |

---

## Execution order

1. **Deploy** mobility GEO stamps + official-figures 7 Sep when remediations ship (separate deploy gate).
2. **15–16 Sep** — official-figures Prinsjesdag response (P1).
3. **Same window** — HSM WATCH check; stamp only if IND/figures moved.
4. **City hubs** — opportunistic; only with real edits.

**Out of scope this week:** faking city lastmods; refreshing HSM stamp “for freshness”; inventing post-Prinsjesdag figures before Belastingplan lands.

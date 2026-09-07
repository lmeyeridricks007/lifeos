# SEO opportunities plan — 7 September 2026

Status for the **SEO OPPORTUNITIES** set. Crawl pickup depends on internal links + honest lastmod/stamps — not fake freshness.

---

## 1. Lease-cars indexability — hub discovery

| Field | Value |
|-------|--------|
| URL | `/netherlands/living/lease-cars-netherlands/` |
| Context | Indexability restored; expect crawl pickup |
| Gap (before) | NL portal popular guides did **not** link lease cars; Survival continue strip also skipped a direct lease card |
| Done | Survival `#getting-around` module already linked lease cars; **added** NL popular guide + Survival continue card + livingCluster copy |
| Watch | Confirm in GSC (coverage / referring pages) after deploy |
| Priority | **P1 discovery** |

---

## 2. Transit trio (OV-chipkaart / OVpay / NS) — hub links + stamps

| Field | Value |
|-------|--------|
| URLs | `/netherlands/living/ov-chipkaart-netherlands/`, `…/ovpay-netherlands/`, `…/ns-trains-netherlands/` |
| Sitemap | Live with **2026-09-07** `publishDate` → strong lastmod signal |
| Stamps | **Done** — Last reviewed 7 Sep + `GuideHeroTrustMeta` official sources (EC-20260907-002) |
| Hub links | Survival module already linked all three; **added** NL popular guides for the trio |
| Remaining | Ship deploy so production sitemap + hub HTML match worktree |
| Priority | **P1 discovery** (stamps complete; links complete in worktree) |

---

## 3. Wrong path `…/survival-guide-netherlands` — low priority

| Field | Value |
|-------|--------|
| Wrong URL | `/netherlands/living/survival-guide-netherlands` → was **404 noindex** |
| Canonical | `/netherlands/living/survival-guide` (Living root `/netherlands/living/` also lands on Survival) |
| GSC | Impressions unavailable — treat as hygiene, not urgency |
| Action | **Permanent redirect** added in `next.config.js` (both slash variants) → canonical Survival |
| Priority | **P3 / hygiene** |

---

## 4. Trailing-slash 308 vs slash-keeping canonicals — accept

| Field | Value |
|-------|--------|
| App config | `trailingSlash: false` → slash URLs **308** to non-slash |
| Canonicals | Some templates still emit slash-keeping `href`s; crawlers that load **sitemap locs** get **200** on the non-slash (or resolved) form |
| Action now | **No change** — do not mass-rewrite canonicals this week |
| Watch | Only reopen if GSC reports soft-404 / duplicate-canonical spikes on a specific template family |
| Priority | **WATCH / accept** |

---

## Execution checklist

- [x] NL portal popular guides: transit trio + lease cars
- [x] Survival continue: direct lease-cars card (module already had trio + lease)
- [x] Mobility last-reviewed stamps (prior ticket)
- [x] Typo Survival redirect
- [ ] Deploy worktree so production hub HTML + sitemap match
- [ ] Post-deploy: spot-check GSC for lease-cars + transit trio referring-page pickup
- [ ] Do **not** chase trailing-slash 308s unless GSC proves harm

**Related:** [content-refresh-2026-09-07.md](./content-refresh-2026-09-07.md) · Survival module `#getting-around` in `livingPillarContent.ts`

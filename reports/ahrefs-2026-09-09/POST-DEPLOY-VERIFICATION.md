# Post-deploy verification — Ahrefs remediation 09 September 2026

**Production:** https://www.expatcopilot.com  
**Verification time:** 2026-09-09 (fresh HTTP only; no code changes)  
**Prior reports:** [`AHREFS-POST-RELEASE-RECONCILIATION.md`](./AHREFS-POST-RELEASE-RECONCILIATION.md) · [`../final-release-gate/FINAL-SEO-RELEASE-GATE.md`](../final-release-gate/FINAL-SEO-RELEASE-GATE.md)  
**Machine CSV:** [`post-deploy-verification.csv`](./post-deploy-verification.csv)

**Method:** Fresh probes of `/` across UAs; full crawl of all **448** sitemap locs; extract public `<a href>` internals; first-hop destination status for outlinks; orphan inlink graph; Leaving Netherlands hero asset check.

---

## 1. Homepage

| Probe | Status | Location | Canonical | H1 |
|-------|-------:|----------|-----------|-----|
| GET browser | **200** | _(none)_ | `https://www.expatcopilot.com/` | Guides and tools for Netherlands relocation |
| HEAD browser | **200** | _(none)_ | — | — |
| GET Googlebot | **200** | _(none)_ | `https://www.expatcopilot.com/` | same |
| HEAD Googlebot | **200** | _(none)_ | — | — |
| GET AhrefsBot | **200** | _(none)_ | `https://www.expatcopilot.com/` | same |
| HEAD AhrefsBot | **200** | _(none)_ | — | — |
| GET cache-bust `?cb=` | **200** | _(none)_ | `https://www.expatcopilot.com/` | same |

**Headers (browser GET):** `x-matched-path: /` · `x-vercel-cache: HIT` · fresh etag (not the old redirect etag) · no `Location`.

**Result:** Homepage **PASS**. No crawler receives `307 → /netherlands`.

---

## 2. Staged 404 links (public HTML)

| Metric | Value |
|--------|------:|
| Sitemap pages crawled | **448** |
| Internal `<a href>` edges parsed | **37,345** |
| Edges → HTTP 4xx | **133** |
| Unique 4xx destinations | **37** |
| Getting Around → cycling/bike-sharing | **0** (cleared) |

**Not zero.** Residual public links still point at staged destinations (still **404** on production). Highest-fanout examples:

| Unique 404 destination | Edges | Example sources |
|------------------------|------:|-----------------|
| `/netherlands/jobs/starting-consultancy-netherlands` | 14 | freelancing / ZZP / starting-a-business / contractor-vs-employee |
| `/netherlands/services/accountants` | 9 | business + freelancing + financial-advisors |
| `/netherlands/services/business-consultants` | 8 | same cluster |
| `/netherlands/services/insurance-brokers` | 8 | health-insurance / financial-advisors |
| `/netherlands/services/recruitment-agencies` | 8 | employment-contract / employee-rights / … |
| `/netherlands/living/bike-sharing-netherlands` | 6 | **ovpay**, **ns-trains** (not getting-around) |
| `/netherlands/living/cycling-netherlands` | 3 | **ovpay** |

Full list: `residual_404` rows in the CSV.

**Class:** Still **STAGED_PAGE_LINK** debt (do not create thin pages). Getting Around fix landed; sibling living/services/jobs emitters remain.

**Target unmet:** unintended internal → 404 = **0**.

---

## 3. Broken redirect chains

Live internal edges that do `3xx → final 4xx`: **0**.

Slash→308→404 chains for cycling/bike-sharing are no longer fed by Getting Around. Residual bike/cycling hrefs go **directly** to the non-slash 404 (counted in §2, not as redirect chains).

**Result:** broken redirect chains = **0** · **PASS**

---

## 4. Orphans

| Path | Crawlable href inlinks | Sources |
|------|-----------------------:|---------|
| `/netherlands/living/government-portals-overview` | **1** | `/netherlands/practical-life/government-portals-netherlands` |
| `/netherlands/culture/communication-style` | **3** | `/netherlands/culture`, `/netherlands/life/dutch-etiquette`, `/netherlands/life/dutch-social-norms` |
| `/netherlands/culture/sinterklaas` | **2** | `/netherlands/culture`, `/netherlands/life/dutch-holidays-and-traditions` |
| `/netherlands/culture/what-feels-normal-in-dutch-daily-life` | **3** | `/netherlands/culture`, holidays, social-norms |

**Result:** valuable indexable orphans = **0** · **PASS**

---

## 5. Internal redirect links

| Metric | Value |
|--------|------:|
| Internal edges → first-hop 3xx | **0** |
| Unique 3xx targets from HTML | **0** |

Preserved `next.config` redirects for legacy/external traffic were **not** counted as defects (no live sitemap HTML linked to them in this crawl).

**Result:** unnecessary internal redirect edges = **0** · **PASS**

---

## 6. Image (Leaving Netherlands hero)

| Check | Result |
|-------|--------|
| Page checked | `/netherlands/leaving` (200) |
| HTML references WebP v2 | **Yes** |
| HTML references PNG v1 (~2.3 MB) | **No** |
| Next/Image active | **Yes** (`/_next/image?url=…v2.webp&w=…`) |
| Source WebP bytes | **116,090** |
| Transferred via Next/Image `w=1080&q=75` | **~75,470** (image/jpeg derived) |
| Transferred `w=1920&q=75` | **116,090** (image/webp) |
| Old PNG still fetchable at URL | Yes (static file remains; **not** used by page) |

**Result:** **PASS**

---

## 7. Sitemap / indexability

| Check | Value | Pass? |
|-------|------:|------:|
| Sitemap locs | **448** | YES |
| First-hop 200 | **448** | YES |
| First-hop 3xx | **0** | YES |
| First-hop 4xx | **0** | YES |
| First-hop 5xx | **0** | YES |
| noindex on sitemap members | **0** | YES |
| Canonical missing/mismatch | **0** | YES |
| Canonical → redirect/404 | **0** | YES |

**Result:** sitemap gate **PASS**

---

## 8. Core page regression

| Path | Status | Indexable | Canonical | H1 |
|------|-------:|-----------|-----------|-----|
| `/` | 200 | yes | `https://www.expatcopilot.com/` | Guides and tools for Netherlands relocation |
| `/netherlands` | 200 | yes | `…/netherlands` | Move to the Netherlands with a clear plan |
| `/netherlands/health` | 200 | yes | self | Healthcare in the Netherlands |
| `/netherlands/education` | 200 | yes | self | Education & childcare in the Netherlands |
| `/netherlands/official-figures` | 200 | yes | self | Netherlands official figures 2026 |
| `/netherlands/money/banking/best-banks-expats` | 200 | yes | self | Best Banks for Expats in the Netherlands |
| `/netherlands/taxes/30-percent-ruling` | 200 | yes | self | 30% Ruling in the Netherlands |
| `/netherlands/tools/city-comparison` | 200 | yes | self | Netherlands City Comparison Tool |

**Result:** **PASS**

---

## Verdict summary

| Gate | Outcome |
|------|---------|
| Homepage 200 (all UAs) | **PASS** |
| Sitemap clean (~448) | **PASS** |
| Broken redirect chains | **PASS** (0) |
| Valuable orphans | **PASS** (0) |
| Unnecessary internal → 3xx | **PASS** (0) |
| Hero image optimization | **PASS** |
| Unintended internal → 404 | **FAIL target** (133 edges / **37** unique staged destinations) |

Homepage / sitemap / orphan / redirect / image remediation **did** land on production. Residual issue is the same class as the original release-gate non-blocker: live HTML still advertising **scheduled** services/jobs/living stubs (now concentrated outside Getting Around).

This verification did **not** change code. Clearing the remaining 37 destinations requires a **separate** engineering cleanup (filter remaining emitters), not a new architecture/SEO project.

Ahrefs length/OG noise alone should **not** start a new SEO engineering phase. The remaining **actionable** SEO engineering item is residual staged-href filtering only.

---

DEPLOYMENT VERIFIED:
NO

HOMEPAGE:
200

SITEMAP 4XX:
0

BROKEN INTERNAL LINKS:
37

BROKEN REDIRECT CHAINS:
0

VALUABLE ORPHANS:
0

UNNECESSARY INTERNAL REDIRECT EDGES:
0

CANONICAL DEFECTS:
0

TECHNICAL SEO STATUS:
PASS WITH MINOR ISSUES

SAFE TO RESUBMIT / CONTINUE GSC:
YES WITH CONDITIONS

SAFE TO CONTINUE GROWTH:
YES WITH CONDITIONS

# Sitemap.xml reliability investigation — ExpatCopilot

**Date:** 13 September 2026  
**Target:** https://www.expatcopilot.com/sitemap.xml  
**Scope:** Reproduce / classify intermittent HTTP 500. **No sitemap generation changes** unless a production 500 is proven.

---

## Executive verdict

Origin sitemap is **healthy** for crawler-class and generic HTTP clients.

- **25/25** multi-UA `curl` probes → **HTTP 200**, well-formed `urlset`, **453** `<loc>` entries, identical body hash.
- **8/8** Googlebot burst + **3/3** `urllib` probes → **200**.
- Explicit **RSC request-header** probes → still **200** + valid XML (~99 292 bytes).
- **Cursor `WebFetch` tool** → **500** (2/2 attempts this session) — same class of failure as the prior agent note (“curl = 200, one fetch provider = 500”).

**Classification of the WebFetch 500:** `TRANSIENT_EXTERNAL_FETCH_FAILURE` (fetch-provider / intermediary path). Not reproduced against the Vercel origin with curl, urllib, crawler UAs, empty UA, cache-bust, or simulated RSC headers.

**Architecture / generation change:** **none** (per investigation rules).

---

## Probe matrix

### Multi-UA curl (25 requests)

| Client label | Rounds | Status | TTFB (s) | Bytes (wire/`%{size_download}` w/ `--compressed`) | `x-vercel-cache` | Age | XML OK | URL count |
|--------------|-------:|--------|----------|-----------------------------------------------------|------------------|-----|--------|----------:|
| generic_curl | 3 | 200 | 0.17–0.68 | 4234* | HIT | ~3518–3523 | yes | 453 |
| no_ua | 2 | 200 | ~0.10 | 4234* | HIT | ~3524–3525 | yes | 453 |
| browser_chrome | 4 | 200 | 0.08–0.14 | 4234* | HIT | ~3526–3529 | yes | 453 |
| googlebot | 4 | 200 | 0.13–0.16 | 4234* | HIT | ~3530–3536 | yes | 453 |
| googlebot_smartphone | 3 | 200 | 0.13–0.43 | 4234* | HIT | ~3538–3542 | yes | 453 |
| bingbot | 3 | 200 | 0.10–0.54 | 4234* | HIT | ~3544–3547 | yes | 453 |
| ahrefsbot | 3 | 200 | ~0.09 | 4234* | HIT | ~3549–3552 | yes | 453 |
| cache_bust (`?cb=…`) | 3 | 200 | ~0.08–0.09 | 4234* | HIT | ~3553–3557 | yes | 453 |

\* `curl --compressed` `%{size_download}` reported ~4.2 KB while decompressed/body size is **99 292** bytes (confirmed via `urllib` / `Content-Length`). XML parse + `<loc>` count remain authoritative.

**Status counts:** `{200: 25}` — **no 500**.  
**Body SHA256 prefix (all rounds):** `ae2aedd8f256a449` (stable HIT body during that window).

### Burst + urllib

| Method | N | Status | Notes |
|--------|--:|--------|-------|
| curl Googlebot burst | 8 | 200 | TTFB ~0.10–0.26 s; 4234 wire metric |
| urllib (custom UA) | 3 | 200 | **99 292** bytes; `Content-Type: application/xml; charset=utf-8`; `x-vercel-cache: HIT` |

### RSC / Accept simulation (hypothesis for WebFetch)

| Probe | Status | Body | Cache |
|-------|--------|------|-------|
| Googlebot plain | 200 | XML urlset | HIT |
| `RSC: 1` + Next-Router-* headers | 200 | XML urlset 99 292 B | MISS |
| `Accept: text/x-component` + `RSC: 1` | 200 | XML urlset | MISS |

**Could not force origin 500** with RSC-style headers via curl.

### Cursor WebFetch (same session)

| Attempt | Result |
|---------|--------|
| 1 | **500 Internal Server Error** (tool error; no XML body) |
| 2 | **500 Internal Server Error** |

This matches the prior report’s “one fetch provider = 500” pattern and does **not** match origin behavior under direct HTTP probes.

---

## Response profile (healthy origin)

Representative headers (Googlebot / plain curl):

| Header | Value |
|--------|--------|
| Status | `200` |
| `content-type` | `application/xml; charset=utf-8` |
| `content-length` | `99292` |
| `server` | `Vercel` |
| `x-vercel-cache` | `HIT` / `STALE` / occasional `MISS` on RSC-keyed requests |
| `age` | thousands of seconds on HIT (CDN-cached) |
| `vary` | Often **both** `RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url` **and** `Accept-Encoding` (framework + route intent) |

XML checks:

- Root: `{sitemap}urlset`
- Well-formed: **yes** (`xml.etree`)
- `<loc>` count: **453**
- URL parse failures: **0**
- Duplicate locs: **0**
- Hosts: `www.expatcopilot.com` only

---

## Expected vs observed

| Expectation | Observed (curl / urllib / crawler UAs) |
|-------------|----------------------------------------|
| HTTP 200 | Yes (all direct probes) |
| XML-compatible content-type | `application/xml; charset=utf-8` |
| Valid urlset | Yes |
| All sitemap URLs parse | Yes (453/453) |
| Consistent across crawlers | Yes |

---

## Codepath notes (read-only)

Implementation already uses an explicit route (not fragile MetadataRoute):

- `apps/expatlife-web/app/sitemap.xml/route.ts` — `force-static`, `application/xml`, generation try/catch returns **200** homepage-only fallback (never intentional 500 from handler catch).
- Middleware matcher **excludes** `sitemap.xml`.
- `next.config.js` sets sitemap `Content-Type` + `Vary: Accept-Encoding`.
- Residual **`Vary: RSC, Next-Router-*`** still appears on CDN responses (Next framework). Documented historically as a fragmentation risk for RSC-aware clients; **not** shown to yield 500 under curl+RSC in this investigation.

No generation change applied.

---

## Classification

| Question | Answer |
|----------|--------|
| Origin 500 reproducible with crawler/curl matrix? | **No** |
| WebFetch 500 reproducible? | **Yes** (tool/provider) |
| Label for WebFetch-only failure | **`TRANSIENT_EXTERNAL_FETCH_FAILURE`** |
| Alternate if counting only origin | **`NOT_REPRODUCED`** |

---

## Recommendation

1. **Do not change** sitemap generation based on this investigation.
2. Treat Cursor/WebFetch 500 as **non-authoritative** for SEO/ops unless origin curl reproduces.
3. Optional follow-up (out of scope / not required now): strip residual RSC `Vary` at the edge for `/sitemap.xml` if WebFetch-class clients matter operationally — only after a **proven** origin 500 or broken payload under controlled RSC requests.

---

## Final scorecard

```
SITEMAP RELIABILITY:
HEALTHY

500 REPRODUCED:
NO

CHANGE REQUIRED:
NO
```

Notes: “NO” for **500 REPRODUCED** means **not reproduced on origin** with the required crawler/curl/cache-bust matrix. Cursor `WebFetch` returned 500 twice and is classified as **`TRANSIENT_EXTERNAL_FETCH_FAILURE`**, not an actionable sitemap generation defect.

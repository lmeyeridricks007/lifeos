# LIVE DEPLOYMENT PROBE

PROBE TIMESTAMP: `2026-09-07T11:36:05Z`  
VALIDATION QUERY: `validation=20260907113605`  
NETWORK REQUESTS PERFORMED: YES  
EXISTING AUDIT ARTIFACTS USED: NO  

Method: direct `curl` with `Cache-Control: no-cache` / `Pragma: no-cache` and cache-busting `?validation=<timestamp>` where used. No existing audit scripts. No prior report files read.

---

## TEST 1 — SITEMAP

**Request:** `GET https://www.expatcopilot.com/sitemap.xml?validation=20260907113605`

**Response status:** `HTTP/2 200`

**Response headers (selected):**
```
HTTP/2 200
age: 4350
cache-control: public
content-type: application/xml; charset=utf-8
date: Mon, 07 Sep 2026 10:23:35 GMT
x-matched-path: /sitemap.xml
x-vercel-cache: STALE
x-vercel-id: fra1::iad1::l26k6-1788780965726-c785f17f0533
```

**First 10 `<loc>` values:**
1. `https://www.expatcopilot.com/`
2. `https://www.expatcopilot.com/about`
3. `https://www.expatcopilot.com/affiliate-disclosure`
4. `https://www.expatcopilot.com/contact`
5. `https://www.expatcopilot.com/cookies`
6. `https://www.expatcopilot.com/disclaimer`
7. `https://www.expatcopilot.com/editorial-policy`
8. `https://www.expatcopilot.com/how-this-site-works`
9. `https://www.expatcopilot.com/how-we-rank-services`
10. `https://www.expatcopilot.com/methodology`

**Predominant sitemap URL form:** **B) `/path`** (no trailing slash)

| Count | Value |
|------:|------:|
| total URLs | **456** |
| URLs ending slash excluding root | **0** |
| URLs not ending slash (incl. root) | **456** |

---

## TEST 2 — NETHERLANDS CANONICAL

**Request:** `GET https://www.expatcopilot.com/netherlands?validation=20260907113605`  
**Page status:** `HTTP/2 200`

**Exact canonical tag in returned HTML:**
```html
<link rel="canonical" href="https://www.expatcopilot.com/netherlands"/>
```

**Canonical URL:** `https://www.expatcopilot.com/netherlands`

**Canonical first-hop (no redirects followed):**
- status: `HTTP/2 200`
- `location` header: *(none)*
- selected headers: `age: 0`, `date: Mon, 07 Sep 2026 11:36:06 GMT`, `x-vercel-cache: MISS`

---

## TEST 3 — H1

**Request:** `GET https://www.expatcopilot.com/netherlands/culture/communication-style?validation=20260907113605`

- HTTP status: `HTTP/2 200`
- number of `<h1>` elements: **1**
- exact H1 text: `Communication style in the Netherlands`

---

## TEST 4 — COUNTRY TOOL LINKS

**Request:** `GET https://www.expatcopilot.com/netherlands/moving/tools/moving-checklist/from/south-africa?validation=20260907113605`

- HTTP status: `HTTP/2 200`
- canonical: `https://www.expatcopilot.com/netherlands/moving/tools/moving-checklist/from/south-africa`
- H1: `Moving Checklist for the Netherlands — from South Africa`

**Internal links inside `<main>` whose href contains `/netherlands/moving/tools/`** (unique):
1. `/netherlands/moving/tools/moving-checklist?from=south-africa`
2. `/netherlands/moving/tools/moving-checklist`
3. `/netherlands/moving/tools/document-readiness/from/south-africa`
4. `/netherlands/moving/tools/arrival-planner/from/south-africa`
5. `/netherlands/moving/tools/first-90-days/from/south-africa`

Related country-tool `/from/south-africa` sibling links **are rendered** in main content (items 3–5).

---

## TEST 5 — NG/PH SITEMAP

From the freshly fetched sitemap only:

| Pattern | Count |
|---------|------:|
| `/from/nigeria` | **4** |
| `/from/philippines` | **4** |

**Matching URLs:**
- `https://www.expatcopilot.com/netherlands/moving/tools/arrival-planner/from/nigeria`
- `https://www.expatcopilot.com/netherlands/moving/tools/document-readiness/from/nigeria`
- `https://www.expatcopilot.com/netherlands/moving/tools/first-90-days/from/nigeria`
- `https://www.expatcopilot.com/netherlands/moving/tools/moving-checklist/from/nigeria`
- `https://www.expatcopilot.com/netherlands/moving/tools/arrival-planner/from/philippines`
- `https://www.expatcopilot.com/netherlands/moving/tools/document-readiness/from/philippines`
- `https://www.expatcopilot.com/netherlands/moving/tools/first-90-days/from/philippines`
- `https://www.expatcopilot.com/netherlands/moving/tools/moving-checklist/from/philippines`

---

## TEST 6 — HEALTH

**Request:** `GET https://www.expatcopilot.com/netherlands/health?validation=20260907113605`

- status: `HTTP/2 200`
- robots: `index, follow`
- canonical: `https://www.expatcopilot.com/netherlands/health`
- H1: `Healthcare in the Netherlands`
- first 300 characters of visible main content:

```
Netherlands · Healthcare Healthcare in the Netherlands How Dutch care fits together for newcomers: get insured, register with a huisarts, know the urgent pathway, then deepen into dentists, hospitals, mental healthcare and family care. Netherlands / Healthcare Save Copy link Share How this cluster w
```

---

## TEST 7 — EDUCATION

**Request:** `GET https://www.expatcopilot.com/netherlands/education?validation=20260907113605`

- status: `HTTP/2 200`
- robots: `index, follow`
- canonical: `https://www.expatcopilot.com/netherlands/education`
- H1: `Education & childcare in the Netherlands`
- first 300 characters of visible main content:

```
Netherlands · Education Education & childcare in the Netherlands Choose a school track, plan early-years care, and connect language, benefits and housing — then open the deep guides for Dutch schools, international schools and kinderopvang. Netherlands / Education Save Copy link Share How this clust
```

---

## TEST 8 — AUTHORITY API

**Request (no redirects):** `GET https://www.expatcopilot.com/api/authority/official-figures?validation=20260907113605`

- status: `HTTP/2 200`
- content-type: `application/json; charset=utf-8`
- first 300 characters of response:

```
{
  "meta": {
    "id": "expatcopilot-official-figures",
    "title": "Netherlands official figures 2026",
    "path": "/netherlands/official-figures",
    "asOfLabel": "As of 7 September 2026",
    "lastReviewed": "7 September 2026",
    "taxYear": 2026,
    "disclaimer": "Orientation table for cit
```

---

## NEW REMEDIATION DEPLOYMENT DETECTED:

# YES

| Signal | Expected remediated | Observed live |
|--------|---------------------|---------------|
| Sitemap slash convention | Non-trailing-slash `/path` | **B `/path`** — 0 trailing-slash locs excl. root; 456 total |
| Netherlands canonical | Noslash self-canonical, 200 | `<link rel="canonical" href="https://www.expatcopilot.com/netherlands"/>`; first-hop **200**, no Location |
| Culture H1 | Present H1 | **1** H1: `Communication style in the Netherlands` |
| Country-tool related links | Sibling `/from/{country}` tool links in content | **Yes** — document-readiness, arrival-planner, first-90-days `/from/south-africa` in `<main>` |
| NG/PH sitemap membership | Absent if staged / or live 200 | **Still present** — 8 tool URLs listed (4 NG + 4 PH) |
| Health hub | Live indexable hub with H1 | **200**, `index, follow`, self-canonical, H1 present, real hub copy |
| Education hub | Live indexable hub with H1 | **200**, `index, follow`, self-canonical, H1 present, real hub copy |
| Authority API | Live JSON (if shipped) | **200**, `application/json`, official-figures payload with as-of 7 September 2026 |

Note: sitemap response showed `x-vercel-cache: STALE` / `age: 4350` despite cache-bust query; HTML/API checks returned `MISS`/`200` with current content fingerprints above.

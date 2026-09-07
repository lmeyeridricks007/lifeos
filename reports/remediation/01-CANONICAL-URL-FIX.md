# Remediation: TECH-P1-SLASH-CANONICAL-SITEMAP

**Issue ID:** TECH-P1-SLASH-CANONICAL-SITEMAP  
**Date:** 2026-09-06  
**Scope:** Canonical URL convention only (no other SEO issues)  
**App:** `apps/expatlife-web`

---

## Previous behavior

Production probes (audit + re-verified during remediation):

| Request | First hop |
|---------|-----------|
| `https://www.expatcopilot.com/netherlands` | **200** |
| `https://www.expatcopilot.com/netherlands/` | **308** → `/netherlands` |

Across the public site:

1. **Sitemap `<loc>`** values used **trailing slash**.
2. Those locs **308**’d to the non-slash URL.
3. HTML **`<link rel="canonical">`** (and typically `og:url`) pointed at the **trailing-slash** form.
4. Viewing the **200** URL therefore yielded a canonical that itself redirected — not self-canonical.

Evidence: `reports/seo-audit/02-TECHNICAL-SEO-AUDIT.md`, `canonical-audit.csv`, `redirect-audit.csv`.

---

## Root cause

- Code `normalizeSitePath` **forced a trailing slash**.
- Sitemap + many metadata/OG/JSON-LD helpers used that form.
- Next.js / Vercel default (`trailingSlash: false`) **serves non-slash as 200** and redirects slash → non-slash.
- Result: systemic mismatch between “code canonical” and “HTTP 200 URL”.

---

## Chosen canonical convention

**No trailing slash**, except the site root `/`.

Rationale (per requirements):

- Already served as direct **HTTP 200** on production.
- Minimizes redirects for crawlers and users.
- Preserves the URL form Google already receives after the 308 (non-slash).
- Easiest to enforce consistently with platform default + explicit `trailingSlash: false`.

Single source of truth: `apps/expatlife-web/lib/seo/site-url.ts`

- `normalizeSitePath` / `toSiteHref`
- `toAbsoluteCanonicalUrl`
- `canonicalizeMetadataUrls`
- `SITE_URL_TRAILING_SLASH = false`

`src/data/site/route-registry.ts` re-exports `normalizeSitePath` for existing callers.

---

## Files changed (high level)

| Area | Change |
|------|--------|
| `lib/seo/site-url.ts` | **New** canonical URL utility |
| `lib/seo/site-url.test.ts` | **New** regression tests |
| `src/data/site/route-registry.ts` | Use shared normalizer; optional-slash path regexes; `getComingSoonRoute` |
| `src/lib/routes/routeStatus.ts` | Optional-slash regexes; coming-soon lookup |
| `lib/seo/metadata.ts` / `lib/metadata.ts` | Absolute canonicals without slash; cloneSafeMetadata normalizes |
| `src/lib/sitemap/liveSitemapPaths.ts` | Sitemap locs non-slash |
| `src/data/site/sitemap-redirect-aliases.ts` | Exclude `/netherlands/living` (intentional redirect hub) from XML sitemap |
| `src/lib/seo/breadcrumbSchema.ts` / `lib/seo/jsonld.tsx` | Absolute non-slash structured-data URLs |
| `next.config.js` | `trailingSlash: false`; redirect **destinations** stripped to non-slash (sources kept) |
| `app/**/page.tsx` + path constants / page models | Canonical paths, PATH/CANONICAL constants, and `${TOOL_PATH}/from/...` joins |
| Nav/footer/explore | High-traffic hrefs normalized (`toSiteHref` / stripped slash literals) |
| `scripts/validate-canonical-urls.ts` | Offline + HTTP validator → CSV (exact path shape; correct column order) |

Intentional redirect **aliases** were not removed. Publishing / staged gates unchanged. NG/PH sitemap 404s were **not** addressed in this remediation.

---

## Number of URLs corrected

| Surface | Count |
|---------|------:|
| Live sitemap paths under new convention (local build) | **451** (was 452; `/netherlands/living` removed as redirect alias) |
| Offline convention shape failures | **0** |
| Redirect destinations updated in `next.config.js` | **230** |
| Local HTTP: sitemap locs returning **200** with matching non-slash canonical | **443** |
| Known out-of-scope sitemap 404s (NG/PH tool-from) | **8** |

---

## Validation results (this package)

### Automated tests

```text
npx tsx --test lib/seo/site-url.test.ts lib/seo/metadata.test.ts src/lib/sitemap/liveSitemapPaths.test.ts
→ 25 pass / 0 fail
```

Coverage includes:

- canonical path convention
- internal URL normalizer
- sitemap generation (all locs non-slash; no redirect aliases)
- breadcrumb structured-data URLs
- `buildSocialMetadata` absolute canonical

### HTTP probe (production-like local `next start`)

```text
VALIDATE_CANONICAL_BASE=http://127.0.0.1:3000 npx tsx scripts/validate-canonical-urls.ts
→ sitemap_paths=451 shape_failures=0
→ http_ok=443/451 redirecting=0
→ trailing-slash canonicals in HTML: 0
→ exact path mismatches (200 pages): 0
→ reports/remediation/canonical-validation.csv
```

Remaining **8** failures are **HTTP 404** for Nigeria/Philippines moving-tool `/from/` URLs already flagged as TECH-P0 in the master audit — not trailing-slash defects.

### Production-like build

```text
EXPATOS_SKIP_CONTENTLAYER=true pnpm exec next build
→ BUILD_EXIT=0 (584 static pages generated)
```

---

## Success criteria (local production-like server)

| Check | Result |
|-------|--------|
| Remaining redirecting sitemap URLs | **0** |
| Remaining canonical-to-redirect URLs (slash form) | **0** among 200 responses |
| Sitemap/canonical path mismatches (200 pages) | **0** |
| Slash URLs still 308 → non-slash | **Expected** (platform); not advertised in sitemap/canonical |
| Intentional alias redirects | **Kept**; destinations land on non-slash 200; `/netherlands/living` omitted from sitemap |

Confirm again after deploy:

```bash
VALIDATE_CANONICAL_BASE=https://www.expatcopilot.com npx tsx scripts/validate-canonical-urls.ts
```

**Not fixed here:** TECH-P0 NG/PH sitemap 404s; orphans; CTR; performance.

---

AUDIT REMEDIATION COMPLETE FOR TECH-P1-SLASH-CANONICAL-SITEMAP — NO OTHER SEO ISSUES ADDRESSED

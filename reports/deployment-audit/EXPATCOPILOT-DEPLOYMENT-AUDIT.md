# ExpatCopilot Deployment Audit

**Audit type:** Release-path / deploy mismatch (no SEO code changes)  
**Date:** 2026-09-07  
**Production:** https://www.expatcopilot.com  
**Inputs:** post-remediation audit, production validation, `reports/remediation/`, live git + GitHub Deployments + DNS/HTTP probes  
**Companion CSV:** [`deployment-state.csv`](./deployment-state.csv)

---

## Executive answer

The SEO remediations exist in the **local working tree** under `apps/expatlife-web` (and untracked `reports/`), but they were **never committed and never pushed**.  

Production is correctly deploying **`main` @ `2a0dc465…`** (2026-09-03), which does **not** contain those changes. This is not a wrong Vercel project, not a stale domain alias, and not primarily a CDN ghost of an older build.

**Primary classification: A — code never committed.**

---

## Git state

| Item | Value |
|------|--------|
| Current local branch | `main` |
| Tracking | `main...origin/main` (synced) |
| Current local SHA | `2a0dc46564440a08f3e3a5158e72e0483fbb1ed3` |
| Latest local commit | `improvements` — 2026-09-03 08:54:22 +0200 |
| Remote | `https://github.com/lmeyeridricks007/lifeos.git` |
| Remote branch / SHA | `origin/main` = **same SHA** `2a0dc465…` |
| Ahead / behind | **0 / 0** |
| Remediation branch | **None** — remediations are not on a separate pushed branch; they live only as dirty worktree files |
| Production branch | `main` (GitHub default + Vercel Production deployments) |
| Divergence vs production tip | **None** for committed history — local HEAD == remote == last Production deploy SHA |

### Remediation commits

| Check | Result |
|-------|--------|
| Dedicated remediation commits on `main` / any branch | **None found** |
| `reports/remediation/**` in git history | **Not committed** (`reports/` is entirely `??` untracked) |
| Key remediation source files ever in `git log --all` | **0 commits** for `lib/seo/site-url.ts`, `app/netherlands/health/page.tsx`, `app/api/authority/official-figures/route.ts` |

### Working tree (where remediations actually are)

| Signal | Evidence |
|--------|----------|
| Dirty paths | **737** `git status --porcelain` entries |
| Untracked remediation cores | `apps/expatlife-web/lib/seo/site-url.ts`, `app/netherlands/health/page.tsx`, `app/netherlands/education/page.tsx`, `app/api/authority/**`, explore cluster helpers, country-tool related-link modules, entire `reports/` |
| Modified remediation cores | `ClusterTopicScaffold.tsx` (`titleAs="h1"`), `ExploreNetherlandsCrossLinks.tsx`, `liveSitemapPaths.ts`, country-tool `/from/[country]` pages, etc. |

**Whether remediation files are committed:** **NO**  
**Whether commits are pushed:** **N/A for remediations** (nothing to push); committed tip **is** pushed and matches `origin/main`.

---

## Vercel project state

Vercel CLI is **not authenticated** in this environment (`npx vercel whoami` → invalid token; no `.vercel/project.json` link). Project identity is recovered from **GitHub Deployment / commit statuses** created by `vercel[bot]`.

| Setting | Observed / documented |
|---------|------------------------|
| Vercel project name | **`lifeos-expatlife-web`** |
| Team / scope | **`leemeyeridricks-3740s-projects`** |
| Project ID | **Not visible** without Vercel API auth |
| Dashboard deployment | https://vercel.com/leemeyeridricks-3740s-projects/lifeos-expatlife-web/3nruoHAMr6Rs9ybYDDXUTaf9FkJC |
| Production branch | **`main`** (all listed Production deployments are main SHAs) |
| Root directory | Documented in repo `VERCEL.md` as **`apps/expatlife-web`** (Option A — recommended) |
| Framework | **Next.js** (`VERCEL.md` + live `x-powered-by: Next.js`) |
| Build command | Documented: **`pnpm run build`** → `EXPATOS_SKIP_CONTENTLAYER=true next build` |
| Install command | Documented: **`cd ../.. && pnpm install --frozen-lockfile`** (monorepo workspace root) |
| Output directory | Documented: **default** (Next on Vercel) |
| Ignored build step | **Not present** in repo (`no vercel.json` / no `ignoreCommand`) |
| Domain mappings (documented + live) | `expatcopilot.com` + `www.expatcopilot.com` on this Vercel project |

### Most recent production deployment

| Field | Value |
|-------|--------|
| GitHub deployment id | `6238710782` |
| Environment | Production |
| Commit SHA | **`2a0dc46564440a08f3e3a5158e72e0483fbb1ed3`** |
| Created | **2026-09-03T06:59:56Z** |
| Status | **success** (“Deployment has completed”) |
| Deployment hostname | `https://lifeos-expatlife-m6pmojdjl-leemeyeridricks-3740s-projects.vercel.app` (SSO / Deployment Protection) |
| Contains remediation commits? | **NO** — SHA equals pre-remediation tip |

Prior Production deploys (for context): `da94bff` (2026-08-31), `849474e` (2026-08-26), … all older than the uncommitted remediation worktree.

**Monorepo / turborepo:** pnpm workspace (`apps/*`, `packages/*`). **No `turbo.json`**. Deploy path is Vercel Root Directory = app + install from repo root per `VERCEL.md`.

**Env vars:** Cannot read Production dashboard secrets without Vercel auth. Live HTML uses `https://www.expatcopilot.com` origins in sitemap/canonicals, consistent with documented `NEXT_PUBLIC_SITE_URL=https://www.expatcopilot.com` for Production. Preview vs Production: latest Production deploy is what custom domains use; preview protection SSO on `*.vercel.app` is expected and unrelated to the mismatch.

---

## Domain mapping

| Hostname | DNS | HTTP | Serves |
|----------|-----|------|--------|
| `expatcopilot.com` | A → `216.198.79.1` (Vercel IP per `VERCEL.md`) | **307** → `https://www.expatcopilot.com/` | Apex redirect into www (same Vercel project) |
| `www.expatcopilot.com` | Resolves via apex/`216.198.79.1` | **200/307** app responses; `server: Vercel`, `x-vercel-id: fra1::…` | Production ExpatCopilot app |

**Do apex and www point at different projects?** **No evidence of that.** Apex is a Vercel redirect to www; www is Vercel-hosted Next.js matching project `lifeos-expatlife-web`.

**Does www point at an old deployment while a newer one exists?** **No.** Latest GitHub Production deployment is `2a0dc46` (2026-09-03). There is **no newer successful Production deployment** after remediations, because remediations were never pushed.

---

## Build artifact verification

Direct artifact download from the `*.vercel.app` deployment URL is blocked by **Vercel Deployment Protection (SSO)**. Verification uses:

1. **Committed source at deploy SHA** (`git show 2a0dc46:…`)  
2. **Live www behavior** as the served artifact fingerprint  

| Remediation signal | In worktree? | In deploy SHA `2a0dc46`? | Live production? |
|--------------------|--------------|---------------------------|------------------|
| No-slash sitemap locs | Yes (`liveSitemapPaths` + `site-url.ts`) | **No** — HEAD `normalizeSitePath` **forces trailing `/`** | **No** — sitemap still `…/about/` etc. |
| New canonical convention (no slash) | Yes | **No** — `absoluteUrlFromPath` + slash-normalized paths | **No** — canonicals still slash → 308 |
| H1 template fix (`titleAs="h1"`) | Yes (dirty `ClusterTopicScaffold.tsx`) | **No** — HEAD Section has no `titleAs="h1"` | **No** — 19 pages still missing H1 |
| Health hub page | Yes (untracked `health/page.tsx`) | **No** | **No** — `x-matched-path: /netherlands/[...slug]` Coming-soon shell |
| Education hub page | Yes (untracked) | **No** | **No** — same placeholder pattern |
| Authority API routes | Yes (untracked `app/api/authority/*`) | **No** | **No** — **404** |
| Country-tool related links | Yes (untracked/modified modules) | **No** | **No** — related-tool links absent in prod crawl |
| Explore redesign | Yes (dirty Explore component + clusters) | **No** | **No** — equity still concentrated |

**Conclusion:** The production artifact matches **pre-remediation committed code**, not the local worktree.

Middleware: only a 1-line dirty worktree addition (`x-pathname` header). Not the cause of missing remediations. CDN: sitemap shows `x-vercel-cache: HIT` with fresh `lastmod` timestamps — consistent with revalidated static generation of **current deployed code**, not a multi-week stale object from a different SHA.

---

## Hypothesis matrix (A–I)

| ID | Hypothesis | Verdict |
|----|------------|---------|
| **A** | Code never committed | **CONFIRMED — primary root cause** |
| B | Committed but not pushed | **Rejected** — remediations never committed; tip is pushed |
| C | Pushed but wrong branch | **Rejected** — no remediation branch; Production tracks `main` tip |
| D | Correct branch but Vercel did not deploy | **Rejected** — Production deploy succeeded for `2a0dc46` |
| E | Vercel deployed wrong project/root | **Rejected** — project `lifeos-expatlife-web` + domains + Next app behavior align with `apps/expatlife-web` |
| F | Deploy succeeded but domain points to old deployment | **Rejected** — domain tracks latest Production deploy; no newer remediation deploy exists |
| G | Build did not include changes | **N/A** — changes were never in the git tree Vercel built |
| H | CDN/cache serving old output | **Rejected as primary** — behavior matches HEAD source; not a cache of a newer commit |
| I | Other | Secondary risk only: after commit, ensure build is green (large dirty tree may include unrelated breakages) before promoting |

---

# ROOT CAUSE

**Most likely root cause (exact): A — SEO remediations were implemented only in the local uncommitted working tree and were never committed or pushed to `origin/main`, so Vercel’s successful Production deployment of `main@2a0dc465…` (2026-09-03) cannot contain them.**

Evidence chain:

1. Local HEAD == `origin/main` == latest Production deploy SHA = `2a0dc465…`.  
2. Key remediation files are **untracked** or **modified-only** and have **zero history** in `git log --all`.  
3. HEAD source still **forces trailing-slash** paths in `normalizeSitePath`; production sitemap/canonicals match that.  
4. Production `/netherlands/health` matches catch-all `[...slug]` (dedicated hub route absent from deploy).  
5. `/api/authority/*` 404 on production (routes absent from deploy).  
6. Domains resolve to Vercel and apex→www; project name from GitHub statuses is the intended ExpatLife web app.

---

# REQUIRED RELEASE ACTION

Minimum sequence to make remediated code live (**no extra SEO rewrites**):

1. **Stabilize the worktree for release**  
   - Review the **737** dirty paths; commit **only** the intended remediation + necessary supporting app changes (exclude accidental noise if any).  
   - Do **not** “touch files to force deploy” as a substitute for committing.

2. **Commit on `main` (or a short-lived release branch merged to `main`)**  
   - Include remediations `01`–`09` source changes (canonical/sitemap helpers, Explore, country-tool mesh, H1 scaffold, perf, authority APIs/hubs, etc.).  
   - Optionally commit `reports/` separately; not required for runtime.

3. **Push to `origin/main`**  
   - Confirm `git status` clean (or only intentional leftovers) and `ahead` becomes 0 after push.

4. **Confirm Vercel Production deploy**  
   - Watch `lifeos-expatlife-web` Production deployment for the **new SHA**.  
   - Status must be **Ready/success** (fix if build fails — fix build, do not claim production fixed).

5. **Verify domains still on that deployment**  
   - `www.expatcopilot.com` and apex redirect remain on the same project.  
   - No alias surgery expected if push-to-main auto-promote remains enabled.

6. **Re-run production validation pack**  
   - Re-check: no-slash sitemap, hub 200+indexable content, H1s, authority APIs 200, orphan/Explore metrics, etc.  
   - Only then reopen GSC-led SEO work.

**Do not claim production is fixed until step 6 passes.**

---

## Checklist answers

| Question | Answer |
|----------|--------|
| REMEDIATIONS PRESENT IN SOURCE | **YES** (local worktree) |
| REMEDIATIONS COMMITTED | **NO** |
| REMEDIATIONS PUSHED | **NO** |
| CORRECT BRANCH DEPLOYED | **YES** (`main` tip is what Production runs — but that tip lacks remediations) |
| CORRECT VERCEL PROJECT | **YES** (`lifeos-expatlife-web`) |
| PRODUCTION DOMAIN ON LATEST DEPLOYMENT | **YES** (latest Production = `2a0dc46`; www serves that era) |
| ROOT CAUSE IDENTIFIED | **YES** (**A — never committed**) |

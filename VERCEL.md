# Deploying ExpatCopilot (monorepo) to Vercel

This repository is a **pnpm workspace**: the Next.js app lives in `apps/expatlife-web`, and shared content lives in `packages/content` (`@expatlife/content`). Vercel must install dependencies from the **workspace root** so `workspace:*` resolves; the app is still built as a **Next.js** project.

---

## Prerequisites

- A [Vercel](https://vercel.com) account and a Git repository (GitHub, GitLab, or Bitbucket) pushing this monorepo.
- **Do not commit** `node_modules/`. The repo root `.gitignore` should ignore it.
- A root **`pnpm-lock.yaml`** (run `pnpm install` at the repo root and commit the lockfile).

---

## Option A — Recommended: App as root directory + install from monorepo root

This matches how Vercel’s UI expects a Next.js app in a subdirectory.

### 1. Import the project

1. In Vercel: **Add New… → Project**.
2. Import the Git repository that contains this monorepo.

### 2. Configure the project

| Setting | Value |
|--------|--------|
| **Framework Preset** | Next.js |
| **Root Directory** | `apps/expatlife-web` |
| **Build Command** | `pnpm run build` (default for the app is fine) |
| **Output Directory** | *(leave default; Next.js on Vercel handles this)* |
| **Install Command** | `cd ../.. && pnpm install --frozen-lockfile` |

Why **Install Command** matters: if Vercel only runs `pnpm install` inside `apps/expatlife-web`, it will **not** see `packages/content` and will fail on `@expatlife/content@workspace:*`. Installing from the repo root links the workspace correctly.

**Example (conceptually):**

```text
Repository root:  expatos/
                    ├── pnpm-workspace.yaml
                    ├── pnpm-lock.yaml
                    ├── packages/content/
                    └── apps/expatlife-web/   ← Vercel Root Directory
```

### 3. Node.js version

Use **Node 18.x** (aligned with `@types/node` in the app). In Vercel:

- **Settings → General → Node.js Version** → e.g. `20.x` or `18.x` (LTS).

Optional: add an `engines` field in `apps/expatlife-web/package.json` to document it:

```json
"engines": {
  "node": ">=18.16.0"
}
```

---

## Option B — Repository root as project root

Use this if you prefer all commands to run from `expatos/` without changing directory in **Install Command**.

| Setting | Value |
|--------|--------|
| **Root Directory** | `.` (leave empty / repository root) |
| **Install Command** | `pnpm install --frozen-lockfile` |
| **Build Command** | `pnpm --filter @expatlife/web build` |

You may need to set **Framework Preset** to Next.js and point Vercel at the app; if the dashboard does not detect Next.js automatically, use Option A or add a small `vercel.json` at the repo root (see below).

---

## Environment variables

Set these in **Project → Settings → Environment Variables**. Use **Production** (and **Preview** if you want the same behavior on PR previews).

### Strongly recommended for production

| Variable | Example | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.yourdomain.com` | Canonical site origin for metadata, Open Graph, JSON-LD, sitemaps. Include `https://`. If omitted on Vercel, `VERCEL_URL` is used (fine for previews; set this for production custom domain). |

### Optional (SEO / social)

| Variable | Example |
|----------|---------|
| `NEXT_PUBLIC_TWITTER_SITE` | `@YourBrand` |
| `NEXT_PUBLIC_TWITTER_CREATOR` | `@YourHandle` |

### Optional (cookies / CMP)

| Variable | Example |
|----------|---------|
| `NEXT_PUBLIC_USE_EXTERNAL_COOKIE_TOOL` | `true` |
| `NEXT_PUBLIC_EXTERNAL_COOKIE_CMP_SCRIPT_URL` | `https://...` |

### Automatically provided by Vercel (do not set manually unless you know why)

- `VERCEL_URL` — used by `getSiteOrigin()` when `NEXT_PUBLIC_SITE_URL` is unset.

**Example: Production only**

```text
NEXT_PUBLIC_SITE_URL = https://www.expatcopilot.com
Environment: Production
```

**Example: Preview + Production**

```text
NEXT_PUBLIC_SITE_URL = https://www.expatcopilot.com   → Production
(nothing)                                              → Preview uses VERCEL_URL
```

---

## Custom domain

1. **Project → Settings → Domains** → add your domain.
2. Follow DNS instructions (usually `CNAME` to `cname.vercel-dns.com` or A records as shown).
3. Set **`NEXT_PUBLIC_SITE_URL`** to that exact public URL (with `https://`).

---

## Contentlayer and MDX

The app uses **Contentlayer** with MDX under `packages/content`. During `next build`, content is generated into `apps/expatlife-web/.contentlayer`. No extra Vercel step is required if **Install** runs from the monorepo root and **Build** runs `next build` for the app.

If the build runs out of memory (rare on hobby tier), try:

- **Settings → General → Function / Build** resources if your plan allows, or
- Upgrade the build environment.

---

## pnpm and “ignored build scripts”

Locally, pnpm may prompt to approve native dependency scripts (`sharp`, `contentlayer`, etc.). On Vercel, installs run in CI and those scripts typically run as part of the normal install. If you use a custom frozen workflow, ensure you are not skipping required `postinstall` steps for Next.js.

---

## Example `vercel.json` (optional)

Only if you deploy from the **repository root** and want commands in repo config (Option B). For Next.js, Vercel usually infers output; avoid setting `outputDirectory` unless you know you need it.

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "installCommand": "pnpm install --frozen-lockfile",
  "buildCommand": "pnpm --filter @expatlife/web build"
}
```

Prefer **Option A** (Root Directory `apps/expatlife-web` + install from parent) and dashboard settings first; add `vercel.json` only if you need it.

---

## Deploy checklist

1. [ ] `pnpm-lock.yaml` committed at **repository root**.
2. [ ] `.gitignore` includes **`node_modules/`** at root.
3. [ ] **Root Directory** = `apps/expatlife-web` (Option A).
4. [ ] **Install Command** = `cd ../.. && pnpm install --frozen-lockfile`.
5. [ ] **Build** succeeds locally:  
   `cd /path/to/expatos && pnpm install && pnpm --filter @expatlife/web build`
6. [ ] **`NEXT_PUBLIC_SITE_URL`** set for production with your real domain.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|--------|----------------|------------|
| `ERR_PNPM_WORKSPACE_PKG_NOT_FOUND` / `@expatlife/content` missing | Install ran only in `apps/expatlife-web` | Use **Install Command** `cd ../.. && pnpm install --frozen-lockfile` (Option A). |
| `Could not resolve "react/jsx-dev-runtime"` (Contentlayer) | Stale cache or wrong cwd | Ensure `contentlayer.config.js` sets `mdx.cwd` to the app (already configured in this repo). Clear build cache in Vercel **Redeploy → Clear cache**. |
| Wrong canonical / OG URLs in production | Site URL not set | Set `NEXT_PUBLIC_SITE_URL` to `https://your-domain`. |
| Build works locally but fails on Vercel | Node version / lockfile | Match Node LTS; commit root `pnpm-lock.yaml`; use `--frozen-lockfile`. |

---

## Quick reference commands (local, mirror CI)

```bash
# From repository root
pnpm install --frozen-lockfile
pnpm --filter @expatlife/web build
```

```bash
# Dev (from app folder)
cd apps/expatlife-web && pnpm dev
```

After the first successful deployment, every push to the connected branch triggers a **Preview** deployment; **Production** follows your chosen branch (usually `main`).

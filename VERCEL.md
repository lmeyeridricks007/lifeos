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

## Custom domain: GoDaddy DNS → Vercel

You bought **expatcopilot.com** at GoDaddy. DNS is still edited in **GoDaddy** unless you change nameservers to Vercel (this guide keeps GoDaddy as DNS host — simplest if you already use GoDaddy records like Mailgun).

### 1. Add the domain in Vercel first

1. Open your project on [vercel.com](https://vercel.com) → **Settings** → **Domains**.
2. Add **`expatcopilot.com`** and **`www.expatcopilot.com`** (add both; Vercel will tell you which is primary and can redirect the other).
3. Vercel shows the **exact** DNS records it expects. **Copy those values character-for-character into GoDaddy.** IPs and CNAME targets **change by project and over time**; do not rely only on examples below.

**What the Vercel UI shows for this project (example):**

| Purpose | Type | Name / Host | Example value (yours may differ) |
|--------|------|-------------|--------------------------------|
| Apex (`expatcopilot.com`) | **A** | `@` | Often **`216.198.79.1`** (newer recommended IP) **or** **`76.76.21.21`** (legacy; Vercel may say both work during migrations) |
| `www` subdomain | **CNAME** | `www` | Often a **unique** host like **`a508589573b8fa98.vercel-dns-017.com`** — **not** always `cname.vercel-dns.com` |

If **apex** redirects to **`www`** in Vercel (e.g. 307 `expatcopilot.com` → `www.expatcopilot.com`), you still configure DNS for **both** hostnames as Vercel lists them. **Production** is usually **`www`** in that setup.

### 2. GoDaddy vs what Vercel expects

| Symptom | Likely cause | What to do |
|---------|----------------|------------|
| **Invalid configuration** on **`www`** | `www` CNAME still points to `expatcopilot.com` or an old host. | Set **`www`** CNAME to the **exact** target from Vercel (e.g. `…vercel-dns-017.com`), including no mistaken extra domain. |
| **Invalid configuration** on **apex** | Wrong **A** on `@`, or multiple conflicting **A** records. | Set **`@`** **A** to the **IP shown in Vercel** (e.g. `216.198.79.1`). Remove **extra** A records on `@` that point elsewhere. |
| Apex A already **`216.198.79.1`** but still invalid | Propagation delay, or **`www`** not fixed yet. | Fix **`www`** first; click **Refresh** on Vercel Domains after 5–10 minutes. |
| **NS** rows (`ns21` / `ns22.domaincontrol.com`) | — | **Do not change** (GoDaddy DNS). |
| **CNAME** **email** → `mailgun.org` | — | **Leave as-is** for Mailgun unless their docs say otherwise. |

**Only one apex A for `@`:** There must be a single clear **A** record for the root matching Vercel — no second A on `@` pointing at a parking or old host.

### 3. Edit records in GoDaddy (step-by-step)

1. Sign in to GoDaddy → **My Products** → **expatcopilot.com** → **DNS** / **Manage DNS**.
2. Keep **Vercel → Settings → Domains** open; copy values from there for this project.
3. **Apex (`@`)**
   - Find **Type A**, **Name** `@` (or blank / “Domain”).
   - **Edit** → set **Value** to the **IPv4 address Vercel shows** (e.g. **`216.198.79.1`**) → save.
4. **`www`**
   - Find **Type CNAME**, **Name** `www`.
   - **Edit** → set **Value** to the **hostname Vercel shows** (e.g. **`a508589573b8fa98.vercel-dns-017.com`** — trailing dot in GoDaddy is OK) → save.
5. Wait for propagation, then in Vercel click **Refresh** next to each domain. Status should become **Valid**; HTTPS is issued automatically.

### 4. Finish in Vercel

- Return to **Settings → Domains**. After DNS propagates, the domain should show as **Valid** and Vercel will issue **HTTPS** automatically (Let’s Encrypt).
- In **Settings → Environment Variables**, set for **Production**:
  - **`NEXT_PUBLIC_SITE_URL`** = `https://www.expatcopilot.com` **or** `https://expatcopilot.com` — use the **canonical** URL you want for Open Graph, canonical tags, and sharing (pick one; align with whether you redirect apex → www or the reverse in Vercel).

### 5. Optional: apex vs `www` as the “main” site

- In **Vercel → Domains**, you can set one hostname as primary and **redirect** the other (e.g. `expatcopilot.com` → `www.expatcopilot.com`). That avoids duplicate content and keeps one clear public URL.
- Match **`NEXT_PUBLIC_SITE_URL`** to that primary URL.

### 6. Verify DNS (optional)

From a terminal:

```bash
dig +short expatcopilot.com A
dig +short www.expatcopilot.com CNAME
```

`dig` should show the apex **A** matching **Vercel’s current IP** and `www` **CNAME** matching **Vercel’s target** (e.g. `*.vercel-dns-017.com`). Use [DNSChecker](https://dnschecker.org) to see propagation worldwide.

### 7. Troubleshooting

| Issue | What to check |
|-------|----------------|
| Vercel says “Invalid configuration” | Line-by-line match to **Vercel → Domains**; **`www` CNAME** is usually wrong (must be the long `*.vercel-dns-…` host, not your own domain). |
| SSL stuck “Pending” | DNS must be correct first; wait 10–60 minutes after DNS is green. |
| Site loads on `www` but not apex | Missing or wrong **A** on `@`, or conflicting old **A** records. |
| Email stops working | You should not need to change **MX** or the **email** CNAME for basic Vercel setup; only change what this guide lists unless Mailgun/support says otherwise. |

---

## Custom domain (short checklist)

1. **Vercel → Settings → Domains** → add `expatcopilot.com` and `www.expatcopilot.com`; read the **exact** A + CNAME rows Vercel shows.
2. **GoDaddy DNS** → set **A** `@` and **CNAME** `www` to those **exact** values (often **A** = `216.198.79.1`, **CNAME** = `….vercel-dns-017.com` — **copy from Vercel**).
3. **Refresh** in Vercel after DNS propagates; set **`NEXT_PUBLIC_SITE_URL`** to your canonical `https://…` (e.g. `https://www.expatcopilot.com` if that is Production).

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

## Social sharing: Facebook shows “Authentication Required”

If you share a **preview** URL (for example `*.vercel.app` from a branch or the long auto-generated preview hostname), Facebook, LinkedIn, Slack, etc. **fetch that URL as an anonymous bot**. They **cannot** complete Vercel login or SSO.

When **Deployment Protection** is on (especially **Vercel Authentication** or password protection for previews), those bots receive the **protection / login page** instead of your HTML. The link preview then shows something like **“Authentication Required”** — not missing OG tags in your Next.js app.

### What to do

1. **Share the public production URL** when you care about previews: your **custom domain** or the **Production** deployment’s hostname, with protection configured so **Production is public** (typical setup).
2. **Adjust Deployment Protection** (Vercel → Project → **Settings → Deployment Protection**):
   - Limit protection to what you need (for example protect **Preview** only for internal QA, and accept that **social previews will not work** on those URLs), or
   - Disable Vercel Authentication for previews if previews must be shareable publicly.
3. **After changing protection or metadata**, use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) on the final public URL and click **Scrape Again** so Meta refreshes its cache.

**Note:** “Protection bypass for automation” secrets are for **your** automation (CI, scripts) that send a header or query param — Meta’s crawler will not send those, so it does not fix Facebook previews on protected deployments.

---

## Troubleshooting

| Symptom | Likely cause | What to do |
|--------|----------------|------------|
| Facebook / Slack preview says **Authentication Required** for a `*.vercel.app` link | **Deployment Protection** on that deployment; crawlers are not logged in | Share **production** URL, or turn off / relax preview protection (see **Social sharing** above). |
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

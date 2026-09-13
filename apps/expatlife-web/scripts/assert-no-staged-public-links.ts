/**
 * Static regression guard: fail on ungated JSX Link/a href string literals that
 * point at the known residual staged destinations (Ahrefs post-deploy 2026-09-09).
 *
 * Route-status correctness: `src/lib/routes/stagedPublicLinks.test.ts`.
 *
 * Usage: pnpm exec tsx scripts/assert-no-staged-public-links.ts
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = join(__dirname, "..");
const SCAN_DIRS = ["app", "src", "components", "lib"].map((d) => join(ROOT, d));

const RESIDUAL = [
  "/netherlands/jobs/starting-consultancy-netherlands",
  "/netherlands/services/accountants",
  "/netherlands/services/business-consultants",
  "/netherlands/services/insurance-brokers",
  "/netherlands/services/recruitment-agencies",
  "/netherlands/services/career-coaches",
  "/netherlands/living/bike-sharing-netherlands",
  "/netherlands/services/insurance",
  "/netherlands/services/moving-companies",
  "/netherlands/services/removal-companies",
  "/netherlands/living/train-discounts-netherlands",
  "/netherlands/living/weekend-travel-netherlands",
  "/netherlands/living/trams-netherlands",
  "/netherlands/services/immigration-visas",
  "/netherlands/services/pet-relocation-companies",
  "/netherlands/services/daycare-providers",
  "/netherlands/living/museums-netherlands",
  "/netherlands/living/metro-netherlands",
  "/netherlands/living/regional-buses-netherlands",
  "/netherlands/living/cycling-netherlands",
  "/netherlands/services/notaries",
  "/netherlands/living/hiking-netherlands",
  "/netherlands/services/estate-agents",
  "/netherlands/services/documents-legal",
  "/netherlands/services/expat-tax-services",
  "/netherlands/services/compare-health-insurance",
  "/netherlands/services/international-schools",
  "/netherlands/living/weekend-trips-netherlands",
  "/netherlands/living/hidden-gems-netherlands",
  "/netherlands/jobs/networking-netherlands",
  "/netherlands/jobs/linkedin-netherlands",
  "/netherlands/services/banking-finance",
  "/netherlands/services/phone-providers",
  "/netherlands/services/internet-providers",
  "/netherlands/services/energy-providers",
  "/netherlands/services/storage-companies",
  "/netherlands/services/payroll-services",
] as const;

const GATE_RE =
  /isRouteLive|isGuideCardHrefLive|filterLiveInternalLinks|toRenderableInternalLink|mapRelatedGuideLinks|getRouteStatus/;

const SKIP_NAME =
  /(\.test\.|\.spec\.|scheduledGuides|route-registry|publicImageManifest|navItemModel\.test|assert-no-staged)/;

/** Longer paths first so `/services/insurance` does not match `/services/insurance-brokers`. */
const residualSorted = [...RESIDUAL].sort((a, b) => b.length - a.length);

function walk(dir: string, out: string[] = []): string[] {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const name of entries) {
    if (name === "node_modules" || name === ".next" || name === "public") continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(tsx|jsx)$/.test(name) && !SKIP_NAME.test(p)) out.push(p);
  }
  return out;
}

function matchResidual(href: string): string | null {
  const n = href.replace(/\/$/, "");
  for (const dest of residualSorted) {
    if (n === dest || n.startsWith(`${dest}/`)) return dest;
  }
  return null;
}

const jsxFailures: string[] = [];

for (const file of SCAN_DIRS.flatMap((d) => walk(d))) {
  const lines = readFileSync(file, "utf8").split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    if (!line.includes("href=") || (!line.includes("<Link") && !line.includes("<a ") && !line.includes("<a\t"))) {
      // Multi-line: previous lines may open the tag
      if (!/href\s*=/.test(line)) continue;
      const lookback = lines.slice(Math.max(0, i - 6), i + 1).join("\n");
      if (!/<Link\b|<a\b/.test(lookback)) continue;
    }
    const hrefMatch = line.match(/href\s*=\s*(?:\{`([^`]+)`\}|"([^"]+)"|'([^']+)'|\{"([^"]+)"\}|\{'([^']+)'\})/);
    if (!hrefMatch) continue;
    const raw = (hrefMatch[1] ?? hrefMatch[2] ?? hrefMatch[3] ?? hrefMatch[4] ?? hrefMatch[5] ?? "").split(
      /[?#]/
    )[0];
    if (!raw.startsWith("/netherlands")) continue;
    const dest = matchResidual(raw);
    if (!dest) continue;
    const window = lines.slice(Math.max(0, i - 8), i + 1).join("\n");
    if (GATE_RE.test(window)) continue;
    jsxFailures.push(`${relative(ROOT, file)}:${i + 1} → ${dest}`);
  }
}

if (jsxFailures.length) {
  console.error("assert-no-staged-public-links FAILED\n");
  for (const f of jsxFailures) console.error("  jsx:", f);
  process.exit(1);
}

console.log(
  `assert-no-staged-public-links OK — no ungated JSX href literals to ${RESIDUAL.length} residual destinations`
);

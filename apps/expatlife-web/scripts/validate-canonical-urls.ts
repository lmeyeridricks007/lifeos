/**
 * Validate sitemap URL convention + optional HTTP probes (TECH-P1 remediation).
 *
 * Usage:
 *   tsx scripts/validate-canonical-urls.ts
 *   VALIDATE_CANONICAL_BASE=http://127.0.0.1:3000 tsx scripts/validate-canonical-urls.ts
 *   VALIDATE_CANONICAL_BASE=https://www.expatcopilot.com tsx scripts/validate-canonical-urls.ts
 *
 * Without VALIDATE_CANONICAL_BASE, only offline sitemap/path convention checks run.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import {
  collectLiveSitemapNormalizedPaths,
  buildSitemapUrlEntries,
} from "../src/lib/sitemap/liveSitemapPaths";
import {
  isCanonicalPathShape,
  normalizeSitePath,
  toAbsoluteCanonicalUrl,
} from "../lib/seo/site-url";
import { PRODUCTION_CANONICAL_ORIGIN } from "../lib/site-origin";

type Row = {
  url: string;
  path: string;
  http_status_first: string;
  redirect_location: string;
  canonical: string;
  canonical_matches_request: string;
  robots: string;
  ok: string;
  notes: string;
};

function parseCanonical(html: string): string {
  const m =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
    html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  return m?.[1]?.trim() || "";
}

function parseRobots(html: string): string {
  const m = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i);
  return m?.[1]?.trim() || "";
}

function canonicalMatchesRequestExact(requestUrl: string, canonical: string): boolean {
  if (!canonical) return false;
  try {
    const req = new URL(requestUrl);
    const can = new URL(canonical, requestUrl);
    // Exact path+query convention: same normalized path (no trailing slash except /), ignore host
    // differences between local probe base and production origin in HTML.
    return normalizeSitePath(can.pathname) === normalizeSitePath(req.pathname) && isCanonicalPathShape(can.pathname);
  } catch {
    return false;
  }
}

async function probe(url: string): Promise<Omit<Row, "ok" | "notes" | "path">> {
  const res = await fetch(url, { redirect: "manual", headers: { "user-agent": "ExpatCopilotCanonicalValidate/1.0" } });
  const status = String(res.status);
  const location = res.headers.get("location") || "";
  let canonical = "";
  let robots = "";
  if (res.status === 200) {
    const html = await res.text();
    canonical = parseCanonical(html);
    robots = parseRobots(html);
  }
  return {
    url,
    http_status_first: status,
    redirect_location: location,
    canonical,
    canonical_matches_request: canonicalMatchesRequestExact(url, canonical) ? "yes" : "no",
    robots,
  };
}

async function main() {
  const paths = collectLiveSitemapNormalizedPaths();
  const entries = buildSitemapUrlEntries(PRODUCTION_CANONICAL_ORIGIN, paths);

  let shapeFailures = 0;
  for (const p of paths) {
    if (!isCanonicalPathShape(p) || normalizeSitePath(p) !== p) {
      shapeFailures += 1;
      console.error("bad path shape", p);
    }
  }
  for (const e of entries) {
    const u = new URL(e.loc);
    if (!isCanonicalPathShape(u.pathname)) {
      shapeFailures += 1;
      console.error("bad loc", e.loc);
    }
  }

  console.log(`sitemap_paths=${paths.length} shape_failures=${shapeFailures}`);

  const base = process.env.VALIDATE_CANONICAL_BASE?.replace(/\/$/, "");
  const rows: Row[] = [];

  if (!base) {
    for (const e of entries) {
      rows.push({
        url: e.loc,
        path: new URL(e.loc).pathname,
        http_status_first: "skipped",
        redirect_location: "",
        canonical: e.loc,
        canonical_matches_request: "n/a_offline",
        robots: "",
        ok: shapeFailures === 0 ? "convention_ok" : "convention_fail",
        notes: "Offline convention check only (set VALIDATE_CANONICAL_BASE to probe HTTP)",
      });
    }
  } else {
    const limit = Number(process.env.VALIDATE_CANONICAL_LIMIT || "0") || entries.length;
    const slice = entries.slice(0, limit);
    const concurrency = 8;
    let i = 0;
    async function worker() {
      while (i < slice.length) {
        const idx = i++;
        const e = slice[idx]!;
        const path = new URL(e.loc).pathname;
        const url = toAbsoluteCanonicalUrl(base, path);
        try {
          const r = await probe(url);
          const noindex = /noindex/i.test(r.robots);
          const ok =
            r.http_status_first === "200" &&
            r.canonical_matches_request === "yes" &&
            !noindex
              ? "yes"
              : "no";
          rows.push({
            ...r,
            path,
            ok,
            notes:
              ok === "yes"
                ? ""
                : `status=${r.http_status_first}; canonical=${r.canonical}; robots=${r.robots}`,
          });
        } catch (err) {
          rows.push({
            url,
            path,
            http_status_first: "error",
            redirect_location: "",
            canonical: "",
            canonical_matches_request: "no",
            robots: "",
            ok: "no",
            notes: String(err),
          });
        }
        if ((idx + 1) % 25 === 0) console.log(`probed ${idx + 1}/${slice.length}`);
      }
    }
    await Promise.all(Array.from({ length: concurrency }, () => worker()));
  }

  const outDir = join(process.cwd(), "../../reports/remediation");
  mkdirSync(outDir, { recursive: true });
  const outCsv = join(outDir, "canonical-validation.csv");
  const columns: (keyof Row)[] = [
    "url",
    "path",
    "http_status_first",
    "redirect_location",
    "canonical",
    "canonical_matches_request",
    "robots",
    "ok",
    "notes",
  ];
  const header = columns.join(",");
  const body = rows
    .map((r) =>
      columns
        .map((key) => `"${String(r[key] ?? "").replace(/"/g, '""')}"`)
        .join(",")
    )
    .join("\n");
  writeFileSync(outCsv, header + "\n" + body + "\n");
  console.log("wrote", outCsv);

  const httpRows = rows.filter((r) => r.http_status_first !== "skipped");
  if (httpRows.length) {
    const bad = httpRows.filter((r) => r.ok !== "yes");
    const redirecting = httpRows.filter((r) => /^3\d\d$/.test(r.http_status_first));
    console.log(`http_ok=${httpRows.length - bad.length}/${httpRows.length} redirecting=${redirecting.length}`);
    if (bad.length) {
      console.error("failures sample", bad.slice(0, 10));
      process.exitCode = 1;
    }
  } else if (shapeFailures) {
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

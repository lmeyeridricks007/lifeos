import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SITEMAP_PERMANENT_REDIRECT_ALIASES } from "@/src/data/site/sitemap-redirect-aliases";
import { LIVE_PATHS, normalizeSitePath } from "@/src/data/site/route-registry";
import { getClusterPageByPath, getClusterSlugsForStaticParams } from "@/src/lib/guides/livingCultureCluster";
import {
  buildSitemapUrlEntries,
  collectLiveSitemapNormalizedPaths,
  escapeXmlText,
  renderSitemapXml,
  sitemapLastModifiedIsoForPath,
} from "@/src/lib/sitemap/liveSitemapPaths";

/** EC-20260826-007 — keep 308s; never emit these legacy locs in sitemap.xml. */
const E1_SITEMAP_REDIRECT_ALIASES = [
  "/netherlands/work/work-culture-netherlands/",
  "/netherlands/work/layoffs-netherlands/",
] as const;

/** EC-20260826-013 — one workplace-culture URL; culture path is alias only. */
const E2_CULTURE_WORKPLACE_ALIAS = "/netherlands/culture/dutch-workplace-culture/";
const E2_JOBS_WORKPLACE_CANONICAL = "/netherlands/jobs/dutch-workplace-culture/";

describe("liveSitemapPaths (E1 redirect aliases)", () => {
  it("lists E1 legacy work paths as permanent-redirect aliases", () => {
    const aliases = new Set(SITEMAP_PERMANENT_REDIRECT_ALIASES.map((p) => normalizeSitePath(p)));
    for (const path of E1_SITEMAP_REDIRECT_ALIASES) {
      assert.equal(aliases.has(normalizeSitePath(path)), true, `${path} missing from SITEMAP_PERMANENT_REDIRECT_ALIASES`);
    }
  });

  it("keeps E1 aliases live for nav helpers but omits them from XML sitemap", () => {
    const sitemap = new Set(collectLiveSitemapNormalizedPaths());
    for (const path of E1_SITEMAP_REDIRECT_ALIASES) {
      const n = normalizeSitePath(path);
      assert.equal(LIVE_PATHS.has(n), true, `${path} should stay in LIVE_PATHS`);
      assert.equal(sitemap.has(n), false, `${path} must not appear in sitemap.xml`);
    }
  });

  it("still includes the canonical destinations for E1 redirects", () => {
    const sitemap = new Set(collectLiveSitemapNormalizedPaths());
    assert.equal(sitemap.has("/netherlands/jobs/dutch-workplace-culture/"), true);
    assert.equal(sitemap.has("/netherlands/moving/layoffs-netherlands/"), true);
  });
});

describe("liveSitemapPaths (E2 workplace-culture URL)", () => {
  it("lists the culture workplace path as a permanent-redirect alias", () => {
    const aliases = new Set(SITEMAP_PERMANENT_REDIRECT_ALIASES.map((p) => normalizeSitePath(p)));
    assert.equal(aliases.has(normalizeSitePath(E2_CULTURE_WORKPLACE_ALIAS)), true);
  });

  it("keeps the culture alias live for nav helpers but omits it from XML sitemap", () => {
    const sitemap = new Set(collectLiveSitemapNormalizedPaths());
    const n = normalizeSitePath(E2_CULTURE_WORKPLACE_ALIAS);
    assert.equal(LIVE_PATHS.has(n), true);
    assert.equal(sitemap.has(n), false);
  });

  it("indexes only the jobs workplace-culture canonical", () => {
    const sitemap = new Set(collectLiveSitemapNormalizedPaths());
    assert.equal(sitemap.has(E2_JOBS_WORKPLACE_CANONICAL), true);
  });

  it("keeps the culture cluster entry hidden (alias history only; no static page)", () => {
    const entry = getClusterPageByPath(normalizeSitePath(E2_CULTURE_WORKPLACE_ALIAS));
    assert.ok(entry);
    assert.equal(entry.contentStatus, "hidden");
    assert.equal(entry.canonicalGuidePath, E2_JOBS_WORKPLACE_CANONICAL);
    assert.equal(getClusterSlugsForStaticParams("culture").includes("dutch-workplace-culture"), false);
  });
});

describe("liveSitemapPaths (E3 sitemap clients / locs)", () => {
  it("omits every permanent-redirect alias from XML locs", () => {
    const sitemap = new Set(collectLiveSitemapNormalizedPaths());
    for (const alias of SITEMAP_PERMANENT_REDIRECT_ALIASES) {
      const n = normalizeSitePath(alias);
      assert.equal(sitemap.has(n), false, `${n} must not appear in sitemap.xml`);
    }
  });

  it("renders clone-safe application/xml urlset (no MetadataRoute shape)", () => {
    const now = new Date("2026-08-30T12:00:00.000Z");
    const xml = renderSitemapXml(
      buildSitemapUrlEntries("https://www.expatcopilot.com", ["/", "/netherlands/"], now)
    );
    assert.match(xml, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
    assert.match(xml, /xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/);
    assert.match(xml, /<loc>https:\/\/www\.expatcopilot\.com\/<\/loc>/);
    assert.match(xml, /<loc>https:\/\/www\.expatcopilot\.com\/netherlands\/<\/loc>/);
    assert.equal((xml.match(/<url>/g) ?? []).length, 2);
  });

  it("escapes XML special characters in locs", () => {
    assert.equal(escapeXmlText(`https://x.test/a&b<"'>`), "https://x.test/a&amp;b&lt;&quot;&apos;&gt;");
  });

  it("documents bulk lastmod as generation time (not mass rewrites)", () => {
    const now = new Date("2026-08-26T16:41:23.000Z");
    const entries = buildSitemapUrlEntries(
      "https://www.expatcopilot.com",
      ["/", "/netherlands/jobs/dutch-workplace-culture/"],
      now
    );
    assert.equal(entries[0]?.lastmod, "2026-08-26T16:41:23.000Z");
    assert.equal(entries[1]?.lastmod, "2026-08-26T16:41:23.000Z");
    assert.equal(typeof sitemapLastModifiedIsoForPath("/"), "string");
  });
});

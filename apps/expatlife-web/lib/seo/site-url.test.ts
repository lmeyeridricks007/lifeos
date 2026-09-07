import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  isCanonicalPathShape,
  normalizeSitePath,
  toAbsoluteCanonicalUrl,
  toSiteHref,
  canonicalizeMetadataUrls,
} from "./site-url";
import { absoluteUrlFromPath, buildSocialMetadata } from "./metadata";
import { PRODUCTION_CANONICAL_ORIGIN } from "../site-origin";
import {
  buildSitemapUrlEntries,
  collectLiveSitemapNormalizedPaths,
  renderSitemapXml,
} from "@/src/lib/sitemap/liveSitemapPaths";
import { buildBreadcrumbSchema, getToolBreadcrumbItems } from "@/src/lib/seo/breadcrumbSchema";

describe("site-url canonical convention (no trailing slash)", () => {
  it("normalizeSitePath strips trailing slashes except root", () => {
    assert.equal(normalizeSitePath("/"), "/");
    assert.equal(normalizeSitePath("/netherlands/"), "/netherlands");
    assert.equal(normalizeSitePath("/netherlands"), "/netherlands");
    assert.equal(normalizeSitePath("Netherlands/Amsterdam/"), "/netherlands/amsterdam");
    assert.equal(normalizeSitePath("/search/?q=x"), "/search");
  });

  it("toSiteHref matches normalizeSitePath", () => {
    assert.equal(toSiteHref("/about/"), "/about");
  });

  it("toAbsoluteCanonicalUrl builds non-slash absolute URLs", () => {
    assert.equal(
      toAbsoluteCanonicalUrl(PRODUCTION_CANONICAL_ORIGIN, "/netherlands/amsterdam/"),
      `${PRODUCTION_CANONICAL_ORIGIN}/netherlands/amsterdam`
    );
    assert.equal(toAbsoluteCanonicalUrl(PRODUCTION_CANONICAL_ORIGIN, "/"), `${PRODUCTION_CANONICAL_ORIGIN}/`);
  });

  it("isCanonicalPathShape rejects trailing slash pages", () => {
    assert.equal(isCanonicalPathShape("/"), true);
    assert.equal(isCanonicalPathShape("/netherlands"), true);
    assert.equal(isCanonicalPathShape("/netherlands/"), false);
  });

  it("canonicalizeMetadataUrls fixes slash canonical + og:url", () => {
    const fixed = canonicalizeMetadataUrls(
      {
        alternates: { canonical: `${PRODUCTION_CANONICAL_ORIGIN}/about/` },
        openGraph: { url: "/about/" },
      },
      PRODUCTION_CANONICAL_ORIGIN
    );
    assert.equal(fixed.alternates?.canonical, `${PRODUCTION_CANONICAL_ORIGIN}/about`);
    assert.equal(fixed.openGraph?.url, `${PRODUCTION_CANONICAL_ORIGIN}/about`);
  });
});

describe("metadata absoluteUrlFromPath", () => {
  it("strips trailing slash", () => {
    assert.equal(absoluteUrlFromPath("/sitemap/"), `${PRODUCTION_CANONICAL_ORIGIN}/sitemap`);
  });

  it("buildSocialMetadata emits non-slash canonical", () => {
    const meta = buildSocialMetadata({
      title: "Sitemap",
      description: "Browse pages.",
      path: "/sitemap/",
    });
    assert.equal(meta.alternates?.canonical, `${PRODUCTION_CANONICAL_ORIGIN}/sitemap`);
    assert.equal(meta.openGraph?.url, `${PRODUCTION_CANONICAL_ORIGIN}/sitemap`);
  });
});

describe("sitemap generation canonical convention", () => {
  it("every live sitemap path is non-slash (except root) and locs match", () => {
    const paths = collectLiveSitemapNormalizedPaths();
    assert.ok(paths.length > 100, `expected many paths, got ${paths.length}`);
    for (const path of paths) {
      assert.equal(normalizeSitePath(path), path, `path not normalized: ${path}`);
      assert.equal(isCanonicalPathShape(path), true, `bad shape: ${path}`);
    }
    const entries = buildSitemapUrlEntries(PRODUCTION_CANONICAL_ORIGIN, paths);
    assert.equal(entries.length, paths.length);
    for (const e of entries) {
      const u = new URL(e.loc);
      assert.equal(u.origin, PRODUCTION_CANONICAL_ORIGIN);
      assert.equal(isCanonicalPathShape(u.pathname), true, `loc has trailing slash: ${e.loc}`);
      assert.equal(e.loc, toAbsoluteCanonicalUrl(PRODUCTION_CANONICAL_ORIGIN, u.pathname));
    }
    const xml = renderSitemapXml(entries.slice(0, 3));
    assert.match(xml, /<loc>https:\/\/www\.expatcopilot\.com\//);
    assert.doesNotMatch(xml, /expatcopilot\.com\/netherlands\/</);
  });

  it("does not emit redirect-alias paths as locs", () => {
    const paths = new Set(collectLiveSitemapNormalizedPaths());
    assert.equal(paths.has("/netherlands/work/layoffs-netherlands"), false);
    assert.equal(paths.has("/netherlands/work/layoffs-netherlands/"), false);
  });
});

describe("breadcrumb structured data URLs", () => {
  it("emits absolute non-slash item URLs", () => {
    const items = getToolBreadcrumbItems("Visa checker", "/netherlands/visa-checker/");
    const schema = buildBreadcrumbSchema(items) as {
      itemListElement: Array<{ item: string }>;
    };
    for (const el of schema.itemListElement) {
      const u = new URL(el.item);
      assert.equal(isCanonicalPathShape(u.pathname), true, el.item);
    }
    assert.equal(
      schema.itemListElement.at(-1)?.item,
      `${PRODUCTION_CANONICAL_ORIGIN}/netherlands/visa-checker`
    );
  });
});

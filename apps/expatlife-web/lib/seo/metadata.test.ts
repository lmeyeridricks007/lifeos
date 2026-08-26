import test from "node:test";
import assert from "node:assert/strict";
import { pageMetadataTitle, sharePreviewTitle, stripBrandTitleSuffix } from "./metadata";

test("stripBrandTitleSuffix removes trailing brand", () => {
  assert.equal(stripBrandTitleSuffix("Sitemap | ExpatCopilot"), "Sitemap");
  assert.equal(stripBrandTitleSuffix("30% Ruling in the Netherlands | ExpatCopilot"), "30% Ruling in the Netherlands");
});

test("pageMetadataTitle uses absolute when already branded", () => {
  assert.deepEqual(pageMetadataTitle("Sitemap | ExpatCopilot"), { absolute: "Sitemap | ExpatCopilot" });
  assert.equal(pageMetadataTitle("Netherlands Survival Guide for Expats"), "Netherlands Survival Guide for Expats");
});

test("sharePreviewTitle adds brand once", () => {
  assert.equal(sharePreviewTitle("Sitemap"), "Sitemap | ExpatCopilot");
  assert.equal(sharePreviewTitle("Sitemap | ExpatCopilot"), "Sitemap | ExpatCopilot");
});

test("buildSocialMetadata uses absolute canonical on production origin", async () => {
  const { buildSocialMetadata } = await import("./metadata.js");
  const { PRODUCTION_CANONICAL_ORIGIN } = await import("../site-origin.js");
  const meta = buildSocialMetadata({
    title: "Sitemap",
    description: "Browse pages.",
    path: "/sitemap/",
  });
  assert.equal(meta.alternates?.canonical, `${PRODUCTION_CANONICAL_ORIGIN}/sitemap/`);
});

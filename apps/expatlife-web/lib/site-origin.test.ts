import test from "node:test";
import assert from "node:assert/strict";
import {
  PRODUCTION_CANONICAL_ORIGIN,
  getSeoPublicOrigin,
  getSiteOrigin,
  isDeploymentPreviewHost,
} from "./site-origin";

const ENV_KEYS = ["NEXT_PUBLIC_SITE_URL", "VERCEL_ENV", "VERCEL_URL"] as const;

function withEnv(
  overrides: Partial<Record<(typeof ENV_KEYS)[number], string | undefined>>,
  fn: () => void
) {
  const saved = Object.fromEntries(ENV_KEYS.map((k) => [k, process.env[k]])) as Record<
    (typeof ENV_KEYS)[number],
    string | undefined
  >;
  for (const key of ENV_KEYS) {
    const value = overrides[key];
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
  try {
    fn();
  } finally {
    for (const key of ENV_KEYS) {
      const value = saved[key];
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

test("isDeploymentPreviewHost detects vercel deployment hosts", () => {
  assert.equal(isDeploymentPreviewHost("lifeos-expatlife-cmypvws13-leemeyeridricks-3740s-projects.vercel.app"), true);
  assert.equal(isDeploymentPreviewHost("https://foo.vercel.app"), true);
  assert.equal(isDeploymentPreviewHost("www.expatcopilot.com"), false);
  assert.equal(isDeploymentPreviewHost("https://www.expatcopilot.com"), false);
});

test("getSeoPublicOrigin ignores misconfigured vercel NEXT_PUBLIC_SITE_URL", () => {
  withEnv(
    {
      NEXT_PUBLIC_SITE_URL:
        "https://lifeos-expatlife-cmypvws13-leemeyeridricks-3740s-projects.vercel.app",
      VERCEL_ENV: "production",
    },
    () => {
      assert.equal(getSeoPublicOrigin(), PRODUCTION_CANONICAL_ORIGIN);
      assert.equal(getSiteOrigin(), PRODUCTION_CANONICAL_ORIGIN);
    }
  );
});

test("getSeoPublicOrigin uses explicit production NEXT_PUBLIC_SITE_URL", () => {
  withEnv({ NEXT_PUBLIC_SITE_URL: "https://www.expatcopilot.com", VERCEL_ENV: "production" }, () => {
    assert.equal(getSeoPublicOrigin(), "https://www.expatcopilot.com");
  });
});

test("getSeoPublicOrigin defaults to production when env unset on Vercel production", () => {
  withEnv(
    {
      NEXT_PUBLIC_SITE_URL: undefined,
      VERCEL_ENV: "production",
      VERCEL_URL: "lifeos-expatlife-cmypvws13-leemeyeridricks-3740s-projects.vercel.app",
    },
    () => {
      assert.equal(getSeoPublicOrigin(), PRODUCTION_CANONICAL_ORIGIN);
    }
  );
});

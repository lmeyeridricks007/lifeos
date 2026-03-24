/**
 * Production-style publish scheduling (`publishDate` enforced).
 * Middleware sets a request header when simulating production. A cookie persists that on deployed hosts;
 * in `next dev` only `?preview=true` on the current request counts (see middleware + `shouldBypassPublishDateForPreview`).
 */
export const DEV_SIMULATE_LIVE_COOKIE = "expat_simulate_live";
export const DEV_SIMULATE_LIVE_HEADER = "x-expat-simulate-live";

/**
 * Production-style publish scheduling (`publishDate` enforced).
 * Set via `?preview=true` on any deployment (middleware sets cookie + request header).
 * Use `?preview=false` to clear the cookie.
 */
export const DEV_SIMULATE_LIVE_COOKIE = "expat_simulate_live";
export const DEV_SIMULATE_LIVE_HEADER = "x-expat-simulate-live";

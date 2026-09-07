#!/usr/bin/env python3
"""Run Lighthouse on representative template URLs (mobile + selected desktop)."""
from __future__ import annotations

import json
import subprocess
import time
from pathlib import Path

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT_DIR = Path("/Users/LMeyeridricks/Documents/coding/expatos/reports/seo-audit/_lh")
OUT_DIR.mkdir(exist_ok=True)

# template_family, url, run_desktop
PAGES = [
    ("nl_hub", "https://www.expatcopilot.com/netherlands", True),
    ("trust_about", "https://www.expatcopilot.com/about", False),
    ("cornerstone_moving", "https://www.expatcopilot.com/netherlands/moving-to-the-netherlands", True),
    ("ymyl_tax_guide", "https://www.expatcopilot.com/netherlands/taxes/30-percent-ruling", False),
    ("ymyl_visa_guide", "https://www.expatcopilot.com/netherlands/visa/highly-skilled-migrant", False),
    ("city_hub", "https://www.expatcopilot.com/amsterdam" if False else "https://www.expatcopilot.com/netherlands/amsterdam", True),
    ("tool_col_calculator", "https://www.expatcopilot.com/netherlands/money/tools/cost-of-living-calculator", True),
    ("tool_visa_checker", "https://www.expatcopilot.com/netherlands/visa-checker", False),
    ("services_hub", "https://www.expatcopilot.com/netherlands/services", False),
    ("origin_country", "https://www.expatcopilot.com/netherlands/moving/moving-to-netherlands-from/south-africa", False),
    ("comparison", "https://www.expatcopilot.com/netherlands/cities/amsterdam-vs-rotterdam", False),
    ("lifestyle_guide", "https://www.expatcopilot.com/netherlands/life/dating-in-the-netherlands", False),
    ("ymyl_health", "https://www.expatcopilot.com/netherlands/health/health-insurance-comparison-netherlands", False),
    ("banking_affiliate", "https://www.expatcopilot.com/netherlands/money/banking/best-banks-expats", False),
    ("official_figures", "https://www.expatcopilot.com/netherlands/official-figures", False),
    ("search_utility", "https://www.expatcopilot.com/search", False),
]


def run_lh(url: str, form_factor: str, out_path: Path) -> dict:
    cmd = [
        "npx", "--yes", "lighthouse@12.2.1", url,
        f"--chrome-path={CHROME}",
        "--only-categories=performance",
        f"--form-factor={form_factor}",
        "--screenEmulation.mobile" if form_factor == "mobile" else "--screenEmulation.desktop",
        "--output=json",
        f"--output-path={out_path}",
        "--quiet",
        "--chrome-flags=--headless --no-sandbox --disable-gpu",
    ]
    # Fix: lighthouse uses --form-factor and preset; simpler flags:
    cmd = [
        "npx", "--yes", "lighthouse@12.2.1", url,
        f"--chrome-path={CHROME}",
        "--only-categories=performance",
        f"--form-factor={form_factor}",
        "--output=json",
        f"--output-path={out_path}",
        "--quiet",
        "--chrome-flags=--headless=new --no-sandbox --disable-gpu",
    ]
    t0 = time.time()
    subprocess.run(cmd, check=False, capture_output=True, text=True, timeout=180)
    elapsed = time.time() - t0
    if not out_path.exists():
        return {"url": url, "form_factor": form_factor, "error": "no_output", "elapsed": elapsed}
    d = json.loads(out_path.read_text())
    aud = d.get("audits") or {}
    def g(key, field="numericValue"):
        a = aud.get(key) or {}
        return a.get(field), a.get("displayValue"), a.get("score")

    def third_party_ms():
        a = aud.get("third-party-summary") or {}
        items = (a.get("details") or {}).get("items") or []
        return sum(i.get("blockingTime", 0) or 0 for i in items), len(items)

    tp_ms, tp_n = third_party_ms()
    return {
        "url": url,
        "form_factor": form_factor,
        "perf_score": (d.get("categories") or {}).get("performance", {}).get("score"),
        "lcp_ms": g("largest-contentful-paint")[0],
        "lcp_display": g("largest-contentful-paint")[1],
        "cls": g("cumulative-layout-shift")[0],
        "cls_display": g("cumulative-layout-shift")[1],
        "tbt_ms": g("total-blocking-time")[0],
        "tbt_display": g("total-blocking-time")[1],
        "fcp_ms": g("first-contentful-paint")[0],
        "si_ms": g("speed-index")[0],
        "tti_ms": g("interactive")[0],
        "ttfb_ms": g("server-response-time")[0],
        "ttfb_display": g("server-response-time")[1],
        "total_bytes": g("total-byte-weight")[0],
        "total_bytes_display": g("total-byte-weight")[1],
        "bootup_ms": g("bootup-time")[0],
        "mainthread_ms": g("mainthread-work-breakdown")[0],
        "unused_js_bytes": g("unused-javascript")[0],
        "dom_size": g("dom-size")[0],
        "third_party_blocking_ms": tp_ms,
        "third_party_count": tp_n,
        "redirect_ms": g("redirects")[0],
        "elapsed_s": round(elapsed, 1),
    }


def main():
    results = []
    # reuse existing nl mobile if present
    existing = Path("/Users/LMeyeridricks/Documents/coding/expatos/reports/seo-audit/_lh-nl-mobile.json")
    for family, url, desktop in PAGES:
        for ff in (["mobile", "desktop"] if desktop else ["mobile"]):
            slug = family + "-" + ff
            out = OUT_DIR / f"{slug}.json"
            print(f"LH {ff} {family} ...", flush=True)
            if family == "nl_hub" and ff == "mobile" and existing.exists() and not out.exists():
                # copy parse from existing
                import shutil
                shutil.copy(existing, out)
            if out.exists() and out.stat().st_size > 1000:
                # parse existing
                d = json.loads(out.read_text())
                # rebuild via run_lh only if missing keys - just re-parse
                aud = d.get("audits") or {}
                def g(key, field="numericValue"):
                    a = aud.get(key) or {}
                    return a.get(field), a.get("displayValue"), a.get("score")
                a = aud.get("third-party-summary") or {}
                items = (a.get("details") or {}).get("items") or []
                tp_ms = sum(i.get("blockingTime", 0) or 0 for i in items)
                row = {
                    "template_family": family,
                    "url": url,
                    "form_factor": ff,
                    "perf_score": (d.get("categories") or {}).get("performance", {}).get("score"),
                    "lcp_ms": g("largest-contentful-paint")[0],
                    "lcp_display": g("largest-contentful-paint")[1],
                    "cls": g("cumulative-layout-shift")[0],
                    "tbt_ms": g("total-blocking-time")[0],
                    "fcp_ms": g("first-contentful-paint")[0],
                    "si_ms": g("speed-index")[0],
                    "tti_ms": g("interactive")[0],
                    "ttfb_ms": g("server-response-time")[0],
                    "total_bytes": g("total-byte-weight")[0],
                    "bootup_ms": g("bootup-time")[0],
                    "mainthread_ms": g("mainthread-work-breakdown")[0],
                    "unused_js_bytes": g("unused-javascript")[0],
                    "dom_size": g("dom-size")[0],
                    "third_party_blocking_ms": tp_ms,
                    "third_party_count": len(items),
                    "redirect_ms": g("redirects")[0],
                    "from_cache_file": True,
                }
                results.append(row)
                print(f"  cached score={row['perf_score']} LCP={row['lcp_display']}", flush=True)
                continue
            row = run_lh(url, ff, out)
            row["template_family"] = family
            results.append(row)
            print(f"  score={row.get('perf_score')} LCP={row.get('lcp_display')} TBT={row.get('tbt_display')}", flush=True)
    Path("/Users/LMeyeridricks/Documents/coding/expatos/reports/seo-audit/_lh-batch-summary.json").write_text(
        json.dumps(results, indent=2)
    )
    print("DONE", len(results))


if __name__ == "__main__":
    main()

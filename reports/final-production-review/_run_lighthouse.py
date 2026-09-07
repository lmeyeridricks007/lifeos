#!/usr/bin/env python3
"""Mobile Lighthouse sample for final production review."""
from __future__ import annotations

import csv
import json
import subprocess
import time
from pathlib import Path

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT = Path(__file__).resolve().parent
LH_DIR = OUT / "_lh"
LH_DIR.mkdir(exist_ok=True)

PAGES = [
    ("nl_hub", "https://www.expatcopilot.com/netherlands"),
    ("cities_hub", "https://www.expatcopilot.com/netherlands/cities"),
    ("dating", "https://www.expatcopilot.com/netherlands/life/dating-in-the-netherlands"),
    ("best_banks", "https://www.expatcopilot.com/netherlands/money/banking/best-banks-expats"),
    ("salary_calculator", "https://www.expatcopilot.com/netherlands/taxes/tools/dutch-salary-net-calculator"),
    ("city_comparison", "https://www.expatcopilot.com/netherlands/tools/city-comparison"),
    ("moving_checklist_za", "https://www.expatcopilot.com/netherlands/moving/tools/moving-checklist/from/south-africa"),
    ("culture_communication", "https://www.expatcopilot.com/netherlands/culture/communication-style"),
    ("health_hub", "https://www.expatcopilot.com/netherlands/health"),
    ("education_hub", "https://www.expatcopilot.com/netherlands/education"),
]

# Old production baseline (from production-validation)
OLD = {
    "nl_hub": {"lcp_ms": 3700, "tbt_ms": 1380, "perf": None},
}


def run_one(family: str, url: str) -> dict:
    out_path = LH_DIR / f"{family}-mobile.json"
    cmd = [
        "npx",
        "--yes",
        "lighthouse@12.2.1",
        url,
        f"--chrome-path={CHROME}",
        "--only-categories=performance",
        "--form-factor=mobile",
        "--output=json",
        f"--output-path={out_path}",
        "--quiet",
        "--chrome-flags=--headless=new --no-sandbox --disable-gpu",
    ]
    t0 = time.time()
    proc = subprocess.run(cmd, capture_output=True, text=True, timeout=240)
    elapsed = time.time() - t0
    if not out_path.exists():
        return {
            "family": family,
            "url": url,
            "error": f"no_output exit={proc.returncode} {proc.stderr[-300:]}",
            "elapsed_s": round(elapsed, 1),
        }
    d = json.loads(out_path.read_text())
    aud = d.get("audits") or {}

    def num(key):
        return (aud.get(key) or {}).get("numericValue")

    def disp(key):
        return (aud.get(key) or {}).get("displayValue")

    lcp_el = ""
    details = (aud.get("largest-contentful-paint-element") or {}).get("details") or {}
    items = details.get("items") or []
    if items:
        node = items[0].get("node") or {}
        lcp_el = (node.get("snippet") or node.get("selector") or "")[:200]

    # JS transfer from network-requests or script-treemap
    js_bytes = 0
    total = num("total-byte-weight") or 0
    net = ((aud.get("network-requests") or {}).get("details") or {}).get("items") or []
    for it in net:
        rt = (it.get("resourceType") or "").lower()
        if rt == "script":
            js_bytes += it.get("transferSize") or 0

    return {
        "family": family,
        "url": url,
        "form_factor": "mobile",
        "perf_score": round((((d.get("categories") or {}).get("performance") or {}).get("score") or 0) * 100),
        "lcp_ms": round(num("largest-contentful-paint") or 0),
        "lcp_display": disp("largest-contentful-paint"),
        "tbt_ms": round(num("total-blocking-time") or 0),
        "tbt_display": disp("total-blocking-time"),
        "cls": num("cumulative-layout-shift"),
        "cls_display": disp("cumulative-layout-shift"),
        "fcp_ms": round(num("first-contentful-paint") or 0),
        "si_ms": round(num("speed-index") or 0),
        "js_transfer_bytes": js_bytes,
        "total_transfer_bytes": round(total),
        "lcp_element": lcp_el,
        "elapsed_s": round(elapsed, 1),
        "old_lcp_ms": (OLD.get(family) or {}).get("lcp_ms", ""),
        "old_tbt_ms": (OLD.get(family) or {}).get("tbt_ms", ""),
        "error": "",
    }


def main():
    rows = []
    for i, (family, url) in enumerate(PAGES, 1):
        print(f"[{i}/{len(PAGES)}] {family} …", flush=True)
        try:
            rows.append(run_one(family, url))
        except Exception as e:
            rows.append({"family": family, "url": url, "error": str(e)})
        print("  ->", rows[-1].get("perf_score"), rows[-1].get("lcp_ms"), rows[-1].get("tbt_ms"), rows[-1].get("error", ""), flush=True)

    fields = [
        "family",
        "url",
        "form_factor",
        "perf_score",
        "lcp_ms",
        "lcp_display",
        "tbt_ms",
        "tbt_display",
        "cls",
        "cls_display",
        "fcp_ms",
        "si_ms",
        "js_transfer_bytes",
        "total_transfer_bytes",
        "lcp_element",
        "old_lcp_ms",
        "old_tbt_ms",
        "elapsed_s",
        "error",
    ]
    with (OUT / "performance-validation.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow(r)
    print("Wrote performance-validation.csv")


if __name__ == "__main__":
    main()

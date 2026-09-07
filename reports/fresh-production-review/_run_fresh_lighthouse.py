#!/usr/bin/env python3
"""Fresh mobile Lighthouse batch — no reused LH JSON."""
from __future__ import annotations

import csv
import json
import subprocess
import time
from pathlib import Path

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT = Path(__file__).resolve().parent
LH_DIR = OUT / "_lh_fresh"
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
]


def run_one(family: str, url: str) -> dict:
    out_path = LH_DIR / f"{family}-mobile.json"
    if out_path.exists():
        out_path.unlink()
    cmd = [
        "npx", "--yes", "lighthouse@12.2.1", url,
        f"--chrome-path={CHROME}",
        "--only-categories=performance",
        "--form-factor=mobile",
        "--output=json",
        f"--output-path={out_path}",
        "--quiet",
        "--chrome-flags=--headless=new --no-sandbox --disable-gpu",
    ]
    t0 = time.time()
    subprocess.run(cmd, capture_output=True, text=True, timeout=240)
    elapsed = time.time() - t0
    if not out_path.exists():
        return {"family": family, "url": url, "error": "no_output", "elapsed_s": round(elapsed, 1)}
    d = json.loads(out_path.read_text())
    aud = d.get("audits") or {}

    def num(key):
        return (aud.get(key) or {}).get("numericValue")

    def disp(key):
        return (aud.get(key) or {}).get("displayValue")

    js_bytes = 0
    for it in ((aud.get("network-requests") or {}).get("details") or {}).get("items") or []:
        if (it.get("resourceType") or "").lower() == "script":
            js_bytes += it.get("transferSize") or 0

    return {
        "family": family,
        "url": url,
        "form_factor": "mobile",
        "lab_only": "YES",
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
        "total_transfer_bytes": round(num("total-byte-weight") or 0),
        "elapsed_s": round(elapsed, 1),
        "error": "",
    }


def main():
    # Conditionally add hubs if launched (from hubs json if present)
    pages = list(PAGES)
    hubs_path = OUT / "_fresh-hubs-auth-params.json"
    if hubs_path.exists():
        hubs = json.loads(hubs_path.read_text()).get("hubs") or {}
        if (hubs.get("/netherlands/health") or {}).get("launched"):
            pages.append(("health_hub", "https://www.expatcopilot.com/netherlands/health"))
        if (hubs.get("/netherlands/education") or {}).get("launched"):
            pages.append(("education_hub", "https://www.expatcopilot.com/netherlands/education"))

    rows = []
    for i, (family, url) in enumerate(pages, 1):
        print(f"[{i}/{len(pages)}] {family} …", flush=True)
        try:
            row = run_one(family, url)
        except Exception as e:
            row = {"family": family, "url": url, "error": str(e), "lab_only": "YES"}
        rows.append(row)
        print("  ->", row.get("perf_score"), row.get("lcp_ms"), row.get("tbt_ms"), row.get("error"), flush=True)

    fields = [
        "family", "url", "form_factor", "lab_only", "perf_score", "lcp_ms", "lcp_display",
        "tbt_ms", "tbt_display", "cls", "cls_display", "fcp_ms", "si_ms",
        "js_transfer_bytes", "total_transfer_bytes", "elapsed_s", "error",
    ]
    with (OUT / "fresh-performance.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow(r)
    print("Wrote fresh-performance.csv")


if __name__ == "__main__":
    main()

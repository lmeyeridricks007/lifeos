#!/usr/bin/env python3
"""Probe unique outlink targets missing from sitemap cache for 3xx/4xx accuracy."""
from __future__ import annotations

import csv
import json
import re
import subprocess
import tempfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlparse

OUT = Path(__file__).resolve().parent
BASE = "https://www.expatcopilot.com"
UA = "ExpatCopilotFinalProductionReview/1.0"


def norm(p: str) -> str:
    path = urlparse(p).path if str(p).startswith("http") else str(p).split("?")[0]
    path = path or "/"
    if path != "/" and path.endswith("/"):
        path = path[:-1]
    return path


def is_page_path(p: str) -> bool:
    p = norm(p)
    if not p.startswith("/"):
        return False
    if p.startswith("/_next") or p.startswith("/api/") or p.startswith("/brand/") or p.startswith("/images/"):
        return False
    if p.endswith((".js", ".css", ".woff", ".woff2", ".svg", ".png", ".jpg", ".ico", ".webp", ".map")):
        return False
    if p in ("/manifest.webmanifest", "/favicon.ico"):
        return False
    return True


def first_hop(url: str) -> dict:
    hdr = tempfile.NamedTemporaryFile(delete=False)
    hdr.close()
    cmd = [
        "curl",
        "-sS",
        "-D",
        hdr.name,
        "-o",
        "/dev/null",
        "--max-time",
        "20",
        "-A",
        UA,
        "-w",
        "%{http_code}",
        "--max-redirs",
        "0",
        url,
    ]
    try:
        code = subprocess.check_output(cmd, stderr=subprocess.DEVNULL, text=True, timeout=25).strip()
        raw = open(hdr.name, "rb").read().decode("utf-8", "replace")
    except Exception as e:
        Path(hdr.name).unlink(missing_ok=True)
        return {"url": url, "first_status": 0, "location": "", "error": str(e)}
    Path(hdr.name).unlink(missing_ok=True)
    loc = ""
    m = re.search(r"^location:\s*(.+)$", raw, re.I | re.M)
    if m:
        loc = m.group(1).strip()
    return {"url": url, "first_status": int(code or 0), "location": loc}


def main():
    cache = json.loads((OUT / "_probe-cache.json").read_text())
    known = set(cache.keys())
    targets = set()
    edge_count = {}
    for src, e in cache.items():
        if e.get("final_status") != 200:
            continue
        for h in e.get("hrefs") or []:
            if not is_page_path(h):
                continue
            t = norm(h)
            if t == src:
                continue
            targets.add(t)
            edge_count[t] = edge_count.get(t, 0) + 1

    unknown = sorted(t for t in targets if t not in known)
    print(f"unique page targets={len(targets)} unknown={len(unknown)}")

    results = {}
    with ThreadPoolExecutor(max_workers=16) as ex:
        futs = {ex.submit(first_hop, BASE + t): t for t in unknown}
        n = 0
        for fut in as_completed(futs):
            t = futs[fut]
            results[t] = fut.result()
            n += 1
            if n % 40 == 0:
                print(f"  probed {n}/{len(unknown)}")

    # merge known statuses
    for t in targets:
        if t in known:
            e = cache[t]
            results[t] = {
                "url": BASE + t,
                "first_status": int(e.get("first_status") or 0),
                "location": "",
                "known": True,
            }
        else:
            results[t]["known"] = False

    edges_3xx = edges_4xx = edges_200 = 0
    uniq_3xx = set()
    uniq_4xx = set()
    for src, e in cache.items():
        if e.get("final_status") != 200:
            continue
        seen = set()
        for h in e.get("hrefs") or []:
            if not is_page_path(h):
                continue
            t = norm(h)
            if t == src or t in seen:
                continue
            seen.add(t)
            st = int((results.get(t) or {}).get("first_status") or 0)
            if 300 <= st < 400:
                edges_3xx += 1
                uniq_3xx.add(t)
            elif 400 <= st < 500:
                edges_4xx += 1
                uniq_4xx.add(t)
            elif st == 200:
                edges_200 += 1

    summary = {
        "unique_internal_page_targets": len(targets),
        "unknown_probed": len(unknown),
        "edges_to_3xx": edges_3xx,
        "unique_3xx_targets": len(uniq_3xx),
        "edges_to_4xx": edges_4xx,
        "unique_4xx_targets": len(uniq_4xx),
        "edges_to_200": edges_200,
        "top_3xx": sorted(((t, edge_count.get(t, 0)) for t in uniq_3xx), key=lambda x: -x[1])[:25],
        "top_4xx": sorted(((t, edge_count.get(t, 0)) for t in uniq_4xx), key=lambda x: -x[1])[:40],
    }
    (OUT / "_outlink-status-summary.json").write_text(json.dumps(summary, indent=2))
    with (OUT / "_outlink-unknown-status.csv").open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=["path", "first_status", "location", "edge_count", "known"])
        w.writeheader()
        for t in sorted(results, key=lambda x: -edge_count.get(x, 0)):
            r = results[t]
            w.writerow(
                {
                    "path": t,
                    "first_status": r.get("first_status"),
                    "location": r.get("location") or "",
                    "edge_count": edge_count.get(t, 0),
                    "known": r.get("known"),
                }
            )
    print(json.dumps({k: summary[k] for k in summary if k not in ("top_3xx", "top_4xx")}, indent=2))
    print("top 3xx", summary["top_3xx"][:10])
    print("top 4xx", summary["top_4xx"][:15])


if __name__ == "__main__":
    main()

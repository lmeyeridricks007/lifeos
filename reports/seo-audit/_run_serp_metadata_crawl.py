#!/usr/bin/env python3
"""Crawl indexable pages for SERP metadata (title, H1, description, OG, JSON-LD)."""
from __future__ import annotations

import json
import os
import re
import subprocess
import tempfile
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse

ORIGIN = "https://www.expatcopilot.com"
UA = "ExpatCopilotSEOAudit/3.0 (+serp-metadata)"
OUT = "_serp-metadata.jsonl"
WORKERS = 12
TIMEOUT = 25

paths = []
for m in re.finditer(r"<loc>([^<]+)</loc>", open("_prod-sitemap.xml").read()):
    path = urlparse(m.group(1)).path or "/"
    if path != "/" and path.endswith("/"):
        path = path.rstrip("/")
    paths.append(path)
paths = sorted(set(paths + ["/"]))


def first(patterns, html, flags=re.I | re.S):
    for pat in patterns:
        m = re.search(pat, html, flags)
        if m:
            return re.sub(r"\s+", " ", m.group(1)).strip()
    return ""


def probe(path: str) -> dict:
    url = ORIGIN + path
    hdr = tempfile.NamedTemporaryFile(delete=False)
    hdr.close()
    bodyf = tempfile.NamedTemporaryFile(delete=False)
    bodyf.close()
    cmd = [
        "curl", "-sS", "-L", "--max-redirs", "5",
        "-D", hdr.name, "-o", bodyf.name,
        "--max-time", str(TIMEOUT), "-A", UA, "--compressed", url,
    ]
    try:
        subprocess.check_output(cmd, stderr=subprocess.DEVNULL, timeout=TIMEOUT + 10)
    except Exception as e:
        try:
            os.unlink(hdr.name)
            os.unlink(bodyf.name)
        except OSError:
            pass
        return {"path": path, "url": url, "error": str(e)}

    try:
        body = open(bodyf.name, "rb").read().decode("utf-8", "replace")
        raw_hdr = open(hdr.name, "rb").read().decode("utf-8", "replace")
    finally:
        os.unlink(hdr.name)
        os.unlink(bodyf.name)

    statuses = re.findall(r"HTTP/\S+\s+(\d+)", raw_hdr)
    final_status = int(statuses[-1]) if statuses else 0

    title = first([r"<title>([^<]*)</title>"], body)
    h1 = first([
        r"<h1[^>]*>(.*?)</h1>",
    ], body)
    h1 = re.sub(r"<[^>]+>", " ", h1)
    h1 = re.sub(r"\s+", " ", h1).strip()

    meta_desc = first([
        r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']*)["\']',
        r'<meta[^>]+content=["\']([^"\']*)["\'][^>]+name=["\']description["\']',
    ], body)

    og_title = first([
        r'<meta[^>]+property=["\']og:title["\'][^>]+content=["\']([^"\']*)["\']',
        r'<meta[^>]+content=["\']([^"\']*)["\'][^>]+property=["\']og:title["\']',
    ], body)
    og_desc = first([
        r'<meta[^>]+property=["\']og:description["\'][^>]+content=["\']([^"\']*)["\']',
        r'<meta[^>]+content=["\']([^"\']*)["\'][^>]+property=["\']og:description["\']',
    ], body)

    # slug from path
    parts = [p for p in path.strip("/").split("/") if p]
    slug = parts[-1] if parts else ""

    # breadcrumb last label from JSON-LD
    crumb_labels = []
    sd_names = []
    sd_headlines = []
    dates_published = []
    dates_modified = []

    for m in re.finditer(
        r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
        body,
        re.I | re.S,
    ):
        raw = m.group(1).strip()
        try:
            data = json.loads(raw)
        except Exception:
            continue
        stack = [data]
        while stack:
            o = stack.pop()
            if isinstance(o, dict):
                t = o.get("@type")
                types = t if isinstance(t, list) else ([t] if t else [])
                if "BreadcrumbList" in types:
                    for el in o.get("itemListElement") or []:
                        if isinstance(el, dict) and el.get("name"):
                            crumb_labels.append(str(el["name"]).strip())
                for key in ("name", "headline"):
                    if key in o and isinstance(o[key], str):
                        if key == "name":
                            sd_names.append(o[key].strip())
                        else:
                            sd_headlines.append(o[key].strip())
                for key in ("datePublished", "dateCreated"):
                    if o.get(key):
                        dates_published.append(str(o[key]))
                for key in ("dateModified", "dateUpdated"):
                    if o.get(key):
                        dates_modified.append(str(o[key]))
                stack.extend(o.values())
            elif isinstance(o, list):
                stack.extend(o)

    # also look for visible time/datetime
    visible_times = re.findall(r'<time[^>]+datetime=["\']([^"\']+)["\']', body, re.I)

    return {
        "path": path,
        "url": url,
        "final_status": final_status,
        "title": title,
        "h1": h1,
        "meta_description": meta_desc,
        "slug": slug,
        "breadcrumb_label": crumb_labels[-1] if crumb_labels else "",
        "breadcrumb_path": " > ".join(crumb_labels)[:240],
        "og_title": og_title,
        "og_description": og_desc,
        "sd_name": sd_names[0] if sd_names else "",
        "sd_headline": sd_headlines[0] if sd_headlines else "",
        "sd_names_sample": sd_names[:5],
        "date_published": dates_published[0] if dates_published else "",
        "date_modified": dates_modified[0] if dates_modified else (visible_times[0] if visible_times else ""),
        "visible_time_datetimes": visible_times[:5],
    }


def main():
    done = set()
    if os.path.exists(OUT):
        for line in open(OUT):
            try:
                done.add(json.loads(line)["path"])
            except Exception:
                pass
    todo = [p for p in paths if p not in done]
    print(f"seeds={len(paths)} done={len(done)} todo={len(todo)}", flush=True)
    t0 = time.time()
    with open(OUT, "a") as out:
        with ThreadPoolExecutor(max_workers=WORKERS) as ex:
            futs = {ex.submit(probe, p): p for p in todo}
            n = 0
            for fut in as_completed(futs):
                p = futs[fut]
                try:
                    res = fut.result()
                except Exception as e:
                    res = {"path": p, "url": ORIGIN + p, "error": str(e)}
                out.write(json.dumps(res, ensure_ascii=False) + "\n")
                out.flush()
                n += 1
                if n % 50 == 0 or n == len(todo):
                    print(f"  {n}/{len(todo)} elapsed={time.time()-t0:.0f}s", flush=True)
    print("COMPLETE", flush=True)


if __name__ == "__main__":
    main()

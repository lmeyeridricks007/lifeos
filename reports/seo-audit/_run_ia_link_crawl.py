#!/usr/bin/env python3
"""Supplemental crawl: extract (href, anchor_text) from indexable HTML pages."""
from __future__ import annotations

import csv
import json
import os
import re
import subprocess
import tempfile
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urljoin, urlparse

ORIGIN = "https://www.expatcopilot.com"
UA = "ExpatCopilotSEOAudit/2.1 (+ia-link-graph)"
OUT = "_ia-page-links.jsonl"
WORKERS = 12
TIMEOUT = 25

# Prefer non-slash URLs (production 200) for all sitemap paths
sitemap_paths = []
for m in re.finditer(r"<loc>([^<]+)</loc>", open("_prod-sitemap.xml").read()):
    path = urlparse(m.group(1)).path or "/"
    if path != "/" and path.endswith("/"):
        path = path.rstrip("/")
    sitemap_paths.append(path)

# Also home and NL hub
seeds = sorted(set(["/", "/netherlands"] + sitemap_paths))


def probe(path: str) -> dict:
    url = ORIGIN + path
    hdr = tempfile.NamedTemporaryFile(delete=False)
    hdr.close()
    bodyf = tempfile.NamedTemporaryFile(delete=False)
    bodyf.close()
    # follow redirects to final HTML
    cmd = [
        "curl", "-sS", "-L", "--max-redirs", "5",
        "-D", hdr.name, "-o", bodyf.name,
        "--max-time", str(TIMEOUT), "-A", UA, "--compressed", url,
    ]
    try:
        subprocess.check_output(cmd, stderr=subprocess.DEVNULL, timeout=TIMEOUT + 10)
    except Exception as e:
        try:
            os.unlink(hdr.name); os.unlink(bodyf.name)
        except OSError:
            pass
        return {"url": url, "path": path, "error": str(e), "links": []}
    try:
        body = open(bodyf.name, "rb").read().decode("utf-8", "replace")
        raw_hdr = open(hdr.name, "rb").read().decode("utf-8", "replace")
    finally:
        os.unlink(hdr.name); os.unlink(bodyf.name)

    statuses = re.findall(r"HTTP/\S+\s+(\d+)", raw_hdr)
    final_status = int(statuses[-1]) if statuses else 0
    # extract anchors with text
    links = []
    # crude but effective: <a ... href=...>text</a> including nested tags stripped
    for m in re.finditer(r"<a\b([^>]*)>(.*?)</a>", body, re.I | re.S):
        attrs, inner = m.group(1), m.group(2)
        hm = re.search(r'href=["\']([^"\']+)["\']', attrs, re.I)
        if not hm:
            continue
        href = hm.group(1).strip()
        if href.startswith(("#", "mailto:", "tel:", "javascript:")):
            continue
        absu = urljoin(url, href)
        pu = urlparse(absu)
        if not (pu.netloc.endswith("expatcopilot.com") or pu.netloc == ""):
            continue
        text = re.sub(r"<[^>]+>", " ", inner)
        text = re.sub(r"\s+", " ", text).strip()[:120]
        path_q = pu.path or "/"
        if pu.query:
            path_q += "?" + pu.query
        links.append({"href": path_q, "anchor": text})

    # breadcrumb from JSON-LD
    crumbs = []
    for m in re.finditer(
        r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
        body, re.I | re.S,
    ):
        try:
            data = json.loads(m.group(1).strip())
        except Exception:
            continue
        stack = [data]
        while stack:
            o = stack.pop()
            if isinstance(o, dict):
                if o.get("@type") == "BreadcrumbList" or (
                    isinstance(o.get("@type"), list) and "BreadcrumbList" in o["@type"]
                ):
                    for el in o.get("itemListElement") or []:
                        if isinstance(el, dict):
                            name = el.get("name")
                            it = el.get("item")
                            u = it if isinstance(it, str) else (it or {}).get("@id") or (it or {}).get("url")
                            crumbs.append({"name": name, "url": u})
                stack.extend(o.values())
            elif isinstance(o, list):
                stack.extend(o)

    return {
        "url": url,
        "path": path,
        "final_status": final_status,
        "link_count": len(links),
        "links": links[:400],
        "breadcrumbs": crumbs[:20],
    }


def main():
    done = set()
    if os.path.exists(OUT):
        for line in open(OUT):
            try:
                done.add(json.loads(line)["path"])
            except Exception:
                pass
    todo = [p for p in seeds if p not in done]
    print(f"seeds={len(seeds)} done={len(done)} todo={len(todo)}", flush=True)
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
                    res = {"path": p, "url": ORIGIN + p, "error": str(e), "links": []}
                out.write(json.dumps(res, ensure_ascii=False) + "\n")
                out.flush()
                n += 1
                if n % 50 == 0 or n == len(todo):
                    print(f"  {n}/{len(todo)} elapsed={time.time()-t0:.0f}s", flush=True)
    print("COMPLETE", flush=True)


if __name__ == "__main__":
    main()

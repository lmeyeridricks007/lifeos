#!/usr/bin/env python3
"""Technical SEO production probe — audit only. Writes JSONL results."""
from __future__ import annotations

import json
import os
import re
import subprocess
import tempfile
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urljoin, urlparse

UA = "ExpatCopilotSEOAudit/2.0 (+technical-seo-audit)"
OUT = "_tech-probe-results.jsonl"
MAX_HOPS = 8
TIMEOUT = 25
WORKERS = 12

seeds = json.load(open("_tech-audit-seeds.json"))
filtered = []
seen = set()
for s in seeds:
    if s["context"] == "redirect_inventory_slash":
        continue
    if s["url"] in seen:
        continue
    seen.add(s["url"])
    filtered.append(s)


def curl_probe(url: str) -> dict:
    chain = []
    current = url
    final_body = ""
    final_status = 0
    xrobots = ""

    for _hop in range(MAX_HOPS):
        hdr_file = tempfile.NamedTemporaryFile(delete=False)
        hdr_file.close()
        body_file = tempfile.NamedTemporaryFile(delete=False)
        body_file.close()
        cmd = [
            "curl",
            "-sS",
            "-D",
            hdr_file.name,
            "-o",
            body_file.name,
            "--max-time",
            str(TIMEOUT),
            "-A",
            UA,
            "--max-redirs",
            "0",
            "-w",
            "%{http_code}",
            "--compressed",
            current,
        ]
        try:
            code_s = subprocess.check_output(
                cmd, stderr=subprocess.DEVNULL, text=True, timeout=TIMEOUT + 5
            )
        except Exception as e:
            try:
                os.unlink(hdr_file.name)
                os.unlink(body_file.name)
            except OSError:
                pass
            return {"request_url": url, "error": str(e), "redirect_chain": chain}

        try:
            raw_hdr = open(hdr_file.name, "rb").read().decode("utf-8", "replace")
            body = open(body_file.name, "rb").read()
        finally:
            os.unlink(hdr_file.name)
            os.unlink(body_file.name)

        statuses = re.findall(r"HTTP/\S+\s+(\d+)", raw_hdr)
        status = int(statuses[-1]) if statuses else int(code_s or 0)
        loc_m = re.search(r"^location:\s*(.+)$", raw_hdr, re.I | re.M)
        location = loc_m.group(1).strip() if loc_m else ""
        xr = re.search(r"^x-robots-tag:\s*(.+)$", raw_hdr, re.I | re.M)
        if xr:
            xrobots = xr.group(1).strip()

        chain.append({"url": current, "status": status, "location": location})
        final_status = status

        if status in (301, 302, 303, 307, 308) and location:
            current = urljoin(current, location)
            continue

        if body and len(body) < 2_000_000:
            ctype_m = re.search(r"^content-type:\s*(.+)$", raw_hdr, re.I | re.M)
            ctype = ctype_m.group(1).lower() if ctype_m else ""
            if "html" in ctype or body[:80].lstrip().startswith(b"<"):
                final_body = body.decode("utf-8", "replace")
        break

    canonical = robots_meta = og_url = title = ""
    jsonld_urls: list[str] = []
    breadcrumb_urls: list[str] = []
    internal_hrefs: list[str] = []

    if final_body:
        cm = re.search(
            r'rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']', final_body, re.I
        ) or re.search(
            r'href=["\']([^"\']+)["\'][^>]*rel=["\']canonical["\']', final_body, re.I
        )
        if cm:
            canonical = cm.group(1).strip()
        rm = re.search(
            r'name=["\']robots["\'][^>]*content=["\']([^"\']+)["\']', final_body, re.I
        ) or re.search(
            r'content=["\']([^"\']+)["\'][^>]*name=["\']robots["\']', final_body, re.I
        )
        if rm:
            robots_meta = rm.group(1).strip()
        og = re.search(
            r'property=["\']og:url["\'][^>]*content=["\']([^"\']+)["\']', final_body, re.I
        ) or re.search(
            r'content=["\']([^"\']+)["\'][^>]*property=["\']og:url["\']', final_body, re.I
        )
        if og:
            og_url = og.group(1).strip()
        tm = re.search(r"<title>([^<]*)</title>", final_body, re.I)
        if tm:
            title = re.sub(r"\s+", " ", tm.group(1)).strip()[:160]

        for m in re.finditer(
            r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
            final_body,
            re.I | re.S,
        ):
            raw = m.group(1).strip()
            try:
                data = json.loads(raw)
            except Exception:
                continue

            def walk(o):
                if isinstance(o, dict):
                    t = o.get("@type")
                    if t == "BreadcrumbList" or (
                        isinstance(t, list) and "BreadcrumbList" in t
                    ):
                        for el in o.get("itemListElement") or []:
                            if not isinstance(el, dict):
                                continue
                            it = el.get("item")
                            if isinstance(it, str):
                                breadcrumb_urls.append(it)
                            elif isinstance(it, dict):
                                if it.get("@id"):
                                    breadcrumb_urls.append(it["@id"])
                                if it.get("url"):
                                    breadcrumb_urls.append(it["url"])
                    for k, v in o.items():
                        if k in ("@id", "url") and isinstance(v, str) and v.startswith("http"):
                            jsonld_urls.append(v)
                        else:
                            walk(v)
                elif isinstance(o, list):
                    for i in o:
                        walk(i)

            walk(data)

        base = chain[-1]["url"] if chain else url
        for m in re.finditer(r'<a[^>]+href=["\']([^"\']+)["\']', final_body, re.I):
            href = m.group(1).strip()
            if href.startswith(("#", "mailto:", "tel:", "javascript:")):
                continue
            absu = urljoin(base, href)
            pu = urlparse(absu)
            host = pu.netloc.lower()
            if host.endswith("expatcopilot.com") or host == "":
                path = pu.path or "/"
                if pu.query:
                    path = path + "?" + pu.query
                internal_hrefs.append(path)

    redirect_hops = sum(1 for c in chain if c["status"] in (301, 302, 303, 307, 308))
    return {
        "request_url": url,
        "first_status": chain[0]["status"] if chain else 0,
        "final_status": final and final_status,
        "final_url": chain[-1]["url"] if chain else url,
        "redirect_chain": chain,
        "redirect_hops": redirect_hops,
        "canonical": canonical,
        "robots_meta": robots_meta,
        "x_robots_tag": xrobots,
        "og_url": og_url,
        "title": title,
        "jsonld_urls": list(dict.fromkeys(jsonld_urls))[:40],
        "breadcrumb_urls": list(dict.fromkeys(breadcrumb_urls))[:25],
        "internal_hrefs": list(dict.fromkeys(internal_hrefs))[:250],
        "internal_href_count": len(set(internal_hrefs)),
    }


# fix typo-safe final_status assignment in return — rebuild without `final and`
def curl_probe_fixed(url: str) -> dict:
    r = curl_probe.__wrapped__(url) if hasattr(curl_probe, "__wrapped__") else None
    return r


# Redefine cleanly without the bug
def probe(url: str) -> dict:
    chain = []
    current = url
    final_body = ""
    final_status = 0
    xrobots = ""

    for _hop in range(MAX_HOPS):
        hdr_file = tempfile.NamedTemporaryFile(delete=False)
        hdr_file.close()
        body_file = tempfile.NamedTemporaryFile(delete=False)
        body_file.close()
        cmd = [
            "curl",
            "-sS",
            "-D",
            hdr_file.name,
            "-o",
            body_file.name,
            "--max-time",
            str(TIMEOUT),
            "-A",
            UA,
            "--max-redirs",
            "0",
            "-w",
            "%{http_code}",
            "--compressed",
            current,
        ]
        try:
            code_s = subprocess.check_output(
                cmd, stderr=subprocess.DEVNULL, text=True, timeout=TIMEOUT + 5
            )
        except Exception as e:
            try:
                os.unlink(hdr_file.name)
                os.unlink(body_file.name)
            except OSError:
                pass
            return {"request_url": url, "error": str(e), "redirect_chain": chain}

        try:
            raw_hdr = open(hdr_file.name, "rb").read().decode("utf-8", "replace")
            body = open(body_file.name, "rb").read()
        finally:
            os.unlink(hdr_file.name)
            os.unlink(body_file.name)

        statuses = re.findall(r"HTTP/\S+\s+(\d+)", raw_hdr)
        status = int(statuses[-1]) if statuses else int(code_s or 0)
        loc_m = re.search(r"^location:\s*(.+)$", raw_hdr, re.I | re.M)
        location = loc_m.group(1).strip() if loc_m else ""
        xr = re.search(r"^x-robots-tag:\s*(.+)$", raw_hdr, re.I | re.M)
        if xr:
            xrobots = xr.group(1).strip()

        chain.append({"url": current, "status": status, "location": location})
        final_status = status

        if status in (301, 302, 303, 307, 308) and location:
            current = urljoin(current, location)
            continue

        if body and len(body) < 2_000_000:
            ctype_m = re.search(r"^content-type:\s*(.+)$", raw_hdr, re.I | re.M)
            ctype = ctype_m.group(1).lower() if ctype_m else ""
            if "html" in ctype or body[:80].lstrip().startswith(b"<"):
                final_body = body.decode("utf-8", "replace")
        break

    canonical = robots_meta = og_url = title = ""
    jsonld_urls: list[str] = []
    breadcrumb_urls: list[str] = []
    internal_hrefs: list[str] = []

    if final_body:
        cm = re.search(
            r'rel=["\']canonical["\'][^>]*href=["\']([^"\']+)["\']', final_body, re.I
        ) or re.search(
            r'href=["\']([^"\']+)["\'][^>]*rel=["\']canonical["\']', final_body, re.I
        )
        if cm:
            canonical = cm.group(1).strip()
        rm = re.search(
            r'name=["\']robots["\'][^>]*content=["\']([^"\']+)["\']', final_body, re.I
        ) or re.search(
            r'content=["\']([^"\']+)["\'][^>]*name=["\']robots["\']', final_body, re.I
        )
        if rm:
            robots_meta = rm.group(1).strip()
        og = re.search(
            r'property=["\']og:url["\'][^>]*content=["\']([^"\']+)["\']', final_body, re.I
        ) or re.search(
            r'content=["\']([^"\']+)["\'][^>]*property=["\']og:url["\']', final_body, re.I
        )
        if og:
            og_url = og.group(1).strip()
        tm = re.search(r"<title>([^<]*)</title>", final_body, re.I)
        if tm:
            title = re.sub(r"\s+", " ", tm.group(1)).strip()[:160]

        for m in re.finditer(
            r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
            final_body,
            re.I | re.S,
        ):
            raw = m.group(1).strip()
            try:
                data = json.loads(raw)
            except Exception:
                continue

            def walk(o):
                if isinstance(o, dict):
                    t = o.get("@type")
                    if t == "BreadcrumbList" or (
                        isinstance(t, list) and "BreadcrumbList" in t
                    ):
                        for el in o.get("itemListElement") or []:
                            if not isinstance(el, dict):
                                continue
                            it = el.get("item")
                            if isinstance(it, str):
                                breadcrumb_urls.append(it)
                            elif isinstance(it, dict):
                                if it.get("@id"):
                                    breadcrumb_urls.append(it["@id"])
                                if it.get("url"):
                                    breadcrumb_urls.append(it["url"])
                    for k, v in o.items():
                        if k in ("@id", "url") and isinstance(v, str) and v.startswith("http"):
                            jsonld_urls.append(v)
                        else:
                            walk(v)
                elif isinstance(o, list):
                    for i in o:
                        walk(i)

            walk(data)

        base = chain[-1]["url"] if chain else url
        for m in re.finditer(r'<a[^>]+href=["\']([^"\']+)["\']', final_body, re.I):
            href = m.group(1).strip()
            if href.startswith(("#", "mailto:", "tel:", "javascript:")):
                continue
            absu = urljoin(base, href)
            pu = urlparse(absu)
            host = pu.netloc.lower()
            if host.endswith("expatcopilot.com") or host == "":
                path = pu.path or "/"
                if pu.query:
                    path = path + "?" + pu.query
                internal_hrefs.append(path)

    redirect_hops = sum(1 for c in chain if c["status"] in (301, 302, 303, 307, 308))
    return {
        "request_url": url,
        "first_status": chain[0]["status"] if chain else 0,
        "final_status": final_status,
        "final_url": chain[-1]["url"] if chain else url,
        "redirect_chain": chain,
        "redirect_hops": redirect_hops,
        "canonical": canonical,
        "robots_meta": robots_meta,
        "x_robots_tag": xrobots,
        "og_url": og_url,
        "title": title,
        "jsonld_urls": list(dict.fromkeys(jsonld_urls))[:40],
        "breadcrumb_urls": list(dict.fromkeys(breadcrumb_urls))[:25],
        "internal_hrefs": list(dict.fromkeys(internal_hrefs))[:250],
        "internal_href_count": len(set(internal_hrefs)),
    }


def main():
    done = set()
    if os.path.exists(OUT):
        for line in open(OUT):
            try:
                done.add(json.loads(line)["request_url"])
            except Exception:
                pass
    todo = [s for s in filtered if s["url"] not in done]
    print(f"seeds={len(filtered)} done={len(done)} todo={len(todo)}", flush=True)
    t0 = time.time()
    with open(OUT, "a") as out:
        with ThreadPoolExecutor(max_workers=WORKERS) as ex:
            futs = {ex.submit(probe, s["url"]): s for s in todo}
            n = 0
            for fut in as_completed(futs):
                s = futs[fut]
                try:
                    res = fut.result()
                except Exception as e:
                    res = {"request_url": s["url"], "error": str(e)}
                res["seed_context"] = s["context"]
                out.write(json.dumps(res, ensure_ascii=False) + "\n")
                out.flush()
                n += 1
                if n % 50 == 0 or n == len(todo):
                    print(f"  {n}/{len(todo)} elapsed={time.time()-t0:.0f}s", flush=True)
    print(f"COMPLETE lines={sum(1 for _ in open(OUT))} elapsed={time.time()-t0:.0f}s", flush=True)


if __name__ == "__main__":
    main()

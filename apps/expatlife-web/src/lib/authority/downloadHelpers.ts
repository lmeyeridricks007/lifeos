/**
 * Serialize authority datasets we may redistribute (editorial seeds / curated citation tables).
 * Official statute amounts remain attributed to IND / Belastingdienst / Government.nl.
 */

export function toCsv(headers: string[], rows: Array<Array<string | number | boolean | null | undefined>>): string {
  const esc = (v: string | number | boolean | null | undefined) => {
    const s = v == null ? "" : String(v);
    if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };
  return [headers.map(esc).join(","), ...rows.map((r) => r.map(esc).join(","))].join("\n") + "\n";
}

export function jsonDownloadResponse(body: unknown, filename: string): Response {
  return new Response(JSON.stringify(body, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

export function csvDownloadResponse(csv: string, filename: string): Response {
  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

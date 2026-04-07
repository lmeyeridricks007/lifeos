/** Safe filename for UI only — does not validate on disk (in-memory only). */
export function sanitizeUploadedFileName(name: string): string {
  const trimmed = name.trim().replace(/^.*[/\\]/, "");
  const base = trimmed || "payslip.pdf";
  return base.replace(/[^\w.\- ()[\]]+/gu, "_").slice(0, 120);
}

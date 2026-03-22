/**
 * Build initial document readiness values from searchParams (record form).
 * Used by the server to pass identical initial state to the client when URL has tool params.
 */

export type DocumentReadinessInitialValues = Partial<{
  scenario: "work" | "partner" | "family" | "unsure";
  hasPassport: "yes" | "no";
  hasCivilCertificates: "yes" | "no" | "na";
  hasProofOfAddress: "yes" | "no" | "soon";
  hasEmploymentDocs: "yes" | "no" | "na";
  from: string;
  notes: string;
}>;

function getSingle(searchParams: Record<string, string | string[] | undefined>, key: string): string | undefined {
  const v = searchParams[key];
  if (v == null) return undefined;
  return Array.isArray(v) ? v[0] : v;
}

export function getDocumentReadinessInitialFromSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): DocumentReadinessInitialValues {
  const out: DocumentReadinessInitialValues = {};
  const scenario = getSingle(searchParams, "scenario");
  const hasPassport = getSingle(searchParams, "hasPassport");
  const hasCivilCertificates = getSingle(searchParams, "hasCivilCertificates");
  const hasProofOfAddress = getSingle(searchParams, "hasProofOfAddress");
  const hasEmploymentDocs = getSingle(searchParams, "hasEmploymentDocs");
  const from = getSingle(searchParams, "from");
  const notes = getSingle(searchParams, "notes");

  if (scenario === "work" || scenario === "partner" || scenario === "family" || scenario === "unsure")
    out.scenario = scenario;
  if (hasPassport === "yes" || hasPassport === "no") out.hasPassport = hasPassport;
  if (hasCivilCertificates === "yes" || hasCivilCertificates === "no" || hasCivilCertificates === "na")
    out.hasCivilCertificates = hasCivilCertificates;
  if (hasProofOfAddress === "yes" || hasProofOfAddress === "no" || hasProofOfAddress === "soon")
    out.hasProofOfAddress = hasProofOfAddress;
  if (hasEmploymentDocs === "yes" || hasEmploymentDocs === "no" || hasEmploymentDocs === "na")
    out.hasEmploymentDocs = hasEmploymentDocs;
  if (from) out.from = from;
  if (notes !== undefined) out.notes = notes;

  return out;
}

export function hasDocumentReadinessParams(
  searchParams: Record<string, string | string[] | undefined>
): boolean {
  const keys = ["scenario", "hasPassport", "hasCivilCertificates", "hasProofOfAddress", "hasEmploymentDocs", "from"];
  return keys.some((key) => {
    const v = getSingle(searchParams, key);
    return v != null && v !== "";
  });
}

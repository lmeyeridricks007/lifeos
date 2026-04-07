/**
 * Legacy alias: extraction is implemented in `decode` (single pipeline).
 * POST behaves the same as `/api/tools/payslip/decode`.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export { POST } from "../decode/route";

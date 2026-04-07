# Dutch Payslip Decoder

## Purpose

The [Dutch Payslip Decoder](https://www.expatcopilot.com/netherlands/work/tools/payslip-decoder/) helps expats **orient** on common Dutch payroll wording (bruto/netto, loonheffing, vakantiegeld, pension lines, etc.) from **pasted text** or a **text-based PDF**. It is a **planning and literacy** tool, not payroll software and not tax or legal advice.

## Free-tier boundaries

- **In scope:** Plain-text extraction from many digitally generated PDFs; heuristic parsing of frequent Dutch (and some English) labels; glossary highlights; explicit ambiguity when multiple net lines compete.
- **Out of scope:** Account login, saved payslips, employer integrations, Belastingdienst access, guaranteed accuracy of every line, and **OCR** for scanned or image-only PDFs.

## No-storage policy

For the current product version:

- Uploads and pasted text are processed **server-side for the HTTP request only** to extract text and return a JSON response.
- We **do not** persist payslip files or extracted text in an application database for this feature.
- Server logging must **not** include full payslip body content (privacy requirement).
- Users should still treat browsers and shared devices as local risk (history, downloads, screen capture).

## Extraction approach

1. **PDF:** Node runtime uses `pdf-parse` on the uploaded buffer (text layers only).
2. **Text normalisation:** Whitespace and length limits are applied before heuristics.
3. **Quality assessment:** Keyword density, line count, and printable ratio feed a `good` / `partial` / `poor` label with user-facing warnings (e.g. likely scanned PDF).
4. **Decoding:** Layered rule-based parser (exact phrases → fuzzy → amount-near-label → split-line hints). European number formats are normalised. **Multiple plausible net amounts** are **not** auto-picked; candidates are listed.

## Limitations

- Layouts differ by payroll vendor; labels can be employer-specific.
- English exports from Dutch employers vary; coverage is best-effort.
- **Scanned PDFs** will usually yield poor extraction — users should paste text when the viewer allows copying.
- Encrypted, corrupted, or unusual PDFs may fail extraction entirely.

## Future paid OCR path (conceptual)

A future tier could add **on-demand OCR** (or a vetted third-party document API) with **explicit consent**, **retention limits**, **DPA**, and **regional processing** choices. That is **not** part of the free tool today; the public roadmap should be updated if OCR ships.

**Internal implementation blueprint (repo only, not marketing):** [`payslip-decoder-future-ocr.md`](./payslip-decoder-future-ocr.md)

## Related code (monorepo)

- Web app: `apps/expatlife-web/app/netherlands/work/tools/payslip-decoder/page.tsx`
- Client UI: `apps/expatlife-web/src/components/tools/payslip-decoder/PayslipDecoderClient.tsx`
- API: `apps/expatlife-web/app/api/tools/payslip/decode/route.ts`
- Entitlements (per-session, anonymous defaults today): `apps/expatlife-web/lib/entitlements/payslip-entitlements.ts`
- Parser: `apps/expatlife-web/src/lib/tools/payslip/parse/engine.ts`

## Analytics (front-end)

Consent-gated events (GA + PostHog when configured) include: `payslip_decoder_opened`, `payslip_decoder_paste_submitted`, `payslip_decoder_pdf_uploaded`, `payslip_decoder_extraction_*`, `payslip_decoder_result_viewed`. No payslip content is attached to events.

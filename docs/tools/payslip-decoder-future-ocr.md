# Payslip Decoder — future paid OCR (internal blueprint)

**Audience:** engineers extending the Payslip Decoder.  
**Not for:** marketing, public help center, or end-user copy.  
**Companion:** operational product notes in `payslip-decoder.md`; this file is the **implementation** roadmap.

---

## Architecture overview (current → future)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  HTTP: POST /api/tools/payslip/decode (Node runtime, in-memory only)     │
└─────────────────────────────────────────────────────────────────────────┘
         │
         ├─► JSON { text } ──► documentSource: pasted_text, extractionMethod: none
         │
         └─► multipart PDF ──► Buffer ──► pdf-parse (text layer only)
                                    │
                                    │  [FUTURE: entitlement check here or in helper]
                                    │  [FUTURE: if text poor + user entitled + OCR on ──► OcrProvider]
                                    ▼
                         buildPayslipDecodeResponse / processPayslipDocument
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         ▼                          ▼                          ▼
   normalizeExtractedText    assessExtractionQuality    (future: OCR confidence)
         │                          │
         ▼                          ▼
   parsePayslipFromNormalized   likely-scanned heuristic
         │                          │
         ▼                          ▼
   buildBasicPayslipInsights   buildPremiumPayslipInsights (stub / paid)
         │                          │
         └──────────► toPayslipDecodeResponse (capabilities, hints, UI states)
```

**Layers (stable contracts):**

| Layer | Responsibility | Key modules |
|-------|----------------|-------------|
| Ingestion | Multipart / JSON, size limits, MIME | `app/api/tools/payslip/decode/route.ts` |
| PDF text extraction | Digitally generated PDFs, buffer-only | `pdf-extract.ts` (`extractTextFromPdf`) |
| **Future OCR** | Scanned PDF / images → text | `ocr/OcrProvider.ts` implementations |
| Normalization | Whitespace, dedupe, PDF artifacts | `pipeline/normalize.ts` |
| Quality | `good` / `partial` / `poor`, payroll keyword heuristics | `quality.ts`, `pipeline/scanned-detection.ts` |
| Parsing | Deterministic rules, no LLM in v1 | `parse/engine.ts` |
| Insights | Basic hints + future premium block | `insights/basic-*.ts`, `insights/premium-*.ts` |
| API shape | Capabilities, `scannedPdfHints`, `decoderUiStates` | `pipeline/process-payslip-document.ts`, `types.ts` |

---

## Current free-tier architecture (summary)

1. **Paste:** User-supplied text → normalize → quality → parse → insights. No binary extraction.
2. **PDF upload:** In-memory `Buffer` → `pdf-parse` → string (embedded text layer only). Same pipeline afterward.
3. **No persistence:** No DB write of file or extracted text for this feature; avoid logging full body (see Privacy).
4. **Feature flags:** `lib/config/payslip-features.ts` — `ENABLE_PAYSLIP_OCR`, `ENABLE_PAYSLIP_IMAGE_UPLOAD`, `ENABLE_PREMIUM_PAYSLIP_INSIGHTS` (all default off).

---

## Why text-layer PDF extraction stays on the free tier

- **Cost:** `pdf-parse` runs locally in the Node process — no per-page third-party OCR billing.
- **Latency:** Typically fast; predictable CPU bound by upload caps (`PAYSLIP_DECODER_MAX_BYTES` / env).
- **Privacy:** Bytes never leave our runtime unless we explicitly add an external OCR API later.
- **Determinism:** Text layer is what the PDF already encodes; quality heuristics describe confidence, not ML variance from a remote model.

Free tier intentionally **does not** solve “no selectable text” (scanned PDFs); users get structured warnings and paste fallback.

---

## Why OCR is reserved for paid / registered users (product + engineering)

**Product / trust**

- OCR implies **sending document content** to a third party (unless fully self-hosted) or running **heavier** infrastructure — that needs clear consent, privacy policy, and often regional data handling.
- Registered / paid tiers are the natural place for **entitlements**, usage limits, and support expectations.

**Engineering**

- **Variable cost** per page/image (cloud APIs) or **fixed ops cost** (GPU/self-hosted).
- **Abuse resistance:** Rate limits, account caps, and fraud checks align with authenticated flows.
- **Quality commitments:** Paid OCR can be paired with SLAs, retries, and human-readable confidence for refunds or support.

Implementation-wise: **env flags** (`ENABLE_PAYSLIP_OCR`) are not a substitute for **auth**; they are kill-switches and rollout controls. Entitlement checks should live **next to or inside** the route/OCR orchestration (see below).

---

## Future OCR pipeline options (high-level comparison)

All options should implement **`OcrProvider`** (`extractTextFromImageOrScannedPdf`, `isEnabled()`). Keep provider-specific SDKs **behind** that interface so the rest of the pipeline stays unchanged.

| Option | Pros | Cons / notes |
|--------|------|----------------|
| **Azure AI Document Intelligence** (formerly Form Recognizer) | Strong on mixed documents, tables, layout; enterprise DPAs; EU regions available | Per-page pricing; integration complexity; latency |
| **Google Cloud Vision / Document AI** | Mature OCR; Document AI for layout-heavy PDFs | Pricing, data residency choices, GCP account model |
| **Tesseract / self-hosted** | No per-request cloud fee; full control of data residency | Ops burden, tuning, accuracy vs cloud on poor scans, scaling |
| **Other SaaS** (AWS Textract, etc.) | Fits existing cloud contracts | Same pattern: adapter + DPA + region + cost model |

**Adapter model (recommended):**

- One file or folder per provider, e.g. `ocr/providers/azureDocumentIntelligence.ts`, each exporting a class implementing `OcrProvider`.
- `getPayslipOcrProvider()` chooses implementation from env (e.g. `PAYSLIP_OCR_PROVIDER=azure`) **after** feature flag + **after** entitlement (future).
- Map provider errors to **user-safe** messages; never leak stack traces or raw API keys to clients.

**No provider-specific code is required in this repo until a provider is chosen** — only the interface and factory remain.

---

## Confidence model (free + future OCR)

**Today (free):**

- **Extraction quality:** `good` / `partial` / `poor` from length, payroll keyword hits, printable ratio (`quality.ts`).
- **Likely scanned:** `computeLikelyScannedDocument` for PDF text path (`pipeline/scanned-detection.ts`).
- **Parser field confidence:** `high` / `medium` / `low` on parsed money lines (`types.ts`).

**Future (OCR):**

- Extend **`OcrExtractOk`** with stable fields (already sketched): e.g. `meanConfidence?: number`, optional per-page breakdown **without** returning raw PII in logs.
- Combine **OCR confidence** with existing **keyword/length** heuristics for a single user-facing tier or for `decodeHints`.
- Consider **rejecting** OCR output below a threshold and asking for re-scan or paste (cost + UX).

---

## Privacy considerations

- **Minimize retention:** Even in paid mode, default should remain **process in memory → JSON response → discard** unless product explicitly adds history.
- **Third-party OCR:** Subprocessors, DPA, data processing location, and whether **document bytes** are stored by the vendor (and for how long) must be documented for legal/privacy review.
- **Logging:** Do not log full OCR text or payslip body; log **request ids**, **outcome codes**, **aggregate confidence**, **user/session id** (if auth exists).
- **Client:** Remind users about shared devices and browser history (unchanged).

---

## Cost-control considerations

- **Per-request caps:** Page count, max megapixels, timeout — enforce before calling OCR.
- **Idempotency / dedupe:** Optional content-hash (of buffer) for caching **only if** policy allows — usually **avoid** storing hashes of payslips without explicit consent.
- **Queue vs sync:** Heavy OCR might move to a job queue later; **out of scope** until product requires it (current constraint: no background jobs in v1 blueprint).
- **Kill switch:** `ENABLE_PAYSLIP_OCR=false` immediately disables new OCR paths even if code is deployed.

---

## Where auth / entitlement checks should go (later)

**Implemented (structure only, anonymous defaults):** `lib/entitlements/payslip-entitlements.ts` — `PayslipEntitlements`, `getPayslipEntitlements()`, `getPayslipEntitlementsFromRequest(Request)`. The decode route and UI consult this object; paste + text-PDF remain allowed for anonymous users.

Preferred **order** (conceptual):

1. **Route handler** (`decode/route.ts`) — resolve `getPayslipEntitlementsFromRequest(request)` (already called); extend implementation with session/plan. Return `403` when a mode is disallowed (already wired for paste vs PDF).
2. **OCR orchestration helper** (future `ocr/runOcrIfEligible.ts` or similar) — single place: `flags + entitlement + provider.isEnabled() + file type`.
3. **Not** inside `parse/engine.ts` (parser should stay auth-agnostic).

Free paste + text-PDF paths can remain **unauthenticated** until product says otherwise; only **OCR branch** (and optional image upload) needs entitlement.

---

## Where provider adapters plug in

| Location | Purpose |
|----------|---------|
| `src/lib/tools/payslip/ocr/OcrProvider.ts` | Interface + `getPayslipOcrProvider()` factory |
| `src/lib/tools/payslip/ocr/providers/*.ts` (future) | Concrete providers |
| `app/api/tools/payslip/decode/route.ts` | After `extractTextFromPdf`, **optional** second stage: if eligible, replace/merge text from `OcrProvider` |
| `pipeline/process-payslip-document.ts` | Today assumes text-in; if OCR runs in route, keep passing **final** `rawText` here. Alternative: pass `extractionMethod: "ocr"` and metadata — align `DocumentInputSource` / `DocumentExtractionMethod` in `types.ts` |

---

## Avoiding file storage in paid mode (still desired)

- Keep **Buffer** in the request lifecycle only; do not write to disk or object storage.
- Stream to provider APIs via **memory** or provider-supported **presigned one-shot URL** only if product accepts that retention model.
- If the provider requires a URL, prefer **short-lived pre-signed POST** with **auto-delete** policy over permanent buckets.

---

## Optional path: document history (if product ever requires it)

If history is added **without** contradicting privacy defaults:

- Store **metadata only** (user id, timestamp, extraction quality summary, **no** raw text) for analytics/support.
- Or store **encrypted blobs** with explicit consent, TTL, and user delete — separate service, not the hot decode path.
- The current **`DocumentProcessingResult.processingMetadata`** pattern in the pipeline is a hook for **non-content** summaries if persistence is added later.

---

## Checklist before shipping paid OCR

- [ ] Legal/privacy: DPA, subprocessors, region, retention wording in product copy.
- [ ] Auth + entitlement middleware or helper; tests for 403 paths.
- [ ] Provider adapter behind `OcrProvider`; secrets in env / vault.
- [ ] Cost alerts, per-user limits, timeouts.
- [ ] User-facing confidence and failure modes (paste fallback).
- [ ] Update public-facing `payslip-decoder.md` if customer-visible behavior changes.

---

## File index (quick navigation)

| Area | Path |
|------|------|
| API route | `apps/expatlife-web/app/api/tools/payslip/decode/route.ts` |
| Decode orchestration | `apps/expatlife-web/src/lib/tools/payslip/decode-pipeline.ts` |
| Pipeline | `apps/expatlife-web/src/lib/tools/payslip/pipeline/process-payslip-document.ts` |
| OCR interface | `apps/expatlife-web/src/lib/tools/payslip/ocr/OcrProvider.ts` |
| Feature flags | `apps/expatlife-web/lib/config/payslip-features.ts` |
| Entitlements (per user/session) | `apps/expatlife-web/lib/entitlements/payslip-entitlements.ts` |
| Premium insights stub | `apps/expatlife-web/src/lib/tools/payslip/insights/premium-payslip-insights.ts` |
| UI client | `apps/expatlife-web/src/components/tools/payslip-decoder/PayslipDecoderClient.tsx` |

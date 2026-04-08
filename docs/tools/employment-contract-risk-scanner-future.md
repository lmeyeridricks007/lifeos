# Employment Contract Risk Scanner — architecture (free) and future paid paths

This document describes how the Dutch **Employment Contract Risk Scanner** is structured today and where **OCR**, **LLM insights**, **saved history**, and **billing** would plug in later. It complements the implementation under `apps/expatlife-web/src/lib/tools/contract-scanner/`.

## Current free / basic architecture

Layers (in order):

1. **Document input source** (`DocumentInputSource` in `architectureTypes.ts`)  
   Describes *how* the user supplied content: `paste_text`, `pdf_text`, `pdf_scanned` (heuristic), `image_ocr` (reserved), `checklist_manual`.

2. **Extraction method** (`ExtractionMethod`)  
   `none` (paste/checklist), `pdf_text` (text layer via `pdf-parse`), future `ocr`.

3. **Document processing result** (`DocumentProcessingResult`)  
   Produced after PDF upload on the server (`documentPipeline.ts` + `/api/tools/contract-scanner/extract`) or synthesized for paste/checklist (`pipelineMerge.ts`). Includes:
   - `likelyScannedDocument` — heuristic from text quality / chars-per-page.
   - `ocrRecommended` — true when OCR would *likely* help (poor text layer or scanned signal); **not** an offer to run OCR in free mode.
   - `ocrAvailable` — driven by **`ContractEntitlements.ocrEnabled`** (always `false` today).

4. **Parsing layer** (`parseContractText` in `parser.ts`)  
   Deterministic rules: patterns, missing-topic heuristics, scores. No ML.

5. **Insight layer (basic)** (`runContractScan` / `basicContractInsightProvider` in `parser.ts`)  
   Wraps parsing + merges pipeline metadata via `mergePipelineIntoResult` (`pipelineMerge.ts`).

6. **Premium insight layer**  
   Interface only: `PremiumContractInsightProvider` in `providers.ts` (`disabledPremiumContractInsightProvider`). **Not invoked** in production.

7. **Entitlements** (`ContractEntitlements`, `getDefaultContractEntitlements`, `getContractEntitlementsFromRequest`)  
   All flags **false** for anonymous users. **`getContractEntitlementsFromRequest`** is the future hook for session/plan (no auth wired yet).

### Input tabs (UI)

`inputTabs.ts` defines tab order and a **hidden** future row for **Image upload (OCR)** (`CONTRACT_SCANNER_IMAGE_UPLOAD_TAB_ENABLED === false`). The visible tabs remain paste, PDF, checklist only.

### Why there is no storage yet

Free tier is explicitly **session / request scoped**: PDF buffers are processed in memory; extracted text is returned in JSON; the client runs analysis without persisting contracts server-side. That avoids data-protection and retention obligations until a **saved history** product exists. When history ships, it would sit **after** `DocumentProcessingResult` + `ContractScanResult`, behind `ContractEntitlements.savedHistoryEnabled`.

## Future OCR path

1. Set **`ContractEntitlements.ocrEnabled`** (and optionally **`imageUploadTabEnabled`**) from auth/subscription in **`getContractEntitlementsFromRequest`**.
2. Implement a real **`OcrProvider`** (replace `disabledOcrProvider` in `providers.ts`) — e.g. call an internal OCR worker or vendor **only** when entitled; still **no raw contract logging**.
3. Extend API (or add a second route) to: accept image or force OCR on PDF, run **`ExtractionMethod.ocr`**, return a new **`DocumentProcessingResult`** with `extractionMethod: "ocr"` and updated text.
4. Enable the **image OCR tab** in `inputTabs.ts` and add **`InputMode`** / routing for `image_ocr` when product-ready.
5. **`ocrRecommended`** remains a **heuristic**; **`ocrAvailable`** becomes true when the user may actually run OCR.

## Future LLM / premium insight path

1. Set **`premiumInsightsEnabled`** from entitlements.
2. Implement **`PremiumContractInsightProvider.analyzePremium`** to return enriched copy (or merge with basic result). **Gate**: never call when `premiumInsightsEnabled` is false.
3. Optionally split **parsing** (structured clauses) from **wording** (LLM) so the deterministic engine stays the source of truth for compliance/debugging.

## Future side-by-side comparison

1. **`compareContractsEnabled`** in entitlements.
2. Two **`DocumentProcessingResult`** instances + two basic (or premium) runs; UI compares outputs. Storage optional (ephemeral compare vs saved pairs).

## Where auth / billing slot in

| Concern | Location |
|--------|----------|
| Resolve plan | `getContractEntitlementsFromRequest(request)` in `entitlements.ts` |
| API gating | `app/api/tools/contract-scanner/extract/route.ts` (and future OCR routes) |
| UI gating | Client reads entitlements from a future session endpoint or embedded bootstrap props |
| Tab visibility | `CONTRACT_SCANNER_IMAGE_UPLOAD_TAB_ENABLED` + `ContractEntitlements.imageUploadTabEnabled` |

Until then, **`getContractEntitlementsFromRequest`** returns **`getDefaultContractEntitlements()`** (all false).

## File map

| File | Role |
|------|------|
| `architectureTypes.ts` | `DocumentInputSource`, `ExtractionMethod`, `ContractInsightLevel`, `ContractEntitlements`, `DocumentProcessingResult` |
| `entitlements.ts` | Default + request hook stub |
| `documentPipeline.ts` | PDF → `DocumentProcessingResult`, paste/checklist builders |
| `pipelineMerge.ts` | Resolve/synthesize document stage + merge into `ContractScanResult` |
| `providers.ts` | `OcrProvider`, `ContractInsightProvider`, `PremiumContractInsightProvider` + disabled stubs |
| `inputTabs.ts` | Tab registry + hidden image tab |
| `parser.ts` | `parseContractText`, `runContractScan`, `basicContractInsightProvider` |
| `pdfExtract.ts` | Text-layer PDF only (no OCR) |

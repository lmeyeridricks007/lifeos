# Payslip Decoder — manual QA

Privacy reminder: use synthetic or anonymized payslips in shared environments.

## Automated checks

From repo root:

```bash
cd apps/expatlife-web && pnpm run test:payslip
```

## Environment

- Local: `pnpm dev` from `apps/expatlife-web` (or monorepo dev script if used).
- Open `/netherlands/work/tools/payslip-decoder/`.

## Functional cases

1. **Empty state**  
   Load page. Decoder shows paste/upload modes; results section shows placeholder copy; no errors.

2. **Paste — good Dutch sample**  
   Paste text containing `Bruto loon`, `Loonheffing`, `Netto loon`, amounts like `4.500,00`.  
   Expect: Good or partial extraction; key figures populated; explanation cards; glossary “likely in your text” for several terms.

3. **Paste — English-ish export**  
   Paste lines with `Gross`, `Net pay`, `Tax`.  
   Expect: Some fields may parse; warnings if ambiguous; no invented values.

4. **PDF — normal text-based payroll PDF**  
   Export a text PDF from a payroll preview (no scan).  
   Expect: Extracted text in accordion; quality Good or Partial; decoded lines where labels match patterns.

5. **PDF — sparse text**  
   Use a PDF with little selectable text.  
   Expect: Partial or low-confidence extraction; parser notes if needed.

6. **PDF — scanned / image-only**  
   Scan or use a purely image PDF.  
   Expect: Low-confidence extraction; message that free mode supports text-based PDFs only; suggestion to paste manually.

7. **Invalid file**  
   Try uploading `.txt` or `.png` renamed to `.pdf` if the browser allows — or wrong MIME.  
   Expect: Clear rejection, no stack trace.

8. **Oversized file**  
   Upload a PDF larger than configured max (default 10 MB).  
   Expect: 413-style message with size hint.

9. **Side rail**  
   “Start decoder” scrolls to `#tool-inputs`; “Jump to results” scrolls to `#payslip-results`.

10. **Copy raw text**  
    After decode, open “Extracted raw text”, click Copy; paste elsewhere — text matches accordion.

11. **Network failure**  
    Block `/api/tools/payslip/decode` in devtools; run decode.  
    Expect: User-safe error, no stack trace in UI.

## Regression

- Work tools hub lists Dutch Payslip Decoder as live (`/netherlands/work/tools/`).
- Money menu featured tools still resolves registry entries without errors.
- Dutch net salary calculator “Related” link to payslip decoder is live (not “coming soon”).

## Production / hosting notes

- Large uploads depend on platform body limits; if 10 MB uploads fail before the handler runs, raise limits in hosting config or lower `PAYSLIP_DECODER_MAX_BYTES`.

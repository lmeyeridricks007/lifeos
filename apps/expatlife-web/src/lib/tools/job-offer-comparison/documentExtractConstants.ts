/** Max upload for offer letter PDF / text extraction (matches contract scanner tier). */
export const JOB_OFFER_DOCUMENT_MAX_BYTES = 15 * 1024 * 1024;

/** Max characters returned to the client (protects memory and response size). */
export const JOB_OFFER_DOCUMENT_MAX_TEXT_CHARS = 400_000;

export const JOB_OFFER_EXTRACT_TEXT_API_PATH = "/api/tools/job-offer/extract-text";

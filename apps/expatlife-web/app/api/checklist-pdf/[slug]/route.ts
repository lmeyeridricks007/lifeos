import { NextRequest, NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import { isGuidePublishingVisibleBySlug, loadGuideBySlug } from "@/src/lib/guides/loadGuide";

export const dynamic = "force-dynamic";

const ALLOWED_SLUGS = ["moving-checklist-netherlands", "documents-needed-to-move-netherlands"] as const;

function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("data", (chunk: Buffer) => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
}

const MARGIN = 50;
const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const BOTTOM_MARGIN = 40;

function buildChecklistPdf(
  doc: PDFKit.PDFDocument,
  title: string,
  subtitle: string | undefined,
  sections: Array<{ heading: string; body?: string[]; bullets?: string[] }>
) {
  // Title block
  doc.fontSize(22).font("Helvetica-Bold").text(title, { align: "center", width: CONTENT_WIDTH });
  doc.moveDown(0.8);
  if (subtitle) {
    doc.fontSize(11).font("Helvetica").text(subtitle, { align: "center", width: CONTENT_WIDTH });
    doc.moveDown(1.2);
  } else {
    doc.moveDown(0.6);
  }
  doc.moveDown(1);
  doc.font("Helvetica");

  for (const section of sections) {
    if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 120) doc.addPage();
    doc.fontSize(13).font("Helvetica-Bold").text(section.heading, { width: CONTENT_WIDTH });
    doc.moveDown(0.5);
    doc.fontSize(10).font("Helvetica");
    if (section.body?.length) {
      for (const para of section.body) {
        if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 80) doc.addPage();
        doc.text(para, { width: CONTENT_WIDTH, align: "left", lineGap: 2 });
        doc.moveDown(0.4);
      }
    }
    if (section.bullets?.length) {
      for (const bullet of section.bullets) {
        if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 40) doc.addPage();
        doc.text(`☐ ${bullet}`, { width: CONTENT_WIDTH, indent: 14, continued: false, lineGap: 2 });
        doc.moveDown(0.35);
      }
      doc.moveDown(0.4);
    }
    doc.moveDown(0.8);
  }
}

function addPageNumbers(doc: PDFKit.PDFDocument) {
  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(i);
    doc.fontSize(9).font("Helvetica").fillColor("#6b7280");
    doc.text(
      `Page ${i + 1} of ${range.count}`,
      MARGIN,
      PAGE_HEIGHT - BOTTOM_MARGIN + 10,
      { align: "center", width: CONTENT_WIDTH }
    );
    doc.fillColor("#000000");
  }
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> | { slug: string } }
) {
  const params = await Promise.resolve(context.params);
  const slug = params.slug;

  if (!slug || !ALLOWED_SLUGS.includes(slug as (typeof ALLOWED_SLUGS)[number])) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (!isGuidePublishingVisibleBySlug(slug)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const guide = loadGuideBySlug(slug);
  if (!guide) {
    return NextResponse.json({ error: "Guide not found" }, { status: 404 });
  }

  const doc = new PDFDocument({ size: "A4", margin: MARGIN, bufferPages: true });
  const sections = guide.sections.map((s) => ({
    heading: s.heading,
    body: s.body,
    bullets: s.bullets,
  }));

  buildChecklistPdf(doc, guide.title, guide.subtitle ?? guide.description, sections);
  addPageNumbers(doc);

  doc.end();
  const buffer = await streamToBuffer(doc);

  const filename =
    slug === "moving-checklist-netherlands"
      ? "moving-checklist-netherlands.pdf"
      : "documents-needed-to-move-netherlands.pdf";

  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
      "Content-Length": String(buffer.length),
      "Cache-Control": "private, no-cache",
    },
  });
}

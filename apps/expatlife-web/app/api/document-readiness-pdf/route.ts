import { NextRequest, NextResponse } from "next/server";
import PDFDocument from "pdfkit";

export const dynamic = "force-dynamic";

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

type DocumentDisplayStatus = "completed" | "in_progress" | "na";

type DocItem = {
  id: string;
  title: string;
  whyItMatters: string;
  suggestedAction: string;
  initialStatus: DocumentDisplayStatus;
};

type Payload = {
  result: {
    readinessScore: number;
    readinessLevel: string;
    summaryText: string[];
    readyCategories: Array<{ id: string; title: string }>;
    missingCategories: Array<{ id: string; title: string; whyItMatters: string; suggestedAction: string }>;
    uncertainCategories: Array<{ id: string; title: string; whyItMatters: string; suggestedAction: string }>;
    riskFlags?: Array<{ label: string; description: string }>;
    recommendedNextSteps?: Array<{ label: string; href?: string }>;
  };
  statusOverrides: Record<string, DocumentDisplayStatus>;
  answers?: { countryCode?: string; primaryRoute?: string; householdType?: string };
};

function getDisplayStatus(
  docId: string,
  initialStatus: DocumentDisplayStatus,
  overrides: Record<string, DocumentDisplayStatus>
): DocumentDisplayStatus {
  return overrides[docId] ?? initialStatus;
}

function statusLabel(s: DocumentDisplayStatus): string {
  return s === "completed" ? "Completed" : s === "in_progress" ? "In progress" : "N/A";
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Payload;
    const { result, statusOverrides = {}, answers } = body;

    if (!result || typeof result.readinessScore !== "number") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const docList: Array<DocItem & { status: DocumentDisplayStatus }> = [];
    result.readyCategories?.forEach((c) => {
      docList.push({
        id: c.id,
        title: c.title,
        whyItMatters: "",
        suggestedAction: "",
        initialStatus: "completed",
        status: getDisplayStatus(c.id, "completed", statusOverrides),
      });
    });
    result.missingCategories?.forEach((d) => {
      docList.push({
        id: d.id,
        title: d.title,
        whyItMatters: d.whyItMatters ?? "",
        suggestedAction: d.suggestedAction ?? "",
        initialStatus: "in_progress",
        status: getDisplayStatus(d.id, "in_progress", statusOverrides),
      });
    });
    result.uncertainCategories?.forEach((d) => {
      docList.push({
        id: d.id,
        title: d.title,
        whyItMatters: d.whyItMatters ?? "",
        suggestedAction: d.suggestedAction ?? "",
        initialStatus: "na",
        status: getDisplayStatus(d.id, "na", statusOverrides),
      });
    });

    const doc = new PDFDocument({ size: "A4", margin: MARGIN, bufferPages: true });

    doc.fontSize(20).font("Helvetica-Bold").text("Document Readiness Checklist", { align: "center", width: CONTENT_WIDTH });
    doc.moveDown(0.3);
    doc.fontSize(11).font("Helvetica").text("Netherlands move – planning only. Confirm requirements with official sources.", { align: "center", width: CONTENT_WIDTH });
    doc.moveDown(1.2);

    doc.font("Helvetica");
    doc.fontSize(11).font("Helvetica-Bold").text("Readiness score", { width: CONTENT_WIDTH });
    doc.moveDown(0.3);
    doc.fontSize(10).font("Helvetica");
    doc.text(`${result.readinessScore} / 100 – ${result.readinessLevel ?? "unknown"}`, { width: CONTENT_WIDTH });
    doc.moveDown(0.5);

    if (answers?.primaryRoute || answers?.countryCode) {
      doc.fontSize(10).font("Helvetica").fillColor("#4b5563");
      const context: string[] = [];
      if (answers.primaryRoute) context.push(`Route: ${String(answers.primaryRoute).replace(/-/g, " ")}`);
      if (answers.countryCode) context.push(`Document origin: ${String(answers.countryCode).replace(/-/g, " ")}`);
      if (answers.householdType) context.push(`Household: ${String(answers.householdType).replace(/-/g, " ")}`);
      doc.text(context.join("  ·  "), { width: CONTENT_WIDTH });
      doc.moveDown(0.5);
      doc.fillColor("#000000");
    }

    if (result.summaryText?.length) {
      doc.fontSize(10).font("Helvetica");
      for (const line of result.summaryText) {
        if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 80) doc.addPage();
        doc.text(line, { width: CONTENT_WIDTH });
        doc.moveDown(0.25);
      }
      doc.moveDown(0.8);
    }

    doc.fontSize(12).font("Helvetica-Bold").text("Documents", { width: CONTENT_WIDTH });
    doc.moveDown(0.5);
    doc.fontSize(10).font("Helvetica");

    for (const item of docList) {
      if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 70) doc.addPage();
      doc.font("Helvetica-Bold").text(item.title, { width: CONTENT_WIDTH });
      doc.font("Helvetica").fillColor("#4b5563").text(`Status: ${statusLabel(item.status)}`, { width: CONTENT_WIDTH });
      doc.fillColor("#000000");
      if (item.whyItMatters) {
        doc.moveDown(0.2);
        doc.font("Helvetica").text(item.whyItMatters, { width: CONTENT_WIDTH });
      }
      if (item.suggestedAction) {
        doc.moveDown(0.15);
        doc.text(`Next step: ${item.suggestedAction}`, { width: CONTENT_WIDTH });
      }
      doc.moveDown(0.6);
    }

    if (result.riskFlags?.length) {
      if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 100) doc.addPage();
      doc.moveDown(0.5);
      doc.fontSize(11).font("Helvetica-Bold").text("Potential bottlenecks", { width: CONTENT_WIDTH });
      doc.moveDown(0.3);
      doc.fontSize(10).font("Helvetica");
      for (const flag of result.riskFlags) {
        if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 50) doc.addPage();
        doc.text(`• ${flag.label}: ${flag.description}`, { width: CONTENT_WIDTH });
        doc.moveDown(0.25);
      }
      doc.moveDown(0.5);
    }

    if (result.recommendedNextSteps?.length) {
      if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 80) doc.addPage();
      doc.fontSize(11).font("Helvetica-Bold").text("Recommended next steps", { width: CONTENT_WIDTH });
      doc.moveDown(0.3);
      doc.fontSize(10).font("Helvetica");
      for (const step of result.recommendedNextSteps) {
        if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 40) doc.addPage();
        doc.text(`• ${step.label}`, { width: CONTENT_WIDTH });
        doc.moveDown(0.2);
      }
      doc.moveDown(0.5);
    }

    doc.fontSize(9).font("Helvetica").fillColor("#6b7280");
    doc.text(
      "This checklist is for planning only. It is not legal advice. Always confirm document and application requirements with the IND and official sources.",
      { width: CONTENT_WIDTH }
    );
    doc.fillColor("#000000");

    const range = doc.bufferedPageRange();
    for (let i = 0; i < range.count; i++) {
      doc.switchToPage(i);
      doc.fontSize(9).font("Helvetica").fillColor("#6b7280");
      doc.text(
        `Page ${i + 1} of ${range.count} · ExpatCopilot Document Readiness Checker`,
        MARGIN,
        PAGE_HEIGHT - BOTTOM_MARGIN + 10,
        { align: "center", width: CONTENT_WIDTH }
      );
      doc.fillColor("#000000");
    }

    doc.end();
    const buffer = await streamToBuffer(doc);
    const filename = "netherlands-document-readiness-checklist.pdf";

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
        "Content-Length": String(buffer.length),
        "Cache-Control": "private, no-cache",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}

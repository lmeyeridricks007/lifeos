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

function formatEur(n: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(n);
}

type CostBreakdownRow = { id: string; label: string; lowEur: number; highEur: number; note?: string };

type Payload = {
  result: {
    lowEstimate: number;
    highEstimate: number;
    officialFeeSubtotal: number;
    documentPrepSubtotal: number;
    travelSubtotal: number;
    setupSubtotal: number;
    costBreakdown: CostBreakdownRow[];
    hiddenCostWarnings: string[];
    recommendedNextSteps: Array<{ label: string; href: string }>;
  };
  answers: {
    primaryRoute?: string;
    countryCode?: string;
    travelDistanceBand?: string;
    householdType?: string;
  };
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Payload;
    const { result, answers = {} } = body;

    if (!result || typeof result.lowEstimate !== "number") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const doc = new PDFDocument({ size: "A4", margin: MARGIN, bufferPages: true });

    doc
      .fontSize(22)
      .font("Helvetica-Bold")
      .text("Visa Cost Estimate", { align: "center", width: CONTENT_WIDTH });
    doc.moveDown(0.3);
    doc
      .fontSize(12)
      .font("Helvetica")
      .text("Netherlands visa and pre-move cost calculator", { align: "center", width: CONTENT_WIDTH });
    doc.moveDown(1.5);
    doc.font("Helvetica");

    doc.fontSize(11).font("Helvetica-Bold").text("Total estimated range", { width: CONTENT_WIDTH });
    doc.moveDown(0.4);
    doc
      .fontSize(14)
      .font("Helvetica-Bold")
      .text(
        `${formatEur(result.lowEstimate)} – ${formatEur(result.highEstimate)}`,
        { width: CONTENT_WIDTH }
      );
    doc.moveDown(0.5);
    doc.fontSize(10).font("Helvetica").fillColor("#4b5563");
    doc.text("Planning estimate only. Confirm official fees with IND and provider costs before applying.", {
      width: CONTENT_WIDTH,
    });
    doc.fillColor("#000000");
    doc.moveDown(1);

    doc.fontSize(11).font("Helvetica-Bold").text("Your profile", { width: CONTENT_WIDTH });
    doc.moveDown(0.4);
    doc.fontSize(10).font("Helvetica");
    const profileLines = [
      answers.primaryRoute ? `Route: ${String(answers.primaryRoute).replace(/-/g, " ")}` : null,
      answers.countryCode ? `Origin: ${String(answers.countryCode).replace(/-/g, " ")}` : null,
      answers.travelDistanceBand ? `Distance: ${String(answers.travelDistanceBand).replace(/-/g, " ")}` : null,
      answers.householdType ? `Household: ${String(answers.householdType).replace(/-/g, " ")}` : null,
    ].filter(Boolean) as string[];
    for (const line of profileLines) {
      if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 80) doc.addPage();
      doc.text(line, { width: CONTENT_WIDTH });
      doc.moveDown(0.25);
    }
    if (profileLines.length === 0) doc.text("—", { width: CONTENT_WIDTH });
    doc.moveDown(0.8);

    doc.fontSize(11).font("Helvetica-Bold").text("Summary", { width: CONTENT_WIDTH });
    doc.moveDown(0.4);
    doc.fontSize(10).font("Helvetica");
    doc.text(`Official route fees: ${formatEur(result.officialFeeSubtotal)}`, { width: CONTENT_WIDTH });
    doc.moveDown(0.25);
    doc.text(`Documents and prep: ~${formatEur(result.documentPrepSubtotal)}`, { width: CONTENT_WIDTH });
    doc.moveDown(0.25);
    doc.text(
      `Travel and setup: ~${formatEur(result.travelSubtotal + result.setupSubtotal)}`,
      { width: CONTENT_WIDTH }
    );
    doc.moveDown(1);

    doc.fontSize(11).font("Helvetica-Bold").text("Cost breakdown", { width: CONTENT_WIDTH });
    doc.moveDown(0.4);
    doc.fontSize(10).font("Helvetica");
    for (const row of result.costBreakdown ?? []) {
      if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 40) doc.addPage();
      const range =
        row.lowEur === row.highEur
          ? formatEur(row.lowEur)
          : `${formatEur(row.lowEur)} – ${formatEur(row.highEur)}`;
      doc.text(`${row.label}: ${range}`, { width: CONTENT_WIDTH });
      if (row.note) {
        doc.font("Helvetica-Oblique").fillColor("#6b7280").text(`   ${row.note}`, { width: CONTENT_WIDTH });
        doc.font("Helvetica").fillColor("#000000");
      }
      doc.moveDown(0.3);
    }
    doc.moveDown(0.8);

    if (result.hiddenCostWarnings?.length) {
      doc.fontSize(11).font("Helvetica-Bold").text("Things to watch for", { width: CONTENT_WIDTH });
      doc.moveDown(0.4);
      doc.fontSize(10).font("Helvetica");
      for (const text of result.hiddenCostWarnings) {
        if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 50) doc.addPage();
        doc.text(`• ${text}`, { width: CONTENT_WIDTH, continued: false });
        doc.moveDown(0.25);
      }
      doc.moveDown(0.8);
    }

    if (result.recommendedNextSteps?.length) {
      doc.fontSize(11).font("Helvetica-Bold").text("Recommended next steps", { width: CONTENT_WIDTH });
      doc.moveDown(0.4);
      doc.fontSize(10).font("Helvetica");
      for (const step of result.recommendedNextSteps) {
        if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 40) doc.addPage();
        doc.text(`• ${step.label}`, { width: CONTENT_WIDTH });
        doc.moveDown(0.25);
      }
      doc.moveDown(0.8);
    }

    doc.fontSize(10).font("Helvetica").fillColor("#4b5563");
    doc.text(
      "This estimate is for planning only. Official fees and required amounts can change. Confirm current figures with the IND (ind.nl) and get quotes from providers before committing. Not legal or financial advice.",
      { width: CONTENT_WIDTH, align: "left" }
    );
    doc.fillColor("#000000");

    const range = doc.bufferedPageRange();
    for (let i = 0; i < range.count; i++) {
      doc.switchToPage(i);
      doc.fontSize(9).font("Helvetica").fillColor("#6b7280");
      doc.text(
        `Page ${i + 1} of ${range.count} · ExpatCopilot · Netherlands Visa Cost Calculator`,
        MARGIN,
        PAGE_HEIGHT - BOTTOM_MARGIN + 10,
        { align: "center", width: CONTENT_WIDTH }
      );
      doc.fillColor("#000000");
    }

    doc.end();
    const buffer = await streamToBuffer(doc);
    const filename = "netherlands-visa-cost-estimate.pdf";

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

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { input, result } = body as {
      input: Record<string, unknown>;
      result: {
        oneTimeLow: number;
        oneTimeHigh: number;
        monthlyLow: number;
        monthlyHigh: number;
        firstYearLow: number;
        firstYearHigh: number;
        breakdown: {
          travelAndMove: Array<{ label: string; range: { min: number; max: number } }>;
          paperworkAndRoute: Array<{ label: string; range: { min: number; max: number } }>;
          housingSetup: Array<{ label: string; range: { min: number; max: number } }>;
          arrivalSetup: Array<{ label: string; range: { min: number; max: number } }>;
        };
      };
    };

    if (!result || typeof result.oneTimeLow !== "number") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const doc = new PDFDocument({ size: "A4", margin: MARGIN, bufferPages: true });

    doc.fontSize(22).font("Helvetica-Bold").text("Relocation Cost Estimate", { align: "center", width: CONTENT_WIDTH });
    doc.moveDown(0.3);
    doc.fontSize(12).font("Helvetica").text("Moving to the Netherlands", { align: "center", width: CONTENT_WIDTH });
    doc.moveDown(1.5);
    doc.font("Helvetica");

    doc.fontSize(11).font("Helvetica-Bold").text("Your profile summary", { width: CONTENT_WIDTH });
    doc.moveDown(0.4);
    doc.fontSize(10).font("Helvetica");
    const summaryLines = [
      `Household: ${String(input?.householdType ?? "").replace(/-/g, " ")}`,
      `Origin: ${String(input?.regionOfOrigin ?? "").replace(/-/g, " ")}`,
      `City in NL: ${String(input?.cityInNetherlands ?? "").replace(/-/g, " ")}`,
      `Visa route: ${String(input?.visaRoute ?? "").replace(/-/g, " ")}`,
      `Moving method: ${String(input?.movingMethod ?? "").replace(/-/g, " ")}`,
      `Pets: ${String(input?.pets ?? "none")}`,
    ];
    for (const line of summaryLines) {
      if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 60) doc.addPage();
      doc.text(line, { width: CONTENT_WIDTH });
      doc.moveDown(0.25);
    }
    doc.moveDown(0.8);

    doc.fontSize(11).font("Helvetica-Bold").text("Estimated costs", { width: CONTENT_WIDTH });
    doc.moveDown(0.4);
    doc.fontSize(10).font("Helvetica");
    doc.text(`One-time relocation: ${formatEur(result.oneTimeLow)} – ${formatEur(result.oneTimeHigh)}`, { width: CONTENT_WIDTH });
    doc.moveDown(0.3);
    doc.text(`Monthly living: ${formatEur(result.monthlyLow)} – ${formatEur(result.monthlyHigh)} / month`, { width: CONTENT_WIDTH });
    doc.moveDown(0.3);
    doc.text(`First-year total: ${formatEur(result.firstYearLow)} – ${formatEur(result.firstYearHigh)}`, { width: CONTENT_WIDTH });
    doc.moveDown(1);

    const allBreakdown = [
      ...result.breakdown.travelAndMove.map((i) => ({ group: "Travel & move", ...i })),
      ...result.breakdown.paperworkAndRoute.map((i) => ({ group: "Paperwork & route", ...i })),
      ...result.breakdown.housingSetup.map((i) => ({ group: "Housing setup", ...i })),
      ...result.breakdown.arrivalSetup.map((i) => ({ group: "Arrival setup", ...i })),
    ];
    doc.fontSize(11).font("Helvetica-Bold").text("Detailed breakdown", { width: CONTENT_WIDTH });
    doc.moveDown(0.4);
    doc.fontSize(10).font("Helvetica");
    for (const item of allBreakdown) {
      if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - 40) doc.addPage();
      doc.text(`${item.label}: ${formatEur(item.range.min)} – ${formatEur(item.range.max)}`, { width: CONTENT_WIDTH });
      doc.moveDown(0.25);
    }
    doc.moveDown(1);

    doc.fontSize(10).font("Helvetica").fillColor("#4b5563");
    doc.text(
      "This calculator provides planning estimates based on maintained reference data and common relocation scenarios. Actual costs depend on route, provider pricing, household choices, city, and timing. Not a legal or financial guarantee.",
      { width: CONTENT_WIDTH, align: "left" }
    );
    doc.moveDown(0.8);
    doc.text("Recommended next steps: Moving Checklist, First 90 Days planner, Cost of Moving guide, Documents Needed.", { width: CONTENT_WIDTH });
    doc.fillColor("#000000");

    const range = doc.bufferedPageRange();
    for (let i = 0; i < range.count; i++) {
      doc.switchToPage(i);
      doc.fontSize(9).font("Helvetica").fillColor("#6b7280");
      doc.text(
        `Page ${i + 1} of ${range.count} · ExpatCopilot`,
        MARGIN,
        PAGE_HEIGHT - BOTTOM_MARGIN + 10,
        { align: "center", width: CONTENT_WIDTH }
      );
      doc.fillColor("#000000");
    }

    doc.end();
    const buffer = await streamToBuffer(doc);
    const filename = "relocation-cost-estimate-netherlands.pdf";

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

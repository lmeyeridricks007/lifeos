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
const BOTTOM_MARGIN = 45;

type TimelineSegmentPayload = { title: string; rangeLabel: string; actions: string[] };

type Payload = {
  result: {
    overallTimelineLabel: string;
    lowEstimateDays: number;
    highEstimateDays: number;
    officialDecisionPeriod: { label: string; days: number; sourceHref: string };
    totalPrepEstimate: { lowDays: number; highDays: number };
    postApprovalEstimate: { lowDays: number; highDays: number };
    phaseBreakdown: Array<{ stepTitle: string; timingEstimate: string; whyItMatters: string; group: string }>;
    keyBottlenecks: Array<{ id: string; label: string; description: string }>;
    urgencyWarnings: string[];
    personalizedNextSteps: Array<{ label: string; href?: string }>;
    targetMoveRealistic: string;
  };
  answers?: { primaryRoute?: string; countryCode?: string };
  timelineSegments?: TimelineSegmentPayload[];
};

type Doc = InstanceType<typeof PDFDocument>;

function ensureSpace(doc: Doc, need: number) {
  if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - need) doc.addPage();
}

function sectionTitle(doc: Doc, title: string) {
  ensureSpace(doc, 50);
  doc.fontSize(13).font("Helvetica-Bold").fillColor("#111827").text(title, { width: CONTENT_WIDTH });
  doc.moveDown(0.35);
  doc.font("Helvetica").fontSize(10).fillColor("#000000");
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Payload;
    const { result, answers = {}, timelineSegments = [] } = body;

    if (!result?.overallTimelineLabel) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const doc = new PDFDocument({ size: "A4", margin: MARGIN, bufferPages: true });

    doc.fontSize(22).font("Helvetica-Bold").fillColor("#111827").text("Visa Timeline Estimate", {
      align: "center",
      width: CONTENT_WIDTH,
    });
    doc.moveDown(0.4);
    doc.fontSize(10).font("Helvetica").fillColor("#6b7280").text("Netherlands – planning only. Confirm with IND and official sources.", {
      align: "center",
      width: CONTENT_WIDTH,
    });
    doc.moveDown(1.2);
    doc.fillColor("#000000");

    if (answers?.primaryRoute || answers?.countryCode) {
      doc.fontSize(10).font("Helvetica").fillColor("#4b5563");
      const parts: string[] = [];
      if (answers.primaryRoute) parts.push(`Route: ${String(answers.primaryRoute).replace(/-/g, " ")}`);
      if (answers.countryCode) parts.push(`Country: ${String(answers.countryCode).replace(/-/g, " ")}`);
      doc.text(parts.join("  ·  "), { width: CONTENT_WIDTH });
      doc.moveDown(0.6);
      doc.fillColor("#000000");
    }

    sectionTitle(doc, "Summary");
    doc.fontSize(10).font("Helvetica");
    doc.font("Helvetica-Bold").text("Total timeline: " + result.overallTimelineLabel, { width: CONTENT_WIDTH });
    doc.font("Helvetica").moveDown(0.25);
    doc.text(`Approx. ${Math.round(result.lowEstimateDays / 30)}–${Math.round(result.highEstimateDays / 30)} months`, { width: CONTENT_WIDTH });
    doc.moveDown(0.4);
    doc.text(`Official decision period: Up to ${result.officialDecisionPeriod.days} days`, { width: CONTENT_WIDTH });
    doc.moveDown(0.2);
    const prep = result.totalPrepEstimate;
    if (prep.lowDays > 0 || prep.highDays > 0) {
      doc.text(`Prep before submission: ${Math.round(prep.lowDays / 7)}–${Math.round(prep.highDays / 7)} weeks`, { width: CONTENT_WIDTH });
      doc.moveDown(0.2);
    }
    const post = result.postApprovalEstimate;
    if (post.lowDays > 0 || post.highDays > 0) {
      doc.text(`Post-approval move prep: ${Math.round(post.lowDays / 7)}–${Math.round(post.highDays / 7)} weeks`, { width: CONTENT_WIDTH });
    }
    doc.moveDown(0.8);

    if (result.targetMoveRealistic && result.targetMoveRealistic !== "unknown" && result.targetMoveRealistic !== "realistic" && result.urgencyWarnings?.length) {
      sectionTitle(doc, "Target date note");
      doc.fontSize(10).font("Helvetica").fillColor("#92400e").text(result.urgencyWarnings[0], { width: CONTENT_WIDTH });
      doc.fillColor("#000000");
      doc.moveDown(0.6);
    }

    if (timelineSegments.length > 0) {
      sectionTitle(doc, "Your timeline: when what should happen");
      for (const seg of timelineSegments) {
        ensureSpace(doc, 40);
        doc.font("Helvetica-Bold").fontSize(10).text(seg.title, { width: CONTENT_WIDTH });
        doc.font("Helvetica").fillColor("#4b5563").fontSize(9).text(seg.rangeLabel, { width: CONTENT_WIDTH });
        doc.fillColor("#000000");
        doc.moveDown(0.2);
        for (const action of seg.actions) {
          doc.fontSize(9).text(`• ${action}`, { width: CONTENT_WIDTH, indent: 10 });
          doc.moveDown(0.15);
        }
        doc.moveDown(0.4);
      }
      doc.moveDown(0.3);
    }

    if (result.phaseBreakdown?.length) {
      sectionTitle(doc, "Timeline by phase");
      for (const p of result.phaseBreakdown) {
        ensureSpace(doc, 36);
        doc.font("Helvetica-Bold").fontSize(10).text(p.stepTitle, { width: CONTENT_WIDTH });
        doc.font("Helvetica").fillColor("#4b5563").fontSize(9).text(p.timingEstimate, { width: CONTENT_WIDTH });
        doc.fillColor("#000000");
        if (p.whyItMatters) {
          doc.moveDown(0.1);
          doc.fontSize(9).fillColor("#6b7280").text(`Why: ${p.whyItMatters}`, { width: CONTENT_WIDTH });
          doc.fillColor("#000000");
        }
        doc.moveDown(0.35);
      }
      doc.moveDown(0.4);
    }

    if (result.keyBottlenecks?.length) {
      sectionTitle(doc, "What could slow you down");
      for (const b of result.keyBottlenecks) {
        ensureSpace(doc, 32);
        doc.font("Helvetica-Bold").fontSize(10).text(`• ${b.label}`, { width: CONTENT_WIDTH });
        doc.font("Helvetica").fontSize(9).fillColor("#4b5563").text(b.description, { width: CONTENT_WIDTH });
        doc.fillColor("#000000");
        doc.moveDown(0.3);
      }
      doc.moveDown(0.4);
    }

    if (result.personalizedNextSteps?.length) {
      sectionTitle(doc, "Next steps");
      for (const step of result.personalizedNextSteps) {
        ensureSpace(doc, 24);
        doc.fontSize(10).text(`• ${step.label}${step.href ? ` – ${step.href}` : ""}`, { width: CONTENT_WIDTH });
        doc.moveDown(0.25);
      }
      doc.moveDown(0.4);
    }

    ensureSpace(doc, 36);
    doc.fontSize(9).font("Helvetica").fillColor("#6b7280");
    doc.text(
      "This estimate is for planning only. It is not legal advice. Always confirm timelines and requirements with the IND and official sources.",
      { width: CONTENT_WIDTH }
    );
    doc.fillColor("#000000");

    const range = doc.bufferedPageRange();
    for (let i = 0; i < range.count; i++) {
      doc.switchToPage(i);
      doc.fontSize(9).font("Helvetica").fillColor("#9ca3af");
      doc.text(
        `Page ${i + 1} of ${range.count}  ·  ExpatLife Visa Timeline Estimator`,
        MARGIN,
        PAGE_HEIGHT - BOTTOM_MARGIN + 12,
        { align: "center", width: CONTENT_WIDTH }
      );
      doc.fillColor("#000000");
    }

    doc.end();
    const buffer = await streamToBuffer(doc);
    const filename = "netherlands-visa-timeline-estimate.pdf";

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

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
const CHECKBOX_WIDTH = 28;
const TASK_INDENT = 32;

type TaskPayload = { id: string; title: string; explanation?: string; whyItMatters?: string };
type CostMilestonePayload = { id: string; label: string; description: string; when?: string };
type RiskFlagPayload = { id: string; label: string; description: string };

type Payload = {
  result: {
    personalizedSummary: string[];
    priorityTasksNow: TaskPayload[];
    nextTasks: TaskPayload[];
    laterTasks: TaskPayload[];
    costMilestones: CostMilestonePayload[];
    riskFlags: RiskFlagPayload[];
  };
  completedTaskIds: Record<string, boolean>;
  answers?: { primaryRoute?: string; countryCode?: string };
};

type Doc = InstanceType<typeof PDFDocument>;

function ensureSpace(doc: Doc, need: number) {
  if (doc.y > PAGE_HEIGHT - BOTTOM_MARGIN - need) doc.addPage();
}

function sectionTitle(doc: Doc, title: string) {
  ensureSpace(doc, 60);
  doc.fontSize(13).font("Helvetica-Bold").fillColor("#111827").text(title, { width: CONTENT_WIDTH });
  doc.moveDown(0.35);
  doc.font("Helvetica").fontSize(10).fillColor("#000000");
}

function addTaskSection(
  doc: Doc,
  title: string,
  tasks: TaskPayload[],
  completed: Record<string, boolean>
) {
  if (tasks.length === 0) return;
  sectionTitle(doc, title);
  const leftEdge = MARGIN + TASK_INDENT;
  const titleWidth = CONTENT_WIDTH - TASK_INDENT - CHECKBOX_WIDTH;

  for (const t of tasks) {
    ensureSpace(doc, 55);
    const done = Boolean(completed[t.id]);
    const startY = doc.y;

    doc.fontSize(10);
    doc.font("Helvetica").fillColor(done ? "#6b7280" : "#111827");
    doc.text(done ? "[x]" : "[ ]", leftEdge, startY);
    doc.font(done ? "Helvetica" : "Helvetica-Bold");
    doc.text(t.title, leftEdge + CHECKBOX_WIDTH, startY, { width: titleWidth });
    doc.fillColor("#000000").font("Helvetica");

    if (t.explanation) {
      doc.moveDown(0.2);
      doc.fontSize(9).fillColor("#4b5563");
      doc.text(t.explanation, { width: CONTENT_WIDTH, indent: TASK_INDENT });
      doc.fillColor("#000000");
    }
    if (t.whyItMatters) {
      doc.moveDown(0.15);
      doc.fontSize(9).fillColor("#6b7280");
      doc.text(`Why: ${t.whyItMatters}`, { width: CONTENT_WIDTH, indent: TASK_INDENT });
      doc.fillColor("#000000");
    }
    doc.moveDown(0.5);
  }
  doc.moveDown(0.4);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Payload;
    const { result, completedTaskIds = {}, answers } = body;

    if (!result?.personalizedSummary) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const doc = new PDFDocument({ size: "A4", margin: MARGIN, bufferPages: true });

    doc.fontSize(22).font("Helvetica-Bold").fillColor("#111827").text("Visa Application Plan", {
      align: "center",
      width: CONTENT_WIDTH,
    });
    doc.moveDown(0.4);
    doc.fontSize(10).font("Helvetica").fillColor("#6b7280").text("Netherlands – planning only. Confirm requirements with IND and official sources.", {
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
    for (const line of result.personalizedSummary) {
      ensureSpace(doc, 30);
      doc.text(`• ${line}`, { width: CONTENT_WIDTH });
      doc.moveDown(0.35);
    }
    doc.moveDown(0.8);

    doc.fontSize(14).font("Helvetica-Bold").fillColor("#111827").text("Your timeline", { width: CONTENT_WIDTH });
    doc.moveDown(0.5);
    doc.font("Helvetica").fontSize(10).fillColor("#000000");

    addTaskSection(doc, "Do now", result.priorityTasksNow ?? [], completedTaskIds);
    addTaskSection(doc, "Next", result.nextTasks ?? [], completedTaskIds);
    addTaskSection(doc, "Later", result.laterTasks ?? [], completedTaskIds);

    if (result.costMilestones?.length) {
      ensureSpace(doc, 100);
      doc.fontSize(14).font("Helvetica-Bold").fillColor("#111827").text("Cost and document milestones", {
        width: CONTENT_WIDTH,
      });
      doc.moveDown(0.5);
      doc.font("Helvetica").fontSize(10).fillColor("#000000");
      for (const m of result.costMilestones) {
        ensureSpace(doc, 48);
        doc.font("Helvetica-Bold").text(m.label, { width: CONTENT_WIDTH });
        doc.font("Helvetica").fillColor("#4b5563").text(m.description, { width: CONTENT_WIDTH });
        if (m.when) {
          doc.moveDown(0.1);
          doc.fontSize(9).fillColor("#6b7280").text(`When: ${m.when}`, { width: CONTENT_WIDTH });
          doc.fillColor("#000000").fontSize(10);
        }
        doc.fillColor("#000000");
        doc.moveDown(0.45);
      }
      doc.moveDown(0.5);
    }

    if (result.riskFlags?.length) {
      ensureSpace(doc, 90);
      doc.fontSize(14).font("Helvetica-Bold").fillColor("#111827").text("Potential bottlenecks", {
        width: CONTENT_WIDTH,
      });
      doc.moveDown(0.5);
      doc.font("Helvetica").fontSize(10).fillColor("#000000");
      for (const f of result.riskFlags) {
        ensureSpace(doc, 40);
        doc.font("Helvetica-Bold").text(`• ${f.label}`, { width: CONTENT_WIDTH });
        doc.font("Helvetica").fillColor("#4b5563").text(f.description, { width: CONTENT_WIDTH });
        doc.fillColor("#000000");
        doc.moveDown(0.35);
      }
      doc.moveDown(0.5);
    }

    ensureSpace(doc, 36);
    doc.fontSize(9).font("Helvetica").fillColor("#6b7280");
    doc.text(
      "This plan is for planning only. It is not legal advice. Always confirm steps, documents, and timelines with the IND and official sources.",
      { width: CONTENT_WIDTH }
    );
    doc.fillColor("#000000");

    const range = doc.bufferedPageRange();
    for (let i = 0; i < range.count; i++) {
      doc.switchToPage(i);
      doc.fontSize(9).font("Helvetica").fillColor("#9ca3af");
      doc.text(
        `Page ${i + 1} of ${range.count}  ·  ExpatLife Visa Application Plan`,
        MARGIN,
        PAGE_HEIGHT - BOTTOM_MARGIN + 12,
        { align: "center", width: CONTENT_WIDTH }
      );
      doc.fillColor("#000000");
    }

    doc.end();
    const buffer = await streamToBuffer(doc);
    const filename = "netherlands-visa-application-plan.pdf";

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

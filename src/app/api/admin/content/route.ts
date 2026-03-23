import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getContent, saveContent, SiteContent } from "@/lib/data";

export async function GET() {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const content = getContent();
    return NextResponse.json(content);
  } catch (error) {
    console.error("[GET /api/admin/content]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await request.json() as Partial<SiteContent>;
    const existing = getContent();
    // Deep merge: top-level keys are objects, so spread each section individually
    const updated: SiteContent = {
      ...existing,
      ...body,
      hero: { ...existing.hero, ...(body.hero ?? {}) },
      mission: { ...existing.mission, ...(body.mission ?? {}) },
      contact: { ...existing.contact, ...(body.contact ?? {}) },
      // Arrays are replaced entirely if provided, otherwise kept as-is
      stats: body.stats ?? existing.stats,
      partners: body.partners ?? existing.partners,
    };
    saveContent(updated);
    return NextResponse.json(updated);
  } catch (error) {
    console.error("[POST /api/admin/content]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

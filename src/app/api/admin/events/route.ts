import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getEvents, saveEvents, nextId, SiteEvent } from "@/lib/data";

export async function GET() {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const events = getEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error("[GET /api/admin/events]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await request.json() as Omit<SiteEvent, "id">;
    const events = getEvents();
    const newEvent: SiteEvent = { ...body, id: nextId(events) };
    events.push(newEvent);
    saveEvents(events);
    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error("[POST /api/admin/events]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

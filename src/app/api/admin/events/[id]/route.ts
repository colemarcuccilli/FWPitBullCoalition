import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getEvents, saveEvents, SiteEvent } from "@/lib/data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { id } = await params;
    const events = getEvents();
    const event = events.find((e) => e.id === id);
    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json(event);
  } catch (error) {
    console.error("[GET /api/admin/events/[id]]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { id } = await params;
    const body = await request.json() as Partial<SiteEvent>;
    const events = getEvents();
    const index = events.findIndex((e) => e.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    events[index] = { ...events[index], ...body, id };
    saveEvents(events);
    return NextResponse.json(events[index]);
  } catch (error) {
    console.error("[PUT /api/admin/events/[id]]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { id } = await params;
    const events = getEvents();
    const index = events.findIndex((e) => e.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    events.splice(index, 1);
    saveEvents(events);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[DELETE /api/admin/events/[id]]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

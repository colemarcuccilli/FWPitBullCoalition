import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getDogs, saveDogs, Dog } from "@/lib/data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { id } = await params;
    const dogs = getDogs();
    const dog = dogs.find((d) => d.id === id);
    if (!dog) {
      return NextResponse.json({ error: "Dog not found" }, { status: 404 });
    }
    return NextResponse.json(dog);
  } catch (error) {
    console.error("[GET /api/admin/dogs/[id]]", error);
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
    const body = await request.json() as Partial<Dog>;
    const dogs = getDogs();
    const index = dogs.findIndex((d) => d.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Dog not found" }, { status: 404 });
    }
    dogs[index] = { ...dogs[index], ...body, id };
    saveDogs(dogs);
    return NextResponse.json(dogs[index]);
  } catch (error) {
    console.error("[PUT /api/admin/dogs/[id]]", error);
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
    const dogs = getDogs();
    const index = dogs.findIndex((d) => d.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Dog not found" }, { status: 404 });
    }
    dogs.splice(index, 1);
    saveDogs(dogs);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[DELETE /api/admin/dogs/[id]]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

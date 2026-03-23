import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getDogs, saveDogs, nextId, Dog } from "@/lib/data";

export async function GET() {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const dogs = getDogs();
    return NextResponse.json(dogs);
  } catch (error) {
    console.error("[GET /api/admin/dogs]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await request.json() as Omit<Dog, "id">;
    const dogs = getDogs();
    const newDog: Dog = { ...body, id: nextId(dogs) };
    dogs.push(newDog);
    saveDogs(dogs);
    return NextResponse.json(newDog, { status: 201 });
  } catch (error) {
    console.error("[POST /api/admin/dogs]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

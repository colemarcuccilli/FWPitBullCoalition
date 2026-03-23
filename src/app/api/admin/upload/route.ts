import { NextResponse } from "next/server";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { isAuthenticated } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Cast to File to access the name property (File extends Blob)
    const uploadedFile = file as File;
    const originalName = uploadedFile.name ?? "upload";

    // Sanitize the original filename: strip path separators and limit length
    const safeName = path
      .basename(originalName)
      .replace(/[^a-zA-Z0-9._-]/g, "_")
      .slice(0, 200);

    const filename = `${Date.now()}_${safeName}`;
    const uploadsDir = path.join(process.cwd(), "public", "uploads");

    // Ensure the uploads directory exists
    await mkdir(uploadsDir, { recursive: true });

    const buffer = Buffer.from(await uploadedFile.arrayBuffer());
    await writeFile(path.join(uploadsDir, filename), buffer);

    return NextResponse.json({ url: `/uploads/${filename}` }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/admin/upload]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

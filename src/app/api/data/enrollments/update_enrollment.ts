import connect from "@/app/lib/db";
import { checkAdmin } from "./enrollment_Session";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// 3. PATCH: Update enrollment status (e.g., active -> completed)
export async function PATCH(req: Request) {
  const session = await checkAdmin();
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized: Admins Only" },
      { status: 401 },
    );
  }

  try {
    // 3. PATCH: Update enrollment status (e.g., active -> completed)b
    const { id, status } = await req.json();
    const { db } = await connect();
    await db
      .collection("enrollment")
      .updateOne(
        { _id: ObjectId.createFromHexString(id) },
        { $set: { status } },
      );
    return NextResponse.json({
      status: 200,
      message: "success",
    });
  } catch (error) {
    console.error("Enrollment PATCH API Error", error);
    return NextResponse.json(
      {
        error: "Enrollment update failed",
      },
      { status: 500 },
    );
  }
}

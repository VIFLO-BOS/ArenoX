import { NextResponse } from "next/server";
import { checkAdmin } from "./enrollment_Session";
import connect from "@/app/lib/db";
import { ObjectId } from "mongodb";

// Delete users enrollment
export async function DELETE(req: Request) {
  const session = await checkAdmin();
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized: Admins Only" },
      { status: 401 },
    );
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const { db } = await connect();
    await db
      .collection("enrollment")
      .deleteOne({ _id: ObjectId.createFromHexString(id as string) });
    console.log("Enrollment deleted successfully");
    return NextResponse.json({
      status: 200,
      message: "success",
    });
  } catch (error) {
    console.error("Enrollment DELETE API Error", error);
    return NextResponse.json(
      {
        error: "Enrollment delete failed",
      },
      { status: 500 },
    );
  }
}

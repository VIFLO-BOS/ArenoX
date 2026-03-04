import { checkAdmin } from "./enrollment_Session";
import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import { ObjectId } from "mongodb";


// 2. POST: Manually enroll a student
export async function POST(req: Request) {
  const session = await checkAdmin();
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized: Admins Only" },
      { status: 401 },
    );
  }

  try {
    const { userId, courseId } = await req.json();
    const { db } = await connect();
    const newEnrollment = {
      user_id: ObjectId.createFromHexString(userId),
      course_id: ObjectId.createFromHexString(courseId),
      status: "active",
      enrolledAt: new Date(),
    };
    await db.collection("enrollment").insertOne(newEnrollment);
    return NextResponse.json({
      status: 200,
      data: newEnrollment,
      message: "success",
    });
  } catch (error) {
    console.error("Enrollment API Error", error);
    return NextResponse.json(
      {
        error: "Enrollment failed",
      },
      { status: 500 },
    );
  }
}

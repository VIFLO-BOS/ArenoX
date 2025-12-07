import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { db } = await connect();
    const courseCollection = db.collection("courses");

    const formData = await req.formData();

    const courseData = Object.fromEntries(formData);

    if (
      !courseData.title ||
      typeof courseData.title !== "string" ||
      courseData.title.length < 10 ||
      courseData.title.length > 100
    ) {
      return new Response(JSON.stringify({ message: "Invalid title" }), {
        status: 400,
      });
    }

   

    const existing = await courseCollection.findOne({
      title: courseData.title,
    });
    if (existing) {
      return NextResponse.json(
        { message: "Course title already exit" },
        { status: 400 }
      );
    }

    const result = await courseCollection.insertOne(courseData);

    if (result) {
      return NextResponse.json(
        { message: "Course submitted successfully", data: courseData },
        { status: 201 } // 201 Created status
      );
    }
  } catch (error) {
    console.error("Error in POST /api/courses:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

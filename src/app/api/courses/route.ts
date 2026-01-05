import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/lib/db";

// @ post-handler : handle course creation requests
export async function POST(req: NextRequest) {
  try {
    // @ database-setup : connect to database and get courses collection
    const { db } = await connect();
    const courseCollection = db.collection("courses");

    // @ parse-form-data : extract course data from form submission
    const formData = await req.formData();
    const courseData = Object.fromEntries(formData);

    // @ validate-title : validate course title length and type
    if (
      !courseData.title ||
      typeof courseData.title !== "string" ||
      courseData.title.length < 10 ||
      courseData.title.length > 100
    ) {
      return NextResponse.json({ message: "Invalid title" }, { status: 400 });
    }

    // @ duplicate-check : check if course title already exists in database
    const existing = await courseCollection.findOne({
      title: courseData.title,
    });
    if (existing) {
      return NextResponse.json(
        { message: "Course title already exists" },
        { status: 400 }
      );
    }

    // @ database-insert : insert new course into database and return response
    const result = await courseCollection.insertOne(courseData);

    if (result.acknowledged) {
      return NextResponse.json(
        { message: "Course submitted successfully", data: courseData },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { message: "Failed to save courses" },
      { status: 500 }
    );
    // @ error-handling : catch and handle any errors during course creation
  } catch (error) {
    console.error("Error in POST /api/courses:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

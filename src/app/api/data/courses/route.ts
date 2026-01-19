import { NextResponse } from "next/server";
import connect from "@/app/lib/db";

export async function GET() {
  try {
    const { db } = await connect();
    const courses = await db.collection("course").find({}).toArray();

    // SUCCESS PATH
    return NextResponse.json({
      status: "success",
      data: courses,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);

    // ERROR PATH (Don't forget this!)
    return NextResponse.json(
      { status: "error", message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

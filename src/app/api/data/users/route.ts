import { NextResponse } from "next/server";
import connect from "@/app/lib/db";

export async function GET() {
  try {
    const { db } = await connect();
    const usersCollection = db.collection("user");
    const data = await usersCollection.find({}).toArray();

    return NextResponse.json(
      { status: "success", data: data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);

    return NextResponse.json(
      {
        status: "error",
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

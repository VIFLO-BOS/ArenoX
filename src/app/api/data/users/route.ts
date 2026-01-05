import { NextResponse } from "next/server";
import connect from "@/app/lib/db";

// @ get-handler : fetch all users from database
export async function GET() {
  try {
    // @ database-query : connect to database and retrieve all users
    const { db } = await connect();
    const usersCollection = db.collection("user");
    const data = await usersCollection.find({}).toArray();

    // @ success-response : return users data with success status
    return NextResponse.json(
      { status: "success", data: data },
      { status: 200 }
    );
    // @ error-handling : catch and return error response
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

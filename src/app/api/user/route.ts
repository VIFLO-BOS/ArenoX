import connect from "@/app/lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    console.log("Received body:", body); // Good for debugging

    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { message: "Missing required field: id" },
        { status: 400 }
      );
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { message: "No fields provided for update" },
        { status: 400 }
      );
    }

    // Convert string ID to MongoDB ObjectId
    let objectId;
    try {
      objectId = ObjectId.createFromHexString(id); 
    } catch (error) {
      return NextResponse.json(
        { message: "Invalid user ID format" },
        { status: 400 }
      );
    }

    const { db } = await connect();

    const result = await db.collection("user").updateOne(
      { _id: objectId }, // ← Correct: use objectId instance
      { $set: updates } // ← Dynamic updates — perfect!
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

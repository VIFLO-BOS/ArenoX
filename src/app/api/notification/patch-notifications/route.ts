import connect from "@/app/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// @ get-contacts : fetch users that can be contacted (excluding current user)
export async function PATCH(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const currentUserId = searchParams.get("currentUserId");

    const { db } = await connect();
    const userCollection = db.collection("users");

    // @ query-users : get all users except the current one
    const query =
      currentUserId && ObjectId.isValid(currentUserId)
        ? { _id: { $ne: new ObjectId(currentUserId) } }
        : {};

    const users = await userCollection
      .find(query)
      .project({
        id: 1,
        name: 1,
        email: 1,
        image: 1,
        role: 1,
      })
      .limit(100)
      .toArray();

    return NextResponse.json(
      { status: "success", data: users },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to fetch contacts" },
      { status: 500 },
    );
  }
}

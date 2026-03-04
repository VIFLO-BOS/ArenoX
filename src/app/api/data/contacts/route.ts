import connect from "@/app/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// @ get-contacts : fetch users that can be contacted (excluding current user)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const currentUserId = searchParams.get("currentUserId");
    const currentUserRole = searchParams.get("role");

    console.log("currentUserId", currentUserId);

    const { db } = await connect();
    const userCollection = db.collection("user"); // Use 'users' collection as per original logic

    // @ query-users : get all users except the current one
    let query: any = {};
    if (currentUserId && ObjectId.isValid(currentUserId)) {
      query._id = { $ne: new ObjectId(currentUserId) };
    }

    // If the user is NOT admin, only show the admin
    if (currentUserRole !== "admin") {
      query.role = "admin";
    }

    console.log("query", query);

    const users = await userCollection
      .find(query)
      .project({
        _id: 1,
        name: 1,
        email: 1,
        image: 1,
        role: 1,
      })
      .limit(100)
      .toArray();

    const contacts = users.map((user) => ({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      image: user.image,
      role: user.role,
    }));

    console.log("contacts", contacts);

    return NextResponse.json(
      { status: "success", data: contacts },
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

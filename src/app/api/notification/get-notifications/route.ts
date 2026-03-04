import connect from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

// @ get-notifications: fetch all notifications for a user
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return Response.json({ message: "User ID is required" }, { status: 400 });
    }

    const { db } = await connect();
    const notificationCollection = await db.collection("notifications");

    //   @ query-notificcations : get user's notifications, newest first

    const notifications = await notificationCollection
      .find({ userId })
      .sort({ timestamp: -1 })
      .limit(50)
      .toArray();

    return NextResponse.json(
      { status: "success", notifications },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return NextResponse.json(
      { message: "Failed to fetch notifications" },
      { status: 500 },
    );
  }
}

import connect from "@/app/lib/db";
import { NotificationInput } from "@/utils/types/message/notification";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// @ get-notifications: fetch all notifications for a user
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 },
      );
    }

    const { db } = await connect();
    const notificationCollection = db.collection("notifications");

    // @ query-notifications : get user's notifications, newest first
    const notifications = await notificationCollection
      .find({ userId })
      .sort({ timestamp: -1 })
      .limit(50)
      .toArray();

    return NextResponse.json(
      { status: "success", data: notifications },
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

// @ post-notifications: create a new notification
export async function POST(req: NextRequest) {
  try {
    const body: NotificationInput = await req.json();

    if (!body.userId || !body.title || !body.message) {
      return NextResponse.json(
        { status: "Error", message: "Missing required fields" },
        { status: 400 },
      );
    }

    const { db } = await connect();
    const notificationCollection = db.collection("notifications");

    const notificationToInsert = {
      ...body,
      type: body.type || "info",
      timestamp: new Date(),
      isRead: false,
    };

    const result = await notificationCollection.insertOne(notificationToInsert);

    return NextResponse.json(
      {
        status: "success",
        data: { ...notificationToInsert, _id: result.insertedId },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating notification:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to create notification" },
      { status: 500 },
    );
  }
}

// @ patch-notifications: mark notifications as read
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { notificationIds, userId, markAllRead } = body;

    const { db } = await connect();
    const notificationCollection = db.collection("notifications");

    if (markAllRead && userId) {
      await notificationCollection.updateMany(
        { userId, isRead: false },
        { $set: { isRead: true } },
      );
      return NextResponse.json({
        status: "success",
        message: "All marked as read",
      });
    }

    if (notificationIds && Array.isArray(notificationIds)) {
      const objectIds = notificationIds
        .filter((id: string) => ObjectId.isValid(id))
        .map((id: string) => new ObjectId(id));

      if (objectIds.length > 0) {
        await notificationCollection.updateMany(
          { _id: { $in: objectIds } },
          { $set: { isRead: true } },
        );
      }
      return NextResponse.json({
        status: "success",
        message: "Notifications marked as read",
      });
    }

    return NextResponse.json(
      { status: "error", message: "Invalid request" },
      { status: 400 },
    );
  } catch (error) {
    console.error("Error updating notifications:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to update notifications" },
      { status: 500 },
    );
  }
}

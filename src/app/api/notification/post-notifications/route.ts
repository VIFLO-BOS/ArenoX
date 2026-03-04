import connect from "@/app/lib/db";
import { NotificationInput } from "@/utils/types/message/notification";
import { NextRequest, NextResponse } from "next/server";

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
          {status:"error", message: "Failed to create notification"}, 
          {status: 500}
      )
  }
}

// @ get-messages : fetch messages between two users

import connect from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const contactId = searchParams.get("contactId");

    if (!userId || !contactId) {
      return NextResponse.json(
        {
          success: false,
          message: "User ID and Contact ID are required",
        },
        { status: 400 },
      );
    }

    const { db } = await connect();
    const messagesCollection = db.collection("messages");

    // @ query-messages : get all messages between these two users
    const messages = await messagesCollection
      .find({
        $or: [
          { senderId: userId, receiverId: contactId },
          { senderId: contactId, receiverId: userId },
        ],
      })
      .sort({ timestamp: 1 })
      .toArray();

    return NextResponse.json(
      {
        success: "success",
        data: messages,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("Error fetching messages:", error);
    return NextResponse.json(
      {
        messages: "Failed to fetch messages",
      },
      { status: 500 },
    );
  }
}

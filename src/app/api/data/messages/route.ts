import connect from "@/app/lib/db";
import { MessageInput } from "@/utils/types/message/message";
import { NextResponse } from "next/server";

// @ get-messages : fetch messages between two users
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
        status: "success",
        data: messages,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("Error fetching messages:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch messages",
      },
      { status: 500 },
    );
  }
}

// @ post-message : save a new message to the database
export async function POST(req: Request) {
  try {
    const body: MessageInput = await req.json();

    // @ validate-input : ensure required fields are present
    if (!body.senderId || !body.receiverId || !body.message) {
      return NextResponse.json(
        { status: "error", message: "Missing required fields" },
        { status: 400 },
      );
    }

    const { db } = await connect();
    const messagesCollection = db.collection("messages");

    // @ insert-message : save messsage with timestamp
    const messageToInsert = {
      ...body,
      timestamp: new Date(),
      isRead: false,
    };

    const result = await messagesCollection.insertOne(messageToInsert);

    return NextResponse.json(
      {
        status: "success",
        data: { ...messageToInsert, _id: result.insertedId },
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("Error saving message:", error);
    return NextResponse.json(
      {
        message: "Failed to save message",
      },
      { status: 500 },
    );
  }
}

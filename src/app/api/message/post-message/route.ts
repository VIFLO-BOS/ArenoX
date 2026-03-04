import connect from "@/app/lib/db";
import { MessageInput } from "@/utils/types/message/message";
import { NextResponse } from "next/server";

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

    //   @ insert-message : save messsage with timestamp
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

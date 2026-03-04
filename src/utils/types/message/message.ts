import { ObjectId } from "mongodb";

// @ message-type : define message schema for the database
export interface MessageType {
  _id?: ObjectId;
  senderId: ObjectId;
  receiverId: ObjectId;
  message: string;
  timestamp: Date;
  isRead: boolean;
}

export type MessageInput = Omit<MessageType, "_id">

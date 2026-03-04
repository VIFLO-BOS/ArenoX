


// @mesage-interface : define message structure for the database

import { ObjectId } from "mongodb";

export type NotificationType = "info" | "warning" | "error" | "success";

export interface NotificationDBType {
    _id?: ObjectId;
    userId: ObjectId;
    title: string;
    message: string;
    type: NotificationType;
    isRead: boolean;
    link?: string;
}

// @ notification-input : type for creating new notifications
export type NotificationInput = Omit<NotificationDBType, "_id" | "createdAt" | "updatedAt">
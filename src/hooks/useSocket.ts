"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { io, Socket } from "socket.io-client";

// @ types : define message and notification strcuture
export interface Message {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

export interface Notification {
  _id: string;
  userId: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "server";
  link?: string;
  timestamp: string;
  isRead: boolean;
}

interface UseSocketOptions {
  userId: string;
  onNewMessage?: (message: Message) => void;
  onNewNotification?: (notification: Notification) => void;
  onTyping?: (userId: string) => void;
  onStopTyping?: (userId: string) => void;
}

export function useSocket({
  userId,
  onNewMessage,
  onNewNotification,
  onTyping,
  onStopTyping,
}: UseSocketOptions) {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const socketRef = useRef<Socket | null>(null);

  // @ socket-connection: establish socket connection
  useEffect(() => {
    // Initialize socket only once
    if (!socketRef.current) {
      socketRef.current = io("http://localhost:3001", {
        transports: ["websocket"],
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5,
      });
    }

    const socket = socketRef.current;

    // @ connection-events
    const onConnect = () => {
      console.log("Socket connected");
      setIsConnected(true);
      if (userId) {
        console.log("Joining room for user:", userId);
        socket.emit("join", userId);
      }
    };

    socket.on("connect", onConnect);

    // If already connected, manually trigger join logic
    if (socket.connected && userId) {
      onConnect();
    }

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
      setIsConnected(false);
    });

    socket.on("connectError", (error) => {
      console.log("Socket connection error", error);
      setIsConnected(false);
    });

    // @ message-events
    const onNewMessageReceived = (message: Message) => {
      console.log("New message received", message);
      setMessages((prev) => [...prev, message]);
      onNewMessage?.(message);
    };

    const onMessageSent = (message: Message) => {
      console.log("Message sent", message);
      setMessages((prev) => [...prev, message]);
    };

    // @ notification-events
    const onNewNotificationReceived = (notification: Notification) => {
      console.log("New notification received", notification);
      setNotifications((prev) => [...prev, notification]);
      onNewNotification?.(notification);
    };

    const onUserTyping = ({ userId }: { userId: string }) => {
      console.log("User typing", userId);
      onTyping?.(userId);
    };

    const onUserStopTyping = ({ userId }: { userId: string }) => {
      console.log("User stop typing", userId);
      onStopTyping?.(userId);
    };

    // Attach listeners
    socket.on("newMessage", onNewMessageReceived);
    socket.on("messageSent", onMessageSent);
    socket.on("newNotification", onNewNotificationReceived);
    socket.on("userTyping", onUserTyping);
    socket.on("userStopTyping", onUserStopTyping);

    // @ cleanup
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect"); // Remove all disconnect listeners
      socket.off("connectError"); // Remove all connectError listeners
      socket.off("newMessage", onNewMessageReceived);
      socket.off("messageSent", onMessageSent);
      socket.off("newNotification", onNewNotificationReceived);
      socket.off("userTyping", onUserTyping);
      socket.off("userStopTyping", onUserStopTyping);
      // Do NOT disconnect the socket here to persist connection across re-renders if intended
      // But based on previous logic, we might want to keep it.
      // For now, let's keep the connection alive but clean listeners.
    };
  }, [userId, onNewMessage, onNewNotification, onTyping, onStopTyping]);

  // @ send-message
  const sendMessage = useCallback(
    (receiverId: string, message: string) => {
      if (socketRef.current?.connected && userId) {
        socketRef.current.emit("send-message", {
          senderId: userId,
          receiverId,
          message,
        });
      }
    },
    [userId],
  );

  // @ send-notification : emit notification to server
  const sendNotification = useCallback(
    (
      targetUserId: string,
      title: string,
      message: string,
      type: Notification["type"] = "info",
    ) => {
      if (socketRef.current?.connected) {
        socketRef.current.emit("sendNotification", {
          userId: targetUserId,
          title,
          message,
          type,
        });
      }
    },
    [],
  );

  // @typing-indicators
  const emitTyping = useCallback(
    (receiverId: string) => {
      if (socketRef.current?.connected && userId) {
        socketRef.current.emit("typing", {
          senderId: userId,
          receiverId,
        });
      }
    },
    [userId],
  );

  // @stop-typing
  const emitStopTyping = useCallback(
    (receiverId: string) => {
      if (socketRef.current?.connected && userId) {
        socketRef.current.emit("stopTyping", {
          senderId: userId,
          receiverId,
        });
      }
    },
    [userId],
  );

  // @ load-history : fetch previous messages from API
  const loadMessageHistory = useCallback(
    async (contactId: string) => {
      if (!userId) return;
      try {
        const response = await fetch(
          `/api/data/messages?userId=${userId}&contactId=${contactId}`,
        );
        const result = await response.json();
        if (result.status === "success") {
          setMessages(result.data);
        }
      } catch (error) {
        console.error("Failed to load messages:", error);
      }
    },
    [userId],
  );

  // @ load-notifications : fetch notifications from API
  const loadNotifications = useCallback(async () => {
    if (!userId) return;
    try {
      const response = await fetch(`/api/data/notifications?userId=${userId}`);
      const result = await response.json();
      if (result.status === "success") {
        setNotifications(result.data);
      }
    } catch (error) {
      console.error("Failed to load notifications:", error);
    }
  }, [userId]);

  // @ mark-notification-read
  const markNotificationRead = useCallback(async (notificationId: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n._id === notificationId ? { ...n, isRead: true } : n)),
    );

    await fetch("/api/data/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notificationIds: [notificationId] }),
    });
  }, []);

  // @ mark-all-read
  const markAllNotificationsRead = useCallback(async () => {
    if (!userId) return;
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));

    await fetch("/api/data/notifications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, markAllRead: true }),
    });
  }, [userId]);

  return {
    isConnected,
    messages,
    notifications,
    sendMessage,
    sendNotification,
    emitTyping,
    emitStopTyping,
    loadMessageHistory,
    loadNotifications,
    markNotificationRead,
    markAllNotificationsRead,
    unreadNotificationCount: notifications.filter((n) => !n.isRead).length,
    unreadMessageCount: messages.filter((m) => !m.isRead && m.receiverId === userId).length,
  };
}

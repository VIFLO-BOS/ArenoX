import { createServer } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";

// @ type: define data structures for socket events
interface MessageData {
  senderId: string;
  receiverId: string; // Note: Keeping typo 'receieverId' to match frontend, but should ideally fix both
  message: string;
}

interface NotificationData {
  userId: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "server";
  link?: string;
}

// @http-server: create base HTTP server
const httpServer = createServer();

//  @ socket-server: initialize socket.IO with CORS cofig
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"], // Fixed typo htpp -> http
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// @ user-tracking: handle connected users by socket ID
const connectedUsers = new Map<string, string>();

//  @ connection-handler: handle new socket  connection
io.on("connection", (socket: Socket) => {
  console.log("socket connected:", socket.id);

  // @ join-event: user registers with their userId
  socket.on("join", (userId: string) => {
    connectedUsers.set(socket.id, userId);
    socket.join("user-" + userId); // create personal room
    console.log(`User ${userId} joined room user-${userId}`);

    // Notify user they are connected
    socket.emit("connected", { userId, socketId: socket.id });
  });

  // @ send-message: handle sending a message
  socket.on("send-message", async (data: MessageData) => {
    const { senderId, receiverId, message } = data;
    console.log(`Message from ${senderId} to ${receiverId}: ${message}`);

    //   @save-to-database : persist message via API
    try {
      const response = await fetch("http://localhost:3000/api/data/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId,
          receiverId,
          message,
        }),
      });

      const result = await response.json();

      if (result.status === "success") {
        const messageData = result.data;

        // @ emit-receiver:  send to receiver's room
        io.to(`user-${receiverId}`).emit("newMessage", messageData);

        // @ confirm-to-sender: send confirmation back
        socket.emit("messageSent", messageData);

        // @ send-notification : notify receiver about the new message
        try {
          const notifResponse = await fetch(
            "http://localhost:3000/api/data/notifications",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: receiverId,
                title: "New Message",
                message: message,
                type: "info",
              }),
            },
          );
          const notifResult = await notifResponse.json();
          if (notifResult.status === "success") {
            io.to(`user-${receiverId}`).emit(
              "newNotification",
              notifResult.data,
            );
          }
        } catch (notifError) {
          console.error("Failed to send message notification:", notifError);
        }

        // @ update-contact-list: notify both users to update their contact list
        io.to(`user-${senderId}`).emit("updateContactList", {
          userId: receiverId,
        });
        io.to(`user-${receiverId}`).emit("updateContactList", {
          userId: senderId,
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      socket.emit("messageError", { error: "Failed to send message" });
    }
  });

  // @send-notification: handle sending a notification
  socket.on("sendNotification", async (data: NotificationData) => {
    console.log(`Notification for ${data.userId}: ${data.title}`);

    // @ save-notification : persist notification via API
    try {
      const response = await fetch(
        "http://localhost:3000/api/data/notifications",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();
      if (result.status === "success") {
        // @ emit-notification : send to user's room
        io.to(`user-${data.userId}`).emit("newNotification", result.data);
      }
    } catch (error) {
      console.error("Failed to save notification:", error);
    }
  });

  // @ typing-indicator : notify when user is typing
  socket.on("typing", (data: { senderId: string; receiverId: string }) => {
    io.to(`user-${data.receiverId}`).emit("userTyping", {
      userId: data.senderId,
    });
  });

  // @ stop-typing : notify when user stops typing
  socket.on("stopTyping", (data: { senderId: string; receiverId: string }) => {
    io.to(`user-${data.receiverId}`).emit("userStopTyping", {
      userId: data.senderId,
    });
  });

  // @ disconnect-handler : cleanup when user disconnects
  socket.on("disconnect", () => {
    const userId = connectedUsers.get(socket.id);
    connectedUsers.delete(socket.id);
    console.log(`❌ User ${userId || socket.id} disconnected`);
  });
});

// @ start-server : listen on port 3001
const PORT = process.env.SOCKET_PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`🔌 Socket.IO server running on http://localhost:${PORT}`);
});

export { io };

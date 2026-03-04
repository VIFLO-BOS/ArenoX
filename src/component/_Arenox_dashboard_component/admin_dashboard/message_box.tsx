"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSocket, Message } from "@/hooks/useSocket";
import { useContacts, Contact } from "@/hooks/useContacts";
import { authClient } from "@/app/lib/auth-client";
import Image from "next/image";

interface MessageBoxProps {
  toggleTab: (tab: "message" | "notification") => void;
}

export default function Message_box({ toggleTab }: MessageBoxProps) {
  // @ session : get current user
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id || "";
  const userRole = (session?.user as any)?.role || "";

  // @ state
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // @ contacts : fetch real users from database
  const { contacts, loading: contactsLoading } = useContacts(userId, userRole);

  // @ socket : real-time messaging
  const {
    messages,
    isConnected,
    sendMessage,
    loadMessageHistory,
    emitTyping,
    emitStopTyping,
  } = useSocket({
    userId,
    onNewMessage: (message) => {
      // Could play a sound here
      console.log("📨 New message received");
    },
    onTyping: (typingUserId) => {
      if (typingUserId === selectedContact?.id) {
        setIsTyping(true);
      }
    },
    onStopTyping: () => {
      setIsTyping(false);
    },
  });

  // @ auto-select : select first contact when contacts load
  useEffect(() => {
    if (contacts.length > 0 && !selectedContact) {
      setSelectedContact(contacts[0]);
    }
  }, [contacts, selectedContact]);

  // @ load-history : load messages when contact is selected
  useEffect(() => {
    if (selectedContact) {
      loadMessageHistory(selectedContact.id);
      setIsTyping(false);
    }
  }, [selectedContact, loadMessageHistory]);

  // @ scroll-to-bottom : auto-scroll when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [messages]);

  // @ filter-messages : get messages for selected contact
  const filteredMessages = selectedContact
    ? messages.filter(
        (m) =>
          (m.senderId === userId && m.receiverId === selectedContact.id) ||
          (m.senderId === selectedContact.id && m.receiverId === userId),
      )
    : [];

  // @ handle-send : send message
  const handleSend = () => {
    if (inputMessage.trim() && selectedContact) {
      sendMessage(selectedContact.id, inputMessage.trim());
      setInputMessage("");
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      emitStopTyping(selectedContact.id);
    }
  };

  // @ handle-typing : emit typing events
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);

    if (selectedContact) {
      emitTyping(selectedContact.id);

      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      typingTimeoutRef.current = setTimeout(() => {
        emitStopTyping(selectedContact.id);
      }, 2000);
    }
  };

  // @ handle-key-press : send on Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // @ format-time : display time nicely
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // @ avatar-helper : get avatar source
  const getAvatar = (image?: string) => {
    return image && image.startsWith("http") ? image : "/images/avatar.png";
  };

  // email component mounting
  const [sendAsEmail, setSendAsEmail] = useState(false);

  const handleEmailSend = async () => {
    // always send as in-app message
    sendMessage(selectedContact?.id as string, inputMessage.trim());

    //also send as email if toggled on
    if (sendAsEmail && selectedContact?.email) {
      await fetch("/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: selectedContact.email,
          subject: "New message from Arenox Admin",
          message: inputMessage.trim(),
          fromName: session?.user?.name || "Admin",
        }),
      });
    }
    setInputMessage("");
  };

  const { unreadMessageCount } = useSocket({
    userId: userId || "",
    onNewNotification: (notification) => {
      // Play sound or show toast notification
      if (typeof window !== "undefined" && "Notification" in window) {
        if (window.Notification.permission === "granted") {
          new window.Notification(notification.title, {
            body: notification.message,
          });
        }
      }
    },
  });

  return (
    <div className="bg-white dark:bg-var(--bg-card) rounded-xl shadow-lg  overflow-hidden w-xl">
      {/* Header */}
      <div className="bg-linear-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="bi bi-chat-dots-fill text-white"></i>
            <h3 className="text-white! font-semibold">Messages</h3>
            {unreadMessageCount > 0 && (
              <span className="badge-danger text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                {unreadMessageCount}
              </span>
            )}
          </div>
          <button
            onClick={() => toggleTab("message")}
            className="text-white/80 hover:text-white transition-colors"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="flex items-center gap-1 mt-2 text-xs text-white/70">
          <span
            className={`w-2 h-2 rounded-full ${
              isConnected
                ? "bg-green-400 dark:bg-green-500"
                : "bg-red-400 dark:bg-red-500"
            }`}
          ></span>
          {isConnected ? "Connected" : "Reconnecting..."}
        </div>
      </div>

      <div className="flex h-100">
        {/* Contacts Sidebar */}
        <div className=" border-r border-gray-100 overflow-y-auto">
          {contactsLoading ? (
            <div className="p-4 text-center text-gray-400 dark:text-gray-500 text-sm">
              Loading...
            </div>
          ) : (
            contacts.map((contact, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedContact(contact)}
                className={`p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                  selectedContact?.id === contact.id ? "bg-indigo-50 dark:bg-indigo-900" : ""
                }`}
              >
                <Image
                  src={getAvatar(contact.image)}
                  width={32}
                  height={32}
                  alt={contact.name}
                  className="rounded-full"
                />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-800 dark:text-white truncate">
                    {contact.name}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedContact ? (
            <>
              {/* Chat Header */}
              <div className="p-2 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2">
                <Image
                  src={getAvatar(selectedContact.image)}
                  width={28}
                  height={28}
                  alt={selectedContact.name}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">
                    {selectedContact.name}
                  </p>
                  {isTyping && (
                    <p className="text-xs text-indigo-500 animate-pulse">
                      Typing...
                    </p>
                  )}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 dark:bg-[var(--bg-section)]">
                {filteredMessages.length === 0 ? (
                  <div className="text-center text-gray-400 text-xs mt-8">
                    <i className="bi bi-chat-text text-2xl mb-2 block"></i>
                    Start a conversation
                  </div>
                ) : (
                  filteredMessages.map((msg) => (
                    <div
                      key={msg._id}
                      className={`flex ${
                        msg.senderId === userId
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                          msg.senderId === userId
                            ? "bg-indigo-500 dark:bg-indigo-600 text-white rounded-br-md"
                            : "bg-white dark:bg-var(--bg-card) text-gray-800 dark:text-white rounded-bl-md shadow-sm"
                        }`}
                      >
                        <p>{msg.message}</p>
                        <p
                          className={`text-[10px] mt-1 ${
                            msg.senderId === userId
                              ? "text-indigo-200"
                              : "text-gray-400"
                          }`}
                        >
                          {formatTime(msg.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm bg-gray-50">
              Select a contact to start messaging
            </div>
          )}

          {/* Input - Always Visible */}
          <div className="p-2 border-t border-gray-100 flex gap-2 bg-white">
            <input
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              onKeyUp={handleKeyPress}
              placeholder={
                selectedContact ? "Type a message..." : "Select a contact first"
              }
              disabled={!selectedContact}
              className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-indigo-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <button
              onClick={sendAsEmail ? handleEmailSend : handleSend}
              disabled={
                !inputMessage.trim() || !isConnected || !selectedContact
              }
              className="px-3 py-1.5 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <i className="bi bi-send-fill text-sm"></i>
            </button>
            <button
              onClick={() => setSendAsEmail(!sendAsEmail)}
              className={`p-3 rounded-full transition-all ${sendAsEmail ? "bg-green-500 text white" : "bg-gray-200 text-gray-500"}`}
            >
              <i className="bi bi-envelope-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
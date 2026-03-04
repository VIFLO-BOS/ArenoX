"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSocket, Message } from "@/hooks/useSocket";
import { useContacts, Contact } from "@/hooks/useContacts";
import { authClient } from "@/app/lib/auth-client";
import Image from "next/image";

export default function Admin_message() {
  // @ session : get current user
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id || "";
  const userRole = (session?.user as any)?.role || "";

  // @ state
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [inputMessage, setInputMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // @ contacts : fetch real users from database
  const { contacts, loading: contactsLoading } = useContacts(userId, userRole);

  // @ socket : real-time messaging
  const handleNewMessage = useCallback((message: Message) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("New Message", { body: message.message });
    }
  }, []);

  const handleTyping = useCallback(
    (typingUserId: string) => {
      if (typingUserId === selectedContact?.id) {
        setIsTyping(true);
      }
    },
    [selectedContact],
  );

  const handleStopTyping = useCallback(
    (typingUserId: string) => {
      if (typingUserId === selectedContact?.id) {
        setIsTyping(false);
      }
    },
    [selectedContact],
  );

  const {
    messages,
    isConnected,
    sendMessage,
    loadMessageHistory,
    emitTyping,
    emitStopTyping,
  } = useSocket({
    userId,
    onNewMessage: handleNewMessage,
    onTyping: handleTyping,
    onStopTyping: handleStopTyping,
  });

  // @ request-notification-permission : ask for permission on mount
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // @ load-history : load messages when contact is selected
  useEffect(() => {
    if (selectedContact) {
      loadMessageHistory(selectedContact.id);
      setIsTyping(false);
    }
  }, [selectedContact, loadMessageHistory]);

  // @ scroll-to-bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // @ filter-contacts : search functionality
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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

  // @ handle-typing
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

  // @ handle-key-press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // @ format-time
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();

    if (isToday) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    return date.toLocaleDateString([], { month: "short", day: "numeric" });
  };

  // @ avatar-helper
  const getAvatar = (image?: string) => {
    return image && image.startsWith("http") ? image : "/images/avatar.png";
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:bg-[var(--bg-body)] dark:text-white rounded-lg">
      {/* Connection Status Banner */}
      {!isConnected && (
        <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg flex items-center gap-2">
          <i className="bi bi-exclamation-triangle text-yellow-600 dark:text-yellow-300"></i>
          <span className="text-sm text-yellow-700 dark:text-yellow-200">
            Reconnecting to server... Messages will be sent when connection is
            restored.
          </span>
        </div>
      )}

      <div
        className="rounded-2xl shadow-xl overflow-hidden"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-[600px]">
          {/* Sidebar - Contacts */}
          <div className="border-r border-gray-100 dark:border-gray-700">
            {/* Sidebar Header */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Messages</h2>
                <div className="flex items-center gap-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isConnected ? "bg-green-400 animate-pulse" : "bg-red-400"
                    }`}
                  ></span>
                  <span className="text-xs text-gray-500">
                    {isConnected ? "Live" : "Offline"}
                  </span>
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>

            {/* Contacts List */}
            <div className="overflow-y-auto max-h-[500px]">
              {contactsLoading ? (
                <div className="p-4 text-center text-gray-400">
                  <i className="bi bi-arrow-repeat animate-spin text-xl"></i>
                  <p className="text-sm mt-2">Loading contacts...</p>
                </div>
              ) : filteredContacts.length === 0 ? (
                <div className="p-4 text-center text-gray-400">
                  <i className="bi bi-people text-3xl"></i>
                  <p className="text-sm mt-2">No contacts found</p>
                </div>
              ) : (
                filteredContacts.map((contact, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedContact(contact)}
                    className={`p-4 flex items-center gap-3 cursor-pointer transition-all hover:bg-gray-50 ${
                      selectedContact?.id === contact.id
                        ? "bg-indigo-50 border-l-4 border-indigo-500"
                        : "border-l-4 border-transparent"
                    }`}
                  >
                    <div className="relative shrink-0">
                      <Image
                        src={getAvatar(contact.image)}
                        width={48}
                        height={48}
                        alt={contact.name}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 dark:text-white truncate">
                        {contact.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {contact.role || "User"}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="col-span-2 lg:col-span-3 flex flex-col">
            {selectedContact ? (
              <>
                {/* Chat Header */}
                <div
                  className="p-4 border-b border-gray-100 flex items-center justify-between "
                  style={{ backgroundColor: "var(--bg-card)" }}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={getAvatar(selectedContact.image)}
                      width={44}
                      height={44}
                      alt={selectedContact.name}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {selectedContact.name}
                      </h3>
                      {isTyping ? (
                        <p className="text-sm text-indigo-500 animate-pulse">
                          Typing...
                        </p>
                      ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {selectedContact.role || "User"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-linear-to-b from-gray-50 to-white dark:bg-[var(--bg-section)]">
                  {filteredMessages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                      <i className="bi bi-chat-text text-6xl mb-4"></i>
                      <p className="text-lg">No messages yet</p>
                      <p className="text-sm">
                        Send a message to start the conversation
                      </p>
                    </div>
                  ) : (
                    <>
                      {filteredMessages.map((msg, index) => {
                        const isOwn = msg.senderId === userId;
                        const showAvatar =
                          index === 0 ||
                          filteredMessages[index - 1].senderId !== msg.senderId;

                        return (
                          <div
                            key={msg._id}
                            className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`flex items-end gap-2 max-w-[70%] ${
                                isOwn ? "flex-row-reverse" : ""
                              }`}
                            >
                              {!isOwn && showAvatar && (
                                <Image
                                  src={getAvatar(selectedContact.image)}
                                  width={32}
                                  height={32}
                                  alt=""
                                  className="rounded-full"
                                />
                              )}
                              {!isOwn && !showAvatar && <div className="w-8" />}

                              <div
                                className={`px-4 py-3 rounded-2xl ${
                                  isOwn
                                    ? "bg-linear-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white rounded-br-md"
                                    : "bg-white dark:bg-[var(--bg-card)] dark:text-white text-gray-800 shadow-sm rounded-bl-md"
                                }`}
                              >
                                <p className="text-sm whitespace-pre-wrap">
                                  {msg.message}
                                </p>
                                <p
                                  className={`text-xs mt-1 ${
                                    isOwn ? "text-indigo-200" : "text-gray-400"
                                  }`}
                                >
                                  {formatTime(msg.timestamp)}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div ref={messagesEndRef} />
                    </>
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-400 bg-gray-50">
                <i className="bi bi-chat-square-dots text-8xl mb-4"></i>
                <p className="text-xl">Select a conversation</p>
                <p className="text-sm">Choose a contact to start messaging</p>
              </div>
            )}

            {/* Input Area - Always Visible */}
            <div className="p-4 border-t border-gray-100" style={{backgroundColor: 'var(--bg-card)'}}>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={handleInputChange}
                  onKeyUp={handleKeyPress}
                  placeholder={
                    selectedContact
                      ? "Type your message..."
                      : "Select a contact first"
                  }
                  disabled={!selectedContact}
                  className="flex-1 px-4 py-3 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <button
                  onClick={handleSend}
                  disabled={
                    !inputMessage.trim() || !isConnected || !selectedContact
                  }
                  className="p-3 bg-linear-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
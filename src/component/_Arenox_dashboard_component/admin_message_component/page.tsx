"use client";
import React, { useState } from "react";

/* @ message-interface : define message structure */

interface AdminMessageProp {
  id: number;
  name: string;
  message: string;
  time: string;
}

/* @ admin-message-component : messaging interface for admin communication */

export default function Admin_message( ){
 /* @ mock-messages : sample message data */
  
  const mockMessages: AdminMessageProp[] = [
    {
      id: 1,
      name: "Aisha Bello",
      message: "Hello, I need help with my assignment",
      time: "10:45 AM",
    },
    {
      id: 2,
      name: "Chinedu Okoro",
      message: "Can I get the new course materials?",
      time: "11:10 AM",
    },
  ];

  /* @ selected-message : track currently selected message */
  
  const [selected, setSelected] = useState(mockMessages[0]);
  return (
    <div className="min-h-screen bg-white p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 rounded-xl p-4 shadow">
          <h3 className="font-medium mb-2 text-sm">Recent Chats</h3>
          <ul>
            {mockMessages.map((msg) => (
              <li
                key={msg.id}
                onClick={() => setSelected(msg)}
                className={`p-3 rounded-lg mb-2 cursor-pointer ${
                  selected.id === msg.id ? "bg-indigo-100" : "hover:bg-gray-100"
                }`}
              >
                <div className="font-semibold text-sm">{msg.name}</div>
                <div className="text-xs text-gray-500 truncate">
                  {msg.message}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Window */}
        <div className="col-span-2 bg-gray-50 p-4 rounded-xl shadow flex flex-col justify-between">
          <div>
            <div className="font-medium">{selected.name}</div>
            <div className="text-xs text-gray-500 mb-4">{selected.time}</div>
            <div className="bg-white rounded-xl p-3 mb-2 shadow-sm text-sm">
              {selected.message}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              placeholder="Type your reply..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* old chat */}

      <div className="bg-gray-50 rounded-xl p-4 shadow mt-5">
        <h3 className="font-medium mb-2 text-lg">Old Chats</h3>
        <ul>
          {mockMessages.map((msg) => (
            <li
              key={msg.id}
              onClick={() => setSelected(msg)}
              className={`p-3 rounded-lg mb-2 cursor-pointer ${
                selected.id === msg.id ? "bg-indigo-100" : "hover:bg-gray-100"
              }`}
            >
              <div className="font-semibold text-sm">{msg.name}</div>
              <div className="text-xs text-gray-500 truncate">
                {msg.message}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


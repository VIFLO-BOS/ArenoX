"use client";
import React, { useEffect, useState } from "react";

interface mockTickets {
  id: number;
  subject: string;
  status: string;
  date: string;
}
export default function Admin_support() {
  const [mockTickets, setMockTickets] = useState<mockTickets[]>([]);
  const [newTickets, setnewTickets] = useState({ subject: "" });

  useEffect(() => {
    const defaultTickets: mockTickets[] = [
      { id: 1, subject: "Login issue", status: "open", date: "Oct 1, 2025" },
      {
        id: 2,
        subject: "Course not loading",
        status: "resolved",
        date: "Oct 5, 2025",
      },
    ];
    const saved = localStorage.getItem("mockTickets");
    if (saved) {
      setMockTickets(JSON.parse(saved));
    } else {
      setMockTickets(defaultTickets);
      localStorage.setItem("mockTickets", JSON.stringify(defaultTickets));
    }
  }, []);

  const addTickets = () => {
    const newEntry = {
      id: mockTickets.length + 1,
      subject: newTickets.subject,
      status: "open",
      date: new Date().toLocaleDateString(),
    };

    setMockTickets((prev) => {
      const updated = [...prev, newEntry];
      localStorage.setItem("mockTickets", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="bg-white rounded-lg p-4 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tickets */}
        <div className="bg-gray-50 p-4 rounded-xl shadow">
          <h3 className="text-lg font-medium mb-3">Support Tickets</h3>
          <ul>
            {mockTickets.map((t) => (
              <li
                key={t.id}
                className="border-b border-gray-300 py-2 text-sm flex justify-between items-center"
              >
                <div>
                  <div className="font-semibold">{t.subject}</div>
                  <div className="text-xs text-gray-500">{t.date}</div>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    t.status === "open"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {t.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-4 rounded-xl shadow">
          <h3 className="text-lg font-medium mb-3">Contact Support</h3>
          <div className="flex flex-col gap-3 text-sm">
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-lg p-2"
              onChange={(e) =>
                setnewTickets((prev) => ({ ...prev, subject: e.target.value }))
              }
            />
            <textarea
              placeholder="Describe your issue..."
              className="border border-gray-300 rounded-lg p-2 h-24"
            ></textarea>
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm"
              onClick={() => addTickets()}
            >
              Submit Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

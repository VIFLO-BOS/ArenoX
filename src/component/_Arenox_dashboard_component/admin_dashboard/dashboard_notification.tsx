"use client";
import { useEffect } from "react";
import { useSocket, Notification as AppNotification } from "@/hooks/useSocket";
import { authClient } from "@/app/lib/auth-client";

interface NotificationProps {
  toggleTab: (tab: "message" | "notification") => void;
}

export default function Dashboard_notification({
  toggleTab,
}: NotificationProps) {
  // @ session : get current user
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id || "";

  // @ socket-hook : real-time notifications
  const {
    notifications,
    isConnected,
    loadNotifications,
    markNotificationRead,
    markAllNotificationsRead,
    unreadNotificationCount,
  } = useSocket({
    userId,
    onNewNotification: (notification) => {
      // Play sound or show toast notification
      if (typeof window !== "undefined" && "Notification" in window) {
        if (Notification.permission === "granted") {
          new Notification(notification.title, {
            body: notification.message,
          });
        }
      }
    },
  });

  // @ load-on-mount : fetch existing notifications
  useEffect(() => {
    if (userId) {
      loadNotifications();
    }
  }, [userId, loadNotifications]);

  // @ get-icon : return icon class based on notification type
  const getNotificationIcon = (type: AppNotification["type"]) => {
    /* keep type colour cues but soften for dark mode via Tailwind's dark: prefix */
    switch (type) {
      case "success":
        return "bi-check-circle-fill text-green-500 dark:text-green-300";
      case "warning":
        return "bi-exclamation-triangle-fill text-yellow-500 dark:text-yellow-300";
      case "server":
        return "bi-x-circle-fill text-red-500 dark:text-red-300";
      default:
        return "bi-info-circle-fill text-blue-500 dark:text-blue-300";
    }
  };

  // @ format-time : convert timestamp to relative time
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-white dark:bg-var(--bg-card) rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden w-80">
      {/* Header */}
      <div className="bg-linear-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="bi bi-bell-fill text-white"></i>
            <h3 className="text-white font-semibold">Notifications</h3>
            {unreadNotificationCount > 0 && (
              <span className="badge-danger text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                {unreadNotificationCount}
              </span>
            )}
          </div>
          <button
            onClick={() => toggleTab("notification")}
            className="text-white/80 hover:text-white transition-colors"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Connection Status */}
        <div className="flex items-center gap-1 mt-2 text-xs text-white/70">
          <span
            className={`w-2 h-2 rounded-full ${
              isConnected ? "bg-green-400 animate-pulse" : "bg-red-400"
            }`}
          ></span>
          {isConnected ? "Live updates active" : "Reconnecting..."}
        </div>
      </div>

      {/* Mark All Read Button */}
      {unreadNotificationCount > 0 && (
        <div className="p-2 border-b border-gray-100 dark:border-gray-700">
          <button
            onClick={() => {
              markAllNotificationsRead();
            }}
            className="w-full text-sm text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Mark all as read
          </button>
        </div>
      )}

      {/* Notifications List */}
      <div className="max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-6 text-center text-gray-500 dark:text-gray-400">
            <i className="bi bi-inbox text-4xl mb-2 block text-gray-300 dark:text-gray-600"></i>
            <p className="text-sm">No notifications yet</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              You'll see updates here when something happens
            </p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification._id}
              onClick={() => {
                markNotificationRead(notification._id);
                if (
                  notification.type === "info" ||
                  notification.type === "success"
                ) {
                  toggleTab("message");
                }
              }}
              className={`p-3 border-b border-gray-50 dark:border-gray-700 cursor-pointer transition-all hover:bg-gray-50 dark:hover:bg-gray-800 ${
                !notification.isRead
                  ? "bg-indigo-50/50 dark:bg-indigo-900/40 border-l-4 border-l-indigo-500"
                  : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <i
                  className={`${getNotificationIcon(notification.type)} text-lg mt-0.5`}
                ></i>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-sm text-gray-800 dark:text-white truncate">
                      {notification.title}
                    </p>
                    {!notification.isRead && (
                      <span className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {formatTime(notification.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-3 bg-gray-50 dark:bg-[var(--bg-card)] border-t dark:border-gray-700">
        <button className="w-full text-center text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors">
          View All Notifications
        </button>
      </div>
    </div>
  );
}

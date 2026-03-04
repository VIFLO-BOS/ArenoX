"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { userSession } from "@/utils/types/session";
import { useState } from "react";
import { useSocket } from "@/hooks/useSocket";
import { useTheme } from "@/utils/types/context/ThemeContext";
import Dashboard_notification from "./dashboard_notification";
import Message_box from "./message_box";

export default function Admin_dashboard_header() {
  const { data: clientSession } = authClient.useSession();
  const session = clientSession;
  const user = session?.user as userSession;
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  const avatarSrc =
    user?.image && user.image.startsWith("http")
      ? user.image
      : "/images/avatar.png";

  const [activeTab, setActiveTab] = useState<"message" | "notification" | null>(
    null,
  );
  const toggleTab = (tab: "message" | "notification") => {
    setActiveTab((prev) => (prev === tab ? null : tab));
  };

  const { unreadNotificationCount, unreadMessageCount } = useSocket({
    userId: user?.id || "",
    onNewNotification: (notification) => {
      if (typeof window !== "undefined" && "Notification" in window) {
        if (window.Notification.permission === "granted") {
          new window.Notification(notification.title, {
            body: notification.message,
          });
        }
      }
    },
  });

  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="bg-white shadow-md py-4.5 rounded-br-lg rounded-bl-lg mb-5 w-full">
      <header className="flex flex-wrap items-center justify-between gap-4 px-4">
        <div className="hidden lg:flex items-center gap-2">
          <p className="text-gray-600">Welcome back,</p>
          <p className="font-medium text-gray-800">{user?.name}</p>
        </div>

        <div className="flex items-center justify-end gap-4 w-full lg:w-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleTab("message")}
              className="relative p-2 bg-sky-50 rounded-sm text-gray-500 hover:opacity-80 transition-all"
              title="Messages"
            >
              <i className="bi bi-envelope"></i>
              {unreadMessageCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                  {unreadMessageCount > 9 ? "9+" : unreadMessageCount}
                </span>
              )}
            </button>

            <button
              onClick={() => toggleTab("notification")}
              className="relative p-2 bg-sky-50 rounded-sm text-gray-500 hover:opacity-80 transition-all"
              title="Notifications"
            >
              <i className="bi bi-bell"></i>
              {unreadNotificationCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                  {unreadNotificationCount > 9 ? "9+" : unreadNotificationCount}
                </span>
              )}
            </button>

            <button
              onClick={toggleTheme}
              className="relative p-2 bg-sky-50 rounded-sm text-gray-500 hover:opacity-80 transition-all"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <i className={`bi ${isDark ? "bi-sun" : "bi-moon"}`}></i>
            </button>

            {activeTab === "message" && (
              <div className="absolute top-13  right-120 z-50 w-80">
                <Message_box toggleTab={toggleTab} />
              </div>
            )}

            {activeTab === "notification" && (
              <div className="absolute top-16 right-20 z-50 w-80">
                <Dashboard_notification toggleTab={toggleTab} />
              </div>
            )}
          </div>

          <Menu as="div" className="relative">
            <MenuButton className="inline-flex items-center justify-center gap-x-1.5 rounded-md px-1 py-1 text-sm font-semibold bg-white outline-none focus:outline-none dark:bg-[var(--bg-card)]">
              <Image
                src={avatarSrc}
                width={35}
                height={35}
                alt="User Profile"
                className="rounded-full w-8.5 h-8.5"
              />
              <div className="hidden md:flex items-center gap-1 text-start">
                <i className="bi bi-chevron-down text-gray-500 dark:text-var(--text-secondary) text-xs"></i>
              </div>
            </MenuButton>

            <MenuItems className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-var(--bg-card) shadow-lg ring-1 ring-black/5 transition duration-100 ease-out">
              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={handleSignOut}
                      className={`block px-4 py-2 text-sm w-full text-left transition-colors duration-200 ${
                        active ? "bg-gray-100 dark:bg-sky-500/10" : ""
                      } text-gray-700 dark:text-var(--text-primary)`}
                    >
                      Sign Out
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </header>
    </div>
  );
}

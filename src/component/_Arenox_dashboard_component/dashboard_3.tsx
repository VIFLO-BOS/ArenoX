"use  client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { userSession } from "@/utils/types/session";
import { useState, useEffect } from "react";
import { useSocket } from "@/hooks/useSocket";
import Message_box from "../_Arenox_dashboard_component/admin_dashboard/message_box";
import Dashboard_notification from "../_Arenox_dashboard_component/admin_dashboard/dashboard_notification";

export default function Instructor_dashboard_header() {
  const { data: clientSession } = authClient.useSession();

  const session = clientSession;
  const user = session?.user as userSession;
  const router = useRouter();

  // @ mounted-state : prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

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

  // State to track active popup
  const [activeTab, setActiveTab] = useState<"message" | "notification" | null>(
    null,
  );
  // Helper function to toggle popup and close other popups
  const toggleTab = (tab: "message" | "notification") => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  const { unreadNotificationCount, unreadMessageCount } = useSocket({
    userId: user?.id || "",
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
    <div
      className="shadow-md py-4.5 rounded-br-lg rounded-bl-lg mb-5 w-full fixed top-0 left-0 right-0 z-40"
      style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)" }}
    >
      <header className="flex flex-wrap items-center justify-between gap-4 px-4 relative">
        <div className="hidden lg:flex items-center gap-2">
          <p style={{ color: "var(--text-secondary)" }}>Welcome back,</p>
          <p className="font-medium" style={{ color: "var(--text-primary)" }}>
            {mounted ? user?.name : ""}
          </p>
        </div>
        <div className="flex items-center justify-end gap-4 w-full lg:w-auto">
          <div className="relative flex items-center gap-3">
            <button
              onClick={() => toggleTab("message")}
              className="p-2 rounded-lg transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                color: "var(--accent-primary)",
              }}
              title="Messages"
            >
              <i className="bi bi-envelope text-base" style={{color: "#fff"}}></i>
            </button>
            <button
              onClick={() => toggleTab("notification")}
              className="p-2 rounded-lg transition-all duration-200 hover:opacity-80 relative"
              style={{
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                color: "var(--accent-primary)",
              }}
              title="Notifications"
            >
              <i className="bi bi-bell text-base" style={{color: "#fff"}}></i>
              {unreadNotificationCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {unreadNotificationCount > 9 ? "9+" : unreadNotificationCount}
                </span>
              )}
            </button>

            {/* Message Popup */}
            {activeTab === "message" && (
              <div className="absolute top-13 right-46 z-50">
                <Message_box toggleTab={toggleTab} />
              </div>
            )}

            {/* Notification Popup */}
            {activeTab === "notification" && (
              <div className="absolute top-13 right-46 z-50 w-120">
                <Dashboard_notification toggleTab={toggleTab} />
              </div>
            )}
          </div>

          <Menu as="div" className="relative">
            <MenuButton
              className="inline-flex items-center justify-center gap-x-1.5 rounded-md px-1 py-1 text-sm font-semibold outline-none focus:outline-none"
              style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)" }}
            >
              <Image
                src={avatarSrc}
                width={35}
                height={35}
                alt="User Profile"
                className="rounded-full w-8.5 h-8.5"
              />
              <div className="hidden md:flex items-center gap-1 text-start">
                <i className="bi bi-chevron-down text-xs" style={{ color: "var(--accent-primary)" }}></i>
              </div>
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md shadow-lg ring-1 ring-black/5 transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0"
              style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)" }}
            >
              <div className="py-1">
                <MenuItem>
                  <button
                    onClick={handleSignOut}
                    className="block px-4 py-2 text-sm outline-none w-full text-left transition-all duration-200"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(59, 130, 246, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    Sign-Out
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </header>
    </div>
  );
}
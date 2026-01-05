"use client";
import Admin_dashboard_header from "@/component/_Arenox_dashboard_component/admin_dashboard/admin_dashboard_header";
import Admin_dashboard_sidebar from "@/component/_Arenox_dashboard_component/admin_dashboard/admin_dashboard_sidebar";
import React, { useState, useEffect } from "react";
import { authClient } from "@/app/lib/auth-client";

// @ admin-shell-interface : define props interface for admin shell component
interface AdmiShell {
  children: React.ReactNode;
}

// @ admin-shell-component : main admin dashboard shell with sidebar and header
export const AdminShell = ({ children }: AdmiShell) => {
  // @ sidebar-state : manage sidebar visibility and mobile responsiveness
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // @ session-hook : fetch user session on client side
  const { data: session } = authClient.useSession();

  // @ responsive-handler : handle window resize for mobile/desktop sidebar behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setSidebarOpen(false);
      } else {
        setIsMobile(false);
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // @ render : admin dashboard layout with sidebar, header, and content area
  return (
    <div className="flex justify-between gap-50 bg-gray-200">
      <Admin_dashboard_sidebar
        isSidebarOpen={isSidebarOpen}
        setisSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
      <main
        className={`overflow-x-hidden flex-1 transition-all duration-300 px-4 ${
          isSidebarOpen ? "ml-56" : "ml-20"
        }`}
      >
        <Admin_dashboard_header session={session} />
        {children}
        <div id="modal-root"></div>
      </main>
    </div>
  );
};

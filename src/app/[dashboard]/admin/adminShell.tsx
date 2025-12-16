"use client";
import Admin_dashboard_header from "@/component/_Arenox_dashboard_component/admin_dashboard/admin_dashboard_header";
import Admin_dashboard_sidebar from "@/component/_Arenox_dashboard_component/admin_dashboard/admin_dashboard_sidebar";
import React, { useState, useEffect } from "react";

interface AdmiShell {
  children: React.ReactNode;
}

export const AdminShell= ({
  children,
}: AdmiShell) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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
    handleResize(); // call on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="flex justify-between gap-50 bg-gray-100">
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
        <Admin_dashboard_header/>
        {children}
        <div id="modal-root"></div>
      </main>
    </div>
  );
}

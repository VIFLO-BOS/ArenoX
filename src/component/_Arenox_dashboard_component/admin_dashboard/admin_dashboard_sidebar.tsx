"use client";
import Image from "next/image";
// import { useState } from "react";

type AdminDashboardSidebarProps = {
  isSidebarOpen: boolean;
  setisSidebarOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
};

const Admin_dashboard_sidebar = ({
  isSidebarOpen,
  setisSidebarOpen,
}: AdminDashboardSidebarProps) => {
  const navItems = [
    { name: "Dashboard", path: "/dashboard/admin", icon: "bi-speedometer2" },
    { name: "Users", path: "/dashboard/admin/userlist", icon: "bi-people" },
    {
      name: "Courses",
      path: "/dashboard/admin/courses",
      icon: "bi-journal-bookmark",
    },
    {
      name: "Enrollments",
      path: "/dashboard/admin/enrollments",
      icon: "bi-person-check",
    },
    {
      name: "Messages / Communication",
      path: "/dashboard/admin/messages",
      icon: "bi-chat-dots",
    },
    { name: "Settings", path: "/dashboard/admin/settings", icon: "bi-gear" },
    {
      name: "Support",
      path: "/dashboard/admin/support",
      icon: "bi-life-preserver",
    },
  ];

  const toggleSidebar = () => setisSidebarOpen((prev: boolean) => !prev);
  
  return (
    <aside
      className={`fixed h-screen flex flex-col transition-all duration-300 ${
        isSidebarOpen ? "w-56" : "w-20"
      }`}
    >
      {/* Header */}
      <div className="bg-white shadow-sm rounded-br-lg pl-4.5 pr-1 py-3 flex justify-between items-center h-20">
        <div className="flex items-center">
          {isSidebarOpen ? (
            <Image
              src="/images/small-logo.jpg"
              width={100} 
              height={0}
              alt="images"
              loading="lazy"
            />
          ) : (
            <Image
              src="/images/small-logo1.jpg"
              alt="Logo"
              width={30} 
              height={0}
              loading="lazy"
              
            />
          )}
        </div>

        <button
          onClick={toggleSidebar}
          className="text-gray-500  transition duration-300  ease"
          aria-label="Toggle Sidebar"
        >
          <i
            className={`${
              isSidebarOpen ? "bi bi-chevron-left" : "bi bi-chevron-right"
            } text-lg cursor-pointer`}
          />
        </button>
      </div>
      {/* Navigation */}
      <nav className="bg-white shadow-md rounded-tr-lg rounded-br-xl flex-1 mt-5 p-4 space-y-2">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-100"
              >
                <i className={`${item.icon} text-lg`}></i>
                {isSidebarOpen && <span>{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Admin_dashboard_sidebar;

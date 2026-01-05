"use client";
import Admin_dashboard_stats from "./admin_dashboard_stats";
import Admin_dashbboard_chart from "./admin_dashbboard_chart";

export default function Admin_dashboard_home() {
  return (
    <div className="min-h-  transition-all duration-300 ">
      <Admin_dashboard_stats />
      <Admin_dashbboard_chart />
    </div>
  );
}

import React from "react";
import Revenue_growth from "./charts/revenue_growth";
import Student_bar_chart from "./charts/student_course_bar";
import Monthly_user_data from "./charts/monthly_user_data";
import Dashboard_notification from "./charts/dashboard_notification";
import Reports_chart from "./charts/report_chart";

export default function Admin_dashbboard_chart() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Revenue_growth />
        <Student_bar_chart />
        <Monthly_user_data />
      </div>
      
      <Reports_chart />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Dashboard_notification />
      </div>
    </div>
  );
}

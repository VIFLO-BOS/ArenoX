"use client";

import { authClient } from "@/app/lib/auth-client";
import Student_Dashboard from "@/component/_Arenox_dashboard_component/dashboard_1";

{
  /* @ student-dashboard-page : student dashboard page with session data */
}
export default function StudentPage() {
  {
    /* @ session-hook : get current user session */
  }
  const { data: session } = authClient.useSession();

  return (
    <div className="p-10">
      <Student_Dashboard session={session} />
    </div>
  );
}

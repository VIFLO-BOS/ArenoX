import RightMenu from "@/component/_Arenox_navbar_component/rightmenu-client";
import Admin_dashboard_header from "@/component/_Arenox_dashboard_component/admin_dashboard/admin_dashboard_header";
import { getSession } from "@/app/lib/sessions";

export default async function Gen_session() {
  const session = await getSession();

  console.log("RightMenu Session:", JSON.stringify(session, null, 2));

  // Handle case where session might be null or undefined
  if (!session) {
    return <div>Session not found. Please log in.</div>;
  }

  return (
    <>
      <RightMenu session={session} />
      <Admin_dashboard_header session={session} />
    </>
  );
}

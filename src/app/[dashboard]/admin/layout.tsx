import { headers } from "next/headers";
import { getAuth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { AdminShell } from "./adminShell";
import { userSession } from "@/utils/types/session";

{
  /* @ admin-layout : admin dashboard layout with authentication and role-based access control */
}
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    /* @ session-check : verify user is authenticated */
  }

  const auth = await getAuth()
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) redirect("/signin");

  {
    /* @ role-validation : ensure user has admin role */
  }
  const user = session.user as userSession
  const role = user.role;

  if (role !== "admin") redirect("/dashboard/user");

  if (role !== "admin" && role !== "student") redirect("/dashboard/instructor");

  return <AdminShell>{children}</AdminShell>;
}

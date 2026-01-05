import { getAuth } from "@/app/lib/auth";
import { userSession } from "@/utils/types/session";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// Force dynamic rendering to avoid database access at build time
export const dynamic = "force-dynamic";

export default async function DashboardRouter() {
  const auth = await getAuth();
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/signin");
  }

  const user = session.user as userSession;
  const role = user.role;
  if (!role) {
    return redirect("/signin");
  }
  if (role === "admin") {
    return redirect("/dashboard/admin");
  }
  if (role === "instructor") {
    return redirect("/dashboard/instructor");
  }

  const hasCourses = false;
  if (!hasCourses) {
    return redirect("/dashboard/user/empty");
  }

  return redirect("/dashboard/user");
}

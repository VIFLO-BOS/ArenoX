import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardRouter() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/signin");
  }

  const role = session.user?.role;
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

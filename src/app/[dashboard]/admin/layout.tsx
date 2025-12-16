import { headers } from "next/headers";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { AdminShell } from "./adminShell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) redirect("/signin");

  const role = session?.user.role;

  if (role !== "admin") redirect("/dashboard/user");

  if (role !== "admin" && role !== "student") redirect("/dashboard/instructor");

  return <AdminShell>{children}</AdminShell>;
}

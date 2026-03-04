// !. Existing Auth: Get session using better auth configuration

import { getAuth } from "@/app/lib/auth";
import { userSession } from "@/utils/types/session";
import { headers } from "next/headers";

export async function checkAdmin() {
  const auth = await getAuth();
  const headerList = await headers();

  const session = await auth.api.getSession({
    headers: headerList,
  });

  // 🔍 DEBUG: Remove these logs after fixing
  console.log("DEBUG - Session:", session);
  console.log("DEBUG - User:", session?.user);
  console.log("DEBUG - Role:", (session?.user as userSession)?.role);

  const user = session?.user as userSession;
  if (!session || user.role !== "admin") {
    console.log(
      "DEBUG - Auth failed: session=",
      !!session,
      "role=",
      user?.role,
    );
    return null;
  }

  return session;
}

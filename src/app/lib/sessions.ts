import { getAuth } from "./auth";
import { headers } from "next/headers";

// @ get-session : retrieve current user session with error handling
export const getSession = async () => {
  try {
    const auth = await getAuth()
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session;
  } catch {
    return null;
  }
};

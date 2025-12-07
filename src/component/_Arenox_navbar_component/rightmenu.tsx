"use server";
import { getSession } from "@/app/lib/sessions";
import RightMenu from "./rightmenu-client";

export default async function Right_menu() {
  const session = await getSession();

  // The auth lib may return an object like `{ session: {...}, user: {...} }`.
  // Normalize to pass the inner session object (or null) to the client component.
  const clientSession = session && (session.session ?? session);

  return <RightMenu session={clientSession} />;
}

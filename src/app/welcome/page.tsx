import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";

/* @ dashboard-component : welcome dashboard page with user session */

export default async function Dashboard() {
/* @ session-check : verify user is authenticated */
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/signin");
  }

  /* @ user-data : extract user information from session */
  
  const user = session.user;

  /* @ render : display user welcome dashboard with profile and info */
  
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
       { /* @ user-profile : display user avatar and basic info */}
        <div className="flex items-center gap-6">
          <Image
            src={user.image || "/images/avatar.png"}
            alt={user.name}
            width={100}
            height={100}
            className="rounded-full border-4 border-gray-100"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome, {user.name}!
            </h1>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* @ dashboard-content : placeholder for user dashboard content */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-semibold mb-4">Your Dashboard</h2>
          <p>You can see your courses and progress here.</p>
        </div>
      </div>
    </div>
  );
}


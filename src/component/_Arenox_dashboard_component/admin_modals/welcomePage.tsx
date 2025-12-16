import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Welcome() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) { 
    return redirect("/signin");
  }

  const user = session.user;

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
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

        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-semibold mb-4">Your Dashboard</h2>
          <p>You can see your courses and progress here.</p>
        </div>
      </div>
    </div>
  );
}

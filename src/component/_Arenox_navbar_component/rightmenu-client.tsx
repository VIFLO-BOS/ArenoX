// rightmenu-client.tsx
"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut, authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { userSession } from "@/utils/types/session";

type Session = typeof authClient.$Infer.Session;

export default function RightMenu({
  session: serverSession,
}: {
  session?: Session | null;
}) {
  const { data: clientSession } = useSession();
  const session = serverSession || clientSession;
  const user = session?.user as userSession;
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  const getDashboardLink = (role?: string | null) => {
    switch (role) {
      case "admin":
        return "/dashboard/admin";
      case "instructor":
        return "/dashboard/instructor";
      case "student":
      default:
        return "/dashboard/student";
    }
  };

  const avatarSrc =
    user?.image && user.image.startsWith("http")
      ? user.image
      : "/images/avatar.png";

  return (
    <div className="flex items-center ">
      {user && (
        <Menu as="div" className="relative inline-block">
          <MenuButton className="inline-flex w-full items-center justify-center gap-x-2 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 outline-0 transition-all duration-300 hover:bg-gray-100/50">
            <Image
              src={avatarSrc}
              width={400}
              height={400}
              alt={user?.name || "User avatar"}
              className="rounded-full ring-2 ring-white shadow-sm w-9 h-9"
              unoptimized
            />

            {/* <span>Account</span> */}
            <i className="bi bi-chevron-down text-gray-400 text-xs mr-1"></i>
          </MenuButton>
          <MenuItems
            transition
            modal={false}
            className="absolute right-0 z-10 mt-3 w-40 origin-top-right rounded-2xl bg-white/95 backdrop-blur-xl outline-1 -outline-offset-1 outline-white/10 ring-1 ring-black/5 shadow-2xl transition-all ease-in-out duration-200 p-1.5"
          >
            <div className="flex flex-col gap-1">
              <MenuItem>
                <Link
                  href={getDashboardLink(user?.role)}
                  className="block px-4 py-2 text-sm text-gray-700 font-medium rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <i className="bi bi-grid mr-2"></i> Dashboard
                </Link>
              </MenuItem>

              <MenuItem>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 font-medium rounded-xl hover:bg-red-50 hover:text-red-700 transition-colors"
                >
                  <i className="bi bi-box-arrow-right mr-2"></i> Sign Out
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      )}

      {!user && (
        <Menu as="div" className="relative inline-block">
          <MenuButton className="inline-flex w-full items-center justify-center gap-x-2 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 outline-0 transition-all duration-300 hover:bg-gray-100/50">
            <Image
              src="/images/avatar.png"
              width={36}
              height={36}
              alt=""
              className="rounded-full ring-2 ring-white shadow-sm"
            />

            {/* <span>Account</span> */}
            <i className="bi bi-chevron-down text-gray-400 text-xs mr-1"></i>
          </MenuButton>
          <MenuItems
            transition
            modal={false}
            className="absolute right-0 z-10 mt-3 w-40 origin-top-right rounded-2xl bg-white/95 backdrop-blur-xl outline-1 -outline-offset-1 outline-white/10 ring-1 ring-black/5 shadow-2xl transition-all ease-in-out duration-200 p-1.5"
          >
            <div className="flex flex-col gap-1">
              <MenuItem>
                <Link
                  href="/signin"
                  className="block px-4 py-2 text-sm text-gray-700 font-medium rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <i className="bi bi-box-arrow-in-right mr-2"></i> Sign In
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-sm text-gray-700 font-medium rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <i className="bi bi-person-plus mr-2"></i> Sign Up
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      )}
    </div>
  );
}

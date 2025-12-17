// rightmenu-client.tsx
"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut, authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";

type Session = typeof authClient.$Infer.Session;

export default function RightMenu({
  session: serverSession,
}: {
  session?: Session | null;
}) {
  const { data: clientSession } = useSession();
  const session = serverSession || clientSession;
  const user = session?.user;
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

  return (
    <div className="flex items-center ">
      {user && (
        <Menu as="div" className="relative inline-block">
          <MenuButton className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md  px-2 py-1   text-sm font-semibold  text-black  outline-0 transition-all duration-300">
            <Image
              src="/images/mentor/09.jpg"
              width={30}
              height={30}
              alt=""
              className="rounded-full ring-1.5 ring-white"
            />

            {/* <span>Account</span> */}
            <i className="bi bi-chevron-down text-gray-400"></i>
          </MenuButton>
          <MenuItems
            transition
            modal={false}
            className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white outline-1 -outline-offset-1 outline-white/10 ring-1 ring-black/5 transition-all ease-in-out duration-200"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  href={getDashboardLink(user?.role)}
                  className="block px-4 py-2 text-sm text-gray-950 font-semibold data-focus:bg-white/5 data-focus:text-gray-600 data-focus:outline-hidden"
                >
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/profile"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-950 font-semibold data-focus:bg-white/5 data-focus:text-gray-600 data-focus:outline-hidden"
                >
                  Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-950 font-semibold data-focus:bg-white/5 data-focus:text-gray-600 data-focus:outline-hidden"
                >
                  Sign Out
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      )}

      {!user && (
        <Menu as="div" className="relative inline-block">
          <MenuButton className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md  px-2 py-1   text-sm font-semibold  text-black  outline-0 transition-all duration-300">
            <Image
              src="/images/avatar.png"
              width={30}
              height={30}
              alt=""
              className="rounded-full ring-1.5 ring-white"
            />

            {/* <span>Account</span> */}
            <i className="bi bi-chevron-down text-gray-400"></i>
          </MenuButton>
          <MenuItems
            transition
            modal={false}
            className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white outline-1 -outline-offset-1 outline-white/10 ring-1 ring-black/5 transition-all ease-in-out duration-200"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  href="/signin"
                  className="block px-4 py-2 text-sm text-gray-950 font-semibold data-focus:bg-white/5 data-focus:text-gray-600 data-focus:outline-hidden"
                >
                  Sign In
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-sm text-gray-950 font-semibold data-focus:bg-white/5 data-focus:text-gray-600 data-focus:outline-hidden"
                >
                  Sign Up
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      )}
    </div>
  );
}

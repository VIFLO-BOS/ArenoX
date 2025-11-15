import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export default function Admin_dashboard_header() {
  return (
    <div className="bg-white shadow-md py-4.5 rounded-br-lg rounded-bl-lg mb-5 w-full">
      <header className="flex flex-wrap items-center justify-between gap-4 px-4">
        <div className="hidden lg:flex items-center gap-2">
          <p className="text-gray-600">Welcome back,</p>
          <p className="font-medium text-gray-800">Admin</p>
        </div>
        <div className="flex items-center justify-end gap-4 w-full lg:w-auto">
          <div className="flex items-center gap-3">
            <div className="relative">
              <i className="bi bi-envelope p-2 bg-sky-50 rounded-sm text-gray-500"></i>
              <span className="absolute -top-1 -right-0.5 text-red-500 text-lg font-medium rounded-full h-5 w-5 flex items-center justify-center">
                *
              </span>
            </div>
            <i className="bi bi-bell p-2 bg-sky-50 rounded-sm text-gray-500"></i>
          </div>

          <Menu as="div" className="relative">
            <MenuButton className="inline-flex items-center justify-center gap-x-1.5 rounded-md px-1 py-1 text-sm font-semibold bg-white outline-none focus:outline-none">
              <Image
                src="/images/mentor/09.jpg"
                width={35}
                height={35}
                alt="User Profile"
                className="rounded-full"
              />
              <div className="hidden md:flex items-center gap-1 text-start">
                <span className="font-medium text-gray-800 text-sm">
                  Bankole Olaniyi
                </span>
                <i className="bi bi-chevron-down text-gray-500 text-xs"></i>
              </div>
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <div className="py-1">
                <MenuItem>
                  <Link
                    href="/signin"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 outline-none"
                  >
                    Sign-Out
                  </Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </header>
    </div>
  );
}

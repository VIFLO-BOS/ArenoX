"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { useState } from "react";
import { navigationItems } from "./nav-menu";
import Mobile_menu from "./mobile_menu";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RightMenu from "./rightmenu-client";

interface mainMenuProps {
  scrolledEffect?: boolean;
}

export default function Main_menu({ scrolledEffect }: mainMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const bouncqNavmenu = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring" as const, bounce: 0.5, duration: 1 },
  };

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden lg:flex lg:gap-x-4">
        {navigationItems.map((item, index) => (
          <motion.div
            key={index}
            initial={bouncqNavmenu.initial}
            animate={bouncqNavmenu.animate}
            transition={{
              ...bouncqNavmenu.transition,
              delay: index * 0.1,
            }}
          >
            <Menu as="div" className="relative inline-block group">
              {/* Main menu button directly as a Link */}
              <MenuButton
                as={Link}
                href={item.pathname}
                className={`rounded-full px-4 py-2 font-semibold ${
                  isHomepage
                    ? scrolledEffect
                      ? "text-gray-700 hover:bg-gray-100/80"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                    : "text-gray-600 hover:bg-gray-100/80 hover:text-blue-600"
                } focus:outline-none transition-all duration-300 inline-flex items-center gap-x-1.5`}
              >
                {item.name}
                {item.iconName && (
                  <i className={`${item.iconName} pl-0.5 text-xs opacity-70`} />
                )}
              </MenuButton>

              {/* Dropdown submenu */}
              {item.submenu && (
                <MenuItems
                  static
                  className="
                    absolute right-0 top-full min-w-56 mt-2
                    rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 border border-white/20
                    opacity-0 invisible translate-y-2 pointer-events-none
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto
                    transition-all duration-300 ease-out
                    z-50 overflow-hidden
                  "
                >
                  <div
                    className={
                      item.submenu.length > 8
                        ? "grid grid-cols-2 p-2"
                        : "flex flex-col p-2"
                    }
                  >
                    {item.submenu.map((submenuItem, submenuIndex) => (
                      <MenuItem
                        key={submenuIndex}
                        as={Link}
                        href={submenuItem}
                        className="
                          block px-4 py-2.5 text-sm font-medium text-gray-600 rounded-xl
                          hover:bg-blue-50 hover:text-blue-600 transition-colors
                        "
                      >
                        {submenuItem}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              )}
            </Menu>
          </motion.div>
        ))}
      </div>

      {/* Right-side menu */}
      <div className=" flex items-center flex-1 justify-end gap-6">
        <RightMenu />
        {/* Mobile hamburger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md  bg-white p-1  mr-3.5`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <Mobile_menu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
}

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
                className={`rounded-md py-1 font-semibold ${
                  isHomepage
                    ? scrolledEffect
                      ? "text-gray-900"
                      : "text-white"
                    : "text-gray-800"
                } focus:outline-none transition group-hover:text-blue-600 inline-flex items-center gap-x-1.5`}
              >
                {item.name}
                {item.iconName && <i className={`${item.iconName} pl-0.5`} />}
              </MenuButton>

              {/* Dropdown submenu */}
              {item.submenu && (
                <MenuItems
                  static
                  className="
                    absolute right-0 top-full min-w-56
                    rounded-xl  bg-white shadow-lg ring-1 ring-black/5
                    opacity-0 invisible translate-y-1 pointer-events-none
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto
                    transition-all duration-200 ease-out
                    z-50
                  "
                >
                  <div
                    className={
                      item.submenu.length > 8
                        ? "grid grid-cols-2"
                        : "flex flex-col"
                    }
                  >
                    {item.submenu.map((submenuItem, submenuIndex) => (
                      <MenuItem
                        key={submenuIndex}
                        as={Link}
                        href={submenuItem}
                        className="
                          block px-4 py-2 text-sm font-medium text-gray-900
                          data-[focus]:bg-gray-100 data-[focus]:text-gray-900
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
        <RightMenu  />
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

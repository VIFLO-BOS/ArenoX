import React, { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

import { navigationItems } from "./nav-menu";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { fadeUp } from "@/utils/animation/fadeUpProps";

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Mobile_menu({
  mobileMenuOpen,
  setMobileMenuOpen,
}: MobileMenuProps) {
  return (
    <>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, ease: easeInOut }}
          className="fixed inset-0 z-50 transition-all duration-300 "
        >
          <DialogPanel className="fixed inset-y-0 right-0 z-50 overflow-y-aut bg-black ./kmi.n\Atext-black  w-60 h-full transition-all duration-500 ease">
            <div className="flex  items-center justify-end ">
              <Link href="/" aria-label="Home" className="hidden -m-1.5 p-1.5">
                <Image
                  src="/images/large-logo.jpg"
                  width={50}
                  height={10}
                  alt="logo"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="m-2.5 mr-4 rounded-md p-2.5  text-gray-400 flex items-center-safe gap-1 hover:text-white cursor-pointer font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="font-medium">Back</span>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
            <p className="px-3 text-gray-200 font-medium text-lg border-b border-gray-400 mb-5 w-100">Arenox Menu</p>
            <div className=" flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2  text-gray-400 p-1 mt-5 h-100">
                  {navigationItems.map((item, index) => (
                    <motion.div key={index}>
                      <Menu
                        as="div"
                        className="relative rounded inline-block group w-58 pl-3  py-2 hover:bg-white/20 transition-all duration-500 ease-in-out"
                      >
                        {/* Main menu button directly as a Link */}
                        <MenuButton
                          as={Link}
                          href={item.pathname}
                          className={`font-semibold 
																	} focus:outline-none transition group-hover:text-white inline-flex items-center gap-x-1.5`}
                        >
                          {item.name}
                          {/* {item.iconName && (
                            <i className={`${item.iconName} pl-0.5`} />
                          )} */}
                        </MenuButton>

                        {/* Dropdown submenu */}
                        {/* {item.submenu && (
                          <MenuItems
                            static
                            className="
																		absolute -right-5 -top-0 min-w-30
																		rounded-xl  bg-white shadow-lg ring-1 ring-black/5
																		opacity-0 invisible translate-y-1 pointer-events-none
																		group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto
																		transition-all duration-300 ease-out
																		z-50
																		max-w-50
																	"
                          >
                            <div>
                              {item.submenu.map((submenuItem, submenuIndex) => (
                                <MenuItem
                                  key={submenuIndex}
                                  as={Link}
                                  href={submenuItem}
                                  className="
																					block px-4 py-2 text-sm font-medium text-gray-900
																					data-[focus]:bg-gray-100 data-[focus]:text-gray-900
																					hover:text-blue-600
																				"
                                >
                                  {submenuItem}
                                </MenuItem>
                              ))}
                            </div>
                          </MenuItems>
                        )} */}
                      </Menu>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </motion.div>
      </Dialog>

    </>
  );
}

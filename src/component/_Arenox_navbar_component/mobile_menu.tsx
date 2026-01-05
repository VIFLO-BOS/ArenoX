import React from "react";
import { Menu, MenuButton } from "@headlessui/react";
import { navigationItems } from "./nav-menu";
import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

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
          className="fixed inset-0 z-50 transition-all duration-300"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <DialogPanel className="fixed inset-y-0 right-0 z-50 overflow-y-auto bg-gray-900/95 backdrop-blur-2xl border-l border-white/10 w-72 h-full shadow-2xl transition-all duration-500 ease">
            <div className="flex items-center justify-between p-6">
              <Link
                href="/"
                aria-label="Home"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/images/large-logo.jpg"
                  width={50}
                  height={10}
                  alt="logo"
                  className="h-10 w-auto rounded-lg"
                />
              </Link>
              <button
                type="button"
                className="rounded-full p-2 text-white bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="bi bi-x-lg text-lg"></i>
              </button>
            </div>

            <div className="px-6 pb-6">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4 border-b border-gray-700/50 pb-2">
                Menu
              </p>
              <div className="space-y-1">
                {navigationItems.map((item, index) => (
                  <motion.div key={index}>
                    <Menu as="div" className="relative group w-full">
                      <MenuButton
                        as={Link}
                        href={item.pathname}
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-300 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300"
                      >
                        {item.name}
                        <i className="bi bi-chevron-right text-gray-600 group-hover:text-blue-400 text-xs"></i>
                      </MenuButton>
                    </Menu>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <Link
                  href="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-3 rounded-xl bg-white/5 text-white font-medium hover:bg-white/10 border border-white/10 mb-3 transition-all"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </DialogPanel>
        </motion.div>
      </Dialog>
    </>
  );
}

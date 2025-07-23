import React, { useState } from "react";
import { navigationItems } from "./nav-menu";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
				className="lg:hidden">
				<div className="fixed inset-0 z-50">
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex  items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<img
									src="./public/large-logo.jpg"
									alt="logo"
									className="h-8 w-auto"
								/>
							</a>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700">
								<span className="sr-only">Close menu</span>
								<XMarkIcon
									aria-hidden="true"
									className="size-6"
								/>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigationItems.map((items) => (
										<a
											key={items.name}
											href={items.pathname}
											className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
											{items.name}
										</a>
									))}
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigationItems } from "./nav-menu";
import { Dialog, DialogPanel } from "@headlessui/react";
import Logo from "./logo";
import Main_menu from "./main_menu";

export const NavbarMenu = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<div className="w-full h-full">
			<header className="fixed inset-x-0 top-0 z-50">
				<nav
					arial-label="Global"
					className="flex items-center justify-between p-3 lg:px-6"
				>
					<Logo />
					<Main_menu/>
				</nav>
			</header>
		</div>
	);
};

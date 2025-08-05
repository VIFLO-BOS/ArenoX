import { useState } from "react";
import Logo from "./logo";
import Main_menu from "./main_menu";

export const NavbarMenu = () => {
	return (
		<div className="container mx-auto">
			<header className="fixed inset-x-0 top-0 z-50">
				<nav
					arial-label="Global"
					className="flex items-center justify-between py-5 px-5 sm:px-10 lg:px-15 xl:px-20"
				>
					<Logo />
					<Main_menu/>
				</nav>
			</header>
		</div>
	);
};

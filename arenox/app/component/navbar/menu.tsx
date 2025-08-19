import { useState } from "react";
import Logo from "./logo";
import Main_menu from "./main_menu";

export const NavbarMenu = () => {
	return (
		<div className="">
			<header className="fixed inset-x-0 top-0 z-50">
				<nav
					arial-label="Global"
					className="flex items-center justify-between py-5 px-9 lg:px-15.5 backdrop-filter backdrop-blur-2xl"
				>
					<Logo />
					<Main_menu/>
				</nav>
			</header>
		</div>
	);
};

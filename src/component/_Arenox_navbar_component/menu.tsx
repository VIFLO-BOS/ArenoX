import { useEffect, useState } from "react";
import Logo from "./logo";
import Main_menu from "./main_menu";

export const NavbarMenu = () => {
	const [isScrolled, setisScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setisScrolled(true);
			} else {
				setisScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="fixed inset-x-0 top-0 z-50">
			<nav
				aria-label="Global"
				className={`flex items-center justify-between py-3 px-2 lg:px-15 transition-colors duration-500
          ${
				isScrolled
					? "bg-white backdrop backdrop-filter backdrop-blur-3xl "
					: "bg-transparent "
			}`}>
				<div className="flex items-center justify-between w-full">
					<Logo />
					<Main_menu scrolledEffect={isScrolled} />
				</div>
			</nav>
		</header>
	);
};

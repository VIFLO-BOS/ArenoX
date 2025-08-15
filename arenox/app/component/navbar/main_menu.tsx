import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { navigationItems } from "./nav-menu";
import Mobile_menu from "./mobile_menu";
import { motion } from "motion/react";


export default function Main_menu() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const bouncqNavmenu = {
		initial: { opacity: 0, y: -20 },
		animate: { opacity: 1, y: 0 },
		transition: { type: "spring" as const, bounce: 0.5, duration: 1 },
	};
	return (
		<>
			{/* this is the hamburger menu*/}
			<div className="flex lg:hidden">
				<button
					type="button"
					onClick={() => setMobileMenuOpen(true)}
					className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900">
					<span className="sr-only">Open main menu</span>
					<Bars3Icon aria-hidden="true" className="size-6" />
				</button>
			</div>

			{/* the navmenu */}
			<div className="hidden lg:flex lg:gap-x-4">
				{navigationItems.map((item, index) => (
					<motion.a
						key={index}
						href={item.pathname}
						className="text-sm/6 font-semibold text-black"
						initial={bouncqNavmenu.initial}
						animate={bouncqNavmenu.animate}
						transition={{
							...bouncqNavmenu.transition,
							delay: index * 0.1,
						}}>
						{item.name}
					</motion.a>
				))}
			</div>

			<div className="hidden lg:flex lg:flex-1 lg:justify-end">
				<a href="#" className="text-sm/6 font-semibold text-black">
					Log in <span aria-hidden="true">&rarr;</span>
				</a>
			</div>
			<Mobile_menu
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>
		</>
	);
}

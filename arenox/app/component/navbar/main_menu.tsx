import { Bars3Icon} from "@heroicons/react/24/outline";
import { useState } from "react";
import { navigationItems } from "./nav-menu";
import Mobile_menu from "./mobile_menu";

export default function Main_menu() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
		<>
			{/* this is the hamburger menu*/}
			<div className="flex lg:hidden">
				<button
					type="button"
					onClick={() => setMobileMenuOpen(true)}
					className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				>
					<span className="sr-only">Open main menu</span>
					<Bars3Icon aria-hidden="true" className="size-6" />
				</button>
			</div>

			{/* the navmenu */}
			<div className="hidden lg:flex lg:gap-x-4">
				{navigationItems.map((item) => (
					<a
						key={item.name}
						href={item.pathname}
						className="text-sm/6 font-semibold text-gray-900"
					>
						{item.name}
					</a>
				))}
          </div>
          

			<div className="hidden lg:flex lg:flex-1 lg:justify-end">
				<a href="#" className="text-sm/6 font-semibold text-gray-900">
					Log in <span aria-hidden="true">&rarr;</span>
				</a>
          </div>
		  <Mobile_menu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
		</>
  );
}

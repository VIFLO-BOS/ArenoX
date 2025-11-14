import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export default function Right_menu() {
	return (
		<div className="flex items-center ">
			<Menu as="div" className="relative inline-block">
				<MenuButton className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md  px-2 py-1   text-sm font-semibold  text-black  outline-0 transition-all duration-300">
					<Image
						src="/images/mentor/09.jpg"
						width={30}
						height={30}
						alt=""
						className="rounded-full ring-1.5 ring-white"
					/>
					{/* <span>Account</span> */}
					<i className="bi bi-chevron-down text-gray-400"></i>
				</MenuButton>
				<MenuItems
					transition
					modal={false}
					className="absolute right-0 z-10 mt-2 w-25 origin-top-right rounded-md bg-white outline-1 -outline-offset-1 outline-white/10 ring-1 ring-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
					<div className="py-1">
						<MenuItem>
							<Link
								href="/signin"
								className="block px-4 py-2 text-sm text-gray-950 font-semibold data-focus:bg-white/5 data-focus:text-gray-600 data-focus:outline-hidden">
								Sign-In
							</Link>
						</MenuItem>
						<MenuItem>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-gray-950 font-semibold data-focus:bg-white/5 data-focus:text-gray-600 data-focus:outline-hidden">
								Sign-Up
							</a>
						</MenuItem>
					</div>
				</MenuItems>
			</Menu>
		</div>
	);
}

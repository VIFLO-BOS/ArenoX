import React from "react";

export default function Logo() {
	return (
		<>
			{/* this is the navbar menu logo */}
			<div className="flex lg:flex-1">
				<a href="#" className="-m-1.5 p-1.5">
					<img
						src="/images/large-logo.jpg"
						alt="logo"
						className="h-10 w-auto box-shadow rounded-md"
					/>
				</a>
			</div>
		</>
	);
}

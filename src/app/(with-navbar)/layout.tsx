// app/(with-navbar)/layout.tsx

import Footer from "@/component/_Arenox_footer_component/page";
import Navbar from "@/component/_Arenox_navbar_component/page";


export default function WithNavbarLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}

// app/(with-navbar)/layout.tsx

import Footer from "@/component/_Arenox_footer_component/page";
import Navbar from "@/component/_Arenox_navbar_component/page";

/* @ layout-component : layout wrapper that includes navbar and footer for public pages */

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* @ render : render navbar, page content, and footer */
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

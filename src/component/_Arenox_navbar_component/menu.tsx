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
        className={`flex items-center justify-between py-3 px-2 lg:px-15 transition-all duration-500
          ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100"
              : "bg-transparent "
          }`}
      >
        <div className="flex items-center justify-between w-full">
          <Logo />
          <Main_menu scrolledEffect={isScrolled} />
        </div>
      </nav>
    </header>
  );
};

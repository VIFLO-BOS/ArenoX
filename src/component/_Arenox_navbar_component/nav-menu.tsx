// arenoX Navigation Menu Structure
// --------------------------------
// Top-level menu items:
// 1. Home           - Landing page with hero section and overview
// 2. Courses        - List of all available courses (with search/filter)
// 3. programs     - Browse courses by category (e.g., Design, Development)
// 4. My Learning    - User dashboard showing enrolled courses and progress
// 5. About          - Information about arenox mission and team
// 6. Contact        - Contact form and support info
//
// Secondary links (nested under user avatar or similar):
// - Profile         - View and edit user profile details
// - Settings        - Account settings, preferences
// - Sign Out        - Log out of the platform
//
// Mobile menu:
// • Collapsed hamburger icon that expands to show all top-level items and secondary links
//
// Accessibility:
// • Highlight active page
// • Keyboard navigation support
// • ARIA labels on expandable menus

interface navigationItems {
  name: string;
  pathname?: string;
  iconName?: string;
  submenu?: string[];
  // subprogram?: string[];
  action?: "";
}

export const navigationItems = [
  { name: "Home", pathname: "/" },
  {
    name: "Courses",
    pathname: "/courses",
    iconName: "bi bi-arrow-down-short",
    submenu: [
      "Development",
      "Business",
      "Design",
      "Marketing",
      "Data Science",
      "Managament",
    ],
  },
  {
    name: "Programs",
    pathname: "/program",
    iconName: "bi bi-arrow-down-short",
    submenu: ["Bootcamps", "Certifications", "Degrees"],
  },
  { name: "Blog", pathname: "/blog" },
  { name: "Pricing", pathname: "/pricing" },
  { name: "About", pathname: "/about" },
  { name: "Contact", pathname: "/contact" },
];

export const userMenuItems = [
  { name: "Profile", pathname: "/profile" },
  { name: "Settings", pathname: "/settings" },
  { name: "Sign Out", action: "logout" },
];

export const mobileMenuConfig = {
  toggleIcon: true,
  items: [...navigationItems, ...userMenuItems],
};

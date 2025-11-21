'use client';

import CardNav from '../../components/CardNav';

/**
 * NavBar Component
 *
 * Renders the top navigation bar using the `CardNav` component.
 * Includes navigation menu items with:
 * - Section anchors (`href`)
 * - Sub-link dropdown items
 * - Custom background & text colors per menu category
 *
 * The nav is centered and fixed on the screen with automatic responsiveness.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered navigation bar.
 *
 * @remarks
 * - `pointer-events-none` is applied to the wrapper to prevent accidental blocking of scrolling,
 *   while the inner container uses `pointer-events-auto` so the navbar remains fully interactive.
 * - Menu animation behavior is handled entirely inside `CardNav`.
 *
 * @example
 * // Usage inside root layout or individual page
 * <NavBar />
 */
export default function NavBar() {
  const items = [
    {
      label: "Home",
      href: "#profile",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Profile", href: "#profile" },
      ],
    },
    {
      label: "Projects",
      href: "#projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured Projects", href: "#projects" },
      ],
    },
    {
      label: "About",
      href: "#about",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Experience", href: "#about" },
        { label: "Technical Skill", href: "#skill" },
      ],
    },
    {
      label: "Contact",
      href: "#contact",
      bgColor: "#342849",
      textColor: "#fff",
      links: [
        { label: "Contact Me!", href: "#contact" },
      ],
    },
  ];

  return (
    <div className='sticky top-0 z-50'>
      <CardNav
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="back.out(1.7)"
      />
    </div>
  );
}

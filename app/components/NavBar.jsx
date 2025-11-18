'use client';

import CardNav from '../../components/CardNav';

export default function NavBar() {
  const items = [
    {
      label: "Home",
      href: "#home",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Profile", href: "#profile" }
      ]
    },
    {
      label: "Projects",
      href: "#projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured Projects", href: "#projects" }
      ]
    },
    {
      label: "About",
      href: "#about",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Experience", href: "#about" },
        { label: "Technical Skill", href: "#skill" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#342849", 
      textColor: "#fff",
      links: [
        { label: "Contact Me!", href: "#contact" }
      ]
    }
  ];

  return (
    <div
      className={`pointer-events-none fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] rounded-xl transition-all duration-500`}
    >
      <div className="pointer-events-auto">
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
    </div>
  );
}
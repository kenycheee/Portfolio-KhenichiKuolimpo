'use client';

import { useEffect, useState } from "react";
import GradientText from "../../components/GradientText";
import GooeyNav from "../../components/GooeyNav";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-[#0b1220cc] backdrop-blur-md shadow-sm"
            : "bg-[var(--background)] shadow-md"
        } z-40`}
      >
      <div className="flex items-center justify-between max-w-[85rem] mx-auto px-4 md:px-12 py-4 md:py-6">
        <div>
          <GradientText
            colors={["#8df4ff", "#f3ffa5", "#81ffc9"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl tracking-wide select-none px-4 -mr-10"
          >
            Khenichi Kuolimpo
          </GradientText>
        </div>

        <div className="relative flex items-center justify-end">
          <div className="scale-90 sm:scale-95 md:scale-100 min-w-[200px]">
            <GooeyNav
              items={items}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

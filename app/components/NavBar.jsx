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
            : "bg-[#0b1220] shadow-md"
        } z-40`}
      >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-12 py-4 md:py-6">
        <div className="flex-shrink-0">
          <GradientText
            colors={["#e3f8ef", "#7ba2fb", "#e3f8ef"]}
            animationSpeed={10}
            showBorder={true}
            className="text-2xl font-semibold tracking-wide select-none px-4 -mr-10"
          >
            Khenichi Kuolimpo
          </GradientText>
        </div>

        <div className="relative flex items-center justify-end">
          <div className="scale-90 sm:scale-95 md:scale-100 min-w-[200px]">
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

'use client';

import { useEffect, useState } from 'react';
import CardNav from '../../components/CardNav';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] rounded-xl transition-all duration-500 ${
        scrolled
          ? 'top-[0.4em] md:top-[0.8em] backdrop-blur-xl bg-white/70 shadow-[0_0_25px_rgba(0,0,0,0.15)] scale-[0.98]'
          : 'top-[1.2em] md:top-[2em] backdrop-blur-md bg-white/80 shadow-[0_0_20px_rgba(0,0,0,0.1)] scale-100'
      }`}
    >
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

// 'use client';

// import { useEffect, useState } from "react";
// import GradientText from "../../components/GradientText";
// import GooeyNav from "../../components/GooeyNav";

// export default function NavBar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const items = [
//     { label: "Home", href: "#" },
//     { label: "Projects", href: "#" },
//     { label: "About", href: "#" },
//     { label: "Contact", href: "#" },
//   ];

//   return (
//       <nav
//         className={`fixed top-0 left-0 w-full transition-all duration-500 ${
//           isScrolled
//             ? "bg-[#0b1220cc] backdrop-blur-md shadow-sm"
//             : "bg-[var(--main)] shadow-md"
//         } z-40`}
//       >
//       <div className="flex items-center justify-between max-w-[85rem] mx-auto px-4 md:px-12 py-4 md:py-6">
//         <div>
//           <GradientText
//             colors={["#8df4ff", "#f3ffa5", "#81ffc9"]}
//             animationSpeed={3}
//             showBorder={false}
//             className="text-4xl tracking-wide select-none px-4 -mr-10"
//           >
//             Khenichi Kuolimpo
//           </GradientText>
//         </div>

//         <div className="relative flex items-center justify-end">
//           <div className="scale-90 sm:scale-95 md:scale-100 min-w-[200px]">
//             <GooeyNav
//               items={items}
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
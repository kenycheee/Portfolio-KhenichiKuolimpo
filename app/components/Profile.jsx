'use client';

import ChromaGrid from "../../components/ChromaGrid";
import RotatingText from "../../components/RotatingText";

export default function Profile() {
  const items = [
    {
      image: "/assets/Profile.jpeg",
      title: "Khenichi Kuolimpo",
      subtitle: "Untarian '23 • Projects 2+",
      handle: "Information Technology",
      gradient: "linear-gradient(145deg, rgba(72, 62, 255, 0.4), var(--main))",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-center items-center min-h-screen px-8 md:px-20 lg:px-32 py-16 gap-x-30">
      <div className="flex flex-col items-start text-left space-y-6 max-w-xl -mt-75 -ml-60">
        <div>
          <RotatingText
            texts={[
              "Web Development",
              "Mobile Programming",
              "UI/UX Design",
              "Video Editing",
              "Database",
            ]}
            mainClassName="text-[var(--blacktext)] bg-[var(--background)] text-2xl sm:text-4xl md:text-5xl font-semibold tracking-wide overflow-hidden drop-shadow-[var(--dropshadow)] border-2 border-[var(--bordergrey)] px-4 py-2 rounded-lg"
            staggerFrom={"first"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </div>

        <div className="relative origin-left -mt-3 text-[var(--blacktext)] bg-[var(--background)]">
          <p className="-mr-30 pl-1">
            Information Technology Student • Passionate • Fast and Eager to learn • Adaptable • Proactive
          </p>
        </div>
      </div>

      <div className="flex justify-center md:justify-end pointer-events-auto z-20 translate-x-50">
        <ChromaGrid
          items={items}
          radius={260}
          damping={0.5}
          fadeOut={0.5}
          ease="power3.out"
        />
      </div>
    </section>
  );
}

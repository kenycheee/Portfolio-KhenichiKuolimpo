'use client';

import ChromaGrid from "../../components/ChromaGrid";
import RotatingText from "../../components/RotatingText";
import TrueFocus from "../../components/TrueFocus";
import SpotlightCard from "../../components/SpotlightCard";

export default function Profile() {
  const items = [
    {
      image: "/assets/Profile.jpeg",
      title: "Khenichi Kuolimpo",
      subtitle: "Untarian '23 • Projects 2+",
      handle: "Information Technology",
      borderColor: "#60A5FA",
      gradient:"linear-gradient(145deg, rgba(96,165,250,0.4), rgba(17,24,39,0.9))",
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
              "Database Management",
            ]}
            mainClassName="text-black bg-white text-2xl sm:text-4xl md:text-5xl font-semibold tracking-wide overflow-hidden drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] border-2 border-black/25 px-4 py-2 rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </div>

        <div className="relative scale-[0.35] origin-left opacity-95 -mt-5">
          <TrueFocus
            sentence="Information-Technology-Student Passionate Fast-and-Eager-to-learn Adaptable Proactive"
            manualMode={false}
            blurAmount={10}
            borderColor="#130066ff"
            animationDuration={1.5}
            pauseBetweenAnimations={1}
          />
        </div>

        <div>
          <SpotlightCard className="custom-spotlight-card flex items-center gap-2 p-2 max-h-[80px]" spotlightColor="#00b7ff44">
            <div className="flex items-center gap-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-6 h-6 md:w-8 md:h-8"/>
              <div>
                <h4 className="text-black text-lg font-semibold">Web Development</h4>
                <p className="text-gray-400 text-sm">HTML • CSS • JavaScript</p>
              </div>
            </div>
          </SpotlightCard>
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

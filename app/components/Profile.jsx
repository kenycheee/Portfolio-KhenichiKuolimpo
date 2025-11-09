'use client';

import ChromaGrid from "../../components/ChromaGrid";
import RotatingText from "../../components/RotatingText";
import LogoLoop from "../../components/LogoLoop";

// import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

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

  const imageLogos = [
    { src: "https://skillicons.dev/icons?i=html", alt: "HTML5" },
    { src: "https://skillicons.dev/icons?i=css", alt: "CSS3" },
    { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript" },
    { src: "https://skillicons.dev/icons?i=java", alt: "Java" },
    { src: "https://skillicons.dev/icons?i=dart", alt: "Dart" },
    { src: "https://skillicons.dev/icons?i=cpp", alt: "C++" },
    { src: "https://skillicons.dev/icons?i=php", alt: "PHP" },
    { src: "https://skillicons.dev/icons?i=python", alt: "Python" },
    { src: "https://skillicons.dev/icons?i=react", alt: "React" },
    { src: "https://skillicons.dev/icons?i=next", alt: "Next.js" },
    { src: "https://skillicons.dev/icons?i=flutter", alt: "Flutter" },
    { src: "https://skillicons.dev/icons?i=laravel", alt: "Laravel" },
    { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js" },
    { src: "https://skillicons.dev/icons?i=jquery", alt: "jQuery" },
    { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind CSS" },
    { src: "https://skillicons.dev/icons?i=bootstrap", alt: "Bootstrap" },
    { src: "https://skillicons.dev/icons?i=firebase", alt: "Firebase" },
    { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB" },
    { src: "https://skillicons.dev/icons?i=postgres", alt: "PostgreSQL" },
    { src: "https://skillicons.dev/icons?i=vercel", alt: "Vercel" },
    { src: "https://skillicons.dev/icons?i=github", alt: "GitHub" },
    { src: "https://skillicons.dev/icons?i=git", alt: "Git" },
    { src: "https://skillicons.dev/icons?i=vscode", alt: "VS Code" },
    { src: "https://skillicons.dev/icons?i=figma", alt: "Figma" },
    { src: "https://skillicons.dev/icons?i=ps", alt: "Photoshop" },
    { src: "https://skillicons.dev/icons?i=htmx", alt: "HTMX" },
    { src: "https://skillicons.dev/icons?i=postman", alt: "Postman" },
    { src: "https://skillicons.dev/icons?i=pr", alt: "Premiere Pro" }
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

        <div className="relative origin-left -mt-1 text-[var(--blacktext)] bg-[var(--background)]">
          <p className="-mr-30 pl-1 text-base">
            Information Technology Student • Passionate • Fast and Eager to learn • Adaptable • Proactive
          </p>
        </div>

        <div className="mt-5 w-full overflow-hidden">
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={60}
            gap={40}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
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

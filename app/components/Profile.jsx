'use client';

import ChromaGrid from "../../components/ChromaGrid";
import RotatingText from "../../components/RotatingText";
import LogoLoop from "../../components/LogoLoop";
import GlareHover from "../../components/GlareHover";

export default function Profile() {
  const items = [
    {
      image: "/assets/Profile.jpeg",
      title: "Khenichi Kuolimpo",
      subtitle: "Untarian '23 • Projects 2+",
      handle: "Information Technology",
      gradient: "linear-gradient(to right, #0f172a, #38bdf8, #1e3a8a)",
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
    { src: "https://skillicons.dev/icons?i=pr", alt: "Premiere Pro" },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 lg:px-28 py-16 gap-65">
      {/* KIRI - TEKS */}
      <div className="flex flex-col items-start text-left space-y-6 max-w-xl md:w-1/2">
        {/* Rotating Text */}
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
            staggerFrom="first"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </div>

        {/* Deskripsi */}
        <div className="text-[var(--blacktext)] bg-[var(--background)]">
          <p className="text-base leading-relaxed">
            Information Technology Student • Passionate • Fast and Eager to learn • Adaptable • Proactive
          </p>
        </div>

        {/* Logo Loop */}
        <div className="mt-10 w-full overflow-hidden">
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

        {/* Tombol GlareHover */}
        <div className="flex flex-wrap mt-10 gap-5">
          <GlareHover glareColor="#ffffff" glareOpacity={0.7}>
            <a
              href="/Khenichi Kuolimpo Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2 border-[1.5px] border-black bg-gradient-to-r from-[#052e16] via-[#10b981] to-[#052e16] text-white rounded-lg font-semibold">
                View CV
              </button>
            </a>
          </GlareHover>
          
          <GlareHover glareColor="#ffffff" glareOpacity={0.7}>
            <a
              href="https://www.instagram.com/khenichi.k/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2 border-[1.5px] border-black bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#962fbf] text-white rounded-lg font-semibold">
                Instagram
              </button>
            </a>
          </GlareHover>

          <GlareHover glareColor="#ffffff" glareOpacity={0.7}>
            <a
              href="https://www.linkedin.com/in/khenichi-kuolimpo-19067838a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2 border-[1.5px] border-black bg-gradient-to-r from-[#0f766e] via-[#14b8a6] to-[#a7f3d0] text-white rounded-lg font-semibold">
                LinkedIn
              </button>
            </a>
          </GlareHover>

          <GlareHover glareColor="#ffffff" glareOpacity={0.7}>
            <a
              href="https://github.com/kenycheee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2 border-[1.5px] border-black bg-gradient-to-r from-[#0f172a] via-[#1e40af] to-[#0f172a] text-white rounded-lg font-semibold">
                GitHub
              </button>
            </a>
          </GlareHover>
        </div>

      </div>

      {/* KANAN - FOTO */}
      <div className="flex justify-center md:justify-end md:w-1/2 bg-gradient-to-r from-[#121212] via-[#6366f1] to-[#121212] rounded-2xl p-4">
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

'use client';

import ProjectsModal from "../../components/ProjectModal";
import AnimatedContent from "../../components/AnimatedContent";

export default function Projects() {
  return (
    <AnimatedContent
      distance={150}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
      triggerOnce={false}
    >
      <section className="w-full text-center space-y-6">
        {/* Judul pakai Shuffle auto jalan */}
        <div className="text-4xl md:text-5xl font-bold text-black">
            Featured Projects
        </div>

        {/* Modal daftar project */}
        <div className="text-left mt-20">
          <ProjectsModal />
        </div>
      </section>
    </AnimatedContent>
  );
}

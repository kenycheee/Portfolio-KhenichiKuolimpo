'use client';

import ProjectsModal from "../../components/ProjectModal";
import AnimatedContent from "../../components/AnimatedContent";
import Shuffle from "../../components/Shuffle";

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
      delay={0.5}
    >
      <section className="w-full text-center space-y-6">
        {/* Judul pakai Shuffle auto jalan */}
        <Shuffle
          text="Featured Projects"
          shuffleDirection="right"
          duration={0.4}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.05}
          threshold={0.1}
          triggerOnce={false}
          triggerOnHover={false}
          respectReducedMotion={false}
          autoStart={true}
          className="text-4xl md:text-5xl font-bold text-black"
        />

        {/* Modal daftar project */}
        <div className="text-left mt-8">
          <ProjectsModal />
        </div>
      </section>
    </AnimatedContent>
  );
}

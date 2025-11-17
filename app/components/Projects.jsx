'use client';

import ProjectsModal from "../../components/Modal/ProjectModal";
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
        <div className="text-4xl md:text-5xl font-bold text-black">
            Featured Projects
        </div>

        <div className="text-black mx-auto max-w-3xl leading-relaxed">
            A curated collection of my personal and collaborative projects, showcasing
            my journey in web and mobile development. Each project highlights the
            technologies I’ve explored, problems I’ve solved, and the creative solutions
            I’ve built along the way.
        </div>

        <div className="text-left mt-20">
          <ProjectsModal />
        </div>
      </section>
    </AnimatedContent>
  );
}

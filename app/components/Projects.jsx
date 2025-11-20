/**
 * @file Projects.jsx
 * @description A section showcasing featured projects with animated content and modal view functionality.
 * This component serves as the Projects page/section in a portfolio website, highlighting
 * selected works to display the developer's capabilities and experience in web and mobile development.
 */

"use client";

import ProjectsModal from "../../components/Modal/ProjectModal";
import AnimatedContent from "../../components/AnimatedContent";

/**
 * Projects Component
 *
 * Renders a featured project section wrapped with animated scroll effects.
 * It displays a title, a brief introduction text, and a modal component to show project details.
 *
 * @component
 * @returns {JSX.Element} A section containing animated introduction and a modal trigger for projects.
 *
 * @example
 * <Projects />
 */
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
      triggerOnce={true}
    >
      <section className="w-full text-center space-y-6">

        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Featured Projects
        </h2>

        <p className="text-black mx-auto leading-relaxed max-w-[300px] sm:max-w-sm md:max-w-xl lg:max-w-3xl">
          A curated collection of my personal and collaborative projects, showcasing
          my journey in web and mobile development. Each project highlights the
          technologies I’ve explored, problems I’ve solved, and the creative solutions
          I’ve built along the way.
        </p>

        <div className="text-left mt-20">
          <ProjectsModal />
        </div>
      </section>
    </AnimatedContent>
  );
}

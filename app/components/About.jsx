"use client";

import AnimatedContent from "../../components/AnimatedContent";
import ExperienceModal from "../../components/Modal/ExperienceModal";

/**
 * About Page Component
 *
 * This page displays the user's personal introduction and professional experience.
 * It is wrapped inside the `AnimatedContent` component to provide smooth on-scroll animation.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered About page section.
 *
 * @example
 * // Use normally inside a Next.js layout or page
 * <About />
 *
 * @remarks
 * - Contains a short biography and experience modal section.
 * - Animation is configured using GSAP via AnimatedContent.
 * - Text and layout are responsive across screen sizes.
 */
export default function About() {
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
        <div className="text-4xl md:text-5xl font-bold text-black">
          About Me!
        </div>

        <div className="text-black mx-auto leading-relaxed max-w-[300px] sm:max-w-sm md:max-w-xl lg:max-w-3xl">
          A Information Technology student with a strong passion for software development,
          especially in web and mobile applications. I love exploring new technologies,
          designing intuitive user experiences, and building solutions that make everyday life easier.
          I’m currently seeking any opportunity to enhance my technical skills and contribute
          to real-world projects with a proactive, creative, and growth-oriented mindset.
        </div>

        <div className="text-4xl md:text-5xl font-bold text-black mt-20">
          Experiences
        </div>

        <div className="text-left mt-10">
          <ExperienceModal />
        </div>
      </section>
    </AnimatedContent>
  );
}

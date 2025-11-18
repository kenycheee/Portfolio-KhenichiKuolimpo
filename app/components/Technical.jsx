/**
 * @file About.jsx
 * @description Renders the Technical Skill section with scroll-based animation.
 * This component is typically used as part of the About page to visually present
 * the developer’s technical abilities through the `TechnicalSkill` component.
 */

"use client";

import AnimatedContent from "../../components/AnimatedContent";
import TechnicalSkill from "../../components/TechnicalSkill";

/**
 * About Component — Technical Skill Section
 *
 * Wraps the `TechnicalSkill` component with an animated scroll effect using `AnimatedContent`.
 * When the section scrolls into view, motion and opacity animations are triggered to create
 * a smooth and dynamic appearance.
 *
 * @component
 * @returns {JSX.Element} A section containing an animated technical skill showcase.
 *
 * @example
 * <About />
 */
export default function About () {
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
                <div className="mx-auto max-w-4xl px-4"> 
                    <TechnicalSkill />
                </div>
            </section>
        </AnimatedContent>
    );
}

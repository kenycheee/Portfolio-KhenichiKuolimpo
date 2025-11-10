"use client";

import AnimatedContent from "../../components/AnimatedContent";
import ExperienceModal from "../../components/Modal/ExperienceModal"

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
            <div className="text-left mt-20">
                <ExperienceModal />
            </div>
        </AnimatedContent>
    );
}
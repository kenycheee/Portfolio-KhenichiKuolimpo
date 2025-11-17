"use client";

import AnimatedContent from "../../components/AnimatedContent";
import TechnicalSkill from "../../components/TechnicalSkill";

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
    )
}
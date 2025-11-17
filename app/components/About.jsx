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
            <section className="w-full text-center space-y-6">
                <div className="text-4xl md:text-5xl font-bold text-black">
                    About Me!
                </div>

                <div className="text-black">
                    A Information Technology student with a strong passion for software development, 
                    especially in web and mobile applications. I love exploring new technologies, 
                    designing intuitive user experiences, and building solutions that make everyday life easier.  
                    I'm currently seeking any opportunity to enhance my technical skills and contribute 
                    to real-world projects with a proactive, creative, and growth-oriented mindset.
                </div>

                <div className="text-left mt-20">
                    <ExperienceModal />
                </div>
            </section>
        </AnimatedContent>
    );
}
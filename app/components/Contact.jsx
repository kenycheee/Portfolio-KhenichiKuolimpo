"use client";

import AnimatedContent from "../../components/AnimatedContent";
import ContactBox from "../../components/ContactBox";

export default function Contact () {
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
                    Contact Me
                </div>

                <div className="text-left mx-auto max-w-4xl mt-10">
                    <ContactBox />
                </div>
            </section>
        </AnimatedContent>
    );
}
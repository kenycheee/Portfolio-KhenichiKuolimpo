'use client';

import ProjectsModal from "../../components/ProjectModal";
import AnimatedContent from "../../components/AnimatedContent"

export default function NavBar() {
    return(
        <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
            >
            <div>
                <ProjectsModal />
            </div>
        </AnimatedContent>
    )
}
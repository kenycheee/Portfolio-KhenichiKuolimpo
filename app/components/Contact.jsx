"use client";

import AnimatedContent from "../../components/AnimatedContent";
import ContactBox from "../../components/ContactBox";

/**
 * Contact Page Component
 *
 * Displays the "Contact Me" page with an animated entrance effect using `AnimatedContent`
 * and renders the `ContactBox` component that contains contact information or a contact form.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered Contact page section.
 *
 * @remarks
 * - The main content fades + slides into view via GSAP scroll animation from `AnimatedContent`.
 * - Center-aligned heading and spacing are handled using Tailwind classes.
 * - The ContactBox component holds the actual interaction UI (buttons, form, or links).
 *
 * @example
 * // Used within Next.js routing (app/contact/page.jsx or page.tsx)
 * <Contact />
 */
export default function Contact() {
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

/**
 * Home Page — Portfolio Website
 *
 * Description:
 *  - The main landing page of the portfolio website.
 *  - Displays all primary website sections in a structured order:
 *      1) Profile / Hero Section
 *      2) Featured Projects
 *      3) About / Personal Summary
 *      4) Technical Skills
 *      5) Contact Section
 *
 * UX Notes:
 *  - Sections are given IDs to support smooth navigation via the Navbar.
 *  - Uses large vertical spacing (gap-60) to create clear page separation.
 *  - All sections are centered for improved readability and consistency.
 *
 * Components:
 *  • Profile      — Introduction & rotating titles
 *  • Projects     — List of highlighted projects
 *  • About        — Short biography, education & experience
 *  • Technical    — Skill and tools breakdown
 *  • Contact      — Form and social media info
 *
 */

'use client';

import Profile from "./components/Profile";
import Projects from "./components/Projects";
import About from "./components/About";
import Technical from "./components/Technical";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-60 py-20">
      <section id="profile" className="w-full flex justify-center">
        <Profile />
      </section>

      <section id="projects" className="w-full">
        <Projects />
      </section>

      <section id="about" className="w-full">
        <About />
      </section>

      <section id="skill" className="w-full">
        <Technical />
      </section>

      <section id="contact" className="w-full">
        <Contact />
      </section>
    </main>
  );
}

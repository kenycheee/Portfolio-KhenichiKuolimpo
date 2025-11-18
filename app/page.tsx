'use client';

import Profile from "./components/Profile";
import Projects from "./components/Projects";
import About from "./components/About";
import Technical from "./components/Technical";

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
    </main>
  );
}

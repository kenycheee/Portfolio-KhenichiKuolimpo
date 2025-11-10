'use client';

import Profile from "./components/Profile";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-60 py-20">
      <section className="w-full flex justify-center">
        <Profile />
      </section>

      <section className="w-full">
        <Projects />
      </section>

      <section className="w-full">
        <About />
      </section>
    </main>
  );
}

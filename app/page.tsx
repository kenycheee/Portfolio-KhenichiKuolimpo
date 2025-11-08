'use client';

import Profile from "./components/Profile";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center mt-15">
        <Profile />
      </div>
    </main>
  );
}

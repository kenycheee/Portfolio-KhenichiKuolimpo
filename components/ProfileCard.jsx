"use client";

export default function ProfileCard({ items = [] }) {
  const fallback = [
    {
      image: "/assets/Profile.jpeg",
      name: "Khenichi Kuolimpo",
      role: "Information Technology",
      subtitle: "Untarian '23 • Projects 2+",
      username: "@khenichi.k",
    },
  ];

  const data = items.length ? items : fallback;

  return (
    <div className="w-full max-w-sm">
      {data.map((p, i) => (
        <div key={i} className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition-all duration-300 hover:scale-[1.03] hover:border-neutral-600">
          <div className="w-full h-64 overflow-hidden">
            <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"/>
          </div>

          <div className="p-4 text-center flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white">{p.name}</h3>
            <span className="text-sm text-neutral-300 font-medium">
              {p.role}
            </span>

            <span className="text-xs text-neutral-400">
              {p.subtitle}
            </span>

            {p.username && (
              <div className="inline-block px-3 py-[4px] text-xs font-medium rounded-full bg-white/10 border border-white/20 text-white mt-1">
                {p.username}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

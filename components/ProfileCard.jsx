"use client";

/**
 * ProfileCard Component
 *
 * Displays a personal profile card with image, name, role, subtitle, and optional username badge.
 * The component supports dynamic data through the `items` prop. If no items are provided, it falls
 * back to a predefined default profile, ensuring the UI is always populated.
 *
 * @component
 *
 * @param {Object[]} [items=[]] - Array of profile objects to be rendered.
 * @param {string} items[].image - Image URL of the profile.
 * @param {string} items[].name - Full name of the person.
 * @param {string} items[].role - Primary role (e.g., position / field of study).
 * @param {string} items[].subtitle - Additional description (university, batch, projects etc.).
 * @param {string} [items[].username] - Optional social/username displayed as a badge.
 *
 * @example
 * ```jsx
 * <ProfileCard
 *   items={[
 *     {
 *       image: "/profile.jpg",
 *       name: "John Doe",
 *       role: "Software Engineer",
 *       subtitle: "5+ Years Experience",
 *       username: "@johndoe",
 *     }
 *   ]}
 * />
 * ```
 *
 * @remarks
 * - When hovered, the card slightly scales and the image zooms for a cinematic effect.
 * - Fully responsive and works best within a width-constrained container (max-w-sm).
 *
 * @returns {JSX.Element} A styled profile card UI
 */

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
        <div
          key={i}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition-all duration-300 hover:scale-[1.03] hover:border-neutral-600"
        >
          <div className="w-full h-78 sm:h-80 md:h-[16rem] overflow-hidden">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-4 text-center flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white">{p.name}</h3>

            <span className="text-sm text-neutral-300 font-medium">
              {p.role}
            </span>

            <span className="text-xs text-neutral-400">{p.subtitle}</span>

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

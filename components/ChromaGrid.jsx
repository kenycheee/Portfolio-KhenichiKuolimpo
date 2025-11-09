/**
 * ChromaGrid.jsx
 *
 * Interactive animated grid with gradient cards and mouse-driven lighting effects.
 * Features smooth GSAP spotlight animation, grayscale overlay masks, and responsive layout.
 */

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * @component ChromaGrid
 * @description
 * Displays a responsive animated card grid with chromatic gradients and
 * dynamic mouse-based lighting. Includes grayscale and fade overlay masks
 * that smoothly follow the cursor and maintain rounded corners.
 *
 * @param {Object[]} [items] - Array of card data objects.
 * @param {string} [className] - Optional additional classes for the grid container.
 * @param {number} [radius=220] - Spotlight radius (in px).
 * @param {number} [damping=0.45] - Smoothness factor for spotlight motion.
 * @param {number} [fadeOut=0.6] - Fade duration (seconds) when leaving the grid area.
 * @param {string} [ease='power3.out'] - GSAP easing type for the spotlight animation.
 *
 * @example
 * <ChromaGrid
 *   items={[
 *     {
 *       image: 'https://i.pravatar.cc/300?img=5',
 *       title: 'Jane Doe',
 *       subtitle: 'UI Designer',
 *       handle: '@janedoe',
 *       borderColor: '#ff6bcb',
 *       gradient: 'linear-gradient(145deg, #ff6bcb, #000)',
 *       url: 'https://github.com/janedoe'
 *     }
 *   ]}
 * />
 */
export default function ChromaGrid({
  items,
  className = '',
  radius = 220,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  // Demo fallback data
  const demo = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#559b70ff',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: 'https://github.com/'
    }
  ];
  const data = items?.length ? items : demo;

  // Initialize spotlight position at the center
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  /** Move the spotlight to the specified coordinates */
  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  /** Triggered on pointer move inside the grid */
  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  /** Triggered when pointer leaves the grid */
  const handleLeave = () => {
    gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut, overwrite: true });
  };

  /** Open card URL in new tab */
  const handleCardClick = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  /** Update relative cursor position for per-card spotlight effect */
  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-center items-center gap-4 w-fit h-fit mx-auto box-border ${className}`}
      style={{
        '--r': `${radius}px`,
        '--x': '50%',
        '--y': '50%'
      }}
    >
      {/* === Cards === */}
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          className="relative flex flex-col w-[320px] rounded-[20px] overflow-hidden border border-[#333] transition duration-300 ease-in-out hover:border-[var(--card-border)] cursor-pointer"
          style={{
            '--card-border': c.borderColor || 'transparent',
            background: c.gradient,
            '--spotlight-color': 'rgba(0, 110, 255, 0.3)'
          }}
        >
          {/* Spotlight hover layer */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none z-10 hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
            }}
          />

          {/* Image */}
          <div className="relative z-10 w-full h-[320px] overflow-hidden">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-full h-full object-cover rounded-t-[14px] block"
            />
          </div>

          {/* Footer content */}
          <footer className="relative z-20 w-full p-4 text-center text-white backdrop-blur-md bg-black/45 border-t border-white/10 flex flex-col items-center gap-1 rounded-b-[14px] transition-all duration-300 hover:bg-black/65">
            <h3 className="text-[1.45rem] font-bold m-0 tracking-[0.5px]">{c.title}</h3>
            {c.handle && (
              <span className="mt-[0.4rem] text-[0.9rem] font-medium text-white bg-white/15 border border-white/25 rounded-full px-3 py-[0.25rem] backdrop-blur-sm transition-all duration-300 hover:bg-neutral-700/30">
                {c.handle}
              </span>
            )}
            <p className="text-[1rem] text-[#e0e0e0] font-normal leading-[1.4] m-0">
              {c.subtitle}
            </p>
          </footer>
        </article>
      ))}
    </div>
  );
}

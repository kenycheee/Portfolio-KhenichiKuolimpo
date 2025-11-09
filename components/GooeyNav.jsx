import { useRef, useEffect, useState } from 'react';

/**
 * GooeyNav Component
 *
 * A modern interactive navigation bar featuring a "gooey" morphing highlight effect.
 * The highlight smoothly transitions between items when switching, adapting to size
 * and position changes on different screen widths.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {{ label: string, href: string }[]} props.items - Navigation items to display.
 * @param {number} [props.initialActiveIndex=0] - The initially active navigation index.
 *
 * @example
 * <GooeyNav
 *   items={[
 *     { label: 'Home', href: '#' },
 *     { label: 'Projects', href: '#projects' },
 *     { label: 'Contact', href: '#contact' }
 *   ]}
 *   initialActiveIndex={0}
 * />
 */
const GooeyNav = ({ items, initialActiveIndex = 0 }) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const effectRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  /** Update the gooey highlight position and size relative to the clicked element */
  const updateEffectPosition = (element) => {
    if (!containerRef.current || !effectRef.current) return;

    const pos = element.getBoundingClientRect();
    const offsetX = element.offsetLeft - containerRef.current.scrollLeft;
    const offsetY = element.offsetTop - containerRef.current.scrollTop;

    Object.assign(effectRef.current.style, {
      left: `${offsetX}px`,
      top: `${offsetY}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    });

    effectRef.current.innerText = element.innerText;
  };

  /** Handle click to change active navigation item */
  const handleClick = (e, index) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;
    setActiveIndex(index);
    updateEffectPosition(liEl);

    if (effectRef.current) {
      effectRef.current.classList.remove('active');
      void effectRef.current.offsetWidth; // Force reflow for animation restart
      effectRef.current.classList.add('active');
    }
  };

  /** Handle keyboard activation for accessibility */
  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) handleClick({ currentTarget: liEl }, index);
    }
  };

  /** Sync the gooey highlight on mount and resize */
  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      effectRef.current?.classList.add('active');
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) updateEffectPosition(currentActiveLi);
    });
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <>
      <style>
        {`
          :root {
            --linear-ease: linear(
              0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 
              1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949,
              0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%,
              1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1
            );
          }

          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
            color: white;
            transition: color 0.3s ease;
            will-change: left, top, width, height, transform;
          }

          .effect.active {
            color: black;
          }

          .effect::after {
            content: "";
            position: absolute;
            inset: 0;
            background: white;
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 9999px;
          }

          .effect.active::after {
            animation: pill 0.3s ease both;
          }

          @keyframes pill {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          li.active {
            color: black;
            text-shadow: none;
          }

          li.active::after {
            opacity: 1;
            transform: scale(1);
          }

          li::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 8px;
            background: white;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
            z-index: -1;
          }

          @media (max-width: 640px) {
            nav ul {
              gap: 0.5rem !important;
              justify-content: center !important;
              flex-wrap: wrap !important;
            }

            li a {
              padding: 0.4em 0.7em !important;
              font-size: 0.9rem !important;
            }

            .effect {
              transform: translateY(2px);
            }
          }
        `}
      </style>

      <div className="relative" ref={containerRef}>
        <nav
          className="flex relative justify-center"
          style={{ transform: 'translate3d(0, 0, 0.01px)' }}
        >
          <ul
            ref={navRef}
            className="flex gap-8 list-none p-0 px-4 m-0 relative z-[3] flex-wrap justify-center"
            style={{
              color: 'white',
              textShadow: '0 1px 1px hsl(205deg 30% 10% / 0.2)'
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`rounded-full relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease text-white ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                <a
                  onClick={(e) => handleClick(e, index)}
                  href={item.href}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="outline-none py-[0.6em] px-[1em] inline-block sm:py-[0.5em] sm:px-[0.8em] text-sm sm:text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Gooey morphing effect element */}
        <span className="effect" ref={effectRef} />
      </div>
    </>
  );
};

export default GooeyNav;

/**
 * GlareHover — A hover interaction wrapper that adds a sweeping light/glare animation.
 *
 * Features:
 * - Smooth light reflection animation on hover
 * - Customizable color, opacity, angle, duration & size
 * - Optional play-once mode (glare runs only once per hover)
 * - Fully wraps any children component (images, cards, buttons, etc.)
 *
 * Usage:
 * <GlareHover glareColor="#00C2FF">
 *   <div className="card">Hover me!</div>
 * </GlareHover>
 *
 * 🛠 Props:
 * @param {React.ReactNode} children - The wrapped element(s) to animate.
 * @param {string} [glareColor='#39a4f0'] - Color of the glare in HEX format.
 * @param {number} [glareOpacity=0.5] - Opacity of the glare (0–1).
 * @param {number} [glareAngle=-45] - Glare sweep angle in degrees.
 * @param {number} [glareSize=250] - Glare size (% of element surface).
 * @param {number} [transitionDuration=650] - Animation duration in ms.
 * @param {boolean} [playOnce=false] - If true, resets glare instantly after exit.
 * @param {string} [className=''] - Additional wrapper class.
 * @param {object} [style={}] - Inline styles for wrapper.
 */

import { useRef } from 'react';

const GlareHover = ({
  children,
  glareColor = '#39a4f0',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {}
}) => {
  const overlayRef = useRef(null);

  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%, 0 0';
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = '100% 100%, 0 0';
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    if (playOnce) {
      el.style.transition = 'none';
      el.style.backgroundPosition = '-100% -100%, 0 0';
    } else {
      el.style.transition = `${transitionDuration}ms ease`;
      el.style.backgroundPosition = '-100% -100%, 0 0';
    }
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `linear-gradient(${glareAngle}deg,
      hsla(0,0%,0%,0) 60%,
      ${rgba} 70%,
      hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-100% -100%, 0 0',
    pointerEvents: 'none',
    borderRadius: 'inherit'
  };

  return (
    <div
      className={`relative inline-block overflow-hidden cursor-pointer ${className}`}
      style={{ ...style }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div ref={overlayRef} style={overlayStyle} />
      {children}
    </div>
  );
};

export default GlareHover;

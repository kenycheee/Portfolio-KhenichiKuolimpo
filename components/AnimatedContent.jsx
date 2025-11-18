/**
 * AnimatedContent Component
 * A reusable GSAP + ScrollTrigger animation wrapper component.
 * Wrap any element and it will animate into view when scrolled.
 *
 * @component
 *
 * @param {React.ReactNode} children
 * The content to be animated (required).
 *
 * @param {number} [distance=100]
 * Distance in pixels that the element offsets before animating to 0.
 *
 * @param {'horizontal' | 'vertical'} [direction='vertical']
 * Determines animation direction: "horizontal" = X axis, "vertical" = Y axis.
 *
 * @param {boolean} [reverse=false]
 * If true, animation starts from the opposite direction of `direction`.
 *
 * @param {number} [duration=0.8]
 * Length of the animation in seconds.
 *
 * @param {string} [ease='power3.out']
 * Easing type for GSAP animation.
 *
 * @param {number} [initialOpacity=0]
 * Initial opacity before animation (0 = invisible).
 *
 * @param {boolean} [animateOpacity=true]
 * Toggle opacity animation. If false, opacity stays at 1.
 *
 * @param {number} [scale=1]
 * Scale multiplier applied initially (e.g., 0.9 = slight zoom-in effect).
 *
 * @param {number} [threshold=0.1]
 * Percentage of viewport height required before animation triggers.
 * Example: 0.1 means animation fires after 10% of the element is visible.
 *
 * @param {number} [delay=0]
 * Animation delay in seconds.
 *
 * @param {boolean} [triggerOnce=true]
 * If true, animation plays once and won't reverse. If false, it reverses on scroll.
 *
 * @param {() => void} [onComplete]
 * Callback executed after animation completes.
 *
 * @returns {JSX.Element}
 * Wrapper that animates its children on scroll.
 */
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  triggerOnce = true,
  onComplete
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1
    });

    const tween = gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete,
      scrollTrigger: {
        trigger: el,
        start: `top ${startPct}%`,
        toggleActions: triggerOnce
          ? 'play none none none'
          : 'play reverse play reverse',
        once: triggerOnce
      }
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    triggerOnce,
    onComplete
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;

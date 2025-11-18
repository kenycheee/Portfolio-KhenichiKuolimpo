'use client';
import Particles from "../../components/Background/Particles";

/**
 * Background Component
 *
 * Renders a full-screen animated particle background using the `Particles` component.
 * Intended to sit behind all page content and run continuously without interfering with layout.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered particle background layer.
 *
 * @remarks
 * - Positioned using `fixed` to cover entire viewport.
 * - `z-0` ensures the background stays behind all foreground elements.
 * - Particles can react to cursor movement depending on the props provided.
 *
 * @example
 * // Place at app level to apply background globally
 * <Background />
 *
 * @see Particles component for full configurable animation logic.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      <Particles
        particleColors={['#373785', '#8361f3']}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}

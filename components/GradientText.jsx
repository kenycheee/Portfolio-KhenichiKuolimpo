/**
 * GradientText Component
 *
 * A React component that renders animated gradient text with an optional glowing border.
 * The gradient smoothly animates across the text, creating a dynamic colorful effect.
 * No visible background or box is rendered — only the text (and optional border glow) is shown.
 *
 * @component
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The text or content inside the component.
 * @param {string} [props.className=''] - Optional Tailwind or custom class names for external styling.
 * @param {string[]} [props.colors=['#ffaa40', '#9c40ff', '#ffaa40']] - Array of gradient colors used for animation.
 * @param {number} [props.animationSpeed=8] - Duration (in seconds) of one full gradient animation loop.
 * @param {boolean} [props.showBorder=false] - Whether to render a glowing animated border outline around the text.
 *
 * @example
 * // Basic animated gradient text
 * <GradientText>
 *   Hello World
 * </GradientText>
 *
 * @example
 * // With custom colors and faster animation
 * <GradientText
 *   colors={['#ff4d4d', '#4dff91', '#4da6ff']}
 *   animationSpeed={5}
 * >
 *   Fast Gradient Text
 * </GradientText>
 *
 * @example
 * // With glowing animated border
 * <GradientText showBorder className="text-5xl font-bold">
 *   Gradient Glow
 * </GradientText>
 */

export default function GradientText({
  children,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed = 8,
  showBorder = false
}) {
  // Gradient animation styling
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Animated gradient text */}
      <span
        className="text-transparent bg-cover animate-gradient relative z-20"
        style={{
          ...gradientStyle,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '300% 100%',
        }}
      >
        {children}
      </span>

      {/* Optional glowing border effect */}
      {showBorder && (
        <span
          className="absolute inset-0 rounded-lg border border-transparent pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            backgroundSize: '300% 100%',
          }}
        />
      )}
    </div>
  );
}

/**
 * GradientText Component
 *
 * A React component that renders text with a looping animated gradient effect.
 * Optionally, it can also display a matching animated gradient border around the text container.
 *
 * @component
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The content or text inside the component.
 * @param {string} [props.className=''] - Optional custom CSS classes for external styling.
 * @param {string[]} [props.colors=['#ffaa40', '#9c40ff', '#ffaa40']] - Array of gradient colors.
 * @param {number} [props.animationSpeed=8] - Gradient animation speed (in seconds).
 * @param {boolean} [props.showBorder=false] - Whether to display an animated gradient border.
 *
 * @example
 * <GradientText
 *   colors={['#ff4d4d', '#4dff91']}
 *   animationSpeed={6}
 *   showBorder
 * >
 *   Animated Gradient Text
 * </GradientText>
 */

export default function GradientText({
  children,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed = 8,
  showBorder = false
}) {
  /** CSS variables for gradient and animation speed */
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
    >
      {/* Optional animated gradient border */}
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: '300% 100%'
          }}
        >
          {/* Inner dark overlay for stronger gradient contrast */}
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
        </div>
      )}

      {/* Animated gradient text */}
      <div
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '300% 100%'
        }}
      >
        {children}
      </div>
    </div>
  );
}

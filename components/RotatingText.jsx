'use client';

import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Utility function to combine multiple class names conditionally.
 * @param {...(string|boolean|undefined)} classes - Class names to join.
 * @returns {string} Combined class name string.
 */
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * RotatingText Component
 * 
 * Animated text rotator that cycles through multiple strings with smooth
 * motion transitions, supporting per-character, per-word, or per-line animation.
 * 
 * @component
 * @example
 * ```jsx
 * <RotatingText
 *   texts={["Hello", "World", "Animations!"]}
 *   rotationInterval={2000}
 *   splitBy="characters"
 *   staggerDuration={0.05}
 * />
 * ```
 * 
 * @param {Object} props - Component props.
 * @param {string[]} props.texts - Array of text strings to rotate through.
 * @param {Object} [props.transition={ type: 'spring', damping: 25, stiffness: 300 }] - Motion transition config.
 * @param {Object} [props.initial={ y: '100%', opacity: 0 }] - Initial animation state for text segments.
 * @param {Object} [props.animate={ y: 0, opacity: 1 }] - Target animation state for text segments.
 * @param {Object} [props.exit={ y: '-120%', opacity: 0 }] - Exit animation state for text segments.
 * @param {'wait'|'sync'|'popLayout'} [props.animatePresenceMode='wait'] - AnimatePresence mode.
 * @param {boolean} [props.animatePresenceInitial=false] - Whether AnimatePresence starts with initial animation.
 * @param {number} [props.rotationInterval=2000] - Time interval (ms) between text rotations.
 * @param {number} [props.staggerDuration=0] - Delay between animating each character.
 * @param {'first'|'last'|'center'|'random'|number} [props.staggerFrom='first'] - Animation stagger origin.
 * @param {boolean} [props.loop=true] - Whether the rotation loops indefinitely.
 * @param {boolean} [props.auto=true] - Whether to auto-rotate text automatically.
 * @param {'characters'|'words'|'lines'|string} [props.splitBy='characters'] - How to split text before animating.
 * @param {function} [props.onNext] - Callback fired when text changes to the next index.
 * @param {string} [props.mainClassName] - Class applied to main wrapper span.
 * @param {string} [props.splitLevelClassName] - Class applied to each word/line container.
 * @param {string} [props.elementLevelClassName] - Class applied to each animated element (char/word).
 * @param {...any} rest - Additional props passed to the outer motion span.
 * 
 * @property {Function} next - Manually trigger next rotation.
 * @property {Function} previous - Manually trigger previous rotation.
 * @property {Function} jumpTo - Jump to specific text index.
 * @property {Function} reset - Reset rotation to first text.
 * 
 * @returns {JSX.Element} Animated rotating text component.
 */
const RotatingText = forwardRef((props, ref) => {
  const {
    texts,
    transition = { type: 'spring', damping: 25, stiffness: 300 },
    initial = { y: '100%', opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: '-120%', opacity: 0 },
    animatePresenceMode = 'wait',
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = 'first',
    loop = true,
    auto = true,
    splitBy = 'characters',
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Split string into grapheme clusters (handles emojis, diacritics, etc.)
  const splitIntoCharacters = text => {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text), segment => segment.segment);
    }
    return Array.from(text);
  };

  // Build split structure for words/lines/characters
  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    if (splitBy === 'characters') {
      const words = currentText.split(' ');
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1
      }));
    }
    if (splitBy === 'words') {
      return currentText.split(' ').map((word, i, arr) => ({
        characters: [word],
        needsSpace: i !== arr.length - 1
      }));
    }
    if (splitBy === 'lines') {
      return currentText.split('\n').map((line, i, arr) => ({
        characters: [line],
        needsSpace: i !== arr.length - 1
      }));
    }
    return currentText.split(splitBy).map((part, i, arr) => ({
      characters: [part],
      needsSpace: i !== arr.length - 1
    }));
  }, [texts, currentTextIndex, splitBy]);

  // Calculate delay for stagger animation
  const getStaggerDelay = useCallback(
    (index, totalChars) => {
      const total = totalChars;
      if (staggerFrom === 'first') return index * staggerDuration;
      if (staggerFrom === 'last') return (total - 1 - index) * staggerDuration;
      if (staggerFrom === 'center') {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === 'random') {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - index) * staggerDuration;
      }
      return Math.abs(staggerFrom - index) * staggerDuration;
    },
    [staggerFrom, staggerDuration]
  );

  // Handle index change and trigger callback
  const handleIndexChange = useCallback(
    newIndex => {
      setCurrentTextIndex(newIndex);
      if (onNext) onNext(newIndex);
    },
    [onNext]
  );

  // Controls for manual rotation
  const next = useCallback(() => {
    const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
    if (nextIndex !== currentTextIndex) handleIndexChange(nextIndex);
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const previous = useCallback(() => {
    const prevIndex = currentTextIndex === 0 ? (loop ? texts.length - 1 : currentTextIndex) : currentTextIndex - 1;
    if (prevIndex !== currentTextIndex) handleIndexChange(prevIndex);
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const jumpTo = useCallback(
    index => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1));
      if (validIndex !== currentTextIndex) handleIndexChange(validIndex);
    },
    [texts.length, currentTextIndex, handleIndexChange]
  );

  const reset = useCallback(() => {
    if (currentTextIndex !== 0) handleIndexChange(0);
  }, [currentTextIndex, handleIndexChange]);

  // Expose control functions through ref
  useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }), [next, previous, jumpTo, reset]);

  // Auto rotation interval
  useEffect(() => {
    if (!auto) return;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto]);

  return (
    <motion.span
      className={cn('flex flex-wrap whitespace-pre-wrap relative', mainClassName)}
      {...rest}
      layout
      transition={transition}
    >
      <span className="sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.span
          key={currentTextIndex}
          className={cn(splitBy === 'lines' ? 'flex flex-col w-full' : 'flex flex-wrap whitespace-pre-wrap relative')}
          layout
          aria-hidden="true"
        >
          {elements.map((wordObj, wordIndex, array) => {
            const previousCharsCount = array.slice(0, wordIndex).reduce((sum, word) => sum + word.characters.length, 0);
            return (
              <span key={wordIndex} className={cn('inline-flex', splitLevelClassName)}>
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(
                        previousCharsCount + charIndex,
                        array.reduce((sum, word) => sum + word.characters.length, 0)
                      )
                    }}
                    className={cn('inline-block', elementLevelClassName)}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && <span className="whitespace-pre"> </span>}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = 'RotatingText';
export default RotatingText;

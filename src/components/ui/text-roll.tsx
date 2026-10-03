'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TextRollProps {
  children: string;
  className?: string;
  duration?: number;
  getEnterDelay?: (index: number) => number;
  getExitDelay?: (index: number) => number;
  variants?: {
    enter: {
      initial: Record<string, any>;
      animate: Record<string, any>;
    };
    exit: {
      initial: Record<string, any>;
      animate: Record<string, any>;
    };
  };
  transition?: Record<string, any>;
}

export function TextRoll({
  children,
  className = '',
  duration = 0.5,
  getEnterDelay = (index) => index * 0.05,
  getExitDelay = (index) => index * 0.05 + 0.15,
  variants = {
    enter: {
      initial: { rotateX: 0 },
      animate: { rotateX: 90 },
    },
    exit: {
      initial: { rotateX: 90 },
      animate: { rotateX: 0 },
    },
  },
  transition = { ease: 'easeOut' },
}: TextRollProps) {
  const [key, setKey] = useState(0);

  const text = typeof children === 'string' ? children.trim() : String(children);

  const handleMouseEnter = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <span
      key={key}
      onMouseEnter={handleMouseEnter}
      className={`inline-block [perspective:1000px] cursor-pointer ${className}`}
    >
      {text.split('').map((letter, index) => {
        if (letter === ' ') {
          return <span key={index}>&nbsp;</span>;
        }

        return (
          <span
            key={index}
            className="relative inline-block overflow-hidden [transform-style:preserve-3d]"
          >
            <motion.span
              className="inline-block [transform-origin:top]"
              initial={variants.enter.initial}
              animate={variants.enter.animate}
              transition={{
                ...transition,
                duration,
                delay: getEnterDelay(index),
              }}
            >
              {letter}
            </motion.span>
            <motion.span
              className="absolute inset-0 inline-block [transform-origin:bottom]"
              initial={variants.exit.initial}
              animate={variants.exit.animate}
              transition={{
                ...transition,
                duration,
                delay: getExitDelay(index),
              }}
            >
              {letter}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

export default TextRoll;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function BlurText({
  text = "",
  delay = 0,
  animateBy = "words",
  direction = "top",
  stepDuration = 0.35,
  className = ""
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  const isWords = animateBy === "words";
  const elements = isWords ? text.split(" ") : text.split("");
  const yOffset = direction === "top" ? -20 : direction === "bottom" ? 20 : 0;

  return (
    <span ref={ref} className={className}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          className="inline-block whitespace-pre"
          initial={{ filter: "blur(10px)", opacity: 0, y: yOffset }}
          animate={isInView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
          transition={{
            duration: stepDuration,
            delay: (delay / 1000) + (index * 0.08),
            ease: [0.16, 1, 0.3, 1], // easeOut for smooth landing
          }}
        >
          {element}
          {isWords && index < elements.length - 1 && " "}
        </motion.span>
      ))}
    </span>
  );
}

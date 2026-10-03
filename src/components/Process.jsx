import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  { num: "01", title: "DISCOVER", desc: "Understand the idea and requirements." },
  { num: "02", title: "PLAN", desc: "Define features and technology." },
  { num: "03", title: "BUILD", desc: "Design and develop the solution." },
  { num: "04", title: "REFINE", desc: "Rigorous testing and improvements." },
  { num: "05", title: "DELIVER", desc: "Launch the final product." },
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Continuous auto-loop effect
  useEffect(() => {
    if (shouldReduceMotion) return; // Respect reduced motion preference

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2500); // 2.5 seconds per step
    
    // Timer clears and restarts if the user manually taps a step, 
    // seamlessly resuming the automatic animation after their interaction.
    return () => clearInterval(timer);
  }, [activeIndex, shouldReduceMotion]);

  return (
    <section id="process" className="py-32 bg-studio-800 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent-cyan/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            The Process.
          </h2>
          <p className="mt-4 text-content-muted text-sm max-w-xl">
            Watch our development lifecycle unfold, or tap any phase to explore.
          </p>
        </motion.div>

        {/* Interactive Continuous Timeline */}
        <div className="relative">
          {/* Desktop Progress Line Track */}
          <div className="absolute top-4 left-0 w-full h-[2px] bg-white/5 rounded-full hidden md:block z-0"></div>
          
          {/* Desktop Active Progress Line */}
          <motion.div 
            className="absolute top-4 left-0 h-[2px] bg-gradient-to-r from-accent-cyan/10 via-accent-cyan to-accent-cyan hidden md:block rounded-full shadow-[0_0_15px_rgba(0,229,255,0.8)] z-0 origin-left"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          ></motion.div>

          {/* Continuous Flowing Energy Pulse */}
          {!shouldReduceMotion && (
            <motion.div 
              className="absolute top-4 hidden md:flex items-center justify-center z-20 pointer-events-none"
              animate={{ left: `${(activeIndex / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ x: "-50%", y: "-50%", marginTop: "1px" }}
            >
              <div className="w-16 h-2 bg-accent-cyan rounded-full blur-[4px]"></div>
              <div className="absolute w-6 h-[4px] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
            </motion.div>
          )}

          <div className="flex flex-col md:flex-row gap-6 md:gap-0 relative z-10">
            {steps.map((step, i) => {
              const isActive = i === activeIndex;
              const isPassed = i <= activeIndex;

              return (
                <motion.div 
                  key={i}
                  className="flex-1 relative cursor-pointer outline-none touch-manipulation"
                  onClick={() => setActiveIndex(i)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Mobile Vertical Line Track */}
                  <div className="md:hidden absolute left-[15px] top-12 bottom-[-24px] w-[2px] bg-white/5 z-0 group-last:bg-transparent overflow-hidden">
                    {/* Mobile Active Vertical Line */}
                    <motion.div 
                      className="w-full bg-accent-cyan shadow-[0_0_15px_rgba(0,229,255,0.8)]"
                      initial={{ height: "0%" }}
                      animate={{ height: isPassed ? "100%" : "0%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Node Indicator */}
                  <div className="flex items-center mb-4 md:mb-10 relative z-10">
                    <motion.div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                        isActive || isPassed ? "border-accent-cyan shadow-[0_0_15px_rgba(0,229,255,0.3)]" : "border-white/10"
                      }`}
                      animate={{ 
                        backgroundColor: isActive ? "rgba(0, 229, 255, 0.1)" : "rgba(7, 11, 20, 1)",
                        scale: isActive ? 1.2 : 1
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <motion.div 
                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${isActive || isPassed ? "bg-accent-cyan" : "bg-white/20"}`}
                        animate={{ scale: isActive ? 1.5 : 1 }}
                      />
                    </motion.div>
                  </div>

                  {/* Interactive Glass Card */}
                  <motion.div 
                    className={`p-5 md:p-6 rounded-2xl border transition-all duration-300 md:mr-4 ${
                      isActive 
                        ? "bg-studio-900 border-accent-cyan/40 shadow-[0_8px_32px_rgba(0,229,255,0.15)]" 
                        : "bg-studio-900/40 border-white/5 hover:border-white/10"
                    }`}
                    animate={{ 
                      y: isActive ? -12 : 0,
                      opacity: isActive ? 1 : 0.4
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <span className={`text-sm font-display tracking-widest font-bold block mb-3 transition-colors duration-300 ${
                      isActive ? "text-accent-cyan" : "text-content-muted"
                    }`}>
                      {step.num}
                    </span>
                    <h3 className={`font-display text-xl font-bold mb-2 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/50"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? "text-content-primary" : "text-content-muted"
                    }`}>
                      {step.desc}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { SplineScene } from "./ui/splite";

const servicesList = [
  {
    title: "Website Development",
    desc: "Business websites, portfolios, landing pages and responsive web experiences.",
  },
  {
    title: "Web Applications",
    desc: "Custom dashboards, backend systems, APIs and database-driven applications.",
  },
  {
    title: "AI & Data",
    desc: "AI applications, computer vision, analytics and data visualization.",
  },
  {
    title: "Student Projects",
    desc: "Final-year, mini and practical software projects.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-5% 0px -5% 0px" });

  // Normalized cursor coordinates (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end fluid response and settling
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Subtle natural 3D response without aggressive movement
  const translateX = useTransform(smoothX, [-1, 1], [-22, 22]);
  const translateY = useTransform(smoothY, [-1, 1], [-18, 18]);
  const rotateX = useTransform(smoothY, [-1, 1], [3.5, -3.5]);
  const rotateY = useTransform(smoothX, [-1, 1], [-4, 4]);

  // Activate cursor tracking only within the What We Do section
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(Math.max(-1, Math.min(1, x)));
    mouseY.set(Math.max(-1, Math.min(1, y)));
  };

  const handleMouseLeave = () => {
    // Smoothly return toward resting position when cursor exits section
    mouseX.set(0);
    mouseY.set(0);
  };

  // Ensure robot rests when outside of viewport
  useEffect(() => {
    if (!isInView) {
      mouseX.set(0);
      mouseY.set(0);
    }
  }, [isInView, mouseX, mouseY]);

  return (
    <section
      id="services"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-32 bg-studio-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-cyan/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="font-display text-sm tracking-[0.2em] text-accent-orange mb-4 uppercase">Capabilities</h2>
          <p className="font-display text-4xl sm:text-5xl font-bold">What We Do.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT SIDE: Existing What We Do content/list */}
          <div className="lg:col-span-7 border-t border-white/10">
            {servicesList.map((svc, i) => (
              <motion.div
                key={i}
                className="group flex items-center justify-between py-6 sm:py-7 border-b border-white/5 hover:border-accent-cyan/30 transition-colors cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 w-full pr-4">
                  <span className="font-display text-content-muted text-lg group-hover:text-accent-cyan transition-colors flex-shrink-0">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-content-primary group-hover:text-white transition-colors mb-1">
                      {svc.title}
                    </h3>
                    <p className="text-content-secondary text-sm leading-relaxed max-w-md">
                      {svc.desc}
                    </p>
                  </div>
                </div>
                
                <div className="hidden sm:flex ml-4 items-center justify-center w-11 h-11 rounded-full border border-white/10 group-hover:border-accent-cyan group-hover:bg-accent-cyan/10 transition-all transform group-hover:-rotate-45 flex-shrink-0">
                  <svg className="w-5 h-5 text-content-muted group-hover:text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE: Floating 3D Robot without card box, blending naturally with subtle cursor follow */}
          <div
            className="lg:col-span-5 w-full h-[400px] sm:h-[480px] lg:h-[600px] relative flex items-center justify-center"
            aria-label="Interactive 3D robot"
          >
            {/* Seamless ambient blend */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,229,255,0.05),_transparent_72%)] pointer-events-none"></div>

            <motion.div
              style={{
                x: translateX,
                y: translateY,
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1000,
              }}
              className="w-full h-full relative"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

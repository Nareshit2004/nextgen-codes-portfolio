import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.1] mb-6">
            FROM IDEA TO <br />
            <span className="text-gradient-cyan">DIGITAL PRODUCT.</span>
          </h2>
          <p className="text-content-secondary text-lg leading-relaxed mb-8">
            NextGen Codes is a specialised digital development studio. We transform concepts into production-ready web applications, AI solutions, and premium digital experiences that stand out.
          </p>
        </motion.div>
        
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { num: "01", title: "BUILD", desc: "Modern websites & web applications." },
            { num: "02", title: "SOLVE", desc: "AI, data and custom technology solutions." },
            { num: "03", title: "DELIVER", desc: "Responsive, practical and production-ready experiences." },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 border-b border-white/5 pb-6 last:border-0 last:pb-0 group">
              <span className="font-display font-bold text-accent-cyan/50 text-xl group-hover:text-accent-cyan transition-colors">
                {item.num}
              </span>
              <div>
                <h3 className="font-display font-semibold text-lg text-content-primary mb-1 tracking-wide">
                  — {item.title}
                </h3>
                <p className="text-content-secondary text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

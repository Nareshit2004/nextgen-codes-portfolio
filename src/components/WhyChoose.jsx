import React from "react";
import { motion } from "framer-motion";

export default function WhyChoose() {
  return (
    <section id="why" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2 
          className="font-display text-4xl sm:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          BUILT AROUND <br className="md:hidden" />
          <span className="text-gradient-cyan">YOUR IDEA.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-left">
          {[
            { title: "Custom", desc: "No cookie-cutter templates. Everything is architected for your specific requirements." },
            { title: "Responsive", desc: "Flawless experiences designed natively for mobile, tablet, and desktop screens." },
            { title: "Practical", desc: "Focused on solving real business and academic problems, not just writing code." },
            { title: "Interactive", desc: "Modern UI elements and meaningful motion design to captivate users." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-orange"></span> {item.title}
              </h3>
              <p className="text-content-muted text-sm leading-relaxed pl-11">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

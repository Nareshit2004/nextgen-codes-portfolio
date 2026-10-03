import React from "react";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/919345063972?text=" +
  encodeURIComponent(
    "Hi NextGen Codes! I'm interested in your services. I'd like to discuss my website/project requirements."
  );

const emailUrl =
  "mailto:nextgencodes09@gmail.com?subject=" +
  encodeURIComponent("Website / Project Enquiry – NextGen Codes") +
  "&body=" +
  encodeURIComponent(
    "Hi NextGen Codes,\n\nI'm interested in your services and would like to discuss my requirements.\n\nProject/Website Type:\nRequirements:\nExpected Timeline:\n\nThank you."
  );

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-studio-800 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl sm:text-7xl font-bold mb-4 tracking-tight">HAVE AN IDEA?</h2>
          <h2 className="font-display text-5xl sm:text-7xl font-bold text-accent-cyan mb-8 tracking-tight">LET'S BUILD IT.</h2>
          
          <p className="text-lg text-content-secondary max-w-2xl mx-auto mb-12">
            Tell me what you're building and let's turn the idea into a premium digital experience.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-studio-900 rounded-full font-semibold text-lg hover:bg-accent-cyan hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10"
          >
            Start a Conversation <span className="text-xl">→</span>
          </a>

          <div className="mt-16 pt-16 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <a href={whatsappUrl} className="flex items-center gap-3 text-content-secondary hover:text-white transition-colors group">
              <span className="w-10 h-10 rounded-full bg-studio-700 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </span>
              +91 93450 63972
            </a>
            
            <a href={emailUrl} className="flex items-center gap-3 text-content-secondary hover:text-white transition-colors group">
              <span className="w-10 h-10 rounded-full bg-studio-700 flex items-center justify-center group-hover:bg-accent-cyan group-hover:text-studio-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </span>
              nextgencodes09@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-900/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="tag-badge justify-center mx-auto mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Questions we get
            <span className="gradient-text"> all the time</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            If you don&apos;t find your answer here, our team is one message away.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                borderColor: openIndex === i ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.06)",
                background: openIndex === i ? "rgba(59,130,246,0.05)" : "rgba(15,23,42,0.3)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-white font-semibold text-base pr-4">{faq.question}</span>
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: openIndex === i ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${openIndex === i ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  {openIndex === i
                    ? <Minus size={14} className="text-blue-400" />
                    : <Plus size={14} className="text-slate-400" />
                  }
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center p-8 rounded-2xl border border-white/6 bg-white/[0.02]"
        >
          <p className="text-white font-semibold text-lg mb-2">Still have questions?</p>
          <p className="text-slate-400 text-sm mb-5">
            Our team responds to every inquiry within 4 business hours.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-xl shadow-glow-blue"
          >
            Contact Our Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

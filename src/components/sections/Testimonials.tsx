"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="tag-badge justify-center mx-auto mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Client Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            What our clients
            <span className="gradient-text"> actually say</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it. These are the real experiences from the teams we&apos;ve built with.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-10">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative p-8 md:p-12 rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={60} className="text-blue-400" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Content */}
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8">
              &ldquo;{current.content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${current.accentColor}, ${current.accentColor}80)` }}
              >
                {current.avatar}
              </div>
              <div>
                <div className="text-white font-semibold">{current.name}</div>
                <div className="text-slate-400 text-sm">{current.role}, {current.company}</div>
              </div>
              <div className="ml-auto">
                <span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: `${current.accentColor}15`, color: current.accentColor, border: `1px solid ${current.accentColor}30` }}>
                  {current.project}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thumbnails + Nav */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Dots */}
          <div className="flex items-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-2 bg-gradient-to-r from-blue-500 to-purple-500"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Nav buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* All testimonials mini grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              whileHover={{ y: -3 }}
              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                i === active
                  ? "border-blue-500/30 bg-blue-500/10"
                  : "border-white/6 bg-white/[0.02] hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                  style={{ background: t.accentColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-xs font-medium leading-tight">{t.name}</div>
                  <div className="text-slate-500 text-[10px]">{t.company}</div>
                </div>
              </div>
              <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">{t.content}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

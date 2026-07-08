"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { technologies } from "@/data";

const categoryColors = [
  { bg: "#3B82F6", light: "#DBEAFE" },
  { bg: "#8B5CF6", light: "#EDE9FE" },
  { bg: "#06B6D4", light: "#CFFAFE" },
  { bg: "#10B981", light: "#D1FAE5" },
  { bg: "#F59E0B", light: "#FEF3C7" },
  { bg: "#F43F5E", light: "#FFE4E6" },
];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  const active = technologies.find(t => t.category === activeCategory) || technologies[0];

  return (
    <section id="technologies" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="tag-badge justify-center mx-auto mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Technology Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Best-in-class tools for
            <span className="gradient-text"> every layer</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We pick the right tool for every job — not the trendiest one. These are the technologies we trust in production.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {technologies.map((tech, i) => {
            const color = categoryColors[i];
            const isActive = tech.category === activeCategory;
            return (
              <motion.button
                key={tech.category}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(tech.category)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  background: isActive ? `${color.bg}20` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? color.bg + "50" : "rgba(255,255,255,0.06)"}`,
                  color: isActive ? color.bg : "#64748B",
                }}
              >
                {tech.category}
              </motion.button>
            );
          })}
        </div>

        {/* Tech items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
        >
          {active.items.map((item, i) => {
            const colorIdx = technologies.findIndex(t => t.category === activeCategory);
            const color = categoryColors[colorIdx] || categoryColors[0];
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl border cursor-default transition-all duration-300"
                style={{
                  background: "rgba(15,23,42,0.5)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Tech icon placeholder */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-black transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${color.bg}25, ${color.bg}10)`,
                    border: `1px solid ${color.bg}30`,
                    color: color.bg,
                  }}
                >
                  {item.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-slate-300 text-xs font-medium text-center group-hover:text-white transition-colors">
                  {item}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom grid showing all categories compactly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl border border-white/6 bg-white/[0.02]"
        >
          <div className="text-xs text-slate-500 text-center mb-5 uppercase tracking-wider font-medium">Full Stack at a Glance</div>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.flatMap(t => t.items).map((item, i) => (
              <span key={`${item}-${i}`} className="text-xs px-2.5 py-1 rounded-full text-slate-500 border border-white/5 bg-white/[0.02] hover:text-slate-300 hover:border-white/10 transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

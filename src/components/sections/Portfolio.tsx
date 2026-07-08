"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { portfolio } from "@/data";

const categories = ["All", "FinTech", "HealthTech", "EdTech", "E-Commerce", "SaaS", "Logistics"];

export default function Portfolio({ showAll }: { showAll?: boolean }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? portfolio : portfolio.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-[#020617] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-blue-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="tag-badge justify-center mx-auto mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Products we&apos;re proud of,
            <br />
            <span className="gradient-text">results that show it</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every project in our portfolio represents a real business challenge we solved with precision engineering and thoughtful design.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                background: activeFilter === cat ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${activeFilter === cat ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.06)"}`,
                color: activeFilter === cat ? "#93C5FD" : "#64748B",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden border border-white/8 cursor-pointer transition-all duration-300 hover:border-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                style={{ background: "rgba(15,23,42,0.6)" }}
              >
                {/* Project image / gradient */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${project.gradient.replace("from-", "").split(" ").map(c => `var(--tw-gradient-${c})`).join(", ")})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />

                  {/* Project mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-6xl font-black opacity-20 tracking-tight"
                      style={{ color: project.accent }}
                    >
                      {project.title.split(" ")[0].slice(0, 2)}
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: `${project.accent}30`, color: project.accent, border: `1px solid ${project.accent}40` }}>
                    {project.category}
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
                      Featured
                    </div>
                  )}

                  {/* Arrow on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4">
                    {Object.entries(project.stats).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-white text-sm font-bold">{val}</div>
                        <div className="text-slate-600 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded text-slate-500 bg-white/[0.04] border border-white/6">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-xl shadow-glow-blue"
          >
            Start Your Project <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
